const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
let SafeDiv1;
(class SafeDiv {
  static {
    SafeDiv1 = this
  }
  static get res() {
    let lambda;
    lambda = (undefined, function (x_0, y_0, d_0) {
      let scrut_0;
      scrut_0 = y_0 == 0;
      if (scrut_0 === true) {
        return d_0
      }
      return x_0 / y_0;
    });
    return lambda;
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "SafeDiv"]; 
});
let SafeDiv = SafeDiv1; export default SafeDiv;
