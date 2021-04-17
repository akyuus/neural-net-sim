"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneTypedArray = void 0;
var cloneArrayBuffer_1 = require("./cloneArrayBuffer");
var TypedArrayMap = {
    "[object Float32Array]": Float32Array,
    "[object Float64Array]": Float64Array,
    "[object Int8Array]": Int8Array,
    "[object Int16Array]": Int16Array,
    "[object Int32Array]": Int32Array,
    "[object Uint8Array]": Uint8Array,
    "[object Uint16Array]": Uint16Array,
    "[object Uint32Array]": Uint32Array,
    "[object Uint8ClampedArray]": Uint8ClampedArray,
    "[object BigInt64Array]": BigInt64Array,
    "[object BigUint64Array]": BigUint64Array,
};
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray) {
    var buffer = cloneArrayBuffer_1.cloneArrayBuffer(typedArray.buffer);
    return new TypedArrayMap[Object.prototype.toString.call(typedArray)](buffer, typedArray.byteOffset, typedArray.length);
}
exports.cloneTypedArray = cloneTypedArray;
