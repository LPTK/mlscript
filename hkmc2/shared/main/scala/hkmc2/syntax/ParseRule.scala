package hkmc2
package syntax

import sourcecode.{Name, Line}
import mlscript.utils.*, shorthands.*
import hkmc2.Message._
import BracketKind._


enum Alt[+A]:
  case Kw[Rest](kw: Keyword)(val rest: ParseRule[Rest]) extends Alt[Rest]
  case Expr[Rest, +Res](rest: ParseRule[Rest])(val k: (Tree, Rest) => Res) extends Alt[Res]
  case Blk[Rest, +Res](rest: ParseRule[Rest])(val k: (Tree, Rest) => Res) extends Alt[Res]
  case End(a: A)
  
  def map[B](f: A => B): Alt[B] = 
    this match
    case k: Kw[?] => Kw(k.kw)(k.rest.map(f))
    case e: Expr[rest, A] => Expr(e.rest)((tree, rest) => f(e.k(tree, rest)))
    case End(a) => End(f(a))
    case b: Blk[rest, A] => Blk(b.rest)((tree, rest) => f(b.k(tree, rest)))

class ParseRule[+A](val name: Str)(alts: Alt[A]*):
  def map[B](f: A => B): ParseRule[B] =
    ParseRule(name)(alts.map(_.map(f))*)
  
  override def toString: Str = s"$name ::= " + alts.mkString(" | ")
  
  lazy val emptyAlt = alts.collectFirst { case Alt.End(a) => a }
  lazy val kwAlts = alts.collect { case k @ Alt.Kw(kw) => kw.name -> k.rest }.toMap
  lazy val exprAlt = alts.collectFirst { case alt: Alt.Expr[rst, A] => alt }
  lazy val blkAlt = alts.collectFirst { case alt: Alt.Blk[rst, A] => alt }
  
  def whatComesAfter: Str =
    alts.map:
      case Alt.Kw(kw) => s"'${kw.name}' keyword"
      case Alt.Expr(rest) => "expression"
      case Alt.Blk(rest) => "indented block"
      case Alt.End(_) => "end of input"
    .toList
    match
      case Nil => "nothing at all"
      case str :: Nil => str
      case str1 :: str2 :: Nil => s"$str1 or $str2"
      case strs => strs.init.mkString(", ") + ", or " + strs.last

object ParseRule:
  import Keyword.*
  import Alt.*
  import Tree.*
  
  val standaloneExpr =
    Expr(ParseRule("expression")(End(())))((l, _: Unit) => l)
  
  def modified(kw: Keyword) =
    Kw(kw)(ParseRule(s"modifier keyword '${kw.name}'")(standaloneExpr)).map(Tree.Modified(kw, _))
  
  val typeDeclTemplate: Alt[Opt[Tree]] =
    Kw(`with`):
      ParseRule("type declaration body")(
        Blk(
          ParseRule("type declaration block"):
            End(())
        ) { case (res, ()) => S(res) }
      )
  
  def termDefBody(k: TermDefKind): ParseRule[Tree] = 
      ParseRule(s"'${k.str}' binding keyword")(
        Expr(
          ParseRule(s"'${k.str}' binding head")(
            Expr(
              ParseRule(s"'${k.str}' binding name part")(
                funBody(k).map(b => (b, N)),
                funSign(k),
              )
            ) { case (sym, (sign, rhs)) => (S(sym), sign, rhs) },
            funBody(k).map(b => (N, N, b)),
            funSign(k).map(sb => (N, sb._1, sb._2)),
          )
        ) {
          case (lhs, (N, sign, rhs)) => TermDef(N, S(lhs), sign, rhs)
          case (lhs, (sym, sign, rhs)) => TermDef(S(lhs), sym, sign, rhs)
        }
      )
  
  val typeDeclBody: ParseRule[TypeDecl] =
    ParseRule("type declaration start"):
      Expr(
        ParseRule("type declaration head")(
          End((N, N)),
          Kw(`extends`):
            ParseRule("extension clause")(
              // End((N, N)),
              Expr(
                ParseRule("parent specification")(
                  typeDeclTemplate,
                  End(N),
                )
              ) { case (ext, bod) => (S(ext), bod) }
            ),
          typeDeclTemplate.map(bod => (N, bod)),
        )
      // ) { case (head, ext, bod) => TypeDecl(head, ext, bod) }
      ) { case (head, (ext, bod)) => TypeDecl(head, ext, bod) }
  
  val prefixRules: ParseRule[Tree] = ParseRule("start of statement")(
    Kw(`let`):
      ParseRule("'let' binding keyword")(
        Expr(
          ParseRule("'let' binding head"):
            Kw(`=`):
              ParseRule("'let' binding equals sign"):
                Expr(
                  ParseRule("'let' binding right-hand side")(
                    Kw(`in`):
                      ParseRule("'let' binding `in` clause"):
                        Expr(ParseRule("'let' binding body")(End(())))((body, _: Unit) => S(body))
                    ,
                    End(N)
                  )
                ) { (rhs, body) => (rhs, body) }
        ) { case (lhs, (rhs, body)) => Let(lhs, rhs, body) }
        ,
        // Blk(
        //   ParseRule("let block"):
        //     Kw(`class`):
        //       typeDeclBody
        // ) { case (lhs, body) => Let(lhs, lhs, body) }
      )
    ,
    Kw(`if`):
      ParseRule("ite keyword")(
        Expr(
          ParseRule("ite head"):
            Kw(`then`):
              ParseRule("ite equals sign"):
                Expr(
                  ParseRule("ite right-hand side")(
                    Kw(`else`):
                      ParseRule("ite `in` clause"):
                        Expr(ParseRule("ite body")(End(())))((body, _: Unit) => S(body))
                    ,
                    End(N)
                  )
                ) { (rhs, body) => (rhs, body) }
        ) { case (lhs, (rhs, body)) => If(lhs, rhs, body) }
        ,
      )
    ,
    Kw(`fun`)(termDefBody(Fun)),
    Kw(`val`)(termDefBody(Val)),
    Kw(`type`)(typeDeclBody),
    Kw(`class`)(typeDeclBody),
    Kw(`trait`)(typeDeclBody),
    Kw(`module`)(typeDeclBody),
    modified(`abstract`),
    modified(`mut`),
    modified(`virtual`),
    modified(`override`),
    modified(`declare`),
    modified(`public`),
    modified(`private`),
    standaloneExpr,
  )
  
  def funSign(k: TermDefKind): Alt[(S[Tree], Opt[Tree])] =
    Kw(`:`):
      ParseRule(s"'${k.str}' binding colon"):
        Expr(
          ParseRule(s"'${k.str}' binding signature")(
            funBody(k),
            End(N),
          )
        ) { case (sign, rhs) => (S(sign), rhs) }
  
  def funBody(k: TermDefKind): Alt[S[Tree]] =
    Kw(`=`):
      ParseRule(s"'${k.str}' binding equals sign"):
        Expr(
          ParseRule(s"'${k.str}' binding right-hand side")(End(()))
        ) { case (rhs, ()) => S(rhs) }
  
  val infixRules: ParseRule[Tree => Tree] = ParseRule("continuation of statement")(
    // TODO dedup:
    Kw(`and`):
      ParseRule("'and' operator")(
        Expr(ParseRule("'and' operator right-hand side")(End(())))(
          (rhs, _: Unit) => lhs => InfixApp(lhs, `and`, rhs))
      ),
    Kw(`or`):
      ParseRule("'or' operator")(
        Expr(ParseRule("'or' operator right-hand side")(End(())))(
          (rhs, _: Unit) => lhs => InfixApp(lhs, `or`, rhs))
      ),
    Kw(`then`):
      ParseRule("'then' operator")(
        Expr(ParseRule("'then' operator right-hand side")(End(())))(
          (rhs, _: Unit) => lhs => InfixApp(lhs, `then`, rhs))
      ),
  )


