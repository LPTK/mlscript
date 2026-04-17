const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let primetest1;
(class primetest {
  static {
    primetest1 = this
  }
  static even(x) {
    let tmp;
    tmp = NofibPrelude.intMod(x, 2);
    return tmp == 0
  } 
  static int_val_of_char(x) {
    let tmp;
    tmp = NofibPrelude.int_of_char(x);
    return tmp - 48
  } 
  static int_val_of_string(s) {
    let f;
    f = function f(l, a) {
      let t, h, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2;
      if (l instanceof NofibPrelude.Nil.class) {
        return a
      } else if (l instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        t = arg$Cons$1$;
        h = arg$Cons$0$;
        tmp = 10 * a;
        tmp1 = primetest.int_val_of_char(h);
        tmp2 = tmp + tmp1;
        return f(t, tmp2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    return f(s, 0)
  } 
  static break_(p, ls) {
    let x, xs, scrut, scrut1, ys, zs, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return globalThis.Object.freeze([
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ])
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      xs = arg$Cons$1$;
      x = arg$Cons$0$;
      scrut = runtime.safeCall(p(x));
      if (scrut === true) {
        tmp = NofibPrelude.Cons(x, xs);
        return globalThis.Object.freeze([
          NofibPrelude.Nil,
          tmp
        ])
      }
      scrut1 = primetest.break_(p, xs);
      if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
        element0$ = runtime.Tuple.get(scrut1, 0);
        element1$ = runtime.Tuple.get(scrut1, 1);
        zs = element1$;
        ys = element0$;
        tmp1 = NofibPrelude.Cons(x, ys);
        return globalThis.Object.freeze([
          tmp1,
          zs
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static lines(s) {
    let scrut, s_, l, tt, s__, element1$, element0$, lambda, arg$Cons$1$, tmp;
    lambda = (undefined, function (x) {
      return x == "|"
    });
    scrut = primetest.break_(lambda, s);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      s_ = element1$;
      l = element0$;
      if (s_ instanceof NofibPrelude.Nil.class) {
        tmp = NofibPrelude.Nil;
      } else if (s_ instanceof NofibPrelude.Cons.class) {
        arg$Cons$1$ = s_.tail;
        s__ = arg$Cons$1$;
        tmp = primetest.lines(s__);
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      tt = tmp;
      return NofibPrelude.Cons(l, tt)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static makeNumber(b, ls) {
    let lambda;
    lambda = (undefined, function (a, x) {
      let tmp;
      tmp = a * b;
      return tmp + x
    });
    return NofibPrelude.foldl(lambda, 0, ls)
  } 
  static chop(b, n) {
    let chop_;
    chop_ = function chop_(a, n1) {
      let scrut, q, r, scrut1, element1$, element0$, tmp;
      scrut = NofibPrelude.divMod(n1, b);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        r = element1$;
        q = element0$;
        scrut1 = n1 == 0;
        if (scrut1 === true) {
          return a
        }
        tmp = NofibPrelude.Cons(r, a);
        return chop_(tmp, q);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    return chop_(NofibPrelude.Nil, n)
  } 
  static powerMod(a, b, m) {
    let f, scrut, a_, tmp;
    f = function f(a1, b1, c) {
      let g, scrut1;
      g = function g(a2, b2) {
        let scrut2, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
        scrut2 = primetest.even(b2);
        if (scrut2 === true) {
          tmp1 = a2 * a2;
          tmp2 = NofibPrelude.intMod(tmp1, m);
          tmp3 = NofibPrelude.intDiv(b2, 2);
          return g(tmp2, tmp3)
        }
        tmp4 = b2 - 1;
        tmp5 = a2 * c;
        tmp6 = NofibPrelude.intMod(tmp5, m);
        return f(a2, tmp4, tmp6);
      };
      scrut1 = b1 == 0;
      if (scrut1 === true) {
        return c
      }
      return g(a1, b1);
    };
    scrut = b == 0;
    if (scrut === true) {
      return 1
    }
    a_ = NofibPrelude.intMod(a, m);
    tmp = b - 1;
    return f(a_, tmp, a_);
  } 
  static log2(x) {
    let tmp;
    tmp = primetest.chop(2, x);
    return NofibPrelude.listLen(tmp)
  } 
  static rands(s1, s2) {
    let k, s1_, s1__, scrut, k_, s2_, s2__, scrut1, z, scrut2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, lambda, lambda1;
    k = NofibPrelude.intDiv(s1, 53668);
    tmp = k * 53668;
    tmp1 = s1 - tmp;
    tmp2 = 40014 * tmp1;
    tmp3 = k * 12211;
    s1_ = tmp2 - tmp3;
    scrut = s1_ < 0;
    if (scrut === true) {
      tmp4 = s1_ + 2147483563;
    } else {
      tmp4 = s1_;
    }
    s1__ = tmp4;
    k_ = NofibPrelude.intDiv(s2, 52774);
    tmp5 = k_ * 52774;
    tmp6 = s2 - tmp5;
    tmp7 = 40692 * tmp6;
    tmp8 = k_ * 3791;
    s2_ = tmp7 - tmp8;
    scrut1 = s2_ < 0;
    if (scrut1 === true) {
      tmp9 = s2_ + 2147483399;
    } else {
      tmp9 = s2_;
    }
    s2__ = tmp9;
    z = s1__ - s2__;
    scrut2 = z < 1;
    if (scrut2 === true) {
      lambda = (undefined, function () {
        let tmp10, tmp11;
        tmp10 = z + 2147483562;
        tmp11 = primetest.rands(s1__, s2__);
        return NofibPrelude.LzCons(tmp10, tmp11)
      });
      return NofibPrelude.lazy(lambda)
    }
    lambda1 = (undefined, function () {
      let tmp10;
      tmp10 = primetest.rands(s1__, s2__);
      return NofibPrelude.LzCons(z, tmp10)
    });
    return NofibPrelude.lazy(lambda1);
  } 
  static randomInts(s1, s2) {
    let scrut, scrut1, scrut2, scrut3;
    scrut = 1 <= s1;
    if (scrut === true) {
      scrut3 = s1 <= 2147483562;
      if (scrut3 === true) {
        scrut2 = 1 <= s2;
        if (scrut2 === true) {
          scrut1 = s2 <= 2147483398;
          if (scrut1 === true) {
            return primetest.rands(s1, s2)
          }
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static findKQ(n) {
    let f, tmp;
    f = function f(k, q) {
      let scrut, r, d, scrut1, element1$, element0$, tmp1;
      scrut = NofibPrelude.divMod(q, 2);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        r = element1$;
        d = element0$;
        scrut1 = r == 0;
        if (scrut1 === true) {
          tmp1 = k + 1;
          return f(tmp1, d)
        }
        return globalThis.Object.freeze([
          k,
          q
        ]);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = n - 1;
    return f(0, tmp)
  } 
  static uniform(nns, rrs) {
    let n, r, n1, ns, rs, r1, t, scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1, tmp2, lambda, tmp3;
    if (nns instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = nns.head;
      arg$Cons$1$ = nns.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        n = arg$Cons$0$;
        if (rrs instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = rrs.head;
          arg$Cons$1$1 = rrs.tail;
          r = arg$Cons$0$1;
          tmp = NofibPrelude.intMod(r, n);
          return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
        }
        ns = arg$Cons$1$;
        n1 = arg$Cons$0$;
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      ns = arg$Cons$1$;
      n1 = arg$Cons$0$;
      if (rrs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = rrs.head;
        arg$Cons$1$1 = rrs.tail;
        rs = arg$Cons$1$1;
        r1 = arg$Cons$0$1;
        tmp1 = n1 + 1;
        t = NofibPrelude.intMod(r1, tmp1);
        scrut = t == n1;
        if (scrut === true) {
          tmp2 = primetest.uniform(ns, rs);
          return NofibPrelude.Cons(t, tmp2)
        }
        lambda = (undefined, function (x) {
          return NofibPrelude.intMod(x, 65536)
        });
        tmp3 = NofibPrelude.map(lambda, rs);
        return NofibPrelude.Cons(t, tmp3);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static random(n, rs) {
    let ns, scrut, rs2, rs1, element1$, element0$, tmp, tmp1, tmp2;
    ns = primetest.chop(65536, n);
    tmp = NofibPrelude.listLen(ns);
    scrut = NofibPrelude.splitAt_lz(tmp, rs);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      rs2 = element1$;
      rs1 = element0$;
      tmp1 = primetest.uniform(ns, rs1);
      tmp2 = primetest.makeNumber(65536, tmp1);
      return globalThis.Object.freeze([
        tmp2,
        rs2
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static singleTestX(n, kq, x) {
    let square, witness, q, k, t, ts, scrut, element1$, element0$, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
    square = function square(x1) {
      let tmp5;
      tmp5 = x1 * x1;
      return NofibPrelude.intMod(tmp5, n)
    };
    witness = function witness(ls) {
      let t1, ts1, scrut1, scrut2, arg$Cons$0$1, arg$Cons$1$1, tmp5;
      if (ls instanceof NofibPrelude.Nil.class) {
        return false
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = ls.head;
        arg$Cons$1$1 = ls.tail;
        ts1 = arg$Cons$1$1;
        t1 = arg$Cons$0$1;
        tmp5 = n - 1;
        scrut1 = t1 == tmp5;
        if (scrut1 === true) {
          return true
        }
        scrut2 = t1 == 1;
        if (scrut2 === true) {
          return false
        }
        return witness(ts1);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    if (runtime.Tuple.isArrayLike(kq) && kq.length === 2) {
      element0$ = runtime.Tuple.get(kq, 0);
      element1$ = runtime.Tuple.get(kq, 1);
      q = element1$;
      k = element0$;
      tmp = primetest.powerMod(x, q, n);
      tmp1 = NofibPrelude.iterate(square, tmp);
      scrut = NofibPrelude.take_lz(k, tmp1);
      if (scrut instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = scrut.head;
        arg$Cons$1$ = scrut.tail;
        ts = arg$Cons$1$;
        t = arg$Cons$0$;
        tmp2 = t == 1;
        if (tmp2 === false) {
          tmp4 = n - 1;
          tmp3 = t == tmp4;
        } else {
          tmp3 = true;
        }
        if (tmp3 === false) {
          return witness(ts)
        }
        return true;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static singleTest(n, kq, rs) {
    let scrut, x, rs_, element1$, element0$, tmp, tmp1, tmp2;
    tmp = n - 2;
    scrut = primetest.random(tmp, rs);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      rs_ = element1$;
      x = element0$;
      tmp1 = 2 + x;
      tmp2 = primetest.singleTestX(n, kq, tmp1);
      return globalThis.Object.freeze([
        tmp2,
        rs_
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static multiTest(k, rs, n) {
    let mTest, scrut, tmp, tmp1, tmp2;
    mTest = function mTest(k1, rs1) {
      let scrut1, scrut2, t, rs_, element1$, element0$, tmp3, tmp4;
      scrut1 = k1 == 0;
      if (scrut1 === true) {
        return globalThis.Object.freeze([
          true,
          rs1
        ])
      }
      tmp3 = primetest.findKQ(n);
      scrut2 = primetest.singleTest(n, tmp3, rs1);
      if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
        element0$ = runtime.Tuple.get(scrut2, 0);
        element1$ = runtime.Tuple.get(scrut2, 1);
        rs_ = element1$;
        t = element0$;
        if (t === true) {
          tmp4 = k1 - 1;
          return mTest(tmp4, rs_)
        }
        return globalThis.Object.freeze([
          false,
          rs_
        ]);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = n <= 1;
    if (tmp === false) {
      tmp1 = primetest.even(n);
    } else {
      tmp1 = true;
    }
    scrut = tmp1;
    if (scrut === true) {
      tmp2 = n == 2;
      return globalThis.Object.freeze([
        tmp2,
        rs
      ])
    }
    return mTest(k, rs);
  } 
  static doLine(cs, cont, rs) {
    let n, scrut, t, rs_, element1$, element0$, tmp, tmp1;
    n = primetest.int_val_of_string(cs);
    scrut = primetest.multiTest(100, rs, n);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      rs_ = element1$;
      t = element0$;
      if (t === true) {
        tmp = runtime.safeCall(cont(rs_));
        return NofibPrelude.Cons("Probably prime", tmp)
      }
      tmp1 = runtime.safeCall(cont(rs_));
      return NofibPrelude.Cons("Composite", tmp1);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static doInput(state, lls) {
    let ls, l, arg$Cons$0$, arg$Cons$1$, lambda;
    if (lls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (lls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = lls.head;
      arg$Cons$1$ = lls.tail;
      ls = arg$Cons$1$;
      l = arg$Cons$0$;
      lambda = (undefined, function (state1) {
        return primetest.doInput(state1, ls)
      });
      return primetest.doLine(l, lambda, state)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static process(process_arg1) {
    let tmp;
    tmp = primetest.randomInts(111, 47);
    return primetest.doInput(tmp, process_arg1)
  } 
  static testPrimetest_nofib(d) {
    let cts, tmp;
    cts = NofibPrelude.nofibStringToList("24|48|47|1317|8901");
    tmp = primetest.lines(cts);
    return primetest.process(tmp)
  } 
  static main() {
    let tmp;
    tmp = primetest.testPrimetest_nofib(0);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "primetest"]; 
});
let primetest = primetest1; export default primetest;
