(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Blogs.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Blogs.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/city_service */ "./resources/js/services/city_service.js");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/blog_service */ "./resources/js/services/blog_service.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Blog",
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_1__["VueEditor"]
  },
  data: function data() {
    return {
      query: "",
      blogs: [],
      editBlogData: {},
      blogData: {
        title: '',
        description: '',
        blogpicture: ''
      },
      moreExists: false,
      nextPage: 0,
      errors: {}
    };
  },
  mounted: function mounted() {
    this.getBlog();
  },
  methods: {
    createBlog: function () {
      var _createBlog = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                formData = new FormData();
                formData.append("title", this.blogData.title);
                formData.append("description", this.blogData.description);
                formData.append("blogpicture", this.blogData.blogpicture);
                _context.next = 7;
                return _services_blog_service__WEBPACK_IMPORTED_MODULE_3__["createBlog"](formData);

              case 7:
                response = _context.sent;
                this.blogs.unshift(response.data);
                this.flashMessage.success({
                  message: 'City Data Added Successfuly!',
                  time: 5000
                });
                this.blogData.title = "";
                this.blogData.description = "";
                this.blogData.blogpicture = "";
                _context.next = 24;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](0);
                _context.t1 = _context.t0.response.status;
                _context.next = _context.t1 === 422 ? 20 : 22;
                break;

              case 20:
                this.errors = _context.t0.response.data.errors;
                return _context.abrupt("break", 24);

              case 22:
                this.flashMessage.error({
                  message: 'Some error occured !',
                  time: 500
                });
                return _context.abrupt("break", 24);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 15]]);
      }));

      function createBlog() {
        return _createBlog.apply(this, arguments);
      }

      return createBlog;
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
                this.blogs = response.data; // if(response.data.current_page < response.data.last_page)
                //     {
                //         this.moreExists = true;
                //         this.nextPage = response.data.current_page + 1;
                //     }
                //     else{
                //         this.moreExists = false;
                //     }

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
    }(),
    deleteBlog: function () {
      var _deleteBlog = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(blog) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (window.confirm("Are you sure you want to delete this Blog")) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.prev = 2;
                _context3.next = 5;
                return _services_blog_service__WEBPACK_IMPORTED_MODULE_3__["deleteBlog"](blog.id);

              case 5:
                this.blogs = this.blogs.filter(function (obj) {
                  return obj.id != blog.id;
                });
                this.flashMessage.success({
                  message: 'Blog deleted successfuly!',
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

      function deleteBlog(_x) {
        return _deleteBlog.apply(this, arguments);
      }

      return deleteBlog;
    }(),
    editBlog: function () {
      var _editBlog = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(blog) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.editBlogData = _objectSpread({}, blog);
                this.$refs.editBlog.show();

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function editBlog(_x2) {
        return _editBlog.apply(this, arguments);
      }

      return editBlog;
    }(),
    updateBlog: function () {
      var _updateBlog = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                formData = new FormData();
                formData.append("title", this.editBlogData.title);
                formData.append("blog_description", this.editBlogData.blog_description);
                formData.append("blog_picture", this.editBlogData.blog_picture);
                formData.append("_method", "put");
                _context5.next = 8;
                return _services_blog_service__WEBPACK_IMPORTED_MODULE_3__["updateBlog"](this.editBlogData.id, formData);

              case 8:
                response = _context5.sent;
                this.blogs.map(function (blogs) {
                  if (blogs.id == response.data.id) {
                    for (var key in response.data) {
                      blogs[key] = response.data[key];
                    }
                  }
                });
                this.hideEditModal();
                this.flashMessage.success({
                  message: 'Blog Updated successfully!',
                  time: 5000
                });
                _context5.next = 23;
                break;

              case 14:
                _context5.prev = 14;
                _context5.t0 = _context5["catch"](0);
                _context5.t1 = _context5.t0.response.status;
                _context5.next = _context5.t1 === 422 ? 19 : 21;
                break;

              case 19:
                this.errors = _context5.t0.response.data.errors;
                return _context5.abrupt("break", 23);

              case 21:
                this.flashMessage.error({
                  message: 'Some error occured !',
                  time: 500
                });
                return _context5.abrupt("break", 23);

              case 23:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 14]]);
      }));

      function updateBlog() {
        return _updateBlog.apply(this, arguments);
      }

      return updateBlog;
    }(),
    showModal: function showModal() {
      this.$refs.newCityModal.show();
    },
    hideModal: function hideModal() {
      this.$refs.newCityModal.hide();
    },
    hideEditModal: function hideEditModal() {
      this.$refs.editBlog.hide();
    },
    editAttachImage: function editAttachImage() {
      this.editBlogData.blog_picture = this.$refs.editBlogImage.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        this.$refs.editImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.editBlogData.blog_picture);
    },
    loadBlog: function () {
      var _loadBlog = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _this = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _services_blog_service__WEBPACK_IMPORTED_MODULE_3__["loadBlog"](this.nextPage);

              case 3:
                response = _context6.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                response.data.data.forEach(function (data) {
                  _this.blogs.push(data);
                });
                _context6.next = 11;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred during load more Cities",
                  time: 5000
                });

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 8]]);
      }));

      function loadBlog() {
        return _loadBlog.apply(this, arguments);
      }

      return loadBlog;
    }(),
    searchCities: function () {
      var _searchCities = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
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
                return _services_city_service__WEBPACK_IMPORTED_MODULE_2__["searchCities"](query);

              case 4:
                response = _context7.sent;
                this.cities = response.data;
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

      function searchCities() {
        return _searchCities.apply(this, arguments);
      }

      return searchCities;
    }(),
    disableSubmission: function disableSubmission(btnSubmit) {
      btnSubmit.setAttribute("disabled", "disabled");
      this.btnSubmitOldHtml = btnSubmit.innerHTML;
      btnSubmit.innerHTML = '<span class="fa fa-spinner fa-spin"></span> Please wait...';
    },
    enableSubmission: function enableSubmission(btnSubmit) {
      btnSubmit.removeAttribute("disabled");
      btnSubmit.innerHTML = this.btnSubmitOldHtml;
    },
    attachImage: function attachImage() {
      this.blogData.blogpicture = this.$refs.image1.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        this.$refs.newImage1Display.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.blogData.blogpicture);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Blogs.vue?vue&type=template&id=5b868d82&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Blogs.vue?vue&type=template&id=5b868d82& ***!
  \*********************************************************************************************************************************************************************************************************/
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
            [_vm._v("Adding Blogs")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "ml-auto" }, [
            _c(
              "button",
              {
                staticClass:
                  "d-none d-sm-inline-block btn btn-sm btn-info shadow-sm",
                attrs: { id: "show-btn2" },
                on: { click: _vm.showModal }
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c("span", { staticClass: "text-white" }, [_vm._v("Add Blog")])
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
              ref: "newCityModal",
              attrs: { "hide-footer": "", size: "lg", title: "Add Blog" }
            },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.createBlog($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      { attrs: { for: "exampleFormControlInput1" } },
                      [_vm._v("Blog Title")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.blogData.title,
                          expression: "blogData.title"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "city_name",
                        name: "city_name",
                        placeholder: "Enter city name"
                      },
                      domProps: { value: _vm.blogData.title },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.blogData, "title", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.title
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.title[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c("div", { staticClass: "avatar-upload" }, [
                      _c("div", { staticClass: "avatar-preview" }, [
                        _c("img", {
                          ref: "newImage1Display",
                          staticClass: "w-100 h-100",
                          attrs: {
                            id: "imagePreview",
                            src: "images/icon/addicon1.png"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "avatar-edit" }, [
                        _c("input", {
                          ref: "image1",
                          attrs: {
                            type: "file",
                            id: "imageUpload",
                            accept: ".png, .jpg, .jpeg"
                          },
                          on: { change: _vm.attachImage }
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "imageUpload" } })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("label", { staticClass: "label-title" }, [
                    _vm._v(
                      "\n                      Description\n                      "
                    ),
                    _c("span", { staticClass: "required" }, [_vm._v("*")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group add-title" }, [
                    _c(
                      "div",
                      { staticClass: "col-sm-12" },
                      [
                        _c("vue-editor", {
                          model: {
                            value: _vm.blogData.description,
                            callback: function($$v) {
                              _vm.$set(_vm.blogData, "description", $$v)
                            },
                            expression: "blogData.description"
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.description
                          ? _c(
                              "div",
                              {
                                staticClass: "invalid-feedback",
                                attrs: {
                                  placeholder:
                                    "Write few lines about your property"
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.errors.description[0]) +
                                    "\n                        "
                                )
                              ]
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "button",
                      {
                        ref: "btnSubmit",
                        staticClass: "btn btn-success",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Post Blog")]
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
              ref: "editBlog",
              attrs: { "hide-footer": "", size: "lg", title: "Edit Blog" }
            },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.updateBlog($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      { attrs: { for: "exampleFormControlInput1" } },
                      [_vm._v("Title")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editBlogData.title,
                          expression: "editBlogData.title"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "city_name",
                        name: "city_name"
                      },
                      domProps: { value: _vm.editBlogData.title },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.editBlogData,
                            "title",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.title
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.title[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("label", { staticClass: "label-title" }, [
                    _vm._v(
                      "\n                      Description\n                      "
                    ),
                    _c("span", { staticClass: "required" }, [_vm._v("*")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group add-title" }, [
                    _c(
                      "div",
                      { staticClass: "col-sm-12" },
                      [
                        _c("vue-editor", {
                          model: {
                            value: _vm.editBlogData.blog_description,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.editBlogData,
                                "blog_description",
                                $$v
                              )
                            },
                            expression: "editBlogData.blog_description"
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.blog_description
                          ? _c(
                              "div",
                              {
                                staticClass: "invalid-feedback",
                                attrs: {
                                  placeholder:
                                    "Write few lines about your property"
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.errors.blog_description[0]) +
                                    "\n                        "
                                )
                              ]
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "avatar-upload" }, [
                    _c("div", { staticClass: "avatar-preview" }, [
                      _c("img", {
                        ref: "editImageDisplay",
                        staticClass: "w-100 h-100",
                        attrs: {
                          id: "imagePreview1",
                          src:
                            _vm.$store.state.serverPath +
                            "storage/" +
                            _vm.editBlogData.blog_picture
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "avatar-edit" }, [
                      _c("input", {
                        ref: "editBlogImage",
                        attrs: {
                          type: "file",
                          id: "imageUpload",
                          accept: ".png, .jpg, .jpeg"
                        },
                        on: { change: _vm.editAttachImage }
                      }),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "imageUpload" } })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Update Blog")]
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
          _c("table", { staticClass: "table table-hover" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.blogs, function(blog, index) {
                return _c("tr", { key: index }, [
                  _c("th", { attrs: { scope: "row" } }, [
                    _vm._v(_vm._s(index + 1))
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(blog.name))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(blog.title))]),
                  _vm._v(" "),
                  _c("td", [
                    _c("img", {
                      staticStyle: {
                        width: "50px",
                        "border-radius": "50%",
                        height: "50px"
                      },
                      attrs: {
                        src:
                          _vm.$store.state.serverPath +
                          "storage/" +
                          blog.blog_picture
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger btn-sm",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.deleteBlog(blog)
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
                            return _vm.editBlog(blog)
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
                on: { click: _vm.loadBlog }
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("picture")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
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

/***/ "./resources/js/views/admin/Blogs.vue":
/*!********************************************!*\
  !*** ./resources/js/views/admin/Blogs.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blogs_vue_vue_type_template_id_5b868d82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blogs.vue?vue&type=template&id=5b868d82& */ "./resources/js/views/admin/Blogs.vue?vue&type=template&id=5b868d82&");
/* harmony import */ var _Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blogs.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Blogs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Blogs_vue_vue_type_template_id_5b868d82___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Blogs_vue_vue_type_template_id_5b868d82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Blogs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Blogs.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/admin/Blogs.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Blogs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Blogs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Blogs.vue?vue&type=template&id=5b868d82&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/admin/Blogs.vue?vue&type=template&id=5b868d82& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_template_id_5b868d82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Blogs.vue?vue&type=template&id=5b868d82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Blogs.vue?vue&type=template&id=5b868d82&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_template_id_5b868d82___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_template_id_5b868d82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);