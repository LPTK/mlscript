const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Iter from "./../../Iter.mjs";
import Predef from "./../../Predef.mjs";
import Stack from "./../../Stack.mjs";
import Option from "./../../Option.mjs";
import StrOps from "./../../StrOps.mjs";
import Keywords from "./Keywords.mjs";
import Token from "./Token.mjs";
let Tree1;
(class Tree {
  static {
    Tree1 = this
  }
  static {
    (class DefineKind {
      static {
        Tree.DefineKind = this
      }
      static {
        this.Let = function Let(recursive) {
          return globalThis.Object.freeze(new Let.class(recursive));
        };
        (class Let {
          static {
            DefineKind.Let.class = this
          }
          constructor(recursive) {
            this.recursive = recursive;
          }
          toString() { return runtime.render(this); }
          static [definitionMetadata] = ["class", "Let", ["recursive"]]; 
        });
        (class Type {
          static {
            new this
          }
          constructor() {
            DefineKind.Type = this;
            Object.defineProperty(this, "class", {
              value: Type
            });
            globalThis.Object.freeze(this);
          }
          toString() { return runtime.render(this); }
          static [definitionMetadata] = ["object", "Type"]; 
        });
        (class Exception {
          static {
            new this
          }
          constructor() {
            DefineKind.Exception = this;
            Object.defineProperty(this, "class", {
              value: Exception
            });
            globalThis.Object.freeze(this);
          }
          toString() { return runtime.render(this); }
          static [definitionMetadata] = ["object", "Exception"]; 
        });
        (class Directive {
          static {
            new this
          }
          constructor() {
            DefineKind.Directive = this;
            Object.defineProperty(this, "class", {
              value: Directive
            });
            globalThis.Object.freeze(this);
          }
          toString() { return runtime.render(this); }
          static [definitionMetadata] = ["object", "Directive"]; 
        });
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "DefineKind"]; 
    });
    this.Empty = function Empty() {
      return globalThis.Object.freeze(new Empty.class());
    };
    (class Empty extends Tree1 {
      static {
        Tree.Empty.class = this
      }
      constructor() {
        super();
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Empty", []]; 
    });
    this.Error = function Error(tree, message) {
      return globalThis.Object.freeze(new Error.class(tree, message));
    };
    (class Error extends Tree1 {
      static {
        Tree.Error.class = this
      }
      constructor(tree, message) {
        super();
        this.tree = tree;
        this.message = message;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Error", ["tree", "message"]]; 
    });
    this.Bracketed = function Bracketed(kind, tree) {
      return globalThis.Object.freeze(new Bracketed.class(kind, tree));
    };
    (class Bracketed extends Tree1 {
      static {
        Tree.Bracketed.class = this
      }
      constructor(kind, tree) {
        super();
        this.kind = kind;
        this.tree = tree;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Bracketed", ["kind", "tree"]]; 
    });
    this.Ident = function Ident(name, symbolic) {
      return globalThis.Object.freeze(new Ident.class(name, symbolic));
    };
    (class Ident extends Tree1 {
      static {
        Tree.Ident.class = this
      }
      constructor(name, symbolic) {
        super();
        this.name = name;
        this.symbolic = symbolic;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ident", ["name", "symbolic"]]; 
    });
    this.Underscore = function Underscore() {
      return globalThis.Object.freeze(new Underscore.class());
    };
    (class Underscore extends Tree1 {
      static {
        Tree.Underscore.class = this
      }
      constructor() {
        super();
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Underscore", []]; 
    });
    this.Modified = function Modified(modifier, subject) {
      return globalThis.Object.freeze(new Modified.class(modifier, subject));
    };
    (class Modified extends Tree1 {
      static {
        Tree.Modified.class = this
      }
      constructor(modifier, subject) {
        super();
        this.modifier = modifier;
        this.subject = subject;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Modified", ["modifier", "subject"]]; 
    });
    this.Tuple = function Tuple(trees) {
      return globalThis.Object.freeze(new Tuple.class(trees));
    };
    (class Tuple extends Tree1 {
      static {
        Tree.Tuple.class = this
      }
      constructor(trees) {
        super();
        this.trees = trees;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Tuple", ["trees"]]; 
    });
    this.Sequence = function Sequence(trees) {
      return globalThis.Object.freeze(new Sequence.class(trees));
    };
    (class Sequence extends Tree1 {
      static {
        Tree.Sequence.class = this
      }
      constructor(trees) {
        super();
        this.trees = trees;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Sequence", ["trees"]]; 
    });
    this.Literal = function Literal(kind, value) {
      return globalThis.Object.freeze(new Literal.class(kind, value));
    };
    (class Literal extends Tree1 {
      static {
        Tree.Literal.class = this
      }
      constructor(kind, value) {
        super();
        this.kind = kind;
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Literal", ["kind", "value"]]; 
    });
    this.Match = function Match(scrutinee, branches) {
      return globalThis.Object.freeze(new Match.class(scrutinee, branches));
    };
    (class Match extends Tree1 {
      static {
        Tree.Match.class = this
      }
      constructor(scrutinee, branches) {
        super();
        this.scrutinee = scrutinee;
        this.branches = branches;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Match", ["scrutinee", "branches"]]; 
    });
    this.Lambda = function Lambda(params, body) {
      return globalThis.Object.freeze(new Lambda.class(params, body));
    };
    (class Lambda extends Tree1 {
      static {
        Tree.Lambda.class = this
      }
      constructor(params, body) {
        super();
        this.params = params;
        this.body = body;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Lambda", ["params", "body"]]; 
    });
    this.App = function App(callee, argument) {
      return globalThis.Object.freeze(new App.class(callee, argument));
    };
    (class App extends Tree1 {
      static {
        Tree.App.class = this
      }
      constructor(callee, argument) {
        super();
        this.callee = callee;
        this.argument = argument;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "App", ["callee", "argument"]]; 
    });
    this.Infix = function Infix(op, lhs, rhs) {
      return globalThis.Object.freeze(new Infix.class(op, lhs, rhs));
    };
    (class Infix extends Tree1 {
      static {
        Tree.Infix.class = this
      }
      constructor(op, lhs, rhs) {
        super();
        this.op = op;
        this.lhs = lhs;
        this.rhs = rhs;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Infix", ["op", "lhs", "rhs"]]; 
    });
    this.Define = function Define(kind, items) {
      return globalThis.Object.freeze(new Define.class(kind, items));
    };
    (class Define extends Tree1 {
      static {
        Tree.Define.class = this
      }
      constructor(kind, items) {
        super();
        this.kind = kind;
        this.items = items;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Define", ["kind", "items"]]; 
    });
    this.LetIn = function LetIn(bindings, body) {
      return globalThis.Object.freeze(new LetIn.class(bindings, body));
    };
    (class LetIn extends Tree1 {
      static {
        Tree.LetIn.class = this
      }
      constructor(bindings, body) {
        super();
        this.bindings = bindings;
        this.body = body;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LetIn", ["bindings", "body"]]; 
    });
    this.While = function While(cond, body) {
      return globalThis.Object.freeze(new While.class(cond, body));
    };
    (class While extends Tree1 {
      static {
        Tree.While.class = this
      }
      constructor(cond, body) {
        super();
        this.cond = cond;
        this.body = body;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "While", ["cond", "body"]]; 
    });
    this.For = function For(head, start, end, body) {
      return globalThis.Object.freeze(new For.class(head, start, end, body));
    };
    (class For extends Tree1 {
      static {
        Tree.For.class = this
      }
      constructor(head, start, end, body) {
        super();
        this.head = head;
        this.start = start;
        this.end = end;
        this.body = body;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "For", ["head", "start", "end", "body"]]; 
    });
    this.Ternary = function Ternary(keyword, lhs, rhs, body) {
      return globalThis.Object.freeze(new Ternary.class(keyword, lhs, rhs, body));
    };
    (class Ternary extends Tree1 {
      static {
        Tree.Ternary.class = this
      }
      constructor(keyword, lhs, rhs, body) {
        super();
        this.keyword = keyword;
        this.lhs = lhs;
        this.rhs = rhs;
        this.body = body;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ternary", ["keyword", "lhs", "rhs", "body"]]; 
    });
  }
  static get empty() {
    return Tree.Empty();
  } 
  static error(message) {
    return Tree.Error(Tree.empty, message)
  } 
  static summary(tree) {
    let par, prec, go, wrap;
    par = function par(text, cond) {
      let tmp;
      if (cond === true) {
        tmp = "(" + text;
        return tmp + ")"
      }
      return text;
    };
    prec = function prec(tree1, side) {
      let tree2, callee, op, leftPrec, rightPrec, scrut, op1, arg$Infix$0$, arg$App$0$, arg$Ident$0$, arg$Ident$1$, element1$, element0$, arg$Error$0$;
      if (tree1 instanceof Tree.Empty.class) {
        return Keywords.INT_MAX
      } else if (tree1 instanceof Tree.Error.class) {
        arg$Error$0$ = tree1.tree;
        tree2 = arg$Error$0$;
        return prec(tree2, side)
      } else if (tree1 instanceof Tree.Bracketed.class) {
        return Keywords.INT_MAX
      } else if (tree1 instanceof Tree.Ident.class) {
        return Keywords.INT_MAX
      } else if (tree1 instanceof Tree.Underscore.class) {
        return Keywords.INT_MAX
      } else if (tree1 instanceof Tree.Modified.class) {
        return 1
      } else if (tree1 instanceof Tree.Tuple.class) {
        return Keywords.INT_MAX
      } else if (tree1 instanceof Tree.Sequence.class) {
        return 1
      } else if (tree1 instanceof Tree.Literal.class) {
        return Keywords.INT_MAX
      } else if (tree1 instanceof Tree.Match.class) {
        return 2
      } else if (tree1 instanceof Tree.App.class) {
        arg$App$0$ = tree1.callee;
        callee = arg$App$0$;
        if (callee instanceof Tree.Ident.class) {
          arg$Ident$0$ = callee.name;
          arg$Ident$1$ = callee.symbolic;
          if (arg$Ident$1$ === true) {
            op = arg$Ident$0$;
            scrut = Keywords.opPrec(op);
            if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
              element0$ = runtime.Tuple.get(scrut, 0);
              element1$ = runtime.Tuple.get(scrut, 1);
              rightPrec = element1$;
              leftPrec = element0$;
              if (side === true) {
                return rightPrec
              }
              return leftPrec;
            }
            return Keywords.appPrec;
          }
          return Keywords.appPrec;
        }
        return Keywords.appPrec;
      } else if (tree1 instanceof Tree.Infix.class) {
        arg$Infix$0$ = tree1.op;
        op1 = arg$Infix$0$;
        if (side === true) {
          return op1.rightPrecOrMax
        }
        return op1.leftPrecOrMax;
      } else if (tree1 instanceof Tree.Ternary.class) {
        return 3
      } else if (tree1 instanceof Tree.Lambda.class) {
        return Keywords._fun.leftPrecOrMax
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    wrap = function wrap(something) {
      let tmp, tmp1;
      if (something instanceof Tree1) {
        tmp = go(something);
        tmp1 = "«" + tmp;
        return tmp1 + "»"
      }
      return go(something);
    };
    go = function go(tree1) {
      let tree2, tree3, kind, name, subject, modifier, trees, trees1, value, scrut, value1, scrutinee, branches, rhs, lhs, op, scrut1, leftPrec, rightPrec, arg, op1, callee, argument, field, target, scrut2, leftPrec1, rhs1, lhs1, op2, name1, value2, items, kind1, body, bindings, body1, body2, cond, body3, head, end, start, body4, rhs2, keyword, lhs2, scrut3, rhs$_, scrut4, body5, body6, params, name2, tree4, trees2, middleElements, arg$Some$0$, arg$Keyword$0$, arg$Lambda$0$, arg$Lambda$1$, arg$Ternary$0$, arg$Ternary$1$, arg$Ternary$2$, arg$Ternary$3$, arg$For$0$, arg$For$1$, arg$For$2$, arg$For$3$, arg$While$0$, arg$While$1$, arg$LetIn$0$, arg$LetIn$1$, arg$Define$0$, arg$Define$1$, arg$Cons$0$, arg$Cons$1$, element1$, element0$, arg$Infix$0$, arg$Infix$1$, arg$Infix$2$, arg$Keyword$0$1, arg$Ident$0$, arg$App$0$, arg$App$1$, arg$Ident$0$1, arg$Ident$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2, arg$Match$0$, arg$Match$1$, arg$Literal$0$, arg$Literal$1$, arg$Sequence$0$, arg$Tuple$0$, arg$Modified$0$, arg$Modified$1$, arg$Ident$0$2, arg$Bracketed$0$, arg$Bracketed$1$, arg$Error$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, element1$1, element0$1, lambda, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, element0$2, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, arg$Some$0$1, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, lambda1, tmp55, tmp56, tmp57, arg$Some$0$2, tmp58, tmp59, arg$Some$0$3, tmp60, lambda2, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, arg$Let$0$, tmp71, tmp72, lambda3, tmp73, tmp74, lambda4, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, lambda5, tmp89, tmp90, tmp91;
      split_1$: {
        split_2$: {
          split_3$: {
            if (tree1 instanceof Tree.Empty.class) {
              return "{}"
            } else if (tree1 instanceof Tree.Error.class) {
              arg$Error$0$ = tree1.tree;
              if (arg$Error$0$ instanceof Tree.Empty.class) {
                return "\u26A0"
              }
              tree2 = arg$Error$0$;
              tmp = go(tree2);
              tmp1 = "<\u26A0:" + tmp;
              return tmp1 + ">";
            } else if (tree1 instanceof Tree.Bracketed.class) {
              arg$Bracketed$0$ = tree1.kind;
              arg$Bracketed$1$ = tree1.tree;
              tree3 = arg$Bracketed$1$;
              kind = arg$Bracketed$0$;
              if (kind instanceof Token.Round.class) {
                tmp2 = go(tree3);
                tmp3 = "(" + tmp2;
                return tmp3 + ")"
              } else if (kind instanceof Token.Square.class) {
                tmp4 = go(tree3);
                tmp5 = "[" + tmp4;
                return tmp5 + "]"
              } else if (kind instanceof Token.Curly.class) {
                tmp6 = go(tree3);
                tmp7 = "{" + tmp6;
                return tmp7 + "}"
              } else if (kind instanceof Token.Angle.class) {
                tmp8 = go(tree3);
                tmp9 = "<" + tmp8;
                return tmp9 + ">"
              }
              if (runtime.Tuple.isArrayLike(tree1) && tree1.length >= 0) {
                middleElements = runtime.Tuple.slice(tree1, 0, 0);
                trees2 = middleElements;
                break split_1$
              }
              break split_2$;
            } else if (tree1 instanceof Tree.Ident.class) {
              arg$Ident$0$2 = tree1.name;
              name = arg$Ident$0$2;
              return name
            } else if (tree1 instanceof Tree.Underscore.class) {
              return "_"
            } else if (tree1 instanceof Tree.Modified.class) {
              arg$Modified$0$ = tree1.modifier;
              arg$Modified$1$ = tree1.subject;
              subject = arg$Modified$1$;
              modifier = arg$Modified$0$;
              tmp10 = go(modifier);
              tmp11 = tmp10 + " ";
              tmp12 = go(subject);
              return tmp11 + tmp12
            } else if (tree1 instanceof Tree.Tuple.class) {
              arg$Tuple$0$ = tree1.trees;
              trees = arg$Tuple$0$;
              tmp13 = Iter.fromStack(trees);
              tmp14 = Iter.mapping(tmp13, go);
              tmp15 = Iter.joined(tmp14, ", ");
              tmp16 = "(" + tmp15;
              return tmp16 + ")"
            } else if (tree1 instanceof Tree.Sequence.class) {
              arg$Sequence$0$ = tree1.trees;
              trees1 = arg$Sequence$0$;
              tmp17 = Iter.fromStack(trees1);
              tmp18 = Iter.mapping(tmp17, go);
              return Iter.joined(tmp18, "; ")
            } else if (tree1 instanceof Tree.Literal.class) {
              arg$Literal$0$ = tree1.kind;
              arg$Literal$1$ = tree1.value;
              if (arg$Literal$0$ instanceof Token.LiteralKind.String.class) {
                value = arg$Literal$1$;
                scrut = value.length > 5;
                if (scrut === true) {
                  tmp19 = value.slice(0, 5);
                  tmp20 = globalThis.JSON.stringify(tmp19);
                  tmp21 = - 1;
                  tmp22 = tmp20.slice(0, tmp21);
                  return tmp22 + "\u2026\""
                }
                return globalThis.JSON.stringify(value);
              }
              value1 = arg$Literal$1$;
              return value1;
            } else if (tree1 instanceof Tree.Match.class) {
              arg$Match$0$ = tree1.scrutinee;
              arg$Match$1$ = tree1.branches;
              branches = arg$Match$1$;
              scrutinee = arg$Match$0$;
              if (scrutinee instanceof Tree.Empty.class) {
                tmp23 = "function ";
              } else {
                tmp24 = go(scrutinee);
                tmp25 = "match " + tmp24;
                tmp23 = tmp25 + " with ";
              }
              tmp26 = Iter.fromStack(branches);
              tmp27 = Iter.mapping(tmp26, go);
              tmp28 = Iter.joined(tmp27, " | ");
              return Predef.mkStr(tmp23, tmp28)
            } else if (tree1 instanceof Tree.App.class) {
              arg$App$0$ = tree1.callee;
              arg$App$1$ = tree1.argument;
              if (arg$App$0$ instanceof Tree.Ident.class) {
                arg$Ident$0$1 = arg$App$0$.name;
                arg$Ident$1$ = arg$App$0$.symbolic;
                if (arg$Ident$1$ === true) {
                  if (arg$App$1$ instanceof Stack.Cons.class) {
                    arg$Cons$0$1 = arg$App$1$.head;
                    arg$Cons$1$1 = arg$App$1$.tail;
                    if (arg$Cons$1$1 instanceof Stack.Cons.class) {
                      arg$Cons$0$2 = arg$Cons$1$1.head;
                      arg$Cons$1$2 = arg$Cons$1$1.tail;
                      if (arg$Cons$1$2 instanceof Stack.Nil.class) {
                        rhs = arg$Cons$0$2;
                        lhs = arg$Cons$0$1;
                        op = arg$Ident$0$1;
                        scrut1 = Keywords.opPrec(op);
                        if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
                          element0$1 = runtime.Tuple.get(scrut1, 0);
                          element1$1 = runtime.Tuple.get(scrut1, 1);
                          rightPrec = element1$1;
                          leftPrec = element0$1;
                          lambda = (undefined, function (arg1, arg2) {
                            return arg1 + arg2
                          });
                          tmp29 = runtime.safeCall(Predef.fold(lambda));
                          tmp30 = go(lhs);
                          tmp31 = prec(lhs, false);
                          tmp32 = tmp31 < leftPrec;
                          tmp33 = par(tmp30, tmp32);
                          tmp34 = go(rhs);
                          tmp35 = prec(rhs, true);
                          tmp36 = tmp35 < rightPrec;
                          tmp37 = par(tmp34, tmp36);
                          return runtime.safeCall(tmp29(tmp33, " ", op, " ", tmp37))
                        }
                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                      }
                      arg = arg$App$1$;
                      op1 = arg$Ident$0$1;
                      break split_3$;
                    }
                    arg = arg$App$1$;
                    op1 = arg$Ident$0$1;
                    break split_3$;
                  }
                  arg = arg$App$1$;
                  op1 = arg$Ident$0$1;
                  break split_3$;
                }
                argument = arg$App$1$;
                callee = arg$App$0$;
              } else {
                argument = arg$App$1$;
                callee = arg$App$0$;
              }
              tmp79 = go(callee);
              tmp80 = go(argument);
              tmp81 = prec(argument, false);
              tmp82 = tmp81 <= Keywords.appPrec;
              tmp83 = par(tmp80, tmp82);
              return Predef.mkStr(tmp79, " ", tmp83)
            } else if (tree1 instanceof Tree.Infix.class) {
              arg$Infix$0$ = tree1.op;
              arg$Infix$1$ = tree1.lhs;
              arg$Infix$2$ = tree1.rhs;
              if (arg$Infix$0$ instanceof Keywords.Keyword.class) {
                arg$Keyword$0$1 = arg$Infix$0$.name;
                if (arg$Keyword$0$1 === ".") {
                  if (arg$Infix$2$ instanceof Tree.Ident.class) {
                    arg$Ident$0$ = arg$Infix$2$.name;
                    field = arg$Ident$0$;
                    target = arg$Infix$1$;
                    scrut2 = Keywords.opPrec(".");
                    if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
                      element0$2 = runtime.Tuple.get(scrut2, 0);
                      runtime.Tuple.get(scrut2, 1);
                      leftPrec1 = element0$2;
                      tmp38 = go(target);
                      tmp39 = prec(target, false);
                      tmp40 = tmp39 < leftPrec1;
                      tmp41 = par(tmp38, tmp40);
                      return Predef.mkStr(tmp41, ".", field)
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                  rhs1 = arg$Infix$2$;
                  lhs1 = arg$Infix$1$;
                  op2 = arg$Infix$0$;
                } else {
                  rhs1 = arg$Infix$2$;
                  lhs1 = arg$Infix$1$;
                  op2 = arg$Infix$0$;
                }
              } else {
                rhs1 = arg$Infix$2$;
                lhs1 = arg$Infix$1$;
                op2 = arg$Infix$0$;
              }
              lambda4 = (undefined, function (arg1, arg2) {
                return arg1 + arg2
              });
              tmp75 = runtime.safeCall(Predef.fold(lambda4));
              tmp76 = go(lhs1);
              tmp77 = go(op2);
              tmp78 = go(rhs1);
              return runtime.safeCall(tmp75(tmp76, " ", tmp77, " ", tmp78))
            } else if (tree1 instanceof Tree.Define.class) {
              arg$Define$0$ = tree1.kind;
              arg$Define$1$ = tree1.items;
              if (arg$Define$0$ instanceof Tree.DefineKind.Directive.class) {
                if (arg$Define$1$ instanceof Stack.Cons.class) {
                  arg$Cons$0$ = arg$Define$1$.head;
                  arg$Cons$1$ = arg$Define$1$.tail;
                  if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
                    element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
                    element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
                    if (arg$Cons$1$ instanceof Stack.Nil.class) {
                      value2 = element1$;
                      name1 = element0$;
                      tmp42 = go(name1);
                      tmp43 = go(value2);
                      return StrOps.concat("#", tmp42, " ", tmp43)
                    }
                    items = arg$Define$1$;
                    kind1 = arg$Define$0$;
                  } else {
                    items = arg$Define$1$;
                    kind1 = arg$Define$0$;
                  }
                } else {
                  items = arg$Define$1$;
                  kind1 = arg$Define$0$;
                }
              } else {
                items = arg$Define$1$;
                kind1 = arg$Define$0$;
              }
              if (kind1 instanceof Tree.DefineKind.Let.class) {
                arg$Let$0$ = kind1.recursive;
                switch (arg$Let$0$) {
                  case true:
                    tmp71 = "let rec ";
                    break;
                  case false:
                    tmp71 = "let ";
                    break;
                  default:
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
              } else if (kind1 instanceof Tree.DefineKind.Type.class) {
                tmp71 = "type ";
              } else if (kind1 instanceof Tree.DefineKind.Exception.class) {
                tmp71 = "exception ";
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              tmp72 = Iter.fromStack(items);
              lambda3 = (undefined, function (caseScrut) {
                let tree5, rhs3, lhs3, element1$2, element0$3, tmp92, tmp93, tmp94;
                if (caseScrut instanceof Tree1) {
                  tree5 = caseScrut;
                  return go(tree5)
                } else if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
                  element0$3 = runtime.Tuple.get(caseScrut, 0);
                  element1$2 = runtime.Tuple.get(caseScrut, 1);
                  rhs3 = element1$2;
                  lhs3 = element0$3;
                  tmp92 = go(lhs3);
                  tmp93 = tmp92 + " = ";
                  tmp94 = go(rhs3);
                  return tmp93 + tmp94
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              });
              tmp73 = Iter.mapping(tmp72, lambda3);
              tmp74 = Iter.joined(tmp73, " and ");
              return Predef.mkStr(tmp71, tmp74)
            } else if (tree1 instanceof Tree.LetIn.class) {
              arg$LetIn$0$ = tree1.bindings;
              arg$LetIn$1$ = tree1.body;
              body = arg$LetIn$1$;
              bindings = arg$LetIn$0$;
              tmp44 = Iter.fromStack(bindings);
              tmp45 = Iter.mapping(tmp44, go);
              tmp46 = Iter.joined(tmp45, " and ");
              if (body instanceof Option.Some.class) {
                arg$Some$0$1 = body.value;
                body1 = arg$Some$0$1;
                tmp47 = go(body1);
                tmp48 = globalThis.Object.freeze([
                  " in ",
                  tmp47
                ]);
                return Predef.mkStr("let ", tmp46, ...tmp48)
              } else if (body instanceof Option.None.class) {
                tmp48 = globalThis.Object.freeze([]);
                return Predef.mkStr("let ", tmp46, ...tmp48)
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            } else if (tree1 instanceof Tree.While.class) {
              arg$While$0$ = tree1.cond;
              arg$While$1$ = tree1.body;
              body2 = arg$While$1$;
              cond = arg$While$0$;
              tmp49 = go(cond);
              tmp50 = go(body2);
              return Predef.mkStr("while ", tmp49, " do ", tmp50, " done")
            } else if (tree1 instanceof Tree.For.class) {
              arg$For$0$ = tree1.head;
              arg$For$1$ = tree1.start;
              arg$For$2$ = tree1.end;
              arg$For$3$ = tree1.body;
              body3 = arg$For$3$;
              end = arg$For$2$;
              start = arg$For$1$;
              head = arg$For$0$;
              tmp51 = go(head);
              tmp52 = go(start);
              tmp53 = go(end);
              tmp54 = go(body3);
              return Predef.mkStr("for ", tmp51, " = ", tmp52, " to ", tmp53, " do ", tmp54, " done")
            } else if (tree1 instanceof Tree.Ternary.class) {
              arg$Ternary$0$ = tree1.keyword;
              arg$Ternary$1$ = tree1.lhs;
              arg$Ternary$2$ = tree1.rhs;
              arg$Ternary$3$ = tree1.body;
              body4 = arg$Ternary$3$;
              rhs2 = arg$Ternary$2$;
              lhs2 = arg$Ternary$1$;
              keyword = arg$Ternary$0$;
              lambda1 = (undefined, function (arg1, arg2) {
                return arg1 + arg2
              });
              tmp55 = runtime.safeCall(Predef.fold(lambda1));
              tmp56 = go(lhs2);
              scrut3 = keyword.name;
              switch (scrut3) {
                case "if":
                  tmp57 = " then ";
                  break;
                case "type":
                  tmp57 = " = ";
                  break;
                case "let":
                  tmp57 = " = ";
                  break;
                default:
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              if (rhs2 instanceof Option.Some.class) {
                arg$Some$0$2 = rhs2.value;
                rhs$_ = arg$Some$0$2;
                tmp58 = go(rhs$_);
              } else {
                tmp58 = go(rhs2);
              }
              scrut4 = keyword.name;
              switch (scrut4) {
                case "if":
                  tmp59 = " then ";
                  break;
                case "type":
                  tmp59 = "";
                  break;
                case "let":
                  tmp59 = " in ";
                  break;
                default:
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              if (body4 instanceof Option.Some.class) {
                arg$Some$0$3 = body4.value;
                body5 = arg$Some$0$3;
                tmp60 = go(body5);
                return runtime.safeCall(tmp55(keyword.name, " ", tmp56, tmp57, tmp58, tmp59, tmp60))
              }
              tmp60 = go(body4);
              return runtime.safeCall(tmp55(keyword.name, " ", tmp56, tmp57, tmp58, tmp59, tmp60));
            } else if (tree1 instanceof Tree.Lambda.class) {
              arg$Lambda$0$ = tree1.params;
              arg$Lambda$1$ = tree1.body;
              body6 = arg$Lambda$1$;
              params = arg$Lambda$0$;
              lambda2 = (undefined, function (arg1, arg2) {
                return arg1 + arg2
              });
              tmp61 = runtime.safeCall(Predef.fold(lambda2));
              tmp62 = Iter.fromStack(params);
              tmp63 = Iter.mapping(tmp62, go);
              tmp64 = Iter.joined(tmp63, " ");
              tmp65 = go(body6);
              return runtime.safeCall(tmp61("fun ", tmp64, " -> ", tmp65))
            } else if (tree1 instanceof Keywords.Keyword.class) {
              arg$Keyword$0$ = tree1.name;
              name2 = arg$Keyword$0$;
              return name2
            } else if (tree1 instanceof Option.Some.class) {
              arg$Some$0$ = tree1.value;
              tree4 = arg$Some$0$;
              tmp66 = wrap(tree4);
              tmp67 = "Some(" + tmp66;
              return tmp67 + ")"
            } else if (tree1 instanceof Option.None.class) {
              return "None"
            } else if (tree1 instanceof Stack.Cons.class) {
              tmp68 = Iter.fromStack(tree1);
              tmp69 = Iter.mapping(tmp68, wrap);
              tmp70 = Iter.joined(tmp69, " :: ");
              return tmp70 + " :: Nil"
            } else if (tree1 instanceof Stack.Nil.class) {
              return "Nil"
            } else if (runtime.Tuple.isArrayLike(tree1) && tree1.length >= 0) {
              middleElements = runtime.Tuple.slice(tree1, 0, 0);
              trees2 = middleElements;
              break split_1$
            }
            break split_2$;
          }
          tmp84 = go(arg);
          tmp85 = prec(arg, false);
          tmp86 = tmp85 <= Keywords.prefixPrec;
          tmp87 = par(tmp84, tmp86);
          return Predef.mkStr(op1, tmp87);
        }
        tmp88 = "<unexpected:" + tree1;
        return tmp88 + ">";
      }
      lambda5 = (undefined, function (tree5, _, _1) {
        return wrap(tree5)
      });
      tmp89 = Iter.mapping(trees2, lambda5);
      tmp90 = Iter.joined(tmp89, ", ");
      tmp91 = "[" + tmp90;
      return tmp91 + "]"
    };
    return wrap(tree)
  } 
  static infix(op) {
    return (lhs, rhs) => {
      return Tree.Infix(op, lhs, rhs)
    }
  } 
  static bracketed(tree, kind) {
    return Tree.Bracketed(kind, tree)
  } 
  static asSequence(tree) {
    let tmp;
    if (tree instanceof Tree.Empty.class) {
      return Tree.Sequence(Stack.Nil)
    } else if (tree instanceof Tree.Sequence.class) {
      return tree
    }
    tmp = Stack.Cons(tree, Stack.Nil);
    return Tree.Sequence(tmp);
  } 
  static tupleWithHead(tree, head) {
    let tail, arg$Tuple$0$, tmp, tmp1, tmp2;
    if (tree instanceof Tree.Tuple.class) {
      arg$Tuple$0$ = tree.trees;
      tail = arg$Tuple$0$;
      tmp = Stack.Cons(head, tail);
      return Tree.Tuple(tmp)
    }
    tmp1 = Stack.Cons(tree, Stack.Nil);
    tmp2 = Stack.Cons(head, tmp1);
    return Tree.Tuple(tmp2);
  } 
  static sequenceWithHead(tree, head) {
    let tail, arg$Sequence$0$, tmp, tmp1, tmp2;
    if (tree instanceof Tree.Sequence.class) {
      arg$Sequence$0$ = tree.trees;
      tail = arg$Sequence$0$;
      tmp = Stack.Cons(head, tail);
      return Tree.Sequence(tmp)
    }
    tmp1 = Stack.Cons(tree, Stack.Nil);
    tmp2 = Stack.Cons(head, tmp1);
    return Tree.Sequence(tmp2);
  } 
  static nonEmpty(tree) {
    let arg$Error$0$;
    if (tree instanceof Tree.Empty.class) {
      return false
    } else if (tree instanceof Tree.Error.class) {
      arg$Error$0$ = tree.tree;
      if (arg$Error$0$ instanceof Tree.Empty.class) {
        return false
      }
      return true;
    }
    return true;
  } 
  static nonEmptyError(tree) {
    let arg$Error$0$;
    if (tree instanceof Tree.Error.class) {
      arg$Error$0$ = tree.tree;
      if (arg$Error$0$ instanceof Tree.Empty.class) {
        return false
      }
      return true;
    }
    return true;
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Tree"]; 
});
let Tree = Tree1; export default Tree;
