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
        let scrut, v, arg$Some$0$, tmp;
        scrut = this.cached;
        if (scrut instanceof NofibPrelude.Some.class) {
          arg$Some$0$ = scrut.x;
          return arg$Some$0$
        }
        v = runtime.safeCall(this.init());
        tmp = NofibPrelude.Some(v);
        this.cached = tmp;
        return v;
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
    let arg$Some$0$;
    if (s instanceof NofibPrelude.Some.class) {
      arg$Some$0$ = s.x;
      return arg$Some$0$
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
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2;
    if (ls instanceof NofibPrelude.Nil.class) {
      return ""
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        return runtime.safeCall(Predef.render(arg$Cons$0$))
      }
      tmp = runtime.safeCall(Predef.render(arg$Cons$0$));
      tmp1 = tmp + ",";
      tmp2 = NofibPrelude._internal_cons_to_str(arg$Cons$1$);
      return tmp1 + tmp2;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static ltList(xs, ys, lt, gt) {
    loopLabel: while (true) {
      let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
      if (xs instanceof NofibPrelude.Nil.class) {
        if (ys instanceof NofibPrelude.Nil.class) {
          return false
        }
        return true;
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        if (ys instanceof NofibPrelude.Nil.class) {
          return false
        } else if (ys instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ys.head;
          arg$Cons$1$1 = ys.tail;
          scrut = runtime.safeCall(lt(arg$Cons$0$, arg$Cons$0$1));
          if (scrut === true) {
            return true
          }
          scrut1 = runtime.safeCall(gt(arg$Cons$0$, arg$Cons$0$1));
          if (scrut1 === true) {
            return false
          }
          xs = arg$Cons$1$;
          ys = arg$Cons$1$1;
          continue loopLabel;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static list(...args) {
    let middleElements, element0$, tmp;
    if (runtime.Tuple.isArrayLike(args) && args.length === 0) {
      return NofibPrelude.Nil
    } else if (runtime.Tuple.isArrayLike(args) && args.length >= 1) {
      element0$ = runtime.Tuple.get(args, 0);
      middleElements = runtime.Tuple.slice(args, 1, 0);
      tmp = NofibPrelude.list(...middleElements);
      return NofibPrelude.Cons(element0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static ltTup2(t1, t2, lt1, gt1, lt2) {
    let scrut, scrut1, element1$, element0$, element1$1, element0$1;
    if (runtime.Tuple.isArrayLike(t1) && t1.length === 2) {
      element0$ = runtime.Tuple.get(t1, 0);
      element1$ = runtime.Tuple.get(t1, 1);
      if (runtime.Tuple.isArrayLike(t2) && t2.length === 2) {
        element0$1 = runtime.Tuple.get(t2, 0);
        element1$1 = runtime.Tuple.get(t2, 1);
        scrut = runtime.safeCall(lt1(element0$, element0$1));
        if (scrut === true) {
          return true
        }
        scrut1 = runtime.safeCall(gt1(element0$, element0$1));
        if (scrut1 === true) {
          return false
        }
        return runtime.safeCall(lt2(element1$, element1$1));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static eqTup2(t1, t2) {
    let scrut, scrut1, element1$, element0$, element1$1, element0$1;
    if (runtime.Tuple.isArrayLike(t1) && t1.length === 2) {
      element0$ = runtime.Tuple.get(t1, 0);
      element1$ = runtime.Tuple.get(t1, 1);
      if (runtime.Tuple.isArrayLike(t2) && t2.length === 2) {
        element0$1 = runtime.Tuple.get(t2, 0);
        element1$1 = runtime.Tuple.get(t2, 1);
        scrut = Predef.equals(element0$, element0$1);
        if (scrut === true) {
          scrut1 = Predef.equals(element1$, element1$1);
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
    let element1$;
    if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
      runtime.Tuple.get(x, 0);
      element1$ = runtime.Tuple.get(x, 1);
      return element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static fst(x) {
    let element0$;
    if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
      element0$ = runtime.Tuple.get(x, 0);
      runtime.Tuple.get(x, 1);
      return element0$
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
    return runtime.safeCall(globalThis.Math.pow(a, n))
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
    return runtime.safeCall(globalThis.Math.max(a, b))
  } 
  static min(a, b) {
    return runtime.safeCall(globalThis.Math.min(a, b))
  } 
  static abs(x) {
    return runtime.safeCall(globalThis.Math.abs(x))
  } 
  static head(l) {
    let arg$Cons$0$;
    if (l instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = l.head;
      return arg$Cons$0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static tail(l) {
    let arg$Cons$1$;
    if (l instanceof NofibPrelude.Cons.class) {
      arg$Cons$1$ = l.tail;
      return arg$Cons$1$
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
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (l1 instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = l1.head;
        arg$Cons$1$ = l1.tail;
        tmp = NofibPrelude.Cons(arg$Cons$0$, l$_);
        return r(tmp, arg$Cons$1$)
      }
      return l$_;
    };
    return r(NofibPrelude.Nil, l)
  } 
  static map(f, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = NofibPrelude.map(f, arg$Cons$1$);
      return NofibPrelude.Cons(tmp, tmp1)
    } else if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static listLen(ls) {
    let l;
    l = function l(ls1, a) {
      let arg$Cons$1$, tmp;
      if (ls1 instanceof NofibPrelude.Nil.class) {
        return a
      } else if (ls1 instanceof NofibPrelude.Cons.class) {
        arg$Cons$1$ = ls1.tail;
        tmp = a + 1;
        return l(arg$Cons$1$, tmp)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    return l(ls, 0)
  } 
  static listEq(xs, ys) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
      if (xs instanceof NofibPrelude.Nil.class) {
        if (ys instanceof NofibPrelude.Nil.class) {
          return true
        }
        return false;
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        if (ys instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ys.head;
          arg$Cons$1$1 = ys.tail;
          scrut = Predef.equals(arg$Cons$0$, arg$Cons$0$1);
          if (scrut === true) {
            xs = arg$Cons$1$;
            ys = arg$Cons$1$1;
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
      let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp;
      if (a instanceof NofibPrelude.Nil.class) {
        if (b instanceof NofibPrelude.Nil.class) {
          return true
        }
        return false;
      } else if (a instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = a.head;
        arg$Cons$1$ = a.tail;
        if (b instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = b.head;
          arg$Cons$1$1 = b.tail;
          tmp = runtime.safeCall(f(arg$Cons$0$, arg$Cons$0$1));
          if (tmp === true) {
            a = arg$Cons$1$;
            b = arg$Cons$1$1;
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
      let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
      if (xs instanceof NofibPrelude.Nil.class) {
        if (ys instanceof NofibPrelude.Nil.class) {
          return false
        }
        return true;
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        if (ys instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ys.head;
          arg$Cons$1$1 = ys.tail;
          scrut = Predef.equals(arg$Cons$0$, arg$Cons$0$1);
          if (scrut === true) {
            xs = arg$Cons$1$;
            ys = arg$Cons$1$1;
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
      let scrut, arg$Cons$1$, tmp;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$1$ = ls.tail;
        scrut = n <= 0;
        if (scrut === true) {
          return ls
        }
        tmp = n - 1;
        n = tmp;
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static take(n, ls) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      scrut = n <= 0;
      if (scrut === true) {
        return NofibPrelude.Nil
      }
      tmp = n - 1;
      tmp1 = NofibPrelude.take(tmp, arg$Cons$1$);
      return NofibPrelude.Cons(arg$Cons$0$, tmp1);
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
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      if (ys instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = ys.head;
        arg$Cons$1$1 = ys.tail;
        tmp = globalThis.Object.freeze([
          arg$Cons$0$,
          arg$Cons$0$1
        ]);
        tmp1 = NofibPrelude.zip(arg$Cons$1$, arg$Cons$1$1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  } 
  static inList(x, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = x === arg$Cons$0$;
        if (scrut === true) {
          return true
        }
        ls = arg$Cons$1$;
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
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = NofibPrelude.append(arg$Cons$1$, ys);
      return NofibPrelude.Cons(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static concat(ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = NofibPrelude.concat(arg$Cons$1$);
      return NofibPrelude.append(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static filter(f, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = runtime.safeCall(f(arg$Cons$0$));
        if (scrut === true) {
          tmp = NofibPrelude.filter(f, arg$Cons$1$);
          return NofibPrelude.Cons(arg$Cons$0$, tmp)
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static all(p, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Nil.class) {
        return true
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = runtime.safeCall(p(arg$Cons$0$));
        if (scrut === true) {
          ls = arg$Cons$1$;
          continue loopLabel
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static orList(ls) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Nil.class) {
        return false
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        if (arg$Cons$0$ === true) {
          return true
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static leaveWhile(f, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = runtime.safeCall(f(arg$Cons$0$));
        if (scrut === true) {
          ls = arg$Cons$1$;
          continue loopLabel
        }
        return NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static foldl(f, a, xs) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (xs instanceof NofibPrelude.Nil.class) {
        return a
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        tmp = runtime.safeCall(f(a, arg$Cons$0$));
        a = tmp;
        xs = arg$Cons$1$;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static scanl(f, q, ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(q, NofibPrelude.Nil)
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = runtime.safeCall(f(q, arg$Cons$0$));
      tmp1 = NofibPrelude.scanl(f, tmp, arg$Cons$1$);
      return NofibPrelude.Cons(q, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static scanr(f, q, ls) {
    let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(q, NofibPrelude.Nil)
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      scrut = NofibPrelude.scanr(f, q, arg$Cons$1$);
      if (scrut instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = scrut.head;
        arg$Cons$1$1 = scrut.tail;
        tmp = runtime.safeCall(f(arg$Cons$0$, arg$Cons$0$1));
        tmp1 = NofibPrelude.Cons(arg$Cons$0$1, arg$Cons$1$1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static foldr(f, z, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return z
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = NofibPrelude.foldr(f, z, arg$Cons$1$);
      return runtime.safeCall(f(arg$Cons$0$, tmp))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static foldl1(f, ls) {
    let arg$Cons$0$, arg$Cons$1$;
    if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      return NofibPrelude.foldl(f, arg$Cons$0$, arg$Cons$1$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static foldr1(f, ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        return arg$Cons$0$
      }
      tmp = NofibPrelude.foldr1(f, arg$Cons$1$);
      return runtime.safeCall(f(arg$Cons$0$, tmp));
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
    let h, arg$Cons$0$, arg$Cons$1$, lambda, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      h = arg$Cons$0$;
      lambda = (undefined, function (y) {
        let tmp2;
        tmp2 = runtime.safeCall(eq(h, y));
        return ! tmp2
      });
      tmp = NofibPrelude.filter(lambda, arg$Cons$1$);
      tmp1 = NofibPrelude.nubBy(eq, tmp);
      return NofibPrelude.Cons(h, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static zipWith(f, xss, yss) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
    if (xss instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xss.head;
      arg$Cons$1$ = xss.tail;
      if (yss instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = yss.head;
        arg$Cons$1$1 = yss.tail;
        tmp = runtime.safeCall(f(arg$Cons$0$, arg$Cons$0$1));
        tmp1 = NofibPrelude.zipWith(f, arg$Cons$1$, arg$Cons$1$1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  } 
  static deleteBy(eq, x, ys) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ys instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ys instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ys.head;
      arg$Cons$1$ = ys.tail;
      scrut = runtime.safeCall(eq(x, arg$Cons$0$));
      if (scrut === true) {
        return arg$Cons$1$
      }
      tmp = NofibPrelude.deleteBy(eq, x, arg$Cons$1$);
      return NofibPrelude.Cons(arg$Cons$0$, tmp);
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
      let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
      if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = Predef.equals(i, 0);
        if (scrut === true) {
          return arg$Cons$0$
        }
        tmp = i - 1;
        i = tmp;
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static sum(xs) {
    let go;
    go = function go(xs1, a) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (xs1 instanceof NofibPrelude.Nil.class) {
        return a
      } else if (xs1 instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs1.head;
        arg$Cons$1$ = xs1.tail;
        tmp = a + arg$Cons$0$;
        return go(arg$Cons$1$, tmp)
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
      let arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3;
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
          tmp2 = NofibPrelude.Cons(element0$, a);
          tmp3 = NofibPrelude.Cons(element1$, b);
          return f(arg$Cons$1$, tmp2, tmp3)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    return f(l, NofibPrelude.Nil, NofibPrelude.Nil)
  } 
  static zip3(xs, ys, zs) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      if (ys instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = ys.head;
        arg$Cons$1$1 = ys.tail;
        if (zs instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$2 = zs.head;
          arg$Cons$1$2 = zs.tail;
          tmp = globalThis.Object.freeze([
            arg$Cons$0$,
            arg$Cons$0$1,
            arg$Cons$0$2
          ]);
          tmp1 = NofibPrelude.zip3(arg$Cons$1$, arg$Cons$1$1, arg$Cons$1$2);
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
      let lscomp, combine, scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, element1$, element0$, tmp;
      lscomp = function lscomp(ls) {
        let arg$Cons$0$2, arg$Cons$1$2, arg$Cons$0$3, arg$Cons$1$3, tmp1, tmp2;
        if (ls instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (ls instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$2 = ls.head;
          arg$Cons$1$2 = ls.tail;
          if (arg$Cons$0$2 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$3 = arg$Cons$0$2.head;
            arg$Cons$1$3 = arg$Cons$0$2.tail;
            tmp1 = globalThis.Object.freeze([
              arg$Cons$0$3,
              arg$Cons$1$3
            ]);
            tmp2 = lscomp(arg$Cons$1$2);
            return NofibPrelude.Cons(tmp1, tmp2)
          }
          return lscomp(arg$Cons$1$2);
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
          xss = arg$Cons$1$;
          continue loopLabel
        } else if (arg$Cons$0$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = arg$Cons$0$.head;
          arg$Cons$1$1 = arg$Cons$0$.tail;
          tmp = lscomp(arg$Cons$1$);
          scrut = NofibPrelude.unzip(tmp);
          if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
            element0$ = runtime.Tuple.get(scrut, 0);
            element1$ = runtime.Tuple.get(scrut, 1);
            return combine(arg$Cons$0$1, element0$, arg$Cons$1$1, element1$)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static break_(p, ls) {
    let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return globalThis.Object.freeze([
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ])
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      scrut = runtime.safeCall(p(arg$Cons$0$));
      if (scrut === true) {
        tmp = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
        return globalThis.Object.freeze([
          NofibPrelude.Nil,
          tmp
        ])
      }
      scrut1 = NofibPrelude.break_(p, arg$Cons$1$);
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
  static flatMap(f, ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = NofibPrelude.flatMap(f, arg$Cons$1$);
      return NofibPrelude.append(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static map_lz(f, ls) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, arg$LzCons$0$, arg$LzCons$1$, tmp, tmp1;
      scrut = NofibPrelude.force(ls);
      if (scrut instanceof NofibPrelude.LzNil.class) {
        return NofibPrelude.LzNil
      } else if (scrut instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$ = scrut.head;
        arg$LzCons$1$ = scrut.tail;
        tmp = runtime.safeCall(f(arg$LzCons$0$));
        tmp1 = NofibPrelude.map_lz(f, arg$LzCons$1$);
        return NofibPrelude.LzCons(tmp, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return NofibPrelude.lazy(lambda)
  } 
  static filter_lz(p, ls) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, scrut1, arg$LzCons$0$, arg$LzCons$1$, tmp, tmp1;
      scrut = NofibPrelude.force(ls);
      if (scrut instanceof NofibPrelude.LzNil.class) {
        return NofibPrelude.LzNil
      } else if (scrut instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$ = scrut.head;
        arg$LzCons$1$ = scrut.tail;
        scrut1 = runtime.safeCall(p(arg$LzCons$0$));
        if (scrut1 === true) {
          tmp = NofibPrelude.filter_lz(p, arg$LzCons$1$);
          return NofibPrelude.LzCons(arg$LzCons$0$, tmp)
        }
        tmp1 = NofibPrelude.filter_lz(p, arg$LzCons$1$);
        return NofibPrelude.force(tmp1);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return NofibPrelude.lazy(lambda)
  } 
  static nubBy_lz(eq, ls) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, h, arg$LzCons$0$, arg$LzCons$1$, lambda1, tmp, tmp1;
      scrut = NofibPrelude.force(ls);
      if (scrut instanceof NofibPrelude.LzNil.class) {
        return NofibPrelude.LzNil
      } else if (scrut instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$ = scrut.head;
        arg$LzCons$1$ = scrut.tail;
        h = arg$LzCons$0$;
        lambda1 = (undefined, function (y) {
          let tmp2;
          tmp2 = runtime.safeCall(eq(h, y));
          return ! tmp2
        });
        tmp = NofibPrelude.filter_lz(lambda1, arg$LzCons$1$);
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
    let scrut, scrut1, arg$LzCons$0$, arg$LzCons$1$, tmp, tmp1;
    scrut = n > 0;
    if (scrut === true) {
      scrut1 = NofibPrelude.force(ls);
      if (scrut1 instanceof NofibPrelude.LzNil.class) {
        return NofibPrelude.Nil
      } else if (scrut1 instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$ = scrut1.head;
        arg$LzCons$1$ = scrut1.tail;
        tmp = n - 1;
        tmp1 = NofibPrelude.take_lz(tmp, arg$LzCons$1$);
        return NofibPrelude.Cons(arg$LzCons$0$, tmp1)
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  } 
  static take_lz_lz(n, ls) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, scrut1, arg$LzCons$0$, arg$LzCons$1$, tmp, tmp1;
      scrut = n > 0;
      if (scrut === true) {
        scrut1 = NofibPrelude.force(ls);
        if (scrut1 instanceof NofibPrelude.LzNil.class) {
          return NofibPrelude.LzNil
        } else if (scrut1 instanceof NofibPrelude.LzCons.class) {
          arg$LzCons$0$ = scrut1.head;
          arg$LzCons$1$ = scrut1.tail;
          tmp = n - 1;
          tmp1 = NofibPrelude.take_lz_lz(tmp, arg$LzCons$1$);
          return NofibPrelude.LzCons(arg$LzCons$0$, tmp1)
        }
        return NofibPrelude.LzNil;
      }
      return NofibPrelude.LzNil;
    });
    return NofibPrelude.lazy(lambda)
  } 
  static leave_lz(n, ls) {
    loopLabel: while (true) {
      let scrut, scrut1, arg$LzCons$1$, lambda, tmp;
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
        tmp = n - 1;
        n = tmp;
        ls = arg$LzCons$1$;
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
    let scrut, arg$LzCons$0$, arg$LzCons$1$, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    scrut = NofibPrelude.force(xs);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      arg$LzCons$0$ = scrut.head;
      arg$LzCons$1$ = scrut.tail;
      if (ys instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ys.head;
        arg$Cons$1$ = ys.tail;
        tmp = globalThis.Object.freeze([
          arg$LzCons$0$,
          arg$Cons$0$
        ]);
        tmp1 = NofibPrelude.zip_lz_nl(arg$LzCons$1$, arg$Cons$1$);
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
      let scrut, scrut1, arg$LzCons$0$, arg$LzCons$1$, arg$LzCons$0$1, arg$LzCons$1$1, tmp, tmp1;
      scrut = NofibPrelude.force(xss);
      if (scrut instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$ = scrut.head;
        arg$LzCons$1$ = scrut.tail;
        scrut1 = NofibPrelude.force(yss);
        if (scrut1 instanceof NofibPrelude.LzCons.class) {
          arg$LzCons$0$1 = scrut1.head;
          arg$LzCons$1$1 = scrut1.tail;
          tmp = runtime.safeCall(f(arg$LzCons$0$, arg$LzCons$0$1));
          tmp1 = NofibPrelude.zipWith_lz_lz(f, arg$LzCons$1$, arg$LzCons$1$1);
          return NofibPrelude.LzCons(tmp, tmp1)
        }
        return NofibPrelude.LzNil;
      }
      return NofibPrelude.LzNil;
    });
    return NofibPrelude.lazy(lambda)
  } 
  static zipWith_lz_nl(f, xss, yss) {
    let scrut, arg$LzCons$0$, arg$LzCons$1$, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    scrut = NofibPrelude.force(xss);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      arg$LzCons$0$ = scrut.head;
      arg$LzCons$1$ = scrut.tail;
      if (yss instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = yss.head;
        arg$Cons$1$ = yss.tail;
        tmp = runtime.safeCall(f(arg$LzCons$0$, arg$Cons$0$));
        tmp1 = NofibPrelude.zipWith_lz_nl(f, arg$LzCons$1$, arg$Cons$1$);
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
      let scrut, arg$LzCons$0$, arg$LzCons$1$, tmp;
      scrut = NofibPrelude.force(xs);
      if (scrut instanceof NofibPrelude.LzNil.class) {
        return NofibPrelude.force(ys)
      } else if (scrut instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$ = scrut.head;
        arg$LzCons$1$ = scrut.tail;
        tmp = NofibPrelude.append_lz_lz(arg$LzCons$1$, ys);
        return NofibPrelude.LzCons(arg$LzCons$0$, tmp)
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
    let scrut, arg$LzCons$0$;
    scrut = NofibPrelude.force(ls);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      arg$LzCons$0$ = scrut.head;
      return arg$LzCons$0$
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
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return ""
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = NofibPrelude.stringListConcat(arg$Cons$1$);
      return NofibPrelude.stringConcat(arg$Cons$0$, tmp)
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
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return ""
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = NofibPrelude.nofibListToString(arg$Cons$1$);
      return arg$Cons$0$ + tmp
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "NofibPrelude"]; 
});
let NofibPrelude = NofibPrelude1; export default NofibPrelude;
