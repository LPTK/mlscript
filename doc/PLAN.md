I agree with the diagnosis and proposed direction, with one important refinement: **filter substitutions according to what the shape can depend on, not simply the lexical scope of its source expression.**

The current code supports the central diagnosis: `instantiateShape` merges entire substitutions, and `ShapeIdentity` includes those substitutions in candidate identity. Irrelevant bindings can therefore create distinct candidates and multiply downstream work.

However, `Branch2[T](...)` constructed inside non-generic `toNodes` still needs its own constructor’s `T` binding to interpret its fields. Closures, partial applications, and synthesized shapes introduce similar considerations. Claude’s proposal needs to account for these before implementation.

I reviewed the source but have not independently reproduced the reported counts or timings. The mentioned `scratchpad/SubstitutionGrowth_k10.mls` is absent from this checkout.

The implementation plan I would give Claude follows.

1. **Reestablish the reproduction and measurement baseline.**

   Regenerate the chain of private generic identities from the pasted example. Measure several sizes, such as `k = 2, 6, 10, 14`, with three variants: no type parameter, an unused type parameter, and an annotated parameter/result.

   Keep the functions private so public-interface exposure does not introduce unrelated inputs. Use fresh compilation-unit states for comparisons.

   Record actual shape-view allocations, maximum retained substitution size, and resolution time. Also inspect activation-context and candidate counts sufficiently to detect whether an improvement merely moves the growth elsewhere. Distinguish cache misses and allocations from calls to `instantiateShape`.

   Start one persistent SBT session and run `ctest` before individual tests, as required by the repository. Establish a baseline for `FingerTreeList_StressTest` as well.

2. **Define the correctness invariant before changing substitution logic.**

   For each shape, define a conservative set of original type-parameter symbols that its deferred observations can read. Call this its *binder support*.

   The invariant should be:

   > Applying an ambient substitution retains only bindings that can affect observation of the shape’s members, fields, arguments, or callable body. Bindings already captured by the value retain their original interpretation.

   This is deliberately a conservative scope analysis, not an exact free-variable analysis. It should avoid following live inference candidates or expanding type-parameter bounds.

   Preserve these existing distinctions:

   - Lexical captures and an explicitly consumed generic binder group serve different purposes.
   - Existing captured bindings win over subsequently supplied ambient bindings: the current composition is `incoming ++ existing`.
   - Activation environments control which source events a listener accepts; they are separate from value substitutions.
   - Binding identity is the `VarSymbol`, not its displayed name.
   - Resolution marks retain their existing behavior.

   In particular, do not use `isSelfContained` as a blanket exemption from substitution: `RigidTypeShape` reports itself as self-contained but still requires parameter instantiation.

3. **Record lexical metadata in the source graph, before eager resolution can observe it.**

   Extend the approach used by [`lexicalTypeBinders`](/Users/parreaux/work/Research/code/mlscript/hkmc2/shared/src/main/scala/hkmc2/semantics/NewResolverState.scala:246) and [`Ctx.typeBinders`](/Users/parreaux/work/Research/code/mlscript/hkmc2/shared/src/main/scala/hkmc2/semantics/Elaborator.scala:123).

   Use identity-keyed metadata owned by `NewResolverState`, with the existing inherited-cache/import conventions. Do not add mutable fields to symbols or introduce global state.

   Record enclosing binders for relevant source terms and term definitions, including lambdas, tuples, records, applications, constructor expressions, and generated fields. Keep the existing meaning of declaration metadata—enclosing binders—and explicitly combine it with a declaration’s own parameters where needed. Include binders introduced by separate quantified signatures, not only `td.tparams`.

   Registration must happen before callbacks can construct or instantiate a shape. A wrapper around the return from `subterm` is insufficient on its own: the elaborator’s `app` helper installs resolution listeners immediately.

   Handle generated syntax explicitly: constructor fields, shorthand lambdas, named-tuple records, and synthesized aggregate views must inherit appropriate metadata from their semantic inputs.

   Populate necessary metadata for legacy exporters too, since new-resolution consumers can import their syntax. Consumers must read the source’s metadata without modifying the exporter.

   Distinguish “known empty support” from “metadata missing.” Missing required metadata should trigger an internal invariant failure, rather than silently dropping all bindings. Shared synthetic source nodes also must not be treated as proof that their associated semantic shapes are closed.

4. **Implement one exhaustive binder-support policy for shape instantiation.**

   Audit the cases in [`Shape.scala`](/Users/parreaux/work/Research/code/mlscript/hkmc2/shared/src/main/scala/hkmc2/semantics/Shape.scala:483). The policy should cover these categories:

   | Shape category | Required treatment |
   |---|---|
   | Literal, dynamic, unknown, opaque, error | Preserve existing substitution-free behavior. |
   | Rigid type parameter | Retain its parameter’s substitution. |
   | Lambda | Retain its enclosing lexical binders for deferred body observation. |
   | Tuple or record | Account for lazy source fields and semantic contents of synthesized/spread/rest views; preserve captures already carried by children. |
   | Definition, class base, application, construction | Include relevant declaration/receiver dependencies and required callee or constructor parameters. Application-site lexical scope alone is insufficient. |
   | Specialized callable | Preserve its consumed binder group and supplied type arguments. |
   | Declared type/interface shapes | Account for their stored type references and bindings; a diagnostic source location does not describe all their dependencies. |

   For `AppShape` and `NewShape`, inspect the receiver/declaration as well as the expression’s source scope. This is what preserves `Branch2.T`, generic constructor fields, and partially applied generic functions while discarding unrelated `Deep.T` or `reduce.U` bindings.

   Keep `CallableTypeShape`’s existing masking of its own unconsumed quantified parameters.

   Do not blindly reuse the existing `typeDependencies` result as complete shape support: that analysis deliberately treats inferred values and holes as having no ambient type-binding dependencies. Its purpose differs from the value-view analysis needed here.

   Document the rule beside the implementation, including why constructor parameters and synthesized contents can matter despite being absent from the expression’s lexical scope.

5. **Normalize before cache lookup and avoid allocating unchanged views.**

   Refactor [`instantiateShape`](/Users/parreaux/work/Research/code/mlscript/hkmc2/shared/src/main/scala/hkmc2/semantics/NewResolver.scala:701) so projection happens before the `canonicalView` lookup. Otherwise irrelevant substitutions still create cache entries even when their resulting values become equivalent.

   For shapes carrying flat value environments, perform the following operations in order:

   1. Identify the underlying source and existing captured environment.
   2. Restrict the incoming environment using the shape’s binder support.
   3. Compose environments with existing captures taking precedence.
   4. Return the existing value when the operation changes nothing.
   5. Canonicalize the resulting view using its source and effective environment.

   Preserve marks exactly. Avoid nesting contextual wrappers.

   Audit tuple and record copies particularly carefully: these shapes use identity for candidate deduplication. Equivalent effective views must reuse their canonical identity; simply copying an unchanged tuple or record can reintroduce duplicate candidates.

   Ensure cache keys describe the effective view, rather than the sequence of substitutions used to reach it. Reuse the repository’s shallow identity-key strategy rather than introducing recursive structural hashing.

   Do not solve this by excluding substitutions from `ShapeIdentity`: relevant substitutions must continue to distinguish candidates.

6. **Audit every propagation path, keeping activation semantics separate.**

   The current implementation has more callers than the two highlighted in the analysis. Check applications, construction, member lookup, tuple fields, pattern fields, function constraints, explicit specialization, and [`InterfaceExposure`](/Users/parreaux/work/Research/code/mlscript/hkmc2/semantics/InterfaceExposure.scala:116).

   Pay particular attention to `ContextualSymShape`, `MemberLookup.Contextual`, and `TupleShape.ViewedField`. They also carry environments and must not bypass the normalization policy or reintroduce discarded bindings.

   Keep the fix centralized; avoid special cases for identity functions, unannotated code, or FingerTreeList.

   Do **not** apply the same pruning indiscriminately to `NewResolverState.withInstances`, `ActivatedShape`, or `listen.compatible`. Those environments participate in activation dispatch and can require bindings that the resulting value itself does not use.

   Remeasure after this change. If activation contexts still grow exponentially, investigate their dependencies separately rather than weakening compatibility checks or declaring success from shape-view counts alone.

7. **Add behavioral regressions and a deterministic growth regression.**

   Use `.mls` tests under `hkmc2/shared/src/test/mlscript/newres/` for observable compiler behavior. Extend existing coverage where practical rather than duplicating it in Scala.

   Cover these cases:

   | Regression | What it protects |
   |---|---|
   | The short identity-chain reproduction, with annotated and unannotated variants | Values survive passage through irrelevant generic scopes. |
   | Generic construction with inferred and explicit arguments, including `new` | Required constructor bindings survive pruning. |
   | Returned closures and nested local classes instantiated at different sites | Enclosing captures remain distinct. |
   | Partial applications and stored explicit specializations | Consumed binder groups remain attached. |
   | Tuples, records, spreads, and rest views carrying generic values | Lazy and synthesized contents retain their dependencies. |
   | Recursive calls and shadowed parameter names | Existing captures and fresh callee bindings remain separate. |
   | Imported generic definitions, including legacy exporters | Metadata follows source ownership correctly. |

   Include negative cases that must still reject invalid member access or respect an annotated interface. Successful runtime results alone would not detect accidental loss of resolution constraints.

   Add a Scala bounded-growth test, ideally in a dedicated `SubstitutionGrowthTest`. It should compile generated source through normal elaboration/resolution, so it exercises metadata registration and propagation together.

   Add a small `private[hkmc2]` allocation accessor following the existing `allocatedTypeInstanceCount` convention. Count actual newly allocated views in the consuming root; do not count cache hits or adoption of existing imported views.

   Run several chain lengths and assert a documented conservative growth bound that demonstrably fails before the fix. Choose that bound from the mechanism and measurements; avoid exact incidental allocation totals and wall-clock assertions.

   Small additional unit tests are justified for algebraic/cache properties: irrelevant substitution does not allocate, repeated application stabilizes, and composed substitution preserves existing-binding precedence. State that their extra coverage is bounded growth and substitution laws, rather than duplicating `.mls` behavior.

8. **Validate both the performance claim and semantic preservation.**

   Use Metals for quick Scala feedback, then run the relevant SBT tests in the persistent shell. The validation sequence should include:

   ```text
   ctest
   hkmc2JVM/testOnly hkmc2.SubstitutionGrowthTest hkmc2.TypeInstantiationTest hkmc2.semantics.TypeRelationTest
   dtest newres/
   ctest FingerTreeList_StressTest
   hkmc2AllTests/test
   ```

   Ensure npm dependencies are installed for JS/Wasm paths. Review rewritten golden outputs after focused runs and after final validation.

   Compare baseline and final measurements for both the identity chains and FingerTreeList. Report allocations, retained substitution sizes, and timing separately. Do not claim a general complexity guarantee from this one reproduction or treat the extrapolated 25-second threshold as established evidence.

   Before committing, remove temporary instrumentation and experiments, inspect the complete change for unrelated whitespace changes, and include all intentional golden updates. Preserve existing blank lines and `end` markers. Commit using the agent’s own identity supplied on the commit command.

   Completion requires both demonstrated removal of the irrelevant-substitution growth and preservation of captures, constructor bindings, specialization, and importer isolation.
