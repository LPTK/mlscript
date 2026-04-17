const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import CSPNest from "./CSPNest.mjs";
let CSPBaz1;
(class CSPBaz {
  static {
    CSPBaz1 = this
  }
  static get res() {
    return CSPNest.nest_f();
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "CSPBaz"]; 
});
let CSPBaz = CSPBaz1; export default CSPBaz;
