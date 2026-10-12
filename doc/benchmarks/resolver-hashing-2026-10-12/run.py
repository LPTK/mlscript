from pathlib import Path
import subprocess, sys, json, os, time, datetime, itertools, random, statistics, shutil

# Usage: python3 run.py REPOSITORY JAVA CLASSPATH_DIRECTORY OUTPUT_DIRECTORY
ROOT = Path(sys.argv[1]).resolve()
JAVA = str(Path(sys.argv[2]).resolve())
BUILDS = Path(sys.argv[3]).resolve()
OUT = Path(sys.argv[4]).resolve()
OUT.mkdir(parents=True, exist_ok=True)
metadata = json.loads((Path(__file__).resolve().parent / 'metadata.json').read_text())
metadata['java'] = JAVA

def run(label, directory, warmups, measurements):
    directory.mkdir(parents=True)
    tmp = directory / 'tmp'
    tmp.mkdir()
    cp = (BUILDS / label / 'classpath.txt').read_text().strip()
    command = [metadata['java'], *metadata['jvm_options'], '-Djava.io.tmpdir=' + str(tmp),
               '-Xlog:gc:file=' + str(directory / 'gc.log'),
               '-cp', cp, 'hkmc2.semantics.ResolverTimingBenchmark', str(warmups), str(measurements)]
    info = {'label': label, 'started': datetime.datetime.now(datetime.timezone.utc).isoformat(),
            'load_before': os.getloadavg(), 'warmups': warmups, 'measurements': measurements, 'command': command}
    print('START', directory.name, label, flush=True)
    start = time.monotonic()
    with (directory / 'samples.log').open('w') as stdout, (directory / 'stderr.log').open('w') as stderr:
        result = subprocess.run(command, cwd=ROOT, stdout=stdout, stderr=stderr)
    info.update(elapsed_seconds=time.monotonic()-start, returncode=result.returncode,
                load_after=os.getloadavg(), finished=datetime.datetime.now(datetime.timezone.utc).isoformat())
    (directory / 'run.json').write_text(json.dumps(info, indent=2) + '\n')
    if result.returncode:
        print((directory / 'stderr.log').read_text(), flush=True)
        raise RuntimeError('Failed fork: ' + str(directory))
    samples = {}
    phase = None
    for line in (directory / 'samples.log').read_text().splitlines():
        fields = line.split(',')
        if fields[0] == 'ITERATION': phase = fields[2]
        if fields[0] == 'SAMPLE' and phase == 'measurement':
            samples.setdefault(fields[1], []).append(int(fields[2])/1e6)
    assert all(len(v)==measurements for v in samples.values()) and len(samples)==25, samples
    selected = {k: round(statistics.mean(samples[k]), 3) for k in ['Plain_14','Branching_14','Promise_14','FingerTreeList']}
    print('DONE', directory.name, label, round(info['elapsed_seconds'],1), selected, flush=True)
    shutil.rmtree(tmp)

if __name__ == "__main__":
    permutations = list(itertools.permutations(['baseline', 'context', 'final'])) * 2
    random.Random(5347011731).shuffle(permutations)
    plan = {'warmup_iterations': 20, 'measurement_iterations': 15, 'orders': permutations,
            'forks_per_revision': 12, 'seed': 5347011731}
    (OUT / 'plan.json').write_text(json.dumps(plan, indent=2)+'\n')
    for block, order in enumerate(permutations):
        for position, label in enumerate(order):
            run(label, OUT / 'runs' / ('%02d-%d-%s' % (block, position, label)), 20, 15)

    from collect import collect
    collect(OUT)
