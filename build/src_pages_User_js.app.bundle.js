/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpetgram"] = self["webpackChunkpetgram"] || []).push([["src_pages_User_js"],{

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/Layout/styles.js\");\n\n\n\nvar Layout = function Layout(_ref) {\n  var children = _ref.children,\n      title = _ref.title,\n      subtitle = _ref.subtitle;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"title\", null, title, \" | Petgram \\uD83D\\uDC36\"), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"meta\", {\n    name: \"description\",\n    content: subtitle\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Div, null, children));\n};\n\n//# sourceURL=webpack://petgram/./src/components/Layout/index.js?");

/***/ }),

/***/ "./src/components/Layout/styles.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/styles.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Div\": () => (/* binding */ Div)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject;\n\n\nvar Div = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  padding: 16px;\\n\"])));\n\n//# sourceURL=webpack://petgram/./src/components/Layout/styles.js?");

/***/ }),

/***/ "./src/components/SubmitButton/index.js":
/*!**********************************************!*\
  !*** ./src/components/SubmitButton/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubmitButton\": () => (/* binding */ SubmitButton)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/SubmitButton/styles.js\");\n\n\n\nvar SubmitButton = function SubmitButton(_ref) {\n  var children = _ref.children,\n      disabled = _ref.disabled,\n      onClick = _ref.onClick;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    disabled: disabled,\n    onClick: onClick\n  }, children);\n};\nSubmitButton.propTypes = {\n  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),\n  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)\n};\n\n//# sourceURL=webpack://petgram/./src/components/SubmitButton/index.js?");

/***/ }),

/***/ "./src/components/SubmitButton/styles.js":
/*!***********************************************!*\
  !*** ./src/components/SubmitButton/styles.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject;\n\n\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.button(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  background: #FD0042;\\n  border-radius: 3px;\\n  color: #fff;\\n  height: 32px;\\n  display: block;\\n  width: 50%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  margin-top: 30px;\\n  text-align: center;\\n  &[disabled] {\\n    opacity: .3;\\n  }\\n\"])));\n\n//# sourceURL=webpack://petgram/./src/components/SubmitButton/styles.js?");

/***/ }),

/***/ "./src/pages/User.js":
/*!***************************!*\
  !*** ./src/pages/User.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AuthContext */ \"./src/context/AuthContext.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout/index.js\");\n/* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SubmitButton */ \"./src/components/SubmitButton/index.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.default),\n      removeAuth = _useContext.removeAuth;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n    title: \"Tu panel\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_SubmitButton__WEBPACK_IMPORTED_MODULE_3__.SubmitButton, {\n    onClick: removeAuth\n  }, \"Cerrar sesi\\xF3n\"));\n});\n\n//# sourceURL=webpack://petgram/./src/pages/User.js?");

/***/ })

}]);