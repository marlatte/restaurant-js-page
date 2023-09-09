/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("console.log(\"Hey there\");\n\nconst sidebar = document.querySelector(\".sidebar\");\nconst openSidebar = document.getElementById(\"open-sidebar\");\nconst closeSidebar = document.getElementById(\"close-sidebar\");\n\nfunction toggleNav() {\n\tsidebar.classList.toggle(\"open\");\n}\n\nopenSidebar.addEventListener(\"click\", toggleNav);\ncloseSidebar.addEventListener(\"click\", toggleNav);\n\n// events.js\nconst inquireBtns = document.querySelectorAll(\".inquire\");\nconst closeModal = document.getElementById(\"close-modal\");\nconst form = document.querySelector(\"form\");\n\nform.addEventListener(\"submit\", handleFormSubmit);\nfunction handleFormSubmit(e) {\n\te.preventDefault();\n\tconsole.log(\"Form submitted.\");\n}\n\ninquireBtns.forEach((button) => {\n\tbutton.addEventListener(\"click\", toggleModal);\n});\n\ncloseModal.addEventListener(\"click\", toggleModal);\n\nfunction toggleModal() {\n\tconst modal = document.querySelector(\".modal\");\n\tmodal.classList.toggle(\"hidden\");\n}\n\n\n//# sourceURL=webpack://restaurant-js-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;