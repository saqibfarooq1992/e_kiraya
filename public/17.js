(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/landloard/LandloardDashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/landloard/LandloardDashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_landloard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/landloard_service */ "./resources/js/services/landloard_service.js");
/* harmony import */ var _services_admin_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin_service.js */ "./resources/js/services/admin_service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth_service */ "./resources/js/services/auth_service.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Dashboard",
  data: function data() {
    return {
      loading: true,
      suspenssions: [],
      profile: this.$store.state.profile,
      password: {
        current_password: '',
        new_password: '',
        new_password_confirmation: ''
      },
      invoiceQuery: '',
      invoices: [],
      totals: [],
      totalfavourits: [],
      favourits: [],
      reactQuery: '',
      properties: [],
      q: '',
      moreExists: false,
      rents: [],
      moreExistsInvoice: false,
      nextPage: 0,
      verify_password: '',
      errors: {}
    };
  },
  mounted: function mounted() {
    this.getProperties();
    this.getProperty();
    this.getTotalRentCount();
    this.getSuspendedProperty();
  },
  methods: {
    getProperties: function () {
      var _getProperties = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_landloard_service__WEBPACK_IMPORTED_MODULE_1__["getProperties"]();

              case 3:
                response = _context.sent;
                this.invoices = response.data.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExistsInvoice = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExistsInvoice = false;
                }

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function getProperties() {
        return _getProperties.apply(this, arguments);
      }

      return getProperties;
    }(),
    loadProperties: function () {
      var _loadProperties = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_landloard_service__WEBPACK_IMPORTED_MODULE_1__["loadProperties"](this.nextPage);

              case 3:
                response = _context2.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExistsInvoice = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExistsInvoice = false;
                }

                response.data.data.forEach(function (data) {
                  _this.invoices.push(data);
                });
                _context2.next = 12;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0 + '');
                this.flashMessage.error({
                  message: "Some error occurred during load more users",
                  time: 5000
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function loadProperties() {
        return _loadProperties.apply(this, arguments);
      }

      return loadProperties;
    }(),
    searchInvoiceQuery: function () {
      var _searchInvoiceQuery = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var invoiceQuery, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                invoiceQuery = {
                  invoiceQuery: this.invoiceQuery
                };
                _context3.next = 4;
                return _services_landloard_service__WEBPACK_IMPORTED_MODULE_1__["searchInvoiceQuery"](invoiceQuery);

              case 4:
                response = _context3.sent;
                this.invoices = response.data;
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred",
                  time: 5000
                });

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 8]]);
      }));

      function searchInvoiceQuery() {
        return _searchInvoiceQuery.apply(this, arguments);
      }

      return searchInvoiceQuery;
    }(),
    getTotalRentCount: function () {
      var _getTotalRentCount = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _services_landloard_service__WEBPACK_IMPORTED_MODULE_1__["getTotalRentCount"]();

              case 3:
                response = _context4.sent;
                this.rents = response.data;
                _context4.next = 10;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 5000
                });

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 7]]);
      }));

      function getTotalRentCount() {
        return _getTotalRentCount.apply(this, arguments);
      }

      return getTotalRentCount;
    }(),
    searchProperty: function () {
      var _searchProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var q, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                q = {
                  q: this.q
                };
                _context5.next = 4;
                return _services_landloard_service__WEBPACK_IMPORTED_MODULE_1__["searchProperty"](q);

              case 4:
                response = _context5.sent;
                this.properties = response.data;
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred",
                  time: 5000
                });

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      function searchProperty() {
        return _searchProperty.apply(this, arguments);
      }

      return searchProperty;
    }(),
    getProperty: function () {
      var _getProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _services_landloard_service__WEBPACK_IMPORTED_MODULE_1__["getProperty"]();

              case 3:
                response = _context6.sent;
                this.properties = response.data.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                _context6.next = 11;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 8]]);
      }));

      function getProperty() {
        return _getProperty.apply(this, arguments);
      }

      return getProperty;
    }(),
    loadProperty: function () {
      var _loadProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var _this2 = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _services_landloard_service__WEBPACK_IMPORTED_MODULE_1__["loadProperty"](this.nextPage);

              case 3:
                response = _context7.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                response.data.data.forEach(function (data) {
                  _this2.properties.push(data);
                });
                _context7.next = 11;
                break;

              case 8:
                _context7.prev = 8;
                _context7.t0 = _context7["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred during load more properties",
                  time: 5000
                });

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 8]]);
      }));

      function loadProperty() {
        return _loadProperty.apply(this, arguments);
      }

      return loadProperty;
    }(),
    searchReact: function () {
      var _searchReact = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var reactQuery, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                reactQuery = {
                  reactQuery: this.reactQuery
                };
                _context8.next = 4;
                return _services_landloard_service__WEBPACK_IMPORTED_MODULE_1__["searchReact"](reactQuery);

              case 4:
                response = _context8.sent;
                this.favourits = response.data.data;
                _context8.next = 11;
                break;

              case 8:
                _context8.prev = 8;
                _context8.t0 = _context8["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred",
                  time: 5000
                });

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 8]]);
      }));

      function searchReact() {
        return _searchReact.apply(this, arguments);
      }

      return searchReact;
    }(),
    smartinvoice: function smartinvoice() {
      var printContents = document.getElementById('smartinvoice').innerHTML;
      var originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    },
    updateProfile: function () {
      var _updateProfile = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                formData = new FormData();
                formData.append('name', this.profile.name);
                formData.append('phone', this.profile.phone);
                formData.append('avater', this.profile.avatar);
                formData.append('_method', 'put');
                _context9.next = 8;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["updateProfile"](formData);

              case 8:
                response = _context9.sent;
                this.errors = {};
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                _context9.next = 26;
                break;

              case 13:
                _context9.prev = 13;
                _context9.t0 = _context9["catch"](0);
                _context9.t1 = _context9.t0.response.status;
                _context9.next = _context9.t1 === 422 ? 18 : _context9.t1 === 401 ? 20 : 23;
                break;

              case 18:
                this.errors = _context9.t0.response.data.errors;
                return _context9.abrupt("break", 26);

              case 20:
                this.errors = {};
                this.flashMessage.error({
                  message: _context9.t0.response.data.message,
                  time: 5000
                });
                return _context9.abrupt("break", 26);

              case 23:
                this.errors = {};
                this.flashMessage.error({
                  message: "Some error occurred please try again",
                  time: 5000
                });
                return _context9.abrupt("break", 26);

              case 26:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 13]]);
      }));

      function updateProfile() {
        return _updateProfile.apply(this, arguments);
      }

      return updateProfile;
    }(),
    updateImage: function () {
      var _updateImage = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                formData = new FormData();
                formData.append('avater', this.profile.avatar);
                formData.append('_method', 'put');
                _context10.next = 6;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["updateImage"](formData);

              case 6:
                response = _context10.sent;
                this.errors = {};
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                _context10.next = 24;
                break;

              case 11:
                _context10.prev = 11;
                _context10.t0 = _context10["catch"](0);
                _context10.t1 = _context10.t0.response.status;
                _context10.next = _context10.t1 === 422 ? 16 : _context10.t1 === 401 ? 18 : 21;
                break;

              case 16:
                this.errors = _context10.t0.response.data.errors;
                return _context10.abrupt("break", 24);

              case 18:
                this.errors = {};
                this.flashMessage.error({
                  message: _context10.t0.response.data.message,
                  time: 5000
                });
                return _context10.abrupt("break", 24);

              case 21:
                this.errors = {};
                this.flashMessage.error({
                  message: "Some error occurred please try again",
                  time: 5000
                });
                return _context10.abrupt("break", 24);

              case 24:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[0, 11]]);
      }));

      function updateImage() {
        return _updateImage.apply(this, arguments);
      }

      return updateImage;
    }(),
    changePassword: function () {
      var _changePassword = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["changePassword"](this.password);

              case 3:
                response = _context11.sent;
                this.errors = {};
                this.password = {
                  current_password: '',
                  new_password: '',
                  new_password_confirmation: ''
                };
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                _context11.next = 22;
                break;

              case 9:
                _context11.prev = 9;
                _context11.t0 = _context11["catch"](0);
                _context11.t1 = _context11.t0.response.status;
                _context11.next = _context11.t1 === 422 ? 14 : _context11.t1 === 401 ? 16 : 19;
                break;

              case 14:
                this.errors = _context11.t0.response.data.errors;
                return _context11.abrupt("break", 22);

              case 16:
                this.errors = {};
                this.flashMessage.info({
                  message: _context11.t0.response.data.message,
                  time: 5000
                });
                return _context11.abrupt("break", 22);

              case 19:
                this.errors = {};
                this.flashMessage.error({
                  message: "Some error occurred please try again",
                  time: 5000
                });
                return _context11.abrupt("break", 22);

              case 22:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[0, 9]]);
      }));

      function changePassword() {
        return _changePassword.apply(this, arguments);
      }

      return changePassword;
    }(),
    editAttachImage: function editAttachImage() {
      this.profile.avatar = this.$refs.editAvatar.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.editAvatarDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.profile.avatar);
    },
    getSuspendedProperty: function () {
      var _getSuspendedProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                _context12.next = 3;
                return _services_admin_service_js__WEBPACK_IMPORTED_MODULE_2__["getSuspendedProperty"]();

              case 3:
                response = _context12.sent;
                console.log(response);
                this.suspenssions = response.data;
                _context12.next = 12;
                break;

              case 8:
                _context12.prev = 8;
                _context12.t0 = _context12["catch"](0);
                console.log(_context12.t0 + '');
                this.flashMessage.error({
                  message: 'some error occurred Please try again',
                  time: 2000
                });

              case 12:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[0, 8]]);
      }));

      function getSuspendedProperty() {
        return _getSuspendedProperty.apply(this, arguments);
      }

      return getSuspendedProperty;
    }(),
    deleteSuspendedProperty: function () {
      var _deleteSuspendedProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13(suspenssion) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (window.confirm("Are you sure you want to delete this Suspended Property")) {
                  _context13.next = 2;
                  break;
                }

                return _context13.abrupt("return");

              case 2:
                _context13.prev = 2;
                _context13.next = 5;
                return _services_admin_service_js__WEBPACK_IMPORTED_MODULE_2__["deleteSuspendedProperty"](suspenssion.id);

              case 5:
                this.suspenssions = this.suspenssions.filter(function (obj) {
                  return obj.id != suspenssion.id;
                });
                this.flashMessage.success({
                  message: 'Suspended Propery deleted successfuly!',
                  time: 5000
                });
                _context13.next = 12;
                break;

              case 9:
                _context13.prev = 9;
                _context13.t0 = _context13["catch"](2);
                this.flashMessage.error({
                  message: 'Some thing going wrong!',
                  time: 5000
                });

              case 12:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this, [[2, 9]]);
      }));

      function deleteSuspendedProperty(_x) {
        return _deleteSuspendedProperty.apply(this, arguments);
      }

      return deleteSuspendedProperty;
    }()
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/landloard/LandloardDashboard.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/landloard/LandloardDashboard.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);", ""]);

// module
exports.push([module.i, "\n@media only screen and (max-width:660px ){\n.mobiledash{\n             display: flex;\n             justify-content: center;\n}\n.mobiledash{\n             margin-left: 0px !important;\n}\n}\n.invoice{\n}\n.invoiceform{\n            background:white;\n            border: 1px solid gray;\n}\n.invoiceform h5{\n            font-weight:bolder;\n}\n.invoiceform .part1{\n            background-color: #38b16e;\n            background-image: linear-gradient(to right,#42b45d,#20ab94);\n            color:white;\n            -webkit-clip-path:polygon(0 0, 100% 35%, 100% 65%, 0% 100%);\n            clip-path: polygon(0 0, 73% 0%, 100% 100%, 0% 100%);\n            width:90%;\n            height:151px;\n            z-index:2;\n            position:absolute;\n            padding: 20px;\n}\n.invoiceform .bgpart1{\n            background-color: black;\n            background-image: linear-gradient(to right,black,#20ab94);\n            color:white;\n            -webkit-clip-path:polygon(0 0, 100% 35%, 100% 65%, 0% 100%);\n            clip-path: polygon(0 0, 73% 0%, 100% 100%, 0% 100%);\n            width:100%;\n            height:151px;\n}\n.invoiceform .part1 h1{\n            font-family: 'Roboto', sans-serif;\n            letter-spacing:0.5rem;\n}\n.logoimg{\n            background-color: #2E86C1;\n            background-image: linear-gradient(to left,#85C1E9 ,#2874A6);\n            color: #fff;\n            height: 200px;\n            font-weight: bolder;\n            border-top-left-radius: 12px;\n}\n.part2{\n            margin-top: 10px;\n}\n.thead{\n            background-color: #38b16e;\n            background-image: linear-gradient(to right,#42b45d,#20ab94);\n            color:white;\n}\n.part1sbtotal{\n            background-color: #38b16e;\n            background-image: linear-gradient(to right,#42b45d,#20ab94);\n            color:white;\n            -webkit-clip-path:polygon(0 0, 100% 35%, 100% 65%, 0% 100%);\n            clip-path: polygon(0 0, 100% 0%, 100% 100%,6% 3%);\n            width:93%;\n            height:107px;\n            z-index:2;\n            position:absolute;\n}\n.part2sbtotal{\n            background-color: #0b0b0b;\n            background-image: linear-gradient(to right,#164203,#20AB94);\n            color: white;\n            -webkit-clip-path: polygon(0 0, 100% 35%, 100% 65%, 0% 100%);\n            clip-path: polygon(0 0, 100% 0%, 100% 100%);\n            width: 100%;\n            height: 119px;\n}\n#inputdesign {\n        width: 100%;\n        height: 120px;\n        background: white;\n        position: relative;\n        border-radius: 10px;\n        padding: 5px;\n        box-shadow: 3px 5px 5px 5px #888888;\n        border-bottom-left-radius: 30px;\n        border-top-right-radius: 39px;\n}\n#talkbubble {\n      width: 200px;\n      height:auto;\n      background: white;\n      position: relative;\n      border-radius: 10px;\n      padding: 5px;\n      box-shadow: 3px 5px 5px 5px #888888;\n      margin-bottom: 20px;\n      border-bottom-left-radius: 30px;\n      border-top-right-radius: 39px;\n}\n#talkbubble:after {\n      content: \"\";\n      position: absolute;\n      left: 100%;\n      top: 35px;\n      width: 0;\n      height: 0;\n      border-top: 13px solid transparent;\n      border-left: 26px solid white;\n      border-right-width: 20px solid transparent;\n      border-bottom: 13px solid transparent;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/landloard/LandloardDashboard.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/landloard/LandloardDashboard.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./LandloardDashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/landloard/LandloardDashboard.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/landloard/LandloardDashboard.vue?vue&type=template&id=45571ab8&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/landloard/LandloardDashboard.vue?vue&type=template&id=45571ab8& ***!
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
  return _c("div", { staticClass: "w-100" }, [
    _c(
      "div",
      { staticClass: "container-fluid" },
      [
        _c(
          "b-card",
          { attrs: { "no-body": "" } },
          [
            _c(
              "b-tabs",
              { attrs: { card: "" } },
              [
                _c(
                  "b-tab",
                  { attrs: { title: "invoice" } },
                  [
                    _c("b-card-text", [
                      _c(
                        "div",
                        {
                          staticClass: "container-fluid",
                          attrs: { id: "invoiceprint" }
                        },
                        [
                          _c("div", { staticClass: "row gutters-sm" }, [
                            _c("div", { staticClass: "col-md-9" }, [
                              _c("div", { staticClass: "card mt-3" }, [
                                _c("div", { staticClass: "card-body" }, [
                                  _c(
                                    "form",
                                    {
                                      staticClass:
                                        "form-inline  justify-content-center md-form form-sm active-cyan-2 bd-highlight font-weight-bold  d-block ml-auto",
                                      on: {
                                        submit: function($event) {
                                          $event.preventDefault()
                                          return _vm.searchInvoiceQuery($event)
                                        }
                                      }
                                    },
                                    [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c(
                                          "select",
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.invoiceQuery,
                                                expression: "invoiceQuery"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              id: "exampleFormControlSelect2"
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  var $$selectedVal = Array.prototype.filter
                                                    .call(
                                                      $event.target.options,
                                                      function(o) {
                                                        return o.selected
                                                      }
                                                    )
                                                    .map(function(o) {
                                                      var val =
                                                        "_value" in o
                                                          ? o._value
                                                          : o.value
                                                      return val
                                                    })
                                                  _vm.invoiceQuery = $event
                                                    .target.multiple
                                                    ? $$selectedVal
                                                    : $$selectedVal[0]
                                                },
                                                function($event) {
                                                  return _vm.searchInvoiceQuery()
                                                }
                                              ]
                                            }
                                          },
                                          [
                                            _c(
                                              "option",
                                              { attrs: { value: "" } },
                                              [
                                                _vm._v(
                                                  "Select Property to check"
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "paid" } },
                                              [_vm._v("Paid Property")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "unpaid" } },
                                              [_vm._v("Un Paid Property")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "reserv" } },
                                              [_vm._v("Reserved Property")]
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "table-responsive" },
                                    [
                                      _c(
                                        "table",
                                        {
                                          staticClass: "table table-hover",
                                          staticStyle: { width: "100%" }
                                        },
                                        [
                                          _c("thead", [
                                            _c("tr", [
                                              _c(
                                                "th",
                                                {
                                                  staticStyle: { width: "5%" },
                                                  attrs: { scope: "col" }
                                                },
                                                [_vm._v("#")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { attrs: { scope: "col" } },
                                                [_vm._v("Property")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { attrs: { scope: "col" } },
                                                [_vm._v("City")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { attrs: { scope: "col" } },
                                                [_vm._v("Size")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { attrs: { scope: "col" } },
                                                [_vm._v("Price")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { attrs: { scope: "col" } },
                                                [_vm._v("Rent")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { attrs: { scope: "col" } },
                                                [_vm._v("Action")]
                                              )
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _vm._l(_vm.invoices, function(
                                            invoice,
                                            index
                                          ) {
                                            return _c("tbody", { key: index }, [
                                              invoice.rent === "paid"
                                                ? _c(
                                                    "tr",
                                                    {
                                                      staticClass:
                                                        "text-success"
                                                    },
                                                    [
                                                      _c(
                                                        "th",
                                                        {
                                                          attrs: {
                                                            scope: "row"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(index + 1)
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        [
                                                          _c(
                                                            "router-link",
                                                            {
                                                              attrs: {
                                                                to: {
                                                                  name:
                                                                    "show-landlord",
                                                                  params: {
                                                                    id:
                                                                      invoice.id
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                                    " +
                                                                  _vm._s(
                                                                    invoice.property_name
                                                                  ) +
                                                                  "\n                                                                "
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            invoice.city_name
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(invoice.size) +
                                                            " " +
                                                            _vm._s(invoice.unit)
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      invoice.cnic
                                                        ? _c(
                                                            "td",
                                                            [
                                                              _c(
                                                                "router-link",
                                                                {
                                                                  attrs: {
                                                                    to: {
                                                                      name:
                                                                        "tenant-invoice",
                                                                      params: {
                                                                        id:
                                                                          invoice.id
                                                                      }
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                                    " +
                                                                      _vm._s(
                                                                        invoice.rent_price
                                                                      ) +
                                                                      "\n                                                                "
                                                                  )
                                                                ]
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        : _c(
                                                            "td",
                                                            [
                                                              _c(
                                                                "router-link",
                                                                {
                                                                  attrs: {
                                                                    to: {
                                                                      name:
                                                                        "invoice-landlord",
                                                                      params: {
                                                                        id:
                                                                          invoice.id
                                                                      }
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                                    " +
                                                                      _vm._s(
                                                                        invoice.rent_price
                                                                      ) +
                                                                      "\n                                                                "
                                                                  )
                                                                ]
                                                              )
                                                            ],
                                                            1
                                                          ),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(invoice.rent)
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        [
                                                          _c(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "btn btn-info btn-sm",
                                                              attrs: {
                                                                type: "button",
                                                                "data-toggle":
                                                                  "tooltip",
                                                                "data-placement":
                                                                  "top",
                                                                title:
                                                                  "un-paid rent"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.unPaidPropertyRent(
                                                                    invoice
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c("i", {
                                                                staticClass:
                                                                  "fas fa-money-check-alt",
                                                                staticStyle: {
                                                                  color: "white"
                                                                }
                                                              })
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "router-link",
                                                            {
                                                              attrs: {
                                                                to: {
                                                                  name:
                                                                    "invoice-landlord",
                                                                  params: {
                                                                    id:
                                                                      invoice.id
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "button",
                                                                {
                                                                  staticClass:
                                                                    "btn btn-info btn-sm",
                                                                  attrs: {
                                                                    type:
                                                                      "button",
                                                                    "data-toggle":
                                                                      "tooltip",
                                                                    "data-placement":
                                                                      "top",
                                                                    title:
                                                                      "invoice"
                                                                  }
                                                                },
                                                                [
                                                                  _c("i", {
                                                                    staticClass:
                                                                      "fas fa-file",
                                                                    staticStyle: {
                                                                      color:
                                                                        "white"
                                                                    }
                                                                  })
                                                                ]
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  )
                                                : _c(
                                                    "tr",
                                                    {
                                                      staticClass: "text-danger"
                                                    },
                                                    [
                                                      _c(
                                                        "th",
                                                        {
                                                          attrs: {
                                                            scope: "row"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(index + 1)
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        [
                                                          _c(
                                                            "router-link",
                                                            {
                                                              attrs: {
                                                                to: {
                                                                  name:
                                                                    "show-landlord",
                                                                  params: {
                                                                    id:
                                                                      invoice.id
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                                    " +
                                                                  _vm._s(
                                                                    invoice.property_name
                                                                  ) +
                                                                  "\n                                                                "
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            invoice.city_name
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(invoice.size) +
                                                            " " +
                                                            _vm._s(invoice.unit)
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      invoice.cnic
                                                        ? _c(
                                                            "td",
                                                            [
                                                              _c(
                                                                "router-link",
                                                                {
                                                                  attrs: {
                                                                    to: {
                                                                      name:
                                                                        "tenant-invoice",
                                                                      params: {
                                                                        id:
                                                                          invoice.id
                                                                      }
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                                    " +
                                                                      _vm._s(
                                                                        invoice.rent_price
                                                                      ) +
                                                                      "\n                                                                "
                                                                  )
                                                                ]
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        : _c(
                                                            "td",
                                                            [
                                                              _c(
                                                                "router-link",
                                                                {
                                                                  attrs: {
                                                                    to: {
                                                                      name:
                                                                        "invoice-landlord",
                                                                      params: {
                                                                        id:
                                                                          invoice.id
                                                                      }
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                                    " +
                                                                      _vm._s(
                                                                        invoice.rent_price
                                                                      ) +
                                                                      "\n                                                                "
                                                                  )
                                                                ]
                                                              )
                                                            ],
                                                            1
                                                          ),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(invoice.rent)
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        [
                                                          _c(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "btn btn-info btn-sm",
                                                              attrs: {
                                                                type: "button",
                                                                "data-toggle":
                                                                  "tooltip",
                                                                "data-placement":
                                                                  "top",
                                                                title:
                                                                  "paid rent"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.paidPropertyRent(
                                                                    invoice
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c("i", {
                                                                staticClass:
                                                                  "fas fa-money-check-alt",
                                                                staticStyle: {
                                                                  color: "white"
                                                                }
                                                              })
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "router-link",
                                                            {
                                                              attrs: {
                                                                to: {
                                                                  name:
                                                                    "invoice-landlord",
                                                                  params: {
                                                                    id:
                                                                      invoice.id
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "button",
                                                                {
                                                                  staticClass:
                                                                    "btn btn-info btn-sm",
                                                                  attrs: {
                                                                    type:
                                                                      "button",
                                                                    "data-toggle":
                                                                      "tooltip",
                                                                    "data-placement":
                                                                      "top",
                                                                    title:
                                                                      "invoice"
                                                                  }
                                                                },
                                                                [
                                                                  _c("i", {
                                                                    staticClass:
                                                                      "fas fa-file",
                                                                    staticStyle: {
                                                                      color:
                                                                        "white"
                                                                    }
                                                                  })
                                                                ]
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  )
                                            ])
                                          })
                                        ],
                                        2
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: _vm.moreExistsInvoice,
                                              expression: "moreExistsInvoice"
                                            }
                                          ]
                                        },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-info btn-sm",
                                              attrs: { type: "button" },
                                              on: { click: _vm.loadProperties }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-arrow-down"
                                              })
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3" }, [
                              _c("div", { staticClass: "card mt-3" }, [
                                _c("div", { staticClass: "card-body shadow" }, [
                                  _c("div", [
                                    _c(
                                      "div",
                                      { attrs: { id: "smartinvoice" } },
                                      [
                                        _c("img", {
                                          staticClass: "d-block mx-auto",
                                          staticStyle: {
                                            height: "50px",
                                            width: "100px"
                                          },
                                          attrs: {
                                            src:
                                              _vm.$store.state.serverPath +
                                              "images/eko.png",
                                            alt: "Admin"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          { staticClass: "text-danger mt-4" },
                                          [
                                            _vm._v("Pending rent:"),
                                            _c(
                                              "span",
                                              { staticClass: "float-right" },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.rents[2]) + " pkr"
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          { staticClass: "text-success" },
                                          [
                                            _vm._v("Paid rent:"),
                                            _c(
                                              "span",
                                              { staticClass: "float-right" },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.rents[1]) + " pkr"
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("hr"),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              " text-info font-weight-bold"
                                          },
                                          [
                                            _vm._v("Total Rent:"),
                                            _c(
                                              "span",
                                              { staticClass: "float-right" },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.rents[0]) + " pkr"
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-danger btn-sm d-block mx-auto",
                                        on: { click: _vm.smartinvoice }
                                      },
                                      [_vm._v("Print")]
                                    )
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ]
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-tab",
                  { attrs: { title: "Properties" } },
                  [
                    _c("b-card-text", [
                      _c("div", { staticClass: "container-fluid" }, [
                        _c("div", { staticClass: "card shadow mb-4" }, [
                          _c(
                            "div",
                            { staticClass: "card-header d-flex bd-highlight" },
                            [
                              _c(
                                "form",
                                {
                                  staticClass:
                                    "form-inline  justify-content-center md-form form-sm active-cyan-2 bd-highlight font-weight-bold  d-block ml-auto",
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      return _vm.searchProperty($event)
                                    }
                                  }
                                },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.q,
                                            expression: "q"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          id: "exampleFormControlSelect2"
                                        },
                                        on: {
                                          change: [
                                            function($event) {
                                              var $$selectedVal = Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function(o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function(o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value
                                                  return val
                                                })
                                              _vm.q = $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            },
                                            function($event) {
                                              return _vm.searchProperty()
                                            }
                                          ]
                                        }
                                      },
                                      [
                                        _c("option", { attrs: { value: "" } }, [
                                          _vm._v("Select Property")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "comment" } },
                                          [_vm._v("Commented Property")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "engaged" } },
                                          [_vm._v("Engaged Property")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "un-paid" } },
                                          [_vm._v("Un-paid Property")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "paid" } },
                                          [_vm._v("Paid Property")]
                                        )
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "card mt-3" }, [
                          _c("div", { staticClass: "card-body" }, [
                            _c("div", { staticClass: "table-responsive" }, [
                              _c(
                                "table",
                                {
                                  staticClass: "table table-hover",
                                  staticStyle: { width: "100%" }
                                },
                                [
                                  _c("thead", [
                                    _c("tr", [
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("#")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Landlord")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Phone")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("City")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Property")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Area Size")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Rent Price")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Status")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("React")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Rent")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Action")
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.properties, function(
                                    property,
                                    index
                                  ) {
                                    return _c("tbody", { key: index }, [
                                      _c("tr", [
                                        _c("th", { attrs: { scope: "row" } }, [
                                          _vm._v(_vm._s(index + 1))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(property.user.name))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(property.user.phone))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(property.city.city_name)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              property.propertytype
                                                .property_name
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(property.size) +
                                              " " +
                                              _vm._s(property.unit)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(property.rent_price))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(property.status))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "fa fa-heart text-danger"
                                            },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    property.favorite_count
                                                  )
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "i",
                                            {
                                              staticClass:
                                                "fa fa-thumbs-up text-success"
                                            },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(property.like_count)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "i",
                                            {
                                              staticClass: "fa fa-eye text-info"
                                            },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(property.seen_count)
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(property.rent))
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-danger btn-sm",
                                                attrs: {
                                                  type: "button",
                                                  "data-toggle": "modal",
                                                  "data-target":
                                                    ".bd-example-modal-lg"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.deleteProperty(
                                                      property
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "fas fa-trash"
                                                })
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-success btn-sm",
                                                attrs: { type: "button" },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.editProperty(
                                                      property
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fas fa-pencil-alt"
                                                })
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "router-link",
                                              {
                                                attrs: {
                                                  to: {
                                                    name: "show-landlord",
                                                    params: { id: property.id }
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-info btn-sm",
                                                    attrs: { type: "button" }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass: "fas fa-eye",
                                                      staticStyle: {
                                                        color: "white"
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ])
                                    ])
                                  })
                                ],
                                2
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
                                  on: { click: _vm.loadProperty }
                                },
                                [_c("i", { staticClass: "fas fa-arrow-down" })]
                              )
                            ]
                          )
                        ])
                      ])
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-tab",
                  { attrs: { title: "React Properties" } },
                  [
                    _c("b-card-text", [
                      _c("div", { staticClass: "container-fluid" }, [
                        _c("div", { staticClass: "card shadow mb-4" }, [
                          _c(
                            "div",
                            { staticClass: "card-header d-flex bd-highlight" },
                            [
                              _c(
                                "form",
                                {
                                  staticClass:
                                    "form-inline  justify-content-center md-form form-sm active-cyan-2 bd-highlight font-weight-bold  d-block ml-auto",
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      return _vm.searchReact($event)
                                    }
                                  }
                                },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.reactQuery,
                                            expression: "reactQuery"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          id: "exampleFormControlSelect2"
                                        },
                                        on: {
                                          change: [
                                            function($event) {
                                              var $$selectedVal = Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function(o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function(o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value
                                                  return val
                                                })
                                              _vm.reactQuery = $event.target
                                                .multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            },
                                            function($event) {
                                              return _vm.searchReact()
                                            }
                                          ]
                                        }
                                      },
                                      [
                                        _c("option", { attrs: { value: "" } }, [
                                          _vm._v("Select React")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "favourited" } },
                                          [_vm._v("Favourited")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "liked" } },
                                          [_vm._v("Liked")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "visited" } },
                                          [_vm._v("Visited")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "seen" } },
                                          [_vm._v("Seen")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "share" } },
                                          [_vm._v("Share")]
                                        )
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "card mt-3" }, [
                          _c("div", { staticClass: "card-body" }, [
                            _c("div", { staticClass: "table-responsive" }, [
                              _c(
                                "table",
                                { staticClass: "table table-hover" },
                                [
                                  _c("thead", [
                                    _c("tr", [
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("#")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Property")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("City")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Area Size")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Rent Price")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Furnished")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Action")
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "tbody",
                                    _vm._l(_vm.favourits, function(
                                      favourit,
                                      index
                                    ) {
                                      return _c("tr", { key: index }, [
                                        _c("th", { attrs: { scope: "row" } }, [
                                          _vm._v(_vm._s(index + 1))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(favourit.property_name))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(favourit.city_name))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(favourit.size) +
                                              " " +
                                              _vm._s(favourit.unit)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(favourit.rent_price))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(favourit.furnished))
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                attrs: {
                                                  to: {
                                                    name: "show-admin",
                                                    params: { id: favourit.id }
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-warning btn-sm",
                                                    attrs: { type: "button" }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass: "fas fa-eye"
                                                    })
                                                  ]
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ])
                                    }),
                                    0
                                  )
                                ]
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("b-tab", { attrs: { title: "Suspended Properties" } }, [
                  _c("div", { staticClass: "card mt-3" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("table", { staticClass: "table table-hover" }, [
                        _c("thead", [
                          _c("tr", [
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v("#")
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v("User")
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v("Phone")
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v("City")
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v("Property Type")
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v("Area")
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v("rent")
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v("Status")
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v("Reasons of Suspenssion")
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v("Action")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.suspenssions, function(
                            suspenssion,
                            index
                          ) {
                            return _c("tr", { key: index }, [
                              _c("th", { attrs: { scope: "row" } }, [
                                _vm._v(_vm._s(index + 1))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(suspenssion.name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(suspenssion.phone))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(suspenssion.city_name))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(suspenssion.property_name))
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(suspenssion.size) +
                                    " " +
                                    _vm._s(suspenssion.unit)
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(suspenssion.rent_price))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(suspenssion.status))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(suspenssion.reason_cancellation))
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
                                        return _vm.deleteSuspendedProperty(
                                          suspenssion
                                        )
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
                                        return _vm.editProperty(suspenssion)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fas fa-pencil-alt"
                                    })
                                  ]
                                )
                              ])
                            ])
                          }),
                          0
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "b-tab",
                  { attrs: { title: "Annoucment" } },
                  [
                    _c("b-card-text", [
                      _c("div", { staticClass: "container-fluid" }, [
                        _c("div", { staticClass: "card shadow mb-4" }, [
                          _c("div", { staticClass: "card-header" }, [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-6 mx-auto" }, [
                                _c("form", [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "text-warning text-center",
                                        attrs: { for: "announcement" }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fas fa-bullhorn fa-2x"
                                        }),
                                        _vm._v(" Create an Annoucement")
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass: "form-control",
                                      attrs: { type: "text", id: "inputdesign" }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "select",
                                      {
                                        staticClass: "form-control",
                                        attrs: {
                                          id: "exampleFormControlSelect1"
                                        }
                                      },
                                      [
                                        _c("option", { attrs: { value: "" } }, [
                                          _vm._v("Select Landlord")
                                        ]),
                                        _vm._v(" "),
                                        _c("option", [_vm._v("2")]),
                                        _vm._v(" "),
                                        _c("option", [_vm._v("3")]),
                                        _vm._v(" "),
                                        _c("option", [_vm._v("4")]),
                                        _vm._v(" "),
                                        _c("option", [_vm._v("5")])
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-warning text-white d-flex justify-content-center"
                                    },
                                    [_vm._v("Make Announcement")]
                                  )
                                ])
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "card mt-3" }, [
                          _c("div", { staticClass: "card-body" }, [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-3" }, [
                                _c("div", { attrs: { id: "talkbubble" } }, [
                                  _c("span", { staticClass: "text-muted" }, [
                                    _vm._v("10:00 Am")
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, vitae."
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-3" }, [
                                _c("div", { attrs: { id: "talkbubble" } }, [
                                  _c("span", { staticClass: "text-muted" }, [
                                    _vm._v("10:00 Am")
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, vitae."
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-3" }, [
                                _c("div", { attrs: { id: "talkbubble" } }, [
                                  _c("span", { staticClass: "text-muted" }, [
                                    _vm._v("10:00 Am")
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, vitae."
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-3" }, [
                                _c("div", { attrs: { id: "talkbubble" } }, [
                                  _c("span", { staticClass: "text-muted" }, [
                                    _vm._v("10:00 Am")
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, vitae."
                                    )
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-tab",
                  { attrs: { title: "Profile" } },
                  [
                    _c("b-card-text", [
                      _c("div", { staticClass: "container-fluid" }, [
                        _c("div", { staticClass: "row gutters-sm" }, [
                          _c("div", { staticClass: "col-md-4 mb-3 " }, [
                            _c("div", { staticClass: "card" }, [
                              _c("div", { staticClass: "card-body shadow" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "d-flex flex-column align-items-center text-center"
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "profilecircleimage",
                                      attrs: {
                                        src:
                                          _vm.$store.state.serverPath +
                                          "storage/" +
                                          _vm.profile.avatar,
                                        alt: "Admin"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "mt-3" }, [
                                      _c("h4", [
                                        _vm._v(_vm._s(_vm.profile.name))
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        { staticClass: "text-secondary mb-1" },
                                        [
                                          _vm._v(
                                            "Role: " + _vm._s(_vm.profile.role)
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        {
                                          staticClass: "text-muted font-size-sm"
                                        },
                                        [
                                          _vm._v(
                                            "City: " +
                                              _vm._s(_vm.profile.city_name)
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-outline-primary p-1 mt-1"
                                        },
                                        [_vm._v("Total Property:10")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-outline-success p-1 mt-1"
                                        },
                                        [_vm._v("Engaged Property:5")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-outline-success p-1 mt-1"
                                        },
                                        [_vm._v("Reserved Property:5")]
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-8" }, [
                            _c("div", { staticClass: "card mb-3" }, [
                              _c("div", { staticClass: "card-body shadow" }, [
                                _c(
                                  "form",
                                  {
                                    on: {
                                      submit: function($event) {
                                        $event.preventDefault()
                                        return _vm.updateLandlordProfile($event)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "h3",
                                      {
                                        staticClass:
                                          "text-success font-weight-bold"
                                      },
                                      [_c("u", [_vm._v(" Account Setting")])]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _c("div", { staticClass: "col-md-4" }, [
                                        _c(
                                          "div",
                                          { staticClass: "avatar-upload" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "avatar-preview",
                                                staticStyle: {
                                                  width: "100%",
                                                  height: "170px"
                                                }
                                              },
                                              [
                                                _c("img", {
                                                  ref: "editAvatarDisplay",
                                                  staticStyle: {
                                                    width: "100%",
                                                    height: "170px",
                                                    border: "none"
                                                  },
                                                  attrs: {
                                                    src:
                                                      _vm.$store.state
                                                        .serverPath +
                                                      "storage/" +
                                                      _vm.profile.avatar,
                                                    id: "imagePreview1"
                                                  }
                                                })
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "avatar-edit" },
                                              [
                                                _c("input", {
                                                  ref: "editAvatar",
                                                  attrs: {
                                                    type: "file",
                                                    id: "imageUpload",
                                                    accept: ".png, .jpg, .jpeg"
                                                  },
                                                  on: {
                                                    change: _vm.editAttachImage
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("label", {
                                                  attrs: { for: "imageUpload" }
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-md-4" }, [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass: "p-0 m-0",
                                                attrs: { for: "name" }
                                              },
                                              [_vm._v("Name")]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.profile.name,
                                                  expression: "profile.name"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "text",
                                                id: "name",
                                                placeholder: "Your full name"
                                              },
                                              domProps: {
                                                value: _vm.profile.name
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.profile,
                                                    "name",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass: "p-0 m-0",
                                                attrs: { for: "name" }
                                              },
                                              [_vm._v("Phone")]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.profile.phone,
                                                  expression: "profile.phone"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "text",
                                                id: "name"
                                              },
                                              domProps: {
                                                value: _vm.profile.phone
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.profile,
                                                    "phone",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-md-4" }, [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass: "p-0 m-0",
                                                attrs: { for: "Email" }
                                              },
                                              [_vm._v("Email")]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.profile.email,
                                                  expression: "profile.email"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "text",
                                                readonly: ""
                                              },
                                              domProps: {
                                                value: _vm.profile.email
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.profile,
                                                    "email",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass: "p-0 m-0",
                                                attrs: { for: "City" }
                                              },
                                              [_vm._v("City")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "select",
                                              {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.profile.city,
                                                    expression: "profile.city"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-control mt-1",
                                                on: {
                                                  change: function($event) {
                                                    var $$selectedVal = Array.prototype.filter
                                                      .call(
                                                        $event.target.options,
                                                        function(o) {
                                                          return o.selected
                                                        }
                                                      )
                                                      .map(function(o) {
                                                        var val =
                                                          "_value" in o
                                                            ? o._value
                                                            : o.value
                                                        return val
                                                      })
                                                    _vm.$set(
                                                      _vm.profile,
                                                      "city",
                                                      $event.target.multiple
                                                        ? $$selectedVal
                                                        : $$selectedVal[0]
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "option",
                                                  { attrs: { value: "" } },
                                                  [_vm._v("Select City")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: {
                                                      value: "Islamabad"
                                                    }
                                                  },
                                                  [_vm._v("Islamabad")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: {
                                                      value: "Rawalpindi"
                                                    }
                                                  },
                                                  [_vm._v("Rawalpindi")]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _c("div", { staticClass: "col-md-4" }, [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-success p-1 d-block mx-auto mt-3",
                                            attrs: { type: "btn" }
                                          },
                                          [_vm._v("Save Changes")]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-md-4" }, [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: { for: "new_password" }
                                              },
                                              [_vm._v("New Password")]
                                            ),
                                            _vm._v(" "),
                                            _c("div", [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.password.new_password,
                                                    expression:
                                                      "password.new_password"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "password",
                                                  id: "new_password",
                                                  placeholder: "New password"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.password.new_password
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.password,
                                                      "new_password",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _vm.errors.new_password
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "invalid-feedback"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.errors
                                                            .new_password[0]
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
                                      _c("div", { staticClass: "col-md-4" }, [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for: "confirm_password"
                                                }
                                              },
                                              [_vm._v("Confirm Password")]
                                            ),
                                            _vm._v(" "),
                                            _c("div", [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.password
                                                        .new_password_confirmation,
                                                    expression:
                                                      "password.new_password_confirmation"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "password",
                                                  id: "confirm_password",
                                                  placeholder:
                                                    "Password confirmations"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.password
                                                      .new_password_confirmation
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.password,
                                                      "new_password_confirmation",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _vm.errors
                                                .new_password_confirmation
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "invalid-feedback"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.errors
                                                            .new_password_confirmation[0]
                                                        )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ])
                                          ]
                                        )
                                      ])
                                    ])
                                  ]
                                )
                              ])
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "card mt-3" }, [
                        _c("div", { staticClass: "card-body" }, [
                          _c("div", { staticClass: "table-responsive" }, [
                            _c(
                              "table",
                              {
                                staticClass: "table table-hover",
                                staticStyle: { width: "100%" }
                              },
                              [
                                _c("thead", [
                                  _c("tr", [
                                    _c(
                                      "th",
                                      {
                                        staticStyle: { width: "5%" },
                                        attrs: { scope: "col" }
                                      },
                                      [_vm._v("#")]
                                    ),
                                    _vm._v(" "),
                                    _c("th", { attrs: { scope: "col" } }, [
                                      _vm._v("Property")
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { attrs: { scope: "col" } }, [
                                      _vm._v("City")
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { attrs: { scope: "col" } }, [
                                      _vm._v("property size")
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { attrs: { scope: "col" } }, [
                                      _vm._v("Rent Price")
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { attrs: { scope: "col" } }, [
                                      _vm._v("Furnished")
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { attrs: { scope: "col" } }, [
                                      _vm._v("Rent")
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { attrs: { scope: "col" } }, [
                                      _vm._v("Action")
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.invoices, function(
                                    invoice,
                                    index
                                  ) {
                                    return _c("tr", { key: index }, [
                                      _c("th", { attrs: { scope: "row" } }, [
                                        _vm._v(_vm._s(index + 1))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(invoice.property_name))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(invoice.city_name))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(invoice.size) +
                                            " " +
                                            _vm._s(invoice.unit)
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(invoice.rent_price))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(invoice.furnished))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(invoice.rent))]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-danger btn-sm",
                                              attrs: {
                                                type: "button",
                                                "data-toggle": "modal",
                                                "data-target":
                                                  ".bd-example-modal-lg"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.deleteReservedProperty(
                                                    invoice
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-trash"
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-info btn-sm",
                                              attrs: {
                                                type: "button",
                                                "data-toggle": "tooltip",
                                                "data-placement": "top",
                                                title: "paid rent"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.paidPropertyRent(
                                                    invoice
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fas fa-money-check-alt",
                                                staticStyle: { color: "white" }
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-info btn-sm",
                                              attrs: {
                                                type: "button",
                                                "data-toggle": "tooltip",
                                                "data-placement": "top",
                                                title: "un-paid rent"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.unPaidPropertyRent(
                                                    invoice
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fas fa-money-check-alt",
                                                staticStyle: { color: "white" }
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "router-link",
                                            {
                                              attrs: {
                                                to: {
                                                  name: "invoice-landlord",
                                                  params: { id: invoice.id }
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-info btn-sm",
                                                  attrs: {
                                                    type: "button",
                                                    "data-toggle": "tooltip",
                                                    "data-placement": "top",
                                                    title: "invoice"
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "fas fa-file",
                                                    staticStyle: {
                                                      color: "white"
                                                    }
                                                  })
                                                ]
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ])
                                  }),
                                  0
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/admin_service.js":
/*!************************************************!*\
  !*** ./resources/js/services/admin_service.js ***!
  \************************************************/
/*! exports provided: getProperty, getProperties, loadProperties, searchProperty, getCity, searchInvoiceQuery, getFavourit, getNotification, getApprovedPropertyNotification, getPendingPropertyCount, getApprovedPropertyCount, getTotalPropertyCount, propertyCount, getTotalRenterCount, getTotalLandloardCount, getTotalReservedCount, getTotalFavouritedCount, getTotalEmployeeCount, getTotalManagerCount, getTotalCSRCount, getPendingProperty, getApprovedProperty, getPaidRent, getPendingRent, loadProperty, loadPendingProperty, loadApprovedProperty, getPropertyNotify, getAllRenter, getAllLandloard, loadLandlords, getAllRerservedProperty, getAllFavouritedProperty, getTotalRentCount, getTotalPaidRentCount, getTotalPenddingRentCount, updateAssignProperty, getLatestPropertyCount, loadLatestProperty, getLatestProperty, getOldProperty, getReservedProperty, loadReservedProperty, getTotalRentProperty, getPendingRentList, getListTotalPorperty, engagedProperty, getPenddingProperty, getTotalPorperty, searchReservedProperty, loadReserved, loadFavouritedProperty, getReservedPropertyadmin, getEngagedCount, getEngagedProperty, getManagerData, getEmployeeData, getTenantData, searchReact, PropertyHot, getAreaManager, getTenant, unPaidPropertyRent, suspendProperty, getSuspendedProperty, deleteSuspendedProperty, getAssignEmployee, getAssignManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return getProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperties", function() { return getProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProperties", function() { return loadProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchProperty", function() { return searchProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCity", function() { return getCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchInvoiceQuery", function() { return searchInvoiceQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavourit", function() { return getFavourit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotification", function() { return getNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApprovedPropertyNotification", function() { return getApprovedPropertyNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPendingPropertyCount", function() { return getPendingPropertyCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApprovedPropertyCount", function() { return getApprovedPropertyCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalPropertyCount", function() { return getTotalPropertyCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propertyCount", function() { return propertyCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalRenterCount", function() { return getTotalRenterCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalLandloardCount", function() { return getTotalLandloardCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalReservedCount", function() { return getTotalReservedCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalFavouritedCount", function() { return getTotalFavouritedCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalEmployeeCount", function() { return getTotalEmployeeCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalManagerCount", function() { return getTotalManagerCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalCSRCount", function() { return getTotalCSRCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPendingProperty", function() { return getPendingProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApprovedProperty", function() { return getApprovedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaidRent", function() { return getPaidRent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPendingRent", function() { return getPendingRent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProperty", function() { return loadProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPendingProperty", function() { return loadPendingProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadApprovedProperty", function() { return loadApprovedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertyNotify", function() { return getPropertyNotify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRenter", function() { return getAllRenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllLandloard", function() { return getAllLandloard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLandlords", function() { return loadLandlords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRerservedProperty", function() { return getAllRerservedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllFavouritedProperty", function() { return getAllFavouritedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalRentCount", function() { return getTotalRentCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalPaidRentCount", function() { return getTotalPaidRentCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalPenddingRentCount", function() { return getTotalPenddingRentCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAssignProperty", function() { return updateAssignProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatestPropertyCount", function() { return getLatestPropertyCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLatestProperty", function() { return loadLatestProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatestProperty", function() { return getLatestProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOldProperty", function() { return getOldProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReservedProperty", function() { return getReservedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadReservedProperty", function() { return loadReservedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalRentProperty", function() { return getTotalRentProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPendingRentList", function() { return getPendingRentList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListTotalPorperty", function() { return getListTotalPorperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "engagedProperty", function() { return engagedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPenddingProperty", function() { return getPenddingProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalPorperty", function() { return getTotalPorperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchReservedProperty", function() { return searchReservedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadReserved", function() { return loadReserved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFavouritedProperty", function() { return loadFavouritedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReservedPropertyadmin", function() { return getReservedPropertyadmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEngagedCount", function() { return getEngagedCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEngagedProperty", function() { return getEngagedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManagerData", function() { return getManagerData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmployeeData", function() { return getEmployeeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTenantData", function() { return getTenantData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchReact", function() { return searchReact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyHot", function() { return PropertyHot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaManager", function() { return getAreaManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTenant", function() { return getTenant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unPaidPropertyRent", function() { return unPaidPropertyRent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suspendProperty", function() { return suspendProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuspendedProperty", function() { return getSuspendedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSuspendedProperty", function() { return deleteSuspendedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssignEmployee", function() { return getAssignEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssignManager", function() { return getAssignManager; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");
 // Request From Admin Dashboard

function getProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-property-admin');
}
function getProperties() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-properties-admin');
}
function loadProperties(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("get-properties-admin?page=".concat(nextPage));
}
function searchProperty(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/search-property-admin', request);
}
function getCity() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/cities');
}
function searchInvoiceQuery(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/search-properties-admin', request);
}
function getFavourit() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-All-Favourited-Property');
}
function getNotification() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-notification');
}
function getApprovedPropertyNotification() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-notification-property');
}
function getPendingPropertyCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/pending-property-count');
}
function getApprovedPropertyCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/approved-property-count');
}
function getTotalPropertyCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-property-count');
}
function propertyCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-notification-count');
}
function getTotalRenterCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-Renter-count');
}
function getTotalLandloardCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-Landloard-count');
}
function getTotalReservedCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-reserved-count');
}
function getTotalFavouritedCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-favourited-count');
}
function getTotalEmployeeCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-employee-count');
}
function getTotalManagerCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-manager-count');
}
function getTotalCSRCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-csr-count');
}
function getPendingProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/pending-property-admin');
}
function getApprovedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-approved-property');
}
function getPaidRent() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-paid-rent-admin');
}
function getPendingRent() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-un-paid-rent-admin');
}
function loadProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("total-property?page=".concat(nextPage));
}
function loadPendingProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("total-pending-property?page=".concat(nextPage));
}
function loadApprovedProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("total-approved-property?page=".concat(nextPage));
}
function getPropertyNotify() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-pending-property');
}
function getAllRenter() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/show-all-renter');
}
function getAllLandloard() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/show-all-landloard');
}
function loadLandlords(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("show-all-landloard?page=".concat(nextPage));
}
function getAllRerservedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/show-all-reserved-property-admin');
}
function getAllFavouritedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-All-Favourited-Property');
}
function getTotalRentCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/show-all-rent');
}
function getTotalPaidRentCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-paid-rent');
}
function getTotalPenddingRentCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-pendding-rent');
} // export function searchProperty(request) {
//     return http().post('/search-Favorited-properties-admin',request);
// }

function updateAssignProperty(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().put("/properties/".concat(id), data);
}
function getLatestPropertyCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/all-latest-property-count-admin');
}
function loadLatestProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("all-latest-property-count-admin?page=".concat(nextPage));
}
function getLatestProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-property-for-admin');
}
function getOldProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-old-property-for-admin');
}
function getReservedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/show-all-reserved-property-admin');
}
function loadReservedProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("show-all-reserved-property-admin?page=".concat(nextPage));
}
function getTotalRentProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-rent-admin');
}
function getPendingRentList() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-pending-property-rent-admin');
}
function getListTotalPorperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/all-property');
}
function engagedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/engaged-properties-admin');
}
function getPenddingProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-pending-property-list');
}
function getTotalPorperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-property-admin');
}
function searchReservedProperty(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/search-reserved-property', request);
}
function loadReserved(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("show-all-reserved-property-admin?page=".concat(nextPage));
}
function loadFavouritedProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("get-All-Favourited-Property?page=".concat(nextPage));
}
function getReservedPropertyadmin() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/reserved-property-list-tenant');
}
function getEngagedCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/engage-count');
}
function getEngagedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/engaged-properties-admin');
}
function getManagerData(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/get-managers-data-admin/".concat(id));
}
function getEmployeeData(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/get-employees-data-admin/".concat(id));
}
function getTenantData(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/get-tenant-data-admin/".concat(id));
}
function searchReact(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/search-react-admin', request);
}
function PropertyHot(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/property-hot/".concat(id));
}
function getAreaManager(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-area-admin', request);
}
function getTenant(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-tenant', request);
}
function unPaidPropertyRent(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/property-un-paid-rent-admin/".concat(id));
}
function suspendProperty(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/suspensions', data);
}
function getSuspendedProperty(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/suspensions', request);
}
function deleteSuspendedProperty(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/suspensions/".concat(id));
}
function getAssignEmployee(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/suspensions', request);
}
function getAssignManager(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/managers', request);
}

/***/ }),

/***/ "./resources/js/services/landloard_service.js":
/*!****************************************************!*\
  !*** ./resources/js/services/landloard_service.js ***!
  \****************************************************/
/*! exports provided: getTotalPorperty, getProperties, loadProperties, searchInvoiceQuery, getTotalRentCount, getProperty, loadProperty, searchProperty, searchReact, getListTotalPorperty, getTotalReserved, getPendingProperty, getPenddingProperty, getEngagedProperty, getFavouritedProperty, getTotalRentProperty, getPaidRent, getPendingRent, ReservedProperty, loadInvoiceProperty, loadPendingProperty, getPendingRentList, loadUnPaidProperty, getEngagedProperties, getReservedProperty, getAllFavouritedProperty, loadReservedProperty, unPaidPropertyRent, getAllLikedProperty, getLikedProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalPorperty", function() { return getTotalPorperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperties", function() { return getProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProperties", function() { return loadProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchInvoiceQuery", function() { return searchInvoiceQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalRentCount", function() { return getTotalRentCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return getProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProperty", function() { return loadProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchProperty", function() { return searchProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchReact", function() { return searchReact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListTotalPorperty", function() { return getListTotalPorperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalReserved", function() { return getTotalReserved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPendingProperty", function() { return getPendingProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPenddingProperty", function() { return getPenddingProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEngagedProperty", function() { return getEngagedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavouritedProperty", function() { return getFavouritedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalRentProperty", function() { return getTotalRentProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaidRent", function() { return getPaidRent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPendingRent", function() { return getPendingRent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservedProperty", function() { return ReservedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadInvoiceProperty", function() { return loadInvoiceProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPendingProperty", function() { return loadPendingProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPendingRentList", function() { return getPendingRentList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUnPaidProperty", function() { return loadUnPaidProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEngagedProperties", function() { return getEngagedProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReservedProperty", function() { return getReservedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllFavouritedProperty", function() { return getAllFavouritedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadReservedProperty", function() { return loadReservedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unPaidPropertyRent", function() { return unPaidPropertyRent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllLikedProperty", function() { return getAllLikedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLikedProperty", function() { return getLikedProperty; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function getTotalPorperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-property-landlord');
}
function getProperties() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-properties-landlord');
}
function loadProperties(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("get-properties-landlord?page=".concat(nextPage));
}
function searchInvoiceQuery(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/search-properties-landlord-invoice', request);
}
function getTotalRentCount() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/show-all-rent-landlord');
}
function getProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-property-landlord');
}
function loadProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("get-property-landlord?page=".concat(nextPage));
}
function searchProperty(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/search-properties-landlord', request);
}
function searchReact(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/search-react-landlord', request);
}
function getListTotalPorperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-property');
}
function getTotalReserved() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-reserved');
}
function getPendingProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-total-pending-property');
}
function getPenddingProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-pending-property-list-landlord');
}
function getEngagedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/search-invoice-properties-admin');
}
function getFavouritedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-favourited-property');
}
function getTotalRentProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-properties-rent-landlord');
}
function getPaidRent() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-paid-rent');
}
function getPendingRent() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-un-paid-rent');
}
function ReservedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-reserved-property-landloard');
} // export function searchInvoiceQuery(request) {
//     return http().post('/search-invoice-properties-admin',request);
// }

function loadInvoiceProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("search-invoice-properties-admin?page=".concat(nextPage));
}
function loadPendingProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("get-pending-property?page=".concat(nextPage));
}
function getPendingRentList() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-pending-property-rent');
}
function loadUnPaidProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("get-pending-property-rent?page=".concat(nextPage));
}
function getEngagedProperties() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/engaged-properties-landlord');
}
function getReservedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/reserved-properties-landlord');
}
function getAllFavouritedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-All-Favourited-Property-landlord');
}
function loadReservedProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("reserved-properties-landlord?page=".concat(nextPage));
}
function unPaidPropertyRent(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/property-un-paid-rent/".concat(id));
}
function getAllLikedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-all-liked-property-landlord');
}
function getLikedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/total-liked-property');
} // export function searchReact(request) {
//     return http().post('/search-react',request);
// }

/***/ }),

/***/ "./resources/js/views/landloard/LandloardDashboard.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/landloard/LandloardDashboard.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LandloardDashboard_vue_vue_type_template_id_45571ab8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LandloardDashboard.vue?vue&type=template&id=45571ab8& */ "./resources/js/views/landloard/LandloardDashboard.vue?vue&type=template&id=45571ab8&");
/* harmony import */ var _LandloardDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LandloardDashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/landloard/LandloardDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LandloardDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LandloardDashboard.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/landloard/LandloardDashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LandloardDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LandloardDashboard_vue_vue_type_template_id_45571ab8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LandloardDashboard_vue_vue_type_template_id_45571ab8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/landloard/LandloardDashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/landloard/LandloardDashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/landloard/LandloardDashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandloardDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LandloardDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/landloard/LandloardDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandloardDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/landloard/LandloardDashboard.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/landloard/LandloardDashboard.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LandloardDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./LandloardDashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/landloard/LandloardDashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LandloardDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LandloardDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LandloardDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LandloardDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/landloard/LandloardDashboard.vue?vue&type=template&id=45571ab8&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/landloard/LandloardDashboard.vue?vue&type=template&id=45571ab8& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LandloardDashboard_vue_vue_type_template_id_45571ab8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LandloardDashboard.vue?vue&type=template&id=45571ab8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/landloard/LandloardDashboard.vue?vue&type=template&id=45571ab8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LandloardDashboard_vue_vue_type_template_id_45571ab8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LandloardDashboard_vue_vue_type_template_id_45571ab8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);