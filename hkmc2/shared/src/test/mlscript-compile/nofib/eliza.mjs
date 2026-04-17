const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let eliza1;
(class eliza {
  static {
    eliza1 = this
  }
  static {
    let lscomp, lscomp1, canYou, canI, youAre, iDont, iFeel, whyDont, whyCant, areYou, iCant, iAm, you, yes, no, computer, iWant, question, name, because, sorry, dream, hello, maybe, your, always, think, alike, friend, nokeyMsgs, oneways, bothways, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122, tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131, tmp132, tmp133, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139, tmp140, tmp141, tmp142, tmp143, tmp144, tmp145, tmp146, tmp147, tmp148, tmp149, tmp150, tmp151, tmp152, tmp153, tmp154, tmp155, tmp156, tmp157, tmp158, tmp159, tmp160, tmp161, tmp162, tmp163, tmp164, tmp165, tmp166, tmp167, tmp168, tmp169, tmp170, tmp171, tmp172, tmp173, tmp174, tmp175, tmp176, tmp177, tmp178, tmp179, tmp180, tmp181, tmp182, tmp183, tmp184, tmp185, tmp186, tmp187, tmp188, tmp189, tmp190, tmp191, tmp192, tmp193, tmp194, tmp195, tmp196, tmp197, tmp198, tmp199, tmp200, tmp201, tmp202, tmp203, tmp204, tmp205, tmp206, tmp207, tmp208, tmp209, tmp210, tmp211, tmp212, tmp213, tmp214, tmp215, tmp216, tmp217, tmp218, tmp219, tmp220, tmp221, tmp222, tmp223, tmp224, tmp225, tmp226, tmp227, tmp228, tmp229, tmp230, tmp231, tmp232, tmp233, tmp234, tmp235, tmp236, tmp237, tmp238, tmp239, tmp240, tmp241, tmp242, tmp243, tmp244, tmp245, tmp246, tmp247, tmp248, tmp249, tmp250, tmp251, tmp252, tmp253, tmp254, tmp255, tmp256, tmp257, tmp258, tmp259, tmp260, tmp261, tmp262, tmp263, tmp264, tmp265, tmp266, tmp267, tmp268, tmp269, tmp270, tmp271, tmp272, tmp273, tmp274, tmp275, tmp276, tmp277, tmp278, tmp279, tmp280, tmp281, tmp282, tmp283, tmp284, tmp285, tmp286, tmp287, tmp288, tmp289, tmp290, tmp291, tmp292, tmp293, tmp294, tmp295, tmp296, tmp297, tmp298, tmp299, tmp300, tmp301, tmp302, tmp303, tmp304, tmp305, tmp306, tmp307, tmp308, tmp309, tmp310, tmp311, tmp312, tmp313, tmp314, tmp315, tmp316, tmp317, tmp318, tmp319, tmp320, tmp321, tmp322, tmp323, tmp324, tmp325, tmp326, tmp327, tmp328, tmp329, tmp330, tmp331, tmp332, tmp333, tmp334, tmp335, tmp336, tmp337, tmp338, tmp339, tmp340, tmp341, tmp342, tmp343, tmp344, tmp345, tmp346, tmp347, tmp348, tmp349, tmp350, tmp351, tmp352, tmp353, ls, inlinedVal, lambda;
    tmp = NofibPrelude.nofibStringToList("Why did you repeat yourself?");
    tmp1 = NofibPrelude.nofibStringToList("Do you expect a different answer by repeating yourself?");
    tmp2 = NofibPrelude.nofibStringToList("Come, come, elucidate your thoughts.");
    tmp3 = NofibPrelude.nofibStringToList("Please don't repeat yourself!");
    tmp4 = NofibPrelude.Cons(tmp3, NofibPrelude.Nil);
    tmp5 = NofibPrelude.Cons(tmp2, tmp4);
    tmp6 = NofibPrelude.Cons(tmp1, tmp5);
    tmp7 = NofibPrelude.Cons(tmp, tmp6);
    tmp8 = Predef.id(tmp7);
    this.repeatMsgs = tmp8;
    tmp9 = NofibPrelude.nofibStringToList("?Don_t you believe that I can");
    tmp10 = NofibPrelude.nofibStringToList("?Perhaps you would like to be able to");
    tmp11 = NofibPrelude.nofibStringToList("?You want me to be able to");
    tmp12 = NofibPrelude.Cons(tmp11, NofibPrelude.Nil);
    tmp13 = NofibPrelude.Cons(tmp10, tmp12);
    canYou = NofibPrelude.Cons(tmp9, tmp13);
    tmp14 = NofibPrelude.nofibStringToList("?Perhaps you don_t want to");
    tmp15 = NofibPrelude.nofibStringToList("?Do you want to be able to");
    tmp16 = NofibPrelude.Cons(tmp15, NofibPrelude.Nil);
    canI = NofibPrelude.Cons(tmp14, tmp16);
    tmp17 = NofibPrelude.nofibStringToList("?What makes you think I am");
    tmp18 = NofibPrelude.nofibStringToList("?Does it please you to believe I am");
    tmp19 = NofibPrelude.nofibStringToList("?Perhaps you would like to be");
    tmp20 = NofibPrelude.nofibStringToList("?Do you sometimes wish you were");
    tmp21 = NofibPrelude.Cons(tmp20, NofibPrelude.Nil);
    tmp22 = NofibPrelude.Cons(tmp19, tmp21);
    tmp23 = NofibPrelude.Cons(tmp18, tmp22);
    youAre = NofibPrelude.Cons(tmp17, tmp23);
    tmp24 = NofibPrelude.nofibStringToList("?Don_t you really");
    tmp25 = NofibPrelude.nofibStringToList("?Why don_t you");
    tmp26 = NofibPrelude.nofibStringToList("?Do you wish to be able to");
    tmp27 = NofibPrelude.nofibStringToList("Does that trouble you?");
    tmp28 = NofibPrelude.Cons(tmp27, NofibPrelude.Nil);
    tmp29 = NofibPrelude.Cons(tmp26, tmp28);
    tmp30 = NofibPrelude.Cons(tmp25, tmp29);
    iDont = NofibPrelude.Cons(tmp24, tmp30);
    tmp31 = NofibPrelude.nofibStringToList("Tell me more about such feelings.");
    tmp32 = NofibPrelude.nofibStringToList("?Do you often feel");
    tmp33 = NofibPrelude.nofibStringToList("?Do you enjoy feeling");
    tmp34 = NofibPrelude.Cons(tmp33, NofibPrelude.Nil);
    tmp35 = NofibPrelude.Cons(tmp32, tmp34);
    iFeel = NofibPrelude.Cons(tmp31, tmp35);
    tmp36 = NofibPrelude.nofibStringToList("?Do you really believe I don't");
    tmp37 = NofibPrelude.nofibStringToList(".Perhaps in good time I will");
    tmp38 = NofibPrelude.nofibStringToList("?Do you want me to");
    tmp39 = NofibPrelude.Cons(tmp38, NofibPrelude.Nil);
    tmp40 = NofibPrelude.Cons(tmp37, tmp39);
    whyDont = NofibPrelude.Cons(tmp36, tmp40);
    tmp41 = NofibPrelude.nofibStringToList("?Do you think you should be able to");
    tmp42 = NofibPrelude.nofibStringToList("?Why can't you");
    tmp43 = NofibPrelude.Cons(tmp42, NofibPrelude.Nil);
    whyCant = NofibPrelude.Cons(tmp41, tmp43);
    tmp44 = NofibPrelude.nofibStringToList("?Why are you interested in whether or not I am");
    tmp45 = NofibPrelude.nofibStringToList("?Would you prefer if I were not");
    tmp46 = NofibPrelude.nofibStringToList("?Perhaps in your fantasies I am");
    tmp47 = NofibPrelude.Cons(tmp46, NofibPrelude.Nil);
    tmp48 = NofibPrelude.Cons(tmp45, tmp47);
    areYou = NofibPrelude.Cons(tmp44, tmp48);
    tmp49 = NofibPrelude.nofibStringToList("?How do you know you can't");
    tmp50 = NofibPrelude.nofibStringToList("Have you tried?");
    tmp51 = NofibPrelude.nofibStringToList("?Perhaps you can now");
    tmp52 = NofibPrelude.Cons(tmp51, NofibPrelude.Nil);
    tmp53 = NofibPrelude.Cons(tmp50, tmp52);
    iCant = NofibPrelude.Cons(tmp49, tmp53);
    tmp54 = NofibPrelude.nofibStringToList("?Did you come to me because you are");
    tmp55 = NofibPrelude.nofibStringToList("?How long have you been");
    tmp56 = NofibPrelude.nofibStringToList("?Do you believe it is normal to be");
    tmp57 = NofibPrelude.nofibStringToList("?Do you enjoy being");
    tmp58 = NofibPrelude.Cons(tmp57, NofibPrelude.Nil);
    tmp59 = NofibPrelude.Cons(tmp56, tmp58);
    tmp60 = NofibPrelude.Cons(tmp55, tmp59);
    iAm = NofibPrelude.Cons(tmp54, tmp60);
    tmp61 = NofibPrelude.nofibStringToList("We were discussing you --not me.");
    tmp62 = NofibPrelude.nofibStringToList("?Oh,");
    tmp63 = NofibPrelude.nofibStringToList("You're not really talking about me, are you?");
    tmp64 = NofibPrelude.Cons(tmp63, NofibPrelude.Nil);
    tmp65 = NofibPrelude.Cons(tmp62, tmp64);
    you = NofibPrelude.Cons(tmp61, tmp65);
    tmp66 = NofibPrelude.nofibStringToList("You seem quite positive.");
    tmp67 = NofibPrelude.nofibStringToList("Are you Sure?");
    tmp68 = NofibPrelude.nofibStringToList("I see.");
    tmp69 = NofibPrelude.nofibStringToList("I understand.");
    tmp70 = NofibPrelude.Cons(tmp69, NofibPrelude.Nil);
    tmp71 = NofibPrelude.Cons(tmp68, tmp70);
    tmp72 = NofibPrelude.Cons(tmp67, tmp71);
    yes = NofibPrelude.Cons(tmp66, tmp72);
    tmp73 = NofibPrelude.nofibStringToList("Are you saying no just to be negative?");
    tmp74 = NofibPrelude.nofibStringToList("You are being a bit negative.");
    tmp75 = NofibPrelude.nofibStringToList("Why not?");
    tmp76 = NofibPrelude.nofibStringToList("Are you sure?");
    tmp77 = NofibPrelude.nofibStringToList("Why no?");
    tmp78 = NofibPrelude.Cons(tmp77, NofibPrelude.Nil);
    tmp79 = NofibPrelude.Cons(tmp76, tmp78);
    tmp80 = NofibPrelude.Cons(tmp75, tmp79);
    tmp81 = NofibPrelude.Cons(tmp74, tmp80);
    no = NofibPrelude.Cons(tmp73, tmp81);
    tmp82 = NofibPrelude.nofibStringToList("Do computers worry you?");
    tmp83 = NofibPrelude.nofibStringToList("Are you talking about me in particular?");
    tmp84 = NofibPrelude.nofibStringToList("Are you frightened by machines?");
    tmp85 = NofibPrelude.nofibStringToList("Why do you mention computers?");
    tmp86 = NofibPrelude.nofibStringToList("What do you think machines have to do with your problems?");
    tmp87 = NofibPrelude.nofibStringToList("Don't you think computers can help people?");
    tmp88 = NofibPrelude.nofibStringToList("What is it about machines that worries you?");
    tmp89 = NofibPrelude.Cons(tmp88, NofibPrelude.Nil);
    tmp90 = NofibPrelude.Cons(tmp87, tmp89);
    tmp91 = NofibPrelude.Cons(tmp86, tmp90);
    tmp92 = NofibPrelude.Cons(tmp85, tmp91);
    tmp93 = NofibPrelude.Cons(tmp84, tmp92);
    tmp94 = NofibPrelude.Cons(tmp83, tmp93);
    computer = NofibPrelude.Cons(tmp82, tmp94);
    tmp95 = NofibPrelude.nofibStringToList("?Why do you want");
    tmp96 = NofibPrelude.nofibStringToList("?What would it mean to you if you got");
    tmp97 = NofibPrelude.nofibStringToList("?Suppose you got");
    tmp98 = NofibPrelude.nofibStringToList("?What if you never got");
    tmp99 = NofibPrelude.nofibStringToList(".I sometimes also want");
    tmp100 = NofibPrelude.Cons(tmp99, NofibPrelude.Nil);
    tmp101 = NofibPrelude.Cons(tmp98, tmp100);
    tmp102 = NofibPrelude.Cons(tmp97, tmp101);
    tmp103 = NofibPrelude.Cons(tmp96, tmp102);
    iWant = NofibPrelude.Cons(tmp95, tmp103);
    tmp104 = NofibPrelude.nofibStringToList("Why do you ask?");
    tmp105 = NofibPrelude.nofibStringToList("Does that question interest you?");
    tmp106 = NofibPrelude.nofibStringToList("What answer would please you the most?");
    tmp107 = NofibPrelude.nofibStringToList("What do you think?");
    tmp108 = NofibPrelude.nofibStringToList("Are such questions on your mind often?");
    tmp109 = NofibPrelude.nofibStringToList("What is it that you really want to know?");
    tmp110 = NofibPrelude.nofibStringToList("Have you asked anyone else?");
    tmp111 = NofibPrelude.nofibStringToList("Have you asked such questions before?");
    tmp112 = NofibPrelude.nofibStringToList("What else comes to mind when you ask that?");
    tmp113 = NofibPrelude.Cons(tmp112, NofibPrelude.Nil);
    tmp114 = NofibPrelude.Cons(tmp111, tmp113);
    tmp115 = NofibPrelude.Cons(tmp110, tmp114);
    tmp116 = NofibPrelude.Cons(tmp109, tmp115);
    tmp117 = NofibPrelude.Cons(tmp108, tmp116);
    tmp118 = NofibPrelude.Cons(tmp107, tmp117);
    tmp119 = NofibPrelude.Cons(tmp106, tmp118);
    tmp120 = NofibPrelude.Cons(tmp105, tmp119);
    question = NofibPrelude.Cons(tmp104, tmp120);
    tmp121 = NofibPrelude.nofibStringToList("Names don't interest me.");
    tmp122 = NofibPrelude.nofibStringToList("I don't care about names --please go on.");
    tmp123 = NofibPrelude.Cons(tmp122, NofibPrelude.Nil);
    name = NofibPrelude.Cons(tmp121, tmp123);
    tmp124 = NofibPrelude.nofibStringToList("Is that the real reason?");
    tmp125 = NofibPrelude.nofibStringToList("Don't any other reasons come to mind?");
    tmp126 = NofibPrelude.nofibStringToList("Does that reason explain anything else?");
    tmp127 = NofibPrelude.nofibStringToList("What other reasons might there be?");
    tmp128 = NofibPrelude.Cons(tmp127, NofibPrelude.Nil);
    tmp129 = NofibPrelude.Cons(tmp126, tmp128);
    tmp130 = NofibPrelude.Cons(tmp125, tmp129);
    because = NofibPrelude.Cons(tmp124, tmp130);
    tmp131 = NofibPrelude.nofibStringToList("Please don't apologise!");
    tmp132 = NofibPrelude.nofibStringToList("Apologies are not necessary.");
    tmp133 = NofibPrelude.nofibStringToList("What feelings do you have when you apologise?");
    tmp134 = NofibPrelude.nofibStringToList("Don't be so defensive!");
    tmp135 = NofibPrelude.Cons(tmp134, NofibPrelude.Nil);
    tmp136 = NofibPrelude.Cons(tmp133, tmp135);
    tmp137 = NofibPrelude.Cons(tmp132, tmp136);
    sorry = NofibPrelude.Cons(tmp131, tmp137);
    tmp138 = NofibPrelude.nofibStringToList("What does that dream suggest to you?");
    tmp139 = NofibPrelude.nofibStringToList("Do you dream often?");
    tmp140 = NofibPrelude.nofibStringToList("What persons appear in your dreams?");
    tmp141 = NofibPrelude.nofibStringToList("Are you disturbed by your dreams?");
    tmp142 = NofibPrelude.Cons(tmp141, NofibPrelude.Nil);
    tmp143 = NofibPrelude.Cons(tmp140, tmp142);
    tmp144 = NofibPrelude.Cons(tmp139, tmp143);
    dream = NofibPrelude.Cons(tmp138, tmp144);
    tmp145 = NofibPrelude.nofibStringToList("How do you...please state your problem.");
    hello = NofibPrelude.Cons(tmp145, NofibPrelude.Nil);
    tmp146 = NofibPrelude.nofibStringToList("You don't seem quite certain.");
    tmp147 = NofibPrelude.nofibStringToList("Why the uncertain tone?");
    tmp148 = NofibPrelude.nofibStringToList("Can't you be more positive?");
    tmp149 = NofibPrelude.nofibStringToList("You aren't sure?");
    tmp150 = NofibPrelude.nofibStringToList("Don't you know?");
    tmp151 = NofibPrelude.Cons(tmp150, NofibPrelude.Nil);
    tmp152 = NofibPrelude.Cons(tmp149, tmp151);
    tmp153 = NofibPrelude.Cons(tmp148, tmp152);
    tmp154 = NofibPrelude.Cons(tmp147, tmp153);
    maybe = NofibPrelude.Cons(tmp146, tmp154);
    tmp155 = NofibPrelude.nofibStringToList("?Why are you concerned about my");
    tmp156 = NofibPrelude.nofibStringToList("?What about your own");
    tmp157 = NofibPrelude.Cons(tmp156, NofibPrelude.Nil);
    your = NofibPrelude.Cons(tmp155, tmp157);
    tmp158 = NofibPrelude.nofibStringToList("Can you think of a specific example?");
    tmp159 = NofibPrelude.nofibStringToList("When?");
    tmp160 = NofibPrelude.nofibStringToList("What are you thinking of?");
    tmp161 = NofibPrelude.nofibStringToList("Really, always?");
    tmp162 = NofibPrelude.Cons(tmp161, NofibPrelude.Nil);
    tmp163 = NofibPrelude.Cons(tmp160, tmp162);
    tmp164 = NofibPrelude.Cons(tmp159, tmp163);
    always = NofibPrelude.Cons(tmp158, tmp164);
    tmp165 = NofibPrelude.nofibStringToList("Do you really think so?");
    tmp166 = NofibPrelude.nofibStringToList("?But you are not sure you");
    tmp167 = NofibPrelude.nofibStringToList("?Do you doubt you");
    tmp168 = NofibPrelude.Cons(tmp167, NofibPrelude.Nil);
    tmp169 = NofibPrelude.Cons(tmp166, tmp168);
    think = NofibPrelude.Cons(tmp165, tmp169);
    tmp170 = NofibPrelude.nofibStringToList("In what way?");
    tmp171 = NofibPrelude.nofibStringToList("What resemblence do you see?");
    tmp172 = NofibPrelude.nofibStringToList("What does the similarity suggest to you?");
    tmp173 = NofibPrelude.nofibStringToList("What other connections do you see?");
    tmp174 = NofibPrelude.nofibStringToList("Cound there really be some connection?");
    tmp175 = NofibPrelude.nofibStringToList("How?");
    tmp176 = NofibPrelude.Cons(tmp175, NofibPrelude.Nil);
    tmp177 = NofibPrelude.Cons(tmp174, tmp176);
    tmp178 = NofibPrelude.Cons(tmp173, tmp177);
    tmp179 = NofibPrelude.Cons(tmp172, tmp178);
    tmp180 = NofibPrelude.Cons(tmp171, tmp179);
    alike = NofibPrelude.Cons(tmp170, tmp180);
    tmp181 = NofibPrelude.nofibStringToList("Why do you bring up the topic of friends?");
    tmp182 = NofibPrelude.nofibStringToList("Do your friends worry you?");
    tmp183 = NofibPrelude.nofibStringToList("Do your friends pick on you?");
    tmp184 = NofibPrelude.nofibStringToList("Are you sure you have any friends?");
    tmp185 = NofibPrelude.nofibStringToList("Do you impose on your friends?");
    tmp186 = NofibPrelude.nofibStringToList("Perhaps your love for friends worries you.");
    tmp187 = NofibPrelude.Cons(tmp186, NofibPrelude.Nil);
    tmp188 = NofibPrelude.Cons(tmp185, tmp187);
    tmp189 = NofibPrelude.Cons(tmp184, tmp188);
    tmp190 = NofibPrelude.Cons(tmp183, tmp189);
    tmp191 = NofibPrelude.Cons(tmp182, tmp190);
    friend = NofibPrelude.Cons(tmp181, tmp191);
    tmp192 = NofibPrelude.nofibStringToList("I'm not sure I understand you fully.");
    tmp193 = NofibPrelude.nofibStringToList("What does that suggest to you?");
    tmp194 = NofibPrelude.nofibStringToList("I see.");
    tmp195 = NofibPrelude.nofibStringToList("Can you elaborate on that?");
    tmp196 = NofibPrelude.nofibStringToList("Say, do you have any psychological problems?");
    tmp197 = NofibPrelude.Cons(tmp196, NofibPrelude.Nil);
    tmp198 = NofibPrelude.Cons(tmp195, tmp197);
    tmp199 = NofibPrelude.Cons(tmp194, tmp198);
    tmp200 = NofibPrelude.Cons(tmp193, tmp199);
    nokeyMsgs = NofibPrelude.Cons(tmp192, tmp200);
    tmp201 = NofibPrelude.nofibStringToList("CAN YOU");
    tmp202 = globalThis.Object.freeze([
      tmp201,
      canYou
    ]);
    tmp203 = NofibPrelude.nofibStringToList("CAN I");
    tmp204 = globalThis.Object.freeze([
      tmp203,
      canI
    ]);
    tmp205 = NofibPrelude.nofibStringToList("YOU ARE");
    tmp206 = globalThis.Object.freeze([
      tmp205,
      youAre
    ]);
    tmp207 = NofibPrelude.nofibStringToList("YOU'RE");
    tmp208 = globalThis.Object.freeze([
      tmp207,
      youAre
    ]);
    tmp209 = NofibPrelude.nofibStringToList("I DON'T");
    tmp210 = globalThis.Object.freeze([
      tmp209,
      iDont
    ]);
    tmp211 = NofibPrelude.nofibStringToList("I FEEL");
    tmp212 = globalThis.Object.freeze([
      tmp211,
      iFeel
    ]);
    tmp213 = NofibPrelude.nofibStringToList("WHY DON'T YOU");
    tmp214 = globalThis.Object.freeze([
      tmp213,
      whyDont
    ]);
    tmp215 = NofibPrelude.nofibStringToList("WHY CAN'T I");
    tmp216 = globalThis.Object.freeze([
      tmp215,
      whyCant
    ]);
    tmp217 = NofibPrelude.nofibStringToList("ARE YOU");
    tmp218 = globalThis.Object.freeze([
      tmp217,
      areYou
    ]);
    tmp219 = NofibPrelude.nofibStringToList("I CAN'T");
    tmp220 = globalThis.Object.freeze([
      tmp219,
      iCant
    ]);
    tmp221 = NofibPrelude.nofibStringToList("I AM");
    tmp222 = globalThis.Object.freeze([
      tmp221,
      iAm
    ]);
    tmp223 = NofibPrelude.nofibStringToList("I'M");
    tmp224 = globalThis.Object.freeze([
      tmp223,
      iAm
    ]);
    tmp225 = NofibPrelude.nofibStringToList("YOU");
    tmp226 = globalThis.Object.freeze([
      tmp225,
      you
    ]);
    tmp227 = NofibPrelude.nofibStringToList("YES");
    tmp228 = globalThis.Object.freeze([
      tmp227,
      yes
    ]);
    tmp229 = NofibPrelude.nofibStringToList("NO");
    tmp230 = globalThis.Object.freeze([
      tmp229,
      no
    ]);
    tmp231 = NofibPrelude.nofibStringToList("COMPUTER");
    tmp232 = globalThis.Object.freeze([
      tmp231,
      computer
    ]);
    tmp233 = NofibPrelude.nofibStringToList("COMPUTERS");
    tmp234 = globalThis.Object.freeze([
      tmp233,
      computer
    ]);
    tmp235 = NofibPrelude.nofibStringToList("I WANT");
    tmp236 = globalThis.Object.freeze([
      tmp235,
      iWant
    ]);
    tmp237 = NofibPrelude.nofibStringToList("WHAT");
    tmp238 = globalThis.Object.freeze([
      tmp237,
      question
    ]);
    tmp239 = NofibPrelude.nofibStringToList("HOW");
    tmp240 = globalThis.Object.freeze([
      tmp239,
      question
    ]);
    tmp241 = NofibPrelude.nofibStringToList("WHO");
    tmp242 = globalThis.Object.freeze([
      tmp241,
      question
    ]);
    tmp243 = NofibPrelude.nofibStringToList("WHERE");
    tmp244 = globalThis.Object.freeze([
      tmp243,
      question
    ]);
    tmp245 = NofibPrelude.nofibStringToList("WHEN");
    tmp246 = globalThis.Object.freeze([
      tmp245,
      question
    ]);
    tmp247 = NofibPrelude.nofibStringToList("NAME");
    tmp248 = globalThis.Object.freeze([
      tmp247,
      name
    ]);
    tmp249 = NofibPrelude.nofibStringToList("WHY");
    tmp250 = globalThis.Object.freeze([
      tmp249,
      question
    ]);
    tmp251 = NofibPrelude.nofibStringToList("CAUSE");
    tmp252 = globalThis.Object.freeze([
      tmp251,
      because
    ]);
    tmp253 = NofibPrelude.nofibStringToList("BECAUSE");
    tmp254 = globalThis.Object.freeze([
      tmp253,
      because
    ]);
    tmp255 = NofibPrelude.nofibStringToList("DREAM");
    tmp256 = globalThis.Object.freeze([
      tmp255,
      dream
    ]);
    tmp257 = NofibPrelude.nofibStringToList("SORRY");
    tmp258 = globalThis.Object.freeze([
      tmp257,
      sorry
    ]);
    tmp259 = NofibPrelude.nofibStringToList("HI");
    tmp260 = globalThis.Object.freeze([
      tmp259,
      hello
    ]);
    tmp261 = NofibPrelude.nofibStringToList("DREAMS");
    tmp262 = globalThis.Object.freeze([
      tmp261,
      dream
    ]);
    tmp263 = NofibPrelude.nofibStringToList("MAYBE");
    tmp264 = globalThis.Object.freeze([
      tmp263,
      maybe
    ]);
    tmp265 = NofibPrelude.nofibStringToList("HELLO");
    tmp266 = globalThis.Object.freeze([
      tmp265,
      hello
    ]);
    tmp267 = NofibPrelude.nofibStringToList("ALWAYS");
    tmp268 = globalThis.Object.freeze([
      tmp267,
      always
    ]);
    tmp269 = NofibPrelude.nofibStringToList("YOUR");
    tmp270 = globalThis.Object.freeze([
      tmp269,
      your
    ]);
    tmp271 = NofibPrelude.nofibStringToList("ALIKE");
    tmp272 = globalThis.Object.freeze([
      tmp271,
      alike
    ]);
    tmp273 = NofibPrelude.nofibStringToList("THINK");
    tmp274 = globalThis.Object.freeze([
      tmp273,
      think
    ]);
    tmp275 = NofibPrelude.nofibStringToList("FRIENDS");
    tmp276 = globalThis.Object.freeze([
      tmp275,
      friend
    ]);
    tmp277 = NofibPrelude.nofibStringToList("FRIEND");
    tmp278 = globalThis.Object.freeze([
      tmp277,
      friend
    ]);
    tmp279 = globalThis.Object.freeze([
      NofibPrelude.Nil,
      nokeyMsgs
    ]);
    tmp280 = NofibPrelude.Cons(tmp279, NofibPrelude.Nil);
    tmp281 = NofibPrelude.Cons(tmp278, tmp280);
    tmp282 = NofibPrelude.Cons(tmp276, tmp281);
    tmp283 = NofibPrelude.Cons(tmp274, tmp282);
    tmp284 = NofibPrelude.Cons(tmp272, tmp283);
    tmp285 = NofibPrelude.Cons(tmp270, tmp284);
    tmp286 = NofibPrelude.Cons(tmp268, tmp285);
    tmp287 = NofibPrelude.Cons(tmp266, tmp286);
    tmp288 = NofibPrelude.Cons(tmp264, tmp287);
    tmp289 = NofibPrelude.Cons(tmp262, tmp288);
    tmp290 = NofibPrelude.Cons(tmp260, tmp289);
    tmp291 = NofibPrelude.Cons(tmp258, tmp290);
    tmp292 = NofibPrelude.Cons(tmp256, tmp291);
    tmp293 = NofibPrelude.Cons(tmp254, tmp292);
    tmp294 = NofibPrelude.Cons(tmp252, tmp293);
    tmp295 = NofibPrelude.Cons(tmp250, tmp294);
    tmp296 = NofibPrelude.Cons(tmp248, tmp295);
    tmp297 = NofibPrelude.Cons(tmp246, tmp296);
    tmp298 = NofibPrelude.Cons(tmp244, tmp297);
    tmp299 = NofibPrelude.Cons(tmp242, tmp298);
    tmp300 = NofibPrelude.Cons(tmp240, tmp299);
    tmp301 = NofibPrelude.Cons(tmp238, tmp300);
    tmp302 = NofibPrelude.Cons(tmp236, tmp301);
    tmp303 = NofibPrelude.Cons(tmp234, tmp302);
    tmp304 = NofibPrelude.Cons(tmp232, tmp303);
    tmp305 = NofibPrelude.Cons(tmp230, tmp304);
    tmp306 = NofibPrelude.Cons(tmp228, tmp305);
    tmp307 = NofibPrelude.Cons(tmp226, tmp306);
    tmp308 = NofibPrelude.Cons(tmp224, tmp307);
    tmp309 = NofibPrelude.Cons(tmp222, tmp308);
    tmp310 = NofibPrelude.Cons(tmp220, tmp309);
    tmp311 = NofibPrelude.Cons(tmp218, tmp310);
    tmp312 = NofibPrelude.Cons(tmp216, tmp311);
    tmp313 = NofibPrelude.Cons(tmp214, tmp312);
    tmp314 = NofibPrelude.Cons(tmp212, tmp313);
    tmp315 = NofibPrelude.Cons(tmp210, tmp314);
    tmp316 = NofibPrelude.Cons(tmp208, tmp315);
    tmp317 = NofibPrelude.Cons(tmp206, tmp316);
    tmp318 = NofibPrelude.Cons(tmp204, tmp317);
    tmp319 = NofibPrelude.Cons(tmp202, tmp318);
    tmp320 = Predef.id(tmp319);
    this.respMsgs = tmp320;
    lscomp = function lscomp(ls1) {
      let rs, t, k, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp354, tmp355, tmp356, tmp357;
      if (ls1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls1 instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls1.head;
        arg$Cons$1$ = ls1.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          t = arg$Cons$1$;
          rs = element1$;
          k = element0$;
          tmp354 = eliza1.words(k);
          tmp355 = eliza1.cycle(rs);
          tmp356 = globalThis.Object.freeze([
            tmp354,
            tmp355
          ]);
          tmp357 = lscomp(t);
          return NofibPrelude.Cons(tmp356, tmp357)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp321 = lscomp(eliza1.respMsgs);
    tmp322 = eliza1.cycle(eliza1.repeatMsgs);
    tmp323 = globalThis.Object.freeze([
      tmp321,
      tmp322
    ]);
    this.initial = tmp323;
    lscomp1 = function lscomp(ls1) {
      let x, y, t, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp354, tmp355, tmp356, tmp357, tmp358;
      if (ls1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls1 instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls1.head;
        arg$Cons$1$ = ls1.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          t = arg$Cons$1$;
          y = element1$;
          x = element0$;
          tmp354 = globalThis.Object.freeze([
            x,
            y
          ]);
          tmp355 = globalThis.Object.freeze([
            y,
            x
          ]);
          tmp356 = NofibPrelude.Cons(tmp355, NofibPrelude.Nil);
          tmp357 = NofibPrelude.Cons(tmp354, tmp356);
          tmp358 = lscomp1(t);
          return NofibPrelude.Cons(tmp357, tmp358)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp324 = NofibPrelude.nofibStringToList("me");
    tmp325 = NofibPrelude.nofibStringToList("you");
    tmp326 = globalThis.Object.freeze([
      tmp324,
      tmp325
    ]);
    oneways = NofibPrelude.Cons(tmp326, NofibPrelude.Nil);
    tmp327 = NofibPrelude.nofibStringToList("are");
    tmp328 = NofibPrelude.nofibStringToList("am");
    tmp329 = globalThis.Object.freeze([
      tmp327,
      tmp328
    ]);
    tmp330 = NofibPrelude.nofibStringToList("we're");
    tmp331 = NofibPrelude.nofibStringToList("was");
    tmp332 = globalThis.Object.freeze([
      tmp330,
      tmp331
    ]);
    tmp333 = NofibPrelude.nofibStringToList("you");
    tmp334 = NofibPrelude.nofibStringToList("I");
    tmp335 = globalThis.Object.freeze([
      tmp333,
      tmp334
    ]);
    tmp336 = NofibPrelude.nofibStringToList("your");
    tmp337 = NofibPrelude.nofibStringToList("my");
    tmp338 = globalThis.Object.freeze([
      tmp336,
      tmp337
    ]);
    tmp339 = NofibPrelude.nofibStringToList("I've");
    tmp340 = NofibPrelude.nofibStringToList("you've");
    tmp341 = globalThis.Object.freeze([
      tmp339,
      tmp340
    ]);
    tmp342 = NofibPrelude.nofibStringToList("I'm");
    tmp343 = NofibPrelude.nofibStringToList("you're");
    tmp344 = globalThis.Object.freeze([
      tmp342,
      tmp343
    ]);
    tmp345 = NofibPrelude.Cons(tmp344, NofibPrelude.Nil);
    tmp346 = NofibPrelude.Cons(tmp341, tmp345);
    tmp347 = NofibPrelude.Cons(tmp338, tmp346);
    tmp348 = NofibPrelude.Cons(tmp335, tmp347);
    tmp349 = NofibPrelude.Cons(tmp332, tmp348);
    bothways = NofibPrelude.Cons(tmp329, tmp349);
    tmp350 = lscomp1(bothways);
    tmp351 = NofibPrelude.concat(tmp350);
    tmp352 = NofibPrelude.append(oneways, tmp351);
    ls = tmp352;
    lambda = (undefined, function (caseScrut) {
      let r, w, element1$, element0$, tmp354;
      if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
        element0$ = runtime.Tuple.get(caseScrut, 0);
        element1$ = runtime.Tuple.get(caseScrut, 1);
        r = element1$;
        w = element0$;
        tmp354 = eliza.ucase(w);
        return globalThis.Object.freeze([
          tmp354,
          r
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    inlinedVal = NofibPrelude.map(lambda, ls);
    tmp353 = inlinedVal;
    this.conjugates = tmp353;
  }
  static toUpper(c) {
    return runtime.safeCall(c.toUpperCase())
  } 
  static lz_map(f, ls) {
    let lambda;
    lambda = (undefined, function () {
      let t, h, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.LzNil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        t = arg$Cons$1$;
        h = arg$Cons$0$;
        tmp = runtime.safeCall(f(h));
        tmp1 = eliza.lz_map(f, t);
        return NofibPrelude.LzCons(tmp, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    return NofibPrelude.lazy(lambda)
  } 
  static append_lz(xs, ys) {
    let t, h, arg$Cons$0$, arg$Cons$1$, lambda;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.force(ys)
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      t = arg$Cons$1$;
      h = arg$Cons$0$;
      lambda = (undefined, function () {
        let tmp;
        tmp = eliza.append_lz(t, ys);
        return NofibPrelude.LzCons(h, tmp)
      });
      return NofibPrelude.lazy(lambda)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static cycle(xs) {
    let lambda, tmp;
    lambda = (undefined, function () {
      return eliza.cycle(xs)
    });
    tmp = NofibPrelude.lazy(lambda);
    return eliza.append_lz(xs, tmp)
  } 
  static isSpace(c) {
    return c === " "
  } 
  static words(s) {
    let scrut, t2t, h2h, scrut1, s_, w, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
    scrut = NofibPrelude.leaveWhile(eliza1.isSpace, s);
    if (scrut instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (scrut instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = scrut.head;
      arg$Cons$1$ = scrut.tail;
      t2t = arg$Cons$1$;
      h2h = arg$Cons$0$;
      tmp = NofibPrelude.Cons(h2h, t2t);
      scrut1 = NofibPrelude.break_(eliza1.isSpace, tmp);
      if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
        element0$ = runtime.Tuple.get(scrut1, 0);
        element1$ = runtime.Tuple.get(scrut1, 1);
        s_ = element1$;
        w = element0$;
        tmp1 = eliza1.words(s_);
        return NofibPrelude.Cons(w, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static unwords(ws) {
    let go, w, ws1, arg$Cons$0$, arg$Cons$1$, tmp;
    go = function go(ws2) {
      let w1, ws3, arg$Cons$0$1, arg$Cons$1$1, tmp1, tmp2;
      if (ws2 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ws2 instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = ws2.head;
        arg$Cons$1$1 = ws2.tail;
        ws3 = arg$Cons$1$1;
        w1 = arg$Cons$0$1;
        tmp1 = go(ws3);
        tmp2 = NofibPrelude.append(w1, tmp1);
        return NofibPrelude.Cons(" ", tmp2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    if (ws instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ws instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ws.head;
      arg$Cons$1$ = ws.tail;
      ws1 = arg$Cons$1$;
      w = arg$Cons$0$;
      tmp = go(ws1);
      return NofibPrelude.append(w, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static null_lz(ls) {
    let scrut;
    scrut = NofibPrelude.force(ls);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      return true
    } else if (scrut instanceof NofibPrelude.LzCons.class) {
      return false
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static trim(ls) {
    let cons, lambda, tmp;
    cons = function cons(x, xs) {
      let scrut, scrut1, tmp1;
      tmp1 = NofibPrelude.nofibStringToList(" .!?,");
      scrut = NofibPrelude.inList(x, tmp1);
      if (scrut === true) {
        scrut1 = NofibPrelude.null_(xs);
        if (scrut1 === true) {
          return NofibPrelude.Nil
        }
        return NofibPrelude.Cons(x, xs);
      }
      return NofibPrelude.Cons(x, xs);
    };
    lambda = (undefined, function (x) {
      let tmp1;
      tmp1 = NofibPrelude.nofibStringToList(" .!?,");
      return NofibPrelude.inList(x, tmp1)
    });
    tmp = NofibPrelude.leaveWhile(lambda, ls);
    return NofibPrelude.foldr(cons, NofibPrelude.Nil, tmp)
  } 
  static repeated(kt_rp) {
    let rp, kt, r, element1$, element0$, arg$Cons$0$, arg$Cons$1$, tmp;
    if (runtime.Tuple.isArrayLike(kt_rp) && kt_rp.length === 2) {
      element0$ = runtime.Tuple.get(kt_rp, 0);
      element1$ = runtime.Tuple.get(kt_rp, 1);
      if (element1$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = element1$.head;
        arg$Cons$1$ = element1$.tail;
        rp = arg$Cons$1$;
        r = arg$Cons$0$;
        kt = element0$;
        tmp = globalThis.Object.freeze([
          kt,
          rp
        ]);
        return globalThis.Object.freeze([
          r,
          tmp
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static newKeyTab(kt_, kt_rp) {
    let rp, element1$;
    if (runtime.Tuple.isArrayLike(kt_rp) && kt_rp.length === 2) {
      runtime.Tuple.get(kt_rp, 0);
      element1$ = runtime.Tuple.get(kt_rp, 1);
      rp = element1$;
      return globalThis.Object.freeze([
        kt_,
        rp
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static keyTabOf(kt_rp) {
    let kt, element0$;
    if (runtime.Tuple.isArrayLike(kt_rp) && kt_rp.length === 2) {
      element0$ = runtime.Tuple.get(kt_rp, 0);
      runtime.Tuple.get(kt_rp, 1);
      kt = element0$;
      return kt
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static makeResponse(cs, us) {
    let cs_, cs_1, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (cs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = cs.head;
      arg$Cons$1$ = cs.tail;
      switch (arg$Cons$0$) {
        case "?":
          cs_ = arg$Cons$1$;
          tmp = NofibPrelude.nofibStringToList(" ");
          tmp1 = NofibPrelude.nofibStringToList("?");
          tmp2 = NofibPrelude.append(us, tmp1);
          tmp3 = NofibPrelude.append(tmp, tmp2);
          return NofibPrelude.append(cs_, tmp3);
        case ".":
          cs_1 = arg$Cons$1$;
          tmp4 = NofibPrelude.nofibStringToList(" ");
          tmp5 = NofibPrelude.nofibStringToList(".");
          tmp6 = NofibPrelude.append(us, tmp5);
          tmp7 = NofibPrelude.append(tmp4, tmp6);
          return NofibPrelude.append(cs_1, tmp7);
      }
      return cs
    }
    return cs;
  } 
  static prefix(xxs, yys) {
    loopLabel: while (true) {
      let x, xs, scrut, ys, y, arg$Cons$0$, arg$Cons$1$, arg$LzCons$0$, arg$LzCons$1$, tmp;
      if (xxs instanceof NofibPrelude.Nil.class) {
        return true
      } else if (xxs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xxs.head;
        arg$Cons$1$ = xxs.tail;
        xs = arg$Cons$1$;
        x = arg$Cons$0$;
        scrut = NofibPrelude.force(yys);
        if (scrut instanceof NofibPrelude.LzNil.class) {
          return false
        } else if (scrut instanceof NofibPrelude.LzCons.class) {
          arg$LzCons$0$ = scrut.head;
          arg$LzCons$1$ = scrut.tail;
          ys = arg$LzCons$1$;
          y = arg$LzCons$0$;
          tmp = NofibPrelude.listEq(x, y);
          if (tmp === true) {
            xxs = xs;
            yys = ys;
            continue loopLabel
          }
          return false;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } 
  static tails(xs) {
    let lambda;
    lambda = (undefined, function () {
      let xss, tmp, tmp1;
      if (xs instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.LzNil
      }
      xss = xs;
      tmp = NofibPrelude.tail(xss);
      tmp1 = eliza.tails(tmp);
      return NofibPrelude.LzCons(xss, tmp1);
    });
    return NofibPrelude.lazy(lambda)
  } 
  static ucase(ls) {
    return NofibPrelude.map(eliza.toUpper, ls)
  } 
  static conjug(d, w) {
    let conj, tmp, tmp1, tmp2, d1, xs, inlinedVal, ls, inlinedVal1, cons, scrut;
    conj = function conj(w1) {
      let lscomp, tmp3, tmp4, tmp5;
      lscomp = function lscomp(ls1) {
        let t, w_, m, scrut1, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp6, tmp7;
        if (ls1 instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (ls1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = ls1.head;
          arg$Cons$1$ = ls1.tail;
          if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
            element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
            element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
            t = arg$Cons$1$;
            m = element1$;
            w_ = element0$;
            tmp6 = eliza.ucase(w1);
            scrut1 = NofibPrelude.listEq(tmp6, w_);
            if (scrut1 === true) {
              tmp7 = lscomp(t);
              return NofibPrelude.Cons(m, tmp7)
            }
            return lscomp(t);
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      };
      tmp3 = lscomp(eliza.conjugates);
      tmp4 = NofibPrelude.Cons(w1, NofibPrelude.Nil);
      tmp5 = NofibPrelude.append(tmp3, tmp4);
      return NofibPrelude.head(tmp5)
    };
    d1 = d;
    xs = w;
    scrut = NofibPrelude.null_(xs);
    if (scrut === true) {
      inlinedVal = d1;
    } else {
      inlinedVal = xs;
    }
    tmp = inlinedVal;
    tmp1 = NofibPrelude.map(conj, tmp);
    ls = tmp1;
    cons = function cons(x, xs1) {
      let scrut1, tmp3, tmp4, tmp5, tmp6;
      tmp3 = NofibPrelude.nofibStringToList("I");
      tmp4 = NofibPrelude.listEq(x, tmp3);
      if (tmp4 === true) {
        tmp5 = NofibPrelude.null_(xs1);
      } else {
        tmp5 = false;
      }
      scrut1 = tmp5;
      if (scrut1 === true) {
        tmp6 = NofibPrelude.nofibStringToList("me");
        return NofibPrelude.Cons(tmp6, NofibPrelude.Nil)
      }
      return NofibPrelude.Cons(x, xs1);
    };
    inlinedVal1 = NofibPrelude.foldr(cons, NofibPrelude.Nil, ls);
    tmp2 = inlinedVal1;
    return eliza.unwords(tmp2)
  } 
  static replies(key, l) {
    let lambda, lambda1, tmp, tmp1;
    lambda = (undefined, function (x) {
      let tmp2, tmp3;
      tmp2 = NofibPrelude.listLen(key);
      tmp3 = NofibPrelude.leave(tmp2, x);
      return eliza.conjug(l, tmp3)
    });
    lambda1 = (undefined, function (ls) {
      let tmp2;
      tmp2 = eliza.lz_map(eliza.ucase, ls);
      return eliza.prefix(key, tmp2)
    });
    tmp = eliza.tails(l);
    tmp1 = NofibPrelude.filter_lz(lambda1, tmp);
    return NofibPrelude.map_lz(lambda, tmp1)
  } 
  static answer(st, l) {
    let ans, scrut, response, kt, element1$, element0$, tmp, tmp1;
    ans = function ans(e_es, l1) {
      let key, a_as, es, a, as_, rs, scrut1, scrut2, arg$Cons$0$, arg$Cons$1$, element1$1, element0$1, arg$LzCons$0$, arg$LzCons$1$, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
      if (e_es instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = e_es.head;
        arg$Cons$1$ = e_es.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$1 = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$1 = runtime.Tuple.get(arg$Cons$0$, 1);
          es = arg$Cons$1$;
          a_as = element1$1;
          key = element0$1;
          scrut2 = NofibPrelude.force(a_as);
          if (scrut2 instanceof NofibPrelude.LzCons.class) {
            arg$LzCons$0$ = scrut2.head;
            arg$LzCons$1$ = scrut2.tail;
            as_ = arg$LzCons$1$;
            a = arg$LzCons$0$;
            rs = eliza.replies(key, l1);
            scrut1 = eliza.null_lz(rs);
            if (scrut1 === true) {
              let e, r_es, inlinedVal, es1, r, element1$2, element0$2, tmp8;
              tmp2 = globalThis.Object.freeze([
                key,
                a_as
              ]);
              tmp3 = ans(es, l1);
              e = tmp2;
              r_es = tmp3;
              if (runtime.Tuple.isArrayLike(r_es) && r_es.length === 2) {
                element0$2 = runtime.Tuple.get(r_es, 0);
                element1$2 = runtime.Tuple.get(r_es, 1);
                es1 = element1$2;
                r = element0$2;
                tmp8 = NofibPrelude.Cons(e, es1);
                inlinedVal = globalThis.Object.freeze([
                  r,
                  tmp8
                ]);
                return inlinedVal
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            tmp4 = NofibPrelude.head_lz(rs);
            tmp5 = eliza.makeResponse(a, tmp4);
            tmp6 = globalThis.Object.freeze([
              key,
              as_
            ]);
            tmp7 = NofibPrelude.Cons(tmp6, es);
            return globalThis.Object.freeze([
              tmp5,
              tmp7
            ]);
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    };
    tmp = eliza.keyTabOf(st);
    scrut = ans(tmp, l);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      kt = element1$;
      response = element0$;
      tmp1 = eliza.newKeyTab(kt, st);
      return globalThis.Object.freeze([
        response,
        tmp1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static session(rs, prev, ls) {
    let ls1, l, scrut, scrut1, response, rs_, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      ls1 = arg$Cons$1$;
      l = arg$Cons$0$;
      scrut = NofibPrelude.listEqBy(NofibPrelude.listEq, prev, l);
      if (scrut === true) {
        tmp = eliza.repeated(rs);
      } else {
        tmp = eliza.answer(rs, l);
      }
      scrut1 = tmp;
      if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
        element0$ = runtime.Tuple.get(scrut1, 0);
        element1$ = runtime.Tuple.get(scrut1, 1);
        rs_ = element1$;
        response = element0$;
        tmp1 = NofibPrelude.nofibStringToList("\n\n");
        tmp2 = eliza.session(rs_, l, ls1);
        tmp3 = NofibPrelude.append(tmp1, tmp2);
        return NofibPrelude.append(response, tmp3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } 
  static testEliza_nofib(n) {
    let input, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, lambda, tmp28;
    tmp = NofibPrelude.nofibStringToList("Are we alone?");
    tmp1 = NofibPrelude.nofibStringToList("That the Roswell event was actually an alien encounter. Do you agreed?");
    tmp2 = NofibPrelude.nofibStringToList("But why not talk about you, its more fun.");
    tmp3 = NofibPrelude.nofibStringToList("I dont ask, you do");
    tmp4 = NofibPrelude.nofibStringToList("do ray me");
    tmp5 = NofibPrelude.nofibStringToList("Nop, thats because your a computer");
    tmp6 = NofibPrelude.nofibStringToList("you dont");
    tmp7 = NofibPrelude.nofibStringToList("Oh, a paranoid computer, ehh?");
    tmp8 = NofibPrelude.nofibStringToList("Tell me about *your* mother");
    tmp9 = NofibPrelude.nofibStringToList("No, what what was she like?");
    tmp10 = NofibPrelude.nofibStringToList("I'm asking questions, not you");
    tmp11 = NofibPrelude.nofibStringToList("no");
    tmp12 = NofibPrelude.nofibStringToList("yes");
    tmp13 = NofibPrelude.nofibStringToList("but I'm not");
    tmp14 = NofibPrelude.Cons(tmp13, NofibPrelude.Nil);
    tmp15 = NofibPrelude.Cons(tmp12, tmp14);
    tmp16 = NofibPrelude.Cons(tmp11, tmp15);
    tmp17 = NofibPrelude.Cons(tmp10, tmp16);
    tmp18 = NofibPrelude.Cons(tmp9, tmp17);
    tmp19 = NofibPrelude.Cons(tmp8, tmp18);
    tmp20 = NofibPrelude.Cons(tmp7, tmp19);
    tmp21 = NofibPrelude.Cons(tmp6, tmp20);
    tmp22 = NofibPrelude.Cons(tmp5, tmp21);
    tmp23 = NofibPrelude.Cons(tmp4, tmp22);
    tmp24 = NofibPrelude.Cons(tmp3, tmp23);
    tmp25 = NofibPrelude.Cons(tmp2, tmp24);
    tmp26 = NofibPrelude.Cons(tmp1, tmp25);
    tmp27 = NofibPrelude.Cons(tmp, tmp26);
    input = Predef.id(tmp27);
    lambda = (undefined, function (i) {
      let lambda1, lambda2, tmp29, tmp30, tmp31, tmp32;
      lambda1 = (undefined, function (x) {
        let tmp33;
        tmp33 = NofibPrelude.null_(x);
        return ! tmp33
      });
      lambda2 = (undefined, function (x) {
        let tmp33;
        tmp33 = eliza.trim(x);
        return eliza1.words(tmp33)
      });
      tmp29 = NofibPrelude.intMod(i, 20);
      tmp30 = NofibPrelude.take(tmp29, input);
      tmp31 = NofibPrelude.map(lambda2, tmp30);
      tmp32 = NofibPrelude.filter(lambda1, tmp31);
      return eliza.session(eliza.initial, NofibPrelude.Nil, tmp32)
    });
    tmp28 = NofibPrelude.enumFromTo(1, n);
    return NofibPrelude.map(lambda, tmp28)
  } 
  static main() {
    let lambda, tmp, tmp1;
    lambda = (undefined, function (x) {
      return NofibPrelude.nofibListToString(x)
    });
    tmp = eliza.testEliza_nofib(20);
    tmp1 = NofibPrelude.map(lambda, tmp);
    return runtime.safeCall(tmp1.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "eliza"]; 
});
let eliza = eliza1; export default eliza;
