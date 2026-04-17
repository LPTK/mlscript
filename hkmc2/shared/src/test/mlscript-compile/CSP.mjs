const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./Runtime.mjs";
import Term from "./Term.mjs";
import Example from "./Example.mjs";
import CSPNest from "./quotes/CSPNest.mjs";
let CSP1;
(class CSP {
  static {
    CSP1 = this
  }
  static test() {
    return 123
  } 
  static foo() {
    let tmp, tmp1, arr, tmp2, tmp3, tmp4, tmp5, arr1, tmp6, tmp7;
    tmp = globalThis.Object.freeze(new Term.Symbol("CSP"));
    tmp1 = globalThis.Object.freeze(new Term.CSRef(tmp, import.meta.url, undefined));
    arr = globalThis.Object.freeze([]);
    tmp2 = globalThis.Object.freeze(new Term.Sel(tmp1, "test"));
    tmp3 = globalThis.Object.freeze(new Term.Tup(arr));
    tmp4 = globalThis.Object.freeze(new Term.App(tmp2, tmp3));
    tmp5 = globalThis.Object.freeze(new Term.Lit(1));
    arr1 = globalThis.Object.freeze([
      tmp4,
      tmp5
    ]);
    tmp6 = globalThis.Object.freeze(new Term.Builtin("+"));
    tmp7 = globalThis.Object.freeze(new Term.Tup(arr1));
    return globalThis.Object.freeze(new Term.App(tmp6, tmp7))
  } 
  static bar() {
    let tmp, tmp1, tmp2, arr, tmp3, tmp4;
    tmp = globalThis.Object.freeze(new Term.Symbol("Example"));
    tmp1 = globalThis.Object.freeze(new Term.CSRef(tmp, import.meta.url, "Example.mls"));
    tmp2 = globalThis.Object.freeze(new Term.Lit(0));
    arr = globalThis.Object.freeze([
      tmp2
    ]);
    tmp3 = globalThis.Object.freeze(new Term.Sel(tmp1, "inc"));
    tmp4 = globalThis.Object.freeze(new Term.Tup(arr));
    return globalThis.Object.freeze(new Term.App(tmp3, tmp4))
  } 
  static baz() {
    let tmp, tmp1, arr, tmp2, tmp3;
    tmp = globalThis.Object.freeze(new Term.Symbol("CSPNest"));
    tmp1 = globalThis.Object.freeze(new Term.CSRef(tmp, import.meta.url, "quotes/CSPNest.mls"));
    arr = globalThis.Object.freeze([]);
    tmp2 = globalThis.Object.freeze(new Term.Sel(tmp1, "nest_f"));
    tmp3 = globalThis.Object.freeze(new Term.Tup(arr));
    return globalThis.Object.freeze(new Term.App(tmp2, tmp3))
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "CSP"]; 
});
let CSP = CSP1; export default CSP;
