const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let integer1;
(class integer {
  static {
    integer1 = this
  }
  static integerbench(op, astart, astep, alim, bstart, bstep, blim) {
    let lscomp1, tmp, tmp1;
    lscomp1 = function lscomp1(ls) {
      let lscomp2, a, t1, arg$Cons$0$, arg$Cons$1$, tmp2, tmp3;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        t1 = arg$Cons$1$;
        a = arg$Cons$0$;
        lscomp2 = function lscomp2(ls1) {
          let arg$Cons$0$1, arg$Cons$1$1, tmp4, tmp5;
          if (ls1 instanceof NofibPrelude.Nil.class) {
            return lscomp1(t1)
          } else if (ls1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = ls1.head;
            arg$Cons$1$1 = ls1.tail;
            tmp4 = runtime.safeCall(op(a, arg$Cons$0$1));
            tmp5 = lscomp2(arg$Cons$1$1);
            return NofibPrelude.Cons(tmp4, tmp5)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        };
        tmp2 = bstart + bstep;
        tmp3 = NofibPrelude.enumFromThenTo(bstart, tmp2, blim);
        return lscomp2(tmp3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = astart + astep;
    tmp1 = NofibPrelude.enumFromThenTo(astart, tmp, alim);
    return lscomp1(tmp1)
  } 
  static intbench(op, astart, astep, alim, bstart, bstep, blim) {
    let lscomp1, tmp, tmp1;
    lscomp1 = function lscomp1(ls) {
      let lscomp2, a, t1, arg$Cons$0$, arg$Cons$1$, tmp2, tmp3;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        t1 = arg$Cons$1$;
        a = arg$Cons$0$;
        lscomp2 = function lscomp2(ls1) {
          let arg$Cons$0$1, arg$Cons$1$1, tmp4, tmp5;
          if (ls1 instanceof NofibPrelude.Nil.class) {
            return lscomp1(t1)
          } else if (ls1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = ls1.head;
            arg$Cons$1$1 = ls1.tail;
            tmp4 = runtime.safeCall(op(a, arg$Cons$0$1));
            tmp5 = lscomp2(arg$Cons$1$1);
            return NofibPrelude.Cons(tmp4, tmp5)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        };
        tmp2 = bstart + bstep;
        tmp3 = NofibPrelude.enumFromThenTo(bstart, tmp2, blim);
        return lscomp2(tmp3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = astart + astep;
    tmp1 = NofibPrelude.enumFromThenTo(astart, tmp, alim);
    return lscomp1(tmp1)
  } 
  static runbench(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
    let tmp;
    integer.intbench(iop, astart, astep, alim, astart, astep, alim);
    tmp = integer.integerbench(jop, astart, astep, alim, astart, astep, alim);
    return tmp
  } 
  static runalltests(astart, astep, alim, bstart, bstep, blim) {
    let lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, tmp;
    lambda = (undefined, function (a, b) {
      let inlinedVal;
      inlinedVal = a + b;
      return inlinedVal
    });
    lambda1 = (undefined, function (a, b) {
      return a + b
    });
    integer.runbench(lambda, lambda1, "(+)", astart, astep, alim, astart, astep, alim);
    lambda2 = (undefined, function (a, b) {
      let inlinedVal;
      inlinedVal = a - b;
      return inlinedVal
    });
    lambda3 = (undefined, function (a, b) {
      return a - b
    });
    integer.runbench(lambda2, lambda3, "(-)", astart, astep, alim, astart, astep, alim);
    lambda4 = (undefined, function (a, b) {
      let inlinedVal;
      inlinedVal = a * b;
      return inlinedVal
    });
    lambda5 = (undefined, function (a, b) {
      return a * b
    });
    integer.runbench(lambda4, lambda5, "(*)", astart, astep, alim, astart, astep, alim);
    lambda6 = (undefined, function (a, b) {
      let inlinedVal;
      inlinedVal = NofibPrelude.intDiv(a, b);
      return inlinedVal
    });
    lambda7 = (undefined, function (a, b) {
      return NofibPrelude.intDiv(a, b)
    });
    integer.runbench(lambda6, lambda7, "div", astart, astep, alim, astart, astep, alim);
    lambda8 = (undefined, function (a, b) {
      let inlinedVal;
      inlinedVal = NofibPrelude.intMod(a, b);
      return inlinedVal
    });
    lambda9 = (undefined, function (a, b) {
      return NofibPrelude.intMod(a, b)
    });
    integer.runbench(lambda8, lambda9, "mod", astart, astep, alim, astart, astep, alim);
    lambda10 = (undefined, function (a, b) {
      let inlinedVal;
      inlinedVal = a == b;
      return inlinedVal
    });
    lambda11 = (undefined, function (a, b) {
      return a == b
    });
    integer.runbench(lambda10, lambda11, "(==)", astart, astep, alim, astart, astep, alim);
    lambda12 = (undefined, function (a, b) {
      let inlinedVal;
      inlinedVal = a < b;
      return inlinedVal
    });
    lambda13 = (undefined, function (a, b) {
      return a < b
    });
    integer.runbench(lambda12, lambda13, "(<)", astart, astep, alim, astart, astep, alim);
    lambda14 = (undefined, function (a, b) {
      let inlinedVal;
      inlinedVal = a <= b;
      return inlinedVal
    });
    lambda15 = (undefined, function (a, b) {
      return a <= b
    });
    integer.runbench(lambda14, lambda15, "(<=)", astart, astep, alim, astart, astep, alim);
    lambda16 = (undefined, function (a, b) {
      let inlinedVal;
      inlinedVal = a > b;
      return inlinedVal
    });
    lambda17 = (undefined, function (a, b) {
      return a > b
    });
    integer.runbench(lambda16, lambda17, "(>)", astart, astep, alim, astart, astep, alim);
    lambda18 = (undefined, function (a, b) {
      let inlinedVal;
      inlinedVal = a >= b;
      return inlinedVal
    });
    lambda19 = (undefined, function (a, b) {
      return a >= b
    });
    tmp = integer.runbench(lambda18, lambda19, "(>=)", astart, astep, alim, astart, astep, alim);
    return tmp
  } 
  static testInteger_nofib(n) {
    return integer.runalltests(-2100000000, n, 2100000000, -2100000000, n, -2100000000)
  } 
  static main() {
    let tmp;
    tmp = integer.testInteger_nofib(700000001);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "integer"]; 
});
let integer = integer1; export default integer;
