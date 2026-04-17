const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let mandel1;
(class mandel {
  static {
    mandel1 = this
  }
  static {
    this.Pixmap = function Pixmap(a, b, c, d) {
      return globalThis.Object.freeze(new Pixmap.class(a, b, c, d));
    };
    (class Pixmap {
      static {
        mandel.Pixmap.class = this
      }
      constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Pixmap", ["a", "b", "c", "d"]]; 
    });
    this.Complex = function Complex(r, i) {
      return globalThis.Object.freeze(new Complex.class(r, i));
    };
    (class Complex {
      static {
        mandel.Complex.class = this
      }
      constructor(r, i) {
        this.r = r;
        this.i = i;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Complex", ["r", "i"]]; 
    });
  }
  static createPixmap(width, height, max, colours) {
    return mandel.Pixmap(width, height, max, colours)
  } 
  static comp_magnitude(c) {
    let arg$Complex$0$, arg$Complex$1$, tmp, tmp1, tmp2;
    if (c instanceof mandel.Complex.class) {
      arg$Complex$0$ = c.r;
      arg$Complex$1$ = c.i;
      tmp = arg$Complex$0$ * arg$Complex$0$;
      tmp1 = arg$Complex$1$ * arg$Complex$1$;
      tmp2 = tmp + tmp1;
      return NofibPrelude.sqrt(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static comp_times(x, y) {
    let arg$Complex$0$, arg$Complex$1$, arg$Complex$0$1, arg$Complex$1$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (x instanceof mandel.Complex.class) {
      arg$Complex$0$ = x.r;
      arg$Complex$1$ = x.i;
      if (y instanceof mandel.Complex.class) {
        arg$Complex$0$1 = y.r;
        arg$Complex$1$1 = y.i;
        tmp = arg$Complex$0$ * arg$Complex$0$1;
        tmp1 = arg$Complex$1$ * arg$Complex$1$1;
        tmp2 = tmp - tmp1;
        tmp3 = arg$Complex$0$ * arg$Complex$1$1;
        tmp4 = arg$Complex$1$ * arg$Complex$0$1;
        tmp5 = tmp3 + tmp4;
        return mandel.Complex(tmp2, tmp5)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static comp_plus(x, y) {
    let arg$Complex$0$, arg$Complex$1$, arg$Complex$0$1, arg$Complex$1$1, tmp, tmp1;
    if (x instanceof mandel.Complex.class) {
      arg$Complex$0$ = x.r;
      arg$Complex$1$ = x.i;
      if (y instanceof mandel.Complex.class) {
        arg$Complex$0$1 = y.r;
        arg$Complex$1$1 = y.i;
        tmp = arg$Complex$0$ + arg$Complex$0$1;
        tmp1 = arg$Complex$1$ + arg$Complex$1$1;
        return mandel.Complex(tmp, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static mandel(c) {
    let infiniteMandel;
    infiniteMandel = function infiniteMandel() {
      let lambda;
      lambda = (undefined, function () {
        let lambda1, tmp, tmp1;
        lambda1 = (undefined, function (z) {
          let tmp2;
          tmp2 = mandel.comp_times(z, z);
          return mandel.comp_plus(tmp2, c)
        });
        tmp = infiniteMandel();
        tmp1 = NofibPrelude.map_lz(lambda1, tmp);
        return NofibPrelude.LzCons(c, tmp1)
      });
      return NofibPrelude.lazy(lambda)
    };
    return infiniteMandel()
  } 
  static diverge(cmplx, radius) {
    let tmp;
    tmp = mandel.comp_magnitude(cmplx);
    return tmp > radius
  } 
  static whenDiverge(limit, radius, c) {
    let walkIt, tmp, tmp1;
    walkIt = function walkIt(ls) {
      let scrut, scrut1, arg$LzCons$0$, arg$LzCons$1$, tmp2;
      scrut = NofibPrelude.force(ls);
      if (scrut instanceof NofibPrelude.LzNil.class) {
        return 0
      } else if (scrut instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$ = scrut.head;
        arg$LzCons$1$ = scrut.tail;
        scrut1 = mandel.diverge(arg$LzCons$0$, radius);
        if (scrut1 === true) {
          return 0
        }
        tmp2 = walkIt(arg$LzCons$1$);
        return 1 + tmp2;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = mandel.mandel(c);
    tmp1 = NofibPrelude.take_lz_lz(limit, tmp);
    return walkIt(tmp1)
  } 
  static parallelMandel(mat, limit, radius) {
    let lambda;
    lambda = (undefined, function (c) {
      return mandel.whenDiverge(limit, radius, c)
    });
    return NofibPrelude.map(lambda, mat)
  } 
  static mandelset(x, y, x_, y_, screenX, screenY, lIMIT) {
    let lscomp1, prettyRGB, result, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    prettyRGB = function prettyRGB(s) {
      let t;
      t = lIMIT - s;
      return globalThis.Object.freeze([
        s,
        t,
        t
      ])
    };
    lscomp1 = function lscomp1(ls1) {
      let lscomp2, t, t1, arg$Cons$0$, arg$Cons$1$, tmp7;
      if (ls1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls1 instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls1.head;
        arg$Cons$1$ = ls1.tail;
        t1 = arg$Cons$1$;
        t = arg$Cons$0$;
        lscomp2 = function lscomp2(ls2) {
          let arg$Cons$0$1, arg$Cons$1$1, tmp8;
          if (ls2 instanceof NofibPrelude.Nil.class) {
            return lscomp1(t1)
          } else if (ls2 instanceof NofibPrelude.Cons.class) {
            let t2, inlinedVal, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16;
            arg$Cons$0$1 = ls2.head;
            arg$Cons$1$1 = ls2.tail;
            t2 = t;
            tmp9 = x_ - x;
            tmp10 = arg$Cons$0$1 * tmp9;
            tmp11 = tmp10 / screenX;
            tmp12 = x + tmp11;
            tmp13 = y_ - y;
            tmp14 = t2 * tmp13;
            tmp15 = tmp14 / screenY;
            tmp16 = y + tmp15;
            inlinedVal = mandel.Complex(tmp12, tmp16);
            tmp8 = lscomp2(arg$Cons$1$1);
            return NofibPrelude.Cons(inlinedVal, tmp8)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        };
        tmp7 = NofibPrelude.enumFromTo(1, screenX);
        return lscomp2(tmp7)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = NofibPrelude.enumFromTo(1, screenY);
    tmp1 = lscomp1(tmp);
    tmp2 = x_ - x;
    tmp3 = y_ - y;
    tmp4 = NofibPrelude.max(tmp2, tmp3);
    tmp5 = tmp4 / 2;
    result = mandel.parallelMandel(tmp1, lIMIT, tmp5);
    tmp6 = NofibPrelude.map(prettyRGB, result);
    return mandel.createPixmap(screenX, screenY, lIMIT, tmp6)
  } 
  static testMandel_nofib(dummy) {
    let minx, miny;
    minx = - 2.0;
    miny = - 2.0;
    return mandel.mandelset(minx, miny, 2.0, 2.0, 25, 25, 75)
  } 
  static main() {
    return mandel.testMandel_nofib(0)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "mandel"]; 
});
let mandel = mandel1; export default mandel;
