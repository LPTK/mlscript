const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let scc1;
(class scc {
  static {
    scc1 = this
  }
  static dfs(r, vsns, xs) {
    loopLabel: while (true) {
      let ns, vs, x, xs1, scrut, scrut1, vs$_, ns$_, element1$, element0$, arg$Cons$0$, arg$Cons$1$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
      if (runtime.Tuple.isArrayLike(vsns) && vsns.length === 2) {
        element0$ = runtime.Tuple.get(vsns, 0);
        element1$ = runtime.Tuple.get(vsns, 1);
        ns = element1$;
        vs = element0$;
        if (xs instanceof NofibPrelude.Nil.class) {
          return globalThis.Object.freeze([
            vs,
            ns
          ])
        } else if (xs instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = xs.head;
          arg$Cons$1$ = xs.tail;
          xs1 = arg$Cons$1$;
          x = arg$Cons$0$;
          scrut = NofibPrelude.inList(x, vs);
          if (scrut === true) {
            tmp = globalThis.Object.freeze([
              vs,
              ns
            ]);
            vsns = tmp;
            xs = xs1;
            continue loopLabel
          }
          tmp1 = NofibPrelude.Cons(x, vs);
          tmp2 = globalThis.Object.freeze([
            tmp1,
            NofibPrelude.Nil
          ]);
          tmp3 = runtime.safeCall(r(x));
          scrut1 = scc.dfs(r, tmp2, tmp3);
          if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
            element0$1 = runtime.Tuple.get(scrut1, 0);
            element1$1 = runtime.Tuple.get(scrut1, 1);
            ns$_ = element1$1;
            vs$_ = element0$1;
            tmp4 = NofibPrelude.Cons(x, ns$_);
            tmp5 = NofibPrelude.append(tmp4, ns);
            tmp6 = globalThis.Object.freeze([
              vs$_,
              tmp5
            ]);
            vsns = tmp6;
            xs = xs1;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static stronglyConnComp(es, vs) {
    let swap, span_tree, new_range, lambda, tmp, lambda1, tmp1, tmp2, tmp3, tmp4;
    swap = function swap(a) {
      let s, f, element1$, element0$;
      if (runtime.Tuple.isArrayLike(a) && a.length === 2) {
        element0$ = runtime.Tuple.get(a, 0);
        element1$ = runtime.Tuple.get(a, 1);
        s = element1$;
        f = element0$;
        return globalThis.Object.freeze([
          s,
          f
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    new_range = function new_range(xys, w) {
      let x, y, xys1, scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp5;
      if (xys instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (xys instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xys.head;
        arg$Cons$1$ = xys.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          xys1 = arg$Cons$1$;
          y = element1$;
          x = element0$;
          scrut = x == w;
          if (scrut === true) {
            tmp5 = new_range(xys1, w);
            return NofibPrelude.Cons(y, tmp5)
          }
          return new_range(xys1, w);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    span_tree = function span_tree(r, vsns, xs) {
      let ns, vs1, x, xs1, scrut, scrut1, vs$_, ns$_, element1$, element0$, arg$Cons$0$, arg$Cons$1$, element1$1, element0$1, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
      if (runtime.Tuple.isArrayLike(vsns) && vsns.length === 2) {
        element0$ = runtime.Tuple.get(vsns, 0);
        element1$ = runtime.Tuple.get(vsns, 1);
        ns = element1$;
        vs1 = element0$;
        if (xs instanceof NofibPrelude.Nil.class) {
          return globalThis.Object.freeze([
            vs1,
            ns
          ])
        } else if (xs instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = xs.head;
          arg$Cons$1$ = xs.tail;
          xs1 = arg$Cons$1$;
          x = arg$Cons$0$;
          scrut = NofibPrelude.inList(x, vs1);
          if (scrut === true) {
            tmp5 = globalThis.Object.freeze([
              vs1,
              ns
            ]);
            return span_tree(r, tmp5, xs1)
          }
          tmp6 = NofibPrelude.Cons(x, vs1);
          tmp7 = globalThis.Object.freeze([
            tmp6,
            NofibPrelude.Nil
          ]);
          tmp8 = runtime.safeCall(r(x));
          scrut1 = scc.dfs(r, tmp7, tmp8);
          if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
            element0$1 = runtime.Tuple.get(scrut1, 0);
            element1$1 = runtime.Tuple.get(scrut1, 1);
            ns$_ = element1$1;
            vs$_ = element0$1;
            tmp9 = NofibPrelude.Cons(x, ns$_);
            tmp10 = NofibPrelude.Cons(tmp9, ns);
            tmp11 = globalThis.Object.freeze([
              vs$_,
              tmp10
            ]);
            return span_tree(r, tmp11, xs1)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    lambda = (undefined, function (x) {
      let tmp5;
      tmp5 = NofibPrelude.map(swap, es);
      return new_range(tmp5, x)
    });
    tmp = globalThis.Object.freeze([
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ]);
    lambda1 = (undefined, function (x) {
      return new_range(es, x)
    });
    tmp1 = globalThis.Object.freeze([
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ]);
    tmp2 = scc.dfs(lambda1, tmp1, vs);
    tmp3 = NofibPrelude.snd(tmp2);
    tmp4 = span_tree(lambda, tmp, tmp3);
    return NofibPrelude.snd(tmp4)
  } 
  static testScc_nofib(d) {
    let a, b, c, d1, f, g, h, vertices, edges, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24;
    a = 1;
    b = 2;
    c = 3;
    d1 = 4;
    f = 5;
    g = 6;
    h = 7;
    tmp = NofibPrelude.Cons(h, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(g, tmp);
    tmp2 = NofibPrelude.Cons(f, tmp1);
    tmp3 = NofibPrelude.Cons(d1, tmp2);
    tmp4 = NofibPrelude.Cons(c, tmp3);
    tmp5 = NofibPrelude.Cons(b, tmp4);
    vertices = NofibPrelude.Cons(a, tmp5);
    tmp6 = globalThis.Object.freeze([
      b,
      a
    ]);
    tmp7 = globalThis.Object.freeze([
      c,
      b
    ]);
    tmp8 = globalThis.Object.freeze([
      c,
      d1
    ]);
    tmp9 = globalThis.Object.freeze([
      c,
      h
    ]);
    tmp10 = globalThis.Object.freeze([
      d1,
      c
    ]);
    tmp11 = globalThis.Object.freeze([
      f,
      a
    ]);
    tmp12 = globalThis.Object.freeze([
      f,
      g
    ]);
    tmp13 = globalThis.Object.freeze([
      f,
      h
    ]);
    tmp14 = globalThis.Object.freeze([
      g,
      f
    ]);
    tmp15 = globalThis.Object.freeze([
      h,
      g
    ]);
    tmp16 = NofibPrelude.Cons(tmp15, NofibPrelude.Nil);
    tmp17 = NofibPrelude.Cons(tmp14, tmp16);
    tmp18 = NofibPrelude.Cons(tmp13, tmp17);
    tmp19 = NofibPrelude.Cons(tmp12, tmp18);
    tmp20 = NofibPrelude.Cons(tmp11, tmp19);
    tmp21 = NofibPrelude.Cons(tmp10, tmp20);
    tmp22 = NofibPrelude.Cons(tmp9, tmp21);
    tmp23 = NofibPrelude.Cons(tmp8, tmp22);
    tmp24 = NofibPrelude.Cons(tmp7, tmp23);
    edges = NofibPrelude.Cons(tmp6, tmp24);
    return scc.stronglyConnComp(edges, vertices)
  } 
  static main() {
    let tmp;
    tmp = scc.testScc_nofib(0);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "scc"]; 
});
let scc = scc1; export default scc;
