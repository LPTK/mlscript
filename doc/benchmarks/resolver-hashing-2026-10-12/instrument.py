# Instrument an isolated checkout of one measured revision, before compiling it.
# Uses the unchanged SubstitutionGrowthTest inputs and assertions.
from pathlib import Path
import sys

MAIN = r'''
/** Runs the existing growth-test inputs in fresh suites/CompilerCtxs. All timing
  * counters are outside production code, and failures terminate the fork.
  */
object ResolverTimingBenchmark:
  val bean: com.sun.management.ThreadMXBean = java.lang.management.ManagementFactory.getThreadMXBean match
    case value: com.sun.management.ThreadMXBean => value
    case _ => throw new IllegalStateException("Thread allocation counters unavailable")

  def main(args: Array[String]): Unit =
    val warmups = args(0).toInt
    val measurements = args(1).toInt
    val reporter = new org.scalatest.Reporter:
      def apply(event: org.scalatest.events.Event): Unit = event match
        case failed: org.scalatest.events.TestFailed => System.err.println(failed)
        case aborted: org.scalatest.events.SuiteAborted => System.err.println(aborted)
        case _ => ()
    val tests = List(
      "substitutions through irrelevant generic scopes stay bounded",
      "FingerTreeList constructor-pattern inference stays bounded",
      "promises through irrelevant generic scopes stay bounded")
    val runtime = java.lang.management.ManagementFactory.getRuntimeMXBean
    val compiler = java.lang.management.ManagementFactory.getCompilationMXBean
    println(s"JVM,${System.getProperty("java.runtime.version")},${System.getProperty("java.vm.name")},${runtime.getInputArguments}")
    for iteration <- 0 until warmups + measurements do
      println(s"ITERATION,$iteration,${if iteration < warmups then "warmup" else "measurement"},${compiler.getTotalCompilationTime}")
      val suite = new SubstitutionGrowthTest
      for test <- tests do
        val status = suite.run(Some(test), org.scalatest.Args(reporter))
        status.waitUntilCompleted()
        assert(status.succeeds(), test)
      println(s"COMPLETED,$iteration,${compiler.getTotalCompilationTime}")
'''

def instrument(data):
    s = data.decode()
    start = '  private def measure(file: os.Path): Measurement =\n'
    assert s.count(start) == 1
    s = s.replace(start, start + '''    val timingBean = ResolverTimingBenchmark.bean
    val timingThread = Thread.currentThread().threadId()
    val timingBytes = timingBean.getThreadAllocatedBytes(timingThread)
    val timingCpu = timingBean.getThreadCpuTime(timingThread)
    val timingStart = System.nanoTime()
''')
    end = '    val state = artifact.state.newResolverState'
    assert s.count(end) == 1
    s = s.replace(end, '''    val timingElapsed = System.nanoTime() - timingStart
    val timingCpuElapsed = timingBean.getThreadCpuTime(timingThread) - timingCpu
    val timingAllocated = timingBean.getThreadAllocatedBytes(timingThread) - timingBytes
    println(s"SAMPLE,${file.baseName},$timingElapsed,$timingCpuElapsed,$timingAllocated")
''' + end)
    return (s + '\n\n' + MAIN).encode()

root = Path(sys.argv[1]).resolve()
path = root / "hkmc2/jvm/src/test/scala/hkmc2/SubstitutionGrowthTest.scala"
data = path.read_bytes()
assert b"ResolverTimingBenchmark" not in data, "Already instrumented"
path.write_bytes(instrument(data))
