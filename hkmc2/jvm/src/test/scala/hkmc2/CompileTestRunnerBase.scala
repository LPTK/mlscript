package hkmc2

import org.scalatest.{funsuite, ParallelTestExecution}
import org.scalatest.time._
import org.scalatest.concurrent.{TimeLimitedTests, Signaler}

import mlscript.utils._, shorthands._
import io.PlatformPath.given


// Reusable base class for compile test runners. Subclasses provide the
// directories to scan and the compiler context to use, and this base class
// handles walking directories, filtering for mlscript-compile files,
// and registering ScalaTest tests.
abstract class CompileTestRunnerBase(
  compileDirs: Ls[os.Path],
  excludedDirs: Ls[os.Path] = Nil,
)
  extends funsuite.AnyFunSuite
  with ParallelTestExecution
  with TimeLimitedTests
:
  
  
  // TODO: share logic with DiffTestRunner
  val timeLimit = Span(15, Seconds)
  var testName: Str = "‹unknown›"
  override def withFixture(test: NoArgTest) =
    testName = test.name
    super.withFixture(test)
  override val defaultTestSignaler: Signaler = new Signaler:
    @annotation.nowarn("msg=method stop in class Thread is deprecated") def apply(testThread: Thread): Unit =
      println(s"[${Thread.currentThread().getName}] running ${testThread.getName} has run out of time!")
      println(s"!! Test $testName at $testThread has run out out time !! stopping..." +
        "\n\tNote: you can increase this limit by changing DiffTests.TimeLimit")
      // * Thread.stop() is considered bad practice because normally it's better to implement proper logic
      // * to terminate threads gracefully, avoiding leaving applications in a bad state.
      // * But here we DGAF since all the test is doing is running a type checker and some Node REPL,
      // * which would be a much bigger pain to make receptive to "gentle" interruption.
      // * It would feel extremely wrong to intersperse the pure type checker algorithms
      // * with ugly `Thread.isInterrupted` checks everywhere...
      try testThread.stop()
      catch _ =>
        // * Thread.stop() is no longer supported in recent JVMs,
        // * and unfortunately there is no good alternative other than terminating the entire process.
        // * (Perhaps using Futures might be a viable alternative in the *future*, though.)
        System.exit(-1)
  
  
  
  given CompilerCtx = cctx
  
  protected def cctx: CompilerCtx
  
  private val inParallel = isInstanceOf[ParallelTestExecution]
  
  val workingDir: os.Path = os.pwd
  
  val mainTestDir: os.Path = TestFolders.mainTestDir(workingDir)
  
  val validExt = Set("mls")
  
  for dir <- compileDirs do {
    val allFiles = os.walk(dir)
      .filter(_.toIO.isFile)
      .filter(_.ext in validExt)
    
    lazy val compileTestFiles = allFiles.filter: file =>
      file.segments.contains("mlscript-compile")
        && !TestFolders.isExcluded(file, excludedDirs)
    
    compileTestFiles.foreach: file =>
      
      val basePath = file.segments.drop(dir.segmentCount).toList.init
      val relativeName = basePath.map(_ + "/").mkString + file.baseName
      
      test(relativeName):
        
        this.synchronized:
          println(s"Compiling: $relativeName")
        
        // * Stack safety relies on the fact that runtime uses while loops for resumption
        // * and does not create extra stack depth. Hence, while loop rewriting should be disabled here.
        // * (It used to be on by default, but now is off by default, so nothing to do.)
        given Config = Config.default(mainTestDir)
        
        // Synchronize diagnostic output to avoid interleaving since the compiler tests run in parallel.
        val wrap: (=> Unit) => Unit = body => this.synchronized(body)
        val report = ReportFormatter(System.out.println, colorize = true, wrap = Some(wrap))
        val compiler = MLsCompiler(
          paths = new MLsCompiler.Paths:
            val preludeFile = mainTestDir / "mlscript" / "decls" / "Prelude.mls"
            val runtimeFile = mainTestDir / "mlscript-compile" / "Runtime.mjs"
            val termFile = mainTestDir / "mlscript-compile" / "Term.mjs",
          mkRaise = report.mkRaise
        )
        compiler.compileModule(file)
        
        if report.badLines.nonEmpty then
          fail(s"Unexpected diagnostic at: " +
            report.badLines.distinct.sorted
              .map("\n\t"+relativeName+"."+file.ext+":"+_).mkString(", "))
  }

end CompileTestRunnerBase
