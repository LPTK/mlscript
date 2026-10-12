package hkmc2
package semantics

import hkmc2.utils.*, shorthands.*

/** Finite semantic identities used by both publication and resolver caches.
  * Shapes themselves are graph objects with reference equality. Reconstructed
  * immutable views compare only these keys; diagnostic evidence and mutable
  * inference hosts' contents never participate. Each shape caches its key.
  */
sealed abstract class ShapeKey extends ValueKey

private[semantics] object ShapeKey:
  final class Node(shape: Shape) extends ShapeKey:
    protected val keyComponents: Product = Tuple1(shape)
  final class Marked(base: ShapeKey, marks: SomeMarks) extends ShapeKey:
    protected val keyComponents: Product = (base, marks)
  final class Contextual(source: ShapeKey, instances: TypeSubstitution) extends ShapeKey:
    protected val keyComponents: Product = (source, instances)
  final class ClassValue(target: ClassValueTarget, parent: Opt[ShapeKey]) extends ShapeKey:
    protected val keyComponents: Product = (target, parent)
  final class Nominal(definition: Identity[ClassLikeDef], bindings: Map[VarSymbol, DeclaredType], parent: Opt[ShapeKey]) extends ShapeKey:
    protected val keyComponents: Product = (definition, bindings, parent)
  final class Callable(source: Term, params: NELs[DeclaredParams], result: Opt[DeclaredType],
      scheme: Opt[TypeScheme], supplied: Opt[Ls[DeclaredType]], declaration: Opt[Identity[TermDefinition]],
      asyncResult: Opt[AsyncResult]) extends ShapeKey:
    protected val keyComponents: Product = (source, params, result, scheme, supplied, declaration, asyncResult)
  final class Record(fields: Map[Str, DeclaredType]) extends ShapeKey:
    protected val keyComponents: Product = Tuple1(fields)
  final class Specialized(declaration: ShapeKey, arguments: Ls[DeclaredType], instances: TypeSubstitution) extends ShapeKey:
    protected val keyComponents: Product = (declaration, arguments, instances)
  final class Unknown(source: Term, fromPublicInterface: Bool) extends ShapeKey:
    protected val keyComponents: Product = (source, fromPublicInterface)
  final class Opaque(source: Term) extends ShapeKey:
    protected val keyComponents: Product = Tuple1(source)
  final class Rigid(parameter: VarSymbol, source: Term) extends ShapeKey:
    protected val keyComponents: Product = (parameter, source)
  final class Activated(value: ShapeKey, instances: TypeSubstitution) extends ShapeKey:
    protected val keyComponents: Product = (value, instances)
  object Dynamic extends ShapeKey:
    protected val keyComponents: Product = EmptyTuple
