const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
let EvenOddTree1;
(class EvenOddTree {
  static {
    EvenOddTree1 = this
  }
  static {
    (class A {
      static {
        new this
      }
      constructor() {
        EvenOddTree.A = this;
        Object.defineProperty(this, "class", {
          value: A
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "A"]; 
    });
    (class B {
      static {
        new this
      }
      constructor() {
        EvenOddTree.B = this;
        Object.defineProperty(this, "class", {
          value: B
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "B"]; 
    });
    this.Node = function Node(left, value, right) {
      return globalThis.Object.freeze(new Node.class(left, value, right));
    };
    (class Node {
      static {
        EvenOddTree.Node.class = this
      }
      constructor(left, value, right) {
        this.left = left;
        this.value = value;
        this.right = right;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Node", ["left", "value", "right"]]; 
    });
    (class OddTree {
      static {
        new this
      }
      constructor() {
        EvenOddTree.OddTree = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        let arg$Node$0$, arg$Node$1$, arg$Node$2$, unapplyResult, unapplyResult1, unapplyResult2, unapplyResult3, unapplyResult4, unapplyResult5, unapplyResult6, unapplyResult7;
        split_1$: {
          if (input instanceof EvenOddTree.A.class) {
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null))
          } else if (input instanceof EvenOddTree.Node.class) {
            arg$Node$0$ = input.left;
            arg$Node$1$ = input.value;
            arg$Node$2$ = input.right;
            unapplyResult6 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$0$));
            if (unapplyResult6 instanceof runtime.MatchSuccess.class) {
              unapplyResult6.output;
              unapplyResult6.bindings;
              if (arg$Node$1$ instanceof EvenOddTree.A.class) {
                unapplyResult7 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$2$));
                if (unapplyResult7 instanceof runtime.MatchSuccess.class) {
                  unapplyResult7.output;
                  unapplyResult7.bindings;
                  break split_1$
                }
                unapplyResult4 = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                if (unapplyResult4 instanceof runtime.MatchSuccess.class) {
                  unapplyResult4.output;
                  unapplyResult4.bindings;
                  unapplyResult5 = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$2$));
                  if (unapplyResult5 instanceof runtime.MatchSuccess.class) {
                    unapplyResult5.output;
                    unapplyResult5.bindings;
                    break split_1$
                  }
                  unapplyResult2 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$0$));
                  if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
                    unapplyResult2.output;
                    unapplyResult2.bindings;
                    unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                    if (unapplyResult instanceof runtime.MatchSuccess.class) {
                      unapplyResult.output;
                      unapplyResult.bindings;
                    }
                  } else {
                    unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                    if (unapplyResult instanceof runtime.MatchSuccess.class) {
                      unapplyResult.output;
                      unapplyResult.bindings;
                    }
                  }
                } else {
                  unapplyResult2 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$0$));
                  if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
                    unapplyResult2.output;
                    unapplyResult2.bindings;
                    unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                    if (unapplyResult instanceof runtime.MatchSuccess.class) {
                      unapplyResult.output;
                      unapplyResult.bindings;
                    }
                  } else {
                    unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                    if (unapplyResult instanceof runtime.MatchSuccess.class) {
                      unapplyResult.output;
                      unapplyResult.bindings;
                    }
                  }
                }
                return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
              }
              unapplyResult4 = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
              if (unapplyResult4 instanceof runtime.MatchSuccess.class) {
                unapplyResult4.output;
                unapplyResult4.bindings;
                unapplyResult2 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$0$));
                if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
                  unapplyResult2.output;
                  unapplyResult2.bindings;
                  if (arg$Node$1$ instanceof EvenOddTree.B.class) {
                    unapplyResult3 = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$2$));
                    if (unapplyResult3 instanceof runtime.MatchSuccess.class) {
                      unapplyResult3.output;
                      unapplyResult3.bindings;
                      break split_1$
                    }
                    unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                    if (unapplyResult instanceof runtime.MatchSuccess.class) {
                      unapplyResult.output;
                      unapplyResult.bindings;
                      unapplyResult1 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$2$));
                      if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                        unapplyResult1.output;
                        unapplyResult1.bindings;
                        break split_1$
                      }
                    }
                  } else {
                    unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                    if (unapplyResult instanceof runtime.MatchSuccess.class) {
                      unapplyResult.output;
                      unapplyResult.bindings;
                    }
                  }
                } else {
                  unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                  if (unapplyResult instanceof runtime.MatchSuccess.class) {
                    unapplyResult.output;
                    unapplyResult.bindings;
                    if (arg$Node$1$ instanceof EvenOddTree.B.class) {
                      unapplyResult1 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$2$));
                      if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                        unapplyResult1.output;
                        unapplyResult1.bindings;
                        break split_1$
                      }
                    }
                  }
                }
                return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
              }
              unapplyResult2 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$0$));
              if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
                unapplyResult2.output;
                unapplyResult2.bindings;
                if (arg$Node$1$ instanceof EvenOddTree.B.class) {
                  unapplyResult3 = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$2$));
                  if (unapplyResult3 instanceof runtime.MatchSuccess.class) {
                    unapplyResult3.output;
                    unapplyResult3.bindings;
                    break split_1$
                  }
                  unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                  if (unapplyResult instanceof runtime.MatchSuccess.class) {
                    unapplyResult.output;
                    unapplyResult.bindings;
                    unapplyResult1 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$2$));
                    if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                      unapplyResult1.output;
                      unapplyResult1.bindings;
                      break split_1$
                    }
                  }
                } else {
                  unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                  if (unapplyResult instanceof runtime.MatchSuccess.class) {
                    unapplyResult.output;
                    unapplyResult.bindings;
                  }
                }
              } else {
                unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                if (unapplyResult instanceof runtime.MatchSuccess.class) {
                  unapplyResult.output;
                  unapplyResult.bindings;
                  if (arg$Node$1$ instanceof EvenOddTree.B.class) {
                    unapplyResult1 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$2$));
                    if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                      unapplyResult1.output;
                      unapplyResult1.bindings;
                      break split_1$
                    }
                  }
                }
              }
              return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
            }
            unapplyResult4 = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
            if (unapplyResult4 instanceof runtime.MatchSuccess.class) {
              unapplyResult4.output;
              unapplyResult4.bindings;
              if (arg$Node$1$ instanceof EvenOddTree.A.class) {
                unapplyResult5 = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$2$));
                if (unapplyResult5 instanceof runtime.MatchSuccess.class) {
                  unapplyResult5.output;
                  unapplyResult5.bindings;
                  break split_1$
                }
                unapplyResult2 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$0$));
                if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
                  unapplyResult2.output;
                  unapplyResult2.bindings;
                  unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                  if (unapplyResult instanceof runtime.MatchSuccess.class) {
                    unapplyResult.output;
                    unapplyResult.bindings;
                  }
                } else {
                  unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                  if (unapplyResult instanceof runtime.MatchSuccess.class) {
                    unapplyResult.output;
                    unapplyResult.bindings;
                  }
                }
                return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
              }
              unapplyResult2 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$0$));
              if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
                unapplyResult2.output;
                unapplyResult2.bindings;
                if (arg$Node$1$ instanceof EvenOddTree.B.class) {
                  unapplyResult3 = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$2$));
                  if (unapplyResult3 instanceof runtime.MatchSuccess.class) {
                    unapplyResult3.output;
                    unapplyResult3.bindings;
                    break split_1$
                  }
                  unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                  if (unapplyResult instanceof runtime.MatchSuccess.class) {
                    unapplyResult.output;
                    unapplyResult.bindings;
                    unapplyResult1 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$2$));
                    if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                      unapplyResult1.output;
                      unapplyResult1.bindings;
                      break split_1$
                    }
                  }
                } else {
                  unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                  if (unapplyResult instanceof runtime.MatchSuccess.class) {
                    unapplyResult.output;
                    unapplyResult.bindings;
                  }
                }
              } else {
                unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                if (unapplyResult instanceof runtime.MatchSuccess.class) {
                  unapplyResult.output;
                  unapplyResult.bindings;
                  if (arg$Node$1$ instanceof EvenOddTree.B.class) {
                    unapplyResult1 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$2$));
                    if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                      unapplyResult1.output;
                      unapplyResult1.bindings;
                      break split_1$
                    }
                  }
                }
              }
              return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
            }
            unapplyResult2 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$0$));
            if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
              unapplyResult2.output;
              unapplyResult2.bindings;
              if (arg$Node$1$ instanceof EvenOddTree.B.class) {
                unapplyResult3 = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$2$));
                if (unapplyResult3 instanceof runtime.MatchSuccess.class) {
                  unapplyResult3.output;
                  unapplyResult3.bindings;
                  break split_1$
                }
                unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                if (unapplyResult instanceof runtime.MatchSuccess.class) {
                  unapplyResult.output;
                  unapplyResult.bindings;
                  unapplyResult1 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$2$));
                  if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                    unapplyResult1.output;
                    unapplyResult1.bindings;
                    break split_1$
                  }
                }
              } else {
                unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                if (unapplyResult instanceof runtime.MatchSuccess.class) {
                  unapplyResult.output;
                  unapplyResult.bindings;
                }
              }
              return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
            }
            unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
            if (unapplyResult instanceof runtime.MatchSuccess.class) {
              unapplyResult.output;
              unapplyResult.bindings;
              if (arg$Node$1$ instanceof EvenOddTree.B.class) {
                unapplyResult1 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$2$));
                if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                  unapplyResult1.output;
                  unapplyResult1.bindings;
                  break split_1$
                }
              }
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        }
        return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null))
      } 
      unapplyStringPrefix(input) {
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "OddTree"]; 
    });
    (class EvenTree {
      static {
        new this
      }
      constructor() {
        EvenOddTree.EvenTree = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        let arg$Node$0$, arg$Node$1$, arg$Node$2$, unapplyResult, unapplyResult1, unapplyResult2, unapplyResult3, unapplyResult4, unapplyResult5, unapplyResult6, unapplyResult7;
        split_1$: {
          if (input instanceof EvenOddTree.B.class) {
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null))
          } else if (input instanceof EvenOddTree.Node.class) {
            arg$Node$0$ = input.left;
            arg$Node$1$ = input.value;
            arg$Node$2$ = input.right;
            unapplyResult6 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$0$));
            if (unapplyResult6 instanceof runtime.MatchSuccess.class) {
              unapplyResult6.output;
              unapplyResult6.bindings;
              if (arg$Node$1$ instanceof EvenOddTree.A.class) {
                unapplyResult7 = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$2$));
                if (unapplyResult7 instanceof runtime.MatchSuccess.class) {
                  unapplyResult7.output;
                  unapplyResult7.bindings;
                  break split_1$
                }
                unapplyResult4 = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                if (unapplyResult4 instanceof runtime.MatchSuccess.class) {
                  unapplyResult4.output;
                  unapplyResult4.bindings;
                  unapplyResult5 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$2$));
                  if (unapplyResult5 instanceof runtime.MatchSuccess.class) {
                    unapplyResult5.output;
                    unapplyResult5.bindings;
                    break split_1$
                  }
                  unapplyResult2 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$0$));
                  if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
                    unapplyResult2.output;
                    unapplyResult2.bindings;
                    unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                    if (unapplyResult instanceof runtime.MatchSuccess.class) {
                      unapplyResult.output;
                      unapplyResult.bindings;
                    }
                  } else {
                    unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                    if (unapplyResult instanceof runtime.MatchSuccess.class) {
                      unapplyResult.output;
                      unapplyResult.bindings;
                    }
                  }
                } else {
                  unapplyResult2 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$0$));
                  if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
                    unapplyResult2.output;
                    unapplyResult2.bindings;
                    unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                    if (unapplyResult instanceof runtime.MatchSuccess.class) {
                      unapplyResult.output;
                      unapplyResult.bindings;
                    }
                  } else {
                    unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                    if (unapplyResult instanceof runtime.MatchSuccess.class) {
                      unapplyResult.output;
                      unapplyResult.bindings;
                    }
                  }
                }
                return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
              }
              unapplyResult4 = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
              if (unapplyResult4 instanceof runtime.MatchSuccess.class) {
                unapplyResult4.output;
                unapplyResult4.bindings;
                unapplyResult2 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$0$));
                if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
                  unapplyResult2.output;
                  unapplyResult2.bindings;
                  if (arg$Node$1$ instanceof EvenOddTree.B.class) {
                    unapplyResult3 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$2$));
                    if (unapplyResult3 instanceof runtime.MatchSuccess.class) {
                      unapplyResult3.output;
                      unapplyResult3.bindings;
                      break split_1$
                    }
                    unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                    if (unapplyResult instanceof runtime.MatchSuccess.class) {
                      unapplyResult.output;
                      unapplyResult.bindings;
                      unapplyResult1 = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$2$));
                      if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                        unapplyResult1.output;
                        unapplyResult1.bindings;
                        break split_1$
                      }
                    }
                  } else {
                    unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                    if (unapplyResult instanceof runtime.MatchSuccess.class) {
                      unapplyResult.output;
                      unapplyResult.bindings;
                    }
                  }
                } else {
                  unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                  if (unapplyResult instanceof runtime.MatchSuccess.class) {
                    unapplyResult.output;
                    unapplyResult.bindings;
                    if (arg$Node$1$ instanceof EvenOddTree.B.class) {
                      unapplyResult1 = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$2$));
                      if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                        unapplyResult1.output;
                        unapplyResult1.bindings;
                        break split_1$
                      }
                    }
                  }
                }
                return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
              }
              unapplyResult2 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$0$));
              if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
                unapplyResult2.output;
                unapplyResult2.bindings;
                if (arg$Node$1$ instanceof EvenOddTree.B.class) {
                  unapplyResult3 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$2$));
                  if (unapplyResult3 instanceof runtime.MatchSuccess.class) {
                    unapplyResult3.output;
                    unapplyResult3.bindings;
                    break split_1$
                  }
                  unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                  if (unapplyResult instanceof runtime.MatchSuccess.class) {
                    unapplyResult.output;
                    unapplyResult.bindings;
                    unapplyResult1 = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$2$));
                    if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                      unapplyResult1.output;
                      unapplyResult1.bindings;
                      break split_1$
                    }
                  }
                } else {
                  unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                  if (unapplyResult instanceof runtime.MatchSuccess.class) {
                    unapplyResult.output;
                    unapplyResult.bindings;
                  }
                }
              } else {
                unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                if (unapplyResult instanceof runtime.MatchSuccess.class) {
                  unapplyResult.output;
                  unapplyResult.bindings;
                  if (arg$Node$1$ instanceof EvenOddTree.B.class) {
                    unapplyResult1 = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$2$));
                    if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                      unapplyResult1.output;
                      unapplyResult1.bindings;
                      break split_1$
                    }
                  }
                }
              }
              return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
            }
            unapplyResult4 = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
            if (unapplyResult4 instanceof runtime.MatchSuccess.class) {
              unapplyResult4.output;
              unapplyResult4.bindings;
              if (arg$Node$1$ instanceof EvenOddTree.A.class) {
                unapplyResult5 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$2$));
                if (unapplyResult5 instanceof runtime.MatchSuccess.class) {
                  unapplyResult5.output;
                  unapplyResult5.bindings;
                  break split_1$
                }
                unapplyResult2 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$0$));
                if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
                  unapplyResult2.output;
                  unapplyResult2.bindings;
                  unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                  if (unapplyResult instanceof runtime.MatchSuccess.class) {
                    unapplyResult.output;
                    unapplyResult.bindings;
                  }
                } else {
                  unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                  if (unapplyResult instanceof runtime.MatchSuccess.class) {
                    unapplyResult.output;
                    unapplyResult.bindings;
                  }
                }
                return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
              }
              unapplyResult2 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$0$));
              if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
                unapplyResult2.output;
                unapplyResult2.bindings;
                if (arg$Node$1$ instanceof EvenOddTree.B.class) {
                  unapplyResult3 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$2$));
                  if (unapplyResult3 instanceof runtime.MatchSuccess.class) {
                    unapplyResult3.output;
                    unapplyResult3.bindings;
                    break split_1$
                  }
                  unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                  if (unapplyResult instanceof runtime.MatchSuccess.class) {
                    unapplyResult.output;
                    unapplyResult.bindings;
                    unapplyResult1 = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$2$));
                    if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                      unapplyResult1.output;
                      unapplyResult1.bindings;
                      break split_1$
                    }
                  }
                } else {
                  unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                  if (unapplyResult instanceof runtime.MatchSuccess.class) {
                    unapplyResult.output;
                    unapplyResult.bindings;
                  }
                }
              } else {
                unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                if (unapplyResult instanceof runtime.MatchSuccess.class) {
                  unapplyResult.output;
                  unapplyResult.bindings;
                  if (arg$Node$1$ instanceof EvenOddTree.B.class) {
                    unapplyResult1 = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$2$));
                    if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                      unapplyResult1.output;
                      unapplyResult1.bindings;
                      break split_1$
                    }
                  }
                }
              }
              return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
            }
            unapplyResult2 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$0$));
            if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
              unapplyResult2.output;
              unapplyResult2.bindings;
              if (arg$Node$1$ instanceof EvenOddTree.B.class) {
                unapplyResult3 = runtime.safeCall(EvenOddTree.EvenTree.unapply(arg$Node$2$));
                if (unapplyResult3 instanceof runtime.MatchSuccess.class) {
                  unapplyResult3.output;
                  unapplyResult3.bindings;
                  break split_1$
                }
                unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                if (unapplyResult instanceof runtime.MatchSuccess.class) {
                  unapplyResult.output;
                  unapplyResult.bindings;
                  unapplyResult1 = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$2$));
                  if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                    unapplyResult1.output;
                    unapplyResult1.bindings;
                    break split_1$
                  }
                }
              } else {
                unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
                if (unapplyResult instanceof runtime.MatchSuccess.class) {
                  unapplyResult.output;
                  unapplyResult.bindings;
                }
              }
              return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
            }
            unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$0$));
            if (unapplyResult instanceof runtime.MatchSuccess.class) {
              unapplyResult.output;
              unapplyResult.bindings;
              if (arg$Node$1$ instanceof EvenOddTree.B.class) {
                unapplyResult1 = runtime.safeCall(EvenOddTree.OddTree.unapply(arg$Node$2$));
                if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                  unapplyResult1.output;
                  unapplyResult1.bindings;
                  break split_1$
                }
              }
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        }
        return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null))
      } 
      unapplyStringPrefix(input) {
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "EvenTree"]; 
    });
  }
  static isOddTree_naive(t) {
    let unapplyResult;
    unapplyResult = runtime.safeCall(EvenOddTree.OddTree.unapply(t));
    if (unapplyResult instanceof runtime.MatchSuccess.class) {
      unapplyResult.output;
      unapplyResult.bindings;
      return true
    }
    return false;
  } 
  static isOddTree_optimized(t) {
    let matcher__EvenTree_OddTree$, matcher__A_B$, lambda, lambda1, inlinedVal, left, value, right, result1$, result2$, result1$1, result0$, result2$1, result0$1, result0$2, result3$, result1$2, result1$3, result3$1, result0$3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
    lambda = (undefined, function (input) {
      let left1, value1, right1, left2, value2, right2, p_1$, result0$4, result2$2, result1$4, result1$5, result2$3, result0$5, result1$6, result3$2, result1$7, result0$6, result3$3, result0$7, result1$8, result2$4, result1$9, result0$8, result2$5, result0$9, result0$10, result3$4, result1$10, result1$11, result3$5, result0$11, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26;
      if (input instanceof EvenOddTree1.B.class) {
        return globalThis.Object.freeze({
          p_1: true,
          p_0: false
        })
      } else if (input instanceof EvenOddTree1.Node.class) {
        if (input instanceof Object) {
          if ("left" in input) {
            left2 = input.left;
            tmp13 = runtime.safeCall(matcher__EvenTree_OddTree$(left2));
            tmp14 = globalThis.Object.freeze({
              input: left2,
              result: tmp13
            });
          } else {
            tmp15 = globalThis.Object.freeze({
              p_1: false,
              p_0: false
            });
            tmp14 = globalThis.Object.freeze({
              input: null,
              result: tmp15
            });
          }
        } else {
          tmp16 = globalThis.Object.freeze({
            p_1: false,
            p_0: false
          });
          tmp14 = globalThis.Object.freeze({
            input: null,
            result: tmp16
          });
        }
        left1 = tmp14;
        if (input instanceof Object) {
          if ("value" in input) {
            value2 = input.value;
            tmp17 = runtime.safeCall(matcher__A_B$(value2));
            tmp18 = globalThis.Object.freeze({
              input: value2,
              result: tmp17
            });
          } else {
            tmp19 = globalThis.Object.freeze({
              p_2: false,
              p_3: false
            });
            tmp18 = globalThis.Object.freeze({
              input: null,
              result: tmp19
            });
          }
        } else {
          tmp20 = globalThis.Object.freeze({
            p_2: false,
            p_3: false
          });
          tmp18 = globalThis.Object.freeze({
            input: null,
            result: tmp20
          });
        }
        value1 = tmp18;
        if (input instanceof Object) {
          if ("right" in input) {
            right2 = input.right;
            tmp21 = runtime.safeCall(matcher__EvenTree_OddTree$(right2));
            tmp22 = globalThis.Object.freeze({
              input: right2,
              result: tmp21
            });
          } else {
            tmp23 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp22 = globalThis.Object.freeze({
              input: null,
              result: tmp23
            });
          }
        } else {
          tmp24 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp22 = globalThis.Object.freeze({
            input: null,
            result: tmp24
          });
        }
        right1 = tmp22;
        split_root$: {
          split_1$: {
            result1$4 = tmp14.result.p_1;
            if (result1$4 === true) {
              result2$2 = tmp18.result.p_2;
              if (result2$2 === true) {
                result0$4 = tmp22.result.p_0;
                if (result0$4 === true) {
                  break split_1$
                }
                result0$5 = tmp14.result.p_0;
                if (result0$5 === true) {
                  result2$3 = tmp18.result.p_2;
                  if (result2$3 === true) {
                    result1$5 = tmp22.result.p_1;
                    if (result1$5 === true) {
                      break split_1$
                    }
                    result1$7 = tmp14.result.p_1;
                    if (result1$7 === true) {
                      result3$2 = tmp18.result.p_3;
                      if (result3$2 === true) {
                        result1$6 = tmp22.result.p_1;
                        if (result1$6 === true) {
                          break split_1$
                        }
                        result0$7 = tmp14.result.p_0;
                        if (result0$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result0$6 = tmp22.result.p_0;
                            if (result0$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      } else {
                        result0$7 = tmp14.result.p_0;
                        if (result0$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result0$6 = tmp22.result.p_0;
                            if (result0$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      }
                    } else {
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result1$7 = tmp14.result.p_1;
                    if (result1$7 === true) {
                      result3$2 = tmp18.result.p_3;
                      if (result3$2 === true) {
                        result1$6 = tmp22.result.p_1;
                        if (result1$6 === true) {
                          break split_1$
                        }
                        result0$7 = tmp14.result.p_0;
                        if (result0$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result0$6 = tmp22.result.p_0;
                            if (result0$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      } else {
                        result0$7 = tmp14.result.p_0;
                        if (result0$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result0$6 = tmp22.result.p_0;
                            if (result0$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      }
                    } else {
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  }
                } else {
                  result1$7 = tmp14.result.p_1;
                  if (result1$7 === true) {
                    result3$2 = tmp18.result.p_3;
                    if (result3$2 === true) {
                      result1$6 = tmp22.result.p_1;
                      if (result1$6 === true) {
                        break split_1$
                      }
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result0$7 = tmp14.result.p_0;
                    if (result0$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result0$6 = tmp22.result.p_0;
                        if (result0$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                }
              } else {
                result0$5 = tmp14.result.p_0;
                if (result0$5 === true) {
                  result2$3 = tmp18.result.p_2;
                  if (result2$3 === true) {
                    result1$5 = tmp22.result.p_1;
                    if (result1$5 === true) {
                      break split_1$
                    }
                    result1$7 = tmp14.result.p_1;
                    if (result1$7 === true) {
                      result3$2 = tmp18.result.p_3;
                      if (result3$2 === true) {
                        result1$6 = tmp22.result.p_1;
                        if (result1$6 === true) {
                          break split_1$
                        }
                        result0$7 = tmp14.result.p_0;
                        if (result0$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result0$6 = tmp22.result.p_0;
                            if (result0$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      } else {
                        result0$7 = tmp14.result.p_0;
                        if (result0$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result0$6 = tmp22.result.p_0;
                            if (result0$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      }
                    } else {
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result1$7 = tmp14.result.p_1;
                    if (result1$7 === true) {
                      result3$2 = tmp18.result.p_3;
                      if (result3$2 === true) {
                        result1$6 = tmp22.result.p_1;
                        if (result1$6 === true) {
                          break split_1$
                        }
                        result0$7 = tmp14.result.p_0;
                        if (result0$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result0$6 = tmp22.result.p_0;
                            if (result0$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      } else {
                        result0$7 = tmp14.result.p_0;
                        if (result0$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result0$6 = tmp22.result.p_0;
                            if (result0$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      }
                    } else {
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  }
                } else {
                  result1$7 = tmp14.result.p_1;
                  if (result1$7 === true) {
                    result3$2 = tmp18.result.p_3;
                    if (result3$2 === true) {
                      result1$6 = tmp22.result.p_1;
                      if (result1$6 === true) {
                        break split_1$
                      }
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result0$7 = tmp14.result.p_0;
                    if (result0$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result0$6 = tmp22.result.p_0;
                        if (result0$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                }
              }
            } else {
              result0$5 = tmp14.result.p_0;
              if (result0$5 === true) {
                result2$3 = tmp18.result.p_2;
                if (result2$3 === true) {
                  result1$5 = tmp22.result.p_1;
                  if (result1$5 === true) {
                    break split_1$
                  }
                  result1$7 = tmp14.result.p_1;
                  if (result1$7 === true) {
                    result3$2 = tmp18.result.p_3;
                    if (result3$2 === true) {
                      result1$6 = tmp22.result.p_1;
                      if (result1$6 === true) {
                        break split_1$
                      }
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result0$7 = tmp14.result.p_0;
                    if (result0$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result0$6 = tmp22.result.p_0;
                        if (result0$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result1$7 = tmp14.result.p_1;
                  if (result1$7 === true) {
                    result3$2 = tmp18.result.p_3;
                    if (result3$2 === true) {
                      result1$6 = tmp22.result.p_1;
                      if (result1$6 === true) {
                        break split_1$
                      }
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result0$7 = tmp14.result.p_0;
                    if (result0$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result0$6 = tmp22.result.p_0;
                        if (result0$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                }
              } else {
                result1$7 = tmp14.result.p_1;
                if (result1$7 === true) {
                  result3$2 = tmp18.result.p_3;
                  if (result3$2 === true) {
                    result1$6 = tmp22.result.p_1;
                    if (result1$6 === true) {
                      break split_1$
                    }
                    result0$7 = tmp14.result.p_0;
                    if (result0$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result0$6 = tmp22.result.p_0;
                        if (result0$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  } else {
                    result0$7 = tmp14.result.p_0;
                    if (result0$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result0$6 = tmp22.result.p_0;
                        if (result0$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result0$7 = tmp14.result.p_0;
                  if (result0$7 === true) {
                    result3$3 = tmp18.result.p_3;
                    if (result3$3 === true) {
                      result0$6 = tmp22.result.p_0;
                      if (result0$6 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              }
            }
            tmp25 = false;
            break split_root$;
          }
          tmp25 = true;
        }
        p_1$ = tmp25;
        split_root$1: {
          split_1$1: {
            result1$9 = left1.result.p_1;
            if (result1$9 === true) {
              result2$4 = value1.result.p_2;
              if (result2$4 === true) {
                result1$8 = right1.result.p_1;
                if (result1$8 === true) {
                  break split_1$1
                }
                result0$9 = left1.result.p_0;
                if (result0$9 === true) {
                  result2$5 = value1.result.p_2;
                  if (result2$5 === true) {
                    result0$8 = right1.result.p_0;
                    if (result0$8 === true) {
                      break split_1$1
                    }
                    result1$10 = left1.result.p_1;
                    if (result1$10 === true) {
                      result3$4 = value1.result.p_3;
                      if (result3$4 === true) {
                        result0$10 = right1.result.p_0;
                        if (result0$10 === true) {
                          break split_1$1
                        }
                        result0$11 = left1.result.p_0;
                        if (result0$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result1$11 = right1.result.p_1;
                            if (result1$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      } else {
                        result0$11 = left1.result.p_0;
                        if (result0$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result1$11 = right1.result.p_1;
                            if (result1$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      }
                    } else {
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result1$10 = left1.result.p_1;
                    if (result1$10 === true) {
                      result3$4 = value1.result.p_3;
                      if (result3$4 === true) {
                        result0$10 = right1.result.p_0;
                        if (result0$10 === true) {
                          break split_1$1
                        }
                        result0$11 = left1.result.p_0;
                        if (result0$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result1$11 = right1.result.p_1;
                            if (result1$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      } else {
                        result0$11 = left1.result.p_0;
                        if (result0$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result1$11 = right1.result.p_1;
                            if (result1$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      }
                    } else {
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  }
                } else {
                  result1$10 = left1.result.p_1;
                  if (result1$10 === true) {
                    result3$4 = value1.result.p_3;
                    if (result3$4 === true) {
                      result0$10 = right1.result.p_0;
                      if (result0$10 === true) {
                        break split_1$1
                      }
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    } else {
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result0$11 = left1.result.p_0;
                    if (result0$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result1$11 = right1.result.p_1;
                        if (result1$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  }
                }
              } else {
                result0$9 = left1.result.p_0;
                if (result0$9 === true) {
                  result2$5 = value1.result.p_2;
                  if (result2$5 === true) {
                    result0$8 = right1.result.p_0;
                    if (result0$8 === true) {
                      break split_1$1
                    }
                    result1$10 = left1.result.p_1;
                    if (result1$10 === true) {
                      result3$4 = value1.result.p_3;
                      if (result3$4 === true) {
                        result0$10 = right1.result.p_0;
                        if (result0$10 === true) {
                          break split_1$1
                        }
                        result0$11 = left1.result.p_0;
                        if (result0$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result1$11 = right1.result.p_1;
                            if (result1$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      } else {
                        result0$11 = left1.result.p_0;
                        if (result0$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result1$11 = right1.result.p_1;
                            if (result1$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      }
                    } else {
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result1$10 = left1.result.p_1;
                    if (result1$10 === true) {
                      result3$4 = value1.result.p_3;
                      if (result3$4 === true) {
                        result0$10 = right1.result.p_0;
                        if (result0$10 === true) {
                          break split_1$1
                        }
                        result0$11 = left1.result.p_0;
                        if (result0$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result1$11 = right1.result.p_1;
                            if (result1$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      } else {
                        result0$11 = left1.result.p_0;
                        if (result0$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result1$11 = right1.result.p_1;
                            if (result1$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      }
                    } else {
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  }
                } else {
                  result1$10 = left1.result.p_1;
                  if (result1$10 === true) {
                    result3$4 = value1.result.p_3;
                    if (result3$4 === true) {
                      result0$10 = right1.result.p_0;
                      if (result0$10 === true) {
                        break split_1$1
                      }
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    } else {
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result0$11 = left1.result.p_0;
                    if (result0$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result1$11 = right1.result.p_1;
                        if (result1$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  }
                }
              }
            } else {
              result0$9 = left1.result.p_0;
              if (result0$9 === true) {
                result2$5 = value1.result.p_2;
                if (result2$5 === true) {
                  result0$8 = right1.result.p_0;
                  if (result0$8 === true) {
                    break split_1$1
                  }
                  result1$10 = left1.result.p_1;
                  if (result1$10 === true) {
                    result3$4 = value1.result.p_3;
                    if (result3$4 === true) {
                      result0$10 = right1.result.p_0;
                      if (result0$10 === true) {
                        break split_1$1
                      }
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    } else {
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result0$11 = left1.result.p_0;
                    if (result0$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result1$11 = right1.result.p_1;
                        if (result1$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  }
                } else {
                  result1$10 = left1.result.p_1;
                  if (result1$10 === true) {
                    result3$4 = value1.result.p_3;
                    if (result3$4 === true) {
                      result0$10 = right1.result.p_0;
                      if (result0$10 === true) {
                        break split_1$1
                      }
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    } else {
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result0$11 = left1.result.p_0;
                    if (result0$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result1$11 = right1.result.p_1;
                        if (result1$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  }
                }
              } else {
                result1$10 = left1.result.p_1;
                if (result1$10 === true) {
                  result3$4 = value1.result.p_3;
                  if (result3$4 === true) {
                    result0$10 = right1.result.p_0;
                    if (result0$10 === true) {
                      break split_1$1
                    }
                    result0$11 = left1.result.p_0;
                    if (result0$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result1$11 = right1.result.p_1;
                        if (result1$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  } else {
                    result0$11 = left1.result.p_0;
                    if (result0$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result1$11 = right1.result.p_1;
                        if (result1$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  }
                } else {
                  result0$11 = left1.result.p_0;
                  if (result0$11 === true) {
                    result3$5 = value1.result.p_3;
                    if (result3$5 === true) {
                      result1$11 = right1.result.p_1;
                      if (result1$11 === true) {
                        break split_1$1
                      }
                    }
                  }
                }
              }
            }
            tmp26 = false;
            break split_root$1;
          }
          tmp26 = true;
        }
        return globalThis.Object.freeze({
          p_1: p_1$,
          p_0: tmp26
        })
      } else if (input instanceof EvenOddTree1.A.class) {
        return globalThis.Object.freeze({
          p_1: false,
          p_0: true
        })
      }
      return globalThis.Object.freeze({
        p_1: false,
        p_0: false
      });
    });
    matcher__EvenTree_OddTree$ = lambda;
    lambda1 = (undefined, function (input) {
      if (input instanceof EvenOddTree1.A.class) {
        return globalThis.Object.freeze({
          p_2: true,
          p_3: false
        })
      } else if (input instanceof EvenOddTree1.B.class) {
        return globalThis.Object.freeze({
          p_2: false,
          p_3: true
        })
      }
      return globalThis.Object.freeze({
        p_2: false,
        p_3: false
      });
    });
    matcher__A_B$ = lambda1;
    if (t instanceof EvenOddTree1.A.class) {
      inlinedVal = true;
    } else if (t instanceof EvenOddTree1.Node.class) {
      if (t instanceof Object) {
        if ("left" in t) {
          left = t.left;
          tmp = runtime.safeCall(matcher__EvenTree_OddTree$(left));
          tmp1 = globalThis.Object.freeze({
            input: left,
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
      if (t instanceof Object) {
        if ("value" in t) {
          value = t.value;
          tmp4 = runtime.safeCall(matcher__A_B$(value));
          tmp5 = globalThis.Object.freeze({
            input: value,
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
      if (t instanceof Object) {
        if ("right" in t) {
          right = t.right;
          tmp8 = runtime.safeCall(matcher__EvenTree_OddTree$(right));
          tmp9 = globalThis.Object.freeze({
            input: right,
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
      split_root$: {
        split_1$: {
          result1$1 = tmp1.result.p_1;
          if (result1$1 === true) {
            result2$ = tmp5.result.p_2;
            if (result2$ === true) {
              result1$ = tmp9.result.p_1;
              if (result1$ === true) {
                break split_1$
              }
              result0$1 = tmp1.result.p_0;
              if (result0$1 === true) {
                result2$1 = tmp5.result.p_2;
                if (result2$1 === true) {
                  result0$ = tmp9.result.p_0;
                  if (result0$ === true) {
                    break split_1$
                  }
                  result1$2 = tmp1.result.p_1;
                  if (result1$2 === true) {
                    result3$ = tmp5.result.p_3;
                    if (result3$ === true) {
                      result0$2 = tmp9.result.p_0;
                      if (result0$2 === true) {
                        break split_1$
                      }
                      result0$3 = tmp1.result.p_0;
                      if (result0$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$3 = tmp9.result.p_1;
                          if (result1$3 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result0$3 = tmp1.result.p_0;
                      if (result0$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$3 = tmp9.result.p_1;
                          if (result1$3 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result1$2 = tmp1.result.p_1;
                  if (result1$2 === true) {
                    result3$ = tmp5.result.p_3;
                    if (result3$ === true) {
                      result0$2 = tmp9.result.p_0;
                      if (result0$2 === true) {
                        break split_1$
                      }
                      result0$3 = tmp1.result.p_0;
                      if (result0$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$3 = tmp9.result.p_1;
                          if (result1$3 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result0$3 = tmp1.result.p_0;
                      if (result0$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$3 = tmp9.result.p_1;
                          if (result1$3 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                }
              } else {
                result1$2 = tmp1.result.p_1;
                if (result1$2 === true) {
                  result3$ = tmp5.result.p_3;
                  if (result3$ === true) {
                    result0$2 = tmp9.result.p_0;
                    if (result0$2 === true) {
                      break split_1$
                    }
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  } else {
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result0$3 = tmp1.result.p_0;
                  if (result0$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$3 = tmp9.result.p_1;
                      if (result1$3 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              }
            } else {
              result0$1 = tmp1.result.p_0;
              if (result0$1 === true) {
                result2$1 = tmp5.result.p_2;
                if (result2$1 === true) {
                  result0$ = tmp9.result.p_0;
                  if (result0$ === true) {
                    break split_1$
                  }
                  result1$2 = tmp1.result.p_1;
                  if (result1$2 === true) {
                    result3$ = tmp5.result.p_3;
                    if (result3$ === true) {
                      result0$2 = tmp9.result.p_0;
                      if (result0$2 === true) {
                        break split_1$
                      }
                      result0$3 = tmp1.result.p_0;
                      if (result0$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$3 = tmp9.result.p_1;
                          if (result1$3 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result0$3 = tmp1.result.p_0;
                      if (result0$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$3 = tmp9.result.p_1;
                          if (result1$3 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result1$2 = tmp1.result.p_1;
                  if (result1$2 === true) {
                    result3$ = tmp5.result.p_3;
                    if (result3$ === true) {
                      result0$2 = tmp9.result.p_0;
                      if (result0$2 === true) {
                        break split_1$
                      }
                      result0$3 = tmp1.result.p_0;
                      if (result0$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$3 = tmp9.result.p_1;
                          if (result1$3 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result0$3 = tmp1.result.p_0;
                      if (result0$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$3 = tmp9.result.p_1;
                          if (result1$3 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                }
              } else {
                result1$2 = tmp1.result.p_1;
                if (result1$2 === true) {
                  result3$ = tmp5.result.p_3;
                  if (result3$ === true) {
                    result0$2 = tmp9.result.p_0;
                    if (result0$2 === true) {
                      break split_1$
                    }
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  } else {
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result0$3 = tmp1.result.p_0;
                  if (result0$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$3 = tmp9.result.p_1;
                      if (result1$3 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              }
            }
          } else {
            result0$1 = tmp1.result.p_0;
            if (result0$1 === true) {
              result2$1 = tmp5.result.p_2;
              if (result2$1 === true) {
                result0$ = tmp9.result.p_0;
                if (result0$ === true) {
                  break split_1$
                }
                result1$2 = tmp1.result.p_1;
                if (result1$2 === true) {
                  result3$ = tmp5.result.p_3;
                  if (result3$ === true) {
                    result0$2 = tmp9.result.p_0;
                    if (result0$2 === true) {
                      break split_1$
                    }
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  } else {
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result0$3 = tmp1.result.p_0;
                  if (result0$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$3 = tmp9.result.p_1;
                      if (result1$3 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              } else {
                result1$2 = tmp1.result.p_1;
                if (result1$2 === true) {
                  result3$ = tmp5.result.p_3;
                  if (result3$ === true) {
                    result0$2 = tmp9.result.p_0;
                    if (result0$2 === true) {
                      break split_1$
                    }
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  } else {
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result0$3 = tmp1.result.p_0;
                  if (result0$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$3 = tmp9.result.p_1;
                      if (result1$3 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              }
            } else {
              result1$2 = tmp1.result.p_1;
              if (result1$2 === true) {
                result3$ = tmp5.result.p_3;
                if (result3$ === true) {
                  result0$2 = tmp9.result.p_0;
                  if (result0$2 === true) {
                    break split_1$
                  }
                  result0$3 = tmp1.result.p_0;
                  if (result0$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$3 = tmp9.result.p_1;
                      if (result1$3 === true) {
                        break split_1$
                      }
                    }
                  }
                } else {
                  result0$3 = tmp1.result.p_0;
                  if (result0$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$3 = tmp9.result.p_1;
                      if (result1$3 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              } else {
                result0$3 = tmp1.result.p_0;
                if (result0$3 === true) {
                  result3$1 = tmp5.result.p_3;
                  if (result3$1 === true) {
                    result1$3 = tmp9.result.p_1;
                    if (result1$3 === true) {
                      break split_1$
                    }
                  }
                }
              }
            }
          }
          tmp12 = false;
          break split_root$;
        }
        tmp12 = true;
      }
      inlinedVal = tmp12;
    } else {
      inlinedVal = false;
    }
    if (inlinedVal === true) {
      return t
    }
    return runtime.Unit;
  } 
  static isOddTree_optimized_matchOnly(t) {
    let matcher__EvenTree_OddTree$, matcher__A_B$, lambda, lambda1, inlinedVal, left, value, right, result1$, result2$, result1$1, result0$, result2$1, result0$1, result0$2, result3$, result1$2, result1$3, result3$1, result0$3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
    lambda = (undefined, function (input) {
      let left1, value1, right1, left2, value2, right2, p_1$, result0$4, result2$2, result1$4, result1$5, result2$3, result0$5, result1$6, result3$2, result1$7, result0$6, result3$3, result0$7, result1$8, result2$4, result1$9, result0$8, result2$5, result0$9, result0$10, result3$4, result1$10, result1$11, result3$5, result0$11, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26;
      if (input instanceof EvenOddTree1.B.class) {
        return globalThis.Object.freeze({
          p_1: true,
          p_0: false
        })
      } else if (input instanceof EvenOddTree1.Node.class) {
        if (input instanceof Object) {
          if ("left" in input) {
            left2 = input.left;
            tmp13 = runtime.safeCall(matcher__EvenTree_OddTree$(left2));
            tmp14 = globalThis.Object.freeze({
              input: left2,
              result: tmp13
            });
          } else {
            tmp15 = globalThis.Object.freeze({
              p_1: false,
              p_0: false
            });
            tmp14 = globalThis.Object.freeze({
              input: null,
              result: tmp15
            });
          }
        } else {
          tmp16 = globalThis.Object.freeze({
            p_1: false,
            p_0: false
          });
          tmp14 = globalThis.Object.freeze({
            input: null,
            result: tmp16
          });
        }
        left1 = tmp14;
        if (input instanceof Object) {
          if ("value" in input) {
            value2 = input.value;
            tmp17 = runtime.safeCall(matcher__A_B$(value2));
            tmp18 = globalThis.Object.freeze({
              input: value2,
              result: tmp17
            });
          } else {
            tmp19 = globalThis.Object.freeze({
              p_2: false,
              p_3: false
            });
            tmp18 = globalThis.Object.freeze({
              input: null,
              result: tmp19
            });
          }
        } else {
          tmp20 = globalThis.Object.freeze({
            p_2: false,
            p_3: false
          });
          tmp18 = globalThis.Object.freeze({
            input: null,
            result: tmp20
          });
        }
        value1 = tmp18;
        if (input instanceof Object) {
          if ("right" in input) {
            right2 = input.right;
            tmp21 = runtime.safeCall(matcher__EvenTree_OddTree$(right2));
            tmp22 = globalThis.Object.freeze({
              input: right2,
              result: tmp21
            });
          } else {
            tmp23 = globalThis.Object.freeze({
              p_0: false,
              p_1: false
            });
            tmp22 = globalThis.Object.freeze({
              input: null,
              result: tmp23
            });
          }
        } else {
          tmp24 = globalThis.Object.freeze({
            p_0: false,
            p_1: false
          });
          tmp22 = globalThis.Object.freeze({
            input: null,
            result: tmp24
          });
        }
        right1 = tmp22;
        split_root$: {
          split_1$: {
            result1$4 = tmp14.result.p_1;
            if (result1$4 === true) {
              result2$2 = tmp18.result.p_2;
              if (result2$2 === true) {
                result0$4 = tmp22.result.p_0;
                if (result0$4 === true) {
                  break split_1$
                }
                result0$5 = tmp14.result.p_0;
                if (result0$5 === true) {
                  result2$3 = tmp18.result.p_2;
                  if (result2$3 === true) {
                    result1$5 = tmp22.result.p_1;
                    if (result1$5 === true) {
                      break split_1$
                    }
                    result1$7 = tmp14.result.p_1;
                    if (result1$7 === true) {
                      result3$2 = tmp18.result.p_3;
                      if (result3$2 === true) {
                        result1$6 = tmp22.result.p_1;
                        if (result1$6 === true) {
                          break split_1$
                        }
                        result0$7 = tmp14.result.p_0;
                        if (result0$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result0$6 = tmp22.result.p_0;
                            if (result0$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      } else {
                        result0$7 = tmp14.result.p_0;
                        if (result0$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result0$6 = tmp22.result.p_0;
                            if (result0$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      }
                    } else {
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result1$7 = tmp14.result.p_1;
                    if (result1$7 === true) {
                      result3$2 = tmp18.result.p_3;
                      if (result3$2 === true) {
                        result1$6 = tmp22.result.p_1;
                        if (result1$6 === true) {
                          break split_1$
                        }
                        result0$7 = tmp14.result.p_0;
                        if (result0$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result0$6 = tmp22.result.p_0;
                            if (result0$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      } else {
                        result0$7 = tmp14.result.p_0;
                        if (result0$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result0$6 = tmp22.result.p_0;
                            if (result0$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      }
                    } else {
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  }
                } else {
                  result1$7 = tmp14.result.p_1;
                  if (result1$7 === true) {
                    result3$2 = tmp18.result.p_3;
                    if (result3$2 === true) {
                      result1$6 = tmp22.result.p_1;
                      if (result1$6 === true) {
                        break split_1$
                      }
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result0$7 = tmp14.result.p_0;
                    if (result0$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result0$6 = tmp22.result.p_0;
                        if (result0$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                }
              } else {
                result0$5 = tmp14.result.p_0;
                if (result0$5 === true) {
                  result2$3 = tmp18.result.p_2;
                  if (result2$3 === true) {
                    result1$5 = tmp22.result.p_1;
                    if (result1$5 === true) {
                      break split_1$
                    }
                    result1$7 = tmp14.result.p_1;
                    if (result1$7 === true) {
                      result3$2 = tmp18.result.p_3;
                      if (result3$2 === true) {
                        result1$6 = tmp22.result.p_1;
                        if (result1$6 === true) {
                          break split_1$
                        }
                        result0$7 = tmp14.result.p_0;
                        if (result0$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result0$6 = tmp22.result.p_0;
                            if (result0$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      } else {
                        result0$7 = tmp14.result.p_0;
                        if (result0$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result0$6 = tmp22.result.p_0;
                            if (result0$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      }
                    } else {
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result1$7 = tmp14.result.p_1;
                    if (result1$7 === true) {
                      result3$2 = tmp18.result.p_3;
                      if (result3$2 === true) {
                        result1$6 = tmp22.result.p_1;
                        if (result1$6 === true) {
                          break split_1$
                        }
                        result0$7 = tmp14.result.p_0;
                        if (result0$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result0$6 = tmp22.result.p_0;
                            if (result0$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      } else {
                        result0$7 = tmp14.result.p_0;
                        if (result0$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result0$6 = tmp22.result.p_0;
                            if (result0$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      }
                    } else {
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  }
                } else {
                  result1$7 = tmp14.result.p_1;
                  if (result1$7 === true) {
                    result3$2 = tmp18.result.p_3;
                    if (result3$2 === true) {
                      result1$6 = tmp22.result.p_1;
                      if (result1$6 === true) {
                        break split_1$
                      }
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result0$7 = tmp14.result.p_0;
                    if (result0$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result0$6 = tmp22.result.p_0;
                        if (result0$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                }
              }
            } else {
              result0$5 = tmp14.result.p_0;
              if (result0$5 === true) {
                result2$3 = tmp18.result.p_2;
                if (result2$3 === true) {
                  result1$5 = tmp22.result.p_1;
                  if (result1$5 === true) {
                    break split_1$
                  }
                  result1$7 = tmp14.result.p_1;
                  if (result1$7 === true) {
                    result3$2 = tmp18.result.p_3;
                    if (result3$2 === true) {
                      result1$6 = tmp22.result.p_1;
                      if (result1$6 === true) {
                        break split_1$
                      }
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result0$7 = tmp14.result.p_0;
                    if (result0$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result0$6 = tmp22.result.p_0;
                        if (result0$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result1$7 = tmp14.result.p_1;
                  if (result1$7 === true) {
                    result3$2 = tmp18.result.p_3;
                    if (result3$2 === true) {
                      result1$6 = tmp22.result.p_1;
                      if (result1$6 === true) {
                        break split_1$
                      }
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result0$7 = tmp14.result.p_0;
                      if (result0$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result0$6 = tmp22.result.p_0;
                          if (result0$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result0$7 = tmp14.result.p_0;
                    if (result0$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result0$6 = tmp22.result.p_0;
                        if (result0$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                }
              } else {
                result1$7 = tmp14.result.p_1;
                if (result1$7 === true) {
                  result3$2 = tmp18.result.p_3;
                  if (result3$2 === true) {
                    result1$6 = tmp22.result.p_1;
                    if (result1$6 === true) {
                      break split_1$
                    }
                    result0$7 = tmp14.result.p_0;
                    if (result0$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result0$6 = tmp22.result.p_0;
                        if (result0$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  } else {
                    result0$7 = tmp14.result.p_0;
                    if (result0$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result0$6 = tmp22.result.p_0;
                        if (result0$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result0$7 = tmp14.result.p_0;
                  if (result0$7 === true) {
                    result3$3 = tmp18.result.p_3;
                    if (result3$3 === true) {
                      result0$6 = tmp22.result.p_0;
                      if (result0$6 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              }
            }
            tmp25 = false;
            break split_root$;
          }
          tmp25 = true;
        }
        p_1$ = tmp25;
        split_root$1: {
          split_1$1: {
            result1$9 = left1.result.p_1;
            if (result1$9 === true) {
              result2$4 = value1.result.p_2;
              if (result2$4 === true) {
                result1$8 = right1.result.p_1;
                if (result1$8 === true) {
                  break split_1$1
                }
                result0$9 = left1.result.p_0;
                if (result0$9 === true) {
                  result2$5 = value1.result.p_2;
                  if (result2$5 === true) {
                    result0$8 = right1.result.p_0;
                    if (result0$8 === true) {
                      break split_1$1
                    }
                    result1$10 = left1.result.p_1;
                    if (result1$10 === true) {
                      result3$4 = value1.result.p_3;
                      if (result3$4 === true) {
                        result0$10 = right1.result.p_0;
                        if (result0$10 === true) {
                          break split_1$1
                        }
                        result0$11 = left1.result.p_0;
                        if (result0$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result1$11 = right1.result.p_1;
                            if (result1$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      } else {
                        result0$11 = left1.result.p_0;
                        if (result0$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result1$11 = right1.result.p_1;
                            if (result1$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      }
                    } else {
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result1$10 = left1.result.p_1;
                    if (result1$10 === true) {
                      result3$4 = value1.result.p_3;
                      if (result3$4 === true) {
                        result0$10 = right1.result.p_0;
                        if (result0$10 === true) {
                          break split_1$1
                        }
                        result0$11 = left1.result.p_0;
                        if (result0$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result1$11 = right1.result.p_1;
                            if (result1$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      } else {
                        result0$11 = left1.result.p_0;
                        if (result0$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result1$11 = right1.result.p_1;
                            if (result1$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      }
                    } else {
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  }
                } else {
                  result1$10 = left1.result.p_1;
                  if (result1$10 === true) {
                    result3$4 = value1.result.p_3;
                    if (result3$4 === true) {
                      result0$10 = right1.result.p_0;
                      if (result0$10 === true) {
                        break split_1$1
                      }
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    } else {
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result0$11 = left1.result.p_0;
                    if (result0$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result1$11 = right1.result.p_1;
                        if (result1$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  }
                }
              } else {
                result0$9 = left1.result.p_0;
                if (result0$9 === true) {
                  result2$5 = value1.result.p_2;
                  if (result2$5 === true) {
                    result0$8 = right1.result.p_0;
                    if (result0$8 === true) {
                      break split_1$1
                    }
                    result1$10 = left1.result.p_1;
                    if (result1$10 === true) {
                      result3$4 = value1.result.p_3;
                      if (result3$4 === true) {
                        result0$10 = right1.result.p_0;
                        if (result0$10 === true) {
                          break split_1$1
                        }
                        result0$11 = left1.result.p_0;
                        if (result0$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result1$11 = right1.result.p_1;
                            if (result1$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      } else {
                        result0$11 = left1.result.p_0;
                        if (result0$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result1$11 = right1.result.p_1;
                            if (result1$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      }
                    } else {
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result1$10 = left1.result.p_1;
                    if (result1$10 === true) {
                      result3$4 = value1.result.p_3;
                      if (result3$4 === true) {
                        result0$10 = right1.result.p_0;
                        if (result0$10 === true) {
                          break split_1$1
                        }
                        result0$11 = left1.result.p_0;
                        if (result0$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result1$11 = right1.result.p_1;
                            if (result1$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      } else {
                        result0$11 = left1.result.p_0;
                        if (result0$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result1$11 = right1.result.p_1;
                            if (result1$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      }
                    } else {
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  }
                } else {
                  result1$10 = left1.result.p_1;
                  if (result1$10 === true) {
                    result3$4 = value1.result.p_3;
                    if (result3$4 === true) {
                      result0$10 = right1.result.p_0;
                      if (result0$10 === true) {
                        break split_1$1
                      }
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    } else {
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result0$11 = left1.result.p_0;
                    if (result0$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result1$11 = right1.result.p_1;
                        if (result1$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  }
                }
              }
            } else {
              result0$9 = left1.result.p_0;
              if (result0$9 === true) {
                result2$5 = value1.result.p_2;
                if (result2$5 === true) {
                  result0$8 = right1.result.p_0;
                  if (result0$8 === true) {
                    break split_1$1
                  }
                  result1$10 = left1.result.p_1;
                  if (result1$10 === true) {
                    result3$4 = value1.result.p_3;
                    if (result3$4 === true) {
                      result0$10 = right1.result.p_0;
                      if (result0$10 === true) {
                        break split_1$1
                      }
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    } else {
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result0$11 = left1.result.p_0;
                    if (result0$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result1$11 = right1.result.p_1;
                        if (result1$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  }
                } else {
                  result1$10 = left1.result.p_1;
                  if (result1$10 === true) {
                    result3$4 = value1.result.p_3;
                    if (result3$4 === true) {
                      result0$10 = right1.result.p_0;
                      if (result0$10 === true) {
                        break split_1$1
                      }
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    } else {
                      result0$11 = left1.result.p_0;
                      if (result0$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result1$11 = right1.result.p_1;
                          if (result1$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result0$11 = left1.result.p_0;
                    if (result0$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result1$11 = right1.result.p_1;
                        if (result1$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  }
                }
              } else {
                result1$10 = left1.result.p_1;
                if (result1$10 === true) {
                  result3$4 = value1.result.p_3;
                  if (result3$4 === true) {
                    result0$10 = right1.result.p_0;
                    if (result0$10 === true) {
                      break split_1$1
                    }
                    result0$11 = left1.result.p_0;
                    if (result0$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result1$11 = right1.result.p_1;
                        if (result1$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  } else {
                    result0$11 = left1.result.p_0;
                    if (result0$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result1$11 = right1.result.p_1;
                        if (result1$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  }
                } else {
                  result0$11 = left1.result.p_0;
                  if (result0$11 === true) {
                    result3$5 = value1.result.p_3;
                    if (result3$5 === true) {
                      result1$11 = right1.result.p_1;
                      if (result1$11 === true) {
                        break split_1$1
                      }
                    }
                  }
                }
              }
            }
            tmp26 = false;
            break split_root$1;
          }
          tmp26 = true;
        }
        return globalThis.Object.freeze({
          p_1: p_1$,
          p_0: tmp26
        })
      } else if (input instanceof EvenOddTree1.A.class) {
        return globalThis.Object.freeze({
          p_1: false,
          p_0: true
        })
      }
      return globalThis.Object.freeze({
        p_1: false,
        p_0: false
      });
    });
    matcher__EvenTree_OddTree$ = lambda;
    lambda1 = (undefined, function (input) {
      if (input instanceof EvenOddTree1.A.class) {
        return globalThis.Object.freeze({
          p_2: true,
          p_3: false
        })
      } else if (input instanceof EvenOddTree1.B.class) {
        return globalThis.Object.freeze({
          p_2: false,
          p_3: true
        })
      }
      return globalThis.Object.freeze({
        p_2: false,
        p_3: false
      });
    });
    matcher__A_B$ = lambda1;
    if (t instanceof EvenOddTree1.A.class) {
      inlinedVal = true;
    } else if (t instanceof EvenOddTree1.Node.class) {
      if (t instanceof Object) {
        if ("left" in t) {
          left = t.left;
          tmp = runtime.safeCall(matcher__EvenTree_OddTree$(left));
          tmp1 = globalThis.Object.freeze({
            input: left,
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
      if (t instanceof Object) {
        if ("value" in t) {
          value = t.value;
          tmp4 = runtime.safeCall(matcher__A_B$(value));
          tmp5 = globalThis.Object.freeze({
            input: value,
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
      if (t instanceof Object) {
        if ("right" in t) {
          right = t.right;
          tmp8 = runtime.safeCall(matcher__EvenTree_OddTree$(right));
          tmp9 = globalThis.Object.freeze({
            input: right,
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
      split_root$: {
        split_1$: {
          result1$1 = tmp1.result.p_1;
          if (result1$1 === true) {
            result2$ = tmp5.result.p_2;
            if (result2$ === true) {
              result1$ = tmp9.result.p_1;
              if (result1$ === true) {
                break split_1$
              }
              result0$1 = tmp1.result.p_0;
              if (result0$1 === true) {
                result2$1 = tmp5.result.p_2;
                if (result2$1 === true) {
                  result0$ = tmp9.result.p_0;
                  if (result0$ === true) {
                    break split_1$
                  }
                  result1$2 = tmp1.result.p_1;
                  if (result1$2 === true) {
                    result3$ = tmp5.result.p_3;
                    if (result3$ === true) {
                      result0$2 = tmp9.result.p_0;
                      if (result0$2 === true) {
                        break split_1$
                      }
                      result0$3 = tmp1.result.p_0;
                      if (result0$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$3 = tmp9.result.p_1;
                          if (result1$3 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result0$3 = tmp1.result.p_0;
                      if (result0$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$3 = tmp9.result.p_1;
                          if (result1$3 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result1$2 = tmp1.result.p_1;
                  if (result1$2 === true) {
                    result3$ = tmp5.result.p_3;
                    if (result3$ === true) {
                      result0$2 = tmp9.result.p_0;
                      if (result0$2 === true) {
                        break split_1$
                      }
                      result0$3 = tmp1.result.p_0;
                      if (result0$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$3 = tmp9.result.p_1;
                          if (result1$3 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result0$3 = tmp1.result.p_0;
                      if (result0$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$3 = tmp9.result.p_1;
                          if (result1$3 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                }
              } else {
                result1$2 = tmp1.result.p_1;
                if (result1$2 === true) {
                  result3$ = tmp5.result.p_3;
                  if (result3$ === true) {
                    result0$2 = tmp9.result.p_0;
                    if (result0$2 === true) {
                      break split_1$
                    }
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  } else {
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result0$3 = tmp1.result.p_0;
                  if (result0$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$3 = tmp9.result.p_1;
                      if (result1$3 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              }
            } else {
              result0$1 = tmp1.result.p_0;
              if (result0$1 === true) {
                result2$1 = tmp5.result.p_2;
                if (result2$1 === true) {
                  result0$ = tmp9.result.p_0;
                  if (result0$ === true) {
                    break split_1$
                  }
                  result1$2 = tmp1.result.p_1;
                  if (result1$2 === true) {
                    result3$ = tmp5.result.p_3;
                    if (result3$ === true) {
                      result0$2 = tmp9.result.p_0;
                      if (result0$2 === true) {
                        break split_1$
                      }
                      result0$3 = tmp1.result.p_0;
                      if (result0$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$3 = tmp9.result.p_1;
                          if (result1$3 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result0$3 = tmp1.result.p_0;
                      if (result0$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$3 = tmp9.result.p_1;
                          if (result1$3 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result1$2 = tmp1.result.p_1;
                  if (result1$2 === true) {
                    result3$ = tmp5.result.p_3;
                    if (result3$ === true) {
                      result0$2 = tmp9.result.p_0;
                      if (result0$2 === true) {
                        break split_1$
                      }
                      result0$3 = tmp1.result.p_0;
                      if (result0$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$3 = tmp9.result.p_1;
                          if (result1$3 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result0$3 = tmp1.result.p_0;
                      if (result0$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$3 = tmp9.result.p_1;
                          if (result1$3 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                }
              } else {
                result1$2 = tmp1.result.p_1;
                if (result1$2 === true) {
                  result3$ = tmp5.result.p_3;
                  if (result3$ === true) {
                    result0$2 = tmp9.result.p_0;
                    if (result0$2 === true) {
                      break split_1$
                    }
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  } else {
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result0$3 = tmp1.result.p_0;
                  if (result0$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$3 = tmp9.result.p_1;
                      if (result1$3 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              }
            }
          } else {
            result0$1 = tmp1.result.p_0;
            if (result0$1 === true) {
              result2$1 = tmp5.result.p_2;
              if (result2$1 === true) {
                result0$ = tmp9.result.p_0;
                if (result0$ === true) {
                  break split_1$
                }
                result1$2 = tmp1.result.p_1;
                if (result1$2 === true) {
                  result3$ = tmp5.result.p_3;
                  if (result3$ === true) {
                    result0$2 = tmp9.result.p_0;
                    if (result0$2 === true) {
                      break split_1$
                    }
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  } else {
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result0$3 = tmp1.result.p_0;
                  if (result0$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$3 = tmp9.result.p_1;
                      if (result1$3 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              } else {
                result1$2 = tmp1.result.p_1;
                if (result1$2 === true) {
                  result3$ = tmp5.result.p_3;
                  if (result3$ === true) {
                    result0$2 = tmp9.result.p_0;
                    if (result0$2 === true) {
                      break split_1$
                    }
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  } else {
                    result0$3 = tmp1.result.p_0;
                    if (result0$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$3 = tmp9.result.p_1;
                        if (result1$3 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result0$3 = tmp1.result.p_0;
                  if (result0$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$3 = tmp9.result.p_1;
                      if (result1$3 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              }
            } else {
              result1$2 = tmp1.result.p_1;
              if (result1$2 === true) {
                result3$ = tmp5.result.p_3;
                if (result3$ === true) {
                  result0$2 = tmp9.result.p_0;
                  if (result0$2 === true) {
                    break split_1$
                  }
                  result0$3 = tmp1.result.p_0;
                  if (result0$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$3 = tmp9.result.p_1;
                      if (result1$3 === true) {
                        break split_1$
                      }
                    }
                  }
                } else {
                  result0$3 = tmp1.result.p_0;
                  if (result0$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$3 = tmp9.result.p_1;
                      if (result1$3 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              } else {
                result0$3 = tmp1.result.p_0;
                if (result0$3 === true) {
                  result3$1 = tmp5.result.p_3;
                  if (result3$1 === true) {
                    result1$3 = tmp9.result.p_1;
                    if (result1$3 === true) {
                      break split_1$
                    }
                  }
                }
              }
            }
          }
          tmp12 = false;
          break split_root$;
        }
        tmp12 = true;
      }
      inlinedVal = tmp12;
    } else {
      inlinedVal = false;
    }
    if (inlinedVal === true) {
      return true
    }
    return false;
  } 
  static isEvenTree_naive(t) {
    let unapplyResult;
    unapplyResult = runtime.safeCall(EvenOddTree.EvenTree.unapply(t));
    if (unapplyResult instanceof runtime.MatchSuccess.class) {
      unapplyResult.output;
      unapplyResult.bindings;
      return true
    }
    return false;
  } 
  static isEvenTree_optimized(t) {
    let matcher__EvenTree_OddTree$, matcher__A_B$, lambda, lambda1, inlinedVal, left, value, right, result1$, result2$, result0$, result0$1, result2$1, result1$1, result0$2, result3$, result0$3, result1$2, result3$1, result1$3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
    lambda = (undefined, function (input) {
      let left1, value1, right1, left2, value2, right2, p_0$, result1$4, result2$2, result0$4, result0$5, result2$3, result1$5, result0$6, result3$2, result0$7, result1$6, result3$3, result1$7, result0$8, result2$4, result0$9, result1$8, result2$5, result1$9, result1$10, result3$4, result0$10, result0$11, result3$5, result1$11, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26;
      if (input instanceof EvenOddTree1.B.class) {
        return globalThis.Object.freeze({
          p_0: true,
          p_1: false
        })
      } else if (input instanceof EvenOddTree1.Node.class) {
        if (input instanceof Object) {
          if ("left" in input) {
            left2 = input.left;
            tmp13 = runtime.safeCall(matcher__EvenTree_OddTree$(left2));
            tmp14 = globalThis.Object.freeze({
              input: left2,
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
        left1 = tmp14;
        if (input instanceof Object) {
          if ("value" in input) {
            value2 = input.value;
            tmp17 = runtime.safeCall(matcher__A_B$(value2));
            tmp18 = globalThis.Object.freeze({
              input: value2,
              result: tmp17
            });
          } else {
            tmp19 = globalThis.Object.freeze({
              p_2: false,
              p_3: false
            });
            tmp18 = globalThis.Object.freeze({
              input: null,
              result: tmp19
            });
          }
        } else {
          tmp20 = globalThis.Object.freeze({
            p_2: false,
            p_3: false
          });
          tmp18 = globalThis.Object.freeze({
            input: null,
            result: tmp20
          });
        }
        value1 = tmp18;
        if (input instanceof Object) {
          if ("right" in input) {
            right2 = input.right;
            tmp21 = runtime.safeCall(matcher__EvenTree_OddTree$(right2));
            tmp22 = globalThis.Object.freeze({
              input: right2,
              result: tmp21
            });
          } else {
            tmp23 = globalThis.Object.freeze({
              p_1: false,
              p_0: false
            });
            tmp22 = globalThis.Object.freeze({
              input: null,
              result: tmp23
            });
          }
        } else {
          tmp24 = globalThis.Object.freeze({
            p_1: false,
            p_0: false
          });
          tmp22 = globalThis.Object.freeze({
            input: null,
            result: tmp24
          });
        }
        right1 = tmp22;
        split_root$: {
          split_1$: {
            result0$4 = tmp14.result.p_0;
            if (result0$4 === true) {
              result2$2 = tmp18.result.p_2;
              if (result2$2 === true) {
                result1$4 = tmp22.result.p_1;
                if (result1$4 === true) {
                  break split_1$
                }
                result1$5 = tmp14.result.p_1;
                if (result1$5 === true) {
                  result2$3 = tmp18.result.p_2;
                  if (result2$3 === true) {
                    result0$5 = tmp22.result.p_0;
                    if (result0$5 === true) {
                      break split_1$
                    }
                    result0$7 = tmp14.result.p_0;
                    if (result0$7 === true) {
                      result3$2 = tmp18.result.p_3;
                      if (result3$2 === true) {
                        result0$6 = tmp22.result.p_0;
                        if (result0$6 === true) {
                          break split_1$
                        }
                        result1$7 = tmp14.result.p_1;
                        if (result1$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result1$6 = tmp22.result.p_1;
                            if (result1$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      } else {
                        result1$7 = tmp14.result.p_1;
                        if (result1$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result1$6 = tmp22.result.p_1;
                            if (result1$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      }
                    } else {
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result0$7 = tmp14.result.p_0;
                    if (result0$7 === true) {
                      result3$2 = tmp18.result.p_3;
                      if (result3$2 === true) {
                        result0$6 = tmp22.result.p_0;
                        if (result0$6 === true) {
                          break split_1$
                        }
                        result1$7 = tmp14.result.p_1;
                        if (result1$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result1$6 = tmp22.result.p_1;
                            if (result1$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      } else {
                        result1$7 = tmp14.result.p_1;
                        if (result1$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result1$6 = tmp22.result.p_1;
                            if (result1$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      }
                    } else {
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  }
                } else {
                  result0$7 = tmp14.result.p_0;
                  if (result0$7 === true) {
                    result3$2 = tmp18.result.p_3;
                    if (result3$2 === true) {
                      result0$6 = tmp22.result.p_0;
                      if (result0$6 === true) {
                        break split_1$
                      }
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result1$7 = tmp14.result.p_1;
                    if (result1$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result1$6 = tmp22.result.p_1;
                        if (result1$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                }
              } else {
                result1$5 = tmp14.result.p_1;
                if (result1$5 === true) {
                  result2$3 = tmp18.result.p_2;
                  if (result2$3 === true) {
                    result0$5 = tmp22.result.p_0;
                    if (result0$5 === true) {
                      break split_1$
                    }
                    result0$7 = tmp14.result.p_0;
                    if (result0$7 === true) {
                      result3$2 = tmp18.result.p_3;
                      if (result3$2 === true) {
                        result0$6 = tmp22.result.p_0;
                        if (result0$6 === true) {
                          break split_1$
                        }
                        result1$7 = tmp14.result.p_1;
                        if (result1$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result1$6 = tmp22.result.p_1;
                            if (result1$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      } else {
                        result1$7 = tmp14.result.p_1;
                        if (result1$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result1$6 = tmp22.result.p_1;
                            if (result1$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      }
                    } else {
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result0$7 = tmp14.result.p_0;
                    if (result0$7 === true) {
                      result3$2 = tmp18.result.p_3;
                      if (result3$2 === true) {
                        result0$6 = tmp22.result.p_0;
                        if (result0$6 === true) {
                          break split_1$
                        }
                        result1$7 = tmp14.result.p_1;
                        if (result1$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result1$6 = tmp22.result.p_1;
                            if (result1$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      } else {
                        result1$7 = tmp14.result.p_1;
                        if (result1$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result1$6 = tmp22.result.p_1;
                            if (result1$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      }
                    } else {
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  }
                } else {
                  result0$7 = tmp14.result.p_0;
                  if (result0$7 === true) {
                    result3$2 = tmp18.result.p_3;
                    if (result3$2 === true) {
                      result0$6 = tmp22.result.p_0;
                      if (result0$6 === true) {
                        break split_1$
                      }
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result1$7 = tmp14.result.p_1;
                    if (result1$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result1$6 = tmp22.result.p_1;
                        if (result1$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                }
              }
            } else {
              result1$5 = tmp14.result.p_1;
              if (result1$5 === true) {
                result2$3 = tmp18.result.p_2;
                if (result2$3 === true) {
                  result0$5 = tmp22.result.p_0;
                  if (result0$5 === true) {
                    break split_1$
                  }
                  result0$7 = tmp14.result.p_0;
                  if (result0$7 === true) {
                    result3$2 = tmp18.result.p_3;
                    if (result3$2 === true) {
                      result0$6 = tmp22.result.p_0;
                      if (result0$6 === true) {
                        break split_1$
                      }
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result1$7 = tmp14.result.p_1;
                    if (result1$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result1$6 = tmp22.result.p_1;
                        if (result1$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result0$7 = tmp14.result.p_0;
                  if (result0$7 === true) {
                    result3$2 = tmp18.result.p_3;
                    if (result3$2 === true) {
                      result0$6 = tmp22.result.p_0;
                      if (result0$6 === true) {
                        break split_1$
                      }
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result1$7 = tmp14.result.p_1;
                    if (result1$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result1$6 = tmp22.result.p_1;
                        if (result1$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                }
              } else {
                result0$7 = tmp14.result.p_0;
                if (result0$7 === true) {
                  result3$2 = tmp18.result.p_3;
                  if (result3$2 === true) {
                    result0$6 = tmp22.result.p_0;
                    if (result0$6 === true) {
                      break split_1$
                    }
                    result1$7 = tmp14.result.p_1;
                    if (result1$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result1$6 = tmp22.result.p_1;
                        if (result1$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  } else {
                    result1$7 = tmp14.result.p_1;
                    if (result1$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result1$6 = tmp22.result.p_1;
                        if (result1$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result1$7 = tmp14.result.p_1;
                  if (result1$7 === true) {
                    result3$3 = tmp18.result.p_3;
                    if (result3$3 === true) {
                      result1$6 = tmp22.result.p_1;
                      if (result1$6 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              }
            }
            tmp25 = false;
            break split_root$;
          }
          tmp25 = true;
        }
        p_0$ = tmp25;
        split_root$1: {
          split_1$1: {
            result0$9 = left1.result.p_0;
            if (result0$9 === true) {
              result2$4 = value1.result.p_2;
              if (result2$4 === true) {
                result0$8 = right1.result.p_0;
                if (result0$8 === true) {
                  break split_1$1
                }
                result1$9 = left1.result.p_1;
                if (result1$9 === true) {
                  result2$5 = value1.result.p_2;
                  if (result2$5 === true) {
                    result1$8 = right1.result.p_1;
                    if (result1$8 === true) {
                      break split_1$1
                    }
                    result0$10 = left1.result.p_0;
                    if (result0$10 === true) {
                      result3$4 = value1.result.p_3;
                      if (result3$4 === true) {
                        result1$10 = right1.result.p_1;
                        if (result1$10 === true) {
                          break split_1$1
                        }
                        result1$11 = left1.result.p_1;
                        if (result1$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result0$11 = right1.result.p_0;
                            if (result0$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      } else {
                        result1$11 = left1.result.p_1;
                        if (result1$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result0$11 = right1.result.p_0;
                            if (result0$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      }
                    } else {
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result0$10 = left1.result.p_0;
                    if (result0$10 === true) {
                      result3$4 = value1.result.p_3;
                      if (result3$4 === true) {
                        result1$10 = right1.result.p_1;
                        if (result1$10 === true) {
                          break split_1$1
                        }
                        result1$11 = left1.result.p_1;
                        if (result1$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result0$11 = right1.result.p_0;
                            if (result0$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      } else {
                        result1$11 = left1.result.p_1;
                        if (result1$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result0$11 = right1.result.p_0;
                            if (result0$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      }
                    } else {
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  }
                } else {
                  result0$10 = left1.result.p_0;
                  if (result0$10 === true) {
                    result3$4 = value1.result.p_3;
                    if (result3$4 === true) {
                      result1$10 = right1.result.p_1;
                      if (result1$10 === true) {
                        break split_1$1
                      }
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    } else {
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result1$11 = left1.result.p_1;
                    if (result1$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result0$11 = right1.result.p_0;
                        if (result0$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  }
                }
              } else {
                result1$9 = left1.result.p_1;
                if (result1$9 === true) {
                  result2$5 = value1.result.p_2;
                  if (result2$5 === true) {
                    result1$8 = right1.result.p_1;
                    if (result1$8 === true) {
                      break split_1$1
                    }
                    result0$10 = left1.result.p_0;
                    if (result0$10 === true) {
                      result3$4 = value1.result.p_3;
                      if (result3$4 === true) {
                        result1$10 = right1.result.p_1;
                        if (result1$10 === true) {
                          break split_1$1
                        }
                        result1$11 = left1.result.p_1;
                        if (result1$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result0$11 = right1.result.p_0;
                            if (result0$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      } else {
                        result1$11 = left1.result.p_1;
                        if (result1$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result0$11 = right1.result.p_0;
                            if (result0$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      }
                    } else {
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result0$10 = left1.result.p_0;
                    if (result0$10 === true) {
                      result3$4 = value1.result.p_3;
                      if (result3$4 === true) {
                        result1$10 = right1.result.p_1;
                        if (result1$10 === true) {
                          break split_1$1
                        }
                        result1$11 = left1.result.p_1;
                        if (result1$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result0$11 = right1.result.p_0;
                            if (result0$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      } else {
                        result1$11 = left1.result.p_1;
                        if (result1$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result0$11 = right1.result.p_0;
                            if (result0$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      }
                    } else {
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  }
                } else {
                  result0$10 = left1.result.p_0;
                  if (result0$10 === true) {
                    result3$4 = value1.result.p_3;
                    if (result3$4 === true) {
                      result1$10 = right1.result.p_1;
                      if (result1$10 === true) {
                        break split_1$1
                      }
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    } else {
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result1$11 = left1.result.p_1;
                    if (result1$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result0$11 = right1.result.p_0;
                        if (result0$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  }
                }
              }
            } else {
              result1$9 = left1.result.p_1;
              if (result1$9 === true) {
                result2$5 = value1.result.p_2;
                if (result2$5 === true) {
                  result1$8 = right1.result.p_1;
                  if (result1$8 === true) {
                    break split_1$1
                  }
                  result0$10 = left1.result.p_0;
                  if (result0$10 === true) {
                    result3$4 = value1.result.p_3;
                    if (result3$4 === true) {
                      result1$10 = right1.result.p_1;
                      if (result1$10 === true) {
                        break split_1$1
                      }
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    } else {
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result1$11 = left1.result.p_1;
                    if (result1$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result0$11 = right1.result.p_0;
                        if (result0$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  }
                } else {
                  result0$10 = left1.result.p_0;
                  if (result0$10 === true) {
                    result3$4 = value1.result.p_3;
                    if (result3$4 === true) {
                      result1$10 = right1.result.p_1;
                      if (result1$10 === true) {
                        break split_1$1
                      }
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    } else {
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result1$11 = left1.result.p_1;
                    if (result1$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result0$11 = right1.result.p_0;
                        if (result0$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  }
                }
              } else {
                result0$10 = left1.result.p_0;
                if (result0$10 === true) {
                  result3$4 = value1.result.p_3;
                  if (result3$4 === true) {
                    result1$10 = right1.result.p_1;
                    if (result1$10 === true) {
                      break split_1$1
                    }
                    result1$11 = left1.result.p_1;
                    if (result1$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result0$11 = right1.result.p_0;
                        if (result0$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  } else {
                    result1$11 = left1.result.p_1;
                    if (result1$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result0$11 = right1.result.p_0;
                        if (result0$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  }
                } else {
                  result1$11 = left1.result.p_1;
                  if (result1$11 === true) {
                    result3$5 = value1.result.p_3;
                    if (result3$5 === true) {
                      result0$11 = right1.result.p_0;
                      if (result0$11 === true) {
                        break split_1$1
                      }
                    }
                  }
                }
              }
            }
            tmp26 = false;
            break split_root$1;
          }
          tmp26 = true;
        }
        return globalThis.Object.freeze({
          p_0: p_0$,
          p_1: tmp26
        })
      } else if (input instanceof EvenOddTree1.A.class) {
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
    matcher__EvenTree_OddTree$ = lambda;
    lambda1 = (undefined, function (input) {
      if (input instanceof EvenOddTree1.A.class) {
        return globalThis.Object.freeze({
          p_2: true,
          p_3: false
        })
      } else if (input instanceof EvenOddTree1.B.class) {
        return globalThis.Object.freeze({
          p_2: false,
          p_3: true
        })
      }
      return globalThis.Object.freeze({
        p_2: false,
        p_3: false
      });
    });
    matcher__A_B$ = lambda1;
    if (t instanceof EvenOddTree1.B.class) {
      inlinedVal = true;
    } else if (t instanceof EvenOddTree1.Node.class) {
      if (t instanceof Object) {
        if ("left" in t) {
          left = t.left;
          tmp = runtime.safeCall(matcher__EvenTree_OddTree$(left));
          tmp1 = globalThis.Object.freeze({
            input: left,
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
      if (t instanceof Object) {
        if ("value" in t) {
          value = t.value;
          tmp4 = runtime.safeCall(matcher__A_B$(value));
          tmp5 = globalThis.Object.freeze({
            input: value,
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
      if (t instanceof Object) {
        if ("right" in t) {
          right = t.right;
          tmp8 = runtime.safeCall(matcher__EvenTree_OddTree$(right));
          tmp9 = globalThis.Object.freeze({
            input: right,
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
      split_root$: {
        split_1$: {
          result0$ = tmp1.result.p_0;
          if (result0$ === true) {
            result2$ = tmp5.result.p_2;
            if (result2$ === true) {
              result1$ = tmp9.result.p_1;
              if (result1$ === true) {
                break split_1$
              }
              result1$1 = tmp1.result.p_1;
              if (result1$1 === true) {
                result2$1 = tmp5.result.p_2;
                if (result2$1 === true) {
                  result0$1 = tmp9.result.p_0;
                  if (result0$1 === true) {
                    break split_1$
                  }
                  result0$3 = tmp1.result.p_0;
                  if (result0$3 === true) {
                    result3$ = tmp5.result.p_3;
                    if (result3$ === true) {
                      result0$2 = tmp9.result.p_0;
                      if (result0$2 === true) {
                        break split_1$
                      }
                      result1$3 = tmp1.result.p_1;
                      if (result1$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$2 = tmp9.result.p_1;
                          if (result1$2 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result1$3 = tmp1.result.p_1;
                      if (result1$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$2 = tmp9.result.p_1;
                          if (result1$2 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result0$3 = tmp1.result.p_0;
                  if (result0$3 === true) {
                    result3$ = tmp5.result.p_3;
                    if (result3$ === true) {
                      result0$2 = tmp9.result.p_0;
                      if (result0$2 === true) {
                        break split_1$
                      }
                      result1$3 = tmp1.result.p_1;
                      if (result1$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$2 = tmp9.result.p_1;
                          if (result1$2 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result1$3 = tmp1.result.p_1;
                      if (result1$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$2 = tmp9.result.p_1;
                          if (result1$2 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                }
              } else {
                result0$3 = tmp1.result.p_0;
                if (result0$3 === true) {
                  result3$ = tmp5.result.p_3;
                  if (result3$ === true) {
                    result0$2 = tmp9.result.p_0;
                    if (result0$2 === true) {
                      break split_1$
                    }
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  } else {
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result1$3 = tmp1.result.p_1;
                  if (result1$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$2 = tmp9.result.p_1;
                      if (result1$2 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              }
            } else {
              result1$1 = tmp1.result.p_1;
              if (result1$1 === true) {
                result2$1 = tmp5.result.p_2;
                if (result2$1 === true) {
                  result0$1 = tmp9.result.p_0;
                  if (result0$1 === true) {
                    break split_1$
                  }
                  result0$3 = tmp1.result.p_0;
                  if (result0$3 === true) {
                    result3$ = tmp5.result.p_3;
                    if (result3$ === true) {
                      result0$2 = tmp9.result.p_0;
                      if (result0$2 === true) {
                        break split_1$
                      }
                      result1$3 = tmp1.result.p_1;
                      if (result1$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$2 = tmp9.result.p_1;
                          if (result1$2 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result1$3 = tmp1.result.p_1;
                      if (result1$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$2 = tmp9.result.p_1;
                          if (result1$2 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result0$3 = tmp1.result.p_0;
                  if (result0$3 === true) {
                    result3$ = tmp5.result.p_3;
                    if (result3$ === true) {
                      result0$2 = tmp9.result.p_0;
                      if (result0$2 === true) {
                        break split_1$
                      }
                      result1$3 = tmp1.result.p_1;
                      if (result1$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$2 = tmp9.result.p_1;
                          if (result1$2 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result1$3 = tmp1.result.p_1;
                      if (result1$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$2 = tmp9.result.p_1;
                          if (result1$2 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                }
              } else {
                result0$3 = tmp1.result.p_0;
                if (result0$3 === true) {
                  result3$ = tmp5.result.p_3;
                  if (result3$ === true) {
                    result0$2 = tmp9.result.p_0;
                    if (result0$2 === true) {
                      break split_1$
                    }
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  } else {
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result1$3 = tmp1.result.p_1;
                  if (result1$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$2 = tmp9.result.p_1;
                      if (result1$2 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              }
            }
          } else {
            result1$1 = tmp1.result.p_1;
            if (result1$1 === true) {
              result2$1 = tmp5.result.p_2;
              if (result2$1 === true) {
                result0$1 = tmp9.result.p_0;
                if (result0$1 === true) {
                  break split_1$
                }
                result0$3 = tmp1.result.p_0;
                if (result0$3 === true) {
                  result3$ = tmp5.result.p_3;
                  if (result3$ === true) {
                    result0$2 = tmp9.result.p_0;
                    if (result0$2 === true) {
                      break split_1$
                    }
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  } else {
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result1$3 = tmp1.result.p_1;
                  if (result1$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$2 = tmp9.result.p_1;
                      if (result1$2 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              } else {
                result0$3 = tmp1.result.p_0;
                if (result0$3 === true) {
                  result3$ = tmp5.result.p_3;
                  if (result3$ === true) {
                    result0$2 = tmp9.result.p_0;
                    if (result0$2 === true) {
                      break split_1$
                    }
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  } else {
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result1$3 = tmp1.result.p_1;
                  if (result1$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$2 = tmp9.result.p_1;
                      if (result1$2 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              }
            } else {
              result0$3 = tmp1.result.p_0;
              if (result0$3 === true) {
                result3$ = tmp5.result.p_3;
                if (result3$ === true) {
                  result0$2 = tmp9.result.p_0;
                  if (result0$2 === true) {
                    break split_1$
                  }
                  result1$3 = tmp1.result.p_1;
                  if (result1$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$2 = tmp9.result.p_1;
                      if (result1$2 === true) {
                        break split_1$
                      }
                    }
                  }
                } else {
                  result1$3 = tmp1.result.p_1;
                  if (result1$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$2 = tmp9.result.p_1;
                      if (result1$2 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              } else {
                result1$3 = tmp1.result.p_1;
                if (result1$3 === true) {
                  result3$1 = tmp5.result.p_3;
                  if (result3$1 === true) {
                    result1$2 = tmp9.result.p_1;
                    if (result1$2 === true) {
                      break split_1$
                    }
                  }
                }
              }
            }
          }
          tmp12 = false;
          break split_root$;
        }
        tmp12 = true;
      }
      inlinedVal = tmp12;
    } else {
      inlinedVal = false;
    }
    if (inlinedVal === true) {
      return t
    }
    return runtime.Unit;
  } 
  static isEvenTree_optimized_matchOnly(t) {
    let matcher__EvenTree_OddTree$, matcher__A_B$, lambda, lambda1, inlinedVal, left, value, right, result1$, result2$, result0$, result0$1, result2$1, result1$1, result0$2, result3$, result0$3, result1$2, result3$1, result1$3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
    lambda = (undefined, function (input) {
      let left1, value1, right1, left2, value2, right2, p_0$, result1$4, result2$2, result0$4, result0$5, result2$3, result1$5, result0$6, result3$2, result0$7, result1$6, result3$3, result1$7, result0$8, result2$4, result0$9, result1$8, result2$5, result1$9, result1$10, result3$4, result0$10, result0$11, result3$5, result1$11, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26;
      if (input instanceof EvenOddTree1.B.class) {
        return globalThis.Object.freeze({
          p_0: true,
          p_1: false
        })
      } else if (input instanceof EvenOddTree1.Node.class) {
        if (input instanceof Object) {
          if ("left" in input) {
            left2 = input.left;
            tmp13 = runtime.safeCall(matcher__EvenTree_OddTree$(left2));
            tmp14 = globalThis.Object.freeze({
              input: left2,
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
        left1 = tmp14;
        if (input instanceof Object) {
          if ("value" in input) {
            value2 = input.value;
            tmp17 = runtime.safeCall(matcher__A_B$(value2));
            tmp18 = globalThis.Object.freeze({
              input: value2,
              result: tmp17
            });
          } else {
            tmp19 = globalThis.Object.freeze({
              p_2: false,
              p_3: false
            });
            tmp18 = globalThis.Object.freeze({
              input: null,
              result: tmp19
            });
          }
        } else {
          tmp20 = globalThis.Object.freeze({
            p_2: false,
            p_3: false
          });
          tmp18 = globalThis.Object.freeze({
            input: null,
            result: tmp20
          });
        }
        value1 = tmp18;
        if (input instanceof Object) {
          if ("right" in input) {
            right2 = input.right;
            tmp21 = runtime.safeCall(matcher__EvenTree_OddTree$(right2));
            tmp22 = globalThis.Object.freeze({
              input: right2,
              result: tmp21
            });
          } else {
            tmp23 = globalThis.Object.freeze({
              p_1: false,
              p_0: false
            });
            tmp22 = globalThis.Object.freeze({
              input: null,
              result: tmp23
            });
          }
        } else {
          tmp24 = globalThis.Object.freeze({
            p_1: false,
            p_0: false
          });
          tmp22 = globalThis.Object.freeze({
            input: null,
            result: tmp24
          });
        }
        right1 = tmp22;
        split_root$: {
          split_1$: {
            result0$4 = tmp14.result.p_0;
            if (result0$4 === true) {
              result2$2 = tmp18.result.p_2;
              if (result2$2 === true) {
                result1$4 = tmp22.result.p_1;
                if (result1$4 === true) {
                  break split_1$
                }
                result1$5 = tmp14.result.p_1;
                if (result1$5 === true) {
                  result2$3 = tmp18.result.p_2;
                  if (result2$3 === true) {
                    result0$5 = tmp22.result.p_0;
                    if (result0$5 === true) {
                      break split_1$
                    }
                    result0$7 = tmp14.result.p_0;
                    if (result0$7 === true) {
                      result3$2 = tmp18.result.p_3;
                      if (result3$2 === true) {
                        result0$6 = tmp22.result.p_0;
                        if (result0$6 === true) {
                          break split_1$
                        }
                        result1$7 = tmp14.result.p_1;
                        if (result1$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result1$6 = tmp22.result.p_1;
                            if (result1$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      } else {
                        result1$7 = tmp14.result.p_1;
                        if (result1$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result1$6 = tmp22.result.p_1;
                            if (result1$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      }
                    } else {
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result0$7 = tmp14.result.p_0;
                    if (result0$7 === true) {
                      result3$2 = tmp18.result.p_3;
                      if (result3$2 === true) {
                        result0$6 = tmp22.result.p_0;
                        if (result0$6 === true) {
                          break split_1$
                        }
                        result1$7 = tmp14.result.p_1;
                        if (result1$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result1$6 = tmp22.result.p_1;
                            if (result1$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      } else {
                        result1$7 = tmp14.result.p_1;
                        if (result1$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result1$6 = tmp22.result.p_1;
                            if (result1$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      }
                    } else {
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  }
                } else {
                  result0$7 = tmp14.result.p_0;
                  if (result0$7 === true) {
                    result3$2 = tmp18.result.p_3;
                    if (result3$2 === true) {
                      result0$6 = tmp22.result.p_0;
                      if (result0$6 === true) {
                        break split_1$
                      }
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result1$7 = tmp14.result.p_1;
                    if (result1$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result1$6 = tmp22.result.p_1;
                        if (result1$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                }
              } else {
                result1$5 = tmp14.result.p_1;
                if (result1$5 === true) {
                  result2$3 = tmp18.result.p_2;
                  if (result2$3 === true) {
                    result0$5 = tmp22.result.p_0;
                    if (result0$5 === true) {
                      break split_1$
                    }
                    result0$7 = tmp14.result.p_0;
                    if (result0$7 === true) {
                      result3$2 = tmp18.result.p_3;
                      if (result3$2 === true) {
                        result0$6 = tmp22.result.p_0;
                        if (result0$6 === true) {
                          break split_1$
                        }
                        result1$7 = tmp14.result.p_1;
                        if (result1$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result1$6 = tmp22.result.p_1;
                            if (result1$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      } else {
                        result1$7 = tmp14.result.p_1;
                        if (result1$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result1$6 = tmp22.result.p_1;
                            if (result1$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      }
                    } else {
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result0$7 = tmp14.result.p_0;
                    if (result0$7 === true) {
                      result3$2 = tmp18.result.p_3;
                      if (result3$2 === true) {
                        result0$6 = tmp22.result.p_0;
                        if (result0$6 === true) {
                          break split_1$
                        }
                        result1$7 = tmp14.result.p_1;
                        if (result1$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result1$6 = tmp22.result.p_1;
                            if (result1$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      } else {
                        result1$7 = tmp14.result.p_1;
                        if (result1$7 === true) {
                          result3$3 = tmp18.result.p_3;
                          if (result3$3 === true) {
                            result1$6 = tmp22.result.p_1;
                            if (result1$6 === true) {
                              break split_1$
                            }
                          }
                        }
                      }
                    } else {
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  }
                } else {
                  result0$7 = tmp14.result.p_0;
                  if (result0$7 === true) {
                    result3$2 = tmp18.result.p_3;
                    if (result3$2 === true) {
                      result0$6 = tmp22.result.p_0;
                      if (result0$6 === true) {
                        break split_1$
                      }
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result1$7 = tmp14.result.p_1;
                    if (result1$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result1$6 = tmp22.result.p_1;
                        if (result1$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                }
              }
            } else {
              result1$5 = tmp14.result.p_1;
              if (result1$5 === true) {
                result2$3 = tmp18.result.p_2;
                if (result2$3 === true) {
                  result0$5 = tmp22.result.p_0;
                  if (result0$5 === true) {
                    break split_1$
                  }
                  result0$7 = tmp14.result.p_0;
                  if (result0$7 === true) {
                    result3$2 = tmp18.result.p_3;
                    if (result3$2 === true) {
                      result0$6 = tmp22.result.p_0;
                      if (result0$6 === true) {
                        break split_1$
                      }
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result1$7 = tmp14.result.p_1;
                    if (result1$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result1$6 = tmp22.result.p_1;
                        if (result1$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result0$7 = tmp14.result.p_0;
                  if (result0$7 === true) {
                    result3$2 = tmp18.result.p_3;
                    if (result3$2 === true) {
                      result0$6 = tmp22.result.p_0;
                      if (result0$6 === true) {
                        break split_1$
                      }
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result1$7 = tmp14.result.p_1;
                      if (result1$7 === true) {
                        result3$3 = tmp18.result.p_3;
                        if (result3$3 === true) {
                          result1$6 = tmp22.result.p_1;
                          if (result1$6 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result1$7 = tmp14.result.p_1;
                    if (result1$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result1$6 = tmp22.result.p_1;
                        if (result1$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                }
              } else {
                result0$7 = tmp14.result.p_0;
                if (result0$7 === true) {
                  result3$2 = tmp18.result.p_3;
                  if (result3$2 === true) {
                    result0$6 = tmp22.result.p_0;
                    if (result0$6 === true) {
                      break split_1$
                    }
                    result1$7 = tmp14.result.p_1;
                    if (result1$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result1$6 = tmp22.result.p_1;
                        if (result1$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  } else {
                    result1$7 = tmp14.result.p_1;
                    if (result1$7 === true) {
                      result3$3 = tmp18.result.p_3;
                      if (result3$3 === true) {
                        result1$6 = tmp22.result.p_1;
                        if (result1$6 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result1$7 = tmp14.result.p_1;
                  if (result1$7 === true) {
                    result3$3 = tmp18.result.p_3;
                    if (result3$3 === true) {
                      result1$6 = tmp22.result.p_1;
                      if (result1$6 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              }
            }
            tmp25 = false;
            break split_root$;
          }
          tmp25 = true;
        }
        p_0$ = tmp25;
        split_root$1: {
          split_1$1: {
            result0$9 = left1.result.p_0;
            if (result0$9 === true) {
              result2$4 = value1.result.p_2;
              if (result2$4 === true) {
                result0$8 = right1.result.p_0;
                if (result0$8 === true) {
                  break split_1$1
                }
                result1$9 = left1.result.p_1;
                if (result1$9 === true) {
                  result2$5 = value1.result.p_2;
                  if (result2$5 === true) {
                    result1$8 = right1.result.p_1;
                    if (result1$8 === true) {
                      break split_1$1
                    }
                    result0$10 = left1.result.p_0;
                    if (result0$10 === true) {
                      result3$4 = value1.result.p_3;
                      if (result3$4 === true) {
                        result1$10 = right1.result.p_1;
                        if (result1$10 === true) {
                          break split_1$1
                        }
                        result1$11 = left1.result.p_1;
                        if (result1$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result0$11 = right1.result.p_0;
                            if (result0$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      } else {
                        result1$11 = left1.result.p_1;
                        if (result1$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result0$11 = right1.result.p_0;
                            if (result0$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      }
                    } else {
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result0$10 = left1.result.p_0;
                    if (result0$10 === true) {
                      result3$4 = value1.result.p_3;
                      if (result3$4 === true) {
                        result1$10 = right1.result.p_1;
                        if (result1$10 === true) {
                          break split_1$1
                        }
                        result1$11 = left1.result.p_1;
                        if (result1$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result0$11 = right1.result.p_0;
                            if (result0$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      } else {
                        result1$11 = left1.result.p_1;
                        if (result1$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result0$11 = right1.result.p_0;
                            if (result0$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      }
                    } else {
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  }
                } else {
                  result0$10 = left1.result.p_0;
                  if (result0$10 === true) {
                    result3$4 = value1.result.p_3;
                    if (result3$4 === true) {
                      result1$10 = right1.result.p_1;
                      if (result1$10 === true) {
                        break split_1$1
                      }
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    } else {
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result1$11 = left1.result.p_1;
                    if (result1$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result0$11 = right1.result.p_0;
                        if (result0$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  }
                }
              } else {
                result1$9 = left1.result.p_1;
                if (result1$9 === true) {
                  result2$5 = value1.result.p_2;
                  if (result2$5 === true) {
                    result1$8 = right1.result.p_1;
                    if (result1$8 === true) {
                      break split_1$1
                    }
                    result0$10 = left1.result.p_0;
                    if (result0$10 === true) {
                      result3$4 = value1.result.p_3;
                      if (result3$4 === true) {
                        result1$10 = right1.result.p_1;
                        if (result1$10 === true) {
                          break split_1$1
                        }
                        result1$11 = left1.result.p_1;
                        if (result1$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result0$11 = right1.result.p_0;
                            if (result0$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      } else {
                        result1$11 = left1.result.p_1;
                        if (result1$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result0$11 = right1.result.p_0;
                            if (result0$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      }
                    } else {
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result0$10 = left1.result.p_0;
                    if (result0$10 === true) {
                      result3$4 = value1.result.p_3;
                      if (result3$4 === true) {
                        result1$10 = right1.result.p_1;
                        if (result1$10 === true) {
                          break split_1$1
                        }
                        result1$11 = left1.result.p_1;
                        if (result1$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result0$11 = right1.result.p_0;
                            if (result0$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      } else {
                        result1$11 = left1.result.p_1;
                        if (result1$11 === true) {
                          result3$5 = value1.result.p_3;
                          if (result3$5 === true) {
                            result0$11 = right1.result.p_0;
                            if (result0$11 === true) {
                              break split_1$1
                            }
                          }
                        }
                      }
                    } else {
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  }
                } else {
                  result0$10 = left1.result.p_0;
                  if (result0$10 === true) {
                    result3$4 = value1.result.p_3;
                    if (result3$4 === true) {
                      result1$10 = right1.result.p_1;
                      if (result1$10 === true) {
                        break split_1$1
                      }
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    } else {
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result1$11 = left1.result.p_1;
                    if (result1$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result0$11 = right1.result.p_0;
                        if (result0$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  }
                }
              }
            } else {
              result1$9 = left1.result.p_1;
              if (result1$9 === true) {
                result2$5 = value1.result.p_2;
                if (result2$5 === true) {
                  result1$8 = right1.result.p_1;
                  if (result1$8 === true) {
                    break split_1$1
                  }
                  result0$10 = left1.result.p_0;
                  if (result0$10 === true) {
                    result3$4 = value1.result.p_3;
                    if (result3$4 === true) {
                      result1$10 = right1.result.p_1;
                      if (result1$10 === true) {
                        break split_1$1
                      }
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    } else {
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result1$11 = left1.result.p_1;
                    if (result1$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result0$11 = right1.result.p_0;
                        if (result0$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  }
                } else {
                  result0$10 = left1.result.p_0;
                  if (result0$10 === true) {
                    result3$4 = value1.result.p_3;
                    if (result3$4 === true) {
                      result1$10 = right1.result.p_1;
                      if (result1$10 === true) {
                        break split_1$1
                      }
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    } else {
                      result1$11 = left1.result.p_1;
                      if (result1$11 === true) {
                        result3$5 = value1.result.p_3;
                        if (result3$5 === true) {
                          result0$11 = right1.result.p_0;
                          if (result0$11 === true) {
                            break split_1$1
                          }
                        }
                      }
                    }
                  } else {
                    result1$11 = left1.result.p_1;
                    if (result1$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result0$11 = right1.result.p_0;
                        if (result0$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  }
                }
              } else {
                result0$10 = left1.result.p_0;
                if (result0$10 === true) {
                  result3$4 = value1.result.p_3;
                  if (result3$4 === true) {
                    result1$10 = right1.result.p_1;
                    if (result1$10 === true) {
                      break split_1$1
                    }
                    result1$11 = left1.result.p_1;
                    if (result1$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result0$11 = right1.result.p_0;
                        if (result0$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  } else {
                    result1$11 = left1.result.p_1;
                    if (result1$11 === true) {
                      result3$5 = value1.result.p_3;
                      if (result3$5 === true) {
                        result0$11 = right1.result.p_0;
                        if (result0$11 === true) {
                          break split_1$1
                        }
                      }
                    }
                  }
                } else {
                  result1$11 = left1.result.p_1;
                  if (result1$11 === true) {
                    result3$5 = value1.result.p_3;
                    if (result3$5 === true) {
                      result0$11 = right1.result.p_0;
                      if (result0$11 === true) {
                        break split_1$1
                      }
                    }
                  }
                }
              }
            }
            tmp26 = false;
            break split_root$1;
          }
          tmp26 = true;
        }
        return globalThis.Object.freeze({
          p_0: p_0$,
          p_1: tmp26
        })
      } else if (input instanceof EvenOddTree1.A.class) {
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
    matcher__EvenTree_OddTree$ = lambda;
    lambda1 = (undefined, function (input) {
      if (input instanceof EvenOddTree1.A.class) {
        return globalThis.Object.freeze({
          p_2: true,
          p_3: false
        })
      } else if (input instanceof EvenOddTree1.B.class) {
        return globalThis.Object.freeze({
          p_2: false,
          p_3: true
        })
      }
      return globalThis.Object.freeze({
        p_2: false,
        p_3: false
      });
    });
    matcher__A_B$ = lambda1;
    if (t instanceof EvenOddTree1.B.class) {
      inlinedVal = true;
    } else if (t instanceof EvenOddTree1.Node.class) {
      if (t instanceof Object) {
        if ("left" in t) {
          left = t.left;
          tmp = runtime.safeCall(matcher__EvenTree_OddTree$(left));
          tmp1 = globalThis.Object.freeze({
            input: left,
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
      if (t instanceof Object) {
        if ("value" in t) {
          value = t.value;
          tmp4 = runtime.safeCall(matcher__A_B$(value));
          tmp5 = globalThis.Object.freeze({
            input: value,
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
      if (t instanceof Object) {
        if ("right" in t) {
          right = t.right;
          tmp8 = runtime.safeCall(matcher__EvenTree_OddTree$(right));
          tmp9 = globalThis.Object.freeze({
            input: right,
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
      split_root$: {
        split_1$: {
          result0$ = tmp1.result.p_0;
          if (result0$ === true) {
            result2$ = tmp5.result.p_2;
            if (result2$ === true) {
              result1$ = tmp9.result.p_1;
              if (result1$ === true) {
                break split_1$
              }
              result1$1 = tmp1.result.p_1;
              if (result1$1 === true) {
                result2$1 = tmp5.result.p_2;
                if (result2$1 === true) {
                  result0$1 = tmp9.result.p_0;
                  if (result0$1 === true) {
                    break split_1$
                  }
                  result0$3 = tmp1.result.p_0;
                  if (result0$3 === true) {
                    result3$ = tmp5.result.p_3;
                    if (result3$ === true) {
                      result0$2 = tmp9.result.p_0;
                      if (result0$2 === true) {
                        break split_1$
                      }
                      result1$3 = tmp1.result.p_1;
                      if (result1$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$2 = tmp9.result.p_1;
                          if (result1$2 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result1$3 = tmp1.result.p_1;
                      if (result1$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$2 = tmp9.result.p_1;
                          if (result1$2 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result0$3 = tmp1.result.p_0;
                  if (result0$3 === true) {
                    result3$ = tmp5.result.p_3;
                    if (result3$ === true) {
                      result0$2 = tmp9.result.p_0;
                      if (result0$2 === true) {
                        break split_1$
                      }
                      result1$3 = tmp1.result.p_1;
                      if (result1$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$2 = tmp9.result.p_1;
                          if (result1$2 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result1$3 = tmp1.result.p_1;
                      if (result1$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$2 = tmp9.result.p_1;
                          if (result1$2 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                }
              } else {
                result0$3 = tmp1.result.p_0;
                if (result0$3 === true) {
                  result3$ = tmp5.result.p_3;
                  if (result3$ === true) {
                    result0$2 = tmp9.result.p_0;
                    if (result0$2 === true) {
                      break split_1$
                    }
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  } else {
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result1$3 = tmp1.result.p_1;
                  if (result1$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$2 = tmp9.result.p_1;
                      if (result1$2 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              }
            } else {
              result1$1 = tmp1.result.p_1;
              if (result1$1 === true) {
                result2$1 = tmp5.result.p_2;
                if (result2$1 === true) {
                  result0$1 = tmp9.result.p_0;
                  if (result0$1 === true) {
                    break split_1$
                  }
                  result0$3 = tmp1.result.p_0;
                  if (result0$3 === true) {
                    result3$ = tmp5.result.p_3;
                    if (result3$ === true) {
                      result0$2 = tmp9.result.p_0;
                      if (result0$2 === true) {
                        break split_1$
                      }
                      result1$3 = tmp1.result.p_1;
                      if (result1$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$2 = tmp9.result.p_1;
                          if (result1$2 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result1$3 = tmp1.result.p_1;
                      if (result1$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$2 = tmp9.result.p_1;
                          if (result1$2 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result0$3 = tmp1.result.p_0;
                  if (result0$3 === true) {
                    result3$ = tmp5.result.p_3;
                    if (result3$ === true) {
                      result0$2 = tmp9.result.p_0;
                      if (result0$2 === true) {
                        break split_1$
                      }
                      result1$3 = tmp1.result.p_1;
                      if (result1$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$2 = tmp9.result.p_1;
                          if (result1$2 === true) {
                            break split_1$
                          }
                        }
                      }
                    } else {
                      result1$3 = tmp1.result.p_1;
                      if (result1$3 === true) {
                        result3$1 = tmp5.result.p_3;
                        if (result3$1 === true) {
                          result1$2 = tmp9.result.p_1;
                          if (result1$2 === true) {
                            break split_1$
                          }
                        }
                      }
                    }
                  } else {
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                }
              } else {
                result0$3 = tmp1.result.p_0;
                if (result0$3 === true) {
                  result3$ = tmp5.result.p_3;
                  if (result3$ === true) {
                    result0$2 = tmp9.result.p_0;
                    if (result0$2 === true) {
                      break split_1$
                    }
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  } else {
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result1$3 = tmp1.result.p_1;
                  if (result1$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$2 = tmp9.result.p_1;
                      if (result1$2 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              }
            }
          } else {
            result1$1 = tmp1.result.p_1;
            if (result1$1 === true) {
              result2$1 = tmp5.result.p_2;
              if (result2$1 === true) {
                result0$1 = tmp9.result.p_0;
                if (result0$1 === true) {
                  break split_1$
                }
                result0$3 = tmp1.result.p_0;
                if (result0$3 === true) {
                  result3$ = tmp5.result.p_3;
                  if (result3$ === true) {
                    result0$2 = tmp9.result.p_0;
                    if (result0$2 === true) {
                      break split_1$
                    }
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  } else {
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result1$3 = tmp1.result.p_1;
                  if (result1$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$2 = tmp9.result.p_1;
                      if (result1$2 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              } else {
                result0$3 = tmp1.result.p_0;
                if (result0$3 === true) {
                  result3$ = tmp5.result.p_3;
                  if (result3$ === true) {
                    result0$2 = tmp9.result.p_0;
                    if (result0$2 === true) {
                      break split_1$
                    }
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  } else {
                    result1$3 = tmp1.result.p_1;
                    if (result1$3 === true) {
                      result3$1 = tmp5.result.p_3;
                      if (result3$1 === true) {
                        result1$2 = tmp9.result.p_1;
                        if (result1$2 === true) {
                          break split_1$
                        }
                      }
                    }
                  }
                } else {
                  result1$3 = tmp1.result.p_1;
                  if (result1$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$2 = tmp9.result.p_1;
                      if (result1$2 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              }
            } else {
              result0$3 = tmp1.result.p_0;
              if (result0$3 === true) {
                result3$ = tmp5.result.p_3;
                if (result3$ === true) {
                  result0$2 = tmp9.result.p_0;
                  if (result0$2 === true) {
                    break split_1$
                  }
                  result1$3 = tmp1.result.p_1;
                  if (result1$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$2 = tmp9.result.p_1;
                      if (result1$2 === true) {
                        break split_1$
                      }
                    }
                  }
                } else {
                  result1$3 = tmp1.result.p_1;
                  if (result1$3 === true) {
                    result3$1 = tmp5.result.p_3;
                    if (result3$1 === true) {
                      result1$2 = tmp9.result.p_1;
                      if (result1$2 === true) {
                        break split_1$
                      }
                    }
                  }
                }
              } else {
                result1$3 = tmp1.result.p_1;
                if (result1$3 === true) {
                  result3$1 = tmp5.result.p_3;
                  if (result3$1 === true) {
                    result1$2 = tmp9.result.p_1;
                    if (result1$2 === true) {
                      break split_1$
                    }
                  }
                }
              }
            }
          }
          tmp12 = false;
          break split_root$;
        }
        tmp12 = true;
      }
      inlinedVal = tmp12;
    } else {
      inlinedVal = false;
    }
    if (inlinedVal === true) {
      return true
    }
    return false;
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "EvenOddTree"]; 
});
let EvenOddTree = EvenOddTree1; export default EvenOddTree;
