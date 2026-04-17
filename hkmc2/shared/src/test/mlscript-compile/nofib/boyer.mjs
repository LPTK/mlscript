const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
let boyer1;
(class boyer {
  static {
    boyer1 = this
  }
  static {
    (class Id {
      static {
        boyer.Id = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Id"]; 
    });
    (class A extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.A = this;
        Object.defineProperty(this, "class", {
          value: A
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "A"]; 
    });
    (class B extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.B = this;
        Object.defineProperty(this, "class", {
          value: B
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "B"]; 
    });
    (class C extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.C = this;
        Object.defineProperty(this, "class", {
          value: C
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "C"]; 
    });
    (class D extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.D = this;
        Object.defineProperty(this, "class", {
          value: D
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "D"]; 
    });
    (class X extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.X = this;
        Object.defineProperty(this, "class", {
          value: X
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "X"]; 
    });
    (class Y extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.Y = this;
        Object.defineProperty(this, "class", {
          value: Y
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Y"]; 
    });
    (class Z extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.Z = this;
        Object.defineProperty(this, "class", {
          value: Z
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Z"]; 
    });
    (class U extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.U = this;
        Object.defineProperty(this, "class", {
          value: U
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "U"]; 
    });
    (class W extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.W = this;
        Object.defineProperty(this, "class", {
          value: W
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "W"]; 
    });
    (class ADD1 extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.ADD1 = this;
        Object.defineProperty(this, "class", {
          value: ADD1
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "ADD1"]; 
    });
    (class AND extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.AND = this;
        Object.defineProperty(this, "class", {
          value: AND
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "AND"]; 
    });
    (class APPEND extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.APPEND = this;
        Object.defineProperty(this, "class", {
          value: APPEND
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "APPEND"]; 
    });
    (class CONS extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.CONS = this;
        Object.defineProperty(this, "class", {
          value: CONS
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "CONS"]; 
    });
    (class CONSP extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.CONSP = this;
        Object.defineProperty(this, "class", {
          value: CONSP
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "CONSP"]; 
    });
    (class DIFFERENCE extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.DIFFERENCE = this;
        Object.defineProperty(this, "class", {
          value: DIFFERENCE
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "DIFFERENCE"]; 
    });
    (class DIVIDES extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.DIVIDES = this;
        Object.defineProperty(this, "class", {
          value: DIVIDES
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "DIVIDES"]; 
    });
    (class EQUAL extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.EQUAL = this;
        Object.defineProperty(this, "class", {
          value: EQUAL
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "EQUAL"]; 
    });
    (class EVEN extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.EVEN = this;
        Object.defineProperty(this, "class", {
          value: EVEN
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "EVEN"]; 
    });
    (class EXP extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.EXP = this;
        Object.defineProperty(this, "class", {
          value: EXP
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "EXP"]; 
    });
    (class F extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.F = this;
        Object.defineProperty(this, "class", {
          value: F
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "F"]; 
    });
    (class FALSE extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.FALSE = this;
        Object.defineProperty(this, "class", {
          value: FALSE
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "FALSE"]; 
    });
    (class FOUR extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.FOUR = this;
        Object.defineProperty(this, "class", {
          value: FOUR
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "FOUR"]; 
    });
    (class GCD extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.GCD = this;
        Object.defineProperty(this, "class", {
          value: GCD
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "GCD"]; 
    });
    (class GREATEREQP extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.GREATEREQP = this;
        Object.defineProperty(this, "class", {
          value: GREATEREQP
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "GREATEREQP"]; 
    });
    (class GREATERP extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.GREATERP = this;
        Object.defineProperty(this, "class", {
          value: GREATERP
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "GREATERP"]; 
    });
    (class IF extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.IF = this;
        Object.defineProperty(this, "class", {
          value: IF
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "IF"]; 
    });
    (class IFF extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.IFF = this;
        Object.defineProperty(this, "class", {
          value: IFF
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "IFF"]; 
    });
    (class IMPLIES extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.IMPLIES = this;
        Object.defineProperty(this, "class", {
          value: IMPLIES
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "IMPLIES"]; 
    });
    (class LENGTH extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.LENGTH = this;
        Object.defineProperty(this, "class", {
          value: LENGTH
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LENGTH"]; 
    });
    (class LESSEQP extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.LESSEQP = this;
        Object.defineProperty(this, "class", {
          value: LESSEQP
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LESSEQP"]; 
    });
    (class LESSP extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.LESSP = this;
        Object.defineProperty(this, "class", {
          value: LESSP
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LESSP"]; 
    });
    (class LISTP extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.LISTP = this;
        Object.defineProperty(this, "class", {
          value: LISTP
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LISTP"]; 
    });
    (class MEMBER extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.MEMBER = this;
        Object.defineProperty(this, "class", {
          value: MEMBER
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "MEMBER"]; 
    });
    (class NIL extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.NIL = this;
        Object.defineProperty(this, "class", {
          value: NIL
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "NIL"]; 
    });
    (class NILP extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.NILP = this;
        Object.defineProperty(this, "class", {
          value: NILP
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "NILP"]; 
    });
    (class NLISTP extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.NLISTP = this;
        Object.defineProperty(this, "class", {
          value: NLISTP
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "NLISTP"]; 
    });
    (class NOT extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.NOT = this;
        Object.defineProperty(this, "class", {
          value: NOT
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "NOT"]; 
    });
    (class ODD extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.ODD = this;
        Object.defineProperty(this, "class", {
          value: ODD
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "ODD"]; 
    });
    (class ONE extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.ONE = this;
        Object.defineProperty(this, "class", {
          value: ONE
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "ONE"]; 
    });
    (class OR extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.OR = this;
        Object.defineProperty(this, "class", {
          value: OR
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "OR"]; 
    });
    (class PLUS extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.PLUS = this;
        Object.defineProperty(this, "class", {
          value: PLUS
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "PLUS"]; 
    });
    (class QUOTIENT extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.QUOTIENT = this;
        Object.defineProperty(this, "class", {
          value: QUOTIENT
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "QUOTIENT"]; 
    });
    (class REMAINDER extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.REMAINDER = this;
        Object.defineProperty(this, "class", {
          value: REMAINDER
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "REMAINDER"]; 
    });
    (class REVERSE extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.REVERSE = this;
        Object.defineProperty(this, "class", {
          value: REVERSE
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "REVERSE"]; 
    });
    (class SUB1 extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.SUB1 = this;
        Object.defineProperty(this, "class", {
          value: SUB1
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "SUB1"]; 
    });
    (class TIMES extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.TIMES = this;
        Object.defineProperty(this, "class", {
          value: TIMES
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "TIMES"]; 
    });
    (class TRUE extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.TRUE = this;
        Object.defineProperty(this, "class", {
          value: TRUE
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "TRUE"]; 
    });
    (class TWO extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.TWO = this;
        Object.defineProperty(this, "class", {
          value: TWO
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "TWO"]; 
    });
    (class ZERO extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.ZERO = this;
        Object.defineProperty(this, "class", {
          value: ZERO
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "ZERO"]; 
    });
    (class ZEROP extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.ZEROP = this;
        Object.defineProperty(this, "class", {
          value: ZEROP
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "ZEROP"]; 
    });
    (class Term {
      static {
        boyer.Term = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Term"]; 
    });
    this.Var = function Var(i) {
      return globalThis.Object.freeze(new Var.class(i));
    };
    (class Var extends boyer.Term {
      static {
        boyer.Var.class = this
      }
      constructor(i) {
        super();
        this.i = i;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Var", ["i"]]; 
    });
    this.Fun = function Fun(i, t, l) {
      return globalThis.Object.freeze(new Fun.class(i, t, l));
    };
    (class Fun extends boyer.Term {
      static {
        boyer.Fun.class = this
      }
      constructor(i, t, l) {
        super();
        this.i = i;
        this.t = t;
        this.l = l;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Fun", ["i", "t", "l"]]; 
    });
    (class ERROR extends boyer.Term {
      static {
        new this
      }
      constructor() {
        super();
        boyer.ERROR = this;
        Object.defineProperty(this, "class", {
          value: ERROR
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "ERROR"]; 
    });
  }
  static rewrite_with_lemmas_helper_rewrite_with_lemmas_rewrite(id, param0, param1) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          let rhs, ls, lhs, subst, unified, scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, element1$1, element0$1, tmp;
          if (param1 instanceof NofibPrelude.Nil.class) {
            return param0
          } else if (param1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param1.head;
            arg$Cons$1$ = param1.tail;
            if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
              element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
              element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
              ls = arg$Cons$1$;
              rhs = element1$;
              lhs = element0$;
              scrut = boyer.one_way_unify(param0, lhs);
              if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
                element0$1 = runtime.Tuple.get(scrut, 0);
                element1$1 = runtime.Tuple.get(scrut, 1);
                subst = element1$1;
                unified = element0$1;
                if (unified === true) {
                  tmp = boyer.apply_subst(subst, rhs);
                  param0 = tmp;
                  id = 2;
                  continue loopLabel
                }
                param1 = ls;
                id = 0;
                continue loopLabel;
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        case 1:
          let tmp1;
          tmp1 = NofibPrelude.force(param1);
          param1 = tmp1;
          id = 0;
          continue loopLabel;
        case 2:
          let v, f, lemmas, args, arg$Fun$0$, arg$Fun$1$, arg$Fun$2$, arg$Var$0$, tmp2, tmp3;
          if (param0 instanceof boyer.Var.class) {
            arg$Var$0$ = param0.i;
            v = arg$Var$0$;
            return boyer.Var(v)
          } else if (param0 instanceof boyer.Fun.class) {
            arg$Fun$0$ = param0.i;
            arg$Fun$1$ = param0.t;
            arg$Fun$2$ = param0.l;
            lemmas = arg$Fun$2$;
            args = arg$Fun$1$;
            f = arg$Fun$0$;
            tmp2 = NofibPrelude.map(boyer.rewrite, args);
            tmp3 = boyer.Fun(f, tmp2, lemmas);
            param0 = tmp3;
            param1 = lemmas;
            id = 1;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      break;
    }
  } 
  static termLsEq_termEq(id, param0, param1) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          let h1, t1, h2, t2, scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
          if (param0 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param0.head;
            arg$Cons$1$ = param0.tail;
            t1 = arg$Cons$1$;
            h1 = arg$Cons$0$;
            if (param1 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$1 = param1.head;
              arg$Cons$1$1 = param1.tail;
              t2 = arg$Cons$1$1;
              h2 = arg$Cons$0$1;
              scrut = boyer.termEq(h1, h2);
              if (scrut === true) {
                param0 = t1;
                param1 = t2;
                id = 0;
                continue loopLabel
              }
              return false;
            }
            return true;
          }
          return true;
        case 1:
          let i1, i2, f1, ts1, ts2, f2, scrut1, scrut2, arg$Fun$0$, arg$Fun$1$, arg$Fun$0$1, arg$Fun$1$1, arg$Var$0$, arg$Var$0$1;
          if (param0 instanceof boyer.Var.class) {
            arg$Var$0$ = param0.i;
            i1 = arg$Var$0$;
            if (param1 instanceof boyer.Var.class) {
              arg$Var$0$1 = param1.i;
              i2 = arg$Var$0$1;
              return i1 === i2
            }
            return false;
          } else if (param0 instanceof boyer.Fun.class) {
            arg$Fun$0$ = param0.i;
            arg$Fun$1$ = param0.t;
            ts1 = arg$Fun$1$;
            f1 = arg$Fun$0$;
            if (param1 instanceof boyer.Fun.class) {
              arg$Fun$0$1 = param1.i;
              arg$Fun$1$1 = param1.t;
              ts2 = arg$Fun$1$1;
              f2 = arg$Fun$0$1;
              scrut1 = f1 === f2;
              if (scrut1 === true) {
                scrut2 = boyer.termLsEq(ts1, ts2);
                if (scrut2 === true) {
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
      break;
    }
  } 
  static one_way_unify1_one_way_unify1_lst(id, param0, param1, param2) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          let vid2, v2, found, scrut, f1, as1, as2, f2, scrut1, arg$Fun$0$, arg$Fun$1$, arg$Fun$0$1, arg$Fun$1$1, arg$Var$0$, element1$, element0$, tmp, tmp1, tmp2;
          if (param1 instanceof boyer.Var.class) {
            arg$Var$0$ = param1.i;
            vid2 = arg$Var$0$;
            scrut = boyer.find(vid2, param2);
            if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
              element0$ = runtime.Tuple.get(scrut, 0);
              element1$ = runtime.Tuple.get(scrut, 1);
              v2 = element1$;
              found = element0$;
              if (found === true) {
                tmp = boyer.termEq(param0, v2);
                return globalThis.Object.freeze([
                  tmp,
                  param2
                ])
              }
              tmp1 = globalThis.Object.freeze([
                vid2,
                param0
              ]);
              tmp2 = NofibPrelude.Cons(tmp1, param2);
              return globalThis.Object.freeze([
                true,
                tmp2
              ]);
            }
            if (param0 instanceof boyer.Fun.class) {
              arg$Fun$0$ = param0.i;
              arg$Fun$1$ = param0.t;
              as1 = arg$Fun$1$;
              f1 = arg$Fun$0$;
              return globalThis.Object.freeze([
                false,
                NofibPrelude.Nil
              ])
            }
            return globalThis.Object.freeze([
              false,
              NofibPrelude.Nil
            ]);
          }
          if (param0 instanceof boyer.Fun.class) {
            arg$Fun$0$ = param0.i;
            arg$Fun$1$ = param0.t;
            as1 = arg$Fun$1$;
            f1 = arg$Fun$0$;
            if (param1 instanceof boyer.Fun.class) {
              arg$Fun$0$1 = param1.i;
              arg$Fun$1$1 = param1.t;
              as2 = arg$Fun$1$1;
              f2 = arg$Fun$0$1;
              scrut1 = f1 === f2;
              if (scrut1 === true) {
                param0 = as1;
                param1 = as2;
                id = 1;
                continue loopLabel
              }
              return globalThis.Object.freeze([
                false,
                NofibPrelude.Nil
              ])
            }
            return globalThis.Object.freeze([
              false,
              NofibPrelude.Nil
            ]);
          }
          return globalThis.Object.freeze([
            false,
            NofibPrelude.Nil
          ]);
        case 1:
          let ts1, t1, ts2, t2, subst_, hd_ok, subst__, tl_ok, scrut2, scrut3, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, element1$1, element0$1, element1$2, element0$2, tmp3;
          if (param0 instanceof NofibPrelude.Nil.class) {
            if (param1 instanceof NofibPrelude.Nil.class) {
              return globalThis.Object.freeze([
                true,
                param2
              ])
            }
            return globalThis.Object.freeze([
              false,
              NofibPrelude.Nil
            ]);
          } else if (param0 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param0.head;
            arg$Cons$1$ = param0.tail;
            ts1 = arg$Cons$1$;
            t1 = arg$Cons$0$;
            if (param1 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$1 = param1.head;
              arg$Cons$1$1 = param1.tail;
              ts2 = arg$Cons$1$1;
              t2 = arg$Cons$0$1;
              scrut3 = boyer.one_way_unify1(t1, t2, param2);
              if (runtime.Tuple.isArrayLike(scrut3) && scrut3.length === 2) {
                element0$1 = runtime.Tuple.get(scrut3, 0);
                element1$1 = runtime.Tuple.get(scrut3, 1);
                subst_ = element1$1;
                hd_ok = element0$1;
                scrut2 = boyer.one_way_unify1_lst(ts1, ts2, subst_);
                if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
                  element0$2 = runtime.Tuple.get(scrut2, 0);
                  element1$2 = runtime.Tuple.get(scrut2, 1);
                  subst__ = element1$2;
                  tl_ok = element0$2;
                  if (hd_ok === true) {
                    if (tl_ok === true) {
                      tmp3 = true;
                      return globalThis.Object.freeze([
                        tmp3,
                        subst__
                      ])
                    }
                    tmp3 = false;
                    return globalThis.Object.freeze([
                      tmp3,
                      subst__
                    ]);
                  }
                  tmp3 = false;
                  return globalThis.Object.freeze([
                    tmp3,
                    subst__
                  ]);
                }
                return globalThis.Object.freeze([
                  false,
                  NofibPrelude.Nil
                ])
              }
              return globalThis.Object.freeze([
                false,
                NofibPrelude.Nil
              ]);
            }
            return globalThis.Object.freeze([
              false,
              NofibPrelude.Nil
            ]);
          }
          return globalThis.Object.freeze([
            false,
            NofibPrelude.Nil
          ]);
      }
      break;
    }
  } 
  static termLsEq(h1t1, h2t2) {
    return boyer.termLsEq_termEq(0, h1t1, h2t2)
  } 
  static termEq(t1, t2) {
    return boyer.termLsEq_termEq(1, t1, t2)
  } 
  static termInList(term, ht) {
    loopLabel: while (true) {
      let t, h, scrut, arg$Cons$0$, arg$Cons$1$;
      if (ht instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ht.head;
        arg$Cons$1$ = ht.tail;
        t = arg$Cons$1$;
        h = arg$Cons$0$;
        scrut = boyer.termEq(term, h);
        if (scrut === true) {
          return true
        }
        ht = t;
        continue loopLabel;
      } else if (ht instanceof NofibPrelude.Nil.class) {
        return false
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static find(vid, ls) {
    loopLabel: while (true) {
      let bs, val2, vid2, scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$;
      if (ls instanceof NofibPrelude.Nil.class) {
        return globalThis.Object.freeze([
          false,
          boyer.ERROR
        ])
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          bs = arg$Cons$1$;
          val2 = element1$;
          vid2 = element0$;
          scrut = vid === vid2;
          if (scrut === true) {
            return globalThis.Object.freeze([
              true,
              val2
            ])
          }
          ls = bs;
          continue loopLabel;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static one_way_unify1(term1, term2, subst) {
    return boyer.one_way_unify1_one_way_unify1_lst(0, term1, term2, subst)
  } 
  static one_way_unify1_lst(tts1, tts2, subst) {
    return boyer.one_way_unify1_one_way_unify1_lst(1, tts1, tts2, subst)
  } 
  static one_way_unify(term1, term2) {
    return boyer.one_way_unify1(term1, term2, NofibPrelude.Nil)
  } 
  static apply_subst(subst, t) {
    let vid, found, value, scrut, ls, f, args, arg$Fun$0$, arg$Fun$1$, arg$Fun$2$, arg$Var$0$, element1$, element0$, lambda, tmp;
    if (t instanceof boyer.Var.class) {
      arg$Var$0$ = t.i;
      vid = arg$Var$0$;
      scrut = boyer.find(vid, subst);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        value = element1$;
        found = element0$;
        if (found === true) {
          return value
        }
        return boyer.Var(vid);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (t instanceof boyer.Fun.class) {
      arg$Fun$0$ = t.i;
      arg$Fun$1$ = t.t;
      arg$Fun$2$ = t.l;
      ls = arg$Fun$2$;
      args = arg$Fun$1$;
      f = arg$Fun$0$;
      lambda = (undefined, function (x) {
        return boyer.apply_subst(subst, x)
      });
      tmp = NofibPrelude.map(lambda, args);
      return boyer.Fun(f, tmp, ls)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static rewrite_with_lemmas_helper(term, lss) {
    return boyer.rewrite_with_lemmas_helper_rewrite_with_lemmas_rewrite(0, term, lss)
  } 
  static rewrite_with_lemmas(term, lss) {
    return boyer.rewrite_with_lemmas_helper_rewrite_with_lemmas_rewrite(1, term, lss)
  } 
  static rewrite(t) {
    return boyer.rewrite_with_lemmas_helper_rewrite_with_lemmas_rewrite(2, t, undefined)
  } 
  static truep(x, l) {
    let arg$Fun$0$;
    if (x instanceof boyer.Fun.class) {
      arg$Fun$0$ = x.i;
      if (arg$Fun$0$ instanceof boyer.TRUE.class) {
        return true
      }
      return boyer.termInList(x, l);
    }
    return boyer.termInList(x, l);
  } 
  static falsep(x, l) {
    let arg$Fun$0$;
    if (x instanceof boyer.Fun.class) {
      arg$Fun$0$ = x.i;
      if (arg$Fun$0$ instanceof boyer.FALSE.class) {
        return true
      }
      return boyer.termInList(x, l);
    }
    return boyer.termInList(x, l);
  } 
  static tautologyp(x, true_lst, false_lst) {
    loopLabel: while (true) {
      let scrut, scrut1, e, t, cond, scrut2, scrut3, scrut4, scrut5, arg$Fun$0$, arg$Fun$1$, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2, tmp, tmp1;
      scrut = boyer.truep(x, true_lst);
      if (scrut === true) {
        return true
      }
      scrut1 = boyer.falsep(x, false_lst);
      if (scrut1 === true) {
        return false
      }
      if (x instanceof boyer.Fun.class) {
        arg$Fun$0$ = x.i;
        arg$Fun$1$ = x.t;
        if (arg$Fun$0$ instanceof boyer.IF.class) {
          if (arg$Fun$1$ instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = arg$Fun$1$.head;
            arg$Cons$1$ = arg$Fun$1$.tail;
            if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$1 = arg$Cons$1$.head;
              arg$Cons$1$1 = arg$Cons$1$.tail;
              if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
                arg$Cons$0$2 = arg$Cons$1$1.head;
                arg$Cons$1$2 = arg$Cons$1$1.tail;
                if (arg$Cons$1$2 instanceof NofibPrelude.Nil.class) {
                  e = arg$Cons$0$2;
                  t = arg$Cons$0$1;
                  cond = arg$Cons$0$;
                  scrut2 = boyer.truep(cond, true_lst);
                  if (scrut2 === true) {
                    x = t;
                    continue loopLabel
                  }
                  scrut3 = boyer.falsep(cond, false_lst);
                  if (scrut3 === true) {
                    x = e;
                    continue loopLabel
                  }
                  tmp = NofibPrelude.Cons(cond, true_lst);
                  scrut4 = boyer.tautologyp(t, tmp, false_lst);
                  if (scrut4 === true) {
                    tmp1 = NofibPrelude.Cons(cond, false_lst);
                    scrut5 = boyer.tautologyp(e, true_lst, tmp1);
                    if (scrut5 === true) {
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
            return false;
          }
          return false;
        }
        return false;
      }
      return false;
    }
  } 
  static tautp(x) {
    let tmp;
    tmp = boyer.rewrite(x);
    return boyer.tautologyp(tmp, NofibPrelude.Nil, NofibPrelude.Nil)
  } 
  static test0(xxxx) {
    let quotient, if_, sub1, plus, f, implies, times, exp_, gcd_, difference, one, remainder, four, and_, reverse_, or_, odd_, two, lessp, cons, add1, equal, append_, member, zerop, not_, length_, even_, a, b, c, d, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero, subst0, theorem, lambda, tmp, lambda1, tmp1, lambda2, tmp2, lambda3, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40;
    one = function one() {
      let lambda4, tmp41;
      lambda4 = (undefined, function () {
        let tmp42, tmp43, tmp44;
        tmp42 = one();
        tmp43 = add1(zero);
        tmp44 = globalThis.Object.freeze([
          tmp42,
          tmp43
        ]);
        return NofibPrelude.Cons(tmp44, NofibPrelude.Nil)
      });
      tmp41 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.ONE, NofibPrelude.Nil, tmp41)
    };
    two = function two() {
      let lambda4, tmp41;
      lambda4 = (undefined, function () {
        let tmp42, tmp43, tmp44, tmp45;
        tmp42 = two();
        tmp43 = one();
        tmp44 = add1(tmp43);
        tmp45 = globalThis.Object.freeze([
          tmp42,
          tmp44
        ]);
        return NofibPrelude.Cons(tmp45, NofibPrelude.Nil)
      });
      tmp41 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.TWO, NofibPrelude.Nil, tmp41)
    };
    four = function four() {
      let lambda4, tmp41;
      lambda4 = (undefined, function () {
        let tmp42, tmp43, tmp44, tmp45, tmp46;
        tmp42 = four();
        tmp43 = two();
        tmp44 = add1(tmp43);
        tmp45 = add1(tmp44);
        tmp46 = globalThis.Object.freeze([
          tmp42,
          tmp45
        ]);
        return NofibPrelude.Cons(tmp46, NofibPrelude.Nil)
      });
      tmp41 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.FOUR, NofibPrelude.Nil, tmp41)
    };
    add1 = function add1(a1) {
      let tmp41, lambda4, tmp42;
      tmp41 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
      lambda4 = (undefined, function () {
        return NofibPrelude.Nil
      });
      tmp42 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.ADD1, tmp41, tmp42)
    };
    if_ = function if_(a1, b1, c1) {
      let tmp41, tmp42, tmp43, lambda4, tmp44;
      tmp41 = NofibPrelude.Cons(c1, NofibPrelude.Nil);
      tmp42 = NofibPrelude.Cons(b1, tmp41);
      tmp43 = NofibPrelude.Cons(a1, tmp42);
      lambda4 = (undefined, function () {
        let tmp45, tmp46, tmp47, tmp48, tmp49, tmp50;
        tmp45 = if_(x, y, z);
        tmp46 = if_(tmp45, u, w);
        tmp47 = if_(y, u, w);
        tmp48 = if_(z, u, w);
        tmp49 = if_(x, tmp47, tmp48);
        tmp50 = globalThis.Object.freeze([
          tmp46,
          tmp49
        ]);
        return NofibPrelude.Cons(tmp50, NofibPrelude.Nil)
      });
      tmp44 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.IF, tmp43, tmp44)
    };
    not_ = function not_(a1) {
      let tmp41, lambda4, tmp42;
      tmp41 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
      lambda4 = (undefined, function () {
        let tmp43, tmp44, tmp45;
        tmp43 = not_(x);
        tmp44 = if_(x, boyerFalse, boyerTrue);
        tmp45 = globalThis.Object.freeze([
          tmp43,
          tmp44
        ]);
        return NofibPrelude.Cons(tmp45, NofibPrelude.Nil)
      });
      tmp42 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.NOT, tmp41, tmp42)
    };
    and_ = function and_(a1, b1) {
      let tmp41, tmp42, lambda4, tmp43;
      tmp41 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp42 = NofibPrelude.Cons(a1, tmp41);
      lambda4 = (undefined, function () {
        let tmp44, tmp45, tmp46, tmp47;
        tmp44 = and_(x, y);
        tmp45 = if_(y, boyerTrue, boyerFalse);
        tmp46 = if_(x, tmp45, boyerFalse);
        tmp47 = globalThis.Object.freeze([
          tmp44,
          tmp46
        ]);
        return NofibPrelude.Cons(tmp47, NofibPrelude.Nil)
      });
      tmp43 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.AND, tmp42, tmp43)
    };
    append_ = function append_(a1, b1) {
      let tmp41, tmp42, lambda4, tmp43;
      tmp41 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp42 = NofibPrelude.Cons(a1, tmp41);
      lambda4 = (undefined, function () {
        let tmp44, tmp45, tmp46, tmp47, tmp48;
        tmp44 = append_(x, y);
        tmp45 = append_(tmp44, z);
        tmp46 = append_(y, z);
        tmp47 = append_(x, tmp46);
        tmp48 = globalThis.Object.freeze([
          tmp45,
          tmp47
        ]);
        return NofibPrelude.Cons(tmp48, NofibPrelude.Nil)
      });
      tmp43 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.APPEND, tmp42, tmp43)
    };
    cons = function cons(a1, b1) {
      let tmp41, tmp42, lambda4, tmp43;
      tmp41 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp42 = NofibPrelude.Cons(a1, tmp41);
      lambda4 = (undefined, function () {
        return NofibPrelude.Nil
      });
      tmp43 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.CONS, tmp42, tmp43)
    };
    difference = function difference(a1, b1) {
      let tmp41, tmp42, lambda4, tmp43;
      tmp41 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp42 = NofibPrelude.Cons(a1, tmp41);
      lambda4 = (undefined, function () {
        let tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77;
        tmp44 = difference(x, x);
        tmp45 = globalThis.Object.freeze([
          tmp44,
          zero
        ]);
        tmp46 = plus(x, y);
        tmp47 = difference(tmp46, x);
        tmp48 = globalThis.Object.freeze([
          tmp47,
          y
        ]);
        tmp49 = plus(y, x);
        tmp50 = difference(tmp49, x);
        tmp51 = globalThis.Object.freeze([
          tmp50,
          y
        ]);
        tmp52 = plus(x, y);
        tmp53 = plus(x, z);
        tmp54 = difference(tmp52, tmp53);
        tmp55 = difference(y, z);
        tmp56 = globalThis.Object.freeze([
          tmp54,
          tmp55
        ]);
        tmp57 = plus(x, z);
        tmp58 = plus(y, tmp57);
        tmp59 = difference(tmp58, x);
        tmp60 = plus(y, z);
        tmp61 = globalThis.Object.freeze([
          tmp59,
          tmp60
        ]);
        tmp62 = plus(y, z);
        tmp63 = add1(tmp62);
        tmp64 = difference(tmp63, z);
        tmp65 = add1(y);
        tmp66 = globalThis.Object.freeze([
          tmp64,
          tmp65
        ]);
        tmp67 = add1(x);
        tmp68 = add1(tmp67);
        tmp69 = two();
        tmp70 = difference(tmp68, tmp69);
        tmp71 = globalThis.Object.freeze([
          tmp70,
          x
        ]);
        tmp72 = NofibPrelude.Cons(tmp71, NofibPrelude.Nil);
        tmp73 = NofibPrelude.Cons(tmp66, tmp72);
        tmp74 = NofibPrelude.Cons(tmp61, tmp73);
        tmp75 = NofibPrelude.Cons(tmp56, tmp74);
        tmp76 = NofibPrelude.Cons(tmp51, tmp75);
        tmp77 = NofibPrelude.Cons(tmp48, tmp76);
        return NofibPrelude.Cons(tmp45, tmp77)
      });
      tmp43 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.DIFFERENCE, tmp42, tmp43)
    };
    equal = function equal(a1, b1) {
      let tmp41, tmp42, lambda4, tmp43;
      tmp41 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp42 = NofibPrelude.Cons(a1, tmp41);
      lambda4 = (undefined, function () {
        let tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122, tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, tmp129;
        tmp44 = plus(x, y);
        tmp45 = equal(tmp44, zero);
        tmp46 = zerop(x);
        tmp47 = zerop(y);
        tmp48 = and_(tmp46, tmp47);
        tmp49 = globalThis.Object.freeze([
          tmp45,
          tmp48
        ]);
        tmp50 = plus(x, y);
        tmp51 = plus(x, z);
        tmp52 = equal(tmp50, tmp51);
        tmp53 = equal(y, z);
        tmp54 = globalThis.Object.freeze([
          tmp52,
          tmp53
        ]);
        tmp55 = difference(x, y);
        tmp56 = equal(zero, tmp55);
        tmp57 = lessp(y, x);
        tmp58 = not_(tmp57);
        tmp59 = globalThis.Object.freeze([
          tmp56,
          tmp58
        ]);
        tmp60 = difference(x, y);
        tmp61 = equal(x, tmp60);
        tmp62 = equal(x, zero);
        tmp63 = zerop(y);
        tmp64 = or_(tmp62, tmp63);
        tmp65 = globalThis.Object.freeze([
          tmp61,
          tmp64
        ]);
        tmp66 = times(x, y);
        tmp67 = equal(tmp66, zero);
        tmp68 = zerop(x);
        tmp69 = zerop(y);
        tmp70 = or_(tmp68, tmp69);
        tmp71 = globalThis.Object.freeze([
          tmp67,
          tmp70
        ]);
        tmp72 = append_(x, y);
        tmp73 = append_(x, z);
        tmp74 = equal(tmp72, tmp73);
        tmp75 = equal(y, z);
        tmp76 = globalThis.Object.freeze([
          tmp74,
          tmp75
        ]);
        tmp77 = times(x, y);
        tmp78 = equal(y, tmp77);
        tmp79 = equal(y, zero);
        tmp80 = one();
        tmp81 = equal(x, tmp80);
        tmp82 = or_(tmp79, tmp81);
        tmp83 = globalThis.Object.freeze([
          tmp78,
          tmp82
        ]);
        tmp84 = times(x, y);
        tmp85 = equal(x, tmp84);
        tmp86 = equal(x, zero);
        tmp87 = one();
        tmp88 = equal(y, tmp87);
        tmp89 = or_(tmp86, tmp88);
        tmp90 = globalThis.Object.freeze([
          tmp85,
          tmp89
        ]);
        tmp91 = times(x, y);
        tmp92 = one();
        tmp93 = equal(tmp91, tmp92);
        tmp94 = one();
        tmp95 = equal(x, tmp94);
        tmp96 = one();
        tmp97 = equal(y, tmp96);
        tmp98 = and_(tmp95, tmp97);
        tmp99 = globalThis.Object.freeze([
          tmp93,
          tmp98
        ]);
        tmp100 = difference(x, y);
        tmp101 = difference(z, y);
        tmp102 = equal(tmp100, tmp101);
        tmp103 = lessp(x, y);
        tmp104 = lessp(y, z);
        tmp105 = not_(tmp104);
        tmp106 = lessp(z, y);
        tmp107 = lessp(y, x);
        tmp108 = not_(tmp107);
        tmp109 = equal(x, z);
        tmp110 = if_(tmp106, tmp108, tmp109);
        tmp111 = if_(tmp103, tmp105, tmp110);
        tmp112 = globalThis.Object.freeze([
          tmp102,
          tmp111
        ]);
        tmp113 = lessp(x, y);
        tmp114 = equal(tmp113, z);
        tmp115 = lessp(x, y);
        tmp116 = equal(boyerTrue, z);
        tmp117 = equal(boyerFalse, z);
        tmp118 = if_(tmp115, tmp116, tmp117);
        tmp119 = globalThis.Object.freeze([
          tmp114,
          tmp118
        ]);
        tmp120 = NofibPrelude.Cons(tmp119, NofibPrelude.Nil);
        tmp121 = NofibPrelude.Cons(tmp112, tmp120);
        tmp122 = NofibPrelude.Cons(tmp99, tmp121);
        tmp123 = NofibPrelude.Cons(tmp90, tmp122);
        tmp124 = NofibPrelude.Cons(tmp83, tmp123);
        tmp125 = NofibPrelude.Cons(tmp76, tmp124);
        tmp126 = NofibPrelude.Cons(tmp71, tmp125);
        tmp127 = NofibPrelude.Cons(tmp65, tmp126);
        tmp128 = NofibPrelude.Cons(tmp59, tmp127);
        tmp129 = NofibPrelude.Cons(tmp54, tmp128);
        return NofibPrelude.Cons(tmp49, tmp129)
      });
      tmp43 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.EQUAL, tmp42, tmp43)
    };
    even_ = function even_(a1) {
      let tmp41, lambda4, tmp42;
      tmp41 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
      lambda4 = (undefined, function () {
        let tmp43, tmp44, tmp45, tmp46, tmp47, tmp48;
        tmp43 = even_(x);
        tmp44 = zerop(x);
        tmp45 = sub1(x);
        tmp46 = odd_(tmp45);
        tmp47 = if_(tmp44, boyerTrue, tmp46);
        tmp48 = globalThis.Object.freeze([
          tmp43,
          tmp47
        ]);
        return NofibPrelude.Cons(tmp48, NofibPrelude.Nil)
      });
      tmp42 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.EVEN, tmp41, tmp42)
    };
    exp_ = function exp_(a1, b1) {
      let tmp41, tmp42, lambda4, tmp43;
      tmp41 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp42 = NofibPrelude.Cons(a1, tmp41);
      lambda4 = (undefined, function () {
        let tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55;
        tmp44 = plus(y, z);
        tmp45 = exp_(x, tmp44);
        tmp46 = exp_(x, y);
        tmp47 = exp_(x, z);
        tmp48 = times(tmp46, tmp47);
        tmp49 = globalThis.Object.freeze([
          tmp45,
          tmp48
        ]);
        tmp50 = times(y, z);
        tmp51 = exp_(x, tmp50);
        tmp52 = exp_(x, y);
        tmp53 = exp_(tmp52, z);
        tmp54 = globalThis.Object.freeze([
          tmp51,
          tmp53
        ]);
        tmp55 = NofibPrelude.Cons(tmp54, NofibPrelude.Nil);
        return NofibPrelude.Cons(tmp49, tmp55)
      });
      tmp43 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.EXP, tmp42, tmp43)
    };
    f = function f(a1) {
      let tmp41, lambda4, tmp42;
      tmp41 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
      lambda4 = (undefined, function () {
        return NofibPrelude.Nil
      });
      tmp42 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.F, tmp41, tmp42)
    };
    gcd_ = function gcd_(a1, b1) {
      let tmp41, tmp42, lambda4, tmp43;
      tmp41 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp42 = NofibPrelude.Cons(a1, tmp41);
      lambda4 = (undefined, function () {
        let tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53;
        tmp44 = gcd_(x, y);
        tmp45 = gcd_(y, x);
        tmp46 = globalThis.Object.freeze([
          tmp44,
          tmp45
        ]);
        tmp47 = times(x, z);
        tmp48 = times(y, z);
        tmp49 = gcd_(tmp47, tmp48);
        tmp50 = gcd_(x, y);
        tmp51 = times(z, tmp50);
        tmp52 = globalThis.Object.freeze([
          tmp49,
          tmp51
        ]);
        tmp53 = NofibPrelude.Cons(tmp52, NofibPrelude.Nil);
        return NofibPrelude.Cons(tmp46, tmp53)
      });
      tmp43 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.GCD, tmp42, tmp43)
    };
    implies = function implies(a1, b1) {
      let tmp41, tmp42, lambda4, tmp43;
      tmp41 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp42 = NofibPrelude.Cons(a1, tmp41);
      lambda4 = (undefined, function () {
        let tmp44, tmp45, tmp46, tmp47;
        tmp44 = implies(x, y);
        tmp45 = if_(y, boyerTrue, boyerFalse);
        tmp46 = if_(x, tmp45, boyerTrue);
        tmp47 = globalThis.Object.freeze([
          tmp44,
          tmp46
        ]);
        return NofibPrelude.Cons(tmp47, NofibPrelude.Nil)
      });
      tmp43 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.IMPLIES, tmp42, tmp43)
    };
    length_ = function length_(a1) {
      let tmp41, lambda4, tmp42;
      tmp41 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
      lambda4 = (undefined, function () {
        let tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56;
        tmp43 = reverse_(x);
        tmp44 = length_(tmp43);
        tmp45 = length_(x);
        tmp46 = globalThis.Object.freeze([
          tmp44,
          tmp45
        ]);
        tmp47 = cons(u, w);
        tmp48 = cons(z, tmp47);
        tmp49 = cons(y, tmp48);
        tmp50 = cons(x, tmp49);
        tmp51 = length_(tmp50);
        tmp52 = four();
        tmp53 = length_(w);
        tmp54 = plus(tmp52, tmp53);
        tmp55 = globalThis.Object.freeze([
          tmp51,
          tmp54
        ]);
        tmp56 = NofibPrelude.Cons(tmp55, NofibPrelude.Nil);
        return NofibPrelude.Cons(tmp46, tmp56)
      });
      tmp42 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.LENGTH, tmp41, tmp42)
    };
    lessp = function lessp(a1, b1) {
      let tmp41, tmp42, lambda4, tmp43;
      tmp41 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp42 = NofibPrelude.Cons(a1, tmp41);
      lambda4 = (undefined, function () {
        let tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78;
        tmp44 = remainder(x, y);
        tmp45 = lessp(tmp44, y);
        tmp46 = zerop(y);
        tmp47 = not_(tmp46);
        tmp48 = globalThis.Object.freeze([
          tmp45,
          tmp47
        ]);
        tmp49 = quotient(x, y);
        tmp50 = lessp(tmp49, x);
        tmp51 = zerop(x);
        tmp52 = not_(tmp51);
        tmp53 = one();
        tmp54 = lessp(tmp53, y);
        tmp55 = and_(tmp52, tmp54);
        tmp56 = globalThis.Object.freeze([
          tmp50,
          tmp55
        ]);
        tmp57 = plus(x, y);
        tmp58 = plus(x, z);
        tmp59 = lessp(tmp57, tmp58);
        tmp60 = lessp(y, z);
        tmp61 = globalThis.Object.freeze([
          tmp59,
          tmp60
        ]);
        tmp62 = times(x, z);
        tmp63 = times(y, z);
        tmp64 = lessp(tmp62, tmp63);
        tmp65 = zerop(z);
        tmp66 = not_(tmp65);
        tmp67 = lessp(x, y);
        tmp68 = and_(tmp66, tmp67);
        tmp69 = globalThis.Object.freeze([
          tmp64,
          tmp68
        ]);
        tmp70 = plus(x, y);
        tmp71 = lessp(y, tmp70);
        tmp72 = zerop(x);
        tmp73 = not_(tmp72);
        tmp74 = globalThis.Object.freeze([
          tmp71,
          tmp73
        ]);
        tmp75 = NofibPrelude.Cons(tmp74, NofibPrelude.Nil);
        tmp76 = NofibPrelude.Cons(tmp69, tmp75);
        tmp77 = NofibPrelude.Cons(tmp61, tmp76);
        tmp78 = NofibPrelude.Cons(tmp56, tmp77);
        return NofibPrelude.Cons(tmp48, tmp78)
      });
      tmp43 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.LESSP, tmp42, tmp43)
    };
    member = function member(a1, b1) {
      let tmp41, tmp42, lambda4, tmp43;
      tmp41 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp42 = NofibPrelude.Cons(a1, tmp41);
      lambda4 = (undefined, function () {
        let tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54;
        tmp44 = append_(y, z);
        tmp45 = member(x, tmp44);
        tmp46 = member(x, y);
        tmp47 = member(x, z);
        tmp48 = or_(tmp46, tmp47);
        tmp49 = globalThis.Object.freeze([
          tmp45,
          tmp48
        ]);
        tmp50 = reverse_(y);
        tmp51 = member(x, tmp50);
        tmp52 = member(x, y);
        tmp53 = globalThis.Object.freeze([
          tmp51,
          tmp52
        ]);
        tmp54 = NofibPrelude.Cons(tmp53, NofibPrelude.Nil);
        return NofibPrelude.Cons(tmp49, tmp54)
      });
      tmp43 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.MEMBER, tmp42, tmp43)
    };
    odd_ = function odd_(a1) {
      let tmp41, lambda4, tmp42;
      tmp41 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
      lambda4 = (undefined, function () {
        let tmp43, tmp44, tmp45, tmp46;
        tmp43 = odd_(x);
        tmp44 = sub1(x);
        tmp45 = even_(tmp44);
        tmp46 = globalThis.Object.freeze([
          tmp43,
          tmp45
        ]);
        return NofibPrelude.Cons(tmp46, NofibPrelude.Nil)
      });
      tmp42 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.ODD, tmp41, tmp42)
    };
    or_ = function or_(a1, b1) {
      let tmp41, tmp42, lambda4, tmp43;
      tmp41 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp42 = NofibPrelude.Cons(a1, tmp41);
      lambda4 = (undefined, function () {
        let tmp44, tmp45, tmp46, tmp47;
        tmp44 = or_(x, y);
        tmp45 = if_(y, boyerTrue, boyerFalse);
        tmp46 = if_(x, boyerTrue, tmp45);
        tmp47 = globalThis.Object.freeze([
          tmp44,
          tmp46
        ]);
        return NofibPrelude.Cons(tmp47, NofibPrelude.Nil)
      });
      tmp43 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.OR, tmp42, tmp43)
    };
    plus = function plus(a1, b1) {
      let tmp41, tmp42, lambda4, tmp43;
      tmp41 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp42 = NofibPrelude.Cons(a1, tmp41);
      lambda4 = (undefined, function () {
        let tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60;
        tmp44 = plus(x, y);
        tmp45 = plus(tmp44, z);
        tmp46 = plus(y, z);
        tmp47 = plus(x, tmp46);
        tmp48 = globalThis.Object.freeze([
          tmp45,
          tmp47
        ]);
        tmp49 = remainder(x, y);
        tmp50 = quotient(x, y);
        tmp51 = times(y, tmp50);
        tmp52 = plus(tmp49, tmp51);
        tmp53 = globalThis.Object.freeze([
          tmp52,
          x
        ]);
        tmp54 = add1(y);
        tmp55 = plus(x, tmp54);
        tmp56 = plus(x, y);
        tmp57 = add1(tmp56);
        tmp58 = globalThis.Object.freeze([
          tmp55,
          tmp57
        ]);
        tmp59 = NofibPrelude.Cons(tmp58, NofibPrelude.Nil);
        tmp60 = NofibPrelude.Cons(tmp53, tmp59);
        return NofibPrelude.Cons(tmp48, tmp60)
      });
      tmp43 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.PLUS, tmp42, tmp43)
    };
    quotient = function quotient(a1, b1) {
      let tmp41, tmp42, lambda4, tmp43;
      tmp41 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp42 = NofibPrelude.Cons(a1, tmp41);
      lambda4 = (undefined, function () {
        let tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57;
        tmp44 = plus(x, y);
        tmp45 = plus(x, tmp44);
        tmp46 = two();
        tmp47 = quotient(tmp45, tmp46);
        tmp48 = two();
        tmp49 = quotient(y, tmp48);
        tmp50 = plus(x, tmp49);
        tmp51 = globalThis.Object.freeze([
          tmp47,
          tmp50
        ]);
        tmp52 = times(y, x);
        tmp53 = quotient(tmp52, y);
        tmp54 = zerop(y);
        tmp55 = if_(tmp54, zero, x);
        tmp56 = globalThis.Object.freeze([
          tmp53,
          tmp55
        ]);
        tmp57 = NofibPrelude.Cons(tmp56, NofibPrelude.Nil);
        return NofibPrelude.Cons(tmp51, tmp57)
      });
      tmp43 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.QUOTIENT, tmp42, tmp43)
    };
    remainder = function remainder(a1, b1) {
      let tmp41, tmp42, lambda4, tmp43;
      tmp41 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp42 = NofibPrelude.Cons(a1, tmp41);
      lambda4 = (undefined, function () {
        let tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57;
        tmp44 = one();
        tmp45 = remainder(x, tmp44);
        tmp46 = globalThis.Object.freeze([
          tmp45,
          zero
        ]);
        tmp47 = remainder(x, x);
        tmp48 = globalThis.Object.freeze([
          tmp47,
          zero
        ]);
        tmp49 = times(x, y);
        tmp50 = remainder(tmp49, x);
        tmp51 = globalThis.Object.freeze([
          tmp50,
          zero
        ]);
        tmp52 = times(x, y);
        tmp53 = remainder(tmp52, y);
        tmp54 = globalThis.Object.freeze([
          tmp53,
          zero
        ]);
        tmp55 = NofibPrelude.Cons(tmp54, NofibPrelude.Nil);
        tmp56 = NofibPrelude.Cons(tmp51, tmp55);
        tmp57 = NofibPrelude.Cons(tmp48, tmp56);
        return NofibPrelude.Cons(tmp46, tmp57)
      });
      tmp43 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.REMAINDER, tmp42, tmp43)
    };
    reverse_ = function reverse_(a1) {
      let tmp41, lambda4, tmp42;
      tmp41 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
      lambda4 = (undefined, function () {
        let tmp43, tmp44, tmp45, tmp46, tmp47, tmp48;
        tmp43 = append_(x, y);
        tmp44 = reverse_(tmp43);
        tmp45 = reverse_(y);
        tmp46 = reverse_(x);
        tmp47 = append_(tmp45, tmp46);
        tmp48 = globalThis.Object.freeze([
          tmp44,
          tmp47
        ]);
        return NofibPrelude.Cons(tmp48, NofibPrelude.Nil)
      });
      tmp42 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.REVERSE, tmp41, tmp42)
    };
    sub1 = function sub1(a1) {
      let tmp41, lambda4, tmp42;
      tmp41 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
      lambda4 = (undefined, function () {
        let tmp43, tmp44, tmp45;
        tmp43 = add1(x);
        tmp44 = sub1(tmp43);
        tmp45 = globalThis.Object.freeze([
          tmp44,
          x
        ]);
        return NofibPrelude.Cons(tmp45, NofibPrelude.Nil)
      });
      tmp42 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.SUB1, tmp41, tmp42)
    };
    times = function times(a1, b1) {
      let tmp41, tmp42, lambda4, tmp43;
      tmp41 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
      tmp42 = NofibPrelude.Cons(a1, tmp41);
      lambda4 = (undefined, function () {
        let tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68;
        tmp44 = plus(y, z);
        tmp45 = times(x, tmp44);
        tmp46 = times(x, y);
        tmp47 = times(x, z);
        tmp48 = plus(tmp46, tmp47);
        tmp49 = globalThis.Object.freeze([
          tmp45,
          tmp48
        ]);
        tmp50 = times(x, y);
        tmp51 = times(tmp50, z);
        tmp52 = times(y, z);
        tmp53 = times(x, tmp52);
        tmp54 = globalThis.Object.freeze([
          tmp51,
          tmp53
        ]);
        tmp55 = difference(y, z);
        tmp56 = times(x, tmp55);
        tmp57 = times(y, x);
        tmp58 = times(z, x);
        tmp59 = difference(tmp57, tmp58);
        tmp60 = globalThis.Object.freeze([
          tmp56,
          tmp59
        ]);
        tmp61 = add1(y);
        tmp62 = times(x, tmp61);
        tmp63 = times(x, y);
        tmp64 = plus(x, tmp63);
        tmp65 = globalThis.Object.freeze([
          tmp62,
          tmp64
        ]);
        tmp66 = NofibPrelude.Cons(tmp65, NofibPrelude.Nil);
        tmp67 = NofibPrelude.Cons(tmp60, tmp66);
        tmp68 = NofibPrelude.Cons(tmp54, tmp67);
        return NofibPrelude.Cons(tmp49, tmp68)
      });
      tmp43 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.TIMES, tmp42, tmp43)
    };
    zerop = function zerop(a1) {
      let tmp41, lambda4, tmp42;
      tmp41 = NofibPrelude.Cons(a1, NofibPrelude.Nil);
      lambda4 = (undefined, function () {
        let tmp43, tmp44, tmp45;
        tmp43 = zerop(x);
        tmp44 = equal(x, zero);
        tmp45 = globalThis.Object.freeze([
          tmp43,
          tmp44
        ]);
        return NofibPrelude.Cons(tmp45, NofibPrelude.Nil)
      });
      tmp42 = NofibPrelude.lazy(lambda4);
      return boyer.Fun(boyer.ZEROP, tmp41, tmp42)
    };
    a = boyer.Var(boyer.A);
    b = boyer.Var(boyer.B);
    c = boyer.Var(boyer.C);
    d = boyer.Var(boyer.D);
    u = boyer.Var(boyer.U);
    w = boyer.Var(boyer.W);
    x = boyer.Var(boyer.X);
    y = boyer.Var(boyer.Y);
    z = boyer.Var(boyer.Z);
    lambda = (undefined, function () {
      return NofibPrelude.Nil
    });
    tmp = NofibPrelude.lazy(lambda);
    boyerFalse = boyer.Fun(boyer.FALSE, NofibPrelude.Nil, tmp);
    lambda1 = (undefined, function () {
      return NofibPrelude.Nil
    });
    tmp1 = NofibPrelude.lazy(lambda1);
    nil = boyer.Fun(boyer.NIL, NofibPrelude.Nil, tmp1);
    lambda2 = (undefined, function () {
      return NofibPrelude.Nil
    });
    tmp2 = NofibPrelude.lazy(lambda2);
    boyerTrue = boyer.Fun(boyer.TRUE, NofibPrelude.Nil, tmp2);
    lambda3 = (undefined, function () {
      return NofibPrelude.Nil
    });
    tmp3 = NofibPrelude.lazy(lambda3);
    zero = boyer.Fun(boyer.ZERO, NofibPrelude.Nil, tmp3);
    tmp4 = plus(a, b);
    tmp5 = plus(c, zero);
    tmp6 = plus(tmp4, tmp5);
    tmp7 = f(tmp6);
    tmp8 = globalThis.Object.freeze([
      boyer.X,
      tmp7
    ]);
    tmp9 = times(a, b);
    tmp10 = plus(c, d);
    tmp11 = times(tmp9, tmp10);
    tmp12 = f(tmp11);
    tmp13 = globalThis.Object.freeze([
      boyer.Y,
      tmp12
    ]);
    tmp14 = append_(a, b);
    tmp15 = append_(tmp14, nil);
    tmp16 = reverse_(tmp15);
    tmp17 = f(tmp16);
    tmp18 = globalThis.Object.freeze([
      boyer.Z,
      tmp17
    ]);
    tmp19 = plus(a, b);
    tmp20 = difference(x, y);
    tmp21 = equal(tmp19, tmp20);
    tmp22 = globalThis.Object.freeze([
      boyer.U,
      tmp21
    ]);
    tmp23 = remainder(a, b);
    tmp24 = length_(b);
    tmp25 = member(a, tmp24);
    tmp26 = lessp(tmp23, tmp25);
    tmp27 = globalThis.Object.freeze([
      boyer.W,
      tmp26
    ]);
    tmp28 = NofibPrelude.Cons(tmp27, NofibPrelude.Nil);
    tmp29 = NofibPrelude.Cons(tmp22, tmp28);
    tmp30 = NofibPrelude.Cons(tmp18, tmp29);
    tmp31 = NofibPrelude.Cons(tmp13, tmp30);
    subst0 = NofibPrelude.Cons(tmp8, tmp31);
    tmp32 = implies(xxxx, y);
    tmp33 = implies(y, z);
    tmp34 = implies(z, u);
    tmp35 = implies(u, w);
    tmp36 = and_(tmp34, tmp35);
    tmp37 = and_(tmp33, tmp36);
    tmp38 = and_(tmp32, tmp37);
    tmp39 = implies(x, w);
    theorem = implies(tmp38, tmp39);
    tmp40 = boyer.apply_subst(subst0, theorem);
    return boyer.tautp(tmp40)
  } 
  static testBoyer_nofib(n) {
    let tmp, tmp1;
    tmp = boyer.Var(boyer.X);
    tmp1 = NofibPrelude.replicate(n, tmp);
    return NofibPrelude.all(boyer.test0, tmp1)
  } 
  static main() {
    return boyer.testBoyer_nofib(5)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "boyer"]; 
});
let boyer = boyer1; export default boyer;
