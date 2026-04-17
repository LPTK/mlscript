const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./Runtime.mjs";
import Predef from "./Predef.mjs";
import Iter from "./Iter.mjs";
let StyleAttributeValue1, XML1;
StyleAttributeValue1 = function StyleAttributeValue(rules) {
  return globalThis.Object.freeze(new StyleAttributeValue.class(rules));
};
(class StyleAttributeValue {
  static {
    StyleAttributeValue1.class = this
  }
  constructor(rules) {
    this.rules = rules;
  }
  toValue() {
    let tmp, lambda, tmp1, tmp2;
    tmp = globalThis.Object.entries(this.rules);
    lambda = (undefined, function (caseScrut) {
      let element1$, element0$, tmp3;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
        element0$ = runtime.Tuple.get(caseScrut, 0);
        element1$ = runtime.Tuple.get(caseScrut, 1);
        tmp3 = element0$ + ": ";
        return tmp3 + element1$
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    tmp1 = Iter.mapping(tmp, lambda);
    tmp2 = Iter.joined(tmp1, "; ");
    return globalThis.JSON.stringify(tmp2)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "StyleAttributeValue", ["rules"]]; 
});
(class XML {
  static {
    XML1 = this
  }
  static serializeValue(value) {
    if (typeof value === 'string') {
      return globalThis.JSON.stringify(value)
    } else if (value instanceof StyleAttributeValue1.class) {
      return runtime.safeCall(value.toValue())
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static joinAttributes(attributes) {
    let lambda, tmp;
    lambda = (undefined, function (caseScrut) {
      let element1$, element0$, tmp1, tmp2, tmp3, tmp4;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
        element0$ = runtime.Tuple.get(caseScrut, 0);
        element1$ = runtime.Tuple.get(caseScrut, 1);
        tmp1 = element0$ + "=";
        tmp2 = XML.serializeValue(element1$);
        return tmp1 + tmp2
      } else if (caseScrut instanceof StyleAttributeValue1.class) {
        tmp3 = runtime.safeCall(caseScrut.toValue());
        return "style=" + tmp3
      } else if (caseScrut instanceof globalThis.Object) {
        tmp4 = globalThis.Object.entries(caseScrut);
        return XML.joinAttributes(tmp4)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    tmp = Iter.mapping(attributes, lambda);
    return Iter.joined(tmp, " ")
  } 
  static elem(tagName, ...attributes) {
    return (...elements) => {
      let lambda, tmp, tmp1, tmp2;
      lambda = (undefined, function (arg1, arg2) {
        return arg1 + arg2
      });
      tmp = runtime.safeCall(Predef.fold(lambda));
      if (runtime.Tuple.isArrayLike(attributes) && attributes.length === 0) {
        tmp1 = "";
        return runtime.safeCall(tmp("<", tagName, "", ">", ...elements, "</", tagName, ">"))
      }
      tmp2 = XML.joinAttributes(attributes);
      tmp1 = " " + tmp2;
      return runtime.safeCall(tmp("<", tagName, tmp1, ">", ...elements, "</", tagName, ">"));
    }
  } 
  static tag(tagName) {
    return (...attributes) => {
      let lambda, tmp, tmp1, tmp2;
      lambda = (undefined, function (arg1, arg2) {
        return arg1 + arg2
      });
      tmp = runtime.safeCall(Predef.fold(lambda));
      if (runtime.Tuple.isArrayLike(attributes) && attributes.length === 0) {
        tmp1 = "";
        return runtime.safeCall(tmp("<", tagName, "", " ", "/>"))
      }
      tmp2 = XML.joinAttributes(attributes);
      tmp1 = " " + tmp2;
      return runtime.safeCall(tmp("<", tagName, tmp1, " ", "/>"));
    }
  } 
  static style(rules) {
    return StyleAttributeValue1(rules)
  } 
  static html(...attributes) {
    return (...elements) => {
      let tmp, tmp1;
      tmp = XML.elem("html", ...attributes);
      tmp1 = runtime.safeCall(tmp(...elements));
      return "<!DOCTYPE html>" + tmp1
    }
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "XML"]; 
});
let XML = XML1; export default XML;
