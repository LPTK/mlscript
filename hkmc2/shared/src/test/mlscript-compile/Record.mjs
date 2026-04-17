const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./Runtime.mjs";
import Predef from "./Predef.mjs";
import Iter from "./Iter.mjs";
let Record1;
(class Record {
  static {
    Record1 = this
  }
  static steal(from, ...fields) {
    let rcd, lambda;
    rcd = new globalThis.Object();
    lambda = (undefined, function (f) {
      rcd[f] = from[f];
      return runtime.Unit
    });
    Iter.each(fields, lambda);
    return rcd
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Record"]; 
});
let Record = Record1; export default Record;
