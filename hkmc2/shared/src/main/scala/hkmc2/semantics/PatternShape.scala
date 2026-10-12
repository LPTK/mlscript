package hkmc2
package semantics

import scala.collection.mutable.{Buffer, Set as MutSet, LinkedHashSet}

import hkmc2.utils.*, shorthands.*
import syntax.*
import hkmc2.utils.Scope
import hkmc2.utils.Scope.scope
import hkmc2.document.*
import hkmc2.document.Document.*

import Elaborator.State
import hkmc2.typing.Type
import hkmc2.semantics.Elaborator.{Ctx, ctx}
import hkmc2.Message.MessageContext
import hkmc2.semantics.flow.{SelectionTarget, AppTarget}



type PatternShapePublisher = Publisher[PatternShape]
type PatternShapeHost = Host[PatternShape]


sealed abstract class PatternShape extends ValueKey:
  def showDbg(using DebugPrinter): Str


final class CtorPatternShape(
    val cls: ClassDef | ModuleOrObjectDef,
    val fs: Ls[BlockMemberSymbol -> Pattern],
    val src: Pattern.Constructor,
    val resSym: FlowSymbol,
    val marks: Ls[Marks],
) extends PatternShape:
  protected val keyComponents: Product = (new Identity(cls), fs, src, resSym, marks)
  def showDbg(using DebugPrinter): Str = src.showDbg


object CtorPatternShape:
  def unapply(value: CtorPatternShape): S[(ClassDef | ModuleOrObjectDef, Ls[BlockMemberSymbol -> Pattern],
      Pattern.Constructor, FlowSymbol, Ls[Marks])] =
    S((value.cls, value.fs, value.src, value.resSym, value.marks))
