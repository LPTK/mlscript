const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./Runtime.mjs";
import Iter from "./Iter.mjs";
import FingerTreeList from "./FingerTreeList.mjs";
let Splice1, sliceHelper, LazyFingerTree1, concatHelper, LazyFT1, normIdxSlice, View1, SpliceMarker1;
concatHelper = function concatHelper(a, l, ...args) {
  let idx, init_len, tmp, tmp1;
  idx = 0;
  init_len = a.length;
  tmp = args.length * 2;
  tmp1 = init_len + tmp;
  a.length = tmp1;
  lbl: while (true) {
    let scrut, x, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    scrut = idx < args.length;
    if (scrut === true) {
      x = args.at(idx);
      tmp2 = idx * 2;
      tmp3 = init_len + tmp2;
      a[tmp3] = SpliceMarker1;
      tmp4 = idx * 2;
      tmp5 = init_len + tmp4;
      tmp6 = tmp5 + 1;
      a[tmp6] = x;
      tmp7 = l + x.length;
      l = tmp7;
      tmp8 = idx + 1;
      idx = tmp8;
      continue lbl
    }
    break;
  }
  return Splice1(a, l)
};
normIdxSlice = function normIdxSlice(i, len) {
  let scrut, scrut1, tmp;
  scrut = i < 0;
  if (scrut === true) {
    tmp = - len;
    scrut1 = i >= tmp;
    if (scrut1 === true) {
      return len + i
    }
    return 0;
  }
  return i;
};
sliceHelper = function sliceHelper(beg, fin, arr) {
  let len, scrut, scrut1, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, arg$View$0$, arg$View$1$, arg$View$2$, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
  len = arr.length;
  tmp = normIdxSlice(beg, len);
  beg = tmp;
  tmp1 = normIdxSlice(fin, len);
  fin = tmp1;
  scrut = tmp >= len;
  if (scrut === true) {
    tmp2 = globalThis.Object.freeze([]);
    return View1(tmp2, 0, 0)
  }
  scrut1 = tmp1 >= len;
  if (scrut1 === true) {
    fin = len;
  }
  scrut2 = fin <= tmp;
  if (scrut2 === true) {
    tmp3 = globalThis.Object.freeze([]);
    return View1(tmp3, 0, 0)
  }
  if (arr instanceof View1.class) {
    arg$View$0$ = arr.underlying;
    arg$View$1$ = arr.start;
    arg$View$2$ = arr.end;
    tmp4 = arg$View$1$ + tmp;
    tmp5 = len - fin;
    tmp6 = arg$View$2$ + tmp5;
    return View1(arg$View$0$, tmp4, tmp6)
  } else if (arr instanceof Splice1.class) {
    tmp7 = runtime.safeCall(arr.materialize());
    return tmp7.slice(tmp, fin)
  }
  scrut3 = FingerTreeList.isFingerTree(arr);
  if (scrut3 === true) {
    tmp8 = len - fin;
    tmp9 = FingerTreeList.dropLeftRight(tmp, tmp8);
    return runtime.safeCall(tmp9(arr))
  }
  tmp10 = len - fin;
  return View1(arr, tmp, tmp10);
};
(class LazyFT extends Iter.IterableBase {
  static {
    LazyFT1 = this
  }
  constructor() {
    super();
  }
  toString() {
    let tmp, tmp1;
    tmp = Iter.joined(this, ", ");
    tmp1 = "[" + tmp;
    return tmp1 + "]"
  } 
  concat(...args) {
    let tmp;
    tmp = [
      SpliceMarker1,
      this
    ];
    return concatHelper(tmp, this.length, ...args)
  }
  [prettyPrint]() { return this.toString(); }
  static [definitionMetadata] = ["class", "LazyFT"]; 
});
View1 = function View(underlying, start, end) {
  return globalThis.Object.freeze(new View.class(underlying, start, end));
};
(class View extends LazyFT1 {
  static {
    View1.class = this
  }
  constructor(underlying, start, end) {
    super();
    let tmp, tmp1;
    this.underlying = underlying;
    this.start = start;
    this.end = end;
    tmp = this.underlying.length - this.start;
    tmp1 = tmp - this.end;
    this.len = tmp1;
  }
  iterator() {
    let idx, until, lambda;
    idx = this.start;
    until = this.underlying.length - this.end;
    const this$View = this;
    lambda = (undefined, function () {
      let scrut, next, tmp;
      scrut = idx < until;
      if (scrut === true) {
        next = runtime.safeCall(this$View.underlying.at(idx));
        tmp = idx + 1;
        idx = tmp;
        return Iter.Result.Next(next)
      }
      return Iter.Result.Done;
    });
    return Iter.Iterator(lambda)
  } 
  materialize() {
    let tmp;
    tmp = this.underlying.length - this.end;
    return this.underlying.slice(this.start, tmp)
  } 
  at(i) {
    let scrut, tmp, tmp1, tmp2, tmp3;
    tmp = - this.length;
    tmp1 = i < tmp;
    if (tmp1 === false) {
      tmp2 = i >= this.length;
    } else {
      tmp2 = true;
    }
    scrut = tmp2;
    if (scrut === true) {
      throw runtime.safeCall(globalThis.RangeError("View.at: Index out of bounds"))
    }
    let len, inlinedVal, scrut1;
    len = this.length;
    scrut1 = i < 0;
    if (scrut1 === true) {
      inlinedVal = len + i;
    } else {
      inlinedVal = i;
    }
    tmp3 = inlinedVal + this.start;
    return runtime.safeCall(this.underlying.at(tmp3));
  } 
  slice(beg, fin) {
    return sliceHelper(beg, fin, this)
  } 
  get length() {
    return this.len;
  } 
  toString() {
    let tmp, tmp1;
    tmp = Iter.joined(this, ", ");
    tmp1 = "[" + tmp;
    return tmp1 + "]"
  }
  [prettyPrint]() { return this.toString(); }
  static [definitionMetadata] = ["class", "View", ["underlying", "start", "end"]]; 
});
(class SpliceMarker {
  static {
    new this
  }
  constructor() {
    SpliceMarker1 = this;
    Object.defineProperty(this, "class", {
      value: SpliceMarker
    });
    globalThis.Object.freeze(this);
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["object", "SpliceMarker"]; 
});
Splice1 = function Splice(bits, len) {
  return globalThis.Object.freeze(new Splice.class(bits, len));
};
(class Splice extends LazyFT1 {
  static {
    Splice1.class = this
  }
  constructor(bits, len) {
    super();
    this.bits = bits;
    this.len = len;
    this.#materialized = null;
  }
  #materialized;
  iterator() {
    let tmp;
    tmp = this.materialize();
    return runtime.safeCall(tmp.iterator())
  } 
  get reify() {
    let acc, stack, tmp;
    acc = FingerTreeList.mk();
    stack = [];
    tmp = globalThis.Object.freeze([
      0,
      this.bits
    ]);
    runtime.safeCall(stack.push(tmp));
    lbl: while (true) {
      let scrut, e, idx, vals, scrut1, scrut2, scrut3, next, scrut4, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
      scrut = stack.length > 0;
      if (scrut === true) {
        e = runtime.safeCall(stack.pop());
        idx = e.at(0);
        vals = e.at(1);
        if (vals instanceof Splice1.class) {
          vals = vals.bits;
        }
        lbl1: while (true) {
          let scrut5, scrut6, scrut7, scrut8, scrut9, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
          scrut5 = idx < vals.length;
          if (scrut5 === true) {
            scrut6 = runtime.safeCall(vals.at(idx));
            if (scrut6 instanceof SpliceMarker1.class) {
              tmp7 = true;
            } else {
              tmp7 = false;
            }
            scrut7 = tmp7;
            if (scrut7 === false) {
              tmp8 = true;
            } else {
              tmp8 = false;
            }
            scrut8 = tmp8;
            if (scrut8 === true) {
              tmp9 = true;
            } else {
              tmp9 = false;
            }
          } else {
            tmp9 = false;
          }
          scrut9 = tmp9;
          if (scrut9 === true) {
            tmp10 = runtime.safeCall(vals.at(idx));
            tmp11 = FingerTreeList.snoc(acc, tmp10);
            acc = tmp11;
            tmp12 = idx + 1;
            idx = tmp12;
            continue lbl1
          }
          break;
        }
        scrut1 = idx < vals.length;
        if (scrut1 === true) {
          scrut2 = runtime.safeCall(vals.at(idx));
          if (scrut2 instanceof SpliceMarker1.class) {
            tmp1 = true;
          } else {
            tmp1 = false;
          }
        } else {
          tmp1 = false;
        }
        scrut3 = tmp1;
        if (scrut3 === true) {
          tmp2 = idx + 2;
          tmp3 = globalThis.Object.freeze([
            tmp2,
            vals
          ]);
          runtime.safeCall(stack.push(tmp3));
          tmp4 = idx + 1;
          next = runtime.safeCall(vals.at(tmp4));
          scrut4 = FingerTreeList.isFingerTree(next);
          if (scrut4 === true) {
            tmp5 = FingerTreeList.concat(acc, next);
            acc = tmp5;
            continue lbl
          }
          tmp6 = globalThis.Object.freeze([
            0,
            next
          ]);
          runtime.safeCall(stack.push(tmp6));
          continue lbl;
        }
        continue lbl;
      }
      break;
    }
    return acc;
  } 
  materialize() {
    let scrut;
    scrut = this.#materialized == null;
    if (scrut === true) {
      this.#materialized = this.reify;
      return this.#materialized
    }
    return this.#materialized;
  } 
  at(i) {
    let tmp;
    tmp = this.materialize();
    return runtime.safeCall(tmp.at(i))
  } 
  slice(beg, fin) {
    return sliceHelper(beg, fin, this)
  } 
  concat(...args) {
    let scrut, tmp, tmp1;
    scrut = this.#materialized === null;
    if (scrut === true) {
      tmp = [
        SpliceMarker1,
        this
      ];
      return concatHelper(tmp, this.len, ...args)
    }
    tmp1 = [
      SpliceMarker1,
      this.#materialized
    ];
    return concatHelper(tmp1, this.len, ...args);
  } 
  get length() {
    return this.len;
  } 
  toString() {
    let tmp, tmp1, tmp2;
    tmp = this.materialize();
    tmp1 = Iter.joined(tmp, ", ");
    tmp2 = "[" + tmp1;
    return tmp2 + "]"
  }
  [prettyPrint]() { return this.toString(); }
  static [definitionMetadata] = ["class", "Splice", ["bits", "len"]]; 
});
(class LazyFingerTree {
  static {
    LazyFingerTree1 = this
  }
  static {
    this.__split = SpliceMarker1;
  }
  static mk(...args) {
    let tmp;
    tmp = FingerTreeList.mk(...args);
    return View1(tmp, 0, 0)
  } 
  static concat(...args) {
    let tmp;
    tmp = [];
    return concatHelper(tmp, 0, ...args)
  } 
  static dropLeftRight(beg, fin) {
    return (xs) => {
      let scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4;
      tmp = beg < 0;
      if (tmp === false) {
        tmp1 = fin < 0;
      } else {
        tmp1 = true;
      }
      scrut = tmp1;
      if (scrut === true) {
        throw runtime.safeCall(globalThis.RangeError("LazyFingerTree.dropLeftRight: indices must be non-negative"))
      }
      tmp2 = beg > xs.length;
      if (tmp2 === false) {
        tmp3 = fin > xs.length;
      } else {
        tmp3 = true;
      }
      scrut1 = tmp3;
      if (scrut1 === true) {
        throw runtime.safeCall(globalThis.RangeError("LazyFingerTree.dropLeftRight: indices out of bounds"))
      }
      tmp4 = xs.length - fin;
      return sliceHelper(beg, tmp4, xs);
    }
  } 
  static equals(xs, ys) {
    loopLabel: while (true) {
      let middleElements, element0$, middleElements1, element0$1, tmp;
      if (runtime.Tuple.isArrayLike(xs) && xs.length >= 1) {
        element0$ = runtime.Tuple.get(xs, 0);
        middleElements = runtime.Tuple.slice(xs, 1, 0);
        if (runtime.Tuple.isArrayLike(ys) && ys.length >= 1) {
          element0$1 = runtime.Tuple.get(ys, 0);
          middleElements1 = runtime.Tuple.slice(ys, 1, 0);
          tmp = element0$ == element0$1;
          if (tmp === true) {
            xs = middleElements;
            ys = middleElements1;
            continue loopLabel
          }
          return false;
        } else if (runtime.Tuple.isArrayLike(ys) && ys.length === 0) {
          return false
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      } else if (runtime.Tuple.isArrayLike(xs) && xs.length === 0) {
        return ys.length === 0
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static __concat(...args) {
    let len, idx;
    len = 0;
    idx = 0;
    lbl: while (true) {
      let scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4;
      scrut = idx < args.length;
      if (scrut === true) {
        scrut1 = args.at(idx);
        if (scrut1 instanceof SpliceMarker1.class) {
          tmp = idx + 1;
          tmp1 = len + args.at(tmp).length;
          len = tmp1;
          tmp2 = idx + 2;
          idx = tmp2;
          continue lbl
        }
        tmp3 = len + 1;
        len = tmp3;
        tmp4 = idx + 1;
        idx = tmp4;
        continue lbl;
      }
      break;
    }
    return Splice1(args, len)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "LazyFingerTree"]; 
});
let LazyFingerTree = LazyFingerTree1; export default LazyFingerTree;
