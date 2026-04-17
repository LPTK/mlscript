const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
let DnfCnf1;
(class DnfCnf {
  static {
    DnfCnf1 = this
  }
  static {
    (class Formula {
      static {
        DnfCnf.Formula = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Formula"]; 
    });
    this.Var = function Var(name) {
      return globalThis.Object.freeze(new Var.class(name));
    };
    (class Var extends DnfCnf.Formula {
      static {
        DnfCnf.Var.class = this
      }
      constructor(name) {
        super();
        this.name = name;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Var", ["name"]]; 
    });
    this.Pred = function Pred(name, arg) {
      return globalThis.Object.freeze(new Pred.class(name, arg));
    };
    (class Pred extends DnfCnf.Formula {
      static {
        DnfCnf.Pred.class = this
      }
      constructor(name, arg) {
        super();
        this.name = name;
        this.arg = arg;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Pred", ["name", "arg"]]; 
    });
    this.And = function And(left, right) {
      return globalThis.Object.freeze(new And.class(left, right));
    };
    (class And extends DnfCnf.Formula {
      static {
        DnfCnf.And.class = this
      }
      constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "And", ["left", "right"]]; 
    });
    this.Or = function Or(left, right) {
      return globalThis.Object.freeze(new Or.class(left, right));
    };
    (class Or extends DnfCnf.Formula {
      static {
        DnfCnf.Or.class = this
      }
      constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Or", ["left", "right"]]; 
    });
    (class Dnf {
      static {
        new this
      }
      constructor() {
        DnfCnf.Dnf = this;
        globalThis.Object.freeze(this);
      }
      unapply(P, input) {
        let patternArgument0$, unapplyResult, output, arg$Or$0$, arg$Or$1$, patternArgument0$1, unapplyResult1, output1, patternArgument0$2, unapplyResult2, output2, OrOutput, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9;
        if (input instanceof DnfCnf.Or.class) {
          arg$Or$0$ = input.left;
          arg$Or$1$ = input.right;
          lambda = (undefined, function (input1) {
            let matchSuccess_P, output3;
            matchSuccess_P = runtime.safeCall(P.unapply(input1));
            if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
              output3 = matchSuccess_P.output;
              matchSuccess_P.bindings;
              return globalThis.Object.freeze(new runtime.MatchSuccess.class(output3, null))
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
          });
          lambda1 = (undefined, function (input1) {
            let matchSuccess_P, outputPair, output3, remaining, tmp;
            matchSuccess_P = runtime.safeCall(P.unapplyStringPrefix(input1));
            if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
              outputPair = matchSuccess_P.output;
              matchSuccess_P.bindings;
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
          unapplyResult1 = DnfCnf.Dnf.unapply(patternArgument0$1, arg$Or$0$);
          if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
            output1 = unapplyResult1.output;
            unapplyResult1.bindings;
            lambda2 = (undefined, function (input1) {
              let matchSuccess_P, output3;
              matchSuccess_P = runtime.safeCall(P.unapply(input1));
              if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
                output3 = matchSuccess_P.output;
                matchSuccess_P.bindings;
                return globalThis.Object.freeze(new runtime.MatchSuccess.class(output3, null))
              }
              return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
            });
            lambda3 = (undefined, function (input1) {
              let matchSuccess_P, outputPair, output3, remaining, tmp;
              matchSuccess_P = runtime.safeCall(P.unapplyStringPrefix(input1));
              if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
                outputPair = matchSuccess_P.output;
                matchSuccess_P.bindings;
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
            patternArgument0$2 = globalThis.Object.freeze({
              unapply: lambda2,
              unapplyStringPrefix: lambda3
            });
            unapplyResult2 = DnfCnf.Dnf.unapply(patternArgument0$2, arg$Or$1$);
            if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
              output2 = unapplyResult2.output;
              unapplyResult2.bindings;
              OrOutput = globalThis.Object.freeze(new DnfCnf.Or.class(output1, output2));
              return globalThis.Object.freeze(new runtime.MatchSuccess.class(OrOutput, null))
            }
            lambda4 = (undefined, function (input1) {
              let matchSuccess_P, output3;
              matchSuccess_P = runtime.safeCall(P.unapply(input1));
              if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
                output3 = matchSuccess_P.output;
                matchSuccess_P.bindings;
                return globalThis.Object.freeze(new runtime.MatchSuccess.class(output3, null))
              }
              return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
            });
            lambda5 = (undefined, function (input1) {
              let matchSuccess_P, outputPair, output3, remaining, tmp;
              matchSuccess_P = runtime.safeCall(P.unapplyStringPrefix(input1));
              if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
                outputPair = matchSuccess_P.output;
                matchSuccess_P.bindings;
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
            unapplyResult = DnfCnf.Atoms.unapply(patternArgument0$, input);
            if (unapplyResult instanceof runtime.MatchSuccess.class) {
              output = unapplyResult.output;
              unapplyResult.bindings;
            } else {
              return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
            }
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(output, null))
          }
          lambda6 = (undefined, function (input1) {
            let matchSuccess_P, output3;
            matchSuccess_P = runtime.safeCall(P.unapply(input1));
            if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
              output3 = matchSuccess_P.output;
              matchSuccess_P.bindings;
              return globalThis.Object.freeze(new runtime.MatchSuccess.class(output3, null))
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
          });
          lambda7 = (undefined, function (input1) {
            let matchSuccess_P, outputPair, output3, remaining, tmp;
            matchSuccess_P = runtime.safeCall(P.unapplyStringPrefix(input1));
            if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
              outputPair = matchSuccess_P.output;
              matchSuccess_P.bindings;
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
            unapply: lambda6,
            unapplyStringPrefix: lambda7
          });
          unapplyResult = DnfCnf.Atoms.unapply(patternArgument0$, input);
          if (unapplyResult instanceof runtime.MatchSuccess.class) {
            output = unapplyResult.output;
            unapplyResult.bindings;
          } else {
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
          }
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(output, null));
        }
        lambda8 = (undefined, function (input1) {
          let matchSuccess_P, output3;
          matchSuccess_P = runtime.safeCall(P.unapply(input1));
          if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
            output3 = matchSuccess_P.output;
            matchSuccess_P.bindings;
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(output3, null))
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        });
        lambda9 = (undefined, function (input1) {
          let matchSuccess_P, outputPair, output3, remaining, tmp;
          matchSuccess_P = runtime.safeCall(P.unapplyStringPrefix(input1));
          if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
            outputPair = matchSuccess_P.output;
            matchSuccess_P.bindings;
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
          unapply: lambda8,
          unapplyStringPrefix: lambda9
        });
        unapplyResult = DnfCnf.Atoms.unapply(patternArgument0$, input);
        if (unapplyResult instanceof runtime.MatchSuccess.class) {
          output = unapplyResult.output;
          unapplyResult.bindings;
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(output, null))
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      } 
      unapplyStringPrefix(P, input) {
        let output, remaining, patternArgument0$, unapplyResult, outputPair, lambda, lambda1, tmp;
        lambda = (undefined, function (input1) {
          let matchSuccess_P, output1;
          matchSuccess_P = runtime.safeCall(P.unapply(input1));
          if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
            output1 = matchSuccess_P.output;
            matchSuccess_P.bindings;
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(output1, null))
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        });
        lambda1 = (undefined, function (input1) {
          let matchSuccess_P, outputPair1, output1, remaining1, tmp1;
          matchSuccess_P = runtime.safeCall(P.unapplyStringPrefix(input1));
          if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
            outputPair1 = matchSuccess_P.output;
            matchSuccess_P.bindings;
            if (runtime.Tuple.isArrayLike(outputPair1) && outputPair1.length === 2) {
              output1 = runtime.Tuple.get(outputPair1, 0);
              remaining1 = runtime.Tuple.get(outputPair1, 1);
              tmp1 = globalThis.Object.freeze([
                output1,
                remaining1
              ]);
              return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp1, null))
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        });
        patternArgument0$ = globalThis.Object.freeze({
          unapply: lambda,
          unapplyStringPrefix: lambda1
        });
        unapplyResult = DnfCnf.Atoms.unapplyStringPrefix(patternArgument0$, input);
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
      static [definitionMetadata] = ["pattern", "Dnf"]; 
    });
    (class Atoms {
      static {
        new this
      }
      constructor() {
        DnfCnf.Atoms = this;
        globalThis.Object.freeze(this);
      }
      unapply(P, input) {
        let patternArgument0$, unapplyResult, output, arg$And$0$, arg$And$1$, patternArgument0$1, unapplyResult1, output1, patternArgument0$2, unapplyResult2, output2, AndOutput, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9;
        if (input instanceof DnfCnf.And.class) {
          arg$And$0$ = input.left;
          arg$And$1$ = input.right;
          lambda = (undefined, function (input1) {
            let matchSuccess_P, output3;
            matchSuccess_P = runtime.safeCall(P.unapply(input1));
            if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
              output3 = matchSuccess_P.output;
              matchSuccess_P.bindings;
              return globalThis.Object.freeze(new runtime.MatchSuccess.class(output3, null))
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
          });
          lambda1 = (undefined, function (input1) {
            let matchSuccess_P, outputPair, output3, remaining, tmp;
            matchSuccess_P = runtime.safeCall(P.unapplyStringPrefix(input1));
            if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
              outputPair = matchSuccess_P.output;
              matchSuccess_P.bindings;
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
          unapplyResult1 = DnfCnf.Atoms.unapply(patternArgument0$1, arg$And$0$);
          if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
            output1 = unapplyResult1.output;
            unapplyResult1.bindings;
            lambda2 = (undefined, function (input1) {
              let matchSuccess_P, output3;
              matchSuccess_P = runtime.safeCall(P.unapply(input1));
              if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
                output3 = matchSuccess_P.output;
                matchSuccess_P.bindings;
                return globalThis.Object.freeze(new runtime.MatchSuccess.class(output3, null))
              }
              return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
            });
            lambda3 = (undefined, function (input1) {
              let matchSuccess_P, outputPair, output3, remaining, tmp;
              matchSuccess_P = runtime.safeCall(P.unapplyStringPrefix(input1));
              if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
                outputPair = matchSuccess_P.output;
                matchSuccess_P.bindings;
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
            patternArgument0$2 = globalThis.Object.freeze({
              unapply: lambda2,
              unapplyStringPrefix: lambda3
            });
            unapplyResult2 = DnfCnf.Atoms.unapply(patternArgument0$2, arg$And$1$);
            if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
              output2 = unapplyResult2.output;
              unapplyResult2.bindings;
              AndOutput = globalThis.Object.freeze(new DnfCnf.And.class(output1, output2));
              return globalThis.Object.freeze(new runtime.MatchSuccess.class(AndOutput, null))
            }
            lambda4 = (undefined, function (input1) {
              let matchSuccess_P, output3;
              matchSuccess_P = runtime.safeCall(P.unapply(input1));
              if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
                output3 = matchSuccess_P.output;
                matchSuccess_P.bindings;
                return globalThis.Object.freeze(new runtime.MatchSuccess.class(output3, null))
              }
              return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
            });
            lambda5 = (undefined, function (input1) {
              let matchSuccess_P, outputPair, output3, remaining, tmp;
              matchSuccess_P = runtime.safeCall(P.unapplyStringPrefix(input1));
              if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
                outputPair = matchSuccess_P.output;
                matchSuccess_P.bindings;
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
            unapplyResult = DnfCnf.Atom.unapply(patternArgument0$, input);
            if (unapplyResult instanceof runtime.MatchSuccess.class) {
              output = unapplyResult.output;
              unapplyResult.bindings;
            } else {
              return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
            }
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(output, null))
          }
          lambda6 = (undefined, function (input1) {
            let matchSuccess_P, output3;
            matchSuccess_P = runtime.safeCall(P.unapply(input1));
            if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
              output3 = matchSuccess_P.output;
              matchSuccess_P.bindings;
              return globalThis.Object.freeze(new runtime.MatchSuccess.class(output3, null))
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
          });
          lambda7 = (undefined, function (input1) {
            let matchSuccess_P, outputPair, output3, remaining, tmp;
            matchSuccess_P = runtime.safeCall(P.unapplyStringPrefix(input1));
            if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
              outputPair = matchSuccess_P.output;
              matchSuccess_P.bindings;
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
            unapply: lambda6,
            unapplyStringPrefix: lambda7
          });
          unapplyResult = DnfCnf.Atom.unapply(patternArgument0$, input);
          if (unapplyResult instanceof runtime.MatchSuccess.class) {
            output = unapplyResult.output;
            unapplyResult.bindings;
          } else {
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
          }
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(output, null));
        }
        lambda8 = (undefined, function (input1) {
          let matchSuccess_P, output3;
          matchSuccess_P = runtime.safeCall(P.unapply(input1));
          if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
            output3 = matchSuccess_P.output;
            matchSuccess_P.bindings;
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(output3, null))
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        });
        lambda9 = (undefined, function (input1) {
          let matchSuccess_P, outputPair, output3, remaining, tmp;
          matchSuccess_P = runtime.safeCall(P.unapplyStringPrefix(input1));
          if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
            outputPair = matchSuccess_P.output;
            matchSuccess_P.bindings;
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
          unapply: lambda8,
          unapplyStringPrefix: lambda9
        });
        unapplyResult = DnfCnf.Atom.unapply(patternArgument0$, input);
        if (unapplyResult instanceof runtime.MatchSuccess.class) {
          output = unapplyResult.output;
          unapplyResult.bindings;
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(output, null))
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      } 
      unapplyStringPrefix(P, input) {
        let output, remaining, patternArgument0$, unapplyResult, outputPair, lambda, lambda1, tmp;
        lambda = (undefined, function (input1) {
          let matchSuccess_P, output1;
          matchSuccess_P = runtime.safeCall(P.unapply(input1));
          if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
            output1 = matchSuccess_P.output;
            matchSuccess_P.bindings;
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(output1, null))
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        });
        lambda1 = (undefined, function (input1) {
          let matchSuccess_P, outputPair1, output1, remaining1, tmp1;
          matchSuccess_P = runtime.safeCall(P.unapplyStringPrefix(input1));
          if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
            outputPair1 = matchSuccess_P.output;
            matchSuccess_P.bindings;
            if (runtime.Tuple.isArrayLike(outputPair1) && outputPair1.length === 2) {
              output1 = runtime.Tuple.get(outputPair1, 0);
              remaining1 = runtime.Tuple.get(outputPair1, 1);
              tmp1 = globalThis.Object.freeze([
                output1,
                remaining1
              ]);
              return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp1, null))
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        });
        patternArgument0$ = globalThis.Object.freeze({
          unapply: lambda,
          unapplyStringPrefix: lambda1
        });
        unapplyResult = DnfCnf.Atom.unapplyStringPrefix(patternArgument0$, input);
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
      static [definitionMetadata] = ["pattern", "Atoms"]; 
    });
    (class Atom {
      static {
        new this
      }
      constructor() {
        DnfCnf.Atom = this;
        globalThis.Object.freeze(this);
      }
      unapply(P, input) {
        let arg$Pred$0$, arg$Pred$1$, matchSuccess_P, output, PredOutput;
        if (input instanceof DnfCnf.Pred.class) {
          arg$Pred$0$ = input.name;
          arg$Pred$1$ = input.arg;
          matchSuccess_P = runtime.safeCall(P.unapply(arg$Pred$1$));
          if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
            output = matchSuccess_P.output;
            matchSuccess_P.bindings;
            PredOutput = globalThis.Object.freeze(new DnfCnf.Pred.class(arg$Pred$0$, output));
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(PredOutput, null))
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        } else if (input instanceof DnfCnf.Var.class) {
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null))
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      } 
      unapplyStringPrefix(P, input) {
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "Atom"]; 
    });
    (class Cnf {
      static {
        new this
      }
      constructor() {
        DnfCnf.Cnf = this;
        globalThis.Object.freeze(this);
      }
      unapply(P, input) {
        let arg$And$0$, arg$And$1$, patternArgument0$, unapplyResult, patternArgument0$1, unapplyResult1, lambda, lambda1, lambda2, lambda3;
        if (input instanceof DnfCnf.And.class) {
          arg$And$0$ = input.left;
          arg$And$1$ = input.right;
          lambda = (undefined, function (input1) {
            let matchSuccess_P, output;
            matchSuccess_P = runtime.safeCall(P.unapply(input1));
            if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
              output = matchSuccess_P.output;
              matchSuccess_P.bindings;
              return globalThis.Object.freeze(new runtime.MatchSuccess.class(output, null))
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
          });
          lambda1 = (undefined, function (input1) {
            let matchSuccess_P, outputPair, output, remaining, tmp;
            matchSuccess_P = runtime.safeCall(P.unapplyStringPrefix(input1));
            if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
              outputPair = matchSuccess_P.output;
              matchSuccess_P.bindings;
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
          });
          patternArgument0$ = globalThis.Object.freeze({
            unapply: lambda,
            unapplyStringPrefix: lambda1
          });
          unapplyResult = DnfCnf.Cnf.unapply(patternArgument0$, arg$And$0$);
          if (unapplyResult instanceof runtime.MatchSuccess.class) {
            unapplyResult.output;
            unapplyResult.bindings;
            lambda2 = (undefined, function (input1) {
              let matchSuccess_P, output;
              matchSuccess_P = runtime.safeCall(P.unapply(input1));
              if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
                output = matchSuccess_P.output;
                matchSuccess_P.bindings;
                return globalThis.Object.freeze(new runtime.MatchSuccess.class(output, null))
              }
              return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
            });
            lambda3 = (undefined, function (input1) {
              let matchSuccess_P, outputPair, output, remaining, tmp;
              matchSuccess_P = runtime.safeCall(P.unapplyStringPrefix(input1));
              if (matchSuccess_P instanceof runtime.MatchSuccess.class) {
                outputPair = matchSuccess_P.output;
                matchSuccess_P.bindings;
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
            });
            patternArgument0$1 = globalThis.Object.freeze({
              unapply: lambda2,
              unapplyStringPrefix: lambda3
            });
            unapplyResult1 = DnfCnf.Cnf.unapply(patternArgument0$1, arg$And$1$);
            if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
              unapplyResult1.output;
              unapplyResult1.bindings;
              return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null))
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      } 
      unapplyStringPrefix(P, input) {
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "Cnf"]; 
    });
    (class DnfOrCnf {
      static {
        new this
      }
      constructor() {
        DnfCnf.DnfOrCnf = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        let patternArgument0$, unapplyResult, output, patternArgument0$1, unapplyResult1, output1;
        patternArgument0$1 = DnfCnf1.DnfOrCnf;
        unapplyResult1 = DnfCnf.Dnf.unapply(patternArgument0$1, input);
        if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
          output1 = unapplyResult1.output;
          unapplyResult1.bindings;
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(output1, null))
        }
        patternArgument0$ = DnfCnf1.DnfOrCnf;
        unapplyResult = DnfCnf.Cnf.unapply(patternArgument0$, input);
        if (unapplyResult instanceof runtime.MatchSuccess.class) {
          output = unapplyResult.output;
          unapplyResult.bindings;
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(output, null))
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      } 
      unapplyStringPrefix(input) {
        let output, remaining, patternArgument0$, unapplyResult, outputPair, output1, remaining1, patternArgument0$1, unapplyResult1, outputPair1, tmp, tmp1;
        patternArgument0$1 = DnfCnf1.DnfOrCnf;
        unapplyResult1 = DnfCnf.Dnf.unapplyStringPrefix(patternArgument0$1, input);
        if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
          outputPair1 = unapplyResult1.output;
          unapplyResult1.bindings;
          output1 = runtime.Tuple.get(outputPair1, 0);
          remaining1 = runtime.Tuple.get(outputPair1, 1);
          tmp = globalThis.Object.freeze([
            output1,
            remaining1
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp, null))
        }
        patternArgument0$ = DnfCnf1.DnfOrCnf;
        unapplyResult = DnfCnf.Cnf.unapplyStringPrefix(patternArgument0$, input);
        if (unapplyResult instanceof runtime.MatchSuccess.class) {
          outputPair = unapplyResult.output;
          unapplyResult.bindings;
          output = runtime.Tuple.get(outputPair, 0);
          remaining = runtime.Tuple.get(outputPair, 1);
          tmp1 = globalThis.Object.freeze([
            output,
            remaining
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp1, null))
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "DnfOrCnf"]; 
    });
    (class DnfAndCnf {
      static {
        new this
      }
      constructor() {
        DnfCnf.DnfAndCnf = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        let patternArgument0$, unapplyResult, output, patternArgument0$1, unapplyResult1, output1, output2;
        patternArgument0$ = DnfCnf1.DnfAndCnf;
        unapplyResult = DnfCnf.Dnf.unapply(patternArgument0$, input);
        if (unapplyResult instanceof runtime.MatchSuccess.class) {
          output = unapplyResult.output;
          unapplyResult.bindings;
          patternArgument0$1 = DnfCnf1.DnfAndCnf;
          unapplyResult1 = DnfCnf.Cnf.unapply(patternArgument0$1, input);
          if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
            output1 = unapplyResult1.output;
            unapplyResult1.bindings;
            output2 = globalThis.Object.freeze([
              output,
              output1
            ]);
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(output2, null))
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      } 
      unapplyStringPrefix(input) {
        let output, remaining, patternArgument0$, unapplyResult, output1, product, patternArgument0$1, unapplyResult1, outputPair, tmp;
        patternArgument0$1 = DnfCnf1.DnfAndCnf;
        unapplyResult1 = DnfCnf.Dnf.unapplyStringPrefix(patternArgument0$1, input);
        if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
          outputPair = unapplyResult1.output;
          unapplyResult1.bindings;
          output = runtime.Tuple.get(outputPair, 0);
          remaining = runtime.Tuple.get(outputPair, 1);
          patternArgument0$ = DnfCnf1.DnfAndCnf;
          unapplyResult = DnfCnf.Cnf.unapply(patternArgument0$, input);
          if (unapplyResult instanceof runtime.MatchSuccess.class) {
            output1 = unapplyResult.output;
            unapplyResult.bindings;
            product = globalThis.Object.freeze([
              output,
              output1
            ]);
            tmp = globalThis.Object.freeze([
              product,
              remaining
            ]);
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp, null))
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "DnfAndCnf"]; 
    });
  }
  static isDnfOrCnf_naive(t) {
    let unapplyResult;
    unapplyResult = runtime.safeCall(DnfCnf.DnfOrCnf.unapply(t));
    if (unapplyResult instanceof runtime.MatchSuccess.class) {
      unapplyResult.output;
      unapplyResult.bindings;
      return true
    }
    return false;
  } 
  static isDnfOrCnf_optimized(t) {
    let matcher__DnfOrCnf$, matcher__DnfᐸDnfOrCnfᐳ$, matcher__AtomsᐸDnfOrCnfᐳ_CnfᐸDnfOrCnfᐳ$, matcher__ꓕ$, matcher__AtomsᐸDnfOrCnfᐳ$, matchSuccess, lambda, lambda1, lambda2, lambda3, lambda4;
    lambda = (undefined, function (input) {
      let left, right, result1$, result1$1, left1, right1, result2$, result2$1, result3$, result3$1, name, arg, result0$, result4$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15;
      if (input instanceof DnfCnf1.Or.class) {
        if (input instanceof Object) {
          if ("left" in input) {
            left = input.left;
            tmp = runtime.safeCall(matcher__DnfᐸDnfOrCnfᐳ$(left));
            tmp1 = globalThis.Object.freeze({
              input: left,
              result: tmp
            });
          } else {
            tmp1 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp1 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        if (input instanceof Object) {
          if ("right" in input) {
            right = input.right;
            tmp2 = runtime.safeCall(matcher__DnfᐸDnfOrCnfᐳ$(right));
            tmp3 = globalThis.Object.freeze({
              input: right,
              result: tmp2
            });
          } else {
            tmp3 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp3 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        result1$1 = tmp1.result;
        if (result1$1 === true) {
          result1$ = tmp3.result;
          if (result1$ === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof DnfCnf1.And.class) {
        if (input instanceof Object) {
          if ("left" in input) {
            left1 = input.left;
            tmp4 = runtime.safeCall(matcher__AtomsᐸDnfOrCnfᐳ_CnfᐸDnfOrCnfᐳ$(left1));
            tmp5 = globalThis.Object.freeze({
              input: left1,
              result: tmp4
            });
          } else {
            tmp6 = globalThis.Object.freeze({
              p_2: false,
              p_3: false
            });
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: tmp6
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            p_2: false,
            p_3: false
          });
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: tmp7
          });
        }
        if (input instanceof Object) {
          if ("right" in input) {
            right1 = input.right;
            tmp8 = runtime.safeCall(matcher__AtomsᐸDnfOrCnfᐳ_CnfᐸDnfOrCnfᐳ$(right1));
            tmp9 = globalThis.Object.freeze({
              input: right1,
              result: tmp8
            });
          } else {
            tmp10 = globalThis.Object.freeze({
              p_2: false,
              p_3: false
            });
            tmp9 = globalThis.Object.freeze({
              input: null,
              result: tmp10
            });
          }
        } else {
          tmp11 = globalThis.Object.freeze({
            p_2: false,
            p_3: false
          });
          tmp9 = globalThis.Object.freeze({
            input: null,
            result: tmp11
          });
        }
        result2$1 = tmp5.result.p_2;
        if (result2$1 === true) {
          result2$ = tmp9.result.p_2;
          if (result2$ === true) {
            return true
          }
          result3$1 = tmp5.result.p_3;
          if (result3$1 === true) {
            result3$ = tmp9.result.p_3;
            if (result3$ === true) {
              return true
            }
            return false;
          }
          return false;
        }
        result3$1 = tmp5.result.p_3;
        if (result3$1 === true) {
          result3$ = tmp9.result.p_3;
          if (result3$ === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof DnfCnf1.Pred.class) {
        if (input instanceof Object) {
          if ("name" in input) {
            name = input.name;
            tmp12 = runtime.safeCall(matcher__ꓕ$(name));
            tmp13 = globalThis.Object.freeze({
              input: name,
              result: tmp12
            });
          } else {
            tmp13 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp13 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        if (input instanceof Object) {
          if ("arg" in input) {
            arg = input.arg;
            tmp14 = runtime.safeCall(matcher__DnfOrCnf$(arg));
            tmp15 = globalThis.Object.freeze({
              input: arg,
              result: tmp14
            });
          } else {
            tmp15 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp15 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        result4$ = tmp13.result;
        if (result4$ === true) {
          result0$ = tmp15.result;
          if (result0$ === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof DnfCnf1.Var.class) {
        return true
      }
      return false;
    });
    matcher__DnfOrCnf$ = lambda;
    lambda1 = (undefined, function (input) {
      let left, right, result2$, result2$1, result3$, result3$1, name, arg, result0$, result4$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
      if (input instanceof DnfCnf1.And.class) {
        if (input instanceof Object) {
          if ("left" in input) {
            left = input.left;
            tmp = runtime.safeCall(matcher__AtomsᐸDnfOrCnfᐳ_CnfᐸDnfOrCnfᐳ$(left));
            tmp1 = globalThis.Object.freeze({
              input: left,
              result: tmp
            });
          } else {
            tmp2 = globalThis.Object.freeze({
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
            p_2: false,
            p_3: false
          });
          tmp1 = globalThis.Object.freeze({
            input: null,
            result: tmp3
          });
        }
        if (input instanceof Object) {
          if ("right" in input) {
            right = input.right;
            tmp4 = runtime.safeCall(matcher__AtomsᐸDnfOrCnfᐳ_CnfᐸDnfOrCnfᐳ$(right));
            tmp5 = globalThis.Object.freeze({
              input: right,
              result: tmp4
            });
          } else {
            tmp6 = globalThis.Object.freeze({
              p_2: false,
              p_3: false
            });
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: tmp6
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            p_2: false,
            p_3: false
          });
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: tmp7
          });
        }
        result2$1 = tmp1.result.p_2;
        if (result2$1 === true) {
          result2$ = tmp5.result.p_2;
          if (result2$ === true) {
            tmp8 = true;
          } else {
            tmp8 = false;
          }
        } else {
          tmp8 = false;
        }
        result3$1 = tmp1.result.p_3;
        if (result3$1 === true) {
          result3$ = tmp5.result.p_3;
          if (result3$ === true) {
            return globalThis.Object.freeze({
              p_2: tmp8,
              p_3: true
            })
          }
          return globalThis.Object.freeze({
            p_2: tmp8,
            p_3: false
          });
        }
        return globalThis.Object.freeze({
          p_2: tmp8,
          p_3: false
        });
      } else if (input instanceof DnfCnf1.Pred.class) {
        if (input instanceof Object) {
          if ("name" in input) {
            name = input.name;
            tmp9 = runtime.safeCall(matcher__ꓕ$(name));
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
        if (input instanceof Object) {
          if ("arg" in input) {
            arg = input.arg;
            tmp11 = runtime.safeCall(matcher__DnfOrCnf$(arg));
            tmp12 = globalThis.Object.freeze({
              input: arg,
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
        result4$ = tmp10.result;
        if (result4$ === true) {
          result0$ = tmp12.result;
          if (result0$ === true) {
            return globalThis.Object.freeze({
              p_2: true,
              p_3: false
            })
          }
          return globalThis.Object.freeze({
            p_2: false,
            p_3: false
          });
        }
        return globalThis.Object.freeze({
          p_2: false,
          p_3: false
        });
      } else if (input instanceof DnfCnf1.Var.class) {
        return globalThis.Object.freeze({
          p_2: true,
          p_3: false
        })
      }
      return globalThis.Object.freeze({
        p_2: false,
        p_3: false
      });
    });
    matcher__AtomsᐸDnfOrCnfᐳ_CnfᐸDnfOrCnfᐳ$ = lambda1;
    lambda2 = (undefined, function (input) {
      let left, right, result2$, result2$1, name, arg, result0$, result4$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
      if (input instanceof DnfCnf1.And.class) {
        if (input instanceof Object) {
          if ("left" in input) {
            left = input.left;
            tmp = runtime.safeCall(matcher__AtomsᐸDnfOrCnfᐳ$(left));
            tmp1 = globalThis.Object.freeze({
              input: left,
              result: tmp
            });
          } else {
            tmp1 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp1 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        if (input instanceof Object) {
          if ("right" in input) {
            right = input.right;
            tmp2 = runtime.safeCall(matcher__AtomsᐸDnfOrCnfᐳ$(right));
            tmp3 = globalThis.Object.freeze({
              input: right,
              result: tmp2
            });
          } else {
            tmp3 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp3 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        result2$1 = tmp1.result;
        if (result2$1 === true) {
          result2$ = tmp3.result;
          if (result2$ === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof DnfCnf1.Pred.class) {
        if (input instanceof Object) {
          if ("name" in input) {
            name = input.name;
            tmp4 = runtime.safeCall(matcher__ꓕ$(name));
            tmp5 = globalThis.Object.freeze({
              input: name,
              result: tmp4
            });
          } else {
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        if (input instanceof Object) {
          if ("arg" in input) {
            arg = input.arg;
            tmp6 = runtime.safeCall(matcher__DnfOrCnf$(arg));
            tmp7 = globalThis.Object.freeze({
              input: arg,
              result: tmp6
            });
          } else {
            tmp7 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        result4$ = tmp5.result;
        if (result4$ === true) {
          result0$ = tmp7.result;
          if (result0$ === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof DnfCnf1.Var.class) {
        return true
      }
      return false;
    });
    matcher__AtomsᐸDnfOrCnfᐳ$ = lambda2;
    lambda3 = (undefined, function (input) {
      let left, right, result1$, result1$1, left1, right1, result2$, result2$1, name, arg, result0$, result4$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
      if (input instanceof DnfCnf1.Or.class) {
        if (input instanceof Object) {
          if ("left" in input) {
            left = input.left;
            tmp = runtime.safeCall(matcher__DnfᐸDnfOrCnfᐳ$(left));
            tmp1 = globalThis.Object.freeze({
              input: left,
              result: tmp
            });
          } else {
            tmp1 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp1 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        if (input instanceof Object) {
          if ("right" in input) {
            right = input.right;
            tmp2 = runtime.safeCall(matcher__DnfᐸDnfOrCnfᐳ$(right));
            tmp3 = globalThis.Object.freeze({
              input: right,
              result: tmp2
            });
          } else {
            tmp3 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp3 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        result1$1 = tmp1.result;
        if (result1$1 === true) {
          result1$ = tmp3.result;
          if (result1$ === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof DnfCnf1.And.class) {
        if (input instanceof Object) {
          if ("left" in input) {
            left1 = input.left;
            tmp4 = runtime.safeCall(matcher__AtomsᐸDnfOrCnfᐳ$(left1));
            tmp5 = globalThis.Object.freeze({
              input: left1,
              result: tmp4
            });
          } else {
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        if (input instanceof Object) {
          if ("right" in input) {
            right1 = input.right;
            tmp6 = runtime.safeCall(matcher__AtomsᐸDnfOrCnfᐳ$(right1));
            tmp7 = globalThis.Object.freeze({
              input: right1,
              result: tmp6
            });
          } else {
            tmp7 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        result2$1 = tmp5.result;
        if (result2$1 === true) {
          result2$ = tmp7.result;
          if (result2$ === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof DnfCnf1.Pred.class) {
        if (input instanceof Object) {
          if ("name" in input) {
            name = input.name;
            tmp8 = runtime.safeCall(matcher__ꓕ$(name));
            tmp9 = globalThis.Object.freeze({
              input: name,
              result: tmp8
            });
          } else {
            tmp9 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp9 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        if (input instanceof Object) {
          if ("arg" in input) {
            arg = input.arg;
            tmp10 = runtime.safeCall(matcher__DnfOrCnf$(arg));
            tmp11 = globalThis.Object.freeze({
              input: arg,
              result: tmp10
            });
          } else {
            tmp11 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp11 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        result4$ = tmp9.result;
        if (result4$ === true) {
          result0$ = tmp11.result;
          if (result0$ === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof DnfCnf1.Var.class) {
        return true
      }
      return false;
    });
    matcher__DnfᐸDnfOrCnfᐳ$ = lambda3;
    lambda4 = (undefined, function (input) {
      return true
    });
    matcher__ꓕ$ = lambda4;
    matchSuccess = runtime.safeCall(matcher__DnfOrCnf$(t));
    if (matchSuccess === true) {
      return t
    }
    return runtime.Unit;
  } 
  static isDnfOrCnf_optimized_matchOnly(t) {
    let matcher__DnfOrCnf$, matcher__DnfᐸDnfOrCnfᐳ$, matcher__AtomsᐸDnfOrCnfᐳ_CnfᐸDnfOrCnfᐳ$, matcher__ꓕ$, matcher__AtomsᐸDnfOrCnfᐳ$, matchSuccess, lambda, lambda1, lambda2, lambda3, lambda4;
    lambda4 = (undefined, function (input) {
      return true
    });
    matcher__ꓕ$ = lambda4;
    lambda = (undefined, function (input) {
      let left, right, result1$, result1$1, left1, right1, result2$, result2$1, result3$, result3$1, name, arg, result0$, result4$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15;
      if (input instanceof DnfCnf1.Or.class) {
        if (input instanceof Object) {
          if ("left" in input) {
            left = input.left;
            tmp = runtime.safeCall(matcher__DnfᐸDnfOrCnfᐳ$(left));
            tmp1 = globalThis.Object.freeze({
              input: left,
              result: tmp
            });
          } else {
            tmp1 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp1 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        if (input instanceof Object) {
          if ("right" in input) {
            right = input.right;
            tmp2 = runtime.safeCall(matcher__DnfᐸDnfOrCnfᐳ$(right));
            tmp3 = globalThis.Object.freeze({
              input: right,
              result: tmp2
            });
          } else {
            tmp3 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp3 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        result1$1 = tmp1.result;
        if (result1$1 === true) {
          result1$ = tmp3.result;
          if (result1$ === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof DnfCnf1.And.class) {
        if (input instanceof Object) {
          if ("left" in input) {
            left1 = input.left;
            tmp4 = runtime.safeCall(matcher__AtomsᐸDnfOrCnfᐳ_CnfᐸDnfOrCnfᐳ$(left1));
            tmp5 = globalThis.Object.freeze({
              input: left1,
              result: tmp4
            });
          } else {
            tmp6 = globalThis.Object.freeze({
              p_2: false,
              p_3: false
            });
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: tmp6
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            p_2: false,
            p_3: false
          });
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: tmp7
          });
        }
        if (input instanceof Object) {
          if ("right" in input) {
            right1 = input.right;
            tmp8 = runtime.safeCall(matcher__AtomsᐸDnfOrCnfᐳ_CnfᐸDnfOrCnfᐳ$(right1));
            tmp9 = globalThis.Object.freeze({
              input: right1,
              result: tmp8
            });
          } else {
            tmp10 = globalThis.Object.freeze({
              p_2: false,
              p_3: false
            });
            tmp9 = globalThis.Object.freeze({
              input: null,
              result: tmp10
            });
          }
        } else {
          tmp11 = globalThis.Object.freeze({
            p_2: false,
            p_3: false
          });
          tmp9 = globalThis.Object.freeze({
            input: null,
            result: tmp11
          });
        }
        result2$1 = tmp5.result.p_2;
        if (result2$1 === true) {
          result2$ = tmp9.result.p_2;
          if (result2$ === true) {
            return true
          }
          result3$1 = tmp5.result.p_3;
          if (result3$1 === true) {
            result3$ = tmp9.result.p_3;
            if (result3$ === true) {
              return true
            }
            return false;
          }
          return false;
        }
        result3$1 = tmp5.result.p_3;
        if (result3$1 === true) {
          result3$ = tmp9.result.p_3;
          if (result3$ === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof DnfCnf1.Pred.class) {
        if (input instanceof Object) {
          if ("name" in input) {
            name = input.name;
            tmp12 = runtime.safeCall(matcher__ꓕ$(name));
            tmp13 = globalThis.Object.freeze({
              input: name,
              result: tmp12
            });
          } else {
            tmp13 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp13 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        if (input instanceof Object) {
          if ("arg" in input) {
            arg = input.arg;
            tmp14 = runtime.safeCall(matcher__DnfOrCnf$(arg));
            tmp15 = globalThis.Object.freeze({
              input: arg,
              result: tmp14
            });
          } else {
            tmp15 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp15 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        result4$ = tmp13.result;
        if (result4$ === true) {
          result0$ = tmp15.result;
          if (result0$ === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof DnfCnf1.Var.class) {
        return true
      }
      return false;
    });
    matcher__DnfOrCnf$ = lambda;
    lambda1 = (undefined, function (input) {
      let left, right, result2$, result2$1, result3$, result3$1, name, arg, result0$, result4$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
      if (input instanceof DnfCnf1.And.class) {
        if (input instanceof Object) {
          if ("left" in input) {
            left = input.left;
            tmp = runtime.safeCall(matcher__AtomsᐸDnfOrCnfᐳ_CnfᐸDnfOrCnfᐳ$(left));
            tmp1 = globalThis.Object.freeze({
              input: left,
              result: tmp
            });
          } else {
            tmp2 = globalThis.Object.freeze({
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
            p_2: false,
            p_3: false
          });
          tmp1 = globalThis.Object.freeze({
            input: null,
            result: tmp3
          });
        }
        if (input instanceof Object) {
          if ("right" in input) {
            right = input.right;
            tmp4 = runtime.safeCall(matcher__AtomsᐸDnfOrCnfᐳ_CnfᐸDnfOrCnfᐳ$(right));
            tmp5 = globalThis.Object.freeze({
              input: right,
              result: tmp4
            });
          } else {
            tmp6 = globalThis.Object.freeze({
              p_2: false,
              p_3: false
            });
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: tmp6
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            p_2: false,
            p_3: false
          });
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: tmp7
          });
        }
        result2$1 = tmp1.result.p_2;
        if (result2$1 === true) {
          result2$ = tmp5.result.p_2;
          if (result2$ === true) {
            tmp8 = true;
          } else {
            tmp8 = false;
          }
        } else {
          tmp8 = false;
        }
        result3$1 = tmp1.result.p_3;
        if (result3$1 === true) {
          result3$ = tmp5.result.p_3;
          if (result3$ === true) {
            return globalThis.Object.freeze({
              p_2: tmp8,
              p_3: true
            })
          }
          return globalThis.Object.freeze({
            p_2: tmp8,
            p_3: false
          });
        }
        return globalThis.Object.freeze({
          p_2: tmp8,
          p_3: false
        });
      } else if (input instanceof DnfCnf1.Pred.class) {
        if (input instanceof Object) {
          if ("name" in input) {
            name = input.name;
            tmp9 = runtime.safeCall(matcher__ꓕ$(name));
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
        if (input instanceof Object) {
          if ("arg" in input) {
            arg = input.arg;
            tmp11 = runtime.safeCall(matcher__DnfOrCnf$(arg));
            tmp12 = globalThis.Object.freeze({
              input: arg,
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
        result4$ = tmp10.result;
        if (result4$ === true) {
          result0$ = tmp12.result;
          if (result0$ === true) {
            return globalThis.Object.freeze({
              p_2: true,
              p_3: false
            })
          }
          return globalThis.Object.freeze({
            p_2: false,
            p_3: false
          });
        }
        return globalThis.Object.freeze({
          p_2: false,
          p_3: false
        });
      } else if (input instanceof DnfCnf1.Var.class) {
        return globalThis.Object.freeze({
          p_2: true,
          p_3: false
        })
      }
      return globalThis.Object.freeze({
        p_2: false,
        p_3: false
      });
    });
    matcher__AtomsᐸDnfOrCnfᐳ_CnfᐸDnfOrCnfᐳ$ = lambda1;
    lambda2 = (undefined, function (input) {
      let left, right, result2$, result2$1, name, arg, result0$, result4$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
      if (input instanceof DnfCnf1.And.class) {
        if (input instanceof Object) {
          if ("left" in input) {
            left = input.left;
            tmp = runtime.safeCall(matcher__AtomsᐸDnfOrCnfᐳ$(left));
            tmp1 = globalThis.Object.freeze({
              input: left,
              result: tmp
            });
          } else {
            tmp1 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp1 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        if (input instanceof Object) {
          if ("right" in input) {
            right = input.right;
            tmp2 = runtime.safeCall(matcher__AtomsᐸDnfOrCnfᐳ$(right));
            tmp3 = globalThis.Object.freeze({
              input: right,
              result: tmp2
            });
          } else {
            tmp3 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp3 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        result2$1 = tmp1.result;
        if (result2$1 === true) {
          result2$ = tmp3.result;
          if (result2$ === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof DnfCnf1.Pred.class) {
        if (input instanceof Object) {
          if ("name" in input) {
            name = input.name;
            tmp4 = runtime.safeCall(matcher__ꓕ$(name));
            tmp5 = globalThis.Object.freeze({
              input: name,
              result: tmp4
            });
          } else {
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        if (input instanceof Object) {
          if ("arg" in input) {
            arg = input.arg;
            tmp6 = runtime.safeCall(matcher__DnfOrCnf$(arg));
            tmp7 = globalThis.Object.freeze({
              input: arg,
              result: tmp6
            });
          } else {
            tmp7 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        result4$ = tmp5.result;
        if (result4$ === true) {
          result0$ = tmp7.result;
          if (result0$ === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof DnfCnf1.Var.class) {
        return true
      }
      return false;
    });
    matcher__AtomsᐸDnfOrCnfᐳ$ = lambda2;
    lambda3 = (undefined, function (input) {
      let left, right, result1$, result1$1, left1, right1, result2$, result2$1, name, arg, result0$, result4$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
      if (input instanceof DnfCnf1.Or.class) {
        if (input instanceof Object) {
          if ("left" in input) {
            left = input.left;
            tmp = runtime.safeCall(matcher__DnfᐸDnfOrCnfᐳ$(left));
            tmp1 = globalThis.Object.freeze({
              input: left,
              result: tmp
            });
          } else {
            tmp1 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp1 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        if (input instanceof Object) {
          if ("right" in input) {
            right = input.right;
            tmp2 = runtime.safeCall(matcher__DnfᐸDnfOrCnfᐳ$(right));
            tmp3 = globalThis.Object.freeze({
              input: right,
              result: tmp2
            });
          } else {
            tmp3 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp3 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        result1$1 = tmp1.result;
        if (result1$1 === true) {
          result1$ = tmp3.result;
          if (result1$ === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof DnfCnf1.And.class) {
        if (input instanceof Object) {
          if ("left" in input) {
            left1 = input.left;
            tmp4 = runtime.safeCall(matcher__AtomsᐸDnfOrCnfᐳ$(left1));
            tmp5 = globalThis.Object.freeze({
              input: left1,
              result: tmp4
            });
          } else {
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        if (input instanceof Object) {
          if ("right" in input) {
            right1 = input.right;
            tmp6 = runtime.safeCall(matcher__AtomsᐸDnfOrCnfᐳ$(right1));
            tmp7 = globalThis.Object.freeze({
              input: right1,
              result: tmp6
            });
          } else {
            tmp7 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        result2$1 = tmp5.result;
        if (result2$1 === true) {
          result2$ = tmp7.result;
          if (result2$ === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof DnfCnf1.Pred.class) {
        if (input instanceof Object) {
          if ("name" in input) {
            name = input.name;
            tmp8 = runtime.safeCall(matcher__ꓕ$(name));
            tmp9 = globalThis.Object.freeze({
              input: name,
              result: tmp8
            });
          } else {
            tmp9 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp9 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        if (input instanceof Object) {
          if ("arg" in input) {
            arg = input.arg;
            tmp10 = runtime.safeCall(matcher__DnfOrCnf$(arg));
            tmp11 = globalThis.Object.freeze({
              input: arg,
              result: tmp10
            });
          } else {
            tmp11 = globalThis.Object.freeze({
              input: null,
              result: false
            });
          }
        } else {
          tmp11 = globalThis.Object.freeze({
            input: null,
            result: false
          });
        }
        result4$ = tmp9.result;
        if (result4$ === true) {
          result0$ = tmp11.result;
          if (result0$ === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof DnfCnf1.Var.class) {
        return true
      }
      return false;
    });
    matcher__DnfᐸDnfOrCnfᐳ$ = lambda3;
    matchSuccess = runtime.safeCall(matcher__DnfOrCnf$(t));
    if (matchSuccess === true) {
      return true
    }
    return false;
  } 
  static isDnfAndCnf_naive(t) {
    let unapplyResult;
    unapplyResult = runtime.safeCall(DnfCnf.DnfAndCnf.unapply(t));
    if (unapplyResult instanceof runtime.MatchSuccess.class) {
      unapplyResult.output;
      unapplyResult.bindings;
      return true
    }
    return false;
  } 
  static isDnfAndCnf_optimized(t) {
    let matcher__DnfAndCnf$, matcher__AtomsᐸDnfAndCnfᐳ_CnfᐸDnfAndCnfᐳ$, matcher__ꓕ$, matchSuccess, lambda, lambda1, lambda2;
    lambda = (undefined, function (input) {
      let left, right, result1$, result1$1, result2$, result2$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
      if (input instanceof DnfCnf1.Or.class) {
        return false
      } else if (input instanceof DnfCnf1.And.class) {
        if (input instanceof Object) {
          if ("left" in input) {
            left = input.left;
            tmp = runtime.safeCall(matcher__AtomsᐸDnfAndCnfᐳ_CnfᐸDnfAndCnfᐳ$(left));
            tmp1 = globalThis.Object.freeze({
              input: left,
              result: tmp
            });
          } else {
            tmp2 = globalThis.Object.freeze({
              p_1: false,
              p_2: false
            });
            tmp1 = globalThis.Object.freeze({
              input: null,
              result: tmp2
            });
          }
        } else {
          tmp3 = globalThis.Object.freeze({
            p_1: false,
            p_2: false
          });
          tmp1 = globalThis.Object.freeze({
            input: null,
            result: tmp3
          });
        }
        if (input instanceof Object) {
          if ("right" in input) {
            right = input.right;
            tmp4 = runtime.safeCall(matcher__AtomsᐸDnfAndCnfᐳ_CnfᐸDnfAndCnfᐳ$(right));
            tmp5 = globalThis.Object.freeze({
              input: right,
              result: tmp4
            });
          } else {
            tmp6 = globalThis.Object.freeze({
              p_1: false,
              p_2: false
            });
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: tmp6
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            p_1: false,
            p_2: false
          });
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: tmp7
          });
        }
        result1$1 = tmp1.result.p_1;
        if (result1$1 === true) {
          result1$ = tmp5.result.p_1;
          if (result1$ === true) {
            result2$1 = tmp1.result.p_2;
            if (result2$1 === true) {
              result2$ = tmp5.result.p_2;
              if (result2$ === true) {
                return true
              }
              return false;
            }
            return false;
          }
          return false;
        }
        return false;
      } else if (input instanceof DnfCnf1.Pred.class) {
        return false
      } else if (input instanceof DnfCnf1.Var.class) {
        return false
      }
      return false;
    });
    matcher__DnfAndCnf$ = lambda;
    lambda1 = (undefined, function (input) {
      let left, right, result1$, result1$1, result2$, result2$1, name, arg, result0$, result3$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
      if (input instanceof DnfCnf1.And.class) {
        if (input instanceof Object) {
          if ("left" in input) {
            left = input.left;
            tmp = runtime.safeCall(matcher__AtomsᐸDnfAndCnfᐳ_CnfᐸDnfAndCnfᐳ$(left));
            tmp1 = globalThis.Object.freeze({
              input: left,
              result: tmp
            });
          } else {
            tmp2 = globalThis.Object.freeze({
              p_1: false,
              p_2: false
            });
            tmp1 = globalThis.Object.freeze({
              input: null,
              result: tmp2
            });
          }
        } else {
          tmp3 = globalThis.Object.freeze({
            p_1: false,
            p_2: false
          });
          tmp1 = globalThis.Object.freeze({
            input: null,
            result: tmp3
          });
        }
        if (input instanceof Object) {
          if ("right" in input) {
            right = input.right;
            tmp4 = runtime.safeCall(matcher__AtomsᐸDnfAndCnfᐳ_CnfᐸDnfAndCnfᐳ$(right));
            tmp5 = globalThis.Object.freeze({
              input: right,
              result: tmp4
            });
          } else {
            tmp6 = globalThis.Object.freeze({
              p_1: false,
              p_2: false
            });
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: tmp6
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            p_1: false,
            p_2: false
          });
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: tmp7
          });
        }
        result1$1 = tmp1.result.p_1;
        if (result1$1 === true) {
          result1$ = tmp5.result.p_1;
          if (result1$ === true) {
            tmp8 = true;
          } else {
            tmp8 = false;
          }
        } else {
          tmp8 = false;
        }
        result2$1 = tmp1.result.p_2;
        if (result2$1 === true) {
          result2$ = tmp5.result.p_2;
          if (result2$ === true) {
            return globalThis.Object.freeze({
              p_1: tmp8,
              p_2: true
            })
          }
          return globalThis.Object.freeze({
            p_1: tmp8,
            p_2: false
          });
        }
        return globalThis.Object.freeze({
          p_1: tmp8,
          p_2: false
        });
      } else if (input instanceof DnfCnf1.Pred.class) {
        if (input instanceof Object) {
          if ("name" in input) {
            name = input.name;
            tmp9 = runtime.safeCall(matcher__ꓕ$(name));
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
        if (input instanceof Object) {
          if ("arg" in input) {
            arg = input.arg;
            tmp11 = runtime.safeCall(matcher__DnfAndCnf$(arg));
            tmp12 = globalThis.Object.freeze({
              input: arg,
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
        result3$ = tmp10.result;
        if (result3$ === true) {
          result0$ = tmp12.result;
          if (result0$ === true) {
            return globalThis.Object.freeze({
              p_1: true,
              p_2: false
            })
          }
          return globalThis.Object.freeze({
            p_1: false,
            p_2: false
          });
        }
        return globalThis.Object.freeze({
          p_1: false,
          p_2: false
        });
      } else if (input instanceof DnfCnf1.Var.class) {
        return globalThis.Object.freeze({
          p_1: true,
          p_2: false
        })
      }
      return globalThis.Object.freeze({
        p_1: false,
        p_2: false
      });
    });
    matcher__AtomsᐸDnfAndCnfᐳ_CnfᐸDnfAndCnfᐳ$ = lambda1;
    lambda2 = (undefined, function (input) {
      return true
    });
    matcher__ꓕ$ = lambda2;
    matchSuccess = runtime.safeCall(matcher__DnfAndCnf$(t));
    if (matchSuccess === true) {
      return t
    }
    return runtime.Unit;
  } 
  static isDnfAndCnf_optimized_matchOnly(t) {
    let matcher__DnfAndCnf$, matcher__AtomsᐸDnfAndCnfᐳ_CnfᐸDnfAndCnfᐳ$, matcher__ꓕ$, matchSuccess, lambda, lambda1, lambda2;
    lambda = (undefined, function (input) {
      let left, right, result1$, result1$1, result2$, result2$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
      if (input instanceof DnfCnf1.Or.class) {
        return false
      } else if (input instanceof DnfCnf1.And.class) {
        if (input instanceof Object) {
          if ("left" in input) {
            left = input.left;
            tmp = runtime.safeCall(matcher__AtomsᐸDnfAndCnfᐳ_CnfᐸDnfAndCnfᐳ$(left));
            tmp1 = globalThis.Object.freeze({
              input: left,
              result: tmp
            });
          } else {
            tmp2 = globalThis.Object.freeze({
              p_1: false,
              p_2: false
            });
            tmp1 = globalThis.Object.freeze({
              input: null,
              result: tmp2
            });
          }
        } else {
          tmp3 = globalThis.Object.freeze({
            p_1: false,
            p_2: false
          });
          tmp1 = globalThis.Object.freeze({
            input: null,
            result: tmp3
          });
        }
        if (input instanceof Object) {
          if ("right" in input) {
            right = input.right;
            tmp4 = runtime.safeCall(matcher__AtomsᐸDnfAndCnfᐳ_CnfᐸDnfAndCnfᐳ$(right));
            tmp5 = globalThis.Object.freeze({
              input: right,
              result: tmp4
            });
          } else {
            tmp6 = globalThis.Object.freeze({
              p_1: false,
              p_2: false
            });
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: tmp6
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            p_1: false,
            p_2: false
          });
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: tmp7
          });
        }
        result1$1 = tmp1.result.p_1;
        if (result1$1 === true) {
          result1$ = tmp5.result.p_1;
          if (result1$ === true) {
            result2$1 = tmp1.result.p_2;
            if (result2$1 === true) {
              result2$ = tmp5.result.p_2;
              if (result2$ === true) {
                return true
              }
              return false;
            }
            return false;
          }
          return false;
        }
        return false;
      } else if (input instanceof DnfCnf1.Pred.class) {
        return false
      } else if (input instanceof DnfCnf1.Var.class) {
        return false
      }
      return false;
    });
    matcher__DnfAndCnf$ = lambda;
    lambda1 = (undefined, function (input) {
      let left, right, result1$, result1$1, result2$, result2$1, name, arg, result0$, result3$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
      if (input instanceof DnfCnf1.And.class) {
        if (input instanceof Object) {
          if ("left" in input) {
            left = input.left;
            tmp = runtime.safeCall(matcher__AtomsᐸDnfAndCnfᐳ_CnfᐸDnfAndCnfᐳ$(left));
            tmp1 = globalThis.Object.freeze({
              input: left,
              result: tmp
            });
          } else {
            tmp2 = globalThis.Object.freeze({
              p_1: false,
              p_2: false
            });
            tmp1 = globalThis.Object.freeze({
              input: null,
              result: tmp2
            });
          }
        } else {
          tmp3 = globalThis.Object.freeze({
            p_1: false,
            p_2: false
          });
          tmp1 = globalThis.Object.freeze({
            input: null,
            result: tmp3
          });
        }
        if (input instanceof Object) {
          if ("right" in input) {
            right = input.right;
            tmp4 = runtime.safeCall(matcher__AtomsᐸDnfAndCnfᐳ_CnfᐸDnfAndCnfᐳ$(right));
            tmp5 = globalThis.Object.freeze({
              input: right,
              result: tmp4
            });
          } else {
            tmp6 = globalThis.Object.freeze({
              p_1: false,
              p_2: false
            });
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: tmp6
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            p_1: false,
            p_2: false
          });
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: tmp7
          });
        }
        result1$1 = tmp1.result.p_1;
        if (result1$1 === true) {
          result1$ = tmp5.result.p_1;
          if (result1$ === true) {
            tmp8 = true;
          } else {
            tmp8 = false;
          }
        } else {
          tmp8 = false;
        }
        result2$1 = tmp1.result.p_2;
        if (result2$1 === true) {
          result2$ = tmp5.result.p_2;
          if (result2$ === true) {
            return globalThis.Object.freeze({
              p_1: tmp8,
              p_2: true
            })
          }
          return globalThis.Object.freeze({
            p_1: tmp8,
            p_2: false
          });
        }
        return globalThis.Object.freeze({
          p_1: tmp8,
          p_2: false
        });
      } else if (input instanceof DnfCnf1.Pred.class) {
        if (input instanceof Object) {
          if ("name" in input) {
            name = input.name;
            tmp9 = runtime.safeCall(matcher__ꓕ$(name));
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
        if (input instanceof Object) {
          if ("arg" in input) {
            arg = input.arg;
            tmp11 = runtime.safeCall(matcher__DnfAndCnf$(arg));
            tmp12 = globalThis.Object.freeze({
              input: arg,
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
        result3$ = tmp10.result;
        if (result3$ === true) {
          result0$ = tmp12.result;
          if (result0$ === true) {
            return globalThis.Object.freeze({
              p_1: true,
              p_2: false
            })
          }
          return globalThis.Object.freeze({
            p_1: false,
            p_2: false
          });
        }
        return globalThis.Object.freeze({
          p_1: false,
          p_2: false
        });
      } else if (input instanceof DnfCnf1.Var.class) {
        return globalThis.Object.freeze({
          p_1: true,
          p_2: false
        })
      }
      return globalThis.Object.freeze({
        p_1: false,
        p_2: false
      });
    });
    matcher__AtomsᐸDnfAndCnfᐳ_CnfᐸDnfAndCnfᐳ$ = lambda1;
    lambda2 = (undefined, function (input) {
      return true
    });
    matcher__ꓕ$ = lambda2;
    matchSuccess = runtime.safeCall(matcher__DnfAndCnf$(t));
    if (matchSuccess === true) {
      return true
    }
    return false;
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "DnfCnf"]; 
});
let DnfCnf = DnfCnf1; export default DnfCnf;
