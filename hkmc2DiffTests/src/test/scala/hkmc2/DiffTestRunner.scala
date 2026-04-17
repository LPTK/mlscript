package hkmc2

import org.scalatest.{funsuite, ParallelTestExecution}
import org.scalatest.time._
import org.scalatest.concurrent.{TimeLimitedTests, Signaler}
import os.up

import mlscript.utils._, shorthands._
import io.PlatformPath.given, io.FileSystem


// * Note: we used to use:
// *    class AllTests extends org.scalatest.Suites(
// *      new CompileTestRunner(DiffTestRunner.State){},
// *      new DiffTestRunner(DiffTestRunner.State){},
// *    )
// * but this (very surprisinbgly) disables parallel execution each individual suite.
// * So now we just split tests into separate SBT projects.


object DiffTestRunner:
  
  class State:
    
    val cctx: CompilerCtx = CompilerCtx.fresh(io.FileSystem.default)
    
    val pwd = os.pwd
    
    // println(s"INITIALIZING DiffTestRunner.State in ${pwd}")
    
    val workingDir = if pwd.last == "hkmc2DiffTests"
      then pwd/up // For some reason, when run from ~hkmc2JVM/Test/run in sbt, the pwd is ".../hkmc2/jvm"
      else pwd
    // val dir = workingDir/"hkmc2"/"shared"/"src"/"test"/"mlscript"
    
    val dir = workingDir/"hkmc2"/"shared"/"src"/"test"
    
    // To be overridden in subproject-specific State classes
    def testDir: os.Path = dir
    
    val validExt = Set("mls")
    
    val allFiles = os.walk(testDir)
      .filter(_.toIO.isFile)
      .filter(_.ext in validExt)
    
    def filter(file: os.RelPath): Bool = true
    
    val TimeLimit =
      if sys.env.get("CI").isDefined then Span(60, Seconds)
      else Span(10, Seconds)
    
  end State
  
  class StateWithGit extends State:
    
    println(s"Running git in ${dir}...")
    
    // * Aggregate unstaged modified files to only run the tests on them, if there are any
    val modified: Set[os.RelPath] =
      try os.proc("git", "status", "--porcelain", dir).call().out.lines().iterator.flatMap { gitStr =>
        println(" [git] " + gitStr)
        val prefix = gitStr.take(2)
        val filePath = os.RelPath(gitStr.drop(3))
        if prefix =:= "A " || prefix =:= "M " || prefix =:= "R " || prefix =:= "D " then
          N // * Disregard modified files that are staged
        else if filePath.ext =/= "mls" then N
        else S(filePath)
      }.toSet catch
        case err: Throwable =>
          System.err.println("/!\\ git command failed with: " + err)
          Set.empty
    
    if modified.isEmpty then
      println("No test file with unstaged changes detected; no test will run.")
    
    override def filter(file: os.RelPath): Bool =
      // println(s"Filtering: $file ${modified(file)}")
      modified(file)
    
  end StateWithGit
  
  lazy val State = new State
  
end DiffTestRunner


private val currentTest = new ThreadLocal[String]()
private val testThreads = new collection.concurrent.TrieMap[Thread, String]()
// var cnt = 0

class DiffTestRunner
  extends DiffTestRunnerBase(DiffTestRunner.State)
  with ParallelTestExecution:
  
  override protected def excludedDiffDirs: Ls[os.Path] =
    TestFolders.mainExcludedDiffDirs(state.workingDir)

class DiffTestRunnerBase(val state: DiffTestRunner.State)
  extends funsuite.AnyFunSuite
  with TimeLimitedTests
  // with org.scalatest.concurrent.Eventually
  // with org.scalatest.concurrent.TimeLimits
:
  import state.*
  
  private val inParallel = isInstanceOf[ParallelTestExecution]
  
  val timeLimit = TimeLimit
  
  // cnt += 1
  // println(s"COUNT ${cnt}")
  
  var testName: Str = "‹unknown›"
  
  override def withFixture(test: NoArgTest) = {
    println(s"Running test: ${test.name} in thread ${Thread.currentThread()} (parallel: $inParallel)")
    testThreads.put(Thread.currentThread(), test.name)
    currentTest.set(test.name)
    testName = test.name
    try super.withFixture(test)
    finally
      currentTest.remove()
      println(s"<<< FINISHED TEST: ${test.name}")
      System.out.flush()
  }
  // /* 
  override val defaultTestSignaler: Signaler = new Signaler {
    @annotation.nowarn("msg=method stop in class Thread is deprecated")
    def apply(testThread: Thread): Unit = {
      val name = Option(currentTest.get()).getOrElse("<unknown>")
      // println(s"!! TIMEOUT in test: $name !! stopping thread $testThread")
      // println(s"!! ${testThreads}")
      // println(s"!! ${testThreads}")
      // println(s"!! TIMEOUT in test: ${testThreads.get(testThread).getOrElse("<unknown>")} !! shutting down")
      println(s"!! TIMEOUT in test: ${testName} !! shutting down")
      /* 
      // println(MethodUtils.invokeMethod(active, true, "get", t))
      // val m: Method = classOf[ThreadLocal].getDeclaredMethod("get", Thread.class); m.setAccessible(true); m.invoke(threadLocal)
      // val m = currentTest.getClass.getDeclaredMethod("get", Thread.currentThread.getClass)
      val m = currentTest.getClass.getDeclaredMethod("get", classOf[Thread])
      m.setAccessible(true)
      println(m.invoke(currentTest))
      */
      
      // testThread.stop()
      // testThread.interrupt()
      System.exit(-1)
    }
  }
  // */
  /* 
  override val defaultTestSignaler: Signaler = new Signaler:
    @annotation.nowarn("msg=method stop in class Thread is deprecated") def apply(testThread: Thread): Unit =
      println(s"[${Thread.currentThread().getName}] running ${testThread.getName} has run out of time!")
      println(s"!! Test at $testThread has run out out time !! stopping..." +
        "\n\tNote: you can increase this limit by changing DiffTests.TimeLimit")
      // * Thread.stop() is considered bad practice because normally it's better to implement proper logic
      // * to terminate threads gracefully, avoiding leaving applications in a bad state.
      // * But here we DGAF since all the test is doing is running a type checker and some Node REPL,
      // * which would be a much bigger pain to make receptive to "gentle" interruption.
      // * It would feel extremely wrong to intersperse the pure type checker algorithms
      // * with ugly `Thread.isInterrupted` checks everywhere...
      testThread.stop().concurrent
  */
  
  protected def excludedDiffDirs: Ls[os.Path] =
    TestFolders.alwaysExcludedDiffDirs(state.workingDir)
  
  protected lazy val diffTestFiles = allFiles.filter: file =>
    (
      !TestFolders.isExcluded(file, excludedDiffDirs)
      && filter(file.relativeTo(state.workingDir))
    )
  
  protected def createDiffMaker(
    file: os.Path,
    preludePath: os.Path,
    predefPath: os.Path,
    relativeName: String
  ): DiffMaker =
    new MainDiffMaker(workingDir.toString, file, preludePath, predefPath, relativeName):
      def cctx = state.cctx
  
  diffTestFiles.foreach: file =>
    
    val basePath = file.segments.drop(dir.segmentCount).toList.init
    val relativeName = basePath.map(_ + "/").mkString + file.baseName
    
    import scala.concurrent.duration._
    // eventually(timeout(1.minutes), interval(5.seconds)) {
    test(relativeName):
      
      // failAfter(2.seconds) {
      val preludePath = dir/"mlscript"/"decls"/"Prelude.mls"
      val predefPath = dir/"mlscript-compile"/"Predef.mls"
      
      val dm = createDiffMaker(file, preludePath, predefPath, relativeName)
      
      dm.run()
      
      if dm.failures.nonEmpty then
        fail(s"Unexpected test outcome(s) at: " +
          dm.failures.distinct.map("\n\t"+relativeName+"."+file.ext+":"+_).mkString(", "))
    // }
  // }
end DiffTestRunnerBase
