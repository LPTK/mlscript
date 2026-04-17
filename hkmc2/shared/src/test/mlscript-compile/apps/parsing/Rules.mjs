const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
import Option from "./../../Option.mjs";
import Stack from "./../../Stack.mjs";
import MutMap from "./../../MutMap.mjs";
import Iter from "./../../Iter.mjs";
import Token from "./Token.mjs";
import Keywords from "./Keywords.mjs";
import Tree from "./Tree.mjs";
import ParseRule from "./ParseRule.mjs";
let Rules1;
(class Rules {
  static {
    Rules1 = this
  }
  static #letExpression;
  static {
    let tmp, tmp1, lambda, tmp2, tmp3, tmp4, tmp5, rcd, tmp6, tmp7, tmp8, rcd1, tmp9, tmp10, tmp11, rcd2, tmp12, tmp13, lambda1, tmp14, tmp15, tmp16, tmp17, rcd3, tmp18, tmp19, tmp20, rcd4, tmp21, tmp22, tmp23, rcd5, tmp24, tmp25, lambda2, tmp26, rcd6, tmp27, tmp28, rcd7, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, rcd8, tmp37, tmp38, tmp39, rcd9, tmp40, tmp41, tmp42, rcd10, tmp43, tmp44, lambda3, tmp45, rcd11, tmp46, tmp47, tmp48, rcd12, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, rcd13, tmp56, tmp57, tmp58, rcd14, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, lambda4, rcd15, tmp65, tmp66, tmp67, lambda5, tmp68, tmp69, tmp70, rcd16, tmp71, tmp72, tmp73, rcd17, tmp74, tmp75, tmp76, rcd18, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, rcd19, tmp84, tmp85, tmp86, rcd20, tmp87, tmp88, tmp89, lambda6, tmp90, lambda7, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, rcd21, tmp100, tmp101, tmp102, rcd22, tmp103, rcd23, tmp104, tmp105, rcd24, tmp106, tmp107, tmp108, rcd25, tmp109, tmp110, lambda8, rcd26, tmp111, lambda9, rcd27, tmp112, rcd28, tmp113, lambda10, rcd29, tmp114, lambda11, tmp115, lambda12, tmp116, lambda13, tmp117, lambda14, tmp118, lambda15, tmp119, tmp120, tmp121, lambda16, tmp122, tmp123, tmp124, rcd30, tmp125, tmp126, lambda17, rcd31, tmp127, tmp128, tmp129, lambda18, rcd32, tmp130, tmp131, lambda19, rcd33, tmp132, tmp133, rcd34, tmp134, tmp135, tmp136, lambda20, tmp137, tmp138, rcd35, tmp139, tmp140, tmp141, rcd36, tmp142, tmp143, tmp144, rcd37, tmp145, tmp146, tmp147, rcd38, tmp148, tmp149, lambda21, tmp150, lambda22, tmp151, lambda23, rcd39, tmp152, tmp153, rcd40, tmp154, tmp155, tmp156, tmp157, rcd41, tmp158, tmp159, tmp160, lambda24, tmp161, tmp162, rcd42, tmp163, tmp164, tmp165, rcd43, tmp166, tmp167, tmp168, lambda25, tmp169, tmp170, tmp171, rcd44, tmp172, tmp173, tmp174, rcd45, tmp175, tmp176, tmp177, lambda26, tmp178, tmp179, tmp180, tmp181, rcd46, tmp182, tmp183, tmp184, rcd47, tmp185, tmp186, rcd48, tmp187, tmp188, tmp189, tmp190, lambda27, rcd49, tmp191, tmp192, tmp193, lambda28, tmp194, tmp195, tmp196, rcd50, tmp197, tmp198, lambda29, tmp199, tmp200, tmp201, tmp202, lambda30, rcd51, tmp203, tmp204, tmp205, tmp206, tmp207, rcd52, tmp208, tmp209, tmp210, rcd53, tmp211, tmp212, rcd54, tmp213, tmp214, rcd55, tmp215, tmp216, tmp217, lambda31, rcd56, tmp218, tmp219, rcd57, tmp220, tmp221, tmp222, tmp223, lambda32, rcd58, tmp224, tmp225, tmp226, tmp227, tmp228, tmp229, tmp230, rcd59, tmp231, tmp232, rcd60, tmp233, tmp234, tmp235, tmp236, tmp237, tmp238, tmp239, rcd61, tmp240, tmp241, rcd62, tmp242, tmp243, tmp244, tmp245, tmp246, lambda33, rcd63, tmp247, tmp248, tmp249, tmp250, lambda34, rcd64, tmp251, tmp252, tmp253, lambda35, rcd65, tmp254, tmp255, rcd66, tmp256, tmp257, tmp258, tmp259, tmp260, tmp261;
    this.syntaxKinds = MutMap.empty;
    tmp = globalThis.Object.freeze(new globalThis.Set());
    this.extendedKinds = tmp;
    tmp1 = Rules.define("let-bindings");
    lambda = (undefined, function (lhs, rhsBindings) {
      let rhs, bindings, element1$, element0$, tmp262;
      if (runtime.Tuple.isArrayLike(rhsBindings) && rhsBindings.length === 2) {
        element0$ = runtime.Tuple.get(rhsBindings, 0);
        element1$ = runtime.Tuple.get(rhsBindings, 1);
        bindings = element1$;
        rhs = element0$;
        tmp262 = Tree.Infix(Keywords._equal, lhs, rhs);
        return Stack.Cons(tmp262, bindings)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    tmp2 = ParseRule.Choice.keyword(Keywords._equal);
    tmp3 = ParseRule.Choice.end(Stack.Nil);
    tmp4 = ParseRule.Choice.keyword(Keywords._and);
    tmp5 = ParseRule.Choice.reference("let-bindings");
    rcd = globalThis.Object.freeze({
      process: Rules.idFirst,
      name: "let-bindings tail"
    });
    tmp6 = runtime.safeCall(tmp5(rcd));
    tmp7 = runtime.safeCall(tmp4(tmp6));
    tmp8 = Predef.tuple(tmp3, tmp7);
    rcd1 = globalThis.Object.freeze({
      name: "right-hand side",
      choices: tmp8
    });
    tmp9 = runtime.safeCall(ParseRule.Choice.term(rcd1));
    tmp10 = runtime.safeCall(tmp2(tmp9));
    tmp11 = Predef.tuple(tmp10);
    rcd2 = globalThis.Object.freeze({
      process: lambda,
      name: "left-hand side",
      choices: tmp11
    });
    tmp12 = runtime.safeCall(ParseRule.Choice.term(rcd2));
    runtime.safeCall(tmp1(tmp12));
    Rules.#letExpression = Rules.makeLetBindings(true);
    tmp13 = Rules.define("simple-matching");
    lambda1 = (undefined, function (lhs, rhsTail) {
      let rhs, tail, element1$, element0$, tmp262;
      if (runtime.Tuple.isArrayLike(rhsTail) && rhsTail.length === 2) {
        element0$ = runtime.Tuple.get(rhsTail, 0);
        element1$ = runtime.Tuple.get(rhsTail, 1);
        tail = element1$;
        rhs = element0$;
        tmp262 = Tree.Infix(Keywords._thinArrow, lhs, rhs);
        return Stack.Cons(tmp262, tail)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    tmp14 = ParseRule.Choice.keyword(Keywords._thinArrow);
    tmp15 = ParseRule.Choice.end(Stack.Nil);
    tmp16 = ParseRule.Choice.keyword(Keywords._bar);
    tmp17 = ParseRule.Choice.reference("simple-matching");
    rcd3 = globalThis.Object.freeze({
      process: Rules.idFirst,
      name: "simple-matching tail"
    });
    tmp18 = runtime.safeCall(tmp17(rcd3));
    tmp19 = runtime.safeCall(tmp16(tmp18));
    tmp20 = Predef.tuple(tmp15, tmp19);
    rcd4 = globalThis.Object.freeze({
      name: "rhs",
      choices: tmp20
    });
    tmp21 = runtime.safeCall(ParseRule.Choice.term(rcd4));
    tmp22 = runtime.safeCall(tmp14(tmp21));
    tmp23 = Predef.tuple(tmp22);
    rcd5 = globalThis.Object.freeze({
      process: lambda1,
      name: "case body",
      choices: tmp23
    });
    tmp24 = runtime.safeCall(ParseRule.Choice.term(rcd5));
    runtime.safeCall(tmp13(tmp24));
    tmp25 = Rules.define("pattern-list");
    lambda2 = (undefined, function (head, tail) {
      return Stack.Cons(head, tail)
    });
    tmp26 = ParseRule.Choice.reference("pattern-list");
    rcd6 = globalThis.Object.freeze({
      process: Rules.idFirst,
      name: "pattern list tail"
    });
    tmp27 = runtime.safeCall(tmp26(rcd6));
    tmp28 = Predef.tuple(tmp27);
    rcd7 = globalThis.Object.freeze({
      process: lambda2,
      name: "pattern",
      choices: tmp28
    });
    tmp29 = runtime.safeCall(ParseRule.Choice.term(rcd7));
    runtime.safeCall(tmp25(tmp29));
    tmp30 = Rules.define("multiple-matching");
    tmp31 = ParseRule.Choice.reference("pattern-list");
    tmp32 = Tree.infix(Keywords._thinArrow);
    tmp33 = ParseRule.Choice.keyword(Keywords._thinArrow);
    tmp34 = ParseRule.Choice.end(Stack.Nil);
    tmp35 = ParseRule.Choice.keyword(Keywords._bar);
    tmp36 = ParseRule.Choice.reference("multiple-matching");
    rcd8 = globalThis.Object.freeze({
      process: Rules.idFirst,
      name: "multiple-matching tail"
    });
    tmp37 = runtime.safeCall(tmp36(rcd8));
    tmp38 = runtime.safeCall(tmp35(tmp37));
    tmp39 = Predef.tuple(tmp34, tmp38);
    rcd9 = globalThis.Object.freeze({
      process: Rules.idFirst,
      name: "the right-hand side of the arrow",
      choices: tmp39
    });
    tmp40 = runtime.safeCall(ParseRule.Choice.term(rcd9));
    tmp41 = runtime.safeCall(tmp33(tmp40));
    tmp42 = Predef.tuple(tmp41);
    rcd10 = globalThis.Object.freeze({
      process: tmp32,
      name: "list of patterns",
      choices: tmp42
    });
    tmp43 = runtime.safeCall(tmp31(rcd10));
    runtime.safeCall(tmp30(tmp43));
    tmp44 = ParseRule.Choice.keyword(Keywords._fun);
    lambda3 = (undefined, function (params, body) {
      let tmp262;
      tmp262 = Stack.Cons(params, Stack.Nil);
      return Tree.Lambda(tmp262, body)
    });
    tmp45 = ParseRule.Choice.keyword(Keywords._thinArrow);
    rcd11 = globalThis.Object.freeze({
      process: Rules.idFirst,
      name: "function body"
    });
    tmp46 = runtime.safeCall(ParseRule.Choice.term(rcd11));
    tmp47 = runtime.safeCall(tmp45(tmp46));
    tmp48 = Predef.tuple(tmp47);
    rcd12 = globalThis.Object.freeze({
      process: lambda3,
      name: "function parameters",
      choices: tmp48
    });
    tmp49 = runtime.safeCall(ParseRule.Choice.term(rcd12));
    tmp50 = runtime.safeCall(tmp44(tmp49));
    tmp51 = ParseRule.Choice.keyword(Keywords._match);
    tmp52 = ParseRule.Choice.keyword(Keywords._with);
    tmp53 = ParseRule.Choice.keyword(Keywords._bar);
    tmp54 = runtime.safeCall(tmp53());
    tmp55 = Rules.getRuleByKind("simple-matching");
    rcd13 = globalThis.Object.freeze({
      optional: true,
      init: tmp54,
      rest: tmp55,
      process: Rules.idSecond
    });
    tmp56 = ParseRule.Choice.siding(rcd13);
    tmp57 = runtime.safeCall(tmp52(tmp56));
    tmp58 = Predef.tuple(tmp57);
    rcd14 = globalThis.Object.freeze({
      process: Tree.Match,
      name: "pattern matching scrutinee",
      choices: tmp58
    });
    tmp59 = runtime.safeCall(ParseRule.Choice.term(rcd14));
    tmp60 = runtime.safeCall(tmp51(tmp59));
    tmp61 = ParseRule.Choice.keyword(Keywords._function);
    tmp62 = ParseRule.Choice.keyword(Keywords._bar);
    tmp63 = runtime.safeCall(tmp62());
    tmp64 = Rules.getRuleByKind("simple-matching");
    lambda4 = (undefined, function (_, branches) {
      return Tree.Match(Tree.empty, branches)
    });
    rcd15 = globalThis.Object.freeze({
      optional: true,
      init: tmp63,
      rest: tmp64,
      process: lambda4
    });
    tmp65 = ParseRule.Choice.siding(rcd15);
    tmp66 = runtime.safeCall(tmp61(tmp65));
    tmp67 = ParseRule.Choice.keyword(Keywords._if);
    lambda5 = (undefined, function (tst, conAlt) {
      let con, alt, element1$, element0$;
      if (runtime.Tuple.isArrayLike(conAlt) && conAlt.length === 2) {
        element0$ = runtime.Tuple.get(conAlt, 0);
        element1$ = runtime.Tuple.get(conAlt, 1);
        alt = element1$;
        con = element0$;
        return Tree.Ternary(Keywords._if, tst, con, alt)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    tmp68 = ParseRule.Choice.keyword(Keywords._then);
    tmp69 = ParseRule.Choice.end(Option.None);
    tmp70 = ParseRule.Choice.keyword(Keywords._else);
    rcd16 = globalThis.Object.freeze({
      process: Rules.someFirst,
      name: "if-then-else alternative"
    });
    tmp71 = runtime.safeCall(ParseRule.Choice.term(rcd16));
    tmp72 = runtime.safeCall(tmp70(tmp71));
    tmp73 = Predef.tuple(tmp69, tmp72);
    rcd17 = globalThis.Object.freeze({
      name: "if-then-else consequent",
      choices: tmp73
    });
    tmp74 = runtime.safeCall(ParseRule.Choice.term(rcd17));
    tmp75 = runtime.safeCall(tmp68(tmp74));
    tmp76 = Predef.tuple(tmp75);
    rcd18 = globalThis.Object.freeze({
      process: lambda5,
      name: "if-then-else condition",
      choices: tmp76
    });
    tmp77 = runtime.safeCall(ParseRule.Choice.term(rcd18));
    tmp78 = runtime.safeCall(tmp67(tmp77));
    tmp79 = ParseRule.Choice.keyword(Keywords._while);
    tmp80 = ParseRule.Choice.keyword(Keywords._do);
    tmp81 = ParseRule.Choice.keyword(Keywords._done);
    tmp82 = runtime.safeCall(tmp81());
    tmp83 = Predef.tuple(tmp82);
    rcd19 = globalThis.Object.freeze({
      name: "while end",
      process: Rules.idFirst,
      choices: tmp83
    });
    tmp84 = runtime.safeCall(ParseRule.Choice.term(rcd19));
    tmp85 = runtime.safeCall(tmp80(tmp84));
    tmp86 = Predef.tuple(tmp85);
    rcd20 = globalThis.Object.freeze({
      process: Tree.While,
      name: "while body",
      choices: tmp86
    });
    tmp87 = runtime.safeCall(ParseRule.Choice.term(rcd20));
    tmp88 = runtime.safeCall(tmp79(tmp87));
    tmp89 = ParseRule.Choice.keyword(Keywords._for);
    lambda6 = (undefined, function (head, startEndBody) {
      return Tree.For(head, ...startEndBody)
    });
    tmp90 = ParseRule.Choice.keyword(Keywords._equal);
    lambda7 = (undefined, function (start, endBody) {
      return globalThis.Object.freeze([
        start,
        ...endBody
      ])
    });
    tmp91 = ParseRule.Choice.keyword(Keywords._to);
    tmp92 = runtime.safeCall(tmp91());
    tmp93 = ParseRule.Choice.keyword(Keywords._downto);
    tmp94 = runtime.safeCall(tmp93());
    tmp95 = Predef.tuple(tmp92, tmp94);
    tmp96 = ParseRule.Choice.keyword(Keywords._do);
    tmp97 = ParseRule.Choice.keyword(Keywords._done);
    tmp98 = runtime.safeCall(tmp97());
    tmp99 = Predef.tuple(tmp98);
    rcd21 = globalThis.Object.freeze({
      name: "`for` `done` keyword",
      process: Rules.idFirst,
      choices: tmp99
    });
    tmp100 = runtime.safeCall(ParseRule.Choice.term(rcd21));
    tmp101 = runtime.safeCall(tmp96(tmp100));
    tmp102 = Predef.tuple(tmp101);
    rcd22 = globalThis.Object.freeze({
      name: "`for` `do` keyword",
      choices: tmp102
    });
    tmp103 = runtime.safeCall(ParseRule.Choice.term(rcd22));
    rcd23 = globalThis.Object.freeze({
      init: tmp95,
      rest: tmp103,
      process: Rules.idSecond
    });
    tmp104 = ParseRule.Choice.siding(rcd23);
    tmp105 = Predef.tuple(tmp104);
    rcd24 = globalThis.Object.freeze({
      process: lambda7,
      name: "`for` `to` or `downto` keyword",
      choices: tmp105
    });
    tmp106 = runtime.safeCall(ParseRule.Choice.term(rcd24));
    tmp107 = runtime.safeCall(tmp90(tmp106));
    tmp108 = Predef.tuple(tmp107);
    rcd25 = globalThis.Object.freeze({
      name: "`for` head",
      process: lambda6,
      choices: tmp108
    });
    tmp109 = runtime.safeCall(ParseRule.Choice.term(rcd25));
    tmp110 = runtime.safeCall(tmp89(tmp109));
    lambda8 = (undefined, function (tree) {
      if (tree instanceof Tree.Empty.class) {
        return Tree.Tuple(Stack.Nil)
      }
      return tree;
    });
    rcd26 = globalThis.Object.freeze({
      opening: Keywords._leftRound,
      closing: Keywords._rightRound,
      kind: "term",
      wrapContent: lambda8
    });
    tmp111 = Rules.makeBracketRule(rcd26);
    lambda9 = (undefined, function (tree) {
      let tmp262;
      if (tree instanceof Tree.Empty.class) {
        tmp262 = Tree.Sequence(Stack.Nil);
        return Tree.Bracketed(Token.Square, tmp262)
      }
      tmp262 = tree;
      return Tree.Bracketed(Token.Square, tmp262);
    });
    rcd27 = globalThis.Object.freeze({
      opening: Keywords._leftSquare,
      closing: Keywords._rightSquare,
      kind: "term",
      wrapContent: lambda9
    });
    tmp112 = Rules.makeBracketRule(rcd27);
    rcd28 = globalThis.Object.freeze({
      opening: Keywords._leftCurly,
      closing: Keywords._rightCurly,
      kind: "term",
      wrapContent: Predef.id
    });
    tmp113 = Rules.makeBracketRule(rcd28);
    lambda10 = (undefined, function (tree) {
      if (tree instanceof Tree.Empty.class) {
        return Tree.Sequence(Stack.Nil)
      }
      return tree;
    });
    rcd29 = globalThis.Object.freeze({
      opening: Keywords._begin,
      closing: Keywords._end,
      kind: "term",
      wrapContent: lambda10
    });
    tmp114 = Rules.makeBracketRule(rcd29);
    lambda11 = (undefined, function (lhs, rhs) {
      let tail, arg$Tuple$0$, tmp262, tmp263, tmp264;
      if (rhs instanceof Tree.Tuple.class) {
        arg$Tuple$0$ = rhs.trees;
        tail = arg$Tuple$0$;
        tmp262 = Stack.Cons(lhs, tail);
        return Tree.Tuple(tmp262)
      }
      tmp263 = Stack.Cons(rhs, Stack.Nil);
      tmp264 = Stack.Cons(lhs, tmp263);
      return Tree.Tuple(tmp264);
    });
    tmp115 = Rules.makeInfixChoice(Keywords._comma, "term", lambda11);
    lambda12 = (undefined, function (lhs, rhs) {
      let tail, arg$Sequence$0$, tmp262, tmp263, tmp264;
      if (rhs instanceof Tree.Sequence.class) {
        arg$Sequence$0$ = rhs.trees;
        tail = arg$Sequence$0$;
        tmp262 = Stack.Cons(lhs, tail);
        return Tree.Sequence(tmp262)
      }
      tmp263 = Stack.Cons(rhs, Stack.Nil);
      tmp264 = Stack.Cons(lhs, tmp263);
      return Tree.Sequence(tmp264);
    });
    tmp116 = Rules.makeInfixChoice(Keywords._semicolon, "term", lambda12);
    lambda13 = (undefined, function (lhs, rhs) {
      return Tree.Infix(Keywords._leftArrow, lhs, rhs)
    });
    tmp117 = Rules.makeInfixChoice(Keywords._leftArrow, "term", lambda13);
    lambda14 = (undefined, function (lhs, rhs) {
      return Tree.Infix(Keywords._equalequal, lhs, rhs)
    });
    tmp118 = Rules.makeInfixChoice(Keywords._equalequal, "term", lambda14);
    lambda15 = (undefined, function (lhs, rhs) {
      let tmp262, tmp263, tmp264;
      tmp262 = Tree.Ident("*", true);
      tmp263 = Stack.Cons(rhs, Stack.Nil);
      tmp264 = Stack.Cons(lhs, tmp263);
      return Tree.App(tmp262, tmp264)
    });
    tmp119 = Rules.makeInfixChoice(Keywords._asterisk, "term", lambda15);
    tmp120 = ParseRule.Choice.keyword(Keywords._period);
    tmp121 = ParseRule.Choice.keyword(Keywords._leftRound);
    lambda16 = (undefined, function (argument, _) {
      let lambda36;
      lambda36 = (undefined, function (lhs) {
        let tmp262;
        tmp262 = Tree.Bracketed(Token.Round, argument);
        return Tree.Infix(Keywords._period, lhs, tmp262)
      });
      return lambda36
    });
    tmp122 = ParseRule.Choice.keyword(Keywords._rightRound);
    tmp123 = runtime.safeCall(tmp122());
    tmp124 = Predef.tuple(tmp123);
    rcd30 = globalThis.Object.freeze({
      process: lambda16,
      name: "application argument",
      choices: tmp124
    });
    tmp125 = runtime.safeCall(ParseRule.Choice.term(rcd30));
    tmp126 = runtime.safeCall(tmp121(tmp125));
    lambda17 = (undefined, function (rhs, _) {
      let lambda36;
      lambda36 = (undefined, function (lhs) {
        return Tree.Infix(Keywords._period, lhs, rhs)
      });
      return lambda36
    });
    rcd31 = globalThis.Object.freeze({
      process: lambda17,
      name: "operator `.` right-hand side"
    });
    tmp127 = runtime.safeCall(ParseRule.Choice.term(rcd31));
    tmp128 = runtime.safeCall(tmp120(tmp126, tmp127));
    tmp129 = ParseRule.Choice.keyword(Keywords._colon);
    lambda18 = (undefined, function (rhs, _) {
      let lambda36;
      lambda36 = (undefined, function (lhs) {
        return Tree.Infix(Keywords._colon, lhs, rhs)
      });
      return lambda36
    });
    rcd32 = globalThis.Object.freeze({
      process: lambda18,
      name: "right-hand side type"
    });
    tmp130 = runtime.safeCall(ParseRule.Choice.typeExpr(rcd32));
    tmp131 = runtime.safeCall(tmp129(tmp130));
    lambda19 = (undefined, function (argument, _) {
      let lambda36;
      lambda36 = (undefined, function (callee) {
        return Tree.App(callee, argument)
      });
      return lambda36
    });
    rcd33 = globalThis.Object.freeze({
      process: lambda19,
      name: "application argument",
      outerPrec: Keywords.appPrec
    });
    tmp132 = runtime.safeCall(ParseRule.Choice.term(rcd33));
    tmp133 = Predef.tuple(tmp115, tmp116, tmp117, tmp118, tmp119, tmp128, tmp131, tmp132);
    rcd34 = globalThis.Object.freeze({
      process: Predef.pipeInto,
      choices: tmp133
    });
    tmp134 = runtime.safeCall(ParseRule.Choice.term(rcd34));
    tmp135 = ParseRule.rule("prefix rules for expressions", Rules.#letExpression, tmp50, tmp60, tmp66, tmp78, tmp88, tmp110, tmp111, tmp112, tmp113, tmp114, tmp134);
    this.termRule = tmp135;
    tmp136 = ParseRule.Choice.keyword(Keywords._leftRound);
    lambda20 = (undefined, function (headArg, tailArgsCtor) {
      let ctor, tailArgs, ctor1, arg$Some$0$, element1$, element0$, tmp262, tmp263;
      if (runtime.Tuple.isArrayLike(tailArgsCtor) && tailArgsCtor.length === 2) {
        element0$ = runtime.Tuple.get(tailArgsCtor, 0);
        element1$ = runtime.Tuple.get(tailArgsCtor, 1);
        ctor = element1$;
        tailArgs = element0$;
        tmp262 = Stack.Cons(headArg, tailArgs);
        tmp263 = Tree.Tuple(tmp262);
        return Tree.App(ctor, tmp263)
      } else if (tailArgsCtor instanceof Option.Some.class) {
        arg$Some$0$ = tailArgsCtor.value;
        ctor1 = arg$Some$0$;
        return Tree.App(ctor1, headArg)
      } else if (tailArgsCtor instanceof Option.None.class) {
        return headArg
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    tmp137 = ParseRule.Choice.reference("type-arguments-tail");
    tmp138 = ParseRule.Choice.keyword(Keywords._rightRound);
    rcd35 = globalThis.Object.freeze({
      process: Rules.someFirst,
      name: "the type constructor's name"
    });
    tmp139 = runtime.safeCall(ParseRule.Choice.ident(rcd35));
    tmp140 = runtime.safeCall(tmp138(tmp139));
    tmp141 = Predef.tuple(tmp140);
    rcd36 = globalThis.Object.freeze({
      name: "the remaining type arguments",
      choices: tmp141
    });
    tmp142 = runtime.safeCall(tmp137(rcd36));
    tmp143 = ParseRule.Choice.keyword(Keywords._rightRound);
    tmp144 = ParseRule.Choice.end(Option.None);
    rcd37 = globalThis.Object.freeze({
      process: Rules.someFirst,
      name: "the type constructor's name"
    });
    tmp145 = runtime.safeCall(ParseRule.Choice.ident(rcd37));
    tmp146 = runtime.safeCall(tmp143(tmp144, tmp145));
    tmp147 = Predef.tuple(tmp142, tmp146);
    rcd38 = globalThis.Object.freeze({
      process: lambda20,
      name: "the first type in the parentheses",
      choices: tmp147
    });
    tmp148 = runtime.safeCall(ParseRule.Choice.typeExpr(rcd38));
    tmp149 = runtime.safeCall(tmp136(tmp148));
    lambda21 = (undefined, function (lhs, rhs) {
      return Tree.Infix(Keywords._thinArrow, lhs, rhs)
    });
    tmp150 = Rules.makeInfixChoice(Keywords._thinArrow, "type", lambda21);
    lambda22 = (undefined, function (lhs, rhs) {
      return Tree.Infix(Keywords._asterisk, lhs, rhs)
    });
    tmp151 = Rules.makeInfixChoice(Keywords._asterisk, "type", lambda22);
    lambda23 = (undefined, function (callee, _) {
      let lambda36;
      lambda36 = (undefined, function (argument) {
        return Tree.App(callee, argument)
      });
      return lambda36
    });
    rcd39 = globalThis.Object.freeze({
      process: lambda23,
      outerPrec: Keywords.appPrec
    });
    tmp152 = runtime.safeCall(ParseRule.Choice.typeExpr(rcd39));
    tmp153 = Predef.tuple(tmp150, tmp151, tmp152);
    rcd40 = globalThis.Object.freeze({
      process: Predef.pipeInto,
      choices: tmp153
    });
    tmp154 = runtime.safeCall(ParseRule.Choice.typeExpr(rcd40));
    tmp155 = ParseRule.rule("rules for types", tmp149, tmp154);
    this.typeRule = tmp155;
    tmp156 = Rules.define("type-arguments-tail");
    tmp157 = ParseRule.Choice.keyword(Keywords._comma);
    rcd41 = globalThis.Object.freeze({
      head: "type",
      tail: "type-arguments-tail",
      name: "type argument"
    });
    tmp158 = Rules.listLike(rcd41);
    tmp159 = runtime.safeCall(tmp157(tmp158));
    runtime.safeCall(tmp156(tmp159));
    tmp160 = Rules.define("constr-decl");
    lambda24 = (undefined, function (ctor, argOpt) {
      let arg, arg$Some$0$;
      if (argOpt instanceof Option.Some.class) {
        arg$Some$0$ = argOpt.value;
        arg = arg$Some$0$;
        return Tree.Infix(Keywords._of, ctor, arg)
      } else if (argOpt instanceof Option.None.class) {
        return ctor
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    tmp161 = ParseRule.Choice.end(Option.None);
    tmp162 = ParseRule.Choice.keyword(Keywords._of);
    rcd42 = globalThis.Object.freeze({
      process: Rules.someFirst,
      name: "the variant constructor's argument"
    });
    tmp163 = runtime.safeCall(ParseRule.Choice.typeExpr(rcd42));
    tmp164 = runtime.safeCall(tmp162(tmp163));
    tmp165 = Predef.tuple(tmp161, tmp164);
    rcd43 = globalThis.Object.freeze({
      process: lambda24,
      name: "the variant constructor's name",
      choices: tmp165
    });
    tmp166 = runtime.safeCall(ParseRule.Choice.ident(rcd43));
    runtime.safeCall(tmp160(tmp166));
    tmp167 = Rules.define("variants");
    tmp168 = ParseRule.Choice.reference("constr-decl");
    lambda25 = (undefined, function (lhs, rhsOpt) {
      let rhs, arg$Some$0$;
      if (rhsOpt instanceof Option.Some.class) {
        arg$Some$0$ = rhsOpt.value;
        rhs = arg$Some$0$;
        return Tree.Infix(Keywords._bar, lhs, rhs)
      }
      return lhs;
    });
    tmp169 = ParseRule.Choice.end(Option.None);
    tmp170 = ParseRule.Choice.keyword(Keywords._bar);
    tmp171 = ParseRule.Choice.reference("variants");
    rcd44 = globalThis.Object.freeze({
      process: Rules.someFirst,
      name: "variants end"
    });
    tmp172 = runtime.safeCall(tmp171(rcd44));
    tmp173 = runtime.safeCall(tmp170(tmp172));
    tmp174 = Predef.tuple(tmp169, tmp173);
    rcd45 = globalThis.Object.freeze({
      process: lambda25,
      name: "variants item",
      choices: tmp174
    });
    tmp175 = runtime.safeCall(tmp168(rcd45));
    runtime.safeCall(tmp167(tmp175));
    tmp176 = Rules.define("typedefs");
    tmp177 = ParseRule.Choice.reference("typedef-lhs");
    lambda26 = (undefined, function (lhs, rhsMore) {
      let rhs, more, element1$, element0$, tmp262;
      if (runtime.Tuple.isArrayLike(rhsMore) && rhsMore.length === 2) {
        element0$ = runtime.Tuple.get(rhsMore, 0);
        element1$ = runtime.Tuple.get(rhsMore, 1);
        more = element1$;
        rhs = element0$;
        tmp262 = runtime.safeCall(rhs(lhs));
        return Stack.Cons(tmp262, more)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    tmp178 = ParseRule.Choice.reference("typedef-rhs");
    tmp179 = ParseRule.Choice.end(Stack.Nil);
    tmp180 = ParseRule.Choice.keyword(Keywords._and);
    tmp181 = ParseRule.Choice.reference("typedefs");
    rcd46 = globalThis.Object.freeze({
      process: Rules.idFirst,
      name: "typedef end"
    });
    tmp182 = runtime.safeCall(tmp181(rcd46));
    tmp183 = runtime.safeCall(tmp180(tmp182));
    tmp184 = Predef.tuple(tmp179, tmp183);
    rcd47 = globalThis.Object.freeze({
      name: "typedef body",
      choices: tmp184
    });
    tmp185 = runtime.safeCall(tmp178(rcd47));
    tmp186 = Predef.tuple(tmp185);
    rcd48 = globalThis.Object.freeze({
      process: lambda26,
      name: "typedef name",
      choices: tmp186
    });
    tmp187 = runtime.safeCall(tmp177(rcd48));
    runtime.safeCall(tmp176(tmp187));
    tmp188 = Rules.define("typedef-rhs");
    tmp189 = ParseRule.Choice.keyword(Keywords._equal);
    tmp190 = ParseRule.Choice.reference("variants");
    lambda27 = (undefined, function (rhs, _) {
      let lambda36;
      lambda36 = (undefined, function (lhs) {
        return Tree.Infix(Keywords._equal, lhs, rhs)
      });
      return lambda36
    });
    rcd49 = globalThis.Object.freeze({
      process: lambda27,
      name: "typedef-rhs: variants"
    });
    tmp191 = runtime.safeCall(tmp190(rcd49));
    tmp192 = ParseRule.Choice.keyword(Keywords._leftCurly);
    tmp193 = ParseRule.Choice.reference("label-decls");
    lambda28 = (undefined, function (content, _) {
      let tmp262, tmp263;
      if (content instanceof Stack.Nil.class) {
        tmp262 = Tree.Sequence(Stack.Nil);
        return Tree.Bracketed(Token.Curly, tmp262)
      }
      tmp263 = Tree.Sequence(content);
      return Tree.Bracketed(Token.Curly, tmp263);
    });
    tmp194 = ParseRule.Choice.keyword(Keywords._rightCurly);
    tmp195 = ParseRule.Choice.end(Tree.empty);
    tmp196 = runtime.safeCall(tmp194(tmp195));
    rcd50 = globalThis.Object.freeze({
      process: lambda28,
      name: "label-decl",
      choices: tmp196
    });
    tmp197 = runtime.safeCall(tmp193(rcd50));
    tmp198 = runtime.safeCall(tmp192(tmp197));
    lambda29 = (undefined, function (rhs) {
      let lambda36;
      lambda36 = (undefined, function (lhs) {
        return Tree.Infix(Keywords._equal, lhs, rhs)
      });
      return lambda36
    });
    tmp199 = ParseRule.Choice.map(tmp198, lambda29);
    tmp200 = runtime.safeCall(tmp189(tmp191, tmp199));
    runtime.safeCall(tmp188(tmp200));
    tmp201 = Rules.define("typedef-rhs");
    tmp202 = ParseRule.Choice.keyword(Keywords._equalequal);
    lambda30 = (undefined, function (rhs, _) {
      let lambda36;
      lambda36 = (undefined, function (lhs) {
        return Tree.Infix(Keywords._equalequal, lhs, rhs)
      });
      return lambda36
    });
    rcd51 = globalThis.Object.freeze({
      process: lambda30,
      name: "type alias body"
    });
    tmp203 = runtime.safeCall(ParseRule.Choice.typeExpr(rcd51));
    tmp204 = runtime.safeCall(tmp202(tmp203));
    runtime.safeCall(tmp201(tmp204));
    tmp205 = Rules.define("label-decl");
    tmp206 = Tree.infix(Keywords._colon);
    tmp207 = ParseRule.Choice.keyword(Keywords._colon);
    rcd52 = globalThis.Object.freeze({
      process: Rules.idFirst,
      name: "label-decl body"
    });
    tmp208 = runtime.safeCall(ParseRule.Choice.typeExpr(rcd52));
    tmp209 = runtime.safeCall(tmp207(tmp208));
    tmp210 = Predef.tuple(tmp209);
    rcd53 = globalThis.Object.freeze({
      process: tmp206,
      name: "label-decl name",
      choices: tmp210
    });
    tmp211 = runtime.safeCall(ParseRule.Choice.typeExpr(rcd53));
    runtime.safeCall(tmp205(tmp211));
    tmp212 = Rules.define("label-decls");
    rcd54 = globalThis.Object.freeze({
      head: "label-decl",
      tail: "label-decls",
      name: "label and declaration pair",
      sep: Keywords._semicolon
    });
    tmp213 = Rules.listLike(rcd54);
    runtime.safeCall(tmp212(tmp213));
    tmp214 = Rules.define("constr-decls");
    rcd55 = globalThis.Object.freeze({
      head: "constr-decl",
      tail: "constr-decls",
      name: "constructor declaration",
      sep: Keywords._bar
    });
    tmp215 = Rules.listLike(rcd55);
    runtime.safeCall(tmp214(tmp215));
    tmp216 = Rules.define("typedef-lhs");
    tmp217 = ParseRule.Choice.reference("type-params");
    lambda31 = (undefined, function (params, ident) {
      let tmp262;
      if (params instanceof Stack.Nil.class) {
        return ident
      }
      tmp262 = Tree.Tuple(params);
      return Tree.App(ident, tmp262);
    });
    rcd56 = globalThis.Object.freeze({
      process: Rules.idFirst,
      name: "the type identifier"
    });
    tmp218 = runtime.safeCall(ParseRule.Choice.ident(rcd56));
    tmp219 = Predef.tuple(tmp218);
    rcd57 = globalThis.Object.freeze({
      process: lambda31,
      name: "the type parameters",
      choices: tmp219
    });
    tmp220 = runtime.safeCall(tmp217(rcd57));
    runtime.safeCall(tmp216(tmp220));
    tmp221 = Rules.define("type-params");
    tmp222 = ParseRule.Choice.end(Stack.Nil);
    runtime.safeCall(tmp221(tmp222));
    tmp223 = Rules.define("type-params");
    lambda32 = (undefined, function (h, _) {
      return Stack.Cons(h, Stack.Nil)
    });
    rcd58 = globalThis.Object.freeze({
      process: lambda32,
      name: "the only type parameter"
    });
    tmp224 = runtime.safeCall(ParseRule.Choice.typeVar(rcd58));
    runtime.safeCall(tmp223(tmp224));
    tmp225 = Rules.define("type-params");
    tmp226 = ParseRule.Choice.keyword(Keywords._leftRound);
    tmp227 = ParseRule.Choice.reference("type-params-tail");
    tmp228 = ParseRule.Choice.keyword(Keywords._rightRound);
    tmp229 = runtime.safeCall(tmp228());
    tmp230 = Predef.tuple(tmp229);
    rcd59 = globalThis.Object.freeze({
      process: Rules.idFirst,
      name: "more type parameters",
      choices: tmp230
    });
    tmp231 = runtime.safeCall(tmp227(rcd59));
    tmp232 = Predef.tuple(tmp231);
    rcd60 = globalThis.Object.freeze({
      process: Stack.Cons,
      name: "the first type parameter",
      choices: tmp232
    });
    tmp233 = runtime.safeCall(ParseRule.Choice.typeVar(rcd60));
    tmp234 = runtime.safeCall(tmp226(tmp233));
    runtime.safeCall(tmp225(tmp234));
    tmp235 = Rules.define("type-params-tail");
    tmp236 = ParseRule.Choice.end(Stack.Nil);
    runtime.safeCall(tmp235(tmp236));
    tmp237 = Rules.define("type-params-tail");
    tmp238 = ParseRule.Choice.keyword(Keywords._comma);
    tmp239 = ParseRule.Choice.reference("type-params-tail");
    rcd61 = globalThis.Object.freeze({
      process: Rules.idFirst,
      name: "more type parameters"
    });
    tmp240 = runtime.safeCall(tmp239(rcd61));
    tmp241 = Predef.tuple(tmp240);
    rcd62 = globalThis.Object.freeze({
      process: Stack.Cons,
      name: "the first type parameter",
      choices: tmp241
    });
    tmp242 = runtime.safeCall(ParseRule.Choice.typeVar(rcd62));
    tmp243 = runtime.safeCall(tmp238(tmp242));
    runtime.safeCall(tmp237(tmp243));
    tmp244 = Rules.makeLetBindings(false);
    tmp245 = ParseRule.Choice.keyword(Keywords._type);
    tmp246 = ParseRule.Choice.reference("typedefs");
    lambda33 = (undefined, function (typedefs, _) {
      return Tree.Define(Tree.DefineKind.Type, typedefs)
    });
    rcd63 = globalThis.Object.freeze({
      process: lambda33,
      name: "more typedefs"
    });
    tmp247 = runtime.safeCall(tmp246(rcd63));
    tmp248 = runtime.safeCall(tmp245(tmp247));
    tmp249 = ParseRule.Choice.keyword(Keywords._exception);
    tmp250 = ParseRule.Choice.reference("constr-decls");
    lambda34 = (undefined, function (decls, _) {
      return Tree.Define(Tree.DefineKind.Exception, decls)
    });
    rcd64 = globalThis.Object.freeze({
      process: lambda34,
      name: "constructor declarations"
    });
    tmp251 = runtime.safeCall(tmp250(rcd64));
    tmp252 = runtime.safeCall(tmp249(tmp251));
    tmp253 = ParseRule.Choice.keyword(Keywords._hash);
    lambda35 = (undefined, function (ident, body) {
      let tmp262, tmp263;
      tmp262 = globalThis.Object.freeze([
        ident,
        body
      ]);
      tmp263 = Stack.Cons(tmp262, Stack.Nil);
      return Tree.Define(Tree.DefineKind.Directive, tmp263)
    });
    rcd65 = globalThis.Object.freeze({
      process: Rules.idFirst,
      name: "directive body"
    });
    tmp254 = runtime.safeCall(ParseRule.Choice.term(rcd65));
    tmp255 = Predef.tuple(tmp254);
    rcd66 = globalThis.Object.freeze({
      process: lambda35,
      name: "directive name",
      choices: tmp255
    });
    tmp256 = runtime.safeCall(ParseRule.Choice.ident(rcd66));
    tmp257 = runtime.safeCall(tmp253(tmp256));
    tmp258 = ParseRule.rule("prefix rules for module items", tmp244, tmp248, tmp252, tmp257);
    this.declRule = tmp258;
    tmp259 = MutMap.insert("term", Rules.termRule);
    Predef.pipeInto(Rules.syntaxKinds, tmp259);
    tmp260 = MutMap.insert("type", Rules.typeRule);
    Predef.pipeInto(Rules.syntaxKinds, tmp260);
    tmp261 = MutMap.insert("decl", Rules.declRule);
    Predef.pipeInto(Rules.syntaxKinds, tmp261);
  }
  static getRuleByKind(kind) {
    let tmp, tmp1;
    tmp = MutMap.get(kind);
    tmp1 = Predef.pipeInto(Rules.syntaxKinds, tmp);
    return Predef.pipeInto(tmp1, Option.unsafe.get)
  } 
  static define(name) {
    return (...choices) => {
      let tmp, lambda, tmp1;
      tmp = MutMap.updateWith(name);
      lambda = (undefined, function (caseScrut) {
        let rule, arg$Some$0$, tmp2, tmp3, tmp4;
        if (caseScrut instanceof Option.None.class) {
          tmp2 = ParseRule.rule(name, ...choices);
          return Option.Some(tmp2)
        } else if (caseScrut instanceof Option.Some.class) {
          arg$Some$0$ = caseScrut.value;
          rule = arg$Some$0$;
          tmp3 = Iter.toStack(choices);
          tmp4 = runtime.safeCall(rule.extendChoices(tmp3));
          return Option.Some(tmp4)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      });
      tmp1 = runtime.safeCall(tmp(lambda));
      return Predef.pipeInto(Rules.syntaxKinds, tmp1)
    }
  } 
  static idFirst(value, _) {
    return value
  } 
  static idSecond(_, value) {
    return value
  } 
  static someFirst(value, _) {
    return Option.Some(value)
  } 
  static listFirst(value, _) {
    return Stack.Cons(value, Stack.Nil)
  } 
  static listLike(fields) {
    let mkTail, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, rcd, tmp7, tmp8, tmp9, rcd1;
    scrut = fields["sep"];
    if (scrut === undefined) {
      tmp = Predef.id;
    } else {
      tmp = ParseRule.Choice.keyword(fields["sep"]);
    }
    mkTail = tmp;
    tmp1 = ParseRule.Choice.reference(fields.head);
    tmp2 = "the first " + fields.name;
    tmp3 = ParseRule.Choice.end(Stack.Nil);
    tmp4 = ParseRule.Choice.reference(fields.tail);
    tmp5 = "more " + fields.name;
    tmp6 = tmp5 + "s";
    rcd = globalThis.Object.freeze({
      process: Rules.idFirst,
      name: tmp6
    });
    tmp7 = runtime.safeCall(tmp4(rcd));
    tmp8 = runtime.safeCall(mkTail(tmp7));
    tmp9 = Predef.tuple(tmp3, tmp8);
    rcd1 = globalThis.Object.freeze({
      process: Stack.Cons,
      name: tmp2,
      choices: tmp9
    });
    return runtime.safeCall(tmp1(rcd1))
  } 
  static makeLetBindings(hasInClause) {
    let intro, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, rcd, tmp6, tmp7, tmp8, tmp9, tmp10, rcd1, tmp11, rcd2, tmp12;
    intro = "let binding: ";
    tmp = ParseRule.Choice.keyword(Keywords._let);
    tmp1 = ParseRule.Choice.keyword(Keywords._rec);
    tmp2 = runtime.safeCall(tmp1());
    tmp3 = ParseRule.Choice.reference("let-bindings");
    if (hasInClause === true) {
      tmp4 = ParseRule.Choice.keyword(Keywords._in);
      tmp5 = intro + "body";
      rcd = globalThis.Object.freeze({
        process: Rules.someFirst,
        name: tmp5
      });
      tmp6 = runtime.safeCall(ParseRule.Choice.term(rcd));
      tmp7 = runtime.safeCall(tmp4(tmp6));
      tmp8 = ParseRule.Choice.end(Option.None);
      tmp9 = Predef.tuple(tmp7, tmp8);
    } else {
      tmp10 = ParseRule.Choice.end(Option.None);
      tmp9 = Predef.tuple(tmp10);
    }
    rcd1 = globalThis.Object.freeze({
      process: Tree.LetIn,
      name: "let-bindings",
      choices: tmp9
    });
    tmp11 = runtime.safeCall(tmp3(rcd1));
    rcd2 = globalThis.Object.freeze({
      optional: true,
      init: tmp2,
      rest: tmp11,
      process: Rules.idSecond
    });
    tmp12 = ParseRule.Choice.siding(rcd2);
    return runtime.safeCall(tmp(tmp12))
  } 
  static makeInfixChoice(kw, rhsKind, compose) {
    let tmp, tmp1, lambda, tmp2, tmp3, rcd, tmp4;
    tmp = ParseRule.Choice.keyword(kw);
    tmp1 = ParseRule.Choice.reference(rhsKind);
    lambda = (undefined, function (rhs, _) {
      let lambda1;
      lambda1 = (undefined, function (lhs) {
        return runtime.safeCall(compose(lhs, rhs))
      });
      return lambda1
    });
    tmp2 = "operator `" + kw.name;
    tmp3 = tmp2 + "` right-hand side";
    rcd = globalThis.Object.freeze({
      process: lambda,
      name: tmp3
    });
    tmp4 = runtime.safeCall(tmp1(rcd));
    return runtime.safeCall(tmp(tmp4))
  } 
  static makeBracketRule(fields) {
    let tmp, tmp1, lambda, tmp2, tmp3, tmp4, tmp5, tmp6, rcd, tmp7;
    tmp = ParseRule.Choice.keyword(fields.opening);
    tmp1 = ParseRule.Choice.reference(fields.kind);
    lambda = (undefined, function (tree, next) {
      let msg, arg$Error$0$, arg$Error$1$, tmp8;
      if (next instanceof Tree.Error.class) {
        arg$Error$0$ = next.tree;
        arg$Error$1$ = next.message;
        if (arg$Error$0$ instanceof Tree.Empty.class) {
          msg = arg$Error$1$;
          tmp8 = runtime.safeCall(fields.wrapContent(tree));
          return Tree.Error(tmp8, msg)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      } else if (next instanceof Tree.Empty.class) {
        return runtime.safeCall(fields.wrapContent(tree))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    });
    tmp2 = fields.kind + " in bracket";
    tmp3 = ParseRule.Choice.keyword(fields.closing);
    tmp4 = ParseRule.Choice.end(Tree.empty);
    tmp5 = runtime.safeCall(tmp3(tmp4));
    tmp6 = Predef.tuple(tmp5);
    rcd = globalThis.Object.freeze({
      process: lambda,
      name: tmp2,
      choices: tmp6
    });
    tmp7 = runtime.safeCall(tmp1(rcd));
    return runtime.safeCall(tmp(tmp7))
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Rules"]; 
});
let Rules = Rules1; export default Rules;
