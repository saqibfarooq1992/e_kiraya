(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'resetPasswordRequest',
  components: {
    Header: _components_user_Header_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Footer: _components_user_Footer_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      email: '',
      errors: {},
      user: {
        email: ''
      },
      btnSubmitOldHtml: ''
    };
  },
  methods: {
    // onSubmit: async function() {
    //     this.disableSubmission(this.$refs.btnSubmit);
    //     try {
    //         const request = {
    //             email: this.email
    //         };
    //         await auth.resetPasswordRequest(request);
    //         this.errors = {};
    //         this.$store.state.commonMessage = 'reset_password_request';
    //         this.$store.state.commonVariable = this.email;
    //         this.$router.push('/reset-password');
    //     } catch (error) {
    //         switch (error.response.status) {
    //             case 422:
    //                 this.errors = error.response.data.errors;
    //                 break;
    //             case 401:
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
                _context.prev = 0;
                this.disableSubmission(this.$refs.btnSubmit);
                this.errors = {};
                _context.next = 5;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["resetPasswordRequest"](this.user);

              case 5:
                response = _context.sent;
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                this.$router.push({
                  name: 'reset-password',
                  params: {
                    email: this.user.email
                  }
                });
                _context.next = 22;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                _context.t1 = _context.t0.response.status;
                _context.next = _context.t1 === 422 ? 15 : 18;
                break;

              case 15:
                this.errors = _context.t0.response.data.errors;
                return _context.abrupt("break", 21);

              case 18:
                this.errors = {};
                this.flashMessage.error({
                  message: "Some error occurred please try again",
                  time: 5000
                });
                return _context.abrupt("break", 21);

              case 21:
                this.enableSubmission(this.$refs.btnSubmit);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=template&id=7b948766&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=template&id=7b948766& ***!
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
              _c("div", { staticClass: "col-md-6 mx-auto shadow border" }, [
                _c("div", { staticClass: "user-account" }, [
                  _c("h2", [_vm._v("Forgot Your Password?")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-4" }, [
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
                              _vm.$set(_vm.user, "email", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.email
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.email[0]))
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          ref: "btnSubmit",
                          staticClass: "btn",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Request Password")]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn-primary", attrs: { href: "/register" } },
                  [_vm._v("Create a New Account")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn-primary", attrs: { href: "/login" } },
                  [_vm._v("Already have an account? Login!")]
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

/***/ "./resources/js/views/authentication/ResetPasswordRequest.vue":
/*!********************************************************************!*\
  !*** ./resources/js/views/authentication/ResetPasswordRequest.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResetPasswordRequest_vue_vue_type_template_id_7b948766___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPasswordRequest.vue?vue&type=template&id=7b948766& */ "./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=template&id=7b948766&");
/* harmony import */ var _ResetPasswordRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPasswordRequest.vue?vue&type=script&lang=js& */ "./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResetPasswordRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetPasswordRequest_vue_vue_type_template_id_7b948766___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResetPasswordRequest_vue_vue_type_template_id_7b948766___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/authentication/ResetPasswordRequest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPasswordRequest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=template&id=7b948766&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=template&id=7b948766& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordRequest_vue_vue_type_template_id_7b948766___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPasswordRequest.vue?vue&type=template&id=7b948766& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=template&id=7b948766&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordRequest_vue_vue_type_template_id_7b948766___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordRequest_vue_vue_type_template_id_7b948766___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);