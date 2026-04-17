const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./Runtime.mjs";
import Option from "./Option.mjs";
import Iter from "./Iter.mjs";
let toNodes, ithAffixElement, repeatPopFront, getAffixSize, Branch21, concatMiddle, ithNode, arrayOfNode, Nil1, View1, SpliceMarker1, Deep1, Empty1, normIdxSlice, repeatPopBack, FingerTree1, Branch31, FingerTreeList1, getNodeSize, Single1;
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
getNodeSize = function getNodeSize(node) {
  let arg$Branch3$0$, arg$Branch2$0$;
  if (node instanceof Branch21.class) {
    arg$Branch2$0$ = node.size;
    return arg$Branch2$0$
  } else if (node instanceof Branch31.class) {
    arg$Branch3$0$ = node.size;
    return arg$Branch3$0$
  }
  return 1;
};
concatMiddle = function concatMiddle(ft1, middle, ft2) {
  let scrut, xs, y, left, ay1, dt1, post2, s2, s1, ax2, dt2, pre1, middle1, element2$, element1$, element0$, arg$Deep$0$, arg$Deep$1$, arg$Deep$2$, arg$Deep$3$, arg$Deep$0$1, arg$Deep$1$1, arg$Deep$2$1, arg$Deep$3$1, arg$Single$0$, lastElement1$, middleElements, arg$Single$0$1, middleElements1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  split_default$: {
    split_1$: {
      scrut = globalThis.Object.freeze([
        ft1,
        middle,
        ft2
      ]);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        element2$ = runtime.Tuple.get(scrut, 2);
        if (element0$ instanceof Empty1.class) {
          if (runtime.Tuple.isArrayLike(element1$) && element1$.length === 0) {
            return element2$
          } else if (runtime.Tuple.isArrayLike(element1$) && element1$.length >= 1) {
            element0$1 = runtime.Tuple.get(element1$, 0);
            middleElements1 = runtime.Tuple.slice(element1$, 1, 0);
            tmp = concatMiddle(Empty1, middleElements1, element2$);
            return FingerTreeList1.cons(element0$1, tmp)
          }
          if (element2$ instanceof Single1.class) {
            arg$Single$0$ = element2$.e;
            y = arg$Single$0$;
            xs = element1$;
            left = element0$;
          } else {
            break split_default$
          }
        } else if (element0$ instanceof Single1.class) {
          arg$Single$0$1 = element0$.e;
          tmp1 = concatMiddle(Empty1, element1$, element2$);
          return FingerTreeList1.cons(arg$Single$0$1, tmp1)
        } else {
          if (runtime.Tuple.isArrayLike(element1$) && element1$.length === 0) {
            if (element2$ instanceof Empty1.class) {
              return element0$
            } else if (element2$ instanceof Single1.class) {
              arg$Single$0$ = element2$.e;
              y = arg$Single$0$;
              xs = element1$;
              left = element0$;
              break split_1$
            }
            if (element0$ instanceof Deep1.class) {
              arg$Deep$0$ = element0$.size;
              arg$Deep$1$ = element0$.prefix;
              arg$Deep$2$ = element0$.middle;
              arg$Deep$3$ = element0$.suffix;
              if (element2$ instanceof Deep1.class) {
                arg$Deep$0$1 = element2$.size;
                arg$Deep$1$1 = element2$.prefix;
                arg$Deep$2$1 = element2$.middle;
                arg$Deep$3$1 = element2$.suffix;
                post2 = arg$Deep$3$1;
                dt2 = arg$Deep$2$1;
                ax2 = arg$Deep$1$1;
                s2 = arg$Deep$0$1;
                middle1 = element1$;
                ay1 = arg$Deep$3$;
                dt1 = arg$Deep$2$;
                pre1 = arg$Deep$1$;
                s1 = arg$Deep$0$;
              } else {
                break split_default$
              }
            } else {
              break split_default$
            }
          } else if (runtime.Tuple.isArrayLike(element1$) && element1$.length >= 1) {
            middleElements = runtime.Tuple.slice(element1$, 0, 1);
            lastElement1$ = runtime.Tuple.get(element1$, -1);
            if (element2$ instanceof Empty1.class) {
              tmp2 = concatMiddle(element0$, middleElements, Empty1);
              return FingerTreeList1.snoc(tmp2, lastElement1$)
            } else if (element2$ instanceof Single1.class) {
              arg$Single$0$ = element2$.e;
              y = arg$Single$0$;
              xs = element1$;
              left = element0$;
              break split_1$
            }
            if (element0$ instanceof Deep1.class) {
              arg$Deep$0$ = element0$.size;
              arg$Deep$1$ = element0$.prefix;
              arg$Deep$2$ = element0$.middle;
              arg$Deep$3$ = element0$.suffix;
              if (element2$ instanceof Deep1.class) {
                arg$Deep$0$1 = element2$.size;
                arg$Deep$1$1 = element2$.prefix;
                arg$Deep$2$1 = element2$.middle;
                arg$Deep$3$1 = element2$.suffix;
                post2 = arg$Deep$3$1;
                dt2 = arg$Deep$2$1;
                ax2 = arg$Deep$1$1;
                s2 = arg$Deep$0$1;
                middle1 = element1$;
                ay1 = arg$Deep$3$;
                dt1 = arg$Deep$2$;
                pre1 = arg$Deep$1$;
                s1 = arg$Deep$0$;
              } else {
                break split_default$
              }
            } else {
              break split_default$
            }
          } else {
            if (element2$ instanceof Single1.class) {
              arg$Single$0$ = element2$.e;
              y = arg$Single$0$;
              xs = element1$;
              left = element0$;
              break split_1$
            }
            if (element0$ instanceof Deep1.class) {
              arg$Deep$0$ = element0$.size;
              arg$Deep$1$ = element0$.prefix;
              arg$Deep$2$ = element0$.middle;
              arg$Deep$3$ = element0$.suffix;
              if (element2$ instanceof Deep1.class) {
                arg$Deep$0$1 = element2$.size;
                arg$Deep$1$1 = element2$.prefix;
                arg$Deep$2$1 = element2$.middle;
                arg$Deep$3$1 = element2$.suffix;
                post2 = arg$Deep$3$1;
                dt2 = arg$Deep$2$1;
                ax2 = arg$Deep$1$1;
                s2 = arg$Deep$0$1;
                middle1 = element1$;
                ay1 = arg$Deep$3$;
                dt1 = arg$Deep$2$;
                pre1 = arg$Deep$1$;
                s1 = arg$Deep$0$;
              } else {
                break split_default$
              }
            } else {
              break split_default$
            }
          }
          tmp3 = s1 + s2;
          tmp4 = tmp3 + middle1.length;
          tmp5 = globalThis.Object.freeze([
            ...ay1,
            ...middle1,
            ...ax2
          ]);
          tmp6 = toNodes(tmp5);
          tmp7 = concatMiddle(dt1, tmp6, dt2);
          return Deep1(tmp4, pre1, tmp7, post2)
        }
      } else {
        break split_default$
      }
    }
    tmp8 = concatMiddle(left, xs, Empty1);
    return FingerTreeList1.snoc(tmp8, y);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"))
};
toNodes = function toNodes(arr) {
  let middleElements, element1$, element0$, middleElements1, element2$, element3$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19;
  if (runtime.Tuple.isArrayLike(arr) && arr.length === 0) {
    return globalThis.Object.freeze([])
  } else if (runtime.Tuple.isArrayLike(arr) && arr.length === 4) {
    element0$ = runtime.Tuple.get(arr, 0);
    element1$ = runtime.Tuple.get(arr, 1);
    element2$ = runtime.Tuple.get(arr, 2);
    element3$ = runtime.Tuple.get(arr, 3);
    tmp = getNodeSize(element0$);
    tmp1 = getNodeSize(element1$);
    tmp2 = tmp + tmp1;
    tmp3 = Branch21(tmp2, element0$, element1$);
    tmp4 = getNodeSize(element2$);
    tmp5 = getNodeSize(element3$);
    tmp6 = tmp4 + tmp5;
    tmp7 = Branch21(tmp6, element2$, element3$);
    return globalThis.Object.freeze([
      tmp3,
      tmp7
    ])
  } else if (runtime.Tuple.isArrayLike(arr) && arr.length >= 3) {
    element0$ = runtime.Tuple.get(arr, 0);
    element1$ = runtime.Tuple.get(arr, 1);
    element2$ = runtime.Tuple.get(arr, 2);
    middleElements1 = runtime.Tuple.slice(arr, 3, 0);
    tmp8 = getNodeSize(element0$);
    tmp9 = getNodeSize(element1$);
    tmp10 = tmp8 + tmp9;
    tmp11 = getNodeSize(element2$);
    tmp12 = tmp10 + tmp11;
    tmp13 = Branch31(tmp12, element0$, element1$, element2$);
    tmp14 = toNodes(middleElements1);
    return globalThis.Object.freeze([
      tmp13,
      ...tmp14
    ])
  } else if (runtime.Tuple.isArrayLike(arr) && arr.length >= 2) {
    element0$ = runtime.Tuple.get(arr, 0);
    element1$ = runtime.Tuple.get(arr, 1);
    middleElements = runtime.Tuple.slice(arr, 2, 0);
    tmp15 = getNodeSize(element0$);
    tmp16 = getNodeSize(element1$);
    tmp17 = tmp15 + tmp16;
    tmp18 = Branch21(tmp17, element0$, element1$);
    tmp19 = toNodes(middleElements);
    return globalThis.Object.freeze([
      tmp18,
      ...tmp19
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
arrayOfNode = function arrayOfNode(node) {
  let arg$Branch3$1$, arg$Branch3$2$, arg$Branch3$3$, arg$Branch2$1$, arg$Branch2$2$;
  if (node instanceof Branch21.class) {
    arg$Branch2$1$ = node.e1;
    arg$Branch2$2$ = node.e2;
    return globalThis.Object.freeze([
      arg$Branch2$1$,
      arg$Branch2$2$
    ])
  } else if (node instanceof Branch31.class) {
    arg$Branch3$1$ = node.e1;
    arg$Branch3$2$ = node.e2;
    arg$Branch3$3$ = node.e3;
    return globalThis.Object.freeze([
      arg$Branch3$1$,
      arg$Branch3$2$,
      arg$Branch3$3$
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
getAffixSize = function getAffixSize(arr) {
  let middleElements, element0$, tmp, tmp1;
  if (runtime.Tuple.isArrayLike(arr) && arr.length === 0) {
    return 0
  } else if (runtime.Tuple.isArrayLike(arr) && arr.length >= 1) {
    element0$ = runtime.Tuple.get(arr, 0);
    middleElements = runtime.Tuple.slice(arr, 1, 0);
    tmp = getNodeSize(element0$);
    tmp1 = getAffixSize(middleElements);
    return tmp + tmp1
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
ithAffixElement = function ithAffixElement(idx, arr) {
  loopLabel: while (true) {
    let scrut, middleElements, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(arr) && arr.length === 0) {
      return Option.None
    } else if (runtime.Tuple.isArrayLike(arr) && arr.length >= 1) {
      element0$ = runtime.Tuple.get(arr, 0);
      middleElements = runtime.Tuple.slice(arr, 1, 0);
      tmp = getNodeSize(element0$);
      scrut = idx < tmp;
      if (scrut === true) {
        return ithNode(idx, element0$)
      }
      tmp1 = getNodeSize(element0$);
      tmp2 = idx - tmp1;
      idx = tmp2;
      arr = middleElements;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
ithNode = function ithNode(idx, node) {
  loopLabel: while (true) {
    let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, arg$Branch3$0$, arg$Branch3$1$, arg$Branch3$2$, arg$Branch3$3$, arg$Branch2$0$, arg$Branch2$1$, arg$Branch2$2$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16;
    if (node instanceof Branch21.class) {
      arg$Branch2$0$ = node.size;
      arg$Branch2$1$ = node.e1;
      arg$Branch2$2$ = node.e2;
      tmp = idx >= 0;
      if (tmp === true) {
        tmp1 = idx < arg$Branch2$0$;
      } else {
        tmp1 = false;
      }
      scrut = tmp1;
      if (scrut === true) {
        tmp2 = getNodeSize(arg$Branch2$1$);
        scrut1 = idx < tmp2;
        if (scrut1 === true) {
          node = arg$Branch2$1$;
          continue loopLabel
        }
        tmp3 = getNodeSize(arg$Branch2$1$);
        tmp4 = idx - tmp3;
        idx = tmp4;
        node = arg$Branch2$2$;
        continue loopLabel;
      }
      return Option.None;
    } else if (node instanceof Branch31.class) {
      arg$Branch3$0$ = node.size;
      arg$Branch3$1$ = node.e1;
      arg$Branch3$2$ = node.e2;
      arg$Branch3$3$ = node.e3;
      tmp5 = idx >= 0;
      if (tmp5 === true) {
        tmp6 = idx < arg$Branch3$0$;
      } else {
        tmp6 = false;
      }
      scrut2 = tmp6;
      if (scrut2 === true) {
        tmp7 = getNodeSize(arg$Branch3$1$);
        scrut3 = idx < tmp7;
        if (scrut3 === true) {
          node = arg$Branch3$1$;
          continue loopLabel
        }
        tmp8 = getNodeSize(arg$Branch3$1$);
        tmp9 = getNodeSize(arg$Branch3$2$);
        tmp10 = tmp8 + tmp9;
        scrut4 = idx < tmp10;
        if (scrut4 === true) {
          tmp11 = getNodeSize(arg$Branch3$1$);
          tmp12 = idx - tmp11;
          idx = tmp12;
          node = arg$Branch3$2$;
          continue loopLabel
        }
        tmp13 = getNodeSize(arg$Branch3$1$);
        tmp14 = idx - tmp13;
        tmp15 = getNodeSize(arg$Branch3$2$);
        tmp16 = tmp14 - tmp15;
        idx = tmp16;
        node = arg$Branch3$3$;
        continue loopLabel;
      }
      return Option.None;
    }
    scrut5 = idx == 0;
    if (scrut5 === true) {
      return Option.Some(node)
    }
    return Option.None;
  }
};
repeatPopFront = function repeatPopFront(n) {
  return (xs) => {
    let scrut, arg$View$1$, tmp, tmp1;
    if (n === 0) {
      return xs
    }
    scrut = FingerTreeList1.popFront(xs);
    if (scrut instanceof Nil1.class) {
      return xs
    } else if (scrut instanceof View1.class) {
      arg$View$1$ = scrut.rest;
      tmp = n - 1;
      tmp1 = repeatPopFront(tmp);
      return runtime.safeCall(tmp1(arg$View$1$))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
repeatPopBack = function repeatPopBack(n) {
  return (xs) => {
    let scrut, arg$View$1$, tmp, tmp1;
    if (n === 0) {
      return xs
    }
    scrut = FingerTreeList1.popBack(xs);
    if (scrut instanceof Nil1.class) {
      return xs
    } else if (scrut instanceof View1.class) {
      arg$View$1$ = scrut.rest;
      tmp = n - 1;
      tmp1 = repeatPopBack(tmp);
      return runtime.safeCall(tmp1(arg$View$1$))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
Branch21 = function Branch2(size, e1, e2) {
  return globalThis.Object.freeze(new Branch2.class(size, e1, e2));
};
(class Branch2 {
  static {
    Branch21.class = this
  }
  constructor(size, e1, e2) {
    this.size = size;
    this.e1 = e1;
    this.e2 = e2;
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Branch2", ["size", "e1", "e2"]]; 
});
Branch31 = function Branch3(size, e1, e2, e3) {
  return globalThis.Object.freeze(new Branch3.class(size, e1, e2, e3));
};
(class Branch3 {
  static {
    Branch31.class = this
  }
  constructor(size, e1, e2, e3) {
    this.size = size;
    this.e1 = e1;
    this.e2 = e2;
    this.e3 = e3;
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Branch3", ["size", "e1", "e2", "e3"]]; 
});
(class Nil {
  static {
    new this
  }
  constructor() {
    Nil1 = this;
    Object.defineProperty(this, "class", {
      value: Nil
    });
    globalThis.Object.freeze(this);
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["object", "Nil"]; 
});
View1 = function View(e1, rest) {
  return globalThis.Object.freeze(new View.class(e1, rest));
};
(class View {
  static {
    View1.class = this
  }
  constructor(e1, rest) {
    this.e1 = e1;
    this.rest = rest;
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "View", ["e1", "rest"]]; 
});
(class FingerTree extends Iter.IterableBase {
  static {
    FingerTree1 = this
  }
  constructor() {
    super();
  }
  iterator() {
    let current, lambda;
    current = this;
    lambda = (undefined, function () {
      let scrut, arg$View$0$, arg$View$1$;
      scrut = FingerTreeList1.popFront(current);
      if (scrut instanceof Nil1.class) {
        return Iter.Result.Done
      } else if (scrut instanceof View1.class) {
        arg$View$0$ = scrut.e1;
        arg$View$1$ = scrut.rest;
        current = arg$View$1$;
        return Iter.Result.Next(arg$View$0$)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return Iter.Iterator(lambda)
  } 
  toString() {
    let tmp, tmp1;
    tmp = Iter.joined(this, ", ");
    tmp1 = "[" + tmp;
    return tmp1 + "]"
  } 
  get length() {
    return FingerTreeList1.length(this);
  } 
  at(i) {
    let tmp;
    tmp = FingerTreeList1.get(i);
    return runtime.safeCall(tmp(this))
  } 
  concat(other) {
    return FingerTreeList1.concat(this, other)
  } 
  slice(beg, end) {
    let len, scrut, scrut1, scrut2, tmp, tmp1, tmp2, tmp3;
    len = this.length;
    tmp = normIdxSlice(beg, len);
    beg = tmp;
    tmp1 = normIdxSlice(end, len);
    end = tmp1;
    scrut = tmp >= len;
    if (scrut === true) {
      return Empty1
    }
    scrut1 = tmp1 >= len;
    if (scrut1 === true) {
      end = len;
    }
    scrut2 = end <= tmp;
    if (scrut2 === true) {
      return Empty1
    }
    tmp2 = len - end;
    tmp3 = FingerTreeList1.dropLeftRight(tmp, tmp2);
    return runtime.safeCall(tmp3(this));
  }
  [prettyPrint]() { return this.toString(); }
  static [definitionMetadata] = ["class", "FingerTree"]; 
});
(class Empty extends FingerTree1 {
  static {
    new this
  }
  constructor() {
    super();
    Empty1 = this;
    Object.defineProperty(this, "class", {
      value: Empty
    });
    globalThis.Object.freeze(this);
  }
  toString() {
    let tmp, tmp1;
    tmp = Iter.joined(this, ", ");
    tmp1 = "[" + tmp;
    return tmp1 + "]"
  }
  [prettyPrint]() { return this.toString(); }
  static [definitionMetadata] = ["object", "Empty"]; 
});
Single1 = function Single(e) {
  return globalThis.Object.freeze(new Single.class(e));
};
(class Single extends FingerTree1 {
  static {
    Single1.class = this
  }
  constructor(e) {
    super();
    this.e = e;
  }
  toString() {
    let tmp, tmp1;
    tmp = Iter.joined(this, ", ");
    tmp1 = "[" + tmp;
    return tmp1 + "]"
  }
  [prettyPrint]() { return this.toString(); }
  static [definitionMetadata] = ["class", "Single", ["e"]]; 
});
Deep1 = function Deep(size, prefix, middle, suffix) {
  return globalThis.Object.freeze(new Deep.class(size, prefix, middle, suffix));
};
(class Deep extends FingerTree1 {
  static {
    Deep1.class = this
  }
  constructor(size, prefix, middle, suffix) {
    super();
    this.size = size;
    this.prefix = prefix;
    this.middle = middle;
    this.suffix = suffix;
  }
  toString() {
    let tmp, tmp1, tmp2;
    tmp = globalThis.Object.freeze([
      ...this
    ]);
    tmp1 = runtime.safeCall(tmp.join(", "));
    tmp2 = "[" + tmp1;
    return tmp2 + "]"
  }
  [prettyPrint]() { return this.toString(); }
  static [definitionMetadata] = ["class", "Deep", ["size", "prefix", "middle", "suffix"]]; 
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
(class FingerTreeList {
  static {
    FingerTreeList1 = this
  }
  static {
    this.__split = SpliceMarker1;
  }
  static toFingerTree(xs) {
    if (xs instanceof FingerTree1) {
      return xs
    }
    return FingerTreeList.mk(...xs);
  } 
  static cons(x, xs) {
    let scrut, scrut1, arg$Deep$0$, arg$Deep$1$, arg$Deep$2$, arg$Deep$3$, arg$Single$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17;
    scrut = FingerTreeList.toFingerTree(xs);
    if (scrut instanceof Empty1.class) {
      return Single1(x)
    } else if (scrut instanceof Single1.class) {
      arg$Single$0$ = scrut.e;
      tmp = getNodeSize(arg$Single$0$);
      tmp1 = getNodeSize(x);
      tmp2 = tmp + tmp1;
      tmp3 = globalThis.Object.freeze([
        x
      ]);
      tmp4 = globalThis.Object.freeze([
        arg$Single$0$
      ]);
      return Deep1(tmp2, tmp3, Empty1, tmp4)
    } else if (scrut instanceof Deep1.class) {
      arg$Deep$0$ = scrut.size;
      arg$Deep$1$ = scrut.prefix;
      arg$Deep$2$ = scrut.middle;
      arg$Deep$3$ = scrut.suffix;
      scrut1 = arg$Deep$1$.length >= 4;
      if (scrut1 === true) {
        tmp5 = getNodeSize(x);
        tmp6 = arg$Deep$0$ + tmp5;
        tmp7 = globalThis.Object.freeze([
          x,
          arg$Deep$1$[0]
        ]);
        tmp8 = getNodeSize(arg$Deep$1$[1]);
        tmp9 = getNodeSize(arg$Deep$1$[2]);
        tmp10 = tmp8 + tmp9;
        tmp11 = getNodeSize(arg$Deep$1$[3]);
        tmp12 = tmp10 + tmp11;
        tmp13 = Branch31(tmp12, arg$Deep$1$[1], arg$Deep$1$[2], arg$Deep$1$[3]);
        tmp14 = FingerTreeList.cons(tmp13, arg$Deep$2$);
        return Deep1(tmp6, tmp7, tmp14, arg$Deep$3$)
      }
      tmp15 = getNodeSize(x);
      tmp16 = arg$Deep$0$ + tmp15;
      tmp17 = globalThis.Object.freeze([
        x,
        ...arg$Deep$1$
      ]);
      return Deep1(tmp16, tmp17, arg$Deep$2$, arg$Deep$3$);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static snoc(xs, x) {
    let scrut, scrut1, arg$Deep$0$, arg$Deep$1$, arg$Deep$2$, arg$Deep$3$, arg$Single$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17;
    scrut = FingerTreeList.toFingerTree(xs);
    if (scrut instanceof Empty1.class) {
      return Single1(x)
    } else if (scrut instanceof Single1.class) {
      arg$Single$0$ = scrut.e;
      tmp = getNodeSize(arg$Single$0$);
      tmp1 = getNodeSize(x);
      tmp2 = tmp + tmp1;
      tmp3 = globalThis.Object.freeze([
        arg$Single$0$
      ]);
      tmp4 = globalThis.Object.freeze([
        x
      ]);
      return Deep1(tmp2, tmp3, Empty1, tmp4)
    } else if (scrut instanceof Deep1.class) {
      arg$Deep$0$ = scrut.size;
      arg$Deep$1$ = scrut.prefix;
      arg$Deep$2$ = scrut.middle;
      arg$Deep$3$ = scrut.suffix;
      scrut1 = arg$Deep$3$.length >= 4;
      if (scrut1 === true) {
        tmp5 = getNodeSize(x);
        tmp6 = arg$Deep$0$ + tmp5;
        tmp7 = getNodeSize(arg$Deep$3$[0]);
        tmp8 = getNodeSize(arg$Deep$3$[1]);
        tmp9 = tmp7 + tmp8;
        tmp10 = getNodeSize(arg$Deep$3$[2]);
        tmp11 = tmp9 + tmp10;
        tmp12 = Branch31(tmp11, arg$Deep$3$[0], arg$Deep$3$[1], arg$Deep$3$[2]);
        tmp13 = FingerTreeList.snoc(arg$Deep$2$, tmp12);
        tmp14 = globalThis.Object.freeze([
          arg$Deep$3$[3],
          x
        ]);
        return Deep1(tmp6, arg$Deep$1$, tmp13, tmp14)
      }
      tmp15 = getNodeSize(x);
      tmp16 = arg$Deep$0$ + tmp15;
      tmp17 = globalThis.Object.freeze([
        ...arg$Deep$3$,
        x
      ]);
      return Deep1(tmp16, arg$Deep$1$, arg$Deep$2$, tmp17);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static mk(...args) {
    let lambda;
    lambda = (undefined, function (acc, x) {
      return FingerTreeList.snoc(acc, x)
    });
    return args.reduce(lambda, Empty1)
  } 
  static get isEmpty() {
    let lambda;
    lambda = (undefined, function (caseScrut) {
      if (caseScrut instanceof Empty1.class) {
        return true
      }
      return false;
    });
    return lambda;
  } 
  static get length() {
    let lambda;
    lambda = (undefined, function (caseScrut) {
      let arg$Deep$0$, arg$Single$0$;
      if (caseScrut instanceof globalThis.Array) {
        return caseScrut.length
      } else if (caseScrut instanceof Empty1.class) {
        return 0
      } else if (caseScrut instanceof Single1.class) {
        arg$Single$0$ = caseScrut.e;
        return getNodeSize(arg$Single$0$)
      } else if (caseScrut instanceof Deep1.class) {
        arg$Deep$0$ = caseScrut.size;
        return arg$Deep$0$
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return lambda;
  } 
  static popFront(ft) {
    let scrut, ay, scrut1, arg$Deep$0$, arg$Deep$1$, arg$Deep$2$, arg$Deep$3$, middleElements, element0$, arg$Single$0$, arg$View$0$, arg$View$1$, lastElement1$, middleElements1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    scrut = FingerTreeList.toFingerTree(ft);
    if (scrut instanceof Empty1.class) {
      return Nil1
    } else if (scrut instanceof Single1.class) {
      arg$Single$0$ = scrut.e;
      return View1(arg$Single$0$, Empty1)
    } else if (scrut instanceof Deep1.class) {
      arg$Deep$0$ = scrut.size;
      arg$Deep$1$ = scrut.prefix;
      arg$Deep$2$ = scrut.middle;
      arg$Deep$3$ = scrut.suffix;
      if (runtime.Tuple.isArrayLike(arg$Deep$1$) && arg$Deep$1$.length === 1) {
        element0$ = runtime.Tuple.get(arg$Deep$1$, 0);
        ay = arg$Deep$3$;
        scrut1 = FingerTreeList.popFront(arg$Deep$2$);
        if (scrut1 instanceof Nil1.class) {
          if (runtime.Tuple.isArrayLike(ay) && ay.length === 1) {
            element0$1 = runtime.Tuple.get(arg$Deep$3$, 0);
            tmp = Single1(element0$1);
            return View1(element0$, tmp)
          } else if (runtime.Tuple.isArrayLike(ay) && ay.length >= 1) {
            middleElements1 = runtime.Tuple.slice(arg$Deep$3$, 0, 1);
            lastElement1$ = runtime.Tuple.get(arg$Deep$3$, -1);
            tmp1 = getNodeSize(element0$);
            tmp2 = arg$Deep$0$ - tmp1;
            tmp3 = globalThis.Object.freeze([
              lastElement1$
            ]);
            tmp4 = Deep1(tmp2, middleElements1, Empty1, tmp3);
            return View1(element0$, tmp4)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        } else if (scrut1 instanceof View1.class) {
          arg$View$0$ = scrut1.e1;
          arg$View$1$ = scrut1.rest;
          tmp5 = getNodeSize(element0$);
          tmp6 = arg$Deep$0$ - tmp5;
          tmp7 = arrayOfNode(arg$View$0$);
          tmp8 = Deep1(tmp6, tmp7, arg$View$1$, arg$Deep$3$);
          return View1(element0$, tmp8)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      } else if (runtime.Tuple.isArrayLike(arg$Deep$1$) && arg$Deep$1$.length >= 1) {
        element0$ = runtime.Tuple.get(arg$Deep$1$, 0);
        middleElements = runtime.Tuple.slice(arg$Deep$1$, 1, 0);
        tmp9 = getNodeSize(element0$);
        tmp10 = arg$Deep$0$ - tmp9;
        tmp11 = Deep1(tmp10, middleElements, arg$Deep$2$, arg$Deep$3$);
        return View1(element0$, tmp11)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static popBack(ft) {
    let scrut, ax, scrut1, arg$Deep$0$, arg$Deep$1$, arg$Deep$2$, arg$Deep$3$, lastElement1$, middleElements, element0$, arg$Single$0$, arg$View$0$, arg$View$1$, middleElements1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    scrut = FingerTreeList.toFingerTree(ft);
    if (scrut instanceof Empty1.class) {
      return Nil1
    } else if (scrut instanceof Single1.class) {
      arg$Single$0$ = scrut.e;
      return View1(arg$Single$0$, Empty1)
    } else if (scrut instanceof Deep1.class) {
      arg$Deep$0$ = scrut.size;
      arg$Deep$1$ = scrut.prefix;
      arg$Deep$2$ = scrut.middle;
      arg$Deep$3$ = scrut.suffix;
      if (runtime.Tuple.isArrayLike(arg$Deep$3$) && arg$Deep$3$.length === 1) {
        element0$ = runtime.Tuple.get(arg$Deep$3$, 0);
        ax = arg$Deep$1$;
        scrut1 = FingerTreeList.popBack(arg$Deep$2$);
        if (scrut1 instanceof Nil1.class) {
          if (runtime.Tuple.isArrayLike(ax) && ax.length === 1) {
            element0$1 = runtime.Tuple.get(arg$Deep$1$, 0);
            tmp = Single1(element0$1);
            return View1(element0$, tmp)
          } else if (runtime.Tuple.isArrayLike(ax) && ax.length >= 1) {
            element0$1 = runtime.Tuple.get(arg$Deep$1$, 0);
            middleElements1 = runtime.Tuple.slice(arg$Deep$1$, 1, 0);
            tmp1 = getNodeSize(element0$);
            tmp2 = arg$Deep$0$ - tmp1;
            tmp3 = globalThis.Object.freeze([
              element0$1
            ]);
            tmp4 = Deep1(tmp2, tmp3, Empty1, middleElements1);
            return View1(element0$, tmp4)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        } else if (scrut1 instanceof View1.class) {
          arg$View$0$ = scrut1.e1;
          arg$View$1$ = scrut1.rest;
          tmp5 = getNodeSize(element0$);
          tmp6 = arg$Deep$0$ - tmp5;
          tmp7 = arrayOfNode(arg$View$0$);
          tmp8 = Deep1(tmp6, arg$Deep$1$, arg$View$1$, tmp7);
          return View1(element0$, tmp8)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      } else if (runtime.Tuple.isArrayLike(arg$Deep$3$) && arg$Deep$3$.length >= 1) {
        middleElements = runtime.Tuple.slice(arg$Deep$3$, 0, 1);
        lastElement1$ = runtime.Tuple.get(arg$Deep$3$, -1);
        tmp9 = getNodeSize(lastElement1$);
        tmp10 = arg$Deep$0$ - tmp9;
        tmp11 = Deep1(tmp10, arg$Deep$1$, arg$Deep$2$, middleElements);
        return View1(lastElement1$, tmp11)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static concat(ft1, ft2) {
    let tmp, tmp1, tmp2;
    tmp = FingerTreeList.toFingerTree(ft1);
    tmp1 = globalThis.Object.freeze([]);
    tmp2 = FingerTreeList.toFingerTree(ft2);
    return concatMiddle(tmp, tmp1, tmp2)
  } 
  static ith(idx) {
    let lambda;
    lambda = (undefined, function (caseScrut) {
      let scrut, scrut1, scrut2, arg$Deep$0$, arg$Deep$1$, arg$Deep$2$, arg$Deep$3$, arg$Single$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
      if (caseScrut instanceof Empty1.class) {
        return Option.None
      } else if (caseScrut instanceof Single1.class) {
        arg$Single$0$ = caseScrut.e;
        return ithNode(idx, arg$Single$0$)
      } else if (caseScrut instanceof Deep1.class) {
        arg$Deep$0$ = caseScrut.size;
        arg$Deep$1$ = caseScrut.prefix;
        arg$Deep$2$ = caseScrut.middle;
        arg$Deep$3$ = caseScrut.suffix;
        tmp = idx >= 0;
        if (tmp === true) {
          tmp1 = idx < arg$Deep$0$;
        } else {
          tmp1 = false;
        }
        scrut = tmp1;
        if (scrut === true) {
          tmp2 = getAffixSize(arg$Deep$1$);
          scrut1 = idx < tmp2;
          if (scrut1 === true) {
            return ithAffixElement(idx, arg$Deep$1$)
          }
          tmp3 = getAffixSize(arg$Deep$1$);
          tmp4 = FingerTreeList.length(arg$Deep$2$);
          tmp5 = tmp3 + tmp4;
          scrut2 = idx < tmp5;
          if (scrut2 === true) {
            tmp6 = getAffixSize(arg$Deep$1$);
            tmp7 = idx - tmp6;
            tmp8 = FingerTreeList.ith(tmp7);
            return runtime.safeCall(tmp8(arg$Deep$2$))
          }
          tmp9 = getAffixSize(arg$Deep$1$);
          tmp10 = idx - tmp9;
          tmp11 = FingerTreeList.length(arg$Deep$2$);
          tmp12 = tmp10 - tmp11;
          return ithAffixElement(tmp12, arg$Deep$3$);
        }
        return Option.None;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return lambda
  } 
  static get(idx) {
    let lambda;
    lambda = (undefined, function (caseScrut) {
      let scrut, arg$Some$0$, tmp, tmp1;
      if (caseScrut instanceof globalThis.Array) {
        return runtime.safeCall(caseScrut.at(idx))
      } else if (caseScrut instanceof FingerTree1) {
        let idx1, inlinedVal, scrut1;
        tmp = FingerTreeList.length(caseScrut);
        idx1 = idx;
        scrut1 = idx1 < 0;
        if (scrut1 === true) {
          inlinedVal = idx1 + tmp;
        } else {
          inlinedVal = idx1;
        }
        tmp1 = FingerTreeList.ith(inlinedVal);
        scrut = runtime.safeCall(tmp1(caseScrut));
        if (scrut instanceof Option.None.class) {
          throw "get: index out of bounds"
        } else if (scrut instanceof Option.Some.class) {
          arg$Some$0$ = scrut.value;
          return arg$Some$0$
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return lambda
  } 
  static toArray(ft) {
    return globalThis.Object.freeze([
      ...ft
    ])
  } 
  static dropLeftRight(beg, end) {
    return (und) => {
      let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
      tmp = beg < 0;
      if (tmp === false) {
        tmp1 = end < 0;
      } else {
        tmp1 = true;
      }
      if (tmp1 === false) {
        tmp3 = beg + end;
        tmp4 = FingerTreeList.length(und);
        tmp2 = tmp3 > tmp4;
      } else {
        tmp2 = true;
      }
      scrut = tmp2;
      if (scrut === true) {
        throw "dropLeftRight: index out of bounds"
      }
      tmp5 = repeatPopFront(beg);
      tmp6 = repeatPopBack(end);
      tmp7 = FingerTreeList.toFingerTree(und);
      tmp8 = runtime.safeCall(tmp6(tmp7));
      return runtime.safeCall(tmp5(tmp8));
    }
  } 
  static isFingerTree(xs) {
    if (xs instanceof FingerTree1) {
      return true
    }
    return false;
  } 
  static __markerConcat(...arr) {
    let acc, idx;
    acc = FingerTreeList1.mk();
    idx = 0;
    lbl: while (true) {
      let scrut, scrut1, ftl, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
      scrut = idx < arr.length;
      if (scrut === true) {
        scrut1 = arr.at(idx);
        if (scrut1 instanceof SpliceMarker1.class) {
          tmp = idx + 1;
          ftl = arr.at(tmp);
          tmp1 = FingerTreeList.toFingerTree(ftl);
          tmp2 = FingerTreeList.concat(acc, tmp1);
          acc = tmp2;
          tmp3 = idx + 2;
          idx = tmp3;
          continue lbl
        }
        tmp4 = FingerTreeList.snoc(acc, arr.at(idx));
        acc = tmp4;
        tmp5 = idx + 1;
        idx = tmp5;
        continue lbl;
      }
      break;
    }
    return acc
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "FingerTreeList"]; 
});
let FingerTreeList = FingerTreeList1; export default FingerTreeList;
