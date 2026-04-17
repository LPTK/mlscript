const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
import Stack from "./../../Stack.mjs";
import Iter from "./../../Iter.mjs";
import Option from "./../../Option.mjs";
import TreeTracer from "./../../TreeTracer.mjs";
import XML from "./../../XML.mjs";
import MutMap from "./../../MutMap.mjs";
import ParseRule from "./ParseRule.mjs";
import Rules from "./Rules.mjs";
import Parser from "./Parser.mjs";
let ParseRuleVisualizer1;
(class ParseRuleVisualizer {
  static {
    ParseRuleVisualizer1 = this
  }
  static #defaultKinds;
  static #renderedKinds;
  static {
    let tmp;
    tmp = globalThis.Object.freeze(new TreeTracer.TreeTracer());
    this.tracer = tmp;
    ParseRuleVisualizer.#defaultKinds = Predef.tuple("type", "term", "typevar", "ident");
    ParseRuleVisualizer.#renderedKinds = globalThis.Object.freeze(new globalThis.Set(ParseRuleVisualizer.#defaultKinds));
  }
  static reset() {
    let tmp;
    tmp = globalThis.Object.freeze(new globalThis.Set(ParseRuleVisualizer.#defaultKinds));
    ParseRuleVisualizer.#renderedKinds = tmp;
    return runtime.Unit
  } 
  static render(rr, title, rule) {
    let diagram, sequence, renderRule, referencedKinds, diagrams, tmp, tmp1, tmp2;
    sequence = function sequence(lhs, rhsOpt) {
      let rhs, arg$Some$0$;
      if (rhsOpt instanceof Option.Some.class) {
        arg$Some$0$ = rhsOpt.value;
        rhs = arg$Some$0$;
        return rr.Sequence(lhs, rhs)
      } else if (rhsOpt instanceof Option.None.class) {
        return lhs
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    diagram = function diagram(choicesOpt) {
      let choices, arg$Some$0$, tmp3;
      if (choicesOpt instanceof Option.Some.class) {
        arg$Some$0$ = choicesOpt.value;
        choices = arg$Some$0$;
        tmp3 = choices;
        return runtime.safeCall(rr.Diagram(tmp3))
      }
      tmp3 = globalThis.Object.freeze([]);
      return runtime.safeCall(rr.Diagram(tmp3));
    };
    renderRule = function renderRule(rule1) {
      let tmp3, lambda, lambda1;
      tmp3 = "renderRule <<< " + rule1.name;
      lambda = (undefined, function (result) {
        return "renderRule >>> "
      });
      lambda1 = (undefined, function () {
        let rest, optional, nodes, scrut, choice, tmp4, tmp5;
        rest = rule1.choices;
        optional = false;
        nodes = [];
        lbl: while (true) {
          let head, tail, scrut1, node, arg$Cons$0$, arg$Cons$1$, arg$Some$0$;
          if (rest instanceof Stack.Cons.class) {
            let choice1, inlinedVal, rest1, keyword, rest2, rule2, optional1, scrut2, latterPart, optionalPart, rest3, kind, scrut3, arg$Ref$0$, arg$Ref$4$, arg$Siding$0$, arg$Siding$1$, arg$Siding$2$, arg$Keyword$0$, arg$Keyword$1$, tmp6, tmp7, tmp8, arg$Some$0$1, tmp9, tmp10, tmp11, tmp12, rcd, tmp13, tmp14, tmp15;
            arg$Cons$0$ = rest.head;
            arg$Cons$1$ = rest.tail;
            tail = arg$Cons$1$;
            head = arg$Cons$0$;
            choice1 = head;
            if (choice1 instanceof ParseRule.Choice.End.class) {
              runtime.safeCall(ParseRuleVisualizer.tracer.print("found Choice.End"));
              inlinedVal = Option.None;
            } else if (choice1 instanceof ParseRule.Choice.Keyword.class) {
              arg$Keyword$0$ = choice1.keyword;
              arg$Keyword$1$ = choice1.rest;
              rest1 = arg$Keyword$1$;
              keyword = arg$Keyword$0$;
              runtime.safeCall(ParseRuleVisualizer.tracer.print("found Choice.Keyword"));
              tmp6 = runtime.safeCall(rr.Terminal(keyword.name));
              tmp7 = renderRule(rest1);
              tmp8 = sequence(tmp6, tmp7);
              inlinedVal = Option.Some(tmp8);
            } else if (choice1 instanceof ParseRule.Choice.Siding.class) {
              arg$Siding$0$ = choice1.init;
              arg$Siding$1$ = choice1.optional;
              arg$Siding$2$ = choice1.rest;
              rest2 = arg$Siding$2$;
              optional1 = arg$Siding$1$;
              rule2 = arg$Siding$0$;
              runtime.safeCall(ParseRuleVisualizer.tracer.print("found Choice.Siding"));
              scrut2 = renderRule(rule2);
              latterPart = renderRule(rest2);
              if (scrut2 instanceof Option.Some.class) {
                arg$Some$0$1 = scrut2.value;
                optionalPart = arg$Some$0$1;
                if (optional1 === true) {
                  tmp9 = runtime.safeCall(rr.Optional(optionalPart));
                  tmp10 = sequence(tmp9, latterPart);
                } else {
                  tmp10 = sequence(optionalPart, latterPart);
                }
                inlinedVal = Option.Some(tmp10);
              } else if (scrut2 instanceof Option.None.class) {
                tmp10 = latterPart;
                inlinedVal = Option.Some(tmp10);
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            } else if (choice1 instanceof ParseRule.Choice.Ref.class) {
              arg$Ref$0$ = choice1.kind;
              arg$Ref$4$ = choice1.rest;
              rest3 = arg$Ref$4$;
              kind = arg$Ref$0$;
              tmp11 = "found Choice.Ref to " + kind;
              runtime.safeCall(ParseRuleVisualizer.tracer.print(tmp11));
              scrut3 = runtime.safeCall(ParseRuleVisualizer.#renderedKinds.has(kind));
              if (scrut3 === false) {
                runtime.safeCall(referencedKinds.add(kind));
              }
              tmp12 = "#" + kind;
              rcd = globalThis.Object.freeze({
                href: tmp12
              });
              tmp13 = rr.NonTerminal(kind, rcd);
              tmp14 = renderRule(rest3);
              tmp15 = sequence(tmp13, tmp14);
              inlinedVal = Option.Some(tmp15);
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            scrut1 = inlinedVal;
            if (scrut1 instanceof Option.Some.class) {
              arg$Some$0$ = scrut1.value;
              node = arg$Some$0$;
              runtime.safeCall(nodes.push(node));
            } else if (scrut1 instanceof Option.None.class) {
              optional = true;
            }
            rest = tail;
            continue lbl
          }
          break;
        }
        tmp4 = runtime.safeCall(nodes.length.toString());
        ParseRuleVisualizer.tracer.print("nodes: ", tmp4);
        scrut = nodes.length;
        if (scrut === 0) {
          return Option.None
        }
        choice = rr.Choice(0, ...nodes);
        if (optional === true) {
          tmp5 = runtime.safeCall(rr.Optional(choice));
          return Option.Some(tmp5)
        }
        return Option.Some(choice);
      });
      return runtime.safeCall(ParseRuleVisualizer.tracer.trace(tmp3, lambda, lambda1))
    };
    referencedKinds = globalThis.Object.freeze(new globalThis.Set());
    globalThis.Object.freeze(new globalThis.Map());
    tmp = renderRule(rule);
    tmp1 = diagram(tmp);
    tmp2 = globalThis.Object.freeze([
      title,
      tmp1
    ]);
    diagrams = [
      tmp2
    ];
    lbl: while (true) {
      let scrut, currentKinds, tmp3, lambda, tmp4, tmp5;
      scrut = referencedKinds.size > 0;
      if (scrut === true) {
        currentKinds = referencedKinds;
        tmp3 = runtime.safeCall(ParseRuleVisualizer.#renderedKinds.union(currentKinds));
        ParseRuleVisualizer.#renderedKinds = tmp3;
        referencedKinds = globalThis.Object.freeze(new globalThis.Set());
        lambda = (undefined, function (kind) {
          let theRule, tmp6, tmp7, tmp8, tmp9;
          tmp6 = MutMap.get(kind);
          tmp7 = Predef.pipeInto(Rules.syntaxKinds, tmp6);
          theRule = Predef.pipeInto(tmp7, Option.unsafe.get);
          tmp8 = renderRule(theRule);
          tmp9 = diagram(tmp8);
          return globalThis.Object.freeze([
            kind,
            tmp9
          ])
        });
        tmp4 = Iter.mapping(currentKinds, lambda);
        tmp5 = Iter.toArray(tmp4);
        runtime.safeCall(diagrams.push(...tmp5));
        continue lbl
      }
      break;
    }
    return diagrams
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "ParseRuleVisualizer"]; 
});
let ParseRuleVisualizer = ParseRuleVisualizer1; export default ParseRuleVisualizer;
