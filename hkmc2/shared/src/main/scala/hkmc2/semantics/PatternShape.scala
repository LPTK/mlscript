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


final case class CtorPatternShape(
    cls: ClassDef | ModuleOrObjectDef,
    fs: Ls[BlockMemberSymbol -> Pattern],
    src: Pattern.Constructor,
    resSym: FlowSymbol,
    marks: Ls[Marks],
) extends PatternShape:
  protected val valueHash: Int = ValueKey.hash(System.identityHashCode(cls), fs.hashCode,
    System.identityHashCode(src), System.identityHashCode(resSym), marks.hashCode)
  protected def sameValue(other: ValueKey): Bool = other match
    case that: CtorPatternShape =>
      (cls eq that.cls) && fs == that.fs && (src eq that.src) && (resSym eq that.resSym) && marks == that.marks
    case _ => false
  def showDbg(using DebugPrinter): Str = src.showDbg
