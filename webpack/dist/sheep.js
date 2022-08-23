/*!
 * Duplication of Image
 * @version 1.0.0 | Fri Aug 19 2022
 * @author Token Kim
 * @license ISC
 */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Sheep"] = factory();
	else
		root["Sheep"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/baseCanvas.js":
/*!***************************!*\
  !*** ./lib/baseCanvas.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BaseCanvas)\n/* harmony export */ });\nclass BaseCanvas {\r\n  static INIT_MODE = -1;\r\n  static SMALL_MODE = 0;\r\n  static REGULAR_MODE = 1;\r\n  static MEDIUM_MODE = 2;\r\n  static LARGE_MODE = 3;\r\n\r\n  #canvas;\r\n  #ctx;\r\n  #stageWidth;\r\n  #stageHeight;\r\n  #isFull;\r\n\r\n  constructor(isFull = false) {\r\n    this.#canvas = document.createElement('canvas');\r\n    this.#ctx = this.#canvas.getContext('2d');\r\n    document.body.append(this.#canvas);\r\n\r\n    this.#isFull = isFull;\r\n    this.#isFull && this.#canvas.classList.add('canvas-full');\r\n  }\r\n\r\n  resize(width = 0, height = 0) {\r\n    this.#stageWidth = width === 0 ? document.body.clientWidth : width;\r\n    this.#stageHeight = height === 0 ? document.body.clientHeight : height;\r\n\r\n    this.#canvas.width = this.#stageWidth;\r\n    this.#canvas.height = this.#stageHeight;\r\n  }\r\n\r\n  clearCanvas() {\r\n    this.#ctx.clearRect(0, 0, this.#stageWidth, this.#stageHeight);\r\n  }\r\n\r\n  clearRect(x, y, w, h) {\r\n    this.#ctx.clearRect(x, y, w, h);\r\n  }\r\n\r\n  addEventToCanvas(type, listener) {\r\n    this.#canvas.addEventListener(type, listener);\r\n  }\r\n\r\n  removeEventFromCanvas(type, listener) {\r\n    this.#canvas.removeEventListener(type, listener);\r\n  }\r\n\r\n  bringToStage() {\r\n    document.body.append(this.#canvas);\r\n  }\r\n\r\n  removeFromStage() {\r\n    this.clearCanvas();\r\n    document.body.removeChild(this.#canvas);\r\n  }\r\n\r\n  setPosition(x, y) {\r\n    if (this.#isFull) {\r\n      throw new Error('Positioning is not possible in full screen mode.');\r\n    }\r\n\r\n    this.#canvas.style.left = `${x}px`;\r\n    this.#canvas.style.top = `${y}px`;\r\n  }\r\n\r\n  get stageWidth() {\r\n    return this.#stageWidth;\r\n  }\r\n\r\n  get stageHeight() {\r\n    return this.#stageHeight;\r\n  }\r\n\r\n  get ctx() {\r\n    return this.#ctx;\r\n  }\r\n\r\n  get isMatchMedia() {\r\n    return this.getSizeMode() === BaseCanvas.SMALL_MODE;\r\n  }\r\n\r\n  get isHeighResolution() {\r\n    return this.getSizeMode() === BaseCanvas.LARGE_MODE;\r\n  }\r\n\r\n  get sizeMode() {\r\n    const canvasSizeModes = [\r\n      { mode: BaseCanvas.SMALL_MODE, size: 500 },\r\n      { mode: BaseCanvas.REGULAR_MODE, size: 1000 },\r\n      { mode: BaseCanvas.MEDIUM_MODE, size: 1980 },\r\n      { mode: BaseCanvas.LARGE_MODE, size: 3840 },\r\n    ];\r\n\r\n    const sizeModeIndex = \r\n      canvasSizeModes\r\n        .filter((sizeMode) => !window.matchMedia(`(max-width: ${sizeMode.size}px)`).matches)\r\n        .length; // prettier-ignore\r\n\r\n    return canvasSizeModes[sizeModeIndex].mode;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://Sheep/./lib/baseCanvas.js?");

/***/ }),

/***/ "./lib/fontFormat.js":
/*!***************************!*\
  !*** ./lib/fontFormat.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FontFormat)\n/* harmony export */ });\nclass FontFormat {\r\n  #width;\r\n  #size;\r\n  #name;\r\n\r\n  constructor(width, size, name) {\r\n    this.#width = width;\r\n    this.#size = size;\r\n    this.#name = name;\r\n  }\r\n\r\n  get width() {\r\n    return this.#width();\r\n  }\r\n\r\n  get size() {\r\n    return this.#width();\r\n  }\r\n\r\n  get size() {\r\n    return this.#width();\r\n  }\r\n\r\n  get font() {\r\n    return `${this.#width} ${this.#size}px ${this.#name}`; // prettier-ignore\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://Sheep/./lib/fontFormat.js?");

/***/ }),

/***/ "./lib/watermark.js":
/*!**************************!*\
  !*** ./lib/watermark.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Watermark)\n/* harmony export */ });\n/* harmony import */ var _baseCanvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCanvas.js */ \"./lib/baseCanvas.js\");\n/* harmony import */ var _fontFormat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fontFormat.js */ \"./lib/fontFormat.js\");\n\r\n\r\n\r\nclass Watermark extends _baseCanvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  static FONT_WIDTH = 600;\r\n  static POS_Y = 50;\r\n\r\n  #text = 0;\r\n  #fontName;\r\n  #color;\r\n\r\n  constructor(text, fontName, color = 'rgb(255,255,255)') {\r\n    super();\r\n\r\n    this.#text = text;\r\n    this.#fontName = fontName;\r\n    this.#color = color;\r\n\r\n    this.#init();\r\n  }\r\n\r\n  resize() {\r\n    super.resize();\r\n\r\n    this.#init();\r\n  }\r\n\r\n  #init() {\r\n    const fontFormat = new _fontFormat_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n      Watermark.FONT_WIDTH,\r\n      this.#fontSize,\r\n      this.#fontName\r\n    );\r\n\r\n    this.ctx.font = fontFormat.font;\r\n    this.ctx.fillStyle = this.#color;\r\n    this.ctx.textBaseline = 'middle';\r\n  }\r\n\r\n  get #fontSize() {\r\n    switch (this.sizeMode) {\r\n      case _baseCanvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SMALL_MODE:\r\n        return 20;\r\n      case _baseCanvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].REGULAR_MODE:\r\n        return 30;\r\n      case _baseCanvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MEDIUM_MODE:\r\n        return 40;\r\n      case _baseCanvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LARGE_MODE:\r\n        return 50;\r\n      default:\r\n        throw new Error('This canvas size is not possible!');\r\n    }\r\n  }\r\n\r\n  draw() {\r\n    const fontPos = this.ctx.measureText(this.#text);\r\n    this.ctx.fillText(\r\n      this.#text,\r\n      (this.stageWidth - fontPos.width) / 2,\r\n      Watermark.POS_Y\r\n    );\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://Sheep/./lib/watermark.js?");

/***/ }),

/***/ "./imgs/sheep.png":
/*!************************!*\
  !*** ./imgs/sheep.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sheep.png\");\n\n//# sourceURL=webpack://Sheep/./imgs/sheep.png?");

/***/ }),

/***/ "./src/hill.js":
/*!*********************!*\
  !*** ./src/hill.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Hill)\n/* harmony export */ });\nclass Hill {\r\n  #color;\r\n  #speed;\r\n  #intervalCount;\r\n  #stageWidth;\r\n  #stageHeight;\r\n  #intervalWidth;\r\n  #points = [];\r\n\r\n  constructor(color, speed, intervalCount) {\r\n    this.#color = color;\r\n    this.#speed = speed;\r\n    this.#intervalCount = intervalCount;\r\n  }\r\n\r\n  resize(stageWidth, stageHeight) {\r\n    this.#stageWidth = stageWidth;\r\n    this.#stageHeight = stageHeight;\r\n\r\n    this.#points = [];\r\n    this.#intervalWidth = Math.ceil(\r\n      this.#stageWidth / (this.#intervalCount - 2)\r\n    );\r\n\r\n    for (let i = 0; i < this.#intervalCount; i++) {\r\n      this.#points.push({\r\n        x: i * this.#intervalWidth,\r\n        y: this.#getY(),\r\n      });\r\n    }\r\n  }\r\n\r\n  draw(ctx) {\r\n    ctx.fillStyle = this.#color;\r\n    ctx.beginPath();\r\n\r\n    let curPoint = this.#points[0];\r\n    let prevPoint = curPoint;\r\n\r\n    let dots = [];\r\n    curPoint.x += this.#speed;\r\n\r\n    if (curPoint.x > -this.#intervalWidth) {\r\n      this.#expandStage();\r\n    } else if (curPoint.x > this.#stageWidth + this.#intervalWidth) {\r\n      this.#cutStage();\r\n    }\r\n\r\n    ctx.moveTo(curPoint.x, curPoint.y);\r\n\r\n    let prevCx = curPoint.x;\r\n    let prevCy = curPoint.y;\r\n\r\n    let cx;\r\n    let cy;\r\n\r\n    for (let i = 1; i < this.#points.length; i++) {\r\n      curPoint = this.#points[i];\r\n      curPoint.x += this.#speed;\r\n      cx = (prevPoint.x + curPoint.x) / 2;\r\n      cy = (prevPoint.y + curPoint.y) / 2;\r\n\r\n      ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, cx, cy);\r\n\r\n      dots.push({\r\n        x1: prevCx,\r\n        y1: prevCy,\r\n        x2: prevPoint.x,\r\n        y2: prevPoint.y,\r\n        x3: cx,\r\n        y3: cy,\r\n      });\r\n\r\n      prevPoint = curPoint;\r\n      prevCx = cx;\r\n      prevCy = cy;\r\n    }\r\n\r\n    ctx.lineTo(prevPoint.x, prevPoint.y);\r\n    ctx.lineTo(this.#stageWidth, this.#stageHeight);\r\n    ctx.lineTo(this.#points[0].x, this.#stageHeight);\r\n    ctx.fill();\r\n\r\n    return dots;\r\n  }\r\n\r\n  #getY() {\r\n    const min = this.#stageHeight / 8;\r\n    const max = this.#stageHeight - min;\r\n\r\n    return min + Math.random() * max;\r\n  }\r\n\r\n  #expandStage() {\r\n    this.#points.unshift({\r\n      x: -(this.#intervalWidth * 2),\r\n      y: this.#getY(),\r\n    });\r\n  }\r\n\r\n  #cutStage() {\r\n    this.#points.splice(-1);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://Sheep/./src/hill.js?");

/***/ }),

/***/ "./src/scenery.js":
/*!************************!*\
  !*** ./src/scenery.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Scenery)\n/* harmony export */ });\n/* harmony import */ var _hill_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hill.js */ \"./src/hill.js\");\n/* harmony import */ var _sheep_controller_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sheep-controller.js */ \"./src/sheep-controller.js\");\n/* harmony import */ var _sun_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sun.js */ \"./src/sun.js\");\n/* harmony import */ var _lib_baseCanvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/baseCanvas.js */ \"./lib/baseCanvas.js\");\n/* harmony import */ var _lib_watermark_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/watermark.js */ \"./lib/watermark.js\");\n/* harmony import */ var _imgs_sheep_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/sheep.png */ \"./imgs/sheep.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Scenery extends _lib_baseCanvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  #hills;\r\n  #sun;\r\n  #sheepController;\r\n  #watermark;\r\n  #isImageLoaded = false;\r\n\r\n  constructor() {\r\n    super(true);\r\n\r\n    this.#watermark = new _lib_watermark_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n      \"Basic code by 'Interactive Developer'\",\r\n      'Arial'\r\n    );\r\n    this.#sun = new _sun_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n    this.#hills = [\r\n      new _hill_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('#fd6bea', 0.2, 12),\r\n      new _hill_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('#ff59c2', 0.5, 8),\r\n      new _hill_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('#ff4674', 1.4, 6),\r\n    ];\r\n\r\n    const img = new Image();\r\n    img.src = _imgs_sheep_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\r\n    img.onload = () => {\r\n      this.#sheepController = new _sheep_controller_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](img);\r\n      this.#isImageLoaded = true;\r\n\r\n      this.resize();\r\n    };\r\n  }\r\n\r\n  resize() {\r\n    super.resize();\r\n\r\n    this.#watermark.resize();\r\n    this.#watermark.draw();\r\n    this.#sun.resize(this.stageWidth, this.stageHeight);\r\n    this.#hills.forEach((hill) =>\r\n      hill.resize(this.stageWidth, this.stageHeight)\r\n    );\r\n    this.#isImageLoaded &&\r\n      this.#sheepController.resize(this.stageWidth, this.stageHeight);\r\n  }\r\n\r\n  bringToStage() {\r\n    super.bringToStage();\r\n    this.#watermark.bringToStage();\r\n  }\r\n\r\n  removeFromStage() {\r\n    super.removeFromStage();\r\n    this.#watermark.removeFromStage();\r\n  }\r\n\r\n  animate(curTime) {\r\n    this.clearCanvas();\r\n    this.#sun.draw(this.ctx, curTime);\r\n    let dots;\r\n    this.#hills.forEach((hill) => {\r\n      dots = hill.draw(this.ctx, curTime);\r\n    });\r\n    this.#isImageLoaded && this.#sheepController.draw(this.ctx, curTime, dots);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://Sheep/./src/scenery.js?");

/***/ }),

/***/ "./src/sheep-controller.js":
/*!*********************************!*\
  !*** ./src/sheep-controller.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SheepController)\n/* harmony export */ });\n/* harmony import */ var _sheep_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sheep.js */ \"./src/sheep.js\");\n\r\n\r\nclass SheepController {\r\n  static COUNT_TO_ADD_SHEEP = 200;\r\n\r\n  #img;\r\n  #sheepList = [];\r\n  #curCount;\r\n  #stageWidth;\r\n  #stageHeight;\r\n\r\n  constructor(img) {\r\n    this.#img = img;\r\n    this.#curCount = 0;\r\n\r\n    this.addSheep();\r\n  }\r\n\r\n  resize(stageWidth, stageHeight) {\r\n    this.#stageWidth = stageWidth;\r\n    this.#stageHeight = stageHeight;\r\n  }\r\n\r\n  addSheep() {\r\n    this.#sheepList.push(new _sheep_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.#img, this.#stageWidth));\r\n  }\r\n\r\n  draw(ctx, curTime, dots) {\r\n    this.#curCount += 1;\r\n\r\n    if (this.#curCount > SheepController.COUNT_TO_ADD_SHEEP) {\r\n      this.#curCount = 0;\r\n      this.addSheep();\r\n    }\r\n\r\n    this.#sheepList.forEach((sheep, index) => {\r\n      sheep.x < -_sheep_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SHEEP_WIDTH\r\n        ? this.#sheepList.splice(index, 1)\r\n        : sheep.draw(ctx, curTime, dots);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://Sheep/./src/sheep-controller.js?");

/***/ }),

/***/ "./src/sheep.js":
/*!**********************!*\
  !*** ./src/sheep.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sheep)\n/* harmony export */ });\nclass Sheep {\r\n  static IMAGE_WIDTH = 360;\r\n  static IMAGE_HEIGHT = 300;\r\n  static SHEEP_WIDTH = 180;\r\n  static SHEEP_HEIGHT = 150;\r\n  static SHEEP_HALF_WIDTH = Sheep.SHEEP_WIDTH / 2;\r\n  static TOTAL_FRAME = 8;\r\n  static FPS = 24;\r\n  static FPS_TIME = 1000 / Sheep.FPS;\r\n\r\n  #img;\r\n  #prevTime;\r\n  #curFrame = 0;\r\n  #pos;\r\n  #movingSpeed;\r\n\r\n  constructor(img, stageWidth) {\r\n    this.#img = img;\r\n    this.#pos = {\r\n      x: stageWidth + Sheep.SHEEP_WIDTH,\r\n      y: 0,\r\n    };\r\n    this.#movingSpeed = Math.random() * 2 + 1;\r\n  }\r\n\r\n  draw(ctx, curTime, dots) {\r\n    if (!this.#prevTime) {\r\n      this.#prevTime = curTime;\r\n    }\r\n\r\n    const isOnFPSTime = curTime - this.#prevTime > Sheep.FPS_TIME;\r\n    if (isOnFPSTime) {\r\n      this.#prevTime = curTime;\r\n      this.#curFrame = (this.#curFrame + 1) % Sheep.TOTAL_FRAME;\r\n    }\r\n\r\n    this.animate(ctx, dots);\r\n  }\r\n\r\n  animate(ctx, dots) {\r\n    this.#pos.x -= this.#movingSpeed;\r\n    const closest = this.#getPosYAndRotation(this.#pos.x, dots);\r\n    this.#pos.y = closest.y;\r\n\r\n    ctx.save();\r\n    ctx.translate(this.#pos.x, this.#pos.y);\r\n    ctx.rotate(closest.rotation);\r\n    ctx.drawImage(\r\n      this.#img,\r\n      Sheep.IMAGE_WIDTH * this.#curFrame,\r\n      0,\r\n      Sheep.IMAGE_WIDTH,\r\n      Sheep.IMAGE_HEIGHT,\r\n      -Sheep.SHEEP_HALF_WIDTH,\r\n      -Sheep.SHEEP_HEIGHT + 20,\r\n      Sheep.SHEEP_WIDTH,\r\n      Sheep.SHEEP_HEIGHT\r\n    );\r\n    ctx.restore();\r\n  }\r\n\r\n  #getPosYAndRotation(x, dots) {\r\n    for (let i = 1; i < dots.length; i++) {\r\n      if (x >= dots[i].x1 && x <= dots[i].x3) {\r\n        return this.#calculatePosYAndRotation(x, dots[i]);\r\n      }\r\n    }\r\n\r\n    return {\r\n      y: 0,\r\n      rotation: 0,\r\n    };\r\n  }\r\n\r\n  #calculatePosYAndRotation(x, dot) {\r\n    const total = 200;\r\n    let pt = this.#getPointOnQuad(\r\n      dot.x1,\r\n      dot.y1,\r\n      dot.x2,\r\n      dot.y2,\r\n      dot.x3,\r\n      dot.y3,\r\n      0\r\n    );\r\n    let prevX = pt.x;\r\n    for (let i = 1; i < total; i++) {\r\n      const t = i / total;\r\n      pt = this.#getPointOnQuad(\r\n        dot.x1,\r\n        dot.y1,\r\n        dot.x2,\r\n        dot.y2,\r\n        dot.x3,\r\n        dot.y3,\r\n        t\r\n      );\r\n\r\n      if (x >= prevX && x <= pt.x) {\r\n        return pt;\r\n      }\r\n      prevX = pt.x;\r\n    }\r\n    return pt;\r\n  }\r\n\r\n  #getPointOnQuad(x1, y1, x2, y2, x3, y3, t) {\r\n    const tangentX = this.#quadTangent(x1, x2, x3, t);\r\n    const tangentY = this.#quadTangent(y1, y2, y3, t);\r\n    const rotation = -Math.atan2(tangentX, tangentY) + (90 * Math.PI) / 180;\r\n\r\n    return {\r\n      x: this.#getQuadValue(x1, x2, x3, t),\r\n      y: this.#getQuadValue(y1, y2, y3, t),\r\n      rotation: rotation,\r\n    };\r\n  }\r\n\r\n  #getQuadValue(p0, p1, p2, t) {\r\n    return (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2;\r\n  }\r\n\r\n  #quadTangent(a, b, c, t) {\r\n    return 2 * (1 - t) * (b - a) + 2 * (c - b) * t;\r\n  }\r\n\r\n  get x() {\r\n    return this.#pos.x;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://Sheep/./src/sheep.js?");

/***/ }),

/***/ "./src/sun.js":
/*!********************!*\
  !*** ./src/sun.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sun)\n/* harmony export */ });\nclass Sun {\r\n  static FPS = 30;\r\n  static FPS_TIME = 1000 / Sun.FPS;\r\n  static PARTICLE_COUNT = 60;\r\n  static PARTICLE_INTERVAL = 1 / Sun.PARTICLE_COUNT;\r\n  static COLOR = '#ffb200';\r\n\r\n  #prevTime = 0;\r\n  #stageWidth;\r\n  #stageHeight;\r\n  #radius;\r\n  #pos = {\r\n    x: 0,\r\n    y: 0,\r\n  };\r\n  #orgParticlesPosList = [];\r\n  #particlePosList = [];\r\n\r\n  constructor() {}\r\n\r\n  resize(stageWidth, stageHeight) {\r\n    this.#stageWidth = stageWidth;\r\n    this.#stageHeight = stageHeight;\r\n\r\n    this.#radius = this.#stageWidth / 8;\r\n    this.#pos = {\r\n      x: this.#stageWidth - this.#radius * 2,\r\n      y: (this.#pos.y = this.#radius + 100),\r\n    };\r\n\r\n    this.#initParticlePos();\r\n  }\r\n\r\n  draw(ctx, curTime) {\r\n    if (!this.#prevTime) {\r\n      this.#prevTime = curTime;\r\n    }\r\n\r\n    const isOnFPSTime = curTime - this.#prevTime > Sun.FPS_TIME;\r\n    if (isOnFPSTime) {\r\n      this.#prevTime = curTime;\r\n      this.#updateParticlePos();\r\n    }\r\n\r\n    ctx.save();\r\n    ctx.fillStyle = Sun.COLOR;\r\n    ctx.beginPath();\r\n\r\n    let particlePos = this.#particlePosList[0];\r\n    ctx.moveTo(particlePos.x + this.#pos.x, particlePos.y + this.#pos.y);\r\n    for (let i = 1; i < Sun.PARTICLE_COUNT; i++) {\r\n      particlePos = this.#particlePosList[i];\r\n      ctx.lineTo(particlePos.x + this.#pos.x, particlePos.y + this.#pos.y);\r\n    }\r\n\r\n    ctx.fill();\r\n    ctx.restore();\r\n  }\r\n\r\n  #updateParticlePos() {\r\n    let particlePos;\r\n    for (let i = 1; i < Sun.PARTICLE_COUNT; i++) {\r\n      let particlePos = this.#orgParticlesPosList[i];\r\n      this.#particlePosList[i] = {\r\n        x: particlePos.x + this.#ranInt(5),\r\n        y: particlePos.y + this.#ranInt(5),\r\n      };\r\n    }\r\n  }\r\n\r\n  #ranInt(max) {\r\n    return Math.random() * max;\r\n  }\r\n\r\n  #initParticlePos() {\r\n    for (let i = 0; i < Sun.PARTICLE_COUNT; i++) {\r\n      const pos = this.#getParticlePos(this.#radius, Sun.PARTICLE_INTERVAL * i);\r\n      this.#orgParticlesPosList[i] = pos;\r\n      this.#particlePosList[i] = pos;\r\n    }\r\n  }\r\n\r\n  #getParticlePos(radius, degree) {\r\n    const theta = Math.PI * 2 * degree;\r\n\r\n    return {\r\n      x: Math.cos(theta) * radius,\r\n      y: Math.sin(theta) * radius,\r\n    };\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://Sheep/./src/sun.js?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "./imgs/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scenery.js");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});