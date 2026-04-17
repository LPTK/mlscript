const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let para1;
(class para {
  static {
    para1 = this
  }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
    this.maxw = 70;
    this.optw = 63;
    tmp = globalThis.Object.freeze([
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ]);
    this.nil_ = tmp;
    tmp1 = NofibPrelude.nofibStringToList("In the constructive programming community it is commonplace to see ");
    tmp2 = NofibPrelude.nofibStringToList("formal developments of textbook algorithms. In the algorithm design ");
    tmp3 = NofibPrelude.nofibStringToList("community, on the other hand, it may be well known that the textbook ");
    tmp4 = NofibPrelude.nofibStringToList("solution to a problem is not the most efficient possible. However, in ");
    tmp5 = NofibPrelude.nofibStringToList("presenting the more efficient solution, the algorithm designer will ");
    tmp6 = NofibPrelude.nofibStringToList("usually omit some of the implementation details, this creating an ");
    tmp7 = NofibPrelude.nofibStringToList("algorithm gap between the abstract algorithm and its concrete ");
    tmp8 = NofibPrelude.nofibStringToList("implementation. This is in contrast to the formal development, which ");
    tmp9 = NofibPrelude.nofibStringToList("usually presents the complete concrete implementation of the less ");
    tmp10 = NofibPrelude.nofibStringToList("efficient solution.\n\n");
    tmp11 = NofibPrelude.Cons(tmp10, NofibPrelude.Nil);
    tmp12 = NofibPrelude.Cons(tmp9, tmp11);
    tmp13 = NofibPrelude.Cons(tmp8, tmp12);
    tmp14 = NofibPrelude.Cons(tmp7, tmp13);
    tmp15 = NofibPrelude.Cons(tmp6, tmp14);
    tmp16 = NofibPrelude.Cons(tmp5, tmp15);
    tmp17 = NofibPrelude.Cons(tmp4, tmp16);
    tmp18 = NofibPrelude.Cons(tmp3, tmp17);
    tmp19 = NofibPrelude.Cons(tmp2, tmp18);
    tmp20 = NofibPrelude.Cons(tmp1, tmp19);
    tmp21 = NofibPrelude.concat(tmp20);
    this.test = tmp21;
  }
  static unwords(ws) {
    let go, w, ws1, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ws instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ws instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ws.head;
      arg$Cons$1$ = ws.tail;
      ws1 = arg$Cons$1$;
      w = arg$Cons$0$;
      go = function go(vs) {
        let v, vs1, arg$Cons$0$1, arg$Cons$1$1, tmp1, tmp2;
        if (vs instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (vs instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = vs.head;
          arg$Cons$1$1 = vs.tail;
          vs1 = arg$Cons$1$1;
          v = arg$Cons$0$1;
          tmp1 = go(vs1);
          tmp2 = NofibPrelude.append(v, tmp1);
          return NofibPrelude.Cons(" ", tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      tmp = go(ws1);
      return NofibPrelude.append(w, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static break_(p, xs) {
    let x, xs1, scrut, scrut1, ys, zs, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Nil.class) {
      return globalThis.Object.freeze([
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ])
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      xs1 = arg$Cons$1$;
      x = arg$Cons$0$;
      scrut = runtime.safeCall(p(x));
      if (scrut === true) {
        tmp = NofibPrelude.Cons(x, xs1);
        return globalThis.Object.freeze([
          NofibPrelude.Nil,
          tmp
        ])
      }
      scrut1 = para.break_(p, xs1);
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
  static isSpace(c) {
    return c === " "
  } 
  static words(s) {
    let scrut, t, h, scrut1, s_, w, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
    scrut = NofibPrelude.leaveWhile(para.isSpace, s);
    if (scrut instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (scrut instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = scrut.head;
      arg$Cons$1$ = scrut.tail;
      t = arg$Cons$1$;
      h = arg$Cons$0$;
      tmp = NofibPrelude.Cons(h, t);
      scrut1 = para.break_(para.isSpace, tmp);
      if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
        element0$ = runtime.Tuple.get(scrut1, 0);
        element1$ = runtime.Tuple.get(scrut1, 1);
        s_ = element1$;
        w = element0$;
        tmp1 = para.words(s_);
        return NofibPrelude.Cons(w, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static lines(s) {
    let scrut, s_, l, s__, element1$, element0$, lambda, arg$Cons$1$, tmp;
    lambda = (undefined, function (x) {
      return x === "\n"
    });
    scrut = para.break_(lambda, s);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      s_ = element1$;
      l = element0$;
      if (s_ instanceof NofibPrelude.Nil.class) {
        tmp = NofibPrelude.Nil;
        return NofibPrelude.Cons(l, tmp)
      } else if (s_ instanceof NofibPrelude.Cons.class) {
        arg$Cons$1$ = s_.tail;
        s__ = arg$Cons$1$;
        tmp = para.lines(s__);
        return NofibPrelude.Cons(l, tmp)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static unlines(ls) {
    let lambda, tmp;
    lambda = (undefined, function (l) {
      let tmp1;
      tmp1 = NofibPrelude.nofibStringToList("\n");
      return NofibPrelude.append(l, tmp1)
    });
    tmp = NofibPrelude.map(lambda, ls);
    return NofibPrelude.concat(tmp)
  } 
  static all(p, xs) {
    loopLabel: while (true) {
      let x, xs1, arg$Cons$0$, arg$Cons$1$, tmp;
      if (xs instanceof NofibPrelude.Nil.class) {
        return true
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        xs1 = arg$Cons$1$;
        x = arg$Cons$0$;
        tmp = runtime.safeCall(p(x));
        if (tmp === true) {
          xs = xs1;
          continue loopLabel
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static fold1(f, g, xs) {
    let a, x, a1, arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        a = arg$Cons$0$;
        return runtime.safeCall(g(a))
      }
      x = arg$Cons$1$;
      a1 = arg$Cons$0$;
      tmp = para.fold1(f, g, x);
      return runtime.safeCall(f(a1, tmp));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static scan1(f, g, xs) {
    let lambda, lambda1;
    lambda = (undefined, function (a, s) {
      let tmp, tmp1;
      tmp = NofibPrelude.head(s);
      tmp1 = runtime.safeCall(f(a, tmp));
      return NofibPrelude.Cons(tmp1, s)
    });
    lambda1 = (undefined, function (a) {
      let tmp;
      tmp = runtime.safeCall(g(a));
      return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
    });
    return para.fold1(lambda, lambda1, xs)
  } 
  static tails(xs) {
    let lambda, lambda1;
    lambda = (undefined, function (a, s) {
      return NofibPrelude.Cons(a, s)
    });
    lambda1 = (undefined, function (a) {
      return NofibPrelude.Cons(a, NofibPrelude.Nil)
    });
    return para.scan1(lambda, lambda1, xs)
  } 
  static single(xs) {
    let arg$Cons$1$;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$1$ = xs.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        return true
      }
      return false;
    }
    return false;
  } 
  static minWith(f, xs) {
    let lambda, lambda1;
    lambda = (undefined, function (a, b) {
      let scrut, tmp, tmp1;
      tmp = runtime.safeCall(f(a));
      tmp1 = runtime.safeCall(f(b));
      scrut = tmp < tmp1;
      if (scrut === true) {
        return a
      }
      return b;
    });
    lambda1 = (undefined, function (x) {
      return x
    });
    return para.fold1(lambda, lambda1, xs)
  } 
  static new_(w, ls) {
    let tmp;
    tmp = NofibPrelude.Cons(w, NofibPrelude.Nil);
    return NofibPrelude.Cons(tmp, ls)
  } 
  static glue(w, ls) {
    let l, ls_, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      ls_ = arg$Cons$1$;
      l = arg$Cons$0$;
      tmp = NofibPrelude.Cons(w, l);
      return NofibPrelude.Cons(tmp, ls_)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static formats(txt) {
    let lambda, lambda1;
    lambda = (undefined, function (w, ps) {
      let lambda2, tmp, lambda3, tmp1;
      lambda2 = (undefined, function (p) {
        return para.new_(w, p)
      });
      tmp = NofibPrelude.map(lambda2, ps);
      lambda3 = (undefined, function (p) {
        return para.glue(w, p)
      });
      tmp1 = NofibPrelude.map(lambda3, ps);
      return NofibPrelude.append(tmp, tmp1)
    });
    lambda1 = (undefined, function (x) {
      let tmp, tmp1;
      tmp = NofibPrelude.Cons(x, NofibPrelude.Nil);
      tmp1 = NofibPrelude.Cons(tmp, NofibPrelude.Nil);
      return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
    });
    return para.fold1(lambda, lambda1, txt)
  } 
  static width(ls) {
    let plus;
    plus = function plus(w, n) {
      let tmp, tmp1;
      tmp = NofibPrelude.listLen(w);
      tmp1 = tmp + 1;
      return tmp1 + n
    };
    return para.fold1(plus, NofibPrelude.listLen, ls)
  } 
  static fits(xs) {
    let tmp;
    tmp = para.width(xs);
    return tmp <= para.maxw
  } 
  static feasible(a) {
    return para.all(para.fits, a)
  } 
  static cost(ls) {
    let plus, lambda;
    plus = function plus(l, n) {
      let tmp, l1, inlinedVal, a, tmp1;
      l1 = l;
      tmp1 = para.width(l1);
      a = para.optw - tmp1;
      inlinedVal = a * a;
      tmp = inlinedVal;
      return tmp + n
    };
    lambda = (undefined, function (x) {
      return 0
    });
    return para.fold1(plus, lambda, ls)
  } 
  static par0(x) {
    let tmp, tmp1;
    tmp = para.formats(x);
    tmp1 = NofibPrelude.filter(para.feasible, tmp);
    return para.minWith(para.cost, tmp1)
  } 
  static fitH(ls) {
    let tmp;
    tmp = NofibPrelude.head(ls);
    return para.fits(tmp)
  } 
  static fst3(a_b_c) {
    let a, element0$;
    if (runtime.Tuple.isArrayLike(a_b_c) && a_b_c.length === 3) {
      element0$ = runtime.Tuple.get(a_b_c, 0);
      runtime.Tuple.get(a_b_c, 1);
      runtime.Tuple.get(a_b_c, 2);
      a = element0$;
      return a
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static snd3(a_b_c) {
    let b, element1$;
    if (runtime.Tuple.isArrayLike(a_b_c) && a_b_c.length === 3) {
      runtime.Tuple.get(a_b_c, 0);
      element1$ = runtime.Tuple.get(a_b_c, 1);
      runtime.Tuple.get(a_b_c, 2);
      b = element1$;
      return b
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static thd3(a_b_c) {
    let c, element2$;
    if (runtime.Tuple.isArrayLike(a_b_c) && a_b_c.length === 3) {
      runtime.Tuple.get(a_b_c, 0);
      runtime.Tuple.get(a_b_c, 1);
      element2$ = runtime.Tuple.get(a_b_c, 2);
      c = element2$;
      return c
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static width_tl(a_b_c) {
    return para.fst3(a_b_c)
  } 
  static cost_tl(a_b_c) {
    return para.snd3(a_b_c)
  } 
  static len_tl(a_b_c) {
    return para.thd3(a_b_c)
  } 
  static tile(ws, a_b) {
    let n, m, ms, l, scrut, ws1, ws2, element1$, element0$, arg$Cons$0$, arg$Cons$1$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      if (element0$ instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (element0$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = element0$.head;
        arg$Cons$1$ = element0$.tail;
        n = element1$;
        ms = arg$Cons$1$;
        m = arg$Cons$0$;
        l = n - m;
        scrut = NofibPrelude.splitAt(l, ws);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          element0$1 = runtime.Tuple.get(scrut, 0);
          element1$1 = runtime.Tuple.get(scrut, 1);
          ws2 = element1$1;
          ws1 = element0$1;
          tmp = NofibPrelude.Cons(m, ms);
          tmp1 = NofibPrelude.leave(l, tmp);
          tmp2 = globalThis.Object.freeze([
            tmp1,
            m
          ]);
          tmp3 = para.tile(ws2, tmp2);
          return NofibPrelude.Cons(ws1, tmp3)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static null__(a_b) {
    let element1$, element0$;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      if (element0$ instanceof NofibPrelude.Nil.class) {
        if (element1$ instanceof NofibPrelude.Nil.class) {
          return true
        }
        return false;
      }
      return false;
    }
    return false;
  } 
  static single_(a_b) {
    let x, y, element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      y = element1$;
      x = element0$;
      tmp = NofibPrelude.null_(x);
      if (tmp === true) {
        tmp1 = para.single(y);
      } else {
        tmp1 = false;
      }
      if (tmp1 === false) {
        tmp2 = para.single(x);
        if (tmp2 === true) {
          return NofibPrelude.null_(y)
        }
        return false;
      }
      return true;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static head_(a_b) {
    let x, y, scrut, element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      y = element1$;
      x = element0$;
      tmp = NofibPrelude.null_(x);
      scrut = ! tmp;
      if (scrut === true) {
        return NofibPrelude.head(x)
      }
      return NofibPrelude.head(y);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static last_(a_b) {
    let x, y, scrut, element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      x = element1$;
      y = element0$;
      tmp = NofibPrelude.null_(x);
      scrut = ! tmp;
      if (scrut === true) {
        return NofibPrelude.head(x)
      }
      return NofibPrelude.head(y);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static cons_(a, a_b) {
    let x, y, scrut, element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      y = element1$;
      x = element0$;
      tmp = NofibPrelude.null_(y);
      scrut = ! tmp;
      if (scrut === true) {
        tmp1 = NofibPrelude.Cons(a, x);
        return globalThis.Object.freeze([
          tmp1,
          y
        ])
      }
      tmp2 = NofibPrelude.Cons(a, NofibPrelude.Nil);
      return globalThis.Object.freeze([
        tmp2,
        x
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static snoc_(a, a_b) {
    let x, y, scrut, element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      x = element1$;
      y = element0$;
      tmp = NofibPrelude.null_(y);
      scrut = ! tmp;
      if (scrut === true) {
        tmp1 = NofibPrelude.Cons(a, x);
        return globalThis.Object.freeze([
          y,
          tmp1
        ])
      }
      tmp2 = NofibPrelude.Cons(a, NofibPrelude.Nil);
      return globalThis.Object.freeze([
        x,
        tmp2
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static tail_(a_b) {
    let x, y, scrut, scrut1, y0, y1, scrut2, element1$, element0$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      y = element1$;
      x = element0$;
      scrut = NofibPrelude.null_(x);
      if (scrut === true) {
        return globalThis.Object.freeze([
          NofibPrelude.Nil,
          NofibPrelude.Nil
        ])
      }
      scrut1 = para.single(x);
      if (scrut1 === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut2 = NofibPrelude.splitAt(tmp1, y);
        if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
          element0$1 = runtime.Tuple.get(scrut2, 0);
          element1$1 = runtime.Tuple.get(scrut2, 1);
          y1 = element1$1;
          y0 = element0$1;
          tmp2 = NofibPrelude.reverse(y1);
          return globalThis.Object.freeze([
            tmp2,
            y0
          ])
        }
        tmp3 = NofibPrelude.tail(x);
        return globalThis.Object.freeze([
          tmp3,
          y
        ]);
      }
      tmp4 = NofibPrelude.tail(x);
      return globalThis.Object.freeze([
        tmp4,
        y
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static init_(a_b) {
    let x, y, scrut, scrut1, y0, y1, scrut2, element1$, element0$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      x = element1$;
      y = element0$;
      scrut = NofibPrelude.null_(x);
      if (scrut === true) {
        return globalThis.Object.freeze([
          NofibPrelude.Nil,
          NofibPrelude.Nil
        ])
      }
      scrut1 = para.single(x);
      if (scrut1 === true) {
        tmp = NofibPrelude.listLen(y);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut2 = NofibPrelude.splitAt(tmp1, y);
        if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
          element0$1 = runtime.Tuple.get(scrut2, 0);
          element1$1 = runtime.Tuple.get(scrut2, 1);
          y1 = element1$1;
          y0 = element0$1;
          tmp2 = NofibPrelude.reverse(y1);
          return globalThis.Object.freeze([
            y0,
            tmp2
          ])
        }
        tmp3 = NofibPrelude.tail(x);
        return globalThis.Object.freeze([
          y,
          tmp3
        ]);
      }
      tmp4 = NofibPrelude.tail(x);
      return globalThis.Object.freeze([
        y,
        tmp4
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static unformat(a, l) {
    let lambda, lambda1;
    lambda = (undefined, function (xs, ys) {
      let tmp, tmp1;
      tmp = NofibPrelude.Cons(a, NofibPrelude.Nil);
      tmp1 = NofibPrelude.append(tmp, ys);
      return NofibPrelude.append(xs, tmp1)
    });
    lambda1 = (undefined, function (x) {
      return x
    });
    return para.fold1(lambda, lambda1, l)
  } 
  static format(a, x) {
    let breakk, lambda, lambda1;
    if (x instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil)
    }
    breakk = function breakk(a1, b, xs) {
      let scrut, tmp, tmp1, tmp2, a2, b1, inlinedVal;
      a2 = a1;
      b1 = b;
      inlinedVal = a2 === b1;
      scrut = inlinedVal;
      if (scrut === true) {
        return NofibPrelude.Cons(NofibPrelude.Nil, xs)
      }
      tmp = NofibPrelude.head(xs);
      tmp1 = NofibPrelude.Cons(b, tmp);
      tmp2 = NofibPrelude.tail(xs);
      return NofibPrelude.Cons(tmp1, tmp2);
    };
    lambda = (undefined, function (x1, y) {
      return breakk(a, x1, y)
    });
    lambda1 = (undefined, function (y) {
      let a1, b, inlinedVal, tmp;
      a1 = a;
      b = y;
      tmp = NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil);
      inlinedVal = breakk(a1, b, tmp);
      return inlinedVal
    });
    return para.fold1(lambda, lambda1, x);
  } 
  static unparas(ls) {
    return para.unformat(NofibPrelude.Nil, ls)
  } 
  static paras(ls) {
    let lambda, tmp;
    lambda = (undefined, function (x) {
      return NofibPrelude.listNeq(NofibPrelude.Nil, x)
    });
    tmp = para.format(NofibPrelude.Nil, ls);
    return NofibPrelude.filter(lambda, tmp)
  } 
  static parse(ls) {
    let tmp, tmp1;
    tmp = para.lines(ls);
    tmp1 = NofibPrelude.map(para.words, tmp);
    return para.paras(tmp1)
  } 
  static unparse(ls) {
    let tmp, tmp1;
    tmp = para.unparas(ls);
    tmp1 = NofibPrelude.map(para.unwords, tmp);
    return para.unlines(tmp1)
  } 
  static startr(a) {
    let scrut, tmp, tmp1;
    scrut = a <= para.maxw;
    if (scrut === true) {
      tmp = globalThis.Object.freeze([
        0,
        0,
        0
      ]);
      tmp1 = para.cons_(tmp, para.nil_);
      return globalThis.Object.freeze([
        tmp1,
        a,
        1
      ])
    }
    throw runtime.safeCall(globalThis.Error("startr param error"));
  } 
  static ceildiv(n, m) {
    let tmp, tmp1;
    tmp = n + m;
    tmp1 = tmp - 1;
    return NofibPrelude.intDiv(tmp1, m)
  } 
  static fmtWith(par) {
    let lambda, tmp, tmp1;
    lambda = (undefined, function (x) {
      let tmp2;
      tmp2 = NofibPrelude.concat(x);
      return runtime.safeCall(par(tmp2))
    });
    tmp = para.parse(par);
    tmp1 = NofibPrelude.map(lambda, tmp);
    return para.unparse(tmp1)
  } 
  static stepr(w, ps_tw_tl) {
    let bf, width_hd, myAdd, single, cost, leave_nofit, trim, tl, ps, tw, tot_width, tot_len, element2$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (runtime.Tuple.isArrayLike(ps_tw_tl) && ps_tw_tl.length === 3) {
      let p, inlinedVal, scrut, x, tmp6, tmp7, tmp8, tmp9;
      element0$ = runtime.Tuple.get(ps_tw_tl, 0);
      element1$ = runtime.Tuple.get(ps_tw_tl, 1);
      element2$ = runtime.Tuple.get(ps_tw_tl, 2);
      tl = element2$;
      tw = element1$;
      ps = element0$;
      single = function single(p1) {
        let tmp10;
        tmp10 = para.len_tl(p1);
        return tmp10 === 0
      };
      width_hd = function width_hd(p1) {
        let scrut1, tmp10, tmp11;
        scrut1 = single(p1);
        if (scrut1 === true) {
          return tot_width
        }
        tmp10 = para.width_tl(p1);
        tmp11 = tot_width - tmp10;
        return tmp11 - 1;
      };
      cost = function cost(p1) {
        let scrut1, a, tmp10, tmp11, tmp12;
        scrut1 = single(p1);
        if (scrut1 === true) {
          return 0
        }
        tmp10 = para.cost_tl(p1);
        tmp11 = width_hd(p1);
        a = para.optw - tmp11;
        tmp12 = a * a;
        return tmp10 + tmp12;
      };
      trim = function trim(ps_pq) {
        let scrut1, scrut2, ps_p, q, p1, scrut3, tmp10, tmp11;
        scrut1 = para.null__(ps_pq);
        if (scrut1 === true) {
          return ps_pq
        }
        scrut2 = para.single_(ps_pq);
        if (scrut2 === true) {
          return ps_pq
        }
        ps_p = para.init_(ps_pq);
        q = para.last_(ps_pq);
        p1 = para.last_(ps_p);
        tmp10 = cost(p1);
        tmp11 = cost(q);
        scrut3 = tmp10 <= tmp11;
        if (scrut3 === true) {
          return trim(ps_p)
        }
        return ps_pq;
      };
      leave_nofit = function leave_nofit(ps_p) {
        let scrut1, scrut2, tmp10, tmp11, tmp12;
        scrut1 = para.null__(ps_p);
        if (scrut1 === true) {
          return ps_p
        }
        tmp10 = para.last_(ps_p);
        tmp11 = width_hd(tmp10);
        scrut2 = tmp11 > para.maxw;
        if (scrut2 === true) {
          tmp12 = para.init_(ps_p);
          return leave_nofit(tmp12)
        }
        return ps_p;
      };
      bf = function bf(p1, q) {
        let wqh, rqh, scrut1, scrut2, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22;
        wqh = width_hd(q);
        tmp10 = para.maxw - wqh;
        rqh = tmp10 + 1;
        tmp11 = single(q);
        if (tmp11 === true) {
          tmp13 = para.cost_tl(p1);
          tmp12 = tmp13 === 0;
        } else {
          tmp12 = false;
        }
        scrut1 = tmp12;
        if (scrut1 === true) {
          tmp14 = width_hd(p1);
          tmp15 = para.optw - tmp14;
          return NofibPrelude.min(tmp15, rqh)
        }
        scrut2 = single(q);
        if (scrut2 === true) {
          return rqh
        }
        tmp16 = cost(p1);
        tmp17 = cost(q);
        tmp18 = tmp16 - tmp17;
        tmp19 = width_hd(p1);
        tmp20 = wqh - tmp19;
        tmp21 = 2 * tmp20;
        tmp22 = para.ceildiv(tmp18, tmp21);
        return NofibPrelude.min(tmp22, rqh);
      };
      myAdd = function myAdd(p1, qr_rs) {
        let scrut1, q, r_rs, r, scrut2, tmp10, tmp11, tmp12, tmp13;
        tmp10 = para.single_(qr_rs);
        if (tmp10 === false) {
          tmp11 = para.null__(qr_rs);
        } else {
          tmp11 = true;
        }
        scrut1 = tmp11;
        if (scrut1 === true) {
          return para.cons_(p1, qr_rs)
        }
        q = para.head_(qr_rs);
        r_rs = para.tail_(qr_rs);
        r = para.head_(r_rs);
        tmp12 = bf(p1, q);
        tmp13 = bf(q, r);
        scrut2 = tmp12 <= tmp13;
        if (scrut2 === true) {
          return myAdd(p1, r_rs)
        }
        return para.cons_(p1, qr_rs);
      };
      tmp = w + 1;
      tot_width = tmp + tw;
      tot_len = 1 + tl;
      tmp1 = para.last_(ps);
      p = tmp1;
      scrut = single(p);
      if (scrut === true) {
        inlinedVal = globalThis.Object.freeze([
          tw,
          0,
          tl
        ]);
      } else {
        let p1, inlinedVal1, scrut1, tmp10, tmp11;
        tmp6 = para.cost_tl(p);
        p1 = p;
        scrut1 = single(p1);
        if (scrut1 === true) {
          inlinedVal1 = tw;
        } else {
          tmp10 = para.width_tl(p1);
          tmp11 = tw - tmp10;
          inlinedVal1 = tmp11 - 1;
        }
        tmp7 = inlinedVal1;
        x = para.optw - tmp7;
        tmp8 = x * x;
        tmp9 = tmp6 + tmp8;
        inlinedVal = globalThis.Object.freeze([
          tw,
          tmp9,
          tl
        ]);
      }
      tmp2 = inlinedVal;
      tmp3 = myAdd(tmp2, ps);
      tmp4 = leave_nofit(tmp3);
      tmp5 = trim(tmp4);
      return globalThis.Object.freeze([
        tmp5,
        tot_width,
        tot_len
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static par3(ws) {
    let zs, tmp, lambda, tmp1, tmp2, tmp3, tmp4;
    tmp = NofibPrelude.map(NofibPrelude.listLen, ws);
    zs = para.scan1(para.stepr, para.startr, tmp);
    lambda = (undefined, function (x) {
      let tmp5, tmp6;
      tmp5 = para.fst3(x);
      tmp6 = para.last_(tmp5);
      return para.len_tl(tmp6)
    });
    tmp1 = NofibPrelude.map(lambda, zs);
    tmp2 = NofibPrelude.head(zs);
    tmp3 = para.thd3(tmp2);
    tmp4 = globalThis.Object.freeze([
      tmp1,
      tmp3
    ]);
    return para.tile(ws, tmp4)
  } 
  static fmt(x) {
    let tmp, tmp1, tmp2;
    tmp = para.parse(x);
    tmp1 = NofibPrelude.concat(tmp);
    tmp2 = NofibPrelude.map(para.par3, tmp1);
    return para.unparse(tmp2)
  } 
  static testPara_nofib() {
    let scrut;
    scrut = NofibPrelude.null_(para.test);
    if (scrut === true) {
      return NofibPrelude.Nil
    }
    return para.fmt(para.test);
  } 
  static main() {
    let tmp;
    tmp = para.testPara_nofib();
    return NofibPrelude.nofibListToString(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "para"]; 
});
let para = para1; export default para;
