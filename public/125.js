(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[125],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/SingleBlog.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/SingleBlog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_user_Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/user/Header.vue */ "./resources/js/components/user/Header.vue");
/* harmony import */ var _components_user_Footer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/user/Footer.vue */ "./resources/js/components/user/Footer.vue");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Header: _components_user_Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Footer: _components_user_Footer_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      blogs: []
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
              return MainService.getPropertyDetail(to.params.slug);

            case 3:
              response = _context.sent;

              if (!response) {
                next('/404');
              }

              next(function (vm) {
                vm.properties = response.data;
                vm.city_id = response.data.city_id; // vm.getProperty();
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
  methods: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/SingleBlog.vue?vue&type=style&index=0&id=01f2c53f&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/SingleBlog.vue?vue&type=style&index=0&id=01f2c53f&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.comments[data-v-01f2c53f]{\n    padding-right: 20px;\n    padding-left: 20px;\n    padding-top: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/SingleBlog.vue?vue&type=style&index=0&id=01f2c53f&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/SingleBlog.vue?vue&type=style&index=0&id=01f2c53f&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleBlog.vue?vue&type=style&index=0&id=01f2c53f&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/SingleBlog.vue?vue&type=style&index=0&id=01f2c53f&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/SingleBlog.vue?vue&type=template&id=01f2c53f&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/SingleBlog.vue?vue&type=template&id=01f2c53f&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    return _c("section", { staticClass: "banner blog" }, [
      _c("div", { staticClass: "container banner-img " }, [
        _c("img", { attrs: { src: "images/bg/2.jpg ", alt: "" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "blog" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-8", attrs: { id: "blogsection1" } },
            [
              _c("div", { staticClass: "blog-footer" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("p", [
                      _c(
                        "i",
                        {
                          staticClass: "fa fa-user-circle-o",
                          attrs: { "aria-hidden": "true" }
                        },
                        [_vm._v(" eKRAYA News Desk")]
                      ),
                      _vm._v(" "),
                      _c("br"),
                      _c("strong", [_vm._v("Posted On :")]),
                      _vm._v("JANUARY,12/2020")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6 " }, [
                    _c("div", { staticClass: "pull-right blog-icon" }, [
                      _c("li", { staticClass: "d-inline" }, [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("i", { staticClass: "fa fa-facebook" })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "d-inline" }, [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("i", { staticClass: "fa fa-twitter" })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "d-inline" }, [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("i", { staticClass: "fa fa-google-plus" })
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "blog-header1" }, [
                _c("img", {
                  staticClass: "img-fluid w-100",
                  attrs: { src: "images/blog/blog1.jpg", alt: "" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "blog-title" }, [
                _c("h3", [_vm._v("DO you have something-sell")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "blog-content" }, [
                _c("p", [
                  _vm._v(
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quibusdam impedit corrupti sed error. Dolorem aliquid fugit numquam voluptatibus soluta nisi praesentium omnis inventore nesciunt a. Magnam qui atque Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad repudiandae nisi doloribus aliquid, porro natus qui, esse quo officia unde quia. Tempore similique autem consequuntur? Iusto repudiandae corrupti saepe illo."
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "blog-postfooter" }, [
                _c("div", { staticClass: "row" }, [
                  _c("form", { attrs: { action: "" } }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("h3", { staticClass: "font-weight-bold" }, [
                        _vm._v("LEAVE A REPLY")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "Your email address will not be published. Required fields are marked *"
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "exampleFormControlTextarea1" } },
                          [_vm._v("Message")]
                        ),
                        _vm._v(" "),
                        _c("textarea", {
                          staticClass: "form-control",
                          attrs: { name: "message", rows: "3" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row m-2" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "username",
                              placeholder: "Name*",
                              required: ""
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "email",
                              name: "email",
                              placeholder: "Email*",
                              required: ""
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "webname",
                              placeholder: "Website"
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "m-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-success font-weight-bold",
                          attrs: { href: "#", type: "submit", name: "submit" }
                        },
                        [_vm._v("POST COMMENT")]
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("h5", [_vm._v("Comments")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "comments bg-light border shadow p-4 " },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-2 " }, [
                      _c("img", {
                        staticClass: "img-fluid",
                        staticStyle: { width: "80px", height: "60px" },
                        attrs: { src: "images/blog/person.png", alt: "" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3  mt-2" }, [
                      _c("p", { staticClass: "font-weight-bold" }, [
                        _c("u", [_vm._v("David Cruise")])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-md-10 mx-auto border shadow font-italic p-2",
                        staticStyle: { "background-color": "white" }
                      },
                      [
                        _c("p", [
                          _vm._v(
                            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima nulla molestias rerum doloremque dignissimos doloribus eius fuga, unde, minus atque quam, corporis magni optio. Nesciunt reiciendis quidem consequuntur dolor."
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-muted" }, [
                          _vm._v("Commented ON: 20-january-2020")
                        ])
                      ]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c("h2", { staticClass: "mt-3" }, [_vm._v("TRENDING NOW")]),
              _c("br"),
              _vm._v(" "),
              _c("div", { staticClass: "trending-post" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("img", {
                      staticClass: "img-fluid w-100",
                      attrs: { src: "images/blog/blog1.jpg", alt: "" }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "blog-title" }, [
                      _c("h5", { staticClass: "font-weight" }, [
                        _vm._v("DO you have something-sell")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("img", {
                      staticClass: "img-fluid w-100",
                      attrs: { src: "images/blog/blog1.jpg", alt: "" }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "blog-title" }, [
                      _c("h5", { staticClass: "font-weight" }, [
                        _vm._v("DO you have something-sell")
                      ])
                    ])
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4 blog " }, [
            _c("div", { staticClass: "blog-ad" }, [
              _c("div", { staticClass: "blogad-img" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: { src: "images/blog/1.jpg", alt: "" }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "social-media mt-5" }, [
              _c("div", { staticClass: "socialmedia-header" }, [
                _c("h3", { staticClass: "text-center mb-4" }, [
                  _vm._v(" Social Media Follower")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "socialmedia-content mx-3" }, [
                _c("div", { staticClass: "row " }, [
                  _c(
                    "div",
                    { staticClass: "col-md-4 p-3 text-light Facebook" },
                    [
                      _c("p", { staticClass: "text-center" }, [
                        _vm._v("Facebook")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-center" }, [_vm._v("14.5k")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-4 p-3  text-light Instagram " },
                    [
                      _c("p", { staticClass: "text-center" }, [
                        _vm._v("Instagram")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-center" }, [_vm._v("10.2k")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-4 p-3  text-light Twitter" },
                    [
                      _c("p", { staticClass: "text-center" }, [
                        _vm._v("Twitter")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-center" }, [_vm._v("7.5k")])
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "subscribe-newsletter bg-warning my-5 p-4" },
              [
                _c("h3", { staticClass: "text-center text-light" }, [
                  _vm._v("NEWSLETTER")
                ]),
                _vm._v(" "),
                _c("form", { attrs: { method: "post" } }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "email",
                        id: "exampleInputEmail1",
                        "aria-describedby": "emailHelp",
                        placeholder: "Enter Your Email Adress"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "small",
                      {
                        staticClass: "form-text text-light text-center",
                        attrs: { id: "emailHelp" }
                      },
                      [_vm._v("We'll never share your email with anyone else.")]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary d-block mx-auto",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("Submit")]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "blog-ad" }, [
              _c("div", { staticClass: "blogad-img" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: { src: "images/blog/4.jpg", alt: "" }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "blog-ad" }, [
              _c("div", { staticClass: "blogad-img" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: { src: "images/blog/postad.jpg", alt: "" }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "blog-ad" }, [
              _c("div", { staticClass: "blogad-img" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: { src: "images/blog/5.jpg", alt: "" }
                })
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/user/SingleBlog.vue":
/*!************************************************!*\
  !*** ./resources/js/views/user/SingleBlog.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleBlog_vue_vue_type_template_id_01f2c53f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleBlog.vue?vue&type=template&id=01f2c53f&scoped=true& */ "./resources/js/views/user/SingleBlog.vue?vue&type=template&id=01f2c53f&scoped=true&");
/* harmony import */ var _SingleBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleBlog.vue?vue&type=script&lang=js& */ "./resources/js/views/user/SingleBlog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SingleBlog_vue_vue_type_style_index_0_id_01f2c53f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleBlog.vue?vue&type=style&index=0&id=01f2c53f&scoped=true&lang=css& */ "./resources/js/views/user/SingleBlog.vue?vue&type=style&index=0&id=01f2c53f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SingleBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleBlog_vue_vue_type_template_id_01f2c53f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleBlog_vue_vue_type_template_id_01f2c53f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "01f2c53f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/SingleBlog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/SingleBlog.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/user/SingleBlog.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleBlog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/SingleBlog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/SingleBlog.vue?vue&type=style&index=0&id=01f2c53f&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/user/SingleBlog.vue?vue&type=style&index=0&id=01f2c53f&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleBlog_vue_vue_type_style_index_0_id_01f2c53f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleBlog.vue?vue&type=style&index=0&id=01f2c53f&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/SingleBlog.vue?vue&type=style&index=0&id=01f2c53f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleBlog_vue_vue_type_style_index_0_id_01f2c53f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleBlog_vue_vue_type_style_index_0_id_01f2c53f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleBlog_vue_vue_type_style_index_0_id_01f2c53f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleBlog_vue_vue_type_style_index_0_id_01f2c53f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/user/SingleBlog.vue?vue&type=template&id=01f2c53f&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/user/SingleBlog.vue?vue&type=template&id=01f2c53f&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleBlog_vue_vue_type_template_id_01f2c53f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleBlog.vue?vue&type=template&id=01f2c53f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/SingleBlog.vue?vue&type=template&id=01f2c53f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleBlog_vue_vue_type_template_id_01f2c53f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleBlog_vue_vue_type_template_id_01f2c53f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);