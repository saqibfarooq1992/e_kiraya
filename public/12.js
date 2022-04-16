(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LineChart.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LineChart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  data: function data() {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'Data One',
          backgroundColor: '#ef476f',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: '#249EBF',
          //Data to be represented on y-axis
          data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
        }]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted: function mounted() {
    //renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PieChart.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PieChart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Pie"],
  data: function data() {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'Data One',
          backgroundColor: '#ef476f',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: '#249EBF',
          //Data to be represented on y-axis
          data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
        }]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted: function mounted() {
    //renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Pages.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Pages.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_LineChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/LineChart */ "./resources/js/components/LineChart.vue");
/* harmony import */ var _components_PieChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/PieChart */ "./resources/js/components/PieChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Dashboard",
  components: {
    LineChart: _components_LineChart__WEBPACK_IMPORTED_MODULE_0__["default"],
    Pie: _components_PieChart__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Pages.vue?vue&type=template&id=55fc26b5&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Pages.vue?vue&type=template&id=55fc26b5& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "w-100" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row", staticStyle: { "margin-left": "4%" } },
        [
          _c("router-link", { attrs: { to: "/about" } }, [
            _c("div", { staticClass: "col-xl-3 col-md-6 mb-4" }, [
              _c(
                "div",
                {
                  staticClass: "card border-left-primary shadow h-100 py-2",
                  staticStyle: { "border-radius": "50%", width: "155px" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "card-body",
                      staticStyle: { "border-radius": "50%" }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "row no-gutters align-items-center" },
                        [
                          _c("div", { staticClass: "col mr-2" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "text-xs font-weight-bold text-primary text-uppercase mb-1"
                              },
                              [_vm._v("About us")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-auto" }, [
                            _c("i", {
                              staticClass:
                                "fas fa-arrow-right fa-2x text-gray-300",
                              staticStyle: {
                                "margin-right": "12px",
                                "margin-top": "124%"
                              }
                            })
                          ])
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("router-link", { attrs: { to: "/admin-blogs" } }, [
            _c("div", { staticClass: "col-xl-3 col-md-6 mb-4" }, [
              _c(
                "div",
                {
                  staticClass: "card border-left-info shadow h-100 py-2",
                  staticStyle: { "border-radius": "50%", width: "155px" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "card-body",
                      staticStyle: { "border-radius": "50%" }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "row no-gutters align-items-center" },
                        [
                          _c("div", { staticClass: "col mr-2" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "text-xs font-weight-bold text-info text-uppercase mb-1"
                              },
                              [_vm._v("Blogs")]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass:
                                "h5 mb-0 font-weight-bold text-gray-800"
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-auto" }, [
                            _c("i", {
                              staticClass:
                                "fas fa-arrow-right fa-2x text-gray-300",
                              staticStyle: {
                                "margin-right": "12px",
                                "margin-top": "124%"
                              }
                            })
                          ])
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("router-link", { attrs: { to: "/header" } }, [
            _c("div", { staticClass: "col-xl-3 col-md-6 mb-4" }, [
              _c(
                "div",
                {
                  staticClass: "card border-left-success shadow h-100 py-2",
                  staticStyle: { "border-radius": "50%", width: "155px" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "card-body",
                      staticStyle: { "border-radius": "50%" }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "row no-gutters align-items-center" },
                        [
                          _c("div", { staticClass: "col mr-2" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "text-xs font-weight-bold text-success text-uppercase mb-1"
                              },
                              [_vm._v("Header")]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass:
                                "h5 mb-0 font-weight-bold text-gray-800"
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-auto" }, [
                            _c("i", {
                              staticClass:
                                "fas fa-arrow-right fa-2x text-gray-300",
                              staticStyle: {
                                "margin-right": "12px",
                                "margin-top": "124%"
                              }
                            })
                          ])
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("router-link", { attrs: { to: "/footer" } }, [
            _c("div", { staticClass: "col-xl-3 col-md-6 mb-4" }, [
              _c(
                "div",
                {
                  staticClass: "card border-left-danger shadow h-100 py-2",
                  staticStyle: { "border-radius": "50%", width: "155px" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "card-body",
                      staticStyle: { "border-radius": "50%" }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "row no-gutters align-items-center" },
                        [
                          _c("div", { staticClass: "col mr-2" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "text-xs font-weight-bold text-danger text-uppercase mb-1"
                              },
                              [_vm._v("Footer")]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass:
                                "h5 mb-0 font-weight-bold text-gray-800"
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-auto" }, [
                            _c("i", {
                              staticClass:
                                "fas fa-arrow-right fa-2x text-gray-300",
                              staticStyle: {
                                "margin-right": "12px",
                                "margin-top": "124%"
                              }
                            })
                          ])
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "d-sm-flex align-items-center justify-content-between mb-4"
      },
      [
        _c("h1", { staticClass: "h3 mb-0 text-gray-800" }, [
          _vm._v("Add Pages")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/LineChart.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/LineChart.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineChart.vue?vue&type=script&lang=js& */ "./resources/js/components/LineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LineChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/LineChart.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/LineChart.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LineChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PieChart.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/PieChart.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PieChart.vue?vue&type=script&lang=js& */ "./resources/js/components/PieChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _PieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PieChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/PieChart.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/PieChart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PieChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PieChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Pages.vue":
/*!********************************************!*\
  !*** ./resources/js/views/admin/Pages.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pages_vue_vue_type_template_id_55fc26b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pages.vue?vue&type=template&id=55fc26b5& */ "./resources/js/views/admin/Pages.vue?vue&type=template&id=55fc26b5&");
/* harmony import */ var _Pages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Pages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pages_vue_vue_type_template_id_55fc26b5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pages_vue_vue_type_template_id_55fc26b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Pages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Pages.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/admin/Pages.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Pages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Pages.vue?vue&type=template&id=55fc26b5&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/admin/Pages.vue?vue&type=template&id=55fc26b5& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pages_vue_vue_type_template_id_55fc26b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pages.vue?vue&type=template&id=55fc26b5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Pages.vue?vue&type=template&id=55fc26b5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pages_vue_vue_type_template_id_55fc26b5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pages_vue_vue_type_template_id_55fc26b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);