"""Normalize raw fork logs into portable, deterministic analysis inputs."""
from pathlib import Path
import csv
import gzip
import io
import json
import re


def collect(root):
    rows, forks = [], []
    for directory in sorted((root / 'runs').iterdir()):
        info = json.loads((directory / 'run.json').read_text())
        assert info['returncode'] == 0
        block, position, revision = directory.name.split('-')
        jit = []
        for line in (directory / 'samples.log').read_text().splitlines():
            fields = line.split(',')
            if fields[0] == 'ITERATION':
                iteration, phase = int(fields[1]), fields[2]
            elif fields[0] == 'COMPLETED':
                jit.append(int(fields[2]))
            elif fields[0] == 'SAMPLE' and fields[1] in ['Plain_14', 'Branching_14', 'Promise_14', 'FingerTreeList']:
                rows.append(dict(block=int(block), position=int(position), revision=revision,
                                 iteration=iteration, phase=phase, input=fields[1],
                                 wall_ms=int(fields[2])/1e6, cpu_ms=int(fields[3])/1e6,
                                 allocated_bytes=int(fields[4])))
        assert len(jit) == 35
        pauses = [float(match.group(1)) for line in (directory / 'gc.log').read_text().splitlines()
                  if 'Pause ' in line and (match := re.search(r' ([0-9.]+)ms$', line))]
        forks.append(dict(block=int(block), position=int(position), revision=revision,
                          **{key: info[key] for key in ['elapsed_seconds', 'started', 'finished', 'load_before', 'load_after']},
                          gc_pause_ms=sum(pauses), gc_pause_count=len(pauses),
                          jit_millis_after_warmup=jit[19], jit_millis_at_end=jit[-1]))
    assert len(forks) == 36 and len(rows) == 5040
    output = io.StringIO(newline='')
    writer = csv.DictWriter(output, fieldnames=list(rows[0]))
    writer.writeheader()
    writer.writerows(rows)
    (root / 'samples.csv.gz').write_bytes(gzip.compress(output.getvalue().encode(), mtime=0))
    (root / 'forks.json').write_text(json.dumps(forks, indent=2) + '\n')
