const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
import Stack from "./../../Stack.mjs";
import Option from "./../../Option.mjs";
import Iter from "./../../Iter.mjs";
import Token from "./Token.mjs";
import BasicExpr from "./BasicExpr.mjs";
let RecursiveDescent1;
(class RecursiveDescent {
  static {
    RecursiveDescent1 = this
  }
  static parse(tokens) {
    let addSeq, advance, expr, atom, product, mulSeq, consume, peek, result, arg$Some$0$, tmp, tmp1;
    advance = function advance() {
      let arg$Cons$0$, arg$Cons$1$;
      if (tokens instanceof Stack.Cons.class) {
        arg$Cons$0$ = tokens.head;
        arg$Cons$1$ = tokens.tail;
        if (arg$Cons$0$ instanceof Token.Space.class) {
          tokens = arg$Cons$1$;
          return advance()
        }
        tokens = arg$Cons$1$;
        return Option.Some(arg$Cons$0$);
      } else if (tokens instanceof Stack.Nil.class) {
        return Option.None
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    consume = function consume() {
      let tmp2;
      tmp2 = advance();
      peek = tmp2;
      return runtime.Unit
    };
    atom = function atom() {
      let token, arg$Some$0$1, arg$Identifier$0$, arg$Identifier$1$, arg$Literal$0$, arg$Literal$1$, tmp2, tmp3, tmp4, tmp5, tmp6;
      if (peek instanceof Option.Some.class) {
        arg$Some$0$1 = peek.value;
        if (arg$Some$0$1 instanceof Token.Literal.class) {
          arg$Literal$0$ = arg$Some$0$1.kind;
          arg$Literal$1$ = arg$Some$0$1.literal;
          if (arg$Literal$0$ instanceof Token.LiteralKind.Integer.class) {
            consume();
            tmp2 = globalThis.parseInt(arg$Literal$1$, 10);
            return BasicExpr.Lit(tmp2)
          }
          token = arg$Some$0$1;
        } else if (arg$Some$0$1 instanceof Token.Identifier.class) {
          arg$Identifier$0$ = arg$Some$0$1.name;
          arg$Identifier$1$ = arg$Some$0$1.symbolic;
          if (arg$Identifier$0$ === "(") {
            switch (arg$Identifier$1$) {
              case true:
                let inlinedVal, scrut, arg$Some$0$2, tmp7, tmp8, tmp9, tmp10, tmp11;
                consume();
                tmp3 = expr();
                tmp4 = Token.Identifier(")", true);
                if (peek instanceof Option.Some.class) {
                  arg$Some$0$2 = peek.value;
                  scrut = Token.same(tmp4, arg$Some$0$2);
                  if (scrut === true) {
                    consume();
                    inlinedVal = tmp3;
                    return inlinedVal
                  }
                  tmp7 = Token.summary(tmp4);
                  tmp8 = Token.summary(arg$Some$0$2);
                  tmp9 = Predef.mkStr("Expected token ", tmp7, ", but found ", tmp8);
                  inlinedVal = BasicExpr.withErr(tmp3, tmp9);
                  return inlinedVal;
                } else if (peek instanceof Option.None.class) {
                  tmp10 = Token.summary(tmp4);
                  tmp11 = Predef.mkStr("Expected token ", tmp10, ", but found end of input");
                  inlinedVal = BasicExpr.withErr(tmp3, tmp11);
                  return inlinedVal
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              case false:
                consume();
                return BasicExpr.Var(arg$Identifier$0$);
            }
            token = arg$Some$0$1;
          } else {
            if (arg$Identifier$1$ === false) {
              consume();
              return BasicExpr.Var(arg$Identifier$0$)
            }
            token = arg$Some$0$1;
          }
        } else {
          token = arg$Some$0$1;
        }
        tmp5 = Token.summary(token);
        tmp6 = "Unexpected token " + tmp5;
        return BasicExpr.justErr(tmp6)
      } else if (peek instanceof Option.None.class) {
        return BasicExpr.justErr("Unexpected end of input")
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    expr = function expr() {
      let leftmost, tmp2, tmp3;
      leftmost = product();
      tmp2 = addSeq();
      tmp3 = Iter.fromStack(tmp2);
      return Iter.folded(tmp3, leftmost, BasicExpr.Add)
    };
    addSeq = function addSeq() {
      let arg$Some$0$1, arg$Identifier$0$, tmp2, tmp3;
      if (peek instanceof Option.Some.class) {
        arg$Some$0$1 = peek.value;
        if (arg$Some$0$1 instanceof Token.Identifier.class) {
          arg$Identifier$0$ = arg$Some$0$1.name;
          if (arg$Identifier$0$ === "+") {
            consume();
            tmp2 = product();
            tmp3 = addSeq();
            return Stack.Cons(tmp2, tmp3)
          }
          return Stack.Nil;
        }
        return Stack.Nil;
      }
      return Stack.Nil;
    };
    product = function product() {
      let leftmost, tmp2, tmp3;
      leftmost = atom();
      tmp2 = mulSeq();
      tmp3 = Iter.fromStack(tmp2);
      return Iter.folded(tmp3, leftmost, BasicExpr.Mul)
    };
    mulSeq = function mulSeq() {
      let arg$Some$0$1, arg$Identifier$0$, tmp2, tmp3;
      if (peek instanceof Option.Some.class) {
        arg$Some$0$1 = peek.value;
        if (arg$Some$0$1 instanceof Token.Identifier.class) {
          arg$Identifier$0$ = arg$Some$0$1.name;
          if (arg$Identifier$0$ === "*") {
            consume();
            tmp2 = atom();
            tmp3 = mulSeq();
            return Stack.Cons(tmp2, tmp3)
          }
          return Stack.Nil;
        }
        return Stack.Nil;
      }
      return Stack.Nil;
    };
    peek = advance();
    result = expr();
    if (peek instanceof Option.Some.class) {
      arg$Some$0$ = peek.value;
      tmp = Token.summary(arg$Some$0$);
      tmp1 = "Expect end of input, but found " + tmp;
      return BasicExpr.withErr(result, tmp1)
    } else if (peek instanceof Option.None.class) {
      return result
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "RecursiveDescent"]; 
});
let RecursiveDescent = RecursiveDescent1; export default RecursiveDescent;
