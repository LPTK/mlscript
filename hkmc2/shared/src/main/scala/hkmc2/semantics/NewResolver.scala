package hkmc2
package semantics

import scala.collection.mutable
import scala.annotation.tailrec

import hkmc2.utils.*, shorthands.*
import hkmc2.utils.*
import hkmc2.Message.MessageContext
import hkmc2.io
import utils.TraceLogger
import syntax.*
// import Tree.*
import Term.*

import Elaborator.*
import hkmc2.syntax.LetBind
import hkmc2.semantics.flow.SelectionTarget


class NewResolver:
  self: Elaborator =>
  import tl.*
  
  /* 
  class Constraint(val lhs: Term, val rhs: Term):
    override def equals(obj: Any): Bool = obj match
      case that: Constraint => (this.lhs is that.lhs) && (this.rhs is that.rhs)
      case _ => false
    private var _hash: Int = 0
    override def hashCode(): Int = 
      if _hash =/= 0 then _hash
      else
        var h = lhs.hashCode() * 31 + rhs.hashCode()
        if h === 0 then h += 1
        _hash = h
        h
    def showDbg(using DebugPrinter): Str =
      s"${lhs.showDbg} <: ${rhs.showDbg}"
  
  val processedConstraints: mutable.Set[Constraint] = mutable.Set.empty
  val collectedConstraints: mutable.Buffer[Constraint] = mutable.Buffer.empty
  */
  
  // TODO: index by Shape identity (change Term equals/hashCode?)
  val selShapes: mutable.Map[(Shape, Str), SelShape] = mutable.Map.empty
  val symShapes: mutable.Map[BlockMemberSymbol, SymShape] = mutable.Map.empty
  
  // def getSelShape(lhs: Shape, nme: Tree.Ident): SelShape =
  //   selShapes.getOrElseUpdate((lhs, nme.name), SelShape(lhs, nme))
  
  def selShape(lhs: Shape, id: Tree.Ident, res: AnySelTerm): Unit =
    // log(s"selShape? lhs = $lhs, nme = $nme, res = $res")
    val sh = selShapes.getOrElseUpdate((lhs, id.name), {
      log(s"selShape: lhs = $lhs, nme = $id, res = $res")
      // lhs match
      // case _ =>
      val sh = new SelShape(lhs, id):
        val target = receiver match
          case ss: SymShape =>
            ss.sym.modOrObjTree match
            case S(cls) =>
              cls.definedSymbols.get(nme.name) match
              case s @ S(clsSym) => s
              case N =>
                raise(ErrorReport(msg"${cls.k.desc.capitalize} '${cls.symbol.nme
                  }' does not contain member '${nme.name}'" -> res.toLoc :: Nil))
                N
            case N =>
              N
            S(SelectionTarget.ObjectMember(ss.sym))
          case _ =>
            raise:
              ErrorReport(
                msg"OOPS ${receiver.describe}" -> res.toLoc :: Nil,
                source = Diagnostic.Source.Compilation)
            N
        target.foreach(tgt => res.resolvedTargets ::= tgt)
      // if res.shapes.add(sh) then
      //   res.shapeListeners.foreach(listener => listener(sh))
      sh
    })
    if res.shapes.add(sh) then
      res.shapeListeners.foreach(listener => listener(sh))
  
  def symShape(sym: BlockMemberSymbol, res: Ref): Unit =
    val sh = symShapes.getOrElseUpdate(sym, {
      log(s"symShape: sym = $sym, res = $res")
      SymShape(sym)
    })
    if res.shapes.add(sh) then
      res.shapeListeners.foreach(listener => listener(sh))
  
  def listen(trm: Term, listener: Shape => Unit): Unit =
    log(s"listen: trm = $trm")
    trm.shapeListeners += listener
    trm match
    case sh: Lit =>
      listener(sh)
    // case Term.App(lhs, args) =>
    //   // listen(lhs, sh => listener(AppShape(sh, args)))
    //   ???
    // case sel: AnySelTerm =>
    //   // listen(lhs, sh => selShape(sh, nme, trm.asInstanceOf[AnySelTerm]))
    //   sel
    case ref @ Ref(bsym: BlockMemberSymbol) =>
      // listener(ref)
      // if ref.shapes.add(bsym) then
      //   ref.shapeListeners.foreach(listener => listener(bsym))
      symShape(bsym, ref)
    case res: ResolvableImpl =>
      res.shapes.foreach(listener)
    case _ =>
      println("oops")
      ()
  
end NewResolver


