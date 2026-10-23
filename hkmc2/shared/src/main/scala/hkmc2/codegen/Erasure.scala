package hkmc2
package codegen

import scala.collection.mutable

import hkmc2.utils.*, shorthands.*
import semantics.*
import semantics.Elaborator.{Ctx, State}
import semantics.Term.*
import hkmc2.Message.MessageContext

/** The capability to inspect completed resolution. Created only after elaboration/resolution;
  * executable lowering additionally requires this instance's whole-program pass to have finished.
  *
  * The representations this pass infers from resolution's observations are as binding as declared ones:
  * lowering reports a value whose representation is unrelated to its slot's, or a slot whose values have
  * no common representation, as a compilation error (see Runtime Representations in `doc/reference.md`).
  */
final class Erasure private (using Config, Ctx, State)(using Raise):
  private given Erasure = this
  private var completed: Opt[Statement] = N
  private val valueTypes = mutable.Map.empty[TermShape, Opt[ErasedValueType]]
  private val bodyResults = mutable.Map.empty[TermSymbol, Opt[ErasedValueType]]
  private var overrideEdges: Ls[(TermSymbol, TermSymbol)] = Nil

  /** Completed source-layout edges, including declarations without executable IR bodies. */
  def validatedOverrideEdges: Ls[(TermSymbol, TermSymbol)] =
    assert(completed.nonEmpty, "Override edges are available only after completed erasure")
    overrideEdges

  def requireCompleted(statement: Statement): Unit =
    assert(completed.exists(_ is statement), "Lowering requires completed erasure of this program")

  /** Async definitions expose a promise and generators an iterator, but their original
    * bodies produce the payload (of the promise, or of the generator's final step).
    * Lowering must coerce explicit and implicit returns before they are wrapped.
    */
  def bodyResultType(td: TermDefinition): Opt[ErasedValueType] =
    bodyResults.getOrElse(td.tsym, td.tsym.declaredResultType)

  private def valueType(shape: TermShape): Opt[ErasedValueType] = valueTypes.getOrElseUpdate(shape, shape match
    case MarkedShape(value, _) => valueType(value)
    case ContextualShape(value, _) => valueType(value)
    case SpecializedShape(value, _, _) => valueType(value)
    case nominal: NominalInstanceView => S(nominalType(nominal.defn))
    case base: BaseShape => S(nominalType(base.defn))
    case construction: NewShape => S(
      if construction.isSaturated then ErasedType.ValueLike(S(false), construction.cls)
      else ErasedType.Function(S(false)))
    case application: AppShape => S(
      if !application.isSaturated then ErasedType.Function(S(false))
      else application.applicationHead._1 match
        case definition: DefnShape => definition.clsDef.fold[ErasedValueType](ErasedType.Unknown)(nominalType)
        case _ => ErasedType.Unknown)
    case definition: DefnShape => S(definition.defn match
      case module: ModuleOrObjectDef => nominalType(module)
      case _: TermDefinition => ErasedType.Function(S(false))
      // A class value denotes the constructor object, not an instance of that class.
      case _ => ErasedType.Unknown)
    case intro: IntroShape => intro.trm match
      case _: Lam => S(ErasedType.Function(S(false)))
      case UnitVal() => S(ErasedType.Unit)
      case Lit(_: syntax.Tree.IntLit) => S(ErasedType.Int)
      case Lit(_: syntax.Tree.DecLit) => S(ErasedType.Num)
      case Lit(_: syntax.Tree.StrLit) => S(ErasedType.Str)
      case Lit(_: syntax.Tree.BoolLit) => S(ErasedType.Bool)
      // Undefined places no constraint on the slot's representation. An undefined-only
      // slot still receives the ordinary default representation and keeps it across consumers.
      case Lit(syntax.Tree.UnitLit(false)) => N
      case Lit(syntax.Tree.UnitLit(true)) => S(ErasedType.Unknown)
    case _: CallableTypeShape => S(ErasedType.Function(S(false)))
    case _: TupleShape => S(ErasedType.Array)
    // An intersection describes one value through several interfaces, not alternative values.
    // Keep the same conservative representation as an intersection in a declared signature.
    case _: IntersectionView => S(ErasedType.Unknown)
    case _: (RecordShape | RecordTypeShape | DynShape | UnknownValueShape | OpaqueTypeShape | RigidTypeShape | ErrShape) =>
      S(ErasedType.Unknown)
    case _: InstanceShape =>
      softAssert(false, "Erasure inputs must interpret contextual instance types before completion")
      S(ErasedType.Unknown)
  )

  private def nominalType(definition: ClassLikeDef): ErasedValueType = definition.sym match
    case symbol: (ClassSymbol | ModuleOrObjectSymbol) => ErasedType.ValueLike(S(false), symbol)
    case _ => ErasedType.Unknown

  private def inferredType(symbol: Symbol): Opt[ErasedValueType] =
    if !config.language.useNewResolution then N
    else summon[State].newResolverState.erasureInputs.shapes(symbol).flatMap(valueType) match
      case Nil => N
      // Unknown is a real candidate, not the identity of this join: in particular,
      // combining it with an unboxed primitive must preserve incompatibility.
      case types => S(ErasedType.Union.mk(types))

  /** Erase an interpretation registered during elaboration, without installing new listeners. */
  private def erase(resolution: TypeResolution, seen: Set[TypeResolution]): ErasedValueType =
    import TypeShape.*
    if seen(resolution) || resolution.hasErrors then ErasedType.Unknown
    else
      val next = seen + resolution
      resolution.shapes.toList match
        case Nominal(defn) :: Nil => defn.sym match
          case symbol: (ClassSymbol | ModuleOrObjectSymbol) => ErasedType.ValueLike(S(false), symbol)
          case _ => ErasedType.Unknown
        case Alias(_, rhs) :: Nil => rhs.fold(ErasedType.Unknown)(erase(_, next))
        case Union(left, right) :: Nil => ErasedType.union(erase(left, next), erase(right, next))
        case Reference(base, _, _, _) :: Nil => erase(base, next)
        case Applied(base, _) :: Nil => erase(base, next)
        case Function(_, _) :: Nil => ErasedType.Function(S(false))
        case Polymorphic(_, _, body) :: Nil => erase(body, next)
        case Unit :: Nil => ErasedType.Unit
        case _ => ErasedType.Unknown

  private[codegen] def eraseResolved(resolution: TypeResolution): ErasedValueType = erase(resolution, Set.empty)

  private[codegen] def eraseSignature(sign: Term): Opt[ErasedValueType] =
    if config.language.useNewResolution then
      assert(sign.typeInterpretation.isDefined, "Signature was not registered during elaboration")
      S(erase(sign.typeInterpretation.get, Set.empty))
    else ErasedType.eraseSign(sign)

  private def declaredType(sign: Opt[Term], modulefulness: Modulefulness): Opt[ErasedValueType] =
    modulefulness.msym match
      case S(msym) => S(ErasedType.ValueLike(rsc = S(false), msym))
      case N => sign.flatMap(eraseSignature)

  /** An override without a result annotation implements the result of the member it overrides as if it declared it:
    * lowering coerces the values of its body to the inherited representation, with checked casts where resolution
    * observes wider values (as when an override computes its result with dynamically typed operations, or when its
    * body never returns normally). A representation within the inherited one is kept, being more precise. An unrelated
    * one is kept as well, for `OverrideChecks` to report: such values cannot be coerced to the inherited result.
    */
  private def overrideResultType(td: TermDefinition, observed: Opt[ErasedValueType]): Opt[ErasedValueType] =
    overrideEdges.collectFirst { case (child, base) if (child is td.tsym) && base.isErased => base } match
      case N => observed
      case S(base) =>
        val inherited = base.declaredResultType
        observed match
          case N => inherited
          case S(tpe) =>
            ErasedType.needsCast(tpe.canonicalize, inherited.getOrElse(ErasedType.Unknown).canonicalize) match
              case S(false) => observed
              case S(true) => inherited
              case N => observed

  private def definitionType(td: TermDefinition): Opt[ErasedType] =
    val declared = Annot.declareModifierOf(td.annotations).isDefined
    // A declared function with no written parameters obtains its calling convention from its arrows.
    // An ordinary paramless function instead returns the value denoted by the entire signature.
    val sigShape =
      if (td.k is syntax.Fun) && td.params.isEmpty && declared then
        OverrideLayout.signature(td).toOption.flatMap: signature =>
          // A rest tuple has no fixed physical arity. Preserve any preceding fixed lists,
          // whose result remains a callable, and use the same normalized aliases as overrides.
          val fixed = signature.params.takeWhile(_.variadic.isEmpty)
          if fixed.isEmpty then N
          else S((fixed.map(_.params.map(_.representation)),
            if fixed.length < signature.params.length then S(ErasedType.Function(S(false))) else signature.result))
      else N
    def fullResult(res: TypeResolution, count: Int, seen: Set[TypeResolution]): ErasedValueType =
      if seen(res) then ErasedType.Unknown
      else if count == 0 then erase(res, Set.empty)
      else res.shapes.toList match
        case TypeShape.Alias(_, S(rhs)) :: Nil => fullResult(rhs, count, seen + res)
        case TypeShape.Reference(base, _, _, _) :: Nil => fullResult(base, count, seen + res)
        case TypeShape.Applied(base, _) :: Nil => fullResult(base, count, seen + res)
        case TypeShape.Polymorphic(_, _, body) :: Nil => fullResult(body, count, seen + res)
        case TypeShape.Function(_, ret) :: Nil => fullResult(ret, count - 1, seen + res)
        case _ => ErasedType.Unknown
    val resultType =
      if config.language.useNewResolution && td.sign.nonEmpty && (td.k is syntax.Fun)
          && !td.flags.hasResultAnnotation && td.params.nonEmpty && !td.modulefulness.isModuleful
      then S(fullResult(td.sign.get.typeInterpretation.get, td.params.length, Set.empty))
      else sigShape.fold(declaredType(td.resultSignature, td.modulefulness))(_._2).orElse:
        val observed = inferredType(td.tsym)
        // An async/generator override's inherited callable result describes its wrapper,
        // not the payload returned by this body. Check that wrapper in `OverrideChecks` below.
        if config.language.useNewResolution && td.resultWrapperAnnotation.nonEmpty then observed
        else overrideResultType(td, observed)
    bodyResults(td.tsym) = resultType
    // The body produces the payload; callers receive the wrapper object instead.
    // Resolution gives calls of such functions the same wrapper shapes.
    val callableResult =
      if !config.language.useNewResolution then resultType
      else td.resultWrapperAnnotation match
        case S(_: Annot.Async) => S(ErasedType.ValueLike(S(false), summon[Ctx].builtins.Promise))
        case S(_: Annot.Generator) => S(ErasedType.ValueLike(S(false), summon[Ctx].builtins.Iterator))
        case N => resultType
    td.k match
      case syntax.Fun =>
        val paramLists = sigShape match
          case S((ps, _)) => ps
          case N => td.params.map(_.params.map(_.sym.erasedType))
        // Block-level nullary functions take an implicit empty list and references auto-invoke them.
        // Member getters and global declarations denote their result directly.
        val physicalParamLists =
          if paramLists.isEmpty && td.owner.isEmpty && !declared then Nil :: Nil else paramLists
        if physicalParamLists.isEmpty then callableResult
        else S(ErasedType.FuncRef(rsc = S(false), physicalParamLists, callableResult))
      case _: syntax.Val => resultType
      case syntax.RecordField => if config.language.useNewResolution then resultType else N
      case _ => N

  private def run(root: Statement): Unit =
    val declarations = new ErasureDeclarations(root)
    val statements = declarations.statements
    val parameters = declarations.parameters.values
    val parentConstructions = mutable.Set.empty[Identity[Statement]]
    def parentHead(term: Term): Unit = if parentConstructions.add(Identity(term)) then term match
      // Legacy resolution can expand a parent reference to an implicit constructor call.
      // Follow only the class head; constructions in argument expressions are real allocations.
      case ref: Resolvable if ref.expanded isnt ref => parentHead(ref.expanded)
      case New(cls, _, _) => parentHead(cls)
      case App(lhs, _) => parentHead(lhs)
      case TyApp(lhs, _) => parentHead(lhs)
      case _ => ()
    statements.foreach:
      case cls: ClassLikeDef => cls.ext.foreach(parentHead)
      case _ => ()

    def parentClasses(parent: New): Ls[ClassLikeDef] =
      (parent.cls.resolvedSym.flatMap(_.asClsOrMod).flatMap(_.defn).toList :::
        ClassValueShape.targetsOf(parent).map(ClassValueShape.definitionOf)).distinct
    def parentClass(parent: New): Opt[ClassLikeDef] = parentClasses(parent) match
      case cls :: Nil => S(cls)
      case _ => N

    // No erased representation is read until every interpretation has been validated and every
    // nominal parent header has been published, including forward and external declarations.
    val validatedTypes = mutable.Set.empty[TypeResolution]
    statements.foreach:
      case term: Term => term.typeInterpretation.foreach(_.validate(validatedTypes))
      case _ => ()
    statements.foreach:
      case cls: ClassLikeDef =>
        cls.ext.foreach: extension =>
          parentClasses(extension).foreach(Inheritance.validateParent(cls, _, extension))
        cls.sym match
          case sym: ClassLikeSymbol if sym.irClassHeader.isEmpty =>
            val parent = cls.ext match
              case N => ClassHeader.Parent.Root
              case S(parent) => parentClass(parent).flatMap(_.sym.asClsOrMod)
                .fold(ClassHeader.Parent.Unknown)(ClassHeader.Parent.Known(_))
            val termCompanion = if cls.hasDeclareModifier.isDefined then N else cls.bsym.asTrm
            sym.irClassHeader = S(ClassHeader(parent, N, termCompanion))
          case _ => ()
      case _ => ()

    // Public members replace inherited runtime keys; private members retain their declaration identity.
    // A subclass cannot implement a private declaration by introducing the same name.
    type ImplementationKey = Either[TermSymbol, MemberKey]
    // Definitions are keyed by identity: as case classes, they would otherwise
    // be hashed and compared through their entire bodies on every lookup.
    val effectiveMembers = mutable.Map.empty[Identity[ClassLikeDef], Map[ImplementationKey, TermSymbol]]
    def checkConstruction(term: Term & PossiblyErroneous, cls: ClassDef): Unit =
      if Inheritance.hasModifier(cls, syntax.Keyword.`abstract`) then
        term.isErroneous = true
        raise(ErrorReport(
          msg"Cannot instantiate abstract class '${cls.sym.nme}'" -> term.toLoc ::
            (msg"Abstract class defined here" -> cls.toLoc) :: Nil, source = Diagnostic.Source.Compilation))
    def members(cls: ClassLikeDef, visiting: Set[Identity[ClassLikeDef]]): Map[ImplementationKey, TermSymbol] =
      effectiveMembers.getOrElseUpdate(Identity(cls),
        if visiting(Identity(cls)) then
          raise(ErrorReport(msg"Inheritance cycle involving '${cls.sym.nme}'" -> cls.toLoc :: Nil,
            source = Diagnostic.Source.Compilation))
          Map.empty
        else
          val inherited = cls.ext.flatMap(parentClass)
            .fold(Map.empty[ImplementationKey, TermSymbol])(members(_, visiting + Identity(cls)))
          inherited ++ cls.body.members.toList.flatMap: (name, member) =>
            member.asTrm.map: symbol =>
              val key: ImplementationKey = if symbol.isPrivate then Left(symbol) else Right(MemberKey.symbol(member).getOrElse(name))
              key -> symbol
      )
    statements.foreach:
      case td: TermDefinition => Inheritance.validateMember(td)
      case cls: ClassLikeDef if !Inheritance.isExternal(cls) &&
          !Inheritance.hasModifier(cls, syntax.Keyword.`abstract`) =>
        val missing = members(cls, Set.empty).values.toList
          .distinct.filter(_.defn.exists(Inheritance.isAbstract))
          .sortBy(_.nme)
        if missing.nonEmpty then raise(ErrorReport(
          msg"${cls.sym.describeKind.capitalize} '${cls.sym.nme}' has unimplemented members" -> cls.toLoc ::
            missing.map(sym => msg"Member '${sym.nme}' requires an implementation" -> sym.toLoc),
          source = Diagnostic.Source.Compilation))
      case nw: New if nw.rft.isEmpty && !parentConstructions(Identity(nw)) =>
        parentClass(nw).collect { case cls: ClassDef => cls }.foreach(checkConstruction(nw, _))
      case app: App if !parentConstructions(Identity(app)) =>
        // Constructor functions can flow through variables and parameters; their call shapes
        // retain the declaration even when the callee has no single resolved symbol.
        def constructed(event: ShapeEvent): Ls[ClassDef] = event match
          case ActivatedShapeEvent(value, _) => constructed(value)
          case MarkedShape(value, _) => constructed(value)
          case ContextualShape(value, _) => constructed(value)
          case shape: AppShape if shape.src is app => shape.applicationHead._1 match
            case definition: DefnShape => definition.defn match
              case td: TermDefinition => td.tsym match
                case ctor: ClassCtorSymbol => ctor.associatedCls.defn.toList
                case _ => Nil
              case cls: ClassDef => cls :: Nil
              case _ => Nil
            case _ => Nil
          case _ => Nil
        val direct = app.lhs.resolvedSym.toList.flatMap:
          case ctor: ClassCtorSymbol => ctor.associatedCls.defn.toList
          case _ => Nil
        (direct ::: app.shapes.toList.flatMap(constructed)).distinct.foreach(checkConstruction(app, _))
      case _ => ()

    // Establish source argument correspondence before inheriting representations. Equal leading
    // counts alone do not suffice: optional and trailing parameters can redistribute the inputs.
    val overrideChecks = new OverrideChecks(statements.collect { case td: TermDefinition => td }.toList)
    overrideEdges = overrideChecks.validatedEdges
    val inheritedParams = overrideChecks.inheritedParameters
    def eraseParameter(p: Param, visiting: Set[VarSymbol]): Unit = if !p.sym.isErased then
      p.sym.erasedType = declaredType(p.sign, p.modulefulness).orElse:
        inheritedParams.get(p.sym) match
          case S(inherited) if !visiting(p.sym) =>
            inherited.flatMap(_.parameter).foreach: param =>
              if declarations.parameters.contains(param.sym) then eraseParameter(param, visiting + p.sym)
            val types = inherited.map: input =>
              input.parameter match
                case S(param) =>
                  if param.sym.isErased then param.sym.erasedType.getOrElse(ErasedType.Unknown) else ErasedType.Unknown
                case N => input.representation.getOrElse(ErasedType.Unknown)
            // Making a required slot optional additionally admits null on direct subclass calls.
            // Its inherited argument channel is unchanged for calls through the base interface.
            val defaults = if p.flags.opt && inherited.exists(!_.flags.opt) then ErasedType.Unknown :: Nil else Nil
            S(ErasedType.Union.mk(types ::: defaults))
          case _ => inferredType(p.sym)
    parameters.foreach: p =>
      eraseParameter(p, Set.empty)
      // Public fields have a BlockMemberSymbol; private/auxiliary constructor fields have a TermSymbol.
      // Their source signatures belong to the parameter, not to the synthesized field definition.
      val field = p.fldSym.flatMap:
        case sym: TermSymbol => S(sym)
        case sym: BlockMemberSymbol => sym.tsym
        case _ => N
      field.foreach: sym =>
        if !sym.isErased then sym.erasedType =
          if p.flags.mut then declaredType(p.sign, p.modulefulness).orElse(inferredType(sym))
          else p.sym.erasedType
    val observed =
      if config.language.useNewResolution then summon[State].newResolverState.erasureInputs.symbols
      else Nil
    // Constructor companions have no source body. Their physical argument lists
    // are the class's lists, and a saturated call always produces its instance.
    statements.foreach:
      case cls: ClassLikeDef => cls.ctorSym.foreach: symbol =>
        if !symbol.isErased then symbol.erasedType =
          if config.language.useNewResolution then S(ErasedType.FuncRef(S(false),
            (cls.paramsOpt.toList ::: cls.auxParams).map(_.params.map(_.sym.erasedType)), S(nominalType(cls))))
          else N
      case _ => ()
    val definitions = statements.collect { case td: TermDefinition => td } ++ observed.collect {
      case sym: TermSymbol => sym.defn }.flatten
    // A handler's compiled declaration omits its resumption parameter list;
    // retain the traversed declaration instead of recovering the original from its symbol.
    // An override's result can be the inherited one (see `overrideResultType`), so the members a definition
    // overrides are erased first. Overriding edges are acyclic, but erroneous inheritance cycles must not diverge.
    val definitionsBySymbol = definitions.distinctBy(_.tsym).map(td => td.tsym -> td).toMap
    def eraseDefinition(td: TermDefinition, visiting: Set[TermSymbol]): Unit =
      if !td.tsym.isErased && !visiting(td.tsym) then
        td.tsym.overriddenMembers.flatMap(definitionsBySymbol.get).foreach(eraseDefinition(_, visiting + td.tsym))
        td.tsym.erasedType = definitionType(td)
    definitions.distinctBy(_.tsym).foreach(eraseDefinition(_, Set.empty))
    declarations.variables.foreach:
      case sym: VarSymbol if !sym.isErased => sym.erasedType = inferredType(sym)
      case sym: TermSymbol if !sym.isErased => sym.erasedType = inferredType(sym)
      // A temporary's erased type is populated at most once (see TempSymbol); without inferred inputs, it stays
      // unknown, as it was before erasure.
      case sym: TempSymbol if sym.erasedType.isEmpty => inferredType(sym).foreach(sym.populateErasedType(_))
      case _ => ()
    // These checks compare erased signatures, so they run once every definition of the program is erased.
    overrideChecks.checkRepresentations()
    statements.foreach:
      case td: TermDefinition =>
        checkExposedOpenMember(td, declarations)
        checkExposedMutableField(td)
      case _ => ()
    completed = S(root)

  /** Subclasses in other compilation units implement an open member with the representations of its erased signature,
    * which therefore must not depend on what this compilation unit happens to pass to the member or return from it.
    * Interface exposure feeds values of unknown shape to the unannotated parameters of members reachable from the
    * unit's interface (see InterfaceExposure); an open member receiving them must annotate its parameters and result.
    * Exposure is not observed for a member whose parameters are all annotated, or which has none: overrides in other
    * compilation units are then still checked against its erased signature by `OverrideChecks`.
    */
  private def checkExposedOpenMember(td: TermDefinition, declarations: ErasureDeclarations): Unit =
    if config.language.useNewResolution && (td.k is syntax.Fun) && Inheritance.isOpen(td) && !Inheritance.isExternal(td) then
      val params = td.params.flatMap(_.allParams)
      def exposed(p: Param): Bool = declarations.parameters.contains(p.sym) &&
        summon[State].newResolverState.erasureInputs.shapes(p.sym).exists: shape =>
          shape.applicationHead._1 match
            case unknown: UnknownValueShape => unknown.fromPublicInterface
            case _ => false
      if params.exists(exposed) then
        val missing = params.filter(_.sign.isEmpty).map(p => msg"Parameter '${p.sym.nme}' has no type annotation" -> p.toLoc)
          ::: Option.when(td.resultSignature.isEmpty)(msg"Its result has no type annotation" -> td.tsym.toLoc).toList
        if missing.nonEmpty then raise(ErrorReport(
          (msg"Open member '${td.tsym.nme}' is exposed to other compilation units, which can override it; annotate the types of its parameters and result" -> td.tsym.toLoc)
            :: missing,
          source = Diagnostic.Source.Compilation))

  /** Other compilation units assign values to a mutable field with the representation of its erased type, which
    * therefore must not depend on the values that this compilation unit happens to assign to the field. Interface
    * exposure assigns a value of unknown shape referring to the field itself to the mutable fields reachable from the
    * unit's interface (see InterfaceExposure); such a field must declare its type. Fields that merely receive unknown
    * values from this unit's own exposed parameters do not need to: their representation is already the unknown one.
    * Record fields cannot declare types; their exposed representation is the unknown one.
    */
  private def checkExposedMutableField(td: TermDefinition): Unit =
    // A constructor parameter declares the type of the field it defines.
    val declared = td.tsym.decl match
      case S(p: Param) => p.sign.isDefined || p.modulefulness.isModuleful
      case _ => td.sign.isDefined || td.modulefulness.isModuleful
    val inputs = summon[State].newResolverState.erasureInputs
    if config.language.useNewResolution && (td.k is syntax.MutVal) && !declared && !Inheritance.isExternal(td)
        && inputs.isPrepared(td.tsym) then
      val exposure = inputs.shapes(td.tsym).iterator.map(_.applicationHead._1).collectFirst:
        case unknown: UnknownValueShape if unknown.fromPublicInterface && (unknown.source match
          case ref: MemberRef => ref.sym is td.bsym
          case _ => false) => unknown
      exposure.foreach: unknown =>
        raise(ErrorReport(unknown.provenance.diagnostic(
          msg"Mutable field '${td.tsym.nme}' is exposed to other compilation units, which can assign to it; annotate its type",
          td.tsym.toLoc), source = Diagnostic.Source.Compilation))

object Erasure:
  /** Prelude declarations use the same pass even though they have no executable program. */
  def apply(root: Statement)(using Config, Ctx, State)(using Raise): Erasure =
    val erasure = new Erasure
    erasure.run(root)
    erasure
