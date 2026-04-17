const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
import Option from "./../../Option.mjs";
import Stack from "./../../Stack.mjs";
import TreeTracer from "./../../TreeTracer.mjs";
import Iter from "./../../Iter.mjs";
import MutMap from "./../../MutMap.mjs";
import Lexer from "./Lexer.mjs";
import Extension from "./Extension.mjs";
import Token from "./Token.mjs";
import TokenHelpers from "./TokenHelpers.mjs";
import Keywords from "./Keywords.mjs";
import Tree from "./Tree.mjs";
import Rules from "./Rules.mjs";
import ParseRule from "./ParseRule.mjs";
let Parser1;
(class Parser {
  static {
    Parser1 = this
  }
  static #termOptions;
  static #typeOptions;
  static {
    let kind, rule, allowOperators, allowLiterals, kind1, rule1, allowOperators1, allowLiterals1, tmp;
    tmp = globalThis.Object.freeze(new TreeTracer.TreeTracer());
    this.tracer = tmp;
    kind = "term";
    rule = Rules.termRule;
    allowOperators = true;
    allowLiterals = true;
    Parser.#termOptions = globalThis.Object.freeze({
      kind: kind,
      rule: rule,
      allowOperators: allowOperators,
      allowLiterals: allowLiterals
    });
    kind1 = "type";
    rule1 = Rules.typeRule;
    allowOperators1 = false;
    allowLiterals1 = true;
    Parser.#typeOptions = globalThis.Object.freeze({
      kind: kind1,
      rule: rule1,
      allowOperators: allowOperators1,
      allowLiterals: allowLiterals1
    });
  }
  static parse(tokens) {
    let parseKind, mod, exprCont, expr, handleDirective, parseRule, modCont, consume, counter, tree, token, message, lambda, lambda1, arg$Cons$0$;
    consume = function consume() {
      let head, tail, arg$Cons$0$1, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
      if (tokens instanceof Stack.Cons.class) {
        arg$Cons$0$1 = tokens.head;
        arg$Cons$1$ = tokens.tail;
        tail = arg$Cons$1$;
        head = arg$Cons$0$1;
        tmp = Token.summary(head);
        tmp1 = "consume: `" + tmp;
        tmp2 = tmp1 + "` at #";
        tmp3 = tmp2 + counter;
        runtime.safeCall(Parser.tracer.print(tmp3));
        tokens = tail;
        tmp4 = counter + 1;
        counter = tmp4;
        return runtime.Unit
      }
      return runtime.safeCall(Parser.tracer.print("consume: the end of input"));
    };
    parseKind = function parseKind(kind, prec) {
      let name, scrut, token1, name1, scrut1, token2, scrut2, rule, tree1, scrut3, kind$_, process, rest, shouldParse, scrut4, arg$Some$0$, arg$Cons$0$1, arg$Identifier$0$, arg$Identifier$1$, tmp, tmp1, arg$Cons$0$2, arg$Identifier$0$1, arg$Identifier$1$1, tmp2, tmp3, arg$Some$0$1, arg$Ref$0$, arg$Ref$1$, arg$Ref$2$, arg$Ref$3$, arg$Ref$4$, tmp4, tmp5;
      switch (kind) {
        case "type":
          return expr(prec, Parser.#typeOptions);
        case "term":
          return expr(prec, Parser.#termOptions);
        case "ident":
          if (tokens instanceof Stack.Cons.class) {
            arg$Cons$0$1 = tokens.head;
            if (arg$Cons$0$1 instanceof Token.Identifier.class) {
              arg$Identifier$0$ = arg$Cons$0$1.name;
              arg$Identifier$1$ = arg$Cons$0$1.symbolic;
              if (arg$Identifier$1$ === false) {
                name = arg$Identifier$0$;
                tmp = MutMap.get(name);
                scrut = Predef.pipeInto(Keywords.all, tmp);
                if (scrut instanceof Option.None.class) {
                  consume();
                  return Tree.Ident(name, false)
                }
                token1 = arg$Cons$0$1;
              } else {
                token1 = arg$Cons$0$1;
              }
            } else {
              token1 = arg$Cons$0$1;
            }
            tmp1 = "expect an identifier but found " + token1;
            return Tree.error(tmp1)
          } else if (tokens instanceof Stack.Nil.class) {
            return Tree.error("expect an identifier but found the end of input")
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        case "typevar":
          if (tokens instanceof Stack.Cons.class) {
            arg$Cons$0$2 = tokens.head;
            if (arg$Cons$0$2 instanceof Token.Identifier.class) {
              arg$Identifier$0$1 = arg$Cons$0$2.name;
              arg$Identifier$1$1 = arg$Cons$0$2.symbolic;
              if (arg$Identifier$1$1 === false) {
                name1 = arg$Identifier$0$1;
                scrut1 = runtime.safeCall(name1.at(0));
                if (scrut1 === "'") {
                  consume();
                  return Tree.Ident(name1, false)
                }
                token2 = arg$Cons$0$2;
              } else {
                token2 = arg$Cons$0$2;
              }
            } else {
              token2 = arg$Cons$0$2;
            }
            tmp2 = "expect a type variable but found " + token2;
            return Tree.error(tmp2)
          } else if (tokens instanceof Stack.Nil.class) {
            return Tree.error("expect a type variable but found the end of input")
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      tmp3 = MutMap.get(kind);
      scrut2 = Predef.pipeInto(Rules.syntaxKinds, tmp3);
      if (scrut2 instanceof Option.Some.class) {
        arg$Some$0$ = scrut2.value;
        rule = arg$Some$0$;
        tree1 = parseRule(prec, rule);
        scrut3 = rule.refChoice;
        if (scrut3 instanceof Option.Some.class) {
          arg$Some$0$1 = scrut3.value;
          if (arg$Some$0$1 instanceof ParseRule.Choice.Ref.class) {
            arg$Ref$0$ = arg$Some$0$1.kind;
            arg$Ref$1$ = arg$Some$0$1.process;
            arg$Ref$2$ = arg$Some$0$1.outerPrec;
            arg$Ref$3$ = arg$Some$0$1.innerPrec;
            arg$Ref$4$ = arg$Some$0$1.rest;
            if (arg$Ref$2$ instanceof Option.None.class) {
              if (arg$Ref$3$ instanceof Option.None.class) {
                rest = arg$Ref$4$;
                process = arg$Ref$1$;
                kind$_ = arg$Ref$0$;
                scrut4 = Predef.equals(kind, kind$_);
                if (scrut4 === true) {
                  shouldParse = true;
                  lbl: while (true) {
                    let tree$_, scrut5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
                    if (shouldParse === true) {
                      tree$_ = parseRule(prec, rest);
                      scrut5 = Tree.nonEmpty(tree$_);
                      if (scrut5 === true) {
                        tmp6 = ">>> " + kind;
                        tmp7 = tmp6 + "Cont ";
                        tmp8 = tmp7 + prec;
                        tmp9 = tmp8 + " ";
                        tmp10 = Tree.summary(tree1);
                        tmp11 = tmp9 + tmp10;
                        tmp12 = tmp11 + " <<<";
                        Parser.tracer.print(tmp12, 76);
                        tmp13 = runtime.safeCall(process(tree1, tree$_));
                        tree1 = tmp13;
                        continue lbl
                      }
                      shouldParse = false;
                      continue lbl;
                    }
                    break;
                  }
                }
                return tree1
              }
              return tree1;
            }
            return tree1;
          }
          return tree1;
        }
        return tree1;
      }
      tmp4 = "Unknown syntax kind: \"" + kind;
      tmp5 = tmp4 + "\"";
      throw runtime.safeCall(globalThis.Error(tmp5));
    };
    parseRule = function parseRule(prec, rule) {
      let tmp, tmp1, tmp2, lambda2, lambda3;
      tmp = "parsing rule \"" + rule.name;
      tmp1 = tmp + "\" with precedence ";
      tmp2 = tmp1 + prec;
      lambda2 = (undefined, function (result) {
        let tmp3, tmp4, tmp5;
        tmp3 = "parsed rule \"" + rule.name;
        tmp4 = tmp3 + "\": ";
        tmp5 = Tree.summary(result);
        return tmp4 + tmp5
      });
      lambda3 = (undefined, function () {
        let name, scrut, keyword, scrut1, rest, other, scrut2, outerPrec, innerPrec, kind, process, rest1, outerPrec$_, scrut3, acc, scrut4, scrut5, message1, tree1, tree2, scrut6, value, scrut7, value1, scrut8, value2, arg$Some$0$, arg$Cons$0$1, arg$Some$0$1, arg$Some$0$2, arg$Ref$0$, arg$Ref$1$, arg$Ref$2$, arg$Ref$3$, arg$Ref$4$, arg$Some$0$3, arg$Error$1$, arg$Identifier$0$, arg$Some$0$4, arg$Some$0$5, tmp3, tmp4, tmp5, tmp6, lambda4, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42;
        split_default$: {
          split_1$: {
            split_2$: {
              split_3$: {
                split_4$: {
                  if (tokens instanceof Stack.Cons.class) {
                    arg$Cons$0$1 = tokens.head;
                    if (arg$Cons$0$1 instanceof Token.Identifier.class) {
                      arg$Identifier$0$ = arg$Cons$0$1.name;
                      name = arg$Identifier$0$;
                      tmp3 = "found an identifier \"" + name;
                      tmp4 = tmp3 + "\"";
                      Parser.tracer.print(tmp4, 88);
                      tmp5 = MutMap.get(name);
                      scrut = Predef.pipeInto(Keywords.all, tmp5);
                      if (scrut instanceof Option.Some.class) {
                        arg$Some$0$4 = scrut.value;
                        keyword = arg$Some$0$4;
                        tmp6 = runtime.safeCall(keyword.toString());
                        Parser.tracer.print(tmp6, 90);
                        lambda4 = (undefined, function (caseScrut) {
                          let k, element0$, tmp43;
                          if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
                            element0$ = runtime.Tuple.get(caseScrut, 0);
                            runtime.Tuple.get(caseScrut, 1);
                            k = element0$;
                            tmp43 = "`" + k;
                            return tmp43 + "`"
                          }
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                        });
                        tmp7 = Iter.mapping(rule.keywordChoices, lambda4);
                        tmp8 = Iter.joined(tmp7, ", ");
                        Parser.tracer.print("keyword choices: ", tmp8);
                        tmp9 = MutMap.get(name);
                        scrut1 = Predef.pipeInto(rule.keywordChoices, tmp9);
                        if (scrut1 instanceof Option.Some.class) {
                          arg$Some$0$5 = scrut1.value;
                          rest = arg$Some$0$5;
                          tmp10 = "found a rule starting with `" + name;
                          tmp11 = tmp10 + "`";
                          Parser.tracer.print(tmp11, 96);
                          tmp12 = "the rest of the rule: " + rest.display;
                          Parser.tracer.print(tmp12, 97);
                          consume();
                          return parseRule(0, rest)
                        }
                        tmp13 = "\"" + name;
                        tmp14 = tmp13 + "\" is not a keyword";
                        Parser.tracer.print(tmp14, 100);
                        other = arg$Cons$0$1;
                        tmp15 = "the current rule is " + rule.display;
                        runtime.safeCall(Parser.tracer.print(tmp15));
                        scrut2 = rule.refChoice;
                        if (scrut2 instanceof Option.Some.class) {
                          arg$Some$0$2 = scrut2.value;
                          if (arg$Some$0$2 instanceof ParseRule.Choice.Ref.class) {
                            arg$Ref$0$ = arg$Some$0$2.kind;
                            arg$Ref$1$ = arg$Some$0$2.process;
                            arg$Ref$2$ = arg$Some$0$2.outerPrec;
                            arg$Ref$3$ = arg$Some$0$2.innerPrec;
                            arg$Ref$4$ = arg$Some$0$2.rest;
                            rest1 = arg$Ref$4$;
                            innerPrec = arg$Ref$3$;
                            outerPrec = arg$Ref$2$;
                            process = arg$Ref$1$;
                            kind = arg$Ref$0$;
                            tmp16 = "try to parse kind \"" + kind;
                            tmp17 = tmp16 + "\" at ";
                            tmp18 = TokenHelpers.preview(tokens);
                            tmp19 = tmp17 + tmp18;
                            Parser.tracer.print(tmp19, 104);
                            outerPrec$_ = Option.getOrElse(outerPrec, Keywords.maxKeywordPrec);
                            Option.getOrElse(innerPrec, prec);
                            scrut3 = outerPrec$_ > prec;
                            if (scrut3 === true) {
                              acc = parseKind(kind, prec);
                              scrut4 = Tree.nonEmptyError(acc);
                              if (scrut4 === true) {
                                scrut5 = parseRule(prec, rest1);
                                if (scrut5 instanceof Tree.Error.class) {
                                  arg$Error$1$ = scrut5.message;
                                  tree1 = scrut5;
                                  message1 = arg$Error$1$;
                                  break split_1$
                                }
                                tree2 = scrut5;
                                break split_2$;
                              }
                              Parser.tracer.print("cannot parse more", 117);
                              scrut6 = rule.endChoice;
                              if (scrut6 instanceof Option.Some.class) {
                                arg$Some$0$3 = scrut6.value;
                                value = arg$Some$0$3;
                                break split_3$
                              }
                              Parser.tracer.print("no end choice", 121);
                              return acc;
                            }
                            tmp20 = "did not parse kind \"" + kind;
                            tmp21 = tmp20 + "\" because of the precedence";
                            Parser.tracer.print(tmp21, 123);
                            Parser.tracer.print("no reference choice", 124);
                            scrut7 = rule.endChoice;
                            if (scrut7 instanceof Option.Some.class) {
                              arg$Some$0$1 = scrut7.value;
                              value1 = arg$Some$0$1;
                              break split_4$
                            }
                            Parser.tracer.print("no end choice", 128);
                          } else {
                            Parser.tracer.print("no reference choice", 124);
                            scrut7 = rule.endChoice;
                            if (scrut7 instanceof Option.Some.class) {
                              arg$Some$0$1 = scrut7.value;
                              value1 = arg$Some$0$1;
                              break split_4$
                            }
                            Parser.tracer.print("no end choice", 128);
                          }
                        } else {
                          Parser.tracer.print("no reference choice", 124);
                          scrut7 = rule.endChoice;
                          if (scrut7 instanceof Option.Some.class) {
                            arg$Some$0$1 = scrut7.value;
                            value1 = arg$Some$0$1;
                            break split_4$
                          }
                          Parser.tracer.print("no end choice", 128);
                        }
                      } else {
                        other = arg$Cons$0$1;
                        tmp22 = "the current rule is " + rule.display;
                        runtime.safeCall(Parser.tracer.print(tmp22));
                        scrut2 = rule.refChoice;
                        if (scrut2 instanceof Option.Some.class) {
                          arg$Some$0$2 = scrut2.value;
                          if (arg$Some$0$2 instanceof ParseRule.Choice.Ref.class) {
                            arg$Ref$0$ = arg$Some$0$2.kind;
                            arg$Ref$1$ = arg$Some$0$2.process;
                            arg$Ref$2$ = arg$Some$0$2.outerPrec;
                            arg$Ref$3$ = arg$Some$0$2.innerPrec;
                            arg$Ref$4$ = arg$Some$0$2.rest;
                            rest1 = arg$Ref$4$;
                            innerPrec = arg$Ref$3$;
                            outerPrec = arg$Ref$2$;
                            process = arg$Ref$1$;
                            kind = arg$Ref$0$;
                            tmp23 = "try to parse kind \"" + kind;
                            tmp24 = tmp23 + "\" at ";
                            tmp25 = TokenHelpers.preview(tokens);
                            tmp26 = tmp24 + tmp25;
                            Parser.tracer.print(tmp26, 104);
                            outerPrec$_ = Option.getOrElse(outerPrec, Keywords.maxKeywordPrec);
                            Option.getOrElse(innerPrec, prec);
                            scrut3 = outerPrec$_ > prec;
                            if (scrut3 === true) {
                              acc = parseKind(kind, prec);
                              scrut4 = Tree.nonEmptyError(acc);
                              if (scrut4 === true) {
                                scrut5 = parseRule(prec, rest1);
                                if (scrut5 instanceof Tree.Error.class) {
                                  arg$Error$1$ = scrut5.message;
                                  tree1 = scrut5;
                                  message1 = arg$Error$1$;
                                  break split_1$
                                }
                                tree2 = scrut5;
                                break split_2$;
                              }
                              Parser.tracer.print("cannot parse more", 117);
                              scrut6 = rule.endChoice;
                              if (scrut6 instanceof Option.Some.class) {
                                arg$Some$0$3 = scrut6.value;
                                value = arg$Some$0$3;
                                break split_3$
                              }
                              Parser.tracer.print("no end choice", 121);
                              return acc;
                            }
                            tmp27 = "did not parse kind \"" + kind;
                            tmp28 = tmp27 + "\" because of the precedence";
                            Parser.tracer.print(tmp28, 123);
                            Parser.tracer.print("no reference choice", 124);
                            scrut7 = rule.endChoice;
                            if (scrut7 instanceof Option.Some.class) {
                              arg$Some$0$1 = scrut7.value;
                              value1 = arg$Some$0$1;
                              break split_4$
                            }
                            Parser.tracer.print("no end choice", 128);
                          } else {
                            Parser.tracer.print("no reference choice", 124);
                            scrut7 = rule.endChoice;
                            if (scrut7 instanceof Option.Some.class) {
                              arg$Some$0$1 = scrut7.value;
                              value1 = arg$Some$0$1;
                              break split_4$
                            }
                            Parser.tracer.print("no end choice", 128);
                          }
                        } else {
                          Parser.tracer.print("no reference choice", 124);
                          scrut7 = rule.endChoice;
                          if (scrut7 instanceof Option.Some.class) {
                            arg$Some$0$1 = scrut7.value;
                            value1 = arg$Some$0$1;
                            break split_4$
                          }
                          Parser.tracer.print("no end choice", 128);
                        }
                      }
                    } else {
                      other = arg$Cons$0$1;
                      tmp29 = "the current rule is " + rule.display;
                      runtime.safeCall(Parser.tracer.print(tmp29));
                      scrut2 = rule.refChoice;
                      if (scrut2 instanceof Option.Some.class) {
                        arg$Some$0$2 = scrut2.value;
                        if (arg$Some$0$2 instanceof ParseRule.Choice.Ref.class) {
                          arg$Ref$0$ = arg$Some$0$2.kind;
                          arg$Ref$1$ = arg$Some$0$2.process;
                          arg$Ref$2$ = arg$Some$0$2.outerPrec;
                          arg$Ref$3$ = arg$Some$0$2.innerPrec;
                          arg$Ref$4$ = arg$Some$0$2.rest;
                          rest1 = arg$Ref$4$;
                          innerPrec = arg$Ref$3$;
                          outerPrec = arg$Ref$2$;
                          process = arg$Ref$1$;
                          kind = arg$Ref$0$;
                          tmp30 = "try to parse kind \"" + kind;
                          tmp31 = tmp30 + "\" at ";
                          tmp32 = TokenHelpers.preview(tokens);
                          tmp33 = tmp31 + tmp32;
                          Parser.tracer.print(tmp33, 104);
                          outerPrec$_ = Option.getOrElse(outerPrec, Keywords.maxKeywordPrec);
                          Option.getOrElse(innerPrec, prec);
                          scrut3 = outerPrec$_ > prec;
                          if (scrut3 === true) {
                            acc = parseKind(kind, prec);
                            scrut4 = Tree.nonEmptyError(acc);
                            if (scrut4 === true) {
                              scrut5 = parseRule(prec, rest1);
                              if (scrut5 instanceof Tree.Error.class) {
                                arg$Error$1$ = scrut5.message;
                                tree1 = scrut5;
                                message1 = arg$Error$1$;
                                break split_1$
                              }
                              tree2 = scrut5;
                              break split_2$;
                            }
                            Parser.tracer.print("cannot parse more", 117);
                            scrut6 = rule.endChoice;
                            if (scrut6 instanceof Option.Some.class) {
                              arg$Some$0$3 = scrut6.value;
                              value = arg$Some$0$3;
                              break split_3$
                            }
                            Parser.tracer.print("no end choice", 121);
                            return acc;
                          }
                          tmp34 = "did not parse kind \"" + kind;
                          tmp35 = tmp34 + "\" because of the precedence";
                          Parser.tracer.print(tmp35, 123);
                          Parser.tracer.print("no reference choice", 124);
                          scrut7 = rule.endChoice;
                          if (scrut7 instanceof Option.Some.class) {
                            arg$Some$0$1 = scrut7.value;
                            value1 = arg$Some$0$1;
                            break split_4$
                          }
                          Parser.tracer.print("no end choice", 128);
                        } else {
                          Parser.tracer.print("no reference choice", 124);
                          scrut7 = rule.endChoice;
                          if (scrut7 instanceof Option.Some.class) {
                            arg$Some$0$1 = scrut7.value;
                            value1 = arg$Some$0$1;
                            break split_4$
                          }
                          Parser.tracer.print("no end choice", 128);
                        }
                      } else {
                        Parser.tracer.print("no reference choice", 124);
                        scrut7 = rule.endChoice;
                        if (scrut7 instanceof Option.Some.class) {
                          arg$Some$0$1 = scrut7.value;
                          value1 = arg$Some$0$1;
                          break split_4$
                        }
                        Parser.tracer.print("no end choice", 128);
                      }
                    }
                    consume();
                    tmp36 = runtime.safeCall(Predef.render(other));
                    tmp37 = "unexpected token " + tmp36;
                    return Tree.error(tmp37)
                  } else if (tokens instanceof Stack.Nil.class) {
                    scrut8 = rule.endChoice;
                    if (scrut8 instanceof Option.Some.class) {
                      arg$Some$0$ = scrut8.value;
                      value2 = arg$Some$0$;
                      return value2
                    } else if (scrut8 instanceof Option.None.class) {
                      Parser.tracer.print("no end choice but found the end of input", 135);
                      return Tree.error("unexpected end of input")
                    }
                    break split_default$;
                  }
                  break split_default$;
                }
                Parser.tracer.print("found end choice", 126);
                return value1;
              }
              Parser.tracer.print("found end choice", 119);
              return value;
            }
            tmp38 = Tree.summary(acc);
            tmp39 = "acc: " + tmp38;
            Parser.tracer.print(tmp39, 114);
            tmp40 = Tree.summary(tree2);
            tmp41 = "parsed from rest rule: " + tmp40;
            Parser.tracer.print(tmp41, 115);
            return runtime.safeCall(process(acc, tree2));
          }
          tmp42 = "cannot parse due to error: " + message1;
          Parser.tracer.print(tmp42, 111);
          return tree1;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      });
      return runtime.safeCall(Parser.tracer.trace(tmp2, lambda2, lambda3))
    };
    expr = function expr(prec, options) {
      let tmp, tmp1, tmp2, tmp3, tmp4, lambda2, lambda3;
      tmp = options.kind + " <<< ";
      tmp1 = tmp + prec;
      tmp2 = tmp1 + " ";
      tmp3 = TokenHelpers.preview(tokens);
      tmp4 = tmp2 + tmp3;
      lambda2 = (undefined, function (result) {
        let tmp5, tmp6;
        tmp5 = options.kind + " >>> ";
        tmp6 = Tree.summary(result);
        return tmp5 + tmp6
      });
      lambda3 = (undefined, function () {
        let name, symbolic, scrut, keyword, scrut1, rule, scrut2, scrut3, literal, kind, scrut4, token1, arg$Cons$0$1, arg$Literal$0$, arg$Literal$1$, arg$Identifier$0$, arg$Identifier$1$, arg$Some$0$, arg$Some$0$1, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15;
        if (tokens instanceof Stack.Cons.class) {
          arg$Cons$0$1 = tokens.head;
          if (arg$Cons$0$1 instanceof Token.Identifier.class) {
            arg$Identifier$0$ = arg$Cons$0$1.name;
            arg$Identifier$1$ = arg$Cons$0$1.symbolic;
            symbolic = arg$Identifier$1$;
            name = arg$Identifier$0$;
            tmp5 = MutMap.get(name);
            scrut = Predef.pipeInto(Keywords.all, tmp5);
            if (scrut instanceof Option.Some.class) {
              arg$Some$0$ = scrut.value;
              keyword = arg$Some$0$;
              tmp6 = MutMap.get(name);
              scrut1 = Predef.pipeInto(options.rule.keywordChoices, tmp6);
              if (scrut1 instanceof Option.Some.class) {
                arg$Some$0$1 = scrut1.value;
                rule = arg$Some$0$1;
                scrut2 = keyword.leftPrecOrMin > prec;
                if (scrut2 === true) {
                  consume();
                  tmp7 = parseRule(keyword.rightPrecOrMax, rule);
                  return exprCont(tmp7, prec, options)
                }
                tmp8 = "the left precedence of \"" + name;
                tmp9 = tmp8 + "\" is less";
                Parser.tracer.print(tmp9, 150);
                return Tree.empty;
              } else if (scrut1 instanceof Option.None.class) {
                tmp10 = "no rule starting with " + name;
                Parser.tracer.print(tmp10, 153);
                return Tree.empty
              }
              token1 = arg$Cons$0$1;
            } else if (scrut instanceof Option.None.class) {
              scrut3 = ! options.allowOperators;
              if (scrut3 === true) {
                if (symbolic === true) {
                  tmp11 = "symbolic identifiers are disallowed in kind \"" + options.kind;
                  tmp12 = tmp11 + "\"";
                  return Tree.error(tmp12)
                }
              }
              consume();
              tmp13 = Tree.Ident(name, symbolic);
              return exprCont(tmp13, prec, options)
            } else {
              token1 = arg$Cons$0$1;
            }
          } else if (arg$Cons$0$1 instanceof Token.Literal.class) {
            arg$Literal$0$ = arg$Cons$0$1.kind;
            arg$Literal$1$ = arg$Cons$0$1.literal;
            literal = arg$Literal$1$;
            kind = arg$Literal$0$;
            scrut4 = options.allowLiterals;
            if (scrut4 === true) {
              consume();
              tmp14 = Tree.Literal(kind, literal);
              return exprCont(tmp14, prec, options)
            }
            token1 = arg$Cons$0$1;
          } else {
            token1 = arg$Cons$0$1;
          }
          tmp15 = "unrecognized token: " + token1;
          return Tree.error(tmp15)
        } else if (tokens instanceof Stack.Nil.class) {
          return Tree.error("unexpected end of input")
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      });
      return runtime.safeCall(Parser.tracer.trace(tmp4, lambda2, lambda3))
    };
    exprCont = function exprCont(acc, prec, options) {
      let infix, name, keyword, scrut, rule, scrut1, scrut2, outerPrec, innerPrec, kind, process, rest, outerPrec$_, innerPrec$_, scrut3, rhs, restRes, scrut4, name1, scrut5, leftPrec, rightPrec, scrut6, op, rhs1, scrut7, scrut8, token1, scrut9, outerPrec1, innerPrec1, kind1, process1, rest1, outerPrec$_1, innerPrec$_1, scrut10, scrut11, rhs2, restRes1, arg$Cons$0$1, arg$Some$0$, arg$Ref$0$, arg$Ref$1$, arg$Ref$2$, arg$Ref$3$, arg$Ref$4$, arg$Identifier$0$, arg$Identifier$1$, arg$Some$0$1, element1$, element0$, arg$Some$0$2, arg$Some$0$3, arg$Some$0$4, arg$Ref$0$1, arg$Ref$1$1, arg$Ref$2$1, arg$Ref$3$1, arg$Ref$4$1, lambda2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122, tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131, tmp132, tmp133, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139, tmp140, tmp141, tmp142, tmp143, tmp144, tmp145, tmp146, tmp147, tmp148, tmp149, tmp150, tmp151, tmp152, tmp153, tmp154, tmp155, tmp156, tmp157, tmp158, tmp159, tmp160, tmp161, tmp162, tmp163, tmp164, tmp165, tmp166, tmp167, tmp168, tmp169, tmp170, tmp171, tmp172, tmp173, tmp174, tmp175, tmp176, tmp177, tmp178, tmp179, tmp180, tmp181, tmp182, tmp183, tmp184, tmp185, tmp186, tmp187, tmp188, tmp189, tmp190, tmp191, tmp192, tmp193, tmp194, tmp195, tmp196, tmp197, tmp198, tmp199, tmp200, tmp201, tmp202, tmp203, tmp204, tmp205, tmp206, tmp207, tmp208, tmp209, tmp210, tmp211, tmp212, tmp213, tmp214, tmp215, tmp216, tmp217, tmp218, tmp219, tmp220, tmp221, tmp222, tmp223, tmp224, tmp225, tmp226, tmp227, tmp228;
      split_default$: {
        split_1$: {
          split_2$: {
            split_3$: {
              split_4$: {
                split_5$: {
                  lambda2 = (undefined, function (caseScrut) {
                    let kind2, process2, rest2, process3, rule1, scrut12, arg$Ref$0$2, arg$Ref$1$2, arg$Ref$2$2, arg$Ref$3$2, arg$Ref$4$2, tmp229, tmp230;
                    if (caseScrut instanceof ParseRule.Choice.Ref.class) {
                      arg$Ref$0$2 = caseScrut.kind;
                      arg$Ref$1$2 = caseScrut.process;
                      arg$Ref$2$2 = caseScrut.outerPrec;
                      arg$Ref$3$2 = caseScrut.innerPrec;
                      arg$Ref$4$2 = caseScrut.rest;
                      if (arg$Ref$2$2 instanceof Option.None.class) {
                        if (arg$Ref$3$2 instanceof Option.None.class) {
                          rest2 = arg$Ref$4$2;
                          process2 = arg$Ref$1$2;
                          kind2 = arg$Ref$0$2;
                          scrut12 = Predef.equals(kind2, options.kind);
                          if (scrut12 === true) {
                            process3 = process2;
                            rule1 = rest2;
                            return globalThis.Object.freeze({
                              process: process3,
                              rule: rule1
                            })
                          }
                        }
                      }
                    }
                    tmp229 = "Kind " + options.kind;
                    tmp230 = tmp229 + " does not have infix rules";
                    throw runtime.safeCall(globalThis.Error(tmp230))
                  });
                  infix = Option.flatMap(options.rule.refChoice, lambda2);
                  tmp = ">>> " + options.kind;
                  tmp1 = tmp + "Cont ";
                  tmp2 = tmp1 + prec;
                  tmp3 = tmp2 + " ";
                  tmp4 = Tree.summary(acc);
                  tmp5 = tmp3 + tmp4;
                  tmp6 = tmp5 + " <<<";
                  Parser.tracer.print(tmp6, 175);
                  tmp7 = TokenHelpers.preview(tokens);
                  tmp8 = "check keyword " + tmp7;
                  Parser.tracer.print(tmp8, 177);
                  if (tokens instanceof Stack.Cons.class) {
                    arg$Cons$0$1 = tokens.head;
                    if (arg$Cons$0$1 instanceof Token.Identifier.class) {
                      arg$Identifier$0$ = arg$Cons$0$1.name;
                      arg$Identifier$1$ = arg$Cons$0$1.symbolic;
                      name = arg$Identifier$0$;
                      tmp9 = MutMap.get(name);
                      scrut4 = Predef.pipeInto(Keywords.all, tmp9);
                      if (scrut4 instanceof Option.Some.class) {
                        arg$Some$0$2 = scrut4.value;
                        keyword = arg$Some$0$2;
                        tmp10 = "found a keyword: " + name;
                        Parser.tracer.print(tmp10, 179);
                        tmp11 = MutMap.get(name);
                        scrut = Predef.pipeInto(infix.rule.keywordChoices, tmp11);
                        if (scrut instanceof Option.Some.class) {
                          arg$Some$0$3 = scrut.value;
                          rule = arg$Some$0$3;
                          tmp12 = "keyword `" + name;
                          tmp13 = tmp12 + "` is found in infix rules";
                          Parser.tracer.print(tmp13, 181);
                          scrut1 = keyword.leftPrecOrMin > prec;
                          if (scrut1 === true) {
                            scrut2 = rule.refChoice;
                            if (scrut2 instanceof Option.Some.class) {
                              arg$Some$0$4 = scrut2.value;
                              if (arg$Some$0$4 instanceof ParseRule.Choice.Ref.class) {
                                arg$Ref$0$1 = arg$Some$0$4.kind;
                                arg$Ref$1$1 = arg$Some$0$4.process;
                                arg$Ref$2$1 = arg$Some$0$4.outerPrec;
                                arg$Ref$3$1 = arg$Some$0$4.innerPrec;
                                arg$Ref$4$1 = arg$Some$0$4.rest;
                                rest = arg$Ref$4$1;
                                innerPrec = arg$Ref$3$1;
                                outerPrec = arg$Ref$2$1;
                                process = arg$Ref$1$1;
                                kind = arg$Ref$0$1;
                                tmp14 = "try to parse kind \"" + kind;
                                tmp15 = tmp14 + "\" at ";
                                tmp16 = TokenHelpers.preview(tokens);
                                tmp17 = tmp15 + tmp16;
                                Parser.tracer.print(tmp17, 184);
                                outerPrec$_ = Option.getOrElse(outerPrec, Keywords.maxOperatorPrec);
                                innerPrec$_ = Option.getOrElse(innerPrec, outerPrec$_);
                                scrut3 = outerPrec$_ > prec;
                                if (scrut3 === true) {
                                  consume();
                                  rhs = parseKind(kind, keyword.rightPrecOrMin);
                                  restRes = parseRule(innerPrec$_, rest);
                                  tmp18 = runtime.safeCall(process(rhs, restRes));
                                  tmp19 = infix.process(acc, tmp18);
                                  return exprCont(tmp19, prec, options)
                                }
                                tmp20 = "keyword `" + name;
                                tmp21 = tmp20 + "` does not have infix rules";
                                Parser.tracer.print(tmp21, 193);
                                if (arg$Identifier$1$ === true) {
                                  name1 = arg$Identifier$0$;
                                  tmp22 = MutMap.get(name1);
                                  scrut8 = Predef.pipeInto(Keywords.all, tmp22);
                                  if (scrut8 instanceof Option.None.class) {
                                    scrut7 = options.allowOperators;
                                    if (scrut7 === true) {
                                      tmp23 = "found an operator \"" + name1;
                                      tmp24 = tmp23 + "\"";
                                      Parser.tracer.print(tmp24, 196);
                                      scrut5 = Keywords.opPrecOpt(name1);
                                      if (scrut5 instanceof Option.Some.class) {
                                        arg$Some$0$1 = scrut5.value;
                                        if (runtime.Tuple.isArrayLike(arg$Some$0$1) && arg$Some$0$1.length === 2) {
                                          element0$ = runtime.Tuple.get(arg$Some$0$1, 0);
                                          element1$ = runtime.Tuple.get(arg$Some$0$1, 1);
                                          rightPrec = element1$;
                                          leftPrec = element0$;
                                          tmp25 = "leftPrec = " + leftPrec;
                                          tmp26 = tmp25 + "; rightPrec = ";
                                          tmp27 = tmp26 + rightPrec;
                                          Parser.tracer.print(tmp27, 198);
                                          scrut6 = leftPrec > prec;
                                          if (scrut6 === true) {
                                            break split_1$
                                          }
                                          break split_2$;
                                        }
                                        Parser.tracer.print("not a keyword", 207);
                                        token1 = arg$Cons$0$1;
                                        scrut9 = infix.rule.refChoice;
                                        if (scrut9 instanceof Option.Some.class) {
                                          arg$Some$0$ = scrut9.value;
                                          if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                            arg$Ref$0$ = arg$Some$0$.kind;
                                            arg$Ref$1$ = arg$Some$0$.process;
                                            arg$Ref$2$ = arg$Some$0$.outerPrec;
                                            arg$Ref$3$ = arg$Some$0$.innerPrec;
                                            arg$Ref$4$ = arg$Some$0$.rest;
                                            rest1 = arg$Ref$4$;
                                            innerPrec1 = arg$Ref$3$;
                                            outerPrec1 = arg$Ref$2$;
                                            process1 = arg$Ref$1$;
                                            kind1 = arg$Ref$0$;
                                            tmp28 = "found reference to " + kind1;
                                            tmp29 = tmp28 + " with outerPrec = ";
                                            tmp30 = tmp29 + outerPrec1;
                                            Parser.tracer.print(tmp30, 210);
                                            outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                            innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                            scrut10 = outerPrec$_1 > prec;
                                            if (scrut10 === true) {
                                              tmp31 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                              scrut11 = parseKind(kind1, tmp31);
                                              if (scrut11 instanceof Tree.Empty.class) {
                                                break split_3$
                                              } else if (scrut11 instanceof Tree.Error.class) {
                                                break split_4$
                                              }
                                              rhs2 = scrut11;
                                              break split_5$;
                                            }
                                            tmp32 = "the outer precedence is less than " + prec;
                                            Parser.tracer.print(tmp32, 225);
                                            break split_2$;
                                          }
                                          break split_default$;
                                        } else if (scrut9 instanceof Option.None.class) {} else {
                                          break split_default$
                                        }
                                      } else {
                                        Parser.tracer.print("not a keyword", 207);
                                        token1 = arg$Cons$0$1;
                                        scrut9 = infix.rule.refChoice;
                                        if (scrut9 instanceof Option.Some.class) {
                                          arg$Some$0$ = scrut9.value;
                                          if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                            arg$Ref$0$ = arg$Some$0$.kind;
                                            arg$Ref$1$ = arg$Some$0$.process;
                                            arg$Ref$2$ = arg$Some$0$.outerPrec;
                                            arg$Ref$3$ = arg$Some$0$.innerPrec;
                                            arg$Ref$4$ = arg$Some$0$.rest;
                                            rest1 = arg$Ref$4$;
                                            innerPrec1 = arg$Ref$3$;
                                            outerPrec1 = arg$Ref$2$;
                                            process1 = arg$Ref$1$;
                                            kind1 = arg$Ref$0$;
                                            tmp33 = "found reference to " + kind1;
                                            tmp34 = tmp33 + " with outerPrec = ";
                                            tmp35 = tmp34 + outerPrec1;
                                            Parser.tracer.print(tmp35, 210);
                                            outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                            innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                            scrut10 = outerPrec$_1 > prec;
                                            if (scrut10 === true) {
                                              tmp36 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                              scrut11 = parseKind(kind1, tmp36);
                                              if (scrut11 instanceof Tree.Empty.class) {
                                                break split_3$
                                              } else if (scrut11 instanceof Tree.Error.class) {
                                                break split_4$
                                              }
                                              rhs2 = scrut11;
                                              break split_5$;
                                            }
                                            tmp37 = "the outer precedence is less than " + prec;
                                            Parser.tracer.print(tmp37, 225);
                                            break split_2$;
                                          }
                                          break split_default$;
                                        } else if (scrut9 instanceof Option.None.class) {} else {
                                          break split_default$
                                        }
                                      }
                                    } else {
                                      Parser.tracer.print("not a keyword", 207);
                                      token1 = arg$Cons$0$1;
                                      scrut9 = infix.rule.refChoice;
                                      if (scrut9 instanceof Option.Some.class) {
                                        arg$Some$0$ = scrut9.value;
                                        if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                          arg$Ref$0$ = arg$Some$0$.kind;
                                          arg$Ref$1$ = arg$Some$0$.process;
                                          arg$Ref$2$ = arg$Some$0$.outerPrec;
                                          arg$Ref$3$ = arg$Some$0$.innerPrec;
                                          arg$Ref$4$ = arg$Some$0$.rest;
                                          rest1 = arg$Ref$4$;
                                          innerPrec1 = arg$Ref$3$;
                                          outerPrec1 = arg$Ref$2$;
                                          process1 = arg$Ref$1$;
                                          kind1 = arg$Ref$0$;
                                          tmp38 = "found reference to " + kind1;
                                          tmp39 = tmp38 + " with outerPrec = ";
                                          tmp40 = tmp39 + outerPrec1;
                                          Parser.tracer.print(tmp40, 210);
                                          outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                          innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                          scrut10 = outerPrec$_1 > prec;
                                          if (scrut10 === true) {
                                            tmp41 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                            scrut11 = parseKind(kind1, tmp41);
                                            if (scrut11 instanceof Tree.Empty.class) {
                                              break split_3$
                                            } else if (scrut11 instanceof Tree.Error.class) {
                                              break split_4$
                                            }
                                            rhs2 = scrut11;
                                            break split_5$;
                                          }
                                          tmp42 = "the outer precedence is less than " + prec;
                                          Parser.tracer.print(tmp42, 225);
                                          break split_2$;
                                        }
                                        break split_default$;
                                      } else if (scrut9 instanceof Option.None.class) {} else {
                                        break split_default$
                                      }
                                    }
                                  } else {
                                    Parser.tracer.print("not a keyword", 207);
                                    token1 = arg$Cons$0$1;
                                    scrut9 = infix.rule.refChoice;
                                    if (scrut9 instanceof Option.Some.class) {
                                      arg$Some$0$ = scrut9.value;
                                      if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                        arg$Ref$0$ = arg$Some$0$.kind;
                                        arg$Ref$1$ = arg$Some$0$.process;
                                        arg$Ref$2$ = arg$Some$0$.outerPrec;
                                        arg$Ref$3$ = arg$Some$0$.innerPrec;
                                        arg$Ref$4$ = arg$Some$0$.rest;
                                        rest1 = arg$Ref$4$;
                                        innerPrec1 = arg$Ref$3$;
                                        outerPrec1 = arg$Ref$2$;
                                        process1 = arg$Ref$1$;
                                        kind1 = arg$Ref$0$;
                                        tmp43 = "found reference to " + kind1;
                                        tmp44 = tmp43 + " with outerPrec = ";
                                        tmp45 = tmp44 + outerPrec1;
                                        Parser.tracer.print(tmp45, 210);
                                        outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                        innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                        scrut10 = outerPrec$_1 > prec;
                                        if (scrut10 === true) {
                                          tmp46 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                          scrut11 = parseKind(kind1, tmp46);
                                          if (scrut11 instanceof Tree.Empty.class) {
                                            break split_3$
                                          } else if (scrut11 instanceof Tree.Error.class) {
                                            break split_4$
                                          }
                                          rhs2 = scrut11;
                                          break split_5$;
                                        }
                                        tmp47 = "the outer precedence is less than " + prec;
                                        Parser.tracer.print(tmp47, 225);
                                        break split_2$;
                                      }
                                      break split_default$;
                                    } else if (scrut9 instanceof Option.None.class) {} else {
                                      break split_default$
                                    }
                                  }
                                } else {
                                  Parser.tracer.print("not a keyword", 207);
                                  token1 = arg$Cons$0$1;
                                  scrut9 = infix.rule.refChoice;
                                  if (scrut9 instanceof Option.Some.class) {
                                    arg$Some$0$ = scrut9.value;
                                    if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                      arg$Ref$0$ = arg$Some$0$.kind;
                                      arg$Ref$1$ = arg$Some$0$.process;
                                      arg$Ref$2$ = arg$Some$0$.outerPrec;
                                      arg$Ref$3$ = arg$Some$0$.innerPrec;
                                      arg$Ref$4$ = arg$Some$0$.rest;
                                      rest1 = arg$Ref$4$;
                                      innerPrec1 = arg$Ref$3$;
                                      outerPrec1 = arg$Ref$2$;
                                      process1 = arg$Ref$1$;
                                      kind1 = arg$Ref$0$;
                                      tmp48 = "found reference to " + kind1;
                                      tmp49 = tmp48 + " with outerPrec = ";
                                      tmp50 = tmp49 + outerPrec1;
                                      Parser.tracer.print(tmp50, 210);
                                      outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                      innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                      scrut10 = outerPrec$_1 > prec;
                                      if (scrut10 === true) {
                                        tmp51 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                        scrut11 = parseKind(kind1, tmp51);
                                        if (scrut11 instanceof Tree.Empty.class) {
                                          break split_3$
                                        } else if (scrut11 instanceof Tree.Error.class) {
                                          break split_4$
                                        }
                                        rhs2 = scrut11;
                                        break split_5$;
                                      }
                                      tmp52 = "the outer precedence is less than " + prec;
                                      Parser.tracer.print(tmp52, 225);
                                      break split_2$;
                                    }
                                    break split_default$;
                                  } else if (scrut9 instanceof Option.None.class) {} else {
                                    break split_default$
                                  }
                                }
                              } else {
                                tmp53 = "keyword `" + name;
                                tmp54 = tmp53 + "` does not have infix rules";
                                Parser.tracer.print(tmp54, 193);
                                if (arg$Identifier$1$ === true) {
                                  name1 = arg$Identifier$0$;
                                  tmp55 = MutMap.get(name1);
                                  scrut8 = Predef.pipeInto(Keywords.all, tmp55);
                                  if (scrut8 instanceof Option.None.class) {
                                    scrut7 = options.allowOperators;
                                    if (scrut7 === true) {
                                      tmp56 = "found an operator \"" + name1;
                                      tmp57 = tmp56 + "\"";
                                      Parser.tracer.print(tmp57, 196);
                                      scrut5 = Keywords.opPrecOpt(name1);
                                      if (scrut5 instanceof Option.Some.class) {
                                        arg$Some$0$1 = scrut5.value;
                                        if (runtime.Tuple.isArrayLike(arg$Some$0$1) && arg$Some$0$1.length === 2) {
                                          element0$ = runtime.Tuple.get(arg$Some$0$1, 0);
                                          element1$ = runtime.Tuple.get(arg$Some$0$1, 1);
                                          rightPrec = element1$;
                                          leftPrec = element0$;
                                          tmp58 = "leftPrec = " + leftPrec;
                                          tmp59 = tmp58 + "; rightPrec = ";
                                          tmp60 = tmp59 + rightPrec;
                                          Parser.tracer.print(tmp60, 198);
                                          scrut6 = leftPrec > prec;
                                          if (scrut6 === true) {
                                            break split_1$
                                          }
                                          break split_2$;
                                        }
                                        Parser.tracer.print("not a keyword", 207);
                                        token1 = arg$Cons$0$1;
                                        scrut9 = infix.rule.refChoice;
                                        if (scrut9 instanceof Option.Some.class) {
                                          arg$Some$0$ = scrut9.value;
                                          if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                            arg$Ref$0$ = arg$Some$0$.kind;
                                            arg$Ref$1$ = arg$Some$0$.process;
                                            arg$Ref$2$ = arg$Some$0$.outerPrec;
                                            arg$Ref$3$ = arg$Some$0$.innerPrec;
                                            arg$Ref$4$ = arg$Some$0$.rest;
                                            rest1 = arg$Ref$4$;
                                            innerPrec1 = arg$Ref$3$;
                                            outerPrec1 = arg$Ref$2$;
                                            process1 = arg$Ref$1$;
                                            kind1 = arg$Ref$0$;
                                            tmp61 = "found reference to " + kind1;
                                            tmp62 = tmp61 + " with outerPrec = ";
                                            tmp63 = tmp62 + outerPrec1;
                                            Parser.tracer.print(tmp63, 210);
                                            outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                            innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                            scrut10 = outerPrec$_1 > prec;
                                            if (scrut10 === true) {
                                              tmp64 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                              scrut11 = parseKind(kind1, tmp64);
                                              if (scrut11 instanceof Tree.Empty.class) {
                                                break split_3$
                                              } else if (scrut11 instanceof Tree.Error.class) {
                                                break split_4$
                                              }
                                              rhs2 = scrut11;
                                              break split_5$;
                                            }
                                            tmp65 = "the outer precedence is less than " + prec;
                                            Parser.tracer.print(tmp65, 225);
                                            break split_2$;
                                          }
                                          break split_default$;
                                        } else if (scrut9 instanceof Option.None.class) {} else {
                                          break split_default$
                                        }
                                      } else {
                                        Parser.tracer.print("not a keyword", 207);
                                        token1 = arg$Cons$0$1;
                                        scrut9 = infix.rule.refChoice;
                                        if (scrut9 instanceof Option.Some.class) {
                                          arg$Some$0$ = scrut9.value;
                                          if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                            arg$Ref$0$ = arg$Some$0$.kind;
                                            arg$Ref$1$ = arg$Some$0$.process;
                                            arg$Ref$2$ = arg$Some$0$.outerPrec;
                                            arg$Ref$3$ = arg$Some$0$.innerPrec;
                                            arg$Ref$4$ = arg$Some$0$.rest;
                                            rest1 = arg$Ref$4$;
                                            innerPrec1 = arg$Ref$3$;
                                            outerPrec1 = arg$Ref$2$;
                                            process1 = arg$Ref$1$;
                                            kind1 = arg$Ref$0$;
                                            tmp66 = "found reference to " + kind1;
                                            tmp67 = tmp66 + " with outerPrec = ";
                                            tmp68 = tmp67 + outerPrec1;
                                            Parser.tracer.print(tmp68, 210);
                                            outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                            innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                            scrut10 = outerPrec$_1 > prec;
                                            if (scrut10 === true) {
                                              tmp69 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                              scrut11 = parseKind(kind1, tmp69);
                                              if (scrut11 instanceof Tree.Empty.class) {
                                                break split_3$
                                              } else if (scrut11 instanceof Tree.Error.class) {
                                                break split_4$
                                              }
                                              rhs2 = scrut11;
                                              break split_5$;
                                            }
                                            tmp70 = "the outer precedence is less than " + prec;
                                            Parser.tracer.print(tmp70, 225);
                                            break split_2$;
                                          }
                                          break split_default$;
                                        } else if (scrut9 instanceof Option.None.class) {} else {
                                          break split_default$
                                        }
                                      }
                                    } else {
                                      Parser.tracer.print("not a keyword", 207);
                                      token1 = arg$Cons$0$1;
                                      scrut9 = infix.rule.refChoice;
                                      if (scrut9 instanceof Option.Some.class) {
                                        arg$Some$0$ = scrut9.value;
                                        if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                          arg$Ref$0$ = arg$Some$0$.kind;
                                          arg$Ref$1$ = arg$Some$0$.process;
                                          arg$Ref$2$ = arg$Some$0$.outerPrec;
                                          arg$Ref$3$ = arg$Some$0$.innerPrec;
                                          arg$Ref$4$ = arg$Some$0$.rest;
                                          rest1 = arg$Ref$4$;
                                          innerPrec1 = arg$Ref$3$;
                                          outerPrec1 = arg$Ref$2$;
                                          process1 = arg$Ref$1$;
                                          kind1 = arg$Ref$0$;
                                          tmp71 = "found reference to " + kind1;
                                          tmp72 = tmp71 + " with outerPrec = ";
                                          tmp73 = tmp72 + outerPrec1;
                                          Parser.tracer.print(tmp73, 210);
                                          outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                          innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                          scrut10 = outerPrec$_1 > prec;
                                          if (scrut10 === true) {
                                            tmp74 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                            scrut11 = parseKind(kind1, tmp74);
                                            if (scrut11 instanceof Tree.Empty.class) {
                                              break split_3$
                                            } else if (scrut11 instanceof Tree.Error.class) {
                                              break split_4$
                                            }
                                            rhs2 = scrut11;
                                            break split_5$;
                                          }
                                          tmp75 = "the outer precedence is less than " + prec;
                                          Parser.tracer.print(tmp75, 225);
                                          break split_2$;
                                        }
                                        break split_default$;
                                      } else if (scrut9 instanceof Option.None.class) {} else {
                                        break split_default$
                                      }
                                    }
                                  } else {
                                    Parser.tracer.print("not a keyword", 207);
                                    token1 = arg$Cons$0$1;
                                    scrut9 = infix.rule.refChoice;
                                    if (scrut9 instanceof Option.Some.class) {
                                      arg$Some$0$ = scrut9.value;
                                      if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                        arg$Ref$0$ = arg$Some$0$.kind;
                                        arg$Ref$1$ = arg$Some$0$.process;
                                        arg$Ref$2$ = arg$Some$0$.outerPrec;
                                        arg$Ref$3$ = arg$Some$0$.innerPrec;
                                        arg$Ref$4$ = arg$Some$0$.rest;
                                        rest1 = arg$Ref$4$;
                                        innerPrec1 = arg$Ref$3$;
                                        outerPrec1 = arg$Ref$2$;
                                        process1 = arg$Ref$1$;
                                        kind1 = arg$Ref$0$;
                                        tmp76 = "found reference to " + kind1;
                                        tmp77 = tmp76 + " with outerPrec = ";
                                        tmp78 = tmp77 + outerPrec1;
                                        Parser.tracer.print(tmp78, 210);
                                        outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                        innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                        scrut10 = outerPrec$_1 > prec;
                                        if (scrut10 === true) {
                                          tmp79 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                          scrut11 = parseKind(kind1, tmp79);
                                          if (scrut11 instanceof Tree.Empty.class) {
                                            break split_3$
                                          } else if (scrut11 instanceof Tree.Error.class) {
                                            break split_4$
                                          }
                                          rhs2 = scrut11;
                                          break split_5$;
                                        }
                                        tmp80 = "the outer precedence is less than " + prec;
                                        Parser.tracer.print(tmp80, 225);
                                        break split_2$;
                                      }
                                      break split_default$;
                                    } else if (scrut9 instanceof Option.None.class) {} else {
                                      break split_default$
                                    }
                                  }
                                } else {
                                  Parser.tracer.print("not a keyword", 207);
                                  token1 = arg$Cons$0$1;
                                  scrut9 = infix.rule.refChoice;
                                  if (scrut9 instanceof Option.Some.class) {
                                    arg$Some$0$ = scrut9.value;
                                    if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                      arg$Ref$0$ = arg$Some$0$.kind;
                                      arg$Ref$1$ = arg$Some$0$.process;
                                      arg$Ref$2$ = arg$Some$0$.outerPrec;
                                      arg$Ref$3$ = arg$Some$0$.innerPrec;
                                      arg$Ref$4$ = arg$Some$0$.rest;
                                      rest1 = arg$Ref$4$;
                                      innerPrec1 = arg$Ref$3$;
                                      outerPrec1 = arg$Ref$2$;
                                      process1 = arg$Ref$1$;
                                      kind1 = arg$Ref$0$;
                                      tmp81 = "found reference to " + kind1;
                                      tmp82 = tmp81 + " with outerPrec = ";
                                      tmp83 = tmp82 + outerPrec1;
                                      Parser.tracer.print(tmp83, 210);
                                      outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                      innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                      scrut10 = outerPrec$_1 > prec;
                                      if (scrut10 === true) {
                                        tmp84 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                        scrut11 = parseKind(kind1, tmp84);
                                        if (scrut11 instanceof Tree.Empty.class) {
                                          break split_3$
                                        } else if (scrut11 instanceof Tree.Error.class) {
                                          break split_4$
                                        }
                                        rhs2 = scrut11;
                                        break split_5$;
                                      }
                                      tmp85 = "the outer precedence is less than " + prec;
                                      Parser.tracer.print(tmp85, 225);
                                      break split_2$;
                                    }
                                    break split_default$;
                                  } else if (scrut9 instanceof Option.None.class) {} else {
                                    break split_default$
                                  }
                                }
                              }
                            } else if (scrut2 instanceof Option.None.class) {
                              break split_2$
                            } else {
                              tmp86 = "keyword `" + name;
                              tmp87 = tmp86 + "` does not have infix rules";
                              Parser.tracer.print(tmp87, 193);
                              if (arg$Identifier$1$ === true) {
                                name1 = arg$Identifier$0$;
                                tmp88 = MutMap.get(name1);
                                scrut8 = Predef.pipeInto(Keywords.all, tmp88);
                                if (scrut8 instanceof Option.None.class) {
                                  scrut7 = options.allowOperators;
                                  if (scrut7 === true) {
                                    tmp89 = "found an operator \"" + name1;
                                    tmp90 = tmp89 + "\"";
                                    Parser.tracer.print(tmp90, 196);
                                    scrut5 = Keywords.opPrecOpt(name1);
                                    if (scrut5 instanceof Option.Some.class) {
                                      arg$Some$0$1 = scrut5.value;
                                      if (runtime.Tuple.isArrayLike(arg$Some$0$1) && arg$Some$0$1.length === 2) {
                                        element0$ = runtime.Tuple.get(arg$Some$0$1, 0);
                                        element1$ = runtime.Tuple.get(arg$Some$0$1, 1);
                                        rightPrec = element1$;
                                        leftPrec = element0$;
                                        tmp91 = "leftPrec = " + leftPrec;
                                        tmp92 = tmp91 + "; rightPrec = ";
                                        tmp93 = tmp92 + rightPrec;
                                        Parser.tracer.print(tmp93, 198);
                                        scrut6 = leftPrec > prec;
                                        if (scrut6 === true) {
                                          break split_1$
                                        }
                                        break split_2$;
                                      }
                                      Parser.tracer.print("not a keyword", 207);
                                      token1 = arg$Cons$0$1;
                                      scrut9 = infix.rule.refChoice;
                                      if (scrut9 instanceof Option.Some.class) {
                                        arg$Some$0$ = scrut9.value;
                                        if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                          arg$Ref$0$ = arg$Some$0$.kind;
                                          arg$Ref$1$ = arg$Some$0$.process;
                                          arg$Ref$2$ = arg$Some$0$.outerPrec;
                                          arg$Ref$3$ = arg$Some$0$.innerPrec;
                                          arg$Ref$4$ = arg$Some$0$.rest;
                                          rest1 = arg$Ref$4$;
                                          innerPrec1 = arg$Ref$3$;
                                          outerPrec1 = arg$Ref$2$;
                                          process1 = arg$Ref$1$;
                                          kind1 = arg$Ref$0$;
                                          tmp94 = "found reference to " + kind1;
                                          tmp95 = tmp94 + " with outerPrec = ";
                                          tmp96 = tmp95 + outerPrec1;
                                          Parser.tracer.print(tmp96, 210);
                                          outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                          innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                          scrut10 = outerPrec$_1 > prec;
                                          if (scrut10 === true) {
                                            tmp97 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                            scrut11 = parseKind(kind1, tmp97);
                                            if (scrut11 instanceof Tree.Empty.class) {
                                              break split_3$
                                            } else if (scrut11 instanceof Tree.Error.class) {
                                              break split_4$
                                            }
                                            rhs2 = scrut11;
                                            break split_5$;
                                          }
                                          tmp98 = "the outer precedence is less than " + prec;
                                          Parser.tracer.print(tmp98, 225);
                                          break split_2$;
                                        }
                                        break split_default$;
                                      } else if (scrut9 instanceof Option.None.class) {} else {
                                        break split_default$
                                      }
                                    } else {
                                      Parser.tracer.print("not a keyword", 207);
                                      token1 = arg$Cons$0$1;
                                      scrut9 = infix.rule.refChoice;
                                      if (scrut9 instanceof Option.Some.class) {
                                        arg$Some$0$ = scrut9.value;
                                        if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                          arg$Ref$0$ = arg$Some$0$.kind;
                                          arg$Ref$1$ = arg$Some$0$.process;
                                          arg$Ref$2$ = arg$Some$0$.outerPrec;
                                          arg$Ref$3$ = arg$Some$0$.innerPrec;
                                          arg$Ref$4$ = arg$Some$0$.rest;
                                          rest1 = arg$Ref$4$;
                                          innerPrec1 = arg$Ref$3$;
                                          outerPrec1 = arg$Ref$2$;
                                          process1 = arg$Ref$1$;
                                          kind1 = arg$Ref$0$;
                                          tmp99 = "found reference to " + kind1;
                                          tmp100 = tmp99 + " with outerPrec = ";
                                          tmp101 = tmp100 + outerPrec1;
                                          Parser.tracer.print(tmp101, 210);
                                          outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                          innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                          scrut10 = outerPrec$_1 > prec;
                                          if (scrut10 === true) {
                                            tmp102 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                            scrut11 = parseKind(kind1, tmp102);
                                            if (scrut11 instanceof Tree.Empty.class) {
                                              break split_3$
                                            } else if (scrut11 instanceof Tree.Error.class) {
                                              break split_4$
                                            }
                                            rhs2 = scrut11;
                                            break split_5$;
                                          }
                                          tmp103 = "the outer precedence is less than " + prec;
                                          Parser.tracer.print(tmp103, 225);
                                          break split_2$;
                                        }
                                        break split_default$;
                                      } else if (scrut9 instanceof Option.None.class) {} else {
                                        break split_default$
                                      }
                                    }
                                  } else {
                                    Parser.tracer.print("not a keyword", 207);
                                    token1 = arg$Cons$0$1;
                                    scrut9 = infix.rule.refChoice;
                                    if (scrut9 instanceof Option.Some.class) {
                                      arg$Some$0$ = scrut9.value;
                                      if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                        arg$Ref$0$ = arg$Some$0$.kind;
                                        arg$Ref$1$ = arg$Some$0$.process;
                                        arg$Ref$2$ = arg$Some$0$.outerPrec;
                                        arg$Ref$3$ = arg$Some$0$.innerPrec;
                                        arg$Ref$4$ = arg$Some$0$.rest;
                                        rest1 = arg$Ref$4$;
                                        innerPrec1 = arg$Ref$3$;
                                        outerPrec1 = arg$Ref$2$;
                                        process1 = arg$Ref$1$;
                                        kind1 = arg$Ref$0$;
                                        tmp104 = "found reference to " + kind1;
                                        tmp105 = tmp104 + " with outerPrec = ";
                                        tmp106 = tmp105 + outerPrec1;
                                        Parser.tracer.print(tmp106, 210);
                                        outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                        innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                        scrut10 = outerPrec$_1 > prec;
                                        if (scrut10 === true) {
                                          tmp107 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                          scrut11 = parseKind(kind1, tmp107);
                                          if (scrut11 instanceof Tree.Empty.class) {
                                            break split_3$
                                          } else if (scrut11 instanceof Tree.Error.class) {
                                            break split_4$
                                          }
                                          rhs2 = scrut11;
                                          break split_5$;
                                        }
                                        tmp108 = "the outer precedence is less than " + prec;
                                        Parser.tracer.print(tmp108, 225);
                                        break split_2$;
                                      }
                                      break split_default$;
                                    } else if (scrut9 instanceof Option.None.class) {} else {
                                      break split_default$
                                    }
                                  }
                                } else {
                                  Parser.tracer.print("not a keyword", 207);
                                  token1 = arg$Cons$0$1;
                                  scrut9 = infix.rule.refChoice;
                                  if (scrut9 instanceof Option.Some.class) {
                                    arg$Some$0$ = scrut9.value;
                                    if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                      arg$Ref$0$ = arg$Some$0$.kind;
                                      arg$Ref$1$ = arg$Some$0$.process;
                                      arg$Ref$2$ = arg$Some$0$.outerPrec;
                                      arg$Ref$3$ = arg$Some$0$.innerPrec;
                                      arg$Ref$4$ = arg$Some$0$.rest;
                                      rest1 = arg$Ref$4$;
                                      innerPrec1 = arg$Ref$3$;
                                      outerPrec1 = arg$Ref$2$;
                                      process1 = arg$Ref$1$;
                                      kind1 = arg$Ref$0$;
                                      tmp109 = "found reference to " + kind1;
                                      tmp110 = tmp109 + " with outerPrec = ";
                                      tmp111 = tmp110 + outerPrec1;
                                      Parser.tracer.print(tmp111, 210);
                                      outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                      innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                      scrut10 = outerPrec$_1 > prec;
                                      if (scrut10 === true) {
                                        tmp112 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                        scrut11 = parseKind(kind1, tmp112);
                                        if (scrut11 instanceof Tree.Empty.class) {
                                          break split_3$
                                        } else if (scrut11 instanceof Tree.Error.class) {
                                          break split_4$
                                        }
                                        rhs2 = scrut11;
                                        break split_5$;
                                      }
                                      tmp113 = "the outer precedence is less than " + prec;
                                      Parser.tracer.print(tmp113, 225);
                                      break split_2$;
                                    }
                                    break split_default$;
                                  } else if (scrut9 instanceof Option.None.class) {} else {
                                    break split_default$
                                  }
                                }
                              } else {
                                Parser.tracer.print("not a keyword", 207);
                                token1 = arg$Cons$0$1;
                                scrut9 = infix.rule.refChoice;
                                if (scrut9 instanceof Option.Some.class) {
                                  arg$Some$0$ = scrut9.value;
                                  if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                    arg$Ref$0$ = arg$Some$0$.kind;
                                    arg$Ref$1$ = arg$Some$0$.process;
                                    arg$Ref$2$ = arg$Some$0$.outerPrec;
                                    arg$Ref$3$ = arg$Some$0$.innerPrec;
                                    arg$Ref$4$ = arg$Some$0$.rest;
                                    rest1 = arg$Ref$4$;
                                    innerPrec1 = arg$Ref$3$;
                                    outerPrec1 = arg$Ref$2$;
                                    process1 = arg$Ref$1$;
                                    kind1 = arg$Ref$0$;
                                    tmp114 = "found reference to " + kind1;
                                    tmp115 = tmp114 + " with outerPrec = ";
                                    tmp116 = tmp115 + outerPrec1;
                                    Parser.tracer.print(tmp116, 210);
                                    outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                    innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                    scrut10 = outerPrec$_1 > prec;
                                    if (scrut10 === true) {
                                      tmp117 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                      scrut11 = parseKind(kind1, tmp117);
                                      if (scrut11 instanceof Tree.Empty.class) {
                                        break split_3$
                                      } else if (scrut11 instanceof Tree.Error.class) {
                                        break split_4$
                                      }
                                      rhs2 = scrut11;
                                      break split_5$;
                                    }
                                    tmp118 = "the outer precedence is less than " + prec;
                                    Parser.tracer.print(tmp118, 225);
                                    break split_2$;
                                  }
                                  break split_default$;
                                } else if (scrut9 instanceof Option.None.class) {} else {
                                  break split_default$
                                }
                              }
                            }
                          } else {
                            tmp119 = "keyword `" + name;
                            tmp120 = tmp119 + "` does not have infix rules";
                            Parser.tracer.print(tmp120, 193);
                            if (arg$Identifier$1$ === true) {
                              name1 = arg$Identifier$0$;
                              tmp121 = MutMap.get(name1);
                              scrut8 = Predef.pipeInto(Keywords.all, tmp121);
                              if (scrut8 instanceof Option.None.class) {
                                scrut7 = options.allowOperators;
                                if (scrut7 === true) {
                                  tmp122 = "found an operator \"" + name1;
                                  tmp123 = tmp122 + "\"";
                                  Parser.tracer.print(tmp123, 196);
                                  scrut5 = Keywords.opPrecOpt(name1);
                                  if (scrut5 instanceof Option.Some.class) {
                                    arg$Some$0$1 = scrut5.value;
                                    if (runtime.Tuple.isArrayLike(arg$Some$0$1) && arg$Some$0$1.length === 2) {
                                      element0$ = runtime.Tuple.get(arg$Some$0$1, 0);
                                      element1$ = runtime.Tuple.get(arg$Some$0$1, 1);
                                      rightPrec = element1$;
                                      leftPrec = element0$;
                                      tmp124 = "leftPrec = " + leftPrec;
                                      tmp125 = tmp124 + "; rightPrec = ";
                                      tmp126 = tmp125 + rightPrec;
                                      Parser.tracer.print(tmp126, 198);
                                      scrut6 = leftPrec > prec;
                                      if (scrut6 === true) {
                                        break split_1$
                                      }
                                      break split_2$;
                                    }
                                    Parser.tracer.print("not a keyword", 207);
                                    token1 = arg$Cons$0$1;
                                    scrut9 = infix.rule.refChoice;
                                    if (scrut9 instanceof Option.Some.class) {
                                      arg$Some$0$ = scrut9.value;
                                      if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                        arg$Ref$0$ = arg$Some$0$.kind;
                                        arg$Ref$1$ = arg$Some$0$.process;
                                        arg$Ref$2$ = arg$Some$0$.outerPrec;
                                        arg$Ref$3$ = arg$Some$0$.innerPrec;
                                        arg$Ref$4$ = arg$Some$0$.rest;
                                        rest1 = arg$Ref$4$;
                                        innerPrec1 = arg$Ref$3$;
                                        outerPrec1 = arg$Ref$2$;
                                        process1 = arg$Ref$1$;
                                        kind1 = arg$Ref$0$;
                                        tmp127 = "found reference to " + kind1;
                                        tmp128 = tmp127 + " with outerPrec = ";
                                        tmp129 = tmp128 + outerPrec1;
                                        Parser.tracer.print(tmp129, 210);
                                        outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                        innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                        scrut10 = outerPrec$_1 > prec;
                                        if (scrut10 === true) {
                                          tmp130 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                          scrut11 = parseKind(kind1, tmp130);
                                          if (scrut11 instanceof Tree.Empty.class) {
                                            break split_3$
                                          } else if (scrut11 instanceof Tree.Error.class) {
                                            break split_4$
                                          }
                                          rhs2 = scrut11;
                                          break split_5$;
                                        }
                                        tmp131 = "the outer precedence is less than " + prec;
                                        Parser.tracer.print(tmp131, 225);
                                        break split_2$;
                                      }
                                      break split_default$;
                                    } else if (scrut9 instanceof Option.None.class) {} else {
                                      break split_default$
                                    }
                                  } else {
                                    Parser.tracer.print("not a keyword", 207);
                                    token1 = arg$Cons$0$1;
                                    scrut9 = infix.rule.refChoice;
                                    if (scrut9 instanceof Option.Some.class) {
                                      arg$Some$0$ = scrut9.value;
                                      if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                        arg$Ref$0$ = arg$Some$0$.kind;
                                        arg$Ref$1$ = arg$Some$0$.process;
                                        arg$Ref$2$ = arg$Some$0$.outerPrec;
                                        arg$Ref$3$ = arg$Some$0$.innerPrec;
                                        arg$Ref$4$ = arg$Some$0$.rest;
                                        rest1 = arg$Ref$4$;
                                        innerPrec1 = arg$Ref$3$;
                                        outerPrec1 = arg$Ref$2$;
                                        process1 = arg$Ref$1$;
                                        kind1 = arg$Ref$0$;
                                        tmp132 = "found reference to " + kind1;
                                        tmp133 = tmp132 + " with outerPrec = ";
                                        tmp134 = tmp133 + outerPrec1;
                                        Parser.tracer.print(tmp134, 210);
                                        outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                        innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                        scrut10 = outerPrec$_1 > prec;
                                        if (scrut10 === true) {
                                          tmp135 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                          scrut11 = parseKind(kind1, tmp135);
                                          if (scrut11 instanceof Tree.Empty.class) {
                                            break split_3$
                                          } else if (scrut11 instanceof Tree.Error.class) {
                                            break split_4$
                                          }
                                          rhs2 = scrut11;
                                          break split_5$;
                                        }
                                        tmp136 = "the outer precedence is less than " + prec;
                                        Parser.tracer.print(tmp136, 225);
                                        break split_2$;
                                      }
                                      break split_default$;
                                    } else if (scrut9 instanceof Option.None.class) {} else {
                                      break split_default$
                                    }
                                  }
                                } else {
                                  Parser.tracer.print("not a keyword", 207);
                                  token1 = arg$Cons$0$1;
                                  scrut9 = infix.rule.refChoice;
                                  if (scrut9 instanceof Option.Some.class) {
                                    arg$Some$0$ = scrut9.value;
                                    if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                      arg$Ref$0$ = arg$Some$0$.kind;
                                      arg$Ref$1$ = arg$Some$0$.process;
                                      arg$Ref$2$ = arg$Some$0$.outerPrec;
                                      arg$Ref$3$ = arg$Some$0$.innerPrec;
                                      arg$Ref$4$ = arg$Some$0$.rest;
                                      rest1 = arg$Ref$4$;
                                      innerPrec1 = arg$Ref$3$;
                                      outerPrec1 = arg$Ref$2$;
                                      process1 = arg$Ref$1$;
                                      kind1 = arg$Ref$0$;
                                      tmp137 = "found reference to " + kind1;
                                      tmp138 = tmp137 + " with outerPrec = ";
                                      tmp139 = tmp138 + outerPrec1;
                                      Parser.tracer.print(tmp139, 210);
                                      outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                      innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                      scrut10 = outerPrec$_1 > prec;
                                      if (scrut10 === true) {
                                        tmp140 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                        scrut11 = parseKind(kind1, tmp140);
                                        if (scrut11 instanceof Tree.Empty.class) {
                                          break split_3$
                                        } else if (scrut11 instanceof Tree.Error.class) {
                                          break split_4$
                                        }
                                        rhs2 = scrut11;
                                        break split_5$;
                                      }
                                      tmp141 = "the outer precedence is less than " + prec;
                                      Parser.tracer.print(tmp141, 225);
                                      break split_2$;
                                    }
                                    break split_default$;
                                  } else if (scrut9 instanceof Option.None.class) {} else {
                                    break split_default$
                                  }
                                }
                              } else {
                                Parser.tracer.print("not a keyword", 207);
                                token1 = arg$Cons$0$1;
                                scrut9 = infix.rule.refChoice;
                                if (scrut9 instanceof Option.Some.class) {
                                  arg$Some$0$ = scrut9.value;
                                  if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                    arg$Ref$0$ = arg$Some$0$.kind;
                                    arg$Ref$1$ = arg$Some$0$.process;
                                    arg$Ref$2$ = arg$Some$0$.outerPrec;
                                    arg$Ref$3$ = arg$Some$0$.innerPrec;
                                    arg$Ref$4$ = arg$Some$0$.rest;
                                    rest1 = arg$Ref$4$;
                                    innerPrec1 = arg$Ref$3$;
                                    outerPrec1 = arg$Ref$2$;
                                    process1 = arg$Ref$1$;
                                    kind1 = arg$Ref$0$;
                                    tmp142 = "found reference to " + kind1;
                                    tmp143 = tmp142 + " with outerPrec = ";
                                    tmp144 = tmp143 + outerPrec1;
                                    Parser.tracer.print(tmp144, 210);
                                    outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                    innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                    scrut10 = outerPrec$_1 > prec;
                                    if (scrut10 === true) {
                                      tmp145 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                      scrut11 = parseKind(kind1, tmp145);
                                      if (scrut11 instanceof Tree.Empty.class) {
                                        break split_3$
                                      } else if (scrut11 instanceof Tree.Error.class) {
                                        break split_4$
                                      }
                                      rhs2 = scrut11;
                                      break split_5$;
                                    }
                                    tmp146 = "the outer precedence is less than " + prec;
                                    Parser.tracer.print(tmp146, 225);
                                    break split_2$;
                                  }
                                  break split_default$;
                                } else if (scrut9 instanceof Option.None.class) {} else {
                                  break split_default$
                                }
                              }
                            } else {
                              Parser.tracer.print("not a keyword", 207);
                              token1 = arg$Cons$0$1;
                              scrut9 = infix.rule.refChoice;
                              if (scrut9 instanceof Option.Some.class) {
                                arg$Some$0$ = scrut9.value;
                                if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                  arg$Ref$0$ = arg$Some$0$.kind;
                                  arg$Ref$1$ = arg$Some$0$.process;
                                  arg$Ref$2$ = arg$Some$0$.outerPrec;
                                  arg$Ref$3$ = arg$Some$0$.innerPrec;
                                  arg$Ref$4$ = arg$Some$0$.rest;
                                  rest1 = arg$Ref$4$;
                                  innerPrec1 = arg$Ref$3$;
                                  outerPrec1 = arg$Ref$2$;
                                  process1 = arg$Ref$1$;
                                  kind1 = arg$Ref$0$;
                                  tmp147 = "found reference to " + kind1;
                                  tmp148 = tmp147 + " with outerPrec = ";
                                  tmp149 = tmp148 + outerPrec1;
                                  Parser.tracer.print(tmp149, 210);
                                  outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                  innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                  scrut10 = outerPrec$_1 > prec;
                                  if (scrut10 === true) {
                                    tmp150 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                    scrut11 = parseKind(kind1, tmp150);
                                    if (scrut11 instanceof Tree.Empty.class) {
                                      break split_3$
                                    } else if (scrut11 instanceof Tree.Error.class) {
                                      break split_4$
                                    }
                                    rhs2 = scrut11;
                                    break split_5$;
                                  }
                                  tmp151 = "the outer precedence is less than " + prec;
                                  Parser.tracer.print(tmp151, 225);
                                  break split_2$;
                                }
                                break split_default$;
                              } else if (scrut9 instanceof Option.None.class) {} else {
                                break split_default$
                              }
                            }
                          }
                        } else {
                          tmp152 = "keyword `" + name;
                          tmp153 = tmp152 + "` does not have infix rules";
                          Parser.tracer.print(tmp153, 193);
                          if (arg$Identifier$1$ === true) {
                            name1 = arg$Identifier$0$;
                            tmp154 = MutMap.get(name1);
                            scrut8 = Predef.pipeInto(Keywords.all, tmp154);
                            if (scrut8 instanceof Option.None.class) {
                              scrut7 = options.allowOperators;
                              if (scrut7 === true) {
                                tmp155 = "found an operator \"" + name1;
                                tmp156 = tmp155 + "\"";
                                Parser.tracer.print(tmp156, 196);
                                scrut5 = Keywords.opPrecOpt(name1);
                                if (scrut5 instanceof Option.Some.class) {
                                  arg$Some$0$1 = scrut5.value;
                                  if (runtime.Tuple.isArrayLike(arg$Some$0$1) && arg$Some$0$1.length === 2) {
                                    element0$ = runtime.Tuple.get(arg$Some$0$1, 0);
                                    element1$ = runtime.Tuple.get(arg$Some$0$1, 1);
                                    rightPrec = element1$;
                                    leftPrec = element0$;
                                    tmp157 = "leftPrec = " + leftPrec;
                                    tmp158 = tmp157 + "; rightPrec = ";
                                    tmp159 = tmp158 + rightPrec;
                                    Parser.tracer.print(tmp159, 198);
                                    scrut6 = leftPrec > prec;
                                    if (scrut6 === true) {
                                      break split_1$
                                    }
                                    break split_2$;
                                  }
                                  Parser.tracer.print("not a keyword", 207);
                                  token1 = arg$Cons$0$1;
                                  scrut9 = infix.rule.refChoice;
                                  if (scrut9 instanceof Option.Some.class) {
                                    arg$Some$0$ = scrut9.value;
                                    if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                      arg$Ref$0$ = arg$Some$0$.kind;
                                      arg$Ref$1$ = arg$Some$0$.process;
                                      arg$Ref$2$ = arg$Some$0$.outerPrec;
                                      arg$Ref$3$ = arg$Some$0$.innerPrec;
                                      arg$Ref$4$ = arg$Some$0$.rest;
                                      rest1 = arg$Ref$4$;
                                      innerPrec1 = arg$Ref$3$;
                                      outerPrec1 = arg$Ref$2$;
                                      process1 = arg$Ref$1$;
                                      kind1 = arg$Ref$0$;
                                      tmp160 = "found reference to " + kind1;
                                      tmp161 = tmp160 + " with outerPrec = ";
                                      tmp162 = tmp161 + outerPrec1;
                                      Parser.tracer.print(tmp162, 210);
                                      outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                      innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                      scrut10 = outerPrec$_1 > prec;
                                      if (scrut10 === true) {
                                        tmp163 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                        scrut11 = parseKind(kind1, tmp163);
                                        if (scrut11 instanceof Tree.Empty.class) {
                                          break split_3$
                                        } else if (scrut11 instanceof Tree.Error.class) {
                                          break split_4$
                                        }
                                        rhs2 = scrut11;
                                        break split_5$;
                                      }
                                      tmp164 = "the outer precedence is less than " + prec;
                                      Parser.tracer.print(tmp164, 225);
                                      break split_2$;
                                    }
                                    break split_default$;
                                  } else if (scrut9 instanceof Option.None.class) {} else {
                                    break split_default$
                                  }
                                } else {
                                  Parser.tracer.print("not a keyword", 207);
                                  token1 = arg$Cons$0$1;
                                  scrut9 = infix.rule.refChoice;
                                  if (scrut9 instanceof Option.Some.class) {
                                    arg$Some$0$ = scrut9.value;
                                    if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                      arg$Ref$0$ = arg$Some$0$.kind;
                                      arg$Ref$1$ = arg$Some$0$.process;
                                      arg$Ref$2$ = arg$Some$0$.outerPrec;
                                      arg$Ref$3$ = arg$Some$0$.innerPrec;
                                      arg$Ref$4$ = arg$Some$0$.rest;
                                      rest1 = arg$Ref$4$;
                                      innerPrec1 = arg$Ref$3$;
                                      outerPrec1 = arg$Ref$2$;
                                      process1 = arg$Ref$1$;
                                      kind1 = arg$Ref$0$;
                                      tmp165 = "found reference to " + kind1;
                                      tmp166 = tmp165 + " with outerPrec = ";
                                      tmp167 = tmp166 + outerPrec1;
                                      Parser.tracer.print(tmp167, 210);
                                      outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                      innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                      scrut10 = outerPrec$_1 > prec;
                                      if (scrut10 === true) {
                                        tmp168 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                        scrut11 = parseKind(kind1, tmp168);
                                        if (scrut11 instanceof Tree.Empty.class) {
                                          break split_3$
                                        } else if (scrut11 instanceof Tree.Error.class) {
                                          break split_4$
                                        }
                                        rhs2 = scrut11;
                                        break split_5$;
                                      }
                                      tmp169 = "the outer precedence is less than " + prec;
                                      Parser.tracer.print(tmp169, 225);
                                      break split_2$;
                                    }
                                    break split_default$;
                                  } else if (scrut9 instanceof Option.None.class) {} else {
                                    break split_default$
                                  }
                                }
                              } else {
                                Parser.tracer.print("not a keyword", 207);
                                token1 = arg$Cons$0$1;
                                scrut9 = infix.rule.refChoice;
                                if (scrut9 instanceof Option.Some.class) {
                                  arg$Some$0$ = scrut9.value;
                                  if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                    arg$Ref$0$ = arg$Some$0$.kind;
                                    arg$Ref$1$ = arg$Some$0$.process;
                                    arg$Ref$2$ = arg$Some$0$.outerPrec;
                                    arg$Ref$3$ = arg$Some$0$.innerPrec;
                                    arg$Ref$4$ = arg$Some$0$.rest;
                                    rest1 = arg$Ref$4$;
                                    innerPrec1 = arg$Ref$3$;
                                    outerPrec1 = arg$Ref$2$;
                                    process1 = arg$Ref$1$;
                                    kind1 = arg$Ref$0$;
                                    tmp170 = "found reference to " + kind1;
                                    tmp171 = tmp170 + " with outerPrec = ";
                                    tmp172 = tmp171 + outerPrec1;
                                    Parser.tracer.print(tmp172, 210);
                                    outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                    innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                    scrut10 = outerPrec$_1 > prec;
                                    if (scrut10 === true) {
                                      tmp173 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                      scrut11 = parseKind(kind1, tmp173);
                                      if (scrut11 instanceof Tree.Empty.class) {
                                        break split_3$
                                      } else if (scrut11 instanceof Tree.Error.class) {
                                        break split_4$
                                      }
                                      rhs2 = scrut11;
                                      break split_5$;
                                    }
                                    tmp174 = "the outer precedence is less than " + prec;
                                    Parser.tracer.print(tmp174, 225);
                                    break split_2$;
                                  }
                                  break split_default$;
                                } else if (scrut9 instanceof Option.None.class) {} else {
                                  break split_default$
                                }
                              }
                            } else {
                              Parser.tracer.print("not a keyword", 207);
                              token1 = arg$Cons$0$1;
                              scrut9 = infix.rule.refChoice;
                              if (scrut9 instanceof Option.Some.class) {
                                arg$Some$0$ = scrut9.value;
                                if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                  arg$Ref$0$ = arg$Some$0$.kind;
                                  arg$Ref$1$ = arg$Some$0$.process;
                                  arg$Ref$2$ = arg$Some$0$.outerPrec;
                                  arg$Ref$3$ = arg$Some$0$.innerPrec;
                                  arg$Ref$4$ = arg$Some$0$.rest;
                                  rest1 = arg$Ref$4$;
                                  innerPrec1 = arg$Ref$3$;
                                  outerPrec1 = arg$Ref$2$;
                                  process1 = arg$Ref$1$;
                                  kind1 = arg$Ref$0$;
                                  tmp175 = "found reference to " + kind1;
                                  tmp176 = tmp175 + " with outerPrec = ";
                                  tmp177 = tmp176 + outerPrec1;
                                  Parser.tracer.print(tmp177, 210);
                                  outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                  innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                  scrut10 = outerPrec$_1 > prec;
                                  if (scrut10 === true) {
                                    tmp178 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                    scrut11 = parseKind(kind1, tmp178);
                                    if (scrut11 instanceof Tree.Empty.class) {
                                      break split_3$
                                    } else if (scrut11 instanceof Tree.Error.class) {
                                      break split_4$
                                    }
                                    rhs2 = scrut11;
                                    break split_5$;
                                  }
                                  tmp179 = "the outer precedence is less than " + prec;
                                  Parser.tracer.print(tmp179, 225);
                                  break split_2$;
                                }
                                break split_default$;
                              } else if (scrut9 instanceof Option.None.class) {} else {
                                break split_default$
                              }
                            }
                          } else {
                            Parser.tracer.print("not a keyword", 207);
                            token1 = arg$Cons$0$1;
                            scrut9 = infix.rule.refChoice;
                            if (scrut9 instanceof Option.Some.class) {
                              arg$Some$0$ = scrut9.value;
                              if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                arg$Ref$0$ = arg$Some$0$.kind;
                                arg$Ref$1$ = arg$Some$0$.process;
                                arg$Ref$2$ = arg$Some$0$.outerPrec;
                                arg$Ref$3$ = arg$Some$0$.innerPrec;
                                arg$Ref$4$ = arg$Some$0$.rest;
                                rest1 = arg$Ref$4$;
                                innerPrec1 = arg$Ref$3$;
                                outerPrec1 = arg$Ref$2$;
                                process1 = arg$Ref$1$;
                                kind1 = arg$Ref$0$;
                                tmp180 = "found reference to " + kind1;
                                tmp181 = tmp180 + " with outerPrec = ";
                                tmp182 = tmp181 + outerPrec1;
                                Parser.tracer.print(tmp182, 210);
                                outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                scrut10 = outerPrec$_1 > prec;
                                if (scrut10 === true) {
                                  tmp183 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                  scrut11 = parseKind(kind1, tmp183);
                                  if (scrut11 instanceof Tree.Empty.class) {
                                    break split_3$
                                  } else if (scrut11 instanceof Tree.Error.class) {
                                    break split_4$
                                  }
                                  rhs2 = scrut11;
                                  break split_5$;
                                }
                                tmp184 = "the outer precedence is less than " + prec;
                                Parser.tracer.print(tmp184, 225);
                                break split_2$;
                              }
                              break split_default$;
                            } else if (scrut9 instanceof Option.None.class) {} else {
                              break split_default$
                            }
                          }
                        }
                      } else {
                        if (arg$Identifier$1$ === true) {
                          name1 = arg$Identifier$0$;
                          tmp185 = MutMap.get(name1);
                          scrut8 = Predef.pipeInto(Keywords.all, tmp185);
                          if (scrut8 instanceof Option.None.class) {
                            scrut7 = options.allowOperators;
                            if (scrut7 === true) {
                              tmp186 = "found an operator \"" + name1;
                              tmp187 = tmp186 + "\"";
                              Parser.tracer.print(tmp187, 196);
                              scrut5 = Keywords.opPrecOpt(name1);
                              if (scrut5 instanceof Option.Some.class) {
                                arg$Some$0$1 = scrut5.value;
                                if (runtime.Tuple.isArrayLike(arg$Some$0$1) && arg$Some$0$1.length === 2) {
                                  element0$ = runtime.Tuple.get(arg$Some$0$1, 0);
                                  element1$ = runtime.Tuple.get(arg$Some$0$1, 1);
                                  rightPrec = element1$;
                                  leftPrec = element0$;
                                  tmp188 = "leftPrec = " + leftPrec;
                                  tmp189 = tmp188 + "; rightPrec = ";
                                  tmp190 = tmp189 + rightPrec;
                                  Parser.tracer.print(tmp190, 198);
                                  scrut6 = leftPrec > prec;
                                  if (scrut6 === true) {
                                    break split_1$
                                  }
                                  break split_2$;
                                }
                                Parser.tracer.print("not a keyword", 207);
                                token1 = arg$Cons$0$1;
                                scrut9 = infix.rule.refChoice;
                                if (scrut9 instanceof Option.Some.class) {
                                  arg$Some$0$ = scrut9.value;
                                  if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                    arg$Ref$0$ = arg$Some$0$.kind;
                                    arg$Ref$1$ = arg$Some$0$.process;
                                    arg$Ref$2$ = arg$Some$0$.outerPrec;
                                    arg$Ref$3$ = arg$Some$0$.innerPrec;
                                    arg$Ref$4$ = arg$Some$0$.rest;
                                    rest1 = arg$Ref$4$;
                                    innerPrec1 = arg$Ref$3$;
                                    outerPrec1 = arg$Ref$2$;
                                    process1 = arg$Ref$1$;
                                    kind1 = arg$Ref$0$;
                                    tmp191 = "found reference to " + kind1;
                                    tmp192 = tmp191 + " with outerPrec = ";
                                    tmp193 = tmp192 + outerPrec1;
                                    Parser.tracer.print(tmp193, 210);
                                    outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                    innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                    scrut10 = outerPrec$_1 > prec;
                                    if (scrut10 === true) {
                                      tmp194 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                      scrut11 = parseKind(kind1, tmp194);
                                      if (scrut11 instanceof Tree.Empty.class) {
                                        break split_3$
                                      } else if (scrut11 instanceof Tree.Error.class) {
                                        break split_4$
                                      }
                                      rhs2 = scrut11;
                                      break split_5$;
                                    }
                                    tmp195 = "the outer precedence is less than " + prec;
                                    Parser.tracer.print(tmp195, 225);
                                    break split_2$;
                                  }
                                  break split_default$;
                                } else if (scrut9 instanceof Option.None.class) {} else {
                                  break split_default$
                                }
                              } else {
                                Parser.tracer.print("not a keyword", 207);
                                token1 = arg$Cons$0$1;
                                scrut9 = infix.rule.refChoice;
                                if (scrut9 instanceof Option.Some.class) {
                                  arg$Some$0$ = scrut9.value;
                                  if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                    arg$Ref$0$ = arg$Some$0$.kind;
                                    arg$Ref$1$ = arg$Some$0$.process;
                                    arg$Ref$2$ = arg$Some$0$.outerPrec;
                                    arg$Ref$3$ = arg$Some$0$.innerPrec;
                                    arg$Ref$4$ = arg$Some$0$.rest;
                                    rest1 = arg$Ref$4$;
                                    innerPrec1 = arg$Ref$3$;
                                    outerPrec1 = arg$Ref$2$;
                                    process1 = arg$Ref$1$;
                                    kind1 = arg$Ref$0$;
                                    tmp196 = "found reference to " + kind1;
                                    tmp197 = tmp196 + " with outerPrec = ";
                                    tmp198 = tmp197 + outerPrec1;
                                    Parser.tracer.print(tmp198, 210);
                                    outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                    innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                    scrut10 = outerPrec$_1 > prec;
                                    if (scrut10 === true) {
                                      tmp199 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                      scrut11 = parseKind(kind1, tmp199);
                                      if (scrut11 instanceof Tree.Empty.class) {
                                        break split_3$
                                      } else if (scrut11 instanceof Tree.Error.class) {
                                        break split_4$
                                      }
                                      rhs2 = scrut11;
                                      break split_5$;
                                    }
                                    tmp200 = "the outer precedence is less than " + prec;
                                    Parser.tracer.print(tmp200, 225);
                                    break split_2$;
                                  }
                                  break split_default$;
                                } else if (scrut9 instanceof Option.None.class) {} else {
                                  break split_default$
                                }
                              }
                            } else {
                              Parser.tracer.print("not a keyword", 207);
                              token1 = arg$Cons$0$1;
                              scrut9 = infix.rule.refChoice;
                              if (scrut9 instanceof Option.Some.class) {
                                arg$Some$0$ = scrut9.value;
                                if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                  arg$Ref$0$ = arg$Some$0$.kind;
                                  arg$Ref$1$ = arg$Some$0$.process;
                                  arg$Ref$2$ = arg$Some$0$.outerPrec;
                                  arg$Ref$3$ = arg$Some$0$.innerPrec;
                                  arg$Ref$4$ = arg$Some$0$.rest;
                                  rest1 = arg$Ref$4$;
                                  innerPrec1 = arg$Ref$3$;
                                  outerPrec1 = arg$Ref$2$;
                                  process1 = arg$Ref$1$;
                                  kind1 = arg$Ref$0$;
                                  tmp201 = "found reference to " + kind1;
                                  tmp202 = tmp201 + " with outerPrec = ";
                                  tmp203 = tmp202 + outerPrec1;
                                  Parser.tracer.print(tmp203, 210);
                                  outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                  innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                  scrut10 = outerPrec$_1 > prec;
                                  if (scrut10 === true) {
                                    tmp204 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                    scrut11 = parseKind(kind1, tmp204);
                                    if (scrut11 instanceof Tree.Empty.class) {
                                      break split_3$
                                    } else if (scrut11 instanceof Tree.Error.class) {
                                      break split_4$
                                    }
                                    rhs2 = scrut11;
                                    break split_5$;
                                  }
                                  tmp205 = "the outer precedence is less than " + prec;
                                  Parser.tracer.print(tmp205, 225);
                                  break split_2$;
                                }
                                break split_default$;
                              } else if (scrut9 instanceof Option.None.class) {} else {
                                break split_default$
                              }
                            }
                          } else {
                            Parser.tracer.print("not a keyword", 207);
                            token1 = arg$Cons$0$1;
                            scrut9 = infix.rule.refChoice;
                            if (scrut9 instanceof Option.Some.class) {
                              arg$Some$0$ = scrut9.value;
                              if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                                arg$Ref$0$ = arg$Some$0$.kind;
                                arg$Ref$1$ = arg$Some$0$.process;
                                arg$Ref$2$ = arg$Some$0$.outerPrec;
                                arg$Ref$3$ = arg$Some$0$.innerPrec;
                                arg$Ref$4$ = arg$Some$0$.rest;
                                rest1 = arg$Ref$4$;
                                innerPrec1 = arg$Ref$3$;
                                outerPrec1 = arg$Ref$2$;
                                process1 = arg$Ref$1$;
                                kind1 = arg$Ref$0$;
                                tmp206 = "found reference to " + kind1;
                                tmp207 = tmp206 + " with outerPrec = ";
                                tmp208 = tmp207 + outerPrec1;
                                Parser.tracer.print(tmp208, 210);
                                outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                                innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                scrut10 = outerPrec$_1 > prec;
                                if (scrut10 === true) {
                                  tmp209 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                  scrut11 = parseKind(kind1, tmp209);
                                  if (scrut11 instanceof Tree.Empty.class) {
                                    break split_3$
                                  } else if (scrut11 instanceof Tree.Error.class) {
                                    break split_4$
                                  }
                                  rhs2 = scrut11;
                                  break split_5$;
                                }
                                tmp210 = "the outer precedence is less than " + prec;
                                Parser.tracer.print(tmp210, 225);
                                break split_2$;
                              }
                              break split_default$;
                            } else if (scrut9 instanceof Option.None.class) {} else {
                              break split_default$
                            }
                          }
                        } else {
                          Parser.tracer.print("not a keyword", 207);
                          token1 = arg$Cons$0$1;
                          scrut9 = infix.rule.refChoice;
                          if (scrut9 instanceof Option.Some.class) {
                            arg$Some$0$ = scrut9.value;
                            if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                              arg$Ref$0$ = arg$Some$0$.kind;
                              arg$Ref$1$ = arg$Some$0$.process;
                              arg$Ref$2$ = arg$Some$0$.outerPrec;
                              arg$Ref$3$ = arg$Some$0$.innerPrec;
                              arg$Ref$4$ = arg$Some$0$.rest;
                              rest1 = arg$Ref$4$;
                              innerPrec1 = arg$Ref$3$;
                              outerPrec1 = arg$Ref$2$;
                              process1 = arg$Ref$1$;
                              kind1 = arg$Ref$0$;
                              tmp211 = "found reference to " + kind1;
                              tmp212 = tmp211 + " with outerPrec = ";
                              tmp213 = tmp212 + outerPrec1;
                              Parser.tracer.print(tmp213, 210);
                              outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                              innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                              scrut10 = outerPrec$_1 > prec;
                              if (scrut10 === true) {
                                tmp214 = Option.getOrElse(innerPrec1, outerPrec$_1);
                                scrut11 = parseKind(kind1, tmp214);
                                if (scrut11 instanceof Tree.Empty.class) {
                                  break split_3$
                                } else if (scrut11 instanceof Tree.Error.class) {
                                  break split_4$
                                }
                                rhs2 = scrut11;
                                break split_5$;
                              }
                              tmp215 = "the outer precedence is less than " + prec;
                              Parser.tracer.print(tmp215, 225);
                              break split_2$;
                            }
                            break split_default$;
                          } else if (scrut9 instanceof Option.None.class) {} else {
                            break split_default$
                          }
                        }
                      }
                    } else {
                      Parser.tracer.print("not a keyword", 207);
                      token1 = arg$Cons$0$1;
                      scrut9 = infix.rule.refChoice;
                      if (scrut9 instanceof Option.Some.class) {
                        arg$Some$0$ = scrut9.value;
                        if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                          arg$Ref$0$ = arg$Some$0$.kind;
                          arg$Ref$1$ = arg$Some$0$.process;
                          arg$Ref$2$ = arg$Some$0$.outerPrec;
                          arg$Ref$3$ = arg$Some$0$.innerPrec;
                          arg$Ref$4$ = arg$Some$0$.rest;
                          rest1 = arg$Ref$4$;
                          innerPrec1 = arg$Ref$3$;
                          outerPrec1 = arg$Ref$2$;
                          process1 = arg$Ref$1$;
                          kind1 = arg$Ref$0$;
                          tmp216 = "found reference to " + kind1;
                          tmp217 = tmp216 + " with outerPrec = ";
                          tmp218 = tmp217 + outerPrec1;
                          Parser.tracer.print(tmp218, 210);
                          outerPrec$_1 = Option.getOrElse(outerPrec1, Keywords.maxOperatorPrec);
                          innerPrec$_1 = Option.getOrElse(innerPrec1, outerPrec$_1);
                          scrut10 = outerPrec$_1 > prec;
                          if (scrut10 === true) {
                            tmp219 = Option.getOrElse(innerPrec1, outerPrec$_1);
                            scrut11 = parseKind(kind1, tmp219);
                            if (scrut11 instanceof Tree.Empty.class) {
                              break split_3$
                            } else if (scrut11 instanceof Tree.Error.class) {
                              break split_4$
                            }
                            rhs2 = scrut11;
                            break split_5$;
                          }
                          tmp220 = "the outer precedence is less than " + prec;
                          Parser.tracer.print(tmp220, 225);
                          break split_2$;
                        }
                        break split_default$;
                      } else if (scrut9 instanceof Option.None.class) {} else {
                        break split_default$
                      }
                    }
                    tmp221 = "cannot consume " + token1;
                    Parser.tracer.print(tmp221, 228);
                    return acc
                  }
                  Parser.tracer.print("not a keyword", 207);
                  if (tokens instanceof Stack.Nil.class) {
                    break split_2$
                  }
                  break split_default$;
                }
                tmp222 = Tree.summary(rhs2);
                tmp223 = "parsed " + tmp222;
                Parser.tracer.print(tmp223, 222);
                restRes1 = parseRule(innerPrec$_1, rest1);
                tmp224 = runtime.safeCall(process1(rhs2, restRes1));
                tmp225 = infix.process(acc, tmp224);
                return exprCont(tmp225, prec, options);
              }
              Parser.tracer.print("cannot parse more", 219);
              return acc;
            }
            Parser.tracer.print("nothing was parsed", 216);
            return acc;
          }
          return acc;
        }
        consume();
        op = Tree.Ident(name1, true);
        rhs1 = expr(rightPrec, Parser.#termOptions);
        tmp226 = Stack.Cons(rhs1, Stack.Nil);
        tmp227 = Stack.Cons(acc, tmp226);
        tmp228 = Tree.App(op, tmp227);
        return exprCont(tmp228, prec, options);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    };
    handleDirective = function handleDirective(tree1, acc) {
      let body, name, tree2, tree3, arg$Define$0$, arg$Define$1$, arg$Cons$0$1, arg$Cons$1$, element1$, element0$, arg$Ident$0$, tmp, tmp1;
      split_1$: {
        if (tree1 instanceof Tree.Define.class) {
          arg$Define$0$ = tree1.kind;
          arg$Define$1$ = tree1.items;
          if (arg$Define$0$ instanceof Tree.DefineKind.Directive.class) {
            if (arg$Define$1$ instanceof Stack.Cons.class) {
              arg$Cons$0$1 = arg$Define$1$.head;
              arg$Cons$1$ = arg$Define$1$.tail;
              if (runtime.Tuple.isArrayLike(arg$Cons$0$1) && arg$Cons$0$1.length === 2) {
                element0$ = runtime.Tuple.get(arg$Cons$0$1, 0);
                element1$ = runtime.Tuple.get(arg$Cons$0$1, 1);
                if (arg$Cons$1$ instanceof Stack.Nil.class) {
                  tree2 = tree1;
                  body = element1$;
                  name = element0$;
                  if (name instanceof Tree.Ident.class) {
                    arg$Ident$0$ = name.name;
                    switch (arg$Ident$0$) {
                      case "newKeyword":
                        Extension.extendKeyword(body);
                        return modCont(acc);
                      case "newCategory":
                        Extension.newCategory(body);
                        return modCont(acc);
                      case "extendCategory":
                        Extension.extendCategory(body);
                        return modCont(acc);
                    }
                    break split_1$
                  }
                  break split_1$;
                }
                tree3 = tree1;
              } else {
                tree3 = tree1;
              }
            } else {
              tree3 = tree1;
            }
          } else {
            tree3 = tree1;
          }
        } else {
          tree3 = tree1;
        }
        tmp = Stack.Cons(tree3, acc);
        return modCont(tmp);
      }
      tmp1 = Stack.Cons(tree2, acc);
      return modCont(tmp1)
    };
    mod = function mod(acc) {
      let name, scrut, scrut1, tree1, bindings, scrut2, rule, arg$Cons$0$1, arg$Identifier$0$, arg$Some$0$, tmp, tmp1, arg$LetIn$0$, arg$LetIn$1$, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
      Parser.tracer.print(">>>>>> mod <<<<<<", 249);
      if (tokens instanceof Stack.Cons.class) {
        arg$Cons$0$1 = tokens.head;
        if (arg$Cons$0$1 instanceof Token.Identifier.class) {
          arg$Identifier$0$ = arg$Cons$0$1.name;
          if (arg$Identifier$0$ === ";;") {
            consume();
            return mod
          }
          name = arg$Identifier$0$;
          tmp = MutMap.get(name);
          scrut = Predef.pipeInto(Keywords.all, tmp);
          if (scrut instanceof Option.Some.class) {
            tmp1 = MutMap.get(name);
            scrut1 = Predef.pipeInto(Rules.termRule.keywordChoices, tmp1);
            if (scrut1 instanceof Option.Some.class) {
              tree1 = expr(0, Parser.#termOptions);
              if (tree1 instanceof Tree.LetIn.class) {
                arg$LetIn$0$ = tree1.bindings;
                arg$LetIn$1$ = tree1.body;
                if (arg$LetIn$1$ instanceof Tree.Empty.class) {
                  bindings = arg$LetIn$0$;
                  tmp2 = Tree.DefineKind.Let(false);
                  tmp3 = Tree.Define(tmp2, bindings);
                  tmp4 = Stack.Cons(tmp3, acc);
                  return modCont(tmp4)
                }
              }
              tmp5 = Stack.Cons(tree1, acc);
              return modCont(tmp5)
            }
            tmp6 = MutMap.get(name);
            scrut2 = Predef.pipeInto(Rules.declRule.keywordChoices, tmp6);
            if (scrut2 instanceof Option.Some.class) {
              arg$Some$0$ = scrut2.value;
              rule = arg$Some$0$;
              consume();
              tmp7 = parseRule(0, rule);
              return handleDirective(tmp7, acc)
            }
          }
        }
        tmp8 = expr(0, Parser.#termOptions);
        tmp9 = Stack.Cons(tmp8, acc);
        return modCont(tmp9)
      } else if (tokens instanceof Stack.Nil.class) {
        return Stack.reverse(acc)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    modCont = function modCont(acc) {
      let arg$Cons$0$1, arg$Identifier$0$, tmp, tmp1, tmp2, tmp3, tmp4;
      tmp = TokenHelpers.preview(tokens);
      tmp1 = ">>>>>> modCont <<<<<< " + tmp;
      Parser.tracer.print(tmp1, 271);
      if (tokens instanceof Stack.Cons.class) {
        arg$Cons$0$1 = tokens.head;
        if (arg$Cons$0$1 instanceof Token.Identifier.class) {
          arg$Identifier$0$ = arg$Cons$0$1.name;
          if (arg$Identifier$0$ === ";;") {
            tmp2 = consume();
            tmp3 = mod(acc);
            return (tmp2 , tmp3)
          }
        }
        tmp4 = parseRule(0, Rules.declRule);
        return handleDirective(tmp4, acc)
      } else if (tokens instanceof Stack.Nil.class) {
        return Stack.reverse(acc)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    counter = 0;
    lambda = (undefined, function (result) {
      let tmp;
      tmp = Tree.summary(result);
      return "module >>> " + tmp
    });
    lambda1 = (undefined, function () {
      return mod(Stack.Nil)
    });
    tree = runtime.safeCall(Parser.tracer.trace("module <<< ", lambda, lambda1));
    if (tokens instanceof Stack.Cons.class) {
      arg$Cons$0$ = tokens.head;
      token = arg$Cons$0$;
      message = "expect EOF instead of " + token;
      Parser.tracer.print(message, 284);
      return Tree.Error(tree, message)
    } else if (tokens instanceof Stack.Nil.class) {
      return tree
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Parser"]; 
});
let Parser = Parser1; export default Parser;
