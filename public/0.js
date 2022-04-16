(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Footer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/Footer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/main_service */ "./resources/js/services/main_service.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      subscriberData: {
        email: ''
      },
      errors: {}
    };
  },
  methods: {
    subscriber: function () {
      var _subscriber = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_1__["subscriber"](this.subscriberData);

              case 3:
                response = _context.sent;
                this.flashMessage.success({
                  message: 'Subscriber Data Added Successfuly!',
                  time: 5000
                });
                this.subscriberData.email = "";
                _context.next = 17;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                _context.t1 = _context.t0.response.status;
                _context.next = _context.t1 === 422 ? 13 : 15;
                break;

              case 13:
                this.errors = _context.t0.response.data.errors;
                return _context.abrupt("break", 17);

              case 15:
                this.flashMessage.error({
                  message: 'Some error occured !',
                  time: 500
                });
                return _context.abrupt("break", 17);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function subscriber() {
        return _subscriber.apply(this, arguments);
      }

      return subscriber;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Header.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/Header.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Header',
  data: function data() {
    return {
      fixed: false
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Footer.vue?vue&type=style&index=0&id=5639b804&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/Footer.vue?vue&type=style&index=0&id=5639b804&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.footersocialiconfb[data-v-5639b804]{\n    font-size:36px;\n    color:#3b5998;\n}\n.footersocialicontweet[data-v-5639b804]{\n    font-size:36px;\n    color:#00acee;\n}\n.footersocialicongoogle[data-v-5639b804]{\n    font-size:36px;\n    color:#D44638;\n}\n.footersocialiconwhats[data-v-5639b804]{\n    font-size:36px;\n    color:green;\n}\n.footersocialiconyoutube[data-v-5639b804]{\n    font-size:36px;\n    color:#FF0000;\n}\n.footersocialiconinsta[data-v-5639b804]{\n    font-size:36px;\n   color: #D6249F;\n}\nfooter a[data-v-5639b804]{\n    text-decoration:none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Header.vue?vue&type=style&index=0&id=776c1bf6&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/Header.vue?vue&type=style&index=0&id=776c1bf6&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.exact-active[data-v-776c1bf6]{\n    color:green !important;\n}\n@media only screen and (max-width: 600px) {\n.sign-in[data-v-776c1bf6]{\n    margin-top: 20px;\n    display: inline-block;\n}\n.post-ad[data-v-776c1bf6]{\nposition: static;\ndisplay: inline;\n}\n#header a.btn[data-v-776c1bf6]{\n    position: static;\n    display: inline;\n}\n.navbar-toggler[data-v-776c1bf6]{\n    margin-top: 20px;\n}\n}\n@media only screen and (max-width: 786px) {\n.sign-in[data-v-776c1bf6]{\n    margin-top: 50px;\n    display: inline-block;\n}\n.post-ad[data-v-776c1bf6]{\nposition: static;\ndisplay: inline;\n}\n#header a.btn[data-v-776c1bf6]{\n    position: static;\n    display: inline;\n}\n.navbar-toggler[data-v-776c1bf6]{\n    margin-top: 20px;\n}\n}\n@media only screen and (max-width: 990px) {\n.navbar-toggler[data-v-776c1bf6]{\n\tmargin-top: 15px;\n}\n}\n@media only screen and (max-width: 1200px) {\n#header a.btn[data-v-776c1bf6]{\nposition: none;\ntop: 60px;\nright: 15px;\nz-index: 10;\nwidth: 134px;\n}\n.banner[data-v-776c1bf6]{\n\tmargin-top: 100px !important;\n}\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Footer.vue?vue&type=style&index=0&id=5639b804&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/Footer.vue?vue&type=style&index=0&id=5639b804&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=style&index=0&id=5639b804&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Footer.vue?vue&type=style&index=0&id=5639b804&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Header.vue?vue&type=style&index=0&id=776c1bf6&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/Header.vue?vue&type=style&index=0&id=776c1bf6&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=style&index=0&id=776c1bf6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Header.vue?vue&type=style&index=0&id=776c1bf6&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Footer.vue?vue&type=template&id=5639b804&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/Footer.vue?vue&type=template&id=5639b804&scoped=true& ***!
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
  return _c("main", [
    _c("footer", { staticClass: "clearfix", attrs: { id: "footer" } }, [
      _c("section", { staticClass: "footer-top clearfix" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-3 col-sm-6" }, [
              _c(
                "div",
                { staticClass: "footer-widget" },
                [
                  _c(
                    "router-link",
                    { staticClass: "navbar-brand", attrs: { to: "/" } },
                    [
                      _c("img", {
                        staticStyle: { width: "100px" },
                        attrs: {
                          src: _vm.$store.state.serverPath + "images/eko.png",
                          alt: "Logo"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(0)
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2 col-sm-6" }, [
              _c("div", { staticClass: "footer-widget" }, [
                _c("h3", [_vm._v("Quick Links")]),
                _vm._v(" "),
                _c("ul", [
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "/about-us" } }, [
                        _vm._v(" About US")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "/Faqs" } }, [
                        _vm._v("FAQ'S")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "/Privacy-policy" } }, [
                        _vm._v("Privacy Policy")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "/faq" } }, [
                        _vm._v("Terms & Conditions")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "/contact-us" } }, [
                        _vm._v("Contact US")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "/How-Eko-Works" } }, [
                        _vm._v("How EKO Works")
                      ])
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2 col-sm-6" }, [
              _c("div", { staticClass: "footer-widget " }, [
                _c("h3", [_vm._v("PLatform")]),
                _vm._v(" "),
                _c("ul", [
                  _c("h5", { staticClass: "text-success" }, [
                    _vm._v("LANDLORD")
                  ]),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "/faqs" } }, [
                        _vm._v("EKOboard For Landlord")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/guide-for-landlord" } },
                        [_vm._v("Guides For Landlord")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("h5", { staticClass: "text-success" }, [
                    _vm._v("TENANTS")
                  ]),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "/faqs" } }, [
                        _vm._v("EKOboard For Tenants")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/guides-for-tenants" } },
                        [_vm._v("Guides For Tenants")]
                      )
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2 col-sm-6" }, [
              _c("div", { staticClass: "footer-widget " }, [
                _c("h3", [_vm._v("Resources")]),
                _vm._v(" "),
                _c("ul", [
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "/Faqs" } }, [
                        _vm._v("Area Cities")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "/benefits" } }, [
                        _vm._v("Benefits")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "/Area-map" } }, [
                        _vm._v("Map")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "/Faqs" } }, [
                        _vm._v("Advertise With Us")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "/blogs" } }, [
                        _vm._v("Blogs")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "/blogs" } }, [
                        _vm._v("News")
                      ])
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3 col-sm-6" }, [
              _c("div", { staticClass: "footer-widget news-letter" }, [
                _c("h3", [_vm._v("Newsletter")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v("We Will Never Share Your Email With Anyone else.")
                ]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.subscriber($event)
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
                            value: _vm.subscriberData.email,
                            expression: "subscriberData.email"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "email",
                          name: "email",
                          placeholder: "Enter your Email"
                        },
                        domProps: { value: _vm.subscriberData.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.subscriberData,
                              "email",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.email
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _c("strong", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors.email[0]))
                            ])
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Sign Up")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("h5", { staticClass: "mt-2" }, [_vm._v("Social Media")]),
                _vm._v(" "),
                _vm._m(1)
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "footer-bottom clearfix text-center" }, [
        _c("div", { staticClass: "container" }, [
          _c("p", [
            _c(
              "a",
              {
                attrs: {
                  href: "http://fazaltechnologies.com/",
                  target: "_blank"
                }
              },
              [
                _c("span", [
                  _vm._v(
                    "Developed by © fazal technologies " +
                      _vm._s(new Date().getFullYear())
                  )
                ])
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
    return _c("ul", [
      _c("h5", { staticClass: "text-success" }, [_vm._v("About Us")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Pakistan’s First Rental Property/Real Estate Management website, Easy Kiraya Online (ایکو) allows landlords & tenants to search, screen, manage verified properties for rent, pay & collect rent online, upload property Ads, store rental info and much more."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("a", {
        staticClass: "fab footersocialiconfb fa-facebook-square ml-3",
        attrs: {
          href: "https://www.facebook.com/rentpropertyatEKO",
          target: "_blank"
        }
      }),
      _vm._v(" "),
      _c("a", {
        staticClass: "fab footersocialiconinsta fa-instagram  mx-1",
        attrs: {
          href: "https://www.instagram.com/rentpropertyatEKO/",
          target: "_blank"
        }
      }),
      _vm._v(" "),
      _c("a", {
        staticClass: "fab footersocialicontweet fa-twitter-square  mx-1",
        attrs: { href: "https://twitter.com/ekirayaonline", target: "_blank" }
      }),
      _vm._v(" "),
      _c("a", {
        staticClass: "fab footersocialiconwhats fa-whatsapp-square mx-1",
        attrs: { href: "#", target: "_blank" }
      }),
      _vm._v(" "),
      _c("a", {
        staticClass: "fab footersocialiconyoutube fa-youtube mx-1",
        attrs: {
          href: "https://www.youtube.com/channel/UCPpOfp6kMh3G2TZmjIpQqQg",
          target: "_blank"
        }
      }),
      _vm._v(" "),
      _c("a", {
        staticClass: "fab footersocialicongoogle fa-google-plus-square  mx-1",
        attrs: { href: "" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Header.vue?vue&type=template&id=776c1bf6&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/Header.vue?vue&type=template&id=776c1bf6&scoped=true& ***!
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
      _c(
        "scroll-fixed-header",
        {
          attrs: { fixed: _vm.fixed, threshold: 56 },
          on: {
            "update:fixed": function($event) {
              _vm.fixed = $event
            }
          }
        },
        [
          _c("header", { staticClass: "clearfix", attrs: { id: "header" } }, [
            _c(
              "nav",
              { staticClass: "navbar navbar-default  navbar-expand-lg" },
              [
                _c(
                  "div",
                  { staticClass: "container-fluid p-2 mx-2" },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "navbar-toggler",
                        attrs: {
                          type: "button",
                          "data-toggle": "collapse",
                          "data-target": "#tr-mainmenu",
                          "aria-controls": "tr-mainmenu",
                          "aria-expanded": "false",
                          "aria-label": "Toggle navigation"
                        }
                      },
                      [
                        _c("span", { staticClass: "navbar-toggler-icon" }, [
                          _c("i", { staticClass: "fa fa-align-justify" })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      { staticClass: "navbar-brand", attrs: { to: "/" } },
                      [
                        _c("img", {
                          staticStyle: { width: "100px" },
                          attrs: {
                            src: _vm.$store.state.serverPath + "images/eko.png",
                            alt: "Logo"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "collapse navbar-collapse",
                        attrs: { id: "tr-mainmenu" }
                      },
                      [
                        _c("ul", { staticClass: "nav navbar-nav mx-auto" }, [
                          _c(
                            "li",
                            { staticClass: "nav-item" },
                            [
                              _c(
                                "router-link",
                                { staticClass: "nav-link", attrs: { to: "/" } },
                                [_vm._v("Home")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "nav-item" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "nav-link",
                                  attrs: { to: "/about-us" }
                                },
                                [_vm._v("About Us")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "nav-item" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "nav-link",
                                  attrs: { to: "/How-Eko-Works" }
                                },
                                [_vm._v("How EKO Works")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "nav-item" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "nav-link",
                                  attrs: { to: "/project" }
                                },
                                [_vm._v("Projects")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "nav-item" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "nav-link",
                                  attrs: { to: "/Faqs" }
                                },
                                [_vm._v("Help/Support")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "nav-item" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "nav-link",
                                  attrs: { to: "/blogs" }
                                },
                                [_vm._v("blog")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "nav-item" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "nav-link",
                                  attrs: { to: "/contact-us" }
                                },
                                [_vm._v("Contact Us")]
                              )
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "nav-right" }, [
                          !_vm.$store.state.isLoggedIn
                            ? _c("ul", { staticClass: "sign-in" }, [
                                _c(
                                  "li",
                                  { staticClass: "nav-item" },
                                  [
                                    _c(
                                      "router-link",
                                      { attrs: { to: "/login" } },
                                      [_vm._v(" Sign In ")]
                                    )
                                  ],
                                  1
                                )
                              ])
                            : _c("ul", { staticClass: "sign-in" }, [
                                _c(
                                  "li",
                                  [
                                    _vm.$store.state.profile.role === "admin"
                                      ? _c(
                                          "router-link",
                                          {
                                            staticClass: "dashboard",
                                            attrs: { to: "/admin" }
                                          },
                                          [
                                            _c("img", {
                                              attrs: {
                                                src: "/images/bg/user.png",
                                                alt: ""
                                              }
                                            })
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  [
                                    _vm.$store.state.profile.role ===
                                    "landloard"
                                      ? _c(
                                          "router-link",
                                          { attrs: { to: "/landloard" } },
                                          [
                                            _c("img", {
                                              attrs: {
                                                src: "/images/bg/user.png",
                                                alt: ""
                                              }
                                            })
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  [
                                    _vm.$store.state.profile.role === "csr"
                                      ? _c(
                                          "router-link",
                                          { attrs: { to: "/csr" } },
                                          [
                                            _c("img", {
                                              attrs: {
                                                src: "/images/bg/user.png",
                                                alt: ""
                                              }
                                            })
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  [
                                    _vm.$store.state.profile.role === "tenant"
                                      ? _c(
                                          "router-link",
                                          { attrs: { to: "/tenant" } },
                                          [
                                            _c("img", {
                                              attrs: {
                                                src: "/images/bg/user.png",
                                                alt: ""
                                              }
                                            })
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  [
                                    _vm.$store.state.profile.role === "employee"
                                      ? _c(
                                          "router-link",
                                          { attrs: { to: "/employee" } },
                                          [
                                            _c("img", {
                                              attrs: {
                                                src: "/images/bg/user.png",
                                                alt: ""
                                              }
                                            })
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  [
                                    _vm.$store.state.profile.role === "manager"
                                      ? _c(
                                          "router-link",
                                          { attrs: { to: "/manager" } },
                                          [
                                            _c("img", {
                                              attrs: {
                                                src: "/images/bg/user.png",
                                                alt: ""
                                              }
                                            })
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ]),
                          _vm._v(" "),
                          _c("ul", { staticClass: "sign-in" }, [
                            _vm.$store.state.profile.role === "admin"
                              ? _c(
                                  "li",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "btn post-ad",
                                        attrs: { to: "/add-property-admin" }
                                      },
                                      [
                                        _vm._v("Post Your Ad "),
                                        _c("i", {
                                          staticClass: "fa fa-plus text-white"
                                        })
                                      ]
                                    )
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.$store.state.profile.role === "landloard"
                              ? _c(
                                  "li",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "btn post-ad",
                                        attrs: { to: "/property-landlord" }
                                      },
                                      [
                                        _vm._v("Post Your Ad "),
                                        _c("i", {
                                          staticClass: "fa fa-plus text-white"
                                        })
                                      ]
                                    )
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.$store.state.profile.role === "employee"
                              ? _c(
                                  "li",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "btn post-ad",
                                        attrs: { to: "/property-employee" }
                                      },
                                      [
                                        _vm._v("Post Your Ad "),
                                        _c("i", {
                                          staticClass: "fa fa-plus text-white"
                                        })
                                      ]
                                    )
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.$store.state.profile.role === "manager"
                              ? _c(
                                  "li",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "btn post-ad",
                                        attrs: { to: "/property" }
                                      },
                                      [
                                        _vm._v("Post Your Ad "),
                                        _c("i", {
                                          staticClass: "fa fa-plus text-white"
                                        })
                                      ]
                                    )
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.$store.state.isLoggedIn
                              ? _c(
                                  "li",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "btn post-ad",
                                        attrs: { to: "/add-property" }
                                      },
                                      [
                                        _vm._v("Post Your Ad "),
                                        _c("i", {
                                          staticClass: "fa fa-plus text-white"
                                        })
                                      ]
                                    )
                                  ],
                                  1
                                )
                              : _vm._e()
                          ])
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/user/Footer.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/user/Footer.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_5639b804_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=5639b804&scoped=true& */ "./resources/js/components/user/Footer.vue?vue&type=template&id=5639b804&scoped=true&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/components/user/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Footer_vue_vue_type_style_index_0_id_5639b804_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.vue?vue&type=style&index=0&id=5639b804&scoped=true&lang=css& */ "./resources/js/components/user/Footer.vue?vue&type=style&index=0&id=5639b804&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_5639b804_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_5639b804_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5639b804",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/Footer.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/user/Footer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/Footer.vue?vue&type=style&index=0&id=5639b804&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/user/Footer.vue?vue&type=style&index=0&id=5639b804&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_5639b804_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=style&index=0&id=5639b804&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Footer.vue?vue&type=style&index=0&id=5639b804&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_5639b804_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_5639b804_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_5639b804_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_5639b804_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/user/Footer.vue?vue&type=template&id=5639b804&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/user/Footer.vue?vue&type=template&id=5639b804&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_5639b804_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=5639b804&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Footer.vue?vue&type=template&id=5639b804&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_5639b804_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_5639b804_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/Header.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/user/Header.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_776c1bf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=776c1bf6&scoped=true& */ "./resources/js/components/user/Header.vue?vue&type=template&id=776c1bf6&scoped=true&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/components/user/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Header_vue_vue_type_style_index_0_id_776c1bf6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.vue?vue&type=style&index=0&id=776c1bf6&scoped=true&lang=css& */ "./resources/js/components/user/Header.vue?vue&type=style&index=0&id=776c1bf6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_776c1bf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_776c1bf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "776c1bf6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/Header.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/user/Header.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/Header.vue?vue&type=style&index=0&id=776c1bf6&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/user/Header.vue?vue&type=style&index=0&id=776c1bf6&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_776c1bf6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=style&index=0&id=776c1bf6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Header.vue?vue&type=style&index=0&id=776c1bf6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_776c1bf6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_776c1bf6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_776c1bf6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_776c1bf6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/user/Header.vue?vue&type=template&id=776c1bf6&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/user/Header.vue?vue&type=template&id=776c1bf6&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_776c1bf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=776c1bf6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Header.vue?vue&type=template&id=776c1bf6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_776c1bf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_776c1bf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/main_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/main_service.js ***!
  \***********************************************/
/*! exports provided: getCities, getAbout, getUser, getFaq, getHeader, getCountData, getPropertyType, getProperty, getPopularProperties, getCity, getSector, loadSector, getProperties, myads, favourite, hotFavourite, like, hotlike, unLike, hotUnLike, hotUnFavourite, unFavourite, getFavouriteProperty, getPropertyDetail, searchProperty, visitProperty, getHotProperty, getTop, loadProperty, recommendedProp, loadrecommendedProp, updateReservedProperty, subscriber, getSubscriber, deletSubsciber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCities", function() { return getCities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAbout", function() { return getAbout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFaq", function() { return getFaq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeader", function() { return getHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountData", function() { return getCountData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertyType", function() { return getPropertyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return getProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopularProperties", function() { return getPopularProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCity", function() { return getCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSector", function() { return getSector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSector", function() { return loadSector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperties", function() { return getProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myads", function() { return myads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favourite", function() { return favourite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hotFavourite", function() { return hotFavourite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "like", function() { return like; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hotlike", function() { return hotlike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unLike", function() { return unLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hotUnLike", function() { return hotUnLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hotUnFavourite", function() { return hotUnFavourite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unFavourite", function() { return unFavourite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavouriteProperty", function() { return getFavouriteProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertyDetail", function() { return getPropertyDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchProperty", function() { return searchProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitProperty", function() { return visitProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotProperty", function() { return getHotProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTop", function() { return getTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProperty", function() { return loadProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recommendedProp", function() { return recommendedProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadrecommendedProp", function() { return loadrecommendedProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateReservedProperty", function() { return updateReservedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscriber", function() { return subscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubscriber", function() { return getSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletSubsciber", function() { return deletSubsciber; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function getCities() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-cities');
}
function getAbout() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/about-us');
}
function getUser() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-team-member');
}
function getFaq() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/faqs');
}
function getHeader() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/headers');
}
function getCountData() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-count-data');
}
function getPropertyType() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-pro');
}
function getProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-properties-front');
}
function getPopularProperties() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-popular-properties');
}
function getCity() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-cities-front');
}
function getSector(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-sector-front', request);
}
function loadSector(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("get-sector-front?page=".concat(nextPage));
}
function getProperties() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-property-front');
}
function myads() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-myads');
}
function favourite(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/favourite', data);
}
function hotFavourite(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/favourite', data);
}
function like(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/like', data);
}
function hotlike(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/like', data);
}
function unLike(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/un-like', data);
}
function hotUnLike(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/un-like', data);
} // export function reservedProperty(data) {
//     return http().post('/property-reserved', data);
// }

function hotUnFavourite(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/un-favourite', data);
}
function unFavourite(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/un-favourite', data);
}
function getFavouriteProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-favourite-properties');
}
function getPropertyDetail(slug) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/get-property-details/".concat(slug));
}
function searchProperty(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/search-property', request);
} // export function mouseOver(data) {
//     return http().post("mouse-over", data);
// }

function visitProperty(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/visit-property", data);
}
function getHotProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-property-hot');
}
function getTop(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/top-property", data);
} // export function reservedProperty(id){
//     return http().post(`/property-reserved/${id}`);
// }

function loadProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("get-properties-front?page=".concat(nextPage));
}
function recommendedProp(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/recommended-properties/".concat(id));
}
function loadrecommendedProp(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("recommended-properties?page=".concat(nextPage));
} // export function recommendedProperty(id){
//     return http().post(`/recommended-properties/${id}`);
// }

function updateReservedProperty(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/property-reserved-update', data);
}
function subscriber(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/subscribers', data);
}
function getSubscriber() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/subscribers');
}
function deletSubsciber(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/subscribers/".concat(id));
}

/***/ })

}]);