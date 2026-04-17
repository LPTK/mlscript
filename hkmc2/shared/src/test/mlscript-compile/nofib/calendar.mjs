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
    let h, w, element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(hw) && hw.length === 2) {
      element0$ = runtime.Tuple.get(hw, 0);
      element1$ = runtime.Tuple.get(hw, 1);
      w = element1$;
      h = element0$;
      tmp = NofibPrelude.replicate(w, " ");
      return NofibPrelude.replicate(h, tmp)
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
    let n, m, h, w, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    if (runtime.Tuple.isArrayLike(mn) && mn.length === 2) {
      element0$ = runtime.Tuple.get(mn, 0);
      element1$ = runtime.Tuple.get(mn, 1);
      n = element1$;
      m = element0$;
      h = calendar.height(p);
      w = calendar.width(p);
      tmp = n - w;
      tmp1 = globalThis.Object.freeze([
        h,
        tmp
      ]);
      tmp2 = calendar.emptyPic(tmp1);
      tmp3 = NofibPrelude.zipWith(NofibPrelude.append, p, tmp2);
      tmp4 = m - h;
      tmp5 = globalThis.Object.freeze([
        tmp4,
        n
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
    let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    scrut = calendar.leap(year);
    if (scrut === true) {
      tmp = 29;
    } else {
      tmp = 28;
    }
    feb = tmp;
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
    tmp11 = NofibPrelude.Cons(feb, tmp10);
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
    let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    tmp = d < 1;
    if (tmp === false) {
      tmp1 = ml < d;
    } else {
      tmp1 = true;
    }
    scrut = tmp1;
    if (scrut === true) {
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
    let side, end, daynames, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, yr, inlinedVal, yr1, inlinedVal1, lambda, tmp6, tmp7, yer, inlinedVal2, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14;
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
    yr = year;
    tmp10 = NofibPrelude.stringOfInt(yr);
    tmp11 = NofibPrelude.nofibStringToList(tmp10);
    tmp12 = calendar.cjustify(75, tmp11);
    tmp13 = globalThis.Object.freeze([
      1,
      75
    ]);
    tmp14 = calendar.emptyPic(tmp13);
    inlinedVal = NofibPrelude.Cons(tmp12, tmp14);
    tmp3 = inlinedVal;
    yr1 = year;
    lambda = (undefined, function (x) {
      let tmp15, mnfdml, inlinedVal3, p, inlinedVal4, fd, ml, mn, element2$, element1$, element0$, tmp16, tmp17, tmp18, tmp19;
      mnfdml = x;
      if (runtime.Tuple.isArrayLike(mnfdml) && mnfdml.length === 3) {
        let mn1, inlinedVal5, fd1, ml1, inlinedVal6, tmp20, tmp21, fd2, ml2, inlinedVal7, tmp22;
        element0$ = runtime.Tuple.get(mnfdml, 0);
        element1$ = runtime.Tuple.get(mnfdml, 1);
        element2$ = runtime.Tuple.get(mnfdml, 2);
        ml = element2$;
        fd = element1$;
        mn = element0$;
        mn1 = mn;
        tmp20 = calendar.cjustify(21, mn1);
        inlinedVal5 = NofibPrelude.Cons(tmp20, NofibPrelude.Nil);
        tmp16 = inlinedVal5;
        fd1 = fd;
        ml1 = ml;
        fd2 = fd1;
        ml2 = ml1;
        tmp22 = calendar.dates(fd2, ml2);
        inlinedVal7 = calendar.block(7, tmp22);
        tmp21 = inlinedVal7;
        inlinedVal6 = NofibPrelude.append(daynames, tmp21);
        tmp17 = inlinedVal6;
        inlinedVal3 = NofibPrelude.append(tmp16, tmp17);
        tmp15 = inlinedVal3;
        p = tmp15;
        tmp18 = NofibPrelude.zipWith(NofibPrelude.append, side, p);
        tmp19 = NofibPrelude.zipWith(NofibPrelude.append, tmp18, side);
        inlinedVal4 = NofibPrelude.append(tmp19, end);
        return inlinedVal4
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    yer = yr1;
    tmp8 = calendar.firstDays(yer);
    tmp9 = calendar.monthLengths(yer);
    inlinedVal2 = NofibPrelude.zip3(calendar.monthNames, tmp8, tmp9);
    tmp6 = inlinedVal2;
    tmp7 = NofibPrelude.map(lambda, tmp6);
    inlinedVal1 = calendar.block(3, tmp7);
    tmp4 = inlinedVal1;
    tmp5 = NofibPrelude.append(tmp3, tmp4);
    return calendar.unlines(tmp5)
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
