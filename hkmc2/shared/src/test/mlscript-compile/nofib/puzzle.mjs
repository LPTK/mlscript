const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let puzzle1;
(class puzzle {
  static {
    puzzle1 = this
  }
  static {
    let tmp, tmp1;
    (class ItemType {
      static {
        puzzle.ItemType = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ItemType"]; 
    });
    (class Bono extends puzzle.ItemType {
      static {
        new this
      }
      constructor() {
        super();
        puzzle.Bono = this;
        Object.defineProperty(this, "class", {
          value: Bono
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Bono"]; 
    });
    (class Edge extends puzzle.ItemType {
      static {
        new this
      }
      constructor() {
        super();
        puzzle.Edge = this;
        Object.defineProperty(this, "class", {
          value: Edge
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Edge"]; 
    });
    (class Larry extends puzzle.ItemType {
      static {
        new this
      }
      constructor() {
        super();
        puzzle.Larry = this;
        Object.defineProperty(this, "class", {
          value: Larry
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Larry"]; 
    });
    (class Adam extends puzzle.ItemType {
      static {
        new this
      }
      constructor() {
        super();
        puzzle.Adam = this;
        Object.defineProperty(this, "class", {
          value: Adam
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Adam"]; 
    });
    (class BankType {
      static {
        puzzle.BankType = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "BankType"]; 
    });
    (class LeftBank extends puzzle.BankType {
      static {
        new this
      }
      constructor() {
        super();
        puzzle.LeftBank = this;
        Object.defineProperty(this, "class", {
          value: LeftBank
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LeftBank"]; 
    });
    (class RightBank extends puzzle.BankType {
      static {
        new this
      }
      constructor() {
        super();
        puzzle.RightBank = this;
        Object.defineProperty(this, "class", {
          value: RightBank
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "RightBank"]; 
    });
    this.State = function State(b, e, l, a) {
      return globalThis.Object.freeze(new State.class(b, e, l, a));
    };
    (class State {
      static {
        puzzle.State.class = this
      }
      constructor(b, e, l, a) {
        this.b = b;
        this.e = e;
        this.l = l;
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "State", ["b", "e", "l", "a"]]; 
    });
    tmp = puzzle.State(puzzle.LeftBank, puzzle.LeftBank, puzzle.LeftBank, puzzle.LeftBank);
    this.initialState = tmp;
    tmp1 = puzzle.State(puzzle.RightBank, puzzle.RightBank, puzzle.RightBank, puzzle.RightBank);
    this.finalState = tmp1;
  }
  static itemEq(a, b) {
    if (a instanceof puzzle.Bono.class) {
      if (b instanceof puzzle.Bono.class) {
        return true
      }
      return false;
    } else if (a instanceof puzzle.Edge.class) {
      if (b instanceof puzzle.Edge.class) {
        return true
      }
      return false;
    } else if (a instanceof puzzle.Larry.class) {
      if (b instanceof puzzle.Larry.class) {
        return true
      }
      return false;
    } else if (a instanceof puzzle.Adam.class) {
      if (b instanceof puzzle.Adam.class) {
        return true
      }
      return false;
    }
    return false;
  } 
  static succItem(i) {
    if (i instanceof puzzle.Bono.class) {
      return puzzle.Edge
    } else if (i instanceof puzzle.Edge.class) {
      return puzzle.Larry
    } else if (i instanceof puzzle.Larry.class) {
      return puzzle.Adam
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static isEnd(i) {
    if (i instanceof puzzle.Bono.class) {
      return false
    } else if (i instanceof puzzle.Edge.class) {
      return false
    } else if (i instanceof puzzle.Larry.class) {
      return false
    } else if (i instanceof puzzle.Adam.class) {
      return true
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static itemFromTo(a, b) {
    let scrut, tmp, tmp1;
    scrut = puzzle.itemEq(a, b);
    if (scrut === true) {
      return NofibPrelude.Cons(a, NofibPrelude.Nil)
    }
    tmp = puzzle.succItem(a);
    tmp1 = puzzle.itemFromTo(tmp, b);
    return NofibPrelude.Cons(a, tmp1);
  } 
  static bankEq(a, b) {
    if (a instanceof puzzle.LeftBank.class) {
      if (b instanceof puzzle.LeftBank.class) {
        return true
      }
      return false;
    } else if (a instanceof puzzle.RightBank.class) {
      if (b instanceof puzzle.RightBank.class) {
        return true
      }
      return false;
    }
    return false;
  } 
  static stateEq(s1, s2) {
    let a, b, c, d, e, f, g, h, arg$State$0$, arg$State$1$, arg$State$2$, arg$State$3$, arg$State$0$1, arg$State$1$1, arg$State$2$1, arg$State$3$1, tmp, tmp1, tmp2;
    if (s1 instanceof puzzle.State.class) {
      arg$State$0$ = s1.b;
      arg$State$1$ = s1.e;
      arg$State$2$ = s1.l;
      arg$State$3$ = s1.a;
      d = arg$State$3$;
      c = arg$State$2$;
      b = arg$State$1$;
      a = arg$State$0$;
      if (s2 instanceof puzzle.State.class) {
        arg$State$0$1 = s2.b;
        arg$State$1$1 = s2.e;
        arg$State$2$1 = s2.l;
        arg$State$3$1 = s2.a;
        h = arg$State$3$1;
        g = arg$State$2$1;
        f = arg$State$1$1;
        e = arg$State$0$1;
        tmp = puzzle.bankEq(a, e);
        if (tmp === true) {
          tmp1 = puzzle.bankEq(b, f);
        } else {
          tmp1 = false;
        }
        if (tmp1 === true) {
          tmp2 = puzzle.bankEq(c, g);
        } else {
          tmp2 = false;
        }
        if (tmp2 === true) {
          return puzzle.bankEq(d, h)
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static bonoPos(s) {
    let a, arg$State$0$;
    if (s instanceof puzzle.State.class) {
      arg$State$0$ = s.b;
      a = arg$State$0$;
      return a
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static edgePos(s) {
    let b, arg$State$1$;
    if (s instanceof puzzle.State.class) {
      arg$State$1$ = s.e;
      b = arg$State$1$;
      return b
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static larryPos(s) {
    let c, arg$State$2$;
    if (s instanceof puzzle.State.class) {
      arg$State$2$ = s.l;
      c = arg$State$2$;
      return c
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static adamPos(s) {
    let d, arg$State$3$;
    if (s instanceof puzzle.State.class) {
      arg$State$3$ = s.a;
      d = arg$State$3$;
      return d
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static position(i, s) {
    if (i instanceof puzzle.Bono.class) {
      return puzzle.bonoPos(s)
    } else if (i instanceof puzzle.Edge.class) {
      return puzzle.edgePos(s)
    } else if (i instanceof puzzle.Larry.class) {
      return puzzle.larryPos(s)
    } else if (i instanceof puzzle.Adam.class) {
      return puzzle.adamPos(s)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static updateState(s, i, pos) {
    let a, b, c, d, arg$State$0$, arg$State$1$, arg$State$2$, arg$State$3$;
    if (s instanceof puzzle.State.class) {
      arg$State$0$ = s.b;
      arg$State$1$ = s.e;
      arg$State$2$ = s.l;
      arg$State$3$ = s.a;
      d = arg$State$3$;
      c = arg$State$2$;
      b = arg$State$1$;
      a = arg$State$0$;
      if (i instanceof puzzle.Bono.class) {
        return puzzle.State(pos, b, c, d)
      } else if (i instanceof puzzle.Edge.class) {
        return puzzle.State(a, pos, c, d)
      } else if (i instanceof puzzle.Larry.class) {
        return puzzle.State(a, b, pos, d)
      } else if (i instanceof puzzle.Adam.class) {
        return puzzle.State(a, b, c, pos)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static opposite(b) {
    if (b instanceof puzzle.LeftBank.class) {
      return puzzle.RightBank
    } else if (b instanceof puzzle.RightBank.class) {
      return puzzle.LeftBank
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static notSeen(state, states) {
    let lambda;
    lambda = (undefined, function (caseScrut) {
      let s, element1$, tmp;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
        runtime.Tuple.get(caseScrut, 0);
        element1$ = runtime.Tuple.get(caseScrut, 1);
        s = element1$;
        tmp = puzzle.stateEq(state, s);
        return ! tmp
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return NofibPrelude.all(lambda, states)
  } 
  static writeItem(i, b, rest) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (i instanceof puzzle.Bono.class) {
      if (b instanceof puzzle.LeftBank.class) {
        tmp = NofibPrelude.nofibStringToList("    Bono |                    |\n");
        return NofibPrelude.append(tmp, rest)
      } else if (b instanceof puzzle.RightBank.class) {
        tmp1 = NofibPrelude.nofibStringToList("         |                    | Bono\n");
        return NofibPrelude.append(tmp1, rest)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (i instanceof puzzle.Edge.class) {
      if (b instanceof puzzle.LeftBank.class) {
        tmp2 = NofibPrelude.nofibStringToList("The Edge |                    |\n");
        return NofibPrelude.append(tmp2, rest)
      } else if (b instanceof puzzle.RightBank.class) {
        tmp3 = NofibPrelude.nofibStringToList("         |                    | The Edge\n");
        return NofibPrelude.append(tmp3, rest)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (i instanceof puzzle.Larry.class) {
      if (b instanceof puzzle.LeftBank.class) {
        tmp4 = NofibPrelude.nofibStringToList("   Larry |                    |\n");
        return NofibPrelude.append(tmp4, rest)
      } else if (b instanceof puzzle.RightBank.class) {
        tmp5 = NofibPrelude.nofibStringToList("         |                    | Larry\n");
        return NofibPrelude.append(tmp5, rest)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (i instanceof puzzle.Adam.class) {
      if (b instanceof puzzle.LeftBank.class) {
        tmp6 = NofibPrelude.nofibStringToList("    Adam |                    |\n");
        return NofibPrelude.append(tmp6, rest)
      } else if (b instanceof puzzle.RightBank.class) {
        tmp7 = NofibPrelude.nofibStringToList("         |                    | Adam\n");
        return NofibPrelude.append(tmp7, rest)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static writeState(state, s) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
    tmp = NofibPrelude.nofibStringToList("----------------------------------------\n");
    tmp1 = puzzle.bonoPos(state);
    tmp2 = puzzle.edgePos(state);
    tmp3 = puzzle.larryPos(state);
    tmp4 = puzzle.adamPos(state);
    tmp5 = NofibPrelude.nofibStringToList("----------------------------------------\n");
    tmp6 = NofibPrelude.append(tmp5, s);
    tmp7 = puzzle.writeItem(puzzle.Adam, tmp4, tmp6);
    tmp8 = puzzle.writeItem(puzzle.Larry, tmp3, tmp7);
    tmp9 = puzzle.writeItem(puzzle.Edge, tmp2, tmp8);
    tmp10 = puzzle.writeItem(puzzle.Bono, tmp1, tmp9);
    return NofibPrelude.append(tmp, tmp10)
  } 
  static totalTime(history) {
    let time, arg$Cons$0$, element0$;
    if (history instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = history.head;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        runtime.Tuple.get(arg$Cons$0$, 1);
        time = element0$;
        return time
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static writeHistory(history, x) {
    let lambda, lambda1, tmp;
    if (history instanceof NofibPrelude.Nil.class) {
      return x
    }
    lambda = (undefined, function (timestate, acc) {
      let lambda2;
      lambda2 = (undefined, function (s) {
        let state, time, element1$, element0$, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
        if (runtime.Tuple.isArrayLike(timestate) && timestate.length === 2) {
          element0$ = runtime.Tuple.get(timestate, 0);
          element1$ = runtime.Tuple.get(timestate, 1);
          state = element1$;
          time = element0$;
          tmp1 = NofibPrelude.nofibStringToList("Time: ");
          tmp2 = puzzle.totalTime(history);
          tmp3 = tmp2 - time;
          tmp4 = NofibPrelude.stringOfInt(tmp3);
          tmp5 = NofibPrelude.nofibStringToList(tmp4);
          tmp6 = runtime.safeCall(acc(s));
          tmp7 = puzzle.writeState(state, tmp6);
          tmp8 = NofibPrelude.Cons("\n", tmp7);
          tmp9 = NofibPrelude.append(tmp5, tmp8);
          return NofibPrelude.append(tmp1, tmp9)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      });
      return lambda2
    });
    lambda1 = (undefined, function (x1) {
      return x1
    });
    tmp = NofibPrelude.foldr(lambda, lambda1, history);
    return runtime.safeCall(tmp(x));
  } 
  static writeSolutions(solutions, count, s) {
    let next, item, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (solutions instanceof NofibPrelude.Nil.class) {
      return s
    } else if (solutions instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = solutions.head;
      arg$Cons$1$ = solutions.tail;
      next = arg$Cons$1$;
      item = arg$Cons$0$;
      tmp = NofibPrelude.nofibStringToList("Solution ");
      tmp1 = NofibPrelude.stringOfInt(count);
      tmp2 = NofibPrelude.nofibStringToList(tmp1);
      tmp3 = count + 1;
      tmp4 = puzzle.writeSolutions(next, tmp3, s);
      tmp5 = puzzle.writeHistory(item, tmp4);
      tmp6 = NofibPrelude.Cons("\n", tmp5);
      tmp7 = NofibPrelude.append(tmp2, tmp6);
      return NofibPrelude.append(tmp, tmp7)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static minSolutions(history) {
    let minAcc, history1, next, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2;
    if (history instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (history instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = history.head;
      arg$Cons$1$ = history.tail;
      next = arg$Cons$1$;
      history1 = arg$Cons$0$;
      minAcc = function minAcc(minSoFar, mins, ls) {
        let history2, next1, total, scrut, scrut1, arg$Cons$0$1, arg$Cons$1$1, tmp3, tmp4;
        if (ls instanceof NofibPrelude.Nil.class) {
          return mins
        } else if (ls instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ls.head;
          arg$Cons$1$1 = ls.tail;
          next1 = arg$Cons$1$1;
          history2 = arg$Cons$0$1;
          total = puzzle.totalTime(history2);
          scrut = minSoFar < total;
          if (scrut === true) {
            return minAcc(minSoFar, mins, next1)
          }
          scrut1 = minSoFar === total;
          if (scrut1 === true) {
            tmp3 = NofibPrelude.Cons(history2, mins);
            return minAcc(minSoFar, tmp3, next1)
          }
          tmp4 = NofibPrelude.Cons(history2, NofibPrelude.Nil);
          return minAcc(total, tmp4, next1);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      tmp = puzzle.totalTime(history1);
      tmp1 = NofibPrelude.Cons(history1, NofibPrelude.Nil);
      tmp2 = minAcc(tmp, tmp1, next);
      return NofibPrelude.reverse(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static u2times(i) {
    if (i instanceof puzzle.Bono.class) {
      return 10
    } else if (i instanceof puzzle.Edge.class) {
      return 5
    } else if (i instanceof puzzle.Larry.class) {
      return 2
    } else if (i instanceof puzzle.Adam.class) {
      return 1
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static transfer(source, dest, location, countdown, history) {
    let lscomp2, lscomp1, scrut, newHistory, newLocation, moveOne, moveTwo, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    scrut = puzzle.stateEq(source, dest);
    if (scrut === true) {
      tmp = globalThis.Object.freeze([
        countdown,
        dest
      ]);
      tmp1 = NofibPrelude.Cons(tmp, history);
      return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
    }
    lscomp1 = function lscomp1(ls) {
      let xs, item, scrut1, newDest, scrut2, newTime, arg$Cons$0$, arg$Cons$1$, tmp7, tmp8, tmp9, tmp10;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        xs = arg$Cons$1$;
        item = arg$Cons$0$;
        tmp7 = puzzle.position(item, dest);
        scrut1 = puzzle.bankEq(tmp7, location);
        if (scrut1 === true) {
          newDest = puzzle.updateState(dest, item, newLocation);
          scrut2 = puzzle.notSeen(newDest, history);
          if (scrut2 === true) {
            tmp8 = puzzle.u2times(item);
            newTime = countdown + tmp8;
            tmp9 = puzzle.transfer(source, newDest, newLocation, newTime, newHistory);
            tmp10 = lscomp1(xs);
            return NofibPrelude.Cons(tmp9, tmp10)
          }
          return lscomp1(xs);
        }
        return lscomp1(xs);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    lscomp2 = function lscomp2(ls) {
      let lscomp3, xs, i, arg$Cons$0$, arg$Cons$1$, tmp7, tmp8;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        xs = arg$Cons$1$;
        i = arg$Cons$0$;
        lscomp3 = function lscomp3(ls1) {
          let ys, j, scrut1, newDest, scrut2, newTime, scrut3, arg$Cons$0$1, arg$Cons$1$1, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14;
          if (ls1 instanceof NofibPrelude.Nil.class) {
            return lscomp2(xs)
          } else if (ls1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = ls1.head;
            arg$Cons$1$1 = ls1.tail;
            ys = arg$Cons$1$1;
            j = arg$Cons$0$1;
            tmp9 = puzzle.position(i, dest);
            scrut1 = puzzle.bankEq(tmp9, location);
            if (scrut1 === true) {
              tmp10 = puzzle.position(j, dest);
              scrut3 = puzzle.bankEq(tmp10, location);
              if (scrut3 === true) {
                tmp11 = puzzle.updateState(dest, i, newLocation);
                newDest = puzzle.updateState(tmp11, j, newLocation);
                scrut2 = puzzle.notSeen(newDest, history);
                if (scrut2 === true) {
                  tmp12 = puzzle.u2times(i);
                  newTime = countdown + tmp12;
                  tmp13 = puzzle.transfer(source, newDest, newLocation, newTime, newHistory);
                  tmp14 = lscomp3(ys);
                  return NofibPrelude.Cons(tmp13, tmp14)
                }
                return lscomp3(ys);
              }
              return lscomp3(ys);
            }
            return lscomp3(ys);
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        };
        tmp7 = puzzle.succItem(i);
        tmp8 = puzzle.itemFromTo(tmp7, puzzle.Adam);
        return lscomp3(tmp8)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp2 = globalThis.Object.freeze([
      countdown,
      dest
    ]);
    newHistory = NofibPrelude.Cons(tmp2, history);
    newLocation = puzzle.opposite(location);
    tmp3 = puzzle.itemFromTo(puzzle.Bono, puzzle.Adam);
    tmp4 = lscomp1(tmp3);
    moveOne = NofibPrelude.concat(tmp4);
    tmp5 = puzzle.itemFromTo(puzzle.Bono, puzzle.Larry);
    tmp6 = lscomp2(tmp5);
    moveTwo = NofibPrelude.concat(tmp6);
    return NofibPrelude.append(moveOne, moveTwo);
  } 
  static testPuzzle_nofib(x) {
    let time, scrut, solutions, mins, tmp, tmp1;
    tmp = NofibPrelude.listLen(x);
    scrut = tmp === 1;
    if (scrut === true) {
      tmp1 = 0;
      time = tmp1;
      solutions = puzzle.transfer(puzzle.initialState, puzzle.finalState, puzzle.RightBank, time, NofibPrelude.Nil);
      mins = puzzle.minSolutions(solutions);
      return puzzle.writeSolutions(mins, 1, NofibPrelude.Nil)
    }
    throw runtime.safeCall(globalThis.Error("puzzle expects exactly one argument"));
  } 
  static main() {
    let tmp, tmp1;
    tmp = NofibPrelude.Cons(2, NofibPrelude.Nil);
    tmp1 = puzzle.testPuzzle_nofib(tmp);
    return NofibPrelude.nofibListToString(tmp1)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "puzzle"]; 
});
let puzzle = puzzle1; export default puzzle;
