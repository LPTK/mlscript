# Compiler optimization plan

This plan targets the cost of compiling
[`FingerTreeList_StressTest.mls`](hkmc2/shared/src/test/mlscript-compile/FingerTreeList_StressTest.mls)
under `#lang(0.3.x)`. It is based on profiling revision `d037ebad2` and inspection
of that implementation. The proposed optimizations have not been implemented.

The objective is to do less work and allocate fewer temporary objects while
preserving the resolver's abstractions, precision, and ownership rules.
Maintainability takes precedence over performance. Each stage is an experiment
with a separate decision to keep, revise, or discard it; completing the plan
does not mean implementing every candidate optimization.

## 1. Evidence and priorities

### Historical baseline

These measurements were taken on September 26, 2026 with Oracle HotSpot JDK
21.0.8, using a separate JVM with `-Xms2G -Xmx4G -Xss8M`. Each iteration created
a fresh `CompilerCtx`, compiled `Iter.mls` and `Option.mls` and their dependencies,
then timed compilation of the target. The JVM was warm, but the target artifact
was not cached. The summaries used the last five of ten iterations.

The original scratch harness and raw recordings are no longer available. Treat
the following numbers as historical evidence for prioritization, not a baseline
against which a new implementation can claim a speedup. Stage 0 must establish
a reproducible baseline and save its recipe and results.

| Measurement | Historical result |
| --- | ---: |
| Fresh stress target, uninstrumented, median wall time | 428 ms |
| Same run, compiler-thread CPU time | 404 ms |
| Same run, compiler-thread allocation | 1.049 GB |
| Stress target with phase timers, median wall / CPU | 414 / 381 ms |
| Same instrumented run, allocation | 1.064 GB |
| Annotated `FingerTreeList`, phase-timed, median wall / CPU | 205 / 187 ms |
| Same annotated run, allocation | 0.539 GB |
| Re-emitting an already cached stress artifact | about 13 ms / 77 MB allocated |

Allocation figures use decimal MB/GB and describe bytes allocated, not retained
heap or peak process memory. A cold compiler run including dependencies took
about 2.7 s, excluding SBT startup. These are different workloads; their timings
must not be combined.

Phase means from the instrumented stress run were additive:

| Phase | Mean wall time | Share |
| --- | ---: | ---: |
| Elaboration, including synchronous new resolution | 329.49 ms | 80.2% |
| Backend optimization | 56.23 ms | 13.7% |
| JS emission, writing, and remaining work | 17.15 ms | 4.2% |
| Lowering | 4.23 ms | 1.0% |
| Parsing | 2.02 ms | 0.5% |
| Setup, metadata, erasure, and ABI work | 1.90 ms | 0.5% |
| Total | 411.02 ms | 100% |

The annotated control spent about 129 ms in elaboration and 49 ms in backend
optimization, by phase medians. Most of the additional stress-test cost is in
resolution. Summing phase medians would not give an end-to-end median.

### What the samples suggest

JFR samples restricted to seven target compilation windows gave the following
disjoint classification, using the nearest project frame to attribute library
work. The recording contained 1,014 execution samples and 3,459 allocation
samples in those windows. Allocation percentages are sample weights, not exact
object counts.

| Nearest project operation | CPU samples | Allocation weight |
| --- | ---: | ---: |
| Resolver state and cache bookkeeping | 26.5% | 30.3% |
| Other elaboration and resolution | 26.1% | 23.2% |
| Marks and shape projections | 12.5% | 16.0% |
| Candidate collections | 10.6% | 6.1% |
| Backend | 10.5% | 6.7% |
| Declared-type values | 4.2% | 8.9% |
| Publisher machinery | 3.2% | 4.9% |
| Printing | 3.2% | 2.4% |
| Remaining work | 3.2% | 1.5% |

Hashing/equality appeared in about 21% of execution samples, overlapping the
families above. Inclusive stacks through pattern matching and tuple-spread
expansion were prominent, but included callbacks into other operations. They
are evidence for investigating repeated transfer work, not additional additive
costs or proof that the pattern-matching algorithm itself consumes that time.
About 78% of execution stacks reached the recording's 256-frame limit.
Deep synchronous callbacks do not establish that normalized paths are long or
that the graph is growing without bound.

GC pauses accounted for about 5.5% of the recorded target wall time. Allocation
is substantial, but allocation reduction cannot be translated directly into an
equal CPU or wall-time reduction. Binder-support dependency traversal was a
small measured cost, around 1.4% inclusively, and is not an initial target.

### Experiments already tried

These temporary prototypes were reverted. They used the phase-timed harness,
each in a separate JVM; the stress module's generated JS was byte-identical.
They were not a full correctness validation or a statistically strong timing
comparison.

| Prototype | Median wall / CPU | Allocated |
| --- | ---: | ---: |
| Baseline | 414 / 381 ms | 1.064 GB |
| Return the existing `DeclaredType` for an empty incoming substitution | 400 / 380 ms | 1.045 GB |
| Also detect incoming keys already shadowed by retained bindings | 395 / 381 ms | 1.045 GB |
| Replace four routing `Option.fold` calls with direct matches | 400 / 377 ms | 0.956 GB |
| Cache hashes of immutable entry/exit marks and declared types | 404 / 383 ms | 1.080 GB |

There was no demonstrated meaningful CPU speedup. The routing experiment's
roughly 108 MB allocation reduction is worth reproducing as an allocation
improvement. Broad hash caching and substitution scans are not justified by
these results. Repeated construction of keys and views before cache hits is a
more useful hypothesis than assuming that hash computation alone is the issue.

## 2. Contracts every optimization must preserve

Read the implementation and explain the relevant invariants before changing
it. A green suite is necessary but does not prove an optimization sound.

- **Canonical construction and candidate equality.** Keep the private
  constructors and canonical factories for `TupleShape`, `RecordShape`, and
  `InstanceShape`. `ShapeIdentity.candidateKey` deliberately combines canonical
  identity with shallow structural equality for wrappers and other values.
  An identity set cannot replace this entire mixed equality relation.
- **Consumer ownership.** Imported inference hosts and listeners are extended
  through consumer-local data. Registration-graph provenance, intermediate
  exporters, activation substitutions, and block completion all matter.
  Never attach an importer-specific mutable cache to shared syntax or symbols.
  Immutable nodes can be shared; mutable bookkeeping needs an explicit copying
  or rebasing rule.
- **Monotone, live inference.** A cached view is a live producer of candidates,
  not a completed list. Preserve late bounds, reentrant publication, and replay
  order. An empty unfinished host is not a negative result that may be cached
  permanently. Completed code-generation decisions remain frozen even when
  private inference continues.
- **Substitution semantics.** Retained bindings win over incoming bindings.
  Dependencies describe what is read before a retained substitution; ambient
  support closes through retained instances' site binders and removes retained
  keys. Preserve that distinction and conservative treatment of unknown support.
  Application arity remains intrinsic to the interpreted reference, independent
  of the order in which a dependency traversal encounters it.
- **Scope transport.** Preserve normalized entry/exit order, boundary identity,
  explicit-site rejection, and wildcard behavior. A wildcard exit followed by
  entry is not generally an identity. Self-contained values can omit trailing
  exits, but their entries still filter which activations they may leave.
- **Aggregate precision.** Deferred fields retain their substitutions and
  provenance. Unknown-length tuple segments keep all possible positional
  alternatives. Record spread barriers preserve overwrite behavior. Do not
  replace alternatives with an arbitrary representative to reduce work.

Do not shorten paths, drop subscriptions, weaken assertions, add annotations to
the fixture, or change its dynamic indexing to make this benchmark faster.
Keep changes general and use the existing abstractions as the optimization
boundary. No new growth-test project is required by this plan; retain existing
growth checks and use benchmark counters for investigation.

## 3. Stage 0: make performance claims reproducible

### 3.1 A small compiler benchmark driver

Add a plain JVM main, provisionally
`hkmc2Benchmarks/src/test/scala/hkmc2/CompilerBenchmark.scala`, to the existing
`hkmc2Benchmarks` project. Its current diff benchmark runner executes tests in
parallel and should not be used as a compiler timing harness. Use ordinary
compiler entry points; do not copy the pipeline into a second implementation or
introduce a general benchmarking framework for this task.

Implement three explicit scenarios:

1. **Fresh context and dependencies:** create a context and compile the target,
   timing context setup, dependencies, and target work together. Also record a
   first compilation in a fresh JVM separately to expose warmup/startup effects.
2. **Fresh target with prepared dependencies:** create a new context per
   iteration, compile `Iter.mls` and `Option.mls`, then time the stress target.
   The prelude/dependencies may be cached in that context; the target must not
   be. Verify this once using artifact/phase counters. Never invalidate a shared
   context by mutating its private caches just to force work.
3. **Artifact reuse:** compile the target and then call `compileModule` again in
   the same context. This measures validation and repeated emission, separately
   from new resolution.

Run both FingerTree modules and a small fixed representative set of ordinary
modules, imports/re-exports, and tuple/record-heavy inputs. Freeze the set before
comparing variants. Exercise a repeated-importer session for changes that add
caches. Full-suite elapsed time is a useful smoke check, not the main benchmark:
its concurrency and unrelated runtime work obscure compiler changes.

Use the same paths, compiler configuration, source contents, filesystem behavior,
and output policy for both variants. The normal end-to-end measurement must
include emission and writing. If a separate run uses an in-memory filesystem or
omits writing to isolate resolver work, label it explicitly. Keep hashes and
runtime checks outside timed regions. Do not retain every iteration's compiler
context or generated output accidentally in the harness.

A suitable initial invocation, **after the proposed driver exists**, is:

```text
sbt
set hkmc2Benchmarks / Test / fork := true
set hkmc2Benchmarks / Test / javaOptions ++= Seq("-Xms2G", "-Xmx4G", "-Xss8M")
hkmc2Benchmarks/Test/runMain hkmc2.CompilerBenchmark --scenario fresh-target --warmup 5 --iterations 10
```

Define those few command-line options in the driver and document the selected
default fixture set. Record the actual child JVM options, not just `.sbtopts`,
which configures SBT. Exclude SBT startup and Scala compilation from measurements.
Stop competing builds and profiling sessions during benchmark runs.

### 3.2 Collect different kinds of evidence separately

For each iteration, save wall time, compiler-thread CPU time, allocated bytes,
scenario, fixture, fork, and whether it was warmup. On a JVM that exposes them,
use thread management counters for CPU/allocation; check support and report
unavailable counters explicitly. If compilation starts using worker threads,
compiler-thread counters no longer represent the whole job: record their scope
and add process/worker measurements before comparing totals.

Collect three separate kinds of runs:

- **Timing:** uninstrumented production code, apart from the harness's outer
  timers. Start with three matched JVM forks per variant, five warmup and ten
  measured iterations per fork. Extend warmup if the per-iteration series has
  not stabilized. Alternate baseline/candidate order between forks and repeat
  the unchanged baseline first to estimate A/A variability. Report per-fork
  medians and spread; do not select the fastest fork or discard slow iterations
  without an explained environmental cause.
- **Attribution:** phase timers, counters, and JFR in separate runs. Time parse,
  elaboration, erasure, lowering, individual optimization passes, and emission.
  Prefer small removable instrumentation or a disabled observer at existing
  phase boundaries to a new compiler-wide profiling abstraction. Keep any
  resolver counters per compilation/consumer, with no shared global state and
  no printing or per-event trace retention in hot paths. Verify instrumentation
  overhead and remove counters that no longer answer a question.
- **Memory:** track allocations and GC behavior, but also measure peak used
  heap and retained heap in a separate controlled run. Compare a deliberately
  retained context with a dropped context after a consistent full-GC checkpoint;
  do not force GC inside timed regions. Include a session with successive
  importers, so a cache cannot appear beneficial merely by retaining all old
  work. Process RSS includes the JVM and committed heap, so label it separately.
  Report the measurement method and avoid inferring a leak from one RSS sample.

For JFR, use target timestamp windows and identify the compilation thread. The
earlier useful starting settings were a `profile` recording with execution
sampling at 1 ms, allocation sampling at 1,000/s, and stack depth 256. Report
truncated stacks; use phase times and focused counters when deep callbacks make
inclusive attribution unreliable. Stream events through `RecordingFile` into
compact summaries. Expanding the earlier 11 MB recording into JSON produced
about 3 GB of stack metadata and was unnecessary.

Save a small report and the exact harness/instrumentation revisions, commands,
JDK/OS/hardware, heap settings, fixture hashes, and raw per-iteration measurements.
Use an ignored output directory such as `hkmc2Benchmarks/target/compiler-profile`
for local recordings and archive important evidence durably before cleaning it.
Commit the recipe and a compact results summary with an accepted optimization;
do not commit huge recordings or make the report depend solely on `/tmp`.

### 3.3 Decide what counts as an improvement

Before each experiment, state its expected mechanism, primary metric, and
smallest useful improvement. The observed effect must exceed A/A variability
and recur across forks. A microbenchmark or lower counter is supporting evidence;
the actual compiler workload must benefit.

A small simplification can justify a small reliable gain. A new cache, storage
representation, or ownership rule needs a substantially stronger case; as an
initial screening target, look for at least roughly 5% end-to-end time or 10%
allocation reduction on the affected workload, beyond measured noise. These
are screening guides, not permission to trade away clarity or correctness.
Allocation-only improvements are legitimate, but describe them that way and
check that CPU, retained memory, and ordinary workloads do not regress materially.

Reject or simplify a change when its benefit is unrepeatable, when cache lookup
cost replaces the saved computation, or when explaining its key/lifetime is
harder than explaining the operation it saves. Compare every accepted stage
against both its immediate predecessor and the original baseline; isolated wins
need not add together. Reprofile after meaningful gains before selecting the
next stage.

## 4. Stage 1: cheaper host operations and graph routing

**Files:** [Publisher.scala](hkmc2/shared/src/main/scala/hkmc2/utils/Publisher.scala),
[NewResolverState.scala](hkmc2/shared/src/main/scala/hkmc2/semantics/NewResolverState.scala),
[NewResolver.scala](hkmc2/shared/src/main/scala/hkmc2/semantics/NewResolver.scala).

**Hypothesis:** one logical publish or subscribe operation repeatedly resolves
the same consumer-local host and allocates routing closures. Centralizing the
whole operation can remove that work while strengthening encapsulation.

1. Count `data`, `local`, `peekReference`, `rebase`, and `inGraph` calls, inherited
   lookup depth, copies made, and calls per publication/subscription. Separate
   cache hits from new copies. Existing `copiedHostCount` and activation counts
   can help, but a low allocation count does not establish that hits are cheap.
2. Audit operations such as `publishActivated`, which currently obtains
   `currentShapes` and then calls `notifyShapeListeners`, and `Host.subscribeToShapes`,
   which separately registers and replays. Identify which lookups occur before
   any callback can change the graph.
3. Give `Publisher`/`Data` one ordinary internal publication operation and one
   subscription operation that resolve local data once where safe. Keep
   activation/view preparation in its existing semantic layer, then publish
   through the centralized operation. Reuse/refactor the existing `Data.publish`
   and `Data.subscribe`; do not create a competing fast-path publisher API or
   expose raw buffers to resolver callers.
4. Document the lifetime of an operation-local data reference. It must not be
   cached across block completion, graph rebasing, or a change of consuming
   state. A callback that causes reentrancy is a boundary to reason about,
   not a reason to assume all later lookups are redundant. Preserve registration
   under the original graph and invocation through `current.inGraph(origin)`.
5. Separately reproduce the four direct `Option` matches in `rebase`, `local`,
   `peekReference`, and `data`. Keep them if they make the branch behavior clear
   and reproduce the allocation reduction. Preserve evaluation timing: by-name
   fallback computations such as `initialData` may have ownership effects.
   Avoid a repository-wide rewrite of collection combinators.

**Validation:** existing `PublisherTest` and `TypeInstantiationTest` cover
reentrant delivery, private destinations, re-exports, completion, and activation
views. Extend them only for a missing ownership/replay property, including a
callback crossing a completion boundary if the refactor relies on that case.
Use `.mls` tests for observable resolution changes. Temporary observers must
still detach and must not be inherited by importers.

**Keep gate:** fewer lookups/closures on the same logical publications, with
repeatable end-to-end or allocation benefit and no change in deliveries. Do not
collapse source graphs, flatten inherited memo tables eagerly, or remove the
Publisher abstraction to gain a small local speedup.

## 5. Stage 2: candidate inspection and key allocation

**Files:** `utils/Publisher.scala`, `semantics/Shape.scala`,
`semantics/NewResolver.scala`, and identity-keyed tables in `NewResolverState`.

### 5.1 Avoid materializing candidates just to inspect cardinality

1. Find `currentShapes.toList` sites that only distinguish a singleton of a
   particular form from everything else, especially `transportType` and type
   interpretation. Add a small read API to `Candidates`, such as `singleOption`,
   that performs that query directly. Introduce a richer empty/one/many result
   only if actual callers need all three cases. Use existing option conventions.
2. Migrate only equivalent callers. Some `toList` uses intentionally snapshot
   a set of candidates before callbacks; replacing those with live iteration
   changes behavior. A singleton answer is an observation at that moment, not
   a permanent fact about an unfinished resolution.
3. Add a clearly named snapshot traversal used by replay. Capture the initial
   candidate count and traverse the append-only buffer by index. This removes
   the range/map iterator machinery without copying the buffer.
4. Preserve `Candidates.foreach`'s current live traversal contract: it also
   visits candidates appended by its callback. Do not silently redefine it to
   snapshot traversal. Notification separately captures listener/observer counts;
   registration plus replay must still deliver reentrant publications exactly
   once and in the established order.

**Measure:** lists/iterators allocated, singleton-query frequency, replay
invocations, and end-to-end allocation/time. Reuse `PublisherTest`'s replay
tests. Test compiler behavior through existing/new diff tests, rather than
adding unit tests that merely assert the chosen buffer representation.

### 5.2 Only specialize storage where evidence and equality permit it

1. Collect histograms of candidates per host and listeners per host, including
   long-lived hosts and high-fanout outliers. Count duplicate insertions and
   bytes spent constructing `ShapeIdentity` keys before membership checks.
2. Inspect tables whose contract is already reference identity, such as the
   publisher keys in `pending` and `completedNodes`. Check existing portable
   collection support before introducing a new utility. A narrowly scoped
   identity map/set may remove wrapper allocations, provided JVM and Scala.js
   behavior agree and the change does not add unsafe casts or expose storage.
3. Keep mixed candidate equality intact. Ordinary structural type/pattern
   candidates and shallow wrapper keys must not become reference-only keys.
   First remove repeated key construction within one operation. Change the
   persistent key representation only if measured cost remains substantial
   and one centralized implementation can preserve the equality contract.
4. Consider lazy allocation or empty/singleton storage only if the histograms
   show enough saved memory. Prefer a simple lazy backing set to an elaborate
   adaptive container when it achieves the benefit. Account for linear duplicate
   scans and promotion cost. Keep any representation choice private to the
   collection and preserve order, snapshot traversal, and live traversal.

**Keep gate:** demonstrate a whole-compiler benefit beyond section 5.1 and test
both tiny and high-fanout hosts. Reject bespoke hash tables, duplicated identity
rules, or extra representation states for a marginal saving. Never loosen
canonical construction to compensate for a key representation change.

## 6. Stage 3: compose scope paths directly

**Files:** [Shape.scala](hkmc2/shared/src/main/scala/hkmc2/semantics/Shape.scala)
and the `transportType`, `inverseMarks`, and inherited-member paths in
`NewResolver.scala`.

**Hypothesis:** type transport currently obtains a canonical bottom instance
solely as a mark carrier, applies value operations, and discards the carrier.
Direct path operations can avoid those lookups and intermediate `MarkedShape`
objects. This is a useful abstraction improvement if values and types use one
implementation of the same scope operations.

1. Specify the existing one-boundary entry/exit operations first. Separate the
   path result from the value policy for self-contained shapes. A rejected
   explicit call-site pairing must remain distinguishable from an empty path;
   use the existing option/result conventions rather than inventing a hierarchy.
2. Move the shared operations next to `Marks`. Preserve entry-prefix/exit-suffix
   normalization and `ResolutionBoundary`'s class/constructor normalization.
   Retain the assertions for repeated lexical boundaries and mismatched scopes.
   Preserve the order of both individual marks and lists of path fragments.
3. Express both value transport and reference transport through these operations.
   For a value, unpack its base/path once and construct the final wrapper once
   where possible. For a reference, compose the previous path and new transfer
   directly, then retain the existing `contextualTypes` interning and flattening.
   Remove `markCarrier` only after all its callers use the shared operations.
4. Handle self-contained values during composition, not by deleting all exits
   from a finished arbitrary path. Their incoming entries still participate in
   site checks. An incompatible explicit site must still reject the candidate.
5. Implement reverse transport using the existing operation order. Do not assume
   group-inverse laws: wildcard operations lose call-site identity. Prefer names
   that describe reversing a transfer over a claim of mathematical invertibility.

**Validation:** extend the existing scope-transport properties in
[`TypeRelationTest`](hkmc2/jvm/src/test/scala/hkmc2/TypeRelationTest.scala) where
needed: wildcard/wildcard, wildcard/explicit, equal and unequal explicit sites,
multiple lexical scopes, multiple fragments, class/constructor boundaries, and
self-contained values. These unit tests cover algebraic relationships that
diff tests cannot exhaust reliably. Compare the old and new operations during
development over valid small paths, then remove the duplicate production
implementation. Keep semantic properties, not a second algorithm as a permanent
oracle. Cover user-visible nested captures and calls in `.mls` tests too.

**Measure and keep gate:** count mark-carrier requests, temporary marked wrappers,
path-node allocations, and contextual-cache work. Show that wrapper reduction
translates into time or allocation savings without extra retained paths. Do not
add a global mark interner or permanent hash caches unless a later profile
provides an independent reason. This stage should leave one clearer definition
of scope transport and fewer round trips through the shape abstraction.

## 7. Stage 4: reduce reconstruction of declared-type views

**Files:** [TypeShape.scala](hkmc2/shared/src/main/scala/hkmc2/semantics/TypeShape.scala)
and `transportType`, `listenTypeInstances`, and tuple-field views in `NewResolver`.

`DeclaredType.copy` accounted for roughly 8.4% of allocation weight; prominent
paths were contextual transport and tuple-field instantiation. The no-op
substitution experiment removed only about 19 MB per compilation and did not
establish a CPU improvement. Reprofile after stages 1–3 before working here.

1. Count calls by empty incoming substitution, incoming keys entirely shadowed
   by retained bindings, and genuinely changed effective substitution. Separate
   repeated view construction from legitimate distinct views.
2. Prefer avoiding repeated preparation at the caller: compute an operation's
   effective substitution and projected reference once and pass it through the
   existing view API. Do not retain it across late inference changes unless its
   stability follows from the dependency/support contract.
3. An empty-input `instantiate` return can be a small simplification. A scan to
   discover that all keys are shadowed has its own cost; include it only with
   new evidence. Preserve `incoming ++ retained` precedence and all other
   declared-type fields. Do not equate references just because their current
   resolution candidates happen to match.
4. Use existing canonical type/view caches for genuine sharing. Do not add a
   parallel cache of support summaries that can become stale as bounds arrive.
   Cached hashes are a separate experiment, already unpromising; do not bundle
   them into this change.

**Validation:** `BinderSupport.mls`, `StoredSpecializations.mls`,
`SpecializationCaptures.mls`, `ArraySpreadViews.mls`, and the existing type relation
and instantiation suites. Cover retained environments nested inside fields,
spreads, and bounds; incoming substitutions must not overwrite captured ones.

**Keep gate:** measure saved copies and substitution work together. Skip this
stage if preceding changes have removed the hotspot or if fewer copies require
more traversal or another difficult cache lifetime.

## 8. Stage 5: share repeated pattern and aggregate transfer work

**Files:** `matchShapePat`, `tupleBindings`, `listenTupleField`, `listenAggregate`,
tuple-spread expansion, and the existing `typeViews`, `aggregateProducers`, and
`spreadInputs` state.

This is the largest potential algorithmic improvement and the stage needing
the strongest correctness argument. Inclusive samples alone do not prove that
it will help. Establish that the same logical transfer is being recomputed,
rather than observing necessary work for distinct candidates or continuations.

### 8.1 Establish where duplication occurs

Count, per operation family:

- Requests, existing-view hits, new producers, listener registrations, replayed
  candidates, and late arrivals.
- Unique semantic inputs, output candidates, and attempted duplicate outputs.
- Time/allocations spent preparing keys and substitutions before a hit.
- Tuple-spread prefixes revisited and distinct alternatives actually required.

Use bounded aggregate counters or a separate diagnostic run for richer keys;
an instrumentation set retaining the entire graph distorts memory measurements.
Audit the existing caches before adding one. `listenTypeViews` already installs
a host before following its graph, and `listenAggregate` already separates
producer startup from replay to each listener. Measure what remains outside
those mechanisms.

### 8.2 Share one pure transfer at a time

1. Choose the narrowest high-duplication operation, for example a repeated
   tuple-field view or constructor-pattern decomposition. First split reusable
   decomposition from caller-specific publication/binding if the current code
   combines them. If that separation is complicated or reuse is low, stop.
2. Write the key's semantic contract before its implementation: equal keys
   must imply the same continuing stream of results. Audit source/producer
   identity, operation or pattern identity, normalized marks, effective retained
   substitution, activation, and source-graph provenance. Include field/index,
   rest position, polarity, or other inputs wherever that particular operation
   reads them. State explicitly which inputs are fixed by the owning state.
   This is not a prescription to put every possible input in a giant tuple.
3. A reusable result should be an ordinary live host/transfer node using the
   current Publisher machinery. Every distinct caller still subscribes and
   receives replay plus future results. Keep caller-specific bindings and
   `matched` continuations outside the shared computation. Closure identity is
   not a semantic key, and a global "seen this shape" guard loses consumers.
4. Insert the producer into the consumer's cache before registering upstream
   subscriptions that can synchronously replay or reenter it. Ensure each
   logical upstream edge is installed once and each downstream registration
   gets the current and future results exactly once.
5. Document imported-node behavior. Share immutable descriptions; use existing
   host copying/rebasing for live inference and clone mutable bookkeeping when
   necessary. Preserve intermediate exporters and keep temporary observers out
   of imported graphs. Do not make an empty result final while upstream inputs
   are unfinished.
6. Extend to another operation only after the first one demonstrates useful
   reuse and a simple ownership/key story. Avoid a generic transfer engine or
   a new scheduler for the entire resolver as part of this optimization.

### 8.3 Aggregate-specific constraints

For tuples, retain deferred fields and source provenance across prefix/rest
views, array spreads, and unknown-length segments. A position after an unknown
segment can have several valid bindings. For records, unknown spreads form
overwrite barriers and later fields still win. Reuse an existing canonical
view/prefix when the operation is identical; do not merge alternatives merely
because their current output candidates look alike. Preserve the existing
recursive-spread handling rather than introducing broader widening.

**Validation:** exercise two callers sharing one producer, late inputs after
both subscribe, reentrant subscription, cyclic inputs, different substitutions
and call sites, imported/re-exported producers, and opposite observation orders.
Prefer `.mls` regressions for tuple patterns, spread calls, records, and captured
generic values; use small publisher/isolation unit tests only where those timing
or ownership properties cannot be observed reliably through source programs.

**Keep gate:** fewer producer evaluations or upstream edges for the same
observable results, repeatable end-to-end savings, and an acceptable retained
heap after successive importers. If nearly every key is unique, the cache should
be removed. A hit ratio alone is insufficient: include key construction,
subscription/replay costs, and the memory retained by cached nodes.

## 9. Stage 6: backend and emission, after resolver improvements

Reprofile first. Historically the two FingerTree modules had similar backend
costs, so backend work does not explain most of the stress-test difference.

### 9.1 Backend analyses and reconstruction

Inspect [CompilationPipeline.scala](hkmc2/shared/src/main/scala/hkmc2/codegen/CompilationPipeline.scala)
and [BlockSimplifier.scala](hkmc2/shared/src/main/scala/hkmc2/codegen/BlockSimplifier.scala).
Historical pass medians were about 24 ms for the first simplifier, 6 ms for
dead-parameter elimination, 5 ms for the second simplifier, and 5 ms for eta
expansion. These are leads for a fresh profile, not savings estimates.

1. Read the "Important design notes" in
   [Block.scala](hkmc2/shared/src/main/scala/hkmc2/codegen/Block.scala) before
   changing IR transformations.
2. Measure analysis hits/misses and repeated construction of unchanged nodes.
   `LocalVars` already uses `CachedAnalysis`; `Block.freeVars` is already lazy.
   Do not add a second cache for either without locating actual uncached work.
3. Prefer preserving unchanged immutable subtrees or calculating a needed
   summary once within a pass. Respect the IR's symbol and transformation
   invariants. Cross-pass reuse requires an explicit validity argument; use
   existing analysis scopes instead of global caches.
4. Verify generated behavior and code quality. Reducing the number of passes
   or disabling an optimization can make compilation faster while degrading
   generated programs. Such a change is outside this plan's intended scope.

Keep only measured improvements with straightforward validity rules. Run the
relevant codegen/IR diff tests, the full suite, and representative generated-code
runtime checks if the transformation itself changes.

### 9.2 JS emission and artifact reuse

Inspect [MLsCompiler.scala](hkmc2/shared/src/main/scala/hkmc2/MLsCompiler.scala) and
[JSBuilder.scala](hkmc2/shared/src/main/scala/hkmc2/codegen/js/JSBuilder.scala).
Re-emitting a cached artifact allocated about 77 MB to produce about 53 KB of
JS. This warrants allocation profiling but contributed only about 13 ms.

1. Separate JS tree/document construction, `stripBreaks`/formatting, final-string
   construction, and filesystem writing. Identify repeated traversal or copying
   before modifying the printer abstraction.
2. Prefer removing redundant conversions or repeated traversal inside the
   existing document API. Preserve formatting, escaping, scope/name allocation,
   imports, and path-sensitive output. Do not replace the document abstraction
   with ad hoc string concatenation for a minor gain.
3. Consider rendered-output caching only if repeated emission is an important
   measured workload and simpler changes are insufficient. Key it by the
   artifact and every output-affecting configuration/path input; check existing
   artifact invalidation and dependency validation. Define who owns the cached
   string and when it is released.
4. Reusing a string must still satisfy the output-file contract. A file may have
   been deleted or changed since the previous call; an artifact hit does not
   justify skipping required writes. Source/dependency/configuration changes
   must invalidate the right result. Retaining rendered strings has a measurable
   memory cost, which belongs in the comparison.

**Keep gate:** demonstrate savings in the separately labelled artifact-reuse
scenario as well as no fresh-compilation regression. Retain byte-identical JS
for internal renderer refactors. Test invalidation and missing-output behavior
if adding a cache; skip that cache if its complexity outweighs this small cost.

## 10. Correctness and delivery workflow

Follow [AGENTS.md](AGENTS.md) and the
[diff-test workflow](.github/skills/hkmc2-difftests/SKILL.md). Use Metals for Scala
inspection and quick compilation when available, but keep SBT as the final
validation. Start one SBT shell and run `ctest` before individual tests so that
their JS dependencies exist. Use `cntest`, `catest`, or `cwtest` for the relevant
additional compilation prerequisites.

Examples of focused commands in that shell:

```text
ctest
hkmc2JVM/testOnly hkmc2.CompileTestRunner -- -z FingerTreeList -oD
hkmc2JVM/testOnly hkmc2.PublisherTest hkmc2.TypeInstantiationTest hkmc2.semantics.TypeRelationTest hkmc2.CompilerCacheTest
hkmc2DiffTests/testOnly hkmc2.DiffTestRunner -- -z newres
hkmc2AllTests/test
```

Select relevant tests during iteration rather than running every focused suite
after every edit. The final command is required before finishing. Review all
rewritten `//│` golden lines: performance-only changes should not silently alter
diagnostics, resolution choices, or program results. Commit any intentional
golden updates with the implementation. Keep existing blank lines and `end`
markers; inspect the cumulative diff, not just the last commit.

| Changed behavior or contract | Existing coverage to start from |
| --- | --- |
| Publication, replay, imported graph ownership | `PublisherTest`, `TypeInstantiationTest` |
| Scope transport, cyclic and late type bounds | `TypeRelationTest`, `newres/Captures.mls`, `newres/CallSiteShapes.mls`, `newres/ModuleCaptures.mls` |
| Binder support and retained environments | `newres/BinderSupport.mls`, `newres/StoredSpecializations.mls`, `newres/SpecializationCaptures.mls` |
| Tuple positions, array/rest views, records | `newres/ArraySpreadViews.mls`, `newres/TuplePatternBindings.mls`, `newres/SpreadCalls.mls`, `newres/Records.mls` |
| Artifact ownership, imports, invalidation | `CompilerCacheTest`, Scala.js `CompilerTest`, imported-value diff tests |
| End-to-end behavior | Both FingerTree compile tests, `std/FingerTreeListTest.mls`, full suite |

The `.mls` paths in this table are relative to `hkmc2/shared/src/test/mlscript`.
Add only missing coverage. Compiler behavior belongs in `.mls` diff tests;
unit tests should state the additional algebraic, replay, or isolation property
that source tests cannot reliably observe. Do not add timing assertions to CI
or new graph-growth tests for this work. Existing tests remain required.

For resolver-only changes, compare generated JS and diagnostics against the
baseline, then run the behavioral suites; byte identity is useful evidence but
not sufficient on its own. If there is no runtime coverage of the stress
module itself, add a small `.mls` consumer exercising its recursive operations
and dynamic-index path, rather than assuming the annotated module covers both.
Do not copy an entire test suite. Any intended output difference needs an
independent correctness explanation, not an updated golden accepted merely
because tests pass.

## 11. Commit order and experiment record

Recommended order is Stage 0, then the independent host and candidate query
changes, direct scope composition, and a fresh profile. Revisit declared-type
copies and storage specialization only where the remaining evidence supports
them. Start transfer sharing only after its duplication measurements justify it.
Backend and emission changes are separate, lower-priority work.

Make each accepted change independently reviewable and reversible. Separate
diagnostic instrumentation from the optimization, but keep the benchmark recipe
available. A semantics-preserving refactor that is needed to expose an operation
may precede its optimization; identify it as preparation, not a speedup. Follow
the repository's agent commit-identity rule, using `Codex` when Codex authors
the change and without changing repository or global Git configuration.

For each experiment, append or attach a compact record containing:

1. Baseline/candidate commits and harness revision; machine, JVM, flags,
   workload, commands, and links/paths to the saved measurements.
2. Hypothesis and the invariant explaining why less work is semantically safe.
3. Per-fork wall/CPU/allocation results, A/A variation, and the relevant
   phase/counter changes. Distinguish observed gains from hypotheses.
4. GC, peak/retained heap, and repeated-importer findings when allocation or
   caching changed. State which memory metrics were not measured.
5. Output comparisons, focused tests, full-suite result, and reviewed goldens.
6. Maintainability assessment: APIs simplified, new key/lifetime obligations,
   and why the benefit justifies any remaining complexity.
7. Decision: keep, revise, defer, or discard. Preserve negative results so the
   next optimization attempt does not repeat an unsupported idea.

The immediate next step is to implement and validate Stage 0, then measure the
small host-operation and snapshot-query changes separately. The desired result
is a simpler implementation that does demonstrably less work, with evidence
for each retained change, rather than a collection of speculative fast paths.
