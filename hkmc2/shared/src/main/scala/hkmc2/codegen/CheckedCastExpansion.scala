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

  /** The test witnessing that a value has type `target`, or `N` when no such test can be expressed. */
  private def testFor(target: ErasedValueType): Opt[Case] =
    target.canonicalize match
      case ErasedType.AnyRef(_, tpeSym) =>
        for
          cls <- tpeSym.asClsOrMod
          path <- classPath(cls)
        yield Case.Cls(cls, path)
      case _ => N

  override def applyResult(r: Result)(k: Result => Block): Block = r match
    case Cast(value, target, true) =>
      super.applyResult(value): value2 =>
        testFor(target) match
          case N =>
            // * Failing to express the test leaves the cast as it would have been without `checkCasts`, which is
            // * the status quo rather than a miscompilation.
            softTODO(s"no runtime test for a checked cast to '${target.describe}'")
            k(Cast(value2, target, false))
          case S(cse) =>
            def guarded(scrut: Path): Block =
              Match(
                scrut,
                (cse -> k(Cast(scrut, target, false))) :: Nil,
                S(Throw(Value.Lit(Tree.StrLit(s"Cast to '${target.describe}' failed")))),
                End(),
              )
            value2 match
              case p: Path => guarded(p)
              case res =>
                // * The scrutinee of a `Match` must be a path, and it must be evaluated only once.
                val sym = TempSymbol(N, erasedType = res.erasedValueType, "castScrut")
                Scoped(Set(sym), Assign(sym, res, guarded(sym.asSimpleRef)))
    case _ => super.applyResult(r)(k)

end CheckedCastExpansion
