const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./Runtime.mjs";
import Predef from "./Predef.mjs";
import StrOps from "./StrOps.mjs";
let TreeTracer2;
(class TreeTracer {
  static {
    TreeTracer2 = this
  }
  static {
    (class TreeTracer1 {
      static {
        TreeTracer.TreeTracer = this
      }
      constructor() {
        this.steps = 0;
        this.enabled = false;
      }
      #steps;
      #enabled;
      get steps() { return this.#steps; }
      set steps(value) { this.#steps = value; }
      get enabled() { return this.#enabled; }
      set enabled(value) { this.#enabled = value; }
      output(outie, innie, innieAlt, message) {
        let scrut, lines, lambda;
        scrut = this.enabled;
        if (scrut === true) {
          lines = runtime.safeCall(message.split("\n"));
          lambda = (undefined, function (line, i, xs) {
            let scrut1, scrut2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
            scrut1 = lines.length > 1;
            if (scrut1 === true) {
              tmp = " \u21B5";
            } else {
              tmp = "";
            }
            if (i === 0) {
              tmp1 = outie + innie;
              tmp2 = tmp1 + line;
              tmp3 = tmp2 + tmp;
              return runtime.safeCall(globalThis.console.log(tmp3))
            }
            tmp4 = i + 1;
            scrut2 = tmp4 == lines.length;
            if (scrut2 === true) {
              tmp5 = outie + innieAlt;
              tmp6 = tmp5 + line;
              return runtime.safeCall(globalThis.console.log(tmp6))
            }
            tmp7 = outie + innieAlt;
            tmp8 = tmp7 + line;
            tmp9 = tmp8 + tmp;
            return runtime.safeCall(globalThis.console.log(tmp9));
          });
          runtime.safeCall(lines.forEach(lambda));
          return runtime.Unit
        }
        return runtime.Unit;
      } 
      enter(...pieces) {
        let scrut, scrut1, tmp, tmp1, tmp2, tmp3, lambda, tmp4, tmp5, tmp6;
        scrut = this.steps > 0;
        if (scrut === true) {
          tmp = this.steps - 1;
          tmp1 = runtime.safeCall(("\u2502 ").repeat(tmp));
          tmp2 = tmp1 + "\u251C\u2500";
        } else {
          tmp2 = "";
        }
        scrut1 = this.steps > 0;
        if (scrut1 === true) {
          tmp3 = "\u252E ";
        } else {
          tmp3 = "\u250D ";
        }
        lambda = (undefined, function (arg1, arg2) {
          return arg1 + arg2
        });
        tmp4 = runtime.safeCall(Predef.fold(lambda));
        tmp5 = runtime.safeCall(tmp4(...pieces));
        this.output(tmp2, tmp3, "\u2502 ", tmp5);
        tmp6 = this.steps + 1;
        this.steps = tmp6;
        return runtime.Unit
      } 
      print(...pieces) {
        let message, scrut, scrut1, lastElement1$, middleElements, lambda, tmp, tmp1, tmp2, tmp3, lambda1, tmp4, tmp5, tmp6;
        split_root$: {
          if (runtime.Tuple.isArrayLike(pieces) && pieces.length >= 1) {
            middleElements = runtime.Tuple.slice(pieces, 0, 1);
            lastElement1$ = runtime.Tuple.get(pieces, -1);
            if (globalThis.Number.isInteger(lastElement1$)) {
              lambda = (undefined, function (arg1, arg2) {
                return arg1 + arg2
              });
              tmp = runtime.safeCall(Predef.fold(lambda));
              tmp1 = " [Ln " + lastElement1$;
              tmp2 = tmp1 + "]";
              tmp3 = runtime.safeCall(tmp(...middleElements, tmp2));
              break split_root$
            }
          }
          lambda1 = (undefined, function (arg1, arg2) {
            return arg1 + arg2
          });
          tmp4 = runtime.safeCall(Predef.fold(lambda1));
          tmp3 = runtime.safeCall(tmp4(...pieces));
        }
        message = tmp3;
        scrut = this.steps > 0;
        if (scrut === true) {
          tmp5 = this.steps - 1;
          tmp6 = runtime.safeCall(("\u2502 ").repeat(tmp5));
        } else {
          tmp6 = "";
        }
        scrut1 = this.steps > 0;
        if (scrut1 === true) {
          return this.output(tmp6, "\u251C ", "\u2502 ", message)
        }
        return this.output(tmp6, "", "\u2502 ", message);
      } 
      leave(...pieces) {
        let tmp, tmp1, lambda, tmp2, tmp3;
        tmp = this.steps - 1;
        this.steps = tmp;
        tmp1 = runtime.safeCall(("\u2502 ").repeat(this.steps));
        lambda = (undefined, function (arg1, arg2) {
          return arg1 + arg2
        });
        tmp2 = runtime.safeCall(Predef.fold(lambda));
        tmp3 = runtime.safeCall(tmp2(...pieces));
        return this.output(tmp1, "\u2515 ", "  ", tmp3)
      } 
      trace(intro, makeOutro, thunk) {
        let result, tmp, tmp1;
        this.enter(intro);
        tmp = runtime.safeCall(thunk());
        result = tmp;
        tmp1 = runtime.safeCall(makeOutro(result));
        this.leave(tmp1);
        return result
      } 
      reset() {
        this.steps = 0;
        return runtime.Unit
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "TreeTracer"]; 
    });
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "TreeTracer"]; 
});
let TreeTracer = TreeTracer2; export default TreeTracer;
