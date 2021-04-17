"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneDataView = void 0;
var cloneArrayBuffer_1 = require("./cloneArrayBuffer");
/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView) {
    var buffer = cloneArrayBuffer_1.cloneArrayBuffer(dataView.buffer);
    return new DataView(buffer, dataView.byteOffset, dataView.byteLength);
}
exports.cloneDataView = cloneDataView;
