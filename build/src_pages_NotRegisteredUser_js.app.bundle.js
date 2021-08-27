/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpetgram"] = self["webpackChunkpetgram"] || []).push([["src_pages_NotRegisteredUser_js"],{

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

/***/ "./src/components/UserForm/index.js":
/*!******************************************!*\
  !*** ./src/components/UserForm/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserForm\": () => (/* binding */ UserForm)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _hooks_useInputValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useInputValue */ \"./src/hooks/useInputValue.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/UserForm/styles.js\");\n/* harmony import */ var _SubmitButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SubmitButton */ \"./src/components/SubmitButton/index.js\");\n\n\n\n\n\nvar UserForm = function UserForm(_ref) {\n  var onSubmit = _ref.onSubmit,\n      disabled = _ref.disabled,\n      title = _ref.title,\n      error = _ref.error;\n  var email = (0,_hooks_useInputValue__WEBPACK_IMPORTED_MODULE_2__.useInputValue)('');\n  var password = (0,_hooks_useInputValue__WEBPACK_IMPORTED_MODULE_2__.useInputValue)('');\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    onSubmit({\n      email: email.value,\n      password: password.value\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Form, {\n    disabled: disabled,\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Title, null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Input, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({\n    placeholder: \"Email\",\n    disabled: disabled\n  }, email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Input, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({\n    placeholder: \"Password\",\n    disabled: disabled,\n    type: \"password\"\n  }, password)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SubmitButton__WEBPACK_IMPORTED_MODULE_4__.SubmitButton, {\n    disabled: disabled\n  }, title), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Error, null, error)));\n};\n\n//# sourceURL=webpack://petgram/./src/components/UserForm/index.js?");

/***/ }),

/***/ "./src/components/UserForm/styles.js":
/*!*******************************************!*\
  !*** ./src/components/UserForm/styles.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Form\": () => (/* binding */ Form),\n/* harmony export */   \"Input\": () => (/* binding */ Input),\n/* harmony export */   \"Title\": () => (/* binding */ Title),\n/* harmony export */   \"Error\": () => (/* binding */ Error)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4;\n\n\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.form(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  padding: 16px 0;\\n\"])));\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.input(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  border: 1px solid #ccc;\\n  border-radius: 3px;\\n  margin-bottom: 8px;\\n  padding: 8px 4px;\\n  display: block;\\n  width: 100%;\\n  &[disabled] {\\n    opacity: .3;\\n  }\\n\"])));\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.h2(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  font-size: 16px;\\n  font-weight: 500;\\n  padding: 8px 0;\\n\\n\"])));\nvar Error = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.span(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  color: red;\\n  font-size: 14px;\\n\"])));\n\n//# sourceURL=webpack://petgram/./src/components/UserForm/styles.js?");

/***/ }),

/***/ "./src/hooks/useInputValue.js":
/*!************************************!*\
  !*** ./src/hooks/useInputValue.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useInputValue\": () => (/* binding */ useInputValue)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar useInputValue = function useInputValue(initialValue) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialValue),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      value = _useState2[0],\n      setValue = _useState2[1];\n\n  var onChange = function onChange(e) {\n    return setValue(e.target.value);\n  };\n\n  return {\n    value: value,\n    onChange: onChange\n  };\n};\n\n//# sourceURL=webpack://petgram/./src/hooks/useInputValue.js?");

/***/ }),

/***/ "./src/hooks/useLoginMutation.js":
/*!***************************************!*\
  !*** ./src/hooks/useLoginMutation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useLoginMutation\": () => (/* binding */ useLoginMutation)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\nvar _templateObject;\n\n\nvar mutationLogin = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.default)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\nmutation login($input: UserCredentials!) {\\n  login (input: $input)\\n}\\n\"])));\nvar useLoginMutation = function useLoginMutation() {\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(mutationLogin),\n      _useMutation2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation, 2),\n      loginMutation = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      loginMutationLoading = _useMutation2$.loading,\n      loginMutationError = _useMutation2$.error;\n\n  return {\n    loginMutation: loginMutation,\n    loginMutationLoading: loginMutationLoading,\n    loginMutationError: loginMutationError\n  };\n};\n\n//# sourceURL=webpack://petgram/./src/hooks/useLoginMutation.js?");

/***/ }),

/***/ "./src/hooks/useRegisterMutation.js":
/*!******************************************!*\
  !*** ./src/hooks/useRegisterMutation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useRegisterMutation\": () => (/* binding */ useRegisterMutation)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\nvar _templateObject;\n\n\nvar mutationRegister = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.default)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\nmutation signup($input: UserCredentials!) {\\n  signup (input: $input)\\n}\\n\"])));\nvar useRegisterMutation = function useRegisterMutation() {\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(mutationRegister),\n      _useMutation2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation, 2),\n      registerMutation = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      registerMutationLoading = _useMutation2$.loading,\n      registerMutationError = _useMutation2$.error;\n\n  return {\n    registerMutation: registerMutation,\n    registerMutationLoading: registerMutationLoading,\n    registerMutationError: registerMutationError\n  };\n};\n\n//# sourceURL=webpack://petgram/./src/hooks/useRegisterMutation.js?");

/***/ }),

/***/ "./src/pages/NotRegisteredUser.js":
/*!****************************************!*\
  !*** ./src/pages/NotRegisteredUser.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AuthContext */ \"./src/context/AuthContext.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout/index.js\");\n/* harmony import */ var _hooks_useRegisterMutation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useRegisterMutation */ \"./src/hooks/useRegisterMutation.js\");\n/* harmony import */ var _hooks_useLoginMutation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useLoginMutation */ \"./src/hooks/useLoginMutation.js\");\n/* harmony import */ var _components_UserForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UserForm */ \"./src/components/UserForm/index.js\");\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.default),\n      activateAuth = _useContext.activateAuth,\n      removeAuth = _useContext.removeAuth;\n\n  var _useRegisterMutation = (0,_hooks_useRegisterMutation__WEBPACK_IMPORTED_MODULE_3__.useRegisterMutation)(),\n      registerMutation = _useRegisterMutation.registerMutation,\n      registerMutationLoading = _useRegisterMutation.registerMutationLoading,\n      registerMutationError = _useRegisterMutation.registerMutationError;\n\n  var _useLoginMutation = (0,_hooks_useLoginMutation__WEBPACK_IMPORTED_MODULE_4__.useLoginMutation)(),\n      loginMutation = _useLoginMutation.loginMutation,\n      loginMutationLoading = _useLoginMutation.loginMutationLoading,\n      loginMutationError = _useLoginMutation.loginMutationError;\n\n  var registerError = registerMutationError && 'El usuario ya existe o hay algún problema';\n  var loginError = loginMutationError && 'Los credenciales no son correctos o el usuario no existe';\n\n  var onRegisterSubmit = function onRegisterSubmit(_ref) {\n    var email = _ref.email,\n        password = _ref.password;\n    var input = {\n      email: email,\n      password: password\n    };\n    var variables = {\n      input: input\n    };\n    registerMutation({\n      variables: variables\n    }).then(function (_ref2) {\n      var data = _ref2.data;\n      var signup = data.signup;\n      activateAuth(signup);\n    })[\"catch\"](function () {\n      return removeAuth();\n    });\n  };\n\n  var onLoginSubmit = function onLoginSubmit(_ref3) {\n    var email = _ref3.email,\n        password = _ref3.password;\n    var input = {\n      email: email,\n      password: password\n    };\n    var variables = {\n      input: input\n    };\n    loginMutation({\n      variables: variables\n    }).then(function (_ref4) {\n      var data = _ref4.data;\n      var login = data.login;\n      activateAuth(login);\n    })[\"catch\"](function () {\n      return removeAuth(false);\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n    title: \"Tu panel\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_UserForm__WEBPACK_IMPORTED_MODULE_5__.UserForm, {\n    onSubmit: onRegisterSubmit,\n    title: \"Registrarse\",\n    error: registerError,\n    disabled: registerMutationLoading\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_UserForm__WEBPACK_IMPORTED_MODULE_5__.UserForm, {\n    onSubmit: onLoginSubmit,\n    title: \"Iniciar sesi\\xF3n\",\n    disabled: loginMutationLoading,\n    error: loginError\n  }));\n});\n\n//# sourceURL=webpack://petgram/./src/pages/NotRegisteredUser.js?");

/***/ })

}]);