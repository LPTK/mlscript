const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let lastpiece1;
(class lastpiece {
  static {
    lastpiece1 = this
  }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122, tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131, tmp132, tmp133, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139, tmp140, tmp141, tmp142, tmp143, tmp144, tmp145, tmp146, tmp147, tmp148, tmp149, tmp150, tmp151, tmp152, tmp153, tmp154, tmp155, tmp156, tmp157, tmp158, tmp159, tmp160, tmp161, tmp162, tmp163, tmp164, tmp165, tmp166, tmp167, tmp168, tmp169, tmp170, tmp171, tmp172, tmp173, tmp174, tmp175, tmp176, tmp177, tmp178, tmp179, tmp180, tmp181, tmp182, tmp183, tmp184, tmp185, tmp186, tmp187, tmp188, tmp189, tmp190, tmp191, tmp192, tmp193, tmp194, tmp195, tmp196, tmp197, tmp198, tmp199, tmp200, tmp201, tmp202, tmp203, tmp204, tmp205, tmp206, tmp207, tmp208, tmp209, tmp210, tmp211, tmp212, tmp213, tmp214, tmp215, tmp216, tmp217, tmp218, tmp219, tmp220, tmp221, tmp222, tmp223, tmp224, tmp225, tmp226, tmp227, tmp228, tmp229, tmp230, tmp231, tmp232, tmp233, tmp234, tmp235, tmp236, tmp237, tmp238, tmp239, tmp240, tmp241, tmp242, tmp243, tmp244, tmp245, tmp246, tmp247, tmp248, tmp249, tmp250, tmp251, tmp252, tmp253, tmp254, tmp255, tmp256, tmp257, tmp258, tmp259, tmp260, tmp261, tmp262, tmp263, tmp264, tmp265, tmp266, tmp267, tmp268, tmp269, tmp270, tmp271, tmp272, tmp273, tmp274, tmp275, tmp276, tmp277, tmp278, tmp279, tmp280, tmp281, tmp282, tmp283, tmp284, tmp285, tmp286, tmp287, tmp288, tmp289, tmp290, tmp291, tmp292, tmp293, tmp294, tmp295, tmp296, tmp297, tmp298, tmp299, tmp300, tmp301, tmp302, tmp303, tmp304, tmp305, tmp306, tmp307, tmp308, tmp309, tmp310, tmp311, tmp312, tmp313, tmp314, tmp315, tmp316, tmp317, tmp318, tmp319, tmp320, tmp321, tmp322, tmp323, tmp324, tmp325, tmp326, tmp327, tmp328, tmp329, tmp330, tmp331, tmp332, tmp333, tmp334, tmp335, tmp336, tmp337, tmp338, tmp339, tmp340, tmp341, tmp342, tmp343, tmp344, tmp345, tmp346, tmp347, tmp348, tmp349, tmp350, tmp351, tmp352, tmp353, tmp354, tmp355, tmp356, tmp357, tmp358, tmp359, tmp360, tmp361, tmp362, tmp363, tmp364, tmp365, tmp366, tmp367, tmp368, tmp369, tmp370, tmp371, tmp372, tmp373, tmp374, tmp375, tmp376, tmp377, tmp378, tmp379, tmp380, tmp381, tmp382, tmp383, tmp384, tmp385, tmp386, tmp387, tmp388, tmp389, tmp390, tmp391, tmp392, tmp393, tmp394, tmp395, tmp396, tmp397, tmp398, tmp399, tmp400, tmp401, tmp402, tmp403, tmp404, tmp405, tmp406, tmp407, tmp408, tmp409, tmp410, tmp411, tmp412, tmp413, tmp414, tmp415, tmp416, tmp417, tmp418, tmp419, tmp420, tmp421, tmp422, tmp423, tmp424, tmp425, tmp426, tmp427, tmp428, tmp429, tmp430, tmp431, tmp432, tmp433, tmp434, tmp435, tmp436, tmp437, tmp438, tmp439, tmp440, tmp441, tmp442, tmp443, tmp444, tmp445, tmp446, tmp447, tmp448;
    (class GT {
      static {
        new this
      }
      constructor() {
        lastpiece.GT = this;
        Object.defineProperty(this, "class", {
          value: GT
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "GT"]; 
    });
    (class LT {
      static {
        new this
      }
      constructor() {
        lastpiece.LT = this;
        Object.defineProperty(this, "class", {
          value: LT
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LT"]; 
    });
    (class EQ {
      static {
        new this
      }
      constructor() {
        lastpiece.EQ = this;
        Object.defineProperty(this, "class", {
          value: EQ
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "EQ"]; 
    });
    (class Map {
      static {
        lastpiece.Map = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Map"]; 
    });
    (class Tip extends lastpiece.Map {
      static {
        new this
      }
      constructor() {
        super();
        lastpiece.Tip = this;
        Object.defineProperty(this, "class", {
          value: Tip
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Tip"]; 
    });
    this.Bin = function Bin(i, k, v, l, r) {
      return globalThis.Object.freeze(new Bin.class(i, k, v, l, r));
    };
    (class Bin extends lastpiece.Map {
      static {
        lastpiece.Bin.class = this
      }
      constructor(i, k, v, l, r) {
        super();
        this.i = i;
        this.k = k;
        this.v = v;
        this.l = l;
        this.r = r;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Bin", ["i", "k", "v", "l", "r"]]; 
    });
    this.P = function P(i, a, b) {
      return globalThis.Object.freeze(new P.class(i, a, b));
    };
    (class P {
      static {
        lastpiece.P.class = this
      }
      constructor(i, a, b) {
        this.i = i;
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "P", ["i", "a", "b"]]; 
    });
    (class S {
      static {
        lastpiece.S = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "S"]; 
    });
    (class Male extends lastpiece.S {
      static {
        new this
      }
      constructor() {
        super();
        lastpiece.Male = this;
        Object.defineProperty(this, "class", {
          value: Male
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Male"]; 
    });
    (class Female extends lastpiece.S {
      static {
        new this
      }
      constructor() {
        super();
        lastpiece.Female = this;
        Object.defineProperty(this, "class", {
          value: Female
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Female"]; 
    });
    (class Solution {
      static {
        lastpiece.Solution = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Solution"]; 
    });
    this.Soln = function Soln(b) {
      return globalThis.Object.freeze(new Soln.class(b));
    };
    (class Soln extends lastpiece.Solution {
      static {
        lastpiece.Soln.class = this
      }
      constructor(b) {
        super();
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Soln", ["b"]]; 
    });
    this.Choose = function Choose(s) {
      return globalThis.Object.freeze(new Choose.class(s));
    };
    (class Choose extends lastpiece.Solution {
      static {
        lastpiece.Choose.class = this
      }
      constructor(s) {
        super();
        this.s = s;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Choose", ["s"]]; 
    });
    this.Fail = function Fail(b, s) {
      return globalThis.Object.freeze(new Fail.class(b, s));
    };
    (class Fail extends lastpiece.Solution {
      static {
        lastpiece.Fail.class = this
      }
      constructor(b, s) {
        super();
        this.b = b;
        this.s = s;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Fail", ["b", "s"]]; 
    });
    this.maxRow = 8;
    this.maxCol = 8;
    this.emptyBoard = lastpiece.Tip;
    tmp = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp1 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp2 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp3 = globalThis.Object.freeze([
      2,
      2
    ]);
    tmp4 = NofibPrelude.Cons(tmp3, NofibPrelude.Nil);
    tmp5 = NofibPrelude.Cons(tmp2, tmp4);
    tmp6 = NofibPrelude.Cons(tmp1, tmp5);
    tmp7 = NofibPrelude.Cons(tmp, tmp6);
    tmp8 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp9 = - 1;
    tmp10 = globalThis.Object.freeze([
      1,
      tmp9
    ]);
    tmp11 = - 2;
    tmp12 = globalThis.Object.freeze([
      1,
      tmp11
    ]);
    tmp13 = - 2;
    tmp14 = globalThis.Object.freeze([
      2,
      tmp13
    ]);
    tmp15 = NofibPrelude.Cons(tmp14, NofibPrelude.Nil);
    tmp16 = NofibPrelude.Cons(tmp12, tmp15);
    tmp17 = NofibPrelude.Cons(tmp10, tmp16);
    tmp18 = NofibPrelude.Cons(tmp8, tmp17);
    tmp19 = NofibPrelude.Cons(tmp18, NofibPrelude.Nil);
    tmp20 = NofibPrelude.Cons(tmp7, tmp19);
    tmp21 = lastpiece.P("n", tmp20, NofibPrelude.Nil);
    this.nPiece = tmp21;
    tmp22 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp23 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp24 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp25 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp26 = NofibPrelude.Cons(tmp25, NofibPrelude.Nil);
    tmp27 = NofibPrelude.Cons(tmp24, tmp26);
    tmp28 = NofibPrelude.Cons(tmp23, tmp27);
    tmp29 = NofibPrelude.Cons(tmp22, tmp28);
    tmp30 = NofibPrelude.Cons(tmp29, NofibPrelude.Nil);
    tmp31 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp32 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp33 = globalThis.Object.freeze([
      0,
      3
    ]);
    tmp34 = globalThis.Object.freeze([
      1,
      3
    ]);
    tmp35 = NofibPrelude.Cons(tmp34, NofibPrelude.Nil);
    tmp36 = NofibPrelude.Cons(tmp33, tmp35);
    tmp37 = NofibPrelude.Cons(tmp32, tmp36);
    tmp38 = NofibPrelude.Cons(tmp31, tmp37);
    tmp39 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp40 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp41 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp42 = - 1;
    tmp43 = globalThis.Object.freeze([
      3,
      tmp42
    ]);
    tmp44 = NofibPrelude.Cons(tmp43, NofibPrelude.Nil);
    tmp45 = NofibPrelude.Cons(tmp41, tmp44);
    tmp46 = NofibPrelude.Cons(tmp40, tmp45);
    tmp47 = NofibPrelude.Cons(tmp39, tmp46);
    tmp48 = NofibPrelude.Cons(tmp47, NofibPrelude.Nil);
    tmp49 = NofibPrelude.Cons(tmp38, tmp48);
    tmp50 = lastpiece.P("m", tmp30, tmp49);
    this.mPiece = tmp50;
    tmp51 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp52 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp53 = globalThis.Object.freeze([
      0,
      3
    ]);
    tmp54 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp55 = NofibPrelude.Cons(tmp54, NofibPrelude.Nil);
    tmp56 = NofibPrelude.Cons(tmp53, tmp55);
    tmp57 = NofibPrelude.Cons(tmp52, tmp56);
    tmp58 = NofibPrelude.Cons(tmp51, tmp57);
    tmp59 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp60 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp61 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp62 = - 1;
    tmp63 = globalThis.Object.freeze([
      2,
      tmp62
    ]);
    tmp64 = NofibPrelude.Cons(tmp63, NofibPrelude.Nil);
    tmp65 = NofibPrelude.Cons(tmp61, tmp64);
    tmp66 = NofibPrelude.Cons(tmp60, tmp65);
    tmp67 = NofibPrelude.Cons(tmp59, tmp66);
    tmp68 = NofibPrelude.Cons(tmp67, NofibPrelude.Nil);
    tmp69 = NofibPrelude.Cons(tmp58, tmp68);
    tmp70 = - 1;
    tmp71 = globalThis.Object.freeze([
      1,
      tmp70
    ]);
    tmp72 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp73 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp74 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp75 = NofibPrelude.Cons(tmp74, NofibPrelude.Nil);
    tmp76 = NofibPrelude.Cons(tmp73, tmp75);
    tmp77 = NofibPrelude.Cons(tmp72, tmp76);
    tmp78 = NofibPrelude.Cons(tmp71, tmp77);
    tmp79 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp80 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp81 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp82 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp83 = NofibPrelude.Cons(tmp82, NofibPrelude.Nil);
    tmp84 = NofibPrelude.Cons(tmp81, tmp83);
    tmp85 = NofibPrelude.Cons(tmp80, tmp84);
    tmp86 = NofibPrelude.Cons(tmp79, tmp85);
    tmp87 = NofibPrelude.Cons(tmp86, NofibPrelude.Nil);
    tmp88 = NofibPrelude.Cons(tmp78, tmp87);
    tmp89 = lastpiece.P("l", tmp69, tmp88);
    this.lPiece = tmp89;
    tmp90 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp91 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp92 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp93 = - 1;
    tmp94 = globalThis.Object.freeze([
      2,
      tmp93
    ]);
    tmp95 = NofibPrelude.Cons(tmp94, NofibPrelude.Nil);
    tmp96 = NofibPrelude.Cons(tmp92, tmp95);
    tmp97 = NofibPrelude.Cons(tmp91, tmp96);
    tmp98 = NofibPrelude.Cons(tmp90, tmp97);
    tmp99 = NofibPrelude.Cons(tmp98, NofibPrelude.Nil);
    tmp100 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp101 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp102 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp103 = globalThis.Object.freeze([
      2,
      2
    ]);
    tmp104 = NofibPrelude.Cons(tmp103, NofibPrelude.Nil);
    tmp105 = NofibPrelude.Cons(tmp102, tmp104);
    tmp106 = NofibPrelude.Cons(tmp101, tmp105);
    tmp107 = NofibPrelude.Cons(tmp100, tmp106);
    tmp108 = NofibPrelude.Cons(tmp107, NofibPrelude.Nil);
    tmp109 = lastpiece.P("k", tmp99, tmp108);
    this.kPiece = tmp109;
    tmp110 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp111 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp112 = globalThis.Object.freeze([
      0,
      3
    ]);
    tmp113 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp114 = NofibPrelude.Cons(tmp113, NofibPrelude.Nil);
    tmp115 = NofibPrelude.Cons(tmp112, tmp114);
    tmp116 = NofibPrelude.Cons(tmp111, tmp115);
    tmp117 = NofibPrelude.Cons(tmp110, tmp116);
    tmp118 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp119 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp120 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp121 = - 1;
    tmp122 = globalThis.Object.freeze([
      1,
      tmp121
    ]);
    tmp123 = NofibPrelude.Cons(tmp122, NofibPrelude.Nil);
    tmp124 = NofibPrelude.Cons(tmp120, tmp123);
    tmp125 = NofibPrelude.Cons(tmp119, tmp124);
    tmp126 = NofibPrelude.Cons(tmp118, tmp125);
    tmp127 = - 2;
    tmp128 = globalThis.Object.freeze([
      1,
      tmp127
    ]);
    tmp129 = - 1;
    tmp130 = globalThis.Object.freeze([
      1,
      tmp129
    ]);
    tmp131 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp132 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp133 = NofibPrelude.Cons(tmp132, NofibPrelude.Nil);
    tmp134 = NofibPrelude.Cons(tmp131, tmp133);
    tmp135 = NofibPrelude.Cons(tmp130, tmp134);
    tmp136 = NofibPrelude.Cons(tmp128, tmp135);
    tmp137 = NofibPrelude.Cons(tmp136, NofibPrelude.Nil);
    tmp138 = NofibPrelude.Cons(tmp126, tmp137);
    tmp139 = NofibPrelude.Cons(tmp117, tmp138);
    tmp140 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp141 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp142 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp143 = globalThis.Object.freeze([
      2,
      2
    ]);
    tmp144 = NofibPrelude.Cons(tmp143, NofibPrelude.Nil);
    tmp145 = NofibPrelude.Cons(tmp142, tmp144);
    tmp146 = NofibPrelude.Cons(tmp141, tmp145);
    tmp147 = NofibPrelude.Cons(tmp140, tmp146);
    tmp148 = NofibPrelude.Cons(tmp147, NofibPrelude.Nil);
    tmp149 = lastpiece.P("j", tmp139, tmp148);
    this.jPiece = tmp149;
    tmp150 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp151 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp152 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp153 = globalThis.Object.freeze([
      3,
      1
    ]);
    tmp154 = NofibPrelude.Cons(tmp153, NofibPrelude.Nil);
    tmp155 = NofibPrelude.Cons(tmp152, tmp154);
    tmp156 = NofibPrelude.Cons(tmp151, tmp155);
    tmp157 = NofibPrelude.Cons(tmp150, tmp156);
    tmp158 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp159 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp160 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp161 = - 1;
    tmp162 = globalThis.Object.freeze([
      1,
      tmp161
    ]);
    tmp163 = NofibPrelude.Cons(tmp162, NofibPrelude.Nil);
    tmp164 = NofibPrelude.Cons(tmp160, tmp163);
    tmp165 = NofibPrelude.Cons(tmp159, tmp164);
    tmp166 = NofibPrelude.Cons(tmp158, tmp165);
    tmp167 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp168 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp169 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp170 = globalThis.Object.freeze([
      3,
      1
    ]);
    tmp171 = NofibPrelude.Cons(tmp170, NofibPrelude.Nil);
    tmp172 = NofibPrelude.Cons(tmp169, tmp171);
    tmp173 = NofibPrelude.Cons(tmp168, tmp172);
    tmp174 = NofibPrelude.Cons(tmp167, tmp173);
    tmp175 = NofibPrelude.Cons(tmp174, NofibPrelude.Nil);
    tmp176 = NofibPrelude.Cons(tmp166, tmp175);
    tmp177 = NofibPrelude.Cons(tmp157, tmp176);
    tmp178 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp179 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp180 = - 1;
    tmp181 = globalThis.Object.freeze([
      1,
      tmp180
    ]);
    tmp182 = - 2;
    tmp183 = globalThis.Object.freeze([
      1,
      tmp182
    ]);
    tmp184 = NofibPrelude.Cons(tmp183, NofibPrelude.Nil);
    tmp185 = NofibPrelude.Cons(tmp181, tmp184);
    tmp186 = NofibPrelude.Cons(tmp179, tmp185);
    tmp187 = NofibPrelude.Cons(tmp178, tmp186);
    tmp188 = NofibPrelude.Cons(tmp187, NofibPrelude.Nil);
    tmp189 = lastpiece.P("i", tmp177, tmp188);
    this.iPiece = tmp189;
    tmp190 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp191 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp192 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp193 = globalThis.Object.freeze([
      2,
      2
    ]);
    tmp194 = NofibPrelude.Cons(tmp193, NofibPrelude.Nil);
    tmp195 = NofibPrelude.Cons(tmp192, tmp194);
    tmp196 = NofibPrelude.Cons(tmp191, tmp195);
    tmp197 = NofibPrelude.Cons(tmp190, tmp196);
    tmp198 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp199 = - 1;
    tmp200 = globalThis.Object.freeze([
      1,
      tmp199
    ]);
    tmp201 = - 1;
    tmp202 = globalThis.Object.freeze([
      2,
      tmp201
    ]);
    tmp203 = - 2;
    tmp204 = globalThis.Object.freeze([
      2,
      tmp203
    ]);
    tmp205 = NofibPrelude.Cons(tmp204, NofibPrelude.Nil);
    tmp206 = NofibPrelude.Cons(tmp202, tmp205);
    tmp207 = NofibPrelude.Cons(tmp200, tmp206);
    tmp208 = NofibPrelude.Cons(tmp198, tmp207);
    tmp209 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp210 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp211 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp212 = globalThis.Object.freeze([
      2,
      2
    ]);
    tmp213 = NofibPrelude.Cons(tmp212, NofibPrelude.Nil);
    tmp214 = NofibPrelude.Cons(tmp211, tmp213);
    tmp215 = NofibPrelude.Cons(tmp210, tmp214);
    tmp216 = NofibPrelude.Cons(tmp209, tmp215);
    tmp217 = NofibPrelude.Cons(tmp216, NofibPrelude.Nil);
    tmp218 = NofibPrelude.Cons(tmp208, tmp217);
    tmp219 = NofibPrelude.Cons(tmp197, tmp218);
    tmp220 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp221 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp222 = - 1;
    tmp223 = globalThis.Object.freeze([
      1,
      tmp222
    ]);
    tmp224 = - 1;
    tmp225 = globalThis.Object.freeze([
      2,
      tmp224
    ]);
    tmp226 = NofibPrelude.Cons(tmp225, NofibPrelude.Nil);
    tmp227 = NofibPrelude.Cons(tmp223, tmp226);
    tmp228 = NofibPrelude.Cons(tmp221, tmp227);
    tmp229 = NofibPrelude.Cons(tmp220, tmp228);
    tmp230 = NofibPrelude.Cons(tmp229, NofibPrelude.Nil);
    tmp231 = lastpiece.P("h", tmp219, tmp230);
    this.hPiece = tmp231;
    tmp232 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp233 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp234 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp235 = globalThis.Object.freeze([
      1,
      3
    ]);
    tmp236 = NofibPrelude.Cons(tmp235, NofibPrelude.Nil);
    tmp237 = NofibPrelude.Cons(tmp234, tmp236);
    tmp238 = NofibPrelude.Cons(tmp233, tmp237);
    tmp239 = NofibPrelude.Cons(tmp232, tmp238);
    tmp240 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp241 = - 1;
    tmp242 = globalThis.Object.freeze([
      1,
      tmp241
    ]);
    tmp243 = - 1;
    tmp244 = globalThis.Object.freeze([
      2,
      tmp243
    ]);
    tmp245 = - 1;
    tmp246 = globalThis.Object.freeze([
      3,
      tmp245
    ]);
    tmp247 = NofibPrelude.Cons(tmp246, NofibPrelude.Nil);
    tmp248 = NofibPrelude.Cons(tmp244, tmp247);
    tmp249 = NofibPrelude.Cons(tmp242, tmp248);
    tmp250 = NofibPrelude.Cons(tmp240, tmp249);
    tmp251 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp252 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp253 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp254 = globalThis.Object.freeze([
      1,
      3
    ]);
    tmp255 = NofibPrelude.Cons(tmp254, NofibPrelude.Nil);
    tmp256 = NofibPrelude.Cons(tmp253, tmp255);
    tmp257 = NofibPrelude.Cons(tmp252, tmp256);
    tmp258 = NofibPrelude.Cons(tmp251, tmp257);
    tmp259 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp260 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp261 = - 1;
    tmp262 = globalThis.Object.freeze([
      2,
      tmp261
    ]);
    tmp263 = - 1;
    tmp264 = globalThis.Object.freeze([
      3,
      tmp263
    ]);
    tmp265 = NofibPrelude.Cons(tmp264, NofibPrelude.Nil);
    tmp266 = NofibPrelude.Cons(tmp262, tmp265);
    tmp267 = NofibPrelude.Cons(tmp260, tmp266);
    tmp268 = NofibPrelude.Cons(tmp259, tmp267);
    tmp269 = NofibPrelude.Cons(tmp268, NofibPrelude.Nil);
    tmp270 = NofibPrelude.Cons(tmp258, tmp269);
    tmp271 = NofibPrelude.Cons(tmp250, tmp270);
    tmp272 = NofibPrelude.Cons(tmp239, tmp271);
    tmp273 = lastpiece.P("g", NofibPrelude.Nil, tmp272);
    this.gPiece = tmp273;
    tmp274 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp275 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp276 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp277 = globalThis.Object.freeze([
      3,
      1
    ]);
    tmp278 = NofibPrelude.Cons(tmp277, NofibPrelude.Nil);
    tmp279 = NofibPrelude.Cons(tmp276, tmp278);
    tmp280 = NofibPrelude.Cons(tmp275, tmp279);
    tmp281 = NofibPrelude.Cons(tmp274, tmp280);
    tmp282 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp283 = - 1;
    tmp284 = globalThis.Object.freeze([
      1,
      tmp283
    ]);
    tmp285 = - 2;
    tmp286 = globalThis.Object.freeze([
      1,
      tmp285
    ]);
    tmp287 = - 3;
    tmp288 = globalThis.Object.freeze([
      1,
      tmp287
    ]);
    tmp289 = NofibPrelude.Cons(tmp288, NofibPrelude.Nil);
    tmp290 = NofibPrelude.Cons(tmp286, tmp289);
    tmp291 = NofibPrelude.Cons(tmp284, tmp290);
    tmp292 = NofibPrelude.Cons(tmp282, tmp291);
    tmp293 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp294 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp295 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp296 = globalThis.Object.freeze([
      3,
      1
    ]);
    tmp297 = NofibPrelude.Cons(tmp296, NofibPrelude.Nil);
    tmp298 = NofibPrelude.Cons(tmp295, tmp297);
    tmp299 = NofibPrelude.Cons(tmp294, tmp298);
    tmp300 = NofibPrelude.Cons(tmp293, tmp299);
    tmp301 = NofibPrelude.Cons(tmp300, NofibPrelude.Nil);
    tmp302 = NofibPrelude.Cons(tmp292, tmp301);
    tmp303 = NofibPrelude.Cons(tmp281, tmp302);
    tmp304 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp305 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp306 = globalThis.Object.freeze([
      0,
      3
    ]);
    tmp307 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp308 = NofibPrelude.Cons(tmp307, NofibPrelude.Nil);
    tmp309 = NofibPrelude.Cons(tmp306, tmp308);
    tmp310 = NofibPrelude.Cons(tmp305, tmp309);
    tmp311 = NofibPrelude.Cons(tmp304, tmp310);
    tmp312 = NofibPrelude.Cons(tmp311, NofibPrelude.Nil);
    tmp313 = lastpiece.P("f", tmp303, tmp312);
    this.fPiece = tmp313;
    tmp314 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp315 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp316 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp317 = NofibPrelude.Cons(tmp316, NofibPrelude.Nil);
    tmp318 = NofibPrelude.Cons(tmp315, tmp317);
    tmp319 = NofibPrelude.Cons(tmp314, tmp318);
    tmp320 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp321 = - 1;
    tmp322 = globalThis.Object.freeze([
      1,
      tmp321
    ]);
    tmp323 = - 1;
    tmp324 = globalThis.Object.freeze([
      2,
      tmp323
    ]);
    tmp325 = NofibPrelude.Cons(tmp324, NofibPrelude.Nil);
    tmp326 = NofibPrelude.Cons(tmp322, tmp325);
    tmp327 = NofibPrelude.Cons(tmp320, tmp326);
    tmp328 = NofibPrelude.Cons(tmp327, NofibPrelude.Nil);
    tmp329 = NofibPrelude.Cons(tmp319, tmp328);
    tmp330 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp331 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp332 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp333 = NofibPrelude.Cons(tmp332, NofibPrelude.Nil);
    tmp334 = NofibPrelude.Cons(tmp331, tmp333);
    tmp335 = NofibPrelude.Cons(tmp330, tmp334);
    tmp336 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp337 = - 1;
    tmp338 = globalThis.Object.freeze([
      1,
      tmp337
    ]);
    tmp339 = - 1;
    tmp340 = globalThis.Object.freeze([
      2,
      tmp339
    ]);
    tmp341 = NofibPrelude.Cons(tmp340, NofibPrelude.Nil);
    tmp342 = NofibPrelude.Cons(tmp338, tmp341);
    tmp343 = NofibPrelude.Cons(tmp336, tmp342);
    tmp344 = NofibPrelude.Cons(tmp343, NofibPrelude.Nil);
    tmp345 = NofibPrelude.Cons(tmp335, tmp344);
    tmp346 = lastpiece.P("e", tmp329, tmp345);
    this.ePiece = tmp346;
    tmp347 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp348 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp349 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp350 = NofibPrelude.Cons(tmp349, NofibPrelude.Nil);
    tmp351 = NofibPrelude.Cons(tmp348, tmp350);
    tmp352 = NofibPrelude.Cons(tmp347, tmp351);
    tmp353 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp354 = - 1;
    tmp355 = globalThis.Object.freeze([
      1,
      tmp354
    ]);
    tmp356 = - 2;
    tmp357 = globalThis.Object.freeze([
      1,
      tmp356
    ]);
    tmp358 = NofibPrelude.Cons(tmp357, NofibPrelude.Nil);
    tmp359 = NofibPrelude.Cons(tmp355, tmp358);
    tmp360 = NofibPrelude.Cons(tmp353, tmp359);
    tmp361 = NofibPrelude.Cons(tmp360, NofibPrelude.Nil);
    tmp362 = NofibPrelude.Cons(tmp352, tmp361);
    tmp363 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp364 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp365 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp366 = NofibPrelude.Cons(tmp365, NofibPrelude.Nil);
    tmp367 = NofibPrelude.Cons(tmp364, tmp366);
    tmp368 = NofibPrelude.Cons(tmp363, tmp367);
    tmp369 = NofibPrelude.Cons(tmp368, NofibPrelude.Nil);
    tmp370 = lastpiece.P("d", tmp362, tmp369);
    this.dPiece = tmp370;
    tmp371 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp372 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp373 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp374 = NofibPrelude.Cons(tmp373, NofibPrelude.Nil);
    tmp375 = NofibPrelude.Cons(tmp372, tmp374);
    tmp376 = NofibPrelude.Cons(tmp371, tmp375);
    tmp377 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp378 = - 1;
    tmp379 = globalThis.Object.freeze([
      1,
      tmp378
    ]);
    tmp380 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp381 = NofibPrelude.Cons(tmp380, NofibPrelude.Nil);
    tmp382 = NofibPrelude.Cons(tmp379, tmp381);
    tmp383 = NofibPrelude.Cons(tmp377, tmp382);
    tmp384 = - 1;
    tmp385 = globalThis.Object.freeze([
      1,
      tmp384
    ]);
    tmp386 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp387 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp388 = NofibPrelude.Cons(tmp387, NofibPrelude.Nil);
    tmp389 = NofibPrelude.Cons(tmp386, tmp388);
    tmp390 = NofibPrelude.Cons(tmp385, tmp389);
    tmp391 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp392 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp393 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp394 = NofibPrelude.Cons(tmp393, NofibPrelude.Nil);
    tmp395 = NofibPrelude.Cons(tmp392, tmp394);
    tmp396 = NofibPrelude.Cons(tmp391, tmp395);
    tmp397 = NofibPrelude.Cons(tmp396, NofibPrelude.Nil);
    tmp398 = NofibPrelude.Cons(tmp390, tmp397);
    tmp399 = NofibPrelude.Cons(tmp383, tmp398);
    tmp400 = NofibPrelude.Cons(tmp376, tmp399);
    tmp401 = lastpiece.P("c", NofibPrelude.Nil, tmp400);
    this.cPiece = tmp401;
    tmp402 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp403 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp404 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp405 = NofibPrelude.Cons(tmp404, NofibPrelude.Nil);
    tmp406 = NofibPrelude.Cons(tmp403, tmp405);
    tmp407 = NofibPrelude.Cons(tmp402, tmp406);
    tmp408 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp409 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp410 = - 1;
    tmp411 = globalThis.Object.freeze([
      2,
      tmp410
    ]);
    tmp412 = NofibPrelude.Cons(tmp411, NofibPrelude.Nil);
    tmp413 = NofibPrelude.Cons(tmp409, tmp412);
    tmp414 = NofibPrelude.Cons(tmp408, tmp413);
    tmp415 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp416 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp417 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp418 = NofibPrelude.Cons(tmp417, NofibPrelude.Nil);
    tmp419 = NofibPrelude.Cons(tmp416, tmp418);
    tmp420 = NofibPrelude.Cons(tmp415, tmp419);
    tmp421 = NofibPrelude.Cons(tmp420, NofibPrelude.Nil);
    tmp422 = NofibPrelude.Cons(tmp414, tmp421);
    tmp423 = NofibPrelude.Cons(tmp407, tmp422);
    tmp424 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp425 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp426 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp427 = NofibPrelude.Cons(tmp426, NofibPrelude.Nil);
    tmp428 = NofibPrelude.Cons(tmp425, tmp427);
    tmp429 = NofibPrelude.Cons(tmp424, tmp428);
    tmp430 = NofibPrelude.Cons(tmp429, NofibPrelude.Nil);
    tmp431 = lastpiece.P("b", tmp423, tmp430);
    this.bPiece = tmp431;
    tmp432 = NofibPrelude.Cons(lastpiece.nPiece, NofibPrelude.Nil);
    tmp433 = NofibPrelude.Cons(lastpiece.mPiece, tmp432);
    tmp434 = NofibPrelude.Cons(lastpiece.lPiece, tmp433);
    tmp435 = NofibPrelude.Cons(lastpiece.kPiece, tmp434);
    tmp436 = NofibPrelude.Cons(lastpiece.jPiece, tmp435);
    tmp437 = NofibPrelude.Cons(lastpiece.iPiece, tmp436);
    tmp438 = NofibPrelude.Cons(lastpiece.hPiece, tmp437);
    tmp439 = NofibPrelude.Cons(lastpiece.gPiece, tmp438);
    tmp440 = NofibPrelude.Cons(lastpiece.fPiece, tmp439);
    tmp441 = NofibPrelude.Cons(lastpiece.ePiece, tmp440);
    tmp442 = NofibPrelude.Cons(lastpiece.dPiece, tmp441);
    tmp443 = NofibPrelude.Cons(lastpiece.cPiece, tmp442);
    tmp444 = NofibPrelude.Cons(lastpiece.bPiece, tmp443);
    this.initialPieces = tmp444;
    (class Mode {
      static {
        lastpiece.Mode = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Mode"]; 
    });
    (class PageMode extends lastpiece.Mode {
      static {
        new this
      }
      constructor() {
        super();
        lastpiece.PageMode = this;
        Object.defineProperty(this, "class", {
          value: PageMode
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "PageMode"]; 
    });
    (class ZigZagMode extends lastpiece.Mode {
      static {
        new this
      }
      constructor() {
        super();
        lastpiece.ZigZagMode = this;
        Object.defineProperty(this, "class", {
          value: ZigZagMode
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "ZigZagMode"]; 
    });
    (class LeftMode extends lastpiece.Mode {
      static {
        new this
      }
      constructor() {
        super();
        lastpiece.LeftMode = this;
        Object.defineProperty(this, "class", {
          value: LeftMode
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LeftMode"]; 
    });
    (class OneLineMode extends lastpiece.Mode {
      static {
        new this
      }
      constructor() {
        super();
        lastpiece.OneLineMode = this;
        Object.defineProperty(this, "class", {
          value: OneLineMode
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "OneLineMode"]; 
    });
    (class TextDetails {
      static {
        lastpiece.TextDetails = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "TextDetails"]; 
    });
    this.Chr = function Chr(c) {
      return globalThis.Object.freeze(new Chr.class(c));
    };
    (class Chr extends lastpiece.TextDetails {
      static {
        lastpiece.Chr.class = this
      }
      constructor(c) {
        super();
        this.c = c;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Chr", ["c"]]; 
    });
    this.Str = function Str(s) {
      return globalThis.Object.freeze(new Str.class(s));
    };
    (class Str extends lastpiece.TextDetails {
      static {
        lastpiece.Str.class = this
      }
      constructor(s) {
        super();
        this.s = s;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Str", ["s"]]; 
    });
    this.PStr = function PStr(s) {
      return globalThis.Object.freeze(new PStr.class(s));
    };
    (class PStr extends lastpiece.TextDetails {
      static {
        lastpiece.PStr.class = this
      }
      constructor(s) {
        super();
        this.s = s;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "PStr", ["s"]]; 
    });
    (class AnnotDetails {
      static {
        lastpiece.AnnotDetails = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "AnnotDetails"]; 
    });
    (class AnnotStart extends lastpiece.AnnotDetails {
      static {
        new this
      }
      constructor() {
        super();
        lastpiece.AnnotStart = this;
        Object.defineProperty(this, "class", {
          value: AnnotStart
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "AnnotStart"]; 
    });
    (class AnnotEnd extends lastpiece.AnnotDetails {
      static {
        new this
      }
      constructor() {
        super();
        lastpiece.AnnotEnd = this;
        Object.defineProperty(this, "class", {
          value: AnnotEnd
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "AnnotEnd"]; 
    });
    this.NoAnnot = function NoAnnot(t, i) {
      return globalThis.Object.freeze(new NoAnnot.class(t, i));
    };
    (class NoAnnot extends lastpiece.AnnotDetails {
      static {
        lastpiece.NoAnnot.class = this
      }
      constructor(t, i) {
        super();
        this.t = t;
        this.i = i;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "NoAnnot", ["t", "i"]]; 
    });
    (class IsEmptyy {
      static {
        lastpiece.IsEmptyy = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "IsEmptyy"]; 
    });
    (class IsEmpty extends lastpiece.IsEmptyy {
      static {
        new this
      }
      constructor() {
        super();
        lastpiece.IsEmpty = this;
        Object.defineProperty(this, "class", {
          value: IsEmpty
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "IsEmpty"]; 
    });
    (class NotEmpty extends lastpiece.IsEmptyy {
      static {
        new this
      }
      constructor() {
        super();
        lastpiece.NotEmpty = this;
        Object.defineProperty(this, "class", {
          value: NotEmpty
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "NotEmpty"]; 
    });
    (class Doc {
      static {
        lastpiece.Doc = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Doc"]; 
    });
    (class Empty extends lastpiece.Doc {
      static {
        new this
      }
      constructor() {
        super();
        lastpiece.Empty = this;
        Object.defineProperty(this, "class", {
          value: Empty
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Empty"]; 
    });
    (class NoDoc extends lastpiece.Doc {
      static {
        new this
      }
      constructor() {
        super();
        lastpiece.NoDoc = this;
        Object.defineProperty(this, "class", {
          value: NoDoc
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "NoDoc"]; 
    });
    this.NilAbove = function NilAbove(d) {
      return globalThis.Object.freeze(new NilAbove.class(d));
    };
    (class NilAbove extends lastpiece.Doc {
      static {
        lastpiece.NilAbove.class = this
      }
      constructor(d) {
        super();
        this.d = d;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "NilAbove", ["d"]]; 
    });
    this.TextBeside = function TextBeside(a, d) {
      return globalThis.Object.freeze(new TextBeside.class(a, d));
    };
    (class TextBeside extends lastpiece.Doc {
      static {
        lastpiece.TextBeside.class = this
      }
      constructor(a, d) {
        super();
        this.a = a;
        this.d = d;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "TextBeside", ["a", "d"]]; 
    });
    this.Nest = function Nest(i, d) {
      return globalThis.Object.freeze(new Nest.class(i, d));
    };
    (class Nest extends lastpiece.Doc {
      static {
        lastpiece.Nest.class = this
      }
      constructor(i, d) {
        super();
        this.i = i;
        this.d = d;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Nest", ["i", "d"]]; 
    });
    this.Union = function Union(d1, d2) {
      return globalThis.Object.freeze(new Union.class(d1, d2));
    };
    (class Union extends lastpiece.Doc {
      static {
        lastpiece.Union.class = this
      }
      constructor(d1, d2) {
        super();
        this.d1 = d1;
        this.d2 = d2;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Union", ["d1", "d2"]]; 
    });
    this.Beside = function Beside(d1, b, d2) {
      return globalThis.Object.freeze(new Beside.class(d1, b, d2));
    };
    (class Beside extends lastpiece.Doc {
      static {
        lastpiece.Beside.class = this
      }
      constructor(d1, b, d2) {
        super();
        this.d1 = d1;
        this.b = b;
        this.d2 = d2;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Beside", ["d1", "b", "d2"]]; 
    });
    this.Above = function Above(d1, b, d2) {
      return globalThis.Object.freeze(new Above.class(d1, b, d2));
    };
    (class Above extends lastpiece.Doc {
      static {
        lastpiece.Above.class = this
      }
      constructor(d1, b, d2) {
        super();
        this.d1 = d1;
        this.b = b;
        this.d2 = d2;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Above", ["d1", "b", "d2"]]; 
    });
    tmp445 = lastpiece.Chr(" ");
    tmp446 = lastpiece.NoAnnot(tmp445, 1);
    this.spaceText = tmp446;
    tmp447 = lastpiece.Chr("\n");
    tmp448 = lastpiece.NoAnnot(tmp447, 1);
    this.nlText = tmp448;
  }
  static reduceDoc_beside_above(id, param0, param1, param2) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          let arg$Above$0$, arg$Above$1$, arg$Above$2$, arg$Beside$0$, arg$Beside$1$, arg$Beside$2$, tmp, tmp1;
          if (param0 instanceof lastpiece.Beside.class) {
            arg$Beside$0$ = param0.d1;
            arg$Beside$1$ = param0.b;
            arg$Beside$2$ = param0.d2;
            tmp = lastpiece.reduceDoc(arg$Beside$2$);
            param0 = arg$Beside$0$;
            param1 = arg$Beside$1$;
            param2 = tmp;
            id = 1;
            continue loopLabel
          } else if (param0 instanceof lastpiece.Above.class) {
            arg$Above$0$ = param0.d1;
            arg$Above$1$ = param0.b;
            arg$Above$2$ = param0.d2;
            tmp1 = lastpiece.reduceDoc(arg$Above$2$);
            param0 = arg$Above$0$;
            param1 = arg$Above$1$;
            param2 = tmp1;
            id = 2;
            continue loopLabel
          }
          return param0;
        case 1:
          let scrut, p1, arg$TextBeside$0$, arg$TextBeside$1$, arg$NilAbove$0$, arg$Beside$0$1, arg$Beside$1$1, arg$Beside$2$1, arg$Nest$0$, arg$Nest$1$, arg$Union$0$, arg$Union$1$, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
          if (param0 instanceof lastpiece.NoDoc.class) {
            return lastpiece.NoDoc
          } else if (param0 instanceof lastpiece.Union.class) {
            arg$Union$0$ = param0.d1;
            arg$Union$1$ = param0.d2;
            tmp2 = lastpiece.beside(arg$Union$0$, param1, param2);
            tmp3 = lastpiece.beside(arg$Union$1$, param1, param2);
            return lastpiece.Union(tmp2, tmp3)
          } else if (param0 instanceof lastpiece.Empty.class) {
            return param2
          } else if (param0 instanceof lastpiece.Nest.class) {
            arg$Nest$0$ = param0.i;
            arg$Nest$1$ = param0.d;
            tmp4 = lastpiece.beside(arg$Nest$1$, param1, param2);
            return lastpiece.Nest(arg$Nest$0$, tmp4)
          } else if (param0 instanceof lastpiece.Beside.class) {
            arg$Beside$0$1 = param0.d1;
            arg$Beside$1$1 = param0.b;
            arg$Beside$2$1 = param0.d2;
            scrut = arg$Beside$1$1 === param1;
            if (scrut === true) {
              tmp5 = lastpiece.beside(arg$Beside$2$1, param1, param2);
              param0 = arg$Beside$0$1;
              param1 = arg$Beside$1$1;
              param2 = tmp5;
              id = 1;
              continue loopLabel
            }
            tmp6 = lastpiece.Beside(arg$Beside$0$1, arg$Beside$1$1, arg$Beside$2$1);
            tmp7 = lastpiece.reduceDoc(tmp6);
            param0 = tmp7;
            id = 1;
            continue loopLabel;
          } else if (param0 instanceof lastpiece.Above.class) {
            tmp8 = lastpiece.reduceDoc(param0);
            param0 = tmp8;
            id = 1;
            continue loopLabel
          } else if (param0 instanceof lastpiece.NilAbove.class) {
            arg$NilAbove$0$ = param0.d;
            tmp9 = lastpiece.beside(arg$NilAbove$0$, param1, param2);
            return lastpiece.NilAbove(tmp9)
          } else if (param0 instanceof lastpiece.TextBeside.class) {
            arg$TextBeside$0$ = param0.a;
            arg$TextBeside$1$ = param0.d;
            p1 = arg$TextBeside$1$;
            if (p1 instanceof lastpiece.Empty.class) {
              tmp10 = lastpiece.nilBeside(param1, param2);
              return lastpiece.TextBeside(arg$TextBeside$0$, tmp10)
            }
            tmp10 = lastpiece.beside(arg$TextBeside$1$, param1, param2);
            return lastpiece.TextBeside(arg$TextBeside$0$, tmp10);
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        case 2:
          let arg$Above$0$1, arg$Above$1$1, arg$Above$2$1, tmp11, tmp12, tmp13, tmp14;
          if (param0 instanceof lastpiece.Above.class) {
            arg$Above$0$1 = param0.d1;
            arg$Above$1$1 = param0.b;
            arg$Above$2$1 = param0.d2;
            tmp11 = lastpiece.above(arg$Above$2$1, param1, param2);
            param0 = arg$Above$0$1;
            param1 = arg$Above$1$1;
            param2 = tmp11;
            id = 2;
            continue loopLabel
          } else if (param0 instanceof lastpiece.Beside.class) {
            tmp12 = lastpiece.reduceDoc(param0);
            tmp13 = lastpiece.reduceDoc(param2);
            return lastpiece.aboveNest(tmp12, param1, 0, tmp13)
          }
          tmp14 = lastpiece.reduceDoc(param2);
          return lastpiece.aboveNest(param0, param1, 0, tmp14);
      }
      break;
    }
  } 
  static isSome(x) {
    if (x instanceof NofibPrelude.Some.class) {
      return true
    }
    return false;
  } 
  static mapMaybe(f, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, arg$Some$0$, tmp;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = runtime.safeCall(f(arg$Cons$0$));
        if (scrut instanceof NofibPrelude.None.class) {
          ls = arg$Cons$1$;
          continue loopLabel
        } else if (scrut instanceof NofibPrelude.Some.class) {
          arg$Some$0$ = scrut.x;
          tmp = lastpiece.mapMaybe(f, arg$Cons$1$);
          return NofibPrelude.Cons(arg$Some$0$, tmp)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static compareIntInt(ab, cd) {
    let scrut, scrut1, scrut2, scrut3, element1$, element0$, element1$1, element0$1;
    if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
      element0$ = runtime.Tuple.get(ab, 0);
      element1$ = runtime.Tuple.get(ab, 1);
      if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
        element0$1 = runtime.Tuple.get(cd, 0);
        element1$1 = runtime.Tuple.get(cd, 1);
        scrut = element0$ > element0$1;
        if (scrut === true) {
          return lastpiece.GT
        }
        scrut1 = element0$ < element0$1;
        if (scrut1 === true) {
          return lastpiece.LT
        }
        scrut2 = element1$ > element1$1;
        if (scrut2 === true) {
          return lastpiece.GT
        }
        scrut3 = element1$ < element1$1;
        if (scrut3 === true) {
          return lastpiece.LT
        }
        return lastpiece.EQ;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static mapLookup(k, m) {
    loopLabel: while (true) {
      let scrut, arg$Bin$1$, arg$Bin$2$, arg$Bin$3$, arg$Bin$4$;
      if (m instanceof lastpiece.Tip.class) {
        return NofibPrelude.None
      } else if (m instanceof lastpiece.Bin.class) {
        arg$Bin$1$ = m.k;
        arg$Bin$2$ = m.v;
        arg$Bin$3$ = m.l;
        arg$Bin$4$ = m.r;
        scrut = lastpiece.compareIntInt(k, arg$Bin$1$);
        if (scrut instanceof lastpiece.LT.class) {
          m = arg$Bin$3$;
          continue loopLabel
        } else if (scrut instanceof lastpiece.GT.class) {
          m = arg$Bin$4$;
          continue loopLabel
        } else if (scrut instanceof lastpiece.EQ.class) {
          return NofibPrelude.Some(arg$Bin$2$)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static size(p) {
    let arg$Bin$0$;
    if (p instanceof lastpiece.Tip.class) {
      return 0
    } else if (p instanceof lastpiece.Bin.class) {
      arg$Bin$0$ = p.i;
      return arg$Bin$0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static bin(k, x, l, r) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = lastpiece.size(l);
    tmp1 = lastpiece.size(r);
    tmp2 = tmp + tmp1;
    tmp3 = tmp2 + 1;
    return lastpiece.Bin(tmp3, k, x, l, r)
  } 
  static singleL(k1, x1, t1, r) {
    let arg$Bin$1$, arg$Bin$2$, arg$Bin$3$, arg$Bin$4$, tmp;
    if (r instanceof lastpiece.Bin.class) {
      arg$Bin$1$ = r.k;
      arg$Bin$2$ = r.v;
      arg$Bin$3$ = r.l;
      arg$Bin$4$ = r.r;
      tmp = lastpiece.bin(k1, x1, t1, arg$Bin$3$);
      return lastpiece.bin(arg$Bin$1$, arg$Bin$2$, tmp, arg$Bin$4$)
    }
    throw runtime.safeCall(globalThis.Error("singleL Tip"));
  } 
  static singleR(k1, x1, l, t3) {
    let arg$Bin$1$, arg$Bin$2$, arg$Bin$3$, arg$Bin$4$, tmp;
    if (l instanceof lastpiece.Bin.class) {
      arg$Bin$1$ = l.k;
      arg$Bin$2$ = l.v;
      arg$Bin$3$ = l.l;
      arg$Bin$4$ = l.r;
      tmp = lastpiece.bin(k1, x1, arg$Bin$4$, t3);
      return lastpiece.bin(arg$Bin$1$, arg$Bin$2$, arg$Bin$3$, tmp)
    }
    throw runtime.safeCall(globalThis.Error("singleR Tip"));
  } 
  static doubleL(k1, x1, t1, r) {
    let arg$Bin$1$, arg$Bin$2$, arg$Bin$3$, arg$Bin$4$, arg$Bin$1$1, arg$Bin$2$1, arg$Bin$3$1, arg$Bin$4$1, tmp, tmp1;
    if (r instanceof lastpiece.Bin.class) {
      arg$Bin$1$ = r.k;
      arg$Bin$2$ = r.v;
      arg$Bin$3$ = r.l;
      arg$Bin$4$ = r.r;
      if (arg$Bin$3$ instanceof lastpiece.Bin.class) {
        arg$Bin$1$1 = arg$Bin$3$.k;
        arg$Bin$2$1 = arg$Bin$3$.v;
        arg$Bin$3$1 = arg$Bin$3$.l;
        arg$Bin$4$1 = arg$Bin$3$.r;
        tmp = lastpiece.bin(k1, x1, t1, arg$Bin$3$1);
        tmp1 = lastpiece.bin(arg$Bin$1$, arg$Bin$2$, arg$Bin$4$1, arg$Bin$4$);
        return lastpiece.bin(arg$Bin$1$1, arg$Bin$2$1, tmp, tmp1)
      }
      throw runtime.safeCall(globalThis.Error("doubleL Tip"));
    }
    throw runtime.safeCall(globalThis.Error("doubleL Tip"));
  } 
  static doubleR(k1, x1, l, t4) {
    let arg$Bin$1$, arg$Bin$2$, arg$Bin$3$, arg$Bin$4$, arg$Bin$1$1, arg$Bin$2$1, arg$Bin$3$1, arg$Bin$4$1, tmp, tmp1;
    if (l instanceof lastpiece.Bin.class) {
      arg$Bin$1$ = l.k;
      arg$Bin$2$ = l.v;
      arg$Bin$3$ = l.l;
      arg$Bin$4$ = l.r;
      if (arg$Bin$4$ instanceof lastpiece.Bin.class) {
        arg$Bin$1$1 = arg$Bin$4$.k;
        arg$Bin$2$1 = arg$Bin$4$.v;
        arg$Bin$3$1 = arg$Bin$4$.l;
        arg$Bin$4$1 = arg$Bin$4$.r;
        tmp = lastpiece.bin(arg$Bin$1$, arg$Bin$2$, arg$Bin$3$, arg$Bin$3$1);
        tmp1 = lastpiece.bin(k1, x1, arg$Bin$4$1, t4);
        return lastpiece.bin(arg$Bin$1$1, arg$Bin$2$1, tmp, tmp1)
      }
      throw runtime.safeCall(globalThis.Error("doubleR Tip"));
    }
    throw runtime.safeCall(globalThis.Error("doubleR Tip"));
  } 
  static rotateL(k, x, l, r) {
    let scrut, arg$Bin$3$, arg$Bin$4$, tmp, tmp1, tmp2;
    if (r instanceof lastpiece.Bin.class) {
      arg$Bin$3$ = r.l;
      arg$Bin$4$ = r.r;
      tmp = lastpiece.size(arg$Bin$3$);
      tmp1 = lastpiece.size(arg$Bin$4$);
      tmp2 = 2 * tmp1;
      scrut = tmp < tmp2;
      if (scrut === true) {
        return lastpiece.singleL(k, x, l, r)
      }
      return lastpiece.doubleL(k, x, l, r);
    }
    throw runtime.safeCall(globalThis.Error("rotateL Tip"));
  } 
  static rotateR(k, x, l, r) {
    let scrut, arg$Bin$3$, arg$Bin$4$, tmp, tmp1, tmp2;
    if (l instanceof lastpiece.Bin.class) {
      arg$Bin$3$ = l.l;
      arg$Bin$4$ = l.r;
      tmp = lastpiece.size(arg$Bin$4$);
      tmp1 = lastpiece.size(arg$Bin$3$);
      tmp2 = 2 * tmp1;
      scrut = tmp < tmp2;
      if (scrut === true) {
        return lastpiece.singleR(k, x, l, r)
      }
      return lastpiece.doubleR(k, x, l, r);
    }
    throw runtime.safeCall(globalThis.Error("rotateR Tip"));
  } 
  static balance(k, x, l, r) {
    let sizeL, sizeR, sizeX, scrut, scrut1, scrut2, tmp, tmp1, tmp2, tmp3;
    sizeL = lastpiece.size(l);
    sizeR = lastpiece.size(r);
    tmp = sizeL + sizeR;
    sizeX = tmp + 1;
    tmp1 = sizeL + sizeR;
    scrut = tmp1 <= 1;
    if (scrut === true) {
      return lastpiece.Bin(sizeX, k, x, l, r)
    }
    tmp2 = 4 * sizeL;
    scrut1 = sizeR >= tmp2;
    if (scrut1 === true) {
      return lastpiece.rotateL(k, x, l, r)
    }
    tmp3 = 4 * sizeR;
    scrut2 = sizeL >= tmp3;
    if (scrut2 === true) {
      return lastpiece.rotateR(k, x, l, r)
    }
    return lastpiece.Bin(sizeX, k, x, l, r);
  } 
  static insert(kx, x, m) {
    let scrut, arg$Bin$0$, arg$Bin$1$, arg$Bin$2$, arg$Bin$3$, arg$Bin$4$, tmp, tmp1;
    if (m instanceof lastpiece.Tip.class) {
      return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
    } else if (m instanceof lastpiece.Bin.class) {
      arg$Bin$0$ = m.i;
      arg$Bin$1$ = m.k;
      arg$Bin$2$ = m.v;
      arg$Bin$3$ = m.l;
      arg$Bin$4$ = m.r;
      scrut = lastpiece.compareIntInt(kx, arg$Bin$1$);
      if (scrut instanceof lastpiece.LT.class) {
        tmp = lastpiece.insert(kx, x, arg$Bin$3$);
        return lastpiece.balance(arg$Bin$1$, arg$Bin$2$, tmp, arg$Bin$4$)
      } else if (scrut instanceof lastpiece.GT.class) {
        tmp1 = lastpiece.insert(kx, x, arg$Bin$4$);
        return lastpiece.balance(arg$Bin$1$, arg$Bin$2$, arg$Bin$3$, tmp1)
      } else if (scrut instanceof lastpiece.EQ.class) {
        return lastpiece.Bin(arg$Bin$0$, kx, x, arg$Bin$3$, arg$Bin$4$)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static indent(n) {
    let scrut, tmp, tmp1;
    scrut = n <= 0;
    if (scrut === true) {
      return NofibPrelude.Nil
    }
    tmp = n - 1;
    tmp1 = lastpiece.indent(tmp);
    return NofibPrelude.Cons(" ", tmp1);
  } 
  static flip(s) {
    if (s instanceof lastpiece.Male.class) {
      return lastpiece.Female
    } else if (s instanceof lastpiece.Female.class) {
      return lastpiece.Male
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static addIntInt(row_col, orow_ocol) {
    let element1$, element0$, element1$1, element0$1, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(row_col) && row_col.length === 2) {
      element0$ = runtime.Tuple.get(row_col, 0);
      element1$ = runtime.Tuple.get(row_col, 1);
      if (runtime.Tuple.isArrayLike(orow_ocol) && orow_ocol.length === 2) {
        element0$1 = runtime.Tuple.get(orow_ocol, 0);
        element1$1 = runtime.Tuple.get(orow_ocol, 1);
        tmp = element0$ + element0$1;
        tmp1 = element1$ + element1$1;
        return globalThis.Object.freeze([
          tmp,
          tmp1
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static next(row_col) {
    let element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(row_col) && row_col.length === 2) {
      element0$ = runtime.Tuple.get(row_col, 0);
      element1$ = runtime.Tuple.get(row_col, 1);
      tmp = element1$ + 1;
      return globalThis.Object.freeze([
        element0$,
        tmp
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static check(bd, sq) {
    return lastpiece.mapLookup(sq, bd)
  } 
  static extend(bd, sq, id) {
    return lastpiece.insert(sq, id, bd)
  } 
  static extend_maybe(bd, sq, id) {
    let scrut, scrut1, element1$, element0$, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(sq) && sq.length === 2) {
      element0$ = runtime.Tuple.get(sq, 0);
      element1$ = runtime.Tuple.get(sq, 1);
      tmp = element0$ > lastpiece.maxRow;
      if (tmp === false) {
        tmp1 = element1$ < 1;
      } else {
        tmp1 = true;
      }
      if (tmp1 === false) {
        tmp2 = element1$ > lastpiece.maxCol;
      } else {
        tmp2 = true;
      }
      scrut = tmp2;
      if (scrut === true) {
        return NofibPrelude.None
      }
      scrut1 = lastpiece.check(bd, sq);
      if (scrut1 instanceof NofibPrelude.Some.class) {
        return NofibPrelude.None
      } else if (scrut1 instanceof NofibPrelude.None.class) {
        tmp3 = lastpiece.extend(bd, sq, id);
        return NofibPrelude.Some(tmp3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static pickOne(xs) {
    let go, lambda;
    go = function go(f, xs1) {
      let x, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, lambda1, tmp2;
      if (xs1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (xs1 instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs1.head;
        arg$Cons$1$ = xs1.tail;
        x = arg$Cons$0$;
        tmp = runtime.safeCall(f(arg$Cons$1$));
        tmp1 = globalThis.Object.freeze([
          x,
          tmp
        ]);
        lambda1 = (undefined, function (p) {
          let tmp3;
          tmp3 = runtime.safeCall(f(p));
          return NofibPrelude.Cons(x, tmp3)
        });
        tmp2 = go(lambda1, arg$Cons$1$);
        return NofibPrelude.Cons(tmp1, tmp2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    lambda = (undefined, function (x) {
      return x
    });
    return go(lambda, xs)
  } 
  static fit(bd, sq, id, os) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, arg$Some$0$, tmp, tmp1;
      if (os instanceof NofibPrelude.Nil.class) {
        tmp = lastpiece.extend(bd, sq, id);
        return NofibPrelude.Some(tmp)
      } else if (os instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = os.head;
        arg$Cons$1$ = os.tail;
        tmp1 = lastpiece.addIntInt(sq, arg$Cons$0$);
        scrut = lastpiece.extend_maybe(bd, tmp1, id);
        if (scrut instanceof NofibPrelude.Some.class) {
          arg$Some$0$ = scrut.x;
          bd = arg$Some$0$;
          os = arg$Cons$1$;
          continue loopLabel
        } else if (scrut instanceof NofibPrelude.None.class) {
          return NofibPrelude.None
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static tryy(sq, se, bd, id_is_ps) {
    let scrut, element2$, element1$, element0$, arg$Some$0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(id_is_ps) && id_is_ps.length === 3) {
      element0$ = runtime.Tuple.get(id_is_ps, 0);
      element1$ = runtime.Tuple.get(id_is_ps, 1);
      element2$ = runtime.Tuple.get(id_is_ps, 2);
      scrut = lastpiece.fit(bd, sq, element0$, element1$);
      if (scrut instanceof NofibPrelude.Some.class) {
        arg$Some$0$ = scrut.x;
        tmp = lastpiece.next(sq);
        tmp1 = lastpiece.flip(se);
        tmp2 = lastpiece.search(tmp, tmp1, arg$Some$0$, element2$);
        return NofibPrelude.Some(tmp2)
      } else if (scrut instanceof NofibPrelude.None.class) {
        return NofibPrelude.None
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static search(row_col, sey, bd, ps) {
    loopLabel: while (true) {
      let lscomp1, scrut, scrut1, choices, scrut2, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda, sey1, row_col1, bd1;
      row_col1 = row_col;
      sey1 = sey;
      bd1 = bd;
      if (runtime.Tuple.isArrayLike(row_col1) && row_col1.length === 2) {
        element0$ = runtime.Tuple.get(row_col1, 0);
        element1$ = runtime.Tuple.get(row_col1, 1);
        if (ps instanceof NofibPrelude.Nil.class) {
          return lastpiece.Soln(bd1)
        }
        tmp = lastpiece.maxCol + 1;
        scrut = element1$ === tmp;
        if (scrut === true) {
          tmp1 = element0$ + 1;
          tmp2 = globalThis.Object.freeze([
            tmp1,
            1
          ]);
          tmp3 = lastpiece.flip(sey1);
          row_col = tmp2;
          sey = tmp3;
          bd = bd1;
          continue loopLabel
        }
        scrut1 = lastpiece.check(bd1, row_col1);
        if (scrut1 instanceof NofibPrelude.Some.class) {
          tmp4 = lastpiece.next(row_col1);
          tmp5 = lastpiece.flip(sey1);
          row_col = tmp4;
          sey = tmp5;
          bd = bd1;
          continue loopLabel
        }
        lscomp1 = function lscomp1(ls) {
          let lscomp2, ls1, ps1, id, arg$Cons$0$, arg$Cons$1$, element1$1, element0$1, arg$P$0$, arg$P$1$, arg$P$2$;
          if (ls instanceof NofibPrelude.Nil.class) {
            return NofibPrelude.Nil
          } else if (ls instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = ls.head;
            arg$Cons$1$ = ls.tail;
            if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
              element0$1 = runtime.Tuple.get(arg$Cons$0$, 0);
              element1$1 = runtime.Tuple.get(arg$Cons$0$, 1);
              if (element0$1 instanceof lastpiece.P.class) {
                arg$P$0$ = element0$1.i;
                arg$P$1$ = element0$1.a;
                arg$P$2$ = element0$1.b;
                ls1 = arg$Cons$1$;
                ps1 = element1$1;
                id = arg$P$0$;
                lscomp2 = function lscomp2(ls2) {
                  let arg$Cons$0$1, arg$Cons$1$1, tmp7, tmp8;
                  if (ls2 instanceof NofibPrelude.Nil.class) {
                    return lscomp1(ls1)
                  } else if (ls2 instanceof NofibPrelude.Cons.class) {
                    arg$Cons$0$1 = ls2.head;
                    arg$Cons$1$1 = ls2.tail;
                    tmp7 = globalThis.Object.freeze([
                      id,
                      arg$Cons$0$1,
                      ps1
                    ]);
                    tmp8 = lscomp2(arg$Cons$1$1);
                    return NofibPrelude.Cons(tmp7, tmp8)
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                };
                if (sey1 instanceof lastpiece.Male.class) {
                  return lscomp2(arg$P$1$)
                }
                return lscomp2(arg$P$2$);
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        };
        tmp6 = lastpiece.pickOne(ps);
        choices = lscomp1(tmp6);
        lambda = (undefined, function (x) {
          return lastpiece.tryy(row_col1, sey1, bd1, x)
        });
        scrut2 = lastpiece.mapMaybe(lambda, choices);
        if (scrut2 instanceof NofibPrelude.Nil.class) {
          return lastpiece.Fail(bd1, row_col1)
        }
        return lastpiece.Choose(scrut2);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static annotSize(p) {
    let arg$NoAnnot$1$;
    if (p instanceof lastpiece.NoAnnot.class) {
      arg$NoAnnot$1$ = p.i;
      return arg$NoAnnot$1$
    }
    return 0;
  } 
  static display(s) {
    let arg$Fail$1$, arg$Choose$0$, arg$Soln$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    if (s instanceof lastpiece.Soln.class) {
      arg$Soln$0$ = s.b;
      tmp = NofibPrelude.nofibStringToList("Success!");
      tmp1 = lastpiece.text(tmp);
      tmp2 = lastpiece.displayBoard(arg$Soln$0$);
      tmp3 = lastpiece.nest(2, tmp2);
      tmp4 = NofibPrelude.Cons(tmp3, NofibPrelude.Nil);
      tmp5 = NofibPrelude.Cons(tmp1, tmp4);
      return lastpiece.vcat(tmp5)
    } else if (s instanceof lastpiece.Choose.class) {
      arg$Choose$0$ = s.s;
      tmp6 = NofibPrelude.map(lastpiece.display, arg$Choose$0$);
      return lastpiece.vcat(tmp6)
    } else if (s instanceof lastpiece.Fail.class) {
      arg$Fail$1$ = s.s;
      if (runtime.Tuple.isArrayLike(arg$Fail$1$) && arg$Fail$1$.length === 2) {
        runtime.Tuple.get(arg$Fail$1$, 0);
        runtime.Tuple.get(arg$Fail$1$, 1);
        return lastpiece.Empty
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static displayBoard(bd) {
    let row, tmp, tmp1, tmp2, tmp3;
    row = function row(n) {
      let lambda, tmp4, tmp5;
      lambda = (undefined, function (col) {
        let n1, inlinedVal, scrut, arg$Some$0$, tmp6;
        n1 = n;
        tmp6 = globalThis.Object.freeze([
          n1,
          col
        ]);
        scrut = lastpiece.check(bd, tmp6);
        if (scrut instanceof NofibPrelude.Some.class) {
          arg$Some$0$ = scrut.x;
          inlinedVal = lastpiece.char(arg$Some$0$);
          return inlinedVal
        } else if (scrut instanceof NofibPrelude.None.class) {
          inlinedVal = lastpiece.char(".");
          return inlinedVal
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      });
      tmp4 = NofibPrelude.enumFromTo(1, lastpiece.maxCol);
      tmp5 = NofibPrelude.map(lambda, tmp4);
      return lastpiece.hcat(tmp5)
    };
    tmp = NofibPrelude.enumFromTo(1, lastpiece.maxCol);
    tmp1 = NofibPrelude.map(row, tmp);
    tmp2 = lastpiece.vcat(tmp1);
    tmp3 = lastpiece.text(NofibPrelude.Nil);
    return lastpiece.above_(tmp2, false, tmp3)
  } 
  static eliminateEmpty(cons, p, g, q) {
    let element1$, element0$, tmp;
    if (p instanceof lastpiece.Empty.class) {
      return q
    }
    if (runtime.Tuple.isArrayLike(q) && q.length === 2) {
      element0$ = runtime.Tuple.get(q, 0);
      element1$ = runtime.Tuple.get(q, 1);
      if (element0$ instanceof lastpiece.NotEmpty.class) {
        tmp = runtime.safeCall(cons(p, g, element1$));
        return globalThis.Object.freeze([
          lastpiece.NotEmpty,
          tmp
        ])
      } else if (element0$ instanceof lastpiece.IsEmpty.class) {
        tmp = p;
        return globalThis.Object.freeze([
          lastpiece.NotEmpty,
          tmp
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static reduceVert(doc) {
    let arg$Above$0$, arg$Above$1$, arg$Above$2$, lambda, tmp, tmp1, tmp2;
    if (doc instanceof lastpiece.Above.class) {
      arg$Above$0$ = doc.d1;
      arg$Above$1$ = doc.b;
      arg$Above$2$ = doc.d2;
      lambda = (undefined, function (a, b, c) {
        return lastpiece.Above(a, b, c)
      });
      tmp = lastpiece.reduceVert(arg$Above$0$);
      tmp1 = NofibPrelude.snd(tmp);
      tmp2 = lastpiece.reduceVert(arg$Above$2$);
      return lastpiece.eliminateEmpty(lambda, tmp1, arg$Above$1$, tmp2)
    }
    return globalThis.Object.freeze([
      lastpiece.NotEmpty,
      doc
    ]);
  } 
  static vcat(ls) {
    let lambda, tmp, tmp1;
    lambda = (undefined, function (p, q) {
      return lastpiece.Above(p, false, q)
    });
    tmp = NofibPrelude.foldr(lambda, lastpiece.Empty, ls);
    tmp1 = lastpiece.reduceVert(tmp);
    return NofibPrelude.snd(tmp1)
  } 
  static text(s) {
    let sl, tmp, tmp1;
    sl = NofibPrelude.listLen(s);
    tmp = lastpiece.Str(s);
    tmp1 = lastpiece.NoAnnot(tmp, sl);
    return lastpiece.TextBeside(tmp1, lastpiece.Empty)
  } 
  static char(c) {
    let tmp, tmp1;
    tmp = lastpiece.Chr(c);
    tmp1 = lastpiece.NoAnnot(tmp, 1);
    return lastpiece.TextBeside(tmp1, lastpiece.Empty)
  } 
  static reduceHoriz(doc) {
    let arg$Beside$0$, arg$Beside$1$, arg$Beside$2$, lambda, tmp, tmp1, tmp2;
    if (doc instanceof lastpiece.Beside.class) {
      arg$Beside$0$ = doc.d1;
      arg$Beside$1$ = doc.b;
      arg$Beside$2$ = doc.d2;
      lambda = (undefined, function (a, b, c) {
        return lastpiece.Beside(a, b, c)
      });
      tmp = lastpiece.reduceHoriz(arg$Beside$0$);
      tmp1 = NofibPrelude.snd(tmp);
      tmp2 = lastpiece.reduceHoriz(arg$Beside$2$);
      return lastpiece.eliminateEmpty(lambda, tmp1, arg$Beside$1$, tmp2)
    }
    return globalThis.Object.freeze([
      lastpiece.NotEmpty,
      doc
    ]);
  } 
  static hcat(ls) {
    let lambda, tmp, tmp1;
    lambda = (undefined, function (p, q) {
      return lastpiece.Beside(p, false, q)
    });
    tmp = NofibPrelude.foldr(lambda, lastpiece.Empty, ls);
    tmp1 = lastpiece.reduceHoriz(tmp);
    return NofibPrelude.snd(tmp1)
  } 
  static above_(p, g, q) {
    if (q instanceof lastpiece.Empty.class) {
      return p
    }
    if (g instanceof lastpiece.Empty.class) {
      return q
    }
    return lastpiece.Above(p, g, q);
  } 
  static nest(k, p) {
    let tmp;
    tmp = lastpiece.reduceDoc(p);
    return lastpiece.mkNest(k, tmp)
  } 
  static mkNest(k, p) {
    loopLabel: while (true) {
      let scrut, arg$Nest$0$, arg$Nest$1$, tmp;
      if (p instanceof lastpiece.Nest.class) {
        arg$Nest$0$ = p.i;
        arg$Nest$1$ = p.d;
        tmp = k + arg$Nest$0$;
        k = tmp;
        p = arg$Nest$1$;
        continue loopLabel
      } else if (p instanceof lastpiece.NoDoc.class) {
        return lastpiece.NoDoc
      } else if (p instanceof lastpiece.Empty.class) {
        return lastpiece.Empty
      }
      scrut = k === 0;
      if (scrut === true) {
        return p
      }
      return lastpiece.Nest(k, p);
    }
  } 
  static reduceDoc(p) {
    return lastpiece.reduceDoc_beside_above(0, p, undefined, undefined)
  } 
  static beside(p, g, q) {
    return lastpiece.reduceDoc_beside_above(1, p, g, q)
  } 
  static above(p, g, q) {
    return lastpiece.reduceDoc_beside_above(2, p, g, q)
  } 
  static nilBeside(g, p) {
    loopLabel: while (true) {
      let arg$Nest$1$;
      if (p instanceof lastpiece.Empty.class) {
        return lastpiece.Empty
      } else if (p instanceof lastpiece.Nest.class) {
        arg$Nest$1$ = p.d;
        p = arg$Nest$1$;
        continue loopLabel
      }
      if (g === true) {
        return lastpiece.TextBeside(lastpiece.spaceText, p)
      }
      return p;
    }
  } 
  static aboveNest(p, g, k, q) {
    let p1, k1, arg$TextBeside$0$, arg$TextBeside$1$, arg$NilAbove$0$, arg$Nest$0$, arg$Nest$1$, arg$Union$0$, arg$Union$1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    if (p instanceof lastpiece.NoDoc.class) {
      return lastpiece.NoDoc
    } else if (p instanceof lastpiece.Union.class) {
      arg$Union$0$ = p.d1;
      arg$Union$1$ = p.d2;
      tmp = lastpiece.aboveNest(arg$Union$0$, g, k, q);
      tmp1 = lastpiece.aboveNest(arg$Union$1$, g, k, q);
      return lastpiece.Union(tmp, tmp1)
    } else if (p instanceof lastpiece.Empty.class) {
      return lastpiece.mkNest(k, q)
    } else if (p instanceof lastpiece.Nest.class) {
      arg$Nest$0$ = p.i;
      arg$Nest$1$ = p.d;
      tmp2 = k - arg$Nest$0$;
      tmp3 = lastpiece.aboveNest(arg$Nest$1$, g, tmp2, q);
      return lastpiece.Nest(arg$Nest$0$, tmp3)
    } else if (p instanceof lastpiece.NilAbove.class) {
      arg$NilAbove$0$ = p.d;
      tmp4 = lastpiece.aboveNest(arg$NilAbove$0$, g, k, q);
      return lastpiece.NilAbove(tmp4)
    } else if (p instanceof lastpiece.TextBeside.class) {
      arg$TextBeside$0$ = p.a;
      arg$TextBeside$1$ = p.d;
      p1 = arg$TextBeside$1$;
      tmp5 = lastpiece.annotSize(arg$TextBeside$0$);
      k1 = k - tmp5;
      if (p1 instanceof lastpiece.Empty.class) {
        tmp6 = lastpiece.nilAboveNest(g, k1, q);
        return lastpiece.TextBeside(arg$TextBeside$0$, tmp6)
      }
      tmp6 = lastpiece.aboveNest(arg$TextBeside$1$, g, k1, q);
      return lastpiece.TextBeside(arg$TextBeside$0$, tmp6);
    } else if (p instanceof lastpiece.Above.class) {
      throw runtime.safeCall(globalThis.Error("aboveNest Above"))
    } else if (p instanceof lastpiece.Beside.class) {
      throw runtime.safeCall(globalThis.Error("aboveNest Beside"))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static nilAboveNest(g, k, q) {
    loopLabel: while (true) {
      let scrut, scrut1, arg$Nest$0$, arg$Nest$1$, tmp, tmp1, tmp2, tmp3, tmp4;
      if (q instanceof lastpiece.Empty.class) {
        return lastpiece.Empty
      } else if (q instanceof lastpiece.Nest.class) {
        arg$Nest$0$ = q.i;
        arg$Nest$1$ = q.d;
        tmp = k + arg$Nest$0$;
        k = tmp;
        q = arg$Nest$1$;
        continue loopLabel
      }
      scrut = ! g;
      if (scrut === true) {
        scrut1 = k > 0;
        if (scrut1 === true) {
          tmp1 = lastpiece.indent(k);
          tmp2 = lastpiece.Str(tmp1);
          tmp3 = lastpiece.NoAnnot(tmp2, k);
          return lastpiece.TextBeside(tmp3, q)
        }
      }
      tmp4 = lastpiece.mkNest(k, q);
      return lastpiece.NilAbove(tmp4);
    }
  } 
  static printDoc(d) {
    let put, done;
    put = function put(k, next) {
      let arg$PStr$0$, arg$Str$0$, arg$Chr$0$;
      if (k instanceof lastpiece.Chr.class) {
        arg$Chr$0$ = k.c;
        return NofibPrelude.Cons(arg$Chr$0$, next)
      } else if (k instanceof lastpiece.Str.class) {
        arg$Str$0$ = k.s;
        return NofibPrelude.append(arg$Str$0$, next)
      } else if (k instanceof lastpiece.PStr.class) {
        arg$PStr$0$ = k.s;
        return NofibPrelude.append(arg$PStr$0$, next)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    done = NofibPrelude.Cons("\n", NofibPrelude.Nil);
    return lastpiece.fullRender(lastpiece.ZigZagMode, 200, 1.5, put, done, d)
  } 
  static fullRender(m, l, r, txt, a, b) {
    let annTxt;
    annTxt = function annTxt(p, x) {
      let arg$NoAnnot$0$;
      if (p instanceof lastpiece.NoAnnot.class) {
        arg$NoAnnot$0$ = p.t;
        return runtime.safeCall(txt(arg$NoAnnot$0$, x))
      }
      return x;
    };
    return lastpiece.fullRenderAnn(m, l, r, annTxt, a, b)
  } 
  static ceiling(x) {
    return runtime.safeCall(globalThis.Math.ceil(x))
  } 
  static fullRenderAnn(m, lineLen, ribbons, txt, rest, doc) {
    let ribbonLen, doc1, lambda, tmp, tmp1, tmp2, tmp3, tmp4;
    if (m instanceof lastpiece.OneLineMode.class) {
      lambda = (undefined, function (a, b) {
        return b
      });
      tmp = lastpiece.reduceDoc(doc);
      return lastpiece.easyDisplay(lastpiece.spaceText, lambda, txt, rest, tmp)
    } else if (m instanceof lastpiece.LeftMode.class) {
      tmp1 = lastpiece.reduceDoc(doc);
      return lastpiece.easyDisplay(lastpiece.nlText, lastpiece.first, txt, rest, tmp1)
    }
    tmp2 = lineLen / ribbons;
    ribbonLen = lastpiece.ceiling(tmp2);
    if (m instanceof lastpiece.ZigZagMode.class) {
      tmp3 = 2147483647;
    } else {
      tmp3 = lineLen;
    }
    tmp4 = lastpiece.reduceDoc(doc);
    doc1 = lastpiece.best(tmp3, ribbonLen, tmp4);
    return lastpiece.displayDoc(m, lineLen, ribbonLen, txt, rest, doc1);
  } 
  static easyDisplay(nlSpaceText, choose, txt, end, x) {
    let lay;
    lay = function lay(x1) {
      let arg$TextBeside$0$, arg$TextBeside$1$, arg$NilAbove$0$, arg$Nest$1$, arg$Union$0$, arg$Union$1$, tmp, tmp1, tmp2;
      if (x1 instanceof lastpiece.NoDoc.class) {
        throw runtime.safeCall(globalThis.Error("easyDisplay: NoDoc"))
      } else if (x1 instanceof lastpiece.Union.class) {
        arg$Union$0$ = x1.d1;
        arg$Union$1$ = x1.d2;
        tmp = runtime.safeCall(choose(arg$Union$0$, arg$Union$1$));
        return lay(tmp)
      } else if (x1 instanceof lastpiece.Nest.class) {
        arg$Nest$1$ = x1.d;
        return lay(arg$Nest$1$)
      } else if (x1 instanceof lastpiece.Empty.class) {
        return end
      } else if (x1 instanceof lastpiece.NilAbove.class) {
        arg$NilAbove$0$ = x1.d;
        tmp1 = lay(arg$NilAbove$0$);
        return runtime.safeCall(txt(nlSpaceText, tmp1))
      } else if (x1 instanceof lastpiece.TextBeside.class) {
        arg$TextBeside$0$ = x1.a;
        arg$TextBeside$1$ = x1.d;
        tmp2 = lay(arg$TextBeside$1$);
        return runtime.safeCall(txt(arg$TextBeside$0$, tmp2))
      } else if (x1 instanceof lastpiece.Above.class) {
        throw runtime.safeCall(globalThis.Error("easyDisplay Above"))
      } else if (x1 instanceof lastpiece.Beside.class) {
        throw runtime.safeCall(globalThis.Error("easyDisplay Beside"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    return lay(x)
  } 
  static displayDoc(m, pageWidth, ribbonWidth, txt, end, doc) {
    let lay, gapWidth, shift;
    lay = function lay(k, docc) {
      let lay2, lay1, scrut, scrut1, arg$TextBeside$0$, arg$TextBeside$1$, arg$NilAbove$0$, arg$Nest$0$, arg$Nest$1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15;
      lay2 = function lay2(k1, param) {
        let arg$Nest$1$1, arg$TextBeside$0$1, arg$TextBeside$1$1, arg$NilAbove$0$1, tmp16, tmp17, tmp18, tmp19;
        if (param instanceof lastpiece.NilAbove.class) {
          arg$NilAbove$0$1 = param.d;
          tmp16 = lay(k1, arg$NilAbove$0$1);
          return runtime.safeCall(txt(lastpiece.nlText, tmp16))
        } else if (param instanceof lastpiece.TextBeside.class) {
          arg$TextBeside$0$1 = param.a;
          arg$TextBeside$1$1 = param.d;
          tmp17 = lastpiece.annotSize(arg$TextBeside$0$1);
          tmp18 = k1 + tmp17;
          tmp19 = lay2(tmp18, arg$TextBeside$1$1);
          return runtime.safeCall(txt(arg$TextBeside$0$1, tmp19))
        } else if (param instanceof lastpiece.Nest.class) {
          arg$Nest$1$1 = param.d;
          return lay2(k1, arg$Nest$1$1)
        } else if (param instanceof lastpiece.Empty.class) {
          return end
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      lay1 = function lay1(k1, s, p) {
        let r, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
        tmp16 = lastpiece.annotSize(s);
        r = k1 + tmp16;
        tmp17 = lastpiece.indent(k1);
        tmp18 = lastpiece.Str(tmp17);
        tmp19 = lastpiece.NoAnnot(tmp18, k1);
        tmp20 = lay2(r, p);
        tmp21 = runtime.safeCall(txt(s, tmp20));
        return runtime.safeCall(txt(tmp19, tmp21))
      };
      if (docc instanceof lastpiece.Nest.class) {
        arg$Nest$0$ = docc.i;
        arg$Nest$1$ = docc.d;
        tmp = k + arg$Nest$0$;
        return lay(tmp, arg$Nest$1$)
      } else if (docc instanceof lastpiece.Empty.class) {
        return end
      } else if (docc instanceof lastpiece.NilAbove.class) {
        arg$NilAbove$0$ = docc.d;
        tmp1 = lay(k, arg$NilAbove$0$);
        return runtime.safeCall(txt(lastpiece.nlText, tmp1))
      } else if (docc instanceof lastpiece.TextBeside.class) {
        arg$TextBeside$0$ = docc.a;
        arg$TextBeside$1$ = docc.d;
        if (m instanceof lastpiece.ZigZagMode.class) {
          scrut = k >= gapWidth;
          if (scrut === true) {
            tmp2 = NofibPrelude.replicate(shift, "/");
            tmp3 = lastpiece.Str(tmp2);
            tmp4 = lastpiece.NoAnnot(tmp3, shift);
            tmp5 = k - shift;
            tmp6 = lay1(tmp5, arg$TextBeside$0$, arg$TextBeside$1$);
            tmp7 = runtime.safeCall(txt(lastpiece.nlText, tmp6));
            tmp8 = runtime.safeCall(txt(tmp4, tmp7));
            return runtime.safeCall(txt(lastpiece.nlText, tmp8))
          }
          scrut1 = k < 0;
          if (scrut1 === true) {
            tmp9 = NofibPrelude.replicate(shift, "|");
            tmp10 = lastpiece.Str(tmp9);
            tmp11 = lastpiece.NoAnnot(tmp10, shift);
            tmp12 = k + shift;
            tmp13 = lay1(tmp12, arg$TextBeside$0$, arg$TextBeside$1$);
            tmp14 = runtime.safeCall(txt(lastpiece.nlText, tmp13));
            tmp15 = runtime.safeCall(txt(tmp11, tmp14));
            return runtime.safeCall(txt(lastpiece.nlText, tmp15))
          }
          return lay1(k, arg$TextBeside$0$, arg$TextBeside$1$);
        }
        return lay1(k, arg$TextBeside$0$, arg$TextBeside$1$);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    gapWidth = pageWidth - ribbonWidth;
    shift = NofibPrelude.intDiv(gapWidth, 2);
    return lay(0, doc)
  } 
  static best(w0, r, doc) {
    let get, get1;
    get = function get(r1, w, docc) {
      let arg$Union$0$, arg$Union$1$, arg$Nest$0$, arg$Nest$1$, arg$TextBeside$0$, arg$TextBeside$1$, arg$NilAbove$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
      if (docc instanceof lastpiece.Empty.class) {
        return lastpiece.Empty
      } else if (docc instanceof lastpiece.NoDoc.class) {
        return lastpiece.NoDoc
      } else if (docc instanceof lastpiece.NilAbove.class) {
        arg$NilAbove$0$ = docc.d;
        tmp = get(r1, w, arg$NilAbove$0$);
        return lastpiece.NilAbove(tmp)
      } else if (docc instanceof lastpiece.TextBeside.class) {
        arg$TextBeside$0$ = docc.a;
        arg$TextBeside$1$ = docc.d;
        tmp1 = lastpiece.annotSize(arg$TextBeside$0$);
        tmp2 = get1(r1, w, tmp1, arg$TextBeside$1$);
        return lastpiece.TextBeside(arg$TextBeside$0$, tmp2)
      } else if (docc instanceof lastpiece.Nest.class) {
        arg$Nest$0$ = docc.i;
        arg$Nest$1$ = docc.d;
        tmp3 = w - arg$Nest$0$;
        tmp4 = get(r1, tmp3, arg$Nest$1$);
        return lastpiece.Nest(arg$Nest$0$, tmp4)
      } else if (docc instanceof lastpiece.Union.class) {
        arg$Union$0$ = docc.d1;
        arg$Union$1$ = docc.d2;
        tmp5 = get(r1, w, arg$Union$0$);
        tmp6 = get(r1, w, arg$Union$1$);
        return lastpiece.nicest(w, r1, tmp5, tmp6)
      } else if (docc instanceof lastpiece.Above.class) {
        throw runtime.safeCall(globalThis.Error("best get Above"))
      } else if (docc instanceof lastpiece.Beside.class) {
        throw runtime.safeCall(globalThis.Error("best get Beside"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    get1 = function get1(r1, w, sl, p) {
      let arg$Union$0$, arg$Union$1$, arg$Nest$1$, arg$TextBeside$0$, arg$TextBeside$1$, arg$NilAbove$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
      if (p instanceof lastpiece.Empty.class) {
        return lastpiece.Empty
      } else if (p instanceof lastpiece.NoDoc.class) {
        return lastpiece.NoDoc
      } else if (p instanceof lastpiece.NilAbove.class) {
        arg$NilAbove$0$ = p.d;
        tmp = w - sl;
        tmp1 = get(r1, tmp, arg$NilAbove$0$);
        return lastpiece.NilAbove(tmp1)
      } else if (p instanceof lastpiece.TextBeside.class) {
        arg$TextBeside$0$ = p.a;
        arg$TextBeside$1$ = p.d;
        tmp2 = lastpiece.annotSize(arg$TextBeside$0$);
        tmp3 = sl + tmp2;
        tmp4 = get1(r1, w, tmp3, arg$TextBeside$1$);
        return lastpiece.TextBeside(arg$TextBeside$0$, tmp4)
      } else if (p instanceof lastpiece.Nest.class) {
        arg$Nest$1$ = p.d;
        return get1(r1, w, sl, arg$Nest$1$)
      } else if (p instanceof lastpiece.Union.class) {
        arg$Union$0$ = p.d1;
        arg$Union$1$ = p.d2;
        tmp5 = get1(r1, w, sl, arg$Union$0$);
        tmp6 = get1(r1, w, sl, arg$Union$1$);
        return lastpiece.nicest1(w, r1, sl, tmp5, tmp6)
      } else if (p instanceof lastpiece.Above.class) {
        throw runtime.safeCall(globalThis.Error("best get1 Above"))
      } else if (p instanceof lastpiece.Beside.class) {
        throw runtime.safeCall(globalThis.Error("best get1 Beside"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    return get(r, w0, doc)
  } 
  static nonEmptySet(doc) {
    loopLabel: while (true) {
      let arg$Nest$1$, arg$TextBeside$1$;
      if (doc instanceof lastpiece.NoDoc.class) {
        return false
      } else if (doc instanceof lastpiece.Union.class) {
        return true
      } else if (doc instanceof lastpiece.Empty.class) {
        return true
      } else if (doc instanceof lastpiece.NilAbove.class) {
        return true
      } else if (doc instanceof lastpiece.TextBeside.class) {
        arg$TextBeside$1$ = doc.d;
        doc = arg$TextBeside$1$;
        continue loopLabel
      } else if (doc instanceof lastpiece.Nest.class) {
        arg$Nest$1$ = doc.d;
        doc = arg$Nest$1$;
        continue loopLabel
      } else if (doc instanceof lastpiece.Above.class) {
        throw runtime.safeCall(globalThis.Error("nonEmptySet Above"))
      } else if (doc instanceof lastpiece.Beside.class) {
        throw runtime.safeCall(globalThis.Error("nonEmptySet Beside"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static fits(n, param) {
    loopLabel: while (true) {
      let scrut, arg$TextBeside$0$, arg$TextBeside$1$, tmp, tmp1;
      scrut = n < 0;
      if (scrut === true) {
        return false
      }
      if (param instanceof lastpiece.NoDoc.class) {
        return false
      } else if (param instanceof lastpiece.Empty.class) {
        return true
      } else if (param instanceof lastpiece.NilAbove.class) {
        return true
      } else if (param instanceof lastpiece.TextBeside.class) {
        arg$TextBeside$0$ = param.a;
        arg$TextBeside$1$ = param.d;
        tmp = lastpiece.annotSize(arg$TextBeside$0$);
        tmp1 = n - tmp;
        n = tmp1;
        param = arg$TextBeside$1$;
        continue loopLabel
      } else if (param instanceof lastpiece.Above.class) {
        throw runtime.safeCall(globalThis.Error("fits Above"))
      } else if (param instanceof lastpiece.Beside.class) {
        throw runtime.safeCall(globalThis.Error("fits Beside"))
      } else if (param instanceof lastpiece.Union.class) {
        throw runtime.safeCall(globalThis.Error("fits Union"))
      } else if (param instanceof lastpiece.Nest.class) {
        throw runtime.safeCall(globalThis.Error("fits Nest"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static first(p, q) {
    let scrut;
    scrut = lastpiece.nonEmptySet(p);
    if (scrut === true) {
      return p
    }
    return q;
  } 
  static nicest1(w, r, sl, p, q) {
    let scrut, tmp, tmp1;
    tmp = NofibPrelude.min(w, r);
    tmp1 = tmp - sl;
    scrut = lastpiece.fits(tmp1, p);
    if (scrut === true) {
      return p
    }
    return q;
  } 
  static nicest(w, r, p, q) {
    return lastpiece.nicest1(w, r, 0, p, q)
  } 
  static testLastPiece_nofib() {
    let initialBoard, solutions, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    tmp = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp1 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp2 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp3 = NofibPrelude.Cons(tmp2, NofibPrelude.Nil);
    tmp4 = NofibPrelude.Cons(tmp1, tmp3);
    tmp5 = lastpiece.fit(lastpiece.emptyBoard, tmp, "a", tmp4);
    initialBoard = NofibPrelude.fromSome(tmp5);
    tmp6 = globalThis.Object.freeze([
      1,
      2
    ]);
    solutions = lastpiece.search(tmp6, lastpiece.Female, initialBoard, lastpiece.initialPieces);
    tmp7 = lastpiece.display(solutions);
    return lastpiece.printDoc(tmp7)
  } 
  static main() {
    let tmp;
    tmp = lastpiece.testLastPiece_nofib();
    return NofibPrelude.nofibListToString(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "lastpiece"]; 
});
let lastpiece = lastpiece1; export default lastpiece;
