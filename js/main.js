/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_parallax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/parallax.js */ \"./src/js/modules/parallax.js\");\n/* harmony import */ var _modules_copy_code_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/copy-code.js */ \"./src/js/modules/copy-code.js\");\n\n\n\nif ($(document).width() > 1024) {\n    (0,_modules_parallax_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n(0,_modules_copy_code_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://test-task/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/copy-code.js":
/*!*************************************!*\
  !*** ./src/js/modules/copy-code.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    async function copyTargetText(e) {\n        try {\n            const code = document.querySelector(\".bonus-code__code\")\n            await navigator.clipboard.writeText(code.innerText);\n        } catch (err) {\n            console.error(\"Failed to copy: \", err);\n        }\n    }\n\n    document.querySelector(\".bonus-code__btn-copy\").addEventListener(\"click\", (e) => {\n        copyTargetText(e);\n        document.querySelector(\".bonus-code__btn-copy\").innerHTML = 'COPIED';\n        document.querySelector(\".bonus-code__btn-copy\").style.color = 'red';\n        setTimeout(() => {\n            document.querySelector(\".bonus-code__btn-copy\").innerHTML = \"COPY CODE\";\n            document.querySelector(\".bonus-code__btn-copy\").style.color = 'white';\n        }, 1000);\n    });\n});\n\n\n//# sourceURL=webpack://test-task/./src/js/modules/copy-code.js?");

/***/ }),

/***/ "./src/js/modules/parallax.js":
/*!************************************!*\
  !*** ./src/js/modules/parallax.js ***!
  \************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    const witcher= $('.witcher');\n    const sparks_back= $('.sparks_back');\n    const sparks_front= $('.sparks_front');\n\n    const layer= $('.main');\n\n    layer.mousemove(function(e){\n        const ivalueX= (e.pageX * -1 / 30);\n        const cvalueX= (e.pageX * -1 / 40);\n        const cvalueY= (e.pageY * -1 / 60);\n            witcher.css('transform', 'translate3d('+ivalueX+'px,'+0+'px, 0)');\n            sparks_back.css('transform', 'translate3d('+cvalueX+'px,'+cvalueY+'px, 0)');\n            sparks_front.css('transform', 'translate3d('+cvalueX+'px,'+cvalueY+'px, 0)');\n    });\n});\n\n//# sourceURL=webpack://test-task/./src/js/modules/parallax.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;