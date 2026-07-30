package hkmc2

import scala.collection.mutable
import scala.annotation.tailrec
import collection.mutable.Map as MutMap

import hkmc2.utils.*, shorthands.*
import hkmc2.utils.*
import hkmc2.Message.MessageContext
import hkmc2.io
import utils.TraceLogger

import semantics.*
import Elaborator.*
import hkmc2.syntax.LetBind


import CompilerCache.*


class CompilerCtx(
    val importing: Opt[(io.Path, CompilerCtx)],
    val beingCompiled: Set[io.Path],
    val fs: io.FileSystem,
    cache: CompilerCache,
):
  
  def allFilesBeingImported: Ls[io.Path] =
    importing match
    case S((path, parent)) => path :: parent.allFilesBeingImported
    case N => Nil
  
  def derive(newFile: io.Path): CompilerCtx =
    CompilerCtx(S(newFile, this), beingCompiled + newFile, fs, cache)
  
  def getElaboratedBlock
        (file: io.Path, prelude: Opt[PreludeArtifact])
        (using TL, Raise, Config)
        : Artifact =
    
    // println(s"Cache has: ${cache.elabCache.contains(file)} ${cache.elabCache.keys}")
    
    given Elaborator.State = new Elaborator.State
    
    val lastMod = fs.getLastChangedTimestamp(file)
    val preludeCtx = prelude.fold(Ctx.empty)(_.ctx)
    
    def mk =
      val parse =
        given CompilerCtx = this
        ParserSetup(file, dbgParsing = false)
      val resBlk = parse.resultBlk
      given Elaborator.Ctx = preludeCtx.copy(mode = Mode.Light).nestLocal("prelude")
      val elab =
        given CompilerCtx = derive(parse.origin.fileName)
        Elaborator(tl, file.up, prelude)
      val elabbed = elab.importFrom(resBlk)
      Artifact(resBlk, elabbed._1, prelude, lastMod)
    
    cache.upsert(file):
      case N => mk
      case cur @ S(art) =>
        // * An artifact needs to be re-elaborated if the source file has changed since it was last elaborated, or if
        // * the prelude's artifact was changed.
        if art.lastChangedTimestamp < lastMod || art.prelude =/= prelude then mk
        else art

  def getPrelude
        (file: io.Path, dbgParsing: Bool)
        (using tl: TL, raise: Raise, config: Config)
        : PreludeArtifact =
    // The prelude context is shared so every compilation unit sees the same prelude
    // symbols. Callers still elaborate their own files with a fresh State; the frozen
    // State remains the owner captured by the prelude symbols themselves.
    // Note: a rebuild — on a differing `Config`, on `dbgParsing`, or on a newer prelude file —
    // mints a new `State`, so units that do not share a `PreludeArtifact` do not share symbols.
    val lastMod = fs.getLastChangedTimestamp(file)
    cache.upsertPrelude(file):
      case cur @ S(art) if !dbgParsing && art.lastChangedTimestamp >= lastMod && art.config === config =>
        art
      case _ =>
        val state = new Elaborator.State
        given Elaborator.State = state
        given CompilerCtx = this
        val parse = ParserSetup(file, dbgParsing)
        val elab = Elaborator(tl, file.up, N)
        val initCtx = State.init.nestLocal("prelude")
        val (blk, ctx) = elab.importFrom(parse.resultBlk)(using initCtx)
        PreludeArtifact(parse.resultBlk, blk, ctx, state, config, lastMod)
  
  
object CompilerCtx:
  
  inline def get(using cctx: CompilerCtx) = cctx
  
  def fresh(fs: io.FileSystem): CompilerCtx = CompilerCtx(N, Set.empty, fs, new PlatformCompilerCache)
  
end CompilerCtx



object CompilerCache:
  
  class Artifact(
    val tree: syntax.Tree.Block,
    val term: semantics.Term.Blk,
    // * The prelude this artifact was elaborated against, used as a cache key: its symbols are owned by that prelude's
    // * `State`, so reusing this artifact under a different prelude would yield symbols that compare unequal to the
    // * caller's builtins.
    val prelude: Opt[PreludeArtifact],
    val lastChangedTimestamp: Long,
  )

  class PreludeArtifact(
    val tree: syntax.Tree.Block,
    val term: semantics.Term.Blk,
    val ctx: Elaborator.Ctx,
    val state: Elaborator.State,
    val config: Config,
    val lastChangedTimestamp: Long,
  )
  
end CompilerCache


trait CompilerCache:
  // TODO also use hash comparison to avoid needless re-parses?
  
  def elabCache: MutMap[io.Path, Artifact]

  private val preludeCache: MutMap[io.Path, PreludeArtifact] = MutMap.empty
  
  /** Create or update an artifact at the given path in the cache. */
  def upsert(path: io.Path)(update: Option[Artifact] => Artifact): Artifact =
    elabCache
      .updateWith(path):
        case N => S(update(N))
        case cur @ S(oldArt) =>
          val newArt = update(cur)
          if newArt is oldArt then cur else S(newArt)
      .get // * above, we always returns Some

  /** Synchronized because diff-test and compile-test runners compile files in parallel.
    *
    * Only the first requester elaborates the prelude; concurrent requesters block and reuse
    * the same frozen artifact once it is available. */
  def upsertPrelude(path: io.Path)(update: Option[PreludeArtifact] => PreludeArtifact): PreludeArtifact =
    this.synchronized:
      preludeCache
        .updateWith(path):
          case N => S(update(N))
          case cur @ S(oldArt) =>
            val newArt = update(cur)
            if newArt is oldArt then cur else S(newArt)
        .get
  
end CompilerCache



