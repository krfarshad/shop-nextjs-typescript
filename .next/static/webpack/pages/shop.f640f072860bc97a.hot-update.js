"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/shop",{

/***/ "./components/cardProduct/CardProduct.tsx":
/*!************************************************!*\
  !*** ./components/cardProduct/CardProduct.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar CardProduct = function(param) {\n    var productInfo = param.productInfo;\n    console.log(productInfo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card-item\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-img\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: productInfo.images[\"1\"],\n                        alt: productInfo.title,\n                        width: \"100%\",\n                        height: \"120px\"\n                    }, void 0, false, {\n                        fileName: \"/Users/farshad/Desktop/shop-nextjs-typescript/components/cardProduct/CardProduct.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 22\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/farshad/Desktop/shop-nextjs-typescript/components/cardProduct/CardProduct.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 18\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/farshad/Desktop/shop-nextjs-typescript/components/cardProduct/CardProduct.tsx\",\n                lineNumber: 7,\n                columnNumber: 14\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-title\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: productInfo.title\n                }, void 0, false, {\n                    fileName: \"/Users/farshad/Desktop/shop-nextjs-typescript/components/cardProduct/CardProduct.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 18\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/farshad/Desktop/shop-nextjs-typescript/components/cardProduct/CardProduct.tsx\",\n                lineNumber: 12,\n                columnNumber: 14\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/farshad/Desktop/shop-nextjs-typescript/components/cardProduct/CardProduct.tsx\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, _this);\n};\n_c = CardProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardProduct);\nvar _c;\n$RefreshReg$(_c, \"CardProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRQcm9kdWN0L0NhcmRQcm9kdWN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUErQjtBQUUvQixJQUFNQyxXQUFXLEdBQUcsZ0JBQXNCO1FBQXBCQyxXQUFXLFNBQVhBLFdBQVc7SUFDOUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixXQUFXLENBQUMsQ0FBQztJQUN4QixxQkFDSyw4REFBQ0csS0FBRztRQUFDQyxTQUFTLEVBQUMsV0FBVzs7MEJBQ3RCLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsVUFBVTswQkFDckIsNEVBQUNDLFFBQU07OEJBQ0gsNEVBQUNQLG1EQUFLO3dCQUFDUSxHQUFHLEVBQUVOLFdBQVcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQzt3QkFBRUMsR0FBRyxFQUFFUixXQUFXLENBQUNTLEtBQUs7d0JBQUVDLEtBQUssRUFBRSxNQUFNO3dCQUFFQyxNQUFNLEVBQUUsT0FBTzs7Ozs7NkJBQUs7Ozs7O3lCQUMzRjs7Ozs7cUJBQ1A7MEJBQ04sOERBQUNSLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxZQUFZOzBCQUN2Qiw0RUFBQ1EsSUFBRTs4QkFBRVosV0FBVyxDQUFDUyxLQUFLOzs7Ozt5QkFBTTs7Ozs7cUJBQzFCOzs7Ozs7YUFDSixDQUNUO0NBQ0w7QUFkS1YsS0FBQUEsV0FBVztBQWVqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2FyZFByb2R1Y3QvQ2FyZFByb2R1Y3QudHN4PzFkNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmNvbnN0IENhcmRQcm9kdWN0ID0gKHtwcm9kdWN0SW5mb306YW55KSA9PntcbiAgIGNvbnNvbGUubG9nKHByb2R1Y3RJbmZvKTtcbiAgICByZXR1cm4oXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaXRlbVwiPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Byb2R1Y3RJbmZvLmltYWdlc1snMSddfSBhbHQ9e3Byb2R1Y3RJbmZvLnRpdGxlfSB3aWR0aD17JzEwMCUnfSBoZWlnaHQ9eycxMjBweCd9ICAvPlxuICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgPGgyPntwcm9kdWN0SW5mby50aXRsZX08L2gyPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENhcmRQcm9kdWN0OyJdLCJuYW1lcyI6WyJJbWFnZSIsIkNhcmRQcm9kdWN0IiwicHJvZHVjdEluZm8iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZmlndXJlIiwic3JjIiwiaW1hZ2VzIiwiYWx0IiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/cardProduct/CardProduct.tsx\n"));

/***/ })

});