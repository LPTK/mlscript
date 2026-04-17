const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./Runtime.mjs";
import Term from "./Term.mjs";
let Str1;
const Str$class = class Str {
  constructor() {
    Object.defineProperty(this, "class", {
      value: Str
    })
  }
  concat2(a, b) {
    return a + b
  } 
  concat(...xs) {
    return runtime.safeCall(xs.join(""))
  } 
  from(value) {
    return runtime.safeCall(globalThis.String(value))
  } 
  parenthesizedIf(x, cond) {
    let tmp;
    if (cond === true) {
      tmp = "(" + x;
      return tmp + ")"
    } else {
      return x
    }
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["object", "Str"]; 
}; Str1 = globalThis.Object.freeze(new Str$class);
let Str = Str1; export default Str;
