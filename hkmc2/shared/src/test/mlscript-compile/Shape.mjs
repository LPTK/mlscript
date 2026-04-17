const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./Runtime.mjs";
import Block from "./Block.mjs";
import Option from "./Option.mjs";
let Shape2;
(class Shape {
  static {
    Shape2 = this
  }
  static {
    (class Shape1 {
      static {
        Shape.Shape = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Shape"]; 
    });
    this.Dyn = function Dyn() {
      return globalThis.Object.freeze(new Dyn.class());
    };
    (class Dyn extends Shape.Shape {
      static {
        Shape.Dyn.class = this
      }
      constructor() {
        super();
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Dyn", []]; 
    });
    this.Lit = function Lit(l) {
      return globalThis.Object.freeze(new Lit.class(l));
    };
    (class Lit extends Shape.Shape {
      static {
        Shape.Lit.class = this
      }
      constructor(l) {
        super();
        this.l = l;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Lit", ["l"]]; 
    });
    this.Arr = function Arr(shapes) {
      return globalThis.Object.freeze(new Arr.class(shapes));
    };
    (class Arr extends Shape.Shape {
      static {
        Shape.Arr.class = this
      }
      constructor(shapes) {
        super();
        this.shapes = shapes;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Arr", ["shapes"]]; 
    });
    this.Class = function Class(sym, params) {
      return globalThis.Object.freeze(new Class.class(sym, params));
    };
    (class Class extends Shape.Shape {
      static {
        Shape.Class.class = this
      }
      constructor(sym, params) {
        super();
        this.sym = sym;
        this.params = params;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Class", ["sym", "params"]]; 
    });
  }
  static show(s) {
    let arg$Class$0$, arg$Class$1$, arg$Arr$0$, arg$Lit$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
    if (s instanceof Shape.Dyn.class) {
      return "Dyn"
    } else if (s instanceof Shape.Lit.class) {
      arg$Lit$0$ = s.l;
      tmp = Block.showLiteral(arg$Lit$0$);
      tmp1 = "Lit(" + tmp;
      return tmp1 + ")"
    } else if (s instanceof Shape.Arr.class) {
      arg$Arr$0$ = s.shapes;
      tmp2 = runtime.safeCall(arg$Arr$0$.map(Shape.show));
      tmp3 = runtime.safeCall(tmp2.join(", "));
      tmp4 = "Arr(" + tmp3;
      return tmp4 + ")"
    } else if (s instanceof Shape.Class.class) {
      arg$Class$0$ = s.sym;
      arg$Class$1$ = s.params;
      tmp5 = Block.showSymbol(arg$Class$0$);
      tmp6 = "Class(" + tmp5;
      tmp7 = tmp6 + ", [";
      tmp8 = runtime.safeCall(arg$Class$1$.map(Shape.show));
      tmp9 = runtime.safeCall(tmp8.join(", "));
      tmp10 = tmp7 + tmp9;
      return tmp10 + "])"
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static sel(s1, s2) {
    let scrut, n, scrut1, scrut2, scrut3, n1, n2, n3, element1$, element0$, arg$Lit$0$, arg$Arr$0$, arg$Class$0$, arg$Class$1$, arg$Some$0$, lambda, tmp, tmp1, tmp2;
    scrut = globalThis.Object.freeze([
      s1,
      s2
    ]);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      if (element0$ instanceof Shape.Class.class) {
        arg$Class$0$ = element0$.sym;
        arg$Class$1$ = element0$.params;
        if (element1$ instanceof Shape.Lit.class) {
          arg$Lit$0$ = element1$.l;
          n = arg$Lit$0$;
          if (typeof n === 'string') {
            scrut3 = arg$Class$0$.args;
            if (scrut3 instanceof Option.Some.class) {
              arg$Some$0$ = scrut3.value;
              lambda = (undefined, function (_0) {
                return _0 == n
              });
              scrut1 = runtime.safeCall(arg$Some$0$.find(lambda));
              scrut2 = scrut1 == runtime.Unit;
              if (scrut2 === true) {
                return globalThis.Object.freeze([])
              }
              return globalThis.Object.freeze([
                arg$Class$1$[scrut1]
              ]);
            }
            return globalThis.Object.freeze([]);
          }
          return globalThis.Object.freeze([]);
        }
        return globalThis.Object.freeze([]);
      } else if (element0$ instanceof Shape.Dyn.class) {
        if (element1$ instanceof Shape.Lit.class) {
          arg$Lit$0$ = element1$.l;
          n1 = arg$Lit$0$;
          if (typeof n1 === 'string') {
            tmp = Shape.Dyn();
            return globalThis.Object.freeze([
              tmp
            ])
          }
          n3 = arg$Lit$0$;
          if (globalThis.Number.isInteger(n3)) {
            tmp1 = Shape.Dyn();
            return globalThis.Object.freeze([
              tmp1
            ])
          }
          return globalThis.Object.freeze([]);
        } else if (element1$ instanceof Shape.Dyn.class) {
          tmp2 = Shape.Dyn();
          return globalThis.Object.freeze([
            tmp2
          ])
        }
        return globalThis.Object.freeze([]);
      } else if (element0$ instanceof Shape.Arr.class) {
        arg$Arr$0$ = element0$.shapes;
        if (element1$ instanceof Shape.Lit.class) {
          arg$Lit$0$ = element1$.l;
          n2 = arg$Lit$0$;
          if (globalThis.Number.isInteger(n2)) {
            return globalThis.Object.freeze([
              arg$Arr$0$[arg$Lit$0$]
            ])
          }
          return globalThis.Object.freeze([]);
        } else if (element1$ instanceof Shape.Dyn.class) {
          return arg$Arr$0$
        }
        return globalThis.Object.freeze([]);
      }
      return globalThis.Object.freeze([]);
    }
    return globalThis.Object.freeze([]);
  } 
  static static(s) {
    let l, scrut, arg$Arr$0$, arg$Class$1$, arg$Lit$0$;
    if (s instanceof Shape.Dyn.class) {
      return false
    } else if (s instanceof Shape.Lit.class) {
      arg$Lit$0$ = s.l;
      l = arg$Lit$0$;
      if (typeof l === 'string') {
        scrut = Block.isPrimitiveType(arg$Lit$0$);
        if (scrut === true) {
          return ! true
        }
        return ! false;
      }
      return ! false;
    } else if (s instanceof Shape.Class.class) {
      arg$Class$1$ = s.params;
      return runtime.safeCall(arg$Class$1$.every(Shape.static))
    } else if (s instanceof Shape.Arr.class) {
      arg$Arr$0$ = s.shapes;
      return runtime.safeCall(arg$Arr$0$.every(Shape.static))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static silh(p) {
    let size, sym, scrut, arg$Tup$0$, arg$Cls$0$, arg$Lit$0$, arg$Some$0$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (p instanceof Block.Lit.class) {
      arg$Lit$0$ = p.lit;
      return Shape.Lit(arg$Lit$0$)
    } else if (p instanceof Block.Cls.class) {
      arg$Cls$0$ = p.cls;
      sym = arg$Cls$0$;
      scrut = arg$Cls$0$.args;
      if (scrut instanceof Option.Some.class) {
        arg$Some$0$ = scrut.value;
        tmp = arg$Some$0$;
      } else {
        tmp = 0;
      }
      size = tmp;
      tmp1 = runtime.safeCall(globalThis.Array(size));
      tmp2 = runtime.safeCall(tmp1.fill(Shape.Dyn));
      return Shape.Class(sym, tmp2)
    } else if (p instanceof Block.Tup.class) {
      arg$Tup$0$ = p.len;
      tmp3 = runtime.safeCall(globalThis.Array(arg$Tup$0$));
      tmp4 = runtime.safeCall(tmp3.fill(Shape.Dyn));
      return Shape.Arr(tmp4)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static filter(s, p) {
    let scrut, scrut1, scrut2, scrut3, scrut4, element1$, element0$, arg$Class$0$, arg$Cls$0$, arg$Arr$0$, arg$Tup$0$, arg$Lit$0$, arg$Lit$0$1, tmp;
    scrut = globalThis.Object.freeze([
      s,
      p
    ]);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      if (element0$ instanceof Shape.Lit.class) {
        arg$Lit$0$ = element0$.l;
        if (element1$ instanceof Block.Lit.class) {
          arg$Lit$0$1 = element1$.lit;
          scrut1 = arg$Lit$0$ == arg$Lit$0$1;
          if (scrut1 === true) {
            return globalThis.Object.freeze([
              s
            ])
          }
          return globalThis.Object.freeze([]);
        } else if (element1$ instanceof Block.Cls.class) {
          arg$Cls$0$ = element1$.cls;
          scrut2 = Block.isPrimitiveTypeOf(arg$Cls$0$, arg$Lit$0$);
          if (scrut2 === true) {
            return globalThis.Object.freeze([
              s
            ])
          }
          return globalThis.Object.freeze([]);
        }
        return globalThis.Object.freeze([]);
      } else if (element0$ instanceof Shape.Arr.class) {
        arg$Arr$0$ = element0$.shapes;
        if (element1$ instanceof Block.Tup.class) {
          arg$Tup$0$ = element1$.len;
          scrut3 = arg$Arr$0$.length == arg$Tup$0$;
          if (scrut3 === true) {
            return globalThis.Object.freeze([
              s
            ])
          }
          return globalThis.Object.freeze([]);
        }
        return globalThis.Object.freeze([]);
      } else if (element0$ instanceof Shape.Class.class) {
        arg$Class$0$ = element0$.sym;
        if (element1$ instanceof Block.Cls.class) {
          arg$Cls$0$ = element1$.cls;
          scrut4 = arg$Class$0$.name == arg$Cls$0$.name;
          if (scrut4 === true) {
            return globalThis.Object.freeze([
              s
            ])
          }
          return globalThis.Object.freeze([]);
        }
        return globalThis.Object.freeze([]);
      } else if (element0$ instanceof Shape.Dyn.class) {
        tmp = Shape.silh(p);
        return globalThis.Object.freeze([
          tmp
        ])
      }
      return globalThis.Object.freeze([]);
    }
    return globalThis.Object.freeze([]);
  } 
  static rest(s, p) {
    let scrut, scrut1, scrut2, scrut3, scrut4, element1$, element0$, arg$Class$0$, arg$Cls$0$, arg$Arr$0$, arg$Tup$0$, arg$Lit$0$, arg$Lit$0$1;
    scrut = globalThis.Object.freeze([
      s,
      p
    ]);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      if (element0$ instanceof Shape.Lit.class) {
        arg$Lit$0$ = element0$.l;
        if (element1$ instanceof Block.Lit.class) {
          arg$Lit$0$1 = element1$.lit;
          scrut1 = arg$Lit$0$ == arg$Lit$0$1;
          if (scrut1 === true) {
            return globalThis.Object.freeze([])
          }
          return globalThis.Object.freeze([
            s
          ])
        } else if (element1$ instanceof Block.Cls.class) {
          arg$Cls$0$ = element1$.cls;
          scrut2 = Block.isPrimitiveTypeOf(arg$Cls$0$, arg$Lit$0$);
          if (scrut2 === true) {
            return globalThis.Object.freeze([])
          }
          return globalThis.Object.freeze([
            s
          ])
        }
        return globalThis.Object.freeze([
          s
        ]);
      } else if (element0$ instanceof Shape.Arr.class) {
        arg$Arr$0$ = element0$.shapes;
        if (element1$ instanceof Block.Tup.class) {
          arg$Tup$0$ = element1$.len;
          scrut3 = arg$Arr$0$.length == arg$Tup$0$;
          if (scrut3 === true) {
            return globalThis.Object.freeze([])
          }
          return globalThis.Object.freeze([
            s
          ])
        }
        return globalThis.Object.freeze([
          s
        ]);
      } else if (element0$ instanceof Shape.Class.class) {
        arg$Class$0$ = element0$.sym;
        if (element1$ instanceof Block.Cls.class) {
          arg$Cls$0$ = element1$.cls;
          scrut4 = arg$Class$0$.name == arg$Cls$0$.name;
          if (scrut4 === true) {
            return globalThis.Object.freeze([])
          }
          return globalThis.Object.freeze([
            s
          ])
        }
        return globalThis.Object.freeze([
          s
        ]);
      }
      return globalThis.Object.freeze([
        s
      ]);
    }
    return globalThis.Object.freeze([
      s
    ]);
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Shape"]; 
});
let Shape = Shape2; export default Shape;
