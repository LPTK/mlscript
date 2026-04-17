const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
let cryptarithm11;
(class cryptarithm1 {
  static {
    cryptarithm11 = this
  }
  static expand(a, b, c, d, e, f) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    tmp = e * 10;
    tmp1 = f + tmp;
    tmp2 = d * 100;
    tmp3 = tmp1 + tmp2;
    tmp4 = c * 1000;
    tmp5 = tmp3 + tmp4;
    tmp6 = b * 10000;
    tmp7 = tmp5 + tmp6;
    tmp8 = a * 100000;
    return tmp7 + tmp8
  } 
  static condition(thirywelvn) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2, arg$Cons$0$3, arg$Cons$1$3, arg$Cons$0$4, arg$Cons$1$4, arg$Cons$0$5, arg$Cons$1$5, arg$Cons$0$6, arg$Cons$1$6, arg$Cons$0$7, arg$Cons$1$7, arg$Cons$0$8, arg$Cons$1$8, arg$Cons$0$9, arg$Cons$1$9, tmp, tmp1, tmp2, tmp3, tmp4;
    if (thirywelvn instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = thirywelvn.head;
      arg$Cons$1$ = thirywelvn.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = arg$Cons$1$.head;
        arg$Cons$1$1 = arg$Cons$1$.tail;
        if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$2 = arg$Cons$1$1.head;
          arg$Cons$1$2 = arg$Cons$1$1.tail;
          if (arg$Cons$1$2 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$3 = arg$Cons$1$2.head;
            arg$Cons$1$3 = arg$Cons$1$2.tail;
            if (arg$Cons$1$3 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$4 = arg$Cons$1$3.head;
              arg$Cons$1$4 = arg$Cons$1$3.tail;
              if (arg$Cons$1$4 instanceof NofibPrelude.Cons.class) {
                arg$Cons$0$5 = arg$Cons$1$4.head;
                arg$Cons$1$5 = arg$Cons$1$4.tail;
                if (arg$Cons$1$5 instanceof NofibPrelude.Cons.class) {
                  arg$Cons$0$6 = arg$Cons$1$5.head;
                  arg$Cons$1$6 = arg$Cons$1$5.tail;
                  if (arg$Cons$1$6 instanceof NofibPrelude.Cons.class) {
                    arg$Cons$0$7 = arg$Cons$1$6.head;
                    arg$Cons$1$7 = arg$Cons$1$6.tail;
                    if (arg$Cons$1$7 instanceof NofibPrelude.Cons.class) {
                      arg$Cons$0$8 = arg$Cons$1$7.head;
                      arg$Cons$1$8 = arg$Cons$1$7.tail;
                      if (arg$Cons$1$8 instanceof NofibPrelude.Cons.class) {
                        arg$Cons$0$9 = arg$Cons$1$8.head;
                        arg$Cons$1$9 = arg$Cons$1$8.tail;
                        if (arg$Cons$1$9 instanceof NofibPrelude.Nil.class) {
                          tmp = cryptarithm1.expand(arg$Cons$0$, arg$Cons$0$1, arg$Cons$0$2, arg$Cons$0$3, arg$Cons$0$, arg$Cons$0$4);
                          tmp1 = cryptarithm1.expand(arg$Cons$0$, arg$Cons$0$5, arg$Cons$0$6, arg$Cons$0$7, arg$Cons$0$8, arg$Cons$0$6);
                          tmp2 = 5 * tmp1;
                          tmp3 = tmp + tmp2;
                          tmp4 = cryptarithm1.expand(arg$Cons$0$9, arg$Cons$0$2, arg$Cons$0$9, arg$Cons$0$6, arg$Cons$0$, arg$Cons$0$4);
                          return tmp3 == tmp4
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static addj(j, ls) {
    let lscomp, k, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (ls instanceof NofibPrelude.Nil.class) {
      tmp = NofibPrelude.Cons(j, NofibPrelude.Nil);
      return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      k = arg$Cons$0$;
      lscomp = function lscomp(p1) {
        let arg$Cons$0$1, arg$Cons$1$1, tmp5, tmp6;
        if (p1 instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (p1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = p1.head;
          arg$Cons$1$1 = p1.tail;
          tmp5 = NofibPrelude.Cons(k, arg$Cons$0$1);
          tmp6 = lscomp(arg$Cons$1$1);
          return NofibPrelude.Cons(tmp5, tmp6)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      tmp1 = NofibPrelude.Cons(k, arg$Cons$1$);
      tmp2 = NofibPrelude.Cons(j, tmp1);
      tmp3 = cryptarithm1.addj(j, arg$Cons$1$);
      tmp4 = lscomp(tmp3);
      return NofibPrelude.Cons(tmp2, tmp4)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static permutations(ls) {
    let lscomp1, j, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil)
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      j = arg$Cons$0$;
      lscomp1 = function lscomp1(p1) {
        let lscomp2, t1, arg$Cons$0$1, arg$Cons$1$1, tmp1;
        if (p1 instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (p1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = p1.head;
          arg$Cons$1$1 = p1.tail;
          t1 = arg$Cons$1$1;
          lscomp2 = function lscomp2(p2) {
            let arg$Cons$0$2, arg$Cons$1$2, tmp2;
            if (p2 instanceof NofibPrelude.Nil.class) {
              return lscomp1(t1)
            } else if (p2 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$2 = p2.head;
              arg$Cons$1$2 = p2.tail;
              tmp2 = lscomp2(arg$Cons$1$2);
              return NofibPrelude.Cons(arg$Cons$0$2, tmp2)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          };
          tmp1 = cryptarithm1.addj(j, arg$Cons$0$1);
          return lscomp2(tmp1)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      tmp = cryptarithm1.permutations(arg$Cons$1$);
      return lscomp1(tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static testCryptarithm_nofib(n) {
    let lambda, tmp;
    lambda = (undefined, function (i) {
      let p0, tmp1, tmp2, tmp3;
      tmp1 = 9 + i;
      tmp2 = NofibPrelude.enumFromTo(0, tmp1);
      p0 = NofibPrelude.take(10, tmp2);
      tmp3 = cryptarithm1.permutations(p0);
      return NofibPrelude.filter(cryptarithm1.condition, tmp3)
    });
    tmp = NofibPrelude.enumFromTo(1, n);
    return NofibPrelude.map(lambda, tmp)
  } 
  static main() {
    return cryptarithm1.testCryptarithm_nofib(1)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "cryptarithm1"]; 
});
let cryptarithm1 = cryptarithm11; export default cryptarithm1;
