const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./Runtime.mjs";
import Term from "./Term.mjs";
import Predef from "./Predef.mjs";
let QuoteExample1;
(class QuoteExample {
  static {
    QuoteExample1 = this
  }
  static foo() {
    let tmp, tmp1, arr, tmp2, tmp3;
    tmp = globalThis.Object.freeze(new Term.Lit(1));
    tmp1 = globalThis.Object.freeze(new Term.Lit(1));
    arr = globalThis.Object.freeze([
      tmp,
      tmp1
    ]);
    tmp2 = globalThis.Object.freeze(new Term.Builtin("+"));
    tmp3 = globalThis.Object.freeze(new Term.Tup(arr));
    return globalThis.Object.freeze(new Term.App(tmp2, tmp3))
  } 
  static inc() {
    let x, tmp, tmp1, arr, tmp2, tmp3, tmp4, arr1;
    tmp = globalThis.Object.freeze(new Term.Symbol("x"));
    x = globalThis.Object.freeze(new Term.Ref(tmp));
    tmp1 = globalThis.Object.freeze(new Term.Lit(1));
    arr = globalThis.Object.freeze([
      x,
      tmp1
    ]);
    tmp2 = globalThis.Object.freeze(new Term.Builtin("+"));
    tmp3 = globalThis.Object.freeze(new Term.Tup(arr));
    arr1 = globalThis.Object.freeze([
      tmp
    ]);
    tmp4 = globalThis.Object.freeze(new Term.App(tmp2, tmp3));
    return globalThis.Object.freeze(new Term.Lam(arr1, tmp4))
  } 
  static power(x) {
    let lambda;
    lambda = (undefined, function (caseScrut) {
      let tmp, tmp1, tmp2, arr, tmp3, tmp4;
      if (caseScrut === 0) {
        return globalThis.Object.freeze(new Term.Lit(1.0))
      }
      tmp = QuoteExample.power(x);
      tmp1 = caseScrut - 1;
      tmp2 = runtime.safeCall(tmp(tmp1));
      arr = globalThis.Object.freeze([
        x,
        tmp2
      ]);
      tmp3 = globalThis.Object.freeze(new Term.Builtin("*"));
      tmp4 = globalThis.Object.freeze(new Term.Tup(arr));
      return globalThis.Object.freeze(new Term.App(tmp3, tmp4));
    });
    return lambda
  } 
  static bind(rhs, k) {
    let x, tmp, tmp1, tmp2, tmp3, arr;
    tmp = globalThis.Object.freeze(new Term.Symbol("x"));
    x = globalThis.Object.freeze(new Term.Ref(tmp));
    tmp1 = runtime.safeCall(k(x));
    tmp2 = globalThis.Object.freeze(new Term.LetDecl(tmp));
    tmp3 = globalThis.Object.freeze(new Term.DefineVar(tmp, rhs));
    arr = globalThis.Object.freeze([
      tmp2,
      tmp3
    ]);
    return globalThis.Object.freeze(new Term.Blk(arr, tmp1))
  } 
  static body(x, y) {
    let lambda;
    lambda = (undefined, function (caseScrut) {
      let n, arr, tmp, tmp1, tmp2, lambda1;
      switch (caseScrut) {
        case 0:
          return x;
        case 1:
          return y;
      }
      n = caseScrut;
      arr = globalThis.Object.freeze([
        x,
        y
      ]);
      tmp = globalThis.Object.freeze(new Term.Builtin("+"));
      tmp1 = globalThis.Object.freeze(new Term.Tup(arr));
      tmp2 = globalThis.Object.freeze(new Term.App(tmp, tmp1));
      lambda1 = (undefined, function (z) {
        let tmp3, tmp4;
        tmp3 = QuoteExample.body(y, z);
        tmp4 = n - 1;
        return runtime.safeCall(tmp3(tmp4))
      });
      return QuoteExample.bind(tmp2, lambda1)
    });
    return lambda
  } 
  static gib(n) {
    let x, y, tmp, tmp1, tmp2, tmp3, arr;
    tmp = globalThis.Object.freeze(new Term.Symbol("x"));
    x = globalThis.Object.freeze(new Term.Ref(tmp));
    tmp1 = globalThis.Object.freeze(new Term.Symbol("y"));
    y = globalThis.Object.freeze(new Term.Ref(tmp1));
    tmp2 = QuoteExample.body(x, y);
    arr = globalThis.Object.freeze([
      tmp,
      tmp1
    ]);
    tmp3 = runtime.safeCall(tmp2(n));
    return globalThis.Object.freeze(new Term.Lam(arr, tmp3))
  } 
  static safeDiv() {
    let x, y, d, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, arr, tmp8, tmp9, tmp10, tmp11, arr1, tmp12, tmp13, tmp14, tmp15, arr2, tmp16, tmp17;
    tmp = globalThis.Object.freeze(new Term.Symbol("x"));
    x = globalThis.Object.freeze(new Term.Ref(tmp));
    tmp1 = globalThis.Object.freeze(new Term.Symbol("y"));
    y = globalThis.Object.freeze(new Term.Ref(tmp1));
    tmp2 = globalThis.Object.freeze(new Term.Symbol("d"));
    d = globalThis.Object.freeze(new Term.Ref(tmp2));
    tmp3 = globalThis.Object.freeze(new Term.Symbol("scrut"));
    scrut = globalThis.Object.freeze(new Term.Ref(tmp3));
    tmp15 = globalThis.Object.freeze(new Term.Lit(0.0));
    arr2 = globalThis.Object.freeze([
      y,
      tmp15
    ]);
    tmp16 = globalThis.Object.freeze(new Term.Builtin("=="));
    tmp17 = globalThis.Object.freeze(new Term.Tup(arr2));
    tmp4 = globalThis.Object.freeze(new Term.App(tmp16, tmp17));
    tmp8 = globalThis.Object.freeze(new Term.LitPattern(true));
    tmp9 = globalThis.Object.freeze(new Term.Else(d));
    tmp10 = globalThis.Object.freeze(new Term.Branch(scrut, tmp8, tmp9));
    arr1 = globalThis.Object.freeze([
      x,
      y
    ]);
    tmp12 = globalThis.Object.freeze(new Term.Builtin("/"));
    tmp13 = globalThis.Object.freeze(new Term.Tup(arr1));
    tmp14 = globalThis.Object.freeze(new Term.App(tmp12, tmp13));
    tmp11 = globalThis.Object.freeze(new Term.Else(tmp14));
    tmp5 = globalThis.Object.freeze(new Term.Cons(tmp10, tmp11));
    tmp6 = globalThis.Object.freeze(new Term.Let(tmp3, tmp4, tmp5));
    arr = globalThis.Object.freeze([
      tmp,
      tmp1,
      tmp2
    ]);
    tmp7 = globalThis.Object.freeze(new Term.IfLike(Term.Keyword.If, tmp6));
    return globalThis.Object.freeze(new Term.Lam(arr, tmp7))
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "QuoteExample"]; 
});
let QuoteExample = QuoteExample1; export default QuoteExample;
