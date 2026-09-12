package hkmc2

import org.scalatest.funsuite.AnyFunSuite
import hkmc2.utils.*, shorthands.*
import io.PlatformPath.given

class WasmModuleCompilationTest extends AnyFunSuite:
  private def check(files: List[(String, String)], root: String, assertion: String): Unit =
    // Keep the temporary graph beneath the project so Node can resolve the installed Binaryen.
    val dir = os.temp.dir(dir = os.pwd, prefix = "wasm-module-test-")
    try
      files.foreach: (name, content) =>
        os.write(dir / os.RelPath(name), "#config(target: CompilationTarget.Wasm)\n" + content, createFolders = true)
      val diagnostics = collection.mutable.ArrayBuffer.empty[Diagnostic]
      given CompilerCtx = CompilerCtx.fresh(io.FileSystem.default, TestFolders.compilerPaths(os.pwd), Config.default(os.pwd))
      MLsCompiler(_ => d => { diagnostics += d; () }).compileModule(dir / root)
      assert(diagnostics.isEmpty, diagnostics.map(_.toString).mkString("\n"))
      val out = (dir / root).toString.stripSuffix(".mls") + ".mjs"
      val script = s"import assert from 'node:assert/strict'; import value, { wasmExports } from ${codegen.js.JSBuilder.makeStringLiteral(out)}; $assertion"
      val result = os.proc("node", "--input-type=module", "-e", script).call(cwd = os.pwd, check = false, stderr = os.Pipe)
      assert(result.exitCode == 0, result.out.text() + result.err.text())
    finally os.remove.all(dir)

  test("same-name function default is a callable WASM export"):
    check(List("Answer.mls" -> "fun Answer() = 42"), "Answer.mls", "assert.equal(value(), 42);")

  test("separate functions and aliases link with optimization disabled"):
    check(List(
      "Answer.mls" -> "#config(inlining: None)\nfun Answer(x) = x + 1",
      "Main.mls" -> "#config(inlining: None)\nimport \"./Answer.mls\" as A\nfun Main() = A(41)",
    ), "Main.mls", "assert.equal(value(), 42);")

  test("module default exposes initialized fields and methods"):
    check(List("Numbers.mls" -> "module Numbers with\n  val value = 40\n  fun answer() = value + 2"),
      "Numbers.mls", "assert.equal(value.value, 40); assert.equal(value.answer(), 42);")

  test("module imports resolve aliases and preserve separate string pools"):
    check(List(
      "Words.mls" -> "#config(inlining: None)\nmodule Words with\n  fun word() = \"dependency\"",
      "Main.mls" -> "#config(inlining: None)\nimport \"./Words.mls\" as WordsAlias\nmodule Main with\n  val own = \"importer\"\n  fun word() = WordsAlias.word()",
    ), "Main.mls", "assert.equal(value.own, 'importer'); assert.equal(value.word(), 'dependency');")

  test("imported classes preserve fields and constructor signatures"):
    check(List(
      "Box.mls" -> "class Box(val value)",
      "Main.mls" -> "import \"./Box.mls\"\nfun Main() = (new Box(42)).value",
    ), "Main.mls", "assert.equal(value(), 42);")

  test("local subclass invokes the imported initializer"):
    check(List(
      "Box.mls" -> "class Box(val value)",
      "Main.mls" -> "import \"./Box.mls\"\nclass Child(x) extends Box(x)\nfun Main() = (new Child(42)).Box#value",
    ), "Main.mls", "assert.equal(value(), 42);")

  test("imported classes retain distinct nominal identities despite equal layouts"):
    check(List(
      "Left.mls" -> "class Left(val value)",
      "Right.mls" -> "class Right(val value)",
      "Main.mls" -> "import \"./Left.mls\"\nimport \"./Right.mls\"\nfun Main() = if new Left(42) is Right then 0 else 42",
    ), "Main.mls", "assert.equal(value(), 42);")

  test("file-private helpers survive cross-file inlining"):
    check(List(
      "Answer.mls" -> "fun helper(x) = if x < -10 then 0 else if x < -9 then 1 else if x < -8 then 2 else if x < -7 then 3 else x + 1\nmodule Answer with\n  fun answer(x) = helper(x)",
      "Main.mls" -> "import \"./Answer.mls\"\nfun Main() = Answer.answer(41)",
    ), "Main.mls", "assert.equal(value(), 42);")

  test("dependency exceptions use the shared runtime tag"):
    check(List(
      "Fail.mls" -> "fun Fail() = throw 42",
      "Main.mls" -> "#config(inlining: None)\nimport \"./Fail.mls\"\nfun Main() = Fail()",
    ), "Main.mls", "assert.throws(() => value(), error => error === 42);")

  test("same basenames from different directories do not collide"):
    check(List(
      "left/Answer.mls" -> "fun Answer() = 20",
      "right/Answer.mls" -> "fun Answer() = 22",
      "Main.mls" -> "#config(inlining: None)\nimport \"./left/Answer.mls\" as Left\nimport \"./right/Answer.mls\" as Right\nfun Main() = Left() + Right()",
    ), "Main.mls", "assert.equal(value(), 42);")

  test("shared Unit references survive separate compilation"):
    check(List(
      "UnitValue.mls" -> "fun UnitValue() = ()",
      "Main.mls" -> "#config(inlining: None)\nimport \"./UnitValue.mls\"\nmodule Main with\n  fun own() = ()\n  fun foreign() = UnitValue()",
    ), "Main.mls", "assert.equal(value.own(), value.foreign());")

  test("class methods and virtual overrides cross module boundaries"):
    check(List(
      "Base.mls" -> "class Base() with\n  virtual fun answer(x) = x + 1",
      "Call.mls" -> "import \"./Base.mls\"\nfun Call(x: Base) = x.answer(21)",
      "Main.mls" -> "#config(inlining: None)\nimport \"./Base.mls\"\nimport \"./Call.mls\"\nclass Child() extends Base() with\n  fun answer(x) = x * 2\nfun Main() = Call(new Child())",
    ), "Main.mls", "assert.equal(value(), 42);")

  test("imported singleton fields use the original object"):
    check(List(
      "Answer.mls" -> "object Answer with\n  val value = 42",
      "Main.mls" -> "import \"./Answer.mls\"\nfun Main() = Answer.value",
    ), "Main.mls", "assert.equal(value(), 42);")

  test("diamond dependencies initialize once and share mutable storage"):
    check(List(
      "Counter.mls" -> "module Counter with\n  let count = 0\n  fun next() =\n    set count = count + 1\n    count",
      "Left.mls" -> "import \"./Counter.mls\"\nmodule Left with\n  val value = Counter.next()",
      "Right.mls" -> "import \"./Counter.mls\"\nmodule Right with\n  val value = Counter.next()",
      "Main.mls" -> "#config(inlining: None)\nimport \"./Left.mls\"\nimport \"./Right.mls\"\nmodule Main with\n  fun result() = Left.value * 10 + Right.value",
    ), "Main.mls", "assert.equal(value.result(), 12);")

  test("objects initialize after preceding file bindings"):
    check(List(
      "ObjectValue.mls" -> "let seed = 42\nobject ObjectValue with\n  val answer = seed",
      "Main.mls" -> "import \"./ObjectValue.mls\"\nfun Main() = ObjectValue.answer",
    ), "Main.mls", "assert.equal(value(), 42);")

  test("aliased class defaults remain constructors"):
    check(List(
      "Box.mls" -> "class Box(val value)",
      "Main.mls" -> "import \"./Box.mls\" as BoxAlias\nfun Main() = new BoxAlias(42)",
    ), "Main.mls", "assert.equal(typeof value(), 'object');")

  test("value and object defaults expose initialized values"):
    check(List("Answer.mls" -> "val Answer = 42"), "Answer.mls", "assert.equal(value, 42);")
    check(List("Answer.mls" -> "object Answer with\n  val value = 42"), "Answer.mls", "assert.equal(typeof value, 'object');")

  test("entry export names cannot collide with user definitions"):
    check(List("entry.mls" -> "fun entry() = 42"), "entry.mls", "assert.equal(value(), 42);")

  test("same-named imported classes keep separate types and nominal identities"):
    check(List(
      "left/Box.mls" -> "class Box(val value)",
      "right/Box.mls" -> "class Box(val value)",
      "Main.mls" -> "import \"./left/Box.mls\" as Left\nimport \"./right/Box.mls\" as Right\nfun Main() = if new Left(20) is Right then 0 else (new Left(20)).value + (new Right(22)).value",
    ), "Main.mls", "assert.equal(value(), 42);")

  test("forward references and recursion keep their declared signatures"):
    check(List("Main.mls" -> "#config(inlining: None)\nfun Main() = even(10)\nfun even(n) = if n === 0 then 42 else odd(n - 1)\nfun odd(n) = if n === 0 then 0 else even(n - 1)"),
      "Main.mls", "assert.equal(value(), 42);")

  test("inlined wrappers can retain aliased transitive imports"):
    check(List(
      "A.mls" -> "fun A(x) = if x < 0 then 0 else if x < 1 then 1 else if x < 2 then 2 else if x < 3 then 3 else x + 1",
      "B.mls" -> "import \"./A.mls\" as Alias\nfun B(x) = Alias(x)",
      "Main.mls" -> "import \"./B.mls\"\nfun Main() = B(41)",
    ), "Main.mls", "assert.equal(value(), 42);")

  test("URL-sensitive dependency paths are escaped independently of JS literals"):
    check(List(
      "a # % ü/Answer.mls" -> "fun Answer() = 42",
      "Main.mls" -> "#config(inlining: None)\nimport \"./a # % ü/Answer.mls\"\nfun Main() = Answer()",
    ), "Main.mls", "assert.equal(value(), 42);")

  test("file-wide target changes and invalid target placement report diagnostics"):
    val dir = os.temp.dir(dir = os.pwd, prefix = "wasm-config-test-")
    try
      val sources = List(
        "Nested.mls" -> "fun Nested() =\n  #config(target: Wasm)\n  42",
        "Annotated.mls" -> "@config(target: Wasm)\nfun Annotated() = 42",
        "Invalid.mls" -> "#config(target: SomethingElse)\nfun Invalid() = 42",
        "Js.mls" -> "fun Js() = 42",
        "Wasm.mls" -> "#config(target: Wasm)\nfun Wasm() = 42",
        "JsImportsWasm.mls" -> "import \"./Wasm.mls\"\nfun JsImportsWasm() = Wasm()",
        "WasmImportsJs.mls" -> "#config(target: Wasm)\nimport \"./Js.mls\"\nfun WasmImportsJs() = Js()",
        "Missing.mls" -> "fun other() = 42",
        "UsesMissing.mls" -> "#config(target: Wasm)\nimport \"./Missing.mls\"",
      )
      sources.foreach((name, source) => os.write(dir / name, source))
      val diagnostics = collection.mutable.ArrayBuffer.empty[Diagnostic]
      given CompilerCtx = CompilerCtx.fresh(io.FileSystem.default, TestFolders.compilerPaths(os.pwd), Config.default(os.pwd))
      val compiler = MLsCompiler(_ => d => { diagnostics += d; () })
      List("Nested", "Annotated", "Invalid", "JsImportsWasm", "WasmImportsJs", "UsesMissing").foreach: name =>
        diagnostics.clear()
        compiler.compileModule(dir / s"$name.mls")
        assert(diagnostics.exists(_.isInstanceOf[ErrorReport]), s"Expected a diagnostic for $name")
        assert(!os.exists(dir / s"$name.mjs"), s"Invalid $name should not emit output")
      List("Nested", "Annotated", "Invalid", "JsImportsWasm", "WasmImportsJs", "UsesMissing").foreach: name =>
        diagnostics.clear()
        compiler.compileModule(dir / s"$name.mls")
        assert(diagnostics.exists(_.isInstanceOf[ErrorReport]), s"Cached errors in $name must still be reported")
    finally os.remove.all(dir)

  test("backend caching preserves frontend identity and restores missing outputs"):
    val dir = os.temp.dir(dir = os.pwd, prefix = "wasm-cache-test-")
    try
      val a: io.Path = dir / "A.mls"
      val b: io.Path = dir / "B.mls"
      os.write(dir / "A.mls", "#config(target: Wasm)\nfun A() = 42")
      os.write(dir / "B.mls", "#config(target: Wasm)\nimport \"./A.mls\"\nfun B() = A()")
      val reads = collection.mutable.Map.empty[io.Path, Int]
      val fs = new io.FileSystem:
        def read(path: io.Path): String =
          reads(path) = reads.getOrElse(path, 0) + 1
          io.FileSystem.default.read(path)
        def write(path: io.Path, content: String): Unit = io.FileSystem.default.write(path, content)
        def exists(path: io.Path): Boolean = io.FileSystem.default.exists(path)
        def getLastChangedTimestamp(path: io.Path): Long = io.FileSystem.default.getLastChangedTimestamp(path)
      given CompilerCtx = CompilerCtx.fresh(fs, TestFolders.compilerPaths(os.pwd), Config.default(os.pwd))
      val compiler = MLsCompiler(_ => d => fail(d.toString))
      compiler.compileModule(b)
      val oldA = os.read(dir / "A.wat")
      val oldB = os.read(dir / "B.wat")
      os.remove(dir / "A.wat")
      os.remove(dir / "B.mjs")
      compiler.compileModule(b)
      assert(reads(a) == 1 && reads(b) == 1, "Backend regeneration must not re-elaborate")
      assert(os.read(dir / "A.wat") == oldA && os.read(dir / "B.wat") == oldB)
      assert(os.exists(dir / "B.mjs"))
    finally os.remove.all(dir)

  test("concurrent roots share one backend artifact without partial output"):
    import scala.concurrent.{Await, ExecutionContext, Future}
    import scala.concurrent.duration.*
    val pool = java.util.concurrent.Executors.newFixedThreadPool(2)
    given ExecutionContext = ExecutionContext.fromExecutor(pool)
    val dir = os.temp.dir(dir = os.pwd, prefix = "wasm-concurrent-test-")
    try
      os.write(dir / "A.mls", "#config(target: Wasm)\nclass A(val value)")
      List("B", "C").foreach: name =>
        os.write(dir / s"$name.mls", s"#config(target: Wasm)\nimport \"./A.mls\"\nfun $name() = (new A(42)).value")
      given CompilerCtx = CompilerCtx.fresh(io.FileSystem.default, TestFolders.compilerPaths(os.pwd), Config.default(os.pwd))
      val compiler = MLsCompiler(_ => d => fail(d.toString))
      Await.result(Future.sequence(List("B", "C").map(name => Future(compiler.compileModule(dir / s"$name.mls")))), 30.seconds)
      val b = codegen.js.JSBuilder.makeStringLiteral((dir / "B.mjs").toString)
      val c = codegen.js.JSBuilder.makeStringLiteral((dir / "C.mjs").toString)
      val result = os.proc("node", "--input-type=module", "-e",
        s"import assert from 'node:assert/strict'; const [b, c] = await Promise.all([import($b), import($c)]); assert.equal(b.default(), 42); assert.equal(c.default(), 42);").call(check = false, stderr = os.Pipe)
      assert(result.exitCode == 0, result.err.text())
    finally
      pool.shutdownNow()
      os.remove.all(dir)

  test("unsupported imports and first-class modules report errors on every request"):
    val dir = os.temp.dir(dir = os.pwd, prefix = "wasm-errors-test-")
    try
      val sources = List(
        "Bare.mls" -> "import \"node:fs\"\nfun Bare() = 42",
        "Explicit.mls" -> "import \"./foreign.mjs\"\nfun Explicit() = 42",
        "Dynamic.mls" -> "module M with\n  val value = 42\nfun Dynamic() = M",
        "Multiple.mls" -> "module Multiple with\n  fun f(x)(y) = x + y",
      )
      os.write(dir / "foreign.mjs", "export default {};")
      sources.foreach((name, code) => os.write(dir / name, "#config(target: Wasm)\n" + code))
      given CompilerCtx = CompilerCtx.fresh(io.FileSystem.default, TestFolders.compilerPaths(os.pwd), Config.default(os.pwd))
      val diagnostics = collection.mutable.ArrayBuffer.empty[Diagnostic]
      val compiler = MLsCompiler(_ => d => { diagnostics += d; () })
      for _ <- 0 until 2; (name, _) <- sources do
        diagnostics.clear()
        compiler.compileModule(dir / name)
        assert(diagnostics.exists(_.isInstanceOf[ErrorReport]), s"Expected an error for $name")
        assert(!os.exists(dir / name.stripSuffix(".mls").concat(".mjs")))
    finally os.remove.all(dir)
