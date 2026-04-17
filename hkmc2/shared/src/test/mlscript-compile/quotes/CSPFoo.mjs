const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import CSP from "./../CSP.mjs";
let CSPFoo1;
(class CSPFoo {
  static {
    CSPFoo1 = this
  }
  static get res() {
    let tmp;
    tmp = CSP.test();
    return tmp + 1;
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "CSPFoo"]; 
});
let CSPFoo = CSPFoo1; export default CSPFoo;
