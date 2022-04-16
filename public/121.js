(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[121],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Help&Support.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/Help&Support.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_user_Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/user/Header.vue */ "./resources/js/components/user/Header.vue");
/* harmony import */ var _components_user_Footer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/user/Footer.vue */ "./resources/js/components/user/Footer.vue");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/main_service */ "./resources/js/services/main_service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "Help & Support",
  components: {
    Header: _components_user_Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Footer: _components_user_Footer_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  metaInfo: function metaInfo() {
    return {
      title: "Help & Support",
      meta: [{
        name: 'description',
        content: 'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.'
      } // { property: 'og:title', content: "Epiloge - Build your network in your field of interest"},
      // { property: 'og:site_name', content: 'Epiloge'},
      // {property: 'og:type', content: 'website'},
      // {name: 'robots', content: 'index,follow'}
      ]
    };
  },
  data: function data() {
    return {
      profile: this.$store.state.profile,
      faqs: [],
      users: []
    };
  },
  mounted: function mounted() {
    this.getFaq();
  },
  methods: {
    getFaq: function () {
      var _getFaq = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["getFaq"]();

              case 3:
                response = _context.sent;
                this.faqs = response.data;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 500
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function getFaq() {
        return _getFaq.apply(this, arguments);
      }

      return getFaq;
    }()
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Help&Support.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/Help&Support.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap);", ""]);

// module
exports.push([module.i, "\n.main-container{\n    background-color:#38b16e ;\n    background-image: linear-gradient(to right,#42B45D,#20AB94);\n    width: 100%;\n    height:200px;\n}\n.HowEkoWorks{\n  margin-top:50px;\n  font-family: 'Lato', sans-serif;\n  margin-bottom:50px;\n}\n.howekoworkscontent h4{\n  font-family: 'Lato', sans-serif;\n}\n.howekoworkscontent li {\n  list-style-type: none;\n  position: relative;\n  padding-left: 10px;\n}\n.howekoworkscontent li:before {\n  content: \"\\25BA    \";\n  font-size: 10px;\n  position: absolute;\n  top: 5px;\n  left: -10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Help&Support.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/Help&Support.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Help&Support.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Help&Support.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Help&Support.vue?vue&type=template&id=7b206602&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/Help&Support.vue?vue&type=template&id=7b206602& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c(
    "main",
    [
      _c("Header"),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("Footer")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", [
      _c("div", { staticClass: "main-container" }, [
        _c(
          "div",
          {
            staticClass: "breadcrumb-section container",
            staticStyle: { "padding-top": "10px" }
          },
          [
            _c("ol", { staticClass: "breadcrumb" }, [
              _c("li", [
                _c("a", { attrs: { href: "index.html" } }, [_vm._v("Home")])
              ]),
              _vm._v(" "),
              _c("li", [_vm._v("Faq's")])
            ])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "text-center mt-4" }, [
      _c("img", { attrs: { src: "images/icon/Faq.png" } }),
      _vm._v("  Frequently Asked Question(FAQ's)")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      { staticClass: "faqcontent", staticStyle: { "margin-bottom": "100px" } },
      [
        _c("h3", { staticClass: "text-center" }, [
          _vm._v("What Is E-kiraya Online?")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-center" }, [
          _vm._v(
            "EKO (eko in urdu)Short for E-Kiraya Online is a Rental Property Mangagement website, built as a solution to problems faced by Landlords/owners and Tenants."
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "questions" }, [
              _c("div", { staticClass: "row border my-2" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-md-12 mx-auto py-3 bg-light",
                    staticStyle: { "border-left": "5px solid green" }
                  },
                  [
                    _c(
                      "h6",
                      {
                        staticClass: "my-auto",
                        attrs: {
                          "data-toggle": "collapse",
                          "data-target": "#QUESTION1",
                          "aria-expanded": "true",
                          "aria-controls": "collapseOne"
                        }
                      },
                      [
                        _c("img", { attrs: { src: "images/icon/Que.png" } }),
                        _vm._v("How long was your company been in bussiness"),
                        _c("i", { staticClass: "fa fa-question-circle" })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "question-answer collapse  p-2",
                    staticStyle: { "border-left": "5px solid gray" },
                    attrs: { id: "QUESTION1" }
                  },
                  [
                    _c("p", [
                      _c("img", { attrs: { src: "images/icon/Ans.png" } }),
                      _vm._v(
                        "We are in Property and Real esate Business since 1998, we were officaly founded as a company in 2018 and we are owned and operated with an exceptional reputation for fair dealings and great service."
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row border my-2" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-md-12 mx-auto py-3 bg-light",
                    staticStyle: { "border-left": "5px solid green" }
                  },
                  [
                    _c(
                      "h6",
                      {
                        staticClass: "my-auto",
                        attrs: {
                          "data-toggle": "collapse",
                          "data-target": "#QUESTION2",
                          "aria-expanded": "true",
                          "aria-controls": "collapseOne"
                        }
                      },
                      [
                        _c("img", { attrs: { src: "images/icon/Que.png" } }),
                        _vm._v(" What Serivces Do you offer"),
                        _c("i", { staticClass: "fa fa-question-circle" })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "question-answer collapse  p-2",
                    staticStyle: { "border-left": "5px solid gray" },
                    attrs: { id: "QUESTION2" }
                  },
                  [
                    _c("p", [
                      _c("img", { attrs: { src: "images/icon/Ans.png" } }),
                      _vm._v(
                        " In our first Phase, we Deal with only Rental related to Properties and Realestate.\n                           Our Services include:\n                           "
                      ),
                      _c("ol", [
                        _c("li", [_vm._v("Online Rent Collection")]),
                        _vm._v(" "),
                        _c("li", [_vm._v("Property Mangement Dashboard")]),
                        _vm._v(" "),
                        _c("li", [_vm._v("Maintenance 24/7")]),
                        _vm._v(" "),
                        _c("li", [_vm._v("Tenant Screening")]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Digital Marketing(Internet Marketing for Your Properties)"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row border my-2" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-md-12 mx-auto py-3 bg-light",
                    staticStyle: { "border-left": "5px solid green" }
                  },
                  [
                    _c(
                      "h6",
                      {
                        staticClass: "my-auto",
                        attrs: {
                          "data-toggle": "collapse",
                          "data-target": "#QUESTION3",
                          "aria-expanded": "true",
                          "aria-controls": "collapseOne"
                        }
                      },
                      [
                        _c("img", { attrs: { src: "images/icon/Que.png" } }),
                        _vm._v("Why should I choose your company"),
                        _c("i", { staticClass: "fa fa-question-circle" })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "question-answer collapse  p-2",
                    staticStyle: { "border-left": "5px solid gray" },
                    attrs: { id: "QUESTION3" }
                  },
                  [
                    _c("p", [
                      _c("img", { attrs: { src: "images/icon/Ans.png" } }),
                      _vm._v(
                        " We have Verified Properties for Rent for Tenants to choose from\n                              We Communicate Timely and Accurate Information:\n                              Leasing Services For Your Rental Property:\n                              Aggressive Marketing of Your Rental Property\n                              Prospective Tenant Screening\n                              Preparation of Lease Contracts for Your Rental Property\n                              Management Services For Your Rental Property:\n                              Collection of Security Deposits and Monthly Rents\n                              Move-In/Move-Out Inspection of Your Rental Property\n                              Maintenance Services For Your Rental Property:\n                              Response to all Tenant Requests\n                              Recommendation of Improvements of Your Rental Property\n                              "
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row border my-2" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-md-12 mx-auto py-3 bg-light",
                    staticStyle: { "border-left": "5px solid green" }
                  },
                  [
                    _c(
                      "h6",
                      {
                        staticClass: "my-auto",
                        attrs: {
                          "data-toggle": "collapse",
                          "data-target": "#QUESTION4",
                          "aria-expanded": "true",
                          "aria-controls": "collapseOne"
                        }
                      },
                      [
                        _c("img", { attrs: { src: "images/icon/Que.png" } }),
                        _vm._v("How much do your management services cost"),
                        _c("i", { staticClass: "fa fa-question-circle" })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "question-answer collapse  p-2",
                    staticStyle: { "border-left": "5px solid gray" },
                    attrs: { id: "QUESTION4" }
                  },
                  [
                    _c("p", [
                      _c("img", { attrs: { src: "images/icon/Ans.png" } }),
                      _vm._v(
                        "  Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row border my-2" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-md-12 mx-auto py-3 bg-light",
                    staticStyle: { "border-left": "5px solid green" }
                  },
                  [
                    _c(
                      "h6",
                      {
                        staticClass: "my-auto",
                        attrs: {
                          "data-toggle": "collapse",
                          "data-target": "#QUESTION5",
                          "aria-expanded": "true",
                          "aria-controls": "collapseOne"
                        }
                      },
                      [
                        _c("img", { attrs: { src: "images/icon/Que.png" } }),
                        _vm._v(" What type of properties do you manage "),
                        _c("i", { staticClass: "fa fa-question-circle" })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "question-answer collapse  p-2",
                    staticStyle: { "border-left": "5px solid gray" },
                    attrs: { id: "QUESTION5" }
                  },
                  [
                    _c("p", [
                      _c("img", { attrs: { src: "images/icon/Ans.png" } }),
                      _vm._v(
                        "In our First Phase, making Account & Lising properties for rent are free. No hidden Charges included."
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row border my-2" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-md-12 mx-auto py-3 bg-light",
                    staticStyle: { "border-left": "5px solid green" }
                  },
                  [
                    _c(
                      "h6",
                      {
                        staticClass: "my-auto",
                        attrs: {
                          "data-toggle": "collapse",
                          "data-target": "#QUESTION6",
                          "aria-expanded": "true",
                          "aria-controls": "collapseOne"
                        }
                      },
                      [
                        _c("img", { attrs: { src: "images/icon/Que.png" } }),
                        _vm._v(
                          "How do you decide what questions to put in your FAQ "
                        ),
                        _c("i", { staticClass: "fa fa-question-circle" })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "question-answer collapse  p-2",
                    staticStyle: { "border-left": "5px solid gray" },
                    attrs: { id: "QUESTION6" }
                  },
                  [
                    _c("p", [
                      _c("img", { attrs: { src: "images/icon/Ans.png" } }),
                      _vm._v(
                        " Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row border my-2" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-md-12 mx-auto py-3 bg-light",
                    staticStyle: { "border-left": "5px solid green" }
                  },
                  [
                    _c(
                      "h6",
                      {
                        staticClass: "my-auto",
                        attrs: {
                          "data-toggle": "collapse",
                          "data-target": "#QUESTION7",
                          "aria-expanded": "true",
                          "aria-controls": "collapseOne"
                        }
                      },
                      [
                        _c("img", { attrs: { src: "images/icon/Que.png" } }),
                        _vm._v("Have More Questions"),
                        _c("i", { staticClass: "fa fa-question-circle" })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "question-answer collapse  p-2",
                    staticStyle: { "border-left": "5px solid gray" },
                    attrs: { id: "QUESTION7" }
                  },
                  [
                    _c("p", [
                      _c("img", { attrs: { src: "images/icon/Ans.png" } }),
                      _vm._v(
                        "We'd be happy to answer any other questions you may have regarding working with EKO Property Management. To learn more, simply call our offices during business hours: +92--------"
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row border my-2" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-md-12 mx-auto py-3 bg-light",
                    staticStyle: { "border-left": "5px solid green" }
                  },
                  [
                    _c(
                      "h6",
                      {
                        staticClass: "my-auto",
                        attrs: {
                          "data-toggle": "collapse",
                          "data-target": "#QUESTION8",
                          "aria-expanded": "true",
                          "aria-controls": "collapseOne"
                        }
                      },
                      [
                        _c("img", { attrs: { src: "images/icon/Que.png" } }),
                        _vm._v("How much can I rent my home for"),
                        _c("i", { staticClass: "fa fa-question-circle" })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "question-answer collapse  p-2",
                    staticStyle: { "border-left": "5px solid gray" },
                    attrs: { id: "QUESTION8" }
                  },
                  [
                    _c("p", [
                      _c("img", { attrs: { src: "images/icon/Ans.png" } }),
                      _vm._v(
                        " We advise the Property Owners to Establish a Fair Market Value for Rent."
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row border my-2" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-md-12 mx-auto py-3 bg-light",
                    staticStyle: { "border-left": "5px solid green" }
                  },
                  [
                    _c(
                      "h6",
                      {
                        staticClass: "my-auto",
                        attrs: {
                          "data-toggle": "collapse",
                          "data-target": "#QUESTION9",
                          "aria-expanded": "true",
                          "aria-controls": "collapseOne"
                        }
                      },
                      [
                        _c("img", { attrs: { src: "images/icon/Que.png" } }),
                        _vm._v(
                          "What needs to be done to my rental property before it is ready to rent"
                        ),
                        _c("i", { staticClass: "fa fa-question-circle" })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "question-answer collapse  p-2",
                    staticStyle: { "border-left": "5px solid gray" },
                    attrs: { id: "QUESTION9" }
                  },
                  [
                    _c("p", [
                      _c("img", { attrs: { src: "images/icon/Ans.png" } }),
                      _vm._v(
                        "Add every Minor details of your Property. Make sure to include.\n                           "
                      ),
                      _c("ol", [
                        _c("li", [_vm._v("Quality Photos")]),
                        _vm._v(" "),
                        _c("li", [_vm._v("Detailed Listings")]),
                        _vm._v(" "),
                        _c("li", [_vm._v("Updated Appliances")]),
                        _vm._v(" "),
                        _c("li", [_vm._v(" A Move-In Special Offer")]),
                        _vm._v(" "),
                        _c("li", [_vm._v("Strengths")])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row border my-2" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-md-12 mx-auto py-3 bg-light",
                    staticStyle: { "border-left": "5px solid green" }
                  },
                  [
                    _c(
                      "h6",
                      {
                        staticClass: "my-auto",
                        attrs: {
                          "data-toggle": "collapse",
                          "data-target": "#QUESTION10",
                          "aria-expanded": "true",
                          "aria-controls": "collapseOne"
                        }
                      },
                      [
                        _c("img", { attrs: { src: "images/icon/Que.png" } }),
                        _vm._v(
                          "Once I sign up with you, how soon can you start managing my property"
                        ),
                        _c("i", { staticClass: "fa fa-question-circle" })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "question-answer collapse  p-2",
                    staticStyle: { "border-left": "5px solid gray" },
                    attrs: { id: "QUESTION10" }
                  },
                  [
                    _c("p", [
                      _c("img", { attrs: { src: "images/icon/Ans.png" } }),
                      _vm._v(
                        "Just as soon as the property analysis and management documents are completed. In most instances we will need to visit the home in person prior to beginning management services."
                      )
                    ])
                  ]
                )
              ])
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/user/Help&Support.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/user/Help&Support.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Help_Support_vue_vue_type_template_id_7b206602___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Help&Support.vue?vue&type=template&id=7b206602& */ "./resources/js/views/user/Help&Support.vue?vue&type=template&id=7b206602&");
/* harmony import */ var _Help_Support_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Help&Support.vue?vue&type=script&lang=js& */ "./resources/js/views/user/Help&Support.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Help_Support_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Help&Support.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/user/Help&Support.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Help_Support_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Help_Support_vue_vue_type_template_id_7b206602___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Help_Support_vue_vue_type_template_id_7b206602___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/Help&Support.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/Help&Support.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/user/Help&Support.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Help_Support_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Help&Support.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Help&Support.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Help_Support_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/Help&Support.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/user/Help&Support.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Help_Support_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Help&Support.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Help&Support.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Help_Support_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Help_Support_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Help_Support_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Help_Support_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/user/Help&Support.vue?vue&type=template&id=7b206602&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/user/Help&Support.vue?vue&type=template&id=7b206602& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Help_Support_vue_vue_type_template_id_7b206602___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Help&Support.vue?vue&type=template&id=7b206602& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Help&Support.vue?vue&type=template&id=7b206602&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Help_Support_vue_vue_type_template_id_7b206602___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Help_Support_vue_vue_type_template_id_7b206602___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);