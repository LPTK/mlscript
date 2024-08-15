package hkmc2
package semantics

import mlscript.utils.*, shorthands.*
import syntax.*
import scala.annotation.tailrec

final case class Branch(scrutinee: Term.Ref, pattern: Pattern, continuation: Split) extends AutoLocated:
  override def children: List[Located] = scrutinee :: pattern :: continuation :: Nil
  def showDbg: String = s"${scrutinee.sym.nme} is ${pattern.showDbg} -> { ${continuation.showDbg} }"

object Branch:
  def apply(scrutinee: Term.Ref, continuation: Split): Branch =
    Branch(scrutinee, Pattern.LitPat(Tree.BoolLit(true)), continuation)

enum Split extends AutoLocated:
  case Cons(head: Branch, tail: Split)
  case Let(rec: Bool, name: VarSymbol, term: Term, tail: Split)
  case Else(default: Term)
  case Nil

  @inline def ::(head: Branch): Split = Split.Cons(head, this)
  
  lazy val isFull: Bool = this match
    case Split.Cons(_, tail) => tail.isFull
    case Split.Let(_, _, _, tail) => tail.isFull
    case Split.Else(_) => true
    case Split.Nil => false

  lazy val isEmpty: Bool = this match
    case Split.Let(_, _, _, tail) => tail.isEmpty
    case Split.Else(_) | Split.Cons(_, _) => false
    case Split.Nil => true

  final override def children: Ls[Located] = this match
    case Split.Cons(head, tail) => List(head, tail)
    case Split.Let(rec, name, term, tail) => List(name, term, tail)
    case Split.Else(default) => List(default)
    case Split.Nil => List()

  final def showDbg: String = this match
    case Split.Cons(head, tail) => s"${head.showDbg}; ${tail.showDbg}"
    case Split.Let(rec, name, term, tail) => s"let ${name.name} = ${term.showDbg}; ${tail.showDbg}"
    case Split.Else(default) => s"else ${default.showDbg}"
    case Split.Nil => ""

end Split

object Split:
  def default(term: Term): Split = Split.Else(term)
