(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[107],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/ResetPassword.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/ResetPassword.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth_service */ "./resources/js/services/auth_service.js");
/* harmony import */ var _components_user_Header_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/user/Header.vue */ "./resources/js/components/user/Header.vue");
/* harmony import */ var _components_user_Footer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/user/Footer.vue */ "./resources/js/components/user/Footer.vue");


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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'resetPassword',
  components: {
    Header: _components_user_Header_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Footer: _components_user_Footer_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      user: {
        email: '',
        varification_code: '',
        password: '',
        password_confirmation: ''
      },
      btnSubmitOldHtml: '',
      errors: {}
    };
  },
  mounted: function mounted() {// if (this.$store.state.commonMessage === 'reset_password_request') {
    //     this.user.email = this.$store.state.commonVariable;
    //     this.flashMessage.info({
    //         message: "A verification code has been sent to the email you provided",
    //         time: 5000,
    //     });
    //     this.$store.state.commonMessage = null;
    //     this.$store.state.commonVariable = null;
    // }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.user.email = to.params.email;
    });
  },
  methods: {
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
    // onSubmit: async function() {
    //     this.disableSubmission(this.$refs.btnSubmit);
    //     try {
    //         await auth.resetPassword(this.user);
    //         this.errors = {};
    //         this.$store.state.commonMessage = 'password_reseted';
    //         this.$store.state.commonVariable = this.user.email;
    //         this.$router.push({ name: "login" });
    //     } catch (error) {
    //         switch (error.response.status) {
    //             case 422:
    //                 this.errors = error.response.data.errors;
    //                 break;
    //             default:
    //                 this.errors = {};
    //                 this.flashMessage.error({
    //                     message: "Some error occurred please try again",
    //                     time: 5000,
    //                 });
    //                 break;
    //         }
    //         this.enableSubmission(this.$refs.btnSubmit);
    //     }
    // },
    onSubmit: function () {
      var _onSubmit = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.disableSubmission(this.$refs.btnSubmit);
                _context.prev = 1;
                this.errors = {};
                _context.next = 5;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["resetPassword"](this.user);

              case 5:
                response = _context.sent;
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                _context.next = 23;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0 + '');
                _context.t1 = _context.t0.response.status;
                _context.next = _context.t1 === 422 ? 15 : _context.t1 === 401 ? 17 : 19;
                break;

              case 15:
                this.errors = _context.t0.response.data.errors;
                return _context.abrupt("break", 22);

              case 17:
                this.errors = _context.t0.response.data.errors;
                return _context.abrupt("break", 22);

              case 19:
                this.errors = {};
                this.flashMessage.error({
                  message: "Some error occurred please try again",
                  time: 5000
                });
                return _context.abrupt("break", 22);

              case 22:
                this.enableSubmission(this.$refs.btnSubmit);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 9]]);
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
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/ResetPassword.vue?vue&type=template&id=41ced692&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/ResetPassword.vue?vue&type=template&id=41ced692& ***!
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
              _c("div", { staticClass: "col-md-7 mx-auto shadow border" }, [
                _c("div", { staticClass: "user-account" }, [
                  _c("h2", { staticClass: "useraccounthead mb-2" }, [
                    _vm._v("Reset Your Password?")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-2" }, [
                    _vm._v(
                      "We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!"
                    )
                  ]),
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
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-6" }, [
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
                                placeholder: "Enter Your Email"
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
                              ? _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(_vm._s(_vm.errors.email[0]))
                                ])
                              : _vm._e()
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
                                  value: _vm.user.varification_code,
                                  expression: "user.varification_code"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "number",
                                placeholder: "Enter Your Verifcation Code"
                              },
                              domProps: { value: _vm.user.varification_code },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
                                    "varification_code",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.varification_code
                              ? _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    _vm._s(_vm.errors.varification_code[0])
                                  )
                                ])
                              : _vm._e()
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
                                  value: _vm.user.password,
                                  expression: "user.password"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "password",
                                placeholder: "Enter Your New Password"
                              },
                              domProps: { value: _vm.user.password },
                              on: {
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
                            _vm.errors.password
                              ? _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(_vm._s(_vm.errors.password[0]))
                                ])
                              : _vm._e()
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
                                  value: _vm.user.password_confirmation,
                                  expression: "user.password_confirmation"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "password",
                                placeholder: "Enter Your Confirm Password"
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
                              ? _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    _vm._s(_vm.errors.password_confirmation[0])
                                  )
                                ])
                              : _vm._e()
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          ref: "btnSubmit",
                          staticClass: "btn",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Reset Password")]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn-primary", attrs: { href: "/register" } },
                  [_vm._v("Resend Verification Code")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn-primary", attrs: { href: "/login" } },
                  [_vm._v("Login")]
                )
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/authentication/ResetPassword.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/authentication/ResetPassword.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResetPassword_vue_vue_type_template_id_41ced692___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=template&id=41ced692& */ "./resources/js/views/authentication/ResetPassword.vue?vue&type=template&id=41ced692&");
/* harmony import */ var _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=script&lang=js& */ "./resources/js/views/authentication/ResetPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetPassword_vue_vue_type_template_id_41ced692___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResetPassword_vue_vue_type_template_id_41ced692___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/authentication/ResetPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/authentication/ResetPassword.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/authentication/ResetPassword.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/ResetPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/authentication/ResetPassword.vue?vue&type=template&id=41ced692&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/authentication/ResetPassword.vue?vue&type=template&id=41ced692& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_41ced692___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPassword.vue?vue&type=template&id=41ced692& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/ResetPassword.vue?vue&type=template&id=41ced692&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_41ced692___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_41ced692___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);