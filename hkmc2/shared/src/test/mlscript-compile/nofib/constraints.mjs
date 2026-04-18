const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let constraints1;
(class constraints {
  static {
    constraints1 = this
  }
  static {
    this.Assign = function Assign(varr, value) {
      return globalThis.Object.freeze(new Assign.class(varr, value));
    };
    (class Assign {
      static {
        constraints.Assign.class = this
      }
      constructor(varr, value) {
        this.varr = varr;
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Assign", ["varr", "value"]]; 
    });
    this.CSP = function CSP(vars, vals, rel) {
      return globalThis.Object.freeze(new CSP.class(vars, vals, rel));
    };
    (class CSP {
      static {
        constraints.CSP.class = this
      }
      constructor(vars, vals, rel) {
        this.vars = vars;
        this.vals = vals;
        this.rel = rel;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CSP", ["vars", "vals", "rel"]]; 
    });
    this.Node = function Node(lab, children) {
      return globalThis.Object.freeze(new Node.class(lab, children));
    };
    (class Node {
      static {
        constraints.Node.class = this
      }
      constructor(lab, children) {
        this.lab = lab;
        this.children = children;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Node", ["lab", "children"]]; 
    });
    (class ConflictSet {
      static {
        constraints.ConflictSet = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ConflictSet"]; 
    });
    this.Known = function Known(vs) {
      return globalThis.Object.freeze(new Known.class(vs));
    };
    (class Known extends constraints.ConflictSet {
      static {
        constraints.Known.class = this
      }
      constructor(vs) {
        super();
        this.vs = vs;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Known", ["vs"]]; 
    });
    (class Unknown extends constraints.ConflictSet {
      static {
        new this
      }
      constructor() {
        super();
        constraints.Unknown = this;
        Object.defineProperty(this, "class", {
          value: Unknown
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Unknown"]; 
    });
  }
  static qsort_qpart_rqsort_rqpart(id, param0, param1, param2, param3, param4, param5) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          let arg$Cons$0$, arg$Cons$1$;
          if (param1 instanceof NofibPrelude.Nil.class) {
            return param2
          } else if (param1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param1.head;
            arg$Cons$1$ = param1.tail;
            if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
              return NofibPrelude.Cons(arg$Cons$0$, param2)
            }
            let param2_tmp;
            param2_tmp = param2;
            param1 = arg$Cons$0$;
            param2 = arg$Cons$1$;
            param3 = NofibPrelude.Nil;
            param4 = NofibPrelude.Nil;
            param5 = param2_tmp;
            id = 1;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        case 1:
          let scrut, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1, tmp2, tmp3;
          if (param2 instanceof NofibPrelude.Nil.class) {
            tmp = constraints.rqsort(param0, param4, param5);
            tmp1 = NofibPrelude.Cons(param1, tmp);
            param1 = param3;
            param2 = tmp1;
            id = 2;
            continue loopLabel
          } else if (param2 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = param2.head;
            arg$Cons$1$1 = param2.tail;
            scrut = runtime.safeCall(param0(param1, arg$Cons$0$1));
            if (scrut === true) {
              tmp2 = NofibPrelude.Cons(arg$Cons$0$1, param4);
              param2 = arg$Cons$1$1;
              param4 = tmp2;
              id = 1;
              continue loopLabel
            }
            tmp3 = NofibPrelude.Cons(arg$Cons$0$1, param3);
            param2 = arg$Cons$1$1;
            param3 = tmp3;
            id = 1;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        case 2:
          let arg$Cons$0$2, arg$Cons$1$2;
          if (param1 instanceof NofibPrelude.Nil.class) {
            return param2
          } else if (param1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$2 = param1.head;
            arg$Cons$1$2 = param1.tail;
            if (arg$Cons$1$2 instanceof NofibPrelude.Nil.class) {
              return NofibPrelude.Cons(arg$Cons$0$2, param2)
            }
            let param2_tmp;
            param2_tmp = param2;
            param1 = arg$Cons$0$2;
            param2 = arg$Cons$1$2;
            param3 = NofibPrelude.Nil;
            param4 = NofibPrelude.Nil;
            param5 = param2_tmp;
            id = 3;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        case 3:
          let scrut1, arg$Cons$0$3, arg$Cons$1$3, tmp4, tmp5, tmp6, tmp7;
          if (param2 instanceof NofibPrelude.Nil.class) {
            tmp4 = constraints.qsort(param0, param4, param5);
            tmp5 = NofibPrelude.Cons(param1, tmp4);
            param1 = param3;
            param2 = tmp5;
            id = 2;
            continue loopLabel
          } else if (param2 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$3 = param2.head;
            arg$Cons$1$3 = param2.tail;
            scrut1 = runtime.safeCall(param0(arg$Cons$0$3, param1));
            if (scrut1 === true) {
              tmp6 = NofibPrelude.Cons(arg$Cons$0$3, param3);
              param2 = arg$Cons$1$3;
              param3 = tmp6;
              id = 3;
              continue loopLabel
            }
            tmp7 = NofibPrelude.Cons(arg$Cons$0$3, param4);
            param2 = arg$Cons$1$3;
            param4 = tmp7;
            id = 3;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      break;
    }
  } 
  static qsort(le, ls, r) {
    return constraints.qsort_qpart_rqsort_rqpart(0, le, ls, r, undefined, undefined, undefined)
  } 
  static qpart(le, x, ls, rlt, rge, r) {
    return constraints.qsort_qpart_rqsort_rqpart(1, le, x, ls, rlt, rge, r)
  } 
  static rqsort(le, ls, r) {
    return constraints.qsort_qpart_rqsort_rqpart(2, le, ls, r, undefined, undefined, undefined)
  } 
  static rqpart(le, x, ls, rle, rgt, r) {
    return constraints.qsort_qpart_rqsort_rqpart(3, le, x, ls, rle, rgt, r)
  } 
  static level(a) {
    let arg$Assign$0$;
    if (a instanceof constraints.Assign.class) {
      arg$Assign$0$ = a.varr;
      return arg$Assign$0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static value(a) {
    let arg$Assign$1$;
    if (a instanceof constraints.Assign.class) {
      arg$Assign$1$ = a.value;
      return arg$Assign$1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static maxLevel(ls) {
    let arg$Cons$0$, arg$Assign$0$;
    if (ls instanceof NofibPrelude.Nil.class) {
      return 0
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      if (arg$Cons$0$ instanceof constraints.Assign.class) {
        arg$Assign$0$ = arg$Cons$0$.varr;
        return arg$Assign$0$
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static complete(csp, s) {
    let arg$CSP$0$, tmp;
    if (csp instanceof constraints.CSP.class) {
      arg$CSP$0$ = csp.vars;
      tmp = constraints.maxLevel(s);
      return tmp == arg$CSP$0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static safe(as1, as2) {
    let scrut, scrut1, arg$Assign$0$, arg$Assign$1$, arg$Assign$0$1, arg$Assign$1$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (as1 instanceof constraints.Assign.class) {
      arg$Assign$0$ = as1.varr;
      arg$Assign$1$ = as1.value;
      if (as2 instanceof constraints.Assign.class) {
        arg$Assign$0$1 = as2.varr;
        arg$Assign$1$1 = as2.value;
        tmp = arg$Assign$1$ == arg$Assign$1$1;
        scrut = ! tmp;
        if (scrut === true) {
          tmp1 = arg$Assign$0$ - arg$Assign$0$1;
          tmp2 = NofibPrelude.abs(tmp1);
          tmp3 = arg$Assign$1$ - arg$Assign$1$1;
          tmp4 = NofibPrelude.abs(tmp3);
          tmp5 = tmp2 == tmp4;
          scrut1 = ! tmp5;
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
  static queens(n) {
    return constraints.CSP(n, n, constraints.safe)
  } 
  static label(n) {
    let arg$Node$0$;
    if (n instanceof constraints.Node.class) {
      arg$Node$0$ = n.lab;
      return arg$Node$0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static mapTree(f, n) {
    let arg$Node$0$, arg$Node$1$, tmp, lambda, tmp1;
    if (n instanceof constraints.Node.class) {
      arg$Node$0$ = n.lab;
      arg$Node$1$ = n.children;
      tmp = runtime.safeCall(f(arg$Node$0$));
      lambda = (undefined, function (x) {
        return constraints.mapTree(f, x)
      });
      tmp1 = NofibPrelude.map(lambda, arg$Node$1$);
      return constraints.Node(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static foldTree(f, n) {
    let arg$Node$0$, arg$Node$1$, lambda, tmp;
    if (n instanceof constraints.Node.class) {
      arg$Node$0$ = n.lab;
      arg$Node$1$ = n.children;
      lambda = (undefined, function (x) {
        return constraints.foldTree(f, x)
      });
      tmp = NofibPrelude.map(lambda, arg$Node$1$);
      return runtime.safeCall(f(arg$Node$0$, tmp))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static filterTree(p, t) {
    let f1;
    f1 = function f1(a, cs) {
      let lambda, tmp;
      lambda = (undefined, function (x) {
        let tmp1;
        tmp1 = constraints.label(x);
        return runtime.safeCall(p(tmp1))
      });
      tmp = NofibPrelude.filter(lambda, cs);
      return constraints.Node(a, tmp)
    };
    return constraints.foldTree(f1, t)
  } 
  static prune(p, t) {
    let lambda;
    lambda = (undefined, function (x) {
      let tmp;
      tmp = runtime.safeCall(p(x));
      return ! tmp
    });
    return constraints.filterTree(lambda, t)
  } 
  static leaves(t) {
    let arg$Node$0$, arg$Node$1$, tmp;
    if (t instanceof constraints.Node.class) {
      arg$Node$0$ = t.lab;
      arg$Node$1$ = t.children;
      if (arg$Node$1$ instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Cons(arg$Node$0$, NofibPrelude.Nil)
      }
      tmp = NofibPrelude.map(constraints.leaves, arg$Node$1$);
      return NofibPrelude.concat(tmp);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static initTree(f, x) {
    let lambda, tmp, tmp1;
    lambda = (undefined, function (y) {
      return constraints.initTree(f, y)
    });
    tmp = runtime.safeCall(f(x));
    tmp1 = NofibPrelude.map(lambda, tmp);
    return constraints.Node(x, tmp1)
  } 
  static mkTree(csp) {
    let next, vars, vals, arg$CSP$0$, arg$CSP$1$;
    if (csp instanceof constraints.CSP.class) {
      arg$CSP$0$ = csp.vars;
      arg$CSP$1$ = csp.vals;
      vals = arg$CSP$1$;
      vars = arg$CSP$0$;
      next = function next(ss) {
        let lscomp1, scrut, tmp, tmp1;
        tmp = constraints.maxLevel(ss);
        scrut = tmp < vars;
        if (scrut === true) {
          lscomp1 = function lscomp1(ls) {
            let arg$Cons$0$, arg$Cons$1$, tmp2, tmp3, tmp4, tmp5, tmp6;
            if (ls instanceof NofibPrelude.Nil.class) {
              return NofibPrelude.Nil
            } else if (ls instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = ls.head;
              arg$Cons$1$ = ls.tail;
              tmp2 = constraints.maxLevel(ss);
              tmp3 = tmp2 + 1;
              tmp4 = constraints.Assign(tmp3, arg$Cons$0$);
              tmp5 = NofibPrelude.Cons(tmp4, ss);
              tmp6 = lscomp1(arg$Cons$1$);
              return NofibPrelude.Cons(tmp5, tmp6)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          };
          tmp1 = NofibPrelude.enumFromTo(1, vals);
          return lscomp1(tmp1)
        }
        return NofibPrelude.Nil;
      };
      return constraints.initTree(next, NofibPrelude.Nil)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static earliestInconsistency(csp, aas) {
    let rel, a, scrut, arg$CSP$2$, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, lambda, tmp, tmp1, tmp2, tmp3;
    if (csp instanceof constraints.CSP.class) {
      arg$CSP$2$ = csp.rel;
      rel = arg$CSP$2$;
      if (aas instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.None
      } else if (aas instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = aas.head;
        arg$Cons$1$ = aas.tail;
        a = arg$Cons$0$;
        lambda = (undefined, function (x) {
          let tmp4;
          tmp4 = runtime.safeCall(rel(a, x));
          return ! tmp4
        });
        tmp = NofibPrelude.reverse(arg$Cons$1$);
        scrut = NofibPrelude.filter(lambda, tmp);
        if (scrut instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.None
        } else if (scrut instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = scrut.head;
          tmp1 = constraints.level(a);
          tmp2 = constraints.level(arg$Cons$0$1);
          tmp3 = globalThis.Object.freeze([
            tmp1,
            tmp2
          ]);
          return NofibPrelude.Some(tmp3)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static labelInconsistencies(csp, t) {
    let f2;
    f2 = function f2(s) {
      let tmp;
      tmp = constraints.earliestInconsistency(csp, s);
      return globalThis.Object.freeze([
        s,
        tmp
      ])
    };
    return constraints.mapTree(f2, t)
  } 
  static btsolver0(csp) {
    let lambda, lambda1, tmp, tmp1, tmp2, tmp3, tmp4;
    lambda = (undefined, function (x) {
      return constraints.complete(csp, x)
    });
    lambda1 = (undefined, function (x) {
      let tmp5, tmp6;
      tmp5 = NofibPrelude.snd(x);
      tmp6 = tmp5 === NofibPrelude.None;
      return ! tmp6
    });
    tmp = constraints.mkTree(csp);
    tmp1 = constraints.labelInconsistencies(csp, tmp);
    tmp2 = constraints.prune(lambda1, tmp1);
    tmp3 = constraints.mapTree(NofibPrelude.fst, tmp2);
    tmp4 = constraints.leaves(tmp3);
    return NofibPrelude.filter(lambda, tmp4)
  } 
  static knownConflict(c) {
    let arg$Known$0$;
    if (c instanceof constraints.Known.class) {
      arg$Known$0$ = c.vs;
      if (arg$Known$0$ instanceof NofibPrelude.Cons.class) {
        return true
      }
      return false;
    }
    return false;
  } 
  static knownSolution(c) {
    let arg$Known$0$;
    if (c instanceof constraints.Known.class) {
      arg$Known$0$ = c.vs;
      if (arg$Known$0$ instanceof NofibPrelude.Nil.class) {
        return true
      }
      return false;
    }
    return false;
  } 
  static checkComplete(csp, s) {
    let scrut;
    scrut = constraints.complete(csp, s);
    if (scrut === true) {
      return constraints.Known(NofibPrelude.Nil)
    }
    return constraints.Unknown;
  } 
  static search(labeler, csp) {
    let lambda, lambda1, tmp, tmp1, tmp2, tmp3, tmp4;
    lambda = (undefined, function (x) {
      let tmp5;
      tmp5 = NofibPrelude.snd(x);
      return constraints.knownSolution(tmp5)
    });
    lambda1 = (undefined, function (x) {
      let tmp5;
      tmp5 = NofibPrelude.snd(x);
      return constraints.knownConflict(tmp5)
    });
    tmp = constraints.mkTree(csp);
    tmp1 = runtime.safeCall(labeler(csp, tmp));
    tmp2 = constraints.prune(lambda1, tmp1);
    tmp3 = constraints.leaves(tmp2);
    tmp4 = NofibPrelude.filter(lambda, tmp3);
    return NofibPrelude.map(NofibPrelude.fst, tmp4)
  } 
  static bt(csp, t) {
    let f3;
    f3 = function f3(s) {
      let scrut, arg$Some$0$, element1$, element0$, tmp, tmp1, tmp2;
      scrut = constraints.earliestInconsistency(csp, s);
      if (scrut instanceof NofibPrelude.Some.class) {
        arg$Some$0$ = scrut.x;
        if (runtime.Tuple.isArrayLike(arg$Some$0$) && arg$Some$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Some$0$, 0);
          element1$ = runtime.Tuple.get(arg$Some$0$, 1);
          tmp = NofibPrelude.Cons(element1$, NofibPrelude.Nil);
          tmp1 = NofibPrelude.Cons(element0$, tmp);
          tmp2 = constraints.Known(tmp1);
          return globalThis.Object.freeze([
            s,
            tmp2
          ])
        }
        tmp2 = constraints.checkComplete(csp, s);
        return globalThis.Object.freeze([
          s,
          tmp2
        ]);
      }
      tmp2 = constraints.checkComplete(csp, s);
      return globalThis.Object.freeze([
        s,
        tmp2
      ]);
    };
    return constraints.mapTree(f3, t)
  } 
  static emptyTable(csp) {
    let lscomp1, vals, arg$CSP$0$, arg$CSP$1$, tmp, tmp1;
    if (csp instanceof constraints.CSP.class) {
      arg$CSP$0$ = csp.vars;
      arg$CSP$1$ = csp.vals;
      vals = arg$CSP$1$;
      lscomp1 = function lscomp1(ls) {
        let lscomp2, arg$Cons$1$, tmp2, tmp3, tmp4;
        if (ls instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (ls instanceof NofibPrelude.Cons.class) {
          arg$Cons$1$ = ls.tail;
          lscomp2 = function lscomp2(ls1) {
            let arg$Cons$1$1, tmp5;
            if (ls1 instanceof NofibPrelude.Nil.class) {
              return NofibPrelude.Nil
            } else if (ls1 instanceof NofibPrelude.Cons.class) {
              arg$Cons$1$1 = ls1.tail;
              tmp5 = lscomp2(arg$Cons$1$1);
              return NofibPrelude.Cons(constraints.Unknown, tmp5)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          };
          tmp2 = NofibPrelude.enumFromTo(1, vals);
          tmp3 = lscomp2(tmp2);
          tmp4 = lscomp1(arg$Cons$1$);
          return NofibPrelude.Cons(tmp3, tmp4)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      tmp = NofibPrelude.enumFromTo(1, arg$CSP$0$);
      tmp1 = lscomp1(tmp);
      return NofibPrelude.Cons(NofibPrelude.Nil, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static fillTable(s, csp, tbl) {
    let f4, lscomp1, val_, var_, vals, rel, arg$Cons$0$, arg$Assign$0$, arg$Assign$1$, arg$CSP$0$, arg$CSP$1$, arg$CSP$2$, lambda, tmp, tmp1, tmp2;
    if (s instanceof NofibPrelude.Nil.class) {
      return tbl
    } else if (s instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = s.head;
      if (arg$Cons$0$ instanceof constraints.Assign.class) {
        arg$Assign$0$ = arg$Cons$0$.varr;
        arg$Assign$1$ = arg$Cons$0$.value;
        val_ = arg$Assign$1$;
        var_ = arg$Assign$0$;
        if (csp instanceof constraints.CSP.class) {
          arg$CSP$0$ = csp.vars;
          arg$CSP$1$ = csp.vals;
          arg$CSP$2$ = csp.rel;
          rel = arg$CSP$2$;
          vals = arg$CSP$1$;
          f4 = function f4(cs, varval) {
            let scrut, scrut1, element1$, element0$, tmp3, tmp4, tmp5, tmp6, tmp7;
            if (runtime.Tuple.isArrayLike(varval) && varval.length === 2) {
              element0$ = runtime.Tuple.get(varval, 0);
              element1$ = runtime.Tuple.get(varval, 1);
              scrut = cs === constraints.Unknown;
              if (scrut === true) {
                tmp3 = constraints.Assign(var_, val_);
                tmp4 = constraints.Assign(element0$, element1$);
                tmp5 = runtime.safeCall(rel(tmp3, tmp4));
                scrut1 = ! tmp5;
                if (scrut1 === true) {
                  tmp6 = NofibPrelude.Cons(element0$, NofibPrelude.Nil);
                  tmp7 = NofibPrelude.Cons(var_, tmp6);
                  return constraints.Known(tmp7)
                }
                return cs;
              }
              return cs;
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          };
          lscomp1 = function lscomp1(ls) {
            let lscomp2, varrr, arg$Cons$0$1, arg$Cons$1$, tmp3, tmp4, tmp5;
            if (ls instanceof NofibPrelude.Nil.class) {
              return NofibPrelude.Nil
            } else if (ls instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$1 = ls.head;
              arg$Cons$1$ = ls.tail;
              varrr = arg$Cons$0$1;
              lscomp2 = function lscomp2(ls1) {
                let arg$Cons$0$2, arg$Cons$1$1, tmp6, tmp7;
                if (ls1 instanceof NofibPrelude.Nil.class) {
                  return NofibPrelude.Nil
                } else if (ls1 instanceof NofibPrelude.Cons.class) {
                  arg$Cons$0$2 = ls1.head;
                  arg$Cons$1$1 = ls1.tail;
                  tmp6 = globalThis.Object.freeze([
                    varrr,
                    arg$Cons$0$2
                  ]);
                  tmp7 = lscomp2(arg$Cons$1$1);
                  return NofibPrelude.Cons(tmp6, tmp7)
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              };
              tmp3 = NofibPrelude.enumFromTo(1, vals);
              tmp4 = lscomp2(tmp3);
              tmp5 = lscomp1(arg$Cons$1$);
              return NofibPrelude.Cons(tmp4, tmp5)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          };
          lambda = (undefined, function (x, y) {
            return NofibPrelude.zipWith(f4, x, y)
          });
          tmp = var_ + 1;
          tmp1 = NofibPrelude.enumFromTo(tmp, arg$CSP$0$);
          tmp2 = lscomp1(tmp1);
          return NofibPrelude.zipWith(lambda, tbl, tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static lookupCache(csp, t) {
    let lambda;
    lambda = (undefined, function (x) {
      let csp1, inlinedVal, tableEntry, scrut, element1$, element0$, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
      csp1 = csp;
      if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
        element0$ = runtime.Tuple.get(x, 0);
        element1$ = runtime.Tuple.get(x, 1);
        if (element0$ instanceof NofibPrelude.Nil.class) {
          tmp = globalThis.Object.freeze([
            NofibPrelude.Nil,
            constraints.Unknown
          ]);
          inlinedVal = globalThis.Object.freeze([
            tmp,
            element1$
          ]);
          return inlinedVal
        } else if (element0$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = element0$.head;
          arg$Cons$1$ = element0$.tail;
          tmp1 = constraints.value(arg$Cons$0$);
          tmp2 = tmp1 - 1;
          tmp3 = NofibPrelude.head(element1$);
          tableEntry = NofibPrelude.atIndex(tmp2, tmp3);
          scrut = tableEntry === constraints.Unknown;
          if (scrut === true) {
            tmp4 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
            tmp5 = constraints.checkComplete(csp1, tmp4);
          } else {
            tmp5 = tableEntry;
          }
          tmp6 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
          tmp7 = globalThis.Object.freeze([
            tmp6,
            tmp5
          ]);
          inlinedVal = globalThis.Object.freeze([
            tmp7,
            element1$
          ]);
          return inlinedVal
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return constraints.mapTree(lambda, t)
  } 
  static cacheChecks(csp, tbl, n) {
    let s, arg$Node$0$, arg$Node$1$, tmp, lambda, tmp1;
    if (n instanceof constraints.Node.class) {
      arg$Node$0$ = n.lab;
      arg$Node$1$ = n.children;
      s = arg$Node$0$;
      tmp = globalThis.Object.freeze([
        s,
        tbl
      ]);
      lambda = (undefined, function (x) {
        let tmp2, tmp3;
        tmp2 = NofibPrelude.tail(tbl);
        tmp3 = constraints.fillTable(s, csp, tmp2);
        return constraints.cacheChecks(csp, tmp3, x)
      });
      tmp1 = NofibPrelude.map(lambda, arg$Node$1$);
      return constraints.Node(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static bm(csp, t) {
    let tmp, tmp1, tmp2;
    tmp = constraints.emptyTable(csp);
    tmp1 = constraints.cacheChecks(csp, tmp, t);
    tmp2 = constraints.lookupCache(csp, tmp1);
    return constraints.mapTree(NofibPrelude.fst, tmp2)
  } 
  static combine(ls, acc) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, arg$Known$0$, tmp, tmp1;
      if (ls instanceof NofibPrelude.Nil.class) {
        return acc
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          if (element1$ instanceof constraints.Known.class) {
            arg$Known$0$ = element1$.vs;
            tmp = constraints.maxLevel(element0$);
            scrut = NofibPrelude.notElem(tmp, arg$Known$0$);
            if (scrut === true) {
              return arg$Known$0$
            }
            tmp1 = NofibPrelude.union(arg$Known$0$, acc);
            ls = arg$Cons$1$;
            acc = tmp1;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static bj_(csp, t) {
    let f7;
    f7 = function f7(tp2, chs) {
      let cs_, scrut, element1$, element0$, arg$Known$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
      if (runtime.Tuple.isArrayLike(tp2) && tp2.length === 2) {
        element0$ = runtime.Tuple.get(tp2, 0);
        element1$ = runtime.Tuple.get(tp2, 1);
        if (element1$ instanceof constraints.Known.class) {
          arg$Known$0$ = element1$.vs;
          tmp = constraints.Known(arg$Known$0$);
          tmp1 = globalThis.Object.freeze([
            element0$,
            tmp
          ]);
          return constraints.Node(tmp1, chs)
        } else if (element1$ instanceof constraints.Unknown.class) {
          tmp2 = NofibPrelude.map(constraints.label, chs);
          tmp3 = constraints.combine(tmp2, NofibPrelude.Nil);
          cs_ = constraints.Known(tmp3);
          scrut = constraints.knownConflict(cs_);
          if (scrut === true) {
            tmp4 = globalThis.Object.freeze([
              element0$,
              cs_
            ]);
            return constraints.Node(tmp4, NofibPrelude.Nil)
          }
          tmp5 = globalThis.Object.freeze([
            element0$,
            cs_
          ]);
          return constraints.Node(tmp5, chs);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    return constraints.foldTree(f7, t)
  } 
  static bj(csp, t) {
    let f6;
    f6 = function f6(tp2, chs) {
      let element1$, element0$, arg$Known$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
      if (runtime.Tuple.isArrayLike(tp2) && tp2.length === 2) {
        element0$ = runtime.Tuple.get(tp2, 0);
        element1$ = runtime.Tuple.get(tp2, 1);
        if (element1$ instanceof constraints.Known.class) {
          arg$Known$0$ = element1$.vs;
          tmp = constraints.Known(arg$Known$0$);
          tmp1 = globalThis.Object.freeze([
            element0$,
            tmp
          ]);
          return constraints.Node(tmp1, chs)
        } else if (element1$ instanceof constraints.Unknown.class) {
          tmp2 = NofibPrelude.map(constraints.label, chs);
          tmp3 = constraints.combine(tmp2, NofibPrelude.Nil);
          tmp4 = constraints.Known(tmp3);
          tmp5 = globalThis.Object.freeze([
            element0$,
            tmp4
          ]);
          return constraints.Node(tmp5, chs)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    return constraints.foldTree(f6, t)
  } 
  static bjbt(csp, t) {
    let tmp;
    tmp = constraints.bt(csp, t);
    return constraints.bj(csp, tmp)
  } 
  static bjbt_(csp, t) {
    let tmp;
    tmp = constraints.bt(csp, t);
    return constraints.bj_(csp, tmp)
  } 
  static collect(ls) {
    let arg$Cons$0$, arg$Cons$1$, arg$Known$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof constraints.Known.class) {
        arg$Known$0$ = arg$Cons$0$.vs;
        tmp = constraints.collect(arg$Cons$1$);
        return NofibPrelude.union(arg$Known$0$, tmp)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static domainWipeout(csp, t) {
    let f8;
    if (csp instanceof constraints.CSP.class) {
      f8 = function f8(tp2) {
        let lscomp1, wipedDomains, scrut, element1$, element0$, element1$1, element0$1, tmp, tmp1, tmp2;
        if (runtime.Tuple.isArrayLike(tp2) && tp2.length === 2) {
          element0$ = runtime.Tuple.get(tp2, 0);
          element1$ = runtime.Tuple.get(tp2, 1);
          if (runtime.Tuple.isArrayLike(element0$) && element0$.length === 2) {
            element0$1 = runtime.Tuple.get(element0$, 0);
            element1$1 = runtime.Tuple.get(element0$, 1);
            lscomp1 = function lscomp1(ls) {
              let scrut1, arg$Cons$0$, arg$Cons$1$, tmp3;
              if (ls instanceof NofibPrelude.Nil.class) {
                return NofibPrelude.Nil
              } else if (ls instanceof NofibPrelude.Cons.class) {
                arg$Cons$0$ = ls.head;
                arg$Cons$1$ = ls.tail;
                scrut1 = NofibPrelude.all(constraints.knownConflict, arg$Cons$0$);
                if (scrut1 === true) {
                  tmp3 = lscomp1(arg$Cons$1$);
                  return NofibPrelude.Cons(arg$Cons$0$, tmp3)
                }
                return lscomp1(arg$Cons$1$);
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            };
            wipedDomains = lscomp1(element1$);
            scrut = NofibPrelude.null_(wipedDomains);
            if (scrut === true) {
              tmp = element1$1;
              return globalThis.Object.freeze([
                element0$1,
                element1$1
              ])
            }
            tmp1 = NofibPrelude.head(wipedDomains);
            tmp2 = constraints.collect(tmp1);
            tmp = constraints.Known(tmp2);
            return globalThis.Object.freeze([
              element0$1,
              tmp
            ]);
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      return constraints.mapTree(f8, t)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static fc(csp, t) {
    let tmp, tmp1, tmp2;
    tmp = constraints.emptyTable(csp);
    tmp1 = constraints.cacheChecks(csp, tmp, t);
    tmp2 = constraints.lookupCache(csp, tmp1);
    return constraints.domainWipeout(csp, tmp2)
  } 
  static try_(n, algorithm) {
    let tmp, tmp1;
    tmp = constraints.queens(n);
    tmp1 = constraints.search(algorithm, tmp);
    return NofibPrelude.listLen(tmp1)
  } 
  static testConstraints_nofib(n) {
    let lambda, tmp, tmp1, tmp2, tmp3, tmp4;
    lambda = (undefined, function (x) {
      return constraints.try_(n, x)
    });
    tmp = NofibPrelude.Cons(constraints.fc, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(constraints.bjbt_, tmp);
    tmp2 = NofibPrelude.Cons(constraints.bjbt, tmp1);
    tmp3 = NofibPrelude.Cons(constraints.bm, tmp2);
    tmp4 = NofibPrelude.Cons(constraints.bt, tmp3);
    return NofibPrelude.map(lambda, tmp4)
  } 
  static main() {
    let tmp;
    tmp = constraints.testConstraints_nofib(6);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "constraints"]; 
});
let constraints = constraints1; export default constraints;
