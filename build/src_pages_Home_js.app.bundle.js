/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpetgram"] = self["webpackChunkpetgram"] || []).push([["src_pages_Home_js"],{

/***/ "./src/components/FavButton/index.js":
/*!*******************************************!*\
  !*** ./src/components/FavButton/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FavButton\": () => (/* binding */ FavButton)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/FavButton/styles.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n\n\n\n\nvar FavButton = function FavButton(_ref) {\n  var liked = _ref.liked,\n      likes = _ref.likes,\n      onClick = _ref.onClick;\n  var Icon = liked ? react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdFavorite : react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdFavoriteBorder;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    onClick: onClick\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon, {\n    size: \"32px\"\n  }), \" \", likes, \" likes!\");\n};\nFavButton.propTypes = {\n  liked: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),\n  likes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),\n  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)\n};\n\n//# sourceURL=webpack://petgram/./src/components/FavButton/index.js?");

/***/ }),

/***/ "./src/components/FavButton/styles.js":
/*!********************************************!*\
  !*** ./src/components/FavButton/styles.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject;\n\n\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.button(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\npadding: 8px;\\ndisplay: flex;\\nalign-items: center;\\npadding-top: 8px;\\n& svg {\\n  margin-right: 4px;\\n}\\n\"])));\n\n//# sourceURL=webpack://petgram/./src/components/FavButton/styles.js?");

/***/ }),

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

/***/ "./src/components/ListOfPhotoCards/index.js":
/*!**************************************************!*\
  !*** ./src/components/ListOfPhotoCards/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListOfPhotoCards\": () => (/* binding */ ListOfPhotoCards)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _PhotoCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PhotoCard */ \"./src/components/PhotoCard/index.js\");\n/* harmony import */ var _hooks_useGetPhotos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useGetPhotos */ \"./src/hooks/useGetPhotos.js\");\n\n\n\n\n\nvar ListOfPhotoCards = function ListOfPhotoCards() {\n  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)(),\n      id = _useParams.id;\n\n  var _useGetPhotos = (0,_hooks_useGetPhotos__WEBPACK_IMPORTED_MODULE_3__.useGetPhotos)(id),\n      loading = _useGetPhotos.loading,\n      error = _useGetPhotos.error,\n      data = _useGetPhotos.data;\n\n  if (error) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", null, \"Internal Server Error\");\n  }\n\n  if (loading) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", null, \"Loading...\");\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"ul\", null, data.photos.map(function (photo) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_PhotoCard__WEBPACK_IMPORTED_MODULE_2__.PhotoCard, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({\n      key: photo.id\n    }, photo));\n  }));\n};\n\n//# sourceURL=webpack://petgram/./src/components/ListOfPhotoCards/index.js?");

/***/ }),

/***/ "./src/components/PhotoCard/index.js":
/*!*******************************************!*\
  !*** ./src/components/PhotoCard/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PhotoCard\": () => (/* binding */ PhotoCard)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/PhotoCard/styles.js\");\n/* harmony import */ var _hooks_useNearScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useNearScreen */ \"./src/hooks/useNearScreen.js\");\n/* harmony import */ var _hooks_useToggleLikeMutation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useToggleLikeMutation */ \"./src/hooks/useToggleLikeMutation.js\");\n/* harmony import */ var _FavButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FavButton */ \"./src/components/FavButton/index.js\");\n\n\n\n\n\n\n\n\nvar DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';\nvar PhotoCard = function PhotoCard(_ref) {\n  var id = _ref.id,\n      liked = _ref.liked,\n      _ref$likes = _ref.likes,\n      likes = _ref$likes === void 0 ? 0 : _ref$likes,\n      _ref$src = _ref.src,\n      src = _ref$src === void 0 ? DEFAULT_IMAGE : _ref$src;\n\n  var _useNearScreen = (0,_hooks_useNearScreen__WEBPACK_IMPORTED_MODULE_4__.useNearScreen)(),\n      _useNearScreen2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useNearScreen, 2),\n      show = _useNearScreen2[0],\n      ref = _useNearScreen2[1];\n\n  var _useToggleLikeMutatio = (0,_hooks_useToggleLikeMutation__WEBPACK_IMPORTED_MODULE_5__.useToggleLikeMutation)(),\n      mutation = _useToggleLikeMutatio.mutation;\n\n  var handleFavClick = function handleFavClick() {\n    mutation({\n      variables: {\n        input: {\n          id: id\n        }\n      }\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Article, {\n    ref: ref\n  }, show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {\n    to: \"/pet/\".concat(id)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.ImgWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Img, {\n    src: src\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_FavButton__WEBPACK_IMPORTED_MODULE_6__.FavButton, {\n    liked: liked,\n    likes: likes,\n    onClick: handleFavClick\n  })));\n};\nPhotoCard.propTypes = {\n  id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),\n  liked: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired),\n  src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),\n  likes: function likes(props, propName, componentName) {\n    var propValue = props[propName];\n\n    if (propValue === undefined) {\n      return new Error(\"\".concat(propName, \" value must be defined\"));\n    }\n\n    if (propValue < 0) {\n      return new Error(\"\".concat(propName, \" value must be greater than 0\"));\n    }\n  }\n};\n\n//# sourceURL=webpack://petgram/./src/components/PhotoCard/index.js?");

/***/ }),

/***/ "./src/components/PhotoCard/styles.js":
/*!********************************************!*\
  !*** ./src/components/PhotoCard/styles.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Article\": () => (/* binding */ Article),\n/* harmony export */   \"ImgWrapper\": () => (/* binding */ ImgWrapper),\n/* harmony export */   \"Img\": () => (/* binding */ Img)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/animation */ \"./src/styles/animation.js\");\n\n\nvar _templateObject, _templateObject2, _templateObject3;\n\n\n\nvar Article = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.article(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  min-height: 200px;\\n\"])));\nvar ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  border-radius: 10px;\\n  display: block;\\n  height: 0;\\n  overflow: hidden;\\n  padding: 56.25% 0 0 0;\\n  position: relative;\\n  width: 100%;\\n\"])));\nvar Img = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.img(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  \", \"\\n  box-shadow: 0 10px 14px rgba(0,0,0, .2);\\n  height: 100%;\\n  object-fit: cover;\\n  position: absolute;\\n  top:0;\\n  width: 100%;\\n\"])), (0,_styles_animation__WEBPACK_IMPORTED_MODULE_1__.fadeIn)({\n  time: '1s'\n}));\n\n//# sourceURL=webpack://petgram/./src/components/PhotoCard/styles.js?");

/***/ }),

/***/ "./src/hooks/useGetPhotos.js":
/*!***********************************!*\
  !*** ./src/hooks/useGetPhotos.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useGetPhotos\": () => (/* binding */ useGetPhotos)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\nvar _templateObject;\n\n\nfunction useGetPhotos(categoryId) {\n  var getPhotos = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.default)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n    query getPhotos($categoryId: ID) {\\n      photos (categoryId: $categoryId){\\n        id\\n        categoryId\\n        src\\n        likes\\n        liked\\n        userId \\n      }\\n    }\"])));\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(getPhotos, {\n    variables: {\n      categoryId: categoryId\n    }\n  }),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  return {\n    loading: loading,\n    error: error,\n    data: data\n  };\n}\n\n//# sourceURL=webpack://petgram/./src/hooks/useGetPhotos.js?");

/***/ }),

/***/ "./src/hooks/useNearScreen.js":
/*!************************************!*\
  !*** ./src/hooks/useNearScreen.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useNearScreen\": () => (/* binding */ useNearScreen)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar useNearScreen = function useNearScreen() {\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      show = _useState2[0],\n      setShow = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    Promise.resolve(typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver : __webpack_require__.e(/*! import() */ \"vendors-node_modules_intersection-observer_intersection-observer_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! intersection-observer */ \"./node_modules/intersection-observer/intersection-observer.js\", 23))).then(function () {\n      var observer = new window.IntersectionObserver(function (entries) {\n        var isIntersecting = entries[0].isIntersecting;\n\n        if (isIntersecting) {\n          setShow(true);\n          observer.disconnect();\n        }\n      });\n      observer.observe(ref.current);\n    });\n  }, [ref]);\n  return [show, ref];\n};\n\n//# sourceURL=webpack://petgram/./src/hooks/useNearScreen.js?");

/***/ }),

/***/ "./src/hooks/useToggleLikeMutation.js":
/*!********************************************!*\
  !*** ./src/hooks/useToggleLikeMutation.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useToggleLikeMutation\": () => (/* binding */ useToggleLikeMutation)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\nvar _templateObject;\n\n\nvar mutationLikePhoto = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.default)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\nmutation likePhoto($input: LikePhoto!) {\\n    likePhoto(input: $input) {\\n      id,\\n      liked,\\n      likes\\n    }\\n  }\\n\"])));\nvar useToggleLikeMutation = function useToggleLikeMutation() {\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(mutationLikePhoto),\n      _useMutation2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation, 2),\n      mutation = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      mutationLoading = _useMutation2$.loading,\n      mutationError = _useMutation2$.error;\n\n  return {\n    mutation: mutation,\n    mutationLoading: mutationLoading,\n    mutationError: mutationError\n  };\n};\n\n//# sourceURL=webpack://petgram/./src/hooks/useToggleLikeMutation.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout/index.js\");\n/* harmony import */ var _components_ListOfPhotoCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ListOfPhotoCards */ \"./src/components/ListOfPhotoCards/index.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.Layout, {\n    title: \"Tu app de fotos de mascotas\",\n    subtitle: \"Con Petgram puedes encontrar fotos de tus animales dom\\xE9ticos favoritos\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ListOfPhotoCards__WEBPACK_IMPORTED_MODULE_2__.ListOfPhotoCards, null));\n});\n\n//# sourceURL=webpack://petgram/./src/pages/Home.js?");

/***/ })

}]);