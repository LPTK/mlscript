const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
import Stack from "./../../Stack.mjs";
import Option from "./../../Option.mjs";
import Iter from "./../../Iter.mjs";
import StrOps from "./../../StrOps.mjs";
import Lexer from "./Lexer.mjs";
import Token from "./Token.mjs";
import Expr from "./Expr.mjs";
let PrattParsing1;
(class PrattParsing {
  static {
    PrattParsing1 = this
  }
  static parse(tokens) {
    let exprCont, advance, expr, consume, peek, result, arg$Some$0$, tmp, tmp1;
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
    expr = function expr(prec) {
      let token, arg$Some$0$1, arg$Identifier$0$, arg$Identifier$1$, arg$Literal$0$, arg$Literal$1$, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
      if (peek instanceof Option.Some.class) {
        arg$Some$0$1 = peek.value;
        if (arg$Some$0$1 instanceof Token.Literal.class) {
          arg$Literal$0$ = arg$Some$0$1.kind;
          arg$Literal$1$ = arg$Some$0$1.literal;
          if (arg$Literal$0$ instanceof Token.LiteralKind.Integer.class) {
            consume();
            tmp2 = globalThis.parseInt(arg$Literal$1$, 10);
            tmp3 = Expr.Lit(tmp2);
            return exprCont(tmp3, prec)
          }
          token = arg$Some$0$1;
        } else if (arg$Some$0$1 instanceof Token.Identifier.class) {
          arg$Identifier$0$ = arg$Some$0$1.name;
          arg$Identifier$1$ = arg$Some$0$1.symbolic;
          if (arg$Identifier$1$ === false) {
            consume();
            tmp4 = Expr.Var(arg$Identifier$0$);
            return exprCont(tmp4, prec)
          }
          if (arg$Identifier$0$ === "(") {
            if (arg$Identifier$1$ === true) {
              let inlinedVal, scrut, arg$Some$0$2, tmp9, tmp10, tmp11, tmp12, tmp13;
              consume();
              tmp5 = expr(0);
              tmp6 = Token.Identifier(")", true);
              if (peek instanceof Option.Some.class) {
                arg$Some$0$2 = peek.value;
                scrut = Token.same(tmp6, arg$Some$0$2);
                if (scrut === true) {
                  consume();
                  inlinedVal = tmp5;
                  return exprCont(inlinedVal, prec)
                }
                tmp9 = Token.summary(tmp6);
                tmp10 = Token.summary(arg$Some$0$2);
                tmp11 = StrOps.concat("Expected token ", tmp9, ", but found ", tmp10);
                inlinedVal = Expr.withErr(tmp5, tmp11);
                return exprCont(inlinedVal, prec);
              } else if (peek instanceof Option.None.class) {
                tmp12 = Token.summary(tmp6);
                tmp13 = StrOps.concat("Expected token ", tmp12, ", but found end of input");
                inlinedVal = Expr.withErr(tmp5, tmp13);
                return exprCont(inlinedVal, prec)
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            token = arg$Some$0$1;
          } else {
            token = arg$Some$0$1;
          }
        } else {
          token = arg$Some$0$1;
        }
        tmp7 = Token.summary(token);
        tmp8 = "Unexpected token " + tmp7;
        return Expr.justErr(tmp8)
      } else if (peek instanceof Option.None.class) {
        return Expr.justErr("Unexpected end of input")
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    exprCont = function exprCont(acc, prec) {
      let right, scrut, scrut1, scrut2, arg$Some$0$1, arg$Identifier$0$, arg$Identifier$1$, element1$, element0$, tmp2;
      if (peek instanceof Option.Some.class) {
        arg$Some$0$1 = peek.value;
        if (arg$Some$0$1 instanceof Token.Identifier.class) {
          arg$Identifier$0$ = arg$Some$0$1.name;
          arg$Identifier$1$ = arg$Some$0$1.symbolic;
          if (arg$Identifier$1$ === true) {
            scrut2 = arg$Identifier$0$ !== ")";
            if (scrut2 === true) {
              scrut1 = runtime.safeCall(Expr.opPrec(arg$Identifier$0$));
              if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
                element0$ = runtime.Tuple.get(scrut1, 0);
                element1$ = runtime.Tuple.get(scrut1, 1);
                scrut = element0$ > prec;
                if (scrut === true) {
                  consume();
                  right = expr(element1$);
                  tmp2 = Expr.Inf(arg$Identifier$0$, acc, right);
                  return exprCont(tmp2, prec)
                }
                return acc;
              }
              return acc;
            }
            return acc;
          }
          return acc;
        }
        return acc;
      }
      return acc;
    };
    peek = advance();
    result = expr(0);
    if (peek instanceof Option.Some.class) {
      arg$Some$0$ = peek.value;
      tmp = Token.summary(arg$Some$0$);
      tmp1 = "Expect end of input, but found " + tmp;
      return Expr.withErr(result, tmp1)
    } else if (peek instanceof Option.None.class) {
      return result
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "PrattParsing"]; 
});
let PrattParsing = PrattParsing1; export default PrattParsing;
