package hkmc2
package codegen

import hkmc2.utils.*, shorthands.*
import utils.*
import hkmc2.syntax.Literal
import semantics.*


type Shape = Literal | ClassLikeSymbol

abstract class ShapeSet:
  def contains(shape: Shape): Bool
  def remove(shape: Shape): ShapeSet

object ShapeSet:
  def apply(shapes: IterableOnce[Shape]): ShapeSet =
    new ShapeSetImpl(
      // shapes.iterator
      //   .flatMap:
      //     case cls: ClassLikeSymbol => Iterator.single(cls) ++ cls.parents
      //     case lit => Iterator.single(lit)
      //   .toSet
      ???
    )

class ShapeSetImpl(val shapes: Set[Shape]) extends ShapeSet:
  def contains(shape: Shape): Bool = shapes.contains(shape)
  def remove(shape: Shape): ShapeSet = new ShapeSetImpl(shapes - shape)


