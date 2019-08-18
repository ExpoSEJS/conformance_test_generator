'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint-disable no-undefined */

/* helper */
var toStr = Object.prototype.toString;

var toInteger = function toInteger(value) {
    var number = Number(value);
    if (isNaN(number)) {
        return 0;
    }
    if (number === 0 || !isFinite(number)) {
        return number;
    }
    return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
};

var maxSafeInteger = Math.pow(2, 53) - 1;

var isCallable = function isCallable(fn) {
    return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
};

var toLength = function toLength(value) {
    var len = toInteger(value);
    return Math.min(Math.max(len, 0), maxSafeInteger);
};

var isRegExp = function isRegExp(value) {
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') return false;
    return value.constructor === RegExp;
};

/* object */
var keys = function keys(o) {
    var obj = Object(o);
    var result = [];
    for (var prop in obj) {
        if (hasOwnProperty.call(obj, prop)) result.push(prop);
    }
    return result;
};

var assign = function assign(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        sources[_key - 1] = arguments[_key];
    }

    if (target === null || typeof target === 'undefined') {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
    }
    var to = Object(target);
    for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource !== null || typeof nextSource !== 'undefined') {
            // Skip over if undefined or null
            for (var nextKey in nextSource) {
                // Avoid bugs when hasOwnProperty is shadowed
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) to[nextKey] = nextSource[nextKey];
            }
        }
    }
    return to;
};

/* function */
var bind = function bind(fn, thisArg) {
    if (typeof fn !== 'function') throw new TypeError('const bind - what is trying to be bound is not callable');
    return function () {
        fn.apply(thisArg, arguments);
    };
};

/* array */
var from = function from(arrayLike) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
    }

    // TODO: Iterator cases eg: Set, Map
    var C = Array;
    var items = Object(arrayLike);
    if (arrayLike === null || typeof arrayLike === 'undefined') throw new TypeError('const from requires an array-like object - not null or undefined');
    var mapFn = arguments[1];
    var T = void 0;
    if (typeof mapFn !== 'undefined') {
        if (!isCallable(mapFn)) throw new TypeError('"const from:" the second argument must be a function');
        if (arguments.length > 2) T = arguments[2];
    }
    var len = toLength(items.length);
    var A = isCallable(C) ? Object(new C(len)) : new Array(len);
    var k = 0;
    var kValue = void 0;
    while (k < len) {
        kValue = items[k];
        if (mapFn) A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);else A[k] = kValue;
        k += 1;
    }
    A.length = len;
    return A;
};

var isArray = function isArray(obj) {
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return false;
    return Object.prototype.toString.call(obj) === '[object Array]';
};

var find = function find(arr) {
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
    }

    if (arr === null || typeof arr === 'undefined') return undefined; // behavior different from ECMA-262
    var o = Object(arr);
    var predicate = args[0];
    var len = toLength(o.length);
    if (!isCallable(predicate)) throw new TypeError('"const find": second parameter must be a function');
    var thisArg = arguments[1];
    var k = 0;
    while (k < len) {
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) return kValue;
        k++;
    }
    return undefined;
};

var findIndex = function findIndex(arr) {
    if (arr === null || typeof arr === 'undefined') throw new TypeError('"const findIndex:" require the first parameter to be an "array" but is null or not defined');
    var o = Object(arr);
    var predicate = arguments.length <= 1 ? undefined : arguments[1];
    var len = toLength(o.length);
    if (!isCallable(predicate)) throw new TypeError('"const findIndex": second parameter must be a function');
    var thisArg = arguments.length <= 2 ? undefined : arguments[2];
    var k = 0;
    while (k < len) {
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) return k;
        k++;
    }
    return -1;
};

var indexOf = function indexOf(arr, vMember, nStartFrom) {
    if (arr === null || typeof arr === 'undefined') {
        throw new TypeError('"const findIndex:" require the first parameter to be an "array" but is null or not defined');
    }
    var nIdx = isFinite(nStartFrom) ? Math.floor(nStartFrom) : 0;
    var oThis = arr instanceof Object ? arr : Object(arr);
    var nLen = isFinite(oThis.length) ? Math.floor(oThis.length) : 0;
    if (nIdx >= nLen) return -1;
    if (nIdx < 0) nIdx = Math.max(nLen + nIdx, 0);
    if (typeof vMember === 'undefined') {
        /*
        Since `vMember` is undefined, keys that don't exist will have the same
        value as `vMember`, and thus do need to be checked.
        */
        do {
            if (nIdx in oThis && typeof oThis[nIdx] === 'undefined') return nIdx;
        } while (++nIdx < nLen);
    } else {
        do {
            if (oThis[nIdx] === vMember) return nIdx;
        } while (++nIdx < nLen);
    }
    return -1;
};

// fix IOS 12 Array reverse bug
// https://stackoverflow.com/questions/52390368/array-state-will-be-cached-in-ios-12-safari-is-bug-or-feature
var reverse = function reverse(arr) {
    function detect() {
        var a = [0, 1];
        a.reverse();
        return a[0] === 0;
    }
    var buggy = detect() || detect();
    if (buggy) {
        arr.length = arr.length;
    }
    return Array.prototype.reverse.call(arr);
};

/* string */
var includes = function includes(str, search, start) {
    if (typeof str === 'undefined') throw new TypeError('"const includes:" search source require a "string" but not defined');
    if (isRegExp(search)) throw new TypeError('"const includes:" search target require a "string" but "RegExp" provided');
    var searchStr = search.toString();
    var startInt = void 0;
    if (typeof start === 'undefined') startInt = 0;else startInt = toInteger(start);
    if (startInt + searchStr.length > str.length) return false;
    return str.indexOf(searchStr, startInt) !== -1;
};

var exports = {};

exports.keys = keys;
exports.assign = assign;
exports.bind = bind;
exports.from = from;
exports.isArray = isArray;
exports.find = find;
exports.findIndex = findIndex;
exports.indexOf = indexOf;
exports.reverse = reverse;
exports.includes = includes;

module.exports = exports;
