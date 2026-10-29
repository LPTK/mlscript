package hkmc2
package semantics

import scala.collection.mutable

import hkmc2.utils.*, shorthands.*
import syntax.*, Elaborator.State, codegen.{Erasure, ErasedType, ErasedValueType, ErasedFuncSignature, CanonicalErasedValueType}
import Term.*
import ucs.FlatPattern


/** Allocate binding scopes and nominal declarations before rewriting references or representations. */
private[semantics] final class Cloner(outer: SymbolSubst)(using State, Erasure):
  private def copy[A](allocate: CloneScope => Unit)(rewrite: CloneScope => A): A =
    val scope = new CloneScope(outer)
    allocate(scope)
    scope.completeBindings()
    scope.initializeMetadata()
    val result = rewrite(scope)
    scope.checkConsumed()
    result

  def block(source: Blk): Blk = copy(_.allocateBlock(source))(_.block(source))
  def statementRoot(source: Statement): Statement = copy(s => {
    s.prepare(source :: Nil)
    s.allocateStatement(source)
  })(_.statement(source))
  def annotation(source: Annot): Annot = copy(_.allocateAnnotation(source))(_.annotation(source))
  def term(source: Term): Term = copy(_.allocateStatement(source))(_.term(source))
  def simpleSplit(source: SimpleSplit): SimpleSplit = copy(_.allocateSimpleSplit(source))(_.simpleSplit(source))
  def flatPattern(source: FlatPattern): FlatPattern = copy(_.allocateFlatPattern(source))(_.flatPattern(source))
  def branch(source: Branch): Branch = copy(_.allocateBranch(source))(_.branch(source))
  def split(source: Split): Split = copy(_.allocateSplit(source))(_.split(source))

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

  private def allocateNested(source: AnyRef): CloneScope =
    val scope = newScope()
    occurrences.getOrElseUpdate(Identity(source), mutable.Queue.empty).enqueue(scope)
    scope

  private def nested(source: AnyRef): CloneScope =
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

  def prepare(stats: Ls[Statement]): Unit =
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

  /** Allocation follows executable occurrences, including resolution expansions.
    * In particular it must not deduplicate terms by identity: normalization can
    * reuse one consequent in several branches, each with its own local classes.
    * Definitions exposed twice by one binding (companions/handlers/fields) do share
    * a plan, just as they share the freshly allocated definition symbol.
    */
  def allocateBlock(source: Blk): Unit =
    val scope = allocateNested(source)
    scope.prepare(source.stats)
    source.stats.foreach(scope.allocateStatement)
    scope.allocateStatement(source.res)

  def allocateAnnotation(source: Annot): Unit = source.subTerms.foreach(allocateStatement)

  private def allocateParameters(lists: Ls[ParamList]): Unit =
    bindParameters(lists)
    lists.foreach(_.subTerms.foreach(allocateStatement))

  private def definitionAllocation(source: Definition): Opt[(Symbol, CloneScope)] =
    definitionScopes.get(Identity(source)).orElse(outer match
      case parent: CloneScope => parent.definitionAllocation(source)
      case _ => N)

  private def plannedDefinition(source: Definition): Opt[CloneScope] =
    definitionAllocation(source).filter((symbol, _) => symbol is source.sym.subst).map(_._2)

  private def definitionScope(source: Definition): CloneScope =
    val scope = plannedDefinition(source).getOrElse(lastWords("Missing cloned definition scope"))
    scope.consumed = true
    scope

  private def allocateDefinition(source: Definition): Unit = if plannedDefinition(source).isEmpty then
    val scope = newScope()
    definitionScopes(Identity(source)) = source.sym.subst -> scope
    source match
      case source: TermDefinition =>
        scope.allocateParameters(source.params)
        source.tparams.foreach(_.foreach: p =>
          scope.bindLocal(p.sym)
          p.subTerms.foreach(scope.allocateStatement))
        source.sign.foreach(scope.allocateStatement)
        source.body.foreach(scope.allocateStatement)
        source.annotations.foreach(scope.allocateAnnotation)
      case source: TypeDef =>
        source.tparams.foreach(p => scope.bindLocal(p.sym))
        source.rhs.foreach(scope.allocateStatement)
        source.companion.foreach(allocateDefinition)
        source.annotations.foreach(scope.allocateAnnotation)
      case source: ClassLikeDef =>
        source.tparams.foreach(p => scope.bindLocal(p.sym))
        scope.allocateParameters(source.paramsOpt.toList ::: source.auxParams)
        scope.prepareLocals(source.body.blk.stats)
        source.body.blk.stats.foreach(scope.allocateStatement)
        scope.allocateStatement(source.body.blk.res)
        fieldDefinitions(source).foreach(scope.allocateDefinition)
        source.ext.foreach(scope.allocateStatement)
        source.annotations.foreach(scope.allocateAnnotation)
        source match
          case source: ClassDef => source.ctorAnnotations.foreach(scope.allocateAnnotation)
          case source: PatternDef =>
            source.parameters.foreach(p => scope.bindLocal(p.sym))
            scope.bindPattern(source.pattern)
            (source.parameters ::: source.patternParams ::: source.extractionParams)
              .foreach(_.subTerms.foreach(scope.allocateStatement))
            scope.allocatePattern(source.pattern)
          case _ => ()

  private def allocatePattern(source: Pattern): Unit =
    import Pattern.*
    source match
      case Constructor(target, arguments) =>
        allocateStatement(target)
        arguments.foreach(_.foreach(allocatePattern))
      case Composition(_, left, right) => allocatePattern(left); allocatePattern(right)
      case Negation(inner) => allocatePattern(inner)
      case Wildcard() | Literal(_) | Range(_, _, _) => ()
      case Concatenation(left, right) => allocatePattern(left); allocatePattern(right)
      case Tuple(leading, spread) =>
        leading.foreach(allocatePattern)
        spread.foreach: (_, middle, trailing) =>
          allocatePattern(middle)
          trailing.foreach(allocatePattern)
      case Record(fields) => fields.foreach((_, value) => allocatePattern(value))
      case Chain(first, second) => allocatePattern(first); allocatePattern(second)
      case Alias(inner, _) => allocatePattern(inner)
      case Transform(inner, parameters, transform) =>
        val scope = allocateNested(source)
        scope.bindPattern(inner)
        parameters.foreach((_, param) => scope.bindLocal(param))
        scope.allocatePattern(inner)
        scope.allocateStatement(transform)
      case Annotated(inner, annotations) =>
        allocatePattern(inner)
        annotations.foreach(_.foreach(allocateStatement))
      case Guarded(inner, guard) => allocatePattern(inner); allocateStatement(guard)

  def allocateSimpleSplit(source: SimpleSplit): Unit = source match
    case SimpleSplit.Cons(SimpleSplit.Head.Let(binding, value), tail) =>
      val scope = allocateNested(source)
      scope.bindLocal(binding)
      allocateStatement(value)
      scope.allocateSimpleSplit(tail)
    case SimpleSplit.Cons(SimpleSplit.Head.Match(value, pat, consequent), tail) =>
      val scope = allocateNested(source)
      scope.bindPattern(pat)
      allocateStatement(value)
      scope.allocatePattern(pat)
      scope.allocateSimpleSplit(consequent)
      allocateSimpleSplit(tail)
    case SimpleSplit.Else(default) => allocateStatement(default)
    case SimpleSplit.End => ()

  def allocateFlatPattern(source: FlatPattern): Unit = source match
    case FlatPattern.ClassLike(constructor, _, arguments, _) =>
      arguments.foreach(_.foreach((sym, _) => bindLocal(sym)))
      allocateStatement(constructor)
    case FlatPattern.Record(entries) => entries.foreach((_, sym) => bindLocal(sym))
    case _ => ()

  def allocateBranch(source: Branch): Unit =
    val scope = allocateNested(source)
    allocateStatement(source.scrutinee)
    scope.allocateFlatPattern(source.pattern)
    scope.allocateSplit(source.continuation)

  def allocateSplit(source: Split): Unit = source match
    case Split.Cons(head, tail) => allocateBranch(head); allocateSplit(tail)
    case Split.Let(sym, value, tail) =>
      val scope = allocateNested(source)
      scope.bindLocal(sym)
      allocateStatement(value)
      scope.allocateSplit(tail)
    case Split.Else(default) => allocateStatement(default)
    case Split.End | Split.UseSplit(_) => ()
    case Split.LetSplit(sym, tail) =>
      val scope = allocateNested(source)
      allocateSplit(sym.body)
      scope.allocateSplit(tail)

  def allocateStatement(source: Statement): Unit =
    source match
      case source: Blk => allocateBlock(source)
      case source: Definition => allocateDefinition(source)
      case Lam(params, body) =>
        val scope = allocateNested(source)
        scope.allocateParameters(params :: Nil)
        scope.allocateStatement(body)
      case Forall(tvs, outer, body) =>
        val scope = allocateNested(source)
        (tvs.map(_.sym) ::: outer.toList).foreach(scope.bindLocal)
        tvs.foreach: tv =>
          tv.ub.foreach(scope.allocateStatement)
          tv.lb.foreach(scope.allocateStatement)
        scope.allocateStatement(body)
      case Rcd(_, stats) =>
        val scope = allocateNested(source)
        scope.prepare(stats)
        stats.foreach(scope.allocateStatement)
      case New(cls, args, rft) =>
        rft.foreach: (cs, _) =>
          val scope = allocateNested(source)
          val declaration = cs.defn.getOrElse(lastWords("An anonymous refinement must have a class declaration"))
          scope.prepare(declaration :: Nil)
          scope.allocateDefinition(declaration)
        allocateStatement(cls)
        args.foreach(allocateStatement)
      case Region(name, body) =>
        val scope = allocateNested(source)
        scope.bindLocal(name)
        scope.allocateStatement(body)
      case Label(label, result, body, _) =>
        val scope = allocateNested(source)
        scope.bindLabel(label)
        scope.bindLocal(result)
        scope.allocateStatement(body)
      case Handle(lhs, rhs, args, derivedClsSym, defs, body) =>
        val scope = allocateNested(source)
        scope.bindLocal(lhs)
        scope.bindInner(derivedClsSym)
        scope.prepare(derivedClsSym.defn.toList ::: defs.map(_.td))
        defs.foreach: handler =>
          val handlerScope = scope.allocateNested(handler)
          handlerScope.bindLocal(handler.resumeSym)
          handlerScope.allocateDefinition(handler.td)
          scope.definitionScopes(Identity(handler.td)) = handler.td.sym.subst(using scope) ->
            handlerScope.plannedDefinition(handler.td).getOrElse(lastWords("Missing handler definition scope"))
        derivedClsSym.defn.foreach(scope.allocateDefinition)
        allocateStatement(rhs)
        args.foreach(allocateStatement)
        scope.allocateStatement(body)
      case IfLike(_, _, split) => allocateSimpleSplit(split)
      case SynthIf(split) => allocateSplit(split)
      case SynthWhile(split) => allocateSplit(split)
      case _ => source.subTerms.foreach(allocateStatement)
    source match
      case term: Resolvable => term.expansion.foreach(_.foreach(allocateStatement))
      case _ => ()
    source match
      case term: AnySel => term.resolvedTargets.foreach:
        case flow.SelectionTarget.CompanionMember(comp, _) => allocateStatement(comp)
        case _ => ()
      case term: LeadingDotSel => term.resolvedTargets.foreach:
        case flow.SelectionTarget.CompanionMember(comp, _) => allocateStatement(comp)
      case _ => ()

  def block(source: Blk): Blk =
    val scope = nested(source)
    val copy = new Blk(source.stats.map(scope.statement), scope.term(source.res))
    copyMetadata(source, copy)

  def statement(source: Statement): Statement = source match
    case t: Term => term(t)
    case d: Definition => definition(d)
    case imp: Import =>
      val sym: ImportSymbol = imp.sym match
        case s: VarSymbol => s.subst
        case s: BlockMemberSymbol => s.subst
      Import(sym, imp.str, imp.file)(imp.toLoc)
    case LetDecl(sym, annotations) =>
      val copy: LocalVarSymbol | TermSymbol = sym match
        case s: LocalVarSymbol => s.subst
        case s: TermSymbol => s.subst
      LetDecl(copy, annotations.map(annotation))(source.toLoc)
    // A record property's identity is not a lexical binding. Its value may bind
    // locals, but selecting this property must still use the resolved field key.
    case f @ RcdField(field, rhs, sym) => located(f, RcdField(term(field), term(rhs), sym)(f.mut, f.key))
    case s @ RcdSpread(rcd) => located(s, RcdSpread(term(rcd)))
    case DefineVar(sym, rhs) =>
      val copy: LocalSymbol | TermSymbol = sym match
        case s: LocalVarSymbol => s.subst
        case s: LabelSymbol => s.subst
        case s: SplitSymbol => s.subst
        case s: InstSymbol => s.subst
        case s: TermSymbol => s.subst
      DefineVar(copy, term(rhs))(source.toLoc)
    case sc: SetConfig => sc

  def annotation(source: Annot): Annot = source match
    case Annot.Trm(t) => Annot.Trm(term(t))(source.toLoc)
    case Annot.JsSymbol(key) => Annot.JsSymbol(key.copy(path = key.path.map(_.subst))(term(key.term)))(source.toLoc)
    case _ => source

  private def modulefulness(source: Modulefulness): Modulefulness =
    Modulefulness(source.msym.map(_.subst))(source.modified)

  private def parameter(source: Param): Param =
    val copy = Param(source.flags, source.sym.subst, source.sign.map(term), modulefulness(source.modulefulness))(source.toLoc)
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
    ParamList(source.flags, source.params.map(parameter), source.variadic.map(_.map(parameter)))(source.toLoc)

  private def bindParameters(lists: Ls[ParamList]): Unit =
    lists.foreach(_.allParams.foreach(p => bindLocal(p.sym)))

  private def typeParameter(source: TyParam): TyParam =
    val copy = source.copy(sym = source.sym.subst)(source.toLoc)
    copy.sym.decl = S(copy)
    copy

  private def termDefinition(source: TermDefinition): TermDefinition =
    val scope = definitionScope(source)
    val copy = source.copy(sym = source.sym.subst, tsym = source.tsym.subst,
      params = source.params.map(scope.parameterList), tparams = source.tparams.map(_.map(scope.parameter)),
      sign = source.sign.map(scope.term), body = source.body.map(scope.term),
      modulefulness = modulefulness(source.modulefulness), annotations = source.annotations.map(scope.annotation),
      companion = source.companion.map(mapType))(source.toLoc, source.headerLoc, source.scope)
    copy.tsym.defn = S(copy)
    copy.isErroneous = source.isErroneous
    copy

  private def knownDefinition(source: Definition): Opt[Definition] =
    definitions.get(Identity(source)).orElse(outer match
      case parent: CloneScope => parent.knownDefinition(source)
      case _ => N)
    .filter(_.sym is source.sym.subst)

  private def definition(source: Definition): Definition = knownDefinition(source).getOrElse {
    val copy = source match
      case source: TermDefinition => termDefinition(source)
      case source: TypeDef =>
        val scope = definitionScope(source)
        val companion = source.companion.map: companion =>
          definition(companion) match
            case copy: CompanionValue => copy
            case _ => lastWords("A cloned companion must remain a value definition")
        val copy = source.copy(sym = source.sym.subst, bsym = source.bsym.subst,
          tparams = source.tparams.map(scope.typeParameter), rhs = source.rhs.map(scope.term),
          companion = companion, annotations = source.annotations.map(scope.annotation))(source.toLoc, source.headerLoc)
        copy.sym.defn = S(copy)
        copy
      case source: ClassLikeDef =>
        val scope = definitionScope(source)
        val body = ObjBody(copyMetadata(source.body.blk,
          Blk(source.body.blk.stats.map(scope.statement), scope.term(source.body.blk.res))))
        fieldDefinitions(source).foreach(scope.definition)
        val tparams = source.tparams.map(scope.typeParameter)
        val auxParams = source.auxParams.map(scope.parameterList)
        val annotations = source.annotations.map(scope.annotation)
        val ext = source.ext.map(scope.construction)
        val copy = source match
          case s: ClassDef.Parameterized =>
            val c = s.copy(owner = s.owner.map(_.subst), sym = s.sym.subst, bsym = s.bsym.subst,
              ctorSym = S(s.ctorSym.value.subst), tparams = tparams, params = scope.parameterList(s.params),
              auxParams = auxParams, ext = ext, body = body, companion = s.companion.map(mapClassCompanion),
              annotations = annotations, ctorAnnotations = s.ctorAnnotations.map(scope.annotation))(s.toLoc, s.headerLoc, s.ctorLoc)
            c.sym.defn = S(c)
            c
          case s: ClassDef.Plain =>
            val c = s.copy(owner = s.owner.map(_.subst), sym = s.sym.subst, bsym = s.bsym.subst,
              ctorSym = s.ctorSym.map(_.subst), tparams = tparams, auxParams = auxParams, ext = ext,
              body = body, companion = s.companion.map(mapClassCompanion), annotations = annotations,
              ctorAnnotations = s.ctorAnnotations.map(scope.annotation))(s.toLoc, s.headerLoc, s.ctorLoc)
            c.sym.defn = S(c)
            c
          case s: ModuleOrObjectDef =>
            val c = s.copy(owner = s.owner.map(_.subst), sym = s.sym.subst, bsym = s.bsym.subst,
              tparams = tparams, paramsOpt = s.paramsOpt.map(scope.parameterList), auxParams = auxParams,
              ext = ext, body = body, companion = s.companion.map(mapModuleCompanion), annotations = annotations)(s.path, s.toLoc, s.headerLoc)
            c.sym.defn = S(c)
            c
          case s: PatternDef =>
            val c = s.copy(owner = s.owner.map(_.subst), sym = s.sym.subst, bsym = s.bsym.subst,
              tparams = tparams, parameters = s.parameters.map(scope.parameter),
              patternParams = s.patternParams.map(scope.parameter), extractionParams = s.extractionParams.map(scope.parameter),
              pattern = scope.pattern(s.pattern), annotations = annotations)(s.toLoc, s.headerLoc)
            c.sym.defn = S(c)
            c
        (source.sym, copy.sym) match
          case (old: ClassLikeSymbol, fresh: ClassLikeSymbol) =>
            fresh.irClassHeader = old.irClassHeader.map: header =>
              header.copy(parent = header.parent match
                case codegen.ClassHeader.Parent.Known(sym) => codegen.ClassHeader.Parent.Known(mapType(sym))
                case parent => parent,
                companionClass = header.companionClass.map(_.subst), termCompanion = header.termCompanion.map(_.subst))
          case _ => ()
        copy
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
        val copy = Constructor(term(target), arguments.map(_.map(pattern)))
        copy.resolvedTargets = source.resolvedTargets.map:
          case s: DefinitionSymbol[?] => s.subst
          case s: VarSymbol => s.subst
        copy.isErroneous = source.isErroneous
        copy.shapes.copyFrom(source.shapes)
        copy
      case Composition(polarity, left, right) => Composition(polarity, pattern(left), pattern(right))
      case Negation(inner) => Negation(pattern(inner))
      case Wildcard() => Wildcard()
      case Literal(literal) => Literal(literal)
      case Range(lower, upper, inclusive) => Range(lower, upper, inclusive)
      case Concatenation(left, right) => Concatenation(pattern(left), pattern(right))
      case Tuple(leading, spread) => Tuple(leading.map(pattern), spread.map:
        case (kind, middle, trailing) => (kind, pattern(middle), trailing.map(pattern)))
      case Record(fields) => Record(fields.map((id, value) => id -> pattern(value)))
      case Chain(first, second) => Chain(pattern(first), pattern(second))
      case source @ Alias(inner, id) =>
        val copy = Alias(pattern(inner), id)
        source.symbolOption.foreach(sym => copy.symbol = sym.subst)
        copy
      case Transform(inner, parameters, transform) =>
        val scope = nested(source)
        Transform(scope.pattern(inner), parameters.map((binding, param) =>
          scope.mapVarSym(binding) -> scope.mapVarSym(param)), scope.term(transform))
      case Annotated(inner, annotations) => Pattern.Annotated(pattern(inner), annotations.map:
        case L(loc) => L(loc)
        case R(value) => R(term(value)))
      case Guarded(inner, guard) => Guarded(pattern(inner), term(guard))
    located(source, copy)

  private def simpleRef(source: SimpleRef): SimpleRef =
    copyMetadata(source, new SimpleRef(mapSimple(source.sym))(source.tree))

  private def scrutinee(source: Ref | SimpleRef): Ref | SimpleRef = term(source) match
    case copy: (Ref | SimpleRef) => copy
    case _ => lastWords("Cloning a scrutinee must preserve its reference form")

  def simpleSplit(source: SimpleSplit): SimpleSplit =
    import SimpleSplit.*
    val copy = source match
      case Cons(head @ Head.Let(binding, value), tail) =>
        val scope = nested(source)
        Cons(located(head, Head.Let(scope.mapLocal(binding), term(value))), scope.simpleSplit(tail))
      case Cons(head @ Head.Match(value, pat, consequent), tail) =>
        val scope = nested(source)
        Cons(located(head, Head.Match(scrutinee(value), scope.pattern(pat), scope.simpleSplit(consequent))), simpleSplit(tail))
      case e @ Else(default) => Else(term(default))(e.kw)
      case End => End
    located(source, copy)

  private def mapLocal(sym: LocalVarSymbol): LocalVarSymbol = sym.subst

  def flatPattern(source: FlatPattern): FlatPattern =
    val copy = source match
      case FlatPattern.Lit(literal) => FlatPattern.Lit(literal)
      case p @ FlatPattern.ClassLike(constructor, symbol, arguments, refined) =>
        val cls: ClassSymbol | ModuleOrObjectSymbol = symbol match
          case s: ClassSymbol => s.subst
          case s: ModuleOrObjectSymbol => s.subst
        FlatPattern.ClassLike(term(constructor), cls,
          arguments.map(_.map((sym, loc) => sym.subst -> loc)), refined)(Tree.Dummy)
      case FlatPattern.Tuple(size, inf) => FlatPattern.Tuple(size, inf)
      case FlatPattern.Record(entries) =>
        FlatPattern.Record(entries.map((id, sym) => id -> sym.subst))
    located(source, copy)

  def branch(source: Branch): Branch =
    val scope = nested(source)
    val pat = scope.flatPattern(source.pattern)
    located(source, Branch(simpleRef(source.scrutinee), pat, scope.split(source.continuation)))

  def split(source: Split): Split =
    val copy = source match
      case Split.Cons(head, tail) => Split.Cons(branch(head), split(tail))
      case Split.Let(sym, value, tail) =>
        val scope = nested(source)
        Split.Let(scope.mapLocal(sym), term(value), scope.split(tail))
      case Split.Else(default) => Split.Else(term(default))
      case Split.End => Split.End
      case Split.LetSplit(sym, tail) =>
        val scope = nested(source)
        // A split symbol owns its immutable executable body, so construct it
        // after copying that body. Erased types never refer to split symbols.
        val fresh = new SplitSymbol(split(sym.body), sym.nme)
        scope.splits(sym) = fresh
        Split.LetSplit(fresh, scope.split(tail))
      case Split.UseSplit(sym) => Split.UseSplit(sym.subst)
    located(source, copy)

  private def construction(source: New): New = term(source) match
    case copy: New => copy
    case _ => lastWords("Cloning a construction must preserve its term form")

  private def element(source: Elem): Elem = source match
    case f: Fld => located(f, f.copy(term = f.term.cloned, asc = f.asc.map(_.cloned)))
    case s: Spd => located(s, s.copy(term = s.term.cloned))

  def term(source: Term): Term =
    def copyResolution(source: Resolvable, copy: Resolvable): copy.type =
      copy.isErroneous = source.isErroneous
      source.expansion.foreach(expansion => copy.expand(expansion.map(_.cloned)))
      copy
    def copySelection(source: Term & AnySel, copy: Term & AnySel): copy.type =
      copy.resolvedTargets = source.resolvedTargets.map:
        case flow.SelectionTarget.ObjectMember(sym) => flow.SelectionTarget.ObjectMember(sym.subst)
        case flow.SelectionTarget.CompanionMember(comp, sym) => flow.SelectionTarget.CompanionMember(comp.cloned, sym.subst)
      copyResolution(source, copy)
    def copyNewResolution(source: NewResolvable, copy: NewResolvable): copy.type =
      copy.resolvedTargets = source.resolvedTargets.map(_.subst)
      copy.keyAccess = source.keyAccess.map(_.cloned)
      copy.isErroneous = source.isErroneous
      copy
    // Keep class qualifiers typed as selections while sharing all clone metadata copying.
    def cloneSel(term: NewSel): NewSel =
      val copy = new NewSel(term.prefix.cloned, term.id, term.cls.map(cloneSel))(term.resSym)
      copy.resolvedMembers = term.resolvedMembers.map(_.subst)
      copy.hasDynamicTarget = term.hasDynamicTarget
      copy.tupleIndex = term.tupleIndex
      copyMetadata(term, copyNewResolution(term, copy))
    val that = source match
      case Error() => Error()
      case UnitVal() => UnitVal()
      case DynTy() => DynTy()
      case Missing => return Missing
      case Lit(lit) => Lit(lit)
      case term @ SimpleRef(sym) => SimpleRef(mapSimple(sym))(term.tree)
      case term @ SelfRef(sym) => SelfRef(sym.subst)(term.tree)
      case term @ MemberRef(sym) => copyNewResolution(term, MemberRef(sym.subst)(term.tree, term.resSym))
      case term @ Super(receiver, owner, id) =>
        return copyMetadata(term, copyNewResolution(term,
          Super(receiver.cloned, owner.subst, id)(term.resSym)))
      case term: NewSel => return cloneSel(term)
      case term @ UnresolvedRef(prefixes, id) =>
        val clonedPrefixes = prefixes.map(_.cloned)
        val copy = UnresolvedRef(clonedPrefixes, id)(term.resSym)
        def cloneReceiver(receiver: Term): Term =
          val index = prefixes.indexWhere(_ is receiver)
          assert(index >= 0, "A wildcard candidate must belong to an opened prefix")
          clonedPrefixes(index)
        copy.resolvedMembers = term.resolvedMembers.map((receiver, member) => cloneReceiver(receiver) -> member.subst)
        copy.dynamicPrefixes = term.dynamicPrefixes.map(cloneReceiver)
        copyNewResolution(term, copy)
      case Capture(base, thru) => Capture(base.cloned, thru.subst)
      case term @ Resolved(t, sym) => copyResolution(term, Resolved(t.cloned, sym.subst)(term.typ))
      case term @ Ref(sym) => copyResolution(term, Ref(sym.subst)(term.tree, term.typ))
      case term @ App(lhs, rhs) =>
        val copy = App(lhs.cloned, rhs.cloned)(term.tree, term.typ, term.resSym)
        copy.callableTargets.shapes.copyFrom(term.callableTargets.shapes)
        copyResolution(term, copy)
      case term @ TyApp(lhs, targs) => copyResolution(term, TyApp(lhs.cloned, targs.map(_.cloned))(term.typ))
      case term @ Sel(prefix, nme) => copySelection(term, Sel(prefix.cloned, nme)(term.sym.map(_.subst), term.resSym, term.typ, term.originalCtx))
      case term @ SynthSel(prefix, nme) => copySelection(term, SynthSel(prefix.cloned, nme)(term.sym.map(_.subst), term.resSym, term.typ, term.originalCtx))
      case term @ LeadingDotSel(nme) =>
        val copy = LeadingDotSel(nme)(term.originalCtx)
        copy.resolvedTargets = term.resolvedTargets.map:
          case flow.SelectionTarget.CompanionMember(comp, sym) => flow.SelectionTarget.CompanionMember(comp.cloned, sym.subst)
        copyResolution(term, copy)
      case DynSel(prefix, fld, arrayIdx, checked) => DynSel(prefix.cloned, fld.cloned, arrayIdx, checked)
      case term @ Tup(fields) =>
        Tup(fields.map(element))(term.tree)
      case Mut(underlying) => underlying.cloned match
        case copy: (Tup | Rcd | New | DynNew) => Mut(copy)
        case _ => lastWords("Cloning must preserve a mutable term's form")
      case term @ CtxTup(fields) =>
        CtxTup(fields.map(element))(term.tree)
      case IfLike(kw, form, split) => IfLike(kw, form, simpleSplit(split))
      case SynthIf(value) => SynthIf(split(value))
      case SynthWhile(value) => SynthWhile(split(value))
      case Lam(params, body) =>
        val scope = nested(source)
        Lam(scope.parameterList(params), scope.term(body))
      case FunTy(lhs, rhs, eff) => FunTy(lhs.cloned, rhs.cloned, eff.map(_.cloned))
      case Forall(tvs, outer, body) =>
        val scope = nested(source)
        Forall(tvs.map(tv => QuantVar(scope.mapVarSym(tv.sym), tv.ub.map(scope.term), tv.lb.map(scope.term))),
          outer.map(scope.mapVarSym), scope.term(body))
      case Constrained(constraints, body) => Constrained(constraints.map(c =>
        located(c, c.copy(lhs = c.lhs.cloned, rhs = c.rhs.cloned))), body.cloned)
      case WildcardTy(in, out) => WildcardTy(in.map(_.cloned), out.map(_.cloned))
      case blk: Blk => return block(blk)
      case term @ Rcd(mut, stats) =>
        val scope = nested(source)
        Rcd(mut, stats.map(scope.statement))
      case Quoted(body) => Quoted(body.cloned)
      case Unquoted(body) => Unquoted(body.cloned)
      case term @ New(cls, args, rft) =>
        val refinement = rft.map: (cs, ob) =>
          val scope = nested(source)
          val declaration = cs.defn.getOrElse(lastWords("An anonymous refinement must have a class declaration"))
          assert(declaration.body.blk is ob.blk, "An anonymous refinement must use its class declaration's body")
          scope.definition(declaration) match
            case copy: ClassDef => copy.sym -> copy.body
            case _ => lastWords("A cloned refinement must remain a class")
        copyResolution(term, New(cls.cloned, args.map(_.cloned), refinement)(term.resSym, term.typ))
      case DynNew(cls, args) => DynNew(cls.cloned, args.map(_.cloned))
      case term @ SelProj(prefix, cls, proj) =>
        copySelection(term, SelProj(prefix.cloned, cls.cloned, proj)(term.sym.map(_.subst), term.resSym, term.typ, term.originalCtx))
      case Asc(term, ty) => Asc(term.cloned, ty.cloned)
      case CompType(lhs, rhs, pol) => CompType(lhs.cloned, rhs.cloned, pol)
      case Neg(rhs) => Neg(rhs.cloned)
      case Region(name, body) =>
        val scope = nested(source)
        Region(scope.mapVarSym(name), scope.term(body))
      case RegRef(reg, value) => RegRef(reg.cloned, value.cloned)
      case Assgn(lhs, rhs) => Assgn(lhs.cloned, rhs.cloned)
      case Drop(trm) => Drop(trm.cloned)
      case Deref(ref) => Deref(ref.cloned)
      case SetRef(ref, value) => SetRef(ref.cloned, value.cloned)
      case Ret(result) => Ret(result.cloned)
      case Throw(result) => Throw(result.cloned)
      case Label(label, result, body, hasNonLocalContinueDispatch) =>
        val scope = nested(source)
        Label(scope.mapLabelSym(label), scope.mapTempSym(result), scope.term(body), hasNonLocalContinueDispatch)
      case Break(label, result, value) => Break(label.subst, result.subst, value.map(_.cloned))
      case Continue(label) => Continue(label.subst)
      case Try(body, finallyDo) => Try(body.cloned, finallyDo.cloned)
      case Annotated(annot, target) => Annotated(annotation(annot), target.cloned)
      case handle @ Handle(lhs, rhs, args, derivedClsSym, defs, body) =>
        val scope = nested(source)
        val handlers = defs.map: handler =>
          val handlerScope = scope.nested(handler)
          val definition = handlerScope.termDefinition(handler.td)
          // Abortive handlers also expose these same definitions in their synthetic
          // class body. They are one binding, with the resumption symbol in scope.
          scope.definitions(Identity(handler.td)) = definition
          HandlerTermDefinition(handlerScope.mapVarSym(handler.resumeSym), definition)
        derivedClsSym.defn.foreach(scope.definition)
        Handle(scope.mapLocal(lhs), rhs.cloned, args.map(_.cloned), scope.mapClsSym(derivedClsSym), handlers, scope.term(body))(handle.isAbortive)
    copyMetadata(source, that)
  
end CloneScope
