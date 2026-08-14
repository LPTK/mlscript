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
import hkmc2.semantics.flow.{SelectionTarget, AppTarget}


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
  
  // * The `FlowSymbol`s are currently used to uniquely identify terms
  val selShapes: mutable.Map[(TermShape, FlowSymbol), SelShape] = mutable.Map.empty
  val appShapes: mutable.Map[(TermShape, FlowSymbol), AppShape] = mutable.Map.empty
  val newShapes: mutable.Map[(TermShape, FlowSymbol), NewShape] = mutable.Map.empty
  val introShapes: mutable.Map[IntroTerm, IntroShape] = mutable.Map.empty // TODO use symbols for faster lookup?
  val symShapes: mutable.Map[BlockMemberSymbol, SymShape] = mutable.Map.empty
  val defnShapes: mutable.Map[DefinitionSymbol[?], DefnShape] = mutable.Map.empty
  
  // def getSelShape(lhs: Shape, nme: Tree.Ident): SelShape =
  //   selShapes.getOrElseUpdate((lhs, nme.name), SelShape(lhs, nme))
  
  // def zip(ps: Ls[Param], r: Opt[Param], args: Ls[Term]): Ls[(Param, Term)] =
  def zipArgs(ps: Ls[Param], r: Opt[Param], args: Ls[Elem], src: Term): Unit =
    (ps, args) match
    case (Nil, Nil) => ()
    // case (Nil, Spd(k, t) :: args) =>
    //   zip(Nil, r, args)
    case (Nil, args) =>
      r match
      case N =>
        raise:
          ErrorReport(
            msg"Arity mismatch: expected ${ps.length} arguments, but got ${args.length}" -> src.toLoc :: Nil,
            source = Diagnostic.Source.Compilation)
      case S(p) =>
        // ??? // TODO: r
        val packaged = new Tup(args)(Tree.DummyTup).withLoc(Loc.mk(args.iterator.flatMap(_.toLoc)))
        /* 
        listenTerm(packaged, sh =>
          log(s"zipArg: r = ${p.showDbg}, packaged = ${packaged.showDbg}, sh = $sh, ${p.sym.shapeListeners}")
          if p.sym.shapes.add(sh) then
            p.sym.shapeListeners.foreach(listener => listener(sh))
        )
        */
        val sh = IntroShape(packaged)
        p.sym.shapeListeners.foreach(_(sh))
    case (p :: ps, Fld(fls, trm, asc) :: args) =>
      // (p, a) :: zip(ps, r, args)
      listenTerm(trm, sh =>
        log(s"zipArg: p = ${p.showDbg}, trm = ${trm.showDbg}, sh = $sh")
        if p.sym.shapes.add(sh) then
          p.sym.shapeListeners.foreach(listener => listener(sh))
      )
      zipArgs(ps, r, args, src)
    case _ =>
      raise:
        ErrorReport(
          msg"Arity mismatch: expected ${ps.length} arguments, but got ${args.length}" -> src.toLoc :: Nil,
          source = Diagnostic.Source.Compilation)
          
  def appShape(lhs: TermShape, args: Term, res: App): Unit =
    // log(s"appShape? lhs = $lhs, args = $args, res = $res")
    val sh = appShapes.getOrElseUpdate((lhs, res.resSym), {
      log(s"appShape: lhs = $lhs, args = $args, res = $res")
      // lhs match
      // case _ =>
      val sh = new AppShape(lhs, args, res):
        def get(sym: BlockMemberSymbol): Opt[AppTarget] =
          // println(s"? $sym ${sym.asCls}")
          sym.asCls match
          case S(clsSym) =>
            S(AppTarget.ObjectMember(clsSym))
          case N =>
            N
        val target = receiver match
          /* 
          case ss: SymShape =>
            get(ss.sym)
          case sel: SelShape =>
            sel.target match
            case S(SelectionTarget.ObjectMember(sym: BlockMemberSymbol)) => get(sym)
            case S(SelectionTarget.ObjectMember(sym)) => ???
            case S(SelectionTarget.CompanionMember(comp, sym)) => ???
            case tg @ S(SelectionTarget.Err(err)) =>
              // S(ErrShape(err))
              sel.src.isErroneous = true
              N
            case N => N
          */
          case ds: DefnShape =>
            ds.defn match
            case td: TermDefinition =>
              td.tsym match
              case ctd: ClassCtorSymbol =>
                S(AppTarget.ObjectMember(ctd.associatedCls))
              case _ =>
                // TODO: raise error
                N
            case _ =>
              // TODO: raise error
              N
          case sh =>
            res.isErroneous = true
            raise:
              ErrorReport(
                msg"${sh.describe.capitalize} cannot be applied." -> res.toLoc :: Nil,
                source = Diagnostic.Source.Compilation)
            N
        target.foreach: tgt =>
          res.resolvedTargets ::= tgt
        /* 
        lazy val members: Map[Str, BlockMemberSymbol] = target match
          case S(AppTarget.ObjectMember(cls)) =>
            cls.defn.getOrElse(die // TODO
              ).body.members
          case _ => Map.empty
        */
      // if res.shapes.add(sh) then
      //   res.shapeListeners.foreach(listener => listener(sh))
      sh
    })
    lhs.unappliedParams match
    case Nil => ()
    case ps :: pss =>
      // listenTerm(args, sh =>
      //   if res.shapes.add(sh) then
      //     res.shapeListeners.foreach(listener => listener(sh))
      // )
      args match
      case args: Tup =>
        log(s"Zipping ${ps} with ${args.fields}")
        zipArgs(ps.params, ps.restParam, args.fields, res)
      case _ => ???
    log(s"appShape isSaturated? ${sh.isSaturated}; head? ${sh.applicationHead}")
    def register = if res.shapes.add(sh) then
      res.shapeListeners.foreach(listener => listener(sh))
    if sh.isSaturated then
      sh.applicationHead match
      case ds: DefnShape =>
        ds.defn match
        case td: TermDefinition =>
          // listenTerm(td.body, sh => newShape(sh, args, res))
          td.tsym match
          case ccs: ClassCtorSymbol =>
            softAssert(td.body.isEmpty)
            // ccs.associatedCls
            register
          case _ =>
            log(s"appShape: td.body = ${td.body}")
            td.body.foreach: body =>
              listenTerm(body, sh =>
                if res.shapes.add(sh) then
                  res.shapeListeners.foreach(listener => listener(sh))
              )
        case _ =>
          raise:
            ErrorReport(
              msg"${ds.describe.capitalize} cannot be applied." -> res.toLoc :: Nil,
              source = Diagnostic.Source.Compilation)
      // case _ => ???
    else register
  
  def newShape(lhs: TermShape, ass: Ls[Term], res: Term.New): Unit =
    // log(s"newShape? lhs = $lhs, args = $args, res = $res")
    val sh = newShapes.getOrElseUpdate((lhs, res.resSym), {
      log(s"newShape: lhs = $lhs, args = $ass, res = $res")
      new NewShape(lhs, ass, res):
        log(s"newShape isSaturated? ${isSaturated}; head? ${applicationHead}")
        if !isSaturated then
          raise:
            ErrorReport(
              msg"Missing argument list(s) in instantiation of ${lhs.applicationHead.describe}" -> res.toLoc :: Nil,
              source = Diagnostic.Source.Compilation)
        log(s"Zipping ${receiver.unappliedParams} with $argss")
        receiver.unappliedParams.lazyZip(argss).foreach: (ps, args) =>
          args match
          case args: Tup =>
            zipArgs(ps.params, ps.restParam, args.fields, res)
          case _ => ???
        lazy val members: Map[Str, BlockMemberSymbol] =
          receiver match
          case ds: DefnShape =>
            ds.defn match
            case cd: ClassDef =>
              cd.body.members
            case td: TermDefinition =>
              td.tsym match
              case ccs: ClassCtorSymbol =>
                ccs.associatedCls.defn.getOrElse(die // TODO
                  ).body.members
              case _ =>
                Map.empty
            case _ =>
              Map.empty
          case _ =>
            Map.empty
        // def getFromCls(cls: ClassSymbol): Opt[SelectionTarget] =
        //   getFromClsTree(cls.tree)
        // def members: Map[Str, BlockMemberSymbol] = ???
        val target = receiver match
          // case ss: SymShape =>
          //   ()
          case ds: DefnShape =>
            ()
          case sh =>
            res.isErroneous = true
            raise:
              ErrorReport(
                msg"${sh.describe.capitalize} cannot be instantiated with keyword 'new'." -> res.toLoc :: Nil,
                source = Diagnostic.Source.Compilation)
            N
    })
    if res.shapes.add(sh) then
      res.shapeListeners.foreach(listener => listener(sh))
  
  // def selShape2(lhs: TermShape, id: Tree.Ident, res: NewSel): Unit =
  //   log(s"selShape? lhs = $lhs, nme = $id, res = $res")
  //   listenTerm(lhs, sh => selShape(sh, id, res))
  def newSel(sel: NewSel): Unit =
    log(s"newSel? sel = ${sel.showDbg}")
    listenTerm(sel.prefix, shape => {
      shape.members.get(sel.id.name) match
        case S(bms) =>
          sel.resolvedMembers ::= bms
          val sh = symShapes.getOrElseUpdate(bms, SymShape(bms))
          if sel.shapes.add(sh) then
            sel.shapeListeners.foreach(listener => listener(sh))
        case N =>
          sel.isErroneous = true
          raise:
            ErrorReport(
              msg"${shape.describe.capitalize} does not contain member '${sel.id.name}'" -> sel.id.toLoc :: Nil,
              source = Diagnostic.Source.Compilation)
          // N
    })
  
  def resolveNew(nw: Term.New): Unit =
    log(s"resolveNew? res = ${nw.showDbg}")
    listenTerm(nw.cls, shape => newShape(shape, nw.args, nw))
  
  def selShape(lhs: TermShape, id: Tree.Ident, res: AnySelTerm): Unit =
    log(s"selShape? lhs = $lhs, nme = $id, res = $res")
    val sh = selShapes.getOrElseUpdate((lhs, res.resSym), {
      log(s"selShape: lhs = $lhs, nme = $id, res = $res")
      // lhs match
      // case _ =>
      val sh = new SelShape(lhs, id, res):
        /* 
        def getFromCls(cls: ClassSymbol): Opt[SelectionTarget] =
          getFromClsTree(cls.tree)
        // TODO: only use `getFromCls`...
        def getFromClsTree(cls: Tree.TypeDef): Opt[SelectionTarget] =
          // log(s"?!! ${cls.definedSymbols}")
          cls.allSymbols.get(nme.name) match
          case s @ S(clsSym) =>
            S(SelectionTarget.ObjectMember(clsSym))
          case N =>
            res.isErroneous = true
            val rep = 
              ErrorReport(msg"${cls.k.desc.capitalize} '${cls.symbol.nme
                }' does not contain member '${nme.name}'" -> res.toLoc :: Nil)
            raise(rep)
            // S(ErrShape(rep))
            S(SelectionTarget.Err(rep))
        def get(sym: BlockMemberSymbol): Opt[SelectionTarget] =
          // log(s"?! ${sym.modOrObjTree}")
          /* 
          sym.modOrObjTree match
          case S(cls) =>
            // log(s"?!! ${cls.definedSymbols}")
            cls.definedSymbols.get(nme.name) match
            case s @ S(clsSym) =>
              S(SelectionTarget.ObjectMember(clsSym))
            case N =>
              res.isErroneous = true
              val rep = 
                ErrorReport(msg"${cls.k.desc.capitalize} '${cls.symbol.nme
                  }' does not contain member '${nme.name}'" -> res.toLoc :: Nil)
              raise(rep)
              // S(ErrShape(rep))
              S(SelectionTarget.Err(rep))
          case N =>
            N
          */
          sym.modOrObjTree.flatMap(getFromClsTree)
        val target = receiver match
          case ss: SymShape =>
            /* 
            log(s"?! ${ss.sym.modOrObjTree}")
            ss.sym.modOrObjTree match
            case S(cls) =>
              log(s"?!! ${cls.definedSymbols}")
              cls.definedSymbols.get(nme.name) match
              case s @ S(clsSym) =>
                S(SelectionTarget.ObjectMember(clsSym))
              case N =>
                raise(ErrorReport(msg"${cls.k.desc.capitalize} '${cls.symbol.nme
                  }' does not contain member '${nme.name}'" -> res.toLoc :: Nil))
                N
            case N =>
              N
            */
            get(ss.sym)
          case app: AppShape =>
            app.target match
            // case S(AppTarget.ObjectMember(sym: BlockMemberSymbol)) => get(sym)
            // case S(AppTarget.ObjectMember(sym)) => ???
            case S(AppTarget.ObjectMember(cls)) =>
              getFromCls(cls)
            case tg @ S(AppTarget.Err(err)) =>
              // app.src.isErroneous = true // TODO
              N
            case N => N
          case sel: SelShape =>
            // sel.target.flatMap(get)
            sel.target match
            case S(SelectionTarget.ObjectMember(sym: BlockMemberSymbol)) => get(sym)
            case S(SelectionTarget.ObjectMember(sym)) => ???
            case S(SelectionTarget.CompanionMember(comp, sym)) => ???
            case tg @ S(SelectionTarget.Err(err)) =>
              // S(ErrShape(err))
              sel.src.isErroneous = true
              N
            case N => N
          case sh =>
            res.isErroneous = true
            raise:
              ErrorReport(
                msg"TODO error (${sh.describe})" -> res.toLoc :: Nil,
                source = Diagnostic.Source.Compilation)
            N
        */
        // val target = receiver.members.get(id.name).map(SelectionTarget.ObjectMember(_))
        val target = receiver.members.get(id.name) match
          case S(sym) => S(SelectionTarget.ObjectMember(sym)) // TODO: catch private accesses
          case N =>
            res.isErroneous = true
            raise:
              ErrorReport(
                msg"${receiver.describe.capitalize} does not contain member '${id.name}'" -> res.toLoc :: Nil,
                source = Diagnostic.Source.Compilation)
            N
        target.foreach: tgt =>
          res.resolvedTargets ::= tgt
        /*
        lazy val members: Map[Str, BlockMemberSymbol] = target match
          case S(SelectionTarget.ObjectMember(cls)) =>
            cls.defn.getOrElse(die // TODO
              ).body.members
          case _ => Map.empty
         */
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
  
  def defineVar(sym: LocalSymbol | TermSymbol, rhs: Term): DefineVar =
    if newResolution then sym match
      case sym: TermSymbol =>
        // symShape(sym, rhs)
        // ???
        // sym.defn.get
        println(s"TODO: defineVar for TermSymbol ${sym.showDbg}")
      case sym: LocalSymbol =>
        // symShape(sym, rhs)
        listen(rhs, sh =>
          if sym.shapes.add(sh) then
            sym.shapeListeners.foreach(listener => listener(sh))
        )
    DefineVar(sym, rhs)
  
  // /* 
  // def listenSym(sym: ModuleOrObjectSymbol | TermSymbol, listener: DefnShape => Unit): Unit =
  // def listenSym(sym: ModuleOrObjectSymbol | TermSymbol, listener: TermShape => Unit): Unit =
  def listenDefn(sym: TermSymbol, listener: TermShape => Unit): Unit =
    sym.defn match
    case S(td: TermDefinition) if td.params.isEmpty =>
      td.body match
      case S(body) =>
        listenTerm(body, listener)
      case N =>
        ??? // TODO error
    case S(d) =>
      listener(defnShapes.getOrElseUpdate(sym, DefnShape(d, N)))
    case N =>
      sym.defnListeners += (d => listener(defnShapes.getOrElseUpdate(sym, DefnShape(d, N))))
  // */
  def pipeTerm(from: Term, to: ShapeHost): Unit =
    log(s"pipeTerm: from = ${from.showDbg}, to = ${to.showDbg}; ${to.shapes}")
    listenTerm(from, sh =>
      if to.shapes.add(sh) then
        to.shapeListeners.foreach(listener => listener(sh))
    )
  
  def listenTerm(trm: Term, listener: TermShape => Unit): Unit =
    log(s"listenTerm: trm = ${trm.showDbg}")
    def fromBMS(bms: BlockMemberSymbol) =
      /* 
      bms.asModOrObj orElse bms.asTrm match
      case S(sym: (ModuleOrObjectSymbol | TermSymbol)) =>
        // listenSym(sym, defn => listener(ss))
        listenSym(sym, listener)
      case _ =>
        raise:
          ErrorReport(
            msg"expected a term shape, but got ${bms.describe}" -> trm.toLoc :: Nil,
            // msg"expected a term shape, but got ${bms.describe} (${bms.toString})" -> trm.toLoc :: Nil,
            source = Diagnostic.Source.Compilation)
      */
      log(s"listenBMS: bms = ${bms.describe}, trm = ${trm.showDbg}")
      bms.onComplete: () =>
        log(s"listenedBMS: bms = ${bms.describe}, trm = ${trm.showDbg}")
        bms.asModOrObj orElse bms.asTrm orElse bms.asCls match
        case S(sym: (ModuleOrObjectSymbol | TermSymbol | ClassSymbol)) =>
          sym.defn match
          case S(td: TermDefinition) if td.params.isEmpty =>
            log(s"listenTerm: td.body = ${td.body}")
            td.body match
            case S(body) =>
              listenTerm(body, listener)
            case N =>
              ??? // TODO error
          case S(d: TermDefinition) =>
            d.tsym match
            case ccs: ClassCtorSymbol =>
              // listener(defnShapes.getOrElseUpdate(sym, DefnShape(d, N)))
              // listener(defnShapes.getOrElseUpdate(sym, DefnShape(ccs.associatedCls.defn.get, N)))
              val cls = ccs.associatedCls.defn.get
              // val bse = DefnShape(cls, S(sh))
              cls.ext match
              case N =>
                listener(defnShapes.getOrElseUpdate(sym, DefnShape(d, S(BaseShape(cls, N)))))
              case S(nw) =>
                listenTerm(nw, sh =>
                  defnShapes.get(sym).foreach: existing =>
                    ??? // TODO error?
                  listener(defnShapes.getOrElseUpdate(sym, DefnShape(d, S(BaseShape(cls, S(sh))))))
                )
            case _ =>
              listener(defnShapes.getOrElseUpdate(sym, DefnShape(d, N)))
          case S(d: ClassLikeDef) =>
            d.ext match
            case N =>
              listener(defnShapes.getOrElseUpdate(sym, DefnShape(d, N)))
            case S(nw) =>
              listenTerm(nw, sh =>
                defnShapes.get(sym).foreach: existing =>
                  ??? // TODO error?
                listener(defnShapes.getOrElseUpdate(sym, DefnShape(d, S(sh))))
              )
              // listener(defnShapes.getOrElseUpdate(sym, DefnShape(d)))
          case N =>
            // sym.defnListeners += (d => listener(defnShapes.getOrElseUpdate(sym, DefnShape(d))))
            softAssert(false, s"Symbol definition of ${sym} is not set upon completion of ${bms}")
        case _ =>
          raise:
            ErrorReport(
              msg"Expected a term; got ${bms.describe} '${bms.nme}'" -> trm.toLoc :: Nil,
              // msg"expected a term shape, but got ${bms.describe} (${bms.toString})" -> trm.toLoc :: Nil,
              source = Diagnostic.Source.Compilation)
    trm match
    // * Synthetic selections are not really selections from the POV of the resolver.
    // * Eg: a plain member reference or plain reference to imported symbol
    // * Later, we should make Terms more closely aligned wiht the source and remove SynthSel
    case ss: SynthSel =>
      ss.sym match
      case S(ts: TermSymbol) =>
        ???
        ts.defn.get.body match
        case S(body) =>
          listenTerm(body, listener)
        case N =>
          ??? // TODO error? use sig
      case S(bms: BlockMemberSymbol) =>
        fromBMS(bms)
      case N => ???
    case _ =>
    listen(trm, {
      case sh: TermShape =>
        listener(sh)
      case sels: SelShape =>
        sels.target match
        case S(SelectionTarget.ObjectMember(sym: BlockMemberSymbol)) =>
          fromBMS(sym)
        case S(SelectionTarget.Err(_)) =>
          ()
        // case _ => ??? // TODO error
        case N =>
          softAssert(sels.src.isErroneous)
      case ss: SymShape =>
        fromBMS(ss.sym)
      case sh =>
        raise:
          ErrorReport(
            msg"expected a term shape, but got ${sh.describe}" -> trm.toLoc :: Nil,
            source = Diagnostic.Source.Compilation)
    })
  
  def listen(trm: Term, listener: Shape => Unit): Unit =
    log(s"listen: trm = ${trm.showDbg}")
    trm.shapeListeners += listener
    trm match
    case sh: Lit =>
      listener(sh)
    case intro: IntroTerm =>
      val sh = introShapes.getOrElseUpdate(intro, {
        log(s"introShape: intro = $intro")
        IntroShape(intro)
      })
      listener(sh)
    // case Term.App(lhs, args) =>
    //   // listen(lhs, sh => listener(AppShape(sh, args)))
    //   ???
    // case sel: AnySelTerm =>
    //   // listen(lhs, sh => selShape(sh, nme, trm.asInstanceOf[AnySelTerm]))
    //   sel
    case ref @ Ref(loc: LocalSymbol) =>
      loc.shapes.foreach(listener)
      loc.shapeListeners += listener
    case ref @ SimpleRef(sym) =>
      sym match
      case loc: LocalSymbol =>
        loc.shapes.foreach(listener)
        loc.shapeListeners += listener
    case ref @ MemberRef(sym: TermSymbol) =>
      // println(sym.decl.get)
      // sym.defn.get
      // ???
      listenDefn(sym, listener)
    case ref @ MemberRef(sym: BlockMemberSymbol) =>
      val sh = symShapes.getOrElseUpdate(sym, SymShape(sym))
      // // ref.shapes.foreach(listener)
      // // ref.shapeListeners += listener
      // if ref.shapes.add(sh) then
      //   ref.shapeListeners.foreach(listener => listener(sh))
      listener(sh)
    case ref @ Ref(sym: InnerSymbol) =>
      // sym.asBlkMember match
      // case S(bms) =>
      //   bms.onComplete: () =>
      //     ???
      // case _ => ???
      // sym.asDefnSym
      // ???
      sym.shapeListeners += listener
    case ref @ Ref(bsym: BlockMemberSymbol) =>
      // listener(ref)
      // if ref.shapes.add(bsym) then
      //   ref.shapeListeners.foreach(listener => listener(bsym))
      symShape(bsym, ref)
    case res: ResolvableImpl =>
      res.shapes.foreach(listener)
    case sh: ShapeHost =>
      sh.shapes.foreach(listener)
      sh.shapeListeners += listener
    case Missing =>
      () // FIXME: Currently get this from light-elaborated Predef import
    case _ =>
      println(s"TODO: listen for ${trm.describe} (${trm.getClass})")
      ()
  
end NewResolver


