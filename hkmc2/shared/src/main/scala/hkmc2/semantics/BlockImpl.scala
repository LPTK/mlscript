package hkmc2
package semantics

import mlscript.utils.*, shorthands.*
import syntax.*
import syntax.Tree.*
import hkmc2.syntax.{PossiblyAnnotated, TypeOrTermDef}


trait BlockImpl(using Elaborator.State):
  self: Block =>
  
  val desugStmts =
    def desug(stmts: Ls[Tree]): Ls[Tree] =
      stmts match
      case Desugared(PossiblyAnnotated(anns1, td1: TypeDef))
        :: Desugared(PossiblyAnnotated(anns2, td2: TypeDef))
        :: stmts
      if td1.name == td2.name
      && td1.companion.isEmpty
      =>
        PossiblyAnnotated(anns1, td1.copy(companion = S((anns = anns2, td = td2)))) :: desug(stmts)
      case Desugared(PossiblyAnnotated(anns, td: TypeDef)) :: stmts =>
        val ctors = td.withPart.toList.flatMap:
          case Block(sts) => sts.flatMap:
            case Constructor(Block(ctors)) => ctors
            case _ => Nil
          case _ => Nil
        PossiblyAnnotated(anns, td) :: (
          ctors.map(head => PossiblyAnnotated(anns, TypeDef(Cls,
              td.name match
              case L(_) => head
              case R(name) =>
                InfixApp(head, Keyword.`extends`, name)
              ,
              N,
              N,
            )))
        ) ::: desug(stmts)
      case stmt :: stmts =>
        stmt.desugared match
        case PossiblyAnnotated(anns, h @ Hndl(body = N)) =>
          PossiblyAnnotated(anns, h.copy(body = S(Block(stmts)))) :: Nil
        case stmt => stmt :: desug(stmts)
      case Nil => Nil
    desug(stmts)
  
  val definedSymbols: Array[Str -> BlockMemberSymbol] =
    desugStmts
      .flatMap:
        case PossiblyAnnotated(_, td: TypeOrTermDef) =>
          td.name match
            case L(_) => Nil
            case R(id) =>
              id.name -> R(td) :: (
                td.symbName match
                case S(R(sid)) => id.name -> L(sid.name) :: Nil
                case _ => Nil
              )
        case _ => Nil
      .groupMap(_._1)(_._2).flatMap:
        case (nme, snmes_tds) =>
          val (symNmes, tds) = snmes_tds.partitionMap(identity)
          val sym = new BlockMemberSymbol(nme, tds)
          nme -> sym :: symNmes.map(_ -> sym)
      .toArray.sortBy(_._1)
  
end BlockImpl


