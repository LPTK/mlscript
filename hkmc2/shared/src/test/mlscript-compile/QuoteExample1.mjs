const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./Runtime.mjs";
import Term from "./Term.mjs";
import Predef from "./Predef.mjs";
let QuoteExample11;
(class QuoteExample1 {
  static {
    QuoteExample11 = this
  }
  static foo() {
    let tmp, tmp1, tmp2, tmp3, tmp4, arr, tmp5, tmp6, tmp7, tmp8, tmp9, arr1, tmp10, tmp11;
    tmp = globalThis.Object.freeze(new Term.Symbol("Predef"));
    tmp1 = globalThis.Object.freeze(new Term.CSRef(tmp, import.meta.url, "Predef.mls"));
    tmp2 = globalThis.Object.freeze(new Term.Symbol("Predef"));
    tmp3 = globalThis.Object.freeze(new Term.CSRef(tmp2, import.meta.url, "Predef.mls"));
    tmp4 = globalThis.Object.freeze(new Term.Lit(1));
    arr = globalThis.Object.freeze([
      tmp4
    ]);
    tmp5 = globalThis.Object.freeze(new Term.Sel(tmp3, "id"));
    tmp6 = globalThis.Object.freeze(new Term.Tup(arr));
    tmp7 = globalThis.Object.freeze(new Term.App(tmp5, tmp6));
    tmp8 = globalThis.Object.freeze(new Term.Lit(2));
    tmp9 = Predef.id(tmp8);
    arr1 = globalThis.Object.freeze([
      tmp7,
      tmp9
    ]);
    tmp10 = globalThis.Object.freeze(new Term.Sel(tmp1, "equals"));
    tmp11 = globalThis.Object.freeze(new Term.Tup(arr1));
    return globalThis.Object.freeze(new Term.App(tmp10, tmp11))
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "QuoteExample1"]; 
});
let QuoteExample1 = QuoteExample11; export default QuoteExample1;
