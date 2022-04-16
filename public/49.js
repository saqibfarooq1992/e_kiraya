(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Faq.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Faq.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_faq_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/faq_service */ "./resources/js/services/faq_service.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Faq",
  data: function data() {
    return {
      user: [],
      query: "",
      faqs: [],
      editfaqsData: {},
      faqsData: {
        question: "",
        description: ""
      },
      moreExists: false,
      nextPage: 0,
      errors: {}
    };
  },
  mounted: function mounted() {
    this.getFaq();
  },
  methods: {
    createFaq: function () {
      var _createFaq = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_faq_service__WEBPACK_IMPORTED_MODULE_1__["createFaq"](this.faqsData);

              case 3:
                response = _context.sent;
                this.faqs.unshift(response.data);
                this.hideModel;
                this.flashMessage.success({
                  message: 'Faq Added Successfuly!',
                  time: 5000
                });
                this.faqsData.user_id = "";
                this.faqsData.question = "";
                this.faqsData.description = "";
                _context.next = 21;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                _context.t1 = _context.t0.response.status;
                _context.next = _context.t1 === 422 ? 17 : 19;
                break;

              case 17:
                this.errors = _context.t0.response.data.errors;
                return _context.abrupt("break", 21);

              case 19:
                this.flashMessage.error({
                  message: 'Some error occured !',
                  time: 500
                });
                return _context.abrupt("break", 21);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12]]);
      }));

      function createFaq() {
        return _createFaq.apply(this, arguments);
      }

      return createFaq;
    }(),
    getFaq: function () {
      var _getFaq = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_faq_service__WEBPACK_IMPORTED_MODULE_1__["getFaq"]();

              case 3:
                response = _context2.sent;
                this.faqs = response.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 5000
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function getFaq() {
        return _getFaq.apply(this, arguments);
      }

      return getFaq;
    }(),
    deleteFaq: function () {
      var _deleteFaq = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(faq) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (window.confirm("Are you sure you want to delete this Faq")) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.prev = 2;
                _context3.next = 5;
                return _services_faq_service__WEBPACK_IMPORTED_MODULE_1__["deleteFaq"](faq.id);

              case 5:
                this.faqs = this.faqs.filter(function (obj) {
                  return obj.id != faq.id;
                });
                this.flashMessage.success({
                  message: 'Faq deleted successfuly!',
                  time: 5000
                });
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](2);
                this.flashMessage.error({
                  message: 'Some thing going wrong!',
                  time: 5000
                });

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 9]]);
      }));

      function deleteFaq(_x) {
        return _deleteFaq.apply(this, arguments);
      }

      return deleteFaq;
    }(),
    editFaq: function () {
      var _editFaq = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(faq) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.editfaqsData = _objectSpread({}, faq);
                this.$refs.editFaq.show();

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function editFaq(_x2) {
        return _editFaq.apply(this, arguments);
      }

      return editFaq;
    }(),
    updateFaq: function () {
      var _updateFaq = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _services_faq_service__WEBPACK_IMPORTED_MODULE_1__["updateFaq"](this.editfaqsData.id, this.editfaqsData);

              case 3:
                response = _context5.sent;
                this.faqs.map(function (faqs) {
                  if (faqs.id == response.data.id) {
                    for (var key in response.data) {
                      faqs[key] = response.data[key];
                    }
                  }
                });
                this.hideEditModal();
                this.flashMessage.success({
                  message: 'Faq Updated successfully!',
                  time: 5000
                });
                _context5.next = 18;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                _context5.t1 = _context5.t0.response.status;
                _context5.next = _context5.t1 === 422 ? 14 : 16;
                break;

              case 14:
                this.errors = _context5.t0.response.data.errors;
                return _context5.abrupt("break", 18);

              case 16:
                this.flashMessage.error({
                  message: 'Some error occured !',
                  time: 500
                });
                return _context5.abrupt("break", 18);

              case 18:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 9]]);
      }));

      function updateFaq() {
        return _updateFaq.apply(this, arguments);
      }

      return updateFaq;
    }(),
    showModal: function showModal() {
      this.$refs.newFaqModal.show();
    },
    hideModal: function hideModal() {
      this.$refs.newFaqModal.hide();
    },
    hideEditModal: function hideEditModal() {
      this.$refs.editFaq.hide();
    },
    loadFaqData: function () {
      var _loadFaqData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _this = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _services_faq_service__WEBPACK_IMPORTED_MODULE_1__["loadFaqData"](this.nextPage);

              case 3:
                response = _context6.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                response.data.data.forEach(function (data) {
                  _this.faqs.push(data);
                });
                _context6.next = 11;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred during load more Faqs",
                  time: 5000
                });

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 8]]);
      }));

      function loadFaqData() {
        return _loadFaqData.apply(this, arguments);
      }

      return loadFaqData;
    }(),
    searchFaq: function () {
      var _searchFaq = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var query, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                query = {
                  query: this.query
                };
                _context7.next = 4;
                return _services_faq_service__WEBPACK_IMPORTED_MODULE_1__["searchFaq"](query);

              case 4:
                response = _context7.sent;
                this.faqs = response.data;
                _context7.next = 11;
                break;

              case 8:
                _context7.prev = 8;
                _context7.t0 = _context7["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred",
                  time: 5000
                });

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 8]]);
      }));

      function searchFaq() {
        return _searchFaq.apply(this, arguments);
      }

      return searchFaq;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Faq.vue?vue&type=template&id=6518e972&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Faq.vue?vue&type=template&id=6518e972& ***!
  \*******************************************************************************************************************************************************************************************************/
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
  return _c("main", [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "card shadow mb-4" }, [
        _c("div", { staticClass: "card-header d-flex bd-highlight" }, [
          _c(
            "h6",
            { staticClass: "bd-highlight font-weight-bold text-success" },
            [_vm._v("Adding Trade Faq")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "ml-auto" }, [
            _c(
              "button",
              {
                staticClass:
                  "d-none d-sm-inline-block btn btn-sm btn-info shadow-sm",
                attrs: { id: "show-btn" },
                on: { click: _vm.showModal }
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c("span", { staticClass: "text-white" }, [_vm._v("Add Faq")])
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "b-modal",
            {
              ref: "newFaqModal",
              attrs: { "hide-footer": "", size: "lg", title: "Add Trade Faqs" }
            },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.createFaq($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Question")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.faqsData.question,
                          expression: "faqsData.question"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "test",
                        "aria-describedby": "emailHelp",
                        placeholder: "Enter Question"
                      },
                      domProps: { value: _vm.faqsData.question },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.faqsData,
                            "question",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.question
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.question[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "description" } }, [
                      _vm._v("Description")
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.faqsData.description,
                          expression: "faqsData.description"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "description", rows: "3" },
                      domProps: { value: _vm.faqsData.description },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.faqsData,
                            "description",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.description
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.description[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Save faq")]
                    )
                  ])
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "b-modal",
            {
              ref: "editFaq",
              attrs: { "hide-footer": "", size: "lg", title: "Edit Trade Faqs" }
            },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.updateFaq($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Question")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editfaqsData.question,
                          expression: "editfaqsData.question"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "test",
                        "aria-describedby": "emailHelp",
                        placeholder: "Enter Question"
                      },
                      domProps: { value: _vm.editfaqsData.question },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.editfaqsData,
                            "question",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.description
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.question[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "description" } }, [
                      _vm._v("Description")
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editfaqsData.description,
                          expression: "editfaqsData.description"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "description", rows: "3" },
                      domProps: { value: _vm.editfaqsData.description },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.editfaqsData,
                            "description",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.description
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.description[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Update Trade Faq")]
                    )
                  ])
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card mt-3" }, [
        _c("div", { staticClass: "card-body" }, [
          _c(
            "form",
            {
              staticClass:
                "form-inline d-flex justify-content-center md-form form-sm active-cyan active-cyan-2 mt-2",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.searchCities($event)
                }
              }
            },
            [
              _c("i", {
                staticClass: "fas fa-search",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.query,
                    expression: "query"
                  }
                ],
                staticClass: "form-control form-control-sm ml-3 w-75",
                attrs: {
                  type: "text",
                  placeholder: "Search",
                  "aria-label": "Search"
                },
                domProps: { value: _vm.query },
                on: {
                  keyup: _vm.searchFaq,
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.query = $event.target.value
                  }
                }
              })
            ]
          ),
          _vm._v(" "),
          _c("table", { staticClass: "table table-hover" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.faqs, function(faq, index) {
                return _c("tr", { key: index }, [
                  _c("th", { attrs: { scope: "row" } }, [
                    _vm._v(_vm._s(index + 1))
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(faq.question))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(faq.description))]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger btn-sm",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.deleteFaq(faq)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fas fa-trash" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success btn-sm",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.editFaq(faq)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fas fa-pencil-alt" })]
                    )
                  ])
                ])
              }),
              0
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.moreExists,
                expression: "moreExists"
              }
            ]
          },
          [
            _c(
              "button",
              {
                staticClass: "btn btn-info btn-sm",
                attrs: { type: "button" },
                on: { click: _vm.loadFaqData }
              },
              [_c("i", { staticClass: "fas fa-arrow-down" })]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon text-white-50" }, [
      _c("i", { staticClass: "far fa-plus-square" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "5%" }, attrs: { scope: "col" } }, [
          _vm._v("#")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" }, attrs: { scope: "col" } }, [
          _vm._v("Question")
        ]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Description")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" }, attrs: { scope: "col" } }, [
          _vm._v("Action")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/faq_service.js":
/*!**********************************************!*\
  !*** ./resources/js/services/faq_service.js ***!
  \**********************************************/
/*! exports provided: createFaq, getFaq, updateFaq, deleteFaq, searchFaq, loadFaqData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFaq", function() { return createFaq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFaq", function() { return getFaq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFaq", function() { return updateFaq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFaq", function() { return deleteFaq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchFaq", function() { return searchFaq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFaqData", function() { return loadFaqData; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createFaq(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/faqs', data);
}
function getFaq() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/faqs');
}
function updateFaq(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().put("/faqs/".concat(id), data);
}
function deleteFaq(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/faqs/".concat(id));
}
function searchFaq(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/search-faq', request);
}
function loadFaqData(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("faqs?page=".concat(nextPage));
}

/***/ }),

/***/ "./resources/js/views/admin/Faq.vue":
/*!******************************************!*\
  !*** ./resources/js/views/admin/Faq.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Faq_vue_vue_type_template_id_6518e972___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Faq.vue?vue&type=template&id=6518e972& */ "./resources/js/views/admin/Faq.vue?vue&type=template&id=6518e972&");
/* harmony import */ var _Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Faq.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Faq.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Faq_vue_vue_type_template_id_6518e972___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Faq_vue_vue_type_template_id_6518e972___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Faq.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Faq.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/admin/Faq.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Faq.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Faq.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Faq.vue?vue&type=template&id=6518e972&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/admin/Faq.vue?vue&type=template&id=6518e972& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_6518e972___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Faq.vue?vue&type=template&id=6518e972& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Faq.vue?vue&type=template&id=6518e972&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_6518e972___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_6518e972___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);