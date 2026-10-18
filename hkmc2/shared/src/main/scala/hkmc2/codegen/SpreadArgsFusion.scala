package hkmc2
package codegen

import scala.collection.mutable

import hkmc2.utils.*, shorthands.*
import utils.*

import semantics.*
import semantics.Elaborator.State
import syntax.SpreadKind

/** Lowering materializes the arguments of argument lists with spreads into fresh arrays, so that argument lists
  * remain pure in the IR (see `Lowering.materializeSpreads`): `f(a, ...xs, b)` is lowered to
  * `args = [a, ...xs, b]; f(...args)`, where `args` is a `SpreadArgsSymbol`. This pass, which must run after all IR
  * optimizations, splices these arguments back into the spread positions that use them (`f(a, ...xs, b)`),
  * so that materializing them never allocates an array.
  *
  * Such an array can be spliced into the statement that spreads it when it is used nowhere else, and when the
  * statement immediately follows its materialization, or only follows the materializations of other argument lists
  * (as in `f(...xs)(...ys)`): then, evaluating its elements in that statement does not move them across other effects.
  * Lowering produces materializations in this form, and optimizations do not separate them from their statement,
  * as both are effectful. Optimizations may also use the array as a value, as when a tail-call loop passes it as the
  * rest parameter of the next iteration. If an optimization separated an array from the statement spreading it,
  * the array would simply be allocated as written; when `Config.checkInvariants` is set, this is reported. */
class SpreadArgsFusion(using State, Raise, Config) extends BlockTransformer(SymbolSubst.Id):
  
  // * Materialized arrays spliced into their statements, whose declarations are removed from their `Scoped` blocks.
  private val fused = mutable.Set.empty[SpreadArgsSymbol]
  
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
  
  /** Splices the materialized `elems` of `args` into the statement that spreads them at the start of `rest`,
    * skipping the materializations of other argument lists. */
  private def fuse(args: SpreadArgsSymbol, elems: Ls[Arg], rest: Block): Opt[Block] =
    val res = rest match
      case Assign(other: SpreadArgsSymbol, tup: Tuple, rst, re) =>
        fuse(args, elems, rst).map(Assign(other, tup, _, re))
      case Assign(lhs, rhs, rst, re) => splice(rhs, args, elems).map(Assign(lhs, _, rst, re))
      case Return(res) => splice(res, args, elems).map(Return(_))
      case Throw(exc) => splice(exc, args, elems).map(Throw(_))
      case _ => N
    res.filterNot(_.freeVars.contains(args))
  
  override def applyBlock(b: Block): Block = b match
    case Assign(args: SpreadArgsSymbol, Tuple(false, elems), rest, false) => fuse(args, elems, rest) match
      case S(fusedBlock) =>
        fused += args
        applyBlock(fusedBlock)
      case N => super.applyBlock(b)
    case Scoped(syms, body) =>
      val body2 = applyBlock(body)
      val syms2 = syms.filterNot:
        case sym: SpreadArgsSymbol => fused(sym)
        case _ => false
      if (body2 is body) && syms2.size == syms.size then b else Scoped(syms2, body2)
    case _ => super.applyBlock(b)
  
  override def applyArg(arg: Arg)(k: Arg => Block): Block = arg match
    case Arg(S(SpreadKind.Eager), Value.SimpleRef(sym: SpreadArgsSymbol)) if config.checkInvariants =>
      softAssert(false, s"A materialized spread argument list was not fused into the statement spreading it")
      super.applyArg(arg)(k)
    case _ => super.applyArg(arg)(k)

object SpreadArgsFusion:
  def apply(prog: Program)(using State, Raise, Config): Program =
    val main = new SpreadArgsFusion().applyBlock(prog.main)
    if main is prog.main then prog else Program(prog.imports, main)
