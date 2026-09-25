package hkmc2
package semantics

import org.scalatest.funsuite.AnyFunSuite
import scala.collection.mutable.ArrayBuffer

import hkmc2.syntax.Tree
import hkmc2.utils.*, shorthands.*
import io.PlatformPath.given


/** Binder substitutions stay bounded by what a value can observe (see
  * NewResolver.instantiateShape). These tests cover what diff tests cannot
  * observe: the number of views and activation contexts that resolution
  * allocates while compiling generated units of growing size, and the
  * algebraic laws of substitution on individual shapes.
  */
class SubstitutionGrowthTest extends AnyFunSuite:

  private enum Variant:
    case Plain, UnusedParameter, Annotated, Dependent, Branching

  /** A chain of private identity functions `f1` ... `fk`, each passing its argument
    * to the next, called once with a value produced outside every generic scope.
    * The branching variant forwards the value through one of two generic
    * identities at each level, so the value returns to `f1` along 2^k call paths.
    */
  private def chain(k: Int, variant: Variant): Str =
    val definitions = (1 to k).map: i =>
      val next = if i == k then "value" else s"f${i + 1}(value)"
      variant match
        case Variant.Plain => s"private fun f$i(value) = $next"
        case Variant.UnusedParameter => s"private fun f$i[T$i](value) = $next"
        case Variant.Annotated => s"private fun f$i[T$i](value: Item): Item = $next"
        case Variant.Dependent => s"private fun f$i[T$i](value: T$i): T$i = $next"
        case Variant.Branching =>
          s"""private fun g$i[G$i](x) = x
             |private fun h$i[H$i](x) = x
             |private fun f$i(value) = if value.value > 0 then g$i($next) else h$i($next)""".stripMargin
    s"""#lang(0.3.x)
       |
       |class Item(val value: Int)
       |${definitions.mkString("\n")}
       |fun use() = f1(Item(1)).value
       |""".stripMargin

  private final case class Measurement(views: Int, largestSubstitution: Int, activations: Int, typeInstances: Int)

  private val cctx = TestFolders.compilerCtx(os.pwd)
  private given DebugPrinter = new DebugPrinter
  private val tl = new TraceLogger:
    override def doTrace: Bool = false

  /** Resolves a generated unit through ordinary elaboration, in a fresh state. */
  private def measure(name: Str, source: Str): Measurement =
    val dir = os.temp.dir(prefix = "substitution-growth-")
    val file = dir / s"$name.mls"
    os.write(file, source)
    val diagnostics = ArrayBuffer.empty[Diagnostic]
    given Raise = diagnostics += _
    val prelude = cctx.getPrelude(cctx.paths.preludeFile)(using tl, summon[Raise]).ctx
    val artifact = cctx.getElaboratedBlock(file, prelude)(using tl, summon[Raise])
    val errors = diagnostics.collect { case error: ErrorReport => error }
    assert(errors.isEmpty, s"Unexpected errors in $name:\n${errors.map(_.theMsg).mkString("\n")}")
    val state = artifact.state.newResolverState
    Measurement(state.allocatedShapeViewCount, state.largestRetainedSubstitution,
      state.activationContextCount, state.allocatedTypeInstanceCount)

  // The value passed along each chain is produced outside every generic scope,
  // so no view of it should retain more than the one binding of the scope
  // reading it, and the number of views and activation contexts should grow
  // with the number of definitions, not with the number of call paths.
  // Before substitutions were projected onto their support, the unused-parameter
  // chain retained a substitution of size k, and the branching chain allocated
  // 2^(k+2) views and 2^k activation contexts (65534 and 16412 at k = 14).
  test("substitutions through irrelevant generic scopes stay bounded"):
    for variant <- Variant.values; k <- List(2, 6, 10, 14) do
      val m = measure(s"${variant}_$k", chain(k, variant))
      withClue(s"$variant chain of length $k: $m"):
        assert(m.typeInstances == (if variant == Variant.Plain then 0 else if variant == Variant.Branching then 2 * k else k))
        assert(m.largestSubstitution <= 2)
        assert(m.views <= 2 * k + 4)
        assert(m.activations <= 2 * k + 4)

  /** Shapes and instances for the substitution laws below. */
  private class Harness:
    given owner: Elaborator.State = new Elaborator.State
    given state: NewResolverState = owner.newResolverState
    given Raise = diagnostic => fail(diagnostic.theMsg)
    given trace: TraceLogger = new TraceLogger:
      override def doTrace: Boolean = false
    given Config = Config.default(TestFolders.mainTestDir(os.pwd))
    given CompilerCtx = CompilerCtx.fresh(io.FileSystem.default, TestFolders.compilerPaths(os.pwd), summon[Config])
    val resolver = Elaborator(trace, TestFolders.mainTestDir(os.pwd), Elaborator.Ctx.empty)
    val scheme = new TypeResolution(Term.UnitVal(), _ => fail("Unexpected type error"))
    def binder(name: Str): VarSymbol =
      val symbol = VarSymbol(Tree.Ident(name))
      symbol.decl = S(TyParam(FldFlags.empty, N, symbol))
      symbol
    def instance(binder: VarSymbol): TypeParameterInstance =
      state.instantiateTypeParameters(scheme, FlowSymbol.app(), List(binder), S(Set.empty))(binder)
    /** A tuple literal `[()]` written where `binders` are in scope. */
    def tuple(binders: Set[VarSymbol]): TupleShape =
      val source = Term.Tup(Fld(FldFlags.empty, Term.UnitVal(), N) :: Nil)(Tree.DummyTup)
      state.recordLexicalBinders(source, binders)
      TupleShape(source, TupleShape.Field(Fld(FldFlags.empty, Term.UnitVal(), N), Nil) :: Nil)(resolver)

  test("a substitution that a value cannot observe allocates no view"):
    val h = new Harness
    import h.given
    val (a, b) = (h.binder("A"), h.binder("B"))
    val irrelevant = Map(b -> h.instance(b))
    val literal = IntroShape(Term.UnitVal(), N)
    val rigid = RigidTypeShape(a, Term.UnitVal())
    val tuple = h.tuple(Set(a))
    val marked = MarkedShape(tuple, ExitMark(ResolutionBoundary(TermSymbol(syntax.Fun, N, Tree.Ident("f"))), N, NoMarks))
    val before = h.state.allocatedShapeViewCount
    (1 to 100).foreach: _ =>
      assert(h.resolver.instantiateShape(literal, irrelevant) eq literal)
      assert(h.resolver.instantiateShape(rigid, irrelevant) eq rigid)
      assert(h.resolver.instantiateShape(tuple, irrelevant) eq tuple)
      assert(h.resolver.instantiateShape(marked, irrelevant) == marked)
    assert(h.state.allocatedShapeViewCount == before)

  test("repeated substitution stabilizes on one canonical view"):
    val h = new Harness
    import h.given
    val (a, b) = (h.binder("A"), h.binder("B"))
    val substitution = Map(a -> h.instance(a), b -> h.instance(b))
    val tuple = h.tuple(Set(a))
    val view = h.resolver.instantiateShape(tuple, substitution)
    val expected = TupleShape.view(tuple, Map(a -> substitution(a)))(h.resolver)
    assert(view eq expected)
    val before = h.state.allocatedShapeViewCount
    (1 to 100).foreach: _ =>
      assert(h.resolver.instantiateShape(view, substitution) eq view)
      assert(h.resolver.instantiateShape(tuple, substitution) eq view)
      assert(h.resolver.instantiateShape(tuple, Map(a -> substitution(a))) eq view)
    assert(h.state.allocatedShapeViewCount == before)

  test("composed substitutions keep captured bindings and compare by effective view"):
    val h = new Harness
    import h.given
    val (a, b) = (h.binder("A"), h.binder("B"))
    val (first, second) = (h.instance(a), h.instance(a))
    val other = h.instance(b)
    val tuple = h.tuple(Set(a, b))
    val captured = h.resolver.instantiateShape(tuple, Map(a -> first))
    // A later binding for a captured binder is ignored; a new binder is composed.
    assert(h.resolver.instantiateShape(captured, Map(a -> second)) eq captured)
    val composed = h.resolver.instantiateShape(captured, Map(a -> second, b -> other))
    assert(composed eq h.resolver.instantiateShape(tuple, Map(a -> first, b -> other)))
    assert(composed eq TupleShape.view(tuple, Map(a -> first, b -> other))(h.resolver))
    // The route to a view does not change its identity.
    assert(h.resolver.instantiateShape(h.resolver.instantiateShape(tuple, Map(b -> other)), Map(a -> first)) eq composed)
