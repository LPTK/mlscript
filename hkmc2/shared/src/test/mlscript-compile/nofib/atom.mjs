const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
let atom1;
(class atom {
  static {
    atom1 = this
  }
  static {
    this.State = function State(position, velocity) {
      return globalThis.Object.freeze(new State.class(position, velocity));
    };
    (class State {
      static {
        atom.State.class = this
      }
      constructor(position, velocity) {
        this.position = position;
        this.velocity = velocity;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "State", ["position", "velocity"]]; 
    });
  }
  static dotPlus(fs, gs) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
    if (fs instanceof NofibPrelude.Nil.class) {
      return gs
    }
    if (gs instanceof NofibPrelude.Nil.class) {
      return fs
    }
    if (fs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = fs.head;
      arg$Cons$1$ = fs.tail;
      if (gs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = gs.head;
        arg$Cons$1$1 = gs.tail;
        tmp = arg$Cons$0$ + arg$Cons$0$1;
        tmp1 = atom.dotPlus(arg$Cons$1$, arg$Cons$1$1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static dotMult(fs, gs) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
    if (fs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = fs.head;
      arg$Cons$1$ = fs.tail;
      if (gs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = gs.head;
        arg$Cons$1$1 = gs.tail;
        tmp = arg$Cons$0$ * arg$Cons$0$1;
        tmp1 = atom.dotMult(arg$Cons$1$, arg$Cons$1$1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  } 
  static scalarMut(c, fs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (fs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (fs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = fs.head;
      arg$Cons$1$ = fs.tail;
      tmp = c * arg$Cons$0$;
      tmp1 = atom.scalarMut(c, arg$Cons$1$);
      return NofibPrelude.Cons(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static testforce(k, ss) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, arg$LzCons$0$, arg$LzCons$1$, arg$State$0$, tmp, tmp1, tmp2, tmp3;
      scrut = NofibPrelude.force(ss);
      if (scrut instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$ = scrut.head;
        arg$LzCons$1$ = scrut.tail;
        if (arg$LzCons$0$ instanceof atom.State.class) {
          arg$State$0$ = arg$LzCons$0$.position;
          tmp = - 1.0;
          tmp1 = atom.scalarMut(tmp, k);
          tmp2 = atom.dotMult(tmp1, arg$State$0$);
          tmp3 = atom.testforce(k, arg$LzCons$1$);
          return NofibPrelude.LzCons(tmp2, tmp3)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return NofibPrelude.lazy(lambda)
  } 
  static show(s) {
    let lscomp, arg$State$0$, tmp;
    lscomp = function lscomp(ls) {
      let arg$Cons$0$, arg$Cons$1$, tmp1, tmp2, tmp3;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        tmp1 = NofibPrelude.stringOfFloat(arg$Cons$0$);
        tmp2 = NofibPrelude.stringConcat(tmp1, "\t");
        tmp3 = lscomp(arg$Cons$1$);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    if (s instanceof atom.State.class) {
      arg$State$0$ = s.position;
      tmp = lscomp(arg$State$0$);
      return NofibPrelude.stringListConcat(tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static propagate(dt, aforce, state) {
    let arg$State$0$, arg$State$1$, tmp, tmp1, tmp2, tmp3;
    if (state instanceof atom.State.class) {
      arg$State$0$ = state.position;
      arg$State$1$ = state.velocity;
      tmp = atom.scalarMut(dt, arg$State$1$);
      tmp1 = atom.dotPlus(arg$State$0$, tmp);
      tmp2 = atom.scalarMut(dt, aforce);
      tmp3 = atom.dotPlus(arg$State$1$, tmp2);
      return atom.State(tmp1, tmp3)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static runExperiment(law, dt, param, init) {
    let lambda;
    lambda = (undefined, function () {
      let stream, lambda1, tmp, tmp1;
      stream = atom.runExperiment(law, dt, param, init);
      lambda1 = (undefined, function (x, y) {
        return atom.propagate(dt, x, y)
      });
      tmp = runtime.safeCall(law(param, stream));
      tmp1 = NofibPrelude.zipWith_lz_lz(lambda1, tmp, stream);
      return NofibPrelude.LzCons(init, tmp1)
    });
    return NofibPrelude.lazy(lambda)
  } 
  static testAtom_nofib(n) {
    let lscomp, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    lscomp = function lscomp(ls) {
      let arg$Cons$0$, arg$Cons$1$, tmp7, tmp8, tmp9;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        tmp7 = atom.show(arg$Cons$0$);
        tmp8 = NofibPrelude.stringConcat(tmp7, "\n");
        tmp9 = lscomp(arg$Cons$1$);
        return NofibPrelude.Cons(tmp8, tmp9)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = NofibPrelude.Cons(1.0, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(1.0, NofibPrelude.Nil);
    tmp2 = NofibPrelude.Cons(0.0, NofibPrelude.Nil);
    tmp3 = atom.State(tmp1, tmp2);
    tmp4 = atom.runExperiment(atom.testforce, 0.02, tmp, tmp3);
    tmp5 = NofibPrelude.take_lz(n, tmp4);
    tmp6 = lscomp(tmp5);
    return NofibPrelude.stringListConcat(tmp6)
  } 
  static main() {
    return atom.testAtom_nofib(20)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "atom"]; 
});
let atom = atom1; export default atom;
