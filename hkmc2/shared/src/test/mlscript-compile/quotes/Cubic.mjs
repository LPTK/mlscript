const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
let Cubic1;
(class Cubic {
  static {
    Cubic1 = this
  }
  static get res() {
    let lambda;
    lambda = (undefined, function (x_0) {
      let tmp, tmp1;
      tmp = x_0 * 1;
      tmp1 = x_0 * tmp;
      return x_0 * tmp1
    });
    return lambda;
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Cubic"]; 
});
let Cubic = Cubic1; export default Cubic;
