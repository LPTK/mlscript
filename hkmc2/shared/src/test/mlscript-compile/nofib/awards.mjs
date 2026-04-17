const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let awards1;
(class awards {
  static {
    awards1 = this
  }
  static qsort_qpart_rqsort_rqpart(id, param0, param1, param2, param3, param4, param5) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          let arg$Cons$0$, arg$Cons$1$;
          if (param1 instanceof NofibPrelude.Nil.class) {
            return param2
          } else if (param1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param1.head;
            arg$Cons$1$ = param1.tail;
            if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
              return NofibPrelude.Cons(arg$Cons$0$, param2)
            }
            let param2_tmp;
            param2_tmp = param2;
            param1 = arg$Cons$0$;
            param2 = arg$Cons$1$;
            param3 = NofibPrelude.Nil;
            param4 = NofibPrelude.Nil;
            param5 = param2_tmp;
            id = 1;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        case 1:
          let scrut, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1, tmp2, tmp3;
          if (param2 instanceof NofibPrelude.Nil.class) {
            tmp = awards.rqsort(param0, param4, param5);
            tmp1 = NofibPrelude.Cons(param1, tmp);
            param1 = param3;
            param2 = tmp1;
            id = 2;
            continue loopLabel
          } else if (param2 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = param2.head;
            arg$Cons$1$1 = param2.tail;
            scrut = runtime.safeCall(param0(param1, arg$Cons$0$1));
            if (scrut === true) {
              tmp2 = NofibPrelude.Cons(arg$Cons$0$1, param4);
              param2 = arg$Cons$1$1;
              param4 = tmp2;
              id = 1;
              continue loopLabel
            }
            tmp3 = NofibPrelude.Cons(arg$Cons$0$1, param3);
            param2 = arg$Cons$1$1;
            param3 = tmp3;
            id = 1;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        case 2:
          let arg$Cons$0$2, arg$Cons$1$2;
          if (param1 instanceof NofibPrelude.Nil.class) {
            return param2
          } else if (param1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$2 = param1.head;
            arg$Cons$1$2 = param1.tail;
            if (arg$Cons$1$2 instanceof NofibPrelude.Nil.class) {
              return NofibPrelude.Cons(arg$Cons$0$2, param2)
            }
            let param2_tmp;
            param2_tmp = param2;
            param1 = arg$Cons$0$2;
            param2 = arg$Cons$1$2;
            param3 = NofibPrelude.Nil;
            param4 = NofibPrelude.Nil;
            param5 = param2_tmp;
            id = 3;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        case 3:
          let scrut1, arg$Cons$0$3, arg$Cons$1$3, tmp4, tmp5, tmp6, tmp7;
          if (param2 instanceof NofibPrelude.Nil.class) {
            tmp4 = awards.qsort(param0, param4, param5);
            tmp5 = NofibPrelude.Cons(param1, tmp4);
            param1 = param3;
            param2 = tmp5;
            id = 0;
            continue loopLabel
          } else if (param2 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$3 = param2.head;
            arg$Cons$1$3 = param2.tail;
            scrut1 = runtime.safeCall(param0(arg$Cons$0$3, param1));
            if (scrut1 === true) {
              tmp6 = NofibPrelude.Cons(arg$Cons$0$3, param3);
              param2 = arg$Cons$1$3;
              param3 = tmp6;
              id = 3;
              continue loopLabel
            }
            tmp7 = NofibPrelude.Cons(arg$Cons$0$3, param4);
            param2 = arg$Cons$1$3;
            param4 = tmp7;
            id = 3;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      break;
    }
  } 
  static delete_(xs, e) {
    let lambda;
    lambda = (undefined, function (x, y) {
      return x == y
    });
    return NofibPrelude.deleteBy(lambda, e, xs)
  } 
  static listDiff(a, ls) {
    return NofibPrelude.foldl(awards.delete_, a, ls)
  } 
  static qsort(le, ls, r) {
    return awards.qsort_qpart_rqsort_rqpart(0, le, ls, r, undefined, undefined, undefined)
  } 
  static qpart(le, x, ys, rlt, rge, r) {
    return awards.qsort_qpart_rqsort_rqpart(1, le, x, ys, rlt, rge, r)
  } 
  static rqsort(le, ls, r) {
    return awards.qsort_qpart_rqsort_rqpart(2, le, ls, r, undefined, undefined, undefined)
  } 
  static rqpart(le, x, yss, rle, rgt, r) {
    return awards.qsort_qpart_rqsort_rqpart(3, le, x, yss, rle, rgt, r)
  } 
  static sort(l) {
    let lambda;
    lambda = (undefined, function (a, b) {
      let lambda1, lambda2, lambda3;
      lambda1 = (undefined, function (a1, b1) {
        return a1 < b1
      });
      lambda2 = (undefined, function (a1, b1) {
        return a1 > b1
      });
      lambda3 = (undefined, function (a1, b1) {
        let lambda4, lambda5;
        lambda4 = (undefined, function (a2, b2) {
          return a2 < b2
        });
        lambda5 = (undefined, function (a2, b2) {
          return a2 > b2
        });
        return NofibPrelude.ltList(a1, b1, lambda4, lambda5)
      });
      return NofibPrelude.ltTup2(a, b, lambda1, lambda2, lambda3)
    });
    return awards.qsort(lambda, l, NofibPrelude.Nil)
  } 
  static perms(m, nns) {
    let scrut, n, arg$Cons$0$, arg$Cons$1$, lambda, lambda1, tmp, tmp1, tmp2, tmp3;
    if (nns instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    scrut = m == 1;
    if (scrut === true) {
      lambda = (undefined, function (x) {
        return NofibPrelude.Cons(x, NofibPrelude.Nil)
      });
      return NofibPrelude.map(lambda, nns)
    }
    if (nns instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = nns.head;
      arg$Cons$1$ = nns.tail;
      n = arg$Cons$0$;
      lambda1 = (undefined, function (x) {
        return NofibPrelude.Cons(n, x)
      });
      tmp = m - 1;
      tmp1 = awards.perms(tmp, arg$Cons$1$);
      tmp2 = NofibPrelude.map(lambda1, tmp1);
      tmp3 = awards.perms(m, arg$Cons$1$);
      return NofibPrelude.append(tmp2, tmp3)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static awards(scores) {
    let award, sumscores, lambda, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    award = function award(name_threshold) {
      let name, element1$, element0$, lambda1, tmp8;
      if (runtime.Tuple.isArrayLike(name_threshold) && name_threshold.length === 2) {
        let threshold, inlinedVal, lambda2;
        element0$ = runtime.Tuple.get(name_threshold, 0);
        element1$ = runtime.Tuple.get(name_threshold, 1);
        name = element0$;
        lambda1 = (undefined, function (ps) {
          return globalThis.Object.freeze([
            name,
            ps
          ])
        });
        threshold = element1$;
        lambda2 = (undefined, function (caseScrut) {
          let element0$1;
          if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
            element0$1 = runtime.Tuple.get(caseScrut, 0);
            runtime.Tuple.get(caseScrut, 1);
            return element0$1 >= threshold
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        });
        inlinedVal = NofibPrelude.filter(lambda2, sumscores);
        tmp8 = awards.sort(inlinedVal);
        return NofibPrelude.map(lambda1, tmp8)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    lambda = (undefined, function (p) {
      let tmp8;
      tmp8 = NofibPrelude.sum(p);
      return globalThis.Object.freeze([
        tmp8,
        p
      ])
    });
    tmp = awards.perms(3, scores);
    sumscores = NofibPrelude.map(lambda, tmp);
    tmp1 = globalThis.Object.freeze([
      "Gold",
      70
    ]);
    tmp2 = award(tmp1);
    tmp3 = globalThis.Object.freeze([
      "Silver",
      60
    ]);
    tmp4 = award(tmp3);
    tmp5 = globalThis.Object.freeze([
      "Bronze",
      50
    ]);
    tmp6 = award(tmp5);
    tmp7 = NofibPrelude.append(tmp4, tmp6);
    return NofibPrelude.append(tmp2, tmp7)
  } 
  static findawards(scores) {
    let scrut, head_, arg$Cons$0$, element1$, element0$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3;
    scrut = awards.awards(scores);
    if (scrut instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (scrut instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = scrut.head;
      head_ = arg$Cons$0$;
      if (runtime.Tuple.isArrayLike(head_) && head_.length === 2) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        if (runtime.Tuple.isArrayLike(element1$) && element1$.length === 2) {
          element0$1 = runtime.Tuple.get(element1$, 0);
          element1$1 = runtime.Tuple.get(element1$, 1);
          tmp = globalThis.Object.freeze([
            element0$1,
            element1$1
          ]);
          tmp1 = globalThis.Object.freeze([
            element0$,
            tmp
          ]);
          tmp2 = awards.listDiff(scores, element1$1);
          tmp3 = awards.findawards(tmp2);
          return NofibPrelude.Cons(tmp1, tmp3)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static findallawards(competitors) {
    let lambda;
    lambda = (undefined, function (caseScrut) {
      let element1$, element0$, tmp;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
        element0$ = runtime.Tuple.get(caseScrut, 0);
        element1$ = runtime.Tuple.get(caseScrut, 1);
        tmp = awards.findawards(element1$);
        return globalThis.Object.freeze([
          element0$,
          tmp
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return NofibPrelude.map(lambda, competitors)
  } 
  static competitors(i) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    tmp = NofibPrelude.list(35, 27, 40, i, 34, 21);
    tmp1 = globalThis.Object.freeze([
      "Simon",
      tmp
    ]);
    tmp2 = NofibPrelude.list(23, 19, 45, i, 17, 10, 5, 8, 14);
    tmp3 = globalThis.Object.freeze([
      "Hans",
      tmp2
    ]);
    tmp4 = NofibPrelude.list(1, 18, i, 20, 21, 19, 34, 8, 16, 21);
    tmp5 = globalThis.Object.freeze([
      "Phil",
      tmp4
    ]);
    tmp6 = NofibPrelude.list(9, 23, 17, 54, i, 41, 9, 18, 14);
    tmp7 = globalThis.Object.freeze([
      "Kevin",
      tmp6
    ]);
    return NofibPrelude.list(tmp1, tmp3, tmp5, tmp7)
  } 
  static testAwards_nofib(n) {
    let lambda, tmp;
    lambda = (undefined, function (x) {
      let tmp1, tmp2;
      tmp1 = NofibPrelude.intMod(x, 100);
      tmp2 = awards.competitors(tmp1);
      return awards.findallawards(tmp2)
    });
    tmp = NofibPrelude.enumFromTo(1, n);
    return NofibPrelude.map(lambda, tmp)
  } 
  static main() {
    return awards.testAwards_nofib(100)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "awards"]; 
});
let awards = awards1; export default awards;
