const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./Runtime.mjs";
import Term from "./Term.mjs";
let Dummy1;
globalThis.Object.freeze(class Dummy {
  static {
    Dummy1 = this
  }
  constructor() {
    runtime.Unit;
  }
  static {
    globalThis.Symbol;
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Dummy"]; 
});
let Dummy = Dummy1; export default Dummy;
