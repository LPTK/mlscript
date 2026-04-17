const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
let ansi1;
(class ansi {
  static {
    ansi1 = this
  }
  static {
    let tmp;
    tmp = NofibPrelude.nofibStringToList("L");
    this.cls = tmp;
  }
  static goto(x, y) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    tmp = NofibPrelude.stringOfInt(y);
    tmp1 = NofibPrelude.nofibStringToList(tmp);
    tmp2 = NofibPrelude.stringOfInt(x);
    tmp3 = NofibPrelude.nofibStringToList(tmp2);
    tmp4 = NofibPrelude.nofibStringToList("H");
    tmp5 = NofibPrelude.append(tmp3, tmp4);
    tmp6 = NofibPrelude.Cons(";", tmp5);
    tmp7 = NofibPrelude.append(tmp1, tmp6);
    tmp8 = NofibPrelude.Cons("[", tmp7);
    return NofibPrelude.Cons("E", tmp8)
  } 
  static at(x_y, s) {
    let x, y, element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      element0$ = runtime.Tuple.get(x_y, 0);
      element1$ = runtime.Tuple.get(x_y, 1);
      y = element1$;
      x = element0$;
      tmp = ansi.goto(x, y);
      return NofibPrelude.append(tmp, s)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static highlight(s) {
    let tmp, tmp1, tmp2;
    tmp = NofibPrelude.nofibStringToList("ESC[7m");
    tmp1 = NofibPrelude.nofibStringToList("ESC[0m");
    tmp2 = NofibPrelude.append(s, tmp1);
    return NofibPrelude.append(tmp, tmp2)
  } 
  static end(xs) {
    return NofibPrelude.nofibStringToList("")
  } 
  static readChar(eof, consume, cs) {
    let cs1, c, arg$Cons$0$, arg$Cons$1$;
    if (cs instanceof NofibPrelude.Nil.class) {
      return runtime.safeCall(eof(NofibPrelude.Nil))
    } else if (cs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = cs.head;
      arg$Cons$1$ = cs.tail;
      cs1 = arg$Cons$1$;
      c = arg$Cons$0$;
      return runtime.safeCall(consume(c, cs1))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static peekChar(eof, consume, cs) {
    let cs1, c, arg$Cons$0$, arg$Cons$1$, tmp;
    if (cs instanceof NofibPrelude.Nil.class) {
      return runtime.safeCall(eof(NofibPrelude.Nil))
    } else if (cs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = cs.head;
      arg$Cons$1$ = cs.tail;
      cs1 = arg$Cons$1$;
      c = arg$Cons$0$;
      tmp = NofibPrelude.Cons(c, cs1);
      return runtime.safeCall(consume(c, tmp))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static pressAnyKey(prog, x) {
    let lambda;
    lambda = (undefined, function (c, x1) {
      return runtime.safeCall(prog(x1))
    });
    return ansi.readChar(prog, lambda, x)
  } 
  static unreadChar(c, prog, cs) {
    let tmp;
    tmp = NofibPrelude.Cons(c, cs);
    return runtime.safeCall(prog(tmp))
  } 
  static writeChar(c, prog, cs) {
    let tmp;
    tmp = runtime.safeCall(prog(cs));
    return NofibPrelude.Cons(c, tmp)
  } 
  static writeString(s, prog, cs) {
    let tmp;
    tmp = runtime.safeCall(prog(cs));
    return NofibPrelude.append(s, tmp)
  } 
  static writes(ss, a, b) {
    let tmp;
    tmp = NofibPrelude.concat(ss);
    return ansi.writeString(tmp, a, b)
  } 
  static ringBell(prog, cs) {
    return ansi.writeChar("B", prog, cs)
  } 
  static clearScreen(a, b) {
    return ansi.writeString(ansi.cls, a, b)
  } 
  static writeAt(x_y, s, a) {
    let x, y, element1$, element0$;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      let lambda;
      element0$ = runtime.Tuple.get(x_y, 0);
      element1$ = runtime.Tuple.get(x_y, 1);
      y = element1$;
      x = element0$;
      lambda = (undefined, function (p) {
        let tmp, tmp1;
        tmp = ansi.goto(x, y);
        tmp1 = NofibPrelude.append(tmp, s);
        return ansi.writeString(tmp1, a, p)
      });
      return lambda
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static moveTo(x_y, a) {
    let x, y, element1$, element0$;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      let lambda;
      element0$ = runtime.Tuple.get(x_y, 0);
      element1$ = runtime.Tuple.get(x_y, 1);
      y = element1$;
      x = element0$;
      lambda = (undefined, function (p) {
        let tmp;
        tmp = ansi.goto(x, y);
        return ansi.writeString(tmp, a, p)
      });
      return lambda
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static returnn(s, consume) {
    let tmp;
    tmp = NofibPrelude.reverse(s);
    return runtime.safeCall(consume(tmp))
  } 
  static deletee(n, s, l, consume, d) {
    let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    scrut = n > 0;
    if (scrut === true) {
      tmp = NofibPrelude.nofibStringToList("BS_BS");
      tmp1 = n - 1;
      tmp2 = NofibPrelude.tail(s);
      tmp3 = ansi.loop(tmp1, tmp2, l, consume);
      return ansi.writeString(tmp, tmp3, d)
    }
    tmp4 = NofibPrelude.nofibStringToList("");
    tmp5 = ansi.loop(0, tmp4, l, consume);
    return ansi.ringBell(tmp5, d);
  } 
  static loop(n, s, l, consume) {
    let lambda;
    lambda = (undefined, function (x) {
      let tmp, lambda1;
      tmp = ansi.returnn(s, consume);
      lambda1 = (undefined, function (c, d) {
        let scrut, scrut1, scrut2, scrut3, tmp1, tmp2, tmp3, tmp4, tmp5;
        scrut = c == "B";
        if (scrut === true) {
          return ansi.deletee(n, s, l, consume, d)
        }
        scrut1 = c == "D";
        if (scrut1 === true) {
          return ansi.deletee(n, s, l, consume, d)
        }
        scrut2 = c == "`";
        if (scrut2 === true) {
          tmp1 = ansi.returnn(s, consume);
          return runtime.safeCall(tmp1(d))
        }
        scrut3 = n < l;
        if (scrut3 === true) {
          tmp2 = n + 1;
          tmp3 = NofibPrelude.Cons(c, s);
          tmp4 = ansi.loop(tmp2, tmp3, l, consume);
          return ansi.writeChar(c, tmp4, d)
        }
        tmp5 = ansi.loop(n, s, l, consume);
        return ansi.ringBell(tmp5, d);
      });
      return ansi.readChar(tmp, lambda1, x)
    });
    return lambda
  } 
  static readAt(x_y, l, consume) {
    let tmp, tmp1, tmp2;
    tmp = NofibPrelude.replicate(l, "_");
    tmp1 = ansi.loop(0, "", l, consume);
    tmp2 = ansi.moveTo(x_y, tmp1);
    return ansi.writeAt(x_y, tmp, tmp2)
  } 
  static promptReadAt(x_y, l, prompt, consume) {
    let x, y, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      element0$ = runtime.Tuple.get(x_y, 0);
      element1$ = runtime.Tuple.get(x_y, 1);
      y = element1$;
      x = element0$;
      tmp = globalThis.Object.freeze([
        x,
        y
      ]);
      tmp1 = NofibPrelude.listLen(prompt);
      tmp2 = x + tmp1;
      tmp3 = globalThis.Object.freeze([
        tmp2,
        y
      ]);
      tmp4 = ansi.readAt(tmp3, l, consume);
      return ansi.writeAt(tmp, prompt, tmp4)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static program(input) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, lambda;
    tmp = globalThis.Object.freeze([
      17,
      5
    ]);
    tmp1 = NofibPrelude.nofibStringToList("Demonstration program");
    tmp2 = ansi.highlight(tmp1);
    tmp3 = ansi.at(tmp, tmp2);
    tmp4 = globalThis.Object.freeze([
      48,
      5
    ]);
    tmp5 = NofibPrelude.nofibStringToList("Version 1.0");
    tmp6 = ansi.at(tmp4, tmp5);
    tmp7 = globalThis.Object.freeze([
      17,
      7
    ]);
    tmp8 = NofibPrelude.nofibStringToList("This program illustrates a simple approach");
    tmp9 = ansi.at(tmp7, tmp8);
    tmp10 = globalThis.Object.freeze([
      17,
      8
    ]);
    tmp11 = NofibPrelude.nofibStringToList("to screen-based interactive programs using");
    tmp12 = ansi.at(tmp10, tmp11);
    tmp13 = globalThis.Object.freeze([
      17,
      9
    ]);
    tmp14 = NofibPrelude.nofibStringToList("the Hugs functional programming system.");
    tmp15 = ansi.at(tmp13, tmp14);
    tmp16 = globalThis.Object.freeze([
      17,
      11
    ]);
    tmp17 = NofibPrelude.nofibStringToList("Please press any key to continue ...");
    tmp18 = ansi.at(tmp16, tmp17);
    tmp19 = NofibPrelude.Cons(tmp18, NofibPrelude.Nil);
    tmp20 = NofibPrelude.Cons(tmp15, tmp19);
    tmp21 = NofibPrelude.Cons(tmp12, tmp20);
    tmp22 = NofibPrelude.Cons(tmp9, tmp21);
    tmp23 = NofibPrelude.Cons(tmp6, tmp22);
    tmp24 = NofibPrelude.Cons(tmp3, tmp23);
    tmp25 = NofibPrelude.Cons(ansi.cls, tmp24);
    lambda = (undefined, function (x) {
      let tmp26, tmp27, lambda1, tmp28;
      tmp26 = globalThis.Object.freeze([
        17,
        15
      ]);
      tmp27 = NofibPrelude.nofibStringToList("Please enter your name: ");
      lambda1 = (undefined, function (name) {
        let reply, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, lambda2, tmp37;
        tmp29 = NofibPrelude.nofibStringToList("Hello ");
        tmp30 = NofibPrelude.nofibStringToList("!");
        tmp31 = NofibPrelude.append(name, tmp30);
        reply = NofibPrelude.append(tmp29, tmp31);
        tmp32 = NofibPrelude.listLen(reply);
        tmp33 = tmp32 / 2;
        tmp34 = 40 - tmp33;
        tmp35 = globalThis.Object.freeze([
          tmp34,
          18
        ]);
        tmp36 = globalThis.Object.freeze([
          1,
          23
        ]);
        lambda2 = (undefined, function (y) {
          let tmp38, lambda3;
          tmp38 = NofibPrelude.nofibStringToList("I'm waiting...");
          lambda3 = (undefined, function (x1) {
            return ansi.pressAnyKey(ansi.end, x1)
          });
          return ansi.writeString(tmp38, lambda3, y)
        });
        tmp37 = ansi.moveTo(tmp36, lambda2);
        return ansi.writeAt(tmp35, reply, tmp37)
      });
      tmp28 = ansi.promptReadAt(tmp26, 18, tmp27, lambda1);
      return ansi.pressAnyKey(tmp28, x)
    });
    return ansi.writes(tmp25, lambda, input)
  } 
  static testAnsi_nofib(n) {
    let lambda, tmp, tmp1, tmp2;
    lambda = (undefined, function (x) {
      return x
    });
    tmp = NofibPrelude.replicate(n, ansi.program);
    tmp1 = NofibPrelude.foldr(NofibPrelude.compose, lambda, tmp);
    tmp2 = NofibPrelude.nofibStringToList("testtesttest");
    return runtime.safeCall(tmp1(tmp2))
  } 
  static main() {
    let tmp;
    tmp = ansi.testAnsi_nofib(1);
    return NofibPrelude.nofibListToString(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "ansi"]; 
});
let ansi = ansi1; export default ansi;
