package hkmc2
package codegen

import scala.collection.mutable.{Map => MutMap, Set => MutSet, Buffer}

import mlscript.utils.*, shorthands.*
import hkmc2.utils.*

import semantics.*
import semantics.Elaborator.State

type SymbolRefreshMap =
  MutMap[TempSymbol, TempSymbol] &
  MutMap[VarSymbol, VarSymbol] &
  MutMap[BlockMemberSymbol, BlockMemberSymbol] &
  MutMap[LabelSymbol, LabelSymbol] &
  MutMap[TermSymbol, TermSymbol] &
  MutMap[InnerSymbol, InnerSymbol] &
  MutMap[ClassSymbol, ClassSymbol] &
  MutMap[ModuleOrObjectSymbol, ModuleOrObjectSymbol] &
  MutMap[PatternSymbol, PatternSymbol] &
  MutMap[TopLevelSymbol, TopLevelSymbol] &
  MutMap[ClassCtorSymbol, ClassCtorSymbol]

class SymbolRefresherWalker(mapping: SymbolRefreshMap)(using State) extends BlockTraverser:

  private def assertUpdate[T](map: MutMap[T, T], k: T, v: T) =
    assert(!map.isDefinedAt(k), s"already defined: $k")
    map(k) = v
  
  private def refreshTempSymbol(s: TempSymbol) =
    assertUpdate[TempSymbol](mapping, s, new TempSymbol(s.trm))

  private def refreshVarSymbol(s: VarSymbol) =
    assertUpdate[VarSymbol](mapping, s, new VarSymbol(s.id))
  
  private def refreshBlockMemberSymbol(s: BlockMemberSymbol) =
    assertUpdate[BlockMemberSymbol](mapping, s, new BlockMemberSymbol(s.nme, s.trees, s.nameIsMeaningful))

  private def refreshLabelSymbol(s: LabelSymbol) =
    assertUpdate[LabelSymbol](mapping, s, new LabelSymbol(s.trm, s.nme))

  private def refreshTermSymbol(s: TermSymbol) =
    // Inner symbol (if present) must be traversed at this point.
    assertUpdate[TermSymbol](mapping, s, new TermSymbol(s.k, s.owner.map(o => mapping.getOrElse(o, o)), s.id))

  private def refreshClassSymbol(s: ClassSymbol) =
    assertUpdate[ClassSymbol](mapping, s, new ClassSymbol(s.tree, s.id))

  private def refreshModuleOrObjectSymbol(s: ModuleOrObjectSymbol) =
    assertUpdate[ModuleOrObjectSymbol](mapping, s, new ModuleOrObjectSymbol(s.tree, s.id))

  private def refreshPatternSymbol(s: PatternSymbol) =
    assertUpdate[PatternSymbol](mapping, s, new PatternSymbol(s.id, s.params, s.body))

  private def refreshTopLevelSymbol(s: TopLevelSymbol) =
    assertUpdate[TopLevelSymbol](mapping, s, new TopLevelSymbol(s.nme))

  private def refreshClassCtorSymbol(s: ClassCtorSymbol) =
    assertUpdate[ClassCtorSymbol](mapping, s, new ClassCtorSymbol(s.k, S(mapping.getOrElse(s.owner.value, s.owner.value)), s.id))

  private def refreshParamList(pl: ParamList) =
    for
      p <- pl.restParam ++: pl.params
    do
      refreshVarSymbol(p.sym)

  override def applyBlock(b: Block) = b match
    case Scoped(syms, body) =>
      for s <- syms.toList.sortBy(_.uid) do
        s match
          case s: TempSymbol => refreshTempSymbol(s)
          case s: VarSymbol => refreshVarSymbol(s)
          case s: BlockMemberSymbol => refreshBlockMemberSymbol(s)
        applyBlock(body)
    case Label(label, loop, body, rest) =>
      refreshLabelSymbol(label)
      applyBlock(body)
      applyBlock(rest)
    case _ => super.applyBlock(b)
  
  override def applyFunDefn(fun: FunDefn): Unit =
    val FunDefn(owner, sym, dSym, params, body) = fun
    assert(mapping.isDefinedAt(sym), "BlockMemberSymbol is free variable for this block")
    refreshTermSymbol(dSym)
    params.foreach(refreshParamList)
    applyBlock(body)
  
  override def applyValDefn(defn: ValDefn): Unit =
    val ValDefn(tsym, sym, result) = defn
    assert(mapping.isDefinedAt(sym), "BlockMemberSymbol is free variable for this block")
    refreshTermSymbol(tsym)
    applyResult(result)
  
  override def applyClsLikeDefn(defn: ClsLikeDefn): Unit =
    val ClsLikeDefn(
      owner, isym, sym, ctorSym, k, paramsOpt, auxParams, parentPath,
      methods, privateFields, publicFields, preCtor, ctor, companion,
      bufferable) = defn
    assert(mapping.isDefinedAt(sym), "BlockMemberSymbol is free variable for this block")
    isym match
      case s: ClassSymbol => refreshClassSymbol(s)
      case s: ModuleOrObjectSymbol => refreshModuleOrObjectSymbol(s)
      case s: PatternSymbol => refreshPatternSymbol(s)
      case s: TopLevelSymbol => refreshTopLevelSymbol(s)
    ctorSym.foreach(refreshClassCtorSymbol)
    paramsOpt.foreach(refreshParamList)
    auxParams.foreach(refreshParamList)
    methods.foreach(applyFunDefn)
    privateFields.foreach(refreshTermSymbol)
    publicFields.foreach: p =>
      refreshBlockMemberSymbol(p._1)
      refreshTermSymbol(p._2)
    applyBlock(preCtor)
    applyBlock(ctor)
    companion.foreach(applyClsLikeBody)

  def applyClsLikeBody(b: ClsLikeBody): Unit =
    val ClsLikeBody(
      isym, methods, privateFields, publicFields, ctor, annotations
    ) = b
    isym match
      case s: ModuleOrObjectSymbol => refreshModuleOrObjectSymbol(s)
      case s: TopLevelSymbol => refreshTopLevelSymbol(s)
    methods.foreach(applyFunDefn)
    privateFields.foreach(refreshTermSymbol)
    publicFields.foreach: p =>
      refreshBlockMemberSymbol(p._1)
      refreshTermSymbol(p._2)
    applyBlock(ctor)

object SymbolRefresher:

  def initMap(m: Map[Symbol, Symbol]) =
    val result = MutMap.empty[Symbol, Symbol].asInstanceOf[SymbolRefreshMap]
    m.foreach: (p) =>
      p match
        case (s1: TempSymbol, s2: TempSymbol) => result(s1) = s2
        case (s1: VarSymbol, s2: VarSymbol) => result(s1) = s2
        case (s1: LabelSymbol, s2: LabelSymbol) => result(s1) = s2
        case (s1: ClassCtorSymbol, s2: ClassCtorSymbol) => result(s1) = s2
        case (s1: TopLevelSymbol, s2: TopLevelSymbol) => result(s1) = s2
        case (s1: PatternSymbol, s2: PatternSymbol) => result(s1) = s2
        case (s1: ClassSymbol, s2: ClassSymbol) => result(s1) = s2
        case (s1: BlockMemberSymbol, s2: BlockMemberSymbol) => result(s1) = s2
        case (s1: TermSymbol, s2: TermSymbol) => result(s1) = s2
        case (s1: ModuleOrObjectSymbol, s2: ModuleOrObjectSymbol) => result(s1) = s2
        case (s1: InnerSymbol, s2: InnerSymbol) => result(s1) = s2
        case _ => lastWords("Unknown symbol type present for SymbolRefresher")
    result
  
  def initSymbolSubst(m: SymbolRefreshMap) =
    new SymbolSubst:
      override def mapBlockMemberSym(s: BlockMemberSymbol): BlockMemberSymbol = m.getOrElse(s, s)
      override def mapTempSym(s: TempSymbol): TempSymbol = m.getOrElse(s, s)
      override def mapVarSym(s: VarSymbol): VarSymbol = m.getOrElse(s, s)
      override def mapTermSym(s: TermSymbol): TermSymbol = m.getOrElse(s, s)
      override def mapClassCtorSym(s: ClassCtorSymbol): ClassCtorSymbol = m.getOrElse(s, s)
      override def mapClsSym(s: ClassSymbol): ClassSymbol = m.getOrElse(s, s)
      override def mapModuleSym(s: ModuleOrObjectSymbol): ModuleOrObjectSymbol = m.getOrElse(s, s)
      override def mapPatSym(s: PatternSymbol): PatternSymbol = m.getOrElse(s, s)
      override def mapTopLevelSym(s: TopLevelSymbol): TopLevelSymbol = m.getOrElse(s, s)
      override def mapLabelSym(s: LabelSymbol): LabelSymbol = m.getOrElse(s, s)

// An internal class so that the actual map can be used
class SymbolRefresherInternal(m: SymbolRefreshMap)(using State) extends BlockTransformer(SymbolRefresher.initSymbolSubst(m)):
  // We have a pretty weird setup here, where we store a mutable state inside the SymbolRefresher and we must initialize the SymbolRefresher for the correct behaviour
  def apply(b: Block) =
    SymbolRefresherWalker(m).applyBlock(b)
    applyBlock(b)

class SymbolRefresher(m: Map[Symbol, Symbol])(using State) extends SymbolRefresherInternal(SymbolRefresher.initMap(m))
