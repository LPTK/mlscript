const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Lexer from "./Lexer.mjs";
import Keywords from "./Keywords.mjs";
import Token from "./Token.mjs";
import Tree from "./Tree.mjs";
import TokenHelpers from "./TokenHelpers.mjs";
import TreeHelpers from "./TreeHelpers.mjs";
import Parser from "./Parser.mjs";
import Iter from "./../../Iter.mjs";
import Option from "./../../Option.mjs";
import Predef from "./../../Predef.mjs";
import Stack from "./../../Stack.mjs";
let Test1;
(class Test {
  static {
    Test1 = this
  }
  static {
    (class Flag {
      static {
        new this
      }
      constructor() {
        Test.Flag = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        switch (input) {
          case "tree":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "trace":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "tokens":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
      } 
      unapplyStringPrefix(input) {
        let isLeading, consumed, remains, isLeading1, consumed1, remains1, isLeading2, consumed2, remains2, tmp, tmp1, tmp2;
        isLeading2 = runtime.Str.startsWith(input, "tree");
        if (isLeading2 === true) {
          consumed2 = runtime.Str.take(input, 4);
          remains2 = runtime.Str.leave(input, 4);
          tmp = globalThis.Object.freeze([
            consumed2,
            remains2
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp, null))
        }
        isLeading1 = runtime.Str.startsWith(input, "trace");
        if (isLeading1 === true) {
          consumed1 = runtime.Str.take(input, 5);
          remains1 = runtime.Str.leave(input, 5);
          tmp1 = globalThis.Object.freeze([
            consumed1,
            remains1
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp1, null))
        }
        isLeading = runtime.Str.startsWith(input, "tokens");
        if (isLeading === true) {
          consumed = runtime.Str.take(input, 6);
          remains = runtime.Str.leave(input, 6);
          tmp2 = globalThis.Object.freeze([
            consumed,
            remains
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp2, null))
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "Flag"]; 
    });
  }
  static flags(tokens) {
    let result;
    result = globalThis.Object.freeze(new globalThis.Set());
    lbl: while (true) {
      let arg$Cons$0$, arg$Cons$1$, arg$Identifier$0$, arg$Cons$0$1, arg$Cons$1$1, arg$Identifier$0$1, unapplyResult, output, arg$Cons$0$2, arg$Cons$1$2, arg$Identifier$0$2, unapplyResult1, output1;
      if (tokens instanceof Stack.Cons.class) {
        arg$Cons$0$ = tokens.head;
        arg$Cons$1$ = tokens.tail;
        if (arg$Cons$0$ instanceof Token.Space.class) {
          if (arg$Cons$1$ instanceof Stack.Cons.class) {
            arg$Cons$0$1 = arg$Cons$1$.head;
            arg$Cons$1$1 = arg$Cons$1$.tail;
            if (arg$Cons$0$1 instanceof Token.Identifier.class) {
              arg$Identifier$0$1 = arg$Cons$0$1.name;
              if (arg$Identifier$0$1 === ":") {
                if (arg$Cons$1$1 instanceof Stack.Cons.class) {
                  arg$Cons$0$2 = arg$Cons$1$1.head;
                  arg$Cons$1$2 = arg$Cons$1$1.tail;
                  if (arg$Cons$0$2 instanceof Token.Identifier.class) {
                    arg$Identifier$0$2 = arg$Cons$0$2.name;
                    unapplyResult1 = runtime.safeCall(Test.Flag.unapply(arg$Identifier$0$2));
                    if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                      output1 = unapplyResult1.output;
                      unapplyResult1.bindings;
                      runtime.safeCall(result.add(output1));
                      tokens = arg$Cons$1$2;
                      continue lbl
                    }
                  }
                }
              }
            }
          }
        } else if (arg$Cons$0$ instanceof Token.Identifier.class) {
          arg$Identifier$0$ = arg$Cons$0$.name;
          if (arg$Identifier$0$ === ":") {
            if (arg$Cons$1$ instanceof Stack.Cons.class) {
              arg$Cons$0$1 = arg$Cons$1$.head;
              arg$Cons$1$1 = arg$Cons$1$.tail;
              if (arg$Cons$0$1 instanceof Token.Identifier.class) {
                arg$Identifier$0$1 = arg$Cons$0$1.name;
                unapplyResult = runtime.safeCall(Test.Flag.unapply(arg$Identifier$0$1));
                if (unapplyResult instanceof runtime.MatchSuccess.class) {
                  output = unapplyResult.output;
                  unapplyResult.bindings;
                  runtime.safeCall(result.add(output));
                  tokens = arg$Cons$1$1;
                  continue lbl
                }
              }
            }
          }
        }
      }
      break;
    }
    return globalThis.Object.freeze([
      result,
      tokens
    ])
  } 
  static example(...lines) {
    let source, tokens, scrut, flags, tokens1, scrut1, trees, scrut2, rcd, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    source = runtime.safeCall(lines.join("\n"));
    rcd = globalThis.Object.freeze({
      noWhitespace: true
    });
    tokens = Lexer.lex(source, rcd);
    scrut = Test.flags(tokens);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      tokens1 = element1$;
      flags = element0$;
      scrut1 = runtime.safeCall(element0$.has("tokens"));
      if (scrut1 === true) {
        tmp = TokenHelpers.panorama(element1$);
        Predef.print(tmp);
      }
      runtime.safeCall(Parser.tracer.reset());
      tmp1 = runtime.safeCall(flags.has("trace"));
      Parser.tracer.enabled = tmp1;
      trees = Parser.parse(tokens1);
      Parser.tracer.enabled = false;
      scrut2 = runtime.safeCall(flags.has("tree"));
      if (scrut2 === true) {
        tmp2 = Iter.fromStack(trees);
        tmp3 = Iter.mapping(tmp2, TreeHelpers.showAsTree);
        tmp4 = Iter.joined(tmp3, "\n");
        Predef.print(tmp4);
      }
      tmp5 = Iter.fromStack(trees);
      tmp6 = Iter.mapping(tmp5, Tree.summary);
      tmp7 = Iter.joined(tmp6, "\n");
      return Predef.print(tmp7)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Test"]; 
});
let Test = Test1; export default Test;
