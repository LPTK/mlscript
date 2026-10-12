# Resolver context and hashing comparison, 2026-10-12

These are the retained data and scripts for the controlled comparison in
[`new-resolution-test-suite-performance.md`](../../new-resolution-test-suite-performance.md).

The three revisions are:

- `baseline`: `9ea9944b56a9bdd92ce473738dcd9f4281e810d2`, before the context split.
- `context`: `8d5a5c4d81d4f666fae180b460af141f6885e6c5`, context split only.
- `final`: `f0777411e4b26bdb3b7c8bec42895550195342fc`, also canonicalization and direct hashing.

`samples.csv.gz` contains every warmup and measured sample for the four reported
inputs, with elapsed time, current-thread CPU time, and current-thread allocated
bytes. `forks.json` retains process durations, start/end times, host load, total
GC pause time, and JIT compilation counters. No outliers were removed. The pilot
runs used to choose the warmup length are excluded from these data.

`metadata.json` records the machine, JVM, options, revisions, and run plan. Each
of the six revision orders occurs twice, in a seeded shuffled order. Each of
these 12 blocks contains three sequential fresh JVMs. A JVM runs 20 warmup
iterations followed by 15 measured iterations, using one classloader throughout.
Each iteration creates a fresh `SubstitutionGrowthTest`, hence a fresh
`CompilerCtx`, and executes the same three existing growth tests with their
assertions enabled. Together they compile 25 inputs; four are reported here.

The timed region is the existing `measure(file)` body through elaboration,
lowering, optimization, and the diagnostic check. Input-file creation and
graph-size assertions are outside it. The suite shares cached imports within
an iteration, while each target input is compiled afresh. New suite instances
prevent reuse of compilation results across iterations. The source programs and
test inputs are identical across the revisions. GC pauses remain in wall time.

## Recompute the statistics

Run `python3 analyze.py` in this directory. It needs only the Python standard
library and prints JSON for the full measurement window, the last five samples
per JVM, the first suite iteration, and total process elapsed time.

The headline estimates are ratios of arithmetic means. Confidence intervals are
95% percentile intervals from 20,000 paired bootstrap resamples of the 12 whole
blocks, using seed `5347011731`. Resampling a block keeps all three revision
results together. Iterations within a JVM are averaged first and are never
treated as independent replicates. Intervals are per comparison and workload.

## Repeat the experiment

1. Prepare separate isolated checkouts of the three revisions. Apply
   `python3 instrument.py CHECKOUT` to each; this appends the same benchmark
   entry point and timing probes to its existing growth-test source.
2. In each checkout's SBT shell, run `ctest`, then
   `export hkmc2JVM / Test / fullClasspath`. Save the colon-separated classpath
   line to `BUILDS/baseline/classpath.txt`, `BUILDS/context/classpath.txt`, or
   `BUILDS/final/classpath.txt`. Keep those compiled directories unchanged.
   The recorded run instead copied each compiled class directory to freeze it
   before restoring the working tree; the frozen bytecode is equivalent.
3. Finish other compilation/test work before timing. From this directory, run
   `python3 run.py REPOSITORY JAVA BUILDS OUTPUT`, where `JAVA` is the Oracle
   JDK 21.0.8 executable, `REPOSITORY` supplies the unchanged test fixtures, and
   `OUTPUT` is a fresh results directory. The runner executes JVMs sequentially,
   retains raw logs and per-fork metadata, and aborts on a test failure.
4. Run `python3 analyze.py OUTPUT` to analyze the new run. The runner calls
   `collect.py` after all forks to prepare the normalized analysis inputs.

Changing the JVM, heap sizes, warmup, or workload order creates a different
experiment. The absolute times here include the host's observed load and CPU
scheduling; balanced adjacent comparisons reduce the effect of temporal drift.
