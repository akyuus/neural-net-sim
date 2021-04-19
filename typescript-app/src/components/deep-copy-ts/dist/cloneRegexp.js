"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneRegExp = void 0;
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} targetRegexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(targetRegexp) {
    var result = new RegExp(targetRegexp.source, targetRegexp.flags);
    result.lastIndex = targetRegexp.lastIndex;
    return result;
}
exports.cloneRegExp = cloneRegExp;
