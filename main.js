/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ---------------     CONTENT     --------------- */

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

/* ---------------     Home     --------------- */

.home {
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

/* ---------------     /Home     --------------- */

/* ---------------     Menu     --------------- */

.menu {
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

/* ---------------     /Menu     --------------- */

/* ---------------     Events     --------------- */

.events .content {
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
/* ---------------     /Events     --------------- */
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

	& .address {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}

	@media (min-width: 700px) {
		flex-direction: row;
		align-items: center;

		& .socials {
			display: flex;
		}

		& .address {
			align-items: end;
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
/* ---------------     /CONTENT     --------------- */
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* ---------------     CONTENT     --------------- */\n\n/* ---------------     Sidebar     --------------- */\n\n.sidebar {\n\tposition: fixed;\n\tz-index: 1;\n\theight: 100%;\n\twidth: 0px;\n\tpadding: 20px 0;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\toverflow-x: hidden;\n\n\tbackground-color: var(--bg-main);\n\tfont-size: 40px;\n\tbox-shadow: 0px 0px 7px var(--accent-main-dark);\n\n\ttransition: 0.5s;\n\n\t&.open {\n\t\twidth: 300px;\n\t\tpadding: 20px;\n\t}\n\n\t#close-sidebar {\n\t\talign-self: end;\n\t}\n\n\t@media (min-width: 700px) {\n\t\twidth: 100%;\n\t\tposition: static;\n\n\t\tbox-shadow: 0px 0px 5px var(--accent-main-dark);\n\t\tborder: none;\n\n\t\t&.open {\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t#close-sidebar {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n}\n\n.close-btn {\n\t--font-size: 50px;\n\n\tfont-size: var(--font-size);\n\tline-height: calc(var(--font-size) * 0.6);\n}\n\nnav {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 1;\n\tgap: 50px;\n\n\t& button {\n\t\ttext-align: left;\n\t\tmargin-left: 22px;\n\t}\n\n\t& button:hover {\n\t\tcolor: var(--text-h1);\n\t}\n\n\t@media (min-width: 700px) {\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\t}\n}\n\nheader {\n\tpadding-right: 20px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\n\tbox-shadow: 0px 0px 5px var(--accent-main-dark);\n\tfont-size: 24px;\n\n\t#open-sidebar {\n\t\tpadding: 15px;\n\t\tbackground-color: black;\n\t}\n\n\t& .socials {\n\t\tdisplay: flex;\n\t}\n\n\t@media (min-width: 700px) {\n\t\tdisplay: none;\n\t}\n}\n\n/* ---------------     /Sidebar     --------------- */\n\n/* ---------------     Main     --------------- */\n\n#changing-content {\n\tmargin-bottom: calc(var(--footer-height) * 2);\n\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n/* ---------------     Home     --------------- */\n\n.home {\n\tmargin-top: 20px;\n\n\t& h2 {\n\t\tcolor: var(--text-h1);\n\t}\n\n\t@media (min-width: 700px) {\n\t\tmargin-top: 0;\n\t}\n}\n\n.hero {\n\tposition: relative;\n\theight: calc(100svh - 80px);\n\twidth: 90%;\n\tmargin: auto;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\n\t@media (min-width: 700px) {\n\t\t--art-width: min(190px, 20%);\n\t\twidth: min(90%, 1300px);\n\t\tmargin: auto;\n\t\tjustify-content: space-between;\n\t\theight: calc(100svh - 100px);\n\t}\n}\n\n.art {\n\theight: 68%;\n\twidth: var(--art-width);\n\n\tbackground-image: url(https://static.wixstatic.com/media/54a4cd_5059116c59d244d08c3170b49d6e7b0f~mv2.jpg/v1/fill/w_546,h_728,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_5059116c59d244d08c3170b49d6e7b0f~mv2.jpg);\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\n\t@media screen and (min-width: 700px) {\n\t\theight: 80%;\n\n\t\tbackground-image: url(https://static.wixstatic.com/media/54a4cd_ae5e22486dbb49debb9cd8ba1b780b6e~mv2.jpg/v1/fill/w_388,h_1240,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Artwork1_Final_8x2_5.jpg);\n\t}\n}\n\n.hero-text {\n\tposition: absolute;\n\tbottom: 90px;\n\n\tdisplay: grid;\n\tgap: 35px;\n\n\t& h1 {\n\t\t--font-size: min(50vw, 300px);\n\t}\n\n\t@media (min-width: 700px) {\n\t\tposition: static;\n\t\tplace-content: center;\n\t\tgap: 60px;\n\t}\n}\n\n.reservations {\n\tcolor: #ffe5e5;\n\tfont-size: 20px;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tletter-spacing: 2px;\n\ttext-decoration: underline 1px;\n\ttext-underline-offset: 2px;\n}\n\n.scroll-down {\n\tdisplay: grid;\n\tplace-content: center;\n\tcolor: var(--text-h1);\n\n\t& .fa-angle-down {\n\t\tmargin-top: 10px;\n\t\tline-height: 16px;\n\t\tfont-size: 70px;\n\t\tanimation: bounce 2s infinite;\n\t}\n}\n\n@keyframes bounce {\n\t0% {\n\t\ttransform: translateY(0);\n\t}\n\t50% {\n\t\ttransform: translateY(30px);\n\t}\n\t100% {\n\t\ttransform: translateY(0);\n\t}\n}\n\n.lanterns {\n\tdisplay: none;\n\twidth: var(--art-width);\n\theight: 80%;\n\n\t@media (min-width: 700px) {\n\t\tdisplay: grid;\n\t}\n}\n\n.lantern {\n\t--caps-width: 50px;\n\t--caps-height: 20px;\n\n\tdisplay: grid;\n\talign-content: center;\n\tjustify-items: center;\n\n\t& .top,\n\t& .bottom {\n\t\tposition: relative;\n\t\twidth: var(--caps-width);\n\t\theight: var(--caps-height);\n\n\t\tbackground-color: black;\n\t}\n\n\t& .top {\n\t\tbottom: -5px;\n\t\tborder-radius: 80% 80% 0 0;\n\t}\n\n\t& .bottom {\n\t\ttop: -5px;\n\t\tborder-radius: 0 0 80% 80%;\n\t}\n\n\t& .body {\n\t\tz-index: 1;\n\t\theight: 130px;\n\t\twidth: 80%;\n\n\t\tborder-radius: 85px;\n\t\tborder: 1px solid var(--accent-main-dark);\n\t\tbackground-color: var(--bg-main);\n\t\tbackground: repeating-linear-gradient(\n\t\t\tvar(--bg-lantern),\n\t\t\tvar(--bg-lantern) 19%,\n\t\t\tvar(--accent-main-dark) 20%\n\t\t);\n\t}\n\n\t& .body:hover {\n\t\tbackground: radial-gradient(rgba(245, 205, 84, 0.7), transparent 80%),\n\t\t\trepeating-linear-gradient(\n\t\t\t\tvar(--bg-lantern),\n\t\t\t\tvar(--bg-lantern) 19%,\n\t\t\t\tvar(--accent-main-dark) 20%\n\t\t\t);\n\t}\n\n\t& > * {\n\t\tbox-shadow: 3px 3px 6px -3px #8a0f0f;\n\t}\n}\n\n.hours-container {\n\tpadding: 20px;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\n\tborder-top: 2px solid hsl(0, 95%, 70%);\n}\n\n.hours {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 30px;\n\n\t& > div {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tgap: 8px;\n\t}\n\n\t@media (min-width: 700px) {\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\t\twidth: 650px;\n\t\tflex-wrap: wrap;\n\t\tgap: 70px;\n\t}\n}\n\n/* ---------------     /Home     --------------- */\n\n/* ---------------     Menu     --------------- */\n\n.menu {\n\tmargin-top: 5px;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\n\t@media (min-width: 700px) {\n\t\tflex-direction: row;\n\t\tmargin: 10px 20px;\n\t}\n}\n\n.menu-art {\n\theight: 550px;\n\twidth: min(100vw, 400px);\n\tmargin: auto;\n\n\tbackground-image: url(https://static.wixstatic.com/media/54a4cd_b8c9537c5fcd4d859fc958942b5a5e87~mv2.jpg/v1/fill/w_952,h_1322,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_b8c9537c5fcd4d859fc958942b5a5e87~mv2.jpg);\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\n\t@media (min-width: 700px) {\n\t\tmargin: 0;\n\t\theight: calc(100vh - var(--footer-height) * 2.5);\n\t\twidth: min(600px, 50vw);\n\t}\n}\n\n.menu-text {\n\tmargin: -95px 0 40px;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 15px;\n\n\t& > * {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tbackground-color: var(--bg-main);\n\t}\n\n\t& a {\n\t\tpadding: 8px 0;\n\t\ttext-transform: uppercase;\n\t\tfont-size: 30px;\n\t\tletter-spacing: 3px;\n\t}\n\n\t& a:hover {\n\t\tbox-shadow: 0 0 0 1px white;\n\t}\n\n\t@media (min-width: 700px) {\n\t\tmargin: 0 -61px 0;\n\t}\n}\n\n/* ---------------     /Menu     --------------- */\n\n/* ---------------     Events     --------------- */\n\n.events .content {\n\twidth: 90%;\n\tmargin: auto;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 20px;\n\n\t& .art {\n\t\theight: 160px;\n\t\tbackground-position: bottom;\n\t}\n\n\t& .text {\n\t\tmargin: 20px 0;\n\t\tmax-width: 65ch;\n\t}\n\n\t& h1 {\n\t\tfont-size: 30px;\n\t}\n\n\t& h2 {\n\t\tmargin: 30px 0 16px;\n\t}\n\n\t& p {\n\t\tmargin-bottom: 20px;\n\t\tfont-size: 18px;\n\t\tline-height: 1.5;\n\t\tletter-spacing: 1px;\n\t}\n\n\t& p:nth-last-child(2) {\n\t\twidth: min(100%, 440px);\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tjustify-content: space-between;\n\t\tgap: 2px;\n\t}\n\n\t@media (min-width: 700px) {\n\t\t--art-width: min(300px, 30%);\n\n\t\theight: calc(960px - 8vw);\n\t\twidth: min(90%, 1100px);\n\n\t\tflex-direction: row-reverse;\n\t\talign-items: stretch;\n\t\tjustify-content: space-between;\n\n\t\t& .art {\n\t\t\tflex-shrink: 0;\n\t\t\theight: 100%;\n\t\t\tbackground-position: center;\n\t\t}\n\n\t\t& .call-to-action {\n\t\t\talign-items: start;\n\t\t\tpadding: 40px 0;\n\t\t}\n\t}\n}\n\n.photos {\n\tbackground-color: black;\n}\n\n.tier {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t& .image-container {\n\t\tflex-grow: 1;\n\t}\n\n\t& img {\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\tobject-fit: cover;\n\t}\n\n\t@media (min-width: 700px) {\n\t\twidth: 100%;\n\t\tflex-direction: row;\n\t}\n}\n\n.events .call-to-action {\n\tpadding: 90px 0;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 24px;\n\n\t& p {\n\t\tfont-size: 20px;\n\t\tmargin: 0;\n\t}\n\n\t& button {\n\t\tpadding: 20px;\n\n\t\tborder: 1px solid white;\n\t\tborder-radius: 5px;\n\n\t\tfont-size: 18px;\n\t\ttext-transform: uppercase;\n\n\t\ttransition: all 0.3s;\n\t}\n\n\t& button:hover {\n\t\tbackground-color: #fff;\n\t\tcolor: var(--bg-main);\n\t}\n}\n\n/* ---------------     Modal     --------------- */\n\n.modal {\n\tposition: fixed;\n\ttop: 0;\n\tz-index: 2;\n\theight: 100vh;\n\twidth: 100vw;\n\n\tdisplay: grid;\n\tplace-content: center;\n\n\tbackground-color: rgba(200, 200, 200, 0.5);\n\tbackdrop-filter: blur(2px);\n}\n\nform {\n\t--form-spacer: 12px;\n\n\tmax-height: 80vh;\n\tpadding: 12px;\n\twidth: min(90vw, 1000px);\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--form-spacer);\n\n\tbackground-color: skyblue;\n\tcolor: #000;\n\tborder-radius: 15px;\n}\n\n.form-header {\n\tmargin: 0;\n\tpadding-left: 2px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.form-content {\n\tpadding: var(--form-spacer);\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: calc(var(--form-spacer) * 2.5);\n\toverflow-y: scroll;\n\n\tborder: 1px solid var(--border-input);\n\tborder-radius: 5px;\n\n\t@media (min-width: 800px) {\n\t\tflex-direction: row;\n\t\tjustify-content: space-between;\n\t\toverflow-y: auto;\n\t}\n}\n\n.form-content h4 {\n\tfont-size: 20px;\n}\n\n.form-contact,\n.form-details,\n.form-extras {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--form-spacer);\n}\n\n.form-row {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: var(--form-spacer);\n}\n\n.form-item {\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: calc(var(--form-spacer) * 0.5);\n}\n\n.form-details .form-row .form-item {\n\twidth: 47%;\n}\n\ninput,\ntextarea {\n\tappearance: none;\n}\n\ninput,\ntextarea,\nselect {\n\tpadding: 6px 10px;\n\n\tfont-size: max(16px, 0.9rem);\n\tbackground-color: var(--bg-input);\n\tborder: 1px solid var(--border-input);\n\tborder-radius: 5px;\n}\n\nfieldset {\n\tpadding: 8px 8px 10px;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: calc(var(--form-spacer) * 0.8);\n\n\tborder: 1px solid var(--border-input);\n}\n\nlegend {\n\tpadding: 5px 8px;\n\tborder: 1px solid var(--border-input);\n}\n\nlabel input[type=\"radio\"] {\n\tdisplay: none;\n}\nlabel input[type=\"radio\"] ~ span {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 6px;\n}\nlabel input[type=\"radio\"] ~ span:before {\n\t--radio-dimensions: 15px;\n\n\theight: var(--radio-dimensions);\n\twidth: var(--radio-dimensions);\n\n\tcontent: \"\";\n\tbackground: var(--bg-input);\n\tmargin-right: 5px;\n\n\tborder: 1px solid var(--border-input);\n\tborder-radius: var(--radio-dimensions);\n\ttransition: all 300ms ease-in-out;\n}\n\nlabel input[type=\"radio\"]:checked ~ span:before {\n\tborder: 5px solid var(--bg-main);\n}\n\ntextarea {\n\tresize: vertical;\n}\n\nform [type=\"submit\"] {\n\talign-self: center;\n\tpadding: 12px;\n\twidth: min(100%, 280px);\n\n\tbackground-color: var(--text-h1);\n\tborder-radius: 200px;\n\n\tfont-size: 1.5rem;\n\ttext-transform: uppercase;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\n\t&:hover {\n\t\tbox-shadow: inset 0 0 10px #916f08;\n\t}\n}\n\n/* ---------------     /Modal     --------------- */\n/* ---------------     /Events     --------------- */\n/* ---------------     /Main     --------------- */\n\n/* ---------------     Footer     --------------- */\n\nfooter {\n\tposition: fixed;\n\tbottom: 0;\n\tmin-height: var(--footer-height);\n\twidth: 100%;\n\tpadding: 10px 20px;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\n\tbox-shadow: 0px 0px 5px var(--accent-main-dark);\n\tbackground-color: var(--bg-main);\n\n\t& > * {\n\t\tflex: 1;\n\t}\n\n\t& .socials {\n\t\tdisplay: none;\n\t}\n\n\t& .author {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tgap: 10px;\n\n\t\ttext-align: center;\n\t\tfont-size: 20px;\n\t\tcolor: var(--text-strong);\n\t}\n\n\t& .address {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tgap: 8px;\n\t}\n\n\t@media (min-width: 700px) {\n\t\tflex-direction: row;\n\t\talign-items: center;\n\n\t\t& .socials {\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\t& .address {\n\t\t\talign-items: end;\n\t\t}\n\t}\n}\n\n.fa.fa-github {\n\tcolor: currentColor;\n\tfont-size: 30px;\n\n\t&:hover {\n\t\ttransition: transform 0.4s ease-in-out;\n\t\ttransform: rotate(-360deg) scale(1.3);\n\t}\n}\n/* ---------------     /Footer     --------------- */\n/* ---------------     /CONTENT     --------------- */\n"],"sourceRoot":""}]);
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

	background-color: var(--bg-main);
	color: #fff;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
		sans-serif;
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
`, "",{"version":3,"sources":["webpack://./src/styles/reboot-util.css"],"names":[],"mappings":"AAAA,mDAAmD;;AAEnD;;;CAGC,SAAS;CACT,UAAU;CACV,sBAAsB;AACvB;;AAEA;CACC,eAAe;CACf,uBAAuB;CACvB,YAAY;CACZ,YAAY;CACZ,gBAAgB;AACjB;;AAEA;CACC,YAAY;CACZ,qBAAqB;AACtB;;AAEA;;CAEC,mBAAmB;AACpB;;AAEA,oDAAoD;AACpD,mEAAmE;;AAEnE;CACC,kBAAkB;CAClB,2BAA2B;CAC3B,qBAAqB;CACrB,kBAAkB;CAClB,iBAAiB;CACjB,qBAAqB;;CAErB,qBAAqB;CACrB,iBAAiB;;CAEjB,uBAAuB;AACxB;;AAEA;CACC,kBAAkB;;CAElB,gCAAgC;CAChC,WAAW;CACX;;YAEW;AACZ;;AAEA;CACC,kBAAkB;;CAElB,qBAAqB;CACrB,0BAA0B;CAC1B,2BAA2B;CAC3B,yCAAyC;AAC1C;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,SAAS;CACT,eAAe;AAChB;;AAEA;CACC,8BAA8B;CAC9B,0BAA0B;AAC3B;;AAEA,oEAAoE","sourcesContent":["/* ---------------     Reboot     --------------- */\n\n*,\n*::before,\n*::after {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nbutton {\n\tcursor: pointer;\n\tbackground-color: unset;\n\tcolor: unset;\n\tborder: none;\n\tfont-size: unset;\n}\n\na {\n\tcolor: unset;\n\ttext-decoration: none;\n}\n\nh1,\nh2 {\n\tfont-weight: normal;\n}\n\n/* ---------------     /Reboot     --------------- */\n/* ---------------     Utilities & Universals     --------------- */\n\n:root {\n\t--bg-main: #ff4040;\n\t--accent-main-dark: #3d0000;\n\t--bg-lantern: #e83030;\n\t--text-h1: #f5ce54;\n\t--bg-input: white;\n\t--border-input: black;\n\n\t--footer-height: 50px;\n\t--art-width: 100%;\n\n\tscroll-behavior: smooth;\n}\n\nbody {\n\tmin-height: 101svh;\n\n\tbackground-color: var(--bg-main);\n\tcolor: #fff;\n\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n\t\tRoboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n}\n\nh1.brand {\n\t--font-size: 110px;\n\n\tcolor: var(--text-h1);\n\ttext-shadow: 0 0 5px black;\n\tfont-size: var(--font-size);\n\tline-height: calc(var(--font-size) * 0.8);\n}\n\n.hidden {\n\tdisplay: none !important;\n}\n\n.socials {\n\tgap: 10px;\n\tfont-size: 25px;\n}\n\na.underline {\n\ttext-decoration: underline 1px;\n\ttext-underline-offset: 3px;\n}\n\n/* ---------------     /Utilities & Universals     --------------- */\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
		(0,_dom_factories__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "address", textContent: "" }, [
			(0,_dom_factories__WEBPACK_IMPORTED_MODULE_0__.elFactory)("a", {
				classList: "underline",
				href: "https://goo.gl/maps/1bbNQt1JpWeHJ7hb9",
				textContent: "329 Columbus Ave, NYC",
			}),
			(0,_dom_factories__WEBPACK_IMPORTED_MODULE_0__.elFactory)("a", {
				classList: "underline",
				href: "tel:+1-212-517-1987",
				textContent: "+1 212 517 1987",
			}),
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _styles_reboot_util_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/reboot-util.css */ "./src/styles/reboot-util.css");








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

document.querySelectorAll(".nav-btn").forEach((button) => {
	button.addEventListener("click", (e) => {
		handleBuildClick(e.target.id);
	});
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdGQUF3RixjQUFjLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsWUFBWSxjQUFjLGFBQWEsV0FBVyxhQUFhLGNBQWMsTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLFlBQVksS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxNQUFNLEtBQUssYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFdBQVcsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxjQUFjLGFBQWEsWUFBWSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sYUFBYSxjQUFjLE1BQU0sYUFBYSxXQUFXLFlBQVksT0FBTyxhQUFhLE1BQU0sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsV0FBVyxVQUFVLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsTUFBTSxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxZQUFZLFVBQVUsV0FBVyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFlBQVksS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksY0FBYyxPQUFPLFlBQVksYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxTQUFTLEtBQUssTUFBTSxLQUFLLFNBQVMsS0FBSyxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLE1BQU0sYUFBYSxjQUFjLE1BQU0sV0FBVyxVQUFVLFlBQVksY0FBYyxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksWUFBWSxZQUFZLGFBQWEsY0FBYyxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLGFBQWEsV0FBVyxZQUFZLFlBQVksS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sYUFBYSxjQUFjLE1BQU0sVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLFlBQVksS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsWUFBWSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxZQUFZLGNBQWMsV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLGFBQWEsV0FBVyxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLGNBQWMsTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFP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QUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0wsSUFBSSw0REFBUyxTQUFTLHVDQUF1QztBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNDO0FBQ0E7QUFDb0I7QUFDYjtBQUNHO0FBQzNCO0FBQ2E7O0FBRWxDO0FBQ0E7QUFDQSxJQUFJLDZEQUFjOztBQUVsQjtBQUNBLDRCQUE0QixtREFBUzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbURBQVM7QUFDeEIsaUJBQWlCLHNEQUFXO0FBQzVCLGVBQWUsbURBQVM7QUFDeEIsZ0JBQWdCLDBEQUFZO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFLDBEQUFlO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9zdHlsZXMvcmVib290LXV0aWwuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9zdHlsZXMvcmVib290LXV0aWwuY3NzP2IzOTciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvYWJvdXQtdXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvZG9tLWZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiAtLS0tLS0tLS0tLS0tLS0gICAgIENPTlRFTlQgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFNpZGViYXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uc2lkZWJhciB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0ei1pbmRleDogMTtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMHB4O1xuXHRwYWRkaW5nOiAyMHB4IDA7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0b3ZlcmZsb3cteDogaGlkZGVuO1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLW1haW4pO1xuXHRmb250LXNpemU6IDQwcHg7XG5cdGJveC1zaGFkb3c6IDBweCAwcHggN3B4IHZhcigtLWFjY2VudC1tYWluLWRhcmspO1xuXG5cdHRyYW5zaXRpb246IDAuNXM7XG5cblx0Ji5vcGVuIHtcblx0XHR3aWR0aDogMzAwcHg7XG5cdFx0cGFkZGluZzogMjBweDtcblx0fVxuXG5cdCNjbG9zZS1zaWRlYmFyIHtcblx0XHRhbGlnbi1zZWxmOiBlbmQ7XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRwb3NpdGlvbjogc3RhdGljO1xuXG5cdFx0Ym94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tYWNjZW50LW1haW4tZGFyayk7XG5cdFx0Ym9yZGVyOiBub25lO1xuXG5cdFx0Ji5vcGVuIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdH1cblxuXHRcdCNjbG9zZS1zaWRlYmFyIHtcblx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0fVxuXHR9XG59XG5cbi5jbG9zZS1idG4ge1xuXHQtLWZvbnQtc2l6ZTogNTBweDtcblxuXHRmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG5cdGxpbmUtaGVpZ2h0OiBjYWxjKHZhcigtLWZvbnQtc2l6ZSkgKiAwLjYpO1xufVxuXG5uYXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4OiAxO1xuXHRnYXA6IDUwcHg7XG5cblx0JiBidXR0b24ge1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0bWFyZ2luLWxlZnQ6IDIycHg7XG5cdH1cblxuXHQmIGJ1dHRvbjpob3ZlciB7XG5cdFx0Y29sb3I6IHZhcigtLXRleHQtaDEpO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0fVxufVxuXG5oZWFkZXIge1xuXHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cblx0Ym94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tYWNjZW50LW1haW4tZGFyayk7XG5cdGZvbnQtc2l6ZTogMjRweDtcblxuXHQjb3Blbi1zaWRlYmFyIHtcblx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXHR9XG5cblx0JiAuc29jaWFscyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvU2lkZWJhciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbiNjaGFuZ2luZy1jb250ZW50IHtcblx0bWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1mb290ZXItaGVpZ2h0KSAqIDIpO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgSG9tZSAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi5ob21lIHtcblx0bWFyZ2luLXRvcDogMjBweDtcblxuXHQmIGgyIHtcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1oMSk7XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0XHRtYXJnaW4tdG9wOiAwO1xuXHR9XG59XG5cbi5oZXJvIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRoZWlnaHQ6IGNhbGMoMTAwc3ZoIC0gODBweCk7XG5cdHdpZHRoOiA5MCU7XG5cdG1hcmdpbjogYXV0bztcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0XHQtLWFydC13aWR0aDogbWluKDE5MHB4LCAyMCUpO1xuXHRcdHdpZHRoOiBtaW4oOTAlLCAxMzAwcHgpO1xuXHRcdG1hcmdpbjogYXV0bztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0aGVpZ2h0OiBjYWxjKDEwMHN2aCAtIDEwMHB4KTtcblx0fVxufVxuXG4uYXJ0IHtcblx0aGVpZ2h0OiA2OCU7XG5cdHdpZHRoOiB2YXIoLS1hcnQtd2lkdGgpO1xuXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzU0YTRjZF81MDU5MTE2YzU5ZDI0NGQwOGMzMTcwYjQ5ZDZlN2IwZn5tdjIuanBnL3YxL2ZpbGwvd181NDYsaF83MjgsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMSxlbmNfYXV0by81NGE0Y2RfNTA1OTExNmM1OWQyNDRkMDhjMzE3MGI0OWQ2ZTdiMGZ+bXYyLmpwZyk7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdGhlaWdodDogODAlO1xuXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkX2FlNWUyMjQ4NmRiYjQ5ZGViYjljZDhiYTFiNzgwYjZlfm12Mi5qcGcvdjEvZmlsbC93XzM4OCxoXzEyNDAsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMSxlbmNfYXV0by9BcnR3b3JrMV9GaW5hbF84eDJfNS5qcGcpO1xuXHR9XG59XG5cbi5oZXJvLXRleHQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogOTBweDtcblxuXHRkaXNwbGF5OiBncmlkO1xuXHRnYXA6IDM1cHg7XG5cblx0JiBoMSB7XG5cdFx0LS1mb250LXNpemU6IG1pbig1MHZ3LCAzMDBweCk7XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0XHRwb3NpdGlvbjogc3RhdGljO1xuXHRcdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRnYXA6IDYwcHg7XG5cdH1cbn1cblxuLnJlc2VydmF0aW9ucyB7XG5cdGNvbG9yOiAjZmZlNWU1O1xuXHRmb250LXNpemU6IDIwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0bGV0dGVyLXNwYWNpbmc6IDJweDtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMXB4O1xuXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDJweDtcbn1cblxuLnNjcm9sbC1kb3duIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0cGxhY2UtY29udGVudDogY2VudGVyO1xuXHRjb2xvcjogdmFyKC0tdGV4dC1oMSk7XG5cblx0JiAuZmEtYW5nbGUtZG93biB7XG5cdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHRsaW5lLWhlaWdodDogMTZweDtcblx0XHRmb250LXNpemU6IDcwcHg7XG5cdFx0YW5pbWF0aW9uOiBib3VuY2UgMnMgaW5maW5pdGU7XG5cdH1cbn1cblxuQGtleWZyYW1lcyBib3VuY2Uge1xuXHQwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHR9XG5cdDUwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuXHR9XG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0fVxufVxuXG4ubGFudGVybnMge1xuXHRkaXNwbGF5OiBub25lO1xuXHR3aWR0aDogdmFyKC0tYXJ0LXdpZHRoKTtcblx0aGVpZ2h0OiA4MCU7XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0ZGlzcGxheTogZ3JpZDtcblx0fVxufVxuXG4ubGFudGVybiB7XG5cdC0tY2Fwcy13aWR0aDogNTBweDtcblx0LS1jYXBzLWhlaWdodDogMjBweDtcblxuXHRkaXNwbGF5OiBncmlkO1xuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblxuXHQmIC50b3AsXG5cdCYgLmJvdHRvbSB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHdpZHRoOiB2YXIoLS1jYXBzLXdpZHRoKTtcblx0XHRoZWlnaHQ6IHZhcigtLWNhcHMtaGVpZ2h0KTtcblxuXHRcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXHR9XG5cblx0JiAudG9wIHtcblx0XHRib3R0b206IC01cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogODAlIDgwJSAwIDA7XG5cdH1cblxuXHQmIC5ib3R0b20ge1xuXHRcdHRvcDogLTVweDtcblx0XHRib3JkZXItcmFkaXVzOiAwIDAgODAlIDgwJTtcblx0fVxuXG5cdCYgLmJvZHkge1xuXHRcdHotaW5kZXg6IDE7XG5cdFx0aGVpZ2h0OiAxMzBweDtcblx0XHR3aWR0aDogODAlO1xuXG5cdFx0Ym9yZGVyLXJhZGl1czogODVweDtcblx0XHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1tYWluKTtcblx0XHRiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxuXHRcdFx0dmFyKC0tYmctbGFudGVybiksXG5cdFx0XHR2YXIoLS1iZy1sYW50ZXJuKSAxOSUsXG5cdFx0XHR2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKSAyMCVcblx0XHQpO1xuXHR9XG5cblx0JiAuYm9keTpob3ZlciB7XG5cdFx0YmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMjQ1LCAyMDUsIDg0LCAwLjcpLCB0cmFuc3BhcmVudCA4MCUpLFxuXHRcdFx0cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcblx0XHRcdFx0dmFyKC0tYmctbGFudGVybiksXG5cdFx0XHRcdHZhcigtLWJnLWxhbnRlcm4pIDE5JSxcblx0XHRcdFx0dmFyKC0tYWNjZW50LW1haW4tZGFyaykgMjAlXG5cdFx0XHQpO1xuXHR9XG5cblx0JiA+ICoge1xuXHRcdGJveC1zaGFkb3c6IDNweCAzcHggNnB4IC0zcHggIzhhMGYwZjtcblx0fVxufVxuXG4uaG91cnMtY29udGFpbmVyIHtcblx0cGFkZGluZzogMjBweDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuXHRib3JkZXItdG9wOiAycHggc29saWQgaHNsKDAsIDk1JSwgNzAlKTtcbn1cblxuLmhvdXJzIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAzMHB4O1xuXG5cdCYgPiBkaXYge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGdhcDogOHB4O1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHR3aWR0aDogNjUwcHg7XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdGdhcDogNzBweDtcblx0fVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Ib21lICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBNZW51ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLm1lbnUge1xuXHRtYXJnaW4tdG9wOiA1cHg7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdG1hcmdpbjogMTBweCAyMHB4O1xuXHR9XG59XG5cbi5tZW51LWFydCB7XG5cdGhlaWdodDogNTUwcHg7XG5cdHdpZHRoOiBtaW4oMTAwdncsIDQwMHB4KTtcblx0bWFyZ2luOiBhdXRvO1xuXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzU0YTRjZF9iOGM5NTM3YzVmY2Q0ZDg1OWZjOTU4OTQyYjVhNWU4N35tdjIuanBnL3YxL2ZpbGwvd185NTIsaF8xMzIyLGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEsZW5jX2F1dG8vNTRhNGNkX2I4Yzk1MzdjNWZjZDRkODU5ZmM5NTg5NDJiNWE1ZTg3fm12Mi5qcGcpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdG1hcmdpbjogMDtcblx0XHRoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1mb290ZXItaGVpZ2h0KSAqIDIuNSk7XG5cdFx0d2lkdGg6IG1pbig2MDBweCwgNTB2dyk7XG5cdH1cbn1cblxuLm1lbnUtdGV4dCB7XG5cdG1hcmdpbjogLTk1cHggMCA0MHB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMTVweDtcblxuXHQmID4gKiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1tYWluKTtcblx0fVxuXG5cdCYgYSB7XG5cdFx0cGFkZGluZzogOHB4IDA7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRmb250LXNpemU6IDMwcHg7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IDNweDtcblx0fVxuXG5cdCYgYTpob3ZlciB7XG5cdFx0Ym94LXNoYWRvdzogMCAwIDAgMXB4IHdoaXRlO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0bWFyZ2luOiAwIC02MXB4IDA7XG5cdH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTWVudSAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRXZlbnRzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLmV2ZW50cyAuY29udGVudCB7XG5cdHdpZHRoOiA5MCU7XG5cdG1hcmdpbjogYXV0bztcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDIwcHg7XG5cblx0JiAuYXJ0IHtcblx0XHRoZWlnaHQ6IDE2MHB4O1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcblx0fVxuXG5cdCYgLnRleHQge1xuXHRcdG1hcmdpbjogMjBweCAwO1xuXHRcdG1heC13aWR0aDogNjVjaDtcblx0fVxuXG5cdCYgaDEge1xuXHRcdGZvbnQtc2l6ZTogMzBweDtcblx0fVxuXG5cdCYgaDIge1xuXHRcdG1hcmdpbjogMzBweCAwIDE2cHg7XG5cdH1cblxuXHQmIHAge1xuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjU7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblx0fVxuXG5cdCYgcDpudGgtbGFzdC1jaGlsZCgyKSB7XG5cdFx0d2lkdGg6IG1pbigxMDAlLCA0NDBweCk7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdGdhcDogMnB4O1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0LS1hcnQtd2lkdGg6IG1pbigzMDBweCwgMzAlKTtcblxuXHRcdGhlaWdodDogY2FsYyg5NjBweCAtIDh2dyk7XG5cdFx0d2lkdGg6IG1pbig5MCUsIDExMDBweCk7XG5cblx0XHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG5cdFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG5cdFx0JiAuYXJ0IHtcblx0XHRcdGZsZXgtc2hyaW5rOiAwO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXHRcdH1cblxuXHRcdCYgLmNhbGwtdG8tYWN0aW9uIHtcblx0XHRcdGFsaWduLWl0ZW1zOiBzdGFydDtcblx0XHRcdHBhZGRpbmc6IDQwcHggMDtcblx0XHR9XG5cdH1cbn1cblxuLnBob3RvcyB7XG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4udGllciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cblx0JiAuaW1hZ2UtY29udGFpbmVyIHtcblx0XHRmbGV4LWdyb3c6IDE7XG5cdH1cblxuXHQmIGltZyB7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0fVxufVxuXG4uZXZlbnRzIC5jYWxsLXRvLWFjdGlvbiB7XG5cdHBhZGRpbmc6IDkwcHggMDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDI0cHg7XG5cblx0JiBwIHtcblx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0bWFyZ2luOiAwO1xuXHR9XG5cblx0JiBidXR0b24ge1xuXHRcdHBhZGRpbmc6IDIwcHg7XG5cblx0XHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cblx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuXHRcdHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXHR9XG5cblx0JiBidXR0b246aG92ZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0Y29sb3I6IHZhcigtLWJnLW1haW4pO1xuXHR9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTW9kYWwgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ubW9kYWwge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHRvcDogMDtcblx0ei1pbmRleDogMjtcblx0aGVpZ2h0OiAxMDB2aDtcblx0d2lkdGg6IDEwMHZ3O1xuXG5cdGRpc3BsYXk6IGdyaWQ7XG5cdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNSk7XG5cdGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xufVxuXG5mb3JtIHtcblx0LS1mb3JtLXNwYWNlcjogMTJweDtcblxuXHRtYXgtaGVpZ2h0OiA4MHZoO1xuXHRwYWRkaW5nOiAxMnB4O1xuXHR3aWR0aDogbWluKDkwdncsIDEwMDBweCk7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiB2YXIoLS1mb3JtLXNwYWNlcik7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcblx0Y29sb3I6ICMwMDA7XG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5mb3JtLWhlYWRlciB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZy1sZWZ0OiAycHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcm0tY29udGVudCB7XG5cdHBhZGRpbmc6IHZhcigtLWZvcm0tc3BhY2VyKTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiBjYWxjKHZhcigtLWZvcm0tc3BhY2VyKSAqIDIuNSk7XG5cdG92ZXJmbG93LXk6IHNjcm9sbDtcblxuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItaW5wdXQpO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0b3ZlcmZsb3cteTogYXV0bztcblx0fVxufVxuXG4uZm9ybS1jb250ZW50IGg0IHtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG4uZm9ybS1jb250YWN0LFxuLmZvcm0tZGV0YWlscyxcbi5mb3JtLWV4dHJhcyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogdmFyKC0tZm9ybS1zcGFjZXIpO1xufVxuXG4uZm9ybS1yb3cge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGdhcDogdmFyKC0tZm9ybS1zcGFjZXIpO1xufVxuXG4uZm9ybS1pdGVtIHtcblx0ZmxleDogMTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiBjYWxjKHZhcigtLWZvcm0tc3BhY2VyKSAqIDAuNSk7XG59XG5cbi5mb3JtLWRldGFpbHMgLmZvcm0tcm93IC5mb3JtLWl0ZW0ge1xuXHR3aWR0aDogNDclO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcblx0YXBwZWFyYW5jZTogbm9uZTtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG5cdHBhZGRpbmc6IDZweCAxMHB4O1xuXG5cdGZvbnQtc2l6ZTogbWF4KDE2cHgsIDAuOXJlbSk7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWlucHV0KTtcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWlucHV0KTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5maWVsZHNldCB7XG5cdHBhZGRpbmc6IDhweCA4cHggMTBweDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IGNhbGModmFyKC0tZm9ybS1zcGFjZXIpICogMC44KTtcblxuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItaW5wdXQpO1xufVxuXG5sZWdlbmQge1xuXHRwYWRkaW5nOiA1cHggOHB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItaW5wdXQpO1xufVxuXG5sYWJlbCBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuXHRkaXNwbGF5OiBub25lO1xufVxubGFiZWwgaW5wdXRbdHlwZT1cInJhZGlvXCJdIH4gc3BhbiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogNnB4O1xufVxubGFiZWwgaW5wdXRbdHlwZT1cInJhZGlvXCJdIH4gc3BhbjpiZWZvcmUge1xuXHQtLXJhZGlvLWRpbWVuc2lvbnM6IDE1cHg7XG5cblx0aGVpZ2h0OiB2YXIoLS1yYWRpby1kaW1lbnNpb25zKTtcblx0d2lkdGg6IHZhcigtLXJhZGlvLWRpbWVuc2lvbnMpO1xuXG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGJhY2tncm91bmQ6IHZhcigtLWJnLWlucHV0KTtcblx0bWFyZ2luLXJpZ2h0OiA1cHg7XG5cblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWlucHV0KTtcblx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcmFkaW8tZGltZW5zaW9ucyk7XG5cdHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcbn1cblxubGFiZWwgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgfiBzcGFuOmJlZm9yZSB7XG5cdGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJnLW1haW4pO1xufVxuXG50ZXh0YXJlYSB7XG5cdHJlc2l6ZTogdmVydGljYWw7XG59XG5cbmZvcm0gW3R5cGU9XCJzdWJtaXRcIl0ge1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDEycHg7XG5cdHdpZHRoOiBtaW4oMTAwJSwgMjgwcHgpO1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtaDEpO1xuXHRib3JkZXItcmFkaXVzOiAyMDBweDtcblxuXHRmb250LXNpemU6IDEuNXJlbTtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cblx0Jjpob3ZlciB7XG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzkxNmYwODtcblx0fVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Nb2RhbCAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9FdmVudHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuZm9vdGVyIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRib3R0b206IDA7XG5cdG1pbi1oZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZzogMTBweCAyMHB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMTBweDtcblxuXHRib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKTtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbWFpbik7XG5cblx0JiA+ICoge1xuXHRcdGZsZXg6IDE7XG5cdH1cblxuXHQmIC5zb2NpYWxzIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cblx0JiAuYXV0aG9yIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0Z2FwOiAxMHB4O1xuXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1zdHJvbmcpO1xuXHR9XG5cblx0JiAuYWRkcmVzcyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0Z2FwOiA4cHg7XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0XHQmIC5zb2NpYWxzIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0fVxuXG5cdFx0JiAuYWRkcmVzcyB7XG5cdFx0XHRhbGlnbi1pdGVtczogZW5kO1xuXHRcdH1cblx0fVxufVxuXG4uZmEuZmEtZ2l0aHViIHtcblx0Y29sb3I6IGN1cnJlbnRDb2xvcjtcblx0Zm9udC1zaXplOiAzMHB4O1xuXG5cdCY6aG92ZXIge1xuXHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UtaW4tb3V0O1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIHNjYWxlKDEuMyk7XG5cdH1cbn1cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0Zvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9DT05URU5UICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxvREFBb0Q7O0FBRXBELG9EQUFvRDs7QUFFcEQ7Q0FDQyxlQUFlO0NBQ2YsVUFBVTtDQUNWLFlBQVk7Q0FDWixVQUFVO0NBQ1YsZUFBZTs7Q0FFZixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGtCQUFrQjs7Q0FFbEIsZ0NBQWdDO0NBQ2hDLGVBQWU7Q0FDZiwrQ0FBK0M7O0NBRS9DLGdCQUFnQjs7Q0FFaEI7RUFDQyxZQUFZO0VBQ1osYUFBYTtDQUNkOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLFdBQVc7RUFDWCxnQkFBZ0I7O0VBRWhCLCtDQUErQztFQUMvQyxZQUFZOztFQUVaO0dBQ0MsV0FBVztFQUNaOztFQUVBO0dBQ0MsYUFBYTtFQUNkO0NB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LG1EQUFtRDtBQUNuRCxvREFBb0Q7QUFDcEQsa0RBQWtEOztBQUVsRCxtREFBbUQ7O0FBRW5EO0NBQ0MsZUFBZTtDQUNmLFNBQVM7Q0FDVCxnQ0FBZ0M7Q0FDaEMsV0FBVztDQUNYLGtCQUFrQjs7Q0FFbEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTOztDQUVULCtDQUErQztDQUMvQyxnQ0FBZ0M7O0NBRWhDO0VBQ0MsT0FBTztDQUNSOztDQUVBO0VBQ0MsYUFBYTtDQUNkOztDQUVBO0VBQ0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUzs7RUFFVCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtDQUMxQjs7Q0FFQTtFQUNDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFFBQVE7Q0FDVDs7Q0FFQTtFQUNDLG1CQUFtQjtFQUNuQixtQkFBbUI7O0VBRW5CO0dBQ0MsYUFBYTtFQUNkOztFQUVBO0dBQ0MsZ0JBQWdCO0VBQ2pCO0NBQ0Q7QUFDRDs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixlQUFlOztDQUVmO0VBQ0Msc0NBQXNDO0VBQ3RDLHFDQUFxQztDQUN0QztBQUNEO0FBQ0Esb0RBQW9EO0FBQ3BELHFEQUFxRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAtLS0tLS0tLS0tLS0tLS0gICAgIENPTlRFTlQgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgU2lkZWJhciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnNpZGViYXIge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR6LWluZGV4OiAxO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMHB4O1xcblxcdHBhZGRpbmc6IDIwcHggMDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLW1haW4pO1xcblxcdGZvbnQtc2l6ZTogNDBweDtcXG5cXHRib3gtc2hhZG93OiAwcHggMHB4IDdweCB2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKTtcXG5cXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcblxcblxcdCYub3BlbiB7XFxuXFx0XFx0d2lkdGg6IDMwMHB4O1xcblxcdFxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0fVxcblxcblxcdCNjbG9zZS1zaWRlYmFyIHtcXG5cXHRcXHRhbGlnbi1zZWxmOiBlbmQ7XFxuXFx0fVxcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdHBvc2l0aW9uOiBzdGF0aWM7XFxuXFxuXFx0XFx0Ym94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tYWNjZW50LW1haW4tZGFyayk7XFxuXFx0XFx0Ym9yZGVyOiBub25lO1xcblxcblxcdFxcdCYub3BlbiB7XFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0fVxcblxcblxcdFxcdCNjbG9zZS1zaWRlYmFyIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbi5jbG9zZS1idG4ge1xcblxcdC0tZm9udC1zaXplOiA1MHB4O1xcblxcblxcdGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG5cXHRsaW5lLWhlaWdodDogY2FsYyh2YXIoLS1mb250LXNpemUpICogMC42KTtcXG59XFxuXFxubmF2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0ZmxleDogMTtcXG5cXHRnYXA6IDUwcHg7XFxuXFxuXFx0JiBidXR0b24ge1xcblxcdFxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDIycHg7XFxuXFx0fVxcblxcblxcdCYgYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRjb2xvcjogdmFyKC0tdGV4dC1oMSk7XFxuXFx0fVxcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0fVxcbn1cXG5cXG5oZWFkZXIge1xcblxcdHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG5cXHRib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKTtcXG5cXHRmb250LXNpemU6IDI0cHg7XFxuXFxuXFx0I29wZW4tc2lkZWJhciB7XFxuXFx0XFx0cGFkZGluZzogMTVweDtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXHR9XFxuXFxuXFx0JiAuc29jaWFscyB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHR9XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1NpZGViYXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuI2NoYW5naW5nLWNvbnRlbnQge1xcblxcdG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tZm9vdGVyLWhlaWdodCkgKiAyKTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgSG9tZSAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLmhvbWUge1xcblxcdG1hcmdpbi10b3A6IDIwcHg7XFxuXFxuXFx0JiBoMiB7XFxuXFx0XFx0Y29sb3I6IHZhcigtLXRleHQtaDEpO1xcblxcdH1cXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAwO1xcblxcdH1cXG59XFxuXFxuLmhlcm8ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwc3ZoIC0gODBweCk7XFxuXFx0d2lkdGg6IDkwJTtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHQtLWFydC13aWR0aDogbWluKDE5MHB4LCAyMCUpO1xcblxcdFxcdHdpZHRoOiBtaW4oOTAlLCAxMzAwcHgpO1xcblxcdFxcdG1hcmdpbjogYXV0bztcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0XFx0aGVpZ2h0OiBjYWxjKDEwMHN2aCAtIDEwMHB4KTtcXG5cXHR9XFxufVxcblxcbi5hcnQge1xcblxcdGhlaWdodDogNjglO1xcblxcdHdpZHRoOiB2YXIoLS1hcnQtd2lkdGgpO1xcblxcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzU0YTRjZF81MDU5MTE2YzU5ZDI0NGQwOGMzMTcwYjQ5ZDZlN2IwZn5tdjIuanBnL3YxL2ZpbGwvd181NDYsaF83MjgsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMSxlbmNfYXV0by81NGE0Y2RfNTA1OTExNmM1OWQyNDRkMDhjMzE3MGI0OWQ2ZTdiMGZ+bXYyLmpwZyk7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXG5cXHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdGhlaWdodDogODAlO1xcblxcblxcdFxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzU0YTRjZF9hZTVlMjI0ODZkYmI0OWRlYmI5Y2Q4YmExYjc4MGI2ZX5tdjIuanBnL3YxL2ZpbGwvd18zODgsaF8xMjQwLGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEsZW5jX2F1dG8vQXJ0d29yazFfRmluYWxfOHgyXzUuanBnKTtcXG5cXHR9XFxufVxcblxcbi5oZXJvLXRleHQge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3R0b206IDkwcHg7XFxuXFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRnYXA6IDM1cHg7XFxuXFxuXFx0JiBoMSB7XFxuXFx0XFx0LS1mb250LXNpemU6IG1pbig1MHZ3LCAzMDBweCk7XFxuXFx0fVxcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdHBvc2l0aW9uOiBzdGF0aWM7XFxuXFx0XFx0cGxhY2UtY29udGVudDogY2VudGVyO1xcblxcdFxcdGdhcDogNjBweDtcXG5cXHR9XFxufVxcblxcbi5yZXNlcnZhdGlvbnMge1xcblxcdGNvbG9yOiAjZmZlNWU1O1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRsZXR0ZXItc3BhY2luZzogMnB4O1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDFweDtcXG5cXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDJweDtcXG59XFxuXFxuLnNjcm9sbC1kb3duIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1oMSk7XFxuXFxuXFx0JiAuZmEtYW5nbGUtZG93biB7XFxuXFx0XFx0bWFyZ2luLXRvcDogMTBweDtcXG5cXHRcXHRsaW5lLWhlaWdodDogMTZweDtcXG5cXHRcXHRmb250LXNpemU6IDcwcHg7XFxuXFx0XFx0YW5pbWF0aW9uOiBib3VuY2UgMnMgaW5maW5pdGU7XFxuXFx0fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XFxuXFx0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG5cXHR9XFxuXFx0NTAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG5cXHR9XFxufVxcblxcbi5sYW50ZXJucyB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHR3aWR0aDogdmFyKC0tYXJ0LXdpZHRoKTtcXG5cXHRoZWlnaHQ6IDgwJTtcXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHRkaXNwbGF5OiBncmlkO1xcblxcdH1cXG59XFxuXFxuLmxhbnRlcm4ge1xcblxcdC0tY2Fwcy13aWR0aDogNTBweDtcXG5cXHQtLWNhcHMtaGVpZ2h0OiAyMHB4O1xcblxcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0YWxpZ24tY29udGVudDogY2VudGVyO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXG5cXHQmIC50b3AsXFxuXFx0JiAuYm90dG9tIHtcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0d2lkdGg6IHZhcigtLWNhcHMtd2lkdGgpO1xcblxcdFxcdGhlaWdodDogdmFyKC0tY2Fwcy1oZWlnaHQpO1xcblxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdH1cXG5cXG5cXHQmIC50b3Age1xcblxcdFxcdGJvdHRvbTogLTVweDtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA4MCUgODAlIDAgMDtcXG5cXHR9XFxuXFxuXFx0JiAuYm90dG9tIHtcXG5cXHRcXHR0b3A6IC01cHg7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMCAwIDgwJSA4MCU7XFxuXFx0fVxcblxcblxcdCYgLmJvZHkge1xcblxcdFxcdHotaW5kZXg6IDE7XFxuXFx0XFx0aGVpZ2h0OiAxMzBweDtcXG5cXHRcXHR3aWR0aDogODAlO1xcblxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDg1cHg7XFxuXFx0XFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50LW1haW4tZGFyayk7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbWFpbik7XFxuXFx0XFx0YmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcXG5cXHRcXHRcXHR2YXIoLS1iZy1sYW50ZXJuKSxcXG5cXHRcXHRcXHR2YXIoLS1iZy1sYW50ZXJuKSAxOSUsXFxuXFx0XFx0XFx0dmFyKC0tYWNjZW50LW1haW4tZGFyaykgMjAlXFxuXFx0XFx0KTtcXG5cXHR9XFxuXFxuXFx0JiAuYm9keTpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMjQ1LCAyMDUsIDg0LCAwLjcpLCB0cmFuc3BhcmVudCA4MCUpLFxcblxcdFxcdFxcdHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0XFx0XFx0dmFyKC0tYmctbGFudGVybiksXFxuXFx0XFx0XFx0XFx0dmFyKC0tYmctbGFudGVybikgMTklLFxcblxcdFxcdFxcdFxcdHZhcigtLWFjY2VudC1tYWluLWRhcmspIDIwJVxcblxcdFxcdFxcdCk7XFxuXFx0fVxcblxcblxcdCYgPiAqIHtcXG5cXHRcXHRib3gtc2hhZG93OiAzcHggM3B4IDZweCAtM3B4ICM4YTBmMGY7XFxuXFx0fVxcbn1cXG5cXG4uaG91cnMtY29udGFpbmVyIHtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkIGhzbCgwLCA5NSUsIDcwJSk7XFxufVxcblxcbi5ob3VycyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMzBweDtcXG5cXG5cXHQmID4gZGl2IHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRnYXA6IDhweDtcXG5cXHR9XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHR3aWR0aDogNjUwcHg7XFxuXFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdFxcdGdhcDogNzBweDtcXG5cXHR9XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0hvbWUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTWVudSAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLm1lbnUge1xcblxcdG1hcmdpbi10b3A6IDVweDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdFxcdG1hcmdpbjogMTBweCAyMHB4O1xcblxcdH1cXG59XFxuXFxuLm1lbnUtYXJ0IHtcXG5cXHRoZWlnaHQ6IDU1MHB4O1xcblxcdHdpZHRoOiBtaW4oMTAwdncsIDQwMHB4KTtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkX2I4Yzk1MzdjNWZjZDRkODU5ZmM5NTg5NDJiNWE1ZTg3fm12Mi5qcGcvdjEvZmlsbC93Xzk1MixoXzEzMjIsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMSxlbmNfYXV0by81NGE0Y2RfYjhjOTUzN2M1ZmNkNGQ4NTlmYzk1ODk0MmI1YTVlODd+bXYyLmpwZyk7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdG1hcmdpbjogMDtcXG5cXHRcXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1mb290ZXItaGVpZ2h0KSAqIDIuNSk7XFxuXFx0XFx0d2lkdGg6IG1pbig2MDBweCwgNTB2dyk7XFxuXFx0fVxcbn1cXG5cXG4ubWVudS10ZXh0IHtcXG5cXHRtYXJnaW46IC05NXB4IDAgNDBweDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxNXB4O1xcblxcblxcdCYgPiAqIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLW1haW4pO1xcblxcdH1cXG5cXG5cXHQmIGEge1xcblxcdFxcdHBhZGRpbmc6IDhweCAwO1xcblxcdFxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0XFx0Zm9udC1zaXplOiAzMHB4O1xcblxcdFxcdGxldHRlci1zcGFjaW5nOiAzcHg7XFxuXFx0fVxcblxcblxcdCYgYTpob3ZlciB7XFxuXFx0XFx0Ym94LXNoYWRvdzogMCAwIDAgMXB4IHdoaXRlO1xcblxcdH1cXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHRtYXJnaW46IDAgLTYxcHggMDtcXG5cXHR9XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL01lbnUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRXZlbnRzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uZXZlbnRzIC5jb250ZW50IHtcXG5cXHR3aWR0aDogOTAlO1xcblxcdG1hcmdpbjogYXV0bztcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDIwcHg7XFxuXFxuXFx0JiAuYXJ0IHtcXG5cXHRcXHRoZWlnaHQ6IDE2MHB4O1xcblxcdFxcdGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG5cXHR9XFxuXFxuXFx0JiAudGV4dCB7XFxuXFx0XFx0bWFyZ2luOiAyMHB4IDA7XFxuXFx0XFx0bWF4LXdpZHRoOiA2NWNoO1xcblxcdH1cXG5cXG5cXHQmIGgxIHtcXG5cXHRcXHRmb250LXNpemU6IDMwcHg7XFxuXFx0fVxcblxcblxcdCYgaDIge1xcblxcdFxcdG1hcmdpbjogMzBweCAwIDE2cHg7XFxuXFx0fVxcblxcblxcdCYgcCB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0XFx0bGluZS1oZWlnaHQ6IDEuNTtcXG5cXHRcXHRsZXR0ZXItc3BhY2luZzogMXB4O1xcblxcdH1cXG5cXG5cXHQmIHA6bnRoLWxhc3QtY2hpbGQoMikge1xcblxcdFxcdHdpZHRoOiBtaW4oMTAwJSwgNDQwcHgpO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRnYXA6IDJweDtcXG5cXHR9XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0LS1hcnQtd2lkdGg6IG1pbigzMDBweCwgMzAlKTtcXG5cXG5cXHRcXHRoZWlnaHQ6IGNhbGMoOTYwcHggLSA4dncpO1xcblxcdFxcdHdpZHRoOiBtaW4oOTAlLCAxMTAwcHgpO1xcblxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG5cXHRcXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuXFx0XFx0JiAuYXJ0IHtcXG5cXHRcXHRcXHRmbGV4LXNocmluazogMDtcXG5cXHRcXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0XFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmIC5jYWxsLXRvLWFjdGlvbiB7XFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IHN0YXJ0O1xcblxcdFxcdFxcdHBhZGRpbmc6IDQwcHggMDtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG4ucGhvdG9zIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRpZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG5cXHQmIC5pbWFnZS1jb250YWluZXIge1xcblxcdFxcdGZsZXgtZ3JvdzogMTtcXG5cXHR9XFxuXFxuXFx0JiBpbWcge1xcblxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRvYmplY3QtZml0OiBjb3ZlcjtcXG5cXHR9XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHR9XFxufVxcblxcbi5ldmVudHMgLmNhbGwtdG8tYWN0aW9uIHtcXG5cXHRwYWRkaW5nOiA5MHB4IDA7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAyNHB4O1xcblxcblxcdCYgcCB7XFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdFxcdG1hcmdpbjogMDtcXG5cXHR9XFxuXFxuXFx0JiBidXR0b24ge1xcblxcdFxcdHBhZGRpbmc6IDIwcHg7XFxuXFxuXFx0XFx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRcXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcblxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjNzO1xcblxcdH1cXG5cXG5cXHQmIGJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRcXHRjb2xvcjogdmFyKC0tYmctbWFpbik7XFxuXFx0fVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIE1vZGFsICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ubW9kYWwge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDA7XFxuXFx0ei1pbmRleDogMjtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNSk7XFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxufVxcblxcbmZvcm0ge1xcblxcdC0tZm9ybS1zcGFjZXI6IDEycHg7XFxuXFxuXFx0bWF4LWhlaWdodDogODB2aDtcXG5cXHRwYWRkaW5nOiAxMnB4O1xcblxcdHdpZHRoOiBtaW4oOTB2dywgMTAwMHB4KTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiB2YXIoLS1mb3JtLXNwYWNlcik7XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcXG5cXHRjb2xvcjogIzAwMDtcXG5cXHRib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4uZm9ybS1oZWFkZXIge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nLWxlZnQ6IDJweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IHtcXG5cXHRwYWRkaW5nOiB2YXIoLS1mb3JtLXNwYWNlcik7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogY2FsYyh2YXIoLS1mb3JtLXNwYWNlcikgKiAyLjUpO1xcblxcdG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItaW5wdXQpO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRvdmVyZmxvdy15OiBhdXRvO1xcblxcdH1cXG59XFxuXFxuLmZvcm0tY29udGVudCBoNCB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uZm9ybS1jb250YWN0LFxcbi5mb3JtLWRldGFpbHMsXFxuLmZvcm0tZXh0cmFzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiB2YXIoLS1mb3JtLXNwYWNlcik7XFxufVxcblxcbi5mb3JtLXJvdyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0Z2FwOiB2YXIoLS1mb3JtLXNwYWNlcik7XFxufVxcblxcbi5mb3JtLWl0ZW0ge1xcblxcdGZsZXg6IDE7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogY2FsYyh2YXIoLS1mb3JtLXNwYWNlcikgKiAwLjUpO1xcbn1cXG5cXG4uZm9ybS1kZXRhaWxzIC5mb3JtLXJvdyAuZm9ybS1pdGVtIHtcXG5cXHR3aWR0aDogNDclO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG5cXHRwYWRkaW5nOiA2cHggMTBweDtcXG5cXG5cXHRmb250LXNpemU6IG1heCgxNnB4LCAwLjlyZW0pO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWlucHV0KTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItaW5wdXQpO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuZmllbGRzZXQge1xcblxcdHBhZGRpbmc6IDhweCA4cHggMTBweDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiBjYWxjKHZhcigtLWZvcm0tc3BhY2VyKSAqIDAuOCk7XFxuXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWlucHV0KTtcXG59XFxuXFxubGVnZW5kIHtcXG5cXHRwYWRkaW5nOiA1cHggOHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1pbnB1dCk7XFxufVxcblxcbmxhYmVsIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcbmxhYmVsIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0gfiBzcGFuIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiA2cHg7XFxufVxcbmxhYmVsIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0gfiBzcGFuOmJlZm9yZSB7XFxuXFx0LS1yYWRpby1kaW1lbnNpb25zOiAxNXB4O1xcblxcblxcdGhlaWdodDogdmFyKC0tcmFkaW8tZGltZW5zaW9ucyk7XFxuXFx0d2lkdGg6IHZhcigtLXJhZGlvLWRpbWVuc2lvbnMpO1xcblxcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWJnLWlucHV0KTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXG5cXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItaW5wdXQpO1xcblxcdGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlvLWRpbWVuc2lvbnMpO1xcblxcdHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxubGFiZWwgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkIH4gc3BhbjpiZWZvcmUge1xcblxcdGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJnLW1haW4pO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuXFx0cmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuZm9ybSBbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAxMnB4O1xcblxcdHdpZHRoOiBtaW4oMTAwJSwgMjgwcHgpO1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtaDEpO1xcblxcdGJvcmRlci1yYWRpdXM6IDIwMHB4O1xcblxcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcXG5cXG5cXHQmOmhvdmVyIHtcXG5cXHRcXHRib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjOTE2ZjA4O1xcblxcdH1cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTW9kYWwgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0V2ZW50cyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBGb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbmZvb3RlciB7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdGJvdHRvbTogMDtcXG5cXHRtaW4taGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwYWRkaW5nOiAxMHB4IDIwcHg7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMTBweDtcXG5cXG5cXHRib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1tYWluKTtcXG5cXG5cXHQmID4gKiB7XFxuXFx0XFx0ZmxleDogMTtcXG5cXHR9XFxuXFxuXFx0JiAuc29jaWFscyB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFxuXFx0JiAuYXV0aG9yIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0Z2FwOiAxMHB4O1xcblxcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0XFx0Y29sb3I6IHZhcigtLXRleHQtc3Ryb25nKTtcXG5cXHR9XFxuXFxuXFx0JiAuYWRkcmVzcyB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0Z2FwOiA4cHg7XFxuXFx0fVxcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHRcXHQmIC5zb2NpYWxzIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmIC5hZGRyZXNzIHtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogZW5kO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbi5mYS5mYS1naXRodWIge1xcblxcdGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuXFx0Zm9udC1zaXplOiAzMHB4O1xcblxcblxcdCY6aG92ZXIge1xcblxcdFxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIHNjYWxlKDEuMyk7XFxuXFx0fVxcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Gb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0NPTlRFTlQgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogLS0tLS0tLS0tLS0tLS0tICAgICBSZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJ1dHRvbiB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0YmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG5cdGNvbG9yOiB1bnNldDtcblx0Ym9yZGVyOiBub25lO1xuXHRmb250LXNpemU6IHVuc2V0O1xufVxuXG5hIHtcblx0Y29sb3I6IHVuc2V0O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmgxLFxuaDIge1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9SZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tICAgICBVdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuOnJvb3Qge1xuXHQtLWJnLW1haW46ICNmZjQwNDA7XG5cdC0tYWNjZW50LW1haW4tZGFyazogIzNkMDAwMDtcblx0LS1iZy1sYW50ZXJuOiAjZTgzMDMwO1xuXHQtLXRleHQtaDE6ICNmNWNlNTQ7XG5cdC0tYmctaW5wdXQ6IHdoaXRlO1xuXHQtLWJvcmRlci1pbnB1dDogYmxhY2s7XG5cblx0LS1mb290ZXItaGVpZ2h0OiA1MHB4O1xuXHQtLWFydC13aWR0aDogMTAwJTtcblxuXHRzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG5cdG1pbi1oZWlnaHQ6IDEwMXN2aDtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1tYWluKTtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLFxuXHRcdFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuXHRcdHNhbnMtc2VyaWY7XG59XG5cbmgxLmJyYW5kIHtcblx0LS1mb250LXNpemU6IDExMHB4O1xuXG5cdGNvbG9yOiB2YXIoLS10ZXh0LWgxKTtcblx0dGV4dC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XG5cdGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcblx0bGluZS1oZWlnaHQ6IGNhbGModmFyKC0tZm9udC1zaXplKSAqIDAuOCk7XG59XG5cbi5oaWRkZW4ge1xuXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5zb2NpYWxzIHtcblx0Z2FwOiAxMHB4O1xuXHRmb250LXNpemU6IDI1cHg7XG59XG5cbmEudW5kZXJsaW5lIHtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMXB4O1xuXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDNweDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVib290LXV0aWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1EQUFtRDs7QUFFbkQ7OztDQUdDLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixxQkFBcUI7QUFDdEI7O0FBRUE7O0NBRUMsbUJBQW1CO0FBQ3BCOztBQUVBLG9EQUFvRDtBQUNwRCxtRUFBbUU7O0FBRW5FO0NBQ0Msa0JBQWtCO0NBQ2xCLDJCQUEyQjtDQUMzQixxQkFBcUI7Q0FDckIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixxQkFBcUI7O0NBRXJCLHFCQUFxQjtDQUNyQixpQkFBaUI7O0NBRWpCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGtCQUFrQjs7Q0FFbEIsZ0NBQWdDO0NBQ2hDLFdBQVc7Q0FDWDs7WUFFVztBQUNaOztBQUVBO0NBQ0Msa0JBQWtCOztDQUVsQixxQkFBcUI7Q0FDckIsMEJBQTBCO0NBQzFCLDJCQUEyQjtDQUMzQix5Q0FBeUM7QUFDMUM7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLDhCQUE4QjtDQUM5QiwwQkFBMEI7QUFDM0I7O0FBRUEsb0VBQW9FXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XFxuXFx0Y29sb3I6IHVuc2V0O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRmb250LXNpemU6IHVuc2V0O1xcbn1cXG5cXG5hIHtcXG5cXHRjb2xvcjogdW5zZXQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFV0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbjpyb290IHtcXG5cXHQtLWJnLW1haW46ICNmZjQwNDA7XFxuXFx0LS1hY2NlbnQtbWFpbi1kYXJrOiAjM2QwMDAwO1xcblxcdC0tYmctbGFudGVybjogI2U4MzAzMDtcXG5cXHQtLXRleHQtaDE6ICNmNWNlNTQ7XFxuXFx0LS1iZy1pbnB1dDogd2hpdGU7XFxuXFx0LS1ib3JkZXItaW5wdXQ6IGJsYWNrO1xcblxcblxcdC0tZm9vdGVyLWhlaWdodDogNTBweDtcXG5cXHQtLWFydC13aWR0aDogMTAwJTtcXG5cXG5cXHRzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSB7XFxuXFx0bWluLWhlaWdodDogMTAxc3ZoO1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLW1haW4pO1xcblxcdGNvbG9yOiAjZmZmO1xcblxcdGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIixcXG5cXHRcXHRSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcblxcdFxcdHNhbnMtc2VyaWY7XFxufVxcblxcbmgxLmJyYW5kIHtcXG5cXHQtLWZvbnQtc2l6ZTogMTEwcHg7XFxuXFxuXFx0Y29sb3I6IHZhcigtLXRleHQtaDEpO1xcblxcdHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG5cXHRsaW5lLWhlaWdodDogY2FsYyh2YXIoLS1mb250LXNpemUpICogMC44KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuXFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc29jaWFscyB7XFxuXFx0Z2FwOiAxMHB4O1xcblxcdGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuYS51bmRlcmxpbmUge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDFweDtcXG5cXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDNweDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVib290LXV0aWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZWJvb3QtdXRpbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGVsRmFjdG9yeSwgaHRtbEZhY3RvcnkgfSBmcm9tIFwiLi9kb20tZmFjdG9yaWVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEFib3V0VXMoKSB7XG5cdHJldHVybiBodG1sRmFjdG9yeShcblx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiYWRkcmVzc1wiLCB0ZXh0Q29udGVudDogXCJcIiB9LCBbXG5cdFx0XHRlbEZhY3RvcnkoXCJhXCIsIHtcblx0XHRcdFx0Y2xhc3NMaXN0OiBcInVuZGVybGluZVwiLFxuXHRcdFx0XHRocmVmOiBcImh0dHBzOi8vZ29vLmdsL21hcHMvMWJiTlF0MUpwV2VISjdoYjlcIixcblx0XHRcdFx0dGV4dENvbnRlbnQ6IFwiMzI5IENvbHVtYnVzIEF2ZSwgTllDXCIsXG5cdFx0XHR9KSxcblx0XHRcdGVsRmFjdG9yeShcImFcIiwge1xuXHRcdFx0XHRjbGFzc0xpc3Q6IFwidW5kZXJsaW5lXCIsXG5cdFx0XHRcdGhyZWY6IFwidGVsOisxLTIxMi01MTctMTk4N1wiLFxuXHRcdFx0XHR0ZXh0Q29udGVudDogXCIrMSAyMTIgNTE3IDE5ODdcIixcblx0XHRcdH0pLFxuXHRcdF0pXG5cdCk7XG59XG4iLCJpbXBvcnQgeyBlbEZhY3RvcnksIGh0bWxGYWN0b3J5IH0gZnJvbSBcIi4vZG9tLWZhY3Rvcmllcy5qc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVTb2NpYWxJY29ucygpIHtcblx0Ly8gcmV0dXJucyBkaXYuc29jaWFscyB3aXRoIDQgbGlua3MsIGVhY2ggY29udGFpbmluZyBhbiA8aT5cblx0cmV0dXJuIGVsRmFjdG9yeShcblx0XHRcImRpdlwiLFxuXHRcdHsgY2xhc3NMaXN0OiBcInNvY2lhbHNcIiB9LFxuXHRcdFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpbnN0YWdyYW1cIixcblx0XHRcdFx0bGluazogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2Fzc2V0cmVzdGF1cmFudC9cIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiZmFjZWJvb2tcIixcblx0XHRcdFx0bGluazogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vYXNzZXRyZXN0YXVyYW50L1wiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJ5ZWxwXCIsXG5cdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly93d3cueWVscC5jb20vYml6L2Fzc2V0LW5ldy15b3JrP29zcT1hc3NldFwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJ0cmlwYWR2aXNvclwiLFxuXHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vd3d3LnRyaXBhZHZpc29yLmNvbS9SZXN0YXVyYW50X1Jldmlldy1nNjA3NjMtZDE5Mjg0MzQ2LVJldmlld3MtQXNzZXQtTmV3X1lvcmtfQ2l0eV9OZXdfWW9yay5odG1sXCIsXG5cdFx0XHR9LFxuXHRcdF0ubWFwKChwYWlyKSA9PiB7XG5cdFx0XHRyZXR1cm4gZWxGYWN0b3J5KFwiYVwiLCB7IGhyZWY6IHBhaXIubGluayB9LCBbXG5cdFx0XHRcdGVsRmFjdG9yeShcImlcIiwge1xuXHRcdFx0XHRcdGNsYXNzTGlzdDogYGZhIGZhLSR7cGFpci5uYW1lfWAsXG5cdFx0XHRcdFx0YXJpYUhpZGRlbjogdHJ1ZSxcblx0XHRcdFx0fSksXG5cdFx0XHRdKTtcblx0XHR9KVxuXHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRDb25zdGFudHMoKSB7XG5cdGNvbnN0IHNpZGViYXIgPSBlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwic2lkZWJhciBkeW5hbWljXCIgfSwgW1xuXHRcdGVsRmFjdG9yeShcImJ1dHRvblwiLCB7XG5cdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0Y2xhc3NMaXN0OiBcImNsb3NlLWJ0biBzaWRlYmFyLXRvZ2dsZXJcIixcblx0XHRcdGlkOiBcImNsb3NlLXNpZGViYXJcIixcblx0XHRcdHRleHRDb250ZW50OiBcIsOXXCIsXG5cdFx0fSksXG5cdFx0ZWxGYWN0b3J5KFxuXHRcdFx0XCJuYXZcIixcblx0XHRcdHt9LFxuXHRcdFx0W1wiaG9tZVwiLCBcIm1lbnVcIiwgXCJldmVudHNcIiwgXCJhYm91dFwiXS5tYXAoKGJ1dHRvbikgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZWxGYWN0b3J5KFwiYnV0dG9uXCIsIHtcblx0XHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0XHRcdGNsYXNzTGlzdDogXCJuYXYtYnRuXCIsXG5cdFx0XHRcdFx0aWQ6IGAke2J1dHRvbn0tYnRuYCxcblx0XHRcdFx0XHR0ZXh0Q29udGVudDogYnV0dG9uLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0pXG5cdFx0KSxcblx0XSk7XG5cblx0Y29uc3QgaGVhZGVyID0gZWxGYWN0b3J5KFwiaGVhZGVyXCIsIHt9LCBbXG5cdFx0ZWxGYWN0b3J5KFwiYnV0dG9uXCIsIHtcblx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG5cdFx0XHRjbGFzc0xpc3Q6IFwic2lkZWJhci10b2dnbGVyXCIsXG5cdFx0XHRpZDogXCJvcGVuLXNpZGViYXJcIixcblx0XHRcdHRleHRDb250ZW50OiBcIuKYsFwiLFxuXHRcdH0pLFxuXHRcdGNyZWF0ZVNvY2lhbEljb25zKCksXG5cdF0pO1xuXG5cdGNvbnN0IGZvb3RlciA9IGVsRmFjdG9yeShcImZvb3RlclwiLCB7fSwgW1xuXHRcdGNyZWF0ZVNvY2lhbEljb25zKCksXG5cdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImF1dGhvclwiIH0sIFtcblx0XHRcdGVsRmFjdG9yeShcInBcIiwgeyB0ZXh0Q29udGVudDogXCJXYWxrZXJcIiB9KSxcblx0XHRcdGVsRmFjdG9yeShcblx0XHRcdFx0XCJhXCIsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9tYXJsYXR0ZVwiLFxuXHRcdFx0XHRcdHRhcmdldDogXCJfYmxhbmtcIixcblx0XHRcdFx0fSxcblx0XHRcdFx0W2VsRmFjdG9yeShcImlcIiwgeyBjbGFzc0xpc3Q6IFwiZmEgZmEtZ2l0aHViXCIgfSldXG5cdFx0XHQpLFxuXHRcdFx0ZWxGYWN0b3J5KFwicFwiLCB7IHRleHRDb250ZW50OiBcIk1hcmxhdHRcIiB9KSxcblx0XHRdKSxcblx0XSk7XG5cblx0cmV0dXJuIFtcblx0XHRzaWRlYmFyLFxuXHRcdGhlYWRlcixcblx0XHRlbEZhY3RvcnkoXCJtYWluXCIsIHsgaWQ6IFwiY2hhbmdpbmctY29udGVudFwiIH0pLFxuXHRcdGZvb3Rlcixcblx0XS5tYXAoKHNlY3Rpb24pID0+IHtcblx0XHRyZXR1cm4gaHRtbEZhY3Rvcnkoc2VjdGlvbik7XG5cdH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGVsRmFjdG9yeSh0eXBlLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiA9IFtdKSB7XG5cdHJldHVybiB7IHR5cGUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodG1sRmFjdG9yeShvYmopIHtcblx0Y29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9iai50eXBlKTtcblx0Y29uc3QgYXR0cmlidXRlcyA9IG9iai5hdHRyaWJ1dGVzO1xuXG5cdGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0ZWxba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcblx0fVxuXG5cdG9iai5jaGlsZHJlbj8uZm9yRWFjaCgoY2hpbGQpID0+IHtcblx0XHRlbC5hcHBlbmRDaGlsZChodG1sRmFjdG9yeShjaGlsZCkpO1xuXHR9KTtcblxuXHRyZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtUm93RmFjdG9yeShmb3JtRGF0YUFycmF5cykge1xuXHRyZXR1cm4gZm9ybURhdGFBcnJheXNcblx0XHQubWFwKChmb3JtRGF0YSkgPT4ge1xuXHRcdFx0Y29uc3Qga2ViYWIgPSBmb3JtRGF0YVswXS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKTtcblx0XHRcdHJldHVybiBlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiZm9ybS1pdGVtXCIgfSwgW1xuXHRcdFx0XHRlbEZhY3RvcnkoXCJsYWJlbFwiLCB7XG5cdFx0XHRcdFx0aHRtbEZvcjoga2ViYWIsXG5cdFx0XHRcdFx0dGV4dENvbnRlbnQ6IGZvcm1EYXRhWzBdICsgXCI6XCIsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRlbEZhY3RvcnkoXCJpbnB1dFwiLCB7XG5cdFx0XHRcdFx0aWQ6IGtlYmFiLFxuXHRcdFx0XHRcdHR5cGU6IGZvcm1EYXRhWzFdLFxuXHRcdFx0XHRcdGF1dG9jb21wbGV0ZTogZm9ybURhdGFbMl0sXG5cdFx0XHRcdH0pLFxuXHRcdFx0XSk7XG5cdFx0fSlcblx0XHQucmVkdWNlKChhY2MsIGN1cnJlbnRJdGVtLCBpbmRleCkgPT4ge1xuXHRcdFx0aWYgKCEoaW5kZXggJiAxKSkge1xuXHRcdFx0XHQvLyBJZiBldmVuLCBjcmVhdGUgcm93IHdpdGggY3VycmVudEl0ZW0gYXMgYSBjaGlsZFxuXHRcdFx0XHRhY2MucHVzaChcblx0XHRcdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiZm9ybS1yb3dcIiB9LCBbY3VycmVudEl0ZW1dKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm4gYWNjO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSWYgb2RkLCBhZGQgY3VycmVudEl0ZW0gdG8gcHJldmlvdXMgcm93XG5cdFx0XHRcdGFjY1thY2MubGVuZ3RoIC0gMV0uY2hpbGRyZW4ucHVzaChjdXJyZW50SXRlbSk7XG5cdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHR9XG5cdFx0fSwgW10pO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gXCIuL2Zvcm0uanNcIjtcbmltcG9ydCB7IGh0bWxGYWN0b3J5LCBlbEZhY3RvcnkgfSBmcm9tIFwiLi9kb20tZmFjdG9yaWVzLmpzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRDaGlsZHJlbigpIHtcblx0Y29uc3QgdGV4dENoaWxkcmVuID0gW1xuXHRcdFtcImgxXCIsIFwiUHJpdmF0ZSBEaW5pbmcgJiBFdmVudHNcIl0sXG5cdFx0W1wiaDJcIiwgXCJTcGVjaWFsIEV2ZW50c1wiXSxcblx0XHRbXG5cdFx0XHRcInBcIixcblx0XHRcdFwiV2l0aCB0d28gbGV2ZWxzIG9mIGRpbmluZyBhbmQgYSBiYXIgb24gZWFjaCBmbG9vciwgdGhlIHJlc3RhdXJhbnQgb2ZmZXJzIHNlYXRpbmcgZm9yIHVwIDIyMCBndWVzdHMgd2l0aGluIGFwcHJveGltYXRlbHkgNSwwMDAgc3F1YXJlLWZvb3RhZ2UuIFVwb24gZW50cnkgaW50byB0aGUgcmVzdGF1cmFudCB0aHJvdWdoIGEgZ2xhc3MgZW50cnl3YXkgaXMgYSAyNC0gc2VhdCBiYXIgZm9yIGd1ZXN0cyB0byBlbmpveSBhIGRyaW5rLCBzbmFjaywgb3IgZnVsbCBkaW5uZXIuXCIsXG5cdFx0XSxcblx0XHRbXG5cdFx0XHRcInBcIixcblx0XHRcdFwiVGhlcmUgYXJlIG11bHRpcGxlIGFyZWFzIG9mIHRoZSByZXN0YXVyYW50IHRoYXQgY2FuIGhvc3QgcHJpdmF0ZSBhbmQgc2VtaS1wcml2YXRlIGV2ZW50cyBhcyB0aGUgcmVzdGF1cmFudCBib2FzdHMgdHdvIHNlbWktcHJpdmF0ZSByb29tcyB0aGF0IGJvdGggc2VhdCAyMCBndWVzdHMsIGFzIHdlbGwgYXMgdGhlIHVwc3RhaXJzIE1lenphbmluZSBsZXZlbCwgd2hpY2ggc2VhdHMgdXAgdG8gNTAgYW5kIDggYXQgdGhlIGJhci4gU2VhdGluZyB3aWxsIGJlIGF2YWlsYWJsZSBvdXRkb29ycyBzZWFzb25hbGx5LlwiLFxuXHRcdF0sXG5cdFx0W1wiaDJcIiwgXCJDb2NrdGFpbCBQYXJ0aWVzLCBSZWNlcHRpb25zLCBCdXlvdXRzXCJdLFxuXHRcdFtcblx0XHRcdFwicFwiLFxuXHRcdFx0XCJXZSBhcmUgcGxlYXNlZCB0byBvZmZlciBvdXIgc2VydmljZXMgZm9yIHlvdXIgbmV4dCBvY2Nhc2lvbnMuIEJvb2sgb3VyIGVudGlyZSByZXN0YXVyYW50IGZvciBhIHNwZWNpYWwgZXZlbmluZywgY2F0ZXJlZCBqdXN0IGZvciB5b3UgYW5kIHlvdXIgZ3Vlc3RzLiBMZXQgdXMgYnJpbmcgdGhlIEFTU0VUIGV4cGVyaWVuY2UgdG8geW91ciB3ZWRkaW5nLCBiaXJ0aGRheXMgYW5kIG90aGVyIGxhcmdlIGV2ZW50c1wiLFxuXHRcdF0sXG5cdFx0W1wicFwiLCBcIklucXVpcmUgYmVsb3cgb3IgY29udGFjdCB1cyBhdDpcIl0sXG5cdF0ubWFwKChlbnRyeSkgPT4ge1xuXHRcdHJldHVybiBlbEZhY3RvcnkoZW50cnlbMF0sIHsgdGV4dENvbnRlbnQ6IGVudHJ5WzFdIH0pO1xuXHR9KTtcblxuXHR0ZXh0Q2hpbGRyZW5bdGV4dENoaWxkcmVuLmxlbmd0aCAtIDFdLmNoaWxkcmVuLnB1c2goXG5cdFx0ZWxGYWN0b3J5KFwiYVwiLCB7XG5cdFx0XHRocmVmOiBcInRlbDorMS0yMTItNTE3LTE5ODdcIixcblx0XHRcdHRleHRDb250ZW50OiBcIisxIDIxMiA1MTcgMTk4N1wiLFxuXHRcdFx0Y2xhc3NMaXN0OiBcInVuZGVybGluZVwiLFxuXHRcdH0pXG5cdCk7XG5cblx0dGV4dENoaWxkcmVuLnB1c2goXG5cdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImNhbGwtdG8tYWN0aW9uXCIgfSwgW1xuXHRcdFx0ZWxGYWN0b3J5KFwiYnV0dG9uXCIsIHtcblx0XHRcdFx0Y2xhc3NMaXN0OiBcImlucXVpcmVcIixcblx0XHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdFx0dGV4dENvbnRlbnQ6IFwiSW5xdWlyZSBOb3dcIixcblx0XHRcdH0pLFxuXHRcdF0pXG5cdCk7XG5cdHJldHVybiB0ZXh0Q2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBob3RvcygpIHtcblx0cmV0dXJuIFtcblx0XHR7XG5cdFx0XHRzcmM6IFwiaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS9iYmYwMjViMmExOTQ0MGQxOTdjYmVmNjY2ZmZmYmM4ZS5qcGcvdjEvZmlsbC93Xzk5OSxoXzYwMCxhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLGVuY19hdXRvL2JiZjAyNWIyYTE5NDQwZDE5N2NiZWY2NjZmZmZiYzhlLmpwZ1wiLFxuXHRcdFx0YWx0OiBcIlBlb3BsZSBkcmlua2luZyBhdCBhIGJhclwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c3JjOiBcImh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkX2EyNjVhMmYyNTgzNDRjMTU5YzNkMDZmY2ViZDk0MGVlfm12Mi5qcGcvdjEvZmlsbC93XzY2NixoXzYwMCxhbF9sLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLGVuY19hdXRvLzU0YTRjZF9hMjY1YTJmMjU4MzQ0YzE1OWMzZDA2ZmNlYmQ5NDBlZX5tdjIuanBnXCIsXG5cdFx0XHRhbHQ6IFwiQSBnbGFzcyBvZiB3aW5lIGFuZCBwbGF0ZSBvZiBmb29kXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzcmM6IFwiaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS81NGE0Y2RfOTUxODRhODZhZWVlNDJiYzhmMmI2NWQ0MTQ4YWNkZGZ+bXYyX2RfMTk1MF8xMzA4X3NfMi5qcGcvdjEvZmlsbC93XzY2NixoXzYwMCxhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLGVuY19hdXRvLzU0YTRjZF85NTE4NGE4NmFlZWU0MmJjOGYyYjY1ZDQxNDhhY2RkZn5tdjJfZF8xOTUwXzEzMDhfc18yLmpwZ1wiLFxuXHRcdFx0YWx0OiBcIkEgREogYm9vdGhcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNyYzogXCJodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzU0YTRjZF9iMmU1MzZhYmYwZWE0MzZkOTA1NTdjNWU1MjhhMWVjMH5tdjIucG5nL3YxL2ZpbGwvd185OTksaF82MDAsYWxfbCxxXzkwLHVzbV8wLjY2XzEuMDBfMC4wMSxlbmNfYXV0by81NGE0Y2RfYjJlNTM2YWJmMGVhNDM2ZDkwNTU3YzVlNTI4YTFlYzB+bXYyLnBuZ1wiLFxuXHRcdFx0YWx0OiBcIkEgYmFyIGZ1bGwgb2YgcGVvcGxlXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzcmM6IFwiaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS81NGE0Y2RfNjY2NDM4ODViZjJlNDRkN2E1ZjkzOTZjZDI2ZjZlOTd+bXYyLmpwZy92MS9maWxsL3dfODMzLGhfNTUwLGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEsZW5jX2F1dG8vNTRhNGNkXzY2NjQzODg1YmYyZTQ0ZDdhNWY5Mzk2Y2QyNmY2ZTk3fm12Mi5qcGdcIixcblx0XHRcdGFsdDogXCJBbiBlbXB0eSBiYXIsIGxpdCBmcm9tIHVuZGVybmVhdGhcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNyYzogXCJodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzU0YTRjZF81YzAyNDgwNDAwMTU0YmJlYmQwNzU4ZWIyZjhkN2I4ZH5tdjJfZF8xNjAwXzEyMDBfc18yLmpwZy92MS9maWxsL3dfODMzLGhfNTUwLGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEsZW5jX2F1dG8vNTRhNGNkXzVjMDI0ODA0MDAxNTRiYmViZDA3NThlYjJmOGQ3Yjhkfm12Ml9kXzE2MDBfMTIwMF9zXzIuanBnXCIsXG5cdFx0XHRhbHQ6IFwiUmVzdGF1cmFudCBzdGFmZlwiLFxuXHRcdH0sXG5cdF1cblx0XHQubWFwKChpbWdPYmosIGluZGV4KSA9PiB7XG5cdFx0XHRjb25zdCBbc3JjLCBhbHRdID0gW2ltZ09iai5zcmMsIGltZ09iai5hbHRdO1xuXHRcdFx0cmV0dXJuIGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJpbWFnZS1jb250YWluZXJcIiB9LCBbXG5cdFx0XHRcdGVsRmFjdG9yeShcImltZ1wiLCB7IHNyYywgYWx0IH0pLFxuXHRcdFx0XSk7XG5cdFx0fSlcblx0XHQucmVkdWNlKChhY2MsIGN1cnJlbnRJbWcsIGluZGV4KSA9PiB7XG5cdFx0XHRpZiAoIShpbmRleCAmIDEpKSB7XG5cdFx0XHRcdC8vIElmIGV2ZW4sIGNyZWF0ZSB0aWVyIHdpdGggY2hpbGQgaW1nXG5cdFx0XHRcdGFjYy5wdXNoKGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJ0aWVyXCIgfSwgW2N1cnJlbnRJbWddKSk7XG5cdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBJZiBvZGQsIGFkZCBpbWcgY2hpbGQgdG8gcHJldmlvdXMgdGllclxuXHRcdFx0XHRhY2NbYWNjLmxlbmd0aCAtIDFdLmNoaWxkcmVuLnB1c2goY3VycmVudEltZyk7XG5cdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHR9XG5cdFx0fSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRFdmVudHMoKSB7XG5cdGNvbnN0IFtldmVudHNDb250ZW50LCBwaG90b3MsIGNhbGxUb0FjdGlvbiwgbW9kYWxFbGVtZW50XSA9IFtcblx0XHRcImNvbnRlbnRcIixcblx0XHRcInBob3Rvc1wiLFxuXHRcdFwiY2FsbC10by1hY3Rpb25cIixcblx0XHRcIm1vZGFsIGNsb3NlLW1vZGFsIGhpZGRlblwiLFxuXHRdLm1hcCgoZWwpID0+IHtcblx0XHRyZXR1cm4gZWxGYWN0b3J5KFwiYXJ0aWNsZVwiLCB7IGNsYXNzTGlzdDogZWwgfSk7XG5cdH0pO1xuXG5cdGV2ZW50c0NvbnRlbnQuY2hpbGRyZW4ucHVzaChcblx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiYXJ0XCIgfSksXG5cdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcInRleHRcIiB9LCBjcmVhdGVUZXh0Q2hpbGRyZW4oKSlcblx0KTtcblxuXHRwaG90b3MuY2hpbGRyZW4ucHVzaCguLi5jcmVhdGVQaG90b3MoKSk7XG5cblx0Y2FsbFRvQWN0aW9uLmNoaWxkcmVuLnB1c2goXG5cdFx0ZWxGYWN0b3J5KFwicFwiLCB7IHRleHRDb250ZW50OiBcIkxldCB1cyBob3N0IHlvdXIgbmV4dCBldmVudFwiIH0pLFxuXHRcdGVsRmFjdG9yeShcImJ1dHRvblwiLCB7XG5cdFx0XHRjbGFzc0xpc3Q6IFwiaW5xdWlyZVwiLFxuXHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdHRleHRDb250ZW50OiBcIklucXVpcmUgTm93XCIsXG5cdFx0fSlcblx0KTtcblxuXHRtb2RhbEVsZW1lbnQuY2hpbGRyZW4ucHVzaChjcmVhdGVGb3JtKCkpO1xuXG5cdHJldHVybiBodG1sRmFjdG9yeShcblx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiZXZlbnRzIGR5bmFtaWNcIiB9LCBbXG5cdFx0XHRldmVudHNDb250ZW50LFxuXHRcdFx0cGhvdG9zLFxuXHRcdFx0Y2FsbFRvQWN0aW9uLFxuXHRcdFx0bW9kYWxFbGVtZW50LFxuXHRcdF0pXG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW5Gb3JDbGlja3MoKSB7XG5cdGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcblxuXHRjb25zdCBpbnF1aXJlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5xdWlyZVwiKTtcblx0aW5xdWlyZUJ0bnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXHRcdH0pO1xuXHR9KTtcblxuXHRjb25zdCBjbG9zZU1vZGFsQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2xvc2UtbW9kYWxcIik7XG5cdGNsb3NlTW9kYWxCdG5zLmZvckVhY2goKGNsb3NlcikgPT4ge1xuXHRcdGNsb3Nlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdGlmIChlLnRhcmdldC5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoXCJjbG9zZS1tb2RhbFwiKSkge1xuXHRcdFx0XHRtb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcblxuXHRjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zb2xlLmxvZyhcIkZvcm0gc3VibWl0dGVkLlwiKTtcblx0XHRtb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHR9KTtcbn1cbiIsImltcG9ydCB7IGVsRmFjdG9yeSwgZm9ybVJvd0ZhY3RvcnkgfSBmcm9tIFwiLi9kb20tZmFjdG9yaWVzLmpzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZURldGFpbFNlY3Rpb24oKSB7XG5cdC8vIEZpcnN0IGZvcm0taXRlbVxuXHRjb25zdCBldmVudFR5cGUgPSBlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiZm9ybS1pdGVtXCIgfSwgW1xuXHRcdGVsRmFjdG9yeShcImxhYmVsXCIsIHtcblx0XHRcdGh0bWxGb3I6IFwiZXZlbnQtdHlwZVwiLFxuXHRcdFx0dGV4dENvbnRlbnQ6IFwiVHlwZSBvZiBFdmVudDpcIixcblx0XHR9KSxcblx0XHRlbEZhY3RvcnkoXCJpbnB1dFwiLCB7XG5cdFx0XHRpZDogXCJldmVudC10eXBlXCIsXG5cdFx0XHR0eXBlOiBcInRleHRcIixcblx0XHRcdHBsYWNlaG9sZGVyOiBcIkJpcnRoZGF5LCBCdXNpbmVzcyBEaW5uZXIsIGV0Yy5cIixcblx0XHRcdGF1dG9jb21wbGV0ZTogXCJvZmZcIixcblx0XHR9KSxcblx0XSk7XG5cblx0Ly8gTXVsdGlwbGUgY2hvaWNlIHJhZGlvIGJ1dHRvbnNcblx0Y29uc3QgbG9jYXRpb24gPSBlbEZhY3RvcnkoXCJmaWVsZHNldFwiLCB7IGNsYXNzTGlzdDogXCJsb2NhdGlvblwiIH0sIFtcblx0XHRlbEZhY3RvcnkoXCJsZWdlbmRcIiwgeyB0ZXh0Q29udGVudDogXCJMb2NhdGlvbjpcIiB9KSxcblx0XHQuLi5bXG5cdFx0XHRbXCJhc3NldFwiLCBcIjMyOSBDb2x1bWJ1cyBBdmUuXCJdLFxuXHRcdFx0W1widGVzc2FcIiwgXCIzNDkgQW1zdGVyZGFtIEF2ZS5cIl0sXG5cdFx0XS5tYXAoKHBhaXIpID0+IHtcblx0XHRcdHJldHVybiBlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiZm9ybS1pdGVtXCIgfSwgW1xuXHRcdFx0XHRlbEZhY3RvcnkoXCJsYWJlbFwiLCB7fSwgW1xuXHRcdFx0XHRcdGVsRmFjdG9yeShcImlucHV0XCIsIHtcblx0XHRcdFx0XHRcdG5hbWU6IFwibG9jYXRpb25cIixcblx0XHRcdFx0XHRcdHR5cGU6IFwicmFkaW9cIixcblx0XHRcdFx0XHRcdHZhbHVlOiBwYWlyWzBdLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdGVsRmFjdG9yeShcInNwYW5cIiwge1xuXHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IHBhaXJbMF0udG9VcHBlckNhc2UoKSArIFwiIC0gXCIgKyBwYWlyWzFdLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRdKSxcblx0XHRcdF0pO1xuXHRcdH0pLFxuXHRdKTtcblxuXHQvLyBMYXN0IDIgcm93cyBvZiB0aGlzIHNlY3Rpb25cblx0Y29uc3QgYnlUaGVOdW1iZXJzID0gZm9ybVJvd0ZhY3RvcnkoW1xuXHRcdFtcIlBhcnR5IFNpemVcIiwgXCJudW1iZXJcIiwgXCJvZmZcIl0sXG5cdFx0W1wiRGF0ZVwiLCBcImRhdGVcIiwgXCJvZmZcIl0sXG5cdFx0W1wiU3RhcnQgVGltZVwiLCBcInRpbWVcIiwgXCJvZmZcIl0sXG5cdFx0W1wiRW5kIFRpbWVcIiwgXCJ0aW1lXCIsIFwib2ZmXCJdLFxuXHRdKTtcblxuXHRyZXR1cm4gW2V2ZW50VHlwZSwgbG9jYXRpb24sIC4uLmJ5VGhlTnVtYmVyc107XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV4dHJhc1NlY3Rpb24oKSB7XG5cdC8vIDEgZm9ybS1pdGVtIHdpdGggdGV4dGFyZWEgYW5kIDEgd2l0aCBzZWxlY3Rcblx0Y29uc3QgW3RleHRBcmVhSXRlbSwgc2VsZWN0SXRlbV0gPSBbXG5cdFx0W1wiZXh0cmEtaW5mb1wiLCBcInRleHRhcmVhXCJdLFxuXHRcdFtcInJlZmVycmFsLXNvdXJjZVwiLCBcInNlbGVjdFwiXSxcblx0XS5tYXAoKHBhaXIpID0+IHtcblx0XHRyZXR1cm4gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImZvcm0taXRlbVwiIH0sIFtcblx0XHRcdGVsRmFjdG9yeShcImxhYmVsXCIsIHsgaHRtbEZvcjogcGFpclswXSB9KSxcblx0XHRcdGVsRmFjdG9yeShwYWlyWzFdLCB7IG5hbWU6IHBhaXJbMF0sIGlkOiBwYWlyWzBdIH0pLFxuXHRcdF0pO1xuXHR9KTtcblxuXHQvLyBBZGQgdGV4dCBjb250ZW50IHRvIGVhY2ggPGxhYmVsPlxuXHR0ZXh0QXJlYUl0ZW0uY2hpbGRyZW5bMF0uYXR0cmlidXRlcy50ZXh0Q29udGVudCA9XG5cdFx0XCJJcyB0aGVyZSBhbnkgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiB5b3Ugd291bGQgbGlrZSB0byBhZGQ/XCI7XG5cdHNlbGVjdEl0ZW0uY2hpbGRyZW5bMF0uYXR0cmlidXRlcy50ZXh0Q29udGVudCA9XG5cdFx0XCJIb3cgZGlkIHlvdSBoZWFyIGFib3V0IHVzP1wiO1xuXG5cdC8vIEFkZCBhdHRyaWJ1dGVzIHRvIDx0ZXh0YXJlYT5cblx0dGV4dEFyZWFJdGVtLmNoaWxkcmVuWzFdLmF0dHJpYnV0ZXMucm93cyA9IFwiNlwiO1xuXHR0ZXh0QXJlYUl0ZW0uY2hpbGRyZW5bMV0uYXR0cmlidXRlcy5wbGFjZWhvbGRlciA9XG5cdFx0XCJTdXJwcmlzZXMsIERpZXRhcnkgTmVlZHMsIGV0Yy5cIjtcblxuXHQvLyBBZGQgOSA8b3B0aW9uPidzIHRvIDxzZWxlY3Q+XG5cdGNvbnN0IG9wdGlvbnNBcnJheSA9IFtcblx0XHRcIkV2ZW50VXBcIixcblx0XHRcIkluc3RhZ3JhbVwiLFxuXHRcdFwiRmFjZWJvb2tcIixcblx0XHRcIlRyaXBsZXNlYXQgUmVzdGF1cmFudHNcIixcblx0XHRcIlNlYXJjaCBFbmdpbmVcIixcblx0XHRcIkVtYWlsXCIsXG5cdFx0XCJPdGhlclwiLFxuXHRcdFwiV2Vic2l0ZVwiLFxuXHRdLm1hcCgodGV4dCkgPT4ge1xuXHRcdHJldHVybiBlbEZhY3RvcnkoXCJvcHRpb25cIiwge1xuXHRcdFx0dmFsdWU6IHRleHQuc3BsaXQoXCIgXCIpWzBdLnRvTG93ZXJDYXNlKCksXG5cdFx0XHR0ZXh0Q29udGVudDogdGV4dCxcblx0XHR9KTtcblx0fSk7XG5cblx0c2VsZWN0SXRlbS5jaGlsZHJlblsxXS5jaGlsZHJlbi5wdXNoKFxuXHRcdGVsRmFjdG9yeShcIm9wdGlvblwiLCB7XG5cdFx0XHR2YWx1ZTogXCJcIixcblx0XHRcdHRleHRDb250ZW50OiBcIlNlbGVjdCBhbiBvcHRpb25cIixcblx0XHRcdHNlbGVjdGVkOiB0cnVlLFxuXHRcdH0pLFxuXHRcdC4uLm9wdGlvbnNBcnJheVxuXHQpO1xuXG5cdHJldHVybiBbdGV4dEFyZWFJdGVtLCBzZWxlY3RJdGVtXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XG5cdC8vIENyZWF0ZSBzZWN0aW9ucyBjb250YWluZXJzIGZvciB0aGUgY29tcGxpY2F0ZWQgcGFydHNcblx0Y29uc3QgW2Zvcm1Db250YWN0LCBmb3JtRGV0YWlscywgZm9ybUV4dHJhc10gPSBbXG5cdFx0XCJmb3JtLWNvbnRhY3RcIixcblx0XHRcImZvcm0tZGV0YWlsc1wiLFxuXHRcdFwiZm9ybS1leHRyYXNcIixcblx0XS5tYXAoKGVsKSA9PiB7XG5cdFx0cmV0dXJuIGVsRmFjdG9yeShcInNlY3Rpb25cIiwgeyBjbGFzc0xpc3Q6IGVsIH0pO1xuXHR9KTtcblxuXHRmb3JtQ29udGFjdC5jaGlsZHJlbi5wdXNoKFxuXHRcdGVsRmFjdG9yeShcImg0XCIsIHsgdGV4dENvbnRlbnQ6IFwiQ29udGFjdFwiIH0pLFxuXHRcdC4uLmZvcm1Sb3dGYWN0b3J5KFtcblx0XHRcdFtcIkZpcnN0IE5hbWVcIiwgXCJ0ZXh0XCIsIFwiZ2l2ZW4tbmFtZVwiXSxcblx0XHRcdFtcIkxhc3QgTmFtZVwiLCBcInRleHRcIiwgXCJmYW1pbHktbmFtZVwiXSxcblx0XHRcdFtcIkVtYWlsXCIsIFwiZW1haWxcIiwgXCJlbWFpbFwiXSxcblx0XHRcdFtcIlBob25lXCIsIFwidGVsXCIsIFwidGVsXCJdLFxuXHRcdFx0W1wiQ29tcGFueVwiLCBcInRleHRcIiwgXCJvcmdhbml6YXRpb25cIl0sXG5cdFx0XSlcblx0KTtcblxuXHRmb3JtRGV0YWlscy5jaGlsZHJlbi5wdXNoKFxuXHRcdGVsRmFjdG9yeShcImg0XCIsIHsgdGV4dENvbnRlbnQ6IFwiRXZlbnQgRGV0YWlsc1wiIH0pLFxuXHRcdC4uLmNyZWF0ZURldGFpbFNlY3Rpb24oKVxuXHQpO1xuXG5cdGZvcm1FeHRyYXMuY2hpbGRyZW4ucHVzaChcblx0XHRlbEZhY3RvcnkoXCJoNFwiLCB7IHRleHRDb250ZW50OiBcIkV4dHJhc1wiIH0pLFxuXHRcdC4uLmNyZWF0ZUV4dHJhc1NlY3Rpb24oKVxuXHQpO1xuXG5cdC8vIENyZWF0ZSBmb3JtIGVsZW1lbnQgYW5kIG92ZXJhcmNoaW5nIHN0cnVjdHVyZVxuXHRjb25zdCBmb3JtRWxlbWVudCA9IGVsRmFjdG9yeShcImZvcm1cIiwge30sIFtcblx0XHRlbEZhY3RvcnkoXCJzZWN0aW9uXCIsIHsgY2xhc3NMaXN0OiBcImZvcm0taGVhZGVyXCIgfSwgW1xuXHRcdFx0ZWxGYWN0b3J5KFwiaDNcIiwgeyB0ZXh0Q29udGVudDogXCJMZXQncyBnZXQgc29tZSBpbmZvIVwiIH0pLFxuXHRcdFx0ZWxGYWN0b3J5KFwiYnV0dG9uXCIsIHtcblx0XHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdFx0Y2xhc3NMaXN0OiBcImNsb3NlLW1vZGFsIGNsb3NlLWJ0blwiLFxuXHRcdFx0XHRpZDogXCJjbG9zZS1tb2RhbFwiLFxuXHRcdFx0XHR0ZXh0Q29udGVudDogXCLDl1wiLFxuXHRcdFx0fSksXG5cdFx0XSksXG5cdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImZvcm0tY29udGVudFwiIH0sIFtcblx0XHRcdGZvcm1Db250YWN0LFxuXHRcdFx0Zm9ybURldGFpbHMsXG5cdFx0XHRmb3JtRXh0cmFzLFxuXHRcdF0pLFxuXHRcdGVsRmFjdG9yeShcImJ1dHRvblwiLCB7IHR5cGU6IFwic3VibWl0XCIsIHRleHRDb250ZW50OiBcIlN1Ym1pdFwiIH0pLFxuXHRdKTtcblx0cmV0dXJuIGZvcm1FbGVtZW50O1xufVxuIiwiaW1wb3J0IHsgZWxGYWN0b3J5LCBodG1sRmFjdG9yeSB9IGZyb20gXCIuL2RvbS1mYWN0b3JpZXMuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSG9tZSgpIHtcblx0Y29uc3QgaGVyb1RleHQgPSBlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiaGVyby10ZXh0XCIgfSwgW1xuXHRcdGVsRmFjdG9yeShcImgxXCIsIHsgY2xhc3NMaXN0OiBcImJyYW5kXCIsIHRleHRDb250ZW50OiBcIkFFXCIgfSksXG5cdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcInJlc2VydmF0aW9uc1wiIH0sIFtcblx0XHRcdGVsRmFjdG9yeShcImFcIiwge1xuXHRcdFx0XHRocmVmOiBcImh0dHBzOi8vcmVzeS5jb20vY2l0aWVzL255L2Fzc2V0XCIsXG5cdFx0XHRcdHRleHRDb250ZW50OiBcInJlc2VydmF0aW9uc1wiLFxuXHRcdFx0fSksXG5cdFx0XSksXG5cdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcInNjcm9sbC1kb3duXCIgfSwgW1xuXHRcdFx0ZWxGYWN0b3J5KFwiYVwiLCB7IGhyZWY6IFwiI2hvdXJzXCIgfSwgW1xuXHRcdFx0XHRlbEZhY3RvcnkoXCJpXCIsIHtcblx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwiZmEgZmEtYW5nbGUtZG93blwiLFxuXHRcdFx0XHR9KSxcblx0XHRcdF0pLFxuXHRcdF0pLFxuXHRdKTtcblxuXHRjb25zdCBsYW50ZXJucyA9IGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJsYW50ZXJuc1wiIH0pO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdGxhbnRlcm5zLmNoaWxkcmVuLnB1c2goXG5cdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwibGFudGVyblwiIH0sIFtcblx0XHRcdFx0Li4uW1widG9wXCIsIFwiYm9keVwiLCBcImJvdHRvbVwiXS5tYXAoKHRleHQpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gZWxGYWN0b3J5KFwiZGl2XCIsIHtcblx0XHRcdFx0XHRcdGNsYXNzTGlzdDogdGV4dCxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSksXG5cdFx0XHRdKVxuXHRcdCk7XG5cdH1cblxuXHRjb25zdCBob3Vyc0RldGFpbHMgPSBbXG5cdFx0e1xuXHRcdFx0c2NoZWR1bGU6IFwib3BlcmF0aW5nIGhvdXJzXCIsXG5cdFx0XHRob3Vyc1RleHQ6IHtcblx0XHRcdFx0XCJtb25kYXktZnJpZGF5XCI6IFwiNHBtLTExcG1cIixcblx0XHRcdFx0c2F0dXJkYXk6IFwiMnBtLTJhbVwiLFxuXHRcdFx0XHRzdW5kYXk6IFwiMnBtLTEwcG1cIixcblx0XHRcdH0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzY2hlZHVsZTogXCJkaW5uZXIgaG91cnNcIixcblx0XHRcdGhvdXJzVGV4dDoge1xuXHRcdFx0XHRcIm1vbmRheS10aHVyc2RheVwiOiBcIjVwbS0xMHBtXCIsXG5cdFx0XHRcdGZyaWRheTogXCI1cG0tMTFwbVwiLFxuXHRcdFx0XHRzYXR1cmRheTogXCIycG0tMTFwbVwiLFxuXHRcdFx0XHRzdW5kYXk6IFwiMnBtLTlwbVwiLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNjaGVkdWxlOiBcImhhcHB5IGhvdXJcIixcblx0XHRcdGhvdXJzVGV4dDoge1xuXHRcdFx0XHRcIm1vbmRheS1mcmlkYXlcIjogXCI0cG0tNnBtXCIsXG5cdFx0XHRcdHNhdHVyZGF5OiBcIjEwcG0tMTJhbVwiLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRdO1xuXG5cdGNvbnN0IGhvdXJzRGl2cyA9IGhvdXJzRGV0YWlscy5tYXAoKGhvdXJzT2JqZWN0KSA9PiB7XG5cdFx0cmV0dXJuIGVsRmFjdG9yeShcblx0XHRcdFwiZGl2XCIsXG5cdFx0XHR7XG5cdFx0XHRcdGNsYXNzTGlzdDogaG91cnNPYmplY3Quc2NoZWR1bGUuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpLFxuXHRcdFx0fSxcblx0XHRcdFtcblx0XHRcdFx0ZWxGYWN0b3J5KFwiaDJcIiwgeyB0ZXh0Q29udGVudDogaG91cnNPYmplY3Quc2NoZWR1bGUgKyBcIjpcIiB9KSxcblx0XHRcdFx0Li4uT2JqZWN0LmVudHJpZXMoaG91cnNPYmplY3QuaG91cnNUZXh0KS5tYXAoKGVudHJ5KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsRmFjdG9yeShcInBcIiwge1xuXHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IGAke2VudHJ5WzBdfTogJHtlbnRyeVsxXX0gYCxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSksXG5cdFx0XHRdXG5cdFx0KTtcblx0fSk7XG5cblx0Y29uc3QgaG9tZURpdiA9IGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJob21lIGR5bmFtaWNcIiB9LCBbXG5cdFx0ZWxGYWN0b3J5KFwic2VjdGlvblwiLCB7IGNsYXNzTGlzdDogXCJoZXJvXCIgfSwgW1xuXHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImFydFwiIH0pLFxuXHRcdFx0aGVyb1RleHQsXG5cdFx0XHRsYW50ZXJucyxcblx0XHRdKSxcblx0XHRlbEZhY3RvcnkoXCJzZWN0aW9uXCIsIHsgY2xhc3NMaXN0OiBcImhvdXJzLWNvbnRhaW5lclwiIH0sIFtcblx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJob3Vyc1wiLCBpZDogXCJob3Vyc1wiIH0sIGhvdXJzRGl2cyksXG5cdFx0XSksXG5cdF0pO1xuXHRyZXR1cm4gaHRtbEZhY3RvcnkoaG9tZURpdik7XG59XG4iLCJpbXBvcnQgeyBlbEZhY3RvcnksIGh0bWxGYWN0b3J5IH0gZnJvbSBcIi4vZG9tLWZhY3Rvcmllcy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRNZW51KCkge1xuXHRjb25zdCBkaW5uZXJMaW5rID1cblx0XHRcImh0dHBzOi8vd3d3LmFzc2V0cmVzdGF1cmFudC5jb20vX2ZpbGVzL3VnZC81NGE0Y2RfM2E3YTBhNTVhZTc0NGZjZWFlYzg1M2JjMGIxOWM3YjIucGRmXCI7XG5cdGNvbnN0IHdpbmVMaW5rID1cblx0XHRcImh0dHBzOi8vd3d3LmFzc2V0cmVzdGF1cmFudC5jb20vX2ZpbGVzL3VnZC81NGE0Y2RfMzgxZTUwZGU2OWFjNGIzZGFlNWY4MDU1MTNjMzM0ZDYucGRmXCI7XG5cblx0cmV0dXJuIGh0bWxGYWN0b3J5KFxuXHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJtZW51IGR5bmFtaWNcIiB9LCBbXG5cdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwibWVudS1hcnRcIiB9KSxcblx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJtZW51LXRleHRcIiB9LCBbXG5cdFx0XHRcdC4uLltcImRpbm5lclwiLCBcIndpbmVcIl0ubWFwKCh0ZXh0KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsRmFjdG9yeShcImFcIiwge1xuXHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IHRleHQsXG5cdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwibWVudS1saW5rXCIsXG5cdFx0XHRcdFx0XHRocmVmOiB0ZXh0ID09PSBcImRpbm5lclwiID8gZGlubmVyTGluayA6IHdpbmVMaW5rLFxuXHRcdFx0XHRcdFx0dGFyZ2V0OiBcIl9ibGFua1wiLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0ZWxGYWN0b3J5KFwiaDFcIiwgeyBjbGFzc0xpc3Q6IFwiYnJhbmRcIiwgdGV4dENvbnRlbnQ6IFwiQUVcIiB9KSxcblx0XHRcdF0pLFxuXHRcdF0pXG5cdCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBidWlsZE1lbnUgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgeyBidWlsZEhvbWUgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgeyBidWlsZEV2ZW50cywgbGlzdGVuRm9yQ2xpY2tzIH0gZnJvbSBcIi4vZXZlbnQuanNcIjtcbmltcG9ydCB7IGJ1aWxkQWJvdXRVcyB9IGZyb20gXCIuL2Fib3V0LXVzLmpzXCI7XG5pbXBvcnQgeyBidWlsZENvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3JlYm9vdC11dGlsLmNzc1wiO1xuXG5jb25zdCBhbGxDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtY29udGVudFwiKTtcbmFsbENvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuWy4uLmJ1aWxkQ29uc3RhbnRzKCldLmZvckVhY2goKHNlY3Rpb24pID0+IGFsbENvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvbikpO1xuXG5jb25zdCBjaGFuZ2luZ0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYW5naW5nLWNvbnRlbnRcIik7XG5jaGFuZ2luZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRIb21lKCkpO1xuXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLXRvZ2dsZXJcIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG5cdH0pO1xufSk7XG5cbmZ1bmN0aW9uIGhhbmRsZUJ1aWxkQ2xpY2sodGFiQ2hvaWNlKSB7XG5cdGNoYW5naW5nQ29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cdGNoYW5naW5nQ29udGVudC5hcHBlbmRDaGlsZChcblx0XHR7XG5cdFx0XHRcImhvbWUtYnRuXCI6IGJ1aWxkSG9tZSgpLFxuXHRcdFx0XCJldmVudHMtYnRuXCI6IGJ1aWxkRXZlbnRzKCksXG5cdFx0XHRcIm1lbnUtYnRuXCI6IGJ1aWxkTWVudSgpLFxuXHRcdFx0XCJhYm91dC1idG5cIjogYnVpbGRBYm91dFVzKCksXG5cdFx0fVt0YWJDaG9pY2VdXG5cdCk7XG5cdHNpZGViYXIuY2xhc3NMaXN0ID0gXCJzaWRlYmFyXCI7XG5cdGlmICh0YWJDaG9pY2UgPT09IFwiZXZlbnRzLWJ0blwiKSB7XG5cdFx0bGlzdGVuRm9yQ2xpY2tzKCk7XG5cdH1cbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYnRuXCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0aGFuZGxlQnVpbGRDbGljayhlLnRhcmdldC5pZCk7XG5cdH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=