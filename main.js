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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildHome: () => (/* binding */ buildHome)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nfunction buildHome() {\n\tconst heroText = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"div\", { classList: \"hero-text\" }, [\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"h1\", { classList: \"brand\", textContent: \"AE\" }),\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"div\", { classList: \"reservations\" }, [\n\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"a\", {\n\t\t\t\thref: \"https://resy.com/cities/ny/asset\",\n\t\t\t\ttextContent: \"reservations\",\n\t\t\t}),\n\t\t]),\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"div\", { classList: \"scroll-down\" }, [\n\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"a\", { href: \"#hours\" }, [\n\t\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"i\", {\n\t\t\t\t\tclassList: \"fa fa-angle-down\",\n\t\t\t\t}),\n\t\t\t]),\n\t\t]),\n\t]);\n\n\tconst lanterns = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"div\", { classList: \"lanterns\" });\n\tfor (let i = 0; i < 3; i++) {\n\t\tlanterns.children.push(\n\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"div\", { classList: \"lantern\" }, [\n\t\t\t\t...[\"top\", \"body\", \"bottom\"].map((text) => {\n\t\t\t\t\treturn (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"div\", {\n\t\t\t\t\t\tclassList: text,\n\t\t\t\t\t});\n\t\t\t\t}),\n\t\t\t])\n\t\t);\n\t}\n\n\tconst hoursDetails = [\n\t\t{\n\t\t\tschedule: \"operating hours\",\n\t\t\thoursText: {\n\t\t\t\t\"monday-friday\": \"4pm-11pm\",\n\t\t\t\tsaturday: \"2pm-2am\",\n\t\t\t\tsunday: \"2pm-10pm\",\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\tschedule: \"dinner hours\",\n\t\t\thoursText: {\n\t\t\t\t\"monday-thursday\": \"5pm-10pm\",\n\t\t\t\tfriday: \"5pm-11pm\",\n\t\t\t\tsaturday: \"2pm-11pm\",\n\t\t\t\tsunday: \"2pm-9pm\",\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\tschedule: \"happy hour\",\n\t\t\thoursText: {\n\t\t\t\t\"monday-friday\": \"4pm-6pm\",\n\t\t\t\tsaturday: \"10pm-12am\",\n\t\t\t},\n\t\t},\n\t];\n\n\tconst hoursDivs = hoursDetails.map((hoursObject) => {\n\t\treturn (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\n\t\t\t\"div\",\n\t\t\t{\n\t\t\t\tclassList: hoursObject.schedule.split(\" \").join(\"-\"),\n\t\t\t},\n\t\t\t[\n\t\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"h2\", { textContent: hoursObject.schedule + \":\" }),\n\t\t\t\t...Object.entries(hoursObject.hoursText).map((entry) => {\n\t\t\t\t\treturn (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"p\", {\n\t\t\t\t\t\ttextContent: `${entry[0]}: ${entry[1]} `,\n\t\t\t\t\t});\n\t\t\t\t}),\n\t\t\t]\n\t\t);\n\t});\n\n\tconst homeDiv = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"div\", { classList: \"home dynamic\" }, [\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"section\", { classList: \"hero\" }, [\n\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"div\", { classList: \"art\" }),\n\t\t\theroText,\n\t\t\tlanterns,\n\t\t]),\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"section\", { classList: \"hours-container\" }, [\n\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"div\", { classList: \"hours\", id: \"hours\" }, hoursDivs),\n\t\t]),\n\t]);\n\treturn (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.htmlFactory)(homeDiv);\n}\n\n\n//# sourceURL=webpack://restaurant-js-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   elFactory: () => (/* binding */ elFactory),\n/* harmony export */   htmlFactory: () => (/* binding */ htmlFactory)\n/* harmony export */ });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\n\nconsole.log(\"Hey there\");\n\nconst mainContent = document.getElementById(\"content\");\nconst sidebar = document.querySelector(\".sidebar\");\nconst openSidebar = document.getElementById(\"open-sidebar\");\nconst closeSidebar = document.getElementById(\"close-sidebar\");\n\nfunction toggleNav() {\n\tsidebar.classList.toggle(\"open\");\n}\n\nopenSidebar.addEventListener(\"click\", toggleNav);\ncloseSidebar.addEventListener(\"click\", toggleNav);\n\n// home.js\ndocument.getElementById(\"home-btn\").addEventListener(\"click\", () => {\n\tmainContent.textContent = \"\";\n\tmainContent.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__.buildHome)());\n});\n\n// events.js\nconst inquireBtns = document.querySelectorAll(\".inquire\");\nconst closeModal = document.getElementById(\"close-modal\");\nconst form = document.querySelector(\"form\");\n\nform.addEventListener(\"submit\", handleFormSubmit);\nfunction handleFormSubmit(e) {\n\te.preventDefault();\n\tconsole.log(\"Form submitted.\");\n\ttoggleModal();\n}\n\ninquireBtns.forEach((button) => {\n\tbutton.addEventListener(\"click\", toggleModal);\n});\n\ncloseModal.addEventListener(\"click\", toggleModal);\n\nfunction toggleModal() {\n\tconst modal = document.querySelector(\".modal\");\n\tmodal.classList.toggle(\"hidden\");\n}\n\n// menu.js\ndocument.getElementById(\"menu-btn\").addEventListener(\"click\", () => {\n\tmainContent.textContent = \"\";\n\tmainContent.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.buildMenu)());\n});\n\n////////////// EXPORTS ///////////////\nconst elFactory = (type, attributes, children = []) => {\n\treturn { type, attributes, children };\n};\n\nfunction htmlFactory(obj) {\n\tconst el = document.createElement(obj.type);\n\tconst attributes = obj.attributes;\n\n\tfor (let key in attributes) {\n\t\tel[key] = attributes[key];\n\t}\n\n\tobj.children?.forEach((child) => {\n\t\tel.appendChild(htmlFactory(child));\n\t});\n\n\treturn el;\n}\n\n\n//# sourceURL=webpack://restaurant-js-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildMenu: () => (/* binding */ buildMenu)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nfunction buildMenu() {\n\tconst dinnerLink =\n\t\t\"https://www.assetrestaurant.com/_files/ugd/54a4cd_3a7a0a55ae744fceaec853bc0b19c7b2.pdf\";\n\tconst wineLink =\n\t\t\"https://www.assetrestaurant.com/_files/ugd/54a4cd_381e50de69ac4b3dae5f805513c334d6.pdf\";\n\n\treturn (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.htmlFactory)(\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"div\", { classList: \"menu dynamic\" }, [\n\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"div\", { classList: \"menu-art\" }),\n\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"div\", { classList: \"menu-text\" }, [\n\t\t\t\t...[\"dinner\", \"wine\"].map((text) => {\n\t\t\t\t\treturn (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"a\", {\n\t\t\t\t\t\ttextContent: text,\n\t\t\t\t\t\tclassList: \"menu-link\",\n\t\t\t\t\t\thref: text === \"dinner\" ? dinnerLink : wineLink,\n\t\t\t\t\t\ttarget: \"_blank\",\n\t\t\t\t\t});\n\t\t\t\t}),\n\t\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"h1\", { classList: \"brand\", textContent: \"AE\" }),\n\t\t\t]),\n\t\t])\n\t);\n}\n\n\n//# sourceURL=webpack://restaurant-js-page/./src/menu.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;