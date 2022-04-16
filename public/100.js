(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[100],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/YearInvoice.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/YearInvoice.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/properties_service */ "./resources/js/services/properties_service.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      data: [],
      properties: []
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
              return _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["getAllProperties"](to.params.id);

            case 3:
              response = _context.sent;
              console.log(response);

              if (!response) {
                next('/404');
              }

              next(function (vm) {
                vm.properties = response.data;
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
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/YearInvoice.vue?vue&type=template&id=9d21833e&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/YearInvoice.vue?vue&type=template&id=9d21833e& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    _c("section", { staticClass: "singleinvoice" }, [
      _c("div", { staticClass: "jumbotron bg-white pt-1" }, [
        _c("div", { staticClass: "row gutters-sm" }, [
          _c("div", { staticClass: "col-md-3 mb-3 " }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body shadow" }, [
                _c("div", {}, [
                  _c("img", {
                    staticClass: "profilecircleimage",
                    attrs: {
                      src:
                        _vm.$store.state.serverPath +
                        "storage/" +
                        _vm.properties.avatar,
                      alt: "Admin"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-3" }, [
                    _c("h4", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.properties.name))
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "text-secondary mb-1 text-center" },
                      [_vm._v("Role: Landlord")]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "text-secondary mb-1 text-center" },
                      [_vm._v("City: Islamabad")]
                    ),
                    _vm._v(" "),
                    _vm._m(0)
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-9" }, [
            _c("div", { staticClass: "card mb-3" }, [
              _c("section", { staticClass: "invoice card" }, [
                _c("div", { staticClass: "container" }, [
                  _c("div", { staticClass: "invoiceform" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "invoicetable col-md-12 mx-auto" },
                      [
                        _c("div", { staticClass: "table-responsive" }, [
                          _c("table", { staticClass: "table table-bordered" }, [
                            _vm._m(3),
                            _vm._v(" "),
                            _c("tbody", [
                              _c("tr", [
                                _c("th", { attrs: { scope: "row" } }, [
                                  _vm._v("1")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Due Date")]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.properties.created_at))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", { attrs: { scope: "row" } }, [
                                  _vm._v("2")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Paid Date")]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.properties.updated_at))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", { attrs: { scope: "row" } }, [
                                  _vm._v("3")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("property title")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.properties.title))])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", { attrs: { scope: "row" } }, [
                                  _vm._v("4")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Property Size")]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(_vm.properties.size) +
                                      "  " +
                                      _vm._s(_vm.properties.unit)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", { attrs: { scope: "row" } }, [
                                  _vm._v("5")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Total Rent")]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "Rs " + _vm._s(_vm.properties.rent_price)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", { attrs: { scope: "row" } }, [
                                  _vm._v("6")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Security")]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "Rs " +
                                      _vm._s(_vm.properties.rent_price * 2)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _vm._m(4)
                            ])
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "subtotal" }, [
                      _c("div", { staticClass: "row" }, [
                        _vm._m(5),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-5 ml-auto" }, [
                          _c("div", { staticClass: "part1sbtotal" }, [
                            _c(
                              "h3",
                              { staticClass: "float-right font-weight-bold" },
                              [
                                _vm._v(
                                  "Total :" +
                                    _vm._s(
                                      _vm.properties.rent_price * 2 +
                                        +(+_vm.properties.rent_price)
                                    ) +
                                    " pkr"
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "part2sbtotal" })
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
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
    return _c("form", { attrs: { action: "" } }, [
      _c("div", { staticClass: "form-group" }, [
        _c(
          "label",
          { staticClass: "smartinvoicedateslabel", attrs: { for: "month" } },
          [_vm._v("Filter by Month")]
        ),
        _vm._v(" "),
        _c(
          "select",
          {
            staticClass: "form-control btn btn-primary p-1",
            attrs: { name: "month" }
          },
          [
            _c("option", { attrs: { value: "january" } }, [_vm._v("January")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "january" } }, [_vm._v("Febraury")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "january" } }, [_vm._v("March")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "january" } }, [_vm._v("April")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "january" } }, [_vm._v("May")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "january" } }, [_vm._v("June")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "january" } }, [_vm._v("July")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "january" } }, [_vm._v("August")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "january" } }, [
              _vm._v("September")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "january" } }, [_vm._v("October")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "january" } }, [_vm._v("November")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "january" } }, [_vm._v("December")])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c(
          "label",
          { staticClass: "smartinvoicedateslabel", attrs: { for: "year" } },
          [_vm._v("Filter by Year")]
        ),
        _vm._v(" "),
        _c(
          "select",
          {
            staticClass: "btn btn-primary p-1 form-control",
            attrs: { name: "year" }
          },
          [_c("option", { attrs: { value: "2021" } }, [_vm._v("2021")])]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "part1" }, [
          _c("h3", [_vm._v("INVOICE")]),
          _vm._v(" "),
          _c("h5", [_vm._v("Invoice No# 64564")]),
          _vm._v(" "),
          _c("h5", [_vm._v("Date:12-12-2020")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "bgpart1" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("img", {
          staticClass: "d-block mx-auto mt-5",
          attrs: { src: "/../images/main.png", height: "80px" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "details" }, [
      _c("div", { staticClass: "col-md-4 part2" }, [
        _c("p", [_vm._v("Office No 19 Walayat plaza rwalpindi")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Description")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Total Amount")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", { attrs: { scope: "row" } }, [_vm._v("7")]),
      _vm._v(" "),
      _c("td", [_vm._v("Company Commission")]),
      _vm._v(" "),
      _c("td", [_vm._v("Rs 0")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-5" }, [
      _c("div", { staticClass: "conditions m-2" }, [
        _c("h5", { staticClass: "text-success font-weight-bold" }, [
          _vm._v("Terms & Conditions")
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "This invoice is computerized generated so this will be not considered actual invoice.\n                                                        Actual invoice will be issued after confirmation Thanks!"
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



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

/***/ "./resources/js/views/admin/YearInvoice.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/admin/YearInvoice.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _YearInvoice_vue_vue_type_template_id_9d21833e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./YearInvoice.vue?vue&type=template&id=9d21833e& */ "./resources/js/views/admin/YearInvoice.vue?vue&type=template&id=9d21833e&");
/* harmony import */ var _YearInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./YearInvoice.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/YearInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _YearInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _YearInvoice_vue_vue_type_template_id_9d21833e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _YearInvoice_vue_vue_type_template_id_9d21833e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/YearInvoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/YearInvoice.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/admin/YearInvoice.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_YearInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./YearInvoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/YearInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_YearInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/YearInvoice.vue?vue&type=template&id=9d21833e&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/admin/YearInvoice.vue?vue&type=template&id=9d21833e& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_YearInvoice_vue_vue_type_template_id_9d21833e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./YearInvoice.vue?vue&type=template&id=9d21833e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/YearInvoice.vue?vue&type=template&id=9d21833e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_YearInvoice_vue_vue_type_template_id_9d21833e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_YearInvoice_vue_vue_type_template_id_9d21833e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);