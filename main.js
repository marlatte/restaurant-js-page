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
	padding: 6px 20px 2px;

	display: flex;
	flex-direction: column-reverse;
	gap: 4px;

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
		gap: 8px;

		text-align: center;
		font-size: 15px;
		color: var(--text-strong);
	}

	& .contact-container {
		display: flex;
		flex-direction: column;
	}

	& #contact-btn {
		padding: 10px;
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

		& .author {
			gap: 10px;
			font-size: 20px;
		}

		& .contact-container {
			align-items: end;
		}
	}
}

.fa.fa-github {
	color: currentColor;
	font-size: 20px;

	&:hover {
		transition: transform 0.4s ease-in-out;
		transform: rotate(-360deg) scale(1.3);
	}

	@media (min-width: 700px) {
		font-size: 30px;
	}
}
/* ---------------     /Footer     --------------- */
`, "",{"version":3,"sources":["webpack://./src/styles/constants.css"],"names":[],"mappings":"AAAA;CACC,OAAO;AACR;;AAEA,oDAAoD;;AAEpD;CACC,eAAe;CACf,UAAU;CACV,YAAY;CACZ,UAAU;CACV,eAAe;;CAEf,aAAa;CACb,sBAAsB;CACtB,kBAAkB;;CAElB,gCAAgC;CAChC,eAAe;CACf,+CAA+C;;CAE/C,gBAAgB;;CAEhB;EACC,YAAY;EACZ,aAAa;CACd;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,WAAW;EACX,gBAAgB;;EAEhB,+CAA+C;EAC/C,YAAY;;EAEZ;GACC,WAAW;EACZ;;EAEA;GACC,aAAa;EACd;CACD;AACD;;AAEA;CACC,iBAAiB;;CAEjB,2BAA2B;CAC3B,yCAAyC;AAC1C;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,OAAO;CACP,SAAS;;CAET;EACC,gBAAgB;EAChB,iBAAiB;CAClB;;CAEA;EACC,qBAAqB;CACtB;;CAEA;EACC,mBAAmB;EACnB,uBAAuB;CACxB;AACD;;AAEA;CACC,mBAAmB;CACnB,aAAa;CACb,mBAAmB;CACnB,8BAA8B;;CAE9B,+CAA+C;CAC/C,eAAe;;CAEf;EACC,aAAa;EACb,uBAAuB;CACxB;;CAEA;EACC,aAAa;CACd;;CAEA;EACC,aAAa;CACd;AACD;;AAEA,qDAAqD;;AAErD,iDAAiD;;AAEjD;CACC,6CAA6C;;CAE7C,aAAa;CACb,sBAAsB;AACvB;;AAEA,kDAAkD;;AAElD,mDAAmD;;AAEnD;CACC,eAAe;CACf,SAAS;CACT,gCAAgC;CAChC,WAAW;CACX,qBAAqB;;CAErB,aAAa;CACb,8BAA8B;CAC9B,QAAQ;;CAER,+CAA+C;CAC/C,gCAAgC;;CAEhC;EACC,OAAO;CACR;;CAEA;EACC,aAAa;CACd;;CAEA;EACC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;;EAER,kBAAkB;EAClB,eAAe;EACf,yBAAyB;CAC1B;;CAEA;EACC,aAAa;EACb,sBAAsB;CACvB;;CAEA;EACC,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;;EAElB;GACC,sBAAsB;GACtB,qBAAqB;EACtB;CACD;;CAEA;EACC,mBAAmB;EACnB,mBAAmB;;EAEnB;GACC,aAAa;EACd;;EAEA;GACC,SAAS;GACT,eAAe;EAChB;;EAEA;GACC,gBAAgB;EACjB;CACD;AACD;;AAEA;CACC,mBAAmB;CACnB,eAAe;;CAEf;EACC,sCAAsC;EACtC,qCAAqC;CACtC;;CAEA;EACC,eAAe;CAChB;AACD;AACA,oDAAoD","sourcesContent":["#changing-content {\n\tflex: 1;\n}\n\n/* ---------------     Sidebar     --------------- */\n\n.sidebar {\n\tposition: fixed;\n\tz-index: 1;\n\theight: 100%;\n\twidth: 0px;\n\tpadding: 20px 0;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\toverflow-x: hidden;\n\n\tbackground-color: var(--bg-main);\n\tfont-size: 40px;\n\tbox-shadow: 0px 0px 7px var(--accent-main-dark);\n\n\ttransition: 0.5s;\n\n\t&.open {\n\t\twidth: 300px;\n\t\tpadding: 20px;\n\t}\n\n\t#close-sidebar {\n\t\talign-self: end;\n\t}\n\n\t@media (min-width: 700px) {\n\t\twidth: 100%;\n\t\tposition: static;\n\n\t\tbox-shadow: 0px 0px 5px var(--accent-main-dark);\n\t\tborder: none;\n\n\t\t&.open {\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t#close-sidebar {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n}\n\n.close-btn {\n\t--font-size: 50px;\n\n\tfont-size: var(--font-size);\n\tline-height: calc(var(--font-size) * 0.6);\n}\n\nnav {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 1;\n\tgap: 50px;\n\n\t& button {\n\t\ttext-align: left;\n\t\tmargin-left: 22px;\n\t}\n\n\t& button:hover {\n\t\tcolor: var(--text-h1);\n\t}\n\n\t@media (min-width: 700px) {\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\t}\n}\n\nheader {\n\tpadding-right: 20px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\n\tbox-shadow: 0px 0px 5px var(--accent-main-dark);\n\tfont-size: 24px;\n\n\t#open-sidebar {\n\t\tpadding: 15px;\n\t\tbackground-color: black;\n\t}\n\n\t& .socials {\n\t\tdisplay: flex;\n\t}\n\n\t@media (min-width: 700px) {\n\t\tdisplay: none;\n\t}\n}\n\n/* ---------------     /Sidebar     --------------- */\n\n/* ---------------     Main     --------------- */\n\n#changing-content {\n\tmargin-bottom: calc(var(--footer-height) * 2);\n\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n/* ---------------     /Main     --------------- */\n\n/* ---------------     Footer     --------------- */\n\nfooter {\n\tposition: fixed;\n\tbottom: 0;\n\tmin-height: var(--footer-height);\n\twidth: 100%;\n\tpadding: 6px 20px 2px;\n\n\tdisplay: flex;\n\tflex-direction: column-reverse;\n\tgap: 4px;\n\n\tbox-shadow: 0px 0px 5px var(--accent-main-dark);\n\tbackground-color: var(--bg-main);\n\n\t& > * {\n\t\tflex: 1;\n\t}\n\n\t& .socials {\n\t\tdisplay: none;\n\t}\n\n\t& .author {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tgap: 8px;\n\n\t\ttext-align: center;\n\t\tfont-size: 15px;\n\t\tcolor: var(--text-strong);\n\t}\n\n\t& .contact-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\t& #contact-btn {\n\t\tpadding: 10px;\n\t\tborder: 1px solid currentColor;\n\t\tborder-radius: 5px;\n\n\t\t&:hover {\n\t\t\tbackground-color: #fff;\n\t\t\tcolor: var(--bg-main);\n\t\t}\n\t}\n\n\t@media (min-width: 700px) {\n\t\tflex-direction: row;\n\t\talign-items: center;\n\n\t\t& .socials {\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\t& .author {\n\t\t\tgap: 10px;\n\t\t\tfont-size: 20px;\n\t\t}\n\n\t\t& .contact-container {\n\t\t\talign-items: end;\n\t\t}\n\t}\n}\n\n.fa.fa-github {\n\tcolor: currentColor;\n\tfont-size: 20px;\n\n\t&:hover {\n\t\ttransition: transform 0.4s ease-in-out;\n\t\ttransform: rotate(-360deg) scale(1.3);\n\t}\n\n\t@media (min-width: 700px) {\n\t\tfont-size: 30px;\n\t}\n}\n/* ---------------     /Footer     --------------- */\n"],"sourceRoot":""}]);
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
`, "",{"version":3,"sources":["webpack://./src/styles/events.css"],"names":[],"mappings":"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","sourcesContent":[".events .content {\n\twidth: 90%;\n\tmargin: auto;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 20px;\n\n\t& .art {\n\t\theight: 160px;\n\t\tbackground-position: bottom;\n\t}\n\n\t& .text {\n\t\tmargin: 20px 0;\n\t\tmax-width: 65ch;\n\t}\n\n\t& h1 {\n\t\tfont-size: 30px;\n\t}\n\n\t& h2 {\n\t\tmargin: 30px 0 16px;\n\t}\n\n\t& p {\n\t\tmargin-bottom: 20px;\n\t\tfont-size: 18px;\n\t\tline-height: 1.5;\n\t\tletter-spacing: 1px;\n\t}\n\n\t& p:nth-last-child(2) {\n\t\twidth: min(100%, 440px);\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tjustify-content: space-between;\n\t\tgap: 2px;\n\t}\n\n\t@media (min-width: 700px) {\n\t\t--art-width: min(300px, 30%);\n\n\t\theight: calc(960px - 8vw);\n\t\twidth: min(90%, 1100px);\n\n\t\tflex-direction: row-reverse;\n\t\talign-items: stretch;\n\t\tjustify-content: space-between;\n\n\t\t& .art {\n\t\t\tflex-shrink: 0;\n\t\t\theight: 100%;\n\t\t\tbackground-position: center;\n\t\t}\n\n\t\t& .call-to-action {\n\t\t\talign-items: start;\n\t\t\tpadding: 40px 0;\n\t\t}\n\t}\n}\n\n.photos {\n\tbackground-color: black;\n}\n\n.tier {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t& .image-container {\n\t\tflex-grow: 1;\n\t}\n\n\t& img {\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\tobject-fit: cover;\n\t}\n\n\t@media (min-width: 700px) {\n\t\twidth: 100%;\n\t\tflex-direction: row;\n\t}\n}\n\n.events .call-to-action {\n\tpadding: 90px 0;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 24px;\n\n\t& p {\n\t\tfont-size: 20px;\n\t\tmargin: 0;\n\t}\n\n\t& button {\n\t\tpadding: 20px;\n\n\t\tborder: 1px solid white;\n\t\tborder-radius: 5px;\n\n\t\tfont-size: 18px;\n\t\ttext-transform: uppercase;\n\n\t\ttransition: all 0.3s;\n\t}\n\n\t& button:hover {\n\t\tbackground-color: #fff;\n\t\tcolor: var(--bg-main);\n\t}\n}\n\n/* ---------------     Modal     --------------- */\n\n.modal {\n\tposition: fixed;\n\ttop: 0;\n\tz-index: 2;\n\theight: 100vh;\n\twidth: 100vw;\n\n\tdisplay: grid;\n\tplace-content: center;\n\n\tbackground-color: rgba(200, 200, 200, 0.5);\n\tbackdrop-filter: blur(2px);\n}\n\nform {\n\t--form-spacer: 12px;\n\n\tmax-height: 80vh;\n\tpadding: 12px;\n\twidth: min(90vw, 1000px);\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--form-spacer);\n\n\tbackground-color: skyblue;\n\tcolor: #000;\n\tborder-radius: 15px;\n}\n\n.form-header {\n\tmargin: 0;\n\tpadding-left: 2px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.form-content {\n\tpadding: var(--form-spacer);\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: calc(var(--form-spacer) * 2.5);\n\toverflow-y: scroll;\n\n\tborder: 1px solid var(--border-input);\n\tborder-radius: 5px;\n\n\t@media (min-width: 800px) {\n\t\tflex-direction: row;\n\t\tjustify-content: space-between;\n\t\toverflow-y: auto;\n\t}\n}\n\n.form-content h4 {\n\tfont-size: 20px;\n}\n\n.form-contact,\n.form-details,\n.form-extras {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--form-spacer);\n}\n\n.form-row {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: var(--form-spacer);\n}\n\n.form-item {\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: calc(var(--form-spacer) * 0.5);\n}\n\n.form-details .form-row .form-item {\n\twidth: 47%;\n}\n\ninput,\ntextarea {\n\tappearance: none;\n}\n\ninput,\ntextarea,\nselect {\n\tpadding: 6px 10px;\n\n\tfont-size: max(16px, 0.9rem);\n\tbackground-color: var(--bg-input);\n\tborder: 1px solid var(--border-input);\n\tborder-radius: 5px;\n}\n\nfieldset {\n\tpadding: 8px 8px 10px;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: calc(var(--form-spacer) * 0.8);\n\n\tborder: 1px solid var(--border-input);\n}\n\nlegend {\n\tpadding: 5px 8px;\n\tborder: 1px solid var(--border-input);\n}\n\nlabel input[type=\"radio\"] {\n\tdisplay: none;\n}\nlabel input[type=\"radio\"] ~ span {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 6px;\n}\nlabel input[type=\"radio\"] ~ span:before {\n\t--radio-dimensions: 15px;\n\n\theight: var(--radio-dimensions);\n\twidth: var(--radio-dimensions);\n\n\tcontent: \"\";\n\tbackground: var(--bg-input);\n\tmargin-right: 5px;\n\n\tborder: 1px solid var(--border-input);\n\tborder-radius: var(--radio-dimensions);\n\ttransition: all 300ms ease-in-out;\n}\n\nlabel input[type=\"radio\"]:checked ~ span:before {\n\tborder: 5px solid var(--bg-main);\n}\n\ntextarea {\n\tresize: vertical;\n}\n\nform [type=\"submit\"] {\n\talign-self: center;\n\tpadding: 12px;\n\twidth: min(100%, 280px);\n\n\tbackground-color: var(--text-h1);\n\tborder-radius: 200px;\n\n\tfont-size: 1.5rem;\n\ttext-transform: uppercase;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\n\t&:hover {\n\t\tbox-shadow: inset 0 0 10px #916f08;\n\t}\n}\n\n/* ---------------     /Modal     --------------- */\n"],"sourceRoot":""}]);
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
	bottom: 100px;

	display: grid;
	gap: 30px;

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
`, "",{"version":3,"sources":["webpack://./src/styles/home.css"],"names":[],"mappings":"AAAA;CACC,gBAAgB;;CAEhB;EACC,qBAAqB;CACtB;;CAEA;EACC,aAAa;CACd;AACD;;AAEA;CACC,kBAAkB;CAClB,2BAA2B;CAC3B,UAAU;CACV,YAAY;;CAEZ,aAAa;CACb,uBAAuB;;CAEvB;EACC,4BAA4B;EAC5B,uBAAuB;EACvB,YAAY;EACZ,8BAA8B;EAC9B,4BAA4B;CAC7B;AACD;;AAEA;CACC,WAAW;CACX,uBAAuB;;CAEvB,mNAAmN;CACnN,sBAAsB;CACtB,4BAA4B;CAC5B,2BAA2B;;CAE3B;EACC,WAAW;;EAEX,6LAA6L;CAC9L;AACD;;AAEA;CACC,kBAAkB;CAClB,aAAa;;CAEb,aAAa;CACb,SAAS;;CAET;EACC,6BAA6B;CAC9B;;CAEA;EACC,gBAAgB;EAChB,qBAAqB;EACrB,SAAS;CACV;AACD;;AAEA;CACC,cAAc;CACd,eAAe;CACf,kBAAkB;CAClB,yBAAyB;CACzB,mBAAmB;CACnB,8BAA8B;CAC9B,0BAA0B;AAC3B;;AAEA;CACC,aAAa;CACb,qBAAqB;CACrB,qBAAqB;;CAErB;EACC,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;EACf,6BAA6B;CAC9B;AACD;;AAEA;CACC;EACC,wBAAwB;CACzB;CACA;EACC,2BAA2B;CAC5B;CACA;EACC,wBAAwB;CACzB;AACD;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,WAAW;;CAEX;EACC,aAAa;CACd;AACD;;AAEA;CACC,kBAAkB;CAClB,mBAAmB;;CAEnB,aAAa;CACb,qBAAqB;CACrB,qBAAqB;;CAErB;;EAEC,kBAAkB;EAClB,wBAAwB;EACxB,0BAA0B;;EAE1B,uBAAuB;CACxB;;CAEA;EACC,YAAY;EACZ,0BAA0B;CAC3B;;CAEA;EACC,SAAS;EACT,0BAA0B;CAC3B;;CAEA;EACC,UAAU;EACV,aAAa;EACb,UAAU;;EAEV,mBAAmB;EACnB,yCAAyC;EACzC,gCAAgC;EAChC;;;;GAIC;CACF;;CAEA;EACC;;;;;IAKE;CACH;;CAEA;EACC,oCAAoC;CACrC;AACD;;AAEA;CACC,aAAa;;CAEb,aAAa;CACb,uBAAuB;;CAEvB,sCAAsC;AACvC;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;;CAET;EACC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;CACT;;CAEA;EACC,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,SAAS;CACV;AACD","sourcesContent":[".home {\n\tmargin-top: 20px;\n\n\t& h2 {\n\t\tcolor: var(--text-h1);\n\t}\n\n\t@media (min-width: 700px) {\n\t\tmargin-top: 0;\n\t}\n}\n\n.hero {\n\tposition: relative;\n\theight: calc(100svh - 80px);\n\twidth: 90%;\n\tmargin: auto;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\n\t@media (min-width: 700px) {\n\t\t--art-width: min(190px, 20%);\n\t\twidth: min(90%, 1300px);\n\t\tmargin: auto;\n\t\tjustify-content: space-between;\n\t\theight: calc(100svh - 100px);\n\t}\n}\n\n.art {\n\theight: 68%;\n\twidth: var(--art-width);\n\n\tbackground-image: url(https://static.wixstatic.com/media/54a4cd_5059116c59d244d08c3170b49d6e7b0f~mv2.jpg/v1/fill/w_546,h_728,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_5059116c59d244d08c3170b49d6e7b0f~mv2.jpg);\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\n\t@media screen and (min-width: 700px) {\n\t\theight: 80%;\n\n\t\tbackground-image: url(https://static.wixstatic.com/media/54a4cd_ae5e22486dbb49debb9cd8ba1b780b6e~mv2.jpg/v1/fill/w_388,h_1240,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Artwork1_Final_8x2_5.jpg);\n\t}\n}\n\n.hero-text {\n\tposition: absolute;\n\tbottom: 100px;\n\n\tdisplay: grid;\n\tgap: 30px;\n\n\t& h1 {\n\t\t--font-size: min(50vw, 300px);\n\t}\n\n\t@media (min-width: 700px) {\n\t\tposition: static;\n\t\tplace-content: center;\n\t\tgap: 60px;\n\t}\n}\n\n.reservations {\n\tcolor: #ffe5e5;\n\tfont-size: 20px;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tletter-spacing: 2px;\n\ttext-decoration: underline 1px;\n\ttext-underline-offset: 2px;\n}\n\n.scroll-down {\n\tdisplay: grid;\n\tplace-content: center;\n\tcolor: var(--text-h1);\n\n\t& .fa-angle-down {\n\t\tmargin-top: 10px;\n\t\tline-height: 16px;\n\t\tfont-size: 70px;\n\t\tanimation: bounce 2s infinite;\n\t}\n}\n\n@keyframes bounce {\n\t0% {\n\t\ttransform: translateY(0);\n\t}\n\t50% {\n\t\ttransform: translateY(30px);\n\t}\n\t100% {\n\t\ttransform: translateY(0);\n\t}\n}\n\n.lanterns {\n\tdisplay: none;\n\twidth: var(--art-width);\n\theight: 80%;\n\n\t@media (min-width: 700px) {\n\t\tdisplay: grid;\n\t}\n}\n\n.lantern {\n\t--caps-width: 50px;\n\t--caps-height: 20px;\n\n\tdisplay: grid;\n\talign-content: center;\n\tjustify-items: center;\n\n\t& .top,\n\t& .bottom {\n\t\tposition: relative;\n\t\twidth: var(--caps-width);\n\t\theight: var(--caps-height);\n\n\t\tbackground-color: black;\n\t}\n\n\t& .top {\n\t\tbottom: -5px;\n\t\tborder-radius: 80% 80% 0 0;\n\t}\n\n\t& .bottom {\n\t\ttop: -5px;\n\t\tborder-radius: 0 0 80% 80%;\n\t}\n\n\t& .body {\n\t\tz-index: 1;\n\t\theight: 130px;\n\t\twidth: 80%;\n\n\t\tborder-radius: 85px;\n\t\tborder: 1px solid var(--accent-main-dark);\n\t\tbackground-color: var(--bg-main);\n\t\tbackground: repeating-linear-gradient(\n\t\t\tvar(--bg-lantern),\n\t\t\tvar(--bg-lantern) 19%,\n\t\t\tvar(--accent-main-dark) 20%\n\t\t);\n\t}\n\n\t& .body:hover {\n\t\tbackground: radial-gradient(rgba(245, 205, 84, 0.7), transparent 80%),\n\t\t\trepeating-linear-gradient(\n\t\t\t\tvar(--bg-lantern),\n\t\t\t\tvar(--bg-lantern) 19%,\n\t\t\t\tvar(--accent-main-dark) 20%\n\t\t\t);\n\t}\n\n\t& > * {\n\t\tbox-shadow: 3px 3px 6px -3px #8a0f0f;\n\t}\n}\n\n.hours-container {\n\tpadding: 20px;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\n\tborder-top: 2px solid hsl(0, 95%, 70%);\n}\n\n.hours {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 30px;\n\n\t& > div {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tgap: 8px;\n\t}\n\n\t@media (min-width: 700px) {\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\t\twidth: 650px;\n\t\tflex-wrap: wrap;\n\t\tgap: 70px;\n\t}\n}\n"],"sourceRoot":""}]);
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
changingContent.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__.buildHome)());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDJGQUEyRixVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksY0FBYyxhQUFhLFdBQVcsYUFBYSxjQUFjLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLGFBQWEsYUFBYSxZQUFZLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssTUFBTSxLQUFLLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxXQUFXLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksY0FBYyxhQUFhLFlBQVksS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVB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QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLHdGQUF3RixVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsWUFBWSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxZQUFZLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFlBQVksY0FBYyxXQUFXLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsYUFBYSxXQUFXLGFBQWEsV0FBVyxZQUFZLGNBQWMsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsY0FBYyxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLGFBQWEsYUFBYSxj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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxzRkFBc0YsYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsV0FBVyxVQUFVLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsTUFBTSxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxZQUFZLFVBQVUsV0FBVyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFlBQVksS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksY0FBYyxPQUFPLFlBQVksYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxTQUFTLEtBQUssTUFBTSxLQUFLLFNBQVMsS0FBSyxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLGdDQUFnQyxxQkFBcUIsWUFBWSw0QkFBNEIsS0FBSyxpQ0FBaUMsb0JBQW9CLEtBQUssR0FBRyxXQUFXLHVCQUF1QixnQ0FBZ0MsZUFBZSxpQkFBaUIsb0JBQW9CLDRCQUE0QixpQ0FBaUMsbUNBQW1DLDhCQUE4QixtQkFBbUIscUNBQXFDLG1DQUFtQyxLQUFLLEdBQUcsVUFBVSxnQkFBZ0IsNEJBQTRCLDBOQUEwTiwyQkFBMkIsaUNBQWlDLGdDQUFnQyw0Q0FBNEMsa0JBQWtCLHNNQUFzTSxLQUFLLEdBQUcsZ0JBQWdCLHVCQUF1QixrQkFBa0Isb0JBQW9CLGNBQWMsWUFBWSxvQ0FBb0MsS0FBSyxpQ0FBaUMsdUJBQXVCLDRCQUE0QixnQkFBZ0IsS0FBSyxHQUFHLG1CQUFtQixtQkFBbUIsb0JBQW9CLHVCQUF1Qiw4QkFBOEIsd0JBQXdCLG1DQUFtQywrQkFBK0IsR0FBRyxrQkFBa0Isa0JBQWtCLDBCQUEwQiwwQkFBMEIsd0JBQXdCLHVCQUF1Qix3QkFBd0Isc0JBQXNCLG9DQUFvQyxLQUFLLEdBQUcsdUJBQXVCLFFBQVEsK0JBQStCLEtBQUssU0FBUyxrQ0FBa0MsS0FBSyxVQUFVLCtCQUErQixLQUFLLEdBQUcsZUFBZSxrQkFBa0IsNEJBQTRCLGdCQUFnQixpQ0FBaUMsb0JBQW9CLEtBQUssR0FBRyxjQUFjLHVCQUF1Qix3QkFBd0Isb0JBQW9CLDBCQUEwQiwwQkFBMEIsNEJBQTRCLHlCQUF5QiwrQkFBK0IsaUNBQWlDLGdDQUFnQyxLQUFLLGNBQWMsbUJBQW1CLGlDQUFpQyxLQUFLLGlCQUFpQixnQkFBZ0IsaUNBQWlDLEtBQUssZUFBZSxpQkFBaUIsb0JBQW9CLGlCQUFpQiw0QkFBNEIsZ0RBQWdELHVDQUF1QywrSUFBK0ksS0FBSyxxQkFBcUIseU5BQXlOLEtBQUssYUFBYSwyQ0FBMkMsS0FBSyxHQUFHLHNCQUFzQixrQkFBa0Isb0JBQW9CLDRCQUE0Qiw2Q0FBNkMsR0FBRyxZQUFZLGtCQUFrQiwyQkFBMkIsY0FBYyxlQUFlLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGVBQWUsS0FBSyxpQ0FBaUMsMEJBQTBCLDhCQUE4QixtQkFBbUIsc0JBQXNCLGdCQUFnQixLQUFLLEdBQUcscUJBQXFCO0FBQ25pSztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDek12QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sc0ZBQXNGLFdBQVcsVUFBVSxZQUFZLGNBQWMsTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFlBQVksWUFBWSxhQUFhLGNBQWMsTUFBTSxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxhQUFhLFdBQVcsWUFBWSxZQUFZLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxnQ0FBZ0Msb0JBQW9CLG9CQUFvQiwyQkFBMkIsd0JBQXdCLGlDQUFpQywwQkFBMEIsd0JBQXdCLEtBQUssR0FBRyxlQUFlLGtCQUFrQiw2QkFBNkIsaUJBQWlCLDJOQUEyTiwyQkFBMkIsaUNBQWlDLGlDQUFpQyxnQkFBZ0IsdURBQXVELDhCQUE4QixLQUFLLEdBQUcsZ0JBQWdCLHlCQUF5QixvQkFBb0IsMkJBQTJCLGNBQWMsYUFBYSxvQkFBb0IsOEJBQThCLHVDQUF1QyxLQUFLLFdBQVcscUJBQXFCLGdDQUFnQyxzQkFBc0IsMEJBQTBCLEtBQUssaUJBQWlCLGtDQUFrQyxLQUFLLGlDQUFpQyx3QkFBd0IsS0FBSyxHQUFHLHFCQUFxQjtBQUNwcUQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyxxR0FBcUcsUUFBUSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxZQUFZLGNBQWMsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssYUFBYSxXQUFXLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxrSEFBa0gsY0FBYyxlQUFlLDJCQUEyQixHQUFHLFlBQVksb0JBQW9CLDRCQUE0QixpQkFBaUIsaUJBQWlCLHFCQUFxQixHQUFHLE9BQU8saUJBQWlCLDBCQUEwQixHQUFHLGFBQWEsd0JBQXdCLEdBQUcsMElBQTBJLHVCQUF1QixnQ0FBZ0MsMEJBQTBCLHVCQUF1QixzQkFBc0IsMEJBQTBCLDRCQUE0QixzQkFBc0IsOEJBQThCLEdBQUcsVUFBVSx1QkFBdUIsb0JBQW9CLDJCQUEyQix1Q0FBdUMsZ0JBQWdCLHdLQUF3SyxHQUFHLGtCQUFrQixZQUFZLGtCQUFrQiwyQkFBMkIsR0FBRyxjQUFjLHVCQUF1Qiw0QkFBNEIsK0JBQStCLGdDQUFnQyw4Q0FBOEMsR0FBRyxhQUFhLDZCQUE2QixHQUFHLGNBQWMsY0FBYyxvQkFBb0IsR0FBRyxpQkFBaUIsbUNBQW1DLCtCQUErQixHQUFHLDhGQUE4RjtBQUN6eEU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUMvRjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBMEc7QUFDMUc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywwRkFBTzs7OztBQUlvRDtBQUM1RSxPQUFPLGlFQUFlLDBGQUFPLElBQUksMEZBQU8sVUFBVSwwRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXVHO0FBQ3ZHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJaUQ7QUFDekUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFxRztBQUNyRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSStDO0FBQ3ZFLE9BQU8saUVBQWUscUZBQU8sSUFBSSxxRkFBTyxVQUFVLHFGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBcUc7QUFDckc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUkrQztBQUN2RSxPQUFPLGlFQUFlLHFGQUFPLElBQUkscUZBQU8sVUFBVSxxRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQTRHO0FBQzVHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEZBQU87Ozs7QUFJc0Q7QUFDOUUsT0FBTyxpRUFBZSw0RkFBTyxJQUFJLDRGQUFPLFVBQVUsNEZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2J5RDs7QUFFbEQ7QUFDUCxRQUFRLDJEQUFXO0FBQ25CLEVBQUUseURBQVMsVUFBVSxvQkFBb0I7QUFDekMsR0FBRyx5REFBUyxRQUFRLCtDQUErQztBQUNuRSxJQUFJLHlEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRyx5REFBUyxVQUFVLDRCQUE0QjtBQUNsRCxJQUFJLHlEQUFTLFVBQVUsdUJBQXVCO0FBQzlDLElBQUkseURBQVMsVUFBVSx5QkFBeUI7QUFDaEQsS0FBSyx5REFBUyxVQUFVLG1CQUFtQjtBQUMzQyxLQUFLLHlEQUFTLFVBQVUsb0JBQW9CO0FBQzVDO0FBQ0EsSUFBSSx5REFBUyxVQUFVLCtCQUErQjtBQUN0RCxJQUFJLHlEQUFTLFVBQVUseUJBQXlCO0FBQ2hELEtBQUsseURBQVM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSSx5REFBUyxVQUFVLGtDQUFrQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDNEQ7O0FBRTVEO0FBQ0E7QUFDQSxRQUFRLDREQUFTO0FBQ2pCO0FBQ0EsSUFBSSxzQkFBc0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxVQUFVLDREQUFTLFFBQVEsaUJBQWlCO0FBQzVDLElBQUksNERBQVM7QUFDYix5QkFBeUIsVUFBVTtBQUNuQztBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVPO0FBQ1AsaUJBQWlCLDREQUFTLFVBQVUsOEJBQThCO0FBQ2xFLEVBQUUsNERBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLDREQUFTO0FBQ1g7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLDREQUFTO0FBQ3BCO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsZ0JBQWdCLDREQUFTLGFBQWE7QUFDdEMsRUFBRSw0REFBUztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsZ0JBQWdCLDREQUFTLGFBQWE7QUFDdEM7QUFDQSxFQUFFLDREQUFTLFVBQVUscUJBQXFCO0FBQzFDLEdBQUcsNERBQVMsUUFBUSx1QkFBdUI7QUFDM0MsR0FBRyw0REFBUztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUssNERBQVMsUUFBUSwyQkFBMkI7QUFDakQ7QUFDQSxHQUFHLDREQUFTLFFBQVEsd0JBQXdCO0FBQzVDO0FBQ0EsRUFBRSw0REFBUyxVQUFVLGdDQUFnQztBQUNyRCxHQUFHLDREQUFTO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSw0REFBUyxXQUFXLHdCQUF3QjtBQUM5QztBQUNBO0FBQ0EsU0FBUyw4REFBVztBQUNwQixFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEdPO0FBQ1AsVUFBVTtBQUNWOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix3QkFBd0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRHVDO0FBQ3FCOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNERBQVMsYUFBYSx1QkFBdUI7QUFDdEQsRUFBRTs7QUFFRjtBQUNBLEVBQUUsNERBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxFQUFFLDREQUFTLFVBQVUsNkJBQTZCO0FBQ2xELEdBQUcsNERBQVM7QUFDWjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNERBQVMsVUFBVSw4QkFBOEI7QUFDM0QsSUFBSSw0REFBUyxVQUFVLFVBQVU7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsYUFBYSw0REFBUyxVQUFVLG1CQUFtQjtBQUNuRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNERBQVMsY0FBYyxlQUFlO0FBQy9DLEVBQUU7O0FBRUY7QUFDQSxFQUFFLDREQUFTLFVBQVUsa0JBQWtCO0FBQ3ZDLEVBQUUsNERBQVMsVUFBVSxtQkFBbUI7QUFDeEM7O0FBRUE7O0FBRUE7QUFDQSxFQUFFLDREQUFTLFFBQVEsNENBQTRDO0FBQy9ELEVBQUUsNERBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsNEJBQTRCLG9EQUFVOztBQUV0QyxRQUFRLDhEQUFXO0FBQ25CLEVBQUUsNERBQVMsVUFBVSw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSitEOztBQUUvRDtBQUNBO0FBQ0EsbUJBQW1CLDREQUFTLFVBQVUsd0JBQXdCO0FBQzlELEVBQUUsNERBQVM7QUFDWDtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsNERBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLGtCQUFrQiw0REFBUyxlQUFlLHVCQUF1QjtBQUNqRSxFQUFFLDREQUFTLGFBQWEsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw0REFBUyxVQUFVLHdCQUF3QjtBQUNyRCxJQUFJLDREQUFTLFlBQVk7QUFDekIsS0FBSyw0REFBUztBQUNkO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLLDREQUFTO0FBQ2Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHNCQUFzQixpRUFBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw0REFBUyxVQUFVLHdCQUF3QjtBQUNwRCxHQUFHLDREQUFTLFlBQVksa0JBQWtCO0FBQzFDLEdBQUcsNERBQVMsWUFBWSw0QkFBNEI7QUFDcEQ7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNERBQVM7QUFDbEI7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0EsRUFBRSw0REFBUztBQUNYO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDREQUFTLGNBQWMsZUFBZTtBQUMvQyxFQUFFOztBQUVGO0FBQ0EsRUFBRSw0REFBUyxTQUFTLHdCQUF3QjtBQUM1QyxLQUFLLGlFQUFjO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSw0REFBUyxTQUFTLDhCQUE4QjtBQUNsRDtBQUNBOztBQUVBO0FBQ0EsRUFBRSw0REFBUyxTQUFTLHVCQUF1QjtBQUMzQztBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDREQUFTLFdBQVc7QUFDekMsRUFBRSw0REFBUyxjQUFjLDBCQUEwQjtBQUNuRCxHQUFHLDREQUFTLFNBQVMscUNBQXFDO0FBQzFELEdBQUcsNERBQVM7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUUsNERBQVMsVUFBVSwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDREQUFTLGFBQWEsdUNBQXVDO0FBQy9EO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hKNEQ7O0FBRXJEO0FBQ1Asa0JBQWtCLDREQUFTLFVBQVUsd0JBQXdCO0FBQzdELEVBQUUsNERBQVMsU0FBUyx1Q0FBdUM7QUFDM0QsRUFBRSw0REFBUyxVQUFVLDJCQUEyQjtBQUNoRCxHQUFHLDREQUFTO0FBQ1o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUUsNERBQVMsVUFBVSwwQkFBMEI7QUFDL0MsR0FBRyw0REFBUyxRQUFRLGdCQUFnQjtBQUNwQyxJQUFJLDREQUFTO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLGtCQUFrQiw0REFBUyxVQUFVLHVCQUF1QjtBQUM1RCxpQkFBaUIsT0FBTztBQUN4QjtBQUNBLEdBQUcsNERBQVMsVUFBVSxzQkFBc0I7QUFDNUM7QUFDQSxZQUFZLDREQUFTO0FBQ3JCO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBLFNBQVMsNERBQVM7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSSw0REFBUyxTQUFTLHlDQUF5QztBQUMvRDtBQUNBLFlBQVksNERBQVM7QUFDckIsc0JBQXNCLFNBQVMsSUFBSSxVQUFVO0FBQzdDLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUU7O0FBRUYsaUJBQWlCLDREQUFTLFVBQVUsMkJBQTJCO0FBQy9ELEVBQUUsNERBQVMsY0FBYyxtQkFBbUI7QUFDNUMsR0FBRyw0REFBUyxVQUFVLGtCQUFrQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxFQUFFLDREQUFTLGNBQWMsOEJBQThCO0FBQ3ZELEdBQUcsNERBQVMsVUFBVSxpQ0FBaUM7QUFDdkQ7QUFDQTtBQUNBLFFBQVEsOERBQVc7QUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RjREOztBQUVyRDtBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsOERBQVc7QUFDbkIsRUFBRSw0REFBUyxVQUFVLDJCQUEyQjtBQUNoRCxHQUFHLDREQUFTLFVBQVUsdUJBQXVCO0FBQzdDLEdBQUcsNERBQVMsVUFBVSx3QkFBd0I7QUFDOUM7QUFDQSxZQUFZLDREQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTCxJQUFJLDREQUFTLFNBQVMsdUNBQXVDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDeEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNDO0FBQ0E7QUFDb0I7QUFDYjtBQUNHO0FBQ2Q7QUFDRjtBQUNMO0FBQ0E7QUFDRTtBQUNEOztBQUU1QjtBQUNBO0FBQ0EsSUFBSSw2REFBYzs7QUFFbEI7QUFDQSw0QkFBNEIsbURBQVM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1EQUFTO0FBQ3hCLGlCQUFpQixzREFBVztBQUM1QixlQUFlLG1EQUFTO0FBQ3hCLGdCQUFnQiwwREFBWTtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRSwwREFBZTtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL3N0eWxlcy9hYm91dC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL3N0eWxlcy9jb25zdGFudHMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9zdHlsZXMvZXZlbnRzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvc3R5bGVzL2hvbWUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9zdHlsZXMvbWVudS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL3N0eWxlcy9yZWJvb3QtdXRpbC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvc3R5bGVzL2Fib3V0LmNzcz9kMTE3Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9zdHlsZXMvY29uc3RhbnRzLmNzcz81Yjc2Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9zdHlsZXMvZXZlbnRzLmNzcz84MGU4Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9zdHlsZXMvaG9tZS5jc3M/NGI1MSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvc3R5bGVzL21lbnUuY3NzPzcwMGEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL3N0eWxlcy9yZWJvb3QtdXRpbC5jc3M/YjM5NyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9hYm91dC11cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9kb20tZmFjdG9yaWVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9ldmVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5hYm91dCB7XG5cdGZsZXg6IDE7XG5cdGhlaWdodDogMTAwJTtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFib3V0IHAge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Z2FwOiA2cHg7XG5cblx0Zm9udC1zaXplOiAyNXB4O1xufVxuXG4ubWFwLWNvbnRhaW5lciB7XG5cdC0tc3RyaW5nLWNvbG9yOiBzaWx2ZXI7XG5cdC0tc2hhZG93LWNvbG9yOiAjNjYxOTE5O1xuXHQtLXNoYWRvdy1jb2xvci1zdHJpbmc6ICNkMDE2MTY7XG5cblx0d2lkdGg6IG1pbig2MDBweCwgMTAwJSk7XG5cdHBhZGRpbmc6IDNweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm1hcC10YWNrIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRib3R0b206IC03cHg7XG5cdHdpZHRoOiAxMHB4O1xuXHRoZWlnaHQ6IDEwcHg7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcblxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGQwZDBkO1xufVxuXG4ubWFwLXN0cmluZyB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Ym90dG9tOiAtMnB4O1xuXHRoZWlnaHQ6IDUwcHg7XG5cdHotaW5kZXg6IC0xO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdHBhZGRpbmc6IDAgMTVweDtcblxuXHQmID4gKiB7XG5cdFx0ZmxleDogMTtcblx0fVxufVxuXG4ubWFwLXN0cmluZyAubGVmdCB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcblx0XHR0byBib3R0b20gcmlnaHQsXG5cdFx0dHJhbnNwYXJlbnQgMCA0OSUsXG5cdFx0dmFyKC0tc3RyaW5nLWNvbG9yKSA0OSUgNTElLFxuXHRcdHZhcigtLXNoYWRvdy1jb2xvci1zdHJpbmcpIDUxJSA1MiUsXG5cdFx0dHJhbnNwYXJlbnQgNTQlIDEwMCVcblx0KTtcbn1cblxuLm1hcC1zdHJpbmcgLnJpZ2h0IHtcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuXHRcdHRvIGJvdHRvbSBsZWZ0LFxuXHRcdHRyYW5zcGFyZW50IDAgNDklLFxuXHRcdHZhcigtLXN0cmluZy1jb2xvcikgNDklIDUxJSxcblx0XHR2YXIoLS1zaGFkb3ctY29sb3Itc3RyaW5nKSA1MSUgNTIlLFxuXHRcdHRyYW5zcGFyZW50IDU0JSAxMDAlXG5cdCk7XG59XG5cbi5tYXAtd29vZCB7XG5cdGhlaWdodDogMjVweDtcblx0YmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsICNmZjdjNDAyNiwgIzAwMDAwMDMzKSxcblx0XHR1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MjU0OTYyMzUwMjUtZDc4M2FiZjA2MWM4P2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE0ODAmcT04MCk7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5tYXAtdG9wIHtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuXHRib3gtc2hhZG93OiA4cHggM3B4IDVweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xufVxuXG4ubWFwLWJvdHRvbSB7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcblx0Ym9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcblx0Ym94LXNoYWRvdzogOHB4IDNweCA1cHggdmFyKC0tc2hhZG93LWNvbG9yKTtcbn1cblxuLm1hcC1jYW52YXMge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNmU2O1xuXHRib3gtc2hhZG93OiA2cHggM3B4IDVweCAycHggdmFyKC0tc2hhZG93LWNvbG9yKTtcbn1cblxuaWZyYW1lIHtcblx0Ym9yZGVyOiBub25lO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Fib3V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLE9BQU87Q0FDUCxZQUFZOztDQUVaLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsNkJBQTZCO0NBQzdCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsUUFBUTs7Q0FFUixlQUFlO0FBQ2hCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2Qiw4QkFBOEI7O0NBRTlCLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7O0NBRWxCLG1CQUFtQjtDQUNuQix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLFlBQVk7Q0FDWixXQUFXOztDQUVYLGFBQWE7Q0FDYixlQUFlOztDQUVmO0VBQ0MsT0FBTztDQUNSO0FBQ0Q7O0FBRUE7Q0FDQzs7Ozs7O0VBTUM7QUFDRjs7QUFFQTtDQUNDOzs7Ozs7RUFNQztBQUNGOztBQUVBO0NBQ0MsWUFBWTtDQUNaOzZLQUM0SztDQUM1SyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQywyQkFBMkI7Q0FDM0IsNEJBQTRCO0NBQzVCLDJDQUEyQztBQUM1Qzs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4Qiw0QkFBNEI7Q0FDNUIsMkNBQTJDO0FBQzVDOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLCtDQUErQztBQUNoRDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixtQkFBbUI7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFib3V0IHtcXG5cXHRmbGV4OiAxO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFib3V0IHAge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiA2cHg7XFxuXFxuXFx0Zm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4ubWFwLWNvbnRhaW5lciB7XFxuXFx0LS1zdHJpbmctY29sb3I6IHNpbHZlcjtcXG5cXHQtLXNoYWRvdy1jb2xvcjogIzY2MTkxOTtcXG5cXHQtLXNoYWRvdy1jb2xvci1zdHJpbmc6ICNkMDE2MTY7XFxuXFxuXFx0d2lkdGg6IG1pbig2MDBweCwgMTAwJSk7XFxuXFx0cGFkZGluZzogM3B4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1hcC10YWNrIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym90dG9tOiAtN3B4O1xcblxcdHdpZHRoOiAxMHB4O1xcblxcdGhlaWdodDogMTBweDtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGQwZDBkO1xcbn1cXG5cXG4ubWFwLXN0cmluZyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvdHRvbTogLTJweDtcXG5cXHRoZWlnaHQ6IDUwcHg7XFxuXFx0ei1pbmRleDogLTE7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nOiAwIDE1cHg7XFxuXFxuXFx0JiA+ICoge1xcblxcdFxcdGZsZXg6IDE7XFxuXFx0fVxcbn1cXG5cXG4ubWFwLXN0cmluZyAubGVmdCB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdHRvIGJvdHRvbSByaWdodCxcXG5cXHRcXHR0cmFuc3BhcmVudCAwIDQ5JSxcXG5cXHRcXHR2YXIoLS1zdHJpbmctY29sb3IpIDQ5JSA1MSUsXFxuXFx0XFx0dmFyKC0tc2hhZG93LWNvbG9yLXN0cmluZykgNTElIDUyJSxcXG5cXHRcXHR0cmFuc3BhcmVudCA1NCUgMTAwJVxcblxcdCk7XFxufVxcblxcbi5tYXAtc3RyaW5nIC5yaWdodCB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdHRvIGJvdHRvbSBsZWZ0LFxcblxcdFxcdHRyYW5zcGFyZW50IDAgNDklLFxcblxcdFxcdHZhcigtLXN0cmluZy1jb2xvcikgNDklIDUxJSxcXG5cXHRcXHR2YXIoLS1zaGFkb3ctY29sb3Itc3RyaW5nKSA1MSUgNTIlLFxcblxcdFxcdHRyYW5zcGFyZW50IDU0JSAxMDAlXFxuXFx0KTtcXG59XFxuXFxuLm1hcC13b29kIHtcXG5cXHRoZWlnaHQ6IDI1cHg7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsICNmZjdjNDAyNiwgIzAwMDAwMDMzKSxcXG5cXHRcXHR1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MjU0OTYyMzUwMjUtZDc4M2FiZjA2MWM4P2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE0ODAmcT04MCk7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLm1hcC10b3Age1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcblxcdGJveC1zaGFkb3c6IDhweCAzcHggNXB4IHZhcigtLXNoYWRvdy1jb2xvcik7XFxufVxcblxcbi5tYXAtYm90dG9tIHtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XFxuXFx0Ym9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXG5cXHRib3gtc2hhZG93OiA4cHggM3B4IDVweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xcbn1cXG5cXG4ubWFwLWNhbnZhcyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjZlNjtcXG5cXHRib3gtc2hhZG93OiA2cHggM3B4IDVweCAycHggdmFyKC0tc2hhZG93LWNvbG9yKTtcXG59XFxuXFxuaWZyYW1lIHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjY2hhbmdpbmctY29udGVudCB7XG5cdGZsZXg6IDE7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgU2lkZWJhciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi5zaWRlYmFyIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR6LWluZGV4OiAxO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAwcHg7XG5cdHBhZGRpbmc6IDIwcHggMDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRvdmVyZmxvdy14OiBoaWRkZW47XG5cblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbWFpbik7XG5cdGZvbnQtc2l6ZTogNDBweDtcblx0Ym94LXNoYWRvdzogMHB4IDBweCA3cHggdmFyKC0tYWNjZW50LW1haW4tZGFyayk7XG5cblx0dHJhbnNpdGlvbjogMC41cztcblxuXHQmLm9wZW4ge1xuXHRcdHdpZHRoOiAzMDBweDtcblx0XHRwYWRkaW5nOiAyMHB4O1xuXHR9XG5cblx0I2Nsb3NlLXNpZGViYXIge1xuXHRcdGFsaWduLXNlbGY6IGVuZDtcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHBvc2l0aW9uOiBzdGF0aWM7XG5cblx0XHRib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKTtcblx0XHRib3JkZXI6IG5vbmU7XG5cblx0XHQmLm9wZW4ge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0fVxuXG5cdFx0I2Nsb3NlLXNpZGViYXIge1xuXHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHR9XG5cdH1cbn1cblxuLmNsb3NlLWJ0biB7XG5cdC0tZm9udC1zaXplOiA1MHB4O1xuXG5cdGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcblx0bGluZS1oZWlnaHQ6IGNhbGModmFyKC0tZm9udC1zaXplKSAqIDAuNik7XG59XG5cbm5hdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXg6IDE7XG5cdGdhcDogNTBweDtcblxuXHQmIGJ1dHRvbiB7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRtYXJnaW4tbGVmdDogMjJweDtcblx0fVxuXG5cdCYgYnV0dG9uOmhvdmVyIHtcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1oMSk7XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR9XG59XG5cbmhlYWRlciB7XG5cdHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuXHRib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKTtcblx0Zm9udC1zaXplOiAyNHB4O1xuXG5cdCNvcGVuLXNpZGViYXIge1xuXHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cdH1cblxuXHQmIC5zb2NpYWxzIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9TaWRlYmFyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBNYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuI2NoYW5naW5nLWNvbnRlbnQge1xuXHRtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWZvb3Rlci1oZWlnaHQpICogMik7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuZm9vdGVyIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRib3R0b206IDA7XG5cdG1pbi1oZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZzogNnB4IDIwcHggMnB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblx0Z2FwOiA0cHg7XG5cblx0Ym94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tYWNjZW50LW1haW4tZGFyayk7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLW1haW4pO1xuXG5cdCYgPiAqIHtcblx0XHRmbGV4OiAxO1xuXHR9XG5cblx0JiAuc29jaWFscyB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXG5cdCYgLmF1dGhvciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGdhcDogOHB4O1xuXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1zdHJvbmcpO1xuXHR9XG5cblx0JiAuY29udGFjdC1jb250YWluZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0fVxuXG5cdCYgI2NvbnRhY3QtYnRuIHtcblx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cblx0XHQmOmhvdmVyIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0XHRjb2xvcjogdmFyKC0tYmctbWFpbik7XG5cdFx0fVxuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdFx0JiAuc29jaWFscyB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdH1cblxuXHRcdCYgLmF1dGhvciB7XG5cdFx0XHRnYXA6IDEwcHg7XG5cdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0fVxuXG5cdFx0JiAuY29udGFjdC1jb250YWluZXIge1xuXHRcdFx0YWxpZ24taXRlbXM6IGVuZDtcblx0XHR9XG5cdH1cbn1cblxuLmZhLmZhLWdpdGh1YiB7XG5cdGNvbG9yOiBjdXJyZW50Q29sb3I7XG5cdGZvbnQtc2l6ZTogMjBweDtcblxuXHQmOmhvdmVyIHtcblx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLWluLW91dDtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKSBzY2FsZSgxLjMpO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0Zm9udC1zaXplOiAzMHB4O1xuXHR9XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Gb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbnN0YW50cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxPQUFPO0FBQ1I7O0FBRUEsb0RBQW9EOztBQUVwRDtDQUNDLGVBQWU7Q0FDZixVQUFVO0NBQ1YsWUFBWTtDQUNaLFVBQVU7Q0FDVixlQUFlOztDQUVmLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsa0JBQWtCOztDQUVsQixnQ0FBZ0M7Q0FDaEMsZUFBZTtDQUNmLCtDQUErQzs7Q0FFL0MsZ0JBQWdCOztDQUVoQjtFQUNDLFlBQVk7RUFDWixhQUFhO0NBQ2Q7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsV0FBVztFQUNYLGdCQUFnQjs7RUFFaEIsK0NBQStDO0VBQy9DLFlBQVk7O0VBRVo7R0FDQyxXQUFXO0VBQ1o7O0VBRUE7R0FDQyxhQUFhO0VBQ2Q7Q0FDRDtBQUNEOztBQUVBO0NBQ0MsaUJBQWlCOztDQUVqQiwyQkFBMkI7Q0FDM0IseUNBQXlDO0FBQzFDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixPQUFPO0NBQ1AsU0FBUzs7Q0FFVDtFQUNDLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQyxxQkFBcUI7Q0FDdEI7O0NBRUE7RUFDQyxtQkFBbUI7RUFDbkIsdUJBQXVCO0NBQ3hCO0FBQ0Q7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiw4QkFBOEI7O0NBRTlCLCtDQUErQztDQUMvQyxlQUFlOztDQUVmO0VBQ0MsYUFBYTtFQUNiLHVCQUF1QjtDQUN4Qjs7Q0FFQTtFQUNDLGFBQWE7Q0FDZDs7Q0FFQTtFQUNDLGFBQWE7Q0FDZDtBQUNEOztBQUVBLHFEQUFxRDs7QUFFckQsaURBQWlEOztBQUVqRDtDQUNDLDZDQUE2Qzs7Q0FFN0MsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQSxrREFBa0Q7O0FBRWxELG1EQUFtRDs7QUFFbkQ7Q0FDQyxlQUFlO0NBQ2YsU0FBUztDQUNULGdDQUFnQztDQUNoQyxXQUFXO0NBQ1gscUJBQXFCOztDQUVyQixhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLFFBQVE7O0NBRVIsK0NBQStDO0NBQy9DLGdDQUFnQzs7Q0FFaEM7RUFDQyxPQUFPO0NBQ1I7O0NBRUE7RUFDQyxhQUFhO0NBQ2Q7O0NBRUE7RUFDQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixRQUFROztFQUVSLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0NBQzFCOztDQUVBO0VBQ0MsYUFBYTtFQUNiLHNCQUFzQjtDQUN2Qjs7Q0FFQTtFQUNDLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0JBQWtCOztFQUVsQjtHQUNDLHNCQUFzQjtHQUN0QixxQkFBcUI7RUFDdEI7Q0FDRDs7Q0FFQTtFQUNDLG1CQUFtQjtFQUNuQixtQkFBbUI7O0VBRW5CO0dBQ0MsYUFBYTtFQUNkOztFQUVBO0dBQ0MsU0FBUztHQUNULGVBQWU7RUFDaEI7O0VBRUE7R0FDQyxnQkFBZ0I7RUFDakI7Q0FDRDtBQUNEOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGVBQWU7O0NBRWY7RUFDQyxzQ0FBc0M7RUFDdEMscUNBQXFDO0NBQ3RDOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjtBQUNEO0FBQ0Esb0RBQW9EXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNjaGFuZ2luZy1jb250ZW50IHtcXG5cXHRmbGV4OiAxO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFNpZGViYXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5zaWRlYmFyIHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0ei1pbmRleDogMTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDBweDtcXG5cXHRwYWRkaW5nOiAyMHB4IDA7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1tYWluKTtcXG5cXHRmb250LXNpemU6IDQwcHg7XFxuXFx0Ym94LXNoYWRvdzogMHB4IDBweCA3cHggdmFyKC0tYWNjZW50LW1haW4tZGFyayk7XFxuXFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG5cXG5cXHQmLm9wZW4ge1xcblxcdFxcdHdpZHRoOiAzMDBweDtcXG5cXHRcXHRwYWRkaW5nOiAyMHB4O1xcblxcdH1cXG5cXG5cXHQjY2xvc2Utc2lkZWJhciB7XFxuXFx0XFx0YWxpZ24tc2VsZjogZW5kO1xcblxcdH1cXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRwb3NpdGlvbjogc3RhdGljO1xcblxcblxcdFxcdGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLWFjY2VudC1tYWluLWRhcmspO1xcblxcdFxcdGJvcmRlcjogbm9uZTtcXG5cXG5cXHRcXHQmLm9wZW4ge1xcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQjY2xvc2Utc2lkZWJhciB7XFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG5cXHQtLWZvbnQtc2l6ZTogNTBweDtcXG5cXG5cXHRmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuXFx0bGluZS1oZWlnaHQ6IGNhbGModmFyKC0tZm9udC1zaXplKSAqIDAuNik7XFxufVxcblxcbm5hdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGZsZXg6IDE7XFxuXFx0Z2FwOiA1MHB4O1xcblxcblxcdCYgYnV0dG9uIHtcXG5cXHRcXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAyMnB4O1xcblxcdH1cXG5cXG5cXHQmIGJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0Y29sb3I6IHZhcigtLXRleHQtaDEpO1xcblxcdH1cXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdH1cXG59XFxuXFxuaGVhZGVyIHtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuXFx0Ym94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tYWNjZW50LW1haW4tZGFyayk7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcblxcdCNvcGVuLXNpZGViYXIge1xcblxcdFxcdHBhZGRpbmc6IDE1cHg7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFx0fVxcblxcblxcdCYgLnNvY2lhbHMge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0fVxcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9TaWRlYmFyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIE1haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNjaGFuZ2luZy1jb250ZW50IHtcXG5cXHRtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWZvb3Rlci1oZWlnaHQpICogMik7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9NYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEZvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuZm9vdGVyIHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0Ym90dG9tOiAwO1xcblxcdG1pbi1oZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmc6IDZweCAyMHB4IDJweDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG5cXHRnYXA6IDRweDtcXG5cXG5cXHRib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1tYWluKTtcXG5cXG5cXHQmID4gKiB7XFxuXFx0XFx0ZmxleDogMTtcXG5cXHR9XFxuXFxuXFx0JiAuc29jaWFscyB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFxuXFx0JiAuYXV0aG9yIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0Z2FwOiA4cHg7XFxuXFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdFxcdGZvbnQtc2l6ZTogMTVweDtcXG5cXHRcXHRjb2xvcjogdmFyKC0tdGV4dC1zdHJvbmcpO1xcblxcdH1cXG5cXG5cXHQmIC5jb250YWN0LWNvbnRhaW5lciB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH1cXG5cXG5cXHQmICNjb250YWN0LWJ0biB7XFxuXFx0XFx0cGFkZGluZzogMTBweDtcXG5cXHRcXHRib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcblxcdFxcdCY6aG92ZXIge1xcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFx0XFx0XFx0Y29sb3I6IHZhcigtLWJnLW1haW4pO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdFxcdCYgLnNvY2lhbHMge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0fVxcblxcblxcdFxcdCYgLmF1dGhvciB7XFxuXFx0XFx0XFx0Z2FwOiAxMHB4O1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0JiAuY29udGFjdC1jb250YWluZXIge1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBlbmQ7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuLmZhLmZhLWdpdGh1YiB7XFxuXFx0Y29sb3I6IGN1cnJlbnRDb2xvcjtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFxuXFx0Jjpob3ZlciB7XFxuXFx0XFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZS1pbi1vdXQ7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZykgc2NhbGUoMS4zKTtcXG5cXHR9XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0Zm9udC1zaXplOiAzMHB4O1xcblxcdH1cXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5ldmVudHMgLmNvbnRlbnQge1xuXHR3aWR0aDogOTAlO1xuXHRtYXJnaW46IGF1dG87XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAyMHB4O1xuXG5cdCYgLmFydCB7XG5cdFx0aGVpZ2h0OiAxNjBweDtcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG5cdH1cblxuXHQmIC50ZXh0IHtcblx0XHRtYXJnaW46IDIwcHggMDtcblx0XHRtYXgtd2lkdGg6IDY1Y2g7XG5cdH1cblxuXHQmIGgxIHtcblx0XHRmb250LXNpemU6IDMwcHg7XG5cdH1cblxuXHQmIGgyIHtcblx0XHRtYXJnaW46IDMwcHggMCAxNnB4O1xuXHR9XG5cblx0JiBwIHtcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRsaW5lLWhlaWdodDogMS41O1xuXHRcdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdH1cblxuXHQmIHA6bnRoLWxhc3QtY2hpbGQoMikge1xuXHRcdHdpZHRoOiBtaW4oMTAwJSwgNDQwcHgpO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRnYXA6IDJweDtcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdC0tYXJ0LXdpZHRoOiBtaW4oMzAwcHgsIDMwJSk7XG5cblx0XHRoZWlnaHQ6IGNhbGMoOTYwcHggLSA4dncpO1xuXHRcdHdpZHRoOiBtaW4oOTAlLCAxMTAwcHgpO1xuXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuXHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuXHRcdCYgLmFydCB7XG5cdFx0XHRmbGV4LXNocmluazogMDtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblx0XHR9XG5cblx0XHQmIC5jYWxsLXRvLWFjdGlvbiB7XG5cdFx0XHRhbGlnbi1pdGVtczogc3RhcnQ7XG5cdFx0XHRwYWRkaW5nOiA0MHB4IDA7XG5cdFx0fVxuXHR9XG59XG5cbi5waG90b3Mge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLnRpZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdCYgLmltYWdlLWNvbnRhaW5lciB7XG5cdFx0ZmxleC1ncm93OiAxO1xuXHR9XG5cblx0JiBpbWcge1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdH1cbn1cblxuLmV2ZW50cyAuY2FsbC10by1hY3Rpb24ge1xuXHRwYWRkaW5nOiA5MHB4IDA7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAyNHB4O1xuXG5cdCYgcCB7XG5cdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdG1hcmdpbjogMDtcblx0fVxuXG5cdCYgYnV0dG9uIHtcblx0XHRwYWRkaW5nOiAyMHB4O1xuXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcztcblx0fVxuXG5cdCYgYnV0dG9uOmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRcdGNvbG9yOiB2YXIoLS1iZy1tYWluKTtcblx0fVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIE1vZGFsICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLm1vZGFsIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR0b3A6IDA7XG5cdHotaW5kZXg6IDI7XG5cdGhlaWdodDogMTAwdmg7XG5cdHdpZHRoOiAxMDB2dztcblxuXHRkaXNwbGF5OiBncmlkO1xuXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjUpO1xuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcbn1cblxuZm9ybSB7XG5cdC0tZm9ybS1zcGFjZXI6IDEycHg7XG5cblx0bWF4LWhlaWdodDogODB2aDtcblx0cGFkZGluZzogMTJweDtcblx0d2lkdGg6IG1pbig5MHZ3LCAxMDAwcHgpO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogdmFyKC0tZm9ybS1zcGFjZXIpO1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG5cdGNvbG9yOiAjMDAwO1xuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uZm9ybS1oZWFkZXIge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmctbGVmdDogMnB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JtLWNvbnRlbnQge1xuXHRwYWRkaW5nOiB2YXIoLS1mb3JtLXNwYWNlcik7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogY2FsYyh2YXIoLS1mb3JtLXNwYWNlcikgKiAyLjUpO1xuXHRvdmVyZmxvdy15OiBzY3JvbGw7XG5cblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWlucHV0KTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdG92ZXJmbG93LXk6IGF1dG87XG5cdH1cbn1cblxuLmZvcm0tY29udGVudCBoNCB7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmZvcm0tY29udGFjdCxcbi5mb3JtLWRldGFpbHMsXG4uZm9ybS1leHRyYXMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IHZhcigtLWZvcm0tc3BhY2VyKTtcbn1cblxuLmZvcm0tcm93IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IHZhcigtLWZvcm0tc3BhY2VyKTtcbn1cblxuLmZvcm0taXRlbSB7XG5cdGZsZXg6IDE7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogY2FsYyh2YXIoLS1mb3JtLXNwYWNlcikgKiAwLjUpO1xufVxuXG4uZm9ybS1kZXRhaWxzIC5mb3JtLXJvdyAuZm9ybS1pdGVtIHtcblx0d2lkdGg6IDQ3JTtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbmlucHV0LFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuXHRwYWRkaW5nOiA2cHggMTBweDtcblxuXHRmb250LXNpemU6IG1heCgxNnB4LCAwLjlyZW0pO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1pbnB1dCk7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1pbnB1dCk7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuZmllbGRzZXQge1xuXHRwYWRkaW5nOiA4cHggOHB4IDEwcHg7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiBjYWxjKHZhcigtLWZvcm0tc3BhY2VyKSAqIDAuOCk7XG5cblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWlucHV0KTtcbn1cblxubGVnZW5kIHtcblx0cGFkZGluZzogNXB4IDhweDtcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWlucHV0KTtcbn1cblxubGFiZWwgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cbmxhYmVsIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB+IHNwYW4ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDZweDtcbn1cbmxhYmVsIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB+IHNwYW46YmVmb3JlIHtcblx0LS1yYWRpby1kaW1lbnNpb25zOiAxNXB4O1xuXG5cdGhlaWdodDogdmFyKC0tcmFkaW8tZGltZW5zaW9ucyk7XG5cdHdpZHRoOiB2YXIoLS1yYWRpby1kaW1lbnNpb25zKTtcblxuXHRjb250ZW50OiBcIlwiO1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1iZy1pbnB1dCk7XG5cdG1hcmdpbi1yaWdodDogNXB4O1xuXG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1pbnB1dCk7XG5cdGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlvLWRpbWVuc2lvbnMpO1xuXHR0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbmxhYmVsIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkIH4gc3BhbjpiZWZvcmUge1xuXHRib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1iZy1tYWluKTtcbn1cblxudGV4dGFyZWEge1xuXHRyZXNpemU6IHZlcnRpY2FsO1xufVxuXG5mb3JtIFt0eXBlPVwic3VibWl0XCJdIHtcblx0YWxpZ24tc2VsZjogY2VudGVyO1xuXHRwYWRkaW5nOiAxMnB4O1xuXHR3aWR0aDogbWluKDEwMCUsIDI4MHB4KTtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWgxKTtcblx0Ym9yZGVyLXJhZGl1czogMjAwcHg7XG5cblx0Zm9udC1zaXplOiAxLjVyZW07XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXG5cdCY6aG92ZXIge1xuXHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICM5MTZmMDg7XG5cdH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTW9kYWwgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2V2ZW50cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxVQUFVO0NBQ1YsWUFBWTs7Q0FFWixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixTQUFTOztDQUVUO0VBQ0MsYUFBYTtFQUNiLDJCQUEyQjtDQUM1Qjs7Q0FFQTtFQUNDLGNBQWM7RUFDZCxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixRQUFRO0NBQ1Q7O0NBRUE7RUFDQyw0QkFBNEI7O0VBRTVCLHlCQUF5QjtFQUN6Qix1QkFBdUI7O0VBRXZCLDJCQUEyQjtFQUMzQixvQkFBb0I7RUFDcEIsOEJBQThCOztFQUU5QjtHQUNDLGNBQWM7R0FDZCxZQUFZO0dBQ1osMkJBQTJCO0VBQzVCOztFQUVBO0dBQ0Msa0JBQWtCO0dBQ2xCLGVBQWU7RUFDaEI7Q0FDRDtBQUNEOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjs7Q0FFdEI7RUFDQyxZQUFZO0NBQ2I7O0NBRUE7RUFDQyxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtDQUNsQjs7Q0FFQTtFQUNDLFdBQVc7RUFDWCxtQkFBbUI7Q0FDcEI7QUFDRDs7QUFFQTtDQUNDLGVBQWU7O0NBRWYsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsU0FBUzs7Q0FFVDtFQUNDLGVBQWU7RUFDZixTQUFTO0NBQ1Y7O0NBRUE7RUFDQyxhQUFhOztFQUViLHVCQUF1QjtFQUN2QixrQkFBa0I7O0VBRWxCLGVBQWU7RUFDZix5QkFBeUI7O0VBRXpCLG9CQUFvQjtDQUNyQjs7Q0FFQTtFQUNDLHNCQUFzQjtFQUN0QixxQkFBcUI7Q0FDdEI7QUFDRDs7QUFFQSxrREFBa0Q7O0FBRWxEO0NBQ0MsZUFBZTtDQUNmLE1BQU07Q0FDTixVQUFVO0NBQ1YsYUFBYTtDQUNiLFlBQVk7O0NBRVosYUFBYTtDQUNiLHFCQUFxQjs7Q0FFckIsMENBQTBDO0NBQzFDLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLG1CQUFtQjs7Q0FFbkIsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYix3QkFBd0I7O0NBRXhCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCOztDQUV2Qix5QkFBeUI7Q0FDekIsV0FBVztDQUNYLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQywyQkFBMkI7Q0FDM0IsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQ0FBbUM7Q0FDbkMsa0JBQWtCOztDQUVsQixxQ0FBcUM7Q0FDckMsa0JBQWtCOztDQUVsQjtFQUNDLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBOzs7Q0FHQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixlQUFlO0NBQ2YsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsT0FBTztDQUNQLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUNBQW1DO0FBQ3BDOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBOztDQUVDLGdCQUFnQjtBQUNqQjs7QUFFQTs7O0NBR0MsaUJBQWlCOztDQUVqQiw0QkFBNEI7Q0FDNUIsaUNBQWlDO0NBQ2pDLHFDQUFxQztDQUNyQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxxQkFBcUI7O0NBRXJCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUNBQW1DOztDQUVuQyxxQ0FBcUM7QUFDdEM7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFFBQVE7QUFDVDtBQUNBO0NBQ0Msd0JBQXdCOztDQUV4QiwrQkFBK0I7Q0FDL0IsOEJBQThCOztDQUU5QixXQUFXO0NBQ1gsMkJBQTJCO0NBQzNCLGlCQUFpQjs7Q0FFakIscUNBQXFDO0NBQ3JDLHNDQUFzQztDQUN0QyxpQ0FBaUM7QUFDbEM7O0FBRUE7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHVCQUF1Qjs7Q0FFdkIsZ0NBQWdDO0NBQ2hDLG9CQUFvQjs7Q0FFcEIsaUJBQWlCO0NBQ2pCLHlCQUF5QjtDQUN6QixpQkFBaUI7Q0FDakIsbUJBQW1COztDQUVuQjtFQUNDLGtDQUFrQztDQUNuQztBQUNEOztBQUVBLG1EQUFtRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZXZlbnRzIC5jb250ZW50IHtcXG5cXHR3aWR0aDogOTAlO1xcblxcdG1hcmdpbjogYXV0bztcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDIwcHg7XFxuXFxuXFx0JiAuYXJ0IHtcXG5cXHRcXHRoZWlnaHQ6IDE2MHB4O1xcblxcdFxcdGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG5cXHR9XFxuXFxuXFx0JiAudGV4dCB7XFxuXFx0XFx0bWFyZ2luOiAyMHB4IDA7XFxuXFx0XFx0bWF4LXdpZHRoOiA2NWNoO1xcblxcdH1cXG5cXG5cXHQmIGgxIHtcXG5cXHRcXHRmb250LXNpemU6IDMwcHg7XFxuXFx0fVxcblxcblxcdCYgaDIge1xcblxcdFxcdG1hcmdpbjogMzBweCAwIDE2cHg7XFxuXFx0fVxcblxcblxcdCYgcCB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0XFx0bGluZS1oZWlnaHQ6IDEuNTtcXG5cXHRcXHRsZXR0ZXItc3BhY2luZzogMXB4O1xcblxcdH1cXG5cXG5cXHQmIHA6bnRoLWxhc3QtY2hpbGQoMikge1xcblxcdFxcdHdpZHRoOiBtaW4oMTAwJSwgNDQwcHgpO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRnYXA6IDJweDtcXG5cXHR9XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0LS1hcnQtd2lkdGg6IG1pbigzMDBweCwgMzAlKTtcXG5cXG5cXHRcXHRoZWlnaHQ6IGNhbGMoOTYwcHggLSA4dncpO1xcblxcdFxcdHdpZHRoOiBtaW4oOTAlLCAxMTAwcHgpO1xcblxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG5cXHRcXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuXFx0XFx0JiAuYXJ0IHtcXG5cXHRcXHRcXHRmbGV4LXNocmluazogMDtcXG5cXHRcXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0XFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmIC5jYWxsLXRvLWFjdGlvbiB7XFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IHN0YXJ0O1xcblxcdFxcdFxcdHBhZGRpbmc6IDQwcHggMDtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG4ucGhvdG9zIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRpZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG5cXHQmIC5pbWFnZS1jb250YWluZXIge1xcblxcdFxcdGZsZXgtZ3JvdzogMTtcXG5cXHR9XFxuXFxuXFx0JiBpbWcge1xcblxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRvYmplY3QtZml0OiBjb3ZlcjtcXG5cXHR9XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHR9XFxufVxcblxcbi5ldmVudHMgLmNhbGwtdG8tYWN0aW9uIHtcXG5cXHRwYWRkaW5nOiA5MHB4IDA7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAyNHB4O1xcblxcblxcdCYgcCB7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdFxcdG1hcmdpbjogMDtcXG5cXHR9XFxuXFxuXFx0JiBidXR0b24ge1xcblxcdFxcdHBhZGRpbmc6IDIwcHg7XFxuXFxuXFx0XFx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRcXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcblxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjNzO1xcblxcdH1cXG5cXG5cXHQmIGJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRcXHRjb2xvcjogdmFyKC0tYmctbWFpbik7XFxuXFx0fVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIE1vZGFsICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ubW9kYWwge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDA7XFxuXFx0ei1pbmRleDogMjtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNSk7XFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxufVxcblxcbmZvcm0ge1xcblxcdC0tZm9ybS1zcGFjZXI6IDEycHg7XFxuXFxuXFx0bWF4LWhlaWdodDogODB2aDtcXG5cXHRwYWRkaW5nOiAxMnB4O1xcblxcdHdpZHRoOiBtaW4oOTB2dywgMTAwMHB4KTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiB2YXIoLS1mb3JtLXNwYWNlcik7XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcXG5cXHRjb2xvcjogIzAwMDtcXG5cXHRib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4uZm9ybS1oZWFkZXIge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nLWxlZnQ6IDJweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IHtcXG5cXHRwYWRkaW5nOiB2YXIoLS1mb3JtLXNwYWNlcik7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogY2FsYyh2YXIoLS1mb3JtLXNwYWNlcikgKiAyLjUpO1xcblxcdG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItaW5wdXQpO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRvdmVyZmxvdy15OiBhdXRvO1xcblxcdH1cXG59XFxuXFxuLmZvcm0tY29udGVudCBoNCB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uZm9ybS1jb250YWN0LFxcbi5mb3JtLWRldGFpbHMsXFxuLmZvcm0tZXh0cmFzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiB2YXIoLS1mb3JtLXNwYWNlcik7XFxufVxcblxcbi5mb3JtLXJvdyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0Z2FwOiB2YXIoLS1mb3JtLXNwYWNlcik7XFxufVxcblxcbi5mb3JtLWl0ZW0ge1xcblxcdGZsZXg6IDE7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogY2FsYyh2YXIoLS1mb3JtLXNwYWNlcikgKiAwLjUpO1xcbn1cXG5cXG4uZm9ybS1kZXRhaWxzIC5mb3JtLXJvdyAuZm9ybS1pdGVtIHtcXG5cXHR3aWR0aDogNDclO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG5cXHRwYWRkaW5nOiA2cHggMTBweDtcXG5cXG5cXHRmb250LXNpemU6IG1heCgxNnB4LCAwLjlyZW0pO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWlucHV0KTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItaW5wdXQpO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuZmllbGRzZXQge1xcblxcdHBhZGRpbmc6IDhweCA4cHggMTBweDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiBjYWxjKHZhcigtLWZvcm0tc3BhY2VyKSAqIDAuOCk7XFxuXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWlucHV0KTtcXG59XFxuXFxubGVnZW5kIHtcXG5cXHRwYWRkaW5nOiA1cHggOHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1pbnB1dCk7XFxufVxcblxcbmxhYmVsIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcbmxhYmVsIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0gfiBzcGFuIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiA2cHg7XFxufVxcbmxhYmVsIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0gfiBzcGFuOmJlZm9yZSB7XFxuXFx0LS1yYWRpby1kaW1lbnNpb25zOiAxNXB4O1xcblxcblxcdGhlaWdodDogdmFyKC0tcmFkaW8tZGltZW5zaW9ucyk7XFxuXFx0d2lkdGg6IHZhcigtLXJhZGlvLWRpbWVuc2lvbnMpO1xcblxcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWJnLWlucHV0KTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXG5cXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItaW5wdXQpO1xcblxcdGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlvLWRpbWVuc2lvbnMpO1xcblxcdHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxubGFiZWwgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkIH4gc3BhbjpiZWZvcmUge1xcblxcdGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJnLW1haW4pO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuXFx0cmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuZm9ybSBbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAxMnB4O1xcblxcdHdpZHRoOiBtaW4oMTAwJSwgMjgwcHgpO1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtaDEpO1xcblxcdGJvcmRlci1yYWRpdXM6IDIwMHB4O1xcblxcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcXG5cXG5cXHQmOmhvdmVyIHtcXG5cXHRcXHRib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjOTE2ZjA4O1xcblxcdH1cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTW9kYWwgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhvbWUge1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXG5cdCYgaDIge1xuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWgxKTtcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdG1hcmdpbi10b3A6IDA7XG5cdH1cbn1cblxuLmhlcm8ge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGhlaWdodDogY2FsYygxMDBzdmggLSA4MHB4KTtcblx0d2lkdGg6IDkwJTtcblx0bWFyZ2luOiBhdXRvO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdC0tYXJ0LXdpZHRoOiBtaW4oMTkwcHgsIDIwJSk7XG5cdFx0d2lkdGg6IG1pbig5MCUsIDEzMDBweCk7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRoZWlnaHQ6IGNhbGMoMTAwc3ZoIC0gMTAwcHgpO1xuXHR9XG59XG5cbi5hcnQge1xuXHRoZWlnaHQ6IDY4JTtcblx0d2lkdGg6IHZhcigtLWFydC13aWR0aCk7XG5cblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkXzUwNTkxMTZjNTlkMjQ0ZDA4YzMxNzBiNDlkNmU3YjBmfm12Mi5qcGcvdjEvZmlsbC93XzU0NixoXzcyOCxhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLGVuY19hdXRvLzU0YTRjZF81MDU5MTE2YzU5ZDI0NGQwOGMzMTcwYjQ5ZDZlN2IwZn5tdjIuanBnKTtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0aGVpZ2h0OiA4MCU7XG5cblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS81NGE0Y2RfYWU1ZTIyNDg2ZGJiNDlkZWJiOWNkOGJhMWI3ODBiNmV+bXYyLmpwZy92MS9maWxsL3dfMzg4LGhfMTI0MCxhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLGVuY19hdXRvL0FydHdvcmsxX0ZpbmFsXzh4Ml81LmpwZyk7XG5cdH1cbn1cblxuLmhlcm8tdGV4dCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAxMDBweDtcblxuXHRkaXNwbGF5OiBncmlkO1xuXHRnYXA6IDMwcHg7XG5cblx0JiBoMSB7XG5cdFx0LS1mb250LXNpemU6IG1pbig1MHZ3LCAzMDBweCk7XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0XHRwb3NpdGlvbjogc3RhdGljO1xuXHRcdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRnYXA6IDYwcHg7XG5cdH1cbn1cblxuLnJlc2VydmF0aW9ucyB7XG5cdGNvbG9yOiAjZmZlNWU1O1xuXHRmb250LXNpemU6IDIwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0bGV0dGVyLXNwYWNpbmc6IDJweDtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMXB4O1xuXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDJweDtcbn1cblxuLnNjcm9sbC1kb3duIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0cGxhY2UtY29udGVudDogY2VudGVyO1xuXHRjb2xvcjogdmFyKC0tdGV4dC1oMSk7XG5cblx0JiAuZmEtYW5nbGUtZG93biB7XG5cdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHRsaW5lLWhlaWdodDogMTZweDtcblx0XHRmb250LXNpemU6IDcwcHg7XG5cdFx0YW5pbWF0aW9uOiBib3VuY2UgMnMgaW5maW5pdGU7XG5cdH1cbn1cblxuQGtleWZyYW1lcyBib3VuY2Uge1xuXHQwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHR9XG5cdDUwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuXHR9XG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0fVxufVxuXG4ubGFudGVybnMge1xuXHRkaXNwbGF5OiBub25lO1xuXHR3aWR0aDogdmFyKC0tYXJ0LXdpZHRoKTtcblx0aGVpZ2h0OiA4MCU7XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0ZGlzcGxheTogZ3JpZDtcblx0fVxufVxuXG4ubGFudGVybiB7XG5cdC0tY2Fwcy13aWR0aDogNTBweDtcblx0LS1jYXBzLWhlaWdodDogMjBweDtcblxuXHRkaXNwbGF5OiBncmlkO1xuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblxuXHQmIC50b3AsXG5cdCYgLmJvdHRvbSB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHdpZHRoOiB2YXIoLS1jYXBzLXdpZHRoKTtcblx0XHRoZWlnaHQ6IHZhcigtLWNhcHMtaGVpZ2h0KTtcblxuXHRcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXHR9XG5cblx0JiAudG9wIHtcblx0XHRib3R0b206IC01cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogODAlIDgwJSAwIDA7XG5cdH1cblxuXHQmIC5ib3R0b20ge1xuXHRcdHRvcDogLTVweDtcblx0XHRib3JkZXItcmFkaXVzOiAwIDAgODAlIDgwJTtcblx0fVxuXG5cdCYgLmJvZHkge1xuXHRcdHotaW5kZXg6IDE7XG5cdFx0aGVpZ2h0OiAxMzBweDtcblx0XHR3aWR0aDogODAlO1xuXG5cdFx0Ym9yZGVyLXJhZGl1czogODVweDtcblx0XHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1tYWluKTtcblx0XHRiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxuXHRcdFx0dmFyKC0tYmctbGFudGVybiksXG5cdFx0XHR2YXIoLS1iZy1sYW50ZXJuKSAxOSUsXG5cdFx0XHR2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKSAyMCVcblx0XHQpO1xuXHR9XG5cblx0JiAuYm9keTpob3ZlciB7XG5cdFx0YmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMjQ1LCAyMDUsIDg0LCAwLjcpLCB0cmFuc3BhcmVudCA4MCUpLFxuXHRcdFx0cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcblx0XHRcdFx0dmFyKC0tYmctbGFudGVybiksXG5cdFx0XHRcdHZhcigtLWJnLWxhbnRlcm4pIDE5JSxcblx0XHRcdFx0dmFyKC0tYWNjZW50LW1haW4tZGFyaykgMjAlXG5cdFx0XHQpO1xuXHR9XG5cblx0JiA+ICoge1xuXHRcdGJveC1zaGFkb3c6IDNweCAzcHggNnB4IC0zcHggIzhhMGYwZjtcblx0fVxufVxuXG4uaG91cnMtY29udGFpbmVyIHtcblx0cGFkZGluZzogMjBweDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuXHRib3JkZXItdG9wOiAycHggc29saWQgaHNsKDAsIDk1JSwgNzAlKTtcbn1cblxuLmhvdXJzIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAzMHB4O1xuXG5cdCYgPiBkaXYge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGdhcDogOHB4O1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHR3aWR0aDogNjUwcHg7XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdGdhcDogNzBweDtcblx0fVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsZ0JBQWdCOztDQUVoQjtFQUNDLHFCQUFxQjtDQUN0Qjs7Q0FFQTtFQUNDLGFBQWE7Q0FDZDtBQUNEOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLDJCQUEyQjtDQUMzQixVQUFVO0NBQ1YsWUFBWTs7Q0FFWixhQUFhO0NBQ2IsdUJBQXVCOztDQUV2QjtFQUNDLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLDhCQUE4QjtFQUM5Qiw0QkFBNEI7Q0FDN0I7QUFDRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCx1QkFBdUI7O0NBRXZCLG1OQUFtTjtDQUNuTixzQkFBc0I7Q0FDdEIsNEJBQTRCO0NBQzVCLDJCQUEyQjs7Q0FFM0I7RUFDQyxXQUFXOztFQUVYLDZMQUE2TDtDQUM5TDtBQUNEOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7O0NBRWIsYUFBYTtDQUNiLFNBQVM7O0NBRVQ7RUFDQyw2QkFBNkI7Q0FDOUI7O0NBRUE7RUFDQyxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFNBQVM7Q0FDVjtBQUNEOztBQUVBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQiw4QkFBOEI7Q0FDOUIsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHFCQUFxQjtDQUNyQixxQkFBcUI7O0NBRXJCO0VBQ0MsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsNkJBQTZCO0NBQzlCO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLHdCQUF3QjtDQUN6QjtDQUNBO0VBQ0MsMkJBQTJCO0NBQzVCO0NBQ0E7RUFDQyx3QkFBd0I7Q0FDekI7QUFDRDs7QUFFQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsV0FBVzs7Q0FFWDtFQUNDLGFBQWE7Q0FDZDtBQUNEOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLG1CQUFtQjs7Q0FFbkIsYUFBYTtDQUNiLHFCQUFxQjtDQUNyQixxQkFBcUI7O0NBRXJCOztFQUVDLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsMEJBQTBCOztFQUUxQix1QkFBdUI7Q0FDeEI7O0NBRUE7RUFDQyxZQUFZO0VBQ1osMEJBQTBCO0NBQzNCOztDQUVBO0VBQ0MsU0FBUztFQUNULDBCQUEwQjtDQUMzQjs7Q0FFQTtFQUNDLFVBQVU7RUFDVixhQUFhO0VBQ2IsVUFBVTs7RUFFVixtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLGdDQUFnQztFQUNoQzs7OztHQUlDO0NBQ0Y7O0NBRUE7RUFDQzs7Ozs7SUFLRTtDQUNIOztDQUVBO0VBQ0Msb0NBQW9DO0NBQ3JDO0FBQ0Q7O0FBRUE7Q0FDQyxhQUFhOztDQUViLGFBQWE7Q0FDYix1QkFBdUI7O0NBRXZCLHNDQUFzQztBQUN2Qzs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUzs7Q0FFVDtFQUNDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFFBQVE7Q0FDVDs7Q0FFQTtFQUNDLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixTQUFTO0NBQ1Y7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaG9tZSB7XFxuXFx0bWFyZ2luLXRvcDogMjBweDtcXG5cXG5cXHQmIGgyIHtcXG5cXHRcXHRjb2xvcjogdmFyKC0tdGV4dC1oMSk7XFxuXFx0fVxcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdG1hcmdpbi10b3A6IDA7XFxuXFx0fVxcbn1cXG5cXG4uaGVybyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGhlaWdodDogY2FsYygxMDBzdmggLSA4MHB4KTtcXG5cXHR3aWR0aDogOTAlO1xcblxcdG1hcmdpbjogYXV0bztcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdC0tYXJ0LXdpZHRoOiBtaW4oMTkwcHgsIDIwJSk7XFxuXFx0XFx0d2lkdGg6IG1pbig5MCUsIDEzMDBweCk7XFxuXFx0XFx0bWFyZ2luOiBhdXRvO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRoZWlnaHQ6IGNhbGMoMTAwc3ZoIC0gMTAwcHgpO1xcblxcdH1cXG59XFxuXFxuLmFydCB7XFxuXFx0aGVpZ2h0OiA2OCU7XFxuXFx0d2lkdGg6IHZhcigtLWFydC13aWR0aCk7XFxuXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkXzUwNTkxMTZjNTlkMjQ0ZDA4YzMxNzBiNDlkNmU3YjBmfm12Mi5qcGcvdjEvZmlsbC93XzU0NixoXzcyOCxhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLGVuY19hdXRvLzU0YTRjZF81MDU5MTE2YzU5ZDI0NGQwOGMzMTcwYjQ5ZDZlN2IwZn5tdjIuanBnKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcblxcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0aGVpZ2h0OiA4MCU7XFxuXFxuXFx0XFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkX2FlNWUyMjQ4NmRiYjQ5ZGViYjljZDhiYTFiNzgwYjZlfm12Mi5qcGcvdjEvZmlsbC93XzM4OCxoXzEyNDAsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMSxlbmNfYXV0by9BcnR3b3JrMV9GaW5hbF84eDJfNS5qcGcpO1xcblxcdH1cXG59XFxuXFxuLmhlcm8tdGV4dCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJvdHRvbTogMTAwcHg7XFxuXFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRnYXA6IDMwcHg7XFxuXFxuXFx0JiBoMSB7XFxuXFx0XFx0LS1mb250LXNpemU6IG1pbig1MHZ3LCAzMDBweCk7XFxuXFx0fVxcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdHBvc2l0aW9uOiBzdGF0aWM7XFxuXFx0XFx0cGxhY2UtY29udGVudDogY2VudGVyO1xcblxcdFxcdGdhcDogNjBweDtcXG5cXHR9XFxufVxcblxcbi5yZXNlcnZhdGlvbnMge1xcblxcdGNvbG9yOiAjZmZlNWU1O1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRsZXR0ZXItc3BhY2luZzogMnB4O1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDFweDtcXG5cXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDJweDtcXG59XFxuXFxuLnNjcm9sbC1kb3duIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1oMSk7XFxuXFxuXFx0JiAuZmEtYW5nbGUtZG93biB7XFxuXFx0XFx0bWFyZ2luLXRvcDogMTBweDtcXG5cXHRcXHRsaW5lLWhlaWdodDogMTZweDtcXG5cXHRcXHRmb250LXNpemU6IDcwcHg7XFxuXFx0XFx0YW5pbWF0aW9uOiBib3VuY2UgMnMgaW5maW5pdGU7XFxuXFx0fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XFxuXFx0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG5cXHR9XFxuXFx0NTAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG5cXHR9XFxufVxcblxcbi5sYW50ZXJucyB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHR3aWR0aDogdmFyKC0tYXJ0LXdpZHRoKTtcXG5cXHRoZWlnaHQ6IDgwJTtcXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHRkaXNwbGF5OiBncmlkO1xcblxcdH1cXG59XFxuXFxuLmxhbnRlcm4ge1xcblxcdC0tY2Fwcy13aWR0aDogNTBweDtcXG5cXHQtLWNhcHMtaGVpZ2h0OiAyMHB4O1xcblxcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0YWxpZ24tY29udGVudDogY2VudGVyO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXG5cXHQmIC50b3AsXFxuXFx0JiAuYm90dG9tIHtcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0d2lkdGg6IHZhcigtLWNhcHMtd2lkdGgpO1xcblxcdFxcdGhlaWdodDogdmFyKC0tY2Fwcy1oZWlnaHQpO1xcblxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdH1cXG5cXG5cXHQmIC50b3Age1xcblxcdFxcdGJvdHRvbTogLTVweDtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA4MCUgODAlIDAgMDtcXG5cXHR9XFxuXFxuXFx0JiAuYm90dG9tIHtcXG5cXHRcXHR0b3A6IC01cHg7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMCAwIDgwJSA4MCU7XFxuXFx0fVxcblxcblxcdCYgLmJvZHkge1xcblxcdFxcdHotaW5kZXg6IDE7XFxuXFx0XFx0aGVpZ2h0OiAxMzBweDtcXG5cXHRcXHR3aWR0aDogODAlO1xcblxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDg1cHg7XFxuXFx0XFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50LW1haW4tZGFyayk7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbWFpbik7XFxuXFx0XFx0YmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcXG5cXHRcXHRcXHR2YXIoLS1iZy1sYW50ZXJuKSxcXG5cXHRcXHRcXHR2YXIoLS1iZy1sYW50ZXJuKSAxOSUsXFxuXFx0XFx0XFx0dmFyKC0tYWNjZW50LW1haW4tZGFyaykgMjAlXFxuXFx0XFx0KTtcXG5cXHR9XFxuXFxuXFx0JiAuYm9keTpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMjQ1LCAyMDUsIDg0LCAwLjcpLCB0cmFuc3BhcmVudCA4MCUpLFxcblxcdFxcdFxcdHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0XFx0XFx0dmFyKC0tYmctbGFudGVybiksXFxuXFx0XFx0XFx0XFx0dmFyKC0tYmctbGFudGVybikgMTklLFxcblxcdFxcdFxcdFxcdHZhcigtLWFjY2VudC1tYWluLWRhcmspIDIwJVxcblxcdFxcdFxcdCk7XFxuXFx0fVxcblxcblxcdCYgPiAqIHtcXG5cXHRcXHRib3gtc2hhZG93OiAzcHggM3B4IDZweCAtM3B4ICM4YTBmMGY7XFxuXFx0fVxcbn1cXG5cXG4uaG91cnMtY29udGFpbmVyIHtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkIGhzbCgwLCA5NSUsIDcwJSk7XFxufVxcblxcbi5ob3VycyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMzBweDtcXG5cXG5cXHQmID4gZGl2IHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRnYXA6IDhweDtcXG5cXHR9XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHR3aWR0aDogNjUwcHg7XFxuXFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdFxcdGdhcDogNzBweDtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1lbnUge1xuXHRtYXJnaW4tdG9wOiA1cHg7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdG1hcmdpbjogMTBweCAyMHB4O1xuXHR9XG59XG5cbi5tZW51LWFydCB7XG5cdGhlaWdodDogNTUwcHg7XG5cdHdpZHRoOiBtaW4oMTAwdncsIDQwMHB4KTtcblx0bWFyZ2luOiBhdXRvO1xuXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzU0YTRjZF9iOGM5NTM3YzVmY2Q0ZDg1OWZjOTU4OTQyYjVhNWU4N35tdjIuanBnL3YxL2ZpbGwvd185NTIsaF8xMzIyLGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEsZW5jX2F1dG8vNTRhNGNkX2I4Yzk1MzdjNWZjZDRkODU5ZmM5NTg5NDJiNWE1ZTg3fm12Mi5qcGcpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdG1hcmdpbjogMDtcblx0XHRoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1mb290ZXItaGVpZ2h0KSAqIDIuNSk7XG5cdFx0d2lkdGg6IG1pbig2MDBweCwgNTB2dyk7XG5cdH1cbn1cblxuLm1lbnUtdGV4dCB7XG5cdG1hcmdpbjogLTk1cHggMCA0MHB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMTVweDtcblxuXHQmID4gKiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1tYWluKTtcblx0fVxuXG5cdCYgYSB7XG5cdFx0cGFkZGluZzogOHB4IDA7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRmb250LXNpemU6IDMwcHg7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IDNweDtcblx0fVxuXG5cdCYgYTpob3ZlciB7XG5cdFx0Ym94LXNoYWRvdzogMCAwIDAgMXB4IHdoaXRlO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0bWFyZ2luOiAwIC02MXB4IDA7XG5cdH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tZW51LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGVBQWU7O0NBRWYsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7O0NBRW5CO0VBQ0MsbUJBQW1CO0VBQ25CLGlCQUFpQjtDQUNsQjtBQUNEOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHdCQUF3QjtDQUN4QixZQUFZOztDQUVaLG9OQUFvTjtDQUNwTixzQkFBc0I7Q0FDdEIsNEJBQTRCOztDQUU1QjtFQUNDLFNBQVM7RUFDVCxnREFBZ0Q7RUFDaEQsdUJBQXVCO0NBQ3hCO0FBQ0Q7O0FBRUE7Q0FDQyxvQkFBb0I7O0NBRXBCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUzs7Q0FFVDtFQUNDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0NBQWdDO0NBQ2pDOztDQUVBO0VBQ0MsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CO0NBQ3BCOztDQUVBO0VBQ0MsMkJBQTJCO0NBQzVCOztDQUVBO0VBQ0MsaUJBQWlCO0NBQ2xCO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1lbnUge1xcblxcdG1hcmdpbi10b3A6IDVweDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdFxcdG1hcmdpbjogMTBweCAyMHB4O1xcblxcdH1cXG59XFxuXFxuLm1lbnUtYXJ0IHtcXG5cXHRoZWlnaHQ6IDU1MHB4O1xcblxcdHdpZHRoOiBtaW4oMTAwdncsIDQwMHB4KTtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkX2I4Yzk1MzdjNWZjZDRkODU5ZmM5NTg5NDJiNWE1ZTg3fm12Mi5qcGcvdjEvZmlsbC93Xzk1MixoXzEzMjIsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMSxlbmNfYXV0by81NGE0Y2RfYjhjOTUzN2M1ZmNkNGQ4NTlmYzk1ODk0MmI1YTVlODd+bXYyLmpwZyk7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdG1hcmdpbjogMDtcXG5cXHRcXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1mb290ZXItaGVpZ2h0KSAqIDIuNSk7XFxuXFx0XFx0d2lkdGg6IG1pbig2MDBweCwgNTB2dyk7XFxuXFx0fVxcbn1cXG5cXG4ubWVudS10ZXh0IHtcXG5cXHRtYXJnaW46IC05NXB4IDAgNDBweDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxNXB4O1xcblxcblxcdCYgPiAqIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLW1haW4pO1xcblxcdH1cXG5cXG5cXHQmIGEge1xcblxcdFxcdHBhZGRpbmc6IDhweCAwO1xcblxcdFxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0XFx0Zm9udC1zaXplOiAzMHB4O1xcblxcdFxcdGxldHRlci1zcGFjaW5nOiAzcHg7XFxuXFx0fVxcblxcblxcdCYgYTpob3ZlciB7XFxuXFx0XFx0Ym94LXNoYWRvdzogMCAwIDAgMXB4IHdoaXRlO1xcblxcdH1cXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHRtYXJnaW46IDAgLTYxcHggMDtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogLS0tLS0tLS0tLS0tLS0tICAgICBSZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJ1dHRvbiB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0YmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG5cdGNvbG9yOiB1bnNldDtcblx0Ym9yZGVyOiBub25lO1xuXHRmb250LXNpemU6IHVuc2V0O1xufVxuXG5hIHtcblx0Y29sb3I6IHVuc2V0O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmgxLFxuaDIge1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9SZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tICAgICBVdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuOnJvb3Qge1xuXHQtLWJnLW1haW46ICNmZjQwNDA7XG5cdC0tYWNjZW50LW1haW4tZGFyazogIzNkMDAwMDtcblx0LS1iZy1sYW50ZXJuOiAjZTgzMDMwO1xuXHQtLXRleHQtaDE6ICNmNWNlNTQ7XG5cdC0tYmctaW5wdXQ6IHdoaXRlO1xuXHQtLWJvcmRlci1pbnB1dDogYmxhY2s7XG5cblx0LS1mb290ZXItaGVpZ2h0OiA1MHB4O1xuXHQtLWFydC13aWR0aDogMTAwJTtcblxuXHRzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG5cdG1pbi1oZWlnaHQ6IDEwMXN2aDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLW1haW4pO1xuXHRjb2xvcjogI2ZmZjtcblx0Zm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsXG5cdFx0Um9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsXG5cdFx0c2Fucy1zZXJpZjtcbn1cblxuI2FsbC1jb250ZW50IHtcblx0ZmxleDogMTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaDEuYnJhbmQge1xuXHQtLWZvbnQtc2l6ZTogMTEwcHg7XG5cblx0Y29sb3I6IHZhcigtLXRleHQtaDEpO1xuXHR0ZXh0LXNoYWRvdzogMCAwIDVweCBibGFjaztcblx0Zm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuXHRsaW5lLWhlaWdodDogY2FsYyh2YXIoLS1mb250LXNpemUpICogMC44KTtcbn1cblxuLmhpZGRlbiB7XG5cdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnNvY2lhbHMge1xuXHRnYXA6IDEwcHg7XG5cdGZvbnQtc2l6ZTogMjVweDtcbn1cblxuYS51bmRlcmxpbmUge1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAxcHg7XG5cdHRleHQtdW5kZXJsaW5lLW9mZnNldDogM3B4O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9VdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZWJvb3QtdXRpbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbURBQW1EOztBQUVuRDs7O0NBR0MsU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWixZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLHFCQUFxQjtBQUN0Qjs7QUFFQTs7Q0FFQyxtQkFBbUI7QUFDcEI7O0FBRUEsb0RBQW9EO0FBQ3BELG1FQUFtRTs7QUFFbkU7Q0FDQyxrQkFBa0I7Q0FDbEIsMkJBQTJCO0NBQzNCLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLHFCQUFxQjs7Q0FFckIscUJBQXFCO0NBQ3JCLGlCQUFpQjs7Q0FFakIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0Msa0JBQWtCOztDQUVsQixhQUFhO0NBQ2Isc0JBQXNCOztDQUV0QixnQ0FBZ0M7Q0FDaEMsV0FBVztDQUNYOztZQUVXO0FBQ1o7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGtCQUFrQjs7Q0FFbEIscUJBQXFCO0NBQ3JCLDBCQUEwQjtDQUMxQiwyQkFBMkI7Q0FDM0IseUNBQXlDO0FBQzFDOztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsU0FBUztDQUNULGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsMEJBQTBCO0FBQzNCOztBQUVBLG9FQUFvRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAtLS0tLS0tLS0tLS0tLS0gICAgIFJlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xcblxcdGNvbG9yOiB1bnNldDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Zm9udC1zaXplOiB1bnNldDtcXG59XFxuXFxuYSB7XFxuXFx0Y29sb3I6IHVuc2V0O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuaDEsXFxuaDIge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1JlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBVdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG46cm9vdCB7XFxuXFx0LS1iZy1tYWluOiAjZmY0MDQwO1xcblxcdC0tYWNjZW50LW1haW4tZGFyazogIzNkMDAwMDtcXG5cXHQtLWJnLWxhbnRlcm46ICNlODMwMzA7XFxuXFx0LS10ZXh0LWgxOiAjZjVjZTU0O1xcblxcdC0tYmctaW5wdXQ6IHdoaXRlO1xcblxcdC0tYm9yZGVyLWlucHV0OiBibGFjaztcXG5cXG5cXHQtLWZvb3Rlci1oZWlnaHQ6IDUwcHg7XFxuXFx0LS1hcnQtd2lkdGg6IDEwMCU7XFxuXFxuXFx0c2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHkge1xcblxcdG1pbi1oZWlnaHQ6IDEwMXN2aDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbWFpbik7XFxuXFx0Y29sb3I6ICNmZmY7XFxuXFx0Zm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLFxcblxcdFxcdFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsXFxuXFx0XFx0c2Fucy1zZXJpZjtcXG59XFxuXFxuI2FsbC1jb250ZW50IHtcXG5cXHRmbGV4OiAxO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaDEuYnJhbmQge1xcblxcdC0tZm9udC1zaXplOiAxMTBweDtcXG5cXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1oMSk7XFxuXFx0dGV4dC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcblxcdGxpbmUtaGVpZ2h0OiBjYWxjKHZhcigtLWZvbnQtc2l6ZSkgKiAwLjgpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG5cXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zb2NpYWxzIHtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0Zm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG5hLnVuZGVybGluZSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMXB4O1xcblxcdHRleHQtdW5kZXJsaW5lLW9mZnNldDogM3B4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9VdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hYm91dC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb25zdGFudHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb25zdGFudHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2V2ZW50cy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2V2ZW50cy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZWJvb3QtdXRpbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JlYm9vdC11dGlsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZWxGYWN0b3J5LCBodG1sRmFjdG9yeSB9IGZyb20gXCIuL2RvbS1mYWN0b3JpZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQWJvdXRVcygpIHtcblx0cmV0dXJuIGh0bWxGYWN0b3J5KFxuXHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJhYm91dFwiIH0sIFtcblx0XHRcdGVsRmFjdG9yeShcInBcIiwgeyBjbGFzc0xpc3Q6IFwidGV4dFwiLCB0ZXh0Q29udGVudDogXCJDYWxsIHVzIGF0OlwiIH0sIFtcblx0XHRcdFx0ZWxGYWN0b3J5KFwiYVwiLCB7XG5cdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInVuZGVybGluZSBwaG9uZVwiLFxuXHRcdFx0XHRcdGhyZWY6IFwidGVsOisxLTIxMi01MTctMTk4N1wiLFxuXHRcdFx0XHRcdHRleHRDb250ZW50OiBcIjIxMiA1MTcgMTk4N1wiLFxuXHRcdFx0XHR9KSxcblx0XHRcdF0pLFxuXHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcIm1hcC1jb250YWluZXJcIiB9LCBbXG5cdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJtYXAtdGFja1wiIH0sIFtdKSxcblx0XHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcIm1hcC1zdHJpbmdcIiB9LCBbXG5cdFx0XHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImxlZnRcIiB9KSxcblx0XHRcdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwicmlnaHRcIiB9KSxcblx0XHRcdFx0XSksXG5cdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJtYXAtd29vZCBtYXAtdG9wXCIgfSwgW10pLFxuXHRcdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwibWFwLWNhbnZhc1wiIH0sIFtcblx0XHRcdFx0XHRlbEZhY3RvcnkoXCJpZnJhbWVcIiwge1xuXHRcdFx0XHRcdFx0c3JjOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDMwMjEuMjAyODQzMzg2MzU2ITJkLTczLjk3OTUzNzkyMzg4NzU2ITNkNDAuNzc5NTU0NTMzNDc3MTghMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg5YzI1OWM4MzkwYjBlOTclM0EweDJjYjExNjBhZWYzNzdkMGIhMnNBU1NFVCE1ZTAhM20yITFzZW4hMnN1cyE0djE2OTU4NjgzNzM5MjghNW0yITFzZW4hMnN1c1wiLFxuXHRcdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjQ1MFwiLFxuXHRcdFx0XHRcdFx0bG9hZGluZzogXCJsYXp5XCIsXG5cdFx0XHRcdFx0XHRyZWZlcnJlclBvbGljeTogXCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRdKSxcblx0XHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcIm1hcC13b29kIG1hcC1ib3R0b21cIiB9LCBbXSksXG5cdFx0XHRdKSxcblx0XHRdKVxuXHQpO1xufVxuIiwiaW1wb3J0IHsgZWxGYWN0b3J5LCBodG1sRmFjdG9yeSB9IGZyb20gXCIuL2RvbS1mYWN0b3JpZXMuanNcIjtcblxuZnVuY3Rpb24gY3JlYXRlU29jaWFsSWNvbnMoKSB7XG5cdC8vIHJldHVybnMgZGl2LnNvY2lhbHMgd2l0aCA0IGxpbmtzLCBlYWNoIGNvbnRhaW5pbmcgYW4gPGk+XG5cdHJldHVybiBlbEZhY3RvcnkoXG5cdFx0XCJkaXZcIixcblx0XHR7IGNsYXNzTGlzdDogXCJzb2NpYWxzXCIgfSxcblx0XHRbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaW5zdGFncmFtXCIsXG5cdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hc3NldHJlc3RhdXJhbnQvXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImZhY2Vib29rXCIsXG5cdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2Fzc2V0cmVzdGF1cmFudC9cIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwieWVscFwiLFxuXHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vd3d3LnllbHAuY29tL2Jpei9hc3NldC1uZXcteW9yaz9vc3E9YXNzZXRcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwidHJpcGFkdmlzb3JcIixcblx0XHRcdFx0bGluazogXCJodHRwczovL3d3dy50cmlwYWR2aXNvci5jb20vUmVzdGF1cmFudF9SZXZpZXctZzYwNzYzLWQxOTI4NDM0Ni1SZXZpZXdzLUFzc2V0LU5ld19Zb3JrX0NpdHlfTmV3X1lvcmsuaHRtbFwiLFxuXHRcdFx0fSxcblx0XHRdLm1hcCgocGFpcikgPT4ge1xuXHRcdFx0cmV0dXJuIGVsRmFjdG9yeShcImFcIiwgeyBocmVmOiBwYWlyLmxpbmsgfSwgW1xuXHRcdFx0XHRlbEZhY3RvcnkoXCJpXCIsIHtcblx0XHRcdFx0XHRjbGFzc0xpc3Q6IGBmYSBmYS0ke3BhaXIubmFtZX1gLFxuXHRcdFx0XHRcdGFyaWFIaWRkZW46IHRydWUsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XSk7XG5cdFx0fSlcblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ29uc3RhbnRzKCkge1xuXHRjb25zdCBzaWRlYmFyID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcInNpZGViYXIgZHluYW1pY1wiIH0sIFtcblx0XHRlbEZhY3RvcnkoXCJidXR0b25cIiwge1xuXHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdGNsYXNzTGlzdDogXCJjbG9zZS1idG4gc2lkZWJhci10b2dnbGVyXCIsXG5cdFx0XHRpZDogXCJjbG9zZS1zaWRlYmFyXCIsXG5cdFx0XHR0ZXh0Q29udGVudDogXCLDl1wiLFxuXHRcdH0pLFxuXHRcdGVsRmFjdG9yeShcblx0XHRcdFwibmF2XCIsXG5cdFx0XHR7fSxcblx0XHRcdFtcImhvbWVcIiwgXCJtZW51XCIsIFwiZXZlbnRzXCIsIFwiYWJvdXRcIl0ubWFwKChidXR0b24pID0+IHtcblx0XHRcdFx0cmV0dXJuIGVsRmFjdG9yeShcImJ1dHRvblwiLCB7XG5cdFx0XHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwibmF2LWJ0blwiLFxuXHRcdFx0XHRcdGlkOiBgJHtidXR0b259LWJ0bmAsXG5cdFx0XHRcdFx0dGV4dENvbnRlbnQ6IGJ1dHRvbixcblx0XHRcdFx0fSk7XG5cdFx0XHR9KVxuXHRcdCksXG5cdF0pO1xuXG5cdGNvbnN0IGhlYWRlciA9IGVsRmFjdG9yeShcImhlYWRlclwiLCB7fSwgW1xuXHRcdGVsRmFjdG9yeShcImJ1dHRvblwiLCB7XG5cdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0Y2xhc3NMaXN0OiBcInNpZGViYXItdG9nZ2xlclwiLFxuXHRcdFx0aWQ6IFwib3Blbi1zaWRlYmFyXCIsXG5cdFx0XHR0ZXh0Q29udGVudDogXCLimLBcIixcblx0XHR9KSxcblx0XHRjcmVhdGVTb2NpYWxJY29ucygpLFxuXHRdKTtcblxuXHRjb25zdCBmb290ZXIgPSBlbEZhY3RvcnkoXCJmb290ZXJcIiwge30sIFtcblx0XHRjcmVhdGVTb2NpYWxJY29ucygpLFxuXHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJhdXRob3JcIiB9LCBbXG5cdFx0XHRlbEZhY3RvcnkoXCJwXCIsIHsgdGV4dENvbnRlbnQ6IFwiV2Fsa2VyXCIgfSksXG5cdFx0XHRlbEZhY3RvcnkoXG5cdFx0XHRcdFwiYVwiLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vbWFybGF0dGVcIixcblx0XHRcdFx0XHR0YXJnZXQ6IFwiX2JsYW5rXCIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFtlbEZhY3RvcnkoXCJpXCIsIHsgY2xhc3NMaXN0OiBcImZhIGZhLWdpdGh1YlwiIH0pXVxuXHRcdFx0KSxcblx0XHRcdGVsRmFjdG9yeShcInBcIiwgeyB0ZXh0Q29udGVudDogXCJNYXJsYXR0XCIgfSksXG5cdFx0XSksXG5cdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImNvbnRhY3QtY29udGFpbmVyXCIgfSwgW1xuXHRcdFx0ZWxGYWN0b3J5KFwiYnV0dG9uXCIsIHtcblx0XHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdFx0aWQ6IFwiY29udGFjdC1idG5cIixcblx0XHRcdFx0dGV4dENvbnRlbnQ6IFwiQ29udGFjdCBVc1wiLFxuXHRcdFx0fSksXG5cdFx0XSksXG5cdF0pO1xuXG5cdHJldHVybiBbXG5cdFx0c2lkZWJhcixcblx0XHRoZWFkZXIsXG5cdFx0ZWxGYWN0b3J5KFwibWFpblwiLCB7IGlkOiBcImNoYW5naW5nLWNvbnRlbnRcIiB9KSxcblx0XHRmb290ZXIsXG5cdF0ubWFwKChzZWN0aW9uKSA9PiB7XG5cdFx0cmV0dXJuIGh0bWxGYWN0b3J5KHNlY3Rpb24pO1xuXHR9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBlbEZhY3RvcnkodHlwZSwgYXR0cmlidXRlcywgY2hpbGRyZW4gPSBbXSkge1xuXHRyZXR1cm4geyB0eXBlLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHRtbEZhY3Rvcnkob2JqKSB7XG5cdGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvYmoudHlwZSk7XG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSBvYmouYXR0cmlidXRlcztcblxuXHRmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuXHRcdGVsW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG5cdH1cblxuXHRvYmouY2hpbGRyZW4/LmZvckVhY2goKGNoaWxkKSA9PiB7XG5cdFx0ZWwuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkoY2hpbGQpKTtcblx0fSk7XG5cblx0cmV0dXJuIGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybVJvd0ZhY3RvcnkoZm9ybURhdGFBcnJheXMpIHtcblx0cmV0dXJuIGZvcm1EYXRhQXJyYXlzXG5cdFx0Lm1hcCgoZm9ybURhdGEpID0+IHtcblx0XHRcdGNvbnN0IGtlYmFiID0gZm9ybURhdGFbMF0udG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIi1cIik7XG5cdFx0XHRyZXR1cm4gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImZvcm0taXRlbVwiIH0sIFtcblx0XHRcdFx0ZWxGYWN0b3J5KFwibGFiZWxcIiwge1xuXHRcdFx0XHRcdGh0bWxGb3I6IGtlYmFiLFxuXHRcdFx0XHRcdHRleHRDb250ZW50OiBmb3JtRGF0YVswXSArIFwiOlwiLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0ZWxGYWN0b3J5KFwiaW5wdXRcIiwge1xuXHRcdFx0XHRcdGlkOiBrZWJhYixcblx0XHRcdFx0XHR0eXBlOiBmb3JtRGF0YVsxXSxcblx0XHRcdFx0XHRhdXRvY29tcGxldGU6IGZvcm1EYXRhWzJdLFxuXHRcdFx0XHR9KSxcblx0XHRcdF0pO1xuXHRcdH0pXG5cdFx0LnJlZHVjZSgoYWNjLCBjdXJyZW50SXRlbSwgaW5kZXgpID0+IHtcblx0XHRcdGlmICghKGluZGV4ICYgMSkpIHtcblx0XHRcdFx0Ly8gSWYgZXZlbiwgY3JlYXRlIHJvdyB3aXRoIGN1cnJlbnRJdGVtIGFzIGEgY2hpbGRcblx0XHRcdFx0YWNjLnB1c2goXG5cdFx0XHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImZvcm0tcm93XCIgfSwgW2N1cnJlbnRJdGVtXSlcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIElmIG9kZCwgYWRkIGN1cnJlbnRJdGVtIHRvIHByZXZpb3VzIHJvd1xuXHRcdFx0XHRhY2NbYWNjLmxlbmd0aCAtIDFdLmNoaWxkcmVuLnB1c2goY3VycmVudEl0ZW0pO1xuXHRcdFx0XHRyZXR1cm4gYWNjO1xuXHRcdFx0fVxuXHRcdH0sIFtdKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tIFwiLi9mb3JtLmpzXCI7XG5pbXBvcnQgeyBodG1sRmFjdG9yeSwgZWxGYWN0b3J5IH0gZnJvbSBcIi4vZG9tLWZhY3Rvcmllcy5qc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVUZXh0Q2hpbGRyZW4oKSB7XG5cdGNvbnN0IHRleHRDaGlsZHJlbiA9IFtcblx0XHRbXCJoMVwiLCBcIlByaXZhdGUgRGluaW5nICYgRXZlbnRzXCJdLFxuXHRcdFtcImgyXCIsIFwiU3BlY2lhbCBFdmVudHNcIl0sXG5cdFx0W1xuXHRcdFx0XCJwXCIsXG5cdFx0XHRcIldpdGggdHdvIGxldmVscyBvZiBkaW5pbmcgYW5kIGEgYmFyIG9uIGVhY2ggZmxvb3IsIHRoZSByZXN0YXVyYW50IG9mZmVycyBzZWF0aW5nIGZvciB1cCAyMjAgZ3Vlc3RzIHdpdGhpbiBhcHByb3hpbWF0ZWx5IDUsMDAwIHNxdWFyZS1mb290YWdlLiBVcG9uIGVudHJ5IGludG8gdGhlIHJlc3RhdXJhbnQgdGhyb3VnaCBhIGdsYXNzIGVudHJ5d2F5IGlzIGEgMjQtIHNlYXQgYmFyIGZvciBndWVzdHMgdG8gZW5qb3kgYSBkcmluaywgc25hY2ssIG9yIGZ1bGwgZGlubmVyLlwiLFxuXHRcdF0sXG5cdFx0W1xuXHRcdFx0XCJwXCIsXG5cdFx0XHRcIlRoZXJlIGFyZSBtdWx0aXBsZSBhcmVhcyBvZiB0aGUgcmVzdGF1cmFudCB0aGF0IGNhbiBob3N0IHByaXZhdGUgYW5kIHNlbWktcHJpdmF0ZSBldmVudHMgYXMgdGhlIHJlc3RhdXJhbnQgYm9hc3RzIHR3byBzZW1pLXByaXZhdGUgcm9vbXMgdGhhdCBib3RoIHNlYXQgMjAgZ3Vlc3RzLCBhcyB3ZWxsIGFzIHRoZSB1cHN0YWlycyBNZXp6YW5pbmUgbGV2ZWwsIHdoaWNoIHNlYXRzIHVwIHRvIDUwIGFuZCA4IGF0IHRoZSBiYXIuIFNlYXRpbmcgd2lsbCBiZSBhdmFpbGFibGUgb3V0ZG9vcnMgc2Vhc29uYWxseS5cIixcblx0XHRdLFxuXHRcdFtcImgyXCIsIFwiQ29ja3RhaWwgUGFydGllcywgUmVjZXB0aW9ucywgQnV5b3V0c1wiXSxcblx0XHRbXG5cdFx0XHRcInBcIixcblx0XHRcdFwiV2UgYXJlIHBsZWFzZWQgdG8gb2ZmZXIgb3VyIHNlcnZpY2VzIGZvciB5b3VyIG5leHQgb2NjYXNpb25zLiBCb29rIG91ciBlbnRpcmUgcmVzdGF1cmFudCBmb3IgYSBzcGVjaWFsIGV2ZW5pbmcsIGNhdGVyZWQganVzdCBmb3IgeW91IGFuZCB5b3VyIGd1ZXN0cy4gTGV0IHVzIGJyaW5nIHRoZSBBU1NFVCBleHBlcmllbmNlIHRvIHlvdXIgd2VkZGluZywgYmlydGhkYXlzIGFuZCBvdGhlciBsYXJnZSBldmVudHNcIixcblx0XHRdLFxuXHRcdFtcInBcIiwgXCJJbnF1aXJlIGJlbG93IG9yIGNvbnRhY3QgdXMgYXQ6XCJdLFxuXHRdLm1hcCgoZW50cnkpID0+IHtcblx0XHRyZXR1cm4gZWxGYWN0b3J5KGVudHJ5WzBdLCB7IHRleHRDb250ZW50OiBlbnRyeVsxXSB9KTtcblx0fSk7XG5cblx0dGV4dENoaWxkcmVuW3RleHRDaGlsZHJlbi5sZW5ndGggLSAxXS5jaGlsZHJlbi5wdXNoKFxuXHRcdGVsRmFjdG9yeShcImFcIiwge1xuXHRcdFx0aHJlZjogXCJ0ZWw6KzEtMjEyLTUxNy0xOTg3XCIsXG5cdFx0XHR0ZXh0Q29udGVudDogXCIrMSAyMTIgNTE3IDE5ODdcIixcblx0XHRcdGNsYXNzTGlzdDogXCJ1bmRlcmxpbmVcIixcblx0XHR9KVxuXHQpO1xuXG5cdHRleHRDaGlsZHJlbi5wdXNoKFxuXHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJjYWxsLXRvLWFjdGlvblwiIH0sIFtcblx0XHRcdGVsRmFjdG9yeShcImJ1dHRvblwiLCB7XG5cdFx0XHRcdGNsYXNzTGlzdDogXCJpbnF1aXJlXCIsXG5cdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG5cdFx0XHRcdHRleHRDb250ZW50OiBcIklucXVpcmUgTm93XCIsXG5cdFx0XHR9KSxcblx0XHRdKVxuXHQpO1xuXHRyZXR1cm4gdGV4dENoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQaG90b3MoKSB7XG5cdHJldHVybiBbXG5cdFx0e1xuXHRcdFx0c3JjOiBcImh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvYmJmMDI1YjJhMTk0NDBkMTk3Y2JlZjY2NmZmZmJjOGUuanBnL3YxL2ZpbGwvd185OTksaF82MDAsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMSxlbmNfYXV0by9iYmYwMjViMmExOTQ0MGQxOTdjYmVmNjY2ZmZmYmM4ZS5qcGdcIixcblx0XHRcdGFsdDogXCJQZW9wbGUgZHJpbmtpbmcgYXQgYSBiYXJcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNyYzogXCJodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzU0YTRjZF9hMjY1YTJmMjU4MzQ0YzE1OWMzZDA2ZmNlYmQ5NDBlZX5tdjIuanBnL3YxL2ZpbGwvd182NjYsaF82MDAsYWxfbCxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMSxlbmNfYXV0by81NGE0Y2RfYTI2NWEyZjI1ODM0NGMxNTljM2QwNmZjZWJkOTQwZWV+bXYyLmpwZ1wiLFxuXHRcdFx0YWx0OiBcIkEgZ2xhc3Mgb2Ygd2luZSBhbmQgcGxhdGUgb2YgZm9vZFwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c3JjOiBcImh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkXzk1MTg0YTg2YWVlZTQyYmM4ZjJiNjVkNDE0OGFjZGRmfm12Ml9kXzE5NTBfMTMwOF9zXzIuanBnL3YxL2ZpbGwvd182NjYsaF82MDAsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMSxlbmNfYXV0by81NGE0Y2RfOTUxODRhODZhZWVlNDJiYzhmMmI2NWQ0MTQ4YWNkZGZ+bXYyX2RfMTk1MF8xMzA4X3NfMi5qcGdcIixcblx0XHRcdGFsdDogXCJBIERKIGJvb3RoXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzcmM6IFwiaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS81NGE0Y2RfYjJlNTM2YWJmMGVhNDM2ZDkwNTU3YzVlNTI4YTFlYzB+bXYyLnBuZy92MS9maWxsL3dfOTk5LGhfNjAwLGFsX2wscV85MCx1c21fMC42Nl8xLjAwXzAuMDEsZW5jX2F1dG8vNTRhNGNkX2IyZTUzNmFiZjBlYTQzNmQ5MDU1N2M1ZTUyOGExZWMwfm12Mi5wbmdcIixcblx0XHRcdGFsdDogXCJBIGJhciBmdWxsIG9mIHBlb3BsZVwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c3JjOiBcImh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkXzY2NjQzODg1YmYyZTQ0ZDdhNWY5Mzk2Y2QyNmY2ZTk3fm12Mi5qcGcvdjEvZmlsbC93XzgzMyxoXzU1MCxhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLGVuY19hdXRvLzU0YTRjZF82NjY0Mzg4NWJmMmU0NGQ3YTVmOTM5NmNkMjZmNmU5N35tdjIuanBnXCIsXG5cdFx0XHRhbHQ6IFwiQW4gZW1wdHkgYmFyLCBsaXQgZnJvbSB1bmRlcm5lYXRoXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzcmM6IFwiaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS81NGE0Y2RfNWMwMjQ4MDQwMDE1NGJiZWJkMDc1OGViMmY4ZDdiOGR+bXYyX2RfMTYwMF8xMjAwX3NfMi5qcGcvdjEvZmlsbC93XzgzMyxoXzU1MCxhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLGVuY19hdXRvLzU0YTRjZF81YzAyNDgwNDAwMTU0YmJlYmQwNzU4ZWIyZjhkN2I4ZH5tdjJfZF8xNjAwXzEyMDBfc18yLmpwZ1wiLFxuXHRcdFx0YWx0OiBcIlJlc3RhdXJhbnQgc3RhZmZcIixcblx0XHR9LFxuXHRdXG5cdFx0Lm1hcCgoaW1nT2JqLCBpbmRleCkgPT4ge1xuXHRcdFx0Y29uc3QgW3NyYywgYWx0XSA9IFtpbWdPYmouc3JjLCBpbWdPYmouYWx0XTtcblx0XHRcdHJldHVybiBlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiaW1hZ2UtY29udGFpbmVyXCIgfSwgW1xuXHRcdFx0XHRlbEZhY3RvcnkoXCJpbWdcIiwgeyBzcmMsIGFsdCB9KSxcblx0XHRcdF0pO1xuXHRcdH0pXG5cdFx0LnJlZHVjZSgoYWNjLCBjdXJyZW50SW1nLCBpbmRleCkgPT4ge1xuXHRcdFx0aWYgKCEoaW5kZXggJiAxKSkge1xuXHRcdFx0XHQvLyBJZiBldmVuLCBjcmVhdGUgdGllciB3aXRoIGNoaWxkIGltZ1xuXHRcdFx0XHRhY2MucHVzaChlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwidGllclwiIH0sIFtjdXJyZW50SW1nXSkpO1xuXHRcdFx0XHRyZXR1cm4gYWNjO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSWYgb2RkLCBhZGQgaW1nIGNoaWxkIHRvIHByZXZpb3VzIHRpZXJcblx0XHRcdFx0YWNjW2FjYy5sZW5ndGggLSAxXS5jaGlsZHJlbi5wdXNoKGN1cnJlbnRJbWcpO1xuXHRcdFx0XHRyZXR1cm4gYWNjO1xuXHRcdFx0fVxuXHRcdH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRXZlbnRzKCkge1xuXHRjb25zdCBbZXZlbnRzQ29udGVudCwgcGhvdG9zLCBjYWxsVG9BY3Rpb24sIG1vZGFsRWxlbWVudF0gPSBbXG5cdFx0XCJjb250ZW50XCIsXG5cdFx0XCJwaG90b3NcIixcblx0XHRcImNhbGwtdG8tYWN0aW9uXCIsXG5cdFx0XCJtb2RhbCBjbG9zZS1tb2RhbCBoaWRkZW5cIixcblx0XS5tYXAoKGVsKSA9PiB7XG5cdFx0cmV0dXJuIGVsRmFjdG9yeShcImFydGljbGVcIiwgeyBjbGFzc0xpc3Q6IGVsIH0pO1xuXHR9KTtcblxuXHRldmVudHNDb250ZW50LmNoaWxkcmVuLnB1c2goXG5cdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImFydFwiIH0pLFxuXHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJ0ZXh0XCIgfSwgY3JlYXRlVGV4dENoaWxkcmVuKCkpXG5cdCk7XG5cblx0cGhvdG9zLmNoaWxkcmVuLnB1c2goLi4uY3JlYXRlUGhvdG9zKCkpO1xuXG5cdGNhbGxUb0FjdGlvbi5jaGlsZHJlbi5wdXNoKFxuXHRcdGVsRmFjdG9yeShcInBcIiwgeyB0ZXh0Q29udGVudDogXCJMZXQgdXMgaG9zdCB5b3VyIG5leHQgZXZlbnRcIiB9KSxcblx0XHRlbEZhY3RvcnkoXCJidXR0b25cIiwge1xuXHRcdFx0Y2xhc3NMaXN0OiBcImlucXVpcmVcIixcblx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG5cdFx0XHR0ZXh0Q29udGVudDogXCJJbnF1aXJlIE5vd1wiLFxuXHRcdH0pXG5cdCk7XG5cblx0bW9kYWxFbGVtZW50LmNoaWxkcmVuLnB1c2goY3JlYXRlRm9ybSgpKTtcblxuXHRyZXR1cm4gaHRtbEZhY3RvcnkoXG5cdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImV2ZW50cyBkeW5hbWljXCIgfSwgW1xuXHRcdFx0ZXZlbnRzQ29udGVudCxcblx0XHRcdHBob3Rvcyxcblx0XHRcdGNhbGxUb0FjdGlvbixcblx0XHRcdG1vZGFsRWxlbWVudCxcblx0XHRdKVxuXHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuRm9yQ2xpY2tzKCkge1xuXHRjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG5cblx0Y29uc3QgaW5xdWlyZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlucXVpcmVcIik7XG5cdGlucXVpcmVCdG5zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0bW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblx0XHR9KTtcblx0fSk7XG5cblx0Y29uc3QgY2xvc2VNb2RhbEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNsb3NlLW1vZGFsXCIpO1xuXHRjbG9zZU1vZGFsQnRucy5mb3JFYWNoKChjbG9zZXIpID0+IHtcblx0XHRjbG9zZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRpZiAoZS50YXJnZXQuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKFwiY2xvc2UtbW9kYWxcIikpIHtcblx0XHRcdFx0bW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG5cblx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuXHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc29sZS5sb2coXCJGb3JtIHN1Ym1pdHRlZC5cIik7XG5cdFx0bW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblx0fSk7XG59XG4iLCJpbXBvcnQgeyBlbEZhY3RvcnksIGZvcm1Sb3dGYWN0b3J5IH0gZnJvbSBcIi4vZG9tLWZhY3Rvcmllcy5qc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVEZXRhaWxTZWN0aW9uKCkge1xuXHQvLyBGaXJzdCBmb3JtLWl0ZW1cblx0Y29uc3QgZXZlbnRUeXBlID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImZvcm0taXRlbVwiIH0sIFtcblx0XHRlbEZhY3RvcnkoXCJsYWJlbFwiLCB7XG5cdFx0XHRodG1sRm9yOiBcImV2ZW50LXR5cGVcIixcblx0XHRcdHRleHRDb250ZW50OiBcIlR5cGUgb2YgRXZlbnQ6XCIsXG5cdFx0fSksXG5cdFx0ZWxGYWN0b3J5KFwiaW5wdXRcIiwge1xuXHRcdFx0aWQ6IFwiZXZlbnQtdHlwZVwiLFxuXHRcdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0XHRwbGFjZWhvbGRlcjogXCJCaXJ0aGRheSwgQnVzaW5lc3MgRGlubmVyLCBldGMuXCIsXG5cdFx0XHRhdXRvY29tcGxldGU6IFwib2ZmXCIsXG5cdFx0fSksXG5cdF0pO1xuXG5cdC8vIE11bHRpcGxlIGNob2ljZSByYWRpbyBidXR0b25zXG5cdGNvbnN0IGxvY2F0aW9uID0gZWxGYWN0b3J5KFwiZmllbGRzZXRcIiwgeyBjbGFzc0xpc3Q6IFwibG9jYXRpb25cIiB9LCBbXG5cdFx0ZWxGYWN0b3J5KFwibGVnZW5kXCIsIHsgdGV4dENvbnRlbnQ6IFwiTG9jYXRpb246XCIgfSksXG5cdFx0Li4uW1xuXHRcdFx0W1wiYXNzZXRcIiwgXCIzMjkgQ29sdW1idXMgQXZlLlwiXSxcblx0XHRcdFtcInRlc3NhXCIsIFwiMzQ5IEFtc3RlcmRhbSBBdmUuXCJdLFxuXHRcdF0ubWFwKChwYWlyKSA9PiB7XG5cdFx0XHRyZXR1cm4gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImZvcm0taXRlbVwiIH0sIFtcblx0XHRcdFx0ZWxGYWN0b3J5KFwibGFiZWxcIiwge30sIFtcblx0XHRcdFx0XHRlbEZhY3RvcnkoXCJpbnB1dFwiLCB7XG5cdFx0XHRcdFx0XHRuYW1lOiBcImxvY2F0aW9uXCIsXG5cdFx0XHRcdFx0XHR0eXBlOiBcInJhZGlvXCIsXG5cdFx0XHRcdFx0XHR2YWx1ZTogcGFpclswXSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRlbEZhY3RvcnkoXCJzcGFuXCIsIHtcblx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBwYWlyWzBdLnRvVXBwZXJDYXNlKCkgKyBcIiAtIFwiICsgcGFpclsxXSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XSksXG5cdFx0XHRdKTtcblx0XHR9KSxcblx0XSk7XG5cblx0Ly8gTGFzdCAyIHJvd3Mgb2YgdGhpcyBzZWN0aW9uXG5cdGNvbnN0IGJ5VGhlTnVtYmVycyA9IGZvcm1Sb3dGYWN0b3J5KFtcblx0XHRbXCJQYXJ0eSBTaXplXCIsIFwibnVtYmVyXCIsIFwib2ZmXCJdLFxuXHRcdFtcIkRhdGVcIiwgXCJkYXRlXCIsIFwib2ZmXCJdLFxuXHRcdFtcIlN0YXJ0IFRpbWVcIiwgXCJ0aW1lXCIsIFwib2ZmXCJdLFxuXHRcdFtcIkVuZCBUaW1lXCIsIFwidGltZVwiLCBcIm9mZlwiXSxcblx0XSk7XG5cblx0cmV0dXJuIFtldmVudFR5cGUsIGxvY2F0aW9uLCAuLi5ieVRoZU51bWJlcnNdO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFeHRyYXNTZWN0aW9uKCkge1xuXHQvLyAxIGZvcm0taXRlbSB3aXRoIHRleHRhcmVhIGFuZCAxIHdpdGggc2VsZWN0XG5cdGNvbnN0IFt0ZXh0QXJlYUl0ZW0sIHNlbGVjdEl0ZW1dID0gW1xuXHRcdFtcImV4dHJhLWluZm9cIiwgXCJ0ZXh0YXJlYVwiXSxcblx0XHRbXCJyZWZlcnJhbC1zb3VyY2VcIiwgXCJzZWxlY3RcIl0sXG5cdF0ubWFwKChwYWlyKSA9PiB7XG5cdFx0cmV0dXJuIGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJmb3JtLWl0ZW1cIiB9LCBbXG5cdFx0XHRlbEZhY3RvcnkoXCJsYWJlbFwiLCB7IGh0bWxGb3I6IHBhaXJbMF0gfSksXG5cdFx0XHRlbEZhY3RvcnkocGFpclsxXSwgeyBuYW1lOiBwYWlyWzBdLCBpZDogcGFpclswXSB9KSxcblx0XHRdKTtcblx0fSk7XG5cblx0Ly8gQWRkIHRleHQgY29udGVudCB0byBlYWNoIDxsYWJlbD5cblx0dGV4dEFyZWFJdGVtLmNoaWxkcmVuWzBdLmF0dHJpYnV0ZXMudGV4dENvbnRlbnQgPVxuXHRcdFwiSXMgdGhlcmUgYW55IGFkZGl0aW9uYWwgaW5mb3JtYXRpb24geW91IHdvdWxkIGxpa2UgdG8gYWRkP1wiO1xuXHRzZWxlY3RJdGVtLmNoaWxkcmVuWzBdLmF0dHJpYnV0ZXMudGV4dENvbnRlbnQgPVxuXHRcdFwiSG93IGRpZCB5b3UgaGVhciBhYm91dCB1cz9cIjtcblxuXHQvLyBBZGQgYXR0cmlidXRlcyB0byA8dGV4dGFyZWE+XG5cdHRleHRBcmVhSXRlbS5jaGlsZHJlblsxXS5hdHRyaWJ1dGVzLnJvd3MgPSBcIjZcIjtcblx0dGV4dEFyZWFJdGVtLmNoaWxkcmVuWzFdLmF0dHJpYnV0ZXMucGxhY2Vob2xkZXIgPVxuXHRcdFwiU3VycHJpc2VzLCBEaWV0YXJ5IE5lZWRzLCBldGMuXCI7XG5cblx0Ly8gQWRkIDkgPG9wdGlvbj4ncyB0byA8c2VsZWN0PlxuXHRjb25zdCBvcHRpb25zQXJyYXkgPSBbXG5cdFx0XCJFdmVudFVwXCIsXG5cdFx0XCJJbnN0YWdyYW1cIixcblx0XHRcIkZhY2Vib29rXCIsXG5cdFx0XCJUcmlwbGVzZWF0IFJlc3RhdXJhbnRzXCIsXG5cdFx0XCJTZWFyY2ggRW5naW5lXCIsXG5cdFx0XCJFbWFpbFwiLFxuXHRcdFwiT3RoZXJcIixcblx0XHRcIldlYnNpdGVcIixcblx0XS5tYXAoKHRleHQpID0+IHtcblx0XHRyZXR1cm4gZWxGYWN0b3J5KFwib3B0aW9uXCIsIHtcblx0XHRcdHZhbHVlOiB0ZXh0LnNwbGl0KFwiIFwiKVswXS50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0dGV4dENvbnRlbnQ6IHRleHQsXG5cdFx0fSk7XG5cdH0pO1xuXG5cdHNlbGVjdEl0ZW0uY2hpbGRyZW5bMV0uY2hpbGRyZW4ucHVzaChcblx0XHRlbEZhY3RvcnkoXCJvcHRpb25cIiwge1xuXHRcdFx0dmFsdWU6IFwiXCIsXG5cdFx0XHR0ZXh0Q29udGVudDogXCJTZWxlY3QgYW4gb3B0aW9uXCIsXG5cdFx0XHRzZWxlY3RlZDogdHJ1ZSxcblx0XHR9KSxcblx0XHQuLi5vcHRpb25zQXJyYXlcblx0KTtcblxuXHRyZXR1cm4gW3RleHRBcmVhSXRlbSwgc2VsZWN0SXRlbV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xuXHQvLyBDcmVhdGUgc2VjdGlvbnMgY29udGFpbmVycyBmb3IgdGhlIGNvbXBsaWNhdGVkIHBhcnRzXG5cdGNvbnN0IFtmb3JtQ29udGFjdCwgZm9ybURldGFpbHMsIGZvcm1FeHRyYXNdID0gW1xuXHRcdFwiZm9ybS1jb250YWN0XCIsXG5cdFx0XCJmb3JtLWRldGFpbHNcIixcblx0XHRcImZvcm0tZXh0cmFzXCIsXG5cdF0ubWFwKChlbCkgPT4ge1xuXHRcdHJldHVybiBlbEZhY3RvcnkoXCJzZWN0aW9uXCIsIHsgY2xhc3NMaXN0OiBlbCB9KTtcblx0fSk7XG5cblx0Zm9ybUNvbnRhY3QuY2hpbGRyZW4ucHVzaChcblx0XHRlbEZhY3RvcnkoXCJoNFwiLCB7IHRleHRDb250ZW50OiBcIkNvbnRhY3RcIiB9KSxcblx0XHQuLi5mb3JtUm93RmFjdG9yeShbXG5cdFx0XHRbXCJGaXJzdCBOYW1lXCIsIFwidGV4dFwiLCBcImdpdmVuLW5hbWVcIl0sXG5cdFx0XHRbXCJMYXN0IE5hbWVcIiwgXCJ0ZXh0XCIsIFwiZmFtaWx5LW5hbWVcIl0sXG5cdFx0XHRbXCJFbWFpbFwiLCBcImVtYWlsXCIsIFwiZW1haWxcIl0sXG5cdFx0XHRbXCJQaG9uZVwiLCBcInRlbFwiLCBcInRlbFwiXSxcblx0XHRcdFtcIkNvbXBhbnlcIiwgXCJ0ZXh0XCIsIFwib3JnYW5pemF0aW9uXCJdLFxuXHRcdF0pXG5cdCk7XG5cblx0Zm9ybURldGFpbHMuY2hpbGRyZW4ucHVzaChcblx0XHRlbEZhY3RvcnkoXCJoNFwiLCB7IHRleHRDb250ZW50OiBcIkV2ZW50IERldGFpbHNcIiB9KSxcblx0XHQuLi5jcmVhdGVEZXRhaWxTZWN0aW9uKClcblx0KTtcblxuXHRmb3JtRXh0cmFzLmNoaWxkcmVuLnB1c2goXG5cdFx0ZWxGYWN0b3J5KFwiaDRcIiwgeyB0ZXh0Q29udGVudDogXCJFeHRyYXNcIiB9KSxcblx0XHQuLi5jcmVhdGVFeHRyYXNTZWN0aW9uKClcblx0KTtcblxuXHQvLyBDcmVhdGUgZm9ybSBlbGVtZW50IGFuZCBvdmVyYXJjaGluZyBzdHJ1Y3R1cmVcblx0Y29uc3QgZm9ybUVsZW1lbnQgPSBlbEZhY3RvcnkoXCJmb3JtXCIsIHt9LCBbXG5cdFx0ZWxGYWN0b3J5KFwic2VjdGlvblwiLCB7IGNsYXNzTGlzdDogXCJmb3JtLWhlYWRlclwiIH0sIFtcblx0XHRcdGVsRmFjdG9yeShcImgzXCIsIHsgdGV4dENvbnRlbnQ6IFwiTGV0J3MgZ2V0IHNvbWUgaW5mbyFcIiB9KSxcblx0XHRcdGVsRmFjdG9yeShcImJ1dHRvblwiLCB7XG5cdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG5cdFx0XHRcdGNsYXNzTGlzdDogXCJjbG9zZS1tb2RhbCBjbG9zZS1idG5cIixcblx0XHRcdFx0aWQ6IFwiY2xvc2UtbW9kYWxcIixcblx0XHRcdFx0dGV4dENvbnRlbnQ6IFwiw5dcIixcblx0XHRcdH0pLFxuXHRcdF0pLFxuXHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJmb3JtLWNvbnRlbnRcIiB9LCBbXG5cdFx0XHRmb3JtQ29udGFjdCxcblx0XHRcdGZvcm1EZXRhaWxzLFxuXHRcdFx0Zm9ybUV4dHJhcyxcblx0XHRdKSxcblx0XHRlbEZhY3RvcnkoXCJidXR0b25cIiwgeyB0eXBlOiBcInN1Ym1pdFwiLCB0ZXh0Q29udGVudDogXCJTdWJtaXRcIiB9KSxcblx0XSk7XG5cdHJldHVybiBmb3JtRWxlbWVudDtcbn1cbiIsImltcG9ydCB7IGVsRmFjdG9yeSwgaHRtbEZhY3RvcnkgfSBmcm9tIFwiLi9kb20tZmFjdG9yaWVzLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEhvbWUoKSB7XG5cdGNvbnN0IGhlcm9UZXh0ID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImhlcm8tdGV4dFwiIH0sIFtcblx0XHRlbEZhY3RvcnkoXCJoMVwiLCB7IGNsYXNzTGlzdDogXCJicmFuZFwiLCB0ZXh0Q29udGVudDogXCJBRVwiIH0pLFxuXHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJyZXNlcnZhdGlvbnNcIiB9LCBbXG5cdFx0XHRlbEZhY3RvcnkoXCJhXCIsIHtcblx0XHRcdFx0aHJlZjogXCJodHRwczovL3Jlc3kuY29tL2NpdGllcy9ueS9hc3NldFwiLFxuXHRcdFx0XHR0ZXh0Q29udGVudDogXCJyZXNlcnZhdGlvbnNcIixcblx0XHRcdH0pLFxuXHRcdF0pLFxuXHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJzY3JvbGwtZG93blwiIH0sIFtcblx0XHRcdGVsRmFjdG9yeShcImFcIiwgeyBocmVmOiBcIiNob3Vyc1wiIH0sIFtcblx0XHRcdFx0ZWxGYWN0b3J5KFwiaVwiLCB7XG5cdFx0XHRcdFx0Y2xhc3NMaXN0OiBcImZhIGZhLWFuZ2xlLWRvd25cIixcblx0XHRcdFx0fSksXG5cdFx0XHRdKSxcblx0XHRdKSxcblx0XSk7XG5cblx0Y29uc3QgbGFudGVybnMgPSBlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwibGFudGVybnNcIiB9KTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRsYW50ZXJucy5jaGlsZHJlbi5wdXNoKFxuXHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImxhbnRlcm5cIiB9LCBbXG5cdFx0XHRcdC4uLltcInRvcFwiLCBcImJvZHlcIiwgXCJib3R0b21cIl0ubWFwKCh0ZXh0KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsRmFjdG9yeShcImRpdlwiLCB7XG5cdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IHRleHQsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XSlcblx0XHQpO1xuXHR9XG5cblx0Y29uc3QgaG91cnNEZXRhaWxzID0gW1xuXHRcdHtcblx0XHRcdHNjaGVkdWxlOiBcIm9wZXJhdGluZyBob3Vyc1wiLFxuXHRcdFx0aG91cnNUZXh0OiB7XG5cdFx0XHRcdFwibW9uZGF5LWZyaWRheVwiOiBcIjRwbS0xMXBtXCIsXG5cdFx0XHRcdHNhdHVyZGF5OiBcIjJwbS0yYW1cIixcblx0XHRcdFx0c3VuZGF5OiBcIjJwbS0xMHBtXCIsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2NoZWR1bGU6IFwiZGlubmVyIGhvdXJzXCIsXG5cdFx0XHRob3Vyc1RleHQ6IHtcblx0XHRcdFx0XCJtb25kYXktdGh1cnNkYXlcIjogXCI1cG0tMTBwbVwiLFxuXHRcdFx0XHRmcmlkYXk6IFwiNXBtLTExcG1cIixcblx0XHRcdFx0c2F0dXJkYXk6IFwiMnBtLTExcG1cIixcblx0XHRcdFx0c3VuZGF5OiBcIjJwbS05cG1cIixcblx0XHRcdH0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzY2hlZHVsZTogXCJoYXBweSBob3VyXCIsXG5cdFx0XHRob3Vyc1RleHQ6IHtcblx0XHRcdFx0XCJtb25kYXktZnJpZGF5XCI6IFwiNHBtLTZwbVwiLFxuXHRcdFx0XHRzYXR1cmRheTogXCIxMHBtLTEyYW1cIixcblx0XHRcdH0sXG5cdFx0fSxcblx0XTtcblxuXHRjb25zdCBob3Vyc0RpdnMgPSBob3Vyc0RldGFpbHMubWFwKChob3Vyc09iamVjdCkgPT4ge1xuXHRcdHJldHVybiBlbEZhY3RvcnkoXG5cdFx0XHRcImRpdlwiLFxuXHRcdFx0e1xuXHRcdFx0XHRjbGFzc0xpc3Q6IGhvdXJzT2JqZWN0LnNjaGVkdWxlLnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKSxcblx0XHRcdH0sXG5cdFx0XHRbXG5cdFx0XHRcdGVsRmFjdG9yeShcImgyXCIsIHsgdGV4dENvbnRlbnQ6IGhvdXJzT2JqZWN0LnNjaGVkdWxlICsgXCI6XCIgfSksXG5cdFx0XHRcdC4uLk9iamVjdC5lbnRyaWVzKGhvdXJzT2JqZWN0LmhvdXJzVGV4dCkubWFwKChlbnRyeSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBlbEZhY3RvcnkoXCJwXCIsIHtcblx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBgJHtlbnRyeVswXX06ICR7ZW50cnlbMV19IGAsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnN0IGhvbWVEaXYgPSBlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiaG9tZSBkeW5hbWljXCIgfSwgW1xuXHRcdGVsRmFjdG9yeShcInNlY3Rpb25cIiwgeyBjbGFzc0xpc3Q6IFwiaGVyb1wiIH0sIFtcblx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJhcnRcIiB9KSxcblx0XHRcdGhlcm9UZXh0LFxuXHRcdFx0bGFudGVybnMsXG5cdFx0XSksXG5cdFx0ZWxGYWN0b3J5KFwic2VjdGlvblwiLCB7IGNsYXNzTGlzdDogXCJob3Vycy1jb250YWluZXJcIiB9LCBbXG5cdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiaG91cnNcIiwgaWQ6IFwiaG91cnNcIiB9LCBob3Vyc0RpdnMpLFxuXHRcdF0pLFxuXHRdKTtcblx0cmV0dXJuIGh0bWxGYWN0b3J5KGhvbWVEaXYpO1xufVxuIiwiaW1wb3J0IHsgZWxGYWN0b3J5LCBodG1sRmFjdG9yeSB9IGZyb20gXCIuL2RvbS1mYWN0b3JpZXMuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWVudSgpIHtcblx0Y29uc3QgZGlubmVyTGluayA9XG5cdFx0XCJodHRwczovL3d3dy5hc3NldHJlc3RhdXJhbnQuY29tL19maWxlcy91Z2QvNTRhNGNkXzNhN2EwYTU1YWU3NDRmY2VhZWM4NTNiYzBiMTljN2IyLnBkZlwiO1xuXHRjb25zdCB3aW5lTGluayA9XG5cdFx0XCJodHRwczovL3d3dy5hc3NldHJlc3RhdXJhbnQuY29tL19maWxlcy91Z2QvNTRhNGNkXzM4MWU1MGRlNjlhYzRiM2RhZTVmODA1NTEzYzMzNGQ2LnBkZlwiO1xuXG5cdHJldHVybiBodG1sRmFjdG9yeShcblx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwibWVudSBkeW5hbWljXCIgfSwgW1xuXHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcIm1lbnUtYXJ0XCIgfSksXG5cdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwibWVudS10ZXh0XCIgfSwgW1xuXHRcdFx0XHQuLi5bXCJkaW5uZXJcIiwgXCJ3aW5lXCJdLm1hcCgodGV4dCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBlbEZhY3RvcnkoXCJhXCIsIHtcblx0XHRcdFx0XHRcdHRleHRDb250ZW50OiB0ZXh0LFxuXHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcIm1lbnUtbGlua1wiLFxuXHRcdFx0XHRcdFx0aHJlZjogdGV4dCA9PT0gXCJkaW5uZXJcIiA/IGRpbm5lckxpbmsgOiB3aW5lTGluayxcblx0XHRcdFx0XHRcdHRhcmdldDogXCJfYmxhbmtcIixcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdGVsRmFjdG9yeShcImgxXCIsIHsgY2xhc3NMaXN0OiBcImJyYW5kXCIsIHRleHRDb250ZW50OiBcIkFFXCIgfSksXG5cdFx0XHRdKSxcblx0XHRdKVxuXHQpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgYnVpbGRNZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IHsgYnVpbGRIb21lIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IHsgYnVpbGRFdmVudHMsIGxpc3RlbkZvckNsaWNrcyB9IGZyb20gXCIuL2V2ZW50LmpzXCI7XG5pbXBvcnQgeyBidWlsZEFib3V0VXMgfSBmcm9tIFwiLi9hYm91dC11cy5qc1wiO1xuaW1wb3J0IHsgYnVpbGRDb25zdGFudHMgfSBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3JlYm9vdC11dGlsLmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvY29uc3RhbnRzLmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvaG9tZS5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL21lbnUuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9ldmVudHMuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9hYm91dC5jc3NcIjtcblxuY29uc3QgYWxsQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLWNvbnRlbnRcIik7XG5hbGxDb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcblsuLi5idWlsZENvbnN0YW50cygpXS5mb3JFYWNoKChzZWN0aW9uKSA9PiBhbGxDb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb24pKTtcblxuY29uc3QgY2hhbmdpbmdDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFuZ2luZy1jb250ZW50XCIpO1xuY2hhbmdpbmdDb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkSG9tZSgpKTtcblxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhci10b2dnbGVyXCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuXHR9KTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1idG5cIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRoYW5kbGVCdWlsZENsaWNrKGUudGFyZ2V0LmlkKTtcblx0fSk7XG59KTtcblxuZnVuY3Rpb24gaGFuZGxlQnVpbGRDbGljayh0YWJDaG9pY2UpIHtcblx0Y2hhbmdpbmdDb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcblx0Y2hhbmdpbmdDb250ZW50LmFwcGVuZENoaWxkKFxuXHRcdHtcblx0XHRcdFwiaG9tZS1idG5cIjogYnVpbGRIb21lKCksXG5cdFx0XHRcImV2ZW50cy1idG5cIjogYnVpbGRFdmVudHMoKSxcblx0XHRcdFwibWVudS1idG5cIjogYnVpbGRNZW51KCksXG5cdFx0XHRcImFib3V0LWJ0blwiOiBidWlsZEFib3V0VXMoKSxcblx0XHR9W3RhYkNob2ljZV1cblx0KTtcblx0c2lkZWJhci5jbGFzc0xpc3QgPSBcInNpZGViYXJcIjtcblx0aWYgKHRhYkNob2ljZSA9PT0gXCJldmVudHMtYnRuXCIpIHtcblx0XHRsaXN0ZW5Gb3JDbGlja3MoKTtcblx0fVxufVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3QtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGhhbmRsZUJ1aWxkQ2xpY2soXCJhYm91dC1idG5cIik7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==