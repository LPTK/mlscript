const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Term from "./../../Term.mjs";
import Iter from "./../../Iter.mjs";
let Main1;
globalThis.Object.freeze(class Main {
  static {
    Main1 = this
  }
  constructor() {
    runtime.Unit;
  }
  static {
    let lambda;
    lambda = (undefined, function (caseScrut) {
      let x, option;
      x = caseScrut;
      option = runtime.Unit;
      return runtime.Unit
    });
    lambda;
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Main"]; 
});