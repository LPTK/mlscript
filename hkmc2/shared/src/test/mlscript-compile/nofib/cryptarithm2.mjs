const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let cryptarithm21;
(class cryptarithm2 {
  static {
    cryptarithm21 = this
  }
  static {
    let lambda, tmp;
    (class Unit {
      static {
        new this
      }
      constructor() {
        cryptarithm2.Unit = this;
        Object.defineProperty(this, "class", {
          value: Unit
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Unit"]; 
    });
    this.StateT = function StateT(run) {
      return globalThis.Object.freeze(new StateT.class(run));
    };
    (class StateT {
      static {
        cryptarithm2.StateT.class = this
      }
      constructor(run) {
        this.run = run;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "StateT", ["run"]]; 
    });
    lambda = (undefined, function (s) {
      let tmp1;
      tmp1 = globalThis.Object.freeze([
        s,
        s
      ]);
      return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
    });
    tmp = cryptarithm2.StateT(lambda);
    this.get = tmp;
    this.Digits = function Digits(i, c) {
      return globalThis.Object.freeze(new Digits.class(i, c));
    };
    (class Digits {
      static {
        cryptarithm2.Digits.class = this
      }
      constructor(i, c) {
        this.i = i;
        this.c = c;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Digits", ["i", "c"]]; 
    });
  }
  static unlines(ls) {
    let lambda, tmp;
    lambda = (undefined, function (x) {
      let tmp1;
      tmp1 = NofibPrelude.Cons("\n", NofibPrelude.Nil);
      return NofibPrelude.append(x, tmp1)
    });
    tmp = NofibPrelude.map(lambda, ls);
    return NofibPrelude.concat(tmp)
  } 
  static lookup(k, t) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$;
      if (t instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.None
      } else if (t instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = t.head;
        arg$Cons$1$ = t.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          scrut = k === element0$;
          if (scrut === true) {
            return NofibPrelude.Some(element1$)
          }
          t = arg$Cons$1$;
          continue loopLabel;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static delete_(xs, e) {
    let lambda;
    lambda = (undefined, function (x, y) {
      return x === y
    });
    return NofibPrelude.deleteBy(lambda, e, xs)
  } 
  static listDiff(a, ls) {
    return NofibPrelude.foldl(cryptarithm2.delete_, a, ls)
  } 
  static runStateT(m, s) {
    let arg$StateT$0$;
    if (m instanceof cryptarithm2.StateT.class) {
      arg$StateT$0$ = m.run;
      return runtime.safeCall(arg$StateT$0$(s))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static bind(m, f) {
    let lambda;
    lambda = (undefined, function (s) {
      let lambda1, tmp, tmp1;
      lambda1 = (undefined, function (caseScrut) {
        let element1$, element0$, tmp2;
        if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
          element0$ = runtime.Tuple.get(caseScrut, 0);
          element1$ = runtime.Tuple.get(caseScrut, 1);
          tmp2 = runtime.safeCall(f(element0$));
          return cryptarithm2.runStateT(tmp2, element1$)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      });
      tmp = cryptarithm2.runStateT(m, s);
      tmp1 = NofibPrelude.map(lambda1, tmp);
      return NofibPrelude.concat(tmp1)
    });
    return cryptarithm2.StateT(lambda)
  } 
  static return_(a) {
    let lambda;
    lambda = (undefined, function (s) {
      let tmp;
      tmp = globalThis.Object.freeze([
        a,
        s
      ]);
      return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
    });
    return cryptarithm2.StateT(lambda)
  } 
  static mapM(f, ls) {
    let lambda, tmp;
    lambda = (undefined, function (a, r) {
      let tmp1, lambda1;
      tmp1 = runtime.safeCall(f(a));
      lambda1 = (undefined, function (x) {
        let lambda2;
        lambda2 = (undefined, function (xs) {
          let tmp2;
          tmp2 = NofibPrelude.Cons(x, xs);
          return cryptarithm2.return_(tmp2)
        });
        return cryptarithm2.bind(r, lambda2)
      });
      return cryptarithm2.bind(tmp1, lambda1)
    });
    tmp = cryptarithm2.return_(NofibPrelude.Nil);
    return NofibPrelude.foldr(lambda, tmp, ls)
  } 
  static lift(ls) {
    let lambda;
    lambda = (undefined, function (s) {
      let lambda1, tmp;
      lambda1 = (undefined, function (x) {
        let tmp1;
        tmp1 = globalThis.Object.freeze([
          x,
          s
        ]);
        return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
      });
      tmp = NofibPrelude.map(lambda1, ls);
      return NofibPrelude.concat(tmp)
    });
    return cryptarithm2.StateT(lambda)
  } 
  static execStateT(m, s) {
    let lambda, tmp, tmp1;
    lambda = (undefined, function (caseScrut) {
      let element1$;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
        runtime.Tuple.get(caseScrut, 0);
        element1$ = runtime.Tuple.get(caseScrut, 1);
        return NofibPrelude.Cons(element1$, NofibPrelude.Nil)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    tmp = cryptarithm2.runStateT(m, s);
    tmp1 = NofibPrelude.map(lambda, tmp);
    return NofibPrelude.concat(tmp1)
  } 
  static guard(b) {
    let lambda, lambda1;
    if (b === true) {
      lambda = (undefined, function (s) {
        let tmp;
        tmp = globalThis.Object.freeze([
          cryptarithm2.Unit,
          s
        ]);
        return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
      });
      return cryptarithm2.StateT(lambda)
    }
    lambda1 = (undefined, function (s) {
      return NofibPrelude.Nil
    });
    return cryptarithm2.StateT(lambda1);
  } 
  static put(s) {
    let lambda;
    lambda = (undefined, function (x) {
      let tmp;
      tmp = globalThis.Object.freeze([
        cryptarithm2.Unit,
        s
      ]);
      return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
    });
    return cryptarithm2.StateT(lambda)
  } 
  static digits(d) {
    let arg$Digits$0$;
    if (d instanceof cryptarithm2.Digits.class) {
      arg$Digits$0$ = d.i;
      return arg$Digits$0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static digitEnv(d) {
    let arg$Digits$1$;
    if (d instanceof cryptarithm2.Digits.class) {
      arg$Digits$1$ = d.c;
      return arg$Digits$1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static permute(c) {
    let lambda;
    lambda = (undefined, function (st) {
      let xs, lambda1, tmp, tmp1, lambda2;
      xs = cryptarithm2.digits(st);
      lambda1 = (undefined, function (x) {
        let tmp2, tmp3;
        tmp2 = NofibPrelude.Cons(x, NofibPrelude.Nil);
        tmp3 = cryptarithm2.listDiff(xs, tmp2);
        return globalThis.Object.freeze([
          x,
          tmp3
        ])
      });
      tmp = NofibPrelude.map(lambda1, xs);
      tmp1 = cryptarithm2.lift(tmp);
      lambda2 = (undefined, function (iis) {
        let i, element1$, element0$, tmp2, tmp3, tmp4, tmp5, tmp6, lambda3;
        if (runtime.Tuple.isArrayLike(iis) && iis.length === 2) {
          element0$ = runtime.Tuple.get(iis, 0);
          element1$ = runtime.Tuple.get(iis, 1);
          i = element0$;
          tmp2 = globalThis.Object.freeze([
            c,
            i
          ]);
          tmp3 = cryptarithm2.digitEnv(st);
          tmp4 = NofibPrelude.Cons(tmp2, tmp3);
          tmp5 = cryptarithm2.Digits(element1$, tmp4);
          tmp6 = cryptarithm2.put(tmp5);
          lambda3 = (undefined, function (_p) {
            return cryptarithm2.return_(i)
          });
          return cryptarithm2.bind(tmp6, lambda3)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      });
      return cryptarithm2.bind(tmp1, lambda2)
    });
    return cryptarithm2.bind(cryptarithm2.get, lambda)
  } 
  static select(c) {
    let lambda;
    lambda = (undefined, function (st) {
      let scrut, arg$Some$0$, tmp;
      tmp = cryptarithm2.digitEnv(st);
      scrut = cryptarithm2.lookup(c, tmp);
      if (scrut instanceof NofibPrelude.Some.class) {
        arg$Some$0$ = scrut.x;
        return cryptarithm2.return_(arg$Some$0$)
      } else if (scrut instanceof NofibPrelude.None.class) {
        return cryptarithm2.permute(c)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return cryptarithm2.bind(cryptarithm2.get, lambda)
  } 
  static rest(ls) {
    let arg$Cons$1$;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$1$ = ls.tail;
      return arg$Cons$1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static solve(tops, bots, carry) {
    let bot, botss, scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, tmp, tmp1, lambda, lambda1, lambda2;
    if (bots instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = bots.head;
      arg$Cons$1$ = bots.tail;
      botss = arg$Cons$1$;
      bot = arg$Cons$0$;
      if (tops instanceof NofibPrelude.Nil.class) {
        tmp = cryptarithm2.return_(carry);
      } else if (tops instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = tops.head;
        tmp1 = cryptarithm2.mapM(cryptarithm2.select, arg$Cons$0$1);
        lambda = (undefined, function (topNS) {
          let tmp2, tmp3;
          tmp2 = NofibPrelude.sum(topNS);
          tmp3 = tmp2 + carry;
          return cryptarithm2.return_(tmp3)
        });
        tmp = cryptarithm2.bind(tmp1, lambda);
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      lambda1 = (undefined, function (topN) {
        let tmp2, lambda3;
        tmp2 = cryptarithm2.select(bot);
        lambda3 = (undefined, function (botN) {
          let tmp3, tmp4, tmp5, lambda4;
          tmp3 = NofibPrelude.intMod(topN, 10);
          tmp4 = tmp3 === botN;
          tmp5 = cryptarithm2.guard(tmp4);
          lambda4 = (undefined, function (_s) {
            let tmp6, tmp7;
            tmp6 = cryptarithm2.rest(tops);
            tmp7 = NofibPrelude.intDiv(topN, 10);
            return cryptarithm2.solve(tmp6, botss, tmp7)
          });
          return cryptarithm2.bind(tmp5, lambda4)
        });
        return cryptarithm2.bind(tmp2, lambda3)
      });
      return cryptarithm2.bind(tmp, lambda1)
    } else if (bots instanceof NofibPrelude.Nil.class) {
      if (tops instanceof NofibPrelude.Nil.class) {
        scrut = carry === 0;
        if (scrut === true) {
          return cryptarithm2.return_(cryptarithm2.Unit)
        }
      }
    }
    lambda2 = (undefined, function (_p) {
      return NofibPrelude.Nil
    });
    return cryptarithm2.StateT(lambda2)
  } 
  static puzzle(top, bot) {
    let solution, scrut, env, look, expand, topVal, botVal, scrut1, scrut2, tmp, tmp1, tmp2, arg$Cons$0$, tmp3, tmp4, lambda, tmp5, lambda1, tmp6, tmp7, tmp8, tmp9, lambda2, tmp10, look1, expand1;
    tmp = NofibPrelude.map(NofibPrelude.reverse, top);
    tmp1 = NofibPrelude.transpose(tmp);
    tmp2 = NofibPrelude.reverse(bot);
    solution = cryptarithm2.solve(tmp1, tmp2, 0);
    tmp3 = NofibPrelude.enumFromTo(0, 9);
    tmp4 = cryptarithm2.Digits(tmp3, NofibPrelude.Nil);
    scrut = cryptarithm2.execStateT(solution, tmp4);
    if (scrut instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = scrut.head;
      env = cryptarithm2.digitEnv(arg$Cons$0$);
      look1 = function look(c) {
        let tmp11;
        tmp11 = cryptarithm2.lookup(c, env);
        return NofibPrelude.fromSome(tmp11)
      };
      look = look1;
      expand1 = function expand(ls) {
        let lambda3;
        lambda3 = (undefined, function (a, b) {
          let tmp11, tmp12;
          tmp11 = a * 10;
          tmp12 = runtime.safeCall(look(b));
          return tmp11 + tmp12
        });
        return NofibPrelude.foldl(lambda3, 0, ls)
      };
      expand = expand1;
      lambda = (undefined, function (xs) {
        return runtime.safeCall(expand(xs))
      });
      tmp5 = NofibPrelude.map(lambda, top);
      topVal = NofibPrelude.sum(tmp5);
      botVal = runtime.safeCall(expand(bot));
      lambda1 = (undefined, function (x, y) {
        return x === y
      });
      tmp6 = NofibPrelude.concat(top);
      tmp7 = NofibPrelude.append(tmp6, bot);
      tmp8 = NofibPrelude.nubBy(lambda1, tmp7);
      tmp9 = NofibPrelude.listLen(tmp8);
      scrut1 = tmp9 > 10;
      if (scrut1 === true) {
        throw runtime.safeCall(globalThis.Error("error"))
      }
      scrut2 = topVal != botVal;
      if (scrut2 === true) {
        throw runtime.safeCall(globalThis.Error("error"))
      }
      lambda2 = (undefined, function (caseScrut) {
        let element1$, element0$, tmp11, tmp12, tmp13, tmp14;
        if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
          element0$ = runtime.Tuple.get(caseScrut, 0);
          element1$ = runtime.Tuple.get(caseScrut, 1);
          tmp11 = NofibPrelude.nofibStringToList(" => ");
          tmp12 = NofibPrelude.stringOfInt(element1$);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.append(tmp11, tmp13);
          return NofibPrelude.Cons(element0$, tmp14)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      });
      tmp10 = NofibPrelude.map(lambda2, env);
      return cryptarithm2.unlines(tmp10);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static testCryptarithm2_nofib(n) {
    let args, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
    tmp = NofibPrelude.nofibStringToList("THIRTY");
    tmp1 = NofibPrelude.nofibStringToList("TWELVE");
    tmp2 = NofibPrelude.nofibStringToList("TWELVE");
    tmp3 = NofibPrelude.nofibStringToList("TWELVE");
    tmp4 = NofibPrelude.nofibStringToList("TWELVE");
    tmp5 = NofibPrelude.nofibStringToList("TWELVE");
    scrut = n > 999999;
    if (scrut === true) {
      tmp6 = NofibPrelude.nofibStringToList("1");
    } else {
      tmp6 = NofibPrelude.Nil;
    }
    tmp7 = NofibPrelude.append(tmp5, tmp6);
    tmp8 = NofibPrelude.Cons(tmp7, NofibPrelude.Nil);
    tmp9 = NofibPrelude.Cons(tmp4, tmp8);
    tmp10 = NofibPrelude.Cons(tmp3, tmp9);
    tmp11 = NofibPrelude.Cons(tmp2, tmp10);
    tmp12 = NofibPrelude.Cons(tmp1, tmp11);
    args = NofibPrelude.Cons(tmp, tmp12);
    tmp13 = NofibPrelude.nofibStringToList("NINETY");
    return cryptarithm2.puzzle(args, tmp13)
  } 
  static main() {
    let tmp;
    tmp = cryptarithm2.testCryptarithm2_nofib(1);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "cryptarithm2"]; 
});
let cryptarithm2 = cryptarithm21; export default cryptarithm2;
