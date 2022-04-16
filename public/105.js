(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[105],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/invoice.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/invoice.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Welcome",
  components: {
    Header: _components_user_Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Footer: _components_user_Footer_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      properties: [],
      reservation: {
        property_id: '',
        full_name: '',
        cnic: '',
        current_address: '',
        permenant_address: '',
        status: '',
        domicile: '',
        current_owner_phone: '',
        phone: ''
      }
    };
  },
  beforeRouteEnter: function () {
    var _beforeRouteEnter = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(to, from, next) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["getPropertyDetail"](to.params.slug);

            case 3:
              response = _context.sent;

              if (!response) {
                next('/404');
              }

              next(function (vm) {
                vm.properties = response.data;
              });
              next();
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              next('/404');

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    function beforeRouteEnter(_x, _x2, _x3) {
      return _beforeRouteEnter.apply(this, arguments);
    }

    return beforeRouteEnter;
  }(),
  mounted: function mounted() {},
  methods: {
    updateReservedProperty: function () {
      var _updateReservedProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.$store.state.isLoggedIn) {
                  _context2.next = 3;
                  break;
                }

                this.$router.push('/login');
                return _context2.abrupt("return");

              case 3:
                _context2.prev = 3;
                this.reservation.property_id = this.properties.id;
                _context2.next = 7;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["updateReservedProperty"](this.reservation);

              case 7:
                response = _context2.sent;
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](3);
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 11]]);
      }));

      function updateReservedProperty() {
        return _updateReservedProperty.apply(this, arguments);
      }

      return updateReservedProperty;
    }() // reservedProperty: async function () {
    //         if (!this.$store.state.isLoggedIn) {
    //             this.$router.push('/login');
    //             return;
    //         }
    //         try {
    //             const response = await MainService.reservedProperty(this.reservation)
    //             // this.properties.map(properties => {
    //             //     if (properties.id === item.id) {
    //             //         properties.favorited = true;
    //             //     }
    //             // });
    //             this.flashMessage.success({
    //                 message: response.data.message,
    //                 time: 5000
    //             });
    //         } catch (error) {
    //             this.flashMessage.error({
    //                 message: 'Some error occurred, Please try again!',
    //                 time: 5000
    //             });
    //         }
    // },

  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/invoice.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/invoice.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\np{\n  margin-bottom:0rem;\n  margin-top:0rem;\n}\n.invoiceheader{\n    top: 50px;\n    position:relative;\n   margin-bottom: 20px;\n}\n#invoiceform{\n    padding: 20px;\n}\n#invoice{\n    padding: 20px;\n}\n@media only screen and (max-width: 660px){\n#invoiceform{\n    padding: 0px;\n}\n#invoice{\n    padding: 0px;\n}\n.invoiceheader{\n    margin-top: 50px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/invoice.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/invoice.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./invoice.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/invoice.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/invoice.vue?vue&type=template&id=3c0278e8&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/invoice.vue?vue&type=template&id=3c0278e8& ***!
  \**********************************************************************************************************************************************************************************************************/
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
      _c("section", { attrs: { id: "maincss" } }),
      _vm._v(" "),
      _c("section", { staticClass: "invoiceheader" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "section",
          {
            staticClass: "invoice",
            staticStyle: { "margin-top": "50px", "margin-bottom": "50px" }
          },
          [
            _c("div", { staticClass: "container" }, [
              _c("h3", { staticClass: "text-center text-white" }, [
                _vm._v("Property Reservation Form & Invoice")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-center text-white" }, [
                _vm._v(
                  "If this Property Suits You Kindly Fill Out the reservation form in order to reserve this property."
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-4" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-md-4 mt-4 mx-auto",
                    attrs: { id: "invoiceform" }
                  },
                  [
                    _c("div", { staticClass: " border shadow" }, [
                      _c(
                        "h5",
                        {
                          staticClass: "text-center bg-success py-3 text-white"
                        },
                        [_vm._v("Property Reservation Form")]
                      ),
                      _vm._v(" "),
                      _c(
                        "form",
                        {
                          staticClass: "p-3",
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.updateReservedProperty()
                            }
                          }
                        },
                        [
                          _c("fieldset", [
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "div",
                                { staticClass: " inputGroupContainer" },
                                [
                                  _c("div", { staticClass: "input-group" }, [
                                    _vm._m(1),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.reservation.full_name,
                                          expression: "reservation.full_name"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        name: "fullName",
                                        placeholder: "Full Name",
                                        required: "true",
                                        type: "text"
                                      },
                                      domProps: {
                                        value: _vm.reservation.full_name
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.reservation,
                                            "full_name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "div",
                                { staticClass: " inputGroupContainer" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "input-group" },
                                    [
                                      _vm._m(2),
                                      _vm._v(" "),
                                      _c("input-mask", {
                                        staticClass: "form-control",
                                        attrs: {
                                          mask: "99999-9999999-9",
                                          maskChar: "",
                                          name: "Cnic",
                                          placeholder: "Cnic",
                                          required: "true",
                                          type: "text"
                                        },
                                        model: {
                                          value: _vm.reservation.cnic,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.reservation,
                                              "cnic",
                                              $$v
                                            )
                                          },
                                          expression: "reservation.cnic"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "div",
                                { staticClass: " inputGroupContainer" },
                                [
                                  _c("div", { staticClass: "input-group" }, [
                                    _vm._m(3),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            _vm.reservation.current_address,
                                          expression:
                                            "reservation.current_address"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        name: "addressLine1",
                                        placeholder: "Current Address",
                                        required: "true",
                                        type: "text"
                                      },
                                      domProps: {
                                        value: _vm.reservation.current_address
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.reservation,
                                            "current_address",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "div",
                                { staticClass: "inputGroupContainer" },
                                [
                                  _c("div", { staticClass: "input-group" }, [
                                    _vm._m(4),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            _vm.reservation.permenant_address,
                                          expression:
                                            "reservation.permenant_address"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        name: "addressLine2",
                                        placeholder: "Permenant Address",
                                        required: "true",
                                        type: "text"
                                      },
                                      domProps: {
                                        value: _vm.reservation.permenant_address
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.reservation,
                                            "permenant_address",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group wrapper" }, [
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.reservation.status,
                                      expression: "reservation.status"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { required: "" },
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.reservation,
                                        "status",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "option",
                                    {
                                      staticClass: "w-100",
                                      attrs: {
                                        value: "",
                                        disabled: "",
                                        selected: "",
                                        hidden: ""
                                      }
                                    },
                                    [_vm._v(" Status")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    { attrs: { value: "bachelor" } },
                                    [_vm._v("Bachelor")]
                                  ),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "family" } }, [
                                    _vm._v("Family")
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "div",
                                { staticClass: " inputGroupContainer" },
                                [
                                  _c("div", { staticClass: "input-group" }, [
                                    _vm._m(5),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.reservation.domicile,
                                          expression: "reservation.domicile"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        name: "Domicile",
                                        placeholder: "Domicile ",
                                        required: "true",
                                        type: "text"
                                      },
                                      domProps: {
                                        value: _vm.reservation.domicile
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.reservation,
                                            "domicile",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "input-group mb-3" },
                              [
                                _vm._m(6),
                                _vm._v(" "),
                                _c("input-mask", {
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Current Owner Phone No",
                                    mask: "9999-9999999",
                                    maskChar: "",
                                    "aria-label": "Phone",
                                    "aria-describedby": "basic-addon1"
                                  },
                                  model: {
                                    value: _vm.reservation.current_owner_phone,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.reservation,
                                        "current_owner_phone",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "reservation.current_owner_phone"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "input-group mb-3" },
                              [
                                _vm._m(7),
                                _vm._v(" "),
                                _c("input-mask", {
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    mask: "9999-9999999",
                                    maskChar: "",
                                    placeholder: "Phone No",
                                    "aria-label": "Phone",
                                    "aria-describedby": "basic-addon1"
                                  },
                                  model: {
                                    value: _vm.reservation.phone,
                                    callback: function($$v) {
                                      _vm.$set(_vm.reservation, "phone", $$v)
                                    },
                                    expression: "reservation.phone"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-info",
                              attrs: { type: "submit" }
                            },
                            [_vm._v("Reserved Property")]
                          )
                        ]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-md-8 mt-4", attrs: { id: "invoice" } },
                  [
                    _c("div", { staticClass: "border bg-white p-4" }, [
                      _vm._m(8),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row mt-4 justify-content-between" },
                        [
                          _c("div", { staticClass: "col-md-4" }, [
                            _c("h6", { staticClass: "font-weight-bold" }, [
                              _vm._v("Bill To")
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(_vm._s(_vm.$store.state.profile.name))
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(_vm._s(_vm.$store.state.profile.email))
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(_vm._s(_vm.$store.state.profile.phone))
                            ])
                          ]),
                          _vm._v(" "),
                          _vm._m(9)
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "table table-responsive mt-3" },
                        [
                          _c("table", { staticClass: "table table-striped " }, [
                            _vm._m(10),
                            _vm._v(" "),
                            _c("tbody", [
                              _c("tr", [
                                _c("td", [_vm._v("Property Tittle")]),
                                _vm._v(" "),
                                _c("td", { attrs: { colspan: "2" } }, [
                                  _vm._v(_vm._s(_vm.properties.title))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Property Size")]),
                                _vm._v(" "),
                                _c("td", { attrs: { colspan: "2" } }, [
                                  _vm._v(
                                    _vm._s(_vm.properties.size) +
                                      " " +
                                      _vm._s(_vm.properties.unit)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Total Rent")]),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "Rs." + _vm._s(_vm.properties.rent_price)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c(
                                  "td",
                                  {
                                    staticClass: "font-weight-bold",
                                    attrs: { colspan: "2" }
                                  },
                                  [_vm._v("Security")]
                                ),
                                _vm._v(" "),
                                _c("td", { staticClass: "font-weight-bold" }, [
                                  _vm._v(
                                    "Rs. " +
                                      _vm._s(_vm.properties.rent_price * 1)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _vm._m(11),
                              _vm._v(" "),
                              _c("tr", [
                                _c(
                                  "td",
                                  {
                                    staticClass:
                                      "font-weight-bolder text-danger",
                                    attrs: { colspan: "2" }
                                  },
                                  [_vm._v("TOTAL AMOUNT")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass:
                                      "font-weight-bolder text-danger"
                                  },
                                  [
                                    _vm._v(
                                      "Rs." + _vm._s(_vm.properties.rent_price)
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c(
                                  "td",
                                  {
                                    staticClass:
                                      "font-weight-bolder text-danger",
                                    attrs: { colspan: "2" }
                                  },
                                  [_vm._v("Grand TOTAL")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass:
                                      "font-weight-bolder text-danger"
                                  },
                                  [
                                    _vm._v(
                                      "Rs." +
                                        _vm._s(_vm.properties.rent_price * 2)
                                    )
                                  ]
                                )
                              ])
                            ])
                          ])
                        ]
                      )
                    ])
                  ]
                )
              ])
            ])
          ]
        )
      ]),
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
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "breadcrumb-section" }, [
        _c("ol", { staticClass: "breadcrumb" }, [
          _c("li", [
            _c("a", { attrs: { href: "index.html" } }, [_vm._v("Home")])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "index.html" } }, [_vm._v("Ads Details")])
          ]),
          _vm._v(" "),
          _c("li", [_vm._v("Invoice")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-addon" }, [
      _c("i", { staticClass: "glyphicon glyphicon-user" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-addon" }, [
      _c("i", { staticClass: "glyphicon glyphicon-user" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-addon" }, [
      _c("i", { staticClass: "glyphicon glyphicon-home" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-addon" }, [
      _c("i", { staticClass: "glyphicon glyphicon-envelope" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-addon" }, [
      _c("i", { staticClass: "glyphicon glyphicon-home" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend " }, [
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
    return _c("div", { staticClass: "input-group-prepend " }, [
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
    return _c("div", { staticClass: "row  justify-content-between" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "invoicelogo" }, [
          _c("img", {
            attrs: { src: "images/logo2.png", width: "100px", alt: "" }
          }),
          _vm._v(" "),
          _c("h4", [_vm._v("E Karaya Online")]),
          _vm._v(" "),
          _c("p", [
            _vm._v("Walayat Plaza Rehmanabad"),
            _c("br"),
            _vm._v("Rawalpindi,Punjab")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "invoicedetail" }, [
          _c("h4", [_vm._v("Invoice No#")]),
          _vm._v(" "),
          _c("p", [_vm._v("INV-54642")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("p", [_vm._v("Invoice Date:03-12-2020")]),
      _vm._v(" "),
      _c("p", [_vm._v("Terms: Due On Reciept")]),
      _vm._v(" "),
      _c("p", [_vm._v("Due Date : 10/05/2019")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", [_vm._v("Description")]),
      _vm._v(" "),
      _c("th", [_vm._v("Type")]),
      _vm._v(" "),
      _c("th", [_vm._v("Amount")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticClass: "font-weight-bold", attrs: { colspan: "2" } }, [
        _vm._v("Company Charges")
      ]),
      _vm._v(" "),
      _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Rs. 0")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/user/invoice.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/user/invoice.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invoice_vue_vue_type_template_id_3c0278e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice.vue?vue&type=template&id=3c0278e8& */ "./resources/js/views/user/invoice.vue?vue&type=template&id=3c0278e8&");
/* harmony import */ var _invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice.vue?vue&type=script&lang=js& */ "./resources/js/views/user/invoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _invoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/user/invoice.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _invoice_vue_vue_type_template_id_3c0278e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _invoice_vue_vue_type_template_id_3c0278e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/invoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/invoice.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/user/invoice.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./invoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/invoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/invoice.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/user/invoice.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./invoice.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/invoice.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/user/invoice.vue?vue&type=template&id=3c0278e8&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/user/invoice.vue?vue&type=template&id=3c0278e8& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_template_id_3c0278e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./invoice.vue?vue&type=template&id=3c0278e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/invoice.vue?vue&type=template&id=3c0278e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_template_id_3c0278e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_template_id_3c0278e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);