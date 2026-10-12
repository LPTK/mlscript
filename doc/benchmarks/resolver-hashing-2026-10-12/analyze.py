"""Recompute the paired comparison from retained samples (Python standard library)."""
from pathlib import Path
import csv
import gzip
import json
import random
import statistics as st
import sys

ROOT = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path(__file__).resolve().parent
INPUTS = ["Plain_14", "Branching_14", "Promise_14", "FingerTreeList"]
REVISIONS = ["baseline", "context", "final"]
PAIRS = [("context", "baseline"), ("final", "baseline"), ("final", "context")]

with gzip.open(ROOT / "samples.csv.gz", "rt") as source:
    rows = list(csv.DictReader(source))
for row in rows:
    for field in ["block", "position", "iteration", "allocated_bytes"]:
        row[field] = int(row[field])
    for field in ["wall_ms", "cpu_ms"]:
        row[field] = float(row[field])

blocks = sorted({r["block"] for r in rows})
assert len(blocks) == 12
rng = random.Random(5347011731)
resamples = [rng.choices(blocks, k=len(blocks)) for _ in range(20000)]


def quantile(values, fraction):
    index = fraction * (len(values) - 1)
    low = int(index)
    return values[low] + (values[min(low + 1, len(values) - 1)] - values[low]) * (index - low)


def comparison(numerator, denominator):
    # Resample whole paired blocks, never individual iterations within a JVM.
    estimates = sorted(100 * (sum(numerator[i] for i in draw) /
                             sum(denominator[i] for i in draw) - 1) for draw in resamples)
    return dict(change_pct=100 * (st.mean(numerator.values()) / st.mean(denominator.values()) - 1),
                ci95_pct=[quantile(estimates, .025), quantile(estimates, .975)])


def summarize(select):
    result = {}
    for name in INPUTS:
        values = {}
        for revision in REVISIONS:
            selected = [r for r in rows if r["input"] == name and r["revision"] == revision and select(r)]
            grouped = {b: [r for r in selected if r["block"] == b] for b in blocks}
            assert all(grouped.values())
            counts = {len(v) for v in grouped.values()}
            assert len(counts) == 1
            means = {b: st.mean(r["wall_ms"] for r in rs) for b, rs in grouped.items()}
            values[revision] = dict(wall_ms=st.mean(means.values()),
                                    cpu_ms=st.mean(r["cpu_ms"] for r in selected),
                                    allocated_mib=st.mean(r["allocated_bytes"] for r in selected) / 1048576,
                                    fork_means_ms=means, samples_per_fork=next(iter(counts)))
        comparisons = {a + "/" + b: comparison(values[a]["fork_means_ms"], values[b]["fork_means_ms"])
                       for a, b in PAIRS}
        result[name] = dict(revisions=values, comparisons=comparisons)
    return result


summary = {
    "measured": summarize(lambda r: r["phase"] == "measurement"),
    "last_five": summarize(lambda r: r["iteration"] >= 30),
    "first_iteration": summarize(lambda r: r["iteration"] == 0),
}
forks = json.loads((ROOT / "forks.json").read_text())
elapsed = {rev: {r["block"]: r["elapsed_seconds"] for r in forks if r["revision"] == rev}
           for rev in REVISIONS}
summary["process_elapsed"] = {
    "mean_seconds": {rev: st.mean(v.values()) for rev, v in elapsed.items()},
    "comparisons": {a + "/" + b: comparison(elapsed[a], elapsed[b]) for a, b in PAIRS},
}
print(json.dumps(summary, indent=2))
