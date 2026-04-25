const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import binaryen from "binaryen";
import Predef from "./../Predef.mjs";
import Runtime from "./../Runtime.mjs";
let Wasm1;
(class Wasm {
  static {
    Wasm1 = this
  }
  static loadWasmBinary(modBuf, importObject) {
    let scrut;
    scrut = globalThis.WebAssembly.validate(modBuf);
    if (scrut === true) {
      return globalThis.WebAssembly.instantiate(modBuf, importObject)
    }
    return runtime.safeCall(runtime.assertFail("mlscript-compile/wasm/Wasm.mls", "10"));
  } 
  static dumpWasmImpExp(wasmMod) {
    let tmp, tmp1;
    tmp = globalThis.WebAssembly.Module.imports(wasmMod.module);
    runtime.safeCall(globalThis.console.log("Imports: %s", tmp));
    tmp1 = globalThis.WebAssembly.Module.exports(wasmMod.module);
    return runtime.safeCall(globalThis.console.log("Exports: %s", tmp1))
  } 
  static binaryenFmtWat(wat, foldExprs) {
    let mod, fmtWat, tmp, tmp1, tmp2;
    tmp = runtime.safeCall(binaryen.parseText(wat));
    mod = tmp;
    runtime.safeCall(mod.setFeatures(binaryen.Features.All));
    tmp1 = runtime.safeCall(mod.validate());
    runtime.safeCall(Predef.js_assert(tmp1));
    if (foldExprs === true) {
      tmp2 = runtime.safeCall(mod.emitText());
    } else {
      tmp2 = runtime.safeCall(mod.emitStackIR());
    }
    fmtWat = tmp2;
    runtime.safeCall(mod.dispose());
    return fmtWat
  } 
  static binaryenCompileToModule(wat, importObject) {
    let mod, modBuf, tmp, tmp1, tmp2, tmp3, lambda;
    tmp = runtime.safeCall(binaryen.parseText(wat));
    mod = tmp;
    runtime.safeCall(mod.setFeatures(binaryen.Features.All));
    tmp1 = runtime.safeCall(mod.validate());
    runtime.safeCall(Predef.js_assert(tmp1));
    tmp2 = runtime.safeCall(mod.emitBinary());
    modBuf = tmp2;
    runtime.safeCall(mod.dispose());
    tmp3 = runtime.safeCall(globalThis.Promise.resolve(modBuf));
    lambda = (undefined, function (modBuf1) {
      return Wasm.loadWasmBinary(modBuf1, importObject)
    });
    return runtime.safeCall(tmp3.then(lambda))
  } 
  static unwrapWasmException(err, tag) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    tmp = err !== null;
    if (tmp === true) {
      tmp1 = err !== undefined;
    } else {
      tmp1 = false;
    }
    if (tmp1 === true) {
      tmp3 = typeof err.is;
      tmp2 = tmp3 === "function";
    } else {
      tmp2 = false;
    }
    if (tmp2 === true) {
      tmp5 = typeof err.getArg;
      tmp4 = tmp5 === "function";
    } else {
      tmp4 = false;
    }
    if (tmp4 === true) {
      tmp6 = runtime.safeCall(err.is(tag));
    } else {
      tmp6 = false;
    }
    if (tmp6 === true) {
      return runtime.safeCall(err.getArg(tag, 0))
    }
    return err;
  } 
  static binaryenRunFunc(wat, importObject, func) {
    let tmp, lambda;
    tmp = Wasm.binaryenCompileToModule(wat, importObject);
    lambda = (undefined, function (wasmMod) {
      let exnTag, lambda1, lambda2;
      exnTag = wasmMod.instance.exports.mlx_exn;
      lambda1 = (undefined, function () {
        return runtime.safeCall(func(wasmMod.instance.exports))
      });
      lambda2 = (undefined, function (err) {
        throw Wasm.unwrapWasmException(err, exnTag)
      });
      return runtime.safeCall(Runtime.try_catch(lambda1, lambda2))
    });
    return runtime.safeCall(tmp.then(lambda))
  } 
  static binaryenPrintFuncRes(wat, importObject, func) {
    let tmp, lambda;
    tmp = Wasm.binaryenRunFunc(wat, importObject, func);
    lambda = (undefined, function (result) {
      let tmp1;
      tmp1 = runtime.safeCall(Runtime.render(result));
      return Predef.print(tmp1)
    });
    return runtime.safeCall(tmp.then(lambda))
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Wasm"]; 
});
let Wasm = Wasm1; export default Wasm;
