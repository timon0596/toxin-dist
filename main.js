/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img sync \\.(jpe?g|png|svg)$":
/*!******************************************************!*\
  !*** ./src/img sync nonrecursive \.(jpe?g|png|svg)$ ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./Logo.svg\": \"./src/img/Logo.svg\",\n\t\"./image3.png\": \"./src/img/image3.png\",\n\t\"./rd1.png\": \"./src/img/rd1.png\",\n\t\"./rd2.png\": \"./src/img/rd2.png\",\n\t\"./rd3.png\": \"./src/img/rd3.png\",\n\t\"./sign_in.png\": \"./src/img/sign_in.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/img sync \\\\.(jpe?g|png|svg)$\";\n\n//# sourceURL=webpack:///./src/img_sync_nonrecursive_\\.(jpe?");

/***/ }),

/***/ "./src/img/Logo.svg":
/*!**************************!*\
  !*** ./src/img/Logo.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/Logo.svg\";\n\n//# sourceURL=webpack:///./src/img/Logo.svg?");

/***/ }),

/***/ "./src/img/image3.png":
/*!****************************!*\
  !*** ./src/img/image3.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/image3.png\";\n\n//# sourceURL=webpack:///./src/img/image3.png?");

/***/ }),

/***/ "./src/img/preview sync recursive \\.(jpe?g|png|svg)$":
/*!*************************************************!*\
  !*** ./src/img/preview sync \.(jpe?g|png|svg)$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./image0.png\": \"./src/img/preview/image0.png\",\n\t\"./image1.png\": \"./src/img/preview/image1.png\",\n\t\"./image10.png\": \"./src/img/preview/image10.png\",\n\t\"./image11.png\": \"./src/img/preview/image11.png\",\n\t\"./image2.png\": \"./src/img/preview/image2.png\",\n\t\"./image3.png\": \"./src/img/preview/image3.png\",\n\t\"./image4.png\": \"./src/img/preview/image4.png\",\n\t\"./image5.png\": \"./src/img/preview/image5.png\",\n\t\"./image6.png\": \"./src/img/preview/image6.png\",\n\t\"./image7.png\": \"./src/img/preview/image7.png\",\n\t\"./image8.png\": \"./src/img/preview/image8.png\",\n\t\"./image9.png\": \"./src/img/preview/image9.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/img/preview sync recursive \\\\.(jpe?g|png|svg)$\";\n\n//# sourceURL=webpack:///./src/img/preview_sync_\\.(jpe?");

/***/ }),

/***/ "./src/img/preview/image0.png":
/*!************************************!*\
  !*** ./src/img/preview/image0.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/preview/image0.png\";\n\n//# sourceURL=webpack:///./src/img/preview/image0.png?");

/***/ }),

/***/ "./src/img/preview/image1.png":
/*!************************************!*\
  !*** ./src/img/preview/image1.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/preview/image1.png\";\n\n//# sourceURL=webpack:///./src/img/preview/image1.png?");

/***/ }),

/***/ "./src/img/preview/image10.png":
/*!*************************************!*\
  !*** ./src/img/preview/image10.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/preview/image10.png\";\n\n//# sourceURL=webpack:///./src/img/preview/image10.png?");

/***/ }),

/***/ "./src/img/preview/image11.png":
/*!*************************************!*\
  !*** ./src/img/preview/image11.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/preview/image11.png\";\n\n//# sourceURL=webpack:///./src/img/preview/image11.png?");

/***/ }),

/***/ "./src/img/preview/image2.png":
/*!************************************!*\
  !*** ./src/img/preview/image2.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/preview/image2.png\";\n\n//# sourceURL=webpack:///./src/img/preview/image2.png?");

/***/ }),

/***/ "./src/img/preview/image3.png":
/*!************************************!*\
  !*** ./src/img/preview/image3.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/preview/image3.png\";\n\n//# sourceURL=webpack:///./src/img/preview/image3.png?");

/***/ }),

/***/ "./src/img/preview/image4.png":
/*!************************************!*\
  !*** ./src/img/preview/image4.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/preview/image4.png\";\n\n//# sourceURL=webpack:///./src/img/preview/image4.png?");

/***/ }),

/***/ "./src/img/preview/image5.png":
/*!************************************!*\
  !*** ./src/img/preview/image5.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/preview/image5.png\";\n\n//# sourceURL=webpack:///./src/img/preview/image5.png?");

/***/ }),

/***/ "./src/img/preview/image6.png":
/*!************************************!*\
  !*** ./src/img/preview/image6.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/preview/image6.png\";\n\n//# sourceURL=webpack:///./src/img/preview/image6.png?");

/***/ }),

/***/ "./src/img/preview/image7.png":
/*!************************************!*\
  !*** ./src/img/preview/image7.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/preview/image7.png\";\n\n//# sourceURL=webpack:///./src/img/preview/image7.png?");

/***/ }),

/***/ "./src/img/preview/image8.png":
/*!************************************!*\
  !*** ./src/img/preview/image8.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/preview/image8.png\";\n\n//# sourceURL=webpack:///./src/img/preview/image8.png?");

/***/ }),

/***/ "./src/img/preview/image9.png":
/*!************************************!*\
  !*** ./src/img/preview/image9.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/preview/image9.png\";\n\n//# sourceURL=webpack:///./src/img/preview/image9.png?");

/***/ }),

/***/ "./src/img/rd1.png":
/*!*************************!*\
  !*** ./src/img/rd1.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/rd1.png\";\n\n//# sourceURL=webpack:///./src/img/rd1.png?");

/***/ }),

/***/ "./src/img/rd2.png":
/*!*************************!*\
  !*** ./src/img/rd2.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/rd2.png\";\n\n//# sourceURL=webpack:///./src/img/rd2.png?");

/***/ }),

/***/ "./src/img/rd3.png":
/*!*************************!*\
  !*** ./src/img/rd3.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/rd3.png\";\n\n//# sourceURL=webpack:///./src/img/rd3.png?");

/***/ }),

/***/ "./src/img/sign_in.png":
/*!*****************************!*\
  !*** ./src/img/sign_in.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/sign_in.png\";\n\n//# sourceURL=webpack:///./src/img/sign_in.png?");

/***/ }),

/***/ "./src/img/users sync recursive \\.(jpe?g|png)$":
/*!*******************************************!*\
  !*** ./src/img/users sync \.(jpe?g|png)$ ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./user1.jpeg\": \"./src/img/users/user1.jpeg\",\n\t\"./user2.png\": \"./src/img/users/user2.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/img/users sync recursive \\\\.(jpe?g|png)$\";\n\n//# sourceURL=webpack:///./src/img/users_sync_\\.(jpe?");

/***/ }),

/***/ "./src/img/users/user1.jpeg":
/*!**********************************!*\
  !*** ./src/img/users/user1.jpeg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/users/user1.jpeg\";\n\n//# sourceURL=webpack:///./src/img/users/user1.jpeg?");

/***/ }),

/***/ "./src/img/users/user2.png":
/*!*********************************!*\
  !*** ./src/img/users/user2.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/users/user2.png\";\n\n//# sourceURL=webpack:///./src/img/users/user2.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jquery_ui_ui_widgets_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-ui/ui/widgets/slider */ \"./node_modules/jquery-ui/ui/widgets/slider.js\");\n/* harmony import */ var jquery_ui_ui_widgets_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_slider__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jquery_ui_themes_base_all_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-ui/themes/base/all.css */ \"./node_modules/jquery-ui/themes/base/all.css\");\n/* harmony import */ var jquery_ui_themes_base_all_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_themes_base_all_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.pug */ \"./src/index.pug\");\n/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_pug__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ui_kit_ui_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui_kit/ui_kit */ \"./src/ui_kit/ui_kit.js\");\n/* harmony import */ var air_datepicker_dist_css_datepicker_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! air-datepicker/dist/css/datepicker.min.css */ \"./node_modules/air-datepicker/dist/css/datepicker.min.css\");\n/* harmony import */ var air_datepicker_dist_css_datepicker_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(air_datepicker_dist_css_datepicker_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var bootstrap_scss_vendor_rfs_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/scss/vendor/_rfs.scss */ \"./node_modules/bootstrap/scss/vendor/_rfs.scss\");\n/* harmony import */ var bootstrap_scss_vendor_rfs_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss_vendor_rfs_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/scss/bootstrap.scss */ \"./node_modules/bootstrap/scss/bootstrap.scss\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var bootstrap_js_src_carousel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/js/src/carousel.js */ \"./node_modules/bootstrap/js/src/carousel.js\");\n/* harmony import */ var _main_sass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main.sass */ \"./src/main.sass\");\n/* harmony import */ var _main_sass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_main_sass__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _pages_js_sign_in__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/js/_sign_in */ \"./src/pages/js/_sign_in.js\");\n/* harmony import */ var _pages_js_sign_in__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_pages_js_sign_in__WEBPACK_IMPORTED_MODULE_10__);\n\n\n // import 'jquery-ui/themes/base/slider.css'\n\n\n\n\n\n\n\n\n\n\nvar userImg = __webpack_require__(\"./src/img/users sync recursive \\\\.(jpe?g|png)$\");\n\nvar preview_img = __webpack_require__(\"./src/img/preview sync recursive \\\\.(jpe?g|png|svg)$\");\n\nvar imgs = __webpack_require__(\"./src/img sync \\\\.(jpe?g|png|svg)$\");\n\nconsole.log(imgs);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.pug":
/*!***********************!*\
  !*** ./src/index.pug ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;var pug_indent = [];\npug_html = pug_html + \"\\u003C!DOCTYPE html\\u003E\\u003C!DOCTYPE html\\u003E\\n\\u003Chtml lang=\\\"en\\\"\\u003E\\u003C\\u002Fhtml\\u003E\\n\\u003Chead\\u003E\\n  \\u003Cmeta charset=\\\"UTF-8\\\"\\u003E\\n  \\u003Ctitle\\u003Etoxin\\u003C\\u002Ftitle\\u003E\\n\\u003C\\u002Fhead\\u003E\\n\\u003Cbody\\u003E\\n  \\u003Cnav class=\\\"router\\\"\\u003E\\u003Ca href=\\\"form_elements.html\\\"\\u003Eform elements\\u003C\\u002Fa\\u003E\\u003Ca href=\\\"cards.html\\\"\\u003Ecards\\u003C\\u002Fa\\u003E\\u003Ca href=\\\"headers_and_footers.html\\\"\\u003Eheaders and footers\\u003C\\u002Fa\\u003E\\u003Ca href=\\\"landing_page.html\\\"\\u003Elanding_page\\u003C\\u002Fa\\u003E\\u003Ca href=\\\"search_room_page.html\\\"\\u003Esearch_room_page\\u003C\\u002Fa\\u003E\\u003Ca href=\\\"room_details_page.html\\\"\\u003Eroom_details_page\\u003C\\u002Fa\\u003E\\u003Ca href=\\\"sign_in.html\\\"\\u003Esign_in\\u003C\\u002Fa\\u003E\\u003C\\u002Fnav\\u003E\\n\\u003C\\u002Fbody\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/index.pug?");

/***/ }),

/***/ "./src/main.sass":
/*!***********************!*\
  !*** ./src/main.sass ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/main.sass?");

/***/ }),

/***/ "./src/pages/js/_sign_in.js":
/*!**********************************!*\
  !*** ./src/pages/js/_sign_in.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {\n  var sign_up = true;\n  var $sign_up = $('.block__registration');\n  var $sign_in = $('.block__sign--in');\n\n  function signupHandler() {\n    sign_up = !sign_up;\n    sign_up ? ($sign_in.hide(), $sign_up.show()) : ($sign_up.hide(), $sign_in.show());\n  }\n\n  function signinHandler() {\n    $('.nav__btn--item').hide();\n    $('.nav__item.user__name').show();\n  }\n\n  if ('/sign_in.html' == location.pathname) {\n    $('.js-sign--in,.js-create').click(signupHandler);\n    $('.js-sign--in--btn').click(signinHandler);\n  }\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/pages/js/_sign_in.js?");

/***/ }),

/***/ "./src/ui_kit/js/ckb.js":
/*!******************************!*\
  !*** ./src/ui_kit/js/ckb.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {$('.ckb').click(function () {\n  $(this).toggleClass('checked');\n});\n$('.ckblist').each(function () {\n  var _this = this;\n\n  var i = $(this).find('i');\n  var w = $(this).find('.ckblist__wrapper');\n  i.click(function () {\n    $(_this).toggleClass('expanded');\n    w.slideToggle(250);\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/ui_kit/js/ckb.js?");

/***/ }),

/***/ "./src/ui_kit/js/dropdown.js":
/*!***********************************!*\
  !*** ./src/ui_kit/js/dropdown.js ***!
  \***********************************/
/*! exports provided: Dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dropdown\", function() { return Dropdown; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar declensions = {\n  bed: [['спальня', 'спальни', 'спален'], ['кровать', 'кровати', 'кроватей'], ['ванная', 'ванных', 'ванных']],\n  guest: [['гость', 'гостя', 'гостей'], ['младенец', 'младенца', 'младенцев']]\n};\nvar Dropdown = /*#__PURE__*/function () {\n  function Dropdown(dd, index) {\n    var _this = this;\n\n    _classCallCheck(this, Dropdown);\n\n    this.index = index;\n    this.text = '';\n    this.dd = dd;\n    this.lcKey = this.getLcKey();\n    this.display = this.dd.find('.form--element:first-child');\n    this.guest = this.dd.hasClass('guest--dropdown');\n    this.clear = this.dd.find('.clear');\n    this.apply = this.dd.find('.apply');\n    this.dec = this.guest ? declensions.guest : declensions.bed;\n    this.ddmenu = this.dd.find('.dropdown--menu');\n    this.minus = _toConsumableArray(dd.find('.minus')).map(function (m) {\n      return $(m);\n    });\n    this.plus = _toConsumableArray(dd.find('.plus')).map(function (m) {\n      return $(m);\n    });\n    this.value = _toConsumableArray(dd.find('.value')).map(function (m) {\n      return $(m);\n    });\n    this.values = this.value.map(function (q) {\n      return +q.html();\n    });\n    this.dd.find('i').click(this.toggle.bind(this));\n    this.init();\n    this.minus.forEach(function (el, i) {\n      el.click(_this.minusFun.bind(_this, i));\n    });\n    this.plus.forEach(function (el, i) {\n      el.click(_this.plusFun.bind(_this, i));\n    });\n  }\n\n  _createClass(Dropdown, [{\n    key: \"getLcKey\",\n    value: function getLcKey() {\n      var str = this.dd.attr('class').split(' ');\n      var ind = str.indexOf('active');\n      ind != -1 ? str.splice(ind, 1) : 0;\n      return this.index + str.join('');\n    }\n  }, {\n    key: \"guestInit\",\n    value: function guestInit() {\n      var _this2 = this;\n\n      this.clear.click(function () {\n        _this2.values.fill(0);\n\n        _this2.render();\n\n        localStorage.removeItem(_this2.lcKey);\n      });\n      this.apply.click(function () {\n        localStorage.setItem(_this2.lcKey, JSON.stringify(_this2.values));\n\n        _this2.toggle();\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _localStorage;\n\n      this.values = JSON.parse((_localStorage = localStorage) === null || _localStorage === void 0 ? void 0 : _localStorage.getItem(this.lcKey)) || this.values;\n      this.render();\n      this.guest ? this.guestInit() : 0;\n    }\n  }, {\n    key: \"summary\",\n    value: function summary() {\n      if (this.guest) {\n        var sum = [0, 0];\n        sum[0] = this.values[0] + this.values[1];\n        sum[1] = this.values[2];\n        this.computeText(sum);\n        this.text = this.text == '' ? 'Сколько гостей' : this.text;\n      } else {\n        this.computeText(this.values);\n      }\n\n      this.display.text(this.text);\n    }\n  }, {\n    key: \"computeText\",\n    value: function computeText(sum) {\n      var _this3 = this;\n\n      var text = '';\n      sum.forEach(function (el, i) {\n        text += el == 0 ? '' : el == 1 ? \"\".concat(el, \" \").concat(_this3.dec[i][0], \",\") : el < 5 ? \"\".concat(el, \" \").concat(_this3.dec[i][1], \",\") : \"\".concat(el, \" \").concat(_this3.dec[i][2], \",\");\n      });\n      this.text = text.substring(0, text.length - 1);\n    }\n  }, {\n    key: \"toggle\",\n    value: function toggle() {\n      this.dd.toggleClass('active');\n      this.ddmenu.slideToggle(250);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this4 = this;\n\n      this.value.forEach(function (el, i) {\n        el.html(_this4.values[i]);\n\n        _this4.disableButton(i);\n      });\n      this.summary();\n    }\n  }, {\n    key: \"minusFun\",\n    value: function minusFun(i) {\n      this.values[i]--;\n      this.values[i] = this.values[i] < 0 ? 0 : this.values[i];\n      this.render();\n    }\n  }, {\n    key: \"plusFun\",\n    value: function plusFun(i) {\n      this.values[i]++;\n      this.render();\n    }\n  }, {\n    key: \"disableButton\",\n    value: function disableButton(i) {\n      this.values[i] == 0 ? this.minus[i].addClass('disabled') : this.minus[i].hasClass('disabled') ? this.minus[i].removeClass('disabled') : 0;\n    }\n  }]);\n\n  return Dropdown;\n}();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/ui_kit/js/dropdown.js?");

/***/ }),

/***/ "./src/ui_kit/ui_kit.js":
/*!******************************!*\
  !*** ./src/ui_kit/ui_kit.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-mask-plugin */ \"./node_modules/jquery-mask-plugin/dist/jquery.mask.js\");\n/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/dropdown */ \"./src/ui_kit/js/dropdown.js\");\n/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! air-datepicker */ \"./node_modules/air-datepicker/src/js/air-datepicker.js\");\n/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(air_datepicker__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_ckb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/ckb */ \"./src/ui_kit/js/ckb.js\");\n/* harmony import */ var _js_ckb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_ckb__WEBPACK_IMPORTED_MODULE_3__);\n//------------------------dropdown------------------------\n//------------------------dropdown------------------------\n//------------------------dropdown------------------------\n\n\n\n\n$('.dropdown').each(function (i, el) {\n  new _js_dropdown__WEBPACK_IMPORTED_MODULE_1__[\"Dropdown\"]($(el), i);\n}); //------------------------slider------------------------\n//------------------------slider------------------------\n//------------------------slider------------------------\n\n$('.range--slider').each(function (i, el) {\n  $(el).slider({\n    range: true,\n    min: 0,\n    max: 15000,\n    values: [5000, 10000],\n    slide: function slide(event, ui) {\n      $(el).parent().find(\".range--slider__amount\").text(ui.values[0] + \"₽\" + \" - \" + ui.values[1] + \"₽\");\n    }\n  });\n  $(el).parent().find(\".range--slider__amount\").text($(\".range--slider\").slider(\"values\", 0) + \"₽\" + \" - \" + $(\".range--slider\").slider(\"values\", 1) + \"₽\");\n}); //---------------------masked-textfield----------------------------\n\n$('.js-date.masked--textfield').mask('00.00.0000'); //---------------------masked-textfield----------------------------\n//---------------------block__room--details------------------------\n//---------------------block__room--details------------------------\n//---------------------block__room--details------------------------\n//---------------datepicker\n//---------------datepicker\n//---------------datepicker\n\nvar datepicker = {\n  days: 0,\n  fromTo: '',\n  from: '',\n  to: ''\n};\n$('.date--dropdown__wrapper .date--dropdown__datepicker').each(function (i, el) {\n  var _JSON$parse, _localStorage;\n\n  var $block = $(el).parents('.block__room--details');\n  var inp = $(el).parent().find('input');\n  datepicker = (_JSON$parse = JSON.parse((_localStorage = localStorage) === null || _localStorage === void 0 ? void 0 : _localStorage.getItem('datepicker'))) !== null && _JSON$parse !== void 0 ? _JSON$parse : datepicker;\n\n  if (inp[1]) {\n    $(inp).on('change', function () {\n      DPinstance.selectDate([new Date($(inp[0]).val().split('.').reverse().join('-')), new Date($(inp[1]).val().split('.').reverse().join('-'))]);\n    });\n  }\n\n  var DPinstance = $(el).datepicker({\n    minDate: new Date(),\n    multipleDates: 2,\n    range: true,\n    multipleDatesSeparator: ' - ',\n    dateFormat: 'dd.mm.yyyy',\n    language: {\n      daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']\n    },\n    navTitles: {\n      days: '<h2>MM yyyy</h2>'\n    },\n    clearButton: true,\n    prevHtml: '<i class=\"material-icons\">arrow_back</i>',\n    nextHtml: '<i class=\"material-icons\">arrow_forward</i>',\n    onSelect: function onSelect(fd, d, picker) {\n      var _d$0$toLocaleDateStri, _d$, _d$1$toLocaleDateStri, _d$2;\n\n      var options = {\n        year: 'numeric',\n        month: 'numeric',\n        day: 'numeric'\n      };\n      datepicker.fromTo = fd;\n      datepicker.from = (_d$0$toLocaleDateStri = (_d$ = d[0]) === null || _d$ === void 0 ? void 0 : _d$.toLocaleDateString('ru-RU', options)) !== null && _d$0$toLocaleDateStri !== void 0 ? _d$0$toLocaleDateStri : '';\n      datepicker.to = (_d$1$toLocaleDateStri = (_d$2 = d[1]) === null || _d$2 === void 0 ? void 0 : _d$2.toLocaleDateString('ru-RU', options)) !== null && _d$1$toLocaleDateStri !== void 0 ? _d$1$toLocaleDateStri : '';\n      datepicker.days = d[1] ? Math.round((d[1] - d[0]) / 1000 / 60 / 60 / 24) : 0;\n\n      if (inp.length == 2) {\n        $(inp[0]).val(datepicker.from);\n        $(inp[1]).val(datepicker.to);\n      } else {\n        $(inp[0]).val(datepicker.fromTo);\n      }\n\n      if (!!$block[0] && datepicker.to) {\n        roomDetails($block, {\n          cost: 9990,\n          discount: 2179,\n          extraServices: 300\n        });\n      }\n    }\n  }).data('datepicker');\n  datepicker.days ? DPinstance.selectDate([new Date(datepicker.from.split('.').reverse().join('-')), new Date(datepicker.to.split('.').reverse().join('-'))]) : 0;\n  var dpClear = $('.datepicker--button[data-action=\"clear\"]').hide();\n  var dpInline = $(el).find('.datepicker-inline').hide();\n  var dpBtns = $(el).find('.datepicker--buttons');\n  var dpExpand = inp.next('i');\n  dpExpand.click(function () {\n    dpInline.slideToggle(250);\n  });\n  var clear = $('<div>', {\n    \"class\": 'toxin--text--btn_grey',\n    html: '<h3>очистить</h3>',\n    on: {\n      click: function click() {\n        var _localStorage2;\n\n        dpClear.click();\n        (_localStorage2 = localStorage) === null || _localStorage2 === void 0 ? void 0 : _localStorage2.removeItem('datepicker');\n      }\n    }\n  });\n  var apply = $('<div>', {\n    \"class\": 'toxin--text--btn',\n    html: '<h3>применить</h3>',\n    on: {\n      click: function click() {\n        localStorage.setItem('datepicker', JSON.stringify(datepicker));\n        dpInline.slideUp(250);\n      }\n    }\n  });\n  dpBtns.append(clear).append(apply);\n});\n\nfunction roomDetails(el, payment) {\n  var $hab = $(el).find('.tax__habitation');\n  var $srv = $(el).find('.tax__services');\n  var $exsrv = $(el).find('.tax__extra--services');\n  var hab__total = payment.cost * datepicker.days;\n  var hab__total_str = Math.floor(hab__total / 1000) + ' ' + String(hab__total).substring(String(hab__total).length - 3, String(hab__total).length) + '₽';\n  var hab__tax__text = payment.cost + '₽' + ' x ' + datepicker.days + (datepicker.days == 1 ? ' сутки' : ' суток');\n  var $total__sum = $(el).find('.total__sum');\n  var total__sum = hab__total - payment.discount + payment.extraServices;\n  total__sum = Math.floor(total__sum / 1000) + ' ' + String(total__sum).substring(String(total__sum).length - 3, String(total__sum).length) + '₽';\n  $total__sum.html(total__sum);\n  $hab.html('<div class=\"tax__text\"></div>');\n  var $hab_tax_text = $(el).find('.tax__habitation').find('.tax__text');\n  $hab_tax_text.html(hab__tax__text);\n  $hab.append(hab__total_str);\n}\n\n$('.block__room--details').each(function (i, el) {\n  roomDetails(el, {\n    cost: 9990,\n    discount: 2179,\n    extraServices: 300\n  });\n}); //---------------------block__room--details------------------------\n//---------------------block__room--details------------------------\n//---------------------block__room--details------------------------\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/ui_kit/ui_kit.js?");

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ })

/******/ });