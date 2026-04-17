const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import Example from "./../Example.mjs";
let CSPBar1;
(class CSPBar {
  static {
    CSPBar1 = this
  }
  static get res() {
    return Example.inc(0);
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "CSPBar"]; 
});
let CSPBar = CSPBar1; export default CSPBar;
