package hkmc2
package codegen

import scala.collection.mutable.{Map => MutMap, Set => MutSet, Buffer}
import scala.annotation.tailrec
import sourcecode.{Line, FileName}

import mlscript.utils.*, shorthands.*
import hkmc2.utils.*

import semantics.*
import semantics.Elaborator.{State, Ctx, ctx}
import mlscript.utils.algorithms.partitionScc


/** `symbolsToPreserve` is the set of local symbols we want to leave alone;
  * typically, these will be top-level symbols that are being exported from a diff-test block;
  * we don't want to eliminate these. */
class BlockSimplifier
    (symbolsToPreserve: Set[Local], tl: TL, printer: Program => Str)
    // (using DebugPrinter, State, Config, Raise, Ctx, ShowCfg, SymbolPrinter):
    (using DebugPrinter, State, Config, Raise, Ctx):
  import tl.*
  
  
  // private var changed = true
  // def registerChange = changed = true
  
  // * For debugging:
  // def registerChange(using line: Line) = { println(s"Change at line ${line.value}"); changed = true }
  
  val MaxIterations = 10
  
  def apply(prog: Program): Program =
    
    var res = prog
    def printRes = printer(res)
    var changed = true
    var iteration = 0
    
    while changed do
      changed = false
      iteration += 1
      
      if iteration > MaxIterations then
        log(s"⬤ Reached maximum number of iterations ($MaxIterations), stopping simplifications")
        return res
      
      log(s"⬤ Simplif. iter. $iteration")
      // println(s"Current program:\n${printRes}")
      
      val dce = new DeadCodeElim()
      res = dce.apply(res)
      changed ||= dce.changed
      if dce.changed then log("▶ DCE:\n" + printRes)
      
      // val vp = new ValuePropagation()
      // val vp = new ValuePropagation(DefinedVars.analyze(res.main))
      val vp = new ValuePropagation(LocalVars.analyze(res.main))
      res = vp.apply(res)
      changed ||= vp.changed
      if vp.changed then log("▶ VP:\n" + printRes)
      
      summon[Config].inlining.foreach: cfg =>
        val inl = new Inliner(using cfg)
        res = inl.apply(res)
        // println(s"!!!")
        changed ||= inl.changed
        if inl.changed then log("▶ INL:\n" + printRes)
      
      // println(s"? ${changed}")
      // TODO: other simplifications, such as partial evaluation?
      
    end while
    
    res
  end apply
  
  
  trait Helper:
    
    var changed = false
    def registerChange(dbg: => Str)(using Line) =
      log(s"!! Change triggered { ${dbg} } at ${summon[FileName].value}:${summon[Line].value}")
      changed = true
    
  end Helper
  
  
  type LocalVar = LocalVarSymbol
  
  /* 
  object DefinedVars extends CachedAnalysis[Block, Set[LocalVar]]:
    
    def analyzeUncached(block: Block): Set[LocalVar] = block match
      case Assign(lhs: LocalVar, rhs, rst) =>
        // TODO techni
        rst.analyze ++ rhs.subBlocks.iterator.flatMap(analyze) + lhs
      case _ => block.subBlocks.iterator.flatMap(analyze).toSet
    
  end DefinedVars
  */
  object LocalVars extends CachedAnalysis[Block, Set[LocalVar]]:
    
    def analyzeUncached(block: Block): Set[LocalVar] = block match
      // case Assign(lhs: LocalVar, rhs, rst) =>
      //   // TODO techni
      //   rst.analyze ++ rhs.subBlocks.iterator.flatMap(analyze) + lhs
      case Scoped(syms, rest) =>
        rest.analyze ++ syms.iterator.collect { case v: LocalVar => v }
      case _ => block.subBlocks.iterator.flatMap(analyze).toSet
    
  end LocalVars
  
  
  // ——————————————————————————————————————————————————————————————————————————————————————————— //
  
  
  class DeadCodeElim() extends BlockTransformer(SymbolSubst.Id), Helper:
    
    val usedLabels = MutSet.empty[LabelSymbol]
    val definedVars = MutSet.empty[Local]
    val localVars = MutSet.empty[Local]
    val usedVars = MutSet.empty[Local]
    var tailLabels = MutSet.empty[LabelSymbol]
    
    def apply(prog: Program): Program =
      
      new BlockTraverser:
        
        applyProgram(prog)
        
        override def applyDefn(defn: Defn): Unit =
          defn match
          case cls: ClsLikeDefn =>
            localVars ++= cls.privateFields
            cls.companion.foreach(localVars ++= _.privateFields)
          case _ =>
          super.applyDefn(defn)
        
        override def applyPath(p: Path): Unit =
          p match
            case Value.Ref(loc, _) =>
              usedVars += loc
            case _ =>
          super.applyPath(p)
        
        override def applyBlock(b: Block): Unit =
          b match
            case Define(defn, rst) =>
              definedVars += defn.sym
            case Scoped(syms, _) =>
              localVars ++= syms
            case Break(lbl) => usedLabels += lbl
            case Continue(lbl) => usedLabels += lbl
            case Assign(lhs, rhs, rst) =>
              definedVars += lhs
            case _ =>
          super.applyBlock(b)
      
      applyProgram(prog)
    
    // Evaluate `thunk` with a new tail label set. This is used for evaluating any sub blocks that is not in the tail position.
    // For example, the match arms within a `Match` node are not in the tail position unless the rest block is `End`.
    // When evaluating the match arms, the tail labels should not be considered to be at tail.
    // The tail label set is restored after `thunk` completes.
    inline def nestLabelCtx[T](inline thunk: => T): T =
      val oldTailLabels = tailLabels
      tailLabels = MutSet.empty
      val result = thunk
      tailLabels = oldTailLabels
      result
    
    // Add the new label to the tail label set during the execution of `thunk`.
    inline def withTailLabel[T](newLabel: LabelSymbol)(inline thunk: => T): T =
      assert(!tailLabels.contains(newLabel))
      tailLabels += newLabel
      val result = thunk
      tailLabels -= newLabel
      result
    
    // * Cached analysis to find which labels are the targets of `break`s in a given block
    object BrokenLabels extends CachedAnalysis[Block, Set[LabelSymbol]]:
      
      def analyzeUncached(block: Block): Set[LabelSymbol] = block match
        case Break(lbl) => Set.single(lbl)
        case _ => block.subBlocks.iterator.flatMap(analyze).toSet
      
    end BrokenLabels
    
    
    // * Cached analysis to find whether a block is abortive
    // * (i.e. always throws, returns, breaks, continues, or is unreachable)
    object AbortiveAnalysis extends CachedAnalysis[Block, Bool]:
      
      def analyzeUncached(block: Block): Bool = block match
        case Scoped(syms, body) =>
          body.analyze
        case Match(scrut, arms, dflt, rest) =>
          rest.analyze || arms.forall(_._2.analyze) && dflt.exists(_.analyze)
        case Begin(sub, rest) =>
          sub.analyze || rest.analyze
        case Define(defn, rest) =>
          // TODO: we could also analyse the effects of the extends clauses and companion module ctor
          rest.analyze
        case x: (Assign | AssignField | AssignDynField) =>
          x.rest.analyze
        case TryBlock(sub, finallyDo, rest) =>
          sub.analyze || rest.analyze
        case Label(lbl, loop, bod, rst) =>
          bod.analyze
            && !BrokenLabels.analyze(bod).contains(lbl) // if `bod` breaks to `lbl`, then we must consider `rst`
            || rst.analyze
        case _: Throw | Return(_, false) | _: Unreachable | _: Continue | _: Break => true
        case Return(_, true) => false
        case _: End => false
        case HandleBlock(lhs, res, par, args, cls, handlers, body, rest) =>
          body.analyze || rest.analyze
        
    end AbortiveAnalysis
    
    
    val removedLocals: MutSet[Local] = MutSet.empty
    
    
    override def applyValue(v: Value)(k: Value => Block) = v match
      // * Replace with `undefined` those references to local variables that are never assigned
      case Value.Ref(loc, N) if localVars.contains(loc) && !definedVars.contains(loc) =>
        registerChange("TODO")
        if !symbolsToPreserve(loc) then removedLocals += loc
        k(Value.Lit(syntax.Tree.UnitLit(false)))
      case _ => super.applyValue(v)(k)
    
    override def applyBlock(b: Block): Block = b match
      
      // * Discard assignments to local variables that are never read (and are not preserved)
      case Assign(lhs, rhs, rst) if localVars(lhs) && !usedVars(lhs) && !symbolsToPreserve(lhs) =>
        registerChange(s"rm ${lhs.showDbg} = ${rhs.showDbg}")
        removedLocals += lhs
        applyResult(rhs)(r => Assign.discard(r, applyBlock(rst)))
      
      // * Remove local pure definitions that are never read (and are not preserved)
      case Define(defn, rest) =>
        if !defn.isPure
        || !localVars(defn.sym)
        || usedVars(defn.sym)
        || symbolsToPreserve(defn.sym)
        then super.applyBlock(b)
        else
          registerChange("TODO")
          removedLocals += defn.sym
          applyBlock(rest)
        
      // * Simplify labelled blocks
      case Label(lbl, loop, bod, rst) =>
        if !BrokenLabels.analyze(bod).contains(lbl) && AbortiveAnalysis.analyze(bod) && !rst.isInstanceOf[Unreachable] then
          registerChange("TODO")
          val unr = Unreachable("Rest of abortive labelled block")
          if usedLabels.contains(lbl)
          then Label(lbl, loop, nestLabelCtx(applyBlock(bod)), unr)
          else Begin(nestLabelCtx(applyBlock(bod)), unr)
        else
          if usedLabels.contains(lbl) then
            def computeBod =
              withTailLabel(lbl):
                applyBlock(bod)
            val lbl2 = lbl.subst
            val bod2 = if rst.isEmpty && !loop then computeBod else nestLabelCtx(computeBod)
            val rst2 = applySubBlock(rst)
            if (lbl2 is lbl) && (bod2 is bod) && (rst2 is rst) then b else Label(lbl2, loop, bod2, rst2)
          else
            registerChange("TODO")
            Begin(nestLabelCtx(applyBlock(bod)), applyBlock(rst))
      
      // * Remove useless break
      case Break(label) if tailLabels.contains(label) =>
        log(s"Break ${label} is eliminated: current tail label list is ${tailLabels}")
        registerChange("TODO")
        End()
      
      case x => super.applyBlock(x)
    
    
    // FIXME: refactor transformers so this is not so error-prone (adding this case to `applyBlock` doesn't work)
    override def applyScopedBlock(b: Block): Block = b match
      // * Delete removed local variables from Scoped blocks
      case Scoped(syms, body) =>
        val body2 = applyBlock(body)
        // println(s">> $body2 ${body is body2}")
        // println(s">> $body2 ${changed}")
        if changed then
        // if changed || (body isnt body2) then
          val syms2 = syms.filterNot(removedLocals)
          // println(s">> $syms $syms2 ${removedLocals}")
          if syms2.size === syms.size && (body2 is body) then b
          else Scoped(syms2, body2)
        else b
      case _ => super.applyScopedBlock(b)
    
    override def applyFunBodyLikeBlock(b: Block): Block =
      nestLabelCtx:
        super.applyFunBodyLikeBlock(b)
    
    override def applySubBlockNonTail(b: Block): Block =
      nestLabelCtx:
        super.applySubBlockNonTail(b)
    
  end DeadCodeElim
  
  
  // ——————————————————————————————————————————————————————————————————————————————————————————— //
  
  
  /** Simple propagation of values inwards; does not require any merges at join points. */
  class ValuePropagation(localVars: Set[LocalVar]) extends BlockTransformer(SymbolSubst.Id), Helper:
    
    
    val capturedVars = MutSet.empty[LocalVar]
    // ^ TODO: technically, all we need to prevent is changes to `nonLocallyAssignedVars`,
    //    so we should compute that instead.
    
    
    def apply(prog: Program): Program =
      new BlockTraverser:
        applyProgram(prog)
        
        override def applyDefn(defn: Defn): Unit =
          defn match
          case _: ClsLikeDefn | _: FunDefn =>
            capturedVars ++= defn.freeVars.iterator.collect { case v: LocalVar => v }
          case _ =>
          super.applyDefn(defn)
        
        override def applyLam(lam: Lambda): Unit =
          capturedVars ++= lam.freeVars.iterator.collect { case v: LocalVar => v }
          super.applyLam(lam)
        
      end new
      
      log(s"Captured variables: ${capturedVars}")
      
      applyProgram(prog)
    end apply
    
    
    enum Assignment:
      case Unknown
      case Uninitialized
      case Assigned(asst: Assign, varAsst: Opt[Value.Ref -> Assignment])
      case Merge(asst1: Assignment, asst2: Assignment)
      
      override def toString: String = this match
        case Unknown => "?"
        case Uninitialized => "∅"
        case Assigned(asst, varAsst) => s"${asst.rhs}${varAsst.fold("")("‹"+_+"›")}"
        case Merge(a1, a2) => s"{${a1.toString} | ${a2.toString}}"
      
    import Assignment.*
    
    
    type AssignedResults = Map[LocalVar, Assignment]
    
    val emptyAssignedResults: AssignedResults = Map.empty.withDefaultValue(Unknown)
    
    // *** ASSUMPTION: only LocalVar symbols can be Assign'ed ***
    var assignedResults: AssignedResults = emptyAssignedResults
    var inDryRun = false // for traversing loop bodies once before actually transforming the program
    
    def withFreshAssignedResults[T](thunk: => T): T =
      val oldAssignedResults = assignedResults
      assignedResults = emptyAssignedResults
      val res = thunk
      assignedResults = oldAssignedResults
      res
    
    val atLabelBegin: MutMap[LabelSymbol, AssignedResults] = MutMap.empty.withDefaultValue(emptyAssignedResults)
    val atLabelEnd: MutMap[LabelSymbol, AssignedResults] = MutMap.empty.withDefaultValue(emptyAssignedResults)
    
    def merge(ar1: AssignedResults, ar2: AssignedResults): AssignedResults =
      mergeMap(ar1, ar2)((a, b) => if a is b then a else Merge(a, b)).withDefaultValue(Unknown)
    
    
    override def applyDefn(defn: Defn)(k: Defn => Block): Block =
      defn match
      case _: ValDefn => super.applyDefn(defn)(k)
      case defn: (FunDefn | ClsLikeDefn) =>
        if inDryRun then k(defn)
        else
          val oldAssignedResults = assignedResults
          assignedResults = emptyAssignedResults
          super.applyDefn(defn): res =>
            assignedResults = oldAssignedResults
            k(res)
    
    override def applyBlock(b: Block): Block = trace[Block](s"Applying block: ${b} with map: ${assignedResults}", res => s"|= ${assignedResults}"):
      // log(s"Applying block: ${b} with map: ${assignedResults}")
      b match
      case ass @ Assign(lhs: LocalVar, rhs, rst) if !capturedVars(lhs) =>
        log(s"Propagating ${lhs} := ${rhs} (${assignedResults.get(lhs)})")
        assignedResults += lhs -> Assigned(ass, rhs.match
          case r @ Value.Ref(sym: LocalVar, N) =>
            if capturedVars(sym) then N
            else
              val rhs2 = assignedResults(sym)
              S(r -> rhs2)
          case r @ Value.Ref(sym, _) =>
            S(r -> Unknown)
          case _ => N
        )
        log(s"NEW assignedResults: ${assignedResults}")
        super.applyBlock(b)
      case Assign(lhs, rhs, rst) =>
        log(s"Not propagating ${lhs} := ${rhs}")
        super.applyBlock(b)
      case Label(label, loop, body, rest) =>
        
        // TODO:
        // assert(!atLabelBegin.contains(label) && !atLabelEnd.contains(label))
        
        if loop then
          atLabelBegin.put(label, assignedResults)
          val oldDryRun = inDryRun
          inDryRun = true
          applyBlock(body)
          inDryRun = oldDryRun
          assignedResults = merge(assignedResults, atLabelEnd(label))
        if !loop || !inDryRun then
          val newBody = applyBlock(body)
          assignedResults = merge(assignedResults, atLabelEnd(label))
          val newRest = applySubBlock(rest)
          if (newBody is body) && (newRest is rest) then b
          else Label(label, loop, newBody, newRest)
        else
          // During dry run, still need to traverse `rest` to discover
          // assignments and continues that may affect outer loop analysis.
          applyBlock(rest)
          b
      case Continue(label) =>
        log(s"Continue to ${label} with map: ${assignedResults}")
        log(s"  atLabelBegin: ${atLabelBegin(label)}")
        atLabelBegin.put(label, merge(assignedResults, atLabelBegin(label)))
        super.applyBlock(b)
      case Break(label) =>
        atLabelEnd.put(label, merge(assignedResults, atLabelEnd(label)))
        super.applyBlock(b)
      case Match(scrut, arms, dflt, rest) =>
        val oldAssigned = assignedResults
        var curAssigned = oldAssigned
        val newArms = arms.mapConserve:
          case arm @ (cse, body) =>
            val newBody = applyBlock(body)
            curAssigned = merge(curAssigned, assignedResults)
            assignedResults = oldAssigned
            if newBody is body then arm else cse -> newBody
        val newDflt = dflt.mapConserve:
          case body =>
            val newBody = applyBlock(body)
            curAssigned = merge(curAssigned, assignedResults)
            assignedResults = oldAssigned
            if newBody is body then body else newBody
        if newDflt.isEmpty then curAssigned = merge(curAssigned, assignedResults)
        assignedResults = curAssigned
        val restRewritten = applySubBlock(rest)
        if (newArms is arms) && (newDflt is dflt) && (restRewritten is rest) then b
        else Match(scrut, newArms, newDflt, restRewritten)
      case _ => 
        super.applyBlock(b)
    
    // FIXME: refactor transformers so this is not so error-prone (adding this case to `applyBlock` doesn't work)
    override def applyScopedBlock(b: Block): Block =
      b match
      case Scoped(syms, body) =>
        syms.foreach:
          case sym: LocalVar =>
            assignedResults += sym -> Uninitialized
          case _ =>
        val res = super.applyScopedBlock(b)
        syms.foreach:
          case sym: LocalVar =>
            assignedResults += sym -> Uninitialized
          case _ =>
        res
      case _ =>
        super.applyScopedBlock(b)
    
    override def applyValue(v: Value)(k: Value => Block): Block =
      // log(s"Applying value: ${v} with assignedValue map: ${assignedValue}")
      v match
      case Value.Ref(loc: LocalVar, N) if !inDryRun && !capturedVars(loc) =>
        log(s"?? ${loc.showDbg} ${assignedResults.get(loc)} ${localVars(loc)} ${capturedVars(loc)}")
        val rs = assignedResults(loc)
        
        var litValue: Bool | Value = true
        var emptyHanded = false
        def analyzeValues(asst: Assignment): Set[Value.Ref] =
          if emptyHanded && litValue === false then Set.empty
          else asst match
            case Unknown =>
              // log(s"0")
              litValue = false
              Set.empty
            case Uninitialized => Set.empty
            case Assigned(ass, opt) =>
              if litValue =/= false then
                ass.rhs match
                case v @ Value.Lit(lit) =>
                  if litValue === true then
                    litValue = v
                  else if litValue =/= v then
                    // log(s"1 ${litValue} !== ${v}")
                    litValue = false
                case _ =>
                  // log(s"2")
                  litValue = false
              opt match
              case S((r @ Value.Ref(lv: LocalVar, N)) -> rhs) =>
                if assignedResults(lv) is rhs
                then Set.single(r) ++ analyzeValues(rhs)
                else Set.empty
              case S(lv -> rhs) =>
                Set.single(lv) ++ analyzeValues(rhs)
              case N => Set.empty
            case Merge(a1, a2) =>
              val l = analyzeValues(a1)
              if l.isEmpty && litValue === false then
                emptyHanded = true
                Set.empty
              else l & analyzeValues(a2)
        
        val vars = analyzeValues(rs)
        
        log(s"Analysis: litValue: ${litValue}, unchanged vars: ${vars}")
        
        litValue match
        case true =>
          registerChange(s"${loc.showDbg} ~> undefined")
          return k(Value.Lit(syntax.Tree.UnitLit(false)))
        case lit: Value =>
          registerChange(s"${loc.showDbg} ~> ${lit.showDbg}")
          return k(lit)
        case false =>
          vars.minByOption(_.l.uid) match
          case N => k(v)
          case S(v2) => 
            registerChange(s"${loc.showDbg} ~> ${v2.showDbg} (via ${vars.map(_.showDbg).mkString(", ")})")
            k(v2)
        
      case _ => super.applyValue(v)(k)
    
  end ValuePropagation
  
  
  // ——————————————————————————————————————————————————————————————————————————————————————————— //
  
  
  class Inliner(using Config.Inliner) extends Helper:
    
    def apply(prog: Program): Program =
      val m = InlinerAnalyzer.walk(prog.main)
      InlinerReplacer.replace(m, prog)
    
    object Helpers:
      
      // Reference to a function body can occur as a.f or f, this handles both cases.
      object TermSymbolPath:
        def unapply(p: Path) = p match
          case Value.Ref(l, S(ts: TermSymbol)) => S(ts)
          case s: Select => s.symbol match
            case S(ts: TermSymbol) => S(ts)
            case _ => N
          case _ => N
      
      def matchArgs(args: List[Arg], params: ParamList): Option[List[(VarSymbol, Result)]] =
        if args.exists(_.spread.isDefined) then
          // we require a precise match when any arg is a spread arg
          if params.restParam.isEmpty then return N
          if args.exists(_.spread.exists(!_.isEager)) then return N
          if args.size =/= params.params.size then return N
          val pairs = args.zip(params.params.iterator.map((_, false)) ++ params.restParam.map((_, true)))
          if pairs.exists((arg, param) => arg.spread.isDefined =/= param._2) then return N
          S(pairs.map((arg, param) => (param._1.sym, arg.value)))
        else
          // otherwise arg list is a simple list, and
          // we can perform manual array instantiation if params contain a spread param
          if params.restParam.isEmpty then
            if args.size =/= params.params.size then return N
            S(args.zip(params.params).map((arg, param) => (param.sym, arg.value)))
          else
            if args.size < params.params.size then return N
            val (fixedArgs, restArgs) = args.splitAt(params.params.size)
            S(fixedArgs.zip(params.params).map((arg, param) => (param.sym, arg.value)) ++
              List((params.restParam.get.sym, Tuple(true, restArgs))))
    
    import Helpers.*
    
    object InlinerAnalyzer:
      case class InlinerFunInfo(
        defn: FunDefn,
        isMethod: Bool,
        private[InlinerAnalyzer] var useCount: Int,
        private[InlinerAnalyzer] var hasNakedRef: Bool,
        private[InlinerAnalyzer] var isLoopBreaker: Bool,
      ):
        def isPrivate = !symbolsToPreserve.contains(defn.sym)
        
        // Whether this function can be inlined without causing any code duplication,
        // i.e. the original definition can be removed and there is only one usage.
        def canBeInlineEliminated =
          isPrivate && !isMethod && useCount <= 1 && !hasNakedRef && !isLoopBreaker
          // false
        
        def shouldBeInlined(newBlk: Block): Bool =
          if isLoopBreaker then return false
          // method requires the capturing of `this`, which is not supported currently.
          if isMethod then return false
          val threshold = summon[Config.Inliner].inlineThreshold
          newBlk.size <= threshold || canBeInlineEliminated
        
      type InlinerMap = Map[TermSymbol, InlinerFunInfo]
      
      case class FunLikeContext(
        curFunSym: Opt[TermSymbol],
      )
      
      class Traverser extends BlockTraverser:
        var map: InlinerMap = Map.empty
        val useCnt = MutMap.WithDefault(MutMap.empty[TermSymbol, Int], _ => 0)
        val usages = MutMap.WithDefault(MutMap.empty[TermSymbol, List[(Option[TermSymbol], Call)]], _ => Nil)
        val hasNakedRef = MutMap.WithDefault(MutMap.empty[TermSymbol, Bool], _ => false)
        var contextList: List[FunLikeContext] = FunLikeContext(N) :: Nil
        
        def currentContext = contextList.head
        
        def currentFunSym = currentContext.curFunSym
        
        def nested(ts: Option[TermSymbol])(thunk: => Unit) =
          contextList = FunLikeContext(ts) :: contextList
          thunk
          val res = contextList.head
          contextList = contextList.tail
          res
        
        def addFunctionAndApplyBody(f: FunDefn, isMethod: Bool) =
          val r = nested(S(f.dSym)):
            applyBlock(f.body)
          map = map + (f.dSym -> InlinerFunInfo(f, isMethod, 0, false, false))
        
        override def applyDefn(defn: Defn): Unit = defn match
          case f: FunDefn =>
            addFunctionAndApplyBody(f, false)
          case c: ClsLikeDefn =>
            c.parentPath.foreach(applyPath)
            c.methods.foreach: f =>
              addFunctionAndApplyBody(f, true)
            // Note: no tracking, since `Instantiate` will not be inlined and won't cause cycles.
            nested(N):
              applySubBlock(c.preCtor)
              applySubBlock(c.ctor)
            c.companion.foreach: m =>
              m.methods.foreach: f =>
                addFunctionAndApplyBody(f, true)
              // This inherits the previous context as the module ctor is run with the constructor.
              applySubBlock(m.ctor)
          case _ => super.applyDefn(defn)
        
        override def applyResult(r: Result): Unit = r match
          case c @ Call(TermSymbolPath(ts), args) =>
            useCnt(ts) += 1
            usages(ts) ::= (currentFunSym, c)
            args.foreach(applyArg)
          case _ => super.applyResult(r)
        
        override def applySymbol(sym: Symbol): Unit =
          sym.asTrm.foreach: ts =>
            useCnt(ts) += 1
            hasNakedRef(ts) = true
        
        def analyze(blk: Block): InlinerMap =
          applyBlock(blk)
          map.foreach: (sym, info) =>
            info.useCount = useCnt(sym)
            info.hasNakedRef = info.hasNakedRef || hasNakedRef(sym)
          val edges: Buffer[(TermSymbol, TermSymbol)] = Buffer.empty
          usages.foreach: (sym, calls) =>
            calls.foreach: (caller, call) =>
              if map.contains(sym) then
                map(sym).hasNakedRef = map(sym).hasNakedRef ||
                  map(sym).defn.params.sizeCompare(1) =/= 0 || matchArgs(call.args, map(sym).defn.params.head).isEmpty
                caller.foreach: caller =>
                  edges.append((caller, sym))
          
          @tailrec
          def assignLoopBreakers(): Unit =
            val sccs = partitionScc(edges.filterNot((from, to) => map(to).isLoopBreaker), map.keys)
            if sccs.forall(_.sizeIs == 1) then return
            sccs.foreach: sccComp =>
              if sccComp.sizeIs > 1 then
                // TODO: Score computation
                map(sccComp.minBy(_.uid)).isLoopBreaker = true
            assignLoopBreakers()
          edges.foreach: (from, to) =>
            if from === to then
              map(from).isLoopBreaker = true
          assignLoopBreakers()
          map
      
      def walk(blk: Block): InlinerMap = Traverser().analyze(blk)
    
    end InlinerAnalyzer
    import InlinerAnalyzer.InlinerMap
    
    
    object InlinerReplacer:
      
      class Copier(resSym: Symbol, existingMapping: Map[Symbol, Symbol])(using State):
        val lblSym = LabelSymbol(N, "inlinedLbl")
        
        object Copier extends SymbolRefresher(existingMapping):
          var currentlyNested = false
          
          override def applyFunBodyLikeBlock(b: Block): Block =
            val saved = currentlyNested
            currentlyNested = true
            val res = super.applyFunBodyLikeBlock(b)
            currentlyNested = saved
            res
          
          override def applyBlock(b: Block): Block = b match
            case Return(res, false) if !currentlyNested =>
              applyResult(res): r2 =>
                Assign(resSym, r2, Break(lblSym))
            case _ => super.applyBlock(b)
        
        def applyBlock(blk: Block) =
          Label(lblSym, false, Copier.applyBlock(blk), _)
      
      class Transformer(m: InlinerMap) extends BlockTransformer(SymbolSubst()):
        
        // The call graph may be cyclic, in which case we break the infinite loop using this map by
        // assuring that the block corresponding to a term symbol may only be transformed once.
        // This map also allows the function block to be optimized on first use before its declaration.
        // Key not in map -> not yet analyzed
        // Key in map but value is None -> the optimized body is being computed
        // Key in map with value -> the function is optimized
        val newFunctionBody = MutMap.empty[TermSymbol, Option[Block]]
        
        override def applyMainBlock(main: Block): Block =
          super.applyMainBlock(main).flattened
        
        override def applyBlock(blk: Block) =
          // println(s"!?")
          blk match
          case Define(defn: FunDefn, rest) if m(defn.dSym).canBeInlineEliminated =>
            log(s"Inline elimination: ${defn.dSym}")
            registerChange("TODO")
            applyBlock(rest)
          case _ => super.applyBlock(blk)
        
        override def applyFunDefn(fun: FunDefn): FunDefn =
          newFunctionBody.get(fun.dSym) match
            case N =>
              newFunctionBody(fun.dSym) = N
              val newBdy = applyBlock(fun.body)
              newFunctionBody(fun.dSym) = S(newBdy)
              if newBdy is fun.body then fun else
              FunDefn(fun.owner, fun.sym, fun.dSym, fun.params, newBdy)(fun.forceTailRec, fun.configOverride, fun.visibility)
            case S(N) =>
              // The expansion of the function body itself reaches its own definition, which is impossible
              lastWords("Function body contains its own definition.")
            case S(S(blk)) =>
              if blk is fun.body then fun else
              FunDefn(fun.owner, fun.sym, fun.dSym, fun.params, blk)(fun.forceTailRec, fun.configOverride, fun.visibility)
        
        override def applyResult(r: Result)(k: Result => Block): Block = r match
          case Call(TermSymbolPath(ts), args) if m.contains(ts) =>
            newFunctionBody.get(ts)
            .getOrElse:
              newFunctionBody(ts) = N
              val newBdy = applyBlock(m(ts).defn.body)
              newFunctionBody(ts) = S(newBdy)
              S(newBdy)
            .fold(super.applyResult(r)(k)): blk =>
              val info = m(ts)
              if !info.shouldBeInlined(blk) || info.defn.params.size =/= 1 then
                super.applyResult(r)(k)
              else
                val matchedArgs = matchArgs(args, info.defn.params.head)
                matchedArgs match
                case N =>
                  super.applyResult(r)(k)
                case S(matchedArgs) =>
                  registerChange("TODO")
                  log(s"Inline call for ${ts}, with args ${args}")
                  def go(acc: Block => Block, args: List[(VarSymbol, Result)], mapping: Map[Symbol, Symbol]): Block =
                    args match
                    case Nil =>
                      val resSym = TempSymbol(N, "inlinedVal")
                      val copier = Copier(resSym, mapping)
                      val newBlk = copier.applyBlock(blk)
                      acc(Scoped(Set.single(resSym), newBlk(k(Value.Ref(resSym)))))
                    case (sym, value) :: argRest =>
                      val newSym = VarSymbol(sym.id)
                      go(acc.assignScoped(newSym, value), argRest, mapping + (sym -> newSym))
                  go(blockBuilder, matchedArgs, Map.empty)
          case _ => super.applyResult(r)(k)
      
      def replace(m: InlinerMap, prog: Program): Program =
        Transformer(m).applyProgram(prog)
    
    end InlinerReplacer
    
  end Inliner
  
  
  // ——————————————————————————————————————————————————————————————————————————————————————————— //
  
  
end BlockSimplifier


