const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let treejoin1;
(class treejoin {
  static {
    treejoin1 = this
  }
  static {
    (class Tree {
      static {
        treejoin.Tree = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Tree"]; 
    });
    this.Node = function Node(k, l, r) {
      return globalThis.Object.freeze(new Node.class(k, l, r));
    };
    (class Node extends treejoin.Tree {
      static {
        treejoin.Node.class = this
      }
      constructor(k, l, r) {
        super();
        this.k = k;
        this.l = l;
        this.r = r;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Node", ["k", "l", "r"]]; 
    });
    this.Leaf = function Leaf(k, e) {
      return globalThis.Object.freeze(new Leaf.class(k, e));
    };
    (class Leaf extends treejoin.Tree {
      static {
        treejoin.Leaf.class = this
      }
      constructor(k, e) {
        super();
        this.k = k;
        this.e = e;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Leaf", ["k", "e"]]; 
    });
    (class Empty extends treejoin.Tree {
      static {
        new this
      }
      constructor() {
        super();
        treejoin.Empty = this;
        Object.defineProperty(this, "class", {
          value: Empty
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Empty"]; 
    });
  }
  static isSpace(c) {
    let tmp;
    tmp = c === " ";
    if (tmp === false) {
      return c === "\n"
    }
    return true;
  } 
  static isDigit(c) {
    let n, tmp;
    n = runtime.safeCall(c.codePointAt(0));
    tmp = n >= 48;
    if (tmp === true) {
      return n <= 57
    }
    return false;
  } 
  static insertT(k, e, t) {
    let l, k_, r, scrut, k_1, k__, l_, scrut1, scrut2, arg$Leaf$0$, arg$Leaf$1$, arg$Node$0$, arg$Node$1$, arg$Node$2$, tmp, tmp1, tmp2, tmp3;
    if (t instanceof treejoin.Node.class) {
      arg$Node$0$ = t.k;
      arg$Node$1$ = t.l;
      arg$Node$2$ = t.r;
      r = arg$Node$2$;
      l = arg$Node$1$;
      k_ = arg$Node$0$;
      scrut = k <= k_;
      if (scrut === true) {
        tmp = treejoin.insertT(k, e, l);
        return treejoin.Node(k_, tmp, r)
      }
      tmp1 = treejoin.insertT(k, e, r);
      return treejoin.Node(k_, l, tmp1);
    } else if (t instanceof treejoin.Leaf.class) {
      arg$Leaf$0$ = t.k;
      arg$Leaf$1$ = t.e;
      k__ = arg$Leaf$1$;
      k_1 = arg$Leaf$0$;
      l_ = treejoin.Leaf(k, e);
      scrut1 = k < k_1;
      if (scrut1 === true) {
        tmp2 = treejoin.Leaf(k_1, k__);
        return treejoin.Node(k, l_, tmp2)
      }
      scrut2 = k > k_1;
      if (scrut2 === true) {
        tmp3 = treejoin.Leaf(k_1, k__);
        return treejoin.Node(k_1, tmp3, l_)
      }
      throw runtime.safeCall(globalThis.Error("already exist"));
    } else if (t instanceof treejoin.Empty.class) {
      return treejoin.Leaf(k, e)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static lookupT(k, t) {
    loopLabel: while (true) {
      let l, k_, r, scrut, e, k_1, scrut1, arg$Leaf$0$, arg$Leaf$1$, arg$Node$0$, arg$Node$1$, arg$Node$2$;
      if (t instanceof treejoin.Node.class) {
        arg$Node$0$ = t.k;
        arg$Node$1$ = t.l;
        arg$Node$2$ = t.r;
        r = arg$Node$2$;
        l = arg$Node$1$;
        k_ = arg$Node$0$;
        scrut = k <= k_;
        if (scrut === true) {
          t = l;
          continue loopLabel
        }
        t = r;
        continue loopLabel;
      } else if (t instanceof treejoin.Leaf.class) {
        arg$Leaf$0$ = t.k;
        arg$Leaf$1$ = t.e;
        e = arg$Leaf$1$;
        k_1 = arg$Leaf$0$;
        scrut1 = k === k_1;
        if (scrut1 === true) {
          return NofibPrelude.Some(e)
        }
        return NofibPrelude.None;
      } else if (t instanceof treejoin.Empty.class) {
        return NofibPrelude.None
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static readInt(s) {
    let readInt_;
    readInt_ = function readInt_(n, cs) {
      let cs_, c, scrut, s_, s_1, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
      if (cs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = cs.head;
        arg$Cons$1$ = cs.tail;
        cs_ = arg$Cons$1$;
        c = arg$Cons$0$;
        scrut = treejoin.isDigit(c);
        if (scrut === true) {
          tmp = n * 10;
          tmp1 = runtime.safeCall(c.codePointAt(0));
          tmp2 = tmp + tmp1;
          tmp3 = tmp2 - 48;
          return readInt_(tmp3, cs_)
        }
        tmp4 = NofibPrelude.Cons(c, cs);
        s_ = NofibPrelude.leaveWhile(treejoin.isSpace, tmp4);
        return globalThis.Object.freeze([
          n,
          s_
        ]);
      }
      s_1 = NofibPrelude.leaveWhile(treejoin.isSpace, cs);
      return globalThis.Object.freeze([
        n,
        s_1
      ]);
    };
    return readInt_(0, s)
  } 
  static join(t1, t2, j) {
    loopLabel: while (true) {
      let a, b, c, scrut, e, d, l, r, arg$Node$1$, arg$Node$2$, arg$Leaf$1$, element2$, element1$, element0$, arg$Some$0$, element1$1, element0$1, tmp, tmp1;
      if (t1 instanceof treejoin.Empty.class) {
        return j
      }
      if (t2 instanceof treejoin.Empty.class) {
        return j
      }
      if (t1 instanceof treejoin.Leaf.class) {
        arg$Leaf$1$ = t1.e;
        if (runtime.Tuple.isArrayLike(arg$Leaf$1$) && arg$Leaf$1$.length === 3) {
          element0$ = runtime.Tuple.get(arg$Leaf$1$, 0);
          element1$ = runtime.Tuple.get(arg$Leaf$1$, 1);
          element2$ = runtime.Tuple.get(arg$Leaf$1$, 2);
          c = element2$;
          b = element1$;
          a = element0$;
          scrut = treejoin.lookupT(c, t2);
          if (scrut instanceof NofibPrelude.None.class) {
            return j
          } else if (scrut instanceof NofibPrelude.Some.class) {
            arg$Some$0$ = scrut.x;
            if (runtime.Tuple.isArrayLike(arg$Some$0$) && arg$Some$0$.length === 3) {
              element0$1 = runtime.Tuple.get(arg$Some$0$, 0);
              element1$1 = runtime.Tuple.get(arg$Some$0$, 1);
              runtime.Tuple.get(arg$Some$0$, 2);
              e = element1$1;
              d = element0$1;
              tmp = globalThis.Object.freeze([
                a,
                b,
                c,
                d,
                e
              ]);
              return treejoin.insertT(c, tmp, j)
            }
          }
        }
      } else if (t1 instanceof treejoin.Node.class) {
        arg$Node$1$ = t1.l;
        arg$Node$2$ = t1.r;
        r = arg$Node$2$;
        l = arg$Node$1$;
        tmp1 = treejoin.join(r, t2, j);
        t1 = l;
        j = tmp1;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static readTree(fk, s, t) {
    loopLabel: while (true) {
      let scrut, f, s_, scrut1, s__, g, scrut2, s___, h, e, k, element1$, element0$, element1$1, element0$1, element1$2, element0$2, tmp;
      if (s instanceof NofibPrelude.Nil.class) {
        return t
      }
      scrut = treejoin.readInt(s);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        s_ = element1$;
        f = element0$;
        scrut1 = treejoin.readInt(s_);
        if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
          element0$1 = runtime.Tuple.get(scrut1, 0);
          element1$1 = runtime.Tuple.get(scrut1, 1);
          s__ = element1$1;
          g = element0$1;
          scrut2 = treejoin.readInt(s__);
          if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
            element0$2 = runtime.Tuple.get(scrut2, 0);
            element1$2 = runtime.Tuple.get(scrut2, 1);
            s___ = element1$2;
            h = element0$2;
            e = globalThis.Object.freeze([
              f,
              g,
              h
            ]);
            k = runtime.safeCall(fk(e));
            tmp = treejoin.insertT(k, e, t);
            s = s___;
            t = tmp;
            continue loopLabel
          }
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static testTreejoin_nofib(n) {
    let c1, c2, a, b, tmp, tmp1, tmp2, tmp3, lambda, lambda1;
    tmp = runtime.safeCall(globalThis.fs.readFileSync("./hkmc2/shared/src/test/mlscript/nofib/input/1500.1"));
    tmp1 = runtime.safeCall(tmp.toString());
    c1 = NofibPrelude.nofibStringToList(tmp1);
    tmp2 = runtime.safeCall(globalThis.fs.readFileSync("./hkmc2/shared/src/test/mlscript/nofib/input/1500.2"));
    tmp3 = runtime.safeCall(tmp2.toString());
    c2 = NofibPrelude.nofibStringToList(tmp3);
    lambda = (undefined, function (caseScrut) {
      let xx, element0$;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 3) {
        element0$ = runtime.Tuple.get(caseScrut, 0);
        runtime.Tuple.get(caseScrut, 1);
        runtime.Tuple.get(caseScrut, 2);
        xx = element0$;
        return xx
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    a = treejoin.readTree(lambda, c1, treejoin.Empty);
    lambda1 = (undefined, function (caseScrut) {
      let xx, element0$;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 3) {
        element0$ = runtime.Tuple.get(caseScrut, 0);
        runtime.Tuple.get(caseScrut, 1);
        runtime.Tuple.get(caseScrut, 2);
        xx = element0$;
        return xx
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    b = treejoin.readTree(lambda1, c2, treejoin.Empty);
    return treejoin.join(a, b, treejoin.Empty)
  } 
  static main() {
    let tmp;
    tmp = treejoin.testTreejoin_nofib(0);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "treejoin"]; 
});
let treejoin = treejoin1; export default treejoin;
