const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./Runtime.mjs";
import RuntimeJS from "./RuntimeJS.mjs";
let Rendering1;
(class Rendering {
  static {
    Rendering1 = this
  }
  static #definitionMetadataSymbol;
  static #prettyPrintSymbol;
  static #identifierPattern;
  static #noNeedForQuotes;
  static #emptyOptions;
  static #DEFAULT_BREAK_LENGTH;
  static #symbolsForArray;
  static #symbolsForSet;
  static #symbolsForClass;
  static #symbolsForObject;
  static #symbolsForMap;
  static {
    let lambda, lambda1, lambda2, noNeedForQuotes;
    Rendering.#definitionMetadataSymbol = RuntimeJS.symbols.definitionMetadata;
    Rendering.#prettyPrintSymbol = RuntimeJS.symbols.prettyPrint;
    Rendering.#identifierPattern = globalThis.Object.freeze(new globalThis.RegExp("^[\\p{ID_Start}_$][\\p{ID_Continue}$]*$", "u"));
    noNeedForQuotes = function noNeedForQuotes(id) {
      return runtime.safeCall(Rendering.#identifierPattern.test(id))
    };
    Rendering.#noNeedForQuotes = noNeedForQuotes;
    Rendering.#emptyOptions = globalThis.Object.freeze(new globalThis.Object());
    Rendering.#DEFAULT_BREAK_LENGTH = 80;
    Rendering.#symbolsForArray = globalThis.Object.freeze({
      start: "[",
      end: "]",
      separator: ",",
      empty: "[]",
      padding: true
    });
    lambda = (undefined, function (n) {
      let headline, start, empty, tmp;
      tmp = "Set(" + n;
      headline = tmp + ") ";
      start = headline + "{";
      empty = headline + "{}";
      return globalThis.Object.freeze({
        start: start,
        end: "}",
        separator: ",",
        empty: empty,
        padding: true
      })
    });
    Rendering.#symbolsForSet = lambda;
    lambda1 = (undefined, function (name) {
      let start, empty;
      start = name + "(";
      empty = name + "()";
      return globalThis.Object.freeze({
        start: start,
        end: ")",
        separator: ",",
        empty: empty,
        padding: false
      })
    });
    Rendering.#symbolsForClass = lambda1;
    Rendering.#symbolsForObject = globalThis.Object.freeze({
      start: "{",
      end: "}",
      entrySeparator: ",",
      keyValueSeparator: ": ",
      empty: "{}",
      padding: true
    });
    lambda2 = (undefined, function (n) {
      let headline, start, empty, tmp;
      tmp = "Map(" + n;
      headline = tmp + ")";
      start = headline + " {";
      empty = headline + " {}";
      return globalThis.Object.freeze({
        start: start,
        end: "}",
        entrySeparator: ",",
        keyValueSeparator: " => ",
        empty: empty,
        padding: true
      })
    });
    Rendering.#symbolsForMap = lambda2;
  }
  static pass1(f) {
    return (...xs) => {
      return runtime.safeCall(f(xs[0]))
    }
  } 
  static pass2(f) {
    return (...xs) => {
      return runtime.safeCall(f(xs[0], xs[1]))
    }
  } 
  static pass3(f) {
    return (...xs) => {
      return runtime.safeCall(f(xs[0], xs[1], xs[2]))
    }
  } 
  static passing(f, ...args) {
    return f.bind(null, ...args)
  } 
  static map(f) {
    return (...xs) => {
      let tmp;
      tmp = Rendering.pass1(f);
      return runtime.safeCall(xs.map(tmp))
    }
  } 
  static fold(f) {
    return (init, ...rest) => {
      let i, len;
      i = 0;
      len = rest.length;
      lbl: while (true) {
        let scrut, tmp, tmp1, tmp2;
        scrut = i < len;
        if (scrut === true) {
          tmp = runtime.safeCall(rest.at(i));
          tmp1 = runtime.safeCall(f(init, tmp));
          init = tmp1;
          tmp2 = i + 1;
          i = tmp2;
          continue lbl
        }
        break;
      }
      return init
    }
  } 
  static interleave(sep) {
    return (...args) => {
      let scrut, res, len, i, tmp, tmp1;
      scrut = args.length === 0;
      if (scrut === true) {
        return globalThis.Object.freeze([])
      }
      tmp = args.length * 2;
      tmp1 = tmp - 1;
      res = runtime.safeCall(globalThis.Array(tmp1));
      len = args.length;
      i = 0;
      lbl: while (true) {
        let scrut1, idx, scrut2, tmp2, tmp3;
        scrut1 = i < len;
        if (scrut1 === true) {
          idx = i * 2;
          res[idx] = args.at(i);
          tmp2 = i + 1;
          i = tmp2;
          scrut2 = tmp2 < len;
          if (scrut2 === true) {
            tmp3 = idx + 1;
            res[tmp3] = sep;
            continue lbl
          }
          continue lbl;
        }
        break;
      }
      return res;
    }
  } 
  static render(target, ...args) {
    let indentText, renderRecordLike, renderObject, renderValue, renderSequence, indent, scrut, breakLength, scrut1, padding, circularCounter, visitingObjects, visitedObjects, element0$, tmp, field_indent$, tmp1, field_breakLength$, tmp2, field_padding$, tmp3;
    indentText = function indentText(text, currentLevel) {
      let indents, tmp4, tmp5, lambda, tmp6;
      if (indent === null) {
        return text
      }
      tmp4 = currentLevel + 1;
      indents = runtime.safeCall(indent.repeat(tmp4));
      tmp5 = runtime.safeCall(text.split("\n"));
      lambda = (undefined, function (line, index, lines) {
        let scrut2, scrut3, tmp7, tmp8, tmp9, tmp10;
        tmp7 = index + 1;
        scrut2 = tmp7 === lines.length;
        if (scrut2 === true) {
          tmp8 = "";
        } else {
          tmp8 = " \\";
        }
        scrut3 = index === 0;
        if (scrut3 === true) {
          tmp9 = "";
        } else {
          tmp9 = indents;
        }
        tmp10 = tmp9 + line;
        return tmp10 + tmp8
      });
      tmp6 = runtime.safeCall(tmp5.map(lambda));
      return runtime.safeCall(tmp6.join("\n"));
    };
    renderSequence = function renderSequence(done, next, level, keyLength, startPos, symbols) {
      let items, hasMultiline, singleLineLength, scrut2, parentIndent, itemIdent, scrut3, scrut4, scrut5, scrut6, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, lambda, lambda1, tmp12, tmp13, tmp14;
      items = [];
      hasMultiline = false;
      tmp4 = startPos + symbols.start.length;
      scrut2 = symbols.padding;
      if (scrut2 === true) {
        tmp5 = padding.length;
      } else {
        tmp5 = 0;
      }
      singleLineLength = tmp4 + tmp5;
      if (indent === null) {
        tmp6 = null;
      } else {
        tmp6 = runtime.safeCall(indent.repeat(level));
      }
      parentIndent = tmp6;
      if (indent === null) {
        tmp7 = null;
      } else {
        tmp8 = level + 1;
        tmp7 = runtime.safeCall(indent.repeat(tmp8));
      }
      itemIdent = tmp7;
      lbl: while (true) {
        let scrut7, item, scrut8, scrut9, scrut10, tmp15, tmp16, tmp17, tmp18, tmp19;
        scrut7 = runtime.safeCall(done());
        if (scrut7 === false) {
          scrut8 = items.length;
          if (scrut8 === 0) {
            tmp15 = true;
          } else {
            tmp15 = false;
          }
          item = runtime.safeCall(next(tmp15, singleLineLength));
          tmp16 = runtime.safeCall(item.indexOf("\n"));
          scrut9 = tmp16 >= 0;
          if (scrut9 === true) {
            hasMultiline = true;
          }
          scrut10 = items.length;
          if (scrut10 === 0) {
            tmp17 = 0;
          } else {
            tmp17 = symbols.separator.length + 1;
          }
          tmp18 = singleLineLength + tmp17;
          singleLineLength = tmp18;
          tmp19 = tmp18 + item.length;
          singleLineLength = tmp19;
          runtime.safeCall(items.push(item));
          continue lbl
        }
        break;
      }
      scrut3 = symbols.padding;
      if (scrut3 === true) {
        tmp9 = padding.length;
      } else {
        tmp9 = 0;
      }
      tmp10 = symbols.end.length + tmp9;
      tmp11 = singleLineLength + tmp10;
      singleLineLength = tmp11;
      lambda = (undefined, function () {
        let tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22;
        tmp15 = symbols.start + "\n";
        tmp16 = tmp15 + itemIdent;
        tmp17 = symbols.separator + "\n";
        tmp18 = tmp17 + itemIdent;
        tmp19 = runtime.safeCall(items.join(tmp18));
        tmp20 = tmp16 + tmp19;
        tmp21 = tmp20 + "\n";
        tmp22 = tmp21 + parentIndent;
        return tmp22 + symbols.end
      });
      lambda1 = (undefined, function () {
        let scrut7, scrut8, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
        scrut7 = symbols.padding;
        if (scrut7 === true) {
          tmp15 = padding;
        } else {
          tmp15 = "";
        }
        tmp16 = symbols.start + tmp15;
        tmp17 = symbols.separator + " ";
        tmp18 = runtime.safeCall(items.join(tmp17));
        tmp19 = tmp16 + tmp18;
        scrut8 = symbols.padding;
        if (scrut8 === true) {
          tmp20 = padding;
        } else {
          tmp20 = "";
        }
        tmp21 = tmp19 + tmp20;
        return tmp21 + symbols.end
      });
      scrut4 = items.length;
      if (scrut4 === 0) {
        return symbols.empty
      }
      if (indent === null) {
        return runtime.safeCall(lambda1())
      }
      if (hasMultiline === true) {
        return runtime.safeCall(lambda())
      }
      scrut5 = tmp11 <= breakLength;
      if (scrut5 === true) {
        return runtime.safeCall(lambda1())
      }
      tmp12 = tmp11 - startPos;
      tmp13 = tmp12 + keyLength;
      tmp14 = parentIndent.length + tmp13;
      scrut6 = tmp14 <= breakLength;
      if (scrut6 === true) {
        return runtime.safeCall(lambda1())
      }
      return runtime.safeCall(lambda());
    };
    renderObject = function renderObject(subject, level, keyLength, startPos, isRefinement) {
      let entries, length, i, itemIndentationLength, skipNonEnumerable, tmp4, tmp5, tmp6, lambda, lambda1, done;
      tmp4 = globalThis.Object.getOwnPropertyDescriptors(subject);
      entries = globalThis.Object.entries(tmp4);
      length = entries.length;
      i = 0;
      if (indent === null) {
        tmp5 = 0;
      } else {
        tmp6 = level + 1;
        tmp5 = tmp6 * indent.length;
      }
      itemIndentationLength = tmp5;
      lambda = (undefined, function () {
        lbl: while (true) {
          let scrut2, scrut3, tmp7;
          scrut2 = i < length;
          if (scrut2 === true) {
            scrut3 = entries.at(i)[1].enumerable;
            if (scrut3 === false) {
              tmp7 = i + 1;
              i = tmp7;
              continue lbl
            }
          }
          break;
        }
        return runtime.Unit
      });
      skipNonEnumerable = lambda;
      done = function done() {
        return i >= length
      };
      lambda1 = (undefined, function (isFirst, prefixLength) {
        let key, desc, scrut2, dryRunStartPos, scrut3, valueStr, tmp7, tmp8, field_set$, field_get$, field_value$, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14;
        key = entries.at(i)[0];
        desc = entries.at(i)[1];
        runtime.safeCall(skipNonEnumerable());
        tmp7 = i + 1;
        i = tmp7;
        scrut2 = runtime.safeCall(Rendering.#noNeedForQuotes(key));
        if (scrut2 === true) {
          tmp8 = key;
        } else {
          tmp8 = renderValue(key, 0, 0, 0);
        }
        if (desc instanceof Object) {
          if ("value" in desc) {
            field_value$ = desc.value;
            if (isFirst === true) {
              tmp9 = 0;
            } else {
              tmp9 = 2;
            }
            tmp10 = tmp9 + tmp8.length;
            tmp11 = tmp10 + 2;
            dryRunStartPos = prefixLength + tmp11;
            scrut3 = dryRunStartPos > breakLength;
            if (scrut3 === true) {
              tmp12 = itemIndentationLength;
            } else {
              tmp12 = dryRunStartPos;
            }
            tmp13 = level + 1;
            tmp14 = tmp8.length + 2;
            valueStr = renderValue(field_value$, tmp13, tmp14, tmp12);
            return globalThis.Object.freeze([
              tmp8,
              valueStr
            ])
          } else if (desc instanceof Object) {
            if ("get" in desc) {
              field_get$ = desc.get;
              if ("set" in desc) {
                field_set$ = desc.set;
                if (field_set$ === undefined) {
                  return globalThis.Object.freeze([
                    tmp8,
                    "[Getter]"
                  ])
                }
                if (field_get$ === undefined) {
                  return globalThis.Object.freeze([
                    tmp8,
                    "[Setter]"
                  ])
                }
                return globalThis.Object.freeze([
                  tmp8,
                  "[Getter/Setter]"
                ]);
              }
              return globalThis.Object.freeze([
                tmp8,
                "\u2039Non-data property\u203A"
              ]);
            }
            return globalThis.Object.freeze([
              tmp8,
              "\u2039Non-data property\u203A"
            ]);
          }
          return globalThis.Object.freeze([
            tmp8,
            "\u2039Non-data property\u203A"
          ]);
        } else if (desc instanceof Object) {
          if ("get" in desc) {
            field_get$ = desc.get;
            if ("set" in desc) {
              field_set$ = desc.set;
              if (field_set$ === undefined) {
                return globalThis.Object.freeze([
                  tmp8,
                  "[Getter]"
                ])
              }
              if (field_get$ === undefined) {
                return globalThis.Object.freeze([
                  tmp8,
                  "[Setter]"
                ])
              }
              return globalThis.Object.freeze([
                tmp8,
                "[Getter/Setter]"
              ]);
            }
            return globalThis.Object.freeze([
              tmp8,
              "\u2039Non-data property\u203A"
            ]);
          }
          return globalThis.Object.freeze([
            tmp8,
            "\u2039Non-data property\u203A"
          ]);
        }
        return globalThis.Object.freeze([
          tmp8,
          "\u2039Non-data property\u203A"
        ]);
      });
      runtime.safeCall(skipNonEnumerable());
      return renderRecordLike(done, lambda1, level, keyLength, startPos, Rendering.#symbolsForObject, isRefinement)
    };
    renderRecordLike = function renderRecordLike(done, next, level, keyLength, startPos, symbols, isRefinement) {
      let startPadding, scrut2, endPadding, scrut3, items, hasMultiline, singleLineLength, parentIndent, itemIdent, scrut4, scrut5, lengthIfBreakParent, scrut6, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, lambda, tmp12, tmp13, layoutSingleLine;
      if (isRefinement === true) {
        tmp4 = " ";
      } else {
        scrut2 = symbols.padding;
        if (scrut2 === true) {
          tmp4 = padding;
        } else {
          tmp4 = "";
        }
      }
      startPadding = tmp4;
      if (isRefinement === true) {
        tmp5 = " ";
      } else {
        scrut3 = symbols.padding;
        if (scrut3 === true) {
          tmp5 = padding;
        } else {
          tmp5 = "";
        }
      }
      endPadding = tmp5;
      items = [];
      hasMultiline = false;
      tmp6 = startPos + symbols.start.length;
      singleLineLength = tmp6 + startPadding.length;
      if (indent === null) {
        tmp7 = null;
      } else {
        tmp7 = runtime.safeCall(indent.repeat(level));
      }
      parentIndent = tmp7;
      if (indent === null) {
        tmp8 = null;
      } else {
        tmp9 = level + 1;
        tmp8 = runtime.safeCall(indent.repeat(tmp9));
      }
      itemIdent = tmp8;
      lbl: while (true) {
        let scrut7, keyValue, scrut8, key, value, length, scrut9, scrut10, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
        scrut7 = runtime.safeCall(done());
        if (scrut7 === false) {
          scrut8 = items.length;
          if (scrut8 === 0) {
            tmp14 = true;
          } else {
            tmp14 = false;
          }
          keyValue = runtime.safeCall(next(tmp14, singleLineLength));
          key = keyValue[0];
          value = keyValue[1];
          tmp15 = key.length + 2;
          length = tmp15 + value.length;
          tmp16 = runtime.safeCall(value.indexOf("\n"));
          scrut9 = tmp16 >= 0;
          if (scrut9 === true) {
            hasMultiline = true;
          }
          scrut10 = items.length;
          if (scrut10 === 0) {
            tmp17 = 0;
          } else {
            tmp17 = symbols.entrySeparator.length;
          }
          tmp18 = singleLineLength + tmp17;
          singleLineLength = tmp18;
          tmp19 = tmp18 + length;
          singleLineLength = tmp19;
          tmp20 = key + symbols.keyValueSeparator;
          tmp21 = tmp20 + value;
          runtime.safeCall(items.push(tmp21));
          continue lbl
        }
        break;
      }
      tmp10 = symbols.end.length + endPadding.length;
      tmp11 = singleLineLength + tmp10;
      singleLineLength = tmp11;
      lambda = (undefined, function () {
        let tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20;
        tmp14 = symbols.start + "\n";
        tmp15 = tmp14 + itemIdent;
        tmp16 = ",\n" + itemIdent;
        tmp17 = runtime.safeCall(items.join(tmp16));
        tmp18 = tmp15 + tmp17;
        tmp19 = tmp18 + "\n";
        tmp20 = tmp19 + parentIndent;
        return tmp20 + symbols.end
      });
      layoutSingleLine = function layoutSingleLine() {
        let tmp14, tmp15, tmp16, tmp17;
        tmp14 = symbols.start + startPadding;
        tmp15 = runtime.safeCall(items.join(", "));
        tmp16 = tmp14 + tmp15;
        tmp17 = tmp16 + endPadding;
        return tmp17 + symbols.end
      };
      scrut4 = items.length;
      if (scrut4 === 0) {
        return symbols.empty
      }
      if (indent === null) {
        return runtime.safeCall(layoutSingleLine())
      }
      if (hasMultiline === true) {
        return runtime.safeCall(lambda())
      }
      scrut5 = tmp11 <= breakLength;
      if (scrut5 === true) {
        return runtime.safeCall(layoutSingleLine())
      }
      tmp12 = tmp11 - startPos;
      tmp13 = tmp12 + keyLength;
      lengthIfBreakParent = parentIndent.length + tmp13;
      scrut6 = lengthIfBreakParent <= breakLength;
      if (scrut6 === true) {
        return runtime.safeCall(layoutSingleLine())
      }
      return runtime.safeCall(lambda());
    };
    renderValue = function renderValue(arg, level, keyLength, startPos) {
      let scrut2, scrut3, scrut4, scrut5, scrut6, index, desc, scrut7, scrut8, scrut9, scrut10, scrut11, properties, scrut12, scrut13, scrut14, scrut15, scrut16, definitionMetadata1, body, head, scrut17, scrut18, scrut19, result, scrut20, tmp4, tmp5, element1$, element0$1, element2$, tmp6, tmp7, element1$1, element0$2, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22;
      split_1$: {
        if (arg === undefined) {
          return "undefined"
        } else if (arg === null) {
          return "null"
        } else if (typeof arg === 'string') {
          return globalThis.JSON.stringify(arg)
        } else if (typeof arg === 'bigint') {
          tmp4 = runtime.safeCall(arg.toString());
          return tmp4 + "n"
        } else if (typeof arg === 'symbol') {
          scrut2 = arg.description;
          if (scrut2 === undefined) {
            return "Symbol()"
          }
          tmp5 = "Symbol(\"" + arg.description;
          return tmp5 + "\")";
        } else if (typeof arg === 'number') {
          return runtime.safeCall(arg.toString())
        } else if (arg instanceof globalThis.RegExp) {
          return runtime.safeCall(arg.toString())
        } else if (arg === true) {
          return "true"
        } else if (arg === false) {
          return "false"
        }
        scrut3 = arg === runtime.Unit;
        if (scrut3 === true) {
          return "()"
        }
        scrut4 = runtime.safeCall(visitedObjects.has(arg));
        if (scrut4 === true) {
          if (indent === null) {
            return runtime.safeCall(visitedObjects.get(arg))
          }
          scrut5 = runtime.safeCall(visitingObjects.has(arg));
          if (scrut5 === true) {
            scrut6 = runtime.safeCall(visitingObjects.get(arg));
            if (globalThis.Number.isInteger(scrut6)) {
              return "ref'" + scrut6
            }
            break split_1$;
          }
        } else {
          scrut5 = runtime.safeCall(visitingObjects.has(arg));
          if (scrut5 === true) {
            scrut6 = runtime.safeCall(visitingObjects.get(arg));
            if (globalThis.Number.isInteger(scrut6)) {
              return "ref'" + scrut6
            }
            break split_1$;
          }
        }
        visitingObjects.set(arg, null);
        split_root$: {
          if (arg instanceof globalThis.Array) {
            let array, level1, inlinedVal, i, length, emptyItemCount, itemIndentationLength, tmp23, tmp24, lambda, lambda1;
            array = arg;
            level1 = level;
            i = 0;
            length = array.length;
            emptyItemCount = 0;
            if (indent === null) {
              tmp23 = 0;
            } else {
              tmp24 = level1 + 1;
              tmp23 = tmp24 * indent.length;
            }
            itemIndentationLength = tmp23;
            lambda = (undefined, function () {
              let isDone, tmp25;
              isDone = null;
              lbl: while (true) {
                let scrut21, scrut22, tmp26, tmp27;
                if (isDone === null) {
                  scrut21 = i >= length;
                  if (scrut21 === true) {
                    isDone = true;
                    continue lbl
                  }
                  scrut22 = globalThis.Reflect.has(array, i);
                  if (scrut22 === true) {
                    isDone = false;
                    continue lbl
                  }
                  tmp26 = emptyItemCount + 1;
                  emptyItemCount = tmp26;
                  tmp27 = i + 1;
                  i = tmp27;
                  continue lbl;
                }
                break;
              }
              tmp25 = emptyItemCount === 0;
              if (tmp25 === true) {
                if (isDone === null) {
                  return true
                }
                return isDone;
              }
              return false;
            });
            lambda1 = (undefined, function (isFirst, prefixLength) {
              let scrut21, emptyItemCount$_, scrut22, prefixLengthIfSameLine, scrut23, valueStr, tmp25, tmp26, tmp27, tmp28, tmp29;
              scrut21 = emptyItemCount > 0;
              if (scrut21 === true) {
                emptyItemCount$_ = emptyItemCount;
                emptyItemCount = 0;
                tmp25 = "<" + emptyItemCount$_;
                return tmp25 + " empty items>"
              }
              scrut22 = i < length;
              if (scrut22 === true) {
                if (isFirst === true) {
                  tmp26 = 0;
                } else {
                  tmp26 = 2;
                }
                prefixLengthIfSameLine = prefixLength + tmp26;
                scrut23 = prefixLengthIfSameLine <= breakLength;
                if (scrut23 === true) {
                  tmp27 = prefixLengthIfSameLine;
                } else {
                  tmp27 = itemIndentationLength;
                }
                tmp28 = level1 + 1;
                valueStr = renderValue(array.at(i), tmp28, 0, tmp27);
                tmp29 = i + 1;
                i = tmp29;
                return valueStr
              }
              throw globalThis.Object.freeze(new globalThis.Error("All items in this array has been rendered."));
            });
            inlinedVal = renderSequence(lambda, lambda1, level1, keyLength, startPos, Rendering.#symbolsForArray);
            tmp6 = inlinedVal;
          } else if (arg instanceof globalThis.Set) {
            let level1, inlinedVal, iterator, peek, itemIndentationLength, tmp23, tmp24, lambda, tmp25, done;
            level1 = level;
            iterator = runtime.safeCall(arg[globalThis.Symbol.iterator]());
            peek = runtime.safeCall(iterator.next());
            if (indent === null) {
              tmp23 = 0;
            } else {
              tmp24 = level1 + 1;
              tmp23 = tmp24 * indent.length;
            }
            itemIndentationLength = tmp23;
            done = function done() {
              return peek.done
            };
            lambda = (undefined, function (isFirst, prefixLength) {
              let prefixLengthIfSameLine, scrut21, field_value$, field_done$, tmp26, tmp27, tmp28, tmp29, tmp30;
              if (peek instanceof Object) {
                if ("done" in peek) {
                  field_done$ = peek.done;
                  if ("value" in peek) {
                    field_value$ = peek.value;
                    if (field_done$ === false) {
                      if (isFirst === true) {
                        tmp26 = 0;
                      } else {
                        tmp26 = 2;
                      }
                      prefixLengthIfSameLine = prefixLength + tmp26;
                      scrut21 = prefixLengthIfSameLine > breakLength;
                      if (scrut21 === true) {
                        tmp27 = itemIndentationLength;
                      } else {
                        tmp27 = prefixLengthIfSameLine;
                      }
                      tmp28 = level1 + 1;
                      tmp29 = renderValue(field_value$, tmp28, 0, tmp27);
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    tmp30 = runtime.safeCall(iterator.next());
                    peek = tmp30;
                    return tmp29
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            });
            tmp25 = runtime.safeCall(Rendering.#symbolsForSet(arg.size));
            inlinedVal = renderSequence(done, lambda, level1, keyLength, startPos, tmp25);
            tmp6 = inlinedVal;
          } else if (arg instanceof globalThis.Map) {
            let level1, inlinedVal, iterator, peek, itemIndentationLength, tmp23, tmp24, lambda, tmp25, done;
            level1 = level;
            iterator = runtime.safeCall(arg[globalThis.Symbol.iterator]());
            peek = runtime.safeCall(iterator.next());
            if (indent === null) {
              tmp23 = 0;
            } else {
              tmp24 = level1 + 1;
              tmp23 = tmp24 * indent.length;
            }
            itemIndentationLength = tmp23;
            done = function done() {
              return peek.done
            };
            lambda = (undefined, function (isFirst, prefixLength) {
              let last, keyPrefixLengthIfSameLine, scrut21, keyStr, scrut22, valueStr, tmp26, field_value$, field_done$, element1$2, element0$3, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36;
              last = peek;
              tmp26 = runtime.safeCall(iterator.next());
              peek = tmp26;
              if (last instanceof Object) {
                if ("done" in last) {
                  field_done$ = last.done;
                  if ("value" in last) {
                    field_value$ = last.value;
                    if (field_done$ === false) {
                      if (runtime.Tuple.isArrayLike(field_value$) && field_value$.length === 2) {
                        element0$3 = runtime.Tuple.get(field_value$, 0);
                        element1$2 = runtime.Tuple.get(field_value$, 1);
                        if (isFirst === true) {
                          tmp27 = 0;
                        } else {
                          tmp27 = 2;
                        }
                        keyPrefixLengthIfSameLine = prefixLength + tmp27;
                        scrut21 = keyPrefixLengthIfSameLine > breakLength;
                        if (scrut21 === true) {
                          tmp28 = itemIndentationLength;
                        } else {
                          tmp28 = keyPrefixLengthIfSameLine;
                        }
                        tmp29 = level1 + 1;
                        keyStr = renderValue(element0$3, tmp29, 0, tmp28);
                        tmp30 = runtime.safeCall(keyStr.indexOf("\n"));
                        scrut22 = tmp30 >= 0;
                        if (scrut22 === true) {
                          tmp31 = itemIndentationLength + keyStr.length;
                          tmp32 = runtime.safeCall(keyStr.lastIndexOf("\n"));
                          tmp33 = tmp31 - tmp32;
                          tmp34 = tmp33 + 5;
                        } else {
                          tmp35 = tmp28 + keyStr.length;
                          tmp34 = tmp35 + 5;
                        }
                        tmp36 = level1 + 1;
                        valueStr = renderValue(element1$2, tmp36, 0, tmp34);
                        return globalThis.Object.freeze([
                          keyStr,
                          valueStr
                        ])
                      }
                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            });
            tmp25 = runtime.safeCall(Rendering.#symbolsForMap(arg.size));
            inlinedVal = renderRecordLike(done, lambda, level1, keyLength, startPos, tmp25, false);
            tmp6 = inlinedVal;
          } else if (arg instanceof globalThis.WeakSet) {
            tmp6 = "WeakSet { <items unknown> }";
          } else if (arg instanceof globalThis.WeakMap) {
            tmp6 = "WeakMap { <items unknown> }";
          } else if (arg instanceof globalThis.Error) {
            tmp7 = arg.name + ": ";
            tmp6 = tmp7 + arg.message;
          } else if (arg instanceof globalThis.Function) {
            desc = globalThis.Object.getOwnPropertyDescriptor(arg, "prototype");
            split_root$1: {
              if (desc instanceof globalThis.Object) {
                scrut10 = desc.writable;
                if (scrut10 === false) {
                  scrut7 = runtime.safeCall(desc.value.constructor.hasOwnProperty(Rendering.#definitionMetadataSymbol));
                  if (scrut7 === true) {
                    scrut8 = desc.value.constructor[Rendering.#definitionMetadataSymbol];
                    if (runtime.Tuple.isArrayLike(scrut8) && scrut8.length >= 2) {
                      element0$2 = runtime.Tuple.get(scrut8, 0);
                      element1$1 = runtime.Tuple.get(scrut8, 1);
                      runtime.Tuple.slice(scrut8, 2, 0);
                      tmp8 = element0$2 + " ";
                      tmp9 = tmp8 + element1$1;
                      break split_root$1
                    }
                    scrut9 = arg.name;
                    if (scrut9 === "") {
                      tmp9 = "class";
                      break split_root$1
                    }
                    tmp9 = "class " + arg.name;
                    break split_root$1;
                  }
                  scrut9 = arg.name;
                  if (scrut9 === "") {
                    tmp9 = "class";
                    break split_root$1
                  }
                  tmp9 = "class " + arg.name;
                  break split_root$1;
                }
              }
              scrut11 = arg.name;
              if (scrut11 === "") {
                tmp10 = "";
              } else {
                tmp10 = " " + arg.name;
              }
              tmp9 = "fun" + tmp10;
            }
            tmp11 = startPos + tmp9.length;
            properties = renderObject(arg, level, keyLength, tmp11, true);
            if (properties === "{}") {
              tmp12 = "";
            } else {
              tmp12 = " " + properties;
            }
            tmp6 = tmp9 + tmp12;
          } else {
            scrut12 = globalThis.Reflect.getPrototypeOf(arg);
            if (scrut12 !== null) {
              scrut13 = scrut12 === globalThis.Object.prototype;
              if (scrut13 !== true) {
                scrut14 = scrut12.constructor;
                if (scrut14 instanceof globalThis.Function) {
                  scrut15 = runtime.safeCall(scrut12.hasOwnProperty(Rendering.#prettyPrintSymbol));
                  if (scrut15 === true) {
                    tmp13 = runtime.safeCall(arg[Rendering.#prettyPrintSymbol]());
                    tmp6 = indentText(tmp13, level);
                    break split_root$
                  }
                  scrut16 = runtime.safeCall(scrut12.constructor.hasOwnProperty(Rendering.#definitionMetadataSymbol));
                  if (scrut16 === true) {
                    definitionMetadata1 = scrut12.constructor[Rendering.#definitionMetadataSymbol];
                    if (runtime.Tuple.isArrayLike(definitionMetadata1) && definitionMetadata1.length === 3) {
                      let fieldNames, instance, level1, inlinedVal, length, i, itemIndentationLength, tmp23, tmp24, lambda, tmp25, done;
                      element0$1 = runtime.Tuple.get(definitionMetadata1, 0);
                      element1$ = runtime.Tuple.get(definitionMetadata1, 1);
                      element2$ = runtime.Tuple.get(definitionMetadata1, 2);
                      fieldNames = element2$;
                      instance = arg;
                      level1 = level;
                      length = fieldNames.length;
                      i = 0;
                      if (indent === null) {
                        tmp23 = 0;
                      } else {
                        tmp24 = level1 + 1;
                        tmp23 = tmp24 * indent.length;
                      }
                      itemIndentationLength = tmp23;
                      done = function done() {
                        return i >= length
                      };
                      lambda = (undefined, function (isFirst, prefixLength) {
                        let scrut21, value, prefixLengthIfSameLine, scrut22, tmp26, tmp27, tmp28, tmp29;
                        scrut21 = fieldNames.at(i);
                        tmp26 = i + 1;
                        i = tmp26;
                        if (scrut21 === null) {
                          return "_"
                        } else if (typeof scrut21 === 'string') {
                          value = instance[scrut21];
                          if (isFirst === true) {
                            tmp27 = 0;
                          } else {
                            tmp27 = 2;
                          }
                          prefixLengthIfSameLine = prefixLength + tmp27;
                          scrut22 = prefixLengthIfSameLine > breakLength;
                          if (scrut22 === true) {
                            tmp28 = itemIndentationLength;
                          } else {
                            tmp28 = prefixLengthIfSameLine;
                          }
                          tmp29 = level1 + 1;
                          return renderValue(value, tmp29, 0, tmp28)
                        }
                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                      });
                      tmp25 = runtime.safeCall(Rendering.#symbolsForClass(element1$));
                      inlinedVal = renderSequence(done, lambda, level1, keyLength, startPos, tmp25);
                      tmp6 = inlinedVal;
                      break split_root$
                    } else if (runtime.Tuple.isArrayLike(definitionMetadata1) && definitionMetadata1.length === 2) {
                      element0$1 = runtime.Tuple.get(definitionMetadata1, 0);
                      element1$ = runtime.Tuple.get(definitionMetadata1, 1);
                      switch (element0$1) {
                        case "class":
                          tmp14 = element1$;
                          break;
                        case "object":
                          tmp14 = element1$;
                          break;
                        default:
                          tmp15 = element0$1 + " ";
                          tmp14 = tmp15 + element1$;
                      }
                      tmp16 = startPos + tmp14.length;
                      body = renderObject(arg, level, keyLength, tmp16, true);
                      if (body === "{}") {
                        tmp17 = "";
                      } else {
                        tmp17 = " " + body;
                      }
                      tmp6 = tmp14 + tmp17;
                      break split_root$
                    }
                    head = scrut12.constructor.name + " ";
                  } else {
                    head = scrut12.constructor.name + " ";
                  }
                  tmp19 = startPos + head.length;
                  tmp20 = renderObject(arg, level, keyLength, tmp19, true);
                  tmp6 = head + tmp20;
                  break split_root$;
                }
                scrut17 = runtime.safeCall(scrut12.hasOwnProperty("toString"));
                if (scrut17 === true) {
                  tmp18 = runtime.safeCall(arg.toString());
                  tmp6 = indentText(tmp18, level);
                  break split_root$
                }
              }
            }
            tmp6 = renderObject(arg, level, keyLength, startPos, false);
          }
        }
        scrut18 = runtime.safeCall(visitingObjects.has(arg));
        if (scrut18 === true) {
          scrut19 = runtime.safeCall(visitingObjects.get(arg));
          if (globalThis.Number.isInteger(scrut19)) {
            tmp21 = " as ref'" + scrut19;
          } else {
            tmp21 = "";
          }
          result = tmp6 + tmp21;
          scrut20 = tmp21.length > 0;
          if (scrut20 === true) {
            visitedObjects.set(arg, result);
          }
          runtime.safeCall(visitingObjects.delete(arg));
          return result
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      index = circularCounter;
      tmp22 = circularCounter + 1;
      circularCounter = tmp22;
      visitingObjects.set(arg, index);
      return "ref'" + index
    };
    if (runtime.Tuple.isArrayLike(args) && args.length >= 1) {
      element0$ = runtime.Tuple.get(args, 0);
      runtime.Tuple.slice(args, 1, 0);
      tmp = element0$;
    } else {
      tmp = Rendering.#emptyOptions;
    }
    if (tmp instanceof Object) {
      if ("indent" in tmp) {
        field_indent$ = tmp.indent;
        if (field_indent$ === true) {
          tmp1 = "  ";
        } else if (globalThis.Number.isInteger(field_indent$)) {
          scrut = field_indent$ > 0;
          if (scrut === true) {
            tmp1 = runtime.safeCall((" ").repeat(field_indent$));
          } else {
            tmp1 = null;
          }
        } else {
          tmp1 = null;
        }
      } else {
        tmp1 = null;
      }
    } else {
      tmp1 = null;
    }
    indent = tmp1;
    if (indent === null) {
      tmp2 = globalThis.Number.POSITIVE_INFINITY;
    } else {
      if (tmp instanceof Object) {
        if ("breakLength" in tmp) {
          field_breakLength$ = tmp.breakLength;
          if (globalThis.Number.isInteger(field_breakLength$)) {
            scrut1 = field_breakLength$ > 0;
            if (scrut1 === true) {
              tmp2 = field_breakLength$;
            } else {
              tmp2 = Rendering.#DEFAULT_BREAK_LENGTH;
            }
          } else {
            tmp2 = Rendering.#DEFAULT_BREAK_LENGTH;
          }
        } else {
          tmp2 = Rendering.#DEFAULT_BREAK_LENGTH;
        }
      } else {
        tmp2 = Rendering.#DEFAULT_BREAK_LENGTH;
      }
    }
    breakLength = tmp2;
    if (tmp instanceof Object) {
      if ("padding" in tmp) {
        field_padding$ = tmp.padding;
        if (field_padding$ === true) {
          tmp3 = " ";
        } else {
          tmp3 = "";
        }
      } else {
        tmp3 = "";
      }
    } else {
      tmp3 = "";
    }
    padding = tmp3;
    circularCounter = 1;
    visitingObjects = globalThis.Object.freeze(new globalThis.WeakMap());
    visitedObjects = globalThis.Object.freeze(new globalThis.WeakMap());
    return renderValue(target, 0, 0, 0)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "Rendering"]; 
});
let Rendering = Rendering1; export default Rendering;
