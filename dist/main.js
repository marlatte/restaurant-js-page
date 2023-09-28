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
	justify-content: center;
	align-items: center;
}

.about p {
	display: flex;
	justify-content: center;
	gap: 6px;

	font-size: 25px;
	text-shadow: 1px 1px 2px #661919;
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
`, "",{"version":3,"sources":["webpack://./src/styles/about.css"],"names":[],"mappings":"AAAA;CACC,OAAO;CACP,YAAY;;CAEZ,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,QAAQ;;CAER,eAAe;CACf,gCAAgC;AACjC;;AAEA;CACC,sBAAsB;CACtB,uBAAuB;CACvB,8BAA8B;;CAE9B,uBAAuB;CACvB,YAAY;CACZ,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,WAAW;CACX,YAAY;CACZ,kBAAkB;;CAElB,mBAAmB;CACnB,yBAAyB;AAC1B;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,YAAY;CACZ,WAAW;;CAEX,aAAa;CACb,eAAe;;CAEf;EACC,OAAO;CACR;AACD;;AAEA;CACC;;;;;;EAMC;AACF;;AAEA;CACC;;;;;;EAMC;AACF;;AAEA;CACC,YAAY;CACZ;6KAC4K;CAC5K,sBAAsB;AACvB;;AAEA;CACC,2BAA2B;CAC3B,4BAA4B;CAC5B,2CAA2C;AAC5C;;AAEA;CACC,wBAAwB;CACxB,4BAA4B;CAC5B,2CAA2C;AAC5C;;AAEA;CACC,yBAAyB;CACzB,+CAA+C;AAChD;;AAEA;CACC,YAAY;CACZ,mBAAmB;AACpB","sourcesContent":[".about {\n\tflex: 1;\n\theight: 100%;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.about p {\n\tdisplay: flex;\n\tjustify-content: center;\n\tgap: 6px;\n\n\tfont-size: 25px;\n\ttext-shadow: 1px 1px 2px #661919;\n}\n\n.map-container {\n\t--string-color: silver;\n\t--shadow-color: #661919;\n\t--shadow-color-string: #d01616;\n\n\twidth: min(600px, 100%);\n\tpadding: 3px;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.map-tack {\n\tposition: relative;\n\tbottom: -7px;\n\twidth: 10px;\n\theight: 10px;\n\talign-self: center;\n\n\tborder-radius: 10px;\n\tbackground-color: #0d0d0d;\n}\n\n.map-string {\n\tposition: relative;\n\tbottom: -2px;\n\theight: 50px;\n\tz-index: -1;\n\n\tdisplay: flex;\n\tpadding: 0 15px;\n\n\t& > * {\n\t\tflex: 1;\n\t}\n}\n\n.map-string .left {\n\tbackground-image: linear-gradient(\n\t\tto bottom right,\n\t\ttransparent 0 49%,\n\t\tvar(--string-color) 49% 51%,\n\t\tvar(--shadow-color-string) 51% 52%,\n\t\ttransparent 54% 100%\n\t);\n}\n\n.map-string .right {\n\tbackground-image: linear-gradient(\n\t\tto bottom left,\n\t\ttransparent 0 49%,\n\t\tvar(--string-color) 49% 51%,\n\t\tvar(--shadow-color-string) 51% 52%,\n\t\ttransparent 54% 100%\n\t);\n}\n\n.map-wood {\n\theight: 25px;\n\tbackground-image: radial-gradient(circle at center, #ff7c4026, #00000033),\n\t\turl(https://images.unsplash.com/photo-1625496235025-d783abf061c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80);\n\tbackground-size: cover;\n}\n\n.map-top {\n\tbackground-position: center;\n\tborder-radius: 10px 10px 0 0;\n\tbox-shadow: 8px 3px 5px var(--shadow-color);\n}\n\n.map-bottom {\n\tbackground-position: top;\n\tborder-radius: 0 0 10px 10px;\n\tbox-shadow: 8px 3px 5px var(--shadow-color);\n}\n\n.map-canvas {\n\tbackground-color: #fff6e6;\n\tbox-shadow: 6px 3px 5px 2px var(--shadow-color);\n}\n\niframe {\n\tborder: none;\n\tborder-radius: 10px;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, `/* ---------------     Sidebar     --------------- */

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
	margin-bottom: calc(var(--footer-height) * 1.5);
	flex: 1;

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

		& #contact-btn {
			padding: 5px 10px;
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
`, "",{"version":3,"sources":["webpack://./src/styles/constants.css"],"names":[],"mappings":"AAAA,oDAAoD;;AAEpD;CACC,eAAe;CACf,UAAU;CACV,YAAY;CACZ,UAAU;CACV,eAAe;;CAEf,aAAa;CACb,sBAAsB;CACtB,kBAAkB;;CAElB,gCAAgC;CAChC,eAAe;CACf,+CAA+C;;CAE/C,gBAAgB;;CAEhB;EACC,YAAY;EACZ,aAAa;CACd;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,WAAW;EACX,gBAAgB;;EAEhB,+CAA+C;EAC/C,YAAY;;EAEZ;GACC,WAAW;EACZ;;EAEA;GACC,aAAa;EACd;CACD;AACD;;AAEA;CACC,iBAAiB;;CAEjB,2BAA2B;CAC3B,yCAAyC;AAC1C;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,OAAO;CACP,SAAS;;CAET;EACC,gBAAgB;EAChB,iBAAiB;CAClB;;CAEA;EACC,qBAAqB;CACtB;;CAEA;EACC,mBAAmB;EACnB,uBAAuB;CACxB;AACD;;AAEA;CACC,mBAAmB;CACnB,aAAa;CACb,mBAAmB;CACnB,8BAA8B;;CAE9B,+CAA+C;CAC/C,eAAe;;CAEf;EACC,aAAa;EACb,uBAAuB;CACxB;;CAEA;EACC,aAAa;CACd;;CAEA;EACC,aAAa;CACd;AACD;;AAEA,qDAAqD;;AAErD,iDAAiD;;AAEjD;CACC,+CAA+C;CAC/C,OAAO;;CAEP,aAAa;CACb,sBAAsB;AACvB;;AAEA,kDAAkD;;AAElD,mDAAmD;;AAEnD;CACC,eAAe;CACf,SAAS;CACT,gCAAgC;CAChC,WAAW;CACX,qBAAqB;;CAErB,aAAa;CACb,8BAA8B;CAC9B,QAAQ;;CAER,+CAA+C;CAC/C,gCAAgC;;CAEhC;EACC,OAAO;CACR;;CAEA;EACC,aAAa;CACd;;CAEA;EACC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;;EAER,kBAAkB;EAClB,eAAe;EACf,yBAAyB;CAC1B;;CAEA;EACC,aAAa;EACb,sBAAsB;CACvB;;CAEA;EACC,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;;EAElB;GACC,sBAAsB;GACtB,qBAAqB;EACtB;CACD;;CAEA;EACC,mBAAmB;EACnB,mBAAmB;;EAEnB;GACC,aAAa;EACd;;EAEA;GACC,SAAS;GACT,eAAe;EAChB;;EAEA;GACC,gBAAgB;EACjB;;EAEA;GACC,iBAAiB;EAClB;CACD;AACD;;AAEA;CACC,mBAAmB;CACnB,eAAe;;CAEf;EACC,sCAAsC;EACtC,qCAAqC;CACtC;;CAEA;EACC,eAAe;CAChB;AACD;AACA,oDAAoD","sourcesContent":["/* ---------------     Sidebar     --------------- */\n\n.sidebar {\n\tposition: fixed;\n\tz-index: 1;\n\theight: 100%;\n\twidth: 0px;\n\tpadding: 20px 0;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\toverflow-x: hidden;\n\n\tbackground-color: var(--bg-main);\n\tfont-size: 40px;\n\tbox-shadow: 0px 0px 7px var(--accent-main-dark);\n\n\ttransition: 0.5s;\n\n\t&.open {\n\t\twidth: 300px;\n\t\tpadding: 20px;\n\t}\n\n\t#close-sidebar {\n\t\talign-self: end;\n\t}\n\n\t@media (min-width: 700px) {\n\t\twidth: 100%;\n\t\tposition: static;\n\n\t\tbox-shadow: 0px 0px 5px var(--accent-main-dark);\n\t\tborder: none;\n\n\t\t&.open {\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t#close-sidebar {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n}\n\n.close-btn {\n\t--font-size: 50px;\n\n\tfont-size: var(--font-size);\n\tline-height: calc(var(--font-size) * 0.6);\n}\n\nnav {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 1;\n\tgap: 50px;\n\n\t& button {\n\t\ttext-align: left;\n\t\tmargin-left: 22px;\n\t}\n\n\t& button:hover {\n\t\tcolor: var(--text-h1);\n\t}\n\n\t@media (min-width: 700px) {\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\t}\n}\n\nheader {\n\tpadding-right: 20px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\n\tbox-shadow: 0px 0px 5px var(--accent-main-dark);\n\tfont-size: 24px;\n\n\t#open-sidebar {\n\t\tpadding: 15px;\n\t\tbackground-color: black;\n\t}\n\n\t& .socials {\n\t\tdisplay: flex;\n\t}\n\n\t@media (min-width: 700px) {\n\t\tdisplay: none;\n\t}\n}\n\n/* ---------------     /Sidebar     --------------- */\n\n/* ---------------     Main     --------------- */\n\n#changing-content {\n\tmargin-bottom: calc(var(--footer-height) * 1.5);\n\tflex: 1;\n\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n/* ---------------     /Main     --------------- */\n\n/* ---------------     Footer     --------------- */\n\nfooter {\n\tposition: fixed;\n\tbottom: 0;\n\tmin-height: var(--footer-height);\n\twidth: 100%;\n\tpadding: 6px 20px 2px;\n\n\tdisplay: flex;\n\tflex-direction: column-reverse;\n\tgap: 4px;\n\n\tbox-shadow: 0px 0px 5px var(--accent-main-dark);\n\tbackground-color: var(--bg-main);\n\n\t& > * {\n\t\tflex: 1;\n\t}\n\n\t& .socials {\n\t\tdisplay: none;\n\t}\n\n\t& .author {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tgap: 8px;\n\n\t\ttext-align: center;\n\t\tfont-size: 15px;\n\t\tcolor: var(--text-strong);\n\t}\n\n\t& .contact-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\t& #contact-btn {\n\t\tpadding: 10px;\n\t\tborder: 1px solid currentColor;\n\t\tborder-radius: 5px;\n\n\t\t&:hover {\n\t\t\tbackground-color: #fff;\n\t\t\tcolor: var(--bg-main);\n\t\t}\n\t}\n\n\t@media (min-width: 700px) {\n\t\tflex-direction: row;\n\t\talign-items: center;\n\n\t\t& .socials {\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\t& .author {\n\t\t\tgap: 10px;\n\t\t\tfont-size: 20px;\n\t\t}\n\n\t\t& .contact-container {\n\t\t\talign-items: end;\n\t\t}\n\n\t\t& #contact-btn {\n\t\t\tpadding: 5px 10px;\n\t\t}\n\t}\n}\n\n.fa.fa-github {\n\tcolor: currentColor;\n\tfont-size: 20px;\n\n\t&:hover {\n\t\ttransition: transform 0.4s ease-in-out;\n\t\ttransform: rotate(-360deg) scale(1.3);\n\t}\n\n\t@media (min-width: 700px) {\n\t\tfont-size: 30px;\n\t}\n}\n/* ---------------     /Footer     --------------- */\n"],"sourceRoot":""}]);
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
		text-shadow: 1px 1px 2px #661919;
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
			border-radius: 0;
		}

		& .call-to-action {
			align-items: start;
			padding: 0;
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
`, "",{"version":3,"sources":["webpack://./src/styles/events.css"],"names":[],"mappings":"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","sourcesContent":[".events .content {\n\twidth: 90%;\n\tmargin: auto;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 20px;\n\n\t& .art {\n\t\theight: 160px;\n\t\tbackground-position: bottom;\n\t}\n\n\t& .text {\n\t\tmargin: 20px 0;\n\t\tmax-width: 65ch;\n\t}\n\n\t& h1 {\n\t\tfont-size: 30px;\n\t\ttext-shadow: 1px 1px 2px #661919;\n\t}\n\n\t& h2 {\n\t\tmargin: 30px 0 16px;\n\t}\n\n\t& p {\n\t\tmargin-bottom: 20px;\n\t\tfont-size: 18px;\n\t\tline-height: 1.5;\n\t\tletter-spacing: 1px;\n\t}\n\n\t& p:nth-last-child(2) {\n\t\twidth: min(100%, 440px);\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tjustify-content: space-between;\n\t\tgap: 2px;\n\t}\n\n\t@media (min-width: 700px) {\n\t\t--art-width: min(300px, 30%);\n\n\t\theight: calc(960px - 8vw);\n\t\twidth: min(90%, 1100px);\n\n\t\tflex-direction: row-reverse;\n\t\talign-items: stretch;\n\t\tjustify-content: space-between;\n\n\t\t& .art {\n\t\t\tflex-shrink: 0;\n\t\t\theight: 100%;\n\t\t\tbackground-position: center;\n\t\t\tborder-radius: 0;\n\t\t}\n\n\t\t& .call-to-action {\n\t\t\talign-items: start;\n\t\t\tpadding: 0;\n\t\t}\n\t}\n}\n\n.photos {\n\tbackground-color: black;\n}\n\n.tier {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t& .image-container {\n\t\tflex-grow: 1;\n\t}\n\n\t& img {\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\tobject-fit: cover;\n\t}\n\n\t@media (min-width: 700px) {\n\t\twidth: 100%;\n\t\tflex-direction: row;\n\t}\n}\n\n.events .call-to-action {\n\tpadding: 90px 0;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 24px;\n\n\t& p {\n\t\tfont-size: 20px;\n\t\tmargin: 0;\n\t}\n\n\t& button {\n\t\tpadding: 20px;\n\n\t\tborder: 1px solid white;\n\t\tborder-radius: 5px;\n\n\t\tfont-size: 18px;\n\t\ttext-transform: uppercase;\n\n\t\ttransition: all 0.3s;\n\t}\n\n\t& button:hover {\n\t\tbackground-color: #fff;\n\t\tcolor: var(--bg-main);\n\t}\n}\n\n/* ---------------     Modal     --------------- */\n\n.modal {\n\tposition: fixed;\n\ttop: 0;\n\tz-index: 2;\n\theight: 100vh;\n\twidth: 100vw;\n\n\tdisplay: grid;\n\tplace-content: center;\n\n\tbackground-color: rgba(200, 200, 200, 0.5);\n\tbackdrop-filter: blur(2px);\n}\n\nform {\n\t--form-spacer: 12px;\n\n\tmax-height: 80vh;\n\tpadding: 12px;\n\twidth: min(90vw, 1000px);\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--form-spacer);\n\n\tbackground-color: skyblue;\n\tcolor: #000;\n\tborder-radius: 15px;\n}\n\n.form-header {\n\tmargin: 0;\n\tpadding-left: 2px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.form-content {\n\tpadding: var(--form-spacer);\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: calc(var(--form-spacer) * 2.5);\n\toverflow-y: scroll;\n\n\tborder: 1px solid var(--border-input);\n\tborder-radius: 5px;\n\n\t@media (min-width: 800px) {\n\t\tflex-direction: row;\n\t\tjustify-content: space-between;\n\t\toverflow-y: auto;\n\t}\n}\n\n.form-content h4 {\n\tfont-size: 20px;\n}\n\n.form-contact,\n.form-details,\n.form-extras {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--form-spacer);\n}\n\n.form-row {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: var(--form-spacer);\n}\n\n.form-item {\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: calc(var(--form-spacer) * 0.5);\n}\n\n.form-details .form-row .form-item {\n\twidth: 47%;\n}\n\ninput,\ntextarea {\n\tappearance: none;\n}\n\ninput,\ntextarea,\nselect {\n\tpadding: 6px 10px;\n\n\tfont-size: max(16px, 0.9rem);\n\tbackground-color: var(--bg-input);\n\tborder: 1px solid var(--border-input);\n\tborder-radius: 5px;\n}\n\nfieldset {\n\tpadding: 8px 8px 10px;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: calc(var(--form-spacer) * 0.8);\n\n\tborder: 1px solid var(--border-input);\n}\n\nlegend {\n\tpadding: 5px 8px;\n\tborder: 1px solid var(--border-input);\n}\n\nlabel input[type=\"radio\"] {\n\tdisplay: none;\n}\nlabel input[type=\"radio\"] ~ span {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 6px;\n}\nlabel input[type=\"radio\"] ~ span:before {\n\t--radio-dimensions: 15px;\n\n\theight: var(--radio-dimensions);\n\twidth: var(--radio-dimensions);\n\n\tcontent: \"\";\n\tbackground: var(--bg-input);\n\tmargin-right: 5px;\n\n\tborder: 1px solid var(--border-input);\n\tborder-radius: var(--radio-dimensions);\n\ttransition: all 300ms ease-in-out;\n}\n\nlabel input[type=\"radio\"]:checked ~ span:before {\n\tborder: 5px solid var(--bg-main);\n}\n\ntextarea {\n\tresize: vertical;\n}\n\nform [type=\"submit\"] {\n\talign-self: center;\n\tpadding: 12px;\n\twidth: min(100%, 280px);\n\n\tbackground-color: var(--text-h1);\n\tborder-radius: 200px;\n\n\tfont-size: 1.5rem;\n\ttext-transform: uppercase;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\n\t&:hover {\n\t\tbox-shadow: inset 0 0 10px #916f08;\n\t}\n}\n\n/* ---------------     /Modal     --------------- */\n"],"sourceRoot":""}]);
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
		text-shadow: 1px 1px #0d0d0d;
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
		border-radius: 0 70px;

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
	font-size: 22px;
	font-weight: 500;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 2px;
	text-decoration: underline 1px;
	text-underline-offset: 4px;
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
`, "",{"version":3,"sources":["webpack://./src/styles/home.css"],"names":[],"mappings":"AAAA;CACC,gBAAgB;;CAEhB;EACC,qBAAqB;EACrB,4BAA4B;CAC7B;AACD;;AAEA;CACC,kBAAkB;CAClB,2BAA2B;CAC3B,UAAU;CACV,YAAY;;CAEZ,aAAa;CACb,uBAAuB;;CAEvB;EACC,4BAA4B;EAC5B,uBAAuB;EACvB,YAAY;EACZ,8BAA8B;EAC9B,4BAA4B;CAC7B;AACD;;AAEA;CACC,WAAW;CACX,uBAAuB;;CAEvB,mNAAmN;CACnN,sBAAsB;CACtB,4BAA4B;CAC5B,2BAA2B;;CAE3B;EACC,WAAW;EACX,qBAAqB;;EAErB,6LAA6L;CAC9L;AACD;;AAEA;CACC,kBAAkB;CAClB,aAAa;;CAEb,aAAa;CACb,SAAS;;CAET;EACC,6BAA6B;CAC9B;;CAEA;EACC,gBAAgB;EAChB,qBAAqB;EACrB,SAAS;CACV;AACD;;AAEA;CACC,cAAc;CACd,eAAe;CACf,gBAAgB;CAChB,kBAAkB;CAClB,yBAAyB;CACzB,mBAAmB;CACnB,8BAA8B;CAC9B,0BAA0B;AAC3B;;AAEA;CACC,aAAa;CACb,qBAAqB;CACrB,qBAAqB;;CAErB;EACC,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;EACf,6BAA6B;CAC9B;AACD;;AAEA;CACC;EACC,wBAAwB;CACzB;CACA;EACC,2BAA2B;CAC5B;CACA;EACC,wBAAwB;CACzB;AACD;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,WAAW;;CAEX;EACC,aAAa;CACd;AACD;;AAEA;CACC,kBAAkB;CAClB,mBAAmB;;CAEnB,aAAa;CACb,qBAAqB;CACrB,qBAAqB;;CAErB;;EAEC,kBAAkB;EAClB,wBAAwB;EACxB,0BAA0B;;EAE1B,uBAAuB;CACxB;;CAEA;EACC,YAAY;EACZ,0BAA0B;CAC3B;;CAEA;EACC,SAAS;EACT,0BAA0B;CAC3B;;CAEA;EACC,UAAU;EACV,aAAa;EACb,UAAU;;EAEV,mBAAmB;EACnB,yCAAyC;EACzC,gCAAgC;EAChC;;;;GAIC;CACF;;CAEA;EACC;;;;;IAKE;CACH;;CAEA;EACC,oCAAoC;CACrC;AACD;;AAEA;CACC,aAAa;;CAEb,aAAa;CACb,uBAAuB;;CAEvB,sCAAsC;AACvC;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;;CAET;EACC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;CACT;;CAEA;EACC,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,SAAS;CACV;AACD","sourcesContent":[".home {\n\tmargin-top: 20px;\n\n\t& h2 {\n\t\tcolor: var(--text-h1);\n\t\ttext-shadow: 1px 1px #0d0d0d;\n\t}\n}\n\n.hero {\n\tposition: relative;\n\theight: calc(100svh - 80px);\n\twidth: 90%;\n\tmargin: auto;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\n\t@media (min-width: 700px) {\n\t\t--art-width: min(190px, 20%);\n\t\twidth: min(90%, 1300px);\n\t\tmargin: auto;\n\t\tjustify-content: space-between;\n\t\theight: calc(100svh - 100px);\n\t}\n}\n\n.art {\n\theight: 68%;\n\twidth: var(--art-width);\n\n\tbackground-image: url(https://static.wixstatic.com/media/54a4cd_5059116c59d244d08c3170b49d6e7b0f~mv2.jpg/v1/fill/w_546,h_728,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_5059116c59d244d08c3170b49d6e7b0f~mv2.jpg);\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\n\t@media screen and (min-width: 700px) {\n\t\theight: 80%;\n\t\tborder-radius: 0 70px;\n\n\t\tbackground-image: url(https://static.wixstatic.com/media/54a4cd_ae5e22486dbb49debb9cd8ba1b780b6e~mv2.jpg/v1/fill/w_388,h_1240,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Artwork1_Final_8x2_5.jpg);\n\t}\n}\n\n.hero-text {\n\tposition: absolute;\n\tbottom: 100px;\n\n\tdisplay: grid;\n\tgap: 30px;\n\n\t& h1 {\n\t\t--font-size: min(50vw, 300px);\n\t}\n\n\t@media (min-width: 700px) {\n\t\tposition: static;\n\t\tplace-content: center;\n\t\tgap: 60px;\n\t}\n}\n\n.reservations {\n\tcolor: #ffe5e5;\n\tfont-size: 22px;\n\tfont-weight: 500;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tletter-spacing: 2px;\n\ttext-decoration: underline 1px;\n\ttext-underline-offset: 4px;\n}\n\n.scroll-down {\n\tdisplay: grid;\n\tplace-content: center;\n\tcolor: var(--text-h1);\n\n\t& .fa-angle-down {\n\t\tmargin-top: 10px;\n\t\tline-height: 16px;\n\t\tfont-size: 70px;\n\t\tanimation: bounce 2s infinite;\n\t}\n}\n\n@keyframes bounce {\n\t0% {\n\t\ttransform: translateY(0);\n\t}\n\t50% {\n\t\ttransform: translateY(30px);\n\t}\n\t100% {\n\t\ttransform: translateY(0);\n\t}\n}\n\n.lanterns {\n\tdisplay: none;\n\twidth: var(--art-width);\n\theight: 80%;\n\n\t@media (min-width: 700px) {\n\t\tdisplay: grid;\n\t}\n}\n\n.lantern {\n\t--caps-width: 50px;\n\t--caps-height: 20px;\n\n\tdisplay: grid;\n\talign-content: center;\n\tjustify-items: center;\n\n\t& .top,\n\t& .bottom {\n\t\tposition: relative;\n\t\twidth: var(--caps-width);\n\t\theight: var(--caps-height);\n\n\t\tbackground-color: black;\n\t}\n\n\t& .top {\n\t\tbottom: -5px;\n\t\tborder-radius: 80% 80% 0 0;\n\t}\n\n\t& .bottom {\n\t\ttop: -5px;\n\t\tborder-radius: 0 0 80% 80%;\n\t}\n\n\t& .body {\n\t\tz-index: 1;\n\t\theight: 130px;\n\t\twidth: 80%;\n\n\t\tborder-radius: 85px;\n\t\tborder: 1px solid var(--accent-main-dark);\n\t\tbackground-color: var(--bg-main);\n\t\tbackground: repeating-linear-gradient(\n\t\t\tvar(--bg-lantern),\n\t\t\tvar(--bg-lantern) 19%,\n\t\t\tvar(--accent-main-dark) 20%\n\t\t);\n\t}\n\n\t& .body:hover {\n\t\tbackground: radial-gradient(rgba(245, 205, 84, 0.7), transparent 80%),\n\t\t\trepeating-linear-gradient(\n\t\t\t\tvar(--bg-lantern),\n\t\t\t\tvar(--bg-lantern) 19%,\n\t\t\t\tvar(--accent-main-dark) 20%\n\t\t\t);\n\t}\n\n\t& > * {\n\t\tbox-shadow: 3px 3px 6px -3px #8a0f0f;\n\t}\n}\n\n.hours-container {\n\tpadding: 20px;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\n\tborder-top: 2px solid hsl(0, 95%, 70%);\n}\n\n.hours {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 30px;\n\n\t& > div {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tgap: 8px;\n\t}\n\n\t@media (min-width: 700px) {\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\t\twidth: 650px;\n\t\tflex-wrap: wrap;\n\t\tgap: 70px;\n\t}\n}\n"],"sourceRoot":""}]);
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
	margin-top: 20px;

	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 700px) {
		flex-direction: row;
		margin: 20px;
	}
}

.menu-art {
	height: 444px;
	width: min(100vw, 400px);
	margin: auto;
	z-index: -1;

	background-image: url(https://static.wixstatic.com/media/54a4cd_b8c9537c5fcd4d859fc958942b5a5e87~mv2.jpg/v1/fill/w_952,h_1322,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_b8c9537c5fcd4d859fc958942b5a5e87~mv2.jpg);
	background-size: cover;
	background-repeat: no-repeat;

	@media (min-width: 700px) {
		margin: 0;
		height: calc(100vh - var(--footer-height) * 3.5);
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
`, "",{"version":3,"sources":["webpack://./src/styles/menu.css"],"names":[],"mappings":"AAAA;CACC,gBAAgB;;CAEhB,aAAa;CACb,sBAAsB;CACtB,mBAAmB;;CAEnB;EACC,mBAAmB;EACnB,YAAY;CACb;AACD;;AAEA;CACC,aAAa;CACb,wBAAwB;CACxB,YAAY;CACZ,WAAW;;CAEX,oNAAoN;CACpN,sBAAsB;CACtB,4BAA4B;;CAE5B;EACC,SAAS;EACT,gDAAgD;EAChD,uBAAuB;CACxB;AACD;;AAEA;CACC,oBAAoB;;CAEpB,aAAa;CACb,sBAAsB;CACtB,SAAS;;CAET;EACC,aAAa;EACb,uBAAuB;EACvB,gCAAgC;CACjC;;CAEA;EACC,cAAc;EACd,yBAAyB;EACzB,eAAe;EACf,mBAAmB;CACpB;;CAEA;EACC,2BAA2B;CAC5B;;CAEA;EACC,iBAAiB;CAClB;AACD","sourcesContent":[".menu {\n\tmargin-top: 20px;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\n\t@media (min-width: 700px) {\n\t\tflex-direction: row;\n\t\tmargin: 20px;\n\t}\n}\n\n.menu-art {\n\theight: 444px;\n\twidth: min(100vw, 400px);\n\tmargin: auto;\n\tz-index: -1;\n\n\tbackground-image: url(https://static.wixstatic.com/media/54a4cd_b8c9537c5fcd4d859fc958942b5a5e87~mv2.jpg/v1/fill/w_952,h_1322,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_b8c9537c5fcd4d859fc958942b5a5e87~mv2.jpg);\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\n\t@media (min-width: 700px) {\n\t\tmargin: 0;\n\t\theight: calc(100vh - var(--footer-height) * 3.5);\n\t\twidth: min(600px, 50vw);\n\t}\n}\n\n.menu-text {\n\tmargin: -95px 0 40px;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 15px;\n\n\t& > * {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tbackground-color: var(--bg-main);\n\t}\n\n\t& a {\n\t\tpadding: 8px 0;\n\t\ttext-transform: uppercase;\n\t\tfont-size: 30px;\n\t\tletter-spacing: 3px;\n\t}\n\n\t& a:hover {\n\t\tbox-shadow: 0 0 0 1px white;\n\t}\n\n\t@media (min-width: 700px) {\n\t\tmargin: 0 -61px 0;\n\t}\n}\n"],"sourceRoot":""}]);
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
			(0,_dom_factories__WEBPACK_IMPORTED_MODULE_0__.elFactory)("p", { classList: "text", textContent: "" }, [
				(0,_dom_factories__WEBPACK_IMPORTED_MODULE_0__.elFactory)("a", {
					classList: "underline phone",
					href: "tel:+1-212-517-1987",
					textContent: "212-517-1987",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxtR0FBbUcsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLGNBQWMsYUFBYSxXQUFXLGFBQWEsY0FBYyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsWUFBWSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLE1BQU0sS0FBSyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGNBQWMsYUFBYSxZQUFZLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0s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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU8sd0ZBQXdGLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxZQUFZLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxZQUFZLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFlBQVksY0FBYyxXQUFXLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsYUFBYSxXQUFXLGFBQWEsV0FBVyxZQUFZLGNBQWMsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsY0FBYyxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLFlBQVksTUFBTSxNQUFNLGtEQUFrRCxlQUFlLGlCQUFpQixvQkFBb0IsMkJBQTJCLHdCQUF3QixjQUFjLGNBQWMsb0JBQW9CLGtDQUFrQyxLQUFLLGVBQWUscUJBQXFCLHNCQUFzQixLQUFLLFlBQVksc0JBQXNCLHVDQUF1QyxLQUFLLFlBQVksMEJBQTBCLEtBQUssV0FBVywwQkFBMEIsc0JBQXNCLHVCQUF1QiwwQkFBMEIsS0FBSyw2QkFBNkIsOEJBQThCLG9CQUFvQixzQkFBc0IscUNBQXFDLGVBQWUsS0FBSyxpQ0FBaUMsbUNBQW1DLGtDQUFrQyw4QkFBOEIsb0NBQW9DLDJCQUEyQixxQ0FBcUMsZ0JBQWdCLHVCQUF1QixxQkFBcUIsb0NBQW9DLHlCQUF5QixPQUFPLDJCQUEyQiwyQkFBMkIsbUJBQW1CLE9BQU8sS0FBSyxHQUFHLGFBQWEsNEJBQTRCLEdBQUcsV0FBVyxrQkFBa0IsMkJBQTJCLDBCQUEwQixtQkFBbUIsS0FBSyxhQUFhLG1CQUFtQixrQkFBa0Isd0JBQXdCLEtBQUssaUNBQWlDLGtCQUFrQiwwQkFBMEIsS0FBSyxHQUFHLDZCQUE2QixvQkFBb0Isb0JBQW9CLDJCQUEyQix3QkFBd0IsY0FBYyxXQUFXLHNCQUFzQixnQkFBZ0IsS0FBSyxnQkFBZ0Isb0JBQW9CLGdDQUFnQyx5QkFBeUIsd0JBQXdCLGdDQUFnQyw2QkFBNkIsS0FBSyxzQkFBc0IsNkJBQTZCLDRCQUE0QixLQUFLLEdBQUcsbUVBQW1FLG9CQUFvQixXQUFXLGVBQWUsa0JBQWtCLGlCQUFpQixvQkFBb0IsMEJBQTBCLGlEQUFpRCwrQkFBK0IsR0FBRyxVQUFVLHdCQUF3Qix1QkFBdUIsa0JBQWtCLDZCQUE2QixvQkFBb0IsMkJBQTJCLDRCQUE0QixnQ0FBZ0MsZ0JBQWdCLHdCQUF3QixHQUFHLGtCQUFrQixjQUFjLHNCQUFzQixrQkFBa0IsbUNBQW1DLHdCQUF3QixHQUFHLG1CQUFtQixnQ0FBZ0Msa0JBQWtCLDJCQUEyQix3Q0FBd0MsdUJBQXVCLDRDQUE0Qyx1QkFBdUIsaUNBQWlDLDBCQUEwQixxQ0FBcUMsdUJBQXVCLEtBQUssR0FBRyxzQkFBc0Isb0JBQW9CLEdBQUcsa0RBQWtELGtCQUFrQiwyQkFBMkIsNEJBQTRCLEdBQUcsZUFBZSxrQkFBa0Isb0JBQW9CLDRCQUE0QixHQUFHLGdCQUFnQixZQUFZLGtCQUFrQiwyQkFBMkIsd0NBQXdDLEdBQUcsd0NBQXdDLGVBQWUsR0FBRyxzQkFBc0IscUJBQXFCLEdBQUcsK0JBQStCLHNCQUFzQixtQ0FBbUMsc0NBQXNDLDBDQUEwQyx1QkFBdUIsR0FBRyxjQUFjLDBCQUEwQixvQkFBb0IsMkJBQTJCLHdDQUF3Qyw0Q0FBNEMsR0FBRyxZQUFZLHFCQUFxQiwwQ0FBMEMsR0FBRyxpQ0FBaUMsa0JBQWtCLEdBQUcsc0NBQXNDLGtCQUFrQix3QkFBd0IsYUFBYSxHQUFHLDZDQUE2Qyw2QkFBNkIsc0NBQXNDLG1DQUFtQyxvQkFBb0IsZ0NBQWdDLHNCQUFzQiw0Q0FBNEMsMkNBQTJDLHNDQUFzQyxHQUFHLHVEQUF1RCxxQ0FBcUMsR0FBRyxjQUFjLHFCQUFxQixHQUFHLDRCQUE0Qix1QkFBdUIsa0JBQWtCLDRCQUE0Qix1Q0FBdUMseUJBQXlCLHdCQUF3Qiw4QkFBOEIsc0JBQXNCLHdCQUF3QixlQUFlLHlDQUF5QyxLQUFLLEdBQUcsNkVBQTZFO0FBQzUrTjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFN2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sc0ZBQXNGLGFBQWEsTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsV0FBVyxVQUFVLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxhQUFhLGFBQWEs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QWUsbURBQVM7QUFDeEIsZ0JBQWdCLDBEQUFZO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFLDBEQUFlO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvc3R5bGVzL2Fib3V0LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvc3R5bGVzL2NvbnN0YW50cy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL3N0eWxlcy9ldmVudHMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9zdHlsZXMvaG9tZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL3N0eWxlcy9tZW51LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvc3R5bGVzL3JlYm9vdC11dGlsLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9zdHlsZXMvYWJvdXQuY3NzP2QxMTciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL3N0eWxlcy9jb25zdGFudHMuY3NzPzViNzYiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL3N0eWxlcy9ldmVudHMuY3NzPzgwZTgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL3N0eWxlcy9ob21lLmNzcz80YjUxIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9zdHlsZXMvbWVudS5jc3M/NzAwYSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvc3R5bGVzL3JlYm9vdC11dGlsLmNzcz9iMzk3Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL2Fib3V0LXVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL2RvbS1mYWN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL2V2ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmFib3V0IHtcblx0ZmxleDogMTtcblx0aGVpZ2h0OiAxMDAlO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWJvdXQgcCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRnYXA6IDZweDtcblxuXHRmb250LXNpemU6IDI1cHg7XG5cdHRleHQtc2hhZG93OiAxcHggMXB4IDJweCAjNjYxOTE5O1xufVxuXG4ubWFwLWNvbnRhaW5lciB7XG5cdC0tc3RyaW5nLWNvbG9yOiBzaWx2ZXI7XG5cdC0tc2hhZG93LWNvbG9yOiAjNjYxOTE5O1xuXHQtLXNoYWRvdy1jb2xvci1zdHJpbmc6ICNkMDE2MTY7XG5cblx0d2lkdGg6IG1pbig2MDBweCwgMTAwJSk7XG5cdHBhZGRpbmc6IDNweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm1hcC10YWNrIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRib3R0b206IC03cHg7XG5cdHdpZHRoOiAxMHB4O1xuXHRoZWlnaHQ6IDEwcHg7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcblxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGQwZDBkO1xufVxuXG4ubWFwLXN0cmluZyB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Ym90dG9tOiAtMnB4O1xuXHRoZWlnaHQ6IDUwcHg7XG5cdHotaW5kZXg6IC0xO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdHBhZGRpbmc6IDAgMTVweDtcblxuXHQmID4gKiB7XG5cdFx0ZmxleDogMTtcblx0fVxufVxuXG4ubWFwLXN0cmluZyAubGVmdCB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcblx0XHR0byBib3R0b20gcmlnaHQsXG5cdFx0dHJhbnNwYXJlbnQgMCA0OSUsXG5cdFx0dmFyKC0tc3RyaW5nLWNvbG9yKSA0OSUgNTElLFxuXHRcdHZhcigtLXNoYWRvdy1jb2xvci1zdHJpbmcpIDUxJSA1MiUsXG5cdFx0dHJhbnNwYXJlbnQgNTQlIDEwMCVcblx0KTtcbn1cblxuLm1hcC1zdHJpbmcgLnJpZ2h0IHtcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuXHRcdHRvIGJvdHRvbSBsZWZ0LFxuXHRcdHRyYW5zcGFyZW50IDAgNDklLFxuXHRcdHZhcigtLXN0cmluZy1jb2xvcikgNDklIDUxJSxcblx0XHR2YXIoLS1zaGFkb3ctY29sb3Itc3RyaW5nKSA1MSUgNTIlLFxuXHRcdHRyYW5zcGFyZW50IDU0JSAxMDAlXG5cdCk7XG59XG5cbi5tYXAtd29vZCB7XG5cdGhlaWdodDogMjVweDtcblx0YmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsICNmZjdjNDAyNiwgIzAwMDAwMDMzKSxcblx0XHR1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MjU0OTYyMzUwMjUtZDc4M2FiZjA2MWM4P2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE0ODAmcT04MCk7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5tYXAtdG9wIHtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuXHRib3gtc2hhZG93OiA4cHggM3B4IDVweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xufVxuXG4ubWFwLWJvdHRvbSB7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcblx0Ym9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcblx0Ym94LXNoYWRvdzogOHB4IDNweCA1cHggdmFyKC0tc2hhZG93LWNvbG9yKTtcbn1cblxuLm1hcC1jYW52YXMge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNmU2O1xuXHRib3gtc2hhZG93OiA2cHggM3B4IDVweCAycHggdmFyKC0tc2hhZG93LWNvbG9yKTtcbn1cblxuaWZyYW1lIHtcblx0Ym9yZGVyOiBub25lO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Fib3V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLE9BQU87Q0FDUCxZQUFZOztDQUVaLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsUUFBUTs7Q0FFUixlQUFlO0NBQ2YsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2Qiw4QkFBOEI7O0NBRTlCLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7O0NBRWxCLG1CQUFtQjtDQUNuQix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLFlBQVk7Q0FDWixXQUFXOztDQUVYLGFBQWE7Q0FDYixlQUFlOztDQUVmO0VBQ0MsT0FBTztDQUNSO0FBQ0Q7O0FBRUE7Q0FDQzs7Ozs7O0VBTUM7QUFDRjs7QUFFQTtDQUNDOzs7Ozs7RUFNQztBQUNGOztBQUVBO0NBQ0MsWUFBWTtDQUNaOzZLQUM0SztDQUM1SyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQywyQkFBMkI7Q0FDM0IsNEJBQTRCO0NBQzVCLDJDQUEyQztBQUM1Qzs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4Qiw0QkFBNEI7Q0FDNUIsMkNBQTJDO0FBQzVDOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLCtDQUErQztBQUNoRDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixtQkFBbUI7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFib3V0IHtcXG5cXHRmbGV4OiAxO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFib3V0IHAge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiA2cHg7XFxuXFxuXFx0Zm9udC1zaXplOiAyNXB4O1xcblxcdHRleHQtc2hhZG93OiAxcHggMXB4IDJweCAjNjYxOTE5O1xcbn1cXG5cXG4ubWFwLWNvbnRhaW5lciB7XFxuXFx0LS1zdHJpbmctY29sb3I6IHNpbHZlcjtcXG5cXHQtLXNoYWRvdy1jb2xvcjogIzY2MTkxOTtcXG5cXHQtLXNoYWRvdy1jb2xvci1zdHJpbmc6ICNkMDE2MTY7XFxuXFxuXFx0d2lkdGg6IG1pbig2MDBweCwgMTAwJSk7XFxuXFx0cGFkZGluZzogM3B4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1hcC10YWNrIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym90dG9tOiAtN3B4O1xcblxcdHdpZHRoOiAxMHB4O1xcblxcdGhlaWdodDogMTBweDtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGQwZDBkO1xcbn1cXG5cXG4ubWFwLXN0cmluZyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvdHRvbTogLTJweDtcXG5cXHRoZWlnaHQ6IDUwcHg7XFxuXFx0ei1pbmRleDogLTE7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nOiAwIDE1cHg7XFxuXFxuXFx0JiA+ICoge1xcblxcdFxcdGZsZXg6IDE7XFxuXFx0fVxcbn1cXG5cXG4ubWFwLXN0cmluZyAubGVmdCB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdHRvIGJvdHRvbSByaWdodCxcXG5cXHRcXHR0cmFuc3BhcmVudCAwIDQ5JSxcXG5cXHRcXHR2YXIoLS1zdHJpbmctY29sb3IpIDQ5JSA1MSUsXFxuXFx0XFx0dmFyKC0tc2hhZG93LWNvbG9yLXN0cmluZykgNTElIDUyJSxcXG5cXHRcXHR0cmFuc3BhcmVudCA1NCUgMTAwJVxcblxcdCk7XFxufVxcblxcbi5tYXAtc3RyaW5nIC5yaWdodCB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdHRvIGJvdHRvbSBsZWZ0LFxcblxcdFxcdHRyYW5zcGFyZW50IDAgNDklLFxcblxcdFxcdHZhcigtLXN0cmluZy1jb2xvcikgNDklIDUxJSxcXG5cXHRcXHR2YXIoLS1zaGFkb3ctY29sb3Itc3RyaW5nKSA1MSUgNTIlLFxcblxcdFxcdHRyYW5zcGFyZW50IDU0JSAxMDAlXFxuXFx0KTtcXG59XFxuXFxuLm1hcC13b29kIHtcXG5cXHRoZWlnaHQ6IDI1cHg7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsICNmZjdjNDAyNiwgIzAwMDAwMDMzKSxcXG5cXHRcXHR1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MjU0OTYyMzUwMjUtZDc4M2FiZjA2MWM4P2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE0ODAmcT04MCk7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLm1hcC10b3Age1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcblxcdGJveC1zaGFkb3c6IDhweCAzcHggNXB4IHZhcigtLXNoYWRvdy1jb2xvcik7XFxufVxcblxcbi5tYXAtYm90dG9tIHtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XFxuXFx0Ym9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXG5cXHRib3gtc2hhZG93OiA4cHggM3B4IDVweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xcbn1cXG5cXG4ubWFwLWNhbnZhcyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjZlNjtcXG5cXHRib3gtc2hhZG93OiA2cHggM3B4IDVweCAycHggdmFyKC0tc2hhZG93LWNvbG9yKTtcXG59XFxuXFxuaWZyYW1lIHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiAtLS0tLS0tLS0tLS0tLS0gICAgIFNpZGViYXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uc2lkZWJhciB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0ei1pbmRleDogMTtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMHB4O1xuXHRwYWRkaW5nOiAyMHB4IDA7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0b3ZlcmZsb3cteDogaGlkZGVuO1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLW1haW4pO1xuXHRmb250LXNpemU6IDQwcHg7XG5cdGJveC1zaGFkb3c6IDBweCAwcHggN3B4IHZhcigtLWFjY2VudC1tYWluLWRhcmspO1xuXG5cdHRyYW5zaXRpb246IDAuNXM7XG5cblx0Ji5vcGVuIHtcblx0XHR3aWR0aDogMzAwcHg7XG5cdFx0cGFkZGluZzogMjBweDtcblx0fVxuXG5cdCNjbG9zZS1zaWRlYmFyIHtcblx0XHRhbGlnbi1zZWxmOiBlbmQ7XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRwb3NpdGlvbjogc3RhdGljO1xuXG5cdFx0Ym94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tYWNjZW50LW1haW4tZGFyayk7XG5cdFx0Ym9yZGVyOiBub25lO1xuXG5cdFx0Ji5vcGVuIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdH1cblxuXHRcdCNjbG9zZS1zaWRlYmFyIHtcblx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0fVxuXHR9XG59XG5cbi5jbG9zZS1idG4ge1xuXHQtLWZvbnQtc2l6ZTogNTBweDtcblxuXHRmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG5cdGxpbmUtaGVpZ2h0OiBjYWxjKHZhcigtLWZvbnQtc2l6ZSkgKiAwLjYpO1xufVxuXG5uYXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4OiAxO1xuXHRnYXA6IDUwcHg7XG5cblx0JiBidXR0b24ge1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0bWFyZ2luLWxlZnQ6IDIycHg7XG5cdH1cblxuXHQmIGJ1dHRvbjpob3ZlciB7XG5cdFx0Y29sb3I6IHZhcigtLXRleHQtaDEpO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0fVxufVxuXG5oZWFkZXIge1xuXHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cblx0Ym94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tYWNjZW50LW1haW4tZGFyayk7XG5cdGZvbnQtc2l6ZTogMjRweDtcblxuXHQjb3Blbi1zaWRlYmFyIHtcblx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXHR9XG5cblx0JiAuc29jaWFscyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvU2lkZWJhciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbiNjaGFuZ2luZy1jb250ZW50IHtcblx0bWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1mb290ZXItaGVpZ2h0KSAqIDEuNSk7XG5cdGZsZXg6IDE7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuZm9vdGVyIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRib3R0b206IDA7XG5cdG1pbi1oZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZzogNnB4IDIwcHggMnB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblx0Z2FwOiA0cHg7XG5cblx0Ym94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tYWNjZW50LW1haW4tZGFyayk7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLW1haW4pO1xuXG5cdCYgPiAqIHtcblx0XHRmbGV4OiAxO1xuXHR9XG5cblx0JiAuc29jaWFscyB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXG5cdCYgLmF1dGhvciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGdhcDogOHB4O1xuXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1zdHJvbmcpO1xuXHR9XG5cblx0JiAuY29udGFjdC1jb250YWluZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0fVxuXG5cdCYgI2NvbnRhY3QtYnRuIHtcblx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cblx0XHQmOmhvdmVyIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0XHRjb2xvcjogdmFyKC0tYmctbWFpbik7XG5cdFx0fVxuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdFx0JiAuc29jaWFscyB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdH1cblxuXHRcdCYgLmF1dGhvciB7XG5cdFx0XHRnYXA6IDEwcHg7XG5cdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0fVxuXG5cdFx0JiAuY29udGFjdC1jb250YWluZXIge1xuXHRcdFx0YWxpZ24taXRlbXM6IGVuZDtcblx0XHR9XG5cblx0XHQmICNjb250YWN0LWJ0biB7XG5cdFx0XHRwYWRkaW5nOiA1cHggMTBweDtcblx0XHR9XG5cdH1cbn1cblxuLmZhLmZhLWdpdGh1YiB7XG5cdGNvbG9yOiBjdXJyZW50Q29sb3I7XG5cdGZvbnQtc2l6ZTogMjBweDtcblxuXHQmOmhvdmVyIHtcblx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLWluLW91dDtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKSBzY2FsZSgxLjMpO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0Zm9udC1zaXplOiAzMHB4O1xuXHR9XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Gb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbnN0YW50cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsb0RBQW9EOztBQUVwRDtDQUNDLGVBQWU7Q0FDZixVQUFVO0NBQ1YsWUFBWTtDQUNaLFVBQVU7Q0FDVixlQUFlOztDQUVmLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsa0JBQWtCOztDQUVsQixnQ0FBZ0M7Q0FDaEMsZUFBZTtDQUNmLCtDQUErQzs7Q0FFL0MsZ0JBQWdCOztDQUVoQjtFQUNDLFlBQVk7RUFDWixhQUFhO0NBQ2Q7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsV0FBVztFQUNYLGdCQUFnQjs7RUFFaEIsK0NBQStDO0VBQy9DLFlBQVk7O0VBRVo7R0FDQyxXQUFXO0VBQ1o7O0VBRUE7R0FDQyxhQUFhO0VBQ2Q7Q0FDRDtBQUNEOztBQUVBO0NBQ0MsaUJBQWlCOztDQUVqQiwyQkFBMkI7Q0FDM0IseUNBQXlDO0FBQzFDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixPQUFPO0NBQ1AsU0FBUzs7Q0FFVDtFQUNDLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQyxxQkFBcUI7Q0FDdEI7O0NBRUE7RUFDQyxtQkFBbUI7RUFDbkIsdUJBQXVCO0NBQ3hCO0FBQ0Q7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiw4QkFBOEI7O0NBRTlCLCtDQUErQztDQUMvQyxlQUFlOztDQUVmO0VBQ0MsYUFBYTtFQUNiLHVCQUF1QjtDQUN4Qjs7Q0FFQTtFQUNDLGFBQWE7Q0FDZDs7Q0FFQTtFQUNDLGFBQWE7Q0FDZDtBQUNEOztBQUVBLHFEQUFxRDs7QUFFckQsaURBQWlEOztBQUVqRDtDQUNDLCtDQUErQztDQUMvQyxPQUFPOztDQUVQLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUEsa0RBQWtEOztBQUVsRCxtREFBbUQ7O0FBRW5EO0NBQ0MsZUFBZTtDQUNmLFNBQVM7Q0FDVCxnQ0FBZ0M7Q0FDaEMsV0FBVztDQUNYLHFCQUFxQjs7Q0FFckIsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixRQUFROztDQUVSLCtDQUErQztDQUMvQyxnQ0FBZ0M7O0NBRWhDO0VBQ0MsT0FBTztDQUNSOztDQUVBO0VBQ0MsYUFBYTtDQUNkOztDQUVBO0VBQ0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsUUFBUTs7RUFFUixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtDQUMxQjs7Q0FFQTtFQUNDLGFBQWE7RUFDYixzQkFBc0I7Q0FDdkI7O0NBRUE7RUFDQyxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjs7RUFFbEI7R0FDQyxzQkFBc0I7R0FDdEIscUJBQXFCO0VBQ3RCO0NBQ0Q7O0NBRUE7RUFDQyxtQkFBbUI7RUFDbkIsbUJBQW1COztFQUVuQjtHQUNDLGFBQWE7RUFDZDs7RUFFQTtHQUNDLFNBQVM7R0FDVCxlQUFlO0VBQ2hCOztFQUVBO0dBQ0MsZ0JBQWdCO0VBQ2pCOztFQUVBO0dBQ0MsaUJBQWlCO0VBQ2xCO0NBQ0Q7QUFDRDs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixlQUFlOztDQUVmO0VBQ0Msc0NBQXNDO0VBQ3RDLHFDQUFxQztDQUN0Qzs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7QUFDRDtBQUNBLG9EQUFvRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAtLS0tLS0tLS0tLS0tLS0gICAgIFNpZGViYXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5zaWRlYmFyIHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0ei1pbmRleDogMTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDBweDtcXG5cXHRwYWRkaW5nOiAyMHB4IDA7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1tYWluKTtcXG5cXHRmb250LXNpemU6IDQwcHg7XFxuXFx0Ym94LXNoYWRvdzogMHB4IDBweCA3cHggdmFyKC0tYWNjZW50LW1haW4tZGFyayk7XFxuXFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG5cXG5cXHQmLm9wZW4ge1xcblxcdFxcdHdpZHRoOiAzMDBweDtcXG5cXHRcXHRwYWRkaW5nOiAyMHB4O1xcblxcdH1cXG5cXG5cXHQjY2xvc2Utc2lkZWJhciB7XFxuXFx0XFx0YWxpZ24tc2VsZjogZW5kO1xcblxcdH1cXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRwb3NpdGlvbjogc3RhdGljO1xcblxcblxcdFxcdGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLWFjY2VudC1tYWluLWRhcmspO1xcblxcdFxcdGJvcmRlcjogbm9uZTtcXG5cXG5cXHRcXHQmLm9wZW4ge1xcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQjY2xvc2Utc2lkZWJhciB7XFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG5cXHQtLWZvbnQtc2l6ZTogNTBweDtcXG5cXG5cXHRmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuXFx0bGluZS1oZWlnaHQ6IGNhbGModmFyKC0tZm9udC1zaXplKSAqIDAuNik7XFxufVxcblxcbm5hdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGZsZXg6IDE7XFxuXFx0Z2FwOiA1MHB4O1xcblxcblxcdCYgYnV0dG9uIHtcXG5cXHRcXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAyMnB4O1xcblxcdH1cXG5cXG5cXHQmIGJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0Y29sb3I6IHZhcigtLXRleHQtaDEpO1xcblxcdH1cXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdH1cXG59XFxuXFxuaGVhZGVyIHtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuXFx0Ym94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tYWNjZW50LW1haW4tZGFyayk7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcblxcdCNvcGVuLXNpZGViYXIge1xcblxcdFxcdHBhZGRpbmc6IDE1cHg7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFx0fVxcblxcblxcdCYgLnNvY2lhbHMge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0fVxcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9TaWRlYmFyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIE1haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNjaGFuZ2luZy1jb250ZW50IHtcXG5cXHRtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWZvb3Rlci1oZWlnaHQpICogMS41KTtcXG5cXHRmbGV4OiAxO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBGb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbmZvb3RlciB7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdGJvdHRvbTogMDtcXG5cXHRtaW4taGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwYWRkaW5nOiA2cHggMjBweCAycHg7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuXFx0Z2FwOiA0cHg7XFxuXFxuXFx0Ym94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tYWNjZW50LW1haW4tZGFyayk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbWFpbik7XFxuXFxuXFx0JiA+ICoge1xcblxcdFxcdGZsZXg6IDE7XFxuXFx0fVxcblxcblxcdCYgLnNvY2lhbHMge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcblxcdCYgLmF1dGhvciB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGdhcDogOHB4O1xcblxcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRcXHRmb250LXNpemU6IDE1cHg7XFxuXFx0XFx0Y29sb3I6IHZhcigtLXRleHQtc3Ryb25nKTtcXG5cXHR9XFxuXFxuXFx0JiAuY29udGFjdC1jb250YWluZXIge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR9XFxuXFxuXFx0JiAjY29udGFjdC1idG4ge1xcblxcdFxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0XFx0Ym9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG5cXHRcXHQmOmhvdmVyIHtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcdFxcdFxcdGNvbG9yOiB2YXIoLS1iZy1tYWluKTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHRcXHQmIC5zb2NpYWxzIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmIC5hdXRob3Ige1xcblxcdFxcdFxcdGdhcDogMTBweDtcXG5cXHRcXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0XFx0fVxcblxcblxcdFxcdCYgLmNvbnRhY3QtY29udGFpbmVyIHtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogZW5kO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmICNjb250YWN0LWJ0biB7XFxuXFx0XFx0XFx0cGFkZGluZzogNXB4IDEwcHg7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuLmZhLmZhLWdpdGh1YiB7XFxuXFx0Y29sb3I6IGN1cnJlbnRDb2xvcjtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFxuXFx0Jjpob3ZlciB7XFxuXFx0XFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZS1pbi1vdXQ7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZykgc2NhbGUoMS4zKTtcXG5cXHR9XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0Zm9udC1zaXplOiAzMHB4O1xcblxcdH1cXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5ldmVudHMgLmNvbnRlbnQge1xuXHR3aWR0aDogOTAlO1xuXHRtYXJnaW46IGF1dG87XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAyMHB4O1xuXG5cdCYgLmFydCB7XG5cdFx0aGVpZ2h0OiAxNjBweDtcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG5cdH1cblxuXHQmIC50ZXh0IHtcblx0XHRtYXJnaW46IDIwcHggMDtcblx0XHRtYXgtd2lkdGg6IDY1Y2g7XG5cdH1cblxuXHQmIGgxIHtcblx0XHRmb250LXNpemU6IDMwcHg7XG5cdFx0dGV4dC1zaGFkb3c6IDFweCAxcHggMnB4ICM2NjE5MTk7XG5cdH1cblxuXHQmIGgyIHtcblx0XHRtYXJnaW46IDMwcHggMCAxNnB4O1xuXHR9XG5cblx0JiBwIHtcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRsaW5lLWhlaWdodDogMS41O1xuXHRcdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdH1cblxuXHQmIHA6bnRoLWxhc3QtY2hpbGQoMikge1xuXHRcdHdpZHRoOiBtaW4oMTAwJSwgNDQwcHgpO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRnYXA6IDJweDtcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdC0tYXJ0LXdpZHRoOiBtaW4oMzAwcHgsIDMwJSk7XG5cblx0XHRoZWlnaHQ6IGNhbGMoOTYwcHggLSA4dncpO1xuXHRcdHdpZHRoOiBtaW4oOTAlLCAxMTAwcHgpO1xuXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuXHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuXHRcdCYgLmFydCB7XG5cdFx0XHRmbGV4LXNocmluazogMDtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDA7XG5cdFx0fVxuXG5cdFx0JiAuY2FsbC10by1hY3Rpb24ge1xuXHRcdFx0YWxpZ24taXRlbXM6IHN0YXJ0O1xuXHRcdFx0cGFkZGluZzogMDtcblx0XHR9XG5cdH1cbn1cblxuLnBob3RvcyB7XG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4udGllciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cblx0JiAuaW1hZ2UtY29udGFpbmVyIHtcblx0XHRmbGV4LWdyb3c6IDE7XG5cdH1cblxuXHQmIGltZyB7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0fVxufVxuXG4uZXZlbnRzIC5jYWxsLXRvLWFjdGlvbiB7XG5cdHBhZGRpbmc6IDkwcHggMDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDI0cHg7XG5cblx0JiBwIHtcblx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0bWFyZ2luOiAwO1xuXHR9XG5cblx0JiBidXR0b24ge1xuXHRcdHBhZGRpbmc6IDIwcHg7XG5cblx0XHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cblx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuXHRcdHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXHR9XG5cblx0JiBidXR0b246aG92ZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0Y29sb3I6IHZhcigtLWJnLW1haW4pO1xuXHR9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTW9kYWwgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ubW9kYWwge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHRvcDogMDtcblx0ei1pbmRleDogMjtcblx0aGVpZ2h0OiAxMDB2aDtcblx0d2lkdGg6IDEwMHZ3O1xuXG5cdGRpc3BsYXk6IGdyaWQ7XG5cdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNSk7XG5cdGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xufVxuXG5mb3JtIHtcblx0LS1mb3JtLXNwYWNlcjogMTJweDtcblxuXHRtYXgtaGVpZ2h0OiA4MHZoO1xuXHRwYWRkaW5nOiAxMnB4O1xuXHR3aWR0aDogbWluKDkwdncsIDEwMDBweCk7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiB2YXIoLS1mb3JtLXNwYWNlcik7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcblx0Y29sb3I6ICMwMDA7XG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5mb3JtLWhlYWRlciB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZy1sZWZ0OiAycHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcm0tY29udGVudCB7XG5cdHBhZGRpbmc6IHZhcigtLWZvcm0tc3BhY2VyKTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiBjYWxjKHZhcigtLWZvcm0tc3BhY2VyKSAqIDIuNSk7XG5cdG92ZXJmbG93LXk6IHNjcm9sbDtcblxuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItaW5wdXQpO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0b3ZlcmZsb3cteTogYXV0bztcblx0fVxufVxuXG4uZm9ybS1jb250ZW50IGg0IHtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG4uZm9ybS1jb250YWN0LFxuLmZvcm0tZGV0YWlscyxcbi5mb3JtLWV4dHJhcyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogdmFyKC0tZm9ybS1zcGFjZXIpO1xufVxuXG4uZm9ybS1yb3cge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGdhcDogdmFyKC0tZm9ybS1zcGFjZXIpO1xufVxuXG4uZm9ybS1pdGVtIHtcblx0ZmxleDogMTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiBjYWxjKHZhcigtLWZvcm0tc3BhY2VyKSAqIDAuNSk7XG59XG5cbi5mb3JtLWRldGFpbHMgLmZvcm0tcm93IC5mb3JtLWl0ZW0ge1xuXHR3aWR0aDogNDclO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcblx0YXBwZWFyYW5jZTogbm9uZTtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG5cdHBhZGRpbmc6IDZweCAxMHB4O1xuXG5cdGZvbnQtc2l6ZTogbWF4KDE2cHgsIDAuOXJlbSk7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWlucHV0KTtcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWlucHV0KTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5maWVsZHNldCB7XG5cdHBhZGRpbmc6IDhweCA4cHggMTBweDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IGNhbGModmFyKC0tZm9ybS1zcGFjZXIpICogMC44KTtcblxuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItaW5wdXQpO1xufVxuXG5sZWdlbmQge1xuXHRwYWRkaW5nOiA1cHggOHB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItaW5wdXQpO1xufVxuXG5sYWJlbCBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuXHRkaXNwbGF5OiBub25lO1xufVxubGFiZWwgaW5wdXRbdHlwZT1cInJhZGlvXCJdIH4gc3BhbiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogNnB4O1xufVxubGFiZWwgaW5wdXRbdHlwZT1cInJhZGlvXCJdIH4gc3BhbjpiZWZvcmUge1xuXHQtLXJhZGlvLWRpbWVuc2lvbnM6IDE1cHg7XG5cblx0aGVpZ2h0OiB2YXIoLS1yYWRpby1kaW1lbnNpb25zKTtcblx0d2lkdGg6IHZhcigtLXJhZGlvLWRpbWVuc2lvbnMpO1xuXG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGJhY2tncm91bmQ6IHZhcigtLWJnLWlucHV0KTtcblx0bWFyZ2luLXJpZ2h0OiA1cHg7XG5cblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWlucHV0KTtcblx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcmFkaW8tZGltZW5zaW9ucyk7XG5cdHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcbn1cblxubGFiZWwgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgfiBzcGFuOmJlZm9yZSB7XG5cdGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJnLW1haW4pO1xufVxuXG50ZXh0YXJlYSB7XG5cdHJlc2l6ZTogdmVydGljYWw7XG59XG5cbmZvcm0gW3R5cGU9XCJzdWJtaXRcIl0ge1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDEycHg7XG5cdHdpZHRoOiBtaW4oMTAwJSwgMjgwcHgpO1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtaDEpO1xuXHRib3JkZXItcmFkaXVzOiAyMDBweDtcblxuXHRmb250LXNpemU6IDEuNXJlbTtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cblx0Jjpob3ZlciB7XG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzkxNmYwODtcblx0fVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Nb2RhbCAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZXZlbnRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLFVBQVU7Q0FDVixZQUFZOztDQUVaLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLFNBQVM7O0NBRVQ7RUFDQyxhQUFhO0VBQ2IsMkJBQTJCO0NBQzVCOztDQUVBO0VBQ0MsY0FBYztFQUNkLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0VBQ2YsZ0NBQWdDO0NBQ2pDOztDQUVBO0VBQ0MsbUJBQW1CO0NBQ3BCOztDQUVBO0VBQ0MsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0NBQ3BCOztDQUVBO0VBQ0MsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLFFBQVE7Q0FDVDs7Q0FFQTtFQUNDLDRCQUE0Qjs7RUFFNUIseUJBQXlCO0VBQ3pCLHVCQUF1Qjs7RUFFdkIsMkJBQTJCO0VB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XCJzb3VyY2VzQ29udGVudFwiOltcIi5ldmVudHMgLmNvbnRlbnQge1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMjBweDtcXG5cXG5cXHQmIC5hcnQge1xcblxcdFxcdGhlaWdodDogMTYwcHg7XFxuXFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcblxcdH1cXG5cXG5cXHQmIC50ZXh0IHtcXG5cXHRcXHRtYXJnaW46IDIwcHggMDtcXG5cXHRcXHRtYXgtd2lkdGg6IDY1Y2g7XFxuXFx0fVxcblxcblxcdCYgaDEge1xcblxcdFxcdGZvbnQtc2l6ZTogMzBweDtcXG5cXHRcXHR0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggIzY2MTkxOTtcXG5cXHR9XFxuXFxuXFx0JiBoMiB7XFxuXFx0XFx0bWFyZ2luOiAzMHB4IDAgMTZweDtcXG5cXHR9XFxuXFxuXFx0JiBwIHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRcXHRsaW5lLWhlaWdodDogMS41O1xcblxcdFxcdGxldHRlci1zcGFjaW5nOiAxcHg7XFxuXFx0fVxcblxcblxcdCYgcDpudGgtbGFzdC1jaGlsZCgyKSB7XFxuXFx0XFx0d2lkdGg6IG1pbigxMDAlLCA0NDBweCk7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdFxcdGdhcDogMnB4O1xcblxcdH1cXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHQtLWFydC13aWR0aDogbWluKDMwMHB4LCAzMCUpO1xcblxcblxcdFxcdGhlaWdodDogY2FsYyg5NjBweCAtIDh2dyk7XFxuXFx0XFx0d2lkdGg6IG1pbig5MCUsIDExMDBweCk7XFxuXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG5cXHRcXHQmIC5hcnQge1xcblxcdFxcdFxcdGZsZXgtc2hyaW5rOiAwO1xcblxcdFxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0JiAuY2FsbC10by1hY3Rpb24ge1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBzdGFydDtcXG5cXHRcXHRcXHRwYWRkaW5nOiAwO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbi5waG90b3Mge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGllciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcblxcdCYgLmltYWdlLWNvbnRhaW5lciB7XFxuXFx0XFx0ZmxleC1ncm93OiAxO1xcblxcdH1cXG5cXG5cXHQmIGltZyB7XFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdG9iamVjdC1maXQ6IGNvdmVyO1xcblxcdH1cXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdH1cXG59XFxuXFxuLmV2ZW50cyAuY2FsbC10by1hY3Rpb24ge1xcblxcdHBhZGRpbmc6IDkwcHggMDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDI0cHg7XFxuXFxuXFx0JiBwIHtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0XFx0bWFyZ2luOiAwO1xcblxcdH1cXG5cXG5cXHQmIGJ1dHRvbiB7XFxuXFx0XFx0cGFkZGluZzogMjBweDtcXG5cXG5cXHRcXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdFxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFxuXFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuXFx0fVxcblxcblxcdCYgYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcdFxcdGNvbG9yOiB2YXIoLS1iZy1tYWluKTtcXG5cXHR9XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTW9kYWwgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5tb2RhbCB7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMDtcXG5cXHR6LWluZGV4OiAyO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0cGxhY2UtY29udGVudDogY2VudGVyO1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC41KTtcXG5cXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG59XFxuXFxuZm9ybSB7XFxuXFx0LS1mb3JtLXNwYWNlcjogMTJweDtcXG5cXG5cXHRtYXgtaGVpZ2h0OiA4MHZoO1xcblxcdHBhZGRpbmc6IDEycHg7XFxuXFx0d2lkdGg6IG1pbig5MHZ3LCAxMDAwcHgpO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IHZhcigtLWZvcm0tc3BhY2VyKTtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcblxcdGNvbG9yOiAjMDAwO1xcblxcdGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5mb3JtLWhlYWRlciB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmctbGVmdDogMnB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWNvbnRlbnQge1xcblxcdHBhZGRpbmc6IHZhcigtLWZvcm0tc3BhY2VyKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiBjYWxjKHZhcigtLWZvcm0tc3BhY2VyKSAqIDIuNSk7XFxuXFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1pbnB1dCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdFxcdG92ZXJmbG93LXk6IGF1dG87XFxuXFx0fVxcbn1cXG5cXG4uZm9ybS1jb250ZW50IGg0IHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5mb3JtLWNvbnRhY3QsXFxuLmZvcm0tZGV0YWlscyxcXG4uZm9ybS1leHRyYXMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IHZhcigtLWZvcm0tc3BhY2VyKTtcXG59XFxuXFxuLmZvcm0tcm93IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IHZhcigtLWZvcm0tc3BhY2VyKTtcXG59XFxuXFxuLmZvcm0taXRlbSB7XFxuXFx0ZmxleDogMTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiBjYWxjKHZhcigtLWZvcm0tc3BhY2VyKSAqIDAuNSk7XFxufVxcblxcbi5mb3JtLWRldGFpbHMgLmZvcm0tcm93IC5mb3JtLWl0ZW0ge1xcblxcdHdpZHRoOiA0NyU7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcblxcdHBhZGRpbmc6IDZweCAxMHB4O1xcblxcblxcdGZvbnQtc2l6ZTogbWF4KDE2cHgsIDAuOXJlbSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctaW5wdXQpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1pbnB1dCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5maWVsZHNldCB7XFxuXFx0cGFkZGluZzogOHB4IDhweCAxMHB4O1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IGNhbGModmFyKC0tZm9ybS1zcGFjZXIpICogMC44KTtcXG5cXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItaW5wdXQpO1xcbn1cXG5cXG5sZWdlbmQge1xcblxcdHBhZGRpbmc6IDVweCA4cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWlucHV0KTtcXG59XFxuXFxubGFiZWwgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxubGFiZWwgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB+IHNwYW4ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDZweDtcXG59XFxubGFiZWwgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB+IHNwYW46YmVmb3JlIHtcXG5cXHQtLXJhZGlvLWRpbWVuc2lvbnM6IDE1cHg7XFxuXFxuXFx0aGVpZ2h0OiB2YXIoLS1yYWRpby1kaW1lbnNpb25zKTtcXG5cXHR3aWR0aDogdmFyKC0tcmFkaW8tZGltZW5zaW9ucyk7XFxuXFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tYmctaW5wdXQpO1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcblxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1pbnB1dCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcmFkaW8tZGltZW5zaW9ucyk7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5sYWJlbCBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQgfiBzcGFuOmJlZm9yZSB7XFxuXFx0Ym9yZGVyOiA1cHggc29saWQgdmFyKC0tYmctbWFpbik7XFxufVxcblxcbnRleHRhcmVhIHtcXG5cXHRyZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG5mb3JtIFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdHBhZGRpbmc6IDEycHg7XFxuXFx0d2lkdGg6IG1pbigxMDAlLCAyODBweCk7XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1oMSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjAwcHg7XFxuXFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRsZXR0ZXItc3BhY2luZzogMXB4O1xcblxcblxcdCY6aG92ZXIge1xcblxcdFxcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICM5MTZmMDg7XFxuXFx0fVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Nb2RhbCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaG9tZSB7XG5cdG1hcmdpbi10b3A6IDIwcHg7XG5cblx0JiBoMiB7XG5cdFx0Y29sb3I6IHZhcigtLXRleHQtaDEpO1xuXHRcdHRleHQtc2hhZG93OiAxcHggMXB4ICMwZDBkMGQ7XG5cdH1cbn1cblxuLmhlcm8ge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGhlaWdodDogY2FsYygxMDBzdmggLSA4MHB4KTtcblx0d2lkdGg6IDkwJTtcblx0bWFyZ2luOiBhdXRvO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdC0tYXJ0LXdpZHRoOiBtaW4oMTkwcHgsIDIwJSk7XG5cdFx0d2lkdGg6IG1pbig5MCUsIDEzMDBweCk7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRoZWlnaHQ6IGNhbGMoMTAwc3ZoIC0gMTAwcHgpO1xuXHR9XG59XG5cbi5hcnQge1xuXHRoZWlnaHQ6IDY4JTtcblx0d2lkdGg6IHZhcigtLWFydC13aWR0aCk7XG5cblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkXzUwNTkxMTZjNTlkMjQ0ZDA4YzMxNzBiNDlkNmU3YjBmfm12Mi5qcGcvdjEvZmlsbC93XzU0NixoXzcyOCxhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLGVuY19hdXRvLzU0YTRjZF81MDU5MTE2YzU5ZDI0NGQwOGMzMTcwYjQ5ZDZlN2IwZn5tdjIuanBnKTtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0aGVpZ2h0OiA4MCU7XG5cdFx0Ym9yZGVyLXJhZGl1czogMCA3MHB4O1xuXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkX2FlNWUyMjQ4NmRiYjQ5ZGViYjljZDhiYTFiNzgwYjZlfm12Mi5qcGcvdjEvZmlsbC93XzM4OCxoXzEyNDAsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMSxlbmNfYXV0by9BcnR3b3JrMV9GaW5hbF84eDJfNS5qcGcpO1xuXHR9XG59XG5cbi5oZXJvLXRleHQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMTAwcHg7XG5cblx0ZGlzcGxheTogZ3JpZDtcblx0Z2FwOiAzMHB4O1xuXG5cdCYgaDEge1xuXHRcdC0tZm9udC1zaXplOiBtaW4oNTB2dywgMzAwcHgpO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0cG9zaXRpb246IHN0YXRpYztcblx0XHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XG5cdFx0Z2FwOiA2MHB4O1xuXHR9XG59XG5cbi5yZXNlcnZhdGlvbnMge1xuXHRjb2xvcjogI2ZmZTVlNTtcblx0Zm9udC1zaXplOiAyMnB4O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGxldHRlci1zcGFjaW5nOiAycHg7XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDFweDtcblx0dGV4dC11bmRlcmxpbmUtb2Zmc2V0OiA0cHg7XG59XG5cbi5zY3JvbGwtZG93biB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcblx0Y29sb3I6IHZhcigtLXRleHQtaDEpO1xuXG5cdCYgLmZhLWFuZ2xlLWRvd24ge1xuXHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0bGluZS1oZWlnaHQ6IDE2cHg7XG5cdFx0Zm9udC1zaXplOiA3MHB4O1xuXHRcdGFuaW1hdGlvbjogYm91bmNlIDJzIGluZmluaXRlO1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0fVxuXHQ1MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcblx0fVxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdH1cbn1cblxuLmxhbnRlcm5zIHtcblx0ZGlzcGxheTogbm9uZTtcblx0d2lkdGg6IHZhcigtLWFydC13aWR0aCk7XG5cdGhlaWdodDogODAlO1xuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdGRpc3BsYXk6IGdyaWQ7XG5cdH1cbn1cblxuLmxhbnRlcm4ge1xuXHQtLWNhcHMtd2lkdGg6IDUwcHg7XG5cdC0tY2Fwcy1oZWlnaHQ6IDIwcHg7XG5cblx0ZGlzcGxheTogZ3JpZDtcblx0YWxpZ24tY29udGVudDogY2VudGVyO1xuXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cblx0JiAudG9wLFxuXHQmIC5ib3R0b20ge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR3aWR0aDogdmFyKC0tY2Fwcy13aWR0aCk7XG5cdFx0aGVpZ2h0OiB2YXIoLS1jYXBzLWhlaWdodCk7XG5cblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblx0fVxuXG5cdCYgLnRvcCB7XG5cdFx0Ym90dG9tOiAtNXB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDgwJSA4MCUgMCAwO1xuXHR9XG5cblx0JiAuYm90dG9tIHtcblx0XHR0b3A6IC01cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogMCAwIDgwJSA4MCU7XG5cdH1cblxuXHQmIC5ib2R5IHtcblx0XHR6LWluZGV4OiAxO1xuXHRcdGhlaWdodDogMTMwcHg7XG5cdFx0d2lkdGg6IDgwJTtcblxuXHRcdGJvcmRlci1yYWRpdXM6IDg1cHg7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50LW1haW4tZGFyayk7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbWFpbik7XG5cdFx0YmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcblx0XHRcdHZhcigtLWJnLWxhbnRlcm4pLFxuXHRcdFx0dmFyKC0tYmctbGFudGVybikgMTklLFxuXHRcdFx0dmFyKC0tYWNjZW50LW1haW4tZGFyaykgMjAlXG5cdFx0KTtcblx0fVxuXG5cdCYgLmJvZHk6aG92ZXIge1xuXHRcdGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDI0NSwgMjA1LCA4NCwgMC43KSwgdHJhbnNwYXJlbnQgODAlKSxcblx0XHRcdHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXG5cdFx0XHRcdHZhcigtLWJnLWxhbnRlcm4pLFxuXHRcdFx0XHR2YXIoLS1iZy1sYW50ZXJuKSAxOSUsXG5cdFx0XHRcdHZhcigtLWFjY2VudC1tYWluLWRhcmspIDIwJVxuXHRcdFx0KTtcblx0fVxuXG5cdCYgPiAqIHtcblx0XHRib3gtc2hhZG93OiAzcHggM3B4IDZweCAtM3B4ICM4YTBmMGY7XG5cdH1cbn1cblxuLmhvdXJzLWNvbnRhaW5lciB7XG5cdHBhZGRpbmc6IDIwcHg7XG5cblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cblx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkIGhzbCgwLCA5NSUsIDcwJSk7XG59XG5cbi5ob3VycyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMzBweDtcblxuXHQmID4gZGl2IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRnYXA6IDhweDtcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0d2lkdGg6IDY1MHB4O1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRnYXA6IDcwcHg7XG5cdH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ob21lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGdCQUFnQjs7Q0FFaEI7RUFDQyxxQkFBcUI7RUFDckIsNEJBQTRCO0NBQzdCO0FBQ0Q7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsMkJBQTJCO0NBQzNCLFVBQVU7Q0FDVixZQUFZOztDQUVaLGFBQWE7Q0FDYix1QkFBdUI7O0NBRXZCO0VBQ0MsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLDRCQUE0QjtDQUM3QjtBQUNEOztBQUVBO0NBQ0MsV0FBVztDQUNYLHVCQUF1Qjs7Q0FFdkIsbU5BQW1OO0NBQ25OLHNCQUFzQjtDQUN0Qiw0QkFBNEI7Q0FDNUIsMkJBQTJCOztDQUUzQjtFQUNDLFdBQVc7RUFDWCxxQkFBcUI7O0VBRXJCLDZMQUE2TDtDQUM5TDtBQUNEOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7O0NBRWIsYUFBYTtDQUNiLFNBQVM7O0NBRVQ7RUFDQyw2QkFBNkI7Q0FDOUI7O0NBRUE7RUFDQyxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFNBQVM7Q0FDVjtBQUNEOztBQUVBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixtQkFBbUI7Q0FDbkIsOEJBQThCO0NBQzlCLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixxQkFBcUI7Q0FDckIscUJBQXFCOztDQUVyQjtFQUNDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDZCQUE2QjtDQUM5QjtBQUNEOztBQUVBO0NBQ0M7RUFDQyx3QkFBd0I7Q0FDekI7Q0FDQTtFQUNDLDJCQUEyQjtDQUM1QjtDQUNBO0VBQ0Msd0JBQXdCO0NBQ3pCO0FBQ0Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLFdBQVc7O0NBRVg7RUFDQyxhQUFhO0NBQ2Q7QUFDRDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7O0NBRW5CLGFBQWE7Q0FDYixxQkFBcUI7Q0FDckIscUJBQXFCOztDQUVyQjs7RUFFQyxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLDBCQUEwQjs7RUFFMUIsdUJBQXVCO0NBQ3hCOztDQUVBO0VBQ0MsWUFBWTtFQUNaLDBCQUEwQjtDQUMzQjs7Q0FFQTtFQUNDLFNBQVM7RUFDVCwwQkFBMEI7Q0FDM0I7O0NBRUE7RUFDQyxVQUFVO0VBQ1YsYUFBYTtFQUNiLFVBQVU7O0VBRVYsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxnQ0FBZ0M7RUFDaEM7Ozs7R0FJQztDQUNGOztDQUVBO0VBQ0M7Ozs7O0lBS0U7Q0FDSDs7Q0FFQTtFQUNDLG9DQUFvQztDQUNyQztBQUNEOztBQUVBO0NBQ0MsYUFBYTs7Q0FFYixhQUFhO0NBQ2IsdUJBQXVCOztDQUV2QixzQ0FBc0M7QUFDdkM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7O0NBRVQ7RUFDQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixRQUFRO0NBQ1Q7O0NBRUE7RUFDQyxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsU0FBUztDQUNWO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhvbWUge1xcblxcdG1hcmdpbi10b3A6IDIwcHg7XFxuXFxuXFx0JiBoMiB7XFxuXFx0XFx0Y29sb3I6IHZhcigtLXRleHQtaDEpO1xcblxcdFxcdHRleHQtc2hhZG93OiAxcHggMXB4ICMwZDBkMGQ7XFxuXFx0fVxcbn1cXG5cXG4uaGVybyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGhlaWdodDogY2FsYygxMDBzdmggLSA4MHB4KTtcXG5cXHR3aWR0aDogOTAlO1xcblxcdG1hcmdpbjogYXV0bztcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdC0tYXJ0LXdpZHRoOiBtaW4oMTkwcHgsIDIwJSk7XFxuXFx0XFx0d2lkdGg6IG1pbig5MCUsIDEzMDBweCk7XFxuXFx0XFx0bWFyZ2luOiBhdXRvO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRoZWlnaHQ6IGNhbGMoMTAwc3ZoIC0gMTAwcHgpO1xcblxcdH1cXG59XFxuXFxuLmFydCB7XFxuXFx0aGVpZ2h0OiA2OCU7XFxuXFx0d2lkdGg6IHZhcigtLWFydC13aWR0aCk7XFxuXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkXzUwNTkxMTZjNTlkMjQ0ZDA4YzMxNzBiNDlkNmU3YjBmfm12Mi5qcGcvdjEvZmlsbC93XzU0NixoXzcyOCxhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLGVuY19hdXRvLzU0YTRjZF81MDU5MTE2YzU5ZDI0NGQwOGMzMTcwYjQ5ZDZlN2IwZn5tdjIuanBnKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcblxcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0aGVpZ2h0OiA4MCU7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMCA3MHB4O1xcblxcblxcdFxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzU0YTRjZF9hZTVlMjI0ODZkYmI0OWRlYmI5Y2Q4YmExYjc4MGI2ZX5tdjIuanBnL3YxL2ZpbGwvd18zODgsaF8xMjQwLGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEsZW5jX2F1dG8vQXJ0d29yazFfRmluYWxfOHgyXzUuanBnKTtcXG5cXHR9XFxufVxcblxcbi5oZXJvLXRleHQge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3R0b206IDEwMHB4O1xcblxcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z2FwOiAzMHB4O1xcblxcblxcdCYgaDEge1xcblxcdFxcdC0tZm9udC1zaXplOiBtaW4oNTB2dywgMzAwcHgpO1xcblxcdH1cXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHRwb3NpdGlvbjogc3RhdGljO1xcblxcdFxcdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRnYXA6IDYwcHg7XFxuXFx0fVxcbn1cXG5cXG4ucmVzZXJ2YXRpb25zIHtcXG5cXHRjb2xvcjogI2ZmZTVlNTtcXG5cXHRmb250LXNpemU6IDIycHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRsZXR0ZXItc3BhY2luZzogMnB4O1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDFweDtcXG5cXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDRweDtcXG59XFxuXFxuLnNjcm9sbC1kb3duIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1oMSk7XFxuXFxuXFx0JiAuZmEtYW5nbGUtZG93biB7XFxuXFx0XFx0bWFyZ2luLXRvcDogMTBweDtcXG5cXHRcXHRsaW5lLWhlaWdodDogMTZweDtcXG5cXHRcXHRmb250LXNpemU6IDcwcHg7XFxuXFx0XFx0YW5pbWF0aW9uOiBib3VuY2UgMnMgaW5maW5pdGU7XFxuXFx0fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XFxuXFx0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG5cXHR9XFxuXFx0NTAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG5cXHR9XFxufVxcblxcbi5sYW50ZXJucyB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHR3aWR0aDogdmFyKC0tYXJ0LXdpZHRoKTtcXG5cXHRoZWlnaHQ6IDgwJTtcXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHRkaXNwbGF5OiBncmlkO1xcblxcdH1cXG59XFxuXFxuLmxhbnRlcm4ge1xcblxcdC0tY2Fwcy13aWR0aDogNTBweDtcXG5cXHQtLWNhcHMtaGVpZ2h0OiAyMHB4O1xcblxcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0YWxpZ24tY29udGVudDogY2VudGVyO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXG5cXHQmIC50b3AsXFxuXFx0JiAuYm90dG9tIHtcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0d2lkdGg6IHZhcigtLWNhcHMtd2lkdGgpO1xcblxcdFxcdGhlaWdodDogdmFyKC0tY2Fwcy1oZWlnaHQpO1xcblxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdH1cXG5cXG5cXHQmIC50b3Age1xcblxcdFxcdGJvdHRvbTogLTVweDtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA4MCUgODAlIDAgMDtcXG5cXHR9XFxuXFxuXFx0JiAuYm90dG9tIHtcXG5cXHRcXHR0b3A6IC01cHg7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMCAwIDgwJSA4MCU7XFxuXFx0fVxcblxcblxcdCYgLmJvZHkge1xcblxcdFxcdHotaW5kZXg6IDE7XFxuXFx0XFx0aGVpZ2h0OiAxMzBweDtcXG5cXHRcXHR3aWR0aDogODAlO1xcblxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDg1cHg7XFxuXFx0XFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50LW1haW4tZGFyayk7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbWFpbik7XFxuXFx0XFx0YmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcXG5cXHRcXHRcXHR2YXIoLS1iZy1sYW50ZXJuKSxcXG5cXHRcXHRcXHR2YXIoLS1iZy1sYW50ZXJuKSAxOSUsXFxuXFx0XFx0XFx0dmFyKC0tYWNjZW50LW1haW4tZGFyaykgMjAlXFxuXFx0XFx0KTtcXG5cXHR9XFxuXFxuXFx0JiAuYm9keTpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMjQ1LCAyMDUsIDg0LCAwLjcpLCB0cmFuc3BhcmVudCA4MCUpLFxcblxcdFxcdFxcdHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0XFx0XFx0dmFyKC0tYmctbGFudGVybiksXFxuXFx0XFx0XFx0XFx0dmFyKC0tYmctbGFudGVybikgMTklLFxcblxcdFxcdFxcdFxcdHZhcigtLWFjY2VudC1tYWluLWRhcmspIDIwJVxcblxcdFxcdFxcdCk7XFxuXFx0fVxcblxcblxcdCYgPiAqIHtcXG5cXHRcXHRib3gtc2hhZG93OiAzcHggM3B4IDZweCAtM3B4ICM4YTBmMGY7XFxuXFx0fVxcbn1cXG5cXG4uaG91cnMtY29udGFpbmVyIHtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkIGhzbCgwLCA5NSUsIDcwJSk7XFxufVxcblxcbi5ob3VycyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMzBweDtcXG5cXG5cXHQmID4gZGl2IHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRnYXA6IDhweDtcXG5cXHR9XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHR3aWR0aDogNjUwcHg7XFxuXFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdFxcdGdhcDogNzBweDtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1lbnUge1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRtYXJnaW46IDIwcHg7XG5cdH1cbn1cblxuLm1lbnUtYXJ0IHtcblx0aGVpZ2h0OiA0NDRweDtcblx0d2lkdGg6IG1pbigxMDB2dywgNDAwcHgpO1xuXHRtYXJnaW46IGF1dG87XG5cdHotaW5kZXg6IC0xO1xuXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzU0YTRjZF9iOGM5NTM3YzVmY2Q0ZDg1OWZjOTU4OTQyYjVhNWU4N35tdjIuanBnL3YxL2ZpbGwvd185NTIsaF8xMzIyLGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEsZW5jX2F1dG8vNTRhNGNkX2I4Yzk1MzdjNWZjZDRkODU5ZmM5NTg5NDJiNWE1ZTg3fm12Mi5qcGcpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdG1hcmdpbjogMDtcblx0XHRoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1mb290ZXItaGVpZ2h0KSAqIDMuNSk7XG5cdFx0d2lkdGg6IG1pbig2MDBweCwgNTB2dyk7XG5cdH1cbn1cblxuLm1lbnUtdGV4dCB7XG5cdG1hcmdpbjogLTk1cHggMCA0MHB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMTVweDtcblxuXHQmID4gKiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1tYWluKTtcblx0fVxuXG5cdCYgYSB7XG5cdFx0cGFkZGluZzogOHB4IDA7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRmb250LXNpemU6IDMwcHg7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IDNweDtcblx0fVxuXG5cdCYgYTpob3ZlciB7XG5cdFx0Ym94LXNoYWRvdzogMCAwIDAgMXB4IHdoaXRlO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0bWFyZ2luOiAwIC02MXB4IDA7XG5cdH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tZW51LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGdCQUFnQjs7Q0FFaEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7O0NBRW5CO0VBQ0MsbUJBQW1CO0VBQ25CLFlBQVk7Q0FDYjtBQUNEOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHdCQUF3QjtDQUN4QixZQUFZO0NBQ1osV0FBVzs7Q0FFWCxvTkFBb047Q0FDcE4sc0JBQXNCO0NBQ3RCLDRCQUE0Qjs7Q0FFNUI7RUFDQyxTQUFTO0VBQ1QsZ0RBQWdEO0VBQ2hELHVCQUF1QjtDQUN4QjtBQUNEOztBQUVBO0NBQ0Msb0JBQW9COztDQUVwQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7O0NBRVQ7RUFDQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdDQUFnQztDQUNqQzs7Q0FFQTtFQUNDLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLDJCQUEyQjtDQUM1Qjs7Q0FFQTtFQUNDLGlCQUFpQjtDQUNsQjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tZW51IHtcXG5cXHRtYXJnaW4tdG9wOiAyMHB4O1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0XFx0bWFyZ2luOiAyMHB4O1xcblxcdH1cXG59XFxuXFxuLm1lbnUtYXJ0IHtcXG5cXHRoZWlnaHQ6IDQ0NHB4O1xcblxcdHdpZHRoOiBtaW4oMTAwdncsIDQwMHB4KTtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0ei1pbmRleDogLTE7XFxuXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkX2I4Yzk1MzdjNWZjZDRkODU5ZmM5NTg5NDJiNWE1ZTg3fm12Mi5qcGcvdjEvZmlsbC93Xzk1MixoXzEzMjIsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMSxlbmNfYXV0by81NGE0Y2RfYjhjOTUzN2M1ZmNkNGQ4NTlmYzk1ODk0MmI1YTVlODd+bXYyLmpwZyk7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdG1hcmdpbjogMDtcXG5cXHRcXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1mb290ZXItaGVpZ2h0KSAqIDMuNSk7XFxuXFx0XFx0d2lkdGg6IG1pbig2MDBweCwgNTB2dyk7XFxuXFx0fVxcbn1cXG5cXG4ubWVudS10ZXh0IHtcXG5cXHRtYXJnaW46IC05NXB4IDAgNDBweDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxNXB4O1xcblxcblxcdCYgPiAqIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLW1haW4pO1xcblxcdH1cXG5cXG5cXHQmIGEge1xcblxcdFxcdHBhZGRpbmc6IDhweCAwO1xcblxcdFxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0XFx0Zm9udC1zaXplOiAzMHB4O1xcblxcdFxcdGxldHRlci1zcGFjaW5nOiAzcHg7XFxuXFx0fVxcblxcblxcdCYgYTpob3ZlciB7XFxuXFx0XFx0Ym94LXNoYWRvdzogMCAwIDAgMXB4IHdoaXRlO1xcblxcdH1cXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHRtYXJnaW46IDAgLTYxcHggMDtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogLS0tLS0tLS0tLS0tLS0tICAgICBSZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJ1dHRvbiB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0YmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG5cdGNvbG9yOiB1bnNldDtcblx0Ym9yZGVyOiBub25lO1xuXHRmb250LXNpemU6IHVuc2V0O1xufVxuXG5hIHtcblx0Y29sb3I6IHVuc2V0O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmgxLFxuaDIge1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9SZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tICAgICBVdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuOnJvb3Qge1xuXHQtLWJnLW1haW46ICNmZjQwNDA7XG5cdC0tYWNjZW50LW1haW4tZGFyazogIzNkMDAwMDtcblx0LS1iZy1sYW50ZXJuOiAjZTgzMDMwO1xuXHQtLXRleHQtaDE6ICNmNWNlNTQ7XG5cdC0tYmctaW5wdXQ6IHdoaXRlO1xuXHQtLWJvcmRlci1pbnB1dDogYmxhY2s7XG5cblx0LS1mb290ZXItaGVpZ2h0OiA1MHB4O1xuXHQtLWFydC13aWR0aDogMTAwJTtcblxuXHRzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG5cdG1pbi1oZWlnaHQ6IDEwMXN2aDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLW1haW4pO1xuXHRjb2xvcjogI2ZmZjtcblx0Zm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsXG5cdFx0Um9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsXG5cdFx0c2Fucy1zZXJpZjtcbn1cblxuI2FsbC1jb250ZW50IHtcblx0ZmxleDogMTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaDEuYnJhbmQge1xuXHQtLWZvbnQtc2l6ZTogMTEwcHg7XG5cblx0Y29sb3I6IHZhcigtLXRleHQtaDEpO1xuXHR0ZXh0LXNoYWRvdzogMCAwIDVweCBibGFjaztcblx0Zm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuXHRsaW5lLWhlaWdodDogY2FsYyh2YXIoLS1mb250LXNpemUpICogMC44KTtcbn1cblxuLmhpZGRlbiB7XG5cdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnNvY2lhbHMge1xuXHRnYXA6IDEwcHg7XG5cdGZvbnQtc2l6ZTogMjVweDtcbn1cblxuYS51bmRlcmxpbmUge1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAxcHg7XG5cdHRleHQtdW5kZXJsaW5lLW9mZnNldDogM3B4O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9VdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZWJvb3QtdXRpbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbURBQW1EOztBQUVuRDs7O0NBR0MsU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWixZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLHFCQUFxQjtBQUN0Qjs7QUFFQTs7Q0FFQyxtQkFBbUI7QUFDcEI7O0FBRUEsb0RBQW9EO0FBQ3BELG1FQUFtRTs7QUFFbkU7Q0FDQyxrQkFBa0I7Q0FDbEIsMkJBQTJCO0NBQzNCLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLHFCQUFxQjs7Q0FFckIscUJBQXFCO0NBQ3JCLGlCQUFpQjs7Q0FFakIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0Msa0JBQWtCOztDQUVsQixhQUFhO0NBQ2Isc0JBQXNCOztDQUV0QixnQ0FBZ0M7Q0FDaEMsV0FBVztDQUNYOztZQUVXO0FBQ1o7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGtCQUFrQjs7Q0FFbEIscUJBQXFCO0NBQ3JCLDBCQUEwQjtDQUMxQiwyQkFBMkI7Q0FDM0IseUNBQXlDO0FBQzFDOztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsU0FBUztDQUNULGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsMEJBQTBCO0FBQzNCOztBQUVBLG9FQUFvRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAtLS0tLS0tLS0tLS0tLS0gICAgIFJlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xcblxcdGNvbG9yOiB1bnNldDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Zm9udC1zaXplOiB1bnNldDtcXG59XFxuXFxuYSB7XFxuXFx0Y29sb3I6IHVuc2V0O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuaDEsXFxuaDIge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1JlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBVdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG46cm9vdCB7XFxuXFx0LS1iZy1tYWluOiAjZmY0MDQwO1xcblxcdC0tYWNjZW50LW1haW4tZGFyazogIzNkMDAwMDtcXG5cXHQtLWJnLWxhbnRlcm46ICNlODMwMzA7XFxuXFx0LS10ZXh0LWgxOiAjZjVjZTU0O1xcblxcdC0tYmctaW5wdXQ6IHdoaXRlO1xcblxcdC0tYm9yZGVyLWlucHV0OiBibGFjaztcXG5cXG5cXHQtLWZvb3Rlci1oZWlnaHQ6IDUwcHg7XFxuXFx0LS1hcnQtd2lkdGg6IDEwMCU7XFxuXFxuXFx0c2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHkge1xcblxcdG1pbi1oZWlnaHQ6IDEwMXN2aDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbWFpbik7XFxuXFx0Y29sb3I6ICNmZmY7XFxuXFx0Zm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLFxcblxcdFxcdFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsXFxuXFx0XFx0c2Fucy1zZXJpZjtcXG59XFxuXFxuI2FsbC1jb250ZW50IHtcXG5cXHRmbGV4OiAxO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaDEuYnJhbmQge1xcblxcdC0tZm9udC1zaXplOiAxMTBweDtcXG5cXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1oMSk7XFxuXFx0dGV4dC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcblxcdGxpbmUtaGVpZ2h0OiBjYWxjKHZhcigtLWZvbnQtc2l6ZSkgKiAwLjgpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG5cXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zb2NpYWxzIHtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0Zm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG5hLnVuZGVybGluZSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMXB4O1xcblxcdHRleHQtdW5kZXJsaW5lLW9mZnNldDogM3B4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9VdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hYm91dC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb25zdGFudHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb25zdGFudHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2V2ZW50cy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2V2ZW50cy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZWJvb3QtdXRpbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JlYm9vdC11dGlsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZWxGYWN0b3J5LCBodG1sRmFjdG9yeSB9IGZyb20gXCIuL2RvbS1mYWN0b3JpZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQWJvdXRVcygpIHtcblx0cmV0dXJuIGh0bWxGYWN0b3J5KFxuXHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJhYm91dFwiIH0sIFtcblx0XHRcdGVsRmFjdG9yeShcInBcIiwgeyBjbGFzc0xpc3Q6IFwidGV4dFwiLCB0ZXh0Q29udGVudDogXCJcIiB9LCBbXG5cdFx0XHRcdGVsRmFjdG9yeShcImFcIiwge1xuXHRcdFx0XHRcdGNsYXNzTGlzdDogXCJ1bmRlcmxpbmUgcGhvbmVcIixcblx0XHRcdFx0XHRocmVmOiBcInRlbDorMS0yMTItNTE3LTE5ODdcIixcblx0XHRcdFx0XHR0ZXh0Q29udGVudDogXCIyMTItNTE3LTE5ODdcIixcblx0XHRcdFx0fSksXG5cdFx0XHRdKSxcblx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJtYXAtY29udGFpbmVyXCIgfSwgW1xuXHRcdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwibWFwLXRhY2tcIiB9LCBbXSksXG5cdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJtYXAtc3RyaW5nXCIgfSwgW1xuXHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJsZWZ0XCIgfSksXG5cdFx0XHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcInJpZ2h0XCIgfSksXG5cdFx0XHRcdF0pLFxuXHRcdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwibWFwLXdvb2QgbWFwLXRvcFwiIH0sIFtdKSxcblx0XHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcIm1hcC1jYW52YXNcIiB9LCBbXG5cdFx0XHRcdFx0ZWxGYWN0b3J5KFwiaWZyYW1lXCIsIHtcblx0XHRcdFx0XHRcdHNyYzogXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQzMDIxLjIwMjg0MzM4NjM1NiEyZC03My45Nzk1Mzc5MjM4ODc1NiEzZDQwLjc3OTU1NDUzMzQ3NzE4ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4OWMyNTljODM5MGIwZTk3JTNBMHgyY2IxMTYwYWVmMzc3ZDBiITJzQVNTRVQhNWUwITNtMiExc2VuITJzdXMhNHYxNjk1ODY4MzczOTI4ITVtMiExc2VuITJzdXNcIixcblx0XHRcdFx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdFx0XHRcdGhlaWdodDogXCI0NTBcIixcblx0XHRcdFx0XHRcdGxvYWRpbmc6IFwibGF6eVwiLFxuXHRcdFx0XHRcdFx0cmVmZXJyZXJQb2xpY3k6IFwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIixcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XSksXG5cdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJtYXAtd29vZCBtYXAtYm90dG9tXCIgfSwgW10pLFxuXHRcdFx0XSksXG5cdFx0XSlcblx0KTtcbn1cbiIsImltcG9ydCB7IGVsRmFjdG9yeSwgaHRtbEZhY3RvcnkgfSBmcm9tIFwiLi9kb20tZmFjdG9yaWVzLmpzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNvY2lhbEljb25zKCkge1xuXHQvLyByZXR1cm5zIGRpdi5zb2NpYWxzIHdpdGggNCBsaW5rcywgZWFjaCBjb250YWluaW5nIGFuIDxpPlxuXHRyZXR1cm4gZWxGYWN0b3J5KFxuXHRcdFwiZGl2XCIsXG5cdFx0eyBjbGFzc0xpc3Q6IFwic29jaWFsc1wiIH0sXG5cdFx0W1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImluc3RhZ3JhbVwiLFxuXHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYXNzZXRyZXN0YXVyYW50L1wiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJmYWNlYm9va1wiLFxuXHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9hc3NldHJlc3RhdXJhbnQvXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInllbHBcIixcblx0XHRcdFx0bGluazogXCJodHRwczovL3d3dy55ZWxwLmNvbS9iaXovYXNzZXQtbmV3LXlvcms/b3NxPWFzc2V0XCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInRyaXBhZHZpc29yXCIsXG5cdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly93d3cudHJpcGFkdmlzb3IuY29tL1Jlc3RhdXJhbnRfUmV2aWV3LWc2MDc2My1kMTkyODQzNDYtUmV2aWV3cy1Bc3NldC1OZXdfWW9ya19DaXR5X05ld19Zb3JrLmh0bWxcIixcblx0XHRcdH0sXG5cdFx0XS5tYXAoKHBhaXIpID0+IHtcblx0XHRcdHJldHVybiBlbEZhY3RvcnkoXCJhXCIsIHsgaHJlZjogcGFpci5saW5rIH0sIFtcblx0XHRcdFx0ZWxGYWN0b3J5KFwiaVwiLCB7XG5cdFx0XHRcdFx0Y2xhc3NMaXN0OiBgZmEgZmEtJHtwYWlyLm5hbWV9YCxcblx0XHRcdFx0XHRhcmlhSGlkZGVuOiB0cnVlLFxuXHRcdFx0XHR9KSxcblx0XHRcdF0pO1xuXHRcdH0pXG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZENvbnN0YW50cygpIHtcblx0Y29uc3Qgc2lkZWJhciA9IGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJzaWRlYmFyIGR5bmFtaWNcIiB9LCBbXG5cdFx0ZWxGYWN0b3J5KFwiYnV0dG9uXCIsIHtcblx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG5cdFx0XHRjbGFzc0xpc3Q6IFwiY2xvc2UtYnRuIHNpZGViYXItdG9nZ2xlclwiLFxuXHRcdFx0aWQ6IFwiY2xvc2Utc2lkZWJhclwiLFxuXHRcdFx0dGV4dENvbnRlbnQ6IFwiw5dcIixcblx0XHR9KSxcblx0XHRlbEZhY3RvcnkoXG5cdFx0XHRcIm5hdlwiLFxuXHRcdFx0e30sXG5cdFx0XHRbXCJob21lXCIsIFwibWVudVwiLCBcImV2ZW50c1wiLCBcImFib3V0XCJdLm1hcCgoYnV0dG9uKSA9PiB7XG5cdFx0XHRcdHJldHVybiBlbEZhY3RvcnkoXCJidXR0b25cIiwge1xuXHRcdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG5cdFx0XHRcdFx0Y2xhc3NMaXN0OiBcIm5hdi1idG5cIixcblx0XHRcdFx0XHRpZDogYCR7YnV0dG9ufS1idG5gLFxuXHRcdFx0XHRcdHRleHRDb250ZW50OiBidXR0b24sXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSlcblx0XHQpLFxuXHRdKTtcblxuXHRjb25zdCBoZWFkZXIgPSBlbEZhY3RvcnkoXCJoZWFkZXJcIiwge30sIFtcblx0XHRlbEZhY3RvcnkoXCJidXR0b25cIiwge1xuXHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdGNsYXNzTGlzdDogXCJzaWRlYmFyLXRvZ2dsZXJcIixcblx0XHRcdGlkOiBcIm9wZW4tc2lkZWJhclwiLFxuXHRcdFx0dGV4dENvbnRlbnQ6IFwi4piwXCIsXG5cdFx0fSksXG5cdFx0Y3JlYXRlU29jaWFsSWNvbnMoKSxcblx0XSk7XG5cblx0Y29uc3QgZm9vdGVyID0gZWxGYWN0b3J5KFwiZm9vdGVyXCIsIHt9LCBbXG5cdFx0Y3JlYXRlU29jaWFsSWNvbnMoKSxcblx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiYXV0aG9yXCIgfSwgW1xuXHRcdFx0ZWxGYWN0b3J5KFwicFwiLCB7IHRleHRDb250ZW50OiBcIldhbGtlclwiIH0pLFxuXHRcdFx0ZWxGYWN0b3J5KFxuXHRcdFx0XHRcImFcIixcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL21hcmxhdHRlXCIsXG5cdFx0XHRcdFx0dGFyZ2V0OiBcIl9ibGFua1wiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRbZWxGYWN0b3J5KFwiaVwiLCB7IGNsYXNzTGlzdDogXCJmYSBmYS1naXRodWJcIiB9KV1cblx0XHRcdCksXG5cdFx0XHRlbEZhY3RvcnkoXCJwXCIsIHsgdGV4dENvbnRlbnQ6IFwiTWFybGF0dFwiIH0pLFxuXHRcdF0pLFxuXHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJjb250YWN0LWNvbnRhaW5lclwiIH0sIFtcblx0XHRcdGVsRmFjdG9yeShcImJ1dHRvblwiLCB7XG5cdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG5cdFx0XHRcdGlkOiBcImNvbnRhY3QtYnRuXCIsXG5cdFx0XHRcdHRleHRDb250ZW50OiBcIkNvbnRhY3QgVXNcIixcblx0XHRcdH0pLFxuXHRcdF0pLFxuXHRdKTtcblxuXHRyZXR1cm4gW1xuXHRcdHNpZGViYXIsXG5cdFx0aGVhZGVyLFxuXHRcdGVsRmFjdG9yeShcIm1haW5cIiwgeyBpZDogXCJjaGFuZ2luZy1jb250ZW50XCIgfSksXG5cdFx0Zm9vdGVyLFxuXHRdLm1hcCgoc2VjdGlvbikgPT4ge1xuXHRcdHJldHVybiBodG1sRmFjdG9yeShzZWN0aW9uKTtcblx0fSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZWxGYWN0b3J5KHR5cGUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuID0gW10pIHtcblx0cmV0dXJuIHsgdHlwZSwgYXR0cmlidXRlcywgY2hpbGRyZW4gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxGYWN0b3J5KG9iaikge1xuXHRjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLnR5cGUpO1xuXHRjb25zdCBhdHRyaWJ1dGVzID0gb2JqLmF0dHJpYnV0ZXM7XG5cblx0Zm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRlbFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHR9XG5cblx0b2JqLmNoaWxkcmVuPy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuXHRcdGVsLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5KGNoaWxkKSk7XG5cdH0pO1xuXG5cdHJldHVybiBlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1Sb3dGYWN0b3J5KGZvcm1EYXRhQXJyYXlzKSB7XG5cdHJldHVybiBmb3JtRGF0YUFycmF5c1xuXHRcdC5tYXAoKGZvcm1EYXRhKSA9PiB7XG5cdFx0XHRjb25zdCBrZWJhYiA9IGZvcm1EYXRhWzBdLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpO1xuXHRcdFx0cmV0dXJuIGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJmb3JtLWl0ZW1cIiB9LCBbXG5cdFx0XHRcdGVsRmFjdG9yeShcImxhYmVsXCIsIHtcblx0XHRcdFx0XHRodG1sRm9yOiBrZWJhYixcblx0XHRcdFx0XHR0ZXh0Q29udGVudDogZm9ybURhdGFbMF0gKyBcIjpcIixcblx0XHRcdFx0fSksXG5cdFx0XHRcdGVsRmFjdG9yeShcImlucHV0XCIsIHtcblx0XHRcdFx0XHRpZDoga2ViYWIsXG5cdFx0XHRcdFx0dHlwZTogZm9ybURhdGFbMV0sXG5cdFx0XHRcdFx0YXV0b2NvbXBsZXRlOiBmb3JtRGF0YVsyXSxcblx0XHRcdFx0fSksXG5cdFx0XHRdKTtcblx0XHR9KVxuXHRcdC5yZWR1Y2UoKGFjYywgY3VycmVudEl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHRpZiAoIShpbmRleCAmIDEpKSB7XG5cdFx0XHRcdC8vIElmIGV2ZW4sIGNyZWF0ZSByb3cgd2l0aCBjdXJyZW50SXRlbSBhcyBhIGNoaWxkXG5cdFx0XHRcdGFjYy5wdXNoKFxuXHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJmb3JtLXJvd1wiIH0sIFtjdXJyZW50SXRlbV0pXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBJZiBvZGQsIGFkZCBjdXJyZW50SXRlbSB0byBwcmV2aW91cyByb3dcblx0XHRcdFx0YWNjW2FjYy5sZW5ndGggLSAxXS5jaGlsZHJlbi5wdXNoKGN1cnJlbnRJdGVtKTtcblx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdH1cblx0XHR9LCBbXSk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSBcIi4vZm9ybS5qc1wiO1xuaW1wb3J0IHsgaHRtbEZhY3RvcnksIGVsRmFjdG9yeSB9IGZyb20gXCIuL2RvbS1mYWN0b3JpZXMuanNcIjtcblxuZnVuY3Rpb24gY3JlYXRlVGV4dENoaWxkcmVuKCkge1xuXHRjb25zdCB0ZXh0Q2hpbGRyZW4gPSBbXG5cdFx0W1wiaDFcIiwgXCJQcml2YXRlIERpbmluZyAmIEV2ZW50c1wiXSxcblx0XHRbXCJoMlwiLCBcIlNwZWNpYWwgRXZlbnRzXCJdLFxuXHRcdFtcblx0XHRcdFwicFwiLFxuXHRcdFx0XCJXaXRoIHR3byBsZXZlbHMgb2YgZGluaW5nIGFuZCBhIGJhciBvbiBlYWNoIGZsb29yLCB0aGUgcmVzdGF1cmFudCBvZmZlcnMgc2VhdGluZyBmb3IgdXAgMjIwIGd1ZXN0cyB3aXRoaW4gYXBwcm94aW1hdGVseSA1LDAwMCBzcXVhcmUtZm9vdGFnZS4gVXBvbiBlbnRyeSBpbnRvIHRoZSByZXN0YXVyYW50IHRocm91Z2ggYSBnbGFzcyBlbnRyeXdheSBpcyBhIDI0LSBzZWF0IGJhciBmb3IgZ3Vlc3RzIHRvIGVuam95IGEgZHJpbmssIHNuYWNrLCBvciBmdWxsIGRpbm5lci5cIixcblx0XHRdLFxuXHRcdFtcblx0XHRcdFwicFwiLFxuXHRcdFx0XCJUaGVyZSBhcmUgbXVsdGlwbGUgYXJlYXMgb2YgdGhlIHJlc3RhdXJhbnQgdGhhdCBjYW4gaG9zdCBwcml2YXRlIGFuZCBzZW1pLXByaXZhdGUgZXZlbnRzIGFzIHRoZSByZXN0YXVyYW50IGJvYXN0cyB0d28gc2VtaS1wcml2YXRlIHJvb21zIHRoYXQgYm90aCBzZWF0IDIwIGd1ZXN0cywgYXMgd2VsbCBhcyB0aGUgdXBzdGFpcnMgTWV6emFuaW5lIGxldmVsLCB3aGljaCBzZWF0cyB1cCB0byA1MCBhbmQgOCBhdCB0aGUgYmFyLiBTZWF0aW5nIHdpbGwgYmUgYXZhaWxhYmxlIG91dGRvb3JzIHNlYXNvbmFsbHkuXCIsXG5cdFx0XSxcblx0XHRbXCJoMlwiLCBcIkNvY2t0YWlsIFBhcnRpZXMsIFJlY2VwdGlvbnMsIEJ1eW91dHNcIl0sXG5cdFx0W1xuXHRcdFx0XCJwXCIsXG5cdFx0XHRcIldlIGFyZSBwbGVhc2VkIHRvIG9mZmVyIG91ciBzZXJ2aWNlcyBmb3IgeW91ciBuZXh0IG9jY2FzaW9ucy4gQm9vayBvdXIgZW50aXJlIHJlc3RhdXJhbnQgZm9yIGEgc3BlY2lhbCBldmVuaW5nLCBjYXRlcmVkIGp1c3QgZm9yIHlvdSBhbmQgeW91ciBndWVzdHMuIExldCB1cyBicmluZyB0aGUgQVNTRVQgZXhwZXJpZW5jZSB0byB5b3VyIHdlZGRpbmcsIGJpcnRoZGF5cyBhbmQgb3RoZXIgbGFyZ2UgZXZlbnRzXCIsXG5cdFx0XSxcblx0XHRbXCJwXCIsIFwiSW5xdWlyZSBiZWxvdyBvciBjb250YWN0IHVzIGF0OlwiXSxcblx0XS5tYXAoKGVudHJ5KSA9PiB7XG5cdFx0cmV0dXJuIGVsRmFjdG9yeShlbnRyeVswXSwgeyB0ZXh0Q29udGVudDogZW50cnlbMV0gfSk7XG5cdH0pO1xuXG5cdHRleHRDaGlsZHJlblt0ZXh0Q2hpbGRyZW4ubGVuZ3RoIC0gMV0uY2hpbGRyZW4ucHVzaChcblx0XHRlbEZhY3RvcnkoXCJhXCIsIHtcblx0XHRcdGhyZWY6IFwidGVsOisxLTIxMi01MTctMTk4N1wiLFxuXHRcdFx0dGV4dENvbnRlbnQ6IFwiKzEgMjEyIDUxNyAxOTg3XCIsXG5cdFx0XHRjbGFzc0xpc3Q6IFwidW5kZXJsaW5lXCIsXG5cdFx0fSlcblx0KTtcblxuXHR0ZXh0Q2hpbGRyZW4ucHVzaChcblx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiY2FsbC10by1hY3Rpb25cIiB9LCBbXG5cdFx0XHRlbEZhY3RvcnkoXCJidXR0b25cIiwge1xuXHRcdFx0XHRjbGFzc0xpc3Q6IFwiaW5xdWlyZVwiLFxuXHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0XHR0ZXh0Q29udGVudDogXCJJbnF1aXJlIE5vd1wiLFxuXHRcdFx0fSksXG5cdFx0XSlcblx0KTtcblx0cmV0dXJuIHRleHRDaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGhvdG9zKCkge1xuXHRyZXR1cm4gW1xuXHRcdHtcblx0XHRcdHNyYzogXCJodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhL2JiZjAyNWIyYTE5NDQwZDE5N2NiZWY2NjZmZmZiYzhlLmpwZy92MS9maWxsL3dfOTk5LGhfNjAwLGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEsZW5jX2F1dG8vYmJmMDI1YjJhMTk0NDBkMTk3Y2JlZjY2NmZmZmJjOGUuanBnXCIsXG5cdFx0XHRhbHQ6IFwiUGVvcGxlIGRyaW5raW5nIGF0IGEgYmFyXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzcmM6IFwiaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS81NGE0Y2RfYTI2NWEyZjI1ODM0NGMxNTljM2QwNmZjZWJkOTQwZWV+bXYyLmpwZy92MS9maWxsL3dfNjY2LGhfNjAwLGFsX2wscV84NSx1c21fMC42Nl8xLjAwXzAuMDEsZW5jX2F1dG8vNTRhNGNkX2EyNjVhMmYyNTgzNDRjMTU5YzNkMDZmY2ViZDk0MGVlfm12Mi5qcGdcIixcblx0XHRcdGFsdDogXCJBIGdsYXNzIG9mIHdpbmUgYW5kIHBsYXRlIG9mIGZvb2RcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNyYzogXCJodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzU0YTRjZF85NTE4NGE4NmFlZWU0MmJjOGYyYjY1ZDQxNDhhY2RkZn5tdjJfZF8xOTUwXzEzMDhfc18yLmpwZy92MS9maWxsL3dfNjY2LGhfNjAwLGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEsZW5jX2F1dG8vNTRhNGNkXzk1MTg0YTg2YWVlZTQyYmM4ZjJiNjVkNDE0OGFjZGRmfm12Ml9kXzE5NTBfMTMwOF9zXzIuanBnXCIsXG5cdFx0XHRhbHQ6IFwiQSBESiBib290aFwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c3JjOiBcImh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkX2IyZTUzNmFiZjBlYTQzNmQ5MDU1N2M1ZTUyOGExZWMwfm12Mi5wbmcvdjEvZmlsbC93Xzk5OSxoXzYwMCxhbF9sLHFfOTAsdXNtXzAuNjZfMS4wMF8wLjAxLGVuY19hdXRvLzU0YTRjZF9iMmU1MzZhYmYwZWE0MzZkOTA1NTdjNWU1MjhhMWVjMH5tdjIucG5nXCIsXG5cdFx0XHRhbHQ6IFwiQSBiYXIgZnVsbCBvZiBwZW9wbGVcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNyYzogXCJodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzU0YTRjZF82NjY0Mzg4NWJmMmU0NGQ3YTVmOTM5NmNkMjZmNmU5N35tdjIuanBnL3YxL2ZpbGwvd184MzMsaF81NTAsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMSxlbmNfYXV0by81NGE0Y2RfNjY2NDM4ODViZjJlNDRkN2E1ZjkzOTZjZDI2ZjZlOTd+bXYyLmpwZ1wiLFxuXHRcdFx0YWx0OiBcIkFuIGVtcHR5IGJhciwgbGl0IGZyb20gdW5kZXJuZWF0aFwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c3JjOiBcImh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkXzVjMDI0ODA0MDAxNTRiYmViZDA3NThlYjJmOGQ3Yjhkfm12Ml9kXzE2MDBfMTIwMF9zXzIuanBnL3YxL2ZpbGwvd184MzMsaF81NTAsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMSxlbmNfYXV0by81NGE0Y2RfNWMwMjQ4MDQwMDE1NGJiZWJkMDc1OGViMmY4ZDdiOGR+bXYyX2RfMTYwMF8xMjAwX3NfMi5qcGdcIixcblx0XHRcdGFsdDogXCJSZXN0YXVyYW50IHN0YWZmXCIsXG5cdFx0fSxcblx0XVxuXHRcdC5tYXAoKGltZ09iaiwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IFtzcmMsIGFsdF0gPSBbaW1nT2JqLnNyYywgaW1nT2JqLmFsdF07XG5cdFx0XHRyZXR1cm4gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImltYWdlLWNvbnRhaW5lclwiIH0sIFtcblx0XHRcdFx0ZWxGYWN0b3J5KFwiaW1nXCIsIHsgc3JjLCBhbHQgfSksXG5cdFx0XHRdKTtcblx0XHR9KVxuXHRcdC5yZWR1Y2UoKGFjYywgY3VycmVudEltZywgaW5kZXgpID0+IHtcblx0XHRcdGlmICghKGluZGV4ICYgMSkpIHtcblx0XHRcdFx0Ly8gSWYgZXZlbiwgY3JlYXRlIHRpZXIgd2l0aCBjaGlsZCBpbWdcblx0XHRcdFx0YWNjLnB1c2goZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcInRpZXJcIiB9LCBbY3VycmVudEltZ10pKTtcblx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIElmIG9kZCwgYWRkIGltZyBjaGlsZCB0byBwcmV2aW91cyB0aWVyXG5cdFx0XHRcdGFjY1thY2MubGVuZ3RoIC0gMV0uY2hpbGRyZW4ucHVzaChjdXJyZW50SW1nKTtcblx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdH1cblx0XHR9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEV2ZW50cygpIHtcblx0Y29uc3QgW2V2ZW50c0NvbnRlbnQsIHBob3RvcywgY2FsbFRvQWN0aW9uLCBtb2RhbEVsZW1lbnRdID0gW1xuXHRcdFwiY29udGVudFwiLFxuXHRcdFwicGhvdG9zXCIsXG5cdFx0XCJjYWxsLXRvLWFjdGlvblwiLFxuXHRcdFwibW9kYWwgY2xvc2UtbW9kYWwgaGlkZGVuXCIsXG5cdF0ubWFwKChlbCkgPT4ge1xuXHRcdHJldHVybiBlbEZhY3RvcnkoXCJhcnRpY2xlXCIsIHsgY2xhc3NMaXN0OiBlbCB9KTtcblx0fSk7XG5cblx0ZXZlbnRzQ29udGVudC5jaGlsZHJlbi5wdXNoKFxuXHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJhcnRcIiB9KSxcblx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwidGV4dFwiIH0sIGNyZWF0ZVRleHRDaGlsZHJlbigpKVxuXHQpO1xuXG5cdHBob3Rvcy5jaGlsZHJlbi5wdXNoKC4uLmNyZWF0ZVBob3RvcygpKTtcblxuXHRjYWxsVG9BY3Rpb24uY2hpbGRyZW4ucHVzaChcblx0XHRlbEZhY3RvcnkoXCJwXCIsIHsgdGV4dENvbnRlbnQ6IFwiTGV0IHVzIGhvc3QgeW91ciBuZXh0IGV2ZW50XCIgfSksXG5cdFx0ZWxGYWN0b3J5KFwiYnV0dG9uXCIsIHtcblx0XHRcdGNsYXNzTGlzdDogXCJpbnF1aXJlXCIsXG5cdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0dGV4dENvbnRlbnQ6IFwiSW5xdWlyZSBOb3dcIixcblx0XHR9KVxuXHQpO1xuXG5cdG1vZGFsRWxlbWVudC5jaGlsZHJlbi5wdXNoKGNyZWF0ZUZvcm0oKSk7XG5cblx0cmV0dXJuIGh0bWxGYWN0b3J5KFxuXHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJldmVudHMgZHluYW1pY1wiIH0sIFtcblx0XHRcdGV2ZW50c0NvbnRlbnQsXG5cdFx0XHRwaG90b3MsXG5cdFx0XHRjYWxsVG9BY3Rpb24sXG5cdFx0XHRtb2RhbEVsZW1lbnQsXG5cdFx0XSlcblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlbkZvckNsaWNrcygpIHtcblx0Y29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuXG5cdGNvbnN0IGlucXVpcmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnF1aXJlXCIpO1xuXHRpbnF1aXJlQnRucy5mb3JFYWNoKChidXR0b24pID0+IHtcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGNvbnN0IGNsb3NlTW9kYWxCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jbG9zZS1tb2RhbFwiKTtcblx0Y2xvc2VNb2RhbEJ0bnMuZm9yRWFjaCgoY2xvc2VyKSA9PiB7XG5cdFx0Y2xvc2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcyhcImNsb3NlLW1vZGFsXCIpKSB7XG5cdFx0XHRcdG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnNvbGUubG9nKFwiRm9ybSBzdWJtaXR0ZWQuXCIpO1xuXHRcdG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cdH0pO1xufVxuIiwiaW1wb3J0IHsgZWxGYWN0b3J5LCBmb3JtUm93RmFjdG9yeSB9IGZyb20gXCIuL2RvbS1mYWN0b3JpZXMuanNcIjtcblxuZnVuY3Rpb24gY3JlYXRlRGV0YWlsU2VjdGlvbigpIHtcblx0Ly8gRmlyc3QgZm9ybS1pdGVtXG5cdGNvbnN0IGV2ZW50VHlwZSA9IGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJmb3JtLWl0ZW1cIiB9LCBbXG5cdFx0ZWxGYWN0b3J5KFwibGFiZWxcIiwge1xuXHRcdFx0aHRtbEZvcjogXCJldmVudC10eXBlXCIsXG5cdFx0XHR0ZXh0Q29udGVudDogXCJUeXBlIG9mIEV2ZW50OlwiLFxuXHRcdH0pLFxuXHRcdGVsRmFjdG9yeShcImlucHV0XCIsIHtcblx0XHRcdGlkOiBcImV2ZW50LXR5cGVcIixcblx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0cGxhY2Vob2xkZXI6IFwiQmlydGhkYXksIEJ1c2luZXNzIERpbm5lciwgZXRjLlwiLFxuXHRcdFx0YXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuXHRcdH0pLFxuXHRdKTtcblxuXHQvLyBNdWx0aXBsZSBjaG9pY2UgcmFkaW8gYnV0dG9uc1xuXHRjb25zdCBsb2NhdGlvbiA9IGVsRmFjdG9yeShcImZpZWxkc2V0XCIsIHsgY2xhc3NMaXN0OiBcImxvY2F0aW9uXCIgfSwgW1xuXHRcdGVsRmFjdG9yeShcImxlZ2VuZFwiLCB7IHRleHRDb250ZW50OiBcIkxvY2F0aW9uOlwiIH0pLFxuXHRcdC4uLltcblx0XHRcdFtcImFzc2V0XCIsIFwiMzI5IENvbHVtYnVzIEF2ZS5cIl0sXG5cdFx0XHRbXCJ0ZXNzYVwiLCBcIjM0OSBBbXN0ZXJkYW0gQXZlLlwiXSxcblx0XHRdLm1hcCgocGFpcikgPT4ge1xuXHRcdFx0cmV0dXJuIGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJmb3JtLWl0ZW1cIiB9LCBbXG5cdFx0XHRcdGVsRmFjdG9yeShcImxhYmVsXCIsIHt9LCBbXG5cdFx0XHRcdFx0ZWxGYWN0b3J5KFwiaW5wdXRcIiwge1xuXHRcdFx0XHRcdFx0bmFtZTogXCJsb2NhdGlvblwiLFxuXHRcdFx0XHRcdFx0dHlwZTogXCJyYWRpb1wiLFxuXHRcdFx0XHRcdFx0dmFsdWU6IHBhaXJbMF0sXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0ZWxGYWN0b3J5KFwic3BhblwiLCB7XG5cdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogcGFpclswXS50b1VwcGVyQ2FzZSgpICsgXCIgLSBcIiArIHBhaXJbMV0sXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdF0pLFxuXHRcdFx0XSk7XG5cdFx0fSksXG5cdF0pO1xuXG5cdC8vIExhc3QgMiByb3dzIG9mIHRoaXMgc2VjdGlvblxuXHRjb25zdCBieVRoZU51bWJlcnMgPSBmb3JtUm93RmFjdG9yeShbXG5cdFx0W1wiUGFydHkgU2l6ZVwiLCBcIm51bWJlclwiLCBcIm9mZlwiXSxcblx0XHRbXCJEYXRlXCIsIFwiZGF0ZVwiLCBcIm9mZlwiXSxcblx0XHRbXCJTdGFydCBUaW1lXCIsIFwidGltZVwiLCBcIm9mZlwiXSxcblx0XHRbXCJFbmQgVGltZVwiLCBcInRpbWVcIiwgXCJvZmZcIl0sXG5cdF0pO1xuXG5cdHJldHVybiBbZXZlbnRUeXBlLCBsb2NhdGlvbiwgLi4uYnlUaGVOdW1iZXJzXTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXh0cmFzU2VjdGlvbigpIHtcblx0Ly8gMSBmb3JtLWl0ZW0gd2l0aCB0ZXh0YXJlYSBhbmQgMSB3aXRoIHNlbGVjdFxuXHRjb25zdCBbdGV4dEFyZWFJdGVtLCBzZWxlY3RJdGVtXSA9IFtcblx0XHRbXCJleHRyYS1pbmZvXCIsIFwidGV4dGFyZWFcIl0sXG5cdFx0W1wicmVmZXJyYWwtc291cmNlXCIsIFwic2VsZWN0XCJdLFxuXHRdLm1hcCgocGFpcikgPT4ge1xuXHRcdHJldHVybiBlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiZm9ybS1pdGVtXCIgfSwgW1xuXHRcdFx0ZWxGYWN0b3J5KFwibGFiZWxcIiwgeyBodG1sRm9yOiBwYWlyWzBdIH0pLFxuXHRcdFx0ZWxGYWN0b3J5KHBhaXJbMV0sIHsgbmFtZTogcGFpclswXSwgaWQ6IHBhaXJbMF0gfSksXG5cdFx0XSk7XG5cdH0pO1xuXG5cdC8vIEFkZCB0ZXh0IGNvbnRlbnQgdG8gZWFjaCA8bGFiZWw+XG5cdHRleHRBcmVhSXRlbS5jaGlsZHJlblswXS5hdHRyaWJ1dGVzLnRleHRDb250ZW50ID1cblx0XHRcIklzIHRoZXJlIGFueSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHlvdSB3b3VsZCBsaWtlIHRvIGFkZD9cIjtcblx0c2VsZWN0SXRlbS5jaGlsZHJlblswXS5hdHRyaWJ1dGVzLnRleHRDb250ZW50ID1cblx0XHRcIkhvdyBkaWQgeW91IGhlYXIgYWJvdXQgdXM/XCI7XG5cblx0Ly8gQWRkIGF0dHJpYnV0ZXMgdG8gPHRleHRhcmVhPlxuXHR0ZXh0QXJlYUl0ZW0uY2hpbGRyZW5bMV0uYXR0cmlidXRlcy5yb3dzID0gXCI2XCI7XG5cdHRleHRBcmVhSXRlbS5jaGlsZHJlblsxXS5hdHRyaWJ1dGVzLnBsYWNlaG9sZGVyID1cblx0XHRcIlN1cnByaXNlcywgRGlldGFyeSBOZWVkcywgZXRjLlwiO1xuXG5cdC8vIEFkZCA5IDxvcHRpb24+J3MgdG8gPHNlbGVjdD5cblx0Y29uc3Qgb3B0aW9uc0FycmF5ID0gW1xuXHRcdFwiRXZlbnRVcFwiLFxuXHRcdFwiSW5zdGFncmFtXCIsXG5cdFx0XCJGYWNlYm9va1wiLFxuXHRcdFwiVHJpcGxlc2VhdCBSZXN0YXVyYW50c1wiLFxuXHRcdFwiU2VhcmNoIEVuZ2luZVwiLFxuXHRcdFwiRW1haWxcIixcblx0XHRcIk90aGVyXCIsXG5cdFx0XCJXZWJzaXRlXCIsXG5cdF0ubWFwKCh0ZXh0KSA9PiB7XG5cdFx0cmV0dXJuIGVsRmFjdG9yeShcIm9wdGlvblwiLCB7XG5cdFx0XHR2YWx1ZTogdGV4dC5zcGxpdChcIiBcIilbMF0udG9Mb3dlckNhc2UoKSxcblx0XHRcdHRleHRDb250ZW50OiB0ZXh0LFxuXHRcdH0pO1xuXHR9KTtcblxuXHRzZWxlY3RJdGVtLmNoaWxkcmVuWzFdLmNoaWxkcmVuLnB1c2goXG5cdFx0ZWxGYWN0b3J5KFwib3B0aW9uXCIsIHtcblx0XHRcdHZhbHVlOiBcIlwiLFxuXHRcdFx0dGV4dENvbnRlbnQ6IFwiU2VsZWN0IGFuIG9wdGlvblwiLFxuXHRcdFx0c2VsZWN0ZWQ6IHRydWUsXG5cdFx0fSksXG5cdFx0Li4ub3B0aW9uc0FycmF5XG5cdCk7XG5cblx0cmV0dXJuIFt0ZXh0QXJlYUl0ZW0sIHNlbGVjdEl0ZW1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9ybSgpIHtcblx0Ly8gQ3JlYXRlIHNlY3Rpb25zIGNvbnRhaW5lcnMgZm9yIHRoZSBjb21wbGljYXRlZCBwYXJ0c1xuXHRjb25zdCBbZm9ybUNvbnRhY3QsIGZvcm1EZXRhaWxzLCBmb3JtRXh0cmFzXSA9IFtcblx0XHRcImZvcm0tY29udGFjdFwiLFxuXHRcdFwiZm9ybS1kZXRhaWxzXCIsXG5cdFx0XCJmb3JtLWV4dHJhc1wiLFxuXHRdLm1hcCgoZWwpID0+IHtcblx0XHRyZXR1cm4gZWxGYWN0b3J5KFwic2VjdGlvblwiLCB7IGNsYXNzTGlzdDogZWwgfSk7XG5cdH0pO1xuXG5cdGZvcm1Db250YWN0LmNoaWxkcmVuLnB1c2goXG5cdFx0ZWxGYWN0b3J5KFwiaDRcIiwgeyB0ZXh0Q29udGVudDogXCJDb250YWN0XCIgfSksXG5cdFx0Li4uZm9ybVJvd0ZhY3RvcnkoW1xuXHRcdFx0W1wiRmlyc3QgTmFtZVwiLCBcInRleHRcIiwgXCJnaXZlbi1uYW1lXCJdLFxuXHRcdFx0W1wiTGFzdCBOYW1lXCIsIFwidGV4dFwiLCBcImZhbWlseS1uYW1lXCJdLFxuXHRcdFx0W1wiRW1haWxcIiwgXCJlbWFpbFwiLCBcImVtYWlsXCJdLFxuXHRcdFx0W1wiUGhvbmVcIiwgXCJ0ZWxcIiwgXCJ0ZWxcIl0sXG5cdFx0XHRbXCJDb21wYW55XCIsIFwidGV4dFwiLCBcIm9yZ2FuaXphdGlvblwiXSxcblx0XHRdKVxuXHQpO1xuXG5cdGZvcm1EZXRhaWxzLmNoaWxkcmVuLnB1c2goXG5cdFx0ZWxGYWN0b3J5KFwiaDRcIiwgeyB0ZXh0Q29udGVudDogXCJFdmVudCBEZXRhaWxzXCIgfSksXG5cdFx0Li4uY3JlYXRlRGV0YWlsU2VjdGlvbigpXG5cdCk7XG5cblx0Zm9ybUV4dHJhcy5jaGlsZHJlbi5wdXNoKFxuXHRcdGVsRmFjdG9yeShcImg0XCIsIHsgdGV4dENvbnRlbnQ6IFwiRXh0cmFzXCIgfSksXG5cdFx0Li4uY3JlYXRlRXh0cmFzU2VjdGlvbigpXG5cdCk7XG5cblx0Ly8gQ3JlYXRlIGZvcm0gZWxlbWVudCBhbmQgb3ZlcmFyY2hpbmcgc3RydWN0dXJlXG5cdGNvbnN0IGZvcm1FbGVtZW50ID0gZWxGYWN0b3J5KFwiZm9ybVwiLCB7fSwgW1xuXHRcdGVsRmFjdG9yeShcInNlY3Rpb25cIiwgeyBjbGFzc0xpc3Q6IFwiZm9ybS1oZWFkZXJcIiB9LCBbXG5cdFx0XHRlbEZhY3RvcnkoXCJoM1wiLCB7IHRleHRDb250ZW50OiBcIkxldCdzIGdldCBzb21lIGluZm8hXCIgfSksXG5cdFx0XHRlbEZhY3RvcnkoXCJidXR0b25cIiwge1xuXHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0XHRjbGFzc0xpc3Q6IFwiY2xvc2UtbW9kYWwgY2xvc2UtYnRuXCIsXG5cdFx0XHRcdGlkOiBcImNsb3NlLW1vZGFsXCIsXG5cdFx0XHRcdHRleHRDb250ZW50OiBcIsOXXCIsXG5cdFx0XHR9KSxcblx0XHRdKSxcblx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiZm9ybS1jb250ZW50XCIgfSwgW1xuXHRcdFx0Zm9ybUNvbnRhY3QsXG5cdFx0XHRmb3JtRGV0YWlscyxcblx0XHRcdGZvcm1FeHRyYXMsXG5cdFx0XSksXG5cdFx0ZWxGYWN0b3J5KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJzdWJtaXRcIiwgdGV4dENvbnRlbnQ6IFwiU3VibWl0XCIgfSksXG5cdF0pO1xuXHRyZXR1cm4gZm9ybUVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBlbEZhY3RvcnksIGh0bWxGYWN0b3J5IH0gZnJvbSBcIi4vZG9tLWZhY3Rvcmllcy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRIb21lKCkge1xuXHRjb25zdCBoZXJvVGV4dCA9IGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJoZXJvLXRleHRcIiB9LCBbXG5cdFx0ZWxGYWN0b3J5KFwiaDFcIiwgeyBjbGFzc0xpc3Q6IFwiYnJhbmRcIiwgdGV4dENvbnRlbnQ6IFwiQUVcIiB9KSxcblx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwicmVzZXJ2YXRpb25zXCIgfSwgW1xuXHRcdFx0ZWxGYWN0b3J5KFwiYVwiLCB7XG5cdFx0XHRcdGhyZWY6IFwiaHR0cHM6Ly9yZXN5LmNvbS9jaXRpZXMvbnkvYXNzZXRcIixcblx0XHRcdFx0dGV4dENvbnRlbnQ6IFwicmVzZXJ2YXRpb25zXCIsXG5cdFx0XHR9KSxcblx0XHRdKSxcblx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwic2Nyb2xsLWRvd25cIiB9LCBbXG5cdFx0XHRlbEZhY3RvcnkoXCJhXCIsIHsgaHJlZjogXCIjaG91cnNcIiB9LCBbXG5cdFx0XHRcdGVsRmFjdG9yeShcImlcIiwge1xuXHRcdFx0XHRcdGNsYXNzTGlzdDogXCJmYSBmYS1hbmdsZS1kb3duXCIsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XSksXG5cdFx0XSksXG5cdF0pO1xuXG5cdGNvbnN0IGxhbnRlcm5zID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImxhbnRlcm5zXCIgfSk7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0bGFudGVybnMuY2hpbGRyZW4ucHVzaChcblx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJsYW50ZXJuXCIgfSwgW1xuXHRcdFx0XHQuLi5bXCJ0b3BcIiwgXCJib2R5XCIsIFwiYm90dG9tXCJdLm1hcCgodGV4dCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBlbEZhY3RvcnkoXCJkaXZcIiwge1xuXHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiB0ZXh0LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KSxcblx0XHRcdF0pXG5cdFx0KTtcblx0fVxuXG5cdGNvbnN0IGhvdXJzRGV0YWlscyA9IFtcblx0XHR7XG5cdFx0XHRzY2hlZHVsZTogXCJvcGVyYXRpbmcgaG91cnNcIixcblx0XHRcdGhvdXJzVGV4dDoge1xuXHRcdFx0XHRcIm1vbmRheS1mcmlkYXlcIjogXCI0cG0tMTFwbVwiLFxuXHRcdFx0XHRzYXR1cmRheTogXCIycG0tMmFtXCIsXG5cdFx0XHRcdHN1bmRheTogXCIycG0tMTBwbVwiLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNjaGVkdWxlOiBcImRpbm5lciBob3Vyc1wiLFxuXHRcdFx0aG91cnNUZXh0OiB7XG5cdFx0XHRcdFwibW9uZGF5LXRodXJzZGF5XCI6IFwiNXBtLTEwcG1cIixcblx0XHRcdFx0ZnJpZGF5OiBcIjVwbS0xMXBtXCIsXG5cdFx0XHRcdHNhdHVyZGF5OiBcIjJwbS0xMXBtXCIsXG5cdFx0XHRcdHN1bmRheTogXCIycG0tOXBtXCIsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2NoZWR1bGU6IFwiaGFwcHkgaG91clwiLFxuXHRcdFx0aG91cnNUZXh0OiB7XG5cdFx0XHRcdFwibW9uZGF5LWZyaWRheVwiOiBcIjRwbS02cG1cIixcblx0XHRcdFx0c2F0dXJkYXk6IFwiMTBwbS0xMmFtXCIsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdF07XG5cblx0Y29uc3QgaG91cnNEaXZzID0gaG91cnNEZXRhaWxzLm1hcCgoaG91cnNPYmplY3QpID0+IHtcblx0XHRyZXR1cm4gZWxGYWN0b3J5KFxuXHRcdFx0XCJkaXZcIixcblx0XHRcdHtcblx0XHRcdFx0Y2xhc3NMaXN0OiBob3Vyc09iamVjdC5zY2hlZHVsZS5zcGxpdChcIiBcIikuam9pbihcIi1cIiksXG5cdFx0XHR9LFxuXHRcdFx0W1xuXHRcdFx0XHRlbEZhY3RvcnkoXCJoMlwiLCB7IHRleHRDb250ZW50OiBob3Vyc09iamVjdC5zY2hlZHVsZSArIFwiOlwiIH0pLFxuXHRcdFx0XHQuLi5PYmplY3QuZW50cmllcyhob3Vyc09iamVjdC5ob3Vyc1RleHQpLm1hcCgoZW50cnkpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gZWxGYWN0b3J5KFwicFwiLCB7XG5cdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogYCR7ZW50cnlbMF19OiAke2VudHJ5WzFdfSBgLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KSxcblx0XHRcdF1cblx0XHQpO1xuXHR9KTtcblxuXHRjb25zdCBob21lRGl2ID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImhvbWUgZHluYW1pY1wiIH0sIFtcblx0XHRlbEZhY3RvcnkoXCJzZWN0aW9uXCIsIHsgY2xhc3NMaXN0OiBcImhlcm9cIiB9LCBbXG5cdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiYXJ0XCIgfSksXG5cdFx0XHRoZXJvVGV4dCxcblx0XHRcdGxhbnRlcm5zLFxuXHRcdF0pLFxuXHRcdGVsRmFjdG9yeShcInNlY3Rpb25cIiwgeyBjbGFzc0xpc3Q6IFwiaG91cnMtY29udGFpbmVyXCIgfSwgW1xuXHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImhvdXJzXCIsIGlkOiBcImhvdXJzXCIgfSwgaG91cnNEaXZzKSxcblx0XHRdKSxcblx0XSk7XG5cdHJldHVybiBodG1sRmFjdG9yeShob21lRGl2KTtcbn1cbiIsImltcG9ydCB7IGVsRmFjdG9yeSwgaHRtbEZhY3RvcnkgfSBmcm9tIFwiLi9kb20tZmFjdG9yaWVzLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZE1lbnUoKSB7XG5cdGNvbnN0IGRpbm5lckxpbmsgPVxuXHRcdFwiaHR0cHM6Ly93d3cuYXNzZXRyZXN0YXVyYW50LmNvbS9fZmlsZXMvdWdkLzU0YTRjZF8zYTdhMGE1NWFlNzQ0ZmNlYWVjODUzYmMwYjE5YzdiMi5wZGZcIjtcblx0Y29uc3Qgd2luZUxpbmsgPVxuXHRcdFwiaHR0cHM6Ly93d3cuYXNzZXRyZXN0YXVyYW50LmNvbS9fZmlsZXMvdWdkLzU0YTRjZF8zODFlNTBkZTY5YWM0YjNkYWU1ZjgwNTUxM2MzMzRkNi5wZGZcIjtcblxuXHRyZXR1cm4gaHRtbEZhY3RvcnkoXG5cdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcIm1lbnUgZHluYW1pY1wiIH0sIFtcblx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJtZW51LWFydFwiIH0pLFxuXHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcIm1lbnUtdGV4dFwiIH0sIFtcblx0XHRcdFx0Li4uW1wiZGlubmVyXCIsIFwid2luZVwiXS5tYXAoKHRleHQpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gZWxGYWN0b3J5KFwiYVwiLCB7XG5cdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogdGV4dCxcblx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJtZW51LWxpbmtcIixcblx0XHRcdFx0XHRcdGhyZWY6IHRleHQgPT09IFwiZGlubmVyXCIgPyBkaW5uZXJMaW5rIDogd2luZUxpbmssXG5cdFx0XHRcdFx0XHR0YXJnZXQ6IFwiX2JsYW5rXCIsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRlbEZhY3RvcnkoXCJoMVwiLCB7IGNsYXNzTGlzdDogXCJicmFuZFwiLCB0ZXh0Q29udGVudDogXCJBRVwiIH0pLFxuXHRcdFx0XSksXG5cdFx0XSlcblx0KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGJ1aWxkTWVudSB9IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCB7IGJ1aWxkSG9tZSB9IGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCB7IGJ1aWxkRXZlbnRzLCBsaXN0ZW5Gb3JDbGlja3MgfSBmcm9tIFwiLi9ldmVudC5qc1wiO1xuaW1wb3J0IHsgYnVpbGRBYm91dFVzIH0gZnJvbSBcIi4vYWJvdXQtdXMuanNcIjtcbmltcG9ydCB7IGJ1aWxkQ29uc3RhbnRzIH0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9yZWJvb3QtdXRpbC5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL2NvbnN0YW50cy5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL2hvbWUuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9tZW51LmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvZXZlbnRzLmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvYWJvdXQuY3NzXCI7XG5cbmNvbnN0IGFsbENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC1jb250ZW50XCIpO1xuYWxsQ29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5bLi4uYnVpbGRDb25zdGFudHMoKV0uZm9yRWFjaCgoc2VjdGlvbikgPT4gYWxsQ29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uKSk7XG5cbmNvbnN0IGNoYW5naW5nQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhbmdpbmctY29udGVudFwiKTtcbmNoYW5naW5nQ29udGVudC5hcHBlbmRDaGlsZChidWlsZEhvbWUoKSk7XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXItdG9nZ2xlclwiKS5mb3JFYWNoKChidXR0b24pID0+IHtcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0c2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcblx0fSk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYnRuXCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0aGFuZGxlQnVpbGRDbGljayhlLnRhcmdldC5pZCk7XG5cdH0pO1xufSk7XG5cbmZ1bmN0aW9uIGhhbmRsZUJ1aWxkQ2xpY2sodGFiQ2hvaWNlKSB7XG5cdGNoYW5naW5nQ29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cdGNoYW5naW5nQ29udGVudC5hcHBlbmRDaGlsZChcblx0XHR7XG5cdFx0XHRcImhvbWUtYnRuXCI6IGJ1aWxkSG9tZSgpLFxuXHRcdFx0XCJldmVudHMtYnRuXCI6IGJ1aWxkRXZlbnRzKCksXG5cdFx0XHRcIm1lbnUtYnRuXCI6IGJ1aWxkTWVudSgpLFxuXHRcdFx0XCJhYm91dC1idG5cIjogYnVpbGRBYm91dFVzKCksXG5cdFx0fVt0YWJDaG9pY2VdXG5cdCk7XG5cdHNpZGViYXIuY2xhc3NMaXN0ID0gXCJzaWRlYmFyXCI7XG5cdGlmICh0YWJDaG9pY2UgPT09IFwiZXZlbnRzLWJ0blwiKSB7XG5cdFx0bGlzdGVuRm9yQ2xpY2tzKCk7XG5cdH1cbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRoYW5kbGVCdWlsZENsaWNrKFwiYWJvdXQtYnRuXCIpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=