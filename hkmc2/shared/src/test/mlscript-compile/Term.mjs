const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./Runtime.mjs";
import fs from "fs";
import process from "process";
import path from "path";
import url from "url";
import Predef from "./Predef.mjs";
import StrOps from "./StrOps.mjs";
let Term2;
(class Term {
  static {
    Term2 = this
  }
  static {
    this.Symbol = function Symbol(name) {
      return globalThis.Object.freeze(new Symbol.class(name));
    };
    (class Symbol {
      static {
        Term.Symbol.class = this
      }
      constructor(name) {
        this.name = name;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Symbol", ["name"]]; 
    });
    (class Pattern {
      static {
        Term.Pattern = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Pattern"]; 
    });
    this.LitPattern = function LitPattern(lit) {
      return globalThis.Object.freeze(new LitPattern.class(lit));
    };
    (class LitPattern extends Term.Pattern {
      static {
        Term.LitPattern.class = this
      }
      constructor(lit) {
        super();
        this.lit = lit;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LitPattern", ["lit"]]; 
    });
    this.Var = function Var(sym) {
      return globalThis.Object.freeze(new Var.class(sym));
    };
    (class Var extends Term.Pattern {
      static {
        Term.Var.class = this
      }
      constructor(sym) {
        super();
        this.sym = sym;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Var", ["sym"]]; 
    });
    this.ClassLike = function ClassLike(sym, trm, parameters) {
      return globalThis.Object.freeze(new ClassLike.class(sym, trm, parameters));
    };
    (class ClassLike extends Term.Pattern {
      static {
        Term.ClassLike.class = this
      }
      constructor(sym, trm, parameters) {
        super();
        this.sym = sym;
        this.trm = trm;
        this.parameters = parameters;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ClassLike", ["sym", "trm", "parameters"]]; 
    });
    this.Tuple = function Tuple(size, inf) {
      return globalThis.Object.freeze(new Tuple.class(size, inf));
    };
    (class Tuple extends Term.Pattern {
      static {
        Term.Tuple.class = this
      }
      constructor(size, inf) {
        super();
        this.size = size;
        this.inf = inf;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Tuple", ["size", "inf"]]; 
    });
    this.Record = function Record(entities) {
      return globalThis.Object.freeze(new Record.class(entities));
    };
    (class Record extends Term.Pattern {
      static {
        Term.Record.class = this
      }
      constructor(entities) {
        super();
        this.entities = entities;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Record", ["entities"]]; 
    });
    this.Branch = function Branch(scrutinee, ptrn, continuation) {
      return globalThis.Object.freeze(new Branch.class(scrutinee, ptrn, continuation));
    };
    (class Branch {
      static {
        Term.Branch.class = this
      }
      constructor(scrutinee, ptrn, continuation) {
        this.scrutinee = scrutinee;
        this.ptrn = ptrn;
        this.continuation = continuation;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Branch", ["scrutinee", "ptrn", "continuation"]]; 
    });
    (class Split {
      static {
        Term.Split = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Split"]; 
    });
    this.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons extends Term.Split {
      static {
        Term.Cons.class = this
      }
      constructor(head, tail) {
        super();
        this.head = head;
        this.tail = tail;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Cons", ["head", "tail"]]; 
    });
    this.Let = function Let(sym, term, tail) {
      return globalThis.Object.freeze(new Let.class(sym, term, tail));
    };
    (class Let extends Term.Split {
      static {
        Term.Let.class = this
      }
      constructor(sym, term, tail) {
        super();
        this.sym = sym;
        this.term = term;
        this.tail = tail;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Let", ["sym", "term", "tail"]]; 
    });
    this.Else = function Else(default1) {
      return globalThis.Object.freeze(new Else.class(default1));
    };
    (class Else extends Term.Split {
      static {
        Term.Else.class = this
      }
      constructor(default1) {
        super();
        this.default = default1;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Else", ["default"]]; 
    });
    (class End extends Term.Split {
      static {
        Term.End = this
      }
      constructor() {
        super();
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "End"]; 
    });
    (class Keyword {
      static {
        Term.Keyword = this
      }
      static {
        (class If {
          static {
            new this
          }
          constructor() {
            Keyword.If = this;
            Object.defineProperty(this, "class", {
              value: If
            });
            globalThis.Object.freeze(this);
          }
          toString() { return runtime.render(this); }
          static [definitionMetadata] = ["object", "If"]; 
        });
        (class While {
          static {
            new this
          }
          constructor() {
            Keyword.While = this;
            Object.defineProperty(this, "class", {
              value: While
            });
            globalThis.Object.freeze(this);
          }
          toString() { return runtime.render(this); }
          static [definitionMetadata] = ["object", "While"]; 
        });
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Keyword"]; 
    });
    (class Statement {
      static {
        Term.Statement = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Statement"]; 
    });
    this.LetDecl = function LetDecl(sym) {
      return globalThis.Object.freeze(new LetDecl.class(sym));
    };
    (class LetDecl extends Term.Statement {
      static {
        Term.LetDecl.class = this
      }
      constructor(sym) {
        super();
        this.sym = sym;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LetDecl", ["sym"]]; 
    });
    this.DefineVar = function DefineVar(sym, rhs) {
      return globalThis.Object.freeze(new DefineVar.class(sym, rhs));
    };
    (class DefineVar extends Term.Statement {
      static {
        Term.DefineVar.class = this
      }
      constructor(sym, rhs) {
        super();
        this.sym = sym;
        this.rhs = rhs;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "DefineVar", ["sym", "rhs"]]; 
    });
    (class Term1 {
      static {
        Term.Term = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Term"]; 
    });
    this.Lit = function Lit(lit) {
      return globalThis.Object.freeze(new Lit.class(lit));
    };
    (class Lit extends Term.Term {
      static {
        Term.Lit.class = this
      }
      constructor(lit) {
        super();
        this.lit = lit;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Lit", ["lit"]]; 
    });
    this.Builtin = function Builtin(name) {
      return globalThis.Object.freeze(new Builtin.class(name));
    };
    (class Builtin extends Term.Term {
      static {
        Term.Builtin.class = this
      }
      constructor(name) {
        super();
        this.name = name;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Builtin", ["name"]]; 
    });
    this.Ref = function Ref(sym) {
      return globalThis.Object.freeze(new Ref.class(sym));
    };
    (class Ref extends Term.Term {
      static {
        Term.Ref.class = this
      }
      constructor(sym) {
        super();
        this.sym = sym;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ref", ["sym"]]; 
    });
    this.CSRef = function CSRef(sym, base, file) {
      return globalThis.Object.freeze(new CSRef.class(sym, base, file));
    };
    (class CSRef extends Term.Term {
      static {
        Term.CSRef.class = this
      }
      constructor(sym, base, file) {
        super();
        this.sym = sym;
        this.base = base;
        this.file = file;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CSRef", ["sym", "base", "file"]]; 
    });
    this.App = function App(lhs, rhs) {
      return globalThis.Object.freeze(new App.class(lhs, rhs));
    };
    (class App extends Term.Term {
      static {
        Term.App.class = this
      }
      constructor(lhs, rhs) {
        super();
        this.lhs = lhs;
        this.rhs = rhs;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "App", ["lhs", "rhs"]]; 
    });
    this.Sel = function Sel(prefix, nme) {
      return globalThis.Object.freeze(new Sel.class(prefix, nme));
    };
    (class Sel extends Term.Term {
      static {
        Term.Sel.class = this
      }
      constructor(prefix, nme) {
        super();
        this.prefix = prefix;
        this.nme = nme;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Sel", ["prefix", "nme"]]; 
    });
    this.DynSel = function DynSel(prefix, fld, arrayIdx) {
      return globalThis.Object.freeze(new DynSel.class(prefix, fld, arrayIdx));
    };
    (class DynSel extends Term.Term {
      static {
        Term.DynSel.class = this
      }
      constructor(prefix, fld, arrayIdx) {
        super();
        this.prefix = prefix;
        this.fld = fld;
        this.arrayIdx = arrayIdx;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "DynSel", ["prefix", "fld", "arrayIdx"]]; 
    });
    this.Tup = function Tup(fields) {
      return globalThis.Object.freeze(new Tup.class(fields));
    };
    (class Tup extends Term.Term {
      static {
        Term.Tup.class = this
      }
      constructor(fields) {
        super();
        this.fields = fields;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Tup", ["fields"]]; 
    });
    this.IfLike = function IfLike(kw, desugared) {
      return globalThis.Object.freeze(new IfLike.class(kw, desugared));
    };
    (class IfLike extends Term.Term {
      static {
        Term.IfLike.class = this
      }
      constructor(kw, desugared) {
        super();
        this.kw = kw;
        this.desugared = desugared;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "IfLike", ["kw", "desugared"]]; 
    });
    this.Lam = function Lam(params, body) {
      return globalThis.Object.freeze(new Lam.class(params, body));
    };
    (class Lam extends Term.Term {
      static {
        Term.Lam.class = this
      }
      constructor(params, body) {
        super();
        this.params = params;
        this.body = body;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Lam", ["params", "body"]]; 
    });
    this.Blk = function Blk(stats, res) {
      return globalThis.Object.freeze(new Blk.class(stats, res));
    };
    (class Blk extends Term.Term {
      static {
        Term.Blk.class = this
      }
      constructor(stats, res) {
        super();
        this.stats = stats;
        this.res = res;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Blk", ["stats", "res"]]; 
    });
    this.New = function New(cls, args) {
      return globalThis.Object.freeze(new New.class(cls, args));
    };
    (class New extends Term.Term {
      static {
        Term.New.class = this
      }
      constructor(cls, args) {
        super();
        this.cls = cls;
        this.args = args;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "New", ["cls", "args"]]; 
    });
    this.Region = function Region(name, body) {
      return globalThis.Object.freeze(new Region.class(name, body));
    };
    (class Region extends Term.Term {
      static {
        Term.Region.class = this
      }
      constructor(name, body) {
        super();
        this.name = name;
        this.body = body;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Region", ["name", "body"]]; 
    });
    this.RegRef = function RegRef(reg, value) {
      return globalThis.Object.freeze(new RegRef.class(reg, value));
    };
    (class RegRef extends Term.Term {
      static {
        Term.RegRef.class = this
      }
      constructor(reg, value) {
        super();
        this.reg = reg;
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "RegRef", ["reg", "value"]]; 
    });
    this.Assgn = function Assgn(lhs, rhs) {
      return globalThis.Object.freeze(new Assgn.class(lhs, rhs));
    };
    (class Assgn extends Term.Term {
      static {
        Term.Assgn.class = this
      }
      constructor(lhs, rhs) {
        super();
        this.lhs = lhs;
        this.rhs = rhs;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Assgn", ["lhs", "rhs"]]; 
    });
    this.Deref = function Deref(ref) {
      return globalThis.Object.freeze(new Deref.class(ref));
    };
    (class Deref extends Term.Term {
      static {
        Term.Deref.class = this
      }
      constructor(ref) {
        super();
        this.ref = ref;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Deref", ["ref"]]; 
    });
    this.SetRef = function SetRef(ref, value) {
      return globalThis.Object.freeze(new SetRef.class(ref, value));
    };
    (class SetRef extends Term.Term {
      static {
        Term.SetRef.class = this
      }
      constructor(ref, value) {
        super();
        this.ref = ref;
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "SetRef", ["ref", "value"]]; 
    });
    this.Ret = function Ret(result) {
      return globalThis.Object.freeze(new Ret.class(result));
    };
    (class Ret extends Term.Term {
      static {
        Term.Ret.class = this
      }
      constructor(result) {
        super();
        this.result = result;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ret", ["result"]]; 
    });
    this.Throw = function Throw(result) {
      return globalThis.Object.freeze(new Throw.class(result));
    };
    (class Throw extends Term.Term {
      static {
        Term.Throw.class = this
      }
      constructor(result) {
        super();
        this.result = result;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Throw", ["result"]]; 
    });
    this.Try = function Try(body, finallyDo) {
      return globalThis.Object.freeze(new Try.class(body, finallyDo));
    };
    (class Try extends Term.Term {
      static {
        Term.Try.class = this
      }
      constructor(body, finallyDo) {
        super();
        this.body = body;
        this.finallyDo = finallyDo;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Try", ["body", "finallyDo"]]; 
    });
    this.Context = function Context(names, bindings, dependencies, printOnly) {
      return globalThis.Object.freeze(new Context.class(names, bindings, dependencies, printOnly));
    };
    (class Context {
      static {
        Term.Context.class = this
      }
      constructor(names, bindings, dependencies, printOnly) {
        this.names = names;
        this.bindings = bindings;
        this.dependencies = dependencies;
        this.printOnly = printOnly;
      }
      get(sym) {
        let scrut, scrut1, tmp;
        scrut = runtime.safeCall(this.bindings.has(sym));
        if (scrut === true) {
          return runtime.safeCall(this.bindings.get(sym))
        }
        scrut1 = this.printOnly;
        if (scrut1 === true) {
          return sym.name
        }
        tmp = StrOps.concat("Invalid binding name ", sym.name);
        throw runtime.safeCall(globalThis.Error(tmp));
      } 
      get nest() {
        let tmp;
        tmp = globalThis.Object.freeze(new globalThis.Map(this.bindings));
        return Term.Context(this.names, tmp, this.dependencies, this.printOnly);
      } 
      add(sym) {
        let fn;
        fn = this.freshName(sym.name);
        this.bindings.set(sym, fn);
        return fn
      } 
      depends(d) {
        return runtime.safeCall(this.dependencies.add(d))
      } 
      freshName(name) {
        let scrut, i, tmp, tmp1, tmp2;
        tmp = runtime.safeCall(this.names.has(name));
        scrut = ! tmp;
        if (scrut === true) {
          this.names.set(name, 0);
        }
        i = runtime.safeCall(this.names.get(name));
        tmp1 = i + 1;
        this.names.set(name, tmp1);
        tmp2 = runtime.safeCall(i.toString());
        return StrOps.concat(name, "_", tmp2)
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Context", ["names", "bindings", "dependencies", "printOnly"]]; 
    });
  }
  static paren_showSplit_show(id, param0, param1, param2) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
          if (param0 instanceof Term.Ref.class) {
            tmp = true;
          } else {
            tmp = false;
          }
          if (tmp === false) {
            if (param0 instanceof Term.CSRef.class) {
              tmp2 = true;
            } else {
              tmp2 = false;
            }
            tmp1 = tmp2;
          } else {
            tmp1 = true;
          }
          if (tmp1 === false) {
            if (param0 instanceof Term.Lit.class) {
              tmp4 = true;
            } else {
              tmp4 = false;
            }
            tmp3 = tmp4;
          } else {
            tmp3 = true;
          }
          if (tmp3 === false) {
            if (param0 instanceof Term.Sel.class) {
              tmp6 = true;
            } else {
              tmp6 = false;
            }
            tmp5 = tmp6;
          } else {
            tmp5 = true;
          }
          if (tmp5 === true) {
            id = 2;
            continue loopLabel
          }
          tmp7 = Term.show(param0, param1);
          return StrOps.concat("(", tmp7, ")");
        case 1:
          let nest, freshName, arg$Else$0$, arg$Let$0$, arg$Let$1$, arg$Let$2$, arg$Cons$0$, arg$Cons$1$, arg$Branch$0$, arg$Branch$1$, arg$Branch$2$, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14;
          if (param0 instanceof Term.Cons.class) {
            arg$Cons$0$ = param0.head;
            arg$Cons$1$ = param0.tail;
            if (arg$Cons$0$ instanceof Term.Branch.class) {
              arg$Branch$0$ = arg$Cons$0$.scrutinee;
              arg$Branch$1$ = arg$Cons$0$.ptrn;
              arg$Branch$2$ = arg$Cons$0$.continuation;
              tmp8 = Term.show(arg$Branch$0$, param1);
              tmp9 = Term.showPattern(arg$Branch$1$, param1);
              tmp10 = Term.showSplit(arg$Branch$2$, param1, true);
              tmp11 = Term.showSplit(arg$Cons$1$, param1, false);
              return StrOps.concat(tmp8, " is ", tmp9, " then ", tmp10, "\n", tmp11)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          } else if (param0 instanceof Term.Let.class) {
            arg$Let$0$ = param0.sym;
            arg$Let$1$ = param0.term;
            arg$Let$2$ = param0.tail;
            nest = param1.nest;
            freshName = runtime.safeCall(nest.add(arg$Let$0$));
            tmp12 = Term.show(arg$Let$1$, nest);
            tmp13 = Term.showSplit(arg$Let$2$, nest, false);
            return StrOps.concat("let ", freshName, " = ", tmp12, "\n", tmp13)
          } else if (param0 instanceof Term.Else.class) {
            arg$Else$0$ = param0.default;
            if (param2 === true) {
              param0 = arg$Else$0$;
              id = 2;
              continue loopLabel
            }
            tmp14 = Term.show(arg$Else$0$, param1);
            return StrOps.concat("else ", tmp14);
          } else if (param0 instanceof Term.End) {
            return ""
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        case 2:
          let nest1, freshParams, nest2, arg$IfLike$0$, arg$IfLike$1$, arg$Blk$0$, arg$Blk$1$, arg$Lam$0$, arg$Lam$1$, arg$Tup$0$, arg$App$0$, arg$App$1$, arg$Sel$0$, arg$Sel$1$, arg$Builtin$0$, arg$Lit$0$, arg$CSRef$0$, arg$CSRef$1$, arg$CSRef$2$, arg$Symbol$0$, arg$Ref$0$, tmp15, tmp16, tmp17, tmp18, tmp19, lambda, tmp20, tmp21, lambda1, tmp22, tmp23, tmp24, lambda2, tmp25, tmp26, tmp27, tmp28, tmp29, ctx;
          ctx = param1;
          if (param0 instanceof Term.Ref.class) {
            arg$Ref$0$ = param0.sym;
            return runtime.safeCall(ctx.get(arg$Ref$0$))
          } else if (param0 instanceof Term.CSRef.class) {
            arg$CSRef$0$ = param0.sym;
            arg$CSRef$1$ = param0.base;
            arg$CSRef$2$ = param0.file;
            if (arg$CSRef$0$ instanceof Term.Symbol.class) {
              arg$Symbol$0$ = arg$CSRef$0$.name;
              if (arg$CSRef$2$ === undefined) {
                runtime.safeCall(ctx.depends(arg$CSRef$1$));
                return arg$Symbol$0$
              }
              tmp15 = runtime.safeCall(path.dirname(arg$CSRef$1$));
              tmp16 = path.join(tmp15, arg$CSRef$2$);
              runtime.safeCall(ctx.depends(tmp16));
              return arg$Symbol$0$;
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          } else if (param0 instanceof Term.Lit.class) {
            arg$Lit$0$ = param0.lit;
            return runtime.safeCall(arg$Lit$0$.toString())
          } else if (param0 instanceof Term.Builtin.class) {
            arg$Builtin$0$ = param0.name;
            return arg$Builtin$0$
          } else if (param0 instanceof Term.Sel.class) {
            arg$Sel$0$ = param0.prefix;
            arg$Sel$1$ = param0.nme;
            tmp17 = Term.paren(arg$Sel$0$, ctx);
            return StrOps.concat(tmp17, ".", arg$Sel$1$)
          } else if (param0 instanceof Term.App.class) {
            arg$App$0$ = param0.lhs;
            arg$App$1$ = param0.rhs;
            tmp18 = Term.paren(arg$App$0$, ctx);
            tmp19 = Term.show(arg$App$1$, ctx);
            return StrOps.concat(tmp18, tmp19)
          } else if (param0 instanceof Term.Tup.class) {
            arg$Tup$0$ = param0.fields;
            lambda = (undefined, function (t) {
              return Term.show(t, ctx)
            });
            tmp20 = runtime.safeCall(arg$Tup$0$.map(lambda));
            tmp21 = runtime.safeCall(tmp20.join(", "));
            return StrOps.concat("(", tmp21, ")")
          } else if (param0 instanceof Term.Lam.class) {
            arg$Lam$0$ = param0.params;
            arg$Lam$1$ = param0.body;
            nest1 = ctx.nest;
            lambda1 = (undefined, function (s) {
              return runtime.safeCall(nest1.add(s))
            });
            freshParams = runtime.safeCall(arg$Lam$0$.map(lambda1));
            tmp22 = runtime.safeCall(freshParams.join(", "));
            tmp23 = Term.show(arg$Lam$1$, nest1);
            tmp24 = Term.indent(tmp23, "  ", true);
            return StrOps.concat("(", tmp22, ") =>\n", tmp24)
          } else if (param0 instanceof Term.Blk.class) {
            arg$Blk$0$ = param0.stats;
            arg$Blk$1$ = param0.res;
            nest2 = ctx.nest;
            lambda2 = (undefined, function (s) {
              return Term.showStmt(s, nest2)
            });
            tmp25 = runtime.safeCall(arg$Blk$0$.map(lambda2));
            tmp26 = runtime.safeCall(tmp25.join("\n"));
            tmp27 = Term.show(arg$Blk$1$, nest2);
            return StrOps.concat(tmp26, "\n", tmp27)
          } else if (param0 instanceof Term.IfLike.class) {
            arg$IfLike$0$ = param0.kw;
            arg$IfLike$1$ = param0.desugared;
            if (arg$IfLike$0$ instanceof Term.Keyword.If.class) {
              tmp28 = Term.showSplit(arg$IfLike$1$, ctx, false);
              tmp29 = Term.indent(tmp28, "  ", true);
              return StrOps.concat("if \n", tmp29)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      break;
    }
  } 
  static indent(str, ind, keepLeading) {
    let res, tmp, lambda, tmp1;
    tmp = runtime.safeCall(str.split("\n"));
    lambda = (undefined, function (s) {
      return StrOps.concat(ind, s)
    });
    tmp1 = runtime.safeCall(tmp.map(lambda));
    res = runtime.safeCall(tmp1.join("\n"));
    if (keepLeading === true) {
      return res
    }
    return runtime.safeCall(res.substring(ind.length));
  } 
  static showStmt(s, ctx) {
    let freshName, arg$DefineVar$0$, arg$DefineVar$1$, arg$LetDecl$0$, tmp, tmp1;
    if (s instanceof Term.LetDecl.class) {
      arg$LetDecl$0$ = s.sym;
      freshName = runtime.safeCall(ctx.add(arg$LetDecl$0$));
      return StrOps.concat("let ", freshName)
    } else if (s instanceof Term.DefineVar.class) {
      arg$DefineVar$0$ = s.sym;
      arg$DefineVar$1$ = s.rhs;
      tmp = runtime.safeCall(ctx.get(arg$DefineVar$0$));
      tmp1 = Term.show(arg$DefineVar$1$, ctx);
      return StrOps.concat(tmp, " = ", tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static showPattern(p, ctx) {
    let arg$LitPattern$0$;
    if (p instanceof Term.LitPattern.class) {
      arg$LitPattern$0$ = p.lit;
      return runtime.safeCall(arg$LitPattern$0$.toString())
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static paren(t, ctx) {
    return Term.paren_showSplit_show(0, t, ctx, undefined)
  } 
  static showSplit(s, ctx, isCont) {
    return Term.paren_showSplit_show(1, s, ctx, isCont)
  } 
  static show(t, ctx) {
    return Term.paren_showSplit_show(2, t, ctx, undefined)
  } 
  static print(t) {
    let ctx, tmp, tmp1, tmp2, tmp3;
    tmp = globalThis.Object.freeze(new globalThis.Map());
    tmp1 = globalThis.Object.freeze(new globalThis.Map());
    tmp2 = globalThis.Object.freeze(new globalThis.Set());
    ctx = Term.Context(tmp, tmp1, tmp2, true);
    tmp3 = Term.show(t, ctx);
    return runtime.safeCall(globalThis.console.log(tmp3))
  } 
  static genImport(base, p) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = runtime.safeCall(url.fileURLToPath(p));
    tmp1 = path.relative(base, tmp);
    tmp2 = - 4;
    tmp3 = tmp1.slice(0, tmp2);
    return StrOps.concat("import \"./", tmp3, ".mls\"")
  } 
  static codegen(t, file) {
    let ctx, moduleName, fullpath, code, dependencies, scrut, originData, newData, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, lambda, tmp8, tmp9;
    tmp = globalThis.Object.freeze(new globalThis.Map());
    tmp1 = globalThis.Object.freeze(new globalThis.Map());
    tmp2 = globalThis.Object.freeze(new globalThis.Set());
    ctx = Term.Context(tmp, tmp1, tmp2, false);
    tmp3 = runtime.safeCall(path.parse(file));
    moduleName = tmp3.name;
    tmp4 = runtime.safeCall(process.cwd());
    fullpath = path.join(tmp4, file);
    tmp5 = Term.show(t, ctx);
    tmp6 = Term.indent(tmp5, "  ", true);
    code = StrOps.concat("module ", moduleName, " with ...\nfun res =\n", tmp6, "\n");
    tmp7 = globalThis.Array.from(ctx.dependencies);
    lambda = (undefined, function (s) {
      let tmp10;
      tmp10 = runtime.safeCall(path.dirname(fullpath));
      return Term.genImport(tmp10, s)
    });
    dependencies = runtime.safeCall(tmp7.map(lambda));
    tmp8 = runtime.safeCall(fs.existsSync(file));
    scrut = ! tmp8;
    if (scrut === true) {
      runtime.safeCall(fs.writeFileSync(file, "", "utf8"));
    }
    originData = fs.readFileSync(file, "utf8");
    tmp9 = runtime.safeCall(dependencies.join("\n"));
    newData = StrOps.concat(tmp9, "\n", code);
    scrut1 = Predef.nequals(newData, originData);
    if (scrut1 === true) {
      runtime.safeCall(fs.writeFileSync(file, newData, "utf8"));
      return runtime.Unit
    }
    return runtime.Unit;
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Term"]; 
});
let Term = Term2; export default Term;
