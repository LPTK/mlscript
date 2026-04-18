const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let mate1;
(class mate {
  static {
    mate1 = this
  }
  static {
    let tmp;
    (class Kind {
      static {
        mate.Kind = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Kind"]; 
    });
    (class King extends mate.Kind {
      static {
        new this
      }
      constructor() {
        super();
        mate.King = this;
        Object.defineProperty(this, "class", {
          value: King
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "King"]; 
    });
    (class Queen extends mate.Kind {
      static {
        new this
      }
      constructor() {
        super();
        mate.Queen = this;
        Object.defineProperty(this, "class", {
          value: Queen
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Queen"]; 
    });
    (class Rook extends mate.Kind {
      static {
        new this
      }
      constructor() {
        super();
        mate.Rook = this;
        Object.defineProperty(this, "class", {
          value: Rook
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Rook"]; 
    });
    (class Bishop extends mate.Kind {
      static {
        new this
      }
      constructor() {
        super();
        mate.Bishop = this;
        Object.defineProperty(this, "class", {
          value: Bishop
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Bishop"]; 
    });
    (class Knight extends mate.Kind {
      static {
        new this
      }
      constructor() {
        super();
        mate.Knight = this;
        Object.defineProperty(this, "class", {
          value: Knight
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Knight"]; 
    });
    (class Pawn extends mate.Kind {
      static {
        new this
      }
      constructor() {
        super();
        mate.Pawn = this;
        Object.defineProperty(this, "class", {
          value: Pawn
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Pawn"]; 
    });
    (class Colour {
      static {
        mate.Colour = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Colour"]; 
    });
    (class Black extends mate.Colour {
      static {
        new this
      }
      constructor() {
        super();
        mate.Black = this;
        Object.defineProperty(this, "class", {
          value: Black
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Black"]; 
    });
    (class White extends mate.Colour {
      static {
        new this
      }
      constructor() {
        super();
        mate.White = this;
        Object.defineProperty(this, "class", {
          value: White
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "White"]; 
    });
    this.Board = function Board(a, b) {
      return globalThis.Object.freeze(new Board.class(a, b));
    };
    (class Board {
      static {
        mate.Board.class = this
      }
      constructor(a, b) {
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Board", ["a", "b"]]; 
    });
    this.Move = function Move(a, b, c) {
      return globalThis.Object.freeze(new Move.class(a, b, c));
    };
    (class Move {
      static {
        mate.Move.class = this
      }
      constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Move", ["a", "b", "c"]]; 
    });
    this.MoveInFull = function MoveInFull(a, b, c) {
      return globalThis.Object.freeze(new MoveInFull.class(a, b, c));
    };
    (class MoveInFull {
      static {
        mate.MoveInFull.class = this
      }
      constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "MoveInFull", ["a", "b", "c"]]; 
    });
    this.Solution = function Solution(a, b) {
      return globalThis.Object.freeze(new Solution.class(a, b));
    };
    (class Solution {
      static {
        mate.Solution.class = this
      }
      constructor(a, b) {
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Solution", ["a", "b"]]; 
    });
    tmp = mate.Board(NofibPrelude.Nil, NofibPrelude.Nil);
    this.emptyBoard = tmp;
    this.Soln = function Soln(a, b) {
      return globalThis.Object.freeze(new Soln.class(a, b));
    };
    (class Soln {
      static {
        mate.Soln.class = this
      }
      constructor(a, b) {
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Soln", ["a", "b"]]; 
    });
  }
  static rqpart_rqsort_qpart_qsort(id, param0, param1, param2, param3, param4, param5) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3;
          if (param2 instanceof NofibPrelude.Nil.class) {
            tmp = mate.qsort(param0, param4, param5);
            tmp1 = NofibPrelude.Cons(param1, tmp);
            param1 = param3;
            param2 = tmp1;
            id = 3;
            continue loopLabel
          } else if (param2 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param2.head;
            arg$Cons$1$ = param2.tail;
            scrut = runtime.safeCall(param0(arg$Cons$0$, param1));
            if (scrut === true) {
              tmp2 = NofibPrelude.Cons(arg$Cons$0$, param3);
              param2 = arg$Cons$1$;
              param3 = tmp2;
              id = 0;
              continue loopLabel
            }
            tmp3 = NofibPrelude.Cons(arg$Cons$0$, param4);
            param2 = arg$Cons$1$;
            param4 = tmp3;
            id = 0;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        case 1:
          let arg$Cons$0$1, arg$Cons$1$1;
          if (param1 instanceof NofibPrelude.Nil.class) {
            return param2
          } else if (param1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = param1.head;
            arg$Cons$1$1 = param1.tail;
            if (arg$Cons$1$1 instanceof NofibPrelude.Nil.class) {
              return NofibPrelude.Cons(arg$Cons$0$1, param2)
            }
            let param2_tmp;
            param2_tmp = param2;
            param1 = arg$Cons$0$1;
            param2 = arg$Cons$1$1;
            param3 = NofibPrelude.Nil;
            param4 = NofibPrelude.Nil;
            param5 = param2_tmp;
            id = 0;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        case 2:
          let scrut1, arg$Cons$0$2, arg$Cons$1$2, tmp4, tmp5, tmp6, tmp7;
          if (param2 instanceof NofibPrelude.Nil.class) {
            tmp4 = mate.rqsort(param0, param4, param5);
            tmp5 = NofibPrelude.Cons(param1, tmp4);
            param1 = param3;
            param2 = tmp5;
            id = 1;
            continue loopLabel
          } else if (param2 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$2 = param2.head;
            arg$Cons$1$2 = param2.tail;
            scrut1 = runtime.safeCall(param0(param1, arg$Cons$0$2));
            if (scrut1 === true) {
              tmp6 = NofibPrelude.Cons(arg$Cons$0$2, param4);
              param2 = arg$Cons$1$2;
              param4 = tmp6;
              id = 2;
              continue loopLabel
            }
            tmp7 = NofibPrelude.Cons(arg$Cons$0$2, param3);
            param2 = arg$Cons$1$2;
            param3 = tmp7;
            id = 2;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        case 3:
          let arg$Cons$0$3, arg$Cons$1$3;
          if (param1 instanceof NofibPrelude.Nil.class) {
            return param2
          } else if (param1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$3 = param1.head;
            arg$Cons$1$3 = param1.tail;
            if (arg$Cons$1$3 instanceof NofibPrelude.Nil.class) {
              return NofibPrelude.Cons(arg$Cons$0$3, param2)
            }
            let param2_tmp;
            param2_tmp = param2;
            param1 = arg$Cons$0$3;
            param2 = arg$Cons$1$3;
            param3 = NofibPrelude.Nil;
            param4 = NofibPrelude.Nil;
            param5 = param2_tmp;
            id = 2;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      break;
    }
  } 
  static rqpart(le, x, ys, rle, rgt, r) {
    return mate.rqpart_rqsort_qpart_qsort(0, le, x, ys, rle, rgt, r)
  } 
  static rqsort(le, xs, r) {
    return mate.rqpart_rqsort_qpart_qsort(1, le, xs, r, undefined, undefined, undefined)
  } 
  static qpart(le, x, ys, rlt, rge, r) {
    return mate.rqpart_rqsort_qpart_qsort(2, le, x, ys, rlt, rge, r)
  } 
  static qsort(le, xs, r) {
    return mate.rqpart_rqsort_qpart_qsort(3, le, xs, r, undefined, undefined, undefined)
  } 
  static sort(l) {
    let lambda;
    lambda = (undefined, function (a, b) {
      let element0$, element0$1, tmp, tmp1;
      if (runtime.Tuple.isArrayLike(a) && a.length === 2) {
        element0$ = runtime.Tuple.get(a, 0);
        runtime.Tuple.get(a, 1);
        if (runtime.Tuple.isArrayLike(b) && b.length === 2) {
          element0$1 = runtime.Tuple.get(b, 0);
          runtime.Tuple.get(b, 1);
          tmp = NofibPrelude.listLen(element0$);
          tmp1 = NofibPrelude.listLen(element0$1);
          return tmp <= tmp1
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return mate.qsort(lambda, l, NofibPrelude.Nil)
  } 
  static kindOrder(k) {
    if (k instanceof mate.King.class) {
      return 1
    } else if (k instanceof mate.Queen.class) {
      return 2
    } else if (k instanceof mate.Rook.class) {
      return 3
    } else if (k instanceof mate.Bishop.class) {
      return 4
    } else if (k instanceof mate.Knight.class) {
      return 5
    } else if (k instanceof mate.Pawn.class) {
      return 6
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static colourOrder(c) {
    if (c instanceof mate.Black.class) {
      return 1
    }
    return 2;
  } 
  static pieceCompare(p1, p2) {
    let co, scrut, element1$, element0$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
      element0$ = runtime.Tuple.get(p1, 0);
      element1$ = runtime.Tuple.get(p1, 1);
      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
        element0$1 = runtime.Tuple.get(p2, 0);
        element1$1 = runtime.Tuple.get(p2, 1);
        tmp = mate.colourOrder(element0$);
        tmp1 = mate.colourOrder(element0$1);
        co = tmp - tmp1;
        scrut = co === 0;
        if (scrut === true) {
          tmp2 = mate.kindOrder(element1$);
          tmp3 = mate.kindOrder(element1$1);
          return tmp2 - tmp3
        }
        return co;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static squareCompare(s1, s2) {
    let ro, scrut, element1$, element0$, element1$1, element0$1;
    if (runtime.Tuple.isArrayLike(s1) && s1.length === 2) {
      element0$ = runtime.Tuple.get(s1, 0);
      element1$ = runtime.Tuple.get(s1, 1);
      if (runtime.Tuple.isArrayLike(s2) && s2.length === 2) {
        element0$1 = runtime.Tuple.get(s2, 0);
        element1$1 = runtime.Tuple.get(s2, 1);
        ro = element1$ - element1$1;
        scrut = ro === 0;
        if (scrut === true) {
          return element0$ - element0$1
        }
        return ro;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static optPieceCompare(op1, op2) {
    let arg$Some$0$, arg$Some$0$1;
    if (op1 instanceof NofibPrelude.None.class) {
      if (op2 instanceof NofibPrelude.None.class) {
        return 0
      } else if (op2 instanceof NofibPrelude.Some.class) {
        arg$Some$0$1 = op2.x;
        return - 1
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (op1 instanceof NofibPrelude.Some.class) {
      arg$Some$0$ = op1.x;
      if (op2 instanceof NofibPrelude.None.class) {
        return 1
      } else if (op2 instanceof NofibPrelude.Some.class) {
        arg$Some$0$1 = op2.x;
        return mate.pieceCompare(arg$Some$0$, arg$Some$0$1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static moveCompare(m1, m2) {
    let ac, scrut, bc, scrut1, arg$Move$0$, arg$Move$1$, arg$Move$2$, arg$Move$0$1, arg$Move$1$1, arg$Move$2$1;
    if (m1 instanceof mate.Move.class) {
      arg$Move$0$ = m1.a;
      arg$Move$1$ = m1.b;
      arg$Move$2$ = m1.c;
      if (m2 instanceof mate.Move.class) {
        arg$Move$0$1 = m2.a;
        arg$Move$1$1 = m2.b;
        arg$Move$2$1 = m2.c;
        ac = mate.squareCompare(arg$Move$0$, arg$Move$0$1);
        scrut = ac === 0;
        if (scrut === true) {
          bc = mate.optPieceCompare(arg$Move$1$, arg$Move$1$1);
          scrut1 = bc === 0;
          if (scrut1 === true) {
            return mate.optPieceCompare(arg$Move$2$, arg$Move$2$1)
          }
          return bc;
        }
        return ac;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static moveInFullCompare(mif1, mif2) {
    let pc, scrut, sc, scrut1, arg$MoveInFull$0$, arg$MoveInFull$1$, arg$MoveInFull$2$, arg$MoveInFull$0$1, arg$MoveInFull$1$1, arg$MoveInFull$2$1;
    if (mif1 instanceof mate.MoveInFull.class) {
      arg$MoveInFull$0$ = mif1.a;
      arg$MoveInFull$1$ = mif1.b;
      arg$MoveInFull$2$ = mif1.c;
      if (mif2 instanceof mate.MoveInFull.class) {
        arg$MoveInFull$0$1 = mif2.a;
        arg$MoveInFull$1$1 = mif2.b;
        arg$MoveInFull$2$1 = mif2.c;
        pc = mate.pieceCompare(arg$MoveInFull$0$, arg$MoveInFull$0$1);
        scrut = pc === 0;
        if (scrut === true) {
          sc = mate.squareCompare(arg$MoveInFull$1$, arg$MoveInFull$1$1);
          scrut1 = sc === 0;
          if (scrut1 === true) {
            return mate.moveCompare(arg$MoveInFull$2$, arg$MoveInFull$2$1)
          }
          return sc;
        }
        return pc;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static maybe(d, f, x) {
    let arg$Some$0$;
    if (x instanceof NofibPrelude.None.class) {
      return d
    } else if (x instanceof NofibPrelude.Some.class) {
      arg$Some$0$ = x.x;
      return runtime.safeCall(f(arg$Some$0$))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static isUpper(c) {
    let x, scrut, scrut1;
    x = runtime.safeCall(c.charCodeAt(0));
    scrut = x >= 65;
    if (scrut === true) {
      scrut1 = x <= 90;
      if (scrut1 === true) {
        return true
      }
      return false;
    }
    return false;
  } 
  static isLower(c) {
    let x, scrut, scrut1;
    x = runtime.safeCall(c.charCodeAt(0));
    scrut = x >= 97;
    if (scrut === true) {
      scrut1 = x <= 122;
      if (scrut1 === true) {
        return true
      }
      return false;
    }
    return false;
  } 
  static toLower(c) {
    let scrut, tmp, tmp1;
    scrut = mate.isUpper(c);
    if (scrut === true) {
      tmp = runtime.safeCall(c.charCodeAt(0));
      tmp1 = tmp + 32;
      return globalThis.String.fromCharCode(tmp1)
    }
    return c;
  } 
  static words(s) {
    let scrut, scrut1, element1$, element0$, lambda, lambda1, tmp;
    lambda = (undefined, function (x) {
      return x === " "
    });
    scrut = NofibPrelude.leaveWhile(lambda, s);
    if (scrut instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    lambda1 = (undefined, function (x) {
      return x === " "
    });
    scrut1 = NofibPrelude.break_(lambda1, scrut);
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
      element0$ = runtime.Tuple.get(scrut1, 0);
      element1$ = runtime.Tuple.get(scrut1, 1);
      tmp = mate.words(element1$);
      return NofibPrelude.Cons(element0$, tmp)
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
  static lines(s) {
    let scrut, element1$, element0$, lambda, arg$Cons$1$, tmp;
    lambda = (undefined, function (x) {
      return x === "\n"
    });
    scrut = NofibPrelude.break_(lambda, s);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      if (element1$ instanceof NofibPrelude.Nil.class) {
        tmp = NofibPrelude.Nil;
        return NofibPrelude.Cons(element0$, tmp)
      } else if (element1$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$1$ = element1$.tail;
        tmp = mate.lines(arg$Cons$1$);
        return NofibPrelude.Cons(element0$, tmp)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static any(p, ls) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (ls instanceof NofibPrelude.Nil.class) {
        return false
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        tmp = runtime.safeCall(p(arg$Cons$0$));
        if (tmp === false) {
          ls = arg$Cons$1$;
          continue loopLabel
        }
        return true;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static showColour(c) {
    if (c instanceof mate.Black.class) {
      return NofibPrelude.nofibStringToList("Black")
    }
    return NofibPrelude.nofibStringToList("White");
  } 
  static pieceAt(bd, sq) {
    let pieceAtWith, arg$Board$0$, arg$Board$1$, tmp;
    if (bd instanceof mate.Board.class) {
      arg$Board$0$ = bd.a;
      arg$Board$1$ = bd.b;
      pieceAtWith = function pieceAtWith(c, n, ls) {
        let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp1;
        if (ls instanceof NofibPrelude.Nil.class) {
          return n
        } else if (ls instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = ls.head;
          arg$Cons$1$ = ls.tail;
          if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
            element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
            element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
            scrut = NofibPrelude.eqTup2(element1$, sq);
            if (scrut === true) {
              tmp1 = globalThis.Object.freeze([
                c,
                element0$
              ]);
              return NofibPrelude.Some(tmp1)
            }
            return pieceAtWith(c, n, arg$Cons$1$);
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      tmp = pieceAtWith(mate.Black, NofibPrelude.None, arg$Board$1$);
      return pieceAtWith(mate.White, tmp, arg$Board$0$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static kindToChar(k) {
    if (k instanceof mate.King.class) {
      return "K"
    } else if (k instanceof mate.Queen.class) {
      return "Q"
    } else if (k instanceof mate.Rook.class) {
      return "R"
    } else if (k instanceof mate.Bishop.class) {
      return "B"
    } else if (k instanceof mate.Knight.class) {
      return "N"
    } else if (k instanceof mate.Pawn.class) {
      return "P"
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static pieceToChar(p) {
    let element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      element0$ = runtime.Tuple.get(p, 0);
      element1$ = runtime.Tuple.get(p, 1);
      if (element0$ instanceof mate.Black.class) {
        return mate.kindToChar(element1$)
      } else if (element0$ instanceof mate.White.class) {
        tmp = mate.kindToChar(element1$);
        return mate.toLower(tmp)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static showBoard(bd) {
    let showRank, tmp, tmp1, tmp2;
    showRank = function showRank(r) {
      let consFile, tmp3;
      consFile = function consFile(f, s) {
        let scrut, arg$Some$0$, tmp4, tmp5, tmp6, tmp7;
        tmp4 = globalThis.Object.freeze([
          f,
          r
        ]);
        scrut = mate.pieceAt(bd, tmp4);
        if (scrut instanceof NofibPrelude.None.class) {
          tmp5 = NofibPrelude.nofibStringToList(" -");
          return NofibPrelude.append(tmp5, s)
        } else if (scrut instanceof NofibPrelude.Some.class) {
          arg$Some$0$ = scrut.x;
          tmp6 = mate.pieceToChar(arg$Some$0$);
          tmp7 = NofibPrelude.Cons(tmp6, s);
          return NofibPrelude.Cons(" ", tmp7)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      tmp3 = NofibPrelude.enumFromTo(1, 8);
      return NofibPrelude.foldr(consFile, NofibPrelude.Nil, tmp3)
    };
    tmp = NofibPrelude.enumFromTo(1, 8);
    tmp1 = NofibPrelude.reverse(tmp);
    tmp2 = NofibPrelude.map(showRank, tmp1);
    return mate.unlines(tmp2)
  } 
  static showPiece(p) {
    let element1$, tmp;
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      runtime.Tuple.get(p, 0);
      element1$ = runtime.Tuple.get(p, 1);
      tmp = mate.kindToChar(element1$);
      return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static showSquare(c, x_y) {
    let element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      element0$ = runtime.Tuple.get(x_y, 0);
      element1$ = runtime.Tuple.get(x_y, 1);
      tmp = element0$ - 1;
      tmp1 = NofibPrelude.nofibStringToList("QR");
      tmp2 = NofibPrelude.nofibStringToList("QN");
      tmp3 = NofibPrelude.nofibStringToList("QB");
      tmp4 = NofibPrelude.nofibStringToList("Q");
      tmp5 = NofibPrelude.nofibStringToList("K");
      tmp6 = NofibPrelude.nofibStringToList("KB");
      tmp7 = NofibPrelude.nofibStringToList("KN");
      tmp8 = NofibPrelude.nofibStringToList("KR");
      tmp9 = NofibPrelude.Cons(tmp8, NofibPrelude.Nil);
      tmp10 = NofibPrelude.Cons(tmp7, tmp9);
      tmp11 = NofibPrelude.Cons(tmp6, tmp10);
      tmp12 = NofibPrelude.Cons(tmp5, tmp11);
      tmp13 = NofibPrelude.Cons(tmp4, tmp12);
      tmp14 = NofibPrelude.Cons(tmp3, tmp13);
      tmp15 = NofibPrelude.Cons(tmp2, tmp14);
      tmp16 = NofibPrelude.Cons(tmp1, tmp15);
      tmp17 = NofibPrelude.atIndex(tmp, tmp16);
      if (c instanceof mate.Black.class) {
        tmp18 = 9 - element1$;
      } else {
        tmp18 = element1$;
      }
      tmp19 = NofibPrelude.stringOfInt(tmp18);
      tmp20 = NofibPrelude.nofibStringToList(tmp19);
      return NofibPrelude.append(tmp17, tmp20)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static emptyAtAll(bd, e) {
    let emptyAtAllAnd, arg$Board$0$, arg$Board$1$, tmp;
    if (bd instanceof mate.Board.class) {
      arg$Board$0$ = bd.a;
      arg$Board$1$ = bd.b;
      emptyAtAllAnd = function emptyAtAllAnd(b, ls) {
        let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, element1$, tmp1;
        if (ls instanceof NofibPrelude.Nil.class) {
          return b
        } else if (ls instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = ls.head;
          arg$Cons$1$ = ls.tail;
          if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
            runtime.Tuple.get(arg$Cons$0$, 0);
            element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
            tmp1 = runtime.safeCall(e(element1$));
            scrut = ! tmp1;
            if (scrut === true) {
              scrut1 = emptyAtAllAnd(b, arg$Cons$1$);
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
      };
      tmp = emptyAtAllAnd(true, arg$Board$1$);
      return emptyAtAllAnd(tmp, arg$Board$0$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static rPa(sq, kss) {
    let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
    if (kss instanceof NofibPrelude.Nil.class) {
      throw runtime.safeCall(globalThis.Error("rPa"))
    } else if (kss instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = kss.head;
      arg$Cons$1$ = kss.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        scrut = NofibPrelude.eqTup2(element1$, sq);
        if (scrut === true) {
          return arg$Cons$1$
        }
        tmp = globalThis.Object.freeze([
          element0$,
          element1$
        ]);
        tmp1 = mate.rPa(sq, arg$Cons$1$);
        return NofibPrelude.Cons(tmp, tmp1);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static rmPieceAt(c, sq, bd) {
    let arg$Board$0$, arg$Board$1$, tmp, tmp1;
    if (bd instanceof mate.Board.class) {
      arg$Board$0$ = bd.a;
      arg$Board$1$ = bd.b;
      if (c instanceof mate.White.class) {
        tmp = mate.rPa(sq, arg$Board$0$);
        return mate.Board(tmp, arg$Board$1$)
      } else if (c instanceof mate.Black.class) {
        tmp1 = mate.rPa(sq, arg$Board$1$);
        return mate.Board(arg$Board$0$, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static putPieceAt(sq, c_k, bd) {
    let element1$, element0$, arg$Board$0$, arg$Board$1$, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(c_k) && c_k.length === 2) {
      element0$ = runtime.Tuple.get(c_k, 0);
      element1$ = runtime.Tuple.get(c_k, 1);
      if (bd instanceof mate.Board.class) {
        arg$Board$0$ = bd.a;
        arg$Board$1$ = bd.b;
        if (element0$ instanceof mate.White.class) {
          tmp = globalThis.Object.freeze([
            element1$,
            sq
          ]);
          tmp1 = NofibPrelude.Cons(tmp, arg$Board$0$);
          return mate.Board(tmp1, arg$Board$1$)
        } else if (element0$ instanceof mate.Black.class) {
          tmp2 = globalThis.Object.freeze([
            element1$,
            sq
          ]);
          tmp3 = NofibPrelude.Cons(tmp2, arg$Board$1$);
          return mate.Board(arg$Board$0$, tmp3)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static kSq(kss) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, element1$, element0$;
      if (kss instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = kss.head;
        arg$Cons$1$ = kss.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          if (element0$ instanceof mate.King.class) {
            return element1$
          }
          kss = arg$Cons$1$;
          continue loopLabel;
        }
        kss = arg$Cons$1$;
        continue loopLabel;
      } else if (kss instanceof NofibPrelude.Nil.class) {
        throw runtime.safeCall(globalThis.Error("kSq"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static kingSquare(c, bd) {
    let arg$Board$0$, arg$Board$1$;
    if (bd instanceof mate.Board.class) {
      arg$Board$0$ = bd.a;
      arg$Board$1$ = bd.b;
      if (c instanceof mate.White.class) {
        return mate.kSq(arg$Board$0$)
      } else if (c instanceof mate.Black.class) {
        return mate.kSq(arg$Board$1$)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static opponent(c) {
    if (c instanceof mate.White.class) {
      return mate.Black
    }
    return mate.White;
  } 
  static colourOf(c_k) {
    let element0$;
    if (runtime.Tuple.isArrayLike(c_k) && c_k.length === 2) {
      element0$ = runtime.Tuple.get(c_k, 0);
      runtime.Tuple.get(c_k, 1);
      return element0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static kindOf(c_k) {
    let element1$;
    if (runtime.Tuple.isArrayLike(c_k) && c_k.length === 2) {
      runtime.Tuple.get(c_k, 0);
      element1$ = runtime.Tuple.get(c_k, 1);
      return element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static onboard(p_q) {
    let scrut, scrut1, scrut2, scrut3, element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(p_q) && p_q.length === 2) {
      element0$ = runtime.Tuple.get(p_q, 0);
      element1$ = runtime.Tuple.get(p_q, 1);
      scrut = element0$ >= 1;
      if (scrut === true) {
        scrut1 = element0$ <= 8;
        if (scrut1 === true) {
          tmp = true;
        } else {
          tmp = false;
        }
      } else {
        tmp = false;
      }
      if (tmp === true) {
        scrut2 = element1$ >= 1;
        if (scrut2 === true) {
          scrut3 = element1$ <= 8;
          if (scrut3 === true) {
            tmp1 = true;
          } else {
            tmp1 = false;
          }
        } else {
          tmp1 = false;
        }
        if (tmp1 === true) {
          return true
        }
        return false;
      }
      return false;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static forcesColoured(c, bd) {
    let arg$Board$0$, arg$Board$1$;
    if (bd instanceof mate.Board.class) {
      arg$Board$0$ = bd.a;
      arg$Board$1$ = bd.b;
      if (c instanceof mate.White.class) {
        return arg$Board$0$
      } else if (c instanceof mate.Black.class) {
        return arg$Board$1$
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static showMove(withPiece, m) {
    let scrut, arg$MoveInFull$0$, arg$MoveInFull$1$, arg$MoveInFull$2$, element1$, element0$, arg$Move$0$, arg$Move$1$, arg$Move$2$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, lambda, tmp12, tmp13, lambda1, tmp14, tmp15, tmp16;
    if (m instanceof mate.MoveInFull.class) {
      arg$MoveInFull$0$ = m.a;
      arg$MoveInFull$1$ = m.b;
      arg$MoveInFull$2$ = m.c;
      if (runtime.Tuple.isArrayLike(arg$MoveInFull$0$) && arg$MoveInFull$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$MoveInFull$0$, 0);
        element1$ = runtime.Tuple.get(arg$MoveInFull$0$, 1);
        if (arg$MoveInFull$2$ instanceof mate.Move.class) {
          arg$Move$0$ = arg$MoveInFull$2$.a;
          arg$Move$1$ = arg$MoveInFull$2$.b;
          arg$Move$2$ = arg$MoveInFull$2$.c;
          if (arg$Move$1$ instanceof NofibPrelude.Some.class) {
            tmp = true;
          } else {
            tmp = false;
          }
          if (arg$Move$2$ instanceof NofibPrelude.Some.class) {
            tmp1 = true;
          } else {
            tmp1 = false;
          }
          if (withPiece === true) {
            tmp2 = globalThis.Object.freeze([
              element0$,
              element1$
            ]);
            tmp3 = mate.showPiece(tmp2);
            tmp4 = element1$ === mate.King;
            if (tmp4 === false) {
              if (element1$ instanceof mate.Pawn.class) {
                if (tmp === false) {
                  tmp6 = tmp1;
                } else {
                  tmp6 = true;
                }
                scrut = ! tmp6;
                if (scrut === true) {
                  tmp7 = true;
                } else {
                  tmp7 = false;
                }
              } else {
                tmp7 = false;
              }
              tmp5 = tmp7;
            } else {
              tmp5 = true;
            }
            if (tmp5 === true) {
              tmp8 = NofibPrelude.Nil;
            } else {
              tmp9 = mate.showSquare(element0$, arg$MoveInFull$1$);
              tmp8 = NofibPrelude.Cons("/", tmp9);
            }
            tmp10 = NofibPrelude.append(tmp3, tmp8);
          } else {
            tmp10 = NofibPrelude.Nil;
          }
          tmp11 = NofibPrelude.Cons("-", NofibPrelude.Nil);
          lambda = (undefined, function (cp) {
            let tmp17, tmp18, tmp19;
            tmp17 = mate.showPiece(cp);
            tmp18 = NofibPrelude.Cons("/", NofibPrelude.Nil);
            tmp19 = NofibPrelude.append(tmp17, tmp18);
            return NofibPrelude.Cons("x", tmp19)
          });
          tmp12 = mate.maybe(tmp11, lambda, arg$Move$1$);
          tmp13 = mate.showSquare(element0$, arg$Move$0$);
          lambda1 = (undefined, function (pp) {
            let tmp17, tmp18, tmp19;
            tmp17 = mate.showPiece(pp);
            tmp18 = NofibPrelude.Cons(")", NofibPrelude.Nil);
            tmp19 = NofibPrelude.append(tmp17, tmp18);
            return NofibPrelude.Cons("(", tmp19)
          });
          tmp14 = mate.maybe(NofibPrelude.Nil, lambda1, arg$Move$2$);
          tmp15 = NofibPrelude.append(tmp13, tmp14);
          tmp16 = NofibPrelude.append(tmp12, tmp15);
          return NofibPrelude.append(tmp10, tmp16)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static showMoveInFull(a) {
    return mate.showMove(true, a)
  } 
  static showMovesAfter(p_, mifs) {
    let arg$Cons$0$, arg$Cons$1$, arg$MoveInFull$0$, arg$MoveInFull$1$, arg$MoveInFull$2$, arg$MoveInFull$0$1, arg$MoveInFull$1$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (mifs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (mifs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = mifs.head;
      arg$Cons$1$ = mifs.tail;
      if (arg$Cons$0$ instanceof mate.MoveInFull.class) {
        arg$MoveInFull$0$ = arg$Cons$0$.a;
        arg$MoveInFull$1$ = arg$Cons$0$.b;
        arg$MoveInFull$2$ = arg$Cons$0$.c;
        if (p_ instanceof mate.MoveInFull.class) {
          arg$MoveInFull$0$1 = p_.a;
          arg$MoveInFull$1$1 = p_.b;
          tmp = NofibPrelude.nofibStringToList(", ");
          tmp1 = NofibPrelude.eqTup2(arg$MoveInFull$0$, arg$MoveInFull$0$1);
          if (tmp1 === false) {
            tmp3 = NofibPrelude.eqTup2(arg$MoveInFull$1$, arg$MoveInFull$1$1);
            tmp2 = ! tmp3;
          } else {
            tmp2 = true;
          }
          tmp4 = ! tmp2;
          tmp5 = mate.MoveInFull(arg$MoveInFull$0$, arg$MoveInFull$1$, arg$MoveInFull$2$);
          tmp6 = mate.showMove(tmp4, tmp5);
          tmp7 = mate.MoveInFull(arg$MoveInFull$0$, arg$MoveInFull$1$, arg$MoveInFull$2$);
          tmp8 = mate.showMovesAfter(tmp7, arg$Cons$1$);
          tmp9 = NofibPrelude.append(tmp6, tmp8);
          return NofibPrelude.append(tmp, tmp9)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static showMoves(mifs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (mifs instanceof NofibPrelude.Nil.class) {
      throw runtime.safeCall(globalThis.Error("showMoves"))
    } else if (mifs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = mifs.head;
      arg$Cons$1$ = mifs.tail;
      tmp = mate.showMoveInFull(arg$Cons$0$);
      tmp1 = mate.showMovesAfter(arg$Cons$0$, arg$Cons$1$);
      return NofibPrelude.append(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static sift(c, bd, ms, sqs) {
    loopLabel: while (true) {
      let scrut, scrut1, scrut2, arg$Cons$0$, arg$Cons$1$, arg$Some$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
      if (sqs instanceof NofibPrelude.Nil.class) {
        return ms
      } else if (sqs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = sqs.head;
        arg$Cons$1$ = sqs.tail;
        scrut = mate.onboard(arg$Cons$0$);
        if (scrut === true) {
          scrut1 = mate.pieceAt(bd, arg$Cons$0$);
          if (scrut1 instanceof NofibPrelude.None.class) {
            tmp = mate.Move(arg$Cons$0$, NofibPrelude.None, NofibPrelude.None);
            tmp1 = NofibPrelude.Cons(tmp, ms);
            ms = tmp1;
            sqs = arg$Cons$1$;
            continue loopLabel
          } else if (scrut1 instanceof NofibPrelude.Some.class) {
            arg$Some$0$ = scrut1.x;
            tmp2 = mate.colourOf(arg$Some$0$);
            scrut2 = tmp2 === c;
            if (scrut2 !== true) {
              tmp3 = NofibPrelude.Some(arg$Some$0$);
              tmp4 = mate.Move(arg$Cons$0$, tmp3, NofibPrelude.None);
              tmp5 = NofibPrelude.Cons(tmp4, ms);
              ms = tmp5;
              sqs = arg$Cons$1$;
              continue loopLabel
            }
          }
        }
        sqs = arg$Cons$1$;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static moveLine(bd, c, sq, inc, cont) {
    let ml, lambda;
    ml = function ml(sq1, ms) {
      let sq_, scrut, scrut1, scrut2, arg$Some$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
      sq_ = runtime.safeCall(inc(sq1));
      scrut = mate.onboard(sq_);
      if (scrut === true) {
        scrut1 = mate.pieceAt(bd, sq_);
        if (scrut1 instanceof NofibPrelude.None.class) {
          tmp = mate.Move(sq_, NofibPrelude.None, NofibPrelude.None);
          tmp1 = NofibPrelude.Cons(tmp, ms);
          return ml(sq_, tmp1)
        } else if (scrut1 instanceof NofibPrelude.Some.class) {
          arg$Some$0$ = scrut1.x;
          tmp2 = mate.colourOf(arg$Some$0$);
          tmp3 = tmp2 === c;
          scrut2 = ! tmp3;
          if (scrut2 === true) {
            tmp4 = NofibPrelude.Some(arg$Some$0$);
            tmp5 = mate.Move(sq_, tmp4, NofibPrelude.None);
            tmp6 = NofibPrelude.Cons(tmp5, ms);
            return runtime.safeCall(cont(tmp6))
          }
          return runtime.safeCall(cont(ms));
        }
        return runtime.safeCall(cont(ms));
      }
      return runtime.safeCall(cont(ms));
    };
    lambda = (undefined, function (ms) {
      return ml(sq, ms)
    });
    return lambda
  } 
  static bishopmoves(c, sq, bd) {
    let lambda, lambda1, lambda2, lambda3, lambda4, tmp, tmp1, tmp2, tmp3;
    lambda = (undefined, function (caseScrut) {
      let element1$, element0$, tmp4, tmp5;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
        element0$ = runtime.Tuple.get(caseScrut, 0);
        element1$ = runtime.Tuple.get(caseScrut, 1);
        tmp4 = element0$ - 1;
        tmp5 = element1$ + 1;
        return globalThis.Object.freeze([
          tmp4,
          tmp5
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    lambda1 = (undefined, function (caseScrut) {
      let element1$, element0$, tmp4, tmp5;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
        element0$ = runtime.Tuple.get(caseScrut, 0);
        element1$ = runtime.Tuple.get(caseScrut, 1);
        tmp4 = element0$ + 1;
        tmp5 = element1$ + 1;
        return globalThis.Object.freeze([
          tmp4,
          tmp5
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    lambda2 = (undefined, function (caseScrut) {
      let element1$, element0$, tmp4, tmp5;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
        element0$ = runtime.Tuple.get(caseScrut, 0);
        element1$ = runtime.Tuple.get(caseScrut, 1);
        tmp4 = element0$ - 1;
        tmp5 = element1$ - 1;
        return globalThis.Object.freeze([
          tmp4,
          tmp5
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    lambda3 = (undefined, function (caseScrut) {
      let element1$, element0$, tmp4, tmp5;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
        element0$ = runtime.Tuple.get(caseScrut, 0);
        element1$ = runtime.Tuple.get(caseScrut, 1);
        tmp4 = element0$ + 1;
        tmp5 = element1$ - 1;
        return globalThis.Object.freeze([
          tmp4,
          tmp5
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    lambda4 = (undefined, function (x) {
      return x
    });
    tmp = mate.moveLine(bd, c, sq, lambda3, lambda4);
    tmp1 = mate.moveLine(bd, c, sq, lambda2, tmp);
    tmp2 = mate.moveLine(bd, c, sq, lambda1, tmp1);
    tmp3 = mate.moveLine(bd, c, sq, lambda, tmp2);
    return runtime.safeCall(tmp3(NofibPrelude.Nil))
  } 
  static rookmoves(c, sq, bd) {
    let lambda, lambda1, lambda2, lambda3, lambda4, tmp, tmp1, tmp2, tmp3;
    lambda = (undefined, function (caseScrut) {
      let element1$, element0$, tmp4;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
        element0$ = runtime.Tuple.get(caseScrut, 0);
        element1$ = runtime.Tuple.get(caseScrut, 1);
        tmp4 = element0$ - 1;
        return globalThis.Object.freeze([
          tmp4,
          element1$
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    lambda1 = (undefined, function (caseScrut) {
      let element1$, element0$, tmp4;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
        element0$ = runtime.Tuple.get(caseScrut, 0);
        element1$ = runtime.Tuple.get(caseScrut, 1);
        tmp4 = element0$ + 1;
        return globalThis.Object.freeze([
          tmp4,
          element1$
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    lambda2 = (undefined, function (caseScrut) {
      let element1$, element0$, tmp4;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
        element0$ = runtime.Tuple.get(caseScrut, 0);
        element1$ = runtime.Tuple.get(caseScrut, 1);
        tmp4 = element1$ - 1;
        return globalThis.Object.freeze([
          element0$,
          tmp4
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    lambda3 = (undefined, function (caseScrut) {
      let element1$, element0$, tmp4;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
        element0$ = runtime.Tuple.get(caseScrut, 0);
        element1$ = runtime.Tuple.get(caseScrut, 1);
        tmp4 = element1$ + 1;
        return globalThis.Object.freeze([
          element0$,
          tmp4
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    lambda4 = (undefined, function (x) {
      return x
    });
    tmp = mate.moveLine(bd, c, sq, lambda3, lambda4);
    tmp1 = mate.moveLine(bd, c, sq, lambda2, tmp);
    tmp2 = mate.moveLine(bd, c, sq, lambda1, tmp1);
    tmp3 = mate.moveLine(bd, c, sq, lambda, tmp2);
    return runtime.safeCall(tmp3(NofibPrelude.Nil))
  } 
  static kingmoves(c, pq, bd) {
    let element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27;
    if (runtime.Tuple.isArrayLike(pq) && pq.length === 2) {
      element0$ = runtime.Tuple.get(pq, 0);
      element1$ = runtime.Tuple.get(pq, 1);
      tmp = element0$ - 1;
      tmp1 = element1$ + 1;
      tmp2 = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      tmp3 = element1$ + 1;
      tmp4 = globalThis.Object.freeze([
        element0$,
        tmp3
      ]);
      tmp5 = element0$ + 1;
      tmp6 = element1$ + 1;
      tmp7 = globalThis.Object.freeze([
        tmp5,
        tmp6
      ]);
      tmp8 = element0$ - 1;
      tmp9 = globalThis.Object.freeze([
        tmp8,
        element1$
      ]);
      tmp10 = element0$ + 1;
      tmp11 = globalThis.Object.freeze([
        tmp10,
        element1$
      ]);
      tmp12 = element0$ - 1;
      tmp13 = element1$ - 1;
      tmp14 = globalThis.Object.freeze([
        tmp12,
        tmp13
      ]);
      tmp15 = element1$ - 1;
      tmp16 = globalThis.Object.freeze([
        element0$,
        tmp15
      ]);
      tmp17 = element0$ + 1;
      tmp18 = element1$ - 1;
      tmp19 = globalThis.Object.freeze([
        tmp17,
        tmp18
      ]);
      tmp20 = NofibPrelude.Cons(tmp19, NofibPrelude.Nil);
      tmp21 = NofibPrelude.Cons(tmp16, tmp20);
      tmp22 = NofibPrelude.Cons(tmp14, tmp21);
      tmp23 = NofibPrelude.Cons(tmp11, tmp22);
      tmp24 = NofibPrelude.Cons(tmp9, tmp23);
      tmp25 = NofibPrelude.Cons(tmp7, tmp24);
      tmp26 = NofibPrelude.Cons(tmp4, tmp25);
      tmp27 = NofibPrelude.Cons(tmp2, tmp26);
      return mate.sift(c, bd, NofibPrelude.Nil, tmp27)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static knightmoves(c, pq, bd) {
    let element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31;
    if (runtime.Tuple.isArrayLike(pq) && pq.length === 2) {
      element0$ = runtime.Tuple.get(pq, 0);
      element1$ = runtime.Tuple.get(pq, 1);
      tmp = element0$ - 1;
      tmp1 = element1$ + 2;
      tmp2 = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      tmp3 = element0$ + 1;
      tmp4 = element1$ + 2;
      tmp5 = globalThis.Object.freeze([
        tmp3,
        tmp4
      ]);
      tmp6 = element0$ - 2;
      tmp7 = element1$ + 1;
      tmp8 = globalThis.Object.freeze([
        tmp6,
        tmp7
      ]);
      tmp9 = element0$ + 2;
      tmp10 = element1$ + 1;
      tmp11 = globalThis.Object.freeze([
        tmp9,
        tmp10
      ]);
      tmp12 = element0$ - 2;
      tmp13 = element1$ - 1;
      tmp14 = globalThis.Object.freeze([
        tmp12,
        tmp13
      ]);
      tmp15 = element0$ + 2;
      tmp16 = element1$ - 1;
      tmp17 = globalThis.Object.freeze([
        tmp15,
        tmp16
      ]);
      tmp18 = element0$ - 1;
      tmp19 = element1$ - 2;
      tmp20 = globalThis.Object.freeze([
        tmp18,
        tmp19
      ]);
      tmp21 = element0$ + 1;
      tmp22 = element1$ - 2;
      tmp23 = globalThis.Object.freeze([
        tmp21,
        tmp22
      ]);
      tmp24 = NofibPrelude.Cons(tmp23, NofibPrelude.Nil);
      tmp25 = NofibPrelude.Cons(tmp20, tmp24);
      tmp26 = NofibPrelude.Cons(tmp17, tmp25);
      tmp27 = NofibPrelude.Cons(tmp14, tmp26);
      tmp28 = NofibPrelude.Cons(tmp11, tmp27);
      tmp29 = NofibPrelude.Cons(tmp8, tmp28);
      tmp30 = NofibPrelude.Cons(tmp5, tmp29);
      tmp31 = NofibPrelude.Cons(tmp2, tmp30);
      return mate.sift(c, bd, NofibPrelude.Nil, tmp31)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static pawnmoves(c, pq, bd) {
    let promote, lscomp1, on1, on2, scrut, scrut1, scrut2, scrut3, caps, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19;
    if (runtime.Tuple.isArrayLike(pq) && pq.length === 2) {
      element0$ = runtime.Tuple.get(pq, 0);
      element1$ = runtime.Tuple.get(pq, 1);
      promote = function promote(xy, mcp) {
        let x, y, scrut4, scrut5, element1$1, element0$1, tmp20, tmp21, tmp22, tmp23, tmp24, lambda, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34;
        if (runtime.Tuple.isArrayLike(xy) && xy.length === 2) {
          element0$1 = runtime.Tuple.get(xy, 0);
          element1$1 = runtime.Tuple.get(xy, 1);
          y = element1$1;
          x = element0$1;
          if (c instanceof mate.Black.class) {
            tmp20 = true;
          } else {
            tmp20 = false;
          }
          if (tmp20 === true) {
            scrut4 = y === 1;
            if (scrut4 === true) {
              tmp21 = true;
            } else {
              tmp21 = false;
            }
          } else {
            tmp21 = false;
          }
          if (tmp21 === false) {
            if (c instanceof mate.White.class) {
              tmp23 = true;
            } else {
              tmp23 = false;
            }
            if (tmp23 === true) {
              scrut5 = y === 8;
              if (scrut5 === true) {
                tmp24 = true;
              } else {
                tmp24 = false;
              }
            } else {
              tmp24 = false;
            }
            tmp22 = tmp24;
          } else {
            tmp22 = true;
          }
          if (tmp22 === true) {
            lambda = (undefined, function (param) {
              let tmp35, tmp36;
              tmp35 = globalThis.Object.freeze([
                x,
                y
              ]);
              tmp36 = NofibPrelude.Some(param);
              return mate.Move(tmp35, mcp, tmp36)
            });
            tmp25 = globalThis.Object.freeze([
              c,
              mate.Queen
            ]);
            tmp26 = globalThis.Object.freeze([
              c,
              mate.Rook
            ]);
            tmp27 = globalThis.Object.freeze([
              c,
              mate.Bishop
            ]);
            tmp28 = globalThis.Object.freeze([
              c,
              mate.Knight
            ]);
            tmp29 = NofibPrelude.Cons(tmp28, NofibPrelude.Nil);
            tmp30 = NofibPrelude.Cons(tmp27, tmp29);
            tmp31 = NofibPrelude.Cons(tmp26, tmp30);
            tmp32 = NofibPrelude.Cons(tmp25, tmp31);
            return NofibPrelude.map(lambda, tmp32)
          }
          tmp33 = globalThis.Object.freeze([
            x,
            y
          ]);
          tmp34 = mate.Move(tmp33, mcp, NofibPrelude.None);
          return NofibPrelude.Cons(tmp34, NofibPrelude.Nil);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      lscomp1 = function lscomp1(ls) {
        let lscomp2, sq, sqs, arg$Cons$0$, arg$Cons$1$, tmp20, tmp21;
        if (ls instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (ls instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = ls.head;
          arg$Cons$1$ = ls.tail;
          sqs = arg$Cons$1$;
          sq = arg$Cons$0$;
          lscomp2 = function lscomp2(ls1) {
            let scrut4, arg$Cons$0$1, arg$Cons$1$1, arg$Some$0$, tmp22, tmp23, tmp24, tmp25, tmp26;
            if (ls1 instanceof NofibPrelude.Nil.class) {
              return lscomp1(sqs)
            } else if (ls1 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$1 = ls1.head;
              arg$Cons$1$1 = ls1.tail;
              if (arg$Cons$0$1 instanceof NofibPrelude.Some.class) {
                arg$Some$0$ = arg$Cons$0$1.x;
                tmp22 = mate.colourOf(arg$Some$0$);
                tmp23 = tmp22 === c;
                scrut4 = ! tmp23;
                if (scrut4 === true) {
                  tmp24 = NofibPrelude.Some(arg$Some$0$);
                  tmp25 = promote(sq, tmp24);
                  tmp26 = lscomp2(arg$Cons$1$1);
                  return NofibPrelude.Cons(tmp25, tmp26)
                }
                return lscomp2(arg$Cons$1$1);
              }
              return lscomp2(arg$Cons$1$1);
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          };
          tmp20 = mate.pieceAt(bd, sq);
          tmp21 = NofibPrelude.Cons(tmp20, NofibPrelude.Nil);
          return lscomp2(tmp21)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      if (c instanceof mate.White.class) {
        tmp = 1;
      } else {
        tmp = - 1;
      }
      tmp1 = element1$ + tmp;
      on1 = globalThis.Object.freeze([
        element0$,
        tmp1
      ]);
      tmp2 = 2 * tmp;
      tmp3 = element1$ + tmp2;
      on2 = globalThis.Object.freeze([
        element0$,
        tmp3
      ]);
      scrut = mate.pieceAt(bd, on1);
      if (scrut instanceof NofibPrelude.None.class) {
        tmp4 = promote(on1, NofibPrelude.None);
        scrut1 = element1$ === 2;
        if (scrut1 === true) {
          if (c instanceof mate.White.class) {
            tmp5 = true;
          } else {
            tmp5 = false;
          }
        } else {
          tmp5 = false;
        }
        if (tmp5 === false) {
          scrut2 = element1$ === 7;
          if (scrut2 === true) {
            if (c instanceof mate.Black.class) {
              tmp7 = true;
            } else {
              tmp7 = false;
            }
          } else {
            tmp7 = false;
          }
          tmp6 = tmp7;
        } else {
          tmp6 = true;
        }
        if (tmp6 === true) {
          scrut3 = mate.pieceAt(bd, on2);
          if (scrut3 instanceof NofibPrelude.None.class) {
            tmp8 = mate.Move(on2, NofibPrelude.None, NofibPrelude.None);
            tmp9 = NofibPrelude.Cons(tmp8, NofibPrelude.Nil);
          } else {
            tmp9 = NofibPrelude.Nil;
          }
        } else {
          tmp9 = NofibPrelude.Nil;
        }
        tmp10 = NofibPrelude.append(tmp4, tmp9);
      } else {
        tmp10 = NofibPrelude.Nil;
      }
      tmp11 = element0$ + 1;
      tmp12 = element1$ + tmp;
      tmp13 = globalThis.Object.freeze([
        tmp11,
        tmp12
      ]);
      tmp14 = element0$ - 1;
      tmp15 = element1$ + tmp;
      tmp16 = globalThis.Object.freeze([
        tmp14,
        tmp15
      ]);
      tmp17 = NofibPrelude.Cons(tmp16, NofibPrelude.Nil);
      tmp18 = NofibPrelude.Cons(tmp13, tmp17);
      tmp19 = lscomp1(tmp18);
      caps = NofibPrelude.concat(tmp19);
      return NofibPrelude.append(tmp10, caps)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static queenmoves(c, sq, bd) {
    let tmp, tmp1;
    tmp = mate.bishopmoves(c, sq, bd);
    tmp1 = mate.rookmoves(c, sq, bd);
    return NofibPrelude.append(tmp, tmp1)
  } 
  static kingincheck(c, bd) {
    let givesCheck, tmp, tmp1;
    givesCheck = function givesCheck(kxy) {
      let kthreat, x, y, element1$, element0$, element1$1, element0$1;
      if (runtime.Tuple.isArrayLike(kxy) && kxy.length === 2) {
        element0$ = runtime.Tuple.get(kxy, 0);
        element1$ = runtime.Tuple.get(kxy, 1);
        if (runtime.Tuple.isArrayLike(element1$) && element1$.length === 2) {
          element0$1 = runtime.Tuple.get(element1$, 0);
          element1$1 = runtime.Tuple.get(element1$, 1);
          y = element1$1;
          x = element0$1;
          kthreat = function kthreat(param) {
            let scrut, yk, xk, scrut1, scrut2, element1$2, element0$2, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda, tmp9, lambda1, tmp10, tmp11, tmp12, tmp13, lambda2, tmp14, tmp15, tmp16, lambda3, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32;
            scrut = mate.kingSquare(c, bd);
            if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
              element0$2 = runtime.Tuple.get(scrut, 0);
              element1$2 = runtime.Tuple.get(scrut, 1);
              yk = element1$2;
              xk = element0$2;
              if (param instanceof mate.King.class) {
                tmp2 = x - xk;
                tmp3 = NofibPrelude.abs(tmp2);
                scrut1 = tmp3 <= 1;
                if (scrut1 === true) {
                  tmp4 = y - yk;
                  tmp5 = NofibPrelude.abs(tmp4);
                  scrut2 = tmp5 <= 1;
                  if (scrut2 === true) {
                    return true
                  }
                  return false;
                }
                return false;
              } else if (param instanceof mate.Queen.class) {
                tmp6 = kthreat(mate.Rook);
                if (tmp6 === false) {
                  return kthreat(mate.Bishop)
                }
                return true;
              } else if (param instanceof mate.Rook.class) {
                tmp7 = x === xk;
                if (tmp7 === true) {
                  lambda = (undefined, function (caseScrut) {
                    let element1$3, element0$3, tmp33, tmp34, tmp35, tmp36;
                    if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
                      element0$3 = runtime.Tuple.get(caseScrut, 0);
                      element1$3 = runtime.Tuple.get(caseScrut, 1);
                      tmp33 = element0$3 === xk;
                      if (tmp33 === true) {
                        tmp34 = NofibPrelude.min(y, yk);
                        tmp35 = tmp34 < element1$3;
                        if (tmp35 === true) {
                          tmp36 = NofibPrelude.max(y, yk);
                          return element1$3 < tmp36
                        }
                        return false;
                      }
                      return false;
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  });
                  tmp8 = mate.emptyAtAll(bd, lambda);
                } else {
                  tmp8 = false;
                }
                if (tmp8 === false) {
                  tmp9 = y === yk;
                  if (tmp9 === true) {
                    lambda1 = (undefined, function (caseScrut) {
                      let element1$3, element0$3, tmp33, tmp34, tmp35, tmp36;
                      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
                        element0$3 = runtime.Tuple.get(caseScrut, 0);
                        element1$3 = runtime.Tuple.get(caseScrut, 1);
                        tmp33 = element1$3 === yk;
                        if (tmp33 === true) {
                          tmp34 = NofibPrelude.min(x, xk);
                          tmp35 = tmp34 < element0$3;
                          if (tmp35 === true) {
                            tmp36 = NofibPrelude.max(x, xk);
                            return element0$3 < tmp36
                          }
                          return false;
                        }
                        return false;
                      }
                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                    });
                    return mate.emptyAtAll(bd, lambda1)
                  }
                  return false;
                }
                return true;
              } else if (param instanceof mate.Bishop.class) {
                tmp10 = x + y;
                tmp11 = xk + yk;
                tmp12 = tmp10 === tmp11;
                if (tmp12 === true) {
                  lambda2 = (undefined, function (caseScrut) {
                    let element1$3, element0$3, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38;
                    if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
                      element0$3 = runtime.Tuple.get(caseScrut, 0);
                      element1$3 = runtime.Tuple.get(caseScrut, 1);
                      tmp33 = element0$3 + element1$3;
                      tmp34 = xk + yk;
                      tmp35 = tmp33 === tmp34;
                      if (tmp35 === true) {
                        tmp36 = NofibPrelude.min(x, xk);
                        tmp37 = tmp36 < element0$3;
                        if (tmp37 === true) {
                          tmp38 = NofibPrelude.max(x, xk);
                          return element0$3 < tmp38
                        }
                        return false;
                      }
                      return false;
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  });
                  tmp13 = mate.emptyAtAll(bd, lambda2);
                } else {
                  tmp13 = false;
                }
                if (tmp13 === false) {
                  tmp14 = x - y;
                  tmp15 = xk - yk;
                  tmp16 = tmp14 === tmp15;
                  if (tmp16 === true) {
                    lambda3 = (undefined, function (caseScrut) {
                      let element1$3, element0$3, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38;
                      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
                        element0$3 = runtime.Tuple.get(caseScrut, 0);
                        element1$3 = runtime.Tuple.get(caseScrut, 1);
                        tmp33 = element0$3 - element1$3;
                        tmp34 = xk - yk;
                        tmp35 = tmp33 === tmp34;
                        if (tmp35 === true) {
                          tmp36 = NofibPrelude.min(x, xk);
                          tmp37 = tmp36 < element0$3;
                          if (tmp37 === true) {
                            tmp38 = NofibPrelude.max(x, xk);
                            return element0$3 < tmp38
                          }
                          return false;
                        }
                        return false;
                      }
                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                    });
                    return mate.emptyAtAll(bd, lambda3)
                  }
                  return false;
                }
                return true;
              } else if (param instanceof mate.Knight.class) {
                tmp17 = x - xk;
                tmp18 = NofibPrelude.abs(tmp17);
                tmp19 = tmp18 === 2;
                if (tmp19 === true) {
                  tmp21 = y - yk;
                  tmp22 = NofibPrelude.abs(tmp21);
                  tmp20 = tmp22 === 1;
                } else {
                  tmp20 = false;
                }
                if (tmp20 === false) {
                  tmp23 = x - xk;
                  tmp24 = NofibPrelude.abs(tmp23);
                  tmp25 = tmp24 === 1;
                  if (tmp25 === true) {
                    tmp26 = y - yk;
                    tmp27 = NofibPrelude.abs(tmp26);
                    return tmp27 === 2
                  }
                  return false;
                }
                return true;
              } else if (param instanceof mate.Pawn.class) {
                tmp28 = x - xk;
                tmp29 = NofibPrelude.abs(tmp28);
                tmp30 = tmp29 === 1;
                if (tmp30 === true) {
                  if (c instanceof mate.Black.class) {
                    tmp31 = y + 1;
                    return yk === tmp31
                  }
                  tmp32 = y - 1;
                  return yk === tmp32;
                }
                return false;
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          };
          return kthreat(element0$)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = mate.opponent(c);
    tmp1 = mate.forcesColoured(tmp, bd);
    return mate.any(givesCheck, tmp1)
  } 
  static tryMove(c, ksq, m, bd) {
    let sq_, p, bd1, p_, bd2, scrut, element1$, element0$, arg$Move$0$, arg$Move$1$, arg$Move$2$, lambda, tmp, lambda1, tmp1, tmp2, tmp3, tmp4;
    if (runtime.Tuple.isArrayLike(ksq) && ksq.length === 2) {
      element0$ = runtime.Tuple.get(ksq, 0);
      element1$ = runtime.Tuple.get(ksq, 1);
      if (m instanceof mate.Move.class) {
        arg$Move$0$ = m.a;
        arg$Move$1$ = m.b;
        arg$Move$2$ = m.c;
        sq_ = arg$Move$0$;
        p = globalThis.Object.freeze([
          c,
          element0$
        ]);
        bd1 = mate.rmPieceAt(c, element1$, bd);
        lambda = (undefined, function (x) {
          return x
        });
        p_ = mate.maybe(p, lambda, arg$Move$2$);
        tmp = mate.putPieceAt(sq_, p_, bd1);
        lambda1 = (undefined, function (dummy) {
          let tmp5, tmp6;
          tmp5 = mate.opponent(c);
          tmp6 = mate.rmPieceAt(tmp5, sq_, bd1);
          return mate.putPieceAt(sq_, p_, tmp6)
        });
        bd2 = mate.maybe(tmp, lambda1, arg$Move$1$);
        tmp1 = mate.kingincheck(c, bd2);
        scrut = ! tmp1;
        if (scrut === true) {
          tmp2 = mate.Move(sq_, arg$Move$1$, arg$Move$2$);
          tmp3 = mate.MoveInFull(p, element1$, tmp2);
          tmp4 = globalThis.Object.freeze([
            tmp3,
            bd2
          ]);
          return NofibPrelude.Some(tmp4)
        }
        return NofibPrelude.None;
      }
      throw runtime.safeCall(globalThis.Error(m));
    }
    throw runtime.safeCall(globalThis.Error(m));
  } 
  static rawmoves(c, ksq, bd) {
    let res, element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(ksq) && ksq.length === 2) {
      element0$ = runtime.Tuple.get(ksq, 0);
      element1$ = runtime.Tuple.get(ksq, 1);
      if (element0$ instanceof mate.King.class) {
        tmp = mate.kingmoves;
      } else if (element0$ instanceof mate.Queen.class) {
        tmp = mate.queenmoves;
      } else if (element0$ instanceof mate.Rook.class) {
        tmp = mate.rookmoves;
      } else if (element0$ instanceof mate.Bishop.class) {
        tmp = mate.bishopmoves;
      } else if (element0$ instanceof mate.Knight.class) {
        tmp = mate.knightmoves;
      } else if (element0$ instanceof mate.Pawn.class) {
        tmp = mate.pawnmoves;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      res = runtime.safeCall(tmp(c, element1$, bd));
      return res
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static moveDetailsFor(c, bd) {
    let lambda, tmp;
    lambda = (undefined, function (ksq, ms) {
      let lambda1, tmp1;
      lambda1 = (undefined, function (rm, ms_) {
        let lambda2, lambda3, tmp2, tmp3;
        lambda2 = (undefined, function (x) {
          return x
        });
        lambda3 = (undefined, function (h) {
          let lambda4;
          lambda4 = (undefined, function (t) {
            return NofibPrelude.Cons(h, t)
          });
          return lambda4
        });
        tmp2 = mate.tryMove(c, ksq, rm, bd);
        tmp3 = mate.maybe(lambda2, lambda3, tmp2);
        return runtime.safeCall(tmp3(ms_))
      });
      tmp1 = mate.rawmoves(c, ksq, bd);
      return NofibPrelude.foldr(lambda1, ms, tmp1)
    });
    tmp = mate.forcesColoured(c, bd);
    return NofibPrelude.foldr(lambda, NofibPrelude.Nil, tmp)
  } 
  static comment(s) {
    let tmp, tmp1, tmp2;
    if (s instanceof NofibPrelude.Nil.class) {
      tmp = true;
    } else {
      tmp = false;
    }
    if (tmp === false) {
      tmp1 = NofibPrelude.take(2, s);
      tmp2 = NofibPrelude.nofibStringToList("--");
      return NofibPrelude.listEq(tmp1, tmp2)
    }
    return true;
  } 
  static last(ls) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
          return arg$Cons$0$
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static intOfString(s) {
    let tmp;
    tmp = NofibPrelude.nofibListToString(s);
    return runtime.safeCall(globalThis.parseInt(tmp))
  } 
  static parseGoal(ls) {
    let ws, scrut, n, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3;
    if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        ws = mate.words(arg$Cons$0$);
        tmp = NofibPrelude.head(ws);
        tmp1 = NofibPrelude.nofibStringToList("Black");
        scrut = NofibPrelude.listEq(tmp, tmp1);
        if (scrut === true) {
          tmp2 = mate.Black;
        } else {
          tmp2 = mate.White;
        }
        tmp3 = mate.last(ws);
        n = mate.intOfString(tmp3);
        return globalThis.Object.freeze([
          tmp2,
          n
        ])
      }
      throw runtime.safeCall(globalThis.Error("parseGoal"));
    }
    throw runtime.safeCall(globalThis.Error("parseGoal"));
  } 
  static parseSquare(r, f, c) {
    let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4;
    scrut = c === "-";
    if (scrut === true) {
      return NofibPrelude.Nil
    }
    scrut1 = mate.isUpper(c);
    if (scrut1 === true) {
      tmp = mate.Black;
    } else {
      tmp = mate.White;
    }
    scrut2 = mate.toLower(c);
    scrut3 = scrut2 === "k";
    if (scrut3 === true) {
      tmp1 = mate.King;
    } else {
      scrut4 = scrut2 === "q";
      if (scrut4 === true) {
        tmp1 = mate.Queen;
      } else {
        scrut5 = scrut2 === "r";
        if (scrut5 === true) {
          tmp1 = mate.Rook;
        } else {
          scrut6 = scrut2 === "b";
          if (scrut6 === true) {
            tmp1 = mate.Bishop;
          } else {
            scrut7 = scrut2 === "n";
            if (scrut7 === true) {
              tmp1 = mate.Knight;
            } else {
              scrut8 = scrut2 === "p";
              if (scrut8 === true) {
                tmp1 = mate.Pawn;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            }
          }
        }
      }
    }
    tmp2 = globalThis.Object.freeze([
      tmp,
      tmp1
    ]);
    tmp3 = globalThis.Object.freeze([
      f,
      r
    ]);
    tmp4 = globalThis.Object.freeze([
      tmp2,
      tmp3
    ]);
    return NofibPrelude.Cons(tmp4, NofibPrelude.Nil);
  } 
  static parseRank(r, x) {
    let lambda, tmp, lambda1, tmp1, tmp2;
    lambda = (undefined, function (a, b) {
      return mate.parseSquare(r, a, b)
    });
    tmp = NofibPrelude.enumFromTo(1, 8);
    lambda1 = (undefined, function (pp) {
      let tmp3;
      tmp3 = pp === " ";
      return ! tmp3
    });
    tmp1 = NofibPrelude.filter(lambda1, x);
    tmp2 = NofibPrelude.zipWith(lambda, tmp, tmp1);
    return NofibPrelude.concat(tmp2)
  } 
  static parseBoard(ls) {
    let addPiece, tmp, tmp1, tmp2, tmp3;
    addPiece = function addPiece(p_sq, x) {
      let element1$, element0$;
      if (runtime.Tuple.isArrayLike(p_sq) && p_sq.length === 2) {
        element0$ = runtime.Tuple.get(p_sq, 0);
        element1$ = runtime.Tuple.get(p_sq, 1);
        return mate.putPieceAt(element1$, element0$, x)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = NofibPrelude.enumFromTo(1, 8);
    tmp1 = NofibPrelude.reverse(tmp);
    tmp2 = NofibPrelude.zipWith(mate.parseRank, tmp1, ls);
    tmp3 = NofibPrelude.concat(tmp2);
    return NofibPrelude.foldr(addPiece, mate.emptyBoard, tmp3)
  } 
  static parseProblem(s) {
    let bdtxt_gltxt, bd, gl, lambda, tmp, element1$, element0$;
    lambda = (undefined, function (x) {
      let tmp1;
      tmp1 = mate.comment(x);
      return ! tmp1
    });
    tmp = NofibPrelude.filter(lambda, s);
    bdtxt_gltxt = NofibPrelude.splitAt(8, tmp);
    if (runtime.Tuple.isArrayLike(bdtxt_gltxt) && bdtxt_gltxt.length === 2) {
      element0$ = runtime.Tuple.get(bdtxt_gltxt, 0);
      element1$ = runtime.Tuple.get(bdtxt_gltxt, 1);
      bd = mate.parseBoard(element0$);
      gl = mate.parseGoal(element1$);
      return globalThis.Object.freeze([
        bd,
        gl
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static readProblem(s) {
    let tmp;
    tmp = mate.lines(s);
    return mate.parseProblem(tmp)
  } 
  static foldr_lz(f, a, x) {
    let t, arg$Cons$0$, arg$Cons$1$, lambda, tmp;
    if (x instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = x.head;
      arg$Cons$1$ = x.tail;
      t = arg$Cons$1$;
      lambda = (undefined, function () {
        return mate.foldr_lz(f, a, t)
      });
      tmp = NofibPrelude.lazy(lambda);
      return runtime.safeCall(f(arg$Cons$0$, tmp))
    } else if (x instanceof NofibPrelude.Nil.class) {
      return a
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static replies(bd, c, n) {
    let solnAnd, mds, scrut, scrut1, scrut2, tmp;
    solnAnd = function solnAnd(mifb, rest) {
      let sm, scrut3, element1$, element0$, tmp1, tmp2, arg$Some$0$, arg$Some$0$1, tmp3, tmp4;
      if (runtime.Tuple.isArrayLike(mifb) && mifb.length === 2) {
        element0$ = runtime.Tuple.get(mifb, 0);
        element1$ = runtime.Tuple.get(mifb, 1);
        tmp1 = mate.opponent(c);
        tmp2 = n - 1;
        sm = mate.solution(element1$, tmp1, tmp2);
        if (sm instanceof NofibPrelude.None.class) {
          return NofibPrelude.None
        } else if (sm instanceof NofibPrelude.Some.class) {
          arg$Some$0$ = sm.x;
          scrut3 = NofibPrelude.force(rest);
          if (scrut3 instanceof NofibPrelude.None.class) {
            return NofibPrelude.None
          } else if (scrut3 instanceof NofibPrelude.Some.class) {
            arg$Some$0$1 = scrut3.x;
            tmp3 = globalThis.Object.freeze([
              element0$,
              arg$Some$0$
            ]);
            tmp4 = NofibPrelude.Cons(tmp3, arg$Some$0$1);
            return NofibPrelude.Some(tmp4)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    mds = mate.moveDetailsFor(c, bd);
    scrut = n === 0;
    if (scrut === true) {
      scrut1 = NofibPrelude.null_(mds);
      if (scrut1 === true) {
        return NofibPrelude.Some(NofibPrelude.Nil)
      }
      return NofibPrelude.None;
    }
    scrut2 = n > 0;
    if (scrut2 === true) {
      tmp = NofibPrelude.Some(NofibPrelude.Nil);
      return mate.foldr_lz(solnAnd, tmp, mds)
    }
    throw runtime.safeCall(globalThis.Error("n < 0"));
  } 
  static solution(bd, c, n) {
    let solnOr, scrut, mds;
    solnOr = function solnOr(mifb, other) {
      let rsm, scrut1, element1$, element0$, tmp, tmp1, arg$Some$0$, tmp2, tmp3, tmp4;
      if (runtime.Tuple.isArrayLike(mifb) && mifb.length === 2) {
        element0$ = runtime.Tuple.get(mifb, 0);
        element1$ = runtime.Tuple.get(mifb, 1);
        tmp = mate.opponent(c);
        tmp1 = n - 1;
        rsm = mate.replies(element1$, tmp, tmp1);
        if (rsm instanceof NofibPrelude.None.class) {
          return NofibPrelude.force(other)
        } else if (rsm instanceof NofibPrelude.Some.class) {
          arg$Some$0$ = rsm.x;
          if (arg$Some$0$ instanceof NofibPrelude.Nil.class) {
            tmp2 = mate.opponent(c);
            scrut1 = mate.kingincheck(tmp2, element1$);
            if (scrut1 === true) {
              tmp3 = mate.Solution(element0$, NofibPrelude.Nil);
              return NofibPrelude.Some(tmp3)
            }
            return NofibPrelude.force(other);
          }
          tmp4 = mate.Solution(element0$, arg$Some$0$);
          return NofibPrelude.Some(tmp4);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    scrut = n > 0;
    if (scrut === true) {
      mds = mate.moveDetailsFor(c, bd);
      return mate.foldr_lz(solnOr, NofibPrelude.None, mds)
    }
    throw runtime.safeCall(globalThis.Error("n <= 0"));
  } 
  static tab(n) {
    let scrut, tmp, tmp1;
    scrut = n <= 0;
    if (scrut === true) {
      return NofibPrelude.Nil
    }
    tmp = n - 1;
    tmp1 = mate.tab(tmp);
    return NofibPrelude.Cons(" ", tmp1);
  } 
  static showReplies(rs, n) {
    let arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
    if (rs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (rs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = rs.head;
      arg$Cons$1$ = rs.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        tmp = mate.tab(n);
        tmp1 = NofibPrelude.nofibStringToList("if ");
        tmp2 = NofibPrelude.null_(arg$Cons$1$);
        if (tmp2 === true) {
          tmp4 = NofibPrelude.listLen(element0$);
          tmp3 = tmp4 > 1;
        } else {
          tmp3 = false;
        }
        if (tmp3 === true) {
          tmp5 = NofibPrelude.nofibStringToList("others");
        } else {
          tmp6 = mate.showMoves(element0$);
          tmp7 = NofibPrelude.nofibStringToList("; ");
          tmp8 = n + 1;
          tmp9 = mate.showSoln(element1$, tmp8);
          tmp10 = mate.showReplies(arg$Cons$1$, n);
          tmp11 = NofibPrelude.append(tmp9, tmp10);
          tmp12 = NofibPrelude.append(tmp7, tmp11);
          tmp5 = NofibPrelude.append(tmp6, tmp12);
        }
        tmp13 = NofibPrelude.append(tmp1, tmp5);
        return NofibPrelude.append(tmp, tmp13)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static showSoln(s, n) {
    let scrut, arg$Soln$0$, arg$Soln$1$, tmp, tmp1, tmp2, tmp3, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17;
    if (s instanceof mate.Soln.class) {
      arg$Soln$0$ = s.a;
      arg$Soln$1$ = s.b;
      tmp = NofibPrelude.stringOfInt(n);
      tmp1 = NofibPrelude.nofibStringToList(tmp);
      tmp2 = NofibPrelude.nofibStringToList(". ");
      tmp3 = mate.showMoveInFull(arg$Soln$0$);
      split_root$: {
        if (arg$Soln$1$ instanceof NofibPrelude.Nil.class) {
          tmp4 = NofibPrelude.nofibStringToList("++\n");
          break split_root$
        } else if (arg$Soln$1$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = arg$Soln$1$.head;
          arg$Cons$1$ = arg$Soln$1$.tail;
          if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
            element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
            element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
            if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
              tmp5 = NofibPrelude.nofibStringToList(", ");
              tmp6 = NofibPrelude.listLen(element0$);
              scrut = tmp6 > 1;
              if (scrut === true) {
                tmp7 = NofibPrelude.nofibStringToList("...");
              } else {
                tmp7 = mate.showMoves(element0$);
              }
              tmp8 = NofibPrelude.nofibStringToList("; ");
              tmp9 = n + 1;
              tmp10 = mate.showSoln(element1$, tmp9);
              tmp11 = NofibPrelude.append(tmp8, tmp10);
              tmp12 = NofibPrelude.append(tmp7, tmp11);
              tmp4 = NofibPrelude.append(tmp5, tmp12);
              break split_root$
            }
          }
        }
        tmp13 = NofibPrelude.nofibStringToList(",\n");
        tmp14 = mate.sort(arg$Soln$1$);
        tmp15 = mate.showReplies(tmp14, n);
        tmp4 = NofibPrelude.append(tmp13, tmp15);
      }
      tmp16 = NofibPrelude.append(tmp3, tmp4);
      tmp17 = NofibPrelude.append(tmp2, tmp16);
      return NofibPrelude.append(tmp1, tmp17)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static compact(s) {
    let arg$Solution$0$, arg$Solution$1$, tmp;
    if (s instanceof mate.Solution.class) {
      arg$Solution$0$ = s.a;
      arg$Solution$1$ = s.b;
      tmp = NofibPrelude.foldr(mate.insertCompact, NofibPrelude.Nil, arg$Solution$1$);
      return mate.Soln(arg$Solution$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static insertCompact(mif_s, ls) {
    let insert, ic, mif, cs, element1$, element0$;
    if (runtime.Tuple.isArrayLike(mif_s) && mif_s.length === 2) {
      element0$ = runtime.Tuple.get(mif_s, 0);
      element1$ = runtime.Tuple.get(mif_s, 1);
      mif = element0$;
      insert = function insert(x, ls1) {
        let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2;
        if (ls1 instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Cons(x, NofibPrelude.Nil)
        } else if (ls1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = ls1.head;
          arg$Cons$1$ = ls1.tail;
          tmp = mate.moveInFullCompare(x, arg$Cons$0$);
          scrut = tmp > 0;
          if (scrut === true) {
            tmp1 = insert(x, arg$Cons$1$);
            return NofibPrelude.Cons(arg$Cons$0$, tmp1)
          }
          tmp2 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
          return NofibPrelude.Cons(x, tmp2);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      ic = function ic(ls1) {
        let a, b, scrut, scrut1, scrut2, arg$Cons$0$, arg$Cons$1$, element1$1, element0$1, tmp, tmp1, lambda, lambda1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, lambda2, lambda3, tmp8, tmp9, tmp10;
        if (ls1 instanceof NofibPrelude.Nil.class) {
          tmp = NofibPrelude.Cons(mif, NofibPrelude.Nil);
          tmp1 = globalThis.Object.freeze([
            tmp,
            cs
          ]);
          return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
        } else if (ls1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = ls1.head;
          arg$Cons$1$ = ls1.tail;
          if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
            element0$1 = runtime.Tuple.get(arg$Cons$0$, 0);
            element1$1 = runtime.Tuple.get(arg$Cons$0$, 1);
            a = mate.showSoln(cs, 1);
            b = mate.showSoln(element1$1, 1);
            lambda = (undefined, function (x, y) {
              return x < y
            });
            lambda1 = (undefined, function (x, y) {
              return x > y
            });
            scrut = NofibPrelude.ltList(a, b, lambda, lambda1);
            if (scrut === true) {
              tmp2 = NofibPrelude.Cons(mif, NofibPrelude.Nil);
              tmp3 = globalThis.Object.freeze([
                tmp2,
                cs
              ]);
              tmp4 = globalThis.Object.freeze([
                element0$1,
                element1$1
              ]);
              tmp5 = NofibPrelude.Cons(tmp4, arg$Cons$1$);
              return NofibPrelude.Cons(tmp3, tmp5)
            }
            scrut1 = NofibPrelude.listEq(a, b);
            if (scrut1 === true) {
              tmp6 = insert(mif, element0$1);
              tmp7 = globalThis.Object.freeze([
                tmp6,
                cs
              ]);
              return NofibPrelude.Cons(tmp7, arg$Cons$1$)
            }
            lambda2 = (undefined, function (x, y) {
              return x < y
            });
            lambda3 = (undefined, function (x, y) {
              return x > y
            });
            tmp8 = NofibPrelude.ltList(a, b, lambda2, lambda3);
            scrut2 = ! tmp8;
            if (scrut2 === true) {
              tmp9 = globalThis.Object.freeze([
                element0$1,
                element1$1
              ]);
              tmp10 = ic(arg$Cons$1$);
              return NofibPrelude.Cons(tmp9, tmp10)
            }
            throw runtime.safeCall(globalThis.Error("compare error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      cs = mate.compact(element1$);
      return ic(ls)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static showResult(s) {
    let arg$Some$0$, tmp;
    if (s instanceof NofibPrelude.None.class) {
      return NofibPrelude.nofibStringToList("No solution!")
    } else if (s instanceof NofibPrelude.Some.class) {
      arg$Some$0$ = s.x;
      tmp = mate.compact(arg$Some$0$);
      return mate.showSoln(tmp, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static solve(bd, c, n) {
    let tmp, tmp1, tmp2;
    tmp = 2 * n;
    tmp1 = tmp - 1;
    tmp2 = mate.solution(bd, c, tmp1);
    return mate.showResult(tmp2)
  } 
  static testMate_nofib(dummy) {
    let input, bdcn, tmp, tmp1, element1$, element0$, element1$1, element0$1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16;
    tmp = runtime.safeCall(globalThis.fs.readFileSync("./hkmc2/shared/src/test/mlscript/nofib/input/heathcote3.prob"));
    tmp1 = runtime.safeCall(tmp.toString());
    input = NofibPrelude.nofibStringToList(tmp1);
    bdcn = mate.readProblem(input);
    if (runtime.Tuple.isArrayLike(bdcn) && bdcn.length === 2) {
      element0$ = runtime.Tuple.get(bdcn, 0);
      element1$ = runtime.Tuple.get(bdcn, 1);
      if (runtime.Tuple.isArrayLike(element1$) && element1$.length === 2) {
        element0$1 = runtime.Tuple.get(element1$, 0);
        element1$1 = runtime.Tuple.get(element1$, 1);
        tmp2 = mate.showBoard(element0$);
        tmp3 = NofibPrelude.nofibStringToList("\n");
        tmp4 = mate.showColour(element0$1);
        tmp5 = NofibPrelude.nofibStringToList(" to move and mate in ");
        tmp6 = NofibPrelude.stringOfInt(element1$1);
        tmp7 = NofibPrelude.nofibStringToList(tmp6);
        tmp8 = NofibPrelude.nofibStringToList("\n");
        tmp9 = NofibPrelude.nofibStringToList("\n");
        tmp10 = mate.solve(element0$, element0$1, element1$1);
        tmp11 = NofibPrelude.append(tmp9, tmp10);
        tmp12 = NofibPrelude.append(tmp8, tmp11);
        tmp13 = NofibPrelude.append(tmp7, tmp12);
        tmp14 = NofibPrelude.append(tmp5, tmp13);
        tmp15 = NofibPrelude.append(tmp4, tmp14);
        tmp16 = NofibPrelude.append(tmp3, tmp15);
        return NofibPrelude.append(tmp2, tmp16)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static main() {
    let tmp;
    tmp = mate.testMate_nofib(0);
    return NofibPrelude.nofibListToString(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "mate"]; 
});
let mate = mate1; export default mate;
