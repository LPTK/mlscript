package mlscript
package compiler

import mlscript.utils.*
import mlscript.utils.shorthands.*
import collection.mutable.{Map => MutMap, Set => MutSet}


class Program(
  classes: MutSet[ClassInfo],
  defs: MutSet[Def],
  // TODO add a cache of split defs
  main: Node,
)

class ClassInfo(
  identifier: Str,
  fields: Ls[Str],
)

class Name(str: Str)

// TODO
class DefRef(var defn: Def)
class Def(
  name: Str,
  params: Ls[Name],
  resultNum: Int,
  activeParams: Set[Int],
  activeResults: Set[Int],
  body: Node,
  // TODO rec boundaries
)


sealed trait TrivialExpr

enum Expr:
  case Ref(name: Name) extends Expr, TrivialExpr
  case Literal(lit: Lit) extends Expr, TrivialExpr
  case CtorApp(name: ClassInfo, args: Ls[TrivialExpr])
  case Select(name: Name, field: Str)
  case BasicOp(name: Str, args: Ls[TrivialExpr])
  case Lambda(name: Ls[Name], body: Node)
  case Apply(name: Name, args: Ls[TrivialExpr], body: Node)

enum Node:
  // Terminal forms:
  case Result(res: Ls[TrivialExpr])
  case Jump(joinName: Name, args: Ls[TrivialExpr])
  case Case(scrut: Name, cases: Ls[(ClassInfo, Node)])
  // Intermediate forms:
  case LetExpr(name: Name, expr: Expr, body: Node)
  case LetJoin(joinName: Name, params: Ls[Name], body: Node)
  case LetCall(resultNames: Ls[Name], defn: DefRef, args: Ls[TrivialExpr], body: Node)



// Examples:

// Invalid:
//    join f(x) = x
//    \y -> jump f(0)

