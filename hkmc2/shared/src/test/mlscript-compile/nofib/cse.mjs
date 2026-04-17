const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let cse1;
(class cse {
  static {
    cse1 = this
  }
  static {
    let lambda, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25;
    lambda = (undefined, function (x) {
      return x + 1
    });
    tmp = cse.update(lambda);
    this.incr = tmp;
    this.Node = function Node(a, b) {
      return globalThis.Object.freeze(new Node.class(a, b));
    };
    (class Node {
      static {
        cse.Node.class = this
      }
      constructor(a, b) {
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Node", ["a", "b"]]; 
    });
    tmp1 = cse.Node("0", NofibPrelude.Nil);
    this.zerO = tmp1;
    tmp2 = cse.Node("a", NofibPrelude.Nil);
    this.a = tmp2;
    tmp3 = cse.Node("b", NofibPrelude.Nil);
    this.b = tmp3;
    tmp4 = cse.Node("c", NofibPrelude.Nil);
    this.c = tmp4;
    tmp5 = cse.Node("d", NofibPrelude.Nil);
    this.d = tmp5;
    this.example0 = cse.a;
    tmp6 = cse.plus_(cse.a, cse.a);
    this.example1 = tmp6;
    tmp7 = cse.mult_(cse.a, cse.b);
    tmp8 = cse.mult_(cse.a, cse.b);
    tmp9 = cse.plus_(tmp7, tmp8);
    this.example2 = tmp9;
    tmp10 = cse.plus_(cse.a, cse.b);
    tmp11 = cse.mult_(tmp10, cse.c);
    tmp12 = cse.plus_(cse.a, cse.b);
    tmp13 = cse.plus_(tmp11, tmp12);
    this.example3 = tmp13;
    tmp14 = NofibPrelude.Cons(cse.d, NofibPrelude.Nil);
    tmp15 = NofibPrelude.Cons(cse.c, tmp14);
    tmp16 = NofibPrelude.Cons(cse.b, tmp15);
    tmp17 = NofibPrelude.Cons(cse.a, tmp16);
    tmp18 = NofibPrelude.scanl(cse.plus_, cse.zerO, tmp17);
    tmp19 = cse.prod(tmp18);
    this.example4 = tmp19;
    tmp20 = NofibPrelude.Cons(cse.d, NofibPrelude.Nil);
    tmp21 = NofibPrelude.Cons(cse.c, tmp20);
    tmp22 = NofibPrelude.Cons(cse.b, tmp21);
    tmp23 = NofibPrelude.Cons(cse.a, tmp22);
    tmp24 = NofibPrelude.scanr(cse.plus_, cse.zerO, tmp23);
    tmp25 = cse.prod(tmp24);
    this.example5 = tmp25;
  }
  static retURN(a) {
    let lambda;
    lambda = (undefined, function (s) {
      return globalThis.Object.freeze([
        s,
        a
      ])
    });
    return lambda
  } 
  static bind(m, f) {
    let lambda;
    lambda = (undefined, function (s) {
      let scrut, element1$, element0$, tmp;
      scrut = runtime.safeCall(m(s));
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        tmp = runtime.safeCall(f(element1$));
        return runtime.safeCall(tmp(element0$))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return lambda
  } 
  static join(m) {
    let lambda;
    lambda = (undefined, function (s) {
      let scrut, element1$, element0$;
      scrut = runtime.safeCall(m(s));
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        return runtime.safeCall(element1$(element0$))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return lambda
  } 
  static mmap(f, m) {
    let lambda;
    lambda = (undefined, function (s) {
      let scrut, element1$, element0$, tmp;
      scrut = runtime.safeCall(m(s));
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        tmp = runtime.safeCall(f(element1$));
        return globalThis.Object.freeze([
          element0$,
          tmp
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return lambda
  } 
  static mmapl(f, aas) {
    let as_, arg$Cons$0$, arg$Cons$1$, tmp, lambda;
    if (aas instanceof NofibPrelude.Nil.class) {
      return cse.retURN(NofibPrelude.Nil)
    } else if (aas instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = aas.head;
      arg$Cons$1$ = aas.tail;
      as_ = arg$Cons$1$;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      lambda = (undefined, function (b) {
        let tmp1, lambda1;
        tmp1 = cse.mmapl(f, as_);
        lambda1 = (undefined, function (bs) {
          let tmp2;
          tmp2 = NofibPrelude.Cons(b, bs);
          return cse.retURN(tmp2)
        });
        return cse.bind(tmp1, lambda1)
      });
      return cse.bind(tmp, lambda)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static mmapr(f, xs) {
    let x, arg$Cons$0$, arg$Cons$1$, tmp, lambda;
    if (xs instanceof NofibPrelude.Nil.class) {
      return cse.retURN(NofibPrelude.Nil)
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      x = arg$Cons$0$;
      tmp = cse.mmapr(f, arg$Cons$1$);
      lambda = (undefined, function (ys) {
        let tmp1, lambda1;
        tmp1 = runtime.safeCall(f(x));
        lambda1 = (undefined, function (y) {
          let tmp2;
          tmp2 = NofibPrelude.Cons(y, ys);
          return cse.retURN(tmp2)
        });
        return cse.bind(tmp1, lambda1)
      });
      return cse.bind(tmp, lambda)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static mfoldl(f, a, xs) {
    let xs1, arg$Cons$0$, arg$Cons$1$, tmp, lambda;
    if (xs instanceof NofibPrelude.Nil.class) {
      return cse.retURN(a)
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      xs1 = arg$Cons$1$;
      tmp = runtime.safeCall(f(a, arg$Cons$0$));
      lambda = (undefined, function (fax) {
        return cse.mfoldl(f, fax, xs1)
      });
      return cse.bind(tmp, lambda)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static mfoldr(f, a, xs) {
    let x, arg$Cons$0$, arg$Cons$1$, tmp, lambda;
    if (xs instanceof NofibPrelude.Nil.class) {
      return cse.retURN(a)
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      x = arg$Cons$0$;
      tmp = cse.mfoldr(f, a, arg$Cons$1$);
      lambda = (undefined, function (y) {
        return runtime.safeCall(f(x, y))
      });
      return cse.bind(tmp, lambda)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static mif(c, t, f) {
    let lambda;
    lambda = (undefined, function (cond) {
      if (cond === true) {
        return t
      }
      return f;
    });
    return cse.bind(c, lambda)
  } 
  static startingWith(m, v) {
    let scrut, element1$;
    scrut = runtime.safeCall(m(v));
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      return element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static fetch(s) {
    return globalThis.Object.freeze([
      s,
      s
    ])
  } 
  static fetchWith(f) {
    let lambda;
    lambda = (undefined, function (s) {
      let tmp;
      tmp = runtime.safeCall(f(s));
      return globalThis.Object.freeze([
        s,
        tmp
      ])
    });
    return lambda
  } 
  static update(f) {
    let lambda;
    lambda = (undefined, function (s) {
      let tmp;
      tmp = runtime.safeCall(f(s));
      return globalThis.Object.freeze([
        tmp,
        s
      ])
    });
    return lambda
  } 
  static set_(s_) {
    let lambda;
    lambda = (undefined, function (s) {
      return globalThis.Object.freeze([
        s_,
        s
      ])
    });
    return lambda
  } 
  static labelTree(t) {
    let label, tmp;
    label = function label(t1) {
      let x, xs, arg$Node$0$, arg$Node$1$, lambda;
      if (t1 instanceof cse.Node.class) {
        arg$Node$0$ = t1.a;
        arg$Node$1$ = t1.b;
        xs = arg$Node$1$;
        x = arg$Node$0$;
        lambda = (undefined, function (n) {
          let tmp1, lambda1;
          tmp1 = cse.mmapl(label, xs);
          lambda1 = (undefined, function (ts) {
            let tmp2, tmp3;
            tmp2 = globalThis.Object.freeze([
              n,
              x
            ]);
            tmp3 = cse.Node(tmp2, ts);
            return cse.retURN(tmp3)
          });
          return cse.bind(tmp1, lambda1)
        });
        return cse.bind(cse.incr, lambda)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = label(t);
    return cse.startingWith(tmp, 0)
  } 
  static ltGraph(t) {
    let labelOf, arg$Node$0$, arg$Node$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3;
    labelOf = function labelOf(t1) {
      let arg$Node$0$1, element0$1;
      if (t1 instanceof cse.Node.class) {
        arg$Node$0$1 = t1.a;
        if (runtime.Tuple.isArrayLike(arg$Node$0$1) && arg$Node$0$1.length === 2) {
          element0$1 = runtime.Tuple.get(arg$Node$0$1, 0);
          runtime.Tuple.get(arg$Node$0$1, 1);
          return element0$1
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    if (t instanceof cse.Node.class) {
      arg$Node$0$ = t.a;
      arg$Node$1$ = t.b;
      if (runtime.Tuple.isArrayLike(arg$Node$0$) && arg$Node$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Node$0$, 0);
        element1$ = runtime.Tuple.get(arg$Node$0$, 1);
        tmp = NofibPrelude.map(labelOf, arg$Node$1$);
        tmp1 = globalThis.Object.freeze([
          element0$,
          element1$,
          tmp
        ]);
        tmp2 = NofibPrelude.map(cse.ltGraph, arg$Node$1$);
        tmp3 = NofibPrelude.concat(tmp2);
        return NofibPrelude.Cons(tmp1, tmp3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static visited(n) {
    let lambda;
    lambda = (undefined, function (us) {
      let scrut, tmp, tmp1, lambda1;
      scrut = NofibPrelude.inList(n, us);
      if (scrut === true) {
        return cse.retURN(true)
      }
      tmp = NofibPrelude.Cons(n, us);
      tmp1 = cse.set_(tmp);
      lambda1 = (undefined, function (_p) {
        return cse.retURN(false)
      });
      return cse.bind(tmp1, lambda1);
    });
    return cse.bind(cse.fetch, lambda)
  } 
  static newlyDefined(x, fx, f, y) {
    let scrut;
    scrut = x === y;
    if (scrut === true) {
      return fx
    }
    return runtime.safeCall(f(y));
  } 
  static findCommon(ls) {
    let sim, scrut, element1$, lambda, tmp, tmp1;
    sim = function sim(n_s_cs, r_lg) {
      let lscomp, s, n, r, rcs, ms, scrut1, element2$, element1$1, element0$, element1$2, element0$1, tmp2, tmp3, lambda1;
      if (runtime.Tuple.isArrayLike(n_s_cs) && n_s_cs.length === 3) {
        element0$ = runtime.Tuple.get(n_s_cs, 0);
        element1$1 = runtime.Tuple.get(n_s_cs, 1);
        element2$ = runtime.Tuple.get(n_s_cs, 2);
        s = element1$1;
        n = element0$;
        if (runtime.Tuple.isArrayLike(r_lg) && r_lg.length === 2) {
          element0$1 = runtime.Tuple.get(r_lg, 0);
          element1$2 = runtime.Tuple.get(r_lg, 1);
          r = element0$1;
          lscomp = function lscomp(ls1) {
            let scrut2, scrut3, arg$Cons$0$, arg$Cons$1$, element2$1, element1$3, element0$2, tmp4;
            if (ls1 instanceof NofibPrelude.Nil.class) {
              return NofibPrelude.Nil
            } else if (ls1 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = ls1.head;
              arg$Cons$1$ = ls1.tail;
              if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 3) {
                element0$2 = runtime.Tuple.get(arg$Cons$0$, 0);
                element1$3 = runtime.Tuple.get(arg$Cons$0$, 1);
                element2$1 = runtime.Tuple.get(arg$Cons$0$, 2);
                scrut2 = s === element1$3;
                if (scrut2 === true) {
                  scrut3 = NofibPrelude.listEq(element2$1, rcs);
                  if (scrut3 === true) {
                    tmp4 = lscomp(arg$Cons$1$);
                    return NofibPrelude.Cons(element0$2, tmp4)
                  }
                  return lscomp(arg$Cons$1$);
                }
                return lscomp(arg$Cons$1$);
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          };
          rcs = NofibPrelude.map(r, element2$);
          ms = lscomp(element1$2);
          scrut1 = NofibPrelude.null_(ms);
          if (scrut1 === true) {
            tmp2 = globalThis.Object.freeze([
              n,
              s,
              rcs
            ]);
            tmp3 = NofibPrelude.Cons(tmp2, element1$2);
            return globalThis.Object.freeze([
              r,
              tmp3
            ])
          }
          lambda1 = (undefined, function (x) {
            let tmp4;
            tmp4 = NofibPrelude.head(ms);
            return cse.newlyDefined(n, tmp4, r, x)
          });
          return globalThis.Object.freeze([
            lambda1,
            element1$2
          ]);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    lambda = (undefined, function (x) {
      return x
    });
    tmp = globalThis.Object.freeze([
      lambda,
      NofibPrelude.Nil
    ]);
    scrut = NofibPrelude.foldr(sim, tmp, ls);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      return element1$
    }
    tmp1 = runtime.safeCall(ls.toString());
    throw runtime.safeCall(globalThis.Error(tmp1));
  } 
  static cse(t) {
    let tmp, tmp1;
    tmp = cse.labelTree(t);
    tmp1 = cse.ltGraph(tmp);
    return cse.findCommon(tmp1)
  } 
  static plus_(x, y) {
    let tmp, tmp1;
    tmp = NofibPrelude.Cons(y, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(x, tmp);
    return cse.Node("+", tmp1)
  } 
  static mult_(x, y) {
    let tmp, tmp1;
    tmp = NofibPrelude.Cons(y, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(x, tmp);
    return cse.Node("*", tmp1)
  } 
  static prod(xs) {
    return cse.Node("X", xs)
  } 
  static testCse_nofib(n) {
    let lambda, tmp;
    lambda = (undefined, function (i) {
      let tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
      tmp1 = NofibPrelude.intMod(i, 6);
      tmp2 = NofibPrelude.Cons(cse.example5, NofibPrelude.Nil);
      tmp3 = NofibPrelude.Cons(cse.example4, tmp2);
      tmp4 = NofibPrelude.Cons(cse.example3, tmp3);
      tmp5 = NofibPrelude.Cons(cse.example2, tmp4);
      tmp6 = NofibPrelude.Cons(cse.example1, tmp5);
      tmp7 = NofibPrelude.Cons(cse.example0, tmp6);
      tmp8 = NofibPrelude.take(tmp1, tmp7);
      return NofibPrelude.map(cse.cse, tmp8)
    });
    tmp = NofibPrelude.enumFromTo(1, n);
    return NofibPrelude.map(lambda, tmp)
  } 
  static main() {
    let tmp;
    tmp = cse.testCse_nofib(6);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "cse"]; 
});
let cse = cse1; export default cse;
