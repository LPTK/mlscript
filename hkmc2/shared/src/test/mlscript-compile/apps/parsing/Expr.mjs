const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import StrOps from "./../../StrOps.mjs";
import Option from "./../../Option.mjs";
import Predef from "./../../Predef.mjs";
let Expr1;
(class Expr {
  static {
    Expr1 = this
  }
  static {
    let lambda;
    lambda = (undefined, function (caseScrut) {
      switch (caseScrut) {
        case "**":
          return globalThis.Object.freeze([
            70,
            69
          ]);
        case "*":
          return globalThis.Object.freeze([
            50,
            50
          ]);
        case "/":
          return globalThis.Object.freeze([
            50,
            50
          ]);
        case "+":
          return globalThis.Object.freeze([
            30,
            30
          ]);
        case "-":
          return globalThis.Object.freeze([
            30,
            30
          ]);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    });
    this.opPrec = lambda;
    this.Lit = function Lit(value) {
      return globalThis.Object.freeze(new Lit.class(value));
    };
    (class Lit {
      static {
        Expr.Lit.class = this
      }
      constructor(value) {
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Lit", ["value"]]; 
    });
    this.Var = function Var(name) {
      return globalThis.Object.freeze(new Var.class(name));
    };
    (class Var {
      static {
        Expr.Var.class = this
      }
      constructor(name) {
        this.name = name;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Var", ["name"]]; 
    });
    this.Inf = function Inf(op, left, right) {
      return globalThis.Object.freeze(new Inf.class(op, left, right));
    };
    (class Inf {
      static {
        Expr.Inf.class = this
      }
      constructor(op, left, right) {
        this.op = op;
        this.left = left;
        this.right = right;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Inf", ["op", "left", "right"]]; 
    });
    this.Err = function Err(expr, msg) {
      return globalThis.Object.freeze(new Err.class(expr, msg));
    };
    (class Err {
      static {
        Expr.Err.class = this
      }
      constructor(expr, msg) {
        this.expr = expr;
        this.msg = msg;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Err", ["expr", "msg"]]; 
    });
  }
  static withErr(expr, msg) {
    let tmp;
    tmp = Option.Some(expr);
    return Expr.Err(tmp, msg)
  } 
  static justErr(msg) {
    return Expr.Err(Option.None, msg)
  } 
  static prettyPrint(tree) {
    let scrut, scrut1, scrut2, scrut3, scrut4, arg$Err$0$, arg$Err$1$, arg$Some$0$, arg$Inf$0$, arg$Inf$1$, arg$Inf$2$, arg$Var$0$, arg$Lit$0$, element1$, element0$, tmp, arg$Inf$0$1, element1$1, tmp1, tmp2, tmp3, arg$Inf$0$2, element0$1, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
    if (tree instanceof Expr.Lit.class) {
      arg$Lit$0$ = tree.value;
      return runtime.safeCall(arg$Lit$0$.toString())
    } else if (tree instanceof Expr.Var.class) {
      arg$Var$0$ = tree.name;
      return arg$Var$0$
    } else if (tree instanceof Expr.Inf.class) {
      arg$Inf$0$ = tree.op;
      arg$Inf$1$ = tree.left;
      arg$Inf$2$ = tree.right;
      scrut = runtime.safeCall(Expr.opPrec(arg$Inf$0$));
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        tmp = Expr.prettyPrint(arg$Inf$1$);
        if (arg$Inf$1$ instanceof Expr.Inf.class) {
          arg$Inf$0$1 = arg$Inf$1$.op;
          scrut2 = runtime.safeCall(Expr.opPrec(arg$Inf$0$1));
          if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
            runtime.Tuple.get(scrut2, 0);
            element1$1 = runtime.Tuple.get(scrut2, 1);
            scrut1 = element1$1 < element0$;
            if (scrut1 === true) {
              tmp1 = true;
            } else {
              tmp1 = false;
            }
          } else {
            tmp1 = false;
          }
        } else {
          tmp1 = false;
        }
        tmp2 = StrOps.parenthesizedIf(tmp, tmp1);
        tmp3 = Expr.prettyPrint(arg$Inf$2$);
        if (arg$Inf$2$ instanceof Expr.Inf.class) {
          arg$Inf$0$2 = arg$Inf$2$.op;
          scrut4 = runtime.safeCall(Expr.opPrec(arg$Inf$0$2));
          if (runtime.Tuple.isArrayLike(scrut4) && scrut4.length === 2) {
            element0$1 = runtime.Tuple.get(scrut4, 0);
            runtime.Tuple.get(scrut4, 1);
            scrut3 = element1$ > element0$1;
            if (scrut3 === true) {
              tmp4 = true;
            } else {
              tmp4 = false;
            }
          } else {
            tmp4 = false;
          }
        } else {
          tmp4 = false;
        }
        tmp5 = StrOps.parenthesizedIf(tmp3, tmp4);
        return StrOps.concat(tmp2, " ", arg$Inf$0$, " ", tmp5)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (tree instanceof Expr.Err.class) {
      arg$Err$0$ = tree.expr;
      arg$Err$1$ = tree.msg;
      if (arg$Err$0$ instanceof Option.Some.class) {
        arg$Some$0$ = arg$Err$0$.value;
        tmp6 = Expr.prettyPrint(arg$Some$0$);
        tmp7 = "{ " + tmp6;
        tmp8 = tmp7 + " | ";
        tmp9 = globalThis.JSON.stringify(arg$Err$1$);
        tmp10 = tmp8 + tmp9;
        return tmp10 + " }"
      } else if (arg$Err$0$ instanceof Option.None.class) {
        tmp11 = globalThis.JSON.stringify(arg$Err$1$);
        tmp12 = "{ " + tmp11;
        return tmp12 + " }"
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Expr"]; 
});
let Expr = Expr1; export default Expr;
