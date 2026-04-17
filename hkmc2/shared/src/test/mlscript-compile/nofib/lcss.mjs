const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
let lcss1;
(class lcss {
  static {
    lcss1 = this
  }
  static algb2(x, k0j1, k1j1, yss) {
    let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2;
    if (yss instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (yss instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = yss.head;
      arg$Cons$1$ = yss.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        scrut = x == element0$;
        if (scrut === true) {
          tmp = k0j1 + 1;
        } else {
          tmp = NofibPrelude.max(k1j1, element1$);
        }
        tmp1 = globalThis.Object.freeze([
          element0$,
          tmp
        ]);
        tmp2 = lcss.algb2(x, element1$, tmp, arg$Cons$1$);
        return NofibPrelude.Cons(tmp1, tmp2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static algb1(xss, yss) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (xss instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.map(NofibPrelude.snd, yss)
      } else if (xss instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xss.head;
        arg$Cons$1$ = xss.tail;
        tmp = lcss.algb2(arg$Cons$0$, 0, 0, yss);
        xss = arg$Cons$1$;
        yss = tmp;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static algb(xs, ys) {
    let listcomp_fun, tmp, tmp1;
    listcomp_fun = function listcomp_fun(listcomp_fun_para) {
      let arg$Cons$0$, arg$Cons$1$, tmp2, tmp3;
      if (listcomp_fun_para instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = listcomp_fun_para.head;
        arg$Cons$1$ = listcomp_fun_para.tail;
        tmp2 = globalThis.Object.freeze([
          arg$Cons$0$,
          0
        ]);
        tmp3 = listcomp_fun(arg$Cons$1$);
        return NofibPrelude.Cons(tmp2, tmp3)
      } else if (listcomp_fun_para instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = listcomp_fun(ys);
    tmp1 = lcss.algb1(xs, tmp);
    return NofibPrelude.Cons(0, tmp1)
  } 
  static findk(k, km, m, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3;
      if (ls instanceof NofibPrelude.Nil.class) {
        return km
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          tmp = element0$ + element1$;
          scrut = tmp >= m;
          if (scrut === true) {
            let k_tmp;
            tmp1 = k + 1;
            tmp2 = element0$ + element1$;
            k_tmp = k;
            k = tmp1;
            km = k_tmp;
            m = tmp2;
            ls = arg$Cons$1$;
            continue loopLabel
          }
          tmp3 = k + 1;
          k = tmp3;
          ls = arg$Cons$1$;
          continue loopLabel;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static algc(m, n, xs, ys) {
    let x, scrut, m2, xs1, xs2, l1, l2, k, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
    if (ys instanceof NofibPrelude.Nil.class) {
      let lambda;
      lambda = (undefined, function (x1) {
        return x1
      });
      return lambda
    }
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        x = arg$Cons$0$;
        scrut = NofibPrelude.inList(x, ys);
        if (scrut === true) {
          let lambda;
          lambda = (undefined, function (t) {
            return NofibPrelude.Cons(x, t)
          });
          return lambda
        }
        let lambda;
        lambda = (undefined, function (x1) {
          return x1
        });
        return lambda;
      }
    }
    m2 = NofibPrelude.intDiv(m, 2);
    xs1 = NofibPrelude.take(m2, xs);
    xs2 = NofibPrelude.leave(m2, xs);
    l1 = lcss.algb(xs1, ys);
    tmp = NofibPrelude.reverse(xs2);
    tmp1 = NofibPrelude.reverse(ys);
    tmp2 = lcss.algb(tmp, tmp1);
    l2 = NofibPrelude.reverse(tmp2);
    tmp3 = - 1;
    tmp4 = NofibPrelude.zip(l1, l2);
    k = lcss.findk(0, 0, tmp3, tmp4);
    tmp5 = NofibPrelude.take(k, ys);
    tmp6 = lcss.algc(m2, k, xs1, tmp5);
    tmp7 = m - m2;
    tmp8 = n - k;
    tmp9 = NofibPrelude.leave(k, ys);
    tmp10 = lcss.algc(tmp7, tmp8, xs2, tmp9);
    return NofibPrelude.compose(tmp6, tmp10);
  } 
  static lcss(xs, ys) {
    let tmp, tmp1, tmp2;
    tmp = NofibPrelude.listLen(xs);
    tmp1 = NofibPrelude.listLen(ys);
    tmp2 = lcss.algc(tmp, tmp1, xs, ys);
    return runtime.safeCall(tmp2(NofibPrelude.Nil))
  } 
  static lcssMain(a, b, c, d, e, f) {
    let tmp, tmp1;
    tmp = NofibPrelude.enumFromThenTo(a, b, c);
    tmp1 = NofibPrelude.enumFromThenTo(d, e, f);
    return lcss.lcss(tmp, tmp1)
  } 
  static testLCSS_nofib(d) {
    return lcss.lcssMain(1, 2, 60, 30, 31, 90)
  } 
  static main() {
    let tmp;
    tmp = lcss.testLCSS_nofib(0);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "lcss"]; 
});
let lcss = lcss1; export default lcss;
