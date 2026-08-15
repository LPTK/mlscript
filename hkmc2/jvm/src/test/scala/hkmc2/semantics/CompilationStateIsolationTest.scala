package hkmc2
package semantics

import org.scalatest.funsuite.AnyFunSuite

import hkmc2.syntax.{Cls, Tree}
import hkmc2.semantics.Elaborator.{Ctx, State}


class CompilationStateIsolationTest extends AnyFunSuite:

  test("foreign references do not mutate their defining compilation state"):
    val definingState = new State
    val sym = VarSymbol(Tree.Ident("x"))(using definingState)
    val importingState = new State

    val localRef = sym.ref()(using definingState)
    val firstForeignRef = sym.ref()(using importingState)
    val secondForeignRef = sym.ref()(using importingState)

    assert(sym.refsNumber == 1)
    assert(localRef.refNum == 0)
    assert(firstForeignRef.refNum == 1)
    assert(secondForeignRef.refNum == 2)

  test("legacy resolution does not introduce experimental captures"):
    val state = new State
    given State = state
    val outer = VarSymbol(Tree.Ident("outer"))
    val inner = ClassSymbol(Tree.DummyTypeDef(Cls), Tree.Ident("Inner"))
    val bodyCtx = (Ctx.empty + ("outer" -> outer)).nestInner(inner).nestLocal("body")

    locally:
      given Config = Config.default(io.Path("/"))
      assert(!bodyCtx.get("outer").get.isInstanceOf[Ctx.CaptElem])

    locally:
      given Config = Config.default(io.Path("/")).copy(language = Config.Language.v0_3_x)
      assert(bodyCtx.get("outer").get.isInstanceOf[Ctx.CaptElem])

end CompilationStateIsolationTest
