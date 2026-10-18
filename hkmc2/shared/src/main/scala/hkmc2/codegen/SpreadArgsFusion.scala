package hkmc2
package codegen

import hkmc2.utils.*, shorthands.*
import utils.*

import semantics.*
import semantics.Elaborator.{Ctx, State}
import syntax.SpreadKind

/** Lowering materializes the arguments of argument lists with impure spreads into fresh arrays, so that argument lists
  * remain pure in the IR (see `Lowering.materializeSpreads`): `f(a, ...xs, b)` is lowered to
  * `args = [a, ...xs, b]; f(...args)`, where `args` is a `SpreadArgsSymbol`. Code generation splices these arguments
  * back into the spread positions that use them (`f(a, ...xs, b)`) using `fuse`, so that materializing them never
  * allocates an array.
  *
  * Fusion is done on the fly by code generation rather than by an IR pass, so that the IR always satisfies the
  * invariant that argument lists are pure. In particular, the IR of definitions, which is kept in their symbols
  * (see `DefinitionSymbol.irDefn`) and reused by the optimizations of later compilation units (as when inlining them),
  * is never fused. */
object SpreadArgsFusion:
  
  /** Whether evaluating `arg` is pure: either it is not a spread, or it spreads an array that is never mutated
    * (see `ErasedType.ImmutableArray`), whose elements are thus known in advance. */
  def isPureArg(arg: Arg)(using Ctx, State): Bool =
    arg.spread.isEmpty || arg.value.erasedType.exists(_.canonicalize is ErasedType.ImmutableArray)
  
  /** Checks the invariant that the spread arguments of calls and instantiations only spread materialized argument lists
    * or arrays that are never mutated, so that argument lists are pure (see `Lowering.materializeSpreads`).
    * Spreads in tuple literals are not concerned: a tuple literal evaluates its spreads, as when materializing an
    * argument list. Optimizations must preserve the erased types that make this invariant observable. */
  def checkPureArgs(blk: Block)(using Ctx, State, Raise): Unit =
    def check(arg: Arg): Unit = arg match
      case Arg(S(_), Value.SimpleRef(_: SpreadArgsSymbol)) => ()
      case _ => softAssert(isPureArg(arg), s"A spread argument does not spread an array that is never mutated: $arg")
    new BlockTraverser:
      override def applyResult(r: Result): Unit =
        r match
          case Call(_, argss) => argss.foreach(_.foreach(check))
          case Instantiate(_, _, argss) => argss.foreach(_.foreach(check))
          case _ => ()
        super.applyResult(r)
    .applyBlock(blk)
  
  /** Materializes the argument lists `argss` that are not pure (see `Lowering.materializeSpreads`), registering the
    * symbols of the materialized arrays with `register`, so that they can be declared in an enclosing `Scoped`. */
  def materializeSpreads(argss: Ls[Ls[Arg]], loc: Opt[Loc], register: SpreadArgsSymbol => Unit)
      (k: Ls[Ls[Arg]] => Block)(using Ctx, State): Block = argss match
    case Nil => k(Nil)
    case as :: rest if as.forall(isPureArg) => materializeSpreads(rest, loc, register)(rs => k(as :: rs))
    case as :: rest =>
      val argsSym = new SpreadArgsSymbol
      register(argsSym)
      Assign(argsSym, Tuple(mut = false, as)(loc),
        materializeSpreads(rest, loc, register)(rs => k((Arg(S(SpreadKind.Eager), argsSym.asSimpleRef) :: Nil) :: rs)))
  
  /** Splices `elems` into the spread positions of `args` in the arguments and elements of `r`. */
  private def splice(r: Result, args: SpreadArgsSymbol, elems: Ls[Arg]): Opt[Result] =
    def isSpreadOf(arg: Arg) = arg match
      case Arg(S(SpreadKind.Eager), Value.SimpleRef(sym)) => sym is args
      case _ => false
    def spliced(as: Ls[Arg]): Ls[Arg] = as.flatMap(arg => if isSpreadOf(arg) then elems else arg :: Nil)
    r match
      case c @ Call(fun, argss) if argss.exists(_.exists(isSpreadOf)) =>
        S(Call(fun, argss.ne_map(spliced))(c.metadata, c.toLoc))
      case i @ Instantiate(mut, cls, argss) if argss.exists(_.exists(isSpreadOf)) =>
        S(Instantiate(mut, cls, argss.map(spliced))(i.metadata, i.toLoc))
      case t @ Tuple(mut, tupElems) if tupElems.exists(isSpreadOf) =>
        S(Tuple(mut, spliced(tupElems))(t.toLoc))
      case _ => N
  
  /** Fuses the materialization `args = [...elems]` of an argument list into `rest`, the block that follows it,
    * returning the block to generate in place of both, or `N` if they cannot be fused.
    *
    * The materialized array can be spliced into the statement that spreads it when it is used nowhere else, and when
    * this statement immediately follows its materialization, or only follows the materializations of other argument
    * lists (as in `f(...xs)(...ys)`): then, evaluating its elements in that statement does not move them across other
    * effects. Lowering produces materializations in this form, and optimizations do not separate them from their
    * statement, as both are effectful. Optimizations may also use the array as a value, as when a tail-call loop
    * passes it as the rest parameter of the next iteration, in which case it is allocated as written.
    *
    * This is a local transformation: it only rebuilds the statements up to the one spreading `args`, so it never
    * rebuilds definitions (which would update their `DefinitionSymbol.irDefn`). */
  def fuse(args: SpreadArgsSymbol, elems: Ls[Arg], rest: Block): Opt[Block] =
    val res = rest match
      case Assign(other: SpreadArgsSymbol, tup: Tuple, rst, re) =>
        fuse(args, elems, rst).map(Assign(other, tup, _, re))
      case Assign(lhs, rhs, rst, re) => splice(rhs, args, elems).map(Assign(lhs, _, rst, re))
      case Return(res) => splice(res, args, elems).map(Return(_))
      case Throw(exc) => splice(exc, args, elems).map(Throw(_))
      case _ => N
    res.filterNot(_.freeVars.contains(args))
