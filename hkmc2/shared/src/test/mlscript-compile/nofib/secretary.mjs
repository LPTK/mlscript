const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let secretary1;
(class secretary {
  static {
    secretary1 = this
  }
  static infRand(m, s) {
    let f;
    f = function f(x) {
      let lambda;
      lambda = (undefined, function () {
        let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
        tmp = NofibPrelude.intMod(x, m);
        tmp1 = tmp + 1;
        tmp2 = 97 * x;
        tmp3 = tmp2 + 11;
        tmp4 = NofibPrelude.power(2, 7);
        tmp5 = NofibPrelude.intMod(tmp3, tmp4);
        tmp6 = f(tmp5);
        return NofibPrelude.LzCons(tmp1, tmp6)
      });
      return NofibPrelude.lazy(lambda)
    };
    return f(s)
  } 
  static simulate(n, m, proc) {
    let lscomp, lambda, tmp, tmp1, tmp2, tmp3;
    lscomp = function lscomp(ls) {
      let arg$Cons$0$, arg$Cons$1$, tmp4, tmp5, tmp6;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        tmp4 = secretary.infRand(m, arg$Cons$0$);
        tmp5 = runtime.safeCall(proc(tmp4));
        tmp6 = lscomp(arg$Cons$1$);
        return NofibPrelude.Cons(tmp5, tmp6)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    lambda = (undefined, function (x) {
      return x
    });
    tmp = NofibPrelude.enumFromTo(1, n);
    tmp1 = lscomp(tmp);
    tmp2 = NofibPrelude.filter(lambda, tmp1);
    tmp3 = NofibPrelude.listLen(tmp2);
    return tmp3 / n
  } 
  static sim(n, k) {
    let proc;
    proc = function proc(rs) {
      let xs, bestk, afterk, tmp, tmp1, lambda, tmp2, tmp3, tmp4;
      tmp = NofibPrelude.nub_lz(rs);
      xs = NofibPrelude.take_lz(100, tmp);
      tmp1 = NofibPrelude.take(k, xs);
      bestk = NofibPrelude.maximum(tmp1);
      lambda = (undefined, function (x) {
        return x < bestk
      });
      tmp2 = NofibPrelude.leave(k, xs);
      afterk = NofibPrelude.leaveWhile(lambda, tmp2);
      tmp3 = NofibPrelude.Cons(100, NofibPrelude.Nil);
      tmp4 = NofibPrelude.take(1, afterk);
      return NofibPrelude.listEq(tmp3, tmp4)
    };
    return secretary.simulate(n, 100, proc)
  } 
  static testSecretary_nofib(n) {
    let listcomp, tmp;
    listcomp = function listcomp(ls) {
      let arg$Cons$0$, arg$Cons$1$, tmp1, tmp2;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        tmp1 = secretary.sim(n, arg$Cons$0$);
        tmp2 = listcomp(arg$Cons$1$);
        return NofibPrelude.Cons(tmp1, tmp2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = NofibPrelude.enumFromTo(35, 39);
    return listcomp(tmp)
  } 
  static main() {
    let tmp;
    tmp = secretary.testSecretary_nofib(50);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "secretary"]; 
});
let secretary = secretary1; export default secretary;
