const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let lambda1;
(class lambda {
  static {
    lambda1 = this
  }
  static {
    let lambda2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34;
    this.MyState = function MyState(r) {
      return globalThis.Object.freeze(new MyState.class(r));
    };
    (class MyState {
      static {
        lambda.MyState.class = this
      }
      constructor(r) {
        this.r = r;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "MyState", ["r"]]; 
    });
    lambda2 = (undefined, function (s) {
      return globalThis.Object.freeze([
        s,
        s
      ])
    });
    tmp = lambda.MyState(lambda2);
    this.myGet = tmp;
    (class Term {
      static {
        lambda.Term = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Term"]; 
    });
    (class Incr extends lambda.Term {
      static {
        new this
      }
      constructor() {
        super();
        lambda.Incr = this;
        Object.defineProperty(this, "class", {
          value: Incr
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Incr"]; 
    });
    this.Var = function Var(s) {
      return globalThis.Object.freeze(new Var.class(s));
    };
    (class Var extends lambda.Term {
      static {
        lambda.Var.class = this
      }
      constructor(s) {
        super();
        this.s = s;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Var", ["s"]]; 
    });
    this.Con = function Con(i) {
      return globalThis.Object.freeze(new Con.class(i));
    };
    (class Con extends lambda.Term {
      static {
        lambda.Con.class = this
      }
      constructor(i) {
        super();
        this.i = i;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Con", ["i"]]; 
    });
    this.Add = function Add(a, b) {
      return globalThis.Object.freeze(new Add.class(a, b));
    };
    (class Add extends lambda.Term {
      static {
        lambda.Add.class = this
      }
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Add", ["a", "b"]]; 
    });
    this.Lam = function Lam(s, t) {
      return globalThis.Object.freeze(new Lam.class(s, t));
    };
    (class Lam extends lambda.Term {
      static {
        lambda.Lam.class = this
      }
      constructor(s, t) {
        super();
        this.s = s;
        this.t = t;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Lam", ["s", "t"]]; 
    });
    this.App = function App(a, b) {
      return globalThis.Object.freeze(new App.class(a, b));
    };
    (class App extends lambda.Term {
      static {
        lambda.App.class = this
      }
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "App", ["a", "b"]]; 
    });
    this.IfZero = function IfZero(a, b, c) {
      return globalThis.Object.freeze(new IfZero.class(a, b, c));
    };
    (class IfZero extends lambda.Term {
      static {
        lambda.IfZero.class = this
      }
      constructor(a, b, c) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "IfZero", ["a", "b", "c"]]; 
    });
    this.Thunk = function Thunk(t, e) {
      return globalThis.Object.freeze(new Thunk.class(t, e));
    };
    (class Thunk extends lambda.Term {
      static {
        lambda.Thunk.class = this
      }
      constructor(t, e) {
        super();
        this.t = t;
        this.e = e;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Thunk", ["t", "e"]]; 
    });
    (class Unit {
      static {
        new this
      }
      constructor() {
        lambda.Unit = this;
        Object.defineProperty(this, "class", {
          value: Unit
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Unit"]; 
    });
    tmp1 = lambda.myReturn(lambda.Unit);
    this.incr = tmp1;
    tmp2 = NofibPrelude.nofibStringToList("x");
    tmp3 = NofibPrelude.nofibStringToList("F");
    tmp4 = lambda.Var(tmp3);
    tmp5 = NofibPrelude.nofibStringToList("x");
    tmp6 = lambda.Var(tmp5);
    tmp7 = NofibPrelude.nofibStringToList("x");
    tmp8 = lambda.Var(tmp7);
    tmp9 = lambda.App(tmp6, tmp8);
    tmp10 = lambda.App(tmp4, tmp9);
    tmp11 = lambda.Lam(tmp2, tmp10);
    this.lfxx = tmp11;
    tmp12 = NofibPrelude.nofibStringToList("F");
    tmp13 = lambda.App(lambda.lfxx, lambda.lfxx);
    tmp14 = lambda.Lam(tmp12, tmp13);
    this.fix = tmp14;
    tmp15 = NofibPrelude.nofibStringToList("n");
    tmp16 = lambda.Var(tmp15);
    tmp17 = - 1;
    tmp18 = lambda.Con(tmp17);
    tmp19 = lambda.Add(tmp16, tmp18);
    this.nMinus1 = tmp19;
    tmp20 = NofibPrelude.nofibStringToList("sum");
    tmp21 = NofibPrelude.nofibStringToList("n");
    tmp22 = NofibPrelude.nofibStringToList("n");
    tmp23 = lambda.Var(tmp22);
    tmp24 = lambda.Con(0);
    tmp25 = NofibPrelude.nofibStringToList("n");
    tmp26 = lambda.Var(tmp25);
    tmp27 = NofibPrelude.nofibStringToList("sum");
    tmp28 = lambda.Var(tmp27);
    tmp29 = lambda.App(tmp28, lambda.nMinus1);
    tmp30 = lambda.Add(tmp26, tmp29);
    tmp31 = lambda.IfZero(tmp23, tmp24, tmp30);
    tmp32 = lambda.Lam(tmp21, tmp31);
    tmp33 = lambda.Lam(tmp20, tmp32);
    this.partialSum0 = tmp33;
    tmp34 = lambda.App(lambda.fix, lambda.partialSum0);
    this.sum0 = tmp34;
  }
  static eqEnv_eqTerm(id, param0, param1) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          let b, s1, t1, s2, t2, d, scrut, scrut1, arg$Cons$0$, arg$Cons$1$, element1$, element0$, arg$Cons$0$1, arg$Cons$1$1, element1$1, element0$1;
          if (param0 instanceof NofibPrelude.Nil.class) {
            if (param1 instanceof NofibPrelude.Nil.class) {
              return true
            }
            return false;
          } else if (param0 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param0.head;
            arg$Cons$1$ = param0.tail;
            if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
              element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
              element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
              b = arg$Cons$1$;
              t1 = element1$;
              s1 = element0$;
              if (b instanceof NofibPrelude.Cons.class) {
                arg$Cons$0$1 = b.head;
                arg$Cons$1$1 = b.tail;
                if (runtime.Tuple.isArrayLike(arg$Cons$0$1) && arg$Cons$0$1.length === 2) {
                  element0$1 = runtime.Tuple.get(arg$Cons$0$1, 0);
                  element1$1 = runtime.Tuple.get(arg$Cons$0$1, 1);
                  d = arg$Cons$1$1;
                  t2 = element1$1;
                  s2 = element0$1;
                  scrut = NofibPrelude.listEq(s1, s2);
                  if (scrut === true) {
                    scrut1 = lambda.eqTerm(t1, t2);
                    if (scrut1 === true) {
                      param0 = b;
                      param1 = d;
                      id = 0;
                      continue loopLabel
                    }
                    return false;
                  }
                  return false;
                }
                return false;
              }
              return false;
            }
            return false;
          }
          return false;
        case 1:
          let a, b1, a1, b2, a2, b3, c, d1, a3, b4, c1, d2, a4, b5, c2, d3, a5, b6, c3, e, f, d4, a6, b7, c4, d5, arg$Thunk$0$, arg$Thunk$1$, arg$Thunk$0$1, arg$Thunk$1$1, arg$IfZero$0$, arg$IfZero$1$, arg$IfZero$2$, arg$IfZero$0$1, arg$IfZero$1$1, arg$IfZero$2$1, arg$App$0$, arg$App$1$, arg$App$0$1, arg$App$1$1, arg$Lam$0$, arg$Lam$1$, arg$Lam$0$1, arg$Lam$1$1, arg$Add$0$, arg$Add$1$, arg$Add$0$1, arg$Add$1$1, arg$Con$0$, arg$Con$0$1, arg$Var$0$, arg$Var$0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
          if (param0 instanceof lambda.Var.class) {
            arg$Var$0$ = param0.s;
            a = arg$Var$0$;
            if (param1 instanceof lambda.Var.class) {
              arg$Var$0$1 = param1.s;
              b1 = arg$Var$0$1;
              return NofibPrelude.listEq(a, b1)
            }
            return false;
          } else if (param0 instanceof lambda.Con.class) {
            arg$Con$0$ = param0.i;
            a1 = arg$Con$0$;
            if (param1 instanceof lambda.Con.class) {
              arg$Con$0$1 = param1.i;
              b2 = arg$Con$0$1;
              return a1 === b2
            }
            return false;
          } else if (param0 instanceof lambda.Incr.class) {
            if (param1 instanceof lambda.Incr.class) {
              return true
            }
            return false;
          } else if (param0 instanceof lambda.Add.class) {
            arg$Add$0$ = param0.a;
            arg$Add$1$ = param0.b;
            b3 = arg$Add$1$;
            a2 = arg$Add$0$;
            if (b3 instanceof lambda.Add.class) {
              arg$Add$0$1 = b3.a;
              arg$Add$1$1 = b3.b;
              d1 = arg$Add$1$1;
              c = arg$Add$0$1;
              tmp = lambda.eqTerm(a2, c);
              if (tmp === true) {
                param0 = b3;
                param1 = d1;
                id = 1;
                continue loopLabel
              }
              return false;
            }
            return false;
          } else if (param0 instanceof lambda.Lam.class) {
            arg$Lam$0$ = param0.s;
            arg$Lam$1$ = param0.t;
            b4 = arg$Lam$1$;
            a3 = arg$Lam$0$;
            if (b4 instanceof lambda.Lam.class) {
              arg$Lam$0$1 = b4.s;
              arg$Lam$1$1 = b4.t;
              d2 = arg$Lam$1$1;
              c1 = arg$Lam$0$1;
              tmp1 = NofibPrelude.listEq(a3, c1);
              if (tmp1 === true) {
                param0 = b4;
                param1 = d2;
                id = 1;
                continue loopLabel
              }
              return false;
            }
            return false;
          } else if (param0 instanceof lambda.App.class) {
            arg$App$0$ = param0.a;
            arg$App$1$ = param0.b;
            b5 = arg$App$1$;
            a4 = arg$App$0$;
            if (b5 instanceof lambda.App.class) {
              arg$App$0$1 = b5.a;
              arg$App$1$1 = b5.b;
              d3 = arg$App$1$1;
              c2 = arg$App$0$1;
              tmp2 = lambda.eqTerm(a4, c2);
              if (tmp2 === true) {
                param0 = b5;
                param1 = d3;
                id = 1;
                continue loopLabel
              }
              return false;
            }
            return false;
          } else if (param0 instanceof lambda.IfZero.class) {
            arg$IfZero$0$ = param0.a;
            arg$IfZero$1$ = param0.b;
            arg$IfZero$2$ = param0.c;
            c3 = arg$IfZero$2$;
            b6 = arg$IfZero$1$;
            a5 = arg$IfZero$0$;
            if (b6 instanceof lambda.IfZero.class) {
              arg$IfZero$0$1 = b6.a;
              arg$IfZero$1$1 = b6.b;
              arg$IfZero$2$1 = b6.c;
              f = arg$IfZero$2$1;
              e = arg$IfZero$1$1;
              d4 = arg$IfZero$0$1;
              tmp3 = lambda.eqTerm(a5, d4);
              if (tmp3 === true) {
                tmp4 = lambda.eqTerm(b6, e);
              } else {
                tmp4 = false;
              }
              if (tmp4 === true) {
                param0 = c3;
                param1 = f;
                id = 1;
                continue loopLabel
              }
              return false;
            }
            return false;
          } else if (param0 instanceof lambda.Thunk.class) {
            arg$Thunk$0$ = param0.t;
            arg$Thunk$1$ = param0.e;
            b7 = arg$Thunk$1$;
            a6 = arg$Thunk$0$;
            if (b7 instanceof lambda.Thunk.class) {
              arg$Thunk$0$1 = b7.t;
              arg$Thunk$1$1 = b7.e;
              d5 = arg$Thunk$1$1;
              c4 = arg$Thunk$0$1;
              tmp5 = lambda.eqTerm(a6, c4);
              if (tmp5 === true) {
                param0 = b7;
                param1 = d5;
                id = 0;
                continue loopLabel
              }
              return false;
            }
            return false;
          }
          return false;
      }
      break;
    }
  } 
  static traverseTerm_traverseCon_eval(id, param0) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          id = 2;
          continue loopLabel;
        case 1:
          let tmp, lambda2;
          tmp = lambda.traverseTerm(param0);
          lambda2 = (undefined, function (_t) {
            let c, arg$Con$0$;
            if (_t instanceof lambda.Con.class) {
              arg$Con$0$ = _t.i;
              c = arg$Con$0$;
              return lambda.myReturn(c)
            }
            throw runtime.safeCall(globalThis.Error("Not a Con"));
          });
          return lambda.myBind(tmp, lambda2);
        case 2:
          let x, u, v, e, t, x1, b, u1, v1, a, b1, c, i, arg$Con$0$, arg$IfZero$0$, arg$IfZero$1$, arg$IfZero$2$, arg$App$0$, arg$App$1$, arg$Lam$0$, arg$Lam$1$, arg$Thunk$0$, arg$Thunk$1$, arg$Add$0$, arg$Add$1$, arg$Var$0$, lambda3, tmp1, lambda4, tmp2, lambda5, tmp3, lambda6, tmp4, lambda7, tmp5, lambda8;
          if (param0 instanceof lambda.Var.class) {
            arg$Var$0$ = param0.s;
            x = arg$Var$0$;
            lambda3 = (undefined, function (e1) {
              let tmp6, lambda9;
              tmp6 = lambda.lookupVar(x);
              lambda9 = (undefined, function (t1) {
                return lambda.traverseTerm(t1)
              });
              return lambda.myBind(tmp6, lambda9)
            });
            return lambda.myBind(lambda.myGet, lambda3)
          } else if (param0 instanceof lambda.Add.class) {
            arg$Add$0$ = param0.a;
            arg$Add$1$ = param0.b;
            v = arg$Add$1$;
            u = arg$Add$0$;
            tmp1 = lambda.traverseCon(u);
            lambda4 = (undefined, function (u_) {
              let tmp6, lambda9;
              tmp6 = lambda.traverseCon(v);
              lambda9 = (undefined, function (v_) {
                let tmp7, tmp8;
                tmp7 = u_ + v_;
                tmp8 = lambda.Con(tmp7);
                return lambda.myReturn(tmp8)
              });
              return lambda.myBind(tmp6, lambda9)
            });
            return lambda.myBind(tmp1, lambda4)
          } else if (param0 instanceof lambda.Thunk.class) {
            arg$Thunk$0$ = param0.t;
            arg$Thunk$1$ = param0.e;
            e = arg$Thunk$1$;
            t = arg$Thunk$0$;
            tmp2 = lambda.traverseTerm(t);
            return lambda.withEnv(e, tmp2)
          } else if (param0 instanceof lambda.Lam.class) {
            arg$Lam$0$ = param0.s;
            arg$Lam$1$ = param0.t;
            b = arg$Lam$1$;
            x1 = arg$Lam$0$;
            lambda5 = (undefined, function (env) {
              let tmp6, tmp7;
              tmp6 = lambda.Lam(x1, b);
              tmp7 = lambda.Thunk(tmp6, env);
              return lambda.myReturn(tmp7)
            });
            return lambda.myBind(lambda.myGet, lambda5)
          } else if (param0 instanceof lambda.App.class) {
            arg$App$0$ = param0.a;
            arg$App$1$ = param0.b;
            v1 = arg$App$1$;
            u1 = arg$App$0$;
            tmp3 = lambda.traverseTerm(u1);
            lambda6 = (undefined, function (u_) {
              return lambda.apply(u_, v1)
            });
            return lambda.myBind(tmp3, lambda6)
          } else if (param0 instanceof lambda.IfZero.class) {
            arg$IfZero$0$ = param0.a;
            arg$IfZero$1$ = param0.b;
            arg$IfZero$2$ = param0.c;
            b1 = arg$IfZero$2$;
            a = arg$IfZero$1$;
            c = arg$IfZero$0$;
            tmp4 = lambda.traverseTerm(c);
            lambda7 = (undefined, function (vall) {
              let scrut, tmp6;
              tmp6 = lambda.Con(0);
              scrut = lambda.eqTerm(vall, tmp6);
              if (scrut === true) {
                return lambda.traverseTerm(a)
              }
              return lambda.traverseTerm(b1);
            });
            return lambda.myBind(tmp4, lambda7)
          } else if (param0 instanceof lambda.Con.class) {
            arg$Con$0$ = param0.i;
            i = arg$Con$0$;
            tmp5 = lambda.Con(i);
            return lambda.myReturn(tmp5)
          } else if (param0 instanceof lambda.Incr.class) {
            lambda8 = (undefined, function (_dummy) {
              let tmp6;
              tmp6 = lambda.Con(0);
              return lambda.myReturn(tmp6)
            });
            return lambda.myBind(lambda.incr, lambda8)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      break;
    }
  } 
  static simpleEval_simpleApply_simpleEvalCon(id, param0, param1, param2) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          let v, e, u, v1, u_, v_, x, b, u1, v2, u_1, a, b1, c, val_, scrut, e1, t, arg$Thunk$0$, arg$Thunk$1$, arg$IfZero$0$, arg$IfZero$1$, arg$IfZero$2$, arg$App$0$, arg$App$1$, arg$Lam$0$, arg$Lam$1$, arg$Add$0$, arg$Add$1$, arg$Con$0$, arg$Var$0$, lambda2, lambda3, tmp, tmp1, tmp2, tmp3, tmp4;
          if (param1 instanceof lambda.Var.class) {
            arg$Var$0$ = param1.s;
            v = arg$Var$0$;
            lambda2 = (undefined, function (dummy) {
              throw runtime.safeCall(globalThis.Error("undefined var"))
            });
            lambda3 = (undefined, function (x1) {
              return x1
            });
            tmp = lambda.lookup(v, param0);
            tmp1 = lambda.myMaybe(lambda2, lambda3, tmp);
            param1 = tmp1;
            id = 0;
            continue loopLabel
          } else if (param1 instanceof lambda.Con.class) {
            arg$Con$0$ = param1.i;
            e = arg$Con$0$;
            return lambda.Con(e)
          } else if (param1 instanceof lambda.Incr.class) {
            return lambda.Con(0)
          } else if (param1 instanceof lambda.Add.class) {
            arg$Add$0$ = param1.a;
            arg$Add$1$ = param1.b;
            v1 = arg$Add$1$;
            u = arg$Add$0$;
            u_ = lambda.simpleEvalCon(param0, u);
            v_ = lambda.simpleEvalCon(param0, v1);
            tmp2 = u_ + v_;
            return lambda.Con(tmp2)
          } else if (param1 instanceof lambda.Lam.class) {
            arg$Lam$0$ = param1.s;
            arg$Lam$1$ = param1.t;
            b = arg$Lam$1$;
            x = arg$Lam$0$;
            tmp3 = lambda.Lam(x, b);
            return lambda.Thunk(tmp3, param0)
          } else if (param1 instanceof lambda.App.class) {
            arg$App$0$ = param1.a;
            arg$App$1$ = param1.b;
            v2 = arg$App$1$;
            u1 = arg$App$0$;
            u_1 = lambda.simpleEval(param0, u1);
            param1 = u_1;
            param2 = v2;
            id = 1;
            continue loopLabel
          } else if (param1 instanceof lambda.IfZero.class) {
            arg$IfZero$0$ = param1.a;
            arg$IfZero$1$ = param1.b;
            arg$IfZero$2$ = param1.c;
            b1 = arg$IfZero$2$;
            a = arg$IfZero$1$;
            c = arg$IfZero$0$;
            val_ = lambda.simpleEval(param0, c);
            tmp4 = lambda.Con(0);
            scrut = lambda.eqTerm(val_, tmp4);
            if (scrut === true) {
              param1 = a;
              id = 0;
              continue loopLabel
            }
            param1 = b1;
            id = 0;
            continue loopLabel;
          } else if (param1 instanceof lambda.Thunk.class) {
            arg$Thunk$0$ = param1.t;
            arg$Thunk$1$ = param1.e;
            e1 = arg$Thunk$1$;
            t = arg$Thunk$0$;
            param0 = e1;
            param1 = t;
            id = 0;
            continue loopLabel
          }
          throw runtime.safeCall(globalThis.Error(param1));
        case 1:
          let e2, x1, b2, arg$Thunk$0$1, arg$Thunk$1$1, arg$Lam$0$1, arg$Lam$1$1, tmp5, tmp6, tmp7;
          if (param1 instanceof lambda.Thunk.class) {
            arg$Thunk$0$1 = param1.t;
            arg$Thunk$1$1 = param1.e;
            if (arg$Thunk$0$1 instanceof lambda.Lam.class) {
              arg$Lam$0$1 = arg$Thunk$0$1.s;
              arg$Lam$1$1 = arg$Thunk$0$1.t;
              e2 = arg$Thunk$1$1;
              b2 = arg$Lam$1$1;
              x1 = arg$Lam$0$1;
              tmp5 = lambda.Thunk(param2, param0);
              tmp6 = globalThis.Object.freeze([
                x1,
                tmp5
              ]);
              tmp7 = NofibPrelude.Cons(tmp6, e2);
              param0 = tmp7;
              param1 = b2;
              id = 0;
              continue loopLabel
            }
            throw runtime.safeCall(globalThis.Error("bad application"));
          }
          throw runtime.safeCall(globalThis.Error("bad application"));
        case 2:
          let e_, c1, arg$Con$0$1;
          e_ = lambda.simpleEval(param0, param1);
          if (e_ instanceof lambda.Con.class) {
            arg$Con$0$1 = e_.i;
            c1 = arg$Con$0$1;
            return c1
          }
          throw runtime.safeCall(globalThis.Error("Not a Con"));
      }
      break;
    }
  } 
  static lookup(k, t) {
    loopLabel: while (true) {
      let x, t1, v, scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$;
      if (t instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.None
      } else if (t instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = t.head;
        arg$Cons$1$ = t.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          t1 = arg$Cons$1$;
          v = element1$;
          x = element0$;
          scrut = NofibPrelude.listEq(k, x);
          if (scrut === true) {
            return NofibPrelude.Some(v)
          }
          t = t1;
          continue loopLabel;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static myRunState(m, s) {
    let f, arg$MyState$0$;
    if (m instanceof lambda.MyState.class) {
      arg$MyState$0$ = m.r;
      f = arg$MyState$0$;
      return runtime.safeCall(f(s))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static myBind(m, f) {
    let lambda2;
    lambda2 = (undefined, function (s) {
      let scrut, a, s_, element1$, element0$, tmp;
      scrut = lambda.myRunState(m, s);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        a = element1$;
        s_ = element0$;
        tmp = runtime.safeCall(f(a));
        return lambda.myRunState(tmp, s_)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return lambda.MyState(lambda2)
  } 
  static myReturn(a) {
    let lambda2;
    lambda2 = (undefined, function (s) {
      return globalThis.Object.freeze([
        s,
        a
      ])
    });
    return lambda.MyState(lambda2)
  } 
  static myEvalState(m, s) {
    let scrut, a, element1$;
    scrut = lambda.myRunState(m, s);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      a = element1$;
      return a
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static eqEnv(a, b) {
    return lambda.eqEnv_eqTerm(0, a, b)
  } 
  static eqTerm(a, b) {
    return lambda.eqEnv_eqTerm(1, a, b)
  } 
  static myMaybe(d, f, x) {
    let x1, arg$Some$0$;
    if (x instanceof NofibPrelude.Some.class) {
      arg$Some$0$ = x.x;
      x1 = arg$Some$0$;
      return runtime.safeCall(f(x1))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static lookupVar(v) {
    let lambda2;
    lambda2 = (undefined, function (env) {
      let tmp, env1, inlinedVal, lambda3, lambda4, tmp1;
      env1 = env;
      lambda3 = (undefined, function (dummy) {
        throw runtime.safeCall(globalThis.Error("undefined"))
      });
      lambda4 = (undefined, function (x) {
        return x
      });
      tmp1 = lambda.lookup(v, env1);
      inlinedVal = lambda.myMaybe(lambda3, lambda4, tmp1);
      tmp = inlinedVal;
      return lambda.myReturn(tmp)
    });
    return lambda.myBind(lambda.myGet, lambda2)
  } 
  static withEnv(tmp, m) {
    let tmp1;
    tmp1 = lambda.myEvalState(m, tmp);
    return lambda.myReturn(tmp1)
  } 
  static pushVar(v, t, m) {
    let lambda2;
    lambda2 = (undefined, function (env) {
      let tmp, tmp1;
      tmp = globalThis.Object.freeze([
        v,
        t
      ]);
      tmp1 = NofibPrelude.Cons(tmp, env);
      return lambda.withEnv(tmp1, m)
    });
    return lambda.myBind(lambda.myGet, lambda2)
  } 
  static traverseTerm(t) {
    return lambda.traverseTerm_traverseCon_eval(0, t)
  } 
  static traverseCon(t) {
    return lambda.traverseTerm_traverseCon_eval(1, t)
  } 
  static apply(t, a) {
    let e, x, b, arg$Thunk$0$, arg$Thunk$1$, arg$Lam$0$, arg$Lam$1$, lambda2;
    if (t instanceof lambda.Thunk.class) {
      arg$Thunk$0$ = t.t;
      arg$Thunk$1$ = t.e;
      if (arg$Thunk$0$ instanceof lambda.Lam.class) {
        arg$Lam$0$ = arg$Thunk$0$.s;
        arg$Lam$1$ = arg$Thunk$0$.t;
        e = arg$Thunk$1$;
        b = arg$Lam$1$;
        x = arg$Lam$0$;
        lambda2 = (undefined, function (orig) {
          let tmp, tmp1, tmp2;
          tmp = lambda.Thunk(a, orig);
          tmp1 = lambda.traverseTerm(b);
          tmp2 = lambda.pushVar(x, tmp, tmp1);
          return lambda.withEnv(e, tmp2)
        });
        return lambda.myBind(lambda.myGet, lambda2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static eval(ter) {
    return lambda.traverseTerm_traverseCon_eval(2, ter)
  } 
  static simpleEval(env, ter) {
    return lambda.simpleEval_simpleApply_simpleEvalCon(0, env, ter, undefined)
  } 
  static simpleApply(env, t, a) {
    return lambda.simpleEval_simpleApply_simpleEvalCon(1, env, t, a)
  } 
  static simpleEvalCon(env, e) {
    return lambda.simpleEval_simpleApply_simpleEvalCon(2, env, e, undefined)
  } 
  static bracket(ot, ths, t) {
    let scrut, tmp, tmp1;
    scrut = ths <= ot;
    if (scrut === true) {
      tmp = NofibPrelude.nofibStringToList(")");
      tmp1 = NofibPrelude.append(t, tmp);
      return NofibPrelude.Cons("(", tmp1)
    }
    return t;
  } 
  static ppn(n, ter) {
    let v, i, t, v1, a, b, a1, b1, a2, b2, c, e, t1, arg$Thunk$0$, arg$Thunk$1$, arg$IfZero$0$, arg$IfZero$1$, arg$IfZero$2$, arg$App$0$, arg$App$1$, arg$Add$0$, arg$Add$1$, arg$Lam$0$, arg$Lam$1$, arg$Con$0$, arg$Var$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32;
    if (ter instanceof lambda.Var.class) {
      arg$Var$0$ = ter.s;
      v = arg$Var$0$;
      return v
    } else if (ter instanceof lambda.Con.class) {
      arg$Con$0$ = ter.i;
      i = arg$Con$0$;
      tmp = NofibPrelude.stringOfInt(i);
      return NofibPrelude.nofibStringToList(tmp)
    } else if (ter instanceof lambda.Incr.class) {
      return NofibPrelude.nofibStringToList("INCR")
    } else if (ter instanceof lambda.Lam.class) {
      arg$Lam$0$ = ter.s;
      arg$Lam$1$ = ter.t;
      t = arg$Lam$1$;
      v1 = arg$Lam$0$;
      tmp1 = NofibPrelude.nofibStringToList(". ");
      tmp2 = 0 - 1;
      tmp3 = lambda.ppn(tmp2, t);
      tmp4 = NofibPrelude.append(tmp1, tmp3);
      tmp5 = NofibPrelude.append(v1, tmp4);
      tmp6 = NofibPrelude.Cons("@", tmp5);
      return lambda.bracket(n, 0, tmp6)
    } else if (ter instanceof lambda.Add.class) {
      arg$Add$0$ = ter.a;
      arg$Add$1$ = ter.b;
      b = arg$Add$1$;
      a = arg$Add$0$;
      tmp7 = lambda.ppn(1, a);
      tmp8 = NofibPrelude.nofibStringToList(" + ");
      tmp9 = lambda.ppn(1, b);
      tmp10 = NofibPrelude.append(tmp8, tmp9);
      tmp11 = NofibPrelude.append(tmp7, tmp10);
      return lambda.bracket(n, 1, tmp11)
    } else if (ter instanceof lambda.App.class) {
      arg$App$0$ = ter.a;
      arg$App$1$ = ter.b;
      b1 = arg$App$1$;
      a1 = arg$App$0$;
      tmp12 = lambda.ppn(2, a1);
      tmp13 = NofibPrelude.nofibStringToList(" ");
      tmp14 = lambda.ppn(2, b1);
      tmp15 = NofibPrelude.append(tmp13, tmp14);
      tmp16 = NofibPrelude.append(tmp12, tmp15);
      return lambda.bracket(n, 2, tmp16)
    } else if (ter instanceof lambda.IfZero.class) {
      arg$IfZero$0$ = ter.a;
      arg$IfZero$1$ = ter.b;
      arg$IfZero$2$ = ter.c;
      b2 = arg$IfZero$2$;
      a2 = arg$IfZero$1$;
      c = arg$IfZero$0$;
      tmp17 = NofibPrelude.nofibStringToList("IF ");
      tmp18 = lambda.ppn(0, c);
      tmp19 = NofibPrelude.nofibStringToList(" THEN ");
      tmp20 = lambda.ppn(0, a2);
      tmp21 = NofibPrelude.nofibStringToList(" ELSE ");
      tmp22 = lambda.ppn(0, b2);
      tmp23 = NofibPrelude.append(tmp21, tmp22);
      tmp24 = NofibPrelude.append(tmp20, tmp23);
      tmp25 = NofibPrelude.append(tmp19, tmp24);
      tmp26 = NofibPrelude.append(tmp18, tmp25);
      tmp27 = NofibPrelude.append(tmp17, tmp26);
      return lambda.bracket(n, 0, tmp27)
    } else if (ter instanceof lambda.Thunk.class) {
      arg$Thunk$0$ = ter.t;
      arg$Thunk$1$ = ter.e;
      e = arg$Thunk$1$;
      t1 = arg$Thunk$0$;
      tmp28 = lambda.ppn(3, t1);
      tmp29 = NofibPrelude.nofibStringToList("::");
      tmp30 = lambda.ppenv(e);
      tmp31 = NofibPrelude.append(tmp29, tmp30);
      tmp32 = NofibPrelude.append(tmp28, tmp31);
      return lambda.bracket(n, 0, tmp32)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static pp(t) {
    return lambda.ppn(0, t)
  } 
  static ppenv(env) {
    let tmp, lambda2, tmp1, tmp2, tmp3;
    tmp = NofibPrelude.nofibStringToList("[");
    lambda2 = (undefined, function (caseScrut) {
      let t, v, element1$, element0$, tmp4, tmp5, tmp6, tmp7, tmp8;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
        element0$ = runtime.Tuple.get(caseScrut, 0);
        element1$ = runtime.Tuple.get(caseScrut, 1);
        t = element1$;
        v = element0$;
        tmp4 = NofibPrelude.nofibStringToList("=");
        tmp5 = lambda.pp(t);
        tmp6 = NofibPrelude.nofibStringToList(", ");
        tmp7 = NofibPrelude.append(tmp5, tmp6);
        tmp8 = NofibPrelude.append(tmp4, tmp7);
        return NofibPrelude.append(v, tmp8)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    tmp1 = NofibPrelude.flatMap(lambda2, env);
    tmp2 = NofibPrelude.nofibStringToList("]");
    tmp3 = NofibPrelude.append(tmp1, tmp2);
    return NofibPrelude.append(tmp, tmp3)
  } 
  static showTerm(t) {
    let a, arg$Con$0$, tmp, tmp1, tmp2;
    if (t instanceof lambda.Con.class) {
      arg$Con$0$ = t.i;
      a = arg$Con$0$;
      tmp = NofibPrelude.nofibStringToList("Con ");
      tmp1 = NofibPrelude.stringOfInt(a);
      tmp2 = NofibPrelude.nofibStringToList(tmp1);
      return NofibPrelude.append(tmp, tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static ev(t) {
    let envt2, t2, env, tmp, element1$, element0$, tmp1, tmp2, tmp3, tmp4;
    tmp = lambda.traverseTerm(t);
    envt2 = lambda.myRunState(tmp, NofibPrelude.Nil);
    if (runtime.Tuple.isArrayLike(envt2) && envt2.length === 2) {
      element0$ = runtime.Tuple.get(envt2, 0);
      element1$ = runtime.Tuple.get(envt2, 1);
      t2 = element1$;
      env = element0$;
      tmp1 = lambda.pp(t2);
      tmp2 = NofibPrelude.nofibStringToList("  ");
      tmp3 = lambda.ppenv(env);
      tmp4 = NofibPrelude.append(tmp2, tmp3);
      return NofibPrelude.append(tmp1, tmp4)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static mainSimple(args) {
    let scrut, tmp, tmp1, tmp2, tmp3;
    scrut = NofibPrelude.null_(args);
    if (scrut === true) {
      throw runtime.safeCall(globalThis.Error("Args: number-to-sum-up-to"))
    }
    tmp = NofibPrelude.head(args);
    tmp1 = lambda.Con(tmp);
    tmp2 = lambda.App(lambda.sum0, tmp1);
    tmp3 = lambda.simpleEval(NofibPrelude.Nil, tmp2);
    return lambda.showTerm(tmp3);
  } 
  static mainMonad(args) {
    let scrut, tmp, tmp1, tmp2;
    scrut = NofibPrelude.null_(args);
    if (scrut === true) {
      throw runtime.safeCall(globalThis.Error("Args: number-to-sum-up-to"))
    }
    tmp = NofibPrelude.head(args);
    tmp1 = lambda.Con(tmp);
    tmp2 = lambda.App(lambda.sum0, tmp1);
    return lambda.ev(tmp2);
  } 
  static testLambda_nofib(n) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = NofibPrelude.Cons(n, NofibPrelude.Nil);
    tmp1 = lambda.mainSimple(tmp);
    tmp2 = NofibPrelude.Cons(n, NofibPrelude.Nil);
    tmp3 = lambda.mainMonad(tmp2);
    return globalThis.Object.freeze([
      tmp1,
      tmp3
    ])
  } 
  static main() {
    let tmp;
    tmp = lambda.testLambda_nofib(80);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "lambda"]; 
});
let lambda = lambda1; export default lambda;
