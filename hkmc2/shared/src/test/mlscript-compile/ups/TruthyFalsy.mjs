const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
let TruthyFalsy1;
(class TruthyFalsy {
  static {
    TruthyFalsy1 = this
  }
  static {
    this.And = function And(lhs, rhs) {
      return globalThis.Object.freeze(new And.class(lhs, rhs));
    };
    (class And {
      static {
        TruthyFalsy.And.class = this
      }
      constructor(lhs, rhs) {
        this.lhs = lhs;
        this.rhs = rhs;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "And", ["lhs", "rhs"]]; 
    });
    this.Or = function Or(lhs, rhs) {
      return globalThis.Object.freeze(new Or.class(lhs, rhs));
    };
    (class Or {
      static {
        TruthyFalsy.Or.class = this
      }
      constructor(lhs, rhs) {
        this.lhs = lhs;
        this.rhs = rhs;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Or", ["lhs", "rhs"]]; 
    });
    this.Not = function Not(arg) {
      return globalThis.Object.freeze(new Not.class(arg));
    };
    (class Not {
      static {
        TruthyFalsy.Not.class = this
      }
      constructor(arg) {
        this.arg = arg;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Not", ["arg"]]; 
    });
    (class Truthy {
      static {
        new this
      }
      constructor() {
        TruthyFalsy.Truthy = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        let arg$Not$0$, unapplyResult, arg$Or$0$, arg$Or$1$, unapplyResult1, unapplyResult2, unapplyResult3, unapplyResult4, unapplyResult5, unapplyResult6, arg$And$0$, arg$And$1$, unapplyResult7, unapplyResult8;
        if (input === true) {
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null))
        } else if (input instanceof TruthyFalsy.And.class) {
          arg$And$0$ = input.lhs;
          arg$And$1$ = input.rhs;
          unapplyResult7 = runtime.safeCall(TruthyFalsy.Truthy.unapply(arg$And$0$));
          if (unapplyResult7 instanceof runtime.MatchSuccess.class) {
            unapplyResult7.output;
            unapplyResult7.bindings;
            unapplyResult8 = runtime.safeCall(TruthyFalsy.Truthy.unapply(arg$And$1$));
            if (unapplyResult8 instanceof runtime.MatchSuccess.class) {
              unapplyResult8.output;
              unapplyResult8.bindings;
            } else {
              return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
            }
          } else {
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
          }
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null))
        } else if (input instanceof TruthyFalsy.Or.class) {
          arg$Or$0$ = input.lhs;
          arg$Or$1$ = input.rhs;
          unapplyResult5 = runtime.safeCall(TruthyFalsy.Truthy.unapply(arg$Or$0$));
          if (unapplyResult5 instanceof runtime.MatchSuccess.class) {
            unapplyResult5.output;
            unapplyResult5.bindings;
            unapplyResult6 = runtime.safeCall(TruthyFalsy.Truthy.unapply(arg$Or$1$));
            if (unapplyResult6 instanceof runtime.MatchSuccess.class) {
              unapplyResult6.output;
              unapplyResult6.bindings;
            } else {
              unapplyResult3 = runtime.safeCall(TruthyFalsy.Truthy.unapply(arg$Or$0$));
              if (unapplyResult3 instanceof runtime.MatchSuccess.class) {
                unapplyResult3.output;
                unapplyResult3.bindings;
                unapplyResult4 = runtime.safeCall(TruthyFalsy.Falsy.unapply(arg$Or$1$));
                if (unapplyResult4 instanceof runtime.MatchSuccess.class) {
                  unapplyResult4.output;
                  unapplyResult4.bindings;
                } else {
                  unapplyResult1 = runtime.safeCall(TruthyFalsy.Falsy.unapply(arg$Or$0$));
                  if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                    unapplyResult1.output;
                    unapplyResult1.bindings;
                    unapplyResult2 = runtime.safeCall(TruthyFalsy.Truthy.unapply(arg$Or$1$));
                    if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
                      unapplyResult2.output;
                      unapplyResult2.bindings;
                    } else {
                      return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
                    }
                  } else {
                    return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
                  }
                }
              } else {
                unapplyResult1 = runtime.safeCall(TruthyFalsy.Falsy.unapply(arg$Or$0$));
                if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                  unapplyResult1.output;
                  unapplyResult1.bindings;
                  unapplyResult2 = runtime.safeCall(TruthyFalsy.Truthy.unapply(arg$Or$1$));
                  if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
                    unapplyResult2.output;
                    unapplyResult2.bindings;
                  } else {
                    return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
                  }
                } else {
                  return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
                }
              }
            }
          } else {
            unapplyResult3 = runtime.safeCall(TruthyFalsy.Truthy.unapply(arg$Or$0$));
            if (unapplyResult3 instanceof runtime.MatchSuccess.class) {
              unapplyResult3.output;
              unapplyResult3.bindings;
              unapplyResult4 = runtime.safeCall(TruthyFalsy.Falsy.unapply(arg$Or$1$));
              if (unapplyResult4 instanceof runtime.MatchSuccess.class) {
                unapplyResult4.output;
                unapplyResult4.bindings;
              } else {
                unapplyResult1 = runtime.safeCall(TruthyFalsy.Falsy.unapply(arg$Or$0$));
                if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                  unapplyResult1.output;
                  unapplyResult1.bindings;
                  unapplyResult2 = runtime.safeCall(TruthyFalsy.Truthy.unapply(arg$Or$1$));
                  if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
                    unapplyResult2.output;
                    unapplyResult2.bindings;
                  } else {
                    return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
                  }
                } else {
                  return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
                }
              }
            } else {
              unapplyResult1 = runtime.safeCall(TruthyFalsy.Falsy.unapply(arg$Or$0$));
              if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                unapplyResult1.output;
                unapplyResult1.bindings;
                unapplyResult2 = runtime.safeCall(TruthyFalsy.Truthy.unapply(arg$Or$1$));
                if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
                  unapplyResult2.output;
                  unapplyResult2.bindings;
                } else {
                  return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
                }
              } else {
                return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
              }
            }
          }
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null))
        } else if (input instanceof TruthyFalsy.Not.class) {
          arg$Not$0$ = input.arg;
          unapplyResult = runtime.safeCall(TruthyFalsy.Falsy.unapply(arg$Not$0$));
          if (unapplyResult instanceof runtime.MatchSuccess.class) {
            unapplyResult.output;
            unapplyResult.bindings;
          } else {
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
          }
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null))
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      } 
      unapplyStringPrefix(input) {
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "Truthy"]; 
    });
    (class Falsy {
      static {
        new this
      }
      constructor() {
        TruthyFalsy.Falsy = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        let arg$Not$0$, unapplyResult, arg$Or$0$, arg$Or$1$, unapplyResult1, unapplyResult2, arg$And$0$, arg$And$1$, unapplyResult3, unapplyResult4, unapplyResult5, unapplyResult6, unapplyResult7, unapplyResult8;
        if (input === false) {
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null))
        } else if (input instanceof TruthyFalsy.And.class) {
          arg$And$0$ = input.lhs;
          arg$And$1$ = input.rhs;
          unapplyResult7 = runtime.safeCall(TruthyFalsy.Falsy.unapply(arg$And$0$));
          if (unapplyResult7 instanceof runtime.MatchSuccess.class) {
            unapplyResult7.output;
            unapplyResult7.bindings;
            unapplyResult8 = runtime.safeCall(TruthyFalsy.Falsy.unapply(arg$And$1$));
            if (unapplyResult8 instanceof runtime.MatchSuccess.class) {
              unapplyResult8.output;
              unapplyResult8.bindings;
            } else {
              unapplyResult5 = runtime.safeCall(TruthyFalsy.Falsy.unapply(arg$And$0$));
              if (unapplyResult5 instanceof runtime.MatchSuccess.class) {
                unapplyResult5.output;
                unapplyResult5.bindings;
                unapplyResult6 = runtime.safeCall(TruthyFalsy.Truthy.unapply(arg$And$1$));
                if (unapplyResult6 instanceof runtime.MatchSuccess.class) {
                  unapplyResult6.output;
                  unapplyResult6.bindings;
                } else {
                  unapplyResult3 = runtime.safeCall(TruthyFalsy.Truthy.unapply(arg$And$0$));
                  if (unapplyResult3 instanceof runtime.MatchSuccess.class) {
                    unapplyResult3.output;
                    unapplyResult3.bindings;
                    unapplyResult4 = runtime.safeCall(TruthyFalsy.Falsy.unapply(arg$And$1$));
                    if (unapplyResult4 instanceof runtime.MatchSuccess.class) {
                      unapplyResult4.output;
                      unapplyResult4.bindings;
                    } else {
                      return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
                    }
                  } else {
                    return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
                  }
                }
              } else {
                unapplyResult3 = runtime.safeCall(TruthyFalsy.Truthy.unapply(arg$And$0$));
                if (unapplyResult3 instanceof runtime.MatchSuccess.class) {
                  unapplyResult3.output;
                  unapplyResult3.bindings;
                  unapplyResult4 = runtime.safeCall(TruthyFalsy.Falsy.unapply(arg$And$1$));
                  if (unapplyResult4 instanceof runtime.MatchSuccess.class) {
                    unapplyResult4.output;
                    unapplyResult4.bindings;
                  } else {
                    return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
                  }
                } else {
                  return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
                }
              }
            }
          } else {
            unapplyResult5 = runtime.safeCall(TruthyFalsy.Falsy.unapply(arg$And$0$));
            if (unapplyResult5 instanceof runtime.MatchSuccess.class) {
              unapplyResult5.output;
              unapplyResult5.bindings;
              unapplyResult6 = runtime.safeCall(TruthyFalsy.Truthy.unapply(arg$And$1$));
              if (unapplyResult6 instanceof runtime.MatchSuccess.class) {
                unapplyResult6.output;
                unapplyResult6.bindings;
              } else {
                unapplyResult3 = runtime.safeCall(TruthyFalsy.Truthy.unapply(arg$And$0$));
                if (unapplyResult3 instanceof runtime.MatchSuccess.class) {
                  unapplyResult3.output;
                  unapplyResult3.bindings;
                  unapplyResult4 = runtime.safeCall(TruthyFalsy.Falsy.unapply(arg$And$1$));
                  if (unapplyResult4 instanceof runtime.MatchSuccess.class) {
                    unapplyResult4.output;
                    unapplyResult4.bindings;
                  } else {
                    return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
                  }
                } else {
                  return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
                }
              }
            } else {
              unapplyResult3 = runtime.safeCall(TruthyFalsy.Truthy.unapply(arg$And$0$));
              if (unapplyResult3 instanceof runtime.MatchSuccess.class) {
                unapplyResult3.output;
                unapplyResult3.bindings;
                unapplyResult4 = runtime.safeCall(TruthyFalsy.Falsy.unapply(arg$And$1$));
                if (unapplyResult4 instanceof runtime.MatchSuccess.class) {
                  unapplyResult4.output;
                  unapplyResult4.bindings;
                } else {
                  return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
                }
              } else {
                return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
              }
            }
          }
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null))
        } else if (input instanceof TruthyFalsy.Or.class) {
          arg$Or$0$ = input.lhs;
          arg$Or$1$ = input.rhs;
          unapplyResult1 = runtime.safeCall(TruthyFalsy.Falsy.unapply(arg$Or$0$));
          if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
            unapplyResult1.output;
            unapplyResult1.bindings;
            unapplyResult2 = runtime.safeCall(TruthyFalsy.Falsy.unapply(arg$Or$1$));
            if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
              unapplyResult2.output;
              unapplyResult2.bindings;
            } else {
              return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
            }
          } else {
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
          }
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null))
        } else if (input instanceof TruthyFalsy.Not.class) {
          arg$Not$0$ = input.arg;
          unapplyResult = runtime.safeCall(TruthyFalsy.Truthy.unapply(arg$Not$0$));
          if (unapplyResult instanceof runtime.MatchSuccess.class) {
            unapplyResult.output;
            unapplyResult.bindings;
          } else {
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
          }
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null))
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      } 
      unapplyStringPrefix(input) {
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "Falsy"]; 
    });
  }
  static isTruthy_naive(t) {
    let unapplyResult;
    unapplyResult = runtime.safeCall(TruthyFalsy.Truthy.unapply(t));
    if (unapplyResult instanceof runtime.MatchSuccess.class) {
      unapplyResult.output;
      unapplyResult.bindings;
      return true
    }
    return false;
  } 
  static isTruthy_optimized(t) {
    let matcher__Truthy$, matcher__Truthy_Falsy$, matcher__Falsy$, matchSuccess, lambda, lambda1, lambda2;
    lambda = (undefined, function (input) {
      let lhs, rhs, result1$, result1$1, result0$, result1$2, result1$3, result0$1, lhs1, rhs1, result1$4, result1$5, arg, result0$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
      if (input === false) {
        return true
      } else if (input instanceof TruthyFalsy1.And.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs = input.lhs;
            tmp = runtime.safeCall(matcher__Truthy_Falsy$(lhs));
            tmp1 = globalThis.Object.freeze({
              input: lhs,
              result: tmp
            });
          } else {
            tmp2 = globalThis.Object.freeze({
              p_1: false,
              p_0: false
            });
            tmp1 = globalThis.Object.freeze({
              input: null,
              result: tmp2
            });
          }
        } else {
          tmp3 = globalThis.Object.freeze({
            p_1: false,
            p_0: false
          });
          tmp1 = globalThis.Object.freeze({
            input: null,
            result: tmp3
          });
        }
        if (input instanceof Object) {
          if ("rhs" in input) {
            rhs = input.rhs;
            tmp4 = runtime.safeCall(matcher__Truthy_Falsy$(rhs));
            tmp5 = globalThis.Object.freeze({
              input: rhs,
              result: tmp4
            });
          } else {
            tmp6 = globalThis.Object.freeze({
              p_1: false,
              p_0: false
            });
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: tmp6
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            p_1: false,
            p_0: false
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
            return true
          }
          result1$2 = tmp1.result.p_1;
          if (result1$2 === true) {
            result0$ = tmp5.result.p_0;
            if (result0$ === true) {
              return true
            }
            result0$1 = tmp1.result.p_0;
            if (result0$1 === true) {
              result1$3 = tmp5.result.p_1;
              if (result1$3 === true) {
                return true
              }
              return false;
            }
            return false;
          }
          result0$1 = tmp1.result.p_0;
          if (result0$1 === true) {
            result1$3 = tmp5.result.p_1;
            if (result1$3 === true) {
              return true
            }
            return false;
          }
          return false;
        }
        result1$2 = tmp1.result.p_1;
        if (result1$2 === true) {
          result0$ = tmp5.result.p_0;
          if (result0$ === true) {
            return true
          }
          result0$1 = tmp1.result.p_0;
          if (result0$1 === true) {
            result1$3 = tmp5.result.p_1;
            if (result1$3 === true) {
              return true
            }
            return false;
          }
          return false;
        }
        result0$1 = tmp1.result.p_0;
        if (result0$1 === true) {
          result1$3 = tmp5.result.p_1;
          if (result1$3 === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof TruthyFalsy1.Or.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs1 = input.lhs;
            tmp8 = runtime.safeCall(matcher__Falsy$(lhs1));
            tmp9 = globalThis.Object.freeze({
              input: lhs1,
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
          if ("rhs" in input) {
            rhs1 = input.rhs;
            tmp10 = runtime.safeCall(matcher__Falsy$(rhs1));
            tmp11 = globalThis.Object.freeze({
              input: rhs1,
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
        result1$5 = tmp9.result;
        if (result1$5 === true) {
          result1$4 = tmp11.result;
          if (result1$4 === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof TruthyFalsy1.Not.class) {
        if (input instanceof Object) {
          if ("arg" in input) {
            arg = input.arg;
            tmp12 = runtime.safeCall(matcher__Truthy$(arg));
            tmp13 = globalThis.Object.freeze({
              input: arg,
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
        result0$2 = tmp13.result;
        if (result0$2 === true) {
          return true
        }
        return false;
      }
      return false;
    });
    matcher__Falsy$ = lambda;
    lambda1 = (undefined, function (input) {
      let lhs, rhs, result0$, result0$1, lhs1, rhs1, result0$2, result0$3, result1$, result0$4, result0$5, result1$1, arg, result1$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
      if (input === true) {
        return true
      } else if (input instanceof TruthyFalsy1.And.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs = input.lhs;
            tmp = runtime.safeCall(matcher__Truthy$(lhs));
            tmp1 = globalThis.Object.freeze({
              input: lhs,
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
          if ("rhs" in input) {
            rhs = input.rhs;
            tmp2 = runtime.safeCall(matcher__Truthy$(rhs));
            tmp3 = globalThis.Object.freeze({
              input: rhs,
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
        result0$1 = tmp1.result;
        if (result0$1 === true) {
          result0$ = tmp3.result;
          if (result0$ === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof TruthyFalsy1.Or.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs1 = input.lhs;
            tmp4 = runtime.safeCall(matcher__Truthy_Falsy$(lhs1));
            tmp5 = globalThis.Object.freeze({
              input: lhs1,
              result: tmp4
            });
          } else {
            tmp6 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: tmp6
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: tmp7
          });
        }
        if (input instanceof Object) {
          if ("rhs" in input) {
            rhs1 = input.rhs;
            tmp8 = runtime.safeCall(matcher__Truthy_Falsy$(rhs1));
            tmp9 = globalThis.Object.freeze({
              input: rhs1,
              result: tmp8
            });
          } else {
            tmp10 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp9 = globalThis.Object.freeze({
              input: null,
              result: tmp10
            });
          }
        } else {
          tmp11 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp9 = globalThis.Object.freeze({
            input: null,
            result: tmp11
          });
        }
        result0$3 = tmp5.result.p_0;
        if (result0$3 === true) {
          result0$2 = tmp9.result.p_0;
          if (result0$2 === true) {
            return true
          }
          result0$4 = tmp5.result.p_0;
          if (result0$4 === true) {
            result1$ = tmp9.result.p_1;
            if (result1$ === true) {
              return true
            }
            result1$1 = tmp5.result.p_1;
            if (result1$1 === true) {
              result0$5 = tmp9.result.p_0;
              if (result0$5 === true) {
                return true
              }
              return false;
            }
            return false;
          }
          result1$1 = tmp5.result.p_1;
          if (result1$1 === true) {
            result0$5 = tmp9.result.p_0;
            if (result0$5 === true) {
              return true
            }
            return false;
          }
          return false;
        }
        result0$4 = tmp5.result.p_0;
        if (result0$4 === true) {
          result1$ = tmp9.result.p_1;
          if (result1$ === true) {
            return true
          }
          result1$1 = tmp5.result.p_1;
          if (result1$1 === true) {
            result0$5 = tmp9.result.p_0;
            if (result0$5 === true) {
              return true
            }
            return false;
          }
          return false;
        }
        result1$1 = tmp5.result.p_1;
        if (result1$1 === true) {
          result0$5 = tmp9.result.p_0;
          if (result0$5 === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof TruthyFalsy1.Not.class) {
        if (input instanceof Object) {
          if ("arg" in input) {
            arg = input.arg;
            tmp12 = runtime.safeCall(matcher__Falsy$(arg));
            tmp13 = globalThis.Object.freeze({
              input: arg,
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
        result1$2 = tmp13.result;
        if (result1$2 === true) {
          return true
        }
        return false;
      }
      return false;
    });
    matcher__Truthy$ = lambda1;
    lambda2 = (undefined, function (input) {
      let lhs, rhs, result0$, result0$1, result1$, result1$1, result0$2, result1$2, result1$3, result0$3, lhs1, rhs1, result0$4, result0$5, result1$4, result0$6, result0$7, result1$5, result1$6, result1$7, arg, result1$8, result0$8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22;
      if (input instanceof TruthyFalsy1.And.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs = input.lhs;
            tmp = runtime.safeCall(matcher__Truthy_Falsy$(lhs));
            tmp1 = globalThis.Object.freeze({
              input: lhs,
              result: tmp
            });
          } else {
            tmp2 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp1 = globalThis.Object.freeze({
              input: null,
              result: tmp2
            });
          }
        } else {
          tmp3 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp1 = globalThis.Object.freeze({
            input: null,
            result: tmp3
          });
        }
        if (input instanceof Object) {
          if ("rhs" in input) {
            rhs = input.rhs;
            tmp4 = runtime.safeCall(matcher__Truthy_Falsy$(rhs));
            tmp5 = globalThis.Object.freeze({
              input: rhs,
              result: tmp4
            });
          } else {
            tmp6 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: tmp6
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: tmp7
          });
        }
        result0$1 = tmp1.result.p_0;
        if (result0$1 === true) {
          result0$ = tmp5.result.p_0;
          if (result0$ === true) {
            tmp8 = true;
          } else {
            tmp8 = false;
          }
        } else {
          tmp8 = false;
        }
        result1$1 = tmp1.result.p_1;
        if (result1$1 === true) {
          result1$ = tmp5.result.p_1;
          if (result1$ === true) {
            return globalThis.Object.freeze({
              p_0: tmp8,
              p_1: true
            })
          }
          result1$2 = tmp1.result.p_1;
          if (result1$2 === true) {
            result0$2 = tmp5.result.p_0;
            if (result0$2 === true) {
              return globalThis.Object.freeze({
                p_0: tmp8,
                p_1: true
              })
            }
            result0$3 = tmp1.result.p_0;
            if (result0$3 === true) {
              result1$3 = tmp5.result.p_1;
              if (result1$3 === true) {
                return globalThis.Object.freeze({
                  p_0: tmp8,
                  p_1: true
                })
              }
              return globalThis.Object.freeze({
                p_0: tmp8,
                p_1: false
              });
            }
            return globalThis.Object.freeze({
              p_0: tmp8,
              p_1: false
            });
          }
          result0$3 = tmp1.result.p_0;
          if (result0$3 === true) {
            result1$3 = tmp5.result.p_1;
            if (result1$3 === true) {
              return globalThis.Object.freeze({
                p_0: tmp8,
                p_1: true
              })
            }
            return globalThis.Object.freeze({
              p_0: tmp8,
              p_1: false
            });
          }
          return globalThis.Object.freeze({
            p_0: tmp8,
            p_1: false
          });
        }
        result1$2 = tmp1.result.p_1;
        if (result1$2 === true) {
          result0$2 = tmp5.result.p_0;
          if (result0$2 === true) {
            return globalThis.Object.freeze({
              p_0: tmp8,
              p_1: true
            })
          }
          result0$3 = tmp1.result.p_0;
          if (result0$3 === true) {
            result1$3 = tmp5.result.p_1;
            if (result1$3 === true) {
              return globalThis.Object.freeze({
                p_0: tmp8,
                p_1: true
              })
            }
            return globalThis.Object.freeze({
              p_0: tmp8,
              p_1: false
            });
          }
          return globalThis.Object.freeze({
            p_0: tmp8,
            p_1: false
          });
        }
        result0$3 = tmp1.result.p_0;
        if (result0$3 === true) {
          result1$3 = tmp5.result.p_1;
          if (result1$3 === true) {
            return globalThis.Object.freeze({
              p_0: tmp8,
              p_1: true
            })
          }
          return globalThis.Object.freeze({
            p_0: tmp8,
            p_1: false
          });
        }
        return globalThis.Object.freeze({
          p_0: tmp8,
          p_1: false
        });
      } else if (input === false) {
        return globalThis.Object.freeze({
          p_0: false,
          p_1: true
        })
      } else if (input instanceof TruthyFalsy1.Or.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs1 = input.lhs;
            tmp9 = runtime.safeCall(matcher__Truthy_Falsy$(lhs1));
            tmp10 = globalThis.Object.freeze({
              input: lhs1,
              result: tmp9
            });
          } else {
            tmp11 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp10 = globalThis.Object.freeze({
              input: null,
              result: tmp11
            });
          }
        } else {
          tmp12 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp10 = globalThis.Object.freeze({
            input: null,
            result: tmp12
          });
        }
        if (input instanceof Object) {
          if ("rhs" in input) {
            rhs1 = input.rhs;
            tmp13 = runtime.safeCall(matcher__Truthy_Falsy$(rhs1));
            tmp14 = globalThis.Object.freeze({
              input: rhs1,
              result: tmp13
            });
          } else {
            tmp15 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp14 = globalThis.Object.freeze({
              input: null,
              result: tmp15
            });
          }
        } else {
          tmp16 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp14 = globalThis.Object.freeze({
            input: null,
            result: tmp16
          });
        }
        result0$5 = tmp10.result.p_0;
        if (result0$5 === true) {
          result0$4 = tmp14.result.p_0;
          if (result0$4 === true) {
            tmp17 = true;
          } else {
            result0$6 = tmp10.result.p_0;
            if (result0$6 === true) {
              result1$4 = tmp14.result.p_1;
              if (result1$4 === true) {
                tmp17 = true;
              } else {
                result1$5 = tmp10.result.p_1;
                if (result1$5 === true) {
                  result0$7 = tmp14.result.p_0;
                  if (result0$7 === true) {
                    tmp17 = true;
                  } else {
                    tmp17 = false;
                  }
                } else {
                  tmp17 = false;
                }
              }
            } else {
              result1$5 = tmp10.result.p_1;
              if (result1$5 === true) {
                result0$7 = tmp14.result.p_0;
                if (result0$7 === true) {
                  tmp17 = true;
                } else {
                  tmp17 = false;
                }
              } else {
                tmp17 = false;
              }
            }
          }
        } else {
          result0$6 = tmp10.result.p_0;
          if (result0$6 === true) {
            result1$4 = tmp14.result.p_1;
            if (result1$4 === true) {
              tmp17 = true;
            } else {
              result1$5 = tmp10.result.p_1;
              if (result1$5 === true) {
                result0$7 = tmp14.result.p_0;
                if (result0$7 === true) {
                  tmp17 = true;
                } else {
                  tmp17 = false;
                }
              } else {
                tmp17 = false;
              }
            }
          } else {
            result1$5 = tmp10.result.p_1;
            if (result1$5 === true) {
              result0$7 = tmp14.result.p_0;
              if (result0$7 === true) {
                tmp17 = true;
              } else {
                tmp17 = false;
              }
            } else {
              tmp17 = false;
            }
          }
        }
        result1$7 = tmp10.result.p_1;
        if (result1$7 === true) {
          result1$6 = tmp14.result.p_1;
          if (result1$6 === true) {
            return globalThis.Object.freeze({
              p_0: tmp17,
              p_1: true
            })
          }
          return globalThis.Object.freeze({
            p_0: tmp17,
            p_1: false
          });
        }
        return globalThis.Object.freeze({
          p_0: tmp17,
          p_1: false
        });
      } else if (input instanceof TruthyFalsy1.Not.class) {
        if (input instanceof Object) {
          if ("arg" in input) {
            arg = input.arg;
            tmp18 = runtime.safeCall(matcher__Truthy_Falsy$(arg));
            tmp19 = globalThis.Object.freeze({
              input: arg,
              result: tmp18
            });
          } else {
            tmp20 = globalThis.Object.freeze({
              p_1: false,
              p_0: false
            });
            tmp19 = globalThis.Object.freeze({
              input: null,
              result: tmp20
            });
          }
        } else {
          tmp21 = globalThis.Object.freeze({
            p_1: false,
            p_0: false
          });
          tmp19 = globalThis.Object.freeze({
            input: null,
            result: tmp21
          });
        }
        result1$8 = tmp19.result.p_1;
        if (result1$8 === true) {
          tmp22 = true;
        } else {
          tmp22 = false;
        }
        result0$8 = tmp19.result.p_0;
        if (result0$8 === true) {
          return globalThis.Object.freeze({
            p_0: tmp22,
            p_1: true
          })
        }
        return globalThis.Object.freeze({
          p_0: tmp22,
          p_1: false
        });
      } else if (input === true) {
        return globalThis.Object.freeze({
          p_0: true,
          p_1: false
        })
      }
      return globalThis.Object.freeze({
        p_0: false,
        p_1: false
      });
    });
    matcher__Truthy_Falsy$ = lambda2;
    matchSuccess = runtime.safeCall(matcher__Truthy$(t));
    if (matchSuccess === true) {
      return t
    }
    return runtime.Unit;
  } 
  static isTruthy_optimized_matchOnly(t) {
    let matcher__Truthy$, matcher__Truthy_Falsy$, matcher__Falsy$, matchSuccess, lambda, lambda1, lambda2;
    lambda = (undefined, function (input) {
      let lhs, rhs, result0$, result0$1, lhs1, rhs1, result0$2, result0$3, result1$, result0$4, result0$5, result1$1, arg, result1$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
      if (input === true) {
        return true
      } else if (input instanceof TruthyFalsy1.And.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs = input.lhs;
            tmp = runtime.safeCall(matcher__Truthy$(lhs));
            tmp1 = globalThis.Object.freeze({
              input: lhs,
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
          if ("rhs" in input) {
            rhs = input.rhs;
            tmp2 = runtime.safeCall(matcher__Truthy$(rhs));
            tmp3 = globalThis.Object.freeze({
              input: rhs,
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
        result0$1 = tmp1.result;
        if (result0$1 === true) {
          result0$ = tmp3.result;
          if (result0$ === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof TruthyFalsy1.Or.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs1 = input.lhs;
            tmp4 = runtime.safeCall(matcher__Truthy_Falsy$(lhs1));
            tmp5 = globalThis.Object.freeze({
              input: lhs1,
              result: tmp4
            });
          } else {
            tmp6 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: tmp6
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: tmp7
          });
        }
        if (input instanceof Object) {
          if ("rhs" in input) {
            rhs1 = input.rhs;
            tmp8 = runtime.safeCall(matcher__Truthy_Falsy$(rhs1));
            tmp9 = globalThis.Object.freeze({
              input: rhs1,
              result: tmp8
            });
          } else {
            tmp10 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp9 = globalThis.Object.freeze({
              input: null,
              result: tmp10
            });
          }
        } else {
          tmp11 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp9 = globalThis.Object.freeze({
            input: null,
            result: tmp11
          });
        }
        result0$3 = tmp5.result.p_0;
        if (result0$3 === true) {
          result0$2 = tmp9.result.p_0;
          if (result0$2 === true) {
            return true
          }
          result0$4 = tmp5.result.p_0;
          if (result0$4 === true) {
            result1$ = tmp9.result.p_1;
            if (result1$ === true) {
              return true
            }
            result1$1 = tmp5.result.p_1;
            if (result1$1 === true) {
              result0$5 = tmp9.result.p_0;
              if (result0$5 === true) {
                return true
              }
              return false;
            }
            return false;
          }
          result1$1 = tmp5.result.p_1;
          if (result1$1 === true) {
            result0$5 = tmp9.result.p_0;
            if (result0$5 === true) {
              return true
            }
            return false;
          }
          return false;
        }
        result0$4 = tmp5.result.p_0;
        if (result0$4 === true) {
          result1$ = tmp9.result.p_1;
          if (result1$ === true) {
            return true
          }
          result1$1 = tmp5.result.p_1;
          if (result1$1 === true) {
            result0$5 = tmp9.result.p_0;
            if (result0$5 === true) {
              return true
            }
            return false;
          }
          return false;
        }
        result1$1 = tmp5.result.p_1;
        if (result1$1 === true) {
          result0$5 = tmp9.result.p_0;
          if (result0$5 === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof TruthyFalsy1.Not.class) {
        if (input instanceof Object) {
          if ("arg" in input) {
            arg = input.arg;
            tmp12 = runtime.safeCall(matcher__Falsy$(arg));
            tmp13 = globalThis.Object.freeze({
              input: arg,
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
        result1$2 = tmp13.result;
        if (result1$2 === true) {
          return true
        }
        return false;
      }
      return false;
    });
    matcher__Truthy$ = lambda;
    lambda1 = (undefined, function (input) {
      let lhs, rhs, result0$, result0$1, result1$, result1$1, result0$2, result1$2, result1$3, result0$3, lhs1, rhs1, result0$4, result0$5, result1$4, result0$6, result0$7, result1$5, result1$6, result1$7, arg, result1$8, result0$8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22;
      if (input instanceof TruthyFalsy1.And.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs = input.lhs;
            tmp = runtime.safeCall(matcher__Truthy_Falsy$(lhs));
            tmp1 = globalThis.Object.freeze({
              input: lhs,
              result: tmp
            });
          } else {
            tmp2 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp1 = globalThis.Object.freeze({
              input: null,
              result: tmp2
            });
          }
        } else {
          tmp3 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp1 = globalThis.Object.freeze({
            input: null,
            result: tmp3
          });
        }
        if (input instanceof Object) {
          if ("rhs" in input) {
            rhs = input.rhs;
            tmp4 = runtime.safeCall(matcher__Truthy_Falsy$(rhs));
            tmp5 = globalThis.Object.freeze({
              input: rhs,
              result: tmp4
            });
          } else {
            tmp6 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: tmp6
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: tmp7
          });
        }
        result0$1 = tmp1.result.p_0;
        if (result0$1 === true) {
          result0$ = tmp5.result.p_0;
          if (result0$ === true) {
            tmp8 = true;
          } else {
            tmp8 = false;
          }
        } else {
          tmp8 = false;
        }
        result1$1 = tmp1.result.p_1;
        if (result1$1 === true) {
          result1$ = tmp5.result.p_1;
          if (result1$ === true) {
            return globalThis.Object.freeze({
              p_0: tmp8,
              p_1: true
            })
          }
          result1$2 = tmp1.result.p_1;
          if (result1$2 === true) {
            result0$2 = tmp5.result.p_0;
            if (result0$2 === true) {
              return globalThis.Object.freeze({
                p_0: tmp8,
                p_1: true
              })
            }
            result0$3 = tmp1.result.p_0;
            if (result0$3 === true) {
              result1$3 = tmp5.result.p_1;
              if (result1$3 === true) {
                return globalThis.Object.freeze({
                  p_0: tmp8,
                  p_1: true
                })
              }
              return globalThis.Object.freeze({
                p_0: tmp8,
                p_1: false
              });
            }
            return globalThis.Object.freeze({
              p_0: tmp8,
              p_1: false
            });
          }
          result0$3 = tmp1.result.p_0;
          if (result0$3 === true) {
            result1$3 = tmp5.result.p_1;
            if (result1$3 === true) {
              return globalThis.Object.freeze({
                p_0: tmp8,
                p_1: true
              })
            }
            return globalThis.Object.freeze({
              p_0: tmp8,
              p_1: false
            });
          }
          return globalThis.Object.freeze({
            p_0: tmp8,
            p_1: false
          });
        }
        result1$2 = tmp1.result.p_1;
        if (result1$2 === true) {
          result0$2 = tmp5.result.p_0;
          if (result0$2 === true) {
            return globalThis.Object.freeze({
              p_0: tmp8,
              p_1: true
            })
          }
          result0$3 = tmp1.result.p_0;
          if (result0$3 === true) {
            result1$3 = tmp5.result.p_1;
            if (result1$3 === true) {
              return globalThis.Object.freeze({
                p_0: tmp8,
                p_1: true
              })
            }
            return globalThis.Object.freeze({
              p_0: tmp8,
              p_1: false
            });
          }
          return globalThis.Object.freeze({
            p_0: tmp8,
            p_1: false
          });
        }
        result0$3 = tmp1.result.p_0;
        if (result0$3 === true) {
          result1$3 = tmp5.result.p_1;
          if (result1$3 === true) {
            return globalThis.Object.freeze({
              p_0: tmp8,
              p_1: true
            })
          }
          return globalThis.Object.freeze({
            p_0: tmp8,
            p_1: false
          });
        }
        return globalThis.Object.freeze({
          p_0: tmp8,
          p_1: false
        });
      } else if (input === false) {
        return globalThis.Object.freeze({
          p_0: false,
          p_1: true
        })
      } else if (input instanceof TruthyFalsy1.Or.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs1 = input.lhs;
            tmp9 = runtime.safeCall(matcher__Truthy_Falsy$(lhs1));
            tmp10 = globalThis.Object.freeze({
              input: lhs1,
              result: tmp9
            });
          } else {
            tmp11 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp10 = globalThis.Object.freeze({
              input: null,
              result: tmp11
            });
          }
        } else {
          tmp12 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp10 = globalThis.Object.freeze({
            input: null,
            result: tmp12
          });
        }
        if (input instanceof Object) {
          if ("rhs" in input) {
            rhs1 = input.rhs;
            tmp13 = runtime.safeCall(matcher__Truthy_Falsy$(rhs1));
            tmp14 = globalThis.Object.freeze({
              input: rhs1,
              result: tmp13
            });
          } else {
            tmp15 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp14 = globalThis.Object.freeze({
              input: null,
              result: tmp15
            });
          }
        } else {
          tmp16 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp14 = globalThis.Object.freeze({
            input: null,
            result: tmp16
          });
        }
        result0$5 = tmp10.result.p_0;
        if (result0$5 === true) {
          result0$4 = tmp14.result.p_0;
          if (result0$4 === true) {
            tmp17 = true;
          } else {
            result0$6 = tmp10.result.p_0;
            if (result0$6 === true) {
              result1$4 = tmp14.result.p_1;
              if (result1$4 === true) {
                tmp17 = true;
              } else {
                result1$5 = tmp10.result.p_1;
                if (result1$5 === true) {
                  result0$7 = tmp14.result.p_0;
                  if (result0$7 === true) {
                    tmp17 = true;
                  } else {
                    tmp17 = false;
                  }
                } else {
                  tmp17 = false;
                }
              }
            } else {
              result1$5 = tmp10.result.p_1;
              if (result1$5 === true) {
                result0$7 = tmp14.result.p_0;
                if (result0$7 === true) {
                  tmp17 = true;
                } else {
                  tmp17 = false;
                }
              } else {
                tmp17 = false;
              }
            }
          }
        } else {
          result0$6 = tmp10.result.p_0;
          if (result0$6 === true) {
            result1$4 = tmp14.result.p_1;
            if (result1$4 === true) {
              tmp17 = true;
            } else {
              result1$5 = tmp10.result.p_1;
              if (result1$5 === true) {
                result0$7 = tmp14.result.p_0;
                if (result0$7 === true) {
                  tmp17 = true;
                } else {
                  tmp17 = false;
                }
              } else {
                tmp17 = false;
              }
            }
          } else {
            result1$5 = tmp10.result.p_1;
            if (result1$5 === true) {
              result0$7 = tmp14.result.p_0;
              if (result0$7 === true) {
                tmp17 = true;
              } else {
                tmp17 = false;
              }
            } else {
              tmp17 = false;
            }
          }
        }
        result1$7 = tmp10.result.p_1;
        if (result1$7 === true) {
          result1$6 = tmp14.result.p_1;
          if (result1$6 === true) {
            return globalThis.Object.freeze({
              p_0: tmp17,
              p_1: true
            })
          }
          return globalThis.Object.freeze({
            p_0: tmp17,
            p_1: false
          });
        }
        return globalThis.Object.freeze({
          p_0: tmp17,
          p_1: false
        });
      } else if (input instanceof TruthyFalsy1.Not.class) {
        if (input instanceof Object) {
          if ("arg" in input) {
            arg = input.arg;
            tmp18 = runtime.safeCall(matcher__Truthy_Falsy$(arg));
            tmp19 = globalThis.Object.freeze({
              input: arg,
              result: tmp18
            });
          } else {
            tmp20 = globalThis.Object.freeze({
              p_1: false,
              p_0: false
            });
            tmp19 = globalThis.Object.freeze({
              input: null,
              result: tmp20
            });
          }
        } else {
          tmp21 = globalThis.Object.freeze({
            p_1: false,
            p_0: false
          });
          tmp19 = globalThis.Object.freeze({
            input: null,
            result: tmp21
          });
        }
        result1$8 = tmp19.result.p_1;
        if (result1$8 === true) {
          tmp22 = true;
        } else {
          tmp22 = false;
        }
        result0$8 = tmp19.result.p_0;
        if (result0$8 === true) {
          return globalThis.Object.freeze({
            p_0: tmp22,
            p_1: true
          })
        }
        return globalThis.Object.freeze({
          p_0: tmp22,
          p_1: false
        });
      } else if (input === true) {
        return globalThis.Object.freeze({
          p_0: true,
          p_1: false
        })
      }
      return globalThis.Object.freeze({
        p_0: false,
        p_1: false
      });
    });
    matcher__Truthy_Falsy$ = lambda1;
    lambda2 = (undefined, function (input) {
      let lhs, rhs, result1$, result1$1, result0$, result1$2, result1$3, result0$1, lhs1, rhs1, result1$4, result1$5, arg, result0$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
      if (input === false) {
        return true
      } else if (input instanceof TruthyFalsy1.And.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs = input.lhs;
            tmp = runtime.safeCall(matcher__Truthy_Falsy$(lhs));
            tmp1 = globalThis.Object.freeze({
              input: lhs,
              result: tmp
            });
          } else {
            tmp2 = globalThis.Object.freeze({
              p_1: false,
              p_0: false
            });
            tmp1 = globalThis.Object.freeze({
              input: null,
              result: tmp2
            });
          }
        } else {
          tmp3 = globalThis.Object.freeze({
            p_1: false,
            p_0: false
          });
          tmp1 = globalThis.Object.freeze({
            input: null,
            result: tmp3
          });
        }
        if (input instanceof Object) {
          if ("rhs" in input) {
            rhs = input.rhs;
            tmp4 = runtime.safeCall(matcher__Truthy_Falsy$(rhs));
            tmp5 = globalThis.Object.freeze({
              input: rhs,
              result: tmp4
            });
          } else {
            tmp6 = globalThis.Object.freeze({
              p_1: false,
              p_0: false
            });
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: tmp6
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            p_1: false,
            p_0: false
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
            return true
          }
          result1$2 = tmp1.result.p_1;
          if (result1$2 === true) {
            result0$ = tmp5.result.p_0;
            if (result0$ === true) {
              return true
            }
            result0$1 = tmp1.result.p_0;
            if (result0$1 === true) {
              result1$3 = tmp5.result.p_1;
              if (result1$3 === true) {
                return true
              }
              return false;
            }
            return false;
          }
          result0$1 = tmp1.result.p_0;
          if (result0$1 === true) {
            result1$3 = tmp5.result.p_1;
            if (result1$3 === true) {
              return true
            }
            return false;
          }
          return false;
        }
        result1$2 = tmp1.result.p_1;
        if (result1$2 === true) {
          result0$ = tmp5.result.p_0;
          if (result0$ === true) {
            return true
          }
          result0$1 = tmp1.result.p_0;
          if (result0$1 === true) {
            result1$3 = tmp5.result.p_1;
            if (result1$3 === true) {
              return true
            }
            return false;
          }
          return false;
        }
        result0$1 = tmp1.result.p_0;
        if (result0$1 === true) {
          result1$3 = tmp5.result.p_1;
          if (result1$3 === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof TruthyFalsy1.Or.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs1 = input.lhs;
            tmp8 = runtime.safeCall(matcher__Falsy$(lhs1));
            tmp9 = globalThis.Object.freeze({
              input: lhs1,
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
          if ("rhs" in input) {
            rhs1 = input.rhs;
            tmp10 = runtime.safeCall(matcher__Falsy$(rhs1));
            tmp11 = globalThis.Object.freeze({
              input: rhs1,
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
        result1$5 = tmp9.result;
        if (result1$5 === true) {
          result1$4 = tmp11.result;
          if (result1$4 === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof TruthyFalsy1.Not.class) {
        if (input instanceof Object) {
          if ("arg" in input) {
            arg = input.arg;
            tmp12 = runtime.safeCall(matcher__Truthy$(arg));
            tmp13 = globalThis.Object.freeze({
              input: arg,
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
        result0$2 = tmp13.result;
        if (result0$2 === true) {
          return true
        }
        return false;
      }
      return false;
    });
    matcher__Falsy$ = lambda2;
    matchSuccess = runtime.safeCall(matcher__Truthy$(t));
    if (matchSuccess === true) {
      return true
    }
    return false;
  } 
  static isFalsy_naive(t) {
    let unapplyResult;
    unapplyResult = runtime.safeCall(TruthyFalsy.Falsy.unapply(t));
    if (unapplyResult instanceof runtime.MatchSuccess.class) {
      unapplyResult.output;
      unapplyResult.bindings;
      return true
    }
    return false;
  } 
  static isFalsy_optimized(t) {
    let matcher__Falsy$, matcher__Falsy_Truthy$, matcher__Truthy$, matchSuccess, lambda, lambda1, lambda2;
    lambda = (undefined, function (input) {
      let lhs, rhs, result0$, result0$1, result1$, result0$2, result0$3, result1$1, result1$2, result1$3, lhs1, rhs1, result0$4, result0$5, result1$4, result1$5, result0$6, result1$6, result1$7, result0$7, arg, result1$8, result0$8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22;
      if (input instanceof TruthyFalsy1.And.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs = input.lhs;
            tmp = runtime.safeCall(matcher__Falsy_Truthy$(lhs));
            tmp1 = globalThis.Object.freeze({
              input: lhs,
              result: tmp
            });
          } else {
            tmp2 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp1 = globalThis.Object.freeze({
              input: null,
              result: tmp2
            });
          }
        } else {
          tmp3 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp1 = globalThis.Object.freeze({
            input: null,
            result: tmp3
          });
        }
        if (input instanceof Object) {
          if ("rhs" in input) {
            rhs = input.rhs;
            tmp4 = runtime.safeCall(matcher__Falsy_Truthy$(rhs));
            tmp5 = globalThis.Object.freeze({
              input: rhs,
              result: tmp4
            });
          } else {
            tmp6 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: tmp6
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: tmp7
          });
        }
        result0$1 = tmp1.result.p_0;
        if (result0$1 === true) {
          result0$ = tmp5.result.p_0;
          if (result0$ === true) {
            tmp8 = true;
          } else {
            result0$2 = tmp1.result.p_0;
            if (result0$2 === true) {
              result1$ = tmp5.result.p_1;
              if (result1$ === true) {
                tmp8 = true;
              } else {
                result1$1 = tmp1.result.p_1;
                if (result1$1 === true) {
                  result0$3 = tmp5.result.p_0;
                  if (result0$3 === true) {
                    tmp8 = true;
                  } else {
                    tmp8 = false;
                  }
                } else {
                  tmp8 = false;
                }
              }
            } else {
              result1$1 = tmp1.result.p_1;
              if (result1$1 === true) {
                result0$3 = tmp5.result.p_0;
                if (result0$3 === true) {
                  tmp8 = true;
                } else {
                  tmp8 = false;
                }
              } else {
                tmp8 = false;
              }
            }
          }
        } else {
          result0$2 = tmp1.result.p_0;
          if (result0$2 === true) {
            result1$ = tmp5.result.p_1;
            if (result1$ === true) {
              tmp8 = true;
            } else {
              result1$1 = tmp1.result.p_1;
              if (result1$1 === true) {
                result0$3 = tmp5.result.p_0;
                if (result0$3 === true) {
                  tmp8 = true;
                } else {
                  tmp8 = false;
                }
              } else {
                tmp8 = false;
              }
            }
          } else {
            result1$1 = tmp1.result.p_1;
            if (result1$1 === true) {
              result0$3 = tmp5.result.p_0;
              if (result0$3 === true) {
                tmp8 = true;
              } else {
                tmp8 = false;
              }
            } else {
              tmp8 = false;
            }
          }
        }
        result1$3 = tmp1.result.p_1;
        if (result1$3 === true) {
          result1$2 = tmp5.result.p_1;
          if (result1$2 === true) {
            return globalThis.Object.freeze({
              p_0: tmp8,
              p_1: true
            })
          }
          return globalThis.Object.freeze({
            p_0: tmp8,
            p_1: false
          });
        }
        return globalThis.Object.freeze({
          p_0: tmp8,
          p_1: false
        });
      } else if (input === false) {
        return globalThis.Object.freeze({
          p_0: true,
          p_1: false
        })
      } else if (input instanceof TruthyFalsy1.Or.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs1 = input.lhs;
            tmp9 = runtime.safeCall(matcher__Falsy_Truthy$(lhs1));
            tmp10 = globalThis.Object.freeze({
              input: lhs1,
              result: tmp9
            });
          } else {
            tmp11 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp10 = globalThis.Object.freeze({
              input: null,
              result: tmp11
            });
          }
        } else {
          tmp12 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp10 = globalThis.Object.freeze({
            input: null,
            result: tmp12
          });
        }
        if (input instanceof Object) {
          if ("rhs" in input) {
            rhs1 = input.rhs;
            tmp13 = runtime.safeCall(matcher__Falsy_Truthy$(rhs1));
            tmp14 = globalThis.Object.freeze({
              input: rhs1,
              result: tmp13
            });
          } else {
            tmp15 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp14 = globalThis.Object.freeze({
              input: null,
              result: tmp15
            });
          }
        } else {
          tmp16 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp14 = globalThis.Object.freeze({
            input: null,
            result: tmp16
          });
        }
        result0$5 = tmp10.result.p_0;
        if (result0$5 === true) {
          result0$4 = tmp14.result.p_0;
          if (result0$4 === true) {
            tmp17 = true;
          } else {
            tmp17 = false;
          }
        } else {
          tmp17 = false;
        }
        result1$5 = tmp10.result.p_1;
        if (result1$5 === true) {
          result1$4 = tmp14.result.p_1;
          if (result1$4 === true) {
            return globalThis.Object.freeze({
              p_0: tmp17,
              p_1: true
            })
          }
          result1$6 = tmp10.result.p_1;
          if (result1$6 === true) {
            result0$6 = tmp14.result.p_0;
            if (result0$6 === true) {
              return globalThis.Object.freeze({
                p_0: tmp17,
                p_1: true
              })
            }
            result0$7 = tmp10.result.p_0;
            if (result0$7 === true) {
              result1$7 = tmp14.result.p_1;
              if (result1$7 === true) {
                return globalThis.Object.freeze({
                  p_0: tmp17,
                  p_1: true
                })
              }
              return globalThis.Object.freeze({
                p_0: tmp17,
                p_1: false
              });
            }
            return globalThis.Object.freeze({
              p_0: tmp17,
              p_1: false
            });
          }
          result0$7 = tmp10.result.p_0;
          if (result0$7 === true) {
            result1$7 = tmp14.result.p_1;
            if (result1$7 === true) {
              return globalThis.Object.freeze({
                p_0: tmp17,
                p_1: true
              })
            }
            return globalThis.Object.freeze({
              p_0: tmp17,
              p_1: false
            });
          }
          return globalThis.Object.freeze({
            p_0: tmp17,
            p_1: false
          });
        }
        result1$6 = tmp10.result.p_1;
        if (result1$6 === true) {
          result0$6 = tmp14.result.p_0;
          if (result0$6 === true) {
            return globalThis.Object.freeze({
              p_0: tmp17,
              p_1: true
            })
          }
          result0$7 = tmp10.result.p_0;
          if (result0$7 === true) {
            result1$7 = tmp14.result.p_1;
            if (result1$7 === true) {
              return globalThis.Object.freeze({
                p_0: tmp17,
                p_1: true
              })
            }
            return globalThis.Object.freeze({
              p_0: tmp17,
              p_1: false
            });
          }
          return globalThis.Object.freeze({
            p_0: tmp17,
            p_1: false
          });
        }
        result0$7 = tmp10.result.p_0;
        if (result0$7 === true) {
          result1$7 = tmp14.result.p_1;
          if (result1$7 === true) {
            return globalThis.Object.freeze({
              p_0: tmp17,
              p_1: true
            })
          }
          return globalThis.Object.freeze({
            p_0: tmp17,
            p_1: false
          });
        }
        return globalThis.Object.freeze({
          p_0: tmp17,
          p_1: false
        });
      } else if (input instanceof TruthyFalsy1.Not.class) {
        if (input instanceof Object) {
          if ("arg" in input) {
            arg = input.arg;
            tmp18 = runtime.safeCall(matcher__Falsy_Truthy$(arg));
            tmp19 = globalThis.Object.freeze({
              input: arg,
              result: tmp18
            });
          } else {
            tmp20 = globalThis.Object.freeze({
              p_1: false,
              p_0: false
            });
            tmp19 = globalThis.Object.freeze({
              input: null,
              result: tmp20
            });
          }
        } else {
          tmp21 = globalThis.Object.freeze({
            p_1: false,
            p_0: false
          });
          tmp19 = globalThis.Object.freeze({
            input: null,
            result: tmp21
          });
        }
        result1$8 = tmp19.result.p_1;
        if (result1$8 === true) {
          tmp22 = true;
        } else {
          tmp22 = false;
        }
        result0$8 = tmp19.result.p_0;
        if (result0$8 === true) {
          return globalThis.Object.freeze({
            p_0: tmp22,
            p_1: true
          })
        }
        return globalThis.Object.freeze({
          p_0: tmp22,
          p_1: false
        });
      } else if (input === true) {
        return globalThis.Object.freeze({
          p_0: false,
          p_1: true
        })
      }
      return globalThis.Object.freeze({
        p_0: false,
        p_1: false
      });
    });
    matcher__Falsy_Truthy$ = lambda;
    lambda1 = (undefined, function (input) {
      let lhs, rhs, result1$, result1$1, lhs1, rhs1, result1$2, result1$3, result0$, result1$4, result1$5, result0$1, arg, result0$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
      if (input === true) {
        return true
      } else if (input instanceof TruthyFalsy1.And.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs = input.lhs;
            tmp = runtime.safeCall(matcher__Truthy$(lhs));
            tmp1 = globalThis.Object.freeze({
              input: lhs,
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
          if ("rhs" in input) {
            rhs = input.rhs;
            tmp2 = runtime.safeCall(matcher__Truthy$(rhs));
            tmp3 = globalThis.Object.freeze({
              input: rhs,
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
      } else if (input instanceof TruthyFalsy1.Or.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs1 = input.lhs;
            tmp4 = runtime.safeCall(matcher__Falsy_Truthy$(lhs1));
            tmp5 = globalThis.Object.freeze({
              input: lhs1,
              result: tmp4
            });
          } else {
            tmp6 = globalThis.Object.freeze({
              p_1: false,
              p_0: false
            });
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: tmp6
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            p_1: false,
            p_0: false
          });
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: tmp7
          });
        }
        if (input instanceof Object) {
          if ("rhs" in input) {
            rhs1 = input.rhs;
            tmp8 = runtime.safeCall(matcher__Falsy_Truthy$(rhs1));
            tmp9 = globalThis.Object.freeze({
              input: rhs1,
              result: tmp8
            });
          } else {
            tmp10 = globalThis.Object.freeze({
              p_1: false,
              p_0: false
            });
            tmp9 = globalThis.Object.freeze({
              input: null,
              result: tmp10
            });
          }
        } else {
          tmp11 = globalThis.Object.freeze({
            p_1: false,
            p_0: false
          });
          tmp9 = globalThis.Object.freeze({
            input: null,
            result: tmp11
          });
        }
        result1$3 = tmp5.result.p_1;
        if (result1$3 === true) {
          result1$2 = tmp9.result.p_1;
          if (result1$2 === true) {
            return true
          }
          result1$4 = tmp5.result.p_1;
          if (result1$4 === true) {
            result0$ = tmp9.result.p_0;
            if (result0$ === true) {
              return true
            }
            result0$1 = tmp5.result.p_0;
            if (result0$1 === true) {
              result1$5 = tmp9.result.p_1;
              if (result1$5 === true) {
                return true
              }
              return false;
            }
            return false;
          }
          result0$1 = tmp5.result.p_0;
          if (result0$1 === true) {
            result1$5 = tmp9.result.p_1;
            if (result1$5 === true) {
              return true
            }
            return false;
          }
          return false;
        }
        result1$4 = tmp5.result.p_1;
        if (result1$4 === true) {
          result0$ = tmp9.result.p_0;
          if (result0$ === true) {
            return true
          }
          result0$1 = tmp5.result.p_0;
          if (result0$1 === true) {
            result1$5 = tmp9.result.p_1;
            if (result1$5 === true) {
              return true
            }
            return false;
          }
          return false;
        }
        result0$1 = tmp5.result.p_0;
        if (result0$1 === true) {
          result1$5 = tmp9.result.p_1;
          if (result1$5 === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof TruthyFalsy1.Not.class) {
        if (input instanceof Object) {
          if ("arg" in input) {
            arg = input.arg;
            tmp12 = runtime.safeCall(matcher__Falsy$(arg));
            tmp13 = globalThis.Object.freeze({
              input: arg,
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
        result0$2 = tmp13.result;
        if (result0$2 === true) {
          return true
        }
        return false;
      }
      return false;
    });
    matcher__Truthy$ = lambda1;
    lambda2 = (undefined, function (input) {
      let lhs, rhs, result0$, result0$1, result1$, result0$2, result0$3, result1$1, lhs1, rhs1, result0$4, result0$5, arg, result1$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
      if (input === false) {
        return true
      } else if (input instanceof TruthyFalsy1.And.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs = input.lhs;
            tmp = runtime.safeCall(matcher__Falsy_Truthy$(lhs));
            tmp1 = globalThis.Object.freeze({
              input: lhs,
              result: tmp
            });
          } else {
            tmp2 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp1 = globalThis.Object.freeze({
              input: null,
              result: tmp2
            });
          }
        } else {
          tmp3 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp1 = globalThis.Object.freeze({
            input: null,
            result: tmp3
          });
        }
        if (input instanceof Object) {
          if ("rhs" in input) {
            rhs = input.rhs;
            tmp4 = runtime.safeCall(matcher__Falsy_Truthy$(rhs));
            tmp5 = globalThis.Object.freeze({
              input: rhs,
              result: tmp4
            });
          } else {
            tmp6 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: tmp6
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: tmp7
          });
        }
        result0$1 = tmp1.result.p_0;
        if (result0$1 === true) {
          result0$ = tmp5.result.p_0;
          if (result0$ === true) {
            return true
          }
          result0$2 = tmp1.result.p_0;
          if (result0$2 === true) {
            result1$ = tmp5.result.p_1;
            if (result1$ === true) {
              return true
            }
            result1$1 = tmp1.result.p_1;
            if (result1$1 === true) {
              result0$3 = tmp5.result.p_0;
              if (result0$3 === true) {
                return true
              }
              return false;
            }
            return false;
          }
          result1$1 = tmp1.result.p_1;
          if (result1$1 === true) {
            result0$3 = tmp5.result.p_0;
            if (result0$3 === true) {
              return true
            }
            return false;
          }
          return false;
        }
        result0$2 = tmp1.result.p_0;
        if (result0$2 === true) {
          result1$ = tmp5.result.p_1;
          if (result1$ === true) {
            return true
          }
          result1$1 = tmp1.result.p_1;
          if (result1$1 === true) {
            result0$3 = tmp5.result.p_0;
            if (result0$3 === true) {
              return true
            }
            return false;
          }
          return false;
        }
        result1$1 = tmp1.result.p_1;
        if (result1$1 === true) {
          result0$3 = tmp5.result.p_0;
          if (result0$3 === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof TruthyFalsy1.Or.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs1 = input.lhs;
            tmp8 = runtime.safeCall(matcher__Falsy$(lhs1));
            tmp9 = globalThis.Object.freeze({
              input: lhs1,
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
          if ("rhs" in input) {
            rhs1 = input.rhs;
            tmp10 = runtime.safeCall(matcher__Falsy$(rhs1));
            tmp11 = globalThis.Object.freeze({
              input: rhs1,
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
        result0$5 = tmp9.result;
        if (result0$5 === true) {
          result0$4 = tmp11.result;
          if (result0$4 === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof TruthyFalsy1.Not.class) {
        if (input instanceof Object) {
          if ("arg" in input) {
            arg = input.arg;
            tmp12 = runtime.safeCall(matcher__Truthy$(arg));
            tmp13 = globalThis.Object.freeze({
              input: arg,
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
        result1$2 = tmp13.result;
        if (result1$2 === true) {
          return true
        }
        return false;
      }
      return false;
    });
    matcher__Falsy$ = lambda2;
    matchSuccess = runtime.safeCall(matcher__Falsy$(t));
    if (matchSuccess === true) {
      return t
    }
    return runtime.Unit;
  } 
  static isFalsy_optimized_matchOnly(t) {
    let matcher__Falsy$, matcher__Falsy_Truthy$, matcher__Truthy$, matchSuccess, lambda, lambda1, lambda2;
    lambda = (undefined, function (input) {
      let lhs, rhs, result0$, result0$1, result1$, result0$2, result0$3, result1$1, lhs1, rhs1, result0$4, result0$5, arg, result1$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
      if (input === false) {
        return true
      } else if (input instanceof TruthyFalsy1.And.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs = input.lhs;
            tmp = runtime.safeCall(matcher__Falsy_Truthy$(lhs));
            tmp1 = globalThis.Object.freeze({
              input: lhs,
              result: tmp
            });
          } else {
            tmp2 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp1 = globalThis.Object.freeze({
              input: null,
              result: tmp2
            });
          }
        } else {
          tmp3 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp1 = globalThis.Object.freeze({
            input: null,
            result: tmp3
          });
        }
        if (input instanceof Object) {
          if ("rhs" in input) {
            rhs = input.rhs;
            tmp4 = runtime.safeCall(matcher__Falsy_Truthy$(rhs));
            tmp5 = globalThis.Object.freeze({
              input: rhs,
              result: tmp4
            });
          } else {
            tmp6 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: tmp6
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: tmp7
          });
        }
        result0$1 = tmp1.result.p_0;
        if (result0$1 === true) {
          result0$ = tmp5.result.p_0;
          if (result0$ === true) {
            return true
          }
          result0$2 = tmp1.result.p_0;
          if (result0$2 === true) {
            result1$ = tmp5.result.p_1;
            if (result1$ === true) {
              return true
            }
            result1$1 = tmp1.result.p_1;
            if (result1$1 === true) {
              result0$3 = tmp5.result.p_0;
              if (result0$3 === true) {
                return true
              }
              return false;
            }
            return false;
          }
          result1$1 = tmp1.result.p_1;
          if (result1$1 === true) {
            result0$3 = tmp5.result.p_0;
            if (result0$3 === true) {
              return true
            }
            return false;
          }
          return false;
        }
        result0$2 = tmp1.result.p_0;
        if (result0$2 === true) {
          result1$ = tmp5.result.p_1;
          if (result1$ === true) {
            return true
          }
          result1$1 = tmp1.result.p_1;
          if (result1$1 === true) {
            result0$3 = tmp5.result.p_0;
            if (result0$3 === true) {
              return true
            }
            return false;
          }
          return false;
        }
        result1$1 = tmp1.result.p_1;
        if (result1$1 === true) {
          result0$3 = tmp5.result.p_0;
          if (result0$3 === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof TruthyFalsy1.Or.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs1 = input.lhs;
            tmp8 = runtime.safeCall(matcher__Falsy$(lhs1));
            tmp9 = globalThis.Object.freeze({
              input: lhs1,
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
          if ("rhs" in input) {
            rhs1 = input.rhs;
            tmp10 = runtime.safeCall(matcher__Falsy$(rhs1));
            tmp11 = globalThis.Object.freeze({
              input: rhs1,
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
        result0$5 = tmp9.result;
        if (result0$5 === true) {
          result0$4 = tmp11.result;
          if (result0$4 === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof TruthyFalsy1.Not.class) {
        if (input instanceof Object) {
          if ("arg" in input) {
            arg = input.arg;
            tmp12 = runtime.safeCall(matcher__Truthy$(arg));
            tmp13 = globalThis.Object.freeze({
              input: arg,
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
        result1$2 = tmp13.result;
        if (result1$2 === true) {
          return true
        }
        return false;
      }
      return false;
    });
    matcher__Falsy$ = lambda;
    lambda1 = (undefined, function (input) {
      let lhs, rhs, result0$, result0$1, result1$, result0$2, result0$3, result1$1, result1$2, result1$3, lhs1, rhs1, result0$4, result0$5, result1$4, result1$5, result0$6, result1$6, result1$7, result0$7, arg, result1$8, result0$8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22;
      if (input instanceof TruthyFalsy1.And.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs = input.lhs;
            tmp = runtime.safeCall(matcher__Falsy_Truthy$(lhs));
            tmp1 = globalThis.Object.freeze({
              input: lhs,
              result: tmp
            });
          } else {
            tmp2 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp1 = globalThis.Object.freeze({
              input: null,
              result: tmp2
            });
          }
        } else {
          tmp3 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp1 = globalThis.Object.freeze({
            input: null,
            result: tmp3
          });
        }
        if (input instanceof Object) {
          if ("rhs" in input) {
            rhs = input.rhs;
            tmp4 = runtime.safeCall(matcher__Falsy_Truthy$(rhs));
            tmp5 = globalThis.Object.freeze({
              input: rhs,
              result: tmp4
            });
          } else {
            tmp6 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: tmp6
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: tmp7
          });
        }
        result0$1 = tmp1.result.p_0;
        if (result0$1 === true) {
          result0$ = tmp5.result.p_0;
          if (result0$ === true) {
            tmp8 = true;
          } else {
            result0$2 = tmp1.result.p_0;
            if (result0$2 === true) {
              result1$ = tmp5.result.p_1;
              if (result1$ === true) {
                tmp8 = true;
              } else {
                result1$1 = tmp1.result.p_1;
                if (result1$1 === true) {
                  result0$3 = tmp5.result.p_0;
                  if (result0$3 === true) {
                    tmp8 = true;
                  } else {
                    tmp8 = false;
                  }
                } else {
                  tmp8 = false;
                }
              }
            } else {
              result1$1 = tmp1.result.p_1;
              if (result1$1 === true) {
                result0$3 = tmp5.result.p_0;
                if (result0$3 === true) {
                  tmp8 = true;
                } else {
                  tmp8 = false;
                }
              } else {
                tmp8 = false;
              }
            }
          }
        } else {
          result0$2 = tmp1.result.p_0;
          if (result0$2 === true) {
            result1$ = tmp5.result.p_1;
            if (result1$ === true) {
              tmp8 = true;
            } else {
              result1$1 = tmp1.result.p_1;
              if (result1$1 === true) {
                result0$3 = tmp5.result.p_0;
                if (result0$3 === true) {
                  tmp8 = true;
                } else {
                  tmp8 = false;
                }
              } else {
                tmp8 = false;
              }
            }
          } else {
            result1$1 = tmp1.result.p_1;
            if (result1$1 === true) {
              result0$3 = tmp5.result.p_0;
              if (result0$3 === true) {
                tmp8 = true;
              } else {
                tmp8 = false;
              }
            } else {
              tmp8 = false;
            }
          }
        }
        result1$3 = tmp1.result.p_1;
        if (result1$3 === true) {
          result1$2 = tmp5.result.p_1;
          if (result1$2 === true) {
            return globalThis.Object.freeze({
              p_0: tmp8,
              p_1: true
            })
          }
          return globalThis.Object.freeze({
            p_0: tmp8,
            p_1: false
          });
        }
        return globalThis.Object.freeze({
          p_0: tmp8,
          p_1: false
        });
      } else if (input === false) {
        return globalThis.Object.freeze({
          p_0: true,
          p_1: false
        })
      } else if (input instanceof TruthyFalsy1.Or.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs1 = input.lhs;
            tmp9 = runtime.safeCall(matcher__Falsy_Truthy$(lhs1));
            tmp10 = globalThis.Object.freeze({
              input: lhs1,
              result: tmp9
            });
          } else {
            tmp11 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp10 = globalThis.Object.freeze({
              input: null,
              result: tmp11
            });
          }
        } else {
          tmp12 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp10 = globalThis.Object.freeze({
            input: null,
            result: tmp12
          });
        }
        if (input instanceof Object) {
          if ("rhs" in input) {
            rhs1 = input.rhs;
            tmp13 = runtime.safeCall(matcher__Falsy_Truthy$(rhs1));
            tmp14 = globalThis.Object.freeze({
              input: rhs1,
              result: tmp13
            });
          } else {
            tmp15 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp14 = globalThis.Object.freeze({
              input: null,
              result: tmp15
            });
          }
        } else {
          tmp16 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp14 = globalThis.Object.freeze({
            input: null,
            result: tmp16
          });
        }
        result0$5 = tmp10.result.p_0;
        if (result0$5 === true) {
          result0$4 = tmp14.result.p_0;
          if (result0$4 === true) {
            tmp17 = true;
          } else {
            tmp17 = false;
          }
        } else {
          tmp17 = false;
        }
        result1$5 = tmp10.result.p_1;
        if (result1$5 === true) {
          result1$4 = tmp14.result.p_1;
          if (result1$4 === true) {
            return globalThis.Object.freeze({
              p_0: tmp17,
              p_1: true
            })
          }
          result1$6 = tmp10.result.p_1;
          if (result1$6 === true) {
            result0$6 = tmp14.result.p_0;
            if (result0$6 === true) {
              return globalThis.Object.freeze({
                p_0: tmp17,
                p_1: true
              })
            }
            result0$7 = tmp10.result.p_0;
            if (result0$7 === true) {
              result1$7 = tmp14.result.p_1;
              if (result1$7 === true) {
                return globalThis.Object.freeze({
                  p_0: tmp17,
                  p_1: true
                })
              }
              return globalThis.Object.freeze({
                p_0: tmp17,
                p_1: false
              });
            }
            return globalThis.Object.freeze({
              p_0: tmp17,
              p_1: false
            });
          }
          result0$7 = tmp10.result.p_0;
          if (result0$7 === true) {
            result1$7 = tmp14.result.p_1;
            if (result1$7 === true) {
              return globalThis.Object.freeze({
                p_0: tmp17,
                p_1: true
              })
            }
            return globalThis.Object.freeze({
              p_0: tmp17,
              p_1: false
            });
          }
          return globalThis.Object.freeze({
            p_0: tmp17,
            p_1: false
          });
        }
        result1$6 = tmp10.result.p_1;
        if (result1$6 === true) {
          result0$6 = tmp14.result.p_0;
          if (result0$6 === true) {
            return globalThis.Object.freeze({
              p_0: tmp17,
              p_1: true
            })
          }
          result0$7 = tmp10.result.p_0;
          if (result0$7 === true) {
            result1$7 = tmp14.result.p_1;
            if (result1$7 === true) {
              return globalThis.Object.freeze({
                p_0: tmp17,
                p_1: true
              })
            }
            return globalThis.Object.freeze({
              p_0: tmp17,
              p_1: false
            });
          }
          return globalThis.Object.freeze({
            p_0: tmp17,
            p_1: false
          });
        }
        result0$7 = tmp10.result.p_0;
        if (result0$7 === true) {
          result1$7 = tmp14.result.p_1;
          if (result1$7 === true) {
            return globalThis.Object.freeze({
              p_0: tmp17,
              p_1: true
            })
          }
          return globalThis.Object.freeze({
            p_0: tmp17,
            p_1: false
          });
        }
        return globalThis.Object.freeze({
          p_0: tmp17,
          p_1: false
        });
      } else if (input instanceof TruthyFalsy1.Not.class) {
        if (input instanceof Object) {
          if ("arg" in input) {
            arg = input.arg;
            tmp18 = runtime.safeCall(matcher__Falsy_Truthy$(arg));
            tmp19 = globalThis.Object.freeze({
              input: arg,
              result: tmp18
            });
          } else {
            tmp20 = globalThis.Object.freeze({
              p_1: false,
              p_0: false
            });
            tmp19 = globalThis.Object.freeze({
              input: null,
              result: tmp20
            });
          }
        } else {
          tmp21 = globalThis.Object.freeze({
            p_1: false,
            p_0: false
          });
          tmp19 = globalThis.Object.freeze({
            input: null,
            result: tmp21
          });
        }
        result1$8 = tmp19.result.p_1;
        if (result1$8 === true) {
          tmp22 = true;
        } else {
          tmp22 = false;
        }
        result0$8 = tmp19.result.p_0;
        if (result0$8 === true) {
          return globalThis.Object.freeze({
            p_0: tmp22,
            p_1: true
          })
        }
        return globalThis.Object.freeze({
          p_0: tmp22,
          p_1: false
        });
      } else if (input === true) {
        return globalThis.Object.freeze({
          p_0: false,
          p_1: true
        })
      }
      return globalThis.Object.freeze({
        p_0: false,
        p_1: false
      });
    });
    matcher__Falsy_Truthy$ = lambda1;
    lambda2 = (undefined, function (input) {
      let lhs, rhs, result1$, result1$1, lhs1, rhs1, result1$2, result1$3, result0$, result1$4, result1$5, result0$1, arg, result0$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
      if (input === true) {
        return true
      } else if (input instanceof TruthyFalsy1.And.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs = input.lhs;
            tmp = runtime.safeCall(matcher__Truthy$(lhs));
            tmp1 = globalThis.Object.freeze({
              input: lhs,
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
          if ("rhs" in input) {
            rhs = input.rhs;
            tmp2 = runtime.safeCall(matcher__Truthy$(rhs));
            tmp3 = globalThis.Object.freeze({
              input: rhs,
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
      } else if (input instanceof TruthyFalsy1.Or.class) {
        if (input instanceof Object) {
          if ("lhs" in input) {
            lhs1 = input.lhs;
            tmp4 = runtime.safeCall(matcher__Falsy_Truthy$(lhs1));
            tmp5 = globalThis.Object.freeze({
              input: lhs1,
              result: tmp4
            });
          } else {
            tmp6 = globalThis.Object.freeze({
              p_1: false,
              p_0: false
            });
            tmp5 = globalThis.Object.freeze({
              input: null,
              result: tmp6
            });
          }
        } else {
          tmp7 = globalThis.Object.freeze({
            p_1: false,
            p_0: false
          });
          tmp5 = globalThis.Object.freeze({
            input: null,
            result: tmp7
          });
        }
        if (input instanceof Object) {
          if ("rhs" in input) {
            rhs1 = input.rhs;
            tmp8 = runtime.safeCall(matcher__Falsy_Truthy$(rhs1));
            tmp9 = globalThis.Object.freeze({
              input: rhs1,
              result: tmp8
            });
          } else {
            tmp10 = globalThis.Object.freeze({
              p_1: false,
              p_0: false
            });
            tmp9 = globalThis.Object.freeze({
              input: null,
              result: tmp10
            });
          }
        } else {
          tmp11 = globalThis.Object.freeze({
            p_1: false,
            p_0: false
          });
          tmp9 = globalThis.Object.freeze({
            input: null,
            result: tmp11
          });
        }
        result1$3 = tmp5.result.p_1;
        if (result1$3 === true) {
          result1$2 = tmp9.result.p_1;
          if (result1$2 === true) {
            return true
          }
          result1$4 = tmp5.result.p_1;
          if (result1$4 === true) {
            result0$ = tmp9.result.p_0;
            if (result0$ === true) {
              return true
            }
            result0$1 = tmp5.result.p_0;
            if (result0$1 === true) {
              result1$5 = tmp9.result.p_1;
              if (result1$5 === true) {
                return true
              }
              return false;
            }
            return false;
          }
          result0$1 = tmp5.result.p_0;
          if (result0$1 === true) {
            result1$5 = tmp9.result.p_1;
            if (result1$5 === true) {
              return true
            }
            return false;
          }
          return false;
        }
        result1$4 = tmp5.result.p_1;
        if (result1$4 === true) {
          result0$ = tmp9.result.p_0;
          if (result0$ === true) {
            return true
          }
          result0$1 = tmp5.result.p_0;
          if (result0$1 === true) {
            result1$5 = tmp9.result.p_1;
            if (result1$5 === true) {
              return true
            }
            return false;
          }
          return false;
        }
        result0$1 = tmp5.result.p_0;
        if (result0$1 === true) {
          result1$5 = tmp9.result.p_1;
          if (result1$5 === true) {
            return true
          }
          return false;
        }
        return false;
      } else if (input instanceof TruthyFalsy1.Not.class) {
        if (input instanceof Object) {
          if ("arg" in input) {
            arg = input.arg;
            tmp12 = runtime.safeCall(matcher__Falsy$(arg));
            tmp13 = globalThis.Object.freeze({
              input: arg,
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
        result0$2 = tmp13.result;
        if (result0$2 === true) {
          return true
        }
        return false;
      }
      return false;
    });
    matcher__Truthy$ = lambda2;
    matchSuccess = runtime.safeCall(matcher__Falsy$(t));
    if (matchSuccess === true) {
      return true
    }
    return false;
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "TruthyFalsy"]; 
});
let TruthyFalsy = TruthyFalsy1; export default TruthyFalsy;
