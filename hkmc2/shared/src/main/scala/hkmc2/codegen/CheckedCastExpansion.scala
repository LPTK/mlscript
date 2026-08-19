package hkmc2
package codegen

import hkmc2.utils.*, shorthands.*

import hkmc2.semantics.*
import hkmc2.semantics.Elaborator.{Ctx, State, ctx}
import hkmc2.syntax.Tree


/** Expands each `Cast` that carries a runtime check into a type test that throws when the test fails.
  *
  * It must run after the last `TailRecOpt`: that pass recognizes a tail call through the `Return(Cast(...))`
  * shape, which the expansion destroys, and a call wrapped in a `Match` is no longer in tail position anyway.
  */
class CheckedCastExpansion(using Ctx, Raise, State) extends BlockTransformer(SymbolSubst.Id):

  /** The runtime path that a `Case.Cls` test on `cls` needs, or `N` when it cannot be recovered. */
  private def classPath(cls: ClassSymbol | ModuleOrObjectSymbol): Opt[Path] = cls match
    case cls: ClassSymbol if ctx.builtins.virtualClasses(cls) =>
      // * Virtual classes have no runtime representation, so backends discard this path; see [invariant:0].
      S(Select(State.runtimeSymbol.asSimpleRef, Tree.Ident("unreachable"))(S(State.unreachableSymbol))(false))
    case _ => cls.defn match
      // * A declared class is not defined by us, so it is reached through `globalThis`.
      case S(defn) if defn.hasDeclareModifier.isDefined =>
        S(State.globalThisSymbol.asThis.sel(cls.id, cls))
      case S(defn) => defn.owner match
        case S(owner) => S(owner.asThis.sel(cls.id, cls))
        case N => S(defn.bsym.asMemberRef(cls))
      case N => N

  /** What a checked cast to a given target has to do at runtime. */
  private enum CheckKind:
    /** Test the value with `cse`, throwing when it fails. */
    case Test(cse: Case)
    /** Emit no test: none can be expressed for this target - this should be an internal compiler error. */
    case Inexpressible

  /** The check that narrowing to a class-like symbol needs, or `Inexpressible` when its runtime path is lost. */
  private def testFor(tpeSym: TypeSymbol): CheckKind =
    val cse =
      for
        cls <- tpeSym.asClsOrMod
        path <- classPath(cls)
      yield CheckKind.Test(Case.Cls(cls, path))
    cse.getOrElse(CheckKind.Inexpressible)

  private def checkFor(target: ErasedValueType): CheckKind =
    target.canonicalize match
      case ErasedType.AnyRef(_, tpeSym) => testFor(tpeSym)
      // * All three here only to cover exhaustivity, as no `Cast` can target them:
      // * - `coerceTo` rejects a coercion to a primitive or to an `Incompatible`;
      // * - A `Cast` to the top type is malformed (identity and upcasts are disallowed).
      case _: ErasedType.Primitive | ErasedType.Unknown | _: ErasedType.Incompatible =>
        CheckKind.Inexpressible

  override def applyPath(p: Path)(k: Path => Block): Block = p match
    case Cast(value, target, true) =>
      super.applyResult(value): value2 =>
        checkFor(target) match
          case CheckKind.Inexpressible =>
            // * Failing to express the test leaves the cast as it would have been without `checkCasts`, which is
            // * the status quo rather than a miscompilation.
            softTODO(s"no runtime test for a checked cast to '${target.describe}'")
            k(Cast(value2, target, false))
          case CheckKind.Test(cse) =>
            def guarded(scrut: Path): Block =
              Match(
                scrut,
                (cse -> k(Cast(scrut, target, false))) :: Nil,
                S(Throw.error(s"Cannot narrow a value to type '${target.describe}'")),
                End(),
              )
            value2 match
              case p: Path => guarded(p)
              case res =>
                // * The scrutinee of a `Match` must be a path, and it must be evaluated only once.
                val sym = TempSymbol(N, erasedType = res.erasedValueType, "castScrut")
                Scoped(Set(sym), Assign(sym, res, guarded(sym.asSimpleRef)))
    case _ => super.applyPath(p)(k)

end CheckedCastExpansion
