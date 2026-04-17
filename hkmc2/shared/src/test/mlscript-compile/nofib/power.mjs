const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let power1;
(class power {
  static {
    power1 = this
  }
  static {
    (class Pss {
      static {
        power.Pss = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Pss"]; 
    });
    this.Pc = function Pc(f, s) {
      return globalThis.Object.freeze(new Pc.class(f, s));
    };
    (class Pc extends power.Pss {
      static {
        power.Pc.class = this
      }
      constructor(f, s) {
        super();
        this.f = f;
        this.s = s;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Pc", ["f", "s"]]; 
    });
    (class Pz extends power.Pss {
      static {
        new this
      }
      constructor() {
        super();
        power.Pz = this;
        Object.defineProperty(this, "class", {
          value: Pz
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Pz"]; 
    });
  }
  static list() {
    let lambda;
    lambda = (undefined, function () {
      let tmp;
      tmp = power.list();
      return power.Pc(1, tmp)
    });
    return NofibPrelude.lazy(lambda)
  } 
  static x_() {
    let lambda;
    lambda = (undefined, function () {
      let lambda1, tmp;
      lambda1 = (undefined, function () {
        let lambda2, tmp1;
        lambda2 = (undefined, function () {
          return power.Pz
        });
        tmp1 = NofibPrelude.lazy(lambda2);
        return power.Pc(1, tmp1)
      });
      tmp = NofibPrelude.lazy(lambda1);
      return power.Pc(0, tmp)
    });
    return NofibPrelude.lazy(lambda)
  } 
  static fromIntegerPs(c) {
    let scrut, lambda, lambda1;
    scrut = c == 0;
    if (scrut === true) {
      lambda = (undefined, function () {
        return power.Pz
      });
      return NofibPrelude.lazy(lambda)
    }
    lambda1 = (undefined, function () {
      let lambda2, tmp;
      lambda2 = (undefined, function () {
        return power.Pz
      });
      tmp = NofibPrelude.lazy(lambda2);
      return power.Pc(c, tmp)
    });
    return NofibPrelude.lazy(lambda1);
  } 
  static extract(n, ps) {
    let scrut, scrut1, arg$Pc$0$, arg$Pc$1$, tmp, tmp1;
    scrut = n == 0;
    if (scrut === true) {
      return NofibPrelude.Nil
    }
    scrut1 = NofibPrelude.force(ps);
    if (scrut1 instanceof power.Pz.class) {
      return NofibPrelude.Nil
    } else if (scrut1 instanceof power.Pc.class) {
      arg$Pc$0$ = scrut1.f;
      arg$Pc$1$ = scrut1.s;
      tmp = n - 1;
      tmp1 = power.extract(tmp, arg$Pc$1$);
      return NofibPrelude.Cons(arg$Pc$0$, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static dotMult(c, ps) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, arg$Pc$0$, arg$Pc$1$, tmp, tmp1;
      scrut = NofibPrelude.force(ps);
      if (scrut instanceof power.Pz.class) {
        return power.Pz
      } else if (scrut instanceof power.Pc.class) {
        arg$Pc$0$ = scrut.f;
        arg$Pc$1$ = scrut.s;
        tmp = c * arg$Pc$0$;
        tmp1 = power.dotMult(c, arg$Pc$1$);
        return power.Pc(tmp, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return NofibPrelude.lazy(lambda)
  } 
  static dotMultSndLz(c, ps) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, arg$Pc$0$, arg$Pc$1$, tmp, tmp1, tmp2;
      tmp = NofibPrelude.force(ps);
      scrut = NofibPrelude.force(tmp);
      if (scrut instanceof power.Pz.class) {
        return power.Pz
      } else if (scrut instanceof power.Pc.class) {
        arg$Pc$0$ = scrut.f;
        arg$Pc$1$ = scrut.s;
        tmp1 = c * arg$Pc$0$;
        tmp2 = power.dotMult(c, arg$Pc$1$);
        return power.Pc(tmp1, tmp2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return NofibPrelude.lazy(lambda)
  } 
  static negatePs(ps) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, arg$Pc$0$, arg$Pc$1$, tmp, tmp1;
      scrut = NofibPrelude.force(ps);
      if (scrut instanceof power.Pz.class) {
        return power.Pz
      } else if (scrut instanceof power.Pc.class) {
        arg$Pc$0$ = scrut.f;
        arg$Pc$1$ = scrut.s;
        tmp = - arg$Pc$0$;
        tmp1 = power.negatePs(arg$Pc$1$);
        return power.Pc(tmp, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return NofibPrelude.lazy(lambda)
  } 
  static addPs(fss, gs) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, scrut1, arg$Pc$0$, arg$Pc$1$, arg$Pc$0$1, arg$Pc$1$1, tmp, tmp1;
      scrut = NofibPrelude.force(fss);
      if (scrut instanceof power.Pz.class) {
        return NofibPrelude.force(gs)
      } else if (scrut instanceof power.Pc.class) {
        arg$Pc$0$ = scrut.f;
        arg$Pc$1$ = scrut.s;
        scrut1 = NofibPrelude.force(gs);
        if (scrut1 instanceof power.Pz.class) {
          return NofibPrelude.force(fss)
        } else if (scrut1 instanceof power.Pc.class) {
          arg$Pc$0$1 = scrut1.f;
          arg$Pc$1$1 = scrut1.s;
          tmp = arg$Pc$0$ + arg$Pc$0$1;
          tmp1 = power.addPs(arg$Pc$1$, arg$Pc$1$1);
          return power.Pc(tmp, tmp1)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return NofibPrelude.lazy(lambda)
  } 
  static minusPs(a, b) {
    let tmp;
    tmp = power.negatePs(b);
    return power.addPs(a, tmp)
  } 
  static multPs(fss, gss) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, scrut1, arg$Pc$0$, arg$Pc$1$, arg$Pc$0$1, arg$Pc$1$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
      scrut = NofibPrelude.force(fss);
      if (scrut instanceof power.Pz.class) {
        return power.Pz
      } else if (scrut instanceof power.Pc.class) {
        arg$Pc$0$ = scrut.f;
        arg$Pc$1$ = scrut.s;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power.Pz.class) {
          return power.Pz
        } else if (scrut1 instanceof power.Pc.class) {
          arg$Pc$0$1 = scrut1.f;
          arg$Pc$1$1 = scrut1.s;
          tmp = arg$Pc$0$ * arg$Pc$0$1;
          tmp1 = power.dotMult(arg$Pc$0$, arg$Pc$1$1);
          tmp2 = power.dotMult(arg$Pc$0$1, arg$Pc$1$);
          tmp3 = power.addPs(tmp1, tmp2);
          tmp4 = power.x_();
          tmp5 = power.multPs(tmp4, arg$Pc$1$);
          tmp6 = power.multPs(tmp5, arg$Pc$1$1);
          tmp7 = power.addPs(tmp3, tmp6);
          return power.Pc(tmp, tmp7)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return NofibPrelude.lazy(lambda)
  } 
  static multPsFstLz(fss, gss) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, scrut1, arg$Pc$0$, arg$Pc$1$, arg$Pc$0$1, arg$Pc$1$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
      tmp = NofibPrelude.force(fss);
      scrut = NofibPrelude.force(tmp);
      if (scrut instanceof power.Pz.class) {
        return power.Pz
      } else if (scrut instanceof power.Pc.class) {
        arg$Pc$0$ = scrut.f;
        arg$Pc$1$ = scrut.s;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power.Pz.class) {
          return power.Pz
        } else if (scrut1 instanceof power.Pc.class) {
          arg$Pc$0$1 = scrut1.f;
          arg$Pc$1$1 = scrut1.s;
          tmp1 = arg$Pc$0$ * arg$Pc$0$1;
          tmp2 = power.dotMult(arg$Pc$0$, arg$Pc$1$1);
          tmp3 = power.dotMult(arg$Pc$0$1, arg$Pc$1$);
          tmp4 = power.addPs(tmp2, tmp3);
          tmp5 = power.x_();
          tmp6 = power.multPs(tmp5, arg$Pc$1$);
          tmp7 = power.multPs(tmp6, arg$Pc$1$1);
          tmp8 = power.addPs(tmp4, tmp7);
          return power.Pc(tmp1, tmp8)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return NofibPrelude.lazy(lambda)
  } 
  static powerPs(a, n) {
    let scrut, tmp, tmp1;
    scrut = n <= 0;
    if (scrut === true) {
      return power.fromIntegerPs(1)
    }
    tmp = n - 1;
    tmp1 = power.powerPs(a, tmp);
    return power.multPs(a, tmp1);
  } 
  static divPs(fss, gss) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, scrut1, scrut2, gs, g, f, fs_, scrut3, gs1, g1, q, arg$Pc$0$, arg$Pc$1$, arg$Pc$0$1, arg$Pc$1$1, arg$Pc$0$2, arg$Pc$1$2, arg$Pc$0$3, arg$Pc$1$3, lambda1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda2, tmp6, tmp7, tmp8, tmp9, tmp10, lambda3, tmp11, tmp12;
      split_default$: {
        scrut = NofibPrelude.force(fss);
        if (scrut instanceof power.Pz.class) {
          scrut1 = NofibPrelude.force(gss);
          if (scrut1 instanceof power.Pz.class) {
            throw runtime.safeCall(globalThis.Error("power series 0/0"))
          } else if (scrut1 instanceof power.Pc.class) {
            arg$Pc$0$3 = scrut1.f;
            arg$Pc$1$3 = scrut1.s;
            if (arg$Pc$0$3 === 0) {
              lambda1 = (undefined, function () {
                return power.Pz
              });
              tmp = NofibPrelude.lazy(lambda1);
              tmp1 = power.divPs(tmp, arg$Pc$1$3);
              return NofibPrelude.force(tmp1)
            }
            return power.Pz;
          }
          return power.Pz;
        } else if (scrut instanceof power.Pc.class) {
          arg$Pc$0$ = scrut.f;
          arg$Pc$1$ = scrut.s;
          if (arg$Pc$0$ === 0) {
            scrut2 = NofibPrelude.force(gss);
            if (scrut2 instanceof power.Pc.class) {
              arg$Pc$0$2 = scrut2.f;
              arg$Pc$1$2 = scrut2.s;
              if (arg$Pc$0$2 === 0) {
                tmp2 = power.divPs(arg$Pc$1$, arg$Pc$1$2);
                return NofibPrelude.force(tmp2)
              }
              gs = arg$Pc$1$2;
              g = arg$Pc$0$2;
              tmp3 = power.dotMult(0, gs);
              tmp4 = power.negatePs(tmp3);
              tmp5 = power.addPs(arg$Pc$1$, tmp4);
              lambda2 = (undefined, function () {
                return power.Pc(g, gs)
              });
              tmp6 = NofibPrelude.lazy(lambda2);
              tmp7 = power.divPs(tmp5, tmp6);
              return power.Pc(0, tmp7);
            }
            fs_ = arg$Pc$1$;
            f = arg$Pc$0$;
            scrut3 = NofibPrelude.force(gss);
            if (scrut3 instanceof power.Pc.class) {
              arg$Pc$0$1 = scrut3.f;
              arg$Pc$1$1 = scrut3.s;
              gs1 = arg$Pc$1$1;
              g1 = arg$Pc$0$1;
            } else {
              break split_default$
            }
          } else {
            fs_ = arg$Pc$1$;
            f = arg$Pc$0$;
            scrut3 = NofibPrelude.force(gss);
            if (scrut3 instanceof power.Pc.class) {
              arg$Pc$0$1 = scrut3.f;
              arg$Pc$1$1 = scrut3.s;
              gs1 = arg$Pc$1$1;
              g1 = arg$Pc$0$1;
            } else {
              break split_default$
            }
          }
          q = f / g1;
          tmp8 = power.dotMult(q, gs1);
          tmp9 = power.negatePs(tmp8);
          tmp10 = power.addPs(fs_, tmp9);
          lambda3 = (undefined, function () {
            return power.Pc(g1, gs1)
          });
          tmp11 = NofibPrelude.lazy(lambda3);
          tmp12 = power.divPs(tmp10, tmp11);
          return power.Pc(q, tmp12)
        }
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    });
    return NofibPrelude.lazy(lambda)
  } 
  static compose_(fss, gss) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, f, scrut1, gs, arg$Pc$0$, arg$Pc$1$, arg$Pc$0$1, arg$Pc$1$1, lambda1, tmp, lambda2, tmp1, tmp2, tmp3, lambda3, tmp4, tmp5, tmp6, tmp7;
      scrut = NofibPrelude.force(fss);
      if (scrut instanceof power.Pz.class) {
        return power.Pz
      } else if (scrut instanceof power.Pc.class) {
        arg$Pc$0$ = scrut.f;
        arg$Pc$1$ = scrut.s;
        f = arg$Pc$0$;
        scrut1 = NofibPrelude.force(gss);
        if (scrut1 instanceof power.Pz.class) {
          lambda1 = (undefined, function () {
            return power.Pz
          });
          tmp = NofibPrelude.lazy(lambda1);
          return power.Pc(f, tmp)
        } else if (scrut1 instanceof power.Pc.class) {
          arg$Pc$0$1 = scrut1.f;
          arg$Pc$1$1 = scrut1.s;
          if (arg$Pc$0$1 === 0) {
            gs = arg$Pc$1$1;
            lambda2 = (undefined, function () {
              return power.Pc(0, gs)
            });
            tmp1 = NofibPrelude.lazy(lambda2);
            tmp2 = power.compose_(arg$Pc$1$, tmp1);
            tmp3 = power.multPs(gs, tmp2);
            return power.Pc(f, tmp3)
          }
        }
        lambda3 = (undefined, function () {
          let lambda4, tmp8;
          lambda4 = (undefined, function () {
            return power.Pz
          });
          tmp8 = NofibPrelude.lazy(lambda4);
          return power.Pc(f, tmp8)
        });
        tmp4 = NofibPrelude.lazy(lambda3);
        tmp5 = power.compose_(arg$Pc$1$, gss);
        tmp6 = power.multPs(gss, tmp5);
        tmp7 = power.addPs(tmp4, tmp6);
        return NofibPrelude.force(tmp7)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return NofibPrelude.lazy(lambda)
  } 
  static composeSndLz_(fss, gss) {
    let lambda;
    lambda = (undefined, function () {
      let scrut, f, scrut1, gs, arg$Pc$0$, arg$Pc$1$, arg$Pc$0$1, arg$Pc$1$1, tmp, lambda1, tmp1, lambda2, tmp2, tmp3, tmp4, lambda3, tmp5, tmp6, tmp7, tmp8;
      scrut = NofibPrelude.force(fss);
      if (scrut instanceof power.Pz.class) {
        return power.Pz
      } else if (scrut instanceof power.Pc.class) {
        arg$Pc$0$ = scrut.f;
        arg$Pc$1$ = scrut.s;
        f = arg$Pc$0$;
        tmp = NofibPrelude.force(gss);
        scrut1 = NofibPrelude.force(tmp);
        if (scrut1 instanceof power.Pz.class) {
          lambda1 = (undefined, function () {
            return power.Pz
          });
          tmp1 = NofibPrelude.lazy(lambda1);
          return power.Pc(f, tmp1)
        } else if (scrut1 instanceof power.Pc.class) {
          arg$Pc$0$1 = scrut1.f;
          arg$Pc$1$1 = scrut1.s;
          if (arg$Pc$0$1 === 0) {
            gs = arg$Pc$1$1;
            lambda2 = (undefined, function () {
              return power.Pc(0, gs)
            });
            tmp2 = NofibPrelude.lazy(lambda2);
            tmp3 = power.compose_(arg$Pc$1$, tmp2);
            tmp4 = power.multPs(gs, tmp3);
            return power.Pc(f, tmp4)
          }
        }
        lambda3 = (undefined, function () {
          let lambda4, tmp9;
          lambda4 = (undefined, function () {
            return power.Pz
          });
          tmp9 = NofibPrelude.lazy(lambda4);
          return power.Pc(f, tmp9)
        });
        tmp5 = NofibPrelude.lazy(lambda3);
        tmp6 = power.composeSndLz_(arg$Pc$1$, gss);
        tmp7 = power.multPs(gss, tmp6);
        tmp8 = power.addPs(tmp5, tmp7);
        return NofibPrelude.force(tmp8)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return NofibPrelude.lazy(lambda)
  } 
  static revert(fss) {
    let lambda;
    lambda = (undefined, function () {
      let rs, scrut, fs_, f1, scrut1, scrut2, arg$Pc$0$, arg$Pc$1$, arg$Pc$0$1, arg$Pc$1$1, tmp, tmp1, tmp2, lambda1, tmp3;
      scrut = NofibPrelude.force(fss);
      if (scrut instanceof power.Pc.class) {
        arg$Pc$0$ = scrut.f;
        arg$Pc$1$ = scrut.s;
        if (arg$Pc$0$ === 0) {
          fs_ = arg$Pc$1$;
          rs = function rs() {
            let lambda2;
            lambda2 = (undefined, function () {
              let tmp4, tmp5, tmp6, tmp7;
              tmp4 = power.fromIntegerPs(1);
              tmp5 = rs();
              tmp6 = power.compose_(fs_, tmp5);
              tmp7 = power.divPs(tmp4, tmp6);
              return power.Pc(0, tmp7)
            });
            return NofibPrelude.lazy(lambda2)
          };
          tmp = rs();
          return NofibPrelude.force(tmp)
        }
        scrut2 = NofibPrelude.force(arg$Pc$1$);
        if (scrut2 instanceof power.Pc.class) {
          arg$Pc$0$1 = scrut2.f;
          arg$Pc$1$1 = scrut2.s;
          f1 = arg$Pc$0$1;
          scrut1 = NofibPrelude.force(arg$Pc$1$1);
          if (scrut1 instanceof power.Pz.class) {
            tmp1 = 1 / f1;
            tmp2 = - tmp1;
            lambda1 = (undefined, function () {
              let tmp4, lambda2, tmp5;
              tmp4 = 1 / f1;
              lambda2 = (undefined, function () {
                return power.Pz
              });
              tmp5 = NofibPrelude.lazy(lambda2);
              return power.Pc(tmp4, tmp5)
            });
            tmp3 = NofibPrelude.lazy(lambda1);
            return power.Pc(tmp2, tmp3)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return NofibPrelude.lazy(lambda)
  } 
  static deriv(fss) {
    let lambda;
    lambda = (undefined, function () {
      let deriv1, scrut, arg$Pc$1$, tmp;
      scrut = NofibPrelude.force(fss);
      if (scrut instanceof power.Pz.class) {
        return power.Pz
      } else if (scrut instanceof power.Pc.class) {
        arg$Pc$1$ = scrut.s;
        deriv1 = function deriv1(gss, n) {
          let lambda1;
          lambda1 = (undefined, function () {
            let scrut1, arg$Pc$0$, arg$Pc$1$1, tmp1, tmp2, tmp3;
            scrut1 = NofibPrelude.force(gss);
            if (scrut1 instanceof power.Pz.class) {
              return power.Pz
            } else if (scrut1 instanceof power.Pc.class) {
              arg$Pc$0$ = scrut1.f;
              arg$Pc$1$1 = scrut1.s;
              tmp1 = n * arg$Pc$0$;
              tmp2 = n + 1;
              tmp3 = deriv1(arg$Pc$1$1, tmp2);
              return power.Pc(tmp1, tmp3)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          });
          return NofibPrelude.lazy(lambda1)
        };
        tmp = deriv1(arg$Pc$1$, 1);
        return NofibPrelude.force(tmp)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return NofibPrelude.lazy(lambda)
  } 
  static integral(fs_) {
    let int1, lambda;
    int1 = function int1(fss, n) {
      let lambda1;
      lambda1 = (undefined, function () {
        let scrut, arg$Pc$0$, arg$Pc$1$, tmp, tmp1, tmp2;
        scrut = NofibPrelude.force(fss);
        if (scrut instanceof power.Pz.class) {
          return power.Pz
        } else if (scrut instanceof power.Pc.class) {
          arg$Pc$0$ = scrut.f;
          arg$Pc$1$ = scrut.s;
          tmp = arg$Pc$0$ / n;
          tmp1 = n + 1;
          tmp2 = int1(arg$Pc$1$, tmp1);
          return power.Pc(tmp, tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      });
      return NofibPrelude.lazy(lambda1)
    };
    lambda = (undefined, function () {
      let tmp;
      tmp = int1(fs_, 1);
      return power.Pc(0, tmp)
    });
    return NofibPrelude.lazy(lambda)
  } 
  static integralLz(fs_) {
    let int1, lambda;
    int1 = function int1(fss, n) {
      let lambda1;
      lambda1 = (undefined, function () {
        let scrut, arg$Pc$0$, arg$Pc$1$, tmp, tmp1, tmp2;
        scrut = NofibPrelude.force(fss);
        if (scrut instanceof power.Pz.class) {
          return power.Pz
        } else if (scrut instanceof power.Pc.class) {
          arg$Pc$0$ = scrut.f;
          arg$Pc$1$ = scrut.s;
          tmp = arg$Pc$0$ / n;
          tmp1 = n + 1;
          tmp2 = int1(arg$Pc$1$, tmp1);
          return power.Pc(tmp, tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      });
      return NofibPrelude.lazy(lambda1)
    };
    lambda = (undefined, function () {
      let tmp, tmp1;
      tmp = runtime.safeCall(fs_());
      tmp1 = int1(tmp, 1);
      return power.Pc(0, tmp1)
    });
    return NofibPrelude.lazy(lambda)
  } 
  static sqrtPs(fss) {
    let lambda;
    lambda = (undefined, function () {
      let qs, scrut, scrut1, fs_, arg$Pc$0$, arg$Pc$1$, arg$Pc$0$1, arg$Pc$1$1, tmp, tmp1, tmp2;
      scrut = NofibPrelude.force(fss);
      if (scrut instanceof power.Pz.class) {
        return power.Pz
      } else if (scrut instanceof power.Pc.class) {
        arg$Pc$0$ = scrut.f;
        arg$Pc$1$ = scrut.s;
        switch (arg$Pc$0$) {
          case 0:
            scrut1 = NofibPrelude.force(arg$Pc$1$);
            if (scrut1 instanceof power.Pc.class) {
              arg$Pc$0$1 = scrut1.f;
              arg$Pc$1$1 = scrut1.s;
              if (arg$Pc$0$1 === 0) {
                tmp = power.sqrtPs(arg$Pc$1$1);
                return power.Pc(0, tmp)
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          case 1:
            fs_ = arg$Pc$1$;
            qs = function qs() {
              let lambda1;
              lambda1 = (undefined, function () {
                let tmp3, lambda2, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
                tmp3 = power.fromIntegerPs(1);
                lambda2 = (undefined, function () {
                  return power.Pc(1, fs_)
                });
                tmp4 = NofibPrelude.lazy(lambda2);
                tmp5 = power.deriv(tmp4);
                tmp6 = qs();
                tmp7 = power.dotMultSndLz(2, tmp6);
                tmp8 = power.divPs(tmp5, tmp7);
                tmp9 = power.integral(tmp8);
                return power.addPs(tmp3, tmp9)
              });
              return NofibPrelude.lazy(lambda1)
            };
            tmp1 = qs();
            tmp2 = NofibPrelude.force(tmp1);
            return NofibPrelude.force(tmp2);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return NofibPrelude.lazy(lambda)
  } 
  static ts() {
    let lambda;
    lambda = (undefined, function () {
      let tmp, tmp1, tmp2;
      tmp = power.ts();
      tmp1 = power.ts();
      tmp2 = power.multPs(tmp, tmp1);
      return power.Pc(1, tmp2)
    });
    return NofibPrelude.lazy(lambda)
  } 
  static tree() {
    let lambda;
    lambda = (undefined, function () {
      let tmp, lambda1, tmp1, tmp2;
      tmp = power.list();
      lambda1 = (undefined, function () {
        return power.tree()
      });
      tmp1 = NofibPrelude.lazy(lambda1);
      tmp2 = power.composeSndLz_(tmp, tmp1);
      return power.Pc(0, tmp2)
    });
    return NofibPrelude.lazy(lambda)
  } 
  static cosx() {
    let lambda, tmp, tmp1, tmp2;
    lambda = (undefined, function () {
      let lambda1, tmp3;
      lambda1 = (undefined, function () {
        return power.Pz
      });
      tmp3 = NofibPrelude.lazy(lambda1);
      return power.Pc(1, tmp3)
    });
    tmp = NofibPrelude.lazy(lambda);
    tmp1 = power.integralLz(power.cosx);
    tmp2 = power.integral(tmp1);
    return power.minusPs(tmp, tmp2)
  } 
  static sinx() {
    let lambda, tmp, tmp1, tmp2;
    lambda = (undefined, function () {
      let lambda1, tmp3;
      lambda1 = (undefined, function () {
        return power.Pz
      });
      tmp3 = NofibPrelude.lazy(lambda1);
      return power.Pc(1, tmp3)
    });
    tmp = NofibPrelude.lazy(lambda);
    tmp1 = power.integralLz(power.sinx);
    tmp2 = power.minusPs(tmp, tmp1);
    return power.integral(tmp2)
  } 
  static testPower_nofib(p) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26;
    tmp = power.sinx();
    tmp1 = power.fromIntegerPs(1);
    tmp2 = power.cosx();
    tmp3 = power.powerPs(tmp2, 2);
    tmp4 = power.minusPs(tmp1, tmp3);
    tmp5 = power.sqrtPs(tmp4);
    tmp6 = power.minusPs(tmp, tmp5);
    tmp7 = power.extract(p, tmp6);
    tmp8 = power.sinx();
    tmp9 = power.cosx();
    tmp10 = power.divPs(tmp8, tmp9);
    tmp11 = power.fromIntegerPs(1);
    tmp12 = power.fromIntegerPs(1);
    tmp13 = power.x_();
    tmp14 = power.powerPs(tmp13, 2);
    tmp15 = power.addPs(tmp12, tmp14);
    tmp16 = power.divPs(tmp11, tmp15);
    tmp17 = power.integral(tmp16);
    tmp18 = power.revert(tmp17);
    tmp19 = power.minusPs(tmp10, tmp18);
    tmp20 = power.extract(p, tmp19);
    tmp21 = (tmp7 , tmp20);
    tmp22 = power.ts();
    tmp23 = power.extract(p, tmp22);
    tmp24 = (tmp21 , tmp23);
    tmp25 = power.tree();
    tmp26 = power.extract(p, tmp25);
    return (tmp24 , tmp26)
  } 
  static main() {
    let tmp;
    tmp = power.testPower_nofib(14);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "power"]; 
});
let power = power1; export default power;
