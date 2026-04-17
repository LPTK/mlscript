const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./Runtime.mjs";
import Predef from "./Predef.mjs";
import Option from "./Option.mjs";
import StrOps from "./StrOps.mjs";
import Runtime from "./Runtime.mjs";
let Block2;
(class Block {
  static {
    Block2 = this
  }
  static {
    this.Symbol = function Symbol(name) {
      return globalThis.Object.freeze(new Symbol.class(name));
    };
    (class Symbol {
      static {
        Block.Symbol.class = this
      }
      constructor(name) {
        this.name = name;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Symbol", ["name"]]; 
    });
    this.ClassSymbol = function ClassSymbol(name) {
      return globalThis.Object.freeze(new ClassSymbol.class(name));
    };
    (class ClassSymbol extends Block.Symbol.class {
      static {
        Block.ClassSymbol.class = this
      }
      constructor(name) {
        super(name);
        this.name = name;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ClassSymbol", ["name"]]; 
    });
    this.VirtualClassSymbol = function VirtualClassSymbol(name) {
      return globalThis.Object.freeze(new VirtualClassSymbol.class(name));
    };
    (class VirtualClassSymbol extends Block.ClassSymbol.class {
      static {
        Block.VirtualClassSymbol.class = this
      }
      constructor(name) {
        super(name);
        this.name = name;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "VirtualClassSymbol", ["name"]]; 
    });
    this.ConcreteClassSymbol = function ConcreteClassSymbol(name, value, paramsOpt, auxParams) {
      return globalThis.Object.freeze(new ConcreteClassSymbol.class(name, value, paramsOpt, auxParams));
    };
    (class ConcreteClassSymbol extends Block.ClassSymbol.class {
      static {
        Block.ConcreteClassSymbol.class = this
      }
      constructor(name, value, paramsOpt, auxParams) {
        super(name);
        this.name = name;
        this.value = value;
        this.paramsOpt = paramsOpt;
        this.auxParams = auxParams;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ConcreteClassSymbol", ["name", "value", "paramsOpt", "auxParams"]]; 
    });
    this.ModuleSymbol = function ModuleSymbol(name, value) {
      return globalThis.Object.freeze(new ModuleSymbol.class(name, value));
    };
    (class ModuleSymbol extends Block.Symbol.class {
      static {
        Block.ModuleSymbol.class = this
      }
      constructor(name, value) {
        super(name);
        this.name = name;
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ModuleSymbol", ["name", "value"]]; 
    });
    this.NoSymbol = function NoSymbol() {
      return globalThis.Object.freeze(new NoSymbol.class());
    };
    (class NoSymbol extends Block.Symbol.class {
      static {
        Block.NoSymbol.class = this
      }
      constructor() {
        super("$no_symbol$");
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "NoSymbol", []]; 
    });
    this.Arm = function Arm(cse, body) {
      return globalThis.Object.freeze(new Arm.class(cse, body));
    };
    (class Arm {
      static {
        Block.Arm.class = this
      }
      constructor(cse, body) {
        this.cse = cse;
        this.body = body;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Arm", ["cse", "body"]]; 
    });
    this.Arg = function Arg(value) {
      return globalThis.Object.freeze(new Arg.class(value));
    };
    (class Arg {
      static {
        Block.Arg.class = this
      }
      constructor(value) {
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Arg", ["value"]]; 
    });
    (class Case {
      static {
        Block.Case = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Case"]; 
    });
    this.Lit = function Lit(lit) {
      return globalThis.Object.freeze(new Lit.class(lit));
    };
    (class Lit extends Block.Case {
      static {
        Block.Lit.class = this
      }
      constructor(lit) {
        super();
        this.lit = lit;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Lit", ["lit"]]; 
    });
    this.Cls = function Cls(cls, path) {
      return globalThis.Object.freeze(new Cls.class(cls, path));
    };
    (class Cls extends Block.Case {
      static {
        Block.Cls.class = this
      }
      constructor(cls, path) {
        super();
        this.cls = cls;
        this.path = path;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Cls", ["cls", "path"]]; 
    });
    this.Tup = function Tup(len) {
      return globalThis.Object.freeze(new Tup.class(len));
    };
    (class Tup extends Block.Case {
      static {
        Block.Tup.class = this
      }
      constructor(len) {
        super();
        this.len = len;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Tup", ["len"]]; 
    });
    (class Result {
      static {
        Block.Result = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Result"]; 
    });
    this.Call = function Call(_fun, args) {
      return globalThis.Object.freeze(new Call.class(_fun, args));
    };
    (class Call extends Block.Result {
      static {
        Block.Call.class = this
      }
      constructor(_fun, args) {
        super();
        this._fun = _fun;
        this.args = args;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Call", ["_fun", "args"]]; 
    });
    this.Instantiate = function Instantiate(cls, args) {
      return globalThis.Object.freeze(new Instantiate.class(cls, args));
    };
    (class Instantiate extends Block.Result {
      static {
        Block.Instantiate.class = this
      }
      constructor(cls, args) {
        super();
        this.cls = cls;
        this.args = args;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Instantiate", ["cls", "args"]]; 
    });
    this.Tuple = function Tuple(elems) {
      return globalThis.Object.freeze(new Tuple.class(elems));
    };
    (class Tuple extends Block.Result {
      static {
        Block.Tuple.class = this
      }
      constructor(elems) {
        super();
        this.elems = elems;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Tuple", ["elems"]]; 
    });
    (class Path extends Block.Result {
      static {
        Block.Path = this
      }
      constructor() {
        super();
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Path"]; 
    });
    this.Select = function Select(qual, name) {
      return globalThis.Object.freeze(new Select.class(qual, name));
    };
    (class Select extends Block.Path {
      static {
        Block.Select.class = this
      }
      constructor(qual, name) {
        super();
        this.qual = qual;
        this.name = name;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Select", ["qual", "name"]]; 
    });
    this.DynSelect = function DynSelect(qual, fld, arrayIdx) {
      return globalThis.Object.freeze(new DynSelect.class(qual, fld, arrayIdx));
    };
    (class DynSelect extends Block.Path {
      static {
        Block.DynSelect.class = this
      }
      constructor(qual, fld, arrayIdx) {
        super();
        this.qual = qual;
        this.fld = fld;
        this.arrayIdx = arrayIdx;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "DynSelect", ["qual", "fld", "arrayIdx"]]; 
    });
    this.ValueRef = function ValueRef(l) {
      return globalThis.Object.freeze(new ValueRef.class(l));
    };
    (class ValueRef extends Block.Path {
      static {
        Block.ValueRef.class = this
      }
      constructor(l) {
        super();
        this.l = l;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ValueRef", ["l"]]; 
    });
    this.ValueLit = function ValueLit(lit) {
      return globalThis.Object.freeze(new ValueLit.class(lit));
    };
    (class ValueLit extends Block.Path {
      static {
        Block.ValueLit.class = this
      }
      constructor(lit) {
        super();
        this.lit = lit;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ValueLit", ["lit"]]; 
    });
    (class Defn {
      static {
        Block.Defn = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Defn"]; 
    });
    this.ValDefn = function ValDefn(owner, sym, rhs) {
      return globalThis.Object.freeze(new ValDefn.class(owner, sym, rhs));
    };
    (class ValDefn extends Block.Defn {
      static {
        Block.ValDefn.class = this
      }
      constructor(owner, sym, rhs) {
        super();
        this.owner = owner;
        this.sym = sym;
        this.rhs = rhs;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ValDefn", ["owner", "sym", "rhs"]]; 
    });
    this.ClsLikeDefn = function ClsLikeDefn(sym, methods, companion) {
      return globalThis.Object.freeze(new ClsLikeDefn.class(sym, methods, companion));
    };
    (class ClsLikeDefn extends Block.Defn {
      static {
        Block.ClsLikeDefn.class = this
      }
      constructor(sym, methods, companion) {
        super();
        this.sym = sym;
        this.methods = methods;
        this.companion = companion;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ClsLikeDefn", ["sym", "methods", "companion"]]; 
    });
    this.FunDefn = function FunDefn(sym, params, body) {
      return globalThis.Object.freeze(new FunDefn.class(sym, params, body));
    };
    (class FunDefn extends Block.Defn {
      static {
        Block.FunDefn.class = this
      }
      constructor(sym, params, body) {
        super();
        this.sym = sym;
        this.params = params;
        this.body = body;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "FunDefn", ["sym", "params", "body"]]; 
    });
    this.ClsLikeBody = function ClsLikeBody(isym, methods, publicFields) {
      return globalThis.Object.freeze(new ClsLikeBody.class(isym, methods, publicFields));
    };
    (class ClsLikeBody {
      static {
        Block.ClsLikeBody.class = this
      }
      constructor(isym, methods, publicFields) {
        this.isym = isym;
        this.methods = methods;
        this.publicFields = publicFields;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ClsLikeBody", ["isym", "methods", "publicFields"]]; 
    });
    (class Block1 {
      static {
        Block.Block = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Block"]; 
    });
    this.Match = function Match(scrut, arms, dflt, rest) {
      return globalThis.Object.freeze(new Match.class(scrut, arms, dflt, rest));
    };
    (class Match extends Block.Block {
      static {
        Block.Match.class = this
      }
      constructor(scrut, arms, dflt, rest) {
        super();
        this.scrut = scrut;
        this.arms = arms;
        this.dflt = dflt;
        this.rest = rest;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Match", ["scrut", "arms", "dflt", "rest"]]; 
    });
    this.Return = function Return(res, implct) {
      return globalThis.Object.freeze(new Return.class(res, implct));
    };
    (class Return extends Block.Block {
      static {
        Block.Return.class = this
      }
      constructor(res, implct) {
        super();
        this.res = res;
        this.implct = implct;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Return", ["res", "implct"]]; 
    });
    this.Assign = function Assign(lhs, rhs, rest) {
      return globalThis.Object.freeze(new Assign.class(lhs, rhs, rest));
    };
    (class Assign extends Block.Block {
      static {
        Block.Assign.class = this
      }
      constructor(lhs, rhs, rest) {
        super();
        this.lhs = lhs;
        this.rhs = rhs;
        this.rest = rest;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Assign", ["lhs", "rhs", "rest"]]; 
    });
    this.Define = function Define(defn, rest) {
      return globalThis.Object.freeze(new Define.class(defn, rest));
    };
    (class Define extends Block.Block {
      static {
        Block.Define.class = this
      }
      constructor(defn, rest) {
        super();
        this.defn = defn;
        this.rest = rest;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Define", ["defn", "rest"]]; 
    });
    this.Scoped = function Scoped(symbols, rest) {
      return globalThis.Object.freeze(new Scoped.class(symbols, rest));
    };
    (class Scoped extends Block.Block {
      static {
        Block.Scoped.class = this
      }
      constructor(symbols, rest) {
        super();
        this.symbols = symbols;
        this.rest = rest;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Scoped", ["symbols", "rest"]]; 
    });
    this.End = function End() {
      return globalThis.Object.freeze(new End.class());
    };
    (class End extends Block.Block {
      static {
        Block.End.class = this
      }
      constructor() {
        super();
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "End", []]; 
    });
  }
  static isPrimitiveType(sym) {
    let scrut;
    scrut = sym.name;
    switch (scrut) {
      case "Str":
        return true;
      case "Int":
        return true;
      case "Num":
        return true;
      case "Bool":
        return true;
    }
    return false
  } 
  static isPrimitiveTypeOf(sym, l) {
    let scrut, l1, i, n, b, element1$, element0$;
    scrut = globalThis.Object.freeze([
      sym.name,
      l
    ]);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      switch (element0$) {
        case "Str":
          l1 = element1$;
          if (typeof l1 === 'string') {
            return true
          }
          return false;
        case "Int":
          i = element1$;
          if (globalThis.Number.isInteger(i)) {
            return true
          }
          return false;
        case "Num":
          n = element1$;
          if (typeof n === 'number') {
            return true
          }
          return false;
        case "Bool":
          b = element1$;
          if (typeof b === 'boolean') {
            return true
          }
          return false;
      }
      return false
    }
    return false;
  } 
  static concat(b1, b2) {
    let arg$Scoped$0$, arg$Scoped$1$, arg$Define$0$, arg$Define$1$, arg$Assign$0$, arg$Assign$1$, arg$Assign$2$, arg$Match$0$, arg$Match$1$, arg$Match$2$, arg$Match$3$, tmp, tmp1, tmp2, tmp3;
    if (b1 instanceof Block.Match.class) {
      arg$Match$0$ = b1.scrut;
      arg$Match$1$ = b1.arms;
      arg$Match$2$ = b1.dflt;
      arg$Match$3$ = b1.rest;
      tmp = Block.concat(arg$Match$3$, b2);
      return Block.Match(arg$Match$0$, arg$Match$1$, arg$Match$2$, tmp)
    } else if (b1 instanceof Block.Return.class) {
      return b1
    } else if (b1 instanceof Block.Assign.class) {
      arg$Assign$0$ = b1.lhs;
      arg$Assign$1$ = b1.rhs;
      arg$Assign$2$ = b1.rest;
      tmp1 = Block.concat(arg$Assign$2$, b2);
      return Block.Assign(arg$Assign$0$, arg$Assign$1$, tmp1)
    } else if (b1 instanceof Block.Define.class) {
      arg$Define$0$ = b1.defn;
      arg$Define$1$ = b1.rest;
      tmp2 = Block.concat(arg$Define$1$, b2);
      return Block.Define(arg$Define$0$, tmp2)
    } else if (b1 instanceof Block.Scoped.class) {
      arg$Scoped$0$ = b1.symbols;
      arg$Scoped$1$ = b1.rest;
      tmp3 = Block.concat(arg$Scoped$1$, b2);
      return Block.Scoped(arg$Scoped$0$, tmp3)
    } else if (b1 instanceof Block.End.class) {
      return b2
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static indent(s) {
    return s.replaceAll("\n", "\n  ")
  } 
  static showLiteral(l) {
    let tmp, tmp1;
    if (l === undefined) {
      return "undefined"
    } else if (l === null) {
      return "null"
    } else if (typeof l === 'string') {
      tmp = runtime.safeCall(l.toString());
      tmp1 = "\"" + tmp;
      return tmp1 + "\""
    }
    return runtime.safeCall(l.toString());
  } 
  static showSymbol(s) {
    return s.name.replaceAll("$", "_")
  } 
  static showPath(p) {
    let name, qual, arg$ValueLit$0$, arg$ValueRef$0$, arg$DynSelect$0$, arg$DynSelect$1$, arg$DynSelect$2$, arg$Select$0$, arg$Select$1$, arg$ValueRef$0$1, arg$Symbol$0$, arg$ModuleSymbol$0$, arg$ModuleSymbol$1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
    if (p instanceof Block.Select.class) {
      arg$Select$0$ = p.qual;
      arg$Select$1$ = p.name;
      if (arg$Select$0$ instanceof Block.ValueRef.class) {
        arg$ValueRef$0$1 = arg$Select$0$.l;
        if (arg$ValueRef$0$1 instanceof Block.Symbol.class) {
          arg$Symbol$0$ = arg$ValueRef$0$1.name;
          if (arg$Symbol$0$ === "runtime") {
            if (arg$Select$1$ instanceof Block.ModuleSymbol.class) {
              arg$ModuleSymbol$0$ = arg$Select$1$.name;
              arg$ModuleSymbol$1$ = arg$Select$1$.value;
              if (arg$ModuleSymbol$0$ === "Unit") {
                if (arg$ModuleSymbol$1$ instanceof Runtime.Unit.class) {
                  return "()"
                }
                name = arg$Select$1$;
                qual = arg$Select$0$;
              } else {
                name = arg$Select$1$;
                qual = arg$Select$0$;
              }
            } else {
              name = arg$Select$1$;
              qual = arg$Select$0$;
            }
          } else {
            name = arg$Select$1$;
            qual = arg$Select$0$;
          }
        } else {
          name = arg$Select$1$;
          qual = arg$Select$0$;
        }
      } else {
        name = arg$Select$1$;
        qual = arg$Select$0$;
      }
      tmp8 = Block.showPath(qual);
      tmp9 = tmp8 + ".";
      tmp10 = Block.showSymbol(name);
      return tmp9 + tmp10
    } else if (p instanceof Block.DynSelect.class) {
      arg$DynSelect$0$ = p.qual;
      arg$DynSelect$1$ = p.fld;
      arg$DynSelect$2$ = p.arrayIdx;
      switch (arg$DynSelect$2$) {
        case false:
          tmp = Block.showPath(arg$DynSelect$0$);
          tmp1 = tmp + ".(";
          tmp2 = Block.showPath(arg$DynSelect$1$);
          tmp3 = tmp1 + tmp2;
          return tmp3 + ")";
        case true:
          tmp4 = Block.showPath(arg$DynSelect$0$);
          tmp5 = tmp4 + ".[";
          tmp6 = Block.showPath(arg$DynSelect$1$);
          tmp7 = tmp5 + tmp6;
          return tmp7 + "]";
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    } else if (p instanceof Block.ValueRef.class) {
      arg$ValueRef$0$ = p.l;
      return Block.showSymbol(arg$ValueRef$0$)
    } else if (p instanceof Block.ValueLit.class) {
      arg$ValueLit$0$ = p.lit;
      return Block.showLiteral(arg$ValueLit$0$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static showArg(arg) {
    return Block.showPath(arg.value)
  } 
  static showArgs(args) {
    let tmp;
    tmp = runtime.safeCall(args.map(Block.showArg));
    return runtime.safeCall(tmp.join(", "))
  } 
  static showResult(r) {
    let fun_, args, scrut, arg$Tuple$0$, arg$Instantiate$0$, arg$Instantiate$1$, arg$Call$0$, arg$Call$1$, element1$, element0$, arg$ValueRef$0$, arg$Symbol$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16;
    if (r instanceof Block.Path) {
      return Block.showPath(r)
    } else if (r instanceof Block.Call.class) {
      arg$Call$0$ = r._fun;
      arg$Call$1$ = r.args;
      args = arg$Call$1$;
      fun_ = arg$Call$0$;
      if (runtime.Tuple.isArrayLike(args) && args.length === 2) {
        element0$ = runtime.Tuple.get(arg$Call$1$, 0);
        element1$ = runtime.Tuple.get(arg$Call$1$, 1);
        if (fun_ instanceof Block.ValueRef.class) {
          arg$ValueRef$0$ = arg$Call$0$.l;
          if (arg$ValueRef$0$ instanceof Block.Symbol.class) {
            arg$Symbol$0$ = arg$ValueRef$0$.name;
            switch (arg$Symbol$0$) {
              case "+":
                tmp = Block.showArg(element0$);
                tmp1 = tmp + " + ";
                tmp2 = Block.showArg(element1$);
                return tmp1 + tmp2;
              case "-":
                tmp3 = Block.showArg(element0$);
                tmp4 = tmp3 + " - ";
                tmp5 = Block.showArg(element1$);
                return tmp4 + tmp5;
            }
          }
        }
      }
      tmp13 = Block.showPath(fun_);
      tmp14 = tmp13 + "(";
      tmp15 = Block.showArgs(args);
      tmp16 = tmp14 + tmp15;
      return tmp16 + ")"
    } else if (r instanceof Block.Instantiate.class) {
      arg$Instantiate$0$ = r.cls;
      arg$Instantiate$1$ = r.args;
      tmp6 = Block.showPath(arg$Instantiate$0$);
      tmp7 = "new " + tmp6;
      scrut = Predef.nequals(arg$Instantiate$1$.length, 0);
      if (scrut === true) {
        tmp8 = Block.showArgs(arg$Instantiate$1$);
        tmp9 = "(" + tmp8;
        tmp10 = tmp9 + ")";
        return tmp7 + tmp10
      }
      tmp10 = "";
      return tmp7 + "";
    } else if (r instanceof Block.Tuple.class) {
      arg$Tuple$0$ = r.elems;
      tmp11 = Block.showArgs(arg$Tuple$0$);
      tmp12 = "[" + tmp11;
      return tmp12 + "]"
    }
    return "<unknown result>";
  } 
  static showCase(c) {
    let arg$Tup$0$, arg$Cls$0$, arg$Lit$0$, tmp, tmp1, tmp2, tmp3;
    if (c instanceof Block.Lit.class) {
      arg$Lit$0$ = c.lit;
      return Block.showLiteral(arg$Lit$0$)
    } else if (c instanceof Block.Cls.class) {
      arg$Cls$0$ = c.cls;
      return Block.showSymbol(arg$Cls$0$)
    } else if (c instanceof Block.Tup.class) {
      arg$Tup$0$ = c.len;
      tmp = runtime.safeCall(globalThis.Array(arg$Tup$0$));
      tmp1 = runtime.safeCall(tmp.fill("_"));
      tmp2 = runtime.safeCall(tmp1.join(", "));
      tmp3 = "[" + tmp2;
      return tmp3 + "]"
    }
    return "<unknown case>";
  } 
  static showArm(a) {
    let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    tmp = Block.showCase(a.cse);
    tmp1 = tmp + " then";
    scrut = a.body;
    if (scrut instanceof Block.Return.class) {
      tmp2 = " ";
    } else {
      tmp2 = "\n  ";
    }
    tmp3 = tmp1 + tmp2;
    tmp4 = Block.showBlock(a.body);
    tmp5 = Block.indent(tmp4);
    return tmp3 + tmp5
  } 
  static showParams(p) {
    let lambda, tmp, tmp1, tmp2;
    lambda = (undefined, function (_0) {
      return Block.showSymbol(_0)
    });
    tmp = runtime.safeCall(p.map(lambda));
    tmp1 = runtime.safeCall(tmp.join(", "));
    tmp2 = "(" + tmp1;
    return tmp2 + ")"
  } 
  static showParamsOpt(p) {
    let arg$Some$0$;
    if (p instanceof Option.Some.class) {
      arg$Some$0$ = p.value;
      return Block.showParams(arg$Some$0$)
    } else if (p instanceof Option.None.class) {
      return ""
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static showParamList(ps) {
    let tmp;
    tmp = runtime.safeCall(ps.map(Block.showParams));
    return runtime.safeCall(tmp.join(""))
  } 
  static showDefn(d) {
    let body, methods, arg$ValDefn$1$, arg$ValDefn$2$, arg$ClsLikeDefn$0$, arg$ClsLikeDefn$1$, arg$FunDefn$0$, arg$FunDefn$1$, arg$FunDefn$2$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23;
    if (d instanceof Block.FunDefn.class) {
      arg$FunDefn$0$ = d.sym;
      arg$FunDefn$1$ = d.params;
      arg$FunDefn$2$ = d.body;
      body = arg$FunDefn$2$;
      tmp = Block.showSymbol(arg$FunDefn$0$);
      tmp1 = "fun " + tmp;
      tmp2 = Block.showParamList(arg$FunDefn$1$);
      tmp3 = tmp1 + tmp2;
      tmp4 = tmp3 + " =";
      if (body instanceof Block.Return.class) {
        tmp5 = " ";
      } else if (body instanceof Block.End.class) {
        tmp5 = " ";
      } else {
        tmp5 = "\n  ";
      }
      tmp6 = tmp4 + tmp5;
      tmp7 = Block.showBlock(body);
      tmp8 = Block.indent(tmp7);
      return tmp6 + tmp8
    } else if (d instanceof Block.ClsLikeDefn.class) {
      arg$ClsLikeDefn$0$ = d.sym;
      arg$ClsLikeDefn$1$ = d.methods;
      methods = arg$ClsLikeDefn$1$;
      tmp9 = Block.showSymbol(arg$ClsLikeDefn$0$);
      tmp10 = "class " + tmp9;
      tmp11 = Block.showParamsOpt(arg$ClsLikeDefn$0$.paramsOpt);
      tmp12 = tmp10 + tmp11;
      if (runtime.Tuple.isArrayLike(methods) && methods.length === 0) {
        tmp13 = "";
      } else {
        tmp13 = " with\n";
      }
      tmp14 = runtime.safeCall(methods.map(Block.showDefn));
      tmp15 = runtime.safeCall(tmp14.join("\n"));
      tmp16 = tmp13 + tmp15;
      tmp17 = Block.indent(tmp16);
      return tmp12 + tmp17
    } else if (d instanceof Block.ValDefn.class) {
      arg$ValDefn$1$ = d.sym;
      arg$ValDefn$2$ = d.rhs;
      tmp18 = Block.showSymbol(arg$ValDefn$1$);
      tmp19 = "val " + tmp18;
      tmp20 = tmp19 + " = ";
      tmp21 = Block.showPath(arg$ValDefn$2$);
      return tmp20 + tmp21
    }
    tmp22 = runtime.safeCall(d.toString());
    tmp23 = "<unknown defn: " + tmp22;
    return tmp23 + " >";
  } 
  static showBlock(b) {
    let rhs, rest, lhs, rest1, dflt, db, arg$Scoped$0$, arg$Scoped$1$, arg$Match$0$, arg$Match$1$, arg$Match$2$, arg$Match$3$, arg$Return$0$, arg$Define$0$, arg$Define$1$, arg$Assign$0$, arg$Assign$1$, arg$Assign$2$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, arg$Some$0$, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27;
    if (b instanceof Block.Assign.class) {
      arg$Assign$0$ = b.lhs;
      arg$Assign$1$ = b.rhs;
      arg$Assign$2$ = b.rest;
      rest = arg$Assign$2$;
      rhs = arg$Assign$1$;
      lhs = arg$Assign$0$;
      if (lhs instanceof Block.NoSymbol.class) {
        tmp = "";
      } else {
        tmp1 = Block.showSymbol(arg$Assign$0$);
        tmp = tmp1 + " = ";
      }
      tmp2 = Block.showResult(rhs);
      tmp3 = tmp + tmp2;
      tmp4 = Block.showRestBlock(rest);
      return tmp3 + tmp4
    } else if (b instanceof Block.Define.class) {
      arg$Define$0$ = b.defn;
      arg$Define$1$ = b.rest;
      tmp5 = Block.showDefn(arg$Define$0$);
      tmp6 = Block.showRestBlock(arg$Define$1$);
      return tmp5 + tmp6
    } else if (b instanceof Block.Return.class) {
      arg$Return$0$ = b.res;
      return Block.showResult(arg$Return$0$)
    } else if (b instanceof Block.Match.class) {
      arg$Match$0$ = b.scrut;
      arg$Match$1$ = b.arms;
      arg$Match$2$ = b.dflt;
      arg$Match$3$ = b.rest;
      rest1 = arg$Match$3$;
      dflt = arg$Match$2$;
      tmp7 = Block.showPath(arg$Match$0$);
      tmp8 = "if " + tmp7;
      tmp9 = tmp8 + " is";
      tmp10 = runtime.safeCall(arg$Match$1$.map(Block.showArm));
      tmp11 = runtime.safeCall(tmp10.join("\n"));
      tmp12 = "\n" + tmp11;
      tmp13 = Block.indent(tmp12);
      tmp14 = tmp9 + tmp13;
      if (dflt instanceof Option.Some.class) {
        arg$Some$0$ = arg$Match$2$.value;
        db = arg$Some$0$;
        if (db instanceof Block.Return.class) {
          tmp15 = " ";
        } else {
          tmp15 = "\n";
        }
        tmp16 = Block.showBlock(db);
        tmp17 = tmp15 + tmp16;
        tmp18 = Block.indent(tmp17);
        tmp19 = "\nelse" + tmp18;
        tmp20 = Block.indent(tmp19);
      } else {
        tmp20 = "";
      }
      tmp21 = tmp14 + tmp20;
      tmp22 = Block.showRestBlock(rest1);
      return tmp21 + tmp22
    } else if (b instanceof Block.Scoped.class) {
      arg$Scoped$0$ = b.symbols;
      arg$Scoped$1$ = b.rest;
      tmp23 = runtime.safeCall(arg$Scoped$0$.map(Block.showSymbol));
      tmp24 = runtime.safeCall(tmp23.join(", "));
      tmp25 = "let {" + tmp24;
      tmp26 = tmp25 + "}";
      tmp27 = Block.showRestBlock(arg$Scoped$1$);
      return tmp26 + tmp27
    } else if (b instanceof Block.End.class) {
      return "()"
    }
    return "<unknown block>" + b;
  } 
  static showRestBlock(b) {
    let tmp;
    if (b instanceof Block.End.class) {
      return ""
    }
    tmp = Block.showBlock(b);
    return "\n" + tmp;
  } 
  static show(x) {
    if (x instanceof Block.Symbol.class) {
      return Block.showSymbol(x)
    } else if (x instanceof Block.Path) {
      return Block.showPath(x)
    } else if (x instanceof Block.Result) {
      return Block.showResult(x)
    } else if (x instanceof Block.Case) {
      return Block.showCase(x)
    } else if (x instanceof Block.Defn) {
      return Block.showDefn(x)
    } else if (x instanceof Block.Block) {
      return Block.showBlock(x)
    }
    return "<unknown>";
  } 
  static printCode(x) {
    let tmp;
    tmp = Block.show(x);
    return Predef.print(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Block"]; 
});
let Block = Block2; export default Block;
