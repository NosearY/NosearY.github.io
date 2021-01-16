webpackHotUpdate_N_E("pages/index",{

/***/ "./_includes/header.js":
/*!*****************************!*\
  !*** ./_includes/header.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.module.css */ "./_includes/header.module.css");
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\yuani\\Dev\\blog\\_includes\\header.js";


var name = "Nosear Yuan";
var bio = "一个大龄程序员";
function Header(_ref) {
  var isHome = _ref.isHome;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,
    children: isHome ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "class": _header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.portairt,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/images/profile.jpg",
          className: "".concat(_header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headerHomeImage, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.borderCircle),
          alt: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.headingXl,
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "class": _header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.bio,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: bio
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
_c = Header;

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./_includes/header.module.css":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./_includes/header.module.css ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header_header__32yD9 {\r\n    display: -webkit-flex;\r\n    display: -moz-box;\r\n    display: flex;\r\n    -webkit-flex-direction: column;\r\n       -moz-box-orient: vertical;\r\n       -moz-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-align-items: center;\r\n       -moz-box-align: center;\r\n            align-items: center;\r\n    padding: 20px;\r\n}\r\n\r\n.header_portairt__u9-aT{\r\n    -webkit-flex-basis: 40%;\r\n            flex-basis: 40%;\r\n}\r\n\r\n.header_bio__2z4Jp{\r\n    -webkit-flex-basis: 60%;\r\n            flex-basis: 60%;\r\n}\r\n\r\n.header_headerImage__33iQZ {\r\n    width: 6rem;\r\n    height: 6rem;\r\n}\r\n\r\n.header_headerHomeImage__kLtsN {\r\n    width: 8rem;\r\n    height: 8rem;\r\n}\r\n\r\n.header_backToHome__3ULnA {\r\n    margin: 3rem 0 0;\r\n}", "",{"version":3,"sources":["webpack://_includes/header.module.css"],"names":[],"mappings":"AAAA;IACI,qBAAa;IAAb,iBAAa;IAAb,aAAa;IACb,8BAAsB;OAAtB,yBAAsB;OAAtB,0BAAsB;YAAtB,sBAAsB;IACtB,2BAAmB;OAAnB,sBAAmB;YAAnB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,uBAAe;YAAf,eAAe;AACnB;;AAEA;IACI,uBAAe;YAAf,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":[".header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 20px;\r\n}\r\n\r\n.portairt{\r\n    flex-basis: 40%;\r\n}\r\n\r\n.bio{\r\n    flex-basis: 60%;\r\n}\r\n\r\n.headerImage {\r\n    width: 6rem;\r\n    height: 6rem;\r\n}\r\n\r\n.headerHomeImage {\r\n    width: 8rem;\r\n    height: 8rem;\r\n}\r\n\r\n.backToHome {\r\n    margin: 3rem 0 0;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header": "header_header__32yD9",
	"portairt": "header_portairt__u9-aT",
	"bio": "header_bio__2z4Jp",
	"headerImage": "header_headerImage__33iQZ",
	"headerHomeImage": "header_headerHomeImage__kLtsN",
	"backToHome": "header_backToHome__3ULnA"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vX2luY2x1ZGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vX2luY2x1ZGVzL2hlYWRlci5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbIm5hbWUiLCJiaW8iLCJIZWFkZXIiLCJpc0hvbWUiLCJzdHlsZXMiLCJoZWFkZXIiLCJwb3J0YWlydCIsImhlYWRlckhvbWVJbWFnZSIsInV0aWxTdHlsZXMiLCJib3JkZXJDaXJjbGUiLCJoZWFkaW5nWGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsYUFBYjtBQUNBLElBQU1DLEdBQUcsR0FBRyxTQUFaO0FBRWUsU0FBU0MsTUFBVCxPQUE0QjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUN6QyxzQkFDRTtBQUFRLGFBQVMsRUFBRUMseURBQU0sQ0FBQ0MsTUFBMUI7QUFBQSxjQUNHRixNQUFNLGdCQUNMO0FBQUEsOEJBQ0U7QUFBSyxpQkFBT0MseURBQU0sQ0FBQ0UsUUFBbkI7QUFBQSxnQ0FDRTtBQUNFLGFBQUcsRUFBQyxxQkFETjtBQUVFLG1CQUFTLFlBQUtGLHlEQUFNLENBQUNHLGVBQVosY0FBK0JDLCtEQUFVLENBQUNDLFlBQTFDLENBRlg7QUFHRSxhQUFHLEVBQUVUO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU1FO0FBQU0sbUJBQVMsRUFBRVEsK0RBQVUsQ0FBQ0UsU0FBNUI7QUFBQSxvQkFBd0NWO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFTRTtBQUFLLGlCQUFPSSx5REFBTSxDQUFDSCxHQUFuQjtBQUFBLCtCQUNFO0FBQUEsb0JBQU9BO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURjtBQUFBLG9CQURLLGdCQWVMO0FBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDtLQXRCdUJDLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ054QjtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsOEJBQThCLFFBQVMsMEJBQTBCLDhCQUE4QiwwQkFBMEIsc0JBQXNCLHVDQUF1QyxxQ0FBcUMsc0NBQXNDLHVDQUF1QyxvQ0FBb0Msa0NBQWtDLG9DQUFvQyxzQkFBc0IsS0FBSyxnQ0FBZ0MsZ0NBQWdDLGdDQUFnQyxLQUFLLDJCQUEyQixnQ0FBZ0MsZ0NBQWdDLEtBQUssb0NBQW9DLG9CQUFvQixxQkFBcUIsS0FBSyx3Q0FBd0Msb0JBQW9CLHFCQUFxQixLQUFLLG1DQUFtQyx5QkFBeUIsS0FBSyxPQUFPLDRGQUE0RixXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFdBQVcsVUFBVSxPQUFPLEtBQUssV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxtQ0FBbUMsc0JBQXNCLCtCQUErQiw0QkFBNEIsc0JBQXNCLEtBQUssa0JBQWtCLHdCQUF3QixLQUFLLGFBQWEsd0JBQXdCLEtBQUssc0JBQXNCLG9CQUFvQixxQkFBcUIsS0FBSywwQkFBMEIsb0JBQW9CLHFCQUFxQixLQUFLLHFCQUFxQix5QkFBeUIsS0FBSyxtQkFBbUI7QUFDdnBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmViZTk0OTFiYzU3NGU0MTVjNzYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL2hlYWRlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgbmFtZSA9IFwiTm9zZWFyIFl1YW5cIjtcclxuY29uc3QgYmlvID0gXCLkuIDkuKrlpKfpvoTnqIvluo/lkZhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IGlzSG9tZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAge2lzSG9tZSA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz17c3R5bGVzLnBvcnRhaXJ0fT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcHJvZmlsZS5qcGdcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlYWRlckhvbWVJbWFnZX0gJHt1dGlsU3R5bGVzLmJvcmRlckNpcmNsZX1gfVxyXG4gICAgICAgICAgICAgIGFsdD17bmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdYbH0+e25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPXtzdHlsZXMuYmlvfT5cclxuICAgICAgICAgICAgPHNwYW4+e2Jpb308L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PjwvPlxyXG4gICAgICApfVxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaGVhZGVyX2hlYWRlcl9fMzJ5RDkge1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxyXFxuICAgICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX3BvcnRhaXJ0X191OS1hVHtcXHJcXG4gICAgLXdlYmtpdC1mbGV4LWJhc2lzOiA0MCU7XFxyXFxuICAgICAgICAgICAgZmxleC1iYXNpczogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX2Jpb19fMno0SnB7XFxyXFxuICAgIC13ZWJraXQtZmxleC1iYXNpczogNjAlO1xcclxcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDYwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9oZWFkZXJJbWFnZV9fMzNpUVoge1xcclxcbiAgICB3aWR0aDogNnJlbTtcXHJcXG4gICAgaGVpZ2h0OiA2cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX2hlYWRlckhvbWVJbWFnZV9fa0x0c04ge1xcclxcbiAgICB3aWR0aDogOHJlbTtcXHJcXG4gICAgaGVpZ2h0OiA4cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX2JhY2tUb0hvbWVfXzNVTG5BIHtcXHJcXG4gICAgbWFyZ2luOiAzcmVtIDAgMDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL19pbmNsdWRlcy9oZWFkZXIubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFhO0lBQWIsaUJBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQXNCO09BQXRCLHlCQUFzQjtPQUF0QiwwQkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLDJCQUFtQjtPQUFuQixzQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBZTtZQUFmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBZTtZQUFmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9ydGFpcnR7XFxyXFxuICAgIGZsZXgtYmFzaXM6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJpb3tcXHJcXG4gICAgZmxleC1iYXNpczogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVySW1hZ2Uge1xcclxcbiAgICB3aWR0aDogNnJlbTtcXHJcXG4gICAgaGVpZ2h0OiA2cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVySG9tZUltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDhyZW07XFxyXFxuICAgIGhlaWdodDogOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tUb0hvbWUge1xcclxcbiAgICBtYXJnaW46IDNyZW0gMCAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJoZWFkZXJcIjogXCJoZWFkZXJfaGVhZGVyX18zMnlEOVwiLFxuXHRcInBvcnRhaXJ0XCI6IFwiaGVhZGVyX3BvcnRhaXJ0X191OS1hVFwiLFxuXHRcImJpb1wiOiBcImhlYWRlcl9iaW9fXzJ6NEpwXCIsXG5cdFwiaGVhZGVySW1hZ2VcIjogXCJoZWFkZXJfaGVhZGVySW1hZ2VfXzMzaVFaXCIsXG5cdFwiaGVhZGVySG9tZUltYWdlXCI6IFwiaGVhZGVyX2hlYWRlckhvbWVJbWFnZV9fa0x0c05cIixcblx0XCJiYWNrVG9Ib21lXCI6IFwiaGVhZGVyX2JhY2tUb0hvbWVfXzNVTG5BXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==