const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Option from "./../../Option.mjs";
import Predef from "./../../Predef.mjs";
import Stack from "./../../Stack.mjs";
import Tree from "./Tree.mjs";
import Keywords from "./Keywords.mjs";
import Token from "./Token.mjs";
let TreeHelpers1;
(class TreeHelpers {
  static {
    TreeHelpers1 = this
  }
  static first(array) {
    let first, element0$;
    if (runtime.Tuple.isArrayLike(array) && array.length >= 1) {
      element0$ = runtime.Tuple.get(array, 0);
      runtime.Tuple.slice(array, 1, 0);
      first = element0$;
      return first
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static second(array) {
    let second, element1$;
    if (runtime.Tuple.isArrayLike(array) && array.length >= 2) {
      runtime.Tuple.get(array, 0);
      element1$ = runtime.Tuple.get(array, 1);
      runtime.Tuple.slice(array, 2, 0);
      second = element1$;
      return second
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static indented(text) {
    let tmp;
    tmp = runtime.safeCall(text.split("\n"));
    return runtime.safeCall(tmp.join("\n  "))
  } 
  static showAsTree(thing) {
    let itemize, go;
    itemize = function itemize(something) {
      let content, head, tail, items, remaining, m, t, m1, n, items1, k, s, m2, t1, t2, v, k1, scrutinee, branches, a, c, rhs, lhs, op, i, k2, bds, b, b1, c1, e, s1, b2, h, n1, b3, l, r, b4, p, keyword, x, y, element1$, element0$, arg$Lambda$0$, arg$Lambda$1$, arg$Ternary$0$, arg$Ternary$1$, arg$Ternary$2$, arg$Ternary$3$, arg$For$0$, arg$For$1$, arg$For$2$, arg$For$3$, arg$While$0$, arg$While$1$, arg$LetIn$0$, arg$LetIn$1$, arg$Define$0$, arg$Define$1$, arg$Infix$0$, arg$Infix$1$, arg$Infix$2$, arg$App$0$, arg$App$1$, arg$Match$0$, arg$Match$1$, arg$Literal$0$, arg$Literal$1$, arg$Sequence$0$, arg$Tuple$0$, arg$Modified$0$, arg$Modified$1$, arg$Bracketed$0$, arg$Bracketed$1$, arg$Ident$0$, arg$Error$0$, arg$Error$1$, arg$Cons$0$, arg$Cons$1$, arg$Some$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118;
      if (something instanceof Option.Some.class) {
        arg$Some$0$ = something.value;
        content = arg$Some$0$;
        tmp = go(content);
        tmp1 = "Some of " + tmp;
        tmp2 = globalThis.Object.freeze([
          tmp1
        ]);
        tmp3 = globalThis.Object.freeze([]);
        return Predef.tuple(tmp2, tmp3)
      } else if (something instanceof Option.None.class) {
        tmp4 = globalThis.Object.freeze([]);
        return Predef.tuple("None", tmp4)
      } else if (something instanceof Stack.Cons.class) {
        arg$Cons$0$ = something.head;
        arg$Cons$1$ = something.tail;
        tail = arg$Cons$1$;
        head = arg$Cons$0$;
        tmp5 = go(head);
        items = [
          tmp5
        ];
        remaining = tail;
        lbl: while (true) {
          let tail$_, head$_, arg$Cons$0$1, arg$Cons$1$1, tmp119;
          if (remaining instanceof Stack.Cons.class) {
            arg$Cons$0$1 = remaining.head;
            arg$Cons$1$1 = remaining.tail;
            tail$_ = arg$Cons$1$1;
            head$_ = arg$Cons$0$1;
            tmp119 = go(head$_);
            runtime.safeCall(items.push(tmp119));
            remaining = tail$_;
            continue lbl
          }
          break;
        }
        tmp6 = "Stack of \n" + "  ";
        tmp7 = runtime.safeCall(items.join("\n"));
        tmp8 = TreeHelpers.indented(tmp7);
        tmp9 = tmp6 + tmp8;
        tmp10 = globalThis.Object.freeze([]);
        return Predef.tuple(tmp9, tmp10)
      } else if (something instanceof Stack.Nil.class) {
        tmp11 = globalThis.Object.freeze([]);
        return globalThis.Object.freeze([
          "Nil",
          tmp11
        ])
      } else if (typeof something === 'string') {
        tmp12 = globalThis.JSON.stringify(something);
        tmp13 = globalThis.Object.freeze([]);
        return globalThis.Object.freeze([
          tmp12,
          tmp13
        ])
      } else if (globalThis.Number.isInteger(something)) {
        tmp14 = runtime.safeCall(something.toString());
        tmp15 = globalThis.Object.freeze([]);
        return globalThis.Object.freeze([
          tmp14,
          tmp15
        ])
      } else if (something instanceof Tree.Empty.class) {
        tmp16 = globalThis.Object.freeze([]);
        return globalThis.Object.freeze([
          "Empty",
          tmp16
        ])
      } else if (something instanceof Tree.Error.class) {
        arg$Error$0$ = something.tree;
        arg$Error$1$ = something.message;
        if (arg$Error$0$ instanceof Tree.Empty.class) {
          m = arg$Error$1$;
          tmp17 = go(m);
          tmp18 = globalThis.Object.freeze([
            "message",
            tmp17
          ]);
          tmp19 = globalThis.Object.freeze([
            tmp18
          ]);
          return Predef.tuple("Error", tmp19)
        }
        m1 = arg$Error$1$;
        t = arg$Error$0$;
        tmp20 = go(t);
        tmp21 = globalThis.Object.freeze([
          "tree",
          tmp20
        ]);
        tmp22 = go(m1);
        tmp23 = globalThis.Object.freeze([
          "message",
          tmp22
        ]);
        tmp24 = globalThis.Object.freeze([
          tmp21,
          tmp23
        ]);
        return Predef.tuple("Error", tmp24);
      } else if (something instanceof Tree.Ident.class) {
        arg$Ident$0$ = something.name;
        n = arg$Ident$0$;
        tmp25 = go(n);
        tmp26 = globalThis.Object.freeze([
          "name",
          tmp25
        ]);
        tmp27 = globalThis.Object.freeze([
          tmp26
        ]);
        return Predef.tuple("Ident", tmp27)
      } else if (something instanceof Tree.Bracketed.class) {
        arg$Bracketed$0$ = something.kind;
        arg$Bracketed$1$ = something.tree;
        items1 = arg$Bracketed$1$;
        k = arg$Bracketed$0$;
        tmp28 = runtime.safeCall(k.toString());
        tmp29 = "Bracketed#" + tmp28;
        tmp30 = go(items1);
        tmp31 = globalThis.Object.freeze([
          "items",
          tmp30
        ]);
        tmp32 = globalThis.Object.freeze([
          tmp31
        ]);
        return Predef.tuple(tmp29, tmp32)
      } else if (something instanceof Tree.Underscore.class) {
        tmp33 = globalThis.Object.freeze([]);
        return Predef.tuple("Underscore", tmp33)
      } else if (something instanceof Tree.Modified.class) {
        arg$Modified$0$ = something.modifier;
        arg$Modified$1$ = something.subject;
        s = arg$Modified$1$;
        m2 = arg$Modified$0$;
        tmp34 = go(m2);
        tmp35 = globalThis.Object.freeze([
          "modifier",
          tmp34
        ]);
        tmp36 = go(s);
        tmp37 = globalThis.Object.freeze([
          "subject",
          tmp36
        ]);
        tmp38 = globalThis.Object.freeze([
          tmp35,
          tmp37
        ]);
        return Predef.tuple("Modified", tmp38)
      } else if (something instanceof Tree.Tuple.class) {
        arg$Tuple$0$ = something.trees;
        t1 = arg$Tuple$0$;
        tmp39 = go(t1);
        tmp40 = globalThis.Object.freeze([
          "items",
          tmp39
        ]);
        tmp41 = globalThis.Object.freeze([
          tmp40
        ]);
        return Predef.tuple("Tuple", tmp41)
      } else if (something instanceof Tree.Sequence.class) {
        arg$Sequence$0$ = something.trees;
        t2 = arg$Sequence$0$;
        tmp42 = go(t2);
        tmp43 = globalThis.Object.freeze([
          "items",
          tmp42
        ]);
        tmp44 = globalThis.Object.freeze([
          tmp43
        ]);
        return Predef.tuple("Sequence", tmp44)
      } else if (something instanceof Tree.Literal.class) {
        arg$Literal$0$ = something.kind;
        arg$Literal$1$ = something.value;
        v = arg$Literal$1$;
        k1 = arg$Literal$0$;
        tmp45 = go(k1);
        tmp46 = "Literal#" + tmp45;
        tmp47 = tmp46 + " of ";
        tmp48 = go(v);
        tmp49 = tmp47 + tmp48;
        tmp50 = globalThis.Object.freeze([]);
        return Predef.tuple(tmp49, tmp50)
      } else if (something instanceof Tree.Match.class) {
        arg$Match$0$ = something.scrutinee;
        arg$Match$1$ = something.branches;
        branches = arg$Match$1$;
        scrutinee = arg$Match$0$;
        tmp51 = globalThis.Object.freeze([
          "scrutinee",
          scrutinee
        ]);
        tmp52 = go(branches);
        tmp53 = globalThis.Object.freeze([
          "branches",
          tmp52
        ]);
        tmp54 = globalThis.Object.freeze([
          tmp51,
          tmp53
        ]);
        return Predef.tuple("Match", tmp54)
      } else if (something instanceof Tree.App.class) {
        arg$App$0$ = something.callee;
        arg$App$1$ = something.argument;
        a = arg$App$1$;
        c = arg$App$0$;
        tmp55 = go(c);
        tmp56 = globalThis.Object.freeze([
          "callee",
          tmp55
        ]);
        tmp57 = go(a);
        tmp58 = globalThis.Object.freeze([
          "argument",
          tmp57
        ]);
        tmp59 = globalThis.Object.freeze([
          tmp56,
          tmp58
        ]);
        return Predef.tuple("App", tmp59)
      } else if (something instanceof Tree.Infix.class) {
        arg$Infix$0$ = something.op;
        arg$Infix$1$ = something.lhs;
        arg$Infix$2$ = something.rhs;
        rhs = arg$Infix$2$;
        lhs = arg$Infix$1$;
        op = arg$Infix$0$;
        tmp60 = go(op);
        tmp61 = globalThis.Object.freeze([
          "op",
          tmp60
        ]);
        tmp62 = go(lhs);
        tmp63 = globalThis.Object.freeze([
          "lhs",
          tmp62
        ]);
        tmp64 = go(rhs);
        tmp65 = globalThis.Object.freeze([
          "rhs",
          tmp64
        ]);
        tmp66 = globalThis.Object.freeze([
          tmp61,
          tmp63,
          tmp65
        ]);
        return Predef.tuple("Infix", tmp66)
      } else if (something instanceof Tree.Define.class) {
        arg$Define$0$ = something.kind;
        arg$Define$1$ = something.items;
        i = arg$Define$1$;
        k2 = arg$Define$0$;
        tmp67 = runtime.safeCall(k2.toString());
        tmp68 = globalThis.Object.freeze([
          "kind",
          tmp67
        ]);
        tmp69 = go(i);
        tmp70 = globalThis.Object.freeze([
          "items",
          tmp69
        ]);
        tmp71 = globalThis.Object.freeze([
          tmp68,
          tmp70
        ]);
        return Predef.tuple("Define", tmp71)
      } else if (something instanceof Tree.LetIn.class) {
        arg$LetIn$0$ = something.bindings;
        arg$LetIn$1$ = something.body;
        b = arg$LetIn$1$;
        bds = arg$LetIn$0$;
        tmp72 = go(bds);
        tmp73 = globalThis.Object.freeze([
          "bindings",
          tmp72
        ]);
        tmp74 = go(b);
        tmp75 = globalThis.Object.freeze([
          "body",
          tmp74
        ]);
        tmp76 = globalThis.Object.freeze([
          tmp73,
          tmp75
        ]);
        return Predef.tuple("LetIn", tmp76)
      } else if (something instanceof Tree.While.class) {
        arg$While$0$ = something.cond;
        arg$While$1$ = something.body;
        b1 = arg$While$1$;
        c1 = arg$While$0$;
        tmp77 = go(c1);
        tmp78 = globalThis.Object.freeze([
          "condition",
          tmp77
        ]);
        tmp79 = go(b1);
        tmp80 = globalThis.Object.freeze([
          "body",
          tmp79
        ]);
        tmp81 = globalThis.Object.freeze([
          tmp78,
          tmp80
        ]);
        return Predef.tuple("While", tmp81)
      } else if (something instanceof Tree.For.class) {
        arg$For$0$ = something.head;
        arg$For$1$ = something.start;
        arg$For$2$ = something.end;
        arg$For$3$ = something.body;
        b2 = arg$For$3$;
        e = arg$For$2$;
        s1 = arg$For$1$;
        h = arg$For$0$;
        tmp82 = go(h);
        tmp83 = globalThis.Object.freeze([
          "head",
          tmp82
        ]);
        tmp84 = go(s1);
        tmp85 = globalThis.Object.freeze([
          "start",
          tmp84
        ]);
        tmp86 = go(e);
        tmp87 = globalThis.Object.freeze([
          "end",
          tmp86
        ]);
        tmp88 = go(b2);
        tmp89 = globalThis.Object.freeze([
          "body",
          tmp88
        ]);
        tmp90 = globalThis.Object.freeze([
          tmp83,
          tmp85,
          tmp87,
          tmp89
        ]);
        return Predef.tuple("For", tmp90)
      } else if (something instanceof Tree.Ternary.class) {
        arg$Ternary$0$ = something.keyword;
        arg$Ternary$1$ = something.lhs;
        arg$Ternary$2$ = something.rhs;
        arg$Ternary$3$ = something.body;
        b3 = arg$Ternary$3$;
        r = arg$Ternary$2$;
        l = arg$Ternary$1$;
        n1 = arg$Ternary$0$;
        tmp91 = go(n1);
        tmp92 = globalThis.Object.freeze([
          "name",
          tmp91
        ]);
        tmp93 = go(l);
        tmp94 = globalThis.Object.freeze([
          "lhs",
          tmp93
        ]);
        tmp95 = go(r);
        tmp96 = globalThis.Object.freeze([
          "rhs",
          tmp95
        ]);
        tmp97 = go(b3);
        tmp98 = globalThis.Object.freeze([
          "body",
          tmp97
        ]);
        tmp99 = globalThis.Object.freeze([
          tmp92,
          tmp94,
          tmp96,
          tmp98
        ]);
        return Predef.tuple("Ternary", tmp99)
      } else if (something instanceof Tree.Lambda.class) {
        arg$Lambda$0$ = something.params;
        arg$Lambda$1$ = something.body;
        b4 = arg$Lambda$1$;
        p = arg$Lambda$0$;
        tmp100 = go(p);
        tmp101 = globalThis.Object.freeze([
          "params",
          tmp100
        ]);
        tmp102 = go(b4);
        tmp103 = globalThis.Object.freeze([
          "body",
          tmp102
        ]);
        tmp104 = globalThis.Object.freeze([
          tmp101,
          tmp103
        ]);
        return Predef.tuple("Lambda", tmp104)
      } else if (something instanceof Keywords.Keyword.class) {
        keyword = something;
        tmp105 = runtime.safeCall(keyword.toString());
        tmp106 = globalThis.Object.freeze([]);
        return globalThis.Object.freeze([
          tmp105,
          tmp106
        ])
      } else if (something instanceof Token.LiteralKind.Integer.class) {
        tmp107 = globalThis.Object.freeze([]);
        return Predef.tuple("Integer", tmp107)
      } else if (something instanceof Token.LiteralKind.Decimal.class) {
        tmp108 = globalThis.Object.freeze([]);
        return Predef.tuple("Decimal", tmp108)
      } else if (something instanceof Token.LiteralKind.String.class) {
        tmp109 = globalThis.Object.freeze([]);
        return Predef.tuple("String", tmp109)
      } else if (something instanceof Token.LiteralKind.Boolean.class) {
        tmp110 = globalThis.Object.freeze([]);
        return Predef.tuple("Boolean", tmp110)
      } else if (runtime.Tuple.isArrayLike(something) && something.length === 2) {
        element0$ = runtime.Tuple.get(something, 0);
        element1$ = runtime.Tuple.get(something, 1);
        y = element1$;
        x = element0$;
        tmp111 = go(x);
        tmp112 = globalThis.Object.freeze([
          "first",
          tmp111
        ]);
        tmp113 = go(y);
        tmp114 = globalThis.Object.freeze([
          "second",
          tmp113
        ]);
        tmp115 = globalThis.Object.freeze([
          tmp112,
          tmp114
        ]);
        return Predef.tuple("Pair", tmp115)
      }
      tmp116 = globalThis.JSON.stringify(something);
      tmp117 = globalThis.Object.freeze([
        "JSON.stringify(_)",
        tmp116
      ]);
      tmp118 = globalThis.Object.freeze([
        tmp117
      ]);
      return Predef.tuple("Unknown", tmp118);
    };
    go = function go(something) {
      let scrut, intro, field, intro1, scrut1, fields, intro2, dialogue, element1$, element0$, element0$1, tmp, tmp1, lambda, tmp2, tmp3, tmp4;
      scrut = itemize(something);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        if (runtime.Tuple.isArrayLike(element1$) && element1$.length === 0) {
          intro = element0$;
          return intro
        } else if (runtime.Tuple.isArrayLike(element1$) && element1$.length === 1) {
          element0$1 = runtime.Tuple.get(element1$, 0);
          field = element0$1;
          intro1 = element0$;
          scrut1 = Predef.nequals(intro1, "Unknown");
          if (scrut1 === true) {
            tmp = intro1 + " of ";
            tmp1 = TreeHelpers.second(field);
            return tmp + tmp1
          }
          fields = element1$;
          intro2 = element0$;
        } else {
          fields = element1$;
          intro2 = element0$;
        }
        lambda = (undefined, function (field1, _, _1) {
          let tmp5, tmp6, tmp7;
          tmp5 = TreeHelpers.first(field1);
          tmp6 = tmp5 + " = ";
          tmp7 = TreeHelpers.second(field1);
          return tmp6 + tmp7
        });
        dialogue = runtime.safeCall(fields.map(lambda));
        tmp2 = intro2 + ":\n  ";
        tmp3 = runtime.safeCall(dialogue.join("\n"));
        tmp4 = TreeHelpers.indented(tmp3);
        return tmp2 + tmp4
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    return go(thing)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "TreeHelpers"]; 
});
let TreeHelpers = TreeHelpers1; export default TreeHelpers;
