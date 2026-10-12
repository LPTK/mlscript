package hkmc2
package utils

/** An irrefutable Scala 3 extractor result. Returning the matched object itself
  * lets a single-field extractor expose its field through `get` without a Some.
  * These accessors introduce neither storage nor equality/hash implementations.
  */
trait Extractable[+A]:
  final def isEmpty: false = false
  def get: A
