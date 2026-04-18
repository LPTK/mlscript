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
      let arg$Some$0$;
      if (rhsOpt instanceof Option.Some.class) {
        arg$Some$0$ = rhsOpt.value;
        return rr.Sequence(lhs, arg$Some$0$)
      } else if (rhsOpt instanceof Option.None.class) {
        return lhs
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    diagram = function diagram(choicesOpt) {
      let arg$Some$0$, tmp3;
      if (choicesOpt instanceof Option.Some.class) {
        arg$Some$0$ = choicesOpt.value;
        tmp3 = arg$Some$0$;
        return runtime.safeCall(rr.Diagram(arg$Some$0$))
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
          let arg$Cons$0$, arg$Cons$1$, arg$Some$0$;
          if (rest instanceof Stack.Cons.class) {
            let inlinedVal, scrut1, latterPart, scrut2, arg$Ref$0$, arg$Ref$4$, arg$Siding$0$, arg$Siding$1$, arg$Siding$2$, arg$Keyword$0$, arg$Keyword$1$, tmp6, tmp7, tmp8, arg$Some$0$1, tmp9, tmp10, tmp11, tmp12, rcd, tmp13, tmp14, tmp15;
            arg$Cons$0$ = rest.head;
            arg$Cons$1$ = rest.tail;
            if (arg$Cons$0$ instanceof ParseRule.Choice.End.class) {
              runtime.safeCall(ParseRuleVisualizer.tracer.print("found Choice.End"));
              inlinedVal = Option.None;
            } else if (arg$Cons$0$ instanceof ParseRule.Choice.Keyword.class) {
              arg$Keyword$0$ = arg$Cons$0$.keyword;
              arg$Keyword$1$ = arg$Cons$0$.rest;
              runtime.safeCall(ParseRuleVisualizer.tracer.print("found Choice.Keyword"));
              tmp6 = runtime.safeCall(rr.Terminal(arg$Keyword$0$.name));
              tmp7 = renderRule(arg$Keyword$1$);
              tmp8 = sequence(tmp6, tmp7);
              inlinedVal = Option.Some(tmp8);
            } else if (arg$Cons$0$ instanceof ParseRule.Choice.Siding.class) {
              arg$Siding$0$ = arg$Cons$0$.init;
              arg$Siding$1$ = arg$Cons$0$.optional;
              arg$Siding$2$ = arg$Cons$0$.rest;
              runtime.safeCall(ParseRuleVisualizer.tracer.print("found Choice.Siding"));
              scrut1 = renderRule(arg$Siding$0$);
              latterPart = renderRule(arg$Siding$2$);
              if (scrut1 instanceof Option.Some.class) {
                arg$Some$0$1 = scrut1.value;
                if (arg$Siding$1$ === true) {
                  tmp9 = runtime.safeCall(rr.Optional(arg$Some$0$1));
                  tmp10 = sequence(tmp9, latterPart);
                } else {
                  tmp10 = sequence(arg$Some$0$1, latterPart);
                }
                inlinedVal = Option.Some(tmp10);
              } else if (scrut1 instanceof Option.None.class) {
                tmp10 = latterPart;
                inlinedVal = Option.Some(latterPart);
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            } else if (arg$Cons$0$ instanceof ParseRule.Choice.Ref.class) {
              arg$Ref$0$ = arg$Cons$0$.kind;
              arg$Ref$4$ = arg$Cons$0$.rest;
              tmp11 = "found Choice.Ref to " + arg$Ref$0$;
              runtime.safeCall(ParseRuleVisualizer.tracer.print(tmp11));
              scrut2 = runtime.safeCall(ParseRuleVisualizer.#renderedKinds.has(arg$Ref$0$));
              if (scrut2 === false) {
                runtime.safeCall(referencedKinds.add(arg$Ref$0$));
              }
              tmp12 = "#" + arg$Ref$0$;
              rcd = globalThis.Object.freeze({
                href: tmp12
              });
              tmp13 = rr.NonTerminal(arg$Ref$0$, rcd);
              tmp14 = renderRule(arg$Ref$4$);
              tmp15 = sequence(tmp13, tmp14);
              inlinedVal = Option.Some(tmp15);
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            if (inlinedVal instanceof Option.Some.class) {
              arg$Some$0$ = inlinedVal.value;
              runtime.safeCall(nodes.push(arg$Some$0$));
            } else if (inlinedVal instanceof Option.None.class) {
              optional = true;
            }
            rest = arg$Cons$1$;
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
