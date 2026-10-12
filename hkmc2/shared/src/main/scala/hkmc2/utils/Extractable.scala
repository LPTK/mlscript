package hkmc2
package utils

/** An irrefutable Scala 3 extractor result. Returning the matched object itself
  * lets a single-field extractor expose its field through `get` without a Some.
  * These accessors introduce neither storage nor equality/hash implementations.
  */
trait Extractable[+A]:
  final def isEmpty: false = false
  def get: A

object Extractable:
  /** For two or more fields, Scala's name-based matching reads `_1`, `_2`, etc.
    * from this same object. Each accessor reads an existing field, so extraction
    * needs neither an Option nor a tuple containing copies of those fields.
    */
  trait Self extends Extractable[Self]:
    final def get: this.type = this
