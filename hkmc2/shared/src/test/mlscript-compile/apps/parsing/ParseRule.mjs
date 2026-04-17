const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import MutMap from "./../../MutMap.mjs";
import Iter from "./../../Iter.mjs";
import Option from "./../../Option.mjs";
import Stack from "./../../Stack.mjs";
import Predef from "./../../Predef.mjs";
import Keywords from "./Keywords.mjs";
import Token from "./Token.mjs";
import Tree from "./Tree.mjs";
let ParseRule2;
(class ParseRule {
  static {
    ParseRule2 = this
  }
  static {
    (class Choice {
      static {
        ParseRule.Choice = this
      }
      static #ensureChoices;
      static #shouldHaveFunction;
      static #shouldHaveStr;
      static #shouldHaveInt;
      static #shouldHaveBool;
      static #shouldHaveRuleLike;
      static {
        let lambda, lambda1, lambda2, lambda3, lambda4, tmp, tmp1, tmp2, tmp3, ensureChoices;
        this.Keyword = function Keyword(keyword, rest) {
          return globalThis.Object.freeze(new Keyword.class(keyword, rest));
        };
        (class Keyword extends ParseRule.Choice {
          static {
            Choice.Keyword.class = this
          }
          constructor(keyword, rest) {
            super();
            this.keyword = keyword;
            this.rest = rest;
          }
          toString() { return runtime.render(this); }
          static [definitionMetadata] = ["class", "Keyword", ["keyword", "rest"]]; 
        });
        this.Ref = function Ref(kind, process, outerPrec, innerPrec, rest) {
          return globalThis.Object.freeze(new Ref.class(kind, process, outerPrec, innerPrec, rest));
        };
        (class Ref extends ParseRule.Choice {
          static {
            Choice.Ref.class = this
          }
          constructor(kind, process, outerPrec, innerPrec, rest) {
            super();
            this.kind = kind;
            this.process = process;
            this.outerPrec = outerPrec;
            this.innerPrec = innerPrec;
            this.rest = rest;
          }
          toString() { return runtime.render(this); }
          static [definitionMetadata] = ["class", "Ref", ["kind", "process", "outerPrec", "innerPrec", "rest"]]; 
        });
        this.End = function End(value) {
          return globalThis.Object.freeze(new End.class(value));
        };
        (class End extends ParseRule.Choice {
          static {
            Choice.End.class = this
          }
          constructor(value) {
            super();
            this.value = value;
          }
          toString() { return runtime.render(this); }
          static [definitionMetadata] = ["class", "End", ["value"]]; 
        });
        this.Siding = function Siding(init, optional, rest, process) {
          return globalThis.Object.freeze(new Siding.class(init, optional, rest, process));
        };
        (class Siding extends ParseRule.Choice {
          static {
            Choice.Siding.class = this
          }
          constructor(init, optional, rest, process) {
            super();
            this.init = init;
            this.optional = optional;
            this.rest = rest;
            this.process = process;
          }
          toString() { return runtime.render(this); }
          static [definitionMetadata] = ["class", "Siding", ["init", "optional", "rest", "process"]]; 
        });
        ensureChoices = function ensureChoices(xs, name) {
          let tmp4, lambda5;
          tmp4 = Iter.zippingWithIndex(xs);
          lambda5 = (undefined, function (caseScrut) {
            let index, item, element1$, element0$, tmp5, tmp6, tmp7, tmp8;
            if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
              element0$ = runtime.Tuple.get(caseScrut, 0);
              element1$ = runtime.Tuple.get(caseScrut, 1);
              index = element1$;
              item = element0$;
              if (item instanceof ParseRule.Choice) {
                tmp5 = true;
              } else {
                tmp5 = false;
              }
              tmp6 = name + ": element [";
              tmp7 = tmp6 + index;
              tmp8 = tmp7 + "] is not Choice";
              return Predef.check(tmp5, tmp8)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          });
          return Iter.each(tmp4, lambda5)
        };
        Choice.#ensureChoices = ensureChoices;
        lambda = (undefined, function (options, key, defaultValue, callerName) {
          let func, scrut, tmp4, tmp5, tmp6, tmp7;
          func = options[key];
          tmp4 = typeof func;
          scrut = tmp4 === "function";
          if (scrut === true) {
            return func
          }
          if (func === undefined) {
            return defaultValue
          }
          tmp5 = callerName + ": `";
          tmp6 = tmp5 + key;
          tmp7 = tmp6 + "` is not a string";
          throw runtime.safeCall(globalThis.TypeError(tmp7));
        });
        Choice.#shouldHaveFunction = lambda;
        lambda1 = (undefined, function (options, key, defaultValue, callerName) {
          let value, tmp4, tmp5, tmp6;
          value = options[key];
          if (typeof value === 'string') {
            return value
          } else if (value === undefined) {
            return defaultValue
          }
          tmp4 = callerName + ": `";
          tmp5 = tmp4 + key;
          tmp6 = tmp5 + "` is not a string";
          throw runtime.safeCall(globalThis.TypeError(tmp6));
        });
        Choice.#shouldHaveStr = lambda1;
        lambda2 = (undefined, function (options, key, callerName) {
          let value, tmp4, tmp5, tmp6;
          value = options[key];
          if (globalThis.Number.isInteger(value)) {
            return Option.Some(value)
          } else if (value === undefined) {
            return Option.None
          }
          tmp4 = callerName + ": `";
          tmp5 = tmp4 + key;
          tmp6 = tmp5 + "` is not an Int";
          throw runtime.safeCall(globalThis.TypeError(tmp6));
        });
        Choice.#shouldHaveInt = lambda2;
        lambda3 = (undefined, function (options, key, defaultValue, callerName) {
          let value, tmp4, tmp5, tmp6;
          value = options[key];
          if (typeof value === 'boolean') {
            return value
          } else if (value === undefined) {
            return defaultValue
          }
          tmp4 = callerName + ": `";
          tmp5 = tmp4 + key;
          tmp6 = tmp5 + "` is not a Boolean";
          throw runtime.safeCall(globalThis.TypeError(tmp6));
        });
        Choice.#shouldHaveBool = lambda3;
        lambda4 = (undefined, function (options, key, ruleName, callerName) {
          let choices, tmp4, tmp5, tmp6;
          choices = options[key];
          if (choices instanceof ParseRule.ParseRule.class) {
            return choices
          } else if (choices instanceof ParseRule.Choice) {
            return ParseRule.rule(ruleName, choices)
          } else if (runtime.Tuple.isArrayLike(choices) && choices.length >= 0) {
            runtime.Tuple.slice(choices, 0, 0);
            runtime.safeCall(Choice.#ensureChoices(choices, "Choice.reference"));
            return ParseRule.rule(ruleName, ...choices)
          } else if (choices === undefined) {
            return ParseRule.rule(ruleName)
          }
          tmp4 = callerName + ": `";
          tmp5 = tmp4 + key;
          tmp6 = tmp5 + "` is neither a rule nor a choice";
          throw runtime.safeCall(globalThis.TypeError(tmp6));
        });
        Choice.#shouldHaveRuleLike = lambda4;
        tmp = Choice.reference("term");
        this.term = tmp;
        tmp1 = Choice.reference("type");
        this.typeExpr = tmp1;
        tmp2 = Choice.reference("ident");
        this.ident = tmp2;
        tmp3 = Choice.reference("typevar");
        this.typeVar = tmp3;
      }
      static keyword(keyword) {
        return (...choices) => {
          let tmp, tmp1, tmp2;
          runtime.safeCall(Choice.#ensureChoices(choices, "Choice.keyword"));
          tmp = "`" + keyword.name;
          tmp1 = tmp + "` keyword";
          tmp2 = ParseRule.rule(tmp1, ...choices);
          return Choice.Keyword(keyword, tmp2)
        }
      } 
      static reference(kind) {
        return (fields) => {
          let ruleName, tmp, tmp1, tmp2, tmp3;
          ruleName = runtime.safeCall(Choice.#shouldHaveStr(fields, "name", "unnamed", "Choice.reference"));
          tmp = runtime.safeCall(Choice.#shouldHaveFunction(fields, "process", Predef.tuple, "Choice.reference"));
          tmp1 = runtime.safeCall(Choice.#shouldHaveInt(fields, "outerPrec", "Choice.reference"));
          tmp2 = runtime.safeCall(Choice.#shouldHaveInt(fields, "innerPrec", "Choice.reference"));
          tmp3 = runtime.safeCall(Choice.#shouldHaveRuleLike(fields, "choices", ruleName, "Choice.reference"));
          return Choice.Ref(kind, tmp, tmp1, tmp2, tmp3)
        }
      } 
      static optional(init, rest) {
        let tmp, tmp1;
        if (init instanceof ParseRule.ParseRule.class) {
          tmp = true;
        } else {
          tmp = false;
        }
        Predef.check(tmp, "Choice.optional: init is not ParseRule");
        if (rest instanceof ParseRule.ParseRule.class) {
          tmp1 = true;
        } else {
          tmp1 = false;
        }
        Predef.check(tmp1, "Choice.optional: rest is not ParseRule");
        return Choice.Siding(init, true, rest, Predef.tuple)
      } 
      static siding(fields) {
        let optional, initName, restName, init, rest, defaultProcess, process, tmp, lambda;
        optional = runtime.safeCall(Choice.#shouldHaveBool(fields, "optional", false, "Choice.siding"));
        initName = runtime.safeCall(Choice.#shouldHaveStr(fields, "initName", "unnamed", "Choice.siding"));
        restName = runtime.safeCall(Choice.#shouldHaveStr(fields, "restName", "unnamed", "Choice.siding"));
        init = runtime.safeCall(Choice.#shouldHaveRuleLike(fields, "init", initName, "Choice.siding"));
        rest = runtime.safeCall(Choice.#shouldHaveRuleLike(fields, "rest", restName, "Choice.siding"));
        if (optional === true) {
          tmp = Predef.tuple;
        } else {
          lambda = (undefined, function (initRes, restRes) {
            let initRes1, arg$Some$0$;
            if (initRes instanceof Option.Some.class) {
              arg$Some$0$ = initRes.value;
              initRes1 = arg$Some$0$;
              return globalThis.Object.freeze([
                initRes1,
                restRes
              ])
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          });
          tmp = lambda;
        }
        defaultProcess = tmp;
        process = runtime.safeCall(Choice.#shouldHaveFunction(fields, "process", defaultProcess, "Choice.siding"));
        return Choice.Siding(init, optional, rest, process)
      } 
      static end(value) {
        return Choice.End(value)
      } 
      static map(choice, op) {
        let rest, keyword, outerPrec, innerPrec, kind, process, rest1, optional, init, process1, rest2, value, arg$End$0$, arg$Siding$0$, arg$Siding$1$, arg$Siding$2$, arg$Siding$3$, arg$Ref$0$, arg$Ref$1$, arg$Ref$2$, arg$Ref$3$, arg$Ref$4$, arg$Keyword$0$, arg$Keyword$1$, tmp, lambda, lambda1, tmp1;
        if (choice instanceof Choice.Keyword.class) {
          arg$Keyword$0$ = choice.keyword;
          arg$Keyword$1$ = choice.rest;
          rest = arg$Keyword$1$;
          keyword = arg$Keyword$0$;
          tmp = runtime.safeCall(rest.map(op));
          return Choice.Keyword(keyword, tmp)
        } else if (choice instanceof Choice.Ref.class) {
          arg$Ref$0$ = choice.kind;
          arg$Ref$1$ = choice.process;
          arg$Ref$2$ = choice.outerPrec;
          arg$Ref$3$ = choice.innerPrec;
          arg$Ref$4$ = choice.rest;
          rest1 = arg$Ref$4$;
          innerPrec = arg$Ref$3$;
          outerPrec = arg$Ref$2$;
          process = arg$Ref$1$;
          kind = arg$Ref$0$;
          lambda = (undefined, function (x, y) {
            let tmp2;
            tmp2 = runtime.safeCall(process(x, y));
            return runtime.safeCall(op(tmp2))
          });
          return Choice.Ref(kind, lambda, outerPrec, innerPrec, rest1)
        } else if (choice instanceof Choice.Siding.class) {
          arg$Siding$0$ = choice.init;
          arg$Siding$1$ = choice.optional;
          arg$Siding$2$ = choice.rest;
          arg$Siding$3$ = choice.process;
          process1 = arg$Siding$3$;
          rest2 = arg$Siding$2$;
          optional = arg$Siding$1$;
          init = arg$Siding$0$;
          lambda1 = (undefined, function (x, y) {
            let tmp2;
            tmp2 = runtime.safeCall(process1(x, y));
            return runtime.safeCall(op(tmp2))
          });
          return Choice.Siding(init, optional, rest2, lambda1)
        } else if (choice instanceof Choice.End.class) {
          arg$End$0$ = choice.value;
          value = arg$End$0$;
          tmp1 = runtime.safeCall(op(value));
          return Choice.End(tmp1)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Choice"]; 
    });
    this.Lazy = function Lazy(init) {
      return globalThis.Object.freeze(new Lazy.class(init));
    };
    (class Lazy {
      static {
        ParseRule.Lazy.class = this
      }
      constructor(init) {
        this.init = init;
        this.cached = Option.None;
      }
      #cached;
      get cached() { return this.#cached; }
      set cached(value) { this.#cached = value; }
      reset() {
        this.cached = Option.None;
        return runtime.Unit
      } 
      get() {
        let scrut, v, v1, arg$Some$0$, tmp;
        scrut = this.cached;
        if (scrut instanceof Option.Some.class) {
          arg$Some$0$ = scrut.value;
          v = arg$Some$0$;
          return v
        }
        v1 = runtime.safeCall(this.init());
        tmp = Option.Some(v1);
        this.cached = tmp;
        return v1;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Lazy", ["init"]]; 
    });
    this.ParseRule = function ParseRule(name, choices) {
      return globalThis.Object.freeze(new ParseRule.class(name, choices));
    };
    (class ParseRule1 {
      static {
        ParseRule.ParseRule.class = this
      }
      constructor(name, choices) {
        let lambda, lambda1, lambda2;
        this.name = name;
        this.choices = choices;
        const this$ParseRule = this;
        lambda = (undefined, function () {
          let tmp, lambda3;
          tmp = Iter.fromStack(this$ParseRule.choices);
          lambda3 = (undefined, function (caseScrut) {
            let value, optional, init, process, rest, restRes, scrut, scrut1, initRes, scrut2, restRes1, arg$Siding$0$, arg$Siding$1$, arg$Siding$2$, arg$Siding$3$, arg$Some$0$, arg$Some$0$1, arg$Some$0$2, arg$End$0$, tmp1;
            if (caseScrut instanceof ParseRule.Choice.End.class) {
              arg$End$0$ = caseScrut.value;
              value = arg$End$0$;
              return Option.Some(value)
            } else if (caseScrut instanceof ParseRule.Choice.Siding.class) {
              arg$Siding$0$ = caseScrut.init;
              arg$Siding$1$ = caseScrut.optional;
              arg$Siding$2$ = caseScrut.rest;
              arg$Siding$3$ = caseScrut.process;
              process = arg$Siding$3$;
              rest = arg$Siding$2$;
              optional = arg$Siding$1$;
              init = arg$Siding$0$;
              if (optional === true) {
                scrut = rest.endChoice;
                if (scrut instanceof Option.Some.class) {
                  arg$Some$0$2 = scrut.value;
                  restRes = arg$Some$0$2;
                  return runtime.safeCall(process(Option.None, restRes))
                }
                scrut1 = init.endChoice;
                if (scrut1 instanceof Option.Some.class) {
                  arg$Some$0$ = scrut1.value;
                  initRes = arg$Some$0$;
                  scrut2 = rest.endChoice;
                  if (scrut2 instanceof Option.Some.class) {
                    arg$Some$0$1 = scrut2.value;
                    restRes1 = arg$Some$0$1;
                  } else {
                    return Option.None
                  }
                } else {
                  return Option.None
                }
              } else {
                scrut1 = init.endChoice;
                if (scrut1 instanceof Option.Some.class) {
                  arg$Some$0$ = scrut1.value;
                  initRes = arg$Some$0$;
                  scrut2 = rest.endChoice;
                  if (scrut2 instanceof Option.Some.class) {
                    arg$Some$0$1 = scrut2.value;
                    restRes1 = arg$Some$0$1;
                  } else {
                    return Option.None
                  }
                } else {
                  return Option.None
                }
              }
              tmp1 = Option.Some(initRes);
              return runtime.safeCall(process(tmp1, restRes1))
            }
            return Option.None;
          });
          return Iter.firstDefined(tmp, lambda3)
        });
        this.#_endChoice = ParseRule.lazy(lambda);
        lambda1 = (undefined, function () {
          let tmp, lambda3, tmp1, tmp2, tmp3;
          tmp = Iter.fromStack(this$ParseRule.choices);
          lambda3 = (undefined, function (caseScrut) {
            let rest, keyword, optional, init, process, rest1, arg$Siding$0$, arg$Siding$1$, arg$Siding$2$, arg$Siding$3$, arg$Keyword$0$, arg$Keyword$1$, tmp4, lambda4, tmp5, lambda5, tmp6, tmp7;
            if (caseScrut instanceof ParseRule.Choice.Keyword.class) {
              arg$Keyword$0$ = caseScrut.keyword;
              arg$Keyword$1$ = caseScrut.rest;
              rest = arg$Keyword$1$;
              keyword = arg$Keyword$0$;
              tmp4 = globalThis.Object.freeze([
                keyword.name,
                rest
              ]);
              return globalThis.Object.freeze([
                tmp4
              ])
            } else if (caseScrut instanceof ParseRule.Choice.Siding.class) {
              arg$Siding$0$ = caseScrut.init;
              arg$Siding$1$ = caseScrut.optional;
              arg$Siding$2$ = caseScrut.rest;
              arg$Siding$3$ = caseScrut.process;
              process = arg$Siding$3$;
              rest1 = arg$Siding$2$;
              optional = arg$Siding$1$;
              init = arg$Siding$0$;
              lambda4 = (undefined, function (caseScrut1) {
                let rule, keyword1, element1$, element0$, tmp8, tmp9;
                if (runtime.Tuple.isArrayLike(caseScrut1) && caseScrut1.length === 2) {
                  element0$ = runtime.Tuple.get(caseScrut1, 0);
                  element1$ = runtime.Tuple.get(caseScrut1, 1);
                  rule = element1$;
                  keyword1 = element0$;
                  tmp8 = runtime.safeCall(rule.map(Option.Some));
                  tmp9 = tmp8.andThen(rest1, process);
                  return globalThis.Object.freeze([
                    keyword1,
                    tmp9
                  ])
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              });
              tmp5 = Iter.mapping(init.keywordChoices, lambda4);
              if (optional === true) {
                lambda5 = (undefined, function (caseScrut1) {
                  let rule, keyword1, element1$, element0$, lambda6, tmp8;
                  if (runtime.Tuple.isArrayLike(caseScrut1) && caseScrut1.length === 2) {
                    element0$ = runtime.Tuple.get(caseScrut1, 0);
                    element1$ = runtime.Tuple.get(caseScrut1, 1);
                    rule = element1$;
                    keyword1 = element0$;
                    lambda6 = (undefined, function (res) {
                      return runtime.safeCall(process(Option.None, res))
                    });
                    tmp8 = runtime.safeCall(rule.map(lambda6));
                    return globalThis.Object.freeze([
                      keyword1,
                      tmp8
                    ])
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                });
                tmp6 = Iter.mapping(rest1.keywordChoices, lambda5);
              } else {
                tmp6 = globalThis.Object.freeze([]);
              }
              tmp7 = Iter.appended(tmp5, tmp6);
              return Iter.toArray(tmp7)
            }
            return globalThis.Object.freeze([]);
          });
          tmp1 = Iter.mapping(tmp, lambda3);
          tmp2 = Iter.flattening(tmp1);
          tmp3 = Iter.toArray(tmp2);
          return MutMap.toMap(tmp3)
        });
        this.#_keywordChoices = ParseRule.lazy(lambda1);
        lambda2 = (undefined, function () {
          let tmp, lambda3;
          tmp = Iter.fromStack(this$ParseRule.choices);
          lambda3 = (undefined, function (caseScrut) {
            let ref, optional, init, process, rest, scrut, ip, rest$_, process$_, k, op, process$_$_, rest$_$_, ip1, rest$_1, process$_1, k1, op1, process$_$_1, scrut1, arg$Siding$0$, arg$Siding$1$, arg$Siding$2$, arg$Siding$3$, arg$Some$0$, arg$Ref$0$, arg$Ref$1$, arg$Ref$2$, arg$Ref$3$, arg$Ref$4$, arg$Some$0$1, arg$Ref$0$1, arg$Ref$1$1, arg$Ref$2$1, arg$Ref$3$1, arg$Ref$4$1, lambda4, tmp1, tmp2, process$_$_2;
            if (caseScrut instanceof ParseRule.Choice.Ref.class) {
              ref = caseScrut;
              return Option.Some(ref)
            } else if (caseScrut instanceof ParseRule.Choice.Siding.class) {
              arg$Siding$0$ = caseScrut.init;
              arg$Siding$1$ = caseScrut.optional;
              arg$Siding$2$ = caseScrut.rest;
              arg$Siding$3$ = caseScrut.process;
              process = arg$Siding$3$;
              rest = arg$Siding$2$;
              optional = arg$Siding$1$;
              init = arg$Siding$0$;
              scrut = init.refChoice;
              if (scrut instanceof Option.Some.class) {
                arg$Some$0$1 = scrut.value;
                if (arg$Some$0$1 instanceof ParseRule.Choice.Ref.class) {
                  arg$Ref$0$1 = arg$Some$0$1.kind;
                  arg$Ref$1$1 = arg$Some$0$1.process;
                  arg$Ref$2$1 = arg$Some$0$1.outerPrec;
                  arg$Ref$3$1 = arg$Some$0$1.innerPrec;
                  arg$Ref$4$1 = arg$Some$0$1.rest;
                  rest$_ = arg$Ref$4$1;
                  ip = arg$Ref$3$1;
                  op = arg$Ref$2$1;
                  process$_ = arg$Ref$1$1;
                  k = arg$Ref$0$1;
                  lambda4 = (undefined, function (exprRes, pairRes) {
                    let restRes$_, restRes, element1$, element0$, tmp3;
                    if (runtime.Tuple.isArrayLike(pairRes) && pairRes.length === 2) {
                      element0$ = runtime.Tuple.get(pairRes, 0);
                      element1$ = runtime.Tuple.get(pairRes, 1);
                      restRes = element1$;
                      restRes$_ = element0$;
                      tmp3 = runtime.safeCall(process$_(exprRes, restRes$_));
                      return runtime.safeCall(process(tmp3, restRes))
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  });
                  process$_$_ = lambda4;
                  rest$_$_ = rest$_.andThen(rest, Predef.tuple);
                  tmp1 = ParseRule.Choice.Ref(k, process$_$_, op, ip, rest$_$_);
                  return Option.Some(tmp1)
                }
                if (optional === true) {
                  scrut1 = rest.refChoice;
                  if (scrut1 instanceof Option.Some.class) {
                    arg$Some$0$ = scrut1.value;
                    if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                      arg$Ref$0$ = arg$Some$0$.kind;
                      arg$Ref$1$ = arg$Some$0$.process;
                      arg$Ref$2$ = arg$Some$0$.outerPrec;
                      arg$Ref$3$ = arg$Some$0$.innerPrec;
                      arg$Ref$4$ = arg$Some$0$.rest;
                      rest$_1 = arg$Ref$4$;
                      ip1 = arg$Ref$3$;
                      op1 = arg$Ref$2$;
                      process$_1 = arg$Ref$1$;
                      k1 = arg$Ref$0$;
                    } else {
                      return Option.None
                    }
                  } else {
                    return Option.None
                  }
                } else {
                  return Option.None
                }
              } else {
                if (optional === true) {
                  scrut1 = rest.refChoice;
                  if (scrut1 instanceof Option.Some.class) {
                    arg$Some$0$ = scrut1.value;
                    if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                      arg$Ref$0$ = arg$Some$0$.kind;
                      arg$Ref$1$ = arg$Some$0$.process;
                      arg$Ref$2$ = arg$Some$0$.outerPrec;
                      arg$Ref$3$ = arg$Some$0$.innerPrec;
                      arg$Ref$4$ = arg$Some$0$.rest;
                      rest$_1 = arg$Ref$4$;
                      ip1 = arg$Ref$3$;
                      op1 = arg$Ref$2$;
                      process$_1 = arg$Ref$1$;
                      k1 = arg$Ref$0$;
                    } else {
                      return Option.None
                    }
                  } else {
                    return Option.None
                  }
                } else {
                  return Option.None
                }
              }
              process$_$_2 = (undefined, function (exprRes, restRes) {
                let tmp3;
                tmp3 = runtime.safeCall(process$_1(exprRes, restRes));
                return runtime.safeCall(process(Option.None, tmp3))
              });
              process$_$_1 = process$_$_2;
              tmp2 = ParseRule.Choice.Ref(k1, process$_$_1, op1, ip1, rest$_1);
              return Option.Some(tmp2)
            }
            return Option.None;
          });
          return Iter.firstDefined(tmp, lambda3)
        });
        this.#_refChoice = ParseRule.lazy(lambda2);
      }
      #_endChoice;
      #_keywordChoices;
      #_refChoice;
      #choices;
      get choices() { return this.#choices; }
      set choices(value) { this.#choices = value; }
      map(op) {
        let tmp, lambda, tmp1, tmp2;
        tmp = Iter.fromStack(this.choices);
        const this$ParseRule = this;
        lambda = (undefined, function (choice) {
          return ParseRule.Choice.map(choice, op)
        });
        tmp1 = Iter.mapping(tmp, lambda);
        tmp2 = Iter.toStack(tmp1);
        return new ParseRule.ParseRule.class(this.name, tmp2)
      } 
      andThen(rest, process) {
        let go, tmp, lambda;
        const this$ParseRule = this;
        go = function go(rule) {
          let tmp1, lambda1, tmp2, tmp3, tmp4;
          tmp1 = Iter.fromStack(rule.choices);
          lambda1 = (undefined, function (caseScrut) {
            let rest$_, keyword, outerPrec, innerPrec, kind, process1, rest$_1, process$_, value, process2, rest$_2, rule1, optional, process$_1, arg$Siding$0$, arg$Siding$1$, arg$Siding$2$, arg$Siding$3$, arg$End$0$, arg$Ref$0$, arg$Ref$1$, arg$Ref$2$, arg$Ref$3$, arg$Ref$4$, arg$Keyword$0$, arg$Keyword$1$, tmp5, tmp6, lambda2, tmp7, tmp8, tmp9, lambda3, lambda4, tmp10, tmp11;
            if (caseScrut instanceof ParseRule.Choice.Keyword.class) {
              arg$Keyword$0$ = caseScrut.keyword;
              arg$Keyword$1$ = caseScrut.rest;
              rest$_ = arg$Keyword$1$;
              keyword = arg$Keyword$0$;
              tmp5 = go(rest$_);
              tmp6 = ParseRule.Choice.Keyword(keyword, tmp5);
              return globalThis.Object.freeze([
                tmp6
              ])
            } else if (caseScrut instanceof ParseRule.Choice.Ref.class) {
              arg$Ref$0$ = caseScrut.kind;
              arg$Ref$1$ = caseScrut.process;
              arg$Ref$2$ = caseScrut.outerPrec;
              arg$Ref$3$ = caseScrut.innerPrec;
              arg$Ref$4$ = caseScrut.rest;
              rest$_1 = arg$Ref$4$;
              innerPrec = arg$Ref$3$;
              outerPrec = arg$Ref$2$;
              process1 = arg$Ref$1$;
              kind = arg$Ref$0$;
              lambda2 = (undefined, function (lhs, rhsInnerResult) {
                let rhs, innerResult, element1$, element0$, tmp12;
                if (runtime.Tuple.isArrayLike(rhsInnerResult) && rhsInnerResult.length === 2) {
                  element0$ = runtime.Tuple.get(rhsInnerResult, 0);
                  element1$ = runtime.Tuple.get(rhsInnerResult, 1);
                  innerResult = element1$;
                  rhs = element0$;
                  tmp12 = runtime.safeCall(process1(lhs, rhs));
                  return globalThis.Object.freeze([
                    tmp12,
                    innerResult
                  ])
                }
                Predef.check(false, "illgeal result from inner");
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              });
              process$_ = lambda2;
              tmp7 = go(rest$_1);
              tmp8 = ParseRule.Choice.Ref(kind, process$_, outerPrec, innerPrec, tmp7);
              return globalThis.Object.freeze([
                tmp8
              ])
            } else if (caseScrut instanceof ParseRule.Choice.End.class) {
              arg$End$0$ = caseScrut.value;
              value = arg$End$0$;
              tmp9 = Iter.fromStack(rest.choices);
              lambda3 = (undefined, function (choice) {
                let lambda5;
                lambda5 = (undefined, function (result) {
                  return globalThis.Object.freeze([
                    value,
                    result
                  ])
                });
                return ParseRule.Choice.map(choice, lambda5)
              });
              return Iter.mapping(tmp9, lambda3)
            } else if (caseScrut instanceof ParseRule.Choice.Siding.class) {
              arg$Siding$0$ = caseScrut.init;
              arg$Siding$1$ = caseScrut.optional;
              arg$Siding$2$ = caseScrut.rest;
              arg$Siding$3$ = caseScrut.process;
              process2 = arg$Siding$3$;
              rest$_2 = arg$Siding$2$;
              optional = arg$Siding$1$;
              rule1 = arg$Siding$0$;
              lambda4 = (undefined, function (initRes, restRes) {
                let innerRes, restRes$_, element1$, element0$, tmp12;
                if (runtime.Tuple.isArrayLike(restRes) && restRes.length === 2) {
                  element0$ = runtime.Tuple.get(restRes, 0);
                  element1$ = runtime.Tuple.get(restRes, 1);
                  innerRes = element1$;
                  restRes$_ = element0$;
                  tmp12 = runtime.safeCall(process2(initRes, restRes$_));
                  return globalThis.Object.freeze([
                    tmp12,
                    innerRes
                  ])
                }
                Predef.check(false, "illegal result from inner");
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              });
              process$_1 = lambda4;
              tmp10 = go(rest$_2);
              tmp11 = ParseRule.Choice.Siding(rule1, optional, tmp10, process$_1);
              return globalThis.Object.freeze([
                tmp11
              ])
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          });
          tmp2 = Iter.mapping(tmp1, lambda1);
          tmp3 = Iter.flattening(tmp2);
          tmp4 = Iter.toStack(tmp3);
          return globalThis.Object.freeze(new ParseRule.ParseRule.class(rule.name, tmp4))
        };
        tmp = go(this);
        lambda = (undefined, function (res) {
          return runtime.safeCall(process(res[0], res[1]))
        });
        return runtime.safeCall(tmp.map(lambda))
      } 
      get endChoice() {
        return runtime.safeCall(this.#_endChoice.get());
      } 
      get keywordChoices() {
        return runtime.safeCall(this.#_keywordChoices.get());
      } 
      get refChoice() {
        return runtime.safeCall(this.#_refChoice.get());
      } 
      extendChoices(newChoices) {
        let tmp;
        tmp = Stack.concat(this.choices, newChoices);
        this.choices = tmp;
        runtime.safeCall(this.#_endChoice.reset());
        runtime.safeCall(this.#_keywordChoices.reset());
        runtime.safeCall(this.#_refChoice.reset());
        return this
      } 
      get display() {
        let tail, go, displayChoice, scrut, name1, line, element1$, element0$, tmp, tmp1;
        const this$ParseRule = this;
        displayChoice = function displayChoice(choice) {
          let rest, keyword, rest1, kind, opt, rest2, init, init$_, other, arg$Siding$0$, arg$Siding$1$, arg$Siding$2$, arg$Ref$0$, arg$Ref$4$, arg$Keyword$0$, arg$Keyword$1$, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
          if (choice instanceof ParseRule.Choice.Keyword.class) {
            arg$Keyword$0$ = choice.keyword;
            arg$Keyword$1$ = choice.rest;
            rest = arg$Keyword$1$;
            keyword = arg$Keyword$0$;
            tmp2 = "\"" + keyword.name;
            tmp3 = tmp2 + "\"";
            tmp4 = tail(rest);
            return tmp3 + tmp4[1]
          } else if (choice instanceof ParseRule.Choice.Ref.class) {
            arg$Ref$0$ = choice.kind;
            arg$Ref$4$ = choice.rest;
            rest1 = arg$Ref$4$;
            kind = arg$Ref$0$;
            tmp5 = "<" + kind;
            tmp6 = tmp5 + ">";
            tmp7 = tail(rest1);
            return tmp6 + tmp7[1]
          } else if (choice instanceof ParseRule.Choice.Siding.class) {
            arg$Siding$0$ = choice.init;
            arg$Siding$1$ = choice.optional;
            arg$Siding$2$ = choice.rest;
            rest2 = arg$Siding$2$;
            opt = arg$Siding$1$;
            init = arg$Siding$0$;
            tmp8 = go(init, false);
            init$_ = tmp8[1];
            if (opt === true) {
              tmp9 = "[" + init$_;
              tmp10 = tmp9 + "]";
            } else {
              tmp11 = "(" + init$_;
              tmp10 = tmp11 + ")";
            }
            tmp12 = tail(rest2);
            return tmp10 + tmp12[1]
          } else if (choice instanceof ParseRule.Choice.End.class) {
            return ""
          }
          other = choice;
          tmp13 = "<unknown:" + other;
          return tmp13 + ">";
        };
        tail = function tail(rest) {
          let choices1, scrut1, name2, line1, scrut2, element1$1, element0$1, arg$Cons$0$, arg$Cons$1$, tmp2, lambda, tmp3, lambda1, tmp4, tmp5, tmp6, tmp7, tmp8;
          split_default$: {
            split_1$: {
              split_2$: {
                if (rest instanceof ParseRule.ParseRule.class) {
                  choices1 = rest.choices;
                  if (choices1 instanceof Stack.Cons.class) {
                    arg$Cons$0$ = choices1.head;
                    arg$Cons$1$ = choices1.tail;
                    if (arg$Cons$0$ instanceof ParseRule.Choice.End.class) {
                      if (arg$Cons$1$ instanceof Stack.Nil.class) {
                        return globalThis.Object.freeze([
                          "",
                          ""
                        ])
                      }
                      scrut1 = go(rest, false);
                      if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
                        element0$1 = runtime.Tuple.get(scrut1, 0);
                        element1$1 = runtime.Tuple.get(scrut1, 1);
                        line1 = element1$1;
                        name2 = element0$1;
                        if (arg$Cons$1$ instanceof Stack.Cons.class) {
                          tmp2 = Iter.fromStack(choices1);
                          lambda = (undefined, function (c) {
                            if (c instanceof ParseRule.Choice.End.class) {
                              return true
                            }
                            return false;
                          });
                          scrut2 = Iter.some(tmp2, lambda);
                          if (scrut2 === true) {
                            break split_1$
                          }
                          break split_2$;
                        }
                      } else {
                        break split_default$
                      }
                    } else {
                      scrut1 = go(rest, false);
                      if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
                        element0$1 = runtime.Tuple.get(scrut1, 0);
                        element1$1 = runtime.Tuple.get(scrut1, 1);
                        line1 = element1$1;
                        name2 = element0$1;
                        if (arg$Cons$1$ instanceof Stack.Cons.class) {
                          tmp3 = Iter.fromStack(choices1);
                          lambda1 = (undefined, function (c) {
                            if (c instanceof ParseRule.Choice.End.class) {
                              return true
                            }
                            return false;
                          });
                          scrut2 = Iter.some(tmp3, lambda1);
                          if (scrut2 === true) {
                            break split_1$
                          }
                          break split_2$;
                        }
                      } else {
                        break split_default$
                      }
                    }
                  } else {
                    scrut1 = go(rest, false);
                    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
                      element0$1 = runtime.Tuple.get(scrut1, 0);
                      element1$1 = runtime.Tuple.get(scrut1, 1);
                      line1 = element1$1;
                      name2 = element0$1;
                    } else {
                      break split_default$
                    }
                  }
                  tmp4 = " " + line1;
                  return globalThis.Object.freeze([
                    name2,
                    tmp4
                  ])
                }
                break split_default$;
              }
              tmp5 = " (" + line1;
              tmp6 = tmp5 + ")";
              return globalThis.Object.freeze([
                name2,
                tmp6
              ]);
            }
            tmp7 = " [" + line1;
            tmp8 = tmp7 + "]";
            return globalThis.Object.freeze([
              name2,
              tmp8
            ]);
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        };
        go = function go(rule, top) {
          let lines, line1, tmp2, lambda, tmp3, tmp4, element0$1, tmp5, tmp6;
          tmp2 = Iter.fromStack(rule.choices);
          lambda = (undefined, function (caseScrut) {
            if (caseScrut instanceof ParseRule.Choice.End.class) {
              return false
            }
            return true;
          });
          tmp3 = Iter.filtering(tmp2, lambda);
          tmp4 = Iter.mapping(tmp3, displayChoice);
          lines = Iter.toArray(tmp4);
          if (runtime.Tuple.isArrayLike(lines) && lines.length === 0) {
            tmp5 = "\u03B5";
            return Predef.tuple(rule.name, tmp5)
          } else if (runtime.Tuple.isArrayLike(lines) && lines.length === 1) {
            element0$1 = runtime.Tuple.get(lines, 0);
            line1 = element0$1;
            tmp5 = line1;
            return Predef.tuple(rule.name, tmp5)
          }
          if (top === true) {
            tmp6 = runtime.safeCall(lines.join("\n  | "));
            tmp5 = "\n  | " + tmp6;
            return Predef.tuple(rule.name, tmp5)
          }
          tmp5 = runtime.safeCall(lines.join(" | "));
          return Predef.tuple(rule.name, tmp5);
        };
        scrut = go(this, true);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          element0$ = runtime.Tuple.get(scrut, 0);
          element1$ = runtime.Tuple.get(scrut, 1);
          line = element1$;
          name1 = element0$;
          tmp = "<" + name1;
          tmp1 = tmp + "> ::= ";
          return tmp1 + line
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ParseRule", ["name", "choices"]]; 
    });
  }
  static lazy(init) {
    return globalThis.Object.freeze(new ParseRule.Lazy.class(init))
  } 
  static rule(name, ...choices) {
    let scrut, tmp, tmp1;
    scrut = choices.length == 0;
    if (scrut === true) {
      tmp = ParseRule.Choice.end(runtime.Unit);
      tmp1 = Stack.Cons(tmp, Stack.Nil);
      return globalThis.Object.freeze(new ParseRule.ParseRule.class(name, tmp1))
    }
    tmp1 = Iter.toStack(choices);
    return globalThis.Object.freeze(new ParseRule.ParseRule.class(name, tmp1));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "ParseRule"]; 
});
let ParseRule = ParseRule2; export default ParseRule;
