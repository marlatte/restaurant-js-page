/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/about.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/about.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.about {
	flex: 1;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
}

.about p {
	display: flex;
	justify-content: center;
	gap: 6px;

	font-size: 25px;
}

.map-container {
	--string-color: silver;
	--shadow-color: #661919;
	--shadow-color-string: #d01616;

	width: min(600px, 100%);
	padding: 3px;
	display: flex;
	flex-direction: column;
}

.map-tack {
	position: relative;
	bottom: -7px;
	width: 10px;
	height: 10px;
	align-self: center;

	border-radius: 10px;
	background-color: #0d0d0d;
}

.map-string {
	position: relative;
	bottom: -2px;
	height: 50px;
	z-index: -1;

	display: flex;
	padding: 0 15px;

	& > * {
		flex: 1;
	}
}

.map-string .left {
	background-image: linear-gradient(
		to bottom right,
		transparent 0 49%,
		var(--string-color) 49% 51%,
		var(--shadow-color-string) 51% 52%,
		transparent 54% 100%
	);
}

.map-string .right {
	background-image: linear-gradient(
		to bottom left,
		transparent 0 49%,
		var(--string-color) 49% 51%,
		var(--shadow-color-string) 51% 52%,
		transparent 54% 100%
	);
}

.map-wood {
	height: 25px;
	background-image: radial-gradient(circle at center, #ff7c4026, #00000033),
		url(https://images.unsplash.com/photo-1625496235025-d783abf061c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80);
	background-size: cover;
}

.map-top {
	background-position: center;
	border-radius: 10px 10px 0 0;
	box-shadow: 8px 3px 5px var(--shadow-color);
}

.map-bottom {
	background-position: top;
	border-radius: 0 0 10px 10px;
	box-shadow: 8px 3px 5px var(--shadow-color);
}

.map-canvas {
	background-color: #fff6e6;
	box-shadow: 6px 3px 5px 2px var(--shadow-color);
}

iframe {
	border: none;
	border-radius: 10px;
}
`, "",{"version":3,"sources":["webpack://./src/styles/about.css"],"names":[],"mappings":"AAAA;CACC,OAAO;CACP,YAAY;;CAEZ,aAAa;CACb,sBAAsB;CACtB,6BAA6B;CAC7B,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,QAAQ;;CAER,eAAe;AAChB;;AAEA;CACC,sBAAsB;CACtB,uBAAuB;CACvB,8BAA8B;;CAE9B,uBAAuB;CACvB,YAAY;CACZ,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,WAAW;CACX,YAAY;CACZ,kBAAkB;;CAElB,mBAAmB;CACnB,yBAAyB;AAC1B;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,YAAY;CACZ,WAAW;;CAEX,aAAa;CACb,eAAe;;CAEf;EACC,OAAO;CACR;AACD;;AAEA;CACC;;;;;;EAMC;AACF;;AAEA;CACC;;;;;;EAMC;AACF;;AAEA;CACC,YAAY;CACZ;6KAC4K;CAC5K,sBAAsB;AACvB;;AAEA;CACC,2BAA2B;CAC3B,4BAA4B;CAC5B,2CAA2C;AAC5C;;AAEA;CACC,wBAAwB;CACxB,4BAA4B;CAC5B,2CAA2C;AAC5C;;AAEA;CACC,yBAAyB;CACzB,+CAA+C;AAChD;;AAEA;CACC,YAAY;CACZ,mBAAmB;AACpB","sourcesContent":[".about {\n\tflex: 1;\n\theight: 100%;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n}\n\n.about p {\n\tdisplay: flex;\n\tjustify-content: center;\n\tgap: 6px;\n\n\tfont-size: 25px;\n}\n\n.map-container {\n\t--string-color: silver;\n\t--shadow-color: #661919;\n\t--shadow-color-string: #d01616;\n\n\twidth: min(600px, 100%);\n\tpadding: 3px;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.map-tack {\n\tposition: relative;\n\tbottom: -7px;\n\twidth: 10px;\n\theight: 10px;\n\talign-self: center;\n\n\tborder-radius: 10px;\n\tbackground-color: #0d0d0d;\n}\n\n.map-string {\n\tposition: relative;\n\tbottom: -2px;\n\theight: 50px;\n\tz-index: -1;\n\n\tdisplay: flex;\n\tpadding: 0 15px;\n\n\t& > * {\n\t\tflex: 1;\n\t}\n}\n\n.map-string .left {\n\tbackground-image: linear-gradient(\n\t\tto bottom right,\n\t\ttransparent 0 49%,\n\t\tvar(--string-color) 49% 51%,\n\t\tvar(--shadow-color-string) 51% 52%,\n\t\ttransparent 54% 100%\n\t);\n}\n\n.map-string .right {\n\tbackground-image: linear-gradient(\n\t\tto bottom left,\n\t\ttransparent 0 49%,\n\t\tvar(--string-color) 49% 51%,\n\t\tvar(--shadow-color-string) 51% 52%,\n\t\ttransparent 54% 100%\n\t);\n}\n\n.map-wood {\n\theight: 25px;\n\tbackground-image: radial-gradient(circle at center, #ff7c4026, #00000033),\n\t\turl(https://images.unsplash.com/photo-1625496235025-d783abf061c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80);\n\tbackground-size: cover;\n}\n\n.map-top {\n\tbackground-position: center;\n\tborder-radius: 10px 10px 0 0;\n\tbox-shadow: 8px 3px 5px var(--shadow-color);\n}\n\n.map-bottom {\n\tbackground-position: top;\n\tborder-radius: 0 0 10px 10px;\n\tbox-shadow: 8px 3px 5px var(--shadow-color);\n}\n\n.map-canvas {\n\tbackground-color: #fff6e6;\n\tbox-shadow: 6px 3px 5px 2px var(--shadow-color);\n}\n\niframe {\n\tborder: none;\n\tborder-radius: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/constants.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/constants.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#changing-content {
	flex: 1;
}

/* ---------------     Sidebar     --------------- */

.sidebar {
	position: fixed;
	z-index: 1;
	height: 100%;
	width: 0px;
	padding: 20px 0;

	display: flex;
	flex-direction: column;
	overflow-x: hidden;

	background-color: var(--bg-main);
	font-size: 40px;
	box-shadow: 0px 0px 7px var(--accent-main-dark);

	transition: 0.5s;

	&.open {
		width: 300px;
		padding: 20px;
	}

	#close-sidebar {
		align-self: end;
	}

	@media (min-width: 700px) {
		width: 100%;
		position: static;

		box-shadow: 0px 0px 5px var(--accent-main-dark);
		border: none;

		&.open {
			width: 100%;
		}

		#close-sidebar {
			display: none;
		}
	}
}

.close-btn {
	--font-size: 50px;

	font-size: var(--font-size);
	line-height: calc(var(--font-size) * 0.6);
}

nav {
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 50px;

	& button {
		text-align: left;
		margin-left: 22px;
	}

	& button:hover {
		color: var(--text-h1);
	}

	@media (min-width: 700px) {
		flex-direction: row;
		justify-content: center;
	}
}

header {
	padding-right: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	box-shadow: 0px 0px 5px var(--accent-main-dark);
	font-size: 24px;

	#open-sidebar {
		padding: 15px;
		background-color: black;
	}

	& .socials {
		display: flex;
	}

	@media (min-width: 700px) {
		display: none;
	}
}

/* ---------------     /Sidebar     --------------- */

/* ---------------     Main     --------------- */

#changing-content {
	margin-bottom: calc(var(--footer-height) * 2);

	display: flex;
	flex-direction: column;
}

/* ---------------     /Main     --------------- */

/* ---------------     Footer     --------------- */

footer {
	position: fixed;
	bottom: 0;
	min-height: var(--footer-height);
	width: 100%;
	padding: 10px 20px;

	display: flex;
	flex-direction: column;
	gap: 10px;

	box-shadow: 0px 0px 5px var(--accent-main-dark);
	background-color: var(--bg-main);

	& > * {
		flex: 1;
	}

	& .socials {
		display: none;
	}

	& .author {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;

		text-align: center;
		font-size: 20px;
		color: var(--text-strong);
	}

	& .contact-container {
		display: flex;
		flex-direction: column;
		align-items: end;
	}

	& #contact-btn {
		padding: 5px 10px;
		border: 1px solid currentColor;
		border-radius: 5px;

		&:hover {
			background-color: #fff;
			color: var(--bg-main);
		}
	}

	@media (min-width: 700px) {
		flex-direction: row;
		align-items: center;

		& .socials {
			display: flex;
		}
	}
}

.fa.fa-github {
	color: currentColor;
	font-size: 30px;

	&:hover {
		transition: transform 0.4s ease-in-out;
		transform: rotate(-360deg) scale(1.3);
	}
}
/* ---------------     /Footer     --------------- */
`, "",{"version":3,"sources":["webpack://./src/styles/constants.css"],"names":[],"mappings":"AAAA;CACC,OAAO;AACR;;AAEA,oDAAoD;;AAEpD;CACC,eAAe;CACf,UAAU;CACV,YAAY;CACZ,UAAU;CACV,eAAe;;CAEf,aAAa;CACb,sBAAsB;CACtB,kBAAkB;;CAElB,gCAAgC;CAChC,eAAe;CACf,+CAA+C;;CAE/C,gBAAgB;;CAEhB;EACC,YAAY;EACZ,aAAa;CACd;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,WAAW;EACX,gBAAgB;;EAEhB,+CAA+C;EAC/C,YAAY;;EAEZ;GACC,WAAW;EACZ;;EAEA;GACC,aAAa;EACd;CACD;AACD;;AAEA;CACC,iBAAiB;;CAEjB,2BAA2B;CAC3B,yCAAyC;AAC1C;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,OAAO;CACP,SAAS;;CAET;EACC,gBAAgB;EAChB,iBAAiB;CAClB;;CAEA;EACC,qBAAqB;CACtB;;CAEA;EACC,mBAAmB;EACnB,uBAAuB;CACxB;AACD;;AAEA;CACC,mBAAmB;CACnB,aAAa;CACb,mBAAmB;CACnB,8BAA8B;;CAE9B,+CAA+C;CAC/C,eAAe;;CAEf;EACC,aAAa;EACb,uBAAuB;CACxB;;CAEA;EACC,aAAa;CACd;;CAEA;EACC,aAAa;CACd;AACD;;AAEA,qDAAqD;;AAErD,iDAAiD;;AAEjD;CACC,6CAA6C;;CAE7C,aAAa;CACb,sBAAsB;AACvB;;AAEA,kDAAkD;;AAElD,mDAAmD;;AAEnD;CACC,eAAe;CACf,SAAS;CACT,gCAAgC;CAChC,WAAW;CACX,kBAAkB;;CAElB,aAAa;CACb,sBAAsB;CACtB,SAAS;;CAET,+CAA+C;CAC/C,gCAAgC;;CAEhC;EACC,OAAO;CACR;;CAEA;EACC,aAAa;CACd;;CAEA;EACC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;;EAET,kBAAkB;EAClB,eAAe;EACf,yBAAyB;CAC1B;;CAEA;EACC,aAAa;EACb,sBAAsB;EACtB,gBAAgB;CACjB;;CAEA;EACC,iBAAiB;EACjB,8BAA8B;EAC9B,kBAAkB;;EAElB;GACC,sBAAsB;GACtB,qBAAqB;EACtB;CACD;;CAEA;EACC,mBAAmB;EACnB,mBAAmB;;EAEnB;GACC,aAAa;EACd;CACD;AACD;;AAEA;CACC,mBAAmB;CACnB,eAAe;;CAEf;EACC,sCAAsC;EACtC,qCAAqC;CACtC;AACD;AACA,oDAAoD","sourcesContent":["#changing-content {\n\tflex: 1;\n}\n\n/* ---------------     Sidebar     --------------- */\n\n.sidebar {\n\tposition: fixed;\n\tz-index: 1;\n\theight: 100%;\n\twidth: 0px;\n\tpadding: 20px 0;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\toverflow-x: hidden;\n\n\tbackground-color: var(--bg-main);\n\tfont-size: 40px;\n\tbox-shadow: 0px 0px 7px var(--accent-main-dark);\n\n\ttransition: 0.5s;\n\n\t&.open {\n\t\twidth: 300px;\n\t\tpadding: 20px;\n\t}\n\n\t#close-sidebar {\n\t\talign-self: end;\n\t}\n\n\t@media (min-width: 700px) {\n\t\twidth: 100%;\n\t\tposition: static;\n\n\t\tbox-shadow: 0px 0px 5px var(--accent-main-dark);\n\t\tborder: none;\n\n\t\t&.open {\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t#close-sidebar {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n}\n\n.close-btn {\n\t--font-size: 50px;\n\n\tfont-size: var(--font-size);\n\tline-height: calc(var(--font-size) * 0.6);\n}\n\nnav {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 1;\n\tgap: 50px;\n\n\t& button {\n\t\ttext-align: left;\n\t\tmargin-left: 22px;\n\t}\n\n\t& button:hover {\n\t\tcolor: var(--text-h1);\n\t}\n\n\t@media (min-width: 700px) {\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\t}\n}\n\nheader {\n\tpadding-right: 20px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\n\tbox-shadow: 0px 0px 5px var(--accent-main-dark);\n\tfont-size: 24px;\n\n\t#open-sidebar {\n\t\tpadding: 15px;\n\t\tbackground-color: black;\n\t}\n\n\t& .socials {\n\t\tdisplay: flex;\n\t}\n\n\t@media (min-width: 700px) {\n\t\tdisplay: none;\n\t}\n}\n\n/* ---------------     /Sidebar     --------------- */\n\n/* ---------------     Main     --------------- */\n\n#changing-content {\n\tmargin-bottom: calc(var(--footer-height) * 2);\n\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n/* ---------------     /Main     --------------- */\n\n/* ---------------     Footer     --------------- */\n\nfooter {\n\tposition: fixed;\n\tbottom: 0;\n\tmin-height: var(--footer-height);\n\twidth: 100%;\n\tpadding: 10px 20px;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\n\tbox-shadow: 0px 0px 5px var(--accent-main-dark);\n\tbackground-color: var(--bg-main);\n\n\t& > * {\n\t\tflex: 1;\n\t}\n\n\t& .socials {\n\t\tdisplay: none;\n\t}\n\n\t& .author {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tgap: 10px;\n\n\t\ttext-align: center;\n\t\tfont-size: 20px;\n\t\tcolor: var(--text-strong);\n\t}\n\n\t& .contact-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: end;\n\t}\n\n\t& #contact-btn {\n\t\tpadding: 5px 10px;\n\t\tborder: 1px solid currentColor;\n\t\tborder-radius: 5px;\n\n\t\t&:hover {\n\t\t\tbackground-color: #fff;\n\t\t\tcolor: var(--bg-main);\n\t\t}\n\t}\n\n\t@media (min-width: 700px) {\n\t\tflex-direction: row;\n\t\talign-items: center;\n\n\t\t& .socials {\n\t\t\tdisplay: flex;\n\t\t}\n\t}\n}\n\n.fa.fa-github {\n\tcolor: currentColor;\n\tfont-size: 30px;\n\n\t&:hover {\n\t\ttransition: transform 0.4s ease-in-out;\n\t\ttransform: rotate(-360deg) scale(1.3);\n\t}\n}\n/* ---------------     /Footer     --------------- */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/events.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/events.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.events .content {
	width: 90%;
	margin: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	& .art {
		height: 160px;
		background-position: bottom;
	}

	& .text {
		margin: 20px 0;
		max-width: 65ch;
	}

	& h1 {
		font-size: 30px;
	}

	& h2 {
		margin: 30px 0 16px;
	}

	& p {
		margin-bottom: 20px;
		font-size: 18px;
		line-height: 1.5;
		letter-spacing: 1px;
	}

	& p:nth-last-child(2) {
		width: min(100%, 440px);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 2px;
	}

	@media (min-width: 700px) {
		--art-width: min(300px, 30%);

		height: calc(960px - 8vw);
		width: min(90%, 1100px);

		flex-direction: row-reverse;
		align-items: stretch;
		justify-content: space-between;

		& .art {
			flex-shrink: 0;
			height: 100%;
			background-position: center;
		}

		& .call-to-action {
			align-items: start;
			padding: 40px 0;
		}
	}
}

.photos {
	background-color: black;
}

.tier {
	display: flex;
	flex-direction: column;

	& .image-container {
		flex-grow: 1;
	}

	& img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	@media (min-width: 700px) {
		width: 100%;
		flex-direction: row;
	}
}

.events .call-to-action {
	padding: 90px 0;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;

	& p {
		font-size: 20px;
		margin: 0;
	}

	& button {
		padding: 20px;

		border: 1px solid white;
		border-radius: 5px;

		font-size: 18px;
		text-transform: uppercase;

		transition: all 0.3s;
	}

	& button:hover {
		background-color: #fff;
		color: var(--bg-main);
	}
}

/* ---------------     Modal     --------------- */

.modal {
	position: fixed;
	top: 0;
	z-index: 2;
	height: 100vh;
	width: 100vw;

	display: grid;
	place-content: center;

	background-color: rgba(200, 200, 200, 0.5);
	backdrop-filter: blur(2px);
}

form {
	--form-spacer: 12px;

	max-height: 80vh;
	padding: 12px;
	width: min(90vw, 1000px);

	display: flex;
	flex-direction: column;
	gap: var(--form-spacer);

	background-color: skyblue;
	color: #000;
	border-radius: 15px;
}

.form-header {
	margin: 0;
	padding-left: 2px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.form-content {
	padding: var(--form-spacer);
	display: flex;
	flex-direction: column;
	gap: calc(var(--form-spacer) * 2.5);
	overflow-y: scroll;

	border: 1px solid var(--border-input);
	border-radius: 5px;

	@media (min-width: 800px) {
		flex-direction: row;
		justify-content: space-between;
		overflow-y: auto;
	}
}

.form-content h4 {
	font-size: 20px;
}

.form-contact,
.form-details,
.form-extras {
	display: flex;
	flex-direction: column;
	gap: var(--form-spacer);
}

.form-row {
	display: flex;
	flex-wrap: wrap;
	gap: var(--form-spacer);
}

.form-item {
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: calc(var(--form-spacer) * 0.5);
}

.form-details .form-row .form-item {
	width: 47%;
}

input,
textarea {
	appearance: none;
}

input,
textarea,
select {
	padding: 6px 10px;

	font-size: max(16px, 0.9rem);
	background-color: var(--bg-input);
	border: 1px solid var(--border-input);
	border-radius: 5px;
}

fieldset {
	padding: 8px 8px 10px;

	display: flex;
	flex-direction: column;
	gap: calc(var(--form-spacer) * 0.8);

	border: 1px solid var(--border-input);
}

legend {
	padding: 5px 8px;
	border: 1px solid var(--border-input);
}

label input[type="radio"] {
	display: none;
}
label input[type="radio"] ~ span {
	display: flex;
	align-items: center;
	gap: 6px;
}
label input[type="radio"] ~ span:before {
	--radio-dimensions: 15px;

	height: var(--radio-dimensions);
	width: var(--radio-dimensions);

	content: "";
	background: var(--bg-input);
	margin-right: 5px;

	border: 1px solid var(--border-input);
	border-radius: var(--radio-dimensions);
	transition: all 300ms ease-in-out;
}

label input[type="radio"]:checked ~ span:before {
	border: 5px solid var(--bg-main);
}

textarea {
	resize: vertical;
}

form [type="submit"] {
	align-self: center;
	padding: 12px;
	width: min(100%, 280px);

	background-color: var(--text-h1);
	border-radius: 200px;

	font-size: 1.5rem;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 1px;

	&:hover {
		box-shadow: inset 0 0 10px #916f08;
	}
}

/* ---------------     /Modal     --------------- */
`, "",{"version":3,"sources":["webpack://./src/styles/events.css"],"names":[],"mappings":"AAAA;CACC,UAAU;CACV,YAAY;;CAEZ,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,SAAS;;CAET;EACC,aAAa;EACb,2BAA2B;CAC5B;;CAEA;EACC,cAAc;EACd,eAAe;CAChB;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,mBAAmB;CACpB;;CAEA;EACC,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,mBAAmB;CACpB;;CAEA;EACC,uBAAuB;EACvB,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,QAAQ;CACT;;CAEA;EACC,4BAA4B;;EAE5B,yBAAyB;EACzB,uBAAuB;;EAEvB,2BAA2B;EAC3B,oBAAoB;EACpB,8BAA8B;;EAE9B;GACC,cAAc;GACd,YAAY;GACZ,2BAA2B;EAC5B;;EAEA;GACC,kBAAkB;GAClB,eAAe;EAChB;CACD;AACD;;AAEA;CACC,uBAAuB;AACxB;;AAEA;CACC,aAAa;CACb,sBAAsB;;CAEtB;EACC,YAAY;CACb;;CAEA;EACC,YAAY;EACZ,WAAW;EACX,iBAAiB;CAClB;;CAEA;EACC,WAAW;EACX,mBAAmB;CACpB;AACD;;AAEA;CACC,eAAe;;CAEf,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,SAAS;;CAET;EACC,eAAe;EACf,SAAS;CACV;;CAEA;EACC,aAAa;;EAEb,uBAAuB;EACvB,kBAAkB;;EAElB,eAAe;EACf,yBAAyB;;EAEzB,oBAAoB;CACrB;;CAEA;EACC,sBAAsB;EACtB,qBAAqB;CACtB;AACD;;AAEA,kDAAkD;;AAElD;CACC,eAAe;CACf,MAAM;CACN,UAAU;CACV,aAAa;CACb,YAAY;;CAEZ,aAAa;CACb,qBAAqB;;CAErB,0CAA0C;CAC1C,0BAA0B;AAC3B;;AAEA;CACC,mBAAmB;;CAEnB,gBAAgB;CAChB,aAAa;CACb,wBAAwB;;CAExB,aAAa;CACb,sBAAsB;CACtB,uBAAuB;;CAEvB,yBAAyB;CACzB,WAAW;CACX,mBAAmB;AACpB;;AAEA;CACC,SAAS;CACT,iBAAiB;CACjB,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA;CACC,2BAA2B;CAC3B,aAAa;CACb,sBAAsB;CACtB,mCAAmC;CACnC,kBAAkB;;CAElB,qCAAqC;CACrC,kBAAkB;;CAElB;EACC,mBAAmB;EACnB,8BAA8B;EAC9B,gBAAgB;CACjB;AACD;;AAEA;CACC,eAAe;AAChB;;AAEA;;;CAGC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;AACxB;;AAEA;CACC,aAAa;CACb,eAAe;CACf,uBAAuB;AACxB;;AAEA;CACC,OAAO;CACP,aAAa;CACb,sBAAsB;CACtB,mCAAmC;AACpC;;AAEA;CACC,UAAU;AACX;;AAEA;;CAEC,gBAAgB;AACjB;;AAEA;;;CAGC,iBAAiB;;CAEjB,4BAA4B;CAC5B,iCAAiC;CACjC,qCAAqC;CACrC,kBAAkB;AACnB;;AAEA;CACC,qBAAqB;;CAErB,aAAa;CACb,sBAAsB;CACtB,mCAAmC;;CAEnC,qCAAqC;AACtC;;AAEA;CACC,gBAAgB;CAChB,qCAAqC;AACtC;;AAEA;CACC,aAAa;AACd;AACA;CACC,aAAa;CACb,mBAAmB;CACnB,QAAQ;AACT;AACA;CACC,wBAAwB;;CAExB,+BAA+B;CAC/B,8BAA8B;;CAE9B,WAAW;CACX,2BAA2B;CAC3B,iBAAiB;;CAEjB,qCAAqC;CACrC,sCAAsC;CACtC,iCAAiC;AAClC;;AAEA;CACC,gCAAgC;AACjC;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,uBAAuB;;CAEvB,gCAAgC;CAChC,oBAAoB;;CAEpB,iBAAiB;CACjB,yBAAyB;CACzB,iBAAiB;CACjB,mBAAmB;;CAEnB;EACC,kCAAkC;CACnC;AACD;;AAEA,mDAAmD","sourcesContent":[".events .content {\n\twidth: 90%;\n\tmargin: auto;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 20px;\n\n\t& .art {\n\t\theight: 160px;\n\t\tbackground-position: bottom;\n\t}\n\n\t& .text {\n\t\tmargin: 20px 0;\n\t\tmax-width: 65ch;\n\t}\n\n\t& h1 {\n\t\tfont-size: 30px;\n\t}\n\n\t& h2 {\n\t\tmargin: 30px 0 16px;\n\t}\n\n\t& p {\n\t\tmargin-bottom: 20px;\n\t\tfont-size: 18px;\n\t\tline-height: 1.5;\n\t\tletter-spacing: 1px;\n\t}\n\n\t& p:nth-last-child(2) {\n\t\twidth: min(100%, 440px);\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tjustify-content: space-between;\n\t\tgap: 2px;\n\t}\n\n\t@media (min-width: 700px) {\n\t\t--art-width: min(300px, 30%);\n\n\t\theight: calc(960px - 8vw);\n\t\twidth: min(90%, 1100px);\n\n\t\tflex-direction: row-reverse;\n\t\talign-items: stretch;\n\t\tjustify-content: space-between;\n\n\t\t& .art {\n\t\t\tflex-shrink: 0;\n\t\t\theight: 100%;\n\t\t\tbackground-position: center;\n\t\t}\n\n\t\t& .call-to-action {\n\t\t\talign-items: start;\n\t\t\tpadding: 40px 0;\n\t\t}\n\t}\n}\n\n.photos {\n\tbackground-color: black;\n}\n\n.tier {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t& .image-container {\n\t\tflex-grow: 1;\n\t}\n\n\t& img {\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\tobject-fit: cover;\n\t}\n\n\t@media (min-width: 700px) {\n\t\twidth: 100%;\n\t\tflex-direction: row;\n\t}\n}\n\n.events .call-to-action {\n\tpadding: 90px 0;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 24px;\n\n\t& p {\n\t\tfont-size: 20px;\n\t\tmargin: 0;\n\t}\n\n\t& button {\n\t\tpadding: 20px;\n\n\t\tborder: 1px solid white;\n\t\tborder-radius: 5px;\n\n\t\tfont-size: 18px;\n\t\ttext-transform: uppercase;\n\n\t\ttransition: all 0.3s;\n\t}\n\n\t& button:hover {\n\t\tbackground-color: #fff;\n\t\tcolor: var(--bg-main);\n\t}\n}\n\n/* ---------------     Modal     --------------- */\n\n.modal {\n\tposition: fixed;\n\ttop: 0;\n\tz-index: 2;\n\theight: 100vh;\n\twidth: 100vw;\n\n\tdisplay: grid;\n\tplace-content: center;\n\n\tbackground-color: rgba(200, 200, 200, 0.5);\n\tbackdrop-filter: blur(2px);\n}\n\nform {\n\t--form-spacer: 12px;\n\n\tmax-height: 80vh;\n\tpadding: 12px;\n\twidth: min(90vw, 1000px);\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--form-spacer);\n\n\tbackground-color: skyblue;\n\tcolor: #000;\n\tborder-radius: 15px;\n}\n\n.form-header {\n\tmargin: 0;\n\tpadding-left: 2px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.form-content {\n\tpadding: var(--form-spacer);\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: calc(var(--form-spacer) * 2.5);\n\toverflow-y: scroll;\n\n\tborder: 1px solid var(--border-input);\n\tborder-radius: 5px;\n\n\t@media (min-width: 800px) {\n\t\tflex-direction: row;\n\t\tjustify-content: space-between;\n\t\toverflow-y: auto;\n\t}\n}\n\n.form-content h4 {\n\tfont-size: 20px;\n}\n\n.form-contact,\n.form-details,\n.form-extras {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--form-spacer);\n}\n\n.form-row {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: var(--form-spacer);\n}\n\n.form-item {\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: calc(var(--form-spacer) * 0.5);\n}\n\n.form-details .form-row .form-item {\n\twidth: 47%;\n}\n\ninput,\ntextarea {\n\tappearance: none;\n}\n\ninput,\ntextarea,\nselect {\n\tpadding: 6px 10px;\n\n\tfont-size: max(16px, 0.9rem);\n\tbackground-color: var(--bg-input);\n\tborder: 1px solid var(--border-input);\n\tborder-radius: 5px;\n}\n\nfieldset {\n\tpadding: 8px 8px 10px;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: calc(var(--form-spacer) * 0.8);\n\n\tborder: 1px solid var(--border-input);\n}\n\nlegend {\n\tpadding: 5px 8px;\n\tborder: 1px solid var(--border-input);\n}\n\nlabel input[type=\"radio\"] {\n\tdisplay: none;\n}\nlabel input[type=\"radio\"] ~ span {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 6px;\n}\nlabel input[type=\"radio\"] ~ span:before {\n\t--radio-dimensions: 15px;\n\n\theight: var(--radio-dimensions);\n\twidth: var(--radio-dimensions);\n\n\tcontent: \"\";\n\tbackground: var(--bg-input);\n\tmargin-right: 5px;\n\n\tborder: 1px solid var(--border-input);\n\tborder-radius: var(--radio-dimensions);\n\ttransition: all 300ms ease-in-out;\n}\n\nlabel input[type=\"radio\"]:checked ~ span:before {\n\tborder: 5px solid var(--bg-main);\n}\n\ntextarea {\n\tresize: vertical;\n}\n\nform [type=\"submit\"] {\n\talign-self: center;\n\tpadding: 12px;\n\twidth: min(100%, 280px);\n\n\tbackground-color: var(--text-h1);\n\tborder-radius: 200px;\n\n\tfont-size: 1.5rem;\n\ttext-transform: uppercase;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\n\t&:hover {\n\t\tbox-shadow: inset 0 0 10px #916f08;\n\t}\n}\n\n/* ---------------     /Modal     --------------- */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/home.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/home.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.home {
	margin-top: 20px;

	& h2 {
		color: var(--text-h1);
	}

	@media (min-width: 700px) {
		margin-top: 0;
	}
}

.hero {
	position: relative;
	height: calc(100svh - 80px);
	width: 90%;
	margin: auto;

	display: flex;
	justify-content: center;

	@media (min-width: 700px) {
		--art-width: min(190px, 20%);
		width: min(90%, 1300px);
		margin: auto;
		justify-content: space-between;
		height: calc(100svh - 100px);
	}
}

.art {
	height: 68%;
	width: var(--art-width);

	background-image: url(https://static.wixstatic.com/media/54a4cd_5059116c59d244d08c3170b49d6e7b0f~mv2.jpg/v1/fill/w_546,h_728,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_5059116c59d244d08c3170b49d6e7b0f~mv2.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;

	@media screen and (min-width: 700px) {
		height: 80%;

		background-image: url(https://static.wixstatic.com/media/54a4cd_ae5e22486dbb49debb9cd8ba1b780b6e~mv2.jpg/v1/fill/w_388,h_1240,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Artwork1_Final_8x2_5.jpg);
	}
}

.hero-text {
	position: absolute;
	bottom: 90px;

	display: grid;
	gap: 35px;

	& h1 {
		--font-size: min(50vw, 300px);
	}

	@media (min-width: 700px) {
		position: static;
		place-content: center;
		gap: 60px;
	}
}

.reservations {
	color: #ffe5e5;
	font-size: 20px;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 2px;
	text-decoration: underline 1px;
	text-underline-offset: 2px;
}

.scroll-down {
	display: grid;
	place-content: center;
	color: var(--text-h1);

	& .fa-angle-down {
		margin-top: 10px;
		line-height: 16px;
		font-size: 70px;
		animation: bounce 2s infinite;
	}
}

@keyframes bounce {
	0% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(30px);
	}
	100% {
		transform: translateY(0);
	}
}

.lanterns {
	display: none;
	width: var(--art-width);
	height: 80%;

	@media (min-width: 700px) {
		display: grid;
	}
}

.lantern {
	--caps-width: 50px;
	--caps-height: 20px;

	display: grid;
	align-content: center;
	justify-items: center;

	& .top,
	& .bottom {
		position: relative;
		width: var(--caps-width);
		height: var(--caps-height);

		background-color: black;
	}

	& .top {
		bottom: -5px;
		border-radius: 80% 80% 0 0;
	}

	& .bottom {
		top: -5px;
		border-radius: 0 0 80% 80%;
	}

	& .body {
		z-index: 1;
		height: 130px;
		width: 80%;

		border-radius: 85px;
		border: 1px solid var(--accent-main-dark);
		background-color: var(--bg-main);
		background: repeating-linear-gradient(
			var(--bg-lantern),
			var(--bg-lantern) 19%,
			var(--accent-main-dark) 20%
		);
	}

	& .body:hover {
		background: radial-gradient(rgba(245, 205, 84, 0.7), transparent 80%),
			repeating-linear-gradient(
				var(--bg-lantern),
				var(--bg-lantern) 19%,
				var(--accent-main-dark) 20%
			);
	}

	& > * {
		box-shadow: 3px 3px 6px -3px #8a0f0f;
	}
}

.hours-container {
	padding: 20px;

	display: flex;
	justify-content: center;

	border-top: 2px solid hsl(0, 95%, 70%);
}

.hours {
	display: flex;
	flex-direction: column;
	gap: 30px;

	& > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}

	@media (min-width: 700px) {
		flex-direction: row;
		justify-content: center;
		width: 650px;
		flex-wrap: wrap;
		gap: 70px;
	}
}
`, "",{"version":3,"sources":["webpack://./src/styles/home.css"],"names":[],"mappings":"AAAA;CACC,gBAAgB;;CAEhB;EACC,qBAAqB;CACtB;;CAEA;EACC,aAAa;CACd;AACD;;AAEA;CACC,kBAAkB;CAClB,2BAA2B;CAC3B,UAAU;CACV,YAAY;;CAEZ,aAAa;CACb,uBAAuB;;CAEvB;EACC,4BAA4B;EAC5B,uBAAuB;EACvB,YAAY;EACZ,8BAA8B;EAC9B,4BAA4B;CAC7B;AACD;;AAEA;CACC,WAAW;CACX,uBAAuB;;CAEvB,mNAAmN;CACnN,sBAAsB;CACtB,4BAA4B;CAC5B,2BAA2B;;CAE3B;EACC,WAAW;;EAEX,6LAA6L;CAC9L;AACD;;AAEA;CACC,kBAAkB;CAClB,YAAY;;CAEZ,aAAa;CACb,SAAS;;CAET;EACC,6BAA6B;CAC9B;;CAEA;EACC,gBAAgB;EAChB,qBAAqB;EACrB,SAAS;CACV;AACD;;AAEA;CACC,cAAc;CACd,eAAe;CACf,kBAAkB;CAClB,yBAAyB;CACzB,mBAAmB;CACnB,8BAA8B;CAC9B,0BAA0B;AAC3B;;AAEA;CACC,aAAa;CACb,qBAAqB;CACrB,qBAAqB;;CAErB;EACC,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;EACf,6BAA6B;CAC9B;AACD;;AAEA;CACC;EACC,wBAAwB;CACzB;CACA;EACC,2BAA2B;CAC5B;CACA;EACC,wBAAwB;CACzB;AACD;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,WAAW;;CAEX;EACC,aAAa;CACd;AACD;;AAEA;CACC,kBAAkB;CAClB,mBAAmB;;CAEnB,aAAa;CACb,qBAAqB;CACrB,qBAAqB;;CAErB;;EAEC,kBAAkB;EAClB,wBAAwB;EACxB,0BAA0B;;EAE1B,uBAAuB;CACxB;;CAEA;EACC,YAAY;EACZ,0BAA0B;CAC3B;;CAEA;EACC,SAAS;EACT,0BAA0B;CAC3B;;CAEA;EACC,UAAU;EACV,aAAa;EACb,UAAU;;EAEV,mBAAmB;EACnB,yCAAyC;EACzC,gCAAgC;EAChC;;;;GAIC;CACF;;CAEA;EACC;;;;;IAKE;CACH;;CAEA;EACC,oCAAoC;CACrC;AACD;;AAEA;CACC,aAAa;;CAEb,aAAa;CACb,uBAAuB;;CAEvB,sCAAsC;AACvC;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;;CAET;EACC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;CACT;;CAEA;EACC,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,SAAS;CACV;AACD","sourcesContent":[".home {\n\tmargin-top: 20px;\n\n\t& h2 {\n\t\tcolor: var(--text-h1);\n\t}\n\n\t@media (min-width: 700px) {\n\t\tmargin-top: 0;\n\t}\n}\n\n.hero {\n\tposition: relative;\n\theight: calc(100svh - 80px);\n\twidth: 90%;\n\tmargin: auto;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\n\t@media (min-width: 700px) {\n\t\t--art-width: min(190px, 20%);\n\t\twidth: min(90%, 1300px);\n\t\tmargin: auto;\n\t\tjustify-content: space-between;\n\t\theight: calc(100svh - 100px);\n\t}\n}\n\n.art {\n\theight: 68%;\n\twidth: var(--art-width);\n\n\tbackground-image: url(https://static.wixstatic.com/media/54a4cd_5059116c59d244d08c3170b49d6e7b0f~mv2.jpg/v1/fill/w_546,h_728,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_5059116c59d244d08c3170b49d6e7b0f~mv2.jpg);\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\n\t@media screen and (min-width: 700px) {\n\t\theight: 80%;\n\n\t\tbackground-image: url(https://static.wixstatic.com/media/54a4cd_ae5e22486dbb49debb9cd8ba1b780b6e~mv2.jpg/v1/fill/w_388,h_1240,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Artwork1_Final_8x2_5.jpg);\n\t}\n}\n\n.hero-text {\n\tposition: absolute;\n\tbottom: 90px;\n\n\tdisplay: grid;\n\tgap: 35px;\n\n\t& h1 {\n\t\t--font-size: min(50vw, 300px);\n\t}\n\n\t@media (min-width: 700px) {\n\t\tposition: static;\n\t\tplace-content: center;\n\t\tgap: 60px;\n\t}\n}\n\n.reservations {\n\tcolor: #ffe5e5;\n\tfont-size: 20px;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tletter-spacing: 2px;\n\ttext-decoration: underline 1px;\n\ttext-underline-offset: 2px;\n}\n\n.scroll-down {\n\tdisplay: grid;\n\tplace-content: center;\n\tcolor: var(--text-h1);\n\n\t& .fa-angle-down {\n\t\tmargin-top: 10px;\n\t\tline-height: 16px;\n\t\tfont-size: 70px;\n\t\tanimation: bounce 2s infinite;\n\t}\n}\n\n@keyframes bounce {\n\t0% {\n\t\ttransform: translateY(0);\n\t}\n\t50% {\n\t\ttransform: translateY(30px);\n\t}\n\t100% {\n\t\ttransform: translateY(0);\n\t}\n}\n\n.lanterns {\n\tdisplay: none;\n\twidth: var(--art-width);\n\theight: 80%;\n\n\t@media (min-width: 700px) {\n\t\tdisplay: grid;\n\t}\n}\n\n.lantern {\n\t--caps-width: 50px;\n\t--caps-height: 20px;\n\n\tdisplay: grid;\n\talign-content: center;\n\tjustify-items: center;\n\n\t& .top,\n\t& .bottom {\n\t\tposition: relative;\n\t\twidth: var(--caps-width);\n\t\theight: var(--caps-height);\n\n\t\tbackground-color: black;\n\t}\n\n\t& .top {\n\t\tbottom: -5px;\n\t\tborder-radius: 80% 80% 0 0;\n\t}\n\n\t& .bottom {\n\t\ttop: -5px;\n\t\tborder-radius: 0 0 80% 80%;\n\t}\n\n\t& .body {\n\t\tz-index: 1;\n\t\theight: 130px;\n\t\twidth: 80%;\n\n\t\tborder-radius: 85px;\n\t\tborder: 1px solid var(--accent-main-dark);\n\t\tbackground-color: var(--bg-main);\n\t\tbackground: repeating-linear-gradient(\n\t\t\tvar(--bg-lantern),\n\t\t\tvar(--bg-lantern) 19%,\n\t\t\tvar(--accent-main-dark) 20%\n\t\t);\n\t}\n\n\t& .body:hover {\n\t\tbackground: radial-gradient(rgba(245, 205, 84, 0.7), transparent 80%),\n\t\t\trepeating-linear-gradient(\n\t\t\t\tvar(--bg-lantern),\n\t\t\t\tvar(--bg-lantern) 19%,\n\t\t\t\tvar(--accent-main-dark) 20%\n\t\t\t);\n\t}\n\n\t& > * {\n\t\tbox-shadow: 3px 3px 6px -3px #8a0f0f;\n\t}\n}\n\n.hours-container {\n\tpadding: 20px;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\n\tborder-top: 2px solid hsl(0, 95%, 70%);\n}\n\n.hours {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 30px;\n\n\t& > div {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tgap: 8px;\n\t}\n\n\t@media (min-width: 700px) {\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\t\twidth: 650px;\n\t\tflex-wrap: wrap;\n\t\tgap: 70px;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.menu {
	margin-top: 5px;

	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 700px) {
		flex-direction: row;
		margin: 10px 20px;
	}
}

.menu-art {
	height: 550px;
	width: min(100vw, 400px);
	margin: auto;

	background-image: url(https://static.wixstatic.com/media/54a4cd_b8c9537c5fcd4d859fc958942b5a5e87~mv2.jpg/v1/fill/w_952,h_1322,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_b8c9537c5fcd4d859fc958942b5a5e87~mv2.jpg);
	background-size: cover;
	background-repeat: no-repeat;

	@media (min-width: 700px) {
		margin: 0;
		height: calc(100vh - var(--footer-height) * 2.5);
		width: min(600px, 50vw);
	}
}

.menu-text {
	margin: -95px 0 40px;

	display: flex;
	flex-direction: column;
	gap: 15px;

	& > * {
		display: flex;
		justify-content: center;
		background-color: var(--bg-main);
	}

	& a {
		padding: 8px 0;
		text-transform: uppercase;
		font-size: 30px;
		letter-spacing: 3px;
	}

	& a:hover {
		box-shadow: 0 0 0 1px white;
	}

	@media (min-width: 700px) {
		margin: 0 -61px 0;
	}
}
`, "",{"version":3,"sources":["webpack://./src/styles/menu.css"],"names":[],"mappings":"AAAA;CACC,eAAe;;CAEf,aAAa;CACb,sBAAsB;CACtB,mBAAmB;;CAEnB;EACC,mBAAmB;EACnB,iBAAiB;CAClB;AACD;;AAEA;CACC,aAAa;CACb,wBAAwB;CACxB,YAAY;;CAEZ,oNAAoN;CACpN,sBAAsB;CACtB,4BAA4B;;CAE5B;EACC,SAAS;EACT,gDAAgD;EAChD,uBAAuB;CACxB;AACD;;AAEA;CACC,oBAAoB;;CAEpB,aAAa;CACb,sBAAsB;CACtB,SAAS;;CAET;EACC,aAAa;EACb,uBAAuB;EACvB,gCAAgC;CACjC;;CAEA;EACC,cAAc;EACd,yBAAyB;EACzB,eAAe;EACf,mBAAmB;CACpB;;CAEA;EACC,2BAA2B;CAC5B;;CAEA;EACC,iBAAiB;CAClB;AACD","sourcesContent":[".menu {\n\tmargin-top: 5px;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\n\t@media (min-width: 700px) {\n\t\tflex-direction: row;\n\t\tmargin: 10px 20px;\n\t}\n}\n\n.menu-art {\n\theight: 550px;\n\twidth: min(100vw, 400px);\n\tmargin: auto;\n\n\tbackground-image: url(https://static.wixstatic.com/media/54a4cd_b8c9537c5fcd4d859fc958942b5a5e87~mv2.jpg/v1/fill/w_952,h_1322,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_b8c9537c5fcd4d859fc958942b5a5e87~mv2.jpg);\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\n\t@media (min-width: 700px) {\n\t\tmargin: 0;\n\t\theight: calc(100vh - var(--footer-height) * 2.5);\n\t\twidth: min(600px, 50vw);\n\t}\n}\n\n.menu-text {\n\tmargin: -95px 0 40px;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 15px;\n\n\t& > * {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tbackground-color: var(--bg-main);\n\t}\n\n\t& a {\n\t\tpadding: 8px 0;\n\t\ttext-transform: uppercase;\n\t\tfont-size: 30px;\n\t\tletter-spacing: 3px;\n\t}\n\n\t& a:hover {\n\t\tbox-shadow: 0 0 0 1px white;\n\t}\n\n\t@media (min-width: 700px) {\n\t\tmargin: 0 -61px 0;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reboot-util.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reboot-util.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ---------------     Reboot     --------------- */

*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

button {
	cursor: pointer;
	background-color: unset;
	color: unset;
	border: none;
	font-size: unset;
}

a {
	color: unset;
	text-decoration: none;
}

h1,
h2 {
	font-weight: normal;
}

/* ---------------     /Reboot     --------------- */
/* ---------------     Utilities & Universals     --------------- */

:root {
	--bg-main: #ff4040;
	--accent-main-dark: #3d0000;
	--bg-lantern: #e83030;
	--text-h1: #f5ce54;
	--bg-input: white;
	--border-input: black;

	--footer-height: 50px;
	--art-width: 100%;

	scroll-behavior: smooth;
}

body {
	min-height: 101svh;

	display: flex;
	flex-direction: column;

	background-color: var(--bg-main);
	color: #fff;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
		sans-serif;
}

#all-content {
	flex: 1;
	display: flex;
	flex-direction: column;
}

h1.brand {
	--font-size: 110px;

	color: var(--text-h1);
	text-shadow: 0 0 5px black;
	font-size: var(--font-size);
	line-height: calc(var(--font-size) * 0.8);
}

.hidden {
	display: none !important;
}

.socials {
	gap: 10px;
	font-size: 25px;
}

a.underline {
	text-decoration: underline 1px;
	text-underline-offset: 3px;
}

/* ---------------     /Utilities & Universals     --------------- */
`, "",{"version":3,"sources":["webpack://./src/styles/reboot-util.css"],"names":[],"mappings":"AAAA,mDAAmD;;AAEnD;;;CAGC,SAAS;CACT,UAAU;CACV,sBAAsB;AACvB;;AAEA;CACC,eAAe;CACf,uBAAuB;CACvB,YAAY;CACZ,YAAY;CACZ,gBAAgB;AACjB;;AAEA;CACC,YAAY;CACZ,qBAAqB;AACtB;;AAEA;;CAEC,mBAAmB;AACpB;;AAEA,oDAAoD;AACpD,mEAAmE;;AAEnE;CACC,kBAAkB;CAClB,2BAA2B;CAC3B,qBAAqB;CACrB,kBAAkB;CAClB,iBAAiB;CACjB,qBAAqB;;CAErB,qBAAqB;CACrB,iBAAiB;;CAEjB,uBAAuB;AACxB;;AAEA;CACC,kBAAkB;;CAElB,aAAa;CACb,sBAAsB;;CAEtB,gCAAgC;CAChC,WAAW;CACX;;YAEW;AACZ;;AAEA;CACC,OAAO;CACP,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,kBAAkB;;CAElB,qBAAqB;CACrB,0BAA0B;CAC1B,2BAA2B;CAC3B,yCAAyC;AAC1C;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,SAAS;CACT,eAAe;AAChB;;AAEA;CACC,8BAA8B;CAC9B,0BAA0B;AAC3B;;AAEA,oEAAoE","sourcesContent":["/* ---------------     Reboot     --------------- */\n\n*,\n*::before,\n*::after {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nbutton {\n\tcursor: pointer;\n\tbackground-color: unset;\n\tcolor: unset;\n\tborder: none;\n\tfont-size: unset;\n}\n\na {\n\tcolor: unset;\n\ttext-decoration: none;\n}\n\nh1,\nh2 {\n\tfont-weight: normal;\n}\n\n/* ---------------     /Reboot     --------------- */\n/* ---------------     Utilities & Universals     --------------- */\n\n:root {\n\t--bg-main: #ff4040;\n\t--accent-main-dark: #3d0000;\n\t--bg-lantern: #e83030;\n\t--text-h1: #f5ce54;\n\t--bg-input: white;\n\t--border-input: black;\n\n\t--footer-height: 50px;\n\t--art-width: 100%;\n\n\tscroll-behavior: smooth;\n}\n\nbody {\n\tmin-height: 101svh;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\n\tbackground-color: var(--bg-main);\n\tcolor: #fff;\n\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n\t\tRoboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n}\n\n#all-content {\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\nh1.brand {\n\t--font-size: 110px;\n\n\tcolor: var(--text-h1);\n\ttext-shadow: 0 0 5px black;\n\tfont-size: var(--font-size);\n\tline-height: calc(var(--font-size) * 0.8);\n}\n\n.hidden {\n\tdisplay: none !important;\n}\n\n.socials {\n\tgap: 10px;\n\tfont-size: 25px;\n}\n\na.underline {\n\ttext-decoration: underline 1px;\n\ttext-underline-offset: 3px;\n}\n\n/* ---------------     /Utilities & Universals     --------------- */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/about.css":
/*!******************************!*\
  !*** ./src/styles/about.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./about.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/about.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/constants.css":
/*!**********************************!*\
  !*** ./src/styles/constants.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_constants_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./constants.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/constants.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_constants_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_constants_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_constants_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_constants_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/events.css":
/*!*******************************!*\
  !*** ./src/styles/events.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_events_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./events.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/events.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_events_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_events_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_events_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_events_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/home.css":
/*!*****************************!*\
  !*** ./src/styles/home.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/menu.css":
/*!*****************************!*\
  !*** ./src/styles/menu.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reboot-util.css":
/*!************************************!*\
  !*** ./src/styles/reboot-util.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reboot_util_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reboot-util.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reboot-util.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reboot_util_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reboot_util_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reboot_util_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reboot_util_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about-us.js":
/*!*************************!*\
  !*** ./src/about-us.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildAboutUs: () => (/* binding */ buildAboutUs)
/* harmony export */ });
/* harmony import */ var _dom_factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-factories */ "./src/dom-factories.js");


function buildAboutUs() {
	return (0,_dom_factories__WEBPACK_IMPORTED_MODULE_0__.htmlFactory)(
		(0,_dom_factories__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "about" }, [
			(0,_dom_factories__WEBPACK_IMPORTED_MODULE_0__.elFactory)("p", { classList: "text", textContent: "Call us at:" }, [
				(0,_dom_factories__WEBPACK_IMPORTED_MODULE_0__.elFactory)("a", {
					classList: "underline phone",
					href: "tel:+1-212-517-1987",
					textContent: "212 517 1987",
				}),
			]),
			(0,_dom_factories__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "map-container" }, [
				(0,_dom_factories__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "map-tack" }, []),
				(0,_dom_factories__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "map-string" }, [
					(0,_dom_factories__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "left" }),
					(0,_dom_factories__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "right" }),
				]),
				(0,_dom_factories__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "map-wood map-top" }, []),
				(0,_dom_factories__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "map-canvas" }, [
					(0,_dom_factories__WEBPACK_IMPORTED_MODULE_0__.elFactory)("iframe", {
						src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.202843386356!2d-73.97953792388756!3d40.77955453347718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259c8390b0e97%3A0x2cb1160aef377d0b!2sASSET!5e0!3m2!1sen!2sus!4v1695868373928!5m2!1sen!2sus",
						width: "100%",
						height: "450",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade",
					}),
				]),
				(0,_dom_factories__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "map-wood map-bottom" }, []),
			]),
		])
	);
}


/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildConstants: () => (/* binding */ buildConstants)
/* harmony export */ });
/* harmony import */ var _dom_factories_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-factories.js */ "./src/dom-factories.js");


function createSocialIcons() {
	// returns div.socials with 4 links, each containing an <i>
	return (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(
		"div",
		{ classList: "socials" },
		[
			{
				name: "instagram",
				link: "https://www.instagram.com/assetrestaurant/",
			},
			{
				name: "facebook",
				link: "https://www.facebook.com/assetrestaurant/",
			},
			{
				name: "yelp",
				link: "https://www.yelp.com/biz/asset-new-york?osq=asset",
			},
			{
				name: "tripadvisor",
				link: "https://www.tripadvisor.com/Restaurant_Review-g60763-d19284346-Reviews-Asset-New_York_City_New_York.html",
			},
		].map((pair) => {
			return (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("a", { href: pair.link }, [
				(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("i", {
					classList: `fa fa-${pair.name}`,
					ariaHidden: true,
				}),
			]);
		})
	);
}

function buildConstants() {
	const sidebar = (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "sidebar dynamic" }, [
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("button", {
			type: "button",
			classList: "close-btn sidebar-toggler",
			id: "close-sidebar",
			textContent: "×",
		}),
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(
			"nav",
			{},
			["home", "menu", "events", "about"].map((button) => {
				return (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("button", {
					type: "button",
					classList: "nav-btn",
					id: `${button}-btn`,
					textContent: button,
				});
			})
		),
	]);

	const header = (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("header", {}, [
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("button", {
			type: "button",
			classList: "sidebar-toggler",
			id: "open-sidebar",
			textContent: "☰",
		}),
		createSocialIcons(),
	]);

	const footer = (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("footer", {}, [
		createSocialIcons(),
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "author" }, [
			(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("p", { textContent: "Walker" }),
			(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(
				"a",
				{
					href: "https://github.com/marlatte",
					target: "_blank",
				},
				[(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("i", { classList: "fa fa-github" })]
			),
			(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("p", { textContent: "Marlatt" }),
		]),
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "contact-container" }, [
			(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("button", {
				type: "button",
				id: "contact-btn",
				textContent: "Contact Us",
			}),
		]),
	]);

	return [
		sidebar,
		header,
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("main", { id: "changing-content" }),
		footer,
	].map((section) => {
		return (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.htmlFactory)(section);
	});
}


/***/ }),

/***/ "./src/dom-factories.js":
/*!******************************!*\
  !*** ./src/dom-factories.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elFactory: () => (/* binding */ elFactory),
/* harmony export */   formRowFactory: () => (/* binding */ formRowFactory),
/* harmony export */   htmlFactory: () => (/* binding */ htmlFactory)
/* harmony export */ });
function elFactory(type, attributes, children = []) {
	return { type, attributes, children };
}

function htmlFactory(obj) {
	const el = document.createElement(obj.type);
	const attributes = obj.attributes;

	for (let key in attributes) {
		el[key] = attributes[key];
	}

	obj.children?.forEach((child) => {
		el.appendChild(htmlFactory(child));
	});

	return el;
}

function formRowFactory(formDataArrays) {
	return formDataArrays
		.map((formData) => {
			const kebab = formData[0].toLowerCase().split(" ").join("-");
			return elFactory("div", { classList: "form-item" }, [
				elFactory("label", {
					htmlFor: kebab,
					textContent: formData[0] + ":",
				}),
				elFactory("input", {
					id: kebab,
					type: formData[1],
					autocomplete: formData[2],
				}),
			]);
		})
		.reduce((acc, currentItem, index) => {
			if (!(index & 1)) {
				// If even, create row with currentItem as a child
				acc.push(
					elFactory("div", { classList: "form-row" }, [currentItem])
				);
				return acc;
			} else {
				// If odd, add currentItem to previous row
				acc[acc.length - 1].children.push(currentItem);
				return acc;
			}
		}, []);
}


/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildEvents: () => (/* binding */ buildEvents),
/* harmony export */   listenForClicks: () => (/* binding */ listenForClicks)
/* harmony export */ });
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.js */ "./src/form.js");
/* harmony import */ var _dom_factories_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-factories.js */ "./src/dom-factories.js");



function createTextChildren() {
	const textChildren = [
		["h1", "Private Dining & Events"],
		["h2", "Special Events"],
		[
			"p",
			"With two levels of dining and a bar on each floor, the restaurant offers seating for up 220 guests within approximately 5,000 square-footage. Upon entry into the restaurant through a glass entryway is a 24- seat bar for guests to enjoy a drink, snack, or full dinner.",
		],
		[
			"p",
			"There are multiple areas of the restaurant that can host private and semi-private events as the restaurant boasts two semi-private rooms that both seat 20 guests, as well as the upstairs Mezzanine level, which seats up to 50 and 8 at the bar. Seating will be available outdoors seasonally.",
		],
		["h2", "Cocktail Parties, Receptions, Buyouts"],
		[
			"p",
			"We are pleased to offer our services for your next occasions. Book our entire restaurant for a special evening, catered just for you and your guests. Let us bring the ASSET experience to your wedding, birthdays and other large events",
		],
		["p", "Inquire below or contact us at:"],
	].map((entry) => {
		return (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)(entry[0], { textContent: entry[1] });
	});

	textChildren[textChildren.length - 1].children.push(
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("a", {
			href: "tel:+1-212-517-1987",
			textContent: "+1 212 517 1987",
			classList: "underline",
		})
	);

	textChildren.push(
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("div", { classList: "call-to-action" }, [
			(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("button", {
				classList: "inquire",
				type: "button",
				textContent: "Inquire Now",
			}),
		])
	);
	return textChildren;
}

function createPhotos() {
	return [
		{
			src: "https://static.wixstatic.com/media/bbf025b2a19440d197cbef666fffbc8e.jpg/v1/fill/w_999,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bbf025b2a19440d197cbef666fffbc8e.jpg",
			alt: "People drinking at a bar",
		},
		{
			src: "https://static.wixstatic.com/media/54a4cd_a265a2f258344c159c3d06fcebd940ee~mv2.jpg/v1/fill/w_666,h_600,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_a265a2f258344c159c3d06fcebd940ee~mv2.jpg",
			alt: "A glass of wine and plate of food",
		},
		{
			src: "https://static.wixstatic.com/media/54a4cd_95184a86aeee42bc8f2b65d4148acddf~mv2_d_1950_1308_s_2.jpg/v1/fill/w_666,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_95184a86aeee42bc8f2b65d4148acddf~mv2_d_1950_1308_s_2.jpg",
			alt: "A DJ booth",
		},
		{
			src: "https://static.wixstatic.com/media/54a4cd_b2e536abf0ea436d90557c5e528a1ec0~mv2.png/v1/fill/w_999,h_600,al_l,q_90,usm_0.66_1.00_0.01,enc_auto/54a4cd_b2e536abf0ea436d90557c5e528a1ec0~mv2.png",
			alt: "A bar full of people",
		},
		{
			src: "https://static.wixstatic.com/media/54a4cd_66643885bf2e44d7a5f9396cd26f6e97~mv2.jpg/v1/fill/w_833,h_550,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_66643885bf2e44d7a5f9396cd26f6e97~mv2.jpg",
			alt: "An empty bar, lit from underneath",
		},
		{
			src: "https://static.wixstatic.com/media/54a4cd_5c02480400154bbebd0758eb2f8d7b8d~mv2_d_1600_1200_s_2.jpg/v1/fill/w_833,h_550,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_5c02480400154bbebd0758eb2f8d7b8d~mv2_d_1600_1200_s_2.jpg",
			alt: "Restaurant staff",
		},
	]
		.map((imgObj, index) => {
			const [src, alt] = [imgObj.src, imgObj.alt];
			return (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("div", { classList: "image-container" }, [
				(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("img", { src, alt }),
			]);
		})
		.reduce((acc, currentImg, index) => {
			if (!(index & 1)) {
				// If even, create tier with child img
				acc.push((0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("div", { classList: "tier" }, [currentImg]));
				return acc;
			} else {
				// If odd, add img child to previous tier
				acc[acc.length - 1].children.push(currentImg);
				return acc;
			}
		}, []);
}

function buildEvents() {
	const [eventsContent, photos, callToAction, modalElement] = [
		"content",
		"photos",
		"call-to-action",
		"modal close-modal hidden",
	].map((el) => {
		return (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("article", { classList: el });
	});

	eventsContent.children.push(
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("div", { classList: "art" }),
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("div", { classList: "text" }, createTextChildren())
	);

	photos.children.push(...createPhotos());

	callToAction.children.push(
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("p", { textContent: "Let us host your next event" }),
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("button", {
			classList: "inquire",
			type: "button",
			textContent: "Inquire Now",
		})
	);

	modalElement.children.push((0,_form_js__WEBPACK_IMPORTED_MODULE_0__.createForm)());

	return (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_1__.htmlFactory)(
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("div", { classList: "events dynamic" }, [
			eventsContent,
			photos,
			callToAction,
			modalElement,
		])
	);
}

function listenForClicks() {
	const modal = document.querySelector(".modal");

	const inquireBtns = document.querySelectorAll(".inquire");
	inquireBtns.forEach((button) => {
		button.addEventListener("click", () => {
			modal.classList.remove("hidden");
		});
	});

	const closeModalBtns = document.querySelectorAll(".close-modal");
	closeModalBtns.forEach((closer) => {
		closer.addEventListener("click", (e) => {
			if (e.target.classList.value.includes("close-modal")) {
				modal.classList.add("hidden");
			}
		});
	});

	const form = document.querySelector("form");
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		console.log("Form submitted.");
		modal.classList.add("hidden");
	});
}


/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createForm: () => (/* binding */ createForm)
/* harmony export */ });
/* harmony import */ var _dom_factories_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-factories.js */ "./src/dom-factories.js");


function createDetailSection() {
	// First form-item
	const eventType = (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "form-item" }, [
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("label", {
			htmlFor: "event-type",
			textContent: "Type of Event:",
		}),
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("input", {
			id: "event-type",
			type: "text",
			placeholder: "Birthday, Business Dinner, etc.",
			autocomplete: "off",
		}),
	]);

	// Multiple choice radio buttons
	const location = (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("fieldset", { classList: "location" }, [
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("legend", { textContent: "Location:" }),
		...[
			["asset", "329 Columbus Ave."],
			["tessa", "349 Amsterdam Ave."],
		].map((pair) => {
			return (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "form-item" }, [
				(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("label", {}, [
					(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("input", {
						name: "location",
						type: "radio",
						value: pair[0],
					}),
					(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("span", {
						textContent: pair[0].toUpperCase() + " - " + pair[1],
					}),
				]),
			]);
		}),
	]);

	// Last 2 rows of this section
	const byTheNumbers = (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.formRowFactory)([
		["Party Size", "number", "off"],
		["Date", "date", "off"],
		["Start Time", "time", "off"],
		["End Time", "time", "off"],
	]);

	return [eventType, location, ...byTheNumbers];
}

function createExtrasSection() {
	// 1 form-item with textarea and 1 with select
	const [textAreaItem, selectItem] = [
		["extra-info", "textarea"],
		["referral-source", "select"],
	].map((pair) => {
		return (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "form-item" }, [
			(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("label", { htmlFor: pair[0] }),
			(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(pair[1], { name: pair[0], id: pair[0] }),
		]);
	});

	// Add text content to each <label>
	textAreaItem.children[0].attributes.textContent =
		"Is there any additional information you would like to add?";
	selectItem.children[0].attributes.textContent =
		"How did you hear about us?";

	// Add attributes to <textarea>
	textAreaItem.children[1].attributes.rows = "6";
	textAreaItem.children[1].attributes.placeholder =
		"Surprises, Dietary Needs, etc.";

	// Add 9 <option>'s to <select>
	const optionsArray = [
		"EventUp",
		"Instagram",
		"Facebook",
		"Tripleseat Restaurants",
		"Search Engine",
		"Email",
		"Other",
		"Website",
	].map((text) => {
		return (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("option", {
			value: text.split(" ")[0].toLowerCase(),
			textContent: text,
		});
	});

	selectItem.children[1].children.push(
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("option", {
			value: "",
			textContent: "Select an option",
			selected: true,
		}),
		...optionsArray
	);

	return [textAreaItem, selectItem];
}

function createForm() {
	// Create sections containers for the complicated parts
	const [formContact, formDetails, formExtras] = [
		"form-contact",
		"form-details",
		"form-extras",
	].map((el) => {
		return (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("section", { classList: el });
	});

	formContact.children.push(
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("h4", { textContent: "Contact" }),
		...(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.formRowFactory)([
			["First Name", "text", "given-name"],
			["Last Name", "text", "family-name"],
			["Email", "email", "email"],
			["Phone", "tel", "tel"],
			["Company", "text", "organization"],
		])
	);

	formDetails.children.push(
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("h4", { textContent: "Event Details" }),
		...createDetailSection()
	);

	formExtras.children.push(
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("h4", { textContent: "Extras" }),
		...createExtrasSection()
	);

	// Create form element and overarching structure
	const formElement = (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("form", {}, [
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("section", { classList: "form-header" }, [
			(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("h3", { textContent: "Let's get some info!" }),
			(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("button", {
				type: "button",
				classList: "close-modal close-btn",
				id: "close-modal",
				textContent: "×",
			}),
		]),
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "form-content" }, [
			formContact,
			formDetails,
			formExtras,
		]),
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("button", { type: "submit", textContent: "Submit" }),
	]);
	return formElement;
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildHome: () => (/* binding */ buildHome)
/* harmony export */ });
/* harmony import */ var _dom_factories_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-factories.js */ "./src/dom-factories.js");


function buildHome() {
	const heroText = (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "hero-text" }, [
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("h1", { classList: "brand", textContent: "AE" }),
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "reservations" }, [
			(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("a", {
				href: "https://resy.com/cities/ny/asset",
				textContent: "reservations",
			}),
		]),
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "scroll-down" }, [
			(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("a", { href: "#hours" }, [
				(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("i", {
					classList: "fa fa-angle-down",
				}),
			]),
		]),
	]);

	const lanterns = (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "lanterns" });
	for (let i = 0; i < 3; i++) {
		lanterns.children.push(
			(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "lantern" }, [
				...["top", "body", "bottom"].map((text) => {
					return (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", {
						classList: text,
					});
				}),
			])
		);
	}

	const hoursDetails = [
		{
			schedule: "operating hours",
			hoursText: {
				"monday-friday": "4pm-11pm",
				saturday: "2pm-2am",
				sunday: "2pm-10pm",
			},
		},
		{
			schedule: "dinner hours",
			hoursText: {
				"monday-thursday": "5pm-10pm",
				friday: "5pm-11pm",
				saturday: "2pm-11pm",
				sunday: "2pm-9pm",
			},
		},
		{
			schedule: "happy hour",
			hoursText: {
				"monday-friday": "4pm-6pm",
				saturday: "10pm-12am",
			},
		},
	];

	const hoursDivs = hoursDetails.map((hoursObject) => {
		return (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(
			"div",
			{
				classList: hoursObject.schedule.split(" ").join("-"),
			},
			[
				(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("h2", { textContent: hoursObject.schedule + ":" }),
				...Object.entries(hoursObject.hoursText).map((entry) => {
					return (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("p", {
						textContent: `${entry[0]}: ${entry[1]} `,
					});
				}),
			]
		);
	});

	const homeDiv = (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "home dynamic" }, [
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("section", { classList: "hero" }, [
			(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "art" }),
			heroText,
			lanterns,
		]),
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("section", { classList: "hours-container" }, [
			(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "hours", id: "hours" }, hoursDivs),
		]),
	]);
	return (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.htmlFactory)(homeDiv);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMenu: () => (/* binding */ buildMenu)
/* harmony export */ });
/* harmony import */ var _dom_factories_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-factories.js */ "./src/dom-factories.js");


function buildMenu() {
	const dinnerLink =
		"https://www.assetrestaurant.com/_files/ugd/54a4cd_3a7a0a55ae744fceaec853bc0b19c7b2.pdf";
	const wineLink =
		"https://www.assetrestaurant.com/_files/ugd/54a4cd_381e50de69ac4b3dae5f805513c334d6.pdf";

	return (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.htmlFactory)(
		(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "menu dynamic" }, [
			(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "menu-art" }),
			(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "menu-text" }, [
				...["dinner", "wine"].map((text) => {
					return (0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("a", {
						textContent: text,
						classList: "menu-link",
						href: text === "dinner" ? dinnerLink : wineLink,
						target: "_blank",
					});
				}),
				(0,_dom_factories_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("h1", { classList: "brand", textContent: "AE" }),
			]),
		])
	);
}


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.js */ "./src/event.js");
/* harmony import */ var _about_us_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us.js */ "./src/about-us.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");
/* harmony import */ var _styles_reboot_util_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/reboot-util.css */ "./src/styles/reboot-util.css");
/* harmony import */ var _styles_constants_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/constants.css */ "./src/styles/constants.css");
/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/home.css */ "./src/styles/home.css");
/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/menu.css */ "./src/styles/menu.css");
/* harmony import */ var _styles_events_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/events.css */ "./src/styles/events.css");
/* harmony import */ var _styles_about_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/about.css */ "./src/styles/about.css");












const allContent = document.getElementById("all-content");
allContent.textContent = "";
[...(0,_constants_js__WEBPACK_IMPORTED_MODULE_4__.buildConstants)()].forEach((section) => allContent.appendChild(section));

const changingContent = document.getElementById("changing-content");
changingContent.appendChild((0,_about_us_js__WEBPACK_IMPORTED_MODULE_3__.buildAboutUs)());

const sidebar = document.querySelector(".sidebar");
document.querySelectorAll(".sidebar-toggler").forEach((button) => {
	button.addEventListener("click", () => {
		sidebar.classList.toggle("open");
	});
});

document.querySelectorAll(".nav-btn").forEach((button) => {
	button.addEventListener("click", (e) => {
		handleBuildClick(e.target.id);
	});
});

function handleBuildClick(tabChoice) {
	changingContent.textContent = "";
	changingContent.appendChild(
		{
			"home-btn": (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.buildHome)(),
			"events-btn": (0,_event_js__WEBPACK_IMPORTED_MODULE_2__.buildEvents)(),
			"menu-btn": (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.buildMenu)(),
			"about-btn": (0,_about_us_js__WEBPACK_IMPORTED_MODULE_3__.buildAboutUs)(),
		}[tabChoice]
	);
	sidebar.classList = "sidebar";
	if (tabChoice === "events-btn") {
		(0,_event_js__WEBPACK_IMPORTED_MODULE_2__.listenForClicks)();
	}
}

document.getElementById("contact-btn").addEventListener("click", () => {
	handleBuildClick("about-btn");
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDJGQUEyRixVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksY0FBYyxhQUFhLFdBQVcsYUFBYSxjQUFjLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLGFBQWEsYUFBYSxZQUFZLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssTUFBTSxLQUFLLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxXQUFXLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksY0FBYyxhQUFhLFlBQVksS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLGFBQWEsY0FBYyxNQUFNLGFBQWEsV0FBVyxZQUFZLE9BQU8sYUFBYSxjQUFjLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxhQUFhLFdBQVcsWUFBWSxZQUFZLFlBQVksY0FBYyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFlBQVksWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLGNBQWMsTUFBTSxVQUFVLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxZQUFZLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxtREFBbUQsWUFBWSxHQUFHLHVFQUF1RSxvQkFBb0IsZUFBZSxpQkFBaUIsZUFBZSxvQkFBb0Isb0JBQW9CLDJCQUEyQix1QkFBdUIsdUNBQXVDLG9CQUFvQixvREFBb0QsdUJBQXVCLGNBQWMsbUJBQW1CLG9CQUFvQixLQUFLLHNCQUFzQixzQkFBc0IsS0FBSyxpQ0FBaUMsa0JBQWtCLHVCQUF1Qix3REFBd0QsbUJBQW1CLGdCQUFnQixvQkFBb0IsT0FBTyx3QkFBd0Isc0JBQXNCLE9BQU8sS0FBSyxHQUFHLGdCQUFnQixzQkFBc0Isa0NBQWtDLDhDQUE4QyxHQUFHLFNBQVMsa0JBQWtCLDJCQUEyQixZQUFZLGNBQWMsZ0JBQWdCLHVCQUF1Qix3QkFBd0IsS0FBSyxzQkFBc0IsNEJBQTRCLEtBQUssaUNBQWlDLDBCQUEwQiw4QkFBOEIsS0FBSyxHQUFHLFlBQVksd0JBQXdCLGtCQUFrQix3QkFBd0IsbUNBQW1DLHNEQUFzRCxvQkFBb0IscUJBQXFCLG9CQUFvQiw4QkFBOEIsS0FBSyxrQkFBa0Isb0JBQW9CLEtBQUssaUNBQWlDLG9CQUFvQixLQUFLLEdBQUcsdUlBQXVJLGtEQUFrRCxvQkFBb0IsMkJBQTJCLEdBQUcsMkhBQTJILG9CQUFvQixjQUFjLHFDQUFxQyxnQkFBZ0IsdUJBQXVCLG9CQUFvQiwyQkFBMkIsY0FBYyxzREFBc0QscUNBQXFDLGFBQWEsY0FBYyxLQUFLLGtCQUFrQixvQkFBb0IsS0FBSyxpQkFBaUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsZ0JBQWdCLDJCQUEyQixzQkFBc0IsZ0NBQWdDLEtBQUssNEJBQTRCLG9CQUFvQiw2QkFBNkIsdUJBQXVCLEtBQUssc0JBQXNCLHdCQUF3QixxQ0FBcUMseUJBQXlCLGlCQUFpQiwrQkFBK0IsOEJBQThCLE9BQU8sS0FBSyxpQ0FBaUMsMEJBQTBCLDBCQUEwQixvQkFBb0Isc0JBQXNCLE9BQU8sS0FBSyxHQUFHLG1CQUFtQix3QkFBd0Isb0JBQW9CLGVBQWUsNkNBQTZDLDRDQUE0QyxLQUFLLEdBQUcsNEVBQTRFO0FBQ3orSTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaE12QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU8sd0ZBQXdGLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxZQUFZLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsWUFBWSxhQUFhLFlBQVksS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsWUFBWSxjQUFjLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxhQUFhLFdBQVcsYUFBYSxXQUFXLFlBQVksY0FBYyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxjQUFjLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sT0FBTyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxjQUFjLE1BQU0sWUFBWSxNQUFNLE1BQU0sa0RBQWtELGVB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHNGQUFzRixhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxXQUFXLFVBQVUsYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLFlBQVksVUFBVSxXQUFXLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0s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QTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMLElBQUksNERBQVMsU0FBUyx1Q0FBdUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN4QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0M7QUFDQTtBQUNvQjtBQUNiO0FBQ0c7QUFDZDtBQUNGO0FBQ0w7QUFDQTtBQUNFO0FBQ0Q7O0FBRTVCO0FBQ0E7QUFDQSxJQUFJLDZEQUFjOztBQUVsQjtBQUNBLDRCQUE0QiwwREFBWTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbURBQVM7QUFDeEIsaUJBQWlCLHNEQUFXO0FBQzVCLGVBQWUsbURBQVM7QUFDeEIsZ0JBQWdCLDBEQUFZO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFLDBEQUFlO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvc3R5bGVzL2Fib3V0LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvc3R5bGVzL2NvbnN0YW50cy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL3N0eWxlcy9ldmVudHMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9zdHlsZXMvaG9tZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL3N0eWxlcy9tZW51LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvc3R5bGVzL3JlYm9vdC11dGlsLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9zdHlsZXMvYWJvdXQuY3NzP2QxMTciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL3N0eWxlcy9jb25zdGFudHMuY3NzPzViNzYiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL3N0eWxlcy9ldmVudHMuY3NzPzgwZTgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL3N0eWxlcy9ob21lLmNzcz80YjUxIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9zdHlsZXMvbWVudS5jc3M/NzAwYSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvc3R5bGVzL3JlYm9vdC11dGlsLmNzcz9iMzk3Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL2Fib3V0LXVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL2RvbS1mYWN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL2V2ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmFib3V0IHtcblx0ZmxleDogMTtcblx0aGVpZ2h0OiAxMDAlO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWJvdXQgcCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRnYXA6IDZweDtcblxuXHRmb250LXNpemU6IDI1cHg7XG59XG5cbi5tYXAtY29udGFpbmVyIHtcblx0LS1zdHJpbmctY29sb3I6IHNpbHZlcjtcblx0LS1zaGFkb3ctY29sb3I6ICM2NjE5MTk7XG5cdC0tc2hhZG93LWNvbG9yLXN0cmluZzogI2QwMTYxNjtcblxuXHR3aWR0aDogbWluKDYwMHB4LCAxMDAlKTtcblx0cGFkZGluZzogM3B4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubWFwLXRhY2sge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGJvdHRvbTogLTdweDtcblx0d2lkdGg6IDEwcHg7XG5cdGhlaWdodDogMTBweDtcblx0YWxpZ24tc2VsZjogY2VudGVyO1xuXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwZDBkMGQ7XG59XG5cbi5tYXAtc3RyaW5nIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRib3R0b206IC0ycHg7XG5cdGhlaWdodDogNTBweDtcblx0ei1pbmRleDogLTE7XG5cblx0ZGlzcGxheTogZmxleDtcblx0cGFkZGluZzogMCAxNXB4O1xuXG5cdCYgPiAqIHtcblx0XHRmbGV4OiAxO1xuXHR9XG59XG5cbi5tYXAtc3RyaW5nIC5sZWZ0IHtcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuXHRcdHRvIGJvdHRvbSByaWdodCxcblx0XHR0cmFuc3BhcmVudCAwIDQ5JSxcblx0XHR2YXIoLS1zdHJpbmctY29sb3IpIDQ5JSA1MSUsXG5cdFx0dmFyKC0tc2hhZG93LWNvbG9yLXN0cmluZykgNTElIDUyJSxcblx0XHR0cmFuc3BhcmVudCA1NCUgMTAwJVxuXHQpO1xufVxuXG4ubWFwLXN0cmluZyAucmlnaHQge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG5cdFx0dG8gYm90dG9tIGxlZnQsXG5cdFx0dHJhbnNwYXJlbnQgMCA0OSUsXG5cdFx0dmFyKC0tc3RyaW5nLWNvbG9yKSA0OSUgNTElLFxuXHRcdHZhcigtLXNoYWRvdy1jb2xvci1zdHJpbmcpIDUxJSA1MiUsXG5cdFx0dHJhbnNwYXJlbnQgNTQlIDEwMCVcblx0KTtcbn1cblxuLm1hcC13b29kIHtcblx0aGVpZ2h0OiAyNXB4O1xuXHRiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgI2ZmN2M0MDI2LCAjMDAwMDAwMzMpLFxuXHRcdHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYyNTQ5NjIzNTAyNS1kNzgzYWJmMDYxYzg/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTQ4MCZxPTgwKTtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm1hcC10b3Age1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG5cdGJveC1zaGFkb3c6IDhweCAzcHggNXB4IHZhcigtLXNoYWRvdy1jb2xvcik7XG59XG5cbi5tYXAtYm90dG9tIHtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuXHRib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuXHRib3gtc2hhZG93OiA4cHggM3B4IDVweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xufVxuXG4ubWFwLWNhbnZhcyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY2ZTY7XG5cdGJveC1zaGFkb3c6IDZweCAzcHggNXB4IDJweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xufVxuXG5pZnJhbWUge1xuXHRib3JkZXI6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYWJvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsT0FBTztDQUNQLFlBQVk7O0NBRVosYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qiw2QkFBNkI7Q0FDN0IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixRQUFROztDQUVSLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLDhCQUE4Qjs7Q0FFOUIsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWixhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixXQUFXO0NBQ1gsWUFBWTtDQUNaLGtCQUFrQjs7Q0FFbEIsbUJBQW1CO0NBQ25CLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osWUFBWTtDQUNaLFdBQVc7O0NBRVgsYUFBYTtDQUNiLGVBQWU7O0NBRWY7RUFDQyxPQUFPO0NBQ1I7QUFDRDs7QUFFQTtDQUNDOzs7Ozs7RUFNQztBQUNGOztBQUVBO0NBQ0M7Ozs7OztFQU1DO0FBQ0Y7O0FBRUE7Q0FDQyxZQUFZO0NBQ1o7NktBQzRLO0NBQzVLLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLDJCQUEyQjtDQUMzQiw0QkFBNEI7Q0FDNUIsMkNBQTJDO0FBQzVDOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLDRCQUE0QjtDQUM1QiwyQ0FBMkM7QUFDNUM7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsK0NBQStDO0FBQ2hEOztBQUVBO0NBQ0MsWUFBWTtDQUNaLG1CQUFtQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYWJvdXQge1xcblxcdGZsZXg6IDE7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWJvdXQgcCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRnYXA6IDZweDtcXG5cXG5cXHRmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi5tYXAtY29udGFpbmVyIHtcXG5cXHQtLXN0cmluZy1jb2xvcjogc2lsdmVyO1xcblxcdC0tc2hhZG93LWNvbG9yOiAjNjYxOTE5O1xcblxcdC0tc2hhZG93LWNvbG9yLXN0cmluZzogI2QwMTYxNjtcXG5cXG5cXHR3aWR0aDogbWluKDYwMHB4LCAxMDAlKTtcXG5cXHRwYWRkaW5nOiAzcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWFwLXRhY2sge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3R0b206IC03cHg7XFxuXFx0d2lkdGg6IDEwcHg7XFxuXFx0aGVpZ2h0OiAxMHB4O1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwZDBkMGQ7XFxufVxcblxcbi5tYXAtc3RyaW5nIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym90dG9tOiAtMnB4O1xcblxcdGhlaWdodDogNTBweDtcXG5cXHR6LWluZGV4OiAtMTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHBhZGRpbmc6IDAgMTVweDtcXG5cXG5cXHQmID4gKiB7XFxuXFx0XFx0ZmxleDogMTtcXG5cXHR9XFxufVxcblxcbi5tYXAtc3RyaW5nIC5sZWZ0IHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0dG8gYm90dG9tIHJpZ2h0LFxcblxcdFxcdHRyYW5zcGFyZW50IDAgNDklLFxcblxcdFxcdHZhcigtLXN0cmluZy1jb2xvcikgNDklIDUxJSxcXG5cXHRcXHR2YXIoLS1zaGFkb3ctY29sb3Itc3RyaW5nKSA1MSUgNTIlLFxcblxcdFxcdHRyYW5zcGFyZW50IDU0JSAxMDAlXFxuXFx0KTtcXG59XFxuXFxuLm1hcC1zdHJpbmcgLnJpZ2h0IHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0dG8gYm90dG9tIGxlZnQsXFxuXFx0XFx0dHJhbnNwYXJlbnQgMCA0OSUsXFxuXFx0XFx0dmFyKC0tc3RyaW5nLWNvbG9yKSA0OSUgNTElLFxcblxcdFxcdHZhcigtLXNoYWRvdy1jb2xvci1zdHJpbmcpIDUxJSA1MiUsXFxuXFx0XFx0dHJhbnNwYXJlbnQgNTQlIDEwMCVcXG5cXHQpO1xcbn1cXG5cXG4ubWFwLXdvb2Qge1xcblxcdGhlaWdodDogMjVweDtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgI2ZmN2M0MDI2LCAjMDAwMDAwMzMpLFxcblxcdFxcdHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYyNTQ5NjIzNTAyNS1kNzgzYWJmMDYxYzg/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTQ4MCZxPTgwKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4ubWFwLXRvcCB7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XFxuXFx0Ym94LXNoYWRvdzogOHB4IDNweCA1cHggdmFyKC0tc2hhZG93LWNvbG9yKTtcXG59XFxuXFxuLm1hcC1ib3R0b20ge1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcXG5cXHRib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xcblxcdGJveC1zaGFkb3c6IDhweCAzcHggNXB4IHZhcigtLXNoYWRvdy1jb2xvcik7XFxufVxcblxcbi5tYXAtY2FudmFzIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNmU2O1xcblxcdGJveC1zaGFkb3c6IDZweCAzcHggNXB4IDJweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xcbn1cXG5cXG5pZnJhbWUge1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNjaGFuZ2luZy1jb250ZW50IHtcblx0ZmxleDogMTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBTaWRlYmFyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLnNpZGViYXIge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHotaW5kZXg6IDE7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDBweDtcblx0cGFkZGluZzogMjBweCAwO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdG92ZXJmbG93LXg6IGhpZGRlbjtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1tYWluKTtcblx0Zm9udC1zaXplOiA0MHB4O1xuXHRib3gtc2hhZG93OiAwcHggMHB4IDdweCB2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKTtcblxuXHR0cmFuc2l0aW9uOiAwLjVzO1xuXG5cdCYub3BlbiB7XG5cdFx0d2lkdGg6IDMwMHB4O1xuXHRcdHBhZGRpbmc6IDIwcHg7XG5cdH1cblxuXHQjY2xvc2Utc2lkZWJhciB7XG5cdFx0YWxpZ24tc2VsZjogZW5kO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0cG9zaXRpb246IHN0YXRpYztcblxuXHRcdGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLWFjY2VudC1tYWluLWRhcmspO1xuXHRcdGJvcmRlcjogbm9uZTtcblxuXHRcdCYub3BlbiB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHR9XG5cblx0XHQjY2xvc2Utc2lkZWJhciB7XG5cdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdH1cblx0fVxufVxuXG4uY2xvc2UtYnRuIHtcblx0LS1mb250LXNpemU6IDUwcHg7XG5cblx0Zm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuXHRsaW5lLWhlaWdodDogY2FsYyh2YXIoLS1mb250LXNpemUpICogMC42KTtcbn1cblxubmF2IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleDogMTtcblx0Z2FwOiA1MHB4O1xuXG5cdCYgYnV0dG9uIHtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdG1hcmdpbi1sZWZ0OiAyMnB4O1xuXHR9XG5cblx0JiBidXR0b246aG92ZXIge1xuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWgxKTtcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdH1cbn1cblxuaGVhZGVyIHtcblx0cGFkZGluZy1yaWdodDogMjBweDtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG5cdGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLWFjY2VudC1tYWluLWRhcmspO1xuXHRmb250LXNpemU6IDI0cHg7XG5cblx0I29wZW4tc2lkZWJhciB7XG5cdFx0cGFkZGluZzogMTVweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblx0fVxuXG5cdCYgLnNvY2lhbHMge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1NpZGViYXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIE1haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jY2hhbmdpbmctY29udGVudCB7XG5cdG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tZm9vdGVyLWhlaWdodCkgKiAyKTtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9NYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBGb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG5mb290ZXIge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGJvdHRvbTogMDtcblx0bWluLWhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nOiAxMHB4IDIwcHg7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAxMHB4O1xuXG5cdGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLWFjY2VudC1tYWluLWRhcmspO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1tYWluKTtcblxuXHQmID4gKiB7XG5cdFx0ZmxleDogMTtcblx0fVxuXG5cdCYgLnNvY2lhbHMge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblxuXHQmIC5hdXRob3Ige1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRnYXA6IDEwcHg7XG5cblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LXN0cm9uZyk7XG5cdH1cblxuXHQmIC5jb250YWN0LWNvbnRhaW5lciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBlbmQ7XG5cdH1cblxuXHQmICNjb250YWN0LWJ0biB7XG5cdFx0cGFkZGluZzogNXB4IDEwcHg7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRcdGNvbG9yOiB2YXIoLS1iZy1tYWluKTtcblx0XHR9XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0XHQmIC5zb2NpYWxzIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0fVxuXHR9XG59XG5cbi5mYS5mYS1naXRodWIge1xuXHRjb2xvcjogY3VycmVudENvbG9yO1xuXHRmb250LXNpemU6IDMwcHg7XG5cblx0Jjpob3ZlciB7XG5cdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZS1pbi1vdXQ7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZykgc2NhbGUoMS4zKTtcblx0fVxufVxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb25zdGFudHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsT0FBTztBQUNSOztBQUVBLG9EQUFvRDs7QUFFcEQ7Q0FDQyxlQUFlO0NBQ2YsVUFBVTtDQUNWLFlBQVk7Q0FDWixVQUFVO0NBQ1YsZUFBZTs7Q0FFZixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGtCQUFrQjs7Q0FFbEIsZ0NBQWdDO0NBQ2hDLGVBQWU7Q0FDZiwrQ0FBK0M7O0NBRS9DLGdCQUFnQjs7Q0FFaEI7RUFDQyxZQUFZO0VBQ1osYUFBYTtDQUNkOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLFdBQVc7RUFDWCxnQkFBZ0I7O0VBRWhCLCtDQUErQztFQUMvQyxZQUFZOztFQUVaO0dBQ0MsV0FBVztFQUNaOztFQUVBO0dBQ0MsYUFBYTtFQUNkO0NBQ0Q7QUFDRDs7QUFFQTtDQUNDLGlCQUFpQjs7Q0FFakIsMkJBQTJCO0NBQzNCLHlDQUF5QztBQUMxQzs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsT0FBTztDQUNQLFNBQVM7O0NBRVQ7RUFDQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MscUJBQXFCO0NBQ3RCOztDQUVBO0VBQ0MsbUJBQW1CO0VBQ25CLHVCQUF1QjtDQUN4QjtBQUNEOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsOEJBQThCOztDQUU5QiwrQ0FBK0M7Q0FDL0MsZUFBZTs7Q0FFZjtFQUNDLGFBQWE7RUFDYix1QkFBdUI7Q0FDeEI7O0NBRUE7RUFDQyxhQUFhO0NBQ2Q7O0NBRUE7RUFDQyxhQUFhO0NBQ2Q7QUFDRDs7QUFFQSxxREFBcUQ7O0FBRXJELGlEQUFpRDs7QUFFakQ7Q0FDQyw2Q0FBNkM7O0NBRTdDLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUEsa0RBQWtEOztBQUVsRCxtREFBbUQ7O0FBRW5EO0NBQ0MsZUFBZTtDQUNmLFNBQVM7Q0FDVCxnQ0FBZ0M7Q0FDaEMsV0FBVztDQUNYLGtCQUFrQjs7Q0FFbEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTOztDQUVULCtDQUErQztDQUMvQyxnQ0FBZ0M7O0NBRWhDO0VBQ0MsT0FBTztDQUNSOztDQUVBO0VBQ0MsYUFBYTtDQUNkOztDQUVBO0VBQ0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUzs7RUFFVCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtDQUMxQjs7Q0FFQTtFQUNDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0NBQ2pCOztDQUVBO0VBQ0MsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixrQkFBa0I7O0VBRWxCO0dBQ0Msc0JBQXNCO0dBQ3RCLHFCQUFxQjtFQUN0QjtDQUNEOztDQUVBO0VBQ0MsbUJBQW1CO0VBQ25CLG1CQUFtQjs7RUFFbkI7R0FDQyxhQUFhO0VBQ2Q7Q0FDRDtBQUNEOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGVBQWU7O0NBRWY7RUFDQyxzQ0FBc0M7RUFDdEMscUNBQXFDO0NBQ3RDO0FBQ0Q7QUFDQSxvREFBb0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2NoYW5naW5nLWNvbnRlbnQge1xcblxcdGZsZXg6IDE7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgU2lkZWJhciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnNpZGViYXIge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR6LWluZGV4OiAxO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMHB4O1xcblxcdHBhZGRpbmc6IDIwcHggMDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLW1haW4pO1xcblxcdGZvbnQtc2l6ZTogNDBweDtcXG5cXHRib3gtc2hhZG93OiAwcHggMHB4IDdweCB2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKTtcXG5cXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcblxcblxcdCYub3BlbiB7XFxuXFx0XFx0d2lkdGg6IDMwMHB4O1xcblxcdFxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0fVxcblxcblxcdCNjbG9zZS1zaWRlYmFyIHtcXG5cXHRcXHRhbGlnbi1zZWxmOiBlbmQ7XFxuXFx0fVxcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdHBvc2l0aW9uOiBzdGF0aWM7XFxuXFxuXFx0XFx0Ym94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tYWNjZW50LW1haW4tZGFyayk7XFxuXFx0XFx0Ym9yZGVyOiBub25lO1xcblxcblxcdFxcdCYub3BlbiB7XFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0fVxcblxcblxcdFxcdCNjbG9zZS1zaWRlYmFyIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbi5jbG9zZS1idG4ge1xcblxcdC0tZm9udC1zaXplOiA1MHB4O1xcblxcblxcdGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG5cXHRsaW5lLWhlaWdodDogY2FsYyh2YXIoLS1mb250LXNpemUpICogMC42KTtcXG59XFxuXFxubmF2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0ZmxleDogMTtcXG5cXHRnYXA6IDUwcHg7XFxuXFxuXFx0JiBidXR0b24ge1xcblxcdFxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDIycHg7XFxuXFx0fVxcblxcblxcdCYgYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRjb2xvcjogdmFyKC0tdGV4dC1oMSk7XFxuXFx0fVxcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0fVxcbn1cXG5cXG5oZWFkZXIge1xcblxcdHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG5cXHRib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKTtcXG5cXHRmb250LXNpemU6IDI0cHg7XFxuXFxuXFx0I29wZW4tc2lkZWJhciB7XFxuXFx0XFx0cGFkZGluZzogMTVweDtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXHR9XFxuXFxuXFx0JiAuc29jaWFscyB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHR9XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1NpZGViYXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuI2NoYW5naW5nLWNvbnRlbnQge1xcblxcdG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tZm9vdGVyLWhlaWdodCkgKiAyKTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL01haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5mb290ZXIge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRib3R0b206IDA7XFxuXFx0bWluLWhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cGFkZGluZzogMTBweCAyMHB4O1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDEwcHg7XFxuXFxuXFx0Ym94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tYWNjZW50LW1haW4tZGFyayk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbWFpbik7XFxuXFxuXFx0JiA+ICoge1xcblxcdFxcdGZsZXg6IDE7XFxuXFx0fVxcblxcblxcdCYgLnNvY2lhbHMge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcblxcdCYgLmF1dGhvciB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGdhcDogMTBweDtcXG5cXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdFxcdGNvbG9yOiB2YXIoLS10ZXh0LXN0cm9uZyk7XFxuXFx0fVxcblxcblxcdCYgLmNvbnRhY3QtY29udGFpbmVyIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IGVuZDtcXG5cXHR9XFxuXFxuXFx0JiAjY29udGFjdC1idG4ge1xcblxcdFxcdHBhZGRpbmc6IDVweCAxMHB4O1xcblxcdFxcdGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuXFx0XFx0Jjpob3ZlciB7XFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRcXHRcXHRjb2xvcjogdmFyKC0tYmctbWFpbik7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0XFx0JiAuc29jaWFscyB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG4uZmEuZmEtZ2l0aHViIHtcXG5cXHRjb2xvcjogY3VycmVudENvbG9yO1xcblxcdGZvbnQtc2l6ZTogMzBweDtcXG5cXG5cXHQmOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLWluLW91dDtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKSBzY2FsZSgxLjMpO1xcblxcdH1cXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5ldmVudHMgLmNvbnRlbnQge1xuXHR3aWR0aDogOTAlO1xuXHRtYXJnaW46IGF1dG87XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAyMHB4O1xuXG5cdCYgLmFydCB7XG5cdFx0aGVpZ2h0OiAxNjBweDtcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG5cdH1cblxuXHQmIC50ZXh0IHtcblx0XHRtYXJnaW46IDIwcHggMDtcblx0XHRtYXgtd2lkdGg6IDY1Y2g7XG5cdH1cblxuXHQmIGgxIHtcblx0XHRmb250LXNpemU6IDMwcHg7XG5cdH1cblxuXHQmIGgyIHtcblx0XHRtYXJnaW46IDMwcHggMCAxNnB4O1xuXHR9XG5cblx0JiBwIHtcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRsaW5lLWhlaWdodDogMS41O1xuXHRcdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdH1cblxuXHQmIHA6bnRoLWxhc3QtY2hpbGQoMikge1xuXHRcdHdpZHRoOiBtaW4oMTAwJSwgNDQwcHgpO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRnYXA6IDJweDtcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdC0tYXJ0LXdpZHRoOiBtaW4oMzAwcHgsIDMwJSk7XG5cblx0XHRoZWlnaHQ6IGNhbGMoOTYwcHggLSA4dncpO1xuXHRcdHdpZHRoOiBtaW4oOTAlLCAxMTAwcHgpO1xuXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuXHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuXHRcdCYgLmFydCB7XG5cdFx0XHRmbGV4LXNocmluazogMDtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblx0XHR9XG5cblx0XHQmIC5jYWxsLXRvLWFjdGlvbiB7XG5cdFx0XHRhbGlnbi1pdGVtczogc3RhcnQ7XG5cdFx0XHRwYWRkaW5nOiA0MHB4IDA7XG5cdFx0fVxuXHR9XG59XG5cbi5waG90b3Mge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLnRpZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdCYgLmltYWdlLWNvbnRhaW5lciB7XG5cdFx0ZmxleC1ncm93OiAxO1xuXHR9XG5cblx0JiBpbWcge1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdH1cbn1cblxuLmV2ZW50cyAuY2FsbC10by1hY3Rpb24ge1xuXHRwYWRkaW5nOiA5MHB4IDA7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAyNHB4O1xuXG5cdCYgcCB7XG5cdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdG1hcmdpbjogMDtcblx0fVxuXG5cdCYgYnV0dG9uIHtcblx0XHRwYWRkaW5nOiAyMHB4O1xuXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcztcblx0fVxuXG5cdCYgYnV0dG9uOmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRcdGNvbG9yOiB2YXIoLS1iZy1tYWluKTtcblx0fVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIE1vZGFsICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLm1vZGFsIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR0b3A6IDA7XG5cdHotaW5kZXg6IDI7XG5cdGhlaWdodDogMTAwdmg7XG5cdHdpZHRoOiAxMDB2dztcblxuXHRkaXNwbGF5OiBncmlkO1xuXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjUpO1xuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcbn1cblxuZm9ybSB7XG5cdC0tZm9ybS1zcGFjZXI6IDEycHg7XG5cblx0bWF4LWhlaWdodDogODB2aDtcblx0cGFkZGluZzogMTJweDtcblx0d2lkdGg6IG1pbig5MHZ3LCAxMDAwcHgpO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogdmFyKC0tZm9ybS1zcGFjZXIpO1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG5cdGNvbG9yOiAjMDAwO1xuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uZm9ybS1oZWFkZXIge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmctbGVmdDogMnB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JtLWNvbnRlbnQge1xuXHRwYWRkaW5nOiB2YXIoLS1mb3JtLXNwYWNlcik7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogY2FsYyh2YXIoLS1mb3JtLXNwYWNlcikgKiAyLjUpO1xuXHRvdmVyZmxvdy15OiBzY3JvbGw7XG5cblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWlucHV0KTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdG92ZXJmbG93LXk6IGF1dG87XG5cdH1cbn1cblxuLmZvcm0tY29udGVudCBoNCB7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmZvcm0tY29udGFjdCxcbi5mb3JtLWRldGFpbHMsXG4uZm9ybS1leHRyYXMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IHZhcigtLWZvcm0tc3BhY2VyKTtcbn1cblxuLmZvcm0tcm93IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IHZhcigtLWZvcm0tc3BhY2VyKTtcbn1cblxuLmZvcm0taXRlbSB7XG5cdGZsZXg6IDE7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogY2FsYyh2YXIoLS1mb3JtLXNwYWNlcikgKiAwLjUpO1xufVxuXG4uZm9ybS1kZXRhaWxzIC5mb3JtLXJvdyAuZm9ybS1pdGVtIHtcblx0d2lkdGg6IDQ3JTtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbmlucHV0LFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuXHRwYWRkaW5nOiA2cHggMTBweDtcblxuXHRmb250LXNpemU6IG1heCgxNnB4LCAwLjlyZW0pO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1pbnB1dCk7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1pbnB1dCk7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuZmllbGRzZXQge1xuXHRwYWRkaW5nOiA4cHggOHB4IDEwcHg7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiBjYWxjKHZhcigtLWZvcm0tc3BhY2VyKSAqIDAuOCk7XG5cblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWlucHV0KTtcbn1cblxubGVnZW5kIHtcblx0cGFkZGluZzogNXB4IDhweDtcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWlucHV0KTtcbn1cblxubGFiZWwgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cbmxhYmVsIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB+IHNwYW4ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDZweDtcbn1cbmxhYmVsIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB+IHNwYW46YmVmb3JlIHtcblx0LS1yYWRpby1kaW1lbnNpb25zOiAxNXB4O1xuXG5cdGhlaWdodDogdmFyKC0tcmFkaW8tZGltZW5zaW9ucyk7XG5cdHdpZHRoOiB2YXIoLS1yYWRpby1kaW1lbnNpb25zKTtcblxuXHRjb250ZW50OiBcIlwiO1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1iZy1pbnB1dCk7XG5cdG1hcmdpbi1yaWdodDogNXB4O1xuXG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1pbnB1dCk7XG5cdGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlvLWRpbWVuc2lvbnMpO1xuXHR0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbmxhYmVsIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkIH4gc3BhbjpiZWZvcmUge1xuXHRib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1iZy1tYWluKTtcbn1cblxudGV4dGFyZWEge1xuXHRyZXNpemU6IHZlcnRpY2FsO1xufVxuXG5mb3JtIFt0eXBlPVwic3VibWl0XCJdIHtcblx0YWxpZ24tc2VsZjogY2VudGVyO1xuXHRwYWRkaW5nOiAxMnB4O1xuXHR3aWR0aDogbWluKDEwMCUsIDI4MHB4KTtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWgxKTtcblx0Ym9yZGVyLXJhZGl1czogMjAwcHg7XG5cblx0Zm9udC1zaXplOiAxLjVyZW07XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXG5cdCY6aG92ZXIge1xuXHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICM5MTZmMDg7XG5cdH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTW9kYWwgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2V2ZW50cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxVQUFVO0NBQ1YsWUFBWTs7Q0FFWixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixTQUFTOztDQUVUO0VBQ0MsYUFBYTtFQUNiLDJCQUEyQjtDQUM1Qjs7Q0FFQTtFQUNDLGNBQWM7RUFDZCxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixRQUFRO0NBQ1Q7O0NBRUE7RUFDQyw0QkFBNEI7O0VBRTVCLHlCQUF5QjtFQUN6Qix1QkFBdUI7O0VBRXZCLDJCQUEyQjtFQUMzQixv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IjpbXCIuZXZlbnRzIC5jb250ZW50IHtcXG5cXHR3aWR0aDogOTAlO1xcblxcdG1hcmdpbjogYXV0bztcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDIwcHg7XFxuXFxuXFx0JiAuYXJ0IHtcXG5cXHRcXHRoZWlnaHQ6IDE2MHB4O1xcblxcdFxcdGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG5cXHR9XFxuXFxuXFx0JiAudGV4dCB7XFxuXFx0XFx0bWFyZ2luOiAyMHB4IDA7XFxuXFx0XFx0bWF4LXdpZHRoOiA2NWNoO1xcblxcdH1cXG5cXG5cXHQmIGgxIHtcXG5cXHRcXHRmb250LXNpemU6IDMwcHg7XFxuXFx0fVxcblxcblxcdCYgaDIge1xcblxcdFxcdG1hcmdpbjogMzBweCAwIDE2cHg7XFxuXFx0fVxcblxcblxcdCYgcCB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0XFx0bGluZS1oZWlnaHQ6IDEuNTtcXG5cXHRcXHRsZXR0ZXItc3BhY2luZzogMXB4O1xcblxcdH1cXG5cXG5cXHQmIHA6bnRoLWxhc3QtY2hpbGQoMikge1xcblxcdFxcdHdpZHRoOiBtaW4oMTAwJSwgNDQwcHgpO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRnYXA6IDJweDtcXG5cXHR9XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0LS1hcnQtd2lkdGg6IG1pbigzMDBweCwgMzAlKTtcXG5cXG5cXHRcXHRoZWlnaHQ6IGNhbGMoOTYwcHggLSA4dncpO1xcblxcdFxcdHdpZHRoOiBtaW4oOTAlLCAxMTAwcHgpO1xcblxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG5cXHRcXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuXFx0XFx0JiAuYXJ0IHtcXG5cXHRcXHRcXHRmbGV4LXNocmluazogMDtcXG5cXHRcXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0XFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmIC5jYWxsLXRvLWFjdGlvbiB7XFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IHN0YXJ0O1xcblxcdFxcdFxcdHBhZGRpbmc6IDQwcHggMDtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG4ucGhvdG9zIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRpZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG5cXHQmIC5pbWFnZS1jb250YWluZXIge1xcblxcdFxcdGZsZXgtZ3JvdzogMTtcXG5cXHR9XFxuXFxuXFx0JiBpbWcge1xcblxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRvYmplY3QtZml0OiBjb3ZlcjtcXG5cXHR9XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHR9XFxufVxcblxcbi5ldmVudHMgLmNhbGwtdG8tYWN0aW9uIHtcXG5cXHRwYWRkaW5nOiA5MHB4IDA7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAyNHB4O1xcblxcblxcdCYgcCB7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdFxcdG1hcmdpbjogMDtcXG5cXHR9XFxuXFxuXFx0JiBidXR0b24ge1xcblxcdFxcdHBhZGRpbmc6IDIwcHg7XFxuXFxuXFx0XFx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRcXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcblxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjNzO1xcblxcdH1cXG5cXG5cXHQmIGJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRcXHRjb2xvcjogdmFyKC0tYmctbWFpbik7XFxuXFx0fVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIE1vZGFsICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ubW9kYWwge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDA7XFxuXFx0ei1pbmRleDogMjtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNSk7XFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxufVxcblxcbmZvcm0ge1xcblxcdC0tZm9ybS1zcGFjZXI6IDEycHg7XFxuXFxuXFx0bWF4LWhlaWdodDogODB2aDtcXG5cXHRwYWRkaW5nOiAxMnB4O1xcblxcdHdpZHRoOiBtaW4oOTB2dywgMTAwMHB4KTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiB2YXIoLS1mb3JtLXNwYWNlcik7XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcXG5cXHRjb2xvcjogIzAwMDtcXG5cXHRib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4uZm9ybS1oZWFkZXIge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nLWxlZnQ6IDJweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IHtcXG5cXHRwYWRkaW5nOiB2YXIoLS1mb3JtLXNwYWNlcik7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogY2FsYyh2YXIoLS1mb3JtLXNwYWNlcikgKiAyLjUpO1xcblxcdG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItaW5wdXQpO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRvdmVyZmxvdy15OiBhdXRvO1xcblxcdH1cXG59XFxuXFxuLmZvcm0tY29udGVudCBoNCB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uZm9ybS1jb250YWN0LFxcbi5mb3JtLWRldGFpbHMsXFxuLmZvcm0tZXh0cmFzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiB2YXIoLS1mb3JtLXNwYWNlcik7XFxufVxcblxcbi5mb3JtLXJvdyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0Z2FwOiB2YXIoLS1mb3JtLXNwYWNlcik7XFxufVxcblxcbi5mb3JtLWl0ZW0ge1xcblxcdGZsZXg6IDE7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogY2FsYyh2YXIoLS1mb3JtLXNwYWNlcikgKiAwLjUpO1xcbn1cXG5cXG4uZm9ybS1kZXRhaWxzIC5mb3JtLXJvdyAuZm9ybS1pdGVtIHtcXG5cXHR3aWR0aDogNDclO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG5cXHRwYWRkaW5nOiA2cHggMTBweDtcXG5cXG5cXHRmb250LXNpemU6IG1heCgxNnB4LCAwLjlyZW0pO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWlucHV0KTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItaW5wdXQpO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuZmllbGRzZXQge1xcblxcdHBhZGRpbmc6IDhweCA4cHggMTBweDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiBjYWxjKHZhcigtLWZvcm0tc3BhY2VyKSAqIDAuOCk7XFxuXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWlucHV0KTtcXG59XFxuXFxubGVnZW5kIHtcXG5cXHRwYWRkaW5nOiA1cHggOHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1pbnB1dCk7XFxufVxcblxcbmxhYmVsIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcbmxhYmVsIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0gfiBzcGFuIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiA2cHg7XFxufVxcbmxhYmVsIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0gfiBzcGFuOmJlZm9yZSB7XFxuXFx0LS1yYWRpby1kaW1lbnNpb25zOiAxNXB4O1xcblxcblxcdGhlaWdodDogdmFyKC0tcmFkaW8tZGltZW5zaW9ucyk7XFxuXFx0d2lkdGg6IHZhcigtLXJhZGlvLWRpbWVuc2lvbnMpO1xcblxcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWJnLWlucHV0KTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXG5cXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItaW5wdXQpO1xcblxcdGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlvLWRpbWVuc2lvbnMpO1xcblxcdHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxubGFiZWwgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkIH4gc3BhbjpiZWZvcmUge1xcblxcdGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJnLW1haW4pO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuXFx0cmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuZm9ybSBbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAxMnB4O1xcblxcdHdpZHRoOiBtaW4oMTAwJSwgMjgwcHgpO1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtaDEpO1xcblxcdGJvcmRlci1yYWRpdXM6IDIwMHB4O1xcblxcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcXG5cXG5cXHQmOmhvdmVyIHtcXG5cXHRcXHRib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjOTE2ZjA4O1xcblxcdH1cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTW9kYWwgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhvbWUge1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXG5cdCYgaDIge1xuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWgxKTtcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdG1hcmdpbi10b3A6IDA7XG5cdH1cbn1cblxuLmhlcm8ge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGhlaWdodDogY2FsYygxMDBzdmggLSA4MHB4KTtcblx0d2lkdGg6IDkwJTtcblx0bWFyZ2luOiBhdXRvO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdC0tYXJ0LXdpZHRoOiBtaW4oMTkwcHgsIDIwJSk7XG5cdFx0d2lkdGg6IG1pbig5MCUsIDEzMDBweCk7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRoZWlnaHQ6IGNhbGMoMTAwc3ZoIC0gMTAwcHgpO1xuXHR9XG59XG5cbi5hcnQge1xuXHRoZWlnaHQ6IDY4JTtcblx0d2lkdGg6IHZhcigtLWFydC13aWR0aCk7XG5cblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkXzUwNTkxMTZjNTlkMjQ0ZDA4YzMxNzBiNDlkNmU3YjBmfm12Mi5qcGcvdjEvZmlsbC93XzU0NixoXzcyOCxhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLGVuY19hdXRvLzU0YTRjZF81MDU5MTE2YzU5ZDI0NGQwOGMzMTcwYjQ5ZDZlN2IwZn5tdjIuanBnKTtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0aGVpZ2h0OiA4MCU7XG5cblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS81NGE0Y2RfYWU1ZTIyNDg2ZGJiNDlkZWJiOWNkOGJhMWI3ODBiNmV+bXYyLmpwZy92MS9maWxsL3dfMzg4LGhfMTI0MCxhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLGVuY19hdXRvL0FydHdvcmsxX0ZpbmFsXzh4Ml81LmpwZyk7XG5cdH1cbn1cblxuLmhlcm8tdGV4dCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiA5MHB4O1xuXG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdhcDogMzVweDtcblxuXHQmIGgxIHtcblx0XHQtLWZvbnQtc2l6ZTogbWluKDUwdncsIDMwMHB4KTtcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdHBvc2l0aW9uOiBzdGF0aWM7XG5cdFx0cGxhY2UtY29udGVudDogY2VudGVyO1xuXHRcdGdhcDogNjBweDtcblx0fVxufVxuXG4ucmVzZXJ2YXRpb25zIHtcblx0Y29sb3I6ICNmZmU1ZTU7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRsZXR0ZXItc3BhY2luZzogMnB4O1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAxcHg7XG5cdHRleHQtdW5kZXJsaW5lLW9mZnNldDogMnB4O1xufVxuXG4uc2Nyb2xsLWRvd24ge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LWgxKTtcblxuXHQmIC5mYS1hbmdsZS1kb3duIHtcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxNnB4O1xuXHRcdGZvbnQtc2l6ZTogNzBweDtcblx0XHRhbmltYXRpb246IGJvdW5jZSAycyBpbmZpbml0ZTtcblx0fVxufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdH1cblx0NTAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG5cdH1cblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHR9XG59XG5cbi5sYW50ZXJucyB7XG5cdGRpc3BsYXk6IG5vbmU7XG5cdHdpZHRoOiB2YXIoLS1hcnQtd2lkdGgpO1xuXHRoZWlnaHQ6IDgwJTtcblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0XHRkaXNwbGF5OiBncmlkO1xuXHR9XG59XG5cbi5sYW50ZXJuIHtcblx0LS1jYXBzLXdpZHRoOiA1MHB4O1xuXHQtLWNhcHMtaGVpZ2h0OiAyMHB4O1xuXG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0anVzdGlmeS1pdGVtczogY2VudGVyO1xuXG5cdCYgLnRvcCxcblx0JiAuYm90dG9tIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0d2lkdGg6IHZhcigtLWNhcHMtd2lkdGgpO1xuXHRcdGhlaWdodDogdmFyKC0tY2Fwcy1oZWlnaHQpO1xuXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cdH1cblxuXHQmIC50b3Age1xuXHRcdGJvdHRvbTogLTVweDtcblx0XHRib3JkZXItcmFkaXVzOiA4MCUgODAlIDAgMDtcblx0fVxuXG5cdCYgLmJvdHRvbSB7XG5cdFx0dG9wOiAtNXB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDAgMCA4MCUgODAlO1xuXHR9XG5cblx0JiAuYm9keSB7XG5cdFx0ei1pbmRleDogMTtcblx0XHRoZWlnaHQ6IDEzMHB4O1xuXHRcdHdpZHRoOiA4MCU7XG5cblx0XHRib3JkZXItcmFkaXVzOiA4NXB4O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1tYWluLWRhcmspO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLW1haW4pO1xuXHRcdGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXG5cdFx0XHR2YXIoLS1iZy1sYW50ZXJuKSxcblx0XHRcdHZhcigtLWJnLWxhbnRlcm4pIDE5JSxcblx0XHRcdHZhcigtLWFjY2VudC1tYWluLWRhcmspIDIwJVxuXHRcdCk7XG5cdH1cblxuXHQmIC5ib2R5OmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSgyNDUsIDIwNSwgODQsIDAuNyksIHRyYW5zcGFyZW50IDgwJSksXG5cdFx0XHRyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxuXHRcdFx0XHR2YXIoLS1iZy1sYW50ZXJuKSxcblx0XHRcdFx0dmFyKC0tYmctbGFudGVybikgMTklLFxuXHRcdFx0XHR2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKSAyMCVcblx0XHRcdCk7XG5cdH1cblxuXHQmID4gKiB7XG5cdFx0Ym94LXNoYWRvdzogM3B4IDNweCA2cHggLTNweCAjOGEwZjBmO1xuXHR9XG59XG5cbi5ob3Vycy1jb250YWluZXIge1xuXHRwYWRkaW5nOiAyMHB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdGJvcmRlci10b3A6IDJweCBzb2xpZCBoc2woMCwgOTUlLCA3MCUpO1xufVxuXG4uaG91cnMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDMwcHg7XG5cblx0JiA+IGRpdiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0Z2FwOiA4cHg7XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdHdpZHRoOiA2NTBweDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0Z2FwOiA3MHB4O1xuXHR9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxnQkFBZ0I7O0NBRWhCO0VBQ0MscUJBQXFCO0NBQ3RCOztDQUVBO0VBQ0MsYUFBYTtDQUNkO0FBQ0Q7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsMkJBQTJCO0NBQzNCLFVBQVU7Q0FDVixZQUFZOztDQUVaLGFBQWE7Q0FDYix1QkFBdUI7O0NBRXZCO0VBQ0MsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLDRCQUE0QjtDQUM3QjtBQUNEOztBQUVBO0NBQ0MsV0FBVztDQUNYLHVCQUF1Qjs7Q0FFdkIsbU5BQW1OO0NBQ25OLHNCQUFzQjtDQUN0Qiw0QkFBNEI7Q0FDNUIsMkJBQTJCOztDQUUzQjtFQUNDLFdBQVc7O0VBRVgsNkxBQTZMO0NBQzlMO0FBQ0Q7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTs7Q0FFWixhQUFhO0NBQ2IsU0FBUzs7Q0FFVDtFQUNDLDZCQUE2QjtDQUM5Qjs7Q0FFQTtFQUNDLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsU0FBUztDQUNWO0FBQ0Q7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsbUJBQW1CO0NBQ25CLDhCQUE4QjtDQUM5QiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IscUJBQXFCO0NBQ3JCLHFCQUFxQjs7Q0FFckI7RUFDQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw2QkFBNkI7Q0FDOUI7QUFDRDs7QUFFQTtDQUNDO0VBQ0Msd0JBQXdCO0NBQ3pCO0NBQ0E7RUFDQywyQkFBMkI7Q0FDNUI7Q0FDQTtFQUNDLHdCQUF3QjtDQUN6QjtBQUNEOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixXQUFXOztDQUVYO0VBQ0MsYUFBYTtDQUNkO0FBQ0Q7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsbUJBQW1COztDQUVuQixhQUFhO0NBQ2IscUJBQXFCO0NBQ3JCLHFCQUFxQjs7Q0FFckI7O0VBRUMsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QiwwQkFBMEI7O0VBRTFCLHVCQUF1QjtDQUN4Qjs7Q0FFQTtFQUNDLFlBQVk7RUFDWiwwQkFBMEI7Q0FDM0I7O0NBRUE7RUFDQyxTQUFTO0VBQ1QsMEJBQTBCO0NBQzNCOztDQUVBO0VBQ0MsVUFBVTtFQUNWLGFBQWE7RUFDYixVQUFVOztFQUVWLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsZ0NBQWdDO0VBQ2hDOzs7O0dBSUM7Q0FDRjs7Q0FFQTtFQUNDOzs7OztJQUtFO0NBQ0g7O0NBRUE7RUFDQyxvQ0FBb0M7Q0FDckM7QUFDRDs7QUFFQTtDQUNDLGFBQWE7O0NBRWIsYUFBYTtDQUNiLHVCQUF1Qjs7Q0FFdkIsc0NBQXNDO0FBQ3ZDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTOztDQUVUO0VBQ0MsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsUUFBUTtDQUNUOztDQUVBO0VBQ0MsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtFQUNmLFNBQVM7Q0FDVjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ob21lIHtcXG5cXHRtYXJnaW4tdG9wOiAyMHB4O1xcblxcblxcdCYgaDIge1xcblxcdFxcdGNvbG9yOiB2YXIoLS10ZXh0LWgxKTtcXG5cXHR9XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0bWFyZ2luLXRvcDogMDtcXG5cXHR9XFxufVxcblxcbi5oZXJvIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0aGVpZ2h0OiBjYWxjKDEwMHN2aCAtIDgwcHgpO1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0LS1hcnQtd2lkdGg6IG1pbigxOTBweCwgMjAlKTtcXG5cXHRcXHR3aWR0aDogbWluKDkwJSwgMTMwMHB4KTtcXG5cXHRcXHRtYXJnaW46IGF1dG87XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdFxcdGhlaWdodDogY2FsYygxMDBzdmggLSAxMDBweCk7XFxuXFx0fVxcbn1cXG5cXG4uYXJ0IHtcXG5cXHRoZWlnaHQ6IDY4JTtcXG5cXHR3aWR0aDogdmFyKC0tYXJ0LXdpZHRoKTtcXG5cXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS81NGE0Y2RfNTA1OTExNmM1OWQyNDRkMDhjMzE3MGI0OWQ2ZTdiMGZ+bXYyLmpwZy92MS9maWxsL3dfNTQ2LGhfNzI4LGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEsZW5jX2F1dG8vNTRhNGNkXzUwNTkxMTZjNTlkMjQ0ZDA4YzMxNzBiNDlkNmU3YjBmfm12Mi5qcGcpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFxuXFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHRoZWlnaHQ6IDgwJTtcXG5cXG5cXHRcXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS81NGE0Y2RfYWU1ZTIyNDg2ZGJiNDlkZWJiOWNkOGJhMWI3ODBiNmV+bXYyLmpwZy92MS9maWxsL3dfMzg4LGhfMTI0MCxhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLGVuY19hdXRvL0FydHdvcmsxX0ZpbmFsXzh4Ml81LmpwZyk7XFxuXFx0fVxcbn1cXG5cXG4uaGVyby10ZXh0IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Ym90dG9tOiA5MHB4O1xcblxcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z2FwOiAzNXB4O1xcblxcblxcdCYgaDEge1xcblxcdFxcdC0tZm9udC1zaXplOiBtaW4oNTB2dywgMzAwcHgpO1xcblxcdH1cXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHRwb3NpdGlvbjogc3RhdGljO1xcblxcdFxcdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRnYXA6IDYwcHg7XFxuXFx0fVxcbn1cXG5cXG4ucmVzZXJ2YXRpb25zIHtcXG5cXHRjb2xvcjogI2ZmZTVlNTtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDJweDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAxcHg7XFxuXFx0dGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAycHg7XFxufVxcblxcbi5zY3JvbGwtZG93biB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtaDEpO1xcblxcblxcdCYgLmZhLWFuZ2xlLWRvd24ge1xcblxcdFxcdG1hcmdpbi10b3A6IDEwcHg7XFxuXFx0XFx0bGluZS1oZWlnaHQ6IDE2cHg7XFxuXFx0XFx0Zm9udC1zaXplOiA3MHB4O1xcblxcdFxcdGFuaW1hdGlvbjogYm91bmNlIDJzIGluZmluaXRlO1xcblxcdH1cXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2Uge1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuXFx0fVxcblxcdDUwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xcblxcdH1cXG5cXHQxMDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuXFx0fVxcbn1cXG5cXG4ubGFudGVybnMge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0d2lkdGg6IHZhcigtLWFydC13aWR0aCk7XFxuXFx0aGVpZ2h0OiA4MCU7XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0ZGlzcGxheTogZ3JpZDtcXG5cXHR9XFxufVxcblxcbi5sYW50ZXJuIHtcXG5cXHQtLWNhcHMtd2lkdGg6IDUwcHg7XFxuXFx0LS1jYXBzLWhlaWdodDogMjBweDtcXG5cXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0JiAudG9wLFxcblxcdCYgLmJvdHRvbSB7XFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdFxcdHdpZHRoOiB2YXIoLS1jYXBzLXdpZHRoKTtcXG5cXHRcXHRoZWlnaHQ6IHZhcigtLWNhcHMtaGVpZ2h0KTtcXG5cXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXHR9XFxuXFxuXFx0JiAudG9wIHtcXG5cXHRcXHRib3R0b206IC01cHg7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogODAlIDgwJSAwIDA7XFxuXFx0fVxcblxcblxcdCYgLmJvdHRvbSB7XFxuXFx0XFx0dG9wOiAtNXB4O1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDAgMCA4MCUgODAlO1xcblxcdH1cXG5cXG5cXHQmIC5ib2R5IHtcXG5cXHRcXHR6LWluZGV4OiAxO1xcblxcdFxcdGhlaWdodDogMTMwcHg7XFxuXFx0XFx0d2lkdGg6IDgwJTtcXG5cXG5cXHRcXHRib3JkZXItcmFkaXVzOiA4NXB4O1xcblxcdFxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1tYWluLWRhcmspO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLW1haW4pO1xcblxcdFxcdGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0XFx0dmFyKC0tYmctbGFudGVybiksXFxuXFx0XFx0XFx0dmFyKC0tYmctbGFudGVybikgMTklLFxcblxcdFxcdFxcdHZhcigtLWFjY2VudC1tYWluLWRhcmspIDIwJVxcblxcdFxcdCk7XFxuXFx0fVxcblxcblxcdCYgLmJvZHk6aG92ZXIge1xcblxcdFxcdGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDI0NSwgMjA1LCA4NCwgMC43KSwgdHJhbnNwYXJlbnQgODAlKSxcXG5cXHRcXHRcXHRyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdFxcdFxcdHZhcigtLWJnLWxhbnRlcm4pLFxcblxcdFxcdFxcdFxcdHZhcigtLWJnLWxhbnRlcm4pIDE5JSxcXG5cXHRcXHRcXHRcXHR2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKSAyMCVcXG5cXHRcXHRcXHQpO1xcblxcdH1cXG5cXG5cXHQmID4gKiB7XFxuXFx0XFx0Ym94LXNoYWRvdzogM3B4IDNweCA2cHggLTNweCAjOGEwZjBmO1xcblxcdH1cXG59XFxuXFxuLmhvdXJzLWNvbnRhaW5lciB7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcblxcdGJvcmRlci10b3A6IDJweCBzb2xpZCBoc2woMCwgOTUlLCA3MCUpO1xcbn1cXG5cXG4uaG91cnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDMwcHg7XFxuXFxuXFx0JiA+IGRpdiB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0Z2FwOiA4cHg7XFxuXFx0fVxcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0d2lkdGg6IDY1MHB4O1xcblxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRcXHRnYXA6IDcwcHg7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tZW51IHtcblx0bWFyZ2luLXRvcDogNXB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRtYXJnaW46IDEwcHggMjBweDtcblx0fVxufVxuXG4ubWVudS1hcnQge1xuXHRoZWlnaHQ6IDU1MHB4O1xuXHR3aWR0aDogbWluKDEwMHZ3LCA0MDBweCk7XG5cdG1hcmdpbjogYXV0bztcblxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS81NGE0Y2RfYjhjOTUzN2M1ZmNkNGQ4NTlmYzk1ODk0MmI1YTVlODd+bXYyLmpwZy92MS9maWxsL3dfOTUyLGhfMTMyMixhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLGVuY19hdXRvLzU0YTRjZF9iOGM5NTM3YzVmY2Q0ZDg1OWZjOTU4OTQyYjVhNWU4N35tdjIuanBnKTtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkgKiAyLjUpO1xuXHRcdHdpZHRoOiBtaW4oNjAwcHgsIDUwdncpO1xuXHR9XG59XG5cbi5tZW51LXRleHQge1xuXHRtYXJnaW46IC05NXB4IDAgNDBweDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDE1cHg7XG5cblx0JiA+ICoge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbWFpbik7XG5cdH1cblxuXHQmIGEge1xuXHRcdHBhZGRpbmc6IDhweCAwO1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0Zm9udC1zaXplOiAzMHB4O1xuXHRcdGxldHRlci1zcGFjaW5nOiAzcHg7XG5cdH1cblxuXHQmIGE6aG92ZXIge1xuXHRcdGJveC1zaGFkb3c6IDAgMCAwIDFweCB3aGl0ZTtcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdG1hcmdpbjogMCAtNjFweCAwO1xuXHR9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxlQUFlOztDQUVmLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1COztDQUVuQjtFQUNDLG1CQUFtQjtFQUNuQixpQkFBaUI7Q0FDbEI7QUFDRDs7QUFFQTtDQUNDLGFBQWE7Q0FDYix3QkFBd0I7Q0FDeEIsWUFBWTs7Q0FFWixvTkFBb047Q0FDcE4sc0JBQXNCO0NBQ3RCLDRCQUE0Qjs7Q0FFNUI7RUFDQyxTQUFTO0VBQ1QsZ0RBQWdEO0VBQ2hELHVCQUF1QjtDQUN4QjtBQUNEOztBQUVBO0NBQ0Msb0JBQW9COztDQUVwQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7O0NBRVQ7RUFDQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdDQUFnQztDQUNqQzs7Q0FFQTtFQUNDLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLDJCQUEyQjtDQUM1Qjs7Q0FFQTtFQUNDLGlCQUFpQjtDQUNsQjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tZW51IHtcXG5cXHRtYXJnaW4tdG9wOiA1cHg7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRcXHRtYXJnaW46IDEwcHggMjBweDtcXG5cXHR9XFxufVxcblxcbi5tZW51LWFydCB7XFxuXFx0aGVpZ2h0OiA1NTBweDtcXG5cXHR3aWR0aDogbWluKDEwMHZ3LCA0MDBweCk7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzU0YTRjZF9iOGM5NTM3YzVmY2Q0ZDg1OWZjOTU4OTQyYjVhNWU4N35tdjIuanBnL3YxL2ZpbGwvd185NTIsaF8xMzIyLGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEsZW5jX2F1dG8vNTRhNGNkX2I4Yzk1MzdjNWZjZDRkODU5ZmM5NTg5NDJiNWE1ZTg3fm12Mi5qcGcpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHRtYXJnaW46IDA7XFxuXFx0XFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkgKiAyLjUpO1xcblxcdFxcdHdpZHRoOiBtaW4oNjAwcHgsIDUwdncpO1xcblxcdH1cXG59XFxuXFxuLm1lbnUtdGV4dCB7XFxuXFx0bWFyZ2luOiAtOTVweCAwIDQwcHg7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMTVweDtcXG5cXG5cXHQmID4gKiB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1tYWluKTtcXG5cXHR9XFxuXFxuXFx0JiBhIHtcXG5cXHRcXHRwYWRkaW5nOiA4cHggMDtcXG5cXHRcXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdFxcdGZvbnQtc2l6ZTogMzBweDtcXG5cXHRcXHRsZXR0ZXItc3BhY2luZzogM3B4O1xcblxcdH1cXG5cXG5cXHQmIGE6aG92ZXIge1xcblxcdFxcdGJveC1zaGFkb3c6IDAgMCAwIDFweCB3aGl0ZTtcXG5cXHR9XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0bWFyZ2luOiAwIC02MXB4IDA7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIC0tLS0tLS0tLS0tLS0tLSAgICAgUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5idXR0b24ge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuXHRjb2xvcjogdW5zZXQ7XG5cdGJvcmRlcjogbm9uZTtcblx0Zm9udC1zaXplOiB1bnNldDtcbn1cblxuYSB7XG5cdGNvbG9yOiB1bnNldDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5oMSxcbmgyIHtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbjpyb290IHtcblx0LS1iZy1tYWluOiAjZmY0MDQwO1xuXHQtLWFjY2VudC1tYWluLWRhcms6ICMzZDAwMDA7XG5cdC0tYmctbGFudGVybjogI2U4MzAzMDtcblx0LS10ZXh0LWgxOiAjZjVjZTU0O1xuXHQtLWJnLWlucHV0OiB3aGl0ZTtcblx0LS1ib3JkZXItaW5wdXQ6IGJsYWNrO1xuXG5cdC0tZm9vdGVyLWhlaWdodDogNTBweDtcblx0LS1hcnQtd2lkdGg6IDEwMCU7XG5cblx0c2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuXHRtaW4taGVpZ2h0OiAxMDFzdmg7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1tYWluKTtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLFxuXHRcdFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuXHRcdHNhbnMtc2VyaWY7XG59XG5cbiNhbGwtY29udGVudCB7XG5cdGZsZXg6IDE7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmgxLmJyYW5kIHtcblx0LS1mb250LXNpemU6IDExMHB4O1xuXG5cdGNvbG9yOiB2YXIoLS10ZXh0LWgxKTtcblx0dGV4dC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XG5cdGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcblx0bGluZS1oZWlnaHQ6IGNhbGModmFyKC0tZm9udC1zaXplKSAqIDAuOCk7XG59XG5cbi5oaWRkZW4ge1xuXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5zb2NpYWxzIHtcblx0Z2FwOiAxMHB4O1xuXHRmb250LXNpemU6IDI1cHg7XG59XG5cbmEudW5kZXJsaW5lIHtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMXB4O1xuXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDNweDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVib290LXV0aWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1EQUFtRDs7QUFFbkQ7OztDQUdDLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixxQkFBcUI7QUFDdEI7O0FBRUE7O0NBRUMsbUJBQW1CO0FBQ3BCOztBQUVBLG9EQUFvRDtBQUNwRCxtRUFBbUU7O0FBRW5FO0NBQ0Msa0JBQWtCO0NBQ2xCLDJCQUEyQjtDQUMzQixxQkFBcUI7Q0FDckIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixxQkFBcUI7O0NBRXJCLHFCQUFxQjtDQUNyQixpQkFBaUI7O0NBRWpCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGtCQUFrQjs7Q0FFbEIsYUFBYTtDQUNiLHNCQUFzQjs7Q0FFdEIsZ0NBQWdDO0NBQ2hDLFdBQVc7Q0FDWDs7WUFFVztBQUNaOztBQUVBO0NBQ0MsT0FBTztDQUNQLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxrQkFBa0I7O0NBRWxCLHFCQUFxQjtDQUNyQiwwQkFBMEI7Q0FDMUIsMkJBQTJCO0NBQzNCLHlDQUF5QztBQUMxQzs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsOEJBQThCO0NBQzlCLDBCQUEwQjtBQUMzQjs7QUFFQSxvRUFBb0VcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogLS0tLS0tLS0tLS0tLS0tICAgICBSZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5idXR0b24ge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXG5cXHRjb2xvcjogdW5zZXQ7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGZvbnQtc2l6ZTogdW5zZXQ7XFxufVxcblxcbmEge1xcblxcdGNvbG9yOiB1bnNldDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmgxLFxcbmgyIHtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9SZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuOnJvb3Qge1xcblxcdC0tYmctbWFpbjogI2ZmNDA0MDtcXG5cXHQtLWFjY2VudC1tYWluLWRhcms6ICMzZDAwMDA7XFxuXFx0LS1iZy1sYW50ZXJuOiAjZTgzMDMwO1xcblxcdC0tdGV4dC1oMTogI2Y1Y2U1NDtcXG5cXHQtLWJnLWlucHV0OiB3aGl0ZTtcXG5cXHQtLWJvcmRlci1pbnB1dDogYmxhY2s7XFxuXFxuXFx0LS1mb290ZXItaGVpZ2h0OiA1MHB4O1xcblxcdC0tYXJ0LXdpZHRoOiAxMDAlO1xcblxcblxcdHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRtaW4taGVpZ2h0OiAxMDFzdmg7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLW1haW4pO1xcblxcdGNvbG9yOiAjZmZmO1xcblxcdGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIixcXG5cXHRcXHRSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcblxcdFxcdHNhbnMtc2VyaWY7XFxufVxcblxcbiNhbGwtY29udGVudCB7XFxuXFx0ZmxleDogMTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmgxLmJyYW5kIHtcXG5cXHQtLWZvbnQtc2l6ZTogMTEwcHg7XFxuXFxuXFx0Y29sb3I6IHZhcigtLXRleHQtaDEpO1xcblxcdHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG5cXHRsaW5lLWhlaWdodDogY2FsYyh2YXIoLS1mb250LXNpemUpICogMC44KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuXFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc29jaWFscyB7XFxuXFx0Z2FwOiAxMHB4O1xcblxcdGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuYS51bmRlcmxpbmUge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDFweDtcXG5cXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDNweDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hYm91dC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29uc3RhbnRzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29uc3RhbnRzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ldmVudHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ldmVudHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVib290LXV0aWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZWJvb3QtdXRpbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGVsRmFjdG9yeSwgaHRtbEZhY3RvcnkgfSBmcm9tIFwiLi9kb20tZmFjdG9yaWVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEFib3V0VXMoKSB7XG5cdHJldHVybiBodG1sRmFjdG9yeShcblx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiYWJvdXRcIiB9LCBbXG5cdFx0XHRlbEZhY3RvcnkoXCJwXCIsIHsgY2xhc3NMaXN0OiBcInRleHRcIiwgdGV4dENvbnRlbnQ6IFwiQ2FsbCB1cyBhdDpcIiB9LCBbXG5cdFx0XHRcdGVsRmFjdG9yeShcImFcIiwge1xuXHRcdFx0XHRcdGNsYXNzTGlzdDogXCJ1bmRlcmxpbmUgcGhvbmVcIixcblx0XHRcdFx0XHRocmVmOiBcInRlbDorMS0yMTItNTE3LTE5ODdcIixcblx0XHRcdFx0XHR0ZXh0Q29udGVudDogXCIyMTIgNTE3IDE5ODdcIixcblx0XHRcdFx0fSksXG5cdFx0XHRdKSxcblx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJtYXAtY29udGFpbmVyXCIgfSwgW1xuXHRcdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwibWFwLXRhY2tcIiB9LCBbXSksXG5cdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJtYXAtc3RyaW5nXCIgfSwgW1xuXHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJsZWZ0XCIgfSksXG5cdFx0XHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcInJpZ2h0XCIgfSksXG5cdFx0XHRcdF0pLFxuXHRcdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwibWFwLXdvb2QgbWFwLXRvcFwiIH0sIFtdKSxcblx0XHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcIm1hcC1jYW52YXNcIiB9LCBbXG5cdFx0XHRcdFx0ZWxGYWN0b3J5KFwiaWZyYW1lXCIsIHtcblx0XHRcdFx0XHRcdHNyYzogXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQzMDIxLjIwMjg0MzM4NjM1NiEyZC03My45Nzk1Mzc5MjM4ODc1NiEzZDQwLjc3OTU1NDUzMzQ3NzE4ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4OWMyNTljODM5MGIwZTk3JTNBMHgyY2IxMTYwYWVmMzc3ZDBiITJzQVNTRVQhNWUwITNtMiExc2VuITJzdXMhNHYxNjk1ODY4MzczOTI4ITVtMiExc2VuITJzdXNcIixcblx0XHRcdFx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdFx0XHRcdGhlaWdodDogXCI0NTBcIixcblx0XHRcdFx0XHRcdGxvYWRpbmc6IFwibGF6eVwiLFxuXHRcdFx0XHRcdFx0cmVmZXJyZXJQb2xpY3k6IFwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIixcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XSksXG5cdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJtYXAtd29vZCBtYXAtYm90dG9tXCIgfSwgW10pLFxuXHRcdFx0XSksXG5cdFx0XSlcblx0KTtcbn1cbiIsImltcG9ydCB7IGVsRmFjdG9yeSwgaHRtbEZhY3RvcnkgfSBmcm9tIFwiLi9kb20tZmFjdG9yaWVzLmpzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNvY2lhbEljb25zKCkge1xuXHQvLyByZXR1cm5zIGRpdi5zb2NpYWxzIHdpdGggNCBsaW5rcywgZWFjaCBjb250YWluaW5nIGFuIDxpPlxuXHRyZXR1cm4gZWxGYWN0b3J5KFxuXHRcdFwiZGl2XCIsXG5cdFx0eyBjbGFzc0xpc3Q6IFwic29jaWFsc1wiIH0sXG5cdFx0W1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImluc3RhZ3JhbVwiLFxuXHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYXNzZXRyZXN0YXVyYW50L1wiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJmYWNlYm9va1wiLFxuXHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9hc3NldHJlc3RhdXJhbnQvXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInllbHBcIixcblx0XHRcdFx0bGluazogXCJodHRwczovL3d3dy55ZWxwLmNvbS9iaXovYXNzZXQtbmV3LXlvcms/b3NxPWFzc2V0XCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInRyaXBhZHZpc29yXCIsXG5cdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly93d3cudHJpcGFkdmlzb3IuY29tL1Jlc3RhdXJhbnRfUmV2aWV3LWc2MDc2My1kMTkyODQzNDYtUmV2aWV3cy1Bc3NldC1OZXdfWW9ya19DaXR5X05ld19Zb3JrLmh0bWxcIixcblx0XHRcdH0sXG5cdFx0XS5tYXAoKHBhaXIpID0+IHtcblx0XHRcdHJldHVybiBlbEZhY3RvcnkoXCJhXCIsIHsgaHJlZjogcGFpci5saW5rIH0sIFtcblx0XHRcdFx0ZWxGYWN0b3J5KFwiaVwiLCB7XG5cdFx0XHRcdFx0Y2xhc3NMaXN0OiBgZmEgZmEtJHtwYWlyLm5hbWV9YCxcblx0XHRcdFx0XHRhcmlhSGlkZGVuOiB0cnVlLFxuXHRcdFx0XHR9KSxcblx0XHRcdF0pO1xuXHRcdH0pXG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZENvbnN0YW50cygpIHtcblx0Y29uc3Qgc2lkZWJhciA9IGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJzaWRlYmFyIGR5bmFtaWNcIiB9LCBbXG5cdFx0ZWxGYWN0b3J5KFwiYnV0dG9uXCIsIHtcblx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG5cdFx0XHRjbGFzc0xpc3Q6IFwiY2xvc2UtYnRuIHNpZGViYXItdG9nZ2xlclwiLFxuXHRcdFx0aWQ6IFwiY2xvc2Utc2lkZWJhclwiLFxuXHRcdFx0dGV4dENvbnRlbnQ6IFwiw5dcIixcblx0XHR9KSxcblx0XHRlbEZhY3RvcnkoXG5cdFx0XHRcIm5hdlwiLFxuXHRcdFx0e30sXG5cdFx0XHRbXCJob21lXCIsIFwibWVudVwiLCBcImV2ZW50c1wiLCBcImFib3V0XCJdLm1hcCgoYnV0dG9uKSA9PiB7XG5cdFx0XHRcdHJldHVybiBlbEZhY3RvcnkoXCJidXR0b25cIiwge1xuXHRcdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG5cdFx0XHRcdFx0Y2xhc3NMaXN0OiBcIm5hdi1idG5cIixcblx0XHRcdFx0XHRpZDogYCR7YnV0dG9ufS1idG5gLFxuXHRcdFx0XHRcdHRleHRDb250ZW50OiBidXR0b24sXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSlcblx0XHQpLFxuXHRdKTtcblxuXHRjb25zdCBoZWFkZXIgPSBlbEZhY3RvcnkoXCJoZWFkZXJcIiwge30sIFtcblx0XHRlbEZhY3RvcnkoXCJidXR0b25cIiwge1xuXHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdGNsYXNzTGlzdDogXCJzaWRlYmFyLXRvZ2dsZXJcIixcblx0XHRcdGlkOiBcIm9wZW4tc2lkZWJhclwiLFxuXHRcdFx0dGV4dENvbnRlbnQ6IFwi4piwXCIsXG5cdFx0fSksXG5cdFx0Y3JlYXRlU29jaWFsSWNvbnMoKSxcblx0XSk7XG5cblx0Y29uc3QgZm9vdGVyID0gZWxGYWN0b3J5KFwiZm9vdGVyXCIsIHt9LCBbXG5cdFx0Y3JlYXRlU29jaWFsSWNvbnMoKSxcblx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiYXV0aG9yXCIgfSwgW1xuXHRcdFx0ZWxGYWN0b3J5KFwicFwiLCB7IHRleHRDb250ZW50OiBcIldhbGtlclwiIH0pLFxuXHRcdFx0ZWxGYWN0b3J5KFxuXHRcdFx0XHRcImFcIixcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL21hcmxhdHRlXCIsXG5cdFx0XHRcdFx0dGFyZ2V0OiBcIl9ibGFua1wiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRbZWxGYWN0b3J5KFwiaVwiLCB7IGNsYXNzTGlzdDogXCJmYSBmYS1naXRodWJcIiB9KV1cblx0XHRcdCksXG5cdFx0XHRlbEZhY3RvcnkoXCJwXCIsIHsgdGV4dENvbnRlbnQ6IFwiTWFybGF0dFwiIH0pLFxuXHRcdF0pLFxuXHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJjb250YWN0LWNvbnRhaW5lclwiIH0sIFtcblx0XHRcdGVsRmFjdG9yeShcImJ1dHRvblwiLCB7XG5cdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG5cdFx0XHRcdGlkOiBcImNvbnRhY3QtYnRuXCIsXG5cdFx0XHRcdHRleHRDb250ZW50OiBcIkNvbnRhY3QgVXNcIixcblx0XHRcdH0pLFxuXHRcdF0pLFxuXHRdKTtcblxuXHRyZXR1cm4gW1xuXHRcdHNpZGViYXIsXG5cdFx0aGVhZGVyLFxuXHRcdGVsRmFjdG9yeShcIm1haW5cIiwgeyBpZDogXCJjaGFuZ2luZy1jb250ZW50XCIgfSksXG5cdFx0Zm9vdGVyLFxuXHRdLm1hcCgoc2VjdGlvbikgPT4ge1xuXHRcdHJldHVybiBodG1sRmFjdG9yeShzZWN0aW9uKTtcblx0fSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZWxGYWN0b3J5KHR5cGUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuID0gW10pIHtcblx0cmV0dXJuIHsgdHlwZSwgYXR0cmlidXRlcywgY2hpbGRyZW4gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxGYWN0b3J5KG9iaikge1xuXHRjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLnR5cGUpO1xuXHRjb25zdCBhdHRyaWJ1dGVzID0gb2JqLmF0dHJpYnV0ZXM7XG5cblx0Zm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRlbFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHR9XG5cblx0b2JqLmNoaWxkcmVuPy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuXHRcdGVsLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5KGNoaWxkKSk7XG5cdH0pO1xuXG5cdHJldHVybiBlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1Sb3dGYWN0b3J5KGZvcm1EYXRhQXJyYXlzKSB7XG5cdHJldHVybiBmb3JtRGF0YUFycmF5c1xuXHRcdC5tYXAoKGZvcm1EYXRhKSA9PiB7XG5cdFx0XHRjb25zdCBrZWJhYiA9IGZvcm1EYXRhWzBdLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpO1xuXHRcdFx0cmV0dXJuIGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJmb3JtLWl0ZW1cIiB9LCBbXG5cdFx0XHRcdGVsRmFjdG9yeShcImxhYmVsXCIsIHtcblx0XHRcdFx0XHRodG1sRm9yOiBrZWJhYixcblx0XHRcdFx0XHR0ZXh0Q29udGVudDogZm9ybURhdGFbMF0gKyBcIjpcIixcblx0XHRcdFx0fSksXG5cdFx0XHRcdGVsRmFjdG9yeShcImlucHV0XCIsIHtcblx0XHRcdFx0XHRpZDoga2ViYWIsXG5cdFx0XHRcdFx0dHlwZTogZm9ybURhdGFbMV0sXG5cdFx0XHRcdFx0YXV0b2NvbXBsZXRlOiBmb3JtRGF0YVsyXSxcblx0XHRcdFx0fSksXG5cdFx0XHRdKTtcblx0XHR9KVxuXHRcdC5yZWR1Y2UoKGFjYywgY3VycmVudEl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHRpZiAoIShpbmRleCAmIDEpKSB7XG5cdFx0XHRcdC8vIElmIGV2ZW4sIGNyZWF0ZSByb3cgd2l0aCBjdXJyZW50SXRlbSBhcyBhIGNoaWxkXG5cdFx0XHRcdGFjYy5wdXNoKFxuXHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJmb3JtLXJvd1wiIH0sIFtjdXJyZW50SXRlbV0pXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBJZiBvZGQsIGFkZCBjdXJyZW50SXRlbSB0byBwcmV2aW91cyByb3dcblx0XHRcdFx0YWNjW2FjYy5sZW5ndGggLSAxXS5jaGlsZHJlbi5wdXNoKGN1cnJlbnRJdGVtKTtcblx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdH1cblx0XHR9LCBbXSk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSBcIi4vZm9ybS5qc1wiO1xuaW1wb3J0IHsgaHRtbEZhY3RvcnksIGVsRmFjdG9yeSB9IGZyb20gXCIuL2RvbS1mYWN0b3JpZXMuanNcIjtcblxuZnVuY3Rpb24gY3JlYXRlVGV4dENoaWxkcmVuKCkge1xuXHRjb25zdCB0ZXh0Q2hpbGRyZW4gPSBbXG5cdFx0W1wiaDFcIiwgXCJQcml2YXRlIERpbmluZyAmIEV2ZW50c1wiXSxcblx0XHRbXCJoMlwiLCBcIlNwZWNpYWwgRXZlbnRzXCJdLFxuXHRcdFtcblx0XHRcdFwicFwiLFxuXHRcdFx0XCJXaXRoIHR3byBsZXZlbHMgb2YgZGluaW5nIGFuZCBhIGJhciBvbiBlYWNoIGZsb29yLCB0aGUgcmVzdGF1cmFudCBvZmZlcnMgc2VhdGluZyBmb3IgdXAgMjIwIGd1ZXN0cyB3aXRoaW4gYXBwcm94aW1hdGVseSA1LDAwMCBzcXVhcmUtZm9vdGFnZS4gVXBvbiBlbnRyeSBpbnRvIHRoZSByZXN0YXVyYW50IHRocm91Z2ggYSBnbGFzcyBlbnRyeXdheSBpcyBhIDI0LSBzZWF0IGJhciBmb3IgZ3Vlc3RzIHRvIGVuam95IGEgZHJpbmssIHNuYWNrLCBvciBmdWxsIGRpbm5lci5cIixcblx0XHRdLFxuXHRcdFtcblx0XHRcdFwicFwiLFxuXHRcdFx0XCJUaGVyZSBhcmUgbXVsdGlwbGUgYXJlYXMgb2YgdGhlIHJlc3RhdXJhbnQgdGhhdCBjYW4gaG9zdCBwcml2YXRlIGFuZCBzZW1pLXByaXZhdGUgZXZlbnRzIGFzIHRoZSByZXN0YXVyYW50IGJvYXN0cyB0d28gc2VtaS1wcml2YXRlIHJvb21zIHRoYXQgYm90aCBzZWF0IDIwIGd1ZXN0cywgYXMgd2VsbCBhcyB0aGUgdXBzdGFpcnMgTWV6emFuaW5lIGxldmVsLCB3aGljaCBzZWF0cyB1cCB0byA1MCBhbmQgOCBhdCB0aGUgYmFyLiBTZWF0aW5nIHdpbGwgYmUgYXZhaWxhYmxlIG91dGRvb3JzIHNlYXNvbmFsbHkuXCIsXG5cdFx0XSxcblx0XHRbXCJoMlwiLCBcIkNvY2t0YWlsIFBhcnRpZXMsIFJlY2VwdGlvbnMsIEJ1eW91dHNcIl0sXG5cdFx0W1xuXHRcdFx0XCJwXCIsXG5cdFx0XHRcIldlIGFyZSBwbGVhc2VkIHRvIG9mZmVyIG91ciBzZXJ2aWNlcyBmb3IgeW91ciBuZXh0IG9jY2FzaW9ucy4gQm9vayBvdXIgZW50aXJlIHJlc3RhdXJhbnQgZm9yIGEgc3BlY2lhbCBldmVuaW5nLCBjYXRlcmVkIGp1c3QgZm9yIHlvdSBhbmQgeW91ciBndWVzdHMuIExldCB1cyBicmluZyB0aGUgQVNTRVQgZXhwZXJpZW5jZSB0byB5b3VyIHdlZGRpbmcsIGJpcnRoZGF5cyBhbmQgb3RoZXIgbGFyZ2UgZXZlbnRzXCIsXG5cdFx0XSxcblx0XHRbXCJwXCIsIFwiSW5xdWlyZSBiZWxvdyBvciBjb250YWN0IHVzIGF0OlwiXSxcblx0XS5tYXAoKGVudHJ5KSA9PiB7XG5cdFx0cmV0dXJuIGVsRmFjdG9yeShlbnRyeVswXSwgeyB0ZXh0Q29udGVudDogZW50cnlbMV0gfSk7XG5cdH0pO1xuXG5cdHRleHRDaGlsZHJlblt0ZXh0Q2hpbGRyZW4ubGVuZ3RoIC0gMV0uY2hpbGRyZW4ucHVzaChcblx0XHRlbEZhY3RvcnkoXCJhXCIsIHtcblx0XHRcdGhyZWY6IFwidGVsOisxLTIxMi01MTctMTk4N1wiLFxuXHRcdFx0dGV4dENvbnRlbnQ6IFwiKzEgMjEyIDUxNyAxOTg3XCIsXG5cdFx0XHRjbGFzc0xpc3Q6IFwidW5kZXJsaW5lXCIsXG5cdFx0fSlcblx0KTtcblxuXHR0ZXh0Q2hpbGRyZW4ucHVzaChcblx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiY2FsbC10by1hY3Rpb25cIiB9LCBbXG5cdFx0XHRlbEZhY3RvcnkoXCJidXR0b25cIiwge1xuXHRcdFx0XHRjbGFzc0xpc3Q6IFwiaW5xdWlyZVwiLFxuXHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0XHR0ZXh0Q29udGVudDogXCJJbnF1aXJlIE5vd1wiLFxuXHRcdFx0fSksXG5cdFx0XSlcblx0KTtcblx0cmV0dXJuIHRleHRDaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGhvdG9zKCkge1xuXHRyZXR1cm4gW1xuXHRcdHtcblx0XHRcdHNyYzogXCJodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhL2JiZjAyNWIyYTE5NDQwZDE5N2NiZWY2NjZmZmZiYzhlLmpwZy92MS9maWxsL3dfOTk5LGhfNjAwLGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEsZW5jX2F1dG8vYmJmMDI1YjJhMTk0NDBkMTk3Y2JlZjY2NmZmZmJjOGUuanBnXCIsXG5cdFx0XHRhbHQ6IFwiUGVvcGxlIGRyaW5raW5nIGF0IGEgYmFyXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzcmM6IFwiaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS81NGE0Y2RfYTI2NWEyZjI1ODM0NGMxNTljM2QwNmZjZWJkOTQwZWV+bXYyLmpwZy92MS9maWxsL3dfNjY2LGhfNjAwLGFsX2wscV84NSx1c21fMC42Nl8xLjAwXzAuMDEsZW5jX2F1dG8vNTRhNGNkX2EyNjVhMmYyNTgzNDRjMTU5YzNkMDZmY2ViZDk0MGVlfm12Mi5qcGdcIixcblx0XHRcdGFsdDogXCJBIGdsYXNzIG9mIHdpbmUgYW5kIHBsYXRlIG9mIGZvb2RcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNyYzogXCJodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzU0YTRjZF85NTE4NGE4NmFlZWU0MmJjOGYyYjY1ZDQxNDhhY2RkZn5tdjJfZF8xOTUwXzEzMDhfc18yLmpwZy92MS9maWxsL3dfNjY2LGhfNjAwLGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEsZW5jX2F1dG8vNTRhNGNkXzk1MTg0YTg2YWVlZTQyYmM4ZjJiNjVkNDE0OGFjZGRmfm12Ml9kXzE5NTBfMTMwOF9zXzIuanBnXCIsXG5cdFx0XHRhbHQ6IFwiQSBESiBib290aFwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c3JjOiBcImh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkX2IyZTUzNmFiZjBlYTQzNmQ5MDU1N2M1ZTUyOGExZWMwfm12Mi5wbmcvdjEvZmlsbC93Xzk5OSxoXzYwMCxhbF9sLHFfOTAsdXNtXzAuNjZfMS4wMF8wLjAxLGVuY19hdXRvLzU0YTRjZF9iMmU1MzZhYmYwZWE0MzZkOTA1NTdjNWU1MjhhMWVjMH5tdjIucG5nXCIsXG5cdFx0XHRhbHQ6IFwiQSBiYXIgZnVsbCBvZiBwZW9wbGVcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNyYzogXCJodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzU0YTRjZF82NjY0Mzg4NWJmMmU0NGQ3YTVmOTM5NmNkMjZmNmU5N35tdjIuanBnL3YxL2ZpbGwvd184MzMsaF81NTAsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMSxlbmNfYXV0by81NGE0Y2RfNjY2NDM4ODViZjJlNDRkN2E1ZjkzOTZjZDI2ZjZlOTd+bXYyLmpwZ1wiLFxuXHRcdFx0YWx0OiBcIkFuIGVtcHR5IGJhciwgbGl0IGZyb20gdW5kZXJuZWF0aFwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c3JjOiBcImh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkXzVjMDI0ODA0MDAxNTRiYmViZDA3NThlYjJmOGQ3Yjhkfm12Ml9kXzE2MDBfMTIwMF9zXzIuanBnL3YxL2ZpbGwvd184MzMsaF81NTAsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMSxlbmNfYXV0by81NGE0Y2RfNWMwMjQ4MDQwMDE1NGJiZWJkMDc1OGViMmY4ZDdiOGR+bXYyX2RfMTYwMF8xMjAwX3NfMi5qcGdcIixcblx0XHRcdGFsdDogXCJSZXN0YXVyYW50IHN0YWZmXCIsXG5cdFx0fSxcblx0XVxuXHRcdC5tYXAoKGltZ09iaiwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IFtzcmMsIGFsdF0gPSBbaW1nT2JqLnNyYywgaW1nT2JqLmFsdF07XG5cdFx0XHRyZXR1cm4gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImltYWdlLWNvbnRhaW5lclwiIH0sIFtcblx0XHRcdFx0ZWxGYWN0b3J5KFwiaW1nXCIsIHsgc3JjLCBhbHQgfSksXG5cdFx0XHRdKTtcblx0XHR9KVxuXHRcdC5yZWR1Y2UoKGFjYywgY3VycmVudEltZywgaW5kZXgpID0+IHtcblx0XHRcdGlmICghKGluZGV4ICYgMSkpIHtcblx0XHRcdFx0Ly8gSWYgZXZlbiwgY3JlYXRlIHRpZXIgd2l0aCBjaGlsZCBpbWdcblx0XHRcdFx0YWNjLnB1c2goZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcInRpZXJcIiB9LCBbY3VycmVudEltZ10pKTtcblx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIElmIG9kZCwgYWRkIGltZyBjaGlsZCB0byBwcmV2aW91cyB0aWVyXG5cdFx0XHRcdGFjY1thY2MubGVuZ3RoIC0gMV0uY2hpbGRyZW4ucHVzaChjdXJyZW50SW1nKTtcblx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdH1cblx0XHR9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEV2ZW50cygpIHtcblx0Y29uc3QgW2V2ZW50c0NvbnRlbnQsIHBob3RvcywgY2FsbFRvQWN0aW9uLCBtb2RhbEVsZW1lbnRdID0gW1xuXHRcdFwiY29udGVudFwiLFxuXHRcdFwicGhvdG9zXCIsXG5cdFx0XCJjYWxsLXRvLWFjdGlvblwiLFxuXHRcdFwibW9kYWwgY2xvc2UtbW9kYWwgaGlkZGVuXCIsXG5cdF0ubWFwKChlbCkgPT4ge1xuXHRcdHJldHVybiBlbEZhY3RvcnkoXCJhcnRpY2xlXCIsIHsgY2xhc3NMaXN0OiBlbCB9KTtcblx0fSk7XG5cblx0ZXZlbnRzQ29udGVudC5jaGlsZHJlbi5wdXNoKFxuXHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJhcnRcIiB9KSxcblx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwidGV4dFwiIH0sIGNyZWF0ZVRleHRDaGlsZHJlbigpKVxuXHQpO1xuXG5cdHBob3Rvcy5jaGlsZHJlbi5wdXNoKC4uLmNyZWF0ZVBob3RvcygpKTtcblxuXHRjYWxsVG9BY3Rpb24uY2hpbGRyZW4ucHVzaChcblx0XHRlbEZhY3RvcnkoXCJwXCIsIHsgdGV4dENvbnRlbnQ6IFwiTGV0IHVzIGhvc3QgeW91ciBuZXh0IGV2ZW50XCIgfSksXG5cdFx0ZWxGYWN0b3J5KFwiYnV0dG9uXCIsIHtcblx0XHRcdGNsYXNzTGlzdDogXCJpbnF1aXJlXCIsXG5cdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0dGV4dENvbnRlbnQ6IFwiSW5xdWlyZSBOb3dcIixcblx0XHR9KVxuXHQpO1xuXG5cdG1vZGFsRWxlbWVudC5jaGlsZHJlbi5wdXNoKGNyZWF0ZUZvcm0oKSk7XG5cblx0cmV0dXJuIGh0bWxGYWN0b3J5KFxuXHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJldmVudHMgZHluYW1pY1wiIH0sIFtcblx0XHRcdGV2ZW50c0NvbnRlbnQsXG5cdFx0XHRwaG90b3MsXG5cdFx0XHRjYWxsVG9BY3Rpb24sXG5cdFx0XHRtb2RhbEVsZW1lbnQsXG5cdFx0XSlcblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlbkZvckNsaWNrcygpIHtcblx0Y29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuXG5cdGNvbnN0IGlucXVpcmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnF1aXJlXCIpO1xuXHRpbnF1aXJlQnRucy5mb3JFYWNoKChidXR0b24pID0+IHtcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGNvbnN0IGNsb3NlTW9kYWxCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jbG9zZS1tb2RhbFwiKTtcblx0Y2xvc2VNb2RhbEJ0bnMuZm9yRWFjaCgoY2xvc2VyKSA9PiB7XG5cdFx0Y2xvc2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcyhcImNsb3NlLW1vZGFsXCIpKSB7XG5cdFx0XHRcdG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnNvbGUubG9nKFwiRm9ybSBzdWJtaXR0ZWQuXCIpO1xuXHRcdG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cdH0pO1xufVxuIiwiaW1wb3J0IHsgZWxGYWN0b3J5LCBmb3JtUm93RmFjdG9yeSB9IGZyb20gXCIuL2RvbS1mYWN0b3JpZXMuanNcIjtcblxuZnVuY3Rpb24gY3JlYXRlRGV0YWlsU2VjdGlvbigpIHtcblx0Ly8gRmlyc3QgZm9ybS1pdGVtXG5cdGNvbnN0IGV2ZW50VHlwZSA9IGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJmb3JtLWl0ZW1cIiB9LCBbXG5cdFx0ZWxGYWN0b3J5KFwibGFiZWxcIiwge1xuXHRcdFx0aHRtbEZvcjogXCJldmVudC10eXBlXCIsXG5cdFx0XHR0ZXh0Q29udGVudDogXCJUeXBlIG9mIEV2ZW50OlwiLFxuXHRcdH0pLFxuXHRcdGVsRmFjdG9yeShcImlucHV0XCIsIHtcblx0XHRcdGlkOiBcImV2ZW50LXR5cGVcIixcblx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0cGxhY2Vob2xkZXI6IFwiQmlydGhkYXksIEJ1c2luZXNzIERpbm5lciwgZXRjLlwiLFxuXHRcdFx0YXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuXHRcdH0pLFxuXHRdKTtcblxuXHQvLyBNdWx0aXBsZSBjaG9pY2UgcmFkaW8gYnV0dG9uc1xuXHRjb25zdCBsb2NhdGlvbiA9IGVsRmFjdG9yeShcImZpZWxkc2V0XCIsIHsgY2xhc3NMaXN0OiBcImxvY2F0aW9uXCIgfSwgW1xuXHRcdGVsRmFjdG9yeShcImxlZ2VuZFwiLCB7IHRleHRDb250ZW50OiBcIkxvY2F0aW9uOlwiIH0pLFxuXHRcdC4uLltcblx0XHRcdFtcImFzc2V0XCIsIFwiMzI5IENvbHVtYnVzIEF2ZS5cIl0sXG5cdFx0XHRbXCJ0ZXNzYVwiLCBcIjM0OSBBbXN0ZXJkYW0gQXZlLlwiXSxcblx0XHRdLm1hcCgocGFpcikgPT4ge1xuXHRcdFx0cmV0dXJuIGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJmb3JtLWl0ZW1cIiB9LCBbXG5cdFx0XHRcdGVsRmFjdG9yeShcImxhYmVsXCIsIHt9LCBbXG5cdFx0XHRcdFx0ZWxGYWN0b3J5KFwiaW5wdXRcIiwge1xuXHRcdFx0XHRcdFx0bmFtZTogXCJsb2NhdGlvblwiLFxuXHRcdFx0XHRcdFx0dHlwZTogXCJyYWRpb1wiLFxuXHRcdFx0XHRcdFx0dmFsdWU6IHBhaXJbMF0sXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0ZWxGYWN0b3J5KFwic3BhblwiLCB7XG5cdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogcGFpclswXS50b1VwcGVyQ2FzZSgpICsgXCIgLSBcIiArIHBhaXJbMV0sXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdF0pLFxuXHRcdFx0XSk7XG5cdFx0fSksXG5cdF0pO1xuXG5cdC8vIExhc3QgMiByb3dzIG9mIHRoaXMgc2VjdGlvblxuXHRjb25zdCBieVRoZU51bWJlcnMgPSBmb3JtUm93RmFjdG9yeShbXG5cdFx0W1wiUGFydHkgU2l6ZVwiLCBcIm51bWJlclwiLCBcIm9mZlwiXSxcblx0XHRbXCJEYXRlXCIsIFwiZGF0ZVwiLCBcIm9mZlwiXSxcblx0XHRbXCJTdGFydCBUaW1lXCIsIFwidGltZVwiLCBcIm9mZlwiXSxcblx0XHRbXCJFbmQgVGltZVwiLCBcInRpbWVcIiwgXCJvZmZcIl0sXG5cdF0pO1xuXG5cdHJldHVybiBbZXZlbnRUeXBlLCBsb2NhdGlvbiwgLi4uYnlUaGVOdW1iZXJzXTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXh0cmFzU2VjdGlvbigpIHtcblx0Ly8gMSBmb3JtLWl0ZW0gd2l0aCB0ZXh0YXJlYSBhbmQgMSB3aXRoIHNlbGVjdFxuXHRjb25zdCBbdGV4dEFyZWFJdGVtLCBzZWxlY3RJdGVtXSA9IFtcblx0XHRbXCJleHRyYS1pbmZvXCIsIFwidGV4dGFyZWFcIl0sXG5cdFx0W1wicmVmZXJyYWwtc291cmNlXCIsIFwic2VsZWN0XCJdLFxuXHRdLm1hcCgocGFpcikgPT4ge1xuXHRcdHJldHVybiBlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiZm9ybS1pdGVtXCIgfSwgW1xuXHRcdFx0ZWxGYWN0b3J5KFwibGFiZWxcIiwgeyBodG1sRm9yOiBwYWlyWzBdIH0pLFxuXHRcdFx0ZWxGYWN0b3J5KHBhaXJbMV0sIHsgbmFtZTogcGFpclswXSwgaWQ6IHBhaXJbMF0gfSksXG5cdFx0XSk7XG5cdH0pO1xuXG5cdC8vIEFkZCB0ZXh0IGNvbnRlbnQgdG8gZWFjaCA8bGFiZWw+XG5cdHRleHRBcmVhSXRlbS5jaGlsZHJlblswXS5hdHRyaWJ1dGVzLnRleHRDb250ZW50ID1cblx0XHRcIklzIHRoZXJlIGFueSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHlvdSB3b3VsZCBsaWtlIHRvIGFkZD9cIjtcblx0c2VsZWN0SXRlbS5jaGlsZHJlblswXS5hdHRyaWJ1dGVzLnRleHRDb250ZW50ID1cblx0XHRcIkhvdyBkaWQgeW91IGhlYXIgYWJvdXQgdXM/XCI7XG5cblx0Ly8gQWRkIGF0dHJpYnV0ZXMgdG8gPHRleHRhcmVhPlxuXHR0ZXh0QXJlYUl0ZW0uY2hpbGRyZW5bMV0uYXR0cmlidXRlcy5yb3dzID0gXCI2XCI7XG5cdHRleHRBcmVhSXRlbS5jaGlsZHJlblsxXS5hdHRyaWJ1dGVzLnBsYWNlaG9sZGVyID1cblx0XHRcIlN1cnByaXNlcywgRGlldGFyeSBOZWVkcywgZXRjLlwiO1xuXG5cdC8vIEFkZCA5IDxvcHRpb24+J3MgdG8gPHNlbGVjdD5cblx0Y29uc3Qgb3B0aW9uc0FycmF5ID0gW1xuXHRcdFwiRXZlbnRVcFwiLFxuXHRcdFwiSW5zdGFncmFtXCIsXG5cdFx0XCJGYWNlYm9va1wiLFxuXHRcdFwiVHJpcGxlc2VhdCBSZXN0YXVyYW50c1wiLFxuXHRcdFwiU2VhcmNoIEVuZ2luZVwiLFxuXHRcdFwiRW1haWxcIixcblx0XHRcIk90aGVyXCIsXG5cdFx0XCJXZWJzaXRlXCIsXG5cdF0ubWFwKCh0ZXh0KSA9PiB7XG5cdFx0cmV0dXJuIGVsRmFjdG9yeShcIm9wdGlvblwiLCB7XG5cdFx0XHR2YWx1ZTogdGV4dC5zcGxpdChcIiBcIilbMF0udG9Mb3dlckNhc2UoKSxcblx0XHRcdHRleHRDb250ZW50OiB0ZXh0LFxuXHRcdH0pO1xuXHR9KTtcblxuXHRzZWxlY3RJdGVtLmNoaWxkcmVuWzFdLmNoaWxkcmVuLnB1c2goXG5cdFx0ZWxGYWN0b3J5KFwib3B0aW9uXCIsIHtcblx0XHRcdHZhbHVlOiBcIlwiLFxuXHRcdFx0dGV4dENvbnRlbnQ6IFwiU2VsZWN0IGFuIG9wdGlvblwiLFxuXHRcdFx0c2VsZWN0ZWQ6IHRydWUsXG5cdFx0fSksXG5cdFx0Li4ub3B0aW9uc0FycmF5XG5cdCk7XG5cblx0cmV0dXJuIFt0ZXh0QXJlYUl0ZW0sIHNlbGVjdEl0ZW1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9ybSgpIHtcblx0Ly8gQ3JlYXRlIHNlY3Rpb25zIGNvbnRhaW5lcnMgZm9yIHRoZSBjb21wbGljYXRlZCBwYXJ0c1xuXHRjb25zdCBbZm9ybUNvbnRhY3QsIGZvcm1EZXRhaWxzLCBmb3JtRXh0cmFzXSA9IFtcblx0XHRcImZvcm0tY29udGFjdFwiLFxuXHRcdFwiZm9ybS1kZXRhaWxzXCIsXG5cdFx0XCJmb3JtLWV4dHJhc1wiLFxuXHRdLm1hcCgoZWwpID0+IHtcblx0XHRyZXR1cm4gZWxGYWN0b3J5KFwic2VjdGlvblwiLCB7IGNsYXNzTGlzdDogZWwgfSk7XG5cdH0pO1xuXG5cdGZvcm1Db250YWN0LmNoaWxkcmVuLnB1c2goXG5cdFx0ZWxGYWN0b3J5KFwiaDRcIiwgeyB0ZXh0Q29udGVudDogXCJDb250YWN0XCIgfSksXG5cdFx0Li4uZm9ybVJvd0ZhY3RvcnkoW1xuXHRcdFx0W1wiRmlyc3QgTmFtZVwiLCBcInRleHRcIiwgXCJnaXZlbi1uYW1lXCJdLFxuXHRcdFx0W1wiTGFzdCBOYW1lXCIsIFwidGV4dFwiLCBcImZhbWlseS1uYW1lXCJdLFxuXHRcdFx0W1wiRW1haWxcIiwgXCJlbWFpbFwiLCBcImVtYWlsXCJdLFxuXHRcdFx0W1wiUGhvbmVcIiwgXCJ0ZWxcIiwgXCJ0ZWxcIl0sXG5cdFx0XHRbXCJDb21wYW55XCIsIFwidGV4dFwiLCBcIm9yZ2FuaXphdGlvblwiXSxcblx0XHRdKVxuXHQpO1xuXG5cdGZvcm1EZXRhaWxzLmNoaWxkcmVuLnB1c2goXG5cdFx0ZWxGYWN0b3J5KFwiaDRcIiwgeyB0ZXh0Q29udGVudDogXCJFdmVudCBEZXRhaWxzXCIgfSksXG5cdFx0Li4uY3JlYXRlRGV0YWlsU2VjdGlvbigpXG5cdCk7XG5cblx0Zm9ybUV4dHJhcy5jaGlsZHJlbi5wdXNoKFxuXHRcdGVsRmFjdG9yeShcImg0XCIsIHsgdGV4dENvbnRlbnQ6IFwiRXh0cmFzXCIgfSksXG5cdFx0Li4uY3JlYXRlRXh0cmFzU2VjdGlvbigpXG5cdCk7XG5cblx0Ly8gQ3JlYXRlIGZvcm0gZWxlbWVudCBhbmQgb3ZlcmFyY2hpbmcgc3RydWN0dXJlXG5cdGNvbnN0IGZvcm1FbGVtZW50ID0gZWxGYWN0b3J5KFwiZm9ybVwiLCB7fSwgW1xuXHRcdGVsRmFjdG9yeShcInNlY3Rpb25cIiwgeyBjbGFzc0xpc3Q6IFwiZm9ybS1oZWFkZXJcIiB9LCBbXG5cdFx0XHRlbEZhY3RvcnkoXCJoM1wiLCB7IHRleHRDb250ZW50OiBcIkxldCdzIGdldCBzb21lIGluZm8hXCIgfSksXG5cdFx0XHRlbEZhY3RvcnkoXCJidXR0b25cIiwge1xuXHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0XHRjbGFzc0xpc3Q6IFwiY2xvc2UtbW9kYWwgY2xvc2UtYnRuXCIsXG5cdFx0XHRcdGlkOiBcImNsb3NlLW1vZGFsXCIsXG5cdFx0XHRcdHRleHRDb250ZW50OiBcIsOXXCIsXG5cdFx0XHR9KSxcblx0XHRdKSxcblx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiZm9ybS1jb250ZW50XCIgfSwgW1xuXHRcdFx0Zm9ybUNvbnRhY3QsXG5cdFx0XHRmb3JtRGV0YWlscyxcblx0XHRcdGZvcm1FeHRyYXMsXG5cdFx0XSksXG5cdFx0ZWxGYWN0b3J5KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJzdWJtaXRcIiwgdGV4dENvbnRlbnQ6IFwiU3VibWl0XCIgfSksXG5cdF0pO1xuXHRyZXR1cm4gZm9ybUVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBlbEZhY3RvcnksIGh0bWxGYWN0b3J5IH0gZnJvbSBcIi4vZG9tLWZhY3Rvcmllcy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRIb21lKCkge1xuXHRjb25zdCBoZXJvVGV4dCA9IGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJoZXJvLXRleHRcIiB9LCBbXG5cdFx0ZWxGYWN0b3J5KFwiaDFcIiwgeyBjbGFzc0xpc3Q6IFwiYnJhbmRcIiwgdGV4dENvbnRlbnQ6IFwiQUVcIiB9KSxcblx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwicmVzZXJ2YXRpb25zXCIgfSwgW1xuXHRcdFx0ZWxGYWN0b3J5KFwiYVwiLCB7XG5cdFx0XHRcdGhyZWY6IFwiaHR0cHM6Ly9yZXN5LmNvbS9jaXRpZXMvbnkvYXNzZXRcIixcblx0XHRcdFx0dGV4dENvbnRlbnQ6IFwicmVzZXJ2YXRpb25zXCIsXG5cdFx0XHR9KSxcblx0XHRdKSxcblx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwic2Nyb2xsLWRvd25cIiB9LCBbXG5cdFx0XHRlbEZhY3RvcnkoXCJhXCIsIHsgaHJlZjogXCIjaG91cnNcIiB9LCBbXG5cdFx0XHRcdGVsRmFjdG9yeShcImlcIiwge1xuXHRcdFx0XHRcdGNsYXNzTGlzdDogXCJmYSBmYS1hbmdsZS1kb3duXCIsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XSksXG5cdFx0XSksXG5cdF0pO1xuXG5cdGNvbnN0IGxhbnRlcm5zID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImxhbnRlcm5zXCIgfSk7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0bGFudGVybnMuY2hpbGRyZW4ucHVzaChcblx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJsYW50ZXJuXCIgfSwgW1xuXHRcdFx0XHQuLi5bXCJ0b3BcIiwgXCJib2R5XCIsIFwiYm90dG9tXCJdLm1hcCgodGV4dCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBlbEZhY3RvcnkoXCJkaXZcIiwge1xuXHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiB0ZXh0LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KSxcblx0XHRcdF0pXG5cdFx0KTtcblx0fVxuXG5cdGNvbnN0IGhvdXJzRGV0YWlscyA9IFtcblx0XHR7XG5cdFx0XHRzY2hlZHVsZTogXCJvcGVyYXRpbmcgaG91cnNcIixcblx0XHRcdGhvdXJzVGV4dDoge1xuXHRcdFx0XHRcIm1vbmRheS1mcmlkYXlcIjogXCI0cG0tMTFwbVwiLFxuXHRcdFx0XHRzYXR1cmRheTogXCIycG0tMmFtXCIsXG5cdFx0XHRcdHN1bmRheTogXCIycG0tMTBwbVwiLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNjaGVkdWxlOiBcImRpbm5lciBob3Vyc1wiLFxuXHRcdFx0aG91cnNUZXh0OiB7XG5cdFx0XHRcdFwibW9uZGF5LXRodXJzZGF5XCI6IFwiNXBtLTEwcG1cIixcblx0XHRcdFx0ZnJpZGF5OiBcIjVwbS0xMXBtXCIsXG5cdFx0XHRcdHNhdHVyZGF5OiBcIjJwbS0xMXBtXCIsXG5cdFx0XHRcdHN1bmRheTogXCIycG0tOXBtXCIsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2NoZWR1bGU6IFwiaGFwcHkgaG91clwiLFxuXHRcdFx0aG91cnNUZXh0OiB7XG5cdFx0XHRcdFwibW9uZGF5LWZyaWRheVwiOiBcIjRwbS02cG1cIixcblx0XHRcdFx0c2F0dXJkYXk6IFwiMTBwbS0xMmFtXCIsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdF07XG5cblx0Y29uc3QgaG91cnNEaXZzID0gaG91cnNEZXRhaWxzLm1hcCgoaG91cnNPYmplY3QpID0+IHtcblx0XHRyZXR1cm4gZWxGYWN0b3J5KFxuXHRcdFx0XCJkaXZcIixcblx0XHRcdHtcblx0XHRcdFx0Y2xhc3NMaXN0OiBob3Vyc09iamVjdC5zY2hlZHVsZS5zcGxpdChcIiBcIikuam9pbihcIi1cIiksXG5cdFx0XHR9LFxuXHRcdFx0W1xuXHRcdFx0XHRlbEZhY3RvcnkoXCJoMlwiLCB7IHRleHRDb250ZW50OiBob3Vyc09iamVjdC5zY2hlZHVsZSArIFwiOlwiIH0pLFxuXHRcdFx0XHQuLi5PYmplY3QuZW50cmllcyhob3Vyc09iamVjdC5ob3Vyc1RleHQpLm1hcCgoZW50cnkpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gZWxGYWN0b3J5KFwicFwiLCB7XG5cdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogYCR7ZW50cnlbMF19OiAke2VudHJ5WzFdfSBgLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KSxcblx0XHRcdF1cblx0XHQpO1xuXHR9KTtcblxuXHRjb25zdCBob21lRGl2ID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImhvbWUgZHluYW1pY1wiIH0sIFtcblx0XHRlbEZhY3RvcnkoXCJzZWN0aW9uXCIsIHsgY2xhc3NMaXN0OiBcImhlcm9cIiB9LCBbXG5cdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiYXJ0XCIgfSksXG5cdFx0XHRoZXJvVGV4dCxcblx0XHRcdGxhbnRlcm5zLFxuXHRcdF0pLFxuXHRcdGVsRmFjdG9yeShcInNlY3Rpb25cIiwgeyBjbGFzc0xpc3Q6IFwiaG91cnMtY29udGFpbmVyXCIgfSwgW1xuXHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImhvdXJzXCIsIGlkOiBcImhvdXJzXCIgfSwgaG91cnNEaXZzKSxcblx0XHRdKSxcblx0XSk7XG5cdHJldHVybiBodG1sRmFjdG9yeShob21lRGl2KTtcbn1cbiIsImltcG9ydCB7IGVsRmFjdG9yeSwgaHRtbEZhY3RvcnkgfSBmcm9tIFwiLi9kb20tZmFjdG9yaWVzLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZE1lbnUoKSB7XG5cdGNvbnN0IGRpbm5lckxpbmsgPVxuXHRcdFwiaHR0cHM6Ly93d3cuYXNzZXRyZXN0YXVyYW50LmNvbS9fZmlsZXMvdWdkLzU0YTRjZF8zYTdhMGE1NWFlNzQ0ZmNlYWVjODUzYmMwYjE5YzdiMi5wZGZcIjtcblx0Y29uc3Qgd2luZUxpbmsgPVxuXHRcdFwiaHR0cHM6Ly93d3cuYXNzZXRyZXN0YXVyYW50LmNvbS9fZmlsZXMvdWdkLzU0YTRjZF8zODFlNTBkZTY5YWM0YjNkYWU1ZjgwNTUxM2MzMzRkNi5wZGZcIjtcblxuXHRyZXR1cm4gaHRtbEZhY3RvcnkoXG5cdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcIm1lbnUgZHluYW1pY1wiIH0sIFtcblx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJtZW51LWFydFwiIH0pLFxuXHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcIm1lbnUtdGV4dFwiIH0sIFtcblx0XHRcdFx0Li4uW1wiZGlubmVyXCIsIFwid2luZVwiXS5tYXAoKHRleHQpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gZWxGYWN0b3J5KFwiYVwiLCB7XG5cdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogdGV4dCxcblx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJtZW51LWxpbmtcIixcblx0XHRcdFx0XHRcdGhyZWY6IHRleHQgPT09IFwiZGlubmVyXCIgPyBkaW5uZXJMaW5rIDogd2luZUxpbmssXG5cdFx0XHRcdFx0XHR0YXJnZXQ6IFwiX2JsYW5rXCIsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRlbEZhY3RvcnkoXCJoMVwiLCB7IGNsYXNzTGlzdDogXCJicmFuZFwiLCB0ZXh0Q29udGVudDogXCJBRVwiIH0pLFxuXHRcdFx0XSksXG5cdFx0XSlcblx0KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGJ1aWxkTWVudSB9IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCB7IGJ1aWxkSG9tZSB9IGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCB7IGJ1aWxkRXZlbnRzLCBsaXN0ZW5Gb3JDbGlja3MgfSBmcm9tIFwiLi9ldmVudC5qc1wiO1xuaW1wb3J0IHsgYnVpbGRBYm91dFVzIH0gZnJvbSBcIi4vYWJvdXQtdXMuanNcIjtcbmltcG9ydCB7IGJ1aWxkQ29uc3RhbnRzIH0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9yZWJvb3QtdXRpbC5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL2NvbnN0YW50cy5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL2hvbWUuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9tZW51LmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvZXZlbnRzLmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvYWJvdXQuY3NzXCI7XG5cbmNvbnN0IGFsbENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC1jb250ZW50XCIpO1xuYWxsQ29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5bLi4uYnVpbGRDb25zdGFudHMoKV0uZm9yRWFjaCgoc2VjdGlvbikgPT4gYWxsQ29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uKSk7XG5cbmNvbnN0IGNoYW5naW5nQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhbmdpbmctY29udGVudFwiKTtcbmNoYW5naW5nQ29udGVudC5hcHBlbmRDaGlsZChidWlsZEFib3V0VXMoKSk7XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXItdG9nZ2xlclwiKS5mb3JFYWNoKChidXR0b24pID0+IHtcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0c2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcblx0fSk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYnRuXCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0aGFuZGxlQnVpbGRDbGljayhlLnRhcmdldC5pZCk7XG5cdH0pO1xufSk7XG5cbmZ1bmN0aW9uIGhhbmRsZUJ1aWxkQ2xpY2sodGFiQ2hvaWNlKSB7XG5cdGNoYW5naW5nQ29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cdGNoYW5naW5nQ29udGVudC5hcHBlbmRDaGlsZChcblx0XHR7XG5cdFx0XHRcImhvbWUtYnRuXCI6IGJ1aWxkSG9tZSgpLFxuXHRcdFx0XCJldmVudHMtYnRuXCI6IGJ1aWxkRXZlbnRzKCksXG5cdFx0XHRcIm1lbnUtYnRuXCI6IGJ1aWxkTWVudSgpLFxuXHRcdFx0XCJhYm91dC1idG5cIjogYnVpbGRBYm91dFVzKCksXG5cdFx0fVt0YWJDaG9pY2VdXG5cdCk7XG5cdHNpZGViYXIuY2xhc3NMaXN0ID0gXCJzaWRlYmFyXCI7XG5cdGlmICh0YWJDaG9pY2UgPT09IFwiZXZlbnRzLWJ0blwiKSB7XG5cdFx0bGlzdGVuRm9yQ2xpY2tzKCk7XG5cdH1cbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRoYW5kbGVCdWlsZENsaWNrKFwiYWJvdXQtYnRuXCIpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=