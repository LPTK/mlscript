const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
let gcd1;
(class gcd {
  static {
    gcd1 = this
  }
  static g(u1u2u3, v1v2v3) {
    loopLabel: while (true) {
      let scrut, scrut1, element2$, element1$, element0$, element2$1, element1$1, element0$1, element1$2, element0$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
      if (runtime.Tuple.isArrayLike(u1u2u3) && u1u2u3.length === 3) {
        element0$ = runtime.Tuple.get(u1u2u3, 0);
        element1$ = runtime.Tuple.get(u1u2u3, 1);
        element2$ = runtime.Tuple.get(u1u2u3, 2);
        if (runtime.Tuple.isArrayLike(v1v2v3) && v1v2v3.length === 3) {
          element0$1 = runtime.Tuple.get(v1v2v3, 0);
          element1$1 = runtime.Tuple.get(v1v2v3, 1);
          element2$1 = runtime.Tuple.get(v1v2v3, 2);
          scrut = element2$1 == 0;
          if (scrut === true) {
            return globalThis.Object.freeze([
              element2$,
              element0$,
              element1$
            ])
          }
          scrut1 = NofibPrelude.quotRem(element2$, element2$1);
          if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
            element0$2 = runtime.Tuple.get(scrut1, 0);
            element1$2 = runtime.Tuple.get(scrut1, 1);
            tmp = globalThis.Object.freeze([
              element0$1,
              element1$1,
              element2$1
            ]);
            tmp1 = element0$2 * element0$1;
            tmp2 = element0$ - tmp1;
            tmp3 = element0$2 * element1$1;
            tmp4 = element1$ - tmp3;
            tmp5 = globalThis.Object.freeze([
              tmp2,
              tmp4,
              element1$2
            ]);
            u1u2u3 = tmp;
            v1v2v3 = tmp5;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static gcdE(x, y) {
    let scrut, tmp, tmp1;
    scrut = x == 0;
    if (scrut === true) {
      return globalThis.Object.freeze([
        y,
        0,
        1
      ])
    }
    tmp = globalThis.Object.freeze([
      1,
      0,
      x
    ]);
    tmp1 = globalThis.Object.freeze([
      0,
      1,
      y
    ]);
    return gcd.g(tmp, tmp1);
  } 
  static max_(ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
      if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
          return arg$Cons$0$
        } else if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = arg$Cons$1$.head;
          arg$Cons$1$1 = arg$Cons$1$.tail;
          scrut = arg$Cons$0$ < arg$Cons$0$1;
          if (scrut === true) {
            tmp = NofibPrelude.Cons(arg$Cons$0$1, arg$Cons$1$1);
            ls = tmp;
            continue loopLabel
          }
          tmp1 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$1);
          ls = tmp1;
          continue loopLabel;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static test(d) {
    let lscomp1, ns, ms, tripls, rs, tmp, tmp1, lambda, tmp2, lambda1;
    lscomp1 = function lscomp1(p1) {
      let lscomp2, h1, t1, arg$Cons$0$, arg$Cons$1$;
      if (p1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (p1 instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = p1.head;
        arg$Cons$1$ = p1.tail;
        t1 = arg$Cons$1$;
        h1 = arg$Cons$0$;
        lscomp2 = function lscomp2(p2) {
          let arg$Cons$0$1, arg$Cons$1$1, tmp3, tmp4;
          if (p2 instanceof NofibPrelude.Nil.class) {
            return lscomp1(t1)
          } else if (p2 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = p2.head;
            arg$Cons$1$1 = p2.tail;
            tmp3 = globalThis.Object.freeze([
              h1,
              arg$Cons$0$1
            ]);
            tmp4 = lscomp2(arg$Cons$1$1);
            return NofibPrelude.Cons(tmp3, tmp4)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        };
        return lscomp2(ms)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = 5000 + d;
    ns = NofibPrelude.enumFromTo(5000, tmp);
    tmp1 = 10000 + d;
    ms = NofibPrelude.enumFromTo(10000, tmp1);
    lambda = (undefined, function (caseScrut) {
      let element1$, element0$, tmp3;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
        element0$ = runtime.Tuple.get(caseScrut, 0);
        element1$ = runtime.Tuple.get(caseScrut, 1);
        tmp3 = gcd.gcdE(element0$, element1$);
        return globalThis.Object.freeze([
          element0$,
          element1$,
          tmp3
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    tmp2 = lscomp1(ns);
    tripls = NofibPrelude.map(lambda, tmp2);
    lambda1 = (undefined, function (caseScrut) {
      let element2$, element2$1, element1$, element0$, tmp3, tmp4;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 3) {
        runtime.Tuple.get(caseScrut, 0);
        runtime.Tuple.get(caseScrut, 1);
        element2$ = runtime.Tuple.get(caseScrut, 2);
        if (runtime.Tuple.isArrayLike(element2$) && element2$.length === 3) {
          element0$ = runtime.Tuple.get(element2$, 0);
          element1$ = runtime.Tuple.get(element2$, 1);
          element2$1 = runtime.Tuple.get(element2$, 2);
          tmp3 = element0$ + element1$;
          tmp4 = tmp3 + element2$1;
          return NofibPrelude.abs(tmp4)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    rs = NofibPrelude.map(lambda1, tripls);
    return gcd.max_(rs)
  } 
  static testGcd_nofib(x) {
    return gcd.test(x)
  } 
  static main() {
    return gcd.testGcd_nofib(40)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "gcd"]; 
});
let gcd = gcd1; export default gcd;
