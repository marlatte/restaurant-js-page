/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\nconsole.log(\"Hey there\");\n\nconst mainContent = document.getElementById(\"content\");\nconst sidebar = document.querySelector(\".sidebar\");\nconst openSidebar = document.getElementById(\"open-sidebar\");\nconst closeSidebar = document.getElementById(\"close-sidebar\");\n\nfunction toggleNav() {\n\tsidebar.classList.toggle(\"open\");\n}\n\nopenSidebar.addEventListener(\"click\", toggleNav);\ncloseSidebar.addEventListener(\"click\", toggleNav);\n\n// events.js\nconst inquireBtns = document.querySelectorAll(\".inquire\");\nconst closeModal = document.getElementById(\"close-modal\");\nconst form = document.querySelector(\"form\");\n\nform.addEventListener(\"submit\", handleFormSubmit);\nfunction handleFormSubmit(e) {\n\te.preventDefault();\n\tconsole.log(\"Form submitted.\");\n\ttoggleModal();\n}\n\ninquireBtns.forEach((button) => {\n\tbutton.addEventListener(\"click\", toggleModal);\n});\n\ncloseModal.addEventListener(\"click\", toggleModal);\n\nfunction toggleModal() {\n\tconst modal = document.querySelector(\".modal\");\n\tmodal.classList.toggle(\"hidden\");\n}\n\n// menu.js\nconst menuBtn = document.getElementById(\"menu-btn\");\nmenuBtn.addEventListener(\"click\", displayMenu);\nfunction displayMenu() {\n\tconsole.log(mainContent.children);\n\t// mainContent.appendChild(buildMenu());\n}\n\n\n//# sourceURL=webpack://restaurant-js-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildMenu: () => (/* binding */ buildMenu)\n/* harmony export */ });\n// <div class=\"menu-art\"></div>\n// <div class=\"menu-text\">\n// <a href=\"#\" class=\"menu-link\">dinner</a>\n// <a href=\"#\" class=\"menu-link\">wine</a>\n// <h1 class=\"brand\">AE</h1>\n// </div>\n\nfunction buildMenu() {\n\tconst menuDiv = document.createElement(\"div\");\n\tmenuDiv.classList = \"menu dynamic\";\n\n\tconst art = document.createElement(\"div\");\n\tconst text = document.createElement(\"div\");\n\tart.classList = \"menu-art\";\n\ttext.classList = \"menu-text\";\n\n\tmenuDiv.appendChild;\n\n\treturn { menuDiv };\n}\n\n\n//# sourceURL=webpack://restaurant-js-page/./src/menu.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;