const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./Runtime.mjs";
let ObjectBuffer2;
(class ObjectBuffer {
  static {
    ObjectBuffer2 = this
  }
  static {
    (class ObjectBuffer1 {
      static {
        ObjectBuffer.ObjectBuffer = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ObjectBuffer"]; 
    });
    this.DefaultObjectBuffer = function DefaultObjectBuffer(initLength) {
      return globalThis.Object.freeze(new DefaultObjectBuffer.class(initLength));
    };
    (class DefaultObjectBuffer extends ObjectBuffer.ObjectBuffer {
      static {
        ObjectBuffer.DefaultObjectBuffer.class = this
      }
      constructor(initLength) {
        super();
        let tmp, inlinedVal, scrut;
        this.#initLength = initLength;
        scrut = 16 < this.#initLength;
        if (scrut === true) {
          inlinedVal = this.#initLength;
        } else {
          inlinedVal = 16;
        }
        tmp = new globalThis.Array(inlinedVal);
        this.buf = tmp;
        this.#freeListHead = 0;
        this.buf[0] = this.buf.length;
        this.buf[1] = -1;
      }
      #initLength;
      #freeListHead;
      mkNew(cls) {
        let idx, scrut, tmp, tmp1;
        scrut = cls.size === 0;
        if (scrut === true) {
          return 0
        }
        tmp = this.getBlockSize(cls.size);
        tmp1 = this._alloc(tmp);
        idx = tmp1;
        return runtime.safeCall(cls.ctor(this, idx));
      } 
      del(cls, inst) {
        let scrut, tmp;
        scrut = cls.size !== 0;
        if (scrut === true) {
          tmp = this.getBlockSize(cls.size);
          this._free(inst, tmp);
          return runtime.Unit
        }
        return runtime.Unit;
      } 
      read(idx) {
        return this.buf.at(idx)
      } 
      write(idx, v) {
        this.buf[idx] = v;
        return runtime.Unit
      } 
      getBlockSize(sz) {
        let tmp, tmp1;
        tmp = sz / 2;
        tmp1 = runtime.safeCall(globalThis.Math.ceil(tmp));
        return tmp1 * 2
      } 
      grow(needed) {
        let oldLen, scrut, tmp, tmp1, tmp2, tmp3, tmp4;
        oldLen = this.buf.length;
        scrut = this.buf.length >= needed;
        if (scrut === true) {
          tmp = this.buf.length * 2;
        } else {
          tmp1 = runtime.safeCall(globalThis.Math.log2(needed));
          tmp2 = runtime.safeCall(globalThis.Math.ceil(tmp1));
          tmp3 = tmp2 + 1;
          tmp = runtime.safeCall(globalThis.Math.pow(2, tmp3));
        }
        this.buf.length = tmp;
        tmp4 = tmp - oldLen;
        return this._free(oldLen, tmp4)
      } 
      _tryAlloc(sz) {
        let prev, cur;
        prev = -1;
        cur = this.#freeListHead;
        lbl: while (true) {
          let scrut, scrut1, scrut2, scrut3, scrut4, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
          scrut = cur !== -1;
          if (scrut === true) {
            scrut1 = this.buf.at(cur) === sz;
            if (scrut1 === true) {
              scrut2 = prev === -1;
              if (scrut2 === true) {
                tmp = cur + 1;
                this.#freeListHead = this.buf.at(tmp);
                return cur
              }
              tmp1 = cur + 1;
              this.buf[prev] = this.buf.at(tmp1);
              return cur;
            }
            scrut3 = this.buf.at(cur) > sz;
            if (scrut3 === true) {
              tmp2 = cur + sz;
              tmp3 = this.buf.at(cur) - sz;
              this.buf[tmp2] = tmp3;
              tmp4 = cur + sz;
              tmp5 = tmp4 + 1;
              tmp6 = cur + 1;
              this.buf[tmp5] = this.buf.at(tmp6);
              scrut4 = prev === -1;
              if (scrut4 === true) {
                tmp7 = cur + sz;
                this.#freeListHead = tmp7;
                return cur
              }
              tmp8 = cur + sz;
              this.buf[prev] = tmp8;
              return cur;
            }
            prev = cur;
            tmp9 = cur + 1;
            cur = this.buf.at(tmp9);
            continue lbl;
          }
          break;
        }
        return -1
      } 
      alloc(sz) {
        let scrut, tmp;
        scrut = sz === 0;
        if (scrut === true) {
          return 0
        }
        tmp = this.getBlockSize(sz);
        return this._alloc(tmp);
      } 
      _alloc(bsz) {
        let res, scrut;
        res = this._tryAlloc(bsz);
        scrut = res !== -1;
        if (scrut === true) {
          return res
        }
        this.grow(bsz);
        return this._tryAlloc(bsz);
      } 
      free(ptr, sz) {
        let scrut, tmp;
        scrut = sz !== 0;
        if (scrut === true) {
          tmp = this.getBlockSize(sz);
          this._free(ptr, tmp);
          return runtime.Unit
        }
        return runtime.Unit;
      } 
      _free(ptr, bsz) {
        let tmp;
        this.buf[ptr] = bsz;
        tmp = ptr + 1;
        this.buf[tmp] = this.#freeListHead;
        this.#freeListHead = ptr;
        return runtime.Unit
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "DefaultObjectBuffer", [null]]; 
    });
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "ObjectBuffer"]; 
});
let ObjectBuffer = ObjectBuffer2; export default ObjectBuffer;
