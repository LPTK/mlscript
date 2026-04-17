const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import MutMap from "./../../MutMap.mjs";
import Predef from "./../../Predef.mjs";
let Examples1;
(class Examples {
  static {
    Examples1 = this
  }
  static {
    let rcd, tmp, rcd1, tmp1;
    this.examples = MutMap.empty;
    rcd = globalThis.Object.freeze({
      name: "Hanoi from Caml Light",
      source: "let spaces n = make_string n \" \";;\nlet disk size =\n    let right_half = make_string size \">\"\n    and left_half = make_string size \"<\"\n    in left_half ^ \"|\" ^ right_half;;\nlet disk_number n largest_disk_size =\n    let white_part = spaces (largest_disk_size + 1 - n) in\n    white_part ^ (disk n) ^ white_part;;\nlet peg_base largest_disk_size =\n    let half = make_string largest_disk_size \"_\" in\n    \" \" ^ half ^ \"|\" ^ half ^ \" \";;\nlet rec peg largest_disk_size = function\n  | (0, []) -> []\n  | (0, head::rest) ->\n      disk_number head largest_disk_size ::\n      peg largest_disk_size (0, rest)\n  | (offset, lst) ->\n      disk_number 0 largest_disk_size ::\n      peg largest_disk_size (offset-1, lst);;\nlet rec join_lines l1 l2 l3 =\n  match (l1, l2, l3) with\n  | ([], [], []) -> []\n  | (t1::r1, t2::r2, t3::r3) -> (t1 ^ t2 ^ t3) :: join_lines r1 r2 r3\n  | _ -> failwith \"join_lines\";;\n"
    });
    tmp = MutMap.insert("hanoi", rcd);
    Predef.pipeInto(Examples.examples, tmp);
    rcd1 = globalThis.Object.freeze({
      name: "Extensible Syntax",
      source: "#newKeyword (\"hello\", Some 3, Some 3)\n#newKeyword (\"goodbye\", None, None)\n  \n#newCategory(\"greeting\")\n  \n#extendCategory(\"greeting\", [ keyword(\"hello\"), \"term\", \"greeting\" ], foo)\n#extendCategory(\"greeting\", [ keyword(\"goodbye\") ], bar)\n  \n#extendCategory(\"decl\", [ \"greeting\" ], baz)\n  \n  \nhello \"Rob\" hello \"Bob\" goodbye\n  \n#diagram \"\"\n"
    });
    tmp1 = MutMap.insert("extensible", rcd1);
    Predef.pipeInto(Examples.examples, tmp1);
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Examples"]; 
});
let Examples = Examples1; export default Examples;
