const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
let QuoteInc1;
(class QuoteInc {
  static {
    QuoteInc1 = this
  }
  static get res() {
    let lambda;
    lambda = (undefined, function (x_0) {
      return x_0 + 1
    });
    return lambda;
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "QuoteInc"]; 
});
let QuoteInc = QuoteInc1; export default QuoteInc;
