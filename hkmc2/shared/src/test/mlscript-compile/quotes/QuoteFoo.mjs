const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
let QuoteFoo1;
(class QuoteFoo {
  static {
    QuoteFoo1 = this
  }
  static get res() {
    return 1 + 1;
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "QuoteFoo"]; 
});
let QuoteFoo = QuoteFoo1; export default QuoteFoo;
