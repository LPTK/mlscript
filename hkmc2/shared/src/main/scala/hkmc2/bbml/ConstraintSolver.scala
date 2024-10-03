package hkmc2
package bbml

import scala.collection.mutable

import semantics.*
import Message.MessageContext
import mlscript.utils.*, shorthands.*
import utils.*

// * TODO use mutabnle cache instead for correct asymptotic complexity
type Cache = Set[(Type, Type)]
type ExtrudeCache = mutable.HashMap[(Uid[InfVar], Bool), InfVar]

case class CCtx(cache: Cache, parents: Ls[(Type, Type)], origin: Term, exp: Opt[GeneralType]):
  def err(using Raise) =
    raise(ErrorReport(
      msg"Type error in ${origin.describe}${exp match
          case S(ty) => msg" with expected type ${ty.toString}"
          case N => msg""
        }" -> origin.toLoc
      :: parents.reverse.map(p =>
        msg"because: cannot constrain  ${p._1.toString}  <:  ${p._2.toString}" -> N
      )
    ))
  def nest(sub: (Type, Type)): CCtx =
    copy(cache = cache + sub, parents = parents match
      case `sub` :: _ => parents
      case _ =>  sub :: parents
    )
object CCtx:
  inline def init(origin: Term, exp: Opt[GeneralType]) = CCtx(Set.empty, Nil, origin, exp)
def cctx(using CCtx): CCtx = summon

class ConstraintSolver(infVarState: InfVarUid.State, tl: TraceLogger):
  import tl.{trace, log}

  import hkmc2.bbml.NormalForm.*

  private def freshXVar(lvl: Int): InfVar = InfVar(lvl, infVarState.nextUid, new VarState(), false)

  def extrude(ty: Type)(using lvl: Int, pol: Bool, cache: ExtrudeCache): Type =
  trace[Type](s"Extruding[${printPol(pol)}] $ty", r => s"~> $r"):
    if ty.lvl <= lvl then ty else ty.toBasic/*TODO improve extrude directly*/ match
    case ClassType(sym, targs) =>
      ClassType(sym, targs.map {
        case Wildcard(in, out) =>
          Wildcard(extrude(in)(using lvl, !pol), extrude(out))
        case t: Type => Wildcard(extrude(t)(using lvl, !pol), extrude(t))
      })
    case v @ InfVar(_, uid, state, true) => // * skolem
      if pol then
        if state.upperBounds.isEmpty then Top else state.upperBounds.reduceLeft(_ & _)
      else
        if state.lowerBounds.isEmpty then Bot else state.lowerBounds.reduceLeft(_ | _)
    case v @ InfVar(_, uid, _, false) =>
      cache.getOrElse(uid -> pol, {
        val nv = freshXVar(lvl)
        cache += uid -> pol -> nv
        if pol then
          v.state.upperBounds ::= nv
          nv.state.lowerBounds = v.state.lowerBounds.map(extrude) // * propagate
        else
          v.state.lowerBounds ::= nv
          nv.state.upperBounds = v.state.upperBounds.map(extrude) // * propagate
        nv
      })
    case FunType(args, ret, eff) =>
      FunType(args.map(arg => extrude(arg)(using lvl, !pol)), extrude(ret), extrude(eff))
    case ComposedType(lhs, rhs, p) =>
      Type.mkComposedType(extrude(lhs), extrude(rhs), p)
    case NegType(ty) => Type.mkNegType(extrude(ty)(using lvl, !pol))
    case Top | Bot => ty

  private def constrainConj(conj: Conj)(using Ctx, CCtx, TL): Unit = trace(s"Constraining $conj"):
    conj match
      case Conj(i, u, (v, pol) :: tail) =>
        var rest = Conj(i, u, tail)
        if v.isSkolem then constrainConj(rest)
        else
          val bd = if v.lvl >= rest.lvl then rest else extrude(rest)(using v.lvl, true, mutable.HashMap.empty)
          if pol then
            val nc = Type.mkNegType(bd)
            log(s"New bound: $v <: $nc")
            cctx.nest(v -> nc) givenIn:
              v.state.upperBounds ::= nc
              v.state.lowerBounds.foreach(lb => constrainImpl(lb, nc))
          else
            log(s"New bound: $v :> $bd")
            cctx.nest(bd -> v) givenIn:
              v.state.lowerBounds ::= bd
              v.state.upperBounds.foreach(ub => constrainImpl(bd, ub))
      case Conj(i, u, Nil) => (conj.i, conj.u) match
        case (_, Union(N, Nil)) =>
          // raise(ErrorReport(msg"Cannot solve ${conj.i.toString()} ∧ ¬⊥" -> N :: Nil))
          cctx.err
        case (Inter(S(ClassType(cls1, targs1))), Union(f, ClassType(cls2, targs2) :: rest)) =>
          if cls1.uid === cls2.uid then
            targs1.zip(targs2).foreach: (ta1, ta2) =>
              constrainArgs(ta1, ta2)
          else constrainConj(Conj(conj.i, Union(f, rest), Nil))
        case (int: Inter, Union(f, _ :: rest)) => constrainConj(Conj(int, Union(f, rest), Nil))
        case (Inter(S(FunType(args1, ret1, eff1))), Union(S(FunType(args2, ret2, eff2)), Nil)) =>
          if args1.length =/= args2.length then
            // raise(ErrorReport(msg"Cannot constrain ${conj.i.toString()} <: ${conj.u.toString()}" -> N :: Nil))
            cctx.err
          else
            args1.zip(args2).foreach {
              case (a1, a2) => constrainImpl(a2, a1)
            }
            constrainImpl(ret1, ret2)
            constrainImpl(eff1, eff2)
        case _ =>
          // raise(ErrorReport(msg"Cannot solve ${conj.i.toString()} <: ${conj.u.toString()}" -> N :: Nil))
          cctx.err

  private def constrainDNF(disj: Disj)(using Ctx, CCtx, TL): Unit =
    disj.conjs.foreach(constrainConj(_))

  private def constrainArgs(lhs: TypeArg, rhs: TypeArg)(using Ctx, CCtx, TL): Unit =
    constrainImpl(rhs.negPart, lhs.negPart)
    constrainImpl(lhs.posPart, rhs.posPart)

  private def inlineSkolemBounds(ty: Type, pol: Bool)(using cache: Set[Uid[InfVar]]): Type = ty.toBasic match
    case v @ InfVar(_, uid, state, skolem) if skolem && !cache(uid) =>
      given Set[Uid[InfVar]] = cache + uid
      inlineSkolemBounds(if pol then state.upperBounds.foldLeft[Type](v)(_ & _) else state.lowerBounds.foldLeft[Type](v)(_ | _), pol)
    case ComposedType(lhs, rhs, p) => ComposedType(inlineSkolemBounds(lhs, pol), inlineSkolemBounds(rhs, pol), p)
    case NegType(ty) => NegType(inlineSkolemBounds(ty, !pol))
    case _: ClassType | _: FunType | _: InfVar | Top | Bot => ty

  private def constrainImpl(lhs: Type, rhs: Type)(using Ctx, CCtx, TL): Unit =
    if cctx.cache((lhs, rhs)) then log(s"Cached!")
    else trace(s"CONSTRAINT $lhs <: $rhs"):
      cctx.nest(lhs -> rhs) givenIn:
        val ty = dnf(inlineSkolemBounds(lhs & rhs.!, true)(using Set.empty)) 
        constrainDNF(ty)
  def constrain(lhs: Type, rhs: Type)(using Ctx, CCtx, TL): Unit =
    constrainImpl(lhs, rhs)

