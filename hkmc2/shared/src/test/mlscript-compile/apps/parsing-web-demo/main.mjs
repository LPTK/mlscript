const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Parser from "./../parsing/Parser.mjs";
import Lexer from "./../parsing/Lexer.mjs";
import StrOps from "./../../StrOps.mjs";
import Iter from "./../../Iter.mjs";
import XML from "./../../XML.mjs";
import Option from "./../../Option.mjs";
import Runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
import TreeHelpers from "./../parsing/TreeHelpers.mjs";
import Extension from "./../parsing/Extension.mjs";
import ParseRuleVisualizer from "./../parsing/ParseRuleVisualizer.mjs";
import Rules from "./../parsing/Rules.mjs";
import railroad from "./../parsing/vendors/railroad/railroad.mjs";
import Examples from "./Examples.mjs";
let Main1;
(class Main {
  static {
    Main1 = this
  }
  static #query;
  static #editor;
  static #selector;
  static #parseButton;
  static #outputPanel;
  static #indentRegex;
  static #errorDisplayStyle;
  static {
    let lambda, lambda1, lambda2, lambda3;
    Main.#query = runtime.safeCall(globalThis.document.querySelector.bind(globalThis.document));
    Main.#editor = runtime.safeCall(Main.#query("#editor"));
    Main.#selector = runtime.safeCall(Main.#query("select#example"));
    Main.#parseButton = runtime.safeCall(Main.#query("button#parse"));
    Main.#outputPanel = runtime.safeCall(Main.#query("#output"));
    lambda = (undefined, function (caseScrut) {
      let option, scrut, element1$, element0$;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
        element0$ = runtime.Tuple.get(caseScrut, 0);
        element1$ = runtime.Tuple.get(caseScrut, 1);
        option = runtime.safeCall(globalThis.document.createElement("option"));
        option.value = element0$;
        option.textContent = element1$.name;
        runtime.safeCall(Main.#selector.appendChild(option));
        scrut = Main.#editor.value;
        if (scrut === "") {
          Main.#editor.value = element1$.source;
          return runtime.Unit
        }
        return runtime.Unit;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    Iter.each(Examples.examples, lambda);
    lambda1 = (undefined, function (event) {
      let scrut, start, end, tmp, tmp1, tmp2, tmp3, tmp4;
      scrut = event.key;
      if (scrut === "Tab") {
        runtime.safeCall(event.preventDefault());
        start = Main.#editor.selectionStart;
        end = Main.#editor.selectionEnd;
        tmp = Main.#editor.value.substring(0, start);
        tmp1 = tmp + "  ";
        tmp2 = runtime.safeCall(Main.#editor.value.substring(end));
        tmp3 = tmp1 + tmp2;
        Main.#editor.value = tmp3;
        tmp4 = start + 2;
        Main.#editor.selectionEnd = tmp4;
        Main.#editor.selectionStart = Main.#editor.selectionEnd;
        return runtime.Unit
      }
      return runtime.Unit;
    });
    Main.#editor.addEventListener("keydown", lambda1);
    lambda2 = (undefined, function (event) {
      let scrut, arg$Some$0$, tmp, tmp1;
      scrut = runtime.safeCall(Examples.examples.get(Main.#selector.value));
      if (scrut instanceof Option.Some.class) {
        arg$Some$0$ = scrut.value;
        Main.#editor.value = arg$Some$0$.source;
        return runtime.Unit
      } else if (scrut instanceof Option.None.class) {
        tmp = "Example \"" + Main.#selector.value;
        tmp1 = tmp + "\" not found";
        throw globalThis.Object.freeze(new globalThis.Error(tmp1))
      }
      return runtime.Unit;
    });
    Main.#selector.addEventListener("change", lambda2);
    lambda3 = (undefined, function (event) {
      let tokens, rcd, lambda4, lambda5;
      rcd = globalThis.Object.freeze({
        noWhitespace: true
      });
      tokens = Lexer.lex(Main.#editor.value, rcd);
      Main.#outputPanel.innerHTML = "";
      lambda4 = (undefined, function () {
        let trees, tmp, lambda6;
        trees = Parser.parse(tokens);
        tmp = Iter.fromStack(trees);
        lambda6 = (undefined, function (tree) {
          let scrut, collapsibleTree, tmp1;
          scrut = Extension.isDiagramDirective(tree);
          if (scrut === true) {
            return Main.displayRules()
          }
          collapsibleTree = runtime.safeCall(globalThis.document.createElement("collapsible-tree"));
          tmp1 = TreeHelpers.showAsTree(tree);
          collapsibleTree.textContent = tmp1;
          return runtime.safeCall(Main.#outputPanel.appendChild(collapsibleTree));
        });
        return Iter.each(tmp, lambda6)
      });
      lambda5 = (undefined, function (error) {
        let errorDisplay;
        errorDisplay = runtime.safeCall(globalThis.document.createElement("error-display"));
        runtime.safeCall(errorDisplay.setError(error));
        return runtime.safeCall(Main.#outputPanel.appendChild(errorDisplay))
      });
      return Runtime.try_catch(lambda4, lambda5)
    });
    Main.#parseButton.addEventListener("click", lambda3);
    Main.#indentRegex = globalThis.Object.freeze(new globalThis.RegExp("^(\\s*)"));
    Main.#errorDisplayStyle = "\n.error-container {\n  background-color: #fdd;\n  padding: 0.375rem 0.75rem 0.5rem;\n  font-family: var(--monospace);\n  color: #991b1bff;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.error-message {\n  margin: 0;\n  font-weight: bold;\n  font-size: 1.125rem;\n}\n.stack-trace {\n  font-size: 0.875rem;\n  margin: 0;\n  list-style-type: none;\n  padding-left: 0.5rem;\n}";
    (class CollapsibleTree extends globalThis.HTMLElement {
      static {
        Main.CollapsibleTree = this
      }
      constructor() {
        super();
      }
      connectedCallback() {
        let rawText, treeData, treeElement;
        rawText = this.textContent;
        this.textContent = "";
        treeData = Main.parseIndentedText(rawText);
        treeElement = this.createDetailsTree(treeData);
        return runtime.safeCall(this.appendChild(treeElement))
      } 
      createDetailsTree(nodes) {
        let fragment, lambda4;
        fragment = runtime.safeCall(globalThis.document.createDocumentFragment());
        const this$CollapsibleTree = this;
        lambda4 = (undefined, function (node) {
          let details, summary, scrut, rule, tmp;
          details = runtime.safeCall(globalThis.document.createElement("details"));
          details.setAttribute("open", "");
          summary = runtime.safeCall(globalThis.document.createElement("summary"));
          summary.textContent = node.text;
          runtime.safeCall(details.appendChild(summary));
          scrut = node.children.length > 0;
          if (scrut === true) {
            tmp = this$CollapsibleTree.createDetailsTree(node.children);
            runtime.safeCall(details.appendChild(tmp));
          } else {
            details.setAttribute("leaf", "");
          }
          runtime.safeCall(fragment.appendChild(details));
          rule = runtime.safeCall(globalThis.document.createElement("rule"));
          runtime.safeCall(rule.classList.add("rule"));
          return runtime.safeCall(fragment.appendChild(rule))
        });
        Iter.each(nodes, lambda4);
        return fragment
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CollapsibleTree"]; 
    });
    globalThis.customElements.define("collapsible-tree", Main.CollapsibleTree);
    (class ErrorDisplay extends globalThis.HTMLElement {
      static {
        Main.ErrorDisplay = this
      }
      constructor() {
        super();
        let rcd;
        rcd = globalThis.Object.freeze({
          mode: "open"
        });
        runtime.safeCall(this.attachShadow(rcd));
        this.#_error = Option.None;
      }
      #_error;
      connectedCallback() {
        return this.render()
      } 
      setError(value) {
        let tmp;
        tmp = Option.Some(value);
        this.#_error = tmp;
        return this.render()
      } 
      render() {
        let error, stackLines, scrut, arg$Some$0$, rcd, tmp, rcd1, tmp1, tmp2, tmp3, tmp4, rcd2, tmp5, lambda4, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
        if (this.#_error instanceof Option.Some.class) {
          arg$Some$0$ = this.#_error.value;
          error = arg$Some$0$;
          stackLines = runtime.safeCall(arg$Some$0$.stack.split("\n"));
          scrut = runtime.safeCall(stackLines.at(0).startsWith(arg$Some$0$.name));
          if (scrut === true) {
            runtime.safeCall(stackLines.shift());
          }
          rcd = globalThis.Object.freeze({
            "class": "error-container"
          });
          tmp = XML.elem("div", rcd);
          rcd1 = globalThis.Object.freeze({
            "class": "error-message"
          });
          tmp1 = XML.elem("h3", rcd1);
          tmp2 = error.name + ": ";
          tmp3 = tmp2 + error.message;
          tmp4 = runtime.safeCall(tmp1(tmp3));
          rcd2 = globalThis.Object.freeze({
            "class": "stack-trace"
          });
          tmp5 = XML.elem("ul", rcd2);
          lambda4 = (undefined, function (line) {
            let tmp12, tmp13;
            tmp12 = XML.elem("li");
            tmp13 = runtime.safeCall(line.trim());
            return runtime.safeCall(tmp12(tmp13))
          });
          tmp6 = Iter.mapping(stackLines, lambda4);
          tmp7 = Iter.joined(tmp6, "");
          tmp8 = runtime.safeCall(tmp5(tmp7));
          tmp9 = XML.elem("style");
          tmp10 = runtime.safeCall(tmp9(Main.#errorDisplayStyle));
          tmp11 = runtime.safeCall(tmp(tmp4, tmp8, tmp10));
          this.shadowRoot.innerHTML = tmp11;
          return runtime.Unit
        }
        return runtime.Unit;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ErrorDisplay"]; 
    });
    globalThis.customElements.define("error-display", Main.ErrorDisplay);
    Main.displayRules();
  }
  static parseIndentedText(text) {
    let root, children, stack, indent, tmp, tmp1, lambda, tmp2, lambda1;
    children = globalThis.Object.freeze([]);
    root = globalThis.Object.freeze({
      text: "",
      children: children
    });
    indent = - 1;
    tmp = globalThis.Object.freeze({
      node: root,
      indent: indent
    });
    stack = globalThis.Object.freeze([
      tmp
    ]);
    tmp1 = runtime.safeCall(text.split("\n"));
    lambda = (undefined, function (line) {
      let tmp3;
      tmp3 = runtime.safeCall(line.trim());
      return tmp3.length > 0
    });
    tmp2 = Iter.filtering(tmp1, lambda);
    lambda1 = (undefined, function (line) {
      let indent1, text1, newNode, children1, tmp3, tmp4, rcd;
      tmp3 = runtime.safeCall(line.match(Main.#indentRegex));
      indent1 = tmp3.at(1).length;
      text1 = runtime.safeCall(line.substring(indent1));
      lbl: while (true) {
        let scrut, tmp5;
        tmp5 = stack.length - 1;
        scrut = indent1 <= stack.at(tmp5).indent;
        if (scrut === true) {
          runtime.safeCall(stack.pop());
          continue lbl
        }
        break;
      }
      children1 = globalThis.Object.freeze([]);
      newNode = globalThis.Object.freeze({
        text: text1,
        children: children1
      });
      tmp4 = stack.length - 1;
      runtime.safeCall(stack.at(tmp4).node.children.push(newNode));
      rcd = globalThis.Object.freeze({
        node: newNode,
        indent: indent1
      });
      return runtime.safeCall(stack.push(rcd))
    });
    Iter.each(tmp2, lambda1);
    return root.children
  } 
  static makeFigures(entries) {
    let lambda, tmp;
    lambda = (undefined, function (caseScrut) {
      let element1$, element0$, tmp1, tmp2, tmp3;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
        element0$ = runtime.Tuple.get(caseScrut, 0);
        element1$ = runtime.Tuple.get(caseScrut, 1);
        tmp1 = XML.elem("figure");
        tmp2 = XML.elem("figcaption");
        tmp3 = runtime.safeCall(tmp2(element0$));
        return runtime.safeCall(tmp1(tmp3, element1$))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    tmp = Iter.mapping(entries, lambda);
    return Iter.joined(tmp, "")
  } 
  static displayRules() {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, lambda, tmp15, tmp16, tmp17;
    ParseRuleVisualizer.reset();
    tmp = runtime.safeCall(Main.#query("#syntax-diagrams>main"));
    tmp1 = XML.elem("h3");
    tmp2 = runtime.safeCall(tmp1("Term"));
    tmp3 = ParseRuleVisualizer.render(railroad, "term", Rules.termRule);
    tmp4 = Main.makeFigures(tmp3);
    tmp5 = XML.elem("h3");
    tmp6 = runtime.safeCall(tmp5("Type"));
    tmp7 = ParseRuleVisualizer.render(railroad, "term", Rules.typeRule);
    tmp8 = Main.makeFigures(tmp7);
    tmp9 = XML.elem("h3");
    tmp10 = runtime.safeCall(tmp9("Definition"));
    tmp11 = ParseRuleVisualizer.render(railroad, "term", Rules.declRule);
    tmp12 = Main.makeFigures(tmp11);
    tmp13 = XML.elem("h3");
    tmp14 = runtime.safeCall(tmp13("Extension"));
    lambda = (undefined, function (kindName) {
      let tmp18, tmp19;
      tmp18 = Rules.getRuleByKind(kindName);
      tmp19 = ParseRuleVisualizer.render(railroad, kindName, tmp18);
      return Main.makeFigures(tmp19)
    });
    tmp15 = Iter.mapping(Rules.extendedKinds, lambda);
    tmp16 = Iter.joined(tmp15, "");
    tmp17 = StrOps.concat(tmp2, tmp4, tmp6, tmp8, tmp10, tmp12, tmp14, tmp16);
    tmp.innerHTML = tmp17;
    return runtime.Unit
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Main"]; 
});