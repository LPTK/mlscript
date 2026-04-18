const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let rsa1;
(class rsa {
  static {
    rsa1 = this
  }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    tmp = rsa.z_of_int(0);
    this.const0 = tmp;
    tmp1 = rsa.z_of_int(31);
    this.const31 = tmp1;
    tmp2 = rsa.z_of_int(1);
    this.const1 = tmp2;
    tmp3 = rsa.z_of_int(2);
    this.const2 = tmp3;
    tmp4 = rsa.z_of_int(128);
    this.const128 = tmp4;
    tmp5 = runtime.safeCall(globalThis.fs.readFileSync("./hkmc2/shared/src/test/mlscript/nofib/input/rsa.faststdin"));
    tmp6 = runtime.safeCall(tmp5.toString());
    tmp7 = NofibPrelude.nofibStringToList(tmp6);
    this.intput = tmp7;
  }
  static z_of_int(x) {
    return runtime.safeCall(globalThis.BigInt(x))
  } 
  static string_of_z(x) {
    let tmp;
    tmp = x + "";
    return NofibPrelude.nofibStringToList(tmp)
  } 
  static z_add(x, y) {
    return x + y
  } 
  static z_mul(x, y) {
    return x * y
  } 
  static z_sub(x, y) {
    return x - y
  } 
  static z_div(x, y) {
    return x / y
  } 
  static z_mod(x, y) {
    return x % y
  } 
  static z_equal(x, y) {
    return x === y
  } 
  static z_sqr(x) {
    return x * x
  } 
  static int_if_char(c) {
    return runtime.safeCall(c.codePointAt(0))
  } 
  static hash(str) {
    let lambda;
    lambda = (undefined, function (acc, c) {
      let tmp, tmp1, tmp2;
      tmp = rsa.int_if_char(c);
      tmp1 = rsa.z_of_int(tmp);
      tmp2 = rsa.z_mul(acc, rsa.const31);
      return rsa.z_add(tmp1, tmp2)
    });
    return NofibPrelude.foldl(lambda, rsa.const0, str)
  } 
  static and_(ls) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Nil.class) {
        return true
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        if (arg$Cons$0$ === true) {
          ls = arg$Cons$1$;
          continue loopLabel
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static unlines(ls) {
    let lambda, tmp;
    lambda = (undefined, function (l) {
      let tmp1;
      tmp1 = NofibPrelude.Cons("\n", NofibPrelude.Nil);
      return NofibPrelude.append(l, tmp1)
    });
    tmp = NofibPrelude.map(lambda, ls);
    return NofibPrelude.concat(tmp)
  } 
  static even(a) {
    let tmp;
    tmp = rsa.z_mod(a, rsa.const2);
    return tmp === rsa.const0
  } 
  static code(ls) {
    let lambda;
    lambda = (undefined, function (x, y) {
      let tmp, tmp1, tmp2;
      tmp = rsa.z_mul(rsa.const128, x);
      tmp1 = rsa.int_if_char(y);
      tmp2 = rsa.z_of_int(tmp1);
      return rsa.z_add(tmp, tmp2)
    });
    return NofibPrelude.foldl(lambda, rsa.const0, ls)
  } 
  static collect(n, xs) {
    let scrut, tmp, tmp1, tmp2;
    scrut = n === 0;
    if (scrut === true) {
      return NofibPrelude.Nil
    }
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = rsa.collect(n, tmp1);
    return NofibPrelude.Cons(tmp, tmp2);
  } 
  static size(n) {
    let tmp, tmp1, tmp2;
    tmp = rsa.string_of_z(n);
    tmp1 = NofibPrelude.listLen(tmp);
    tmp2 = tmp1 * 47;
    return NofibPrelude.intDiv(tmp2, 100)
  } 
  static encrypt(n, e, s) {
    let lambda, tmp, tmp1, tmp2;
    lambda = (undefined, function (c) {
      let tmp3, tmp4;
      tmp3 = rsa.code(c);
      tmp4 = rsa.power(e, n, tmp3);
      return rsa.string_of_z(tmp4)
    });
    tmp = rsa.size(n);
    tmp1 = rsa.collect(tmp, s);
    tmp2 = NofibPrelude.map(lambda, tmp1);
    return rsa.unlines(tmp2)
  } 
  static power(n, m, x) {
    let scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    scrut = rsa.z_equal(n, rsa.const0);
    if (scrut === true) {
      return rsa.const1
    }
    scrut1 = rsa.even(n);
    if (scrut1 === true) {
      tmp = rsa.z_div(n, rsa.const2);
      tmp1 = rsa.power(tmp, m, x);
      tmp2 = rsa.z_sqr(tmp1);
      return rsa.z_mod(tmp2, m)
    }
    tmp3 = rsa.z_sub(n, rsa.const1);
    tmp4 = rsa.power(tmp3, m, x);
    tmp5 = rsa.z_mul(x, tmp4);
    return rsa.z_mod(tmp5, m);
  } 
  static testRsa_nofib(_) {
    let tmp, tmp1, tmp2;
    tmp = rsa.z_of_int("2036450659413645137870851576872812267542175329986469156678671505255564383842535488743101632280716717779536712424613501441720195827856504007305662157107");
    tmp1 = rsa.z_of_int("387784473137902876992546516170169092918207676456888779623592396031349415024943784869634893342729620092877891356118467738167515879252473323905128540213");
    tmp2 = rsa.encrypt(tmp, tmp1, rsa.intput);
    return rsa.hash(tmp2)
  } 
  static main() {
    return rsa.testRsa_nofib(0)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "rsa"]; 
});
let rsa = rsa1; export default rsa;
