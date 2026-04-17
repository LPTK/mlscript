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
            let item, element1$, element0$, tmp5, tmp6, tmp7, tmp8;
            if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
              element0$ = runtime.Tuple.get(caseScrut, 0);
              element1$ = runtime.Tuple.get(caseScrut, 1);
              item = element0$;
              if (item instanceof ParseRule.Choice) {
                tmp5 = true;
              } else {
                tmp5 = false;
              }
              tmp6 = name + ": element [";
              tmp7 = tmp6 + element1$;
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
        let optional, initName, restName, init, rest, process, tmp, lambda;
        optional = runtime.safeCall(Choice.#shouldHaveBool(fields, "optional", false, "Choice.siding"));
        initName = runtime.safeCall(Choice.#shouldHaveStr(fields, "initName", "unnamed", "Choice.siding"));
        restName = runtime.safeCall(Choice.#shouldHaveStr(fields, "restName", "unnamed", "Choice.siding"));
        init = runtime.safeCall(Choice.#shouldHaveRuleLike(fields, "init", initName, "Choice.siding"));
        rest = runtime.safeCall(Choice.#shouldHaveRuleLike(fields, "rest", restName, "Choice.siding"));
        if (optional === true) {
          tmp = Predef.tuple;
        } else {
          lambda = (undefined, function (initRes, restRes) {
            let arg$Some$0$;
            if (initRes instanceof Option.Some.class) {
              arg$Some$0$ = initRes.value;
              return globalThis.Object.freeze([
                arg$Some$0$,
                restRes
              ])
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          });
          tmp = lambda;
        }
        process = runtime.safeCall(Choice.#shouldHaveFunction(fields, "process", tmp, "Choice.siding"));
        return Choice.Siding(init, optional, rest, process)
      } 
      static end(value) {
        return Choice.End(value)
      } 
      static map(choice, op) {
        let process, process1, arg$End$0$, arg$Siding$0$, arg$Siding$1$, arg$Siding$2$, arg$Siding$3$, arg$Ref$0$, arg$Ref$1$, arg$Ref$2$, arg$Ref$3$, arg$Ref$4$, arg$Keyword$0$, arg$Keyword$1$, tmp, lambda, lambda1, tmp1;
        if (choice instanceof Choice.Keyword.class) {
          arg$Keyword$0$ = choice.keyword;
          arg$Keyword$1$ = choice.rest;
          tmp = runtime.safeCall(arg$Keyword$1$.map(op));
          return Choice.Keyword(arg$Keyword$0$, tmp)
        } else if (choice instanceof Choice.Ref.class) {
          arg$Ref$0$ = choice.kind;
          arg$Ref$1$ = choice.process;
          arg$Ref$2$ = choice.outerPrec;
          arg$Ref$3$ = choice.innerPrec;
          arg$Ref$4$ = choice.rest;
          process = arg$Ref$1$;
          lambda = (undefined, function (x, y) {
            let tmp2;
            tmp2 = runtime.safeCall(process(x, y));
            return runtime.safeCall(op(tmp2))
          });
          return Choice.Ref(arg$Ref$0$, lambda, arg$Ref$2$, arg$Ref$3$, arg$Ref$4$)
        } else if (choice instanceof Choice.Siding.class) {
          arg$Siding$0$ = choice.init;
          arg$Siding$1$ = choice.optional;
          arg$Siding$2$ = choice.rest;
          arg$Siding$3$ = choice.process;
          process1 = arg$Siding$3$;
          lambda1 = (undefined, function (x, y) {
            let tmp2;
            tmp2 = runtime.safeCall(process1(x, y));
            return runtime.safeCall(op(tmp2))
          });
          return Choice.Siding(arg$Siding$0$, arg$Siding$1$, arg$Siding$2$, lambda1)
        } else if (choice instanceof Choice.End.class) {
          arg$End$0$ = choice.value;
          tmp1 = runtime.safeCall(op(arg$End$0$));
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
        let scrut, v, arg$Some$0$, tmp;
        scrut = this.cached;
        if (scrut instanceof Option.Some.class) {
          arg$Some$0$ = scrut.value;
          return arg$Some$0$
        }
        v = runtime.safeCall(this.init());
        tmp = Option.Some(v);
        this.cached = tmp;
        return v;
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
            let optional, scrut, scrut1, initRes, scrut2, restRes, arg$Siding$0$, arg$Siding$1$, arg$Siding$2$, arg$Siding$3$, arg$Some$0$, arg$Some$0$1, arg$Some$0$2, arg$End$0$, tmp1;
            if (caseScrut instanceof ParseRule.Choice.End.class) {
              arg$End$0$ = caseScrut.value;
              return Option.Some(arg$End$0$)
            } else if (caseScrut instanceof ParseRule.Choice.Siding.class) {
              arg$Siding$0$ = caseScrut.init;
              arg$Siding$1$ = caseScrut.optional;
              arg$Siding$2$ = caseScrut.rest;
              arg$Siding$3$ = caseScrut.process;
              optional = arg$Siding$1$;
              if (optional === true) {
                scrut = arg$Siding$2$.endChoice;
                if (scrut instanceof Option.Some.class) {
                  arg$Some$0$2 = scrut.value;
                  return runtime.safeCall(arg$Siding$3$(Option.None, arg$Some$0$2))
                }
                scrut1 = arg$Siding$0$.endChoice;
                if (scrut1 instanceof Option.Some.class) {
                  arg$Some$0$ = scrut1.value;
                  initRes = arg$Some$0$;
                  scrut2 = arg$Siding$2$.endChoice;
                  if (scrut2 instanceof Option.Some.class) {
                    arg$Some$0$1 = scrut2.value;
                    restRes = arg$Some$0$1;
                  } else {
                    return Option.None
                  }
                } else {
                  return Option.None
                }
              } else {
                scrut1 = arg$Siding$0$.endChoice;
                if (scrut1 instanceof Option.Some.class) {
                  arg$Some$0$ = scrut1.value;
                  initRes = arg$Some$0$;
                  scrut2 = arg$Siding$2$.endChoice;
                  if (scrut2 instanceof Option.Some.class) {
                    arg$Some$0$1 = scrut2.value;
                    restRes = arg$Some$0$1;
                  } else {
                    return Option.None
                  }
                } else {
                  return Option.None
                }
              }
              tmp1 = Option.Some(initRes);
              return runtime.safeCall(arg$Siding$3$(tmp1, restRes))
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
            let optional, process, rest, arg$Siding$0$, arg$Siding$1$, arg$Siding$2$, arg$Siding$3$, arg$Keyword$0$, arg$Keyword$1$, tmp4, lambda4, tmp5, lambda5, tmp6, tmp7;
            if (caseScrut instanceof ParseRule.Choice.Keyword.class) {
              arg$Keyword$0$ = caseScrut.keyword;
              arg$Keyword$1$ = caseScrut.rest;
              tmp4 = globalThis.Object.freeze([
                arg$Keyword$0$.name,
                arg$Keyword$1$
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
              rest = arg$Siding$2$;
              optional = arg$Siding$1$;
              lambda4 = (undefined, function (caseScrut1) {
                let element1$, element0$, tmp8, tmp9;
                if (runtime.Tuple.isArrayLike(caseScrut1) && caseScrut1.length === 2) {
                  element0$ = runtime.Tuple.get(caseScrut1, 0);
                  element1$ = runtime.Tuple.get(caseScrut1, 1);
                  tmp8 = runtime.safeCall(element1$.map(Option.Some));
                  tmp9 = tmp8.andThen(rest, process);
                  return globalThis.Object.freeze([
                    element0$,
                    tmp9
                  ])
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              });
              tmp5 = Iter.mapping(arg$Siding$0$.keywordChoices, lambda4);
              if (optional === true) {
                lambda5 = (undefined, function (caseScrut1) {
                  let element1$, element0$, lambda6, tmp8;
                  if (runtime.Tuple.isArrayLike(caseScrut1) && caseScrut1.length === 2) {
                    element0$ = runtime.Tuple.get(caseScrut1, 0);
                    element1$ = runtime.Tuple.get(caseScrut1, 1);
                    lambda6 = (undefined, function (res) {
                      return runtime.safeCall(process(Option.None, res))
                    });
                    tmp8 = runtime.safeCall(element1$.map(lambda6));
                    return globalThis.Object.freeze([
                      element0$,
                      tmp8
                    ])
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                });
                tmp6 = Iter.mapping(rest.keywordChoices, lambda5);
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
            let optional, process, scrut, process$_, rest$_$_, ip, rest$_, process$_1, k, op, scrut1, arg$Siding$0$, arg$Siding$1$, arg$Siding$2$, arg$Siding$3$, arg$Some$0$, arg$Ref$0$, arg$Ref$1$, arg$Ref$2$, arg$Ref$3$, arg$Ref$4$, arg$Some$0$1, arg$Ref$0$1, arg$Ref$1$1, arg$Ref$2$1, arg$Ref$3$1, arg$Ref$4$1, lambda4, tmp1, tmp2, process$_$_;
            if (caseScrut instanceof ParseRule.Choice.Ref.class) {
              return Option.Some(caseScrut)
            } else if (caseScrut instanceof ParseRule.Choice.Siding.class) {
              arg$Siding$0$ = caseScrut.init;
              arg$Siding$1$ = caseScrut.optional;
              arg$Siding$2$ = caseScrut.rest;
              arg$Siding$3$ = caseScrut.process;
              process = arg$Siding$3$;
              optional = arg$Siding$1$;
              scrut = arg$Siding$0$.refChoice;
              if (scrut instanceof Option.Some.class) {
                arg$Some$0$1 = scrut.value;
                if (arg$Some$0$1 instanceof ParseRule.Choice.Ref.class) {
                  arg$Ref$0$1 = arg$Some$0$1.kind;
                  arg$Ref$1$1 = arg$Some$0$1.process;
                  arg$Ref$2$1 = arg$Some$0$1.outerPrec;
                  arg$Ref$3$1 = arg$Some$0$1.innerPrec;
                  arg$Ref$4$1 = arg$Some$0$1.rest;
                  process$_ = arg$Ref$1$1;
                  lambda4 = (undefined, function (exprRes, pairRes) {
                    let element1$, element0$, tmp3;
                    if (runtime.Tuple.isArrayLike(pairRes) && pairRes.length === 2) {
                      element0$ = runtime.Tuple.get(pairRes, 0);
                      element1$ = runtime.Tuple.get(pairRes, 1);
                      tmp3 = runtime.safeCall(process$_(exprRes, element0$));
                      return runtime.safeCall(process(tmp3, element1$))
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  });
                  rest$_$_ = arg$Ref$4$1.andThen(arg$Siding$2$, Predef.tuple);
                  tmp1 = ParseRule.Choice.Ref(arg$Ref$0$1, lambda4, arg$Ref$2$1, arg$Ref$3$1, rest$_$_);
                  return Option.Some(tmp1)
                }
                if (optional === true) {
                  scrut1 = arg$Siding$2$.refChoice;
                  if (scrut1 instanceof Option.Some.class) {
                    arg$Some$0$ = scrut1.value;
                    if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                      arg$Ref$0$ = arg$Some$0$.kind;
                      arg$Ref$1$ = arg$Some$0$.process;
                      arg$Ref$2$ = arg$Some$0$.outerPrec;
                      arg$Ref$3$ = arg$Some$0$.innerPrec;
                      arg$Ref$4$ = arg$Some$0$.rest;
                      rest$_ = arg$Ref$4$;
                      ip = arg$Ref$3$;
                      op = arg$Ref$2$;
                      process$_1 = arg$Ref$1$;
                      k = arg$Ref$0$;
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
                  scrut1 = arg$Siding$2$.refChoice;
                  if (scrut1 instanceof Option.Some.class) {
                    arg$Some$0$ = scrut1.value;
                    if (arg$Some$0$ instanceof ParseRule.Choice.Ref.class) {
                      arg$Ref$0$ = arg$Some$0$.kind;
                      arg$Ref$1$ = arg$Some$0$.process;
                      arg$Ref$2$ = arg$Some$0$.outerPrec;
                      arg$Ref$3$ = arg$Some$0$.innerPrec;
                      arg$Ref$4$ = arg$Some$0$.rest;
                      rest$_ = arg$Ref$4$;
                      ip = arg$Ref$3$;
                      op = arg$Ref$2$;
                      process$_1 = arg$Ref$1$;
                      k = arg$Ref$0$;
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
              process$_$_ = (undefined, function (exprRes, restRes) {
                let tmp3;
                tmp3 = runtime.safeCall(process$_1(exprRes, restRes));
                return runtime.safeCall(process(Option.None, tmp3))
              });
              tmp2 = ParseRule.Choice.Ref(k, process$_$_, op, ip, rest$_);
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
            let process1, value, process2, arg$Siding$0$, arg$Siding$1$, arg$Siding$2$, arg$Siding$3$, arg$End$0$, arg$Ref$0$, arg$Ref$1$, arg$Ref$2$, arg$Ref$3$, arg$Ref$4$, arg$Keyword$0$, arg$Keyword$1$, tmp5, tmp6, lambda2, tmp7, tmp8, tmp9, lambda3, lambda4, tmp10, tmp11;
            if (caseScrut instanceof ParseRule.Choice.Keyword.class) {
              arg$Keyword$0$ = caseScrut.keyword;
              arg$Keyword$1$ = caseScrut.rest;
              tmp5 = go(arg$Keyword$1$);
              tmp6 = ParseRule.Choice.Keyword(arg$Keyword$0$, tmp5);
              return globalThis.Object.freeze([
                tmp6
              ])
            } else if (caseScrut instanceof ParseRule.Choice.Ref.class) {
              arg$Ref$0$ = caseScrut.kind;
              arg$Ref$1$ = caseScrut.process;
              arg$Ref$2$ = caseScrut.outerPrec;
              arg$Ref$3$ = caseScrut.innerPrec;
              arg$Ref$4$ = caseScrut.rest;
              process1 = arg$Ref$1$;
              lambda2 = (undefined, function (lhs, rhsInnerResult) {
                let element1$, element0$, tmp12;
                if (runtime.Tuple.isArrayLike(rhsInnerResult) && rhsInnerResult.length === 2) {
                  element0$ = runtime.Tuple.get(rhsInnerResult, 0);
                  element1$ = runtime.Tuple.get(rhsInnerResult, 1);
                  tmp12 = runtime.safeCall(process1(lhs, element0$));
                  return globalThis.Object.freeze([
                    tmp12,
                    element1$
                  ])
                }
                Predef.check(false, "illgeal result from inner");
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              });
              tmp7 = go(arg$Ref$4$);
              tmp8 = ParseRule.Choice.Ref(arg$Ref$0$, lambda2, arg$Ref$2$, arg$Ref$3$, tmp7);
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
              lambda4 = (undefined, function (initRes, restRes) {
                let element1$, element0$, tmp12;
                if (runtime.Tuple.isArrayLike(restRes) && restRes.length === 2) {
                  element0$ = runtime.Tuple.get(restRes, 0);
                  element1$ = runtime.Tuple.get(restRes, 1);
                  tmp12 = runtime.safeCall(process2(initRes, element0$));
                  return globalThis.Object.freeze([
                    tmp12,
                    element1$
                  ])
                }
                Predef.check(false, "illegal result from inner");
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              });
              tmp10 = go(arg$Siding$2$);
              tmp11 = ParseRule.Choice.Siding(arg$Siding$0$, arg$Siding$1$, tmp10, lambda4);
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
        let tail, go, displayChoice, scrut, element1$, element0$, tmp, tmp1;
        const this$ParseRule = this;
        displayChoice = function displayChoice(choice) {
          let opt, init$_, arg$Siding$0$, arg$Siding$1$, arg$Siding$2$, arg$Ref$0$, arg$Ref$4$, arg$Keyword$0$, arg$Keyword$1$, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
          if (choice instanceof ParseRule.Choice.Keyword.class) {
            arg$Keyword$0$ = choice.keyword;
            arg$Keyword$1$ = choice.rest;
            tmp2 = "\"" + arg$Keyword$0$.name;
            tmp3 = tmp2 + "\"";
            tmp4 = tail(arg$Keyword$1$);
            return tmp3 + tmp4[1]
          } else if (choice instanceof ParseRule.Choice.Ref.class) {
            arg$Ref$0$ = choice.kind;
            arg$Ref$4$ = choice.rest;
            tmp5 = "<" + arg$Ref$0$;
            tmp6 = tmp5 + ">";
            tmp7 = tail(arg$Ref$4$);
            return tmp6 + tmp7[1]
          } else if (choice instanceof ParseRule.Choice.Siding.class) {
            arg$Siding$0$ = choice.init;
            arg$Siding$1$ = choice.optional;
            arg$Siding$2$ = choice.rest;
            opt = arg$Siding$1$;
            tmp8 = go(arg$Siding$0$, false);
            init$_ = tmp8[1];
            if (opt === true) {
              tmp9 = "[" + init$_;
              tmp10 = tmp9 + "]";
            } else {
              tmp11 = "(" + init$_;
              tmp10 = tmp11 + ")";
            }
            tmp12 = tail(arg$Siding$2$);
            return tmp10 + tmp12[1]
          } else if (choice instanceof ParseRule.Choice.End.class) {
            return ""
          }
          tmp13 = "<unknown:" + choice;
          return tmp13 + ">";
        };
        tail = function tail(rest) {
          let choices1, scrut1, name1, line, scrut2, element1$1, element0$1, arg$Cons$0$, arg$Cons$1$, tmp2, lambda, tmp3, lambda1, tmp4, tmp5, tmp6, tmp7, tmp8;
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
                        line = element1$1;
                        name1 = element0$1;
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
                        line = element1$1;
                        name1 = element0$1;
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
                      line = element1$1;
                      name1 = element0$1;
                    } else {
                      break split_default$
                    }
                  }
                  tmp4 = " " + line;
                  return globalThis.Object.freeze([
                    name1,
                    tmp4
                  ])
                }
                break split_default$;
              }
              tmp5 = " (" + line;
              tmp6 = tmp5 + ")";
              return globalThis.Object.freeze([
                name1,
                tmp6
              ]);
            }
            tmp7 = " [" + line;
            tmp8 = tmp7 + "]";
            return globalThis.Object.freeze([
              name1,
              tmp8
            ]);
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        };
        go = function go(rule, top) {
          let lines, tmp2, lambda, tmp3, tmp4, element0$1, tmp5, tmp6;
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
            return Predef.tuple(rule.name, "\u03B5")
          } else if (runtime.Tuple.isArrayLike(lines) && lines.length === 1) {
            element0$1 = runtime.Tuple.get(lines, 0);
            tmp5 = element0$1;
            return Predef.tuple(rule.name, element0$1)
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
          tmp = "<" + element0$;
          tmp1 = tmp + "> ::= ";
          return tmp1 + element1$
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
