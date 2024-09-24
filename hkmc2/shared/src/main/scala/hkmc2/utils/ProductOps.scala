package hkmc2.utils

import hkmc2.utils.StringOps.escaped
import hkmc2.semantics.FldFlags
import scala.collection.mutable.Buffer

object ProductOps:
  extension (t: Product)
    def showAsTree: String =
      def aux(v: Any): String = v match
        case Some(v) => "S of " + aux(v)
        case None => "N"
        case Nil => "Nil"
        case xs: List[_] => "Ls of \n" + xs.iterator.map(aux).mkString("\n").indent(2).dropRight(1)
        case s: String => s.escaped
        case FldFlags(mut, spec, genGetter) =>
          val flags = Buffer.empty[String]
          if mut then flags += "mut"
          if spec then flags += "spec"
          if genGetter then flags += "gen"
          if flags.isEmpty then "()" else flags.mkString("(", ", ", ")")
        case t: Product => t.showAsTree
        case v => v.toString
      t.productArity match
        case 0 => t.productPrefix
        case 1 => t.productPrefix + " of " + aux(t.productElement(0))
        case _ =>
          val args = t.productIterator.zipWithIndex.map:
            case (v, i) => t.productElementName(i) + " = " + aux(v)
          t.productPrefix + ":\n" + args.mkString("\n").indent(2).dropRight(1)
