const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let cichelli1;
(class cichelli {
  static {
    cichelli1 = this
  }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49;
    tmp = NofibPrelude.nofibStringToList("case");
    tmp1 = NofibPrelude.nofibStringToList("class");
    tmp2 = NofibPrelude.nofibStringToList("data");
    tmp3 = NofibPrelude.nofibStringToList("default");
    tmp4 = NofibPrelude.nofibStringToList("deriving");
    tmp5 = NofibPrelude.nofibStringToList("else");
    tmp6 = NofibPrelude.nofibStringToList("hiding");
    tmp7 = NofibPrelude.nofibStringToList("if");
    tmp8 = NofibPrelude.nofibStringToList("import");
    tmp9 = NofibPrelude.nofibStringToList("in");
    tmp10 = NofibPrelude.nofibStringToList("infix");
    tmp11 = NofibPrelude.nofibStringToList("infixl");
    tmp12 = NofibPrelude.nofibStringToList("instance");
    tmp13 = NofibPrelude.nofibStringToList("interface");
    tmp14 = NofibPrelude.nofibStringToList("let");
    tmp15 = NofibPrelude.nofibStringToList("module");
    tmp16 = NofibPrelude.nofibStringToList("of");
    tmp17 = NofibPrelude.nofibStringToList("renaming");
    tmp18 = NofibPrelude.nofibStringToList("then");
    tmp19 = NofibPrelude.nofibStringToList("to");
    tmp20 = NofibPrelude.nofibStringToList("type");
    tmp21 = NofibPrelude.nofibStringToList("where");
    tmp22 = NofibPrelude.Cons(tmp21, NofibPrelude.Nil);
    tmp23 = NofibPrelude.Cons(tmp20, tmp22);
    tmp24 = NofibPrelude.Cons(tmp19, tmp23);
    tmp25 = NofibPrelude.Cons(tmp18, tmp24);
    tmp26 = NofibPrelude.Cons(tmp17, tmp25);
    tmp27 = NofibPrelude.Cons(tmp16, tmp26);
    tmp28 = NofibPrelude.Cons(tmp15, tmp27);
    tmp29 = NofibPrelude.Cons(tmp14, tmp28);
    tmp30 = NofibPrelude.Cons(tmp13, tmp29);
    tmp31 = NofibPrelude.Cons(tmp12, tmp30);
    tmp32 = NofibPrelude.Cons(tmp11, tmp31);
    tmp33 = NofibPrelude.Cons(tmp10, tmp32);
    tmp34 = NofibPrelude.Cons(tmp9, tmp33);
    tmp35 = NofibPrelude.Cons(tmp8, tmp34);
    tmp36 = NofibPrelude.Cons(tmp7, tmp35);
    tmp37 = NofibPrelude.Cons(tmp6, tmp36);
    tmp38 = NofibPrelude.Cons(tmp5, tmp37);
    tmp39 = NofibPrelude.Cons(tmp4, tmp38);
    tmp40 = NofibPrelude.Cons(tmp3, tmp39);
    tmp41 = NofibPrelude.Cons(tmp2, tmp40);
    tmp42 = NofibPrelude.Cons(tmp1, tmp41);
    tmp43 = NofibPrelude.Cons(tmp, tmp42);
    this.keys = tmp43;
    this.K = function K(s, c1, c2, i) {
      return globalThis.Object.freeze(new K.class(s, c1, c2, i));
    };
    (class K {
      static {
        cichelli.K.class = this
      }
      constructor(s, c1, c2, i) {
        this.s = s;
        this.c1 = c1;
        this.c2 = c2;
        this.i = i;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "K", ["s", "c1", "c2", "i"]]; 
    });
    this.H = function H(f, s, ls) {
      return globalThis.Object.freeze(new H.class(f, s, ls));
    };
    (class H {
      static {
        cichelli.H.class = this
      }
      constructor(f, s, ls) {
        this.f = f;
        this.s = s;
        this.ls = ls;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "H", ["f", "s", "ls"]]; 
    });
    tmp44 = NofibPrelude.listLen(cichelli.keys);
    this.numberofkeys = tmp44;
    tmp45 = cichelli.attribkeys(cichelli.keys);
    tmp46 = NofibPrelude.map(cichelli.ends, tmp45);
    tmp47 = NofibPrelude.concat(tmp46);
    tmp48 = cichelli.histo(tmp47);
    this.freqtab = tmp48;
    tmp49 = NofibPrelude.listLen(cichelli.freqtab);
    this.maxval = tmp49;
    (class Status {
      static {
        cichelli.Status = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Status"]; 
    });
    this.NotEver = function NotEver(i) {
      return globalThis.Object.freeze(new NotEver.class(i));
    };
    (class NotEver extends cichelli.Status {
      static {
        cichelli.NotEver.class = this
      }
      constructor(i) {
        super();
        this.i = i;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "NotEver", ["i"]]; 
    });
    this.YesIts = function YesIts(i, t) {
      return globalThis.Object.freeze(new YesIts.class(i, t));
    };
    (class YesIts extends cichelli.Status {
      static {
        cichelli.YesIts.class = this
      }
      constructor(i, t) {
        super();
        this.i = i;
        this.t = t;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "YesIts", ["i", "t"]]; 
    });
  }
  static enumFromTo_lz(a, b) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, tmp, tmp1;
      scrut = a <= b;
      if (scrut === true) {
        tmp = a + 1;
        tmp1 = cichelli.enumFromTo_lz(tmp, b);
        return NofibPrelude.LzCons(a, tmp1)
      }
      return NofibPrelude.LzNil;
    });
    return NofibPrelude.lazy(lambda)
  } 
  static last(ls) {
    let go, arg$Cons$0$, arg$Cons$1$;
    go = function go(h, t) {
      let arg$Cons$0$1, arg$Cons$1$1;
      if (t instanceof NofibPrelude.Nil.class) {
        return h
      } else if (t instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = t.head;
        arg$Cons$1$1 = t.tail;
        return go(arg$Cons$0$1, arg$Cons$1$1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      return go(arg$Cons$0$, arg$Cons$1$)
    }
    throw runtime.safeCall(globalThis.Error("last: empty list"));
  } 
  static ends(k) {
    let arg$K$1$, arg$K$2$, tmp;
    if (k instanceof cichelli.K.class) {
      arg$K$1$ = k.c1;
      arg$K$2$ = k.c2;
      tmp = NofibPrelude.Cons(arg$K$2$, NofibPrelude.Nil);
      return NofibPrelude.Cons(arg$K$1$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static assoc(x, yz) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$;
      if (yz instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = yz.head;
        arg$Cons$1$ = yz.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          scrut = x === element0$;
          if (scrut === true) {
            return element1$
          }
          yz = arg$Cons$1$;
          continue loopLabel;
        }
        throw runtime.safeCall(globalThis.Error("assoc: not found"));
      }
      throw runtime.safeCall(globalThis.Error("assoc: not found"));
    }
  } 
  static assocm(x, yz) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$;
      if (yz instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = yz.head;
        arg$Cons$1$ = yz.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          scrut = x === element0$;
          if (scrut === true) {
            return NofibPrelude.Some(element1$)
          }
          yz = arg$Cons$1$;
          continue loopLabel;
        }
        return NofibPrelude.None;
      }
      return NofibPrelude.None;
    }
  } 
  static histins(x, yns) {
    let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (yns instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = yns.head;
      arg$Cons$1$ = yns.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        scrut = x === element0$;
        if (scrut === true) {
          tmp = element1$ + 1;
          tmp1 = globalThis.Object.freeze([
            element0$,
            tmp
          ]);
          return NofibPrelude.Cons(tmp1, arg$Cons$1$)
        }
        tmp2 = globalThis.Object.freeze([
          element0$,
          element1$
        ]);
        tmp3 = cichelli.histins(x, arg$Cons$1$);
        return NofibPrelude.Cons(tmp2, tmp3);
      }
    }
    tmp4 = globalThis.Object.freeze([
      x,
      1
    ]);
    return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
  } 
  static histo(ls) {
    return NofibPrelude.foldr(cichelli1.histins, NofibPrelude.Nil, ls)
  } 
  static subset(xs, ys) {
    let lambda;
    lambda = (undefined, function (x) {
      return NofibPrelude.inList(x, ys)
    });
    return NofibPrelude.all(lambda, xs)
  } 
  static union(xs, ys) {
    let lscomp, tmp;
    lscomp = function lscomp(ls) {
      let scrut, arg$Cons$0$, arg$Cons$1$, tmp1, tmp2;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        tmp1 = NofibPrelude.inList(arg$Cons$0$, xs);
        scrut = ! tmp1;
        if (scrut === true) {
          tmp2 = lscomp(arg$Cons$1$);
          return NofibPrelude.Cons(arg$Cons$0$, tmp2)
        }
        return lscomp(arg$Cons$1$);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = lscomp(ys);
    return NofibPrelude.append(xs, tmp)
  } 
  static attribkeys(ks) {
    let lambda;
    lambda = (undefined, function (k) {
      let tmp, tmp1, tmp2;
      tmp = NofibPrelude.head(k);
      tmp1 = cichelli1.last(k);
      tmp2 = NofibPrelude.listLen(k);
      return cichelli.K(k, tmp, tmp1, tmp2)
    });
    return NofibPrelude.map(lambda, ks)
  } 
  static minm(x, y) {
    let arg$Some$0$;
    if (x instanceof NofibPrelude.None.class) {
      return y
    } else if (x instanceof NofibPrelude.Some.class) {
      arg$Some$0$ = x.x;
      return NofibPrelude.min(arg$Some$0$, y)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static maxm(x, y) {
    let arg$Some$0$;
    if (x instanceof NofibPrelude.None.class) {
      return y
    } else if (x instanceof NofibPrelude.Some.class) {
      arg$Some$0$ = x.x;
      return NofibPrelude.max(arg$Some$0$, y)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static hash(cvs, k) {
    let arg$K$1$, arg$K$2$, arg$K$3$, tmp, tmp1, tmp2;
    if (k instanceof cichelli.K.class) {
      arg$K$1$ = k.c1;
      arg$K$2$ = k.c2;
      arg$K$3$ = k.i;
      tmp = cichelli.assoc(arg$K$1$, cvs);
      tmp1 = arg$K$3$ + tmp;
      tmp2 = cichelli.assoc(arg$K$2$, cvs);
      return tmp1 + tmp2
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static select(p, x, ts_fs) {
    let scrut, element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(ts_fs) && ts_fs.length === 2) {
      element0$ = runtime.Tuple.get(ts_fs, 0);
      element1$ = runtime.Tuple.get(ts_fs, 1);
      scrut = runtime.safeCall(p(x));
      if (scrut === true) {
        tmp = NofibPrelude.Cons(x, element0$);
        return globalThis.Object.freeze([
          tmp,
          element1$
        ])
      }
      tmp1 = NofibPrelude.Cons(x, element1$);
      return globalThis.Object.freeze([
        element0$,
        tmp1
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static partition_(p, ls) {
    let lambda, tmp;
    lambda = (undefined, function (x, y) {
      return cichelli.select(p, x, y)
    });
    tmp = globalThis.Object.freeze([
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ]);
    return NofibPrelude.foldr(lambda, tmp, ls)
  } 
  static freqsorted(x) {
    return x
  } 
  static blocked_(ds, ls) {
    let ds_, scrut, arg$Cons$0$, arg$Cons$1$, tmp, element1$, element0$, lambda, tmp1, tmp2;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = cichelli.ends(arg$Cons$0$);
      ds_ = cichelli.union(ds, tmp);
      lambda = (undefined, function (x) {
        let tmp3;
        tmp3 = cichelli.ends(x);
        return cichelli.subset(tmp3, ds_)
      });
      scrut = cichelli.partition_(lambda, arg$Cons$1$);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        tmp1 = cichelli.blocked_(ds_, element1$);
        tmp2 = NofibPrelude.append(element0$, tmp1);
        return NofibPrelude.Cons(arg$Cons$0$, tmp2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static blocked(ls) {
    return cichelli.blocked_(NofibPrelude.Nil, ls)
  } 
  static hinsert(h, hh) {
    let lo_, hi_, arg$H$0$, arg$H$1$, arg$H$2$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (hh instanceof cichelli.H.class) {
      arg$H$0$ = hh.f;
      arg$H$1$ = hh.s;
      arg$H$2$ = hh.ls;
      lo_ = cichelli.minm(arg$H$0$, h);
      hi_ = cichelli.maxm(arg$H$1$, h);
      tmp = NofibPrelude.inList(h, arg$H$2$);
      if (tmp === false) {
        tmp2 = 1 + hi_;
        tmp3 = tmp2 - lo_;
        tmp1 = tmp3 > cichelli.numberofkeys;
      } else {
        tmp1 = true;
      }
      if (tmp1 === true) {
        return NofibPrelude.None
      }
      tmp4 = NofibPrelude.Some(lo_);
      tmp5 = NofibPrelude.Some(hi_);
      tmp6 = NofibPrelude.Cons(h, arg$H$2$);
      tmp7 = cichelli.H(tmp4, tmp5, tmp6);
      return NofibPrelude.Some(tmp7);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static first(k, ls) {
    loopLabel: while (true) {
      let scrut, arg$LzCons$0$, arg$LzCons$1$, arg$NotEver$0$, arg$YesIts$0$, arg$YesIts$1$, tmp, tmp1;
      scrut = NofibPrelude.force(ls);
      if (scrut instanceof NofibPrelude.LzNil.class) {
        return cichelli.NotEver(k)
      } else if (scrut instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$ = scrut.head;
        arg$LzCons$1$ = scrut.tail;
        if (arg$LzCons$0$ instanceof cichelli.YesIts.class) {
          arg$YesIts$0$ = arg$LzCons$0$.i;
          arg$YesIts$1$ = arg$LzCons$0$.t;
          tmp = k + arg$YesIts$0$;
          return cichelli.YesIts(tmp, arg$YesIts$1$)
        } else if (arg$LzCons$0$ instanceof cichelli.NotEver.class) {
          arg$NotEver$0$ = arg$LzCons$0$.i;
          tmp1 = k + arg$NotEver$0$;
          k = tmp1;
          ls = arg$LzCons$1$;
          continue loopLabel
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static firstSuccess(f, possibles) {
    let tmp;
    tmp = NofibPrelude.map_lz(f, possibles);
    return cichelli.first(0, tmp)
  } 
  static findhash_(keyHashSet, charAssocs, ks) {
    let lscomp1, tryy, s, n, a, z, ks1, scrut, scrut1, arg$Cons$0$, arg$Cons$1$, arg$K$0$, arg$K$1$, arg$K$2$, arg$K$3$, element1$, element0$, tmp, tmp1, lambda, tmp2, lambda1, tmp3, tmp4, lambda2, tmp5, lambda3, tmp6;
    if (ks instanceof NofibPrelude.Nil.class) {
      return cichelli.YesIts(1, charAssocs)
    } else if (ks instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ks.head;
      arg$Cons$1$ = ks.tail;
      if (arg$Cons$0$ instanceof cichelli.K.class) {
        arg$K$0$ = arg$Cons$0$.s;
        arg$K$1$ = arg$Cons$0$.c1;
        arg$K$2$ = arg$Cons$0$.c2;
        arg$K$3$ = arg$Cons$0$.i;
        ks1 = arg$Cons$1$;
        n = arg$K$3$;
        z = arg$K$2$;
        a = arg$K$1$;
        s = arg$K$0$;
        tryy = function tryy(newAssocs) {
          let newCharAssocs, scrut2, arg$Some$0$, tmp7, tmp8;
          newCharAssocs = NofibPrelude.append(newAssocs, charAssocs);
          tmp7 = cichelli.K(s, a, z, n);
          tmp8 = cichelli.hash(newCharAssocs, tmp7);
          scrut2 = cichelli.hinsert(tmp8, keyHashSet);
          if (scrut2 instanceof NofibPrelude.None.class) {
            return cichelli.NotEver(1)
          } else if (scrut2 instanceof NofibPrelude.Some.class) {
            arg$Some$0$ = scrut2.x;
            return cichelli.findhash_(arg$Some$0$, newCharAssocs, ks1)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        };
        tmp = cichelli.assocm(a, charAssocs);
        tmp1 = cichelli.assocm(z, charAssocs);
        scrut = globalThis.Object.freeze([
          tmp,
          tmp1
        ]);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          element0$ = runtime.Tuple.get(scrut, 0);
          element1$ = runtime.Tuple.get(scrut, 1);
          if (element0$ instanceof NofibPrelude.None.class) {
            if (element1$ instanceof NofibPrelude.None.class) {
              scrut1 = a === z;
              if (scrut1 === true) {
                lambda = (undefined, function (m) {
                  let tmp7, tmp8;
                  tmp7 = globalThis.Object.freeze([
                    a,
                    m
                  ]);
                  tmp8 = NofibPrelude.Cons(tmp7, NofibPrelude.Nil);
                  return tryy(tmp8)
                });
                tmp2 = cichelli.enumFromTo_lz(0, cichelli.maxval);
                return cichelli.firstSuccess(lambda, tmp2)
              }
              lscomp1 = function lscomp1(ls1) {
                let lambda4;
                lambda4 = (undefined, function () {
                  let lscomp2, scrut2, m, ms, arg$LzCons$0$, arg$LzCons$1$, tmp7, tmp8;
                  scrut2 = NofibPrelude.force(ls1);
                  if (scrut2 instanceof NofibPrelude.LzNil.class) {
                    return NofibPrelude.LzNil
                  } else if (scrut2 instanceof NofibPrelude.LzCons.class) {
                    arg$LzCons$0$ = scrut2.head;
                    arg$LzCons$1$ = scrut2.tail;
                    ms = arg$LzCons$1$;
                    m = arg$LzCons$0$;
                    lscomp2 = function lscomp2(ls2) {
                      let scrut3, n1, ns, arg$LzCons$0$1, arg$LzCons$1$1, lambda5;
                      scrut3 = NofibPrelude.force(ls2);
                      if (scrut3 instanceof NofibPrelude.LzNil.class) {
                        return lscomp1(ms)
                      } else if (scrut3 instanceof NofibPrelude.LzCons.class) {
                        arg$LzCons$0$1 = scrut3.head;
                        arg$LzCons$1$1 = scrut3.tail;
                        ns = arg$LzCons$1$1;
                        n1 = arg$LzCons$0$1;
                        lambda5 = (undefined, function () {
                          let tmp9, tmp10;
                          tmp9 = globalThis.Object.freeze([
                            m,
                            n1
                          ]);
                          tmp10 = lscomp2(ns);
                          return NofibPrelude.LzCons(tmp9, tmp10)
                        });
                        return NofibPrelude.lazy(lambda5)
                      }
                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                    };
                    tmp7 = cichelli.enumFromTo_lz(0, cichelli.maxval);
                    tmp8 = lscomp2(tmp7);
                    return NofibPrelude.force(tmp8)
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                });
                return NofibPrelude.lazy(lambda4)
              };
              lambda1 = (undefined, function (caseScrut) {
                let element1$1, element0$1, tmp7, tmp8, tmp9, tmp10;
                if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
                  element0$1 = runtime.Tuple.get(caseScrut, 0);
                  element1$1 = runtime.Tuple.get(caseScrut, 1);
                  tmp7 = globalThis.Object.freeze([
                    a,
                    element0$1
                  ]);
                  tmp8 = globalThis.Object.freeze([
                    z,
                    element1$1
                  ]);
                  tmp9 = NofibPrelude.Cons(tmp8, NofibPrelude.Nil);
                  tmp10 = NofibPrelude.Cons(tmp7, tmp9);
                  return tryy(tmp10)
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              });
              tmp3 = cichelli.enumFromTo_lz(0, cichelli.maxval);
              tmp4 = lscomp1(tmp3);
              return cichelli.firstSuccess(lambda1, tmp4);
            } else if (element1$ instanceof NofibPrelude.Some.class) {
              lambda2 = (undefined, function (m) {
                let tmp7, tmp8;
                tmp7 = globalThis.Object.freeze([
                  a,
                  m
                ]);
                tmp8 = NofibPrelude.Cons(tmp7, NofibPrelude.Nil);
                return tryy(tmp8)
              });
              tmp5 = cichelli.enumFromTo_lz(0, cichelli.maxval);
              return cichelli.firstSuccess(lambda2, tmp5)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          } else if (element0$ instanceof NofibPrelude.Some.class) {
            if (element1$ instanceof NofibPrelude.None.class) {
              lambda3 = (undefined, function (n1) {
                let tmp7, tmp8;
                tmp7 = globalThis.Object.freeze([
                  z,
                  n1
                ]);
                tmp8 = NofibPrelude.Cons(tmp7, NofibPrelude.Nil);
                return tryy(tmp8)
              });
              tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
              return cichelli.firstSuccess(lambda3, tmp6)
            } else if (element1$ instanceof NofibPrelude.Some.class) {
              return tryy(NofibPrelude.Nil)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static findhash(keys) {
    let tmp;
    tmp = cichelli.H(NofibPrelude.None, NofibPrelude.None, NofibPrelude.Nil);
    return cichelli.findhash_(tmp, NofibPrelude.Nil, keys)
  } 
  static freq(c) {
    return cichelli.assoc(c, cichelli.freqtab)
  } 
  static morefreq(k1, k2) {
    let arg$K$1$, arg$K$2$, arg$K$1$1, arg$K$2$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (k1 instanceof cichelli.K.class) {
      arg$K$1$ = k1.c1;
      arg$K$2$ = k1.c2;
      if (k2 instanceof cichelli.K.class) {
        arg$K$1$1 = k2.c1;
        arg$K$2$1 = k2.c2;
        tmp = cichelli.freq(arg$K$1$);
        tmp1 = cichelli.freq(arg$K$2$);
        tmp2 = tmp + tmp1;
        tmp3 = cichelli.freq(arg$K$1$1);
        tmp4 = cichelli.freq(arg$K$2$1);
        tmp5 = tmp3 + tmp4;
        return tmp2 > tmp5
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static cichelli_(n) {
    let attribkeys_, hashkeys, tmp, tmp1, tmp2, tmp3;
    tmp = NofibPrelude.intMod(n, 2);
    tmp1 = NofibPrelude.take(tmp, cichelli.keys);
    tmp2 = NofibPrelude.append(cichelli.keys, tmp1);
    attribkeys_ = cichelli.attribkeys(tmp2);
    tmp3 = cichelli.freqsorted(attribkeys_);
    hashkeys = cichelli.blocked(tmp3);
    return cichelli.findhash(hashkeys)
  } 
  static prog(n) {
    return cichelli.cichelli_(n)
  } 
  static main() {
    let tmp;
    tmp = cichelli.prog(6);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "cichelli"]; 
});
let cichelli = cichelli1; export default cichelli;
