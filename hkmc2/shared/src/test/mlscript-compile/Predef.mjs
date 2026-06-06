const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./Runtime.mjs";
import RuntimeJS from "./RuntimeJS.mjs";
import Runtime from "./Runtime.mjs";
import Rendering from "./Rendering.mjs";
import Term from "./Term.mjs";
let Predef1;
(class Predef {
  static {
    Predef1 = this
  }
  static {
    (class Symbols {
      static {
        new this
      }
      constructor() {
        Predef.Symbols = this;
        this.prettyPrint = RuntimeJS.symbols.prettyPrint;
        this.definitionMetadata = RuntimeJS.symbols.definitionMetadata;
        Object.defineProperty(this, "class", {
          value: Symbols
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Symbols"];
    });
    (class Sub {
      static {
        Predef.Sub = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Sub"];
    });
    (class Eq extends Predef.Sub {
      static {
        Predef.Eq = this
      }
      constructor() {
        super();
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Eq"];
    });
    (class Refl extends Predef.Eq {
      static {
        new this
      }
      constructor() {
        super();
        Predef.Refl = this;
        Object.defineProperty(this, "class", {
          value: Refl
        });
        globalThis.Object.freeze(this);
      }
      apply(x) {
        return x
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Refl"];
    });
    Predef.pass1 = Rendering.pass1;
    Predef.pass2 = Rendering.pass2;
    Predef.pass3 = Rendering.pass3;
    Predef.passing = Rendering.passing;
    Predef.map = Rendering.map;
    Predef.fold = Rendering.fold;
    Predef.interleave = Rendering.interleave;
    Predef.render = Rendering.render;
    Predef.js_assert = globalThis.console["assert"];
    Predef.foldl = Predef.fold;
    (class meta {
      static {
        Predef.meta = this
      }
      static codegen(t, file) {
        return runtime.safeCall(Term.codegen(t, file))
      }
      static print(t) {
        return runtime.safeCall(Term.print(t))
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "meta"];
    });
  }
  static id(x) {
    return x
  }
  static hide(x) {
    return x
  }
  static get maybe() {
    return Predef.hide(true);
  }
  static apply(f, ...args) {
    return runtime.safeCall(f(...args))
  }
  static pipeInto(x, f) {
    return runtime.safeCall(f(x))
  }
  static pipeFrom(f, x) {
    return runtime.safeCall(f(x))
  }
  static pipeIntoHi(x, f) {
    return runtime.safeCall(f(x))
  }
  static pipeFromHi(f, x) {
    return runtime.safeCall(f(x))
  }
  static tap(x, f) {
    runtime.safeCall(f(x));
    return x
  }
  static pat(f, x) {
    runtime.safeCall(f(x));
    return x
  }
  static alsoDo(x, eff) {
    return x
  }
  static andThen(f, g) {
    return (x) => {
      let tmp;
      tmp = runtime.safeCall(f(x));
      return runtime.safeCall(g(tmp))
    }
  }
  static compose(f, g) {
    return (x) => {
      let tmp;
      tmp = runtime.safeCall(g(x));
      return runtime.safeCall(f(tmp))
    }
  }
  static passTo(receiver, f) {
    return (...args) => {
      return runtime.safeCall(f(receiver, ...args))
    }
  }
  static passToLo(receiver, f) {
    return (...args) => {
      return runtime.safeCall(f(receiver, ...args))
    }
  }
  static call(receiver, f) {
    return (...args) => {
      return runtime.safeCall(f.call(receiver, ...args))
    }
  }
  static equals(a, b) {
    let scrut;
    scrut = a === b;
    if (scrut === true) {
      return true
    }
    {
      let scrut1;
      if (a instanceof globalThis.Array) {
        if (b instanceof globalThis.Array) {
          let scrut2;
          scrut2 = a.length === b.length;
          if (scrut2 === true) {
            let lambda;
            lambda = (undefined, function (a1, i) {
              let tmp;
              tmp = runtime.safeCall(b.at(i));
              return Predef.equals(a1, tmp)
            });
            return runtime.safeCall(a.every(lambda))
          }
        }
      }
      scrut1 = a !== undefined;
      if (scrut1 === true) {
        let scrut2;
        scrut2 = a !== null;
        if (scrut2 === true) {
          let scrut3;
          scrut3 = b !== undefined;
          if (scrut3 === true) {
            let scrut4;
            scrut4 = b !== null;
            if (scrut4 === true) {
              let ac, scrut5, tmp;
              ac = a.constructor;
              scrut5 = ac !== undefined;
              if (scrut5 === true) {
                let scrut6;
                scrut6 = ac === b.constructor;
                if (scrut6 === true) {
                  let md, scrut7, tmp1;
                  md = ac[Predef.Symbols.definitionMetadata];
                  scrut7 = md !== undefined;
                  if (scrut7 === true) {
                    let scrut8, lambda;
                    lambda = (undefined, function (field) {
                      let scrut9;
                      scrut9 = field !== null;
                      if (scrut9 === true) {
                        let scrut10;
                        scrut10 = Predef.equals(a[field], b[field]);
                        if (scrut10 === true) {
                          return true
                        }
                        return false;
                      }
                      return false;
                    });
                    scrut8 = runtime.safeCall(md[2].every(lambda));
                    if (scrut8 === true) {
                      tmp1 = true;
                    } else {
                      tmp1 = false;
                    }
                  } else {
                    tmp1 = false;
                  }
                  if (tmp1 === true) {
                    tmp = true;
                  } else {
                    tmp = false;
                  }
                } else {
                  tmp = false;
                }
              } else {
                tmp = false;
              }
              if (tmp === true) {
                return true
              }
              return false;
            }
            return false;
          }
          return false;
        }
        return false;
      }
      return false;
    }
  }
  static nequals(a, b) {
    let tmp;
    tmp = Predef.equals(a, b);
    return ! tmp
  }
  static print(...xs) {
    let callPrefix, tmp;
    callPrefix = runtime.safeCall(Predef.map(Predef.renderAsStr));
    tmp = runtime.safeCall(callPrefix(...xs));
    return runtime.safeCall(globalThis.console.log(...tmp))
  }
  static renderAsStr(arg) {
    if (typeof arg === 'string') {
      return arg
    }
    return runtime.safeCall(Predef.render(arg));
  }
  static check(...args) {
    return runtime.safeCall(Predef.js_assert(...args))
  }
  static notImplemented(msg) {
    let tmp;
    tmp = "Not implemented: " + msg;
    throw runtime.safeCall(globalThis.Error(tmp))
  }
  static get notImplementedError() {
    throw runtime.safeCall(globalThis.Error("Not implemented"));
  }
  static tuple(...xs) {
    return xs
  }
  static mkSet(...xs) {
    return globalThis.Object.freeze(new globalThis.Set(xs))
  }
  static foldr(f) {
    return (first, ...rest) => {
      let len, scrut;
      len = rest.length;
      scrut = len === 0;
      if (scrut === true) {
        return first
      }
      {
        let i, init;
        i = len - 1;
        init = runtime.safeCall(rest.at(i));
        lbl: while (true) {
          let scrut1;
          scrut1 = i > 0;
          if (scrut1 === true) {
            let tmp, tmp1, tmp2;
            tmp = i - 1;
            i = tmp;
            tmp1 = runtime.safeCall(rest.at(tmp));
            tmp2 = runtime.safeCall(f(tmp1, init));
            init = tmp2;
            continue lbl
          }
          break;
        }
        return runtime.safeCall(f(first, init));
      }
    }
  }
  static mkStr(...xs) {
    let lambda, callPrefix;
    lambda = (undefined, function (acc, x) {
      let tmp;
      if (typeof x === 'string') {
        tmp = true;
      } else {
        tmp = false;
      }
      Predef.check(tmp);
      return acc + x
    });
    callPrefix = runtime.safeCall(Predef.fold(lambda));
    return runtime.safeCall(callPrefix(...xs))
  }
  static use(instance) {
    return instance
  }
  static enterHandleBlock(handler, body) {
    return runtime.safeCall(Runtime.enterHandleBlock(handler, body))
  }
  static raiseUnhandledEffect() {
    return runtime.safeCall(Runtime.mkEffect(Runtime.FatalEffect, null))
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Predef"];
});
let Predef = Predef1; export default Predef;
