const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Token from "./Token.mjs";
import Stack from "./../../Stack.mjs";
import Predef from "./../../Predef.mjs";
let TokenHelpers1;
(class TokenHelpers {
  static {
    TokenHelpers1 = this
  }
  static display(tokens, limit) {
    let i, values, tmp, tmp1;
    i = 0;
    values = [];
    lbl: while (true) {
      let scrut, head, tail, arg$Cons$0$, arg$Cons$1$, tmp2, tmp3;
      scrut = i < limit;
      if (scrut === true) {
        if (tokens instanceof Stack.Cons.class) {
          arg$Cons$0$ = tokens.head;
          arg$Cons$1$ = tokens.tail;
          tail = arg$Cons$1$;
          head = arg$Cons$0$;
          tmp2 = Token.summary(head);
          runtime.safeCall(values.push(tmp2));
          tokens = tail;
          tmp3 = i + 1;
          i = tmp3;
          continue lbl
        }
      }
      break;
    }
    tmp = runtime.safeCall(values.join("\u2502"));
    if (tokens instanceof Stack.Cons.class) {
      tmp1 = "\u2502\u22EF";
      return Predef.mkStr("\u2503", tmp, tmp1)
    }
    tmp1 = "\u2503";
    return Predef.mkStr("\u2503", tmp, tmp1);
  } 
  static panorama(tokens) {
    return TokenHelpers.display(tokens, globalThis.Number.MAX_SAFE_INTEGER)
  } 
  static preview(tokens) {
    return TokenHelpers.display(tokens, 5)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "TokenHelpers"]; 
});
let TokenHelpers = TokenHelpers1; export default TokenHelpers;
