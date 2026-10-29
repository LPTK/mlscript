package hkmc2
package semantics

import org.scalatest.funsuite.AnyFunSuite
import hkmc2.utils.*, shorthands.*
import syntax.Tree
import codegen.{Erasure, ErasedType}
import Term.*


/** Source diff tests cannot require two AST edges to reference the exact same
  * object. Check the unsharing law: each occurrence owns fresh binders and nominal
  * types, while references to an enclosing binding still share that binding.
  */
class CloneSharingTest extends AnyFunSuite:
  test("cloning unshares binding occurrences without unsharing their captured environment"):
    import io.PlatformPath.given
    given Elaborator.State = new Elaborator.State
    given Elaborator.Ctx = Elaborator.Ctx.empty
    given Config = Config.default(TestFolders.mainTestDir(os.pwd))
    given Raise = diagnostic => fail(diagnostic.theMsg)
    given Erasure = Erasure(UnitVal())
    val tree = Tree.DummyTypeDef(syntax.Cls)
    val originalClass = tree.symbol match
      case symbol: ClassSymbol => symbol
      case _ => fail("Expected a class symbol")
    val member = BlockMemberSymbol("Box", tree :: Nil)
    val definition = ClassDef.Plain(N, syntax.Cls, originalClass, member, Nil, N,
      ObjBody(Blk(Nil, UnitVal())), N, Nil, Nil, N, Nil)(N, N, N)
    originalClass.defn = S(definition)
    val captured = VarSymbol(Tree.Ident("captured"),
      erasedType = S(ErasedType.ValueLike(S(false), originalClass)), mut = false)
    val local = VarSymbol(Tree.Ident("local"),
      erasedType = S(ErasedType.ValueLike(S(false), originalClass)), mut = false)
    val shared = Blk(definition :: LetDecl(local, Nil)(N) :: Nil,
      Try(SimpleRef(local)(N), SimpleRef(captured)(N)))
    // The same declaration also occurs outside the shared subtree. The captured
    // slot's type refers to that lexical binding, not either nested occurrence.
    val source = Blk(definition :: Nil, Blk(LetDecl(captured, Nil)(N) :: Nil, Try(shared, shared)))

    // Repeating the entire copy must also leave the source and previous copies independent.
    val classes = (1 to 2).flatMap: _ =>
      source.mkBlkClone match
        case Blk((outerClass: ClassDef) :: Nil,
            Blk(LetDecl(freshCapture: VarSymbol, _) :: Nil, Try(first: Blk, second: Blk))) =>
          assert(freshCapture isnt captured)
          assert(freshCapture.erasedType.map(_.sym).contains(outerClass.sym))
          val copied = List(first, second).map:
            case Blk((cls: ClassDef) :: LetDecl(fresh: VarSymbol, _) :: Nil,
                Try(SimpleRef(localRef), SimpleRef(captureRef))) =>
              assert(fresh isnt local)
              assert(localRef is fresh)
              assert(captureRef is freshCapture)
              assert(fresh.erasedType.map(_.sym).contains(cls.sym))
              assert(cls.sym isnt originalClass)
              (cls.sym, fresh)
            case _ => fail("Expected a copied class and local binding")
          assert(copied.map(_._2).distinct.size == 2)
          outerClass.sym :: copied.map(_._1)
        case _ => fail("Expected two copied occurrences with one captured environment")
    assert(classes.distinct.size == 6)
    assert(local.erasedType.map(_.sym).contains(originalClass))
    assert(originalClass.defn.contains(definition))
