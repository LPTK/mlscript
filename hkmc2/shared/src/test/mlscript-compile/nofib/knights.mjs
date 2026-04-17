const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let knights1;
(class knights {
  static {
    knights1 = this
  }
  static {
    this.createQueue = NofibPrelude.Nil;
    this.Board = function Board(a, b, c, d) {
      return globalThis.Object.freeze(new Board.class(a, b, c, d));
    };
    (class Board {
      static {
        knights.Board.class = this
      }
      constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Board", ["a", "b", "c", "d"]]; 
    });
    (class Direction {
      static {
        knights.Direction = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Direction"]; 
    });
    (class UL extends knights.Direction {
      static {
        new this
      }
      constructor() {
        super();
        knights.UL = this;
        Object.defineProperty(this, "class", {
          value: UL
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "UL"]; 
    });
    (class UR extends knights.Direction {
      static {
        new this
      }
      constructor() {
        super();
        knights.UR = this;
        Object.defineProperty(this, "class", {
          value: UR
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "UR"]; 
    });
    (class DL extends knights.Direction {
      static {
        new this
      }
      constructor() {
        super();
        knights.DL = this;
        Object.defineProperty(this, "class", {
          value: DL
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "DL"]; 
    });
    (class DR extends knights.Direction {
      static {
        new this
      }
      constructor() {
        super();
        knights.DR = this;
        Object.defineProperty(this, "class", {
          value: DR
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "DR"]; 
    });
    (class LU extends knights.Direction {
      static {
        new this
      }
      constructor() {
        super();
        knights.LU = this;
        Object.defineProperty(this, "class", {
          value: LU
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LU"]; 
    });
    (class LD extends knights.Direction {
      static {
        new this
      }
      constructor() {
        super();
        knights.LD = this;
        Object.defineProperty(this, "class", {
          value: LD
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LD"]; 
    });
    (class RU extends knights.Direction {
      static {
        new this
      }
      constructor() {
        super();
        knights.RU = this;
        Object.defineProperty(this, "class", {
          value: RU
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "RU"]; 
    });
    (class RD extends knights.Direction {
      static {
        new this
      }
      constructor() {
        super();
        knights.RD = this;
        Object.defineProperty(this, "class", {
          value: RD
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "RD"]; 
    });
  }
  static myIsDigit(c) {
    let tmp, tmp1, tmp2;
    tmp = runtime.safeCall(c.codePointAt(0));
    tmp1 = tmp >= 48;
    if (tmp1 === true) {
      tmp2 = runtime.safeCall(c.codePointAt(0));
      return tmp2 <= 57
    }
    return false;
  } 
  static intintComp(a_b, c_d) {
    let a, b, c, d, element1$, element0$, element1$1, element0$1, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      b = element1$;
      a = element0$;
      if (runtime.Tuple.isArrayLike(c_d) && c_d.length === 2) {
        element0$1 = runtime.Tuple.get(c_d, 0);
        element1$1 = runtime.Tuple.get(c_d, 1);
        d = element1$1;
        c = element0$1;
        tmp = a < c;
        if (tmp === false) {
          tmp1 = a === c;
          if (tmp1 === true) {
            return b < d
          }
          return false;
        }
        return true;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static intChessSetComp(a_b, c_d) {
    let a, c, element0$, element0$1;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      runtime.Tuple.get(a_b, 1);
      a = element0$;
      if (runtime.Tuple.isArrayLike(c_d) && c_d.length === 2) {
        element0$1 = runtime.Tuple.get(c_d, 0);
        runtime.Tuple.get(c_d, 1);
        c = element0$1;
        return a < c
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static myInit(a_t) {
    let t, a, arg$Cons$0$, arg$Cons$1$, tmp;
    if (a_t instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = a_t.head;
      arg$Cons$1$ = a_t.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      }
      t = arg$Cons$1$;
      a = arg$Cons$0$;
      tmp = knights.myInit(t);
      return NofibPrelude.Cons(a, tmp);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static myLast(a_t) {
    let go, t, a, arg$Cons$0$, arg$Cons$1$;
    go = function go(h, t1) {
      let t2, head, arg$Cons$0$1, arg$Cons$1$1;
      if (t1 instanceof NofibPrelude.Nil.class) {
        return h
      } else if (t1 instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = t1.head;
        arg$Cons$1$1 = t1.tail;
        t2 = arg$Cons$1$1;
        head = arg$Cons$0$1;
        return go(head, t2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    if (a_t instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = a_t.head;
      arg$Cons$1$ = a_t.tail;
      t = arg$Cons$1$;
      a = arg$Cons$0$;
      return go(a, t)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static quickSortIntInt(xs) {
    let lscomp2, lscomp1, x, xs1, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      xs1 = arg$Cons$1$;
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
          scrut = knights.intintComp(h, x);
          if (scrut === true) {
            tmp5 = lscomp1(t);
            return NofibPrelude.Cons(h, tmp5)
          }
          return lscomp1(t);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      lscomp2 = function lscomp2(ls) {
        let t, h, scrut, arg$Cons$0$1, arg$Cons$1$1, tmp5, tmp6;
        if (ls instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (ls instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ls.head;
          arg$Cons$1$1 = ls.tail;
          t = arg$Cons$1$1;
          h = arg$Cons$0$1;
          tmp5 = knights.intintComp(h, x);
          scrut = ! tmp5;
          if (scrut === true) {
            tmp6 = lscomp2(t);
            return NofibPrelude.Cons(h, tmp6)
          }
          return lscomp2(t);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      tmp = lscomp1(xs1);
      tmp1 = knights.quickSortIntInt(tmp);
      tmp2 = lscomp2(xs1);
      tmp3 = knights.quickSortIntInt(tmp2);
      tmp4 = NofibPrelude.Cons(x, tmp3);
      return NofibPrelude.append(tmp1, tmp4)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static quickSortIntChessSet(xs) {
    let lscomp2, lscomp1, scrut, x, xs1, arg$LzCons$0$, arg$LzCons$1$, lambda, tmp, tmp1, lambda1, tmp2;
    scrut = NofibPrelude.force(xs);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      lambda = (undefined, function () {
        return NofibPrelude.LzNil
      });
      return NofibPrelude.lazy(lambda)
    } else if (scrut instanceof NofibPrelude.LzCons.class) {
      arg$LzCons$0$ = scrut.head;
      arg$LzCons$1$ = scrut.tail;
      xs1 = arg$LzCons$1$;
      x = arg$LzCons$0$;
      lscomp1 = function lscomp1(ls) {
        let scrut1, t, h, scrut2, arg$LzCons$0$1, arg$LzCons$1$1, lambda2, lambda3;
        scrut1 = NofibPrelude.force(ls);
        if (scrut1 instanceof NofibPrelude.LzNil.class) {
          lambda2 = (undefined, function () {
            return NofibPrelude.LzNil
          });
          return NofibPrelude.lazy(lambda2)
        } else if (scrut1 instanceof NofibPrelude.LzCons.class) {
          arg$LzCons$0$1 = scrut1.head;
          arg$LzCons$1$1 = scrut1.tail;
          t = arg$LzCons$1$1;
          h = arg$LzCons$0$1;
          scrut2 = knights.intChessSetComp(h, x);
          if (scrut2 === true) {
            lambda3 = (undefined, function () {
              let tmp3;
              tmp3 = lscomp1(t);
              return NofibPrelude.LzCons(h, tmp3)
            });
            return NofibPrelude.lazy(lambda3)
          }
          return lscomp1(t);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      lscomp2 = function lscomp2(ls) {
        let scrut1, t, h, scrut2, arg$LzCons$0$1, arg$LzCons$1$1, lambda2, tmp3, lambda3;
        scrut1 = NofibPrelude.force(ls);
        if (scrut1 instanceof NofibPrelude.LzNil.class) {
          lambda2 = (undefined, function () {
            return NofibPrelude.LzNil
          });
          return NofibPrelude.lazy(lambda2)
        } else if (scrut1 instanceof NofibPrelude.LzCons.class) {
          arg$LzCons$0$1 = scrut1.head;
          arg$LzCons$1$1 = scrut1.tail;
          t = arg$LzCons$1$1;
          h = arg$LzCons$0$1;
          tmp3 = knights.intChessSetComp(h, x);
          scrut2 = ! tmp3;
          if (scrut2 === true) {
            lambda3 = (undefined, function () {
              let tmp4;
              tmp4 = lscomp2(t);
              return NofibPrelude.LzCons(h, tmp4)
            });
            return NofibPrelude.lazy(lambda3)
          }
          return lscomp2(t);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      tmp = lscomp1(xs1);
      tmp1 = knights.quickSortIntChessSet(tmp);
      lambda1 = (undefined, function () {
        let tmp3, tmp4;
        tmp3 = lscomp2(xs1);
        tmp4 = knights.quickSortIntChessSet(tmp3);
        return NofibPrelude.LzCons(x, tmp4)
      });
      tmp2 = NofibPrelude.lazy(lambda1);
      return NofibPrelude.append_lz_lz(tmp1, tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static sizeQueue(xs) {
    return NofibPrelude.listLen(xs)
  } 
  static emptyQueue(x) {
    return NofibPrelude.listEq(x, NofibPrelude.Nil)
  } 
  static removeBack(xs) {
    let x, xs1, arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      }
      xs1 = arg$Cons$1$;
      x = arg$Cons$0$;
      tmp = knights.removeBack(xs1);
      return NofibPrelude.Cons(x, tmp);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static removeFront(xs) {
    let t, arg$Cons$1$;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$1$ = xs.tail;
      t = arg$Cons$1$;
      return t
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static inquireBack(xs) {
    loopLabel: while (true) {
      let x, xs1, arg$Cons$0$, arg$Cons$1$;
      if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
          x = arg$Cons$0$;
          return x
        }
        xs1 = arg$Cons$1$;
        xs = xs1;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static inquireFront(h_t) {
    return NofibPrelude.head(h_t)
  } 
  static addAllBack(list, q) {
    return NofibPrelude.append(q, list)
  } 
  static addAllFront(list, q) {
    return NofibPrelude.append(list, q)
  } 
  static addBack(x, q) {
    let tmp;
    tmp = NofibPrelude.Cons(x, NofibPrelude.Nil);
    return NofibPrelude.append(q, tmp)
  } 
  static addFront(x, q) {
    return NofibPrelude.Cons(x, q)
  } 
  static createBoard(x, t) {
    let lambda, tmp, tmp1;
    lambda = (undefined, function () {
      return t
    });
    tmp = NofibPrelude.lazy(lambda);
    tmp1 = NofibPrelude.Cons(t, NofibPrelude.Nil);
    return knights.Board(x, 1, tmp, tmp1)
  } 
  static sizeBoard(b) {
    let a, arg$Board$0$;
    if (b instanceof knights.Board.class) {
      arg$Board$0$ = b.a;
      a = arg$Board$0$;
      return a
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static noPieces(b) {
    let n, arg$Board$1$;
    if (b instanceof knights.Board.class) {
      arg$Board$1$ = b.b;
      n = arg$Board$1$;
      return n
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static addPiece(t, b) {
    let s, n, f, ts, arg$Board$0$, arg$Board$1$, arg$Board$2$, arg$Board$3$, tmp, tmp1;
    if (b instanceof knights.Board.class) {
      arg$Board$0$ = b.a;
      arg$Board$1$ = b.b;
      arg$Board$2$ = b.c;
      arg$Board$3$ = b.d;
      ts = arg$Board$3$;
      f = arg$Board$2$;
      n = arg$Board$1$;
      s = arg$Board$0$;
      tmp = n + 1;
      tmp1 = NofibPrelude.Cons(t, ts);
      return knights.Board(s, tmp, f, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static deleteFirst(b) {
    let s, n, ts, ts_, arg$Board$0$, arg$Board$1$, arg$Board$3$, tmp, lambda, tmp1;
    if (b instanceof knights.Board.class) {
      arg$Board$0$ = b.a;
      arg$Board$1$ = b.b;
      arg$Board$3$ = b.d;
      ts = arg$Board$3$;
      n = arg$Board$1$;
      s = arg$Board$0$;
      ts_ = knights.myInit(ts);
      tmp = n - 1;
      lambda = (undefined, function () {
        return knights.myLast(ts_)
      });
      tmp1 = NofibPrelude.lazy(lambda);
      return knights.Board(s, tmp, tmp1, ts_)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static positionPiece(x, b) {
    let n, ts, arg$Board$1$, arg$Board$3$, tmp;
    if (b instanceof knights.Board.class) {
      arg$Board$1$ = b.b;
      arg$Board$3$ = b.d;
      ts = arg$Board$3$;
      n = arg$Board$1$;
      tmp = n - x;
      return NofibPrelude.atIndex(tmp, ts)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static lastPiece(b) {
    let t, arg$Board$3$, arg$Cons$0$;
    if (b instanceof knights.Board.class) {
      arg$Board$3$ = b.d;
      if (arg$Board$3$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = arg$Board$3$.head;
        t = arg$Cons$0$;
        return t
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static firstPiece(b) {
    let f, arg$Board$2$;
    if (b instanceof knights.Board.class) {
      arg$Board$2$ = b.c;
      f = arg$Board$2$;
      return NofibPrelude.force(f)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static pieceAtTile(x, b) {
    let find, ts, arg$Board$3$;
    if (b instanceof knights.Board.class) {
      arg$Board$3$ = b.d;
      ts = arg$Board$3$;
      find = function find(x1, xs) {
        let xs1, y, scrut, arg$Cons$0$, arg$Cons$1$, tmp;
        if (xs instanceof NofibPrelude.Nil.class) {
          throw runtime.safeCall(globalThis.Error("Tile not used"))
        } else if (xs instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = xs.head;
          arg$Cons$1$ = xs.tail;
          xs1 = arg$Cons$1$;
          y = arg$Cons$0$;
          scrut = NofibPrelude.eqTup2(x1, y);
          if (scrut === true) {
            tmp = NofibPrelude.listLen(xs1);
            return 1 + tmp
          }
          return find(x1, xs1);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      return find(x, ts)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static tup2InList(y, xs) {
    loopLabel: while (true) {
      let x, xs1, scrut, arg$Cons$0$, arg$Cons$1$;
      if (xs instanceof NofibPrelude.Nil.class) {
        return false
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        xs1 = arg$Cons$1$;
        x = arg$Cons$0$;
        scrut = NofibPrelude.eqTup2(y, x);
        if (scrut === true) {
          return true
        }
        xs = xs1;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static isSquareFree(x, b) {
    let ts, arg$Board$3$, tmp;
    if (b instanceof knights.Board.class) {
      arg$Board$3$ = b.d;
      ts = arg$Board$3$;
      tmp = knights.tup2InList(x, ts);
      return ! tmp
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static assignMoveNo(t, size, z) {
    let x, y, t1, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (t instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (t instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = t.head;
      arg$Cons$1$ = t.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        t1 = arg$Cons$1$;
        y = element1$;
        x = element0$;
        tmp = y - 1;
        tmp1 = tmp * size;
        tmp2 = tmp1 + x;
        tmp3 = globalThis.Object.freeze([
          tmp2,
          z
        ]);
        tmp4 = z - 1;
        tmp5 = knights.assignMoveNo(t1, size, tmp4);
        return NofibPrelude.Cons(tmp3, tmp5)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static spaces(s, y) {
    let logTen, tmp, tmp1, tmp2, tmp3;
    logTen = function logTen(x) {
      let scrut, tmp4, tmp5;
      scrut = x === 0;
      if (scrut === true) {
        return 0
      }
      tmp4 = NofibPrelude.intDiv(x, 10);
      tmp5 = logTen(tmp4);
      return 1 + tmp5;
    };
    tmp = logTen(s);
    tmp1 = logTen(y);
    tmp2 = tmp - tmp1;
    tmp3 = tmp2 + 1;
    return NofibPrelude.replicate(tmp3, " ")
  } 
  static printBoard(s, n, xs) {
    let scrut, scrut1, scrut2, xs1, j, i, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46;
    split_default$: {
      split_1$: {
        split_2$: {
          split_3$: {
            if (xs instanceof NofibPrelude.Nil.class) {
              tmp = s * s;
              scrut = n > tmp;
              if (scrut === true) {
                return NofibPrelude.Nil
              }
              tmp1 = NofibPrelude.intMod(n, s);
              scrut1 = tmp1 != 0;
              if (scrut1 === true) {
                tmp2 = s * s;
                tmp3 = knights.spaces(tmp2, 1);
                tmp4 = n + 1;
                tmp5 = knights.printBoard(s, tmp4, NofibPrelude.Nil);
                tmp6 = NofibPrelude.append(tmp3, tmp5);
                return NofibPrelude.Cons("*", tmp6)
              }
              tmp7 = NofibPrelude.intMod(n, s);
              scrut2 = tmp7 === 0;
              if (scrut2 === true) {
                tmp8 = NofibPrelude.nofibStringToList("*\n");
                tmp9 = n + 1;
                tmp10 = knights.printBoard(s, tmp9, NofibPrelude.Nil);
                return NofibPrelude.append(tmp8, tmp10)
              }
              throw runtime.safeCall(globalThis.Error("printBoard empty list error"));
            } else if (xs instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = xs.head;
              arg$Cons$1$ = xs.tail;
              if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
                element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
                element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
                xs1 = arg$Cons$1$;
                j = element1$;
                i = element0$;
                scrut3 = i === n;
                if (scrut3 === true) {
                  tmp11 = NofibPrelude.intMod(n, s);
                  scrut4 = tmp11 === 0;
                  if (scrut4 === true) {
                    tmp12 = NofibPrelude.stringOfInt(j);
                    tmp13 = NofibPrelude.nofibStringToList(tmp12);
                    tmp14 = NofibPrelude.nofibStringToList("\n");
                    tmp15 = n + 1;
                    tmp16 = knights.printBoard(s, tmp15, xs1);
                    tmp17 = NofibPrelude.append(tmp14, tmp16);
                    return NofibPrelude.append(tmp13, tmp17)
                  }
                  scrut5 = i === n;
                  if (scrut5 === true) {
                    tmp18 = NofibPrelude.intMod(n, s);
                    scrut6 = tmp18 != 0;
                    if (scrut6 === true) {
                      break split_1$
                    }
                    tmp19 = NofibPrelude.intMod(n, s);
                    scrut7 = tmp19 != 0;
                    if (scrut7 === true) {
                      break split_2$
                    }
                    tmp20 = NofibPrelude.intMod(n, s);
                    scrut8 = tmp20 === 0;
                    if (scrut8 === true) {
                      break split_3$
                    }
                  } else {
                    tmp21 = NofibPrelude.intMod(n, s);
                    scrut7 = tmp21 != 0;
                    if (scrut7 === true) {
                      break split_2$
                    }
                    tmp22 = NofibPrelude.intMod(n, s);
                    scrut8 = tmp22 === 0;
                    if (scrut8 === true) {
                      break split_3$
                    }
                  }
                  throw runtime.safeCall(globalThis.Error("printBoard non-empty list error"))
                }
                scrut5 = i === n;
                if (scrut5 === true) {
                  tmp23 = NofibPrelude.intMod(n, s);
                  scrut6 = tmp23 != 0;
                  if (scrut6 === true) {
                    break split_1$
                  }
                  tmp24 = NofibPrelude.intMod(n, s);
                  scrut7 = tmp24 != 0;
                  if (scrut7 === true) {
                    break split_2$
                  }
                  tmp25 = NofibPrelude.intMod(n, s);
                  scrut8 = tmp25 === 0;
                  if (scrut8 === true) {
                    break split_3$
                  }
                } else {
                  tmp26 = NofibPrelude.intMod(n, s);
                  scrut7 = tmp26 != 0;
                  if (scrut7 === true) {
                    break split_2$
                  }
                  tmp27 = NofibPrelude.intMod(n, s);
                  scrut8 = tmp27 === 0;
                  if (scrut8 === true) {
                    break split_3$
                  }
                }
                throw runtime.safeCall(globalThis.Error("printBoard non-empty list error"));
              }
              break split_default$;
            }
            break split_default$;
          }
          tmp28 = NofibPrelude.nofibStringToList("*\n");
          tmp29 = n + 1;
          tmp30 = globalThis.Object.freeze([
            i,
            j
          ]);
          tmp31 = NofibPrelude.Cons(tmp30, xs1);
          tmp32 = knights.printBoard(s, tmp29, tmp31);
          return NofibPrelude.append(tmp28, tmp32);
        }
        tmp33 = s * s;
        tmp34 = knights.spaces(tmp33, 1);
        tmp35 = n + 1;
        tmp36 = globalThis.Object.freeze([
          i,
          j
        ]);
        tmp37 = NofibPrelude.Cons(tmp36, xs1);
        tmp38 = knights.printBoard(s, tmp35, tmp37);
        tmp39 = NofibPrelude.append(tmp34, tmp38);
        return NofibPrelude.Cons("*", tmp39);
      }
      tmp40 = NofibPrelude.stringOfInt(j);
      tmp41 = NofibPrelude.nofibStringToList(tmp40);
      tmp42 = s * s;
      tmp43 = knights.spaces(tmp42, j);
      tmp44 = n + 1;
      tmp45 = knights.printBoard(s, tmp44, xs1);
      tmp46 = NofibPrelude.append(tmp43, tmp45);
      return NofibPrelude.append(tmp41, tmp46);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  } 
  static move(d, x_y) {
    let x, y, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      element0$ = runtime.Tuple.get(x_y, 0);
      element1$ = runtime.Tuple.get(x_y, 1);
      y = element1$;
      x = element0$;
      if (d instanceof knights.UL.class) {
        tmp = x - 1;
        tmp1 = y - 2;
        return globalThis.Object.freeze([
          tmp,
          tmp1
        ])
      } else if (d instanceof knights.UR.class) {
        tmp2 = x + 1;
        tmp3 = y - 2;
        return globalThis.Object.freeze([
          tmp2,
          tmp3
        ])
      } else if (d instanceof knights.DL.class) {
        tmp4 = x - 1;
        tmp5 = y + 2;
        return globalThis.Object.freeze([
          tmp4,
          tmp5
        ])
      } else if (d instanceof knights.DR.class) {
        tmp6 = x + 1;
        tmp7 = y + 2;
        return globalThis.Object.freeze([
          tmp6,
          tmp7
        ])
      } else if (d instanceof knights.LU.class) {
        tmp8 = x - 2;
        tmp9 = y - 1;
        return globalThis.Object.freeze([
          tmp8,
          tmp9
        ])
      } else if (d instanceof knights.LD.class) {
        tmp10 = x - 2;
        tmp11 = y + 1;
        return globalThis.Object.freeze([
          tmp10,
          tmp11
        ])
      } else if (d instanceof knights.RU.class) {
        tmp12 = x + 2;
        tmp13 = y - 1;
        return globalThis.Object.freeze([
          tmp12,
          tmp13
        ])
      } else if (d instanceof knights.RD.class) {
        tmp14 = x + 2;
        tmp15 = y + 1;
        return globalThis.Object.freeze([
          tmp14,
          tmp15
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static startTour(st, size) {
    let scrut, tmp;
    tmp = NofibPrelude.intMod(size, 2);
    scrut = tmp === 0;
    if (scrut === true) {
      return knights.createBoard(size, st)
    }
    throw runtime.safeCall(globalThis.Error("Tour doesnt exist for odd size board"));
  } 
  static moveKnight(board, dir) {
    let tmp, tmp1;
    tmp = knights.lastPiece(board);
    tmp1 = knights.move(dir, tmp);
    return knights.addPiece(tmp1, board)
  } 
  static canMoveTo(x_y, board) {
    let x, y, sze, res, scrut, scrut1, scrut2, scrut3, scrut4, element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      element0$ = runtime.Tuple.get(x_y, 0);
      element1$ = runtime.Tuple.get(x_y, 1);
      y = element1$;
      x = element0$;
      sze = knights.sizeBoard(board);
      scrut = x >= 1;
      if (scrut === true) {
        scrut4 = x <= sze;
        if (scrut4 === true) {
          scrut3 = y >= 1;
          if (scrut3 === true) {
            scrut2 = y <= sze;
            if (scrut2 === true) {
              scrut1 = knights.isSquareFree(x_y, board);
              if (scrut1 === true) {
                tmp = true;
              } else {
                tmp = false;
              }
            } else {
              tmp = false;
            }
          } else {
            tmp = false;
          }
        } else {
          tmp = false;
        }
      } else {
        tmp = false;
      }
      res = tmp;
      return res
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static canMove(board, dir) {
    let tmp, tmp1;
    tmp = knights.lastPiece(board);
    tmp1 = knights.move(dir, tmp);
    return knights.canMoveTo(tmp1, board)
  } 
  static canJumpFirst(board) {
    let tmp, tmp1;
    tmp = knights.firstPiece(board);
    tmp1 = knights.deleteFirst(board);
    return knights.canMoveTo(tmp, tmp1)
  } 
  static tourFinished(board) {
    let sze, tmp, tmp1, tmp2;
    sze = knights.sizeBoard(board);
    tmp = knights.noPieces(board);
    tmp1 = sze * sze;
    tmp2 = tmp === tmp1;
    if (tmp2 === true) {
      return knights.canJumpFirst(board)
    }
    return false;
  } 
  static possibleMoves(board) {
    let lscomp, res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    lscomp = function lscomp(ls) {
      let x, t, scrut, arg$Cons$0$, arg$Cons$1$, tmp8;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        t = arg$Cons$1$;
        x = arg$Cons$0$;
        scrut = knights.canMove(board, x);
        if (scrut === true) {
          tmp8 = lscomp(t);
          return NofibPrelude.Cons(x, tmp8)
        }
        return lscomp(t);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = NofibPrelude.Cons(knights.RD, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(knights.RU, tmp);
    tmp2 = NofibPrelude.Cons(knights.LD, tmp1);
    tmp3 = NofibPrelude.Cons(knights.LU, tmp2);
    tmp4 = NofibPrelude.Cons(knights.DR, tmp3);
    tmp5 = NofibPrelude.Cons(knights.DL, tmp4);
    tmp6 = NofibPrelude.Cons(knights.UR, tmp5);
    tmp7 = NofibPrelude.Cons(knights.UL, tmp6);
    res = lscomp(tmp7);
    return res
  } 
  static deadEnd(board) {
    let tmp, tmp1;
    tmp = knights.possibleMoves(board);
    tmp1 = NofibPrelude.listLen(tmp);
    return tmp1 === 0
  } 
  static allDescend(board) {
    let lambda, tmp;
    lambda = (undefined, function (b) {
      return knights.moveKnight(board, b)
    });
    tmp = knights.possibleMoves(board);
    return NofibPrelude.map(lambda, tmp)
  } 
  static descAndNo(board) {
    let lscomp, tmp;
    lscomp = function lscomp(ls) {
      let x, t, arg$Cons$0$, arg$Cons$1$, lambda, lambda1;
      if (ls instanceof NofibPrelude.Nil.class) {
        lambda = (undefined, function () {
          return NofibPrelude.LzNil
        });
        return NofibPrelude.lazy(lambda)
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        t = arg$Cons$1$;
        x = arg$Cons$0$;
        lambda1 = (undefined, function () {
          let tmp1, tmp2, tmp3, tmp4, tmp5;
          tmp1 = knights.deleteFirst(x);
          tmp2 = knights.possibleMoves(tmp1);
          tmp3 = NofibPrelude.listLen(tmp2);
          tmp4 = globalThis.Object.freeze([
            tmp3,
            x
          ]);
          tmp5 = lscomp(t);
          return NofibPrelude.LzCons(tmp4, tmp5)
        });
        return NofibPrelude.lazy(lambda1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = knights.allDescend(board);
    return lscomp(tmp)
  } 
  static singleDescend(board) {
    let lscomp, tmp;
    lscomp = function lscomp(ls) {
      let scrut, x, y, t, scrut1, arg$LzCons$0$, arg$LzCons$1$, element1$, element0$, tmp1;
      scrut = NofibPrelude.force(ls);
      if (scrut instanceof NofibPrelude.LzNil.class) {
        return NofibPrelude.Nil
      } else if (scrut instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$ = scrut.head;
        arg$LzCons$1$ = scrut.tail;
        if (runtime.Tuple.isArrayLike(arg$LzCons$0$) && arg$LzCons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$LzCons$0$, 0);
          element1$ = runtime.Tuple.get(arg$LzCons$0$, 1);
          t = arg$LzCons$1$;
          x = element1$;
          y = element0$;
          scrut1 = y === 1;
          if (scrut1 === true) {
            tmp1 = lscomp(t);
            return NofibPrelude.Cons(x, tmp1)
          }
          return lscomp(t);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = knights.descAndNo(board);
    return lscomp(tmp)
  } 
  static descendents(board) {
    let scrut, singles, scrut1, res, scrut2, scrut3, h, tmp, tmp1, tmp2, tmp3, lambda, tmp4, tmp5, tmp6, arg$Cons$0$, arg$Cons$1$, lambda1, tmp7, lambda2;
    tmp = knights.canJumpFirst(board);
    if (tmp === true) {
      tmp2 = knights.firstPiece(board);
      tmp3 = knights.addPiece(tmp2, board);
      tmp1 = knights.deadEnd(tmp3);
    } else {
      tmp1 = false;
    }
    scrut = tmp1;
    if (scrut === true) {
      lambda = (undefined, function () {
        return NofibPrelude.LzNil
      });
      return NofibPrelude.lazy(lambda)
    }
    singles = knights.singleDescend(board);
    scrut1 = NofibPrelude.listLen(singles);
    scrut2 = scrut1 === 0;
    if (scrut2 === true) {
      tmp4 = knights.descAndNo(board);
      tmp5 = knights.quickSortIntChessSet(tmp4);
      tmp6 = NofibPrelude.map_lz(NofibPrelude.snd, tmp5);
    } else {
      scrut3 = scrut1 === 1;
      if (scrut3 === true) {
        if (singles instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = singles.head;
          arg$Cons$1$ = singles.tail;
          if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
            h = arg$Cons$0$;
            lambda1 = (undefined, function () {
              let lambda3, tmp8;
              lambda3 = (undefined, function () {
                return NofibPrelude.LzNil
              });
              tmp8 = NofibPrelude.lazy(lambda3);
              return NofibPrelude.LzCons(h, tmp8)
            });
            tmp7 = NofibPrelude.lazy(lambda1);
            tmp6 = tmp7;
          } else {
            throw runtime.safeCall(globalThis.Error("unreachable"))
          }
        } else {
          throw runtime.safeCall(globalThis.Error("unreachable"))
        }
      } else {
        lambda2 = (undefined, function () {
          return NofibPrelude.LzNil
        });
        tmp6 = NofibPrelude.lazy(lambda2);
      }
    }
    res = tmp6;
    return res;
  } 
  static showChessSet(b) {
    let sze, n, ts, sortedTrail, arg$Board$0$, arg$Board$1$, arg$Board$3$, tmp;
    if (b instanceof knights.Board.class) {
      arg$Board$0$ = b.a;
      arg$Board$1$ = b.b;
      arg$Board$3$ = b.d;
      ts = arg$Board$3$;
      n = arg$Board$1$;
      sze = arg$Board$0$;
      tmp = knights.assignMoveNo(ts, sze, n);
      sortedTrail = knights.quickSortIntInt(tmp);
      return knights.printBoard(sze, 1, sortedTrail)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static root(sze) {
    let lscomp1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda, tmp9;
    lscomp1 = function lscomp1(ls) {
      let lscomp2, h1, t1, arg$Cons$0$, arg$Cons$1$, lambda1, tmp10;
      if (ls instanceof NofibPrelude.Nil.class) {
        lambda1 = (undefined, function () {
          return NofibPrelude.LzNil
        });
        return NofibPrelude.lazy(lambda1)
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        t1 = arg$Cons$1$;
        h1 = arg$Cons$0$;
        lscomp2 = function lscomp2(ls1) {
          let h2, t2, arg$Cons$0$1, arg$Cons$1$1, lambda2;
          if (ls1 instanceof NofibPrelude.Nil.class) {
            return lscomp1(t1)
          } else if (ls1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = ls1.head;
            arg$Cons$1$1 = ls1.tail;
            t2 = arg$Cons$1$1;
            h2 = arg$Cons$0$1;
            lambda2 = (undefined, function () {
              let tmp11, tmp12;
              tmp11 = globalThis.Object.freeze([
                h1,
                h2
              ]);
              tmp12 = lscomp2(t2);
              return NofibPrelude.LzCons(tmp11, tmp12)
            });
            return NofibPrelude.lazy(lambda2)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        };
        tmp10 = NofibPrelude.enumFromTo(1, sze);
        return lscomp2(tmp10)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = sze * sze;
    tmp1 = 1 - tmp;
    tmp2 = NofibPrelude.repeat(tmp1);
    tmp3 = NofibPrelude.enumFromTo(1, sze);
    tmp4 = lscomp1(tmp3);
    tmp5 = sze * sze;
    tmp6 = NofibPrelude.replicate_lz(tmp5, sze);
    tmp7 = NofibPrelude.zipWith_lz_lz(knights.startTour, tmp4, tmp6);
    tmp8 = NofibPrelude.zip_lz_lz(tmp2, tmp7);
    lambda = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp9 = NofibPrelude.lazy(lambda);
    return NofibPrelude.append_lz_lz(tmp8, tmp9)
  } 
  static grow(x_y) {
    let x, y, element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      element0$ = runtime.Tuple.get(x_y, 0);
      element1$ = runtime.Tuple.get(x_y, 1);
      y = element1$;
      x = element0$;
      tmp = x + 1;
      tmp1 = NofibPrelude.repeat(tmp);
      tmp2 = knights.descendents(y);
      return NofibPrelude.zip_lz_lz(tmp1, tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static isFinished(x_y) {
    let y, element1$;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      runtime.Tuple.get(x_y, 0);
      element1$ = runtime.Tuple.get(x_y, 1);
      y = element1$;
      return knights.tourFinished(y)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static emptyQueue_lz(x) {
    let scrut;
    scrut = NofibPrelude.force(x);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      return true
    }
    return false;
  } 
  static removeFront_lz(xs) {
    let scrut, t, arg$LzCons$1$;
    scrut = NofibPrelude.force(xs);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      arg$LzCons$1$ = scrut.tail;
      t = arg$LzCons$1$;
      return t
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static inquireFront_lz(h_t) {
    let scrut, h, arg$LzCons$0$;
    scrut = NofibPrelude.force(h_t);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      arg$LzCons$0$ = scrut.head;
      h = arg$LzCons$0$;
      return h
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static addAllFront_lz(list, q) {
    return NofibPrelude.append_lz_lz(list, q)
  } 
  static depthSearch(q, growFn, finFn) {
    loopLabel: while (true) {
      let scrut, scrut1, lambda, tmp, lambda1, tmp1, tmp2, tmp3, tmp4, finFn1, q1, growFn1;
      q1 = q;
      growFn1 = growFn;
      finFn1 = finFn;
      scrut = knights.emptyQueue_lz(q1);
      if (scrut === true) {
        lambda = (undefined, function () {
          return NofibPrelude.LzNil
        });
        return NofibPrelude.lazy(lambda)
      }
      tmp = knights.inquireFront_lz(q1);
      scrut1 = runtime.safeCall(finFn1(tmp));
      if (scrut1 === true) {
        lambda1 = (undefined, function () {
          let tmp5, tmp6, tmp7;
          tmp5 = knights.inquireFront_lz(q1);
          tmp6 = knights.removeFront_lz(q1);
          tmp7 = knights.depthSearch(tmp6, growFn1, finFn1);
          return NofibPrelude.LzCons(tmp5, tmp7)
        });
        return NofibPrelude.lazy(lambda1)
      }
      tmp1 = knights.inquireFront_lz(q1);
      tmp2 = runtime.safeCall(growFn1(tmp1));
      tmp3 = knights.removeFront_lz(q1);
      tmp4 = knights.addAllFront_lz(tmp2, tmp3);
      q = tmp4;
      growFn = growFn1;
      finFn = finFn1;
      continue loopLabel;
    }
  } 
  static printTour(ss) {
    let pp, strToInt, scrut, number, size, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, lambda, tmp, tmp1, tmp2;
    strToInt = function strToInt(y, xs) {
      let x, xs1, arg$Cons$0$2, arg$Cons$1$2, tmp3, tmp4, tmp5, tmp6;
      if (xs instanceof NofibPrelude.Nil.class) {
        return y
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$2 = xs.head;
        arg$Cons$1$2 = xs.tail;
        xs1 = arg$Cons$1$2;
        x = arg$Cons$0$2;
        tmp3 = 10 * y;
        tmp4 = runtime.safeCall(x.codePointAt(0));
        tmp5 = tmp4 - 48;
        tmp6 = tmp3 + tmp5;
        return strToInt(tmp6, xs1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    pp = function pp(xs) {
      let x, xs1, y, arg$Cons$0$2, arg$Cons$1$2, element1$, element0$, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
      if (xs instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$2 = xs.head;
        arg$Cons$1$2 = xs.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$2) && arg$Cons$0$2.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$2, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$2, 1);
          xs1 = arg$Cons$1$2;
          y = element1$;
          x = element0$;
          tmp3 = NofibPrelude.nofibStringToList("\nKnights tour with ");
          tmp4 = NofibPrelude.stringOfInt(x);
          tmp5 = NofibPrelude.nofibStringToList(tmp4);
          tmp6 = NofibPrelude.nofibStringToList(" backtracking moves\n");
          tmp7 = knights.showChessSet(y);
          tmp8 = pp(xs1);
          tmp9 = NofibPrelude.append(tmp7, tmp8);
          tmp10 = NofibPrelude.append(tmp6, tmp9);
          tmp11 = NofibPrelude.append(tmp5, tmp10);
          return NofibPrelude.append(tmp3, tmp11)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    lambda = (undefined, function (x) {
      return strToInt(0, x)
    });
    scrut = NofibPrelude.map(lambda, ss);
    if (scrut instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = scrut.head;
      arg$Cons$1$ = scrut.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = arg$Cons$1$.head;
        arg$Cons$1$1 = arg$Cons$1$.tail;
        if (arg$Cons$1$1 instanceof NofibPrelude.Nil.class) {
          number = arg$Cons$0$1;
          size = arg$Cons$0$;
          tmp = knights.root(size);
          tmp1 = knights.depthSearch(tmp, knights.grow, knights.isFinished);
          tmp2 = NofibPrelude.take_lz(number, tmp1);
          return pp(tmp2)
        }
        throw runtime.safeCall(globalThis.Error("printTour error"));
      }
      throw runtime.safeCall(globalThis.Error("printTour error"));
    }
    throw runtime.safeCall(globalThis.Error("printTour error"));
  } 
  static testKnights_nofib(ss) {
    let usageString, scrut, ss1, inlinedVal, tmp, tmp1, lambda;
    usageString = "\nUsage: knights <board size> <no solutions> \n";
    ss1 = ss;
    tmp = NofibPrelude.listLen(ss1);
    tmp1 = tmp === 2;
    if (tmp1 === true) {
      lambda = (undefined, function (a, b) {
        let tmp2, s, inlinedVal1, lambda1;
        s = a;
        lambda1 = (undefined, function (a1, b1) {
          let tmp3;
          tmp3 = knights.myIsDigit(a1);
          if (tmp3 === true) {
            return b1
          }
          return false;
        });
        inlinedVal1 = NofibPrelude.foldr(lambda1, true, s);
        tmp2 = inlinedVal1;
        if (tmp2 === true) {
          return b
        }
        return false;
      });
      inlinedVal = NofibPrelude.foldr(lambda, true, ss1);
    } else {
      inlinedVal = false;
    }
    scrut = inlinedVal;
    if (scrut === true) {
      return knights.printTour(ss)
    }
    throw runtime.safeCall(globalThis.Error(usageString));
  } 
  static main() {
    let tmp, tmp1, tmp2, tmp3, tmp4;
    tmp = NofibPrelude.nofibStringToList("8");
    tmp1 = NofibPrelude.nofibStringToList("1");
    tmp2 = NofibPrelude.Cons(tmp1, NofibPrelude.Nil);
    tmp3 = NofibPrelude.Cons(tmp, tmp2);
    tmp4 = knights.testKnights_nofib(tmp3);
    return NofibPrelude.nofibListToString(tmp4)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "knights"]; 
});
let knights = knights1; export default knights;
