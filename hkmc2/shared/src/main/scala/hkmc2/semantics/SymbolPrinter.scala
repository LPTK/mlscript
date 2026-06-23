package hkmc2
package semantics

import scala.collection.mutable
import hkmc2.utils.*, shorthands.*
import syntax.*
import hkmc2.utils.*


class SymbolPrinter(val dbgScp: Scope) extends DebugPrinter:

  private val syntheticBindings = mutable.LinkedHashMap.empty[AnyRef, Str]
  private val syntheticNames = mutable.Set.empty[Str]
  
  override def printPlain(v: Any): Str = v match
    case sym: Symbol =>
      sym.showFullName(using dbgScp, semantics.ShowCfg.internal, throw _)
    case _ => super.printPlain(v)
    
  def printSymbol(sym: Symbol)(using Raise, ShowCfg): Str =
    sym.showName(using dbgScp, summon)

  /** Allocates stable, collision-aware names for analysis entities that are
    * not compiler symbols and therefore cannot be stored in a [[Scope]]. */
  def printSyntheticSymbol(key: AnyRef, name: Str): Str =
    syntheticBindings.getOrElseUpdate(key, allocateSyntheticName(name))

  private def allocateSyntheticName(name: Str): Str =
    val c = dbgScp.cfg
    val base0 = if name.isEmpty then c.defaultName else name
    val base =
      if c.escapeChars then Scope.replaceInvalidCharacters(base0)
      else base0
    def inScope(nme: Str): Bool =
      syntheticNames(nme) || dbgScp.inScope(nme)
    val result =
      if !c.includeZero && !inScope(base) && base.nonEmpty then base
      else
        ((if c.includeZero then 0 else 1) to Int.MaxValue).iterator
          .map: i =>
            val idx =
              if c.useSuperscripts
              then i.toString.map:
                case '0' => '⁰'
                case '1' => '¹'
                case '2' => '²'
                case '3' => '³'
                case '4' => '⁴'
                case '5' => '⁵'
                case '6' => '⁶'
                case '7' => '⁷'
                case '8' => '⁸'
                case '9' => '⁹'
                case _ => die
              else i.toString
            s"$base$idx"
          .filterNot(inScope)
          .next()
    syntheticNames += result
    result
  
end SymbolPrinter

