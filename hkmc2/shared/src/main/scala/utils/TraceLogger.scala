package hkmc2.utils

import mlscript.utils.*, shorthands.*

abstract class TraceLogger:
  def doTrace: Bool = true
  
  protected val noPostTrace: Any => Str = _ => ""
  
  protected var indent = 0
  def trace[T](pre: => Str, post: T => Str = noPostTrace)(thunk: => T): T = {
    log(pre)
    indent += 1
    val res = try thunk finally indent -= 1
    if post isnt noPostTrace then log(post(res))
    res
  }
  inline def traceNot[T](pre: => Str)(thunk: => T)(post: T => Str = noPostTrace): T =
    thunk
  
  protected def emitDbg(str: Str): Unit = scala.Predef.println(str)
  
  def log(msg: => Any): Unit = if doTrace then emitDbg("| " * indent + msg)

