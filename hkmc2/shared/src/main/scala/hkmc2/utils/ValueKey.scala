package hkmc2
package utils

/** Explicit value equality for immutable keys. Components may contain other
  * value keys and identity references, never mutable inference contents. Store
  * the components and cache their hash: shared type DAGs must not be rehashed
  * recursively at every lookup. The runtime class separates different key kinds.
  */
abstract class ValueKey:
  protected val keyComponents: Product
  final override lazy val hashCode: Int =
    scala.util.hashing.MurmurHash3.productHash(keyComponents, getClass.getName.hashCode)
  final override def equals(other: Any): Boolean = other match
    case that: ValueKey =>
      (this eq that) || (getClass == that.getClass && hashCode == that.hashCode && keyComponents == that.keyComponents)
    case _ => false

/** Inference nodes denote occurrences, even when their immutable fields agree. */
trait IdentityEquality:
  final override def equals(other: Any): Boolean = other match
    case that: AnyRef => this eq that
    case _ => false
  final override def hashCode: Int = System.identityHashCode(this)
