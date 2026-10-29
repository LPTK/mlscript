package hkmc2
package semantics

import scala.collection.mutable

import hkmc2.utils.*, shorthands.*
import syntax.*, Elaborator.State, codegen.{Erasure, ErasedType, ErasedValueType, ErasedFuncSignature, CanonicalErasedValueType}
import Term.*
import ucs.FlatPattern


/** Allocate binding scopes and nominal declarations before rewriting references or representations. */
private[semantics] final class Cloner(outer: SymbolSubst)(using State, Erasure):
  private def copy[A](traverse: CloneScope => A): A =
    val scope = new CloneScope(outer)
    traverse(scope)
    scope.completeBindings()
    scope.initializeMetadata()
    val result = traverse(scope)
    scope.checkConsumed()
    result

  def block(source: Blk): Blk = copy(_.block(source))
  def statementRoot(source: Statement): Statement = copy(s => {
    s.prepare(source :: Nil)
    s.statement(source)
  })
  def annotation(source: Annot): Annot = copy(_.annotation(source))
  def term(source: Term): Term = copy(_.term(source))
  def simpleSplit(source: SimpleSplit): SimpleSplit = copy(_.simpleSplit(source))
  def flatPattern(source: FlatPattern): FlatPattern = copy(_.flatPattern(source))
  def branch(source: Branch): Branch = copy(_.branch(source))
  def split(source: Split): Split = copy(_.split(source))

end Cloner


/** Nominal identities can escape their lexical scope in inferred types and member
  * targets. Lexically bound references retain their nearest enclosing binding.
  * For escaped identities, search descendants of the nearest containing occurrence.
  * A shared subtree has a separate scope on each visit; never choose arbitrarily
  * between its copies when a reference has no occurrence that disambiguates them.
  */
private final class CloneBindings[S <: Symbol](parent: Opt[CloneBindings[S]], external: S => S):
  val local = mutable.Map.empty[S, S]
  private var descendants = Map.empty[S, Set[S]]

  def complete(children: Seq[CloneBindings[S]]): Unit =
    descendants = children.iterator.flatMap(_.all).toList.groupMapReduce(_._1)(_._2)(_ ++ _)

  private def all: Map[S, Set[S]] = descendants ++ local.iterator.map((s, copy) => s -> Set(copy))

  private def lexical(source: S): Opt[S] = local.get(source).orElse(parent.flatMap(_.lexical(source)))

  private def escaped(source: S): Opt[S] = descendants.get(source) match
    case S(copies) =>
      assert(copies.sizeIs == 1, "A cloned nominal reference must identify a unique binding occurrence")
      S(copies.head)
    case N => parent.flatMap(_.escaped(source))

  private def unbound(source: S): S = parent.fold(external(source))(_.unbound(source))

  def apply(source: S): S = lexical(source).orElse(escaped(source)).getOrElse(unbound(source))

end CloneBindings


/** Copy resolved code for another executable occurrence. Each binding scope owns a
  * substitution: copies of a shared subtree get different binders, while free references
  * still denote the enclosing scope. Inference graphs are completed source witnesses;
  * their subscriptions are not copied or restarted during lowering.
  */
private final class CloneScope(outer: SymbolSubst)(using State, Erasure) extends SymbolSubst:
  private given SymbolSubst = this

  private lazy val variables = mutable.Map.empty[VarSymbol, VarSymbol]
  private lazy val temporaries = mutable.Map.empty[TempSymbol, TempSymbol]
  private lazy val labels = mutable.Map.empty[LabelSymbol, LabelSymbol]
  private lazy val splits = mutable.Map.empty[SplitSymbol, SplitSymbol]
  private lazy val members: CloneBindings[BlockMemberSymbol] = bindings(_.members, outer.mapBlockMemberSym)
  private lazy val terms: CloneBindings[TermSymbol] = bindings(_.terms, outer.mapTermSym)
  private lazy val classes: CloneBindings[ClassSymbol] = bindings(_.classes, outer.mapClsSym)
  private lazy val modules: CloneBindings[ModuleOrObjectSymbol] = bindings(_.modules, outer.mapModuleSym)
  private lazy val aliases: CloneBindings[TypeAliasSymbol] = bindings(_.aliases, outer.mapTypeAliasSym)
  private lazy val patterns: CloneBindings[PatternSymbol] = bindings(_.patterns, outer.mapPatSym)
  private lazy val constructors: CloneBindings[ClassCtorSymbol] = bindings(_.constructors, outer.mapClassCtorSym)
  private lazy val definitions = mutable.Map.empty[Identity[Definition], Definition]
  private val children = mutable.ArrayBuffer.empty[CloneScope]
  private val occurrences = mutable.Map.empty[Identity[AnyRef], mutable.Queue[CloneScope]]
  private val definitionScopes = mutable.Map.empty[Identity[Definition], (Symbol, CloneScope)]
  private val delayedMetadata = mutable.ArrayBuffer.empty[() => Unit]
  private var consumed = false
  private var allocating = true

  /** Both passes follow the same children and binding scopes. Child arguments are
    * evaluated in either pass; builders run only after all bindings are allocated.
    * Keep recursive visits outside builders so allocation cannot skip a subtree.
    * Inlining avoids allocating a builder closure at each visited node. Returning
    * the source during allocation also avoids constructing a discarded copy.
    */
  private inline def rebuild[A](source: A)(inline make: A): A =
    if allocating then source else make

  private inline def rebuild1[A, B](source: A)(child: B)(inline make: B => A): A =
    if allocating then source else make(child)

  private inline def rebuild2[A, B, C](source: A)(first: B, second: C)(inline make: (B, C) => A): A =
    if allocating then source else make(first, second)

  private def mapList[A](source: Ls[A])(visit: A => A): Ls[A] =
    if allocating then
      source.foreach(visit)
      source
    else source.map(visit)

  private def mapOption[A](source: Opt[A])(visit: A => A): Opt[A] =
    if allocating then
      source.foreach(visit)
      source
    else source.map(visit)

  private def mapVector[A](source: Vector[A])(visit: A => A): Vector[A] =
    if allocating then
      source.foreach(visit)
      source
    else source.map(visit)

  private def bindings[S <: Symbol](select: CloneScope => CloneBindings[S], external: S => S): CloneBindings[S] =
    new CloneBindings(outer match
      case parent: CloneScope => S(select(parent))
      case _ => N, external)

  override def mapVarSym(s: VarSymbol): VarSymbol = variables.getOrElse(s, outer.mapVarSym(s))
  override def mapTempSym(s: TempSymbol): TempSymbol = temporaries.getOrElse(s, outer.mapTempSym(s))
  override def mapLabelSym(s: LabelSymbol): LabelSymbol = labels.getOrElse(s, outer.mapLabelSym(s))
  override def mapSplitSym(s: SplitSymbol): SplitSymbol = splits.getOrElse(s, outer.mapSplitSym(s))
  override def mapBlockMemberSym(s: BlockMemberSymbol): BlockMemberSymbol = members(s)
  override def mapTermSym(s: TermSymbol): TermSymbol = terms(s)
  override def mapClsSym(s: ClassSymbol): ClassSymbol = classes(s)
  override def mapModuleSym(s: ModuleOrObjectSymbol): ModuleOrObjectSymbol = modules(s)
  override def mapTypeAliasSym(s: TypeAliasSymbol): TypeAliasSymbol = aliases(s)
  override def mapPatSym(s: PatternSymbol): PatternSymbol = patterns(s)
  override def mapClassCtorSym(s: ClassCtorSymbol): ClassCtorSymbol = constructors(s)

  private def newScope(): CloneScope =
    val scope = new CloneScope(this)
    children += scope
    scope

  private def nested(source: AnyRef): CloneScope =
    if allocating then
      val scope = newScope()
      occurrences.getOrElseUpdate(Identity(source), mutable.Queue.empty).enqueue(scope)
      scope
    else
      val pending = occurrences.getOrElse(Identity(source), lastWords("Missing cloned binding scope"))
      assert(pending.nonEmpty, "Each copied occurrence must have its own allocated scope")
      val scope = pending.dequeue()
      scope.consumed = true
      scope

  def completeBindings(): Unit =
    children.foreach(_.completeBindings())
    members.complete(children.toSeq.map(_.members))
    terms.complete(children.toSeq.map(_.terms))
    classes.complete(children.toSeq.map(_.classes))
    modules.complete(children.toSeq.map(_.modules))
    aliases.complete(children.toSeq.map(_.aliases))
    patterns.complete(children.toSeq.map(_.patterns))
    constructors.complete(children.toSeq.map(_.constructors))
    allocating = false

  def checkConsumed(): Unit = children.foreach: scope =>
    assert(scope.consumed, "An allocated binding occurrence was not copied")
    scope.checkConsumed()

  private def mapSimple(s: SimpleRefSymbol): SimpleRefSymbol = s match
    case s: LocalVarSymbol => s.subst
    case s: LabelSymbol => s.subst
    case s: BuiltinSymbol => s.subst

  private def mapType(s: TypeSymbol): TypeSymbol = s match
    case s: ClassSymbol => s.subst
    case s: ModuleOrObjectSymbol => s.subst
    case s: TypeAliasSymbol => s.subst

  private def mapClassCompanion(s: ClassCompanionSymbol): ClassCompanionSymbol = s match
    case s: ModuleOrObjectSymbol => s.subst
    case s: TypeAliasSymbol => s.subst

  private def mapModuleCompanion(s: ModuleCompanionSymbol): ModuleCompanionSymbol = s match
    case s: ClassSymbol => s.subst
    case s: TypeAliasSymbol => s.subst

  private def canonicalType(source: CanonicalErasedValueType): CanonicalErasedValueType = source match
    case ErasedType.AnyRef(rsc, symbol) => ErasedType.AnyRef(rsc, mapType(symbol))
    case ErasedType.Incompatible(left, right) => ErasedType.Incompatible(canonicalType(left), canonicalType(right))
    case source @ (_: ErasedType.Primitive | ErasedType.Unknown) => source

  private def valueType(source: ErasedValueType): ErasedValueType = source match
    case source: CanonicalErasedValueType => canonicalType(source)
    case source: ErasedType.ValueLike =>
      val symbol = mapType(summon[Erasure].typeSymbol(source))
      new ErasedType.ValueLike(source.rsc, symbol)
    case ErasedType.Union(members) => ErasedType.Union(members.map(valueType))

  private def signature(source: ErasedFuncSignature): ErasedFuncSignature =
    ErasedFuncSignature.Signature(source.paramLists.map(_.map(_.map(valueType))), source.ret.map(valueType))

  private def located[A <: AutoLocated](source: AutoLocated, copy: A): A =
    if source is copy then copy else copy.withLoc(source.getLoc)

  private def copyMetadata[A <: Term](source: Term, copy: A): A =
    if !allocating then
      copy.typeInterpretation = source.typeInterpretation
      // These completed shapes describe source declarations and calling conventions.
      // Executable reference targets are substituted separately below.
      copy.shapes.copyFrom(source.shapes)
    located(source, copy)

  extension (source: Term)
    private def cloned: Term = term(source)

  private def bindLocal(symbol: LocalVarSymbol): Unit = symbol match
    case s: VarSymbol => variables.getOrElseUpdate(s, {
      val copy = new VarSymbol(s.id, mut = s.mut)
      delayedMetadata += (() => if s.isErased then copy.erasedType = s.erasedType.map(valueType))
      copy.sourceAliases = s.sourceAliases
      copy.decl = s.decl
      copy.shapes.copyFrom(s.shapes)
      copy
    })
    case s: TempSymbol => temporaries.getOrElseUpdate(s, {
      val copy = new TempSymbol(s.trm, N, s.nme)
      delayedMetadata += (() => summon[Erasure].copyTemporaryType(s, copy)(valueType))
      copy.shapes.copyFrom(s.shapes)
      copy
    })

  private def bindLabel(s: LabelSymbol): Unit =
    labels(s) = new LabelSymbol(s.trm, s.nme)

  private def bindTerm(s: TermSymbol): Unit = s match
    case s: ClassCtorSymbol => constructors.local.getOrElseUpdate(s,
      new ClassCtorSymbol(s.k, s.owner.map(_.subst), s.associatedCls.subst))
    case s => terms.local.getOrElseUpdate(s, {
      val copy = new TermSymbol(s.k, s.owner.map(_.subst), s.id)
      copy.sourceAliases = s.sourceAliases
      copy
    })

  private def bindInner(s: ClassSymbol | ModuleOrObjectSymbol | PatternSymbol): Unit =
    val copy = s match
      case s: ClassSymbol => classes.local.getOrElseUpdate(s, new ClassSymbol(s.tree, s.id))
      case s: ModuleOrObjectSymbol => modules.local.getOrElseUpdate(s, new ModuleOrObjectSymbol(s.tree, s.id))
      case s: PatternSymbol => patterns.local.getOrElseUpdate(s, new PatternSymbol(s.id, s.params, s.body))
    temporaries.getOrElseUpdate(s.thisProxy, copy.thisProxy)

  /** A source type tree owns its definition symbol. Copy its outer node as well as
    * the block member so `symbols`/`asCls` cannot lead back to the old definition.
    * Its syntax children remain source witnesses; executable bodies are copied below.
    */
  private def bindMember(s: BlockMemberSymbol): Unit = members.local.getOrElseUpdate(s, {
    val trees = s.trees.map:
      case tree: Tree.TypeDef =>
        val copy = located(tree, tree.copy())
        (tree.symbol, copy.symbol) match
          case (old: ClassSymbol, fresh: ClassSymbol) => classes.local(old) = fresh
          case (old: ModuleOrObjectSymbol, fresh: ModuleOrObjectSymbol) => modules.local(old) = fresh
          case (old: TypeAliasSymbol, fresh: TypeAliasSymbol) => aliases.local(old) = fresh
          case (old: PatternSymbol, fresh: PatternSymbol) => patterns.local(old) = fresh
          case _ => lastWords("A copied type declaration must retain its kind")
        // Constructor-flow analysis also reads the field identities from this
        // syntax witness. Use those same fresh fields in the semantic parameters
        // and selections, rather than allocating a second set for one class.
        tree.symbol match
          case _: (ClassSymbol | ModuleOrObjectSymbol) =>
            tree.clsParams.lazyZip(copy.clsParams).foreach: (sourceParams, copyParams) =>
              sourceParams.lazyZip(copyParams).foreach: (source, fresh) =>
                terms.local(source) = fresh
                fresh.sourceAliases = source.sourceAliases
          case _ => ()
        copy
      case tree => tree
    val copy = new BlockMemberSymbol(s.nme, trees, s.nameIsMeaningful)
    copy.sourceAliases = s.sourceAliases
    copy
  })

  private def bindImport(s: BlockMemberSymbol): Unit = members.local.getOrElseUpdate(s, {
    // Importing creates a local binding for an existing module, not another
    // declaration of that module or of any of its nominal types.
    val copy = new BlockMemberSymbol(s.nme, s.trees, s.nameIsMeaningful)
    copy.sourceAliases = s.sourceAliases
    copy
  })

  private def fieldDefinitions(source: ClassLikeDef): Ls[TermDefinition] =
    (source.paramsOpt.toList ::: source.auxParams).flatMap(_.allParams).flatMap: p =>
      p.fldSym.toList.flatMap:
        case sym: BlockMemberSymbol => sym.tsym.toList.flatMap(_.defn)
        case sym: TermSymbol => sym.defn.toList
        case _ => Nil

  private def prepareDefinitions(stats: Ls[Statement]): Unit =
    // Allocate all block-level names before copying any bodies: functions and
    // classes can refer forward to each other and share overloaded member names.
    stats.foreach:
      case d: Definition => bindMember(d.bsym)
      case imp: Import => imp.sym match
        case s: LocalVarSymbol => bindLocal(s)
        case s: BlockMemberSymbol => bindImport(s)
      case _ => ()
    stats.foreach:
      case d: ClassLikeDef => d.sym match
        case s: (ClassSymbol | ModuleOrObjectSymbol | PatternSymbol) => bindInner(s)
      case d: TypeDef => aliases.local.getOrElseUpdate(d.sym, new TypeAliasSymbol(d.sym.id))
      case _ => ()
    stats.foreach:
      case d: TermDefinition => bindTerm(d.tsym)
      case d: ClassDef => d.ctorSym.foreach(bindTerm)
      case LetDecl(s: TermSymbol, _) => bindTerm(s)
      case _ => ()
    // Selections outside a class still name its members. Publish their renaming
    // in this scope before copying any body, including forward selections and
    // references between companion definitions. Only executable local binders
    // (parameters/lets) belong to the body's child substitution.
    stats.foreach:
      case d: ClassLikeDef => prepareDefinitions(d.body.blk.stats ::: fieldDefinitions(d))
      case _ => ()
    members.local.foreach: (source, copy) =>
      copy.tsym = source.tsym.map(_.subst)

  private def prepareLocals(stats: Ls[Statement]): Unit = stats.foreach:
    case LetDecl(s: LocalVarSymbol, _) => bindLocal(s)
    case _ => ()

  def prepare(stats: Ls[Statement]): Unit = if allocating then
    prepareDefinitions(stats)
    prepareLocals(stats)

  def initializeMetadata(): Unit =
    delayedMetadata.foreach(_())
    (terms.local.iterator ++ constructors.local.iterator).foreach: (source, copy) =>
      val scope = source.defn.flatMap(plannedDefinition).getOrElse(this)
      copy.initializeErasure:
        source.erasure.map:
          case sig: ErasedFuncSignature => scope.signature(sig)
          case tpe: ErasedValueType => scope.valueType(tpe)
      summon[Erasure].copyBodyResultType(source, copy)(scope.valueType)
    // All member names, including nested classes' methods, now have replacements.
    // Override edges must follow them for common-member selection during lowering.
    (members.local.iterator ++ terms.local.iterator).foreach: (source, copy) =>
      copy.overrideLinks.shapes.mapFrom(source.overrideLinks.shapes)(_.subst, identity)
    children.foreach(_.initializeMetadata())

  private def definitionAllocation(source: Definition): Opt[(Symbol, CloneScope)] =
    definitionScopes.get(Identity(source)).orElse(outer match
      case parent: CloneScope => parent.definitionAllocation(source)
      case _ => N)

  private def plannedDefinition(source: Definition): Opt[CloneScope] =
    definitionAllocation(source).filter((symbol, _) => symbol is source.sym.subst).map(_._2)

  private def definitionScope(source: Definition): CloneScope =
    if allocating then
      val scope = newScope()
      definitionScopes(Identity(source)) = source.sym.subst -> scope
      scope
    else
      val scope = plannedDefinition(source).getOrElse(lastWords("Missing cloned definition scope"))
      scope.consumed = true
      scope

  def block(source: Blk): Blk =
    val scope = nested(source)
    scope.prepare(source.stats)
    copyMetadata(source, rebuild2(source)(mapList(source.stats)(scope.statement), scope.term(source.res))(Blk(_, _)))

  def statement(source: Statement): Statement = source match
    case t: Term => term(t)
    case d: Definition => definition(d)
    case imp: Import => rebuild(source) {
      val sym: ImportSymbol = imp.sym match
        case s: VarSymbol => s.subst
        case s: BlockMemberSymbol => s.subst
      Import(sym, imp.str, imp.file)(imp.toLoc)
    }
    case LetDecl(sym, annotations) => rebuild1(source)(mapList(annotations)(annotation)): annotations =>
      val copy: LocalVarSymbol | TermSymbol = sym match
        case s: LocalVarSymbol => s.subst
        case s: TermSymbol => s.subst
      LetDecl(copy, annotations)(source.toLoc)
    // A record property's identity is not a lexical binding. Its value may bind
    // locals, but selecting this property must still use the resolved field key.
    case f @ RcdField(field, rhs, sym) =>
      rebuild2(source)(term(field), term(rhs))((field, rhs) => located(f, RcdField(field, rhs, sym)(f.mut, f.key)))
    case s @ RcdSpread(rcd) => rebuild1(source)(term(rcd))(rcd => located(s, RcdSpread(rcd)))
    case DefineVar(sym, rhs) => rebuild1(source)(term(rhs)): rhs =>
      val copy: LocalSymbol | TermSymbol = sym match
        case s: LocalVarSymbol => s.subst
        case s: LabelSymbol => s.subst
        case s: SplitSymbol => s.subst
        case s: InstSymbol => s.subst
        case s: TermSymbol => s.subst
      DefineVar(copy, rhs)(source.toLoc)
    case sc: SetConfig => sc

  def annotation(source: Annot): Annot = source match
    case Annot.Trm(t) => rebuild1(source)(term(t))(t => Annot.Trm(t)(source.toLoc))
    case Annot.JsSymbol(key) => rebuild1(source)(term(key.term)): term =>
      Annot.JsSymbol(key.copy(path = key.path.map(_.subst))(term))(source.toLoc)
    case _ => source

  private def modulefulness(source: Modulefulness): Modulefulness =
    Modulefulness(source.msym.map(_.subst))(source.modified)

  private def parameter(source: Param): Param = rebuild1(source)(mapOption(source.sign)(term)): sign =>
    val copy = Param(source.flags, source.sym.subst, sign, modulefulness(source.modulefulness))(source.toLoc)
    copy.fldSym = source.fldSym.map(_.subst)
    copy.sym.decl = S(copy)
    source.fldSym.toList.flatMap:
      case s: TermSymbol => s :: Nil
      case s: BlockMemberSymbol => s.tsym.toList
      case _ => Nil
    .foreach: field =>
      val fresh = field.subst
      if fresh isnt field then fresh.decl = S(copy)
    copy

  private def parameterList(source: ParamList): ParamList =
    val params = mapList(source.params)(parameter)
    val variadic = mapOption(source.variadic)(v =>
      rebuild2(v)(parameter(v.param), mapList(v.trailing)(parameter))(Variadic(_, _)))
    rebuild(source)(ParamList(source.flags, params, variadic)(source.toLoc))

  private def bindParameters(lists: Ls[ParamList]): Unit =
    lists.foreach(_.allParams.foreach(p => bindLocal(p.sym)))

  private def typeParameter(source: TyParam): TyParam = rebuild(source) {
    val copy = source.copy(sym = source.sym.subst)(source.toLoc)
    copy.sym.decl = S(copy)
    copy
  }

  private def termDefinition(source: TermDefinition): TermDefinition =
    val scope = definitionScope(source)
    if allocating then
      scope.bindParameters(source.params)
      source.tparams.foreach(_.foreach(p => scope.bindLocal(p.sym)))
    val params = mapList(source.params)(scope.parameterList)
    val tparams = mapOption(source.tparams)(mapList(_)(scope.parameter))
    val sign = mapOption(source.sign)(scope.term)
    val body = mapOption(source.body)(scope.term)
    val annotations = mapList(source.annotations)(scope.annotation)
    rebuild(source) {
      val copy = source.copy(sym = source.sym.subst, tsym = source.tsym.subst,
        params = params, tparams = tparams, sign = sign, body = body,
        modulefulness = modulefulness(source.modulefulness), annotations = annotations,
        companion = source.companion.map(mapType))(source.toLoc, source.headerLoc, source.scope)
      copy.tsym.defn = S(copy)
      copy.isErroneous = source.isErroneous
      copy
    }

  private def knownDefinition(source: Definition): Opt[Definition] =
    definitions.get(Identity(source)).orElse(outer match
      case parent: CloneScope => parent.knownDefinition(source)
      case _ => N)
    .filter(_.sym is source.sym.subst)

  /** Executable terms are visited per occurrence, even when the source DAG shares
    * a subtree. Definitions exposed twice by one binding (companions, handlers or
    * fields) instead share its allocated scope and completed copy. The substituted
    * symbol distinguishes such aliases from a fresh binding of the same source.
    */
  private def definition(source: Definition): Definition =
    val existing = if allocating then plannedDefinition(source).map(_ => source) else knownDefinition(source)
    existing.getOrElse {
      val copy = source match
        case source: TermDefinition => termDefinition(source)
        case source: TypeDef =>
          val scope = definitionScope(source)
          if allocating then source.tparams.foreach(p => scope.bindLocal(p.sym))
          val companion = mapOption(source.companion): companion =>
            definition(companion) match
              case copy: CompanionValue => copy
              case _ => lastWords("A cloned companion must remain a value definition")
          val tparams = mapList(source.tparams)(scope.typeParameter)
          val rhs = mapOption(source.rhs)(scope.term)
          val annotations = mapList(source.annotations)(scope.annotation)
          rebuild(source) {
            val copy = source.copy(sym = source.sym.subst, bsym = source.bsym.subst,
              tparams = tparams, rhs = rhs, companion = companion, annotations = annotations)(source.toLoc, source.headerLoc)
            copy.sym.defn = S(copy)
            copy
          }
        case source: ClassLikeDef =>
          val scope = definitionScope(source)
          if allocating then
            source.tparams.foreach(p => scope.bindLocal(p.sym))
            scope.bindParameters(source.paramsOpt.toList ::: source.auxParams)
            scope.prepareLocals(source.body.blk.stats)
          val body = rebuild2(source.body)(mapList(source.body.blk.stats)(scope.statement), scope.term(source.body.blk.res)):
            (stats, res) => ObjBody(copyMetadata(source.body.blk, Blk(stats, res)))
          fieldDefinitions(source).foreach(scope.definition)
          val tparams = mapList(source.tparams)(scope.typeParameter)
          val auxParams = mapList(source.auxParams)(scope.parameterList)
          val annotations = mapList(source.annotations)(scope.annotation)
          val ext = mapOption(source.ext)(scope.construction)
          val copy = source match
            case s: ClassDef.Parameterized =>
              val params = scope.parameterList(s.params)
              val ctorAnnotations = mapList(s.ctorAnnotations)(scope.annotation)
              rebuild(s) {
                val c = s.copy(owner = s.owner.map(_.subst), sym = s.sym.subst, bsym = s.bsym.subst,
                  ctorSym = S(s.ctorSym.value.subst), tparams = tparams, params = params,
                  auxParams = auxParams, ext = ext, body = body, companion = s.companion.map(mapClassCompanion),
                  annotations = annotations, ctorAnnotations = ctorAnnotations)(s.toLoc, s.headerLoc, s.ctorLoc)
                c.sym.defn = S(c)
                c
              }
            case s: ClassDef.Plain =>
              val ctorAnnotations = mapList(s.ctorAnnotations)(scope.annotation)
              rebuild(s) {
                val c = s.copy(owner = s.owner.map(_.subst), sym = s.sym.subst, bsym = s.bsym.subst,
                  ctorSym = s.ctorSym.map(_.subst), tparams = tparams, auxParams = auxParams, ext = ext,
                  body = body, companion = s.companion.map(mapClassCompanion), annotations = annotations,
                  ctorAnnotations = ctorAnnotations)(s.toLoc, s.headerLoc, s.ctorLoc)
                c.sym.defn = S(c)
                c
              }
            case s: ModuleOrObjectDef =>
              val params = mapOption(s.paramsOpt)(scope.parameterList)
              rebuild(s) {
                val c = s.copy(owner = s.owner.map(_.subst), sym = s.sym.subst, bsym = s.bsym.subst,
                  tparams = tparams, paramsOpt = params, auxParams = auxParams,
                  ext = ext, body = body, companion = s.companion.map(mapModuleCompanion), annotations = annotations)(s.path, s.toLoc, s.headerLoc)
                c.sym.defn = S(c)
                c
              }
            case s: PatternDef =>
              if allocating then
                s.parameters.foreach(p => scope.bindLocal(p.sym))
                scope.bindPattern(s.pattern)
              val parameters = mapList(s.parameters)(scope.parameter)
              val patternParams = mapList(s.patternParams)(scope.parameter)
              val extractionParams = mapList(s.extractionParams)(scope.parameter)
              val pat = scope.pattern(s.pattern)
              rebuild(s) {
                val c = s.copy(owner = s.owner.map(_.subst), sym = s.sym.subst, bsym = s.bsym.subst,
                  tparams = tparams, parameters = parameters, patternParams = patternParams,
                  extractionParams = extractionParams, pattern = pat, annotations = annotations)(s.toLoc, s.headerLoc)
                c.sym.defn = S(c)
                c
              }
          if !allocating then (source.sym, copy.sym) match
            case (old: ClassLikeSymbol, fresh: ClassLikeSymbol) =>
              fresh.irClassHeader = old.irClassHeader.map: header =>
                header.copy(parent = header.parent match
                  case codegen.ClassHeader.Parent.Known(sym) => codegen.ClassHeader.Parent.Known(mapType(sym))
                  case parent => parent,
                  companionClass = header.companionClass.map(_.subst), termCompanion = header.termCompanion.map(_.subst))
            case _ => ()
          copy
      if !allocating then
        copy.isErroneous = source.isErroneous
        copy.bsym.complete()
        definitions(Identity(source)) = copy
      copy
    }

  private def bindPattern(source: Pattern): Unit = source.variables.symbols.foreach(bindLocal)

  private def pattern(source: Pattern): Pattern =
    import Pattern.*
    val copy = source match
      case source @ Constructor(target, arguments) =>
        rebuild2(source)(term(target), mapOption(arguments)(mapList(_)(pattern))): (target, arguments) =>
          val copy = Constructor(target, arguments)
          copy.resolvedTargets = source.resolvedTargets.map:
            case s: DefinitionSymbol[?] => s.subst
            case s: VarSymbol => s.subst
          copy.isErroneous = source.isErroneous
          copy.shapes.copyFrom(source.shapes)
          copy
      case Composition(polarity, left, right) => rebuild2(source)(pattern(left), pattern(right))(Composition(polarity, _, _))
      case Negation(inner) => rebuild1(source)(pattern(inner))(Negation(_))
      case Wildcard() => rebuild(source)(Wildcard())
      case Literal(literal) => rebuild(source)(Literal(literal))
      case Range(lower, upper, inclusive) => rebuild(source)(Range(lower, upper, inclusive))
      case Concatenation(left, right) => rebuild2(source)(pattern(left), pattern(right))(Concatenation(_, _))
      case Tuple(leading, spread) =>
        val elements = mapList(leading)(pattern)
        val rest = mapOption(spread): entry =>
          val (kind, middle, trailing) = entry
          rebuild2(entry)(pattern(middle), mapList(trailing)(pattern))((middle, trailing) => (kind, middle, trailing))
        rebuild(source)(Tuple(elements, rest))
      case Record(fields) => rebuild1(source)(mapList(fields)(entry =>
        rebuild1(entry)(pattern(entry._2))(entry._1 -> _)))(Record(_))
      case Chain(first, second) => rebuild2(source)(pattern(first), pattern(second))(Chain(_, _))
      case source @ Alias(inner, id) => rebuild1(source)(pattern(inner)): inner =>
        val copy = Alias(inner, id)
        source.symbolOption.foreach(sym => copy.symbol = sym.subst)
        copy
      case Transform(inner, parameters, transform) =>
        val scope = nested(source)
        if allocating then
          scope.bindPattern(inner)
          parameters.foreach((_, param) => scope.bindLocal(param))
        rebuild2(source)(scope.pattern(inner), scope.term(transform)): (inner, transform) =>
          Transform(inner, parameters.map((binding, param) =>
            scope.mapVarSym(binding) -> scope.mapVarSym(param)), transform)
      case Annotated(inner, annotations) =>
        val pat = pattern(inner)
        val annots = mapVector(annotations):
          case loc @ L(_) => loc
          case value @ R(term) => rebuild1(value)(this.term(term))(R(_))
        rebuild(source)(Pattern.Annotated(pat, annots))
      case Guarded(inner, guard) => rebuild2(source)(pattern(inner), term(guard))(Guarded(_, _))
    located(source, copy)

  private def simpleRef(source: SimpleRef): SimpleRef =
    copyMetadata(source, rebuild(source)(new SimpleRef(mapSimple(source.sym))(source.tree)))

  private def scrutinee(source: Ref | SimpleRef): Ref | SimpleRef = term(source) match
    case copy: (Ref | SimpleRef) => copy
    case _ => lastWords("Cloning a scrutinee must preserve its reference form")

  def simpleSplit(source: SimpleSplit): SimpleSplit =
    import SimpleSplit.*
    val copy = source match
      case Cons(head @ Head.Let(binding, value), tail) =>
        val scope = nested(source)
        if allocating then scope.bindLocal(binding)
        rebuild2(source)(term(value), scope.simpleSplit(tail)): (value, tail) =>
          Cons(located(head, Head.Let(scope.mapLocal(binding), value)), tail)
      case Cons(head @ Head.Match(value, pat, consequent), tail) =>
        val scope = nested(source)
        if allocating then scope.bindPattern(pat)
        val scrut = scrutinee(value)
        val pattern = scope.pattern(pat)
        val cont = scope.simpleSplit(consequent)
        val rest = simpleSplit(tail)
        rebuild(source)(Cons(located(head, Head.Match(scrut, pattern, cont)), rest))
      case e @ Else(default) => rebuild1(source)(term(default))(Else(_)(e.kw))
      case End => End
    located(source, copy)

  private def mapLocal(sym: LocalVarSymbol): LocalVarSymbol = sym.subst

  def flatPattern(source: FlatPattern): FlatPattern =
    val copy = source match
      case FlatPattern.Lit(literal) => rebuild(source)(FlatPattern.Lit(literal))
      case p @ FlatPattern.ClassLike(constructor, symbol, arguments, refined) =>
        if allocating then arguments.foreach(_.foreach((sym, _) => bindLocal(sym)))
        rebuild1(source)(term(constructor)): constructor =>
          val cls: ClassSymbol | ModuleOrObjectSymbol = symbol match
            case s: ClassSymbol => s.subst
            case s: ModuleOrObjectSymbol => s.subst
          FlatPattern.ClassLike(constructor, cls,
            arguments.map(_.map((sym, loc) => sym.subst -> loc)), refined)(Tree.Dummy)
      case FlatPattern.Tuple(size, inf) => rebuild(source)(FlatPattern.Tuple(size, inf))
      case FlatPattern.Record(entries) =>
        if allocating then entries.foreach((_, sym) => bindLocal(sym))
        rebuild(source)(FlatPattern.Record(entries.map((id, sym) => id -> sym.subst)))
    located(source, copy)

  def branch(source: Branch): Branch =
    val scope = nested(source)
    val pat = scope.flatPattern(source.pattern)
    rebuild2(source)(simpleRef(source.scrutinee), scope.split(source.continuation)):
      (scrutinee, continuation) => located(source, Branch(scrutinee, pat, continuation))

  def split(source: Split): Split =
    val copy = source match
      case Split.Cons(head, tail) => rebuild2(source)(branch(head), split(tail))(Split.Cons(_, _))
      case Split.Let(sym, value, tail) =>
        val scope = nested(source)
        if allocating then scope.bindLocal(sym)
        rebuild2(source)(term(value), scope.split(tail))(Split.Let(scope.mapLocal(sym), _, _))
      case Split.Else(default) => rebuild1(source)(term(default))(Split.Else(_))
      case Split.End => Split.End
      case Split.LetSplit(sym, tail) =>
        val scope = nested(source)
        // A split symbol owns its immutable executable body, so construct it
        // after copying that body. Erased types never refer to split symbols.
        val body = split(sym.body)
        if !allocating then scope.splits(sym) = new SplitSymbol(body, sym.nme)
        rebuild1(source)(scope.split(tail))(Split.LetSplit(scope.mapSplitSym(sym), _))
      case Split.UseSplit(sym) => rebuild(source)(Split.UseSplit(sym.subst))
    located(source, copy)

  private def construction(source: New): New = term(source) match
    case copy: New => copy
    case _ => lastWords("Cloning a construction must preserve its term form")

  private def element(source: Elem): Elem = source match
    case f: Fld => rebuild2(source)(f.term.cloned, mapOption(f.asc)(_.cloned)):
      (term, asc) => located(f, f.copy(term = term, asc = asc))
    case s: Spd => rebuild1(source)(s.term.cloned)(term => located(s, s.copy(term = term)))

  def term(source: Term): Term =
    def copyResolution(source: Resolvable, copy: Resolvable): copy.type =
      val expansion = mapOption(source.expansion)(mapOption(_)(_.cloned))
      if !allocating then
        copy.isErroneous = source.isErroneous
        expansion.foreach(copy.expand)
      copy
    def copySelection(source: Term & AnySel, copy: Term & AnySel): copy.type =
      val targets = mapList(source.resolvedTargets):
        case target @ flow.SelectionTarget.ObjectMember(sym) => rebuild(target)(flow.SelectionTarget.ObjectMember(sym.subst))
        case target @ flow.SelectionTarget.CompanionMember(comp, sym) =>
          rebuild1(target)(comp.cloned)(flow.SelectionTarget.CompanionMember(_, sym.subst))
      if !allocating then copy.resolvedTargets = targets
      copyResolution(source, copy)
    def copyNewResolution(source: NewResolvable, copy: NewResolvable): copy.type =
      val keyAccess = mapOption(source.keyAccess)(_.cloned)
      if !allocating then
        copy.resolvedTargets = source.resolvedTargets.map(_.subst)
        copy.keyAccess = keyAccess
        copy.isErroneous = source.isErroneous
      copy
    // Keep class qualifiers typed as selections while sharing all clone metadata copying.
    def cloneSel(term: NewSel): NewSel =
      val copy = rebuild2(term)(term.prefix.cloned, mapOption(term.cls)(cloneSel)):
        (prefix, cls) => new NewSel(prefix, term.id, cls)(term.resSym)
      if !allocating then
        copy.resolvedMembers = term.resolvedMembers.map(_.subst)
        copy.hasDynamicTarget = term.hasDynamicTarget
        copy.tupleIndex = term.tupleIndex
      copyMetadata(term, copyNewResolution(term, copy))
    val that = source match
      case Error() => rebuild(source)(Error())
      case UnitVal() => rebuild(source)(UnitVal())
      case DynTy() => rebuild(source)(DynTy())
      case Missing => return Missing
      case Lit(lit) => rebuild(source)(Lit(lit))
      case term @ SimpleRef(sym) => rebuild(source)(SimpleRef(mapSimple(sym))(term.tree))
      case term @ SelfRef(sym) => rebuild(source)(SelfRef(sym.subst)(term.tree))
      case term @ MemberRef(sym) => copyNewResolution(term, rebuild(term)(MemberRef(sym.subst)(term.tree, term.resSym)))
      case term @ Super(receiver, owner, id) =>
        return copyMetadata(term, copyNewResolution(term,
          rebuild1(term)(receiver.cloned)(Super(_, owner.subst, id)(term.resSym))))
      case term: NewSel => return cloneSel(term)
      case term @ UnresolvedRef(prefixes, id) =>
        val clonedPrefixes = mapList(prefixes)(_.cloned)
        val copy = rebuild(term) {
          val copy = UnresolvedRef(clonedPrefixes, id)(term.resSym)
          def cloneReceiver(receiver: Term): Term =
            val index = prefixes.indexWhere(_ is receiver)
            assert(index >= 0, "A wildcard candidate must belong to an opened prefix")
            clonedPrefixes(index)
          copy.resolvedMembers = term.resolvedMembers.map((receiver, member) => cloneReceiver(receiver) -> member.subst)
          copy.dynamicPrefixes = term.dynamicPrefixes.map(cloneReceiver)
          copy
        }
        copyNewResolution(term, copy)
      case Capture(base, thru) => rebuild1(source)(base.cloned)(Capture(_, thru.subst))
      case term @ Resolved(t, sym) => copyResolution(term, rebuild1(term)(t.cloned)(Resolved(_, sym.subst)(term.typ)))
      case term @ Ref(sym) => copyResolution(term, rebuild(term)(Ref(sym.subst)(term.tree, term.typ)))
      case term @ App(lhs, rhs) =>
        val copy = rebuild2(term)(lhs.cloned, rhs.cloned)(App(_, _)(term.tree, term.typ, term.resSym))
        if !allocating then copy.callableTargets.shapes.copyFrom(term.callableTargets.shapes)
        copyResolution(term, copy)
      case term @ TyApp(lhs, targs) =>
        copyResolution(term, rebuild2(term)(lhs.cloned, mapList(targs)(_.cloned))(TyApp(_, _)(term.typ)))
      case term @ Sel(prefix, nme) => copySelection(term, rebuild1(term)(prefix.cloned): prefix =>
        Sel(prefix, nme)(term.sym.map(_.subst), term.resSym, term.typ, term.originalCtx))
      case term @ SynthSel(prefix, nme) => copySelection(term, rebuild1(term)(prefix.cloned): prefix =>
        SynthSel(prefix, nme)(term.sym.map(_.subst), term.resSym, term.typ, term.originalCtx))
      case term @ LeadingDotSel(nme) =>
        val targets = mapList(term.resolvedTargets):
          case target @ flow.SelectionTarget.CompanionMember(comp, sym) =>
            rebuild1(target)(comp.cloned)(flow.SelectionTarget.CompanionMember(_, sym.subst))
        val copy = rebuild(term) {
          val copy = LeadingDotSel(nme)(term.originalCtx)
          copy.resolvedTargets = targets
          copy
        }
        copyResolution(term, copy)
      case DynSel(prefix, fld, arrayIdx, checked) => rebuild2(source)(prefix.cloned, fld.cloned)(DynSel(_, _, arrayIdx, checked))
      case term @ Tup(fields) => rebuild1(source)(mapList(fields)(element))(Tup(_)(term.tree))
      case Mut(underlying) => rebuild1(source)(underlying.cloned):
        case copy: (Tup | Rcd | New | DynNew) => Mut(copy)
        case _ => lastWords("Cloning must preserve a mutable term's form")
      case term @ CtxTup(fields) => rebuild1(source)(mapList(fields)(element))(CtxTup(_)(term.tree))
      case IfLike(kw, form, split) => rebuild1(source)(simpleSplit(split))(IfLike(kw, form, _))
      case SynthIf(value) => rebuild1(source)(split(value))(SynthIf(_))
      case SynthWhile(value) => rebuild1(source)(split(value))(SynthWhile(_))
      case Lam(params, body) =>
        val scope = nested(source)
        if allocating then scope.bindParameters(params :: Nil)
        rebuild2(source)(scope.parameterList(params), scope.term(body))(Lam(_, _))
      case FunTy(lhs, rhs, eff) =>
        val args = lhs.cloned
        val result = rhs.cloned
        val effects = mapOption(eff)(_.cloned)
        rebuild(source)(FunTy(args, result, effects))
      case Forall(tvs, outer, body) =>
        val scope = nested(source)
        if allocating then
          tvs.foreach(tv => scope.bindLocal(tv.sym))
          outer.foreach(scope.bindLocal)
        val variables = mapList(tvs)(tv => rebuild2(tv)(mapOption(tv.ub)(scope.term), mapOption(tv.lb)(scope.term)):
          (ub, lb) => QuantVar(scope.mapVarSym(tv.sym), ub, lb))
        rebuild1(source)(scope.term(body))(Forall(variables, outer.map(scope.mapVarSym), _))
      case Constrained(constraints, body) =>
        val bounds = mapList(constraints)(c => rebuild2(c)(c.lhs.cloned, c.rhs.cloned):
          (lhs, rhs) => located(c, c.copy(lhs = lhs, rhs = rhs)))
        rebuild1(source)(body.cloned)(Constrained(bounds, _))
      case WildcardTy(in, out) => rebuild2(source)(mapOption(in)(_.cloned), mapOption(out)(_.cloned))(WildcardTy(_, _))
      case blk: Blk => return block(blk)
      case term @ Rcd(mut, stats) =>
        val scope = nested(source)
        scope.prepare(stats)
        rebuild1(source)(mapList(stats)(scope.statement))(Rcd(mut, _))
      case Quoted(body) => rebuild1(source)(body.cloned)(Quoted(_))
      case Unquoted(body) => rebuild1(source)(body.cloned)(Unquoted(_))
      case term @ New(cls, args, rft) =>
        val refinement = mapOption(rft): entry =>
          val (cs, ob) = entry
          val scope = nested(source)
          val declaration = cs.defn.getOrElse(lastWords("An anonymous refinement must have a class declaration"))
          assert(declaration.body.blk is ob.blk, "An anonymous refinement must use its class declaration's body")
          scope.prepare(declaration :: Nil)
          rebuild1(entry)(scope.definition(declaration)):
            case copy: ClassDef => copy.sym -> copy.body
            case _ => lastWords("A cloned refinement must remain a class")
        copyResolution(term, rebuild2(term)(cls.cloned, mapList(args)(_.cloned))(New(_, _, refinement)(term.resSym, term.typ)))
      case DynNew(cls, args) => rebuild2(source)(cls.cloned, mapList(args)(_.cloned))(DynNew(_, _))
      case term @ SelProj(prefix, cls, proj) =>
        copySelection(term, rebuild2(term)(prefix.cloned, cls.cloned): (prefix, cls) =>
          SelProj(prefix, cls, proj)(term.sym.map(_.subst), term.resSym, term.typ, term.originalCtx))
      case Asc(term, ty) => rebuild2(source)(term.cloned, ty.cloned)(Asc(_, _))
      case CompType(lhs, rhs, pol) => rebuild2(source)(lhs.cloned, rhs.cloned)(CompType(_, _, pol))
      case Neg(rhs) => rebuild1(source)(rhs.cloned)(Neg(_))
      case Region(name, body) =>
        val scope = nested(source)
        if allocating then scope.bindLocal(name)
        rebuild1(source)(scope.term(body))(Region(scope.mapVarSym(name), _))
      case RegRef(reg, value) => rebuild2(source)(reg.cloned, value.cloned)(RegRef(_, _))
      case Assgn(lhs, rhs) => rebuild2(source)(lhs.cloned, rhs.cloned)(Assgn(_, _))
      case Drop(trm) => rebuild1(source)(trm.cloned)(Drop(_))
      case Deref(ref) => rebuild1(source)(ref.cloned)(Deref(_))
      case SetRef(ref, value) => rebuild2(source)(ref.cloned, value.cloned)(SetRef(_, _))
      case Ret(result) => rebuild1(source)(result.cloned)(Ret(_))
      case Throw(result) => rebuild1(source)(result.cloned)(Throw(_))
      case Label(label, result, body, hasNonLocalContinueDispatch) =>
        val scope = nested(source)
        if allocating then
          scope.bindLabel(label)
          scope.bindLocal(result)
        rebuild1(source)(scope.term(body)):
          body => Label(scope.mapLabelSym(label), scope.mapTempSym(result), body, hasNonLocalContinueDispatch)
      case Break(label, result, value) => rebuild1(source)(mapOption(value)(_.cloned))(Break(label.subst, result.subst, _))
      case Continue(label) => rebuild(source)(Continue(label.subst))
      case Try(body, finallyDo) => rebuild2(source)(body.cloned, finallyDo.cloned)(Try(_, _))
      case Annotated(annot, target) => rebuild2(source)(annotation(annot), target.cloned)(Annotated(_, _))
      case handle @ Handle(lhs, rhs, args, derivedClsSym, defs, body) =>
        val scope = nested(source)
        if allocating then
          scope.bindLocal(lhs)
          scope.bindInner(derivedClsSym)
          scope.prepare(derivedClsSym.defn.toList ::: defs.map(_.td))
        val handlers = mapList(defs): handler =>
          val handlerScope = scope.nested(handler)
          if allocating then handlerScope.bindLocal(handler.resumeSym)
          val definition = handlerScope.definition(handler.td) match
            case copy: TermDefinition => copy
            case _ => lastWords("A cloned handler must remain a term definition")
          // Abortive handlers also expose these same definitions in their synthetic
          // class body. They are one binding, with the resumption symbol in scope.
          if allocating then
            scope.definitionScopes(Identity(handler.td)) = handler.td.sym.subst(using scope) ->
              handlerScope.plannedDefinition(handler.td).getOrElse(lastWords("Missing handler definition scope"))
          else scope.definitions(Identity(handler.td)) = definition
          rebuild(handler)(HandlerTermDefinition(handlerScope.mapVarSym(handler.resumeSym), definition))
        derivedClsSym.defn.foreach(scope.definition)
        val target = rhs.cloned
        val arguments = mapList(args)(_.cloned)
        val result = scope.term(body)
        rebuild(source)(Handle(scope.mapLocal(lhs), target, arguments, scope.mapClsSym(derivedClsSym), handlers, result)(handle.isAbortive))
    copyMetadata(source, that)
  
end CloneScope
