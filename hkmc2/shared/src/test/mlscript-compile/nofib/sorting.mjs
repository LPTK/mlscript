const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let sorting1;
(class sorting {
  static {
    sorting1 = this
  }
  static {
    (class EQ {
      static {
        new this
      }
      constructor() {
        sorting.EQ = this;
        Object.defineProperty(this, "class", {
          value: EQ
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "EQ"]; 
    });
    (class GT {
      static {
        new this
      }
      constructor() {
        sorting.GT = this;
        Object.defineProperty(this, "class", {
          value: GT
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "GT"]; 
    });
    (class LT {
      static {
        new this
      }
      constructor() {
        sorting.LT = this;
        Object.defineProperty(this, "class", {
          value: LT
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LT"]; 
    });
    (class Tree {
      static {
        sorting.Tree = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Tree"]; 
    });
    (class Tip extends sorting.Tree {
      static {
        new this
      }
      constructor() {
        super();
        sorting.Tip = this;
        Object.defineProperty(this, "class", {
          value: Tip
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Tip"]; 
    });
    this.Branch = function Branch(a, l, r) {
      return globalThis.Object.freeze(new Branch.class(a, l, r));
    };
    (class Branch extends sorting.Tree {
      static {
        sorting.Branch.class = this
      }
      constructor(a, l, r) {
        super();
        this.a = a;
        this.l = l;
        this.r = r;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Branch", ["a", "l", "r"]]; 
    });
    (class Tree2 {
      static {
        sorting.Tree2 = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Tree2"]; 
    });
    (class Tip2 extends sorting.Tree2 {
      static {
        new this
      }
      constructor() {
        super();
        sorting.Tip2 = this;
        Object.defineProperty(this, "class", {
          value: Tip2
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Tip2"]; 
    });
    this.Twig2 = function Twig2(a) {
      return globalThis.Object.freeze(new Twig2.class(a));
    };
    (class Twig2 extends sorting.Tree2 {
      static {
        sorting.Twig2.class = this
      }
      constructor(a) {
        super();
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Twig2", ["a"]]; 
    });
    this.Branch2 = function Branch2(a, l, r) {
      return globalThis.Object.freeze(new Branch2.class(a, l, r));
    };
    (class Branch2 extends sorting.Tree2 {
      static {
        sorting.Branch2.class = this
      }
      constructor(a, l, r) {
        super();
        this.a = a;
        this.l = l;
        this.r = r;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Branch2", ["a", "l", "r"]]; 
    });
  }
  static int_of_char(c) {
    return runtime.safeCall(c.codePointAt(0))
  } 
  static compareList(xs, ys) {
    loopLabel: while (true) {
      let x, xs_, y, ys_, scrut, scrut1, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1, tmp2, tmp3;
      if (xs instanceof NofibPrelude.Nil.class) {
        if (ys instanceof NofibPrelude.Nil.class) {
          return sorting.EQ
        } else if (ys instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ys.head;
          arg$Cons$1$1 = ys.tail;
          return sorting.LT
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        xs_ = arg$Cons$1$;
        x = arg$Cons$0$;
        if (ys instanceof NofibPrelude.Nil.class) {
          return sorting.GT
        } else if (ys instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ys.head;
          arg$Cons$1$1 = ys.tail;
          ys_ = arg$Cons$1$1;
          y = arg$Cons$0$1;
          tmp = sorting.int_of_char(x);
          tmp1 = sorting.int_of_char(y);
          scrut = tmp === tmp1;
          if (scrut === true) {
            xs = xs_;
            ys = ys_;
            continue loopLabel
          }
          tmp2 = sorting.int_of_char(x);
          tmp3 = sorting.int_of_char(y);
          scrut1 = tmp2 < tmp3;
          if (scrut1 === true) {
            return sorting.LT
          }
          return sorting.GT;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static gtList(a, b) {
    let scrut;
    scrut = sorting.compareList(a, b);
    if (scrut instanceof sorting.GT.class) {
      return true
    }
    return false;
  } 
  static leList(a, b) {
    let tmp;
    tmp = sorting.gtList(a, b);
    return ! tmp
  } 
  static ltList(a, b) {
    let scrut;
    scrut = sorting.compareList(a, b);
    if (scrut instanceof sorting.LT.class) {
      return true
    }
    return false;
  } 
  static geList(a, b) {
    let tmp;
    tmp = sorting.ltList(a, b);
    return ! tmp
  } 
  static eqList(a, b) {
    let scrut;
    scrut = sorting.compareList(a, b);
    if (scrut instanceof sorting.EQ.class) {
      return true
    }
    return false;
  } 
  static prependToAll(sep, xs) {
    let x, xs_, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      xs_ = arg$Cons$1$;
      x = arg$Cons$0$;
      tmp = sorting.prependToAll(sep, xs_);
      tmp1 = NofibPrelude.Cons(x, tmp);
      return NofibPrelude.Cons(sep, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static intersperse(sep, xs) {
    let x, xs_, arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      xs_ = arg$Cons$1$;
      x = arg$Cons$0$;
      tmp = sorting.prependToAll(sep, xs_);
      return NofibPrelude.Cons(x, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static lines(s) {
    let scrut, s_, l, tt, s__, element1$, element0$, lambda, arg$Cons$1$, tmp;
    if (s instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    lambda = (undefined, function (x) {
      return x === "\n"
    });
    scrut = NofibPrelude.break_(lambda, s);
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
        tmp = sorting.lines(s__);
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      tt = tmp;
      return NofibPrelude.Cons(l, tt)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static unlines(ls) {
    let lambda, tmp;
    lambda = (undefined, function (l) {
      let tmp1;
      tmp1 = NofibPrelude.Cons("\n", NofibPrelude.Nil);
      return NofibPrelude.append(l, tmp1)
    });
    tmp = NofibPrelude.map(lambda, ls);
    return NofibPrelude.concat(tmp)
  } 
  static odd(x) {
    let tmp;
    tmp = NofibPrelude.intMod(x, 2);
    return tmp === 0
  } 
  static z_of_int(x) {
    return runtime.safeCall(globalThis.BigInt(x))
  } 
  static hash(str) {
    let lambda, tmp;
    lambda = (undefined, function (acc, c) {
      let tmp1, tmp2, tmp3, tmp4;
      tmp1 = sorting.int_of_char(c);
      tmp2 = sorting.z_of_int(tmp1);
      tmp3 = sorting.z_of_int(31);
      tmp4 = acc * tmp3;
      return tmp2 + tmp4
    });
    tmp = sorting.z_of_int(0);
    return NofibPrelude.foldl(lambda, tmp, str)
  } 
  static quickSort(xs) {
    let lscomp2, lscomp1, x, xs_, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      xs_ = arg$Cons$1$;
      x = arg$Cons$0$;
      lscomp1 = function lscomp1(ls) {
        let t, h, scrut, arg$Cons$0$1, arg$Cons$1$1, tmp5;
        if (ls instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (ls instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ls.head;
          arg$Cons$1$1 = ls.tail;
          t = arg$Cons$1$1;
          h = arg$Cons$0$1;
          scrut = sorting.leList(h, x);
          if (scrut === true) {
            tmp5 = lscomp1(t);
            return NofibPrelude.Cons(h, tmp5)
          }
          return lscomp1(t);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      lscomp2 = function lscomp2(ls) {
        let t, h, scrut, arg$Cons$0$1, arg$Cons$1$1, tmp5;
        if (ls instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (ls instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ls.head;
          arg$Cons$1$1 = ls.tail;
          t = arg$Cons$1$1;
          h = arg$Cons$0$1;
          scrut = sorting.gtList(h, x);
          if (scrut === true) {
            tmp5 = lscomp2(t);
            return NofibPrelude.Cons(h, tmp5)
          }
          return lscomp2(t);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      tmp = lscomp1(xs_);
      tmp1 = sorting.quickSort(tmp);
      tmp2 = lscomp2(xs_);
      tmp3 = sorting.quickSort(tmp2);
      tmp4 = NofibPrelude.Cons(x, tmp3);
      return NofibPrelude.append(tmp1, tmp4)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static select(p, x, ts_fs) {
    let ts, fs, scrut, element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(ts_fs) && ts_fs.length === 2) {
      element0$ = runtime.Tuple.get(ts_fs, 0);
      element1$ = runtime.Tuple.get(ts_fs, 1);
      fs = element1$;
      ts = element0$;
      scrut = runtime.safeCall(p(x));
      if (scrut === true) {
        tmp = NofibPrelude.Cons(x, ts);
        return globalThis.Object.freeze([
          tmp,
          fs
        ])
      }
      tmp1 = NofibPrelude.Cons(x, fs);
      return globalThis.Object.freeze([
        ts,
        tmp1
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static partition(p, xs) {
    let lambda, tmp;
    lambda = (undefined, function (x, y) {
      return sorting.select(p, x, y)
    });
    tmp = globalThis.Object.freeze([
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ]);
    return NofibPrelude.foldr(lambda, tmp, xs)
  } 
  static quickSort2(xs) {
    let x, xs_, scrut, lo, hi, arg$Cons$0$, arg$Cons$1$, element1$, element0$, lambda, tmp, tmp1, tmp2;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      xs_ = arg$Cons$1$;
      x = arg$Cons$0$;
      lambda = (undefined, function (y) {
        return sorting.geList(x, y)
      });
      scrut = sorting.partition(lambda, xs_);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        hi = element1$;
        lo = element0$;
        tmp = sorting.quickSort2(lo);
        tmp1 = sorting.quickSort2(hi);
        tmp2 = NofibPrelude.Cons(x, tmp1);
        return NofibPrelude.append(tmp, tmp2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static quickerSort(xss) {
    let split, x, x1, xs, arg$Cons$0$, arg$Cons$1$;
    if (xss instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xss instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xss.head;
      arg$Cons$1$ = xss.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        x = arg$Cons$0$;
        return NofibPrelude.Cons(x, NofibPrelude.Nil)
      }
      xs = arg$Cons$1$;
      x1 = arg$Cons$0$;
      split = function split(x2, lo, hi, ys) {
        let y, ys_, scrut, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1, tmp2, tmp3, tmp4;
        if (ys instanceof NofibPrelude.Nil.class) {
          tmp = sorting.quickerSort(lo);
          tmp1 = sorting.quickerSort(hi);
          tmp2 = NofibPrelude.Cons(x2, tmp1);
          return NofibPrelude.append(tmp, tmp2)
        } else if (ys instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ys.head;
          arg$Cons$1$1 = ys.tail;
          ys_ = arg$Cons$1$1;
          y = arg$Cons$0$1;
          scrut = sorting.leList(y, x2);
          if (scrut === true) {
            tmp3 = NofibPrelude.Cons(y, lo);
            return split(x2, tmp3, hi, ys_)
          }
          tmp4 = NofibPrelude.Cons(y, hi);
          return split(x2, lo, tmp4, ys_);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      return split(x1, NofibPrelude.Nil, NofibPrelude.Nil, xs);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static insertSort(xss) {
    let trins, x, xs, arg$Cons$0$, arg$Cons$1$, tmp;
    if (xss instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xss instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xss.head;
      arg$Cons$1$ = xss.tail;
      xs = arg$Cons$1$;
      x = arg$Cons$0$;
      trins = function trins(rev, xs1, ys) {
        let y, ys_, xs2, x1, xs_, y1, ys_1, scrut, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
        split_default$: {
          if (xs1 instanceof NofibPrelude.Nil.class) {
            xs2 = xs1;
            if (ys instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$2 = ys.head;
              arg$Cons$1$2 = ys.tail;
              ys_ = arg$Cons$1$2;
              y = arg$Cons$0$2;
              tmp1 = NofibPrelude.reverse(rev);
              tmp2 = NofibPrelude.Cons(y, NofibPrelude.Nil);
              tmp3 = NofibPrelude.append(tmp1, tmp2);
              return trins(NofibPrelude.Nil, tmp3, ys_)
            } else if (ys instanceof NofibPrelude.Nil.class) {} else {
              break split_default$
            }
          } else {
            xs2 = xs1;
            if (ys instanceof NofibPrelude.Nil.class) {} else {
              if (xs1 instanceof NofibPrelude.Cons.class) {
                arg$Cons$0$1 = xs1.head;
                arg$Cons$1$1 = xs1.tail;
                xs_ = arg$Cons$1$1;
                x1 = arg$Cons$0$1;
                if (ys instanceof NofibPrelude.Cons.class) {
                  arg$Cons$0$2 = ys.head;
                  arg$Cons$1$2 = ys.tail;
                  ys_1 = arg$Cons$1$2;
                  y1 = arg$Cons$0$2;
                  scrut = sorting.ltList(x1, y1);
                  if (scrut === true) {
                    tmp4 = NofibPrelude.Cons(x1, rev);
                    tmp5 = NofibPrelude.Cons(y1, ys_1);
                    return trins(tmp4, xs_, tmp5)
                  }
                  tmp6 = NofibPrelude.reverse(rev);
                  tmp7 = NofibPrelude.Cons(x1, xs_);
                  tmp8 = NofibPrelude.Cons(y1, tmp7);
                  tmp9 = NofibPrelude.append(tmp6, tmp8);
                  return trins(NofibPrelude.Nil, tmp9, ys_1);
                }
                break split_default$;
              }
              break split_default$;
            }
          }
          tmp10 = NofibPrelude.reverse(rev);
          return NofibPrelude.append(tmp10, xs2);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      };
      tmp = NofibPrelude.Cons(x, NofibPrelude.Nil);
      return trins(NofibPrelude.Nil, tmp, xs)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static treeSort(param) {
    let readTree, tmp, innerparam, inlinedVal, to_tree;
    readTree = function readTree(t) {
      let x, l, r, arg$Branch$0$, arg$Branch$1$, arg$Branch$2$, tmp1, tmp2, tmp3;
      if (t instanceof sorting.Tip.class) {
        return NofibPrelude.Nil
      } else if (t instanceof sorting.Branch.class) {
        arg$Branch$0$ = t.a;
        arg$Branch$1$ = t.l;
        arg$Branch$2$ = t.r;
        r = arg$Branch$2$;
        l = arg$Branch$1$;
        x = arg$Branch$0$;
        tmp1 = readTree(l);
        tmp2 = readTree(r);
        tmp3 = NofibPrelude.Cons(x, tmp2);
        return NofibPrelude.append(tmp1, tmp3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    innerparam = param;
    to_tree = function to_tree(x, t) {
      let y, l, r, scrut, arg$Branch$0$, arg$Branch$1$, arg$Branch$2$, tmp1, tmp2;
      if (t instanceof sorting.Tip.class) {
        return sorting.Branch(x, sorting.Tip, sorting.Tip)
      } else if (t instanceof sorting.Branch.class) {
        arg$Branch$0$ = t.a;
        arg$Branch$1$ = t.l;
        arg$Branch$2$ = t.r;
        r = arg$Branch$2$;
        l = arg$Branch$1$;
        y = arg$Branch$0$;
        scrut = sorting.leList(x, y);
        if (scrut === true) {
          tmp1 = to_tree(x, l);
          return sorting.Branch(y, tmp1, r)
        }
        tmp2 = to_tree(x, r);
        return sorting.Branch(y, l, tmp2);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    inlinedVal = NofibPrelude.foldr(to_tree, sorting.Tip, innerparam);
    tmp = inlinedVal;
    return readTree(tmp)
  } 
  static treeSort2(param) {
    let readTree, tmp, innerparam, inlinedVal, to_tree;
    readTree = function readTree(t) {
      let x, x1, l, r, arg$Branch2$0$, arg$Branch2$1$, arg$Branch2$2$, arg$Twig2$0$, tmp1, tmp2, tmp3;
      if (t instanceof sorting.Tip2.class) {
        return NofibPrelude.Nil
      } else if (t instanceof sorting.Twig2.class) {
        arg$Twig2$0$ = t.a;
        x = arg$Twig2$0$;
        return NofibPrelude.Cons(x, NofibPrelude.Nil)
      } else if (t instanceof sorting.Branch2.class) {
        arg$Branch2$0$ = t.a;
        arg$Branch2$1$ = t.l;
        arg$Branch2$2$ = t.r;
        r = arg$Branch2$2$;
        l = arg$Branch2$1$;
        x1 = arg$Branch2$0$;
        tmp1 = readTree(l);
        tmp2 = readTree(r);
        tmp3 = NofibPrelude.Cons(x1, tmp2);
        return NofibPrelude.append(tmp1, tmp3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    innerparam = param;
    to_tree = function to_tree(x, t) {
      let y, scrut, y1, l, r, scrut1, arg$Branch2$0$, arg$Branch2$1$, arg$Branch2$2$, arg$Twig2$0$, tmp1, tmp2, tmp3, tmp4;
      if (t instanceof sorting.Tip2.class) {
        return sorting.Twig2(x)
      } else if (t instanceof sorting.Twig2.class) {
        arg$Twig2$0$ = t.a;
        y = arg$Twig2$0$;
        scrut = sorting.leList(x, y);
        if (scrut === true) {
          tmp1 = sorting.Twig2(x);
          return sorting.Branch2(y, tmp1, sorting.Tip2)
        }
        tmp2 = sorting.Twig2(x);
        return sorting.Branch2(y, sorting.Tip2, tmp2);
      } else if (t instanceof sorting.Branch2.class) {
        arg$Branch2$0$ = t.a;
        arg$Branch2$1$ = t.l;
        arg$Branch2$2$ = t.r;
        r = arg$Branch2$2$;
        l = arg$Branch2$1$;
        y1 = arg$Branch2$0$;
        scrut1 = sorting.leList(x, y1);
        if (scrut1 === true) {
          tmp3 = to_tree(x, l);
          return sorting.Branch2(y1, tmp3, r)
        }
        tmp4 = to_tree(x, r);
        return sorting.Branch2(y1, l, tmp4);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    inlinedVal = NofibPrelude.foldr(to_tree, sorting.Tip2, innerparam);
    tmp = inlinedVal;
    return readTree(tmp)
  } 
  static heapSort(xs) {
    let to_heap, clear, heap, mix, tmp;
    heap = function heap(k, xs1) {
      let x, xs_, arg$Cons$0$, arg$Cons$1$, tmp1, tmp2;
      if (xs1 instanceof NofibPrelude.Nil.class) {
        return sorting.Tip
      } else if (xs1 instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs1.head;
        arg$Cons$1$ = xs1.tail;
        xs_ = arg$Cons$1$;
        x = arg$Cons$0$;
        tmp1 = k + 1;
        tmp2 = heap(tmp1, xs_);
        return to_heap(k, x, tmp2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    to_heap = function to_heap(k, x, t) {
      let y, l, r, scrut, scrut1, scrut2, scrut3, arg$Branch$0$, arg$Branch$1$, arg$Branch$2$, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
      split_1$: {
        split_2$: {
          if (t instanceof sorting.Tip.class) {
            return sorting.Branch(x, sorting.Tip, sorting.Tip)
          } else if (t instanceof sorting.Branch.class) {
            arg$Branch$0$ = t.a;
            arg$Branch$1$ = t.l;
            arg$Branch$2$ = t.r;
            r = arg$Branch$2$;
            l = arg$Branch$1$;
            y = arg$Branch$0$;
            scrut = sorting.leList(x, y);
            if (scrut === true) {
              scrut1 = sorting.odd(k);
              if (scrut1 === true) {
                tmp1 = NofibPrelude.intDiv(k, 2);
                tmp2 = to_heap(tmp1, y, l);
                return sorting.Branch(x, tmp2, r)
              }
              scrut2 = sorting.leList(x, y);
              if (scrut2 === true) {
                break split_1$
              }
              scrut3 = sorting.odd(k);
              if (scrut3 === true) {
                break split_2$
              }
            } else {
              scrut2 = sorting.leList(x, y);
              if (scrut2 === true) {
                break split_1$
              }
              scrut3 = sorting.odd(k);
              if (scrut3 === true) {
                break split_2$
              }
            }
            tmp3 = NofibPrelude.intDiv(k, 2);
            tmp4 = to_heap(tmp3, x, r);
            return sorting.Branch(y, l, tmp4)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        tmp5 = NofibPrelude.intDiv(k, 2);
        tmp6 = to_heap(tmp5, x, l);
        return sorting.Branch(y, tmp6, r);
      }
      tmp7 = NofibPrelude.intDiv(k, 2);
      tmp8 = to_heap(tmp7, y, r);
      return sorting.Branch(x, l, tmp8)
    };
    clear = function clear(t) {
      let x, l, r, arg$Branch$0$, arg$Branch$1$, arg$Branch$2$, tmp1, tmp2;
      if (t instanceof sorting.Tip.class) {
        return NofibPrelude.Nil
      } else if (t instanceof sorting.Branch.class) {
        arg$Branch$0$ = t.a;
        arg$Branch$1$ = t.l;
        arg$Branch$2$ = t.r;
        r = arg$Branch$2$;
        l = arg$Branch$1$;
        x = arg$Branch$0$;
        tmp1 = mix(l, r);
        tmp2 = clear(tmp1);
        return NofibPrelude.Cons(x, tmp2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    mix = function mix(l, r) {
      let l1, x, r1, y, l2, r2, scrut, arg$Branch$0$, arg$Branch$1$, arg$Branch$2$, arg$Branch$0$1, arg$Branch$1$1, arg$Branch$2$1, tmp1, tmp2, tmp3, tmp4;
      if (l instanceof sorting.Tip.class) {
        return r
      }
      if (r instanceof sorting.Tip.class) {
        return l
      }
      if (l instanceof sorting.Branch.class) {
        arg$Branch$0$ = l.a;
        arg$Branch$1$ = l.l;
        arg$Branch$2$ = l.r;
        r1 = arg$Branch$2$;
        l1 = arg$Branch$1$;
        x = arg$Branch$0$;
        if (r instanceof sorting.Branch.class) {
          arg$Branch$0$1 = r.a;
          arg$Branch$1$1 = r.l;
          arg$Branch$2$1 = r.r;
          r2 = arg$Branch$2$1;
          l2 = arg$Branch$1$1;
          y = arg$Branch$0$1;
          scrut = sorting.leList(x, y);
          if (scrut === true) {
            tmp1 = mix(l1, r1);
            tmp2 = sorting.Branch(y, l2, r2);
            return sorting.Branch(x, tmp1, tmp2)
          }
          tmp3 = sorting.Branch(x, l1, r1);
          tmp4 = mix(l2, r2);
          return sorting.Branch(y, tmp3, tmp4);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = heap(0, xs);
    return clear(tmp)
  } 
  static mergeSort(param) {
    let runsplit, merge, merge_lists, tmp;
    runsplit = function runsplit(run, xs) {
      let x, xs_, rs, r, x1, xs_1, scrut, scrut1, rs1, scrut2, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
      if (run instanceof NofibPrelude.Nil.class) {
        if (xs instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (xs instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = xs.head;
          arg$Cons$1$1 = xs.tail;
          xs_ = arg$Cons$1$1;
          x = arg$Cons$0$1;
          tmp1 = NofibPrelude.Cons(x, NofibPrelude.Nil);
          return runsplit(tmp1, xs_)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      if (xs instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Cons(run, NofibPrelude.Nil)
      }
      if (run instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = run.head;
        arg$Cons$1$ = run.tail;
        rs = arg$Cons$1$;
        r = arg$Cons$0$;
        if (xs instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = xs.head;
          arg$Cons$1$1 = xs.tail;
          xs_1 = arg$Cons$1$1;
          x1 = arg$Cons$0$1;
          if (rs instanceof NofibPrelude.Nil.class) {
            scrut = sorting.gtList(x1, r);
            if (scrut === true) {
              tmp2 = NofibPrelude.Cons(x1, NofibPrelude.Nil);
              tmp3 = NofibPrelude.Cons(r, tmp2);
              return runsplit(tmp3, xs_1)
            }
            scrut1 = sorting.leList(x1, r);
            if (scrut1 === true) {
              tmp4 = NofibPrelude.Cons(r, rs);
              tmp5 = NofibPrelude.Cons(x1, tmp4);
              return runsplit(tmp5, xs_1)
            }
            tmp6 = NofibPrelude.Cons(r, rs);
            tmp7 = NofibPrelude.Cons(x1, NofibPrelude.Nil);
            tmp8 = runsplit(tmp7, xs_1);
            return NofibPrelude.Cons(tmp6, tmp8);
          }
          rs1 = rs;
          scrut2 = sorting.leList(x1, r);
          if (scrut2 === true) {
            tmp9 = NofibPrelude.Cons(r, rs1);
            tmp10 = NofibPrelude.Cons(x1, tmp9);
            return runsplit(tmp10, xs_1)
          }
          tmp11 = NofibPrelude.Cons(r, rs1);
          tmp12 = NofibPrelude.Cons(x1, NofibPrelude.Nil);
          tmp13 = runsplit(tmp12, xs_1);
          return NofibPrelude.Cons(tmp11, tmp13);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    merge_lists = function merge_lists(xs) {
      let x, xs_, arg$Cons$0$, arg$Cons$1$, tmp1;
      if (xs instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        xs_ = arg$Cons$1$;
        x = arg$Cons$0$;
        tmp1 = merge_lists(xs_);
        return merge(x, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    merge = function merge(xs, ys) {
      let x, xs_, y, ys_, scrut, scrut1, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
      if (xs instanceof NofibPrelude.Nil.class) {
        return ys
      }
      if (ys instanceof NofibPrelude.Nil.class) {
        return xs
      }
      if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        xs_ = arg$Cons$1$;
        x = arg$Cons$0$;
        if (ys instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ys.head;
          arg$Cons$1$1 = ys.tail;
          ys_ = arg$Cons$1$1;
          y = arg$Cons$0$1;
          scrut = sorting.eqList(x, y);
          if (scrut === true) {
            tmp1 = merge(xs_, ys_);
            tmp2 = NofibPrelude.Cons(y, tmp1);
            return NofibPrelude.Cons(x, tmp2)
          }
          scrut1 = sorting.ltList(x, y);
          if (scrut1 === true) {
            tmp3 = NofibPrelude.Cons(y, ys_);
            tmp4 = merge(xs_, tmp3);
            return NofibPrelude.Cons(x, tmp4)
          }
          tmp5 = NofibPrelude.Cons(x, xs_);
          tmp6 = merge(tmp5, ys_);
          return NofibPrelude.Cons(y, tmp6);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = runsplit(NofibPrelude.Nil, param);
    return merge_lists(tmp)
  } 
  static mangle(inpt) {
    let tmp, tmp1, param, inlinedVal, lambda, lambda1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    tmp = sorting.lines(inpt);
    param = tmp;
    lambda = (undefined, function (f, g) {
      let lambda2;
      lambda2 = (undefined, function (x) {
        let tmp12;
        tmp12 = runtime.safeCall(g(x));
        return runtime.safeCall(f(tmp12))
      });
      return lambda2
    });
    lambda1 = (undefined, function (x) {
      return x
    });
    tmp2 = NofibPrelude.Cons(sorting.treeSort2, NofibPrelude.Nil);
    tmp3 = NofibPrelude.Cons(sorting.treeSort, tmp2);
    tmp4 = NofibPrelude.Cons(sorting.quickerSort, tmp3);
    tmp5 = NofibPrelude.Cons(sorting.quickSort2, tmp4);
    tmp6 = NofibPrelude.Cons(sorting.quickSort, tmp5);
    tmp7 = NofibPrelude.Cons(sorting.mergeSort, tmp6);
    tmp8 = NofibPrelude.Cons(sorting.insertSort, tmp7);
    tmp9 = NofibPrelude.Cons(sorting.heapSort, tmp8);
    tmp10 = sorting.intersperse(NofibPrelude.reverse, tmp9);
    tmp11 = NofibPrelude.foldr(lambda, lambda1, tmp10);
    inlinedVal = runtime.safeCall(tmp11(param));
    tmp1 = inlinedVal;
    return sorting.unlines(tmp1)
  } 
  static testSorting_nofib(d) {
    let f, tmp, tmp1, tmp2;
    tmp = runtime.safeCall(globalThis.fs.readFileSync("./hkmc2/shared/src/test/mlscript/nofib/input/Main.hs"));
    tmp1 = runtime.safeCall(tmp.toString());
    f = NofibPrelude.nofibStringToList(tmp1);
    tmp2 = sorting.mangle(f);
    return sorting.hash(tmp2)
  } 
  static main() {
    return sorting.testSorting_nofib(0)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "sorting"]; 
});
let sorting = sorting1; export default sorting;
