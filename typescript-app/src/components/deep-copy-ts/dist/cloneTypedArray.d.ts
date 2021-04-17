export declare type TypedArrayType = Float32Array | Float64Array | Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | BigInt64Array | BigUint64Array;
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @returns {Object} Returns the cloned typed array.
 */
export declare function cloneTypedArray(typedArray: TypedArrayType): TypedArrayType;
