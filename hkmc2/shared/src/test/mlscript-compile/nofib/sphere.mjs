const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let sphere1;
(class sphere {
  static {
    sphere1 = this
  }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68;
    this.pi = globalThis.Math.PI;
    this.epsilon = 0.000001;
    this.infinity = 100000000.0;
    (class Light {
      static {
        sphere.Light = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Light"]; 
    });
    this.Directional = function Directional(x, y) {
      return globalThis.Object.freeze(new Directional.class(x, y));
    };
    (class Directional extends sphere.Light {
      static {
        sphere.Directional.class = this
      }
      constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Directional", ["x", "y"]]; 
    });
    this.Point = function Point(x, y) {
      return globalThis.Object.freeze(new Point.class(x, y));
    };
    (class Point extends sphere.Light {
      static {
        sphere.Point.class = this
      }
      constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Point", ["x", "y"]]; 
    });
    (class Surfspec {
      static {
        sphere.Surfspec = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Surfspec"]; 
    });
    this.Ambient = function Ambient(v) {
      return globalThis.Object.freeze(new Ambient.class(v));
    };
    (class Ambient extends sphere.Surfspec {
      static {
        sphere.Ambient.class = this
      }
      constructor(v) {
        super();
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ambient", ["v"]]; 
    });
    this.Diffuse = function Diffuse(v) {
      return globalThis.Object.freeze(new Diffuse.class(v));
    };
    (class Diffuse extends sphere.Surfspec {
      static {
        sphere.Diffuse.class = this
      }
      constructor(v) {
        super();
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Diffuse", ["v"]]; 
    });
    this.Specular = function Specular(v) {
      return globalThis.Object.freeze(new Specular.class(v));
    };
    (class Specular extends sphere.Surfspec {
      static {
        sphere.Specular.class = this
      }
      constructor(v) {
        super();
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Specular", ["v"]]; 
    });
    this.Specpow = function Specpow(v) {
      return globalThis.Object.freeze(new Specpow.class(v));
    };
    (class Specpow extends sphere.Surfspec {
      static {
        sphere.Specpow.class = this
      }
      constructor(v) {
        super();
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Specpow", ["v"]]; 
    });
    this.Reflect = function Reflect(v) {
      return globalThis.Object.freeze(new Reflect.class(v));
    };
    (class Reflect extends sphere.Surfspec {
      static {
        sphere.Reflect.class = this
      }
      constructor(v) {
        super();
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Reflect", ["v"]]; 
    });
    this.Transmit = function Transmit(v) {
      return globalThis.Object.freeze(new Transmit.class(v));
    };
    (class Transmit extends sphere.Surfspec {
      static {
        sphere.Transmit.class = this
      }
      constructor(v) {
        super();
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Transmit", ["v"]]; 
    });
    this.Refract = function Refract(v) {
      return globalThis.Object.freeze(new Refract.class(v));
    };
    (class Refract extends sphere.Surfspec {
      static {
        sphere.Refract.class = this
      }
      constructor(v) {
        super();
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Refract", ["v"]]; 
    });
    this.Body = function Body(v) {
      return globalThis.Object.freeze(new Body.class(v));
    };
    (class Body extends sphere.Surfspec {
      static {
        sphere.Body.class = this
      }
      constructor(v) {
        super();
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Body", ["v"]]; 
    });
    this.Sphere = function Sphere(pos, radius, surface) {
      return globalThis.Object.freeze(new Sphere.class(pos, radius, surface));
    };
    (class Sphere {
      static {
        sphere.Sphere.class = this
      }
      constructor(pos, radius, surface) {
        this.pos = pos;
        this.radius = radius;
        this.surface = surface;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Sphere", ["pos", "radius", "surface"]]; 
    });
    tmp = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    this.lookat = tmp;
    tmp1 = globalThis.Object.freeze([
      0.0,
      0.0,
      1.0
    ]);
    this.vup = tmp1;
    this.fov = 45.0;
    tmp2 = globalThis.Object.freeze([
      0.035,
      0.0325,
      0.025
    ]);
    tmp3 = sphere.Ambient(tmp2);
    tmp4 = globalThis.Object.freeze([
      0.5,
      0.45,
      0.35
    ]);
    tmp5 = sphere.Diffuse(tmp4);
    tmp6 = globalThis.Object.freeze([
      0.8,
      0.8,
      0.8
    ]);
    tmp7 = sphere.Specular(tmp6);
    tmp8 = sphere.Specpow(3.0);
    tmp9 = sphere.Reflect(0.5);
    tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
    tmp11 = NofibPrelude.Cons(tmp8, tmp10);
    tmp12 = NofibPrelude.Cons(tmp7, tmp11);
    tmp13 = NofibPrelude.Cons(tmp5, tmp12);
    tmp14 = NofibPrelude.Cons(tmp3, tmp13);
    this.s2 = tmp14;
    tmp15 = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    tmp16 = sphere.Sphere(tmp15, 0.5, sphere.s2);
    tmp17 = globalThis.Object.freeze([
      0.272166,
      0.272166,
      0.544331
    ]);
    tmp18 = sphere.Sphere(tmp17, 0.166667, sphere.s2);
    tmp19 = globalThis.Object.freeze([
      0.643951,
      0.172546,
      0.0
    ]);
    tmp20 = sphere.Sphere(tmp19, 0.166667, sphere.s2);
    tmp21 = globalThis.Object.freeze([
      0.172546,
      0.643951,
      0.0
    ]);
    tmp22 = sphere.Sphere(tmp21, 0.166667, sphere.s2);
    tmp23 = - 0.371785;
    tmp24 = globalThis.Object.freeze([
      tmp23,
      0.0996195,
      0.544331
    ]);
    tmp25 = sphere.Sphere(tmp24, 0.166667, sphere.s2);
    tmp26 = - 0.471405;
    tmp27 = globalThis.Object.freeze([
      tmp26,
      0.471405,
      0.0
    ]);
    tmp28 = sphere.Sphere(tmp27, 0.166667, sphere.s2);
    tmp29 = - 0.643951;
    tmp30 = - 0.172546;
    tmp31 = globalThis.Object.freeze([
      tmp29,
      tmp30,
      0.0
    ]);
    tmp32 = sphere.Sphere(tmp31, 0.166667, sphere.s2);
    tmp33 = - 0.371785;
    tmp34 = globalThis.Object.freeze([
      0.0996195,
      tmp33,
      0.544331
    ]);
    tmp35 = sphere.Sphere(tmp34, 0.166667, sphere.s2);
    tmp36 = - 0.172546;
    tmp37 = - 0.643951;
    tmp38 = globalThis.Object.freeze([
      tmp36,
      tmp37,
      0.0
    ]);
    tmp39 = sphere.Sphere(tmp38, 0.166667, sphere.s2);
    tmp40 = - 0.471405;
    tmp41 = globalThis.Object.freeze([
      0.471405,
      tmp40,
      0.0
    ]);
    tmp42 = sphere.Sphere(tmp41, 0.166667, sphere.s2);
    tmp43 = NofibPrelude.Cons(tmp42, NofibPrelude.Nil);
    tmp44 = NofibPrelude.Cons(tmp39, tmp43);
    tmp45 = NofibPrelude.Cons(tmp35, tmp44);
    tmp46 = NofibPrelude.Cons(tmp32, tmp45);
    tmp47 = NofibPrelude.Cons(tmp28, tmp46);
    tmp48 = NofibPrelude.Cons(tmp25, tmp47);
    tmp49 = NofibPrelude.Cons(tmp22, tmp48);
    tmp50 = NofibPrelude.Cons(tmp20, tmp49);
    tmp51 = NofibPrelude.Cons(tmp18, tmp50);
    tmp52 = NofibPrelude.Cons(tmp16, tmp51);
    this.testspheres = tmp52;
    tmp53 = globalThis.Object.freeze([
      4.0,
      3.0,
      2.0
    ]);
    tmp54 = globalThis.Object.freeze([
      0.288675,
      0.288675,
      0.288675
    ]);
    tmp55 = sphere.Point(tmp53, tmp54);
    tmp56 = - 4.0;
    tmp57 = globalThis.Object.freeze([
      1.0,
      tmp56,
      4.0
    ]);
    tmp58 = globalThis.Object.freeze([
      0.288675,
      0.288675,
      0.288675
    ]);
    tmp59 = sphere.Point(tmp57, tmp58);
    tmp60 = - 3.0;
    tmp61 = globalThis.Object.freeze([
      tmp60,
      1.0,
      5.0
    ]);
    tmp62 = globalThis.Object.freeze([
      0.288675,
      0.288675,
      0.288675
    ]);
    tmp63 = sphere.Point(tmp61, tmp62);
    tmp64 = NofibPrelude.Cons(tmp63, NofibPrelude.Nil);
    tmp65 = NofibPrelude.Cons(tmp59, tmp64);
    tmp66 = NofibPrelude.Cons(tmp55, tmp65);
    this.testlights = tmp66;
    tmp67 = globalThis.Object.freeze([
      2.1,
      1.3,
      1.7
    ]);
    this.lookfrom = tmp67;
    tmp68 = globalThis.Object.freeze([
      0.078,
      0.361,
      0.753
    ]);
    this.background = tmp68;
  }
  static vecadd(a1, a2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a1) && a1.length === 3) {
      element0$ = runtime.Tuple.get(a1, 0);
      element1$ = runtime.Tuple.get(a1, 1);
      element2$ = runtime.Tuple.get(a1, 2);
      if (runtime.Tuple.isArrayLike(a2) && a2.length === 3) {
        element0$1 = runtime.Tuple.get(a2, 0);
        element1$1 = runtime.Tuple.get(a2, 1);
        element2$1 = runtime.Tuple.get(a2, 2);
        tmp = element0$ + element0$1;
        tmp1 = element1$ + element1$1;
        tmp2 = element2$ + element2$1;
        return globalThis.Object.freeze([
          tmp,
          tmp1,
          tmp2
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static vecsub(a1, a2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a1) && a1.length === 3) {
      element0$ = runtime.Tuple.get(a1, 0);
      element1$ = runtime.Tuple.get(a1, 1);
      element2$ = runtime.Tuple.get(a1, 2);
      if (runtime.Tuple.isArrayLike(a2) && a2.length === 3) {
        element0$1 = runtime.Tuple.get(a2, 0);
        element1$1 = runtime.Tuple.get(a2, 1);
        element2$1 = runtime.Tuple.get(a2, 2);
        tmp = element0$ - element0$1;
        tmp1 = element1$ - element1$1;
        tmp2 = element2$ - element2$1;
        return globalThis.Object.freeze([
          tmp,
          tmp1,
          tmp2
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static vecmult(a1, a2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a1) && a1.length === 3) {
      element0$ = runtime.Tuple.get(a1, 0);
      element1$ = runtime.Tuple.get(a1, 1);
      element2$ = runtime.Tuple.get(a1, 2);
      if (runtime.Tuple.isArrayLike(a2) && a2.length === 3) {
        element0$1 = runtime.Tuple.get(a2, 0);
        element1$1 = runtime.Tuple.get(a2, 1);
        element2$1 = runtime.Tuple.get(a2, 2);
        tmp = element0$ * element0$1;
        tmp1 = element1$ * element1$1;
        tmp2 = element2$ * element2$1;
        return globalThis.Object.freeze([
          tmp,
          tmp1,
          tmp2
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static vecsum(param) {
    let tmp;
    tmp = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    return NofibPrelude.foldr(sphere.vecadd, tmp, param)
  } 
  static vecnorm(xyz) {
    let len, element2$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    if (runtime.Tuple.isArrayLike(xyz) && xyz.length === 3) {
      element0$ = runtime.Tuple.get(xyz, 0);
      element1$ = runtime.Tuple.get(xyz, 1);
      element2$ = runtime.Tuple.get(xyz, 2);
      tmp = element0$ * element0$;
      tmp1 = element1$ * element1$;
      tmp2 = tmp + tmp1;
      tmp3 = element2$ * element2$;
      tmp4 = tmp2 + tmp3;
      len = NofibPrelude.sqrt(tmp4);
      tmp5 = element0$ / len;
      tmp6 = element1$ / len;
      tmp7 = element2$ / len;
      tmp8 = globalThis.Object.freeze([
        tmp5,
        tmp6,
        tmp7
      ]);
      return globalThis.Object.freeze([
        tmp8,
        len
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static vecscale(xyz, a) {
    let element2$, element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(xyz) && xyz.length === 3) {
      element0$ = runtime.Tuple.get(xyz, 0);
      element1$ = runtime.Tuple.get(xyz, 1);
      element2$ = runtime.Tuple.get(xyz, 2);
      tmp = a * element0$;
      tmp1 = a * element1$;
      tmp2 = a * element2$;
      return globalThis.Object.freeze([
        tmp,
        tmp1,
        tmp2
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static vecdot(x1, x2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(x1) && x1.length === 3) {
      element0$ = runtime.Tuple.get(x1, 0);
      element1$ = runtime.Tuple.get(x1, 1);
      element2$ = runtime.Tuple.get(x1, 2);
      if (runtime.Tuple.isArrayLike(x2) && x2.length === 3) {
        element0$1 = runtime.Tuple.get(x2, 0);
        element1$1 = runtime.Tuple.get(x2, 1);
        element2$1 = runtime.Tuple.get(x2, 2);
        tmp = element0$ * element0$1;
        tmp1 = element1$ * element1$1;
        tmp2 = tmp + tmp1;
        tmp3 = element2$ * element2$1;
        return tmp2 + tmp3
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static veccross(x1, x2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    if (runtime.Tuple.isArrayLike(x1) && x1.length === 3) {
      element0$ = runtime.Tuple.get(x1, 0);
      element1$ = runtime.Tuple.get(x1, 1);
      element2$ = runtime.Tuple.get(x1, 2);
      if (runtime.Tuple.isArrayLike(x2) && x2.length === 3) {
        element0$1 = runtime.Tuple.get(x2, 0);
        element1$1 = runtime.Tuple.get(x2, 1);
        element2$1 = runtime.Tuple.get(x2, 2);
        tmp = element1$ * element2$1;
        tmp1 = element1$1 * element2$;
        tmp2 = tmp - tmp1;
        tmp3 = element2$ * element0$1;
        tmp4 = element2$1 * element0$;
        tmp5 = tmp3 - tmp4;
        tmp6 = element0$ * element1$1;
        tmp7 = element0$1 * element1$;
        tmp8 = tmp6 - tmp7;
        return globalThis.Object.freeze([
          tmp2,
          tmp5,
          tmp8
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static is_zerovector(x) {
    let element2$, element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(x) && x.length === 3) {
      element0$ = runtime.Tuple.get(x, 0);
      element1$ = runtime.Tuple.get(x, 1);
      element2$ = runtime.Tuple.get(x, 2);
      tmp = element0$ < sphere.epsilon;
      if (tmp === true) {
        tmp1 = element1$ < sphere.epsilon;
      } else {
        tmp1 = false;
      }
      if (tmp1 === true) {
        return element2$ < sphere.epsilon
      }
      return false;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static lightpos(p) {
    let arg$Point$0$;
    if (p instanceof sphere.Point.class) {
      arg$Point$0$ = p.x;
      return arg$Point$0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static lightdir(d) {
    let arg$Directional$0$, tmp;
    if (d instanceof sphere.Directional.class) {
      arg$Directional$0$ = d.x;
      tmp = sphere.vecnorm(arg$Directional$0$);
      return NofibPrelude.fst(tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static lightcolour(x) {
    let arg$Point$1$, arg$Directional$1$;
    if (x instanceof sphere.Directional.class) {
      arg$Directional$1$ = x.y;
      return arg$Directional$1$
    } else if (x instanceof sphere.Point.class) {
      arg$Point$1$ = x.y;
      return arg$Point$1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static ambientsurf(ss) {
    let lscomp, tmp, tmp1, tmp2, tmp3;
    lscomp = function lscomp(ls) {
      let x, arg$Cons$0$, arg$Cons$1$, arg$Ambient$0$, tmp4;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        x = arg$Cons$0$;
        if (x instanceof sphere.Ambient.class) {
          arg$Ambient$0$ = arg$Cons$0$.v;
          tmp4 = lscomp(arg$Cons$1$);
          return NofibPrelude.Cons(arg$Ambient$0$, tmp4)
        }
        return lscomp(arg$Cons$1$);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = lscomp(ss);
    tmp1 = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    tmp2 = NofibPrelude.Cons(tmp1, NofibPrelude.Nil);
    tmp3 = NofibPrelude.append(tmp, tmp2);
    return NofibPrelude.head(tmp3)
  } 
  static diffusesurf(ss) {
    let lscomp, tmp, tmp1, tmp2, tmp3;
    lscomp = function lscomp(ls) {
      let x, arg$Cons$0$, arg$Cons$1$, arg$Diffuse$0$, tmp4;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        x = arg$Cons$0$;
        if (x instanceof sphere.Diffuse.class) {
          arg$Diffuse$0$ = arg$Cons$0$.v;
          tmp4 = lscomp(arg$Cons$1$);
          return NofibPrelude.Cons(arg$Diffuse$0$, tmp4)
        }
        return lscomp(arg$Cons$1$);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = lscomp(ss);
    tmp1 = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    tmp2 = NofibPrelude.Cons(tmp1, NofibPrelude.Nil);
    tmp3 = NofibPrelude.append(tmp, tmp2);
    return NofibPrelude.head(tmp3)
  } 
  static specularsurf(ss) {
    let lscomp, tmp, tmp1, tmp2, tmp3;
    lscomp = function lscomp(ls) {
      let x, arg$Cons$0$, arg$Cons$1$, arg$Specular$0$, tmp4;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        x = arg$Cons$0$;
        if (x instanceof sphere.Specular.class) {
          arg$Specular$0$ = arg$Cons$0$.v;
          tmp4 = lscomp(arg$Cons$1$);
          return NofibPrelude.Cons(arg$Specular$0$, tmp4)
        }
        return lscomp(arg$Cons$1$);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = lscomp(ss);
    tmp1 = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    tmp2 = NofibPrelude.Cons(tmp1, NofibPrelude.Nil);
    tmp3 = NofibPrelude.append(tmp, tmp2);
    return NofibPrelude.head(tmp3)
  } 
  static specpowsurf(ss) {
    let lscomp, tmp, tmp1, tmp2;
    lscomp = function lscomp(ls) {
      let x, arg$Cons$0$, arg$Cons$1$, arg$Specpow$0$, tmp3;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        x = arg$Cons$0$;
        if (x instanceof sphere.Specpow.class) {
          arg$Specpow$0$ = arg$Cons$0$.v;
          tmp3 = lscomp(arg$Cons$1$);
          return NofibPrelude.Cons(arg$Specpow$0$, tmp3)
        }
        return lscomp(arg$Cons$1$);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = lscomp(ss);
    tmp1 = NofibPrelude.Cons(8.0, NofibPrelude.Nil);
    tmp2 = NofibPrelude.append(tmp, tmp1);
    return NofibPrelude.head(tmp2)
  } 
  static reflectsurf(ss) {
    let lscomp, tmp, tmp1, tmp2;
    lscomp = function lscomp(ls) {
      let x, arg$Cons$0$, arg$Cons$1$, arg$Reflect$0$, tmp3;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        x = arg$Cons$0$;
        if (x instanceof sphere.Reflect.class) {
          arg$Reflect$0$ = arg$Cons$0$.v;
          tmp3 = lscomp(arg$Cons$1$);
          return NofibPrelude.Cons(arg$Reflect$0$, tmp3)
        }
        return lscomp(arg$Cons$1$);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = lscomp(ss);
    tmp1 = NofibPrelude.Cons(0.0, NofibPrelude.Nil);
    tmp2 = NofibPrelude.append(tmp, tmp1);
    return NofibPrelude.head(tmp2)
  } 
  static transmitsurf(ss) {
    let lscomp, tmp, tmp1, tmp2;
    lscomp = function lscomp(ls) {
      let x, arg$Cons$0$, arg$Cons$1$, arg$Transmit$0$, tmp3;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        x = arg$Cons$0$;
        if (x instanceof sphere.Transmit.class) {
          arg$Transmit$0$ = arg$Cons$0$.v;
          tmp3 = lscomp(arg$Cons$1$);
          return NofibPrelude.Cons(arg$Transmit$0$, tmp3)
        }
        return lscomp(arg$Cons$1$);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = lscomp(ss);
    tmp1 = NofibPrelude.Cons(0.0, NofibPrelude.Nil);
    tmp2 = NofibPrelude.append(tmp, tmp1);
    return NofibPrelude.head(tmp2)
  } 
  static refractsurf(ss) {
    let lscomp, tmp, tmp1, tmp2;
    lscomp = function lscomp(ls) {
      let x, arg$Cons$0$, arg$Cons$1$, arg$Refract$0$, tmp3;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        x = arg$Cons$0$;
        if (x instanceof sphere.Refract.class) {
          arg$Refract$0$ = arg$Cons$0$.v;
          tmp3 = lscomp(arg$Cons$1$);
          return NofibPrelude.Cons(arg$Refract$0$, tmp3)
        }
        return lscomp(arg$Cons$1$);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = lscomp(ss);
    tmp1 = NofibPrelude.Cons(1.0, NofibPrelude.Nil);
    tmp2 = NofibPrelude.append(tmp, tmp1);
    return NofibPrelude.head(tmp2)
  } 
  static bodysurf(ss) {
    let lscomp, tmp, tmp1, tmp2, tmp3;
    lscomp = function lscomp(ls) {
      let x, arg$Cons$0$, arg$Cons$1$, arg$Body$0$, tmp4;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        x = arg$Cons$0$;
        if (x instanceof sphere.Body.class) {
          arg$Body$0$ = arg$Cons$0$.v;
          tmp4 = lscomp(arg$Cons$1$);
          return NofibPrelude.Cons(arg$Body$0$, tmp4)
        }
        return lscomp(arg$Cons$1$);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = lscomp(ss);
    tmp1 = globalThis.Object.freeze([
      1.0,
      1.0,
      1.0
    ]);
    tmp2 = NofibPrelude.Cons(tmp1, NofibPrelude.Nil);
    tmp3 = NofibPrelude.append(tmp, tmp2);
    return NofibPrelude.head(tmp3)
  } 
  static spheresurf(s) {
    let arg$Sphere$2$;
    if (s instanceof sphere.Sphere.class) {
      arg$Sphere$2$ = s.surface;
      return arg$Sphere$2$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static spherenormal(pos, sp) {
    let arg$Sphere$0$, arg$Sphere$1$, tmp, tmp1;
    if (sp instanceof sphere.Sphere.class) {
      arg$Sphere$0$ = sp.pos;
      arg$Sphere$1$ = sp.radius;
      tmp = sphere.vecsub(pos, arg$Sphere$0$);
      tmp1 = 1 / arg$Sphere$1$;
      return sphere.vecscale(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static dtor(x) {
    let tmp;
    tmp = x * sphere.pi;
    return tmp / 180.0
  } 
  static camparams(lookfrom, lookat, vup, fov, winsize) {
    let initfirstray, scrut, magx, magy, scrnx, scrny, firstray, scrut1, scrut2, element1$, element0$, element0$1, element0$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16;
    initfirstray = sphere.vecsub(lookat, lookfrom);
    scrut = sphere.vecnorm(initfirstray);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      tmp = sphere.veccross(element0$, vup);
      scrut2 = sphere.vecnorm(tmp);
      if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
        element0$1 = runtime.Tuple.get(scrut2, 0);
        runtime.Tuple.get(scrut2, 1);
        tmp1 = sphere.veccross(element0$1, element0$);
        scrut1 = sphere.vecnorm(tmp1);
        if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
          element0$2 = runtime.Tuple.get(scrut1, 0);
          runtime.Tuple.get(scrut1, 1);
          tmp2 = 2.0 * element1$;
          tmp3 = fov / 2;
          tmp4 = sphere.dtor(tmp3);
          tmp5 = NofibPrelude.tan(tmp4);
          tmp6 = tmp2 * tmp5;
          magx = tmp6 / winsize;
          tmp7 = 2.0 * element1$;
          tmp8 = fov / 2;
          tmp9 = sphere.dtor(tmp8);
          tmp10 = NofibPrelude.tan(tmp9);
          tmp11 = tmp7 * tmp10;
          magy = tmp11 / winsize;
          scrnx = sphere.vecscale(element0$1, magx);
          scrny = sphere.vecscale(element0$2, magy);
          tmp12 = 0.5 * winsize;
          tmp13 = sphere.vecscale(scrnx, tmp12);
          tmp14 = 0.5 * winsize;
          tmp15 = sphere.vecscale(scrny, tmp14);
          tmp16 = sphere.vecadd(tmp13, tmp15);
          firstray = sphere.vecsub(initfirstray, tmp16);
          return globalThis.Object.freeze([
            firstray,
            scrnx,
            scrny
          ])
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static sphereintersect(pos, dir, sp) {
    let m, bm, m2, disc, slo, shi, scrut, scrut1, scrut2, arg$Sphere$0$, arg$Sphere$1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    if (sp instanceof sphere.Sphere.class) {
      arg$Sphere$0$ = sp.pos;
      arg$Sphere$1$ = sp.radius;
      m = sphere.vecsub(pos, arg$Sphere$0$);
      bm = sphere.vecdot(m, dir);
      m2 = sphere.vecdot(m, m);
      tmp = bm * bm;
      tmp1 = tmp - m2;
      tmp2 = arg$Sphere$1$ * arg$Sphere$1$;
      disc = tmp1 + tmp2;
      tmp3 = - bm;
      tmp4 = NofibPrelude.sqrt(disc);
      slo = tmp3 - tmp4;
      tmp5 = - bm;
      tmp6 = NofibPrelude.sqrt(disc);
      shi = tmp5 + tmp6;
      scrut = disc < 0.0;
      if (scrut === true) {
        return globalThis.Object.freeze([
          false,
          0.0
        ])
      }
      scrut1 = slo < 0.0;
      if (scrut1 === true) {
        scrut2 = shi < 0.0;
        if (scrut2 === true) {
          return globalThis.Object.freeze([
            false,
            0.0
          ])
        }
        return globalThis.Object.freeze([
          true,
          shi
        ]);
      }
      return globalThis.Object.freeze([
        true,
        slo
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static trace(spheres, pos, dir) {
    let f, sphmap, dists, scrut, scrut1, tmp, element1$, element0$, tmp1, tmp2;
    f = function f(d1s1, d2s2) {
      let scrut2, element1$1, element0$1, element1$2, element0$2;
      if (runtime.Tuple.isArrayLike(d1s1) && d1s1.length === 2) {
        element0$1 = runtime.Tuple.get(d1s1, 0);
        element1$1 = runtime.Tuple.get(d1s1, 1);
        if (runtime.Tuple.isArrayLike(d2s2) && d2s2.length === 2) {
          element0$2 = runtime.Tuple.get(d2s2, 0);
          element1$2 = runtime.Tuple.get(d2s2, 1);
          scrut2 = element0$1 < element0$2;
          if (scrut2 === true) {
            return globalThis.Object.freeze([
              element0$1,
              element1$1
            ])
          }
          return globalThis.Object.freeze([
            element0$2,
            element1$2
          ]);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    sphmap = function sphmap(xss) {
      let is_hit, scrut2, arg$Cons$0$, arg$Cons$1$, element1$1, element0$1, tmp3, tmp4;
      if (xss instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (xss instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xss.head;
        arg$Cons$1$ = xss.tail;
        scrut2 = sphere.sphereintersect(pos, dir, arg$Cons$0$);
        if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
          element0$1 = runtime.Tuple.get(scrut2, 0);
          element1$1 = runtime.Tuple.get(scrut2, 1);
          is_hit = element0$1;
          if (is_hit === true) {
            tmp3 = globalThis.Object.freeze([
              element1$1,
              arg$Cons$0$
            ]);
            tmp4 = sphmap(arg$Cons$1$);
            return NofibPrelude.Cons(tmp3, tmp4)
          }
          return sphmap(arg$Cons$1$);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    dists = sphmap(spheres);
    scrut = NofibPrelude.null_(dists);
    if (scrut === true) {
      tmp = NofibPrelude.head(spheres);
      return globalThis.Object.freeze([
        false,
        sphere.infinity,
        tmp
      ])
    }
    tmp1 = NofibPrelude.head(dists);
    tmp2 = NofibPrelude.tail(dists);
    scrut1 = NofibPrelude.foldr(f, tmp1, tmp2);
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
      element0$ = runtime.Tuple.get(scrut1, 0);
      element1$ = runtime.Tuple.get(scrut1, 1);
      return globalThis.Object.freeze([
        true,
        element0$,
        element1$
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static refractray(newindex, olddir, innorm) {
    let dotp, matchIdent_17, scrut, disc, t, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, element2$, element1$, element0$, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15;
    tmp = sphere.vecdot(olddir, innorm);
    dotp = - tmp;
    scrut = dotp < 0.0;
    if (scrut === true) {
      tmp1 = - 1.0;
      tmp2 = sphere.vecscale(innorm, tmp1);
      tmp3 = - dotp;
      tmp4 = 1.0 / newindex;
      tmp5 = globalThis.Object.freeze([
        tmp2,
        tmp3,
        tmp4
      ]);
    } else {
      tmp5 = globalThis.Object.freeze([
        innorm,
        dotp,
        newindex
      ]);
    }
    matchIdent_17 = tmp5;
    if (runtime.Tuple.isArrayLike(matchIdent_17) && matchIdent_17.length === 3) {
      element0$ = runtime.Tuple.get(tmp5, 0);
      element1$ = runtime.Tuple.get(tmp5, 1);
      element2$ = runtime.Tuple.get(tmp5, 2);
      tmp6 = element2$ * element2$;
      tmp7 = element1$ * element1$;
      tmp8 = 1.0 - tmp7;
      tmp9 = tmp6 * tmp8;
      disc = 1.0 - tmp9;
      tmp10 = element2$ * element1$;
      tmp11 = NofibPrelude.sqrt(disc);
      t = tmp10 - tmp11;
      scrut1 = disc < 0.0;
      if (scrut1 === true) {
        tmp12 = globalThis.Object.freeze([
          0.0,
          0.0,
          0.0
        ]);
        return globalThis.Object.freeze([
          true,
          tmp12
        ])
      }
      tmp13 = sphere.vecscale(element0$, t);
      tmp14 = sphere.vecscale(olddir, element2$);
      tmp15 = sphere.vecadd(tmp13, tmp14);
      return globalThis.Object.freeze([
        false,
        tmp15
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static lightdirection(l, pt) {
    let arg$Point$0$, arg$Directional$0$, tmp, tmp1, tmp2;
    if (l instanceof sphere.Directional.class) {
      arg$Directional$0$ = l.x;
      tmp = sphere.vecnorm(arg$Directional$0$);
      tmp1 = NofibPrelude.fst(tmp);
      return globalThis.Object.freeze([
        tmp1,
        sphere.infinity
      ])
    } else if (l instanceof sphere.Point.class) {
      arg$Point$0$ = l.x;
      tmp2 = sphere.vecsub(arg$Point$0$, pt);
      return sphere.vecnorm(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static shadowed(pos, dir, lcolour) {
    let scrut, scrut1, element0$, tmp, tmp1;
    tmp = sphere.vecscale(dir, sphere.epsilon);
    tmp1 = sphere.vecadd(pos, tmp);
    scrut = sphere.trace(sphere.testspheres, tmp1, dir);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
      element0$ = runtime.Tuple.get(scrut, 0);
      runtime.Tuple.get(scrut, 1);
      runtime.Tuple.get(scrut, 2);
      scrut1 = ! element0$;
      if (scrut1 === true) {
        return globalThis.Object.freeze([
          false,
          lcolour
        ])
      }
      return globalThis.Object.freeze([
        true,
        lcolour
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static lightray(l, pos, norm, refl, surf) {
    let scrut, cosangle, scrut1, is_inshadow, diff, spow, scrut2, bodycol, cosalpha, diffcont, scrut3, spec, cosalpha1, diffcont1, scrut4, element0$, element1$, element0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
    scrut = sphere.lightdirection(l, pos);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      runtime.Tuple.get(scrut, 1);
      cosangle = sphere.vecdot(element0$, norm);
      tmp = sphere.lightcolour(l);
      scrut1 = sphere.shadowed(pos, element0$, tmp);
      if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
        element0$1 = runtime.Tuple.get(scrut1, 0);
        element1$ = runtime.Tuple.get(scrut1, 1);
        is_inshadow = element0$1;
        if (is_inshadow === true) {
          return globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ])
        }
        diff = sphere.diffusesurf(surf);
        spow = sphere.specpowsurf(surf);
        scrut2 = cosangle <= 0.0;
        if (scrut2 === true) {
          bodycol = sphere.bodysurf(surf);
          tmp1 = sphere.vecdot(refl, element0$);
          cosalpha = - tmp1;
          tmp2 = - cosangle;
          tmp3 = sphere.vecscale(diff, tmp2);
          diffcont = sphere.vecmult(tmp3, element1$);
          scrut3 = cosalpha <= 0.0;
          if (scrut3 === true) {
            tmp4 = globalThis.Object.freeze([
              0.0,
              0.0,
              0.0
            ]);
            return sphere.vecadd(diffcont, tmp4)
          }
          tmp5 = NofibPrelude.power(cosalpha, spow);
          tmp6 = sphere.vecscale(bodycol, tmp5);
          tmp4 = sphere.vecmult(tmp6, element1$);
          return sphere.vecadd(diffcont, tmp4);
        }
        spec = sphere.specularsurf(surf);
        cosalpha1 = sphere.vecdot(refl, element0$);
        tmp7 = sphere.vecscale(diff, cosangle);
        diffcont1 = sphere.vecmult(tmp7, element1$);
        scrut4 = cosalpha1 < 0.0;
        if (scrut4 === true) {
          tmp8 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          return sphere.vecadd(diffcont1, tmp8)
        }
        tmp9 = NofibPrelude.power(cosalpha1, spow);
        tmp10 = sphere.vecscale(spec, tmp9);
        tmp8 = sphere.vecmult(tmp10, element1$);
        return sphere.vecadd(diffcont1, tmp8);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static shade(lights, sp, lookpos, dir, dist, contrib) {
    let hitpos, ambientlight, surf, amb, norm, refl, diff, transmitted, simple, trintensity, matchIdent_1, scrut, is_tir, reflsurf, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, lambda, tmp6, tmp7, tmp8, tmp9, element1$, element0$, tmp10, tmp11, tmp12, tmp13;
    tmp = sphere.vecscale(dir, dist);
    hitpos = sphere.vecadd(lookpos, tmp);
    ambientlight = globalThis.Object.freeze([
      1.0,
      1.0,
      1.0
    ]);
    surf = sphere.spheresurf(sp);
    tmp1 = sphere.ambientsurf(surf);
    amb = sphere.vecmult(ambientlight, tmp1);
    norm = sphere.spherenormal(hitpos, sp);
    tmp2 = sphere.vecdot(dir, norm);
    tmp3 = 2.0 * tmp2;
    tmp4 = - tmp3;
    tmp5 = sphere.vecscale(norm, tmp4);
    refl = sphere.vecadd(dir, tmp5);
    lambda = (undefined, function (l) {
      return sphere.lightray(l, hitpos, norm, refl, surf)
    });
    tmp6 = NofibPrelude.map(lambda, lights);
    diff = sphere.vecsum(tmp6);
    transmitted = sphere.transmitsurf(surf);
    simple = sphere.vecadd(amb, diff);
    tmp7 = sphere.bodysurf(surf);
    trintensity = sphere.vecscale(tmp7, transmitted);
    scrut = transmitted < sphere.epsilon;
    if (scrut === true) {
      tmp8 = globalThis.Object.freeze([
        false,
        simple
      ]);
    } else {
      tmp9 = sphere.refractsurf(surf);
      tmp8 = sphere.transmitray(lights, simple, hitpos, dir, tmp9, trintensity, contrib, norm);
    }
    matchIdent_1 = tmp8;
    if (runtime.Tuple.isArrayLike(matchIdent_1) && matchIdent_1.length === 2) {
      element0$ = runtime.Tuple.get(tmp8, 0);
      element1$ = runtime.Tuple.get(tmp8, 1);
      is_tir = element0$;
      tmp10 = sphere.specularsurf(surf);
      tmp11 = sphere.reflectsurf(surf);
      reflsurf = sphere.vecscale(tmp10, tmp11);
      if (is_tir === true) {
        tmp12 = sphere.vecadd(trintensity, reflsurf);
      } else {
        tmp12 = reflsurf;
      }
      scrut1 = sphere.is_zerovector(tmp12);
      if (scrut1 === true) {
        tmp13 = element1$;
        return element1$
      }
      tmp13 = sphere.reflectray(hitpos, refl, lights, tmp12, contrib, element1$);
      return tmp13;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static transmitray(lights, colour, pos, dir, index, intens, contrib, norm) {
    let newcontrib, scrut, nearpos, scrut1, is_hit, scrut2, element1$, tmp, element2$, element1$1, element0$, tmp1, tmp2, tmp3;
    newcontrib = sphere.vecmult(intens, contrib);
    scrut = sphere.refractray(index, dir, norm);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      tmp = sphere.vecscale(element1$, sphere.epsilon);
      nearpos = sphere.vecadd(pos, tmp);
      scrut1 = sphere.trace(sphere.testspheres, nearpos, element1$);
      if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
        element0$ = runtime.Tuple.get(scrut1, 0);
        element1$1 = runtime.Tuple.get(scrut1, 1);
        element2$ = runtime.Tuple.get(scrut1, 2);
        is_hit = element0$;
        if (is_hit === true) {
          tmp1 = sphere.shade(lights, element2$, nearpos, element1$, element1$1, newcontrib);
        } else {
          tmp1 = sphere.background;
        }
        scrut2 = sphere.is_zerovector(newcontrib);
        if (scrut2 === true) {
          return globalThis.Object.freeze([
            false,
            colour
          ])
        }
        tmp2 = sphere.vecmult(tmp1, intens);
        tmp3 = sphere.vecadd(tmp2, colour);
        return globalThis.Object.freeze([
          false,
          tmp3
        ]);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static reflectray(pos, newdir, lights, intens, contrib, colour) {
    let newcontrib, nearpos, scrut, is_hit, scrut1, tmp, element2$, element1$, element0$, tmp1, tmp2;
    newcontrib = sphere.vecmult(intens, contrib);
    tmp = sphere.vecscale(newdir, sphere.epsilon);
    nearpos = sphere.vecadd(pos, tmp);
    scrut = sphere.trace(sphere.testspheres, nearpos, newdir);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      element2$ = runtime.Tuple.get(scrut, 2);
      is_hit = element0$;
      if (is_hit === true) {
        tmp1 = sphere.shade(lights, element2$, nearpos, newdir, element1$, newcontrib);
      } else {
        tmp1 = sphere.background;
      }
      scrut1 = sphere.is_zerovector(newcontrib);
      if (scrut1 === true) {
        return colour
      }
      tmp2 = sphere.vecmult(tmp1, intens);
      return sphere.vecadd(colour, tmp2);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static tracepixel(spheres, lights, x, y, firstray, scrnx, scrny) {
    let pos, scrut, hit, scrut1, element0$, element2$, element1$, element0$1, tmp, tmp1, tmp2, tmp3, tmp4;
    pos = sphere.lookfrom;
    tmp = sphere.vecscale(scrnx, x);
    tmp1 = sphere.vecadd(firstray, tmp);
    tmp2 = sphere.vecscale(scrny, y);
    tmp3 = sphere.vecadd(tmp1, tmp2);
    scrut = sphere.vecnorm(tmp3);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      runtime.Tuple.get(scrut, 1);
      scrut1 = sphere.trace(spheres, pos, element0$);
      if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
        element0$1 = runtime.Tuple.get(scrut1, 0);
        element1$ = runtime.Tuple.get(scrut1, 1);
        element2$ = runtime.Tuple.get(scrut1, 2);
        hit = element0$1;
        if (hit === true) {
          tmp4 = globalThis.Object.freeze([
            1.0,
            1.0,
            1.0
          ]);
          return sphere.shade(lights, element2$, pos, element0$, element1$, tmp4)
        }
        return sphere.background;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static z_of_int(x) {
    return runtime.safeCall(globalThis.BigInt(x))
  } 
  static hash(param) {
    let u8, lambda, tmp;
    u8 = function u8(x) {
      let tmp1, tmp2;
      tmp1 = 255 * x;
      tmp2 = NofibPrelude.round(tmp1);
      return sphere.z_of_int(tmp2)
    };
    lambda = (undefined, function (rgb, acc) {
      let element2$, element1$, element0$, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
      if (runtime.Tuple.isArrayLike(rgb) && rgb.length === 3) {
        element0$ = runtime.Tuple.get(rgb, 0);
        element1$ = runtime.Tuple.get(rgb, 1);
        element2$ = runtime.Tuple.get(rgb, 2);
        tmp1 = u8(element0$);
        tmp2 = u8(element1$);
        tmp3 = sphere.z_of_int(7);
        tmp4 = tmp2 * tmp3;
        tmp5 = tmp1 + tmp4;
        tmp6 = u8(element2$);
        tmp7 = sphere.z_of_int(23);
        tmp8 = tmp6 * tmp7;
        tmp9 = tmp5 + tmp8;
        tmp10 = sphere.z_of_int(61);
        tmp11 = acc * tmp10;
        return tmp9 + tmp11
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    tmp = sphere.z_of_int(0);
    return NofibPrelude.foldr(lambda, tmp, param)
  } 
  static ray(winsize) {
    let lscomp1, lights, scrut, scrnx, firstray, scrny, element2$, element1$, element0$, tmp, tmp1;
    lights = sphere.testlights;
    scrut = sphere.camparams(sphere.lookfrom, sphere.lookat, sphere.vup, sphere.fov, winsize);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      element2$ = runtime.Tuple.get(scrut, 2);
      scrny = element2$;
      scrnx = element1$;
      firstray = element0$;
      lscomp1 = function lscomp1(ls1) {
        let lscomp2, i, t1, arg$Cons$0$, arg$Cons$1$, tmp2, tmp3;
        if (ls1 instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (ls1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = ls1.head;
          arg$Cons$1$ = ls1.tail;
          t1 = arg$Cons$1$;
          i = arg$Cons$0$;
          lscomp2 = function lscomp2(ls2) {
            let arg$Cons$0$1, arg$Cons$1$1, tmp4, tmp5, tmp6;
            if (ls2 instanceof NofibPrelude.Nil.class) {
              return lscomp1(t1)
            } else if (ls2 instanceof NofibPrelude.Cons.class) {
              let i1, inlinedVal;
              arg$Cons$0$1 = ls2.head;
              arg$Cons$1$1 = ls2.tail;
              tmp4 = globalThis.Object.freeze([
                i,
                arg$Cons$0$1
              ]);
              i1 = i;
              inlinedVal = sphere.tracepixel(sphere.testspheres, lights, i1, arg$Cons$0$1, firstray, scrnx, scrny);
              tmp5 = globalThis.Object.freeze([
                tmp4,
                inlinedVal
              ]);
              tmp6 = lscomp2(arg$Cons$1$1);
              return NofibPrelude.Cons(tmp5, tmp6)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          };
          tmp2 = winsize - 1;
          tmp3 = NofibPrelude.enumFromTo(0, tmp2);
          return lscomp2(tmp3)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      tmp = winsize - 1;
      tmp1 = NofibPrelude.enumFromTo(0, tmp);
      return lscomp1(tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static run(winsize) {
    let tmp, tmp1;
    tmp = sphere.ray(winsize);
    tmp1 = NofibPrelude.map(NofibPrelude.snd, tmp);
    return sphere.hash(tmp1)
  } 
  static testSphere_nofib(n) {
    return sphere.run(n)
  } 
  static main() {
    return sphere.testSphere_nofib(30)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "sphere"]; 
});
let sphere = sphere1; export default sphere;
