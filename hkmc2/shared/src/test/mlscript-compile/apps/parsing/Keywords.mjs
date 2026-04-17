const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Option from "./../../Option.mjs";
import Iter from "./../../Iter.mjs";
import Predef from "./../../Predef.mjs";
import MutMap from "./../../MutMap.mjs";
let Keywords1;
(class Keywords {
  static {
    Keywords1 = this
  }
  static #prec;
  static #basePrec;
  static #semiPrec;
  static #commaPrec;
  static #eqPrec;
  static #ascPrec;
  static #thenPrec;
  static #precMap;
  static #bracketPrec;
  static #builtinKeywords;
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58;
    tmp = - 2147483648;
    this.INT_MIN = tmp;
    this.INT_MAX = 2147483647;
    this.Keyword = function Keyword(name, leftPrec, rightPrec) {
      return globalThis.Object.freeze(new Keyword.class(name, leftPrec, rightPrec));
    };
    (class Keyword {
      static {
        Keywords.Keyword.class = this
      }
      constructor(name, leftPrec, rightPrec) {
        this.name = name;
        this.leftPrec = leftPrec;
        this.rightPrec = rightPrec;
      }
      get leftPrecOrMin() {
        let scrut, arg$Some$0$;
        scrut = this.leftPrec;
        if (scrut instanceof Option.Some.class) {
          arg$Some$0$ = scrut.value;
          return arg$Some$0$
        }
        return Keywords.INT_MIN;
      } 
      get rightPrecOrMin() {
        let scrut, arg$Some$0$;
        scrut = this.rightPrec;
        if (scrut instanceof Option.Some.class) {
          arg$Some$0$ = scrut.value;
          return arg$Some$0$
        }
        return Keywords.INT_MIN;
      } 
      get leftPrecOrMax() {
        let scrut, arg$Some$0$;
        scrut = this.leftPrec;
        if (scrut instanceof Option.Some.class) {
          arg$Some$0$ = scrut.value;
          return arg$Some$0$
        }
        return Keywords.INT_MAX;
      } 
      get rightPrecOrMax() {
        let scrut, arg$Some$0$;
        scrut = this.rightPrec;
        if (scrut instanceof Option.Some.class) {
          arg$Some$0$ = scrut.value;
          return arg$Some$0$
        }
        return Keywords.INT_MAX;
      } 
      toString() {
        let scrut, scrut1, lambda, tmp59, arg$Some$0$, tmp60, arg$Some$0$1, tmp61;
        lambda = (undefined, function (arg1, arg2) {
          return arg1 + arg2
        });
        tmp59 = runtime.safeCall(Predef.fold(lambda));
        scrut = this.leftPrec;
        if (scrut instanceof Option.Some.class) {
          arg$Some$0$ = scrut.value;
          tmp60 = runtime.safeCall(arg$Some$0$.toString());
        } else {
          tmp60 = "N/A";
        }
        scrut1 = this.rightPrec;
        if (scrut1 instanceof Option.Some.class) {
          arg$Some$0$1 = scrut1.value;
          tmp61 = runtime.safeCall(arg$Some$0$1.toString());
          return runtime.safeCall(tmp59("Keyword(`", this.name, "`, ", tmp60, ", ", tmp61, ")"))
        }
        tmp61 = "N/A";
        return runtime.safeCall(tmp59("Keyword(`", this.name, "`, ", tmp60, ", ", "N/A", ")"));
      }
      [prettyPrint]() { return this.toString(); }
      static [definitionMetadata] = ["class", "Keyword", ["name", "leftPrec", "rightPrec"]]; 
    });
    this.all = MutMap.empty;
    Keywords.#prec = 0;
    Keywords.#basePrec = Keywords.currPrec;
    tmp1 = Keywords.keyword(";;", Keywords.#basePrec, Keywords.#basePrec);
    this._terminator = tmp1;
    tmp2 = Keywords.keyword("class", Option.None, Keywords.#basePrec);
    this._class = tmp2;
    Keywords.#semiPrec = Keywords.nextPrec;
    Keywords.#commaPrec = Keywords.nextPrec;
    tmp3 = Keywords.keyword(";", Keywords.#semiPrec, Keywords.#basePrec);
    this._semicolon = tmp3;
    tmp4 = Keywords.keyword(",", Keywords.#commaPrec, Keywords.#semiPrec);
    this._comma = tmp4;
    Keywords.#eqPrec = Keywords.nextPrec;
    Keywords.#ascPrec = Keywords.nextPrec;
    tmp5 = Keywords.keyword("=", Keywords.#eqPrec, Keywords.#eqPrec);
    this._equal = tmp5;
    tmp6 = Keywords.keyword("and", Option.None, Keywords.currPrec);
    this._and = tmp6;
    tmp7 = Keywords.keyword("|", Option.None, Option.None);
    this._bar = tmp7;
    tmp8 = Keywords.keyword("->", Keywords.nextPrec, Keywords.#eqPrec);
    this._thinArrow = tmp8;
    tmp9 = Keywords.keyword(":", Keywords.#ascPrec, Keywords.#eqPrec);
    this._colon = tmp9;
    tmp10 = Keywords.keyword("match", Keywords.nextPrec, Keywords.currPrec);
    this._match = tmp10;
    tmp11 = Keywords.keyword("while", Keywords.nextPrec, Keywords.currPrec);
    this._while = tmp11;
    tmp12 = Keywords.keyword("for", Keywords.nextPrec, Keywords.currPrec);
    this._for = tmp12;
    tmp13 = Keywords.keyword("to", Option.None, Option.None);
    this._to = tmp13;
    tmp14 = Keywords.keyword("downto", Option.None, Option.None);
    this._downto = tmp14;
    tmp15 = Keywords.keyword("do", Option.None, Option.None);
    this._do = tmp15;
    tmp16 = Keywords.keyword("done", Option.None, Option.None);
    this._done = tmp16;
    tmp17 = Keywords.keyword("of", Option.None, Option.None);
    this._of = tmp17;
    tmp18 = Keywords.keyword("with", Option.None, Keywords.currPrec);
    this._with = tmp18;
    tmp19 = Keywords.keyword("case", Option.None, Keywords.currPrec);
    this._case = tmp19;
    Keywords.#thenPrec = Keywords.nextPrec;
    tmp20 = Keywords.keyword("if", Keywords.nextPrec, Keywords.#thenPrec);
    this._if = tmp20;
    tmp21 = Keywords.keyword("<-", Keywords.#thenPrec, Keywords.#thenPrec);
    this._leftArrow = tmp21;
    tmp22 = Keywords.keyword("then", Keywords.#thenPrec, Keywords.#thenPrec);
    this._then = tmp22;
    tmp23 = Keywords.keyword("else", Keywords.#thenPrec, Keywords.#thenPrec);
    this._else = tmp23;
    tmp24 = Keywords.keyword("let", Keywords.#eqPrec, Keywords.#semiPrec);
    this._let = tmp24;
    tmp25 = Keywords.keyword("in", Keywords.#thenPrec, Keywords.#thenPrec);
    this._in = tmp25;
    tmp26 = Keywords.keyword("true", Option.None, Option.None);
    this._true = tmp26;
    tmp27 = Keywords.keyword("false", Option.None, Option.None);
    this._false = tmp27;
    tmp28 = Keywords.keyword("as", Keywords.nextPrec, Keywords.currPrec);
    this._as = tmp28;
    tmp29 = Keywords.keyword("fun", Keywords.currPrec, Keywords._thinArrow.leftPrec);
    this._fun = tmp29;
    tmp30 = Keywords.keyword("function", Keywords.currPrec, Keywords.#eqPrec);
    this._function = tmp30;
    tmp31 = Keywords.keyword("type", Keywords.currPrec, Option.None);
    this._type = tmp31;
    tmp32 = Keywords.keyword("exception", Keywords.currPrec, Option.None);
    this._exception = tmp32;
    tmp33 = Keywords.keyword("rec", Keywords.currPrec, Keywords.#eqPrec);
    this._rec = tmp33;
    tmp34 = Keywords.keyword("#", Option.None, Option.None);
    this._hash = tmp34;
    this.maxKeywordPrec = Keywords.#prec;
    Keywords.#precMap = Keywords.makePrecMap(Keywords.maxKeywordPrec, ",", "@", ":", "|", "&", "=", "/ \\", "^", "!", "< >", "+ -", "* %", "~", "", "", ".");
    tmp35 = MutMap.get(".");
    tmp36 = Predef.pipeInto(Keywords.#precMap, tmp35);
    tmp37 = Predef.pipeInto(tmp36, Option.unsafe.get);
    this.periodPrec = tmp37;
    tmp38 = Option.Some(Keywords.periodPrec);
    tmp39 = Option.Some(Keywords.periodPrec);
    tmp40 = Keywords.keyword(".", tmp38, tmp39);
    this._period = tmp40;
    this.maxOperatorPrec = Keywords.periodPrec;
    tmp41 = Keywords.maxOperatorPrec - 1;
    this.appPrec = tmp41;
    tmp42 = Keywords.appPrec - 1;
    this.prefixPrec = tmp42;
    tmp43 = Keywords.charPrecOpt("*");
    tmp44 = Keywords.charPrecOpt("*");
    tmp45 = Keywords.keyword("*", tmp43, tmp44);
    this._asterisk = tmp45;
    tmp46 = Keywords.charPrecOpt("=");
    tmp47 = Keywords.charPrecOpt("=");
    tmp48 = Keywords.keyword("==", tmp46, tmp47);
    this._equalequal = tmp48;
    tmp49 = Keywords.maxOperatorPrec + 1;
    Keywords.#bracketPrec = Option.Some(tmp49);
    tmp50 = Keywords.keyword("(", Keywords.#bracketPrec, Keywords.#basePrec);
    this._leftRound = tmp50;
    tmp51 = Keywords.keyword(")", Keywords.#basePrec, Option.None);
    this._rightRound = tmp51;
    tmp52 = Keywords.keyword("[", Keywords.#bracketPrec, Keywords.#basePrec);
    this._leftSquare = tmp52;
    tmp53 = Keywords.keyword("]", Keywords.#basePrec, Option.None);
    this._rightSquare = tmp53;
    tmp54 = Keywords.keyword("{", Keywords.#bracketPrec, Keywords.#basePrec);
    this._leftCurly = tmp54;
    tmp55 = Keywords.keyword("}", Keywords.#basePrec, Option.None);
    this._rightCurly = tmp55;
    tmp56 = Keywords.keyword("begin", Keywords.#bracketPrec, Keywords.#basePrec);
    this._begin = tmp56;
    tmp57 = Keywords.keyword("end", Keywords.#basePrec, Option.None);
    this._end = tmp57;
    tmp58 = Predef.pipeInto(Keywords.all, MutMap.keysIterator);
    Keywords.#builtinKeywords = globalThis.Object.freeze(new globalThis.Set(tmp58));
    (class Letter {
      static {
        new this
      }
      constructor() {
        Keywords.Letter = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        let isGreaterThanLower, isLessThanUpper, isGreaterThanLower1, isLessThanUpper1;
        split_1$: {
          isGreaterThanLower1 = "a" <= input;
          if (isGreaterThanLower1 === true) {
            isLessThanUpper1 = input <= "z";
            if (isLessThanUpper1 === true) {
              break split_1$
            }
            isGreaterThanLower = "A" <= input;
            if (isGreaterThanLower === true) {
              isLessThanUpper = input <= "Z";
              if (isLessThanUpper === true) {
                break split_1$
              }
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
          }
          isGreaterThanLower = "A" <= input;
          if (isGreaterThanLower === true) {
            isLessThanUpper = input <= "Z";
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
        let stringHead, stringTail, nonEmpty, isGreaterThanLower, isLessThanUpper, stringHead1, stringTail1, nonEmpty1, isGreaterThanLower1, isLessThanUpper1, tmp59, tmp60;
        split_1$: {
          nonEmpty1 = 0 < input.length;
          if (nonEmpty1 === true) {
            stringHead1 = runtime.Str.get(input, 0);
            stringTail1 = runtime.Str.leave(input, 1);
            isGreaterThanLower1 = "a" <= stringHead1;
            if (isGreaterThanLower1 === true) {
              isLessThanUpper1 = stringHead1 <= "z";
              if (isLessThanUpper1 === true) {
                tmp59 = globalThis.Object.freeze([
                  stringHead1,
                  stringTail1
                ]);
                return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp59, null))
              }
              nonEmpty = 0 < input.length;
              if (nonEmpty === true) {
                stringHead = runtime.Str.get(input, 0);
                stringTail = runtime.Str.leave(input, 1);
                isGreaterThanLower = "A" <= stringHead;
                if (isGreaterThanLower === true) {
                  isLessThanUpper = stringHead <= "Z";
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
                isLessThanUpper = stringHead <= "Z";
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
              isLessThanUpper = stringHead <= "Z";
              if (isLessThanUpper === true) {
                break split_1$
              }
            }
            return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
          }
          return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
        }
        tmp60 = globalThis.Object.freeze([
          stringHead,
          stringTail
        ]);
        return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp60, null))
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "Letter"]; 
    });
    (class FloatOperator {
      static {
        new this
      }
      constructor() {
        Keywords.FloatOperator = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        switch (input) {
          case "+.":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "-.":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "*.":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "/.":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
      } 
      unapplyStringPrefix(input) {
        let isLeading, consumed, remains, isLeading1, consumed1, remains1, isLeading2, consumed2, remains2, isLeading3, consumed3, remains3, tmp59, tmp60, tmp61, tmp62;
        isLeading3 = runtime.Str.startsWith(input, "+.");
        if (isLeading3 === true) {
          consumed3 = runtime.Str.take(input, 2);
          remains3 = runtime.Str.leave(input, 2);
          tmp59 = globalThis.Object.freeze([
            consumed3,
            remains3
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp59, null))
        }
        isLeading2 = runtime.Str.startsWith(input, "-.");
        if (isLeading2 === true) {
          consumed2 = runtime.Str.take(input, 2);
          remains2 = runtime.Str.leave(input, 2);
          tmp60 = globalThis.Object.freeze([
            consumed2,
            remains2
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp60, null))
        }
        isLeading1 = runtime.Str.startsWith(input, "*.");
        if (isLeading1 === true) {
          consumed1 = runtime.Str.take(input, 2);
          remains1 = runtime.Str.leave(input, 2);
          tmp61 = globalThis.Object.freeze([
            consumed1,
            remains1
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp61, null))
        }
        isLeading = runtime.Str.startsWith(input, "/.");
        if (isLeading === true) {
          consumed = runtime.Str.take(input, 2);
          remains = runtime.Str.leave(input, 2);
          tmp62 = globalThis.Object.freeze([
            consumed,
            remains
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp62, null))
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "FloatOperator"]; 
    });
    (class RightAssociative {
      static {
        new this
      }
      constructor() {
        Keywords.RightAssociative = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        switch (input) {
          case "@":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "/":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case ",":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case ":":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
      } 
      unapplyStringPrefix(input) {
        let isLeading, consumed, remains, isLeading1, consumed1, remains1, isLeading2, consumed2, remains2, isLeading3, consumed3, remains3, tmp59, tmp60, tmp61, tmp62;
        isLeading3 = runtime.Str.startsWith(input, "@");
        if (isLeading3 === true) {
          consumed3 = runtime.Str.take(input, 1);
          remains3 = runtime.Str.leave(input, 1);
          tmp59 = globalThis.Object.freeze([
            consumed3,
            remains3
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp59, null))
        }
        isLeading2 = runtime.Str.startsWith(input, "/");
        if (isLeading2 === true) {
          consumed2 = runtime.Str.take(input, 1);
          remains2 = runtime.Str.leave(input, 1);
          tmp60 = globalThis.Object.freeze([
            consumed2,
            remains2
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp60, null))
        }
        isLeading1 = runtime.Str.startsWith(input, ",");
        if (isLeading1 === true) {
          consumed1 = runtime.Str.take(input, 1);
          remains1 = runtime.Str.leave(input, 1);
          tmp61 = globalThis.Object.freeze([
            consumed1,
            remains1
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp61, null))
        }
        isLeading = runtime.Str.startsWith(input, ":");
        if (isLeading === true) {
          consumed = runtime.Str.take(input, 1);
          remains = runtime.Str.leave(input, 1);
          tmp62 = globalThis.Object.freeze([
            consumed,
            remains
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp62, null))
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "RightAssociative"]; 
    });
  }
  static makePrecMap(startPrec, ...ops) {
    let m, i;
    m = MutMap.empty;
    i = 0;
    lbl: while (true) {
      let scrut, tmp, tmp1, lambda, tmp2;
      scrut = i < ops.length;
      if (scrut === true) {
        tmp = runtime.safeCall(ops.at(i));
        tmp1 = runtime.safeCall(tmp.split(" "));
        lambda = (undefined, function (op, _, _1) {
          let scrut1, tmp3, tmp4;
          scrut1 = op.length > 0;
          if (scrut1 === true) {
            tmp3 = i + startPrec;
            tmp4 = MutMap.insert(op, tmp3);
            Predef.pipeInto(m, tmp4);
            return runtime.Unit
          }
          return runtime.Unit;
        });
        runtime.safeCall(tmp1.forEach(lambda));
        tmp2 = i + 1;
        i = tmp2;
        continue lbl
      }
      break;
    }
    return m
  } 
  static keyword(name, leftPrec, rightPrec) {
    let result, tmp;
    result = Keywords.Keyword(name, leftPrec, rightPrec);
    tmp = MutMap.insert(name, result);
    Predef.pipeInto(Keywords.all, tmp);
    return result
  } 
  static get currPrec() {
    return Option.Some(Keywords.#prec);
  } 
  static get nextPrec() {
    let tmp;
    tmp = Keywords.#prec + 1;
    Keywords.#prec = tmp;
    return Option.Some(Keywords.#prec);
  } 
  static charPrec(op) {
    let tmp, tmp1;
    tmp = MutMap.get(op);
    tmp1 = Predef.pipeInto(Keywords.#precMap, tmp);
    return Predef.pipeInto(tmp1, Option.unsafe.get)
  } 
  static charPrecOpt(op) {
    let tmp;
    tmp = MutMap.get(op);
    return Predef.pipeInto(Keywords.#precMap, tmp)
  } 
  static get extended() {
    let lambda, tmp, tmp1;
    lambda = (undefined, function (caseScrut) {
      let scrut, element0$;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
        element0$ = runtime.Tuple.get(caseScrut, 0);
        runtime.Tuple.get(caseScrut, 1);
        scrut = runtime.safeCall(Keywords.#builtinKeywords.has(element0$));
        if (scrut === false) {
          return true
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    tmp = Iter.filtering(Keywords.all, lambda);
    tmp1 = Iter.toArray(tmp);
    return MutMap.toMap(tmp1);
  } 
  static hasLetter(s) {
    let lambda;
    lambda = (undefined, function (ch, _, _1) {
      let unapplyResult;
      unapplyResult = runtime.safeCall(Keywords.Letter.unapply(ch));
      if (unapplyResult instanceof runtime.MatchSuccess.class) {
        unapplyResult.output;
        unapplyResult.bindings;
        return true
      }
      return false;
    });
    return Iter.some(s, lambda)
  } 
  static opPrec(opStr) {
    let scrut, lastChar, unapplyResult, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, unapplyResult1, tmp8, tmp9;
    unapplyResult = runtime.safeCall(Keywords.FloatOperator.unapply(opStr));
    if (unapplyResult instanceof runtime.MatchSuccess.class) {
      unapplyResult.output;
      unapplyResult.bindings;
      tmp = runtime.safeCall(opStr.at(0));
      tmp1 = Keywords1.charPrec(tmp);
      tmp2 = runtime.safeCall(opStr.at(0));
      tmp3 = Keywords1.charPrec(tmp2);
      return Predef.tuple(tmp1, tmp3)
    }
    scrut = Keywords.hasLetter(opStr);
    if (scrut === true) {
      return Predef.tuple(Keywords1.maxKeywordPrec, Keywords1.maxKeywordPrec)
    }
    tmp4 = - 1;
    lastChar = runtime.safeCall(opStr.at(tmp4));
    Keywords1.charPrec(lastChar);
    tmp5 = runtime.safeCall(opStr.at(0));
    tmp6 = Keywords1.charPrec(tmp5);
    tmp7 = Keywords1.charPrec(lastChar);
    unapplyResult1 = runtime.safeCall(Keywords.RightAssociative.unapply(lastChar));
    if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
      unapplyResult1.output;
      unapplyResult1.bindings;
      tmp8 = - 1;
    } else {
      tmp8 = 0;
    }
    tmp9 = tmp7 + tmp8;
    return Predef.tuple(tmp6, tmp9);
  } 
  static opPrecOpt(opStr) {
    let scrut, lastChar, scrut1, rightPrec, scrut2, leftPrec, arg$Some$0$, arg$Some$0$1, unapplyResult, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, unapplyResult1, tmp8, tmp9, tmp10;
    if (opStr === "") {
      return Option.None
    }
    unapplyResult = runtime.safeCall(Keywords.FloatOperator.unapply(opStr));
    if (unapplyResult instanceof runtime.MatchSuccess.class) {
      unapplyResult.output;
      unapplyResult.bindings;
      tmp = runtime.safeCall(opStr.at(0));
      tmp1 = Keywords1.charPrec(tmp);
      tmp2 = runtime.safeCall(opStr.at(0));
      tmp3 = Keywords1.charPrec(tmp2);
      tmp4 = Predef.tuple(tmp1, tmp3);
      return Option.Some(tmp4)
    }
    scrut = Keywords.hasLetter(opStr);
    if (scrut === true) {
      tmp5 = Predef.tuple(Keywords1.maxKeywordPrec, Keywords1.maxKeywordPrec);
      return Option.Some(tmp5)
    }
    tmp6 = - 1;
    lastChar = runtime.safeCall(opStr.at(tmp6));
    scrut1 = Keywords1.charPrecOpt(lastChar);
    if (scrut1 instanceof Option.Some.class) {
      arg$Some$0$ = scrut1.value;
      rightPrec = arg$Some$0$;
      tmp7 = runtime.safeCall(opStr.at(0));
      scrut2 = Keywords1.charPrecOpt(tmp7);
      if (scrut2 instanceof Option.Some.class) {
        arg$Some$0$1 = scrut2.value;
        leftPrec = arg$Some$0$1;
        unapplyResult1 = runtime.safeCall(Keywords.RightAssociative.unapply(lastChar));
        if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
          unapplyResult1.output;
          unapplyResult1.bindings;
          tmp8 = - 1;
        } else {
          tmp8 = 0;
        }
        tmp9 = rightPrec + tmp8;
        tmp10 = Predef.tuple(leftPrec, tmp9);
        return Option.Some(tmp10)
      }
      return Option.None;
    }
    return Option.None;
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Keywords"]; 
});
let Keywords = Keywords1; export default Keywords;
