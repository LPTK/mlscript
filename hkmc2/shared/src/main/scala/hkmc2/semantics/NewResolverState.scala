package hkmc2
package semantics

import scala.collection.mutable
import hkmc2.utils.*, shorthands.*
import hkmc2.Message.MessageContext
import Term.*

inline def rstate(using state: NewResolverState): NewResolverState = state

object NewResolverState:
  type Listener = TermShape => NewResolverState ?=> Unit

  /** Lazy source lookup preserves existing graph-node identities without copying
    * a unit's memo tables. Mutable bookkeeping values supply an explicit copier.
    */
  final class Cache[K, V](source: Opt[Cache[K, V]], copy: V => V):
    private val entries = mutable.Map.empty[K, V]
    private def peek(key: K): Opt[V] = entries.get(key).orElse(source.flatMap(_.peek(key)))
    def get(key: K): Opt[V] = entries.get(key).orElse:
      source.flatMap(_.peek(key)).map: value =>
        val local = copy(value)
        entries(key) = local
        local
    def getOrElseUpdate(key: K, value: => V): V = get(key).getOrElse:
      val result = value
      entries(key) = result
      result
    def update(key: K, value: V): Unit = entries(key) = value

  final class Seen[A](source: Opt[Seen[A]]):
    private val entries = mutable.Set.empty[A]
    def apply(value: A): Bool = entries(value) || source.exists(_(value))
    def add(value: A): Bool = if apply(value) then false else entries.add(value)

/** Inference belongs to the consuming compilation unit. Imported hosts retain their
  * completed candidates and contextual listeners; this state supplies private copies
  * before a consumer can extend either collection.
  */
final class NewResolverState private (
    val owner: Elaborator.State, private val consumer: Opt[NewResolverState], private val source: Opt[NewResolverState],
    private val contextBase: Opt[NewResolverState], val instances: TypeSubstitution):
  import NewResolverState.{Cache, Seen}

  def this(owner: Elaborator.State) = this(owner, N, N, N, TypeSubstitution.empty)
  private def root: NewResolverState = consumer.getOrElse(this)
  private def inherited: Opt[NewResolverState] = contextBase.orElse(source)
  // A substitution view only uses a subset of these tables. Allocate each on
  // first access, including root-only bookkeeping; constructing a view must not
  // eagerly create collections or walk the exporter's inheritance chain.
  private lazy val contexts = mutable.Map.empty[(NewResolverState, TypeSubstitution), NewResolverState]
  /** Activations share the consuming unit's hosts and memoized source graph.
    * Only the finite substitution varies; composing views never adds a parent
    * context or changes either endpoint's originating graph.
    */
  def withInstances(substitution: TypeSubstitution): NewResolverState =
    val base = contextBase.getOrElse(this)
    if substitution.isEmpty then base
    else root.contexts.getOrElseUpdate((base, substitution),
      new NewResolverState(owner, S(root), source, S(base), substitution))
  private var reporter: Raise | Null = null
  def withReporter(raise: Raise): this.type =
    root.reporter = raise
    this
  def report(diagnostic: Diagnostic): Unit =
    assert(root.reporter != null, "Resolution requires a diagnostic collector")
    root.reporter.nn(diagnostic)
  def reportResolutionError(src: Term | Pattern, messages: Ls[(Message, Opt[Loc])]): Unit =
    report(ErrorReport(msg"Resolution error in ${src.describe}" -> src.toLoc :: messages, source = Diagnostic.Source.Compilation))

  def isOwnedSym(symbol: Symbol): Bool = symbol.getState is owner

  // Annotation constraints record escaping implementations in the consuming
  // unit, including their activation context. The block's exposure pass drains
  // these roots before sealing resolution; they are neither copied from imports
  // nor retained across worksheet blocks. One witness suffices for each value.
  private lazy val exposureInputs = mutable.LinkedHashMap.empty[(ShapeKey, NewResolverState), InterfaceExposure.Input]
  def exposeValue(shape: TermShape, provenance: ShapeProvenance): Unit =
    root.exposureInputs.getOrElseUpdate((ShapeIdentity.key(shape), this), InterfaceExposure.Input(shape, this)(provenance))
  def takeExposureInputs(): Ls[InterfaceExposure.Input] =
    val inputs = root.exposureInputs.values.toList
    root.exposureInputs.clear()
    inputs

  // A listener carries its defining graph, not its defining mutable resolver.
  // Views share the consumer's host copies, but consult the source's bindings and
  // memoized nodes individually. Creating a view never traverses a source map.
  private lazy val views = mutable.Map.empty[NewResolverState, NewResolverState]
  private lazy val inheritedViews = mutable.Map.empty[(NewResolverState, NewResolverState), NewResolverState]
  private[hkmc2] def inGraph(graph: NewResolverState): NewResolverState =
    rebase(graph.contextBase.getOrElse(graph), root).withInstances(instances)
  private def rebase(graph: NewResolverState, destination: NewResolverState): NewResolverState =
    // A callback registered in this consuming unit already names its graph.
    // Sending it through the current import view would create X(Y(X(...)))
    // when an imported callback invokes a consumer callback and returns.
    if graph.root eq root then graph
    else
      val origin = source.fold(graph)(_.rebase(graph, destination))
      if origin.root eq root then origin
      else if root eq destination then
        root.views.getOrElseUpdate(origin, new NewResolverState(owner, S(root), S(origin), N, TypeSubstitution.empty))
      else root.views.get(origin).getOrElse:
        // A previously unused path can require a view of an intermediate exporter.
        // Memoize that read-only view in the consumer, never in the exporter.
        destination.inheritedViews.getOrElseUpdate((root, origin),
          new NewResolverState(owner, S(root), S(origin), N, TypeSubstitution.empty))

  private lazy val copies = mutable.Map.empty[Publisher.Data[?], Publisher.Data[?]]
  private lazy val pending = mutable.Map.empty[Identity[Publisher[?]], Publisher.Data[?]]
  private[hkmc2] def local[A](ref: Publisher.Data[A]): Publisher.Data[A] =
    // Explicit references (notably type parameters) need the same intermediate
    // exporter lookup as references through their syntax or symbol host.
    val origin = source.fold(ref)(_.peekReference(ref))
    if (origin.owner eq root) && !origin.completed then origin
    else
      // Each key and its copy share A; recover that type when looking up the
      // heterogeneous graph-node map.
      root.copies.getOrElseUpdate(origin, origin.copy(root)).asInstanceOf[Publisher.Data[A]]

  private def peekReference[A](ref: Publisher.Data[A]): Publisher.Data[A] =
    val origin = source.fold(ref)(_.peekReference(ref))
    root.copies.get(origin).fold(origin)(_.asInstanceOf[Publisher.Data[A]])

  private def peek[A](publisher: Publisher[A]): Publisher.Data[A] =
    peekReference(publisher.originalData)

  private[hkmc2] def data[A](publisher: Publisher[A]): Publisher.Data[A] =
    val ref = source.fold(publisher.initialData(root))(_.peek(publisher))
    if ref.owner == null then publisher.initialData(root)
    if publisher.isOwnedBy(root) && !root.completedNodes(new Identity(publisher)) then
      root.pending.getOrElseUpdate(new Identity(publisher), ref)
    local(ref)

  /** Number of lazily copied graph nodes, for isolation/scale regressions. */
  private[hkmc2] def copiedHostCount: Int = root.copies.size

  private lazy val completedNodes = mutable.Set.empty[Identity[Publisher[?]]]

  // A receiver shape can lack a member that another shape supplies later in
  // inference. Retain lazy witnesses by selection, including those from later
  // activations of completed syntax, and report them together at block completion.
  // Eager problems invalidate the selection immediately, regardless of its targets;
  // delaying their report lets the same error include every relevant witness.
  private lazy val missingMembers = mutable.LinkedHashMap.empty[Identity[NewSel],
    mutable.ListBuffer[(Bool, () => Ls[(Message, Opt[Loc])])]]
  private def hasSelectionTarget(selection: NewSel): Bool =
    selection.resolvedTargets.nonEmpty || selection.hasDynamicTarget || selection.tupleIndex.nonEmpty
  def missingMember(selection: NewSel, eager: Bool)(messages: => Ls[(Message, Opt[Loc])]): Unit =
    val key = new Identity(selection)
    // Accumulate witnesses for this block's error without replaying errors on
    // completed selections or adding follow-on errors to unrelated failures.
    if !hasError(selection) || root.missingMembers.contains(key) then
      if eager then markError(selection)
      root.missingMembers.getOrElseUpdate(key, mutable.ListBuffer.empty) += ((eager, () => messages))

  /** Seal the decisions and original host data read by erasure/lowering. The
    * inference graph keeps private, live host data and all its listeners, so
    * later calls can still transport arguments and results through these nodes.
    * This boundary is per block, even when a worksheet reuses its symbol state.
    * Legacy blocks also need sealing: new-resolution consumers may import their
    * syntax concurrently, so no consumer may claim an unowned original host.
    */
  def completeBlock(block: Statement): Unit =
    val visited = mutable.Set.empty[Identity[Statement]]
    def pattern(pat: Pattern): Unit =
      pat match
        case ctor: Pattern.Constructor => data(ctor)
        case _ => ()
      pat.children.foreach:
        case child: Pattern => pattern(child)
        case term: Term => visit(term)
        case _ => ()
    def split(branches: SimpleSplit): Unit = branches match
      case SimpleSplit.Cons(SimpleSplit.Head.Match(_, pat, consequent), tail) =>
        pattern(pat)
        split(consequent)
        split(tail)
      case SimpleSplit.Cons(_, tail) => split(tail)
      case _ => ()
    def visit(statement: Statement): Unit = if visited.add(new Identity(statement)) then
      statement match
        // Bind even unused syntax to this unit. Otherwise its first consumer
        // could become the owner of an imported node's original listener buffer.
        case term: Term => data(term)
        case _ => ()
      statement match
        case cls: ClassLikeDef =>
          cls.ext.foreach(visit)
          cls.auxParams.foreach(_.subTerms.foreach(visit))
          cls match
            case pat: PatternDef => pattern(pat.pattern)
            case _ => ()
        case IfLike(_, _, branches) => split(branches)
        case Rcd(_, stats) => stats.foreach(visit)
        case Forall(params, _, _) =>
          params.foreach: param =>
            param.lb.foreach(visit)
            param.ub.foreach(visit)
        case New(_, _, refinement) => refinement.foreach(r => visit(r._2.blk))
        case _ => ()
      statement.subStatements.foreach(visit)
    visit(block)
    root.missingMembers.foreach: (key, problems) =>
      val selection = key.value
      val unresolved = !hasSelectionTarget(selection)
      val messages = problems.iterator.collect:
        case (eager, messages) if eager || unresolved => messages()
      .flatten.toList.distinct
      if messages.nonEmpty then
        markError(selection)
        reportResolutionError(selection, messages)
    root.missingMembers.clear()
    root.pending.foreach: (key, value) =>
      if !key.value.isInstanceOf[Symbol] && root.completedNodes.add(key) then value.completed = true
    root.pending.clear()

  def canResolve(host: Publisher[?]): Bool =
    data(host)
    host.isOwnedBy(root) && !root.completedNodes(new Identity(host))

  private lazy val errors = mutable.Set.empty[Identity[PossiblyErroneous]]
  def hasError(host: PossiblyErroneous): Bool = host.isErroneous || root.errors(new Identity(host))
  def markError(host: Publisher[?] & PossiblyErroneous): Unit =
    root.errors += new Identity(host)
    if canResolve(host) then host.isErroneous = true

  /** Inference may refine an imported result, but the imported code has already
    * been compiled. Its member/constructor targets must remain unchanged.
    */
  def recordResolution(host: Publisher[?], unchanged: Bool)(update: => Unit): Unit =
    if !unchanged then
      assert(canResolve(host), "Inference changed a completed reference target")
      update

  lazy val membersCache: Cache[(TermShape, Str), MemberLookup] =
    new Cache(inherited.map(_.membersCache), identity)
  // Shape components of cache keys use ShapeIdentity.key, like hosts' candidates.
  lazy val spreadInputs: Cache[Object, mutable.Set[ShapeKey]] =
    new Cache(inherited.map(_.spreadInputs), _.clone())
  lazy val reportedArities: Cache[Object, mutable.Set[Int]] =
    new Cache(inherited.map(_.reportedArities), _.clone())
  lazy val appShapes: Cache[(ShapeKey, FlowSymbol), AppShape] =
    new Cache(inherited.map(_.appShapes), identity)
  lazy val newShapes: Cache[(ClassValueTarget, Ls[Marks], FlowSymbol, Opt[Ls[DeclaredType]]), NewShape] =
    new Cache(inherited.map(_.newShapes), identity)
  lazy val constructorApplications: Seen[(NewShape, TypeSubstitution)] =
    new Seen(inherited.map(_.constructorApplications))
  // Canonical producers anchor synthesized inference hosts (for example a
  // tuple's Array parent); their identities must survive reconstruction. Tuple and
  // record views are keyed by their effective binder substitution, so the same
  // view has one identity whichever sequence of substitutions produced it.
  private lazy val tupleShapes: Cache[(Term, Ls[TupleShape.Element], TypeSubstitution), TupleShape] =
    new Cache(inherited.map(_.tupleShapes), identity)
  private lazy val recordShapes: Cache[(Term.Rcd, Ls[RecordShape.Element], TypeSubstitution), RecordShape] =
    new Cache(inherited.map(_.recordShapes), identity)
  private lazy val instanceShapes: Cache[DeclaredType, InstanceShape] =
    new Cache(inherited.map(_.instanceShapes), identity)
  // Views constructed by this consumer, for allocation/growth regressions.
  // Adopted canonical producers are not newly allocated (see canonical).
  private var allocatedShapeViews: Int = 0
  private var largestShapeViewSubstitution: Int = 0
  private[semantics] def shapeView[A](substitution: TypeSubstitution)(make: => A): A =
    if substitution.nonEmpty then
      root.allocatedShapeViews += 1
      root.largestShapeViewSubstitution = root.largestShapeViewSubstitution.max(substitution.size)
    make
  /** Number of shape views (substituted tuples, records, instances, interface
    * views, and contextual wrappers) newly constructed in the consuming root. */
  private[hkmc2] def allocatedShapeViewCount: Int = root.allocatedShapeViews
  /** The largest binder substitution retained by any of those views. */
  private[hkmc2] def largestRetainedSubstitution: Int = root.largestShapeViewSubstitution
  /** Number of activation contexts created by withInstances in the consuming root. */
  private[hkmc2] def activationContextCount: Int = root.contexts.size
  /** Activation views share their consumer's hosts, so they must also share its
    * canonical shapes. As for type instances, adopt an inherited shape before
    * constructing one, and record either result in the consumer's cache.
    * A shape built from another unit's syntax is looked up through that syntax's
    * owning graph, as for named tuple records, so importers reuse the exporter's
    * shape instead of adding an equal copy to imported hosts.
    */
  private def canonical[K, V](origin: Publisher[?] | Null, cache: NewResolverState => Cache[K, V], key: K)(make: => V): V =
    val graph = if origin == null then null else origin.originalData.owner
    val state = if graph == null then this else inGraph(graph)
    cache(root).getOrElseUpdate(key, cache(state).get(key).getOrElse(make))
  def canonicalTuple(key: (Term, Ls[TupleShape.Element], TypeSubstitution))(make: => TupleShape): TupleShape =
    canonical(key._1, _.tupleShapes, key)(shapeView(key._3)(make))
  def canonicalRecord(key: (Term.Rcd, Ls[RecordShape.Element], TypeSubstitution))(make: => RecordShape): RecordShape =
    canonical(key._1, _.recordShapes, key)(shapeView(key._3)(make))
  def canonicalInstance(tpe: DeclaredType)(make: => InstanceShape): InstanceShape =
    canonical(tpe.resolution, _.instanceShapes, tpe)(shapeView(tpe.instances)(make))
  // The inferred element type of each array spread (see the tuple listener).
  private lazy val spreadElements: Cache[Identity[Term], TypeResolution] =
    new Cache(inherited.map(_.spreadElements), identity)
  def spreadElementType(spread: Term)(make: => TypeResolution): TypeResolution =
    canonical(spread, _.spreadElements, new Identity(spread))(make)
  lazy val introShapes: Cache[Identity[IntroTerm], IntroShape] =
    new Cache(inherited.map(_.introShapes), identity)
  lazy val symShapes: Cache[(BlockMemberSymbol, FlowSymbol, Ls[Marks]), CoreSymShape] =
    new Cache(inherited.map(_.symShapes), identity)
  // Member `let`s have no TermDefinition body. Their initializers and subsequent
  // assignments feed this host, just as assignments feed a local variable.
  // Keep the host in resolver state so imported observations use the existing
  // consumer-local publisher machinery rather than mutating the source symbol.
  private lazy val memberVariables: Cache[TermSymbol, ShapeHost] =
    new Cache(inherited.map(_.memberVariables), identity)
  def memberVariable(symbol: TermSymbol): ShapeHost =
    root.memberVariables.getOrElseUpdate(symbol,
      symbol.getState.newResolverState.memberVariables.get(symbol).getOrElse(
        new Host[ShapeEvent]:
          def showDbg(using DebugPrinter): Str = s"assignments to ${symbol.nme}"
      ))
  lazy val declaredSymShapes: Cache[(BlockMemberSymbol, FlowSymbol, Ls[Marks], Map[VarSymbol, DeclaredType], Bool), DeclaredSymShape] =
    new Cache(inherited.map(_.declaredSymShapes), identity)
  lazy val selfShapes: Cache[InnerSymbol, BaseShape] =
    new Cache(inherited.map(_.selfShapes), identity)
  lazy val defnShapes: Cache[DefinitionSymbol[?], DefnShape] =
    new Cache(inherited.map(_.defnShapes), identity)
  // Parameterless definition bodies share a result node before following their
  // references. Keep distinct generic activations separate, and inherit the host
  // identity so imported listeners use the consumer's private publisher data.
  lazy val byNameResults: Cache[(TermSymbol, TypeSubstitution), ShapeHost] =
    new Cache(inherited.map(_.byNameResults), identity)
  // Async payloads are deferred type edges, not snapshots of the body's current
  // candidates. Register each host before following recursive function results.
  lazy val resultTypes: Cache[(Identity[Term], TypeSubstitution), DeclaredType] =
    new Cache(inherited.map(_.resultTypes), identity)
  lazy val awaitedTypes: Cache[DeclaredType, DeclaredType] =
    new Cache(inherited.map(_.awaitedTypes), identity)
  // Keyed like inference candidates (see ShapeIdentity), so each candidate has one awaited type.
  lazy val awaitedValues: Cache[(ShapeKey, TypeSubstitution), DeclaredType] =
    new Cache(inherited.map(_.awaitedValues), identity)
  lazy val typeInterpretations: Cache[Identity[Term], TypeResolution] =
    new Cache(inherited.map(_.typeInterpretations), identity)
  // Qualification can deliver the same declaration in several environments.
  // Its open source type is shared before any environment observes the body.
  lazy val selectedTypes: Cache[(Identity[Term], TypeSymbol), TypeResolution] =
    new Cache(inherited.map(_.selectedTypes), identity)
  // Recorded before elaborating a declaration's members, including in legacy
  // exporters. Nominal interfaces may use any enclosing explicit type binder.
  // Term definitions record the binders enclosing their definition too, without
  // their own binders, which every application or specialization binds afresh.
  lazy val lexicalTypeBinders: Cache[AnyDefinitionSymbol, Set[VarSymbol]] =
    new Cache(inherited.map(_.lexicalTypeBinders), identity)
  // The explicit type binders in scope where a lambda, tuple, record,
  // application, construction, or pattern target is written. The elaborator records them when
  // it creates the term, before any listener can build the term's shape, and
  // binds the term's inference owner at the same time; the resolver reads them
  // through that owner (see NewResolver.lexicalBinders), so an unowned term is
  // one that was never recorded. A synthesized record standing in for a tuple's
  // named fields is recorded by the resolver when it creates the record.
  private lazy val lexicalTermBinders: Cache[Identity[Term], Set[VarSymbol]] =
    new Cache(inherited.map(_.lexicalTermBinders), identity)
  def recordLexicalBinders(term: Term, binders: Set[VarSymbol]): Unit =
    term.initialData(root)
    root.lexicalTermBinders(new Identity(term)) = binders
  private[semantics] def lexicalBindersOf(term: Term): Opt[Set[VarSymbol]] =
    val graph = term.originalData.owner
    if graph == null then N else inGraph(graph).lexicalTermBinders.get(new Identity(term))
  // Recorded with lexicalTypeBinders: the resolution scopes enclosing a type
  // definition. Declared members are located at their class's definition.
  lazy val lexicalBoundaries: Cache[AnyDefinitionSymbol, Set[ResolutionBoundary]] =
    new Cache(inherited.map(_.lexicalBoundaries), identity)
  lazy val typeDependencies: Cache[TypeResolution, Set[VarSymbol]] =
    new Cache(inherited.map(_.typeDependencies), identity)
  // Like typeDependencies, but following the references of synthesized nodes;
  // N when not fixed by the source graph (see NewResolver.instanceDependencies).
  lazy val typeInstanceDependencies: Cache[TypeResolution, Opt[Set[VarSymbol]]] =
    new Cache(inherited.map(_.typeInstanceDependencies), identity)
  // How many type arguments a type reference receives where it is the base of
  // a type application, recorded when the application is interpreted. A generic
  // reference without a record is a bare use. Either is intrinsic to the
  // reference, so a cached dependency summary of its resolution does not depend
  // on which traversal reached it first (see NewResolver.dependencies). Read
  // through the reference's owning graph, like lexicalTermBinders.
  private lazy val appliedTypeArguments: Cache[Identity[Term], Int] =
    new Cache(inherited.map(_.appliedTypeArguments), identity)
  def recordAppliedTypeArguments(base: Term, count: Int): Unit =
    root.appliedTypeArguments(new Identity(base)) = count
  private[semantics] def appliedTypeArgumentsOf(base: Term): Opt[Int] =
    val key = new Identity(base)
    val graph = base.originalData.owner
    (if graph == null then N else inGraph(graph).appliedTypeArguments.get(key)).orElse(appliedTypeArguments.get(key))
  // The scope of the templates that a synthesized inferred-element or
  // omitted-argument host receives: the binders that reading its values through
  // a substitution can require, or N when that scope is not known. Recorded by
  // the resolver when it creates the host, in the host's owning graph.
  private lazy val templateBinders: Cache[TypeResolution, Opt[Set[VarSymbol]]] =
    new Cache(inherited.map(_.templateBinders), identity)
  def recordTemplateBinders(host: TypeResolution, binders: Opt[Set[VarSymbol]]): Unit =
    host.initialData(root)
    root.templateBinders(host) = binders
  private[semantics] def templateBindersOf(host: TypeResolution): Opt[Opt[Set[VarSymbol]]] =
    val graph = host.originalData.owner
    if graph == null then N else inGraph(graph).templateBinders.get(host)
  lazy val unguardedTypeDependencies: Cache[TypeResolution, Set[VarSymbol]] =
    new Cache(inherited.map(_.unguardedTypeDependencies), identity)
  lazy val regularTypes: Cache[TypeResolution, Bool] =
    new Cache(inherited.map(_.regularTypes), identity)
  lazy val combinedTypes: Cache[TypeFormula[DeclaredType], DeclaredType] =
    new Cache(inherited.map(_.combinedTypes), identity)
  lazy val argumentTypes: Cache[(TypeResolution, TypeArgument), DeclaredType] =
    new Cache(inherited.map(_.argumentTypes), identity)
  lazy val pendingTypeDependencies: Cache[TypeResolution, TypeDependencyHost] =
    new Cache(inherited.map(_.pendingTypeDependencies), identity)
  lazy val dependencySubscriptions: Seen[(TypeResolution, TypeResolution)] =
    new Seen(inherited.map(_.dependencySubscriptions))
  lazy val quantifiedTypes: Cache[(TypeResolution, Ls[VarSymbol]), TypeResolution] =
    new Cache(inherited.map(_.quantifiedTypes), identity)
  lazy val instantiatedCallables: Cache[(ShapeKey, FlowSymbol, Ls[Marks]), CallableTypeShape] =
    new Cache(inherited.map(_.instantiatedCallables), identity)
  lazy val contextualSymbols: Cache[(CoreSymShape, TypeSubstitution), ContextualSymShape] =
    new Cache(inherited.map(_.contextualSymbols), identity)
  lazy val inferredInstantiations: Seen[(AnyDefinitionSymbol, FlowSymbol, TypeSubstitution, Ls[Marks])] =
    new Seen(inherited.map(_.inferredInstantiations))
  // A scheme is owned by its source definition, or by the original interpretation
  // of an anonymous quantified annotation. Neither a view nor an instance is an owner.
  private lazy val typeInstances: Cache[(AnyDefinitionSymbol | TypeResolution, FlowSymbol), TypeSubstitution] =
    new Cache(inherited.map(_.typeInstances), identity)
  private var allocatedTypeInstances: Int = 0
  private[hkmc2] def allocatedTypeInstanceCount: Int = root.allocatedTypeInstances
  private lazy val typeApplicationSites: Cache[Identity[TyApp], FlowSymbol] =
    new Cache(inherited.map(_.typeApplicationSites), identity)
  /** A type application consumes a scheme even when no term argument follows.
    * Its site is shared across observations and activation views of the source.
    */
  def typeApplicationSite(application: TyApp): FlowSymbol =
    val key = new Identity(application)
    root.typeApplicationSites.getOrElseUpdate(key, typeApplicationSites.get(key).getOrElse(
      FlowSymbol("type application")(using owner)))
  private lazy val fieldProjectionSites: Cache[BlockMemberSymbol, FlowSymbol] =
    new Cache(inherited.map(_.fieldProjectionSites), identity)
  /** A structural field constraint is a static projection site. Recursive
    * observations share it across substitution views; ordinary receiver marks
    * distinguish activations, as they do for a written member selection.
    */
  def fieldProjectionSite(field: BlockMemberSymbol): FlowSymbol =
    root.fieldProjectionSites.getOrElseUpdate(field, fieldProjectionSites.get(field).getOrElse(
      FlowSymbol.memSym(field)(using owner)))
  private[hkmc2] def instantiateTypeParameters(scheme: AnyDefinitionSymbol | TypeResolution,
      site: FlowSymbol, parameters: Ls[VarSymbol], siteBinders: Opt[Set[VarSymbol]]): TypeSubstitution =
    require(parameters.distinct.length == parameters.length, "A scheme cannot bind a parameter twice")
    val origin = scheme match
      case constructor: ClassCtorSymbol => constructor.associatedCls
      case original => original
    val key = (origin, site)
    // Graph views in one consumer must agree even when they reach the same
    // source definition through different imports. Adopt an inherited group
    // before allocating, and put either result in the consumer's canonical cache.
    val instances = root.typeInstances.getOrElseUpdate(key, typeInstances.get(key).getOrElse {
      // Construct the complete group without activating constraints. Recursive
      // subscribers may use it only after the cache contains every binder.
      val result = parameters.map: parameter =>
        new TypeParameterInstance(parameter, siteBinders)(using owner)
      root.allocatedTypeInstances += result.length
      TypeSubstitution(result)
    })
    assert(instances.keySet == parameters.toSet, "A source scheme's binders must remain stable")
    instances
  // The flag selects merged member interfaces versus independent constraint inputs.
  lazy val typeViews: Cache[(DeclaredType, Bool), TermShapeHost] =
    new Cache(inherited.map(_.typeViews), identity)
  lazy val patternTypes: Cache[(Identity[Pattern.Constructor], InnerSymbol), DeclaredType] =
    new Cache(inherited.map(_.patternTypes), identity)
  // A pattern's unknown output has one source identity across repeated inputs.
  // Rebuilding its synthetic term on every match would create fresh candidates
  // in recursive pattern calls, where hosts compare source identities.
  private lazy val patternOutputs: Cache[Identity[Pattern], UnknownValueShape] =
    new Cache(inherited.map(_.patternOutputs), identity)
  def patternOutput(pattern: Pattern)(make: => UnknownValueShape): UnknownValueShape =
    canonical(pattern, _.patternOutputs, new Identity(pattern))(make)
  // Repeated refinement of one input must reuse its synthesized type hosts.
  // Constructor paths distinguish references to the same captured class.
  lazy val patternRefinements: Cache[(Identity[Pattern.Constructor], InnerSymbol, Ls[Marks], ShapeKey), DeclaredType] =
    new Cache(inherited.map(_.patternRefinements), identity)
  lazy val primitiveTypes: Cache[ClassSymbol, DeclaredType] =
    new Cache(inherited.map(_.primitiveTypes), identity)
  lazy val extremeTypes: Cache[(Bool, Opt[TypeResolution]), DeclaredType] =
    new Cache(inherited.map(_.extremeTypes), identity)
  lazy val variantTypes: Cache[(DeclaredType, Bool), DeclaredType] =
    new Cache(inherited.map(_.variantTypes), identity)
  lazy val selectedArguments: Cache[(DeclaredType, Bool), DeclaredType] =
    new Cache(inherited.map(_.selectedArguments), identity)
  lazy val abstractTypes: Cache[TypeResolution, DeclaredType] =
    new Cache(inherited.map(_.abstractTypes), identity)
  lazy val omittedTypes: Cache[(TypeResolution, VarSymbol), DeclaredType] =
    new Cache(inherited.map(_.omittedTypes), identity)
  lazy val exposedTypeHoles: Seen[(DeclaredType, ShapeKey, Ls[Marks])] =
    new Seen(inherited.map(_.exposedTypeHoles))
  lazy val signatureParameters: Cache[VarSymbol, DeclaredType] =
    new Cache(inherited.map(_.signatureParameters), identity)
  lazy val contextualTypes: Cache[ContextualType, DeclaredType] =
    new Cache(inherited.map(_.contextualTypes), identity)
  lazy val tupleArrayParents: Cache[Identity[TupleShape], NominalInstanceView] =
    new Cache(inherited.map(_.tupleArrayParents), identity)
  lazy val parameterTypes: Cache[TypeShape.Parameter, DeclaredType] =
    new Cache(inherited.map(_.parameterTypes), identity)
  lazy val mutableArrays: Cache[Identity[Term.Mut], TermShape] =
    new Cache(inherited.map(_.mutableArrays), identity)
  // Named tuple fields have stable property identities, shared with consumers
  // through the tuple's original graph rather than allocated per spread candidate.
  lazy val namedTupleRecords: Cache[Identity[Tup | CtxTup], Rcd] =
    new Cache(inherited.map(_.namedTupleRecords), identity)
  lazy val aggregateProducers: Seen[Identity[Tup | CtxTup | Rcd]] =
    new Seen(inherited.map(_.aggregateProducers))
  // Whether a binder is supplied is fixed by its authoritative syntactic site.
  // Each definition/site has its own parameter instances; marks distinguish the
  // enclosing activations of their bounds, not whether the slot is explicit.
  // A method projection or nested constraint can change the observation scope
  // without changing this property. Missing supplied positions remain inferred.
  private lazy val explicitTypeArguments = mutable.Set.empty[VarSymbol]
  def markExplicitTypeArgument(symbol: VarSymbol): Unit =
    root.explicitTypeArguments += symbol
  def hasExplicitTypeArgument(symbol: VarSymbol): Bool =
    root.explicitTypeArguments(symbol) || source.exists(_.hasExplicitTypeArgument(symbol))
  private lazy val typeConstraints: Seen[(DeclaredType, ShapeKey, Ls[Marks])] =
    new Seen(inherited.map(_.typeConstraints))
  /** Whether this constraint is new; values are keyed like inference candidates.
    * Install each constraint edge before subscribing: callback parameter/result
    * flow can revisit it immediately. Distinct instantiations retain their marks.
    */
  def addTypeConstraint(tpe: DeclaredType, value: TermShape, marks: Ls[Marks]): Bool =
    typeConstraints.add((tpe, ShapeIdentity.key(value), marks))
  def hasTypeConstraint(tpe: DeclaredType, value: TermShape, marks: Ls[Marks]): Bool =
    typeConstraints((tpe, ShapeIdentity.key(value), marks))
  lazy val typeRelations: Seen[(ContextualType, ContextualType)] =
    new Seen(inherited.map(_.typeRelations))
  lazy val typeArgumentArityErrors: Seen[(Identity[TyApp], Int)] =
    new Seen(inherited.map(_.typeArgumentArityErrors))
  lazy val arrayIndexErrors: Seen[Identity[Term]] =
    new Seen(inherited.map(_.arrayIndexErrors))

private[semantics] final class TermShapeHost extends Host[TermShape]:
  def showDbg(using DebugPrinter): Str = "instance views"
  def publish(shape: TermShape)(using NewResolverState): Unit =
    if currentShapes.add(shape) then notifyShapeListeners(shape)
  def listen(listener: NewResolverState.Listener)(using NewResolverState): Unit =
    subscribeToShapes(listener)

private[semantics] final class TypeDependencyHost extends Host[Set[VarSymbol]]:
  def showDbg(using DebugPrinter): Str = "type dependencies"
  def publish(binders: Set[VarSymbol])(using NewResolverState): Unit =
    if currentShapes.add(binders) then notifyShapeListeners(binders)
  def listen(listener: ShapeListener[Set[VarSymbol]])(using NewResolverState): Unit =
    subscribeToShapes(listener)
