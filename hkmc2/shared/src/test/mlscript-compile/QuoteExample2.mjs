const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./Runtime.mjs";
import Term from "./Term.mjs";
import Term1 from "./Term.mjs";
import QuoteExample from "./QuoteExample.mjs";
import QuoteExample1 from "./QuoteExample1.mjs";
let QuoteExample21;
(class QuoteExample2 {
  static {
    QuoteExample21 = this
  }
  static codegen() {
    let tmp, tmp1;
    tmp = QuoteExample.foo();
    Term1.codegen(tmp, "./hkmc2/shared/src/test/mlscript-compile/quotes/QuoteFoo.mls");
    tmp1 = QuoteExample.inc();
    return Term1.codegen(tmp1, "./hkmc2/shared/src/test/mlscript-compile/quotes/QuoteInc.mls")
  } 
  static genCubic() {
    let x, tmp, tmp1, tmp2, arr, tmp3;
    tmp = globalThis.Object.freeze(new Term.Symbol("x"));
    x = globalThis.Object.freeze(new Term.Ref(tmp));
    tmp1 = QuoteExample.power(x);
    arr = globalThis.Object.freeze([
      tmp
    ]);
    tmp2 = runtime.safeCall(tmp1(3));
    tmp3 = globalThis.Object.freeze(new Term.Lam(arr, tmp2));
    return Term1.codegen(tmp3, "./hkmc2/shared/src/test/mlscript-compile/quotes/Cubic.mls")
  } 
  static genGib12() {
    let tmp;
    tmp = QuoteExample.gib(12);
    return Term1.codegen(tmp, "./hkmc2/shared/src/test/mlscript-compile/quotes/Gib12.mls")
  } 
  static genSafeDiv() {
    let tmp;
    tmp = QuoteExample.safeDiv();
    return Term1.codegen(tmp, "./hkmc2/shared/src/test/mlscript-compile/quotes/SafeDiv.mls")
  } 
  static genOpened() {
    let tmp;
    tmp = QuoteExample1.foo();
    return Term1.codegen(tmp, "./hkmc2/shared/src/test/mlscript-compile/quotes/Opened.mls")
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "QuoteExample2"]; 
});
let QuoteExample2 = QuoteExample21; export default QuoteExample2;
