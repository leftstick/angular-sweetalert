(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("sweetalert2"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "sweetalert2"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular"), require("sweetalert2")) : factory(root["angular"], root["swal"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sweetalert2__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_object__ = __webpack_require__(2);
/* harmony export (immutable) */ __webpack_exports__["a"] = swalService;
swalService.$inject = ['$q'];

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }




function swalService($q) {
    'ngInject';

    var wrapper = function wrapper() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var opts = args.slice();

        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helper_object__["a" /* isObject */])(opts[0]) && opts[0].preConfirm) {
            (function () {
                var oldPreConfirm = opts[0].preConfirm;
                opts[0].preConfirm = function () {
                    return wrapNativePromise($q, oldPreConfirm.apply(undefined, arguments), 'preConfirm should return Promise');
                };
            })();
        }

        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helper_object__["a" /* isObject */])(opts[0]) && opts[0].inputOptions) {
            var oldInputOptions = opts[0].inputOptions;
            opts[0].inputOptions = wrapNativePromise($q, oldInputOptions, 'inputOptions should be Promise or literal Object');
        }

        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helper_object__["a" /* isObject */])(opts[0]) && opts[0].inputValidator) {
            (function () {
                var oldInputValidator = opts[0].inputValidator;
                opts[0].inputValidator = function () {
                    return wrapNativePromise($q, oldInputValidator.apply(undefined, arguments), 'inputValidator should return Promise');
                };
            })();
        }

        var result = __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default.a.apply(undefined, _toConsumableArray(opts));
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helper_object__["b" /* isPromise */])(result)) {
            return result;
        }

        return wrapNativePromise($q, result);
    };

    Object.keys(__WEBPACK_IMPORTED_MODULE_0_sweetalert2___default.a).forEach(function (k) {
        wrapper[k] = __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default.a[k];
    });

    wrapper.queue = function () {
        return wrapNativePromise($q, __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default.a.queue.apply(__WEBPACK_IMPORTED_MODULE_0_sweetalert2___default.a, arguments), '');
    };

    return wrapper;
}

function wrapNativePromise($q, pro, msg) {
    return $q(function (resolve, reject) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helper_object__["b" /* isPromise */])(pro)) {
            return reject(msg);
        }
        pro.then(resolve, reject);
    });
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isPromise;
/* harmony export (immutable) */ __webpack_exports__["a"] = isObject;

function isPromise(promise) {
    return !!promise && promise.then && promise.catch;
}

function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_swal__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngSweetAlert2", function() { return ngSweetAlert2; });




var moduleName = 'angular-sweetalert';
__WEBPACK_IMPORTED_MODULE_0_angular___default.a.module(moduleName, []).factory('swal', __WEBPACK_IMPORTED_MODULE_1__services_swal__["a" /* swalService */]);

var ngSweetAlert2 = moduleName;

/***/ })
/******/ ]);
});