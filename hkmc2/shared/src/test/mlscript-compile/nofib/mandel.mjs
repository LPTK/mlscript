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
    let a, b, arg$Complex$0$, arg$Complex$1$, tmp, tmp1, tmp2;
    if (c instanceof mandel.Complex.class) {
      arg$Complex$0$ = c.r;
      arg$Complex$1$ = c.i;
      b = arg$Complex$1$;
      a = arg$Complex$0$;
      tmp = a * a;
      tmp1 = b * b;
      tmp2 = tmp + tmp1;
      return NofibPrelude.sqrt(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static comp_times(x, y) {
    let a, b, c, d, arg$Complex$0$, arg$Complex$1$, arg$Complex$0$1, arg$Complex$1$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (x instanceof mandel.Complex.class) {
      arg$Complex$0$ = x.r;
      arg$Complex$1$ = x.i;
      b = arg$Complex$1$;
      a = arg$Complex$0$;
      if (y instanceof mandel.Complex.class) {
        arg$Complex$0$1 = y.r;
        arg$Complex$1$1 = y.i;
        d = arg$Complex$1$1;
        c = arg$Complex$0$1;
        tmp = a * c;
        tmp1 = b * d;
        tmp2 = tmp - tmp1;
        tmp3 = a * d;
        tmp4 = b * c;
        tmp5 = tmp3 + tmp4;
        return mandel.Complex(tmp2, tmp5)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static comp_plus(x, y) {
    let a, b, c, d, arg$Complex$0$, arg$Complex$1$, arg$Complex$0$1, arg$Complex$1$1, tmp, tmp1;
    if (x instanceof mandel.Complex.class) {
      arg$Complex$0$ = x.r;
      arg$Complex$1$ = x.i;
      b = arg$Complex$1$;
      a = arg$Complex$0$;
      if (y instanceof mandel.Complex.class) {
        arg$Complex$0$1 = y.r;
        arg$Complex$1$1 = y.i;
        d = arg$Complex$1$1;
        c = arg$Complex$0$1;
        tmp = a + c;
        tmp1 = b + d;
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
      let scrut, x, xs, scrut1, arg$LzCons$0$, arg$LzCons$1$, tmp2;
      scrut = NofibPrelude.force(ls);
      if (scrut instanceof NofibPrelude.LzNil.class) {
        return 0
      } else if (scrut instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$ = scrut.head;
        arg$LzCons$1$ = scrut.tail;
        xs = arg$LzCons$1$;
        x = arg$LzCons$0$;
        scrut1 = mandel.diverge(x, radius);
        if (scrut1 === true) {
          return 0
        }
        tmp2 = walkIt(xs);
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
          let s, t2, arg$Cons$0$1, arg$Cons$1$1, tmp8, tmp9;
          if (ls2 instanceof NofibPrelude.Nil.class) {
            return lscomp1(t1)
          } else if (ls2 instanceof NofibPrelude.Cons.class) {
            let s1, t3, inlinedVal, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17;
            arg$Cons$0$1 = ls2.head;
            arg$Cons$1$1 = ls2.tail;
            t2 = arg$Cons$1$1;
            s = arg$Cons$0$1;
            s1 = s;
            t3 = t;
            tmp10 = x_ - x;
            tmp11 = s1 * tmp10;
            tmp12 = tmp11 / screenX;
            tmp13 = x + tmp12;
            tmp14 = y_ - y;
            tmp15 = t3 * tmp14;
            tmp16 = tmp15 / screenY;
            tmp17 = y + tmp16;
            inlinedVal = mandel.Complex(tmp13, tmp17);
            tmp8 = inlinedVal;
            tmp9 = lscomp2(t2);
            return NofibPrelude.Cons(tmp8, tmp9)
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
    let minx, miny, maxx, maxy, screenX, screenY, limit;
    minx = - 2.0;
    miny = - 2.0;
    maxx = 2.0;
    maxy = 2.0;
    screenX = 25;
    screenY = 25;
    limit = 75;
    return mandel.mandelset(minx, miny, maxx, maxy, screenX, screenY, limit)
  } 
  static main() {
    return mandel.testMandel_nofib(0)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "mandel"]; 
});
let mandel = mandel1; export default mandel;
