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

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildConstants: () => (/* binding */ buildConstants)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nfunction buildConstants() {\n\t// returns div.sidebar, header, main#changing-content, footer\n\n\tconst footer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"footer\", {}, [\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"div\", { classList: \"contact\" }, [\n\t\t\tcreateSocialIcons(),\n\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"p\", { classList: \"address\", textContent: \"\" }),\n\t\t]),\n\t]);\n\t// Add \"box\" to classList of div.socials\n}\n\nfunction createSocialIcons() {\n\t// returns div.socials with 4 links, each containing an <i>\n}\n\n\n//# sourceURL=webpack://restaurant-js-page/./src/constants.js?");

/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildEvents: () => (/* binding */ buildEvents),\n/* harmony export */   listenForClicks: () => (/* binding */ listenForClicks)\n/* harmony export */ });\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.js */ \"./src/form.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\nfunction createTextChildren() {\n\tconst textChildren = [\n\t\t[\"h1\", \"Private Dining & Events\"],\n\t\t[\"h2\", \"Special Events\"],\n\t\t[\n\t\t\t\"p\",\n\t\t\t\"With two levels of dining and a bar on each floor, the restaurant offers seating for up 220 guests within approximately 5,000 square-footage. Upon entry into the restaurant through a glass entryway is a 24- seat bar for guests to enjoy a drink, snack, or full dinner.\",\n\t\t],\n\t\t[\n\t\t\t\"p\",\n\t\t\t\"There are multiple areas of the restaurant that can host private and semi-private events as the restaurant boasts two semi-private rooms that both seat 20 guests, as well as the upstairs Mezzanine level, which seats up to 50 and 8 at the bar. Seating will be available outdoors seasonally.\",\n\t\t],\n\t\t[\"h2\", \"Cocktail Parties, Receptions, Buyouts\"],\n\t\t[\n\t\t\t\"p\",\n\t\t\t\"We are pleased to offer our services for your next occasions. Book our entire restaurant for a special evening, catered just for you and your guests. Let us bring the ASSET experience to your wedding, birthdays and other large events\",\n\t\t],\n\t\t[\"p\", \"Inquire below or contact us at:\"],\n\t].map((entry) => {\n\t\treturn (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)(entry[0], { textContent: entry[1] });\n\t});\n\n\ttextChildren[textChildren.length - 1].children.push(\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)(\"a\", {\n\t\t\thref: \"tel:+1-212-517-1987\",\n\t\t\ttextContent: \"+1 212 517 1987\",\n\t\t\tclassList: \"underline\",\n\t\t})\n\t);\n\n\ttextChildren.push(\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)(\"div\", { classList: \"call-to-action\" }, [\n\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)(\"button\", {\n\t\t\t\tclassList: \"inquire\",\n\t\t\t\ttype: \"button\",\n\t\t\t\ttextContent: \"Inquire Now\",\n\t\t\t}),\n\t\t])\n\t);\n\treturn textChildren;\n}\n\nfunction createPhotos() {\n\treturn [\n\t\t{\n\t\t\tsrc: \"https://static.wixstatic.com/media/bbf025b2a19440d197cbef666fffbc8e.jpg/v1/fill/w_999,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bbf025b2a19440d197cbef666fffbc8e.jpg\",\n\t\t\talt: \"People drinking at a bar\",\n\t\t},\n\t\t{\n\t\t\tsrc: \"https://static.wixstatic.com/media/54a4cd_a265a2f258344c159c3d06fcebd940ee~mv2.jpg/v1/fill/w_666,h_600,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_a265a2f258344c159c3d06fcebd940ee~mv2.jpg\",\n\t\t\talt: \"A glass of wine and plate of food\",\n\t\t},\n\t\t{\n\t\t\tsrc: \"https://static.wixstatic.com/media/54a4cd_95184a86aeee42bc8f2b65d4148acddf~mv2_d_1950_1308_s_2.jpg/v1/fill/w_666,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_95184a86aeee42bc8f2b65d4148acddf~mv2_d_1950_1308_s_2.jpg\",\n\t\t\talt: \"A DJ booth\",\n\t\t},\n\t\t{\n\t\t\tsrc: \"https://static.wixstatic.com/media/54a4cd_b2e536abf0ea436d90557c5e528a1ec0~mv2.png/v1/fill/w_999,h_600,al_l,q_90,usm_0.66_1.00_0.01,enc_auto/54a4cd_b2e536abf0ea436d90557c5e528a1ec0~mv2.png\",\n\t\t\talt: \"A bar full of people\",\n\t\t},\n\t\t{\n\t\t\tsrc: \"https://static.wixstatic.com/media/54a4cd_66643885bf2e44d7a5f9396cd26f6e97~mv2.jpg/v1/fill/w_833,h_550,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_66643885bf2e44d7a5f9396cd26f6e97~mv2.jpg\",\n\t\t\talt: \"An empty bar, lit from underneath\",\n\t\t},\n\t\t{\n\t\t\tsrc: \"https://static.wixstatic.com/media/54a4cd_5c02480400154bbebd0758eb2f8d7b8d~mv2_d_1600_1200_s_2.jpg/v1/fill/w_833,h_550,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_5c02480400154bbebd0758eb2f8d7b8d~mv2_d_1600_1200_s_2.jpg\",\n\t\t\talt: \"Restaurant staff\",\n\t\t},\n\t]\n\t\t.map((imgObj, index) => {\n\t\t\tconst [src, alt] = [imgObj.src, imgObj.alt];\n\t\t\treturn (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)(\"div\", { classList: \"image-container\" }, [\n\t\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)(\"img\", { src, alt }),\n\t\t\t]);\n\t\t})\n\t\t.reduce((acc, currentImg, index) => {\n\t\t\tif (!(index & 1)) {\n\t\t\t\t// If even, create tier with child img\n\t\t\t\tacc.push((0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)(\"div\", { classList: \"tier\" }, [currentImg]));\n\t\t\t\treturn acc;\n\t\t\t} else {\n\t\t\t\t// If odd, add img child to previous tier\n\t\t\t\tacc[acc.length - 1].children.push(currentImg);\n\t\t\t\treturn acc;\n\t\t\t}\n\t\t}, []);\n}\n\nfunction buildEvents() {\n\tconst [eventsContent, photos, callToAction, modalElement] = [\n\t\t\"content\",\n\t\t\"photos\",\n\t\t\"call-to-action\",\n\t\t\"modal close-modal hidden\",\n\t].map((el) => {\n\t\treturn (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)(\"article\", { classList: el });\n\t});\n\n\teventsContent.children.push(\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)(\"div\", { classList: \"art\" }),\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)(\"div\", { classList: \"text\" }, createTextChildren())\n\t);\n\n\tphotos.children.push(...createPhotos());\n\n\tcallToAction.children.push(\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)(\"p\", { textContent: \"Let us host your next event\" }),\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)(\"button\", {\n\t\t\tclassList: \"inquire\",\n\t\t\ttype: \"button\",\n\t\t\ttextContent: \"Inquire Now\",\n\t\t})\n\t);\n\n\tmodalElement.children.push((0,_form_js__WEBPACK_IMPORTED_MODULE_0__.createForm)());\n\n\treturn (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.htmlFactory)(\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)(\"div\", { classList: \"events dynamic\" }, [\n\t\t\teventsContent,\n\t\t\tphotos,\n\t\t\tcallToAction,\n\t\t\tmodalElement,\n\t\t])\n\t);\n}\n\nfunction listenForClicks() {\n\tconst modal = document.querySelector(\".modal\");\n\n\tconst inquireBtns = document.querySelectorAll(\".inquire\");\n\tinquireBtns.forEach((button) => {\n\t\tbutton.addEventListener(\"click\", () => {\n\t\t\tmodal.classList.remove(\"hidden\");\n\t\t});\n\t});\n\n\tconst closeModalBtns = document.querySelectorAll(\".close-modal\");\n\tcloseModalBtns.forEach((closer) => {\n\t\tcloser.addEventListener(\"click\", (e) => {\n\t\t\tif (e.target.classList.value.includes(\"close-modal\")) {\n\t\t\t\tmodal.classList.add(\"hidden\");\n\t\t\t}\n\t\t});\n\t});\n\n\tconst form = document.querySelector(\"form\");\n\tform.addEventListener(\"submit\", (e) => {\n\t\te.preventDefault();\n\t\tconsole.log(\"Form submitted.\");\n\t\tmodal.classList.add(\"hidden\");\n\t});\n}\n\n\n//# sourceURL=webpack://restaurant-js-page/./src/event.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createForm: () => (/* binding */ createForm)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nfunction formRowFactory(formDataArrays) {\n\treturn formDataArrays\n\t\t.map((pair) => {\n\t\t\tconst kebab = pair[0].toLowerCase().split(\" \").join(\"-\");\n\t\t\treturn (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"div\", { classList: \"form-item\" }, [\n\t\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"label\", {\n\t\t\t\t\thtmlFor: kebab,\n\t\t\t\t\ttextContent: pair[0] + \":\",\n\t\t\t\t}),\n\t\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"input\", {\n\t\t\t\t\tid: kebab,\n\t\t\t\t\ttype: pair[1],\n\t\t\t\t\tautocomplete: pair[2],\n\t\t\t\t}),\n\t\t\t]);\n\t\t})\n\t\t.reduce((acc, currentItem, index) => {\n\t\t\tif (!(index & 1)) {\n\t\t\t\t// If even, create row with currentItem as a child\n\t\t\t\tacc.push(\n\t\t\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"div\", { classList: \"form-row\" }, [currentItem])\n\t\t\t\t);\n\t\t\t\treturn acc;\n\t\t\t} else {\n\t\t\t\t// If odd, add currentItem to previous row\n\t\t\t\tacc[acc.length - 1].children.push(currentItem);\n\t\t\t\treturn acc;\n\t\t\t}\n\t\t}, []);\n}\n\nfunction createDetailSection() {\n\t// First form-item\n\tconst eventType = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"div\", { classList: \"form-item\" }, [\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"label\", {\n\t\t\thtmlFor: \"event-type\",\n\t\t\ttextContent: \"Type of Event:\",\n\t\t}),\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"input\", {\n\t\t\tid: \"event-type\",\n\t\t\ttype: \"text\",\n\t\t\tplaceholder: \"Birthday, Business Dinner, etc.\",\n\t\t\tautocomplete: \"off\",\n\t\t}),\n\t]);\n\n\t// Multiple choice radio buttons\n\tconst location = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"fieldset\", { classList: \"location\" }, [\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"legend\", { textContent: \"Location:\" }),\n\t\t...[\n\t\t\t[\"asset\", \"329 Columbus Ave.\"],\n\t\t\t[\"tessa\", \"349 Amsterdam Ave.\"],\n\t\t].map((pair) => {\n\t\t\treturn (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"div\", { classList: \"form-item\" }, [\n\t\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"label\", {}, [\n\t\t\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"input\", {\n\t\t\t\t\t\tname: \"location\",\n\t\t\t\t\t\ttype: \"radio\",\n\t\t\t\t\t\tvalue: pair[0],\n\t\t\t\t\t}),\n\t\t\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"span\", {\n\t\t\t\t\t\ttextContent: pair[0].toUpperCase() + \" - \" + pair[1],\n\t\t\t\t\t}),\n\t\t\t\t]),\n\t\t\t]);\n\t\t}),\n\t]);\n\n\t// Last 2 rows of this section\n\tconst byTheNumbers = formRowFactory([\n\t\t[\"Party Size\", \"number\", \"off\"],\n\t\t[\"Date\", \"date\", \"off\"],\n\t\t[\"Start Time\", \"time\", \"off\"],\n\t\t[\"End Time\", \"time\", \"off\"],\n\t]);\n\n\treturn [eventType, location, ...byTheNumbers];\n}\n\nfunction createExtrasSection() {\n\t// 1 form-item with textarea and 1 with select\n\tconst [textAreaItem, selectItem] = [\n\t\t[\"extra-info\", \"textarea\"],\n\t\t[\"referral-source\", \"select\"],\n\t].map((pair) => {\n\t\treturn (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"div\", { classList: \"form-item\" }, [\n\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"label\", { htmlFor: pair[0] }),\n\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(pair[1], { name: pair[0], id: pair[0] }),\n\t\t]);\n\t});\n\n\t// Add text content to each <label>\n\ttextAreaItem.children[0].attributes.textContent =\n\t\t\"Is there any additional information you would like to add?\";\n\tselectItem.children[0].attributes.textContent =\n\t\t\"How did you hear about us?\";\n\n\t// Add attributes to <textarea>\n\ttextAreaItem.children[1].attributes.rows = \"6\";\n\ttextAreaItem.children[1].attributes.placeholder =\n\t\t\"Surprises, Dietary Needs, etc.\";\n\n\t// Add 9 <option>'s to <select>\n\tconst optionsArray = [\n\t\t\"EventUp\",\n\t\t\"Instagram\",\n\t\t\"Facebook\",\n\t\t\"Tripleseat Restaurants\",\n\t\t\"Search Engine\",\n\t\t\"Email\",\n\t\t\"Other\",\n\t\t\"Website\",\n\t].map((text) => {\n\t\treturn (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"option\", {\n\t\t\tvalue: text.split(\" \")[0].toLowerCase(),\n\t\t\ttextContent: text,\n\t\t});\n\t});\n\n\tselectItem.children[1].children.push(\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"option\", {\n\t\t\tvalue: \"\",\n\t\t\ttextContent: \"Select an option\",\n\t\t\tselected: true,\n\t\t}),\n\t\t...optionsArray\n\t);\n\n\treturn [textAreaItem, selectItem];\n}\n\nfunction createForm() {\n\t// Create sections containers for the complicated parts\n\tconst [formContact, formDetails, formExtras] = [\n\t\t\"form-contact\",\n\t\t\"form-details\",\n\t\t\"form-extras\",\n\t].map((el) => {\n\t\treturn (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"section\", { classList: el });\n\t});\n\n\tformContact.children.push(\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"h4\", { textContent: \"Contact\" }),\n\t\t...formRowFactory([\n\t\t\t[\"First Name\", \"text\", \"given-name\"],\n\t\t\t[\"Last Name\", \"text\", \"family-name\"],\n\t\t\t[\"Email\", \"email\", \"email\"],\n\t\t\t[\"Phone\", \"tel\", \"tel\"],\n\t\t\t[\"Company\", \"text\", \"organization\"],\n\t\t])\n\t);\n\n\tformDetails.children.push(\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"h4\", { textContent: \"Event Details\" }),\n\t\t...createDetailSection()\n\t);\n\n\tformExtras.children.push(\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"h4\", { textContent: \"Extras\" }),\n\t\t...createExtrasSection()\n\t);\n\n\t// Create form element and overarching structure\n\tconst formElement = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"form\", {}, [\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"section\", { classList: \"form-header\" }, [\n\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"h3\", { textContent: \"Let's get some info!\" }),\n\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"button\", {\n\t\t\t\ttype: \"button\",\n\t\t\t\tclassList: \"close-modal close-btn\",\n\t\t\t\tid: \"close-modal\",\n\t\t\t\ttextContent: \"×\",\n\t\t\t}),\n\t\t]),\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"div\", { classList: \"form-content\" }, [\n\t\t\tformContact,\n\t\t\tformDetails,\n\t\t\tformExtras,\n\t\t]),\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"button\", { type: \"submit\", textContent: \"Submit\" }),\n\t]);\n\treturn formElement;\n}\n\n\n//# sourceURL=webpack://restaurant-js-page/./src/form.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   elFactory: () => (/* binding */ elFactory),\n/* harmony export */   htmlFactory: () => (/* binding */ htmlFactory)\n/* harmony export */ });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.js */ \"./src/event.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ \"./src/constants.js\");\n\n\n\n\n\nconst allContent = document.getElementById(\"all-content\");\n// allContent.textContent = \"\";\n// allContent.appendChild(buildConstants());\n\nconst changingContent = document.getElementById(\"changing-content\");\nconst sidebar = document.querySelector(\".sidebar\");\n\ndocument.querySelectorAll(\".sidebar-toggler\").forEach((button) => {\n\tbutton.addEventListener(\"click\", () => {\n\t\tsidebar.classList.toggle(\"open\");\n\t});\n});\n\nfunction handleBuildClick(tabChoice) {\n\tchangingContent.textContent = \"\";\n\tchangingContent.appendChild(\n\t\ttabChoice === \"home-btn\"\n\t\t\t? (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.buildHome)()\n\t\t\t: tabChoice === \"events-btn\"\n\t\t\t? (0,_event_js__WEBPACK_IMPORTED_MODULE_2__.buildEvents)()\n\t\t\t: (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.buildMenu)()\n\t);\n\tsidebar.classList = \"sidebar\";\n\tif (tabChoice === \"events-btn\") {\n\t\t(0,_event_js__WEBPACK_IMPORTED_MODULE_2__.listenForClicks)();\n\t}\n}\n\ndocument.querySelectorAll(\".nav-btn\").forEach((button) => {\n\tbutton.addEventListener(\"click\", (e) => {\n\t\thandleBuildClick(e.target.id);\n\t});\n});\n\n////////////// EXPORTS ///////////////\nconst elFactory = (type, attributes, children = []) => {\n\treturn { type, attributes, children };\n};\n\nfunction htmlFactory(obj) {\n\tconst el = document.createElement(obj.type);\n\tconst attributes = obj.attributes;\n\n\tfor (let key in attributes) {\n\t\tel[key] = attributes[key];\n\t}\n\n\tobj.children?.forEach((child) => {\n\t\tel.appendChild(htmlFactory(child));\n\t});\n\n\treturn el;\n}\n\n\n//# sourceURL=webpack://restaurant-js-page/./src/index.js?");

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