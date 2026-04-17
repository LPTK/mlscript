const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import Predef from "./../Predef.mjs";
let CSV1;
CSV1 = function CSV(strDelimiter) {
  return globalThis.Object.freeze(new CSV.class(strDelimiter));
};
(class CSV {
  static {
    CSV1.class = this
  }
  constructor(strDelimiter) {
    let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    this.strDelimiter = strDelimiter;
    scrut = this.strDelimiter;
    if (scrut === undefined) {
      this.strDelimiter = ",";
      tmp = "(\\" + this.strDelimiter;
      tmp1 = tmp + "|\\r?\\n|\\r|^)";
      tmp2 = tmp1 + "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|";
      tmp3 = tmp2 + "([^\"\\";
      tmp4 = tmp3 + this.strDelimiter;
      tmp5 = tmp4 + "\\r\\n]*))";
      tmp6 = new globalThis.RegExp(tmp5, "gi");
      this.objPattern = tmp6;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
  toArrays(strData) {
    let arrData, tmp;
    tmp = [];
    arrData = [
      tmp
    ];
    lbl: while (true) {
      let arrMatches, scrut, strMatchedDelimiter, scrut1, scrut2, scrut3, tmp1, tmp2, tmp3, tmp4, tmp5;
      arrMatches = runtime.safeCall(this.objPattern.exec(strData));
      scrut = arrMatches !== null;
      if (scrut === true) {
        strMatchedDelimiter = arrMatches[1];
        scrut1 = Predef.nequals(strMatchedDelimiter.length, 0);
        if (scrut1 === true) {
          scrut2 = Predef.nequals(strMatchedDelimiter, this.strDelimiter);
          if (scrut2 === true) {
            tmp1 = [];
            runtime.safeCall(arrData.push(tmp1));
          }
        }
        scrut3 = Predef.nequals(arrMatches[2], undefined);
        if (scrut3 === true) {
          tmp2 = new globalThis.RegExp("\"\"", "g");
          tmp3 = arrMatches[2].replace(tmp2, "\"");
        } else {
          tmp3 = arrMatches[3];
        }
        tmp4 = arrData.length - 1;
        tmp5 = runtime.safeCall(arrData.at(tmp4));
        runtime.safeCall(tmp5.push(tmp3));
        continue lbl
      }
      break;
    }
    return arrData
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "CSV", ["strDelimiter"]]; 
});
let CSV = CSV1; export default CSV;
