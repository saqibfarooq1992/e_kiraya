(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Profile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Profile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user_service */ "./resources/js/services/user_service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth_service */ "./resources/js/services/auth_service.js");
/* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/properties_service */ "./resources/js/services/properties_service.js");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/city_service */ "./resources/js/services/city_service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return _defineProperty({
      profile: this.$store.state.profile,
      user: {
        name: '',
        email: '',
        phone: '',
        city: ''
      },
      q: "",
      qu: "",
      invoices: [],
      cities: [],
      users: [],
      engaged: [],
      password: {
        current_password: '',
        new_password: '',
        new_password_confirmation: ''
      },
      verify_password: '',
      errors: {}
    }, "errors", []);
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
              return _services_user_service__WEBPACK_IMPORTED_MODULE_1__["getLandlord"](to.params.id);

            case 3:
              response = _context.sent;
              console.log(response);

              if (!response) {
                next('/404');
              }

              next(function (vm) {
                vm.users = response.data;
              });
              next();
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              next('/404');

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    function beforeRouteEnter(_x, _x2, _x3) {
      return _beforeRouteEnter.apply(this, arguments);
    }

    return beforeRouteEnter;
  }(),
  mounted: function mounted() {
    this.getCity();
  },
  methods: {
    getCity: function () {
      var _getCity = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_city_service__WEBPACK_IMPORTED_MODULE_4__["getCity"]();

              case 3:
                response = _context2.sent;
                this.cities = response.data;
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function getCity() {
        return _getCity.apply(this, arguments);
      }

      return getCity;
    }(),
    updateProfile: function () {
      var _updateProfile = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                formData = new FormData();
                formData.append('name', this.users.name);
                formData.append('phone', this.users.phone);
                formData.append('avater', this.users.avatar);
                formData.append('_method', 'put');
                _context3.next = 8;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["updateProfile"](formData);

              case 8:
                response = _context3.sent;
                this.errors = {};
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                _context3.next = 26;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](0);
                _context3.t1 = _context3.t0.response.status;
                _context3.next = _context3.t1 === 422 ? 18 : _context3.t1 === 401 ? 20 : 23;
                break;

              case 18:
                this.errors = _context3.t0.response.data.errors;
                return _context3.abrupt("break", 26);

              case 20:
                this.errors = {};
                this.flashMessage.error({
                  message: _context3.t0.response.data.message,
                  time: 5000
                });
                return _context3.abrupt("break", 26);

              case 23:
                this.errors = {};
                this.flashMessage.error({
                  message: "Some error occurred please try again",
                  time: 5000
                });
                return _context3.abrupt("break", 26);

              case 26:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 13]]);
      }));

      function updateProfile() {
        return _updateProfile.apply(this, arguments);
      }

      return updateProfile;
    }(),
    updateImage: function () {
      var _updateImage = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                formData = new FormData();
                formData.append('avater', this.profile.avatar);
                formData.append('_method', 'put');
                _context4.next = 6;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["updateImage"](formData);

              case 6:
                response = _context4.sent;
                this.errors = {};
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                _context4.next = 24;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](0);
                _context4.t1 = _context4.t0.response.status;
                _context4.next = _context4.t1 === 422 ? 16 : _context4.t1 === 401 ? 18 : 21;
                break;

              case 16:
                this.errors = _context4.t0.response.data.errors;
                return _context4.abrupt("break", 24);

              case 18:
                this.errors = {};
                this.flashMessage.error({
                  message: _context4.t0.response.data.message,
                  time: 5000
                });
                return _context4.abrupt("break", 24);

              case 21:
                this.errors = {};
                this.flashMessage.error({
                  message: "Some error occurred please try again",
                  time: 5000
                });
                return _context4.abrupt("break", 24);

              case 24:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 11]]);
      }));

      function updateImage() {
        return _updateImage.apply(this, arguments);
      }

      return updateImage;
    }(),
    changePassword: function () {
      var _changePassword = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["changePassword"](this.password);

              case 3:
                response = _context5.sent;
                this.errors = {};
                this.password = {
                  current_password: '',
                  new_password: '',
                  new_password_confirmation: ''
                };
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                _context5.next = 22;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                _context5.t1 = _context5.t0.response.status;
                _context5.next = _context5.t1 === 422 ? 14 : _context5.t1 === 401 ? 16 : 19;
                break;

              case 14:
                this.errors = _context5.t0.response.data.errors;
                return _context5.abrupt("break", 22);

              case 16:
                this.errors = {};
                this.flashMessage.info({
                  message: _context5.t0.response.data.message,
                  time: 5000
                });
                return _context5.abrupt("break", 22);

              case 19:
                this.errors = {};
                this.flashMessage.error({
                  message: "Some error occurred please try again",
                  time: 5000
                });
                return _context5.abrupt("break", 22);

              case 22:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 9]]);
      }));

      function changePassword() {
        return _changePassword.apply(this, arguments);
      }

      return changePassword;
    }(),
    editAttachImageProfile: function editAttachImageProfile() {
      this.profile.avatar = this.$refs.editAvatar.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.editAvatarDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.profile.avatar);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Profile.vue?vue&type=template&id=623113da&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Profile.vue?vue&type=template&id=623113da& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row gutters-sm" }, [
        _c("div", { staticClass: "col-md-4 mb-3 " }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body shadow" }, [
              _c(
                "div",
                {
                  staticClass:
                    "d-flex flex-column align-items-center text-center"
                },
                [
                  _c("img", {
                    staticClass: "profilecircleimage",
                    attrs: {
                      src:
                        _vm.$store.state.serverPath +
                        "storage/" +
                        _vm.users.avatar,
                      alt: "Admin"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-3" }, [
                    _c("h4", [_vm._v(_vm._s(_vm.users.name))]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-secondary mb-1" }, [
                      _vm._v("Role: " + _vm._s(_vm.users.role))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-muted font-size-sm" }, [
                      _vm._v("City: " + _vm._s(_vm.users.city_name))
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      { staticClass: "btn btn-outline-primary p-1 mt-1" },
                      [_vm._v("Total Property:10")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      { staticClass: "btn btn-outline-success p-1 mt-1" },
                      [_vm._v("Engaged Property:5")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      { staticClass: "btn btn-outline-success p-1 mt-1" },
                      [_vm._v("Reserved Property:5")]
                    )
                  ])
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-8" }, [
          _c("div", { staticClass: "card mb-3" }, [
            _c("div", { staticClass: "card-body shadow" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.updateProfile($event)
                    }
                  }
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "avatar-upload" }, [
                        _c(
                          "div",
                          {
                            staticClass: "avatar-preview",
                            staticStyle: { width: "100%", height: "170px" }
                          },
                          [
                            _c("img", {
                              ref: "editAvatarDisplay",
                              staticStyle: {
                                width: "100%",
                                height: "170px",
                                border: "none"
                              },
                              attrs: {
                                src:
                                  _vm.$store.state.serverPath +
                                  "storage/" +
                                  _vm.users.avatar,
                                id: "imagePreview1"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "avatar-edit" }, [
                          _c("input", {
                            ref: "editAvatar",
                            attrs: {
                              type: "file",
                              id: "imageUpload",
                              accept: ".png, .jpg, .jpeg"
                            },
                            on: { change: _vm.editAttachImageProfile }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "imageUpload" } })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { staticClass: "p-0 m-0", attrs: { for: "name" } },
                          [_vm._v("Name")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.users.name,
                              expression: "users.name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "name",
                            placeholder: "Your full name"
                          },
                          domProps: { value: _vm.users.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.users, "name", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { staticClass: "p-0 m-0", attrs: { for: "name" } },
                          [_vm._v("Phone")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.users.phone,
                              expression: "users.phone"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "name" },
                          domProps: { value: _vm.users.phone },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.users, "phone", $event.target.value)
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { staticClass: "p-0 m-0", attrs: { for: "Email" } },
                          [_vm._v("Email")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.users.email,
                              expression: "users.email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", readonly: "" },
                          domProps: { value: _vm.users.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.users, "email", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { staticClass: "p-0 m-0", attrs: { for: "City" } },
                          [_vm._v("City")]
                        ),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.users.city_id,
                                expression: "users.city_id"
                              }
                            ],
                            staticClass: "form-control mt-1",
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
                                  _vm.users,
                                  "city_id",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select City")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.cities, function(city, index) {
                              return _c(
                                "option",
                                { key: index, domProps: { value: city.id } },
                                [_vm._v(_vm._s(city.city_name))]
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
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "new_password" } }, [
                          _vm._v("New Password")
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.password.new_password,
                                expression: "password.new_password"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "password",
                              id: "new_password",
                              placeholder: "New password"
                            },
                            domProps: { value: _vm.password.new_password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.password,
                                  "new_password",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.new_password
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(_vm._s(_vm.errors.new_password[0]))
                              ])
                            : _vm._e()
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "confirm_password" } }, [
                          _vm._v("Confirm Password")
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.password.new_password_confirmation,
                                expression: "password.new_password_confirmation"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "password",
                              id: "confirm_password",
                              placeholder: "Password confirmations"
                            },
                            domProps: {
                              value: _vm.password.new_password_confirmation
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.password,
                                  "new_password_confirmation",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.new_password_confirmation
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.errors.new_password_confirmation[0]
                                  )
                                )
                              ])
                            : _vm._e()
                        ])
                      ])
                    ])
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card mt-3" }, [
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "table-responsive" }, [
          _c(
            "table",
            {
              staticClass: "table table-hover",
              staticStyle: { width: "100%" }
            },
            [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.invoices, function(invoice, index) {
                  return _c("tr", { key: index }, [
                    _c("th", { attrs: { scope: "row" } }, [
                      _vm._v(_vm._s(index + 1))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(invoice.property_name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(invoice.city_name))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(invoice.size) + " " + _vm._s(invoice.unit))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(invoice.rent_price))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(invoice.furnished))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(invoice.rent))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger btn-sm",
                            attrs: {
                              type: "button",
                              "data-toggle": "modal",
                              "data-target": ".bd-example-modal-lg"
                            },
                            on: {
                              click: function($event) {
                                return _vm.deleteReservedProperty(invoice)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-trash" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-info btn-sm",
                            attrs: {
                              type: "button",
                              "data-toggle": "tooltip",
                              "data-placement": "top",
                              title: "paid rent"
                            },
                            on: {
                              click: function($event) {
                                return _vm.paidPropertyRent(invoice)
                              }
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fas fa-money-check-alt",
                              staticStyle: { color: "white" }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-info btn-sm",
                            attrs: {
                              type: "button",
                              "data-toggle": "tooltip",
                              "data-placement": "top",
                              title: "un-paid rent"
                            },
                            on: {
                              click: function($event) {
                                return _vm.unPaidPropertyRent(invoice)
                              }
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fas fa-money-check-alt",
                              staticStyle: { color: "white" }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "invoice-landlord",
                                params: { id: invoice.id }
                              }
                            }
                          },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-info btn-sm",
                                attrs: {
                                  type: "button",
                                  "data-toggle": "tooltip",
                                  "data-placement": "top",
                                  title: "invoice"
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fas fa-file",
                                  staticStyle: { color: "white" }
                                })
                              ]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ])
                }),
                0
              )
            ]
          )
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
    return _c("h3", { staticClass: "text-success font-weight-bold" }, [
      _c("u", [_vm._v(" Account Setting")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-success p-1 d-block mx-auto mt-3",
          attrs: { type: "btn" }
        },
        [_vm._v("Save Changes")]
      )
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Property")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("City")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("property size")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Rent Price")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Furnished")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Rent")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/city_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/city_service.js ***!
  \***********************************************/
/*! exports provided: createCity, getCity, deleteCities, updateCites, loadCity, searchCities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCity", function() { return createCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCity", function() { return getCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCities", function() { return deleteCities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCites", function() { return updateCites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCity", function() { return loadCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchCities", function() { return searchCities; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createCity(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/cities', data);
}
function getCity() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/cities');
}
function deleteCities(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/cities/".concat(id));
}
function updateCites(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().put("/cities/".concat(id), data);
}
function loadCity(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("cities?page=".concat(nextPage));
}
function searchCities(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/search-cities', request);
}

/***/ }),

/***/ "./resources/js/services/http_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/http_service.js ***!
  \***********************************************/
/*! exports provided: http, httpFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "http", function() { return http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpFile", function() { return httpFile; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./resources/js/store.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth_service */ "./resources/js/services/auth_service.js");



function http() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.apiURL,
    headers: {
      Authorization: 'Bearer ' + _auth_service__WEBPACK_IMPORTED_MODULE_2__["getAccessToken"]()
    }
  });
}
function httpFile() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.apiURL,
    headers: {
      Authorization: 'Bearer ' + _auth_service__WEBPACK_IMPORTED_MODULE_2__["getAccessToken"](),
      'Content-Type': 'multipart/form-data'
    }
  });
}

/***/ }),

/***/ "./resources/js/services/properties_service.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/properties_service.js ***!
  \*****************************************************/
/*! exports provided: getProTypeData, getCity, getSectors, getSector, getSectorUpdate, createProperty, getProperty, allPropertyRent, getAllProperties, getProperties, getUser, deleteProperty, updateProperty, assignProperty, getRules, loadProperty, loadReservedProperty, loadRule, approvedProperty, paidPropertyRent, PropertyOk, PropertyHot, reloadProperty, seenProperty, searchSector, searchProperty, ReservedProperty, suspendedProperty, getEngagedProperty, loadEngagedProperty, getpaidPropteryRent, loadPaidProperty, getUnpaidPropteryRent, loadUnPaidProperty, getManager, createAreaManager, getAreaManaer, getAreaManager, assignPropertyData, getEmployee, ReservationCancell, getManagerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProTypeData", function() { return getProTypeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCity", function() { return getCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSectors", function() { return getSectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSector", function() { return getSector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSectorUpdate", function() { return getSectorUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProperty", function() { return createProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return getProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allPropertyRent", function() { return allPropertyRent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProperties", function() { return getAllProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperties", function() { return getProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProperty", function() { return deleteProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProperty", function() { return updateProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignProperty", function() { return assignProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRules", function() { return getRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProperty", function() { return loadProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadReservedProperty", function() { return loadReservedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRule", function() { return loadRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approvedProperty", function() { return approvedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paidPropertyRent", function() { return paidPropertyRent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyOk", function() { return PropertyOk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyHot", function() { return PropertyHot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reloadProperty", function() { return reloadProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seenProperty", function() { return seenProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchSector", function() { return searchSector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchProperty", function() { return searchProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservedProperty", function() { return ReservedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suspendedProperty", function() { return suspendedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEngagedProperty", function() { return getEngagedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadEngagedProperty", function() { return loadEngagedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getpaidPropteryRent", function() { return getpaidPropteryRent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPaidProperty", function() { return loadPaidProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnpaidPropteryRent", function() { return getUnpaidPropteryRent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUnPaidProperty", function() { return loadUnPaidProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManager", function() { return getManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAreaManager", function() { return createAreaManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaManaer", function() { return getAreaManaer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaManager", function() { return getAreaManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignPropertyData", function() { return assignPropertyData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmployee", function() { return getEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationCancell", function() { return ReservationCancell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManagerData", function() { return getManagerData; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function getProTypeData() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/property');
}
function getCity() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/cities');
}
function getSectors(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-sectors', request);
}
function getSector(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-sectors', request);
}
function getSectorUpdate(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-sectors-update', request);
}
function createProperty(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/properties', data);
}
function getProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/properties');
}
function allPropertyRent() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/all-property-rent');
}
function getAllProperties(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/get-all-properties/".concat(id));
}
function getProperties() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-properties');
}
function getUser() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-user');
}
function deleteProperty(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/properties/".concat(id));
}
function updateProperty(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("/properties/".concat(id), data);
}
function assignProperty(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("/assign-property/".concat(id), data);
}
function getRules() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/rules');
}
function loadProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("properties?page=".concat(nextPage));
}
function loadReservedProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("reserved-property-csr?page=".concat(nextPage));
}
function loadRule(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("rules?page=".concat(nextPage));
}
function approvedProperty(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/property-approved/".concat(id));
}
function paidPropertyRent(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/property-paid-rent/".concat(id));
}
function PropertyOk(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/property-running/".concat(id));
}
function PropertyHot(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/property-hot/".concat(id));
}
function reloadProperty(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/reload/".concat(id));
}
function seenProperty(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/properties-seen/".concat(id));
}
function searchSector(request, id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/search-sectors/".concat(id), request);
}
function searchProperty(request, id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/search-all-properties-admin/".concat(id), request);
}
function ReservedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/reserved-property-csr');
}
function suspendedProperty(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/suspended-property/".concat(id));
}
function getEngagedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/engaged-property-csr');
}
function loadEngagedProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("engaged-property-csr?page=".concat(nextPage));
}
function getpaidPropteryRent() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/paid-property-csr');
}
function loadPaidProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("paid-property-csr?page=".concat(nextPage));
}
function getUnpaidPropteryRent() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/un-paid-property-csr');
}
function loadUnPaidProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("un-paid-property-csr?page=".concat(nextPage));
}
function getManager() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-managers');
}
function createAreaManager(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/area_managers', data);
}
function getAreaManaer() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/area_managers');
} // export function getManagerData(){
//     return http().get('/get-managers-data');
// }

function getAreaManager(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-area-managers', request);
}
function assignPropertyData(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/send-manager', data);
}
function getEmployee(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/get-employees', data);
} // export function searchProperty(request) {
//     return http().post('/search-properties-admin',request);
// }

function ReservationCancell(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/property-reservation/".concat(id));
}
function getManagerData(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/get-managers-data-csr/".concat(id));
}

/***/ }),

/***/ "./resources/js/services/user_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/user_service.js ***!
  \***********************************************/
/*! exports provided: getUser, getCity, createManager, updateUser, deleteUser, searchUser, loadUser, approvedUser, getAllUser, getRenter, getLandloard, loadAllUser, createEmployee, getEmployee, getCsr, contactUs, getLandlord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCity", function() { return getCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createManager", function() { return createManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchUser", function() { return searchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUser", function() { return loadUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approvedUser", function() { return approvedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUser", function() { return getAllUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRenter", function() { return getRenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLandloard", function() { return getLandloard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllUser", function() { return loadAllUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmployee", function() { return createEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmployee", function() { return getEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCsr", function() { return getCsr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactUs", function() { return contactUs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLandlord", function() { return getLandlord; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function getUser() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/users');
}
function getCity() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/cities');
}
function createManager(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/users', data);
}
function updateUser(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().put("/users/".concat(id), data);
}
function deleteUser(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/users/".concat(id));
}
function searchUser(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/search-user', request);
}
function loadUser(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("users?page=".concat(nextPage));
}
function approvedUser(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/users/".concat(id));
}
function getAllUser() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/all-users');
}
function getRenter() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-renter');
}
function getLandloard() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-landloard');
}
function loadAllUser(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("all-users?page=".concat(nextPage));
}
function createEmployee(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/users', data);
}
function getEmployee() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-employee');
}
function getCsr() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-csr-account');
}
function contactUs(contact) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/contacts', contact);
}
function getLandlord(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/get-all-landlord-admin/".concat(id));
}

/***/ }),

/***/ "./resources/js/views/admin/Profile.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/admin/Profile.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_623113da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=623113da& */ "./resources/js/views/admin/Profile.vue?vue&type=template&id=623113da&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_623113da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_623113da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Profile.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/admin/Profile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Profile.vue?vue&type=template&id=623113da&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/admin/Profile.vue?vue&type=template&id=623113da& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_623113da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=623113da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Profile.vue?vue&type=template&id=623113da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_623113da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_623113da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);