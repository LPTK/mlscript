const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import fs from "fs";
import StrOps from "./../StrOps.mjs";
import Predef from "./../Predef.mjs";
let Accounting1;
(class Accounting {
  static {
    Accounting1 = this
  }
  constructor() {
    let tmp, tmp1;
    tmp = [];
    this.warnings = tmp;
    const this$Accounting = this;
    this.Project = function Project(num) {
      return globalThis.Object.freeze(new Project.class(num));
    };
    (class Project {
      static {
        this$Accounting.Project.class = this
      }
      constructor(num) {
        this.num = num;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Project", ["num"]]; 
    });
    this.Line = function Line(name, proj, starting_balance, isMatchable) {
      return globalThis.Object.freeze(new Line.class(name, proj, starting_balance, isMatchable));
    };
    (class Line {
      static {
        this$Accounting.Line.class = this
      }
      constructor(name, proj, starting_balance, isMatchable) {
        this.name = name;
        this.proj = proj;
        this.starting_balance = starting_balance;
        this.isMatchable = isMatchable;
        this.balance = this.starting_balance;
      }
      #balance;
      get balance() { return this.#balance; }
      set balance(value) { this.#balance = value; }
      expense(amt) {
        let tmp2;
        tmp2 = this.balance - amt;
        this.balance = tmp2;
        return runtime.Unit
      } 
      mustBeEmpty() {
        let scrut, tmp2, tmp3, tmp4, tmp5, tmp6;
        scrut = this.balance > 10000;
        if (scrut === true) {
          tmp2 = StrOps.concat2("> **\u2757\uFE0F** Unspent balance of ", this.name);
          tmp3 = StrOps.concat2(tmp2, ": `");
          tmp4 = this$Accounting.display(this.balance);
          tmp5 = StrOps.concat2(tmp3, tmp4);
          tmp6 = StrOps.concat2(tmp5, "`");
          runtime.safeCall(this$Accounting.warnings.push(tmp6));
          return runtime.Unit
        }
        return runtime.Unit;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Line", ["name", "proj", "starting_balance", "isMatchable"]]; 
    });
    tmp1 = [];
    this.lines = tmp1;
    this.Report = function Report(fileName) {
      return globalThis.Object.freeze(new Report.class(fileName));
    };
    (class Report {
      static {
        this$Accounting.Report.class = this
      }
      constructor(fileName) {
        this.fileName = fileName;
        fs.writeFileSync(this.fileName, "# Accounting\n");
      }
      w(txt) {
        return fs.appendFileSync(this.fileName, txt)
      } 
      wln(txt) {
        let tmp2;
        tmp2 = StrOps.concat2(txt, "\n");
        return fs.appendFileSync(this.fileName, tmp2)
      } 
      init() {
        let tmp2, tmp3, lambda, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, lambda1, tmp10, tmp11, tmp12, tmp13;
        this.wln("");
        tmp2 = StrOps.concat2("|", "Year");
        tmp3 = StrOps.concat2(tmp2, "|");
        lambda = (undefined, function (x) {
          return x.name
        });
        tmp4 = runtime.safeCall(this$Accounting.lines.map(lambda));
        tmp5 = runtime.safeCall(tmp4.join("|"));
        tmp6 = StrOps.concat2(tmp3, tmp5);
        tmp7 = StrOps.concat2(tmp6, "|");
        this.wln(tmp7);
        tmp8 = StrOps.concat2("|", "---");
        tmp9 = StrOps.concat2(tmp8, "|");
        lambda1 = (undefined, function (x) {
          return "--:"
        });
        tmp10 = runtime.safeCall(this$Accounting.lines.map(lambda1));
        tmp11 = runtime.safeCall(tmp10.join("|"));
        tmp12 = StrOps.concat2(tmp9, tmp11);
        tmp13 = StrOps.concat2(tmp12, "|");
        return this.wln(tmp13)
      } 
      snapShot(label) {
        let tmp2, tmp3, tmp4, lambda, tmp5, tmp6, tmp7, tmp8;
        tmp2 = runtime.safeCall(globalThis.String(label));
        tmp3 = StrOps.concat2("|", tmp2);
        tmp4 = StrOps.concat2(tmp3, "|");
        lambda = (undefined, function (x) {
          return this$Accounting.display(x.balance)
        });
        tmp5 = runtime.safeCall(this$Accounting.lines.map(lambda));
        tmp6 = runtime.safeCall(tmp5.join("|"));
        tmp7 = StrOps.concat2(tmp4, tmp6);
        tmp8 = StrOps.concat2(tmp7, "|");
        return this.wln(tmp8)
      } 
      wrapUp() {
        let lambda, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, lambda1, tmp8, lambda2, tmp9, lambda3, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, lambda4, tmp16, lambda5, tmp17, lambda6, tmp18, tmp19, tmp20, tmp21;
        this.wln("");
        const this$Report = this;
        lambda = (undefined, function (x) {
          this$Report.wln(x);
          return this$Report.wln("")
        });
        runtime.safeCall(this$Accounting.warnings.forEach(lambda));
        this.wln("### Remaining Available Funds");
        this.wln("");
        tmp2 = StrOps.concat2("|", "Summary");
        tmp3 = StrOps.concat2(tmp2, "|   |");
        this.wln(tmp3);
        tmp4 = StrOps.concat2("|", "---");
        tmp5 = StrOps.concat2(tmp4, "|--:|");
        this.wln(tmp5);
        tmp6 = StrOps.concat2("|", "Matchable");
        tmp7 = StrOps.concat2(tmp6, "|");
        lambda1 = (undefined, function (x) {
          return x.isMatchable
        });
        tmp8 = runtime.safeCall(this$Accounting.lines.filter(lambda1));
        lambda2 = (undefined, function (x) {
          return x.balance
        });
        tmp9 = runtime.safeCall(tmp8.map(lambda2));
        lambda3 = (undefined, function (a, b) {
          return a + b
        });
        tmp10 = tmp9.reduce(lambda3, 0);
        tmp11 = this$Accounting.display(tmp10);
        tmp12 = StrOps.concat2(tmp7, tmp11);
        tmp13 = StrOps.concat2(tmp12, "|");
        this.wln(tmp13);
        tmp14 = StrOps.concat2("|", "Non-matchable");
        tmp15 = StrOps.concat2(tmp14, "|");
        lambda4 = (undefined, function (x) {
          return ! x.isMatchable
        });
        tmp16 = runtime.safeCall(this$Accounting.lines.filter(lambda4));
        lambda5 = (undefined, function (x) {
          return x.balance
        });
        tmp17 = runtime.safeCall(tmp16.map(lambda5));
        lambda6 = (undefined, function (a, b) {
          return a + b
        });
        tmp18 = tmp17.reduce(lambda6, 0);
        tmp19 = this$Accounting.display(tmp18);
        tmp20 = StrOps.concat2(tmp15, tmp19);
        tmp21 = StrOps.concat2(tmp20, "|");
        return this.wln(tmp21)
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Report", ["fileName"]]; 
    });
  }
  display(amt) {
    let tmp;
    tmp = amt / 1000;
    return runtime.safeCall(tmp.toFixed(1))
  } 
  mkLine(nme, proj, starting_balance, matchable) {
    let line;
    line = this.Line(nme, proj, starting_balance, matchable);
    runtime.safeCall(this.lines.push(line));
    return line
  } 
  process(filename, k) {
    let report, tmp;
    report = this.Report(filename);
    runtime.safeCall(report.init());
    runtime.safeCall(k(report));
    runtime.safeCall(report.wrapUp());
    tmp = StrOps.concat2("Report written to ", filename);
    return Predef.print(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Accounting"]; 
});
let Accounting = Accounting1; export default Accounting;
