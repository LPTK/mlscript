const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
let Gib121;
(class Gib12 {
  static {
    Gib121 = this
  }
  static get res() {
    let lambda;
    lambda = (undefined, function (x_0, y_0) {
      let x_1, x_2, x_3, x_4, x_5, x_6, x_7, x_8, x_9, x_10, x_11;
      x_1 = x_0 + y_0;
      x_2 = y_0 + x_1;
      x_3 = x_1 + x_2;
      x_4 = x_2 + x_3;
      x_5 = x_3 + x_4;
      x_6 = x_4 + x_5;
      x_7 = x_5 + x_6;
      x_8 = x_6 + x_7;
      x_9 = x_7 + x_8;
      x_10 = x_8 + x_9;
      x_11 = x_9 + x_10;
      return x_11
    });
    return lambda;
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Gib12"]; 
});
let Gib12 = Gib121; export default Gib12;
