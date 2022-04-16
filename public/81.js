(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/AboutUs.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/AboutUs.vue?vue&type=script&lang=js& ***!
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "About us",
  components: {
    Header: _components_user_Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Footer: _components_user_Footer_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  metaInfo: function metaInfo() {
    return {
      title: "about us",
      meta: [{
        name: 'description',
        content: 'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.'
      }, {
        property: 'og:title',
        content: "Epiloge - Build your network in your field of interest"
      }, {
        property: 'og:site_name',
        content: 'Epiloge'
      }, {
        property: 'og:type',
        content: 'website'
      }, {
        name: 'robots',
        content: 'index,follow'
      }]
    };
  },
  data: function data() {
    return {
      abouts: [],
      users: []
    };
  },
  mounted: function mounted() {
    this.getAbout();
  },
  methods: {
    getAbout: function () {
      var _getAbout = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_3__["getAbout"]();

              case 3:
                response = _context.sent;
                this.abouts = response.data;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 500
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function getAbout() {
        return _getAbout.apply(this, arguments);
      }

      return getAbout;
    }()
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/AboutUs.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/AboutUs.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.our-webcoderskull .cnt-block{\n   float:left;\n   width:100%;\n   background:#fff;\n   padding:30px 20px;\n   text-align:center;\n   border:2px solid #d5d5d5;\n   margin: 0 0 28px;\n}\n.our-webcoderskull .cnt-block figure{\n   width:148px;\n   height:148px;\n   border-radius:100%;\n   display:inline-block;\n   margin-bottom: 15px;\n}\n.our-webcoderskull .cnt-block img{\n   width:148px;\n   height:148px;\n   border-radius:100%;\n}\n.our-webcoderskull .cnt-block h3{\n   color:#2a2a2a;\n   font-size:20px;\n   font-weight:500;\n   padding:6px 0;\n   text-transform:uppercase;\n}\n.our-webcoderskull .cnt-block h3 a{\n  text-decoration:none;\n\tcolor:#2a2a2a;\n}\n.our-webcoderskull .cnt-block h3 a:hover{\n\tcolor:#337ab7;\n}\n.our-webcoderskull .cnt-block p{\n   color:#2a2a2a;\n   font-size:13px;\n   line-height:20px;\n   font-weight:400;\n}\n.our-webcoderskull .cnt-block .follow-us{\n\tmargin:20px 0 0;\n}\n.our-webcoderskull .cnt-block .follow-us li{\n    display:inline-block;\n\twidth:auto;\n\tmargin:0 5px;\n}\n.our-webcoderskull .cnt-block .follow-us li .fa{\n   font-size:24px;\n   color:#767676;\n}\n.our-webcoderskull .cnt-block .follow-us li .fa:hover{\n   color:#025a8e;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/AboutUs.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/AboutUs.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutUs.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/AboutUs.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/AboutUs.vue?vue&type=template&id=15033da6&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/AboutUs.vue?vue&type=template&id=15033da6& ***!
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
      _c("section", { attrs: { id: "maincss" } }, [
        _c("div", { staticClass: "bannerimg-about" }, [
          _c("img", {
            staticClass: "w-100",
            attrs: {
              src: _vm.$store.state.serverPath + "images/blog/blogcover.jpg"
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "clearfix about-us page", attrs: { id: "main2css" } },
        [
          _c("div", { staticClass: "container" }, [
            _c("h2", { staticClass: "title text-center mt-3" }, [
              _vm._v("About Us")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "section about shadow mt-3" }, [
              _c("div", { staticClass: "about-info" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "about-us-images" }, [
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: {
                          src:
                            _vm.$store.state.serverPath +
                            "storage/" +
                            _vm.abouts.image,
                          alt: "About us Image"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "about-text" }, [
                      _c("h3", [_vm._v(_vm._s(_vm.abouts.title))]),
                      _vm._v(" "),
                      _c("div", { staticClass: "description-paragraph" }, [
                        _c("p", [_vm._v(_vm._s(_vm.abouts.description))])
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm._m(0)
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
    return _c("div", { staticClass: "about-content" }, [
      _c("div", { staticClass: "background" }, [
        _c("h3", { staticClass: "text-success" }, [_vm._v("Backgrounds")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "For the tenant, 'finding the right property to rent' and on the other side of the mirror 'to findverified tenant with a good chartered' for the landlord has always been a struggle and that toocomes along with several lies, miscellaneous charges, extra commission and late payment, andlast but not the least, occasionally the dead lock over minor of the Rent Payment problem leadsto hatred and fight that ends up in police stations and appearing before courts."
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Having experienced such gaps in the field of Real-estate, where there is a continuous discordbetween Landlord and Tenant, EKOPakistan thought of bringing a relief to the landlords as wellas an ease to the tenants.  After a thorough research, team E-Kiraya Online decided to come upwith an online rental platform where everything is under your control and such a system whichboth property owners and tenants looking for Rent can trust."
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "our-mission" }, [
        _c("h3", { staticClass: "text-success" }, [_vm._v("Our Mission")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Our   mission   is   to   revolutionize   and   automate   the   online   Renting   system   of   property   withinPakistan. We desire for every landlord as well as tenant to upgrade themselves by adopting NewOnline Renting trend (posting Ads and finding property for rent),   so they can free up theirvaluable time.  We desire for landlords to improve their business’s functionality, and streamlinetheir rentals —whether they have one rental or one hundred."
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "our-values" }, [
        _c("h3", { staticClass: "text-success" }, [_vm._v("Our Values")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "We Enhance lives through Digitizing renting process in Pakistan. Landlords and Tenants desireto avail our services because of the set of core values which  we have that help scale a healthycompany culture. We believe the best outcomes come from close collaboration within our team.Our Values are: "
          )
        ]),
        _vm._v(" "),
        _c("ol", [
          _c("li", [_vm._v("We empower landlords")]),
          _vm._v(" "),
          _c("li", [_vm._v("We believe in transparency")]),
          _vm._v(" "),
          _c("li", [_vm._v("We innovate and constantly improve")]),
          _vm._v(" "),
          _c("li", [_vm._v("We Provide value to others")]),
          _vm._v(" "),
          _c("li", [_vm._v("We Serve as guides.")]),
          _vm._v(" "),
          _c("li", [_vm._v("We make sure to Be kind.")]),
          _vm._v(" "),
          _c("li", [_vm._v("We are lifelong learners.")]),
          _vm._v(" "),
          _c("li", [_vm._v("We remain enthusiastic and positive.")]),
          _vm._v(" "),
          _c("li", [_vm._v("We Do the right thing.")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "beliefs" }, [
        _c("h3", { staticClass: "text-success" }, [_vm._v("Our Mission")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Our   mission   is   to   revolutionize   and   automate   the   online   Renting   system   of   property   withinPakistan. We desire for every landlord as well as tenant to upgrade themselves by adopting NewOnline Renting trend (posting Ads and finding property for rent),   so they can free up theirvaluable time.  We desire for landlords to improve their business’s functionality, and streamlinetheir rentals —whether they have one rental or one hundred."
          )
        ])
      ]),
      _vm._v(" "),
      _c("h3", { staticClass: "text-success" }, [_vm._v("Integrity")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "We will be honest, impartial, fair, and consistent in our actions and decisions."
        )
      ]),
      _vm._v(" "),
      _c("h3", { staticClass: "text-success" }, [_vm._v("Trust")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "We will trust and maintain confidence in each other and in outside parties."
        )
      ]),
      _vm._v(" "),
      _c("h3", { staticClass: "text-success" }, [_vm._v("Customer Service")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Customer satisfaction is the critical benchmark of our success."
        )
      ]),
      _vm._v(" "),
      _c("h3", { staticClass: "text-success" }, [_vm._v("Communication")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "We   pride   ourselves   on   the   way   we   communicate   and   work   with   each   other   and   with   ourcustomers, and will always strive to ensure clear understanding of the situations and issues thatcome our way."
        )
      ]),
      _vm._v(" "),
      _c("h3", { staticClass: "text-success" }, [_vm._v("Respect")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "We strive to earn respect by being respectful of others, and operating in an open-minded andnon-discriminatory manner that allows us to learn from each other."
        )
      ]),
      _vm._v(" "),
      _c("h3", { staticClass: "text-success" }, [_vm._v("Responsibility")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Each individual takes responsibility for practicing and promoting these values and beliefs in allactivities."
        )
      ]),
      _vm._v(" "),
      _c("h3", { staticClass: "text-success" }, [_vm._v("Community Service")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "We encourage and participate in activities that support our local and nation-wide communities."
        )
      ]),
      _vm._v(" "),
      _c("h3", { staticClass: "text-success" }, [
        _vm._v("Friendly Environment")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "In all of these things, we will maintain a relaxed and positive atmosphere of enjoyment of ourwork, our accomplishments and each other."
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/user/AboutUs.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/user/AboutUs.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutUs_vue_vue_type_template_id_15033da6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=template&id=15033da6& */ "./resources/js/views/user/AboutUs.vue?vue&type=template&id=15033da6&");
/* harmony import */ var _AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=script&lang=js& */ "./resources/js/views/user/AboutUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AboutUs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/user/AboutUs.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AboutUs_vue_vue_type_template_id_15033da6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AboutUs_vue_vue_type_template_id_15033da6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/AboutUs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/AboutUs.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/user/AboutUs.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutUs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/AboutUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/AboutUs.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/user/AboutUs.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutUs.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/AboutUs.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/user/AboutUs.vue?vue&type=template&id=15033da6&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/user/AboutUs.vue?vue&type=template&id=15033da6& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_15033da6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutUs.vue?vue&type=template&id=15033da6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/AboutUs.vue?vue&type=template&id=15033da6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_15033da6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_15033da6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);