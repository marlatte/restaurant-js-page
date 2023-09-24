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

	--footer-height: 70px;
	--art-width: 100%;

	scroll-behavior: smooth;
}

body {
	min-height: 100svh;

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
/* ---------------     CONTENT     --------------- */

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
	padding: 10px 20px 15px;

	display: flex;
	flex-direction: column-reverse;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* ---------------     Reboot     --------------- */\n\n*,\n*::before,\n*::after {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nbutton {\n\tcursor: pointer;\n\tbackground-color: unset;\n\tcolor: unset;\n\tborder: none;\n\tfont-size: unset;\n}\n\na {\n\tcolor: unset;\n\ttext-decoration: none;\n}\n\nh1,\nh2 {\n\tfont-weight: normal;\n}\n\n/* ---------------     /Reboot     --------------- */\n/* ---------------     Utilities & Universals     --------------- */\n\n:root {\n\t--bg-main: #ff4040;\n\t--accent-main-dark: #3d0000;\n\t--bg-lantern: #e83030;\n\t--text-h1: #f5ce54;\n\t--bg-input: white;\n\t--border-input: black;\n\n\t--footer-height: 70px;\n\t--art-width: 100%;\n\n\tscroll-behavior: smooth;\n}\n\nbody {\n\tmin-height: 100svh;\n\n\tbackground-color: var(--bg-main);\n\tcolor: #fff;\n\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n\t\tRoboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n}\n\nh1.brand {\n\t--font-size: 110px;\n\n\tcolor: var(--text-h1);\n\ttext-shadow: 0 0 5px black;\n\tfont-size: var(--font-size);\n\tline-height: calc(var(--font-size) * 0.8);\n}\n\n.hidden {\n\tdisplay: none !important;\n}\n\n.socials {\n\tgap: 10px;\n\tfont-size: 25px;\n}\n\na.underline {\n\ttext-decoration: underline 1px;\n\ttext-underline-offset: 3px;\n}\n\n/* ---------------     /Utilities & Universals     --------------- */\n/* ---------------     CONTENT     --------------- */\n\n/* ---------------     Sidebar     --------------- */\n\n.sidebar {\n\tposition: fixed;\n\tz-index: 1;\n\theight: 100%;\n\twidth: 0px;\n\tpadding: 20px 0;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\toverflow-x: hidden;\n\n\tbackground-color: var(--bg-main);\n\tfont-size: 40px;\n\tbox-shadow: 0px 0px 7px var(--accent-main-dark);\n\n\ttransition: 0.5s;\n\n\t&.open {\n\t\twidth: 300px;\n\t\tpadding: 20px;\n\t}\n\n\t#close-sidebar {\n\t\talign-self: end;\n\t}\n\n\t@media (min-width: 700px) {\n\t\twidth: 100%;\n\t\tposition: static;\n\n\t\tbox-shadow: 0px 0px 5px var(--accent-main-dark);\n\t\tborder: none;\n\n\t\t&.open {\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t#close-sidebar {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n}\n\n.close-btn {\n\t--font-size: 50px;\n\n\tfont-size: var(--font-size);\n\tline-height: calc(var(--font-size) * 0.6);\n}\n\nnav {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 1;\n\tgap: 50px;\n\n\t& button {\n\t\ttext-align: left;\n\t\tmargin-left: 22px;\n\t}\n\n\t& button:hover {\n\t\tcolor: var(--text-h1);\n\t}\n\n\t@media (min-width: 700px) {\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\t}\n}\n\nheader {\n\tpadding-right: 20px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\n\tbox-shadow: 0px 0px 5px var(--accent-main-dark);\n\tfont-size: 24px;\n\n\t#open-sidebar {\n\t\tpadding: 15px;\n\t\tbackground-color: black;\n\t}\n\n\t& .socials {\n\t\tdisplay: flex;\n\t}\n\n\t@media (min-width: 700px) {\n\t\tdisplay: none;\n\t}\n}\n\n/* ---------------     /Sidebar     --------------- */\n\n/* ---------------     Main     --------------- */\n\n#changing-content {\n\tmargin-bottom: calc(var(--footer-height) * 2);\n\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n/* ---------------     Home     --------------- */\n\n.home {\n\tmargin-top: 20px;\n\n\t& h2 {\n\t\tcolor: var(--text-h1);\n\t}\n\n\t@media (min-width: 700px) {\n\t\tmargin-top: 0;\n\t}\n}\n\n.hero {\n\tposition: relative;\n\theight: calc(100svh - 80px);\n\twidth: 90%;\n\tmargin: auto;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\n\t@media (min-width: 700px) {\n\t\t--art-width: min(190px, 20%);\n\t\twidth: min(90%, 1300px);\n\t\tmargin: auto;\n\t\tjustify-content: space-between;\n\t\theight: calc(100svh - 100px);\n\t}\n}\n\n.art {\n\theight: 68%;\n\twidth: var(--art-width);\n\n\tbackground-image: url(https://static.wixstatic.com/media/54a4cd_5059116c59d244d08c3170b49d6e7b0f~mv2.jpg/v1/fill/w_546,h_728,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_5059116c59d244d08c3170b49d6e7b0f~mv2.jpg);\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\n\t@media screen and (min-width: 700px) {\n\t\theight: 80%;\n\n\t\tbackground-image: url(https://static.wixstatic.com/media/54a4cd_ae5e22486dbb49debb9cd8ba1b780b6e~mv2.jpg/v1/fill/w_388,h_1240,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Artwork1_Final_8x2_5.jpg);\n\t}\n}\n\n.hero-text {\n\tposition: absolute;\n\tbottom: 90px;\n\n\tdisplay: grid;\n\tgap: 35px;\n\n\t& h1 {\n\t\t--font-size: min(50vw, 300px);\n\t}\n\n\t@media (min-width: 700px) {\n\t\tposition: static;\n\t\tplace-content: center;\n\t\tgap: 60px;\n\t}\n}\n\n.reservations {\n\tcolor: #ffe5e5;\n\tfont-size: 20px;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tletter-spacing: 2px;\n\ttext-decoration: underline 1px;\n\ttext-underline-offset: 2px;\n}\n\n.scroll-down {\n\tdisplay: grid;\n\tplace-content: center;\n\tcolor: var(--text-h1);\n\n\t& .fa-angle-down {\n\t\tmargin-top: 10px;\n\t\tline-height: 16px;\n\t\tfont-size: 70px;\n\t\tanimation: bounce 2s infinite;\n\t}\n}\n\n@keyframes bounce {\n\t0% {\n\t\ttransform: translateY(0);\n\t}\n\t50% {\n\t\ttransform: translateY(30px);\n\t}\n\t100% {\n\t\ttransform: translateY(0);\n\t}\n}\n\n.lanterns {\n\tdisplay: none;\n\twidth: var(--art-width);\n\theight: 80%;\n\n\t@media (min-width: 700px) {\n\t\tdisplay: grid;\n\t}\n}\n\n.lantern {\n\t--caps-width: 50px;\n\t--caps-height: 20px;\n\n\tdisplay: grid;\n\talign-content: center;\n\tjustify-items: center;\n\n\t& .top,\n\t& .bottom {\n\t\tposition: relative;\n\t\twidth: var(--caps-width);\n\t\theight: var(--caps-height);\n\n\t\tbackground-color: black;\n\t}\n\n\t& .top {\n\t\tbottom: -5px;\n\t\tborder-radius: 80% 80% 0 0;\n\t}\n\n\t& .bottom {\n\t\ttop: -5px;\n\t\tborder-radius: 0 0 80% 80%;\n\t}\n\n\t& .body {\n\t\tz-index: 1;\n\t\theight: 130px;\n\t\twidth: 80%;\n\n\t\tborder-radius: 85px;\n\t\tborder: 1px solid var(--accent-main-dark);\n\t\tbackground-color: var(--bg-main);\n\t\tbackground: repeating-linear-gradient(\n\t\t\tvar(--bg-lantern),\n\t\t\tvar(--bg-lantern) 19%,\n\t\t\tvar(--accent-main-dark) 20%\n\t\t);\n\t}\n\n\t& .body:hover {\n\t\tbackground: radial-gradient(rgba(245, 205, 84, 0.7), transparent 80%),\n\t\t\trepeating-linear-gradient(\n\t\t\t\tvar(--bg-lantern),\n\t\t\t\tvar(--bg-lantern) 19%,\n\t\t\t\tvar(--accent-main-dark) 20%\n\t\t\t);\n\t}\n\n\t& > * {\n\t\tbox-shadow: 3px 3px 6px -3px #8a0f0f;\n\t}\n}\n\n.hours-container {\n\tpadding: 20px;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\n\tborder-top: 2px solid hsl(0, 95%, 70%);\n}\n\n.hours {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 30px;\n\n\t& > div {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tgap: 8px;\n\t}\n\n\t@media (min-width: 700px) {\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\t\twidth: 650px;\n\t\tflex-wrap: wrap;\n\t\tgap: 70px;\n\t}\n}\n\n/* ---------------     /Home     --------------- */\n\n/* ---------------     Menu     --------------- */\n\n.menu {\n\tmargin-top: 5px;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\n\t@media (min-width: 700px) {\n\t\tflex-direction: row;\n\t\tmargin: 10px 20px;\n\t}\n}\n\n.menu-art {\n\theight: 550px;\n\twidth: min(100vw, 400px);\n\tmargin: auto;\n\n\tbackground-image: url(https://static.wixstatic.com/media/54a4cd_b8c9537c5fcd4d859fc958942b5a5e87~mv2.jpg/v1/fill/w_952,h_1322,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_b8c9537c5fcd4d859fc958942b5a5e87~mv2.jpg);\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\n\t@media (min-width: 700px) {\n\t\tmargin: 0;\n\t\theight: calc(100vh - var(--footer-height) * 2.5);\n\t\twidth: min(600px, 50vw);\n\t}\n}\n\n.menu-text {\n\tmargin: -95px 0 40px;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 15px;\n\n\t& > * {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tbackground-color: var(--bg-main);\n\t}\n\n\t& a {\n\t\tpadding: 8px 0;\n\t\ttext-transform: uppercase;\n\t\tfont-size: 30px;\n\t\tletter-spacing: 3px;\n\t}\n\n\t& a:hover {\n\t\tbox-shadow: 0 0 0 1px white;\n\t}\n\n\t@media (min-width: 700px) {\n\t\tmargin: 0 -61px 0;\n\t}\n}\n\n/* ---------------     /Menu     --------------- */\n\n/* ---------------     Events     --------------- */\n\n.events .content {\n\twidth: 90%;\n\tmargin: auto;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 20px;\n\n\t& .art {\n\t\theight: 160px;\n\t\tbackground-position: bottom;\n\t}\n\n\t& .text {\n\t\tmargin: 20px 0;\n\t\tmax-width: 65ch;\n\t}\n\n\t& h1 {\n\t\tfont-size: 30px;\n\t}\n\n\t& h2 {\n\t\tmargin: 30px 0 16px;\n\t}\n\n\t& p {\n\t\tmargin-bottom: 20px;\n\t\tfont-size: 18px;\n\t\tline-height: 1.5;\n\t\tletter-spacing: 1px;\n\t}\n\n\t& p:nth-last-child(2) {\n\t\twidth: min(100%, 440px);\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tjustify-content: space-between;\n\t\tgap: 2px;\n\t}\n\n\t@media (min-width: 700px) {\n\t\t--art-width: min(300px, 30%);\n\n\t\theight: calc(960px - 8vw);\n\t\twidth: min(90%, 1100px);\n\n\t\tflex-direction: row-reverse;\n\t\talign-items: stretch;\n\t\tjustify-content: space-between;\n\n\t\t& .art {\n\t\t\tflex-shrink: 0;\n\t\t\theight: 100%;\n\t\t\tbackground-position: center;\n\t\t}\n\n\t\t& .call-to-action {\n\t\t\talign-items: start;\n\t\t\tpadding: 40px 0;\n\t\t}\n\t}\n}\n\n.photos {\n\tbackground-color: black;\n}\n\n.tier {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t& .image-container {\n\t\tflex-grow: 1;\n\t}\n\n\t& img {\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\tobject-fit: cover;\n\t}\n\n\t@media (min-width: 700px) {\n\t\twidth: 100%;\n\t\tflex-direction: row;\n\t}\n}\n\n.events .call-to-action {\n\tpadding: 90px 0;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 24px;\n\n\t& p {\n\t\tfont-size: 20px;\n\t\tmargin: 0;\n\t}\n\n\t& button {\n\t\tpadding: 20px;\n\n\t\tborder: 1px solid white;\n\t\tborder-radius: 5px;\n\n\t\tfont-size: 18px;\n\t\ttext-transform: uppercase;\n\n\t\ttransition: all 0.3s;\n\t}\n\n\t& button:hover {\n\t\tbackground-color: #fff;\n\t\tcolor: var(--bg-main);\n\t}\n}\n\n/* ---------------     Modal     --------------- */\n\n.modal {\n\tposition: fixed;\n\ttop: 0;\n\tz-index: 2;\n\theight: 100vh;\n\twidth: 100vw;\n\n\tdisplay: grid;\n\tplace-content: center;\n\n\tbackground-color: rgba(200, 200, 200, 0.5);\n\tbackdrop-filter: blur(2px);\n}\n\nform {\n\t--form-spacer: 12px;\n\n\tmax-height: 80vh;\n\tpadding: 12px;\n\twidth: min(90vw, 1000px);\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--form-spacer);\n\n\tbackground-color: skyblue;\n\tcolor: #000;\n\tborder-radius: 15px;\n}\n\n.form-header {\n\tmargin: 0;\n\tpadding-left: 2px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.form-content {\n\tpadding: var(--form-spacer);\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: calc(var(--form-spacer) * 2.5);\n\toverflow-y: scroll;\n\n\tborder: 1px solid var(--border-input);\n\tborder-radius: 5px;\n\n\t@media (min-width: 800px) {\n\t\tflex-direction: row;\n\t\tjustify-content: space-between;\n\t\toverflow-y: auto;\n\t}\n}\n\n.form-content h4 {\n\tfont-size: 20px;\n}\n\n.form-contact,\n.form-details,\n.form-extras {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--form-spacer);\n}\n\n.form-row {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: var(--form-spacer);\n}\n\n.form-item {\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: calc(var(--form-spacer) * 0.5);\n}\n\n.form-details .form-row .form-item {\n\twidth: 47%;\n}\n\ninput,\ntextarea {\n\tappearance: none;\n}\n\ninput,\ntextarea,\nselect {\n\tpadding: 6px 10px;\n\n\tfont-size: max(16px, 0.9rem);\n\tbackground-color: var(--bg-input);\n\tborder: 1px solid var(--border-input);\n\tborder-radius: 5px;\n}\n\nfieldset {\n\tpadding: 8px 8px 10px;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: calc(var(--form-spacer) * 0.8);\n\n\tborder: 1px solid var(--border-input);\n}\n\nlegend {\n\tpadding: 5px 8px;\n\tborder: 1px solid var(--border-input);\n}\n\nlabel input[type=\"radio\"] {\n\tdisplay: none;\n}\nlabel input[type=\"radio\"] ~ span {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 6px;\n}\nlabel input[type=\"radio\"] ~ span:before {\n\t--radio-dimensions: 15px;\n\n\theight: var(--radio-dimensions);\n\twidth: var(--radio-dimensions);\n\n\tcontent: \"\";\n\tbackground: var(--bg-input);\n\tmargin-right: 5px;\n\n\tborder: 1px solid var(--border-input);\n\tborder-radius: var(--radio-dimensions);\n\ttransition: all 300ms ease-in-out;\n}\n\nlabel input[type=\"radio\"]:checked ~ span:before {\n\tborder: 5px solid var(--bg-main);\n}\n\ntextarea {\n\tresize: vertical;\n}\n\nform [type=\"submit\"] {\n\talign-self: center;\n\tpadding: 12px;\n\twidth: min(100%, 280px);\n\n\tbackground-color: var(--text-h1);\n\tborder-radius: 200px;\n\n\tfont-size: 1.5rem;\n\ttext-transform: uppercase;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\n\t&:hover {\n\t\tbox-shadow: inset 0 0 10px #916f08;\n\t}\n}\n\n/* ---------------     /Modal     --------------- */\n/* ---------------     /Events     --------------- */\n/* ---------------     /Main     --------------- */\n\n/* ---------------     Footer     --------------- */\n\nfooter {\n\tposition: fixed;\n\tbottom: 0;\n\tmin-height: var(--footer-height);\n\twidth: 100%;\n\tpadding: 10px 20px 15px;\n\n\tdisplay: flex;\n\tflex-direction: column-reverse;\n\tgap: 10px;\n\n\tbox-shadow: 0px 0px 5px var(--accent-main-dark);\n\tbackground-color: var(--bg-main);\n\n\t& > * {\n\t\tflex: 1;\n\t}\n\n\t& .socials {\n\t\tdisplay: none;\n\t}\n\n\t& .author {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tgap: 10px;\n\n\t\ttext-align: center;\n\t\tfont-size: 20px;\n\t\tcolor: var(--text-strong);\n\t}\n\n\t& .address {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tgap: 8px;\n\t}\n\n\t@media (min-width: 700px) {\n\t\tflex-direction: row;\n\t\talign-items: center;\n\n\t\t& .socials {\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\t& .address {\n\t\t\talign-items: end;\n\t\t}\n\t}\n}\n\n.fa.fa-github {\n\tcolor: currentColor;\n\tfont-size: 30px;\n\n\t&:hover {\n\t\ttransition: transform 0.4s ease-in-out;\n\t\ttransform: rotate(-360deg) scale(1.3);\n\t}\n}\n/* ---------------     /Footer     --------------- */\n/* ---------------     /CONTENT     --------------- */\n"],"sourceRoot":""}]);
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

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildConstants: () => (/* binding */ buildConstants)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


function buildConstants() {
	const sidebar = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "sidebar dynamic" }, [
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("button", {
			type: "button",
			classList: "close-btn sidebar-toggler",
			id: "close-sidebar",
			textContent: "×",
		}),
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(
			"nav",
			{},
			["home", "menu", "events"].map((button) => {
				return (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("button", {
					type: "button",
					classList: "nav-btn",
					id: `${button}-btn`,
					textContent: button,
				});
			})
		),
	]);

	const header = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("header", {}, [
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("button", {
			type: "button",
			classList: "sidebar-toggler",
			id: "open-sidebar",
			textContent: "☰",
		}),
		createSocialIcons(),
	]);

	const footer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("footer", {}, [
		createSocialIcons(),
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "author" }, [
			(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("p", { textContent: "Walker" }),
			(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(
				"a",
				{
					href: "https://github.com/marlatte",
					target: "_blank",
				},
				[(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("i", { classList: "fa fa-github" })]
			),
			(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("p", { textContent: "Marlatt" }),
		]),
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "address", textContent: "" }, [
			(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("a", {
				classList: "underline",
				href: "https://goo.gl/maps/1bbNQt1JpWeHJ7hb9",
				textContent: "329 Columbus Ave, NYC",
			}),
			(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("a", {
				classList: "underline",
				href: "tel:+1-212-517-1987",
				textContent: "+1 212 517 1987",
			}),
		]),
	]);

	return [
		sidebar,
		header,
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("main", { id: "changing-content" }),
		footer,
	].map((section) => {
		return (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.htmlFactory)(section);
	});
}

function createSocialIcons() {
	// returns div.socials with 4 links, each containing an <i>
	return (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(
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
			return (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("a", { href: pair.link }, [
				(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("i", {
					classList: `fa fa-${pair.name}`,
					ariaHidden: true,
				}),
			]);
		})
	);
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



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
		return (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)(entry[0], { textContent: entry[1] });
	});

	textChildren[textChildren.length - 1].children.push(
		(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("a", {
			href: "tel:+1-212-517-1987",
			textContent: "+1 212 517 1987",
			classList: "underline",
		})
	);

	textChildren.push(
		(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("div", { classList: "call-to-action" }, [
			(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("button", {
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
			return (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("div", { classList: "image-container" }, [
				(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("img", { src, alt }),
			]);
		})
		.reduce((acc, currentImg, index) => {
			if (!(index & 1)) {
				// If even, create tier with child img
				acc.push((0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("div", { classList: "tier" }, [currentImg]));
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
		return (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("article", { classList: el });
	});

	eventsContent.children.push(
		(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("div", { classList: "art" }),
		(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("div", { classList: "text" }, createTextChildren())
	);

	photos.children.push(...createPhotos());

	callToAction.children.push(
		(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("p", { textContent: "Let us host your next event" }),
		(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("button", {
			classList: "inquire",
			type: "button",
			textContent: "Inquire Now",
		})
	);

	modalElement.children.push((0,_form_js__WEBPACK_IMPORTED_MODULE_0__.createForm)());

	return (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.htmlFactory)(
		(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.elFactory)("div", { classList: "events dynamic" }, [
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


function formRowFactory(formDataArrays) {
	return formDataArrays
		.map((pair) => {
			const kebab = pair[0].toLowerCase().split(" ").join("-");
			return (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "form-item" }, [
				(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("label", {
					htmlFor: kebab,
					textContent: pair[0] + ":",
				}),
				(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("input", {
					id: kebab,
					type: pair[1],
					autocomplete: pair[2],
				}),
			]);
		})
		.reduce((acc, currentItem, index) => {
			if (!(index & 1)) {
				// If even, create row with currentItem as a child
				acc.push(
					(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "form-row" }, [currentItem])
				);
				return acc;
			} else {
				// If odd, add currentItem to previous row
				acc[acc.length - 1].children.push(currentItem);
				return acc;
			}
		}, []);
}

function createDetailSection() {
	// First form-item
	const eventType = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "form-item" }, [
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("label", {
			htmlFor: "event-type",
			textContent: "Type of Event:",
		}),
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("input", {
			id: "event-type",
			type: "text",
			placeholder: "Birthday, Business Dinner, etc.",
			autocomplete: "off",
		}),
	]);

	// Multiple choice radio buttons
	const location = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("fieldset", { classList: "location" }, [
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("legend", { textContent: "Location:" }),
		...[
			["asset", "329 Columbus Ave."],
			["tessa", "349 Amsterdam Ave."],
		].map((pair) => {
			return (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "form-item" }, [
				(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("label", {}, [
					(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("input", {
						name: "location",
						type: "radio",
						value: pair[0],
					}),
					(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("span", {
						textContent: pair[0].toUpperCase() + " - " + pair[1],
					}),
				]),
			]);
		}),
	]);

	// Last 2 rows of this section
	const byTheNumbers = formRowFactory([
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
		return (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "form-item" }, [
			(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("label", { htmlFor: pair[0] }),
			(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(pair[1], { name: pair[0], id: pair[0] }),
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
		return (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("option", {
			value: text.split(" ")[0].toLowerCase(),
			textContent: text,
		});
	});

	selectItem.children[1].children.push(
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("option", {
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
		return (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("section", { classList: el });
	});

	formContact.children.push(
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("h4", { textContent: "Contact" }),
		...formRowFactory([
			["First Name", "text", "given-name"],
			["Last Name", "text", "family-name"],
			["Email", "email", "email"],
			["Phone", "tel", "tel"],
			["Company", "text", "organization"],
		])
	);

	formDetails.children.push(
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("h4", { textContent: "Event Details" }),
		...createDetailSection()
	);

	formExtras.children.push(
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("h4", { textContent: "Extras" }),
		...createExtrasSection()
	);

	// Create form element and overarching structure
	const formElement = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("form", {}, [
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("section", { classList: "form-header" }, [
			(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("h3", { textContent: "Let's get some info!" }),
			(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("button", {
				type: "button",
				classList: "close-modal close-btn",
				id: "close-modal",
				textContent: "×",
			}),
		]),
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "form-content" }, [
			formContact,
			formDetails,
			formExtras,
		]),
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("button", { type: "submit", textContent: "Submit" }),
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


function buildHome() {
	const heroText = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "hero-text" }, [
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("h1", { classList: "brand", textContent: "AE" }),
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "reservations" }, [
			(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("a", {
				href: "https://resy.com/cities/ny/asset",
				textContent: "reservations",
			}),
		]),
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "scroll-down" }, [
			(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("a", { href: "#hours" }, [
				(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("i", {
					classList: "fa fa-angle-down",
				}),
			]),
		]),
	]);

	const lanterns = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "lanterns" });
	for (let i = 0; i < 3; i++) {
		lanterns.children.push(
			(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "lantern" }, [
				...["top", "body", "bottom"].map((text) => {
					return (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", {
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
		return (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(
			"div",
			{
				classList: hoursObject.schedule.split(" ").join("-"),
			},
			[
				(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("h2", { textContent: hoursObject.schedule + ":" }),
				...Object.entries(hoursObject.hoursText).map((entry) => {
					return (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("p", {
						textContent: `${entry[0]}: ${entry[1]} `,
					});
				}),
			]
		);
	});

	const homeDiv = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "home dynamic" }, [
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("section", { classList: "hero" }, [
			(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "art" }),
			heroText,
			lanterns,
		]),
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("section", { classList: "hours-container" }, [
			(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "hours", id: "hours" }, hoursDivs),
		]),
	]);
	return (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.htmlFactory)(homeDiv);
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elFactory: () => (/* binding */ elFactory),
/* harmony export */   htmlFactory: () => (/* binding */ htmlFactory)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.js */ "./src/event.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const allContent = document.getElementById("all-content");
allContent.textContent = "";
[...(0,_constants_js__WEBPACK_IMPORTED_MODULE_3__.buildConstants)()].forEach((section) => allContent.appendChild(section));

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
		tabChoice === "home-btn"
			? (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.buildHome)()
			: tabChoice === "events-btn"
			? (0,_event_js__WEBPACK_IMPORTED_MODULE_2__.buildEvents)()
			: (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.buildMenu)()
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

////////////// EXPORTS ///////////////
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


function buildMenu() {
	const dinnerLink =
		"https://www.assetrestaurant.com/_files/ugd/54a4cd_3a7a0a55ae744fceaec853bc0b19c7b2.pdf";
	const wineLink =
		"https://www.assetrestaurant.com/_files/ugd/54a4cd_381e50de69ac4b3dae5f805513c334d6.pdf";

	return (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.htmlFactory)(
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "menu dynamic" }, [
			(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "menu-art" }),
			(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "menu-text" }, [
				...["dinner", "wine"].map((text) => {
					return (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("a", {
						textContent: text,
						classList: "menu-link",
						href: text === "dinner" ? dinnerLink : wineLink,
						target: "_blank",
					});
				}),
				(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)("h1", { classList: "brand", textContent: "AE" }),
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3RkFBd0YsUUFBUSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxZQUFZLGNBQWMsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxjQUFjLGNBQWMsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLGNBQWMsYUFBYSxXQUFXLGFBQWEsY0FBYyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsWUFBWSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLE1BQU0sS0FBSyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGNBQWMsYUFBYSxZQUFZLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxhQUFhLGNBQWMsTUFBTSxhQUFhLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxXQUFXLFVBQVUsYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLFlBQVksVUFBVSxXQUFXLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksWUFBWSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxjQUFjLFdBQVcsWUFBWSxjQUFjLE9BQU8sWUFBWSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLFlBQVksYUFBYSxhQUFhLFNBQVMsS0FBSyxNQUFNLEtBQUssU0FBUyxLQUFLLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLEtBQUssTUFBTSxhQUFhLGNBQWMsTUFBTSxXQUFXLFVBQVUsWUFBWSxjQUFjLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksYUFBYSxjQUFjLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssYUFBYSxXQUFXLFlBQVksWUFBWSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxhQUFhLGNBQWMsTUFBTSxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsWUFBWSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxZQUFZLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFlBQVksY0FBYyxXQUFXLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsYUFBYSxXQUFXLGFBQWEsV0FBVyxZQUFZLGNBQWMsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsY0FBYyxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxjQUFjLGNBQWMsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLGFBQWEsV0FBVyxZQUFZLFlBQVksWUFBWSxjQUFjLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxjQUFjLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksWUFBWSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxtSEFBbUgsY0FBYyxlQUFlLDJCQUEyQixHQUFHLFlBQVksb0JBQW9CLDRCQUE0QixpQkFBaUIsaUJBQWlCLHFCQUFxQixHQUFHLE9BQU8saUJBQWlCLDBCQUEwQixHQUFHLGFBQWEsd0JBQXdCLEdBQUcsMElBQTBJLHVCQUF1QixnQ0FBZ0MsMEJBQTBCLHVCQUF1QixzQkFBc0IsMEJBQTBCLDRCQUE0QixzQkFBc0IsOEJBQThCLEdBQUcsVUFBVSx1QkFBdUIsdUNBQXVDLGdCQUFnQix3S0FBd0ssR0FBRyxjQUFjLHVCQUF1Qiw0QkFBNEIsK0JBQStCLGdDQUFnQyw4Q0FBOEMsR0FBRyxhQUFhLDZCQUE2QixHQUFHLGNBQWMsY0FBYyxvQkFBb0IsR0FBRyxpQkFBaUIsbUNBQW1DLCtCQUErQixHQUFHLHVNQUF1TSxvQkFBb0IsZUFBZSxpQkFBaUIsZUFBZSxvQkFBb0Isb0JBQW9CLDJCQUEyQix1QkFBdUIsdUNBQXVDLG9CQUFvQixvREFBb0QsdUJBQXVCLGNBQWMsbUJBQW1CLG9CQUFvQixLQUFLLHNCQUFzQixzQkFBc0IsS0FBSyxpQ0FBaUMsa0JBQWtCLHVCQUF1Qix3REFBd0QsbUJBQW1CLGdCQUFnQixvQkFBb0IsT0FBTyx3QkFBd0Isc0JBQXNCLE9BQU8sS0FBSyxHQUFHLGdCQUFnQixzQkFBc0Isa0NBQWtDLDhDQUE4QyxHQUFHLFNBQVMsa0JBQWtCLDJCQUEyQixZQUFZLGNBQWMsZ0JBQWdCLHVCQUF1Qix3QkFBd0IsS0FBSyxzQkFBc0IsNEJBQTRCLEtBQUssaUNBQWlDLDBCQUEwQiw4QkFBOEIsS0FBSyxHQUFHLFlBQVksd0JBQXdCLGtCQUFrQix3QkFBd0IsbUNBQW1DLHNEQUFzRCxvQkFBb0IscUJBQXFCLG9CQUFvQiw4QkFBOEIsS0FBSyxrQkFBa0Isb0JBQW9CLEtBQUssaUNBQWlDLG9CQUFvQixLQUFLLEdBQUcsdUlBQXVJLGtEQUFrRCxvQkFBb0IsMkJBQTJCLEdBQUcsaUVBQWlFLHFCQUFxQixZQUFZLDRCQUE0QixLQUFLLGlDQUFpQyxvQkFBb0IsS0FBSyxHQUFHLFdBQVcsdUJBQXVCLGdDQUFnQyxlQUFlLGlCQUFpQixvQkFBb0IsNEJBQTRCLGlDQUFpQyxtQ0FBbUMsOEJBQThCLG1CQUFtQixxQ0FBcUMsbUNBQW1DLEtBQUssR0FBRyxVQUFVLGdCQUFnQiw0QkFBNEIsME5BQTBOLDJCQUEyQixpQ0FBaUMsZ0NBQWdDLDRDQUE0QyxrQkFBa0Isc01BQXNNLEtBQUssR0FBRyxnQkFBZ0IsdUJBQXVCLGlCQUFpQixvQkFBb0IsY0FBYyxZQUFZLG9DQUFvQyxLQUFLLGlDQUFpQyx1QkFBdUIsNEJBQTRCLGdCQUFnQixLQUFLLEdBQUcsbUJBQW1CLG1CQUFtQixvQkFBb0IsdUJBQXVCLDhCQUE4Qix3QkFBd0IsbUNBQW1DLCtCQUErQixHQUFHLGtCQUFrQixrQkFBa0IsMEJBQTBCLDBCQUEwQix3QkFBd0IsdUJBQXVCLHdCQUF3QixzQkFBc0Isb0NBQW9DLEtBQUssR0FBRyx1QkFBdUIsUUFBUSwrQkFBK0IsS0FBSyxTQUFTLGtDQUFrQyxLQUFLLFVBQVUsK0JBQStCLEtBQUssR0FBRyxlQUFlLGtCQUFrQiw0QkFBNEIsZ0JBQWdCLGlDQUFpQyxvQkFBb0IsS0FBSyxHQUFHLGNBQWMsdUJBQXVCLHdCQUF3QixvQkFBb0IsMEJBQTBCLDBCQUEwQiw0QkFBNEIseUJBQXlCLCtCQUErQixpQ0FBaUMsZ0NBQWdDLEtBQUssY0FBYyxtQkFBbUIsaUNBQWlDLEtBQUssaUJBQWlCLGdCQUFnQixpQ0FBaUMsS0FBSyxlQUFlLGlCQUFpQixvQkFBb0IsaUJBQWlCLDRCQUE0QixnREFBZ0QsdUNBQXVDLCtJQUErSSxLQUFLLHFCQUFxQix5TkFBeU4sS0FBSyxhQUFhLDJDQUEyQyxLQUFLLEdBQUcsc0JBQXNCLGtCQUFrQixvQkFBb0IsNEJBQTRCLDZDQUE2QyxHQUFHLFlBQVksa0JBQWtCLDJCQUEyQixjQUFjLGVBQWUsb0JBQW9CLDZCQUE2QiwwQkFBMEIsZUFBZSxLQUFLLGlDQUFpQywwQkFBMEIsOEJBQThCLG1CQUFtQixzQkFBc0IsZ0JBQWdCLEtBQUssR0FBRyx3SEFBd0gsb0JBQW9CLG9CQUFvQiwyQkFBMkIsd0JBQXdCLGlDQUFpQywwQkFBMEIsd0JBQXdCLEtBQUssR0FBRyxlQUFlLGtCQUFrQiw2QkFBNkIsaUJBQWlCLDJOQUEyTiwyQkFBMkIsaUNBQWlDLGlDQUFpQyxnQkFBZ0IsdURBQXVELDhCQUE4QixLQUFLLEdBQUcsZ0JBQWdCLHlCQUF5QixvQkFBb0IsMkJBQTJCLGNBQWMsYUFBYSxvQkFBb0IsOEJBQThCLHVDQUF1QyxLQUFLLFdBQVcscUJBQXFCLGdDQUFnQyxzQkFBc0IsMEJBQTBCLEtBQUssaUJBQWlCLGtDQUFrQyxLQUFLLGlDQUFpQyx3QkFBd0IsS0FBSyxHQUFHLHFJQUFxSSxlQUFlLGlCQUFpQixvQkFBb0IsMkJBQTJCLHdCQUF3QixjQUFjLGNBQWMsb0JBQW9CLGtDQUFrQyxLQUFLLGVBQWUscUJBQXFCLHNCQUFzQixLQUFLLFlBQVksc0JBQXNCLEtBQUssWUFBWSwwQkFBMEIsS0FBSyxXQUFXLDBCQUEwQixzQkFBc0IsdUJBQXVCLDBCQUEwQixLQUFLLDZCQUE2Qiw4QkFBOEIsb0JBQW9CLHNCQUFzQixxQ0FBcUMsZUFBZSxLQUFLLGlDQUFpQyxtQ0FBbUMsa0NBQWtDLDhCQUE4QixvQ0FBb0MsMkJBQTJCLHFDQUFxQyxnQkFBZ0IsdUJBQXVCLHFCQUFxQixvQ0FBb0MsT0FBTywyQkFBMkIsMkJBQTJCLHdCQUF3QixPQUFPLEtBQUssR0FBRyxhQUFhLDRCQUE0QixHQUFHLFdBQVcsa0JBQWtCLDJCQUEyQiwwQkFBMEIsbUJBQW1CLEtBQUssYUFBYSxtQkFBbUIsa0JBQWtCLHdCQUF3QixLQUFLLGlDQUFpQyxrQkFBa0IsMEJBQTBCLEtBQUssR0FBRyw2QkFBNkIsb0JBQW9CLG9CQUFvQiwyQkFBMkIsd0JBQXdCLGNBQWMsV0FBVyxzQkFBc0IsZ0JBQWdCLEtBQUssZ0JBQWdCLG9CQUFvQixnQ0FBZ0MseUJBQXlCLHdCQUF3QixnQ0FBZ0MsNkJBQTZCLEtBQUssc0JBQXNCLDZCQUE2Qiw0QkFBNEIsS0FBSyxHQUFHLG1FQUFtRSxvQkFBb0IsV0FBVyxlQUFlLGtCQUFrQixpQkFBaUIsb0JBQW9CLDBCQUEwQixpREFBaUQsK0JBQStCLEdBQUcsVUFBVSx3QkFBd0IsdUJBQXVCLGtCQUFrQiw2QkFBNkIsb0JBQW9CLDJCQUEyQiw0QkFBNEIsZ0NBQWdDLGdCQUFnQix3QkFBd0IsR0FBRyxrQkFBa0IsY0FBYyxzQkFBc0Isa0JBQWtCLG1DQUFtQyx3QkFBd0IsR0FBRyxtQkFBbUIsZ0NBQWdDLGtCQUFrQiwyQkFBMkIsd0NBQXdDLHVCQUF1Qiw0Q0FBNEMsdUJBQXVCLGlDQUFpQywwQkFBMEIscUNBQXFDLHVCQUF1QixLQUFLLEdBQUcsc0JBQXNCLG9CQUFvQixHQUFHLGtEQUFrRCxrQkFBa0IsMkJBQTJCLDRCQUE0QixHQUFHLGVBQWUsa0JBQWtCLG9CQUFvQiw0QkFBNEIsR0FBRyxnQkFBZ0IsWUFBWSxrQkFBa0IsMkJBQTJCLHdDQUF3QyxHQUFHLHdDQUF3QyxlQUFlLEdBQUcsc0JBQXNCLHFCQUFxQixHQUFHLCtCQUErQixzQkFBc0IsbUNBQW1DLHNDQUFzQywwQ0FBMEMsdUJBQXVCLEdBQUcsY0FBYywwQkFBMEIsb0JBQW9CLDJCQUEyQix3Q0FBd0MsNENBQTRDLEdBQUcsWUFBWSxxQkFBcUIsMENBQTBDLEdBQUcsaUNBQWlDLGtCQUFrQixHQUFHLHNDQUFzQyxrQkFBa0Isd0JBQXdCLGFBQWEsR0FBRyw2Q0FBNkMsNkJBQTZCLHNDQUFzQyxtQ0FBbUMsb0JBQW9CLGdDQUFnQyxzQkFBc0IsNENBQTRDLDJDQUEyQyxzQ0FBc0MsR0FBRyx1REFBdUQscUNBQXFDLEdBQUcsY0FBYyxxQkFBcUIsR0FBRyw0QkFBNEIsdUJBQXVCLGtCQUFrQiw0QkFBNEIsdUNBQXVDLHlCQUF5Qix3QkFBd0IsOEJBQThCLHNCQUFzQix3QkFBd0IsZUFBZSx5Q0FBeUMsS0FBSyxHQUFHLHdPQUF3TyxvQkFBb0IsY0FBYyxxQ0FBcUMsZ0JBQWdCLDRCQUE0QixvQkFBb0IsbUNBQW1DLGNBQWMsc0RBQXNELHFDQUFxQyxhQUFhLGNBQWMsS0FBSyxrQkFBa0Isb0JBQW9CLEtBQUssaUJBQWlCLG9CQUFvQiwwQkFBMEIsOEJBQThCLGdCQUFnQiwyQkFBMkIsc0JBQXNCLGdDQUFnQyxLQUFLLGtCQUFrQixvQkFBb0IsNkJBQTZCLDBCQUEwQixlQUFlLEtBQUssaUNBQWlDLDBCQUEwQiwwQkFBMEIsb0JBQW9CLHNCQUFzQixPQUFPLG9CQUFvQix5QkFBeUIsT0FBTyxLQUFLLEdBQUcsbUJBQW1CLHdCQUF3QixvQkFBb0IsZUFBZSw2Q0FBNkMsNENBQTRDLEtBQUssR0FBRyxvSUFBb0k7QUFDbjluQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQy95QjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNib0Q7O0FBRTdDO0FBQ1AsaUJBQWlCLG9EQUFTLFVBQVUsOEJBQThCO0FBQ2xFLEVBQUUsb0RBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLG9EQUFTO0FBQ1g7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLG9EQUFTO0FBQ3BCO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsZ0JBQWdCLG9EQUFTLGFBQWE7QUFDdEMsRUFBRSxvREFBUztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsZ0JBQWdCLG9EQUFTLGFBQWE7QUFDdEM7QUFDQSxFQUFFLG9EQUFTLFVBQVUscUJBQXFCO0FBQzFDLEdBQUcsb0RBQVMsUUFBUSx1QkFBdUI7QUFDM0MsR0FBRyxvREFBUztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUssb0RBQVMsUUFBUSwyQkFBMkI7QUFDakQ7QUFDQSxHQUFHLG9EQUFTLFFBQVEsd0JBQXdCO0FBQzVDO0FBQ0EsRUFBRSxvREFBUyxVQUFVLHVDQUF1QztBQUM1RCxHQUFHLG9EQUFTO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUcsb0RBQVM7QUFDWjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9EQUFTLFdBQVcsd0JBQXdCO0FBQzlDO0FBQ0E7QUFDQSxTQUFTLHNEQUFXO0FBQ3BCLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxvREFBUztBQUNqQjtBQUNBLElBQUksc0JBQXNCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsVUFBVSxvREFBUyxRQUFRLGlCQUFpQjtBQUM1QyxJQUFJLG9EQUFTO0FBQ2IseUJBQXlCLFVBQVU7QUFDbkM7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkd1QztBQUNhOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0RBQVMsYUFBYSx1QkFBdUI7QUFDdEQsRUFBRTs7QUFFRjtBQUNBLEVBQUUsb0RBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxFQUFFLG9EQUFTLFVBQVUsNkJBQTZCO0FBQ2xELEdBQUcsb0RBQVM7QUFDWjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFVBQVUsb0RBQVMsVUFBVSw4QkFBOEI7QUFDM0QsSUFBSSxvREFBUyxVQUFVLFVBQVU7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvREFBUyxVQUFVLG1CQUFtQjtBQUNuRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0RBQVMsY0FBYyxlQUFlO0FBQy9DLEVBQUU7O0FBRUY7QUFDQSxFQUFFLG9EQUFTLFVBQVUsa0JBQWtCO0FBQ3ZDLEVBQUUsb0RBQVMsVUFBVSxtQkFBbUI7QUFDeEM7O0FBRUE7O0FBRUE7QUFDQSxFQUFFLG9EQUFTLFFBQVEsNENBQTRDO0FBQy9ELEVBQUUsb0RBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsNEJBQTRCLG9EQUFVOztBQUV0QyxRQUFRLHNEQUFXO0FBQ25CLEVBQUUsb0RBQVMsVUFBVSw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSnVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsb0RBQVMsVUFBVSx3QkFBd0I7QUFDckQsSUFBSSxvREFBUztBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxvREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssb0RBQVMsVUFBVSx1QkFBdUI7QUFDL0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLG9EQUFTLFVBQVUsd0JBQXdCO0FBQzlELEVBQUUsb0RBQVM7QUFDWDtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsb0RBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLGtCQUFrQixvREFBUyxlQUFlLHVCQUF1QjtBQUNqRSxFQUFFLG9EQUFTLGFBQWEsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxvREFBUyxVQUFVLHdCQUF3QjtBQUNyRCxJQUFJLG9EQUFTLFlBQVk7QUFDekIsS0FBSyxvREFBUztBQUNkO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLLG9EQUFTO0FBQ2Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0RBQVMsVUFBVSx3QkFBd0I7QUFDcEQsR0FBRyxvREFBUyxZQUFZLGtCQUFrQjtBQUMxQyxHQUFHLG9EQUFTLFlBQVksNEJBQTRCO0FBQ3BEO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG9EQUFTO0FBQ2xCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBLEVBQUUsb0RBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxvREFBUyxjQUFjLGVBQWU7QUFDL0MsRUFBRTs7QUFFRjtBQUNBLEVBQUUsb0RBQVMsU0FBUyx3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsb0RBQVMsU0FBUyw4QkFBOEI7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBLEVBQUUsb0RBQVMsU0FBUyx1QkFBdUI7QUFDM0M7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixvREFBUyxXQUFXO0FBQ3pDLEVBQUUsb0RBQVMsY0FBYywwQkFBMEI7QUFDbkQsR0FBRyxvREFBUyxTQUFTLHFDQUFxQztBQUMxRCxHQUFHLG9EQUFTO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFLG9EQUFTLFVBQVUsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBUyxhQUFhLHVDQUF1QztBQUMvRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TG9EOztBQUU3QztBQUNQLGtCQUFrQixvREFBUyxVQUFVLHdCQUF3QjtBQUM3RCxFQUFFLG9EQUFTLFNBQVMsdUNBQXVDO0FBQzNELEVBQUUsb0RBQVMsVUFBVSwyQkFBMkI7QUFDaEQsR0FBRyxvREFBUztBQUNaO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFLG9EQUFTLFVBQVUsMEJBQTBCO0FBQy9DLEdBQUcsb0RBQVMsUUFBUSxnQkFBZ0I7QUFDcEMsSUFBSSxvREFBUztBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0Isb0RBQVMsVUFBVSx1QkFBdUI7QUFDNUQsaUJBQWlCLE9BQU87QUFDeEI7QUFDQSxHQUFHLG9EQUFTLFVBQVUsc0JBQXNCO0FBQzVDO0FBQ0EsWUFBWSxvREFBUztBQUNyQjtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7O0FBRUE7QUFDQSxTQUFTLG9EQUFTO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUksb0RBQVMsU0FBUyx5Q0FBeUM7QUFDL0Q7QUFDQSxZQUFZLG9EQUFTO0FBQ3JCLHNCQUFzQixTQUFTLElBQUksVUFBVTtBQUM3QyxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQSxFQUFFOztBQUVGLGlCQUFpQixvREFBUyxVQUFVLDJCQUEyQjtBQUMvRCxFQUFFLG9EQUFTLGNBQWMsbUJBQW1CO0FBQzVDLEdBQUcsb0RBQVMsVUFBVSxrQkFBa0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBUyxjQUFjLDhCQUE4QjtBQUN2RCxHQUFHLG9EQUFTLFVBQVUsaUNBQWlDO0FBQ3ZEO0FBQ0E7QUFDQSxRQUFRLHNEQUFXO0FBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RnNDO0FBQ0E7QUFDb0I7QUFDVjtBQUMzQjs7QUFFckI7QUFDQTtBQUNBLElBQUksNkRBQWM7O0FBRWxCO0FBQ0EsNEJBQTRCLG1EQUFTOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxtREFBUztBQUNkO0FBQ0EsS0FBSyxzREFBVztBQUNoQixLQUFLLG1EQUFTO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsRUFBRSwwREFBZTtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ087QUFDUCxVQUFVO0FBQ1Y7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0RvRDs7QUFFN0M7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHNEQUFXO0FBQ25CLEVBQUUsb0RBQVMsVUFBVSwyQkFBMkI7QUFDaEQsR0FBRyxvREFBUyxVQUFVLHVCQUF1QjtBQUM3QyxHQUFHLG9EQUFTLFVBQVUsd0JBQXdCO0FBQzlDO0FBQ0EsWUFBWSxvREFBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0wsSUFBSSxvREFBUyxTQUFTLHVDQUF1QztBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS8uL3NyYy9ldmVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtanMtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1qcy1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWpzLXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiAtLS0tLS0tLS0tLS0tLS0gICAgIFJlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYnV0dG9uIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcblx0Y29sb3I6IHVuc2V0O1xuXHRib3JkZXI6IG5vbmU7XG5cdGZvbnQtc2l6ZTogdW5zZXQ7XG59XG5cbmEge1xuXHRjb2xvcjogdW5zZXQ7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDEsXG5oMiB7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1JlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFV0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG46cm9vdCB7XG5cdC0tYmctbWFpbjogI2ZmNDA0MDtcblx0LS1hY2NlbnQtbWFpbi1kYXJrOiAjM2QwMDAwO1xuXHQtLWJnLWxhbnRlcm46ICNlODMwMzA7XG5cdC0tdGV4dC1oMTogI2Y1Y2U1NDtcblx0LS1iZy1pbnB1dDogd2hpdGU7XG5cdC0tYm9yZGVyLWlucHV0OiBibGFjaztcblxuXHQtLWZvb3Rlci1oZWlnaHQ6IDcwcHg7XG5cdC0tYXJ0LXdpZHRoOiAxMDAlO1xuXG5cdHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcblx0bWluLWhlaWdodDogMTAwc3ZoO1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLW1haW4pO1xuXHRjb2xvcjogI2ZmZjtcblx0Zm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsXG5cdFx0Um9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsXG5cdFx0c2Fucy1zZXJpZjtcbn1cblxuaDEuYnJhbmQge1xuXHQtLWZvbnQtc2l6ZTogMTEwcHg7XG5cblx0Y29sb3I6IHZhcigtLXRleHQtaDEpO1xuXHR0ZXh0LXNoYWRvdzogMCAwIDVweCBibGFjaztcblx0Zm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuXHRsaW5lLWhlaWdodDogY2FsYyh2YXIoLS1mb250LXNpemUpICogMC44KTtcbn1cblxuLmhpZGRlbiB7XG5cdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnNvY2lhbHMge1xuXHRnYXA6IDEwcHg7XG5cdGZvbnQtc2l6ZTogMjVweDtcbn1cblxuYS51bmRlcmxpbmUge1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAxcHg7XG5cdHRleHQtdW5kZXJsaW5lLW9mZnNldDogM3B4O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9VdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgQ09OVEVOVCAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgU2lkZWJhciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi5zaWRlYmFyIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR6LWluZGV4OiAxO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAwcHg7XG5cdHBhZGRpbmc6IDIwcHggMDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRvdmVyZmxvdy14OiBoaWRkZW47XG5cblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbWFpbik7XG5cdGZvbnQtc2l6ZTogNDBweDtcblx0Ym94LXNoYWRvdzogMHB4IDBweCA3cHggdmFyKC0tYWNjZW50LW1haW4tZGFyayk7XG5cblx0dHJhbnNpdGlvbjogMC41cztcblxuXHQmLm9wZW4ge1xuXHRcdHdpZHRoOiAzMDBweDtcblx0XHRwYWRkaW5nOiAyMHB4O1xuXHR9XG5cblx0I2Nsb3NlLXNpZGViYXIge1xuXHRcdGFsaWduLXNlbGY6IGVuZDtcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHBvc2l0aW9uOiBzdGF0aWM7XG5cblx0XHRib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKTtcblx0XHRib3JkZXI6IG5vbmU7XG5cblx0XHQmLm9wZW4ge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0fVxuXG5cdFx0I2Nsb3NlLXNpZGViYXIge1xuXHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHR9XG5cdH1cbn1cblxuLmNsb3NlLWJ0biB7XG5cdC0tZm9udC1zaXplOiA1MHB4O1xuXG5cdGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcblx0bGluZS1oZWlnaHQ6IGNhbGModmFyKC0tZm9udC1zaXplKSAqIDAuNik7XG59XG5cbm5hdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXg6IDE7XG5cdGdhcDogNTBweDtcblxuXHQmIGJ1dHRvbiB7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRtYXJnaW4tbGVmdDogMjJweDtcblx0fVxuXG5cdCYgYnV0dG9uOmhvdmVyIHtcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1oMSk7XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR9XG59XG5cbmhlYWRlciB7XG5cdHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuXHRib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKTtcblx0Zm9udC1zaXplOiAyNHB4O1xuXG5cdCNvcGVuLXNpZGViYXIge1xuXHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cdH1cblxuXHQmIC5zb2NpYWxzIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9TaWRlYmFyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBNYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuI2NoYW5naW5nLWNvbnRlbnQge1xuXHRtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWZvb3Rlci1oZWlnaHQpICogMik7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBIb21lICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLmhvbWUge1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXG5cdCYgaDIge1xuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWgxKTtcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdG1hcmdpbi10b3A6IDA7XG5cdH1cbn1cblxuLmhlcm8ge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGhlaWdodDogY2FsYygxMDBzdmggLSA4MHB4KTtcblx0d2lkdGg6IDkwJTtcblx0bWFyZ2luOiBhdXRvO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdC0tYXJ0LXdpZHRoOiBtaW4oMTkwcHgsIDIwJSk7XG5cdFx0d2lkdGg6IG1pbig5MCUsIDEzMDBweCk7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRoZWlnaHQ6IGNhbGMoMTAwc3ZoIC0gMTAwcHgpO1xuXHR9XG59XG5cbi5hcnQge1xuXHRoZWlnaHQ6IDY4JTtcblx0d2lkdGg6IHZhcigtLWFydC13aWR0aCk7XG5cblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkXzUwNTkxMTZjNTlkMjQ0ZDA4YzMxNzBiNDlkNmU3YjBmfm12Mi5qcGcvdjEvZmlsbC93XzU0NixoXzcyOCxhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLGVuY19hdXRvLzU0YTRjZF81MDU5MTE2YzU5ZDI0NGQwOGMzMTcwYjQ5ZDZlN2IwZn5tdjIuanBnKTtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0aGVpZ2h0OiA4MCU7XG5cblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS81NGE0Y2RfYWU1ZTIyNDg2ZGJiNDlkZWJiOWNkOGJhMWI3ODBiNmV+bXYyLmpwZy92MS9maWxsL3dfMzg4LGhfMTI0MCxhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLGVuY19hdXRvL0FydHdvcmsxX0ZpbmFsXzh4Ml81LmpwZyk7XG5cdH1cbn1cblxuLmhlcm8tdGV4dCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiA5MHB4O1xuXG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdhcDogMzVweDtcblxuXHQmIGgxIHtcblx0XHQtLWZvbnQtc2l6ZTogbWluKDUwdncsIDMwMHB4KTtcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdHBvc2l0aW9uOiBzdGF0aWM7XG5cdFx0cGxhY2UtY29udGVudDogY2VudGVyO1xuXHRcdGdhcDogNjBweDtcblx0fVxufVxuXG4ucmVzZXJ2YXRpb25zIHtcblx0Y29sb3I6ICNmZmU1ZTU7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRsZXR0ZXItc3BhY2luZzogMnB4O1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAxcHg7XG5cdHRleHQtdW5kZXJsaW5lLW9mZnNldDogMnB4O1xufVxuXG4uc2Nyb2xsLWRvd24ge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LWgxKTtcblxuXHQmIC5mYS1hbmdsZS1kb3duIHtcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxNnB4O1xuXHRcdGZvbnQtc2l6ZTogNzBweDtcblx0XHRhbmltYXRpb246IGJvdW5jZSAycyBpbmZpbml0ZTtcblx0fVxufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdH1cblx0NTAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG5cdH1cblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHR9XG59XG5cbi5sYW50ZXJucyB7XG5cdGRpc3BsYXk6IG5vbmU7XG5cdHdpZHRoOiB2YXIoLS1hcnQtd2lkdGgpO1xuXHRoZWlnaHQ6IDgwJTtcblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0XHRkaXNwbGF5OiBncmlkO1xuXHR9XG59XG5cbi5sYW50ZXJuIHtcblx0LS1jYXBzLXdpZHRoOiA1MHB4O1xuXHQtLWNhcHMtaGVpZ2h0OiAyMHB4O1xuXG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0anVzdGlmeS1pdGVtczogY2VudGVyO1xuXG5cdCYgLnRvcCxcblx0JiAuYm90dG9tIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0d2lkdGg6IHZhcigtLWNhcHMtd2lkdGgpO1xuXHRcdGhlaWdodDogdmFyKC0tY2Fwcy1oZWlnaHQpO1xuXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cdH1cblxuXHQmIC50b3Age1xuXHRcdGJvdHRvbTogLTVweDtcblx0XHRib3JkZXItcmFkaXVzOiA4MCUgODAlIDAgMDtcblx0fVxuXG5cdCYgLmJvdHRvbSB7XG5cdFx0dG9wOiAtNXB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDAgMCA4MCUgODAlO1xuXHR9XG5cblx0JiAuYm9keSB7XG5cdFx0ei1pbmRleDogMTtcblx0XHRoZWlnaHQ6IDEzMHB4O1xuXHRcdHdpZHRoOiA4MCU7XG5cblx0XHRib3JkZXItcmFkaXVzOiA4NXB4O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1tYWluLWRhcmspO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLW1haW4pO1xuXHRcdGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXG5cdFx0XHR2YXIoLS1iZy1sYW50ZXJuKSxcblx0XHRcdHZhcigtLWJnLWxhbnRlcm4pIDE5JSxcblx0XHRcdHZhcigtLWFjY2VudC1tYWluLWRhcmspIDIwJVxuXHRcdCk7XG5cdH1cblxuXHQmIC5ib2R5OmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSgyNDUsIDIwNSwgODQsIDAuNyksIHRyYW5zcGFyZW50IDgwJSksXG5cdFx0XHRyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxuXHRcdFx0XHR2YXIoLS1iZy1sYW50ZXJuKSxcblx0XHRcdFx0dmFyKC0tYmctbGFudGVybikgMTklLFxuXHRcdFx0XHR2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKSAyMCVcblx0XHRcdCk7XG5cdH1cblxuXHQmID4gKiB7XG5cdFx0Ym94LXNoYWRvdzogM3B4IDNweCA2cHggLTNweCAjOGEwZjBmO1xuXHR9XG59XG5cbi5ob3Vycy1jb250YWluZXIge1xuXHRwYWRkaW5nOiAyMHB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdGJvcmRlci10b3A6IDJweCBzb2xpZCBoc2woMCwgOTUlLCA3MCUpO1xufVxuXG4uaG91cnMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDMwcHg7XG5cblx0JiA+IGRpdiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0Z2FwOiA4cHg7XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdHdpZHRoOiA2NTBweDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0Z2FwOiA3MHB4O1xuXHR9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0hvbWUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIE1lbnUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ubWVudSB7XG5cdG1hcmdpbi10b3A6IDVweDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0bWFyZ2luOiAxMHB4IDIwcHg7XG5cdH1cbn1cblxuLm1lbnUtYXJ0IHtcblx0aGVpZ2h0OiA1NTBweDtcblx0d2lkdGg6IG1pbigxMDB2dywgNDAwcHgpO1xuXHRtYXJnaW46IGF1dG87XG5cblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkX2I4Yzk1MzdjNWZjZDRkODU5ZmM5NTg5NDJiNWE1ZTg3fm12Mi5qcGcvdjEvZmlsbC93Xzk1MixoXzEzMjIsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMSxlbmNfYXV0by81NGE0Y2RfYjhjOTUzN2M1ZmNkNGQ4NTlmYzk1ODk0MmI1YTVlODd+bXYyLmpwZyk7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWZvb3Rlci1oZWlnaHQpICogMi41KTtcblx0XHR3aWR0aDogbWluKDYwMHB4LCA1MHZ3KTtcblx0fVxufVxuXG4ubWVudS10ZXh0IHtcblx0bWFyZ2luOiAtOTVweCAwIDQwcHg7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAxNXB4O1xuXG5cdCYgPiAqIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLW1haW4pO1xuXHR9XG5cblx0JiBhIHtcblx0XHRwYWRkaW5nOiA4cHggMDtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdGZvbnQtc2l6ZTogMzBweDtcblx0XHRsZXR0ZXItc3BhY2luZzogM3B4O1xuXHR9XG5cblx0JiBhOmhvdmVyIHtcblx0XHRib3gtc2hhZG93OiAwIDAgMCAxcHggd2hpdGU7XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0XHRtYXJnaW46IDAgLTYxcHggMDtcblx0fVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9NZW51ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBFdmVudHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uZXZlbnRzIC5jb250ZW50IHtcblx0d2lkdGg6IDkwJTtcblx0bWFyZ2luOiBhdXRvO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMjBweDtcblxuXHQmIC5hcnQge1xuXHRcdGhlaWdodDogMTYwcHg7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuXHR9XG5cblx0JiAudGV4dCB7XG5cdFx0bWFyZ2luOiAyMHB4IDA7XG5cdFx0bWF4LXdpZHRoOiA2NWNoO1xuXHR9XG5cblx0JiBoMSB7XG5cdFx0Zm9udC1zaXplOiAzMHB4O1xuXHR9XG5cblx0JiBoMiB7XG5cdFx0bWFyZ2luOiAzMHB4IDAgMTZweDtcblx0fVxuXG5cdCYgcCB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDEuNTtcblx0XHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHR9XG5cblx0JiBwOm50aC1sYXN0LWNoaWxkKDIpIHtcblx0XHR3aWR0aDogbWluKDEwMCUsIDQ0MHB4KTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0Z2FwOiAycHg7XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0XHQtLWFydC13aWR0aDogbWluKDMwMHB4LCAzMCUpO1xuXG5cdFx0aGVpZ2h0OiBjYWxjKDk2MHB4IC0gOHZ3KTtcblx0XHR3aWR0aDogbWluKDkwJSwgMTEwMHB4KTtcblxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcblx0XHRhbGlnbi1pdGVtczogc3RyZXRjaDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cblx0XHQmIC5hcnQge1xuXHRcdFx0ZmxleC1zaHJpbms6IDA7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdFx0fVxuXG5cdFx0JiAuY2FsbC10by1hY3Rpb24ge1xuXHRcdFx0YWxpZ24taXRlbXM6IHN0YXJ0O1xuXHRcdFx0cGFkZGluZzogNDBweCAwO1xuXHRcdH1cblx0fVxufVxuXG4ucGhvdG9zIHtcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi50aWVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuXHQmIC5pbWFnZS1jb250YWluZXIge1xuXHRcdGZsZXgtZ3JvdzogMTtcblx0fVxuXG5cdCYgaW1nIHtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHR9XG59XG5cbi5ldmVudHMgLmNhbGwtdG8tYWN0aW9uIHtcblx0cGFkZGluZzogOTBweCAwO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMjRweDtcblxuXHQmIHAge1xuXHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRtYXJnaW46IDA7XG5cdH1cblxuXHQmIGJ1dHRvbiB7XG5cdFx0cGFkZGluZzogMjBweDtcblxuXHRcdGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblxuXHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cdH1cblxuXHQmIGJ1dHRvbjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRjb2xvcjogdmFyKC0tYmctbWFpbik7XG5cdH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBNb2RhbCAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi5tb2RhbCB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0dG9wOiAwO1xuXHR6LWluZGV4OiAyO1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHR3aWR0aDogMTAwdnc7XG5cblx0ZGlzcGxheTogZ3JpZDtcblx0cGxhY2UtY29udGVudDogY2VudGVyO1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC41KTtcblx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG59XG5cbmZvcm0ge1xuXHQtLWZvcm0tc3BhY2VyOiAxMnB4O1xuXG5cdG1heC1oZWlnaHQ6IDgwdmg7XG5cdHBhZGRpbmc6IDEycHg7XG5cdHdpZHRoOiBtaW4oOTB2dywgMTAwMHB4KTtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IHZhcigtLWZvcm0tc3BhY2VyKTtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xuXHRjb2xvcjogIzAwMDtcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmZvcm0taGVhZGVyIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nLWxlZnQ6IDJweDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9ybS1jb250ZW50IHtcblx0cGFkZGluZzogdmFyKC0tZm9ybS1zcGFjZXIpO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IGNhbGModmFyKC0tZm9ybS1zcGFjZXIpICogMi41KTtcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xuXG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1pbnB1dCk7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblxuXHRAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRvdmVyZmxvdy15OiBhdXRvO1xuXHR9XG59XG5cbi5mb3JtLWNvbnRlbnQgaDQge1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cbi5mb3JtLWNvbnRhY3QsXG4uZm9ybS1kZXRhaWxzLFxuLmZvcm0tZXh0cmFzIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiB2YXIoLS1mb3JtLXNwYWNlcik7XG59XG5cbi5mb3JtLXJvdyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0Z2FwOiB2YXIoLS1mb3JtLXNwYWNlcik7XG59XG5cbi5mb3JtLWl0ZW0ge1xuXHRmbGV4OiAxO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IGNhbGModmFyKC0tZm9ybS1zcGFjZXIpICogMC41KTtcbn1cblxuLmZvcm0tZGV0YWlscyAuZm9ybS1yb3cgLmZvcm0taXRlbSB7XG5cdHdpZHRoOiA0NyU7XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuXHRhcHBlYXJhbmNlOiBub25lO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhLFxuc2VsZWN0IHtcblx0cGFkZGluZzogNnB4IDEwcHg7XG5cblx0Zm9udC1zaXplOiBtYXgoMTZweCwgMC45cmVtKTtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctaW5wdXQpO1xuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItaW5wdXQpO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmZpZWxkc2V0IHtcblx0cGFkZGluZzogOHB4IDhweCAxMHB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogY2FsYyh2YXIoLS1mb3JtLXNwYWNlcikgKiAwLjgpO1xuXG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1pbnB1dCk7XG59XG5cbmxlZ2VuZCB7XG5cdHBhZGRpbmc6IDVweCA4cHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1pbnB1dCk7XG59XG5cbmxhYmVsIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5sYWJlbCBpbnB1dFt0eXBlPVwicmFkaW9cIl0gfiBzcGFuIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiA2cHg7XG59XG5sYWJlbCBpbnB1dFt0eXBlPVwicmFkaW9cIl0gfiBzcGFuOmJlZm9yZSB7XG5cdC0tcmFkaW8tZGltZW5zaW9uczogMTVweDtcblxuXHRoZWlnaHQ6IHZhcigtLXJhZGlvLWRpbWVuc2lvbnMpO1xuXHR3aWR0aDogdmFyKC0tcmFkaW8tZGltZW5zaW9ucyk7XG5cblx0Y29udGVudDogXCJcIjtcblx0YmFja2dyb3VuZDogdmFyKC0tYmctaW5wdXQpO1xuXHRtYXJnaW4tcmlnaHQ6IDVweDtcblxuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItaW5wdXQpO1xuXHRib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpby1kaW1lbnNpb25zKTtcblx0dHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG5sYWJlbCBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB+IHNwYW46YmVmb3JlIHtcblx0Ym9yZGVyOiA1cHggc29saWQgdmFyKC0tYmctbWFpbik7XG59XG5cbnRleHRhcmVhIHtcblx0cmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuZm9ybSBbdHlwZT1cInN1Ym1pdFwiXSB7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0cGFkZGluZzogMTJweDtcblx0d2lkdGg6IG1pbigxMDAlLCAyODBweCk7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1oMSk7XG5cdGJvcmRlci1yYWRpdXM6IDIwMHB4O1xuXG5cdGZvbnQtc2l6ZTogMS41cmVtO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblxuXHQmOmhvdmVyIHtcblx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjOTE2ZjA4O1xuXHR9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL01vZGFsICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0V2ZW50cyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9NYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBGb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG5mb290ZXIge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGJvdHRvbTogMDtcblx0bWluLWhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nOiAxMHB4IDIwcHggMTVweDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdGdhcDogMTBweDtcblxuXHRib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKTtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbWFpbik7XG5cblx0JiA+ICoge1xuXHRcdGZsZXg6IDE7XG5cdH1cblxuXHQmIC5zb2NpYWxzIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cblx0JiAuYXV0aG9yIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0Z2FwOiAxMHB4O1xuXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1zdHJvbmcpO1xuXHR9XG5cblx0JiAuYWRkcmVzcyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0Z2FwOiA4cHg7XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0XHQmIC5zb2NpYWxzIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0fVxuXG5cdFx0JiAuYWRkcmVzcyB7XG5cdFx0XHRhbGlnbi1pdGVtczogZW5kO1xuXHRcdH1cblx0fVxufVxuXG4uZmEuZmEtZ2l0aHViIHtcblx0Y29sb3I6IGN1cnJlbnRDb2xvcjtcblx0Zm9udC1zaXplOiAzMHB4O1xuXG5cdCY6aG92ZXIge1xuXHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UtaW4tb3V0O1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIHNjYWxlKDEuMyk7XG5cdH1cbn1cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0Zvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9DT05URU5UICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxtREFBbUQ7O0FBRW5EOzs7Q0FHQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGVBQWU7Q0FDZix1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1oscUJBQXFCO0FBQ3RCOztBQUVBOztDQUVDLG1CQUFtQjtBQUNwQjs7QUFFQSxvREFBb0Q7QUFDcEQsbUVBQW1FOztBQUVuRTtDQUNDLGtCQUFrQjtDQUNsQiwyQkFBMkI7Q0FDM0IscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIscUJBQXFCOztDQUVyQixxQkFBcUI7Q0FDckIsaUJBQWlCOztDQUVqQix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxrQkFBa0I7O0NBRWxCLGdDQUFnQztD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QTtFQUNDLG1CQUFtQjtFQUNuQixtQkFBbUI7O0VBRW5CO0dBQ0MsYUFBYTtFQUNkOztFQUVBO0dBQ0MsZ0JBQWdCO0VBQ2pCO0NBQ0Q7QUFDRDs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixlQUFlOztDQUVmO0VBQ0Msc0NBQXNDO0VBQ3RDLHFDQUFxQztDQUN0QztBQUNEO0FBQ0Esb0RBQW9EO0FBQ3BELHFEQUFxRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAtLS0tLS0tLS0tLS0tLS0gICAgIFJlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xcblxcdGNvbG9yOiB1bnNldDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Zm9udC1zaXplOiB1bnNldDtcXG59XFxuXFxuYSB7XFxuXFx0Y29sb3I6IHVuc2V0O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuaDEsXFxuaDIge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1JlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBVdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG46cm9vdCB7XFxuXFx0LS1iZy1tYWluOiAjZmY0MDQwO1xcblxcdC0tYWNjZW50LW1haW4tZGFyazogIzNkMDAwMDtcXG5cXHQtLWJnLWxhbnRlcm46ICNlODMwMzA7XFxuXFx0LS10ZXh0LWgxOiAjZjVjZTU0O1xcblxcdC0tYmctaW5wdXQ6IHdoaXRlO1xcblxcdC0tYm9yZGVyLWlucHV0OiBibGFjaztcXG5cXG5cXHQtLWZvb3Rlci1oZWlnaHQ6IDcwcHg7XFxuXFx0LS1hcnQtd2lkdGg6IDEwMCU7XFxuXFxuXFx0c2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHkge1xcblxcdG1pbi1oZWlnaHQ6IDEwMHN2aDtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1tYWluKTtcXG5cXHRjb2xvcjogI2ZmZjtcXG5cXHRmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsXFxuXFx0XFx0Um9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXG5cXHRcXHRzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMS5icmFuZCB7XFxuXFx0LS1mb250LXNpemU6IDExMHB4O1xcblxcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWgxKTtcXG5cXHR0ZXh0LXNoYWRvdzogMCAwIDVweCBibGFjaztcXG5cXHRmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuXFx0bGluZS1oZWlnaHQ6IGNhbGModmFyKC0tZm9udC1zaXplKSAqIDAuOCk7XFxufVxcblxcbi5oaWRkZW4ge1xcblxcdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnNvY2lhbHMge1xcblxcdGdhcDogMTBweDtcXG5cXHRmb250LXNpemU6IDI1cHg7XFxufVxcblxcbmEudW5kZXJsaW5lIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAxcHg7XFxuXFx0dGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAzcHg7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1V0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgQ09OVEVOVCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBTaWRlYmFyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uc2lkZWJhciB7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHotaW5kZXg6IDE7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAwcHg7XFxuXFx0cGFkZGluZzogMjBweCAwO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRvdmVyZmxvdy14OiBoaWRkZW47XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbWFpbik7XFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcblxcdGJveC1zaGFkb3c6IDBweCAwcHggN3B4IHZhcigtLWFjY2VudC1tYWluLWRhcmspO1xcblxcblxcdHRyYW5zaXRpb246IDAuNXM7XFxuXFxuXFx0Ji5vcGVuIHtcXG5cXHRcXHR3aWR0aDogMzAwcHg7XFxuXFx0XFx0cGFkZGluZzogMjBweDtcXG5cXHR9XFxuXFxuXFx0I2Nsb3NlLXNpZGViYXIge1xcblxcdFxcdGFsaWduLXNlbGY6IGVuZDtcXG5cXHR9XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0cG9zaXRpb246IHN0YXRpYztcXG5cXG5cXHRcXHRib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKTtcXG5cXHRcXHRib3JkZXI6IG5vbmU7XFxuXFxuXFx0XFx0Ji5vcGVuIHtcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0I2Nsb3NlLXNpZGViYXIge1xcblxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuLmNsb3NlLWJ0biB7XFxuXFx0LS1mb250LXNpemU6IDUwcHg7XFxuXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcblxcdGxpbmUtaGVpZ2h0OiBjYWxjKHZhcigtLWZvbnQtc2l6ZSkgKiAwLjYpO1xcbn1cXG5cXG5uYXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRmbGV4OiAxO1xcblxcdGdhcDogNTBweDtcXG5cXG5cXHQmIGJ1dHRvbiB7XFxuXFx0XFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMjJweDtcXG5cXHR9XFxuXFxuXFx0JiBidXR0b246aG92ZXIge1xcblxcdFxcdGNvbG9yOiB2YXIoLS10ZXh0LWgxKTtcXG5cXHR9XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHR9XFxufVxcblxcbmhlYWRlciB7XFxuXFx0cGFkZGluZy1yaWdodDogMjBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcblxcdGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLWFjY2VudC1tYWluLWRhcmspO1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXG5cXHQjb3Blbi1zaWRlYmFyIHtcXG5cXHRcXHRwYWRkaW5nOiAxNXB4O1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdH1cXG5cXG5cXHQmIC5zb2NpYWxzIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdH1cXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvU2lkZWJhciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBNYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4jY2hhbmdpbmctY29udGVudCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1mb290ZXItaGVpZ2h0KSAqIDIpO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBIb21lICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uaG9tZSB7XFxuXFx0bWFyZ2luLXRvcDogMjBweDtcXG5cXG5cXHQmIGgyIHtcXG5cXHRcXHRjb2xvcjogdmFyKC0tdGV4dC1oMSk7XFxuXFx0fVxcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdG1hcmdpbi10b3A6IDA7XFxuXFx0fVxcbn1cXG5cXG4uaGVybyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGhlaWdodDogY2FsYygxMDBzdmggLSA4MHB4KTtcXG5cXHR3aWR0aDogOTAlO1xcblxcdG1hcmdpbjogYXV0bztcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdC0tYXJ0LXdpZHRoOiBtaW4oMTkwcHgsIDIwJSk7XFxuXFx0XFx0d2lkdGg6IG1pbig5MCUsIDEzMDBweCk7XFxuXFx0XFx0bWFyZ2luOiBhdXRvO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRoZWlnaHQ6IGNhbGMoMTAwc3ZoIC0gMTAwcHgpO1xcblxcdH1cXG59XFxuXFxuLmFydCB7XFxuXFx0aGVpZ2h0OiA2OCU7XFxuXFx0d2lkdGg6IHZhcigtLWFydC13aWR0aCk7XFxuXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkXzUwNTkxMTZjNTlkMjQ0ZDA4YzMxNzBiNDlkNmU3YjBmfm12Mi5qcGcvdjEvZmlsbC93XzU0NixoXzcyOCxhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLGVuY19hdXRvLzU0YTRjZF81MDU5MTE2YzU5ZDI0NGQwOGMzMTcwYjQ5ZDZlN2IwZn5tdjIuanBnKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcblxcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0aGVpZ2h0OiA4MCU7XFxuXFxuXFx0XFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkX2FlNWUyMjQ4NmRiYjQ5ZGViYjljZDhiYTFiNzgwYjZlfm12Mi5qcGcvdjEvZmlsbC93XzM4OCxoXzEyNDAsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMSxlbmNfYXV0by9BcnR3b3JrMV9GaW5hbF84eDJfNS5qcGcpO1xcblxcdH1cXG59XFxuXFxuLmhlcm8tdGV4dCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJvdHRvbTogOTBweDtcXG5cXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdhcDogMzVweDtcXG5cXG5cXHQmIGgxIHtcXG5cXHRcXHQtLWZvbnQtc2l6ZTogbWluKDUwdncsIDMwMHB4KTtcXG5cXHR9XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0cG9zaXRpb246IHN0YXRpYztcXG5cXHRcXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0Z2FwOiA2MHB4O1xcblxcdH1cXG59XFxuXFxuLnJlc2VydmF0aW9ucyB7XFxuXFx0Y29sb3I6ICNmZmU1ZTU7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdGxldHRlci1zcGFjaW5nOiAycHg7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMXB4O1xcblxcdHRleHQtdW5kZXJsaW5lLW9mZnNldDogMnB4O1xcbn1cXG5cXG4uc2Nyb2xsLWRvd24ge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0cGxhY2UtY29udGVudDogY2VudGVyO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWgxKTtcXG5cXG5cXHQmIC5mYS1hbmdsZS1kb3duIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxMHB4O1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAxNnB4O1xcblxcdFxcdGZvbnQtc2l6ZTogNzBweDtcXG5cXHRcXHRhbmltYXRpb246IGJvdW5jZSAycyBpbmZpbml0ZTtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlIHtcXG5cXHQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcblxcdH1cXG5cXHQ1MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcblxcdH1cXG59XFxuXFxuLmxhbnRlcm5zIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHdpZHRoOiB2YXIoLS1hcnQtd2lkdGgpO1xcblxcdGhlaWdodDogODAlO1xcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0fVxcbn1cXG5cXG4ubGFudGVybiB7XFxuXFx0LS1jYXBzLXdpZHRoOiA1MHB4O1xcblxcdC0tY2Fwcy1oZWlnaHQ6IDIwcHg7XFxuXFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcblxcdCYgLnRvcCxcXG5cXHQmIC5ib3R0b20ge1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHR3aWR0aDogdmFyKC0tY2Fwcy13aWR0aCk7XFxuXFx0XFx0aGVpZ2h0OiB2YXIoLS1jYXBzLWhlaWdodCk7XFxuXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFx0fVxcblxcblxcdCYgLnRvcCB7XFxuXFx0XFx0Ym90dG9tOiAtNXB4O1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDgwJSA4MCUgMCAwO1xcblxcdH1cXG5cXG5cXHQmIC5ib3R0b20ge1xcblxcdFxcdHRvcDogLTVweDtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAwIDAgODAlIDgwJTtcXG5cXHR9XFxuXFxuXFx0JiAuYm9keSB7XFxuXFx0XFx0ei1pbmRleDogMTtcXG5cXHRcXHRoZWlnaHQ6IDEzMHB4O1xcblxcdFxcdHdpZHRoOiA4MCU7XFxuXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogODVweDtcXG5cXHRcXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKTtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1tYWluKTtcXG5cXHRcXHRiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdFxcdHZhcigtLWJnLWxhbnRlcm4pLFxcblxcdFxcdFxcdHZhcigtLWJnLWxhbnRlcm4pIDE5JSxcXG5cXHRcXHRcXHR2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKSAyMCVcXG5cXHRcXHQpO1xcblxcdH1cXG5cXG5cXHQmIC5ib2R5OmhvdmVyIHtcXG5cXHRcXHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSgyNDUsIDIwNSwgODQsIDAuNyksIHRyYW5zcGFyZW50IDgwJSksXFxuXFx0XFx0XFx0cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcXG5cXHRcXHRcXHRcXHR2YXIoLS1iZy1sYW50ZXJuKSxcXG5cXHRcXHRcXHRcXHR2YXIoLS1iZy1sYW50ZXJuKSAxOSUsXFxuXFx0XFx0XFx0XFx0dmFyKC0tYWNjZW50LW1haW4tZGFyaykgMjAlXFxuXFx0XFx0XFx0KTtcXG5cXHR9XFxuXFxuXFx0JiA+ICoge1xcblxcdFxcdGJveC1zaGFkb3c6IDNweCAzcHggNnB4IC0zcHggIzhhMGYwZjtcXG5cXHR9XFxufVxcblxcbi5ob3Vycy1jb250YWluZXIge1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXHRib3JkZXItdG9wOiAycHggc29saWQgaHNsKDAsIDk1JSwgNzAlKTtcXG59XFxuXFxuLmhvdXJzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAzMHB4O1xcblxcblxcdCYgPiBkaXYge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGdhcDogOHB4O1xcblxcdH1cXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdHdpZHRoOiA2NTBweDtcXG5cXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0XFx0Z2FwOiA3MHB4O1xcblxcdH1cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvSG9tZSAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBNZW51ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ubWVudSB7XFxuXFx0bWFyZ2luLXRvcDogNXB4O1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0XFx0bWFyZ2luOiAxMHB4IDIwcHg7XFxuXFx0fVxcbn1cXG5cXG4ubWVudS1hcnQge1xcblxcdGhlaWdodDogNTUwcHg7XFxuXFx0d2lkdGg6IG1pbigxMDB2dywgNDAwcHgpO1xcblxcdG1hcmdpbjogYXV0bztcXG5cXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS81NGE0Y2RfYjhjOTUzN2M1ZmNkNGQ4NTlmYzk1ODk0MmI1YTVlODd+bXYyLmpwZy92MS9maWxsL3dfOTUyLGhfMTMyMixhbF9jLHFfODUsdXNtXzAuNjZfMS4wMF8wLjAxLGVuY19hdXRvLzU0YTRjZF9iOGM5NTM3YzVmY2Q0ZDg1OWZjOTU4OTQyYjVhNWU4N35tdjIuanBnKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0XFx0bWFyZ2luOiAwO1xcblxcdFxcdGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWZvb3Rlci1oZWlnaHQpICogMi41KTtcXG5cXHRcXHR3aWR0aDogbWluKDYwMHB4LCA1MHZ3KTtcXG5cXHR9XFxufVxcblxcbi5tZW51LXRleHQge1xcblxcdG1hcmdpbjogLTk1cHggMCA0MHB4O1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDE1cHg7XFxuXFxuXFx0JiA+ICoge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbWFpbik7XFxuXFx0fVxcblxcblxcdCYgYSB7XFxuXFx0XFx0cGFkZGluZzogOHB4IDA7XFxuXFx0XFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRcXHRmb250LXNpemU6IDMwcHg7XFxuXFx0XFx0bGV0dGVyLXNwYWNpbmc6IDNweDtcXG5cXHR9XFxuXFxuXFx0JiBhOmhvdmVyIHtcXG5cXHRcXHRib3gtc2hhZG93OiAwIDAgMCAxcHggd2hpdGU7XFxuXFx0fVxcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdG1hcmdpbjogMCAtNjFweCAwO1xcblxcdH1cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTWVudSAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBFdmVudHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5ldmVudHMgLmNvbnRlbnQge1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMjBweDtcXG5cXG5cXHQmIC5hcnQge1xcblxcdFxcdGhlaWdodDogMTYwcHg7XFxuXFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcblxcdH1cXG5cXG5cXHQmIC50ZXh0IHtcXG5cXHRcXHRtYXJnaW46IDIwcHggMDtcXG5cXHRcXHRtYXgtd2lkdGg6IDY1Y2g7XFxuXFx0fVxcblxcblxcdCYgaDEge1xcblxcdFxcdGZvbnQtc2l6ZTogMzBweDtcXG5cXHR9XFxuXFxuXFx0JiBoMiB7XFxuXFx0XFx0bWFyZ2luOiAzMHB4IDAgMTZweDtcXG5cXHR9XFxuXFxuXFx0JiBwIHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRcXHRsaW5lLWhlaWdodDogMS41O1xcblxcdFxcdGxldHRlci1zcGFjaW5nOiAxcHg7XFxuXFx0fVxcblxcblxcdCYgcDpudGgtbGFzdC1jaGlsZCgyKSB7XFxuXFx0XFx0d2lkdGg6IG1pbigxMDAlLCA0NDBweCk7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdFxcdGdhcDogMnB4O1xcblxcdH1cXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHQtLWFydC13aWR0aDogbWluKDMwMHB4LCAzMCUpO1xcblxcblxcdFxcdGhlaWdodDogY2FsYyg5NjBweCAtIDh2dyk7XFxuXFx0XFx0d2lkdGg6IG1pbig5MCUsIDExMDBweCk7XFxuXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG5cXHRcXHQmIC5hcnQge1xcblxcdFxcdFxcdGZsZXgtc2hyaW5rOiAwO1xcblxcdFxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0XFx0fVxcblxcblxcdFxcdCYgLmNhbGwtdG8tYWN0aW9uIHtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogc3RhcnQ7XFxuXFx0XFx0XFx0cGFkZGluZzogNDBweCAwO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbi5waG90b3Mge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGllciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcblxcdCYgLmltYWdlLWNvbnRhaW5lciB7XFxuXFx0XFx0ZmxleC1ncm93OiAxO1xcblxcdH1cXG5cXG5cXHQmIGltZyB7XFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdG9iamVjdC1maXQ6IGNvdmVyO1xcblxcdH1cXG5cXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdH1cXG59XFxuXFxuLmV2ZW50cyAuY2FsbC10by1hY3Rpb24ge1xcblxcdHBhZGRpbmc6IDkwcHggMDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDI0cHg7XFxuXFxuXFx0JiBwIHtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0XFx0bWFyZ2luOiAwO1xcblxcdH1cXG5cXG5cXHQmIGJ1dHRvbiB7XFxuXFx0XFx0cGFkZGluZzogMjBweDtcXG5cXG5cXHRcXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdFxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFxuXFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuXFx0fVxcblxcblxcdCYgYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcdFxcdGNvbG9yOiB2YXIoLS1iZy1tYWluKTtcXG5cXHR9XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTW9kYWwgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5tb2RhbCB7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMDtcXG5cXHR6LWluZGV4OiAyO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0cGxhY2UtY29udGVudDogY2VudGVyO1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC41KTtcXG5cXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG59XFxuXFxuZm9ybSB7XFxuXFx0LS1mb3JtLXNwYWNlcjogMTJweDtcXG5cXG5cXHRtYXgtaGVpZ2h0OiA4MHZoO1xcblxcdHBhZGRpbmc6IDEycHg7XFxuXFx0d2lkdGg6IG1pbig5MHZ3LCAxMDAwcHgpO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IHZhcigtLWZvcm0tc3BhY2VyKTtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcblxcdGNvbG9yOiAjMDAwO1xcblxcdGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5mb3JtLWhlYWRlciB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmctbGVmdDogMnB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWNvbnRlbnQge1xcblxcdHBhZGRpbmc6IHZhcigtLWZvcm0tc3BhY2VyKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiBjYWxjKHZhcigtLWZvcm0tc3BhY2VyKSAqIDIuNSk7XFxuXFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1pbnB1dCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdFxcdG92ZXJmbG93LXk6IGF1dG87XFxuXFx0fVxcbn1cXG5cXG4uZm9ybS1jb250ZW50IGg0IHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5mb3JtLWNvbnRhY3QsXFxuLmZvcm0tZGV0YWlscyxcXG4uZm9ybS1leHRyYXMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IHZhcigtLWZvcm0tc3BhY2VyKTtcXG59XFxuXFxuLmZvcm0tcm93IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IHZhcigtLWZvcm0tc3BhY2VyKTtcXG59XFxuXFxuLmZvcm0taXRlbSB7XFxuXFx0ZmxleDogMTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiBjYWxjKHZhcigtLWZvcm0tc3BhY2VyKSAqIDAuNSk7XFxufVxcblxcbi5mb3JtLWRldGFpbHMgLmZvcm0tcm93IC5mb3JtLWl0ZW0ge1xcblxcdHdpZHRoOiA0NyU7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcblxcdHBhZGRpbmc6IDZweCAxMHB4O1xcblxcblxcdGZvbnQtc2l6ZTogbWF4KDE2cHgsIDAuOXJlbSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctaW5wdXQpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1pbnB1dCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5maWVsZHNldCB7XFxuXFx0cGFkZGluZzogOHB4IDhweCAxMHB4O1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IGNhbGModmFyKC0tZm9ybS1zcGFjZXIpICogMC44KTtcXG5cXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItaW5wdXQpO1xcbn1cXG5cXG5sZWdlbmQge1xcblxcdHBhZGRpbmc6IDVweCA4cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWlucHV0KTtcXG59XFxuXFxubGFiZWwgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxubGFiZWwgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB+IHNwYW4ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDZweDtcXG59XFxubGFiZWwgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB+IHNwYW46YmVmb3JlIHtcXG5cXHQtLXJhZGlvLWRpbWVuc2lvbnM6IDE1cHg7XFxuXFxuXFx0aGVpZ2h0OiB2YXIoLS1yYWRpby1kaW1lbnNpb25zKTtcXG5cXHR3aWR0aDogdmFyKC0tcmFkaW8tZGltZW5zaW9ucyk7XFxuXFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tYmctaW5wdXQpO1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcblxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1pbnB1dCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcmFkaW8tZGltZW5zaW9ucyk7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5sYWJlbCBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQgfiBzcGFuOmJlZm9yZSB7XFxuXFx0Ym9yZGVyOiA1cHggc29saWQgdmFyKC0tYmctbWFpbik7XFxufVxcblxcbnRleHRhcmVhIHtcXG5cXHRyZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG5mb3JtIFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdHBhZGRpbmc6IDEycHg7XFxuXFx0d2lkdGg6IG1pbigxMDAlLCAyODBweCk7XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1oMSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjAwcHg7XFxuXFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRsZXR0ZXItc3BhY2luZzogMXB4O1xcblxcblxcdCY6aG92ZXIge1xcblxcdFxcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICM5MTZmMDg7XFxuXFx0fVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Nb2RhbCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRXZlbnRzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9NYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEZvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuZm9vdGVyIHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0Ym90dG9tOiAwO1xcblxcdG1pbi1oZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmc6IDEwcHggMjBweCAxNXB4O1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcblxcdGdhcDogMTBweDtcXG5cXG5cXHRib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1hY2NlbnQtbWFpbi1kYXJrKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1tYWluKTtcXG5cXG5cXHQmID4gKiB7XFxuXFx0XFx0ZmxleDogMTtcXG5cXHR9XFxuXFxuXFx0JiAuc29jaWFscyB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFxuXFx0JiAuYXV0aG9yIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0Z2FwOiAxMHB4O1xcblxcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0XFx0Y29sb3I6IHZhcigtLXRleHQtc3Ryb25nKTtcXG5cXHR9XFxuXFxuXFx0JiAuYWRkcmVzcyB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0Z2FwOiA4cHg7XFxuXFx0fVxcblxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHRcXHQmIC5zb2NpYWxzIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmIC5hZGRyZXNzIHtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogZW5kO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbi5mYS5mYS1naXRodWIge1xcblxcdGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuXFx0Zm9udC1zaXplOiAzMHB4O1xcblxcblxcdCY6aG92ZXIge1xcblxcdFxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIHNjYWxlKDEuMyk7XFxuXFx0fVxcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Gb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0NPTlRFTlQgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBlbEZhY3RvcnksIGh0bWxGYWN0b3J5IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ29uc3RhbnRzKCkge1xuXHRjb25zdCBzaWRlYmFyID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcInNpZGViYXIgZHluYW1pY1wiIH0sIFtcblx0XHRlbEZhY3RvcnkoXCJidXR0b25cIiwge1xuXHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdGNsYXNzTGlzdDogXCJjbG9zZS1idG4gc2lkZWJhci10b2dnbGVyXCIsXG5cdFx0XHRpZDogXCJjbG9zZS1zaWRlYmFyXCIsXG5cdFx0XHR0ZXh0Q29udGVudDogXCLDl1wiLFxuXHRcdH0pLFxuXHRcdGVsRmFjdG9yeShcblx0XHRcdFwibmF2XCIsXG5cdFx0XHR7fSxcblx0XHRcdFtcImhvbWVcIiwgXCJtZW51XCIsIFwiZXZlbnRzXCJdLm1hcCgoYnV0dG9uKSA9PiB7XG5cdFx0XHRcdHJldHVybiBlbEZhY3RvcnkoXCJidXR0b25cIiwge1xuXHRcdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG5cdFx0XHRcdFx0Y2xhc3NMaXN0OiBcIm5hdi1idG5cIixcblx0XHRcdFx0XHRpZDogYCR7YnV0dG9ufS1idG5gLFxuXHRcdFx0XHRcdHRleHRDb250ZW50OiBidXR0b24sXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSlcblx0XHQpLFxuXHRdKTtcblxuXHRjb25zdCBoZWFkZXIgPSBlbEZhY3RvcnkoXCJoZWFkZXJcIiwge30sIFtcblx0XHRlbEZhY3RvcnkoXCJidXR0b25cIiwge1xuXHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdGNsYXNzTGlzdDogXCJzaWRlYmFyLXRvZ2dsZXJcIixcblx0XHRcdGlkOiBcIm9wZW4tc2lkZWJhclwiLFxuXHRcdFx0dGV4dENvbnRlbnQ6IFwi4piwXCIsXG5cdFx0fSksXG5cdFx0Y3JlYXRlU29jaWFsSWNvbnMoKSxcblx0XSk7XG5cblx0Y29uc3QgZm9vdGVyID0gZWxGYWN0b3J5KFwiZm9vdGVyXCIsIHt9LCBbXG5cdFx0Y3JlYXRlU29jaWFsSWNvbnMoKSxcblx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiYXV0aG9yXCIgfSwgW1xuXHRcdFx0ZWxGYWN0b3J5KFwicFwiLCB7IHRleHRDb250ZW50OiBcIldhbGtlclwiIH0pLFxuXHRcdFx0ZWxGYWN0b3J5KFxuXHRcdFx0XHRcImFcIixcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL21hcmxhdHRlXCIsXG5cdFx0XHRcdFx0dGFyZ2V0OiBcIl9ibGFua1wiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRbZWxGYWN0b3J5KFwiaVwiLCB7IGNsYXNzTGlzdDogXCJmYSBmYS1naXRodWJcIiB9KV1cblx0XHRcdCksXG5cdFx0XHRlbEZhY3RvcnkoXCJwXCIsIHsgdGV4dENvbnRlbnQ6IFwiTWFybGF0dFwiIH0pLFxuXHRcdF0pLFxuXHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJhZGRyZXNzXCIsIHRleHRDb250ZW50OiBcIlwiIH0sIFtcblx0XHRcdGVsRmFjdG9yeShcImFcIiwge1xuXHRcdFx0XHRjbGFzc0xpc3Q6IFwidW5kZXJsaW5lXCIsXG5cdFx0XHRcdGhyZWY6IFwiaHR0cHM6Ly9nb28uZ2wvbWFwcy8xYmJOUXQxSnBXZUhKN2hiOVwiLFxuXHRcdFx0XHR0ZXh0Q29udGVudDogXCIzMjkgQ29sdW1idXMgQXZlLCBOWUNcIixcblx0XHRcdH0pLFxuXHRcdFx0ZWxGYWN0b3J5KFwiYVwiLCB7XG5cdFx0XHRcdGNsYXNzTGlzdDogXCJ1bmRlcmxpbmVcIixcblx0XHRcdFx0aHJlZjogXCJ0ZWw6KzEtMjEyLTUxNy0xOTg3XCIsXG5cdFx0XHRcdHRleHRDb250ZW50OiBcIisxIDIxMiA1MTcgMTk4N1wiLFxuXHRcdFx0fSksXG5cdFx0XSksXG5cdF0pO1xuXG5cdHJldHVybiBbXG5cdFx0c2lkZWJhcixcblx0XHRoZWFkZXIsXG5cdFx0ZWxGYWN0b3J5KFwibWFpblwiLCB7IGlkOiBcImNoYW5naW5nLWNvbnRlbnRcIiB9KSxcblx0XHRmb290ZXIsXG5cdF0ubWFwKChzZWN0aW9uKSA9PiB7XG5cdFx0cmV0dXJuIGh0bWxGYWN0b3J5KHNlY3Rpb24pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU29jaWFsSWNvbnMoKSB7XG5cdC8vIHJldHVybnMgZGl2LnNvY2lhbHMgd2l0aCA0IGxpbmtzLCBlYWNoIGNvbnRhaW5pbmcgYW4gPGk+XG5cdHJldHVybiBlbEZhY3RvcnkoXG5cdFx0XCJkaXZcIixcblx0XHR7IGNsYXNzTGlzdDogXCJzb2NpYWxzXCIgfSxcblx0XHRbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaW5zdGFncmFtXCIsXG5cdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hc3NldHJlc3RhdXJhbnQvXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImZhY2Vib29rXCIsXG5cdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2Fzc2V0cmVzdGF1cmFudC9cIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwieWVscFwiLFxuXHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vd3d3LnllbHAuY29tL2Jpei9hc3NldC1uZXcteW9yaz9vc3E9YXNzZXRcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwidHJpcGFkdmlzb3JcIixcblx0XHRcdFx0bGluazogXCJodHRwczovL3d3dy50cmlwYWR2aXNvci5jb20vUmVzdGF1cmFudF9SZXZpZXctZzYwNzYzLWQxOTI4NDM0Ni1SZXZpZXdzLUFzc2V0LU5ld19Zb3JrX0NpdHlfTmV3X1lvcmsuaHRtbFwiLFxuXHRcdFx0fSxcblx0XHRdLm1hcCgocGFpcikgPT4ge1xuXHRcdFx0cmV0dXJuIGVsRmFjdG9yeShcImFcIiwgeyBocmVmOiBwYWlyLmxpbmsgfSwgW1xuXHRcdFx0XHRlbEZhY3RvcnkoXCJpXCIsIHtcblx0XHRcdFx0XHRjbGFzc0xpc3Q6IGBmYSBmYS0ke3BhaXIubmFtZX1gLFxuXHRcdFx0XHRcdGFyaWFIaWRkZW46IHRydWUsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XSk7XG5cdFx0fSlcblx0KTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tIFwiLi9mb3JtLmpzXCI7XG5pbXBvcnQgeyBodG1sRmFjdG9yeSwgZWxGYWN0b3J5IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZnVuY3Rpb24gY3JlYXRlVGV4dENoaWxkcmVuKCkge1xuXHRjb25zdCB0ZXh0Q2hpbGRyZW4gPSBbXG5cdFx0W1wiaDFcIiwgXCJQcml2YXRlIERpbmluZyAmIEV2ZW50c1wiXSxcblx0XHRbXCJoMlwiLCBcIlNwZWNpYWwgRXZlbnRzXCJdLFxuXHRcdFtcblx0XHRcdFwicFwiLFxuXHRcdFx0XCJXaXRoIHR3byBsZXZlbHMgb2YgZGluaW5nIGFuZCBhIGJhciBvbiBlYWNoIGZsb29yLCB0aGUgcmVzdGF1cmFudCBvZmZlcnMgc2VhdGluZyBmb3IgdXAgMjIwIGd1ZXN0cyB3aXRoaW4gYXBwcm94aW1hdGVseSA1LDAwMCBzcXVhcmUtZm9vdGFnZS4gVXBvbiBlbnRyeSBpbnRvIHRoZSByZXN0YXVyYW50IHRocm91Z2ggYSBnbGFzcyBlbnRyeXdheSBpcyBhIDI0LSBzZWF0IGJhciBmb3IgZ3Vlc3RzIHRvIGVuam95IGEgZHJpbmssIHNuYWNrLCBvciBmdWxsIGRpbm5lci5cIixcblx0XHRdLFxuXHRcdFtcblx0XHRcdFwicFwiLFxuXHRcdFx0XCJUaGVyZSBhcmUgbXVsdGlwbGUgYXJlYXMgb2YgdGhlIHJlc3RhdXJhbnQgdGhhdCBjYW4gaG9zdCBwcml2YXRlIGFuZCBzZW1pLXByaXZhdGUgZXZlbnRzIGFzIHRoZSByZXN0YXVyYW50IGJvYXN0cyB0d28gc2VtaS1wcml2YXRlIHJvb21zIHRoYXQgYm90aCBzZWF0IDIwIGd1ZXN0cywgYXMgd2VsbCBhcyB0aGUgdXBzdGFpcnMgTWV6emFuaW5lIGxldmVsLCB3aGljaCBzZWF0cyB1cCB0byA1MCBhbmQgOCBhdCB0aGUgYmFyLiBTZWF0aW5nIHdpbGwgYmUgYXZhaWxhYmxlIG91dGRvb3JzIHNlYXNvbmFsbHkuXCIsXG5cdFx0XSxcblx0XHRbXCJoMlwiLCBcIkNvY2t0YWlsIFBhcnRpZXMsIFJlY2VwdGlvbnMsIEJ1eW91dHNcIl0sXG5cdFx0W1xuXHRcdFx0XCJwXCIsXG5cdFx0XHRcIldlIGFyZSBwbGVhc2VkIHRvIG9mZmVyIG91ciBzZXJ2aWNlcyBmb3IgeW91ciBuZXh0IG9jY2FzaW9ucy4gQm9vayBvdXIgZW50aXJlIHJlc3RhdXJhbnQgZm9yIGEgc3BlY2lhbCBldmVuaW5nLCBjYXRlcmVkIGp1c3QgZm9yIHlvdSBhbmQgeW91ciBndWVzdHMuIExldCB1cyBicmluZyB0aGUgQVNTRVQgZXhwZXJpZW5jZSB0byB5b3VyIHdlZGRpbmcsIGJpcnRoZGF5cyBhbmQgb3RoZXIgbGFyZ2UgZXZlbnRzXCIsXG5cdFx0XSxcblx0XHRbXCJwXCIsIFwiSW5xdWlyZSBiZWxvdyBvciBjb250YWN0IHVzIGF0OlwiXSxcblx0XS5tYXAoKGVudHJ5KSA9PiB7XG5cdFx0cmV0dXJuIGVsRmFjdG9yeShlbnRyeVswXSwgeyB0ZXh0Q29udGVudDogZW50cnlbMV0gfSk7XG5cdH0pO1xuXG5cdHRleHRDaGlsZHJlblt0ZXh0Q2hpbGRyZW4ubGVuZ3RoIC0gMV0uY2hpbGRyZW4ucHVzaChcblx0XHRlbEZhY3RvcnkoXCJhXCIsIHtcblx0XHRcdGhyZWY6IFwidGVsOisxLTIxMi01MTctMTk4N1wiLFxuXHRcdFx0dGV4dENvbnRlbnQ6IFwiKzEgMjEyIDUxNyAxOTg3XCIsXG5cdFx0XHRjbGFzc0xpc3Q6IFwidW5kZXJsaW5lXCIsXG5cdFx0fSlcblx0KTtcblxuXHR0ZXh0Q2hpbGRyZW4ucHVzaChcblx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiY2FsbC10by1hY3Rpb25cIiB9LCBbXG5cdFx0XHRlbEZhY3RvcnkoXCJidXR0b25cIiwge1xuXHRcdFx0XHRjbGFzc0xpc3Q6IFwiaW5xdWlyZVwiLFxuXHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0XHR0ZXh0Q29udGVudDogXCJJbnF1aXJlIE5vd1wiLFxuXHRcdFx0fSksXG5cdFx0XSlcblx0KTtcblx0cmV0dXJuIHRleHRDaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGhvdG9zKCkge1xuXHRyZXR1cm4gW1xuXHRcdHtcblx0XHRcdHNyYzogXCJodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhL2JiZjAyNWIyYTE5NDQwZDE5N2NiZWY2NjZmZmZiYzhlLmpwZy92MS9maWxsL3dfOTk5LGhfNjAwLGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEsZW5jX2F1dG8vYmJmMDI1YjJhMTk0NDBkMTk3Y2JlZjY2NmZmZmJjOGUuanBnXCIsXG5cdFx0XHRhbHQ6IFwiUGVvcGxlIGRyaW5raW5nIGF0IGEgYmFyXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzcmM6IFwiaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS81NGE0Y2RfYTI2NWEyZjI1ODM0NGMxNTljM2QwNmZjZWJkOTQwZWV+bXYyLmpwZy92MS9maWxsL3dfNjY2LGhfNjAwLGFsX2wscV84NSx1c21fMC42Nl8xLjAwXzAuMDEsZW5jX2F1dG8vNTRhNGNkX2EyNjVhMmYyNTgzNDRjMTU5YzNkMDZmY2ViZDk0MGVlfm12Mi5qcGdcIixcblx0XHRcdGFsdDogXCJBIGdsYXNzIG9mIHdpbmUgYW5kIHBsYXRlIG9mIGZvb2RcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNyYzogXCJodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzU0YTRjZF85NTE4NGE4NmFlZWU0MmJjOGYyYjY1ZDQxNDhhY2RkZn5tdjJfZF8xOTUwXzEzMDhfc18yLmpwZy92MS9maWxsL3dfNjY2LGhfNjAwLGFsX2MscV84NSx1c21fMC42Nl8xLjAwXzAuMDEsZW5jX2F1dG8vNTRhNGNkXzk1MTg0YTg2YWVlZTQyYmM4ZjJiNjVkNDE0OGFjZGRmfm12Ml9kXzE5NTBfMTMwOF9zXzIuanBnXCIsXG5cdFx0XHRhbHQ6IFwiQSBESiBib290aFwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c3JjOiBcImh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkX2IyZTUzNmFiZjBlYTQzNmQ5MDU1N2M1ZTUyOGExZWMwfm12Mi5wbmcvdjEvZmlsbC93Xzk5OSxoXzYwMCxhbF9sLHFfOTAsdXNtXzAuNjZfMS4wMF8wLjAxLGVuY19hdXRvLzU0YTRjZF9iMmU1MzZhYmYwZWE0MzZkOTA1NTdjNWU1MjhhMWVjMH5tdjIucG5nXCIsXG5cdFx0XHRhbHQ6IFwiQSBiYXIgZnVsbCBvZiBwZW9wbGVcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNyYzogXCJodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzU0YTRjZF82NjY0Mzg4NWJmMmU0NGQ3YTVmOTM5NmNkMjZmNmU5N35tdjIuanBnL3YxL2ZpbGwvd184MzMsaF81NTAsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMSxlbmNfYXV0by81NGE0Y2RfNjY2NDM4ODViZjJlNDRkN2E1ZjkzOTZjZDI2ZjZlOTd+bXYyLmpwZ1wiLFxuXHRcdFx0YWx0OiBcIkFuIGVtcHR5IGJhciwgbGl0IGZyb20gdW5kZXJuZWF0aFwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c3JjOiBcImh0dHBzOi8vc3RhdGljLndpeHN0YXRpYy5jb20vbWVkaWEvNTRhNGNkXzVjMDI0ODA0MDAxNTRiYmViZDA3NThlYjJmOGQ3Yjhkfm12Ml9kXzE2MDBfMTIwMF9zXzIuanBnL3YxL2ZpbGwvd184MzMsaF81NTAsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMSxlbmNfYXV0by81NGE0Y2RfNWMwMjQ4MDQwMDE1NGJiZWJkMDc1OGViMmY4ZDdiOGR+bXYyX2RfMTYwMF8xMjAwX3NfMi5qcGdcIixcblx0XHRcdGFsdDogXCJSZXN0YXVyYW50IHN0YWZmXCIsXG5cdFx0fSxcblx0XVxuXHRcdC5tYXAoKGltZ09iaiwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IFtzcmMsIGFsdF0gPSBbaW1nT2JqLnNyYywgaW1nT2JqLmFsdF07XG5cdFx0XHRyZXR1cm4gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImltYWdlLWNvbnRhaW5lclwiIH0sIFtcblx0XHRcdFx0ZWxGYWN0b3J5KFwiaW1nXCIsIHsgc3JjLCBhbHQgfSksXG5cdFx0XHRdKTtcblx0XHR9KVxuXHRcdC5yZWR1Y2UoKGFjYywgY3VycmVudEltZywgaW5kZXgpID0+IHtcblx0XHRcdGlmICghKGluZGV4ICYgMSkpIHtcblx0XHRcdFx0Ly8gSWYgZXZlbiwgY3JlYXRlIHRpZXIgd2l0aCBjaGlsZCBpbWdcblx0XHRcdFx0YWNjLnB1c2goZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcInRpZXJcIiB9LCBbY3VycmVudEltZ10pKTtcblx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIElmIG9kZCwgYWRkIGltZyBjaGlsZCB0byBwcmV2aW91cyB0aWVyXG5cdFx0XHRcdGFjY1thY2MubGVuZ3RoIC0gMV0uY2hpbGRyZW4ucHVzaChjdXJyZW50SW1nKTtcblx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdH1cblx0XHR9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEV2ZW50cygpIHtcblx0Y29uc3QgW2V2ZW50c0NvbnRlbnQsIHBob3RvcywgY2FsbFRvQWN0aW9uLCBtb2RhbEVsZW1lbnRdID0gW1xuXHRcdFwiY29udGVudFwiLFxuXHRcdFwicGhvdG9zXCIsXG5cdFx0XCJjYWxsLXRvLWFjdGlvblwiLFxuXHRcdFwibW9kYWwgY2xvc2UtbW9kYWwgaGlkZGVuXCIsXG5cdF0ubWFwKChlbCkgPT4ge1xuXHRcdHJldHVybiBlbEZhY3RvcnkoXCJhcnRpY2xlXCIsIHsgY2xhc3NMaXN0OiBlbCB9KTtcblx0fSk7XG5cblx0ZXZlbnRzQ29udGVudC5jaGlsZHJlbi5wdXNoKFxuXHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJhcnRcIiB9KSxcblx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwidGV4dFwiIH0sIGNyZWF0ZVRleHRDaGlsZHJlbigpKVxuXHQpO1xuXG5cdHBob3Rvcy5jaGlsZHJlbi5wdXNoKC4uLmNyZWF0ZVBob3RvcygpKTtcblxuXHRjYWxsVG9BY3Rpb24uY2hpbGRyZW4ucHVzaChcblx0XHRlbEZhY3RvcnkoXCJwXCIsIHsgdGV4dENvbnRlbnQ6IFwiTGV0IHVzIGhvc3QgeW91ciBuZXh0IGV2ZW50XCIgfSksXG5cdFx0ZWxGYWN0b3J5KFwiYnV0dG9uXCIsIHtcblx0XHRcdGNsYXNzTGlzdDogXCJpbnF1aXJlXCIsXG5cdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0dGV4dENvbnRlbnQ6IFwiSW5xdWlyZSBOb3dcIixcblx0XHR9KVxuXHQpO1xuXG5cdG1vZGFsRWxlbWVudC5jaGlsZHJlbi5wdXNoKGNyZWF0ZUZvcm0oKSk7XG5cblx0cmV0dXJuIGh0bWxGYWN0b3J5KFxuXHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJldmVudHMgZHluYW1pY1wiIH0sIFtcblx0XHRcdGV2ZW50c0NvbnRlbnQsXG5cdFx0XHRwaG90b3MsXG5cdFx0XHRjYWxsVG9BY3Rpb24sXG5cdFx0XHRtb2RhbEVsZW1lbnQsXG5cdFx0XSlcblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlbkZvckNsaWNrcygpIHtcblx0Y29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuXG5cdGNvbnN0IGlucXVpcmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnF1aXJlXCIpO1xuXHRpbnF1aXJlQnRucy5mb3JFYWNoKChidXR0b24pID0+IHtcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGNvbnN0IGNsb3NlTW9kYWxCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jbG9zZS1tb2RhbFwiKTtcblx0Y2xvc2VNb2RhbEJ0bnMuZm9yRWFjaCgoY2xvc2VyKSA9PiB7XG5cdFx0Y2xvc2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcyhcImNsb3NlLW1vZGFsXCIpKSB7XG5cdFx0XHRcdG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnNvbGUubG9nKFwiRm9ybSBzdWJtaXR0ZWQuXCIpO1xuXHRcdG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cdH0pO1xufVxuIiwiaW1wb3J0IHsgZWxGYWN0b3J5IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZnVuY3Rpb24gZm9ybVJvd0ZhY3RvcnkoZm9ybURhdGFBcnJheXMpIHtcblx0cmV0dXJuIGZvcm1EYXRhQXJyYXlzXG5cdFx0Lm1hcCgocGFpcikgPT4ge1xuXHRcdFx0Y29uc3Qga2ViYWIgPSBwYWlyWzBdLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpO1xuXHRcdFx0cmV0dXJuIGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJmb3JtLWl0ZW1cIiB9LCBbXG5cdFx0XHRcdGVsRmFjdG9yeShcImxhYmVsXCIsIHtcblx0XHRcdFx0XHRodG1sRm9yOiBrZWJhYixcblx0XHRcdFx0XHR0ZXh0Q29udGVudDogcGFpclswXSArIFwiOlwiLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0ZWxGYWN0b3J5KFwiaW5wdXRcIiwge1xuXHRcdFx0XHRcdGlkOiBrZWJhYixcblx0XHRcdFx0XHR0eXBlOiBwYWlyWzFdLFxuXHRcdFx0XHRcdGF1dG9jb21wbGV0ZTogcGFpclsyXSxcblx0XHRcdFx0fSksXG5cdFx0XHRdKTtcblx0XHR9KVxuXHRcdC5yZWR1Y2UoKGFjYywgY3VycmVudEl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHRpZiAoIShpbmRleCAmIDEpKSB7XG5cdFx0XHRcdC8vIElmIGV2ZW4sIGNyZWF0ZSByb3cgd2l0aCBjdXJyZW50SXRlbSBhcyBhIGNoaWxkXG5cdFx0XHRcdGFjYy5wdXNoKFxuXHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJmb3JtLXJvd1wiIH0sIFtjdXJyZW50SXRlbV0pXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBJZiBvZGQsIGFkZCBjdXJyZW50SXRlbSB0byBwcmV2aW91cyByb3dcblx0XHRcdFx0YWNjW2FjYy5sZW5ndGggLSAxXS5jaGlsZHJlbi5wdXNoKGN1cnJlbnRJdGVtKTtcblx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdH1cblx0XHR9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURldGFpbFNlY3Rpb24oKSB7XG5cdC8vIEZpcnN0IGZvcm0taXRlbVxuXHRjb25zdCBldmVudFR5cGUgPSBlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiZm9ybS1pdGVtXCIgfSwgW1xuXHRcdGVsRmFjdG9yeShcImxhYmVsXCIsIHtcblx0XHRcdGh0bWxGb3I6IFwiZXZlbnQtdHlwZVwiLFxuXHRcdFx0dGV4dENvbnRlbnQ6IFwiVHlwZSBvZiBFdmVudDpcIixcblx0XHR9KSxcblx0XHRlbEZhY3RvcnkoXCJpbnB1dFwiLCB7XG5cdFx0XHRpZDogXCJldmVudC10eXBlXCIsXG5cdFx0XHR0eXBlOiBcInRleHRcIixcblx0XHRcdHBsYWNlaG9sZGVyOiBcIkJpcnRoZGF5LCBCdXNpbmVzcyBEaW5uZXIsIGV0Yy5cIixcblx0XHRcdGF1dG9jb21wbGV0ZTogXCJvZmZcIixcblx0XHR9KSxcblx0XSk7XG5cblx0Ly8gTXVsdGlwbGUgY2hvaWNlIHJhZGlvIGJ1dHRvbnNcblx0Y29uc3QgbG9jYXRpb24gPSBlbEZhY3RvcnkoXCJmaWVsZHNldFwiLCB7IGNsYXNzTGlzdDogXCJsb2NhdGlvblwiIH0sIFtcblx0XHRlbEZhY3RvcnkoXCJsZWdlbmRcIiwgeyB0ZXh0Q29udGVudDogXCJMb2NhdGlvbjpcIiB9KSxcblx0XHQuLi5bXG5cdFx0XHRbXCJhc3NldFwiLCBcIjMyOSBDb2x1bWJ1cyBBdmUuXCJdLFxuXHRcdFx0W1widGVzc2FcIiwgXCIzNDkgQW1zdGVyZGFtIEF2ZS5cIl0sXG5cdFx0XS5tYXAoKHBhaXIpID0+IHtcblx0XHRcdHJldHVybiBlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiZm9ybS1pdGVtXCIgfSwgW1xuXHRcdFx0XHRlbEZhY3RvcnkoXCJsYWJlbFwiLCB7fSwgW1xuXHRcdFx0XHRcdGVsRmFjdG9yeShcImlucHV0XCIsIHtcblx0XHRcdFx0XHRcdG5hbWU6IFwibG9jYXRpb25cIixcblx0XHRcdFx0XHRcdHR5cGU6IFwicmFkaW9cIixcblx0XHRcdFx0XHRcdHZhbHVlOiBwYWlyWzBdLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdGVsRmFjdG9yeShcInNwYW5cIiwge1xuXHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IHBhaXJbMF0udG9VcHBlckNhc2UoKSArIFwiIC0gXCIgKyBwYWlyWzFdLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRdKSxcblx0XHRcdF0pO1xuXHRcdH0pLFxuXHRdKTtcblxuXHQvLyBMYXN0IDIgcm93cyBvZiB0aGlzIHNlY3Rpb25cblx0Y29uc3QgYnlUaGVOdW1iZXJzID0gZm9ybVJvd0ZhY3RvcnkoW1xuXHRcdFtcIlBhcnR5IFNpemVcIiwgXCJudW1iZXJcIiwgXCJvZmZcIl0sXG5cdFx0W1wiRGF0ZVwiLCBcImRhdGVcIiwgXCJvZmZcIl0sXG5cdFx0W1wiU3RhcnQgVGltZVwiLCBcInRpbWVcIiwgXCJvZmZcIl0sXG5cdFx0W1wiRW5kIFRpbWVcIiwgXCJ0aW1lXCIsIFwib2ZmXCJdLFxuXHRdKTtcblxuXHRyZXR1cm4gW2V2ZW50VHlwZSwgbG9jYXRpb24sIC4uLmJ5VGhlTnVtYmVyc107XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV4dHJhc1NlY3Rpb24oKSB7XG5cdC8vIDEgZm9ybS1pdGVtIHdpdGggdGV4dGFyZWEgYW5kIDEgd2l0aCBzZWxlY3Rcblx0Y29uc3QgW3RleHRBcmVhSXRlbSwgc2VsZWN0SXRlbV0gPSBbXG5cdFx0W1wiZXh0cmEtaW5mb1wiLCBcInRleHRhcmVhXCJdLFxuXHRcdFtcInJlZmVycmFsLXNvdXJjZVwiLCBcInNlbGVjdFwiXSxcblx0XS5tYXAoKHBhaXIpID0+IHtcblx0XHRyZXR1cm4gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImZvcm0taXRlbVwiIH0sIFtcblx0XHRcdGVsRmFjdG9yeShcImxhYmVsXCIsIHsgaHRtbEZvcjogcGFpclswXSB9KSxcblx0XHRcdGVsRmFjdG9yeShwYWlyWzFdLCB7IG5hbWU6IHBhaXJbMF0sIGlkOiBwYWlyWzBdIH0pLFxuXHRcdF0pO1xuXHR9KTtcblxuXHQvLyBBZGQgdGV4dCBjb250ZW50IHRvIGVhY2ggPGxhYmVsPlxuXHR0ZXh0QXJlYUl0ZW0uY2hpbGRyZW5bMF0uYXR0cmlidXRlcy50ZXh0Q29udGVudCA9XG5cdFx0XCJJcyB0aGVyZSBhbnkgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiB5b3Ugd291bGQgbGlrZSB0byBhZGQ/XCI7XG5cdHNlbGVjdEl0ZW0uY2hpbGRyZW5bMF0uYXR0cmlidXRlcy50ZXh0Q29udGVudCA9XG5cdFx0XCJIb3cgZGlkIHlvdSBoZWFyIGFib3V0IHVzP1wiO1xuXG5cdC8vIEFkZCBhdHRyaWJ1dGVzIHRvIDx0ZXh0YXJlYT5cblx0dGV4dEFyZWFJdGVtLmNoaWxkcmVuWzFdLmF0dHJpYnV0ZXMucm93cyA9IFwiNlwiO1xuXHR0ZXh0QXJlYUl0ZW0uY2hpbGRyZW5bMV0uYXR0cmlidXRlcy5wbGFjZWhvbGRlciA9XG5cdFx0XCJTdXJwcmlzZXMsIERpZXRhcnkgTmVlZHMsIGV0Yy5cIjtcblxuXHQvLyBBZGQgOSA8b3B0aW9uPidzIHRvIDxzZWxlY3Q+XG5cdGNvbnN0IG9wdGlvbnNBcnJheSA9IFtcblx0XHRcIkV2ZW50VXBcIixcblx0XHRcIkluc3RhZ3JhbVwiLFxuXHRcdFwiRmFjZWJvb2tcIixcblx0XHRcIlRyaXBsZXNlYXQgUmVzdGF1cmFudHNcIixcblx0XHRcIlNlYXJjaCBFbmdpbmVcIixcblx0XHRcIkVtYWlsXCIsXG5cdFx0XCJPdGhlclwiLFxuXHRcdFwiV2Vic2l0ZVwiLFxuXHRdLm1hcCgodGV4dCkgPT4ge1xuXHRcdHJldHVybiBlbEZhY3RvcnkoXCJvcHRpb25cIiwge1xuXHRcdFx0dmFsdWU6IHRleHQuc3BsaXQoXCIgXCIpWzBdLnRvTG93ZXJDYXNlKCksXG5cdFx0XHR0ZXh0Q29udGVudDogdGV4dCxcblx0XHR9KTtcblx0fSk7XG5cblx0c2VsZWN0SXRlbS5jaGlsZHJlblsxXS5jaGlsZHJlbi5wdXNoKFxuXHRcdGVsRmFjdG9yeShcIm9wdGlvblwiLCB7XG5cdFx0XHR2YWx1ZTogXCJcIixcblx0XHRcdHRleHRDb250ZW50OiBcIlNlbGVjdCBhbiBvcHRpb25cIixcblx0XHRcdHNlbGVjdGVkOiB0cnVlLFxuXHRcdH0pLFxuXHRcdC4uLm9wdGlvbnNBcnJheVxuXHQpO1xuXG5cdHJldHVybiBbdGV4dEFyZWFJdGVtLCBzZWxlY3RJdGVtXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XG5cdC8vIENyZWF0ZSBzZWN0aW9ucyBjb250YWluZXJzIGZvciB0aGUgY29tcGxpY2F0ZWQgcGFydHNcblx0Y29uc3QgW2Zvcm1Db250YWN0LCBmb3JtRGV0YWlscywgZm9ybUV4dHJhc10gPSBbXG5cdFx0XCJmb3JtLWNvbnRhY3RcIixcblx0XHRcImZvcm0tZGV0YWlsc1wiLFxuXHRcdFwiZm9ybS1leHRyYXNcIixcblx0XS5tYXAoKGVsKSA9PiB7XG5cdFx0cmV0dXJuIGVsRmFjdG9yeShcInNlY3Rpb25cIiwgeyBjbGFzc0xpc3Q6IGVsIH0pO1xuXHR9KTtcblxuXHRmb3JtQ29udGFjdC5jaGlsZHJlbi5wdXNoKFxuXHRcdGVsRmFjdG9yeShcImg0XCIsIHsgdGV4dENvbnRlbnQ6IFwiQ29udGFjdFwiIH0pLFxuXHRcdC4uLmZvcm1Sb3dGYWN0b3J5KFtcblx0XHRcdFtcIkZpcnN0IE5hbWVcIiwgXCJ0ZXh0XCIsIFwiZ2l2ZW4tbmFtZVwiXSxcblx0XHRcdFtcIkxhc3QgTmFtZVwiLCBcInRleHRcIiwgXCJmYW1pbHktbmFtZVwiXSxcblx0XHRcdFtcIkVtYWlsXCIsIFwiZW1haWxcIiwgXCJlbWFpbFwiXSxcblx0XHRcdFtcIlBob25lXCIsIFwidGVsXCIsIFwidGVsXCJdLFxuXHRcdFx0W1wiQ29tcGFueVwiLCBcInRleHRcIiwgXCJvcmdhbml6YXRpb25cIl0sXG5cdFx0XSlcblx0KTtcblxuXHRmb3JtRGV0YWlscy5jaGlsZHJlbi5wdXNoKFxuXHRcdGVsRmFjdG9yeShcImg0XCIsIHsgdGV4dENvbnRlbnQ6IFwiRXZlbnQgRGV0YWlsc1wiIH0pLFxuXHRcdC4uLmNyZWF0ZURldGFpbFNlY3Rpb24oKVxuXHQpO1xuXG5cdGZvcm1FeHRyYXMuY2hpbGRyZW4ucHVzaChcblx0XHRlbEZhY3RvcnkoXCJoNFwiLCB7IHRleHRDb250ZW50OiBcIkV4dHJhc1wiIH0pLFxuXHRcdC4uLmNyZWF0ZUV4dHJhc1NlY3Rpb24oKVxuXHQpO1xuXG5cdC8vIENyZWF0ZSBmb3JtIGVsZW1lbnQgYW5kIG92ZXJhcmNoaW5nIHN0cnVjdHVyZVxuXHRjb25zdCBmb3JtRWxlbWVudCA9IGVsRmFjdG9yeShcImZvcm1cIiwge30sIFtcblx0XHRlbEZhY3RvcnkoXCJzZWN0aW9uXCIsIHsgY2xhc3NMaXN0OiBcImZvcm0taGVhZGVyXCIgfSwgW1xuXHRcdFx0ZWxGYWN0b3J5KFwiaDNcIiwgeyB0ZXh0Q29udGVudDogXCJMZXQncyBnZXQgc29tZSBpbmZvIVwiIH0pLFxuXHRcdFx0ZWxGYWN0b3J5KFwiYnV0dG9uXCIsIHtcblx0XHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdFx0Y2xhc3NMaXN0OiBcImNsb3NlLW1vZGFsIGNsb3NlLWJ0blwiLFxuXHRcdFx0XHRpZDogXCJjbG9zZS1tb2RhbFwiLFxuXHRcdFx0XHR0ZXh0Q29udGVudDogXCLDl1wiLFxuXHRcdFx0fSksXG5cdFx0XSksXG5cdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImZvcm0tY29udGVudFwiIH0sIFtcblx0XHRcdGZvcm1Db250YWN0LFxuXHRcdFx0Zm9ybURldGFpbHMsXG5cdFx0XHRmb3JtRXh0cmFzLFxuXHRcdF0pLFxuXHRcdGVsRmFjdG9yeShcImJ1dHRvblwiLCB7IHR5cGU6IFwic3VibWl0XCIsIHRleHRDb250ZW50OiBcIlN1Ym1pdFwiIH0pLFxuXHRdKTtcblx0cmV0dXJuIGZvcm1FbGVtZW50O1xufVxuIiwiaW1wb3J0IHsgZWxGYWN0b3J5LCBodG1sRmFjdG9yeSB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEhvbWUoKSB7XG5cdGNvbnN0IGhlcm9UZXh0ID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImhlcm8tdGV4dFwiIH0sIFtcblx0XHRlbEZhY3RvcnkoXCJoMVwiLCB7IGNsYXNzTGlzdDogXCJicmFuZFwiLCB0ZXh0Q29udGVudDogXCJBRVwiIH0pLFxuXHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJyZXNlcnZhdGlvbnNcIiB9LCBbXG5cdFx0XHRlbEZhY3RvcnkoXCJhXCIsIHtcblx0XHRcdFx0aHJlZjogXCJodHRwczovL3Jlc3kuY29tL2NpdGllcy9ueS9hc3NldFwiLFxuXHRcdFx0XHR0ZXh0Q29udGVudDogXCJyZXNlcnZhdGlvbnNcIixcblx0XHRcdH0pLFxuXHRcdF0pLFxuXHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJzY3JvbGwtZG93blwiIH0sIFtcblx0XHRcdGVsRmFjdG9yeShcImFcIiwgeyBocmVmOiBcIiNob3Vyc1wiIH0sIFtcblx0XHRcdFx0ZWxGYWN0b3J5KFwiaVwiLCB7XG5cdFx0XHRcdFx0Y2xhc3NMaXN0OiBcImZhIGZhLWFuZ2xlLWRvd25cIixcblx0XHRcdFx0fSksXG5cdFx0XHRdKSxcblx0XHRdKSxcblx0XSk7XG5cblx0Y29uc3QgbGFudGVybnMgPSBlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwibGFudGVybnNcIiB9KTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRsYW50ZXJucy5jaGlsZHJlbi5wdXNoKFxuXHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImxhbnRlcm5cIiB9LCBbXG5cdFx0XHRcdC4uLltcInRvcFwiLCBcImJvZHlcIiwgXCJib3R0b21cIl0ubWFwKCh0ZXh0KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsRmFjdG9yeShcImRpdlwiLCB7XG5cdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IHRleHQsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XSlcblx0XHQpO1xuXHR9XG5cblx0Y29uc3QgaG91cnNEZXRhaWxzID0gW1xuXHRcdHtcblx0XHRcdHNjaGVkdWxlOiBcIm9wZXJhdGluZyBob3Vyc1wiLFxuXHRcdFx0aG91cnNUZXh0OiB7XG5cdFx0XHRcdFwibW9uZGF5LWZyaWRheVwiOiBcIjRwbS0xMXBtXCIsXG5cdFx0XHRcdHNhdHVyZGF5OiBcIjJwbS0yYW1cIixcblx0XHRcdFx0c3VuZGF5OiBcIjJwbS0xMHBtXCIsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2NoZWR1bGU6IFwiZGlubmVyIGhvdXJzXCIsXG5cdFx0XHRob3Vyc1RleHQ6IHtcblx0XHRcdFx0XCJtb25kYXktdGh1cnNkYXlcIjogXCI1cG0tMTBwbVwiLFxuXHRcdFx0XHRmcmlkYXk6IFwiNXBtLTExcG1cIixcblx0XHRcdFx0c2F0dXJkYXk6IFwiMnBtLTExcG1cIixcblx0XHRcdFx0c3VuZGF5OiBcIjJwbS05cG1cIixcblx0XHRcdH0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzY2hlZHVsZTogXCJoYXBweSBob3VyXCIsXG5cdFx0XHRob3Vyc1RleHQ6IHtcblx0XHRcdFx0XCJtb25kYXktZnJpZGF5XCI6IFwiNHBtLTZwbVwiLFxuXHRcdFx0XHRzYXR1cmRheTogXCIxMHBtLTEyYW1cIixcblx0XHRcdH0sXG5cdFx0fSxcblx0XTtcblxuXHRjb25zdCBob3Vyc0RpdnMgPSBob3Vyc0RldGFpbHMubWFwKChob3Vyc09iamVjdCkgPT4ge1xuXHRcdHJldHVybiBlbEZhY3RvcnkoXG5cdFx0XHRcImRpdlwiLFxuXHRcdFx0e1xuXHRcdFx0XHRjbGFzc0xpc3Q6IGhvdXJzT2JqZWN0LnNjaGVkdWxlLnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKSxcblx0XHRcdH0sXG5cdFx0XHRbXG5cdFx0XHRcdGVsRmFjdG9yeShcImgyXCIsIHsgdGV4dENvbnRlbnQ6IGhvdXJzT2JqZWN0LnNjaGVkdWxlICsgXCI6XCIgfSksXG5cdFx0XHRcdC4uLk9iamVjdC5lbnRyaWVzKGhvdXJzT2JqZWN0LmhvdXJzVGV4dCkubWFwKChlbnRyeSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBlbEZhY3RvcnkoXCJwXCIsIHtcblx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBgJHtlbnRyeVswXX06ICR7ZW50cnlbMV19IGAsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnN0IGhvbWVEaXYgPSBlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiaG9tZSBkeW5hbWljXCIgfSwgW1xuXHRcdGVsRmFjdG9yeShcInNlY3Rpb25cIiwgeyBjbGFzc0xpc3Q6IFwiaGVyb1wiIH0sIFtcblx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJhcnRcIiB9KSxcblx0XHRcdGhlcm9UZXh0LFxuXHRcdFx0bGFudGVybnMsXG5cdFx0XSksXG5cdFx0ZWxGYWN0b3J5KFwic2VjdGlvblwiLCB7IGNsYXNzTGlzdDogXCJob3Vycy1jb250YWluZXJcIiB9LCBbXG5cdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiaG91cnNcIiwgaWQ6IFwiaG91cnNcIiB9LCBob3Vyc0RpdnMpLFxuXHRcdF0pLFxuXHRdKTtcblx0cmV0dXJuIGh0bWxGYWN0b3J5KGhvbWVEaXYpO1xufVxuIiwiaW1wb3J0IHsgYnVpbGRNZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IHsgYnVpbGRIb21lIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IHsgYnVpbGRFdmVudHMsIGxpc3RlbkZvckNsaWNrcyB9IGZyb20gXCIuL2V2ZW50LmpzXCI7XG5pbXBvcnQgeyBidWlsZENvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgYWxsQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLWNvbnRlbnRcIik7XG5hbGxDb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcblsuLi5idWlsZENvbnN0YW50cygpXS5mb3JFYWNoKChzZWN0aW9uKSA9PiBhbGxDb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb24pKTtcblxuY29uc3QgY2hhbmdpbmdDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFuZ2luZy1jb250ZW50XCIpO1xuY2hhbmdpbmdDb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkSG9tZSgpKTtcblxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhci10b2dnbGVyXCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuXHR9KTtcbn0pO1xuXG5mdW5jdGlvbiBoYW5kbGVCdWlsZENsaWNrKHRhYkNob2ljZSkge1xuXHRjaGFuZ2luZ0NvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXHRjaGFuZ2luZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoXG5cdFx0dGFiQ2hvaWNlID09PSBcImhvbWUtYnRuXCJcblx0XHRcdD8gYnVpbGRIb21lKClcblx0XHRcdDogdGFiQ2hvaWNlID09PSBcImV2ZW50cy1idG5cIlxuXHRcdFx0PyBidWlsZEV2ZW50cygpXG5cdFx0XHQ6IGJ1aWxkTWVudSgpXG5cdCk7XG5cdHNpZGViYXIuY2xhc3NMaXN0ID0gXCJzaWRlYmFyXCI7XG5cdGlmICh0YWJDaG9pY2UgPT09IFwiZXZlbnRzLWJ0blwiKSB7XG5cdFx0bGlzdGVuRm9yQ2xpY2tzKCk7XG5cdH1cbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYnRuXCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0aGFuZGxlQnVpbGRDbGljayhlLnRhcmdldC5pZCk7XG5cdH0pO1xufSk7XG5cbi8vLy8vLy8vLy8vLy8vIEVYUE9SVFMgLy8vLy8vLy8vLy8vLy8vXG5leHBvcnQgZnVuY3Rpb24gZWxGYWN0b3J5KHR5cGUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuID0gW10pIHtcblx0cmV0dXJuIHsgdHlwZSwgYXR0cmlidXRlcywgY2hpbGRyZW4gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxGYWN0b3J5KG9iaikge1xuXHRjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLnR5cGUpO1xuXHRjb25zdCBhdHRyaWJ1dGVzID0gb2JqLmF0dHJpYnV0ZXM7XG5cblx0Zm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRlbFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHR9XG5cblx0b2JqLmNoaWxkcmVuPy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuXHRcdGVsLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5KGNoaWxkKSk7XG5cdH0pO1xuXG5cdHJldHVybiBlbDtcbn1cbiIsImltcG9ydCB7IGVsRmFjdG9yeSwgaHRtbEZhY3RvcnkgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRNZW51KCkge1xuXHRjb25zdCBkaW5uZXJMaW5rID1cblx0XHRcImh0dHBzOi8vd3d3LmFzc2V0cmVzdGF1cmFudC5jb20vX2ZpbGVzL3VnZC81NGE0Y2RfM2E3YTBhNTVhZTc0NGZjZWFlYzg1M2JjMGIxOWM3YjIucGRmXCI7XG5cdGNvbnN0IHdpbmVMaW5rID1cblx0XHRcImh0dHBzOi8vd3d3LmFzc2V0cmVzdGF1cmFudC5jb20vX2ZpbGVzL3VnZC81NGE0Y2RfMzgxZTUwZGU2OWFjNGIzZGFlNWY4MDU1MTNjMzM0ZDYucGRmXCI7XG5cblx0cmV0dXJuIGh0bWxGYWN0b3J5KFxuXHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJtZW51IGR5bmFtaWNcIiB9LCBbXG5cdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwibWVudS1hcnRcIiB9KSxcblx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJtZW51LXRleHRcIiB9LCBbXG5cdFx0XHRcdC4uLltcImRpbm5lclwiLCBcIndpbmVcIl0ubWFwKCh0ZXh0KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsRmFjdG9yeShcImFcIiwge1xuXHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IHRleHQsXG5cdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwibWVudS1saW5rXCIsXG5cdFx0XHRcdFx0XHRocmVmOiB0ZXh0ID09PSBcImRpbm5lclwiID8gZGlubmVyTGluayA6IHdpbmVMaW5rLFxuXHRcdFx0XHRcdFx0dGFyZ2V0OiBcIl9ibGFua1wiLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0ZWxGYWN0b3J5KFwiaDFcIiwgeyBjbGFzc0xpc3Q6IFwiYnJhbmRcIiwgdGV4dENvbnRlbnQ6IFwiQUVcIiB9KSxcblx0XHRcdF0pLFxuXHRcdF0pXG5cdCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==