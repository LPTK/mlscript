const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import Predef from "./../Predef.mjs";
let Opened1;
(class Opened {
  static {
    Opened1 = this
  }
  static get res() {
    let tmp;
    tmp = Predef.id(1);
    return Predef.equals(tmp, 2);
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Opened"]; 
});
let Opened = Opened1; export default Opened;
