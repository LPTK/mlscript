const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let life1;
(class life {
  static {
    life1 = this
  }
  static {
    let lambda, tmp, lambda1, tmp1, lambda2, tmp2, lambda3, tmp3, lambda4, tmp4, lambda5, tmp5, lambda6, tmp6, lambda7, tmp7, lambda8, tmp8, lambda9, tmp9, lambda10, tmp10, lambda11, tmp11, lambda12, tmp12, lambda13, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56;
    lambda = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp = NofibPrelude.lazy(lambda);
    lambda1 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp1 = NofibPrelude.lazy(lambda1);
    lambda2 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp2 = NofibPrelude.lazy(lambda2);
    lambda3 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp3 = NofibPrelude.lazy(lambda3);
    lambda4 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp4 = NofibPrelude.lazy(lambda4);
    lambda5 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp5 = NofibPrelude.lazy(lambda5);
    lambda6 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp6 = NofibPrelude.lazy(lambda6);
    lambda7 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp7 = NofibPrelude.lazy(lambda7);
    lambda8 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp8 = NofibPrelude.lazy(lambda8);
    lambda9 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp9 = NofibPrelude.lazy(lambda9);
    lambda10 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp10 = NofibPrelude.lazy(lambda10);
    lambda11 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp11 = NofibPrelude.lazy(lambda11);
    lambda12 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp12 = NofibPrelude.lazy(lambda12);
    lambda13 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp13 = NofibPrelude.lazy(lambda13);
    tmp14 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp15 = NofibPrelude.Cons(1, tmp14);
    tmp16 = NofibPrelude.Cons(1, tmp15);
    tmp17 = NofibPrelude.Cons(1, tmp16);
    tmp18 = NofibPrelude.Cons(1, tmp17);
    tmp19 = NofibPrelude.Cons(1, tmp18);
    tmp20 = NofibPrelude.Cons(0, tmp19);
    tmp21 = NofibPrelude.Cons(1, tmp20);
    tmp22 = NofibPrelude.Cons(1, tmp21);
    tmp23 = NofibPrelude.Cons(1, tmp22);
    tmp24 = NofibPrelude.Cons(1, tmp23);
    tmp25 = NofibPrelude.Cons(1, tmp24);
    tmp26 = NofibPrelude.Cons(0, tmp25);
    tmp27 = NofibPrelude.Cons(1, tmp26);
    tmp28 = NofibPrelude.Cons(1, tmp27);
    tmp29 = NofibPrelude.Cons(1, tmp28);
    tmp30 = NofibPrelude.Cons(1, tmp29);
    tmp31 = NofibPrelude.Cons(1, tmp30);
    tmp32 = NofibPrelude.Cons(0, tmp31);
    tmp33 = NofibPrelude.Cons(1, tmp32);
    tmp34 = NofibPrelude.Cons(1, tmp33);
    tmp35 = NofibPrelude.Cons(1, tmp34);
    tmp36 = NofibPrelude.Cons(1, tmp35);
    tmp37 = NofibPrelude.Cons(1, tmp36);
    tmp38 = NofibPrelude.Cons(0, tmp37);
    tmp39 = NofibPrelude.Cons(0, tmp38);
    tmp40 = NofibPrelude.Cons(0, tmp39);
    tmp41 = life.lzfy(tmp40);
    tmp42 = NofibPrelude.Cons(tmp41, NofibPrelude.Nil);
    tmp43 = NofibPrelude.Cons(tmp13, tmp42);
    tmp44 = NofibPrelude.Cons(tmp12, tmp43);
    tmp45 = NofibPrelude.Cons(tmp11, tmp44);
    tmp46 = NofibPrelude.Cons(tmp10, tmp45);
    tmp47 = NofibPrelude.Cons(tmp9, tmp46);
    tmp48 = NofibPrelude.Cons(tmp8, tmp47);
    tmp49 = NofibPrelude.Cons(tmp7, tmp48);
    tmp50 = NofibPrelude.Cons(tmp6, tmp49);
    tmp51 = NofibPrelude.Cons(tmp5, tmp50);
    tmp52 = NofibPrelude.Cons(tmp4, tmp51);
    tmp53 = NofibPrelude.Cons(tmp3, tmp52);
    tmp54 = NofibPrelude.Cons(tmp2, tmp53);
    tmp55 = NofibPrelude.Cons(tmp1, tmp54);
    tmp56 = NofibPrelude.Cons(tmp, tmp55);
    this.start = tmp56;
  }
  static last(a_t) {
    let go, t, a, arg$Cons$0$, arg$Cons$1$;
    go = function go(h, t1) {
      let t2, head, arg$Cons$0$1, arg$Cons$1$1;
      if (t1 instanceof NofibPrelude.Nil.class) {
        return h
      } else if (t1 instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = t1.head;
        arg$Cons$1$1 = t1.tail;
        t2 = arg$Cons$1$1;
        head = arg$Cons$0$1;
        return go(head, t2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    if (a_t instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = a_t.head;
      arg$Cons$1$ = a_t.tail;
      t = arg$Cons$1$;
      a = arg$Cons$0$;
      return go(a, t)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static copy_lz(n, x) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, tmp, tmp1;
      scrut = n === 0;
      if (scrut === true) {
        return NofibPrelude.LzNil
      }
      tmp = n - 1;
      tmp1 = life.copy_lz(tmp, x);
      return NofibPrelude.LzCons(x, tmp1);
    });
    return NofibPrelude.lazy(lambda)
  } 
  static append_lz_lz(xs, ys) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, t, h, arg$LzCons$0$, arg$LzCons$1$, tmp;
      scrut = NofibPrelude.force(xs);
      if (scrut instanceof NofibPrelude.LzNil.class) {
        return NofibPrelude.force(ys)
      } else if (scrut instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$ = scrut.head;
        arg$LzCons$1$ = scrut.tail;
        t = arg$LzCons$1$;
        h = arg$LzCons$0$;
        tmp = life.append_lz_lz(t, ys);
        return NofibPrelude.LzCons(h, tmp)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return NofibPrelude.lazy(lambda)
  } 
  static init(ls) {
    let t, a, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      }
      t = arg$Cons$1$;
      a = arg$Cons$0$;
      tmp = life.init(t);
      return NofibPrelude.Cons(a, tmp);
    }
    throw runtime.safeCall(globalThis.Error(ls));
  } 
  static zipWith3(f, xs, ys, zs) {
    let hx, tx, hy, ty, tz, hz, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tx = arg$Cons$1$;
      hx = arg$Cons$0$;
      if (ys instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = ys.head;
        arg$Cons$1$1 = ys.tail;
        ty = arg$Cons$1$1;
        hy = arg$Cons$0$1;
        if (zs instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$2 = zs.head;
          arg$Cons$1$2 = zs.tail;
          tz = arg$Cons$1$2;
          hz = arg$Cons$0$2;
          tmp = runtime.safeCall(f(hx, hy, hz));
          tmp1 = life.zipWith3(f, tx, ty, tz);
          return NofibPrelude.Cons(tmp, tmp1)
        }
        return NofibPrelude.Nil;
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  } 
  static zip3(xs, ys, zs) {
    let hx, tx, hy, ty, tz, hz, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tx = arg$Cons$1$;
      hx = arg$Cons$0$;
      if (ys instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = ys.head;
        arg$Cons$1$1 = ys.tail;
        ty = arg$Cons$1$1;
        hy = arg$Cons$0$1;
        if (zs instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$2 = zs.head;
          arg$Cons$1$2 = zs.tail;
          tz = arg$Cons$1$2;
          hz = arg$Cons$0$2;
          tmp = globalThis.Object.freeze([
            hx,
            hy,
            hz
          ]);
          tmp1 = life.zip3(tx, ty, tz);
          return NofibPrelude.Cons(tmp, tmp1)
        }
        return NofibPrelude.Nil;
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  } 
  static lzfy(ls) {
    let lambda;
    lambda = (undefined, function () {
      let t, a, arg$Cons$0$, arg$Cons$1$, tmp;
      if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        t = arg$Cons$1$;
        a = arg$Cons$0$;
        tmp = life.lzfy(t);
        return NofibPrelude.LzCons(a, tmp)
      }
      return NofibPrelude.LzNil;
    });
    return NofibPrelude.lazy(lambda)
  } 
  static elt(a_b_c, d_e_f, g_h_i) {
    let a, b, c, e, f, d, i, g, h, tot, scrut, scrut1, element2$, element1$, element0$, element2$1, element1$1, element0$1, element2$2, element1$2, element0$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (runtime.Tuple.isArrayLike(a_b_c) && a_b_c.length === 3) {
      element0$ = runtime.Tuple.get(a_b_c, 0);
      element1$ = runtime.Tuple.get(a_b_c, 1);
      element2$ = runtime.Tuple.get(a_b_c, 2);
      c = element2$;
      b = element1$;
      a = element0$;
      if (runtime.Tuple.isArrayLike(d_e_f) && d_e_f.length === 3) {
        element0$1 = runtime.Tuple.get(d_e_f, 0);
        element1$1 = runtime.Tuple.get(d_e_f, 1);
        element2$1 = runtime.Tuple.get(d_e_f, 2);
        f = element2$1;
        e = element1$1;
        d = element0$1;
        if (runtime.Tuple.isArrayLike(g_h_i) && g_h_i.length === 3) {
          element0$2 = runtime.Tuple.get(g_h_i, 0);
          element1$2 = runtime.Tuple.get(g_h_i, 1);
          element2$2 = runtime.Tuple.get(g_h_i, 2);
          i = element2$2;
          h = element1$2;
          g = element0$2;
          tmp = a + b;
          tmp1 = tmp + c;
          tmp2 = tmp1 + d;
          tmp3 = tmp2 + f;
          tmp4 = tmp3 + g;
          tmp5 = tmp4 + h;
          tot = tmp5 + i;
          tmp6 = tot < 2;
          if (tmp6 === false) {
            tmp7 = tot > 3;
          } else {
            tmp7 = true;
          }
          scrut = tmp7;
          if (scrut === true) {
            return 0
          }
          scrut1 = tot === 3;
          if (scrut1 === true) {
            return 1
          }
          return e;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static shiftr(x, xs) {
    let tmp;
    tmp = life.init(xs);
    return NofibPrelude.Cons(x, tmp)
  } 
  static shiftl(x, xs) {
    let tmp, tmp1;
    tmp = life.init(xs);
    tmp1 = NofibPrelude.Cons(x, NofibPrelude.Nil);
    return NofibPrelude.append(tmp, tmp1)
  } 
  static shift(x, xs) {
    let tmp, tmp1;
    tmp = life.shiftr(x, xs);
    tmp1 = life.shiftl(x, xs);
    return life.zip3(tmp, xs, tmp1)
  } 
  static row(last_this_next) {
    let last, next, this_, element2$, element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(last_this_next) && last_this_next.length === 3) {
      element0$ = runtime.Tuple.get(last_this_next, 0);
      element1$ = runtime.Tuple.get(last_this_next, 1);
      element2$ = runtime.Tuple.get(last_this_next, 2);
      next = element2$;
      this_ = element1$;
      last = element0$;
      tmp = life.shift(0, last);
      tmp1 = life.shift(0, this_);
      tmp2 = life.shift(0, next);
      return life.zipWith3(life.elt, tmp, tmp1, tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static gen(n, board) {
    let tmp, tmp1;
    tmp = NofibPrelude.replicate(n, 0);
    tmp1 = life.shift(tmp, board);
    return NofibPrelude.map(life.row, tmp1)
  } 
  static star(x) {
    let scrut, scrut1;
    scrut = x === 0;
    if (scrut === true) {
      return NofibPrelude.nofibStringToList("  ")
    }
    scrut1 = x === 1;
    if (scrut1 === true) {
      return NofibPrelude.nofibStringToList(" o")
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static glue(s, xs, ys) {
    let tmp;
    tmp = NofibPrelude.append(s, ys);
    return NofibPrelude.append(xs, tmp)
  } 
  static limit(ls) {
    let scrut, x, ys, xs, y, scrut1, scrut2, arg$LzCons$0$, arg$LzCons$1$, arg$LzCons$0$1, arg$LzCons$1$1, lambda, tmp, tmp1;
    scrut = NofibPrelude.force(ls);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      arg$LzCons$0$ = scrut.head;
      arg$LzCons$1$ = scrut.tail;
      ys = arg$LzCons$1$;
      x = arg$LzCons$0$;
      scrut2 = NofibPrelude.force(ys);
      if (scrut2 instanceof NofibPrelude.LzCons.class) {
        arg$LzCons$0$1 = scrut2.head;
        arg$LzCons$1$1 = scrut2.tail;
        xs = arg$LzCons$1$1;
        y = arg$LzCons$0$1;
        scrut1 = NofibPrelude.listEqBy(NofibPrelude.listEq, x, y);
        if (scrut1 === true) {
          return NofibPrelude.Cons(x, NofibPrelude.Nil)
        }
        lambda = (undefined, function () {
          return NofibPrelude.LzCons(y, xs)
        });
        tmp = NofibPrelude.lazy(lambda);
        tmp1 = life.limit(tmp);
        return NofibPrelude.Cons(x, tmp1);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static disp(gen_xss) {
    let genn, xss, element1$, element0$, lambda;
    if (runtime.Tuple.isArrayLike(gen_xss) && gen_xss.length === 2) {
      element0$ = runtime.Tuple.get(gen_xss, 0);
      element1$ = runtime.Tuple.get(gen_xss, 1);
      xss = element1$;
      genn = element0$;
      lambda = (undefined, function () {
        let tmp, lambda1, lambda2, tmp1, tmp2, tmp3;
        tmp = NofibPrelude.nofibStringToList("nn");
        lambda1 = (undefined, function (a, b) {
          let tmp4;
          tmp4 = NofibPrelude.Cons("n", NofibPrelude.Nil);
          return life.glue(tmp4, a, b)
        });
        lambda2 = (undefined, function (x) {
          let tmp4;
          tmp4 = NofibPrelude.map(life.star, x);
          return NofibPrelude.concat(tmp4)
        });
        tmp1 = NofibPrelude.map(lambda2, xss);
        tmp2 = NofibPrelude.foldr(lambda1, NofibPrelude.Nil, tmp1);
        tmp3 = NofibPrelude.append(tmp, tmp2);
        return NofibPrelude.append(genn, tmp3)
      });
      return NofibPrelude.lazy(lambda)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static generations(sz) {
    let lambda, tmp, tmp1, lambda1, lambda2, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    lambda = (undefined, function (i) {
      let tmp10;
      tmp10 = NofibPrelude.stringOfInt(i);
      return NofibPrelude.nofibStringToList(tmp10)
    });
    tmp = NofibPrelude.enumFrom(0);
    tmp1 = NofibPrelude.map_lz(lambda, tmp);
    lambda1 = (undefined, function (b) {
      return life.gen(sz, b)
    });
    lambda2 = (undefined, function (l) {
      let tmp10, tmp11;
      tmp10 = life.copy_lz(sz, 0);
      tmp11 = life.append_lz_lz(l, tmp10);
      return NofibPrelude.take_lz(sz, tmp11)
    });
    tmp2 = life.copy_lz(sz, 0);
    tmp3 = life.copy_lz(sz, tmp2);
    tmp4 = NofibPrelude.append_nl_lz(life.start, tmp3);
    tmp5 = NofibPrelude.map_lz(lambda2, tmp4);
    tmp6 = NofibPrelude.take_lz(sz, tmp5);
    tmp7 = NofibPrelude.iterate(lambda1, tmp6);
    tmp8 = life.limit(tmp7);
    tmp9 = NofibPrelude.zip_lz_nl(tmp1, tmp8);
    return NofibPrelude.map(life.disp, tmp9)
  } 
  static testLife_nofib(n) {
    let tmp, tmp1, tmp2;
    tmp = life.generations(n);
    tmp1 = life.last(tmp);
    tmp2 = NofibPrelude.force(tmp1);
    return NofibPrelude.listLen(tmp2)
  } 
  static main() {
    return life.testLife_nofib(15)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "life"]; 
});
let life = life1; export default life;
