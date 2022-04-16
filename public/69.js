(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Invoice.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Invoice.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_invoice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/invoice_service */ "./resources/js/services/invoice_service.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "invoice",
  data: function data() {
    return {
      query: "",
      cities: [],
      sectors: [],
      headers: [],
      city: 0,
      sector: 0,
      //   invoice: [],
      //   properties: {},
      populars: [],
      property: {
        profile: this.$store.state.profile,
        renter: ''
      },
      inovice: {},
      properties: {},
      total: {},
      security: {},
      invoice: [],
      protypes: [],
      moreExists: false,
      nextPage: 0,
      errors: {}
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
              return _services_invoice_service__WEBPACK_IMPORTED_MODULE_1__["getPropertyInvoice"](to.params.id);

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
  mounted: function mounted() {// this.getProperty();
    // this.getPopular();
  },
  methods: {// getProperty:async function(){
    //     try {
    //     const response = await invoiceService.getProperty();
    //     this.invoice = response.data;
    //     } catch (error) {
    //     this.flashMessage.error({
    //             message: 'Some error occurred!',
    //             time:5000
    //             });
    //     }
    // },
    // favourite: async function (item) {
    //     if (!this.$store.state.isLoggedIn) {
    //         this.$router.push('/login');
    //         return;
    //     }
    //     try {
    //         const response = await MainService.favourite(item)
    //         this.properties.map(property => {
    //             if (property.id === item.id) {
    //                 property.favorited = true;
    //             }
    //         });
    //         this.flashMessage.success({
    //             message: response.data.message,
    //             time: 5000
    //         });
    //     } catch (error) {
    //         this.flashMessage.error({
    //             message: 'Some error occurred, Please try again!',
    //             time: 5000
    //         });
    //     }
    // },
    // unFavourite: async function (item) {
    //     if (!this.$store.state.isLoggedIn) {
    //         this.$router.push('/login');
    //         return;
    //     }
    //     try {
    //         const response = await MainService.unFavourite(item)
    //         this.properties.map(property => {
    //             if (property.id === item.id) {
    //                 property.favorited = false;
    //             }
    //         });
    //         this.flashMessage.success({
    //             message: response.data.message,
    //             time: 5000
    //         });
    //     } catch (error) {
    //         this.flashMessage.error({
    //             message: 'Some error occurred, Please try again!',
    //             time: 5000
    //         });
    //     }
    // },
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Invoice.vue?vue&type=style&index=0&id=24386b5e&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Invoice.vue?vue&type=style&index=0&id=24386b5e&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);", ""]);

// module
exports.push([module.i, "\n    \n       \n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Invoice.vue?vue&type=style&index=0&id=24386b5e&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Invoice.vue?vue&type=style&index=0&id=24386b5e&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Invoice.vue?vue&type=style&index=0&id=24386b5e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Invoice.vue?vue&type=style&index=0&id=24386b5e&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Invoice.vue?vue&type=template&id=24386b5e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Invoice.vue?vue&type=template&id=24386b5e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "container text-center" }, [
      _c("section", { staticClass: "invoice" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "invoiceform" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "part1" }, [
                  _c("h1", [_vm._v("INVOICE")]),
                  _vm._v(" "),
                  _c("h5", [_vm._v("Invoice No# 64564")]),
                  _vm._v(" "),
                  _c("h5", [
                    _vm._v("Date:" + _vm._s(_vm.properties.created_at))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "bgpart1" })
              ]),
              _vm._v(" "),
              _vm._m(0)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "details" }, [
              _c("div", { staticClass: "col-md-4 part2" }, [
                _c("h3", { staticClass: "my-0" }, [
                  _vm._v("Invoice To: " + _vm._s(_vm.properties.name))
                ]),
                _vm._v(" "),
                _c("p", [_vm._v("Office No 19 Walayat plaza rwalpindi")])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "invoicetable col-md-12 mx-auto" }, [
              _c("div", { staticClass: "table-responsive" }, [
                _c("table", { staticClass: "table table-bordered" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("1")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Property Tittle")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.properties.title))])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("1")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Due Date")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.properties.updated_at))])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("1")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Paid Date")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.properties.updated_at))])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("2")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Property Size")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(_vm.properties.size) +
                            " " +
                            _vm._s(_vm.properties.unit)
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("3")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Total Rent")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v("Rs " + _vm._s(_vm.properties.rent_price))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("4")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Security")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v("Rs " + _vm._s(_vm.properties.rent_price * 2))
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(2)
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "subtotal" }, [
              _c("div", { staticClass: "row" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-5 ml-auto" }, [
                  _c("div", { staticClass: "part1sbtotal" }, [
                    _c("h3", { staticClass: "float-right font-weight-bold" }, [
                      _vm._v(
                        "Total :" +
                          _vm._s(
                            _vm.properties.rent_price * 2 +
                              +(+_vm.properties.rent_price)
                          ) +
                          " pkr"
                      )
                    ])
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("img", {
        staticClass: "d-block mx-auto mt-5",
        attrs: { src: "/../images/main.png", height: "80px" }
      })
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
      _c("th", { attrs: { scope: "row" } }, [_vm._v("5")]),
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
            "This invoice is computerized generated so this will be not considered actual invoice. \n                                        Actual invoice will be issued after confirmation Thanks!"
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

/***/ "./resources/js/services/invoice_service.js":
/*!**************************************************!*\
  !*** ./resources/js/services/invoice_service.js ***!
  \**************************************************/
/*! exports provided: getProperty, getPropertyTypeLandlord, getRenty, getlandlord, getPaidRent, getRenterProperty, getLandlordProperty, getPropertytype, getTotalRent, createInvoice, createLandlordInvoice, getlandlordinvoice, getPropertyInvoice, getLandlordPropertyInvoice, deleteInvoice, deletelandlordInvoice, updateInvoice, updateLandlordInvoice, loadInvoice, searchRenterInvoice, searchLandlordInvoice, loadLandlordInvoice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return getProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertyTypeLandlord", function() { return getPropertyTypeLandlord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRenty", function() { return getRenty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getlandlord", function() { return getlandlord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaidRent", function() { return getPaidRent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRenterProperty", function() { return getRenterProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLandlordProperty", function() { return getLandlordProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertytype", function() { return getPropertytype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalRent", function() { return getTotalRent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInvoice", function() { return createInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLandlordInvoice", function() { return createLandlordInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getlandlordinvoice", function() { return getlandlordinvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertyInvoice", function() { return getPropertyInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLandlordPropertyInvoice", function() { return getLandlordPropertyInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteInvoice", function() { return deleteInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletelandlordInvoice", function() { return deletelandlordInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInvoice", function() { return updateInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLandlordInvoice", function() { return updateLandlordInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadInvoice", function() { return loadInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchRenterInvoice", function() { return searchRenterInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchLandlordInvoice", function() { return searchLandlordInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLandlordInvoice", function() { return loadLandlordInvoice; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function getProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-renter-invoice');
}
function getPropertyTypeLandlord() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-landlord-property-type');
}
function getRenty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-renty-data');
}
function getlandlord() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-landlord-data');
}
function getPaidRent() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/renterinvoices');
}
function getRenterProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-property-reserved');
}
function getLandlordProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-landlord-property');
}
function getPropertytype() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-renter-property-type');
}
function getTotalRent() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-total-rent');
}
function createInvoice(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/renterinvoices', data);
}
function createLandlordInvoice(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/landlordinvoices', data);
}
function getlandlordinvoice() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/landlordinvoices');
}
function getPropertyInvoice(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/get-property-invoice/".concat(id));
}
function getLandlordPropertyInvoice(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/get-landlord-property-invoice/".concat(id));
}
function deleteInvoice(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/renterinvoices/".concat(id));
}
function deletelandlordInvoice(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/landlordinvoices/".concat(id));
}
function updateInvoice(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().put("/renterinvoices/".concat(id), data);
}
function updateLandlordInvoice(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().put("/landlordinvoices/".concat(id), data);
}
function loadInvoice(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("get-property-reserved?page=".concat(nextPage));
}
function searchRenterInvoice(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/search-renter-invoice', request);
}
function searchLandlordInvoice(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/search-landlord-invoice', request);
}
function loadLandlordInvoice(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("get-landlord-property?page=".concat(nextPage));
}

/***/ }),

/***/ "./resources/js/views/admin/Invoice.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/admin/Invoice.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Invoice_vue_vue_type_template_id_24386b5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Invoice.vue?vue&type=template&id=24386b5e&scoped=true& */ "./resources/js/views/admin/Invoice.vue?vue&type=template&id=24386b5e&scoped=true&");
/* harmony import */ var _Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Invoice.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Invoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Invoice_vue_vue_type_style_index_0_id_24386b5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Invoice.vue?vue&type=style&index=0&id=24386b5e&scoped=true&lang=css& */ "./resources/js/views/admin/Invoice.vue?vue&type=style&index=0&id=24386b5e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Invoice_vue_vue_type_template_id_24386b5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Invoice_vue_vue_type_template_id_24386b5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "24386b5e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Invoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Invoice.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/admin/Invoice.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Invoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Invoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Invoice.vue?vue&type=style&index=0&id=24386b5e&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/admin/Invoice.vue?vue&type=style&index=0&id=24386b5e&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_style_index_0_id_24386b5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Invoice.vue?vue&type=style&index=0&id=24386b5e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Invoice.vue?vue&type=style&index=0&id=24386b5e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_style_index_0_id_24386b5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_style_index_0_id_24386b5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_style_index_0_id_24386b5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_style_index_0_id_24386b5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/admin/Invoice.vue?vue&type=template&id=24386b5e&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/admin/Invoice.vue?vue&type=template&id=24386b5e&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_24386b5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Invoice.vue?vue&type=template&id=24386b5e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Invoice.vue?vue&type=template&id=24386b5e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_24386b5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_24386b5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);