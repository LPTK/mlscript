const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./Runtime.mjs";
import RuntimeJS from "./RuntimeJS.mjs";
import Rendering from "./Rendering.mjs";
import LazyArray from "./LazyArray.mjs";
import Iter from "./Iter.mjs";
let Runtime1, lambda, cls, f, tmp, f1, inlinedVal;
(class Runtime {
  static {
    Runtime1 = this
  }
  static #curEffect;
  static #resumeValue;
  static #resumeArr;
  static #resumeIdx;
  static #resumePc;
  static #stackLimit;
  static #stackDepth;
  static #stackHandler;
  static #stackResume;
  static get curEffect() { return Runtime.#curEffect; }
  static set curEffect(value) { Runtime.#curEffect = value; }
  static get resumeValue() { return Runtime.#resumeValue; }
  static set resumeValue(value) { Runtime.#resumeValue = value; }
  static get resumeArr() { return Runtime.#resumeArr; }
  static set resumeArr(value) { Runtime.#resumeArr = value; }
  static get resumeIdx() { return Runtime.#resumeIdx; }
  static set resumeIdx(value) { Runtime.#resumeIdx = value; }
  static get resumePc() { return Runtime.#resumePc; }
  static set resumePc(value) { Runtime.#resumePc = value; }
  static get stackLimit() { return Runtime.#stackLimit; }
  static set stackLimit(value) { Runtime.#stackLimit = value; }
  static get stackDepth() { return Runtime.#stackDepth; }
  static set stackDepth(value) { Runtime.#stackDepth = value; }
  static get stackHandler() { return Runtime.#stackHandler; }
  static set stackHandler(value) { Runtime.#stackHandler = value; }
  static get stackResume() { return Runtime.#stackResume; }
  static set stackResume(value) { Runtime.#stackResume = value; }
  static {
    let tmp1;
    (class Unit {
      static {
        new this
      }
      constructor() {
        Runtime.Unit = this;
        Object.defineProperty(this, "class", {
          value: Unit
        });
        globalThis.Object.freeze(this);
      }
      toString() {
        return "()"
      }
      [prettyPrint]() { return this.toString(); }
      static [definitionMetadata] = ["object", "Unit"]; 
    });
    (class LoopEnd {
      static {
        new this
      }
      constructor() {
        Runtime.LoopEnd = this;
        Object.defineProperty(this, "class", {
          value: LoopEnd
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LoopEnd"]; 
    });
    this.short_and = RuntimeJS.short_and;
    this.short_or = RuntimeJS.short_or;
    this.bitand = RuntimeJS.bitand;
    this.bitnot = RuntimeJS.bitnot;
    this.bitor = RuntimeJS.bitor;
    this.shl = RuntimeJS.shl;
    this.try_catch = RuntimeJS.try_catch;
    this.EffectHandle = function EffectHandle(_reified) {
      return globalThis.Object.freeze(new EffectHandle.class(_reified));
    };
    (class EffectHandle {
      static {
        Runtime.EffectHandle.class = this
      }
      constructor(_reified) {
        this.#_reified = _reified;
        this.reified = this.#_reified;
      }
      #_reified;
      resumeWith(value) {
        let lambda1;
        const this$EffectHandle = this;
        lambda1 = (undefined, function () {
          let tmp2;
          tmp2 = Runtime.resume(this$EffectHandle.reified.contTrace);
          return runtime.safeCall(tmp2(value))
        });
        return Runtime1.try(lambda1)
      } 
      raise() {
        Runtime.curEffect = this.reified;
        return runtime.Unit
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "EffectHandle", [null]]; 
    });
    this.MatchSuccess = function MatchSuccess(output, bindings) {
      return globalThis.Object.freeze(new MatchSuccess.class(output, bindings));
    };
    (class MatchSuccess {
      static {
        Runtime.MatchSuccess.class = this
      }
      constructor(output, bindings) {
        this.output = output;
        this.bindings = bindings;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "MatchSuccess", ["output", "bindings"]]; 
    });
    this.MatchFailure = function MatchFailure(errors) {
      return globalThis.Object.freeze(new MatchFailure.class(errors));
    };
    (class MatchFailure {
      static {
        Runtime.MatchFailure.class = this
      }
      constructor(errors) {
        this.errors = errors;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "MatchFailure", ["errors"]]; 
    });
    (class Tuple {
      static {
        Runtime.Tuple = this
      }
      static {
        this.split = LazyArray.__split;
      }
      static slice(xs, i, j) {
        let tmp2;
        tmp2 = xs.length - j;
        return xs.slice(i, tmp2)
      } 
      static lazySlice(xs, i, j) {
        let tmp2;
        tmp2 = LazyArray.dropLeftRight(i, j);
        return runtime.safeCall(tmp2(xs))
      } 
      static lazyConcat(...args) {
        return runtime.safeCall(LazyArray.__concat(...args))
      } 
      static get(xs, i) {
        let scrut, scrut1, tmp2;
        scrut = i >= xs.length;
        if (scrut === true) {
          throw runtime.safeCall(globalThis.RangeError("Tuple.get: index out of bounds"))
        }
        tmp2 = - xs.length;
        scrut1 = i < tmp2;
        if (scrut1 === true) {
          throw runtime.safeCall(globalThis.RangeError("Tuple.get: negative index out of bounds"))
        }
        return xs.at(i);
      } 
      static isArrayLike(xs) {
        return runtime.safeCall(Iter.isArrayLike(xs))
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Tuple"]; 
    });
    (class Str {
      static {
        Runtime.Str = this
      }
      static startsWith(string, prefix) {
        return runtime.safeCall(string.startsWith(prefix))
      } 
      static get(string, i) {
        let scrut;
        scrut = i >= string.length;
        if (scrut === true) {
          throw runtime.safeCall(globalThis.RangeError("Str.get: index out of bounds"))
        }
        return runtime.safeCall(string.at(i));
      } 
      static take(string, n) {
        return string.slice(0, n)
      } 
      static leave(string, n) {
        return runtime.safeCall(string.slice(n))
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Str"]; 
    });
    this.render = Rendering.render;
    (class TraceLogger {
      static {
        Runtime.TraceLogger = this
      }
      static #enabled;
      static #indentLvl;
      static get enabled() { return TraceLogger.#enabled; }
      static set enabled(value) { TraceLogger.#enabled = value; }
      static get indentLvl() { return TraceLogger.#indentLvl; }
      static set indentLvl(value) { TraceLogger.#indentLvl = value; }
      static {
        this.enabled = false;
        this.indentLvl = 0;
      }
      static indent() {
        let scrut, prev, tmp2;
        scrut = TraceLogger.enabled;
        if (scrut === true) {
          prev = TraceLogger.indentLvl;
          tmp2 = prev + 1;
          TraceLogger.indentLvl = tmp2;
          return prev
        }
        return runtime.Unit;
      } 
      static resetIndent(n) {
        let scrut;
        scrut = TraceLogger.enabled;
        if (scrut === true) {
          TraceLogger.indentLvl = n;
          return runtime.Unit
        }
        return runtime.Unit;
      } 
      static log(msg) {
        let scrut, tmp2, tmp3, tmp4, tmp5, tmp6;
        scrut = TraceLogger.enabled;
        if (scrut === true) {
          tmp2 = runtime.safeCall("| ".repeat(TraceLogger.indentLvl));
          tmp3 = runtime.safeCall("  ".repeat(TraceLogger.indentLvl));
          tmp4 = "\n" + tmp3;
          tmp5 = msg.replaceAll("\n", tmp4);
          tmp6 = tmp2 + tmp5;
          return runtime.safeCall(globalThis.console.log(tmp6))
        }
        return runtime.Unit;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "TraceLogger"]; 
    });
    this.curEffect = null;
    this.resumeValue = null;
    this.resumeArr = null;
    this.resumeIdx = null;
    tmp1 = - 1;
    this.resumePc = tmp1;
    (class FatalEffect {
      static {
        new this
      }
      constructor() {
        Runtime.FatalEffect = this;
        Object.defineProperty(this, "class", {
          value: FatalEffect
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "FatalEffect"]; 
    });
    (class PrintStackEffect {
      static {
        new this
      }
      constructor() {
        Runtime.PrintStackEffect = this;
        Object.defineProperty(this, "class", {
          value: PrintStackEffect
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "PrintStackEffect"]; 
    });
    this.FunctionContFrame = function FunctionContFrame(next, saved) {
      return globalThis.Object.freeze(new FunctionContFrame.class(next, saved));
    };
    (class FunctionContFrame {
      static {
        Runtime.FunctionContFrame.class = this
      }
      constructor(next, saved) {
        this.next = next;
        this.saved = saved;
      }
      resume(value) {
        let i, f2, argListsLength, currentArgList, scrut, argListLength, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
        i = 0;
        f2 = this.saved.at(0);
        argListsLength = this.saved.at(5);
        currentArgList = 6;
        Runtime.resumeValue = value;
        Runtime.resumeArr = this.saved;
        Runtime.resumePc = this.saved.at(1);
        scrut = argListsLength === 0;
        if (scrut === true) {
          globalThis.console.log("cannot resume getters");
        }
        lbl: while (true) {
          let scrut1, argListLength1, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16;
          tmp8 = argListsLength - 1;
          scrut1 = i < tmp8;
          if (scrut1 === true) {
            argListLength1 = this.saved.at(currentArgList);
            tmp9 = currentArgList + 1;
            tmp10 = currentArgList + 1;
            tmp11 = tmp10 + argListLength1;
            tmp12 = this.saved.slice(tmp9, tmp11);
            tmp13 = f2.apply(this.saved.at(4), tmp12);
            f2 = tmp13;
            tmp14 = argListLength1 + 1;
            tmp15 = currentArgList + tmp14;
            currentArgList = tmp15;
            tmp16 = i + 1;
            i = tmp16;
            continue lbl
          }
          break;
        }
        argListLength = this.saved.at(currentArgList);
        tmp2 = currentArgList + argListLength;
        tmp3 = tmp2 + 2;
        Runtime.resumeIdx = tmp3;
        tmp4 = currentArgList + 1;
        tmp5 = currentArgList + 1;
        tmp6 = tmp5 + argListLength;
        tmp7 = this.saved.slice(tmp4, tmp6);
        return f2.apply(this.saved.at(4), tmp7)
      } 
      get getLocals() {
        let debugInfo, i, cur, res, i1;
        debugInfo = this.saved.at(3);
        i = 0;
        cur = 6;
        lbl: while (true) {
          let scrut, tmp2, tmp3, tmp4;
          scrut = i < this.saved.at(5);
          if (scrut === true) {
            tmp2 = this.saved.at(cur) + 1;
            tmp3 = cur + tmp2;
            cur = tmp3;
            tmp4 = i + 1;
            i = tmp4;
            continue lbl
          }
          break;
        }
        res = [];
        i1 = 1;
        lbl1: while (true) {
          let scrut, tmp2, tmp3, tmp4, tmp5, tmp6;
          scrut = i1 < debugInfo.length;
          if (scrut === true) {
            tmp2 = i1 + 1;
            tmp3 = cur + 1;
            tmp4 = tmp3 + debugInfo.at(i1);
            tmp5 = globalThis.Object.freeze(new Runtime.LocalVarInfo.class(debugInfo.at(tmp2), this.saved.at(tmp4)));
            res.push(tmp5);
            tmp6 = i1 + 2;
            i1 = tmp6;
            continue lbl1
          }
          break;
        }
        return res;
      } 
      get getNme() {
        return this.saved.at(3).at(0);
      } 
      get getLoc() {
        let loc;
        loc = this.saved.at(2);
        if (loc === null) {
          return "pc=" + this.saved.at(1)
        }
        return loc;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "FunctionContFrame", ["next", "saved"]]; 
    });
    this.HandlerContFrame = function HandlerContFrame(next, nextHandler, handler) {
      return globalThis.Object.freeze(new HandlerContFrame.class(next, nextHandler, handler));
    };
    (class HandlerContFrame {
      static {
        Runtime.HandlerContFrame.class = this
      }
      constructor(next, nextHandler, handler) {
        this.next = next;
        this.nextHandler = nextHandler;
        this.handler = handler;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "HandlerContFrame", ["next", "nextHandler", "handler"]]; 
    });
    this.ContTrace = function ContTrace(next, last, nextHandler, lastHandler, resumed) {
      return globalThis.Object.freeze(new ContTrace.class(next, last, nextHandler, lastHandler, resumed));
    };
    (class ContTrace {
      static {
        Runtime.ContTrace.class = this
      }
      constructor(next, last, nextHandler, lastHandler, resumed) {
        this.next = next;
        this.last = last;
        this.nextHandler = nextHandler;
        this.lastHandler = lastHandler;
        this.resumed = resumed;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ContTrace", ["next", "last", "nextHandler", "lastHandler", "resumed"]]; 
    });
    this.EffectSig = function EffectSig(contTrace, handler, handlerFun) {
      return globalThis.Object.freeze(new EffectSig.class(contTrace, handler, handlerFun));
    };
    (class EffectSig {
      static {
        Runtime.EffectSig.class = this
      }
      constructor(contTrace, handler, handlerFun) {
        this.contTrace = contTrace;
        this.handler = handler;
        this.handlerFun = handlerFun;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "EffectSig", ["contTrace", "handler", "handlerFun"]]; 
    });
    (class NonLocalReturn {
      static {
        Runtime.NonLocalReturn = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "NonLocalReturn"]; 
    });
    this.FnLocalsInfo = function FnLocalsInfo(fnName, locals) {
      return globalThis.Object.freeze(new FnLocalsInfo.class(fnName, locals));
    };
    (class FnLocalsInfo {
      static {
        Runtime.FnLocalsInfo.class = this
      }
      constructor(fnName, locals) {
        this.fnName = fnName;
        this.locals = locals;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "FnLocalsInfo", ["fnName", "locals"]]; 
    });
    this.LocalVarInfo = function LocalVarInfo(localName, value) {
      return globalThis.Object.freeze(new LocalVarInfo.class(localName, value));
    };
    (class LocalVarInfo {
      static {
        Runtime.LocalVarInfo.class = this
      }
      constructor(localName, value) {
        this.localName = localName;
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LocalVarInfo", ["localName", "value"]]; 
    });
    this.CustomStackError = function CustomStackError(stack) {
      return globalThis.Object.freeze(new CustomStackError.class(stack));
    };
    (class CustomStackError {
      static {
        Runtime.CustomStackError.class = this
      }
      constructor(stack) {
        this.stack = stack;
      }
      toString() {
        return this.stack
      }
      [prettyPrint]() { return this.toString(); }
      static [definitionMetadata] = ["class", "CustomStackError", ["stack"]]; 
    });
    this.stackLimit = 0;
    this.stackDepth = 0;
    this.stackHandler = null;
    this.stackResume = null;
    (class StackDelayHandler {
      static {
        new this
      }
      constructor() {
        Runtime.StackDelayHandler = this;
        Object.defineProperty(this, "class", {
          value: StackDelayHandler
        });
        globalThis.Object.freeze(this);
      }
      delay() {
        let lambda1;
        lambda1 = (undefined, function (k) {
          Runtime.stackResume = k;
          return runtime.Unit
        });
        return Runtime.mkEffect(this, lambda1)
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "StackDelayHandler"]; 
    });
    this.Int31 = function Int31(v) {
      return globalThis.Object.freeze(new Int31.class(v));
    };
    (class Int31 {
      static {
        Runtime.Int31.class = this
      }
      constructor(v) {
        this.#v = v;
      }
      #v;
      zext() {
        let tmp2, tmp3;
        tmp2 = Runtime.shl(1, 31);
        tmp3 = runtime.safeCall(Runtime.bitnot(tmp2));
        return Runtime.bitand(this.#v, tmp3)
      } 
      sext() {
        let tmp2;
        tmp2 = Runtime.shl(1, 31);
        return Runtime.bitor(this.#v, tmp2)
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Int31", [null]]; 
    });
  }
  static get unreachable() {
    throw runtime.safeCall(globalThis.Error("unreachable"));
  } 
  static assertFail(file, line) {
    let tmp1, tmp2, tmp3, tmp4;
    tmp1 = "Assertion failed (" + file;
    tmp2 = tmp1 + ":";
    tmp3 = tmp2 + line;
    tmp4 = tmp3 + ")";
    throw runtime.safeCall(globalThis.Error(tmp4))
  } 
  static checkArgs(functionName, expected, isUB, got) {
    let scrut, name, scrut1, scrut2, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15;
    tmp1 = got < expected;
    if (tmp1 === false) {
      if (isUB === true) {
        tmp3 = got > expected;
      } else {
        tmp3 = false;
      }
      tmp2 = tmp3;
    } else {
      tmp2 = true;
    }
    scrut = tmp2;
    if (scrut === true) {
      scrut1 = functionName.length > 0;
      if (scrut1 === true) {
        tmp4 = " '" + functionName;
        tmp5 = tmp4 + "'";
      } else {
        tmp5 = "";
      }
      name = tmp5;
      tmp6 = "Function" + name;
      tmp7 = tmp6 + " expected ";
      if (isUB === true) {
        tmp8 = "";
      } else {
        tmp8 = "at least ";
      }
      tmp9 = tmp7 + tmp8;
      tmp10 = tmp9 + expected;
      tmp11 = tmp10 + " argument";
      scrut2 = expected === 1;
      if (scrut2 === true) {
        tmp12 = "";
      } else {
        tmp12 = "s";
      }
      tmp13 = tmp11 + tmp12;
      tmp14 = tmp13 + " but got ";
      tmp15 = tmp14 + got;
      throw runtime.safeCall(globalThis.Error(tmp15))
    }
    return runtime.Unit;
  } 
  static safeCall(x) {
    if (x === undefined) {
      return runtime.Unit
    }
    return x;
  } 
  static checkCall(x) {
    if (x === undefined) {
      throw runtime.safeCall(globalThis.Error("MLscript call unexpectedly returned `undefined`, the forbidden value."))
    }
    return x;
  } 
  static deboundMethod(mtdName, clsName) {
    let tmp1, tmp2, tmp3, tmp4;
    tmp1 = "[debinding error] Method '" + mtdName;
    tmp2 = tmp1 + "' of class '";
    tmp3 = tmp2 + clsName;
    tmp4 = tmp3 + "' was accessed without being called.";
    throw runtime.safeCall(globalThis.Error(tmp4))
  } 
  static try(f2) {
    let res, scrut, tmp1;
    res = runtime.safeCall(f2());
    scrut = Runtime.curEffect !== null;
    if (scrut === true) {
      tmp1 = Runtime.curEffect;
      Runtime.curEffect = null;
      return Runtime.EffectHandle(tmp1)
    }
    return res;
  } 
  static printRaw(x) {
    let rcd, tmp1;
    rcd = globalThis.Object.freeze({
      indent: 2,
      breakLength: 76
    });
    tmp1 = Runtime.render(x, rcd);
    return runtime.safeCall(globalThis.console.log(tmp1))
  } 
  static resetEffects() {
    let tmp1;
    Runtime.curEffect = null;
    tmp1 = - 1;
    Runtime.resumePc = tmp1;
    return runtime.Unit
  } 
  static raisePrintStackEffect(showLocals) {
    return Runtime.mkEffect(Runtime.PrintStackEffect, showLocals)
  } 
  static topLevelEffect(debug) {
    let tr, v, tmp1, tmp2;
    tr = Runtime.curEffect;
    v = null;
    lbl: while (true) {
      let scrut, tmp3, tmp4, tmp5;
      if (tr instanceof Runtime.EffectSig.class) {
        scrut = tr.handler === Runtime.PrintStackEffect;
        if (scrut === true) {
          tmp3 = Runtime.showStackTrace("Stack Trace:", tr, debug, tr.handlerFun);
          globalThis.console.log(tmp3);
          Runtime.curEffect = null;
          tmp4 = Runtime.resume(tr.contTrace);
          tmp5 = runtime.safeCall(tmp4(runtime.Unit));
          v = tmp5;
          tr = Runtime.curEffect;
          continue lbl
        }
      }
      break;
    }
    if (tr instanceof Runtime.EffectSig.class) {
      Runtime.curEffect = null;
      tmp1 = "Error: Unhandled effect " + tr.handler.constructor.name;
      tmp2 = Runtime.showStackTrace(tmp1, tr, debug, false);
      throw Runtime.CustomStackError(tmp2)
    }
    return v;
  } 
  static illegalEffect(position) {
    let tmp1, tmp2, tmp3, tmp4, tmp5;
    tmp1 = Runtime.curEffect;
    Runtime.curEffect = null;
    tmp2 = "Error: Effect " + tmp1.handler.constructor.name;
    tmp3 = tmp2 + " is raised ";
    tmp4 = tmp3 + position;
    tmp5 = Runtime.showStackTrace(tmp4, tmp1, false, false);
    throw Runtime.CustomStackError(tmp5)
  } 
  static showStackTrace(header, tr, debug, showLocals) {
    let msg, curHandler, atTail, tmp1;
    msg = header;
    curHandler = tr.contTrace;
    atTail = true;
    if (debug === true) {
      lbl: while (true) {
        let scrut, cur, scrut1, tmp2, tmp3;
        scrut = curHandler !== null;
        if (scrut === true) {
          cur = curHandler.next;
          lbl1: while (true) {
            let scrut2, curLocals, loc, localsMsg, scrut3, lambda1, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
            scrut2 = cur !== null;
            if (scrut2 === true) {
              curLocals = cur.getLocals;
              loc = cur.getLoc;
              if (showLocals === true) {
                scrut3 = curLocals.length > 0;
                if (scrut3 === true) {
                  lambda1 = (undefined, function (l) {
                    let tmp13, tmp14;
                    tmp13 = l.localName + "=";
                    tmp14 = Rendering.render(l.value);
                    return tmp13 + tmp14
                  });
                  tmp4 = runtime.safeCall(curLocals.map(lambda1));
                  tmp5 = runtime.safeCall(tmp4.join(", "));
                  tmp6 = " with locals: " + tmp5;
                } else {
                  tmp6 = "";
                }
              } else {
                tmp6 = "";
              }
              localsMsg = tmp6;
              tmp7 = "\n\tat " + cur.getNme;
              tmp8 = tmp7 + " (";
              tmp9 = tmp8 + loc;
              tmp10 = tmp9 + ")";
              tmp11 = msg + tmp10;
              msg = tmp11;
              tmp12 = msg + localsMsg;
              msg = tmp12;
              cur = cur.next;
              atTail = false;
              continue lbl1
            }
            break;
          }
          curHandler = curHandler.nextHandler;
          scrut1 = curHandler !== null;
          if (scrut1 === true) {
            tmp2 = "\n\twith handler " + curHandler.handler.constructor.name;
            tmp3 = msg + tmp2;
            msg = tmp3;
            atTail = false;
            continue lbl
          }
          continue lbl;
        }
        break;
      }
      if (atTail === true) {
        tmp1 = msg + "\n\tat tail position";
        msg = tmp1;
        return msg
      }
      return msg;
    }
    return msg;
  } 
  static showFunctionContChain(cont, hl, vis, reps) {
    let result, scrut, scrut1, scrut2, tmp1, lambda1, tmp2, tmp3, tmp4, tmp5;
    if (cont instanceof Runtime.FunctionContFrame.class) {
      tmp1 = cont.constructor.name + "(pc=";
      result = tmp1 + cont.saved.at(1);
      lambda1 = (undefined, function (m, marker) {
        let scrut3, tmp6, tmp7;
        scrut3 = runtime.safeCall(m.has(cont));
        if (scrut3 === true) {
          tmp6 = ", " + marker;
          tmp7 = result + tmp6;
          result = tmp7;
          return runtime.Unit
        }
        return runtime.Unit;
      });
      hl.forEach(lambda1);
      scrut = runtime.safeCall(vis.has(cont));
      if (scrut === true) {
        tmp2 = reps + 1;
        reps = tmp2;
        scrut1 = reps > 10;
        if (scrut1 === true) {
          throw runtime.safeCall(globalThis.Error("10 repeated continuation frame (loop?)"))
        }
        tmp3 = result + ", REPEAT";
        result = tmp3;
      } else {
        vis.add(cont);
      }
      tmp4 = result + ") -> ";
      tmp5 = Runtime.showFunctionContChain(cont.next, hl, vis, reps);
      return tmp4 + tmp5
    }
    scrut2 = cont === null;
    if (scrut2 === true) {
      return "(null)"
    }
    return "(NOT CONT)";
  } 
  static showHandlerContChain(cont, hl, vis, reps) {
    let result, scrut, scrut1, scrut2, lambda1, tmp1, tmp2, tmp3, tmp4;
    if (cont instanceof Runtime.HandlerContFrame.class) {
      result = cont.handler.constructor.name;
      lambda1 = (undefined, function (m, marker) {
        let scrut3, tmp5, tmp6;
        scrut3 = runtime.safeCall(m.has(cont));
        if (scrut3 === true) {
          tmp5 = ", " + marker;
          tmp6 = result + tmp5;
          result = tmp6;
          return runtime.Unit
        }
        return runtime.Unit;
      });
      hl.forEach(lambda1);
      scrut = runtime.safeCall(vis.has(cont));
      if (scrut === true) {
        tmp1 = reps + 1;
        reps = tmp1;
        scrut1 = reps > 10;
        if (scrut1 === true) {
          throw runtime.safeCall(globalThis.Error("10 repeated continuation frame (loop?)"))
        }
        tmp2 = result + ", REPEAT";
        result = tmp2;
      } else {
        vis.add(cont);
      }
      tmp3 = result + " -> ";
      tmp4 = Runtime.showFunctionContChain(cont.next, hl, vis, reps);
      return tmp3 + tmp4
    }
    scrut2 = cont === null;
    if (scrut2 === true) {
      return "(null)"
    }
    return "(NOT HANDLER CONT)";
  } 
  static debugCont(cont) {
    let tmp1, tmp2, tmp3;
    tmp1 = globalThis.Object.freeze(new globalThis.Map());
    tmp2 = globalThis.Object.freeze(new globalThis.Set());
    tmp3 = Runtime.showFunctionContChain(cont, tmp1, tmp2, 0);
    return runtime.safeCall(globalThis.console.log(tmp3))
  } 
  static debugHandler(cont) {
    let tmp1, tmp2, tmp3;
    tmp1 = globalThis.Object.freeze(new globalThis.Map());
    tmp2 = globalThis.Object.freeze(new globalThis.Set());
    tmp3 = Runtime.showHandlerContChain(cont, tmp1, tmp2, 0);
    return runtime.safeCall(globalThis.console.log(tmp3))
  } 
  static debugContTrace(contTrace) {
    let scrut, scrut1, vis, hl, cur, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (contTrace instanceof Runtime.ContTrace.class) {
      globalThis.console.log("resumed: ", contTrace.resumed);
      scrut = contTrace.last === contTrace;
      if (scrut === true) {
        globalThis.console.log("<last is self>");
      }
      scrut1 = contTrace.lastHandler === contTrace;
      if (scrut1 === true) {
        globalThis.console.log("<lastHandler is self>");
      }
      vis = globalThis.Object.freeze(new globalThis.Set());
      hl = globalThis.Object.freeze(new globalThis.Map());
      tmp1 = globalThis.Object.freeze([
        contTrace.last
      ]);
      tmp2 = globalThis.Object.freeze(new globalThis.Set(tmp1));
      hl.set("last", tmp2);
      tmp3 = globalThis.Object.freeze([
        contTrace.lastHandler
      ]);
      tmp4 = globalThis.Object.freeze(new globalThis.Set(tmp3));
      hl.set("last-handler", tmp4);
      tmp5 = Runtime.showFunctionContChain(contTrace.next, hl, vis, 0);
      globalThis.console.log(tmp5);
      cur = contTrace.nextHandler;
      lbl: while (true) {
        let scrut2, tmp6;
        scrut2 = cur !== null;
        if (scrut2 === true) {
          tmp6 = Runtime.showHandlerContChain(cur, hl, vis, 0);
          globalThis.console.log(tmp6);
          cur = cur.nextHandler;
          continue lbl
        }
        break;
      }
      return runtime.safeCall(globalThis.console.log())
    }
    globalThis.console.log("Not a cont trace:");
    return runtime.safeCall(globalThis.console.log(contTrace));
  } 
  static debugEff(eff) {
    if (eff instanceof Runtime.EffectSig.class) {
      globalThis.console.log("Debug EffectSig:");
      globalThis.console.log("handler: ", eff.handler.constructor.name);
      globalThis.console.log("handlerFun: ", eff.handlerFun);
      return Runtime.debugContTrace(eff.contTrace)
    }
    globalThis.console.log("Not an effect:");
    return runtime.safeCall(globalThis.console.log(eff));
  } 
  static unwind(...saved) {
    let tmp1;
    tmp1 = new Runtime.FunctionContFrame.class(null, saved);
    Runtime.curEffect.contTrace.last.next = tmp1;
    Runtime.curEffect.contTrace.last = Runtime.curEffect.contTrace.last.next;
    return runtime.Unit
  } 
  static mkEffect(handler, handlerFun) {
    let res, tmp1;
    tmp1 = new Runtime.ContTrace.class(null, null, null, null, false);
    res = new Runtime.EffectSig.class(tmp1, handler, handlerFun);
    res.contTrace.last = res.contTrace;
    res.contTrace.lastHandler = res.contTrace;
    Runtime.curEffect = res;
    return runtime.Unit
  } 
  static handleBlockImpl(cur, handler) {
    let handlerFrame;
    handlerFrame = new Runtime.HandlerContFrame.class(null, null, handler);
    cur.contTrace.lastHandler.nextHandler = handlerFrame;
    cur.contTrace.lastHandler = handlerFrame;
    cur.contTrace.last = handlerFrame;
    return Runtime.handleEffects(cur)
  } 
  static enterHandleBlock(handler, body) {
    let tmp1, scrut;
    tmp1 = runtime.safeCall(body());
    scrut = Runtime.curEffect === null;
    if (scrut === true) {
      return tmp1
    }
    return Runtime.handleBlockImpl(Runtime.curEffect, handler);
  } 
  static handleEffects(cur) {
    lbl: while (true) {
      let nxt, scrut;
      if (cur instanceof Runtime.EffectSig.class) {
        nxt = Runtime.handleEffect(cur);
        scrut = cur === nxt;
        if (scrut === true) {
          Runtime.curEffect = cur;
          return null
        }
        cur = nxt;
        continue lbl;
      }
      return cur;
    }
  } 
  static handleEffect(cur) {
    let prevHandlerFrame, scrut, handlerFrame, saved, tmp1, old, scrut1, scrut2, scrut3, tmp2, tmp3, tmp4, tmp5;
    prevHandlerFrame = cur.contTrace;
    lbl: while (true) {
      let scrut4, scrut5;
      scrut4 = prevHandlerFrame.nextHandler !== null;
      if (scrut4 === true) {
        scrut5 = prevHandlerFrame.nextHandler.handler !== cur.handler;
        if (scrut5 === true) {
          prevHandlerFrame = prevHandlerFrame.nextHandler;
          continue lbl
        }
      }
      break;
    }
    scrut = prevHandlerFrame.nextHandler === null;
    if (scrut === true) {
      return cur
    }
    handlerFrame = prevHandlerFrame.nextHandler;
    saved = new Runtime.ContTrace.class(handlerFrame.next, cur.contTrace.last, handlerFrame.nextHandler, cur.contTrace.lastHandler, false);
    cur.contTrace.last = handlerFrame;
    cur.contTrace.lastHandler = handlerFrame;
    handlerFrame.next = null;
    handlerFrame.nextHandler = null;
    Runtime.curEffect = null;
    old = Runtime.stackDepth;
    try {
      tmp3 = Runtime.stackDepth + 2;
      Runtime.stackDepth = tmp3;
      tmp4 = Runtime.resume(cur.contTrace);
      tmp5 = runtime.safeCall(cur.handlerFun(tmp4));
      tmp2 = tmp5;
    } finally {
      Runtime.stackDepth = old;
    }
    tmp1 = tmp2;
    scrut1 = Runtime.curEffect !== null;
    if (scrut1 === true) {
      cur = Runtime.curEffect;
      scrut2 = saved.next !== null;
      if (scrut2 === true) {
        cur.contTrace.last.next = saved.next;
        cur.contTrace.last = saved.last;
      }
      scrut3 = saved.nextHandler !== null;
      if (scrut3 === true) {
        cur.contTrace.lastHandler.nextHandler = saved.nextHandler;
        cur.contTrace.lastHandler = saved.lastHandler;
        return cur
      }
      return cur;
    }
    return Runtime.resumeContTrace(saved, tmp1);
  } 
  static resume(contTrace) {
    return (value) => {
      let scrut, tmp1;
      scrut = contTrace.resumed;
      if (scrut === true) {
        throw runtime.safeCall(globalThis.Error("Multiple resumption"))
      }
      contTrace.resumed = true;
      tmp1 = Runtime.resumeContTrace(contTrace, value);
      return Runtime.handleEffects(tmp1);
    }
  } 
  static resumeContTrace(contTrace, value) {
    let cont, handlerCont;
    cont = contTrace.next;
    handlerCont = contTrace.nextHandler;
    lbl: while (true) {
      let old, scrut, scrut1, scrut2, tmp1, tmp2, tmp3;
      if (cont instanceof Runtime.FunctionContFrame.class) {
        Runtime.curEffect = null;
        old = Runtime.stackDepth;
        try {
          tmp2 = Runtime.stackDepth + 3;
          Runtime.stackDepth = tmp2;
          tmp3 = runtime.safeCall(cont.resume(value));
          tmp1 = tmp3;
        } finally {
          Runtime.stackDepth = old;
        }
        value = tmp1;
        scrut = Runtime.curEffect !== null;
        if (scrut === true) {
          value = Runtime.curEffect;
        }
        if (value instanceof Runtime.EffectSig.class) {
          value.contTrace.last.next = cont.next;
          value.contTrace.lastHandler.nextHandler = handlerCont;
          scrut1 = contTrace.last !== cont;
          if (scrut1 === true) {
            value.contTrace.last = contTrace.last;
          }
          scrut2 = handlerCont !== null;
          if (scrut2 === true) {
            value.contTrace.lastHandler = contTrace.lastHandler;
            return value
          }
          return value;
        }
        cont = cont.next;
        continue lbl;
      }
      if (handlerCont instanceof Runtime.HandlerContFrame.class) {
        cont = handlerCont.next;
        handlerCont = handlerCont.nextHandler;
        continue lbl
      }
      return value;
    }
  } 
  static checkDepth() {
    let scrut, tmp1, tmp2;
    tmp1 = Runtime.stackDepth >= Runtime.stackLimit;
    if (tmp1 === true) {
      tmp2 = Runtime.stackHandler !== null;
    } else {
      tmp2 = false;
    }
    scrut = tmp2;
    if (scrut === true) {
      return runtime.safeCall(Runtime.stackHandler.delay())
    }
    return runtime.Unit;
  } 
  static runStackSafe(limit, f2) {
    let old, old1, old2, result, scrut, tmp1, tmp2, tmp3;
    old = Runtime.stackLimit;
    try {
      Runtime.stackLimit = limit;
      old1 = Runtime.stackDepth;
      try {
        Runtime.stackDepth = 1;
        old2 = Runtime.stackHandler;
        try {
          Runtime.stackHandler = Runtime.StackDelayHandler;
          result = Runtime.enterHandleBlock(Runtime.StackDelayHandler, f2);
          scrut = Runtime.curEffect !== null;
          if (scrut === true) {
            throw globalThis.Object.freeze(new globalThis.Error("Effect crossed through stack safe boundary"))
          }
          lbl: while (true) {
            let scrut1, saved, scrut2, tmp4;
            scrut1 = Runtime.stackResume !== null;
            if (scrut1 === true) {
              saved = Runtime.stackResume;
              Runtime.stackResume = null;
              Runtime.stackDepth = 1;
              tmp4 = runtime.safeCall(saved(runtime.Unit));
              result = tmp4;
              scrut2 = Runtime.curEffect !== null;
              if (scrut2 === true) {
                throw globalThis.Object.freeze(new globalThis.Error("Effect crossed through stack safe boundary"))
              }
              continue lbl;
            }
            break;
          }
          tmp3 = result;
        } finally {
          Runtime.stackHandler = old2;
        }
        tmp2 = tmp3;
      } finally {
        Runtime.stackDepth = old1;
      }
      tmp1 = tmp2;
    } finally {
      Runtime.stackLimit = old;
    }
    return tmp1
  } 
  static plus_impl(lhs, rhs) {
    if (lhs instanceof Runtime.Int31.class) {
      if (rhs instanceof Runtime.Int31.class) {
        return lhs + rhs
      }
      return Runtime.unreachable();
    }
    return Runtime.unreachable();
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Runtime"]; 
});
lambda = (undefined, function (self, layout) {
  return globalThis.Object.freeze([
    self.underlying,
    "..",
    self.start,
    self,
    layout
  ])
});
cls = LazyArray.internal.getView.class;
f = lambda;
f1 = f;
inlinedVal = runtime.safeCall(RuntimeJS.mk_this_function(f1));
tmp = inlinedVal;
cls.prototype[RuntimeJS.symbols.prettyPrint] = tmp;
let Runtime = Runtime1; export default Runtime;
