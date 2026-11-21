NOTE: This document was written by Codex Astra and has not been deeply reviewed;
it is not meant to be official documentation and
is in fact likely to contain parts that are unintelligible to readers who lack sufficient context.


# Deferred resolution design work

This reference records confirmed implementation gaps and deferred design work.
Current contracts are in [instance types and parameter constraints](new-resolution-type-value-flow.md);
remaining suite ports are in the [migration worklist](new-resolution-suite-migration.md).

## Upper-bound interfaces

This interface and checking-witness redesign is deferred future work.

Instantiation installs `lower <: instance <: upper` with the complete binder
substitution, after recording explicit arguments. This covers callables and by-name
invocations; captured enclosing binders also specialize the bounds. Lower bounds
contribute inference candidates, and upper relations propagate obligations through
later candidates. Dependent and recursive bounds share the existing relation graph.

Checking and observation gaps remain. An otherwise unconstrained result of
`[A extends Item] -> () -> A` does not expose `Item`'s members. A separately signed
implementation of `[A extends Item] -> A -> Int` cannot use that guaranteed
interface either. Installing an upper constraint does not give the parameter's
candidate host an observable shape. A recursive by-name getter with a lower bound
on a class parameter can also leak that parameter's abstract checking candidate
through inferred body constraints into a declared receiver. The same declared
receiver works when the body contributes no recursive checking edge.

Do not fix this by publishing the upper bound as an additional lower candidate.
For `[A extends Base] -> A -> A`, inference from a `Child` input must still permit
`Child`-only operations on the result; a second `Base` candidate would incorrectly
forbid them. Conversely, a generic implementation must work for every permitted
`A`, and cannot use a lower bound's members as its checking interface.

A design must distinguish a parameter's inferred candidates, its guaranteed upper
interface, and its rigid checking witness. It must specify how observation uses
those guarantees with delayed bounds and explicit arguments, without mixing the
checking witness into a real call or losing scope marks. Regression and precision
controls: `newres/QuantifiedBounds.mls`.

## Receiver reconstruction

```mlscript
class Box[T](val item: T) with
  fun copy() = new Box[T](item)
```

Reconstruction needs to retain the old receiver's view of `T` separately from the
new constructor's view. Distinct receiver calls currently lose the returned field's
interface. The constructor-value form `Box[T](item)` has the same precision gap.
The unannotated control, `class Box(val item)` with `copy() = new Box(item)`, mixes
field candidates from distinct receivers. This therefore affects ordinary value
inference as well as explicit type parameters.

A correction must preserve both receiver and new-allocation contexts using the
ordinary marks algebra. Correcting only a binder substitution does not establish
receiver separation. Regressions: `newres/ConstructorInstances.mls`.

## Members read through written types

A selection whose receiver has a written class type reads a member that leaves types
unwritten through its implementation, for
[all the instances](new-resolution-design.md#members-read-through-a-written-type)
that the receiver can be:

```mlscript
class Box(val item)
private fun read(x: Box) = x.item
```

`read` observes the arguments of every `Box(...)` call in the compilation unit, including
those of the boxes that never reach `x`. A more precise read would use the written type
for the lookup only, and follow the flow of each actual receiver for the values of the
member, as a selection with an inferred receiver does. A `Base` annotation must still
not expose `Child`-only members, the written portions of a member must keep their written
types, and a receiver of unknown shape must keep the read for all instances.

A constructor pattern that tests an input of unknown shape still reads the fields of the
tested class through their declared interface: a field without a written type is unknown
there. Reading its implementation requires the path of the input, which the interface
located at the pattern does not have.

Regressions: `slop/strictres/DeclaredReceiverMembers.mls`, `newres/DeclaredTypes.mls`,
and `PartialSignatures.mls`.

## Omitted-argument contexts

Missing generic arguments are ordinary inference holes. Their current substitution
can lose caller separation, even without recursion:

```mlscript
class First(val first: Int)
class Second(val second: Int)
class Pair[A, B](val value: [A, B])
private fun second(pair: Pair[Int]) = pair.value.1
[second(Pair([0, First(1)])).first, second(Pair([0, Second(2)])).second]
```

Both results receive both candidates and produce missing-member diagnostics.
Removing the parameter annotation avoids this template-substitution path and
preserves ordinary argument flow. Related cases use a shared alias-body omission
or a mutable `Array` annotation, with and without recursion.

The hole belongs to the annotation inside `second`. Following the captured `Pair`
template rebases its argument outward with a wildcard exit, then projects it back
with a wildcard entry. Applied to incoming bounds, the exit consumes the call's
identified entry; re-entry cannot restore that ID. This is the specified marks
behavior, not permission to cancel those operations on references.

A possible representation separates the template endpoint from the supplied
argument environment. Following a formal would use the argument's own endpoint;
following a free reference would use the template's context. This remains an open
design: verify deferred member projection, both constraint directions, polarity,
recursive aliases, and finite canonical reference keys. Dropping template transport
loses enclosing binders, while allocating per-call hole instances violates ordinary
inference. Regressions: `newres/InferenceHoles.mls`, `PartialSignatures.mls`, and
`AnnotationContexts.mls`.

## More precise regularity analysis

The current conservative check rejects some finite structural types. The
[regularity reference](new-resolution-regular-types.md#deferred-refinement-for-later-review)
contains two refinements for later review: input/output dependency analysis used
also for environment projection, and accounting for correlations between recursive
arguments after Boolean normalization. Neither is required for the current
conservative implementation.

## Whole-graph convergence audit

Binder allocation for fixed definition/site keys, source dependency analysis,
and relation replay have local bounds. A complete argument must also bound the
sites themselves, accepted contextual reference keys, nested environments, and
formula atoms, then establish listener convergence.
Retain marked parameter references and shared recursive edges; do not expand live
bounds into fresh type trees. Test delayed delivery, mutually recursive calls,
changing compound arguments, and independent consumers at the graph level.
