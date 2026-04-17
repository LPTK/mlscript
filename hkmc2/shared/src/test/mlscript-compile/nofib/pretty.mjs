const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let pretty1;
(class pretty {
  static {
    pretty1 = this
  }
  static {
    (class CSeq {
      static {
        pretty.CSeq = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CSeq"]; 
    });
    this.CAppend = function CAppend(a, b) {
      return globalThis.Object.freeze(new CAppend.class(a, b));
    };
    (class CAppend extends pretty.CSeq {
      static {
        pretty.CAppend.class = this
      }
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CAppend", ["a", "b"]]; 
    });
    this.CIndent = function CIndent(a, b) {
      return globalThis.Object.freeze(new CIndent.class(a, b));
    };
    (class CIndent extends pretty.CSeq {
      static {
        pretty.CIndent.class = this
      }
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CIndent", ["a", "b"]]; 
    });
    this.CStr = function CStr(a) {
      return globalThis.Object.freeze(new CStr.class(a));
    };
    (class CStr extends pretty.CSeq {
      static {
        pretty.CStr.class = this
      }
      constructor(a) {
        super();
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CStr", ["a"]]; 
    });
    this.CCh = function CCh(a) {
      return globalThis.Object.freeze(new CCh.class(a));
    };
    (class CCh extends pretty.CSeq {
      static {
        pretty.CCh.class = this
      }
      constructor(a) {
        super();
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CCh", ["a"]]; 
    });
    (class CNil extends pretty.CSeq {
      static {
        new this
      }
      constructor() {
        super();
        pretty.CNil = this;
        Object.defineProperty(this, "class", {
          value: CNil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "CNil"]; 
    });
    (class CNewline extends pretty.CSeq {
      static {
        new this
      }
      constructor() {
        super();
        pretty.CNewline = this;
        Object.defineProperty(this, "class", {
          value: CNewline
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "CNewline"]; 
    });
    (class PprStyle {
      static {
        pretty.PprStyle = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "PprStyle"]; 
    });
    (class PprForUser extends pretty.PprStyle {
      static {
        new this
      }
      constructor() {
        super();
        pretty.PprForUser = this;
        Object.defineProperty(this, "class", {
          value: PprForUser
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "PprForUser"]; 
    });
    (class PprDebug extends pretty.PprStyle {
      static {
        new this
      }
      constructor() {
        super();
        pretty.PprDebug = this;
        Object.defineProperty(this, "class", {
          value: PprDebug
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "PprDebug"]; 
    });
    (class PprShowAll extends pretty.PprStyle {
      static {
        new this
      }
      constructor() {
        super();
        pretty.PprShowAll = this;
        Object.defineProperty(this, "class", {
          value: PprShowAll
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "PprShowAll"]; 
    });
    (class PprInterface extends pretty.PprStyle {
      static {
        new this
      }
      constructor() {
        super();
        pretty.PprInterface = this;
        Object.defineProperty(this, "class", {
          value: PprInterface
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "PprInterface"]; 
    });
    this.cNil = pretty.CNil;
    this.cNL = pretty.CNewline;
    this.MkPrettyRep = function MkPrettyRep(cseq, n, b1, b2) {
      return globalThis.Object.freeze(new MkPrettyRep.class(cseq, n, b1, b2));
    };
    (class MkPrettyRep {
      static {
        pretty.MkPrettyRep.class = this
      }
      constructor(cseq, n, b1, b2) {
        this.cseq = cseq;
        this.n = n;
        this.b1 = b1;
        this.b2 = b2;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "MkPrettyRep", ["cseq", "n", "b1", "b2"]]; 
    });
  }
  static flattenS_flatten(id, param0, param1, param2, param3) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          let seqs, col, seq, arg$Cons$0$, arg$Cons$1$, element1$, element0$;
          if (param1 instanceof NofibPrelude.Nil.class) {
            return NofibPrelude.Nil
          } else if (param1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param1.head;
            arg$Cons$1$ = param1.tail;
            if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
              let param0_tmp;
              element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
              element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
              seqs = arg$Cons$1$;
              seq = element1$;
              col = element0$;
              param0_tmp = param0;
              param0 = col;
              param1 = param0_tmp;
              param2 = seq;
              param3 = seqs;
              id = 1;
              continue loopLabel
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        case 1:
          let seq2, seq1, n_, seq3, s, c, arg$CCh$0$, arg$CStr$0$, arg$CIndent$0$, arg$CIndent$1$, arg$CAppend$0$, arg$CAppend$1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
          if (param2 instanceof pretty.CNil.class) {
            let param3_tmp;
            param3_tmp = param3;
            param0 = param1;
            param1 = param3_tmp;
            id = 0;
            continue loopLabel
          } else if (param2 instanceof pretty.CAppend.class) {
            arg$CAppend$0$ = param2.a;
            arg$CAppend$1$ = param2.b;
            seq2 = arg$CAppend$1$;
            seq1 = arg$CAppend$0$;
            tmp = globalThis.Object.freeze([
              param0,
              seq2
            ]);
            tmp1 = NofibPrelude.Cons(tmp, param3);
            param2 = seq1;
            param3 = tmp1;
            id = 1;
            continue loopLabel
          } else if (param2 instanceof pretty.CIndent.class) {
            arg$CIndent$0$ = param2.a;
            arg$CIndent$1$ = param2.b;
            seq3 = arg$CIndent$1$;
            n_ = arg$CIndent$0$;
            tmp2 = n_ + param0;
            param0 = tmp2;
            param2 = seq3;
            id = 1;
            continue loopLabel
          } else if (param2 instanceof pretty.CNewline.class) {
            tmp3 = pretty.flattenS(true, param3);
            return NofibPrelude.Cons("\n", tmp3)
          } else if (param2 instanceof pretty.CStr.class) {
            arg$CStr$0$ = param2.a;
            s = arg$CStr$0$;
            if (param1 === true) {
              tmp4 = pretty.flattenS(false, param3);
              tmp5 = NofibPrelude.append(s, tmp4);
              return pretty.mkIndent(param0, tmp5)
            }
            tmp6 = pretty.flattenS(false, param3);
            return NofibPrelude.append(s, tmp6);
          } else if (param2 instanceof pretty.CCh.class) {
            arg$CCh$0$ = param2.a;
            c = arg$CCh$0$;
            if (param1 === true) {
              tmp7 = pretty.flattenS(false, param3);
              tmp8 = NofibPrelude.Cons(c, tmp7);
              return pretty.mkIndent(param0, tmp8)
            }
            tmp9 = pretty.flattenS(false, param3);
            return NofibPrelude.Cons(c, tmp9);
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      break;
    }
  } 
  static cAppend(cs1, cs2) {
    return pretty.CAppend(cs1, cs2)
  } 
  static cIndent(n, cs) {
    return pretty.CIndent(n, cs)
  } 
  static cStr(s) {
    return pretty.CStr(s)
  } 
  static cCh(c) {
    return pretty.CCh(c)
  } 
  static mkIndent(n, s) {
    let scrut, scrut1, tmp, tmp1, tmp2, tmp3;
    scrut = n === 0;
    if (scrut === true) {
      return s
    }
    scrut1 = n >= 8;
    if (scrut1 === true) {
      tmp = n - 8;
      tmp1 = pretty.mkIndent(tmp, s);
      return NofibPrelude.Cons("\t", tmp1)
    }
    tmp2 = n - 1;
    tmp3 = pretty.mkIndent(tmp2, s);
    return NofibPrelude.Cons(" ", tmp3);
  } 
  static flattenS(nlp, seqs) {
    return pretty.flattenS_flatten(0, nlp, seqs, undefined, undefined)
  } 
  static flatten(n, nlp, cseq, seqs) {
    return pretty.flattenS_flatten(1, n, nlp, cseq, seqs)
  } 
  static cShow(seq) {
    return pretty.flatten(0, true, seq, NofibPrelude.Nil)
  } 
  static ppShow(width, p) {
    let scrut, seq, arg$MkPrettyRep$0$;
    scrut = runtime.safeCall(p(width, false));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      arg$MkPrettyRep$0$ = scrut.cseq;
      seq = arg$MkPrettyRep$0$;
      return pretty.cShow(seq)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static ppUnformatted(p) {
    let scrut, seq, arg$MkPrettyRep$0$;
    scrut = runtime.safeCall(p(80, false));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      arg$MkPrettyRep$0$ = scrut.cseq;
      seq = arg$MkPrettyRep$0$;
      return pretty.cShow(seq)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static ppNil(width, is_vert) {
    let tmp;
    tmp = width >= 0;
    return pretty.MkPrettyRep(pretty.cNil, 0, true, tmp)
  } 
  static ppStr(s, width, is_vert) {
    let ls, tmp, tmp1;
    ls = NofibPrelude.listLen(s);
    tmp = pretty.cStr(s);
    tmp1 = width >= ls;
    return pretty.MkPrettyRep(tmp, ls, false, tmp1)
  } 
  static ppChar(c, width, is_vert) {
    let tmp, tmp1;
    tmp = pretty.cCh(c);
    tmp1 = width >= 1;
    return pretty.MkPrettyRep(tmp, 1, false, tmp1)
  } 
  static ppInt(n, width, is_vert) {
    let tmp, tmp1;
    tmp = NofibPrelude.stringOfInt(n);
    tmp1 = NofibPrelude.nofibStringToList(tmp);
    return pretty.ppStr(tmp1, width, is_vert)
  } 
  static pp_SP(a, b) {
    let tmp;
    tmp = NofibPrelude.nofibStringToList(", ");
    return pretty.ppStr(tmp, a, b)
  } 
  static ppSP(a, b) {
    return pretty.ppChar(" ", a, b)
  } 
  static ppLbrack(a, b) {
    return pretty.ppChar("[", a, b)
  } 
  static ppRbrack(a, b) {
    return pretty.ppChar("]", a, b)
  } 
  static ppLparen(a, b) {
    return pretty.ppChar("(", a, b)
  } 
  static ppRparen(a, b) {
    return pretty.ppChar(")", a, b)
  } 
  static ppSemi(a, b) {
    return pretty.ppChar(";", a, b)
  } 
  static ppComma(a, b) {
    return pretty.ppChar(",", a, b)
  } 
  static andL(a, b) {
    if (a === true) {
      return b
    }
    return false;
  } 
  static orL(a, b) {
    if (a === true) {
      return true
    }
    return b;
  } 
  static ppBeside(p1, p2, width, is_vert) {
    let scrut, sl1, ll1, emp1, seq1, scrut1, seq2, sl2, emp2, ll2, arg$MkPrettyRep$0$, arg$MkPrettyRep$1$, arg$MkPrettyRep$2$, arg$MkPrettyRep$3$, arg$MkPrettyRep$0$1, arg$MkPrettyRep$1$1, arg$MkPrettyRep$2$1, arg$MkPrettyRep$3$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    scrut = runtime.safeCall(p1(width, false));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      arg$MkPrettyRep$0$ = scrut.cseq;
      arg$MkPrettyRep$1$ = scrut.n;
      arg$MkPrettyRep$2$ = scrut.b1;
      arg$MkPrettyRep$3$ = scrut.b2;
      sl1 = arg$MkPrettyRep$3$;
      emp1 = arg$MkPrettyRep$2$;
      ll1 = arg$MkPrettyRep$1$;
      seq1 = arg$MkPrettyRep$0$;
      tmp = width - ll1;
      scrut1 = runtime.safeCall(p2(tmp, false));
      if (scrut1 instanceof pretty.MkPrettyRep.class) {
        arg$MkPrettyRep$0$1 = scrut1.cseq;
        arg$MkPrettyRep$1$1 = scrut1.n;
        arg$MkPrettyRep$2$1 = scrut1.b1;
        arg$MkPrettyRep$3$1 = scrut1.b2;
        sl2 = arg$MkPrettyRep$3$1;
        emp2 = arg$MkPrettyRep$2$1;
        ll2 = arg$MkPrettyRep$1$1;
        seq2 = arg$MkPrettyRep$0$1;
        tmp1 = pretty.cIndent(ll1, seq2);
        tmp2 = pretty.cAppend(seq1, tmp1);
        tmp3 = ll1 + ll2;
        tmp4 = pretty.andL(emp1, emp2);
        tmp5 = width >= 0;
        tmp6 = pretty.andL(sl1, sl2);
        tmp7 = pretty.andL(tmp5, tmp6);
        return pretty.MkPrettyRep(tmp2, tmp3, tmp4, tmp7)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static ppBesides(ps) {
    let lambda;
    if (ps instanceof NofibPrelude.Nil.class) {
      return pretty.ppNil
    }
    lambda = (undefined, function (a, b) {
      let lambda1;
      lambda1 = (undefined, function (c, d) {
        return pretty.ppBeside(a, b, c, d)
      });
      return lambda1
    });
    return NofibPrelude.foldr1(lambda, ps);
  } 
  static ppBesideSP(p1, p2, width, is_vert) {
    let scrut, sl1, ll1, emp1, seq1, li, scrut1, seq2, sl2, emp2, ll2, wi, sp, scrut2, arg$MkPrettyRep$0$, arg$MkPrettyRep$1$, arg$MkPrettyRep$2$, arg$MkPrettyRep$3$, tmp, arg$MkPrettyRep$0$1, arg$MkPrettyRep$1$1, arg$MkPrettyRep$2$1, arg$MkPrettyRep$3$1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    scrut = runtime.safeCall(p1(width, false));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      arg$MkPrettyRep$0$ = scrut.cseq;
      arg$MkPrettyRep$1$ = scrut.n;
      arg$MkPrettyRep$2$ = scrut.b1;
      arg$MkPrettyRep$3$ = scrut.b2;
      sl1 = arg$MkPrettyRep$3$;
      emp1 = arg$MkPrettyRep$2$;
      ll1 = arg$MkPrettyRep$1$;
      seq1 = arg$MkPrettyRep$0$;
      if (emp1 === true) {
        tmp = 0;
      } else {
        tmp = ll1 + 1;
      }
      li = tmp;
      tmp1 = width - li;
      scrut1 = runtime.safeCall(p2(tmp1, false));
      if (scrut1 instanceof pretty.MkPrettyRep.class) {
        arg$MkPrettyRep$0$1 = scrut1.cseq;
        arg$MkPrettyRep$1$1 = scrut1.n;
        arg$MkPrettyRep$2$1 = scrut1.b1;
        arg$MkPrettyRep$3$1 = scrut1.b2;
        sl2 = arg$MkPrettyRep$3$1;
        emp2 = arg$MkPrettyRep$2$1;
        ll2 = arg$MkPrettyRep$1$1;
        seq2 = arg$MkPrettyRep$0$1;
        if (emp1 === true) {
          tmp2 = 0;
        } else {
          tmp2 = 1;
        }
        wi = tmp2;
        scrut2 = pretty.orL(emp1, emp2);
        if (scrut2 === true) {
          tmp3 = pretty.cNil;
        } else {
          tmp3 = pretty.cCh(" ");
        }
        sp = tmp3;
        tmp4 = pretty.cIndent(li, seq2);
        tmp5 = pretty.cAppend(sp, tmp4);
        tmp6 = pretty.cAppend(seq1, tmp5);
        tmp7 = li + ll2;
        tmp8 = pretty.andL(emp1, emp2);
        tmp9 = width >= wi;
        tmp10 = pretty.andL(sl1, sl2);
        tmp11 = pretty.andL(tmp9, tmp10);
        return pretty.MkPrettyRep(tmp6, tmp7, tmp8, tmp11)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static ppCat(ps) {
    let lambda;
    if (ps instanceof NofibPrelude.Nil.class) {
      return pretty.ppNil
    }
    lambda = (undefined, function (a, b) {
      let lambda1;
      lambda1 = (undefined, function (c, d) {
        return pretty.ppBesideSP(a, b, c, d)
      });
      return lambda1
    });
    return NofibPrelude.foldr1(lambda, ps);
  } 
  static ppAbove(p1, p2, width, is_vert) {
    let scrut, emp1, seq1, scrut1, seq2, emp2, ll2, nl, scrut2, arg$MkPrettyRep$0$, arg$MkPrettyRep$2$, arg$MkPrettyRep$0$1, arg$MkPrettyRep$1$, arg$MkPrettyRep$2$1, tmp, tmp1, tmp2, tmp3;
    scrut = runtime.safeCall(p1(width, true));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      arg$MkPrettyRep$0$ = scrut.cseq;
      arg$MkPrettyRep$2$ = scrut.b1;
      emp1 = arg$MkPrettyRep$2$;
      seq1 = arg$MkPrettyRep$0$;
      scrut1 = runtime.safeCall(p2(width, true));
      if (scrut1 instanceof pretty.MkPrettyRep.class) {
        arg$MkPrettyRep$0$1 = scrut1.cseq;
        arg$MkPrettyRep$1$ = scrut1.n;
        arg$MkPrettyRep$2$1 = scrut1.b1;
        emp2 = arg$MkPrettyRep$2$1;
        ll2 = arg$MkPrettyRep$1$;
        seq2 = arg$MkPrettyRep$0$1;
        scrut2 = pretty.orL(emp1, emp2);
        if (scrut2 === true) {
          tmp = pretty.cNil;
        } else {
          tmp = pretty.cNL;
        }
        nl = tmp;
        tmp1 = pretty.cAppend(nl, seq2);
        tmp2 = pretty.cAppend(seq1, tmp1);
        tmp3 = pretty.andL(emp1, emp2);
        return pretty.MkPrettyRep(tmp2, ll2, tmp3, false)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static ppAboves(ps, a, b) {
    let lambda, tmp;
    if (ps instanceof NofibPrelude.Nil.class) {
      return pretty.ppNil(a, b)
    }
    lambda = (undefined, function (a1, b1) {
      let lambda1;
      lambda1 = (undefined, function (c, d) {
        return pretty.ppAbove(a1, b1, c, d)
      });
      return lambda1
    });
    tmp = NofibPrelude.foldr1(lambda, ps);
    return runtime.safeCall(tmp(a, b));
  } 
  static ppNest(n, p, width, is_vert) {
    let emp, ll, seq, sl, scrut, arg$MkPrettyRep$0$, arg$MkPrettyRep$1$, arg$MkPrettyRep$2$, arg$MkPrettyRep$3$, tmp, tmp1, tmp2;
    if (is_vert === true) {
      tmp = width - n;
      scrut = runtime.safeCall(p(tmp, true));
      if (scrut instanceof pretty.MkPrettyRep.class) {
        arg$MkPrettyRep$0$ = scrut.cseq;
        arg$MkPrettyRep$1$ = scrut.n;
        arg$MkPrettyRep$2$ = scrut.b1;
        arg$MkPrettyRep$3$ = scrut.b2;
        sl = arg$MkPrettyRep$3$;
        emp = arg$MkPrettyRep$2$;
        ll = arg$MkPrettyRep$1$;
        seq = arg$MkPrettyRep$0$;
        tmp1 = pretty.cIndent(n, seq);
        tmp2 = ll + n;
        return pretty.MkPrettyRep(tmp1, tmp2, emp, sl)
      }
      return runtime.safeCall(p(width, false));
    }
    return runtime.safeCall(p(width, false));
  } 
  static ppHang(p1, n, p2, width, is_vert) {
    let scrut, sl1, ll1, emp1, seq1, scrut1, seq2, sl2, ll2, scrut2, ll2_, seq2_, scrut3, arg$MkPrettyRep$0$, arg$MkPrettyRep$1$, arg$MkPrettyRep$2$, arg$MkPrettyRep$3$, arg$MkPrettyRep$0$1, arg$MkPrettyRep$1$1, arg$MkPrettyRep$3$1, arg$MkPrettyRep$0$2, arg$MkPrettyRep$1$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14;
    scrut = runtime.safeCall(p1(width, false));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      arg$MkPrettyRep$0$ = scrut.cseq;
      arg$MkPrettyRep$1$ = scrut.n;
      arg$MkPrettyRep$2$ = scrut.b1;
      arg$MkPrettyRep$3$ = scrut.b2;
      sl1 = arg$MkPrettyRep$3$;
      emp1 = arg$MkPrettyRep$2$;
      ll1 = arg$MkPrettyRep$1$;
      seq1 = arg$MkPrettyRep$0$;
      tmp = ll1 + 1;
      tmp1 = width - tmp;
      scrut1 = runtime.safeCall(p2(tmp1, false));
      if (scrut1 instanceof pretty.MkPrettyRep.class) {
        arg$MkPrettyRep$0$1 = scrut1.cseq;
        arg$MkPrettyRep$1$1 = scrut1.n;
        arg$MkPrettyRep$3$1 = scrut1.b2;
        sl2 = arg$MkPrettyRep$3$1;
        ll2 = arg$MkPrettyRep$1$1;
        seq2 = arg$MkPrettyRep$0$1;
        tmp2 = width - n;
        scrut2 = runtime.safeCall(p2(tmp2, false));
        if (scrut2 instanceof pretty.MkPrettyRep.class) {
          arg$MkPrettyRep$0$2 = scrut2.cseq;
          arg$MkPrettyRep$1$2 = scrut2.n;
          ll2_ = arg$MkPrettyRep$1$2;
          seq2_ = arg$MkPrettyRep$0$2;
          if (emp1 === true) {
            return runtime.safeCall(p2(width, is_vert))
          }
          tmp3 = ll1 <= n;
          scrut3 = pretty.orL(tmp3, sl2);
          if (scrut3 === true) {
            tmp4 = pretty.cCh(" ");
            tmp5 = ll1 + 1;
            tmp6 = pretty.cIndent(tmp5, seq2);
            tmp7 = pretty.cAppend(tmp4, tmp6);
            tmp8 = pretty.cAppend(seq1, tmp7);
            tmp9 = ll1 + 1;
            tmp10 = tmp9 + ll2;
            tmp11 = pretty.andL(sl1, sl2);
            return pretty.MkPrettyRep(tmp8, tmp10, false, tmp11)
          }
          tmp12 = pretty.cIndent(n, seq2_);
          tmp13 = pretty.cAppend(pretty.cNL, tmp12);
          tmp14 = pretty.cAppend(seq1, tmp13);
          return pretty.MkPrettyRep(tmp14, ll2_, false, false);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static testPretty_nofib() {
    let pp_word, pretty_stuff, pp_words, tmp, tmp1;
    pp_word = function pp_word(a, b) {
      let tmp2;
      tmp2 = NofibPrelude.nofibStringToList("xxxxx");
      return pretty.ppStr(tmp2, a, b)
    };
    pretty_stuff = function pretty_stuff(a, b) {
      let lambda, lambda1, lambda2, tmp2, tmp3, tmp4, tmp5, lambda3, lambda4, tmp6, tmp7, tmp8;
      lambda = (undefined, function (a1, b1) {
        let tmp9;
        tmp9 = - 42;
        return pretty.ppInt(tmp9, a1, b1)
      });
      lambda1 = (undefined, function (a1, b1) {
        return pretty.ppChar("@", a1, b1)
      });
      lambda2 = (undefined, function (a1, b1) {
        let tmp9;
        tmp9 = NofibPrelude.nofibStringToList("This is a string");
        return pretty.ppStr(tmp9, a1, b1)
      });
      tmp2 = NofibPrelude.Cons(lambda2, NofibPrelude.Nil);
      tmp3 = NofibPrelude.Cons(lambda1, tmp2);
      tmp4 = NofibPrelude.Cons(lambda, tmp3);
      tmp5 = pretty.ppBesides(tmp4);
      lambda3 = (undefined, function (a1, b1) {
        return pretty.pp_SP(a1, b1)
      });
      lambda4 = (undefined, function (a1, b1) {
        let lambda5, tmp9;
        lambda5 = (undefined, function (a2, b2) {
          let tmp10;
          tmp10 = NofibPrelude.nofibStringToList("This is the label");
          return pretty.ppStr(tmp10, a2, b2)
        });
        tmp9 = pretty.ppCat(pp_words);
        return pretty.ppHang(lambda5, 8, tmp9, a1, b1)
      });
      tmp6 = NofibPrelude.Cons(lambda4, NofibPrelude.Nil);
      tmp7 = NofibPrelude.Cons(lambda3, tmp6);
      tmp8 = NofibPrelude.Cons(tmp5, tmp7);
      return pretty.ppAboves(tmp8, a, b)
    };
    pp_words = NofibPrelude.replicate(50, pp_word);
    tmp = pretty.ppShow(80, pretty_stuff);
    tmp1 = NofibPrelude.nofibStringToList("\n");
    return NofibPrelude.append(tmp, tmp1)
  } 
  static main() {
    let tmp;
    tmp = pretty.testPretty_nofib();
    return NofibPrelude.nofibListToString(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "pretty"]; 
});
let pretty = pretty1; export default pretty;
