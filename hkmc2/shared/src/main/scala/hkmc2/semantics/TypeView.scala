package hkmc2
package semantics

import hkmc2.utils.*, shorthands.*


/** Alternatives of one immutable interface. The core includes its complete
  * substitution and captured references: only outer paths are joined, so paths
  * belonging to different substitutions can never form spurious combinations.
  */
private[semantics] sealed trait TypeView:
  def core: NonMarkedShape
  def paths(using ResolutionContext): MarkPaths
  def withCore(core: NonMarkedShape): TypeView
  def foreach(listener: ResolutionContext.Listener)(using ResolutionContext): Unit
  def transport(marks: Ls[Marks])(using ResolutionContext, TL): Opt[TypeView]

private[semantics] object TypeView:
  type Listener = TypeView => ResolutionContext ?=> Unit
  // Most publications carry one path. Keep their original value and use the
  // scalar mark operations until a host joins different paths of the same core.
  // Replays of singleton views then retain the value's member-cache identity.
  private final case class Single(value: TermShape) extends TypeView:
    private val parts = Marked.unapply(value)
    val core: NonMarkedShape = parts._1
    val marks: Marks = parts._2
    def paths(using ResolutionContext): MarkPaths = rctx.state.markPaths.single(marks)
    def withCore(core: NonMarkedShape): TypeView = single(Marked(core, marks))
    def foreach(listener: ResolutionContext.Listener)(using ResolutionContext): Unit = listener(value)
    def transport(marks: Ls[Marks])(using ResolutionContext, TL): Opt[TypeView] = value.exit(marks) match
      case value: TermShape => S(single(value))
      case NoShape => N
  private final case class Collective(core: NonMarkedShape, savedPaths: MarkPaths) extends TypeView:
    def paths(using ResolutionContext): MarkPaths = savedPaths
    def withCore(core: NonMarkedShape): TypeView = Collective(core, savedPaths)
    def foreach(listener: ResolutionContext.Listener)(using ResolutionContext): Unit =
      savedPaths.foreach(marks => listener(Marked(core, marks)))
    def transport(marks: Ls[Marks])(using ResolutionContext, TL): Opt[TypeView] =
      val moved = rctx.state.markPaths.transport(savedPaths, marks, core.isSelfContained)
      Option.when(!moved.isEmpty)(TypeView(core, moved))
  def single(value: TermShape): TypeView = Single(value)
  def apply(core: NonMarkedShape, paths: MarkPaths): TypeView =
    require(!paths.isEmpty)
    if paths.acceptsEmpty && paths.branches.isEmpty then single(core) else Collective(core, paths)
  given CandidateKey[TypeView] with
    def apply(value: TypeView)(using ResolutionContext): Any = ShapeIdentity.key(value.core)
    override def accumulates: Bool = true
    override def merge(previous: TypeView, incoming: TypeView)(using ResolutionContext): Opt[(TypeView, TypeView)] =
      (previous, incoming) match
        case (previous: Single, incoming: Single) if previous.marks == incoming.marks => N
        case _ =>
          val pool = rctx.state.markPaths
          val oldPaths = previous.paths
          val newPaths = incoming.paths
          val delta = pool.difference(newPaths, oldPaths)
          Option.when(!delta.isEmpty)(
            TypeView(previous.core, pool.union(oldPaths, delta)) ->
              (if delta eq newPaths then incoming else TypeView(incoming.core, delta)))

/** The existing publisher copy-on-write rules also isolate cumulative path sets.
  * Replays deliver one DAG per core; subsequent publications deliver path deltas.
  * Cache entries and path nodes are installed before callbacks can revisit them.
  */
private[semantics] final class TypeViewHost extends Host[TypeView]:
  def showDbg(using DebugPrinter): Str = "collective type views"
  def publish(view: TypeView)(using ResolutionContext): Unit =
    currentShapes.addDelta(view).foreach(notifyShapeListeners)
  def listen(listener: TypeView.Listener)(using ResolutionContext): Unit = subscribeToShapes(listener)
