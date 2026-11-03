package hkmc2
package semantics

import org.scalatest.funsuite.AnyFunSuite
import scala.collection.mutable.ArrayBuffer
import hkmc2.syntax.{Fun, Tree}
import hkmc2.utils.*, shorthands.*


/** Algebraic equivalence, compact growth, and consumer isolation cannot be
  * observed in worksheet output. Compare transport with the scalar marks
  * implementation and exercise path sets too large to enumerate.
  */
class MarkPathsTest extends AnyFunSuite:
  private class Harness:
    given owner: Elaborator.State = new Elaborator.State
    given context: ResolutionContext = owner.newResolverState.context
    given DebugPrinter = new DebugPrinter
    given TraceLogger = TraceLogger.silent
    val pool = context.state.markPaths
    def boundary(name: Str): ResolutionBoundary = ResolutionBoundary(TermSymbol(Fun, N, Tree.Ident(name)))
    val outer = boundary("outer")
    val left = boundary("left")
    val right = boundary("right")
    val scopes = List(Nil, List(outer), List(outer, left), List(outer, right))
    val sites = List(N, S(FlowSymbol.app()), S(FlowSymbol.app()))
    def entries(scopes: List[ResolutionBoundary], site: Opt[FlowSymbol]): Marks =
      scopes.foldLeft[Marks](NoMarks)((rest, scope) => EntryMark(scope, site, rest))
    def exits(scopes: List[ResolutionBoundary], site: Opt[FlowSymbol]): Marks =
      scopes.foldRight[ExitMarks](NoMarks)((scope, rest) => ExitMark(scope, site, rest))
    val open = RecordTypeShape(Map.empty, Map.empty)(Term.Rcd(false, Nil), Map.empty)
    def paths(values: Iterable[Marks]): MarkPaths = values.foldLeft(pool.empty)((paths, marks) => pool.union(paths, pool.single(marks)))
    def expanded(paths: MarkPaths): Set[Marks] =
      val result = ArrayBuffer.empty[Marks]
      paths.foreach(result += _)
      result.toSet

  test("collective transport preserves scalar filtering and wildcard provenance"):
    val h = new Harness
    import h.given
    for core <- List[NonMarkedShape](h.open, DynShape())
        from <- h.scopes; to <- h.scopes
        leaving <- h.sites; arriving <- h.sites; consuming <- h.sites do
      val inputs = h.sites.map(h.entries(from, _))
      val route = List(h.exits(from, leaving), h.entries(to, arriving), h.exits(to, consuming))
      val expected = inputs.flatMap: marks =>
        core.exit(marks).exit(route) match
          case Marked(_, path) => Some(path)
          case NoShape => None
      .toSet
      val actual = h.pool.transport(h.paths(inputs), route, core.isSelfContained)
      assert(h.expanded(actual) == expected)
    val captured = h.pool.transport(h.pool.identity,
      List(h.exits(List(h.outer), N), h.entries(List(h.outer), N)), false)
    assert(captured ne h.pool.identity)
    assert(h.expanded(captured) == Set(EntryMark(h.outer, N, ExitMark(h.outer, N, NoMarks))))

  test("union and difference agree with finite sets and import canonical suffixes"):
    val h = new Harness
    val words = h.scopes.flatMap(scope => h.sites.map(h.entries(scope, _))).distinct
    val other = new MarkPaths.Pool
    for offset <- words.indices do
      val left = words.take(offset).toSet
      val right = words.drop(offset / 2).toSet
      val foreign = right.foldLeft(other.empty)((paths, marks) => other.union(paths, other.single(marks)))
      val union = h.pool.union(h.paths(left), foreign)
      assert(h.expanded(union) == left ++ right)
      assert(h.expanded(h.pool.difference(h.paths(left), foreign)) == left -- right)
      assert(h.pool.union(union, foreign) eq union)

  test("joining paths preserves correlations between nested call sites"):
    val h = new Harness
    val first = h.sites(1)
    val second = h.sites(2)
    val crossed = h.paths(List(
      EntryMark(h.left, first, EntryMark(h.outer, second, NoMarks)),
      EntryMark(h.left, second, EntryMark(h.outer, first, NoMarks))))
    val route = List(h.exits(List(h.outer, h.left), first))
    assert(h.pool.transport(crossed, route, false).isEmpty)
    val matching = List(ExitMark(h.left, first, NoMarks), ExitMark(h.outer, second, NoMarks))
    assert(h.pool.transport(crossed, matching, false) eq h.pool.identity)

  test("independent call-site choices retain linear DAG size through filtering and replay"):
    val h = new Harness
    import h.given
    val scopes = (1 to 32).map(i => h.boundary(s"scope$i")).toList
    val first = h.sites(1)
    val second = h.sites(2)
    val paths = scopes.foldLeft(h.pool.identity): (paths, boundary) =>
      val a = h.pool.enter(paths, boundary, first)
      val b = h.pool.enter(paths, boundary, second)
      val joined = h.pool.union(a, b)
      assert(h.pool.difference(joined, a) eq b)
      joined
    // There are 2^32 distinct paths, but each level has one shared suffix.
    assert(paths.nodeCount == scopes.size + 1)
    val source = new TypeViewHost
    val target = new TypeViewHost
    source.publish(TypeView(h.open, paths))
    var deliveries = 0
    source.listen: view =>
      deliveries += 1
      view.transport(List(h.exits(scopes, first))).foreach(target.publish)
    target.listen: _ =>
      source.publish(TypeView(h.open, paths))
    assert(deliveries == 1)
    assert(target.currentShapes.size == 1)
    assert(target.currentShapes.head.paths eq h.pool.identity)
    val allocated = h.pool.allocatedNodeCount
    (1 to 1000).foreach: _ =>
      source.publish(TypeView(h.open, paths))
    assert(deliveries == 1)
    assert(h.pool.allocatedNodeCount == allocated)
    assert(h.pool.transport(paths, List(h.exits(scopes, S(FlowSymbol.app()))), false).isEmpty)

  test("cumulative replay freezes old paths when a callback extends a later core"):
    val h = new Harness
    import h.given
    val host = new TypeViewHost
    val first = DynShape()
    val old = h.pool.single(h.entries(List(h.outer), h.sites(1)))
    val late = h.pool.single(h.entries(List(h.outer), h.sites(2)))
    host.publish(TypeView(first, h.pool.identity))
    host.publish(TypeView(h.open, old))
    val received = ArrayBuffer.empty[Marks]
    host.listen: view =>
      if view.core eq first then host.publish(TypeView(h.open, late))
      else view.paths.foreach(received += _)
    assert(received.size == 2)
    assert(received.toSet == h.expanded(h.pool.union(old, late)))

  test("importers extend collective cycles without sharing mutable path sets"):
    val h = new Harness
    import h.given
    val source = new TypeViewHost
    val target = new TypeViewHost
    source.listen(target.publish)
    target.listen(source.publish)
    val first = h.pool.single(h.entries(List(h.outer), h.sites(1)))
    val second = h.pool.single(h.entries(List(h.outer), h.sites(2)))
    source.publish(TypeView(h.open, h.pool.identity))
    val left = new Elaborator.State().newResolverState.context.inGraph(h.context)
    val right = new Elaborator.State().newResolverState.context.inGraph(h.context)
    source.publish(TypeView(h.open, first))(using left)
    source.publish(TypeView(h.open, second))(using right)
    assert(h.expanded(target.currentShapes.head.paths) == Set(NoMarks))
    assert(h.expanded(target.currentShapes(using left).head.paths) == h.expanded(h.pool.union(h.pool.identity, first)))
    assert(h.expanded(target.currentShapes(using right).head.paths) == h.expanded(h.pool.union(h.pool.identity, second)))
