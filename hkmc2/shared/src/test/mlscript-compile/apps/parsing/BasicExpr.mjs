const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import StrOps from "./../../StrOps.mjs";
import Option from "./../../Option.mjs";
import Predef from "./../../Predef.mjs";
let BasicExpr1;
(class BasicExpr {
  static {
    BasicExpr1 = this
  }
  static {
    this.Lit = function Lit(value) {
      return globalThis.Object.freeze(new Lit.class(value));
    };
    (class Lit {
      static {
        BasicExpr.Lit.class = this
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
        BasicExpr.Var.class = this
      }
      constructor(name) {
        this.name = name;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Var", ["name"]]; 
    });
    this.Add = function Add(left, right) {
      return globalThis.Object.freeze(new Add.class(left, right));
    };
    (class Add {
      static {
        BasicExpr.Add.class = this
      }
      constructor(left, right) {
        this.left = left;
        this.right = right;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Add", ["left", "right"]]; 
    });
    this.Mul = function Mul(left, right) {
      return globalThis.Object.freeze(new Mul.class(left, right));
    };
    (class Mul {
      static {
        BasicExpr.Mul.class = this
      }
      constructor(left, right) {
        this.left = left;
        this.right = right;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Mul", ["left", "right"]]; 
    });
    this.Err = function Err(expr, msg) {
      return globalThis.Object.freeze(new Err.class(expr, msg));
    };
    (class Err {
      static {
        BasicExpr.Err.class = this
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
    return BasicExpr.Err(tmp, msg)
  } 
  static justErr(msg) {
    return BasicExpr.Err(Option.None, msg)
  } 
  static prettyPrint(tree) {
    let arg$Err$0$, arg$Err$1$, arg$Some$0$, arg$Mul$0$, arg$Mul$1$, arg$Add$0$, arg$Add$1$, arg$Var$0$, arg$Lit$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15;
    if (tree instanceof BasicExpr.Lit.class) {
      arg$Lit$0$ = tree.value;
      return runtime.safeCall(arg$Lit$0$.toString())
    } else if (tree instanceof BasicExpr.Var.class) {
      arg$Var$0$ = tree.name;
      return arg$Var$0$
    } else if (tree instanceof BasicExpr.Add.class) {
      arg$Add$0$ = tree.left;
      arg$Add$1$ = tree.right;
      tmp = BasicExpr.prettyPrint(arg$Add$0$);
      tmp1 = tmp + " + ";
      tmp2 = BasicExpr.prettyPrint(arg$Add$1$);
      return tmp1 + tmp2
    } else if (tree instanceof BasicExpr.Mul.class) {
      arg$Mul$0$ = tree.left;
      arg$Mul$1$ = tree.right;
      tmp3 = BasicExpr.prettyPrint(arg$Mul$0$);
      if (arg$Mul$0$ instanceof BasicExpr.Add.class) {
        tmp4 = true;
      } else {
        tmp4 = false;
      }
      tmp5 = StrOps.parenthesizedIf(tmp3, tmp4);
      tmp6 = BasicExpr.prettyPrint(arg$Mul$1$);
      if (arg$Mul$1$ instanceof BasicExpr.Add.class) {
        tmp7 = true;
      } else {
        tmp7 = false;
      }
      tmp8 = StrOps.parenthesizedIf(tmp6, tmp7);
      return StrOps.concat(tmp5, " * ", tmp8)
    } else if (tree instanceof BasicExpr.Err.class) {
      arg$Err$0$ = tree.expr;
      arg$Err$1$ = tree.msg;
      if (arg$Err$0$ instanceof Option.Some.class) {
        arg$Some$0$ = arg$Err$0$.value;
        tmp9 = BasicExpr.prettyPrint(arg$Some$0$);
        tmp10 = "{ " + tmp9;
        tmp11 = tmp10 + " | ";
        tmp12 = globalThis.JSON.stringify(arg$Err$1$);
        tmp13 = tmp11 + tmp12;
        return tmp13 + " }"
      } else if (arg$Err$0$ instanceof Option.None.class) {
        tmp14 = globalThis.JSON.stringify(arg$Err$1$);
        tmp15 = "{ " + tmp14;
        return tmp15 + " }"
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "BasicExpr"]; 
});
let BasicExpr = BasicExpr1; export default BasicExpr;
