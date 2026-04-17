const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Keywords from "./Keywords.mjs";
import Rules from "./Rules.mjs";
import Token from "./Token.mjs";
import ParseRule from "./ParseRule.mjs";
import Tree from "./Tree.mjs";
import Stack from "./../../Stack.mjs";
import Option from "./../../Option.mjs";
import Predef from "./../../Predef.mjs";
import Iter from "./../../Iter.mjs";
import MutMap from "./../../MutMap.mjs";
let Extension1;
(class Extension {
  static {
    Extension1 = this
  }
  static {
    (class OpenCategory {
      static {
        new this
      }
      constructor() {
        Extension.OpenCategory = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        switch (input) {
          case "term":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "type":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "decl":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
      } 
      unapplyStringPrefix(input) {
        let isLeading, consumed, remains, isLeading1, consumed1, remains1, isLeading2, consumed2, remains2, tmp, tmp1, tmp2;
        isLeading2 = runtime.Str.startsWith(input, "term");
        if (isLeading2 === true) {
          consumed2 = runtime.Str.take(input, 4);
          remains2 = runtime.Str.leave(input, 4);
          tmp = globalThis.Object.freeze([
            consumed2,
            remains2
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp, null))
        }
        isLeading1 = runtime.Str.startsWith(input, "type");
        if (isLeading1 === true) {
          consumed1 = runtime.Str.take(input, 4);
          remains1 = runtime.Str.leave(input, 4);
          tmp1 = globalThis.Object.freeze([
            consumed1,
            remains1
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp1, null))
        }
        isLeading = runtime.Str.startsWith(input, "decl");
        if (isLeading === true) {
          consumed = runtime.Str.take(input, 4);
          remains = runtime.Str.leave(input, 4);
          tmp2 = globalThis.Object.freeze([
            consumed,
            remains
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp2, null))
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "OpenCategory"]; 
    });
    (class ClosedCategory {
      static {
        new this
      }
      constructor() {
        Extension.ClosedCategory = this;
        globalThis.Object.freeze(this);
      }
      unapply(input) {
        switch (input) {
          case "ident":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
          case "typevar":
            return globalThis.Object.freeze(new runtime.MatchSuccess.class(input, null));
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null))
      } 
      unapplyStringPrefix(input) {
        let isLeading, consumed, remains, isLeading1, consumed1, remains1, tmp, tmp1;
        isLeading1 = runtime.Str.startsWith(input, "ident");
        if (isLeading1 === true) {
          consumed1 = runtime.Str.take(input, 5);
          remains1 = runtime.Str.leave(input, 5);
          tmp = globalThis.Object.freeze([
            consumed1,
            remains1
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp, null))
        }
        isLeading = runtime.Str.startsWith(input, "typevar");
        if (isLeading === true) {
          consumed = runtime.Str.take(input, 7);
          remains = runtime.Str.leave(input, 7);
          tmp1 = globalThis.Object.freeze([
            consumed,
            remains
          ]);
          return globalThis.Object.freeze(new runtime.MatchSuccess.class(tmp1, null))
        }
        return globalThis.Object.freeze(new runtime.MatchFailure.class(null));
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["pattern", "ClosedCategory"]; 
    });
  }
  static isDiagramDirective(tree) {
    let arg$Define$0$, arg$Define$1$, arg$Cons$0$, arg$Cons$1$, element0$, arg$Ident$0$;
    if (tree instanceof Tree.Define.class) {
      arg$Define$0$ = tree.kind;
      arg$Define$1$ = tree.items;
      if (arg$Define$0$ instanceof Tree.DefineKind.Directive.class) {
        if (arg$Define$1$ instanceof Stack.Cons.class) {
          arg$Cons$0$ = arg$Define$1$.head;
          arg$Cons$1$ = arg$Define$1$.tail;
          if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
            element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
            runtime.Tuple.get(arg$Cons$0$, 1);
            if (element0$ instanceof Tree.Ident.class) {
              arg$Ident$0$ = element0$.name;
              if (arg$Ident$0$ === "diagram") {
                if (arg$Cons$1$ instanceof Stack.Nil.class) {
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
  static parsePrecedenceTree(tree) {
    let arg$App$0$, arg$App$1$, arg$Ident$0$, arg$Literal$0$, arg$Literal$1$, arg$Ident$0$1, tmp;
    if (tree instanceof Tree.Ident.class) {
      arg$Ident$0$1 = tree.name;
      if (arg$Ident$0$1 === "None") {
        return Option.None
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (tree instanceof Tree.App.class) {
      arg$App$0$ = tree.callee;
      arg$App$1$ = tree.argument;
      if (arg$App$0$ instanceof Tree.Ident.class) {
        arg$Ident$0$ = arg$App$0$.name;
        if (arg$Ident$0$ === "Some") {
          if (arg$App$1$ instanceof Tree.Literal.class) {
            arg$Literal$0$ = arg$App$1$.kind;
            arg$Literal$1$ = arg$App$1$.value;
            if (arg$Literal$0$ instanceof Token.LiteralKind.Integer.class) {
              tmp = globalThis.parseInt(arg$Literal$1$, 10);
              return Option.Some(tmp)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static extendKeyword(tree) {
    let keyword, leftPrec$_, rightPrec$_, arg$Tuple$0$, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2, arg$Literal$0$, arg$Literal$1$, tmp, tmp1;
    split_1$: {
      if (tree instanceof Tree.Tuple.class) {
        arg$Tuple$0$ = tree.trees;
        if (arg$Tuple$0$ instanceof Stack.Cons.class) {
          arg$Cons$0$ = arg$Tuple$0$.head;
          arg$Cons$1$ = arg$Tuple$0$.tail;
          if (arg$Cons$1$ instanceof Stack.Cons.class) {
            arg$Cons$0$1 = arg$Cons$1$.head;
            arg$Cons$1$1 = arg$Cons$1$.tail;
            if (arg$Cons$1$1 instanceof Stack.Cons.class) {
              arg$Cons$0$2 = arg$Cons$1$1.head;
              arg$Cons$1$2 = arg$Cons$1$1.tail;
              if (arg$Cons$1$2 instanceof Stack.Nil.class) {
                keyword = arg$Cons$0$;
                if (keyword instanceof Tree.Literal.class) {
                  arg$Literal$0$ = arg$Cons$0$.kind;
                  arg$Literal$1$ = arg$Cons$0$.value;
                  if (arg$Literal$0$ instanceof Token.LiteralKind.String.class) {
                    leftPrec$_ = Extension.parsePrecedenceTree(arg$Cons$0$1);
                    rightPrec$_ = Extension.parsePrecedenceTree(arg$Cons$0$2);
                    return Keywords.keyword(arg$Literal$1$, leftPrec$_, rightPrec$_)
                  }
                  break split_1$;
                }
                break split_1$;
              }
            }
          }
        }
      }
      tmp = "expect a tuple but found " + tree;
      return Predef.print(tmp);
    }
    tmp1 = "expect a string literal but found " + keyword;
    return Predef.print(tmp1)
  } 
  static newCategory(tree) {
    let scrut, arg$Literal$0$, arg$Literal$1$, arg$Some$0$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (tree instanceof Tree.Literal.class) {
      arg$Literal$0$ = tree.kind;
      arg$Literal$1$ = tree.value;
      if (arg$Literal$0$ instanceof Token.LiteralKind.String.class) {
        tmp = MutMap.get(arg$Literal$1$);
        scrut = Predef.pipeInto(Rules.syntaxKinds, tmp);
        if (scrut instanceof Option.Some.class) {
          arg$Some$0$ = scrut.value;
          tmp1 = "Category already exists: " + arg$Some$0$.display;
          return Predef.print(tmp1)
        } else if (scrut instanceof Option.None.class) {
          tmp2 = ParseRule.ParseRule(arg$Literal$1$, Stack.Nil);
          tmp3 = MutMap.insert(arg$Literal$1$, tmp2);
          Predef.pipeInto(Rules.syntaxKinds, tmp3);
          return runtime.safeCall(Rules.extendedKinds.add(arg$Literal$1$))
        }
      }
    }
    tmp4 = "expect a string literal but found " + tree;
    return Predef.print(tmp4)
  } 
  static extendCategory(choiceBodyTree) {
    let scrut, choice, scrut1, rule, scrut2, arg$Some$0$, element1$, element0$, arg$Some$0$1, unapplyResult, unapplyResult1, arg$Ref$0$, arg$Ref$1$, arg$Ref$4$, arg$Some$0$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    scrut = Extension.parseChoiceTree(choiceBodyTree);
    if (scrut instanceof Option.Some.class) {
      arg$Some$0$ = scrut.value;
      if (runtime.Tuple.isArrayLike(arg$Some$0$) && arg$Some$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Some$0$, 0);
        element1$ = runtime.Tuple.get(arg$Some$0$, 1);
        choice = element1$;
        tmp = MutMap.get(element0$);
        scrut1 = Predef.pipeInto(Rules.syntaxKinds, tmp);
        if (scrut1 instanceof Option.Some.class) {
          arg$Some$0$1 = scrut1.value;
          rule = arg$Some$0$1;
          unapplyResult1 = runtime.safeCall(Extension.OpenCategory.unapply(element0$));
          if (unapplyResult1 instanceof runtime.MatchSuccess.class) {
            unapplyResult1.output;
            unapplyResult1.bindings;
            if (choice instanceof ParseRule.Choice.Ref.class) {
              arg$Ref$0$ = element1$.kind;
              arg$Ref$1$ = element1$.process;
              arg$Ref$4$ = element1$.rest;
              tmp1 = MutMap.get(arg$Ref$0$);
              scrut2 = Predef.pipeInto(Rules.syntaxKinds, tmp1);
              if (scrut2 instanceof Option.Some.class) {
                arg$Some$0$2 = scrut2.value;
                tmp2 = arg$Some$0$2.andThen(arg$Ref$4$, arg$Ref$1$);
                return runtime.safeCall(arg$Some$0$1.extendChoices(tmp2.choices))
              }
              tmp3 = "Unknown referenced syntax category: " + arg$Ref$0$;
              return Predef.print(tmp3);
            }
          } else {
            unapplyResult = runtime.safeCall(Extension.ClosedCategory.unapply(element0$));
            if (unapplyResult instanceof runtime.MatchSuccess.class) {
              unapplyResult.output;
              unapplyResult.bindings;
              tmp4 = "Cannot extend a closed category: " + element0$;
              return Predef.print(tmp4)
            }
          }
          tmp8 = Stack.Cons(choice, Stack.Nil);
          return runtime.safeCall(rule.extendChoices(tmp8))
        } else if (scrut1 instanceof Option.None.class) {
          tmp5 = "Unknown syntax kind: " + element0$;
          return Predef.print(tmp5)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (scrut instanceof Option.None.class) {
      tmp6 = Tree.summary(choiceBodyTree);
      tmp7 = "Invalid syntax description: " + tmp6;
      return Predef.print(tmp7)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static parseChoiceTree(tree) {
    let go, choiceTree, funcIdent, categoryIdent, arg$Tuple$0$, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2, arg$Literal$0$, arg$Literal$1$, arg$Bracketed$0$, arg$Bracketed$1$, arg$Tuple$0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    go = function go(trees) {
      let scrut, arg$Cons$0$3, arg$Cons$1$3, arg$Literal$0$1, arg$Literal$1$1, arg$App$0$, arg$App$1$, arg$Ident$0$, arg$Literal$0$2, arg$Literal$1$2, arg$Some$0$, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, rcd;
      split_root$: {
        if (trees instanceof Stack.Cons.class) {
          arg$Cons$0$3 = trees.head;
          arg$Cons$1$3 = trees.tail;
          if (arg$Cons$0$3 instanceof Tree.App.class) {
            arg$App$0$ = arg$Cons$0$3.callee;
            arg$App$1$ = arg$Cons$0$3.argument;
            if (arg$App$0$ instanceof Tree.Ident.class) {
              arg$Ident$0$ = arg$App$0$.name;
              if (arg$Ident$0$ === "keyword") {
                if (arg$App$1$ instanceof Tree.Literal.class) {
                  arg$Literal$0$2 = arg$App$1$.kind;
                  arg$Literal$1$2 = arg$App$1$.value;
                  if (arg$Literal$0$2 instanceof Token.LiteralKind.String.class) {
                    tmp12 = MutMap.get(arg$Literal$1$2);
                    scrut = Predef.pipeInto(Keywords.all, tmp12);
                    if (scrut instanceof Option.Some.class) {
                      arg$Some$0$ = scrut.value;
                      tmp13 = ParseRule.Choice.keyword(arg$Some$0$);
                      tmp14 = go(arg$Cons$1$3);
                      tmp15 = runtime.safeCall(tmp13(tmp14));
                      break split_root$
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          } else if (arg$Cons$0$3 instanceof Tree.Literal.class) {
            arg$Literal$0$1 = arg$Cons$0$3.kind;
            arg$Literal$1$1 = arg$Cons$0$3.value;
            if (arg$Literal$0$1 instanceof Token.LiteralKind.String.class) {
              tmp16 = ParseRule.Choice.reference(arg$Literal$1$1);
              tmp17 = go(arg$Cons$1$3);
              tmp18 = Predef.tuple(tmp17);
              rcd = globalThis.Object.freeze({
                process: Stack.Cons,
                name: "unnamed",
                choices: tmp18
              });
              tmp15 = runtime.safeCall(tmp16(rcd));
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        } else if (trees instanceof Stack.Nil.class) {
          tmp15 = ParseRule.Choice.end(Stack.Nil);
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
      return tmp15
    };
    split_1$: {
      split_2$: {
        if (tree instanceof Tree.Tuple.class) {
          arg$Tuple$0$ = tree.trees;
          if (arg$Tuple$0$ instanceof Stack.Cons.class) {
            arg$Cons$0$ = arg$Tuple$0$.head;
            arg$Cons$1$ = arg$Tuple$0$.tail;
            if (arg$Cons$1$ instanceof Stack.Cons.class) {
              arg$Cons$0$1 = arg$Cons$1$.head;
              arg$Cons$1$1 = arg$Cons$1$.tail;
              if (arg$Cons$1$1 instanceof Stack.Cons.class) {
                arg$Cons$0$2 = arg$Cons$1$1.head;
                arg$Cons$1$2 = arg$Cons$1$1.tail;
                if (arg$Cons$1$2 instanceof Stack.Nil.class) {
                  funcIdent = arg$Cons$0$2;
                  choiceTree = arg$Cons$0$1;
                  categoryIdent = arg$Cons$0$;
                  if (categoryIdent instanceof Tree.Literal.class) {
                    arg$Literal$0$ = arg$Cons$0$.kind;
                    arg$Literal$1$ = arg$Cons$0$.value;
                    if (arg$Literal$0$ instanceof Token.LiteralKind.String.class) {
                      if (funcIdent instanceof Tree.Ident.class) {
                        let op;
                        op = function op(trees) {
                          let tmp12, lambda;
                          tmp12 = Iter.fromStack(trees);
                          lambda = (undefined, function (f, x) {
                            return Tree.App(f, x)
                          });
                          return Iter.folded(tmp12, funcIdent, lambda)
                        };
                        if (choiceTree instanceof Tree.Bracketed.class) {
                          arg$Bracketed$0$ = arg$Cons$0$1.kind;
                          arg$Bracketed$1$ = arg$Cons$0$1.tree;
                          if (arg$Bracketed$0$ instanceof Token.Square.class) {
                            if (arg$Bracketed$1$ instanceof Tree.Tuple.class) {
                              arg$Tuple$0$1 = arg$Bracketed$1$.trees;
                              tmp = go(arg$Tuple$0$1);
                              tmp1 = ParseRule.Choice.map(tmp, op);
                              tmp2 = Predef.tuple(arg$Literal$1$, tmp1);
                              return Option.Some(tmp2)
                            }
                            tmp3 = Stack.Cons(arg$Bracketed$1$, Stack.Nil);
                            tmp4 = go(tmp3);
                            tmp5 = ParseRule.Choice.map(tmp4, op);
                            tmp6 = Predef.tuple(arg$Literal$1$, tmp5);
                            return Option.Some(tmp6);
                          }
                          break split_1$;
                        }
                        break split_1$;
                      }
                      break split_1$;
                    }
                    break split_2$;
                  }
                  break split_2$;
                }
              }
            }
          }
        }
        tmp7 = Tree.summary(tree);
        tmp8 = "Expect the definition to be a tuple but found " + tmp7;
        Predef.print(tmp8);
        return Option.None;
      }
      tmp9 = Tree.summary(categoryIdent);
      tmp10 = "Expect a the category to be an identifier but found " + tmp9;
      Predef.print(tmp10);
      return Option.None;
    }
    tmp11 = Tree.summary(choiceTree);
    Predef.print("Expect the choiceTree to be a bracketed term but found", tmp11);
    return Option.None
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Extension"]; 
});
let Extension = Extension1; export default Extension;
