NOTE: The original suite comparison was written by Claude Opus and has not been
deeply reviewed. It records measurements taken on 2026-10-10. The dated sections
at the end record subsequent refactors; rerun before relying on any of these
numbers for later commits.


# New resolution: cost on `ctest` and `dtest`

This report measures how much adopting new resolution slows down the main
compilation tests (`ctest`) and the main diff tests (`dtest`), and how much of
that slowdown the optimizations of `new-resolution-no-hashing` remove.

| Branch | Commit measured |
| --- | --- |
| `hkmc2` (baseline, legacy resolution) | `94d76830e` |
| `new-resolution` | `cff6a255a` |
| `new-resolution-no-hashing` | `bbadbb794`, the merge of `cff6a255a` into `64037b9b5` |


## Summary

- New resolution makes warm `ctest` about **1.65× slower** (1.1 s → 1.9 s) and
  warm `dtest` about **1.15–1.2× slower** (6.5 s → 7.8 s), roughly +2 s per
  `ctest` + `dtest` cycle. All 43 compile tests slow down by a similar factor
  (median 1.64×).
- On this suite, the merged `new-resolution-no-hashing` does **not** reduce the
  slowdown: warm `ctest` is 1.22× and warm `dtest` 1.13× slower than on
  `new-resolution`.
- Most of that loss comes from `FingerTreeList.mls`. That branch moves it to new
  resolution, while `new-resolution` keeps it on the legacy resolver (its
  `#lang(0.3.x)` is commented out as too slow). It becomes the longest compile
  test, and `LazyFingerTree` plus the two std tests that import it get slower too.
- Excluding those four files, compile tests are about 9% faster per file than on
  `new-resolution`, which removes about a fifth of new resolution's per-file
  overhead on them. Diff tests are about 5% slower in aggregate (median file +4%).
- The branch's main target, bounding candidate growth on pathological inputs such
  as `FingerTreeList_StressTest`, is outside this measurement, because that test
  exists only on that branch and was excluded.


## Method

**Same tests on every branch.** Test files that exist only on the new branches
were deleted before measuring, so that every branch ran the same 858 test files:
all of `mlscript/newres/`, the 9 new `mlscript-compile` libraries, 7 other new
diff tests, and `FingerTreeList_StressTest.mls` on the no-hashing branch. The
per-directory `.mls` configuration files were kept, because the root one
(`#lang(0.3.x)`) is what enables new resolution. Existing tests whose contents
differ between branches were kept as they are on each branch. `new-resolution`
modifies 658 of them relative to `hkmc2`, mostly to migrate them to new
resolution. Between `new-resolution` and the no-hashing branch, the only such
file is `mlscript-compile/FingerTreeList.mls` (see above). The
`hkmc2` runner reports 631 diff tests against 628, because it also treats 3
directory configuration files as tests; those are negligible.

**Harness.** Each branch was checked out in its own Git worktree and compiled
beforehand. Each measurement is one `sbt -batch` session that runs
`hkmc2JVM/testOnly hkmc2.CompileTestRunner` and then
`hkmc2DiffTests/testOnly hkmc2.DiffTestRunner` (what bare `ctest` and `dtest`
run) five times in the same JVM. The first iteration is reported as *cold* and
the others as *warm*. Sessions for the different branches alternated (for
example `hkmc2`, `new-resolution`, `new-resolution`, `hkmc2`), so slow drift in
background load affects all branches alike. Wall time is ScalaTest's "Run
completed in" value. Every run passed and no test output was rewritten.

**Machine.** An 18-core macOS machine (Darwin 25.6) with 36 GB of memory,
sbt 1.12.12 on Oracle JDK 25, with the repository's `.sbtopts`.

**Reading the numbers.** Both runners execute tests in parallel. Per-file times
are wall times measured while other tests compete for the cores, so their sums
overstate the extra work. Whole-session CPU time (`/usr/bin/time`, including the
same sbt startup on every branch) is the more reliable measure of total work.
Wall time is also bounded by the longest tests and dependency chains, so it can
move differently from the total work.


## New resolution versus `hkmc2`

Six sessions per branch: 6 cold and 20 warm runs of each test command.

| Median wall time | `hkmc2` | `new-resolution` | Ratio |
| --- | ---: | ---: | ---: |
| `ctest`, warm | 1.13 s | 1.85 s | 1.64× |
| `ctest`, cold | 1.46 s | 2.13 s | 1.46× |
| `dtest`, warm | 6.53 s | 7.76 s | 1.19× |
| `dtest`, cold | 6.80 s | 7.86 s | 1.16× |
| CPU per session (startup + 5 × both commands) | 607 s | 724 s | 1.19× |

- **Compile tests.** The summed per-file time grows 1.60× (24.6 s → 39.5 s).
  The per-file ratios are tightly grouped (p25 1.55×, median 1.64×, p75 1.71×),
  so this looks like a fixed overhead per unit rather than any specific feature.
- **Diff tests.** The summed per-file time grows 1.47× (143 s → 210 s); the
  median file is 1.31× slower and the 95th percentile 2.66×. Wall time grows
  less because the suite is parallel.
- **Outliers.** In the full run, some diff tests are 4–9× slower: for example
  `std/FingerTreeListTest` (0.7 s → 3.8 s), `ups/examples/BadRecStackParse`
  (0.27 s → 2.3 s) and `ucs/examples/Permutations` (0.11 s → 1.0 s). When the 12
  worst are run on their own, they are only 1.2–1.7× slower. Their full-run times
  likely include waiting for imported modules that other tests compile first
  through the shared compiler context; this was not verified.


## Effect of `new-resolution-no-hashing`

Four sessions per branch: 4 cold and 16 warm runs of each test command.

| Median wall time | `hkmc2` | `new-resolution` | `no-hashing` (merged) |
| --- | ---: | ---: | ---: |
| `ctest`, warm | 1.15 s | 1.94 s (1.69×) | 2.37 s (2.06×) |
| `ctest`, cold | 1.45 s | 2.11 s (1.46×) | 2.75 s (1.90×) |
| `dtest`, warm | 6.75 s | 7.78 s (1.15×) | 8.77 s (1.30×) |
| `dtest`, cold | 6.85 s | 7.52 s (1.10×) | 8.43 s (1.23×) |
| CPU per session (startup + 5 × both commands) | 613 s | 719 s | 777 s |

Ratios are relative to `hkmc2`.

Summed per-file times (median of the warm runs), split by whether a file
compiles or imports `FingerTreeList`:

| Summed per-file time | `hkmc2` | `new-resolution` | `no-hashing` | `no-hashing` / `new-resolution` |
| --- | ---: | ---: | ---: | ---: |
| `FingerTreeList` + `LazyFingerTree` (compile) | 1.3 s | 2.3 s | 3.4 s | 1.49× |
| Other 41 compile tests | 23.6 s | 39.8 s | 36.2 s | 0.91× |
| `std/FingerTreeListTest` + `std/LazyFingerTreeTest` | 1.6 s | 6.5 s | 9.5 s | 1.47× |
| Other 626 diff tests | 147.1 s | 195.8 s | 204.9 s | 1.05× |

- **`FingerTreeList` and its importers.** On the no-hashing branch,
  `FingerTreeList` takes 2.0 s (1.5 s on `new-resolution` with the legacy
  resolver, 0.8 s on `hkmc2`). That makes it the longest compile test, on the
  critical path of `ctest`. `LazyFingerTree` imports it and goes from 0.8 s to
  1.4 s. The two std tests that import both are the longest diff tests on that
  branch (4.6–4.9 s each). This part of the comparison does not isolate the
  resolver: the branch does new-resolution work on that file that
  `new-resolution` skips.
- **Other compile tests.** They are uniformly faster than on `new-resolution`
  (per-file ratio p5 0.88×, median 0.91×, p95 1.03×).
- **Other diff tests.** The per-file ratio is centered slightly above 1 (p25
  0.98×, median 1.04×, p75 1.13×). The largest gains are small, for example
  `codegen/Do.mls` (200 ms → 119 ms). A plausible explanation, not verified, is
  that the binder bookkeeping these optimizations add (recording lexical type
  binders for terms and projecting substitutions) costs more than it saves on
  small worksheets.


## Not measured

- Wall times of the no-hashing branch with `FingerTreeList.mls` kept on the
  legacy resolver, which would isolate the resolver changes from the migration
  of that file. A control run for this was started and interrupted.
- Whether the merge commit's own adaptations affect timing. They record binders
  for contextual tuples, `super` selections and async result hosts. The async
  payload host records an unknown scope, which keeps whole substitutions. Only
  code using these constructs is affected.
- The other suites (`cntest`, `catest`, `cwtest` and their diff-test
  counterparts), and the stress tests that exist only on the new branches.


## Explicit keys and lazy tables (2026-10-12)

The key refactor was compared with `a06dcd2fc` (the no-hashing branch after merging
`new-resolution` and the `hkmc2` Term-identity fixes), with the same local-scrutinee
integration fix in both versions. These are individual warmed local runs, not
statistical speed-up estimates. The first run of each configuration was discarded.

Both versions ran `hkmc2JVM/testOnly hkmc2.semantics.SubstitutionGrowthTest -- -z bounded`
in the same SBT session. Temporary instrumentation around `measure(file)` recorded
elapsed time and JVM test-thread allocations with `ThreadMXBean`; it was removed
after measurement. Allocations are cumulative bytes, not retained or peak memory.
The generated inputs and graph-growth assertions were identical.

| Input | Before | Explicit keys | Allocated before | Allocated after |
|---|---:|---:|---:|---:|
| Plain chain, k=14 | 12.5 ms | 10.1 ms | 3.57 MiB | 3.55 MiB |
| Branching chain, k=14 | 26.5 ms | 22.9 ms | 14.53 MiB | 14.35 MiB |
| Promise chain, k=14 | 25.2 ms | 16.5 ms | 17.74 MiB | 17.47 MiB |
| FingerTreeList | 1.27 s | 1.09 s | 1317.7 MiB | 1358.5 MiB |

The measured version removes the general view-interning table and per-witness instance
entries, makes resolver tables lazy, and stores explicit immutable key components
with cached hashes. Canonical tuple, record, instance, and inferred-host identities
remain. FingerTreeList constructs 1533 substituted views instead of 1368, including
short-lived views formerly interned; it still satisfies the existing bound of
3000 and the unchanged limit of four retained bindings. Its
allocation increased about 3%, while the smaller generated cases were similar.
The allocation increase is a regression; these measurements do not establish
that removing view interning is beneficial. The context/state split subsequently
removed the need for lazy table fields: activations now share the unit's tables.
The figures above describe the earlier implementation, not that split or the
subsequent canonicalization work.


## Context separation and direct hashing (2026-10-12)

This preliminary comparison is superseded by the controlled comparison below.

This comparison uses `9ea9944b5` (including optionless extractors) as the baseline
and the context split in `8d5a5c4d8` plus the canonicalization/direct-hashing
changes in this section's commit. Both versions ran in the same SBT process on
JDK 21, using the unchanged `SubstitutionGrowthTest` inputs and the temporary
`ThreadMXBean` instrumentation described above. Each version was recompiled and
warmed before two recorded runs. The table gives both runs' ranges and the
change in their mean allocated bytes. No timing or allocation instrumentation
is retained in the tests.

| Input | Before | After | Allocated before | Allocated after | Mean allocation change |
|---|---:|---:|---:|---:|---:|
| Plain chain, k=14 | 13.3–13.4 ms | 13.4–22.8 ms | 3.55–3.56 MiB | 3.54–3.63 MiB | +0.8% |
| Branching chain, k=14 | 29.1–34.2 ms | 32.8–41.5 ms | 14.24–14.26 MiB | 14.18–14.60 MiB | +1.0% |
| Promise chain, k=14 | 23.0–26.1 ms | 27.5–29.2 ms | 17.40–17.40 MiB | 17.37–17.94 MiB | +1.5% |
| FingerTreeList | 1.21–1.38 s | 1.37–1.41 s | 1210.64–1238.15 MiB | 1059.83–1093.55 MiB | −12.1% |

The allocation reduction on FingerTree is substantial in this comparison; the
small chains are roughly unchanged. These runs do not demonstrate a timing
improvement: the new version was slower in most recorded comparisons. Two runs
are insufficient to separate JVM warmup and background load from a timing
regression. Absolute allocation counts also depend on JVM optimization, so
these figures should not be compared directly with the earlier table's counts.

The implementation now shares ordinary resolver tables across a compilation
unit's immutable activation contexts. Immutable values hash their fields
directly, without constructing tuple-shaped mirrors. Declared-type references,
their binding data, substitutions, and view comparison adapters are canonicalized
within the unit. Cache hits avoid intermediate `Option` wrappers. These changes
were measured together; this comparison does not attribute the allocation
reduction to any one of them. Both versions create 1533 substituted FingerTree
views and retain at most four bindings, so the reduction does not come from
changing the projection or accepting fewer candidates.


## Controlled comparison of the context and hashing commits (2026-10-12)

The larger comparison does **not reproduce the earlier FingerTree slowdown**.
The final revision is **5.3% faster** than the baseline on the warmed FingerTree
workload (95% interval: **4.3–6.3% faster**). Its compiler-thread CPU time is also
5.5% lower. The preliminary two-run means were 7.6% slower for FingerTree, 35.2%
slower for the plain chain, 17.3% for branching, and 15.5% for promises; those
figures should not have been presented without their magnitudes or relied on as
evidence of a regression.

### Method

Three revisions separate the two changes:

| Label | Revision | Included changes |
|---|---|---|
| Baseline | `9ea9944b5` | Optionless extractors; before the context split |
| Context | `8d5a5c4d8` | One state per unit and immutable resolution contexts |
| Final | `f0777411e` | Also canonicalization and direct field hashing |

Each revision ran in **12 fresh JVMs**, one at a time. Every JVM used **20 warmup
iterations followed by 15 recorded iterations**: 180 measured samples per input
per revision. An iteration creates a fresh growth-test suite and compiler cache,
compiling all 25 inputs of the same three existing growth tests. The four inputs
below match the earlier report. Test assertions remain enabled. All forks passed;
no samples or outliers were removed, and GC pauses remain in wall time.

The 12 blocks each contain all three revisions. All six execution orders occur
twice, in a seeded shuffled order. Compiled classes were frozen before measurement;
SBT and our other compilation/test work finished before timing began. The machine
was a Mac17,6 with 18 CPUs and 36 GiB RAM, running Oracle JDK 21.0.8 with the
repository's `-Xms2G -Xmx4G -Xss8M` settings. The timed operation includes parsing,
resolution, lowering, optimization, and diagnostic checking. File creation and
the growth assertions are outside it; imports are cached within each iteration.

Estimates below are ratios of arithmetic means. The 95% intervals use 20,000
paired bootstrap resamples of the **12 whole blocks**, preserving the three
revision results together. Repeated samples in one JVM are averaged first,
not counted as independent replicates. The intervals are per workload/comparison.
All three revisions ran faster in later blocks, so balancing and pairing matter.

### Warmed wall time

Negative changes mean faster. Times are mean milliseconds per compilation.

| Input | Baseline | Context | Final | Final vs baseline | 95% interval |
|---|---:|---:|---:|---:|---:|
| Plain chain, k=14 | 1.641 | 1.630 | 1.620 | −1.3% | −4.0% to +0.7% |
| Branching chain, k=14 | 5.939 | 5.792 | 5.751 | −3.2% | −5.1% to −1.2% |
| Promise chain, k=14 | 7.985 | 8.271 | 7.486 | −6.2% | −11.1% to −1.8% |
| FingerTreeList | 512.050 | 509.497 | 484.995 | **−5.3%** | **−6.3% to −4.3%** |

On FingerTree, the context commit alone changes time by −0.5% (interval −1.1%
to +0.2%). The hashing/canonicalization commit then improves time by **4.8%**
relative to the context commit (interval **4.1–5.5% faster**). Most of the measured
FingerTree gain therefore belongs to the second commit.

Compiler-thread CPU changes from baseline to final are −1.3% for plain, −1.5%
for branching, −0.7% for promises, and **−5.5% for FingerTree**. In particular,
the promise's larger wall-time gain is mainly in time outside the measured
thread's CPU execution; it should not be interpreted as a 6.2% reduction in
resolver computation. GC placement and scheduling affect these short timings.

### Warmup and startup checks

Across the recorded window, plain/branching CPU times still fall by roughly
2–7%, depending on revision; FingerTree changes by less than 1%. Restricting
the analysis to the last five samples per JVM gives a FingerTree improvement of
**5.0%**, with an interval of **3.7–6.4% faster**. The other point estimates also
remain faster, though the promise interval widens to include zero. The main
FingerTree conclusion does not depend on the early measured samples.

The first suite iteration gives a different view of warmup. These timings are
before the 20-iteration warmup, with the same fixed workload order; they do not
include JVM launch time:

| Input | Baseline | Final | Final vs baseline | 95% interval |
|---|---:|---:|---:|---:|
| Plain chain, k=14 | 12.843 ms | 13.321 ms | +3.7% | −1.5% to +8.7% |
| Branching chain, k=14 | 25.498 ms | 24.575 ms | −3.6% | −7.7% to +0.1% |
| Promise chain, k=14 | 18.981 ms | 19.681 ms | +3.7% | −0.5% to +8.1% |
| FingerTreeList | 1075.732 ms | 1059.337 ms | −1.5% | −3.0% to −0.1% |

The plain and promise first-iteration means are about 3.7% slower, with intervals
including zero. **A modest first-use slowdown on those inputs remains possible.**
Whole benchmark-process elapsed time, including JVM launch, all warmup, all 25
inputs per iteration, and the measured iterations, falls from 24.730 s to
23.775 s: **3.9% faster**, with an interval of **3.0–4.8% faster**.

### Allocation and reproducibility

Warmed FingerTree allocation falls from 1164.53 MiB per compilation to
1101.63 MiB after the context split and 956.97 MiB after hashing: **17.8% less
overall**, or 13.1% less for the second commit. The final small-input allocation
changes are +0.27%, −0.39%, and −0.29%, respectively. These counts are cumulative
allocated bytes, not retained memory, and depend on the JVM's optimization state.

The [retained samples, fork metadata, instrumentation, runner, and analysis](benchmarks/resolver-hashing-2026-10-12/README.md)
make this comparison reproducible. The exact cause of the earlier two-run
discrepancy was not isolated. These results establish the behavior of the measured
workloads under the specified warmup and JVM; they do not establish a speed-up
for every compiler workload.
