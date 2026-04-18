const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./Runtime.mjs";
import Predef from "./Predef.mjs";
let Example1;
(class Example {
  static {
    Example1 = this
  }
  static {
    let tmp;
    this.Test = function Test(field) {
      return globalThis.Object.freeze(new Test.class(field));
    };
    (class Test {
      static {
        Example.Test.class = this
      }
      constructor(field) {
        this.field = field;
      }
      static next(self) {
        let tmp1;
        tmp1 = self.field + 1;
        return Example.Test(tmp1)
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Test", ["field"]]; 
    });
    tmp = globalThis.Object.freeze(new Example.Test.class(123));
    this.t = tmp;
    (class Base {
      static {
        Example.Base = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Base"]; 
    });
    (class Child1 extends Example.Base {
      static {
        Example.Child1 = this
      }
      constructor() {
        super();
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Child1"]; 
    });
    (class Child2 extends Example.Base {
      static {
        Example.Child2 = this
      }
      constructor() {
        super();
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Child2"]; 
    });
  }
  static get pubFun() {
    return "hi";
  } 
  static funnySlash(f, arg) {
    return runtime.safeCall(f(arg))
  } 
  static inc(x) {
    return x + 1
  } 
  static test(x) {
    if (globalThis.Number.isInteger(x)) {
      return "int"
    } else if (typeof x === 'number') {
      return "num"
    } else if (typeof x === 'string') {
      return "str"
    }
    return "other";
  } 
  static assertFail() {
    if (false === true) {
      return runtime.Unit
    }
    return runtime.assertFail("mlscript-compile/Example.mls", "27");
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Example"]; 
});
let Example = Example1; export default Example;
