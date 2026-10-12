package hkmc2
package semantics

import hkmc2.utils.*, shorthands.*
import codegen.Erasure

/** A type interpretation, separate from the value shapes of the same reference syntax.
  * Compound types retain links to their operands so forward aliases need not be expanded eagerly.
  */
sealed abstract class TypeShape extends ValueKey

object TypeShape:
  final class Nominal(val defn: ClassLikeDef) extends TypeShape, Extractable[ClassLikeDef]:
    def get: ClassLikeDef = defn
    protected val keyComponents: Product = Tuple1(new Identity(defn))
  object Nominal:
    def unapply(value: Nominal): Nominal = value
  final class Alias(val symbol: TypeAliasSymbol, val rhs: Opt[TypeResolution]) extends TypeShape, Extractable.Self:
    def _1: TypeAliasSymbol = symbol
    def _2: Opt[TypeResolution] = rhs
    protected val keyComponents: Product = (symbol, rhs)
  object Alias:
    def unapply(value: Alias): Alias = value
  final class Union(val left: TypeResolution, val right: TypeResolution) extends TypeShape, Extractable.Self:
    def _1: TypeResolution = left
    def _2: TypeResolution = right
    protected val keyComponents: Product = (left, right)
  object Union:
    def unapply(value: Union): Union = value
  final class Intersection(val left: TypeResolution, val right: TypeResolution) extends TypeShape, Extractable.Self:
    def _1: TypeResolution = left
    def _2: TypeResolution = right
    protected val keyComponents: Product = (left, right)
  object Intersection:
    def unapply(value: Intersection): Intersection = value
  // Negated interfaces remain opaque, but their dependencies must participate
  // in source validation, including the rejection of unguarded alias cycles.
  final class Negation(val base: TypeResolution) extends TypeShape, Extractable[TypeResolution]:
    def get: TypeResolution = base
    protected val keyComponents: Product = Tuple1(base)
  object Negation:
    def unapply(value: Negation): Negation = value
  // Substituted unions/intersections retain whole interpreted endpoints. Keeping
  // their lattice normal form prevents repeated Boolean substitutions from
  // nesting environments, without expanding bounds or changing endpoint marks.
  final class Combined(val formula: TypeFormula[DeclaredType]) extends TypeShape, Extractable[TypeFormula[DeclaredType]]:
    def get: TypeFormula[DeclaredType] = formula
    protected val keyComponents: Product = Tuple1(formula)
  object Combined:
    def unapply(value: Combined): Combined = value
  final class Tuple(val fields: Ls[TypeResolution]) extends TypeShape, Extractable[Ls[TypeResolution]]:
    def get: Ls[TypeResolution] = fields
    protected val keyComponents: Product = Tuple1(fields)
  object Tuple:
    def unapply(value: Tuple): Tuple = value
  final class Record(val source: Term.Rcd, val fields: Ls[(RcdField, TypeResolution)]) extends TypeShape, Extractable.Self:
    def _1: Term.Rcd = source
    def _2: Ls[(RcdField, TypeResolution)] = fields
    protected val keyComponents: Product = (source, fields.map((field, tpe) => (new Identity(field), tpe)))
  object Record:
    def unapply(value: Record): Record = value
  final class Function(val params: Term, val result: TypeResolution) extends TypeShape, Extractable.Self:
    def _1: Term = params
    def _2: TypeResolution = result
    protected val keyComponents: Product = (params, result)
  object Function:
    def unapply(value: Function): Function = value
  final class Polymorphic(val params: Ls[TypeQuantifier], val outer: Opt[VarSymbol], val body: TypeResolution) extends TypeShape, Extractable.Self:
    def _1: Ls[TypeQuantifier] = params
    def _2: Opt[VarSymbol] = outer
    def _3: TypeResolution = body
    protected val keyComponents: Product = (params, outer, body)
  object Polymorphic:
    def unapply(value: Polymorphic): Polymorphic = value
  final class Applied(val base: TypeResolution, val args: Ls[TypeResolution]) extends TypeShape, Extractable.Self:
    def _1: TypeResolution = base
    def _2: Ls[TypeResolution] = args
    protected val keyComponents: Product = (base, args)
  object Applied:
    def unapply(value: Applied): Applied = value
  final class Wildcard(val input: Opt[TypeResolution], val output: Opt[TypeResolution]) extends TypeShape, Extractable.Self:
    def _1: Opt[TypeResolution] = input
    def _2: Opt[TypeResolution] = output
    protected val keyComponents: Product = (input, output)
  object Wildcard:
    def unapply(value: Wildcard): Wildcard = value
  // Interpreted arguments retain both polarities in the argument's lexical environment.
  final class Argument(val parts: TypeArgument) extends TypeShape, Extractable[TypeArgument]:
    def get: TypeArgument = parts
    protected val keyComponents: Product = Tuple1(parts)
  object Argument:
    def unapply(value: Argument): Argument = value
  // Substitution selects one part before the type is used in further constraints.
  // The argument stays in its own lexical environment, including delayed parts.
  final class SelectedArgument(val argument: DeclaredType, val positive: Bool) extends TypeShape, Extractable.Self:
    def _1: DeclaredType = argument
    def _2: Bool = positive
    protected val keyComponents: Product = (argument, positive)
  object SelectedArgument:
    def unapply(value: SelectedArgument): SelectedArgument = value
  // A transported reference retains its context before any deferred component
  // is observed. The resolver flattens these nodes and normalizes their marks.
  final class Contextual(val reference: ContextualType) extends TypeShape, Extractable[ContextualType]:
    def get: ContextualType = reference
    protected val keyComponents: Product = Tuple1(reference)
  object Contextual:
    def unapply(value: Contextual): Contextual = value
  // The same third-party symbol can have different inference in two exporters.
  // Retain its originating host so importing a result needs no whole-state copy.
  final class Parameter(val symbol: VarSymbol, val host: Publisher.Data[ShapeEvent]) extends TypeShape, Extractable.Self:
    def _1: VarSymbol = symbol
    def _2: Publisher.Data[ShapeEvent] = host
    protected val keyComponents: Product = (symbol, host)
  object Parameter:
    def unapply(value: Parameter): Parameter = value
  // An omitted argument owns one source inference node. It is not a quantified
  // binder and is never instantiated at a call site; marks distinguish its flows.
  final class Hole(val host: Publisher.Data[TermShape]) extends TypeShape, Extractable[Publisher.Data[TermShape]]:
    def get: Publisher.Data[TermShape] = host
    protected val keyComponents: Product = Tuple1(host)
  object Hole:
    def unapply(value: Hole): Hole = value
  // Synthesized generic arguments retain inferred value shapes, for example
  // the element union of the Array supertype of a tuple. Singleton annotations
  // also retain their literal shape; no implementation is inspected.
  final class Inferred(val value: TermShape) extends TypeShape, Extractable[TermShape]:
    def get: TermShape = value
    protected val keyComponents: Product = Tuple1(ShapeIdentity.key(value))
  object Inferred:
    def unapply(value: Inferred): Inferred = value
  // An open type expression reached through a reference. Unlike Contextual,
  // its free binders still receive the observing declaration's substitution.
  // Qualified references retain the receiver's bindings and lexical path too.
  final class Reference(val base: TypeResolution, val marks: Ls[Marks], val bindings: Map[VarSymbol, DeclaredType], val instances: TypeSubstitution) extends TypeShape, Extractable.Self:
    def _1: TypeResolution = base
    def _2: Ls[Marks] = marks
    def _3: Map[VarSymbol, DeclaredType] = bindings
    def _4: TypeSubstitution = instances
    protected val keyComponents: Product = (base, marks, bindings, instances)
  object Reference:
    def unapply(value: Reference): Reference = value
  object Unit extends TypeShape:
    protected val keyComponents: Product = EmptyTuple
  object Dynamic extends TypeShape:
    protected val keyComponents: Product = EmptyTuple
  object Abstract extends TypeShape:
    protected val keyComponents: Product = EmptyTuple
  object Top extends TypeShape:
    protected val keyComponents: Product = EmptyTuple
  object Bottom extends TypeShape:
    protected val keyComponents: Product = EmptyTuple

/** Candidates are published during elaboration. Erasure reads the resulting graph; it
  * never performs lookup or resolves an alias by inspecting an elaborated definition.
  */
final class TypeResolution(val source: Term, report: Ls[(Message, Opt[Loc])] => Unit) extends Host[TypeShape]:
  private var reported = false
  def hasErrors: Bool = reported
  def showDbg(using DebugPrinter): Str = s"type of ${source.showDbg}"
  def publish(shape: TypeShape)(using ResolutionContext): Unit =
    if currentShapes.add(shape) then notifyShapeListeners(shape)
  def listen(listener: ShapeListener[TypeShape])(using ResolutionContext): Unit =
    subscribeToShapes(listener)
  def fail(messages: Ls[(Message, Opt[Loc])]): Unit = if !reported then
    reported = true
    report(messages)
  def validate(seen: Set[TypeResolution])(using Erasure): Unit = if !seen(this) then
    import TypeShape.*
    import Message.MessageContext
    val next = seen + this
    val ambiguousReceiver = source.withoutCaptures match
      case ref: Term.UnresolvedRef => ref.resolvedMembers.distinct.sizeCompare(1) > 0
      case sel: Term.NewSel => sel.hasAmbiguousClass
      case _ => false
    if shapes.isEmpty then fail(msg"This type has no resolved target" -> source.toLoc :: Nil)
    else if ambiguousReceiver || shapes.size > 1 then
      def declarations(resolution: TypeResolution, seen: Set[TypeResolution]): Ls[(Message, Opt[Loc])] =
        if seen(resolution) then Nil else resolution.shapes.toList.flatMap:
          case Nominal(defn) => msg"candidate: ${defn.sym.describeKind}" -> defn.toLoc :: Nil
          case Alias(symbol, _) => msg"candidate: ${symbol.describeKind}" -> symbol.toLoc :: Nil
          case Reference(base, _, _, _) => declarations(base, seen + resolution)
          case _ => Nil
      val candidates = source.withoutCaptures match
        case ref: Term.UnresolvedRef => ref.resolvedMembers.distinct.map: (prefix, member) =>
          msg"candidate: ${member.describe}" -> member.toLoc
        case _ => declarations(this, Set.empty).distinct
      fail(msg"This type is ambiguous, as it has multiple resolved targets" -> source.toLoc :: candidates)
    shapes.foreachGrowing:
      case Alias(_, rhs) => rhs.foreach(_.validate(next))
      case Reference(base, _, _, _) => base.validate(next)
      case Applied(base, args) =>
        base.validate(next)
        args.foreach(_.validate(next))
        def checkArity(base: TypeResolution, seen: Set[TypeResolution]): Unit = if !seen(base) then
          def check(name: Str, count: Int, loc: Opt[Loc]): Unit = if args.length > count then
            fail(msg"Type '$name' accepts at most $count type ${"argument".pluralized(count)}, but got ${args.length}." ->
              source.toLoc :: (msg"The type parameters are declared here." -> loc) :: Nil)
          base.shapes.toList match
            case Nominal(defn) :: Nil => check(defn.sym.nme, defn.tparams.length, defn.toLoc)
            case Alias(symbol, _) :: Nil => symbol.defn.foreach(d => check(symbol.nme, d.tparams.length, d.toLoc))
            case Reference(inner, _, _, _) :: Nil => checkArity(inner, seen + base)
            case _ => ()
        checkArity(base, Set.empty)
      case Wildcard(input, output) => input.foreach(_.validate(next)); output.foreach(_.validate(next))
      case Argument(parts) => parts.input.resolution.validate(next); parts.output.resolution.validate(next)
      case SelectedArgument(argument, _) => argument.resolution.validate(next)
      case Contextual(reference) => reference.tpe.resolution.validate(next)
      case Function(_, result) => result.validate(next)
      case Polymorphic(params, _, body) =>
        params.foreach: param =>
          param.lower.foreach(_.validate(next))
          param.upper.foreach(_.validate(next))
        body.validate(next)
      case Tuple(fields) => fields.foreach(_.validate(next))
      case Record(_, fields) => fields.foreach(_._2.validate(next))
      case Union(left, right) => left.validate(next); right.validate(next)
      case Intersection(left, right) => left.validate(next); right.validate(next)
      case Negation(base) => base.validate(next)
      case Combined(formula) => formula.orderedAtoms.foreach(_.resolution.validate(next))
      case _ => ()

/** A type with its lexical type-parameter bindings. These bindings describe declared
  * interfaces, not constructor arguments or value-flow capture paths.
  * `positive` interprets substitutions in the source expression; it is not the
  * direction of a constraint subsequently applied to the interpreted type.
  */
final class DeclaredType(val resolution: TypeResolution, val bindings: Map[VarSymbol, DeclaredType],
    val instances: TypeSubstitution, val positive: Bool)(val origin: Opt[TypeInterfaceReason]) extends ValueKey:
  protected val keyComponents: Product = (resolution, bindings, instances, positive)
  /** Diagnostic evidence is not part of type equality or cache keys. Retain one
    * witness when normalizing/substituting the type; do not accumulate paths.
    * A use's witness takes precedence over evidence in a shared cached reference.
    */
  def withOrigin(witness: Opt[TypeInterfaceReason]): DeclaredType =
    DeclaredType(resolution, bindings, instances, positive)(witness.orElse(origin))

  /** Instantiation changes references to source binders, never expands their bounds.
    * A reference already interpreted in another call retains that interpretation.
    * The finite map contains original binders and canonical site instances only.
    */
  def instantiate(substitution: TypeSubstitution): DeclaredType =
    withInstances(substitution.withOverrides(instances))

  def withInstances(substitution: TypeSubstitution): DeclaredType =
    if substitution == instances then this else DeclaredType(resolution, bindings, substitution, positive)(origin)
  def withPolarity(polarity: Bool): DeclaredType =
    if polarity == positive then this else DeclaredType(resolution, bindings, instances, polarity)(origin)
  def withoutBinders(symbols: Iterable[VarSymbol]): DeclaredType =
    DeclaredType(resolution, bindings -- symbols, instances.without(symbols), positive)(origin)
  def withoutOrigin: DeclaredType =
    if origin.isEmpty then this else DeclaredType(resolution, bindings, instances, positive)(N)

/** A type reference observed from a common comparison scope. The marks belong
  * to this endpoint: reversing a constraint swaps endpoints, not an expanded
  * candidate's already-normalized path.
  */
final class ContextualType(val tpe: DeclaredType, val marks: Ls[Marks]) extends ValueKey:
  protected val keyComponents: Product = (tpe, marks)

/** An unqualified argument is interpreted separately in the two polarities;
  * these parts coincide only when substitution gives the same type in both.
  * Missing wildcard parts are Nothing on input and Any on output, never holes.
  */
final class TypeArgument(val input: DeclaredType, val output: DeclaredType) extends ValueKey:
  protected val keyComponents: Product = (input, output)

/** A quantified binder belongs to the source scheme; its bounds retain graph links
  * so mutually dependent bounds do not require expanding or copying their types.
  */
final class TypeQuantifier(val parameter: TypeShape.Parameter,
    val lower: Opt[TypeResolution], val upper: Opt[TypeResolution]) extends ValueKey:
  protected val keyComponents: Product = (parameter, lower, upper)

/** A callable's binder and bounds interpreted in the surrounding lexical bindings. */
final class DeclaredTypeParameter(val parameter: TypeShape.Parameter,
    val lower: Opt[DeclaredType], val upper: Opt[DeclaredType]) extends ValueKey:
  protected val keyComponents: Product = (parameter, lower, upper)

/** The owner is the original declaration, or a quantified annotation for an
  * anonymous callable. Applied and imported views retain this identity.
  */
final class TypeScheme(val owner: AnyDefinitionSymbol | TypeResolution, val parameters: Ls[DeclaredTypeParameter]) extends ValueKey:
  protected val keyComponents: Product = (owner, parameters)
