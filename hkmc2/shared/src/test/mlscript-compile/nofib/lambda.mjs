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
    let lambda2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33;
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
    tmp17 = lambda.Con(-1);
    tmp18 = lambda.Add(tmp16, tmp17);
    this.nMinus1 = tmp18;
    tmp19 = NofibPrelude.nofibStringToList("sum");
    tmp20 = NofibPrelude.nofibStringToList("n");
    tmp21 = NofibPrelude.nofibStringToList("n");
    tmp22 = lambda.Var(tmp21);
    tmp23 = lambda.Con(0);
    tmp24 = NofibPrelude.nofibStringToList("n");
    tmp25 = lambda.Var(tmp24);
    tmp26 = NofibPrelude.nofibStringToList("sum");
    tmp27 = lambda.Var(tmp26);
    tmp28 = lambda.App(tmp27, lambda.nMinus1);
    tmp29 = lambda.Add(tmp25, tmp28);
    tmp30 = lambda.IfZero(tmp22, tmp23, tmp29);
    tmp31 = lambda.Lam(tmp20, tmp30);
    tmp32 = lambda.Lam(tmp19, tmp31);
    this.partialSum0 = tmp32;
    tmp33 = lambda.App(lambda.fix, lambda.partialSum0);
    this.sum0 = tmp33;
  }
  static eqEnv_eqTerm(id, param0, param1) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, element1$, element0$, arg$Cons$0$1, arg$Cons$1$1, element1$1, element0$1;
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
              if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
                arg$Cons$0$1 = arg$Cons$1$.head;
                arg$Cons$1$1 = arg$Cons$1$.tail;
                if (runtime.Tuple.isArrayLike(arg$Cons$0$1) && arg$Cons$0$1.length === 2) {
                  element0$1 = runtime.Tuple.get(arg$Cons$0$1, 0);
                  element1$1 = runtime.Tuple.get(arg$Cons$0$1, 1);
                  scrut = NofibPrelude.listEq(element0$, element0$1);
                  if (scrut === true) {
                    scrut1 = lambda.eqTerm(element1$, element1$1);
                    if (scrut1 === true) {
                      param0 = arg$Cons$1$;
                      param1 = arg$Cons$1$1;
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
          let arg$Thunk$0$, arg$Thunk$1$, arg$Thunk$0$1, arg$Thunk$1$1, arg$IfZero$0$, arg$IfZero$1$, arg$IfZero$2$, arg$IfZero$0$1, arg$IfZero$1$1, arg$IfZero$2$1, arg$App$0$, arg$App$1$, arg$App$0$1, arg$App$1$1, arg$Lam$0$, arg$Lam$1$, arg$Lam$0$1, arg$Lam$1$1, arg$Add$0$, arg$Add$1$, arg$Add$0$1, arg$Add$1$1, arg$Con$0$, arg$Con$0$1, arg$Var$0$, arg$Var$0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
          if (param0 instanceof lambda.Var.class) {
            arg$Var$0$ = param0.s;
            if (param1 instanceof lambda.Var.class) {
              arg$Var$0$1 = param1.s;
              return NofibPrelude.listEq(arg$Var$0$, arg$Var$0$1)
            }
            return false;
          } else if (param0 instanceof lambda.Con.class) {
            arg$Con$0$ = param0.i;
            if (param1 instanceof lambda.Con.class) {
              arg$Con$0$1 = param1.i;
              return arg$Con$0$ === arg$Con$0$1
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
            if (arg$Add$1$ instanceof lambda.Add.class) {
              arg$Add$0$1 = arg$Add$1$.a;
              arg$Add$1$1 = arg$Add$1$.b;
              tmp = lambda.eqTerm(arg$Add$0$, arg$Add$0$1);
              if (tmp === true) {
                param0 = arg$Add$1$;
                param1 = arg$Add$1$1;
                id = 1;
                continue loopLabel
              }
              return false;
            }
            return false;
          } else if (param0 instanceof lambda.Lam.class) {
            arg$Lam$0$ = param0.s;
            arg$Lam$1$ = param0.t;
            if (arg$Lam$1$ instanceof lambda.Lam.class) {
              arg$Lam$0$1 = arg$Lam$1$.s;
              arg$Lam$1$1 = arg$Lam$1$.t;
              tmp1 = NofibPrelude.listEq(arg$Lam$0$, arg$Lam$0$1);
              if (tmp1 === true) {
                param0 = arg$Lam$1$;
                param1 = arg$Lam$1$1;
                id = 1;
                continue loopLabel
              }
              return false;
            }
            return false;
          } else if (param0 instanceof lambda.App.class) {
            arg$App$0$ = param0.a;
            arg$App$1$ = param0.b;
            if (arg$App$1$ instanceof lambda.App.class) {
              arg$App$0$1 = arg$App$1$.a;
              arg$App$1$1 = arg$App$1$.b;
              tmp2 = lambda.eqTerm(arg$App$0$, arg$App$0$1);
              if (tmp2 === true) {
                param0 = arg$App$1$;
                param1 = arg$App$1$1;
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
            if (arg$IfZero$1$ instanceof lambda.IfZero.class) {
              arg$IfZero$0$1 = arg$IfZero$1$.a;
              arg$IfZero$1$1 = arg$IfZero$1$.b;
              arg$IfZero$2$1 = arg$IfZero$1$.c;
              tmp3 = lambda.eqTerm(arg$IfZero$0$, arg$IfZero$0$1);
              if (tmp3 === true) {
                tmp4 = lambda.eqTerm(arg$IfZero$1$, arg$IfZero$1$1);
              } else {
                tmp4 = false;
              }
              if (tmp4 === true) {
                param0 = arg$IfZero$2$;
                param1 = arg$IfZero$2$1;
                id = 1;
                continue loopLabel
              }
              return false;
            }
            return false;
          } else if (param0 instanceof lambda.Thunk.class) {
            arg$Thunk$0$ = param0.t;
            arg$Thunk$1$ = param0.e;
            if (arg$Thunk$1$ instanceof lambda.Thunk.class) {
              arg$Thunk$0$1 = arg$Thunk$1$.t;
              arg$Thunk$1$1 = arg$Thunk$1$.e;
              tmp5 = lambda.eqTerm(arg$Thunk$0$, arg$Thunk$0$1);
              if (tmp5 === true) {
                param0 = arg$Thunk$1$;
                param1 = arg$Thunk$1$1;
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
            let arg$Con$0$;
            if (_t instanceof lambda.Con.class) {
              arg$Con$0$ = _t.i;
              return lambda.myReturn(arg$Con$0$)
            }
            throw runtime.safeCall(globalThis.Error("Not a Con"));
          });
          return lambda.myBind(tmp, lambda2);
        case 2:
          let x, v, x1, b, v1, a, b1, arg$Con$0$, arg$IfZero$0$, arg$IfZero$1$, arg$IfZero$2$, arg$App$0$, arg$App$1$, arg$Lam$0$, arg$Lam$1$, arg$Thunk$0$, arg$Thunk$1$, arg$Add$0$, arg$Add$1$, arg$Var$0$, lambda3, tmp1, lambda4, tmp2, lambda5, tmp3, lambda6, tmp4, lambda7, tmp5, lambda8;
          if (param0 instanceof lambda.Var.class) {
            arg$Var$0$ = param0.s;
            x = arg$Var$0$;
            lambda3 = (undefined, function (e) {
              let tmp6, lambda9;
              tmp6 = lambda.lookupVar(x);
              lambda9 = (undefined, function (t) {
                return lambda.traverseTerm(t)
              });
              return lambda.myBind(tmp6, lambda9)
            });
            return lambda.myBind(lambda.myGet, lambda3)
          } else if (param0 instanceof lambda.Add.class) {
            arg$Add$0$ = param0.a;
            arg$Add$1$ = param0.b;
            v = arg$Add$1$;
            tmp1 = lambda.traverseCon(arg$Add$0$);
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
            tmp2 = lambda.traverseTerm(arg$Thunk$0$);
            return lambda.withEnv(arg$Thunk$1$, tmp2)
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
            tmp3 = lambda.traverseTerm(arg$App$0$);
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
            tmp4 = lambda.traverseTerm(arg$IfZero$0$);
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
            tmp5 = lambda.Con(arg$Con$0$);
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
          let u_, v_, u_1, val_, scrut, arg$Thunk$0$, arg$Thunk$1$, arg$IfZero$0$, arg$IfZero$1$, arg$IfZero$2$, arg$App$0$, arg$App$1$, arg$Lam$0$, arg$Lam$1$, arg$Add$0$, arg$Add$1$, arg$Con$0$, arg$Var$0$, lambda2, lambda3, tmp, tmp1, tmp2, tmp3, tmp4;
          if (param1 instanceof lambda.Var.class) {
            arg$Var$0$ = param1.s;
            lambda2 = (undefined, function (dummy) {
              throw runtime.safeCall(globalThis.Error("undefined var"))
            });
            lambda3 = (undefined, function (x) {
              return x
            });
            tmp = lambda.lookup(arg$Var$0$, param0);
            tmp1 = lambda.myMaybe(lambda2, lambda3, tmp);
            param1 = tmp1;
            id = 0;
            continue loopLabel
          } else if (param1 instanceof lambda.Con.class) {
            arg$Con$0$ = param1.i;
            return lambda.Con(arg$Con$0$)
          } else if (param1 instanceof lambda.Incr.class) {
            return lambda.Con(0)
          } else if (param1 instanceof lambda.Add.class) {
            arg$Add$0$ = param1.a;
            arg$Add$1$ = param1.b;
            u_ = lambda.simpleEvalCon(param0, arg$Add$0$);
            v_ = lambda.simpleEvalCon(param0, arg$Add$1$);
            tmp2 = u_ + v_;
            return lambda.Con(tmp2)
          } else if (param1 instanceof lambda.Lam.class) {
            arg$Lam$0$ = param1.s;
            arg$Lam$1$ = param1.t;
            tmp3 = lambda.Lam(arg$Lam$0$, arg$Lam$1$);
            return lambda.Thunk(tmp3, param0)
          } else if (param1 instanceof lambda.App.class) {
            arg$App$0$ = param1.a;
            arg$App$1$ = param1.b;
            u_1 = lambda.simpleEval(param0, arg$App$0$);
            param1 = u_1;
            param2 = arg$App$1$;
            id = 1;
            continue loopLabel
          } else if (param1 instanceof lambda.IfZero.class) {
            arg$IfZero$0$ = param1.a;
            arg$IfZero$1$ = param1.b;
            arg$IfZero$2$ = param1.c;
            val_ = lambda.simpleEval(param0, arg$IfZero$0$);
            tmp4 = lambda.Con(0);
            scrut = lambda.eqTerm(val_, tmp4);
            if (scrut === true) {
              param1 = arg$IfZero$1$;
              id = 0;
              continue loopLabel
            }
            param1 = arg$IfZero$2$;
            id = 0;
            continue loopLabel;
          } else if (param1 instanceof lambda.Thunk.class) {
            arg$Thunk$0$ = param1.t;
            arg$Thunk$1$ = param1.e;
            param0 = arg$Thunk$1$;
            param1 = arg$Thunk$0$;
            id = 0;
            continue loopLabel
          }
          throw runtime.safeCall(globalThis.Error(param1));
        case 1:
          let arg$Thunk$0$1, arg$Thunk$1$1, arg$Lam$0$1, arg$Lam$1$1, tmp5, tmp6, tmp7;
          if (param1 instanceof lambda.Thunk.class) {
            arg$Thunk$0$1 = param1.t;
            arg$Thunk$1$1 = param1.e;
            if (arg$Thunk$0$1 instanceof lambda.Lam.class) {
              arg$Lam$0$1 = arg$Thunk$0$1.s;
              arg$Lam$1$1 = arg$Thunk$0$1.t;
              tmp5 = lambda.Thunk(param2, param0);
              tmp6 = globalThis.Object.freeze([
                arg$Lam$0$1,
                tmp5
              ]);
              tmp7 = NofibPrelude.Cons(tmp6, arg$Thunk$1$1);
              param0 = tmp7;
              param1 = arg$Lam$1$1;
              id = 0;
              continue loopLabel
            }
            throw runtime.safeCall(globalThis.Error("bad application"));
          }
          throw runtime.safeCall(globalThis.Error("bad application"));
        case 2:
          let e_, arg$Con$0$1;
          e_ = lambda.simpleEval(param0, param1);
          if (e_ instanceof lambda.Con.class) {
            arg$Con$0$1 = e_.i;
            return arg$Con$0$1
          }
          throw runtime.safeCall(globalThis.Error("Not a Con"));
      }
      break;
    }
  } 
  static lookup(k, t) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$;
      if (t instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.None
      } else if (t instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = t.head;
        arg$Cons$1$ = t.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          scrut = NofibPrelude.listEq(k, element0$);
          if (scrut === true) {
            return NofibPrelude.Some(element1$)
          }
          t = arg$Cons$1$;
          continue loopLabel;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static myRunState(m, s) {
    let arg$MyState$0$;
    if (m instanceof lambda.MyState.class) {
      arg$MyState$0$ = m.r;
      return runtime.safeCall(arg$MyState$0$(s))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static myBind(m, f) {
    let lambda2;
    lambda2 = (undefined, function (s) {
      let scrut, element1$, element0$, tmp;
      scrut = lambda.myRunState(m, s);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        tmp = runtime.safeCall(f(element1$));
        return lambda.myRunState(tmp, element0$)
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
    let scrut, element1$;
    scrut = lambda.myRunState(m, s);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      return element1$
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
    let arg$Some$0$;
    if (x instanceof NofibPrelude.Some.class) {
      arg$Some$0$ = x.x;
      return runtime.safeCall(f(arg$Some$0$))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static lookupVar(v) {
    let lambda2;
    lambda2 = (undefined, function (env) {
      let inlinedVal, lambda3, lambda4, tmp;
      lambda3 = (undefined, function (dummy) {
        throw runtime.safeCall(globalThis.Error("undefined"))
      });
      lambda4 = (undefined, function (x) {
        return x
      });
      tmp = lambda.lookup(v, env);
      inlinedVal = lambda.myMaybe(lambda3, lambda4, tmp);
      return lambda.myReturn(inlinedVal)
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
    let arg$Thunk$0$, arg$Thunk$1$, arg$IfZero$0$, arg$IfZero$1$, arg$IfZero$2$, arg$App$0$, arg$App$1$, arg$Add$0$, arg$Add$1$, arg$Lam$0$, arg$Lam$1$, arg$Con$0$, arg$Var$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31;
    if (ter instanceof lambda.Var.class) {
      arg$Var$0$ = ter.s;
      return arg$Var$0$
    } else if (ter instanceof lambda.Con.class) {
      arg$Con$0$ = ter.i;
      tmp = NofibPrelude.stringOfInt(arg$Con$0$);
      return NofibPrelude.nofibStringToList(tmp)
    } else if (ter instanceof lambda.Incr.class) {
      return NofibPrelude.nofibStringToList("INCR")
    } else if (ter instanceof lambda.Lam.class) {
      arg$Lam$0$ = ter.s;
      arg$Lam$1$ = ter.t;
      tmp1 = NofibPrelude.nofibStringToList(". ");
      tmp2 = lambda.ppn(-1, arg$Lam$1$);
      tmp3 = NofibPrelude.append(tmp1, tmp2);
      tmp4 = NofibPrelude.append(arg$Lam$0$, tmp3);
      tmp5 = NofibPrelude.Cons("@", tmp4);
      return lambda.bracket(n, 0, tmp5)
    } else if (ter instanceof lambda.Add.class) {
      arg$Add$0$ = ter.a;
      arg$Add$1$ = ter.b;
      tmp6 = lambda.ppn(1, arg$Add$0$);
      tmp7 = NofibPrelude.nofibStringToList(" + ");
      tmp8 = lambda.ppn(1, arg$Add$1$);
      tmp9 = NofibPrelude.append(tmp7, tmp8);
      tmp10 = NofibPrelude.append(tmp6, tmp9);
      return lambda.bracket(n, 1, tmp10)
    } else if (ter instanceof lambda.App.class) {
      arg$App$0$ = ter.a;
      arg$App$1$ = ter.b;
      tmp11 = lambda.ppn(2, arg$App$0$);
      tmp12 = NofibPrelude.nofibStringToList(" ");
      tmp13 = lambda.ppn(2, arg$App$1$);
      tmp14 = NofibPrelude.append(tmp12, tmp13);
      tmp15 = NofibPrelude.append(tmp11, tmp14);
      return lambda.bracket(n, 2, tmp15)
    } else if (ter instanceof lambda.IfZero.class) {
      arg$IfZero$0$ = ter.a;
      arg$IfZero$1$ = ter.b;
      arg$IfZero$2$ = ter.c;
      tmp16 = NofibPrelude.nofibStringToList("IF ");
      tmp17 = lambda.ppn(0, arg$IfZero$0$);
      tmp18 = NofibPrelude.nofibStringToList(" THEN ");
      tmp19 = lambda.ppn(0, arg$IfZero$1$);
      tmp20 = NofibPrelude.nofibStringToList(" ELSE ");
      tmp21 = lambda.ppn(0, arg$IfZero$2$);
      tmp22 = NofibPrelude.append(tmp20, tmp21);
      tmp23 = NofibPrelude.append(tmp19, tmp22);
      tmp24 = NofibPrelude.append(tmp18, tmp23);
      tmp25 = NofibPrelude.append(tmp17, tmp24);
      tmp26 = NofibPrelude.append(tmp16, tmp25);
      return lambda.bracket(n, 0, tmp26)
    } else if (ter instanceof lambda.Thunk.class) {
      arg$Thunk$0$ = ter.t;
      arg$Thunk$1$ = ter.e;
      tmp27 = lambda.ppn(3, arg$Thunk$0$);
      tmp28 = NofibPrelude.nofibStringToList("::");
      tmp29 = lambda.ppenv(arg$Thunk$1$);
      tmp30 = NofibPrelude.append(tmp28, tmp29);
      tmp31 = NofibPrelude.append(tmp27, tmp30);
      return lambda.bracket(n, 0, tmp31)
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
      let element1$, element0$, tmp4, tmp5, tmp6, tmp7, tmp8;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
        element0$ = runtime.Tuple.get(caseScrut, 0);
        element1$ = runtime.Tuple.get(caseScrut, 1);
        tmp4 = NofibPrelude.nofibStringToList("=");
        tmp5 = lambda.pp(element1$);
        tmp6 = NofibPrelude.nofibStringToList(", ");
        tmp7 = NofibPrelude.append(tmp5, tmp6);
        tmp8 = NofibPrelude.append(tmp4, tmp7);
        return NofibPrelude.append(element0$, tmp8)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    tmp1 = NofibPrelude.flatMap(lambda2, env);
    tmp2 = NofibPrelude.nofibStringToList("]");
    tmp3 = NofibPrelude.append(tmp1, tmp2);
    return NofibPrelude.append(tmp, tmp3)
  } 
  static showTerm(t) {
    let arg$Con$0$, tmp, tmp1, tmp2;
    if (t instanceof lambda.Con.class) {
      arg$Con$0$ = t.i;
      tmp = NofibPrelude.nofibStringToList("Con ");
      tmp1 = NofibPrelude.stringOfInt(arg$Con$0$);
      tmp2 = NofibPrelude.nofibStringToList(tmp1);
      return NofibPrelude.append(tmp, tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static ev(t) {
    let envt2, tmp, element1$, element0$, tmp1, tmp2, tmp3, tmp4;
    tmp = lambda.traverseTerm(t);
    envt2 = lambda.myRunState(tmp, NofibPrelude.Nil);
    if (runtime.Tuple.isArrayLike(envt2) && envt2.length === 2) {
      element0$ = runtime.Tuple.get(envt2, 0);
      element1$ = runtime.Tuple.get(envt2, 1);
      tmp1 = lambda.pp(element1$);
      tmp2 = NofibPrelude.nofibStringToList("  ");
      tmp3 = lambda.ppenv(element0$);
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
