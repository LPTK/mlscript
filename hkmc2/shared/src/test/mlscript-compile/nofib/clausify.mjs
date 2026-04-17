const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let clausify1;
(class clausify {
  static {
    clausify1 = this
  }
  static {
    (class Formula {
      static {
        clausify.Formula = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Formula"]; 
    });
    this.Sym = function Sym(a) {
      return globalThis.Object.freeze(new Sym.class(a));
    };
    (class Sym extends clausify.Formula {
      static {
        clausify.Sym.class = this
      }
      constructor(a) {
        super();
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Sym", ["a"]]; 
    });
    this.Not = function Not(a) {
      return globalThis.Object.freeze(new Not.class(a));
    };
    (class Not extends clausify.Formula {
      static {
        clausify.Not.class = this
      }
      constructor(a) {
        super();
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Not", ["a"]]; 
    });
    this.Dis = function Dis(a, b) {
      return globalThis.Object.freeze(new Dis.class(a, b));
    };
    (class Dis extends clausify.Formula {
      static {
        clausify.Dis.class = this
      }
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Dis", ["a", "b"]]; 
    });
    this.Con = function Con(a, b) {
      return globalThis.Object.freeze(new Con.class(a, b));
    };
    (class Con extends clausify.Formula {
      static {
        clausify.Con.class = this
      }
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Con", ["a", "b"]]; 
    });
    this.Imp = function Imp(a, b) {
      return globalThis.Object.freeze(new Imp.class(a, b));
    };
    (class Imp extends clausify.Formula {
      static {
        clausify.Imp.class = this
      }
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Imp", ["a", "b"]]; 
    });
    this.Eqv = function Eqv(a, b) {
      return globalThis.Object.freeze(new Eqv.class(a, b));
    };
    (class Eqv extends clausify.Formula {
      static {
        clausify.Eqv.class = this
      }
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Eqv", ["a", "b"]]; 
    });
    (class StackFrame {
      static {
        clausify.StackFrame = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "StackFrame"]; 
    });
    this.Ast = function Ast(f) {
      return globalThis.Object.freeze(new Ast.class(f));
    };
    (class Ast extends clausify.StackFrame {
      static {
        clausify.Ast.class = this
      }
      constructor(f) {
        super();
        this.f = f;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ast", ["f"]]; 
    });
    this.Lex = function Lex(s) {
      return globalThis.Object.freeze(new Lex.class(s));
    };
    (class Lex extends clausify.StackFrame {
      static {
        clausify.Lex.class = this
      }
      constructor(s) {
        super();
        this.s = s;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Lex", ["s"]]; 
    });
  }
  static charLt(a, b) {
    return a < b
  } 
  static charLeq(a, b) {
    return a <= b
  } 
  static charGt(a, b) {
    return a > b
  } 
  static charGeq(a, b) {
    return a >= b
  } 
  static insert(x, ys) {
    let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(x, NofibPrelude.Nil)
    } else if (ys instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ys.head;
      arg$Cons$1$ = ys.tail;
      scrut = clausify.charLt(x, arg$Cons$0$);
      if (scrut === true) {
        tmp = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
        return NofibPrelude.Cons(x, tmp)
      }
      scrut1 = clausify.charGt(x, arg$Cons$0$);
      if (scrut1 === true) {
        tmp1 = clausify.insert(x, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Cons$0$, tmp1)
      }
      return NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static clauseHelper(p, x) {
    loopLabel: while (true) {
      let arg$Not$0$, arg$Sym$0$, element1$, element0$, arg$Sym$0$1, arg$Dis$0$, arg$Dis$1$, tmp, tmp1, tmp2;
      if (p instanceof clausify.Dis.class) {
        arg$Dis$0$ = p.a;
        arg$Dis$1$ = p.b;
        tmp = clausify.clauseHelper(arg$Dis$1$, x);
        p = arg$Dis$0$;
        x = tmp;
        continue loopLabel
      } else if (p instanceof clausify.Sym.class) {
        arg$Sym$0$1 = p.a;
        if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
          element0$ = runtime.Tuple.get(x, 0);
          element1$ = runtime.Tuple.get(x, 1);
          tmp1 = clausify.insert(arg$Sym$0$1, element0$);
          return globalThis.Object.freeze([
            tmp1,
            element1$
          ])
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      } else if (p instanceof clausify.Not.class) {
        arg$Not$0$ = p.a;
        if (arg$Not$0$ instanceof clausify.Sym.class) {
          arg$Sym$0$ = arg$Not$0$.a;
          if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
            element0$ = runtime.Tuple.get(x, 0);
            element1$ = runtime.Tuple.get(x, 1);
            tmp2 = clausify.insert(arg$Sym$0$, element1$);
            return globalThis.Object.freeze([
              element0$,
              tmp2
            ])
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static clause(p) {
    let tmp;
    tmp = globalThis.Object.freeze([
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ]);
    return clausify.clauseHelper(p, tmp)
  } 
  static conjunct(p) {
    if (p instanceof clausify.Con.class) {
      return true
    }
    return false;
  } 
  static disin(p) {
    loopLabel: while (true) {
      let dp, dq, scrut, arg$Con$0$, arg$Con$1$, arg$Dis$0$, arg$Dis$1$, arg$Con$0$1, arg$Con$1$1, arg$Con$0$2, arg$Con$1$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
      if (p instanceof clausify.Dis.class) {
        arg$Dis$0$ = p.a;
        arg$Dis$1$ = p.b;
        if (arg$Dis$1$ instanceof clausify.Con.class) {
          arg$Con$0$2 = arg$Dis$1$.a;
          arg$Con$1$2 = arg$Dis$1$.b;
          tmp = clausify.Dis(arg$Dis$0$, arg$Con$0$2);
          tmp1 = clausify.disin(tmp);
          tmp2 = clausify.Dis(arg$Dis$0$, arg$Con$1$2);
          tmp3 = clausify.disin(tmp2);
          return clausify.Con(tmp1, tmp3)
        }
        if (arg$Dis$0$ instanceof clausify.Con.class) {
          arg$Con$0$1 = arg$Dis$0$.a;
          arg$Con$1$1 = arg$Dis$0$.b;
          tmp4 = clausify.Dis(arg$Con$0$1, arg$Dis$1$);
          tmp5 = clausify.disin(tmp4);
          tmp6 = clausify.Dis(arg$Con$1$1, arg$Dis$1$);
          tmp7 = clausify.disin(tmp6);
          return clausify.Con(tmp5, tmp7)
        }
        dp = clausify.disin(arg$Dis$0$);
        dq = clausify.disin(arg$Dis$1$);
        tmp8 = clausify.conjunct(dp);
        if (tmp8 === false) {
          tmp9 = clausify.conjunct(dq);
        } else {
          tmp9 = true;
        }
        scrut = tmp9;
        if (scrut === true) {
          tmp10 = clausify.Dis(dp, dq);
          p = tmp10;
          continue loopLabel
        }
        return clausify.Dis(dp, dq);
      } else if (p instanceof clausify.Con.class) {
        arg$Con$0$ = p.a;
        arg$Con$1$ = p.b;
        tmp11 = clausify.disin(arg$Con$0$);
        tmp12 = clausify.disin(arg$Con$1$);
        return clausify.Con(tmp11, tmp12)
      }
      return p;
    }
  } 
  static elim(p) {
    let arg$Eqv$0$, arg$Eqv$1$, arg$Imp$0$, arg$Imp$1$, arg$Con$0$, arg$Con$1$, arg$Dis$0$, arg$Dis$1$, arg$Not$0$, arg$Sym$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    if (p instanceof clausify.Sym.class) {
      arg$Sym$0$ = p.a;
      return clausify.Sym(arg$Sym$0$)
    } else if (p instanceof clausify.Not.class) {
      arg$Not$0$ = p.a;
      tmp = clausify.elim(arg$Not$0$);
      return clausify.Not(tmp)
    } else if (p instanceof clausify.Dis.class) {
      arg$Dis$0$ = p.a;
      arg$Dis$1$ = p.b;
      tmp1 = clausify.elim(arg$Dis$0$);
      tmp2 = clausify.elim(arg$Dis$1$);
      return clausify.Dis(tmp1, tmp2)
    } else if (p instanceof clausify.Con.class) {
      arg$Con$0$ = p.a;
      arg$Con$1$ = p.b;
      tmp3 = clausify.elim(arg$Con$0$);
      tmp4 = clausify.elim(arg$Con$1$);
      return clausify.Con(tmp3, tmp4)
    } else if (p instanceof clausify.Imp.class) {
      arg$Imp$0$ = p.a;
      arg$Imp$1$ = p.b;
      tmp5 = clausify.elim(arg$Imp$0$);
      tmp6 = clausify.Not(tmp5);
      tmp7 = clausify.elim(arg$Imp$1$);
      return clausify.Dis(tmp6, tmp7)
    } else if (p instanceof clausify.Eqv.class) {
      arg$Eqv$0$ = p.a;
      arg$Eqv$1$ = p.b;
      tmp8 = clausify.Imp(arg$Eqv$0$, arg$Eqv$1$);
      tmp9 = clausify.elim(tmp8);
      tmp10 = clausify.Imp(arg$Eqv$1$, arg$Eqv$0$);
      tmp11 = clausify.elim(tmp10);
      return clausify.Con(tmp9, tmp11)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static interleave(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = clausify.interleave(ys, arg$Cons$1$);
      return NofibPrelude.Cons(arg$Cons$0$, tmp)
    } else if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static negin(p) {
    loopLabel: while (true) {
      let arg$Con$0$, arg$Con$1$, arg$Dis$0$, arg$Dis$1$, arg$Not$0$, arg$Dis$0$1, arg$Dis$1$1, arg$Con$0$1, arg$Con$1$1, arg$Not$0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
      if (p instanceof clausify.Not.class) {
        arg$Not$0$ = p.a;
        if (arg$Not$0$ instanceof clausify.Not.class) {
          arg$Not$0$1 = arg$Not$0$.a;
          p = arg$Not$0$1;
          continue loopLabel
        } else if (arg$Not$0$ instanceof clausify.Con.class) {
          arg$Con$0$1 = arg$Not$0$.a;
          arg$Con$1$1 = arg$Not$0$.b;
          tmp = clausify.Not(arg$Con$0$1);
          tmp1 = clausify.negin(tmp);
          tmp2 = clausify.Not(arg$Con$1$1);
          tmp3 = clausify.negin(tmp2);
          return clausify.Dis(tmp1, tmp3)
        } else if (arg$Not$0$ instanceof clausify.Dis.class) {
          arg$Dis$0$1 = arg$Not$0$.a;
          arg$Dis$1$1 = arg$Not$0$.b;
          tmp4 = clausify.Not(arg$Dis$0$1);
          tmp5 = clausify.negin(tmp4);
          tmp6 = clausify.Not(arg$Dis$1$1);
          tmp7 = clausify.negin(tmp6);
          return clausify.Con(tmp5, tmp7)
        }
        return p;
      } else if (p instanceof clausify.Dis.class) {
        arg$Dis$0$ = p.a;
        arg$Dis$1$ = p.b;
        tmp8 = clausify.negin(arg$Dis$0$);
        tmp9 = clausify.negin(arg$Dis$1$);
        return clausify.Dis(tmp8, tmp9)
      } else if (p instanceof clausify.Con.class) {
        arg$Con$0$ = p.a;
        arg$Con$1$ = p.b;
        tmp10 = clausify.negin(arg$Con$0$);
        tmp11 = clausify.negin(arg$Con$1$);
        return clausify.Con(tmp10, tmp11)
      }
      return p;
    }
  } 
  static opri(c) {
    let scrut, scrut1, scrut2, scrut3, scrut4, scrut5;
    scrut = c === "(";
    if (scrut === true) {
      return 0
    }
    scrut1 = c === "=";
    if (scrut1 === true) {
      return 1
    }
    scrut2 = c === ">";
    if (scrut2 === true) {
      return 2
    }
    scrut3 = c === "|";
    if (scrut3 === true) {
      return 3
    }
    scrut4 = c === "&";
    if (scrut4 === true) {
      return 4
    }
    scrut5 = c === "~";
    if (scrut5 === true) {
      return 5
    }
    throw runtime.safeCall(globalThis.Error(c));
  } 
  static red(s) {
    let arg$Cons$0$, arg$Cons$1$, arg$Ast$0$, arg$Cons$0$1, arg$Cons$1$1, arg$Lex$0$, arg$Cons$0$2, arg$Cons$1$2, arg$Ast$0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (s instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = s.head;
      arg$Cons$1$ = s.tail;
      if (arg$Cons$0$ instanceof clausify.Ast.class) {
        arg$Ast$0$ = arg$Cons$0$.f;
        if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = arg$Cons$1$.head;
          arg$Cons$1$1 = arg$Cons$1$.tail;
          if (arg$Cons$0$1 instanceof clausify.Lex.class) {
            arg$Lex$0$ = arg$Cons$0$1.s;
            switch (arg$Lex$0$) {
              case "=":
                if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
                  arg$Cons$0$2 = arg$Cons$1$1.head;
                  arg$Cons$1$2 = arg$Cons$1$1.tail;
                  if (arg$Cons$0$2 instanceof clausify.Ast.class) {
                    arg$Ast$0$1 = arg$Cons$0$2.f;
                    tmp = clausify.Eqv(arg$Ast$0$1, arg$Ast$0$);
                    tmp1 = clausify.Ast(tmp);
                    return NofibPrelude.Cons(tmp1, arg$Cons$1$2)
                  }
                }
                break;
              case ">":
                if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
                  arg$Cons$0$2 = arg$Cons$1$1.head;
                  arg$Cons$1$2 = arg$Cons$1$1.tail;
                  if (arg$Cons$0$2 instanceof clausify.Ast.class) {
                    arg$Ast$0$1 = arg$Cons$0$2.f;
                    tmp2 = clausify.Imp(arg$Ast$0$1, arg$Ast$0$);
                    tmp3 = clausify.Ast(tmp2);
                    return NofibPrelude.Cons(tmp3, arg$Cons$1$2)
                  }
                }
                break;
              case "|":
                if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
                  arg$Cons$0$2 = arg$Cons$1$1.head;
                  arg$Cons$1$2 = arg$Cons$1$1.tail;
                  if (arg$Cons$0$2 instanceof clausify.Ast.class) {
                    arg$Ast$0$1 = arg$Cons$0$2.f;
                    tmp4 = clausify.Dis(arg$Ast$0$1, arg$Ast$0$);
                    tmp5 = clausify.Ast(tmp4);
                    return NofibPrelude.Cons(tmp5, arg$Cons$1$2)
                  }
                }
                break;
              case "&":
                if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
                  arg$Cons$0$2 = arg$Cons$1$1.head;
                  arg$Cons$1$2 = arg$Cons$1$1.tail;
                  if (arg$Cons$0$2 instanceof clausify.Ast.class) {
                    arg$Ast$0$1 = arg$Cons$0$2.f;
                    tmp6 = clausify.Con(arg$Ast$0$1, arg$Ast$0$);
                    tmp7 = clausify.Ast(tmp6);
                    return NofibPrelude.Cons(tmp7, arg$Cons$1$2)
                  }
                }
                break;
              case "~":
                tmp8 = clausify.Not(arg$Ast$0$);
                tmp9 = clausify.Ast(tmp8);
                return NofibPrelude.Cons(tmp9, arg$Cons$1$1);
            }
          }
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static spri(s) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Lex$0$;
    if (s instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = s.head;
      arg$Cons$1$ = s.tail;
      if (arg$Cons$0$ instanceof clausify.Ast.class) {
        if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = arg$Cons$1$.head;
          if (arg$Cons$0$1 instanceof clausify.Lex.class) {
            arg$Lex$0$ = arg$Cons$0$1.s;
            return clausify.opri(arg$Lex$0$)
          }
          return 0;
        }
        return 0;
      }
      return 0;
    }
    return 0;
  } 
  static redstar(s) {
    let lambda;
    lambda = (undefined, function (s1) {
      let tmp;
      tmp = clausify.spri(s1);
      return tmp != 0
    });
    return NofibPrelude.while_(lambda, clausify.red, s)
  } 
  static spaces(n) {
    return NofibPrelude.replicate(n, " ")
  } 
  static parseHelper(t, s) {
    loopLabel: while (true) {
      let scrut, t1, c, scrut1, scrut2, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2, arg$Lex$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29;
      split_1$: {
        split_2$: {
          if (t instanceof NofibPrelude.Nil.class) {
            return clausify.redstar(s)
          } else if (t instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = t.head;
            arg$Cons$1$ = t.tail;
            switch (arg$Cons$0$) {
              case " ":
                t = arg$Cons$1$;
                continue loopLabel;
              case "(":
                tmp = clausify.Lex("(");
                tmp1 = NofibPrelude.Cons(tmp, s);
                t = arg$Cons$1$;
                s = tmp1;
                continue loopLabel;
              case ")":
                scrut = clausify.redstar(s);
                if (scrut instanceof NofibPrelude.Cons.class) {
                  arg$Cons$0$1 = scrut.head;
                  arg$Cons$1$1 = scrut.tail;
                  if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
                    arg$Cons$0$2 = arg$Cons$1$1.head;
                    arg$Cons$1$2 = arg$Cons$1$1.tail;
                    if (arg$Cons$0$2 instanceof clausify.Lex.class) {
                      arg$Lex$0$ = arg$Cons$0$2.s;
                      if (arg$Lex$0$ === "(") {
                        tmp2 = NofibPrelude.Cons(arg$Cons$0$1, arg$Cons$1$2);
                        t = arg$Cons$1$;
                        s = tmp2;
                        continue loopLabel
                      }
                      t1 = arg$Cons$1$;
                      c = arg$Cons$0$;
                      tmp3 = clausify.charLeq("a", arg$Cons$0$);
                      if (tmp3 === true) {
                        tmp4 = clausify.charLeq(arg$Cons$0$, "z");
                      } else {
                        tmp4 = false;
                      }
                      scrut1 = tmp4;
                      if (scrut1 === true) {
                        break split_1$
                      }
                      tmp5 = clausify.spri(s);
                      tmp6 = clausify.opri(arg$Cons$0$);
                      scrut2 = tmp5 > tmp6;
                      if (scrut2 === true) {
                        break split_2$
                      }
                    } else {
                      t1 = arg$Cons$1$;
                      c = arg$Cons$0$;
                      tmp7 = clausify.charLeq("a", arg$Cons$0$);
                      if (tmp7 === true) {
                        tmp8 = clausify.charLeq(arg$Cons$0$, "z");
                      } else {
                        tmp8 = false;
                      }
                      scrut1 = tmp8;
                      if (scrut1 === true) {
                        break split_1$
                      }
                      tmp9 = clausify.spri(s);
                      tmp10 = clausify.opri(arg$Cons$0$);
                      scrut2 = tmp9 > tmp10;
                      if (scrut2 === true) {
                        break split_2$
                      }
                    }
                  } else {
                    t1 = arg$Cons$1$;
                    c = arg$Cons$0$;
                    tmp11 = clausify.charLeq("a", arg$Cons$0$);
                    if (tmp11 === true) {
                      tmp12 = clausify.charLeq(arg$Cons$0$, "z");
                    } else {
                      tmp12 = false;
                    }
                    scrut1 = tmp12;
                    if (scrut1 === true) {
                      break split_1$
                    }
                    tmp13 = clausify.spri(s);
                    tmp14 = clausify.opri(arg$Cons$0$);
                    scrut2 = tmp13 > tmp14;
                    if (scrut2 === true) {
                      break split_2$
                    }
                  }
                } else {
                  t1 = arg$Cons$1$;
                  c = arg$Cons$0$;
                  tmp15 = clausify.charLeq("a", arg$Cons$0$);
                  if (tmp15 === true) {
                    tmp16 = clausify.charLeq(arg$Cons$0$, "z");
                  } else {
                    tmp16 = false;
                  }
                  scrut1 = tmp16;
                  if (scrut1 === true) {
                    break split_1$
                  }
                  tmp17 = clausify.spri(s);
                  tmp18 = clausify.opri(arg$Cons$0$);
                  scrut2 = tmp17 > tmp18;
                  if (scrut2 === true) {
                    break split_2$
                  }
                }
                break;
              default:
                t1 = arg$Cons$1$;
                c = arg$Cons$0$;
                tmp19 = clausify.charLeq("a", arg$Cons$0$);
                if (tmp19 === true) {
                  tmp20 = clausify.charLeq(arg$Cons$0$, "z");
                } else {
                  tmp20 = false;
                }
                scrut1 = tmp20;
                if (scrut1 === true) {
                  break split_1$
                }
                tmp21 = clausify.spri(s);
                tmp22 = clausify.opri(arg$Cons$0$);
                scrut2 = tmp21 > tmp22;
                if (scrut2 === true) {
                  break split_2$
                }
            }
            tmp23 = clausify.Lex(c);
            tmp24 = NofibPrelude.Cons(tmp23, s);
            t = t1;
            s = tmp24;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        tmp25 = NofibPrelude.Cons(c, t1);
        tmp26 = clausify.red(s);
        t = tmp25;
        s = tmp26;
        continue loopLabel;
      }
      tmp27 = clausify.Sym(c);
      tmp28 = clausify.Ast(tmp27);
      tmp29 = NofibPrelude.Cons(tmp28, s);
      t = t1;
      s = tmp29;
      continue loopLabel;
    }
  } 
  static parse(t) {
    let scrut, arg$Cons$0$, arg$Cons$1$, arg$Ast$0$;
    scrut = clausify.parseHelper(t, NofibPrelude.Nil);
    if (scrut instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = scrut.head;
      arg$Cons$1$ = scrut.tail;
      if (arg$Cons$0$ instanceof clausify.Ast.class) {
        arg$Ast$0$ = arg$Cons$0$.f;
        if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
          return arg$Ast$0$
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static splitHelper(p, a) {
    loopLabel: while (true) {
      let arg$Con$0$, arg$Con$1$, tmp;
      if (p instanceof clausify.Con.class) {
        arg$Con$0$ = p.a;
        arg$Con$1$ = p.b;
        tmp = clausify.splitHelper(arg$Con$1$, a);
        p = arg$Con$0$;
        a = tmp;
        continue loopLabel
      }
      return NofibPrelude.Cons(p, a);
    }
  } 
  static split(p) {
    return clausify.splitHelper(p, NofibPrelude.Nil)
  } 
  static tautclause(c_a) {
    let lscomp, a, element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(c_a) && c_a.length === 2) {
      element0$ = runtime.Tuple.get(c_a, 0);
      element1$ = runtime.Tuple.get(c_a, 1);
      a = element1$;
      lscomp = function lscomp(ls) {
        let scrut, arg$Cons$0$, arg$Cons$1$, tmp1;
        if (ls instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (ls instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = ls.head;
          arg$Cons$1$ = ls.tail;
          scrut = NofibPrelude.inList(arg$Cons$0$, a);
          if (scrut === true) {
            tmp1 = lscomp(arg$Cons$1$);
            return NofibPrelude.Cons(arg$Cons$0$, tmp1)
          }
          return lscomp(arg$Cons$1$);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      tmp = lscomp(element0$);
      return NofibPrelude.listNeq(tmp, NofibPrelude.Nil)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static uniclHelper(p, x) {
    let cp, scrut;
    cp = clausify.clause(p);
    scrut = clausify.tautclause(cp);
    if (scrut === true) {
      return x
    }
    return clausify.insert(cp, x);
  } 
  static unicl(a) {
    return NofibPrelude.foldr(clausify.uniclHelper, NofibPrelude.Nil, a)
  } 
  static disp(l_r) {
    let element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (runtime.Tuple.isArrayLike(l_r) && l_r.length === 2) {
      element0$ = runtime.Tuple.get(l_r, 0);
      element1$ = runtime.Tuple.get(l_r, 1);
      tmp = NofibPrelude.listLen(element0$);
      tmp1 = clausify.spaces(tmp);
      tmp2 = clausify.interleave(element0$, tmp1);
      tmp3 = NofibPrelude.nofibStringToList("<=");
      tmp4 = NofibPrelude.listLen(element1$);
      tmp5 = clausify.spaces(tmp4);
      tmp6 = clausify.interleave(tmp5, element1$);
      tmp7 = NofibPrelude.nofibStringToList("\n");
      tmp8 = NofibPrelude.append(tmp6, tmp7);
      tmp9 = NofibPrelude.append(tmp3, tmp8);
      return NofibPrelude.append(tmp2, tmp9)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static clauses(t) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    tmp = clausify.parse(t);
    tmp1 = clausify.elim(tmp);
    tmp2 = clausify.negin(tmp1);
    tmp3 = clausify.disin(tmp2);
    tmp4 = clausify.split(tmp3);
    tmp5 = clausify.unicl(tmp4);
    tmp6 = NofibPrelude.map(clausify.disp, tmp5);
    return NofibPrelude.concat(tmp6)
  } 
  static testClausify_nofib(n) {
    let xs, tmp, tmp1;
    tmp = NofibPrelude.nofibStringToList("a = a = a");
    xs = NofibPrelude.replicate(n, tmp);
    tmp1 = NofibPrelude.map(clausify.clauses, xs);
    return NofibPrelude.concat(tmp1)
  } 
  static main() {
    let tmp;
    tmp = clausify.testClausify_nofib(10);
    return NofibPrelude.nofibListToString(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "clausify"]; 
});
let clausify = clausify1; export default clausify;
