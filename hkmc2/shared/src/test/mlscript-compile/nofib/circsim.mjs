const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let circsim1;
(class circsim {
  static {
    circsim1 = this
  }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    (class BinTree {
      static {
        circsim.BinTree = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "BinTree"]; 
    });
    this.Cell = function Cell(value) {
      return globalThis.Object.freeze(new Cell.class(value));
    };
    (class Cell extends circsim.BinTree {
      static {
        circsim.Cell.class = this
      }
      constructor(value) {
        super();
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Cell", ["value"]]; 
    });
    this.Node = function Node(value, left, right) {
      return globalThis.Object.freeze(new Node.class(value, left, right));
    };
    (class Node extends circsim.BinTree {
      static {
        circsim.Node.class = this
      }
      constructor(value, left, right) {
        super();
        this.value = value;
        this.left = left;
        this.right = right;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Node", ["value", "left", "right"]]; 
    });
    (class Componenet {
      static {
        circsim.Componenet = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Componenet"]; 
    });
    (class None_ extends circsim.Componenet {
      static {
        new this
      }
      constructor() {
        super();
        circsim.None_ = this;
        Object.defineProperty(this, "class", {
          value: None_
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "None_"]; 
    });
    (class Inp extends circsim.Componenet {
      static {
        new this
      }
      constructor() {
        super();
        circsim.Inp = this;
        Object.defineProperty(this, "class", {
          value: Inp
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Inp"]; 
    });
    (class Outp extends circsim.Componenet {
      static {
        new this
      }
      constructor() {
        super();
        circsim.Outp = this;
        Object.defineProperty(this, "class", {
          value: Outp
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Outp"]; 
    });
    (class Dff extends circsim.Componenet {
      static {
        new this
      }
      constructor() {
        super();
        circsim.Dff = this;
        Object.defineProperty(this, "class", {
          value: Dff
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Dff"]; 
    });
    (class Inv extends circsim.Componenet {
      static {
        new this
      }
      constructor() {
        super();
        circsim.Inv = this;
        Object.defineProperty(this, "class", {
          value: Inv
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Inv"]; 
    });
    (class And2 extends circsim.Componenet {
      static {
        new this
      }
      constructor() {
        super();
        circsim.And2 = this;
        Object.defineProperty(this, "class", {
          value: And2
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "And2"]; 
    });
    (class Or2 extends circsim.Componenet {
      static {
        new this
      }
      constructor() {
        super();
        circsim.Or2 = this;
        Object.defineProperty(this, "class", {
          value: Or2
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Or2"]; 
    });
    (class Xor extends circsim.Componenet {
      static {
        new this
      }
      constructor() {
        super();
        circsim.Xor = this;
        Object.defineProperty(this, "class", {
          value: Xor
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Xor"]; 
    });
    (class Unit {
      static {
        new this
      }
      constructor() {
        circsim.Unit = this;
        Object.defineProperty(this, "class", {
          value: Unit
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Unit"]; 
    });
    this.PS = function PS(pid, compType, pathDepth, inports, outports) {
      return globalThis.Object.freeze(new PS.class(pid, compType, pathDepth, inports, outports));
    };
    (class PS {
      static {
        circsim.PS.class = this
      }
      constructor(pid, compType, pathDepth, inports, outports) {
        this.pid = pid;
        this.compType = compType;
        this.pathDepth = pathDepth;
        this.inports = inports;
        this.outports = outports;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "PS", ["pid", "compType", "pathDepth", "inports", "outports"]]; 
    });
    (class Boolean {
      static {
        circsim.Boolean = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Boolean"]; 
    });
    (class F extends circsim.Boolean {
      static {
        new this
      }
      constructor() {
        super();
        circsim.F = this;
        Object.defineProperty(this, "class", {
          value: F
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "F"]; 
    });
    (class T extends circsim.Boolean {
      static {
        new this
      }
      constructor() {
        super();
        circsim.T = this;
        Object.defineProperty(this, "class", {
          value: T
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "T"]; 
    });
    tmp = - 1;
    tmp1 = - 1;
    tmp2 = circsim.PS(tmp, circsim.None_, tmp1, NofibPrelude.Nil, NofibPrelude.Nil);
    this.emptyState = tmp2;
    tmp3 = - 1;
    tmp4 = - 1;
    tmp5 = globalThis.Object.freeze([
      tmp3,
      tmp4,
      circsim.F,
      false,
      0,
      false,
      0,
      1
    ]);
    this.emptyPacket = tmp5;
  }
  static pid(p) {
    return p.pid
  } 
  static compType(p) {
    return p.compType
  } 
  static pathDepth(p) {
    return p.pathDepth
  } 
  static inports(p) {
    return p.inports
  } 
  static outports(p) {
    return p.outports
  } 
  static updateOutports(p, noutports) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = circsim.pid(p);
    tmp1 = circsim.compType(p);
    tmp2 = circsim.pathDepth(p);
    tmp3 = circsim.inports(p);
    return circsim.PS(tmp, tmp1, tmp2, tmp3, noutports)
  } 
  static updateInports(p, ninports) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = circsim.pid(p);
    tmp1 = circsim.compType(p);
    tmp2 = circsim.pathDepth(p);
    tmp3 = circsim.outports(p);
    return circsim.PS(tmp, tmp1, tmp2, ninports, tmp3)
  } 
  static put(xs) {
    let scrut, fstHalf, sndHalf, element1$, element0$, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    split_default$: {
      if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
          return circsim.Cell(arg$Cons$0$)
        }
        tmp = NofibPrelude.listLen(xs);
        tmp1 = NofibPrelude.intDiv(tmp, 2);
        scrut = NofibPrelude.splitAt(tmp1, xs);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          element0$ = runtime.Tuple.get(scrut, 0);
          element1$ = runtime.Tuple.get(scrut, 1);
          sndHalf = element1$;
          fstHalf = element0$;
        } else {
          break split_default$
        }
      } else {
        tmp2 = NofibPrelude.listLen(xs);
        tmp3 = NofibPrelude.intDiv(tmp2, 2);
        scrut = NofibPrelude.splitAt(tmp3, xs);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          element0$ = runtime.Tuple.get(scrut, 0);
          element1$ = runtime.Tuple.get(scrut, 1);
          sndHalf = element1$;
          fstHalf = element0$;
        } else {
          break split_default$
        }
      }
      tmp4 = circsim.put(fstHalf);
      tmp5 = circsim.put(sndHalf);
      return circsim.Node(circsim.Unit, tmp4, tmp5);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  } 
  static get(t) {
    let arg$Node$1$, arg$Node$2$, arg$Cell$0$, tmp, tmp1;
    if (t instanceof circsim.Cell.class) {
      arg$Cell$0$ = t.value;
      return NofibPrelude.Cons(arg$Cell$0$, NofibPrelude.Nil)
    } else if (t instanceof circsim.Node.class) {
      arg$Node$1$ = t.left;
      arg$Node$2$ = t.right;
      tmp = circsim.get(arg$Node$1$);
      tmp1 = circsim.get(arg$Node$2$);
      return NofibPrelude.append(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static upsweep(f, t) {
    let scrut, scrut1, arg$Node$1$, arg$Node$2$, element1$, element0$, element1$1, element0$1, arg$Cell$0$, tmp, tmp1, tmp2, tmp3;
    if (t instanceof circsim.Cell.class) {
      arg$Cell$0$ = t.value;
      tmp = circsim.Cell(arg$Cell$0$);
      return globalThis.Object.freeze([
        arg$Cell$0$,
        tmp
      ])
    } else if (t instanceof circsim.Node.class) {
      arg$Node$1$ = t.left;
      arg$Node$2$ = t.right;
      scrut1 = circsim.upsweep(f, arg$Node$1$);
      if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
        element0$ = runtime.Tuple.get(scrut1, 0);
        element1$ = runtime.Tuple.get(scrut1, 1);
        scrut = circsim.upsweep(f, arg$Node$2$);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          element0$1 = runtime.Tuple.get(scrut, 0);
          element1$1 = runtime.Tuple.get(scrut, 1);
          tmp1 = runtime.safeCall(f(element0$, element0$1));
          tmp2 = globalThis.Object.freeze([
            element0$,
            element0$1
          ]);
          tmp3 = circsim.Node(tmp2, element1$, element1$1);
          return globalThis.Object.freeze([
            tmp1,
            tmp3
          ])
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static downsweep(g, d, t) {
    let scrut, arg$Node$0$, arg$Node$1$, arg$Node$2$, element1$, element0$, element1$1, element0$1, tmp, tmp1;
    if (t instanceof circsim.Cell.class) {
      return circsim.Cell(d)
    } else if (t instanceof circsim.Node.class) {
      arg$Node$0$ = t.value;
      arg$Node$1$ = t.left;
      arg$Node$2$ = t.right;
      if (runtime.Tuple.isArrayLike(arg$Node$0$) && arg$Node$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Node$0$, 0);
        element1$ = runtime.Tuple.get(arg$Node$0$, 1);
        scrut = runtime.safeCall(g(element0$, element1$, d));
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          element0$1 = runtime.Tuple.get(scrut, 0);
          element1$1 = runtime.Tuple.get(scrut, 1);
          tmp = circsim.downsweep(g, element0$1, arg$Node$1$);
          tmp1 = circsim.downsweep(g, element1$1, arg$Node$2$);
          return circsim.Node(circsim.Unit, tmp, tmp1)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static sweep_ud(up, down, u, t) {
    let scrut, element1$, element0$, tmp;
    scrut = circsim.upsweep(up, t);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      tmp = circsim.downsweep(down, u, element1$);
      return globalThis.Object.freeze([
        element0$,
        tmp
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static scanL(f, u, xs) {
    let down1, scrut, element1$, element0$, tmp, tmp1;
    down1 = function down1(l, r, x) {
      let tmp2;
      tmp2 = runtime.safeCall(f(x, l));
      return globalThis.Object.freeze([
        x,
        tmp2
      ])
    };
    tmp = circsim.put(xs);
    scrut = circsim.sweep_ud(f, down1, u, tmp);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      tmp1 = circsim.get(element1$);
      return globalThis.Object.freeze([
        element0$,
        tmp1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static scanR(f, u, xs) {
    let down2, scrut, element1$, element0$, tmp, tmp1;
    down2 = function down2(l, r, x) {
      let tmp2;
      tmp2 = runtime.safeCall(f(r, x));
      return globalThis.Object.freeze([
        tmp2,
        x
      ])
    };
    tmp = circsim.put(xs);
    scrut = circsim.sweep_ud(f, down2, u, tmp);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      tmp1 = circsim.get(element1$);
      return globalThis.Object.freeze([
        element0$,
        tmp1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static scanlr(f, g, lu, ru, xs) {
    let xs_, scrut, ans, lambda, element1$, element0$, element1$1, element0$1, lambda1, lambda2, tmp, tmp1, tmp2, tmp3, tmp4;
    lambda = (undefined, function (x) {
      return globalThis.Object.freeze([
        x,
        x
      ])
    });
    xs_ = NofibPrelude.map(lambda, xs);
    lambda1 = (undefined, function (a, b) {
      let f1, g1, lxly, rxry, inlinedVal, element1$2, element0$2, element1$3, element0$3, tmp5, tmp6;
      f1 = f;
      g1 = g;
      lxly = a;
      rxry = b;
      if (runtime.Tuple.isArrayLike(lxly) && lxly.length === 2) {
        element0$2 = runtime.Tuple.get(a, 0);
        element1$2 = runtime.Tuple.get(a, 1);
        if (runtime.Tuple.isArrayLike(rxry) && rxry.length === 2) {
          element0$3 = runtime.Tuple.get(b, 0);
          element1$3 = runtime.Tuple.get(b, 1);
          tmp5 = runtime.safeCall(f1(element0$2, element0$3));
          tmp6 = runtime.safeCall(g1(element1$2, element1$3));
          inlinedVal = globalThis.Object.freeze([
            tmp5,
            tmp6
          ]);
          return inlinedVal
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    lambda2 = (undefined, function (a, b, c) {
      let f1, g1, lxly, rxry, ab, inlinedVal, element0$2, element1$2, element1$3, element0$3, tmp5, tmp6, tmp7, tmp8;
      f1 = f;
      g1 = g;
      lxly = a;
      rxry = b;
      ab = c;
      if (runtime.Tuple.isArrayLike(lxly) && lxly.length === 2) {
        element0$2 = runtime.Tuple.get(a, 0);
        runtime.Tuple.get(a, 1);
        if (runtime.Tuple.isArrayLike(rxry) && rxry.length === 2) {
          runtime.Tuple.get(b, 0);
          element1$2 = runtime.Tuple.get(b, 1);
          if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
            element0$3 = runtime.Tuple.get(c, 0);
            element1$3 = runtime.Tuple.get(c, 1);
            tmp5 = runtime.safeCall(g1(element1$2, element1$3));
            tmp6 = globalThis.Object.freeze([
              element0$3,
              tmp5
            ]);
            tmp7 = runtime.safeCall(f1(element0$3, element0$2));
            tmp8 = globalThis.Object.freeze([
              tmp7,
              element1$3
            ]);
            inlinedVal = globalThis.Object.freeze([
              tmp6,
              tmp8
            ]);
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          return inlinedVal
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    tmp = globalThis.Object.freeze([
      lu,
      ru
    ]);
    tmp1 = circsim.put(xs_);
    scrut = circsim.sweep_ud(lambda1, lambda2, tmp, tmp1);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      if (runtime.Tuple.isArrayLike(element0$) && element0$.length === 2) {
        element0$1 = runtime.Tuple.get(element0$, 0);
        element1$1 = runtime.Tuple.get(element0$, 1);
        tmp2 = runtime.safeCall(g(element1$1, ru));
        tmp3 = runtime.safeCall(f(lu, element0$1));
        ans = globalThis.Object.freeze([
          tmp2,
          tmp3
        ]);
        tmp4 = circsim.get(element1$);
        return globalThis.Object.freeze([
          ans,
          tmp4
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static nearest_power_of_two(x) {
    let lambda, lambda1;
    lambda = (undefined, function (a) {
      return a >= x
    });
    lambda1 = (undefined, function (a) {
      return a * 2
    });
    return NofibPrelude.until(lambda, lambda1, 1)
  } 
  static pad_circuit(size_ins_outs_states) {
    let p2, states_, element3$, element2$, element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(size_ins_outs_states) && size_ins_outs_states.length === 4) {
      element0$ = runtime.Tuple.get(size_ins_outs_states, 0);
      element1$ = runtime.Tuple.get(size_ins_outs_states, 1);
      element2$ = runtime.Tuple.get(size_ins_outs_states, 2);
      element3$ = runtime.Tuple.get(size_ins_outs_states, 3);
      p2 = circsim.nearest_power_of_two(element0$);
      tmp = NofibPrelude.replicate_lz(p2, circsim.emptyState);
      states_ = NofibPrelude.append_nl_lz(element3$, tmp);
      tmp1 = NofibPrelude.take_lz(p2, states_);
      return globalThis.Object.freeze([
        p2,
        element1$,
        element2$,
        tmp1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static inv(x) {
    let scrut;
    scrut = x === circsim.T;
    if (scrut === true) {
      return circsim.F
    }
    return circsim.T;
  } 
  static and2(x, y) {
    let scrut, tmp, tmp1;
    tmp = x === circsim.T;
    if (tmp === true) {
      tmp1 = y === circsim.T;
    } else {
      tmp1 = false;
    }
    scrut = tmp1;
    if (scrut === true) {
      return circsim.T
    }
    return circsim.F;
  } 
  static or2(x, y) {
    let scrut, tmp, tmp1;
    tmp = x === circsim.T;
    if (tmp === false) {
      tmp1 = y === circsim.T;
    } else {
      tmp1 = true;
    }
    scrut = tmp1;
    if (scrut === true) {
      return circsim.T
    }
    return circsim.F;
  } 
  static xor(x, y) {
    let scrut;
    scrut = x === y;
    if (scrut === true) {
      return circsim.T
    }
    return circsim.F;
  } 
  static send_right(a, b) {
    let qra, scrut, element7$, element6$, element5$, element4$, element3$, element2$, element1$, element0$, element7$1, element6$1, element5$1, element4$1, element3$1, element2$1, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a) && a.length === 8) {
      element0$ = runtime.Tuple.get(a, 0);
      element1$ = runtime.Tuple.get(a, 1);
      element2$ = runtime.Tuple.get(a, 2);
      element3$ = runtime.Tuple.get(a, 3);
      element4$ = runtime.Tuple.get(a, 4);
      element5$ = runtime.Tuple.get(a, 5);
      element6$ = runtime.Tuple.get(a, 6);
      element7$ = runtime.Tuple.get(a, 7);
      qra = element5$;
      if (runtime.Tuple.isArrayLike(b) && b.length === 8) {
        element0$1 = runtime.Tuple.get(b, 0);
        element1$1 = runtime.Tuple.get(b, 1);
        element2$1 = runtime.Tuple.get(b, 2);
        element3$1 = runtime.Tuple.get(b, 3);
        element4$1 = runtime.Tuple.get(b, 4);
        element5$1 = runtime.Tuple.get(b, 5);
        element6$1 = runtime.Tuple.get(b, 6);
        element7$1 = runtime.Tuple.get(b, 7);
        if (qra === true) {
          scrut = element6$ > element7$1;
          if (scrut === true) {
            tmp = element6$ - element7$1;
            tmp1 = element7$ + element7$1;
            return globalThis.Object.freeze([
              element0$,
              element1$,
              element2$,
              element3$,
              element4$,
              element5$,
              tmp,
              tmp1
            ])
          }
        }
        tmp2 = element7$ + element7$1;
        return globalThis.Object.freeze([
          element0$1,
          element1$1,
          element2$1,
          element3$1,
          element4$1,
          element5$1,
          element6$1,
          tmp2
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static send_left(a, b) {
    let qlb, scrut, element7$, element6$, element5$, element4$, element3$, element2$, element1$, element0$, element7$1, element6$1, element5$1, element4$1, element3$1, element2$1, element1$1, element0$1, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(a) && a.length === 8) {
      element0$ = runtime.Tuple.get(a, 0);
      element1$ = runtime.Tuple.get(a, 1);
      element2$ = runtime.Tuple.get(a, 2);
      element3$ = runtime.Tuple.get(a, 3);
      element4$ = runtime.Tuple.get(a, 4);
      element5$ = runtime.Tuple.get(a, 5);
      element6$ = runtime.Tuple.get(a, 6);
      element7$ = runtime.Tuple.get(a, 7);
      if (runtime.Tuple.isArrayLike(b) && b.length === 8) {
        element0$1 = runtime.Tuple.get(b, 0);
        element1$1 = runtime.Tuple.get(b, 1);
        element2$1 = runtime.Tuple.get(b, 2);
        element3$1 = runtime.Tuple.get(b, 3);
        element4$1 = runtime.Tuple.get(b, 4);
        element5$1 = runtime.Tuple.get(b, 5);
        element6$1 = runtime.Tuple.get(b, 6);
        element7$1 = runtime.Tuple.get(b, 7);
        qlb = element3$1;
        if (qlb === true) {
          tmp = element4$1 > element7$;
        } else {
          tmp = false;
        }
        scrut = tmp;
        if (scrut === true) {
          tmp1 = element4$1 - element7$;
          tmp2 = element7$ + element7$1;
          return globalThis.Object.freeze([
            element0$1,
            element1$1,
            element2$1,
            element3$1,
            tmp1,
            element5$1,
            element6$1,
            tmp2
          ])
        }
        tmp3 = element7$ + element7$1;
        return globalThis.Object.freeze([
          element0$,
          element1$,
          element2$,
          element3$,
          element4$,
          element5$,
          element6$,
          tmp3
        ]);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static send(xs) {
    return circsim.scanlr(circsim.send_right, circsim.send_left, circsim.emptyPacket, circsim.emptyPacket, xs)
  } 
  static update_outports(state, value) {
    let lscomp, tmp, tmp1;
    lscomp = function lscomp(ls) {
      let h, arg$Cons$0$, arg$Cons$1$, element5$, element4$, element3$, element2$, element0$, tmp2, tmp3;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        h = arg$Cons$0$;
        if (runtime.Tuple.isArrayLike(h) && h.length === 6) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          runtime.Tuple.get(arg$Cons$0$, 1);
          element2$ = runtime.Tuple.get(arg$Cons$0$, 2);
          element3$ = runtime.Tuple.get(arg$Cons$0$, 3);
          element4$ = runtime.Tuple.get(arg$Cons$0$, 4);
          element5$ = runtime.Tuple.get(arg$Cons$0$, 5);
          tmp2 = globalThis.Object.freeze([
            element0$,
            value,
            element2$,
            element3$,
            element4$,
            element5$
          ]);
          tmp3 = lscomp(arg$Cons$1$);
          return NofibPrelude.Cons(tmp2, tmp3)
        }
        return lscomp(arg$Cons$1$);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = circsim.outports(state);
    tmp1 = lscomp(tmp);
    return circsim.updateOutports(state, tmp1)
  } 
  static critical_path_depth(siot) {
    let element3$, tmp;
    if (runtime.Tuple.isArrayLike(siot) && siot.length === 4) {
      runtime.Tuple.get(siot, 0);
      runtime.Tuple.get(siot, 1);
      runtime.Tuple.get(siot, 2);
      element3$ = runtime.Tuple.get(siot, 3);
      tmp = NofibPrelude.map(circsim.pathDepth, element3$);
      return NofibPrelude.maximum(tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static collect_outputs(tp4) {
    let states, element3$, element2$, lambda;
    if (runtime.Tuple.isArrayLike(tp4) && tp4.length === 4) {
      runtime.Tuple.get(tp4, 0);
      runtime.Tuple.get(tp4, 1);
      element2$ = runtime.Tuple.get(tp4, 2);
      element3$ = runtime.Tuple.get(tp4, 3);
      states = element3$;
      lambda = (undefined, function (p) {
        let states1, label_p, lscomp, p1, element1$, tmp, tmp1;
        states1 = states;
        label_p = p;
        if (runtime.Tuple.isArrayLike(label_p) && label_p.length === 2) {
          let tp3, element2$1;
          runtime.Tuple.get(p, 0);
          element1$ = runtime.Tuple.get(p, 1);
          p1 = element1$;
          lscomp = function lscomp(ls) {
            let scrut, arg$Cons$0$, arg$Cons$1$, tmp2, tmp3, tmp4, tmp5;
            if (ls instanceof NofibPrelude.Nil.class) {
              return NofibPrelude.Nil
            } else if (ls instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = ls.head;
              arg$Cons$1$ = ls.tail;
              tmp2 = circsim.pid(arg$Cons$0$);
              scrut = p1 == tmp2;
              if (scrut === true) {
                tmp3 = circsim.inports(arg$Cons$0$);
                tmp4 = NofibPrelude.head(tmp3);
                tmp5 = lscomp(arg$Cons$1$);
                return NofibPrelude.Cons(tmp4, tmp5)
              }
              return lscomp(arg$Cons$1$);
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          };
          tmp = lscomp(states1);
          tmp1 = NofibPrelude.head(tmp);
          tp3 = tmp1;
          if (runtime.Tuple.isArrayLike(tp3) && tp3.length === 3) {
            runtime.Tuple.get(tmp1, 0);
            runtime.Tuple.get(tmp1, 1);
            element2$1 = runtime.Tuple.get(tmp1, 2);
            return element2$1
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      });
      return NofibPrelude.map(lambda, element2$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static store_inputs(label_inputs, state) {
    let lscomp, pid_, arg$PS$0$, arg$PS$1$, tmp;
    if (state instanceof circsim.PS.class) {
      arg$PS$0$ = state.pid;
      arg$PS$1$ = state.compType;
      if (arg$PS$1$ instanceof circsim.Inp.class) {
        pid_ = arg$PS$0$;
        lscomp = function lscomp(ls) {
          let h, scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, element1$1, tmp1, tmp2;
          if (ls instanceof NofibPrelude.Nil.class) {
            return NofibPrelude.Nil
          } else if (ls instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = ls.head;
            arg$Cons$1$ = ls.tail;
            h = arg$Cons$0$;
            if (runtime.Tuple.isArrayLike(h) && h.length === 2) {
              element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
              element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
              if (runtime.Tuple.isArrayLike(element0$) && element0$.length === 2) {
                runtime.Tuple.get(element0$, 0);
                element1$1 = runtime.Tuple.get(element0$, 1);
                scrut = pid_ == element1$1;
                if (scrut === true) {
                  tmp1 = circsim.update_outports(state, element1$);
                  tmp2 = lscomp(arg$Cons$1$);
                  return NofibPrelude.Cons(tmp1, tmp2)
                }
                return lscomp(arg$Cons$1$);
              }
              return lscomp(arg$Cons$1$);
            }
            return lscomp(arg$Cons$1$);
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        };
        tmp = lscomp(label_inputs);
        return NofibPrelude.head(tmp)
      }
      return state;
    }
    return state;
  } 
  static apply_component(comp, signals) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1, tmp2, tmp3;
    if (comp instanceof circsim.Inp.class) {
      return NofibPrelude.None
    } else if (comp instanceof circsim.Outp.class) {
      if (signals instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = signals.head;
        arg$Cons$1$ = signals.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Some(arg$Cons$0$)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (comp instanceof circsim.Dff.class) {
      if (signals instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = signals.head;
        arg$Cons$1$ = signals.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Some(arg$Cons$0$)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (comp instanceof circsim.Inv.class) {
      if (signals instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = signals.head;
        arg$Cons$1$ = signals.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
          tmp = circsim.inv(arg$Cons$0$);
          return NofibPrelude.Some(tmp)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (comp instanceof circsim.And2.class) {
      if (signals instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = signals.head;
        arg$Cons$1$ = signals.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = arg$Cons$1$.head;
          arg$Cons$1$1 = arg$Cons$1$.tail;
          if (arg$Cons$1$1 instanceof NofibPrelude.Nil.class) {
            tmp1 = circsim.and2(arg$Cons$0$, arg$Cons$0$1);
            return NofibPrelude.Some(tmp1)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (comp instanceof circsim.Or2.class) {
      if (signals instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = signals.head;
        arg$Cons$1$ = signals.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = arg$Cons$1$.head;
          arg$Cons$1$1 = arg$Cons$1$.tail;
          if (arg$Cons$1$1 instanceof NofibPrelude.Nil.class) {
            tmp2 = circsim.or2(arg$Cons$0$, arg$Cons$0$1);
            return NofibPrelude.Some(tmp2)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (comp instanceof circsim.Xor.class) {
      if (signals instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = signals.head;
        arg$Cons$1$ = signals.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = arg$Cons$1$.head;
          arg$Cons$1$1 = arg$Cons$1$.tail;
          if (arg$Cons$1$1 instanceof NofibPrelude.Nil.class) {
            tmp3 = circsim.xor(arg$Cons$0$, arg$Cons$0$1);
            return NofibPrelude.Some(tmp3)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (comp instanceof circsim.None_.class) {
      return NofibPrelude.None
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static init_dffs(state) {
    let scrut, tmp;
    tmp = circsim.compType(state);
    scrut = tmp === circsim.Dff;
    if (scrut === true) {
      return circsim.update_outports(state, circsim.F)
    }
    return state;
  } 
  static restore_requests(old_states, new_states) {
    let restore_outport, restore;
    restore = function restore(os, ns) {
      let tmp, tmp1, tmp2;
      tmp = circsim.outports(os);
      tmp1 = circsim.outports(ns);
      tmp2 = NofibPrelude.zipWith(restore_outport, tmp, tmp1);
      return circsim.updateOutports(ns, tmp2)
    };
    restore_outport = function restore_outport(pql, mdq) {
      let element5$, element4$, element3$, element2$, element0$, element1$;
      if (runtime.Tuple.isArrayLike(pql) && pql.length === 6) {
        element0$ = runtime.Tuple.get(pql, 0);
        runtime.Tuple.get(pql, 1);
        element2$ = runtime.Tuple.get(pql, 2);
        element3$ = runtime.Tuple.get(pql, 3);
        element4$ = runtime.Tuple.get(pql, 4);
        element5$ = runtime.Tuple.get(pql, 5);
        if (runtime.Tuple.isArrayLike(mdq) && mdq.length === 6) {
          runtime.Tuple.get(mdq, 0);
          element1$ = runtime.Tuple.get(mdq, 1);
          runtime.Tuple.get(mdq, 2);
          runtime.Tuple.get(mdq, 3);
          runtime.Tuple.get(mdq, 4);
          runtime.Tuple.get(mdq, 5);
          return globalThis.Object.freeze([
            element0$,
            element1$,
            element2$,
            element3$,
            element4$,
            element5$
          ])
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    return NofibPrelude.zipWith(restore, old_states, new_states)
  } 
  static update_requests(b, state) {
    let lscomp, tmp, tmp1;
    lscomp = function lscomp(ls) {
      let h, arg$Cons$0$, arg$Cons$1$, element5$, element3$, element1$, element0$, tmp2, tmp3;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        h = arg$Cons$0$;
        if (runtime.Tuple.isArrayLike(h) && h.length === 6) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          runtime.Tuple.get(arg$Cons$0$, 2);
          element3$ = runtime.Tuple.get(arg$Cons$0$, 3);
          runtime.Tuple.get(arg$Cons$0$, 4);
          element5$ = runtime.Tuple.get(arg$Cons$0$, 5);
          tmp2 = globalThis.Object.freeze([
            element0$,
            element1$,
            b,
            element3$,
            b,
            element5$
          ]);
          tmp3 = lscomp(arg$Cons$1$);
          return NofibPrelude.Cons(tmp2, tmp3)
        }
        return lscomp(arg$Cons$1$);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = circsim.outports(state);
    tmp1 = lscomp(tmp);
    return circsim.updateOutports(state, tmp1)
  } 
  static check_depth(d, state) {
    let scrut, tmp;
    tmp = circsim.pathDepth(state);
    scrut = tmp == d;
    if (scrut === true) {
      return state
    }
    return circsim.update_requests(false, state);
  } 
  static acknowledge(d, states) {
    let check_lr_requests, states1, lambda, lambda1, tmp, tmp1;
    check_lr_requests = function check_lr_requests(pql) {
      let ql, element4$, element2$;
      if (runtime.Tuple.isArrayLike(pql) && pql.length === 6) {
        runtime.Tuple.get(pql, 0);
        runtime.Tuple.get(pql, 1);
        element2$ = runtime.Tuple.get(pql, 2);
        runtime.Tuple.get(pql, 3);
        element4$ = runtime.Tuple.get(pql, 4);
        runtime.Tuple.get(pql, 5);
        ql = element2$;
        if (ql === false) {
          return element4$
        }
        return true;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    lambda = (undefined, function (s) {
      return circsim.check_depth(d, s)
    });
    states1 = NofibPrelude.map(lambda, states);
    lambda1 = (undefined, function (s) {
      let tmp2, inlinedVal, tmp3;
      tmp2 = circsim.outports(s);
      tmp3 = NofibPrelude.map(check_lr_requests, tmp2);
      inlinedVal = NofibPrelude.orList(tmp3);
      return inlinedVal
    });
    tmp = NofibPrelude.map(lambda1, states1);
    tmp1 = NofibPrelude.orList(tmp);
    return ! tmp1
  } 
  static pad_packets(pss) {
    let lambda;
    lambda = (undefined, function (x) {
      let inlinedVal, max_ps, lambda1, tmp, tmp1, tmp2;
      lambda1 = (undefined, function (x1) {
        return NofibPrelude.listLen(x1)
      });
      tmp = NofibPrelude.map(lambda1, pss);
      max_ps = NofibPrelude.maximum(tmp);
      tmp1 = NofibPrelude.replicate_lz(max_ps, circsim.emptyPacket);
      tmp2 = NofibPrelude.append_nl_lz(x, tmp1);
      inlinedVal = NofibPrelude.take_lz(max_ps, tmp2);
      return inlinedVal
    });
    return NofibPrelude.map(lambda, pss)
  } 
  static make_packet(state) {
    let lscomp, tmp;
    lscomp = function lscomp(ls) {
      let h, arg$Cons$0$, arg$Cons$1$, element5$, element4$, element3$, element2$, element1$, element0$, tmp1, tmp2, tmp3;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        h = arg$Cons$0$;
        if (runtime.Tuple.isArrayLike(h) && h.length === 6) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          element2$ = runtime.Tuple.get(arg$Cons$0$, 2);
          element3$ = runtime.Tuple.get(arg$Cons$0$, 3);
          element4$ = runtime.Tuple.get(arg$Cons$0$, 4);
          element5$ = runtime.Tuple.get(arg$Cons$0$, 5);
          tmp1 = circsim.pid(state);
          tmp2 = globalThis.Object.freeze([
            tmp1,
            element0$,
            element1$,
            element2$,
            element3$,
            element4$,
            element5$,
            1
          ]);
          tmp3 = lscomp(arg$Cons$1$);
          return NofibPrelude.Cons(tmp2, tmp3)
        }
        return lscomp(arg$Cons$1$);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = circsim.outports(state);
    return lscomp(tmp)
  } 
  static compare_and_update(ipm_, pid_port_m) {
    let scrut, element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(ipm_) && ipm_.length === 3) {
      element0$ = runtime.Tuple.get(ipm_, 0);
      element1$ = runtime.Tuple.get(ipm_, 1);
      element2$ = runtime.Tuple.get(ipm_, 2);
      if (runtime.Tuple.isArrayLike(pid_port_m) && pid_port_m.length === 3) {
        element0$1 = runtime.Tuple.get(pid_port_m, 0);
        element1$1 = runtime.Tuple.get(pid_port_m, 1);
        element2$1 = runtime.Tuple.get(pid_port_m, 2);
        tmp = globalThis.Object.freeze([
          element0$,
          element1$
        ]);
        tmp1 = globalThis.Object.freeze([
          element0$1,
          element1$1
        ]);
        scrut = NofibPrelude.eqTup2(tmp, tmp1);
        if (scrut === true) {
          return globalThis.Object.freeze([
            element0$1,
            element1$1,
            element2$
          ])
        }
        return globalThis.Object.freeze([
          element0$1,
          element1$1,
          element2$1
        ]);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static up_i(ipm_, ins) {
    let i, p, m_, element2$, element1$, element0$, lambda;
    if (runtime.Tuple.isArrayLike(ipm_) && ipm_.length === 8) {
      element0$ = runtime.Tuple.get(ipm_, 0);
      element1$ = runtime.Tuple.get(ipm_, 1);
      element2$ = runtime.Tuple.get(ipm_, 2);
      runtime.Tuple.get(ipm_, 3);
      runtime.Tuple.get(ipm_, 4);
      runtime.Tuple.get(ipm_, 5);
      runtime.Tuple.get(ipm_, 6);
      runtime.Tuple.get(ipm_, 7);
      m_ = element2$;
      p = element1$;
      i = element0$;
      lambda = (undefined, function (x) {
        let tmp;
        tmp = globalThis.Object.freeze([
          i,
          p,
          m_
        ]);
        return circsim.compare_and_update(tmp, x)
      });
      return NofibPrelude.map(lambda, ins)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static update_i(l_r, ins) {
    let element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(l_r) && l_r.length === 2) {
      element0$ = runtime.Tuple.get(l_r, 0);
      element1$ = runtime.Tuple.get(l_r, 1);
      tmp = circsim.up_i(element1$, ins);
      return circsim.up_i(element0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static check_left(a, b) {
    let pqr, scrut, element6$, element5$, element5$1, element4$, element3$, element2$, element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(a) && a.length === 8) {
      runtime.Tuple.get(a, 0);
      runtime.Tuple.get(a, 1);
      runtime.Tuple.get(a, 2);
      runtime.Tuple.get(a, 3);
      runtime.Tuple.get(a, 4);
      element5$ = runtime.Tuple.get(a, 5);
      element6$ = runtime.Tuple.get(a, 6);
      runtime.Tuple.get(a, 7);
      pqr = element5$;
      if (runtime.Tuple.isArrayLike(b) && b.length === 6) {
        element0$ = runtime.Tuple.get(b, 0);
        element1$ = runtime.Tuple.get(b, 1);
        element2$ = runtime.Tuple.get(b, 2);
        element3$ = runtime.Tuple.get(b, 3);
        element4$ = runtime.Tuple.get(b, 4);
        element5$1 = runtime.Tuple.get(b, 5);
        if (pqr === true) {
          tmp = element6$ > 0;
        } else {
          tmp = false;
        }
        scrut = tmp;
        if (scrut === true) {
          return globalThis.Object.freeze([
            element0$,
            element1$,
            element2$,
            element3$,
            element4$,
            element5$1
          ])
        }
        return globalThis.Object.freeze([
          element0$,
          element1$,
          element2$,
          element3$,
          false,
          element5$1
        ]);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static check_right(a, b) {
    let pql, scrut, element4$, element3$, element5$, element4$1, element3$1, element2$, element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(a) && a.length === 8) {
      runtime.Tuple.get(a, 0);
      runtime.Tuple.get(a, 1);
      runtime.Tuple.get(a, 2);
      element3$ = runtime.Tuple.get(a, 3);
      element4$ = runtime.Tuple.get(a, 4);
      runtime.Tuple.get(a, 5);
      runtime.Tuple.get(a, 6);
      runtime.Tuple.get(a, 7);
      pql = element3$;
      if (runtime.Tuple.isArrayLike(b) && b.length === 6) {
        element0$ = runtime.Tuple.get(b, 0);
        element1$ = runtime.Tuple.get(b, 1);
        element2$ = runtime.Tuple.get(b, 2);
        element3$1 = runtime.Tuple.get(b, 3);
        element4$1 = runtime.Tuple.get(b, 4);
        element5$ = runtime.Tuple.get(b, 5);
        if (pql === true) {
          tmp = element4$ > 0;
        } else {
          tmp = false;
        }
        scrut = tmp;
        if (scrut === true) {
          return globalThis.Object.freeze([
            element0$,
            element1$,
            element2$,
            element3$1,
            element4$1,
            element5$
          ])
        }
        return globalThis.Object.freeze([
          element0$,
          element1$,
          false,
          element3$1,
          element4$1,
          element5$
        ]);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static update_o(lp_rp, out_) {
    let element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(lp_rp) && lp_rp.length === 2) {
      element0$ = runtime.Tuple.get(lp_rp, 0);
      element1$ = runtime.Tuple.get(lp_rp, 1);
      tmp = circsim.check_right(element1$, out_);
      return circsim.check_left(element0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static update_io(d, lrps, state) {
    let inlinedVal, inlinedVal1, scrut, tmp, tmp1, tmp2, tmp3, tmp4;
    tmp3 = circsim.inports(state);
    tmp4 = NofibPrelude.foldr(circsim.update_i, tmp3, lrps);
    inlinedVal = circsim.updateInports(state, tmp4);
    tmp = circsim.pathDepth(inlinedVal);
    scrut = tmp == d;
    if (scrut === true) {
      tmp1 = circsim.outports(inlinedVal);
      tmp2 = NofibPrelude.zipWith(circsim.update_o, lrps, tmp1);
      inlinedVal1 = circsim.updateOutports(inlinedVal, tmp2);
      return inlinedVal1
    }
    inlinedVal1 = inlinedVal;
    return inlinedVal;
  } 
  static do_send(d, states) {
    let states1, send_results, pss_, lambda, lambda1, tmp, tmp1, tmp2, lambda2;
    lambda = (undefined, function (s) {
      return circsim.check_depth(d, s)
    });
    states1 = NofibPrelude.map(lambda, states);
    lambda1 = (undefined, function (x) {
      let tmp3;
      tmp3 = circsim.send(x);
      return NofibPrelude.snd(tmp3)
    });
    tmp = NofibPrelude.map(circsim.make_packet, states1);
    tmp1 = circsim.pad_packets(tmp);
    tmp2 = NofibPrelude.transpose(tmp1);
    send_results = NofibPrelude.map(lambda1, tmp2);
    pss_ = NofibPrelude.transpose(send_results);
    lambda2 = (undefined, function (x, y) {
      return circsim.update_io(d, x, y)
    });
    return NofibPrelude.zipWith(lambda2, pss_, states)
  } 
  static do_sends(d, states) {
    let lambda, lambda1;
    lambda = (undefined, function (s) {
      return circsim.acknowledge(d, s)
    });
    lambda1 = (undefined, function (x) {
      return circsim.do_send(d, x)
    });
    return NofibPrelude.until(lambda, lambda1, states)
  } 
  static simulate_component(d, state) {
    let lscomp, out_signals, new_value, scrut, scrut1, tmp, tmp1, arg$Some$0$, tmp2, tmp3;
    lscomp = function lscomp(ls) {
      let h, arg$Cons$0$, arg$Cons$1$, element2$, tmp4;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        h = arg$Cons$0$;
        if (runtime.Tuple.isArrayLike(h) && h.length === 3) {
          runtime.Tuple.get(arg$Cons$0$, 0);
          runtime.Tuple.get(arg$Cons$0$, 1);
          element2$ = runtime.Tuple.get(arg$Cons$0$, 2);
          tmp4 = lscomp(arg$Cons$1$);
          return NofibPrelude.Cons(element2$, tmp4)
        }
        return lscomp(arg$Cons$1$);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = circsim.inports(state);
    out_signals = lscomp(tmp);
    tmp1 = circsim.compType(state);
    new_value = circsim.apply_component(tmp1, out_signals);
    tmp2 = circsim.pathDepth(state);
    scrut = d == tmp2;
    if (scrut === true) {
      tmp3 = new_value === NofibPrelude.None;
      scrut1 = ! tmp3;
      if (scrut1 === true) {
        if (new_value instanceof NofibPrelude.Some.class) {
          arg$Some$0$ = new_value.x;
          return circsim.update_outports(state, arg$Some$0$)
        }
        return state;
      }
      return state;
    }
    return state;
  } 
  static simulate_components(depth, states) {
    let lambda;
    lambda = (undefined, function (s) {
      return circsim.simulate_component(depth, s)
    });
    return NofibPrelude.map(lambda, states)
  } 
  static do_cycle(cpd, tp4, inputs) {
    let sim_then_send, ins, states1, states2, states3, states4, element3$, element2$, element1$, element0$, lambda, tmp;
    sim_then_send = function sim_then_send(state, d) {
      let tmp1;
      tmp1 = circsim.simulate_components(d, state);
      return circsim.do_sends(d, tmp1)
    };
    if (runtime.Tuple.isArrayLike(tp4) && tp4.length === 4) {
      element0$ = runtime.Tuple.get(tp4, 0);
      element1$ = runtime.Tuple.get(tp4, 1);
      element2$ = runtime.Tuple.get(tp4, 2);
      element3$ = runtime.Tuple.get(tp4, 3);
      ins = element1$;
      lambda = (undefined, function (s) {
        let tmp1;
        tmp1 = NofibPrelude.zip(ins, inputs);
        return circsim.store_inputs(tmp1, s)
      });
      states1 = NofibPrelude.map(lambda, element3$);
      states2 = circsim.do_sends(0, states1);
      tmp = NofibPrelude.enumFromTo(1, cpd);
      states3 = NofibPrelude.foldl(sim_then_send, states2, tmp);
      states4 = circsim.restore_requests(element3$, states3);
      return globalThis.Object.freeze([
        element0$,
        ins,
        element2$,
        states4
      ])
    }
    throw runtime.safeCall(globalThis.Error(tp4));
  } 
  static simulate(inputs_list, b) {
    let size, outs, ins, states, element3$, element2$, element1$, element0$, lambda, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(b) && b.length === 4) {
      element0$ = runtime.Tuple.get(b, 0);
      element1$ = runtime.Tuple.get(b, 1);
      element2$ = runtime.Tuple.get(b, 2);
      element3$ = runtime.Tuple.get(b, 3);
      states = element3$;
      outs = element2$;
      ins = element1$;
      size = element0$;
      lambda = (undefined, function (x, y) {
        let tmp3, tmp4;
        tmp3 = globalThis.Object.freeze([
          size,
          ins,
          outs,
          states
        ]);
        tmp4 = circsim.critical_path_depth(tmp3);
        return circsim.do_cycle(tmp4, x, y)
      });
      tmp = NofibPrelude.map(circsim.init_dffs, states);
      tmp1 = globalThis.Object.freeze([
        size,
        ins,
        outs,
        tmp
      ]);
      tmp2 = NofibPrelude.scanl(lambda, tmp1, inputs_list);
      return NofibPrelude.tail(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static reg(sto, n) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54;
    tmp = globalThis.Object.freeze([
      0,
      circsim.F,
      false,
      0,
      true,
      4
    ]);
    tmp1 = NofibPrelude.Cons(tmp, NofibPrelude.Nil);
    tmp2 = circsim.PS(n, circsim.Inp, 0, NofibPrelude.Nil, tmp1);
    tmp3 = n + 1;
    tmp4 = n + 5;
    tmp5 = globalThis.Object.freeze([
      tmp4,
      0,
      circsim.F
    ]);
    tmp6 = NofibPrelude.Cons(tmp5, NofibPrelude.Nil);
    tmp7 = globalThis.Object.freeze([
      0,
      circsim.F,
      false,
      0,
      true,
      5
    ]);
    tmp8 = NofibPrelude.Cons(tmp7, NofibPrelude.Nil);
    tmp9 = circsim.PS(tmp3, circsim.Dff, 1, tmp6, tmp8);
    tmp10 = n + 2;
    tmp11 = globalThis.Object.freeze([
      sto,
      0,
      circsim.F
    ]);
    tmp12 = NofibPrelude.Cons(tmp11, NofibPrelude.Nil);
    tmp13 = globalThis.Object.freeze([
      0,
      circsim.F,
      false,
      0,
      true,
      1
    ]);
    tmp14 = NofibPrelude.Cons(tmp13, NofibPrelude.Nil);
    tmp15 = circsim.PS(tmp10, circsim.Inv, 1, tmp12, tmp14);
    tmp16 = n + 3;
    tmp17 = n + 1;
    tmp18 = globalThis.Object.freeze([
      tmp17,
      0,
      circsim.F
    ]);
    tmp19 = n + 2;
    tmp20 = globalThis.Object.freeze([
      tmp19,
      0,
      circsim.F
    ]);
    tmp21 = NofibPrelude.Cons(tmp20, NofibPrelude.Nil);
    tmp22 = NofibPrelude.Cons(tmp18, tmp21);
    tmp23 = globalThis.Object.freeze([
      0,
      circsim.F,
      false,
      0,
      true,
      2
    ]);
    tmp24 = NofibPrelude.Cons(tmp23, NofibPrelude.Nil);
    tmp25 = circsim.PS(tmp16, circsim.And2, 2, tmp22, tmp24);
    tmp26 = n + 4;
    tmp27 = globalThis.Object.freeze([
      sto,
      0,
      circsim.F
    ]);
    tmp28 = globalThis.Object.freeze([
      n,
      0,
      circsim.F
    ]);
    tmp29 = NofibPrelude.Cons(tmp28, NofibPrelude.Nil);
    tmp30 = NofibPrelude.Cons(tmp27, tmp29);
    tmp31 = globalThis.Object.freeze([
      0,
      circsim.F,
      false,
      0,
      true,
      1
    ]);
    tmp32 = NofibPrelude.Cons(tmp31, NofibPrelude.Nil);
    tmp33 = circsim.PS(tmp26, circsim.And2, 1, tmp30, tmp32);
    tmp34 = n + 5;
    tmp35 = n + 3;
    tmp36 = globalThis.Object.freeze([
      tmp35,
      0,
      circsim.F
    ]);
    tmp37 = n + 4;
    tmp38 = globalThis.Object.freeze([
      tmp37,
      0,
      circsim.F
    ]);
    tmp39 = NofibPrelude.Cons(tmp38, NofibPrelude.Nil);
    tmp40 = NofibPrelude.Cons(tmp36, tmp39);
    tmp41 = globalThis.Object.freeze([
      0,
      circsim.F,
      true,
      4,
      false,
      0
    ]);
    tmp42 = NofibPrelude.Cons(tmp41, NofibPrelude.Nil);
    tmp43 = circsim.PS(tmp34, circsim.Or2, 3, tmp40, tmp42);
    tmp44 = n + 6;
    tmp45 = n + 1;
    tmp46 = globalThis.Object.freeze([
      tmp45,
      0,
      circsim.F
    ]);
    tmp47 = NofibPrelude.Cons(tmp46, NofibPrelude.Nil);
    tmp48 = circsim.PS(tmp44, circsim.Outp, 4, tmp47, NofibPrelude.Nil);
    tmp49 = NofibPrelude.Cons(tmp48, NofibPrelude.Nil);
    tmp50 = NofibPrelude.Cons(tmp43, tmp49);
    tmp51 = NofibPrelude.Cons(tmp33, tmp50);
    tmp52 = NofibPrelude.Cons(tmp25, tmp51);
    tmp53 = NofibPrelude.Cons(tmp15, tmp52);
    tmp54 = NofibPrelude.Cons(tmp9, tmp53);
    return NofibPrelude.Cons(tmp2, tmp54)
  } 
  static regs(bits) {
    let ilabel, olabel, is_, os, sto, states, tmp, tmp1, lambda, tmp2, tmp3, tmp4, tmp5, tmp6, lambda1, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, lambda2, lambda3, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
    ilabel = function ilabel(n, pid_) {
      let tmp22, tmp23;
      tmp22 = NofibPrelude.stringOfInt(n);
      tmp23 = NofibPrelude.stringConcat("x", tmp22);
      return globalThis.Object.freeze([
        tmp23,
        pid_
      ])
    };
    olabel = function olabel(n, pid_) {
      let tmp22, tmp23;
      tmp22 = NofibPrelude.stringOfInt(n);
      tmp23 = NofibPrelude.stringConcat("y", tmp22);
      return globalThis.Object.freeze([
        tmp23,
        pid_
      ])
    };
    tmp = globalThis.Object.freeze([
      "sto",
      0
    ]);
    tmp1 = NofibPrelude.enumFrom(0);
    lambda = (undefined, function (x) {
      let tmp22;
      tmp22 = 7 * x;
      return tmp22 + 1
    });
    tmp2 = bits - 1;
    tmp3 = NofibPrelude.enumFromTo(0, tmp2);
    tmp4 = NofibPrelude.map(lambda, tmp3);
    tmp5 = NofibPrelude.zipWith_lz_nl(ilabel, tmp1, tmp4);
    is_ = NofibPrelude.Cons(tmp, tmp5);
    tmp6 = NofibPrelude.enumFrom(0);
    lambda1 = (undefined, function (x) {
      let tmp22;
      tmp22 = 7 * x;
      return tmp22 + 7
    });
    tmp7 = bits - 1;
    tmp8 = NofibPrelude.enumFromTo(0, tmp7);
    tmp9 = NofibPrelude.map(lambda1, tmp8);
    os = NofibPrelude.zipWith_lz_nl(olabel, tmp6, tmp9);
    tmp10 = bits - 1;
    tmp11 = 8 * tmp10;
    tmp12 = tmp11 + 5;
    tmp13 = globalThis.Object.freeze([
      0,
      circsim.F,
      false,
      0,
      true,
      tmp12
    ]);
    tmp14 = NofibPrelude.Cons(tmp13, NofibPrelude.Nil);
    sto = circsim.PS(0, circsim.Inp, 0, NofibPrelude.Nil, tmp14);
    lambda2 = (undefined, function (x) {
      return circsim.reg(0, x)
    });
    lambda3 = (undefined, function (x) {
      let tmp22;
      tmp22 = 7 * x;
      return tmp22 + 1
    });
    tmp15 = bits - 1;
    tmp16 = NofibPrelude.enumFromTo(0, tmp15);
    tmp17 = NofibPrelude.map(lambda3, tmp16);
    tmp18 = NofibPrelude.map(lambda2, tmp17);
    tmp19 = NofibPrelude.concat(tmp18);
    states = NofibPrelude.Cons(sto, tmp19);
    tmp20 = 7 * bits;
    tmp21 = 1 + tmp20;
    return globalThis.Object.freeze([
      tmp21,
      is_,
      os,
      states
    ])
  } 
  static circuit_simulate(inputs_list, circuit) {
    let tmp;
    tmp = circsim.simulate(inputs_list, circuit);
    return NofibPrelude.map(circsim.collect_outputs, tmp)
  } 
  static run(num_bits, num_cycles) {
    let example, inputs, cycles, tmp, tmp1;
    tmp = circsim.regs(num_bits);
    example = circsim.pad_circuit(tmp);
    tmp1 = num_bits + 1;
    inputs = NofibPrelude.replicate(tmp1, circsim.T);
    cycles = NofibPrelude.replicate(num_cycles, inputs);
    return circsim.circuit_simulate(cycles, example)
  } 
  static testCircsim_nofib(n) {
    return circsim.run(8, n)
  } 
  static main() {
    let tmp;
    tmp = circsim.testCircsim_nofib(40);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "circsim"]; 
});
let circsim = circsim1; export default circsim;
