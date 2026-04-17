const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
let CSPNest1;
(class CSPNest {
  static {
    CSPNest1 = this
  }
  static nest_f() {
    return 42
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "CSPNest"]; 
});
let CSPNest = CSPNest1; export default CSPNest;
