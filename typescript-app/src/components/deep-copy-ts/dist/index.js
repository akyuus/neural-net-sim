"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepCopy = void 0;
var cloneArrayBuffer_1 = require("./cloneArrayBuffer");
var cloneDataView_1 = require("./cloneDataView");
var cloneDate_1 = require("./cloneDate");
var cloneRegexp_1 = require("./cloneRegexp");
var cloneTypedArray_1 = require("./cloneTypedArray");
var TypedArrayMap = {
    "[object Date]": cloneDate_1.cloneDate,
    "[object ArrayBuffer]": cloneArrayBuffer_1.cloneArrayBuffer,
    "[object DataView]": cloneDataView_1.cloneDataView,
    "[object Float32Array]": cloneTypedArray_1.cloneTypedArray,
    "[object Float64Array]": cloneTypedArray_1.cloneTypedArray,
    "[object Int8Array]": cloneTypedArray_1.cloneTypedArray,
    "[object Int16Array]": cloneTypedArray_1.cloneTypedArray,
    "[object Int32Array]": cloneTypedArray_1.cloneTypedArray,
    "[object Uint8Array]": cloneTypedArray_1.cloneTypedArray,
    "[object Uint8ClampedArray]": cloneTypedArray_1.cloneTypedArray,
    "[object Uint16Array]": cloneTypedArray_1.cloneTypedArray,
    "[object Uint32Array]": cloneTypedArray_1.cloneTypedArray,
    "[object BigInt64Array]": cloneTypedArray_1.cloneTypedArray,
    "[object BigUint64Array]": cloneTypedArray_1.cloneTypedArray,
    "[object RegExp]": cloneRegexp_1.cloneRegExp,
};
/**
 * Deep copy function for TypeScript.
 * @param T Generic type of target/copied value.
 * @param target Target value to be copied.
 * @see Original source: ts-deepcopy https://github.com/ykdr2017/ts-deepcopy
 * @see Code pen https://codepen.io/erikvullings/pen/ejyBYg
 */
function deepCopy(target) {
    var tag = Object.prototype.toString.call(target);
    if (TypedArrayMap[tag]) {
        return TypedArrayMap[tag](target);
    }
    if (target === null) {
        return target;
    }
    if (target instanceof Array) {
        var cp_1 = [];
        target.forEach(function (v) {
            cp_1.push(v);
        });
        return cp_1.map(function (n) { return deepCopy(n); });
    }
    if (typeof target === "object" && target !== {}) {
        var cp_2 = __assign({}, target);
        Object.keys(cp_2).forEach(function (k) {
            cp_2[k] = deepCopy(cp_2[k]);
        });
        return cp_2;
    }
    return target;
}
exports.deepCopy = deepCopy;
