NOTE: This document was written by Claude Opus and has not been deeply reviewed.
It records a one-off measurement taken on 2026-10-10; rerun it before relying on
the numbers for later commits.


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
