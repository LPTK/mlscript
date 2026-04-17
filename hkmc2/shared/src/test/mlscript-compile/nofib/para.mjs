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
    let go, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ws instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ws instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ws.head;
      arg$Cons$1$ = ws.tail;
      go = function go(vs) {
        let arg$Cons$0$1, arg$Cons$1$1, tmp1, tmp2;
        if (vs instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (vs instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = vs.head;
          arg$Cons$1$1 = vs.tail;
          tmp1 = go(arg$Cons$1$1);
          tmp2 = NofibPrelude.append(arg$Cons$0$1, tmp1);
          return NofibPrelude.Cons(" ", tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      tmp = go(arg$Cons$1$);
      return NofibPrelude.append(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static break_(p, xs) {
    let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Nil.class) {
      return globalThis.Object.freeze([
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ])
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      scrut = runtime.safeCall(p(arg$Cons$0$));
      if (scrut === true) {
        tmp = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
        return globalThis.Object.freeze([
          NofibPrelude.Nil,
          tmp
        ])
      }
      scrut1 = para.break_(p, arg$Cons$1$);
      if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
        element0$ = runtime.Tuple.get(scrut1, 0);
        element1$ = runtime.Tuple.get(scrut1, 1);
        tmp1 = NofibPrelude.Cons(arg$Cons$0$, element0$);
        return globalThis.Object.freeze([
          tmp1,
          element1$
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
    let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
    scrut = NofibPrelude.leaveWhile(para.isSpace, s);
    if (scrut instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (scrut instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = scrut.head;
      arg$Cons$1$ = scrut.tail;
      tmp = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
      scrut1 = para.break_(para.isSpace, tmp);
      if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
        element0$ = runtime.Tuple.get(scrut1, 0);
        element1$ = runtime.Tuple.get(scrut1, 1);
        tmp1 = para.words(element1$);
        return NofibPrelude.Cons(element0$, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static lines(s) {
    let scrut, s_, element1$, element0$, lambda, arg$Cons$1$, tmp;
    lambda = (undefined, function (x) {
      return x === "\n"
    });
    scrut = para.break_(lambda, s);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      s_ = element1$;
      if (s_ instanceof NofibPrelude.Nil.class) {
        tmp = NofibPrelude.Nil;
        return NofibPrelude.Cons(element0$, tmp)
      } else if (s_ instanceof NofibPrelude.Cons.class) {
        arg$Cons$1$ = element1$.tail;
        tmp = para.lines(arg$Cons$1$);
        return NofibPrelude.Cons(element0$, tmp)
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
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (xs instanceof NofibPrelude.Nil.class) {
        return true
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        tmp = runtime.safeCall(p(arg$Cons$0$));
        if (tmp === true) {
          xs = arg$Cons$1$;
          continue loopLabel
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static fold1(f, g, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        return runtime.safeCall(g(arg$Cons$0$))
      }
      tmp = para.fold1(f, g, arg$Cons$1$);
      return runtime.safeCall(f(arg$Cons$0$, tmp));
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
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = NofibPrelude.Cons(w, arg$Cons$0$);
      return NofibPrelude.Cons(tmp, arg$Cons$1$)
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
      let inlinedVal, a, tmp;
      tmp = para.width(l);
      a = para.optw - tmp;
      inlinedVal = a * a;
      return inlinedVal + n
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
    let element0$;
    if (runtime.Tuple.isArrayLike(a_b_c) && a_b_c.length === 3) {
      element0$ = runtime.Tuple.get(a_b_c, 0);
      runtime.Tuple.get(a_b_c, 1);
      runtime.Tuple.get(a_b_c, 2);
      return element0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static snd3(a_b_c) {
    let element1$;
    if (runtime.Tuple.isArrayLike(a_b_c) && a_b_c.length === 3) {
      runtime.Tuple.get(a_b_c, 0);
      element1$ = runtime.Tuple.get(a_b_c, 1);
      runtime.Tuple.get(a_b_c, 2);
      return element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static thd3(a_b_c) {
    let element2$;
    if (runtime.Tuple.isArrayLike(a_b_c) && a_b_c.length === 3) {
      runtime.Tuple.get(a_b_c, 0);
      runtime.Tuple.get(a_b_c, 1);
      element2$ = runtime.Tuple.get(a_b_c, 2);
      return element2$
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
    let l, scrut, element1$, element0$, arg$Cons$0$, arg$Cons$1$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      if (element0$ instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (element0$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = element0$.head;
        arg$Cons$1$ = element0$.tail;
        l = element1$ - arg$Cons$0$;
        scrut = NofibPrelude.splitAt(l, ws);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          element0$1 = runtime.Tuple.get(scrut, 0);
          element1$1 = runtime.Tuple.get(scrut, 1);
          tmp = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
          tmp1 = NofibPrelude.leave(l, tmp);
          tmp2 = globalThis.Object.freeze([
            tmp1,
            arg$Cons$0$
          ]);
          tmp3 = para.tile(element1$1, tmp2);
          return NofibPrelude.Cons(element0$1, tmp3)
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
    let element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      tmp = NofibPrelude.null_(element0$);
      if (tmp === true) {
        tmp1 = para.single(element1$);
      } else {
        tmp1 = false;
      }
      if (tmp1 === false) {
        tmp2 = para.single(element0$);
        if (tmp2 === true) {
          return NofibPrelude.null_(element1$)
        }
        return false;
      }
      return true;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static head_(a_b) {
    let scrut, element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      tmp = NofibPrelude.null_(element0$);
      scrut = ! tmp;
      if (scrut === true) {
        return NofibPrelude.head(element0$)
      }
      return NofibPrelude.head(element1$);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static last_(a_b) {
    let scrut, element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      tmp = NofibPrelude.null_(element1$);
      scrut = ! tmp;
      if (scrut === true) {
        return NofibPrelude.head(element1$)
      }
      return NofibPrelude.head(element0$);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static cons_(a, a_b) {
    let scrut, element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      tmp = NofibPrelude.null_(element1$);
      scrut = ! tmp;
      if (scrut === true) {
        tmp1 = NofibPrelude.Cons(a, element0$);
        return globalThis.Object.freeze([
          tmp1,
          element1$
        ])
      }
      tmp2 = NofibPrelude.Cons(a, NofibPrelude.Nil);
      return globalThis.Object.freeze([
        tmp2,
        element0$
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static snoc_(a, a_b) {
    let scrut, element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      tmp = NofibPrelude.null_(element0$);
      scrut = ! tmp;
      if (scrut === true) {
        tmp1 = NofibPrelude.Cons(a, element1$);
        return globalThis.Object.freeze([
          element0$,
          tmp1
        ])
      }
      tmp2 = NofibPrelude.Cons(a, NofibPrelude.Nil);
      return globalThis.Object.freeze([
        element1$,
        tmp2
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static tail_(a_b) {
    let scrut, scrut1, scrut2, element1$, element0$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      scrut = NofibPrelude.null_(element0$);
      if (scrut === true) {
        return globalThis.Object.freeze([
          NofibPrelude.Nil,
          NofibPrelude.Nil
        ])
      }
      scrut1 = para.single(element0$);
      if (scrut1 === true) {
        tmp = NofibPrelude.listLen(element1$);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut2 = NofibPrelude.splitAt(tmp1, element1$);
        if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
          element0$1 = runtime.Tuple.get(scrut2, 0);
          element1$1 = runtime.Tuple.get(scrut2, 1);
          tmp2 = NofibPrelude.reverse(element1$1);
          return globalThis.Object.freeze([
            tmp2,
            element0$1
          ])
        }
        tmp3 = NofibPrelude.tail(element0$);
        return globalThis.Object.freeze([
          tmp3,
          element1$
        ]);
      }
      tmp4 = NofibPrelude.tail(element0$);
      return globalThis.Object.freeze([
        tmp4,
        element1$
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static init_(a_b) {
    let scrut, scrut1, scrut2, element1$, element0$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      scrut = NofibPrelude.null_(element1$);
      if (scrut === true) {
        return globalThis.Object.freeze([
          NofibPrelude.Nil,
          NofibPrelude.Nil
        ])
      }
      scrut1 = para.single(element1$);
      if (scrut1 === true) {
        tmp = NofibPrelude.listLen(element0$);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut2 = NofibPrelude.splitAt(tmp1, element0$);
        if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
          element0$1 = runtime.Tuple.get(scrut2, 0);
          element1$1 = runtime.Tuple.get(scrut2, 1);
          tmp2 = NofibPrelude.reverse(element1$1);
          return globalThis.Object.freeze([
            element0$1,
            tmp2
          ])
        }
        tmp3 = NofibPrelude.tail(element1$);
        return globalThis.Object.freeze([
          element0$,
          tmp3
        ]);
      }
      tmp4 = NofibPrelude.tail(element1$);
      return globalThis.Object.freeze([
        element0$,
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
      let scrut, tmp, tmp1, tmp2, inlinedVal;
      inlinedVal = a1 === b;
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
      let a1, inlinedVal, tmp;
      a1 = a;
      tmp = NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil);
      inlinedVal = breakk(a1, y, tmp);
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
    let bf, width_hd, myAdd, single, cost, leave_nofit, trim, tot_width, tot_len, element2$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (runtime.Tuple.isArrayLike(ps_tw_tl) && ps_tw_tl.length === 3) {
      let inlinedVal, scrut, x, tmp5, tmp6, tmp7;
      element0$ = runtime.Tuple.get(ps_tw_tl, 0);
      element1$ = runtime.Tuple.get(ps_tw_tl, 1);
      element2$ = runtime.Tuple.get(ps_tw_tl, 2);
      single = function single(p) {
        let tmp8;
        tmp8 = para.len_tl(p);
        return tmp8 === 0
      };
      width_hd = function width_hd(p) {
        let scrut1, tmp8, tmp9;
        scrut1 = single(p);
        if (scrut1 === true) {
          return tot_width
        }
        tmp8 = para.width_tl(p);
        tmp9 = tot_width - tmp8;
        return tmp9 - 1;
      };
      cost = function cost(p) {
        let scrut1, a, tmp8, tmp9, tmp10;
        scrut1 = single(p);
        if (scrut1 === true) {
          return 0
        }
        tmp8 = para.cost_tl(p);
        tmp9 = width_hd(p);
        a = para.optw - tmp9;
        tmp10 = a * a;
        return tmp8 + tmp10;
      };
      trim = function trim(ps_pq) {
        let scrut1, scrut2, ps_p, q, p, scrut3, tmp8, tmp9;
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
        p = para.last_(ps_p);
        tmp8 = cost(p);
        tmp9 = cost(q);
        scrut3 = tmp8 <= tmp9;
        if (scrut3 === true) {
          return trim(ps_p)
        }
        return ps_pq;
      };
      leave_nofit = function leave_nofit(ps_p) {
        let scrut1, scrut2, tmp8, tmp9, tmp10;
        scrut1 = para.null__(ps_p);
        if (scrut1 === true) {
          return ps_p
        }
        tmp8 = para.last_(ps_p);
        tmp9 = width_hd(tmp8);
        scrut2 = tmp9 > para.maxw;
        if (scrut2 === true) {
          tmp10 = para.init_(ps_p);
          return leave_nofit(tmp10)
        }
        return ps_p;
      };
      bf = function bf(p, q) {
        let wqh, rqh, scrut1, scrut2, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20;
        wqh = width_hd(q);
        tmp8 = para.maxw - wqh;
        rqh = tmp8 + 1;
        tmp9 = single(q);
        if (tmp9 === true) {
          tmp11 = para.cost_tl(p);
          tmp10 = tmp11 === 0;
        } else {
          tmp10 = false;
        }
        scrut1 = tmp10;
        if (scrut1 === true) {
          tmp12 = width_hd(p);
          tmp13 = para.optw - tmp12;
          return NofibPrelude.min(tmp13, rqh)
        }
        scrut2 = single(q);
        if (scrut2 === true) {
          return rqh
        }
        tmp14 = cost(p);
        tmp15 = cost(q);
        tmp16 = tmp14 - tmp15;
        tmp17 = width_hd(p);
        tmp18 = wqh - tmp17;
        tmp19 = 2 * tmp18;
        tmp20 = para.ceildiv(tmp16, tmp19);
        return NofibPrelude.min(tmp20, rqh);
      };
      myAdd = function myAdd(p, qr_rs) {
        let scrut1, q, r_rs, r, scrut2, tmp8, tmp9, tmp10, tmp11;
        tmp8 = para.single_(qr_rs);
        if (tmp8 === false) {
          tmp9 = para.null__(qr_rs);
        } else {
          tmp9 = true;
        }
        scrut1 = tmp9;
        if (scrut1 === true) {
          return para.cons_(p, qr_rs)
        }
        q = para.head_(qr_rs);
        r_rs = para.tail_(qr_rs);
        r = para.head_(r_rs);
        tmp10 = bf(p, q);
        tmp11 = bf(q, r);
        scrut2 = tmp10 <= tmp11;
        if (scrut2 === true) {
          return myAdd(p, r_rs)
        }
        return para.cons_(p, qr_rs);
      };
      tmp = w + 1;
      tot_width = tmp + element1$;
      tot_len = 1 + element2$;
      tmp1 = para.last_(element0$);
      scrut = single(tmp1);
      if (scrut === true) {
        inlinedVal = globalThis.Object.freeze([
          element1$,
          0,
          element2$
        ]);
      } else {
        let inlinedVal1, scrut1, tmp8, tmp9;
        tmp5 = para.cost_tl(tmp1);
        scrut1 = single(tmp1);
        if (scrut1 === true) {
          inlinedVal1 = element1$;
        } else {
          tmp8 = para.width_tl(tmp1);
          tmp9 = element1$ - tmp8;
          inlinedVal1 = tmp9 - 1;
        }
        x = para.optw - inlinedVal1;
        tmp6 = x * x;
        tmp7 = tmp5 + tmp6;
        inlinedVal = globalThis.Object.freeze([
          element1$,
          tmp7,
          element2$
        ]);
      }
      tmp2 = myAdd(inlinedVal, element0$);
      tmp3 = leave_nofit(tmp2);
      tmp4 = trim(tmp3);
      return globalThis.Object.freeze([
        tmp4,
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
