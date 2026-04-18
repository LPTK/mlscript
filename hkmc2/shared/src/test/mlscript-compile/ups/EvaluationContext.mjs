const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import Option from "./../Option.mjs";
let EvaluationContext1;
(class EvaluationContext {
  static {
    EvaluationContext1 = this
  }
  static {
    (class Term {
      static {
        EvaluationContext.Term = this
      }
      constructor() {
        this.#_freeVars = Option.None;
      }
      #_freeVars;
      get freeVars() {
        let arg$Some$0$, arg$Abs$0$, arg$Abs$1$, arg$App$0$, arg$App$1$, arg$Var$0$, tmp, tmp1, tmp2, tmp3, tmp4;
        if (this.#_freeVars instanceof Option.Some.class) {
          arg$Some$0$ = this.#_freeVars.value;
          return arg$Some$0$
        } else if (this.#_freeVars instanceof Option.None.class) {
          if (this instanceof EvaluationContext.Var.class) {
            arg$Var$0$ = this.name;
            tmp = globalThis.Object.freeze([
              arg$Var$0$
            ]);
            tmp1 = globalThis.Object.freeze(new globalThis.Set(tmp));
          } else if (this instanceof EvaluationContext.App.class) {
            arg$App$0$ = this.lhs;
            arg$App$1$ = this.rhs;
            tmp1 = runtime.safeCall(arg$App$0$.freeVars.union(arg$App$1$.freeVars));
          } else if (this instanceof EvaluationContext.Abs.class) {
            arg$Abs$0$ = this.lhs;
            arg$Abs$1$ = this.rhs;
            tmp2 = globalThis.Object.freeze([
              arg$Abs$0$
            ]);
            tmp3 = globalThis.Object.freeze(new globalThis.Set(tmp2));
            tmp1 = runtime.safeCall(arg$Abs$1$.freeVars.difference(tmp3));
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          tmp4 = Option.Some(tmp1);
          this.#_freeVars = tmp4;
          return tmp1
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      } 
      freshName(baseName) {
        let freeVars, nameIndex, scrut;
        freeVars = this.freeVars;
        nameIndex = 1;
        scrut = runtime.safeCall(freeVars.has(baseName));
        if (scrut === false) {
          return baseName
        }
        lbl: while (true) {
          let scrut1, scrut2, tmp, tmp1;
          tmp = baseName + "_";
          scrut1 = tmp + nameIndex;
          scrut2 = runtime.safeCall(freeVars.has(scrut1));
          if (scrut2 === true) {
            tmp1 = nameIndex + 1;
            nameIndex = tmp1;
            continue lbl
          }
          return scrut1;
        }
      } 
      freshVar(baseName) {
        let tmp;
        tmp = this.freshName(baseName);
        return EvaluationContext.Var(tmp)
      } 
      equals(that) {
        let arg$Abs$0$, arg$Abs$1$, arg$Var$0$, arg$Abs$0$1, arg$Abs$1$1, arg$Var$0$1, arg$App$0$, arg$App$1$, arg$App$0$1, arg$App$1$1, arg$Var$0$2, arg$Var$0$3, tmp, tmp1;
        if (this instanceof EvaluationContext.Var.class) {
          arg$Var$0$2 = this.name;
          if (that instanceof EvaluationContext.Var.class) {
            arg$Var$0$3 = that.name;
            return arg$Var$0$2 === arg$Var$0$3
          }
          return false;
        } else if (this instanceof EvaluationContext.App.class) {
          arg$App$0$ = this.lhs;
          arg$App$1$ = this.rhs;
          if (that instanceof EvaluationContext.App.class) {
            arg$App$0$1 = that.lhs;
            arg$App$1$1 = that.rhs;
            tmp = runtime.safeCall(arg$App$0$.equals(arg$App$0$1));
            if (tmp === true) {
              return runtime.safeCall(arg$App$1$.equals(arg$App$1$1))
            }
            return false;
          }
          return false;
        } else if (this instanceof EvaluationContext.Abs.class) {
          arg$Abs$0$ = this.lhs;
          arg$Abs$1$ = this.rhs;
          if (arg$Abs$0$ instanceof EvaluationContext.Var.class) {
            arg$Var$0$ = arg$Abs$0$.name;
            if (that instanceof EvaluationContext.Abs.class) {
              arg$Abs$0$1 = that.lhs;
              arg$Abs$1$1 = that.rhs;
              if (arg$Abs$0$1 instanceof EvaluationContext.Var.class) {
                arg$Var$0$1 = arg$Abs$0$1.name;
                tmp1 = arg$Var$0$ === arg$Var$0$1;
                if (tmp1 === true) {
                  return runtime.safeCall(arg$Abs$1$.equals(arg$Abs$1$1))
                }
                return false;
              }
              return false;
            }
            return false;
          }
          return false;
        }
        return false;
      } 
      get show() {
        let arg$Abs$0$, arg$Abs$1$, arg$Var$0$, arg$App$0$, arg$App$1$, arg$Var$0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
        if (this instanceof EvaluationContext.Var.class) {
          arg$Var$0$1 = this.name;
          return arg$Var$0$1
        } else if (this instanceof EvaluationContext.App.class) {
          arg$App$0$ = this.lhs;
          arg$App$1$ = this.rhs;
          if (arg$App$0$ instanceof EvaluationContext.Abs.class) {
            tmp = "(" + arg$App$0$.show;
            tmp1 = tmp + ") ";
            return tmp1 + arg$App$1$.show
          }
          if (arg$App$1$ instanceof EvaluationContext.App.class) {
            tmp2 = arg$App$0$.show + " (";
            tmp3 = tmp2 + arg$App$1$.show;
            return tmp3 + ")"
          }
          tmp4 = arg$App$0$.show + " ";
          return tmp4 + arg$App$1$.show;
        } else if (this instanceof EvaluationContext.Abs.class) {
          arg$Abs$0$ = this.lhs;
          arg$Abs$1$ = this.rhs;
          if (arg$Abs$0$ instanceof EvaluationContext.Var.class) {
            arg$Var$0$ = arg$Abs$0$.name;
            tmp5 = "\u03BB" + arg$Var$0$;
            tmp6 = tmp5 + ". ";
            return tmp6 + arg$Abs$1$.show
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Term"]; 
    });
    this.Var = function Var(name) {
      return globalThis.Object.freeze(new Var.class(name));
    };
    (class Var extends EvaluationContext.Term {
      static {
        EvaluationContext.Var.class = this
      }
      constructor(name) {
        super();
        this.name = name;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Var", ["name"]]; 
    });
    this.App = function App(lhs, rhs) {
      return globalThis.Object.freeze(new App.class(lhs, rhs));
    };
    (class App extends EvaluationContext.Term {
      static {
        EvaluationContext.App.class = this
      }
      constructor(lhs, rhs) {
        super();
        this.lhs = lhs;
        this.rhs = rhs;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "App", ["lhs", "rhs"]]; 
    });
    this.Abs = function Abs(lhs, rhs) {
      return globalThis.Object.freeze(new Abs.class(lhs, rhs));
    };
    (class Abs extends EvaluationContext.Term {
      static {
        EvaluationContext.Abs.class = this
      }
      constructor(lhs, rhs) {
        super();
        this.lhs = lhs;
        this.rhs = rhs;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Abs", ["lhs", "rhs"]]; 
    });
    (class Value {
      static {
        new this
      }
      constructor() {
        EvaluationContext.Value = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        if (input instanceof EvaluationContext.Abs.class) {
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null))
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      } 
      unapplyStringPrefix(input) {
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "Value"]; 
    });
    (class Ctx {
      static {
        new this
      }
      constructor() {
        EvaluationContext.Ctx = this;
        globalThis.Object.freeze(this);
      }
      unapply(Hole, input) {
        let arg$App$0$, arg$App$1$, patternArgument0$, unapplyResult, output, AppOutput, unapplyResult1, patternArgument0$1, unapplyResult2, output1, AppOutput1, matchSuccess_Hole, output2, lambda, lambda1, lambda2, lambda3, lambda4, lambda5;
        matchSuccess_Hole = runtime.safeCall(Hole.unapply(input));
        if (matchSuccess_Hole instanceof runtime.MatchSuccess.class) {
          output2 = matchSuccess_Hole.output;
          matchSuccess_Hole.bindings;
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(output2, null))
        }
        if (input instanceof EvaluationContext.App.class) {
          arg$App$0$ = input.lhs;
          arg$App$1$ = input.rhs;
          unapplyResult1 = runtime.safeCall(EvaluationContext.Value.unapply(arg$App$0$));
          if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
            unapplyResult1.output;
            unapplyResult1.bindings;
            lambda = (undefined, function (input1) {
              let matchSuccess_Hole1, output3;
              matchSuccess_Hole1 = runtime.safeCall(Hole.unapply(input1));
              if (matchSuccess_Hole1 instanceof runtime.MatchSuccess.class) {
                output3 = matchSuccess_Hole1.output;
                matchSuccess_Hole1.bindings;
                return globalThis.Object.freeze(new runtime.MatchSuccess.class(output3, null))
              }
              return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
            });
            lambda1 = (undefined, function (input1) {
              let matchSuccess_Hole1, outputPair, output3, remaining, tmp;
              matchSuccess_Hole1 = runtime.safeCall(Hole.unapplyStringPrefix(input1));
              if (matchSuccess_Hole1 instanceof runtime.MatchSuccess.class) {
                outputPair = matchSuccess_Hole1.output;
                matchSuccess_Hole1.bindings;
                if (runtime.Tuple.isArrayLike(outputPair) && outputPair.length === 2) {
                  output3 = runtime.Tuple.get(outputPair, 0);
                  remaining = runtime.Tuple.get(outputPair, 1);
                  tmp = globalThis.Object.freeze([
                    output3,
                    remaining
                  ]);
                  return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp, null))
                }
                return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
              }
              return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
            });
            patternArgument0$1 = globalThis.Object.freeze({
              unapply: lambda,
              unapplyStringPrefix: lambda1
            });
            unapplyResult2 = EvaluationContext.Ctx.unapply(patternArgument0$1, arg$App$1$);
            if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
              output1 = unapplyResult2.output;
              unapplyResult2.bindings;
              AppOutput1 = globalThis.Object.freeze(new EvaluationContext.App.class(arg$App$0$, output1));
              return globalThis.Object.freeze(new runtime.MatchSuccess.class(AppOutput1, null))
            }
            lambda2 = (undefined, function (input1) {
              let matchSuccess_Hole1, output3;
              matchSuccess_Hole1 = runtime.safeCall(Hole.unapply(input1));
              if (matchSuccess_Hole1 instanceof runtime.MatchSuccess.class) {
                output3 = matchSuccess_Hole1.output;
                matchSuccess_Hole1.bindings;
                return globalThis.Object.freeze(new runtime.MatchSuccess.class(output3, null))
              }
              return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
            });
            lambda3 = (undefined, function (input1) {
              let matchSuccess_Hole1, outputPair, output3, remaining, tmp;
              matchSuccess_Hole1 = runtime.safeCall(Hole.unapplyStringPrefix(input1));
              if (matchSuccess_Hole1 instanceof runtime.MatchSuccess.class) {
                outputPair = matchSuccess_Hole1.output;
                matchSuccess_Hole1.bindings;
                if (runtime.Tuple.isArrayLike(outputPair) && outputPair.length === 2) {
                  output3 = runtime.Tuple.get(outputPair, 0);
                  remaining = runtime.Tuple.get(outputPair, 1);
                  tmp = globalThis.Object.freeze([
                    output3,
                    remaining
                  ]);
                  return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp, null))
                }
                return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
              }
              return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
            });
            patternArgument0$ = globalThis.Object.freeze({
              unapply: lambda2,
              unapplyStringPrefix: lambda3
            });
            unapplyResult = EvaluationContext.Ctx.unapply(patternArgument0$, arg$App$0$);
            if (unapplyResult instanceof runtime.MatchSuccess.class) {
              output = unapplyResult.output;
              unapplyResult.bindings;
              AppOutput = globalThis.Object.freeze(new EvaluationContext.App.class(output, arg$App$1$));
              return globalThis.Object.freeze(new runtime.MatchSuccess.class(AppOutput, null))
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
          }
          lambda4 = (undefined, function (input1) {
            let matchSuccess_Hole1, output3;
            matchSuccess_Hole1 = runtime.safeCall(Hole.unapply(input1));
            if (matchSuccess_Hole1 instanceof runtime.MatchSuccess.class) {
              output3 = matchSuccess_Hole1.output;
              matchSuccess_Hole1.bindings;
              return globalThis.Object.freeze(new runtime.MatchSuccess.class(output3, null))
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
          });
          lambda5 = (undefined, function (input1) {
            let matchSuccess_Hole1, outputPair, output3, remaining, tmp;
            matchSuccess_Hole1 = runtime.safeCall(Hole.unapplyStringPrefix(input1));
            if (matchSuccess_Hole1 instanceof runtime.MatchSuccess.class) {
              outputPair = matchSuccess_Hole1.output;
              matchSuccess_Hole1.bindings;
              if (runtime.Tuple.isArrayLike(outputPair) && outputPair.length === 2) {
                output3 = runtime.Tuple.get(outputPair, 0);
                remaining = runtime.Tuple.get(outputPair, 1);
                tmp = globalThis.Object.freeze([
                  output3,
                  remaining
                ]);
                return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp, null))
              }
              return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
          });
          patternArgument0$ = globalThis.Object.freeze({
            unapply: lambda4,
            unapplyStringPrefix: lambda5
          });
          unapplyResult = EvaluationContext.Ctx.unapply(patternArgument0$, arg$App$0$);
          if (unapplyResult instanceof runtime.MatchSuccess.class) {
            output = unapplyResult.output;
            unapplyResult.bindings;
            AppOutput = globalThis.Object.freeze(new EvaluationContext.App.class(output, arg$App$1$));
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(AppOutput, null))
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      } 
      unapplyStringPrefix(Hole, input) {
        let matchSuccess_Hole, outputPair, output, remaining, tmp;
        matchSuccess_Hole = runtime.safeCall(Hole.unapplyStringPrefix(input));
        if (matchSuccess_Hole instanceof runtime.MatchSuccess.class) {
          outputPair = matchSuccess_Hole.output;
          matchSuccess_Hole.bindings;
          if (runtime.Tuple.isArrayLike(outputPair) && outputPair.length === 2) {
            output = runtime.Tuple.get(outputPair, 0);
            remaining = runtime.Tuple.get(outputPair, 1);
            tmp = globalThis.Object.freeze([
              output,
              remaining
            ]);
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp, null))
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "Ctx"]; 
    });
    (class Redex {
      static {
        new this
      }
      constructor() {
        EvaluationContext.Redex = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        let arg$App$0$, arg$App$1$, arg$Abs$0$, arg$Abs$1$, arg$Var$0$;
        if (input instanceof EvaluationContext.App.class) {
          arg$App$0$ = input.lhs;
          arg$App$1$ = input.rhs;
          if (arg$App$0$ instanceof EvaluationContext.Abs.class) {
            arg$Abs$0$ = arg$App$0$.lhs;
            arg$Abs$1$ = arg$App$0$.rhs;
            if (arg$Abs$0$ instanceof EvaluationContext.Var.class) {
              arg$Var$0$ = arg$Abs$0$.name;
              if (arg$App$1$ instanceof EvaluationContext.Abs.class) {
                let inlinedVal;
                inlinedVal = EvaluationContext.subst(arg$Abs$1$, arg$Var$0$, arg$App$1$);
                return globalThis.Object.freeze(new runtime.MatchSuccess.class(inlinedVal, null))
              }
              return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      } 
      unapplyStringPrefix(input) {
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "Redex"]; 
    });
    (class Step {
      static {
        new this
      }
      constructor() {
        EvaluationContext.Step = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        let patternArgument0$, unapplyResult, output;
        patternArgument0$ = EvaluationContext1.Redex;
        unapplyResult = EvaluationContext.Ctx.unapply(patternArgument0$, input);
        if (unapplyResult instanceof runtime.MatchSuccess.class) {
          output = unapplyResult.output;
          unapplyResult.bindings;
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(output, null))
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      } 
      unapplyStringPrefix(input) {
        let output, remaining, patternArgument0$, unapplyResult, outputPair, tmp;
        patternArgument0$ = EvaluationContext1.Redex;
        unapplyResult = EvaluationContext.Ctx.unapplyStringPrefix(patternArgument0$, input);
        if (unapplyResult instanceof runtime.MatchSuccess.class) {
          outputPair = unapplyResult.output;
          unapplyResult.bindings;
          output = runtime.Tuple.get(outputPair, 0);
          remaining = runtime.Tuple.get(outputPair, 1);
          tmp = globalThis.Object.freeze([
            output,
            remaining
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp, null))
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "Step"]; 
    });
  }
  static subst(term, name, target) {
    let scrut, scrut1, scrut2, arg$App$0$, arg$App$1$, arg$Abs$0$, arg$Abs$1$, arg$Var$0$, arg$Var$0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (term instanceof EvaluationContext.Var.class) {
      arg$Var$0$1 = term.name;
      scrut = name === arg$Var$0$1;
      if (scrut === true) {
        return target
      }
      return term;
    } else if (term instanceof EvaluationContext.Abs.class) {
      arg$Abs$0$ = term.lhs;
      arg$Abs$1$ = term.rhs;
      if (arg$Abs$0$ instanceof EvaluationContext.Var.class) {
        arg$Var$0$ = arg$Abs$0$.name;
        scrut1 = name === arg$Var$0$;
        if (scrut1 === true) {
          return term
        }
        scrut2 = runtime.safeCall(target.freeVars.has(arg$Var$0$));
        if (scrut2 === true) {
          tmp = runtime.safeCall(target.freshVar(arg$Var$0$));
          tmp1 = EvaluationContext.subst(target, arg$Var$0$, tmp);
        } else {
          tmp1 = target;
        }
        tmp2 = EvaluationContext.Var(arg$Var$0$);
        tmp3 = EvaluationContext.subst(arg$Abs$1$, name, tmp1);
        return EvaluationContext.Abs(tmp2, tmp3);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (term instanceof EvaluationContext.App.class) {
      arg$App$0$ = term.lhs;
      arg$App$1$ = term.rhs;
      tmp4 = EvaluationContext.subst(arg$App$0$, name, target);
      tmp5 = EvaluationContext.subst(arg$App$1$, name, target);
      return EvaluationContext.App(tmp4, tmp5)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static isStep_naive(t) {
    let unapplyResult;
    unapplyResult = runtime.safeCall(EvaluationContext.Step.unapply(t));
    if (unapplyResult instanceof runtime.MatchSuccess.class) {
      unapplyResult.output;
      unapplyResult.bindings;
      return true
    }
    return false;
  } 
  static isStep_optimized(t) {
    let matcher1$, matcher2$, matcher3$, matcher4$, matcher5$, patternOutput, lambda, lambda1, lambda2, lambda3, lambda4, inlinedVal, lhs, rhs, result4$, output4$, fieldBindings, result1$, result3$, result2$, result5$, result3$1, transformResult, bindings, transformResult1, bindings1, bindings2, bindings3, transformResult2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28;
    lambda = (undefined, function (input) {
      let tmp29, tmp30;
      tmp29 = globalThis.Object.freeze({
        x: input
      });
      tmp30 = globalThis.Object.freeze(new runtime.MatchSuccess.class(input, tmp29));
      return tmp30
    });
    matcher5$ = lambda;
    lambda1 = (undefined, function (input) {
      let lhs1, rhs1, result7$, output7$, fieldBindings1, result6$, bindings4, bindings5, lhs2, rhs2, lhs3, rhs3, p_1$, p_2$, result4$1, output4$1, fieldBindings2, result1$1, result3$2, output3$, result2$1, result5$1, result3$3, output3$1, bindings6, bindings7, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69;
      if (input instanceof EvaluationContext1.Abs.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs1 = input.lhs;
            tmp29 = runtime.safeCall(matcher3$(lhs1));
            tmp30 = globalThis.Object.freeze({
              input: lhs1,
              result: tmp29
            });
          } else {
            tmp31 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
            tmp30 = globalThis.Object.freeze({
              input: null,
              result: tmp31
            });
          }
        } else {
          tmp32 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
          tmp30 = globalThis.Object.freeze({
            input: null,
            result: tmp32
          });
        }
        if (input instanceof Object) {
          if ("rhs" in input) {
            rhs1 = input.rhs;
            tmp33 = runtime.safeCall(matcher4$(rhs1));
            tmp34 = globalThis.Object.freeze({
              input: rhs1,
              result: tmp33
            });
          } else {
            tmp35 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
            tmp34 = globalThis.Object.freeze({
              input: null,
              result: tmp35
            });
          }
        } else {
          tmp36 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
          tmp34 = globalThis.Object.freeze({
            input: null,
            result: tmp36
          });
        }
        result6$ = tmp30.result;
        if (result6$ instanceof runtime.MatchSuccess.class) {
          result6$.output;
          bindings4 = result6$.bindings;
          result7$ = tmp34.result;
          if (result7$ instanceof runtime.MatchSuccess.class) {
            output7$ = result7$.output;
            bindings5 = result7$.bindings;
            fieldBindings1 = globalThis.Object.freeze({
              m: output7$
            });
            tmp37 = globalThis.Object.freeze({
              ...bindings4,
              ...fieldBindings1,
              ...bindings5
            });
            tmp38 = globalThis.Object.freeze(new runtime.MatchSuccess.class(input, tmp37));
          } else {
            tmp38 = globalThis.Object.freeze(new runtime.MatchFailure.class("topmost"));
          }
        } else {
          tmp38 = globalThis.Object.freeze(new runtime.MatchFailure.class("topmost"));
        }
        tmp39 = globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
        tmp40 = globalThis.Object.freeze(new runtime.MatchFailure.class("never"));
        return globalThis.Object.freeze({
          p_1: tmp38,
          p_2: tmp39,
          p_3: tmp40
        })
      } else if (input instanceof EvaluationContext1.App.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs3 = input.lhs;
            tmp41 = runtime.safeCall(matcher1$(lhs3));
            tmp42 = globalThis.Object.freeze({
              input: lhs3,
              result: tmp41
            });
          } else {
            tmp43 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
            tmp44 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
            tmp45 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
            tmp46 = globalThis.Object.freeze({
              p_1: tmp43,
              p_2: tmp44,
              p_3: tmp45
            });
            tmp42 = globalThis.Object.freeze({
              input: null,
              result: tmp46
            });
          }
        } else {
          tmp47 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
          tmp48 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
          tmp49 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
          tmp50 = globalThis.Object.freeze({
            p_1: tmp47,
            p_2: tmp48,
            p_3: tmp49
          });
          tmp42 = globalThis.Object.freeze({
            input: null,
            result: tmp50
          });
        }
        lhs2 = tmp42;
        if (input instanceof Object) {
          if ("rhs" in input) {
            rhs3 = input.rhs;
            tmp51 = runtime.safeCall(matcher2$(rhs3));
            tmp52 = globalThis.Object.freeze({
              input: rhs3,
              result: tmp51
            });
          } else {
            tmp53 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
            tmp54 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
            tmp55 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
            tmp56 = globalThis.Object.freeze({
              p_4: tmp53,
              p_3: tmp54,
              p_5: tmp55
            });
            tmp52 = globalThis.Object.freeze({
              input: null,
              result: tmp56
            });
          }
        } else {
          tmp57 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
          tmp58 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
          tmp59 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
          tmp60 = globalThis.Object.freeze({
            p_4: tmp57,
            p_3: tmp58,
            p_5: tmp59
          });
          tmp52 = globalThis.Object.freeze({
            input: null,
            result: tmp60
          });
        }
        rhs2 = tmp52;
        tmp61 = globalThis.Object.freeze(new runtime.MatchFailure.class("never"));
        p_1$ = tmp61;
        tmp62 = globalThis.Object.freeze(new runtime.MatchFailure.class("never"));
        p_2$ = tmp62;
        split_root$: {
          split_1$: {
            split_2$: {
              result1$1 = tmp42.result.p_1;
              if (result1$1 instanceof runtime.MatchSuccess.class) {
                result1$1.output;
                bindings6 = result1$1.bindings;
                result4$1 = tmp52.result.p_4;
                if (result4$1 instanceof runtime.MatchSuccess.class) {
                  let inlinedVal1, x, n, m;
                  output4$1 = result4$1.output;
                  bindings7 = result4$1.bindings;
                  fieldBindings2 = globalThis.Object.freeze({
                    n: output4$1
                  });
                  tmp63 = globalThis.Object.freeze({
                    ...bindings6,
                    ...fieldBindings2,
                    ...bindings7
                  });
                  x = tmp63.x;
                  m = tmp63.m;
                  n = tmp63.n;
                  inlinedVal1 = EvaluationContext.subst(m, x, n);
                  tmp64 = globalThis.Object.freeze(new runtime.MatchSuccess.class(inlinedVal1, null));
                  break split_root$
                }
                result2$1 = tmp42.result.p_2;
                if (result2$1 instanceof runtime.MatchSuccess.class) {
                  result2$1.output;
                  result2$1.bindings;
                  result3$2 = tmp52.result.p_3;
                  if (result3$2 instanceof runtime.MatchSuccess.class) {
                    output3$ = result3$2.output;
                    result3$2.bindings;
                    break split_1$
                  }
                  result3$3 = tmp42.result.p_3;
                  if (result3$3 instanceof runtime.MatchSuccess.class) {
                    output3$1 = result3$3.output;
                    result3$3.bindings;
                    result5$1 = tmp52.result.p_5;
                    if (result5$1 instanceof runtime.MatchSuccess.class) {
                      result5$1.output;
                      result5$1.bindings;
                      break split_2$
                    }
                  }
                } else {
                  result3$3 = tmp42.result.p_3;
                  if (result3$3 instanceof runtime.MatchSuccess.class) {
                    output3$1 = result3$3.output;
                    result3$3.bindings;
                    result5$1 = tmp52.result.p_5;
                    if (result5$1 instanceof runtime.MatchSuccess.class) {
                      result5$1.output;
                      result5$1.bindings;
                      break split_2$
                    }
                  }
                }
              } else {
                result2$1 = tmp42.result.p_2;
                if (result2$1 instanceof runtime.MatchSuccess.class) {
                  result2$1.output;
                  result2$1.bindings;
                  result3$2 = tmp52.result.p_3;
                  if (result3$2 instanceof runtime.MatchSuccess.class) {
                    output3$ = result3$2.output;
                    result3$2.bindings;
                    break split_1$
                  }
                  result3$3 = tmp42.result.p_3;
                  if (result3$3 instanceof runtime.MatchSuccess.class) {
                    output3$1 = result3$3.output;
                    result3$3.bindings;
                    result5$1 = tmp52.result.p_5;
                    if (result5$1 instanceof runtime.MatchSuccess.class) {
                      result5$1.output;
                      result5$1.bindings;
                      break split_2$
                    }
                  }
                } else {
                  result3$3 = tmp42.result.p_3;
                  if (result3$3 instanceof runtime.MatchSuccess.class) {
                    output3$1 = result3$3.output;
                    result3$3.bindings;
                    result5$1 = tmp52.result.p_5;
                    if (result5$1 instanceof runtime.MatchSuccess.class) {
                      result5$1.output;
                      result5$1.bindings;
                      break split_2$
                    }
                  }
                }
              }
              tmp64 = globalThis.Object.freeze(new runtime.MatchFailure.class("topmost"));
              break split_root$;
            }
            tmp65 = globalThis.Object.freeze(new EvaluationContext1.App.class(output3$1, rhs2.input));
            tmp64 = globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp65, null));
            break split_root$;
          }
          tmp66 = globalThis.Object.freeze(new EvaluationContext1.App.class(lhs2.input, output3$));
          tmp64 = globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp66, null));
        }
        return globalThis.Object.freeze({
          p_1: p_1$,
          p_2: p_2$,
          p_3: tmp64
        })
      }
      tmp67 = globalThis.Object.freeze(new runtime.MatchFailure.class("never"));
      tmp68 = globalThis.Object.freeze(new runtime.MatchFailure.class("never"));
      tmp69 = globalThis.Object.freeze(new runtime.MatchFailure.class("never"));
      return globalThis.Object.freeze({
        p_1: tmp67,
        p_2: tmp68,
        p_3: tmp69
      });
    });
    matcher1$ = lambda1;
    lambda2 = (undefined, function (input) {
      let name, result8$, output8$, fieldBindings1, bindings4, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35;
      if (input instanceof EvaluationContext1.Var.class) {
        if (input instanceof Object) {
          if ("name" in input) {
            name = input.name;
            tmp29 = runtime.safeCall(matcher5$(name));
            tmp30 = globalThis.Object.freeze({
              input: name,
              result: tmp29
            });
          } else {
            tmp31 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
            tmp30 = globalThis.Object.freeze({
              input: null,
              result: tmp31
            });
          }
        } else {
          tmp32 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
          tmp30 = globalThis.Object.freeze({
            input: null,
            result: tmp32
          });
        }
        result8$ = tmp30.result;
        if (result8$ instanceof runtime.MatchSuccess.class) {
          output8$ = result8$.output;
          bindings4 = result8$.bindings;
          fieldBindings1 = globalThis.Object.freeze({
            x: output8$
          });
          tmp33 = globalThis.Object.freeze({
            ...fieldBindings1,
            ...bindings4
          });
          tmp34 = globalThis.Object.freeze(new runtime.MatchSuccess.class(input, tmp33));
          return tmp34
        }
        tmp34 = globalThis.Object.freeze(new runtime.MatchFailure.class("topmost"));
        return tmp34;
      }
      tmp35 = globalThis.Object.freeze(new runtime.MatchFailure.class("never"));
      return tmp35;
    });
    matcher3$ = lambda2;
    lambda3 = (undefined, function (input) {
      let tmp29, tmp30;
      tmp29 = globalThis.Object.freeze({
        m: input
      });
      tmp30 = globalThis.Object.freeze(new runtime.MatchSuccess.class(input, tmp29));
      return tmp30
    });
    matcher4$ = lambda3;
    lambda4 = (undefined, function (input) {
      let lhs1, rhs1, lhs2, rhs2, p_4$, result4$1, output4$1, fieldBindings1, result1$1, result3$2, output3$, result2$1, result5$1, result3$3, output3$1, bindings4, bindings5, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61;
      if (input instanceof EvaluationContext1.Abs.class) {
        tmp29 = globalThis.Object.freeze({
          n: input
        });
        tmp30 = globalThis.Object.freeze(new runtime.MatchSuccess.class(input, tmp29));
        tmp31 = globalThis.Object.freeze(new runtime.MatchFailure.class("never"));
        tmp32 = globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
        return globalThis.Object.freeze({
          p_4: tmp30,
          p_3: tmp31,
          p_5: tmp32
        })
      } else if (input instanceof EvaluationContext1.App.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs2 = input.lhs;
            tmp33 = runtime.safeCall(matcher1$(lhs2));
            tmp34 = globalThis.Object.freeze({
              input: lhs2,
              result: tmp33
            });
          } else {
            tmp35 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
            tmp36 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
            tmp37 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
            tmp38 = globalThis.Object.freeze({
              p_1: tmp35,
              p_2: tmp36,
              p_3: tmp37
            });
            tmp34 = globalThis.Object.freeze({
              input: null,
              result: tmp38
            });
          }
        } else {
          tmp39 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
          tmp40 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
          tmp41 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
          tmp42 = globalThis.Object.freeze({
            p_1: tmp39,
            p_2: tmp40,
            p_3: tmp41
          });
          tmp34 = globalThis.Object.freeze({
            input: null,
            result: tmp42
          });
        }
        lhs1 = tmp34;
        if (input instanceof Object) {
          if ("rhs" in input) {
            rhs2 = input.rhs;
            tmp43 = runtime.safeCall(matcher2$(rhs2));
            tmp44 = globalThis.Object.freeze({
              input: rhs2,
              result: tmp43
            });
          } else {
            tmp45 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
            tmp46 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
            tmp47 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
            tmp48 = globalThis.Object.freeze({
              p_4: tmp45,
              p_3: tmp46,
              p_5: tmp47
            });
            tmp44 = globalThis.Object.freeze({
              input: null,
              result: tmp48
            });
          }
        } else {
          tmp49 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
          tmp50 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
          tmp51 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
          tmp52 = globalThis.Object.freeze({
            p_4: tmp49,
            p_3: tmp50,
            p_5: tmp51
          });
          tmp44 = globalThis.Object.freeze({
            input: null,
            result: tmp52
          });
        }
        rhs1 = tmp44;
        tmp53 = globalThis.Object.freeze(new runtime.MatchFailure.class("never"));
        p_4$ = tmp53;
        split_root$: {
          split_1$: {
            split_2$: {
              result1$1 = tmp34.result.p_1;
              if (result1$1 instanceof runtime.MatchSuccess.class) {
                result1$1.output;
                bindings4 = result1$1.bindings;
                result4$1 = tmp44.result.p_4;
                if (result4$1 instanceof runtime.MatchSuccess.class) {
                  let inlinedVal1, x, n, m;
                  output4$1 = result4$1.output;
                  bindings5 = result4$1.bindings;
                  fieldBindings1 = globalThis.Object.freeze({
                    n: output4$1
                  });
                  tmp54 = globalThis.Object.freeze({
                    ...bindings4,
                    ...fieldBindings1,
                    ...bindings5
                  });
                  x = tmp54.x;
                  m = tmp54.m;
                  n = tmp54.n;
                  inlinedVal1 = EvaluationContext.subst(m, x, n);
                  tmp55 = globalThis.Object.freeze(new runtime.MatchSuccess.class(inlinedVal1, null));
                  break split_root$
                }
                result2$1 = tmp34.result.p_2;
                if (result2$1 instanceof runtime.MatchSuccess.class) {
                  result2$1.output;
                  result2$1.bindings;
                  result3$2 = tmp44.result.p_3;
                  if (result3$2 instanceof runtime.MatchSuccess.class) {
                    output3$ = result3$2.output;
                    result3$2.bindings;
                    break split_1$
                  }
                  result3$3 = tmp34.result.p_3;
                  if (result3$3 instanceof runtime.MatchSuccess.class) {
                    output3$1 = result3$3.output;
                    result3$3.bindings;
                    result5$1 = tmp44.result.p_5;
                    if (result5$1 instanceof runtime.MatchSuccess.class) {
                      result5$1.output;
                      result5$1.bindings;
                      break split_2$
                    }
                  }
                } else {
                  result3$3 = tmp34.result.p_3;
                  if (result3$3 instanceof runtime.MatchSuccess.class) {
                    output3$1 = result3$3.output;
                    result3$3.bindings;
                    result5$1 = tmp44.result.p_5;
                    if (result5$1 instanceof runtime.MatchSuccess.class) {
                      result5$1.output;
                      result5$1.bindings;
                      break split_2$
                    }
                  }
                }
              } else {
                result2$1 = tmp34.result.p_2;
                if (result2$1 instanceof runtime.MatchSuccess.class) {
                  result2$1.output;
                  result2$1.bindings;
                  result3$2 = tmp44.result.p_3;
                  if (result3$2 instanceof runtime.MatchSuccess.class) {
                    output3$ = result3$2.output;
                    result3$2.bindings;
                    break split_1$
                  }
                  result3$3 = tmp34.result.p_3;
                  if (result3$3 instanceof runtime.MatchSuccess.class) {
                    output3$1 = result3$3.output;
                    result3$3.bindings;
                    result5$1 = tmp44.result.p_5;
                    if (result5$1 instanceof runtime.MatchSuccess.class) {
                      result5$1.output;
                      result5$1.bindings;
                      break split_2$
                    }
                  }
                } else {
                  result3$3 = tmp34.result.p_3;
                  if (result3$3 instanceof runtime.MatchSuccess.class) {
                    output3$1 = result3$3.output;
                    result3$3.bindings;
                    result5$1 = tmp44.result.p_5;
                    if (result5$1 instanceof runtime.MatchSuccess.class) {
                      result5$1.output;
                      result5$1.bindings;
                      break split_2$
                    }
                  }
                }
              }
              tmp55 = globalThis.Object.freeze(new runtime.MatchFailure.class("topmost"));
              break split_root$;
            }
            tmp56 = globalThis.Object.freeze(new EvaluationContext1.App.class(output3$1, rhs1.input));
            tmp55 = globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp56, null));
            break split_root$;
          }
          tmp57 = globalThis.Object.freeze(new EvaluationContext1.App.class(lhs1.input, output3$));
          tmp55 = globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp57, null));
        }
        tmp58 = globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
        return globalThis.Object.freeze({
          p_4: p_4$,
          p_3: tmp55,
          p_5: tmp58
        })
      }
      tmp59 = globalThis.Object.freeze(new runtime.MatchFailure.class("never"));
      tmp60 = globalThis.Object.freeze(new runtime.MatchFailure.class("never"));
      tmp61 = globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
      return globalThis.Object.freeze({
        p_4: tmp59,
        p_3: tmp60,
        p_5: tmp61
      });
    });
    matcher2$ = lambda4;
    if (t instanceof EvaluationContext1.App.class) {
      if (t instanceof Object) {
        if ("lhs" in t) {
          lhs = t.lhs;
          tmp = runtime.safeCall(matcher1$(lhs));
          tmp1 = globalThis.Object.freeze({
            input: lhs,
            result: tmp
          });
        } else {
          tmp2 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
          tmp3 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
          tmp4 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
          tmp5 = globalThis.Object.freeze({
            p_1: tmp2,
            p_2: tmp3,
            p_3: tmp4
          });
          tmp1 = globalThis.Object.freeze({
            input: null,
            result: tmp5
          });
        }
      } else {
        tmp6 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
        tmp7 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
        tmp8 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
        tmp9 = globalThis.Object.freeze({
          p_1: tmp6,
          p_2: tmp7,
          p_3: tmp8
        });
        tmp1 = globalThis.Object.freeze({
          input: null,
          result: tmp9
        });
      }
      if (t instanceof Object) {
        if ("rhs" in t) {
          rhs = t.rhs;
          tmp10 = runtime.safeCall(matcher2$(rhs));
          tmp11 = globalThis.Object.freeze({
            input: rhs,
            result: tmp10
          });
        } else {
          tmp12 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
          tmp13 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
          tmp14 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
          tmp15 = globalThis.Object.freeze({
            p_4: tmp12,
            p_3: tmp13,
            p_5: tmp14
          });
          tmp11 = globalThis.Object.freeze({
            input: null,
            result: tmp15
          });
        }
      } else {
        tmp16 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
        tmp17 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
        tmp18 = globalThis.Object.freeze(new runtime.MatchFailure.class("empty"));
        tmp19 = globalThis.Object.freeze({
          p_4: tmp16,
          p_3: tmp17,
          p_5: tmp18
        });
        tmp11 = globalThis.Object.freeze({
          input: null,
          result: tmp19
        });
      }
      split_root$: {
        split_1$: {
          let lambda5;
          lambda5 = (undefined, function (args) {
            let res;
            res = args.res;
            return res
          });
          result1$ = tmp1.result.p_1;
          if (result1$ instanceof runtime.MatchSuccess.class) {
            result1$.output;
            bindings1 = result1$.bindings;
            result4$ = tmp11.result.p_4;
            if (result4$ instanceof runtime.MatchSuccess.class) {
              let inlinedVal1, x, n, m;
              output4$ = result4$.output;
              bindings2 = result4$.bindings;
              fieldBindings = globalThis.Object.freeze({
                n: output4$
              });
              tmp20 = globalThis.Object.freeze({
                ...bindings1,
                ...fieldBindings,
                ...bindings2
              });
              x = tmp20.x;
              m = tmp20.m;
              n = tmp20.n;
              inlinedVal1 = EvaluationContext.subst(m, x, n);
              bindings3 = globalThis.Object.freeze({
                res: inlinedVal1
              });
              transformResult2 = runtime.safeCall(lambda5(bindings3));
              tmp21 = globalThis.Object.freeze(new runtime.MatchSuccess.class(transformResult2, null));
              break split_root$
            }
            result2$ = tmp1.result.p_2;
            if (result2$ instanceof runtime.MatchSuccess.class) {
              result2$.output;
              result2$.bindings;
              result3$ = tmp11.result.p_3;
              if (result3$ instanceof runtime.MatchSuccess.class) {
                result3$.output;
                result3$.bindings;
                tmp22 = globalThis.Object.freeze({
                  res: t
                });
                transformResult1 = runtime.safeCall(lambda5(tmp22));
                tmp21 = globalThis.Object.freeze(new runtime.MatchSuccess.class(transformResult1, null));
                break split_root$
              }
              result3$1 = tmp1.result.p_3;
              if (result3$1 instanceof runtime.MatchSuccess.class) {
                result3$1.output;
                result3$1.bindings;
                result5$ = tmp11.result.p_5;
                if (result5$ instanceof runtime.MatchSuccess.class) {
                  result5$.output;
                  result5$.bindings;
                  tmp23 = globalThis.Object.freeze({
                    res: t
                  });
                  transformResult = runtime.safeCall(lambda5(tmp23));
                  bindings = null;
                  break split_1$
                }
              }
            } else {
              result3$1 = tmp1.result.p_3;
              if (result3$1 instanceof runtime.MatchSuccess.class) {
                result3$1.output;
                result3$1.bindings;
                result5$ = tmp11.result.p_5;
                if (result5$ instanceof runtime.MatchSuccess.class) {
                  result5$.output;
                  result5$.bindings;
                  tmp24 = globalThis.Object.freeze({
                    res: t
                  });
                  transformResult = runtime.safeCall(lambda5(tmp24));
                  bindings = null;
                  break split_1$
                }
              }
            }
          } else {
            result2$ = tmp1.result.p_2;
            if (result2$ instanceof runtime.MatchSuccess.class) {
              result2$.output;
              result2$.bindings;
              result3$ = tmp11.result.p_3;
              if (result3$ instanceof runtime.MatchSuccess.class) {
                result3$.output;
                result3$.bindings;
                tmp25 = globalThis.Object.freeze({
                  res: t
                });
                transformResult1 = runtime.safeCall(lambda5(tmp25));
                tmp21 = globalThis.Object.freeze(new runtime.MatchSuccess.class(transformResult1, null));
                break split_root$
              }
              result3$1 = tmp1.result.p_3;
              if (result3$1 instanceof runtime.MatchSuccess.class) {
                result3$1.output;
                result3$1.bindings;
                result5$ = tmp11.result.p_5;
                if (result5$ instanceof runtime.MatchSuccess.class) {
                  result5$.output;
                  result5$.bindings;
                  tmp26 = globalThis.Object.freeze({
                    res: t
                  });
                  transformResult = runtime.safeCall(lambda5(tmp26));
                  bindings = null;
                  break split_1$
                }
              }
            } else {
              result3$1 = tmp1.result.p_3;
              if (result3$1 instanceof runtime.MatchSuccess.class) {
                result3$1.output;
                result3$1.bindings;
                result5$ = tmp11.result.p_5;
                if (result5$ instanceof runtime.MatchSuccess.class) {
                  result5$.output;
                  result5$.bindings;
                  tmp27 = globalThis.Object.freeze({
                    res: t
                  });
                  transformResult = runtime.safeCall(lambda5(tmp27));
                  bindings = null;
                  break split_1$
                }
              }
            }
          }
          tmp21 = globalThis.Object.freeze(new runtime.MatchFailure.class("topmost"));
          break split_root$;
        }
        tmp21 = globalThis.Object.freeze(new runtime.MatchSuccess.class(transformResult, bindings));
      }
      inlinedVal = tmp21;
    } else {
      tmp28 = globalThis.Object.freeze(new runtime.MatchFailure.class("never"));
      inlinedVal = tmp28;
    }
    if (inlinedVal instanceof runtime.MatchSuccess.class) {
      patternOutput = inlinedVal.output;
      inlinedVal.bindings;
      return patternOutput
    }
    return runtime.Unit;
  } 
  static isStep_optimized_matchOnly(t) {
    let matcher1$, matcher2$, matcher3$, matcher4$, matcher5$, lambda, lambda1, lambda2, lambda3, lambda4, inlinedVal, lhs, rhs, result4$, result1$, result3$, result2$, result5$, result3$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    lambda = (undefined, function (input) {
      let lhs1, rhs1, result4$1, result1$1, result3$2, result2$1, result5$1, result3$3, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16;
      if (input instanceof EvaluationContext1.Abs.class) {
        return globalThis.Object.freeze({
          p_4: true,
          p_3: false,
          p_5: true
        })
      } else if (input instanceof EvaluationContext1.App.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs1 = input.lhs;
            tmp9 = runtime.safeCall(matcher1$(lhs1));
            tmp10 = globalThis.Object.freeze({
              input: lhs1,
              result: tmp9
            });
          } else {
            tmp11 = globalThis.Object.freeze({
              p_1: false,
              p_2: false,
              p_3: false
            });
            tmp10 = globalThis.Object.freeze({
              input: null,
              result: tmp11
            });
          }
        } else {
          tmp12 = globalThis.Object.freeze({
            p_1: false,
            p_2: false,
            p_3: false
          });
          tmp10 = globalThis.Object.freeze({
            input: null,
            result: tmp12
          });
        }
        if (input instanceof Object) {
          if ("rhs" in input) {
            rhs1 = input.rhs;
            tmp13 = runtime.safeCall(matcher2$(rhs1));
            tmp14 = globalThis.Object.freeze({
              input: rhs1,
              result: tmp13
            });
          } else {
            tmp15 = globalThis.Object.freeze({
              p_4: false,
              p_3: false,
              p_5: false
            });
            tmp14 = globalThis.Object.freeze({
              input: null,
              result: tmp15
            });
          }
        } else {
          tmp16 = globalThis.Object.freeze({
            p_4: false,
            p_3: false,
            p_5: false
          });
          tmp14 = globalThis.Object.freeze({
            input: null,
            result: tmp16
          });
        }
        result1$1 = tmp10.result.p_1;
        if (result1$1 === true) {
          result4$1 = tmp14.result.p_4;
          if (result4$1 === true) {
            return globalThis.Object.freeze({
              p_4: false,
              p_3: true,
              p_5: true
            })
          }
          result2$1 = tmp10.result.p_2;
          if (result2$1 === true) {
            result3$2 = tmp14.result.p_3;
            if (result3$2 === true) {
              return globalThis.Object.freeze({
                p_4: false,
                p_3: true,
                p_5: true
              })
            }
            result3$3 = tmp10.result.p_3;
            if (result3$3 === true) {
              result5$1 = tmp14.result.p_5;
              if (result5$1 === true) {
                return globalThis.Object.freeze({
                  p_4: false,
                  p_3: true,
                  p_5: true
                })
              }
              return globalThis.Object.freeze({
                p_4: false,
                p_3: false,
                p_5: true
              });
            }
            return globalThis.Object.freeze({
              p_4: false,
              p_3: false,
              p_5: true
            });
          }
          result3$3 = tmp10.result.p_3;
          if (result3$3 === true) {
            result5$1 = tmp14.result.p_5;
            if (result5$1 === true) {
              return globalThis.Object.freeze({
                p_4: false,
                p_3: true,
                p_5: true
              })
            }
            return globalThis.Object.freeze({
              p_4: false,
              p_3: false,
              p_5: true
            });
          }
          return globalThis.Object.freeze({
            p_4: false,
            p_3: false,
            p_5: true
          });
        }
        result2$1 = tmp10.result.p_2;
        if (result2$1 === true) {
          result3$2 = tmp14.result.p_3;
          if (result3$2 === true) {
            return globalThis.Object.freeze({
              p_4: false,
              p_3: true,
              p_5: true
            })
          }
          result3$3 = tmp10.result.p_3;
          if (result3$3 === true) {
            result5$1 = tmp14.result.p_5;
            if (result5$1 === true) {
              return globalThis.Object.freeze({
                p_4: false,
                p_3: true,
                p_5: true
              })
            }
            return globalThis.Object.freeze({
              p_4: false,
              p_3: false,
              p_5: true
            });
          }
          return globalThis.Object.freeze({
            p_4: false,
            p_3: false,
            p_5: true
          });
        }
        result3$3 = tmp10.result.p_3;
        if (result3$3 === true) {
          result5$1 = tmp14.result.p_5;
          if (result5$1 === true) {
            return globalThis.Object.freeze({
              p_4: false,
              p_3: true,
              p_5: true
            })
          }
          return globalThis.Object.freeze({
            p_4: false,
            p_3: false,
            p_5: true
          });
        }
        return globalThis.Object.freeze({
          p_4: false,
          p_3: false,
          p_5: true
        });
      }
      return globalThis.Object.freeze({
        p_4: false,
        p_3: false,
        p_5: true
      });
    });
    matcher2$ = lambda;
    lambda1 = (undefined, function (input) {
      let name, result8$, tmp9, tmp10;
      if (input instanceof EvaluationContext1.Var.class) {
        if (input instanceof Object) {
          if ("name" in input) {
            name = input.name;
            tmp9 = runtime.safeCall(matcher5$(name));
            tmp10 = globalThis.Object.freeze({
              input: name,
              result: tmp9
            });
          } else {
            tmp10 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp10 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        result8$ = tmp10.result;
        if (result8$ === true) {
          return true
        }
        return false;
      }
      return false;
    });
    matcher3$ = lambda1;
    lambda2 = (undefined, function (input) {
      let lhs1, rhs1, result7$, result6$, lhs2, rhs2, result4$1, result1$1, result3$2, result2$1, result5$1, result3$3, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20;
      if (input instanceof EvaluationContext1.Abs.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs1 = input.lhs;
            tmp9 = runtime.safeCall(matcher3$(lhs1));
            tmp10 = globalThis.Object.freeze({
              input: lhs1,
              result: tmp9
            });
          } else {
            tmp10 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp10 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        if (input instanceof Object) {
          if ("rhs" in input) {
            rhs1 = input.rhs;
            tmp11 = runtime.safeCall(matcher4$(rhs1));
            tmp12 = globalThis.Object.freeze({
              input: rhs1,
              result: tmp11
            });
          } else {
            tmp12 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp12 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        result6$ = tmp10.result;
        if (result6$ === true) {
          result7$ = tmp12.result;
          if (result7$ === true) {
            return globalThis.Object.freeze({
              p_1: true,
              p_2: true,
              p_3: false
            })
          }
          return globalThis.Object.freeze({
            p_1: false,
            p_2: true,
            p_3: false
          });
        }
        return globalThis.Object.freeze({
          p_1: false,
          p_2: true,
          p_3: false
        });
      } else if (input instanceof EvaluationContext1.App.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs2 = input.lhs;
            tmp13 = runtime.safeCall(matcher1$(lhs2));
            tmp14 = globalThis.Object.freeze({
              input: lhs2,
              result: tmp13
            });
          } else {
            tmp15 = globalThis.Object.freeze({
              p_1: false,
              p_2: false,
              p_3: false
            });
            tmp14 = globalThis.Object.freeze({
              input: null,
              result: tmp15
            });
          }
        } else {
          tmp16 = globalThis.Object.freeze({
            p_1: false,
            p_2: false,
            p_3: false
          });
          tmp14 = globalThis.Object.freeze({
            input: null,
            result: tmp16
          });
        }
        if (input instanceof Object) {
          if ("rhs" in input) {
            rhs2 = input.rhs;
            tmp17 = runtime.safeCall(matcher2$(rhs2));
            tmp18 = globalThis.Object.freeze({
              input: rhs2,
              result: tmp17
            });
          } else {
            tmp19 = globalThis.Object.freeze({
              p_4: false,
              p_3: false,
              p_5: false
            });
            tmp18 = globalThis.Object.freeze({
              input: null,
              result: tmp19
            });
          }
        } else {
          tmp20 = globalThis.Object.freeze({
            p_4: false,
            p_3: false,
            p_5: false
          });
          tmp18 = globalThis.Object.freeze({
            input: null,
            result: tmp20
          });
        }
        result1$1 = tmp14.result.p_1;
        if (result1$1 === true) {
          result4$1 = tmp18.result.p_4;
          if (result4$1 === true) {
            return globalThis.Object.freeze({
              p_1: false,
              p_2: false,
              p_3: true
            })
          }
          result2$1 = tmp14.result.p_2;
          if (result2$1 === true) {
            result3$2 = tmp18.result.p_3;
            if (result3$2 === true) {
              return globalThis.Object.freeze({
                p_1: false,
                p_2: false,
                p_3: true
              })
            }
            result3$3 = tmp14.result.p_3;
            if (result3$3 === true) {
              result5$1 = tmp18.result.p_5;
              if (result5$1 === true) {
                return globalThis.Object.freeze({
                  p_1: false,
                  p_2: false,
                  p_3: true
                })
              }
              return globalThis.Object.freeze({
                p_1: false,
                p_2: false,
                p_3: false
              });
            }
            return globalThis.Object.freeze({
              p_1: false,
              p_2: false,
              p_3: false
            });
          }
          result3$3 = tmp14.result.p_3;
          if (result3$3 === true) {
            result5$1 = tmp18.result.p_5;
            if (result5$1 === true) {
              return globalThis.Object.freeze({
                p_1: false,
                p_2: false,
                p_3: true
              })
            }
            return globalThis.Object.freeze({
              p_1: false,
              p_2: false,
              p_3: false
            });
          }
          return globalThis.Object.freeze({
            p_1: false,
            p_2: false,
            p_3: false
          });
        }
        result2$1 = tmp14.result.p_2;
        if (result2$1 === true) {
          result3$2 = tmp18.result.p_3;
          if (result3$2 === true) {
            return globalThis.Object.freeze({
              p_1: false,
              p_2: false,
              p_3: true
            })
          }
          result3$3 = tmp14.result.p_3;
          if (result3$3 === true) {
            result5$1 = tmp18.result.p_5;
            if (result5$1 === true) {
              return globalThis.Object.freeze({
                p_1: false,
                p_2: false,
                p_3: true
              })
            }
            return globalThis.Object.freeze({
              p_1: false,
              p_2: false,
              p_3: false
            });
          }
          return globalThis.Object.freeze({
            p_1: false,
            p_2: false,
            p_3: false
          });
        }
        result3$3 = tmp14.result.p_3;
        if (result3$3 === true) {
          result5$1 = tmp18.result.p_5;
          if (result5$1 === true) {
            return globalThis.Object.freeze({
              p_1: false,
              p_2: false,
              p_3: true
            })
          }
          return globalThis.Object.freeze({
            p_1: false,
            p_2: false,
            p_3: false
          });
        }
        return globalThis.Object.freeze({
          p_1: false,
          p_2: false,
          p_3: false
        });
      }
      return globalThis.Object.freeze({
        p_1: false,
        p_2: false,
        p_3: false
      });
    });
    matcher1$ = lambda2;
    lambda3 = (undefined, function (input) {
      return true
    });
    matcher4$ = lambda3;
    lambda4 = (undefined, function (input) {
      return true
    });
    matcher5$ = lambda4;
    if (t instanceof EvaluationContext1.App.class) {
      if (t instanceof Object) {
        if ("lhs" in t) {
          lhs = t.lhs;
          tmp = runtime.safeCall(matcher1$(lhs));
          tmp1 = globalThis.Object.freeze({
            input: lhs,
            result: tmp
          });
        } else {
          tmp2 = globalThis.Object.freeze({
            p_1: false,
            p_2: false,
            p_3: false
          });
          tmp1 = globalThis.Object.freeze({
            input: null,
            result: tmp2
          });
        }
      } else {
        tmp3 = globalThis.Object.freeze({
          p_1: false,
          p_2: false,
          p_3: false
        });
        tmp1 = globalThis.Object.freeze({
          input: null,
          result: tmp3
        });
      }
      if (t instanceof Object) {
        if ("rhs" in t) {
          rhs = t.rhs;
          tmp4 = runtime.safeCall(matcher2$(rhs));
          tmp5 = globalThis.Object.freeze({
            input: rhs,
            result: tmp4
          });
        } else {
          tmp6 = globalThis.Object.freeze({
            p_4: false,
            p_3: false,
            p_5: false
          });
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: tmp6
          });
        }
      } else {
        tmp7 = globalThis.Object.freeze({
          p_4: false,
          p_3: false,
          p_5: false
        });
        tmp5 = globalThis.Object.freeze({
          input: null,
          result: tmp7
        });
      }
      result1$ = tmp1.result.p_1;
      if (result1$ === true) {
        result4$ = tmp5.result.p_4;
        if (result4$ === true) {
          tmp8 = true;
        } else {
          result2$ = tmp1.result.p_2;
          if (result2$ === true) {
            result3$ = tmp5.result.p_3;
            if (result3$ === true) {
              tmp8 = true;
            } else {
              result3$1 = tmp1.result.p_3;
              if (result3$1 === true) {
                result5$ = tmp5.result.p_5;
                if (result5$ === true) {
                  tmp8 = true;
                } else {
                  tmp8 = false;
                }
              } else {
                tmp8 = false;
              }
            }
          } else {
            result3$1 = tmp1.result.p_3;
            if (result3$1 === true) {
              result5$ = tmp5.result.p_5;
              if (result5$ === true) {
                tmp8 = true;
              } else {
                tmp8 = false;
              }
            } else {
              tmp8 = false;
            }
          }
        }
        inlinedVal = tmp8;
      } else {
        result2$ = tmp1.result.p_2;
        if (result2$ === true) {
          result3$ = tmp5.result.p_3;
          if (result3$ === true) {
            tmp8 = true;
          } else {
            result3$1 = tmp1.result.p_3;
            if (result3$1 === true) {
              result5$ = tmp5.result.p_5;
              if (result5$ === true) {
                tmp8 = true;
              } else {
                tmp8 = false;
              }
            } else {
              tmp8 = false;
            }
          }
        } else {
          result3$1 = tmp1.result.p_3;
          if (result3$1 === true) {
            result5$ = tmp5.result.p_5;
            if (result5$ === true) {
              tmp8 = true;
            } else {
              tmp8 = false;
            }
          } else {
            tmp8 = false;
          }
        }
        inlinedVal = tmp8;
      }
    } else {
      inlinedVal = false;
    }
    if (inlinedVal === true) {
      return true
    }
    return false;
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "EvaluationContext"]; 
});
let EvaluationContext = EvaluationContext1; export default EvaluationContext;
