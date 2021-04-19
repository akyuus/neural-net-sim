"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneDate = void 0;
/**
 * Creates a clone of `date`.
 *
 * @private
 * @param {Date} typedDate The date to clone.
 * @returns {Object} Returns the cloned date.
 */
function cloneDate(targetDate) {
    return new Date(targetDate.getTime());
}
exports.cloneDate = cloneDate;
