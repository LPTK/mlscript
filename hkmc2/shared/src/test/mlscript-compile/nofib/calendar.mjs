const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let calendar1;
(class calendar {
  static {
    calendar1 = this
  }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23;
    tmp = NofibPrelude.nofibStringToList("January");
    tmp1 = NofibPrelude.nofibStringToList("February");
    tmp2 = NofibPrelude.nofibStringToList("March");
    tmp3 = NofibPrelude.nofibStringToList("April");
    tmp4 = NofibPrelude.nofibStringToList("May");
    tmp5 = NofibPrelude.nofibStringToList("June");
    tmp6 = NofibPrelude.nofibStringToList("July");
    tmp7 = NofibPrelude.nofibStringToList("August");
    tmp8 = NofibPrelude.nofibStringToList("September");
    tmp9 = NofibPrelude.nofibStringToList("October");
    tmp10 = NofibPrelude.nofibStringToList("November");
    tmp11 = NofibPrelude.nofibStringToList("December");
    tmp12 = NofibPrelude.Cons(tmp11, NofibPrelude.Nil);
    tmp13 = NofibPrelude.Cons(tmp10, tmp12);
    tmp14 = NofibPrelude.Cons(tmp9, tmp13);
    tmp15 = NofibPrelude.Cons(tmp8, tmp14);
    tmp16 = NofibPrelude.Cons(tmp7, tmp15);
    tmp17 = NofibPrelude.Cons(tmp6, tmp16);
    tmp18 = NofibPrelude.Cons(tmp5, tmp17);
    tmp19 = NofibPrelude.Cons(tmp4, tmp18);
    tmp20 = NofibPrelude.Cons(tmp3, tmp19);
    tmp21 = NofibPrelude.Cons(tmp2, tmp20);
    tmp22 = NofibPrelude.Cons(tmp1, tmp21);
    tmp23 = NofibPrelude.Cons(tmp, tmp22);
    this.monthNames = tmp23;
  }
  static unlines(ls) {
    let lambda, tmp;
    lambda = (undefined, function (x) {
      let tmp1;
      tmp1 = NofibPrelude.Cons("\n", NofibPrelude.Nil);
      return NofibPrelude.append(x, tmp1)
    });
    tmp = NofibPrelude.map(lambda, ls);
    return NofibPrelude.concat(tmp)
  } 
  static height(p) {
    return NofibPrelude.listLen(p)
  } 
  static width(p) {
    let tmp;
    tmp = NofibPrelude.head(p);
    return NofibPrelude.listLen(tmp)
  } 
  static stack(ls) {
    let lambda;
    lambda = (undefined, function (a, b) {
      return NofibPrelude.append(a, b)
    });
    return NofibPrelude.foldr1(lambda, ls)
  } 
  static spread(ls) {
    let lambda;
    lambda = (undefined, function (a, b) {
      let lambda1;
      lambda1 = (undefined, function (a1, b1) {
        return NofibPrelude.append(a1, b1)
      });
      return NofibPrelude.zipWith(lambda1, a, b)
    });
    return NofibPrelude.foldr1(lambda, ls)
  } 
  static emptyPic(hw) {
    let element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(hw) && hw.length === 2) {
      element0$ = runtime.Tuple.get(hw, 0);
      element1$ = runtime.Tuple.get(hw, 1);
      tmp = NofibPrelude.replicate(element1$, " ");
      return NofibPrelude.replicate(element0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static groop(n, xs) {
    let tmp, tmp1, tmp2;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = calendar.groop(n, tmp1);
    return NofibPrelude.Cons(tmp, tmp2);
  } 
  static block(n, t) {
    let tmp, tmp1;
    tmp = calendar.groop(n, t);
    tmp1 = NofibPrelude.map(calendar.spread, tmp);
    return calendar.stack(tmp1)
  } 
  static blockT(n, t) {
    let tmp, tmp1;
    tmp = calendar.groop(n, t);
    tmp1 = NofibPrelude.map(calendar.stack, tmp);
    return calendar.stack(tmp1)
  } 
  static lframe(mn, p) {
    let h, w, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    if (runtime.Tuple.isArrayLike(mn) && mn.length === 2) {
      element0$ = runtime.Tuple.get(mn, 0);
      element1$ = runtime.Tuple.get(mn, 1);
      h = calendar.height(p);
      w = calendar.width(p);
      tmp = element1$ - w;
      tmp1 = globalThis.Object.freeze([
        h,
        tmp
      ]);
      tmp2 = calendar.emptyPic(tmp1);
      tmp3 = NofibPrelude.zipWith(NofibPrelude.append, p, tmp2);
      tmp4 = element0$ - h;
      tmp5 = globalThis.Object.freeze([
        tmp4,
        element1$
      ]);
      tmp6 = calendar.emptyPic(tmp5);
      return NofibPrelude.append(tmp3, tmp6)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static leap(year) {
    let scrut, tmp, tmp1, tmp2;
    tmp = NofibPrelude.intMod(year, 100);
    scrut = tmp == 0;
    if (scrut === true) {
      tmp1 = NofibPrelude.intMod(year, 400);
      return tmp1 == 0
    }
    tmp2 = NofibPrelude.intMod(year, 4);
    return tmp2 == 0;
  } 
  static monthLengths(year) {
    let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    scrut = calendar.leap(year);
    if (scrut === true) {
      tmp = 29;
    } else {
      tmp = 28;
    }
    tmp1 = NofibPrelude.Cons(31, NofibPrelude.Nil);
    tmp2 = NofibPrelude.Cons(30, tmp1);
    tmp3 = NofibPrelude.Cons(31, tmp2);
    tmp4 = NofibPrelude.Cons(30, tmp3);
    tmp5 = NofibPrelude.Cons(31, tmp4);
    tmp6 = NofibPrelude.Cons(31, tmp5);
    tmp7 = NofibPrelude.Cons(30, tmp6);
    tmp8 = NofibPrelude.Cons(31, tmp7);
    tmp9 = NofibPrelude.Cons(30, tmp8);
    tmp10 = NofibPrelude.Cons(31, tmp9);
    tmp11 = NofibPrelude.Cons(tmp, tmp10);
    return NofibPrelude.Cons(31, tmp11)
  } 
  static jan1st(year) {
    let last, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    last = year - 1;
    tmp = NofibPrelude.intDiv(last, 4);
    tmp1 = year + tmp;
    tmp2 = NofibPrelude.intDiv(last, 100);
    tmp3 = tmp1 - tmp2;
    tmp4 = NofibPrelude.intDiv(last, 400);
    tmp5 = tmp3 + tmp4;
    return NofibPrelude.intMod(tmp5, 7)
  } 
  static firstDays(year) {
    let lambda, lambda1, tmp, tmp1, tmp2, tmp3;
    lambda = (undefined, function (x) {
      return NofibPrelude.intMod(x, 7)
    });
    lambda1 = (undefined, function (a, b) {
      return a + b
    });
    tmp = calendar.jan1st(year);
    tmp1 = calendar.monthLengths(year);
    tmp2 = NofibPrelude.scanl(lambda1, tmp, tmp1);
    tmp3 = NofibPrelude.map(lambda, tmp2);
    return NofibPrelude.take(12, tmp3)
  } 
  static space(n) {
    return NofibPrelude.replicate(n, " ")
  } 
  static ljustify(n, s) {
    let tmp, tmp1, tmp2;
    tmp = NofibPrelude.listLen(s);
    tmp1 = n - tmp;
    tmp2 = calendar.space(tmp1);
    return NofibPrelude.append(s, tmp2)
  } 
  static rjustify(n, s) {
    let tmp, tmp1, tmp2;
    tmp = NofibPrelude.listLen(s);
    tmp1 = n - tmp;
    tmp2 = calendar.space(tmp1);
    return NofibPrelude.append(tmp2, s)
  } 
  static date(ml, d) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    tmp = d < 1;
    if (tmp === false) {
      tmp1 = ml < d;
    } else {
      tmp1 = true;
    }
    if (tmp1 === true) {
      tmp2 = NofibPrelude.nofibStringToList("   ");
      return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
    }
    tmp3 = NofibPrelude.stringOfInt(d);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = calendar.rjustify(3, tmp4);
    return NofibPrelude.Cons(tmp5, NofibPrelude.Nil);
  } 
  static dates(fd, ml) {
    let lambda, tmp, tmp1, tmp2;
    lambda = (undefined, function (d) {
      return calendar.date(ml, d)
    });
    tmp = 1 - fd;
    tmp1 = 42 - fd;
    tmp2 = NofibPrelude.enumFromTo(tmp, tmp1);
    return NofibPrelude.map(lambda, tmp2)
  } 
  static cjustify(n, s) {
    let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4;
    tmp = NofibPrelude.listLen(s);
    m = n - tmp;
    halfm = NofibPrelude.intDiv(m, 2);
    tmp1 = calendar.space(halfm);
    tmp2 = m - halfm;
    tmp3 = calendar.space(tmp2);
    tmp4 = NofibPrelude.append(s, tmp3);
    return NofibPrelude.append(tmp1, tmp4)
  } 
  static cal(year) {
    let side, end, daynames, tmp, tmp1, tmp2, tmp3, inlinedVal, inlinedVal1, lambda, tmp4, inlinedVal2, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    tmp = globalThis.Object.freeze([
      8,
      2
    ]);
    side = calendar.emptyPic(tmp);
    tmp1 = globalThis.Object.freeze([
      1,
      25
    ]);
    end = calendar.emptyPic(tmp1);
    tmp2 = NofibPrelude.nofibStringToList(" Su Mo Tu We Th Fr Sa");
    daynames = NofibPrelude.Cons(tmp2, NofibPrelude.Nil);
    tmp7 = NofibPrelude.stringOfInt(year);
    tmp8 = NofibPrelude.nofibStringToList(tmp7);
    tmp9 = calendar.cjustify(75, tmp8);
    tmp10 = globalThis.Object.freeze([
      1,
      75
    ]);
    tmp11 = calendar.emptyPic(tmp10);
    inlinedVal = NofibPrelude.Cons(tmp9, tmp11);
    lambda = (undefined, function (x) {
      let inlinedVal3, inlinedVal4, element2$, element1$, element0$, tmp12, tmp13;
      if (runtime.Tuple.isArrayLike(x) && x.length === 3) {
        let inlinedVal5, inlinedVal6, tmp14, inlinedVal7, tmp15;
        element0$ = runtime.Tuple.get(x, 0);
        element1$ = runtime.Tuple.get(x, 1);
        element2$ = runtime.Tuple.get(x, 2);
        tmp14 = calendar.cjustify(21, element0$);
        inlinedVal5 = NofibPrelude.Cons(tmp14, NofibPrelude.Nil);
        tmp15 = calendar.dates(element1$, element2$);
        inlinedVal7 = calendar.block(7, tmp15);
        inlinedVal6 = NofibPrelude.append(daynames, inlinedVal7);
        inlinedVal3 = NofibPrelude.append(inlinedVal5, inlinedVal6);
        tmp12 = NofibPrelude.zipWith(NofibPrelude.append, side, inlinedVal3);
        tmp13 = NofibPrelude.zipWith(NofibPrelude.append, tmp12, side);
        inlinedVal4 = NofibPrelude.append(tmp13, end);
        return inlinedVal4
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    tmp5 = calendar.firstDays(year);
    tmp6 = calendar.monthLengths(year);
    inlinedVal2 = NofibPrelude.zip3(calendar.monthNames, tmp5, tmp6);
    tmp4 = NofibPrelude.map(lambda, inlinedVal2);
    inlinedVal1 = calendar.block(3, tmp4);
    tmp3 = NofibPrelude.append(inlinedVal, inlinedVal1);
    return calendar.unlines(tmp3)
  } 
  static testCalendar_nofib(n) {
    let lambda, tmp, tmp1;
    lambda = (undefined, function (x) {
      return calendar.cal(x)
    });
    tmp = 1993 + n;
    tmp1 = NofibPrelude.enumFromTo(1993, tmp);
    return NofibPrelude.map(lambda, tmp1)
  } 
  static main() {
    let tmp, tmp1;
    tmp = calendar.testCalendar_nofib(0);
    tmp1 = NofibPrelude.concat(tmp);
    return NofibPrelude.nofibListToString(tmp1)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "calendar"]; 
});
let calendar = calendar1; export default calendar;
