const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./Runtime.mjs";
let NoFreeze1;
(class NoFreeze {
  static {
    NoFreeze1 = this
  }
  static init() {
    NoFreeze.Foo = function Foo(x) {
      return (new Foo.class(x));
    };
    (class Foo {
      static {
        NoFreeze.Foo.class = this
      }
      constructor(x) {
        this.x = x;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Foo", ["x"]];
    });
    return null
  }
  static foo() {
    return (new NoFreeze.Foo.class(0))
  }
  static bar() {
    return runtime.safeCall(NoFreeze["foo"]())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "NoFreeze"];
});
NoFreeze1.init();
export { NoFreeze1 as _$_modulePrivate_$_NoFreeze };
let NoFreeze = NoFreeze1; export default NoFreeze;
