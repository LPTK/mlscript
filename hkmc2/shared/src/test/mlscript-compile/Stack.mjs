const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./Runtime.mjs";
import Predef from "./Predef.mjs";
let Stack1;
(class Stack {
  static {
    Stack1 = this
  }
  static {
    this.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons {
      static {
        Stack.Cons.class = this
      }
      constructor(head, tail) {
        this.head = head;
        this.tail = tail;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Cons", ["head", "tail"]]; 
    });
    (class Nil {
      static {
        new this
      }
      constructor() {
        Stack.Nil = this;
        Object.defineProperty(this, "class", {
          value: Nil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Nil"]; 
    });
  }
  static isEmpty(xs) {
    if (xs instanceof Stack.Nil.class) {
      return true
    }
    return false;
  } 
  static reverseAndAppend(xs, tail) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (xs instanceof Stack.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        tmp = Stack.Cons(arg$Cons$0$, tail);
        xs = arg$Cons$1$;
        tail = tmp;
        continue loopLabel
      } else if (xs instanceof Stack.Nil.class) {
        return tail
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static reverse(xs) {
    return Stack.reverseAndAppend(xs, Stack.Nil)
  } 
  static fromArray(arr) {
    let ls, i;
    ls = Stack.Nil;
    i = arr.length - 1;
    lbl: while (true) {
      let scrut, tmp, tmp1;
      scrut = i >= 0;
      if (scrut === true) {
        tmp = runtime.safeCall(arr.at(i));
        ls = Stack.Cons(tmp, ls);
        tmp1 = i - 1;
        i = tmp1;
        continue lbl
      }
      break;
    }
    return ls
  } 
  static toArray(xs) {
    let tmp;
    tmp = Stack.reverse(xs);
    return Stack.toReverseArray(tmp)
  } 
  static toReverseArray(xs) {
    let arr;
    arr = [];
    lbl: while (true) {
      let arg$Cons$0$, arg$Cons$1$;
      if (xs instanceof Stack.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        runtime.safeCall(arr.push(arg$Cons$0$));
        xs = arg$Cons$1$;
        continue lbl
      }
      break;
    }
    return arr
  } 
  static zip(...xss) {
    let go, tmp, tmp1;
    go = function go(heads, tails) {
      let lambda;
      lambda = (undefined, function (caseScrut) {
        let h, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
        if (caseScrut instanceof Stack.Cons.class) {
          arg$Cons$0$ = caseScrut.head;
          arg$Cons$1$ = caseScrut.tail;
          h = arg$Cons$0$;
          if (h instanceof Stack.Cons.class) {
            arg$Cons$0$1 = arg$Cons$0$.head;
            arg$Cons$1$1 = arg$Cons$0$.tail;
            tmp2 = Stack.Cons(arg$Cons$0$1, heads);
            tmp3 = Stack.Cons(arg$Cons$1$1, tails);
            tmp4 = go(tmp2, tmp3);
            return runtime.safeCall(tmp4(arg$Cons$1$))
          } else if (h instanceof Stack.Nil.class) {
            tmp5 = go(heads, tails);
            return runtime.safeCall(tmp5(arg$Cons$1$))
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        } else if (caseScrut instanceof Stack.Nil.class) {
          if (heads instanceof Stack.Nil.class) {
            if (tails instanceof Stack.Nil.class) {
              return Stack.Nil
            }
            return runtime.assertFail("mlscript-compile/Stack.mls", "50");
          }
          tmp6 = Stack.toArray(heads);
          tmp7 = go(Stack.Nil, Stack.Nil);
          tmp8 = Stack.reverse(tails);
          tmp9 = runtime.safeCall(tmp7(tmp8));
          return Stack.Cons(tmp6, tmp9);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      });
      return lambda
    };
    tmp = go(Stack.Nil, Stack.Nil);
    tmp1 = Stack.fromArray(xss);
    return runtime.safeCall(tmp(tmp1))
  } 
  static concat(xs, ys) {
    let result, current, rest, arg$Cons$0$, arg$Cons$1$;
    if (ys instanceof Stack.Nil.class) {
      return xs
    }
    if (xs instanceof Stack.Nil.class) {
      return ys
    } else if (xs instanceof Stack.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      result = new Stack.Cons.class(arg$Cons$0$, ys);
      current = result;
      rest = arg$Cons$1$;
      lbl: while (true) {
        let next, arg$Cons$0$1, arg$Cons$1$1;
        if (rest instanceof Stack.Cons.class) {
          arg$Cons$0$1 = rest.head;
          arg$Cons$1$1 = rest.tail;
          next = new Stack.Cons.class(arg$Cons$0$1, ys);
          current.tail = next;
          globalThis.Object.freeze(current);
          current = next;
          rest = arg$Cons$1$1;
          continue lbl
        }
        break;
      }
      return globalThis.Object.freeze(result)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static append(xs, y) {
    let tmp;
    tmp = Stack.Cons(y, Stack.Nil);
    return Stack.concat(xs, tmp)
  } 
  static filter(xs, f) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
      if (xs instanceof Stack.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        scrut = runtime.safeCall(f(arg$Cons$0$));
        if (scrut === true) {
          tmp = Stack.filter(arg$Cons$1$, f);
          return Stack.Cons(arg$Cons$0$, tmp)
        }
        xs = arg$Cons$1$;
        continue loopLabel;
      } else if (xs instanceof Stack.Nil.class) {
        return Stack.Nil
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Stack"]; 
});
let Stack = Stack1; export default Stack;
