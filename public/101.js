(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[101],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Blogs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/Blogs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_user_Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/user/Header.vue */ "./resources/js/components/user/Header.vue");
/* harmony import */ var _components_user_Footer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/user/Footer.vue */ "./resources/js/components/user/Footer.vue");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/blog_service */ "./resources/js/services/blog_service.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/main_service */ "./resources/js/services/main_service.js");


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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Blogs",
  components: {
    Header: _components_user_Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Footer: _components_user_Footer_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  metaInfo: function metaInfo() {
    return {
      title: "blogs",
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
      blogs: [],
      subscriberData: {
        email: ''
      },
      errors: {}
    };
  },
  mounted: function mounted() {
    this.getBlog();
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
                return _services_main_service__WEBPACK_IMPORTED_MODULE_4__["subscriber"](this.subscriberData);

              case 3:
                response = _context.sent;
                this.flashMessage.success({
                  message: 'Subscriber Data Added Successfuly!',
                  time: 5000
                });
                this.subscriberData.email = "";
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 5000
                });

              case 11:
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
    }(),
    getBlog: function () {
      var _getBlog = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_blog_service__WEBPACK_IMPORTED_MODULE_3__["getBlog"]();

              case 3:
                response = _context2.sent;
                this.blogs = response.data;
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 5000
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function getBlog() {
        return _getBlog.apply(this, arguments);
      }

      return getBlog;
    }() // loadBlog:async function() {
    //         try {
    //                 const response =  await blogService.loadBlog(this.nextPage)
    //                 if(response.data.current_page < response.data.last_page){
    //                     this.moreExists = true;
    //                     this.nextPage = response.data.current_page + 1;
    //                 }else{
    //                     this.moreExists = false;
    //                 }
    //                 response.data.data.forEach(data => {
    //                 this.blogs.push(data);
    //             });
    //         } catch (error) {
    //             this.flashMessage.error({
    //                 message: "Some error occurred during load more Cities",
    //                 time:5000
    //             });
    //         }
    // },

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Blogs.vue?vue&type=template&id=b7c6d528&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/Blogs.vue?vue&type=template&id=b7c6d528& ***!
  \********************************************************************************************************************************************************************************************************/
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
      _c("section", { staticClass: "banner blog" }, [
        _c("div", { staticClass: "banner-img" }, [
          _c("img", {
            attrs: {
              src: _vm.$store.state.serverPath + "images/blog/blogcover.jpg",
              alt: ""
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "blog" }, [
        _c("div", { staticClass: "container" }, [
          _c("p", { staticClass: "my-3" }, [
            _vm._v(
              "EKO Blog is powered by Pakistan's 1st largest-ever complete rental management website. Get access to quality tips, advice, articles and strategies regarding Real estate and property. Our EKO experts would provide important tips and commentary about how to achieve success in letting tenants find their dream property for rent as well as let landlords rent their property and gain potential tenants. Beside Rental topics, other general topics regarding Real Estate are also covered such as home decoration tips and renovation ideas, travel destinations, property laws, real estate events and info regardingother free resources."
            )
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-md-8", attrs: { id: "blogsection1" } },
              _vm._l(_vm.blogs, function(blog, index) {
                return _c("div", { key: index }, [
                  _c(
                    "div",
                    { staticClass: "blog-header1" },
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "single-blogs",
                              params: { slug: blog.slug }
                            }
                          }
                        },
                        [
                          _c("img", {
                            staticClass: "img-fluid w-100",
                            attrs: {
                              src:
                                _vm.$store.state.serverPath +
                                "storage/" +
                                blog.blog_picture,
                              alt: ""
                            }
                          })
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "blog-title" },
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "single-blogs",
                              params: { slug: blog.slug }
                            }
                          }
                        },
                        [
                          _c("h5", { staticStyle: { color: "#f8f9fa" } }, [
                            _vm._v(_vm._s(blog.title))
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "blog-content" }, [
                    _c("p", {
                      domProps: { innerHTML: _vm._s(blog.blog_description) }
                    })
                  ]),
                  _vm._v(" "),
                  _vm._m(2, true)
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 blog " }, [
              _vm._m(3),
              _vm._v(" "),
              _vm._m(4),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "subscribe-newsletter bg-info my-5 p-4" },
                [
                  _c("h3", { staticClass: "text-center text-light" }, [
                    _vm._v("NEWS LETTER")
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
                              _c("strong", [
                                _vm._v(_vm._s(_vm.errors.email[0]))
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            staticClass: "form-text text-light text-center",
                            attrs: { id: "emailHelp" }
                          },
                          [
                            _vm._v(
                              "We'll never share your email with anyone else."
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-success d-block mx-auto",
                          attrs: { type: "btn" }
                        },
                        [_vm._v("Submit")]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(5),
              _vm._v(" "),
              _vm._m(6),
              _vm._v(" "),
              _vm._m(7),
              _vm._v(" "),
              _vm._m(8),
              _vm._v(" "),
              _vm._m(9),
              _vm._v(" "),
              _vm._m(10),
              _vm._v(" "),
              _vm._m(11)
            ])
          ])
        ])
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
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "bloglatest" }, [
          _c("div", { staticClass: "blog-img" }, [
            _c("img", {
              staticClass: "img-fluid",
              attrs: { src: "images/blog/blognews.jpg", alt: "" }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "bloglatest" }, [
          _c("div", { staticClass: "blog-img2" }, [
            _c(
              "a",
              {
                attrs: { href: "https://equranforyou.com/", target: "_blank" }
              },
              [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: { src: "images/blog/news2.jpg", alt: "" }
                })
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "bloglatest" }, [
          _c("div", { staticClass: "blog-img2" }, [
            _c("a", {
              attrs: { href: "https://eko.com.pk/", target: "_blank" }
            }),
            _vm._v(" "),
            _c("img", {
              staticClass: "img-fluid",
              attrs: { src: "images/blog/postad.jpg", alt: "" }
            })
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [_vm._v("Recent Post "), _c("hr")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "blog-footer" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6" }, [
          _c("p", [
            _vm._v("JANUARY,12/2020 "),
            _c("strong", [_vm._v("BY Admin")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 " }, [
          _c(
            "div",
            {
              staticClass: "pull-right d-flex justify-content-center blog-icon"
            },
            [
              _c("div", { staticClass: "pull-right blog-icon" }, [
                _c("li", { staticClass: "d-inline" }, [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "fa fa-heart" })
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "d-inline" }, [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "fa fa-eye" }, [_vm._v("2 viewer")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "d-inline",
                    attrs: { onclick: "myFunction()" }
                  },
                  [_c("i", { staticClass: "fa fa-comment" })]
                )
              ])
            ]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "blog-ad" }, [
      _c("div", { staticClass: "blogad-img" }, [
        _c(
          "a",
          { attrs: { href: "https://www.smartcitypk.com/", target: "_blank" } },
          [
            _c("img", {
              staticClass: "img-fluid",
              attrs: { src: "images/blog/1.jpg", alt: "" }
            })
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "social-media mt-5" }, [
      _c("div", { staticClass: "socialmedia-header" }, [
        _c("h3", { staticClass: "text-center mb-4" }, [
          _vm._v(" Social Media Follower")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "socialmedia-content mx-3" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-4 p-3 Facebook" }, [
            _c(
              "a",
              {
                attrs: {
                  href: "https://www.facebook.com/rentpropertyatEKO",
                  target: "_blank"
                }
              },
              [
                _c("p", { staticClass: "text-center text-white" }, [
                  _vm._v("Facebook")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-center text-white" }, [
                  _vm._v("565")
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4 p-3 Instagram" }, [
            _c(
              "a",
              {
                attrs: {
                  href: "https://www.instagram.com/rentpropertyatEKO/",
                  target: "_blank"
                }
              },
              [
                _c("p", { staticClass: "text-center text-white" }, [
                  _vm._v("Instagram")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-center text-white" }, [
                  _vm._v("10.2k")
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4 p-3 Twitter" }, [
            _c(
              "a",
              {
                attrs: {
                  href: "https://twitter.com/ekirayaonline",
                  target: "_blank"
                }
              },
              [
                _c("p", { staticClass: "text-center text-white" }, [
                  _vm._v("Twitter")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-center text-white" }, [
                  _vm._v("7.5k")
                ])
              ]
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "blog-ad" }, [
      _c("div", { staticClass: "blogad-img" }, [
        _c(
          "a",
          { attrs: { href: "http://fazal.marketing/", target: "_blank" } },
          [
            _c("img", {
              staticClass: "img-fluid",
              attrs: { src: "images/blog/2.jpg", alt: "" }
            })
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "blog-ad" }, [
      _c("div", { staticClass: "blogad-img" }, [
        _c("img", {
          staticClass: "img-fluid",
          attrs: { src: "images/blog/postad.jpg", alt: "" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "blog-ad" }, [
      _c("div", { staticClass: "blogad-img" }, [
        _c(
          "a",
          { attrs: { href: "http://fazal.marketing/", target: "_blank" } },
          [
            _c("img", {
              staticClass: "img-fluid",
              attrs: { src: "images/blog/6.jpg", alt: "" }
            })
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "blog-ad" }, [
      _c("div", { staticClass: "blogad-img" }, [
        _c(
          "a",
          { attrs: { href: "http://fazal.marketing/", target: "_blank" } },
          [
            _c("img", {
              staticClass: "img-fluid",
              attrs: { src: "images/blog/3.jpg", alt: "" }
            })
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "blog-ad" }, [
      _c("div", { staticClass: "blogad-img" }, [
        _c(
          "a",
          {
            attrs: {
              href: "https://eko.com.pk/advartisment-detail",
              target: "_blank"
            }
          },
          [
            _c("img", {
              staticClass: "img-fluid",
              attrs: { src: "images/blog/4.jpg", alt: "" }
            })
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "blog-ad" }, [
      _c("div", { staticClass: "blogad-img" }, [
        _c(
          "a",
          {
            attrs: { href: "http://fazaltechnologies.com/", target: "_blank" }
          },
          [
            _c("img", {
              staticClass: "img-fluid",
              attrs: { src: "images/blog/5.jpg", alt: "" }
            })
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "blog-ad" }, [
      _c("div", { staticClass: "blogad-img" }, [
        _c("img", {
          staticClass: "img-fluid",
          attrs: { src: "images/blog/postad.jpg", alt: "" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/blog_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/blog_service.js ***!
  \***********************************************/
/*! exports provided: createBlog, getBlog, loadBlog, deleteBlog, updateBlog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlog", function() { return createBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlog", function() { return getBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBlog", function() { return loadBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBlog", function() { return deleteBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBlog", function() { return updateBlog; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createBlog(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/blogs', data);
}
function getBlog() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-blogs');
}
function loadBlog(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("blogs?page=".concat(nextPage));
}
function deleteBlog(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/blogs/".concat(id));
}
function updateBlog(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("/blogs/".concat(id), data);
}

/***/ }),

/***/ "./resources/js/views/user/Blogs.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/user/Blogs.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blogs_vue_vue_type_template_id_b7c6d528___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blogs.vue?vue&type=template&id=b7c6d528& */ "./resources/js/views/user/Blogs.vue?vue&type=template&id=b7c6d528&");
/* harmony import */ var _Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blogs.vue?vue&type=script&lang=js& */ "./resources/js/views/user/Blogs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Blogs_vue_vue_type_template_id_b7c6d528___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Blogs_vue_vue_type_template_id_b7c6d528___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/Blogs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/Blogs.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/user/Blogs.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Blogs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Blogs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/Blogs.vue?vue&type=template&id=b7c6d528&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/user/Blogs.vue?vue&type=template&id=b7c6d528& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_template_id_b7c6d528___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Blogs.vue?vue&type=template&id=b7c6d528& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Blogs.vue?vue&type=template&id=b7c6d528&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_template_id_b7c6d528___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_template_id_b7c6d528___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);