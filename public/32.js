(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/Register.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/Register.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth_service */ "./resources/js/services/auth_service.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/main_service */ "./resources/js/services/main_service.js");
/* harmony import */ var _components_user_Header_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/user/Header.vue */ "./resources/js/components/user/Header.vue");
/* harmony import */ var _components_user_Footer_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/user/Footer.vue */ "./resources/js/components/user/Footer.vue");


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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "register",
  components: {
    Header: _components_user_Header_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Footer: _components_user_Footer_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      cities: [],
      user: {
        Name: '',
        avater: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone: '',
        // role: 'student',
        role: '',
        city_name: '',
        terms: '',
        signing: ''
      },
      length: '',
      errors: {},
      message: '',
      btnSubmitOldHtml: ''
    };
  },
  mounted: function mounted() {
    this.getCities();
  },
  methods: {
    getCities: function () {
      var _getCities = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_2__["getCities"]();

              case 3:
                response = _context.sent;
                this.cities = response.data;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred during geting categories",
                  time: 5000
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function getCities() {
        return _getCities.apply(this, arguments);
      }

      return getCities;
    }(),
    togglePasswordShow: function togglePasswordShow() {
      var passwordField = this.$refs.passwordField;
      var passwordIcon = this.$refs.passwordIcon;

      if (passwordField.getAttribute('type') === 'password') {
        passwordField.setAttribute('type', 'text');
        passwordIcon.classList.remove('fa-eye');
        passwordIcon.classList.add('fa-eye-slash');
      } else {
        passwordField.setAttribute('type', 'password');
        passwordIcon.classList.remove('fa-eye-slash');
        passwordIcon.classList.add('fa-eye');
      }
    },
    validatePassword: function validatePassword() {
      if (this.user.password.length === 0) {
        return;
      }

      this.errors.password = '';
      var matchedCase = new Array();
      matchedCase.push("[$@$!%*#?&]");
      matchedCase.push("[A-Z]");
      matchedCase.push("[0-9]");
      matchedCase.push("[a-z]");
      var ctr = 0;

      for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(this.user.password)) {
          ctr++;
        }
      }

      var color = "";
      var strength = "";

      switch (ctr) {
        case 0:
        case 1:
        case 2:
          strength = "Very Weak";
          color = "red";
          break;

        case 3:
          strength = "Medium";
          color = "orange";
          break;

        case 4:
          strength = "Strong";
          color = "green";
          break;
      }

      this.$refs.passwordStrength.innerHTML = strength;
      this.$refs.passwordStrength.style.color = color;
    },
    onSubmit: function () {
      var _onSubmit = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.disableSubmission(this.$refs.btnSubmit);
                formData = new FormData();
                formData.append('Name', this.user.Name);
                formData.append('email', this.user.email);
                formData.append('password', this.user.password);
                formData.append('password_confirmation', this.user.password_confirmation);
                formData.append('phone', this.user.phone);
                formData.append('role', this.user.role);
                formData.append('city_name', this.user.city_name);
                formData.append('terms', this.user.terms);
                formData.append('avater', this.user.avater); // formData.append('_method' , 'post');

                _context2.prev = 11;
                _context2.next = 14;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["register"](formData);

              case 14:
                this.errors = {};
                this.$store.state.commonMessage = "registration";
                this.$router.push({
                  name: "login"
                });
                this.flashMessage.success({
                  message: "Please wait for Approval",
                  time: 500
                });
                _context2.next = 31;
                break;

              case 20:
                _context2.prev = 20;
                _context2.t0 = _context2["catch"](11);
                _context2.t1 = _context2.t0.response.status;
                _context2.next = _context2.t1 === 422 ? 25 : 27;
                break;

              case 25:
                this.errors = _context2.t0.response.data.errors;
                return _context2.abrupt("break", 30);

              case 27:
                this.errors = {};
                this.flashMessage.error({
                  message: "Some error occurred please try again",
                  time: 5000
                });
                return _context2.abrupt("break", 30);

              case 30:
                this.enableSubmission(this.$refs.btnSubmit);

              case 31:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[11, 20]]);
      }));

      function onSubmit() {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }(),
    disableSubmission: function disableSubmission(btnSubmit) {
      btnSubmit.setAttribute('disabled', 'disabled');
      this.btnSubmitOldHtml = btnSubmit.innerHTML;
      btnSubmit.innerHTML = '<span class="fa fa-spinner fa-spin"></span> Please wait...';
    },
    enableSubmission: function enableSubmission(btnSubmit) {
      btnSubmit.removeAttribute('disabled');
      btnSubmit.innerHTML = this.btnSubmitOldHtml;
    },
    attachImage: function attachImage() {
      this.user.avater = this.$refs.avaterImage.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.newAvaterImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.user.avater);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/Register.vue?vue&type=style&index=0&id=4aa4e5cb&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/Register.vue?vue&type=style&index=0&id=4aa4e5cb&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.bg-image[data-v-4aa4e5cb] {\n        background-position: center !important;\n        background-size: cover !important;\n}\n.selectcity[data-v-4aa4e5cb]{\n       margin-top: 35px;\n}\n.relative[data-v-4aa4e5cb] {\n    position: relative;\n}\n.password-strength[data-v-4aa4e5cb] {\n    position: absolute;\n    right: 0;\n    top: -13px;\n    font-size: 10px;\n}\n.show-password[data-v-4aa4e5cb] {\n    border: 0;\n    font-size: 16px;\n    color: #4e73df;\n    background-color: transparent;\n    position: absolute;\n    top: 20px;\n    right: 5px;\n    transform: translateY(-50%);\n}\n.show-password[data-v-4aa4e5cb]:focus {\n    outline: 0;\n}\n@media only screen and (max-width: 600px) {\n.selectcity[data-v-4aa4e5cb]{\n       margin-top: 10px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/Register.vue?vue&type=style&index=0&id=4aa4e5cb&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/Register.vue?vue&type=style&index=0&id=4aa4e5cb&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=style&index=0&id=4aa4e5cb&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/Register.vue?vue&type=style&index=0&id=4aa4e5cb&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      _c(
        "section",
        { staticClass: "clearfix user-page", attrs: { id: "main" } },
        [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row text-center" }, [
              _c("div", { staticClass: "col-md-8 mx-auto shadow border" }, [
                _c("div", { staticClass: "user-account" }, [
                  _c("h2", [_vm._v("Create Eko Account")]),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.onSubmit($event)
                        }
                      }
                    },
                    [
                      _vm.user.avater.name
                        ? _c("div", [
                            _c("img", {
                              ref: "newAvaterImageDisplay",
                              staticStyle: {
                                width: "100px",
                                "border-radius": "50%",
                                "margin-top": "-47px"
                              },
                              attrs: {
                                src: "images/img_avatar.png",
                                alt: "Avatar"
                              }
                            })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-lg-6 col-md-6 col-sm-6" },
                          [
                            _c("div", { staticClass: "form-group" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.Name,
                                    expression: "user.Name"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", placeholder: "Name" },
                                domProps: { value: _vm.user.Name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "Name",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.Name
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v(_vm._s(_vm.errors.Name[0]))]
                                  )
                                : _vm._e()
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-lg-6 col-md-6 col-sm-6" },
                          [
                            _c("div", { staticClass: "form-group" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.email,
                                    expression: "user.email"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "email",
                                  placeholder: "Email Id"
                                },
                                domProps: { value: _vm.user.email },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "email",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.email
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v(_vm._s(_vm.errors.email[0]))]
                                  )
                                : _vm._e()
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-lg-6 col-md-6 col-sm-6" },
                          [
                            _c("div", { staticClass: "form-group" }, [
                              _c("div", { staticClass: "relative" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.user.password,
                                      expression: "user.password"
                                    }
                                  ],
                                  ref: "passwordField",
                                  staticClass: "form-control form-control-user",
                                  attrs: {
                                    type: "password",
                                    placeholder: "Password"
                                  },
                                  domProps: { value: _vm.user.password },
                                  on: {
                                    keyup: _vm.validatePassword,
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.user,
                                        "password",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "show-password",
                                    attrs: { type: "button" },
                                    on: { click: _vm.togglePasswordShow }
                                  },
                                  [
                                    _c("span", {
                                      ref: "passwordIcon",
                                      staticClass: "fa fa-eye"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.errors.password
                                  ? _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [_vm._v(_vm._s(_vm.errors.password[0]))]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.user.password.length
                                  ? _c("i", {
                                      ref: "passwordStrength",
                                      staticClass: "password-strength"
                                    })
                                  : _vm._e()
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-lg-6 col-md-6 col-sm-6" },
                          [
                            _c("div", { staticClass: "form-group" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.password_confirmation,
                                    expression: "user.password_confirmation"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "password",
                                  placeholder: "Confirm Password"
                                },
                                domProps: {
                                  value: _vm.user.password_confirmation
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "password_confirmation",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.password_confirmation
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors.password_confirmation[0]
                                        )
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-lg-6 col-md-6 col-sm-6" },
                          [
                            _c(
                              "div",
                              { staticClass: "input-group mb-3" },
                              [
                                _vm._m(0),
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
                                    value: _vm.user.phone,
                                    callback: function($$v) {
                                      _vm.$set(_vm.user, "phone", $$v)
                                    },
                                    expression: "user.phone"
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-lg-6 col-md-6 col-sm-6" },
                          [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.role,
                                    expression: "user.role"
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
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.user,
                                      "role",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Select Who are you")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "landloard" } },
                                  [_vm._v("Landlord")]
                                ),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "tenant" } }, [
                                  _vm._v("Tenant")
                                ])
                              ]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-lg-6 col-sm-6 col-md-6" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.city_name,
                                  expression: "user.city_name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Enter you city"
                              },
                              domProps: { value: _vm.user.city_name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
                                    "city_name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.password_confirmation
                              ? _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    _vm._s(_vm.errors.password_confirmation[0])
                                  )
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-lg-6 col-sm-6 col-md-6" },
                          [
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "label",
                                { staticClass: "float-left text-success " },
                                [_vm._v("Image ....(optional)")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                ref: "avaterImage",
                                staticClass: "form-control",
                                attrs: {
                                  type: "file",
                                  name: "avatar",
                                  id: "Avatar"
                                },
                                on: { change: _vm.attachImage }
                              }),
                              _vm._v(" "),
                              _vm.errors.avatar
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v(_vm._s(_vm.errors.avatar[0]))]
                                  )
                                : _vm._e()
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.terms,
                                expression: "user.terms"
                              }
                            ],
                            attrs: { type: "checkbox", id: "signing" },
                            domProps: {
                              checked: Array.isArray(_vm.user.terms)
                                ? _vm._i(_vm.user.terms, null) > -1
                                : _vm.user.terms
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.user.terms,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.user,
                                        "terms",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.user,
                                        "terms",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.user, "terms", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "text-success",
                              attrs: { for: "signing" }
                            },
                            [
                              _vm._v(
                                "By signing up for an account you agree to our Terms and Conditions"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("router-link", { attrs: { to: "/faqs" } }, [
                            _vm._v(
                              "\n                                            Readmore\n                                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          ref: "btnSubmit",
                          staticClass: "btn",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Registration")]
                      )
                    ]
                  )
                ])
              ])
            ])
          ])
        ]
      ),
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
    return _c("div", { staticClass: "input-group-prepend " }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "basic-addon1" } },
        [_c("img", { attrs: { src: "images/bg/pakflag.png" } })]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/authentication/Register.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/authentication/Register.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_4aa4e5cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=4aa4e5cb&scoped=true& */ "./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/authentication/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Register_vue_vue_type_style_index_0_id_4aa4e5cb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&id=4aa4e5cb&scoped=true&lang=css& */ "./resources/js/views/authentication/Register.vue?vue&type=style&index=0&id=4aa4e5cb&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_4aa4e5cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_4aa4e5cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4aa4e5cb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/authentication/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/authentication/Register.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/authentication/Register.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/authentication/Register.vue?vue&type=style&index=0&id=4aa4e5cb&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/views/authentication/Register.vue?vue&type=style&index=0&id=4aa4e5cb&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_4aa4e5cb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=style&index=0&id=4aa4e5cb&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/Register.vue?vue&type=style&index=0&id=4aa4e5cb&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_4aa4e5cb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_4aa4e5cb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_4aa4e5cb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_4aa4e5cb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_4aa4e5cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=4aa4e5cb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_4aa4e5cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_4aa4e5cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);