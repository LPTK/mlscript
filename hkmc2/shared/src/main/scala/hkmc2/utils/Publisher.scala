package hkmc2
package utils

import scala.collection.mutable
import scala.collection.mutable.ArrayBuffer

import hkmc2.utils.*, shorthands.*
import hkmc2.semantics.{NewResolverState, ResolutionContext, Symbol}


type ShapeListener[-A] = A => ResolutionContext ?=> Unit

/** Equality policy chosen at the host's payload type, never by the collection. */
trait CandidateKey[A]:
  def apply(value: A)(using ResolutionContext): Any
  /** Accumulating payloads keep one immutable aggregate per key. A successful
    * merge returns the new aggregate and only the newly contributed payload.
    * Ordinary candidates have no proper extensions at an existing key.
    */
  def accumulates: Bool = false
  def merge(previous: A, incoming: A)(using ResolutionContext): Opt[(A, A)] = N

object CandidateKey:
  given [A]: CandidateKey[A] with
    def apply(value: A)(using ResolutionContext): Any = value

/** Distinct keys in publication order. Accumulating payloads replace an entry
  * with its monotone extension; ordinary candidates remain append-only.
  */
final class Candidates[A](key: CandidateKey[A]) extends Iterable[A]:
  private val keys = mutable.HashMap.empty[Any, Int]
  private val ordered = ArrayBuffer.empty[A]
  private def insert(candidate: A)(using ResolutionContext): Int =
    val candidateKey = key(candidate)
    val previous = keys.getOrElse(candidateKey, -1)
    if previous < 0 then
      keys(candidateKey) = ordered.size
      ordered += candidate
    previous
  def add(candidate: A)(using ResolutionContext): Bool =
    val previous = insert(candidate)
    if previous < 0 then true else key.merge(ordered(previous), candidate) match
      case S((merged, _)) => ordered(previous) = merged; true
      case N => false
  def addDelta(candidate: A)(using ResolutionContext): Opt[A] =
    val previous = insert(candidate)
    if previous < 0 then S(candidate) else key.merge(ordered(previous), candidate).map: (merged, delta) =>
      ordered(previous) = merged
      delta
  /** Copy a host's existing candidates with their portable semantic keys. This
    * also serves post-resolution syntax cloning, which has no inference context.
    */
  def copyFrom(other: Candidates[A]): Unit =
    assert(isEmpty, "Candidate copies must start with an empty host")
    keys ++= other.keys
    ordered ++= other.ordered
  /** A completed graph may be renamed without an inference context. The caller
    * supplies portable keys for the rewritten values, as in `copyFrom` above.
    */
  def mapFrom(other: Candidates[A])(f: A => A, portableKey: A => Any): Unit =
    assert(isEmpty, "Candidate copies must start with an empty host")
    assert(!key.accumulates, "Renaming accumulating candidates requires a context for joining mapped keys")
    other.foreach: candidate =>
      val value = f(candidate)
      val mappedKey = portableKey(value)
      if !keys.contains(mappedKey) then
        keys(mappedKey) = ordered.size
        ordered += value
  override def size: Int = ordered.size
  override def knownSize: Int = ordered.size
  /** The candidates present when iteration starts. */
  def snapshot: Iterator[A] =
    // Freeze cumulative entries too: a callback can extend a later key and
    // deliver its delta before replay reaches that key's original aggregate.
    if key.accumulates then ordered.toVector.iterator
    else Iterator.range(0, ordered.size).map(ordered(_))
  def iterator: Iterator[A] = snapshot
  /** Also visits candidates appended by `f`. */
  def foreachGrowing[U](f: A => U): Unit =
    var i = 0
    while i < ordered.size do
      f(ordered(i))
      i += 1
  override def toString: Str = ordered.mkString("{", ", ", "}")

object Publisher:
  private[hkmc2] final class Data[A](key: CandidateKey[A]):
    private[hkmc2] var owner: NewResolverState | Null = null
    private[hkmc2] var completed = false
    val listeners: ArrayBuffer[ShapeListener[A]] = ArrayBuffer.empty
    val shapes: Candidates[A] = Candidates(key)
    // Pass-local observers never become part of a copied inference graph.
    private val observers: ArrayBuffer[ShapeListener[A]] = ArrayBuffer.empty
    def observe(listener: ShapeListener[A])(using state: ResolutionContext): () => Unit =
      val data = state.local(this)
      data.observers += listener
      data.replay(listener)
      () => { data.observers -= listener; () }
    def copy(state: NewResolverState): Data[A] =
      val result = new Data[A](key)
      result.owner = state
      // Preserve intermediate exporters' private graph nodes as well as the
      // listener's original registration graph when this host is re-exported.
      val origin = owner
      listeners.foreach: listener =>
        result.listeners += (shape => (current: ResolutionContext) ?=>
          listener(shape)(using if origin == null then current else current.inGraph(origin.context)))
      result.shapes.copyFrom(shapes)
      result

    def publish(shape: A)(using state: ResolutionContext): Unit =
      val data = state.local(this)
      if key.accumulates then data.shapes.addDelta(shape).foreach(data.notify)
      else if data.shapes.add(shape) then data.notify(shape)
    def notify(shape: A)(using ResolutionContext): Unit =
      // Appended listeners receive this candidate through replay.
      val count = listeners.size
      val observerCount = observers.size
      var i = 0
      while i < count do
        listeners(i)(shape)
        i += 1
      i = 0
      while i < observerCount do
        observers(i)(shape)
        i += 1
    def addListener(listener: ShapeListener[A])(using origin: ResolutionContext): Unit =
      origin.local(this).listeners +=
        (shape => (current: ResolutionContext) ?=> listener(shape)(using current.inGraph(origin)))
    def replay(listener: ShapeListener[A])(using state: ResolutionContext): Unit =
      val candidates = state.local(this).shapes
      // Apply the contextual listener, rather than discard a contextual thunk.
      candidates.snapshot.foreach[Unit](shape => listener(shape))
    def subscribe(listener: ShapeListener[A])(using ResolutionContext): Unit =
      addListener(listener)
      replay(listener)

trait Publisher[A](using key: CandidateKey[A]):
  private[hkmc2] val originalData = new Publisher.Data[A](key)
  // Syntax nodes do not all carry an elaborator owner. Bind their original host
  // on first use; subsequent consumers only mutate copies in their own state.
  private[hkmc2] def initialData(state: NewResolverState): Publisher.Data[A] =
    val foreignSymbol = this match
      case symbol: Symbol => !state.isOwnedSym(symbol)
      case _ => false
    if originalData.owner == null && !foreignSymbol then originalData.owner = state
    originalData

  private[hkmc2] def isOwnedBy(state: NewResolverState): Bool =
    originalData.owner eq state

  private[hkmc2] def shapeListeners: ArrayBuffer[ShapeListener[A]] = originalData.listeners
  private[hkmc2] def inferenceHost(using state: ResolutionContext): Publisher.Data[A] = state.data(this)
  private[hkmc2] def addShapeListener(listener: ShapeListener[A])(using origin: ResolutionContext): Unit =
    inferenceHost.addListener(listener)

  private[hkmc2] def currentShapes(using state: ResolutionContext): Candidates[A] =
    state.data(this).shapes
  private[hkmc2] def shapes: Candidates[A] = originalData.shapes

  private[hkmc2] def notifyShapeListeners(shape: A)(using ResolutionContext): Unit =
    inferenceHost.notify(shape)

trait Host[A](using CandidateKey[A]) extends Publisher[A]:
  private[hkmc2] def subscribeToShapes(listener: ShapeListener[A])(using ResolutionContext): Unit =
    addShapeListener(listener)
    replayShapes(listener)
  private[hkmc2] def replayShapes(listener: ShapeListener[A])(using ResolutionContext): Unit =
    inferenceHost.replay(listener)
  def showDbg(using DebugPrinter): Str


