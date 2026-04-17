const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./Runtime.mjs";
let Char1;
(class Char {
  static {
    Char1 = this
  }
  static {
    (class AnyChar {
      static {
        new this
      }
      constructor() {
        Char.AnyChar = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        let scrut, guardResult, tmp;
        if (typeof input === 'string') {
          scrut = input.length;
          if (scrut === 1) {
            tmp = true;
          } else {
            tmp = false;
          }
          guardResult = tmp;
          if (guardResult === true) {
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null))
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      } 
      unapplyStringPrefix(input) {
        let scrut, nonEmpty, stringHead, stringTail, guardResult, tmp, tmp1;
        nonEmpty = 0 < input.length;
        if (nonEmpty === true) {
          stringHead = runtime.Str.get(input, 0);
          stringTail = runtime.Str.leave(input, 1);
          scrut = stringHead.length;
          if (scrut === 1) {
            tmp = true;
          } else {
            tmp = false;
          }
          guardResult = tmp;
          if (guardResult === true) {
            tmp1 = globalThis.Object.freeze([
              stringHead,
              stringTail
            ]);
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp1, null))
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "AnyChar"]; 
    });
    (class Lowercase {
      static {
        new this
      }
      constructor() {
        Char.Lowercase = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        let isGreaterThanLower, isLessThanUpper;
        isGreaterThanLower = "a" <= input;
        if (isGreaterThanLower === true) {
          isLessThanUpper = input <= "z";
          if (isLessThanUpper === true) {
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null))
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      } 
      unapplyStringPrefix(input) {
        let stringHead, stringTail, nonEmpty, isGreaterThanLower, isLessThanUpper, tmp;
        nonEmpty = 0 < input.length;
        if (nonEmpty === true) {
          stringHead = runtime.Str.get(input, 0);
          stringTail = runtime.Str.leave(input, 1);
          isGreaterThanLower = "a" <= stringHead;
          if (isGreaterThanLower === true) {
            isLessThanUpper = stringHead <= "z";
            if (isLessThanUpper === true) {
              tmp = globalThis.Object.freeze([
                stringHead,
                stringTail
              ]);
              return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp, null))
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "Lowercase"]; 
    });
    (class Uppercase {
      static {
        new this
      }
      constructor() {
        Char.Uppercase = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        let isGreaterThanLower, isLessThanUpper;
        isGreaterThanLower = "A" <= input;
        if (isGreaterThanLower === true) {
          isLessThanUpper = input <= "Z";
          if (isLessThanUpper === true) {
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null))
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      } 
      unapplyStringPrefix(input) {
        let stringHead, stringTail, nonEmpty, isGreaterThanLower, isLessThanUpper, tmp;
        nonEmpty = 0 < input.length;
        if (nonEmpty === true) {
          stringHead = runtime.Str.get(input, 0);
          stringTail = runtime.Str.leave(input, 1);
          isGreaterThanLower = "A" <= stringHead;
          if (isGreaterThanLower === true) {
            isLessThanUpper = stringHead <= "Z";
            if (isLessThanUpper === true) {
              tmp = globalThis.Object.freeze([
                stringHead,
                stringTail
              ]);
              return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp, null))
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "Uppercase"]; 
    });
    (class Letter {
      static {
        new this
      }
      constructor() {
        Char.Letter = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        let unapplyResult, output, unapplyResult1, output1;
        unapplyResult1 = runtime.safeCall(Char.Lowercase.unapply(input));
        if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
          output1 = unapplyResult1.output;
          unapplyResult1.bindings;
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(output1, null))
        }
        unapplyResult = runtime.safeCall(Char.Uppercase.unapply(input));
        if (unapplyResult instanceof runtime.MatchSuccess.class) {
          output = unapplyResult.output;
          unapplyResult.bindings;
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(output, null))
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      } 
      unapplyStringPrefix(input) {
        let output, remaining, unapplyResult, outputPair, output1, remaining1, unapplyResult1, outputPair1, tmp, tmp1;
        unapplyResult1 = runtime.safeCall(Char.Lowercase.unapplyStringPrefix(input));
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
        unapplyResult = runtime.safeCall(Char.Uppercase.unapplyStringPrefix(input));
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
      static [definitionMetadata] = ["pattern", "Letter"]; 
    });
    (class Digit {
      static {
        new this
      }
      constructor() {
        Char.Digit = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        let isGreaterThanLower, isLessThanUpper;
        isGreaterThanLower = "0" <= input;
        if (isGreaterThanLower === true) {
          isLessThanUpper = input <= "9";
          if (isLessThanUpper === true) {
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null))
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      } 
      unapplyStringPrefix(input) {
        let stringHead, stringTail, nonEmpty, isGreaterThanLower, isLessThanUpper, tmp;
        nonEmpty = 0 < input.length;
        if (nonEmpty === true) {
          stringHead = runtime.Str.get(input, 0);
          stringTail = runtime.Str.leave(input, 1);
          isGreaterThanLower = "0" <= stringHead;
          if (isGreaterThanLower === true) {
            isLessThanUpper = stringHead <= "9";
            if (isLessThanUpper === true) {
              tmp = globalThis.Object.freeze([
                stringHead,
                stringTail
              ]);
              return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp, null))
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "Digit"]; 
    });
    (class HexDigit {
      static {
        new this
      }
      constructor() {
        Char.HexDigit = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        let isGreaterThanLower, isLessThanUpper, isGreaterThanLower1, isLessThanUpper1, unapplyResult, output;
        split_1$: {
          unapplyResult = runtime.safeCall(Char.Digit.unapply(input));
          if (unapplyResult instanceof runtime.MatchSuccess.class) {
            output = unapplyResult.output;
            unapplyResult.bindings;
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(output, null))
          }
          isGreaterThanLower1 = "a" <= input;
          if (isGreaterThanLower1 === true) {
            isLessThanUpper1 = input <= "f";
            if (isLessThanUpper1 === true) {
              break split_1$
            }
            isGreaterThanLower = "A" <= input;
            if (isGreaterThanLower === true) {
              isLessThanUpper = input <= "F";
              if (isLessThanUpper === true) {
                break split_1$
              }
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
          }
          isGreaterThanLower = "A" <= input;
          if (isGreaterThanLower === true) {
            isLessThanUpper = input <= "F";
            if (isLessThanUpper === true) {
              break split_1$
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        }
        return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null))
      } 
      unapplyStringPrefix(input) {
        let stringHead, stringTail, nonEmpty, isGreaterThanLower, isLessThanUpper, stringHead1, stringTail1, nonEmpty1, isGreaterThanLower1, isLessThanUpper1, output, remaining, unapplyResult, outputPair, tmp, tmp1, tmp2;
        split_1$: {
          unapplyResult = runtime.safeCall(Char.Digit.unapplyStringPrefix(input));
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
          nonEmpty1 = 0 < input.length;
          if (nonEmpty1 === true) {
            stringHead1 = runtime.Str.get(input, 0);
            stringTail1 = runtime.Str.leave(input, 1);
            isGreaterThanLower1 = "a" <= stringHead1;
            if (isGreaterThanLower1 === true) {
              isLessThanUpper1 = stringHead1 <= "f";
              if (isLessThanUpper1 === true) {
                tmp1 = globalThis.Object.freeze([
                  stringHead1,
                  stringTail1
                ]);
                return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp1, null))
              }
              nonEmpty = 0 < input.length;
              if (nonEmpty === true) {
                stringHead = runtime.Str.get(input, 0);
                stringTail = runtime.Str.leave(input, 1);
                isGreaterThanLower = "A" <= stringHead;
                if (isGreaterThanLower === true) {
                  isLessThanUpper = stringHead <= "F";
                  if (isLessThanUpper === true) {
                    break split_1$
                  }
                }
              }
              return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
            }
            nonEmpty = 0 < input.length;
            if (nonEmpty === true) {
              stringHead = runtime.Str.get(input, 0);
              stringTail = runtime.Str.leave(input, 1);
              isGreaterThanLower = "A" <= stringHead;
              if (isGreaterThanLower === true) {
                isLessThanUpper = stringHead <= "F";
                if (isLessThanUpper === true) {
                  break split_1$
                }
              }
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
          }
          nonEmpty = 0 < input.length;
          if (nonEmpty === true) {
            stringHead = runtime.Str.get(input, 0);
            stringTail = runtime.Str.leave(input, 1);
            isGreaterThanLower = "A" <= stringHead;
            if (isGreaterThanLower === true) {
              isLessThanUpper = stringHead <= "F";
              if (isLessThanUpper === true) {
                break split_1$
              }
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        }
        tmp2 = globalThis.Object.freeze([
          stringHead,
          stringTail
        ]);
        return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp2, null))
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "HexDigit"]; 
    });
    (class OctDigit {
      static {
        new this
      }
      constructor() {
        Char.OctDigit = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        let isGreaterThanLower, isLessThanUpper;
        isGreaterThanLower = "0" <= input;
        if (isGreaterThanLower === true) {
          isLessThanUpper = input <= "7";
          if (isLessThanUpper === true) {
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null))
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      } 
      unapplyStringPrefix(input) {
        let stringHead, stringTail, nonEmpty, isGreaterThanLower, isLessThanUpper, tmp;
        nonEmpty = 0 < input.length;
        if (nonEmpty === true) {
          stringHead = runtime.Str.get(input, 0);
          stringTail = runtime.Str.leave(input, 1);
          isGreaterThanLower = "0" <= stringHead;
          if (isGreaterThanLower === true) {
            isLessThanUpper = stringHead <= "7";
            if (isLessThanUpper === true) {
              tmp = globalThis.Object.freeze([
                stringHead,
                stringTail
              ]);
              return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp, null))
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "OctDigit"]; 
    });
    (class BinDigit {
      static {
        new this
      }
      constructor() {
        Char.BinDigit = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        switch (input) {
          case "0":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "1":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
      } 
      unapplyStringPrefix(input) {
        let isLeading, consumed, remains, isLeading1, consumed1, remains1, tmp, tmp1;
        isLeading1 = runtime.Str.startsWith(input, "0");
        if (isLeading1 === true) {
          consumed1 = runtime.Str.take(input, 1);
          remains1 = runtime.Str.leave(input, 1);
          tmp = globalThis.Object.freeze([
            consumed1,
            remains1
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp, null))
        }
        isLeading = runtime.Str.startsWith(input, "1");
        if (isLeading === true) {
          consumed = runtime.Str.take(input, 1);
          remains = runtime.Str.leave(input, 1);
          tmp1 = globalThis.Object.freeze([
            consumed,
            remains
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp1, null))
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "BinDigit"]; 
    });
    (class Whitespace {
      static {
        new this
      }
      constructor() {
        Char.Whitespace = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        switch (input) {
          case " ":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "\t":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "\n":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "\r":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
      } 
      unapplyStringPrefix(input) {
        let isLeading, consumed, remains, isLeading1, consumed1, remains1, isLeading2, consumed2, remains2, isLeading3, consumed3, remains3, tmp, tmp1, tmp2, tmp3;
        isLeading3 = runtime.Str.startsWith(input, " ");
        if (isLeading3 === true) {
          consumed3 = runtime.Str.take(input, 1);
          remains3 = runtime.Str.leave(input, 1);
          tmp = globalThis.Object.freeze([
            consumed3,
            remains3
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp, null))
        }
        isLeading2 = runtime.Str.startsWith(input, "\t");
        if (isLeading2 === true) {
          consumed2 = runtime.Str.take(input, 1);
          remains2 = runtime.Str.leave(input, 1);
          tmp1 = globalThis.Object.freeze([
            consumed2,
            remains2
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp1, null))
        }
        isLeading1 = runtime.Str.startsWith(input, "\n");
        if (isLeading1 === true) {
          consumed1 = runtime.Str.take(input, 1);
          remains1 = runtime.Str.leave(input, 1);
          tmp2 = globalThis.Object.freeze([
            consumed1,
            remains1
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp2, null))
        }
        isLeading = runtime.Str.startsWith(input, "\r");
        if (isLeading === true) {
          consumed = runtime.Str.take(input, 1);
          remains = runtime.Str.leave(input, 1);
          tmp3 = globalThis.Object.freeze([
            consumed,
            remains
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp3, null))
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "Whitespace"]; 
    });
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Char"]; 
});
let Char = Char1; export default Char;
