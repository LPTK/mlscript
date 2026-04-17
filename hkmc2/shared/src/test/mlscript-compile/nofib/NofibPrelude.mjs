const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import Predef from "./../Predef.mjs";
let NofibPrelude1;
(class NofibPrelude {
  static {
    NofibPrelude1 = this
  }
  static {
    (class Option {
      static {
        NofibPrelude.Option = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Option"]; 
    });
    this.Some = function Some(x) {
      return globalThis.Object.freeze(new Some.class(x));
    };
    (class Some extends NofibPrelude.Option {
      static {
        NofibPrelude.Some.class = this
      }
      constructor(x) {
        super();
        this.x = x;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Some", ["x"]]; 
    });
    (class None extends NofibPrelude.Option {
      static {
        new this
      }
      constructor() {
        super();
        NofibPrelude.None = this;
        Object.defineProperty(this, "class", {
          value: None
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "None"]; 
    });
    this.Lazy = function Lazy(init) {
      return globalThis.Object.freeze(new Lazy.class(init));
    };
    (class Lazy {
      static {
        NofibPrelude.Lazy.class = this
      }
      constructor(init) {
        this.init = init;
        this.cached = NofibPrelude.None;
      }
      #cached;
      get cached() { return this.#cached; }
      set cached(value) { this.#cached = value; }
      get() {
        let scrut, v, v1, arg$Some$0$, tmp;
        scrut = this.cached;
        if (scrut instanceof NofibPrelude.Some.class) {
          arg$Some$0$ = scrut.x;
          v = arg$Some$0$;
          return v
        }
        v1 = runtime.safeCall(this.init());
        tmp = NofibPrelude.Some(v1);
        this.cached = tmp;
        return v1;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Lazy", ["init"]]; 
    });
    (class List {
      static {
        NofibPrelude.List = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "List"]; 
    });
    this.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons extends NofibPrelude.List {
      static {
        NofibPrelude.Cons.class = this
      }
      constructor(head, tail) {
        super();
        this.head = head;
        this.tail = tail;
      }
      toString() {
        let tmp, tmp1, tmp2;
        tmp = NofibPrelude.Cons(this.head, this.tail);
        tmp1 = NofibPrelude._internal_cons_to_str(tmp);
        tmp2 = "[" + tmp1;
        return tmp2 + "]"
      }
      [prettyPrint]() { return this.toString(); }
      static [definitionMetadata] = ["class", "Cons", ["head", "tail"]]; 
    });
    (class Nil extends NofibPrelude.List {
      static {
        new this
      }
      constructor() {
        super();
        NofibPrelude.Nil = this;
        Object.defineProperty(this, "class", {
          value: Nil
        });
        globalThis.Object.freeze(this);
      }
      toString() {
        return "[]"
      }
      [prettyPrint]() { return this.toString(); }
      static [definitionMetadata] = ["object", "Nil"]; 
    });
    (class LzList {
      static {
        NofibPrelude.LzList = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LzList"]; 
    });
    this.LzCons = function LzCons(head, tail) {
      return globalThis.Object.freeze(new LzCons.class(head, tail));
    };
    (class LzCons extends NofibPrelude.LzList {
      static {
        NofibPrelude.LzCons.class = this
      }
      constructor(head, tail) {
        super();
        this.head = head;
        this.tail = tail;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LzCons", ["head", "tail"]]; 
    });
    (class LzNil extends NofibPrelude.LzList {
      static {
        new this
      }
      constructor() {
        super();
        NofibPrelude.LzNil = this;
        Object.defineProperty(this, "class", {
          value: LzNil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LzNil"]; 
    });
  }
  static fromSome(s) {
    let x, arg$Some$0$;
    if (s instanceof NofibPrelude.Some.class) {
      arg$Some$0$ = s.x;
      x = arg$Some$0$;
      return x
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static lazy(x) {
    return NofibPrelude.Lazy(x)
  } 
  static force(x) {
    if (x instanceof NofibPrelude.Lazy.class) {
      return x.get()
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static _internal_cons_to_str(ls) {
    let h, t, h1, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2;
    if (ls instanceof NofibPrelude.Nil.class) {
      return ""
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        h = arg$Cons$0$;
        return runtime.safeCall(Predef.render(h))
      }
      t = arg$Cons$1$;
      h1 = arg$Cons$0$;
      tmp = runtime.safeCall(Predef.render(h1));
      tmp1 = tmp + ",";
      tmp2 = NofibPrelude._internal_cons_to_str(t);
      return tmp1 + tmp2;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static ltList(xs, ys, lt, gt) {
    loopLabel: while (true) {
      let x, xs1, ys1, y, scrut, scrut1, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
      if (xs instanceof NofibPrelude.Nil.class) {
        if (ys instanceof NofibPrelude.Nil.class) {
          return false
        }
        return true;
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        xs1 = arg$Cons$1$;
        x = arg$Cons$0$;
        if (ys instanceof NofibPrelude.Nil.class) {
          return false
        } else if (ys instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ys.head;
          arg$Cons$1$1 = ys.tail;
          ys1 = arg$Cons$1$1;
          y = arg$Cons$0$1;
          scrut = runtime.safeCall(lt(x, y));
          if (scrut === true) {
            return true
          }
          scrut1 = runtime.safeCall(gt(x, y));
          if (scrut1 === true) {
            return false
          }
          xs = xs1;
          ys = ys1;
          continue loopLabel;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static list(...args) {
    let x, xs, middleElements, element0$, tmp;
    if (runtime.Tuple.isArrayLike(args) && args.length === 0) {
      return NofibPrelude.Nil
    } else if (runtime.Tuple.isArrayLike(args) && args.length >= 1) {
      element0$ = runtime.Tuple.get(args, 0);
      middleElements = runtime.Tuple.slice(args, 1, 0);
      xs = middleElements;
      x = element0$;
      tmp = NofibPrelude.list(...xs);
      return NofibPrelude.Cons(x, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static ltTup2(t1, t2, lt1, gt1, lt2) {
    let a, b, c, d, scrut, scrut1, element1$, element0$, element1$1, element0$1;
    if (runtime.Tuple.isArrayLike(t1) && t1.length === 2) {
      element0$ = runtime.Tuple.get(t1, 0);
      element1$ = runtime.Tuple.get(t1, 1);
      b = element1$;
      a = element0$;
      if (runtime.Tuple.isArrayLike(t2) && t2.length === 2) {
        element0$1 = runtime.Tuple.get(t2, 0);
        element1$1 = runtime.Tuple.get(t2, 1);
        d = element1$1;
        c = element0$1;
        scrut = runtime.safeCall(lt1(a, c));
        if (scrut === true) {
          return true
        }
        scrut1 = runtime.safeCall(gt1(a, c));
        if (scrut1 === true) {
          return false
        }
        return runtime.safeCall(lt2(b, d));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static eqTup2(t1, t2) {
    let a, b, c, d, scrut, scrut1, element1$, element0$, element1$1, element0$1;
    if (runtime.Tuple.isArrayLike(t1) && t1.length === 2) {
      element0$ = runtime.Tuple.get(t1, 0);
      element1$ = runtime.Tuple.get(t1, 1);
      b = element1$;
      a = element0$;
      if (runtime.Tuple.isArrayLike(t2) && t2.length === 2) {
        element0$1 = runtime.Tuple.get(t2, 0);
        element1$1 = runtime.Tuple.get(t2, 1);
        d = element1$1;
        c = element0$1;
        scrut = Predef.equals(a, c);
        if (scrut === true) {
          scrut1 = Predef.equals(b, d);
          if (scrut1 === true) {
            return true
          }
          return false;
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static compose(f, g) {
    let lambda;
    lambda = (undefined, function (x) {
      let tmp;
      tmp = runtime.safeCall(g(x));
      return runtime.safeCall(f(tmp))
    });
    return lambda
  } 
  static snd(x) {
    let s, element1$;
    if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
      runtime.Tuple.get(x, 0);
      element1$ = runtime.Tuple.get(x, 1);
      s = element1$;
      return s
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static fst(x) {
    let f, element0$;
    if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
      element0$ = runtime.Tuple.get(x, 0);
      runtime.Tuple.get(x, 1);
      f = element0$;
      return f
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static until(p, f, i) {
    loopLabel: while (true) {
      let scrut, tmp;
      scrut = runtime.safeCall(p(i));
      if (scrut === true) {
        return i
      }
      tmp = runtime.safeCall(f(i));
      i = tmp;
      continue loopLabel;
    }
  } 
  static flip(f, x, y) {
    let tmp;
    tmp = runtime.safeCall(f(y));
    return runtime.safeCall(tmp(x))
  } 
  static power(a, n) {
    return globalThis.Math.pow(a, n)
  } 
  static intDiv(a, b) {
    let tmp;
    tmp = a / b;
    return runtime.safeCall(globalThis.Math.floor(tmp))
  } 
  static intQuot(a, b) {
    let tmp;
    tmp = a / b;
    return runtime.safeCall(globalThis.Math.trunc(tmp))
  } 
  static intMod(a, b) {
    let tmp, tmp1;
    tmp = NofibPrelude.intDiv(a, b);
    tmp1 = b * tmp;
    return a - tmp1
  } 
  static intRem(a, b) {
    let tmp, tmp1;
    tmp = NofibPrelude.intQuot(a, b);
    tmp1 = b * tmp;
    return a - tmp1
  } 
  static quotRem(a, b) {
    let tmp, tmp1;
    tmp = NofibPrelude.intQuot(a, b);
    tmp1 = NofibPrelude.intRem(a, b);
    return globalThis.Object.freeze([
      tmp,
      tmp1
    ])
  } 
  static divMod(a, b) {
    let tmp, tmp1;
    tmp = NofibPrelude.intDiv(a, b);
    tmp1 = NofibPrelude.intMod(a, b);
    return globalThis.Object.freeze([
      tmp,
      tmp1
    ])
  } 
  static max(a, b) {
    return globalThis.Math.max(a, b)
  } 
  static min(a, b) {
    return globalThis.Math.min(a, b)
  } 
  static abs(x) {
    return runtime.safeCall(globalThis.Math.abs(x))
  } 
  static head(l) {
    let h, arg$Cons$0$;
    if (l instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = l.head;
      h = arg$Cons$0$;
      return h
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static tail(l) {
    let t, arg$Cons$1$;
    if (l instanceof NofibPrelude.Cons.class) {
      arg$Cons$1$ = l.tail;
      t = arg$Cons$1$;
      return t
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static while_(p, f, x) {
    loopLabel: while (true) {
      let scrut, tmp;
      scrut = runtime.safeCall(p(x));
      if (scrut === true) {
        tmp = runtime.safeCall(f(x));
        x = tmp;
        continue loopLabel
      }
      return x;
    }
  } 
  static reverse(l) {
    let r;
    r = function r(l$_, l1) {
      let x, xs, arg$Cons$0$, arg$Cons$1$, tmp;
      if (l1 instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = l1.head;
        arg$Cons$1$ = l1.tail;
        xs = arg$Cons$1$;
        x = arg$Cons$0$;
        tmp = NofibPrelude.Cons(x, l$_);
        return r(tmp, xs)
      }
      return l$_;
    };
    return r(NofibPrelude.Nil, l)
  } 
  static map(f, xs) {
    let x, xs1, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      xs1 = arg$Cons$1$;
      x = arg$Cons$0$;
      tmp = runtime.safeCall(f(x));
      tmp1 = NofibPrelude.map(f, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    } else if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static listLen(ls) {
    let l;
    l = function l(ls1, a) {
      let t, arg$Cons$1$, tmp;
      if (ls1 instanceof NofibPrelude.Nil.class) {
        return a
      } else if (ls1 instanceof NofibPrelude.Cons.class) {
        arg$Cons$1$ = ls1.tail;
        t = arg$Cons$1$;
        tmp = a + 1;
        return l(t, tmp)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    return l(ls, 0)
  } 
  static listEq(xs, ys) {
    loopLabel: while (true) {
      let hx, tx, hy, ty, scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
      if (xs instanceof NofibPrelude.Nil.class) {
        if (ys instanceof NofibPrelude.Nil.class) {
          return true
        }
        return false;
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        tx = arg$Cons$1$;
        hx = arg$Cons$0$;
        if (ys instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ys.head;
          arg$Cons$1$1 = ys.tail;
          ty = arg$Cons$1$1;
          hy = arg$Cons$0$1;
          scrut = Predef.equals(hx, hy);
          if (scrut === true) {
            xs = tx;
            ys = ty;
            continue loopLabel
          }
          return false;
        }
        return false;
      }
      return false;
    }
  } 
  static listEqBy(f, a, b) {
    loopLabel: while (true) {
      let x, xs, ys, y, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp;
      if (a instanceof NofibPrelude.Nil.class) {
        if (b instanceof NofibPrelude.Nil.class) {
          return true
        }
        return false;
      } else if (a instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = a.head;
        arg$Cons$1$ = a.tail;
        xs = arg$Cons$1$;
        x = arg$Cons$0$;
        if (b instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = b.head;
          arg$Cons$1$1 = b.tail;
          ys = arg$Cons$1$1;
          y = arg$Cons$0$1;
          tmp = runtime.safeCall(f(x, y));
          if (tmp === true) {
            a = xs;
            b = ys;
            continue loopLabel
          }
          return false;
        }
        return false;
      }
      return false;
    }
  } 
  static listNeq(xs, ys) {
    loopLabel: while (true) {
      let hx, tx, hy, ty, scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
      if (xs instanceof NofibPrelude.Nil.class) {
        if (ys instanceof NofibPrelude.Nil.class) {
          return false
        }
        return true;
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        tx = arg$Cons$1$;
        hx = arg$Cons$0$;
        if (ys instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ys.head;
          arg$Cons$1$1 = ys.tail;
          ty = arg$Cons$1$1;
          hy = arg$Cons$0$1;
          scrut = Predef.equals(hx, hy);
          if (scrut === true) {
            xs = tx;
            ys = ty;
            continue loopLabel
          }
          return true;
        }
        return true;
      }
      return true;
    }
  } 
  static enumFromTo(a, b) {
    let scrut, tmp, tmp1;
    scrut = a <= b;
    if (scrut === true) {
      tmp = a + 1;
      tmp1 = NofibPrelude.enumFromTo(tmp, b);
      return NofibPrelude.Cons(a, tmp1)
    }
    return NofibPrelude.Nil;
  } 
  static enumFromThenTo(a, t, b) {
    let scrut, tmp, tmp1, tmp2;
    scrut = a <= b;
    if (scrut === true) {
      tmp = 2 * t;
      tmp1 = tmp - a;
      tmp2 = NofibPrelude.enumFromThenTo(t, tmp1, b);
      return NofibPrelude.Cons(a, tmp2)
    }
    return NofibPrelude.Nil;
  } 
  static leave(n, ls) {
    loopLabel: while (true) {
      let t, scrut, arg$Cons$1$, tmp;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$1$ = ls.tail;
        t = arg$Cons$1$;
        scrut = n <= 0;
        if (scrut === true) {
          return ls
        }
        tmp = n - 1;
        n = tmp;
        ls = t;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static take(n, ls) {
    let t, h, scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      t = arg$Cons$1$;
      h = arg$Cons$0$;
      scrut = n <= 0;
      if (scrut === true) {
        return NofibPrelude.Nil
      }
      tmp = n - 1;
      tmp1 = NofibPrelude.take(tmp, t);
      return NofibPrelude.Cons(h, tmp1);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static splitAt(n, ls) {
    let tmp, tmp1;
    tmp = NofibPrelude.take(n, ls);
    tmp1 = NofibPrelude.leave(n, ls);
    return globalThis.Object.freeze([
      tmp,
      tmp1
    ])
  } 
  static zip(xs, ys) {
    let x, xs1, ys1, y, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      xs1 = arg$Cons$1$;
      x = arg$Cons$0$;
      if (ys instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = ys.head;
        arg$Cons$1$1 = ys.tail;
        ys1 = arg$Cons$1$1;
        y = arg$Cons$0$1;
        tmp = globalThis.Object.freeze([
          x,
          y
        ]);
        tmp1 = NofibPrelude.zip(xs1, ys1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  } 
  static inList(x, ls) {
    loopLabel: while (true) {
      let t, h, scrut, arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        t = arg$Cons$1$;
        h = arg$Cons$0$;
        scrut = x === h;
        if (scrut === true) {
          return true
        }
        ls = t;
        continue loopLabel;
      } else if (ls instanceof NofibPrelude.Nil.class) {
        return false
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static notElem(x, ls) {
    let tmp;
    tmp = NofibPrelude.inList(x, ls);
    return ! tmp
  } 
  static append(xs, ys) {
    let x, xs1, arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      xs1 = arg$Cons$1$;
      x = arg$Cons$0$;
      tmp = NofibPrelude.append(xs1, ys);
      return NofibPrelude.Cons(x, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static concat(ls) {
    let x, xs, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      xs = arg$Cons$1$;
      x = arg$Cons$0$;
      tmp = NofibPrelude.concat(xs);
      return NofibPrelude.append(x, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static filter(f, ls) {
    loopLabel: while (true) {
      let t, h, scrut, arg$Cons$0$, arg$Cons$1$, tmp;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        t = arg$Cons$1$;
        h = arg$Cons$0$;
        scrut = runtime.safeCall(f(h));
        if (scrut === true) {
          tmp = NofibPrelude.filter(f, t);
          return NofibPrelude.Cons(h, tmp)
        }
        ls = t;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static all(p, ls) {
    loopLabel: while (true) {
      let t, h, scrut, arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Nil.class) {
        return true
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        t = arg$Cons$1$;
        h = arg$Cons$0$;
        scrut = runtime.safeCall(p(h));
        if (scrut === true) {
          ls = t;
          continue loopLabel
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static orList(ls) {
    loopLabel: while (true) {
      let t, h, arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Nil.class) {
        return false
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        t = arg$Cons$1$;
        h = arg$Cons$0$;
        if (h === true) {
          return true
        }
        ls = t;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static leaveWhile(f, ls) {
    loopLabel: while (true) {
      let t, h, scrut, arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        t = arg$Cons$1$;
        h = arg$Cons$0$;
        scrut = runtime.safeCall(f(h));
        if (scrut === true) {
          ls = t;
          continue loopLabel
        }
        return NofibPrelude.Cons(h, t);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static foldl(f, a, xs) {
    loopLabel: while (true) {
      let t, h, arg$Cons$0$, arg$Cons$1$, tmp;
      if (xs instanceof NofibPrelude.Nil.class) {
        return a
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        t = arg$Cons$1$;
        h = arg$Cons$0$;
        tmp = runtime.safeCall(f(a, h));
        a = tmp;
        xs = t;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static scanl(f, q, ls) {
    let x, xs, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(q, NofibPrelude.Nil)
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      xs = arg$Cons$1$;
      x = arg$Cons$0$;
      tmp = runtime.safeCall(f(q, x));
      tmp1 = NofibPrelude.scanl(f, tmp, xs);
      return NofibPrelude.Cons(q, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static scanr(f, q, ls) {
    let x, xs, t, q1, scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(q, NofibPrelude.Nil)
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      xs = arg$Cons$1$;
      x = arg$Cons$0$;
      scrut = NofibPrelude.scanr(f, q, xs);
      if (scrut instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = scrut.head;
        arg$Cons$1$1 = scrut.tail;
        t = arg$Cons$1$1;
        q1 = arg$Cons$0$1;
        tmp = runtime.safeCall(f(x, q1));
        tmp1 = NofibPrelude.Cons(q1, t);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static foldr(f, z, xs) {
    let t, h, arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return z
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      t = arg$Cons$1$;
      h = arg$Cons$0$;
      tmp = NofibPrelude.foldr(f, z, t);
      return runtime.safeCall(f(h, tmp))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static foldl1(f, ls) {
    let x, xs, arg$Cons$0$, arg$Cons$1$;
    if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      xs = arg$Cons$1$;
      x = arg$Cons$0$;
      return NofibPrelude.foldl(f, x, xs)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static foldr1(f, ls) {
    let x, x1, xs, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        x = arg$Cons$0$;
        return x
      }
      xs = arg$Cons$1$;
      x1 = arg$Cons$0$;
      tmp = NofibPrelude.foldr1(f, xs);
      return runtime.safeCall(f(x1, tmp));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static maximum(xs) {
    let lambda;
    lambda = (undefined, function (x, y) {
      let scrut;
      scrut = x > y;
      if (scrut === true) {
        return x
      }
      return y;
    });
    return NofibPrelude.foldl1(lambda, xs)
  } 
  static nubBy(eq, ls) {
    let t, h, arg$Cons$0$, arg$Cons$1$, lambda, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      t = arg$Cons$1$;
      h = arg$Cons$0$;
      lambda = (undefined, function (y) {
        let tmp2;
        tmp2 = runtime.safeCall(eq(h, y));
        return ! tmp2
      });
      tmp = NofibPrelude.filter(lambda, t);
      tmp1 = NofibPrelude.nubBy(eq, tmp);
      return NofibPrelude.Cons(h, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static zipWith(f, xss, yss) {
    let x, xs, ys, y, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
    if (xss instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xss.head;
      arg$Cons$1$ = xss.tail;
      xs = arg$Cons$1$;
      x = arg$Cons$0$;
      if (yss instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = yss.head;
        arg$Cons$1$1 = yss.tail;
        ys = arg$Cons$1$1;
        y = arg$Cons$0$1;
        tmp = runtime.safeCall(f(x, y));
        tmp1 = NofibPrelude.zipWith(f, xs, ys);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  } 
  static deleteBy(eq, x, ys) {
    let ys1, y, scrut, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ys instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ys instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ys.head;
      arg$Cons$1$ = ys.tail;
      ys1 = arg$Cons$1$;
      y = arg$Cons$0$;
      scrut = runtime.safeCall(eq(x, y));
      if (scrut === true) {
        return ys1
      }
      tmp = NofibPrelude.deleteBy(eq, x, ys1);
      return NofibPrelude.Cons(y, tmp);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static unionBy(eq, xs, ys) {
    let lambda, tmp, tmp1;
    lambda = (undefined, function (acc, y) {
      return NofibPrelude.deleteBy(eq, y, acc)
    });
    tmp = NofibPrelude.nubBy(eq, ys);
    tmp1 = NofibPrelude.foldl(lambda, tmp, xs);
    return NofibPrelude.append(xs, tmp1)
  } 
  static union(xs, ys) {
    let lambda;
    lambda = (undefined, function (x, y) {
      return Predef.equals(x, y)
    });
    return NofibPrelude.unionBy(lambda, xs, ys)
  } 
  static atIndex(i, ls) {
    loopLabel: while (true) {
      let t, h, scrut, arg$Cons$0$, arg$Cons$1$, tmp;
      if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        t = arg$Cons$1$;
        h = arg$Cons$0$;
        scrut = Predef.equals(i, 0);
        if (scrut === true) {
          return h
        }
        tmp = i - 1;
        i = tmp;
        ls = t;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static sum(xs) {
    let go;
    go = function go(xs1, a) {
      let t, h, arg$Cons$0$, arg$Cons$1$, tmp;
      if (xs1 instanceof NofibPrelude.Nil.class) {
        return a
      } else if (xs1 instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs1.head;
        arg$Cons$1$ = xs1.tail;
        t = arg$Cons$1$;
        h = arg$Cons$0$;
        tmp = a + h;
        return go(t, tmp)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    return go(xs, 0)
  } 
  static null_(ls) {
    if (ls instanceof NofibPrelude.Nil.class) {
      return true
    }
    return false;
  } 
  static replicate(n, x) {
    let scrut, tmp, tmp1;
    scrut = Predef.equals(n, 0);
    if (scrut === true) {
      return NofibPrelude.Nil
    }
    tmp = n - 1;
    tmp1 = NofibPrelude.replicate(tmp, x);
    return NofibPrelude.Cons(x, tmp1);
  } 
  static unzip(l) {
    let f;
    f = function f(l1, a, b) {
      let x, y, t, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3;
      if (l1 instanceof NofibPrelude.Nil.class) {
        tmp = NofibPrelude.reverse(a);
        tmp1 = NofibPrelude.reverse(b);
        return globalThis.Object.freeze([
          tmp,
          tmp1
        ])
      } else if (l1 instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = l1.head;
        arg$Cons$1$ = l1.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          t = arg$Cons$1$;
          y = element1$;
          x = element0$;
          tmp2 = NofibPrelude.Cons(x, a);
          tmp3 = NofibPrelude.Cons(y, b);
          return f(t, tmp2, tmp3)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    return f(l, NofibPrelude.Nil, NofibPrelude.Nil)
  } 
  static zip3(xs, ys, zs) {
    let x, xs1, ys1, y, zs1, z, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      xs1 = arg$Cons$1$;
      x = arg$Cons$0$;
      if (ys instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = ys.head;
        arg$Cons$1$1 = ys.tail;
        ys1 = arg$Cons$1$1;
        y = arg$Cons$0$1;
        if (zs instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$2 = zs.head;
          arg$Cons$1$2 = zs.tail;
          zs1 = arg$Cons$1$2;
          z = arg$Cons$0$2;
          tmp = globalThis.Object.freeze([
            x,
            y,
            z
          ]);
          tmp1 = NofibPrelude.zip3(xs1, ys1, zs1);
          return NofibPrelude.Cons(tmp, tmp1)
        }
        return NofibPrelude.Nil;
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  } 
  static transpose(xss) {
    loopLabel: while (true) {
      let lscomp, combine, xss1, x, xs, xss2, hds, tls, scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, element1$, element0$, tmp;
      lscomp = function lscomp(ls) {
        let t, h, tl, hd, arg$Cons$0$2, arg$Cons$1$2, arg$Cons$0$3, arg$Cons$1$3, tmp1, tmp2;
        if (ls instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (ls instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$2 = ls.head;
          arg$Cons$1$2 = ls.tail;
          t = arg$Cons$1$2;
          h = arg$Cons$0$2;
          if (h instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$3 = h.head;
            arg$Cons$1$3 = h.tail;
            tl = arg$Cons$1$3;
            hd = arg$Cons$0$3;
            tmp1 = globalThis.Object.freeze([
              hd,
              tl
            ]);
            tmp2 = lscomp(t);
            return NofibPrelude.Cons(tmp1, tmp2)
          }
          return lscomp(t);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      combine = function combine(y, h, ys, t) {
        let tmp1, tmp2, tmp3;
        tmp1 = NofibPrelude.Cons(y, h);
        tmp2 = NofibPrelude.Cons(ys, t);
        tmp3 = NofibPrelude.transpose(tmp2);
        return NofibPrelude.Cons(tmp1, tmp3)
      };
      if (xss instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (xss instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xss.head;
        arg$Cons$1$ = xss.tail;
        if (arg$Cons$0$ instanceof NofibPrelude.Nil.class) {
          xss1 = arg$Cons$1$;
          xss = xss1;
          continue loopLabel
        } else if (arg$Cons$0$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = arg$Cons$0$.head;
          arg$Cons$1$1 = arg$Cons$0$.tail;
          xss2 = arg$Cons$1$;
          xs = arg$Cons$1$1;
          x = arg$Cons$0$1;
          tmp = lscomp(xss2);
          scrut = NofibPrelude.unzip(tmp);
          if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
            element0$ = runtime.Tuple.get(scrut, 0);
            element1$ = runtime.Tuple.get(scrut, 1);
            tls = element1$;
            hds = element0$;
            return combine(x, hds, xs, tls)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
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
      scrut1 = NofibPrelude.break_(p, xs);
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
  static flatMap(f, ls) {
    let t, h, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      t = arg$Cons$1$;
      h = arg$Cons$0$;
      tmp = runtime.safeCall(f(h));
      tmp1 = NofibPrelude.flatMap(f, t);
      return NofibPrelude.append(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static map_lz(f, ls) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, t, h, arg$LzCons$0$, arg$LzCons$1$, tmp, tmp1;
      scrut = NofibPrelude.force(ls);
      if (scrut instanceof NofibPrelude.LzNil.class) {
        return NofibPrelude.LzNil
      } else if (scrut instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$ = scrut.head;
        arg$LzCons$1$ = scrut.tail;
        t = arg$LzCons$1$;
        h = arg$LzCons$0$;
        tmp = runtime.safeCall(f(h));
        tmp1 = NofibPrelude.map_lz(f, t);
        return NofibPrelude.LzCons(tmp, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return NofibPrelude.lazy(lambda)
  } 
  static filter_lz(p, ls) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, t, h, scrut1, arg$LzCons$0$, arg$LzCons$1$, tmp, tmp1;
      scrut = NofibPrelude.force(ls);
      if (scrut instanceof NofibPrelude.LzNil.class) {
        return NofibPrelude.LzNil
      } else if (scrut instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$ = scrut.head;
        arg$LzCons$1$ = scrut.tail;
        t = arg$LzCons$1$;
        h = arg$LzCons$0$;
        scrut1 = runtime.safeCall(p(h));
        if (scrut1 === true) {
          tmp = NofibPrelude.filter_lz(p, t);
          return NofibPrelude.LzCons(h, tmp)
        }
        tmp1 = NofibPrelude.filter_lz(p, t);
        return NofibPrelude.force(tmp1);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return NofibPrelude.lazy(lambda)
  } 
  static nubBy_lz(eq, ls) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, t, h, arg$LzCons$0$, arg$LzCons$1$, lambda1, tmp, tmp1;
      scrut = NofibPrelude.force(ls);
      if (scrut instanceof NofibPrelude.LzNil.class) {
        return NofibPrelude.LzNil
      } else if (scrut instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$ = scrut.head;
        arg$LzCons$1$ = scrut.tail;
        t = arg$LzCons$1$;
        h = arg$LzCons$0$;
        lambda1 = (undefined, function (y) {
          let tmp2;
          tmp2 = runtime.safeCall(eq(h, y));
          return ! tmp2
        });
        tmp = NofibPrelude.filter_lz(lambda1, t);
        tmp1 = NofibPrelude.nubBy_lz(eq, tmp);
        return NofibPrelude.LzCons(h, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return NofibPrelude.lazy(lambda)
  } 
  static nub_lz(ls) {
    let lambda;
    lambda = (undefined, function (x, y) {
      return Predef.equals(x, y)
    });
    return NofibPrelude.nubBy_lz(lambda, ls)
  } 
  static take_lz(n, ls) {
    let scrut, scrut1, t, h, arg$LzCons$0$, arg$LzCons$1$, tmp, tmp1;
    scrut = n > 0;
    if (scrut === true) {
      scrut1 = NofibPrelude.force(ls);
      if (scrut1 instanceof NofibPrelude.LzNil.class) {
        return NofibPrelude.Nil
      } else if (scrut1 instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$ = scrut1.head;
        arg$LzCons$1$ = scrut1.tail;
        t = arg$LzCons$1$;
        h = arg$LzCons$0$;
        tmp = n - 1;
        tmp1 = NofibPrelude.take_lz(tmp, t);
        return NofibPrelude.Cons(h, tmp1)
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  } 
  static take_lz_lz(n, ls) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, scrut1, t, h, arg$LzCons$0$, arg$LzCons$1$, tmp, tmp1;
      scrut = n > 0;
      if (scrut === true) {
        scrut1 = NofibPrelude.force(ls);
        if (scrut1 instanceof NofibPrelude.LzNil.class) {
          return NofibPrelude.LzNil
        } else if (scrut1 instanceof NofibPrelude.LzCons.class) {
          arg$LzCons$0$ = scrut1.head;
          arg$LzCons$1$ = scrut1.tail;
          t = arg$LzCons$1$;
          h = arg$LzCons$0$;
          tmp = n - 1;
          tmp1 = NofibPrelude.take_lz_lz(tmp, t);
          return NofibPrelude.LzCons(h, tmp1)
        }
        return NofibPrelude.LzNil;
      }
      return NofibPrelude.LzNil;
    });
    return NofibPrelude.lazy(lambda)
  } 
  static leave_lz(n, ls) {
    loopLabel: while (true) {
      let scrut, scrut1, t, arg$LzCons$1$, lambda, tmp;
      scrut = n <= 0;
      if (scrut === true) {
        return ls
      }
      scrut1 = NofibPrelude.force(ls);
      if (scrut1 instanceof NofibPrelude.LzNil.class) {
        lambda = (undefined, function () {
          return NofibPrelude.LzNil
        });
        return NofibPrelude.lazy(lambda)
      } else if (scrut1 instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$1$ = scrut1.tail;
        t = arg$LzCons$1$;
        tmp = n - 1;
        n = tmp;
        ls = t;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static splitAt_lz(n, ls) {
    let tmp, tmp1;
    tmp = NofibPrelude.take_lz(n, ls);
    tmp1 = NofibPrelude.leave_lz(n, ls);
    return globalThis.Object.freeze([
      tmp,
      tmp1
    ])
  } 
  static zip_lz_nl(xs, ys) {
    let scrut, x, xs1, ys1, y, arg$LzCons$0$, arg$LzCons$1$, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    scrut = NofibPrelude.force(xs);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      arg$LzCons$0$ = scrut.head;
      arg$LzCons$1$ = scrut.tail;
      xs1 = arg$LzCons$1$;
      x = arg$LzCons$0$;
      if (ys instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ys.head;
        arg$Cons$1$ = ys.tail;
        ys1 = arg$Cons$1$;
        y = arg$Cons$0$;
        tmp = globalThis.Object.freeze([
          x,
          y
        ]);
        tmp1 = NofibPrelude.zip_lz_nl(xs1, ys1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  } 
  static zip_lz_lz(xs, ys) {
    let scrut, x, xs1, ys1, y, scrut1, arg$LzCons$0$, arg$LzCons$1$, arg$LzCons$0$1, arg$LzCons$1$1, lambda, lambda1, lambda2;
    scrut = NofibPrelude.force(xs);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      arg$LzCons$0$ = scrut.head;
      arg$LzCons$1$ = scrut.tail;
      xs1 = arg$LzCons$1$;
      x = arg$LzCons$0$;
      scrut1 = NofibPrelude.force(ys);
      if (scrut1 instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$1 = scrut1.head;
        arg$LzCons$1$1 = scrut1.tail;
        ys1 = arg$LzCons$1$1;
        y = arg$LzCons$0$1;
        lambda = (undefined, function () {
          let tmp, tmp1;
          tmp = globalThis.Object.freeze([
            x,
            y
          ]);
          tmp1 = NofibPrelude.zip_lz_lz(xs1, ys1);
          return NofibPrelude.LzCons(tmp, tmp1)
        });
        return NofibPrelude.lazy(lambda)
      }
      lambda1 = (undefined, function () {
        return NofibPrelude.LzNil
      });
      return NofibPrelude.lazy(lambda1);
    }
    lambda2 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    return NofibPrelude.lazy(lambda2);
  } 
  static zipWith_lz_lz(f, xss, yss) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, x, xs, ys, y, scrut1, arg$LzCons$0$, arg$LzCons$1$, arg$LzCons$0$1, arg$LzCons$1$1, tmp, tmp1;
      scrut = NofibPrelude.force(xss);
      if (scrut instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$ = scrut.head;
        arg$LzCons$1$ = scrut.tail;
        xs = arg$LzCons$1$;
        x = arg$LzCons$0$;
        scrut1 = NofibPrelude.force(yss);
        if (scrut1 instanceof NofibPrelude.LzCons.class) {
          arg$LzCons$0$1 = scrut1.head;
          arg$LzCons$1$1 = scrut1.tail;
          ys = arg$LzCons$1$1;
          y = arg$LzCons$0$1;
          tmp = runtime.safeCall(f(x, y));
          tmp1 = NofibPrelude.zipWith_lz_lz(f, xs, ys);
          return NofibPrelude.LzCons(tmp, tmp1)
        }
        return NofibPrelude.LzNil;
      }
      return NofibPrelude.LzNil;
    });
    return NofibPrelude.lazy(lambda)
  } 
  static zipWith_lz_nl(f, xss, yss) {
    let scrut, x, xs, ys, y, arg$LzCons$0$, arg$LzCons$1$, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    scrut = NofibPrelude.force(xss);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      arg$LzCons$0$ = scrut.head;
      arg$LzCons$1$ = scrut.tail;
      xs = arg$LzCons$1$;
      x = arg$LzCons$0$;
      if (yss instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = yss.head;
        arg$Cons$1$ = yss.tail;
        ys = arg$Cons$1$;
        y = arg$Cons$0$;
        tmp = runtime.safeCall(f(x, y));
        tmp1 = NofibPrelude.zipWith_lz_nl(f, xs, ys);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  } 
  static iterate(f, x) {
    let lambda;
    lambda = (undefined, function () {
      let tmp, tmp1;
      tmp = runtime.safeCall(f(x));
      tmp1 = NofibPrelude.iterate(f, tmp);
      return NofibPrelude.LzCons(x, tmp1)
    });
    return NofibPrelude.lazy(lambda)
  } 
  static append_nl_lz(xs, ys) {
    let t, h, arg$Cons$0$, arg$Cons$1$, lambda;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      t = arg$Cons$1$;
      h = arg$Cons$0$;
      lambda = (undefined, function () {
        let tmp;
        tmp = NofibPrelude.append_nl_lz(t, ys);
        return NofibPrelude.LzCons(h, tmp)
      });
      return NofibPrelude.lazy(lambda)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static append_lz_lz(xs, ys) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, t, h, arg$LzCons$0$, arg$LzCons$1$, tmp;
      scrut = NofibPrelude.force(xs);
      if (scrut instanceof NofibPrelude.LzNil.class) {
        return NofibPrelude.force(ys)
      } else if (scrut instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$ = scrut.head;
        arg$LzCons$1$ = scrut.tail;
        t = arg$LzCons$1$;
        h = arg$LzCons$0$;
        tmp = NofibPrelude.append_lz_lz(t, ys);
        return NofibPrelude.LzCons(h, tmp)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return NofibPrelude.lazy(lambda)
  } 
  static replicate_lz(n, x) {
    let scrut, lambda, lambda1;
    scrut = Predef.equals(n, 0);
    if (scrut === true) {
      lambda = (undefined, function () {
        return NofibPrelude.LzNil
      });
      return NofibPrelude.lazy(lambda)
    }
    lambda1 = (undefined, function () {
      let tmp, tmp1;
      tmp = n - 1;
      tmp1 = NofibPrelude.replicate_lz(tmp, x);
      return NofibPrelude.LzCons(x, tmp1)
    });
    return NofibPrelude.lazy(lambda1);
  } 
  static enumFrom(a) {
    let lambda;
    lambda = (undefined, function () {
      let tmp, tmp1;
      tmp = a + 1;
      tmp1 = NofibPrelude.enumFrom(tmp);
      return NofibPrelude.LzCons(a, tmp1)
    });
    return NofibPrelude.lazy(lambda)
  } 
  static head_lz(ls) {
    let scrut, h, arg$LzCons$0$;
    scrut = NofibPrelude.force(ls);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      arg$LzCons$0$ = scrut.head;
      h = arg$LzCons$0$;
      return h
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static repeat(x) {
    let lambda;
    lambda = (undefined, function () {
      let tmp;
      tmp = NofibPrelude.repeat(x);
      return NofibPrelude.LzCons(x, tmp)
    });
    return NofibPrelude.lazy(lambda)
  } 
  static stringOfFloat(x) {
    return x + ""
  } 
  static stringOfInt(x) {
    return x + ""
  } 
  static stringConcat(x, y) {
    return x + y
  } 
  static stringListConcat(ls) {
    let t, h, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return ""
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      t = arg$Cons$1$;
      h = arg$Cons$0$;
      tmp = NofibPrelude.stringListConcat(t);
      return NofibPrelude.stringConcat(h, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static sqrt(x) {
    return runtime.safeCall(globalThis.Math.sqrt(x))
  } 
  static tan(x) {
    return runtime.safeCall(globalThis.Math.tan(x))
  } 
  static sin(x) {
    return runtime.safeCall(globalThis.Math.sin(x))
  } 
  static cos(x) {
    return runtime.safeCall(globalThis.Math.cos(x))
  } 
  static round(x) {
    return runtime.safeCall(globalThis.Math.round(x))
  } 
  static int_of_char(x) {
    return runtime.safeCall(x.charCodeAt(0))
  } 
  static nofibStringToList(s) {
    let go;
    go = function go(i) {
      let scrut, tmp, tmp1, tmp2;
      scrut = i < s.length;
      if (scrut === true) {
        tmp = runtime.safeCall(s.charAt(i));
        tmp1 = i + 1;
        tmp2 = go(tmp1);
        return NofibPrelude.Cons(tmp, tmp2)
      }
      return NofibPrelude.Nil;
    };
    return go(0)
  } 
  static nofibListToString(ls) {
    let t, h, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return ""
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      t = arg$Cons$1$;
      h = arg$Cons$0$;
      tmp = NofibPrelude.nofibListToString(t);
      return h + tmp
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "NofibPrelude"]; 
});
let NofibPrelude = NofibPrelude1; export default NofibPrelude;
