const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Option from "./../../Option.mjs";
import Predef from "./../../Predef.mjs";
let Token2;
(class Token {
  static {
    Token2 = this
  }
  static {
    (class Angle {
      static {
        new this
      }
      constructor() {
        Token.Angle = this;
        Object.defineProperty(this, "class", {
          value: Angle
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Angle"]; 
    });
    (class Round {
      static {
        new this
      }
      constructor() {
        Token.Round = this;
        Object.defineProperty(this, "class", {
          value: Round
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Round"]; 
    });
    (class Square {
      static {
        new this
      }
      constructor() {
        Token.Square = this;
        Object.defineProperty(this, "class", {
          value: Square
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Square"]; 
    });
    (class Curly {
      static {
        new this
      }
      constructor() {
        Token.Curly = this;
        Object.defineProperty(this, "class", {
          value: Curly
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Curly"]; 
    });
    (class BeginEnd {
      static {
        new this
      }
      constructor() {
        Token.BeginEnd = this;
        Object.defineProperty(this, "class", {
          value: BeginEnd
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "BeginEnd"]; 
    });
    (class LiteralKind {
      static {
        Token.LiteralKind = this
      }
      static {
        (class Integer {
          static {
            new this
          }
          constructor() {
            LiteralKind.Integer = this;
            Object.defineProperty(this, "class", {
              value: Integer
            });
            globalThis.Object.freeze(this);
          }
          toString() { return runtime.render(this); }
          static [definitionMetadata] = ["object", "Integer"]; 
        });
        (class Decimal {
          static {
            new this
          }
          constructor() {
            LiteralKind.Decimal = this;
            Object.defineProperty(this, "class", {
              value: Decimal
            });
            globalThis.Object.freeze(this);
          }
          toString() { return runtime.render(this); }
          static [definitionMetadata] = ["object", "Decimal"]; 
        });
        (class String {
          static {
            new this
          }
          constructor() {
            LiteralKind.String = this;
            Object.defineProperty(this, "class", {
              value: String
            });
            globalThis.Object.freeze(this);
          }
          toString() { return runtime.render(this); }
          static [definitionMetadata] = ["object", "String"]; 
        });
        (class Boolean {
          static {
            new this
          }
          constructor() {
            LiteralKind.Boolean = this;
            Object.defineProperty(this, "class", {
              value: Boolean
            });
            globalThis.Object.freeze(this);
          }
          toString() { return runtime.render(this); }
          static [definitionMetadata] = ["object", "Boolean"]; 
        });
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LiteralKind"]; 
    });
    (class Token1 {
      static {
        Token.Token = this
      }
      constructor() {
        this.#_location = Option.None;
      }
      #_location;
      withLocation(start, end, lookupTable) {
        let rcd, tmp;
        rcd = globalThis.Object.freeze({
          start: start,
          end: end,
          lookupTable: lookupTable
        });
        tmp = Option.Some(rcd);
        this.#_location = tmp;
        return this
      } 
      get location() {
        return this.#_location;
      } 
      get displayLocation() {
        let location, start, end, arg$Some$0$, tmp, tmp1, tmp2, tmp3;
        if (this.#_location instanceof Option.Some.class) {
          arg$Some$0$ = this.#_location.value;
          location = arg$Some$0$;
          start = runtime.safeCall(location.lookupTable.lookup(location.start));
          end = runtime.safeCall(location.lookupTable.lookup(location.end));
          tmp = runtime.safeCall(start[0].toString());
          tmp1 = runtime.safeCall(start[1].toString());
          tmp2 = runtime.safeCall(end[0].toString());
          tmp3 = runtime.safeCall(end[1].toString());
          return Predef.mkStr(tmp, ":", tmp1, "-", tmp2, ":", tmp3)
        }
        return "";
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Token"]; 
    });
    this.LineLookupTable = function LineLookupTable(lines) {
      return globalThis.Object.freeze(new LineLookupTable.class(lines));
    };
    (class LineLookupTable {
      static {
        Token.LineLookupTable.class = this
      }
      constructor(lines) {
        this.#lines = lines;
      }
      #lines;
      lookup(index) {
        let scrut, begin, end, mid, line, column, scrut1, tmp, tmp1, tmp2, tmp3;
        scrut = index < 0;
        if (scrut === true) {
          index = 0;
        }
        begin = 0;
        end = this.#lines.length;
        tmp = begin + end;
        tmp1 = tmp / 2;
        mid = runtime.safeCall(globalThis.Math.floor(tmp1));
        lbl: while (true) {
          let scrut2, scrut3, tmp4, tmp5, tmp6, tmp7, tmp8;
          scrut2 = begin < end;
          if (scrut2 === true) {
            tmp4 = runtime.safeCall(this.#lines.at(mid));
            scrut3 = index <= tmp4;
            if (scrut3 === true) {
              end = mid;
            } else {
              tmp5 = mid + 1;
              begin = tmp5;
            }
            tmp6 = begin + end;
            tmp7 = tmp6 / 2;
            tmp8 = runtime.safeCall(globalThis.Math.floor(tmp7));
            mid = tmp8;
            continue lbl
          }
          break;
        }
        line = mid + 1;
        scrut1 = mid == 0;
        if (scrut1 === true) {
          tmp2 = - 1;
        } else {
          tmp3 = mid - 1;
          tmp2 = runtime.safeCall(this.#lines.at(tmp3));
        }
        column = index - tmp2;
        return globalThis.Object.freeze([
          line,
          column
        ])
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LineLookupTable", [null]]; 
    });
    this.Space = function Space() {
      return globalThis.Object.freeze(new Space.class());
    };
    (class Space extends Token.Token {
      static {
        Token.Space.class = this
      }
      constructor() {
        super();
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Space", []]; 
    });
    this.Error = function Error() {
      return globalThis.Object.freeze(new Error.class());
    };
    (class Error extends Token.Token {
      static {
        Token.Error.class = this
      }
      constructor() {
        super();
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Error", []]; 
    });
    this.Comment = function Comment(content) {
      return globalThis.Object.freeze(new Comment.class(content));
    };
    (class Comment extends Token.Token {
      static {
        Token.Comment.class = this
      }
      constructor(content) {
        super();
        this.content = content;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Comment", ["content"]]; 
    });
    this.Identifier = function Identifier(name, symbolic) {
      return globalThis.Object.freeze(new Identifier.class(name, symbolic));
    };
    (class Identifier extends Token.Token {
      static {
        Token.Identifier.class = this
      }
      constructor(name, symbolic) {
        super();
        this.name = name;
        this.symbolic = symbolic;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Identifier", ["name", "symbolic"]]; 
    });
    this.Literal = function Literal(kind, literal) {
      return globalThis.Object.freeze(new Literal.class(kind, literal));
    };
    (class Literal extends Token.Token {
      static {
        Token.Literal.class = this
      }
      constructor(kind, literal) {
        super();
        this.kind = kind;
        this.literal = literal;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Literal", ["kind", "literal"]]; 
    });
  }
  static same(a, b) {
    let c, c$_, s, n, n$_, s$_, scrut, scrut1, l, k, l$_, k$_, scrut2, scrut3, arg$Literal$0$, arg$Literal$1$, arg$Literal$0$1, arg$Literal$1$1, arg$Identifier$0$, arg$Identifier$1$, arg$Identifier$0$1, arg$Identifier$1$1, arg$Comment$0$, arg$Comment$0$1;
    if (a instanceof Token.Space.class) {
      if (b instanceof Token.Space.class) {
        return true
      }
      return false;
    } else if (a instanceof Token.Comment.class) {
      arg$Comment$0$ = a.content;
      c = arg$Comment$0$;
      if (b instanceof Token.Comment.class) {
        arg$Comment$0$1 = b.content;
        c$_ = arg$Comment$0$1;
        return c == c$_
      }
      return false;
    } else if (a instanceof Token.Identifier.class) {
      arg$Identifier$0$ = a.name;
      arg$Identifier$1$ = a.symbolic;
      s = arg$Identifier$1$;
      n = arg$Identifier$0$;
      if (b instanceof Token.Identifier.class) {
        arg$Identifier$0$1 = b.name;
        arg$Identifier$1$1 = b.symbolic;
        s$_ = arg$Identifier$1$1;
        n$_ = arg$Identifier$0$1;
        scrut = n == n$_;
        if (scrut === true) {
          scrut1 = s == s$_;
          if (scrut1 === true) {
            return true
          }
          return false;
        }
        return false;
      }
      return false;
    } else if (a instanceof Token.Literal.class) {
      arg$Literal$0$ = a.kind;
      arg$Literal$1$ = a.literal;
      l = arg$Literal$1$;
      k = arg$Literal$0$;
      if (b instanceof Token.Literal.class) {
        arg$Literal$0$1 = b.kind;
        arg$Literal$1$1 = b.literal;
        l$_ = arg$Literal$1$1;
        k$_ = arg$Literal$0$1;
        scrut2 = k == k$_;
        if (scrut2 === true) {
          scrut3 = l == l$_;
          if (scrut3 === true) {
            return true
          }
          return false;
        }
        return false;
      }
      return false;
    }
    return false;
  } 
  static integer(literal, endIndex) {
    return (llt) => {
      let tmp, tmp1;
      tmp = Token.Literal(Token.LiteralKind.Integer, literal);
      tmp1 = endIndex - literal.length;
      return runtime.safeCall(tmp.withLocation(tmp1, endIndex, llt))
    }
  } 
  static decimal(literal, endIndex) {
    return (llt) => {
      let tmp, tmp1;
      tmp = Token.Literal(Token.LiteralKind.Decimal, literal);
      tmp1 = endIndex - literal.length;
      return runtime.safeCall(tmp.withLocation(tmp1, endIndex, llt))
    }
  } 
  static string(literal, startIndex, endIndex) {
    return (llt) => {
      let tmp;
      tmp = Token.Literal(Token.LiteralKind.String, literal);
      return runtime.safeCall(tmp.withLocation(startIndex, endIndex, llt))
    }
  } 
  static boolean(literal, endIndex) {
    return (llt) => {
      let tmp, tmp1;
      tmp = Token.Literal(Token.LiteralKind.Boolean, literal);
      tmp1 = endIndex - literal.length;
      return runtime.safeCall(tmp.withLocation(tmp1, endIndex, llt))
    }
  } 
  static identifier(name, endIndex) {
    return (llt) => {
      let tmp, tmp1;
      tmp = Token.Identifier(name, false);
      tmp1 = endIndex - name.length;
      return runtime.safeCall(tmp.withLocation(tmp1, endIndex, llt))
    }
  } 
  static symbol(name, endIndex) {
    return (llt) => {
      let tmp, tmp1;
      tmp = Token.Identifier(name, true);
      tmp1 = endIndex - name.length;
      return runtime.safeCall(tmp.withLocation(tmp1, endIndex, llt))
    }
  } 
  static comment(content, startIndex, endIndex) {
    return (llt) => {
      let tmp;
      tmp = Token.Comment(content);
      return runtime.safeCall(tmp.withLocation(startIndex, endIndex, llt))
    }
  } 
  static error(startIndex, endIndex) {
    return (llt) => {
      let tmp;
      tmp = Token.Error();
      return runtime.safeCall(tmp.withLocation(startIndex, endIndex, llt))
    }
  } 
  static space(startIndex, endIndex) {
    return (llt) => {
      let tmp;
      tmp = Token.Space();
      return runtime.safeCall(tmp.withLocation(startIndex, endIndex, llt))
    }
  } 
  static summary(token) {
    let name, literal, arg$Literal$1$, arg$Identifier$0$;
    if (token instanceof Token.Space.class) {
      return "\u2420"
    } else if (token instanceof Token.Error.class) {
      return "\u26A0"
    } else if (token instanceof Token.Comment.class) {
      return "\uD83D\uDCAC"
    } else if (token instanceof Token.Identifier.class) {
      arg$Identifier$0$ = token.name;
      name = arg$Identifier$0$;
      return name
    } else if (token instanceof Token.Literal.class) {
      arg$Literal$1$ = token.literal;
      literal = arg$Literal$1$;
      return literal
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static display(token) {
    let name, kind, value, arg$Literal$0$, arg$Literal$1$, arg$Identifier$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (token instanceof Token.Space.class) {
      tmp = "space";
    } else if (token instanceof Token.Error.class) {
      tmp = "error";
    } else if (token instanceof Token.Comment.class) {
      tmp = "comment";
    } else if (token instanceof Token.Identifier.class) {
      arg$Identifier$0$ = token.name;
      name = arg$Identifier$0$;
      tmp1 = "identifier `" + name;
      tmp = tmp1 + "`";
    } else if (token instanceof Token.Literal.class) {
      arg$Literal$0$ = token.kind;
      arg$Literal$1$ = token.literal;
      value = arg$Literal$1$;
      kind = arg$Literal$0$;
      tmp2 = runtime.safeCall(kind.toString());
      tmp3 = runtime.safeCall(tmp2.toLowerCase());
      tmp4 = globalThis.JSON.stringify(value);
      tmp = Predef.mkStr(tmp3, " ", tmp4);
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    tmp5 = tmp + " at ";
    return tmp5 + token.displayLocation
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Token"]; 
});
let Token = Token2; export default Token;
