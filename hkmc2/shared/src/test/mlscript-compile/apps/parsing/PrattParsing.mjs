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
    let exprCont, advance, expr, consume, peek, result, token, arg$Some$0$, tmp, tmp1;
    advance = function advance() {
      let tail, head, tail1, arg$Cons$0$, arg$Cons$1$;
      if (tokens instanceof Stack.Cons.class) {
        arg$Cons$0$ = tokens.head;
        arg$Cons$1$ = tokens.tail;
        if (arg$Cons$0$ instanceof Token.Space.class) {
          tail = arg$Cons$1$;
          tokens = tail;
          return advance()
        }
        tail1 = arg$Cons$1$;
        head = arg$Cons$0$;
        tokens = tail1;
        return Option.Some(head);
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
      let literal, name, token1, arg$Some$0$1, arg$Identifier$0$, arg$Identifier$1$, arg$Literal$0$, arg$Literal$1$, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
      if (peek instanceof Option.Some.class) {
        arg$Some$0$1 = peek.value;
        if (arg$Some$0$1 instanceof Token.Literal.class) {
          arg$Literal$0$ = arg$Some$0$1.kind;
          arg$Literal$1$ = arg$Some$0$1.literal;
          if (arg$Literal$0$ instanceof Token.LiteralKind.Integer.class) {
            literal = arg$Literal$1$;
            consume();
            tmp2 = globalThis.parseInt(literal, 10);
            tmp3 = Expr.Lit(tmp2);
            return exprCont(tmp3, prec)
          }
          token1 = arg$Some$0$1;
        } else if (arg$Some$0$1 instanceof Token.Identifier.class) {
          arg$Identifier$0$ = arg$Some$0$1.name;
          arg$Identifier$1$ = arg$Some$0$1.symbolic;
          if (arg$Identifier$1$ === false) {
            name = arg$Identifier$0$;
            consume();
            tmp4 = Expr.Var(name);
            return exprCont(tmp4, prec)
          }
          if (arg$Identifier$0$ === "(") {
            if (arg$Identifier$1$ === true) {
              let result1, expected, inlinedVal, actual, scrut, arg$Some$0$2, tmp10, tmp11, tmp12, tmp13, tmp14;
              consume();
              tmp5 = expr(0);
              tmp6 = Token.Identifier(")", true);
              result1 = tmp5;
              expected = tmp6;
              if (peek instanceof Option.Some.class) {
                arg$Some$0$2 = peek.value;
                actual = arg$Some$0$2;
                scrut = Token.same(expected, actual);
                if (scrut === true) {
                  consume();
                  inlinedVal = result1;
                } else {
                  tmp10 = Token.summary(expected);
                  tmp11 = Token.summary(actual);
                  tmp12 = StrOps.concat("Expected token ", tmp10, ", but found ", tmp11);
                  inlinedVal = Expr.withErr(result1, tmp12);
                }
              } else if (peek instanceof Option.None.class) {
                tmp13 = Token.summary(expected);
                tmp14 = StrOps.concat("Expected token ", tmp13, ", but found end of input");
                inlinedVal = Expr.withErr(result1, tmp14);
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              tmp7 = inlinedVal;
              return exprCont(tmp7, prec)
            }
            token1 = arg$Some$0$1;
          } else {
            token1 = arg$Some$0$1;
          }
        } else {
          token1 = arg$Some$0$1;
        }
        tmp8 = Token.summary(token1);
        tmp9 = "Unexpected token " + tmp8;
        return Expr.justErr(tmp9)
      } else if (peek instanceof Option.None.class) {
        return Expr.justErr("Unexpected end of input")
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    exprCont = function exprCont(acc, prec) {
      let op, leftPrec, rightPrec, right, scrut, scrut1, scrut2, arg$Some$0$1, arg$Identifier$0$, arg$Identifier$1$, element1$, element0$, tmp2;
      if (peek instanceof Option.Some.class) {
        arg$Some$0$1 = peek.value;
        if (arg$Some$0$1 instanceof Token.Identifier.class) {
          arg$Identifier$0$ = arg$Some$0$1.name;
          arg$Identifier$1$ = arg$Some$0$1.symbolic;
          if (arg$Identifier$1$ === true) {
            op = arg$Identifier$0$;
            scrut2 = op !== ")";
            if (scrut2 === true) {
              scrut1 = runtime.safeCall(Expr.opPrec(op));
              if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
                element0$ = runtime.Tuple.get(scrut1, 0);
                element1$ = runtime.Tuple.get(scrut1, 1);
                rightPrec = element1$;
                leftPrec = element0$;
                scrut = leftPrec > prec;
                if (scrut === true) {
                  consume();
                  right = expr(rightPrec);
                  tmp2 = Expr.Inf(op, acc, right);
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
      token = arg$Some$0$;
      tmp = Token.summary(token);
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
