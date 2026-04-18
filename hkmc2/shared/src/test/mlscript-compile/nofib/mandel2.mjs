const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let mandel21;
(class mandel2 {
  static {
    mandel21 = this
  }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    (class MandTree {
      static {
        mandel2.MandTree = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "MandTree"]; 
    });
    this.NS = function NS(l, r) {
      return globalThis.Object.freeze(new NS.class(l, r));
    };
    (class NS extends mandel2.MandTree {
      static {
        mandel2.NS.class = this
      }
      constructor(l, r) {
        super();
        this.l = l;
        this.r = r;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "NS", ["l", "r"]]; 
    });
    this.EW = function EW(l, r) {
      return globalThis.Object.freeze(new EW.class(l, r));
    };
    (class EW extends mandel2.MandTree {
      static {
        mandel2.EW.class = this
      }
      constructor(l, r) {
        super();
        this.l = l;
        this.r = r;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "EW", ["l", "r"]]; 
    });
    this.Leaf = function Leaf(colour) {
      return globalThis.Object.freeze(new Leaf.class(colour));
    };
    (class Leaf extends mandel2.MandTree {
      static {
        mandel2.Leaf.class = this
      }
      constructor(colour) {
        super();
        this.colour = colour;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Leaf", ["colour"]]; 
    });
    this.size = 200;
    tmp = - 2.25;
    this.pmn = tmp;
    this.pmx = 0.75;
    tmp1 = - 1.5;
    this.qmn = tmp1;
    this.qmx = 1.5;
    this.m = 20;
    this.num_cols = 26;
    tmp2 = mandel2.pmx - mandel2.pmn;
    tmp3 = mandel2.size - 1;
    tmp4 = tmp2 / tmp3;
    this.delta_p = tmp4;
    tmp5 = mandel2.qmx - mandel2.qmn;
    tmp6 = mandel2.size - 1;
    tmp7 = tmp5 / tmp6;
    this.delta_q = tmp7;
    tmp8 = globalThis.Object.freeze([
      0,
      -1
    ]);
    this.up = tmp8;
    tmp9 = globalThis.Object.freeze([
      0,
      1
    ]);
    this.down = tmp9;
    tmp10 = globalThis.Object.freeze([
      -1,
      0
    ]);
    this.left = tmp10;
    tmp11 = globalThis.Object.freeze([
      1,
      0
    ]);
    this.right = tmp11;
  }
  static equalp(p1, p2) {
    let scrut, scrut1, element1$, element0$, element1$1, element0$1;
    if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
      element0$ = runtime.Tuple.get(p1, 0);
      element1$ = runtime.Tuple.get(p1, 1);
      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
        element0$1 = runtime.Tuple.get(p2, 0);
        element1$1 = runtime.Tuple.get(p2, 1);
        scrut = element0$ == element0$1;
        if (scrut === true) {
          scrut1 = element1$ == element1$1;
          if (scrut1 === true) {
            return true
          }
          return false;
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static np(x) {
    let tmp;
    tmp = x * mandel2.delta_p;
    return mandel2.pmn + tmp
  } 
  static nq(y) {
    let tmp;
    tmp = y * mandel2.delta_q;
    return mandel2.qmn + tmp
  } 
  static radius(x, y) {
    let tmp, tmp1;
    tmp = x * x;
    tmp1 = y * y;
    return tmp + tmp1
  } 
  static new_x(x, y, p) {
    let tmp, tmp1, tmp2;
    tmp = x * x;
    tmp1 = y * y;
    tmp2 = tmp - tmp1;
    return tmp2 + p
  } 
  static new_y(x, y, q) {
    let tmp, tmp1;
    tmp = 2.0 * x;
    tmp1 = tmp * y;
    return tmp1 + q
  } 
  static finite(t) {
    let scrut, scrut1, scrut2, scrut3, arg$EW$0$, arg$EW$1$, arg$NS$0$, arg$NS$1$, arg$Leaf$0$;
    if (t instanceof mandel2.Leaf.class) {
      arg$Leaf$0$ = t.colour;
      return arg$Leaf$0$ == arg$Leaf$0$
    } else if (t instanceof mandel2.NS.class) {
      arg$NS$0$ = t.l;
      arg$NS$1$ = t.r;
      scrut = mandel2.finite(arg$NS$0$);
      if (scrut === true) {
        scrut1 = mandel2.finite(arg$NS$1$);
        if (scrut1 === true) {
          return true
        }
        return false;
      }
      return false;
    } else if (t instanceof mandel2.EW.class) {
      arg$EW$0$ = t.l;
      arg$EW$1$ = t.r;
      scrut2 = mandel2.finite(arg$EW$0$);
      if (scrut2 === true) {
        scrut3 = mandel2.finite(arg$EW$1$);
        if (scrut3 === true) {
          return true
        }
        return false;
      }
      return false;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static check_radius(p, q, k, x, y) {
    loopLabel: while (true) {
      let xn, yn, r, kp, scrut, scrut1;
      xn = mandel2.new_x(x, y, p);
      yn = mandel2.new_y(x, y, q);
      r = mandel2.radius(xn, yn);
      kp = k + 1;
      scrut = kp == mandel2.num_cols;
      if (scrut === true) {
        return 0
      }
      scrut1 = r > mandel2.m;
      if (scrut1 === true) {
        return kp
      }
      k = kp;
      x = xn;
      y = yn;
      continue loopLabel;
    }
  } 
  static point_colour(xy) {
    let element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(xy) && xy.length === 2) {
      element0$ = runtime.Tuple.get(xy, 0);
      element1$ = runtime.Tuple.get(xy, 1);
      tmp = mandel2.np(element0$);
      tmp1 = mandel2.nq(element1$);
      return mandel2.check_radius(tmp, tmp1, 0, 0.0, 0.0)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static check_perim(x1y1, x2y2) {
    let check_line, col1, y1, x1, x2, y2, scrut, col2, col3, col4, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, element1$, element0$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
    col1 = mandel2.point_colour(x1y1);
    if (runtime.Tuple.isArrayLike(x1y1) && x1y1.length === 2) {
      element0$ = runtime.Tuple.get(x1y1, 0);
      element1$ = runtime.Tuple.get(x1y1, 1);
      y1 = element1$;
      x1 = element0$;
      if (runtime.Tuple.isArrayLike(x2y2) && x2y2.length === 2) {
        element0$1 = runtime.Tuple.get(x2y2, 0);
        element1$1 = runtime.Tuple.get(x2y2, 1);
        y2 = element1$1;
        x2 = element0$1;
        check_line = function check_line(xcyc, xdyd) {
          let scrut8, scrut9, scrut10, scrut11, element1$2, element0$2, element1$3, element0$3, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17;
          if (runtime.Tuple.isArrayLike(xcyc) && xcyc.length === 2) {
            element0$2 = runtime.Tuple.get(xcyc, 0);
            element1$2 = runtime.Tuple.get(xcyc, 1);
            if (runtime.Tuple.isArrayLike(xdyd) && xdyd.length === 2) {
              element0$3 = runtime.Tuple.get(xdyd, 0);
              element1$3 = runtime.Tuple.get(xdyd, 1);
              scrut8 = mandel2.equalp(xdyd, mandel2.right);
              if (scrut8 === true) {
                tmp11 = element0$2 >= x2;
              } else {
                scrut9 = mandel2.equalp(xdyd, mandel2.down);
                if (scrut9 === true) {
                  tmp11 = element1$2 <= y2;
                } else {
                  scrut10 = mandel2.equalp(xdyd, mandel2.left);
                  if (scrut10 === true) {
                    tmp11 = element0$2 <= x1;
                  } else {
                    tmp11 = element1$2 >= y1;
                  }
                }
              }
              if (tmp11 === true) {
                return true
              }
              tmp12 = mandel2.point_colour(xcyc);
              tmp13 = tmp12 == col1;
              scrut11 = ! tmp13;
              if (scrut11 === true) {
                return false
              }
              tmp14 = element0$2 + element0$3;
              tmp15 = element1$2 + element1$3;
              tmp16 = globalThis.Object.freeze([
                tmp14,
                tmp15
              ]);
              tmp17 = globalThis.Object.freeze([
                element0$3,
                element1$3
              ]);
              return check_line(tmp16, tmp17);
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        };
        scrut = mandel2.equalp(x1y1, x2y2);
        if (scrut === true) {
          return col1
        }
        tmp = globalThis.Object.freeze([
          x2,
          y1
        ]);
        col2 = mandel2.point_colour(tmp);
        col3 = mandel2.point_colour(x2y2);
        tmp1 = globalThis.Object.freeze([
          x1,
          y2
        ]);
        col4 = mandel2.point_colour(tmp1);
        scrut1 = col1 == col2;
        if (scrut1 === true) {
          scrut3 = col1 == col3;
          if (scrut3 === true) {
            scrut2 = col1 == col4;
            if (scrut2 === true) {
              tmp2 = false;
            } else {
              tmp2 = true;
            }
          } else {
            tmp2 = true;
          }
        } else {
          tmp2 = true;
        }
        if (tmp2 === true) {
          return -1
        }
        tmp3 = x1 + 1;
        tmp4 = globalThis.Object.freeze([
          tmp3,
          y1
        ]);
        scrut4 = check_line(tmp4, mandel2.right);
        if (scrut4 === true) {
          tmp5 = y1 + 1;
          tmp6 = globalThis.Object.freeze([
            x2,
            tmp5
          ]);
          scrut7 = check_line(tmp6, mandel2.down);
          if (scrut7 === true) {
            tmp7 = x2 - 1;
            tmp8 = globalThis.Object.freeze([
              tmp7,
              y2
            ]);
            scrut6 = check_line(tmp8, mandel2.left);
            if (scrut6 === true) {
              tmp9 = y2 - 1;
              tmp10 = globalThis.Object.freeze([
                x1,
                tmp9
              ]);
              scrut5 = check_line(tmp10, mandel2.up);
              if (scrut5 === true) {
                return col1
              }
            }
          }
          return -1
        }
        return -1;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static build_tree(x1y1, x2y2) {
    let rec_col, scrut, scrut1, split_x, split_y, nsp2, nsp3, ewp2, ewp3, scrut2, element1$, element0$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    if (runtime.Tuple.isArrayLike(x1y1) && x1y1.length === 2) {
      element0$ = runtime.Tuple.get(x1y1, 0);
      element1$ = runtime.Tuple.get(x1y1, 1);
      if (runtime.Tuple.isArrayLike(x2y2) && x2y2.length === 2) {
        element0$1 = runtime.Tuple.get(x2y2, 0);
        element1$1 = runtime.Tuple.get(x2y2, 1);
        rec_col = mandel2.check_perim(x1y1, x2y2);
        tmp = rec_col == -1;
        scrut = ! tmp;
        if (scrut === true) {
          return mandel2.Leaf(rec_col)
        }
        tmp1 = element0$1 - element0$;
        tmp2 = element1$1 - element1$;
        scrut1 = tmp1 >= tmp2;
        if (scrut1 === true) {
          tmp3 = "NS";
        } else {
          tmp3 = "EW";
        }
        tmp4 = element0$1 + element0$;
        split_x = NofibPrelude.intDiv(tmp4, 2);
        tmp5 = element1$1 + element1$;
        split_y = NofibPrelude.intDiv(tmp5, 2);
        nsp2 = globalThis.Object.freeze([
          split_x,
          element1$1
        ]);
        tmp6 = split_x + 1;
        nsp3 = globalThis.Object.freeze([
          tmp6,
          element1$
        ]);
        ewp2 = globalThis.Object.freeze([
          element0$1,
          split_y
        ]);
        tmp7 = split_y + 1;
        ewp3 = globalThis.Object.freeze([
          element0$,
          tmp7
        ]);
        scrut2 = tmp3 == "NS";
        if (scrut2 === true) {
          tmp8 = mandel2.build_tree(x1y1, nsp2);
          tmp9 = mandel2.build_tree(nsp3, x2y2);
          return mandel2.NS(tmp8, tmp9)
        }
        tmp10 = mandel2.build_tree(x1y1, ewp2);
        tmp11 = mandel2.build_tree(ewp3, x2y2);
        return mandel2.EW(tmp10, tmp11);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static testMandel2_nofib(n) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = globalThis.Object.freeze([
      0,
      0
    ]);
    tmp1 = NofibPrelude.intDiv(mandel2.size, 2);
    tmp2 = globalThis.Object.freeze([
      mandel2.size,
      tmp1
    ]);
    tmp3 = mandel2.build_tree(tmp, tmp2);
    return mandel2.finite(tmp3)
  } 
  static main() {
    return mandel2.testMandel2_nofib(0)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "mandel2"]; 
});
let mandel2 = mandel21; export default mandel2;
