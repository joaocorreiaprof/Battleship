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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  background: linear-gradient(to right, #6dd5ed, #2193b0);\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.container {\n  text-align: center;\n  background: #ffffff;\n  border-radius: 15px;\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);\n  padding: 30px;\n  width: 90%;\n  max-width: 1200px;\n  overflow: hidden;\n}\n\nheader {\n  margin-bottom: 20px;\n}\n\nh1 {\n  font-size: 2.8em;\n  color: #333;\n  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);\n  margin: 0;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.boards {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 20px;\n  width: 100%;\n}\n\n.board-container {\n  background: #f4f4f4;\n  border-radius: 12px;\n  padding: 15px;\n  width: 45%;\n  position: relative;\n  border: 2px solid #ddd;\n}\n\n.board-container h2 {\n  margin: 0;\n  font-size: 1.6em;\n  color: #333;\n  margin-bottom: 10px;\n}\n\n.gameboard {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 2px;\n  width: 100%;\n  max-width: 500px;\n  height: 500px;\n  margin: 0 auto;\n  border: 2px solid #ddd;\n  border-radius: 8px;\n  background: #e0e0e0;\n}\n\n.grid-cell {\n  background: #b3cde0;\n  border: 1px solid #9eb8c7;\n  border-radius: 4px;\n  transition: background-color 0.3s, transform 0.2s;\n  cursor: pointer;\n}\n\n.grid-cell.ship {\n  background: #7f8c8d;\n}\n\n.grid-cell.hit {\n  background: #e74c3c;\n}\n\n.grid-cell.miss {\n  background: #f9f9f9;\n}\n\n.controls {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n\n.controls button {\n  background: #3498db;\n  border: none;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 1.1em;\n  transition: background-color 0.3s, transform 0.2s;\n}\n\n.controls button:hover {\n  background: #2980b9;\n}\n\n.controls button:active {\n  transform: scale(0.98);\n}\n\n.controls button:disabled {\n  background: #95a5a6;\n  cursor: not-allowed;\n}\n\n@media (max-width: 768px) {\n  .boards {\n    flex-direction: column;\n  }\n\n  .board-container {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_renderBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderBoard */ \"./src/modules/renderBoard.js\");\n/* harmony import */ var _modules_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ship */ \"./src/modules/ship.js\");\n/* harmony import */ var _modules_gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/gameboard */ \"./src/modules/gameboard.js\");\n/* harmony import */ var _modules_computerPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/computerPlayer */ \"./src/modules/computerPlayer.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const playerGameboard = new _modules_gameboard__WEBPACK_IMPORTED_MODULE_2__.Gameboard();\n  const computerGameboard = new _modules_gameboard__WEBPACK_IMPORTED_MODULE_2__.Gameboard();\n  let gameStarted = false;\n\n  const playerBoardElement = document.getElementById(\"player-board\");\n  const computerBoardElement = document.getElementById(\"computer-board\");\n\n  const computer = new _modules_computerPlayer__WEBPACK_IMPORTED_MODULE_3__.ComputerPlayer(\"Computer\", computerGameboard);\n\n  const randomizeButton = document.getElementById(\"randomize-ships\");\n  const startButton = document.getElementById(\"start-game\");\n  const restartButton = document.getElementById(\"restart-game\");\n\n  function randomizeShipPlacements(gameboard) {\n    gameboard.clearBoard();\n    const ships = [\n      new _modules_ship__WEBPACK_IMPORTED_MODULE_1__.Ship(\"Carrier\", 5),\n      new _modules_ship__WEBPACK_IMPORTED_MODULE_1__.Ship(\"Battleship One\", 4),\n      new _modules_ship__WEBPACK_IMPORTED_MODULE_1__.Ship(\"Battleship Two\", 4),\n      new _modules_ship__WEBPACK_IMPORTED_MODULE_1__.Ship(\"Destroyer One\", 3),\n      new _modules_ship__WEBPACK_IMPORTED_MODULE_1__.Ship(\"Destroyer Two\", 3),\n      new _modules_ship__WEBPACK_IMPORTED_MODULE_1__.Ship(\"Destroyer Three\", 3),\n      new _modules_ship__WEBPACK_IMPORTED_MODULE_1__.Ship(\"Submarine One\", 3),\n      new _modules_ship__WEBPACK_IMPORTED_MODULE_1__.Ship(\"Submarine Two\", 3),\n      new _modules_ship__WEBPACK_IMPORTED_MODULE_1__.Ship(\"Submarine Three\", 3),\n      new _modules_ship__WEBPACK_IMPORTED_MODULE_1__.Ship(\"Submarine Four\", 3),\n      new _modules_ship__WEBPACK_IMPORTED_MODULE_1__.Ship(\"Patrol One\", 2),\n      new _modules_ship__WEBPACK_IMPORTED_MODULE_1__.Ship(\"Patrol Two\", 2),\n      new _modules_ship__WEBPACK_IMPORTED_MODULE_1__.Ship(\"Patrol Three\", 2),\n      new _modules_ship__WEBPACK_IMPORTED_MODULE_1__.Ship(\"Patrol Four\", 2),\n      new _modules_ship__WEBPACK_IMPORTED_MODULE_1__.Ship(\"Patrol Five\", 2),\n    ];\n\n    ships.forEach((ship) => {\n      let placed = false;\n      while (!placed) {\n        const direction = Math.random() > 0.5 ? \"horizontal\" : \"vertical\";\n        const x = Math.floor(Math.random() * 10);\n        const y = Math.floor(Math.random() * 10);\n\n        placed = gameboard.placeShip(ship, [x, y], direction);\n      }\n    });\n  }\n\n  function handleComputerBoardClick(event) {\n    if (!gameStarted) {\n      alert(\"You need to start the game first!\");\n      return;\n    }\n\n    const x = parseInt(event.target.dataset.x);\n    const y = parseInt(event.target.dataset.y);\n\n    if (!isNaN(x) && !isNaN(y)) {\n      const key = `${x},${y}`;\n      if (computerGameboard.attackedPositions.has(key)) {\n        alert(\"You've already attacked this position! Try a different spot.\");\n        return;\n      }\n      // Player's turn to attack\n      computerGameboard.receiveAttack([x, y]);\n      (0,_modules_renderBoard__WEBPACK_IMPORTED_MODULE_0__.renderGameboard)(computerGameboard, computerBoardElement);\n\n      if (computerGameboard.allShipsSunk()) {\n        alert(\"You won! All computer ships are sunk!\");\n        gameStarted = false;\n        randomizeButton.disabled = false;\n        return;\n      }\n      // Computer's turn to attack\n      let validMove = false;\n      while (!validMove) {\n        const computerMove = computer.makeMove();\n        const [cx, cy] = computerMove;\n        const computerKey = `${cx},${cy}`;\n\n        if (!playerGameboard.attackedPositions.has(computerKey)) {\n          playerGameboard.receiveAttack(computerMove);\n          validMove = true;\n        }\n      }\n      (0,_modules_renderBoard__WEBPACK_IMPORTED_MODULE_0__.renderGameboard)(playerGameboard, playerBoardElement, true);\n\n      if (playerGameboard.allShipsSunk()) {\n        alert(\"Game over! The computer has sunk all your ships.\");\n        gameStarted = false;\n        randomizeButton.disabled = false;\n      }\n    }\n  }\n\n  function initializeGame() {\n    randomizeShipPlacements(computerGameboard);\n    (0,_modules_renderBoard__WEBPACK_IMPORTED_MODULE_0__.renderGameboard)(computerGameboard, computerBoardElement);\n\n    computerBoardElement.removeEventListener(\"click\", handleComputerBoardClick);\n    computerBoardElement.addEventListener(\"click\", handleComputerBoardClick);\n\n    playerBoardElement.removeEventListener(\"click\", handleComputerBoardClick);\n    playerBoardElement.addEventListener(\"click\", handleComputerBoardClick);\n  }\n\n  function setupInitialBoardView() {\n    randomizeShipPlacements(playerGameboard);\n    (0,_modules_renderBoard__WEBPACK_IMPORTED_MODULE_0__.renderGameboard)(playerGameboard, playerBoardElement, true);\n\n    (0,_modules_renderBoard__WEBPACK_IMPORTED_MODULE_0__.renderGameboard)(computerGameboard, computerBoardElement);\n    computerBoardElement.style.pointerEvents = \"none\";\n\n    randomizeButton.disabled = false;\n  }\n\n  startButton.addEventListener(\"click\", () => {\n    if (!gameStarted) {\n      initializeGame();\n      gameStarted = true;\n      computerBoardElement.style.pointerEvents = \"auto\";\n      randomizeButton.disabled = true;\n      alert(\"Game started! Attack the computer's board.\");\n    }\n  });\n\n  restartButton.addEventListener(\"click\", () => {\n    if (gameStarted) {\n      initializeGame();\n      gameStarted = true;\n      randomizeButton.disabled = true;\n      alert(\"Game restarted! Attack the computer's board.\");\n    }\n  });\n\n  randomizeButton.addEventListener(\"click\", () => {\n    if (!gameStarted) {\n      randomizeShipPlacements(playerGameboard);\n      (0,_modules_renderBoard__WEBPACK_IMPORTED_MODULE_0__.renderGameboard)(playerGameboard, playerBoardElement, true);\n    }\n  });\n\n  setupInitialBoardView();\n});\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/computerPlayer.js":
/*!***************************************!*\
  !*** ./src/modules/computerPlayer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ComputerPlayer: () => (/* binding */ ComputerPlayer)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/modules/player.js\");\n\n\nclass ComputerPlayer extends _player__WEBPACK_IMPORTED_MODULE_0__.Player {\n  constructor(name, gameboard) {\n    super(name, gameboard);\n  }\n\n  makeMove() {\n    let x, y;\n    do {\n      x = Math.floor(Math.random() * 10);\n      y = Math.floor(Math.random() * 10);\n    } while (this.gameboard.attackedPositions.has(`${x},${y}`));\n    return [x, y];\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/computerPlayer.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\nclass Gameboard {\n  constructor() {\n    this.grid = Array(10)\n      .fill(null)\n      .map(() => Array(10).fill(null));\n    this.missedShots = [];\n    this.attackedPositions = new Set();\n    this.ships = [];\n  }\n\n  clearBoard() {\n    this.grid = Array(10)\n      .fill(null)\n      .map(() => Array(10).fill(null));\n    this.missedShots = [];\n    this.attackedPositions.clear();\n    this.ships = [];\n  }\n\n  placeShip(ship, startPosition, direction) {\n    const [x, y] = startPosition;\n\n    if (direction === \"horizontal\") {\n      if (y + ship.length > 10) return false;\n      for (let i = 0; i < ship.length; i++) {\n        if (this.grid[x][y + i] !== null) return false;\n      }\n      for (let i = 0; i < ship.length; i++) {\n        this.grid[x][y + i] = ship;\n      }\n    } else if (direction === \"vertical\") {\n      if (x + ship.length > 10) return false;\n      for (let i = 0; i < ship.length; i++) {\n        if (this.grid[x + i][y] !== null) return false;\n      }\n      for (let i = 0; i < ship.length; i++) {\n        this.grid[x + i][y] = ship;\n      }\n    }\n\n    this.ships.push(ship);\n    return true;\n  }\n\n  receiveAttack(coordinates) {\n    const [x, y] = coordinates;\n    const key = `${x},${y}`;\n\n    if (this.attackedPositions.has(key)) {\n      return;\n    }\n\n    this.attackedPositions.add(key);\n    if (this.grid[x][y] !== null) {\n      this.grid[x][y].hit();\n    } else {\n      this.missedShots.push(coordinates);\n    }\n  }\n\n  allShipsSunk() {\n    return this.ships.every((ship) => ship.isSunk());\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\nclass Player {\n  constructor(name, board) {\n    this.name = name;\n    this.gameboard = board;\n  }\n\n  placeShip(ship, startPosition, direction) {\n    this.gameboard.placeShip(ship, startPosition, direction);\n  }\n\n  receiveAttack(coordinates) {\n    this.gameboard.receiveAttack(coordinates);\n  }\n\n  allShipsSunk() {\n    return this.gameboard.allShipsSunk();\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/renderBoard.js":
/*!************************************!*\
  !*** ./src/modules/renderBoard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderGameboard: () => (/* binding */ renderGameboard)\n/* harmony export */ });\nfunction renderGameboard(gameboard, boardElement, isPlayerBoard = false) {\n  boardElement.innerHTML = \"\";\n\n  for (let i = 0; i < 10; i++) {\n    for (let j = 0; j < 10; j++) {\n      const cell = document.createElement(\"div\");\n      cell.classList.add(\"grid-cell\");\n      cell.dataset.x = i;\n      cell.dataset.y = j;\n      const keys = `${i},${j}`;\n\n      if (isPlayerBoard) {\n        if (gameboard.grid[i][j] !== null) {\n          cell.classList.add(\"ship\");\n        }\n      }\n\n      if (\n        gameboard.missedShots.some((miss) => miss[0] === i && miss[1] === j)\n      ) {\n        cell.classList.add(\"miss\");\n      }\n\n      if (\n        gameboard.grid[i][j] &&\n        gameboard.grid[i][j].hits > 0 &&\n        gameboard.attackedPositions.has(keys)\n      ) {\n        cell.classList.add(\"hit\");\n      }\n\n      boardElement.appendChild(cell);\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/renderBoard.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(name, length) {\n    this.name = name;\n    this.length = length;\n    this.hits = 0;\n    this.sunk = false;\n  }\n\n  hit() {\n    if (this.hits < this.length) {\n      this.hits += 1;\n    }\n  }\n\n  isSunk() {\n    if (this.hits === this.length) {\n      this.sunk = true;\n    }\n    return this.sunk;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;