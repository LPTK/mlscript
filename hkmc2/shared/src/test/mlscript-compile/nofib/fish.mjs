const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
let fish1;
(class fish {
  static {
    fish1 = this
  }
  static #p_tile;
  static #q_tile;
  static #r_tile;
  static #s_tile;
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122, tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131, tmp132, tmp133, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139, tmp140, tmp141, tmp142, tmp143, tmp144, tmp145, tmp146, tmp147, tmp148, tmp149, tmp150, tmp151, tmp152, tmp153, tmp154, tmp155, tmp156, tmp157, tmp158, tmp159, tmp160, tmp161, tmp162, tmp163, tmp164, tmp165, tmp166, tmp167, tmp168, tmp169, tmp170, tmp171, tmp172, tmp173, tmp174, tmp175, tmp176, tmp177, tmp178, tmp179, tmp180, tmp181, tmp182, tmp183, tmp184, tmp185, tmp186, tmp187, tmp188, tmp189, tmp190, tmp191, tmp192, tmp193, tmp194, tmp195, tmp196, tmp197, tmp198, tmp199, tmp200, tmp201, tmp202, tmp203, tmp204, tmp205, tmp206, tmp207, tmp208, tmp209, tmp210, tmp211, tmp212, tmp213, tmp214, tmp215, tmp216, tmp217, tmp218, tmp219, tmp220, tmp221, tmp222, tmp223, tmp224, tmp225, tmp226, tmp227, tmp228, tmp229, tmp230, tmp231, tmp232, tmp233, tmp234, tmp235;
    tmp = globalThis.Object.freeze([
      0,
      3,
      3,
      4
    ]);
    tmp1 = globalThis.Object.freeze([
      3,
      4,
      0,
      8
    ]);
    tmp2 = globalThis.Object.freeze([
      0,
      8,
      0,
      3
    ]);
    tmp3 = globalThis.Object.freeze([
      6,
      0,
      4,
      4
    ]);
    tmp4 = globalThis.Object.freeze([
      4,
      5,
      4,
      10
    ]);
    tmp5 = globalThis.Object.freeze([
      4,
      10,
      7,
      6
    ]);
    tmp6 = globalThis.Object.freeze([
      7,
      6,
      4,
      5
    ]);
    tmp7 = globalThis.Object.freeze([
      11,
      0,
      10,
      4
    ]);
    tmp8 = globalThis.Object.freeze([
      10,
      4,
      9,
      6
    ]);
    tmp9 = globalThis.Object.freeze([
      9,
      6,
      8,
      8
    ]);
    tmp10 = globalThis.Object.freeze([
      8,
      8,
      4,
      13
    ]);
    tmp11 = globalThis.Object.freeze([
      4,
      13,
      0,
      16
    ]);
    tmp12 = globalThis.Object.freeze([
      0,
      16,
      6,
      15
    ]);
    tmp13 = globalThis.Object.freeze([
      6,
      15,
      8,
      16
    ]);
    tmp14 = globalThis.Object.freeze([
      8,
      16,
      12,
      12
    ]);
    tmp15 = globalThis.Object.freeze([
      12,
      12,
      16,
      12
    ]);
    tmp16 = globalThis.Object.freeze([
      10,
      16,
      12,
      14
    ]);
    tmp17 = globalThis.Object.freeze([
      12,
      14,
      16,
      13
    ]);
    tmp18 = globalThis.Object.freeze([
      12,
      16,
      13,
      15
    ]);
    tmp19 = globalThis.Object.freeze([
      13,
      15,
      16,
      14
    ]);
    tmp20 = globalThis.Object.freeze([
      14,
      16,
      16,
      15
    ]);
    tmp21 = globalThis.Object.freeze([
      8,
      12,
      16,
      10
    ]);
    tmp22 = globalThis.Object.freeze([
      8,
      8,
      12,
      9
    ]);
    tmp23 = globalThis.Object.freeze([
      12,
      9,
      16,
      8
    ]);
    tmp24 = globalThis.Object.freeze([
      9,
      6,
      12,
      7
    ]);
    tmp25 = globalThis.Object.freeze([
      12,
      7,
      16,
      6
    ]);
    tmp26 = globalThis.Object.freeze([
      10,
      4,
      13,
      5
    ]);
    tmp27 = globalThis.Object.freeze([
      13,
      5,
      16,
      4
    ]);
    tmp28 = globalThis.Object.freeze([
      11,
      0,
      14,
      2
    ]);
    tmp29 = globalThis.Object.freeze([
      14,
      2,
      16,
      2
    ]);
    tmp30 = NofibPrelude.Cons(tmp29, NofibPrelude.Nil);
    tmp31 = NofibPrelude.Cons(tmp28, tmp30);
    tmp32 = NofibPrelude.Cons(tmp27, tmp31);
    tmp33 = NofibPrelude.Cons(tmp26, tmp32);
    tmp34 = NofibPrelude.Cons(tmp25, tmp33);
    tmp35 = NofibPrelude.Cons(tmp24, tmp34);
    tmp36 = NofibPrelude.Cons(tmp23, tmp35);
    tmp37 = NofibPrelude.Cons(tmp22, tmp36);
    tmp38 = NofibPrelude.Cons(tmp21, tmp37);
    tmp39 = NofibPrelude.Cons(tmp20, tmp38);
    tmp40 = NofibPrelude.Cons(tmp19, tmp39);
    tmp41 = NofibPrelude.Cons(tmp18, tmp40);
    tmp42 = NofibPrelude.Cons(tmp17, tmp41);
    tmp43 = NofibPrelude.Cons(tmp16, tmp42);
    tmp44 = NofibPrelude.Cons(tmp15, tmp43);
    tmp45 = NofibPrelude.Cons(tmp14, tmp44);
    tmp46 = NofibPrelude.Cons(tmp13, tmp45);
    tmp47 = NofibPrelude.Cons(tmp12, tmp46);
    tmp48 = NofibPrelude.Cons(tmp11, tmp47);
    tmp49 = NofibPrelude.Cons(tmp10, tmp48);
    tmp50 = NofibPrelude.Cons(tmp9, tmp49);
    tmp51 = NofibPrelude.Cons(tmp8, tmp50);
    tmp52 = NofibPrelude.Cons(tmp7, tmp51);
    tmp53 = NofibPrelude.Cons(tmp6, tmp52);
    tmp54 = NofibPrelude.Cons(tmp5, tmp53);
    tmp55 = NofibPrelude.Cons(tmp4, tmp54);
    tmp56 = NofibPrelude.Cons(tmp3, tmp55);
    tmp57 = NofibPrelude.Cons(tmp2, tmp56);
    tmp58 = NofibPrelude.Cons(tmp1, tmp57);
    fish.#p_tile = NofibPrelude.Cons(tmp, tmp58);
    tmp59 = globalThis.Object.freeze([
      0,
      8,
      4,
      7
    ]);
    tmp60 = globalThis.Object.freeze([
      4,
      7,
      6,
      7
    ]);
    tmp61 = globalThis.Object.freeze([
      6,
      7,
      8,
      8
    ]);
    tmp62 = globalThis.Object.freeze([
      8,
      8,
      12,
      10
    ]);
    tmp63 = globalThis.Object.freeze([
      12,
      10,
      16,
      16
    ]);
    tmp64 = globalThis.Object.freeze([
      0,
      12,
      3,
      13
    ]);
    tmp65 = globalThis.Object.freeze([
      3,
      13,
      5,
      14
    ]);
    tmp66 = globalThis.Object.freeze([
      5,
      14,
      7,
      15
    ]);
    tmp67 = globalThis.Object.freeze([
      7,
      15,
      8,
      16
    ]);
    tmp68 = globalThis.Object.freeze([
      2,
      16,
      3,
      13
    ]);
    tmp69 = globalThis.Object.freeze([
      4,
      16,
      5,
      14
    ]);
    tmp70 = globalThis.Object.freeze([
      6,
      16,
      7,
      15
    ]);
    tmp71 = globalThis.Object.freeze([
      0,
      10,
      7,
      11
    ]);
    tmp72 = globalThis.Object.freeze([
      9,
      13,
      8,
      15
    ]);
    tmp73 = globalThis.Object.freeze([
      8,
      15,
      11,
      15
    ]);
    tmp74 = globalThis.Object.freeze([
      11,
      15,
      9,
      13
    ]);
    tmp75 = globalThis.Object.freeze([
      10,
      10,
      8,
      12
    ]);
    tmp76 = globalThis.Object.freeze([
      8,
      12,
      12,
      12
    ]);
    tmp77 = globalThis.Object.freeze([
      12,
      12,
      10,
      10
    ]);
    tmp78 = globalThis.Object.freeze([
      2,
      0,
      4,
      5
    ]);
    tmp79 = globalThis.Object.freeze([
      4,
      5,
      4,
      7
    ]);
    tmp80 = globalThis.Object.freeze([
      4,
      0,
      6,
      5
    ]);
    tmp81 = globalThis.Object.freeze([
      6,
      5,
      6,
      7
    ]);
    tmp82 = globalThis.Object.freeze([
      6,
      0,
      8,
      5
    ]);
    tmp83 = globalThis.Object.freeze([
      8,
      5,
      8,
      8
    ]);
    tmp84 = globalThis.Object.freeze([
      10,
      0,
      14,
      11
    ]);
    tmp85 = globalThis.Object.freeze([
      12,
      0,
      13,
      4
    ]);
    tmp86 = globalThis.Object.freeze([
      13,
      4,
      16,
      8
    ]);
    tmp87 = globalThis.Object.freeze([
      16,
      8,
      15,
      10
    ]);
    tmp88 = globalThis.Object.freeze([
      15,
      10,
      16,
      16
    ]);
    tmp89 = globalThis.Object.freeze([
      13,
      0,
      16,
      6
    ]);
    tmp90 = globalThis.Object.freeze([
      14,
      0,
      16,
      4
    ]);
    tmp91 = globalThis.Object.freeze([
      15,
      0,
      16,
      2
    ]);
    tmp92 = globalThis.Object.freeze([
      0,
      0,
      8,
      0
    ]);
    tmp93 = globalThis.Object.freeze([
      12,
      0,
      16,
      0
    ]);
    tmp94 = globalThis.Object.freeze([
      0,
      0,
      0,
      8
    ]);
    tmp95 = globalThis.Object.freeze([
      0,
      12,
      0,
      16
    ]);
    tmp96 = NofibPrelude.Cons(tmp95, NofibPrelude.Nil);
    tmp97 = NofibPrelude.Cons(tmp94, tmp96);
    tmp98 = NofibPrelude.Cons(tmp93, tmp97);
    tmp99 = NofibPrelude.Cons(tmp92, tmp98);
    tmp100 = NofibPrelude.Cons(tmp91, tmp99);
    tmp101 = NofibPrelude.Cons(tmp90, tmp100);
    tmp102 = NofibPrelude.Cons(tmp89, tmp101);
    tmp103 = NofibPrelude.Cons(tmp88, tmp102);
    tmp104 = NofibPrelude.Cons(tmp87, tmp103);
    tmp105 = NofibPrelude.Cons(tmp86, tmp104);
    tmp106 = NofibPrelude.Cons(tmp85, tmp105);
    tmp107 = NofibPrelude.Cons(tmp84, tmp106);
    tmp108 = NofibPrelude.Cons(tmp83, tmp107);
    tmp109 = NofibPrelude.Cons(tmp82, tmp108);
    tmp110 = NofibPrelude.Cons(tmp81, tmp109);
    tmp111 = NofibPrelude.Cons(tmp80, tmp110);
    tmp112 = NofibPrelude.Cons(tmp79, tmp111);
    tmp113 = NofibPrelude.Cons(tmp78, tmp112);
    tmp114 = NofibPrelude.Cons(tmp77, tmp113);
    tmp115 = NofibPrelude.Cons(tmp76, tmp114);
    tmp116 = NofibPrelude.Cons(tmp75, tmp115);
    tmp117 = NofibPrelude.Cons(tmp74, tmp116);
    tmp118 = NofibPrelude.Cons(tmp73, tmp117);
    tmp119 = NofibPrelude.Cons(tmp72, tmp118);
    tmp120 = NofibPrelude.Cons(tmp71, tmp119);
    tmp121 = NofibPrelude.Cons(tmp70, tmp120);
    tmp122 = NofibPrelude.Cons(tmp69, tmp121);
    tmp123 = NofibPrelude.Cons(tmp68, tmp122);
    tmp124 = NofibPrelude.Cons(tmp67, tmp123);
    tmp125 = NofibPrelude.Cons(tmp66, tmp124);
    tmp126 = NofibPrelude.Cons(tmp65, tmp125);
    tmp127 = NofibPrelude.Cons(tmp64, tmp126);
    tmp128 = NofibPrelude.Cons(tmp63, tmp127);
    tmp129 = NofibPrelude.Cons(tmp62, tmp128);
    tmp130 = NofibPrelude.Cons(tmp61, tmp129);
    tmp131 = NofibPrelude.Cons(tmp60, tmp130);
    fish.#q_tile = NofibPrelude.Cons(tmp59, tmp131);
    tmp132 = globalThis.Object.freeze([
      0,
      0,
      8,
      8
    ]);
    tmp133 = globalThis.Object.freeze([
      12,
      12,
      16,
      16
    ]);
    tmp134 = globalThis.Object.freeze([
      0,
      4,
      5,
      10
    ]);
    tmp135 = globalThis.Object.freeze([
      0,
      8,
      2,
      12
    ]);
    tmp136 = globalThis.Object.freeze([
      0,
      12,
      1,
      14
    ]);
    tmp137 = globalThis.Object.freeze([
      16,
      6,
      11,
      10
    ]);
    tmp138 = globalThis.Object.freeze([
      11,
      10,
      6,
      16
    ]);
    tmp139 = globalThis.Object.freeze([
      16,
      4,
      14,
      6
    ]);
    tmp140 = globalThis.Object.freeze([
      14,
      6,
      8,
      8
    ]);
    tmp141 = globalThis.Object.freeze([
      8,
      8,
      5,
      10
    ]);
    tmp142 = globalThis.Object.freeze([
      5,
      10,
      2,
      12
    ]);
    tmp143 = globalThis.Object.freeze([
      2,
      12,
      0,
      16
    ]);
    tmp144 = globalThis.Object.freeze([
      16,
      8,
      12,
      12
    ]);
    tmp145 = globalThis.Object.freeze([
      12,
      12,
      11,
      16
    ]);
    tmp146 = globalThis.Object.freeze([
      1,
      1,
      4,
      0
    ]);
    tmp147 = globalThis.Object.freeze([
      2,
      2,
      8,
      0
    ]);
    tmp148 = globalThis.Object.freeze([
      3,
      3,
      8,
      2
    ]);
    tmp149 = globalThis.Object.freeze([
      8,
      2,
      12,
      0
    ]);
    tmp150 = globalThis.Object.freeze([
      5,
      5,
      12,
      3
    ]);
    tmp151 = globalThis.Object.freeze([
      12,
      3,
      16,
      0
    ]);
    tmp152 = globalThis.Object.freeze([
      11,
      16,
      12,
      12
    ]);
    tmp153 = globalThis.Object.freeze([
      12,
      12,
      16,
      8
    ]);
    tmp154 = globalThis.Object.freeze([
      13,
      13,
      16,
      10
    ]);
    tmp155 = globalThis.Object.freeze([
      14,
      14,
      16,
      12
    ]);
    tmp156 = globalThis.Object.freeze([
      15,
      15,
      16,
      14
    ]);
    tmp157 = NofibPrelude.Cons(tmp156, NofibPrelude.Nil);
    tmp158 = NofibPrelude.Cons(tmp155, tmp157);
    tmp159 = NofibPrelude.Cons(tmp154, tmp158);
    tmp160 = NofibPrelude.Cons(tmp153, tmp159);
    tmp161 = NofibPrelude.Cons(tmp152, tmp160);
    tmp162 = NofibPrelude.Cons(tmp151, tmp161);
    tmp163 = NofibPrelude.Cons(tmp150, tmp162);
    tmp164 = NofibPrelude.Cons(tmp149, tmp163);
    tmp165 = NofibPrelude.Cons(tmp148, tmp164);
    tmp166 = NofibPrelude.Cons(tmp147, tmp165);
    tmp167 = NofibPrelude.Cons(tmp146, tmp166);
    tmp168 = NofibPrelude.Cons(tmp145, tmp167);
    tmp169 = NofibPrelude.Cons(tmp144, tmp168);
    tmp170 = NofibPrelude.Cons(tmp143, tmp169);
    tmp171 = NofibPrelude.Cons(tmp142, tmp170);
    tmp172 = NofibPrelude.Cons(tmp141, tmp171);
    tmp173 = NofibPrelude.Cons(tmp140, tmp172);
    tmp174 = NofibPrelude.Cons(tmp139, tmp173);
    tmp175 = NofibPrelude.Cons(tmp138, tmp174);
    tmp176 = NofibPrelude.Cons(tmp137, tmp175);
    tmp177 = NofibPrelude.Cons(tmp136, tmp176);
    tmp178 = NofibPrelude.Cons(tmp135, tmp177);
    tmp179 = NofibPrelude.Cons(tmp134, tmp178);
    tmp180 = NofibPrelude.Cons(tmp133, tmp179);
    fish.#r_tile = NofibPrelude.Cons(tmp132, tmp180);
    tmp181 = globalThis.Object.freeze([
      0,
      0,
      4,
      2
    ]);
    tmp182 = globalThis.Object.freeze([
      4,
      2,
      8,
      2
    ]);
    tmp183 = globalThis.Object.freeze([
      8,
      2,
      16,
      0
    ]);
    tmp184 = globalThis.Object.freeze([
      0,
      4,
      2,
      1
    ]);
    tmp185 = globalThis.Object.freeze([
      0,
      6,
      7,
      4
    ]);
    tmp186 = globalThis.Object.freeze([
      0,
      8,
      8,
      6
    ]);
    tmp187 = globalThis.Object.freeze([
      0,
      10,
      7,
      8
    ]);
    tmp188 = globalThis.Object.freeze([
      0,
      12,
      7,
      10
    ]);
    tmp189 = globalThis.Object.freeze([
      0,
      14,
      7,
      13
    ]);
    tmp190 = globalThis.Object.freeze([
      13,
      13,
      16,
      14
    ]);
    tmp191 = globalThis.Object.freeze([
      14,
      11,
      16,
      12
    ]);
    tmp192 = globalThis.Object.freeze([
      15,
      9,
      16,
      10
    ]);
    tmp193 = globalThis.Object.freeze([
      16,
      0,
      10,
      4
    ]);
    tmp194 = globalThis.Object.freeze([
      10,
      4,
      8,
      6
    ]);
    tmp195 = globalThis.Object.freeze([
      8,
      6,
      7,
      8
    ]);
    tmp196 = globalThis.Object.freeze([
      7,
      8,
      7,
      13
    ]);
    tmp197 = globalThis.Object.freeze([
      7,
      13,
      8,
      16
    ]);
    tmp198 = globalThis.Object.freeze([
      12,
      16,
      13,
      13
    ]);
    tmp199 = globalThis.Object.freeze([
      13,
      13,
      14,
      11
    ]);
    tmp200 = globalThis.Object.freeze([
      14,
      11,
      15,
      9
    ]);
    tmp201 = globalThis.Object.freeze([
      15,
      9,
      16,
      8
    ]);
    tmp202 = globalThis.Object.freeze([
      10,
      16,
      11,
      10
    ]);
    tmp203 = globalThis.Object.freeze([
      12,
      4,
      10,
      6
    ]);
    tmp204 = globalThis.Object.freeze([
      10,
      6,
      12,
      7
    ]);
    tmp205 = globalThis.Object.freeze([
      12,
      7,
      12,
      4
    ]);
    tmp206 = globalThis.Object.freeze([
      15,
      5,
      13,
      7
    ]);
    tmp207 = globalThis.Object.freeze([
      13,
      7,
      15,
      8
    ]);
    tmp208 = globalThis.Object.freeze([
      15,
      8,
      15,
      5
    ]);
    tmp209 = NofibPrelude.Cons(tmp208, NofibPrelude.Nil);
    tmp210 = NofibPrelude.Cons(tmp207, tmp209);
    tmp211 = NofibPrelude.Cons(tmp206, tmp210);
    tmp212 = NofibPrelude.Cons(tmp205, tmp211);
    tmp213 = NofibPrelude.Cons(tmp204, tmp212);
    tmp214 = NofibPrelude.Cons(tmp203, tmp213);
    tmp215 = NofibPrelude.Cons(tmp202, tmp214);
    tmp216 = NofibPrelude.Cons(tmp201, tmp215);
    tmp217 = NofibPrelude.Cons(tmp200, tmp216);
    tmp218 = NofibPrelude.Cons(tmp199, tmp217);
    tmp219 = NofibPrelude.Cons(tmp198, tmp218);
    tmp220 = NofibPrelude.Cons(tmp197, tmp219);
    tmp221 = NofibPrelude.Cons(tmp196, tmp220);
    tmp222 = NofibPrelude.Cons(tmp195, tmp221);
    tmp223 = NofibPrelude.Cons(tmp194, tmp222);
    tmp224 = NofibPrelude.Cons(tmp193, tmp223);
    tmp225 = NofibPrelude.Cons(tmp192, tmp224);
    tmp226 = NofibPrelude.Cons(tmp191, tmp225);
    tmp227 = NofibPrelude.Cons(tmp190, tmp226);
    tmp228 = NofibPrelude.Cons(tmp189, tmp227);
    tmp229 = NofibPrelude.Cons(tmp188, tmp228);
    tmp230 = NofibPrelude.Cons(tmp187, tmp229);
    tmp231 = NofibPrelude.Cons(tmp186, tmp230);
    tmp232 = NofibPrelude.Cons(tmp185, tmp231);
    tmp233 = NofibPrelude.Cons(tmp184, tmp232);
    tmp234 = NofibPrelude.Cons(tmp183, tmp233);
    tmp235 = NofibPrelude.Cons(tmp182, tmp234);
    fish.#s_tile = NofibPrelude.Cons(tmp181, tmp235);
  }
  static vec_add(v1, v2) {
    let element1$, element0$, element1$1, element0$1, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(v1) && v1.length === 2) {
      element0$ = runtime.Tuple.get(v1, 0);
      element1$ = runtime.Tuple.get(v1, 1);
      if (runtime.Tuple.isArrayLike(v2) && v2.length === 2) {
        element0$1 = runtime.Tuple.get(v2, 0);
        element1$1 = runtime.Tuple.get(v2, 1);
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
  static vec_sub(v1, v2) {
    let element1$, element0$, element1$1, element0$1, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(v1) && v1.length === 2) {
      element0$ = runtime.Tuple.get(v1, 0);
      element1$ = runtime.Tuple.get(v1, 1);
      if (runtime.Tuple.isArrayLike(v2) && v2.length === 2) {
        element0$1 = runtime.Tuple.get(v2, 0);
        element1$1 = runtime.Tuple.get(v2, 1);
        tmp = element0$ - element0$1;
        tmp1 = element1$ - element1$1;
        return globalThis.Object.freeze([
          tmp,
          tmp1
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static scale_vec2(v, a, b) {
    let element1$, element0$, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(v) && v.length === 2) {
      element0$ = runtime.Tuple.get(v, 0);
      element1$ = runtime.Tuple.get(v, 1);
      tmp = element0$ * a;
      tmp1 = NofibPrelude.intDiv(tmp, b);
      tmp2 = element1$ * a;
      tmp3 = NofibPrelude.intDiv(tmp2, b);
      return globalThis.Object.freeze([
        tmp1,
        tmp3
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static nil(a, b, c) {
    return NofibPrelude.Nil
  } 
  static tup2(a_b, c_d) {
    let element1$, element0$, element1$1, element0$1;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      element0$ = runtime.Tuple.get(a_b, 0);
      element1$ = runtime.Tuple.get(a_b, 1);
      if (runtime.Tuple.isArrayLike(c_d) && c_d.length === 2) {
        element0$1 = runtime.Tuple.get(c_d, 0);
        element1$1 = runtime.Tuple.get(c_d, 1);
        return globalThis.Object.freeze([
          element0$,
          element1$,
          element0$1,
          element1$1
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static grid(m, n, segments, a, b, c) {
    let lscomp;
    lscomp = function lscomp(ls) {
      let arg$Cons$0$, arg$Cons$1$, element3$, element2$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 4) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          element2$ = runtime.Tuple.get(arg$Cons$0$, 2);
          element3$ = runtime.Tuple.get(arg$Cons$0$, 3);
          tmp = fish.scale_vec2(b, element0$, m);
          tmp1 = fish.vec_add(a, tmp);
          tmp2 = fish.scale_vec2(c, element1$, n);
          tmp3 = fish.vec_add(tmp1, tmp2);
          tmp4 = fish.scale_vec2(b, element2$, m);
          tmp5 = fish.vec_add(a, tmp4);
          tmp6 = fish.scale_vec2(c, element3$, n);
          tmp7 = fish.vec_add(tmp5, tmp6);
          tmp8 = fish.tup2(tmp3, tmp7);
          tmp9 = lscomp(arg$Cons$1$);
          return NofibPrelude.Cons(tmp8, tmp9)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    return lscomp(segments)
  } 
  static rot(p, a, b, c) {
    let tmp, tmp1, tmp2;
    tmp = fish.vec_add(a, b);
    tmp1 = globalThis.Object.freeze([
      0,
      0
    ]);
    tmp2 = fish.vec_sub(tmp1, b);
    return runtime.safeCall(p(tmp, c, tmp2))
  } 
  static beside(m, n, p, q, a, b, c) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    tmp = m + n;
    tmp1 = fish.scale_vec2(b, m, tmp);
    tmp2 = runtime.safeCall(p(a, tmp1, c));
    tmp3 = m + n;
    tmp4 = fish.scale_vec2(b, m, tmp3);
    tmp5 = fish.vec_add(a, tmp4);
    tmp6 = n + m;
    tmp7 = fish.scale_vec2(b, n, tmp6);
    tmp8 = runtime.safeCall(q(tmp5, tmp7, c));
    return NofibPrelude.append(tmp2, tmp8)
  } 
  static above(m, n, p, q, a, b, c) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    tmp = m + n;
    tmp1 = fish.scale_vec2(c, n, tmp);
    tmp2 = fish.vec_add(a, tmp1);
    tmp3 = n + m;
    tmp4 = fish.scale_vec2(c, m, tmp3);
    tmp5 = runtime.safeCall(p(tmp2, b, tmp4));
    tmp6 = m + n;
    tmp7 = fish.scale_vec2(c, n, tmp6);
    tmp8 = runtime.safeCall(q(a, b, tmp7));
    return NofibPrelude.append(tmp5, tmp8)
  } 
  static tile_to_grid(arg, arg2, arg3, arg4) {
    return fish.grid(16, 16, arg, arg2, arg3, arg4)
  } 
  static p(arg, q6, q7) {
    return fish.tile_to_grid(fish.#p_tile, arg, q6, q7)
  } 
  static q(arg, q6, q7) {
    return fish.tile_to_grid(fish.#q_tile, arg, q6, q7)
  } 
  static r(arg, q6, q7) {
    return fish.tile_to_grid(fish.#r_tile, arg, q6, q7)
  } 
  static s(arg, q6, q7) {
    return fish.tile_to_grid(fish.#s_tile, arg, q6, q7)
  } 
  static quartet(a, b, c, d, arg, a6, a7) {
    let lambda, lambda1;
    lambda = (undefined, function (p5, p6, p7) {
      return fish.beside(1, 1, a, b, p5, p6, p7)
    });
    lambda1 = (undefined, function (p5, p6, p7) {
      return fish.beside(1, 1, c, d, p5, p6, p7)
    });
    return fish.above(1, 1, lambda, lambda1, arg, a6, a7)
  } 
  static t(arg, q6, q7) {
    return fish.quartet(fish.p, fish.q, fish.r, fish.s, arg, q6, q7)
  } 
  static cycle_(p1, arg, p3, p4) {
    let lambda, lambda1, lambda2;
    lambda = (undefined, function (a, b, c) {
      let lambda3;
      lambda3 = (undefined, function (a1, b1, c1) {
        let lambda4;
        lambda4 = (undefined, function (a2, b2, c2) {
          return fish.rot(p1, a2, b2, c2)
        });
        return fish.rot(lambda4, a1, b1, c1)
      });
      return fish.rot(lambda3, a, b, c)
    });
    lambda1 = (undefined, function (a, b, c) {
      return fish.rot(p1, a, b, c)
    });
    lambda2 = (undefined, function (a, b, c) {
      let lambda3;
      lambda3 = (undefined, function (a1, b1, c1) {
        return fish.rot(p1, a1, b1, c1)
      });
      return fish.rot(lambda3, a, b, c)
    });
    return fish.quartet(p1, lambda, lambda1, lambda2, arg, p3, p4)
  } 
  static u(arg, p2, p3) {
    let lambda;
    lambda = (undefined, function (a, b, c) {
      return fish.rot(fish.q, a, b, c)
    });
    return fish.cycle_(lambda, arg, p2, p3)
  } 
  static side1(arg, q6, q7) {
    let lambda;
    lambda = (undefined, function (a, b, c) {
      return fish.rot(fish.t, a, b, c)
    });
    return fish.quartet(fish.nil, fish.nil, lambda, fish.t, arg, q6, q7)
  } 
  static side2(arg, q6, q7) {
    let lambda;
    lambda = (undefined, function (a, b, c) {
      return fish.rot(fish.t, a, b, c)
    });
    return fish.quartet(fish.side1, fish.side1, lambda, fish.t, arg, q6, q7)
  } 
  static corner1(arg, q6, q7) {
    return fish.quartet(fish.nil, fish.nil, fish.nil, fish.u, arg, q6, q7)
  } 
  static corner2(arg, q6, q7) {
    let lambda;
    lambda = (undefined, function (a, b, c) {
      return fish.rot(fish.side1, a, b, c)
    });
    return fish.quartet(fish.corner1, fish.side1, lambda, fish.u, arg, q6, q7)
  } 
  static pseudocorner(arg, q6, q7) {
    let lambda, lambda1;
    lambda = (undefined, function (a, b, c) {
      return fish.rot(fish.side2, a, b, c)
    });
    lambda1 = (undefined, function (a, b, c) {
      return fish.rot(fish.t, a, b, c)
    });
    return fish.quartet(fish.corner2, fish.side2, lambda, lambda1, arg, q6, q7)
  } 
  static pseudolimit(arg, p2, p3) {
    return fish.cycle_(fish.pseudocorner, arg, p2, p3)
  } 
  static showFourTupleofInt(a_b_c_d) {
    let element3$, element2$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17;
    if (runtime.Tuple.isArrayLike(a_b_c_d) && a_b_c_d.length === 4) {
      element0$ = runtime.Tuple.get(a_b_c_d, 0);
      element1$ = runtime.Tuple.get(a_b_c_d, 1);
      element2$ = runtime.Tuple.get(a_b_c_d, 2);
      element3$ = runtime.Tuple.get(a_b_c_d, 3);
      tmp = NofibPrelude.nofibStringToList("(");
      tmp1 = NofibPrelude.stringOfInt(element0$);
      tmp2 = NofibPrelude.nofibStringToList(tmp1);
      tmp3 = NofibPrelude.nofibStringToList(",");
      tmp4 = NofibPrelude.stringOfInt(element1$);
      tmp5 = NofibPrelude.nofibStringToList(tmp4);
      tmp6 = NofibPrelude.nofibStringToList(",");
      tmp7 = NofibPrelude.stringOfInt(element2$);
      tmp8 = NofibPrelude.nofibStringToList(tmp7);
      tmp9 = NofibPrelude.nofibStringToList(",");
      tmp10 = NofibPrelude.stringOfInt(element3$);
      tmp11 = NofibPrelude.nofibStringToList(tmp10);
      tmp12 = NofibPrelude.append(tmp9, tmp11);
      tmp13 = NofibPrelude.append(tmp8, tmp12);
      tmp14 = NofibPrelude.append(tmp6, tmp13);
      tmp15 = NofibPrelude.append(tmp5, tmp14);
      tmp16 = NofibPrelude.append(tmp3, tmp15);
      tmp17 = NofibPrelude.append(tmp2, tmp16);
      return NofibPrelude.append(tmp, tmp17)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static fmt(ls) {
    let showl, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.nofibStringToList("[]")
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      showl = function showl(ls1, s) {
        let arg$Cons$0$1, arg$Cons$1$1, tmp4, tmp5, tmp6, tmp7;
        if (ls1 instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Cons("]", s)
        } else if (ls1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ls1.head;
          arg$Cons$1$1 = ls1.tail;
          tmp4 = NofibPrelude.nofibStringToList(",|");
          tmp5 = fish.showFourTupleofInt(arg$Cons$0$1);
          tmp6 = showl(arg$Cons$1$1, s);
          tmp7 = NofibPrelude.append(tmp5, tmp6);
          return NofibPrelude.append(tmp4, tmp7)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      tmp = NofibPrelude.nofibStringToList("[|");
      tmp1 = fish.showFourTupleofInt(arg$Cons$0$);
      tmp2 = showl(arg$Cons$1$, "");
      tmp3 = NofibPrelude.append(tmp1, tmp2);
      return NofibPrelude.append(tmp, tmp3)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static testFish_nofib(n) {
    let lambda, tmp;
    lambda = (undefined, function (i) {
      let n1, tmp1, tmp2, tmp3, tmp4, tmp5;
      n1 = NofibPrelude.min(0, i);
      tmp1 = globalThis.Object.freeze([
        0,
        0
      ]);
      tmp2 = 640 + n1;
      tmp3 = globalThis.Object.freeze([
        tmp2,
        0
      ]);
      tmp4 = 640 + n1;
      tmp5 = globalThis.Object.freeze([
        0,
        tmp4
      ]);
      return fish.pseudolimit(tmp1, tmp3, tmp5)
    });
    tmp = NofibPrelude.enumFromTo(0, n);
    return NofibPrelude.map(lambda, tmp)
  } 
  static main() {
    return fish.testFish_nofib(1)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "fish"]; 
});
let fish = fish1; export default fish;
