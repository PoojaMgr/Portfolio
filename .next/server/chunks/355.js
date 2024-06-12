"use strict";
exports.id = 355;
exports.ids = [355];
exports.modules = {

/***/ 355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GraduateReport)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function GraduateReport() {
  const repeatBar = [{
    semester: 1,
    marks: "69.1%",
    height: 69
  }, {
    semester: 2,
    marks: "76%",
    height: 76
  }, {
    semester: 3,
    marks: "67.1%",
    height: 67
  }, {
    semester: 4,
    marks: "60%",
    height: 60
  }, {
    semester: 5,
    marks: "67.3%",
    height: 67
  }, {
    semester: 6,
    marks: "70%",
    height: 70
  }, {
    semester: 7,
    marks: "70%",
    height: 70
  }, {
    semester: 8,
    marks: "78%",
    height: 78
  }];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex flex-col",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex justify-between border-b-2 border-blue-900 dark:border-gray-100 items-end",
        children: repeatBar.map(report => {
          const {
            semester,
            marks
          } = report;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col items-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "flex flex-col items-center",
              children: semester
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: `flex justify-center items-center w-6 rounded-tl-md rounded-tr-md bg-blue-800 dark:darkBar`,
              style: {
                height: report.height
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "transform -rotate-90 text-center text-gray-200 px-3",
                children: marks
              })
            })]
          }, semester);
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "self-center pt-3 font-semibold text-gray-500",
        children: "- Semester Wise Graph -"
      })]
    })
  });
}

/***/ })

};
;