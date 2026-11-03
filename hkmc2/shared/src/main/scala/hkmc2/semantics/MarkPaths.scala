package hkmc2
package semantics

import scala.collection.mutable
import hkmc2.utils.*, shorthands.*


/** A finite set of normalized paths, stored most recent crossing first.
  * Equal suffixes share nodes, including when several call-site choices have
  * the same continuation. Operations visit this DAG, not its individual paths.
  * Nodes are immutable; each consuming resolver owns its interning pool.
  *
  * This representation adds no crossings or sites. Every represented path obeys
  * the ordinary Marks invariant and lexical depth bound. For a finite source
  * graph there are finitely many such words and therefore finitely many sets.
  * Joining sets is monotone and idempotent; recursive forwarding cannot build
  * an unbounded tower of union or composition expressions.
  */
private[semantics] final class MarkPaths private (
    val acceptsEmpty: Bool, val branches: Map[MarkPaths.Crossing, MarkPaths],
    val pool: MarkPaths.Pool) extends IdentityEquality:
  def isEmpty: Bool = !acceptsEmpty && branches.isEmpty
  private lazy val entries: Set[ResolutionBoundary] = branches.iterator.flatMap:
    case (MarkPaths.Crossing(true, boundary, _), tail) => tail.entries + boundary
    case _ => Set.empty[ResolutionBoundary]
  .toSet
  private lazy val exits: Set[ResolutionBoundary] = branches.iterator.flatMap:
    case (MarkPaths.Crossing(false, boundary, _), tail) => tail.exits + boundary
    case (_, tail) => tail.exits
  .toSet

  /** Materialize only at an operation that needs individual value interfaces. */
  def foreach(consume: Marks => Unit): Unit =
    def visit(paths: MarkPaths, wrap: Marks => Marks): Unit =
      if paths.acceptsEmpty then consume(wrap(NoMarks))
      paths.branches.foreach: (crossing, tail) =>
        visit(tail, rest => wrap(crossing match
          case MarkPaths.Crossing(true, boundary, site) => EntryMark(boundary, site, rest)
          case MarkPaths.Crossing(false, boundary, site) => rest match
            case rest: ExitMarks => ExitMark(boundary, site, rest)
            case _ => lastWords("An exit path cannot contain a later entry")))
    visit(this, identity)

  private[hkmc2] def nodeCount: Int =
    val seen = mutable.Set.empty[MarkPaths]
    def visit(paths: MarkPaths): Unit = if seen.add(paths) then paths.branches.values.foreach(visit)
    visit(this)
    seen.size

private[semantics] object MarkPaths:
  final case class Crossing(entering: Bool, boundary: ResolutionBoundary, site: Opt[FlowSymbol])

  final class Pool:
    private val nodes = mutable.Map.empty[(Bool, Map[Crossing, MarkPaths]), MarkPaths]
    private val imported = mutable.Map.empty[MarkPaths, MarkPaths]
    val empty: MarkPaths = node(false, Map.empty)
    val identity: MarkPaths = node(true, Map.empty)
    private[hkmc2] def allocatedNodeCount: Int = nodes.size

    private def node(acceptsEmpty: Bool, branches: Map[Crossing, MarkPaths]): MarkPaths =
      val nonempty = branches.filterNot(_._2.isEmpty)
      nodes.getOrElseUpdate((acceptsEmpty, nonempty), new MarkPaths(acceptsEmpty, nonempty, this))

    private def local(paths: MarkPaths): MarkPaths =
      if paths.pool eq this then paths else imported.getOrElseUpdate(paths,
        node(paths.acceptsEmpty, paths.branches.map((step, tail) => step -> local(tail))))

    def single(marks: Marks): MarkPaths = marks match
      case NoMarks => identity
      case EntryMark(boundary, site, rest) => enter(single(rest), boundary, site)
      case ExitMark(boundary, site, rest) => node(false, Map(Crossing(false, boundary, site) -> single(rest)))

    def union(left: MarkPaths, right: MarkPaths): MarkPaths = combine(left, right, true)
    def difference(left: MarkPaths, right: MarkPaths): MarkPaths = combine(left, right, false)

    private def combine(left: MarkPaths, right: MarkPaths, joining: Bool): MarkPaths =
      val seen = mutable.Map.empty[(MarkPaths, MarkPaths), MarkPaths]
      def loop(left: MarkPaths, right: MarkPaths): MarkPaths =
        if left eq right then if joining then left else empty
        else if right.isEmpty then left
        else if left.isEmpty then if joining then right else empty
        else seen.getOrElseUpdate((left, right), {
          val keys = if joining then left.branches.keySet ++ right.branches.keySet else left.branches.keySet
          node(if joining then left.acceptsEmpty || right.acceptsEmpty else left.acceptsEmpty && !right.acceptsEmpty,
            keys.iterator.map(step => step -> loop(left.branches.getOrElse(step, empty), right.branches.getOrElse(step, empty))).toMap)
        })
      loop(local(left), local(right))

    def enter(paths: MarkPaths, boundary: ResolutionBoundary, site: Opt[FlowSymbol]): MarkPaths =
      if paths.isEmpty then empty else
        assert(!paths.entries(boundary), "Repeated entry into the same lexical resolution scope")
        node(false, Map(Crossing(true, boundary, site) -> local(paths)))

    def leave(paths: MarkPaths, boundary: ResolutionBoundary, site: Opt[FlowSymbol], selfContained: Bool): MarkPaths =
      val (downward, upward) = paths.branches.partition(_._1.entering)
      val result = downward.foldLeft(empty):
        case (result, (step, tail)) =>
          assert(step.boundary == boundary, "Entry and exit cross different lexical resolution scopes")
          if site.forall(i => step.site.forall(_ is i)) then union(result, tail) else result
      val uncancelled = node(paths.acceptsEmpty, upward.map((step, tail) => step -> local(tail)))
      if uncancelled.isEmpty then result
      else if selfContained then
        assert(upward.isEmpty, "A self-contained shape does not record exits")
        union(result, identity)
      else
        assert(!uncancelled.exits(boundary), "Repeated exit from the same lexical resolution scope")
        union(result, node(false, Map(Crossing(false, boundary, site) -> uncancelled)))

    def transport(paths: MarkPaths, marks: Ls[Marks], selfContained: Bool): MarkPaths =
      def fragment(paths: MarkPaths, marks: Marks): MarkPaths = marks match
        case NoMarks => paths
        case EntryMark(boundary, site, rest) => enter(fragment(paths, rest), boundary, site)
        case ExitMark(boundary, site, rest) => leave(fragment(paths, rest), boundary, site, selfContained)
      marks.foldLeft(local(paths))(fragment)
