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
import Tree.*

import Elaborator.*
import hkmc2.syntax.LetBind


class NewResolver:
  self: Elaborator =>
  import tl.*
  
  
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
  
  val selShapes: mutable.Map[(Shape, Str), SelShape] = mutable.Map.empty
  
  // def getSelShape(lhs: Shape, nme: Tree.Ident): SelShape =
  //   selShapes.getOrElseUpdate((lhs, nme.name), SelShape(lhs, nme))
  
  def selShape(lhs: Shape, nme: Tree.Ident, res: AnySelTerm): Unit =
    selShapes.getOrElseUpdate((lhs, nme.name), {
      val sh = SelShape(lhs, nme)
      res.shapeListeners.foreach(listener => listener(sh))
      sh
    })
  
  
end NewResolver


