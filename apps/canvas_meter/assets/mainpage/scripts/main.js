/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



module.exports = function isExtendable(val) {
  return typeof val !== 'undefined' && val !== null
    && (typeof val === 'object' || typeof val === 'function');
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(22);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(23);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20), __webpack_require__(21)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*!
 * get-value <https://github.com/jonschlinkert/get-value>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

module.exports = function(obj, prop, a, b, c) {
  if (!isObject(obj) || !prop) {
    return obj;
  }

  prop = toString(prop);

  // allowing for multiple properties to be passed as
  // a string or array, but much faster (3-4x) than doing
  // `[].slice.call(arguments)`
  if (a) prop += '.' + toString(a);
  if (b) prop += '.' + toString(b);
  if (c) prop += '.' + toString(c);

  if (prop in obj) {
    return obj[prop];
  }

  var segs = prop.split('.');
  var len = segs.length;
  var i = -1;

  while (obj && (++i < len)) {
    var key = segs[i];
    while (key[key.length - 1] === '\\') {
      key = key.slice(0, -1) + '.' + segs[++i];
    }
    obj = obj[key];
  }
  return obj;
};

function isObject(val) {
  return val !== null && (typeof val === 'object' || typeof val === 'function');
}

function toString(val) {
  if (!val) return '';
  if (Array.isArray(val)) {
    return val.join('.');
  }
  return val;
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(0);

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(base__WEBPACK_IMPORTED_MODULE_0__, "CountDown")) __webpack_require__.d(__webpack_exports__, "CountDown", function() { return base__WEBPACK_IMPORTED_MODULE_0__["CountDown"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(base__WEBPACK_IMPORTED_MODULE_0__, "Speedometer")) __webpack_require__.d(__webpack_exports__, "Speedometer", function() { return base__WEBPACK_IMPORTED_MODULE_0__["Speedometer"]; });

/* harmony import */ var _countDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CountDown", function() { return _countDown__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _speedometer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Speedometer", function() { return _speedometer__WEBPACK_IMPORTED_MODULE_2__["a"]; });





/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return easing; });
var easing = {
  linear: function linear(k) {
    return k;
  },
  quadraticIn: function quadraticIn(k) {
    return k * k;
  },
  quadraticOut: function quadraticOut(k) {
    return k * (2 - k);
  },
  quadraticInOut: function quadraticInOut(k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k;
    }

    return -0.5 * (--k * (k - 2) - 1);
  },
  cubicIn: function cubicIn(k) {
    return k * k * k;
  },
  cubicOut: function cubicOut(k) {
    return --k * k * k + 1;
  },
  cubicInOut: function cubicInOut(k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k;
    }

    return 0.5 * ((k -= 2) * k * k + 2);
  },
  quarticIn: function quarticIn(k) {
    return k * k * k * k;
  },
  quarticOut: function quarticOut(k) {
    return 1 - --k * k * k * k;
  },
  quarticInOut: function quarticInOut(k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k * k;
    }

    return -0.5 * ((k -= 2) * k * k * k - 2);
  },
  quinticIn: function quinticIn(k) {
    return k * k * k * k * k;
  },
  quinticOut: function quinticOut(k) {
    return --k * k * k * k * k + 1;
  },
  quinticInOut: function quinticInOut(k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k * k * k;
    }

    return 0.5 * ((k -= 2) * k * k * k * k + 2);
  },
  sinusoidalIn: function sinusoidalIn(k) {
    return 1 - Math.cos(k * Math.PI / 2);
  },
  sinusoidalOut: function sinusoidalOut(k) {
    return Math.sin(k * Math.PI / 2);
  },
  sinusoidalInOut: function sinusoidalInOut(k) {
    return 0.5 * (1 - Math.cos(Math.PI * k));
  },
  exponentialIn: function exponentialIn(k) {
    return k === 0 ? 0 : Math.pow(1024, k - 1);
  },
  exponentialOut: function exponentialOut(k) {
    return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
  },
  exponentialInOut: function exponentialInOut(k) {
    if (k === 0) {
      return 0;
    }

    if (k === 1) {
      return 1;
    }

    if ((k *= 2) < 1) {
      return 0.5 * Math.pow(1024, k - 1);
    }

    return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
  },
  circularIn: function circularIn(k) {
    return 1 - Math.sqrt(1 - k * k);
  },
  circularOut: function circularOut(k) {
    return Math.sqrt(1 - --k * k);
  },
  circularInOut: function circularInOut(k) {
    if ((k *= 2) < 1) {
      return -0.5 * (Math.sqrt(1 - k * k) - 1);
    }

    return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
  },
  elasticIn: function elasticIn(k) {
    var s;
    var a = 0.1;
    var p = 0.4;

    if (k === 0) {
      return 0;
    }

    if (k === 1) {
      return 1;
    }

    if (!a || a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p * Math.asin(1 / a) / (2 * Math.PI);
    }

    return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
  },
  elasticOut: function elasticOut(k) {
    var s;
    var a = 0.1;
    var p = 0.4;

    if (k === 0) {
      return 0;
    }

    if (k === 1) {
      return 1;
    }

    if (!a || a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p * Math.asin(1 / a) / (2 * Math.PI);
    }

    return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
  },
  elasticInOut: function elasticInOut(k) {
    var s;
    var a = 0.1;
    var p = 0.4;

    if (k === 0) {
      return 0;
    }

    if (k === 1) {
      return 1;
    }

    if (!a || a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p * Math.asin(1 / a) / (2 * Math.PI);
    }

    if ((k *= 2) < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
    }

    return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
  },
  // 在某一动画开始沿指示的路径进行动画处理前稍稍收回该动画的移动
  backIn: function backIn(k) {
    var s = 1.70158;
    return k * k * ((s + 1) * k - s);
  },
  backOut: function backOut(k) {
    var s = 1.70158;
    return --k * k * ((s + 1) * k + s) + 1;
  },
  backInOut: function backInOut(k) {
    var s = 1.70158 * 1.525;

    if ((k *= 2) < 1) {
      return 0.5 * (k * k * ((s + 1) * k - s));
    }

    return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
  },
  // 创建弹跳效果
  bounceIn: function bounceIn(k) {
    return 1 - easingFuncs.bounceOut(1 - k);
  },
  bounceOut: function bounceOut(k) {
    if (k < 1 / 2.75) {
      return 7.5625 * k * k;
    } else if (k < 2 / 2.75) {
      return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
    } else if (k < 2.5 / 2.75) {
      return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
    } else {
      return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
    }
  },
  bounceInOut: function bounceInOut(k) {
    if (k < 0.5) {
      return easingFuncs.bounceIn(k * 2) * 0.5;
    }

    return easingFuncs.bounceOut(k * 2 - 1) * 0.5 + 0.5;
  }
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Draw; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log("Import Core.js");
var Draw =
/*#__PURE__*/
function () {
  function Draw(ctx) {
    _classCallCheck(this, Draw);

    this.ctx = ctx;
  }

  _createClass(Draw, [{
    key: "LinerGradient",
    value: function LinerGradient(x1, y1, x2, y2, stopList) {
      var ctx = this.ctx;
      var grad = ctx.createLinearGradient(x1, y1, x2, y2);

      for (var i = 0; i < stopList.length; i++) {
        grad.addColorStop(stopList[i][0], stopList[i][1]);
      }

      return grad;
    }
  }, {
    key: "CircularGradient",
    value: function CircularGradient(x, y, r, stopList) {
      var ctx = this.ctx;
      var grad = ctx.createCircularGradient(x, y, r);

      for (var i = 0; i < stopList.length; i++) {
        grad.addColorStop(stopList[i][0], stopList[i][1]);
      }

      return grad;
    }
  }, {
    key: "_setStyle",
    value: function _setStyle(styles) {
      var ctx = this.ctx;

      if (styles) {
        for (var key in styles) {
          switch (key) {
            case "fill":
              {
                ctx.fillStyle = styles[key];
                break;
              }

            case "strokeStyle":
              {
                ctx.strokeStyle = styles[key];
                break;
              }

            case "lineWidth":
              {
                ctx.lineWidth = styles[key];
                break;
              }

            case "lineCap":
              {
                ctx.lineCap = styles[key];
                break;
              }

            case "shadowColor":
              {
                ctx.shadowColor = styles[key];
                break;
              }

            case "shadowOffsetX":
              {
                ctx.shadowOffsetX = styles[key];
                break;
              }

            case "shadowOffsetY":
              {
                ctx.shadowOffsetY = styles[key];
                break;
              }

            case "setShadow":
              {
                ctx.setShadow(styles[key][0], styles[key][1], styles[key][2], styles[key][3]);
                break;
              }

            case "font":
              {
                ctx.font = styles[key];
                break;
              }

            case "textBaseline":
              {
                ctx.textBaseline = styles[key];
                break;
              }

            case "textAlign":
              {
                ctx.textAlign = styles[key];
                break;
              }
          }
        }
      }
    }
  }, {
    key: "_transform",
    value: function _transform(opt) {
      var ctx = this.ctx;

      for (var key in opt) {
        switch (key) {
          case "translate":
            {
              ctx.translate(opt[key][0], opt[key][1]);
              break;
            }

          case "rotate":
            {
              ctx.rotate(opt[key]);
            }
        }
      }
    }
  }, {
    key: "Arc",
    value: function Arc(opt) {
      var ctx = this.ctx;
      var shape = opt.shape,
          styles = opt.styles;
      ctx.save();

      this._setStyle(styles);

      ctx.beginPath();
      ctx.arc(shape.x, shape.y, shape.r, shape.sa, shape.ea, shape.counterclockwise);
      ctx.stroke();
      ctx.restore();
    }
  }, {
    key: "Line",
    value: function Line(opt) {
      var ctx = this.ctx;
      var shape = opt.shape,
          styles = opt.styles;
      ctx.save();

      this._setStyle(styles);

      this._transform(opt);

      ctx.beginPath();
      ctx.moveTo(shape.x1, shape.y1);
      ctx.lineTo(shape.x2, shape.y2);
      ctx.stroke();
      ctx.restore();
    }
  }, {
    key: "Circle",
    value: function Circle(opt, method) {
      var ctx = this.ctx;
      var shape = opt.shape,
          styles = opt.styles;
      ctx.save();

      this._setStyle(styles);

      ctx.beginPath();
      ctx.arc(shape.x, shape.y, shape.r, shape.sa || 0, shape.ea || Math.PI * 2);
      method && method == "fill" && ctx.fill();
      method && method == "stroke" && ctx.stroke();

      if (method == "mix") {
        ctx.fill();
        ctx.stroke();
      }

      ctx.restore();
    }
  }, {
    key: "Text",
    value: function Text(option) {
      var ctx = this.ctx,
          styles = option.styles;
      ctx.save();

      this._setStyle(styles);

      this._transform(option); // ctx.fillStyle = "#484443";
      // ctx.font = `${parseInt(width/ 6)}px FjallaOne`;
      // ctx.setTextAlign("center");
      // ctx.setTextBaseline("middle");


      ctx.fillText(option.text, option.x, option.y);
      ctx.restore();
    }
  }]);

  return Draw;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var toString = Object.prototype.toString;

module.exports = function kindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';

  var type = typeof val;
  if (type === 'boolean') return 'boolean';
  if (type === 'string') return 'string';
  if (type === 'number') return 'number';
  if (type === 'symbol') return 'symbol';
  if (type === 'function') {
    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
  }

  if (isArray(val)) return 'array';
  if (isBuffer(val)) return 'buffer';
  if (isArguments(val)) return 'arguments';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  if (isRegexp(val)) return 'regexp';

  switch (ctorName(val)) {
    case 'Symbol': return 'symbol';
    case 'Promise': return 'promise';

    // Set, Map, WeakSet, WeakMap
    case 'WeakMap': return 'weakmap';
    case 'WeakSet': return 'weakset';
    case 'Map': return 'map';
    case 'Set': return 'set';

    // 8-bit typed arrays
    case 'Int8Array': return 'int8array';
    case 'Uint8Array': return 'uint8array';
    case 'Uint8ClampedArray': return 'uint8clampedarray';

    // 16-bit typed arrays
    case 'Int16Array': return 'int16array';
    case 'Uint16Array': return 'uint16array';

    // 32-bit typed arrays
    case 'Int32Array': return 'int32array';
    case 'Uint32Array': return 'uint32array';
    case 'Float32Array': return 'float32array';
    case 'Float64Array': return 'float64array';
  }

  if (isGeneratorObj(val)) {
    return 'generator';
  }

  // Non-plain objects
  type = toString.call(val);
  switch (type) {
    case '[object Object]': return 'object';
    // iterators
    case '[object Map Iterator]': return 'mapiterator';
    case '[object Set Iterator]': return 'setiterator';
    case '[object String Iterator]': return 'stringiterator';
    case '[object Array Iterator]': return 'arrayiterator';
  }

  // other
  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
};

function ctorName(val) {
  return val.constructor ? val.constructor.name : null;
}

function isArray(val) {
  if (Array.isArray) return Array.isArray(val);
  return val instanceof Array;
}

function isError(val) {
  return val instanceof Error || (typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number');
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function'
    && typeof val.getDate === 'function'
    && typeof val.setDate === 'function';
}

function isRegexp(val) {
  if (val instanceof RegExp) return true;
  return typeof val.flags === 'string'
    && typeof val.ignoreCase === 'boolean'
    && typeof val.multiline === 'boolean'
    && typeof val.global === 'boolean';
}

function isGeneratorFn(name, val) {
  return ctorName(name) === 'GeneratorFunction';
}

function isGeneratorObj(val) {
  return typeof val.throw === 'function'
    && typeof val.return === 'function'
    && typeof val.next === 'function';
}

function isArguments(val) {
  try {
    if (typeof val.length === 'number' && typeof val.callee === 'function') {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }
  return false;
}

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }
  return false;
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-descriptor <https://github.com/jonschlinkert/is-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var typeOf = __webpack_require__(57);
var isAccessor = __webpack_require__(58);
var isData = __webpack_require__(60);

module.exports = function isDescriptor(obj, key) {
  if (typeOf(obj) !== 'object') {
    return false;
  }
  if ('get' in obj) {
    return isAccessor(obj, key);
  }
  return isData(obj, key);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(3);
var define = __webpack_require__(24);
var CacheBase = __webpack_require__(28);
var Emitter = __webpack_require__(12);
var isObject = __webpack_require__(0);
var merge = __webpack_require__(51);
var pascal = __webpack_require__(54);
var cu = __webpack_require__(55);

/**
 * Optionally define a custom `cache` namespace to use.
 */

function namespace(name) {
  var Cache = name ? CacheBase.namespace(name) : CacheBase;
  var fns = [];

  /**
   * Create an instance of `Base` with the given `config` and `options`.
   *
   * ```js
   * // initialize with `config` and `options`
   * var app = new Base({isApp: true}, {abc: true});
   * app.set('foo', 'bar');
   *
   * // values defined with the given `config` object will be on the root of the instance
   * console.log(app.baz); //=> undefined
   * console.log(app.foo); //=> 'bar'
   * // or use `.get`
   * console.log(app.get('isApp')); //=> true
   * console.log(app.get('foo')); //=> 'bar'
   *
   * // values defined with the given `options` object will be on `app.options
   * console.log(app.options.abc); //=> true
   * ```
   *
   * @param {Object} `config` If supplied, this object is passed to [cache-base][] to merge onto the the instance upon instantiation.
   * @param {Object} `options` If supplied, this object is used to initialize the `base.options` object.
   * @api public
   */

  function Base(config, options) {
    if (!(this instanceof Base)) {
      return new Base(config, options);
    }
    Cache.call(this, config);
    this.is('base');
    this.initBase(config, options);
  }

  /**
   * Inherit cache-base
   */

  util.inherits(Base, Cache);

  /**
   * Add static emitter methods
   */

  Emitter(Base);

  /**
   * Initialize `Base` defaults with the given `config` object
   */

  Base.prototype.initBase = function(config, options) {
    this.options = merge({}, this.options, options);
    this.cache = this.cache || {};
    this.define('registered', {});
    if (name) this[name] = {};

    // make `app._callbacks` non-enumerable
    this.define('_callbacks', this._callbacks);
    if (isObject(config)) {
      this.visit('set', config);
    }
    Base.run(this, 'use', fns);
  };

  /**
   * Set the given `name` on `app._name` and `app.is*` properties. Used for doing
   * lookups in plugins.
   *
   * ```js
   * app.is('foo');
   * console.log(app._name);
   * //=> 'foo'
   * console.log(app.isFoo);
   * //=> true
   * app.is('bar');
   * console.log(app.isFoo);
   * //=> true
   * console.log(app.isBar);
   * //=> true
   * console.log(app._name);
   * //=> 'bar'
   * ```
   * @name .is
   * @param {String} `name`
   * @return {Boolean}
   * @api public
   */

  Base.prototype.is = function(name) {
    if (typeof name !== 'string') {
      throw new TypeError('expected name to be a string');
    }
    this.define('is' + pascal(name), true);
    this.define('_name', name);
    this.define('_appname', name);
    return this;
  };

  /**
   * Returns true if a plugin has already been registered on an instance.
   *
   * Plugin implementors are encouraged to use this first thing in a plugin
   * to prevent the plugin from being called more than once on the same
   * instance.
   *
   * ```js
   * var base = new Base();
   * base.use(function(app) {
   *   if (app.isRegistered('myPlugin')) return;
   *   // do stuff to `app`
   * });
   *
   * // to also record the plugin as being registered
   * base.use(function(app) {
   *   if (app.isRegistered('myPlugin', true)) return;
   *   // do stuff to `app`
   * });
   * ```
   * @name .isRegistered
   * @emits `plugin` Emits the name of the plugin being registered. Useful for unit tests, to ensure plugins are only registered once.
   * @param {String} `name` The plugin name.
   * @param {Boolean} `register` If the plugin if not already registered, to record it as being registered pass `true` as the second argument.
   * @return {Boolean} Returns true if a plugin is already registered.
   * @api public
   */

  Base.prototype.isRegistered = function(name, register) {
    if (this.registered.hasOwnProperty(name)) {
      return true;
    }
    if (register !== false) {
      this.registered[name] = true;
      this.emit('plugin', name);
    }
    return false;
  };

  /**
   * Define a plugin function to be called immediately upon init. Plugins are chainable
   * and expose the following arguments to the plugin function:
   *
   * - `app`: the current instance of `Base`
   * - `base`: the [first ancestor instance](#base) of `Base`
   *
   * ```js
   * var app = new Base()
   *   .use(foo)
   *   .use(bar)
   *   .use(baz)
   * ```
   * @name .use
   * @param {Function} `fn` plugin function to call
   * @return {Object} Returns the item instance for chaining.
   * @api public
   */

  Base.prototype.use = function(fn) {
    fn.call(this, this);
    return this;
  };

  /**
   * The `.define` method is used for adding non-enumerable property on the instance.
   * Dot-notation is **not supported** with `define`.
   *
   * ```js
   * // arbitrary `render` function using lodash `template`
   * app.define('render', function(str, locals) {
   *   return _.template(str)(locals);
   * });
   * ```
   * @name .define
   * @param {String} `key` The name of the property to define.
   * @param {any} `value`
   * @return {Object} Returns the instance for chaining.
   * @api public
   */

  Base.prototype.define = function(key, val) {
    if (isObject(key)) {
      return this.visit('define', key);
    }
    define(this, key, val);
    return this;
  };

  /**
   * Mix property `key` onto the Base prototype. If base is inherited using
   * `Base.extend` this method will be overridden by a new `mixin` method that will
   * only add properties to the prototype of the inheriting application.
   *
   * ```js
   * app.mixin('foo', function() {
   *   // do stuff
   * });
   * ```
   * @name .mixin
   * @param {String} `key`
   * @param {Object|Array} `val`
   * @return {Object} Returns the `base` instance for chaining.
   * @api public
   */

  Base.prototype.mixin = function(key, val) {
    Base.prototype[key] = val;
    return this;
  };

  /**
   * Non-enumberable mixin array, used by the static [Base.mixin]() method.
   */

  Base.prototype.mixins = Base.prototype.mixins || [];

  /**
   * Getter/setter used when creating nested instances of `Base`, for storing a reference
   * to the first ancestor instance. This works by setting an instance of `Base` on the `parent`
   * property of a "child" instance. The `base` property defaults to the current instance if
   * no `parent` property is defined.
   *
   * ```js
   * // create an instance of `Base`, this is our first ("base") instance
   * var first = new Base();
   * first.foo = 'bar'; // arbitrary property, to make it easier to see what's happening later
   *
   * // create another instance
   * var second = new Base();
   * // create a reference to the first instance (`first`)
   * second.parent = first;
   *
   * // create another instance
   * var third = new Base();
   * // create a reference to the previous instance (`second`)
   * // repeat this pattern every time a "child" instance is created
   * third.parent = second;
   *
   * // we can always access the first instance using the `base` property
   * console.log(first.base.foo);
   * //=> 'bar'
   * console.log(second.base.foo);
   * //=> 'bar'
   * console.log(third.base.foo);
   * //=> 'bar'
   * // and now you know how to get to third base ;)
   * ```
   * @name .base
   * @api public
   */

  Object.defineProperty(Base.prototype, 'base', {
    configurable: true,
    get: function() {
      return this.parent ? this.parent.base : this;
    }
  });

  /**
   * Static method for adding global plugin functions that will
   * be added to an instance when created.
   *
   * ```js
   * Base.use(function(app) {
   *   app.foo = 'bar';
   * });
   * var app = new Base();
   * console.log(app.foo);
   * //=> 'bar'
   * ```
   * @name #use
   * @param {Function} `fn` Plugin function to use on each instance.
   * @return {Object} Returns the `Base` constructor for chaining
   * @api public
   */

  define(Base, 'use', function(fn) {
    fns.push(fn);
    return Base;
  });

  /**
   * Run an array of functions by passing each function
   * to a method on the given object specified by the given property.
   *
   * @param  {Object} `obj` Object containing method to use.
   * @param  {String} `prop` Name of the method on the object to use.
   * @param  {Array} `arr` Array of functions to pass to the method.
   */

  define(Base, 'run', function(obj, prop, arr) {
    var len = arr.length, i = 0;
    while (len--) {
      obj[prop](arr[i++]);
    }
    return Base;
  });

  /**
   * Static method for inheriting the prototype and static methods of the `Base` class.
   * This method greatly simplifies the process of creating inheritance-based applications.
   * See [static-extend][] for more details.
   *
   * ```js
   * var extend = cu.extend(Parent);
   * Parent.extend(Child);
   *
   * // optional methods
   * Parent.extend(Child, {
   *   foo: function() {},
   *   bar: function() {}
   * });
   * ```
   * @name #extend
   * @param {Function} `Ctor` constructor to extend
   * @param {Object} `methods` Optional prototype properties to mix in.
   * @return {Object} Returns the `Base` constructor for chaining
   * @api public
   */

  define(Base, 'extend', cu.extend(Base, function(Ctor, Parent) {
    Ctor.prototype.mixins = Ctor.prototype.mixins || [];

    define(Ctor, 'mixin', function(fn) {
      var mixin = fn(Ctor.prototype, Ctor);
      if (typeof mixin === 'function') {
        Ctor.prototype.mixins.push(mixin);
      }
      return Ctor;
    });

    define(Ctor, 'mixins', function(Child) {
      Base.run(Child, 'mixin', Ctor.prototype.mixins);
      return Ctor;
    });

    Ctor.prototype.mixin = function(key, value) {
      Ctor.prototype[key] = value;
      return this;
    };
    return Base;
  }));

  /**
   * Used for adding methods to the `Base` prototype, and/or to the prototype of child instances.
   * When a mixin function returns a function, the returned function is pushed onto the `.mixins`
   * array, making it available to be used on inheriting classes whenever `Base.mixins()` is
   * called (e.g. `Base.mixins(Child)`).
   *
   * ```js
   * Base.mixin(function(proto) {
   *   proto.foo = function(msg) {
   *     return 'foo ' + msg;
   *   };
   * });
   * ```
   * @name #mixin
   * @param {Function} `fn` Function to call
   * @return {Object} Returns the `Base` constructor for chaining
   * @api public
   */

  define(Base, 'mixin', function(fn) {
    var mixin = fn(Base.prototype, Base);
    if (typeof mixin === 'function') {
      Base.prototype.mixins.push(mixin);
    }
    return Base;
  });

  /**
   * Static method for running global mixin functions against a child constructor.
   * Mixins must be registered before calling this method.
   *
   * ```js
   * Base.extend(Child);
   * Base.mixins(Child);
   * ```
   * @name #mixins
   * @param {Function} `Child` Constructor function of a child class
   * @return {Object} Returns the `Base` constructor for chaining
   * @api public
   */

  define(Base, 'mixins', function(Child) {
    Base.run(Child, 'mixin', Base.prototype.mixins);
    return Base;
  });

  /**
   * Similar to `util.inherit`, but copies all static properties, prototype properties, and
   * getters/setters from `Provider` to `Receiver`. See [class-utils][]{#inherit} for more details.
   *
   * ```js
   * Base.inherit(Foo, Bar);
   * ```
   * @name #inherit
   * @param {Function} `Receiver` Receiving (child) constructor
   * @param {Function} `Provider` Providing (parent) constructor
   * @return {Object} Returns the `Base` constructor for chaining
   * @api public
   */

  define(Base, 'inherit', cu.inherit);
  define(Base, 'bubble', cu.bubble);
  return Base;
}

/**
 * Expose `Base` with default settings
 */

module.exports = namespace();

/**
 * Allow users to define a namespace
 */

module.exports.namespace = namespace;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * object-visit <https://github.com/jonschlinkert/object-visit>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(0);

module.exports = function visit(thisArg, method, target, val) {
  if (!isObject(thisArg) && typeof thisArg !== 'function') {
    throw new Error('object-visit expects `thisArg` to be an object.');
  }

  if (typeof method !== 'string') {
    throw new Error('object-visit expects `method` name to be a string');
  }

  if (typeof thisArg[method] !== 'function') {
    return thisArg;
  }

  var args = [].slice.call(arguments, 3);
  target = target || {};

  for (var key in target) {
    var arr = [key, target[key]].concat(args);
    thisArg[method].apply(thisArg, arr);
  }
  return thisArg;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * to-object-path <https://github.com/jonschlinkert/to-object-path>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var typeOf = __webpack_require__(31);

module.exports = function toPath(args) {
  if (typeOf(args) !== 'arguments') {
    args = arguments;
  }
  return filter(args).join('.');
};

function filter(arr) {
  var len = arr.length;
  var idx = -1;
  var res = [];

  while (++idx < len) {
    var ele = arr[idx];
    if (typeOf(ele) === 'arguments' || Array.isArray(ele)) {
      res.push.apply(res, filter(ele));
    } else if (typeof ele === 'string') {
      res.push(ele);
    }
  }
  return res;
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function union(init) {
  if (!Array.isArray(init)) {
    throw new TypeError('arr-union expects the first argument to be an array.');
  }

  var len = arguments.length;
  var i = 0;

  while (++i < len) {
    var arg = arguments[i];
    if (!arg) continue;

    if (!Array.isArray(arg)) {
      arg = [arg];
    }

    for (var j = 0; j < arg.length; j++) {
      var ele = arg[j];

      if (init.indexOf(ele) >= 0) {
        continue;
      }
      init.push(ele);
    }
  }
  return init;
};


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountDown; });
/* harmony import */ var _lib_draw_easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _lib_draw_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CountDown =
/*#__PURE__*/
function (_Draw) {
  _inherits(CountDown, _Draw);

  function CountDown(ctx, w, h, padding) {
    var _this;

    _classCallCheck(this, CountDown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CountDown).call(this, ctx));
    _this.ctx = ctx;
    _this.width = w;
    _this.height = h;
    _this.padding = padding;
    var frameWidth = 6;
    var progressCircleWidth = 20;
    _this.state = {
      width: w,
      padding: padding,
      center: [w / 2, h / 2],
      frameWidth: frameWidth,
      frameRadius: w / 2 - padding - frameWidth / 2,
      progressCircleWidth: progressCircleWidth,
      progressCircleRadius: w / 2 - padding - frameWidth - progressCircleWidth / 2,
      outerCircleRadius: w / 2 - padding - frameWidth - progressCircleWidth,
      innerCircleRadius: w / 2 - padding - frameWidth - progressCircleWidth - 20
    };
    return _this;
  }

  _createClass(CountDown, [{
    key: "outerCircle",
    value: function outerCircle() {
      var _this$state = this.state,
          width = _this$state.width,
          center = _this$state.center,
          outerCircleRadius = _this$state.outerCircleRadius,
          progressCircleWidth = _this$state.progressCircleWidth,
          frameWidth = _this$state.frameWidth,
          padding = _this$state.padding;
      var leftTop = padding + progressCircleWidth + frameWidth;
      var bottomRight = width - padding - progressCircleWidth - frameWidth;
      var gradient = this.LinerGradient(leftTop, leftTop, bottomRight, bottomRight, [[0, "#fcfcfc"], [1, "#e2e6e9"]]); // Shadow

      this.Circle({
        shape: {
          x: this.width / 2 + 7,
          y: this.height / 2 + 7,
          r: outerCircleRadius
        },
        styles: {
          fill: "rgba(0, 0, 0, .2)"
        }
      }, "fill");
      this.Circle({
        shape: {
          x: center[0],
          y: center[1],
          r: outerCircleRadius
        },
        styles: {
          fill: gradient
        }
      }, 'fill');
    }
  }, {
    key: "innerCircle",
    value: function innerCircle() {
      var _this$state2 = this.state,
          width = _this$state2.width,
          center = _this$state2.center,
          innerCircleRadius = _this$state2.innerCircleRadius,
          progressCircleWidth = _this$state2.progressCircleWidth,
          frameWidth = _this$state2.frameWidth,
          padding = _this$state2.padding;
      var leftTop = padding + progressCircleWidth + frameWidth + 20;
      var bottomRight = width - padding - progressCircleWidth - frameWidth - 20;
      var gradient = this.LinerGradient(leftTop, leftTop, bottomRight, bottomRight, [[0, "#e0e4e7"], [1, "#f8faf9"]]);
      this.Circle({
        shape: {
          x: center[0],
          y: center[1],
          r: innerCircleRadius
        },
        styles: {
          fill: gradient
        }
      }, "fill");
    }
  }, {
    key: "progressCircle",
    value: function progressCircle(progress) {
      var _this$state3 = this.state,
          center = _this$state3.center,
          progressCircleWidth = _this$state3.progressCircleWidth,
          progressCircleRadius = _this$state3.progressCircleRadius;
      var gradient = this.LinerGradient(30, 30, 180, 180, [[0, "#f8d231"], [1, "#f4b83c"]]);
      var target = progress - Math.PI / 2;
      this.Arc({
        shape: {
          x: center[0],
          y: center[1],
          r: progressCircleRadius,
          sa: target,
          ea: 0 - Math.PI / 2,
          counterclockwise: true
        },
        styles: {
          strokeStyle: gradient,
          lineWidth: progressCircleWidth,
          lineCap: "round"
        }
      });
    }
  }, {
    key: "background",
    value: function background() {
      var center = this.state.center;
      var gradient = this.LinerGradient(0, 0, 0, 200, [[0, "#fefefe"], [1, "#e0e4e5"]]);
      this.Circle({
        shape: {
          x: center[0] + 6,
          y: center[1] + 6,
          r: this.width / 2 - this.padding
        },
        styles: {
          fill: "rgba(0,0,0,.2)"
        }
      }, "fill");
      this.Circle({
        shape: {
          x: this.width / 2,
          y: this.height / 2,
          r: this.width / 2 - 3 - this.padding
        },
        styles: {
          fill: gradient
        }
      }, "fill");
    }
  }, {
    key: "scale",
    value: function scale() {
      var _this$state4 = this.state,
          center = _this$state4.center,
          progressCircleRadius = _this$state4.progressCircleRadius,
          frameWidth = _this$state4.frameWidth,
          frameRadius = _this$state4.frameRadius,
          padding = _this$state4.padding;

      for (var i = 0; i < 12; i++) {
        this.Line({
          shape: {
            x1: progressCircleRadius - 5,
            y1: 0,
            x2: progressCircleRadius + 5,
            y2: 0
          },
          styles: {
            lineWidth: 1,
            strokeStyle: "white",
            lineCap: "round"
          },
          translate: [center[0], center[1]],
          rotate: Math.PI / 6 * i
        });
      }

      this.Circle({
        shape: {
          x: center[0],
          y: center[1],
          r: frameRadius
        },
        styles: {
          strokeStyle: "#fffdfe",
          lineWidth: frameWidth
        }
      }, "stroke");
      this.Circle({
        shape: {
          x: center[0],
          y: center[1],
          r: frameRadius - frameWidth / 2
        },
        styles: {
          strokeStyle: "rgba(0, 0, 0, .1)",
          lineWidth: 2
        }
      }, "stroke");
    }
  }, {
    key: "text",
    value: function text(t) {
      var ctx = this.ctx;
      var _this$state5 = this.state,
          center = _this$state5.center,
          width = _this$state5.width;
      ctx.save();
      ctx.fillStyle = "#484443";
      ctx.font = "".concat(parseInt(width / 6), "px FjallaOne");
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(t + "\"", center[0] + 5, center[1]);
      ctx.restore();
    }
  }, {
    key: "draw",
    value: function draw(ea, t) {
      var ctx = this.ctx;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      this.background();
      this.progressCircle(ea);
      this.scale();
      this.outerCircle();
      this.innerCircle();
      this.text(t);
    }
  }, {
    key: "start",
    value: function start(duration, cb) {
      var _this2 = this;

      var currentTime = 0,
          delta = 40,
          start = new Date().getTime();

      var frame = function frame() {
        var progress = _lib_draw_easing__WEBPACK_IMPORTED_MODULE_0__[/* easing */ "a"].linear(currentTime / duration);
        currentTime = new Date().getTime() - start;

        if (currentTime > duration) {
          cb();
          return;
        }

        _this2.draw(-Math.PI * 2 * progress, parseInt((duration - currentTime) / 1000));

        if (!_this2.stoped) {
          setTimeout(frame, delta);
        }
      };

      setTimeout(frame, delta);
    }
  }, {
    key: "stop",
    value: function stop() {
      console.log("stoped");
      this.stoped = true;
    }
  }]);

  return CountDown;
}(_lib_draw_core__WEBPACK_IMPORTED_MODULE_1__[/* Draw */ "a"]);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Speedometer; });
/* harmony import */ var _lib_draw_easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _lib_draw_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


var Speedometer = function Speedometer(ctx, w, h, padding, duration, name, unit, min, max) {
  var dctx = new _lib_draw_core__WEBPACK_IMPORTED_MODULE_1__[/* Draw */ "a"](ctx);
  var raduis = w / 2 - padding,
      radiusIndicator = raduis - 20,
      center = [w / 2, h / 2];
  var currentAngle = null,
      previousStop = null,
      previousValue = null,
      value = null,
      currentValue = 0,
      stoped = null,
      interval = null;

  var circle = function circle(ea) {
    var gradient = dctx.LinerGradient(padding, padding, w - padding, h - padding, [[0, "#f8d231"], [1, "#f4b83c"]]);
    dctx.Arc({
      shape: {
        x: w / 2,
        y: h / 2,
        r: w / 2 - 3,
        sa: 0 - Math.PI / 2,
        ea: ea - Math.PI / 2
      },
      styles: {
        strokeStyle: gradient,
        lineWidth: 5,
        lineCap: "round"
      }
    });
  };

  var plate = function plate() {
    var gradient = dctx.LinerGradient(0, padding, 0, h - padding, [[0, "#dfe3e6"], [1, "#fff"]]);
    dctx.Circle({
      shape: {
        x: center[0] + 5,
        y: center[1] + 5,
        r: raduis
      },
      styles: {
        fill: "rgba(0,0,0,.3)"
      }
    }, "fill"); // Shadow

    dctx.Circle({
      shape: {
        x: center[0],
        y: center[1],
        r: raduis
      },
      styles: {
        fill: gradient
      }
    }, "fill");
  };

  var scale = function scale() {
    var x1, x2;

    for (var i = 0; i < 31; i++) {
      if (i % 5 == 0) {
        x1 = raduis - 8;
        x2 = raduis;
      } else {
        x1 = raduis - 8;
        x2 = raduis - 4;
      }

      dctx.Line({
        shape: {
          x1: x1,
          y1: 0,
          x2: x2,
          y2: 0
        },
        styles: {
          lineWidth: 1,
          strokeStyle: "#aaaeb1",
          lineCap: "round"
        },
        translate: [center[0], center[1]],
        rotate: -Math.PI / 30 * i
      });
    }
  };

  var centerPlate = function centerPlate() {
    dctx.Circle({
      shape: {
        x: center[0],
        y: center[1],
        r: radiusIndicator - 5
      },
      styles: {
        fill: "#2f2f2f"
      }
    }, "fill");
    dctx.Circle({
      shape: {
        x: center[0],
        y: center[1],
        r: radiusIndicator - 15
      },
      styles: {
        fill: "white"
      }
    }, "fill");
    var gradient = dctx.LinerGradient(padding, padding, w - padding, h - padding, [[0, "#f8d231"], [1, "#f4b83c"]]);
    dctx.Arc({
      shape: {
        x: w / 2,
        y: h / 2,
        r: radiusIndicator - 25,
        sa: 0,
        ea: Math.PI * 2
      },
      styles: {
        strokeStyle: gradient,
        lineWidth: 8,
        lineCap: "round"
      }
    });
  };

  var indicator = function indicator(p) {
    var v;

    if (value < min) {
      v = min;
    } else if (value > max) {
      v = max;
    } else {
      v = value;
    }

    var target = Math.PI * v / max;
    var ea = target * p;

    if (previousStop) {
      ea = previousStop - (previousStop - target) * p;
    }

    currentAngle = ea;
    var gradient = dctx.LinerGradient(padding, 0, w - padding, 0, [[0, "#f8d231"], [1, "#f4b83c"]]);
    var backgradient = dctx.LinerGradient(padding, 0, w - padding, 0, [[0, "#dadbdd"], [1, "#d7dbdc"]]);
    var backgradient2 = dctx.LinerGradient(0, padding, 0, h - padding, [[0, "#babfc3"], [1, "#d7dbdc"]]);
    dctx.Arc({
      shape: {
        x: center[0],
        y: center[1],
        r: radiusIndicator,
        sa: -Math.PI,
        ea: 0
      },
      styles: {
        strokeStyle: backgradient,
        lineWidth: 15,
        lineCap: "round"
      }
    });
    dctx.Arc({
      shape: {
        x: center[0],
        y: center[1],
        r: radiusIndicator,
        sa: -Math.PI,
        ea: 0
      },
      styles: {
        strokeStyle: backgradient2,
        lineWidth: 10,
        lineCap: "round"
      }
    });
    dctx.Arc({
      shape: {
        x: center[0],
        y: center[1],
        r: radiusIndicator,
        sa: -Math.PI,
        ea: -Math.PI + ea
      },
      styles: {
        strokeStyle: gradient,
        lineWidth: 8,
        lineCap: "round"
      }
    });
  };

  var text = function text(p) {
    var target = value;
    var nowValue = target * p;

    if (previousValue) {
      nowValue = previousValue - (previousValue - target) * p;
    }

    previousValue = nowValue;
    dctx.Text({
      text: parseInt(nowValue),
      x: center[0],
      y: center[1],
      styles: {
        fill: "#5f5d5e",
        font: "".concat(w / 2 - 80, "px FjallaOne"),
        textBaseline: "middle",
        textAlign: "center"
      }
    });
    dctx.Text({
      text: name,
      x: center[0],
      y: center[1] - 30,
      styles: {
        fill: "#5f5d5e",
        font: "14px FjallaOne",
        textBaseline: "middle",
        textAlign: "center"
      }
    });
    dctx.Text({
      text: unit,
      x: center[0],
      y: center[1] + 20,
      styles: {
        fill: "#5f5d5e",
        font: "14px FjallaOne",
        textBaseline: "middle",
        textAlign: "center"
      }
    });
  };

  var draw = function draw(p) {
    var ctx = dctx.ctx;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    plate();
    scale();
    centerPlate();
    indicator(p);
    text(p);
  };

  var setValue = function setValue(v) {
    previousStop = currentAngle;
    value = v;
    startAnimation();
  };

  var startAnimation = function startAnimation() {
    var currentTime = 0,
        delta = 30,
        start = new Date().getTime(); // 清除前一次动画

    if (interval) {
      clearInterval(interval);
    }

    interval = setInterval(function () {
      var progress = _lib_draw_easing__WEBPACK_IMPORTED_MODULE_0__[/* easing */ "a"].quinticInOut(currentTime / duration);

      if (currentTime > duration) {
        draw(progress);
        clearInterval(interval);
        return;
      }

      draw(progress);
      currentTime = new Date().getTime() - start;
    }, delta);
  };

  var stop = function stop() {
    clearInterval(interval);
  };

  return {
    setValue: setValue,
    draw: draw,
    stop: stop
  };
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
module.exports = __webpack_require__(68);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./public/mainpage/scripts/meter/index.js
var meter = __webpack_require__(6);

// EXTERNAL MODULE: ./public/mainpage/lib/draw/easing.js
var easing = __webpack_require__(7);

// EXTERNAL MODULE: ./public/mainpage/lib/draw/core.js
var core = __webpack_require__(8);

// CONCATENATED MODULE: ./public/mainpage/scripts/meter/indicator.js


var indicator_Indicator = function Indicator(ctx, w, h, padding, title, unit, color) {
  var dctx = new core["a" /* Draw */](ctx);

  var circle = function circle(ea) {
    var gradient = dctx.LinerGradient(padding, padding, w - padding, h - padding, [[0, "#f8d231"], [1, "#f4b83c"]]);
    dctx.Arc({
      shape: {
        x: w / 2,
        y: h / 2,
        r: w / 2 - 3,
        sa: 0 - Math.PI / 2,
        ea: ea - Math.PI / 2
      },
      styles: {
        strokeStyle: gradient,
        lineWidth: 5,
        lineCap: "round"
      }
    });
  };

  var text = function text(t) {
    var titleWidth = 0;
    ctx.font = "".concat(parseInt(w / 4), "px FjallaOne");
    titleWidth = ctx.measureText(t).width;
    dctx.Text({
      text: t,
      x: w / 2,
      y: h / 2 + h / 12,
      styles: {
        fill: color,
        font: "".concat(parseInt(w / 4), "px FjallaOne"),
        textBaseline: "middle",
        textAlign: "center"
      }
    });

    if (title) {
      dctx.Text({
        text: title,
        x: parseInt(w / 2),
        y: parseInt(h / 4),
        styles: {
          fill: color,
          font: "".concat(parseInt(w / 10), "px FjallaOne"),
          textBaseline: "middle",
          textAlign: "center"
        }
      });
    }

    if (unit) {
      dctx.Text({
        text: unit,
        // x: parseInt(w / 2 + (titleWidth?titleWidth/2:0)),
        x: parseInt(w / 2),
        y: parseInt(h / 2 + 3 * h / 12),
        styles: {
          fill: color,
          font: "".concat(parseInt(w / 10), "px FjallaOne"),
          textBaseline: "top",
          textAlign: "center"
        }
      });
    }
  };

  var draw = function draw(ea, value) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    circle(ea);
    text(value);
  };

  var start = function start(duration, value) {
    var currentTime = 0,
        delta = 30,
        start = new Date().getTime();

    var frame = function frame() {
      var progress = easing["a" /* easing */].exponentialOut(currentTime / duration);

      if (currentTime > duration) {
        draw(Math.PI * 2 * progress, parseInt(value));
        return;
      }

      draw(Math.PI * 2 * progress, parseInt(progress * value));

      if (true) {
        setTimeout(frame, delta);
      }

      currentTime = new Date().getTime() - start;
    };

    setTimeout(frame, delta);
  };

  return {
    draw: draw,
    start: start
  };
};
// CONCATENATED MODULE: ./public/mainpage/scripts/main.js



var main_ctx = document.querySelector("#circular_indicator").getContext("2d");
var countDown = new meter["CountDown"](main_ctx, 200, 200, 10);
countDown.start(60000);
var sctx = document.querySelector("#speedometer").getContext("2d");
var speedometer = Object(meter["Speedometer"])(sctx, 200, 200, 10, 1000, "速度", "Km/h", 0, 200);
speedometer.setValue(0);
setInterval(function () {
  var value = Math.random() * 200;
  speedometer.setValue(value);
}, 2000);
var ictx = document.querySelector("#indicator").getContext("2d");
var indicator = indicator_Indicator(ictx, 200, 200, 20, "里程", "Km/h", "white");
indicator.start(2000, 200);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * define-property <https://github.com/jonschlinkert/define-property>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isDescriptor = __webpack_require__(25);

module.exports = function defineProperty(obj, prop, val) {
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    throw new TypeError('expected an object or function.');
  }

  if (typeof prop !== 'string') {
    throw new TypeError('expected `prop` to be a string.');
  }

  if (isDescriptor(val) && ('set' in val || 'get' in val)) {
    return Object.defineProperty(obj, prop, val);
  }

  return Object.defineProperty(obj, prop, {
    configurable: true,
    enumerable: false,
    writable: true,
    value: val
  });
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-descriptor <https://github.com/jonschlinkert/is-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var typeOf = __webpack_require__(9);
var isAccessor = __webpack_require__(26);
var isData = __webpack_require__(27);

module.exports = function isDescriptor(obj, key) {
  if (typeOf(obj) !== 'object') {
    return false;
  }
  if ('get' in obj) {
    return isAccessor(obj, key);
  }
  return isData(obj, key);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-accessor-descriptor <https://github.com/jonschlinkert/is-accessor-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var typeOf = __webpack_require__(9);

// accessor descriptor properties
var accessor = {
  get: 'function',
  set: 'function',
  configurable: 'boolean',
  enumerable: 'boolean'
};

function isAccessorDescriptor(obj, prop) {
  if (typeof prop === 'string') {
    var val = Object.getOwnPropertyDescriptor(obj, prop);
    return typeof val !== 'undefined';
  }

  if (typeOf(obj) !== 'object') {
    return false;
  }

  if (has(obj, 'value') || has(obj, 'writable')) {
    return false;
  }

  if (!has(obj, 'get') || typeof obj.get !== 'function') {
    return false;
  }

  // tldr: it's valid to have "set" be undefined
  // "set" might be undefined if `Object.getOwnPropertyDescriptor`
  // was used to get the value, and only `get` was defined by the user
  if (has(obj, 'set') && typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
    return false;
  }

  for (var key in obj) {
    if (!accessor.hasOwnProperty(key)) {
      continue;
    }

    if (typeOf(obj[key]) === accessor[key]) {
      continue;
    }

    if (typeof obj[key] !== 'undefined') {
      return false;
    }
  }
  return true;
}

function has(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}

/**
 * Expose `isAccessorDescriptor`
 */

module.exports = isAccessorDescriptor;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-data-descriptor <https://github.com/jonschlinkert/is-data-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var typeOf = __webpack_require__(9);

module.exports = function isDataDescriptor(obj, prop) {
  // data descriptor properties
  var data = {
    configurable: 'boolean',
    enumerable: 'boolean',
    writable: 'boolean'
  };

  if (typeOf(obj) !== 'object') {
    return false;
  }

  if (typeof prop === 'string') {
    var val = Object.getOwnPropertyDescriptor(obj, prop);
    return typeof val !== 'undefined';
  }

  if (!('value' in obj) && !('writable' in obj)) {
    return false;
  }

  for (var key in obj) {
    if (key === 'value') continue;

    if (!data.hasOwnProperty(key)) {
      continue;
    }

    if (typeOf(obj[key]) === data[key]) {
      continue;
    }

    if (typeof obj[key] !== 'undefined') {
      return false;
    }
  }
  return true;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(0);
var Emitter = __webpack_require__(12);
var visit = __webpack_require__(29);
var toPath = __webpack_require__(14);
var union = __webpack_require__(32);
var del = __webpack_require__(35);
var get = __webpack_require__(4);
var has = __webpack_require__(40);
var set = __webpack_require__(45);

/**
 * Create a `Cache` constructor that when instantiated will
 * store values on the given `prop`.
 *
 * ```js
 * var Cache = require('cache-base').namespace('data');
 * var cache = new Cache();
 *
 * cache.set('foo', 'bar');
 * //=> {data: {foo: 'bar'}}
 * ```
 * @param {String} `prop` The property name to use for storing values.
 * @return {Function} Returns a custom `Cache` constructor
 * @api public
 */

function namespace(prop) {

  /**
   * Create a new `Cache`. Internally the `Cache` constructor is created using
   * the `namespace` function, with `cache` defined as the storage object.
   *
   * ```js
   * var app = new Cache();
   * ```
   * @param {Object} `cache` Optionally pass an object to initialize with.
   * @constructor
   * @api public
   */

  function Cache(cache) {
    if (prop) {
      this[prop] = {};
    }
    if (cache) {
      this.set(cache);
    }
  }

  /**
   * Inherit Emitter
   */

  Emitter(Cache.prototype);

  /**
   * Assign `value` to `key`. Also emits `set` with
   * the key and value.
   *
   * ```js
   * app.on('set', function(key, val) {
   *   // do something when `set` is emitted
   * });
   *
   * app.set(key, value);
   *
   * // also takes an object or array
   * app.set({name: 'Halle'});
   * app.set([{foo: 'bar'}, {baz: 'quux'}]);
   * console.log(app);
   * //=> {name: 'Halle', foo: 'bar', baz: 'quux'}
   * ```
   *
   * @name .set
   * @emits `set` with `key` and `value` as arguments.
   * @param {String} `key`
   * @param {any} `value`
   * @return {Object} Returns the instance for chaining.
   * @api public
   */

  Cache.prototype.set = function(key, val) {
    if (Array.isArray(key) && arguments.length === 2) {
      key = toPath(key);
    }
    if (isObject(key) || Array.isArray(key)) {
      this.visit('set', key);
    } else {
      set(prop ? this[prop] : this, key, val);
      this.emit('set', key, val);
    }
    return this;
  };

  /**
   * Union `array` to `key`. Also emits `set` with
   * the key and value.
   *
   * ```js
   * app.union('a.b', ['foo']);
   * app.union('a.b', ['bar']);
   * console.log(app.get('a'));
   * //=> {b: ['foo', 'bar']}
   * ```
   * @name .union
   * @param {String} `key`
   * @param {any} `value`
   * @return {Object} Returns the instance for chaining.
   * @api public
   */

  Cache.prototype.union = function(key, val) {
    if (Array.isArray(key) && arguments.length === 2) {
      key = toPath(key);
    }
    var ctx = prop ? this[prop] : this;
    union(ctx, key, arrayify(val));
    this.emit('union', val);
    return this;
  };

  /**
   * Return the value of `key`. Dot notation may be used
   * to get [nested property values][get-value].
   *
   * ```js
   * app.set('a.b.c', 'd');
   * app.get('a.b');
   * //=> {c: 'd'}
   *
   * app.get(['a', 'b']);
   * //=> {c: 'd'}
   * ```
   *
   * @name .get
   * @emits `get` with `key` and `value` as arguments.
   * @param {String} `key` The name of the property to get. Dot-notation may be used.
   * @return {any} Returns the value of `key`
   * @api public
   */

  Cache.prototype.get = function(key) {
    key = toPath(arguments);

    var ctx = prop ? this[prop] : this;
    var val = get(ctx, key);

    this.emit('get', key, val);
    return val;
  };

  /**
   * Return true if app has a stored value for `key`,
   * false only if value is `undefined`.
   *
   * ```js
   * app.set('foo', 'bar');
   * app.has('foo');
   * //=> true
   * ```
   *
   * @name .has
   * @emits `has` with `key` and true or false as arguments.
   * @param {String} `key`
   * @return {Boolean}
   * @api public
   */

  Cache.prototype.has = function(key) {
    key = toPath(arguments);

    var ctx = prop ? this[prop] : this;
    var val = get(ctx, key);

    var has = typeof val !== 'undefined';
    this.emit('has', key, has);
    return has;
  };

  /**
   * Delete one or more properties from the instance.
   *
   * ```js
   * app.del(); // delete all
   * // or
   * app.del('foo');
   * // or
   * app.del(['foo', 'bar']);
   * ```
   * @name .del
   * @emits `del` with the `key` as the only argument.
   * @param {String|Array} `key` Property name or array of property names.
   * @return {Object} Returns the instance for chaining.
   * @api public
   */

  Cache.prototype.del = function(key) {
    if (Array.isArray(key)) {
      this.visit('del', key);
    } else {
      del(prop ? this[prop] : this, key);
      this.emit('del', key);
    }
    return this;
  };

  /**
   * Reset the entire cache to an empty object.
   *
   * ```js
   * app.clear();
   * ```
   * @api public
   */

  Cache.prototype.clear = function() {
    if (prop) {
      this[prop] = {};
    }
  };

  /**
   * Visit `method` over the properties in the given object, or map
   * visit over the object-elements in an array.
   *
   * @name .visit
   * @param {String} `method` The name of the `base` method to call.
   * @param {Object|Array} `val` The object or array to iterate over.
   * @return {Object} Returns the instance for chaining.
   * @api public
   */

  Cache.prototype.visit = function(method, val) {
    visit(this, method, val);
    return this;
  };

  return Cache;
}

/**
 * Cast val to an array
 */

function arrayify(val) {
  return val ? (Array.isArray(val) ? val : [val]) : [];
}

/**
 * Expose `Cache`
 */

module.exports = namespace();

/**
 * Expose `Cache.namespace`
 */

module.exports.namespace = namespace;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * collection-visit <https://github.com/jonschlinkert/collection-visit>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var visit = __webpack_require__(13);
var mapVisit = __webpack_require__(30);

module.exports = function(collection, method, val) {
  var result;

  if (typeof val === 'string' && (method in collection)) {
    var args = [].slice.call(arguments, 2);
    result = collection[method].apply(collection, args);
  } else if (Array.isArray(val)) {
    result = mapVisit.apply(null, arguments);
  } else {
    result = visit.apply(null, arguments);
  }

  if (typeof result !== 'undefined') {
    return result;
  }

  return collection;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(3);
var visit = __webpack_require__(13);

/**
 * Map `visit` over an array of objects.
 *
 * @param  {Object} `collection` The context in which to invoke `method`
 * @param  {String} `method` Name of the method to call on `collection`
 * @param  {Object} `arr` Array of objects.
 */

module.exports = function mapVisit(collection, method, val) {
  if (isObject(val)) {
    return visit.apply(null, arguments);
  }

  if (!Array.isArray(val)) {
    throw new TypeError('expected an array: ' + util.inspect(val));
  }

  var args = [].slice.call(arguments, 3);

  for (var i = 0; i < val.length; i++) {
    var ele = val[i];
    if (isObject(ele)) {
      visit.apply(null, [collection, method, ele].concat(args));
    } else {
      collection[method].apply(collection, [ele].concat(args));
    }
  }
};

function isObject(val) {
  return val && (typeof val === 'function' || (!Array.isArray(val) && typeof val === 'object'));
}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isBuffer = __webpack_require__(1);
var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  // primitivies
  if (typeof val === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (typeof val === 'string' || val instanceof String) {
    return 'string';
  }
  if (typeof val === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (typeof val === 'function' || val instanceof Function) {
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  var type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }

  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(2);
var union = __webpack_require__(15);
var get = __webpack_require__(4);
var set = __webpack_require__(33);

module.exports = function unionValue(obj, prop, value) {
  if (!isObject(obj)) {
    throw new TypeError('union-value expects the first argument to be an object.');
  }

  if (typeof prop !== 'string') {
    throw new TypeError('union-value expects `prop` to be a string.');
  }

  var arr = arrayify(get(obj, prop));
  set(obj, prop, union(arr, arrayify(value)));
  return obj;
};

function arrayify(val) {
  if (val === null || typeof val === 'undefined') {
    return [];
  }
  if (Array.isArray(val)) {
    return val;
  }
  return [val];
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * set-value <https://github.com/jonschlinkert/set-value>
 *
 * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var toPath = __webpack_require__(14);
var extend = __webpack_require__(34);
var isPlainObject = __webpack_require__(5);
var isObject = __webpack_require__(2);

module.exports = function(obj, path, val) {
  if (!isObject(obj)) {
    return obj;
  }

  if (Array.isArray(path)) {
    path = toPath(path);
  }

  if (typeof path !== 'string') {
    return obj;
  }

  var segs = path.split('.');
  var len = segs.length, i = -1;
  var res = obj;
  var last;

  while (++i < len) {
    var key = segs[i];

    while (key[key.length - 1] === '\\') {
      key = key.slice(0, -1) + '.' + segs[++i];
    }

    if (i === len - 1) {
      last = key;
      break;
    }

    if (!isObject(obj[key])) {
      obj[key] = {};
    }
    obj = obj[key];
  }

  if (obj.hasOwnProperty(last) && isObject(obj[last])) {
    if (isPlainObject(val)) {
      extend(obj[last], val);
    } else {
      obj[last] = val;
    }

  } else {
    obj[last] = val;
  }
  return res;
};



/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(2);

module.exports = function extend(o/*, objects*/) {
  if (!isObject(o)) { o = {}; }

  var len = arguments.length;
  for (var i = 1; i < len; i++) {
    var obj = arguments[i];

    if (isObject(obj)) {
      assign(o, obj);
    }
  }
  return o;
};

function assign(a, b) {
  for (var key in b) {
    if (hasOwn(b, key)) {
      a[key] = b[key];
    }
  }
}

/**
 * Returns true if the given `key` is an own property of `obj`.
 */

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * unset-value <https://github.com/jonschlinkert/unset-value>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(0);
var has = __webpack_require__(36);

module.exports = function unset(obj, prop) {
  if (!isObject(obj)) {
    throw new TypeError('expected an object.');
  }
  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
    return true;
  }

  if (has(obj, prop)) {
    var segs = prop.split('.');
    var last = segs.pop();
    while (segs.length && segs[segs.length - 1].slice(-1) === '\\') {
      last = segs.pop().slice(0, -1) + '.' + last;
    }
    while (segs.length) obj = obj[prop = segs.shift()];
    return (delete obj[last]);
  }
  return true;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * has-value <https://github.com/jonschlinkert/has-value>
 *
 * Copyright (c) 2014-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var isObject = __webpack_require__(37);
var hasValues = __webpack_require__(39);
var get = __webpack_require__(4);

module.exports = function(obj, prop, noZero) {
  if (isObject(obj)) {
    return hasValues(get(obj, prop), noZero);
  }
  return hasValues(obj, prop);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var isArray = __webpack_require__(38);

module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && isArray(val) === false;
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * has-values <https://github.com/jonschlinkert/has-values>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



module.exports = function hasValue(o, noZero) {
  if (o === null || o === undefined) {
    return false;
  }

  if (typeof o === 'boolean') {
    return true;
  }

  if (typeof o === 'number') {
    if (o === 0 && noZero === true) {
      return false;
    }
    return true;
  }

  if (o.length !== undefined) {
    return o.length !== 0;
  }

  for (var key in o) {
    if (o.hasOwnProperty(key)) {
      return true;
    }
  }
  return false;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * has-value <https://github.com/jonschlinkert/has-value>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var isObject = __webpack_require__(0);
var hasValues = __webpack_require__(41);
var get = __webpack_require__(4);

module.exports = function(val, prop) {
  return hasValues(isObject(val) && prop ? get(val, prop) : val);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * has-values <https://github.com/jonschlinkert/has-values>
 *
 * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var typeOf = __webpack_require__(42);
var isNumber = __webpack_require__(43);

module.exports = function hasValue(val) {
  // is-number checks for NaN and other edge cases
  if (isNumber(val)) {
    return true;
  }

  switch (typeOf(val)) {
    case 'null':
    case 'boolean':
    case 'function':
      return true;
    case 'string':
    case 'arguments':
      return val.length !== 0;
    case 'error':
      return val.message !== '';
    case 'array':
      var len = val.length;
      if (len === 0) {
        return false;
      }
      for (var i = 0; i < len; i++) {
        if (hasValue(val[i])) {
          return true;
        }
      }
      return false;
    case 'file':
    case 'map':
    case 'set':
      return val.size !== 0;
    case 'object':
      var keys = Object.keys(val);
      if (keys.length === 0) {
        return false;
      }
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (hasValue(val[key])) {
          return true;
        }
      }
      return false;
    default: {
      return false;
    }
  }
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var isBuffer = __webpack_require__(1);
var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  // primitivies
  if (typeof val === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (typeof val === 'string' || val instanceof String) {
    return 'string';
  }
  if (typeof val === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (typeof val === 'function' || val instanceof Function) {
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  var type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }
  if (type === '[object Promise]') {
    return 'promise';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }

  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var typeOf = __webpack_require__(44);

module.exports = function isNumber(num) {
  var type = typeOf(num);

  if (type === 'string') {
    if (!num.trim()) return false;
  } else if (type !== 'number') {
    return false;
  }

  return (num - num + 1) >= 0;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var isBuffer = __webpack_require__(1);
var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  // primitivies
  if (typeof val === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (typeof val === 'string' || val instanceof String) {
    return 'string';
  }
  if (typeof val === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (typeof val === 'function' || val instanceof Function) {
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  var type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }

  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * set-value <https://github.com/jonschlinkert/set-value>
 *
 * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var split = __webpack_require__(46);
var extend = __webpack_require__(50);
var isPlainObject = __webpack_require__(5);
var isObject = __webpack_require__(2);

module.exports = function(obj, prop, val) {
  if (!isObject(obj)) {
    return obj;
  }

  if (Array.isArray(prop)) {
    prop = [].concat.apply([], prop).join('.');
  }

  if (typeof prop !== 'string') {
    return obj;
  }

  var keys = split(prop, {sep: '.', brackets: true});
  var len = keys.length;
  var idx = -1;
  var current = obj;

  while (++idx < len) {
    var key = keys[idx];
    if (idx !== len - 1) {
      if (!isObject(current[key])) {
        current[key] = {};
      }
      current = current[key];
      continue;
    }

    if (isPlainObject(current[key]) && isPlainObject(val)) {
      current[key] = extend({}, current[key], val);
    } else {
      current[key] = val;
    }
  }

  return obj;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * split-string <https://github.com/jonschlinkert/split-string>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var extend = __webpack_require__(47);

module.exports = function(str, options, fn) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  if (typeof options === 'function') {
    fn = options;
    options = null;
  }

  // allow separator to be defined as a string
  if (typeof options === 'string') {
    options = { sep: options };
  }

  var opts = extend({sep: '.'}, options);
  var quotes = opts.quotes || ['"', "'", '`'];
  var brackets;

  if (opts.brackets === true) {
    brackets = {
      '<': '>',
      '(': ')',
      '[': ']',
      '{': '}'
    };
  } else if (opts.brackets) {
    brackets = opts.brackets;
  }

  var tokens = [];
  var stack = [];
  var arr = [''];
  var sep = opts.sep;
  var len = str.length;
  var idx = -1;
  var closeIdx;

  function expected() {
    if (brackets && stack.length) {
      return brackets[stack[stack.length - 1]];
    }
  }

  while (++idx < len) {
    var ch = str[idx];
    var next = str[idx + 1];
    var tok = { val: ch, idx: idx, arr: arr, str: str };
    tokens.push(tok);

    if (ch === '\\') {
      tok.val = keepEscaping(opts, str, idx) === true ? (ch + next) : next;
      tok.escaped = true;
      if (typeof fn === 'function') {
        fn(tok);
      }
      arr[arr.length - 1] += tok.val;
      idx++;
      continue;
    }

    if (brackets && brackets[ch]) {
      stack.push(ch);
      var e = expected();
      var i = idx + 1;

      if (str.indexOf(e, i + 1) !== -1) {
        while (stack.length && i < len) {
          var s = str[++i];
          if (s === '\\') {
            s++;
            continue;
          }

          if (quotes.indexOf(s) !== -1) {
            i = getClosingQuote(str, s, i + 1);
            continue;
          }

          e = expected();
          if (stack.length && str.indexOf(e, i + 1) === -1) {
            break;
          }

          if (brackets[s]) {
            stack.push(s);
            continue;
          }

          if (e === s) {
            stack.pop();
          }
        }
      }

      closeIdx = i;
      if (closeIdx === -1) {
        arr[arr.length - 1] += ch;
        continue;
      }

      ch = str.slice(idx, closeIdx + 1);
      tok.val = ch;
      tok.idx = idx = closeIdx;
    }

    if (quotes.indexOf(ch) !== -1) {
      closeIdx = getClosingQuote(str, ch, idx + 1);
      if (closeIdx === -1) {
        arr[arr.length - 1] += ch;
        continue;
      }

      if (keepQuotes(ch, opts) === true) {
        ch = str.slice(idx, closeIdx + 1);
      } else {
        ch = str.slice(idx + 1, closeIdx);
      }

      tok.val = ch;
      tok.idx = idx = closeIdx;
    }

    if (typeof fn === 'function') {
      fn(tok, tokens);
      ch = tok.val;
      idx = tok.idx;
    }

    if (tok.val === sep && tok.split !== false) {
      arr.push('');
      continue;
    }

    arr[arr.length - 1] += tok.val;
  }

  return arr;
};

function getClosingQuote(str, ch, i, brackets) {
  var idx = str.indexOf(ch, i);
  if (str.charAt(idx - 1) === '\\') {
    return getClosingQuote(str, ch, idx + 1);
  }
  return idx;
}

function keepQuotes(ch, opts) {
  if (opts.keepDoubleQuotes === true && ch === '"') return true;
  if (opts.keepSingleQuotes === true && ch === "'") return true;
  return opts.keepQuotes;
}

function keepEscaping(opts, str, idx) {
  if (typeof opts.keepEscaping === 'function') {
    return opts.keepEscaping(str, idx);
  }
  return opts.keepEscaping === true || str[idx + 1] === '\\';
}


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isExtendable = __webpack_require__(48);
var assignSymbols = __webpack_require__(49);

module.exports = Object.assign || function(obj/*, objects*/) {
  if (obj === null || typeof obj === 'undefined') {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  if (!isObject(obj)) {
    obj = {};
  }
  for (var i = 1; i < arguments.length; i++) {
    var val = arguments[i];
    if (isString(val)) {
      val = toObject(val);
    }
    if (isObject(val)) {
      assign(obj, val);
      assignSymbols(obj, val);
    }
  }
  return obj;
};

function assign(a, b) {
  for (var key in b) {
    if (hasOwn(b, key)) {
      a[key] = b[key];
    }
  }
}

function isString(val) {
  return (val && typeof val === 'string');
}

function toObject(str) {
  var obj = {};
  for (var i in str) {
    obj[i] = str[i];
  }
  return obj;
}

function isObject(val) {
  return (val && typeof val === 'object') || isExtendable(val);
}

/**
 * Returns true if the given `key` is an own property of `obj`.
 */

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function isEnum(obj, key) {
  return Object.prototype.propertyIsEnumerable.call(obj, key);
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isPlainObject = __webpack_require__(5);

module.exports = function isExtendable(val) {
  return isPlainObject(val) || typeof val === 'function' || Array.isArray(val);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * assign-symbols <https://github.com/jonschlinkert/assign-symbols>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



module.exports = function(receiver, objects) {
  if (receiver === null || typeof receiver === 'undefined') {
    throw new TypeError('expected first argument to be an object.');
  }

  if (typeof objects === 'undefined' || typeof Symbol === 'undefined') {
    return receiver;
  }

  if (typeof Object.getOwnPropertySymbols !== 'function') {
    return receiver;
  }

  var isEnumerable = Object.prototype.propertyIsEnumerable;
  var target = Object(receiver);
  var len = arguments.length, i = 0;

  while (++i < len) {
    var provider = Object(arguments[i]);
    var names = Object.getOwnPropertySymbols(provider);

    for (var j = 0; j < names.length; j++) {
      var key = names[j];

      if (isEnumerable.call(provider, key)) {
        target[key] = provider[key];
      }
    }
  }
  return target;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(2);

module.exports = function extend(o/*, objects*/) {
  if (!isObject(o)) { o = {}; }

  var len = arguments.length;
  for (var i = 1; i < len; i++) {
    var obj = arguments[i];

    if (isObject(obj)) {
      assign(o, obj);
    }
  }
  return o;
};

function assign(a, b) {
  for (var key in b) {
    if (hasOwn(b, key)) {
      a[key] = b[key];
    }
  }
}

/**
 * Returns true if the given `key` is an own property of `obj`.
 */

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isExtendable = __webpack_require__(52);
var forIn = __webpack_require__(53);

function mixinDeep(target, objects) {
  var len = arguments.length, i = 0;
  while (++i < len) {
    var obj = arguments[i];
    if (isObject(obj)) {
      forIn(obj, copy, target);
    }
  }
  return target;
}

/**
 * Copy properties from the source object to the
 * target object.
 *
 * @param  {*} `val`
 * @param  {String} `key`
 */

function copy(val, key) {
  if (key === '__proto__') {
    return;
  }

  var obj = this[key];
  if (isObject(val) && isObject(obj)) {
    mixinDeep(obj, val);
  } else {
    this[key] = val;
  }
}

/**
 * Returns true if `val` is an object or function.
 *
 * @param  {any} val
 * @return {Boolean}
 */

function isObject(val) {
  return isExtendable(val) && !Array.isArray(val);
}

/**
 * Expose `mixinDeep`
 */

module.exports = mixinDeep;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isPlainObject = __webpack_require__(5);

module.exports = function isExtendable(val) {
  return isPlainObject(val) || typeof val === 'function' || Array.isArray(val);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * for-in <https://github.com/jonschlinkert/for-in>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function forIn(obj, fn, thisArg) {
  for (var key in obj) {
    if (fn.call(thisArg, obj[key], key, obj) === false) {
      break;
    }
  }
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

/*!
 * pascalcase <https://github.com/jonschlinkert/pascalcase>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

function pascalcase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string.');
  }
  str = str.replace(/([A-Z])/g, ' $1');
  if (str.length === 1) { return str.toUpperCase(); }
  str = str.replace(/^[\W_]+|[\W_]+$/g, '').toLowerCase();
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str.replace(/[\W_]+(\w|$)/g, function (_, ch) {
    return ch.toUpperCase();
  });
}

module.exports = pascalcase;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(3);
var union = __webpack_require__(15);
var define = __webpack_require__(56);
var staticExtend = __webpack_require__(62);
var isObj = __webpack_require__(0);

/**
 * Expose class utils
 */

var cu = module.exports;

/**
 * Expose class utils: `cu`
 */

cu.isObject = function isObject(val) {
  return isObj(val) || typeof val === 'function';
};

/**
 * Returns true if an array has any of the given elements, or an
 * object has any of the give keys.
 *
 * ```js
 * cu.has(['a', 'b', 'c'], 'c');
 * //=> true
 *
 * cu.has(['a', 'b', 'c'], ['c', 'z']);
 * //=> true
 *
 * cu.has({a: 'b', c: 'd'}, ['c', 'z']);
 * //=> true
 * ```
 * @param {Object} `obj`
 * @param {String|Array} `val`
 * @return {Boolean}
 * @api public
 */

cu.has = function has(obj, val) {
  val = cu.arrayify(val);
  var len = val.length;

  if (cu.isObject(obj)) {
    for (var key in obj) {
      if (val.indexOf(key) > -1) {
        return true;
      }
    }

    var keys = cu.nativeKeys(obj);
    return cu.has(keys, val);
  }

  if (Array.isArray(obj)) {
    var arr = obj;
    while (len--) {
      if (arr.indexOf(val[len]) > -1) {
        return true;
      }
    }
    return false;
  }

  throw new TypeError('expected an array or object.');
};

/**
 * Returns true if an array or object has all of the given values.
 *
 * ```js
 * cu.hasAll(['a', 'b', 'c'], 'c');
 * //=> true
 *
 * cu.hasAll(['a', 'b', 'c'], ['c', 'z']);
 * //=> false
 *
 * cu.hasAll({a: 'b', c: 'd'}, ['c', 'z']);
 * //=> false
 * ```
 * @param {Object|Array} `val`
 * @param {String|Array} `values`
 * @return {Boolean}
 * @api public
 */

cu.hasAll = function hasAll(val, values) {
  values = cu.arrayify(values);
  var len = values.length;
  while (len--) {
    if (!cu.has(val, values[len])) {
      return false;
    }
  }
  return true;
};

/**
 * Cast the given value to an array.
 *
 * ```js
 * cu.arrayify('foo');
 * //=> ['foo']
 *
 * cu.arrayify(['foo']);
 * //=> ['foo']
 * ```
 *
 * @param {String|Array} `val`
 * @return {Array}
 * @api public
 */

cu.arrayify = function arrayify(val) {
  return val ? (Array.isArray(val) ? val : [val]) : [];
};

/**
 * Noop
 */

cu.noop = function noop() {
  return;
};

/**
 * Returns the first argument passed to the function.
 */

cu.identity = function identity(val) {
  return val;
};

/**
 * Returns true if a value has a `contructor`
 *
 * ```js
 * cu.hasConstructor({});
 * //=> true
 *
 * cu.hasConstructor(Object.create(null));
 * //=> false
 * ```
 * @param  {Object} `value`
 * @return {Boolean}
 * @api public
 */

cu.hasConstructor = function hasConstructor(val) {
  return cu.isObject(val) && typeof val.constructor !== 'undefined';
};

/**
 * Get the native `ownPropertyNames` from the constructor of the
 * given `object`. An empty array is returned if the object does
 * not have a constructor.
 *
 * ```js
 * cu.nativeKeys({a: 'b', b: 'c', c: 'd'})
 * //=> ['a', 'b', 'c']
 *
 * cu.nativeKeys(function(){})
 * //=> ['length', 'caller']
 * ```
 *
 * @param  {Object} `obj` Object that has a `constructor`.
 * @return {Array} Array of keys.
 * @api public
 */

cu.nativeKeys = function nativeKeys(val) {
  if (!cu.hasConstructor(val)) return [];
  var keys = Object.getOwnPropertyNames(val);
  if ('caller' in val) keys.push('caller');
  return keys;
};

/**
 * Returns property descriptor `key` if it's an "own" property
 * of the given object.
 *
 * ```js
 * function App() {}
 * Object.defineProperty(App.prototype, 'count', {
 *   get: function() {
 *     return Object.keys(this).length;
 *   }
 * });
 * cu.getDescriptor(App.prototype, 'count');
 * // returns:
 * // {
 * //   get: [Function],
 * //   set: undefined,
 * //   enumerable: false,
 * //   configurable: false
 * // }
 * ```
 *
 * @param {Object} `obj`
 * @param {String} `key`
 * @return {Object} Returns descriptor `key`
 * @api public
 */

cu.getDescriptor = function getDescriptor(obj, key) {
  if (!cu.isObject(obj)) {
    throw new TypeError('expected an object.');
  }
  if (typeof key !== 'string') {
    throw new TypeError('expected key to be a string.');
  }
  return Object.getOwnPropertyDescriptor(obj, key);
};

/**
 * Copy a descriptor from one object to another.
 *
 * ```js
 * function App() {}
 * Object.defineProperty(App.prototype, 'count', {
 *   get: function() {
 *     return Object.keys(this).length;
 *   }
 * });
 * var obj = {};
 * cu.copyDescriptor(obj, App.prototype, 'count');
 * ```
 * @param {Object} `receiver`
 * @param {Object} `provider`
 * @param {String} `name`
 * @return {Object}
 * @api public
 */

cu.copyDescriptor = function copyDescriptor(receiver, provider, name) {
  if (!cu.isObject(receiver)) {
    throw new TypeError('expected receiving object to be an object.');
  }
  if (!cu.isObject(provider)) {
    throw new TypeError('expected providing object to be an object.');
  }
  if (typeof name !== 'string') {
    throw new TypeError('expected name to be a string.');
  }

  var val = cu.getDescriptor(provider, name);
  if (val) Object.defineProperty(receiver, name, val);
};

/**
 * Copy static properties, prototype properties, and descriptors
 * from one object to another.
 *
 * @param {Object} `receiver`
 * @param {Object} `provider`
 * @param {String|Array} `omit` One or more properties to omit
 * @return {Object}
 * @api public
 */

cu.copy = function copy(receiver, provider, omit) {
  if (!cu.isObject(receiver)) {
    throw new TypeError('expected receiving object to be an object.');
  }
  if (!cu.isObject(provider)) {
    throw new TypeError('expected providing object to be an object.');
  }
  var props = Object.getOwnPropertyNames(provider);
  var keys = Object.keys(provider);
  var len = props.length,
    key;
  omit = cu.arrayify(omit);

  while (len--) {
    key = props[len];

    if (cu.has(keys, key)) {
      define(receiver, key, provider[key]);
    } else if (!(key in receiver) && !cu.has(omit, key)) {
      cu.copyDescriptor(receiver, provider, key);
    }
  }
};

/**
 * Inherit the static properties, prototype properties, and descriptors
 * from of an object.
 *
 * @param {Object} `receiver`
 * @param {Object} `provider`
 * @param {String|Array} `omit` One or more properties to omit
 * @return {Object}
 * @api public
 */

cu.inherit = function inherit(receiver, provider, omit) {
  if (!cu.isObject(receiver)) {
    throw new TypeError('expected receiving object to be an object.');
  }
  if (!cu.isObject(provider)) {
    throw new TypeError('expected providing object to be an object.');
  }

  var keys = [];
  for (var key in provider) {
    keys.push(key);
    receiver[key] = provider[key];
  }

  keys = keys.concat(cu.arrayify(omit));

  var a = provider.prototype || provider;
  var b = receiver.prototype || receiver;
  cu.copy(b, a, keys);
};

/**
 * Returns a function for extending the static properties,
 * prototype properties, and descriptors from the `Parent`
 * constructor onto `Child` constructors.
 *
 * ```js
 * var extend = cu.extend(Parent);
 * Parent.extend(Child);
 *
 * // optional methods
 * Parent.extend(Child, {
 *   foo: function() {},
 *   bar: function() {}
 * });
 * ```
 * @param {Function} `Parent` Parent ctor
 * @param {Function} `extend` Optional extend function to handle custom extensions. Useful when updating methods that require a specific prototype.
 *   @param {Function} `Child` Child ctor
 *   @param {Object} `proto` Optionally pass additional prototype properties to inherit.
 *   @return {Object}
 * @api public
 */

cu.extend = function() {
  // keep it lazy, instead of assigning to `cu.extend`
  return staticExtend.apply(null, arguments);
};

/**
 * Bubble up events emitted from static methods on the Parent ctor.
 *
 * @param {Object} `Parent`
 * @param {Array} `events` Event names to bubble up
 * @api public
 */

cu.bubble = function(Parent, events) {
  events = events || [];
  Parent.bubble = function(Child, arr) {
    if (Array.isArray(arr)) {
      events = union([], events, arr);
    }
    var len = events.length;
    var idx = -1;
    while (++idx < len) {
      var name = events[idx];
      Parent.on(name, Child.emit.bind(Child, name));
    }
    cu.bubble(Child, events);
  };
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * define-property <https://github.com/jonschlinkert/define-property>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var isDescriptor = __webpack_require__(10);

module.exports = function defineProperty(obj, prop, val) {
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    throw new TypeError('expected an object or function.');
  }

  if (typeof prop !== 'string') {
    throw new TypeError('expected `prop` to be a string.');
  }

  if (isDescriptor(val) && ('set' in val || 'get' in val)) {
    return Object.defineProperty(obj, prop, val);
  }

  return Object.defineProperty(obj, prop, {
    configurable: true,
    enumerable: false,
    writable: true,
    value: val
  });
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  var type = typeof val;

  // primitivies
  if (type === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (type === 'string' || val instanceof String) {
    return 'string';
  }
  if (type === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (type === 'function' || val instanceof Function) {
    if (typeof val.constructor.name !== 'undefined' && val.constructor.name.slice(0, 9) === 'Generator') {
      return 'generatorfunction';
    }
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }
  if (type === '[object Promise]') {
    return 'promise';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }
  
  if (type === '[object Map Iterator]') {
    return 'mapiterator';
  }
  if (type === '[object Set Iterator]') {
    return 'setiterator';
  }
  if (type === '[object String Iterator]') {
    return 'stringiterator';
  }
  if (type === '[object Array Iterator]') {
    return 'arrayiterator';
  }
  
  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  return val.constructor
    && typeof val.constructor.isBuffer === 'function'
    && val.constructor.isBuffer(val);
}


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-accessor-descriptor <https://github.com/jonschlinkert/is-accessor-descriptor>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var typeOf = __webpack_require__(59);

// accessor descriptor properties
var accessor = {
  get: 'function',
  set: 'function',
  configurable: 'boolean',
  enumerable: 'boolean'
};

function isAccessorDescriptor(obj, prop) {
  if (typeof prop === 'string') {
    var val = Object.getOwnPropertyDescriptor(obj, prop);
    return typeof val !== 'undefined';
  }

  if (typeOf(obj) !== 'object') {
    return false;
  }

  if (has(obj, 'value') || has(obj, 'writable')) {
    return false;
  }

  if (!has(obj, 'get') || typeof obj.get !== 'function') {
    return false;
  }

  // tldr: it's valid to have "set" be undefined
  // "set" might be undefined if `Object.getOwnPropertyDescriptor`
  // was used to get the value, and only `get` was defined by the user
  if (has(obj, 'set') && typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
    return false;
  }

  for (var key in obj) {
    if (!accessor.hasOwnProperty(key)) {
      continue;
    }

    if (typeOf(obj[key]) === accessor[key]) {
      continue;
    }

    if (typeof obj[key] !== 'undefined') {
      return false;
    }
  }
  return true;
}

function has(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}

/**
 * Expose `isAccessorDescriptor`
 */

module.exports = isAccessorDescriptor;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var isBuffer = __webpack_require__(1);
var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  // primitivies
  if (typeof val === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (typeof val === 'string' || val instanceof String) {
    return 'string';
  }
  if (typeof val === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (typeof val === 'function' || val instanceof Function) {
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  var type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }

  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-data-descriptor <https://github.com/jonschlinkert/is-data-descriptor>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var typeOf = __webpack_require__(61);

// data descriptor properties
var data = {
  configurable: 'boolean',
  enumerable: 'boolean',
  writable: 'boolean'
};

function isDataDescriptor(obj, prop) {
  if (typeOf(obj) !== 'object') {
    return false;
  }

  if (typeof prop === 'string') {
    var val = Object.getOwnPropertyDescriptor(obj, prop);
    return typeof val !== 'undefined';
  }

  if (!('value' in obj) && !('writable' in obj)) {
    return false;
  }

  for (var key in obj) {
    if (key === 'value') continue;

    if (!data.hasOwnProperty(key)) {
      continue;
    }

    if (typeOf(obj[key]) === data[key]) {
      continue;
    }

    if (typeof obj[key] !== 'undefined') {
      return false;
    }
  }
  return true;
}

/**
 * Expose `isDataDescriptor`
 */

module.exports = isDataDescriptor;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var isBuffer = __webpack_require__(1);
var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  // primitivies
  if (typeof val === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (typeof val === 'string' || val instanceof String) {
    return 'string';
  }
  if (typeof val === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (typeof val === 'function' || val instanceof Function) {
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  var type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }

  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * static-extend <https://github.com/jonschlinkert/static-extend>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var copy = __webpack_require__(63);
var define = __webpack_require__(67);
var util = __webpack_require__(3);

/**
 * Returns a function for extending the static properties,
 * prototype properties, and descriptors from the `Parent`
 * constructor onto `Child` constructors.
 *
 * ```js
 * var extend = require('static-extend');
 * Parent.extend = extend(Parent);
 *
 * // optionally pass a custom merge function as the second arg
 * Parent.extend = extend(Parent, function(Child) {
 *   Child.prototype.mixin = function(key, val) {
 *     Child.prototype[key] = val;
 *   };
 * });
 *
 * // extend "child" constructors
 * Parent.extend(Child);
 *
 * // optionally define prototype methods as the second arg
 * Parent.extend(Child, {
 *   foo: function() {},
 *   bar: function() {}
 * });
 * ```
 * @param {Function} `Parent` Parent ctor
 * @param {Function} `extendFn` Optional extend function for handling any necessary custom merging. Useful when updating methods that require a specific prototype.
 *   @param {Function} `Child` Child ctor
 *   @param {Object} `proto` Optionally pass additional prototype properties to inherit.
 *   @return {Object}
 * @api public
 */

function extend(Parent, extendFn) {
  if (typeof Parent !== 'function') {
    throw new TypeError('expected Parent to be a function.');
  }

  return function(Ctor, proto) {
    if (typeof Ctor !== 'function') {
      throw new TypeError('expected Ctor to be a function.');
    }

    util.inherits(Ctor, Parent);
    copy(Ctor, Parent);

    // proto can be null or a plain object
    if (typeof proto === 'object') {
      var obj = Object.create(proto);

      for (var k in obj) {
        Ctor.prototype[k] = obj[k];
      }
    }

    // keep a reference to the parent prototype
    define(Ctor.prototype, '_parent_', {
      configurable: true,
      set: function() {},
      get: function() {
        return Parent.prototype;
      }
    });

    if (typeof extendFn === 'function') {
      extendFn(Ctor, Parent);
    }

    Ctor.extend = extend(Ctor, extendFn);
  };
};

/**
 * Expose `extend`
 */

module.exports = extend;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var typeOf = __webpack_require__(64);
var copyDescriptor = __webpack_require__(65);
var define = __webpack_require__(66);

/**
 * Copy static properties, prototype properties, and descriptors from one object to another.
 *
 * ```js
 * function App() {}
 * var proto = App.prototype;
 * App.prototype.set = function() {};
 * App.prototype.get = function() {};
 *
 * var obj = {};
 * copy(obj, proto);
 * ```
 * @param {Object} `receiver`
 * @param {Object} `provider`
 * @param {String|Array} `omit` One or more properties to omit
 * @return {Object}
 * @api public
 */

function copy(receiver, provider, omit) {
  if (!isObject(receiver)) {
    throw new TypeError('expected receiving object to be an object.');
  }
  if (!isObject(provider)) {
    throw new TypeError('expected providing object to be an object.');
  }

  var props = nativeKeys(provider);
  var keys = Object.keys(provider);
  var len = props.length;
  omit = arrayify(omit);

  while (len--) {
    var key = props[len];

    if (has(keys, key)) {
      define(receiver, key, provider[key]);
    } else if (!(key in receiver) && !has(omit, key)) {
      copyDescriptor(receiver, provider, key);
    }
  }
};

/**
 * Return true if the given value is an object or function
 */

function isObject(val) {
  return typeOf(val) === 'object' || typeof val === 'function';
}

/**
 * Returns true if an array has any of the given elements, or an
 * object has any of the give keys.
 *
 * ```js
 * has(['a', 'b', 'c'], 'c');
 * //=> true
 *
 * has(['a', 'b', 'c'], ['c', 'z']);
 * //=> true
 *
 * has({a: 'b', c: 'd'}, ['c', 'z']);
 * //=> true
 * ```
 * @param {Object} `obj`
 * @param {String|Array} `val`
 * @return {Boolean}
 */

function has(obj, val) {
  val = arrayify(val);
  var len = val.length;

  if (isObject(obj)) {
    for (var key in obj) {
      if (val.indexOf(key) > -1) {
        return true;
      }
    }

    var keys = nativeKeys(obj);
    return has(keys, val);
  }

  if (Array.isArray(obj)) {
    var arr = obj;
    while (len--) {
      if (arr.indexOf(val[len]) > -1) {
        return true;
      }
    }
    return false;
  }

  throw new TypeError('expected an array or object.');
}

/**
 * Cast the given value to an array.
 *
 * ```js
 * arrayify('foo');
 * //=> ['foo']
 *
 * arrayify(['foo']);
 * //=> ['foo']
 * ```
 *
 * @param {String|Array} `val`
 * @return {Array}
 */

function arrayify(val) {
  return val ? (Array.isArray(val) ? val : [val]) : [];
}

/**
 * Returns true if a value has a `contructor`
 *
 * ```js
 * hasConstructor({});
 * //=> true
 *
 * hasConstructor(Object.create(null));
 * //=> false
 * ```
 * @param  {Object} `value`
 * @return {Boolean}
 */

function hasConstructor(val) {
  return isObject(val) && typeof val.constructor !== 'undefined';
}

/**
 * Get the native `ownPropertyNames` from the constructor of the
 * given `object`. An empty array is returned if the object does
 * not have a constructor.
 *
 * ```js
 * nativeKeys({a: 'b', b: 'c', c: 'd'})
 * //=> ['a', 'b', 'c']
 *
 * nativeKeys(function(){})
 * //=> ['length', 'caller']
 * ```
 *
 * @param  {Object} `obj` Object that has a `constructor`.
 * @return {Array} Array of keys.
 */

function nativeKeys(val) {
  if (!hasConstructor(val)) return [];
  return Object.getOwnPropertyNames(val);
}

/**
 * Expose `copy`
 */

module.exports = copy;

/**
 * Expose `copy.has` for tests
 */

module.exports.has = has;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var isBuffer = __webpack_require__(1);
var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  // primitivies
  if (typeof val === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (typeof val === 'string' || val instanceof String) {
    return 'string';
  }
  if (typeof val === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (typeof val === 'function' || val instanceof Function) {
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  var type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }

  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * copy-descriptor <https://github.com/jonschlinkert/copy-descriptor>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



/**
 * Copy a descriptor from one object to another.
 *
 * ```js
 * function App() {
 *   this.cache = {};
 * }
 * App.prototype.set = function(key, val) {
 *   this.cache[key] = val;
 *   return this;
 * };
 * Object.defineProperty(App.prototype, 'count', {
 *   get: function() {
 *     return Object.keys(this.cache).length;
 *   }
 * });
 *
 * copy(App.prototype, 'count', 'len');
 *
 * // create an instance
 * var app = new App();
 *
 * app.set('a', true);
 * app.set('b', true);
 * app.set('c', true);
 *
 * console.log(app.count);
 * //=> 3
 * console.log(app.len);
 * //=> 3
 * ```
 * @name copy
 * @param {Object} `receiver` The target object
 * @param {Object} `provider` The provider object
 * @param {String} `from` The key to copy on provider.
 * @param {String} `to` Optionally specify a new key name to use.
 * @return {Object}
 * @api public
 */

module.exports = function copyDescriptor(receiver, provider, from, to) {
  if (!isObject(provider) && typeof provider !== 'function') {
    to = from;
    from = provider;
    provider = receiver;
  }
  if (!isObject(receiver) && typeof receiver !== 'function') {
    throw new TypeError('expected the first argument to be an object');
  }
  if (!isObject(provider) && typeof provider !== 'function') {
    throw new TypeError('expected provider to be an object');
  }

  if (typeof to !== 'string') {
    to = from;
  }
  if (typeof from !== 'string') {
    throw new TypeError('expected key to be a string');
  }

  if (!(from in provider)) {
    throw new Error('property "' + from + '" does not exist');
  }

  var val = Object.getOwnPropertyDescriptor(provider, from);
  if (val) Object.defineProperty(receiver, to, val);
};

function isObject(val) {
  return {}.toString.call(val) === '[object Object]';
}



/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * define-property <https://github.com/jonschlinkert/define-property>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var isDescriptor = __webpack_require__(10);

module.exports = function defineProperty(obj, prop, val) {
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    throw new TypeError('expected an object or function.');
  }

  if (typeof prop !== 'string') {
    throw new TypeError('expected `prop` to be a string.');
  }

  if (isDescriptor(val) && ('set' in val || 'get' in val)) {
    return Object.defineProperty(obj, prop, val);
  }

  return Object.defineProperty(obj, prop, {
    configurable: true,
    enumerable: false,
    writable: true,
    value: val
  });
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * define-property <https://github.com/jonschlinkert/define-property>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var isDescriptor = __webpack_require__(10);

module.exports = function defineProperty(obj, prop, val) {
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    throw new TypeError('expected an object or function.');
  }

  if (typeof prop !== 'string') {
    throw new TypeError('expected `prop` to be a string.');
  }

  if (isDescriptor(val) && ('set' in val || 'get' in val)) {
    return Object.defineProperty(obj, prop, val);
  }

  return Object.defineProperty(obj, prop, {
    configurable: true,
    enumerable: false,
    writable: true,
    value: val
  });
};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzb2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWV4dGVuZGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2V0LXZhbHVlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1wbGFpbi1vYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL21haW5wYWdlL3NjcmlwdHMvbWV0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL21haW5wYWdlL2xpYi9kcmF3L2Vhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbWFpbnBhZ2UvbGliL2RyYXcvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2luZC1vZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtZGVzY3JpcHRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC12aXNpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdG8tb2JqZWN0LXBhdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fyci11bmlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbWFpbnBhZ2Uvc2NyaXB0cy9tZXRlci9jb3VudERvd24uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL21haW5wYWdlL3NjcmlwdHMvbWV0ZXIvc3BlZWRvbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL21haW5wYWdlL3NjcmlwdHMvbWV0ZXIvaW5kaWNhdG9yLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9tYWlucGFnZS9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYXNlL25vZGVfbW9kdWxlcy9kZWZpbmUtcHJvcGVydHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jhc2Uvbm9kZV9tb2R1bGVzL2lzLWRlc2NyaXB0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jhc2Uvbm9kZV9tb2R1bGVzL2lzLWFjY2Vzc29yLWRlc2NyaXB0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jhc2Uvbm9kZV9tb2R1bGVzL2lzLWRhdGEtZGVzY3JpcHRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2FjaGUtYmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29sbGVjdGlvbi12aXNpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWFwLXZpc2l0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90by1vYmplY3QtcGF0aC9ub2RlX21vZHVsZXMva2luZC1vZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5pb24tdmFsdWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuaW9uLXZhbHVlL25vZGVfbW9kdWxlcy9zZXQtdmFsdWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuaW9uLXZhbHVlL25vZGVfbW9kdWxlcy9leHRlbmQtc2hhbGxvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5zZXQtdmFsdWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Vuc2V0LXZhbHVlL25vZGVfbW9kdWxlcy9oYXMtdmFsdWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Vuc2V0LXZhbHVlL25vZGVfbW9kdWxlcy9oYXMtdmFsdWUvbm9kZV9tb2R1bGVzL2lzb2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bnNldC12YWx1ZS9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5zZXQtdmFsdWUvbm9kZV9tb2R1bGVzL2hhcy12YWx1ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhcy12YWx1ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzLXZhbHVlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzLXZhbHVlcy9ub2RlX21vZHVsZXMva2luZC1vZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtbnVtYmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1udW1iZXIvbm9kZV9tb2R1bGVzL2tpbmQtb2YvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NldC12YWx1ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3BsaXQtc3RyaW5nL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9leHRlbmQtc2hhbGxvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXh0ZW5kLXNoYWxsb3cvbm9kZV9tb2R1bGVzL2lzLWV4dGVuZGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fzc2lnbi1zeW1ib2xzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXQtdmFsdWUvbm9kZV9tb2R1bGVzL2V4dGVuZC1zaGFsbG93L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taXhpbi1kZWVwL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taXhpbi1kZWVwL25vZGVfbW9kdWxlcy9pcy1leHRlbmRhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb3ItaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Bhc2NhbGNhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzLXV0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzcy11dGlscy9ub2RlX21vZHVsZXMvZGVmaW5lLXByb3BlcnR5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1kZXNjcmlwdG9yL25vZGVfbW9kdWxlcy9raW5kLW9mL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1hY2Nlc3Nvci1kZXNjcmlwdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1hY2Nlc3Nvci1kZXNjcmlwdG9yL25vZGVfbW9kdWxlcy9raW5kLW9mL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1kYXRhLWRlc2NyaXB0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWRhdGEtZGVzY3JpcHRvci9ub2RlX21vZHVsZXMva2luZC1vZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3RhdGljLWV4dGVuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWNvcHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1jb3B5L25vZGVfbW9kdWxlcy9raW5kLW9mL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3B5LWRlc2NyaXB0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1jb3B5L25vZGVfbW9kdWxlcy9kZWZpbmUtcHJvcGVydHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0YXRpYy1leHRlbmQvbm9kZV9tb2R1bGVzL2RlZmluZS1wcm9wZXJ0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbWFpbnBhZ2Uvc3R5bGVzaGVldHMvc3R5bGUuc2NzcyJdLCJuYW1lcyI6WyJlYXNpbmciLCJsaW5lYXIiLCJrIiwicXVhZHJhdGljSW4iLCJxdWFkcmF0aWNPdXQiLCJxdWFkcmF0aWNJbk91dCIsImN1YmljSW4iLCJjdWJpY091dCIsImN1YmljSW5PdXQiLCJxdWFydGljSW4iLCJxdWFydGljT3V0IiwicXVhcnRpY0luT3V0IiwicXVpbnRpY0luIiwicXVpbnRpY091dCIsInF1aW50aWNJbk91dCIsInNpbnVzb2lkYWxJbiIsIk1hdGgiLCJjb3MiLCJQSSIsInNpbnVzb2lkYWxPdXQiLCJzaW4iLCJzaW51c29pZGFsSW5PdXQiLCJleHBvbmVudGlhbEluIiwicG93IiwiZXhwb25lbnRpYWxPdXQiLCJleHBvbmVudGlhbEluT3V0IiwiY2lyY3VsYXJJbiIsInNxcnQiLCJjaXJjdWxhck91dCIsImNpcmN1bGFySW5PdXQiLCJlbGFzdGljSW4iLCJzIiwiYSIsInAiLCJhc2luIiwiZWxhc3RpY091dCIsImVsYXN0aWNJbk91dCIsImJhY2tJbiIsImJhY2tPdXQiLCJiYWNrSW5PdXQiLCJib3VuY2VJbiIsImVhc2luZ0Z1bmNzIiwiYm91bmNlT3V0IiwiYm91bmNlSW5PdXQiLCJjb25zb2xlIiwibG9nIiwiRHJhdyIsImN0eCIsIngxIiwieTEiLCJ4MiIsInkyIiwic3RvcExpc3QiLCJncmFkIiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJpIiwibGVuZ3RoIiwiYWRkQ29sb3JTdG9wIiwieCIsInkiLCJyIiwiY3JlYXRlQ2lyY3VsYXJHcmFkaWVudCIsInN0eWxlcyIsImtleSIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwibGluZUNhcCIsInNoYWRvd0NvbG9yIiwic2hhZG93T2Zmc2V0WCIsInNoYWRvd09mZnNldFkiLCJzZXRTaGFkb3ciLCJmb250IiwidGV4dEJhc2VsaW5lIiwidGV4dEFsaWduIiwib3B0IiwidHJhbnNsYXRlIiwicm90YXRlIiwic2hhcGUiLCJzYXZlIiwiX3NldFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwic2EiLCJlYSIsImNvdW50ZXJjbG9ja3dpc2UiLCJzdHJva2UiLCJyZXN0b3JlIiwiX3RyYW5zZm9ybSIsIm1vdmVUbyIsImxpbmVUbyIsIm1ldGhvZCIsImZpbGwiLCJvcHRpb24iLCJmaWxsVGV4dCIsInRleHQiLCJDb3VudERvd24iLCJ3IiwiaCIsInBhZGRpbmciLCJ3aWR0aCIsImhlaWdodCIsImZyYW1lV2lkdGgiLCJwcm9ncmVzc0NpcmNsZVdpZHRoIiwic3RhdGUiLCJjZW50ZXIiLCJmcmFtZVJhZGl1cyIsInByb2dyZXNzQ2lyY2xlUmFkaXVzIiwib3V0ZXJDaXJjbGVSYWRpdXMiLCJpbm5lckNpcmNsZVJhZGl1cyIsImxlZnRUb3AiLCJib3R0b21SaWdodCIsImdyYWRpZW50IiwiTGluZXJHcmFkaWVudCIsIkNpcmNsZSIsInByb2dyZXNzIiwidGFyZ2V0IiwiQXJjIiwiTGluZSIsInQiLCJwYXJzZUludCIsImNsZWFyUmVjdCIsImNhbnZhcyIsImJhY2tncm91bmQiLCJwcm9ncmVzc0NpcmNsZSIsInNjYWxlIiwib3V0ZXJDaXJjbGUiLCJpbm5lckNpcmNsZSIsImR1cmF0aW9uIiwiY2IiLCJjdXJyZW50VGltZSIsImRlbHRhIiwic3RhcnQiLCJEYXRlIiwiZ2V0VGltZSIsImZyYW1lIiwiZHJhdyIsInN0b3BlZCIsInNldFRpbWVvdXQiLCJTcGVlZG9tZXRlciIsIm5hbWUiLCJ1bml0IiwibWluIiwibWF4IiwiZGN0eCIsInJhZHVpcyIsInJhZGl1c0luZGljYXRvciIsImN1cnJlbnRBbmdsZSIsInByZXZpb3VzU3RvcCIsInByZXZpb3VzVmFsdWUiLCJ2YWx1ZSIsImN1cnJlbnRWYWx1ZSIsImludGVydmFsIiwiY2lyY2xlIiwicGxhdGUiLCJjZW50ZXJQbGF0ZSIsImluZGljYXRvciIsInYiLCJiYWNrZ3JhZGllbnQiLCJiYWNrZ3JhZGllbnQyIiwibm93VmFsdWUiLCJUZXh0Iiwic2V0VmFsdWUiLCJzdGFydEFuaW1hdGlvbiIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInN0b3AiLCJJbmRpY2F0b3IiLCJ0aXRsZSIsImNvbG9yIiwidGl0bGVXaWR0aCIsIm1lYXN1cmVUZXh0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsImNvdW50RG93biIsInNjdHgiLCJzcGVlZG9tZXRlciIsInJhbmRvbSIsImljdHgiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0QyxLQUFLOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG1CQUFPLENBQUMsRUFBb0I7O0FBRS9DO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyxFQUFVOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ3prQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixlQUFlLG1CQUFPLENBQUMsQ0FBVTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7QUNEQTtBQUFPLElBQU1BLE1BQU0sR0FBRztBQUNsQkMsUUFBTSxFQUFFLGdCQUFVQyxDQUFWLEVBQWE7QUFDakIsV0FBT0EsQ0FBUDtBQUNILEdBSGlCO0FBSWxCQyxhQUFXLEVBQUUscUJBQVVELENBQVYsRUFBYTtBQUN0QixXQUFPQSxDQUFDLEdBQUdBLENBQVg7QUFDSCxHQU5pQjtBQU9sQkUsY0FBWSxFQUFFLHNCQUFVRixDQUFWLEVBQWE7QUFDdkIsV0FBT0EsQ0FBQyxJQUFJLElBQUlBLENBQVIsQ0FBUjtBQUNILEdBVGlCO0FBVWxCRyxnQkFBYyxFQUFFLHdCQUFVSCxDQUFWLEVBQWE7QUFDekIsUUFBSSxDQUFDQSxDQUFDLElBQUksQ0FBTixJQUFXLENBQWYsRUFBa0I7QUFBRSxhQUFPLE1BQU1BLENBQU4sR0FBVUEsQ0FBakI7QUFBcUI7O0FBQ3pDLFdBQU8sQ0FBQyxHQUFELElBQVEsRUFBRUEsQ0FBRixJQUFPQSxDQUFDLEdBQUcsQ0FBWCxJQUFnQixDQUF4QixDQUFQO0FBQ0gsR0FiaUI7QUFjbEJJLFNBQU8sRUFBRSxpQkFBVUosQ0FBVixFQUFhO0FBQ2xCLFdBQU9BLENBQUMsR0FBR0EsQ0FBSixHQUFRQSxDQUFmO0FBQ0gsR0FoQmlCO0FBaUJsQkssVUFBUSxFQUFFLGtCQUFVTCxDQUFWLEVBQWE7QUFDbkIsV0FBTyxFQUFFQSxDQUFGLEdBQU1BLENBQU4sR0FBVUEsQ0FBVixHQUFjLENBQXJCO0FBQ0gsR0FuQmlCO0FBb0JsQk0sWUFBVSxFQUFFLG9CQUFVTixDQUFWLEVBQWE7QUFDckIsUUFBSSxDQUFDQSxDQUFDLElBQUksQ0FBTixJQUFXLENBQWYsRUFBa0I7QUFBRSxhQUFPLE1BQU1BLENBQU4sR0FBVUEsQ0FBVixHQUFjQSxDQUFyQjtBQUF5Qjs7QUFDN0MsV0FBTyxPQUFPLENBQUNBLENBQUMsSUFBSSxDQUFOLElBQVdBLENBQVgsR0FBZUEsQ0FBZixHQUFtQixDQUExQixDQUFQO0FBQ0gsR0F2QmlCO0FBd0JsQk8sV0FBUyxFQUFFLG1CQUFVUCxDQUFWLEVBQWE7QUFDcEIsV0FBT0EsQ0FBQyxHQUFHQSxDQUFKLEdBQVFBLENBQVIsR0FBWUEsQ0FBbkI7QUFDSCxHQTFCaUI7QUEyQmxCUSxZQUFVLEVBQUUsb0JBQVVSLENBQVYsRUFBYTtBQUNyQixXQUFPLElBQUssRUFBRUEsQ0FBRixHQUFNQSxDQUFOLEdBQVVBLENBQVYsR0FBY0EsQ0FBMUI7QUFDSCxHQTdCaUI7QUE4QmxCUyxjQUFZLEVBQUUsc0JBQVVULENBQVYsRUFBYTtBQUN2QixRQUFJLENBQUNBLENBQUMsSUFBSSxDQUFOLElBQVcsQ0FBZixFQUFrQjtBQUFFLGFBQU8sTUFBTUEsQ0FBTixHQUFVQSxDQUFWLEdBQWNBLENBQWQsR0FBa0JBLENBQXpCO0FBQTZCOztBQUNqRCxXQUFPLENBQUMsR0FBRCxJQUFRLENBQUNBLENBQUMsSUFBSSxDQUFOLElBQVdBLENBQVgsR0FBZUEsQ0FBZixHQUFtQkEsQ0FBbkIsR0FBdUIsQ0FBL0IsQ0FBUDtBQUNILEdBakNpQjtBQWtDbEJVLFdBQVMsRUFBRSxtQkFBVVYsQ0FBVixFQUFhO0FBQ3BCLFdBQU9BLENBQUMsR0FBR0EsQ0FBSixHQUFRQSxDQUFSLEdBQVlBLENBQVosR0FBZ0JBLENBQXZCO0FBQ0gsR0FwQ2lCO0FBcUNsQlcsWUFBVSxFQUFFLG9CQUFVWCxDQUFWLEVBQWE7QUFDckIsV0FBTyxFQUFFQSxDQUFGLEdBQU1BLENBQU4sR0FBVUEsQ0FBVixHQUFjQSxDQUFkLEdBQWtCQSxDQUFsQixHQUFzQixDQUE3QjtBQUNILEdBdkNpQjtBQXdDbEJZLGNBQVksRUFBRSxzQkFBVVosQ0FBVixFQUFhO0FBQ3ZCLFFBQUksQ0FBQ0EsQ0FBQyxJQUFJLENBQU4sSUFBVyxDQUFmLEVBQWtCO0FBQUUsYUFBTyxNQUFNQSxDQUFOLEdBQVVBLENBQVYsR0FBY0EsQ0FBZCxHQUFrQkEsQ0FBbEIsR0FBc0JBLENBQTdCO0FBQWlDOztBQUNyRCxXQUFPLE9BQU8sQ0FBQ0EsQ0FBQyxJQUFJLENBQU4sSUFBV0EsQ0FBWCxHQUFlQSxDQUFmLEdBQW1CQSxDQUFuQixHQUF1QkEsQ0FBdkIsR0FBMkIsQ0FBbEMsQ0FBUDtBQUNILEdBM0NpQjtBQTRDbEJhLGNBQVksRUFBRSxzQkFBVWIsQ0FBVixFQUFhO0FBQ3ZCLFdBQU8sSUFBSWMsSUFBSSxDQUFDQyxHQUFMLENBQVNmLENBQUMsR0FBR2MsSUFBSSxDQUFDRSxFQUFULEdBQWMsQ0FBdkIsQ0FBWDtBQUNILEdBOUNpQjtBQStDbEJDLGVBQWEsRUFBRSx1QkFBVWpCLENBQVYsRUFBYTtBQUN4QixXQUFPYyxJQUFJLENBQUNJLEdBQUwsQ0FBU2xCLENBQUMsR0FBR2MsSUFBSSxDQUFDRSxFQUFULEdBQWMsQ0FBdkIsQ0FBUDtBQUNILEdBakRpQjtBQWtEbEJHLGlCQUFlLEVBQUUseUJBQVVuQixDQUFWLEVBQWE7QUFDMUIsV0FBTyxPQUFPLElBQUljLElBQUksQ0FBQ0MsR0FBTCxDQUFTRCxJQUFJLENBQUNFLEVBQUwsR0FBVWhCLENBQW5CLENBQVgsQ0FBUDtBQUNILEdBcERpQjtBQXFEbEJvQixlQUFhLEVBQUUsdUJBQVVwQixDQUFWLEVBQWE7QUFDeEIsV0FBT0EsQ0FBQyxLQUFLLENBQU4sR0FBVSxDQUFWLEdBQWNjLElBQUksQ0FBQ08sR0FBTCxDQUFTLElBQVQsRUFBZXJCLENBQUMsR0FBRyxDQUFuQixDQUFyQjtBQUNILEdBdkRpQjtBQXdEbEJzQixnQkFBYyxFQUFFLHdCQUFVdEIsQ0FBVixFQUFhO0FBQ3pCLFdBQU9BLENBQUMsS0FBSyxDQUFOLEdBQVUsQ0FBVixHQUFjLElBQUljLElBQUksQ0FBQ08sR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFDLEVBQUQsR0FBTXJCLENBQWxCLENBQXpCO0FBQ0gsR0ExRGlCO0FBMkRsQnVCLGtCQUFnQixFQUFFLDBCQUFVdkIsQ0FBVixFQUFhO0FBQzNCLFFBQUlBLENBQUMsS0FBSyxDQUFWLEVBQWE7QUFDVCxhQUFPLENBQVA7QUFDSDs7QUFDRCxRQUFJQSxDQUFDLEtBQUssQ0FBVixFQUFhO0FBQ1QsYUFBTyxDQUFQO0FBQ0g7O0FBQ0QsUUFBSSxDQUFDQSxDQUFDLElBQUksQ0FBTixJQUFXLENBQWYsRUFBa0I7QUFDZCxhQUFPLE1BQU1jLElBQUksQ0FBQ08sR0FBTCxDQUFTLElBQVQsRUFBZXJCLENBQUMsR0FBRyxDQUFuQixDQUFiO0FBQ0g7O0FBQ0QsV0FBTyxPQUFPLENBQUNjLElBQUksQ0FBQ08sR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFDLEVBQUQsSUFBT3JCLENBQUMsR0FBRyxDQUFYLENBQVosQ0FBRCxHQUE4QixDQUFyQyxDQUFQO0FBQ0gsR0F0RWlCO0FBdUVsQndCLFlBQVUsRUFBRSxvQkFBVXhCLENBQVYsRUFBYTtBQUNyQixXQUFPLElBQUljLElBQUksQ0FBQ1csSUFBTCxDQUFVLElBQUl6QixDQUFDLEdBQUdBLENBQWxCLENBQVg7QUFDSCxHQXpFaUI7QUEwRWxCMEIsYUFBVyxFQUFFLHFCQUFVMUIsQ0FBVixFQUFhO0FBQ3RCLFdBQU9jLElBQUksQ0FBQ1csSUFBTCxDQUFVLElBQUssRUFBRXpCLENBQUYsR0FBTUEsQ0FBckIsQ0FBUDtBQUNILEdBNUVpQjtBQTZFbEIyQixlQUFhLEVBQUUsdUJBQVUzQixDQUFWLEVBQWE7QUFDeEIsUUFBSSxDQUFDQSxDQUFDLElBQUksQ0FBTixJQUFXLENBQWYsRUFBa0I7QUFBRSxhQUFPLENBQUMsR0FBRCxJQUFRYyxJQUFJLENBQUNXLElBQUwsQ0FBVSxJQUFJekIsQ0FBQyxHQUFHQSxDQUFsQixJQUF1QixDQUEvQixDQUFQO0FBQTJDOztBQUMvRCxXQUFPLE9BQU9jLElBQUksQ0FBQ1csSUFBTCxDQUFVLElBQUksQ0FBQ3pCLENBQUMsSUFBSSxDQUFOLElBQVdBLENBQXpCLElBQThCLENBQXJDLENBQVA7QUFDSCxHQWhGaUI7QUFpRmxCNEIsV0FBUyxFQUFFLG1CQUFVNUIsQ0FBVixFQUFhO0FBQ3BCLFFBQUk2QixDQUFKO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHLEdBQVI7QUFDQSxRQUFJQyxDQUFDLEdBQUcsR0FBUjs7QUFDQSxRQUFJL0IsQ0FBQyxLQUFLLENBQVYsRUFBYTtBQUFFLGFBQU8sQ0FBUDtBQUFXOztBQUMxQixRQUFJQSxDQUFDLEtBQUssQ0FBVixFQUFhO0FBQUUsYUFBTyxDQUFQO0FBQVc7O0FBQzFCLFFBQUksQ0FBQzhCLENBQUQsSUFBTUEsQ0FBQyxHQUFHLENBQWQsRUFBaUI7QUFBRUEsT0FBQyxHQUFHLENBQUo7QUFBT0QsT0FBQyxHQUFHRSxDQUFDLEdBQUcsQ0FBUjtBQUFZLEtBQXRDLE1BQ0s7QUFBRUYsT0FBQyxHQUFHRSxDQUFDLEdBQUdqQixJQUFJLENBQUNrQixJQUFMLENBQVUsSUFBSUYsQ0FBZCxDQUFKLElBQXdCLElBQUloQixJQUFJLENBQUNFLEVBQWpDLENBQUo7QUFBMkM7O0FBQ2xELFdBQU8sRUFBRWMsQ0FBQyxHQUFHaEIsSUFBSSxDQUFDTyxHQUFMLENBQVMsQ0FBVCxFQUFZLE1BQU1yQixDQUFDLElBQUksQ0FBWCxDQUFaLENBQUosR0FBaUNjLElBQUksQ0FBQ0ksR0FBTCxDQUFTLENBQUNsQixDQUFDLEdBQUc2QixDQUFMLEtBQVcsSUFBSWYsSUFBSSxDQUFDRSxFQUFwQixJQUEwQmUsQ0FBbkMsQ0FBbkMsQ0FBUDtBQUNILEdBMUZpQjtBQTJGbEJFLFlBQVUsRUFBRSxvQkFBVWpDLENBQVYsRUFBYTtBQUNyQixRQUFJNkIsQ0FBSjtBQUNBLFFBQUlDLENBQUMsR0FBRyxHQUFSO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHLEdBQVI7O0FBQ0EsUUFBSS9CLENBQUMsS0FBSyxDQUFWLEVBQWE7QUFBRSxhQUFPLENBQVA7QUFBVzs7QUFDMUIsUUFBSUEsQ0FBQyxLQUFLLENBQVYsRUFBYTtBQUFFLGFBQU8sQ0FBUDtBQUFXOztBQUMxQixRQUFJLENBQUM4QixDQUFELElBQU1BLENBQUMsR0FBRyxDQUFkLEVBQWlCO0FBQUVBLE9BQUMsR0FBRyxDQUFKO0FBQU9ELE9BQUMsR0FBR0UsQ0FBQyxHQUFHLENBQVI7QUFBWSxLQUF0QyxNQUNLO0FBQUVGLE9BQUMsR0FBR0UsQ0FBQyxHQUFHakIsSUFBSSxDQUFDa0IsSUFBTCxDQUFVLElBQUlGLENBQWQsQ0FBSixJQUF3QixJQUFJaEIsSUFBSSxDQUFDRSxFQUFqQyxDQUFKO0FBQTJDOztBQUNsRCxXQUFRYyxDQUFDLEdBQUdoQixJQUFJLENBQUNPLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQyxFQUFELEdBQU1yQixDQUFsQixDQUFKLEdBQTJCYyxJQUFJLENBQUNJLEdBQUwsQ0FBUyxDQUFDbEIsQ0FBQyxHQUFHNkIsQ0FBTCxLQUFXLElBQUlmLElBQUksQ0FBQ0UsRUFBcEIsSUFBMEJlLENBQW5DLENBQTNCLEdBQW1FLENBQTNFO0FBQ0gsR0FwR2lCO0FBcUdsQkcsY0FBWSxFQUFFLHNCQUFVbEMsQ0FBVixFQUFhO0FBQ3ZCLFFBQUk2QixDQUFKO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHLEdBQVI7QUFDQSxRQUFJQyxDQUFDLEdBQUcsR0FBUjs7QUFDQSxRQUFJL0IsQ0FBQyxLQUFLLENBQVYsRUFBYTtBQUFFLGFBQU8sQ0FBUDtBQUFXOztBQUMxQixRQUFJQSxDQUFDLEtBQUssQ0FBVixFQUFhO0FBQUUsYUFBTyxDQUFQO0FBQVc7O0FBQzFCLFFBQUksQ0FBQzhCLENBQUQsSUFBTUEsQ0FBQyxHQUFHLENBQWQsRUFBaUI7QUFBRUEsT0FBQyxHQUFHLENBQUo7QUFBT0QsT0FBQyxHQUFHRSxDQUFDLEdBQUcsQ0FBUjtBQUFZLEtBQXRDLE1BQ0s7QUFBRUYsT0FBQyxHQUFHRSxDQUFDLEdBQUdqQixJQUFJLENBQUNrQixJQUFMLENBQVUsSUFBSUYsQ0FBZCxDQUFKLElBQXdCLElBQUloQixJQUFJLENBQUNFLEVBQWpDLENBQUo7QUFBMkM7O0FBQ2xELFFBQUksQ0FBQ2hCLENBQUMsSUFBSSxDQUFOLElBQVcsQ0FBZixFQUFrQjtBQUNkLGFBQU8sQ0FBQyxHQUFELElBQVE4QixDQUFDLEdBQUdoQixJQUFJLENBQUNPLEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBTXJCLENBQUMsSUFBSSxDQUFYLENBQVosQ0FBSixHQUFpQ2MsSUFBSSxDQUFDSSxHQUFMLENBQVMsQ0FBQ2xCLENBQUMsR0FBRzZCLENBQUwsS0FBVyxJQUFJZixJQUFJLENBQUNFLEVBQXBCLElBQTBCZSxDQUFuQyxDQUF6QyxDQUFQO0FBQ0g7O0FBQ0QsV0FBT0QsQ0FBQyxHQUFHaEIsSUFBSSxDQUFDTyxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUMsRUFBRCxJQUFPckIsQ0FBQyxJQUFJLENBQVosQ0FBWixDQUFKLEdBQWtDYyxJQUFJLENBQUNJLEdBQUwsQ0FBUyxDQUFDbEIsQ0FBQyxHQUFHNkIsQ0FBTCxLQUFXLElBQUlmLElBQUksQ0FBQ0UsRUFBcEIsSUFBMEJlLENBQW5DLENBQWxDLEdBQTBFLEdBQTFFLEdBQWdGLENBQXZGO0FBRUgsR0FsSGlCO0FBb0hsQjtBQUNBSSxRQUFNLEVBQUUsZ0JBQVVuQyxDQUFWLEVBQWE7QUFDakIsUUFBSTZCLENBQUMsR0FBRyxPQUFSO0FBQ0EsV0FBTzdCLENBQUMsR0FBR0EsQ0FBSixJQUFTLENBQUM2QixDQUFDLEdBQUcsQ0FBTCxJQUFVN0IsQ0FBVixHQUFjNkIsQ0FBdkIsQ0FBUDtBQUNILEdBeEhpQjtBQXlIbEJPLFNBQU8sRUFBRSxpQkFBVXBDLENBQVYsRUFBYTtBQUNsQixRQUFJNkIsQ0FBQyxHQUFHLE9BQVI7QUFDQSxXQUFPLEVBQUU3QixDQUFGLEdBQU1BLENBQU4sSUFBVyxDQUFDNkIsQ0FBQyxHQUFHLENBQUwsSUFBVTdCLENBQVYsR0FBYzZCLENBQXpCLElBQThCLENBQXJDO0FBQ0gsR0E1SGlCO0FBNkhsQlEsV0FBUyxFQUFFLG1CQUFVckMsQ0FBVixFQUFhO0FBQ3BCLFFBQUk2QixDQUFDLEdBQUcsVUFBVSxLQUFsQjs7QUFDQSxRQUFJLENBQUM3QixDQUFDLElBQUksQ0FBTixJQUFXLENBQWYsRUFBa0I7QUFBRSxhQUFPLE9BQU9BLENBQUMsR0FBR0EsQ0FBSixJQUFTLENBQUM2QixDQUFDLEdBQUcsQ0FBTCxJQUFVN0IsQ0FBVixHQUFjNkIsQ0FBdkIsQ0FBUCxDQUFQO0FBQTJDOztBQUMvRCxXQUFPLE9BQU8sQ0FBQzdCLENBQUMsSUFBSSxDQUFOLElBQVdBLENBQVgsSUFBZ0IsQ0FBQzZCLENBQUMsR0FBRyxDQUFMLElBQVU3QixDQUFWLEdBQWM2QixDQUE5QixJQUFtQyxDQUExQyxDQUFQO0FBQ0gsR0FqSWlCO0FBbUlsQjtBQUNBUyxVQUFRLEVBQUUsa0JBQVV0QyxDQUFWLEVBQWE7QUFDbkIsV0FBTyxJQUFJdUMsV0FBVyxDQUFDQyxTQUFaLENBQXNCLElBQUl4QyxDQUExQixDQUFYO0FBQ0gsR0F0SWlCO0FBdUlsQndDLFdBQVMsRUFBRSxtQkFBVXhDLENBQVYsRUFBYTtBQUNwQixRQUFJQSxDQUFDLEdBQUksSUFBSSxJQUFiLEVBQW9CO0FBQUUsYUFBTyxTQUFTQSxDQUFULEdBQWFBLENBQXBCO0FBQXdCLEtBQTlDLE1BQ0ssSUFBSUEsQ0FBQyxHQUFJLElBQUksSUFBYixFQUFvQjtBQUFFLGFBQU8sVUFBVUEsQ0FBQyxJQUFLLE1BQU0sSUFBdEIsSUFBK0JBLENBQS9CLEdBQW1DLElBQTFDO0FBQWlELEtBQXZFLE1BQ0EsSUFBSUEsQ0FBQyxHQUFJLE1BQU0sSUFBZixFQUFzQjtBQUFFLGFBQU8sVUFBVUEsQ0FBQyxJQUFLLE9BQU8sSUFBdkIsSUFBZ0NBLENBQWhDLEdBQW9DLE1BQTNDO0FBQW9ELEtBQTVFLE1BQ0E7QUFBRSxhQUFPLFVBQVVBLENBQUMsSUFBSyxRQUFRLElBQXhCLElBQWlDQSxDQUFqQyxHQUFxQyxRQUE1QztBQUF1RDtBQUNqRSxHQTVJaUI7QUE2SWxCeUMsYUFBVyxFQUFFLHFCQUFVekMsQ0FBVixFQUFhO0FBQ3RCLFFBQUlBLENBQUMsR0FBRyxHQUFSLEVBQWE7QUFBRSxhQUFPdUMsV0FBVyxDQUFDRCxRQUFaLENBQXFCdEMsQ0FBQyxHQUFHLENBQXpCLElBQThCLEdBQXJDO0FBQTJDOztBQUMxRCxXQUFPdUMsV0FBVyxDQUFDQyxTQUFaLENBQXNCeEMsQ0FBQyxHQUFHLENBQUosR0FBUSxDQUE5QixJQUFtQyxHQUFuQyxHQUF5QyxHQUFoRDtBQUNIO0FBaEppQixDQUFmLEM7Ozs7Ozs7Ozs7Ozs7O0FDQVAwQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNPLElBQU1DLElBQWI7QUFBQTtBQUFBO0FBQ0UsZ0JBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFDZixTQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDRDs7QUFISDtBQUFBO0FBQUEsa0NBS2dCQyxFQUxoQixFQUtvQkMsRUFMcEIsRUFLd0JDLEVBTHhCLEVBSzRCQyxFQUw1QixFQUtnQ0MsUUFMaEMsRUFLMEM7QUFDdEMsVUFBSUwsR0FBRyxHQUFHLEtBQUtBLEdBQWY7QUFDQSxVQUFJTSxJQUFJLEdBQUdOLEdBQUcsQ0FBQ08sb0JBQUosQ0FBeUJOLEVBQXpCLEVBQTZCQyxFQUE3QixFQUFpQ0MsRUFBakMsRUFBcUNDLEVBQXJDLENBQVg7O0FBQ0EsV0FBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDRixZQUFJLENBQUNJLFlBQUwsQ0FBa0JMLFFBQVEsQ0FBQ0csQ0FBRCxDQUFSLENBQVksQ0FBWixDQUFsQixFQUFrQ0gsUUFBUSxDQUFDRyxDQUFELENBQVIsQ0FBWSxDQUFaLENBQWxDO0FBQ0Q7O0FBQ0QsYUFBT0YsSUFBUDtBQUNEO0FBWkg7QUFBQTtBQUFBLHFDQWNtQkssQ0FkbkIsRUFjc0JDLENBZHRCLEVBY3lCQyxDQWR6QixFQWM0QlIsUUFkNUIsRUFjc0M7QUFDbEMsVUFBSUwsR0FBRyxHQUFHLEtBQUtBLEdBQWY7QUFDQSxVQUFJTSxJQUFJLEdBQUdOLEdBQUcsQ0FBQ2Msc0JBQUosQ0FBMkJILENBQTNCLEVBQThCQyxDQUE5QixFQUFpQ0MsQ0FBakMsQ0FBWDs7QUFDQSxXQUFLLElBQUlMLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILFFBQVEsQ0FBQ0ksTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBMEM7QUFDeENGLFlBQUksQ0FBQ0ksWUFBTCxDQUFrQkwsUUFBUSxDQUFDRyxDQUFELENBQVIsQ0FBWSxDQUFaLENBQWxCLEVBQWtDSCxRQUFRLENBQUNHLENBQUQsQ0FBUixDQUFZLENBQVosQ0FBbEM7QUFDRDs7QUFDRCxhQUFPRixJQUFQO0FBQ0Q7QUFyQkg7QUFBQTtBQUFBLDhCQXVCWVMsTUF2QlosRUF1Qm9CO0FBQ2hCLFVBQUlmLEdBQUcsR0FBRyxLQUFLQSxHQUFmOztBQUNBLFVBQUllLE1BQUosRUFBWTtBQUNWLGFBQUssSUFBSUMsR0FBVCxJQUFnQkQsTUFBaEIsRUFBd0I7QUFDdEIsa0JBQVFDLEdBQVI7QUFDRSxpQkFBSyxNQUFMO0FBQWE7QUFDWGhCLG1CQUFHLENBQUNpQixTQUFKLEdBQWdCRixNQUFNLENBQUNDLEdBQUQsQ0FBdEI7QUFDQTtBQUNEOztBQUNELGlCQUFLLGFBQUw7QUFBb0I7QUFDbEJoQixtQkFBRyxDQUFDa0IsV0FBSixHQUFrQkgsTUFBTSxDQUFDQyxHQUFELENBQXhCO0FBQ0E7QUFDRDs7QUFDRCxpQkFBSyxXQUFMO0FBQWtCO0FBQ2hCaEIsbUJBQUcsQ0FBQ21CLFNBQUosR0FBZ0JKLE1BQU0sQ0FBQ0MsR0FBRCxDQUF0QjtBQUNBO0FBQ0Q7O0FBQ0QsaUJBQUssU0FBTDtBQUFnQjtBQUNkaEIsbUJBQUcsQ0FBQ29CLE9BQUosR0FBY0wsTUFBTSxDQUFDQyxHQUFELENBQXBCO0FBQ0E7QUFDRDs7QUFDRCxpQkFBSyxhQUFMO0FBQW9CO0FBQ2xCaEIsbUJBQUcsQ0FBQ3FCLFdBQUosR0FBa0JOLE1BQU0sQ0FBQ0MsR0FBRCxDQUF4QjtBQUNBO0FBQ0Q7O0FBQ0QsaUJBQUssZUFBTDtBQUFzQjtBQUNwQmhCLG1CQUFHLENBQUNzQixhQUFKLEdBQW9CUCxNQUFNLENBQUNDLEdBQUQsQ0FBMUI7QUFDQTtBQUNEOztBQUNELGlCQUFLLGVBQUw7QUFBc0I7QUFDcEJoQixtQkFBRyxDQUFDdUIsYUFBSixHQUFvQlIsTUFBTSxDQUFDQyxHQUFELENBQTFCO0FBQ0E7QUFDRDs7QUFDRCxpQkFBSyxXQUFMO0FBQWtCO0FBQ2hCaEIsbUJBQUcsQ0FBQ3dCLFNBQUosQ0FBY1QsTUFBTSxDQUFDQyxHQUFELENBQU4sQ0FBWSxDQUFaLENBQWQsRUFBOEJELE1BQU0sQ0FBQ0MsR0FBRCxDQUFOLENBQVksQ0FBWixDQUE5QixFQUE4Q0QsTUFBTSxDQUFDQyxHQUFELENBQU4sQ0FBWSxDQUFaLENBQTlDLEVBQThERCxNQUFNLENBQUNDLEdBQUQsQ0FBTixDQUFZLENBQVosQ0FBOUQ7QUFDQTtBQUNEOztBQUNELGlCQUFLLE1BQUw7QUFBYTtBQUNYaEIsbUJBQUcsQ0FBQ3lCLElBQUosR0FBV1YsTUFBTSxDQUFDQyxHQUFELENBQWpCO0FBQ0E7QUFDRDs7QUFDRCxpQkFBSyxjQUFMO0FBQXFCO0FBQ25CaEIsbUJBQUcsQ0FBQzBCLFlBQUosR0FBbUJYLE1BQU0sQ0FBQ0MsR0FBRCxDQUF6QjtBQUNBO0FBQ0Q7O0FBQ0QsaUJBQUssV0FBTDtBQUFrQjtBQUNoQmhCLG1CQUFHLENBQUMyQixTQUFKLEdBQWdCWixNQUFNLENBQUNDLEdBQUQsQ0FBdEI7QUFDQTtBQUNEO0FBNUNIO0FBOENEO0FBQ0Y7QUFDRjtBQTNFSDtBQUFBO0FBQUEsK0JBNkVhWSxHQTdFYixFQTZFa0I7QUFDZCxVQUFJNUIsR0FBRyxHQUFHLEtBQUtBLEdBQWY7O0FBQ0EsV0FBSyxJQUFJZ0IsR0FBVCxJQUFnQlksR0FBaEIsRUFBcUI7QUFDbkIsZ0JBQVFaLEdBQVI7QUFDRSxlQUFLLFdBQUw7QUFBa0I7QUFDaEJoQixpQkFBRyxDQUFDNkIsU0FBSixDQUFjRCxHQUFHLENBQUNaLEdBQUQsQ0FBSCxDQUFTLENBQVQsQ0FBZCxFQUEyQlksR0FBRyxDQUFDWixHQUFELENBQUgsQ0FBUyxDQUFULENBQTNCO0FBQ0E7QUFDRDs7QUFDRCxlQUFLLFFBQUw7QUFBZTtBQUNiaEIsaUJBQUcsQ0FBQzhCLE1BQUosQ0FBV0YsR0FBRyxDQUFDWixHQUFELENBQWQ7QUFDRDtBQVBIO0FBU0Q7QUFDRjtBQTFGSDtBQUFBO0FBQUEsd0JBNEZNWSxHQTVGTixFQTRGVztBQUNQLFVBQU01QixHQUFHLEdBQUcsS0FBS0EsR0FBakI7QUFDQSxVQUFJK0IsS0FBSyxHQUFHSCxHQUFHLENBQUNHLEtBQWhCO0FBQUEsVUFDRWhCLE1BQU0sR0FBR2EsR0FBRyxDQUFDYixNQURmO0FBR0FmLFNBQUcsQ0FBQ2dDLElBQUo7O0FBRUEsV0FBS0MsU0FBTCxDQUFlbEIsTUFBZjs7QUFFQWYsU0FBRyxDQUFDa0MsU0FBSjtBQUNBbEMsU0FBRyxDQUFDbUMsR0FBSixDQUFRSixLQUFLLENBQUNwQixDQUFkLEVBQWlCb0IsS0FBSyxDQUFDbkIsQ0FBdkIsRUFBMEJtQixLQUFLLENBQUNsQixDQUFoQyxFQUFtQ2tCLEtBQUssQ0FBQ0ssRUFBekMsRUFBNkNMLEtBQUssQ0FBQ00sRUFBbkQsRUFBdUROLEtBQUssQ0FBQ08sZ0JBQTdEO0FBQ0F0QyxTQUFHLENBQUN1QyxNQUFKO0FBRUF2QyxTQUFHLENBQUN3QyxPQUFKO0FBQ0Q7QUExR0g7QUFBQTtBQUFBLHlCQTRHT1osR0E1R1AsRUE0R1k7QUFDUixVQUFNNUIsR0FBRyxHQUFHLEtBQUtBLEdBQWpCO0FBQ0EsVUFBSStCLEtBQUssR0FBR0gsR0FBRyxDQUFDRyxLQUFoQjtBQUFBLFVBQ0VoQixNQUFNLEdBQUdhLEdBQUcsQ0FBQ2IsTUFEZjtBQUdBZixTQUFHLENBQUNnQyxJQUFKOztBQUVBLFdBQUtDLFNBQUwsQ0FBZWxCLE1BQWY7O0FBQ0EsV0FBSzBCLFVBQUwsQ0FBZ0JiLEdBQWhCOztBQUVBNUIsU0FBRyxDQUFDa0MsU0FBSjtBQUNBbEMsU0FBRyxDQUFDMEMsTUFBSixDQUFXWCxLQUFLLENBQUM5QixFQUFqQixFQUFxQjhCLEtBQUssQ0FBQzdCLEVBQTNCO0FBQ0FGLFNBQUcsQ0FBQzJDLE1BQUosQ0FBV1osS0FBSyxDQUFDNUIsRUFBakIsRUFBcUI0QixLQUFLLENBQUMzQixFQUEzQjtBQUNBSixTQUFHLENBQUN1QyxNQUFKO0FBRUF2QyxTQUFHLENBQUN3QyxPQUFKO0FBQ0Q7QUE1SEg7QUFBQTtBQUFBLDJCQThIU1osR0E5SFQsRUE4SGNnQixNQTlIZCxFQThIc0I7QUFDbEIsVUFBTTVDLEdBQUcsR0FBRyxLQUFLQSxHQUFqQjtBQUNBLFVBQUkrQixLQUFLLEdBQUdILEdBQUcsQ0FBQ0csS0FBaEI7QUFBQSxVQUNFaEIsTUFBTSxHQUFHYSxHQUFHLENBQUNiLE1BRGY7QUFHQWYsU0FBRyxDQUFDZ0MsSUFBSjs7QUFFQSxXQUFLQyxTQUFMLENBQWVsQixNQUFmOztBQUVBZixTQUFHLENBQUNrQyxTQUFKO0FBQ0FsQyxTQUFHLENBQUNtQyxHQUFKLENBQVFKLEtBQUssQ0FBQ3BCLENBQWQsRUFBaUJvQixLQUFLLENBQUNuQixDQUF2QixFQUEwQm1CLEtBQUssQ0FBQ2xCLENBQWhDLEVBQW1Da0IsS0FBSyxDQUFDSyxFQUFOLElBQVksQ0FBL0MsRUFBa0RMLEtBQUssQ0FBQ00sRUFBTixJQUFZcEUsSUFBSSxDQUFDRSxFQUFMLEdBQVUsQ0FBeEU7QUFFQXlFLFlBQU0sSUFBSUEsTUFBTSxJQUFJLE1BQXBCLElBQThCNUMsR0FBRyxDQUFDNkMsSUFBSixFQUE5QjtBQUNBRCxZQUFNLElBQUlBLE1BQU0sSUFBSSxRQUFwQixJQUFnQzVDLEdBQUcsQ0FBQ3VDLE1BQUosRUFBaEM7O0FBQ0EsVUFBSUssTUFBTSxJQUFJLEtBQWQsRUFBcUI7QUFDbkI1QyxXQUFHLENBQUM2QyxJQUFKO0FBQ0E3QyxXQUFHLENBQUN1QyxNQUFKO0FBQ0Q7O0FBRUR2QyxTQUFHLENBQUN3QyxPQUFKO0FBQ0Q7QUFsSkg7QUFBQTtBQUFBLHlCQW9KT00sTUFwSlAsRUFvSmU7QUFDWCxVQUFJOUMsR0FBRyxHQUFHLEtBQUtBLEdBQWY7QUFBQSxVQUNFZSxNQUFNLEdBQUcrQixNQUFNLENBQUMvQixNQURsQjtBQUdBZixTQUFHLENBQUNnQyxJQUFKOztBQUNBLFdBQUtDLFNBQUwsQ0FBZWxCLE1BQWY7O0FBQ0EsV0FBSzBCLFVBQUwsQ0FBZ0JLLE1BQWhCLEVBTlcsQ0FRWDtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE5QyxTQUFHLENBQUMrQyxRQUFKLENBQWFELE1BQU0sQ0FBQ0UsSUFBcEIsRUFBMEJGLE1BQU0sQ0FBQ25DLENBQWpDLEVBQW9DbUMsTUFBTSxDQUFDbEMsQ0FBM0M7QUFFQVosU0FBRyxDQUFDd0MsT0FBSjtBQUNEO0FBcEtIOztBQUFBO0FBQUEsSTs7Ozs7O0FDREE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixhQUFhLG1CQUFPLENBQUMsRUFBUztBQUM5QixpQkFBaUIsbUJBQU8sQ0FBQyxFQUF3QjtBQUNqRCxhQUFhLG1CQUFPLENBQUMsRUFBb0I7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyQmE7O0FBRWIsV0FBVyxtQkFBTyxDQUFDLENBQU07QUFDekIsYUFBYSxtQkFBTyxDQUFDLEVBQWlCO0FBQ3RDLGdCQUFnQixtQkFBTyxDQUFDLEVBQVk7QUFDcEMsY0FBYyxtQkFBTyxDQUFDLEVBQW1CO0FBQ3pDLGVBQWUsbUJBQU8sQ0FBQyxDQUFVO0FBQ2pDLFlBQVksbUJBQU8sQ0FBQyxFQUFZO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyxFQUFZO0FBQ2pDLFNBQVMsbUJBQU8sQ0FBQyxFQUFhOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsWUFBWSxHQUFHLFVBQVU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQjtBQUNBLG1DQUFtQztBQUNuQyxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSxnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixjQUFjLE9BQU87QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxJQUFJO0FBQ2pCLGNBQWMsT0FBTztBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLGFBQWE7QUFDMUIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWMsT0FBTztBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsTUFBTTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWMsT0FBTztBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWMsT0FBTztBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLHdFQUF3RSxTQUFTO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsYUFBYSxTQUFTO0FBQ3RCLGNBQWMsT0FBTztBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDamJBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLElBQTZCO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxNQUFNO0FBQ2pCLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLFNBQVM7QUFDcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixlQUFlLG1CQUFPLENBQUMsQ0FBVTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLGFBQWEsbUJBQU8sQ0FBQyxFQUFTOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixnQkFBZ0I7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUVPLElBQU1TLFNBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0UscUJBQVlqRCxHQUFaLEVBQWlCa0QsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCQyxPQUF2QixFQUFnQztBQUFBOztBQUFBOztBQUM5QixtRkFBTXBELEdBQU47QUFDQSxVQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxVQUFLcUQsS0FBTCxHQUFhSCxDQUFiO0FBQ0EsVUFBS0ksTUFBTCxHQUFjSCxDQUFkO0FBQ0EsVUFBS0MsT0FBTCxHQUFlQSxPQUFmO0FBRUEsUUFBSUcsVUFBVSxHQUFHLENBQWpCO0FBQ0EsUUFBSUMsbUJBQW1CLEdBQUcsRUFBMUI7QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEosV0FBSyxFQUFFSCxDQURJO0FBRVhFLGFBQU8sRUFBRUEsT0FGRTtBQUdYTSxZQUFNLEVBQUUsQ0FBQ1IsQ0FBQyxHQUFHLENBQUwsRUFBUUMsQ0FBQyxHQUFHLENBQVosQ0FIRztBQUlYSSxnQkFBVSxFQUFFQSxVQUpEO0FBS1hJLGlCQUFXLEVBQUVULENBQUMsR0FBQyxDQUFGLEdBQUtFLE9BQUwsR0FBZUcsVUFBVSxHQUFDLENBTDVCO0FBTVhDLHlCQUFtQixFQUFFQSxtQkFOVjtBQU9YSSwwQkFBb0IsRUFBRVYsQ0FBQyxHQUFHLENBQUosR0FBUUUsT0FBUixHQUFrQkcsVUFBbEIsR0FBK0JDLG1CQUFtQixHQUFHLENBUGhFO0FBUVhLLHVCQUFpQixFQUFFWCxDQUFDLEdBQUcsQ0FBSixHQUFRRSxPQUFSLEdBQWtCRyxVQUFsQixHQUErQkMsbUJBUnZDO0FBU1hNLHVCQUFpQixFQUFFWixDQUFDLEdBQUcsQ0FBSixHQUFRRSxPQUFSLEdBQWtCRyxVQUFsQixHQUErQkMsbUJBQS9CLEdBQXFEO0FBVDdELEtBQWI7QUFWOEI7QUFxQi9COztBQXRCSDtBQUFBO0FBQUEsa0NBd0JnQjtBQUFBLHdCQUN5RSxLQUFLQyxLQUQ5RTtBQUFBLFVBQ0xKLEtBREssZUFDTEEsS0FESztBQUFBLFVBQ0VLLE1BREYsZUFDRUEsTUFERjtBQUFBLFVBQ1VHLGlCQURWLGVBQ1VBLGlCQURWO0FBQUEsVUFDNkJMLG1CQUQ3QixlQUM2QkEsbUJBRDdCO0FBQUEsVUFDa0RELFVBRGxELGVBQ2tEQSxVQURsRDtBQUFBLFVBQzhESCxPQUQ5RCxlQUM4REEsT0FEOUQ7QUFFWixVQUFJVyxPQUFPLEdBQUdYLE9BQU8sR0FBR0ksbUJBQVYsR0FBZ0NELFVBQTlDO0FBQ0EsVUFBSVMsV0FBVyxHQUFHWCxLQUFLLEdBQUdELE9BQVIsR0FBa0JJLG1CQUFsQixHQUF3Q0QsVUFBMUQ7QUFFQSxVQUFJVSxRQUFRLEdBQUcsS0FBS0MsYUFBTCxDQUFtQkgsT0FBbkIsRUFBNEJBLE9BQTVCLEVBQXFDQyxXQUFyQyxFQUFrREEsV0FBbEQsRUFBK0QsQ0FBQyxDQUFDLENBQUQsRUFBSSxTQUFKLENBQUQsRUFBaUIsQ0FBQyxDQUFELEVBQUksU0FBSixDQUFqQixDQUEvRCxDQUFmLENBTFksQ0FNWjs7QUFDQSxXQUFLRyxNQUFMLENBQVk7QUFDVnBDLGFBQUssRUFBRTtBQUNMcEIsV0FBQyxFQUFFLEtBQUswQyxLQUFMLEdBQWEsQ0FBYixHQUFpQixDQURmO0FBRUx6QyxXQUFDLEVBQUUsS0FBSzBDLE1BQUwsR0FBYyxDQUFkLEdBQWtCLENBRmhCO0FBR0x6QyxXQUFDLEVBQUVnRDtBQUhFLFNBREc7QUFNVjlDLGNBQU0sRUFBRTtBQUNOOEIsY0FBSSxFQUFFO0FBREE7QUFORSxPQUFaLEVBU0csTUFUSDtBQVdBLFdBQUtzQixNQUFMLENBQVk7QUFDVnBDLGFBQUssRUFBRTtBQUNMcEIsV0FBQyxFQUFFK0MsTUFBTSxDQUFDLENBQUQsQ0FESjtBQUVMOUMsV0FBQyxFQUFFOEMsTUFBTSxDQUFDLENBQUQsQ0FGSjtBQUdMN0MsV0FBQyxFQUFFZ0Q7QUFIRSxTQURHO0FBTVY5QyxjQUFNLEVBQUU7QUFDTjhCLGNBQUksRUFBRW9CO0FBREE7QUFORSxPQUFaLEVBU0csTUFUSDtBQVVEO0FBcERIO0FBQUE7QUFBQSxrQ0FzRGdCO0FBQUEseUJBQ3lFLEtBQUtSLEtBRDlFO0FBQUEsVUFDTEosS0FESyxnQkFDTEEsS0FESztBQUFBLFVBQ0VLLE1BREYsZ0JBQ0VBLE1BREY7QUFBQSxVQUNVSSxpQkFEVixnQkFDVUEsaUJBRFY7QUFBQSxVQUM2Qk4sbUJBRDdCLGdCQUM2QkEsbUJBRDdCO0FBQUEsVUFDa0RELFVBRGxELGdCQUNrREEsVUFEbEQ7QUFBQSxVQUM4REgsT0FEOUQsZ0JBQzhEQSxPQUQ5RDtBQUVaLFVBQUlXLE9BQU8sR0FBR1gsT0FBTyxHQUFHSSxtQkFBVixHQUFnQ0QsVUFBaEMsR0FBNkMsRUFBM0Q7QUFDQSxVQUFJUyxXQUFXLEdBQUdYLEtBQUssR0FBR0QsT0FBUixHQUFrQkksbUJBQWxCLEdBQXdDRCxVQUF4QyxHQUFxRCxFQUF2RTtBQUVBLFVBQUlVLFFBQVEsR0FBRyxLQUFLQyxhQUFMLENBQW1CSCxPQUFuQixFQUE0QkEsT0FBNUIsRUFBcUNDLFdBQXJDLEVBQWtEQSxXQUFsRCxFQUErRCxDQUFDLENBQUMsQ0FBRCxFQUFJLFNBQUosQ0FBRCxFQUFpQixDQUFDLENBQUQsRUFBSSxTQUFKLENBQWpCLENBQS9ELENBQWY7QUFDQSxXQUFLRyxNQUFMLENBQVk7QUFDVnBDLGFBQUssRUFBRTtBQUNMcEIsV0FBQyxFQUFFK0MsTUFBTSxDQUFDLENBQUQsQ0FESjtBQUVMOUMsV0FBQyxFQUFFOEMsTUFBTSxDQUFDLENBQUQsQ0FGSjtBQUdMN0MsV0FBQyxFQUFFaUQ7QUFIRSxTQURHO0FBTVYvQyxjQUFNLEVBQUU7QUFDTjhCLGNBQUksRUFBRW9CO0FBREE7QUFORSxPQUFaLEVBU0csTUFUSDtBQVVEO0FBdEVIO0FBQUE7QUFBQSxtQ0F5RWlCRyxRQXpFakIsRUF5RTJCO0FBQUEseUJBQ3FDLEtBQUtYLEtBRDFDO0FBQUEsVUFDaEJDLE1BRGdCLGdCQUNoQkEsTUFEZ0I7QUFBQSxVQUNSRixtQkFEUSxnQkFDUkEsbUJBRFE7QUFBQSxVQUNhSSxvQkFEYixnQkFDYUEsb0JBRGI7QUFFdkIsVUFBSUssUUFBUSxHQUFHLEtBQUtDLGFBQUwsQ0FBbUIsRUFBbkIsRUFBdUIsRUFBdkIsRUFBMkIsR0FBM0IsRUFBZ0MsR0FBaEMsRUFBcUMsQ0FBQyxDQUFDLENBQUQsRUFBSSxTQUFKLENBQUQsRUFBaUIsQ0FBQyxDQUFELEVBQUksU0FBSixDQUFqQixDQUFyQyxDQUFmO0FBQ0EsVUFBSUcsTUFBTSxHQUFHRCxRQUFRLEdBQUduRyxJQUFJLENBQUNFLEVBQUwsR0FBVSxDQUFsQztBQUNBLFdBQUttRyxHQUFMLENBQVM7QUFDUHZDLGFBQUssRUFBRTtBQUNMcEIsV0FBQyxFQUFFK0MsTUFBTSxDQUFDLENBQUQsQ0FESjtBQUVMOUMsV0FBQyxFQUFFOEMsTUFBTSxDQUFDLENBQUQsQ0FGSjtBQUdMN0MsV0FBQyxFQUFFK0Msb0JBSEU7QUFJTHhCLFlBQUUsRUFBRWlDLE1BSkM7QUFLTGhDLFlBQUUsRUFBRSxJQUFJcEUsSUFBSSxDQUFDRSxFQUFMLEdBQVUsQ0FMYjtBQU1MbUUsMEJBQWdCLEVBQUU7QUFOYixTQURBO0FBU1B2QixjQUFNLEVBQUU7QUFDTkcscUJBQVcsRUFBRStDLFFBRFA7QUFFTjlDLG1CQUFTLEVBQUVxQyxtQkFGTDtBQUdOcEMsaUJBQU8sRUFBRTtBQUhIO0FBVEQsT0FBVDtBQWVEO0FBNUZIO0FBQUE7QUFBQSxpQ0E4RmU7QUFBQSxVQUNKc0MsTUFESSxHQUNNLEtBQUtELEtBRFgsQ0FDSkMsTUFESTtBQUVYLFVBQUlPLFFBQVEsR0FBRyxLQUFLQyxhQUFMLENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLEdBQTVCLEVBQWlDLENBQUMsQ0FBQyxDQUFELEVBQUksU0FBSixDQUFELEVBQWlCLENBQUMsQ0FBRCxFQUFJLFNBQUosQ0FBakIsQ0FBakMsQ0FBZjtBQUVBLFdBQUtDLE1BQUwsQ0FBWTtBQUNWcEMsYUFBSyxFQUFFO0FBQ0xwQixXQUFDLEVBQUMrQyxNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVksQ0FEVDtBQUVMOUMsV0FBQyxFQUFFOEMsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZLENBRlY7QUFHTDdDLFdBQUMsRUFBRSxLQUFLd0MsS0FBTCxHQUFhLENBQWIsR0FBaUIsS0FBS0Q7QUFIcEIsU0FERztBQU1WckMsY0FBTSxFQUFFO0FBQ044QixjQUFJLEVBQUU7QUFEQTtBQU5FLE9BQVosRUFTRyxNQVRIO0FBV0EsV0FBS3NCLE1BQUwsQ0FBWTtBQUNWcEMsYUFBSyxFQUFFO0FBQ0xwQixXQUFDLEVBQUUsS0FBSzBDLEtBQUwsR0FBYSxDQURYO0FBRUx6QyxXQUFDLEVBQUUsS0FBSzBDLE1BQUwsR0FBYyxDQUZaO0FBR0x6QyxXQUFDLEVBQUUsS0FBS3dDLEtBQUwsR0FBYSxDQUFiLEdBQWlCLENBQWpCLEdBQXFCLEtBQUtEO0FBSHhCLFNBREc7QUFNVnJDLGNBQU0sRUFBRTtBQUNOOEIsY0FBSSxFQUFFb0I7QUFEQTtBQU5FLE9BQVosRUFTRyxNQVRIO0FBVUQ7QUF2SEg7QUFBQTtBQUFBLDRCQXlIVTtBQUFBLHlCQUNtRSxLQUFLUixLQUR4RTtBQUFBLFVBQ0NDLE1BREQsZ0JBQ0NBLE1BREQ7QUFBQSxVQUNTRSxvQkFEVCxnQkFDU0Esb0JBRFQ7QUFBQSxVQUMrQkwsVUFEL0IsZ0JBQytCQSxVQUQvQjtBQUFBLFVBQzJDSSxXQUQzQyxnQkFDMkNBLFdBRDNDO0FBQUEsVUFDd0RQLE9BRHhELGdCQUN3REEsT0FEeEQ7O0FBRU4sV0FBSyxJQUFJNUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUMzQixhQUFLK0QsSUFBTCxDQUFVO0FBQ1J4QyxlQUFLLEVBQUU7QUFDTDlCLGNBQUUsRUFBRTJELG9CQUFvQixHQUFHLENBRHRCO0FBRUwxRCxjQUFFLEVBQUUsQ0FGQztBQUdMQyxjQUFFLEVBQUV5RCxvQkFBb0IsR0FBRyxDQUh0QjtBQUlMeEQsY0FBRSxFQUFFO0FBSkMsV0FEQztBQU9SVyxnQkFBTSxFQUFFO0FBQ05JLHFCQUFTLEVBQUUsQ0FETDtBQUVORCx1QkFBVyxFQUFFLE9BRlA7QUFHTkUsbUJBQU8sRUFBRTtBQUhILFdBUEE7QUFZUlMsbUJBQVMsRUFBRSxDQUFDNkIsTUFBTSxDQUFDLENBQUQsQ0FBUCxFQUFZQSxNQUFNLENBQUMsQ0FBRCxDQUFsQixDQVpIO0FBYVI1QixnQkFBTSxFQUFFN0QsSUFBSSxDQUFDRSxFQUFMLEdBQVUsQ0FBVixHQUFjcUM7QUFiZCxTQUFWO0FBZUQ7O0FBRUQsV0FBSzJELE1BQUwsQ0FBWTtBQUNWcEMsYUFBSyxFQUFFO0FBQ0xwQixXQUFDLEVBQUUrQyxNQUFNLENBQUMsQ0FBRCxDQURKO0FBRUw5QyxXQUFDLEVBQUU4QyxNQUFNLENBQUMsQ0FBRCxDQUZKO0FBR0w3QyxXQUFDLEVBQUU4QztBQUhFLFNBREc7QUFNVjVDLGNBQU0sRUFBRTtBQUNORyxxQkFBVyxFQUFFLFNBRFA7QUFFTkMsbUJBQVMsRUFBRW9DO0FBRkw7QUFORSxPQUFaLEVBVUcsUUFWSDtBQVlBLFdBQUtZLE1BQUwsQ0FBWTtBQUNWcEMsYUFBSyxFQUFFO0FBQ0xwQixXQUFDLEVBQUUrQyxNQUFNLENBQUMsQ0FBRCxDQURKO0FBRUw5QyxXQUFDLEVBQUU4QyxNQUFNLENBQUMsQ0FBRCxDQUZKO0FBR0w3QyxXQUFDLEVBQUU4QyxXQUFXLEdBQUdKLFVBQVUsR0FBQztBQUh2QixTQURHO0FBTVZ4QyxjQUFNLEVBQUU7QUFDTkcscUJBQVcsRUFBRSxtQkFEUDtBQUVOQyxtQkFBUyxFQUFFO0FBRkw7QUFORSxPQUFaLEVBVUcsUUFWSDtBQVdEO0FBcEtIO0FBQUE7QUFBQSx5QkFzS09xRCxDQXRLUCxFQXNLVTtBQUNOLFVBQUl4RSxHQUFHLEdBQUcsS0FBS0EsR0FBZjtBQURNLHlCQUVrQixLQUFLeUQsS0FGdkI7QUFBQSxVQUVDQyxNQUZELGdCQUVDQSxNQUZEO0FBQUEsVUFFU0wsS0FGVCxnQkFFU0EsS0FGVDtBQUdOckQsU0FBRyxDQUFDZ0MsSUFBSjtBQUNBaEMsU0FBRyxDQUFDaUIsU0FBSixHQUFnQixTQUFoQjtBQUNBakIsU0FBRyxDQUFDeUIsSUFBSixhQUFjZ0QsUUFBUSxDQUFDcEIsS0FBSyxHQUFFLENBQVIsQ0FBdEI7QUFDQXJELFNBQUcsQ0FBQzJCLFNBQUosR0FBZ0IsUUFBaEI7QUFDQTNCLFNBQUcsQ0FBQzBCLFlBQUosR0FBbUIsUUFBbkI7QUFDQTFCLFNBQUcsQ0FBQytDLFFBQUosQ0FBYXlCLENBQUMsR0FBRyxJQUFqQixFQUF1QmQsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZLENBQW5DLEVBQXNDQSxNQUFNLENBQUMsQ0FBRCxDQUE1QztBQUVBMUQsU0FBRyxDQUFDd0MsT0FBSjtBQUNEO0FBakxIO0FBQUE7QUFBQSx5QkFtTE9ILEVBbkxQLEVBbUxXbUMsQ0FuTFgsRUFtTGM7QUFDVixVQUFJeEUsR0FBRyxHQUFHLEtBQUtBLEdBQWY7QUFDQUEsU0FBRyxDQUFDMEUsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IxRSxHQUFHLENBQUMyRSxNQUFKLENBQVd0QixLQUEvQixFQUFzQ3JELEdBQUcsQ0FBQzJFLE1BQUosQ0FBV3JCLE1BQWpEO0FBQ0EsV0FBS3NCLFVBQUw7QUFDQSxXQUFLQyxjQUFMLENBQW9CeEMsRUFBcEI7QUFDQSxXQUFLeUMsS0FBTDtBQUNBLFdBQUtDLFdBQUw7QUFDQSxXQUFLQyxXQUFMO0FBQ0EsV0FBS2hDLElBQUwsQ0FBVXdCLENBQVY7QUFDRDtBQTVMSDtBQUFBO0FBQUEsMEJBOExRUyxRQTlMUixFQThMa0JDLEVBOUxsQixFQThMc0I7QUFBQTs7QUFDbEIsVUFBSUMsV0FBVyxHQUFHLENBQWxCO0FBQUEsVUFDRUMsS0FBSyxHQUFHLEVBRFY7QUFBQSxVQUVFQyxLQUFLLEdBQUksSUFBSUMsSUFBSixFQUFELENBQVdDLE9BQVgsRUFGVjs7QUFJQSxVQUFJQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2hCLFlBQUlwQixRQUFRLEdBQUduSCwrREFBTSxDQUFDQyxNQUFQLENBQWNpSSxXQUFXLEdBQUdGLFFBQTVCLENBQWY7QUFDQUUsbUJBQVcsR0FBSSxJQUFJRyxJQUFKLEVBQUQsQ0FBV0MsT0FBWCxLQUF1QkYsS0FBckM7O0FBQ0EsWUFBSUYsV0FBVyxHQUFHRixRQUFsQixFQUE0QjtBQUMxQkMsWUFBRTtBQUNGO0FBQ0Q7O0FBQ0QsY0FBSSxDQUFDTyxJQUFMLENBQVUsQ0FBQ3hILElBQUksQ0FBQ0UsRUFBTixHQUFXLENBQVgsR0FBZWlHLFFBQXpCLEVBQW1DSyxRQUFRLENBQUMsQ0FBQ1EsUUFBUSxHQUFHRSxXQUFaLElBQXlCLElBQTFCLENBQTNDOztBQUNBLFlBQUcsQ0FBQyxNQUFJLENBQUNPLE1BQVQsRUFBaUI7QUFDZkMsb0JBQVUsQ0FBQ0gsS0FBRCxFQUFRSixLQUFSLENBQVY7QUFDRDtBQUNGLE9BWEQ7O0FBYUFPLGdCQUFVLENBQUNILEtBQUQsRUFBUUosS0FBUixDQUFWO0FBQ0Q7QUFqTkg7QUFBQTtBQUFBLDJCQW1OUztBQUNMdkYsYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBLFdBQUs0RixNQUFMLEdBQWMsSUFBZDtBQUNEO0FBdE5IOztBQUFBO0FBQUEsRUFBK0IzRiwyREFBL0IsRTs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNNkYsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBVTVGLEdBQVYsRUFBZWtELENBQWYsRUFBa0JDLENBQWxCLEVBQXFCQyxPQUFyQixFQUE4QjZCLFFBQTlCLEVBQXdDWSxJQUF4QyxFQUE4Q0MsSUFBOUMsRUFBb0RDLEdBQXBELEVBQXlEQyxHQUF6RCxFQUE4RDtBQUN2RixNQUFNQyxJQUFJLEdBQUcsSUFBSWxHLDJEQUFKLENBQVNDLEdBQVQsQ0FBYjtBQUVBLE1BQU1rRyxNQUFNLEdBQUdoRCxDQUFDLEdBQUcsQ0FBSixHQUFRRSxPQUF2QjtBQUFBLE1BQ0UrQyxlQUFlLEdBQUdELE1BQU0sR0FBRyxFQUQ3QjtBQUFBLE1BRUV4QyxNQUFNLEdBQUcsQ0FBQ1IsQ0FBQyxHQUFHLENBQUwsRUFBUUMsQ0FBQyxHQUFHLENBQVosQ0FGWDtBQUlBLE1BQUlpRCxZQUFZLEdBQUcsSUFBbkI7QUFBQSxNQUNFQyxZQUFZLEdBQUcsSUFEakI7QUFBQSxNQUVFQyxhQUFhLEdBQUcsSUFGbEI7QUFBQSxNQUdFQyxLQUFLLEdBQUcsSUFIVjtBQUFBLE1BSUVDLFlBQVksR0FBRyxDQUpqQjtBQUFBLE1BS0VkLE1BQU0sR0FBRyxJQUxYO0FBQUEsTUFNRWUsUUFBUSxHQUFHLElBTmI7O0FBUUEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBVXJFLEVBQVYsRUFBYztBQUMzQixRQUFJNEIsUUFBUSxHQUFHZ0MsSUFBSSxDQUFDL0IsYUFBTCxDQUFtQmQsT0FBbkIsRUFBNEJBLE9BQTVCLEVBQXFDRixDQUFDLEdBQUdFLE9BQXpDLEVBQWtERCxDQUFDLEdBQUdDLE9BQXRELEVBQStELENBQUMsQ0FBQyxDQUFELEVBQUksU0FBSixDQUFELEVBQWlCLENBQUMsQ0FBRCxFQUFJLFNBQUosQ0FBakIsQ0FBL0QsQ0FBZjtBQUVBNkMsUUFBSSxDQUFDM0IsR0FBTCxDQUFTO0FBQ1B2QyxXQUFLLEVBQUU7QUFDTHBCLFNBQUMsRUFBRXVDLENBQUMsR0FBRyxDQURGO0FBRUx0QyxTQUFDLEVBQUV1QyxDQUFDLEdBQUcsQ0FGRjtBQUdMdEMsU0FBQyxFQUFFcUMsQ0FBQyxHQUFHLENBQUosR0FBUSxDQUhOO0FBSUxkLFVBQUUsRUFBRSxJQUFJbkUsSUFBSSxDQUFDRSxFQUFMLEdBQVUsQ0FKYjtBQUtMa0UsVUFBRSxFQUFFQSxFQUFFLEdBQUdwRSxJQUFJLENBQUNFLEVBQUwsR0FBVTtBQUxkLE9BREE7QUFRUDRDLFlBQU0sRUFBRTtBQUNORyxtQkFBVyxFQUFFK0MsUUFEUDtBQUVOOUMsaUJBQVMsRUFBRSxDQUZMO0FBR05DLGVBQU8sRUFBRTtBQUhIO0FBUkQsS0FBVDtBQWNELEdBakJEOztBQW1CQSxNQUFNdUYsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBWTtBQUN4QixRQUFJMUMsUUFBUSxHQUFHZ0MsSUFBSSxDQUFDL0IsYUFBTCxDQUFtQixDQUFuQixFQUFzQmQsT0FBdEIsRUFBK0IsQ0FBL0IsRUFBa0NELENBQUMsR0FBR0MsT0FBdEMsRUFBK0MsQ0FBQyxDQUFDLENBQUQsRUFBSSxTQUFKLENBQUQsRUFBaUIsQ0FBQyxDQUFELEVBQUksTUFBSixDQUFqQixDQUEvQyxDQUFmO0FBQ0E2QyxRQUFJLENBQUM5QixNQUFMLENBQVk7QUFDVnBDLFdBQUssRUFBRTtBQUNMcEIsU0FBQyxFQUFFK0MsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZLENBRFY7QUFFTDlDLFNBQUMsRUFBRThDLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWSxDQUZWO0FBR0w3QyxTQUFDLEVBQUVxRjtBQUhFLE9BREc7QUFNVm5GLFlBQU0sRUFBRTtBQUNOOEIsWUFBSSxFQUFFO0FBREE7QUFORSxLQUFaLEVBU0csTUFUSCxFQUZ3QixDQWF4Qjs7QUFDQW9ELFFBQUksQ0FBQzlCLE1BQUwsQ0FBWTtBQUNWcEMsV0FBSyxFQUFFO0FBQ0xwQixTQUFDLEVBQUUrQyxNQUFNLENBQUMsQ0FBRCxDQURKO0FBRUw5QyxTQUFDLEVBQUU4QyxNQUFNLENBQUMsQ0FBRCxDQUZKO0FBR0w3QyxTQUFDLEVBQUVxRjtBQUhFLE9BREc7QUFNVm5GLFlBQU0sRUFBRTtBQUNOOEIsWUFBSSxFQUFFb0I7QUFEQTtBQU5FLEtBQVosRUFTRyxNQVRIO0FBV0QsR0F6QkQ7O0FBMkJBLE1BQU1hLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQVk7QUFDeEIsUUFBSTdFLEVBQUosRUFBUUUsRUFBUjs7QUFDQSxTQUFLLElBQUlLLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDM0IsVUFBSUEsQ0FBQyxHQUFHLENBQUosSUFBUyxDQUFiLEVBQWdCO0FBQ2RQLFVBQUUsR0FBR2lHLE1BQU0sR0FBRyxDQUFkO0FBQ0EvRixVQUFFLEdBQUcrRixNQUFMO0FBQ0QsT0FIRCxNQUlLO0FBQ0hqRyxVQUFFLEdBQUdpRyxNQUFNLEdBQUcsQ0FBZDtBQUNBL0YsVUFBRSxHQUFHK0YsTUFBTSxHQUFHLENBQWQ7QUFDRDs7QUFDREQsVUFBSSxDQUFDMUIsSUFBTCxDQUFVO0FBQ1J4QyxhQUFLLEVBQUU7QUFDTDlCLFlBQUUsRUFBRUEsRUFEQztBQUVMQyxZQUFFLEVBQUUsQ0FGQztBQUdMQyxZQUFFLEVBQUVBLEVBSEM7QUFJTEMsWUFBRSxFQUFFO0FBSkMsU0FEQztBQU9SVyxjQUFNLEVBQUU7QUFDTkksbUJBQVMsRUFBRSxDQURMO0FBRU5ELHFCQUFXLEVBQUUsU0FGUDtBQUdORSxpQkFBTyxFQUFFO0FBSEgsU0FQQTtBQVlSUyxpQkFBUyxFQUFFLENBQUM2QixNQUFNLENBQUMsQ0FBRCxDQUFQLEVBQVlBLE1BQU0sQ0FBQyxDQUFELENBQWxCLENBWkg7QUFhUjVCLGNBQU0sRUFBRSxDQUFDN0QsSUFBSSxDQUFDRSxFQUFOLEdBQVcsRUFBWCxHQUFnQnFDO0FBYmhCLE9BQVY7QUFlRDtBQUNGLEdBM0JEOztBQTZCQSxNQUFNb0csV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBVztBQUM3QlgsUUFBSSxDQUFDOUIsTUFBTCxDQUFZO0FBQ1ZwQyxXQUFLLEVBQUU7QUFDTHBCLFNBQUMsRUFBRStDLE1BQU0sQ0FBQyxDQUFELENBREo7QUFFTDlDLFNBQUMsRUFBRThDLE1BQU0sQ0FBQyxDQUFELENBRko7QUFHTDdDLFNBQUMsRUFBRXNGLGVBQWUsR0FBRztBQUhoQixPQURHO0FBTVZwRixZQUFNLEVBQUU7QUFDTjhCLFlBQUksRUFBRTtBQURBO0FBTkUsS0FBWixFQVNHLE1BVEg7QUFXQW9ELFFBQUksQ0FBQzlCLE1BQUwsQ0FBWTtBQUNWcEMsV0FBSyxFQUFFO0FBQ0xwQixTQUFDLEVBQUUrQyxNQUFNLENBQUMsQ0FBRCxDQURKO0FBRUw5QyxTQUFDLEVBQUU4QyxNQUFNLENBQUMsQ0FBRCxDQUZKO0FBR0w3QyxTQUFDLEVBQUVzRixlQUFlLEdBQUc7QUFIaEIsT0FERztBQU1WcEYsWUFBTSxFQUFFO0FBQ044QixZQUFJLEVBQUU7QUFEQTtBQU5FLEtBQVosRUFTRyxNQVRIO0FBWUEsUUFBSW9CLFFBQVEsR0FBR2dDLElBQUksQ0FBQy9CLGFBQUwsQ0FBbUJkLE9BQW5CLEVBQTRCQSxPQUE1QixFQUFxQ0YsQ0FBQyxHQUFHRSxPQUF6QyxFQUFrREQsQ0FBQyxHQUFHQyxPQUF0RCxFQUErRCxDQUFDLENBQUMsQ0FBRCxFQUFJLFNBQUosQ0FBRCxFQUFpQixDQUFDLENBQUQsRUFBSSxTQUFKLENBQWpCLENBQS9ELENBQWY7QUFDQTZDLFFBQUksQ0FBQzNCLEdBQUwsQ0FBUztBQUNQdkMsV0FBSyxFQUFFO0FBQ0xwQixTQUFDLEVBQUV1QyxDQUFDLEdBQUcsQ0FERjtBQUVMdEMsU0FBQyxFQUFFdUMsQ0FBQyxHQUFHLENBRkY7QUFHTHRDLFNBQUMsRUFBRXNGLGVBQWUsR0FBRyxFQUhoQjtBQUlML0QsVUFBRSxFQUFFLENBSkM7QUFLTEMsVUFBRSxFQUFFcEUsSUFBSSxDQUFDRSxFQUFMLEdBQVU7QUFMVCxPQURBO0FBUVA0QyxZQUFNLEVBQUU7QUFDTkcsbUJBQVcsRUFBRStDLFFBRFA7QUFFTjlDLGlCQUFTLEVBQUUsQ0FGTDtBQUdOQyxlQUFPLEVBQUU7QUFISDtBQVJELEtBQVQ7QUFjRCxHQXZDRDs7QUF5Q0EsTUFBTXlGLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQVMzSCxDQUFULEVBQVk7QUFDNUIsUUFBSTRILENBQUo7O0FBQ0EsUUFBSVAsS0FBSyxHQUFHUixHQUFaLEVBQWlCO0FBQ2ZlLE9BQUMsR0FBR2YsR0FBSjtBQUNELEtBRkQsTUFHSyxJQUFJUSxLQUFLLEdBQUdQLEdBQVosRUFBaUI7QUFDcEJjLE9BQUMsR0FBR2QsR0FBSjtBQUNELEtBRkksTUFHQTtBQUNIYyxPQUFDLEdBQUdQLEtBQUo7QUFDRDs7QUFDRCxRQUFJbEMsTUFBTSxHQUFJcEcsSUFBSSxDQUFDRSxFQUFMLEdBQVUySSxDQUFWLEdBQWNkLEdBQTVCO0FBQ0EsUUFBSTNELEVBQUUsR0FBR2dDLE1BQU0sR0FBR25GLENBQWxCOztBQUNBLFFBQUdtSCxZQUFILEVBQWlCO0FBQ2ZoRSxRQUFFLEdBQUdnRSxZQUFZLEdBQUcsQ0FBQ0EsWUFBWSxHQUFHaEMsTUFBaEIsSUFBMEJuRixDQUE5QztBQUNEOztBQUNEa0gsZ0JBQVksR0FBRy9ELEVBQWY7QUFFQSxRQUFJNEIsUUFBUSxHQUFHZ0MsSUFBSSxDQUFDL0IsYUFBTCxDQUFtQmQsT0FBbkIsRUFBNEIsQ0FBNUIsRUFBK0JGLENBQUMsR0FBR0UsT0FBbkMsRUFBNEMsQ0FBNUMsRUFBK0MsQ0FBQyxDQUFDLENBQUQsRUFBSSxTQUFKLENBQUQsRUFBaUIsQ0FBQyxDQUFELEVBQUksU0FBSixDQUFqQixDQUEvQyxDQUFmO0FBRUEsUUFBSTJELFlBQVksR0FBR2QsSUFBSSxDQUFDL0IsYUFBTCxDQUFtQmQsT0FBbkIsRUFBNEIsQ0FBNUIsRUFBK0JGLENBQUMsR0FBR0UsT0FBbkMsRUFBNEMsQ0FBNUMsRUFBK0MsQ0FBQyxDQUFDLENBQUQsRUFBSSxTQUFKLENBQUQsRUFBZ0IsQ0FBQyxDQUFELEVBQUksU0FBSixDQUFoQixDQUEvQyxDQUFuQjtBQUNBLFFBQUk0RCxhQUFhLEdBQUdmLElBQUksQ0FBQy9CLGFBQUwsQ0FBbUIsQ0FBbkIsRUFBc0JkLE9BQXRCLEVBQStCLENBQS9CLEVBQWtDRCxDQUFDLEdBQUdDLE9BQXRDLEVBQStDLENBQUMsQ0FBQyxDQUFELEVBQUksU0FBSixDQUFELEVBQWdCLENBQUMsQ0FBRCxFQUFJLFNBQUosQ0FBaEIsQ0FBL0MsQ0FBcEI7QUFDQTZDLFFBQUksQ0FBQzNCLEdBQUwsQ0FBUztBQUNQdkMsV0FBSyxFQUFFO0FBQ0xwQixTQUFDLEVBQUUrQyxNQUFNLENBQUMsQ0FBRCxDQURKO0FBRUw5QyxTQUFDLEVBQUU4QyxNQUFNLENBQUMsQ0FBRCxDQUZKO0FBR0w3QyxTQUFDLEVBQUVzRixlQUhFO0FBSUwvRCxVQUFFLEVBQUUsQ0FBRW5FLElBQUksQ0FBQ0UsRUFKTjtBQUtMa0UsVUFBRSxFQUFFO0FBTEMsT0FEQTtBQVFQdEIsWUFBTSxFQUFFO0FBQ05HLG1CQUFXLEVBQUU2RixZQURQO0FBRU41RixpQkFBUyxFQUFFLEVBRkw7QUFHTkMsZUFBTyxFQUFFO0FBSEg7QUFSRCxLQUFUO0FBY0E2RSxRQUFJLENBQUMzQixHQUFMLENBQVM7QUFDUHZDLFdBQUssRUFBRTtBQUNMcEIsU0FBQyxFQUFFK0MsTUFBTSxDQUFDLENBQUQsQ0FESjtBQUVMOUMsU0FBQyxFQUFFOEMsTUFBTSxDQUFDLENBQUQsQ0FGSjtBQUdMN0MsU0FBQyxFQUFFc0YsZUFIRTtBQUlML0QsVUFBRSxFQUFFLENBQUVuRSxJQUFJLENBQUNFLEVBSk47QUFLTGtFLFVBQUUsRUFBRTtBQUxDLE9BREE7QUFRUHRCLFlBQU0sRUFBRTtBQUNORyxtQkFBVyxFQUFFOEYsYUFEUDtBQUVON0YsaUJBQVMsRUFBRSxFQUZMO0FBR05DLGVBQU8sRUFBRTtBQUhIO0FBUkQsS0FBVDtBQWVBNkUsUUFBSSxDQUFDM0IsR0FBTCxDQUFTO0FBQ1B2QyxXQUFLLEVBQUU7QUFDTHBCLFNBQUMsRUFBRStDLE1BQU0sQ0FBQyxDQUFELENBREo7QUFFTDlDLFNBQUMsRUFBRThDLE1BQU0sQ0FBQyxDQUFELENBRko7QUFHTDdDLFNBQUMsRUFBRXNGLGVBSEU7QUFJTC9ELFVBQUUsRUFBRSxDQUFFbkUsSUFBSSxDQUFDRSxFQUpOO0FBS0xrRSxVQUFFLEVBQUUsQ0FBRXBFLElBQUksQ0FBQ0UsRUFBUCxHQUFZa0U7QUFMWCxPQURBO0FBUVB0QixZQUFNLEVBQUU7QUFDTkcsbUJBQVcsRUFBRStDLFFBRFA7QUFFTjlDLGlCQUFTLEVBQUUsQ0FGTDtBQUdOQyxlQUFPLEVBQUU7QUFISDtBQVJELEtBQVQ7QUFjRCxHQWpFRDs7QUFtRUEsTUFBTTRCLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQVU5RCxDQUFWLEVBQWE7QUFDeEIsUUFBSW1GLE1BQU0sR0FBSWtDLEtBQWQ7QUFDQSxRQUFJVSxRQUFRLEdBQUc1QyxNQUFNLEdBQUduRixDQUF4Qjs7QUFDQSxRQUFHb0gsYUFBSCxFQUFrQjtBQUNoQlcsY0FBUSxHQUFHWCxhQUFhLEdBQUcsQ0FBQ0EsYUFBYSxHQUFHakMsTUFBakIsSUFBMkJuRixDQUF0RDtBQUNEOztBQUNEb0gsaUJBQWEsR0FBR1csUUFBaEI7QUFFQWhCLFFBQUksQ0FBQ2lCLElBQUwsQ0FBVTtBQUNSbEUsVUFBSSxFQUFFeUIsUUFBUSxDQUFDd0MsUUFBRCxDQUROO0FBRVJ0RyxPQUFDLEVBQUUrQyxNQUFNLENBQUMsQ0FBRCxDQUZEO0FBR1I5QyxPQUFDLEVBQUU4QyxNQUFNLENBQUMsQ0FBRCxDQUhEO0FBSVIzQyxZQUFNLEVBQUU7QUFDTjhCLFlBQUksRUFBRSxTQURBO0FBRU5wQixZQUFJLFlBQUt5QixDQUFDLEdBQUcsQ0FBSixHQUFRLEVBQWIsaUJBRkU7QUFHTnhCLG9CQUFZLEVBQUUsUUFIUjtBQUlOQyxpQkFBUyxFQUFFO0FBSkw7QUFKQSxLQUFWO0FBWUFzRSxRQUFJLENBQUNpQixJQUFMLENBQVU7QUFDUmxFLFVBQUksRUFBRTZDLElBREU7QUFFUmxGLE9BQUMsRUFBRStDLE1BQU0sQ0FBQyxDQUFELENBRkQ7QUFHUjlDLE9BQUMsRUFBRThDLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWSxFQUhQO0FBSVIzQyxZQUFNLEVBQUU7QUFDTjhCLFlBQUksRUFBRSxTQURBO0FBRU5wQixZQUFJLGtCQUZFO0FBR05DLG9CQUFZLEVBQUUsUUFIUjtBQUlOQyxpQkFBUyxFQUFFO0FBSkw7QUFKQSxLQUFWO0FBWUFzRSxRQUFJLENBQUNpQixJQUFMLENBQVU7QUFDUmxFLFVBQUksRUFBRThDLElBREU7QUFFUm5GLE9BQUMsRUFBRStDLE1BQU0sQ0FBQyxDQUFELENBRkQ7QUFHUjlDLE9BQUMsRUFBRThDLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWSxFQUhQO0FBSVIzQyxZQUFNLEVBQUU7QUFDTjhCLFlBQUksRUFBRSxTQURBO0FBRU5wQixZQUFJLGtCQUZFO0FBR05DLG9CQUFZLEVBQUUsUUFIUjtBQUlOQyxpQkFBUyxFQUFFO0FBSkw7QUFKQSxLQUFWO0FBV0QsR0EzQ0Q7O0FBNkNBLE1BQU04RCxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFVdkcsQ0FBVixFQUFhO0FBQUEsUUFDbkJjLEdBRG1CLEdBQ1ppRyxJQURZLENBQ25CakcsR0FEbUI7QUFFeEJBLE9BQUcsQ0FBQzBFLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CMUUsR0FBRyxDQUFDMkUsTUFBSixDQUFXdEIsS0FBL0IsRUFBc0NyRCxHQUFHLENBQUMyRSxNQUFKLENBQVdyQixNQUFqRDtBQUNBcUQsU0FBSztBQUNMN0IsU0FBSztBQUNMOEIsZUFBVztBQUNYQyxhQUFTLENBQUMzSCxDQUFELENBQVQ7QUFDQThELFFBQUksQ0FBQzlELENBQUQsQ0FBSjtBQUNELEdBUkQ7O0FBVUEsTUFBTWlJLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVNMLENBQVQsRUFBWTtBQUMzQlQsZ0JBQVksR0FBR0QsWUFBZjtBQUNBRyxTQUFLLEdBQUdPLENBQVI7QUFDQU0sa0JBQWM7QUFDZixHQUpEOztBQU1BLE1BQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBVztBQUNoQyxRQUFJakMsV0FBVyxHQUFHLENBQWxCO0FBQUEsUUFDRUMsS0FBSyxHQUFHLEVBRFY7QUFBQSxRQUVFQyxLQUFLLEdBQUksSUFBSUMsSUFBSixFQUFELENBQVdDLE9BQVgsRUFGVixDQURnQyxDQUtoQzs7QUFDQSxRQUFHa0IsUUFBSCxFQUFhO0FBQ1hZLG1CQUFhLENBQUNaLFFBQUQsQ0FBYjtBQUNEOztBQUVEQSxZQUFRLEdBQUdhLFdBQVcsQ0FBQyxZQUFNO0FBQzNCLFVBQUlsRCxRQUFRLEdBQUduSCwrREFBTSxDQUFDYyxZQUFQLENBQW9Cb0gsV0FBVyxHQUFHRixRQUFsQyxDQUFmOztBQUNBLFVBQUlFLFdBQVcsR0FBR0YsUUFBbEIsRUFBNEI7QUFDMUJRLFlBQUksQ0FBQ3JCLFFBQUQsQ0FBSjtBQUNBaUQscUJBQWEsQ0FBQ1osUUFBRCxDQUFiO0FBQ0E7QUFDRDs7QUFDRGhCLFVBQUksQ0FBQ3JCLFFBQUQsQ0FBSjtBQUNBZSxpQkFBVyxHQUFJLElBQUlHLElBQUosRUFBRCxDQUFXQyxPQUFYLEtBQXVCRixLQUFyQztBQUNELEtBVHFCLEVBU25CRCxLQVRtQixDQUF0QjtBQVVELEdBcEJEOztBQXNCQSxNQUFNbUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBVztBQUN0QkYsaUJBQWEsQ0FBQ1osUUFBRCxDQUFiO0FBQ0QsR0FGRDs7QUFJQSxTQUFPO0FBQ0xVLFlBQVEsRUFBRUEsUUFETDtBQUVMMUIsUUFBSSxFQUFFQSxJQUZEO0FBR0w4QixRQUFJLEVBQUVBO0FBSEQsR0FBUDtBQUtELENBbFNNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBQ0E7QUFFTyxJQUFNQyxtQkFBUyxHQUFHLFNBQVpBLFNBQVksQ0FBVXhILEdBQVYsRUFBZWtELENBQWYsRUFBa0JDLENBQWxCLEVBQXFCQyxPQUFyQixFQUE4QnFFLEtBQTlCLEVBQXFDM0IsSUFBckMsRUFBMkM0QixLQUEzQyxFQUFrRDtBQUN6RSxNQUFNekIsSUFBSSxHQUFHLElBQUlsRyxvQkFBSixDQUFTQyxHQUFULENBQWI7O0FBRUEsTUFBTTBHLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQVVyRSxFQUFWLEVBQWM7QUFDM0IsUUFBSTRCLFFBQVEsR0FBR2dDLElBQUksQ0FBQy9CLGFBQUwsQ0FBbUJkLE9BQW5CLEVBQTRCQSxPQUE1QixFQUFxQ0YsQ0FBQyxHQUFHRSxPQUF6QyxFQUFrREQsQ0FBQyxHQUFHQyxPQUF0RCxFQUErRCxDQUFDLENBQUMsQ0FBRCxFQUFJLFNBQUosQ0FBRCxFQUFpQixDQUFDLENBQUQsRUFBSSxTQUFKLENBQWpCLENBQS9ELENBQWY7QUFFQTZDLFFBQUksQ0FBQzNCLEdBQUwsQ0FBUztBQUNQdkMsV0FBSyxFQUFFO0FBQ0xwQixTQUFDLEVBQUV1QyxDQUFDLEdBQUcsQ0FERjtBQUVMdEMsU0FBQyxFQUFFdUMsQ0FBQyxHQUFHLENBRkY7QUFHTHRDLFNBQUMsRUFBRXFDLENBQUMsR0FBRyxDQUFKLEdBQVEsQ0FITjtBQUlMZCxVQUFFLEVBQUUsSUFBSW5FLElBQUksQ0FBQ0UsRUFBTCxHQUFVLENBSmI7QUFLTGtFLFVBQUUsRUFBRUEsRUFBRSxHQUFHcEUsSUFBSSxDQUFDRSxFQUFMLEdBQVU7QUFMZCxPQURBO0FBUVA0QyxZQUFNLEVBQUU7QUFDTkcsbUJBQVcsRUFBRStDLFFBRFA7QUFFTjlDLGlCQUFTLEVBQUUsQ0FGTDtBQUdOQyxlQUFPLEVBQUU7QUFISDtBQVJELEtBQVQ7QUFjRCxHQWpCRDs7QUFtQkEsTUFBTTRCLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQVV3QixDQUFWLEVBQWE7QUFDeEIsUUFBSW1ELFVBQVUsR0FBRyxDQUFqQjtBQUNBM0gsT0FBRyxDQUFDeUIsSUFBSixhQUFjZ0QsUUFBUSxDQUFDdkIsQ0FBQyxHQUFHLENBQUwsQ0FBdEI7QUFDQXlFLGNBQVUsR0FBRzNILEdBQUcsQ0FBQzRILFdBQUosQ0FBZ0JwRCxDQUFoQixFQUFtQm5CLEtBQWhDO0FBQ0E0QyxRQUFJLENBQUNpQixJQUFMLENBQVU7QUFDUmxFLFVBQUksRUFBRXdCLENBREU7QUFFUjdELE9BQUMsRUFBRXVDLENBQUMsR0FBRyxDQUZDO0FBR1J0QyxPQUFDLEVBQUV1QyxDQUFDLEdBQUcsQ0FBSixHQUFRQSxDQUFDLEdBQUMsRUFITDtBQUlScEMsWUFBTSxFQUFFO0FBQ044QixZQUFJLEVBQUU2RSxLQURBO0FBRU5qRyxZQUFJLFlBQUtnRCxRQUFRLENBQUN2QixDQUFDLEdBQUcsQ0FBTCxDQUFiLGlCQUZFO0FBR054QixvQkFBWSxFQUFFLFFBSFI7QUFJTkMsaUJBQVMsRUFBRTtBQUpMO0FBSkEsS0FBVjs7QUFZQSxRQUFJOEYsS0FBSixFQUFXO0FBQ1R4QixVQUFJLENBQUNpQixJQUFMLENBQVU7QUFDUmxFLFlBQUksRUFBRXlFLEtBREU7QUFFUjlHLFNBQUMsRUFBRThELFFBQVEsQ0FBQ3ZCLENBQUMsR0FBRyxDQUFMLENBRkg7QUFHUnRDLFNBQUMsRUFBRTZELFFBQVEsQ0FBQ3RCLENBQUMsR0FBQyxDQUFILENBSEg7QUFJUnBDLGNBQU0sRUFBRTtBQUNOOEIsY0FBSSxFQUFFNkUsS0FEQTtBQUVOakcsY0FBSSxZQUFLZ0QsUUFBUSxDQUFDdkIsQ0FBQyxHQUFDLEVBQUgsQ0FBYixpQkFGRTtBQUdOeEIsc0JBQVksRUFBRSxRQUhSO0FBSU5DLG1CQUFTLEVBQUU7QUFKTDtBQUpBLE9BQVY7QUFXRDs7QUFFRCxRQUFJbUUsSUFBSixFQUFVO0FBQ1JHLFVBQUksQ0FBQ2lCLElBQUwsQ0FBVTtBQUNSbEUsWUFBSSxFQUFFOEMsSUFERTtBQUVSO0FBQ0FuRixTQUFDLEVBQUU4RCxRQUFRLENBQUN2QixDQUFDLEdBQUcsQ0FBTCxDQUhIO0FBSVJ0QyxTQUFDLEVBQUU2RCxRQUFRLENBQUN0QixDQUFDLEdBQUcsQ0FBSixHQUFRLElBQUlBLENBQUosR0FBTSxFQUFmLENBSkg7QUFLUnBDLGNBQU0sRUFBRTtBQUNOOEIsY0FBSSxFQUFFNkUsS0FEQTtBQUVOakcsY0FBSSxZQUFLZ0QsUUFBUSxDQUFDdkIsQ0FBQyxHQUFDLEVBQUgsQ0FBYixpQkFGRTtBQUdOeEIsc0JBQVksRUFBRSxLQUhSO0FBSU5DLG1CQUFTLEVBQUU7QUFKTDtBQUxBLE9BQVY7QUFZRDtBQUNGLEdBNUNEOztBQThDQSxNQUFNOEQsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBVXBELEVBQVYsRUFBY2tFLEtBQWQsRUFBcUI7QUFDaEN2RyxPQUFHLENBQUMwRSxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQjFFLEdBQUcsQ0FBQzJFLE1BQUosQ0FBV3RCLEtBQS9CLEVBQXNDckQsR0FBRyxDQUFDMkUsTUFBSixDQUFXckIsTUFBakQ7QUFDQW9ELFVBQU0sQ0FBQ3JFLEVBQUQsQ0FBTjtBQUNBVyxRQUFJLENBQUN1RCxLQUFELENBQUo7QUFDRCxHQUpEOztBQU1BLE1BQU1sQixLQUFLLEdBQUcsZUFBVUosUUFBVixFQUFvQnNCLEtBQXBCLEVBQTJCO0FBQ3ZDLFFBQUlwQixXQUFXLEdBQUcsQ0FBbEI7QUFBQSxRQUNFQyxLQUFLLEdBQUcsRUFEVjtBQUFBLFFBRUVDLEtBQUssR0FBSSxJQUFJQyxJQUFKLEVBQUQsQ0FBV0MsT0FBWCxFQUZWOztBQUlBLFFBQUlDLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDaEIsVUFBSXBCLFFBQVEsR0FBR25ILHdCQUFNLENBQUN3QixjQUFQLENBQXNCMEcsV0FBVyxHQUFHRixRQUFwQyxDQUFmOztBQUVBLFVBQUlFLFdBQVcsR0FBR0YsUUFBbEIsRUFBNEI7QUFDMUJRLFlBQUksQ0FBQ3hILElBQUksQ0FBQ0UsRUFBTCxHQUFVLENBQVYsR0FBY2lHLFFBQWYsRUFBeUJLLFFBQVEsQ0FBQzhCLEtBQUQsQ0FBakMsQ0FBSjtBQUNBO0FBQ0Q7O0FBQ0RkLFVBQUksQ0FBQ3hILElBQUksQ0FBQ0UsRUFBTCxHQUFVLENBQVYsR0FBY2lHLFFBQWYsRUFBeUJLLFFBQVEsQ0FBQ0wsUUFBUSxHQUFHbUMsS0FBWixDQUFqQyxDQUFKOztBQUVBLFVBQUksSUFBSixFQUFVO0FBQ1JaLGtCQUFVLENBQUNILEtBQUQsRUFBUUosS0FBUixDQUFWO0FBQ0Q7O0FBQ0RELGlCQUFXLEdBQUksSUFBSUcsSUFBSixFQUFELENBQVdDLE9BQVgsS0FBdUJGLEtBQXJDO0FBQ0QsS0FiRDs7QUFlQU0sY0FBVSxDQUFDSCxLQUFELEVBQVFKLEtBQVIsQ0FBVjtBQUNELEdBckJEOztBQXVCQSxTQUFPO0FBQ0xLLFFBQUksRUFBRUEsSUFERDtBQUVMSixTQUFLLEVBQUVBO0FBRkYsR0FBUDtBQUlELENBckdNLEM7O0FDSFA7QUFDQTtBQUNBO0FBRUEsSUFBSXJGLFFBQUcsR0FBRzZILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixxQkFBdkIsRUFBOENDLFVBQTlDLENBQXlELElBQXpELENBQVY7QUFDQSxJQUFNQyxTQUFTLEdBQUcsSUFBSS9FLGtCQUFKLENBQWNqRCxRQUFkLEVBQW1CLEdBQW5CLEVBQXdCLEdBQXhCLEVBQTZCLEVBQTdCLENBQWxCO0FBQ0FnSSxTQUFTLENBQUMzQyxLQUFWLENBQWdCLEtBQWhCO0FBRUEsSUFBSTRDLElBQUksR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLEVBQXVDQyxVQUF2QyxDQUFrRCxJQUFsRCxDQUFYO0FBQ0EsSUFBTUcsV0FBVyxHQUFHdEMsNEJBQVcsQ0FBQ3FDLElBQUQsRUFBTyxHQUFQLEVBQVksR0FBWixFQUFpQixFQUFqQixFQUFxQixJQUFyQixFQUEyQixJQUEzQixFQUFpQyxNQUFqQyxFQUF5QyxDQUF6QyxFQUE0QyxHQUE1QyxDQUEvQjtBQUNBQyxXQUFXLENBQUNmLFFBQVosQ0FBcUIsQ0FBckI7QUFDQUcsV0FBVyxDQUFDLFlBQU07QUFDZCxNQUFJZixLQUFLLEdBQUd0SSxJQUFJLENBQUNrSyxNQUFMLEtBQWdCLEdBQTVCO0FBQ0FELGFBQVcsQ0FBQ2YsUUFBWixDQUFxQlosS0FBckI7QUFDSCxDQUhVLEVBR1IsSUFIUSxDQUFYO0FBS0EsSUFBSTZCLElBQUksR0FBR1AsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLEVBQXFDQyxVQUFyQyxDQUFnRCxJQUFoRCxDQUFYO0FBQ0EsSUFBTWxCLFNBQVMsR0FBR1csbUJBQVMsQ0FBQ1ksSUFBRCxFQUFPLEdBQVAsRUFBWSxHQUFaLEVBQWlCLEVBQWpCLEVBQXFCLElBQXJCLEVBQTJCLE1BQTNCLEVBQW1DLE9BQW5DLENBQTNCO0FBQ0F2QixTQUFTLENBQUN4QixLQUFWLENBQWdCLElBQWhCLEVBQXNCLEdBQXRCLEU7Ozs7OztBQ2xCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7QUNuQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7OztBQ3ZMdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsbUJBQW1CLG1CQUFPLENBQUMsRUFBZTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsYUFBYSxtQkFBTyxDQUFDLENBQVM7QUFDOUIsaUJBQWlCLG1CQUFPLENBQUMsRUFBd0I7QUFDakQsYUFBYSxtQkFBTyxDQUFDLEVBQW9COztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixhQUFhLG1CQUFPLENBQUMsQ0FBUzs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixhQUFhLG1CQUFPLENBQUMsQ0FBUzs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hEYTs7QUFFYixlQUFlLG1CQUFPLENBQUMsQ0FBVTtBQUNqQyxjQUFjLG1CQUFPLENBQUMsRUFBbUI7QUFDekMsWUFBWSxtQkFBTyxDQUFDLEVBQWtCO0FBQ3RDLGFBQWEsbUJBQU8sQ0FBQyxFQUFnQjtBQUNyQyxZQUFZLG1CQUFPLENBQUMsRUFBYTtBQUNqQyxVQUFVLG1CQUFPLENBQUMsRUFBYTtBQUMvQixVQUFVLG1CQUFPLENBQUMsQ0FBVztBQUM3QixVQUFVLG1CQUFPLENBQUMsRUFBVztBQUM3QixVQUFVLG1CQUFPLENBQUMsRUFBVzs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxPQUFPO0FBQ2hCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksU0FBUztBQUNyQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsY0FBYztBQUM1QixlQUFlLFdBQVcsR0FBRyxZQUFZO0FBQ3pDO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsSUFBSTtBQUNqQixjQUFjLE9BQU87QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxJQUFJO0FBQ2pCLGNBQWMsT0FBTztBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsSUFBSTtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixjQUFjLE9BQU87QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLGFBQWE7QUFDMUIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDcFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsRUFBYztBQUNsQyxlQUFlLG1CQUFPLENBQUMsRUFBVzs7QUFFbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3QmE7O0FBRWIsV0FBVyxtQkFBTyxDQUFDLENBQU07QUFDekIsWUFBWSxtQkFBTyxDQUFDLEVBQWM7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNwQ0EsZUFBZSxtQkFBTyxDQUFDLENBQVc7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2QsWUFBWSxFQUFFO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkhhOztBQUViLGVBQWUsbUJBQU8sQ0FBQyxDQUFlO0FBQ3RDLFlBQVksbUJBQU8sQ0FBQyxFQUFXO0FBQy9CLFVBQVUsbUJBQU8sQ0FBQyxDQUFXO0FBQzdCLFVBQVUsbUJBQU8sQ0FBQyxFQUFXOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsYUFBYSxtQkFBTyxDQUFDLEVBQWdCO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyxFQUFnQjtBQUNyQyxvQkFBb0IsbUJBQU8sQ0FBQyxDQUFpQjtBQUM3QyxlQUFlLG1CQUFPLENBQUMsQ0FBZTs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDN0RhOztBQUViLGVBQWUsbUJBQU8sQ0FBQyxDQUFlOztBQUV0QztBQUNBLHFCQUFxQixRQUFROztBQUU3QjtBQUNBLGlCQUFpQixTQUFTO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsZUFBZSxtQkFBTyxDQUFDLENBQVU7QUFDakMsVUFBVSxtQkFBTyxDQUFDLEVBQVc7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLGVBQWUsbUJBQU8sQ0FBQyxFQUFVO0FBQ2pDLGdCQUFnQixtQkFBTyxDQUFDLEVBQVk7QUFDcEMsVUFBVSxtQkFBTyxDQUFDLENBQVc7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLGNBQWMsbUJBQU8sQ0FBQyxFQUFTOztBQUUvQjtBQUNBO0FBQ0E7Ozs7Ozs7QUNiQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixlQUFlLG1CQUFPLENBQUMsQ0FBVTtBQUNqQyxnQkFBZ0IsbUJBQU8sQ0FBQyxFQUFZO0FBQ3BDLFVBQVUsbUJBQU8sQ0FBQyxDQUFXOztBQUU3QjtBQUNBO0FBQ0E7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLGFBQWEsbUJBQU8sQ0FBQyxFQUFTO0FBQzlCLGVBQWUsbUJBQU8sQ0FBQyxFQUFXOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMzREEsZUFBZSxtQkFBTyxDQUFDLENBQVc7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2QsWUFBWSxFQUFFO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixhQUFhLG1CQUFPLENBQUMsRUFBUzs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3JCQSxlQUFlLG1CQUFPLENBQUMsQ0FBVztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEVBQUU7QUFDZCxZQUFZLEVBQUU7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxFQUFjO0FBQ2xDLGFBQWEsbUJBQU8sQ0FBQyxFQUFnQjtBQUNyQyxvQkFBb0IsbUJBQU8sQ0FBQyxDQUFpQjtBQUM3QyxlQUFlLG1CQUFPLENBQUMsQ0FBZTs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIseUJBQXlCO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUIsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsYUFBYSxtQkFBTyxDQUFDLEVBQWdCOztBQUVyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBSztBQUNiO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFLYTs7QUFFYixtQkFBbUIsbUJBQU8sQ0FBQyxFQUFlO0FBQzFDLG9CQUFvQixtQkFBTyxDQUFDLEVBQWdCOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsb0JBQW9CLG1CQUFPLENBQUMsQ0FBaUI7O0FBRTdDO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixrQkFBa0I7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdkNhOztBQUViLGVBQWUsbUJBQU8sQ0FBQyxDQUFlOztBQUV0QztBQUNBLHFCQUFxQixRQUFROztBQUU3QjtBQUNBLGlCQUFpQixTQUFTO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ2hDYTs7QUFFYixtQkFBbUIsbUJBQU8sQ0FBQyxFQUFlO0FBQzFDLFlBQVksbUJBQU8sQ0FBQyxFQUFROztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksRUFBRTtBQUNkLFlBQVksT0FBTztBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksSUFBSTtBQUNoQixZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLG9CQUFvQixtQkFBTyxDQUFDLENBQWlCOztBQUU3QztBQUNBO0FBQ0E7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMEJBQTBCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7Ozs7OztBQ3BCYTs7QUFFYixXQUFXLG1CQUFPLENBQUMsQ0FBTTtBQUN6QixZQUFZLG1CQUFPLENBQUMsRUFBVztBQUMvQixhQUFhLG1CQUFPLENBQUMsRUFBaUI7QUFDdEMsbUJBQW1CLG1CQUFPLENBQUMsRUFBZTtBQUMxQyxZQUFZLG1CQUFPLENBQUMsQ0FBVTs7QUFFOUI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQjtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsYUFBYTtBQUN4QixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZUFBZTtBQUM3QjtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE1BQU07QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLGFBQWE7QUFDeEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxhQUFhO0FBQ3hCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLElBQUk7QUFDSjtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsbUJBQW1CLG1CQUFPLENBQUMsRUFBZTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7O0FDOUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksRUFBRTtBQUNkLFlBQVksRUFBRTtBQUNkOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2xKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsYUFBYSxtQkFBTyxDQUFDLEVBQVM7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDcEVBLGVBQWUsbUJBQU8sQ0FBQyxDQUFXO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksRUFBRTtBQUNkLFlBQVksRUFBRTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsYUFBYSxtQkFBTyxDQUFDLEVBQVM7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN0REEsZUFBZSxtQkFBTyxDQUFDLENBQVc7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2QsWUFBWSxFQUFFO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1QkFBdUI7QUFDdEM7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxNQUFNO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM3S0EsZUFBZSxtQkFBTyxDQUFDLENBQVc7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2QsWUFBWSxFQUFFO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYOzs7Ozs7Ozs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLG1CQUFtQixtQkFBTyxDQUFDLEVBQWU7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLG1CQUFtQixtQkFBTyxDQUFDLEVBQWU7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7OztBQzlCQSx5QyIsImZpbGUiOiJzY3JpcHRzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTgpO1xuIiwiLyohXG4gKiBpc29iamVjdCA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaXNvYmplY3Q+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTcsIEpvbiBTY2hsaW5rZXJ0LlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkodmFsKSA9PT0gZmFsc2U7XG59O1xuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG4iLCIvKiFcbiAqIGlzLWV4dGVuZGFibGUgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLWV4dGVuZGFibGU+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNFeHRlbmRhYmxlKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsICE9PSBudWxsXG4gICAgJiYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpO1xufTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAoIWlzU3RyaW5nKGYpKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yICh2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pIHtcbiAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vLyBNYXJrIHRoYXQgYSBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuLy8gUmV0dXJucyBhIG1vZGlmaWVkIGZ1bmN0aW9uIHdoaWNoIHdhcm5zIG9uY2UgYnkgZGVmYXVsdC5cbi8vIElmIC0tbm8tZGVwcmVjYXRpb24gaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKGlzVW5kZWZpbmVkKGdsb2JhbC5wcm9jZXNzKSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy50aHJvd0RlcHJlY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVwcmVjYXRlZDtcbn07XG5cblxudmFyIGRlYnVncyA9IHt9O1xudmFyIGRlYnVnRW52aXJvbjtcbmV4cG9ydHMuZGVidWdsb2cgPSBmdW5jdGlvbihzZXQpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKGRlYnVnRW52aXJvbikpXG4gICAgZGVidWdFbnZpcm9uID0gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJztcbiAgc2V0ID0gc2V0LnRvVXBwZXJDYXNlKCk7XG4gIGlmICghZGVidWdzW3NldF0pIHtcbiAgICBpZiAobmV3IFJlZ0V4cCgnXFxcXGInICsgc2V0ICsgJ1xcXFxiJywgJ2knKS50ZXN0KGRlYnVnRW52aXJvbikpIHtcbiAgICAgIHZhciBwaWQgPSBwcm9jZXNzLnBpZDtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtc2cgPSBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCclcyAlZDogJXMnLCBzZXQsIHBpZCwgbXNnKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7fTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYnVnc1tzZXRdO1xufTtcblxuXG4vKipcbiAqIEVjaG9zIHRoZSB2YWx1ZSBvZiBhIHZhbHVlLiBUcnlzIHRvIHByaW50IHRoZSB2YWx1ZSBvdXRcbiAqIGluIHRoZSBiZXN0IHdheSBwb3NzaWJsZSBnaXZlbiB0aGUgZGlmZmVyZW50IHR5cGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBwcmludCBvdXQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBPcHRpb25hbCBvcHRpb25zIG9iamVjdCB0aGF0IGFsdGVycyB0aGUgb3V0cHV0LlxuICovXG4vKiBsZWdhY3k6IG9iaiwgc2hvd0hpZGRlbiwgZGVwdGgsIGNvbG9ycyovXG5mdW5jdGlvbiBpbnNwZWN0KG9iaiwgb3B0cykge1xuICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgdmFyIGN0eCA9IHtcbiAgICBzZWVuOiBbXSxcbiAgICBzdHlsaXplOiBzdHlsaXplTm9Db2xvclxuICB9O1xuICAvLyBsZWdhY3kuLi5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykgY3R4LmRlcHRoID0gYXJndW1lbnRzWzJdO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA0KSBjdHguY29sb3JzID0gYXJndW1lbnRzWzNdO1xuICBpZiAoaXNCb29sZWFuKG9wdHMpKSB7XG4gICAgLy8gbGVnYWN5Li4uXG4gICAgY3R4LnNob3dIaWRkZW4gPSBvcHRzO1xuICB9IGVsc2UgaWYgKG9wdHMpIHtcbiAgICAvLyBnb3QgYW4gXCJvcHRpb25zXCIgb2JqZWN0XG4gICAgZXhwb3J0cy5fZXh0ZW5kKGN0eCwgb3B0cyk7XG4gIH1cbiAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LnNob3dIaWRkZW4pKSBjdHguc2hvd0hpZGRlbiA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmRlcHRoKSkgY3R4LmRlcHRoID0gMjtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jb2xvcnMpKSBjdHguY29sb3JzID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY3VzdG9tSW5zcGVjdCkpIGN0eC5jdXN0b21JbnNwZWN0ID0gdHJ1ZTtcbiAgaWYgKGN0eC5jb2xvcnMpIGN0eC5zdHlsaXplID0gc3R5bGl6ZVdpdGhDb2xvcjtcbiAgcmV0dXJuIGZvcm1hdFZhbHVlKGN0eCwgb2JqLCBjdHguZGVwdGgpO1xufVxuZXhwb3J0cy5pbnNwZWN0ID0gaW5zcGVjdDtcblxuXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGUjZ3JhcGhpY3Ncbmluc3BlY3QuY29sb3JzID0ge1xuICAnYm9sZCcgOiBbMSwgMjJdLFxuICAnaXRhbGljJyA6IFszLCAyM10sXG4gICd1bmRlcmxpbmUnIDogWzQsIDI0XSxcbiAgJ2ludmVyc2UnIDogWzcsIDI3XSxcbiAgJ3doaXRlJyA6IFszNywgMzldLFxuICAnZ3JleScgOiBbOTAsIDM5XSxcbiAgJ2JsYWNrJyA6IFszMCwgMzldLFxuICAnYmx1ZScgOiBbMzQsIDM5XSxcbiAgJ2N5YW4nIDogWzM2LCAzOV0sXG4gICdncmVlbicgOiBbMzIsIDM5XSxcbiAgJ21hZ2VudGEnIDogWzM1LCAzOV0sXG4gICdyZWQnIDogWzMxLCAzOV0sXG4gICd5ZWxsb3cnIDogWzMzLCAzOV1cbn07XG5cbi8vIERvbid0IHVzZSAnYmx1ZScgbm90IHZpc2libGUgb24gY21kLmV4ZVxuaW5zcGVjdC5zdHlsZXMgPSB7XG4gICdzcGVjaWFsJzogJ2N5YW4nLFxuICAnbnVtYmVyJzogJ3llbGxvdycsXG4gICdib29sZWFuJzogJ3llbGxvdycsXG4gICd1bmRlZmluZWQnOiAnZ3JleScsXG4gICdudWxsJzogJ2JvbGQnLFxuICAnc3RyaW5nJzogJ2dyZWVuJyxcbiAgJ2RhdGUnOiAnbWFnZW50YScsXG4gIC8vIFwibmFtZVwiOiBpbnRlbnRpb25hbGx5IG5vdCBzdHlsaW5nXG4gICdyZWdleHAnOiAncmVkJ1xufTtcblxuXG5mdW5jdGlvbiBzdHlsaXplV2l0aENvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHZhciBzdHlsZSA9IGluc3BlY3Quc3R5bGVzW3N0eWxlVHlwZV07XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgcmV0dXJuICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMF0gKyAnbScgKyBzdHIgK1xuICAgICAgICAgICAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzFdICsgJ20nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzdHlsaXplTm9Db2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICByZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFycmF5VG9IYXNoKGFycmF5KSB7XG4gIHZhciBoYXNoID0ge307XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbih2YWwsIGlkeCkge1xuICAgIGhhc2hbdmFsXSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiBoYXNoO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcykge1xuICAvLyBQcm92aWRlIGEgaG9vayBmb3IgdXNlci1zcGVjaWZpZWQgaW5zcGVjdCBmdW5jdGlvbnMuXG4gIC8vIENoZWNrIHRoYXQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggYW4gaW5zcGVjdCBmdW5jdGlvbiBvbiBpdFxuICBpZiAoY3R4LmN1c3RvbUluc3BlY3QgJiZcbiAgICAgIHZhbHVlICYmXG4gICAgICBpc0Z1bmN0aW9uKHZhbHVlLmluc3BlY3QpICYmXG4gICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB1dGlsIG1vZHVsZSwgaXQncyBpbnNwZWN0IGZ1bmN0aW9uIGlzIHNwZWNpYWxcbiAgICAgIHZhbHVlLmluc3BlY3QgIT09IGV4cG9ydHMuaW5zcGVjdCAmJlxuICAgICAgLy8gQWxzbyBmaWx0ZXIgb3V0IGFueSBwcm90b3R5cGUgb2JqZWN0cyB1c2luZyB0aGUgY2lyY3VsYXIgY2hlY2suXG4gICAgICAhKHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9PT0gdmFsdWUpKSB7XG4gICAgdmFyIHJldCA9IHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzLCBjdHgpO1xuICAgIGlmICghaXNTdHJpbmcocmV0KSkge1xuICAgICAgcmV0ID0gZm9ybWF0VmFsdWUoY3R4LCByZXQsIHJlY3Vyc2VUaW1lcyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyBQcmltaXRpdmUgdHlwZXMgY2Fubm90IGhhdmUgcHJvcGVydGllc1xuICB2YXIgcHJpbWl0aXZlID0gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpO1xuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIC8vIExvb2sgdXAgdGhlIGtleXMgb2YgdGhlIG9iamVjdC5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gIHZhciB2aXNpYmxlS2V5cyA9IGFycmF5VG9IYXNoKGtleXMpO1xuXG4gIGlmIChjdHguc2hvd0hpZGRlbikge1xuICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSk7XG4gIH1cblxuICAvLyBJRSBkb2Vzbid0IG1ha2UgZXJyb3IgZmllbGRzIG5vbi1lbnVtZXJhYmxlXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9kd3c1MnNidCh2PXZzLjk0KS5hc3B4XG4gIGlmIChpc0Vycm9yKHZhbHVlKVxuICAgICAgJiYgKGtleXMuaW5kZXhPZignbWVzc2FnZScpID49IDAgfHwga2V5cy5pbmRleE9mKCdkZXNjcmlwdGlvbicpID49IDApKSB7XG4gICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFNvbWUgdHlwZSBvZiBvYmplY3Qgd2l0aG91dCBwcm9wZXJ0aWVzIGNhbiBiZSBzaG9ydGN1dHRlZC5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB2YXIgbmFtZSA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbRnVuY3Rpb24nICsgbmFtZSArICddJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9XG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ2RhdGUnKTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlID0gJycsIGFycmF5ID0gZmFsc2UsIGJyYWNlcyA9IFsneycsICd9J107XG5cbiAgLy8gTWFrZSBBcnJheSBzYXkgdGhhdCB0aGV5IGFyZSBBcnJheVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBhcnJheSA9IHRydWU7XG4gICAgYnJhY2VzID0gWydbJywgJ10nXTtcbiAgfVxuXG4gIC8vIE1ha2UgZnVuY3Rpb25zIHNheSB0aGF0IHRoZXkgYXJlIGZ1bmN0aW9uc1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICB2YXIgbiA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgIGJhc2UgPSAnIFtGdW5jdGlvbicgKyBuICsgJ10nO1xuICB9XG5cbiAgLy8gTWFrZSBSZWdFeHBzIHNheSB0aGF0IHRoZXkgYXJlIFJlZ0V4cHNcbiAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBkYXRlcyB3aXRoIHByb3BlcnRpZXMgZmlyc3Qgc2F5IHRoZSBkYXRlXG4gIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBlcnJvciB3aXRoIG1lc3NhZ2UgZmlyc3Qgc2F5IHRoZSBlcnJvclxuICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwICYmICghYXJyYXkgfHwgdmFsdWUubGVuZ3RoID09IDApKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyBicmFjZXNbMV07XG4gIH1cblxuICBpZiAocmVjdXJzZVRpbWVzIDwgMCkge1xuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW09iamVjdF0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0eC5zZWVuLnB1c2godmFsdWUpO1xuXG4gIHZhciBvdXRwdXQ7XG4gIGlmIChhcnJheSkge1xuICAgIG91dHB1dCA9IGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3R4LnNlZW4ucG9wKCk7XG5cbiAgcmV0dXJuIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSkge1xuICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdmFyIHNpbXBsZSA9ICdcXCcnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL15cInxcIiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpICsgJ1xcJyc7XG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKHNpbXBsZSwgJ3N0cmluZycpO1xuICB9XG4gIGlmIChpc051bWJlcih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdudW1iZXInKTtcbiAgaWYgKGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdib29sZWFuJyk7XG4gIC8vIEZvciBzb21lIHJlYXNvbiB0eXBlb2YgbnVsbCBpcyBcIm9iamVjdFwiLCBzbyBzcGVjaWFsIGNhc2UgaGVyZS5cbiAgaWYgKGlzTnVsbCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCdudWxsJywgJ251bGwnKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gJ1snICsgRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICsgJ10nO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgU3RyaW5nKGkpKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBTdHJpbmcoaSksIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2goJycpO1xuICAgIH1cbiAgfVxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKCFrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIGtleSwgdHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSkge1xuICB2YXIgbmFtZSwgc3RyLCBkZXNjO1xuICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwga2V5KSB8fCB7IHZhbHVlOiB2YWx1ZVtrZXldIH07XG4gIGlmIChkZXNjLmdldCkge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXIvU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tTZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFoYXNPd25Qcm9wZXJ0eSh2aXNpYmxlS2V5cywga2V5KSkge1xuICAgIG5hbWUgPSAnWycgKyBrZXkgKyAnXSc7XG4gIH1cbiAgaWYgKCFzdHIpIHtcbiAgICBpZiAoY3R4LnNlZW4uaW5kZXhPZihkZXNjLnZhbHVlKSA8IDApIHtcbiAgICAgIGlmIChpc051bGwocmVjdXJzZVRpbWVzKSkge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCByZWN1cnNlVGltZXMgLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJykuc3Vic3RyKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0NpcmN1bGFyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmIChpc1VuZGVmaW5lZChuYW1lKSkge1xuICAgIGlmIChhcnJheSAmJiBrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBuYW1lID0gSlNPTi5zdHJpbmdpZnkoJycgKyBrZXkpO1xuICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDEsIG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ25hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBcIidcIik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ3N0cmluZycpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJzogJyArIHN0cjtcbn1cblxuXG5mdW5jdGlvbiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcykge1xuICB2YXIgbnVtTGluZXNFc3QgPSAwO1xuICB2YXIgbGVuZ3RoID0gb3V0cHV0LnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICBudW1MaW5lc0VzdCsrO1xuICAgIGlmIChjdXIuaW5kZXhPZignXFxuJykgPj0gMCkgbnVtTGluZXNFc3QrKztcbiAgICByZXR1cm4gcHJldiArIGN1ci5yZXBsYWNlKC9cXHUwMDFiXFxbXFxkXFxkP20vZywgJycpLmxlbmd0aCArIDE7XG4gIH0sIDApO1xuXG4gIGlmIChsZW5ndGggPiA2MCkge1xuICAgIHJldHVybiBicmFjZXNbMF0gK1xuICAgICAgICAgICAoYmFzZSA9PT0gJycgPyAnJyA6IGJhc2UgKyAnXFxuICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgb3V0cHV0LmpvaW4oJyxcXG4gICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgYnJhY2VzWzFdO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyAnICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgJyArIGJyYWNlc1sxXTtcbn1cblxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcik7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBpc09iamVjdChyZSkgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBpc09iamVjdChkKSAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gaXNPYmplY3QoZSkgJiZcbiAgICAgIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlcicpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cbiIsIi8qIVxuICogZ2V0LXZhbHVlIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9nZXQtdmFsdWU+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEpvbiBTY2hsaW5rZXJ0LlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqLCBwcm9wLCBhLCBiLCBjKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSB8fCAhcHJvcCkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBwcm9wID0gdG9TdHJpbmcocHJvcCk7XG5cbiAgLy8gYWxsb3dpbmcgZm9yIG11bHRpcGxlIHByb3BlcnRpZXMgdG8gYmUgcGFzc2VkIGFzXG4gIC8vIGEgc3RyaW5nIG9yIGFycmF5LCBidXQgbXVjaCBmYXN0ZXIgKDMtNHgpIHRoYW4gZG9pbmdcbiAgLy8gYFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKWBcbiAgaWYgKGEpIHByb3AgKz0gJy4nICsgdG9TdHJpbmcoYSk7XG4gIGlmIChiKSBwcm9wICs9ICcuJyArIHRvU3RyaW5nKGIpO1xuICBpZiAoYykgcHJvcCArPSAnLicgKyB0b1N0cmluZyhjKTtcblxuICBpZiAocHJvcCBpbiBvYmopIHtcbiAgICByZXR1cm4gb2JqW3Byb3BdO1xuICB9XG5cbiAgdmFyIHNlZ3MgPSBwcm9wLnNwbGl0KCcuJyk7XG4gIHZhciBsZW4gPSBzZWdzLmxlbmd0aDtcbiAgdmFyIGkgPSAtMTtcblxuICB3aGlsZSAob2JqICYmICgrK2kgPCBsZW4pKSB7XG4gICAgdmFyIGtleSA9IHNlZ3NbaV07XG4gICAgd2hpbGUgKGtleVtrZXkubGVuZ3RoIC0gMV0gPT09ICdcXFxcJykge1xuICAgICAga2V5ID0ga2V5LnNsaWNlKDAsIC0xKSArICcuJyArIHNlZ3NbKytpXTtcbiAgICB9XG4gICAgb2JqID0gb2JqW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKTtcbn1cblxuZnVuY3Rpb24gdG9TdHJpbmcodmFsKSB7XG4gIGlmICghdmFsKSByZXR1cm4gJyc7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICByZXR1cm4gdmFsLmpvaW4oJy4nKTtcbiAgfVxuICByZXR1cm4gdmFsO1xufVxuIiwiLyohXG4gKiBpcy1wbGFpbi1vYmplY3QgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLXBsYWluLW9iamVjdD5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNywgSm9uIFNjaGxpbmtlcnQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCdpc29iamVjdCcpO1xuXG5mdW5jdGlvbiBpc09iamVjdE9iamVjdChvKSB7XG4gIHJldHVybiBpc09iamVjdChvKSA9PT0gdHJ1ZVxuICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvKSB7XG4gIHZhciBjdG9yLHByb3Q7XG5cbiAgaWYgKGlzT2JqZWN0T2JqZWN0KG8pID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIGhhcyBtb2RpZmllZCBjb25zdHJ1Y3RvclxuICBjdG9yID0gby5jb25zdHJ1Y3RvcjtcbiAgaWYgKHR5cGVvZiBjdG9yICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgaGFzIG1vZGlmaWVkIHByb3RvdHlwZVxuICBwcm90ID0gY3Rvci5wcm90b3R5cGU7XG4gIGlmIChpc09iamVjdE9iamVjdChwcm90KSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiBjb25zdHJ1Y3RvciBkb2VzIG5vdCBoYXZlIGFuIE9iamVjdC1zcGVjaWZpYyBtZXRob2RcbiAgaWYgKHByb3QuaGFzT3duUHJvcGVydHkoJ2lzUHJvdG90eXBlT2YnKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBNb3N0IGxpa2VseSBhIHBsYWluIE9iamVjdFxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCJleHBvcnQgKiBmcm9tIFwiYmFzZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3VudERvd25cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3BlZWRvbWV0ZXJcIjsiLCJleHBvcnQgY29uc3QgZWFzaW5nID0ge1xyXG4gICAgbGluZWFyOiBmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIHJldHVybiBrO1xyXG4gICAgfSxcclxuICAgIHF1YWRyYXRpY0luOiBmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIHJldHVybiBrICogaztcclxuICAgIH0sXHJcbiAgICBxdWFkcmF0aWNPdXQ6IGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgcmV0dXJuIGsgKiAoMiAtIGspO1xyXG4gICAgfSxcclxuICAgIHF1YWRyYXRpY0luT3V0OiBmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHsgcmV0dXJuIDAuNSAqIGsgKiBrOyB9XHJcbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoLS1rICogKGsgLSAyKSAtIDEpO1xyXG4gICAgfSxcclxuICAgIGN1YmljSW46IGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgcmV0dXJuIGsgKiBrICogaztcclxuICAgIH0sXHJcbiAgICBjdWJpY091dDogZnVuY3Rpb24gKGspIHtcclxuICAgICAgICByZXR1cm4gLS1rICogayAqIGsgKyAxO1xyXG4gICAgfSxcclxuICAgIGN1YmljSW5PdXQ6IGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgaWYgKChrICo9IDIpIDwgMSkgeyByZXR1cm4gMC41ICogayAqIGsgKiBrOyB9XHJcbiAgICAgICAgcmV0dXJuIDAuNSAqICgoayAtPSAyKSAqIGsgKiBrICsgMik7XHJcbiAgICB9LFxyXG4gICAgcXVhcnRpY0luOiBmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIHJldHVybiBrICogayAqIGsgKiBrO1xyXG4gICAgfSxcclxuICAgIHF1YXJ0aWNPdXQ6IGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgcmV0dXJuIDEgLSAoLS1rICogayAqIGsgKiBrKTtcclxuICAgIH0sXHJcbiAgICBxdWFydGljSW5PdXQ6IGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgaWYgKChrICo9IDIpIDwgMSkgeyByZXR1cm4gMC41ICogayAqIGsgKiBrICogazsgfVxyXG4gICAgICAgIHJldHVybiAtMC41ICogKChrIC09IDIpICogayAqIGsgKiBrIC0gMik7XHJcbiAgICB9LFxyXG4gICAgcXVpbnRpY0luOiBmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIHJldHVybiBrICogayAqIGsgKiBrICogaztcclxuICAgIH0sXHJcbiAgICBxdWludGljT3V0OiBmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIHJldHVybiAtLWsgKiBrICogayAqIGsgKiBrICsgMTtcclxuICAgIH0sXHJcbiAgICBxdWludGljSW5PdXQ6IGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgaWYgKChrICo9IDIpIDwgMSkgeyByZXR1cm4gMC41ICogayAqIGsgKiBrICogayAqIGs7IH1cclxuICAgICAgICByZXR1cm4gMC41ICogKChrIC09IDIpICogayAqIGsgKiBrICogayArIDIpO1xyXG4gICAgfSxcclxuICAgIHNpbnVzb2lkYWxJbjogZnVuY3Rpb24gKGspIHtcclxuICAgICAgICByZXR1cm4gMSAtIE1hdGguY29zKGsgKiBNYXRoLlBJIC8gMik7XHJcbiAgICB9LFxyXG4gICAgc2ludXNvaWRhbE91dDogZnVuY3Rpb24gKGspIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zaW4oayAqIE1hdGguUEkgLyAyKTtcclxuICAgIH0sXHJcbiAgICBzaW51c29pZGFsSW5PdXQ6IGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgcmV0dXJuIDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIGspKTtcclxuICAgIH0sXHJcbiAgICBleHBvbmVudGlhbEluOiBmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIHJldHVybiBrID09PSAwID8gMCA6IE1hdGgucG93KDEwMjQsIGsgLSAxKTtcclxuICAgIH0sXHJcbiAgICBleHBvbmVudGlhbE91dDogZnVuY3Rpb24gKGspIHtcclxuICAgICAgICByZXR1cm4gayA9PT0gMSA/IDEgOiAxIC0gTWF0aC5wb3coMiwgLTEwICogayk7XHJcbiAgICB9LFxyXG4gICAgZXhwb25lbnRpYWxJbk91dDogZnVuY3Rpb24gKGspIHtcclxuICAgICAgICBpZiAoayA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGsgPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KDEwMjQsIGsgLSAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDAuNSAqICgtTWF0aC5wb3coMiwgLTEwICogKGsgLSAxKSkgKyAyKTtcclxuICAgIH0sXHJcbiAgICBjaXJjdWxhckluOiBmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSBrICogayk7XHJcbiAgICB9LFxyXG4gICAgY2lyY3VsYXJPdXQ6IGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCgxIC0gKC0tayAqIGspKTtcclxuICAgIH0sXHJcbiAgICBjaXJjdWxhckluT3V0OiBmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHsgcmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSBrICogaykgLSAxKTsgfVxyXG4gICAgICAgIHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAoayAtPSAyKSAqIGspICsgMSk7XHJcbiAgICB9LFxyXG4gICAgZWxhc3RpY0luOiBmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIHZhciBzO1xyXG4gICAgICAgIHZhciBhID0gMC4xO1xyXG4gICAgICAgIHZhciBwID0gMC40O1xyXG4gICAgICAgIGlmIChrID09PSAwKSB7IHJldHVybiAwOyB9XHJcbiAgICAgICAgaWYgKGsgPT09IDEpIHsgcmV0dXJuIDE7IH1cclxuICAgICAgICBpZiAoIWEgfHwgYSA8IDEpIHsgYSA9IDE7IHMgPSBwIC8gNDsgfVxyXG4gICAgICAgIGVsc2UgeyBzID0gcCAqIE1hdGguYXNpbigxIC8gYSkgLyAoMiAqIE1hdGguUEkpOyB9XHJcbiAgICAgICAgcmV0dXJuIC0oYSAqIE1hdGgucG93KDIsIDEwICogKGsgLT0gMSkpICogTWF0aC5zaW4oKGsgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSk7XHJcbiAgICB9LFxyXG4gICAgZWxhc3RpY091dDogZnVuY3Rpb24gKGspIHtcclxuICAgICAgICB2YXIgcztcclxuICAgICAgICB2YXIgYSA9IDAuMTtcclxuICAgICAgICB2YXIgcCA9IDAuNDtcclxuICAgICAgICBpZiAoayA9PT0gMCkgeyByZXR1cm4gMDsgfVxyXG4gICAgICAgIGlmIChrID09PSAxKSB7IHJldHVybiAxOyB9XHJcbiAgICAgICAgaWYgKCFhIHx8IGEgPCAxKSB7IGEgPSAxOyBzID0gcCAvIDQ7IH1cclxuICAgICAgICBlbHNlIHsgcyA9IHAgKiBNYXRoLmFzaW4oMSAvIGEpIC8gKDIgKiBNYXRoLlBJKTsgfVxyXG4gICAgICAgIHJldHVybiAoYSAqIE1hdGgucG93KDIsIC0xMCAqIGspICogTWF0aC5zaW4oKGsgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSArIDEpO1xyXG4gICAgfSxcclxuICAgIGVsYXN0aWNJbk91dDogZnVuY3Rpb24gKGspIHtcclxuICAgICAgICB2YXIgcztcclxuICAgICAgICB2YXIgYSA9IDAuMTtcclxuICAgICAgICB2YXIgcCA9IDAuNDtcclxuICAgICAgICBpZiAoayA9PT0gMCkgeyByZXR1cm4gMDsgfVxyXG4gICAgICAgIGlmIChrID09PSAxKSB7IHJldHVybiAxOyB9XHJcbiAgICAgICAgaWYgKCFhIHx8IGEgPCAxKSB7IGEgPSAxOyBzID0gcCAvIDQ7IH1cclxuICAgICAgICBlbHNlIHsgcyA9IHAgKiBNYXRoLmFzaW4oMSAvIGEpIC8gKDIgKiBNYXRoLlBJKTsgfVxyXG4gICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiAoYSAqIE1hdGgucG93KDIsIDEwICogKGsgLT0gMSkpICogTWF0aC5zaW4oKGsgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhICogTWF0aC5wb3coMiwgLTEwICogKGsgLT0gMSkpICogTWF0aC5zaW4oKGsgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSAqIDAuNSArIDE7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyDlnKjmn5DkuIDliqjnlLvlvIDlp4vmsr/mjIfnpLrnmoTot6/lvoTov5vooYzliqjnlLvlpITnkIbliY3nqI3nqI3mlLblm57or6XliqjnlLvnmoTnp7vliqhcclxuICAgIGJhY2tJbjogZnVuY3Rpb24gKGspIHtcclxuICAgICAgICB2YXIgcyA9IDEuNzAxNTg7XHJcbiAgICAgICAgcmV0dXJuIGsgKiBrICogKChzICsgMSkgKiBrIC0gcyk7XHJcbiAgICB9LFxyXG4gICAgYmFja091dDogZnVuY3Rpb24gKGspIHtcclxuICAgICAgICB2YXIgcyA9IDEuNzAxNTg7XHJcbiAgICAgICAgcmV0dXJuIC0tayAqIGsgKiAoKHMgKyAxKSAqIGsgKyBzKSArIDE7XHJcbiAgICB9LFxyXG4gICAgYmFja0luT3V0OiBmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIHZhciBzID0gMS43MDE1OCAqIDEuNTI1O1xyXG4gICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHsgcmV0dXJuIDAuNSAqIChrICogayAqICgocyArIDEpICogayAtIHMpKTsgfVxyXG4gICAgICAgIHJldHVybiAwLjUgKiAoKGsgLT0gMikgKiBrICogKChzICsgMSkgKiBrICsgcykgKyAyKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8g5Yib5bu65by56Lez5pWI5p6cXHJcbiAgICBib3VuY2VJbjogZnVuY3Rpb24gKGspIHtcclxuICAgICAgICByZXR1cm4gMSAtIGVhc2luZ0Z1bmNzLmJvdW5jZU91dCgxIC0gayk7XHJcbiAgICB9LFxyXG4gICAgYm91bmNlT3V0OiBmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIGlmIChrIDwgKDEgLyAyLjc1KSkgeyByZXR1cm4gNy41NjI1ICogayAqIGs7IH1cclxuICAgICAgICBlbHNlIGlmIChrIDwgKDIgLyAyLjc1KSkgeyByZXR1cm4gNy41NjI1ICogKGsgLT0gKDEuNSAvIDIuNzUpKSAqIGsgKyAwLjc1OyB9XHJcbiAgICAgICAgZWxzZSBpZiAoayA8ICgyLjUgLyAyLjc1KSkgeyByZXR1cm4gNy41NjI1ICogKGsgLT0gKDIuMjUgLyAyLjc1KSkgKiBrICsgMC45Mzc1OyB9XHJcbiAgICAgICAgZWxzZSB7IHJldHVybiA3LjU2MjUgKiAoayAtPSAoMi42MjUgLyAyLjc1KSkgKiBrICsgMC45ODQzNzU7IH1cclxuICAgIH0sXHJcbiAgICBib3VuY2VJbk91dDogZnVuY3Rpb24gKGspIHtcclxuICAgICAgICBpZiAoayA8IDAuNSkgeyByZXR1cm4gZWFzaW5nRnVuY3MuYm91bmNlSW4oayAqIDIpICogMC41OyB9XHJcbiAgICAgICAgcmV0dXJuIGVhc2luZ0Z1bmNzLmJvdW5jZU91dChrICogMiAtIDEpICogMC41ICsgMC41O1xyXG4gICAgfVxyXG59OyIsImNvbnNvbGUubG9nKFwiSW1wb3J0IENvcmUuanNcIilcclxuZXhwb3J0IGNsYXNzIERyYXcge1xyXG4gIGNvbnN0cnVjdG9yKGN0eCkge1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgfVxyXG5cclxuICBMaW5lckdyYWRpZW50KHgxLCB5MSwgeDIsIHkyLCBzdG9wTGlzdCkge1xyXG4gICAgbGV0IGN0eCA9IHRoaXMuY3R4O1xyXG4gICAgbGV0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoeDEsIHkxLCB4MiwgeTIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9wTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBncmFkLmFkZENvbG9yU3RvcChzdG9wTGlzdFtpXVswXSwgc3RvcExpc3RbaV1bMV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdyYWQ7XHJcbiAgfVxyXG5cclxuICBDaXJjdWxhckdyYWRpZW50KHgsIHksIHIsIHN0b3BMaXN0KSB7XHJcbiAgICBsZXQgY3R4ID0gdGhpcy5jdHg7XHJcbiAgICBsZXQgZ3JhZCA9IGN0eC5jcmVhdGVDaXJjdWxhckdyYWRpZW50KHgsIHksIHIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9wTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBncmFkLmFkZENvbG9yU3RvcChzdG9wTGlzdFtpXVswXSwgc3RvcExpc3RbaV1bMV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdyYWQ7XHJcbiAgfVxyXG5cclxuICBfc2V0U3R5bGUoc3R5bGVzKSB7XHJcbiAgICBsZXQgY3R4ID0gdGhpcy5jdHg7XHJcbiAgICBpZiAoc3R5bGVzKSB7XHJcbiAgICAgIGZvciAobGV0IGtleSBpbiBzdHlsZXMpIHtcclxuICAgICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgICAgY2FzZSBcImZpbGxcIjoge1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gc3R5bGVzW2tleV07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2FzZSBcInN0cm9rZVN0eWxlXCI6IHtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc3R5bGVzW2tleV07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2FzZSBcImxpbmVXaWR0aFwiOiB7XHJcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBzdHlsZXNba2V5XTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXNlIFwibGluZUNhcFwiOiB7XHJcbiAgICAgICAgICAgIGN0eC5saW5lQ2FwID0gc3R5bGVzW2tleV07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2FzZSBcInNoYWRvd0NvbG9yXCI6IHtcclxuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gc3R5bGVzW2tleV07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2FzZSBcInNoYWRvd09mZnNldFhcIjoge1xyXG4gICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IHN0eWxlc1trZXldO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhc2UgXCJzaGFkb3dPZmZzZXRZXCI6IHtcclxuICAgICAgICAgICAgY3R4LnNoYWRvd09mZnNldFkgPSBzdHlsZXNba2V5XTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXNlIFwic2V0U2hhZG93XCI6IHtcclxuICAgICAgICAgICAgY3R4LnNldFNoYWRvdyhzdHlsZXNba2V5XVswXSwgc3R5bGVzW2tleV1bMV0sIHN0eWxlc1trZXldWzJdLCBzdHlsZXNba2V5XVszXSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2FzZSBcImZvbnRcIjoge1xyXG4gICAgICAgICAgICBjdHguZm9udCA9IHN0eWxlc1trZXldO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhc2UgXCJ0ZXh0QmFzZWxpbmVcIjoge1xyXG4gICAgICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gc3R5bGVzW2tleV07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2FzZSBcInRleHRBbGlnblwiOiB7XHJcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBzdHlsZXNba2V5XTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfdHJhbnNmb3JtKG9wdCkge1xyXG4gICAgbGV0IGN0eCA9IHRoaXMuY3R4O1xyXG4gICAgZm9yIChsZXQga2V5IGluIG9wdCkge1xyXG4gICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2UgXCJ0cmFuc2xhdGVcIjoge1xyXG4gICAgICAgICAgY3R4LnRyYW5zbGF0ZShvcHRba2V5XVswXSwgb3B0W2tleV1bMV0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJyb3RhdGVcIjoge1xyXG4gICAgICAgICAgY3R4LnJvdGF0ZShvcHRba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBBcmMob3B0KSB7XHJcbiAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcclxuICAgIGxldCBzaGFwZSA9IG9wdC5zaGFwZSxcclxuICAgICAgc3R5bGVzID0gb3B0LnN0eWxlcztcclxuXHJcbiAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgIHRoaXMuX3NldFN0eWxlKHN0eWxlcyk7XHJcblxyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmFyYyhzaGFwZS54LCBzaGFwZS55LCBzaGFwZS5yLCBzaGFwZS5zYSwgc2hhcGUuZWEsIHNoYXBlLmNvdW50ZXJjbG9ja3dpc2UpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICBMaW5lKG9wdCkge1xyXG4gICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XHJcbiAgICBsZXQgc2hhcGUgPSBvcHQuc2hhcGUsXHJcbiAgICAgIHN0eWxlcyA9IG9wdC5zdHlsZXM7XHJcblxyXG4gICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICB0aGlzLl9zZXRTdHlsZShzdHlsZXMpO1xyXG4gICAgdGhpcy5fdHJhbnNmb3JtKG9wdCk7XHJcblxyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbyhzaGFwZS54MSwgc2hhcGUueTEpO1xyXG4gICAgY3R4LmxpbmVUbyhzaGFwZS54Miwgc2hhcGUueTIpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICBDaXJjbGUob3B0LCBtZXRob2QpIHtcclxuICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xyXG4gICAgbGV0IHNoYXBlID0gb3B0LnNoYXBlLFxyXG4gICAgICBzdHlsZXMgPSBvcHQuc3R5bGVzO1xyXG5cclxuICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgdGhpcy5fc2V0U3R5bGUoc3R5bGVzKTtcclxuXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKHNoYXBlLngsIHNoYXBlLnksIHNoYXBlLnIsIHNoYXBlLnNhIHx8IDAsIHNoYXBlLmVhIHx8IE1hdGguUEkgKiAyKTtcclxuXHJcbiAgICBtZXRob2QgJiYgbWV0aG9kID09IFwiZmlsbFwiICYmIGN0eC5maWxsKCk7XHJcbiAgICBtZXRob2QgJiYgbWV0aG9kID09IFwic3Ryb2tlXCIgJiYgY3R4LnN0cm9rZSgpO1xyXG4gICAgaWYgKG1ldGhvZCA9PSBcIm1peFwiKSB7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgVGV4dChvcHRpb24pIHtcclxuICAgIGxldCBjdHggPSB0aGlzLmN0eCxcclxuICAgICAgc3R5bGVzID0gb3B0aW9uLnN0eWxlcztcclxuXHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgdGhpcy5fc2V0U3R5bGUoc3R5bGVzKTtcclxuICAgIHRoaXMuX3RyYW5zZm9ybShvcHRpb24pO1xyXG5cclxuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIiM0ODQ0NDNcIjtcclxuICAgIC8vIGN0eC5mb250ID0gYCR7cGFyc2VJbnQod2lkdGgvIDYpfXB4IEZqYWxsYU9uZWA7XHJcbiAgICAvLyBjdHguc2V0VGV4dEFsaWduKFwiY2VudGVyXCIpO1xyXG4gICAgLy8gY3R4LnNldFRleHRCYXNlbGluZShcIm1pZGRsZVwiKTtcclxuXHJcbiAgICBjdHguZmlsbFRleHQob3B0aW9uLnRleHQsIG9wdGlvbi54LCBvcHRpb24ueSk7XHJcblxyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuICB9XHJcbn0iLCJ2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGtpbmRPZih2YWwpIHtcbiAgaWYgKHZhbCA9PT0gdm9pZCAwKSByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIGlmICh2YWwgPT09IG51bGwpIHJldHVybiAnbnVsbCc7XG5cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gJ2Jvb2xlYW4nO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHJldHVybiAnc3RyaW5nJztcbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKSByZXR1cm4gJ251bWJlcic7XG4gIGlmICh0eXBlID09PSAnc3ltYm9sJykgcmV0dXJuICdzeW1ib2wnO1xuICBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBpc0dlbmVyYXRvckZuKHZhbCkgPyAnZ2VuZXJhdG9yZnVuY3Rpb24nIDogJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGlmIChpc0FycmF5KHZhbCkpIHJldHVybiAnYXJyYXknO1xuICBpZiAoaXNCdWZmZXIodmFsKSkgcmV0dXJuICdidWZmZXInO1xuICBpZiAoaXNBcmd1bWVudHModmFsKSkgcmV0dXJuICdhcmd1bWVudHMnO1xuICBpZiAoaXNEYXRlKHZhbCkpIHJldHVybiAnZGF0ZSc7XG4gIGlmIChpc0Vycm9yKHZhbCkpIHJldHVybiAnZXJyb3InO1xuICBpZiAoaXNSZWdleHAodmFsKSkgcmV0dXJuICdyZWdleHAnO1xuXG4gIHN3aXRjaCAoY3Rvck5hbWUodmFsKSkge1xuICAgIGNhc2UgJ1N5bWJvbCc6IHJldHVybiAnc3ltYm9sJztcbiAgICBjYXNlICdQcm9taXNlJzogcmV0dXJuICdwcm9taXNlJztcblxuICAgIC8vIFNldCwgTWFwLCBXZWFrU2V0LCBXZWFrTWFwXG4gICAgY2FzZSAnV2Vha01hcCc6IHJldHVybiAnd2Vha21hcCc7XG4gICAgY2FzZSAnV2Vha1NldCc6IHJldHVybiAnd2Vha3NldCc7XG4gICAgY2FzZSAnTWFwJzogcmV0dXJuICdtYXAnO1xuICAgIGNhc2UgJ1NldCc6IHJldHVybiAnc2V0JztcblxuICAgIC8vIDgtYml0IHR5cGVkIGFycmF5c1xuICAgIGNhc2UgJ0ludDhBcnJheSc6IHJldHVybiAnaW50OGFycmF5JztcbiAgICBjYXNlICdVaW50OEFycmF5JzogcmV0dXJuICd1aW50OGFycmF5JztcbiAgICBjYXNlICdVaW50OENsYW1wZWRBcnJheSc6IHJldHVybiAndWludDhjbGFtcGVkYXJyYXknO1xuXG4gICAgLy8gMTYtYml0IHR5cGVkIGFycmF5c1xuICAgIGNhc2UgJ0ludDE2QXJyYXknOiByZXR1cm4gJ2ludDE2YXJyYXknO1xuICAgIGNhc2UgJ1VpbnQxNkFycmF5JzogcmV0dXJuICd1aW50MTZhcnJheSc7XG5cbiAgICAvLyAzMi1iaXQgdHlwZWQgYXJyYXlzXG4gICAgY2FzZSAnSW50MzJBcnJheSc6IHJldHVybiAnaW50MzJhcnJheSc7XG4gICAgY2FzZSAnVWludDMyQXJyYXknOiByZXR1cm4gJ3VpbnQzMmFycmF5JztcbiAgICBjYXNlICdGbG9hdDMyQXJyYXknOiByZXR1cm4gJ2Zsb2F0MzJhcnJheSc7XG4gICAgY2FzZSAnRmxvYXQ2NEFycmF5JzogcmV0dXJuICdmbG9hdDY0YXJyYXknO1xuICB9XG5cbiAgaWYgKGlzR2VuZXJhdG9yT2JqKHZhbCkpIHtcbiAgICByZXR1cm4gJ2dlbmVyYXRvcic7XG4gIH1cblxuICAvLyBOb24tcGxhaW4gb2JqZWN0c1xuICB0eXBlID0gdG9TdHJpbmcuY2FsbCh2YWwpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdbb2JqZWN0IE9iamVjdF0nOiByZXR1cm4gJ29iamVjdCc7XG4gICAgLy8gaXRlcmF0b3JzXG4gICAgY2FzZSAnW29iamVjdCBNYXAgSXRlcmF0b3JdJzogcmV0dXJuICdtYXBpdGVyYXRvcic7XG4gICAgY2FzZSAnW29iamVjdCBTZXQgSXRlcmF0b3JdJzogcmV0dXJuICdzZXRpdGVyYXRvcic7XG4gICAgY2FzZSAnW29iamVjdCBTdHJpbmcgSXRlcmF0b3JdJzogcmV0dXJuICdzdHJpbmdpdGVyYXRvcic7XG4gICAgY2FzZSAnW29iamVjdCBBcnJheSBJdGVyYXRvcl0nOiByZXR1cm4gJ2FycmF5aXRlcmF0b3InO1xuICB9XG5cbiAgLy8gb3RoZXJcbiAgcmV0dXJuIHR5cGUuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICcnKTtcbn07XG5cbmZ1bmN0aW9uIGN0b3JOYW1lKHZhbCkge1xuICByZXR1cm4gdmFsLmNvbnN0cnVjdG9yID8gdmFsLmNvbnN0cnVjdG9yLm5hbWUgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheSkgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKTtcbiAgcmV0dXJuIHZhbCBpbnN0YW5jZW9mIEFycmF5O1xufVxuXG5mdW5jdGlvbiBpc0Vycm9yKHZhbCkge1xuICByZXR1cm4gdmFsIGluc3RhbmNlb2YgRXJyb3IgfHwgKHR5cGVvZiB2YWwubWVzc2FnZSA9PT0gJ3N0cmluZycgJiYgdmFsLmNvbnN0cnVjdG9yICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3Iuc3RhY2tUcmFjZUxpbWl0ID09PSAnbnVtYmVyJyk7XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIERhdGUpIHJldHVybiB0cnVlO1xuICByZXR1cm4gdHlwZW9mIHZhbC50b0RhdGVTdHJpbmcgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgdmFsLmdldERhdGUgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgdmFsLnNldERhdGUgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzUmVnZXhwKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgUmVnRXhwKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHR5cGVvZiB2YWwuZmxhZ3MgPT09ICdzdHJpbmcnXG4gICAgJiYgdHlwZW9mIHZhbC5pZ25vcmVDYXNlID09PSAnYm9vbGVhbidcbiAgICAmJiB0eXBlb2YgdmFsLm11bHRpbGluZSA9PT0gJ2Jvb2xlYW4nXG4gICAgJiYgdHlwZW9mIHZhbC5nbG9iYWwgPT09ICdib29sZWFuJztcbn1cblxuZnVuY3Rpb24gaXNHZW5lcmF0b3JGbihuYW1lLCB2YWwpIHtcbiAgcmV0dXJuIGN0b3JOYW1lKG5hbWUpID09PSAnR2VuZXJhdG9yRnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc0dlbmVyYXRvck9iaih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwudGhyb3cgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgdmFsLnJldHVybiA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiB2YWwubmV4dCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNBcmd1bWVudHModmFsKSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiB2YWwubGVuZ3RoID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdmFsLmNhbGxlZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UuaW5kZXhPZignY2FsbGVlJykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIElmIHlvdSBuZWVkIHRvIHN1cHBvcnQgU2FmYXJpIDUtNyAoOC0xMCB5ci1vbGQgYnJvd3NlciksXG4gKiB0YWtlIGEgbG9vayBhdCBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2lzLWJ1ZmZlclxuICovXG5cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICBpZiAodmFsLmNvbnN0cnVjdG9yICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyohXG4gKiBpcy1kZXNjcmlwdG9yIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1kZXNjcmlwdG9yPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNS0yMDE3LCBKb24gU2NobGlua2VydC5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciB0eXBlT2YgPSByZXF1aXJlKCdraW5kLW9mJyk7XG52YXIgaXNBY2Nlc3NvciA9IHJlcXVpcmUoJ2lzLWFjY2Vzc29yLWRlc2NyaXB0b3InKTtcbnZhciBpc0RhdGEgPSByZXF1aXJlKCdpcy1kYXRhLWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Rlc2NyaXB0b3Iob2JqLCBrZXkpIHtcbiAgaWYgKHR5cGVPZihvYmopICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoJ2dldCcgaW4gb2JqKSB7XG4gICAgcmV0dXJuIGlzQWNjZXNzb3Iob2JqLCBrZXkpO1xuICB9XG4gIHJldHVybiBpc0RhdGEob2JqLCBrZXkpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgQ2FjaGVCYXNlID0gcmVxdWlyZSgnY2FjaGUtYmFzZScpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnaXNvYmplY3QnKTtcbnZhciBtZXJnZSA9IHJlcXVpcmUoJ21peGluLWRlZXAnKTtcbnZhciBwYXNjYWwgPSByZXF1aXJlKCdwYXNjYWxjYXNlJyk7XG52YXIgY3UgPSByZXF1aXJlKCdjbGFzcy11dGlscycpO1xuXG4vKipcbiAqIE9wdGlvbmFsbHkgZGVmaW5lIGEgY3VzdG9tIGBjYWNoZWAgbmFtZXNwYWNlIHRvIHVzZS5cbiAqL1xuXG5mdW5jdGlvbiBuYW1lc3BhY2UobmFtZSkge1xuICB2YXIgQ2FjaGUgPSBuYW1lID8gQ2FjaGVCYXNlLm5hbWVzcGFjZShuYW1lKSA6IENhY2hlQmFzZTtcbiAgdmFyIGZucyA9IFtdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgYEJhc2VgIHdpdGggdGhlIGdpdmVuIGBjb25maWdgIGFuZCBgb3B0aW9uc2AuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIC8vIGluaXRpYWxpemUgd2l0aCBgY29uZmlnYCBhbmQgYG9wdGlvbnNgXG4gICAqIHZhciBhcHAgPSBuZXcgQmFzZSh7aXNBcHA6IHRydWV9LCB7YWJjOiB0cnVlfSk7XG4gICAqIGFwcC5zZXQoJ2ZvbycsICdiYXInKTtcbiAgICpcbiAgICogLy8gdmFsdWVzIGRlZmluZWQgd2l0aCB0aGUgZ2l2ZW4gYGNvbmZpZ2Agb2JqZWN0IHdpbGwgYmUgb24gdGhlIHJvb3Qgb2YgdGhlIGluc3RhbmNlXG4gICAqIGNvbnNvbGUubG9nKGFwcC5iYXopOyAvLz0+IHVuZGVmaW5lZFxuICAgKiBjb25zb2xlLmxvZyhhcHAuZm9vKTsgLy89PiAnYmFyJ1xuICAgKiAvLyBvciB1c2UgYC5nZXRgXG4gICAqIGNvbnNvbGUubG9nKGFwcC5nZXQoJ2lzQXBwJykpOyAvLz0+IHRydWVcbiAgICogY29uc29sZS5sb2coYXBwLmdldCgnZm9vJykpOyAvLz0+ICdiYXInXG4gICAqXG4gICAqIC8vIHZhbHVlcyBkZWZpbmVkIHdpdGggdGhlIGdpdmVuIGBvcHRpb25zYCBvYmplY3Qgd2lsbCBiZSBvbiBgYXBwLm9wdGlvbnNcbiAgICogY29uc29sZS5sb2coYXBwLm9wdGlvbnMuYWJjKTsgLy89PiB0cnVlXG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYGNvbmZpZ2AgSWYgc3VwcGxpZWQsIHRoaXMgb2JqZWN0IGlzIHBhc3NlZCB0byBbY2FjaGUtYmFzZV1bXSB0byBtZXJnZSBvbnRvIHRoZSB0aGUgaW5zdGFuY2UgdXBvbiBpbnN0YW50aWF0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgIElmIHN1cHBsaWVkLCB0aGlzIG9iamVjdCBpcyB1c2VkIHRvIGluaXRpYWxpemUgdGhlIGBiYXNlLm9wdGlvbnNgIG9iamVjdC5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZnVuY3Rpb24gQmFzZShjb25maWcsIG9wdGlvbnMpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQmFzZSkpIHtcbiAgICAgIHJldHVybiBuZXcgQmFzZShjb25maWcsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBDYWNoZS5jYWxsKHRoaXMsIGNvbmZpZyk7XG4gICAgdGhpcy5pcygnYmFzZScpO1xuICAgIHRoaXMuaW5pdEJhc2UoY29uZmlnLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmhlcml0IGNhY2hlLWJhc2VcbiAgICovXG5cbiAgdXRpbC5pbmhlcml0cyhCYXNlLCBDYWNoZSk7XG5cbiAgLyoqXG4gICAqIEFkZCBzdGF0aWMgZW1pdHRlciBtZXRob2RzXG4gICAqL1xuXG4gIEVtaXR0ZXIoQmFzZSk7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYEJhc2VgIGRlZmF1bHRzIHdpdGggdGhlIGdpdmVuIGBjb25maWdgIG9iamVjdFxuICAgKi9cblxuICBCYXNlLnByb3RvdHlwZS5pbml0QmFzZSA9IGZ1bmN0aW9uKGNvbmZpZywgb3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlKHt9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIHRoaXMuY2FjaGUgPSB0aGlzLmNhY2hlIHx8IHt9O1xuICAgIHRoaXMuZGVmaW5lKCdyZWdpc3RlcmVkJywge30pO1xuICAgIGlmIChuYW1lKSB0aGlzW25hbWVdID0ge307XG5cbiAgICAvLyBtYWtlIGBhcHAuX2NhbGxiYWNrc2Agbm9uLWVudW1lcmFibGVcbiAgICB0aGlzLmRlZmluZSgnX2NhbGxiYWNrcycsIHRoaXMuX2NhbGxiYWNrcyk7XG4gICAgaWYgKGlzT2JqZWN0KGNvbmZpZykpIHtcbiAgICAgIHRoaXMudmlzaXQoJ3NldCcsIGNvbmZpZyk7XG4gICAgfVxuICAgIEJhc2UucnVuKHRoaXMsICd1c2UnLCBmbnMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGdpdmVuIGBuYW1lYCBvbiBgYXBwLl9uYW1lYCBhbmQgYGFwcC5pcypgIHByb3BlcnRpZXMuIFVzZWQgZm9yIGRvaW5nXG4gICAqIGxvb2t1cHMgaW4gcGx1Z2lucy5cbiAgICpcbiAgICogYGBganNcbiAgICogYXBwLmlzKCdmb28nKTtcbiAgICogY29uc29sZS5sb2coYXBwLl9uYW1lKTtcbiAgICogLy89PiAnZm9vJ1xuICAgKiBjb25zb2xlLmxvZyhhcHAuaXNGb28pO1xuICAgKiAvLz0+IHRydWVcbiAgICogYXBwLmlzKCdiYXInKTtcbiAgICogY29uc29sZS5sb2coYXBwLmlzRm9vKTtcbiAgICogLy89PiB0cnVlXG4gICAqIGNvbnNvbGUubG9nKGFwcC5pc0Jhcik7XG4gICAqIC8vPT4gdHJ1ZVxuICAgKiBjb25zb2xlLmxvZyhhcHAuX25hbWUpO1xuICAgKiAvLz0+ICdiYXInXG4gICAqIGBgYFxuICAgKiBAbmFtZSAuaXNcbiAgICogQHBhcmFtIHtTdHJpbmd9IGBuYW1lYFxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBCYXNlLnByb3RvdHlwZS5pcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBuYW1lIHRvIGJlIGEgc3RyaW5nJyk7XG4gICAgfVxuICAgIHRoaXMuZGVmaW5lKCdpcycgKyBwYXNjYWwobmFtZSksIHRydWUpO1xuICAgIHRoaXMuZGVmaW5lKCdfbmFtZScsIG5hbWUpO1xuICAgIHRoaXMuZGVmaW5lKCdfYXBwbmFtZScsIG5hbWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYSBwbHVnaW4gaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkIG9uIGFuIGluc3RhbmNlLlxuICAgKlxuICAgKiBQbHVnaW4gaW1wbGVtZW50b3JzIGFyZSBlbmNvdXJhZ2VkIHRvIHVzZSB0aGlzIGZpcnN0IHRoaW5nIGluIGEgcGx1Z2luXG4gICAqIHRvIHByZXZlbnQgdGhlIHBsdWdpbiBmcm9tIGJlaW5nIGNhbGxlZCBtb3JlIHRoYW4gb25jZSBvbiB0aGUgc2FtZVxuICAgKiBpbnN0YW5jZS5cbiAgICpcbiAgICogYGBganNcbiAgICogdmFyIGJhc2UgPSBuZXcgQmFzZSgpO1xuICAgKiBiYXNlLnVzZShmdW5jdGlvbihhcHApIHtcbiAgICogICBpZiAoYXBwLmlzUmVnaXN0ZXJlZCgnbXlQbHVnaW4nKSkgcmV0dXJuO1xuICAgKiAgIC8vIGRvIHN0dWZmIHRvIGBhcHBgXG4gICAqIH0pO1xuICAgKlxuICAgKiAvLyB0byBhbHNvIHJlY29yZCB0aGUgcGx1Z2luIGFzIGJlaW5nIHJlZ2lzdGVyZWRcbiAgICogYmFzZS51c2UoZnVuY3Rpb24oYXBwKSB7XG4gICAqICAgaWYgKGFwcC5pc1JlZ2lzdGVyZWQoJ215UGx1Z2luJywgdHJ1ZSkpIHJldHVybjtcbiAgICogICAvLyBkbyBzdHVmZiB0byBgYXBwYFxuICAgKiB9KTtcbiAgICogYGBgXG4gICAqIEBuYW1lIC5pc1JlZ2lzdGVyZWRcbiAgICogQGVtaXRzIGBwbHVnaW5gIEVtaXRzIHRoZSBuYW1lIG9mIHRoZSBwbHVnaW4gYmVpbmcgcmVnaXN0ZXJlZC4gVXNlZnVsIGZvciB1bml0IHRlc3RzLCB0byBlbnN1cmUgcGx1Z2lucyBhcmUgb25seSByZWdpc3RlcmVkIG9uY2UuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBgbmFtZWAgVGhlIHBsdWdpbiBuYW1lLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGByZWdpc3RlcmAgSWYgdGhlIHBsdWdpbiBpZiBub3QgYWxyZWFkeSByZWdpc3RlcmVkLCB0byByZWNvcmQgaXQgYXMgYmVpbmcgcmVnaXN0ZXJlZCBwYXNzIGB0cnVlYCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYSBwbHVnaW4gaXMgYWxyZWFkeSByZWdpc3RlcmVkLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBCYXNlLnByb3RvdHlwZS5pc1JlZ2lzdGVyZWQgPSBmdW5jdGlvbihuYW1lLCByZWdpc3Rlcikge1xuICAgIGlmICh0aGlzLnJlZ2lzdGVyZWQuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAocmVnaXN0ZXIgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyZWRbbmFtZV0gPSB0cnVlO1xuICAgICAgdGhpcy5lbWl0KCdwbHVnaW4nLCBuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZWZpbmUgYSBwbHVnaW4gZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGltbWVkaWF0ZWx5IHVwb24gaW5pdC4gUGx1Z2lucyBhcmUgY2hhaW5hYmxlXG4gICAqIGFuZCBleHBvc2UgdGhlIGZvbGxvd2luZyBhcmd1bWVudHMgdG8gdGhlIHBsdWdpbiBmdW5jdGlvbjpcbiAgICpcbiAgICogLSBgYXBwYDogdGhlIGN1cnJlbnQgaW5zdGFuY2Ugb2YgYEJhc2VgXG4gICAqIC0gYGJhc2VgOiB0aGUgW2ZpcnN0IGFuY2VzdG9yIGluc3RhbmNlXSgjYmFzZSkgb2YgYEJhc2VgXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIHZhciBhcHAgPSBuZXcgQmFzZSgpXG4gICAqICAgLnVzZShmb28pXG4gICAqICAgLnVzZShiYXIpXG4gICAqICAgLnVzZShiYXopXG4gICAqIGBgYFxuICAgKiBAbmFtZSAudXNlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGBmbmAgcGx1Z2luIGZ1bmN0aW9uIHRvIGNhbGxcbiAgICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpdGVtIGluc3RhbmNlIGZvciBjaGFpbmluZy5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgQmFzZS5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24oZm4pIHtcbiAgICBmbi5jYWxsKHRoaXMsIHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGUgYC5kZWZpbmVgIG1ldGhvZCBpcyB1c2VkIGZvciBhZGRpbmcgbm9uLWVudW1lcmFibGUgcHJvcGVydHkgb24gdGhlIGluc3RhbmNlLlxuICAgKiBEb3Qtbm90YXRpb24gaXMgKipub3Qgc3VwcG9ydGVkKiogd2l0aCBgZGVmaW5lYC5cbiAgICpcbiAgICogYGBganNcbiAgICogLy8gYXJiaXRyYXJ5IGByZW5kZXJgIGZ1bmN0aW9uIHVzaW5nIGxvZGFzaCBgdGVtcGxhdGVgXG4gICAqIGFwcC5kZWZpbmUoJ3JlbmRlcicsIGZ1bmN0aW9uKHN0ciwgbG9jYWxzKSB7XG4gICAqICAgcmV0dXJuIF8udGVtcGxhdGUoc3RyKShsb2NhbHMpO1xuICAgKiB9KTtcbiAgICogYGBgXG4gICAqIEBuYW1lIC5kZWZpbmVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGBrZXlgIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBkZWZpbmUuXG4gICAqIEBwYXJhbSB7YW55fSBgdmFsdWVgXG4gICAqIEByZXR1cm4ge09iamVjdH0gUmV0dXJucyB0aGUgaW5zdGFuY2UgZm9yIGNoYWluaW5nLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBCYXNlLnByb3RvdHlwZS5kZWZpbmUgPSBmdW5jdGlvbihrZXksIHZhbCkge1xuICAgIGlmIChpc09iamVjdChrZXkpKSB7XG4gICAgICByZXR1cm4gdGhpcy52aXNpdCgnZGVmaW5lJywga2V5KTtcbiAgICB9XG4gICAgZGVmaW5lKHRoaXMsIGtleSwgdmFsKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogTWl4IHByb3BlcnR5IGBrZXlgIG9udG8gdGhlIEJhc2UgcHJvdG90eXBlLiBJZiBiYXNlIGlzIGluaGVyaXRlZCB1c2luZ1xuICAgKiBgQmFzZS5leHRlbmRgIHRoaXMgbWV0aG9kIHdpbGwgYmUgb3ZlcnJpZGRlbiBieSBhIG5ldyBgbWl4aW5gIG1ldGhvZCB0aGF0IHdpbGxcbiAgICogb25seSBhZGQgcHJvcGVydGllcyB0byB0aGUgcHJvdG90eXBlIG9mIHRoZSBpbmhlcml0aW5nIGFwcGxpY2F0aW9uLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhcHAubWl4aW4oJ2ZvbycsIGZ1bmN0aW9uKCkge1xuICAgKiAgIC8vIGRvIHN0dWZmXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICogQG5hbWUgLm1peGluXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBga2V5YFxuICAgKiBAcGFyYW0ge09iamVjdHxBcnJheX0gYHZhbGBcbiAgICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIHRoZSBgYmFzZWAgaW5zdGFuY2UgZm9yIGNoYWluaW5nLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBCYXNlLnByb3RvdHlwZS5taXhpbiA9IGZ1bmN0aW9uKGtleSwgdmFsKSB7XG4gICAgQmFzZS5wcm90b3R5cGVba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogTm9uLWVudW1iZXJhYmxlIG1peGluIGFycmF5LCB1c2VkIGJ5IHRoZSBzdGF0aWMgW0Jhc2UubWl4aW5dKCkgbWV0aG9kLlxuICAgKi9cblxuICBCYXNlLnByb3RvdHlwZS5taXhpbnMgPSBCYXNlLnByb3RvdHlwZS5taXhpbnMgfHwgW107XG5cbiAgLyoqXG4gICAqIEdldHRlci9zZXR0ZXIgdXNlZCB3aGVuIGNyZWF0aW5nIG5lc3RlZCBpbnN0YW5jZXMgb2YgYEJhc2VgLCBmb3Igc3RvcmluZyBhIHJlZmVyZW5jZVxuICAgKiB0byB0aGUgZmlyc3QgYW5jZXN0b3IgaW5zdGFuY2UuIFRoaXMgd29ya3MgYnkgc2V0dGluZyBhbiBpbnN0YW5jZSBvZiBgQmFzZWAgb24gdGhlIGBwYXJlbnRgXG4gICAqIHByb3BlcnR5IG9mIGEgXCJjaGlsZFwiIGluc3RhbmNlLiBUaGUgYGJhc2VgIHByb3BlcnR5IGRlZmF1bHRzIHRvIHRoZSBjdXJyZW50IGluc3RhbmNlIGlmXG4gICAqIG5vIGBwYXJlbnRgIHByb3BlcnR5IGlzIGRlZmluZWQuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIC8vIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiBgQmFzZWAsIHRoaXMgaXMgb3VyIGZpcnN0IChcImJhc2VcIikgaW5zdGFuY2VcbiAgICogdmFyIGZpcnN0ID0gbmV3IEJhc2UoKTtcbiAgICogZmlyc3QuZm9vID0gJ2Jhcic7IC8vIGFyYml0cmFyeSBwcm9wZXJ0eSwgdG8gbWFrZSBpdCBlYXNpZXIgdG8gc2VlIHdoYXQncyBoYXBwZW5pbmcgbGF0ZXJcbiAgICpcbiAgICogLy8gY3JlYXRlIGFub3RoZXIgaW5zdGFuY2VcbiAgICogdmFyIHNlY29uZCA9IG5ldyBCYXNlKCk7XG4gICAqIC8vIGNyZWF0ZSBhIHJlZmVyZW5jZSB0byB0aGUgZmlyc3QgaW5zdGFuY2UgKGBmaXJzdGApXG4gICAqIHNlY29uZC5wYXJlbnQgPSBmaXJzdDtcbiAgICpcbiAgICogLy8gY3JlYXRlIGFub3RoZXIgaW5zdGFuY2VcbiAgICogdmFyIHRoaXJkID0gbmV3IEJhc2UoKTtcbiAgICogLy8gY3JlYXRlIGEgcmVmZXJlbmNlIHRvIHRoZSBwcmV2aW91cyBpbnN0YW5jZSAoYHNlY29uZGApXG4gICAqIC8vIHJlcGVhdCB0aGlzIHBhdHRlcm4gZXZlcnkgdGltZSBhIFwiY2hpbGRcIiBpbnN0YW5jZSBpcyBjcmVhdGVkXG4gICAqIHRoaXJkLnBhcmVudCA9IHNlY29uZDtcbiAgICpcbiAgICogLy8gd2UgY2FuIGFsd2F5cyBhY2Nlc3MgdGhlIGZpcnN0IGluc3RhbmNlIHVzaW5nIHRoZSBgYmFzZWAgcHJvcGVydHlcbiAgICogY29uc29sZS5sb2coZmlyc3QuYmFzZS5mb28pO1xuICAgKiAvLz0+ICdiYXInXG4gICAqIGNvbnNvbGUubG9nKHNlY29uZC5iYXNlLmZvbyk7XG4gICAqIC8vPT4gJ2JhcidcbiAgICogY29uc29sZS5sb2codGhpcmQuYmFzZS5mb28pO1xuICAgKiAvLz0+ICdiYXInXG4gICAqIC8vIGFuZCBub3cgeW91IGtub3cgaG93IHRvIGdldCB0byB0aGlyZCBiYXNlIDspXG4gICAqIGBgYFxuICAgKiBAbmFtZSAuYmFzZVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmFzZS5wcm90b3R5cGUsICdiYXNlJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuYmFzZSA6IHRoaXM7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogU3RhdGljIG1ldGhvZCBmb3IgYWRkaW5nIGdsb2JhbCBwbHVnaW4gZnVuY3Rpb25zIHRoYXQgd2lsbFxuICAgKiBiZSBhZGRlZCB0byBhbiBpbnN0YW5jZSB3aGVuIGNyZWF0ZWQuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIEJhc2UudXNlKGZ1bmN0aW9uKGFwcCkge1xuICAgKiAgIGFwcC5mb28gPSAnYmFyJztcbiAgICogfSk7XG4gICAqIHZhciBhcHAgPSBuZXcgQmFzZSgpO1xuICAgKiBjb25zb2xlLmxvZyhhcHAuZm9vKTtcbiAgICogLy89PiAnYmFyJ1xuICAgKiBgYGBcbiAgICogQG5hbWUgI3VzZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBgZm5gIFBsdWdpbiBmdW5jdGlvbiB0byB1c2Ugb24gZWFjaCBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIHRoZSBgQmFzZWAgY29uc3RydWN0b3IgZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGRlZmluZShCYXNlLCAndXNlJywgZnVuY3Rpb24oZm4pIHtcbiAgICBmbnMucHVzaChmbik7XG4gICAgcmV0dXJuIEJhc2U7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSdW4gYW4gYXJyYXkgb2YgZnVuY3Rpb25zIGJ5IHBhc3NpbmcgZWFjaCBmdW5jdGlvblxuICAgKiB0byBhIG1ldGhvZCBvbiB0aGUgZ2l2ZW4gb2JqZWN0IHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4gcHJvcGVydHkuXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gYG9iamAgT2JqZWN0IGNvbnRhaW5pbmcgbWV0aG9kIHRvIHVzZS5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBgcHJvcGAgTmFtZSBvZiB0aGUgbWV0aG9kIG9uIHRoZSBvYmplY3QgdG8gdXNlLlxuICAgKiBAcGFyYW0gIHtBcnJheX0gYGFycmAgQXJyYXkgb2YgZnVuY3Rpb25zIHRvIHBhc3MgdG8gdGhlIG1ldGhvZC5cbiAgICovXG5cbiAgZGVmaW5lKEJhc2UsICdydW4nLCBmdW5jdGlvbihvYmosIHByb3AsIGFycikge1xuICAgIHZhciBsZW4gPSBhcnIubGVuZ3RoLCBpID0gMDtcbiAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgIG9ialtwcm9wXShhcnJbaSsrXSk7XG4gICAgfVxuICAgIHJldHVybiBCYXNlO1xuICB9KTtcblxuICAvKipcbiAgICogU3RhdGljIG1ldGhvZCBmb3IgaW5oZXJpdGluZyB0aGUgcHJvdG90eXBlIGFuZCBzdGF0aWMgbWV0aG9kcyBvZiB0aGUgYEJhc2VgIGNsYXNzLlxuICAgKiBUaGlzIG1ldGhvZCBncmVhdGx5IHNpbXBsaWZpZXMgdGhlIHByb2Nlc3Mgb2YgY3JlYXRpbmcgaW5oZXJpdGFuY2UtYmFzZWQgYXBwbGljYXRpb25zLlxuICAgKiBTZWUgW3N0YXRpYy1leHRlbmRdW10gZm9yIG1vcmUgZGV0YWlscy5cbiAgICpcbiAgICogYGBganNcbiAgICogdmFyIGV4dGVuZCA9IGN1LmV4dGVuZChQYXJlbnQpO1xuICAgKiBQYXJlbnQuZXh0ZW5kKENoaWxkKTtcbiAgICpcbiAgICogLy8gb3B0aW9uYWwgbWV0aG9kc1xuICAgKiBQYXJlbnQuZXh0ZW5kKENoaWxkLCB7XG4gICAqICAgZm9vOiBmdW5jdGlvbigpIHt9LFxuICAgKiAgIGJhcjogZnVuY3Rpb24oKSB7fVxuICAgKiB9KTtcbiAgICogYGBgXG4gICAqIEBuYW1lICNleHRlbmRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gYEN0b3JgIGNvbnN0cnVjdG9yIHRvIGV4dGVuZFxuICAgKiBAcGFyYW0ge09iamVjdH0gYG1ldGhvZHNgIE9wdGlvbmFsIHByb3RvdHlwZSBwcm9wZXJ0aWVzIHRvIG1peCBpbi5cbiAgICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIHRoZSBgQmFzZWAgY29uc3RydWN0b3IgZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGRlZmluZShCYXNlLCAnZXh0ZW5kJywgY3UuZXh0ZW5kKEJhc2UsIGZ1bmN0aW9uKEN0b3IsIFBhcmVudCkge1xuICAgIEN0b3IucHJvdG90eXBlLm1peGlucyA9IEN0b3IucHJvdG90eXBlLm1peGlucyB8fCBbXTtcblxuICAgIGRlZmluZShDdG9yLCAnbWl4aW4nLCBmdW5jdGlvbihmbikge1xuICAgICAgdmFyIG1peGluID0gZm4oQ3Rvci5wcm90b3R5cGUsIEN0b3IpO1xuICAgICAgaWYgKHR5cGVvZiBtaXhpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBDdG9yLnByb3RvdHlwZS5taXhpbnMucHVzaChtaXhpbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gQ3RvcjtcbiAgICB9KTtcblxuICAgIGRlZmluZShDdG9yLCAnbWl4aW5zJywgZnVuY3Rpb24oQ2hpbGQpIHtcbiAgICAgIEJhc2UucnVuKENoaWxkLCAnbWl4aW4nLCBDdG9yLnByb3RvdHlwZS5taXhpbnMpO1xuICAgICAgcmV0dXJuIEN0b3I7XG4gICAgfSk7XG5cbiAgICBDdG9yLnByb3RvdHlwZS5taXhpbiA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgIEN0b3IucHJvdG90eXBlW2tleV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgcmV0dXJuIEJhc2U7XG4gIH0pKTtcblxuICAvKipcbiAgICogVXNlZCBmb3IgYWRkaW5nIG1ldGhvZHMgdG8gdGhlIGBCYXNlYCBwcm90b3R5cGUsIGFuZC9vciB0byB0aGUgcHJvdG90eXBlIG9mIGNoaWxkIGluc3RhbmNlcy5cbiAgICogV2hlbiBhIG1peGluIGZ1bmN0aW9uIHJldHVybnMgYSBmdW5jdGlvbiwgdGhlIHJldHVybmVkIGZ1bmN0aW9uIGlzIHB1c2hlZCBvbnRvIHRoZSBgLm1peGluc2BcbiAgICogYXJyYXksIG1ha2luZyBpdCBhdmFpbGFibGUgdG8gYmUgdXNlZCBvbiBpbmhlcml0aW5nIGNsYXNzZXMgd2hlbmV2ZXIgYEJhc2UubWl4aW5zKClgIGlzXG4gICAqIGNhbGxlZCAoZS5nLiBgQmFzZS5taXhpbnMoQ2hpbGQpYCkuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIEJhc2UubWl4aW4oZnVuY3Rpb24ocHJvdG8pIHtcbiAgICogICBwcm90by5mb28gPSBmdW5jdGlvbihtc2cpIHtcbiAgICogICAgIHJldHVybiAnZm9vICcgKyBtc2c7XG4gICAqICAgfTtcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKiBAbmFtZSAjbWl4aW5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gYGZuYCBGdW5jdGlvbiB0byBjYWxsXG4gICAqIEByZXR1cm4ge09iamVjdH0gUmV0dXJucyB0aGUgYEJhc2VgIGNvbnN0cnVjdG9yIGZvciBjaGFpbmluZ1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBkZWZpbmUoQmFzZSwgJ21peGluJywgZnVuY3Rpb24oZm4pIHtcbiAgICB2YXIgbWl4aW4gPSBmbihCYXNlLnByb3RvdHlwZSwgQmFzZSk7XG4gICAgaWYgKHR5cGVvZiBtaXhpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgQmFzZS5wcm90b3R5cGUubWl4aW5zLnB1c2gobWl4aW4pO1xuICAgIH1cbiAgICByZXR1cm4gQmFzZTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFN0YXRpYyBtZXRob2QgZm9yIHJ1bm5pbmcgZ2xvYmFsIG1peGluIGZ1bmN0aW9ucyBhZ2FpbnN0IGEgY2hpbGQgY29uc3RydWN0b3IuXG4gICAqIE1peGlucyBtdXN0IGJlIHJlZ2lzdGVyZWQgYmVmb3JlIGNhbGxpbmcgdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIEJhc2UuZXh0ZW5kKENoaWxkKTtcbiAgICogQmFzZS5taXhpbnMoQ2hpbGQpO1xuICAgKiBgYGBcbiAgICogQG5hbWUgI21peGluc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBgQ2hpbGRgIENvbnN0cnVjdG9yIGZ1bmN0aW9uIG9mIGEgY2hpbGQgY2xhc3NcbiAgICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIHRoZSBgQmFzZWAgY29uc3RydWN0b3IgZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGRlZmluZShCYXNlLCAnbWl4aW5zJywgZnVuY3Rpb24oQ2hpbGQpIHtcbiAgICBCYXNlLnJ1bihDaGlsZCwgJ21peGluJywgQmFzZS5wcm90b3R5cGUubWl4aW5zKTtcbiAgICByZXR1cm4gQmFzZTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFNpbWlsYXIgdG8gYHV0aWwuaW5oZXJpdGAsIGJ1dCBjb3BpZXMgYWxsIHN0YXRpYyBwcm9wZXJ0aWVzLCBwcm90b3R5cGUgcHJvcGVydGllcywgYW5kXG4gICAqIGdldHRlcnMvc2V0dGVycyBmcm9tIGBQcm92aWRlcmAgdG8gYFJlY2VpdmVyYC4gU2VlIFtjbGFzcy11dGlsc11bXXsjaW5oZXJpdH0gZm9yIG1vcmUgZGV0YWlscy5cbiAgICpcbiAgICogYGBganNcbiAgICogQmFzZS5pbmhlcml0KEZvbywgQmFyKTtcbiAgICogYGBgXG4gICAqIEBuYW1lICNpbmhlcml0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGBSZWNlaXZlcmAgUmVjZWl2aW5nIChjaGlsZCkgY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gYFByb3ZpZGVyYCBQcm92aWRpbmcgKHBhcmVudCkgY29uc3RydWN0b3JcbiAgICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIHRoZSBgQmFzZWAgY29uc3RydWN0b3IgZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGRlZmluZShCYXNlLCAnaW5oZXJpdCcsIGN1LmluaGVyaXQpO1xuICBkZWZpbmUoQmFzZSwgJ2J1YmJsZScsIGN1LmJ1YmJsZSk7XG4gIHJldHVybiBCYXNlO1xufVxuXG4vKipcbiAqIEV4cG9zZSBgQmFzZWAgd2l0aCBkZWZhdWx0IHNldHRpbmdzXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBuYW1lc3BhY2UoKTtcblxuLyoqXG4gKiBBbGxvdyB1c2VycyB0byBkZWZpbmUgYSBuYW1lc3BhY2VcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4iLCJcclxuLyoqXHJcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXHJcbiAqL1xyXG5cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXHJcbiAqXHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcclxuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XHJcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XHJcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XHJcbiAgfVxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICAodGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW10pXHJcbiAgICAucHVzaChmbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXHJcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIGZ1bmN0aW9uIG9uKCkge1xyXG4gICAgdGhpcy5vZmYoZXZlbnQsIG9uKTtcclxuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICBvbi5mbiA9IGZuO1xyXG4gIHRoaXMub24oZXZlbnQsIG9uKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxyXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcblxyXG4gIC8vIGFsbFxyXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyBzcGVjaWZpYyBldmVudFxyXG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcclxuXHJcbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xyXG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxyXG4gIHZhciBjYjtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY2IgPSBjYWxsYmFja3NbaV07XHJcbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xyXG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge01peGVkfSAuLi5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxyXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG5cclxuICBpZiAoY2FsbGJhY2tzKSB7XHJcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcmV0dXJuIHtBcnJheX1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gIHJldHVybiB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHRoaXMgZW1pdHRlciBoYXMgYGV2ZW50YCBoYW5kbGVycy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xyXG59O1xyXG4iLCIvKiFcbiAqIG9iamVjdC12aXNpdCA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvb2JqZWN0LXZpc2l0PlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgMjAxNywgSm9uIFNjaGxpbmtlcnQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCdpc29iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHZpc2l0KHRoaXNBcmcsIG1ldGhvZCwgdGFyZ2V0LCB2YWwpIHtcbiAgaWYgKCFpc09iamVjdCh0aGlzQXJnKSAmJiB0eXBlb2YgdGhpc0FyZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignb2JqZWN0LXZpc2l0IGV4cGVjdHMgYHRoaXNBcmdgIHRvIGJlIGFuIG9iamVjdC4nKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbWV0aG9kICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignb2JqZWN0LXZpc2l0IGV4cGVjdHMgYG1ldGhvZGAgbmFtZSB0byBiZSBhIHN0cmluZycpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0aGlzQXJnW21ldGhvZF0gIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdGhpc0FyZztcbiAgfVxuXG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDMpO1xuICB0YXJnZXQgPSB0YXJnZXQgfHwge307XG5cbiAgZm9yICh2YXIga2V5IGluIHRhcmdldCkge1xuICAgIHZhciBhcnIgPSBba2V5LCB0YXJnZXRba2V5XV0uY29uY2F0KGFyZ3MpO1xuICAgIHRoaXNBcmdbbWV0aG9kXS5hcHBseSh0aGlzQXJnLCBhcnIpO1xuICB9XG4gIHJldHVybiB0aGlzQXJnO1xufTtcbiIsIi8qIVxuICogdG8tb2JqZWN0LXBhdGggPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L3RvLW9iamVjdC1wYXRoPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdHlwZU9mID0gcmVxdWlyZSgna2luZC1vZicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvUGF0aChhcmdzKSB7XG4gIGlmICh0eXBlT2YoYXJncykgIT09ICdhcmd1bWVudHMnKSB7XG4gICAgYXJncyA9IGFyZ3VtZW50cztcbiAgfVxuICByZXR1cm4gZmlsdGVyKGFyZ3MpLmpvaW4oJy4nKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlcihhcnIpIHtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gIHZhciBpZHggPSAtMTtcbiAgdmFyIHJlcyA9IFtdO1xuXG4gIHdoaWxlICgrK2lkeCA8IGxlbikge1xuICAgIHZhciBlbGUgPSBhcnJbaWR4XTtcbiAgICBpZiAodHlwZU9mKGVsZSkgPT09ICdhcmd1bWVudHMnIHx8IEFycmF5LmlzQXJyYXkoZWxlKSkge1xuICAgICAgcmVzLnB1c2guYXBwbHkocmVzLCBmaWx0ZXIoZWxlKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlID09PSAnc3RyaW5nJykge1xuICAgICAgcmVzLnB1c2goZWxlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1bmlvbihpbml0KSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShpbml0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Fyci11bmlvbiBleHBlY3RzIHRoZSBmaXJzdCBhcmd1bWVudCB0byBiZSBhbiBhcnJheS4nKTtcbiAgfVxuXG4gIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG5cbiAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgIHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG4gICAgaWYgKCFhcmcpIGNvbnRpbnVlO1xuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgIGFyZyA9IFthcmddO1xuICAgIH1cblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgYXJnLmxlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgZWxlID0gYXJnW2pdO1xuXG4gICAgICBpZiAoaW5pdC5pbmRleE9mKGVsZSkgPj0gMCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGluaXQucHVzaChlbGUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5pdDtcbn07XG4iLCJpbXBvcnQge2Vhc2luZ30gZnJvbSBcIi4uLy4uL2xpYi9kcmF3L2Vhc2luZ1wiO1xyXG5pbXBvcnQge0RyYXd9IGZyb20gXCIuLi8uLi9saWIvZHJhdy9jb3JlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ291bnREb3duIGV4dGVuZHMgRHJhdyB7XHJcbiAgY29uc3RydWN0b3IoY3R4LCB3LCBoLCBwYWRkaW5nKSB7XHJcbiAgICBzdXBlcihjdHgpO1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB0aGlzLndpZHRoID0gdztcclxuICAgIHRoaXMuaGVpZ2h0ID0gaDtcclxuICAgIHRoaXMucGFkZGluZyA9IHBhZGRpbmc7XHJcblxyXG4gICAgbGV0IGZyYW1lV2lkdGggPSA2O1xyXG4gICAgbGV0IHByb2dyZXNzQ2lyY2xlV2lkdGggPSAyMDtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB3aWR0aDogdyxcclxuICAgICAgcGFkZGluZzogcGFkZGluZyxcclxuICAgICAgY2VudGVyOiBbdyAvIDIsIGggLyAyXSxcclxuICAgICAgZnJhbWVXaWR0aDogZnJhbWVXaWR0aCxcclxuICAgICAgZnJhbWVSYWRpdXM6IHcvMiAtcGFkZGluZyAtIGZyYW1lV2lkdGgvMixcclxuICAgICAgcHJvZ3Jlc3NDaXJjbGVXaWR0aDogcHJvZ3Jlc3NDaXJjbGVXaWR0aCxcclxuICAgICAgcHJvZ3Jlc3NDaXJjbGVSYWRpdXM6IHcgLyAyIC0gcGFkZGluZyAtIGZyYW1lV2lkdGggLSBwcm9ncmVzc0NpcmNsZVdpZHRoIC8gMixcclxuICAgICAgb3V0ZXJDaXJjbGVSYWRpdXM6IHcgLyAyIC0gcGFkZGluZyAtIGZyYW1lV2lkdGggLSBwcm9ncmVzc0NpcmNsZVdpZHRoLFxyXG4gICAgICBpbm5lckNpcmNsZVJhZGl1czogdyAvIDIgLSBwYWRkaW5nIC0gZnJhbWVXaWR0aCAtIHByb2dyZXNzQ2lyY2xlV2lkdGggLSAyMCxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG91dGVyQ2lyY2xlKCkge1xyXG4gICAgY29uc3Qge3dpZHRoLCBjZW50ZXIsIG91dGVyQ2lyY2xlUmFkaXVzLCBwcm9ncmVzc0NpcmNsZVdpZHRoLCBmcmFtZVdpZHRoLCBwYWRkaW5nfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgbGVmdFRvcCA9IHBhZGRpbmcgKyBwcm9ncmVzc0NpcmNsZVdpZHRoICsgZnJhbWVXaWR0aDtcclxuICAgIGxldCBib3R0b21SaWdodCA9IHdpZHRoIC0gcGFkZGluZyAtIHByb2dyZXNzQ2lyY2xlV2lkdGggLSBmcmFtZVdpZHRoO1xyXG5cclxuICAgIGxldCBncmFkaWVudCA9IHRoaXMuTGluZXJHcmFkaWVudChsZWZ0VG9wLCBsZWZ0VG9wLCBib3R0b21SaWdodCwgYm90dG9tUmlnaHQsIFtbMCwgXCIjZmNmY2ZjXCJdLCBbMSwgXCIjZTJlNmU5XCJdXSk7XHJcbiAgICAvLyBTaGFkb3dcclxuICAgIHRoaXMuQ2lyY2xlKHtcclxuICAgICAgc2hhcGU6IHtcclxuICAgICAgICB4OiB0aGlzLndpZHRoIC8gMiArIDcsXHJcbiAgICAgICAgeTogdGhpcy5oZWlnaHQgLyAyICsgNyxcclxuICAgICAgICByOiBvdXRlckNpcmNsZVJhZGl1cyxcclxuICAgICAgfSxcclxuICAgICAgc3R5bGVzOiB7XHJcbiAgICAgICAgZmlsbDogXCJyZ2JhKDAsIDAsIDAsIC4yKVwiXHJcbiAgICAgIH1cclxuICAgIH0sIFwiZmlsbFwiKTtcclxuXHJcbiAgICB0aGlzLkNpcmNsZSh7XHJcbiAgICAgIHNoYXBlOiB7XHJcbiAgICAgICAgeDogY2VudGVyWzBdLFxyXG4gICAgICAgIHk6IGNlbnRlclsxXSxcclxuICAgICAgICByOiBvdXRlckNpcmNsZVJhZGl1cyxcclxuICAgICAgfSxcclxuICAgICAgc3R5bGVzOiB7XHJcbiAgICAgICAgZmlsbDogZ3JhZGllbnQsXHJcbiAgICAgIH1cclxuICAgIH0sICdmaWxsJyk7XHJcbiAgfVxyXG5cclxuICBpbm5lckNpcmNsZSgpIHtcclxuICAgIGNvbnN0IHt3aWR0aCwgY2VudGVyLCBpbm5lckNpcmNsZVJhZGl1cywgcHJvZ3Jlc3NDaXJjbGVXaWR0aCwgZnJhbWVXaWR0aCwgcGFkZGluZ30gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGxlZnRUb3AgPSBwYWRkaW5nICsgcHJvZ3Jlc3NDaXJjbGVXaWR0aCArIGZyYW1lV2lkdGggKyAyMDtcclxuICAgIGxldCBib3R0b21SaWdodCA9IHdpZHRoIC0gcGFkZGluZyAtIHByb2dyZXNzQ2lyY2xlV2lkdGggLSBmcmFtZVdpZHRoIC0gMjA7XHJcblxyXG4gICAgbGV0IGdyYWRpZW50ID0gdGhpcy5MaW5lckdyYWRpZW50KGxlZnRUb3AsIGxlZnRUb3AsIGJvdHRvbVJpZ2h0LCBib3R0b21SaWdodCwgW1swLCBcIiNlMGU0ZTdcIl0sIFsxLCBcIiNmOGZhZjlcIl1dKTtcclxuICAgIHRoaXMuQ2lyY2xlKHtcclxuICAgICAgc2hhcGU6IHtcclxuICAgICAgICB4OiBjZW50ZXJbMF0sXHJcbiAgICAgICAgeTogY2VudGVyWzFdLFxyXG4gICAgICAgIHI6IGlubmVyQ2lyY2xlUmFkaXVzLFxyXG4gICAgICB9LFxyXG4gICAgICBzdHlsZXM6IHtcclxuICAgICAgICBmaWxsOiBncmFkaWVudCxcclxuICAgICAgfVxyXG4gICAgfSwgXCJmaWxsXCIpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByb2dyZXNzQ2lyY2xlKHByb2dyZXNzKSB7XHJcbiAgICBjb25zdCB7Y2VudGVyLCBwcm9ncmVzc0NpcmNsZVdpZHRoLCBwcm9ncmVzc0NpcmNsZVJhZGl1c30gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGdyYWRpZW50ID0gdGhpcy5MaW5lckdyYWRpZW50KDMwLCAzMCwgMTgwLCAxODAsIFtbMCwgXCIjZjhkMjMxXCJdLCBbMSwgXCIjZjRiODNjXCJdXSk7XHJcbiAgICBsZXQgdGFyZ2V0ID0gcHJvZ3Jlc3MgLSBNYXRoLlBJIC8gMjtcclxuICAgIHRoaXMuQXJjKHtcclxuICAgICAgc2hhcGU6IHtcclxuICAgICAgICB4OiBjZW50ZXJbMF0sXHJcbiAgICAgICAgeTogY2VudGVyWzFdLFxyXG4gICAgICAgIHI6IHByb2dyZXNzQ2lyY2xlUmFkaXVzLFxyXG4gICAgICAgIHNhOiB0YXJnZXQsXHJcbiAgICAgICAgZWE6IDAgLSBNYXRoLlBJIC8gMixcclxuICAgICAgICBjb3VudGVyY2xvY2t3aXNlOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0eWxlczoge1xyXG4gICAgICAgIHN0cm9rZVN0eWxlOiBncmFkaWVudCxcclxuICAgICAgICBsaW5lV2lkdGg6IHByb2dyZXNzQ2lyY2xlV2lkdGgsXHJcbiAgICAgICAgbGluZUNhcDogXCJyb3VuZFwiLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYmFja2dyb3VuZCgpIHtcclxuICAgIGNvbnN0IHtjZW50ZXJ9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBncmFkaWVudCA9IHRoaXMuTGluZXJHcmFkaWVudCgwLCAwLCAwLCAyMDAsIFtbMCwgXCIjZmVmZWZlXCJdLCBbMSwgXCIjZTBlNGU1XCJdXSk7XHJcblxyXG4gICAgdGhpcy5DaXJjbGUoe1xyXG4gICAgICBzaGFwZToge1xyXG4gICAgICAgIHg6Y2VudGVyWzBdICsgNixcclxuICAgICAgICB5OiBjZW50ZXJbMV0gKyA2LFxyXG4gICAgICAgIHI6IHRoaXMud2lkdGggLyAyIC0gdGhpcy5wYWRkaW5nLFxyXG4gICAgICB9LFxyXG4gICAgICBzdHlsZXM6IHtcclxuICAgICAgICBmaWxsOiBcInJnYmEoMCwwLDAsLjIpXCIsXHJcbiAgICAgIH1cclxuICAgIH0sIFwiZmlsbFwiKTtcclxuXHJcbiAgICB0aGlzLkNpcmNsZSh7XHJcbiAgICAgIHNoYXBlOiB7XHJcbiAgICAgICAgeDogdGhpcy53aWR0aCAvIDIsXHJcbiAgICAgICAgeTogdGhpcy5oZWlnaHQgLyAyLFxyXG4gICAgICAgIHI6IHRoaXMud2lkdGggLyAyIC0gMyAtIHRoaXMucGFkZGluZyxcclxuICAgICAgfSxcclxuICAgICAgc3R5bGVzOiB7XHJcbiAgICAgICAgZmlsbDogZ3JhZGllbnQsXHJcbiAgICAgIH1cclxuICAgIH0sIFwiZmlsbFwiKTtcclxuICB9XHJcblxyXG4gIHNjYWxlKCkge1xyXG4gICAgY29uc3Qge2NlbnRlciwgcHJvZ3Jlc3NDaXJjbGVSYWRpdXMsIGZyYW1lV2lkdGgsIGZyYW1lUmFkaXVzLCBwYWRkaW5nfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgdGhpcy5MaW5lKHtcclxuICAgICAgICBzaGFwZToge1xyXG4gICAgICAgICAgeDE6IHByb2dyZXNzQ2lyY2xlUmFkaXVzIC0gNSxcclxuICAgICAgICAgIHkxOiAwLFxyXG4gICAgICAgICAgeDI6IHByb2dyZXNzQ2lyY2xlUmFkaXVzICsgNSxcclxuICAgICAgICAgIHkyOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3R5bGVzOiB7XHJcbiAgICAgICAgICBsaW5lV2lkdGg6IDEsXHJcbiAgICAgICAgICBzdHJva2VTdHlsZTogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgbGluZUNhcDogXCJyb3VuZFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJhbnNsYXRlOiBbY2VudGVyWzBdLCBjZW50ZXJbMV1dLFxyXG4gICAgICAgIHJvdGF0ZTogTWF0aC5QSSAvIDYgKiBpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuQ2lyY2xlKHtcclxuICAgICAgc2hhcGU6IHtcclxuICAgICAgICB4OiBjZW50ZXJbMF0sXHJcbiAgICAgICAgeTogY2VudGVyWzFdLFxyXG4gICAgICAgIHI6IGZyYW1lUmFkaXVzLFxyXG4gICAgICB9LFxyXG4gICAgICBzdHlsZXM6IHtcclxuICAgICAgICBzdHJva2VTdHlsZTogXCIjZmZmZGZlXCIsXHJcbiAgICAgICAgbGluZVdpZHRoOiBmcmFtZVdpZHRoLFxyXG4gICAgICB9XHJcbiAgICB9LCBcInN0cm9rZVwiKTtcclxuXHJcbiAgICB0aGlzLkNpcmNsZSh7XHJcbiAgICAgIHNoYXBlOiB7XHJcbiAgICAgICAgeDogY2VudGVyWzBdLFxyXG4gICAgICAgIHk6IGNlbnRlclsxXSxcclxuICAgICAgICByOiBmcmFtZVJhZGl1cyAtIGZyYW1lV2lkdGgvMixcclxuICAgICAgfSxcclxuICAgICAgc3R5bGVzOiB7XHJcbiAgICAgICAgc3Ryb2tlU3R5bGU6IFwicmdiYSgwLCAwLCAwLCAuMSlcIixcclxuICAgICAgICBsaW5lV2lkdGg6IDIsXHJcbiAgICAgIH1cclxuICAgIH0sIFwic3Ryb2tlXCIpO1xyXG4gIH1cclxuXHJcbiAgdGV4dCh0KSB7XHJcbiAgICBsZXQgY3R4ID0gdGhpcy5jdHg7XHJcbiAgICBjb25zdCB7Y2VudGVyLCB3aWR0aH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiM0ODQ0NDNcIjtcclxuICAgIGN0eC5mb250ID0gYCR7cGFyc2VJbnQod2lkdGgvIDYpfXB4IEZqYWxsYU9uZWA7XHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gICAgY3R4LmZpbGxUZXh0KHQgKyBcIlxcXCJcIiwgY2VudGVyWzBdICsgNSwgY2VudGVyWzFdKTtcclxuXHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgZHJhdyhlYSwgdCkge1xyXG4gICAgbGV0IGN0eCA9IHRoaXMuY3R4O1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XHJcbiAgICB0aGlzLmJhY2tncm91bmQoKTtcclxuICAgIHRoaXMucHJvZ3Jlc3NDaXJjbGUoZWEpO1xyXG4gICAgdGhpcy5zY2FsZSgpO1xyXG4gICAgdGhpcy5vdXRlckNpcmNsZSgpO1xyXG4gICAgdGhpcy5pbm5lckNpcmNsZSgpO1xyXG4gICAgdGhpcy50ZXh0KHQpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoZHVyYXRpb24sIGNiKSB7XHJcbiAgICBsZXQgY3VycmVudFRpbWUgPSAwLFxyXG4gICAgICBkZWx0YSA9IDQwLFxyXG4gICAgICBzdGFydCA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xyXG5cclxuICAgIGxldCBmcmFtZSA9ICgpID0+IHtcclxuICAgICAgbGV0IHByb2dyZXNzID0gZWFzaW5nLmxpbmVhcihjdXJyZW50VGltZSAvIGR1cmF0aW9uKTtcclxuICAgICAgY3VycmVudFRpbWUgPSAobmV3IERhdGUpLmdldFRpbWUoKSAtIHN0YXJ0O1xyXG4gICAgICBpZiAoY3VycmVudFRpbWUgPiBkdXJhdGlvbikge1xyXG4gICAgICAgIGNiKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZHJhdygtTWF0aC5QSSAqIDIgKiBwcm9ncmVzcywgcGFyc2VJbnQoKGR1cmF0aW9uIC0gY3VycmVudFRpbWUpLzEwMDApKTtcclxuICAgICAgaWYoIXRoaXMuc3RvcGVkKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChmcmFtZSwgZGVsdGEpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnJhbWUsIGRlbHRhKTtcclxuICB9XHJcblxyXG4gIHN0b3AoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInN0b3BlZFwiKTtcclxuICAgIHRoaXMuc3RvcGVkID0gdHJ1ZTtcclxuICB9XHJcbn0iLCJpbXBvcnQge2Vhc2luZ30gZnJvbSBcIi4uLy4uL2xpYi9kcmF3L2Vhc2luZ1wiO1xyXG5pbXBvcnQge0RyYXd9IGZyb20gXCIuLi8uLi9saWIvZHJhdy9jb3JlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3BlZWRvbWV0ZXIgPSBmdW5jdGlvbiAoY3R4LCB3LCBoLCBwYWRkaW5nLCBkdXJhdGlvbiwgbmFtZSwgdW5pdCwgbWluLCBtYXgpIHtcclxuICBjb25zdCBkY3R4ID0gbmV3IERyYXcoY3R4KTtcclxuXHJcbiAgY29uc3QgcmFkdWlzID0gdyAvIDIgLSBwYWRkaW5nLFxyXG4gICAgcmFkaXVzSW5kaWNhdG9yID0gcmFkdWlzIC0gMjAsXHJcbiAgICBjZW50ZXIgPSBbdyAvIDIsIGggLyAyXTtcclxuXHJcbiAgbGV0IGN1cnJlbnRBbmdsZSA9IG51bGwsXHJcbiAgICBwcmV2aW91c1N0b3AgPSBudWxsLFxyXG4gICAgcHJldmlvdXNWYWx1ZSA9IG51bGwsXHJcbiAgICB2YWx1ZSA9IG51bGwsXHJcbiAgICBjdXJyZW50VmFsdWUgPSAwLFxyXG4gICAgc3RvcGVkID0gbnVsbCxcclxuICAgIGludGVydmFsID0gbnVsbDtcclxuXHJcbiAgY29uc3QgY2lyY2xlID0gZnVuY3Rpb24gKGVhKSB7XHJcbiAgICBsZXQgZ3JhZGllbnQgPSBkY3R4LkxpbmVyR3JhZGllbnQocGFkZGluZywgcGFkZGluZywgdyAtIHBhZGRpbmcsIGggLSBwYWRkaW5nLCBbWzAsIFwiI2Y4ZDIzMVwiXSwgWzEsIFwiI2Y0YjgzY1wiXV0pO1xyXG5cclxuICAgIGRjdHguQXJjKHtcclxuICAgICAgc2hhcGU6IHtcclxuICAgICAgICB4OiB3IC8gMixcclxuICAgICAgICB5OiBoIC8gMixcclxuICAgICAgICByOiB3IC8gMiAtIDMsXHJcbiAgICAgICAgc2E6IDAgLSBNYXRoLlBJIC8gMixcclxuICAgICAgICBlYTogZWEgLSBNYXRoLlBJIC8gMlxyXG4gICAgICB9LFxyXG4gICAgICBzdHlsZXM6IHtcclxuICAgICAgICBzdHJva2VTdHlsZTogZ3JhZGllbnQsXHJcbiAgICAgICAgbGluZVdpZHRoOiA1LFxyXG4gICAgICAgIGxpbmVDYXA6IFwicm91bmRcIixcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGxhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgZ3JhZGllbnQgPSBkY3R4LkxpbmVyR3JhZGllbnQoMCwgcGFkZGluZywgMCwgaCAtIHBhZGRpbmcsIFtbMCwgXCIjZGZlM2U2XCJdLCBbMSwgXCIjZmZmXCJdXSk7XHJcbiAgICBkY3R4LkNpcmNsZSh7XHJcbiAgICAgIHNoYXBlOiB7XHJcbiAgICAgICAgeDogY2VudGVyWzBdICsgNSxcclxuICAgICAgICB5OiBjZW50ZXJbMV0gKyA1LFxyXG4gICAgICAgIHI6IHJhZHVpc1xyXG4gICAgICB9LFxyXG4gICAgICBzdHlsZXM6IHtcclxuICAgICAgICBmaWxsOiBcInJnYmEoMCwwLDAsLjMpXCJcclxuICAgICAgfVxyXG4gICAgfSwgXCJmaWxsXCIpO1xyXG5cclxuICAgIC8vIFNoYWRvd1xyXG4gICAgZGN0eC5DaXJjbGUoe1xyXG4gICAgICBzaGFwZToge1xyXG4gICAgICAgIHg6IGNlbnRlclswXSxcclxuICAgICAgICB5OiBjZW50ZXJbMV0sXHJcbiAgICAgICAgcjogcmFkdWlzXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0eWxlczoge1xyXG4gICAgICAgIGZpbGw6IGdyYWRpZW50XHJcbiAgICAgIH1cclxuICAgIH0sIFwiZmlsbFwiKTtcclxuXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2NhbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgeDEsIHgyO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMTsgaSsrKSB7XHJcbiAgICAgIGlmIChpICUgNSA9PSAwKSB7XHJcbiAgICAgICAgeDEgPSByYWR1aXMgLSA4O1xyXG4gICAgICAgIHgyID0gcmFkdWlzO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHgxID0gcmFkdWlzIC0gODtcclxuICAgICAgICB4MiA9IHJhZHVpcyAtIDQ7XHJcbiAgICAgIH1cclxuICAgICAgZGN0eC5MaW5lKHtcclxuICAgICAgICBzaGFwZToge1xyXG4gICAgICAgICAgeDE6IHgxLFxyXG4gICAgICAgICAgeTE6IDAsXHJcbiAgICAgICAgICB4MjogeDIsXHJcbiAgICAgICAgICB5MjogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0eWxlczoge1xyXG4gICAgICAgICAgbGluZVdpZHRoOiAxLFxyXG4gICAgICAgICAgc3Ryb2tlU3R5bGU6IFwiI2FhYWViMVwiLFxyXG4gICAgICAgICAgbGluZUNhcDogXCJyb3VuZFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJhbnNsYXRlOiBbY2VudGVyWzBdLCBjZW50ZXJbMV1dLFxyXG4gICAgICAgIHJvdGF0ZTogLU1hdGguUEkgLyAzMCAqIGlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2VudGVyUGxhdGUgPSBmdW5jdGlvbigpIHtcclxuICAgIGRjdHguQ2lyY2xlKHtcclxuICAgICAgc2hhcGU6IHtcclxuICAgICAgICB4OiBjZW50ZXJbMF0sXHJcbiAgICAgICAgeTogY2VudGVyWzFdLFxyXG4gICAgICAgIHI6IHJhZGl1c0luZGljYXRvciAtIDVcclxuICAgICAgfSxcclxuICAgICAgc3R5bGVzOiB7XHJcbiAgICAgICAgZmlsbDogXCIjMmYyZjJmXCJcclxuICAgICAgfVxyXG4gICAgfSwgXCJmaWxsXCIpO1xyXG5cclxuICAgIGRjdHguQ2lyY2xlKHtcclxuICAgICAgc2hhcGU6IHtcclxuICAgICAgICB4OiBjZW50ZXJbMF0sXHJcbiAgICAgICAgeTogY2VudGVyWzFdLFxyXG4gICAgICAgIHI6IHJhZGl1c0luZGljYXRvciAtIDE1LFxyXG4gICAgICB9LFxyXG4gICAgICBzdHlsZXM6IHtcclxuICAgICAgICBmaWxsOiBcIndoaXRlXCJcclxuICAgICAgfVxyXG4gICAgfSwgXCJmaWxsXCIpO1xyXG5cclxuXHJcbiAgICBsZXQgZ3JhZGllbnQgPSBkY3R4LkxpbmVyR3JhZGllbnQocGFkZGluZywgcGFkZGluZywgdyAtIHBhZGRpbmcsIGggLSBwYWRkaW5nLCBbWzAsIFwiI2Y4ZDIzMVwiXSwgWzEsIFwiI2Y0YjgzY1wiXV0pO1xyXG4gICAgZGN0eC5BcmMoe1xyXG4gICAgICBzaGFwZToge1xyXG4gICAgICAgIHg6IHcgLyAyLFxyXG4gICAgICAgIHk6IGggLyAyLFxyXG4gICAgICAgIHI6IHJhZGl1c0luZGljYXRvciAtIDI1LFxyXG4gICAgICAgIHNhOiAwLFxyXG4gICAgICAgIGVhOiBNYXRoLlBJICogMlxyXG4gICAgICB9LFxyXG4gICAgICBzdHlsZXM6IHtcclxuICAgICAgICBzdHJva2VTdHlsZTogZ3JhZGllbnQsXHJcbiAgICAgICAgbGluZVdpZHRoOiA4LFxyXG4gICAgICAgIGxpbmVDYXA6IFwicm91bmRcIixcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5kaWNhdG9yID0gZnVuY3Rpb24ocCkge1xyXG4gICAgbGV0IHY7XHJcbiAgICBpZiAodmFsdWUgPCBtaW4pIHtcclxuICAgICAgdiA9IG1pbjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHZhbHVlID4gbWF4KSB7XHJcbiAgICAgIHYgPSBtYXg7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdiA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgbGV0IHRhcmdldCA9ICBNYXRoLlBJICogdiAvIG1heDtcclxuICAgIGxldCBlYSA9IHRhcmdldCAqIHA7XHJcbiAgICBpZihwcmV2aW91c1N0b3ApIHtcclxuICAgICAgZWEgPSBwcmV2aW91c1N0b3AgLSAocHJldmlvdXNTdG9wIC0gdGFyZ2V0KSAqIHA7XHJcbiAgICB9XHJcbiAgICBjdXJyZW50QW5nbGUgPSBlYTtcclxuXHJcbiAgICBsZXQgZ3JhZGllbnQgPSBkY3R4LkxpbmVyR3JhZGllbnQocGFkZGluZywgMCwgdyAtIHBhZGRpbmcsIDAsIFtbMCwgXCIjZjhkMjMxXCJdLCBbMSwgXCIjZjRiODNjXCJdXSk7XHJcblxyXG4gICAgbGV0IGJhY2tncmFkaWVudCA9IGRjdHguTGluZXJHcmFkaWVudChwYWRkaW5nLCAwLCB3IC0gcGFkZGluZywgMCwgW1swLCBcIiNkYWRiZGRcIl0sWzEsIFwiI2Q3ZGJkY1wiXV0pO1xyXG4gICAgbGV0IGJhY2tncmFkaWVudDIgPSBkY3R4LkxpbmVyR3JhZGllbnQoMCwgcGFkZGluZywgMCwgaCAtIHBhZGRpbmcsIFtbMCwgXCIjYmFiZmMzXCJdLFsxLCBcIiNkN2RiZGNcIl1dKTtcclxuICAgIGRjdHguQXJjKHtcclxuICAgICAgc2hhcGU6IHtcclxuICAgICAgICB4OiBjZW50ZXJbMF0sXHJcbiAgICAgICAgeTogY2VudGVyWzFdLFxyXG4gICAgICAgIHI6IHJhZGl1c0luZGljYXRvcixcclxuICAgICAgICBzYTogLSBNYXRoLlBJLFxyXG4gICAgICAgIGVhOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICBzdHlsZXM6IHtcclxuICAgICAgICBzdHJva2VTdHlsZTogYmFja2dyYWRpZW50LFxyXG4gICAgICAgIGxpbmVXaWR0aDogMTUsXHJcbiAgICAgICAgbGluZUNhcDogXCJyb3VuZFwiLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGRjdHguQXJjKHtcclxuICAgICAgc2hhcGU6IHtcclxuICAgICAgICB4OiBjZW50ZXJbMF0sXHJcbiAgICAgICAgeTogY2VudGVyWzFdLFxyXG4gICAgICAgIHI6IHJhZGl1c0luZGljYXRvcixcclxuICAgICAgICBzYTogLSBNYXRoLlBJLFxyXG4gICAgICAgIGVhOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICBzdHlsZXM6IHtcclxuICAgICAgICBzdHJva2VTdHlsZTogYmFja2dyYWRpZW50MixcclxuICAgICAgICBsaW5lV2lkdGg6IDEwLFxyXG4gICAgICAgIGxpbmVDYXA6IFwicm91bmRcIixcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZGN0eC5BcmMoe1xyXG4gICAgICBzaGFwZToge1xyXG4gICAgICAgIHg6IGNlbnRlclswXSxcclxuICAgICAgICB5OiBjZW50ZXJbMV0sXHJcbiAgICAgICAgcjogcmFkaXVzSW5kaWNhdG9yLFxyXG4gICAgICAgIHNhOiAtIE1hdGguUEksXHJcbiAgICAgICAgZWE6IC0gTWF0aC5QSSArIGVhLFxyXG4gICAgICB9LFxyXG4gICAgICBzdHlsZXM6IHtcclxuICAgICAgICBzdHJva2VTdHlsZTogZ3JhZGllbnQsXHJcbiAgICAgICAgbGluZVdpZHRoOiA4LFxyXG4gICAgICAgIGxpbmVDYXA6IFwicm91bmRcIixcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICBjb25zdCB0ZXh0ID0gZnVuY3Rpb24gKHApIHtcclxuICAgIGxldCB0YXJnZXQgPSAgdmFsdWU7XHJcbiAgICBsZXQgbm93VmFsdWUgPSB0YXJnZXQgKiBwO1xyXG4gICAgaWYocHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICBub3dWYWx1ZSA9IHByZXZpb3VzVmFsdWUgLSAocHJldmlvdXNWYWx1ZSAtIHRhcmdldCkgKiBwO1xyXG4gICAgfVxyXG4gICAgcHJldmlvdXNWYWx1ZSA9IG5vd1ZhbHVlO1xyXG5cclxuICAgIGRjdHguVGV4dCh7XHJcbiAgICAgIHRleHQ6IHBhcnNlSW50KG5vd1ZhbHVlKSxcclxuICAgICAgeDogY2VudGVyWzBdLFxyXG4gICAgICB5OiBjZW50ZXJbMV0sXHJcbiAgICAgIHN0eWxlczoge1xyXG4gICAgICAgIGZpbGw6IFwiIzVmNWQ1ZVwiLFxyXG4gICAgICAgIGZvbnQ6IGAke3cgLyAyIC0gODB9cHggRmphbGxhT25lYCxcclxuICAgICAgICB0ZXh0QmFzZWxpbmU6IFwibWlkZGxlXCIsXHJcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRjdHguVGV4dCh7XHJcbiAgICAgIHRleHQ6IG5hbWUsXHJcbiAgICAgIHg6IGNlbnRlclswXSxcclxuICAgICAgeTogY2VudGVyWzFdIC0gMzAsXHJcbiAgICAgIHN0eWxlczoge1xyXG4gICAgICAgIGZpbGw6IFwiIzVmNWQ1ZVwiLFxyXG4gICAgICAgIGZvbnQ6IGAxNHB4IEZqYWxsYU9uZWAsXHJcbiAgICAgICAgdGV4dEJhc2VsaW5lOiBcIm1pZGRsZVwiLFxyXG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkY3R4LlRleHQoe1xyXG4gICAgICB0ZXh0OiB1bml0LFxyXG4gICAgICB4OiBjZW50ZXJbMF0sXHJcbiAgICAgIHk6IGNlbnRlclsxXSArIDIwLFxyXG4gICAgICBzdHlsZXM6IHtcclxuICAgICAgICBmaWxsOiBcIiM1ZjVkNWVcIixcclxuICAgICAgICBmb250OiBgMTRweCBGamFsbGFPbmVgLFxyXG4gICAgICAgIHRleHRCYXNlbGluZTogXCJtaWRkbGVcIixcclxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZHJhdyA9IGZ1bmN0aW9uIChwKSB7XHJcbiAgICBsZXQge2N0eH0gPSBkY3R4O1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XHJcbiAgICBwbGF0ZSgpO1xyXG4gICAgc2NhbGUoKTtcclxuICAgIGNlbnRlclBsYXRlKCk7XHJcbiAgICBpbmRpY2F0b3IocCk7XHJcbiAgICB0ZXh0KHApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldFZhbHVlID0gZnVuY3Rpb24odikge1xyXG4gICAgcHJldmlvdXNTdG9wID0gY3VycmVudEFuZ2xlO1xyXG4gICAgdmFsdWUgPSB2O1xyXG4gICAgc3RhcnRBbmltYXRpb24oKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdGFydEFuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGN1cnJlbnRUaW1lID0gMCxcclxuICAgICAgZGVsdGEgPSAzMCxcclxuICAgICAgc3RhcnQgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcclxuXHJcbiAgICAvLyDmuIXpmaTliY3kuIDmrKHliqjnlLtcclxuICAgIGlmKGludGVydmFsKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBsZXQgcHJvZ3Jlc3MgPSBlYXNpbmcucXVpbnRpY0luT3V0KGN1cnJlbnRUaW1lIC8gZHVyYXRpb24pO1xyXG4gICAgICBpZiAoY3VycmVudFRpbWUgPiBkdXJhdGlvbikge1xyXG4gICAgICAgIGRyYXcocHJvZ3Jlc3MpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBkcmF3KHByb2dyZXNzKTtcclxuICAgICAgY3VycmVudFRpbWUgPSAobmV3IERhdGUpLmdldFRpbWUoKSAtIHN0YXJ0O1xyXG4gICAgfSwgZGVsdGEpXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3RvcCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNldFZhbHVlOiBzZXRWYWx1ZSxcclxuICAgIGRyYXc6IGRyYXcsXHJcbiAgICBzdG9wOiBzdG9wLFxyXG4gIH1cclxufTsiLCJpbXBvcnQge2Vhc2luZ30gZnJvbSBcIi4uLy4uL2xpYi9kcmF3L2Vhc2luZ1wiO1xyXG5pbXBvcnQge0RyYXd9IGZyb20gXCIuLi8uLi9saWIvZHJhdy9jb3JlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yID0gZnVuY3Rpb24gKGN0eCwgdywgaCwgcGFkZGluZywgdGl0bGUsIHVuaXQsIGNvbG9yKSB7XHJcbiAgY29uc3QgZGN0eCA9IG5ldyBEcmF3KGN0eCk7XHJcblxyXG4gIGNvbnN0IGNpcmNsZSA9IGZ1bmN0aW9uIChlYSkge1xyXG4gICAgbGV0IGdyYWRpZW50ID0gZGN0eC5MaW5lckdyYWRpZW50KHBhZGRpbmcsIHBhZGRpbmcsIHcgLSBwYWRkaW5nLCBoIC0gcGFkZGluZywgW1swLCBcIiNmOGQyMzFcIl0sIFsxLCBcIiNmNGI4M2NcIl1dKTtcclxuXHJcbiAgICBkY3R4LkFyYyh7XHJcbiAgICAgIHNoYXBlOiB7XHJcbiAgICAgICAgeDogdyAvIDIsXHJcbiAgICAgICAgeTogaCAvIDIsXHJcbiAgICAgICAgcjogdyAvIDIgLSAzLFxyXG4gICAgICAgIHNhOiAwIC0gTWF0aC5QSSAvIDIsXHJcbiAgICAgICAgZWE6IGVhIC0gTWF0aC5QSSAvIDJcclxuICAgICAgfSxcclxuICAgICAgc3R5bGVzOiB7XHJcbiAgICAgICAgc3Ryb2tlU3R5bGU6IGdyYWRpZW50LFxyXG4gICAgICAgIGxpbmVXaWR0aDogNSxcclxuICAgICAgICBsaW5lQ2FwOiBcInJvdW5kXCIsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRleHQgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgbGV0IHRpdGxlV2lkdGggPSAwO1xyXG4gICAgY3R4LmZvbnQgPSBgJHtwYXJzZUludCh3IC8gNCl9cHggRmphbGxhT25lYDtcclxuICAgIHRpdGxlV2lkdGggPSBjdHgubWVhc3VyZVRleHQodCkud2lkdGg7XHJcbiAgICBkY3R4LlRleHQoe1xyXG4gICAgICB0ZXh0OiB0LFxyXG4gICAgICB4OiB3IC8gMixcclxuICAgICAgeTogaCAvIDIgKyBoLzEyLFxyXG4gICAgICBzdHlsZXM6IHtcclxuICAgICAgICBmaWxsOiBjb2xvcixcclxuICAgICAgICBmb250OiBgJHtwYXJzZUludCh3IC8gNCl9cHggRmphbGxhT25lYCxcclxuICAgICAgICB0ZXh0QmFzZWxpbmU6IFwibWlkZGxlXCIsXHJcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aXRsZSkge1xyXG4gICAgICBkY3R4LlRleHQoe1xyXG4gICAgICAgIHRleHQ6IHRpdGxlLFxyXG4gICAgICAgIHg6IHBhcnNlSW50KHcgLyAyKSxcclxuICAgICAgICB5OiBwYXJzZUludChoLzQpLFxyXG4gICAgICAgIHN0eWxlczoge1xyXG4gICAgICAgICAgZmlsbDogY29sb3IsXHJcbiAgICAgICAgICBmb250OiBgJHtwYXJzZUludCh3LzEwKX1weCBGamFsbGFPbmVgLFxyXG4gICAgICAgICAgdGV4dEJhc2VsaW5lOiBcIm1pZGRsZVwiLFxyXG4gICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh1bml0KSB7XHJcbiAgICAgIGRjdHguVGV4dCh7XHJcbiAgICAgICAgdGV4dDogdW5pdCxcclxuICAgICAgICAvLyB4OiBwYXJzZUludCh3IC8gMiArICh0aXRsZVdpZHRoP3RpdGxlV2lkdGgvMjowKSksXHJcbiAgICAgICAgeDogcGFyc2VJbnQodyAvIDIpLFxyXG4gICAgICAgIHk6IHBhcnNlSW50KGggLyAyICsgMyAqIGgvMTIpLFxyXG4gICAgICAgIHN0eWxlczoge1xyXG4gICAgICAgICAgZmlsbDogY29sb3IsXHJcbiAgICAgICAgICBmb250OiBgJHtwYXJzZUludCh3LzEwKX1weCBGamFsbGFPbmVgLFxyXG4gICAgICAgICAgdGV4dEJhc2VsaW5lOiBcInRvcFwiLFxyXG4gICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRyYXcgPSBmdW5jdGlvbiAoZWEsIHZhbHVlKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcclxuICAgIGNpcmNsZShlYSk7XHJcbiAgICB0ZXh0KHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdGFydCA9IGZ1bmN0aW9uIChkdXJhdGlvbiwgdmFsdWUpIHtcclxuICAgIGxldCBjdXJyZW50VGltZSA9IDAsXHJcbiAgICAgIGRlbHRhID0gMzAsXHJcbiAgICAgIHN0YXJ0ID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgbGV0IGZyYW1lID0gKCkgPT4ge1xyXG4gICAgICBsZXQgcHJvZ3Jlc3MgPSBlYXNpbmcuZXhwb25lbnRpYWxPdXQoY3VycmVudFRpbWUgLyBkdXJhdGlvbik7XHJcblxyXG4gICAgICBpZiAoY3VycmVudFRpbWUgPiBkdXJhdGlvbikge1xyXG4gICAgICAgIGRyYXcoTWF0aC5QSSAqIDIgKiBwcm9ncmVzcywgcGFyc2VJbnQodmFsdWUpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgZHJhdyhNYXRoLlBJICogMiAqIHByb2dyZXNzLCBwYXJzZUludChwcm9ncmVzcyAqIHZhbHVlKSk7XHJcblxyXG4gICAgICBpZiAodHJ1ZSkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnJhbWUsIGRlbHRhKTtcclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50VGltZSA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnJhbWUsIGRlbHRhKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZHJhdzogZHJhdyxcclxuICAgIHN0YXJ0OiBzdGFydFxyXG4gIH1cclxufTsiLCJpbXBvcnQge0NvdW50RG93bn0gZnJvbSBcIi4vbWV0ZXJcIjtcclxuaW1wb3J0IHtTcGVlZG9tZXRlcn0gZnJvbSBcIi4vbWV0ZXJcIjtcclxuaW1wb3J0IHtJbmRpY2F0b3J9IGZyb20gXCIuL21ldGVyL2luZGljYXRvclwiO1xyXG5cclxubGV0IGN0eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2lyY3VsYXJfaW5kaWNhdG9yXCIpLmdldENvbnRleHQoXCIyZFwiKTtcclxuY29uc3QgY291bnREb3duID0gbmV3IENvdW50RG93bihjdHgsIDIwMCwgMjAwLCAxMCk7XHJcbmNvdW50RG93bi5zdGFydCg2MDAwMCk7XHJcblxyXG5sZXQgc2N0eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3BlZWRvbWV0ZXJcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5jb25zdCBzcGVlZG9tZXRlciA9IFNwZWVkb21ldGVyKHNjdHgsIDIwMCwgMjAwLCAxMCwgMTAwMCwgXCLpgJ/luqZcIiwgXCJLbS9oXCIsIDAsIDIwMCk7XHJcbnNwZWVkb21ldGVyLnNldFZhbHVlKDApO1xyXG5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBsZXQgdmFsdWUgPSBNYXRoLnJhbmRvbSgpICogMjAwO1xyXG4gICAgc3BlZWRvbWV0ZXIuc2V0VmFsdWUodmFsdWUpO1xyXG59LCAyMDAwKTtcclxuXHJcbmxldCBpY3R4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmRpY2F0b3JcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5jb25zdCBpbmRpY2F0b3IgPSBJbmRpY2F0b3IoaWN0eCwgMjAwLCAyMDAsIDIwLCBcIumHjOeoi1wiLCBcIkttL2hcIiwgXCJ3aGl0ZVwiKTtcclxuaW5kaWNhdG9yLnN0YXJ0KDIwMDAsIDIwMCk7IiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaCAoZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufSIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIiwiLyohXG4gKiBkZWZpbmUtcHJvcGVydHkgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2RlZmluZS1wcm9wZXJ0eT5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIDIwMTcsIEpvbiBTY2hsaW5rZXJ0LlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzRGVzY3JpcHRvciA9IHJlcXVpcmUoJ2lzLWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHZhbCkge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iaiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIGFuIG9iamVjdCBvciBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJvcCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBgcHJvcGAgdG8gYmUgYSBzdHJpbmcuJyk7XG4gIH1cblxuICBpZiAoaXNEZXNjcmlwdG9yKHZhbCkgJiYgKCdzZXQnIGluIHZhbCB8fCAnZ2V0JyBpbiB2YWwpKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHZhbCk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogdmFsXG4gIH0pO1xufTtcbiIsIi8qIVxuICogaXMtZGVzY3JpcHRvciA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaXMtZGVzY3JpcHRvcj5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtMjAxNywgSm9uIFNjaGxpbmtlcnQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdHlwZU9mID0gcmVxdWlyZSgna2luZC1vZicpO1xudmFyIGlzQWNjZXNzb3IgPSByZXF1aXJlKCdpcy1hY2Nlc3Nvci1kZXNjcmlwdG9yJyk7XG52YXIgaXNEYXRhID0gcmVxdWlyZSgnaXMtZGF0YS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNEZXNjcmlwdG9yKG9iaiwga2V5KSB7XG4gIGlmICh0eXBlT2Yob2JqKSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKCdnZXQnIGluIG9iaikge1xuICAgIHJldHVybiBpc0FjY2Vzc29yKG9iaiwga2V5KTtcbiAgfVxuICByZXR1cm4gaXNEYXRhKG9iaiwga2V5KTtcbn07XG4iLCIvKiFcbiAqIGlzLWFjY2Vzc29yLWRlc2NyaXB0b3IgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLWFjY2Vzc29yLWRlc2NyaXB0b3I+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LTIwMTcsIEpvbiBTY2hsaW5rZXJ0LlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHR5cGVPZiA9IHJlcXVpcmUoJ2tpbmQtb2YnKTtcblxuLy8gYWNjZXNzb3IgZGVzY3JpcHRvciBwcm9wZXJ0aWVzXG52YXIgYWNjZXNzb3IgPSB7XG4gIGdldDogJ2Z1bmN0aW9uJyxcbiAgc2V0OiAnZnVuY3Rpb24nLFxuICBjb25maWd1cmFibGU6ICdib29sZWFuJyxcbiAgZW51bWVyYWJsZTogJ2Jvb2xlYW4nXG59O1xuXG5mdW5jdGlvbiBpc0FjY2Vzc29yRGVzY3JpcHRvcihvYmosIHByb3ApIHtcbiAgaWYgKHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJykge1xuICAgIHZhciB2YWwgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgcHJvcCk7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgaWYgKHR5cGVPZihvYmopICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChoYXMob2JqLCAndmFsdWUnKSB8fCBoYXMob2JqLCAnd3JpdGFibGUnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghaGFzKG9iaiwgJ2dldCcpIHx8IHR5cGVvZiBvYmouZ2V0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gdGxkcjogaXQncyB2YWxpZCB0byBoYXZlIFwic2V0XCIgYmUgdW5kZWZpbmVkXG4gIC8vIFwic2V0XCIgbWlnaHQgYmUgdW5kZWZpbmVkIGlmIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYFxuICAvLyB3YXMgdXNlZCB0byBnZXQgdGhlIHZhbHVlLCBhbmQgb25seSBgZ2V0YCB3YXMgZGVmaW5lZCBieSB0aGUgdXNlclxuICBpZiAoaGFzKG9iaiwgJ3NldCcpICYmIHR5cGVvZiBvYmpba2V5XSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmICghYWNjZXNzb3IuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVPZihvYmpba2V5XSkgPT09IGFjY2Vzc29yW2tleV0pIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBoYXMob2JqLCBrZXkpIHtcbiAgcmV0dXJuIHt9Lmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuXG4vKipcbiAqIEV4cG9zZSBgaXNBY2Nlc3NvckRlc2NyaXB0b3JgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FjY2Vzc29yRGVzY3JpcHRvcjtcbiIsIi8qIVxuICogaXMtZGF0YS1kZXNjcmlwdG9yIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1kYXRhLWRlc2NyaXB0b3I+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LTIwMTcsIEpvbiBTY2hsaW5rZXJ0LlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHR5cGVPZiA9IHJlcXVpcmUoJ2tpbmQtb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0RhdGFEZXNjcmlwdG9yKG9iaiwgcHJvcCkge1xuICAvLyBkYXRhIGRlc2NyaXB0b3IgcHJvcGVydGllc1xuICB2YXIgZGF0YSA9IHtcbiAgICBjb25maWd1cmFibGU6ICdib29sZWFuJyxcbiAgICBlbnVtZXJhYmxlOiAnYm9vbGVhbicsXG4gICAgd3JpdGFibGU6ICdib29sZWFuJ1xuICB9O1xuXG4gIGlmICh0eXBlT2Yob2JqKSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIHZhbCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKTtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCAhPT0gJ3VuZGVmaW5lZCc7XG4gIH1cblxuICBpZiAoISgndmFsdWUnIGluIG9iaikgJiYgISgnd3JpdGFibGUnIGluIG9iaikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGtleSA9PT0gJ3ZhbHVlJykgY29udGludWU7XG5cbiAgICBpZiAoIWRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVPZihvYmpba2V5XSkgPT09IGRhdGFba2V5XSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvYmpba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCdpc29iamVjdCcpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xudmFyIHZpc2l0ID0gcmVxdWlyZSgnY29sbGVjdGlvbi12aXNpdCcpO1xudmFyIHRvUGF0aCA9IHJlcXVpcmUoJ3RvLW9iamVjdC1wYXRoJyk7XG52YXIgdW5pb24gPSByZXF1aXJlKCd1bmlvbi12YWx1ZScpO1xudmFyIGRlbCA9IHJlcXVpcmUoJ3Vuc2V0LXZhbHVlJyk7XG52YXIgZ2V0ID0gcmVxdWlyZSgnZ2V0LXZhbHVlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnaGFzLXZhbHVlJyk7XG52YXIgc2V0ID0gcmVxdWlyZSgnc2V0LXZhbHVlJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgYENhY2hlYCBjb25zdHJ1Y3RvciB0aGF0IHdoZW4gaW5zdGFudGlhdGVkIHdpbGxcbiAqIHN0b3JlIHZhbHVlcyBvbiB0aGUgZ2l2ZW4gYHByb3BgLlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgQ2FjaGUgPSByZXF1aXJlKCdjYWNoZS1iYXNlJykubmFtZXNwYWNlKCdkYXRhJyk7XG4gKiB2YXIgY2FjaGUgPSBuZXcgQ2FjaGUoKTtcbiAqXG4gKiBjYWNoZS5zZXQoJ2ZvbycsICdiYXInKTtcbiAqIC8vPT4ge2RhdGE6IHtmb286ICdiYXInfX1cbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBwcm9wYCBUaGUgcHJvcGVydHkgbmFtZSB0byB1c2UgZm9yIHN0b3JpbmcgdmFsdWVzLlxuICogQHJldHVybiB7RnVuY3Rpb259IFJldHVybnMgYSBjdXN0b20gYENhY2hlYCBjb25zdHJ1Y3RvclxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBuYW1lc3BhY2UocHJvcCkge1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgYENhY2hlYC4gSW50ZXJuYWxseSB0aGUgYENhY2hlYCBjb25zdHJ1Y3RvciBpcyBjcmVhdGVkIHVzaW5nXG4gICAqIHRoZSBgbmFtZXNwYWNlYCBmdW5jdGlvbiwgd2l0aCBgY2FjaGVgIGRlZmluZWQgYXMgdGhlIHN0b3JhZ2Ugb2JqZWN0LlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiB2YXIgYXBwID0gbmV3IENhY2hlKCk7XG4gICAqIGBgYFxuICAgKiBAcGFyYW0ge09iamVjdH0gYGNhY2hlYCBPcHRpb25hbGx5IHBhc3MgYW4gb2JqZWN0IHRvIGluaXRpYWxpemUgd2l0aC5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGZ1bmN0aW9uIENhY2hlKGNhY2hlKSB7XG4gICAgaWYgKHByb3ApIHtcbiAgICAgIHRoaXNbcHJvcF0gPSB7fTtcbiAgICB9XG4gICAgaWYgKGNhY2hlKSB7XG4gICAgICB0aGlzLnNldChjYWNoZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaGVyaXQgRW1pdHRlclxuICAgKi9cblxuICBFbWl0dGVyKENhY2hlLnByb3RvdHlwZSk7XG5cbiAgLyoqXG4gICAqIEFzc2lnbiBgdmFsdWVgIHRvIGBrZXlgLiBBbHNvIGVtaXRzIGBzZXRgIHdpdGhcbiAgICogdGhlIGtleSBhbmQgdmFsdWUuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFwcC5vbignc2V0JywgZnVuY3Rpb24oa2V5LCB2YWwpIHtcbiAgICogICAvLyBkbyBzb21ldGhpbmcgd2hlbiBgc2V0YCBpcyBlbWl0dGVkXG4gICAqIH0pO1xuICAgKlxuICAgKiBhcHAuc2V0KGtleSwgdmFsdWUpO1xuICAgKlxuICAgKiAvLyBhbHNvIHRha2VzIGFuIG9iamVjdCBvciBhcnJheVxuICAgKiBhcHAuc2V0KHtuYW1lOiAnSGFsbGUnfSk7XG4gICAqIGFwcC5zZXQoW3tmb286ICdiYXInfSwge2JhejogJ3F1dXgnfV0pO1xuICAgKiBjb25zb2xlLmxvZyhhcHApO1xuICAgKiAvLz0+IHtuYW1lOiAnSGFsbGUnLCBmb286ICdiYXInLCBiYXo6ICdxdXV4J31cbiAgICogYGBgXG4gICAqXG4gICAqIEBuYW1lIC5zZXRcbiAgICogQGVtaXRzIGBzZXRgIHdpdGggYGtleWAgYW5kIGB2YWx1ZWAgYXMgYXJndW1lbnRzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gYGtleWBcbiAgICogQHBhcmFtIHthbnl9IGB2YWx1ZWBcbiAgICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbnN0YW5jZSBmb3IgY2hhaW5pbmcuXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIENhY2hlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihrZXksIHZhbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGtleSkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAga2V5ID0gdG9QYXRoKGtleSk7XG4gICAgfVxuICAgIGlmIChpc09iamVjdChrZXkpIHx8IEFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgdGhpcy52aXNpdCgnc2V0Jywga2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0KHByb3AgPyB0aGlzW3Byb3BdIDogdGhpcywga2V5LCB2YWwpO1xuICAgICAgdGhpcy5lbWl0KCdzZXQnLCBrZXksIHZhbCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVbmlvbiBgYXJyYXlgIHRvIGBrZXlgLiBBbHNvIGVtaXRzIGBzZXRgIHdpdGhcbiAgICogdGhlIGtleSBhbmQgdmFsdWUuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFwcC51bmlvbignYS5iJywgWydmb28nXSk7XG4gICAqIGFwcC51bmlvbignYS5iJywgWydiYXInXSk7XG4gICAqIGNvbnNvbGUubG9nKGFwcC5nZXQoJ2EnKSk7XG4gICAqIC8vPT4ge2I6IFsnZm9vJywgJ2JhciddfVxuICAgKiBgYGBcbiAgICogQG5hbWUgLnVuaW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBga2V5YFxuICAgKiBAcGFyYW0ge2FueX0gYHZhbHVlYFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFJldHVybnMgdGhlIGluc3RhbmNlIGZvciBjaGFpbmluZy5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgQ2FjaGUucHJvdG90eXBlLnVuaW9uID0gZnVuY3Rpb24oa2V5LCB2YWwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShrZXkpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgIGtleSA9IHRvUGF0aChrZXkpO1xuICAgIH1cbiAgICB2YXIgY3R4ID0gcHJvcCA/IHRoaXNbcHJvcF0gOiB0aGlzO1xuICAgIHVuaW9uKGN0eCwga2V5LCBhcnJheWlmeSh2YWwpKTtcbiAgICB0aGlzLmVtaXQoJ3VuaW9uJywgdmFsKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSB2YWx1ZSBvZiBga2V5YC4gRG90IG5vdGF0aW9uIG1heSBiZSB1c2VkXG4gICAqIHRvIGdldCBbbmVzdGVkIHByb3BlcnR5IHZhbHVlc11bZ2V0LXZhbHVlXS5cbiAgICpcbiAgICogYGBganNcbiAgICogYXBwLnNldCgnYS5iLmMnLCAnZCcpO1xuICAgKiBhcHAuZ2V0KCdhLmInKTtcbiAgICogLy89PiB7YzogJ2QnfVxuICAgKlxuICAgKiBhcHAuZ2V0KFsnYScsICdiJ10pO1xuICAgKiAvLz0+IHtjOiAnZCd9XG4gICAqIGBgYFxuICAgKlxuICAgKiBAbmFtZSAuZ2V0XG4gICAqIEBlbWl0cyBgZ2V0YCB3aXRoIGBrZXlgIGFuZCBgdmFsdWVgIGFzIGFyZ3VtZW50cy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGBrZXlgIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuIERvdC1ub3RhdGlvbiBtYXkgYmUgdXNlZC5cbiAgICogQHJldHVybiB7YW55fSBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBga2V5YFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAga2V5ID0gdG9QYXRoKGFyZ3VtZW50cyk7XG5cbiAgICB2YXIgY3R4ID0gcHJvcCA/IHRoaXNbcHJvcF0gOiB0aGlzO1xuICAgIHZhciB2YWwgPSBnZXQoY3R4LCBrZXkpO1xuXG4gICAgdGhpcy5lbWl0KCdnZXQnLCBrZXksIHZhbCk7XG4gICAgcmV0dXJuIHZhbDtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJuIHRydWUgaWYgYXBwIGhhcyBhIHN0b3JlZCB2YWx1ZSBmb3IgYGtleWAsXG4gICAqIGZhbHNlIG9ubHkgaWYgdmFsdWUgaXMgYHVuZGVmaW5lZGAuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFwcC5zZXQoJ2ZvbycsICdiYXInKTtcbiAgICogYXBwLmhhcygnZm9vJyk7XG4gICAqIC8vPT4gdHJ1ZVxuICAgKiBgYGBcbiAgICpcbiAgICogQG5hbWUgLmhhc1xuICAgKiBAZW1pdHMgYGhhc2Agd2l0aCBga2V5YCBhbmQgdHJ1ZSBvciBmYWxzZSBhcyBhcmd1bWVudHMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBga2V5YFxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBDYWNoZS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24oa2V5KSB7XG4gICAga2V5ID0gdG9QYXRoKGFyZ3VtZW50cyk7XG5cbiAgICB2YXIgY3R4ID0gcHJvcCA/IHRoaXNbcHJvcF0gOiB0aGlzO1xuICAgIHZhciB2YWwgPSBnZXQoY3R4LCBrZXkpO1xuXG4gICAgdmFyIGhhcyA9IHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnO1xuICAgIHRoaXMuZW1pdCgnaGFzJywga2V5LCBoYXMpO1xuICAgIHJldHVybiBoYXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBvbmUgb3IgbW9yZSBwcm9wZXJ0aWVzIGZyb20gdGhlIGluc3RhbmNlLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhcHAuZGVsKCk7IC8vIGRlbGV0ZSBhbGxcbiAgICogLy8gb3JcbiAgICogYXBwLmRlbCgnZm9vJyk7XG4gICAqIC8vIG9yXG4gICAqIGFwcC5kZWwoWydmb28nLCAnYmFyJ10pO1xuICAgKiBgYGBcbiAgICogQG5hbWUgLmRlbFxuICAgKiBAZW1pdHMgYGRlbGAgd2l0aCB0aGUgYGtleWAgYXMgdGhlIG9ubHkgYXJndW1lbnQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBga2V5YCBQcm9wZXJ0eSBuYW1lIG9yIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFJldHVybnMgdGhlIGluc3RhbmNlIGZvciBjaGFpbmluZy5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgQ2FjaGUucHJvdG90eXBlLmRlbCA9IGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgIHRoaXMudmlzaXQoJ2RlbCcsIGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbChwcm9wID8gdGhpc1twcm9wXSA6IHRoaXMsIGtleSk7XG4gICAgICB0aGlzLmVtaXQoJ2RlbCcsIGtleSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgZW50aXJlIGNhY2hlIHRvIGFuIGVtcHR5IG9iamVjdC5cbiAgICpcbiAgICogYGBganNcbiAgICogYXBwLmNsZWFyKCk7XG4gICAqIGBgYFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAocHJvcCkge1xuICAgICAgdGhpc1twcm9wXSA9IHt9O1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVmlzaXQgYG1ldGhvZGAgb3ZlciB0aGUgcHJvcGVydGllcyBpbiB0aGUgZ2l2ZW4gb2JqZWN0LCBvciBtYXBcbiAgICogdmlzaXQgb3ZlciB0aGUgb2JqZWN0LWVsZW1lbnRzIGluIGFuIGFycmF5LlxuICAgKlxuICAgKiBAbmFtZSAudmlzaXRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGBtZXRob2RgIFRoZSBuYW1lIG9mIHRoZSBgYmFzZWAgbWV0aG9kIHRvIGNhbGwuXG4gICAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBgdmFsYCBUaGUgb2JqZWN0IG9yIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAgICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbnN0YW5jZSBmb3IgY2hhaW5pbmcuXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIENhY2hlLnByb3RvdHlwZS52aXNpdCA9IGZ1bmN0aW9uKG1ldGhvZCwgdmFsKSB7XG4gICAgdmlzaXQodGhpcywgbWV0aG9kLCB2YWwpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHJldHVybiBDYWNoZTtcbn1cblxuLyoqXG4gKiBDYXN0IHZhbCB0byBhbiBhcnJheVxuICovXG5cbmZ1bmN0aW9uIGFycmF5aWZ5KHZhbCkge1xuICByZXR1cm4gdmFsID8gKEFycmF5LmlzQXJyYXkodmFsKSA/IHZhbCA6IFt2YWxdKSA6IFtdO1xufVxuXG4vKipcbiAqIEV4cG9zZSBgQ2FjaGVgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBuYW1lc3BhY2UoKTtcblxuLyoqXG4gKiBFeHBvc2UgYENhY2hlLm5hbWVzcGFjZWBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4iLCIvKiFcbiAqIGNvbGxlY3Rpb24tdmlzaXQgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2NvbGxlY3Rpb24tdmlzaXQ+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCAyMDE3LCBKb24gU2NobGlua2VydC5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciB2aXNpdCA9IHJlcXVpcmUoJ29iamVjdC12aXNpdCcpO1xudmFyIG1hcFZpc2l0ID0gcmVxdWlyZSgnbWFwLXZpc2l0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY29sbGVjdGlvbiwgbWV0aG9kLCB2YWwpIHtcbiAgdmFyIHJlc3VsdDtcblxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgJiYgKG1ldGhvZCBpbiBjb2xsZWN0aW9uKSkge1xuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHJlc3VsdCA9IGNvbGxlY3Rpb25bbWV0aG9kXS5hcHBseShjb2xsZWN0aW9uLCBhcmdzKTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICByZXN1bHQgPSBtYXBWaXNpdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHZpc2l0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHJlc3VsdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIGNvbGxlY3Rpb247XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbnZhciB2aXNpdCA9IHJlcXVpcmUoJ29iamVjdC12aXNpdCcpO1xuXG4vKipcbiAqIE1hcCBgdmlzaXRgIG92ZXIgYW4gYXJyYXkgb2Ygb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBjb2xsZWN0aW9uYCBUaGUgY29udGV4dCBpbiB3aGljaCB0byBpbnZva2UgYG1ldGhvZGBcbiAqIEBwYXJhbSAge1N0cmluZ30gYG1ldGhvZGAgTmFtZSBvZiB0aGUgbWV0aG9kIHRvIGNhbGwgb24gYGNvbGxlY3Rpb25gXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBhcnJgIEFycmF5IG9mIG9iamVjdHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXBWaXNpdChjb2xsZWN0aW9uLCBtZXRob2QsIHZhbCkge1xuICBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgIHJldHVybiB2aXNpdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBhbiBhcnJheTogJyArIHV0aWwuaW5zcGVjdCh2YWwpKTtcbiAgfVxuXG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDMpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGVsZSA9IHZhbFtpXTtcbiAgICBpZiAoaXNPYmplY3QoZWxlKSkge1xuICAgICAgdmlzaXQuYXBwbHkobnVsbCwgW2NvbGxlY3Rpb24sIG1ldGhvZCwgZWxlXS5jb25jYXQoYXJncykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2xsZWN0aW9uW21ldGhvZF0uYXBwbHkoY29sbGVjdGlvbiwgW2VsZV0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICYmICh0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nIHx8ICghQXJyYXkuaXNBcnJheSh2YWwpICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSk7XG59XG4iLCJ2YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKTtcbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogR2V0IHRoZSBuYXRpdmUgYHR5cGVvZmAgYSB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gIHsqfSBgdmFsYFxuICogQHJldHVybiB7Kn0gTmF0aXZlIGphdmFzY3JpcHQgdHlwZVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ga2luZE9mKHZhbCkge1xuICAvLyBwcmltaXRpdmllc1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gdHJ1ZSB8fCB2YWwgPT09IGZhbHNlIHx8IHZhbCBpbnN0YW5jZW9mIEJvb2xlYW4pIHtcbiAgICByZXR1cm4gJ2Jvb2xlYW4nO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCB2YWwgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICByZXR1cm4gJ3N0cmluZyc7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInIHx8IHZhbCBpbnN0YW5jZW9mIE51bWJlcikge1xuICAgIHJldHVybiAnbnVtYmVyJztcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uc1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJyB8fCB2YWwgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIHJldHVybiAnZnVuY3Rpb24nO1xuICB9XG5cbiAgLy8gYXJyYXlcbiAgaWYgKHR5cGVvZiBBcnJheS5pc0FycmF5ICE9PSAndW5kZWZpbmVkJyAmJiBBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICByZXR1cm4gJ2FycmF5JztcbiAgfVxuXG4gIC8vIGNoZWNrIGZvciBpbnN0YW5jZXMgb2YgUmVnRXhwIGFuZCBEYXRlIGJlZm9yZSBjYWxsaW5nIGB0b1N0cmluZ2BcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiAncmVnZXhwJztcbiAgfVxuICBpZiAodmFsIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiAnZGF0ZSc7XG4gIH1cblxuICAvLyBvdGhlciBvYmplY3RzXG4gIHZhciB0eXBlID0gdG9TdHJpbmcuY2FsbCh2YWwpO1xuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBSZWdFeHBdJykge1xuICAgIHJldHVybiAncmVnZXhwJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgcmV0dXJuICdkYXRlJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXScpIHtcbiAgICByZXR1cm4gJ2FyZ3VtZW50cyc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEVycm9yXScpIHtcbiAgICByZXR1cm4gJ2Vycm9yJztcbiAgfVxuXG4gIC8vIGJ1ZmZlclxuICBpZiAoaXNCdWZmZXIodmFsKSkge1xuICAgIHJldHVybiAnYnVmZmVyJztcbiAgfVxuXG4gIC8vIGVzNjogTWFwLCBXZWFrTWFwLCBTZXQsIFdlYWtTZXRcbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFNldF0nKSB7XG4gICAgcmV0dXJuICdzZXQnO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBXZWFrU2V0XScpIHtcbiAgICByZXR1cm4gJ3dlYWtzZXQnO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBNYXBdJykge1xuICAgIHJldHVybiAnbWFwJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgV2Vha01hcF0nKSB7XG4gICAgcmV0dXJuICd3ZWFrbWFwJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgU3ltYm9sXScpIHtcbiAgICByZXR1cm4gJ3N5bWJvbCc7XG4gIH1cblxuICAvLyB0eXBlZCBhcnJheXNcbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEludDhBcnJheV0nKSB7XG4gICAgcmV0dXJuICdpbnQ4YXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBVaW50OEFycmF5XScpIHtcbiAgICByZXR1cm4gJ3VpbnQ4YXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nKSB7XG4gICAgcmV0dXJuICd1aW50OGNsYW1wZWRhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEludDE2QXJyYXldJykge1xuICAgIHJldHVybiAnaW50MTZhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFVpbnQxNkFycmF5XScpIHtcbiAgICByZXR1cm4gJ3VpbnQxNmFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgSW50MzJBcnJheV0nKSB7XG4gICAgcmV0dXJuICdpbnQzMmFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgVWludDMyQXJyYXldJykge1xuICAgIHJldHVybiAndWludDMyYXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBGbG9hdDMyQXJyYXldJykge1xuICAgIHJldHVybiAnZmxvYXQzMmFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScpIHtcbiAgICByZXR1cm4gJ2Zsb2F0NjRhcnJheSc7XG4gIH1cblxuICAvLyBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0XG4gIHJldHVybiAnb2JqZWN0Jztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJ2lzLWV4dGVuZGFibGUnKTtcbnZhciB1bmlvbiA9IHJlcXVpcmUoJ2Fyci11bmlvbicpO1xudmFyIGdldCA9IHJlcXVpcmUoJ2dldC12YWx1ZScpO1xudmFyIHNldCA9IHJlcXVpcmUoJ3NldC12YWx1ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHVuaW9uVmFsdWUob2JqLCBwcm9wLCB2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KG9iaikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bmlvbi12YWx1ZSBleHBlY3RzIHRoZSBmaXJzdCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QuJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHByb3AgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndW5pb24tdmFsdWUgZXhwZWN0cyBgcHJvcGAgdG8gYmUgYSBzdHJpbmcuJyk7XG4gIH1cblxuICB2YXIgYXJyID0gYXJyYXlpZnkoZ2V0KG9iaiwgcHJvcCkpO1xuICBzZXQob2JqLCBwcm9wLCB1bmlvbihhcnIsIGFycmF5aWZ5KHZhbHVlKSkpO1xuICByZXR1cm4gb2JqO1xufTtcblxuZnVuY3Rpb24gYXJyYXlpZnkodmFsKSB7XG4gIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiB2YWw7XG4gIH1cbiAgcmV0dXJuIFt2YWxdO1xufVxuIiwiLyohXG4gKiBzZXQtdmFsdWUgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L3NldC12YWx1ZT5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgMjAxNywgSm9uIFNjaGxpbmtlcnQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9QYXRoID0gcmVxdWlyZSgndG8tb2JqZWN0LXBhdGgnKTtcbnZhciBleHRlbmQgPSByZXF1aXJlKCdleHRlbmQtc2hhbGxvdycpO1xudmFyIGlzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdpcy1wbGFpbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJ2lzLWV4dGVuZGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmosIHBhdGgsIHZhbCkge1xuICBpZiAoIWlzT2JqZWN0KG9iaikpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpIHtcbiAgICBwYXRoID0gdG9QYXRoKHBhdGgpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICB2YXIgc2VncyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgdmFyIGxlbiA9IHNlZ3MubGVuZ3RoLCBpID0gLTE7XG4gIHZhciByZXMgPSBvYmo7XG4gIHZhciBsYXN0O1xuXG4gIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICB2YXIga2V5ID0gc2Vnc1tpXTtcblxuICAgIHdoaWxlIChrZXlba2V5Lmxlbmd0aCAtIDFdID09PSAnXFxcXCcpIHtcbiAgICAgIGtleSA9IGtleS5zbGljZSgwLCAtMSkgKyAnLicgKyBzZWdzWysraV07XG4gICAgfVxuXG4gICAgaWYgKGkgPT09IGxlbiAtIDEpIHtcbiAgICAgIGxhc3QgPSBrZXk7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoIWlzT2JqZWN0KG9ialtrZXldKSkge1xuICAgICAgb2JqW2tleV0gPSB7fTtcbiAgICB9XG4gICAgb2JqID0gb2JqW2tleV07XG4gIH1cblxuICBpZiAob2JqLmhhc093blByb3BlcnR5KGxhc3QpICYmIGlzT2JqZWN0KG9ialtsYXN0XSkpIHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICBleHRlbmQob2JqW2xhc3RdLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpbbGFzdF0gPSB2YWw7XG4gICAgfVxuXG4gIH0gZWxzZSB7XG4gICAgb2JqW2xhc3RdID0gdmFsO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJ2lzLWV4dGVuZGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHRlbmQoby8qLCBvYmplY3RzKi8pIHtcbiAgaWYgKCFpc09iamVjdChvKSkgeyBvID0ge307IH1cblxuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XG5cbiAgICBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgYXNzaWduKG8sIG9iaik7XG4gICAgfVxuICB9XG4gIHJldHVybiBvO1xufTtcblxuZnVuY3Rpb24gYXNzaWduKGEsIGIpIHtcbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoaGFzT3duKGIsIGtleSkpIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGBrZXlgIGlzIGFuIG93biBwcm9wZXJ0eSBvZiBgb2JqYC5cbiAqL1xuXG5mdW5jdGlvbiBoYXNPd24ob2JqLCBrZXkpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG4iLCIvKiFcbiAqIHVuc2V0LXZhbHVlIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC91bnNldC12YWx1ZT5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIDIwMTcsIEpvbiBTY2hsaW5rZXJ0LlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnaXNvYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCdoYXMtdmFsdWUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1bnNldChvYmosIHByb3ApIHtcbiAgaWYgKCFpc09iamVjdChvYmopKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgYW4gb2JqZWN0LicpO1xuICB9XG4gIGlmIChvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICBkZWxldGUgb2JqW3Byb3BdO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGhhcyhvYmosIHByb3ApKSB7XG4gICAgdmFyIHNlZ3MgPSBwcm9wLnNwbGl0KCcuJyk7XG4gICAgdmFyIGxhc3QgPSBzZWdzLnBvcCgpO1xuICAgIHdoaWxlIChzZWdzLmxlbmd0aCAmJiBzZWdzW3NlZ3MubGVuZ3RoIC0gMV0uc2xpY2UoLTEpID09PSAnXFxcXCcpIHtcbiAgICAgIGxhc3QgPSBzZWdzLnBvcCgpLnNsaWNlKDAsIC0xKSArICcuJyArIGxhc3Q7XG4gICAgfVxuICAgIHdoaWxlIChzZWdzLmxlbmd0aCkgb2JqID0gb2JqW3Byb3AgPSBzZWdzLnNoaWZ0KCldO1xuICAgIHJldHVybiAoZGVsZXRlIG9ialtsYXN0XSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLyohXG4gKiBoYXMtdmFsdWUgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2hhcy12YWx1ZT5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNiwgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCdpc29iamVjdCcpO1xudmFyIGhhc1ZhbHVlcyA9IHJlcXVpcmUoJ2hhcy12YWx1ZXMnKTtcbnZhciBnZXQgPSByZXF1aXJlKCdnZXQtdmFsdWUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmosIHByb3AsIG5vWmVybykge1xuICBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgIHJldHVybiBoYXNWYWx1ZXMoZ2V0KG9iaiwgcHJvcCksIG5vWmVybyk7XG4gIH1cbiAgcmV0dXJuIGhhc1ZhbHVlcyhvYmosIHByb3ApO1xufTtcbiIsIi8qIVxuICogaXNvYmplY3QgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzb2JqZWN0PlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgaXNBcnJheSh2YWwpID09PSBmYWxzZTtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8qIVxuICogaGFzLXZhbHVlcyA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaGFzLXZhbHVlcz5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhhc1ZhbHVlKG8sIG5vWmVybykge1xuICBpZiAobyA9PT0gbnVsbCB8fCBvID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIG8gPT09ICdib29sZWFuJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvID09PSAnbnVtYmVyJykge1xuICAgIGlmIChvID09PSAwICYmIG5vWmVybyA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChvLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG8ubGVuZ3RoICE9PSAwO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIG8pIHtcbiAgICBpZiAoby5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiIsIi8qIVxuICogaGFzLXZhbHVlIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9oYXMtdmFsdWU+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTcsIEpvbiBTY2hsaW5rZXJ0LlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnaXNvYmplY3QnKTtcbnZhciBoYXNWYWx1ZXMgPSByZXF1aXJlKCdoYXMtdmFsdWVzJyk7XG52YXIgZ2V0ID0gcmVxdWlyZSgnZ2V0LXZhbHVlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBwcm9wKSB7XG4gIHJldHVybiBoYXNWYWx1ZXMoaXNPYmplY3QodmFsKSAmJiBwcm9wID8gZ2V0KHZhbCwgcHJvcCkgOiB2YWwpO1xufTtcbiIsIi8qIVxuICogaGFzLXZhbHVlcyA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaGFzLXZhbHVlcz5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgMjAxNywgSm9uIFNjaGxpbmtlcnQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdHlwZU9mID0gcmVxdWlyZSgna2luZC1vZicpO1xudmFyIGlzTnVtYmVyID0gcmVxdWlyZSgnaXMtbnVtYmVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzVmFsdWUodmFsKSB7XG4gIC8vIGlzLW51bWJlciBjaGVja3MgZm9yIE5hTiBhbmQgb3RoZXIgZWRnZSBjYXNlc1xuICBpZiAoaXNOdW1iZXIodmFsKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlT2YodmFsKSkge1xuICAgIGNhc2UgJ251bGwnOlxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgY2FzZSAnYXJndW1lbnRzJzpcbiAgICAgIHJldHVybiB2YWwubGVuZ3RoICE9PSAwO1xuICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgIHJldHVybiB2YWwubWVzc2FnZSAhPT0gJyc7XG4gICAgY2FzZSAnYXJyYXknOlxuICAgICAgdmFyIGxlbiA9IHZhbC5sZW5ndGg7XG4gICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGhhc1ZhbHVlKHZhbFtpXSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGNhc2UgJ2ZpbGUnOlxuICAgIGNhc2UgJ21hcCc6XG4gICAgY2FzZSAnc2V0JzpcbiAgICAgIHJldHVybiB2YWwuc2l6ZSAhPT0gMDtcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgICAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgaWYgKGhhc1ZhbHVlKHZhbFtrZXldKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufTtcbiIsInZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBHZXQgdGhlIG5hdGl2ZSBgdHlwZW9mYCBhIHZhbHVlLlxuICpcbiAqIEBwYXJhbSAgeyp9IGB2YWxgXG4gKiBAcmV0dXJuIHsqfSBOYXRpdmUgamF2YXNjcmlwdCB0eXBlXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBraW5kT2YodmFsKSB7XG4gIC8vIHByaW1pdGl2aWVzXG4gIGlmICh0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAndW5kZWZpbmVkJztcbiAgfVxuICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfVxuICBpZiAodmFsID09PSB0cnVlIHx8IHZhbCA9PT0gZmFsc2UgfHwgdmFsIGluc3RhbmNlb2YgQm9vbGVhbikge1xuICAgIHJldHVybiAnYm9vbGVhbic7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8IHZhbCBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgIHJldHVybiAnc3RyaW5nJztcbiAgfVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicgfHwgdmFsIGluc3RhbmNlb2YgTnVtYmVyKSB7XG4gICAgcmV0dXJuICdudW1iZXInO1xuICB9XG5cbiAgLy8gZnVuY3Rpb25zXG4gIGlmICh0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nIHx8IHZhbCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuICdmdW5jdGlvbic7XG4gIH1cblxuICAvLyBhcnJheVxuICBpZiAodHlwZW9mIEFycmF5LmlzQXJyYXkgIT09ICd1bmRlZmluZWQnICYmIEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiAnYXJyYXknO1xuICB9XG5cbiAgLy8gY2hlY2sgZm9yIGluc3RhbmNlcyBvZiBSZWdFeHAgYW5kIERhdGUgYmVmb3JlIGNhbGxpbmcgYHRvU3RyaW5nYFxuICBpZiAodmFsIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuICdyZWdleHAnO1xuICB9XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuICdkYXRlJztcbiAgfVxuXG4gIC8vIG90aGVyIG9iamVjdHNcbiAgdmFyIHR5cGUgPSB0b1N0cmluZy5jYWxsKHZhbCk7XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XG4gICAgcmV0dXJuICdyZWdleHAnO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICByZXR1cm4gJ2RhdGUnO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBBcmd1bWVudHNdJykge1xuICAgIHJldHVybiAnYXJndW1lbnRzJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRXJyb3JdJykge1xuICAgIHJldHVybiAnZXJyb3InO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBQcm9taXNlXScpIHtcbiAgICByZXR1cm4gJ3Byb21pc2UnO1xuICB9XG5cbiAgLy8gYnVmZmVyXG4gIGlmIChpc0J1ZmZlcih2YWwpKSB7XG4gICAgcmV0dXJuICdidWZmZXInO1xuICB9XG5cbiAgLy8gZXM2OiBNYXAsIFdlYWtNYXAsIFNldCwgV2Vha1NldFxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgU2V0XScpIHtcbiAgICByZXR1cm4gJ3NldCc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFdlYWtTZXRdJykge1xuICAgIHJldHVybiAnd2Vha3NldCc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IE1hcF0nKSB7XG4gICAgcmV0dXJuICdtYXAnO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBXZWFrTWFwXScpIHtcbiAgICByZXR1cm4gJ3dlYWttYXAnO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBTeW1ib2xdJykge1xuICAgIHJldHVybiAnc3ltYm9sJztcbiAgfVxuXG4gIC8vIHR5cGVkIGFycmF5c1xuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgSW50OEFycmF5XScpIHtcbiAgICByZXR1cm4gJ2ludDhhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFVpbnQ4QXJyYXldJykge1xuICAgIHJldHVybiAndWludDhhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScpIHtcbiAgICByZXR1cm4gJ3VpbnQ4Y2xhbXBlZGFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgSW50MTZBcnJheV0nKSB7XG4gICAgcmV0dXJuICdpbnQxNmFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgVWludDE2QXJyYXldJykge1xuICAgIHJldHVybiAndWludDE2YXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBJbnQzMkFycmF5XScpIHtcbiAgICByZXR1cm4gJ2ludDMyYXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBVaW50MzJBcnJheV0nKSB7XG4gICAgcmV0dXJuICd1aW50MzJhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nKSB7XG4gICAgcmV0dXJuICdmbG9hdDMyYXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBGbG9hdDY0QXJyYXldJykge1xuICAgIHJldHVybiAnZmxvYXQ2NGFycmF5JztcbiAgfVxuXG4gIC8vIG11c3QgYmUgYSBwbGFpbiBvYmplY3RcbiAgcmV0dXJuICdvYmplY3QnO1xufTtcbiIsIi8qIVxuICogaXMtbnVtYmVyIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1udW1iZXI+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEpvbiBTY2hsaW5rZXJ0LlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHR5cGVPZiA9IHJlcXVpcmUoJ2tpbmQtb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc051bWJlcihudW0pIHtcbiAgdmFyIHR5cGUgPSB0eXBlT2YobnVtKTtcblxuICBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoIW51bS50cmltKCkpIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIGlmICh0eXBlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAobnVtIC0gbnVtICsgMSkgPj0gMDtcbn07XG4iLCJ2YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKTtcbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogR2V0IHRoZSBuYXRpdmUgYHR5cGVvZmAgYSB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gIHsqfSBgdmFsYFxuICogQHJldHVybiB7Kn0gTmF0aXZlIGphdmFzY3JpcHQgdHlwZVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ga2luZE9mKHZhbCkge1xuICAvLyBwcmltaXRpdmllc1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gdHJ1ZSB8fCB2YWwgPT09IGZhbHNlIHx8IHZhbCBpbnN0YW5jZW9mIEJvb2xlYW4pIHtcbiAgICByZXR1cm4gJ2Jvb2xlYW4nO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCB2YWwgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICByZXR1cm4gJ3N0cmluZyc7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInIHx8IHZhbCBpbnN0YW5jZW9mIE51bWJlcikge1xuICAgIHJldHVybiAnbnVtYmVyJztcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uc1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJyB8fCB2YWwgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIHJldHVybiAnZnVuY3Rpb24nO1xuICB9XG5cbiAgLy8gYXJyYXlcbiAgaWYgKHR5cGVvZiBBcnJheS5pc0FycmF5ICE9PSAndW5kZWZpbmVkJyAmJiBBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICByZXR1cm4gJ2FycmF5JztcbiAgfVxuXG4gIC8vIGNoZWNrIGZvciBpbnN0YW5jZXMgb2YgUmVnRXhwIGFuZCBEYXRlIGJlZm9yZSBjYWxsaW5nIGB0b1N0cmluZ2BcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiAncmVnZXhwJztcbiAgfVxuICBpZiAodmFsIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiAnZGF0ZSc7XG4gIH1cblxuICAvLyBvdGhlciBvYmplY3RzXG4gIHZhciB0eXBlID0gdG9TdHJpbmcuY2FsbCh2YWwpO1xuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBSZWdFeHBdJykge1xuICAgIHJldHVybiAncmVnZXhwJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgcmV0dXJuICdkYXRlJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXScpIHtcbiAgICByZXR1cm4gJ2FyZ3VtZW50cyc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEVycm9yXScpIHtcbiAgICByZXR1cm4gJ2Vycm9yJztcbiAgfVxuXG4gIC8vIGJ1ZmZlclxuICBpZiAoaXNCdWZmZXIodmFsKSkge1xuICAgIHJldHVybiAnYnVmZmVyJztcbiAgfVxuXG4gIC8vIGVzNjogTWFwLCBXZWFrTWFwLCBTZXQsIFdlYWtTZXRcbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFNldF0nKSB7XG4gICAgcmV0dXJuICdzZXQnO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBXZWFrU2V0XScpIHtcbiAgICByZXR1cm4gJ3dlYWtzZXQnO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBNYXBdJykge1xuICAgIHJldHVybiAnbWFwJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgV2Vha01hcF0nKSB7XG4gICAgcmV0dXJuICd3ZWFrbWFwJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgU3ltYm9sXScpIHtcbiAgICByZXR1cm4gJ3N5bWJvbCc7XG4gIH1cblxuICAvLyB0eXBlZCBhcnJheXNcbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEludDhBcnJheV0nKSB7XG4gICAgcmV0dXJuICdpbnQ4YXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBVaW50OEFycmF5XScpIHtcbiAgICByZXR1cm4gJ3VpbnQ4YXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nKSB7XG4gICAgcmV0dXJuICd1aW50OGNsYW1wZWRhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEludDE2QXJyYXldJykge1xuICAgIHJldHVybiAnaW50MTZhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFVpbnQxNkFycmF5XScpIHtcbiAgICByZXR1cm4gJ3VpbnQxNmFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgSW50MzJBcnJheV0nKSB7XG4gICAgcmV0dXJuICdpbnQzMmFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgVWludDMyQXJyYXldJykge1xuICAgIHJldHVybiAndWludDMyYXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBGbG9hdDMyQXJyYXldJykge1xuICAgIHJldHVybiAnZmxvYXQzMmFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScpIHtcbiAgICByZXR1cm4gJ2Zsb2F0NjRhcnJheSc7XG4gIH1cblxuICAvLyBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0XG4gIHJldHVybiAnb2JqZWN0Jztcbn07XG4iLCIvKiFcbiAqIHNldC12YWx1ZSA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvc2V0LXZhbHVlPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCAyMDE3LCBKb24gU2NobGlua2VydC5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBzcGxpdCA9IHJlcXVpcmUoJ3NwbGl0LXN0cmluZycpO1xudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ2V4dGVuZC1zaGFsbG93Jyk7XG52YXIgaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2lzLXBsYWluLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnaXMtZXh0ZW5kYWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCwgdmFsKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShwcm9wKSkge1xuICAgIHByb3AgPSBbXS5jb25jYXQuYXBwbHkoW10sIHByb3ApLmpvaW4oJy4nKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJvcCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgdmFyIGtleXMgPSBzcGxpdChwcm9wLCB7c2VwOiAnLicsIGJyYWNrZXRzOiB0cnVlfSk7XG4gIHZhciBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGlkeCA9IC0xO1xuICB2YXIgY3VycmVudCA9IG9iajtcblxuICB3aGlsZSAoKytpZHggPCBsZW4pIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpZHhdO1xuICAgIGlmIChpZHggIT09IGxlbiAtIDEpIHtcbiAgICAgIGlmICghaXNPYmplY3QoY3VycmVudFtrZXldKSkge1xuICAgICAgICBjdXJyZW50W2tleV0gPSB7fTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50W2tleV07XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNQbGFpbk9iamVjdChjdXJyZW50W2tleV0pICYmIGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgY3VycmVudFtrZXldID0gZXh0ZW5kKHt9LCBjdXJyZW50W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcbiIsIi8qIVxuICogc3BsaXQtc3RyaW5nIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9zcGxpdC1zdHJpbmc+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LTIwMTcsIEpvbiBTY2hsaW5rZXJ0LlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ2V4dGVuZC1zaGFsbG93Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc3RyLCBvcHRpb25zLCBmbikge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBhIHN0cmluZycpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm4gPSBvcHRpb25zO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG5cbiAgLy8gYWxsb3cgc2VwYXJhdG9yIHRvIGJlIGRlZmluZWQgYXMgYSBzdHJpbmdcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgIG9wdGlvbnMgPSB7IHNlcDogb3B0aW9ucyB9O1xuICB9XG5cbiAgdmFyIG9wdHMgPSBleHRlbmQoe3NlcDogJy4nfSwgb3B0aW9ucyk7XG4gIHZhciBxdW90ZXMgPSBvcHRzLnF1b3RlcyB8fCBbJ1wiJywgXCInXCIsICdgJ107XG4gIHZhciBicmFja2V0cztcblxuICBpZiAob3B0cy5icmFja2V0cyA9PT0gdHJ1ZSkge1xuICAgIGJyYWNrZXRzID0ge1xuICAgICAgJzwnOiAnPicsXG4gICAgICAnKCc6ICcpJyxcbiAgICAgICdbJzogJ10nLFxuICAgICAgJ3snOiAnfSdcbiAgICB9O1xuICB9IGVsc2UgaWYgKG9wdHMuYnJhY2tldHMpIHtcbiAgICBicmFja2V0cyA9IG9wdHMuYnJhY2tldHM7XG4gIH1cblxuICB2YXIgdG9rZW5zID0gW107XG4gIHZhciBzdGFjayA9IFtdO1xuICB2YXIgYXJyID0gWycnXTtcbiAgdmFyIHNlcCA9IG9wdHMuc2VwO1xuICB2YXIgbGVuID0gc3RyLmxlbmd0aDtcbiAgdmFyIGlkeCA9IC0xO1xuICB2YXIgY2xvc2VJZHg7XG5cbiAgZnVuY3Rpb24gZXhwZWN0ZWQoKSB7XG4gICAgaWYgKGJyYWNrZXRzICYmIHN0YWNrLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGJyYWNrZXRzW3N0YWNrW3N0YWNrLmxlbmd0aCAtIDFdXTtcbiAgICB9XG4gIH1cblxuICB3aGlsZSAoKytpZHggPCBsZW4pIHtcbiAgICB2YXIgY2ggPSBzdHJbaWR4XTtcbiAgICB2YXIgbmV4dCA9IHN0cltpZHggKyAxXTtcbiAgICB2YXIgdG9rID0geyB2YWw6IGNoLCBpZHg6IGlkeCwgYXJyOiBhcnIsIHN0cjogc3RyIH07XG4gICAgdG9rZW5zLnB1c2godG9rKTtcblxuICAgIGlmIChjaCA9PT0gJ1xcXFwnKSB7XG4gICAgICB0b2sudmFsID0ga2VlcEVzY2FwaW5nKG9wdHMsIHN0ciwgaWR4KSA9PT0gdHJ1ZSA/IChjaCArIG5leHQpIDogbmV4dDtcbiAgICAgIHRvay5lc2NhcGVkID0gdHJ1ZTtcbiAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZm4odG9rKTtcbiAgICAgIH1cbiAgICAgIGFyclthcnIubGVuZ3RoIC0gMV0gKz0gdG9rLnZhbDtcbiAgICAgIGlkeCsrO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGJyYWNrZXRzICYmIGJyYWNrZXRzW2NoXSkge1xuICAgICAgc3RhY2sucHVzaChjaCk7XG4gICAgICB2YXIgZSA9IGV4cGVjdGVkKCk7XG4gICAgICB2YXIgaSA9IGlkeCArIDE7XG5cbiAgICAgIGlmIChzdHIuaW5kZXhPZihlLCBpICsgMSkgIT09IC0xKSB7XG4gICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggJiYgaSA8IGxlbikge1xuICAgICAgICAgIHZhciBzID0gc3RyWysraV07XG4gICAgICAgICAgaWYgKHMgPT09ICdcXFxcJykge1xuICAgICAgICAgICAgcysrO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHF1b3Rlcy5pbmRleE9mKHMpICE9PSAtMSkge1xuICAgICAgICAgICAgaSA9IGdldENsb3NpbmdRdW90ZShzdHIsIHMsIGkgKyAxKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGUgPSBleHBlY3RlZCgpO1xuICAgICAgICAgIGlmIChzdGFjay5sZW5ndGggJiYgc3RyLmluZGV4T2YoZSwgaSArIDEpID09PSAtMSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGJyYWNrZXRzW3NdKSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKHMpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGUgPT09IHMpIHtcbiAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjbG9zZUlkeCA9IGk7XG4gICAgICBpZiAoY2xvc2VJZHggPT09IC0xKSB7XG4gICAgICAgIGFyclthcnIubGVuZ3RoIC0gMV0gKz0gY2g7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjaCA9IHN0ci5zbGljZShpZHgsIGNsb3NlSWR4ICsgMSk7XG4gICAgICB0b2sudmFsID0gY2g7XG4gICAgICB0b2suaWR4ID0gaWR4ID0gY2xvc2VJZHg7XG4gICAgfVxuXG4gICAgaWYgKHF1b3Rlcy5pbmRleE9mKGNoKSAhPT0gLTEpIHtcbiAgICAgIGNsb3NlSWR4ID0gZ2V0Q2xvc2luZ1F1b3RlKHN0ciwgY2gsIGlkeCArIDEpO1xuICAgICAgaWYgKGNsb3NlSWR4ID09PSAtMSkge1xuICAgICAgICBhcnJbYXJyLmxlbmd0aCAtIDFdICs9IGNoO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGtlZXBRdW90ZXMoY2gsIG9wdHMpID09PSB0cnVlKSB7XG4gICAgICAgIGNoID0gc3RyLnNsaWNlKGlkeCwgY2xvc2VJZHggKyAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoID0gc3RyLnNsaWNlKGlkeCArIDEsIGNsb3NlSWR4KTtcbiAgICAgIH1cblxuICAgICAgdG9rLnZhbCA9IGNoO1xuICAgICAgdG9rLmlkeCA9IGlkeCA9IGNsb3NlSWR4O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZuKHRvaywgdG9rZW5zKTtcbiAgICAgIGNoID0gdG9rLnZhbDtcbiAgICAgIGlkeCA9IHRvay5pZHg7XG4gICAgfVxuXG4gICAgaWYgKHRvay52YWwgPT09IHNlcCAmJiB0b2suc3BsaXQgIT09IGZhbHNlKSB7XG4gICAgICBhcnIucHVzaCgnJyk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBhcnJbYXJyLmxlbmd0aCAtIDFdICs9IHRvay52YWw7XG4gIH1cblxuICByZXR1cm4gYXJyO1xufTtcblxuZnVuY3Rpb24gZ2V0Q2xvc2luZ1F1b3RlKHN0ciwgY2gsIGksIGJyYWNrZXRzKSB7XG4gIHZhciBpZHggPSBzdHIuaW5kZXhPZihjaCwgaSk7XG4gIGlmIChzdHIuY2hhckF0KGlkeCAtIDEpID09PSAnXFxcXCcpIHtcbiAgICByZXR1cm4gZ2V0Q2xvc2luZ1F1b3RlKHN0ciwgY2gsIGlkeCArIDEpO1xuICB9XG4gIHJldHVybiBpZHg7XG59XG5cbmZ1bmN0aW9uIGtlZXBRdW90ZXMoY2gsIG9wdHMpIHtcbiAgaWYgKG9wdHMua2VlcERvdWJsZVF1b3RlcyA9PT0gdHJ1ZSAmJiBjaCA9PT0gJ1wiJykgcmV0dXJuIHRydWU7XG4gIGlmIChvcHRzLmtlZXBTaW5nbGVRdW90ZXMgPT09IHRydWUgJiYgY2ggPT09IFwiJ1wiKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIG9wdHMua2VlcFF1b3Rlcztcbn1cblxuZnVuY3Rpb24ga2VlcEVzY2FwaW5nKG9wdHMsIHN0ciwgaWR4KSB7XG4gIGlmICh0eXBlb2Ygb3B0cy5rZWVwRXNjYXBpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gb3B0cy5rZWVwRXNjYXBpbmcoc3RyLCBpZHgpO1xuICB9XG4gIHJldHVybiBvcHRzLmtlZXBFc2NhcGluZyA9PT0gdHJ1ZSB8fCBzdHJbaWR4ICsgMV0gPT09ICdcXFxcJztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzRXh0ZW5kYWJsZSA9IHJlcXVpcmUoJ2lzLWV4dGVuZGFibGUnKTtcbnZhciBhc3NpZ25TeW1ib2xzID0gcmVxdWlyZSgnYXNzaWduLXN5bWJvbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKG9iai8qLCBvYmplY3RzKi8pIHtcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICB9XG4gIGlmICghaXNPYmplY3Qob2JqKSkge1xuICAgIG9iaiA9IHt9O1xuICB9XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHZhbCA9IGFyZ3VtZW50c1tpXTtcbiAgICBpZiAoaXNTdHJpbmcodmFsKSkge1xuICAgICAgdmFsID0gdG9PYmplY3QodmFsKTtcbiAgICB9XG4gICAgaWYgKGlzT2JqZWN0KHZhbCkpIHtcbiAgICAgIGFzc2lnbihvYmosIHZhbCk7XG4gICAgICBhc3NpZ25TeW1ib2xzKG9iaiwgdmFsKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG5cbmZ1bmN0aW9uIGFzc2lnbihhLCBiKSB7XG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGhhc093bihiLCBrZXkpKSB7XG4gICAgICBhW2tleV0gPSBiW2tleV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyk7XG59XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHN0cikge1xuICB2YXIgb2JqID0ge307XG4gIGZvciAodmFyIGkgaW4gc3RyKSB7XG4gICAgb2JqW2ldID0gc3RyW2ldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JykgfHwgaXNFeHRlbmRhYmxlKHZhbCk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBga2V5YCBpcyBhbiBvd24gcHJvcGVydHkgb2YgYG9iamAuXG4gKi9cblxuZnVuY3Rpb24gaGFzT3duKG9iaiwga2V5KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuXG5mdW5jdGlvbiBpc0VudW0ob2JqLCBrZXkpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmosIGtleSk7XG59XG4iLCIvKiFcbiAqIGlzLWV4dGVuZGFibGUgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLWV4dGVuZGFibGU+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LTIwMTcsIEpvbiBTY2hsaW5rZXJ0LlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdpcy1wbGFpbi1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0V4dGVuZGFibGUodmFsKSB7XG4gIHJldHVybiBpc1BsYWluT2JqZWN0KHZhbCkgfHwgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJyB8fCBBcnJheS5pc0FycmF5KHZhbCk7XG59O1xuIiwiLyohXG4gKiBhc3NpZ24tc3ltYm9scyA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvYXNzaWduLXN5bWJvbHM+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocmVjZWl2ZXIsIG9iamVjdHMpIHtcbiAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8IHR5cGVvZiByZWNlaXZlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBmaXJzdCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QuJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iamVjdHMgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBTeW1ib2wgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHJlY2VpdmVyO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHJlY2VpdmVyO1xuICB9XG5cbiAgdmFyIGlzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHZhciB0YXJnZXQgPSBPYmplY3QocmVjZWl2ZXIpO1xuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgaSA9IDA7XG5cbiAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgIHZhciBwcm92aWRlciA9IE9iamVjdChhcmd1bWVudHNbaV0pO1xuICAgIHZhciBuYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocHJvdmlkZXIpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBuYW1lcy5sZW5ndGg7IGorKykge1xuICAgICAgdmFyIGtleSA9IG5hbWVzW2pdO1xuXG4gICAgICBpZiAoaXNFbnVtZXJhYmxlLmNhbGwocHJvdmlkZXIsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBwcm92aWRlcltrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnaXMtZXh0ZW5kYWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4dGVuZChvLyosIG9iamVjdHMqLykge1xuICBpZiAoIWlzT2JqZWN0KG8pKSB7IG8gPSB7fTsgfVxuXG4gIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIG9iaiA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGlmIChpc09iamVjdChvYmopKSB7XG4gICAgICBhc3NpZ24obywgb2JqKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG87XG59O1xuXG5mdW5jdGlvbiBhc3NpZ24oYSwgYikge1xuICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgIGlmIChoYXNPd24oYiwga2V5KSkge1xuICAgICAgYVtrZXldID0gYltrZXldO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gYGtleWAgaXMgYW4gb3duIHByb3BlcnR5IG9mIGBvYmpgLlxuICovXG5cbmZ1bmN0aW9uIGhhc093bihvYmosIGtleSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzRXh0ZW5kYWJsZSA9IHJlcXVpcmUoJ2lzLWV4dGVuZGFibGUnKTtcbnZhciBmb3JJbiA9IHJlcXVpcmUoJ2Zvci1pbicpO1xuXG5mdW5jdGlvbiBtaXhpbkRlZXAodGFyZ2V0LCBvYmplY3RzKSB7XG4gIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBpID0gMDtcbiAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XG4gICAgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgIGZvckluKG9iaiwgY29weSwgdGFyZ2V0KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuLyoqXG4gKiBDb3B5IHByb3BlcnRpZXMgZnJvbSB0aGUgc291cmNlIG9iamVjdCB0byB0aGVcbiAqIHRhcmdldCBvYmplY3QuXG4gKlxuICogQHBhcmFtICB7Kn0gYHZhbGBcbiAqIEBwYXJhbSAge1N0cmluZ30gYGtleWBcbiAqL1xuXG5mdW5jdGlvbiBjb3B5KHZhbCwga2V5KSB7XG4gIGlmIChrZXkgPT09ICdfX3Byb3RvX18nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG9iaiA9IHRoaXNba2V5XTtcbiAgaWYgKGlzT2JqZWN0KHZhbCkgJiYgaXNPYmplY3Qob2JqKSkge1xuICAgIG1peGluRGVlcChvYmosIHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpc1trZXldID0gdmFsO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGB2YWxgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHthbnl9IHZhbFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIGlzRXh0ZW5kYWJsZSh2YWwpICYmICFBcnJheS5pc0FycmF5KHZhbCk7XG59XG5cbi8qKlxuICogRXhwb3NlIGBtaXhpbkRlZXBgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBtaXhpbkRlZXA7XG4iLCIvKiFcbiAqIGlzLWV4dGVuZGFibGUgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLWV4dGVuZGFibGU+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LTIwMTcsIEpvbiBTY2hsaW5rZXJ0LlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdpcy1wbGFpbi1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0V4dGVuZGFibGUodmFsKSB7XG4gIHJldHVybiBpc1BsYWluT2JqZWN0KHZhbCkgfHwgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJyB8fCBBcnJheS5pc0FycmF5KHZhbCk7XG59O1xuIiwiLyohXG4gKiBmb3ItaW4gPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2Zvci1pbj5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNywgSm9uIFNjaGxpbmtlcnQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZvckluKG9iaiwgZm4sIHRoaXNBcmcpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChmbi5jYWxsKHRoaXNBcmcsIG9ialtrZXldLCBrZXksIG9iaikgPT09IGZhbHNlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn07XG4iLCIvKiFcbiAqIHBhc2NhbGNhc2UgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L3Bhc2NhbGNhc2U+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5mdW5jdGlvbiBwYXNjYWxjYXNlKHN0cikge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBhIHN0cmluZy4nKTtcbiAgfVxuICBzdHIgPSBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAnICQxJyk7XG4gIGlmIChzdHIubGVuZ3RoID09PSAxKSB7IHJldHVybiBzdHIudG9VcHBlckNhc2UoKTsgfVxuICBzdHIgPSBzdHIucmVwbGFjZSgvXltcXFdfXSt8W1xcV19dKyQvZywgJycpLnRvTG93ZXJDYXNlKCk7XG4gIHN0ciA9IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXFxXX10rKFxcd3wkKS9nLCBmdW5jdGlvbiAoXywgY2gpIHtcbiAgICByZXR1cm4gY2gudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFzY2FsY2FzZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG52YXIgdW5pb24gPSByZXF1aXJlKCdhcnItdW5pb24nKTtcbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydHknKTtcbnZhciBzdGF0aWNFeHRlbmQgPSByZXF1aXJlKCdzdGF0aWMtZXh0ZW5kJyk7XG52YXIgaXNPYmogPSByZXF1aXJlKCdpc29iamVjdCcpO1xuXG4vKipcbiAqIEV4cG9zZSBjbGFzcyB1dGlsc1xuICovXG5cbnZhciBjdSA9IG1vZHVsZS5leHBvcnRzO1xuXG4vKipcbiAqIEV4cG9zZSBjbGFzcyB1dGlsczogYGN1YFxuICovXG5cbmN1LmlzT2JqZWN0ID0gZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiBpc09iaih2YWwpIHx8IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbic7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbiBhcnJheSBoYXMgYW55IG9mIHRoZSBnaXZlbiBlbGVtZW50cywgb3IgYW5cbiAqIG9iamVjdCBoYXMgYW55IG9mIHRoZSBnaXZlIGtleXMuXG4gKlxuICogYGBganNcbiAqIGN1LmhhcyhbJ2EnLCAnYicsICdjJ10sICdjJyk7XG4gKiAvLz0+IHRydWVcbiAqXG4gKiBjdS5oYXMoWydhJywgJ2InLCAnYyddLCBbJ2MnLCAneiddKTtcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIGN1Lmhhcyh7YTogJ2InLCBjOiAnZCd9LCBbJ2MnLCAneiddKTtcbiAqIC8vPT4gdHJ1ZVxuICogYGBgXG4gKiBAcGFyYW0ge09iamVjdH0gYG9iamBcbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBgdmFsYFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuY3UuaGFzID0gZnVuY3Rpb24gaGFzKG9iaiwgdmFsKSB7XG4gIHZhbCA9IGN1LmFycmF5aWZ5KHZhbCk7XG4gIHZhciBsZW4gPSB2YWwubGVuZ3RoO1xuXG4gIGlmIChjdS5pc09iamVjdChvYmopKSB7XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKHZhbC5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IGN1Lm5hdGl2ZUtleXMob2JqKTtcbiAgICByZXR1cm4gY3UuaGFzKGtleXMsIHZhbCk7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgdmFyIGFyciA9IG9iajtcbiAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgIGlmIChhcnIuaW5kZXhPZih2YWxbbGVuXSkgPiAtMSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgYW4gYXJyYXkgb3Igb2JqZWN0LicpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYW4gYXJyYXkgb3Igb2JqZWN0IGhhcyBhbGwgb2YgdGhlIGdpdmVuIHZhbHVlcy5cbiAqXG4gKiBgYGBqc1xuICogY3UuaGFzQWxsKFsnYScsICdiJywgJ2MnXSwgJ2MnKTtcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIGN1Lmhhc0FsbChbJ2EnLCAnYicsICdjJ10sIFsnYycsICd6J10pO1xuICogLy89PiBmYWxzZVxuICpcbiAqIGN1Lmhhc0FsbCh7YTogJ2InLCBjOiAnZCd9LCBbJ2MnLCAneiddKTtcbiAqIC8vPT4gZmFsc2VcbiAqIGBgYFxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IGB2YWxgXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gYHZhbHVlc2BcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmN1Lmhhc0FsbCA9IGZ1bmN0aW9uIGhhc0FsbCh2YWwsIHZhbHVlcykge1xuICB2YWx1ZXMgPSBjdS5hcnJheWlmeSh2YWx1ZXMpO1xuICB2YXIgbGVuID0gdmFsdWVzLmxlbmd0aDtcbiAgd2hpbGUgKGxlbi0tKSB7XG4gICAgaWYgKCFjdS5oYXModmFsLCB2YWx1ZXNbbGVuXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIENhc3QgdGhlIGdpdmVuIHZhbHVlIHRvIGFuIGFycmF5LlxuICpcbiAqIGBgYGpzXG4gKiBjdS5hcnJheWlmeSgnZm9vJyk7XG4gKiAvLz0+IFsnZm9vJ11cbiAqXG4gKiBjdS5hcnJheWlmeShbJ2ZvbyddKTtcbiAqIC8vPT4gWydmb28nXVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGB2YWxgXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuY3UuYXJyYXlpZnkgPSBmdW5jdGlvbiBhcnJheWlmeSh2YWwpIHtcbiAgcmV0dXJuIHZhbCA/IChBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwgOiBbdmFsXSkgOiBbXTtcbn07XG5cbi8qKlxuICogTm9vcFxuICovXG5cbmN1Lm5vb3AgPSBmdW5jdGlvbiBub29wKCkge1xuICByZXR1cm47XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXG4gKi9cblxuY3UuaWRlbnRpdHkgPSBmdW5jdGlvbiBpZGVudGl0eSh2YWwpIHtcbiAgcmV0dXJuIHZhbDtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgdmFsdWUgaGFzIGEgYGNvbnRydWN0b3JgXG4gKlxuICogYGBganNcbiAqIGN1Lmhhc0NvbnN0cnVjdG9yKHt9KTtcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIGN1Lmhhc0NvbnN0cnVjdG9yKE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy89PiBmYWxzZVxuICogYGBgXG4gKiBAcGFyYW0gIHtPYmplY3R9IGB2YWx1ZWBcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmN1Lmhhc0NvbnN0cnVjdG9yID0gZnVuY3Rpb24gaGFzQ29uc3RydWN0b3IodmFsKSB7XG4gIHJldHVybiBjdS5pc09iamVjdCh2YWwpICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IgIT09ICd1bmRlZmluZWQnO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG5hdGl2ZSBgb3duUHJvcGVydHlOYW1lc2AgZnJvbSB0aGUgY29uc3RydWN0b3Igb2YgdGhlXG4gKiBnaXZlbiBgb2JqZWN0YC4gQW4gZW1wdHkgYXJyYXkgaXMgcmV0dXJuZWQgaWYgdGhlIG9iamVjdCBkb2VzXG4gKiBub3QgaGF2ZSBhIGNvbnN0cnVjdG9yLlxuICpcbiAqIGBgYGpzXG4gKiBjdS5uYXRpdmVLZXlzKHthOiAnYicsIGI6ICdjJywgYzogJ2QnfSlcbiAqIC8vPT4gWydhJywgJ2InLCAnYyddXG4gKlxuICogY3UubmF0aXZlS2V5cyhmdW5jdGlvbigpe30pXG4gKiAvLz0+IFsnbGVuZ3RoJywgJ2NhbGxlciddXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBvYmpgIE9iamVjdCB0aGF0IGhhcyBhIGBjb25zdHJ1Y3RvcmAuXG4gKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2Yga2V5cy5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuY3UubmF0aXZlS2V5cyA9IGZ1bmN0aW9uIG5hdGl2ZUtleXModmFsKSB7XG4gIGlmICghY3UuaGFzQ29uc3RydWN0b3IodmFsKSkgcmV0dXJuIFtdO1xuICB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbCk7XG4gIGlmICgnY2FsbGVyJyBpbiB2YWwpIGtleXMucHVzaCgnY2FsbGVyJyk7XG4gIHJldHVybiBrZXlzO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHByb3BlcnR5IGRlc2NyaXB0b3IgYGtleWAgaWYgaXQncyBhbiBcIm93blwiIHByb3BlcnR5XG4gKiBvZiB0aGUgZ2l2ZW4gb2JqZWN0LlxuICpcbiAqIGBgYGpzXG4gKiBmdW5jdGlvbiBBcHAoKSB7fVxuICogT2JqZWN0LmRlZmluZVByb3BlcnR5KEFwcC5wcm90b3R5cGUsICdjb3VudCcsIHtcbiAqICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAqICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcykubGVuZ3RoO1xuICogICB9XG4gKiB9KTtcbiAqIGN1LmdldERlc2NyaXB0b3IoQXBwLnByb3RvdHlwZSwgJ2NvdW50Jyk7XG4gKiAvLyByZXR1cm5zOlxuICogLy8ge1xuICogLy8gICBnZXQ6IFtGdW5jdGlvbl0sXG4gKiAvLyAgIHNldDogdW5kZWZpbmVkLFxuICogLy8gICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAqIC8vICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICogLy8gfVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGBvYmpgXG4gKiBAcGFyYW0ge1N0cmluZ30gYGtleWBcbiAqIEByZXR1cm4ge09iamVjdH0gUmV0dXJucyBkZXNjcmlwdG9yIGBrZXlgXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmN1LmdldERlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXREZXNjcmlwdG9yKG9iaiwga2V5KSB7XG4gIGlmICghY3UuaXNPYmplY3Qob2JqKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIGFuIG9iamVjdC4nKTtcbiAgfVxuICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBrZXkgdG8gYmUgYSBzdHJpbmcuJyk7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xufTtcblxuLyoqXG4gKiBDb3B5IGEgZGVzY3JpcHRvciBmcm9tIG9uZSBvYmplY3QgdG8gYW5vdGhlci5cbiAqXG4gKiBgYGBqc1xuICogZnVuY3Rpb24gQXBwKCkge31cbiAqIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcHAucHJvdG90eXBlLCAnY291bnQnLCB7XG4gKiAgIGdldDogZnVuY3Rpb24oKSB7XG4gKiAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMpLmxlbmd0aDtcbiAqICAgfVxuICogfSk7XG4gKiB2YXIgb2JqID0ge307XG4gKiBjdS5jb3B5RGVzY3JpcHRvcihvYmosIEFwcC5wcm90b3R5cGUsICdjb3VudCcpO1xuICogYGBgXG4gKiBAcGFyYW0ge09iamVjdH0gYHJlY2VpdmVyYFxuICogQHBhcmFtIHtPYmplY3R9IGBwcm92aWRlcmBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgbmFtZWBcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuY3UuY29weURlc2NyaXB0b3IgPSBmdW5jdGlvbiBjb3B5RGVzY3JpcHRvcihyZWNlaXZlciwgcHJvdmlkZXIsIG5hbWUpIHtcbiAgaWYgKCFjdS5pc09iamVjdChyZWNlaXZlcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCByZWNlaXZpbmcgb2JqZWN0IHRvIGJlIGFuIG9iamVjdC4nKTtcbiAgfVxuICBpZiAoIWN1LmlzT2JqZWN0KHByb3ZpZGVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIHByb3ZpZGluZyBvYmplY3QgdG8gYmUgYW4gb2JqZWN0LicpO1xuICB9XG4gIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBuYW1lIHRvIGJlIGEgc3RyaW5nLicpO1xuICB9XG5cbiAgdmFyIHZhbCA9IGN1LmdldERlc2NyaXB0b3IocHJvdmlkZXIsIG5hbWUpO1xuICBpZiAodmFsKSBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVjZWl2ZXIsIG5hbWUsIHZhbCk7XG59O1xuXG4vKipcbiAqIENvcHkgc3RhdGljIHByb3BlcnRpZXMsIHByb3RvdHlwZSBwcm9wZXJ0aWVzLCBhbmQgZGVzY3JpcHRvcnNcbiAqIGZyb20gb25lIG9iamVjdCB0byBhbm90aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBgcmVjZWl2ZXJgXG4gKiBAcGFyYW0ge09iamVjdH0gYHByb3ZpZGVyYFxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGBvbWl0YCBPbmUgb3IgbW9yZSBwcm9wZXJ0aWVzIHRvIG9taXRcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuY3UuY29weSA9IGZ1bmN0aW9uIGNvcHkocmVjZWl2ZXIsIHByb3ZpZGVyLCBvbWl0KSB7XG4gIGlmICghY3UuaXNPYmplY3QocmVjZWl2ZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgcmVjZWl2aW5nIG9iamVjdCB0byBiZSBhbiBvYmplY3QuJyk7XG4gIH1cbiAgaWYgKCFjdS5pc09iamVjdChwcm92aWRlcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBwcm92aWRpbmcgb2JqZWN0IHRvIGJlIGFuIG9iamVjdC4nKTtcbiAgfVxuICB2YXIgcHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm92aWRlcik7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvdmlkZXIpO1xuICB2YXIgbGVuID0gcHJvcHMubGVuZ3RoLFxuICAgIGtleTtcbiAgb21pdCA9IGN1LmFycmF5aWZ5KG9taXQpO1xuXG4gIHdoaWxlIChsZW4tLSkge1xuICAgIGtleSA9IHByb3BzW2xlbl07XG5cbiAgICBpZiAoY3UuaGFzKGtleXMsIGtleSkpIHtcbiAgICAgIGRlZmluZShyZWNlaXZlciwga2V5LCBwcm92aWRlcltrZXldKTtcbiAgICB9IGVsc2UgaWYgKCEoa2V5IGluIHJlY2VpdmVyKSAmJiAhY3UuaGFzKG9taXQsIGtleSkpIHtcbiAgICAgIGN1LmNvcHlEZXNjcmlwdG9yKHJlY2VpdmVyLCBwcm92aWRlciwga2V5KTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogSW5oZXJpdCB0aGUgc3RhdGljIHByb3BlcnRpZXMsIHByb3RvdHlwZSBwcm9wZXJ0aWVzLCBhbmQgZGVzY3JpcHRvcnNcbiAqIGZyb20gb2YgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBgcmVjZWl2ZXJgXG4gKiBAcGFyYW0ge09iamVjdH0gYHByb3ZpZGVyYFxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGBvbWl0YCBPbmUgb3IgbW9yZSBwcm9wZXJ0aWVzIHRvIG9taXRcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuY3UuaW5oZXJpdCA9IGZ1bmN0aW9uIGluaGVyaXQocmVjZWl2ZXIsIHByb3ZpZGVyLCBvbWl0KSB7XG4gIGlmICghY3UuaXNPYmplY3QocmVjZWl2ZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgcmVjZWl2aW5nIG9iamVjdCB0byBiZSBhbiBvYmplY3QuJyk7XG4gIH1cbiAgaWYgKCFjdS5pc09iamVjdChwcm92aWRlcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBwcm92aWRpbmcgb2JqZWN0IHRvIGJlIGFuIG9iamVjdC4nKTtcbiAgfVxuXG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBwcm92aWRlcikge1xuICAgIGtleXMucHVzaChrZXkpO1xuICAgIHJlY2VpdmVyW2tleV0gPSBwcm92aWRlcltrZXldO1xuICB9XG5cbiAga2V5cyA9IGtleXMuY29uY2F0KGN1LmFycmF5aWZ5KG9taXQpKTtcblxuICB2YXIgYSA9IHByb3ZpZGVyLnByb3RvdHlwZSB8fCBwcm92aWRlcjtcbiAgdmFyIGIgPSByZWNlaXZlci5wcm90b3R5cGUgfHwgcmVjZWl2ZXI7XG4gIGN1LmNvcHkoYiwgYSwga2V5cyk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiBmb3IgZXh0ZW5kaW5nIHRoZSBzdGF0aWMgcHJvcGVydGllcyxcbiAqIHByb3RvdHlwZSBwcm9wZXJ0aWVzLCBhbmQgZGVzY3JpcHRvcnMgZnJvbSB0aGUgYFBhcmVudGBcbiAqIGNvbnN0cnVjdG9yIG9udG8gYENoaWxkYCBjb25zdHJ1Y3RvcnMuXG4gKlxuICogYGBganNcbiAqIHZhciBleHRlbmQgPSBjdS5leHRlbmQoUGFyZW50KTtcbiAqIFBhcmVudC5leHRlbmQoQ2hpbGQpO1xuICpcbiAqIC8vIG9wdGlvbmFsIG1ldGhvZHNcbiAqIFBhcmVudC5leHRlbmQoQ2hpbGQsIHtcbiAqICAgZm9vOiBmdW5jdGlvbigpIHt9LFxuICogICBiYXI6IGZ1bmN0aW9uKCkge31cbiAqIH0pO1xuICogYGBgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBgUGFyZW50YCBQYXJlbnQgY3RvclxuICogQHBhcmFtIHtGdW5jdGlvbn0gYGV4dGVuZGAgT3B0aW9uYWwgZXh0ZW5kIGZ1bmN0aW9uIHRvIGhhbmRsZSBjdXN0b20gZXh0ZW5zaW9ucy4gVXNlZnVsIHdoZW4gdXBkYXRpbmcgbWV0aG9kcyB0aGF0IHJlcXVpcmUgYSBzcGVjaWZpYyBwcm90b3R5cGUuXG4gKiAgIEBwYXJhbSB7RnVuY3Rpb259IGBDaGlsZGAgQ2hpbGQgY3RvclxuICogICBAcGFyYW0ge09iamVjdH0gYHByb3RvYCBPcHRpb25hbGx5IHBhc3MgYWRkaXRpb25hbCBwcm90b3R5cGUgcHJvcGVydGllcyB0byBpbmhlcml0LlxuICogICBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmN1LmV4dGVuZCA9IGZ1bmN0aW9uKCkge1xuICAvLyBrZWVwIGl0IGxhenksIGluc3RlYWQgb2YgYXNzaWduaW5nIHRvIGBjdS5leHRlbmRgXG4gIHJldHVybiBzdGF0aWNFeHRlbmQuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogQnViYmxlIHVwIGV2ZW50cyBlbWl0dGVkIGZyb20gc3RhdGljIG1ldGhvZHMgb24gdGhlIFBhcmVudCBjdG9yLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBgUGFyZW50YFxuICogQHBhcmFtIHtBcnJheX0gYGV2ZW50c2AgRXZlbnQgbmFtZXMgdG8gYnViYmxlIHVwXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmN1LmJ1YmJsZSA9IGZ1bmN0aW9uKFBhcmVudCwgZXZlbnRzKSB7XG4gIGV2ZW50cyA9IGV2ZW50cyB8fCBbXTtcbiAgUGFyZW50LmJ1YmJsZSA9IGZ1bmN0aW9uKENoaWxkLCBhcnIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICBldmVudHMgPSB1bmlvbihbXSwgZXZlbnRzLCBhcnIpO1xuICAgIH1cbiAgICB2YXIgbGVuID0gZXZlbnRzLmxlbmd0aDtcbiAgICB2YXIgaWR4ID0gLTE7XG4gICAgd2hpbGUgKCsraWR4IDwgbGVuKSB7XG4gICAgICB2YXIgbmFtZSA9IGV2ZW50c1tpZHhdO1xuICAgICAgUGFyZW50Lm9uKG5hbWUsIENoaWxkLmVtaXQuYmluZChDaGlsZCwgbmFtZSkpO1xuICAgIH1cbiAgICBjdS5idWJibGUoQ2hpbGQsIGV2ZW50cyk7XG4gIH07XG59O1xuIiwiLyohXG4gKiBkZWZpbmUtcHJvcGVydHkgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2RlZmluZS1wcm9wZXJ0eT5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEpvbiBTY2hsaW5rZXJ0LlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzRGVzY3JpcHRvciA9IHJlcXVpcmUoJ2lzLWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHZhbCkge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iaiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIGFuIG9iamVjdCBvciBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJvcCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBgcHJvcGAgdG8gYmUgYSBzdHJpbmcuJyk7XG4gIH1cblxuICBpZiAoaXNEZXNjcmlwdG9yKHZhbCkgJiYgKCdzZXQnIGluIHZhbCB8fCAnZ2V0JyBpbiB2YWwpKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHZhbCk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogdmFsXG4gIH0pO1xufTtcbiIsInZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogR2V0IHRoZSBuYXRpdmUgYHR5cGVvZmAgYSB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gIHsqfSBgdmFsYFxuICogQHJldHVybiB7Kn0gTmF0aXZlIGphdmFzY3JpcHQgdHlwZVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ga2luZE9mKHZhbCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG5cbiAgLy8gcHJpbWl0aXZpZXNcbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICB9XG4gIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9XG4gIGlmICh2YWwgPT09IHRydWUgfHwgdmFsID09PSBmYWxzZSB8fCB2YWwgaW5zdGFuY2VvZiBCb29sZWFuKSB7XG4gICAgcmV0dXJuICdib29sZWFuJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgfHwgdmFsIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgcmV0dXJuICdzdHJpbmcnO1xuICB9XG4gIGlmICh0eXBlID09PSAnbnVtYmVyJyB8fCB2YWwgaW5zdGFuY2VvZiBOdW1iZXIpIHtcbiAgICByZXR1cm4gJ251bWJlcic7XG4gIH1cblxuICAvLyBmdW5jdGlvbnNcbiAgaWYgKHR5cGUgPT09ICdmdW5jdGlvbicgfHwgdmFsIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICBpZiAodHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5uYW1lICE9PSAndW5kZWZpbmVkJyAmJiB2YWwuY29uc3RydWN0b3IubmFtZS5zbGljZSgwLCA5KSA9PT0gJ0dlbmVyYXRvcicpIHtcbiAgICAgIHJldHVybiAnZ2VuZXJhdG9yZnVuY3Rpb24nO1xuICAgIH1cbiAgICByZXR1cm4gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIC8vIGFycmF5XG4gIGlmICh0eXBlb2YgQXJyYXkuaXNBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgcmV0dXJuICdhcnJheSc7XG4gIH1cblxuICAvLyBjaGVjayBmb3IgaW5zdGFuY2VzIG9mIFJlZ0V4cCBhbmQgRGF0ZSBiZWZvcmUgY2FsbGluZyBgdG9TdHJpbmdgXG4gIGlmICh2YWwgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gIH1cbiAgaWYgKHZhbCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gJ2RhdGUnO1xuICB9XG5cbiAgLy8gb3RoZXIgb2JqZWN0c1xuICB0eXBlID0gdG9TdHJpbmcuY2FsbCh2YWwpO1xuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBSZWdFeHBdJykge1xuICAgIHJldHVybiAncmVnZXhwJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgcmV0dXJuICdkYXRlJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXScpIHtcbiAgICByZXR1cm4gJ2FyZ3VtZW50cyc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEVycm9yXScpIHtcbiAgICByZXR1cm4gJ2Vycm9yJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgUHJvbWlzZV0nKSB7XG4gICAgcmV0dXJuICdwcm9taXNlJztcbiAgfVxuXG4gIC8vIGJ1ZmZlclxuICBpZiAoaXNCdWZmZXIodmFsKSkge1xuICAgIHJldHVybiAnYnVmZmVyJztcbiAgfVxuXG4gIC8vIGVzNjogTWFwLCBXZWFrTWFwLCBTZXQsIFdlYWtTZXRcbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFNldF0nKSB7XG4gICAgcmV0dXJuICdzZXQnO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBXZWFrU2V0XScpIHtcbiAgICByZXR1cm4gJ3dlYWtzZXQnO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBNYXBdJykge1xuICAgIHJldHVybiAnbWFwJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgV2Vha01hcF0nKSB7XG4gICAgcmV0dXJuICd3ZWFrbWFwJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgU3ltYm9sXScpIHtcbiAgICByZXR1cm4gJ3N5bWJvbCc7XG4gIH1cbiAgXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBNYXAgSXRlcmF0b3JdJykge1xuICAgIHJldHVybiAnbWFwaXRlcmF0b3InO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBTZXQgSXRlcmF0b3JdJykge1xuICAgIHJldHVybiAnc2V0aXRlcmF0b3InO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBTdHJpbmcgSXRlcmF0b3JdJykge1xuICAgIHJldHVybiAnc3RyaW5naXRlcmF0b3InO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBBcnJheSBJdGVyYXRvcl0nKSB7XG4gICAgcmV0dXJuICdhcnJheWl0ZXJhdG9yJztcbiAgfVxuICBcbiAgLy8gdHlwZWQgYXJyYXlzXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBJbnQ4QXJyYXldJykge1xuICAgIHJldHVybiAnaW50OGFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgVWludDhBcnJheV0nKSB7XG4gICAgcmV0dXJuICd1aW50OGFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJykge1xuICAgIHJldHVybiAndWludDhjbGFtcGVkYXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBJbnQxNkFycmF5XScpIHtcbiAgICByZXR1cm4gJ2ludDE2YXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBVaW50MTZBcnJheV0nKSB7XG4gICAgcmV0dXJuICd1aW50MTZhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEludDMyQXJyYXldJykge1xuICAgIHJldHVybiAnaW50MzJhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFVpbnQzMkFycmF5XScpIHtcbiAgICByZXR1cm4gJ3VpbnQzMmFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScpIHtcbiAgICByZXR1cm4gJ2Zsb2F0MzJhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nKSB7XG4gICAgcmV0dXJuICdmbG9hdDY0YXJyYXknO1xuICB9XG5cbiAgLy8gbXVzdCBiZSBhIHBsYWluIG9iamVjdFxuICByZXR1cm4gJ29iamVjdCc7XG59O1xuXG4vKipcbiAqIElmIHlvdSBuZWVkIHRvIHN1cHBvcnQgU2FmYXJpIDUtNyAoOC0xMCB5ci1vbGQgYnJvd3NlciksXG4gKiB0YWtlIGEgbG9vayBhdCBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2lzLWJ1ZmZlclxuICovXG5cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICByZXR1cm4gdmFsLmNvbnN0cnVjdG9yXG4gICAgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xufVxuIiwiLyohXG4gKiBpcy1hY2Nlc3Nvci1kZXNjcmlwdG9yIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1hY2Nlc3Nvci1kZXNjcmlwdG9yPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdHlwZU9mID0gcmVxdWlyZSgna2luZC1vZicpO1xuXG4vLyBhY2Nlc3NvciBkZXNjcmlwdG9yIHByb3BlcnRpZXNcbnZhciBhY2Nlc3NvciA9IHtcbiAgZ2V0OiAnZnVuY3Rpb24nLFxuICBzZXQ6ICdmdW5jdGlvbicsXG4gIGNvbmZpZ3VyYWJsZTogJ2Jvb2xlYW4nLFxuICBlbnVtZXJhYmxlOiAnYm9vbGVhbidcbn07XG5cbmZ1bmN0aW9uIGlzQWNjZXNzb3JEZXNjcmlwdG9yKG9iaiwgcHJvcCkge1xuICBpZiAodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIHZhbCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKTtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCAhPT0gJ3VuZGVmaW5lZCc7XG4gIH1cblxuICBpZiAodHlwZU9mKG9iaikgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGhhcyhvYmosICd2YWx1ZScpIHx8IGhhcyhvYmosICd3cml0YWJsZScpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFoYXMob2JqLCAnZ2V0JykgfHwgdHlwZW9mIG9iai5nZXQgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyB0bGRyOiBpdCdzIHZhbGlkIHRvIGhhdmUgXCJzZXRcIiBiZSB1bmRlZmluZWRcbiAgLy8gXCJzZXRcIiBtaWdodCBiZSB1bmRlZmluZWQgaWYgYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgXG4gIC8vIHdhcyB1c2VkIHRvIGdldCB0aGUgdmFsdWUsIGFuZCBvbmx5IGBnZXRgIHdhcyBkZWZpbmVkIGJ5IHRoZSB1c2VyXG4gIGlmIChoYXMob2JqLCAnc2V0JykgJiYgdHlwZW9mIG9ialtrZXldICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmpba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKCFhY2Nlc3Nvci5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZU9mKG9ialtrZXldKSA9PT0gYWNjZXNzb3Jba2V5XSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvYmpba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGhhcyhvYmosIGtleSkge1xuICByZXR1cm4ge30uaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG5cbi8qKlxuICogRXhwb3NlIGBpc0FjY2Vzc29yRGVzY3JpcHRvcmBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQWNjZXNzb3JEZXNjcmlwdG9yO1xuIiwidmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIEdldCB0aGUgbmF0aXZlIGB0eXBlb2ZgIGEgdmFsdWUuXG4gKlxuICogQHBhcmFtICB7Kn0gYHZhbGBcbiAqIEByZXR1cm4geyp9IE5hdGl2ZSBqYXZhc2NyaXB0IHR5cGVcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGtpbmRPZih2YWwpIHtcbiAgLy8gcHJpbWl0aXZpZXNcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICB9XG4gIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9XG4gIGlmICh2YWwgPT09IHRydWUgfHwgdmFsID09PSBmYWxzZSB8fCB2YWwgaW5zdGFuY2VvZiBCb29sZWFuKSB7XG4gICAgcmV0dXJuICdib29sZWFuJztcbiAgfVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHwgdmFsIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgcmV0dXJuICdzdHJpbmcnO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJyB8fCB2YWwgaW5zdGFuY2VvZiBOdW1iZXIpIHtcbiAgICByZXR1cm4gJ251bWJlcic7XG4gIH1cblxuICAvLyBmdW5jdGlvbnNcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicgfHwgdmFsIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIC8vIGFycmF5XG4gIGlmICh0eXBlb2YgQXJyYXkuaXNBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgcmV0dXJuICdhcnJheSc7XG4gIH1cblxuICAvLyBjaGVjayBmb3IgaW5zdGFuY2VzIG9mIFJlZ0V4cCBhbmQgRGF0ZSBiZWZvcmUgY2FsbGluZyBgdG9TdHJpbmdgXG4gIGlmICh2YWwgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gIH1cbiAgaWYgKHZhbCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gJ2RhdGUnO1xuICB9XG5cbiAgLy8gb3RoZXIgb2JqZWN0c1xuICB2YXIgdHlwZSA9IHRvU3RyaW5nLmNhbGwodmFsKTtcblxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgUmVnRXhwXScpIHtcbiAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIHJldHVybiAnZGF0ZSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nKSB7XG4gICAgcmV0dXJuICdhcmd1bWVudHMnO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBFcnJvcl0nKSB7XG4gICAgcmV0dXJuICdlcnJvcic7XG4gIH1cblxuICAvLyBidWZmZXJcbiAgaWYgKGlzQnVmZmVyKHZhbCkpIHtcbiAgICByZXR1cm4gJ2J1ZmZlcic7XG4gIH1cblxuICAvLyBlczY6IE1hcCwgV2Vha01hcCwgU2V0LCBXZWFrU2V0XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBTZXRdJykge1xuICAgIHJldHVybiAnc2V0JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgV2Vha1NldF0nKSB7XG4gICAgcmV0dXJuICd3ZWFrc2V0JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgTWFwXScpIHtcbiAgICByZXR1cm4gJ21hcCc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFdlYWtNYXBdJykge1xuICAgIHJldHVybiAnd2Vha21hcCc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7XG4gICAgcmV0dXJuICdzeW1ib2wnO1xuICB9XG5cbiAgLy8gdHlwZWQgYXJyYXlzXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBJbnQ4QXJyYXldJykge1xuICAgIHJldHVybiAnaW50OGFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgVWludDhBcnJheV0nKSB7XG4gICAgcmV0dXJuICd1aW50OGFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJykge1xuICAgIHJldHVybiAndWludDhjbGFtcGVkYXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBJbnQxNkFycmF5XScpIHtcbiAgICByZXR1cm4gJ2ludDE2YXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBVaW50MTZBcnJheV0nKSB7XG4gICAgcmV0dXJuICd1aW50MTZhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEludDMyQXJyYXldJykge1xuICAgIHJldHVybiAnaW50MzJhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFVpbnQzMkFycmF5XScpIHtcbiAgICByZXR1cm4gJ3VpbnQzMmFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScpIHtcbiAgICByZXR1cm4gJ2Zsb2F0MzJhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nKSB7XG4gICAgcmV0dXJuICdmbG9hdDY0YXJyYXknO1xuICB9XG5cbiAgLy8gbXVzdCBiZSBhIHBsYWluIG9iamVjdFxuICByZXR1cm4gJ29iamVjdCc7XG59O1xuIiwiLyohXG4gKiBpcy1kYXRhLWRlc2NyaXB0b3IgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLWRhdGEtZGVzY3JpcHRvcj5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEpvbiBTY2hsaW5rZXJ0LlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHR5cGVPZiA9IHJlcXVpcmUoJ2tpbmQtb2YnKTtcblxuLy8gZGF0YSBkZXNjcmlwdG9yIHByb3BlcnRpZXNcbnZhciBkYXRhID0ge1xuICBjb25maWd1cmFibGU6ICdib29sZWFuJyxcbiAgZW51bWVyYWJsZTogJ2Jvb2xlYW4nLFxuICB3cml0YWJsZTogJ2Jvb2xlYW4nXG59O1xuXG5mdW5jdGlvbiBpc0RhdGFEZXNjcmlwdG9yKG9iaiwgcHJvcCkge1xuICBpZiAodHlwZU9mKG9iaikgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJykge1xuICAgIHZhciB2YWwgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgcHJvcCk7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgaWYgKCEoJ3ZhbHVlJyBpbiBvYmopICYmICEoJ3dyaXRhYmxlJyBpbiBvYmopKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChrZXkgPT09ICd2YWx1ZScpIGNvbnRpbnVlO1xuXG4gICAgaWYgKCFkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlT2Yob2JqW2tleV0pID09PSBkYXRhW2tleV0pIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEV4cG9zZSBgaXNEYXRhRGVzY3JpcHRvcmBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRGF0YURlc2NyaXB0b3I7XG4iLCJ2YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKTtcbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogR2V0IHRoZSBuYXRpdmUgYHR5cGVvZmAgYSB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gIHsqfSBgdmFsYFxuICogQHJldHVybiB7Kn0gTmF0aXZlIGphdmFzY3JpcHQgdHlwZVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ga2luZE9mKHZhbCkge1xuICAvLyBwcmltaXRpdmllc1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gdHJ1ZSB8fCB2YWwgPT09IGZhbHNlIHx8IHZhbCBpbnN0YW5jZW9mIEJvb2xlYW4pIHtcbiAgICByZXR1cm4gJ2Jvb2xlYW4nO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCB2YWwgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICByZXR1cm4gJ3N0cmluZyc7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInIHx8IHZhbCBpbnN0YW5jZW9mIE51bWJlcikge1xuICAgIHJldHVybiAnbnVtYmVyJztcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uc1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJyB8fCB2YWwgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIHJldHVybiAnZnVuY3Rpb24nO1xuICB9XG5cbiAgLy8gYXJyYXlcbiAgaWYgKHR5cGVvZiBBcnJheS5pc0FycmF5ICE9PSAndW5kZWZpbmVkJyAmJiBBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICByZXR1cm4gJ2FycmF5JztcbiAgfVxuXG4gIC8vIGNoZWNrIGZvciBpbnN0YW5jZXMgb2YgUmVnRXhwIGFuZCBEYXRlIGJlZm9yZSBjYWxsaW5nIGB0b1N0cmluZ2BcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiAncmVnZXhwJztcbiAgfVxuICBpZiAodmFsIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiAnZGF0ZSc7XG4gIH1cblxuICAvLyBvdGhlciBvYmplY3RzXG4gIHZhciB0eXBlID0gdG9TdHJpbmcuY2FsbCh2YWwpO1xuXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBSZWdFeHBdJykge1xuICAgIHJldHVybiAncmVnZXhwJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgcmV0dXJuICdkYXRlJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXScpIHtcbiAgICByZXR1cm4gJ2FyZ3VtZW50cyc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEVycm9yXScpIHtcbiAgICByZXR1cm4gJ2Vycm9yJztcbiAgfVxuXG4gIC8vIGJ1ZmZlclxuICBpZiAoaXNCdWZmZXIodmFsKSkge1xuICAgIHJldHVybiAnYnVmZmVyJztcbiAgfVxuXG4gIC8vIGVzNjogTWFwLCBXZWFrTWFwLCBTZXQsIFdlYWtTZXRcbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFNldF0nKSB7XG4gICAgcmV0dXJuICdzZXQnO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBXZWFrU2V0XScpIHtcbiAgICByZXR1cm4gJ3dlYWtzZXQnO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBNYXBdJykge1xuICAgIHJldHVybiAnbWFwJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgV2Vha01hcF0nKSB7XG4gICAgcmV0dXJuICd3ZWFrbWFwJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgU3ltYm9sXScpIHtcbiAgICByZXR1cm4gJ3N5bWJvbCc7XG4gIH1cblxuICAvLyB0eXBlZCBhcnJheXNcbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEludDhBcnJheV0nKSB7XG4gICAgcmV0dXJuICdpbnQ4YXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBVaW50OEFycmF5XScpIHtcbiAgICByZXR1cm4gJ3VpbnQ4YXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nKSB7XG4gICAgcmV0dXJuICd1aW50OGNsYW1wZWRhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEludDE2QXJyYXldJykge1xuICAgIHJldHVybiAnaW50MTZhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFVpbnQxNkFycmF5XScpIHtcbiAgICByZXR1cm4gJ3VpbnQxNmFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgSW50MzJBcnJheV0nKSB7XG4gICAgcmV0dXJuICdpbnQzMmFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgVWludDMyQXJyYXldJykge1xuICAgIHJldHVybiAndWludDMyYXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBGbG9hdDMyQXJyYXldJykge1xuICAgIHJldHVybiAnZmxvYXQzMmFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScpIHtcbiAgICByZXR1cm4gJ2Zsb2F0NjRhcnJheSc7XG4gIH1cblxuICAvLyBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0XG4gIHJldHVybiAnb2JqZWN0Jztcbn07XG4iLCIvKiFcbiAqIHN0YXRpYy1leHRlbmQgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L3N0YXRpYy1leHRlbmQ+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBjb3B5ID0gcmVxdWlyZSgnb2JqZWN0LWNvcHknKTtcbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydHknKTtcbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiBmb3IgZXh0ZW5kaW5nIHRoZSBzdGF0aWMgcHJvcGVydGllcyxcbiAqIHByb3RvdHlwZSBwcm9wZXJ0aWVzLCBhbmQgZGVzY3JpcHRvcnMgZnJvbSB0aGUgYFBhcmVudGBcbiAqIGNvbnN0cnVjdG9yIG9udG8gYENoaWxkYCBjb25zdHJ1Y3RvcnMuXG4gKlxuICogYGBganNcbiAqIHZhciBleHRlbmQgPSByZXF1aXJlKCdzdGF0aWMtZXh0ZW5kJyk7XG4gKiBQYXJlbnQuZXh0ZW5kID0gZXh0ZW5kKFBhcmVudCk7XG4gKlxuICogLy8gb3B0aW9uYWxseSBwYXNzIGEgY3VzdG9tIG1lcmdlIGZ1bmN0aW9uIGFzIHRoZSBzZWNvbmQgYXJnXG4gKiBQYXJlbnQuZXh0ZW5kID0gZXh0ZW5kKFBhcmVudCwgZnVuY3Rpb24oQ2hpbGQpIHtcbiAqICAgQ2hpbGQucHJvdG90eXBlLm1peGluID0gZnVuY3Rpb24oa2V5LCB2YWwpIHtcbiAqICAgICBDaGlsZC5wcm90b3R5cGVba2V5XSA9IHZhbDtcbiAqICAgfTtcbiAqIH0pO1xuICpcbiAqIC8vIGV4dGVuZCBcImNoaWxkXCIgY29uc3RydWN0b3JzXG4gKiBQYXJlbnQuZXh0ZW5kKENoaWxkKTtcbiAqXG4gKiAvLyBvcHRpb25hbGx5IGRlZmluZSBwcm90b3R5cGUgbWV0aG9kcyBhcyB0aGUgc2Vjb25kIGFyZ1xuICogUGFyZW50LmV4dGVuZChDaGlsZCwge1xuICogICBmb286IGZ1bmN0aW9uKCkge30sXG4gKiAgIGJhcjogZnVuY3Rpb24oKSB7fVxuICogfSk7XG4gKiBgYGBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGBQYXJlbnRgIFBhcmVudCBjdG9yXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBgZXh0ZW5kRm5gIE9wdGlvbmFsIGV4dGVuZCBmdW5jdGlvbiBmb3IgaGFuZGxpbmcgYW55IG5lY2Vzc2FyeSBjdXN0b20gbWVyZ2luZy4gVXNlZnVsIHdoZW4gdXBkYXRpbmcgbWV0aG9kcyB0aGF0IHJlcXVpcmUgYSBzcGVjaWZpYyBwcm90b3R5cGUuXG4gKiAgIEBwYXJhbSB7RnVuY3Rpb259IGBDaGlsZGAgQ2hpbGQgY3RvclxuICogICBAcGFyYW0ge09iamVjdH0gYHByb3RvYCBPcHRpb25hbGx5IHBhc3MgYWRkaXRpb25hbCBwcm90b3R5cGUgcHJvcGVydGllcyB0byBpbmhlcml0LlxuICogICBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGV4dGVuZChQYXJlbnQsIGV4dGVuZEZuKSB7XG4gIGlmICh0eXBlb2YgUGFyZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgUGFyZW50IHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oQ3RvciwgcHJvdG8pIHtcbiAgICBpZiAodHlwZW9mIEN0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIEN0b3IgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICB1dGlsLmluaGVyaXRzKEN0b3IsIFBhcmVudCk7XG4gICAgY29weShDdG9yLCBQYXJlbnQpO1xuXG4gICAgLy8gcHJvdG8gY2FuIGJlIG51bGwgb3IgYSBwbGFpbiBvYmplY3RcbiAgICBpZiAodHlwZW9mIHByb3RvID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIG9iaiA9IE9iamVjdC5jcmVhdGUocHJvdG8pO1xuXG4gICAgICBmb3IgKHZhciBrIGluIG9iaikge1xuICAgICAgICBDdG9yLnByb3RvdHlwZVtrXSA9IG9ialtrXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBrZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgcHJvdG90eXBlXG4gICAgZGVmaW5lKEN0b3IucHJvdG90eXBlLCAnX3BhcmVudF8nLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBzZXQ6IGZ1bmN0aW9uKCkge30sXG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gUGFyZW50LnByb3RvdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2YgZXh0ZW5kRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGV4dGVuZEZuKEN0b3IsIFBhcmVudCk7XG4gICAgfVxuXG4gICAgQ3Rvci5leHRlbmQgPSBleHRlbmQoQ3RvciwgZXh0ZW5kRm4pO1xuICB9O1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYGV4dGVuZGBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4dGVuZDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHR5cGVPZiA9IHJlcXVpcmUoJ2tpbmQtb2YnKTtcbnZhciBjb3B5RGVzY3JpcHRvciA9IHJlcXVpcmUoJ2NvcHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0eScpO1xuXG4vKipcbiAqIENvcHkgc3RhdGljIHByb3BlcnRpZXMsIHByb3RvdHlwZSBwcm9wZXJ0aWVzLCBhbmQgZGVzY3JpcHRvcnMgZnJvbSBvbmUgb2JqZWN0IHRvIGFub3RoZXIuXG4gKlxuICogYGBganNcbiAqIGZ1bmN0aW9uIEFwcCgpIHt9XG4gKiB2YXIgcHJvdG8gPSBBcHAucHJvdG90eXBlO1xuICogQXBwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbigpIHt9O1xuICogQXBwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbigpIHt9O1xuICpcbiAqIHZhciBvYmogPSB7fTtcbiAqIGNvcHkob2JqLCBwcm90byk7XG4gKiBgYGBcbiAqIEBwYXJhbSB7T2JqZWN0fSBgcmVjZWl2ZXJgXG4gKiBAcGFyYW0ge09iamVjdH0gYHByb3ZpZGVyYFxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGBvbWl0YCBPbmUgb3IgbW9yZSBwcm9wZXJ0aWVzIHRvIG9taXRcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY29weShyZWNlaXZlciwgcHJvdmlkZXIsIG9taXQpIHtcbiAgaWYgKCFpc09iamVjdChyZWNlaXZlcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCByZWNlaXZpbmcgb2JqZWN0IHRvIGJlIGFuIG9iamVjdC4nKTtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KHByb3ZpZGVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIHByb3ZpZGluZyBvYmplY3QgdG8gYmUgYW4gb2JqZWN0LicpO1xuICB9XG5cbiAgdmFyIHByb3BzID0gbmF0aXZlS2V5cyhwcm92aWRlcik7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvdmlkZXIpO1xuICB2YXIgbGVuID0gcHJvcHMubGVuZ3RoO1xuICBvbWl0ID0gYXJyYXlpZnkob21pdCk7XG5cbiAgd2hpbGUgKGxlbi0tKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2xlbl07XG5cbiAgICBpZiAoaGFzKGtleXMsIGtleSkpIHtcbiAgICAgIGRlZmluZShyZWNlaXZlciwga2V5LCBwcm92aWRlcltrZXldKTtcbiAgICB9IGVsc2UgaWYgKCEoa2V5IGluIHJlY2VpdmVyKSAmJiAhaGFzKG9taXQsIGtleSkpIHtcbiAgICAgIGNvcHlEZXNjcmlwdG9yKHJlY2VpdmVyLCBwcm92aWRlciwga2V5KTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvblxuICovXG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdHlwZU9mKHZhbCkgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGFuIGFycmF5IGhhcyBhbnkgb2YgdGhlIGdpdmVuIGVsZW1lbnRzLCBvciBhblxuICogb2JqZWN0IGhhcyBhbnkgb2YgdGhlIGdpdmUga2V5cy5cbiAqXG4gKiBgYGBqc1xuICogaGFzKFsnYScsICdiJywgJ2MnXSwgJ2MnKTtcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIGhhcyhbJ2EnLCAnYicsICdjJ10sIFsnYycsICd6J10pO1xuICogLy89PiB0cnVlXG4gKlxuICogaGFzKHthOiAnYicsIGM6ICdkJ30sIFsnYycsICd6J10pO1xuICogLy89PiB0cnVlXG4gKiBgYGBcbiAqIEBwYXJhbSB7T2JqZWN0fSBgb2JqYFxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGB2YWxgXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmZ1bmN0aW9uIGhhcyhvYmosIHZhbCkge1xuICB2YWwgPSBhcnJheWlmeSh2YWwpO1xuICB2YXIgbGVuID0gdmFsLmxlbmd0aDtcblxuICBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmICh2YWwuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBuYXRpdmVLZXlzKG9iaik7XG4gICAgcmV0dXJuIGhhcyhrZXlzLCB2YWwpO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHZhciBhcnIgPSBvYmo7XG4gICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICBpZiAoYXJyLmluZGV4T2YodmFsW2xlbl0pID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIGFuIGFycmF5IG9yIG9iamVjdC4nKTtcbn1cblxuLyoqXG4gKiBDYXN0IHRoZSBnaXZlbiB2YWx1ZSB0byBhbiBhcnJheS5cbiAqXG4gKiBgYGBqc1xuICogYXJyYXlpZnkoJ2ZvbycpO1xuICogLy89PiBbJ2ZvbyddXG4gKlxuICogYXJyYXlpZnkoWydmb28nXSk7XG4gKiAvLz0+IFsnZm9vJ11cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBgdmFsYFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxuZnVuY3Rpb24gYXJyYXlpZnkodmFsKSB7XG4gIHJldHVybiB2YWwgPyAoQXJyYXkuaXNBcnJheSh2YWwpID8gdmFsIDogW3ZhbF0pIDogW107XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgdmFsdWUgaGFzIGEgYGNvbnRydWN0b3JgXG4gKlxuICogYGBganNcbiAqIGhhc0NvbnN0cnVjdG9yKHt9KTtcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIGhhc0NvbnN0cnVjdG9yKE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy89PiBmYWxzZVxuICogYGBgXG4gKiBAcGFyYW0gIHtPYmplY3R9IGB2YWx1ZWBcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gaGFzQ29uc3RydWN0b3IodmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IgIT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIEdldCB0aGUgbmF0aXZlIGBvd25Qcm9wZXJ0eU5hbWVzYCBmcm9tIHRoZSBjb25zdHJ1Y3RvciBvZiB0aGVcbiAqIGdpdmVuIGBvYmplY3RgLiBBbiBlbXB0eSBhcnJheSBpcyByZXR1cm5lZCBpZiB0aGUgb2JqZWN0IGRvZXNcbiAqIG5vdCBoYXZlIGEgY29uc3RydWN0b3IuXG4gKlxuICogYGBganNcbiAqIG5hdGl2ZUtleXMoe2E6ICdiJywgYjogJ2MnLCBjOiAnZCd9KVxuICogLy89PiBbJ2EnLCAnYicsICdjJ11cbiAqXG4gKiBuYXRpdmVLZXlzKGZ1bmN0aW9uKCl7fSlcbiAqIC8vPT4gWydsZW5ndGgnLCAnY2FsbGVyJ11cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gYG9iamAgT2JqZWN0IHRoYXQgaGFzIGEgYGNvbnN0cnVjdG9yYC5cbiAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBrZXlzLlxuICovXG5cbmZ1bmN0aW9uIG5hdGl2ZUtleXModmFsKSB7XG4gIGlmICghaGFzQ29uc3RydWN0b3IodmFsKSkgcmV0dXJuIFtdO1xuICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsKTtcbn1cblxuLyoqXG4gKiBFeHBvc2UgYGNvcHlgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5O1xuXG4vKipcbiAqIEV4cG9zZSBgY29weS5oYXNgIGZvciB0ZXN0c1xuICovXG5cbm1vZHVsZS5leHBvcnRzLmhhcyA9IGhhcztcbiIsInZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBHZXQgdGhlIG5hdGl2ZSBgdHlwZW9mYCBhIHZhbHVlLlxuICpcbiAqIEBwYXJhbSAgeyp9IGB2YWxgXG4gKiBAcmV0dXJuIHsqfSBOYXRpdmUgamF2YXNjcmlwdCB0eXBlXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBraW5kT2YodmFsKSB7XG4gIC8vIHByaW1pdGl2aWVzXG4gIGlmICh0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAndW5kZWZpbmVkJztcbiAgfVxuICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfVxuICBpZiAodmFsID09PSB0cnVlIHx8IHZhbCA9PT0gZmFsc2UgfHwgdmFsIGluc3RhbmNlb2YgQm9vbGVhbikge1xuICAgIHJldHVybiAnYm9vbGVhbic7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8IHZhbCBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgIHJldHVybiAnc3RyaW5nJztcbiAgfVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicgfHwgdmFsIGluc3RhbmNlb2YgTnVtYmVyKSB7XG4gICAgcmV0dXJuICdudW1iZXInO1xuICB9XG5cbiAgLy8gZnVuY3Rpb25zXG4gIGlmICh0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nIHx8IHZhbCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuICdmdW5jdGlvbic7XG4gIH1cblxuICAvLyBhcnJheVxuICBpZiAodHlwZW9mIEFycmF5LmlzQXJyYXkgIT09ICd1bmRlZmluZWQnICYmIEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiAnYXJyYXknO1xuICB9XG5cbiAgLy8gY2hlY2sgZm9yIGluc3RhbmNlcyBvZiBSZWdFeHAgYW5kIERhdGUgYmVmb3JlIGNhbGxpbmcgYHRvU3RyaW5nYFxuICBpZiAodmFsIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuICdyZWdleHAnO1xuICB9XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuICdkYXRlJztcbiAgfVxuXG4gIC8vIG90aGVyIG9iamVjdHNcbiAgdmFyIHR5cGUgPSB0b1N0cmluZy5jYWxsKHZhbCk7XG5cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XG4gICAgcmV0dXJuICdyZWdleHAnO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICByZXR1cm4gJ2RhdGUnO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBBcmd1bWVudHNdJykge1xuICAgIHJldHVybiAnYXJndW1lbnRzJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRXJyb3JdJykge1xuICAgIHJldHVybiAnZXJyb3InO1xuICB9XG5cbiAgLy8gYnVmZmVyXG4gIGlmIChpc0J1ZmZlcih2YWwpKSB7XG4gICAgcmV0dXJuICdidWZmZXInO1xuICB9XG5cbiAgLy8gZXM2OiBNYXAsIFdlYWtNYXAsIFNldCwgV2Vha1NldFxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgU2V0XScpIHtcbiAgICByZXR1cm4gJ3NldCc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFdlYWtTZXRdJykge1xuICAgIHJldHVybiAnd2Vha3NldCc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IE1hcF0nKSB7XG4gICAgcmV0dXJuICdtYXAnO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBXZWFrTWFwXScpIHtcbiAgICByZXR1cm4gJ3dlYWttYXAnO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBTeW1ib2xdJykge1xuICAgIHJldHVybiAnc3ltYm9sJztcbiAgfVxuXG4gIC8vIHR5cGVkIGFycmF5c1xuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgSW50OEFycmF5XScpIHtcbiAgICByZXR1cm4gJ2ludDhhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFVpbnQ4QXJyYXldJykge1xuICAgIHJldHVybiAndWludDhhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScpIHtcbiAgICByZXR1cm4gJ3VpbnQ4Y2xhbXBlZGFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgSW50MTZBcnJheV0nKSB7XG4gICAgcmV0dXJuICdpbnQxNmFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgVWludDE2QXJyYXldJykge1xuICAgIHJldHVybiAndWludDE2YXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBJbnQzMkFycmF5XScpIHtcbiAgICByZXR1cm4gJ2ludDMyYXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBVaW50MzJBcnJheV0nKSB7XG4gICAgcmV0dXJuICd1aW50MzJhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nKSB7XG4gICAgcmV0dXJuICdmbG9hdDMyYXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBGbG9hdDY0QXJyYXldJykge1xuICAgIHJldHVybiAnZmxvYXQ2NGFycmF5JztcbiAgfVxuXG4gIC8vIG11c3QgYmUgYSBwbGFpbiBvYmplY3RcbiAgcmV0dXJuICdvYmplY3QnO1xufTtcbiIsIi8qIVxuICogY29weS1kZXNjcmlwdG9yIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9jb3B5LWRlc2NyaXB0b3I+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ29weSBhIGRlc2NyaXB0b3IgZnJvbSBvbmUgb2JqZWN0IHRvIGFub3RoZXIuXG4gKlxuICogYGBganNcbiAqIGZ1bmN0aW9uIEFwcCgpIHtcbiAqICAgdGhpcy5jYWNoZSA9IHt9O1xuICogfVxuICogQXBwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihrZXksIHZhbCkge1xuICogICB0aGlzLmNhY2hlW2tleV0gPSB2YWw7XG4gKiAgIHJldHVybiB0aGlzO1xuICogfTtcbiAqIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcHAucHJvdG90eXBlLCAnY291bnQnLCB7XG4gKiAgIGdldDogZnVuY3Rpb24oKSB7XG4gKiAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuY2FjaGUpLmxlbmd0aDtcbiAqICAgfVxuICogfSk7XG4gKlxuICogY29weShBcHAucHJvdG90eXBlLCAnY291bnQnLCAnbGVuJyk7XG4gKlxuICogLy8gY3JlYXRlIGFuIGluc3RhbmNlXG4gKiB2YXIgYXBwID0gbmV3IEFwcCgpO1xuICpcbiAqIGFwcC5zZXQoJ2EnLCB0cnVlKTtcbiAqIGFwcC5zZXQoJ2InLCB0cnVlKTtcbiAqIGFwcC5zZXQoJ2MnLCB0cnVlKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcHAuY291bnQpO1xuICogLy89PiAzXG4gKiBjb25zb2xlLmxvZyhhcHAubGVuKTtcbiAqIC8vPT4gM1xuICogYGBgXG4gKiBAbmFtZSBjb3B5XG4gKiBAcGFyYW0ge09iamVjdH0gYHJlY2VpdmVyYCBUaGUgdGFyZ2V0IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IGBwcm92aWRlcmAgVGhlIHByb3ZpZGVyIG9iamVjdFxuICogQHBhcmFtIHtTdHJpbmd9IGBmcm9tYCBUaGUga2V5IHRvIGNvcHkgb24gcHJvdmlkZXIuXG4gKiBAcGFyYW0ge1N0cmluZ30gYHRvYCBPcHRpb25hbGx5IHNwZWNpZnkgYSBuZXcga2V5IG5hbWUgdG8gdXNlLlxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvcHlEZXNjcmlwdG9yKHJlY2VpdmVyLCBwcm92aWRlciwgZnJvbSwgdG8pIHtcbiAgaWYgKCFpc09iamVjdChwcm92aWRlcikgJiYgdHlwZW9mIHByb3ZpZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdG8gPSBmcm9tO1xuICAgIGZyb20gPSBwcm92aWRlcjtcbiAgICBwcm92aWRlciA9IHJlY2VpdmVyO1xuICB9XG4gIGlmICghaXNPYmplY3QocmVjZWl2ZXIpICYmIHR5cGVvZiByZWNlaXZlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIHRoZSBmaXJzdCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QnKTtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KHByb3ZpZGVyKSAmJiB0eXBlb2YgcHJvdmlkZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBwcm92aWRlciB0byBiZSBhbiBvYmplY3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdG8gIT09ICdzdHJpbmcnKSB7XG4gICAgdG8gPSBmcm9tO1xuICB9XG4gIGlmICh0eXBlb2YgZnJvbSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBrZXkgdG8gYmUgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIGlmICghKGZyb20gaW4gcHJvdmlkZXIpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9wZXJ0eSBcIicgKyBmcm9tICsgJ1wiIGRvZXMgbm90IGV4aXN0Jyk7XG4gIH1cblxuICB2YXIgdmFsID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm92aWRlciwgZnJvbSk7XG4gIGlmICh2YWwpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgdG8sIHZhbCk7XG59O1xuXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbiIsIi8qIVxuICogZGVmaW5lLXByb3BlcnR5IDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9kZWZpbmUtcHJvcGVydHk+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc0Rlc2NyaXB0b3IgPSByZXF1aXJlKCdpcy1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB2YWwpIHtcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmogIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBhbiBvYmplY3Qgb3IgZnVuY3Rpb24uJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHByb3AgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgYHByb3BgIHRvIGJlIGEgc3RyaW5nLicpO1xuICB9XG5cbiAgaWYgKGlzRGVzY3JpcHRvcih2YWwpICYmICgnc2V0JyBpbiB2YWwgfHwgJ2dldCcgaW4gdmFsKSkge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB2YWwpO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IHZhbFxuICB9KTtcbn07XG4iLCIvKiFcbiAqIGRlZmluZS1wcm9wZXJ0eSA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvZGVmaW5lLXByb3BlcnR5PlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNEZXNjcmlwdG9yID0gcmVxdWlyZSgnaXMtZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgdmFsKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwcm9wICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIGBwcm9wYCB0byBiZSBhIHN0cmluZy4nKTtcbiAgfVxuXG4gIGlmIChpc0Rlc2NyaXB0b3IodmFsKSAmJiAoJ3NldCcgaW4gdmFsIHx8ICdnZXQnIGluIHZhbCkpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgdmFsKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiB2YWxcbiAgfSk7XG59O1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9