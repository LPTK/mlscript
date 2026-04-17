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
    let scrut, ch, scrut1, arg$Some$0$, tmp, tmp1;
    scrut = char1(str, idx);
    if (scrut instanceof Option.Some.class) {
      arg$Some$0$ = scrut.value;
      ch = arg$Some$0$;
      scrut1 = runtime.safeCall(pred(ch));
      if (scrut1 === true) {
        tmp = idx + 1;
        idx = tmp;
        tmp1 = acc + ch;
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
    let scrut, ch, arg$Some$0$, unapplyResult, output, tmp, tmp1;
    scrut = char1(str, idx);
    if (scrut instanceof Option.Some.class) {
      arg$Some$0$ = scrut.value;
      unapplyResult = runtime.safeCall(Char.Digit.unapply(arg$Some$0$));
      if (unapplyResult instanceof runtime.MatchSuccess.class) {
        output = unapplyResult.output;
        unapplyResult.bindings;
        ch = output;
        tmp = idx + 1;
        idx = tmp;
        tmp1 = acc + ch;
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
    let scrut, ch, arg$Some$0$, unapplyResult, output, tmp4, tmp5;
    scrut = char1(str, idx);
    if (scrut instanceof Option.Some.class) {
      arg$Some$0$ = scrut.value;
      unapplyResult = runtime.safeCall(Lexer2.IdentifierBody.unapply(arg$Some$0$));
      if (unapplyResult instanceof runtime.MatchSuccess.class) {
        output = unapplyResult.output;
        unapplyResult.bindings;
        ch = output;
        tmp4 = idx + 1;
        idx = tmp4;
        tmp5 = acc + ch;
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
    let scrut, ch, arg$Some$0$, unapplyResult, output, tmp2, tmp3;
    scrut = char1(str, idx);
    if (scrut instanceof Option.Some.class) {
      arg$Some$0$ = scrut.value;
      unapplyResult = runtime.safeCall(Lexer2.Operator.unapply(arg$Some$0$));
      if (unapplyResult instanceof runtime.MatchSuccess.class) {
        output = unapplyResult.output;
        unapplyResult.bindings;
        ch = output;
        tmp2 = idx + 1;
        idx = tmp2;
        tmp3 = acc + ch;
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
    let scrut, ch, scrut1, arg$Some$0$, unapplyResult, output, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    scrut = char1(str, idx);
    if (scrut instanceof Option.Some.class) {
      arg$Some$0$ = scrut.value;
      unapplyResult = runtime.safeCall(Char.HexDigit.unapply(arg$Some$0$));
      if (unapplyResult instanceof runtime.MatchSuccess.class) {
        output = unapplyResult.output;
        unapplyResult.bindings;
        ch = output;
        scrut1 = cnt < lim;
        if (scrut1 === true) {
          tmp = idx + 1;
          tmp1 = acc * 16;
          tmp2 = globalThis.parseInt(ch, 16);
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
      let scrut, i$_, scrut1, tmp, tmp1;
      scrut = i < n;
      if (scrut === true) {
        i$_ = text.indexOf("\n", i);
        tmp = - 1;
        scrut1 = Predef.equals(i$_, tmp);
        if (scrut1 === true) {
          i = n;
          runtime.safeCall(ns.push(n));
          continue lbl
        }
        tmp1 = i$_ + 1;
        i = tmp1;
        runtime.safeCall(ns.push(i$_));
        continue lbl;
      }
      break;
    }
    return Token.LineLookupTable(ns)
  } 
  static lex(str, options) {
    let instance$Ident$_LineLookupTable$_, tmp, instance$Ident$_LineLookupTable$_1, Lexer2, str1, options1, idx, acc, inlinedVal, id, param0, param1, param2, param3, param4, param5, param6, inlinedVal1;
    tmp = Lexer.makeLineLookupTable(str);
    instance$Ident$_LineLookupTable$_ = tmp;
    instance$Ident$_LineLookupTable$_1 = instance$Ident$_LineLookupTable$_;
    Lexer2 = Lexer;
    str1 = str;
    options1 = options;
    idx = 0;
    acc = Stack.Nil;
    id = 2;
    param0 = instance$Ident$_LineLookupTable$_1;
    param1 = Lexer2;
    param2 = str1;
    param3 = options1;
    param4 = idx;
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
            let scrut1, ch, idx$_, scrut2, b, ch1, ch2, ch3, quote, ch4, idx$_1, token, name, scrut3, scrut4, arg$Some$0$, unapplyResult, output, arg$Some$0$1, unapplyResult1, output1, element1$, element0$, arg$Identifier$0$, unapplyResult2, output2, unapplyResult3, output3, unapplyResult4, output4, unapplyResult5, output5, unapplyResult6, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31;
            scrut1 = char1(param2, param4);
            if (scrut1 instanceof Option.None.class) {
              inlinedVal1 = Stack.reverse(param5);
              break inlinedLbl
            } else if (scrut1 instanceof Option.Some.class) {
              arg$Some$0$ = scrut1.value;
              ch = arg$Some$0$;
              unapplyResult6 = runtime.safeCall(Char.Whitespace.unapply(ch));
              if (unapplyResult6 instanceof runtime.MatchSuccess.class) {
                let str2, idx1, inlinedVal2;
                unapplyResult6.output;
                unapplyResult6.bindings;
                str2 = param2;
                idx1 = param4;
                lbl: while (true) {
                  let scrut5, arg$Some$0$2, unapplyResult7, tmp32;
                  scrut5 = char1(str2, idx1);
                  if (scrut5 instanceof Option.Some.class) {
                    arg$Some$0$2 = scrut5.value;
                    unapplyResult7 = runtime.safeCall(Char.Whitespace.unapply(arg$Some$0$2));
                    if (unapplyResult7 instanceof runtime.MatchSuccess.class) {
                      unapplyResult7.output;
                      unapplyResult7.bindings;
                      tmp32 = idx1 + 1;
                      idx1 = tmp32;
                      continue lbl
                    }
                  }
                  break;
                }
                inlinedVal2 = idx1;
                scrut2 = inlinedVal2;
                idx$_ = scrut2;
                tmp2 = Token.space(param4, idx$_);
                tmp3 = runtime.safeCall(tmp2(param0));
                param4 = param5;
                param5 = idx$_;
                param6 = tmp3;
                id = 0;
                continue loopLabel
              }
              if (ch === "\"") {
                let instance$Ident$_LineLookupTable$_2, str2, idx1, inlinedVal2, startIndex, content, terminated, tmp32, tmp33;
                tmp4 = param4 + 1;
                instance$Ident$_LineLookupTable$_2 = param0;
                str2 = param2;
                idx1 = tmp4;
                startIndex = idx1;
                content = "";
                terminated = false;
                lbl: while (true) {
                  let scrut5, scrut6, idx$_2, chOpt, ch5, ch6, arg$Some$0$2, tmp34, element1$1, element0$1, tmp35, arg$Some$0$3, tmp36, tmp37, tmp38;
                  if (terminated === false) {
                    scrut5 = char1(str2, idx1);
                    if (scrut5 instanceof Option.Some.class) {
                      arg$Some$0$2 = scrut5.value;
                      switch (arg$Some$0$2) {
                        case "\"":
                          terminated = true;
                          tmp34 = idx1 + 1;
                          idx1 = tmp34;
                          continue lbl;
                        case "\\":
                          let str3, idx2, inlinedVal3;
                          tmp35 = idx1 + 1;
                          str3 = str2;
                          idx2 = tmp35;
                          inlinedLbl1: {
                            let scrut7, scrut8, idx3, cp, cnt, scrut9, scrut10, idx4, cp1, cnt1, idx5, scrut11, scrut12, idx6, cp2, cnt2, ch7, arg$Some$0$4, arg$Some$0$5, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, element2$, element1$2, element0$2, tmp55, tmp56, tmp57, tmp58, element2$1, element1$3, element0$3, tmp59, arg$Some$0$6, tmp60, tmp61, tmp62, tmp63, tmp64, element2$2, element1$4, element0$4, tmp65, tmp66, tmp67, tmp68;
                            scrut7 = char1(str3, idx2);
                            if (scrut7 instanceof Option.Some.class) {
                              arg$Some$0$4 = scrut7.value;
                              switch (arg$Some$0$4) {
                                case "n":
                                  tmp39 = idx2 + 1;
                                  tmp40 = Option.Some("\n");
                                  inlinedVal3 = globalThis.Object.freeze([
                                    tmp39,
                                    tmp40
                                  ]);
                                  break;
                                case "r":
                                  tmp41 = idx2 + 1;
                                  tmp42 = Option.Some("\r");
                                  inlinedVal3 = globalThis.Object.freeze([
                                    tmp41,
                                    tmp42
                                  ]);
                                  break;
                                case "t":
                                  tmp43 = idx2 + 1;
                                  tmp44 = Option.Some("\t");
                                  inlinedVal3 = globalThis.Object.freeze([
                                    tmp43,
                                    tmp44
                                  ]);
                                  break;
                                case "0":
                                  tmp45 = idx2 + 1;
                                  tmp46 = Option.Some("\u0000");
                                  inlinedVal3 = globalThis.Object.freeze([
                                    tmp45,
                                    tmp46
                                  ]);
                                  break;
                                case "b":
                                  tmp47 = idx2 + 1;
                                  tmp48 = Option.Some("\b");
                                  inlinedVal3 = globalThis.Object.freeze([
                                    tmp47,
                                    tmp48
                                  ]);
                                  break;
                                case "f":
                                  tmp49 = idx2 + 1;
                                  tmp50 = Option.Some("\f");
                                  inlinedVal3 = globalThis.Object.freeze([
                                    tmp49,
                                    tmp50
                                  ]);
                                  break;
                                case "\"":
                                  tmp51 = idx2 + 1;
                                  tmp52 = Option.Some("\"");
                                  inlinedVal3 = globalThis.Object.freeze([
                                    tmp51,
                                    tmp52
                                  ]);
                                  break;
                                case "\\":
                                  tmp53 = idx2 + 1;
                                  tmp54 = Option.Some("\\");
                                  inlinedVal3 = globalThis.Object.freeze([
                                    tmp53,
                                    tmp54
                                  ]);
                                  break;
                                case "x":
                                  tmp55 = idx2 + 1;
                                  scrut8 = scanHexDigits(str3, tmp55, 2, 0, 0);
                                  if (runtime.Tuple.isArrayLike(scrut8) && scrut8.length === 3) {
                                    element0$2 = runtime.Tuple.get(scrut8, 0);
                                    element1$2 = runtime.Tuple.get(scrut8, 1);
                                    element2$ = runtime.Tuple.get(scrut8, 2);
                                    cnt = element2$;
                                    cp = element1$2;
                                    idx3 = element0$2;
                                    if (cnt === 0) {
                                      tmp56 = Option.None;
                                      inlinedVal3 = Predef.tuple(idx3, tmp56);
                                    } else {
                                      tmp57 = globalThis.String.fromCodePoint(cp);
                                      tmp56 = Option.Some(tmp57);
                                      inlinedVal3 = Predef.tuple(idx3, tmp56);
                                    }
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  break;
                                case "u":
                                  tmp58 = idx2 + 1;
                                  scrut9 = char1(str3, tmp58);
                                  if (scrut9 instanceof Option.Some.class) {
                                    arg$Some$0$5 = scrut9.value;
                                    if (arg$Some$0$5 === "{") {
                                      tmp59 = idx2 + 2;
                                      scrut10 = scanHexDigits(str3, tmp59, 6, 0, 0);
                                      if (runtime.Tuple.isArrayLike(scrut10) && scrut10.length === 3) {
                                        element0$3 = runtime.Tuple.get(scrut10, 0);
                                        element1$3 = runtime.Tuple.get(scrut10, 1);
                                        element2$1 = runtime.Tuple.get(scrut10, 2);
                                        cnt1 = element2$1;
                                        cp1 = element1$3;
                                        idx4 = element0$3;
                                        scrut11 = char1(str3, idx4);
                                        if (scrut11 instanceof Option.Some.class) {
                                          arg$Some$0$6 = scrut11.value;
                                          if (arg$Some$0$6 === "}") {
                                            tmp60 = idx4 + 1;
                                          } else {
                                            tmp60 = idx4;
                                          }
                                        } else {
                                          tmp60 = idx4;
                                        }
                                        idx5 = tmp60;
                                        if (cnt1 === 0) {
                                          tmp61 = Option.None;
                                          inlinedVal3 = Predef.tuple(idx5, tmp61);
                                          break inlinedLbl1
                                        }
                                        tmp62 = globalThis.String.fromCodePoint(cp1);
                                        tmp61 = Option.Some(tmp62);
                                        inlinedVal3 = Predef.tuple(idx5, tmp61);
                                        break inlinedLbl1;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                  }
                                  tmp65 = idx2 + 1;
                                  scrut12 = scanHexDigits(str3, tmp65, 4, 0, 0);
                                  if (runtime.Tuple.isArrayLike(scrut12) && scrut12.length === 3) {
                                    element0$4 = runtime.Tuple.get(scrut12, 0);
                                    element1$4 = runtime.Tuple.get(scrut12, 1);
                                    element2$2 = runtime.Tuple.get(scrut12, 2);
                                    cnt2 = element2$2;
                                    cp2 = element1$4;
                                    idx6 = element0$4;
                                    if (cnt2 === 0) {
                                      tmp66 = Option.None;
                                    } else {
                                      tmp67 = globalThis.String.fromCodePoint(cp2);
                                      tmp66 = Option.Some(tmp67);
                                    }
                                    tmp68 = Predef.tuple(idx6, tmp66);
                                    inlinedVal3 = tmp68;
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  break;
                                default:
                                  ch7 = arg$Some$0$4;
                                  tmp63 = idx2 + 1;
                                  tmp64 = Option.Some(ch7);
                                  inlinedVal3 = globalThis.Object.freeze([
                                    tmp63,
                                    tmp64
                                  ]);
                              }
                            } else if (scrut7 instanceof Option.None.class) {
                              inlinedVal3 = globalThis.Object.freeze([
                                idx2,
                                Option.None
                              ]);
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                          }
                          scrut6 = inlinedVal3;
                          if (runtime.Tuple.isArrayLike(scrut6) && scrut6.length === 2) {
                            element0$1 = runtime.Tuple.get(scrut6, 0);
                            element1$1 = runtime.Tuple.get(scrut6, 1);
                            chOpt = element1$1;
                            idx$_2 = element0$1;
                            idx1 = idx$_2;
                            if (chOpt instanceof Option.Some.class) {
                              arg$Some$0$3 = chOpt.value;
                              ch5 = arg$Some$0$3;
                              tmp36 = content + ch5;
                              content = tmp36;
                              continue lbl
                            }
                            continue lbl;
                          }
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                      }
                      ch6 = arg$Some$0$2;
                      tmp37 = idx1 + 1;
                      idx1 = tmp37;
                      tmp38 = content + ch6;
                      content = tmp38;
                      continue lbl
                    } else if (scrut5 instanceof Option.None.class) {
                      terminated = true;
                      continue lbl
                    }
                    continue lbl;
                  }
                  break;
                }
                tmp32 = Token.string(content, startIndex, idx1);
                tmp33 = runtime.safeCall(tmp32(instance$Ident$_LineLookupTable$_2));
                inlinedVal2 = globalThis.Object.freeze([
                  idx1,
                  tmp33
                ]);
                tmp5 = inlinedVal2;
                param4 = param5;
                param5 = tmp5;
                id = 1;
                continue loopLabel
              }
              unapplyResult5 = runtime.safeCall(param1.Bracket.unapply(ch));
              if (unapplyResult5 instanceof runtime.MatchSuccess.class) {
                output5 = unapplyResult5.output;
                unapplyResult5.bindings;
                b = output5;
                tmp6 = param4 + 1;
                tmp7 = Token.symbol(b, param4);
                tmp8 = runtime.safeCall(tmp7(param0));
                param4 = param5;
                param5 = tmp6;
                param6 = tmp8;
                id = 0;
                continue loopLabel
              }
              if (ch === "/") {
                let instance$Ident$_LineLookupTable$_2, Lexer3, str2, idx1, inlinedVal2, start, content, scrut5, terminated, arg$Some$0$2, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39;
                tmp9 = param4 + 1;
                instance$Ident$_LineLookupTable$_2 = param0;
                Lexer3 = param1;
                str2 = param2;
                idx1 = tmp9;
                start = idx1;
                content = "";
                scrut5 = char1(str2, idx1);
                if (scrut5 instanceof Option.Some.class) {
                  arg$Some$0$2 = scrut5.value;
                  switch (arg$Some$0$2) {
                    case "/":
                      tmp32 = idx1 + 1;
                      idx1 = tmp32;
                      lbl: while (true) {
                        let scrut6, ch5, scrut7, arg$Some$0$3, tmp40, tmp41;
                        scrut6 = char1(str2, idx1);
                        if (scrut6 instanceof Option.Some.class) {
                          arg$Some$0$3 = scrut6.value;
                          ch5 = arg$Some$0$3;
                          scrut7 = ch5 !== "\n";
                          if (scrut7 === true) {
                            tmp40 = idx1 + 1;
                            idx1 = tmp40;
                            tmp41 = content + ch5;
                            content = tmp41;
                            continue lbl
                          }
                        }
                        break;
                      }
                      tmp33 = Token.comment(content, start, idx1);
                      tmp34 = runtime.safeCall(tmp33(instance$Ident$_LineLookupTable$_2));
                      inlinedVal2 = globalThis.Object.freeze([
                        idx1,
                        tmp34
                      ]);
                      break;
                    case "*":
                      terminated = false;
                      tmp35 = idx1 + 1;
                      idx1 = tmp35;
                      lbl1: while (true) {
                        let scrut6, scrut7, ch5, arg$Some$0$3, arg$Some$0$4, tmp40, tmp41, tmp42, tmp43;
                        if (terminated === false) {
                          scrut6 = char1(str2, idx1);
                          if (scrut6 instanceof Option.Some.class) {
                            arg$Some$0$3 = scrut6.value;
                            if (arg$Some$0$3 === "*") {
                              tmp40 = idx1 + 1;
                              scrut7 = char1(str2, tmp40);
                              if (scrut7 instanceof Option.Some.class) {
                                arg$Some$0$4 = scrut7.value;
                                if (arg$Some$0$4 === "/") {
                                  tmp41 = idx1 + 2;
                                  idx1 = tmp41;
                                  terminated = true;
                                  continue lbl1
                                }
                                ch5 = arg$Some$0$3;
                              } else {
                                ch5 = arg$Some$0$3;
                              }
                            } else {
                              ch5 = arg$Some$0$3;
                            }
                            tmp42 = idx1 + 1;
                            idx1 = tmp42;
                            tmp43 = content + ch5;
                            content = tmp43;
                            continue lbl1
                          }
                        }
                        break;
                      }
                      if (terminated === true) {
                        tmp36 = Token.comment(content, start, idx1);
                        tmp37 = runtime.safeCall(tmp36(instance$Ident$_LineLookupTable$_2));
                        inlinedVal2 = globalThis.Object.freeze([
                          idx1,
                          tmp37
                        ]);
                      } else {
                        tmp38 = Token.error(start, idx1);
                        tmp39 = runtime.safeCall(tmp38(instance$Ident$_LineLookupTable$_2));
                        inlinedVal2 = globalThis.Object.freeze([
                          idx1,
                          tmp39
                        ]);
                      }
                      break;
                    default:
                      inlinedVal2 = operator(instance$Ident$_LineLookupTable$_2, Lexer3, str2, idx1, "/");
                  }
                } else {
                  inlinedVal2 = operator(instance$Ident$_LineLookupTable$_2, Lexer3, str2, idx1, "/");
                }
                tmp10 = inlinedVal2;
                param4 = param5;
                param5 = tmp10;
                id = 1;
                continue loopLabel
              }
              unapplyResult4 = runtime.safeCall(param1.Operator.unapply(ch));
              if (unapplyResult4 instanceof runtime.MatchSuccess.class) {
                output4 = unapplyResult4.output;
                unapplyResult4.bindings;
                ch1 = output4;
                tmp11 = param4 + 1;
                tmp12 = operator(param0, param1, param2, tmp11, ch1);
                param4 = param5;
                param5 = tmp12;
                id = 1;
                continue loopLabel
              }
              unapplyResult3 = runtime.safeCall(Char.Digit.unapply(ch));
              if (unapplyResult3 instanceof runtime.MatchSuccess.class) {
                let instance$Ident$_LineLookupTable$_2, str2, idx1, head, inlinedVal2;
                output3 = unapplyResult3.output;
                unapplyResult3.bindings;
                ch2 = output3;
                tmp13 = param4 + 1;
                instance$Ident$_LineLookupTable$_2 = param0;
                str2 = param2;
                idx1 = tmp13;
                head = ch2;
                inlinedLbl1: {
                  let scrut5, idx$_2, bs, scrut6, idx$_3, os, scrut7, idx$_4, xs, scrut8, idx$_5, ds, scrut9, idx$_6, integer, scrut10, scrut11, idx$_7, integer1, scrut12, fraction, idx$_$_, scrut13, element1$1, element0$1, arg$Some$0$2, element1$2, element0$2, arg$Some$0$3, element1$3, element0$3, element1$4, element0$4, element1$5, element0$5, element1$6, element0$6, element1$7, element0$7, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64;
                  split_default$: {
                    split_1$: {
                      split_2$: {
                        if (head === "0") {
                          scrut5 = char1(str2, idx1);
                          if (scrut5 instanceof Option.None.class) {
                            tmp32 = Token.integer("0", idx1);
                            tmp33 = runtime.safeCall(tmp32(instance$Ident$_LineLookupTable$_2));
                            inlinedVal2 = globalThis.Object.freeze([
                              idx1,
                              tmp33
                            ]);
                            break inlinedLbl1
                          } else if (scrut5 instanceof Option.Some.class) {
                            arg$Some$0$3 = scrut5.value;
                            switch (arg$Some$0$3) {
                              case "b":
                                tmp34 = idx1 + 1;
                                scrut6 = take(str2, lambda, tmp34, "");
                                if (runtime.Tuple.isArrayLike(scrut6) && scrut6.length === 2) {
                                  element0$7 = runtime.Tuple.get(scrut6, 0);
                                  element1$7 = runtime.Tuple.get(scrut6, 1);
                                  bs = element1$7;
                                  idx$_2 = element0$7;
                                  tmp35 = StrOps.concat2("0b", bs);
                                  tmp36 = Token.integer(tmp35, idx1);
                                  tmp37 = runtime.safeCall(tmp36(instance$Ident$_LineLookupTable$_2));
                                  inlinedVal2 = globalThis.Object.freeze([
                                    idx$_2,
                                    tmp37
                                  ]);
                                  break inlinedLbl1
                                }
                                scrut10 = digits(str2, idx1, head);
                                if (runtime.Tuple.isArrayLike(scrut10) && scrut10.length === 2) {
                                  element0$3 = runtime.Tuple.get(scrut10, 0);
                                  element1$3 = runtime.Tuple.get(scrut10, 1);
                                  integer = element1$3;
                                  idx$_6 = element0$3;
                                  break split_1$
                                }
                                scrut11 = digits(str2, idx1, head);
                                if (runtime.Tuple.isArrayLike(scrut11) && scrut11.length === 2) {
                                  element0$1 = runtime.Tuple.get(scrut11, 0);
                                  element1$1 = runtime.Tuple.get(scrut11, 1);
                                  integer1 = element1$1;
                                  idx$_7 = element0$1;
                                  scrut12 = char1(str2, idx$_7);
                                  if (scrut12 instanceof Option.Some.class) {
                                    arg$Some$0$2 = scrut12.value;
                                    if (arg$Some$0$2 === ".") {
                                      tmp38 = idx$_7 + 1;
                                      scrut13 = digits(str2, tmp38, "");
                                      if (runtime.Tuple.isArrayLike(scrut13) && scrut13.length === 2) {
                                        element0$2 = runtime.Tuple.get(scrut13, 0);
                                        element1$2 = runtime.Tuple.get(scrut13, 1);
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
                                tmp39 = idx1 + 1;
                                scrut7 = take(str2, lambda1, tmp39, "");
                                if (runtime.Tuple.isArrayLike(scrut7) && scrut7.length === 2) {
                                  element0$6 = runtime.Tuple.get(scrut7, 0);
                                  element1$6 = runtime.Tuple.get(scrut7, 1);
                                  os = element1$6;
                                  idx$_3 = element0$6;
                                  tmp40 = StrOps.concat2("0o", os);
                                  tmp41 = Token.integer(tmp40, idx1);
                                  tmp42 = runtime.safeCall(tmp41(instance$Ident$_LineLookupTable$_2));
                                  inlinedVal2 = globalThis.Object.freeze([
                                    idx$_3,
                                    tmp42
                                  ]);
                                  break inlinedLbl1
                                }
                                scrut10 = digits(str2, idx1, head);
                                if (runtime.Tuple.isArrayLike(scrut10) && scrut10.length === 2) {
                                  element0$3 = runtime.Tuple.get(scrut10, 0);
                                  element1$3 = runtime.Tuple.get(scrut10, 1);
                                  integer = element1$3;
                                  idx$_6 = element0$3;
                                  break split_1$
                                }
                                scrut11 = digits(str2, idx1, head);
                                if (runtime.Tuple.isArrayLike(scrut11) && scrut11.length === 2) {
                                  element0$1 = runtime.Tuple.get(scrut11, 0);
                                  element1$1 = runtime.Tuple.get(scrut11, 1);
                                  integer1 = element1$1;
                                  idx$_7 = element0$1;
                                  scrut12 = char1(str2, idx$_7);
                                  if (scrut12 instanceof Option.Some.class) {
                                    arg$Some$0$2 = scrut12.value;
                                    if (arg$Some$0$2 === ".") {
                                      tmp43 = idx$_7 + 1;
                                      scrut13 = digits(str2, tmp43, "");
                                      if (runtime.Tuple.isArrayLike(scrut13) && scrut13.length === 2) {
                                        element0$2 = runtime.Tuple.get(scrut13, 0);
                                        element1$2 = runtime.Tuple.get(scrut13, 1);
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
                                tmp44 = idx1 + 1;
                                scrut8 = take(str2, lambda2, tmp44, "");
                                if (runtime.Tuple.isArrayLike(scrut8) && scrut8.length === 2) {
                                  element0$5 = runtime.Tuple.get(scrut8, 0);
                                  element1$5 = runtime.Tuple.get(scrut8, 1);
                                  xs = element1$5;
                                  idx$_4 = element0$5;
                                  tmp45 = StrOps.concat2("0x", xs);
                                  tmp46 = Token.integer(tmp45, idx1);
                                  tmp47 = runtime.safeCall(tmp46(instance$Ident$_LineLookupTable$_2));
                                  inlinedVal2 = globalThis.Object.freeze([
                                    idx$_4,
                                    tmp47
                                  ]);
                                  break inlinedLbl1
                                }
                                scrut10 = digits(str2, idx1, head);
                                if (runtime.Tuple.isArrayLike(scrut10) && scrut10.length === 2) {
                                  element0$3 = runtime.Tuple.get(scrut10, 0);
                                  element1$3 = runtime.Tuple.get(scrut10, 1);
                                  integer = element1$3;
                                  idx$_6 = element0$3;
                                  break split_1$
                                }
                                scrut11 = digits(str2, idx1, head);
                                if (runtime.Tuple.isArrayLike(scrut11) && scrut11.length === 2) {
                                  element0$1 = runtime.Tuple.get(scrut11, 0);
                                  element1$1 = runtime.Tuple.get(scrut11, 1);
                                  integer1 = element1$1;
                                  idx$_7 = element0$1;
                                  scrut12 = char1(str2, idx$_7);
                                  if (scrut12 instanceof Option.Some.class) {
                                    arg$Some$0$2 = scrut12.value;
                                    if (arg$Some$0$2 === ".") {
                                      tmp48 = idx$_7 + 1;
                                      scrut13 = digits(str2, tmp48, "");
                                      if (runtime.Tuple.isArrayLike(scrut13) && scrut13.length === 2) {
                                        element0$2 = runtime.Tuple.get(scrut13, 0);
                                        element1$2 = runtime.Tuple.get(scrut13, 1);
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
                                tmp49 = idx1 + 1;
                                scrut9 = digits(str2, tmp49, ".");
                                if (runtime.Tuple.isArrayLike(scrut9) && scrut9.length === 2) {
                                  element0$4 = runtime.Tuple.get(scrut9, 0);
                                  element1$4 = runtime.Tuple.get(scrut9, 1);
                                  ds = element1$4;
                                  idx$_5 = element0$4;
                                  tmp50 = StrOps.concat2("0.", ds);
                                  tmp51 = Token.decimal(tmp50, idx1);
                                  tmp52 = runtime.safeCall(tmp51(instance$Ident$_LineLookupTable$_2));
                                  inlinedVal2 = globalThis.Object.freeze([
                                    idx$_5,
                                    tmp52
                                  ]);
                                  break inlinedLbl1
                                }
                                scrut10 = digits(str2, idx1, head);
                                if (runtime.Tuple.isArrayLike(scrut10) && scrut10.length === 2) {
                                  element0$3 = runtime.Tuple.get(scrut10, 0);
                                  element1$3 = runtime.Tuple.get(scrut10, 1);
                                  integer = element1$3;
                                  idx$_6 = element0$3;
                                  break split_1$
                                }
                                scrut11 = digits(str2, idx1, head);
                                if (runtime.Tuple.isArrayLike(scrut11) && scrut11.length === 2) {
                                  element0$1 = runtime.Tuple.get(scrut11, 0);
                                  element1$1 = runtime.Tuple.get(scrut11, 1);
                                  integer1 = element1$1;
                                  idx$_7 = element0$1;
                                  scrut12 = char1(str2, idx$_7);
                                  if (scrut12 instanceof Option.Some.class) {
                                    arg$Some$0$2 = scrut12.value;
                                    if (arg$Some$0$2 === ".") {
                                      tmp53 = idx$_7 + 1;
                                      scrut13 = digits(str2, tmp53, "");
                                      if (runtime.Tuple.isArrayLike(scrut13) && scrut13.length === 2) {
                                        element0$2 = runtime.Tuple.get(scrut13, 0);
                                        element1$2 = runtime.Tuple.get(scrut13, 1);
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
                                scrut10 = digits(str2, idx1, head);
                                if (runtime.Tuple.isArrayLike(scrut10) && scrut10.length === 2) {
                                  element0$3 = runtime.Tuple.get(scrut10, 0);
                                  element1$3 = runtime.Tuple.get(scrut10, 1);
                                  integer = element1$3;
                                  idx$_6 = element0$3;
                                  break split_1$
                                }
                                scrut11 = digits(str2, idx1, head);
                                if (runtime.Tuple.isArrayLike(scrut11) && scrut11.length === 2) {
                                  element0$1 = runtime.Tuple.get(scrut11, 0);
                                  element1$1 = runtime.Tuple.get(scrut11, 1);
                                  integer1 = element1$1;
                                  idx$_7 = element0$1;
                                  scrut12 = char1(str2, idx$_7);
                                  if (scrut12 instanceof Option.Some.class) {
                                    arg$Some$0$2 = scrut12.value;
                                    if (arg$Some$0$2 === ".") {
                                      tmp54 = idx$_7 + 1;
                                      scrut13 = digits(str2, tmp54, "");
                                      if (runtime.Tuple.isArrayLike(scrut13) && scrut13.length === 2) {
                                        element0$2 = runtime.Tuple.get(scrut13, 0);
                                        element1$2 = runtime.Tuple.get(scrut13, 1);
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
                            scrut11 = digits(str2, idx1, head);
                            if (runtime.Tuple.isArrayLike(scrut11) && scrut11.length === 2) {
                              element0$1 = runtime.Tuple.get(scrut11, 0);
                              element1$1 = runtime.Tuple.get(scrut11, 1);
                              integer1 = element1$1;
                              idx$_7 = element0$1;
                              scrut12 = char1(str2, idx$_7);
                              if (scrut12 instanceof Option.Some.class) {
                                arg$Some$0$2 = scrut12.value;
                                if (arg$Some$0$2 === ".") {
                                  tmp55 = idx$_7 + 1;
                                  scrut13 = digits(str2, tmp55, "");
                                  if (runtime.Tuple.isArrayLike(scrut13) && scrut13.length === 2) {
                                    element0$2 = runtime.Tuple.get(scrut13, 0);
                                    element1$2 = runtime.Tuple.get(scrut13, 1);
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
                          scrut11 = digits(str2, idx1, head);
                          if (runtime.Tuple.isArrayLike(scrut11) && scrut11.length === 2) {
                            element0$1 = runtime.Tuple.get(scrut11, 0);
                            element1$1 = runtime.Tuple.get(scrut11, 1);
                            integer1 = element1$1;
                            idx$_7 = element0$1;
                            scrut12 = char1(str2, idx$_7);
                            if (scrut12 instanceof Option.Some.class) {
                              arg$Some$0$2 = scrut12.value;
                              if (arg$Some$0$2 === ".") {
                                tmp56 = idx$_7 + 1;
                                scrut13 = digits(str2, tmp56, "");
                                if (runtime.Tuple.isArrayLike(scrut13) && scrut13.length === 2) {
                                  element0$2 = runtime.Tuple.get(scrut13, 0);
                                  element1$2 = runtime.Tuple.get(scrut13, 1);
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
                        tmp57 = Token.integer(integer1, idx1);
                        tmp58 = runtime.safeCall(tmp57(instance$Ident$_LineLookupTable$_2));
                        inlinedVal2 = globalThis.Object.freeze([
                          idx$_7,
                          tmp58
                        ]);
                        break inlinedLbl1;
                      }
                      tmp59 = StrOps.concat2(integer1, ".");
                      tmp60 = StrOps.concat2(tmp59, fraction);
                      tmp61 = Token.decimal(tmp60, idx1);
                      tmp62 = runtime.safeCall(tmp61(instance$Ident$_LineLookupTable$_2));
                      inlinedVal2 = globalThis.Object.freeze([
                        idx$_$_,
                        tmp62
                      ]);
                      break inlinedLbl1;
                    }
                    tmp63 = Token.integer(integer, idx1);
                    tmp64 = runtime.safeCall(tmp63(instance$Ident$_LineLookupTable$_2));
                    inlinedVal2 = globalThis.Object.freeze([
                      idx$_6,
                      tmp64
                    ]);
                    break inlinedLbl1;
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                tmp14 = inlinedVal2;
                param4 = param5;
                param5 = tmp14;
                id = 1;
                continue loopLabel
              }
              unapplyResult2 = runtime.safeCall(param1.IdentifierStart.unapply(ch));
              if (unapplyResult2 instanceof runtime.MatchSuccess.class) {
                output2 = unapplyResult2.output;
                unapplyResult2.bindings;
                ch3 = output2;
                tmp15 = param4 + 1;
                tmp16 = identifier(param0, param1, param2, tmp15, ch3);
                param4 = param5;
                param5 = tmp16;
                id = 1;
                continue loopLabel
              }
              unapplyResult = runtime.safeCall(param1.IdentifierQuote.unapply(ch));
              if (unapplyResult instanceof runtime.MatchSuccess.class) {
                output = unapplyResult.output;
                unapplyResult.bindings;
                quote = output;
                tmp17 = param4 + 1;
                scrut4 = char1(param2, tmp17);
                if (scrut4 instanceof Option.Some.class) {
                  arg$Some$0$1 = scrut4.value;
                  unapplyResult1 = runtime.safeCall(param1.IdentifierStart.unapply(arg$Some$0$1));
                  if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
                    output1 = unapplyResult1.output;
                    unapplyResult1.bindings;
                    ch4 = output1;
                    tmp18 = param4 + 2;
                    tmp19 = quote + ch4;
                    scrut3 = identifier(param0, param1, param2, tmp18, tmp19);
                    if (runtime.Tuple.isArrayLike(scrut3) && scrut3.length === 2) {
                      element0$ = runtime.Tuple.get(scrut3, 0);
                      element1$ = runtime.Tuple.get(scrut3, 1);
                      token = element1$;
                      idx$_1 = element0$;
                      if (token instanceof Token.Identifier.class) {
                        arg$Identifier$0$ = token.name;
                        name = arg$Identifier$0$;
                        tmp20 = Token.identifier(name, param4);
                        tmp21 = runtime.safeCall(tmp20(param0));
                        param4 = param5;
                        param5 = idx$_1;
                        param6 = tmp21;
                        id = 0;
                        continue loopLabel
                      }
                      tmp22 = param4 + 1;
                      tmp23 = param4 + 1;
                      tmp24 = Token.error(param4, tmp23);
                      tmp25 = runtime.safeCall(tmp24(param0));
                      param4 = param5;
                      param5 = tmp22;
                      param6 = tmp25;
                      id = 0;
                      continue loopLabel;
                    }
                  }
                }
              }
              tmp26 = StrOps.concat2("Unrecognized character: '", ch);
              tmp27 = StrOps.concat2(tmp26, "'");
              Predef.print(tmp27);
              tmp28 = param4 + 1;
              tmp29 = param4 + 1;
              tmp30 = Token.error(param4, tmp29);
              tmp31 = runtime.safeCall(tmp30(param0));
              param4 = param5;
              param5 = tmp28;
              param6 = tmp31;
              id = 0;
              continue loopLabel;
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        break;
      }
    }
    inlinedVal = inlinedVal1;
    return inlinedVal
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Lexer"]; 
});
let Lexer = Lexer1; export default Lexer;
