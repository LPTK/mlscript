const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
import Char from "./../../Char.mjs";
import Stack from "./../../Stack.mjs";
import StrOps from "./../../StrOps.mjs";
import Option from "./../../Option.mjs";
import Iter from "./../../Iter.mjs";
import Token from "./Token.mjs";
let identifier, digits, char1, scanHexDigits, take, operator, Lexer1, lambda, lambda1, lambda2;
lambda = (undefined, function (x) {
  let unapplyResult;
  unapplyResult = runtime.safeCall(Char.BinDigit.unapply(x));
  if (unapplyResult instanceof runtime.MatchSuccess.class) {
    unapplyResult.output;
    unapplyResult.bindings;
    return true
  }
  return false;
});
lambda1 = (undefined, function (x) {
  let unapplyResult;
  unapplyResult = runtime.safeCall(Char.OctDigit.unapply(x));
  if (unapplyResult instanceof runtime.MatchSuccess.class) {
    unapplyResult.output;
    unapplyResult.bindings;
    return true
  }
  return false;
});
lambda2 = (undefined, function (x) {
  let unapplyResult;
  unapplyResult = runtime.safeCall(Char.HexDigit.unapply(x));
  if (unapplyResult instanceof runtime.MatchSuccess.class) {
    unapplyResult.output;
    unapplyResult.bindings;
    return true
  }
  return false;
});
char1 = (undefined, function (str, idx) {
  let scrut, tmp;
  scrut = idx < str.length;
  if (scrut === true) {
    tmp = runtime.safeCall(str.charAt(idx));
    return Option.Some(tmp)
  }
  return Option.None;
});
take = function take(str, pred, idx, acc) {
  lbl: while (true) {
    let scrut, scrut1, arg$Some$0$, tmp, tmp1;
    scrut = char1(str, idx);
    if (scrut instanceof Option.Some.class) {
      arg$Some$0$ = scrut.value;
      scrut1 = runtime.safeCall(pred(arg$Some$0$));
      if (scrut1 === true) {
        tmp = idx + 1;
        idx = tmp;
        tmp1 = acc + arg$Some$0$;
        acc = tmp1;
        continue lbl
      }
    }
    break;
  }
  return globalThis.Object.freeze([
    idx,
    acc
  ])
};
digits = function digits(str, idx, acc) {
  lbl: while (true) {
    let scrut, arg$Some$0$, unapplyResult, output, tmp, tmp1;
    scrut = char1(str, idx);
    if (scrut instanceof Option.Some.class) {
      arg$Some$0$ = scrut.value;
      unapplyResult = runtime.safeCall(Char.Digit.unapply(arg$Some$0$));
      if (unapplyResult instanceof runtime.MatchSuccess.class) {
        output = unapplyResult.output;
        unapplyResult.bindings;
        tmp = idx + 1;
        idx = tmp;
        tmp1 = acc + output;
        acc = tmp1;
        continue lbl
      }
    }
    break;
  }
  return globalThis.Object.freeze([
    idx,
    acc
  ])
};
identifier = function identifier(instance$Ident$_LineLookupTable$_, Lexer2, str, idx, acc) {
  let tmp, tmp1, tmp2, tmp3;
  lbl: while (true) {
    let scrut, arg$Some$0$, unapplyResult, output, tmp4, tmp5;
    scrut = char1(str, idx);
    if (scrut instanceof Option.Some.class) {
      arg$Some$0$ = scrut.value;
      unapplyResult = runtime.safeCall(Lexer2.IdentifierBody.unapply(arg$Some$0$));
      if (unapplyResult instanceof runtime.MatchSuccess.class) {
        output = unapplyResult.output;
        unapplyResult.bindings;
        tmp4 = idx + 1;
        idx = tmp4;
        tmp5 = acc + output;
        acc = tmp5;
        continue lbl
      }
    }
    break;
  }
  switch (acc) {
    case "true":
      tmp = Token.boolean("true", idx);
      tmp1 = runtime.safeCall(tmp(instance$Ident$_LineLookupTable$_));
      return Predef.tuple(idx, tmp1);
    case "false":
      tmp2 = Token.boolean("false", idx);
      tmp1 = runtime.safeCall(tmp2(instance$Ident$_LineLookupTable$_));
      return Predef.tuple(idx, tmp1);
  }
  tmp3 = Token.identifier(acc, idx);
  tmp1 = runtime.safeCall(tmp3(instance$Ident$_LineLookupTable$_));
  return Predef.tuple(idx, tmp1)
};
operator = function operator(instance$Ident$_LineLookupTable$_, Lexer2, str, idx, acc) {
  let tmp, tmp1;
  lbl: while (true) {
    let scrut, arg$Some$0$, unapplyResult, output, tmp2, tmp3;
    scrut = char1(str, idx);
    if (scrut instanceof Option.Some.class) {
      arg$Some$0$ = scrut.value;
      unapplyResult = runtime.safeCall(Lexer2.Operator.unapply(arg$Some$0$));
      if (unapplyResult instanceof runtime.MatchSuccess.class) {
        output = unapplyResult.output;
        unapplyResult.bindings;
        tmp2 = idx + 1;
        idx = tmp2;
        tmp3 = acc + output;
        acc = tmp3;
        continue lbl
      }
    }
    break;
  }
  tmp = Token.symbol(acc, idx);
  tmp1 = runtime.safeCall(tmp(instance$Ident$_LineLookupTable$_));
  return globalThis.Object.freeze([
    idx,
    tmp1
  ])
};
scanHexDigits = function scanHexDigits(str, idx, lim, acc, cnt) {
  loopLabel: while (true) {
    let scrut, scrut1, arg$Some$0$, unapplyResult, output, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    scrut = char1(str, idx);
    if (scrut instanceof Option.Some.class) {
      arg$Some$0$ = scrut.value;
      unapplyResult = runtime.safeCall(Char.HexDigit.unapply(arg$Some$0$));
      if (unapplyResult instanceof runtime.MatchSuccess.class) {
        output = unapplyResult.output;
        unapplyResult.bindings;
        scrut1 = cnt < lim;
        if (scrut1 === true) {
          tmp = idx + 1;
          tmp1 = acc * 16;
          tmp2 = globalThis.parseInt(output, 16);
          tmp3 = tmp1 + tmp2;
          tmp4 = cnt + 1;
          idx = tmp;
          acc = tmp3;
          cnt = tmp4;
          continue loopLabel
        }
        tmp5 = idx + 1;
        tmp6 = cnt + 1;
        idx = tmp5;
        cnt = tmp6;
        continue loopLabel;
      }
      return globalThis.Object.freeze([
        idx,
        acc,
        cnt
      ]);
    }
    return globalThis.Object.freeze([
      idx,
      acc,
      cnt
    ]);
  }
};
(class Lexer {
  static {
    Lexer1 = this
  }
  static {
    this.Location = function Location(start, end) {
      return globalThis.Object.freeze(new Location.class(start, end));
    };
    (class Location {
      static {
        Lexer.Location.class = this
      }
      #start;
      #end;
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Location", [null, null]]; 
    });
    this.Message = function Message(description, location) {
      return globalThis.Object.freeze(new Message.class(description, location));
    };
    (class Message {
      static {
        Lexer.Message.class = this
      }
      #description;
      #location;
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Message", [null, null]]; 
    });
    this.Report = function Report(messages) {
      return globalThis.Object.freeze(new Report.class(messages));
    };
    (class Report {
      static {
        Lexer.Report.class = this
      }
      #messages;
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Report", [null]]; 
    });
    (class IdentifierStart {
      static {
        new this
      }
      constructor() {
        Lexer.IdentifierStart = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        let unapplyResult, output;
        unapplyResult = runtime.safeCall(Char.Letter.unapply(input));
        if (unapplyResult instanceof runtime.MatchSuccess.class) {
          output = unapplyResult.output;
          unapplyResult.bindings;
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(output, null))
        }
        if (input === "_") {
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null))
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      } 
      unapplyStringPrefix(input) {
        let isLeading, consumed, remains, output, remaining, unapplyResult, outputPair, tmp, tmp1;
        unapplyResult = runtime.safeCall(Char.Letter.unapplyStringPrefix(input));
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
        isLeading = runtime.Str.startsWith(input, "_");
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
      static [definitionMetadata] = ["pattern", "IdentifierStart"]; 
    });
    (class IdentifierBody {
      static {
        new this
      }
      constructor() {
        Lexer.IdentifierBody = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        let unapplyResult, output, unapplyResult1, output1;
        unapplyResult1 = runtime.safeCall(Char.Letter.unapply(input));
        if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
          output1 = unapplyResult1.output;
          unapplyResult1.bindings;
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(output1, null))
        }
        unapplyResult = runtime.safeCall(Char.Digit.unapply(input));
        if (unapplyResult instanceof runtime.MatchSuccess.class) {
          output = unapplyResult.output;
          unapplyResult.bindings;
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(output, null))
        }
        switch (input) {
          case "_":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "'":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      } 
      unapplyStringPrefix(input) {
        let isLeading, consumed, remains, isLeading1, consumed1, remains1, output, remaining, unapplyResult, outputPair, output1, remaining1, unapplyResult1, outputPair1, tmp, tmp1, tmp2, tmp3;
        unapplyResult1 = runtime.safeCall(Char.Letter.unapplyStringPrefix(input));
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
        unapplyResult = runtime.safeCall(Char.Digit.unapplyStringPrefix(input));
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
        isLeading1 = runtime.Str.startsWith(input, "_");
        if (isLeading1 === true) {
          consumed1 = runtime.Str.take(input, 1);
          remains1 = runtime.Str.leave(input, 1);
          tmp2 = globalThis.Object.freeze([
            consumed1,
            remains1
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp2, null))
        }
        isLeading = runtime.Str.startsWith(input, "'");
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
      static [definitionMetadata] = ["pattern", "IdentifierBody"]; 
    });
    (class Operator {
      static {
        new this
      }
      constructor() {
        Lexer.Operator = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        switch (input) {
          case ",":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case ";":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "!":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "#":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "%":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "&":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "*":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "+":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "-":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "/":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case ":":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "<":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "=":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case ">":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "?":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "@":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "\\":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "^":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "|":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "~":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case ".":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
      } 
      unapplyStringPrefix(input) {
        let isLeading, consumed, remains, isLeading1, consumed1, remains1, isLeading2, consumed2, remains2, isLeading3, consumed3, remains3, isLeading4, consumed4, remains4, isLeading5, consumed5, remains5, isLeading6, consumed6, remains6, isLeading7, consumed7, remains7, isLeading8, consumed8, remains8, isLeading9, consumed9, remains9, isLeading10, consumed10, remains10, isLeading11, consumed11, remains11, isLeading12, consumed12, remains12, isLeading13, consumed13, remains13, isLeading14, consumed14, remains14, isLeading15, consumed15, remains15, isLeading16, consumed16, remains16, isLeading17, consumed17, remains17, isLeading18, consumed18, remains18, isLeading19, consumed19, remains19, isLeading20, consumed20, remains20, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20;
        isLeading20 = runtime.Str.startsWith(input, ",");
        if (isLeading20 === true) {
          consumed20 = runtime.Str.take(input, 1);
          remains20 = runtime.Str.leave(input, 1);
          tmp = globalThis.Object.freeze([
            consumed20,
            remains20
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp, null))
        }
        isLeading19 = runtime.Str.startsWith(input, ";");
        if (isLeading19 === true) {
          consumed19 = runtime.Str.take(input, 1);
          remains19 = runtime.Str.leave(input, 1);
          tmp1 = globalThis.Object.freeze([
            consumed19,
            remains19
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp1, null))
        }
        isLeading18 = runtime.Str.startsWith(input, "!");
        if (isLeading18 === true) {
          consumed18 = runtime.Str.take(input, 1);
          remains18 = runtime.Str.leave(input, 1);
          tmp2 = globalThis.Object.freeze([
            consumed18,
            remains18
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp2, null))
        }
        isLeading17 = runtime.Str.startsWith(input, "#");
        if (isLeading17 === true) {
          consumed17 = runtime.Str.take(input, 1);
          remains17 = runtime.Str.leave(input, 1);
          tmp3 = globalThis.Object.freeze([
            consumed17,
            remains17
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp3, null))
        }
        isLeading16 = runtime.Str.startsWith(input, "%");
        if (isLeading16 === true) {
          consumed16 = runtime.Str.take(input, 1);
          remains16 = runtime.Str.leave(input, 1);
          tmp4 = globalThis.Object.freeze([
            consumed16,
            remains16
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp4, null))
        }
        isLeading15 = runtime.Str.startsWith(input, "&");
        if (isLeading15 === true) {
          consumed15 = runtime.Str.take(input, 1);
          remains15 = runtime.Str.leave(input, 1);
          tmp5 = globalThis.Object.freeze([
            consumed15,
            remains15
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp5, null))
        }
        isLeading14 = runtime.Str.startsWith(input, "*");
        if (isLeading14 === true) {
          consumed14 = runtime.Str.take(input, 1);
          remains14 = runtime.Str.leave(input, 1);
          tmp6 = globalThis.Object.freeze([
            consumed14,
            remains14
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp6, null))
        }
        isLeading13 = runtime.Str.startsWith(input, "+");
        if (isLeading13 === true) {
          consumed13 = runtime.Str.take(input, 1);
          remains13 = runtime.Str.leave(input, 1);
          tmp7 = globalThis.Object.freeze([
            consumed13,
            remains13
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp7, null))
        }
        isLeading12 = runtime.Str.startsWith(input, "-");
        if (isLeading12 === true) {
          consumed12 = runtime.Str.take(input, 1);
          remains12 = runtime.Str.leave(input, 1);
          tmp8 = globalThis.Object.freeze([
            consumed12,
            remains12
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp8, null))
        }
        isLeading11 = runtime.Str.startsWith(input, "/");
        if (isLeading11 === true) {
          consumed11 = runtime.Str.take(input, 1);
          remains11 = runtime.Str.leave(input, 1);
          tmp9 = globalThis.Object.freeze([
            consumed11,
            remains11
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp9, null))
        }
        isLeading10 = runtime.Str.startsWith(input, ":");
        if (isLeading10 === true) {
          consumed10 = runtime.Str.take(input, 1);
          remains10 = runtime.Str.leave(input, 1);
          tmp10 = globalThis.Object.freeze([
            consumed10,
            remains10
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp10, null))
        }
        isLeading9 = runtime.Str.startsWith(input, "<");
        if (isLeading9 === true) {
          consumed9 = runtime.Str.take(input, 1);
          remains9 = runtime.Str.leave(input, 1);
          tmp11 = globalThis.Object.freeze([
            consumed9,
            remains9
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp11, null))
        }
        isLeading8 = runtime.Str.startsWith(input, "=");
        if (isLeading8 === true) {
          consumed8 = runtime.Str.take(input, 1);
          remains8 = runtime.Str.leave(input, 1);
          tmp12 = globalThis.Object.freeze([
            consumed8,
            remains8
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp12, null))
        }
        isLeading7 = runtime.Str.startsWith(input, ">");
        if (isLeading7 === true) {
          consumed7 = runtime.Str.take(input, 1);
          remains7 = runtime.Str.leave(input, 1);
          tmp13 = globalThis.Object.freeze([
            consumed7,
            remains7
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp13, null))
        }
        isLeading6 = runtime.Str.startsWith(input, "?");
        if (isLeading6 === true) {
          consumed6 = runtime.Str.take(input, 1);
          remains6 = runtime.Str.leave(input, 1);
          tmp14 = globalThis.Object.freeze([
            consumed6,
            remains6
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp14, null))
        }
        isLeading5 = runtime.Str.startsWith(input, "@");
        if (isLeading5 === true) {
          consumed5 = runtime.Str.take(input, 1);
          remains5 = runtime.Str.leave(input, 1);
          tmp15 = globalThis.Object.freeze([
            consumed5,
            remains5
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp15, null))
        }
        isLeading4 = runtime.Str.startsWith(input, "\\");
        if (isLeading4 === true) {
          consumed4 = runtime.Str.take(input, 1);
          remains4 = runtime.Str.leave(input, 1);
          tmp16 = globalThis.Object.freeze([
            consumed4,
            remains4
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp16, null))
        }
        isLeading3 = runtime.Str.startsWith(input, "^");
        if (isLeading3 === true) {
          consumed3 = runtime.Str.take(input, 1);
          remains3 = runtime.Str.leave(input, 1);
          tmp17 = globalThis.Object.freeze([
            consumed3,
            remains3
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp17, null))
        }
        isLeading2 = runtime.Str.startsWith(input, "|");
        if (isLeading2 === true) {
          consumed2 = runtime.Str.take(input, 1);
          remains2 = runtime.Str.leave(input, 1);
          tmp18 = globalThis.Object.freeze([
            consumed2,
            remains2
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp18, null))
        }
        isLeading1 = runtime.Str.startsWith(input, "~");
        if (isLeading1 === true) {
          consumed1 = runtime.Str.take(input, 1);
          remains1 = runtime.Str.leave(input, 1);
          tmp19 = globalThis.Object.freeze([
            consumed1,
            remains1
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp19, null))
        }
        isLeading = runtime.Str.startsWith(input, ".");
        if (isLeading === true) {
          consumed = runtime.Str.take(input, 1);
          remains = runtime.Str.leave(input, 1);
          tmp20 = globalThis.Object.freeze([
            consumed,
            remains
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp20, null))
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "Operator"]; 
    });
    (class Bracket {
      static {
        new this
      }
      constructor() {
        Lexer.Bracket = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        switch (input) {
          case "(":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case ")":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "[":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "]":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "{":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "}":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
      } 
      unapplyStringPrefix(input) {
        let isLeading, consumed, remains, isLeading1, consumed1, remains1, isLeading2, consumed2, remains2, isLeading3, consumed3, remains3, isLeading4, consumed4, remains4, isLeading5, consumed5, remains5, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
        isLeading5 = runtime.Str.startsWith(input, "(");
        if (isLeading5 === true) {
          consumed5 = runtime.Str.take(input, 1);
          remains5 = runtime.Str.leave(input, 1);
          tmp = globalThis.Object.freeze([
            consumed5,
            remains5
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp, null))
        }
        isLeading4 = runtime.Str.startsWith(input, ")");
        if (isLeading4 === true) {
          consumed4 = runtime.Str.take(input, 1);
          remains4 = runtime.Str.leave(input, 1);
          tmp1 = globalThis.Object.freeze([
            consumed4,
            remains4
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp1, null))
        }
        isLeading3 = runtime.Str.startsWith(input, "[");
        if (isLeading3 === true) {
          consumed3 = runtime.Str.take(input, 1);
          remains3 = runtime.Str.leave(input, 1);
          tmp2 = globalThis.Object.freeze([
            consumed3,
            remains3
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp2, null))
        }
        isLeading2 = runtime.Str.startsWith(input, "]");
        if (isLeading2 === true) {
          consumed2 = runtime.Str.take(input, 1);
          remains2 = runtime.Str.leave(input, 1);
          tmp3 = globalThis.Object.freeze([
            consumed2,
            remains2
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp3, null))
        }
        isLeading1 = runtime.Str.startsWith(input, "{");
        if (isLeading1 === true) {
          consumed1 = runtime.Str.take(input, 1);
          remains1 = runtime.Str.leave(input, 1);
          tmp4 = globalThis.Object.freeze([
            consumed1,
            remains1
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp4, null))
        }
        isLeading = runtime.Str.startsWith(input, "}");
        if (isLeading === true) {
          consumed = runtime.Str.take(input, 1);
          remains = runtime.Str.leave(input, 1);
          tmp5 = globalThis.Object.freeze([
            consumed,
            remains
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp5, null))
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "Bracket"]; 
    });
    (class IdentifierQuote {
      static {
        new this
      }
      constructor() {
        Lexer.IdentifierQuote = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        switch (input) {
          case "'":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "`":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
      } 
      unapplyStringPrefix(input) {
        let isLeading, consumed, remains, isLeading1, consumed1, remains1, tmp, tmp1;
        isLeading1 = runtime.Str.startsWith(input, "'");
        if (isLeading1 === true) {
          consumed1 = runtime.Str.take(input, 1);
          remains1 = runtime.Str.leave(input, 1);
          tmp = globalThis.Object.freeze([
            consumed1,
            remains1
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp, null))
        }
        isLeading = runtime.Str.startsWith(input, "`");
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
      static [definitionMetadata] = ["pattern", "IdentifierQuote"]; 
    });
  }
  static makeLineLookupTable(text) {
    let i, n, ns;
    i = 0;
    n = text.length;
    ns = [];
    lbl: while (true) {
      let scrut, i$_, scrut1, tmp;
      scrut = i < n;
      if (scrut === true) {
        i$_ = text.indexOf("\n", i);
        scrut1 = Predef.equals(i$_, -1);
        if (scrut1 === true) {
          i = n;
          runtime.safeCall(ns.push(n));
          continue lbl
        }
        tmp = i$_ + 1;
        i = tmp;
        runtime.safeCall(ns.push(i$_));
        continue lbl;
      }
      break;
    }
    return Token.LineLookupTable(ns)
  } 
  static lex(str, options) {
    let instance$Ident$_LineLookupTable$_, tmp, acc, id, param0, param1, param2, param3, param4, param5, param6, inlinedVal;
    tmp = Lexer.makeLineLookupTable(str);
    instance$Ident$_LineLookupTable$_ = tmp;
    acc = Stack.Nil;
    id = 2;
    param0 = instance$Ident$_LineLookupTable$_;
    param1 = Lexer;
    param2 = str;
    param3 = options;
    param4 = 0;
    param5 = acc;
    param6 = undefined;
    inlinedLbl: {
      loopLabel: while (true) {
        switch (id) {
          case 0:
            let scrut, tmp1;
            scrut = param3.noWhitespace;
            if (scrut === true) {
              if (param6 instanceof Token.Comment.class) {
                let param4_tmp;
                param4_tmp = param4;
                param4 = param5;
                param5 = param4_tmp;
                id = 2;
                continue loopLabel
              } else if (param6 instanceof Token.Space.class) {
                let param4_tmp;
                param4_tmp = param4;
                param4 = param5;
                param5 = param4_tmp;
                id = 2;
                continue loopLabel
              }
            }
            tmp1 = Stack.Cons(param6, param4);
            param4 = param5;
            param5 = tmp1;
            id = 2;
            continue loopLabel;
          case 1:
            let param5_tmp;
            param5_tmp = param5;
            param5 = param5[0];
            param6 = param5_tmp[1];
            id = 0;
            continue loopLabel;
          case 2:
            let scrut1, ch, scrut2, scrut3, arg$Some$0$, unapplyResult, output, arg$Some$0$1, unapplyResult1, output1, element1$, element0$, arg$Identifier$0$, unapplyResult2, output2, unapplyResult3, output3, unapplyResult4, output4, unapplyResult5, output5, unapplyResult6, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28;
            scrut1 = char1(param2, param4);
            if (scrut1 instanceof Option.None.class) {
              inlinedVal = Stack.reverse(param5);
              break inlinedLbl
            } else if (scrut1 instanceof Option.Some.class) {
              arg$Some$0$ = scrut1.value;
              ch = arg$Some$0$;
              unapplyResult6 = runtime.safeCall(Char.Whitespace.unapply(arg$Some$0$));
              if (unapplyResult6 instanceof runtime.MatchSuccess.class) {
                let str1, idx;
                unapplyResult6.output;
                unapplyResult6.bindings;
                str1 = param2;
                idx = param4;
                lbl: while (true) {
                  let scrut4, arg$Some$0$2, unapplyResult7, tmp29;
                  scrut4 = char1(str1, idx);
                  if (scrut4 instanceof Option.Some.class) {
                    arg$Some$0$2 = scrut4.value;
                    unapplyResult7 = runtime.safeCall(Char.Whitespace.unapply(arg$Some$0$2));
                    if (unapplyResult7 instanceof runtime.MatchSuccess.class) {
                      unapplyResult7.output;
                      unapplyResult7.bindings;
                      tmp29 = idx + 1;
                      idx = tmp29;
                      continue lbl
                    }
                  }
                  break;
                }
                tmp2 = Token.space(param4, idx);
                tmp3 = runtime.safeCall(tmp2(param0));
                param4 = param5;
                param5 = idx;
                param6 = tmp3;
                id = 0;
                continue loopLabel
              }
              if (arg$Some$0$ === "\"") {
                let instance$Ident$_LineLookupTable$_1, str1, idx, inlinedVal1, startIndex, content, terminated, tmp29, tmp30;
                tmp4 = param4 + 1;
                instance$Ident$_LineLookupTable$_1 = param0;
                str1 = param2;
                idx = tmp4;
                startIndex = tmp4;
                content = "";
                terminated = false;
                lbl: while (true) {
                  let scrut4, arg$Some$0$2, tmp31, element1$1, element0$1, tmp32, arg$Some$0$3, tmp33, tmp34, tmp35;
                  if (terminated === false) {
                    scrut4 = char1(str1, idx);
                    if (scrut4 instanceof Option.Some.class) {
                      arg$Some$0$2 = scrut4.value;
                      switch (arg$Some$0$2) {
                        case "\"":
                          terminated = true;
                          tmp31 = idx + 1;
                          idx = tmp31;
                          continue lbl;
                        case "\\":
                          let inlinedVal2;
                          tmp32 = idx + 1;
                          inlinedLbl1: {
                            let scrut5, scrut6, scrut7, scrut8, scrut9, scrut10, arg$Some$0$4, arg$Some$0$5, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, element2$, element1$2, element0$2, tmp52, tmp53, tmp54, tmp55, element2$1, element1$3, element0$3, tmp56, arg$Some$0$6, tmp57, tmp58, tmp59, tmp60, tmp61, element2$2, element1$4, element0$4, tmp62, tmp63, tmp64, tmp65;
                            scrut5 = char1(str1, tmp32);
                            if (scrut5 instanceof Option.Some.class) {
                              arg$Some$0$4 = scrut5.value;
                              switch (arg$Some$0$4) {
                                case "n":
                                  tmp36 = tmp32 + 1;
                                  tmp37 = Option.Some("\n");
                                  inlinedVal2 = globalThis.Object.freeze([
                                    tmp36,
                                    tmp37
                                  ]);
                                  break;
                                case "r":
                                  tmp38 = tmp32 + 1;
                                  tmp39 = Option.Some("\r");
                                  inlinedVal2 = globalThis.Object.freeze([
                                    tmp38,
                                    tmp39
                                  ]);
                                  break;
                                case "t":
                                  tmp40 = tmp32 + 1;
                                  tmp41 = Option.Some("\t");
                                  inlinedVal2 = globalThis.Object.freeze([
                                    tmp40,
                                    tmp41
                                  ]);
                                  break;
                                case "0":
                                  tmp42 = tmp32 + 1;
                                  tmp43 = Option.Some("\u0000");
                                  inlinedVal2 = globalThis.Object.freeze([
                                    tmp42,
                                    tmp43
                                  ]);
                                  break;
                                case "b":
                                  tmp44 = tmp32 + 1;
                                  tmp45 = Option.Some("\b");
                                  inlinedVal2 = globalThis.Object.freeze([
                                    tmp44,
                                    tmp45
                                  ]);
                                  break;
                                case "f":
                                  tmp46 = tmp32 + 1;
                                  tmp47 = Option.Some("\f");
                                  inlinedVal2 = globalThis.Object.freeze([
                                    tmp46,
                                    tmp47
                                  ]);
                                  break;
                                case "\"":
                                  tmp48 = tmp32 + 1;
                                  tmp49 = Option.Some("\"");
                                  inlinedVal2 = globalThis.Object.freeze([
                                    tmp48,
                                    tmp49
                                  ]);
                                  break;
                                case "\\":
                                  tmp50 = tmp32 + 1;
                                  tmp51 = Option.Some("\\");
                                  inlinedVal2 = globalThis.Object.freeze([
                                    tmp50,
                                    tmp51
                                  ]);
                                  break;
                                case "x":
                                  tmp52 = tmp32 + 1;
                                  scrut6 = scanHexDigits(str1, tmp52, 2, 0, 0);
                                  if (runtime.Tuple.isArrayLike(scrut6) && scrut6.length === 3) {
                                    element0$2 = runtime.Tuple.get(scrut6, 0);
                                    element1$2 = runtime.Tuple.get(scrut6, 1);
                                    element2$ = runtime.Tuple.get(scrut6, 2);
                                    if (element2$ === 0) {
                                      tmp53 = Option.None;
                                      inlinedVal2 = Predef.tuple(element0$2, tmp53);
                                    } else {
                                      tmp54 = globalThis.String.fromCodePoint(element1$2);
                                      tmp53 = Option.Some(tmp54);
                                      inlinedVal2 = Predef.tuple(element0$2, tmp53);
                                    }
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  break;
                                case "u":
                                  tmp55 = tmp32 + 1;
                                  scrut7 = char1(str1, tmp55);
                                  if (scrut7 instanceof Option.Some.class) {
                                    arg$Some$0$5 = scrut7.value;
                                    if (arg$Some$0$5 === "{") {
                                      tmp56 = tmp32 + 2;
                                      scrut8 = scanHexDigits(str1, tmp56, 6, 0, 0);
                                      if (runtime.Tuple.isArrayLike(scrut8) && scrut8.length === 3) {
                                        element0$3 = runtime.Tuple.get(scrut8, 0);
                                        element1$3 = runtime.Tuple.get(scrut8, 1);
                                        element2$1 = runtime.Tuple.get(scrut8, 2);
                                        scrut9 = char1(str1, element0$3);
                                        if (scrut9 instanceof Option.Some.class) {
                                          arg$Some$0$6 = scrut9.value;
                                          if (arg$Some$0$6 === "}") {
                                            tmp57 = element0$3 + 1;
                                          } else {
                                            tmp57 = element0$3;
                                          }
                                        } else {
                                          tmp57 = element0$3;
                                        }
                                        if (element2$1 === 0) {
                                          tmp58 = Option.None;
                                          inlinedVal2 = Predef.tuple(tmp57, tmp58);
                                          break inlinedLbl1
                                        }
                                        tmp59 = globalThis.String.fromCodePoint(element1$3);
                                        tmp58 = Option.Some(tmp59);
                                        inlinedVal2 = Predef.tuple(tmp57, tmp58);
                                        break inlinedLbl1;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                  }
                                  tmp62 = tmp32 + 1;
                                  scrut10 = scanHexDigits(str1, tmp62, 4, 0, 0);
                                  if (runtime.Tuple.isArrayLike(scrut10) && scrut10.length === 3) {
                                    element0$4 = runtime.Tuple.get(scrut10, 0);
                                    element1$4 = runtime.Tuple.get(scrut10, 1);
                                    element2$2 = runtime.Tuple.get(scrut10, 2);
                                    if (element2$2 === 0) {
                                      tmp63 = Option.None;
                                    } else {
                                      tmp64 = globalThis.String.fromCodePoint(element1$4);
                                      tmp63 = Option.Some(tmp64);
                                    }
                                    tmp65 = Predef.tuple(element0$4, tmp63);
                                    inlinedVal2 = tmp65;
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  break;
                                default:
                                  tmp60 = tmp32 + 1;
                                  tmp61 = Option.Some(arg$Some$0$4);
                                  inlinedVal2 = globalThis.Object.freeze([
                                    tmp60,
                                    tmp61
                                  ]);
                              }
                            } else if (scrut5 instanceof Option.None.class) {
                              inlinedVal2 = globalThis.Object.freeze([
                                tmp32,
                                Option.None
                              ]);
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                          }
                          if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
                            element0$1 = runtime.Tuple.get(inlinedVal2, 0);
                            element1$1 = runtime.Tuple.get(inlinedVal2, 1);
                            idx = element0$1;
                            if (element1$1 instanceof Option.Some.class) {
                              arg$Some$0$3 = element1$1.value;
                              tmp33 = content + arg$Some$0$3;
                              content = tmp33;
                              continue lbl
                            }
                            continue lbl;
                          }
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                      }
                      tmp34 = idx + 1;
                      idx = tmp34;
                      tmp35 = content + arg$Some$0$2;
                      content = tmp35;
                      continue lbl
                    } else if (scrut4 instanceof Option.None.class) {
                      terminated = true;
                      continue lbl
                    }
                    continue lbl;
                  }
                  break;
                }
                tmp29 = Token.string(content, startIndex, idx);
                tmp30 = runtime.safeCall(tmp29(instance$Ident$_LineLookupTable$_1));
                inlinedVal1 = globalThis.Object.freeze([
                  idx,
                  tmp30
                ]);
                param4 = param5;
                param5 = inlinedVal1;
                id = 1;
                continue loopLabel
              }
              unapplyResult5 = runtime.safeCall(param1.Bracket.unapply(arg$Some$0$));
              if (unapplyResult5 instanceof runtime.MatchSuccess.class) {
                output5 = unapplyResult5.output;
                unapplyResult5.bindings;
                tmp5 = param4 + 1;
                tmp6 = Token.symbol(output5, param4);
                tmp7 = runtime.safeCall(tmp6(param0));
                param4 = param5;
                param5 = tmp5;
                param6 = tmp7;
                id = 0;
                continue loopLabel
              }
              if (arg$Some$0$ === "/") {
                let instance$Ident$_LineLookupTable$_1, str1, idx, inlinedVal1, start, content, scrut4, terminated, arg$Some$0$2, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36;
                tmp8 = param4 + 1;
                instance$Ident$_LineLookupTable$_1 = param0;
                str1 = param2;
                idx = tmp8;
                start = tmp8;
                content = "";
                scrut4 = char1(param2, tmp8);
                if (scrut4 instanceof Option.Some.class) {
                  arg$Some$0$2 = scrut4.value;
                  switch (arg$Some$0$2) {
                    case "/":
                      tmp29 = tmp8 + 1;
                      idx = tmp29;
                      lbl: while (true) {
                        let scrut5, scrut6, arg$Some$0$3, tmp37, tmp38;
                        scrut5 = char1(str1, idx);
                        if (scrut5 instanceof Option.Some.class) {
                          arg$Some$0$3 = scrut5.value;
                          scrut6 = arg$Some$0$3 !== "\n";
                          if (scrut6 === true) {
                            tmp37 = idx + 1;
                            idx = tmp37;
                            tmp38 = content + arg$Some$0$3;
                            content = tmp38;
                            continue lbl
                          }
                        }
                        break;
                      }
                      tmp30 = Token.comment(content, start, idx);
                      tmp31 = runtime.safeCall(tmp30(instance$Ident$_LineLookupTable$_1));
                      inlinedVal1 = globalThis.Object.freeze([
                        idx,
                        tmp31
                      ]);
                      break;
                    case "*":
                      terminated = false;
                      tmp32 = tmp8 + 1;
                      idx = tmp32;
                      lbl1: while (true) {
                        let scrut5, scrut6, ch1, arg$Some$0$3, arg$Some$0$4, tmp37, tmp38, tmp39, tmp40;
                        if (terminated === false) {
                          scrut5 = char1(str1, idx);
                          if (scrut5 instanceof Option.Some.class) {
                            arg$Some$0$3 = scrut5.value;
                            if (arg$Some$0$3 === "*") {
                              tmp37 = idx + 1;
                              scrut6 = char1(str1, tmp37);
                              if (scrut6 instanceof Option.Some.class) {
                                arg$Some$0$4 = scrut6.value;
                                if (arg$Some$0$4 === "/") {
                                  tmp38 = idx + 2;
                                  idx = tmp38;
                                  terminated = true;
                                  continue lbl1
                                }
                                ch1 = arg$Some$0$3;
                              } else {
                                ch1 = arg$Some$0$3;
                              }
                            } else {
                              ch1 = arg$Some$0$3;
                            }
                            tmp39 = idx + 1;
                            idx = tmp39;
                            tmp40 = content + ch1;
                            content = tmp40;
                            continue lbl1
                          }
                        }
                        break;
                      }
                      if (terminated === true) {
                        tmp33 = Token.comment(content, start, idx);
                        tmp34 = runtime.safeCall(tmp33(instance$Ident$_LineLookupTable$_1));
                        inlinedVal1 = globalThis.Object.freeze([
                          idx,
                          tmp34
                        ]);
                      } else {
                        tmp35 = Token.error(start, idx);
                        tmp36 = runtime.safeCall(tmp35(instance$Ident$_LineLookupTable$_1));
                        inlinedVal1 = globalThis.Object.freeze([
                          idx,
                          tmp36
                        ]);
                      }
                      break;
                    default:
                      inlinedVal1 = operator(param0, param1, param2, tmp8, "/");
                  }
                } else {
                  inlinedVal1 = operator(param0, param1, param2, tmp8, "/");
                }
                param4 = param5;
                param5 = inlinedVal1;
                id = 1;
                continue loopLabel
              }
              unapplyResult4 = runtime.safeCall(param1.Operator.unapply(arg$Some$0$));
              if (unapplyResult4 instanceof runtime.MatchSuccess.class) {
                output4 = unapplyResult4.output;
                unapplyResult4.bindings;
                tmp9 = param4 + 1;
                tmp10 = operator(param0, param1, param2, tmp9, output4);
                param4 = param5;
                param5 = tmp10;
                id = 1;
                continue loopLabel
              }
              unapplyResult3 = runtime.safeCall(Char.Digit.unapply(arg$Some$0$));
              if (unapplyResult3 instanceof runtime.MatchSuccess.class) {
                let instance$Ident$_LineLookupTable$_1, idx, inlinedVal1;
                output3 = unapplyResult3.output;
                unapplyResult3.bindings;
                tmp11 = param4 + 1;
                instance$Ident$_LineLookupTable$_1 = param0;
                idx = tmp11;
                inlinedLbl1: {
                  let scrut4, scrut5, scrut6, scrut7, scrut8, idx$_, integer, scrut9, scrut10, idx$_1, integer1, scrut11, fraction, idx$_$_, scrut12, element1$1, element0$1, arg$Some$0$2, element1$2, element0$2, arg$Some$0$3, element1$3, element0$3, element1$4, element0$4, element1$5, element0$5, element1$6, element0$6, element1$7, element0$7, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61;
                  split_default$: {
                    split_1$: {
                      split_2$: {
                        if (output3 === "0") {
                          scrut4 = char1(param2, tmp11);
                          if (scrut4 instanceof Option.None.class) {
                            tmp29 = Token.integer("0", tmp11);
                            tmp30 = runtime.safeCall(tmp29(param0));
                            inlinedVal1 = globalThis.Object.freeze([
                              tmp11,
                              tmp30
                            ]);
                            break inlinedLbl1
                          } else if (scrut4 instanceof Option.Some.class) {
                            arg$Some$0$3 = scrut4.value;
                            switch (arg$Some$0$3) {
                              case "b":
                                tmp31 = tmp11 + 1;
                                scrut5 = take(param2, lambda, tmp31, "");
                                if (runtime.Tuple.isArrayLike(scrut5) && scrut5.length === 2) {
                                  element0$7 = runtime.Tuple.get(scrut5, 0);
                                  element1$7 = runtime.Tuple.get(scrut5, 1);
                                  tmp32 = StrOps.concat2("0b", element1$7);
                                  tmp33 = Token.integer(tmp32, tmp11);
                                  tmp34 = runtime.safeCall(tmp33(param0));
                                  inlinedVal1 = globalThis.Object.freeze([
                                    element0$7,
                                    tmp34
                                  ]);
                                  break inlinedLbl1
                                }
                                scrut9 = digits(param2, tmp11, output3);
                                if (runtime.Tuple.isArrayLike(scrut9) && scrut9.length === 2) {
                                  element0$3 = runtime.Tuple.get(scrut9, 0);
                                  element1$3 = runtime.Tuple.get(scrut9, 1);
                                  integer = element1$3;
                                  idx$_ = element0$3;
                                  break split_1$
                                }
                                scrut10 = digits(param2, tmp11, output3);
                                if (runtime.Tuple.isArrayLike(scrut10) && scrut10.length === 2) {
                                  element0$1 = runtime.Tuple.get(scrut10, 0);
                                  element1$1 = runtime.Tuple.get(scrut10, 1);
                                  integer1 = element1$1;
                                  idx$_1 = element0$1;
                                  scrut11 = char1(param2, element0$1);
                                  if (scrut11 instanceof Option.Some.class) {
                                    arg$Some$0$2 = scrut11.value;
                                    if (arg$Some$0$2 === ".") {
                                      tmp35 = element0$1 + 1;
                                      scrut12 = digits(param2, tmp35, "");
                                      if (runtime.Tuple.isArrayLike(scrut12) && scrut12.length === 2) {
                                        element0$2 = runtime.Tuple.get(scrut12, 0);
                                        element1$2 = runtime.Tuple.get(scrut12, 1);
                                        fraction = element1$2;
                                        idx$_$_ = element0$2;
                                        break split_2$
                                      }
                                    }
                                  }
                                } else {
                                  break split_default$
                                }
                                break;
                              case "o":
                                tmp36 = tmp11 + 1;
                                scrut6 = take(param2, lambda1, tmp36, "");
                                if (runtime.Tuple.isArrayLike(scrut6) && scrut6.length === 2) {
                                  element0$6 = runtime.Tuple.get(scrut6, 0);
                                  element1$6 = runtime.Tuple.get(scrut6, 1);
                                  tmp37 = StrOps.concat2("0o", element1$6);
                                  tmp38 = Token.integer(tmp37, tmp11);
                                  tmp39 = runtime.safeCall(tmp38(param0));
                                  inlinedVal1 = globalThis.Object.freeze([
                                    element0$6,
                                    tmp39
                                  ]);
                                  break inlinedLbl1
                                }
                                scrut9 = digits(param2, tmp11, output3);
                                if (runtime.Tuple.isArrayLike(scrut9) && scrut9.length === 2) {
                                  element0$3 = runtime.Tuple.get(scrut9, 0);
                                  element1$3 = runtime.Tuple.get(scrut9, 1);
                                  integer = element1$3;
                                  idx$_ = element0$3;
                                  break split_1$
                                }
                                scrut10 = digits(param2, tmp11, output3);
                                if (runtime.Tuple.isArrayLike(scrut10) && scrut10.length === 2) {
                                  element0$1 = runtime.Tuple.get(scrut10, 0);
                                  element1$1 = runtime.Tuple.get(scrut10, 1);
                                  integer1 = element1$1;
                                  idx$_1 = element0$1;
                                  scrut11 = char1(param2, element0$1);
                                  if (scrut11 instanceof Option.Some.class) {
                                    arg$Some$0$2 = scrut11.value;
                                    if (arg$Some$0$2 === ".") {
                                      tmp40 = element0$1 + 1;
                                      scrut12 = digits(param2, tmp40, "");
                                      if (runtime.Tuple.isArrayLike(scrut12) && scrut12.length === 2) {
                                        element0$2 = runtime.Tuple.get(scrut12, 0);
                                        element1$2 = runtime.Tuple.get(scrut12, 1);
                                        fraction = element1$2;
                                        idx$_$_ = element0$2;
                                        break split_2$
                                      }
                                    }
                                  }
                                } else {
                                  break split_default$
                                }
                                break;
                              case "x":
                                tmp41 = tmp11 + 1;
                                scrut7 = take(param2, lambda2, tmp41, "");
                                if (runtime.Tuple.isArrayLike(scrut7) && scrut7.length === 2) {
                                  element0$5 = runtime.Tuple.get(scrut7, 0);
                                  element1$5 = runtime.Tuple.get(scrut7, 1);
                                  tmp42 = StrOps.concat2("0x", element1$5);
                                  tmp43 = Token.integer(tmp42, tmp11);
                                  tmp44 = runtime.safeCall(tmp43(param0));
                                  inlinedVal1 = globalThis.Object.freeze([
                                    element0$5,
                                    tmp44
                                  ]);
                                  break inlinedLbl1
                                }
                                scrut9 = digits(param2, tmp11, output3);
                                if (runtime.Tuple.isArrayLike(scrut9) && scrut9.length === 2) {
                                  element0$3 = runtime.Tuple.get(scrut9, 0);
                                  element1$3 = runtime.Tuple.get(scrut9, 1);
                                  integer = element1$3;
                                  idx$_ = element0$3;
                                  break split_1$
                                }
                                scrut10 = digits(param2, tmp11, output3);
                                if (runtime.Tuple.isArrayLike(scrut10) && scrut10.length === 2) {
                                  element0$1 = runtime.Tuple.get(scrut10, 0);
                                  element1$1 = runtime.Tuple.get(scrut10, 1);
                                  integer1 = element1$1;
                                  idx$_1 = element0$1;
                                  scrut11 = char1(param2, element0$1);
                                  if (scrut11 instanceof Option.Some.class) {
                                    arg$Some$0$2 = scrut11.value;
                                    if (arg$Some$0$2 === ".") {
                                      tmp45 = element0$1 + 1;
                                      scrut12 = digits(param2, tmp45, "");
                                      if (runtime.Tuple.isArrayLike(scrut12) && scrut12.length === 2) {
                                        element0$2 = runtime.Tuple.get(scrut12, 0);
                                        element1$2 = runtime.Tuple.get(scrut12, 1);
                                        fraction = element1$2;
                                        idx$_$_ = element0$2;
                                        break split_2$
                                      }
                                    }
                                  }
                                } else {
                                  break split_default$
                                }
                                break;
                              case ".":
                                tmp46 = tmp11 + 1;
                                scrut8 = digits(param2, tmp46, ".");
                                if (runtime.Tuple.isArrayLike(scrut8) && scrut8.length === 2) {
                                  element0$4 = runtime.Tuple.get(scrut8, 0);
                                  element1$4 = runtime.Tuple.get(scrut8, 1);
                                  tmp47 = StrOps.concat2("0.", element1$4);
                                  tmp48 = Token.decimal(tmp47, tmp11);
                                  tmp49 = runtime.safeCall(tmp48(param0));
                                  inlinedVal1 = globalThis.Object.freeze([
                                    element0$4,
                                    tmp49
                                  ]);
                                  break inlinedLbl1
                                }
                                scrut9 = digits(param2, tmp11, output3);
                                if (runtime.Tuple.isArrayLike(scrut9) && scrut9.length === 2) {
                                  element0$3 = runtime.Tuple.get(scrut9, 0);
                                  element1$3 = runtime.Tuple.get(scrut9, 1);
                                  integer = element1$3;
                                  idx$_ = element0$3;
                                  break split_1$
                                }
                                scrut10 = digits(param2, tmp11, output3);
                                if (runtime.Tuple.isArrayLike(scrut10) && scrut10.length === 2) {
                                  element0$1 = runtime.Tuple.get(scrut10, 0);
                                  element1$1 = runtime.Tuple.get(scrut10, 1);
                                  integer1 = element1$1;
                                  idx$_1 = element0$1;
                                  scrut11 = char1(param2, element0$1);
                                  if (scrut11 instanceof Option.Some.class) {
                                    arg$Some$0$2 = scrut11.value;
                                    if (arg$Some$0$2 === ".") {
                                      tmp50 = element0$1 + 1;
                                      scrut12 = digits(param2, tmp50, "");
                                      if (runtime.Tuple.isArrayLike(scrut12) && scrut12.length === 2) {
                                        element0$2 = runtime.Tuple.get(scrut12, 0);
                                        element1$2 = runtime.Tuple.get(scrut12, 1);
                                        fraction = element1$2;
                                        idx$_$_ = element0$2;
                                        break split_2$
                                      }
                                    }
                                  }
                                } else {
                                  break split_default$
                                }
                                break;
                              default:
                                scrut9 = digits(param2, tmp11, output3);
                                if (runtime.Tuple.isArrayLike(scrut9) && scrut9.length === 2) {
                                  element0$3 = runtime.Tuple.get(scrut9, 0);
                                  element1$3 = runtime.Tuple.get(scrut9, 1);
                                  integer = element1$3;
                                  idx$_ = element0$3;
                                  break split_1$
                                }
                                scrut10 = digits(param2, tmp11, output3);
                                if (runtime.Tuple.isArrayLike(scrut10) && scrut10.length === 2) {
                                  element0$1 = runtime.Tuple.get(scrut10, 0);
                                  element1$1 = runtime.Tuple.get(scrut10, 1);
                                  integer1 = element1$1;
                                  idx$_1 = element0$1;
                                  scrut11 = char1(param2, element0$1);
                                  if (scrut11 instanceof Option.Some.class) {
                                    arg$Some$0$2 = scrut11.value;
                                    if (arg$Some$0$2 === ".") {
                                      tmp51 = element0$1 + 1;
                                      scrut12 = digits(param2, tmp51, "");
                                      if (runtime.Tuple.isArrayLike(scrut12) && scrut12.length === 2) {
                                        element0$2 = runtime.Tuple.get(scrut12, 0);
                                        element1$2 = runtime.Tuple.get(scrut12, 1);
                                        fraction = element1$2;
                                        idx$_$_ = element0$2;
                                        break split_2$
                                      }
                                    }
                                  }
                                } else {
                                  break split_default$
                                }
                            }
                          } else {
                            scrut10 = digits(param2, tmp11, output3);
                            if (runtime.Tuple.isArrayLike(scrut10) && scrut10.length === 2) {
                              element0$1 = runtime.Tuple.get(scrut10, 0);
                              element1$1 = runtime.Tuple.get(scrut10, 1);
                              integer1 = element1$1;
                              idx$_1 = element0$1;
                              scrut11 = char1(param2, element0$1);
                              if (scrut11 instanceof Option.Some.class) {
                                arg$Some$0$2 = scrut11.value;
                                if (arg$Some$0$2 === ".") {
                                  tmp52 = element0$1 + 1;
                                  scrut12 = digits(param2, tmp52, "");
                                  if (runtime.Tuple.isArrayLike(scrut12) && scrut12.length === 2) {
                                    element0$2 = runtime.Tuple.get(scrut12, 0);
                                    element1$2 = runtime.Tuple.get(scrut12, 1);
                                    fraction = element1$2;
                                    idx$_$_ = element0$2;
                                    break split_2$
                                  }
                                }
                              }
                            } else {
                              break split_default$
                            }
                          }
                        } else {
                          scrut10 = digits(param2, tmp11, output3);
                          if (runtime.Tuple.isArrayLike(scrut10) && scrut10.length === 2) {
                            element0$1 = runtime.Tuple.get(scrut10, 0);
                            element1$1 = runtime.Tuple.get(scrut10, 1);
                            integer1 = element1$1;
                            idx$_1 = element0$1;
                            scrut11 = char1(param2, element0$1);
                            if (scrut11 instanceof Option.Some.class) {
                              arg$Some$0$2 = scrut11.value;
                              if (arg$Some$0$2 === ".") {
                                tmp53 = element0$1 + 1;
                                scrut12 = digits(param2, tmp53, "");
                                if (runtime.Tuple.isArrayLike(scrut12) && scrut12.length === 2) {
                                  element0$2 = runtime.Tuple.get(scrut12, 0);
                                  element1$2 = runtime.Tuple.get(scrut12, 1);
                                  fraction = element1$2;
                                  idx$_$_ = element0$2;
                                  break split_2$
                                }
                              }
                            }
                          } else {
                            break split_default$
                          }
                        }
                        tmp54 = Token.integer(integer1, tmp11);
                        tmp55 = runtime.safeCall(tmp54(param0));
                        inlinedVal1 = globalThis.Object.freeze([
                          idx$_1,
                          tmp55
                        ]);
                        break inlinedLbl1;
                      }
                      tmp56 = StrOps.concat2(integer1, ".");
                      tmp57 = StrOps.concat2(tmp56, fraction);
                      tmp58 = Token.decimal(tmp57, idx);
                      tmp59 = runtime.safeCall(tmp58(instance$Ident$_LineLookupTable$_1));
                      inlinedVal1 = globalThis.Object.freeze([
                        idx$_$_,
                        tmp59
                      ]);
                      break inlinedLbl1;
                    }
                    tmp60 = Token.integer(integer, idx);
                    tmp61 = runtime.safeCall(tmp60(instance$Ident$_LineLookupTable$_1));
                    inlinedVal1 = globalThis.Object.freeze([
                      idx$_,
                      tmp61
                    ]);
                    break inlinedLbl1;
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                param4 = param5;
                param5 = inlinedVal1;
                id = 1;
                continue loopLabel
              }
              unapplyResult2 = runtime.safeCall(param1.IdentifierStart.unapply(arg$Some$0$));
              if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
                output2 = unapplyResult2.output;
                unapplyResult2.bindings;
                tmp12 = param4 + 1;
                tmp13 = identifier(param0, param1, param2, tmp12, output2);
                param4 = param5;
                param5 = tmp13;
                id = 1;
                continue loopLabel
              }
              unapplyResult = runtime.safeCall(param1.IdentifierQuote.unapply(arg$Some$0$));
              if (unapplyResult instanceof runtime.MatchSuccess.class) {
                output = unapplyResult.output;
                unapplyResult.bindings;
                tmp14 = param4 + 1;
                scrut3 = char1(param2, tmp14);
                if (scrut3 instanceof Option.Some.class) {
                  arg$Some$0$1 = scrut3.value;
                  unapplyResult1 = runtime.safeCall(param1.IdentifierStart.unapply(arg$Some$0$1));
                  if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                    output1 = unapplyResult1.output;
                    unapplyResult1.bindings;
                    tmp15 = param4 + 2;
                    tmp16 = output + output1;
                    scrut2 = identifier(param0, param1, param2, tmp15, tmp16);
                    if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
                      element0$ = runtime.Tuple.get(scrut2, 0);
                      element1$ = runtime.Tuple.get(scrut2, 1);
                      if (element1$ instanceof Token.Identifier.class) {
                        arg$Identifier$0$ = element1$.name;
                        tmp17 = Token.identifier(arg$Identifier$0$, param4);
                        tmp18 = runtime.safeCall(tmp17(param0));
                        param4 = param5;
                        param5 = element0$;
                        param6 = tmp18;
                        id = 0;
                        continue loopLabel
                      }
                      tmp19 = param4 + 1;
                      tmp20 = param4 + 1;
                      tmp21 = Token.error(param4, tmp20);
                      tmp22 = runtime.safeCall(tmp21(param0));
                      param4 = param5;
                      param5 = tmp19;
                      param6 = tmp22;
                      id = 0;
                      continue loopLabel;
                    }
                  }
                }
              }
              tmp23 = StrOps.concat2("Unrecognized character: '", ch);
              tmp24 = StrOps.concat2(tmp23, "'");
              Predef.print(tmp24);
              tmp25 = param4 + 1;
              tmp26 = param4 + 1;
              tmp27 = Token.error(param4, tmp26);
              tmp28 = runtime.safeCall(tmp27(param0));
              param4 = param5;
              param5 = tmp25;
              param6 = tmp28;
              id = 0;
              continue loopLabel;
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        break;
      }
    }
    return inlinedVal
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Lexer"]; 
});
let Lexer = Lexer1; export default Lexer;
