(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/LeaseTerminationNotice.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/LeaseTerminationNotice.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_lease_termination_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/lease_termination_service */ "./resources/js/services/lease_termination_service.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      users: [],
      protypes: [],
      notifyData: {
        name: "",
        property: "",
        cnic: "",
        phone: "",
        s_date: "",
        e_date: "",
        reason: ""
      }
    };
  },
  mounted: function mounted() {
    this.getUserName();
    this.getPropertiesType();
  },
  methods: {
    getUserName: function () {
      var _getUserName = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_lease_termination_service__WEBPACK_IMPORTED_MODULE_1__["getUserName"]();

              case 3:
                response = _context.sent;
                this.users = response.data;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: "Some error occured !",
                  time: 500
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function getUserName() {
        return _getUserName.apply(this, arguments);
      }

      return getUserName;
    }(),
    getPropertiesType: function () {
      var _getPropertiesType = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_lease_termination_service__WEBPACK_IMPORTED_MODULE_1__["getPropertiesType"]();

              case 3:
                response = _context2.sent;
                this.protypes = response.data;
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  message: "Some error occured !",
                  time: 500
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function getPropertiesType() {
        return _getPropertiesType.apply(this, arguments);
      }

      return getPropertiesType;
    }(),
    createNotification: function () {
      var _createNotification = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _services_lease_termination_service__WEBPACK_IMPORTED_MODULE_1__["createNotification"](this.notifyData);

              case 3:
                response = _context3.sent;
                // this.properties.unshift(response.data);
                this.flashMessage.success({
                  message: "Property Added Successfuly!",
                  time: 5000
                });
                this.notifyData.name = "";
                this.notifyData.property = "";
                this.notifyData.cinc = "";
                this.notifyData.phone = "";
                this.notifyData.city = "";
                this.notifyData.s_date = "";
                this.notifyData.e_date = "";
                this.notifyData.reason = "";
                _context3.next = 25;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0 + '');
                _context3.t1 = _context3.t0.response.status;
                _context3.next = _context3.t1 === 422 ? 21 : 23;
                break;

              case 21:
                this.errors = _context3.t0.response.data.errors;
                return _context3.abrupt("break", 25);

              case 23:
                this.flashMessage.error({
                  message: "Some error occured !",
                  time: 500
                });
                return _context3.abrupt("break", 25);

              case 25:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 15]]);
      }));

      function createNotification() {
        return _createNotification.apply(this, arguments);
      }

      return createNotification;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/LeaseTerminationNotice.vue?vue&type=template&id=47958021&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/LeaseTerminationNotice.vue?vue&type=template&id=47958021& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("section", { staticClass: "form-estamp" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12  mx-auto" }, [
            _c("h6", { staticClass: "text-info mx-0 p-2 shadow" }, [
              _vm._v("LEASE TERMINATION NOTICE")
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass: "p-2",
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.createNotification($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.notifyData.name,
                              expression: "notifyData.name"
                            }
                          ],
                          staticClass: "form-control",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.notifyData,
                                "name",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Select your name")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.users, function(user, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: user.id } },
                              [_vm._v(_vm._s(user.name))]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.notifyData.property,
                              expression: "notifyData.property"
                            }
                          ],
                          staticClass: "form-control",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.notifyData,
                                "property",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Property type")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.protypes, function(protype, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: protype.id } },
                              [_vm._v(_vm._s(protype.name))]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.notifyData.cnic,
                            expression: "notifyData.cnic"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "CNIC",
                          required: ""
                        },
                        domProps: { value: _vm.notifyData.cnic },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.notifyData,
                              "cnic",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("div", { staticClass: "input-group mb-3" }, [
                        _vm._m(0),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.notifyData.phone,
                              expression: "notifyData.phone"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "MOBILE NUMBER",
                            maxlength: "12"
                          },
                          domProps: { value: _vm.notifyData.phone },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.notifyData,
                                "phone",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.notifyData.s_date,
                            expression: "notifyData.s_date"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "datetime-local" },
                        domProps: { value: _vm.notifyData.s_date },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.notifyData,
                              "s_date",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.notifyData.e_date,
                            expression: "notifyData.e_date"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "datetime-local" },
                        domProps: { value: _vm.notifyData.e_date },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.notifyData,
                              "e_date",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "resaonoftermination" } }, [
                    _vm._v("REASON OF TERMINATION")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.notifyData.reason,
                        expression: "notifyData.reason"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      placeholder: "WRITE THE REASON HERE....",
                      cols: "20",
                      rows: "5"
                    },
                    domProps: { value: _vm.notifyData.reason },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.notifyData, "reason", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm._m(1)
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "basic-addon1" } },
        [_c("img", { attrs: { src: "images/bg/pakflag.png" } })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex justify-content-center" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-success", attrs: { type: "submit" } },
        [_vm._v("Notify")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/lease_termination_service.js":
/*!************************************************************!*\
  !*** ./resources/js/services/lease_termination_service.js ***!
  \************************************************************/
/*! exports provided: getUserName, getPropertiesType, createNotification, getLeaseTermination, deleteLeasetTermination, rePostLeasetTermination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserName", function() { return getUserName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertiesType", function() { return getPropertiesType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNotification", function() { return createNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLeaseTermination", function() { return getLeaseTermination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteLeasetTermination", function() { return deleteLeasetTermination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rePostLeasetTermination", function() { return rePostLeasetTermination; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function getUserName() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-user-notifcation');
}
function getPropertiesType() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-property-type');
}
function createNotification(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/leaseterminations', data);
}
function getLeaseTermination() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/leaseterminations');
}
function deleteLeasetTermination(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/leaseterminations/".concat(id));
}
function rePostLeasetTermination(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/re-post/".concat(id));
}

/***/ }),

/***/ "./resources/js/views/admin/LeaseTerminationNotice.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/admin/LeaseTerminationNotice.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeaseTerminationNotice_vue_vue_type_template_id_47958021___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeaseTerminationNotice.vue?vue&type=template&id=47958021& */ "./resources/js/views/admin/LeaseTerminationNotice.vue?vue&type=template&id=47958021&");
/* harmony import */ var _LeaseTerminationNotice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeaseTerminationNotice.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/LeaseTerminationNotice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LeaseTerminationNotice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LeaseTerminationNotice_vue_vue_type_template_id_47958021___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LeaseTerminationNotice_vue_vue_type_template_id_47958021___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/LeaseTerminationNotice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/LeaseTerminationNotice.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/admin/LeaseTerminationNotice.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeaseTerminationNotice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LeaseTerminationNotice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/LeaseTerminationNotice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeaseTerminationNotice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/LeaseTerminationNotice.vue?vue&type=template&id=47958021&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/admin/LeaseTerminationNotice.vue?vue&type=template&id=47958021& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeaseTerminationNotice_vue_vue_type_template_id_47958021___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LeaseTerminationNotice.vue?vue&type=template&id=47958021& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/LeaseTerminationNotice.vue?vue&type=template&id=47958021&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeaseTerminationNotice_vue_vue_type_template_id_47958021___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeaseTerminationNotice_vue_vue_type_template_id_47958021___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);