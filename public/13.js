(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/csr/CsrDashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/csr/CsrDashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_csr_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/csr_service */ "./resources/js/services/csr_service.js");
/* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/properties_service */ "./resources/js/services/properties_service.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/admin_service */ "./resources/js/services/admin_service.js");
/* harmony import */ var _services_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/manager_service */ "./resources/js/services/manager_service.js");
/* harmony import */ var _services_reserved_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/reserved_service */ "./resources/js/services/reserved_service.js");
/* harmony import */ var _services_landloard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/landloard_service */ "./resources/js/services/landloard_service.js");
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_8__);


var _methods;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_7__["VueEditor"]
  },
  data: function data() {
    var _ref;

    return _ref = {
      totalProperties: [],
      totalReservedProperty: [],
      totalPenddingProperty: [],
      runningProperty: [],
      favouritProperty: [],
      propertyRent: [],
      paidRent: [],
      penddingRent: [],
      properties: [],
      query: "",
      cities: [],
      sectors: [],
      rules: [],
      allRent: [],
      engaged: [],
      city: 0
    }, _defineProperty(_ref, "properties", []), _defineProperty(_ref, "protypes", []), _defineProperty(_ref, "reserved", []), _defineProperty(_ref, "favourits", []), _defineProperty(_ref, "editPropertyData", {}), _defineProperty(_ref, "showName", false), _defineProperty(_ref, "showImage", true), _defineProperty(_ref, "moreExists", false), _defineProperty(_ref, "moreExistsReserved", false), _defineProperty(_ref, "moreExistsEngaged", false), _defineProperty(_ref, "moreExistsPaid", false), _defineProperty(_ref, "moreExistsUnPaid", false), _defineProperty(_ref, "readMore", false), _defineProperty(_ref, "nextPage", 0), _defineProperty(_ref, "errors", {}), _defineProperty(_ref, "managers", []), _defineProperty(_ref, "paids", []), _defineProperty(_ref, "Unpaids", []), _defineProperty(_ref, "manag", {
      user_id: '',
      property_id: '',
      comment: ''
    }), _ref;
  },
  mounted: function mounted() {
    this.totalProperty();
    this.totalReserved();
    this.totalPendding();
    this.totalRunningProperty();
    this.totalfavouritedProperty();
    this.totalPropertyRent();
    this.totalPaidRent();
    this.totalPenddingRent();
    this.getCity();
    this.getProTypeData();
    this.getSectorUpdate();
    this.getProperty();
    this.ReservedProperty();
    this.allPropertyRent();
    this.getEngagedProperty();
    this.getpaidPropteryRent();
    this.getUnpaidPropteryRent();
  },
  methods: (_methods = {
    totalProperty: function () {
      var _totalProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_csr_service__WEBPACK_IMPORTED_MODULE_1__["totalProperty"]();

              case 3:
                response = _context.sent;
                this.totalProperties = response.data;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 5000
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function totalProperty() {
        return _totalProperty.apply(this, arguments);
      }

      return totalProperty;
    }(),
    getpaidPropteryRent: function () {
      var _getpaidPropteryRent = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["getpaidPropteryRent"]();

              case 3:
                response = _context2.sent;
                this.paids = response.data.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExistsPaid = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExistsPaid = false;
                }

                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 5000
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function getpaidPropteryRent() {
        return _getpaidPropteryRent.apply(this, arguments);
      }

      return getpaidPropteryRent;
    }(),
    loadPaidProperty: function () {
      var _loadPaidProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["loadPaidProperty"](this.nextPage);

              case 3:
                response = _context3.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExistsPaid = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExistsPaid = false;
                }

                response.data.data.forEach(function (data) {
                  _this.paids.push(data);
                });
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred during load more properties",
                  time: 5000
                });

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 8]]);
      }));

      function loadPaidProperty() {
        return _loadPaidProperty.apply(this, arguments);
      }

      return loadPaidProperty;
    }(),
    getUnpaidPropteryRent: function () {
      var _getUnpaidPropteryRent = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["getUnpaidPropteryRent"]();

              case 3:
                response = _context4.sent;
                this.Unpaids = response.data.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExistsUnPaid = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExistsUnPaid = false;
                }

                _context4.next = 11;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 5000
                });

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 8]]);
      }));

      function getUnpaidPropteryRent() {
        return _getUnpaidPropteryRent.apply(this, arguments);
      }

      return getUnpaidPropteryRent;
    }(),
    loadUnPaidProperty: function () {
      var _loadUnPaidProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _this2 = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["loadUnPaidProperty"](this.nextPage);

              case 3:
                response = _context5.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExistsUnPaid = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExistsUnPaid = false;
                }

                response.data.data.forEach(function (data) {
                  _this2.Unpaids.push(data);
                });
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred during load more properties",
                  time: 5000
                });

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      function loadUnPaidProperty() {
        return _loadUnPaidProperty.apply(this, arguments);
      }

      return loadUnPaidProperty;
    }(),
    showAssignProperty: function () {
      var _showAssignProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(property) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.editPropertyData = _objectSpread({}, property);
                this.$refs.showProperty.show();

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function showAssignProperty(_x) {
        return _showAssignProperty.apply(this, arguments);
      }

      return showAssignProperty;
    }(),
    editAssignProperty: function () {
      var _editAssignProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(property) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.editAssignPropertyData = _objectSpread({}, property);
                this.$refs.editAssignProperty.show();

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function editAssignProperty(_x2) {
        return _editAssignProperty.apply(this, arguments);
      }

      return editAssignProperty;
    }(),
    allPropertyRent: function () {
      var _allPropertyRent = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var responce;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["allPropertyRent"]();

              case 3:
                responce = _context8.sent;
                this.allRent = responce.data;
                _context8.next = 10;
                break;

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8["catch"](0);
                this.flashMessage.error({
                  message: 'Some error Occurred!',
                  time: 2000
                });

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 7]]);
      }));

      function allPropertyRent() {
        return _allPropertyRent.apply(this, arguments);
      }

      return allPropertyRent;
    }(),
    totalReserved: function () {
      var _totalReserved = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return _services_csr_service__WEBPACK_IMPORTED_MODULE_1__["totalReserved"]();

              case 3:
                response = _context9.sent;
                this.totalReservedProperty = response.data;
                _context9.next = 10;
                break;

              case 7:
                _context9.prev = 7;
                _context9.t0 = _context9["catch"](0);
                this.flashMessage.error({
                  message: 'some error occurred',
                  time: 5000
                });

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 7]]);
      }));

      function totalReserved() {
        return _totalReserved.apply(this, arguments);
      }

      return totalReserved;
    }(),
    totalPendding: function () {
      var _totalPendding = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return _services_csr_service__WEBPACK_IMPORTED_MODULE_1__["totalPendding"]();

              case 3:
                response = _context10.sent;
                this.totalPenddingProperty = response.data;
                _context10.next = 10;
                break;

              case 7:
                _context10.prev = 7;
                _context10.t0 = _context10["catch"](0);
                this.flashMessage.error({
                  message: 'some error occurred',
                  time: 5000
                });

              case 10:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[0, 7]]);
      }));

      function totalPendding() {
        return _totalPendding.apply(this, arguments);
      }

      return totalPendding;
    }(),
    totalRunningProperty: function () {
      var _totalRunningProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return _services_csr_service__WEBPACK_IMPORTED_MODULE_1__["totalRunningProperty"]();

              case 3:
                response = _context11.sent;
                this.runningProperty = response.data;
                _context11.next = 10;
                break;

              case 7:
                _context11.prev = 7;
                _context11.t0 = _context11["catch"](0);
                this.flashMessage.error({
                  message: 'some error occurred',
                  time: 5000
                });

              case 10:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[0, 7]]);
      }));

      function totalRunningProperty() {
        return _totalRunningProperty.apply(this, arguments);
      }

      return totalRunningProperty;
    }(),
    getEngagedProperty: function () {
      var _getEngagedProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                _context12.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["getEngagedProperty"]();

              case 3:
                response = _context12.sent;
                this.engaged = response.data.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExistsEngaged = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExistsEngaged = false;
                }

                _context12.next = 12;
                break;

              case 8:
                _context12.prev = 8;
                _context12.t0 = _context12["catch"](0);
                console.log(_context12.t0 + '');
                this.flashMessage.error({
                  message: 'Some error occurred!',
                  time: 5000
                });

              case 12:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[0, 8]]);
      }));

      function getEngagedProperty() {
        return _getEngagedProperty.apply(this, arguments);
      }

      return getEngagedProperty;
    }(),
    loadEngagedProperty: function () {
      var _loadEngagedProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13() {
        var _this3 = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.prev = 0;
                _context13.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["loadEngagedProperty"](this.nextPage);

              case 3:
                response = _context13.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExistsReserved = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExistsEngaged = false;
                }

                response.data.data.forEach(function (data) {
                  _this3.engaged.push(data);
                });
                _context13.next = 11;
                break;

              case 8:
                _context13.prev = 8;
                _context13.t0 = _context13["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred during load more properties",
                  time: 5000
                });

              case 11:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this, [[0, 8]]);
      }));

      function loadEngagedProperty() {
        return _loadEngagedProperty.apply(this, arguments);
      }

      return loadEngagedProperty;
    }(),
    totalfavouritedProperty: function () {
      var _totalfavouritedProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.prev = 0;
                _context14.next = 3;
                return _services_csr_service__WEBPACK_IMPORTED_MODULE_1__["totalfavouritedProperty"]();

              case 3:
                response = _context14.sent;
                this.favouritProperty = response.data;
                _context14.next = 10;
                break;

              case 7:
                _context14.prev = 7;
                _context14.t0 = _context14["catch"](0);
                this.flashMessage.error({
                  message: 'some error occurred',
                  time: 5000
                });

              case 10:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this, [[0, 7]]);
      }));

      function totalfavouritedProperty() {
        return _totalfavouritedProperty.apply(this, arguments);
      }

      return totalfavouritedProperty;
    }(),
    totalPropertyRent: function () {
      var _totalPropertyRent = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.prev = 0;
                _context15.next = 3;
                return _services_csr_service__WEBPACK_IMPORTED_MODULE_1__["totalPropertyRent"]();

              case 3:
                response = _context15.sent;
                this.propertyRent = response.data;
                _context15.next = 10;
                break;

              case 7:
                _context15.prev = 7;
                _context15.t0 = _context15["catch"](0);
                this.flashMessage.error({
                  message: 'some error occurred',
                  time: 5000
                });

              case 10:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this, [[0, 7]]);
      }));

      function totalPropertyRent() {
        return _totalPropertyRent.apply(this, arguments);
      }

      return totalPropertyRent;
    }(),
    totalPaidRent: function () {
      var _totalPaidRent = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.prev = 0;
                _context16.next = 3;
                return _services_csr_service__WEBPACK_IMPORTED_MODULE_1__["totalPaidRent"]();

              case 3:
                response = _context16.sent;
                this.paidRent = response.data;
                _context16.next = 10;
                break;

              case 7:
                _context16.prev = 7;
                _context16.t0 = _context16["catch"](0);
                this.flashMessage.error({
                  message: 'some error occurred',
                  time: 5000
                });

              case 10:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this, [[0, 7]]);
      }));

      function totalPaidRent() {
        return _totalPaidRent.apply(this, arguments);
      }

      return totalPaidRent;
    }(),
    totalPenddingRent: function () {
      var _totalPenddingRent = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.prev = 0;
                _context17.next = 3;
                return _services_csr_service__WEBPACK_IMPORTED_MODULE_1__["totalPenddingRent"]();

              case 3:
                response = _context17.sent;
                this.penddingRent = response.data;
                _context17.next = 10;
                break;

              case 7:
                _context17.prev = 7;
                _context17.t0 = _context17["catch"](0);
                this.flashMessage.error({
                  message: 'some error occurred',
                  time: 5000
                });

              case 10:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this, [[0, 7]]);
      }));

      function totalPenddingRent() {
        return _totalPenddingRent.apply(this, arguments);
      }

      return totalPenddingRent;
    }(),
    getManager: function () {
      var _getManager = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18() {
        var responce;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.prev = 0;
                _context18.next = 3;
                return _services_manager_service__WEBPACK_IMPORTED_MODULE_4__["getManager"]();

              case 3:
                responce = _context18.sent;
                this.managers = responce.data;
                _context18.next = 10;
                break;

              case 7:
                _context18.prev = 7;
                _context18.t0 = _context18["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 10:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this, [[0, 7]]);
      }));

      function getManager() {
        return _getManager.apply(this, arguments);
      }

      return getManager;
    }(),
    getProTypeData: function () {
      var _getProTypeData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.prev = 0;
                _context19.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["getProTypeData"]();

              case 3:
                response = _context19.sent;
                this.protypes = response.data;
                _context19.next = 10;
                break;

              case 7:
                _context19.prev = 7;
                _context19.t0 = _context19["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 10:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this, [[0, 7]]);
      }));

      function getProTypeData() {
        return _getProTypeData.apply(this, arguments);
      }

      return getProTypeData;
    }(),
    openform: function openform() {
      var x = document.getElementById("myForm");

      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
    editProperty: function () {
      var _editProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee20(property) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                this.editPropertyData = _objectSpread({}, property);
                this.$refs.editProperty.show();

              case 2:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function editProperty(_x3) {
        return _editProperty.apply(this, arguments);
      }

      return editProperty;
    }(),
    updateProperty: function () {
      var _updateProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee21() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.prev = 0;
                formData = new FormData();
                formData.append("title", this.editPropertyData.title);
                formData.append("description", this.editPropertyData.description);
                formData.append("property_type", this.editPropertyData.propertytype_id);
                formData.append("city", this.editPropertyData.city_id);
                formData.append("sector", this.editPropertyData.sector_id);
                formData.append("badrooms", this.editPropertyData.badrooms);
                formData.append("bathrooms", this.editPropertyData.bathrooms);
                formData.append("address", this.editPropertyData.address);
                formData.append("unit", this.editPropertyData.unit);
                formData.append("marital_status", this.editPropertyData.marital_status);
                formData.append("size", this.editPropertyData.size);
                formData.append("rent_price", this.editPropertyData.rent_price);
                formData.append("tvlounge", this.editPropertyData.tv_lounged);
                formData.append("furnished", this.editPropertyData.furnished);
                formData.append("garage", this.editPropertyData.garage);
                formData.append("pic1", this.editPropertyData.pic1);
                formData.append("pic2", this.editPropertyData.pic2);
                formData.append("pic3", this.editPropertyData.pic3);
                formData.append("pic4", this.editPropertyData.pic4);
                formData.append("pic5", this.editPropertyData.pic5);
                formData.append("pic6", this.editPropertyData.pic6);
                formData.append("pic7", this.editPropertyData.pic7);
                formData.append("pic8", this.editPropertyData.pic8);
                formData.append("pic9", this.editPropertyData.pic9);
                formData.append("pic10", this.editPropertyData.pic10);
                formData.append("pic11", this.editPropertyData.pic11);
                formData.append("pic12", this.editPropertyData.pic12);
                formData.append("_method", "put");
                _context21.next = 32;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["updateProperty"](this.editPropertyData.id, formData);

              case 32:
                response = _context21.sent;
                this.properties.map(function (properties) {
                  if (properties.id == response.data.id) {
                    for (var key in response.data) {
                      properties[key] = response.data[key];
                    }
                  }
                });
                this.hideEditModal();
                this.flashMessage.success({
                  message: "Property Updated successfully!",
                  time: 5000
                });
                _context21.next = 47;
                break;

              case 38:
                _context21.prev = 38;
                _context21.t0 = _context21["catch"](0);
                _context21.t1 = _context21.t0.response.status;
                _context21.next = _context21.t1 === 422 ? 43 : 45;
                break;

              case 43:
                this.errors = _context21.t0.response.data.errors;
                return _context21.abrupt("break", 47);

              case 45:
                this.flashMessage.error({
                  message: "Some error occured !",
                  time: 500
                });
                return _context21.abrupt("break", 47);

              case 47:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this, [[0, 38]]);
      }));

      function updateProperty() {
        return _updateProperty.apply(this, arguments);
      }

      return updateProperty;
    }(),
    getCity: function () {
      var _getCity = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee22() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.prev = 0;
                _context22.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["getCity"]().then(function (response) {
                  this.cities = response.data;
                }.bind(this));

              case 3:
                response = _context22.sent;
                _context22.next = 9;
                break;

              case 6:
                _context22.prev = 6;
                _context22.t0 = _context22["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 9:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this, [[0, 6]]);
      }));

      function getCity() {
        return _getCity.apply(this, arguments);
      }

      return getCity;
    }(),
    getSector: function () {
      var _getSector = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee23() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.prev = 0;
                _context23.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["getSector"]({
                  params: {
                    city_id: this.editPropertyData.city
                  }
                }).then(function (response) {
                  this.sectors = response.data;
                }.bind(this));

              case 3:
                response = _context23.sent;
                _context23.next = 9;
                break;

              case 6:
                _context23.prev = 6;
                _context23.t0 = _context23["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 9:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this, [[0, 6]]);
      }));

      function getSector() {
        return _getSector.apply(this, arguments);
      }

      return getSector;
    }(),
    getSectorUpdate: function () {
      var _getSectorUpdate = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee24() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.prev = 0;
                _context24.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["getSectorUpdate"]();

              case 3:
                response = _context24.sent;
                this.sectors = response.data;
                _context24.next = 10;
                break;

              case 7:
                _context24.prev = 7;
                _context24.t0 = _context24["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 10:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this, [[0, 7]]);
      }));

      function getSectorUpdate() {
        return _getSectorUpdate.apply(this, arguments);
      }

      return getSectorUpdate;
    }(),
    getProperty: function () {
      var _getProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee25() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _context25.prev = 0;
                _context25.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["getProperty"]();

              case 3:
                response = _context25.sent;
                this.properties = response.data.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                _context25.next = 11;
                break;

              case 8:
                _context25.prev = 8;
                _context25.t0 = _context25["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 11:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this, [[0, 8]]);
      }));

      function getProperty() {
        return _getProperty.apply(this, arguments);
      }

      return getProperty;
    }(),
    showProperty: function () {
      var _showProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee26(property) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                this.editPropertyData = _objectSpread({}, property);
                this.$refs.showProperty.show();

              case 2:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function showProperty(_x4) {
        return _showProperty.apply(this, arguments);
      }

      return showProperty;
    }()
  }, _defineProperty(_methods, "editProperty", function () {
    var _editProperty2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee27(property) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee27$(_context27) {
        while (1) {
          switch (_context27.prev = _context27.next) {
            case 0:
              this.editPropertyData = _objectSpread({}, property);
              this.$refs.editProperty.show();

            case 2:
            case "end":
              return _context27.stop();
          }
        }
      }, _callee27, this);
    }));

    function editProperty(_x5) {
      return _editProperty2.apply(this, arguments);
    }

    return editProperty;
  }()), _defineProperty(_methods, "deleteProperty", function () {
    var _deleteProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee28(property) {
      var responce;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee28$(_context28) {
        while (1) {
          switch (_context28.prev = _context28.next) {
            case 0:
              if (window.confirm("Are you sure you want to delete this Property")) {
                _context28.next = 2;
                break;
              }

              return _context28.abrupt("return");

            case 2:
              _context28.prev = 2;
              _context28.next = 5;
              return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["deleteProperty"](property.id);

            case 5:
              responce = _context28.sent;
              this.properties = this.properties.filter(function (obj) {
                return obj.id != property.id;
              });
              this.flashMessage.success({
                message: "Property deleted successfuly!",
                time: 5000
              });
              _context28.next = 13;
              break;

            case 10:
              _context28.prev = 10;
              _context28.t0 = _context28["catch"](2);
              this.flashMessage.error({
                message: "Some thing going wrong!",
                time: 5000
              });

            case 13:
            case "end":
              return _context28.stop();
          }
        }
      }, _callee28, this, [[2, 10]]);
    }));

    function deleteProperty(_x6) {
      return _deleteProperty.apply(this, arguments);
    }

    return deleteProperty;
  }()), _defineProperty(_methods, "showModal", function showModal() {
    this.$refs.newPropertyModal.show();
  }), _defineProperty(_methods, "hideModal", function hideModal() {
    this.$refs.newPropertyModal.hide();
  }), _defineProperty(_methods, "searchProperty", function () {
    var _searchProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee29() {
      var query, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee29$(_context29) {
        while (1) {
          switch (_context29.prev = _context29.next) {
            case 0:
              _context29.prev = 0;
              query = {
                query: this.query
              };
              _context29.next = 4;
              return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["searchProperty"](query);

            case 4:
              response = _context29.sent;
              this.properties = response.data;
              _context29.next = 11;
              break;

            case 8:
              _context29.prev = 8;
              _context29.t0 = _context29["catch"](0);
              this.flashMessage.error({
                message: "Some error occurred",
                time: 5000
              });

            case 11:
            case "end":
              return _context29.stop();
          }
        }
      }, _callee29, this, [[0, 8]]);
    }));

    function searchProperty() {
      return _searchProperty.apply(this, arguments);
    }

    return searchProperty;
  }()), _defineProperty(_methods, "editAssignProperty", function () {
    var _editAssignProperty2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee30(property) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee30$(_context30) {
        while (1) {
          switch (_context30.prev = _context30.next) {
            case 0:
              this.editPropertyData = _objectSpread({}, property);
              this.$refs.assignProperty.show();

            case 2:
            case "end":
              return _context30.stop();
          }
        }
      }, _callee30, this);
    }));

    function editAssignProperty(_x7) {
      return _editAssignProperty2.apply(this, arguments);
    }

    return editAssignProperty;
  }()), _defineProperty(_methods, "hideEditModal", function hideEditModal() {
    this.$refs.editProperty.hide();
  }), _defineProperty(_methods, "approvedProperty", function () {
    var _approvedProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee31(property) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee31$(_context31) {
        while (1) {
          switch (_context31.prev = _context31.next) {
            case 0:
              if (window.confirm("Are you sure you want to Approve this Property")) {
                _context31.next = 2;
                break;
              }

              return _context31.abrupt("return");

            case 2:
              _context31.prev = 2;
              _context31.next = 5;
              return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["approvedProperty"](property.id);

            case 5:
              response = _context31.sent;
              // this.properties = this.properties.filter(obj => {
              //             return obj.id !=property.id;
              //     });
              this.flashMessage.success({
                message: "Property Approved Successfuly!",
                time: 5000
              });
              _context31.next = 12;
              break;

            case 9:
              _context31.prev = 9;
              _context31.t0 = _context31["catch"](2);
              this.flashMessage.error({
                message: "Some error occurred!",
                time: 5000
              });

            case 12:
            case "end":
              return _context31.stop();
          }
        }
      }, _callee31, this, [[2, 9]]);
    }));

    function approvedProperty(_x8) {
      return _approvedProperty.apply(this, arguments);
    }

    return approvedProperty;
  }()), _defineProperty(_methods, "PropertyOk", function () {
    var _PropertyOk = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee32(property) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee32$(_context32) {
        while (1) {
          switch (_context32.prev = _context32.next) {
            case 0:
              if (window.confirm("Are you sure you want to Occupied this Property")) {
                _context32.next = 2;
                break;
              }

              return _context32.abrupt("return");

            case 2:
              _context32.prev = 2;
              _context32.next = 5;
              return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["PropertyOk"](property.id);

            case 5:
              response = _context32.sent;
              // this.properties = this.properties.filter(obj => {
              //             return obj.id !=property.id;
              //     });
              this.flashMessage.success({
                message: "Property Occupied Successfuly!",
                time: 5000
              });
              _context32.next = 12;
              break;

            case 9:
              _context32.prev = 9;
              _context32.t0 = _context32["catch"](2);
              this.flashMessage.error({
                message: "Some error occurred!",
                time: 5000
              });

            case 12:
            case "end":
              return _context32.stop();
          }
        }
      }, _callee32, this, [[2, 9]]);
    }));

    function PropertyOk(_x9) {
      return _PropertyOk.apply(this, arguments);
    }

    return PropertyOk;
  }()), _defineProperty(_methods, "reloadProperty", function () {
    var _reloadProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee33(property) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee33$(_context33) {
        while (1) {
          switch (_context33.prev = _context33.next) {
            case 0:
              if (window.confirm("Are you sure you want to Reload this Property")) {
                _context33.next = 2;
                break;
              }

              return _context33.abrupt("return");

            case 2:
              _context33.prev = 2;
              _context33.next = 5;
              return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["reloadProperty"](property.id);

            case 5:
              response = _context33.sent;
              this.properties = this.properties.filter(function (obj) {
                return obj.id != property.id;
              });
              this.flashMessage.success({
                message: "Property Reloaded Successfuly!",
                time: 5000
              });
              _context33.next = 13;
              break;

            case 10:
              _context33.prev = 10;
              _context33.t0 = _context33["catch"](2);
              this.flashMessage.error({
                message: "Some error occurred!",
                time: 5000
              });

            case 13:
            case "end":
              return _context33.stop();
          }
        }
      }, _callee33, this, [[2, 10]]);
    }));

    function reloadProperty(_x10) {
      return _reloadProperty.apply(this, arguments);
    }

    return reloadProperty;
  }()), _defineProperty(_methods, "paidPropertyRent", function () {
    var _paidPropertyRent = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee34(property) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee34$(_context34) {
        while (1) {
          switch (_context34.prev = _context34.next) {
            case 0:
              if (window.confirm("Are you sure you want to paid rent of this Property")) {
                _context34.next = 2;
                break;
              }

              return _context34.abrupt("return");

            case 2:
              _context34.prev = 2;
              _context34.next = 5;
              return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["paidPropertyRent"](property.id);

            case 5:
              response = _context34.sent;
              // this.properties = this.properties.filter((obj) => {
              // return obj.id != property.id;
              // });
              this.flashMessage.success({
                message: "Rent Paid Successfuly!",
                time: 5000
              });
              this.getProperty();
              _context34.next = 13;
              break;

            case 10:
              _context34.prev = 10;
              _context34.t0 = _context34["catch"](2);
              this.flashMessage.error({
                message: "Some error occurred!",
                time: 5000
              });

            case 13:
            case "end":
              return _context34.stop();
          }
        }
      }, _callee34, this, [[2, 10]]);
    }));

    function paidPropertyRent(_x11) {
      return _paidPropertyRent.apply(this, arguments);
    }

    return paidPropertyRent;
  }()), _defineProperty(_methods, "showHide", function showHide(e) {
    this.showName = e.target.value == "1";
  }), _defineProperty(_methods, "loadProperty", function () {
    var _loadProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee35() {
      var _this4 = this;

      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee35$(_context35) {
        while (1) {
          switch (_context35.prev = _context35.next) {
            case 0:
              _context35.prev = 0;
              _context35.next = 3;
              return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["loadProperty"](this.nextPage);

            case 3:
              response = _context35.sent;

              if (response.data.current_page < response.data.last_page) {
                this.moreExists = true;
                this.nextPage = response.data.current_page + 1;
              } else {
                this.moreExists = false;
              }

              response.data.data.forEach(function (data) {
                _this4.properties.push(data);
              });
              _context35.next = 11;
              break;

            case 8:
              _context35.prev = 8;
              _context35.t0 = _context35["catch"](0);
              this.flashMessage.error({
                message: "Some error occurred during load more properties",
                time: 5000
              });

            case 11:
            case "end":
              return _context35.stop();
          }
        }
      }, _callee35, this, [[0, 8]]);
    }));

    function loadProperty() {
      return _loadProperty.apply(this, arguments);
    }

    return loadProperty;
  }()), _defineProperty(_methods, "loadRule", function () {
    var _loadRule = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee36() {
      var _this5 = this;

      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee36$(_context36) {
        while (1) {
          switch (_context36.prev = _context36.next) {
            case 0:
              _context36.prev = 0;
              _context36.next = 3;
              return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["loadRule"](this.nextPage);

            case 3:
              response = _context36.sent;

              if (response.data.current_page < response.data.last_page) {
                this.readMore = true;
                this.nextPage = response.data.current_page + 1;
              } else {
                this.readMore = false;
              }

              response.data.data.forEach(function (data) {
                _this5.rules.push(data);
              });
              _context36.next = 11;
              break;

            case 8:
              _context36.prev = 8;
              _context36.t0 = _context36["catch"](0);
              this.flashMessage.error({
                message: "Some error occurred during load more Cities",
                time: 5000
              });

            case 11:
            case "end":
              return _context36.stop();
          }
        }
      }, _callee36, this, [[0, 8]]);
    }));

    function loadRule() {
      return _loadRule.apply(this, arguments);
    }

    return loadRule;
  }()), _defineProperty(_methods, "editAttachImage", function editAttachImage() {
    this.editPropertyData.pic1 = this.$refs.editPropertyImage.files[0];
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      this.$refs.editImageDisplay.src = reader.result;
    }.bind(this), false);
    reader.readAsDataURL(this.editPropertyData.pic1);
  }), _defineProperty(_methods, "editAttachImage2", function editAttachImage2() {
    this.editPropertyData.pic2 = this.$refs.editPropertyImage2.files[0];
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      this.$refs.editImage2Display.src = reader.result;
    }.bind(this), false);
    reader.readAsDataURL(this.editPropertyData.pic2);
  }), _defineProperty(_methods, "editAttachImage3", function editAttachImage3() {
    this.editPropertyData.pic3 = this.$refs.editPropertyImage3.files[0];
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      this.$refs.editImage3Display.src = reader.result;
    }.bind(this), false);
    reader.readAsDataURL(this.editPropertyData.pic3);
  }), _defineProperty(_methods, "editAttachImage4", function editAttachImage4() {
    this.editPropertyData.pic4 = this.$refs.editPropertyImage4.files[0];
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      this.$refs.editImage4Display.src = reader.result;
    }.bind(this), false);
    reader.readAsDataURL(this.editPropertyData.pic4);
  }), _defineProperty(_methods, "editAttachImage5", function editAttachImage5() {
    this.editPropertyData.pic5 = this.$refs.editPropertyImage5.files[0];
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      this.$refs.editImage5Display.src = reader.result;
    }.bind(this), false);
    reader.readAsDataURL(this.editPropertyData.pic5);
  }), _defineProperty(_methods, "editAttachImage6", function editAttachImage6() {
    this.editPropertyData.pic6 = this.$refs.editPropertyImage6.files[0];
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      this.$refs.editImage6Display.src = reader.result;
    }.bind(this), false);
    reader.readAsDataURL(this.editPropertyData.pic6);
  }), _defineProperty(_methods, "editAttachImage7", function editAttachImage7() {
    this.editPropertyData.pic7 = this.$refs.editPropertyImage7.files[0];
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      this.$refs.editImage7Display.src = reader.result;
    }.bind(this), false);
    reader.readAsDataURL(this.editPropertyData.pic7);
  }), _defineProperty(_methods, "editAttachImage8", function editAttachImage8() {
    this.editPropertyData.pic8 = this.$refs.editPropertyImage8.files[0];
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      this.$refs.editImage8Display.src = reader.result;
    }.bind(this), false);
    reader.readAsDataURL(this.editPropertyData.pic8);
  }), _defineProperty(_methods, "editAttachImage9", function editAttachImage9() {
    this.editPropertyData.pic9 = this.$refs.editPropertyImage9.files[0];
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      this.$refs.editImage9Display.src = reader.result;
    }.bind(this), false);
    reader.readAsDataURL(this.editPropertyData.pic9);
  }), _defineProperty(_methods, "editAttachImage10", function editAttachImage10() {
    this.editPropertyData.pic10 = this.$refs.editPropertyImage10.files[0];
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      this.$refs.editImage10Display.src = reader.result;
    }.bind(this), false);
    reader.readAsDataURL(this.editPropertyData.pic10);
  }), _defineProperty(_methods, "editAttachImage11", function editAttachImage11() {
    this.editPropertyData.pic11 = this.$refs.editPropertyImage11.files[0];
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      this.$refs.editImage11Display.src = reader.result;
    }.bind(this), false);
    reader.readAsDataURL(this.editPropertyData.pic11);
  }), _defineProperty(_methods, "editAttachImage12", function editAttachImage12() {
    this.editPropertyData.pic12 = this.$refs.editPropertyImage12.files[0];
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      this.$refs.editImage12Display.src = reader.result;
    }.bind(this), false);
    reader.readAsDataURL(this.editPropertyData.pic12);
  }), _defineProperty(_methods, "deleteReservedProperty", function () {
    var _deleteReservedProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee37(reserve) {
      var responce;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee37$(_context37) {
        while (1) {
          switch (_context37.prev = _context37.next) {
            case 0:
              if (window.confirm("Are you sure you want to delete this Reserved Property")) {
                _context37.next = 2;
                break;
              }

              return _context37.abrupt("return");

            case 2:
              _context37.prev = 2;
              _context37.next = 5;
              return _services_reserved_service__WEBPACK_IMPORTED_MODULE_5__["deleteReservedProperty"](reserve.id);

            case 5:
              responce = _context37.sent;
              this.reserved = this.reserved.filter(function (obj) {
                return obj.id != reserve.id;
              });
              this.flashMessage.success({
                message: 'Reserved Property deleted successfuly!',
                time: 5000
              });
              _context37.next = 13;
              break;

            case 10:
              _context37.prev = 10;
              _context37.t0 = _context37["catch"](2);
              this.flashMessage.error({
                message: 'Some thing going wrong!',
                time: 5000
              });

            case 13:
            case "end":
              return _context37.stop();
          }
        }
      }, _callee37, this, [[2, 10]]);
    }));

    function deleteReservedProperty(_x12) {
      return _deleteReservedProperty.apply(this, arguments);
    }

    return deleteReservedProperty;
  }()), _defineProperty(_methods, "searchEngagedProperty", function () {
    var _searchEngagedProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee38() {
      var query, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee38$(_context38) {
        while (1) {
          switch (_context38.prev = _context38.next) {
            case 0:
              _context38.prev = 0;
              query = {
                query: this.query
              };
              _context38.next = 4;
              return _services_reserved_service__WEBPACK_IMPORTED_MODULE_5__["searchEngagedProperty"](query);

            case 4:
              response = _context38.sent;
              this.reserved = response.data;
              _context38.next = 11;
              break;

            case 8:
              _context38.prev = 8;
              _context38.t0 = _context38["catch"](0);
              this.flashMessage.error({
                message: "Some error occurred",
                time: 5000
              });

            case 11:
            case "end":
              return _context38.stop();
          }
        }
      }, _callee38, this, [[0, 8]]);
    }));

    function searchEngagedProperty() {
      return _searchEngagedProperty.apply(this, arguments);
    }

    return searchEngagedProperty;
  }()), _defineProperty(_methods, "ReservedProperty", function () {
    var _ReservedProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee39() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee39$(_context39) {
        while (1) {
          switch (_context39.prev = _context39.next) {
            case 0:
              _context39.prev = 0;
              _context39.next = 3;
              return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["ReservedProperty"]();

            case 3:
              response = _context39.sent;
              this.reserved = response.data.data;

              if (response.data.current_page < response.data.last_page) {
                this.moreExistsReserved = true;
                this.nextPage = response.data.current_page + 1;
              } else {
                this.moreExistsReserved = false;
              }

              _context39.next = 11;
              break;

            case 8:
              _context39.prev = 8;
              _context39.t0 = _context39["catch"](0);
              this.flashMessage.error({
                message: 'Some error occurred!',
                time: 5000
              });

            case 11:
            case "end":
              return _context39.stop();
          }
        }
      }, _callee39, this, [[0, 8]]);
    }));

    function ReservedProperty() {
      return _ReservedProperty.apply(this, arguments);
    }

    return ReservedProperty;
  }()), _defineProperty(_methods, "loadReservedProperty", function () {
    var _loadReservedProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee40() {
      var _this6 = this;

      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee40$(_context40) {
        while (1) {
          switch (_context40.prev = _context40.next) {
            case 0:
              _context40.prev = 0;
              _context40.next = 3;
              return _services_properties_service__WEBPACK_IMPORTED_MODULE_2__["loadReservedProperty"](this.nextPage);

            case 3:
              response = _context40.sent;

              if (response.data.current_page < response.data.last_page) {
                this.moreExistsReserved = true;
                this.nextPage = response.data.current_page + 1;
              } else {
                this.moreExistsReserved = false;
              }

              response.data.data.forEach(function (data) {
                _this6.reserved.push(data);
              });
              _context40.next = 11;
              break;

            case 8:
              _context40.prev = 8;
              _context40.t0 = _context40["catch"](0);
              this.flashMessage.error({
                message: "Some error occurred during load more properties",
                time: 5000
              });

            case 11:
            case "end":
              return _context40.stop();
          }
        }
      }, _callee40, this, [[0, 8]]);
    }));

    function loadReservedProperty() {
      return _loadReservedProperty.apply(this, arguments);
    }

    return loadReservedProperty;
  }()), _defineProperty(_methods, "deleteReservedProperty", function () {
    var _deleteReservedProperty2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee41(reserve) {
      var responce;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee41$(_context41) {
        while (1) {
          switch (_context41.prev = _context41.next) {
            case 0:
              if (window.confirm("Are you sure you want to delete this Reserved Property")) {
                _context41.next = 2;
                break;
              }

              return _context41.abrupt("return");

            case 2:
              _context41.prev = 2;
              _context41.next = 5;
              return _services_reserved_service__WEBPACK_IMPORTED_MODULE_5__["deleteReservedProperty"](reserve.id);

            case 5:
              responce = _context41.sent;
              this.reserved = this.reserved.filter(function (obj) {
                return obj.id != reserve.id;
              });
              this.flashMessage.success({
                message: 'Reserved Property deleted successfuly!',
                time: 5000
              });
              _context41.next = 13;
              break;

            case 10:
              _context41.prev = 10;
              _context41.t0 = _context41["catch"](2);
              this.flashMessage.error({
                message: 'Some thing going wrong!',
                time: 5000
              });

            case 13:
            case "end":
              return _context41.stop();
          }
        }
      }, _callee41, this, [[2, 10]]);
    }));

    function deleteReservedProperty(_x13) {
      return _deleteReservedProperty2.apply(this, arguments);
    }

    return deleteReservedProperty;
  }()), _defineProperty(_methods, "searchEngagedProperty", function () {
    var _searchEngagedProperty2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee42() {
      var query, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee42$(_context42) {
        while (1) {
          switch (_context42.prev = _context42.next) {
            case 0:
              _context42.prev = 0;
              query = {
                query: this.query
              };
              _context42.next = 4;
              return _services_reserved_service__WEBPACK_IMPORTED_MODULE_5__["searchEngagedProperty"](query);

            case 4:
              response = _context42.sent;
              this.reserved = response.data;
              _context42.next = 11;
              break;

            case 8:
              _context42.prev = 8;
              _context42.t0 = _context42["catch"](0);
              this.flashMessage.error({
                message: "Some error occurred",
                time: 5000
              });

            case 11:
            case "end":
              return _context42.stop();
          }
        }
      }, _callee42, this, [[0, 8]]);
    }));

    function searchEngagedProperty() {
      return _searchEngagedProperty2.apply(this, arguments);
    }

    return searchEngagedProperty;
  }()), _defineProperty(_methods, "unPaidPropertyRent", function () {
    var _unPaidPropertyRent = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee43(properties) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee43$(_context43) {
        while (1) {
          switch (_context43.prev = _context43.next) {
            case 0:
              if (window.confirm("Are you sure you know that this Property Rent is not Paid yet")) {
                _context43.next = 2;
                break;
              }

              return _context43.abrupt("return");

            case 2:
              _context43.prev = 2;
              _context43.next = 5;
              return _services_csr_service__WEBPACK_IMPORTED_MODULE_1__["unPaidPropertyRent"](properties.id);

            case 5:
              response = _context43.sent;
              this.flashMessage.success({
                message: 'Your Successfully Change this property Rent type',
                time: 5000
              });
              this.getEngagedProperty();
              _context43.next = 13;
              break;

            case 10:
              _context43.prev = 10;
              _context43.t0 = _context43["catch"](2);
              this.flashMessage.errors({
                message: 'Some error occured!',
                time: 5000
              });

            case 13:
            case "end":
              return _context43.stop();
          }
        }
      }, _callee43, this, [[2, 10]]);
    }));

    function unPaidPropertyRent(_x14) {
      return _unPaidPropertyRent.apply(this, arguments);
    }

    return unPaidPropertyRent;
  }()), _methods)
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/csr/CsrDashboard.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/csr/CsrDashboard.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);", ""]);

// module
exports.push([module.i, "\n@media only screen and (max-width:660px ){\n.mobiledash{\n             display: flex;\n             justify-content: center;\n}\n.mobiledash{\n             margin-left: 0px !important;\n}\n}\n.form-popup {\n            display: none;\n            position: absolute;\n            width: 300px;\n            right: 50px;\n            border: 3px solid #F1F1F1;\n            z-index: 9;\n}\n.form-container {\n            max-width: 300px;\n            padding: 10px;\n            background-color: white;\n}\n.form-container input[type=text], .form-container input[type=password] {\n            width: 100%;\n            padding: 15px;\n            margin: 5px 0 22px 0;\n            border: none;\n            background: #F1F1F1;\n}\n.form-container input[type=text]:focus, .form-container input[type=password]:focus {\n            background-color: #ddd;\n            outline: none;\n}\n.form-container .btnsubmit {\n            color: white;\n}\n.form-container .btn:hover, .open-button:hover {\n            opacity: 1;\n}\n.invoice{\n}\n.invoiceform{\n            background:white;\n            border: 1px solid gray;\n}\n.invoiceform h5{\n            font-weight:bolder;\n}\n.invoiceform .part1{\n            background-color: #38b16e;\n            background-image: linear-gradient(to right,#42b45d,#20ab94);\n            color:white;\n            -webkit-clip-path:polygon(0 0, 100% 35%, 100% 65%, 0% 100%);\n            clip-path: polygon(0 0, 73% 0%, 100% 100%, 0% 100%);\n            width:90%;\n            height:151px;\n            z-index:2;\n            position:absolute;\n            padding: 20px;\n}\n.invoiceform .bgpart1{\n            background-color: black;\n            background-image: linear-gradient(to right,black,#20ab94);\n            color:white;\n            -webkit-clip-path:polygon(0 0, 100% 35%, 100% 65%, 0% 100%);\n            clip-path: polygon(0 0, 73% 0%, 100% 100%, 0% 100%);\n            width:100%;\n            height:151px;\n}\n.invoiceform .part1 h1{\n            font-family: 'Roboto', sans-serif;\n            letter-spacing:0.5rem;\n}\n.logoimg{\n            background-color: #2E86C1;\n            background-image: linear-gradient(to left,#85C1E9 ,#2874A6);\n            color: #fff;\n            height: 200px;\n            font-weight: bolder;\n            border-top-left-radius: 12px;\n}\n.part2{\n            margin-top: 10px;\n}\n.thead{\n            background-color: #38b16e;\n            background-image: linear-gradient(to right,#42b45d,#20ab94);\n            color:white;\n}\n.part1sbtotal{\n            background-color: #38b16e;\n            background-image: linear-gradient(to right,#42b45d,#20ab94);\n            color:white;\n            -webkit-clip-path:polygon(0 0, 100% 35%, 100% 65%, 0% 100%);\n            clip-path: polygon(0 0, 100% 0%, 100% 100%,6% 3%);\n            width:93%;\n            height:107px;\n            z-index:2;\n            position:absolute;\n}\n.part2sbtotal{\n            background-color: #0b0b0b;\n            background-image: linear-gradient(to right,#164203,#20AB94);\n            color: white;\n            -webkit-clip-path: polygon(0 0, 100% 35%, 100% 65%, 0% 100%);\n            clip-path: polygon(0 0, 100% 0%, 100% 100%);\n            width: 100%;\n            height: 119px;\n}\n#inputdesign {\n        width: 100%;\n        height: 120px;\n        background: white;\n        position: relative;\n        border-radius: 10px;\n        padding: 5px;\n        box-shadow: 3px 5px 5px 5px #888888;\n        border-bottom-left-radius: 30px;\n        border-top-right-radius: 39px;\n}\n#talkbubble {\n      width: 200px;\n      height:auto;\n      background: white;\n      position: relative;\n      border-radius: 10px;\n      padding: 5px;\n      box-shadow: 3px 5px 5px 5px #888888;\n      margin-bottom: 20px;\n      border-bottom-left-radius: 30px;\n      border-top-right-radius: 39px;\n}\n#talkbubble:after {\n      content: \"\";\n      position: absolute;\n      left: 100%;\n      top: 35px;\n      width: 0;\n      height: 0;\n      border-top: 13px solid transparent;\n      border-left: 26px solid white;\n      border-right-width: 20px solid transparent;\n      border-bottom: 13px solid transparent;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/csr/CsrDashboard.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/csr/CsrDashboard.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CsrDashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/csr/CsrDashboard.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/csr/CsrDashboard.vue?vue&type=template&id=2e42e33e&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/csr/CsrDashboard.vue?vue&type=template&id=2e42e33e& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "w-100" },
    [
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
                    { attrs: { title: "Invoice" } },
                    [
                      _c("b-card-text", [
                        _c("div", { staticClass: "container-fluid" }, [
                          _c("div", { staticClass: "card shadow mb-4" }, [
                            _c(
                              "div",
                              {
                                staticClass: "card-header d-flex bd-highlight"
                              },
                              [
                                _c(
                                  "h6",
                                  {
                                    staticClass:
                                      "bd-highlight font-weight-bold text-success"
                                  },
                                  [
                                    _vm._v(
                                      "Total Properties :" +
                                        _vm._s(_vm.totalProperties) +
                                        " "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "h6",
                                  {
                                    staticClass:
                                      "bd-highlight font-weight-bold text-success d-block ml-auto"
                                  },
                                  [
                                    _vm._v(
                                      "Total Rent :" + _vm._s(_vm.allRent) + " "
                                    )
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
                                          _vm._v("Landlord")
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { attrs: { scope: "col" } }, [
                                          _vm._v("Phone")
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
                                          _vm._v("Area")
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
                                        property.rent === "paid"
                                          ? _c(
                                              "tr",
                                              { staticClass: "text-success" },
                                              [
                                                _c(
                                                  "th",
                                                  { attrs: { scope: "row" } },
                                                  [_vm._v(_vm._s(index + 1))]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "router-link",
                                                  {
                                                    attrs: {
                                                      to: {
                                                        name:
                                                          "user-profile-csr",
                                                        params: {
                                                          id: property.user_id
                                                        }
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "text-success"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            property.user.name
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(property.user.phone)
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
                                                    _vm._s(
                                                      property.city.city_name
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
                                                  _vm._v(
                                                    _vm._s(property.rent_price)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(property.status)
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
                                                          "data-toggle":
                                                            "modal",
                                                          "data-target":
                                                            ".bd-example-modal-lg"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.deleteProperty(
                                                              property
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-trash"
                                                        })
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-success btn-sm",
                                                        attrs: {
                                                          type: "button"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
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
                                                            name: "show-csr",
                                                            params: {
                                                              id: property.id
                                                            }
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "btn btn-warning btn-sm",
                                                            attrs: {
                                                              type: "button"
                                                            }
                                                          },
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "fas fa-eye"
                                                            })
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          : _c(
                                              "tr",
                                              [
                                                _c(
                                                  "th",
                                                  { attrs: { scope: "row" } },
                                                  [_vm._v(_vm._s(index + 1))]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "router-link",
                                                  {
                                                    attrs: {
                                                      to: {
                                                        name:
                                                          "user-profile-csr",
                                                        params: {
                                                          id: property.user_id
                                                        }
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "text-success"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            property.user.name
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(property.user.phone)
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
                                                    _vm._s(
                                                      property.city.city_name
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
                                                  _vm._v(
                                                    _vm._s(property.rent_price)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(property.status)
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
                                                          "data-toggle":
                                                            "modal",
                                                          "data-target":
                                                            ".bd-example-modal-lg"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.deleteProperty(
                                                              property
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-trash"
                                                        })
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-success btn-sm",
                                                        attrs: {
                                                          type: "button"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
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
                                                            name: "show-csr",
                                                            params: {
                                                              id: property.id
                                                            }
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "btn btn-warning btn-sm",
                                                            attrs: {
                                                              type: "button"
                                                            }
                                                          },
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "fas fa-eye"
                                                            })
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                      ])
                                    })
                                  ],
                                  2
                                )
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
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-arrow-down"
                                      })
                                    ]
                                  )
                                ]
                              )
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
                    { attrs: { title: "Total Property" } },
                    [
                      _c("b-card-text", [
                        _c("div", { staticClass: "container-fluid" }, [
                          _c("div", { staticClass: "card shadow mb-4" }, [
                            _c(
                              "div",
                              {
                                staticClass: "card-header d-flex bd-highlight"
                              },
                              [
                                _c(
                                  "h6",
                                  {
                                    staticClass:
                                      "bd-highlight font-weight-bold text-success"
                                  },
                                  [
                                    _vm._v(
                                      "Total Properties :" +
                                        _vm._s(_vm.totalProperties) +
                                        " "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "h6",
                                  {
                                    staticClass:
                                      "bd-highlight font-weight-bold text-success d-block ml-auto"
                                  },
                                  [
                                    _vm._v(
                                      "Total Rent :" + _vm._s(_vm.allRent) + " "
                                    )
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
                                          _vm._v("Property")
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { attrs: { scope: "col" } }, [
                                          _vm._v("City")
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { attrs: { scope: "col" } }, [
                                          _vm._v("Area")
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
                                          _vm._v("Rent")
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { attrs: { scope: "col" } }, [
                                          _vm._v("Marital Status")
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { attrs: { scope: "col" } }, [
                                          _vm._v("React")
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
                                        property.rent === "paid"
                                          ? _c(
                                              "tr",
                                              { staticClass: "text-success" },
                                              [
                                                _c(
                                                  "th",
                                                  { attrs: { scope: "row" } },
                                                  [_vm._v(_vm._s(index + 1))]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "router-link",
                                                  {
                                                    attrs: {
                                                      to: {
                                                        name:
                                                          "user-profile-csr",
                                                        params: {
                                                          id: property.user_id
                                                        }
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "text-success"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            property.user.name
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(property.user.phone)
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
                                                    _vm._s(
                                                      property.city.city_name
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
                                                  _vm._v(
                                                    _vm._s(property.rent_price)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(property.status)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(property.rent))
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      property.marital_status
                                                    )
                                                  )
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
                                                          _vm._s(
                                                            property.like_count
                                                          )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "i",
                                                    {
                                                      staticClass:
                                                        "fa fa-eye text-info"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          property.seen_count
                                                        )
                                                      )
                                                    ]
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
                                                          "btn btn-danger btn-sm",
                                                        attrs: {
                                                          type: "button",
                                                          "data-toggle":
                                                            "modal",
                                                          "data-target":
                                                            ".bd-example-modal-lg"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.deleteProperty(
                                                              property
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-trash"
                                                        })
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-success btn-sm",
                                                        attrs: {
                                                          type: "button"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
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
                                                            name: "show-csr",
                                                            params: {
                                                              id: property.id
                                                            }
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "btn btn-warning btn-sm",
                                                            attrs: {
                                                              type: "button"
                                                            }
                                                          },
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "fas fa-eye"
                                                            })
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          : _c(
                                              "tr",
                                              [
                                                _c(
                                                  "th",
                                                  { attrs: { scope: "row" } },
                                                  [_vm._v(_vm._s(index + 1))]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "router-link",
                                                  {
                                                    attrs: {
                                                      to: {
                                                        name:
                                                          "user-profile-csr",
                                                        params: {
                                                          id: property.user_id
                                                        }
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "text-success"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            property.user.name
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(property.user.phone)
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
                                                    _vm._s(
                                                      property.city.city_name
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
                                                  _vm._v(
                                                    _vm._s(property.rent_price)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(property.status)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(property.rent))
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      property.marital_status
                                                    )
                                                  )
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
                                                          _vm._s(
                                                            property.like_count
                                                          )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "i",
                                                    {
                                                      staticClass:
                                                        "fa fa-eye text-info"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          property.seen_count
                                                        )
                                                      )
                                                    ]
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
                                                          "btn btn-danger btn-sm",
                                                        attrs: {
                                                          type: "button",
                                                          "data-toggle":
                                                            "modal",
                                                          "data-target":
                                                            ".bd-example-modal-lg"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.deleteProperty(
                                                              property
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-trash"
                                                        })
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-success btn-sm",
                                                        attrs: {
                                                          type: "button"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
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
                                                            name: "show-csr",
                                                            params: {
                                                              id: property.id
                                                            }
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "btn btn-warning btn-sm",
                                                            attrs: {
                                                              type: "button"
                                                            }
                                                          },
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "fas fa-eye"
                                                            })
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                      ])
                                    })
                                  ],
                                  2
                                )
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
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-arrow-down"
                                      })
                                    ]
                                  )
                                ]
                              )
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
                    { attrs: { title: "Rerserved Properties" } },
                    [
                      _c("b-card-text", [
                        _c("div", { staticClass: "container-fluid" }, [
                          _c("div", { staticClass: "card shadow mb-4" }, [
                            _c(
                              "div",
                              {
                                staticClass: "card-header d-flex bd-highlight"
                              },
                              [
                                _c(
                                  "h6",
                                  {
                                    staticClass:
                                      "bd-highlight font-weight-bold text-success"
                                  },
                                  [
                                    _vm._v(
                                      "Rerserved Properties :" +
                                        _vm._s(_vm.totalReservedProperty)
                                    )
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
                                          _vm._v("Renter")
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
                                          _vm._v("property size")
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { attrs: { scope: "col" } }, [
                                          _vm._v("Rent Price")
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { attrs: { scope: "col" } }, [
                                          _vm._v("Marital Status")
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { attrs: { scope: "col" } }, [
                                          _vm._v("Phone")
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { attrs: { scope: "col" } }, [
                                          _vm._v("Action")
                                        ])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _vm._l(_vm.reserved, function(
                                      reserve,
                                      index
                                    ) {
                                      return _c("tbody", { key: index }, [
                                        reserve.rent === "paid"
                                          ? _c(
                                              "tr",
                                              { staticClass: "text-success" },
                                              [
                                                _c(
                                                  "th",
                                                  { attrs: { scope: "row" } },
                                                  [_vm._v(_vm._s(index + 1))]
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(reserve.name))
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      reserve.property_name
                                                    )
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(reserve.city_name)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(reserve.size) +
                                                      " " +
                                                      _vm._s(reserve.unit)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(reserve.rent_price)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(reserve.m_status)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(reserve.phone))
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
                                                          "data-toggle":
                                                            "modal",
                                                          "data-target":
                                                            ".bd-example-modal-lg"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.deleteReservedProperty(
                                                              reserve
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fa fa-ban",
                                                          attrs: {
                                                            "aria-hidden":
                                                              "true"
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
                                                            name: "show-csr",
                                                            params: {
                                                              id: reserve.id
                                                            }
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "btn btn-warning btn-sm",
                                                            attrs: {
                                                              type: "button"
                                                            }
                                                          },
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "fas fa-eye"
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
                                              { staticClass: "text-danger" },
                                              [
                                                _c(
                                                  "th",
                                                  { attrs: { scope: "row" } },
                                                  [_vm._v(_vm._s(index + 1))]
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      reserve.property_name
                                                    )
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(reserve.city_name)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(reserve.size) +
                                                      " " +
                                                      _vm._s(reserve.unit)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(reserve.rent_price)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(reserve.name))
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(reserve.m_status)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(reserve.phone))
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
                                                          "data-toggle":
                                                            "modal",
                                                          "data-target":
                                                            ".bd-example-modal-lg"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.deleteReservedProperty(
                                                              reserve
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fa fa-ban",
                                                          attrs: {
                                                            "aria-hidden":
                                                              "true"
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
                                                            name: "show-csr",
                                                            params: {
                                                              id: reserve.id
                                                            }
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "btn btn-warning btn-sm",
                                                            attrs: {
                                                              type: "button"
                                                            }
                                                          },
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "fas fa-eye"
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
                                        value: _vm.moreExistsReserved,
                                        expression: "moreExistsReserved"
                                      }
                                    ]
                                  },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-info btn-sm",
                                        attrs: { type: "button" },
                                        on: { click: _vm.loadReservedProperty }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fas fa-arrow-down"
                                        })
                                      ]
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
                  _c(
                    "b-tab",
                    { attrs: { title: "Engages Property" } },
                    [
                      _c("b-card-text", [
                        _c("div", { staticClass: "container-fluid" }, [
                          _c("div", { staticClass: "card shadow mb-4" }, [
                            _c(
                              "div",
                              {
                                staticClass: "card-header d-flex bd-highlight"
                              },
                              [
                                _c(
                                  "h6",
                                  {
                                    staticClass:
                                      "bd-highlight font-weight-bold text-success"
                                  },
                                  [
                                    _vm._v(
                                      "Engaged Property :" +
                                        _vm._s(_vm.runningProperty) +
                                        " "
                                    )
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
                                          _vm._v("Renter")
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { attrs: { scope: "col" } }, [
                                          _vm._v("Phone")
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { attrs: { scope: "col" } }, [
                                          _vm._v("Action")
                                        ])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _vm._l(_vm.engaged, function(
                                      engage,
                                      index
                                    ) {
                                      return _c("tbody", { key: index }, [
                                        engage.rent === "paid"
                                          ? _c(
                                              "tr",
                                              { staticClass: "text-success" },
                                              [
                                                _c(
                                                  "th",
                                                  { attrs: { scope: "row" } },
                                                  [_vm._v(_vm._s(index + 1))]
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(engage.property_name)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(engage.city_name)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(engage.size) +
                                                      " " +
                                                      _vm._s(engage.unit)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(engage.rent_price)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(engage.furnished)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(engage.name))
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(engage.phone))
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
                                                          "data-toggle":
                                                            "modal",
                                                          "data-target":
                                                            ".bd-example-modal-lg"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.deleteReservedProperty(
                                                              engage
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-trash"
                                                        })
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "router-link",
                                                      {
                                                        attrs: {
                                                          to: {
                                                            name: "show-csr",
                                                            params: {
                                                              id: engage.id
                                                            }
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "btn btn-warning btn-sm",
                                                            attrs: {
                                                              type: "button"
                                                            }
                                                          },
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "fas fa-eye"
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
                                              { staticClass: "text-danger" },
                                              [
                                                _c(
                                                  "th",
                                                  { attrs: { scope: "row" } },
                                                  [_vm._v(_vm._s(index + 1))]
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(engage.property_name)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(engage.city_name)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(engage.size) +
                                                      " " +
                                                      _vm._s(engage.unit)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(engage.rent_price)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(engage.furnished)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(engage.name))
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(engage.phone))
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
                                                          "data-toggle":
                                                            "modal",
                                                          "data-target":
                                                            ".bd-example-modal-lg"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.deleteReservedProperty(
                                                              engage
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-trash"
                                                        })
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "router-link",
                                                      {
                                                        attrs: {
                                                          to: {
                                                            name: "show-csr",
                                                            params: {
                                                              id: engage.id
                                                            }
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "btn btn-warning btn-sm",
                                                            attrs: {
                                                              type: "button"
                                                            }
                                                          },
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "fas fa-eye"
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
                                        value: _vm.moreExistsEngaged,
                                        expression: "moreExistsEngaged"
                                      }
                                    ]
                                  },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-info btn-sm",
                                        attrs: { type: "button" },
                                        on: { click: _vm.loadEngagedProperty }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fas fa-arrow-down"
                                        })
                                      ]
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
                  _c(
                    "b-tab",
                    { attrs: { title: "Paid Rent" } },
                    [
                      _c("b-card-text", [
                        _c("div", { staticClass: "container-fluid" }, [
                          _c("div", { staticClass: "card shadow mb-4" }, [
                            _c(
                              "div",
                              {
                                staticClass: "card-header d-flex bd-highlight"
                              },
                              [
                                _c(
                                  "h6",
                                  {
                                    staticClass:
                                      "bd-highlight font-weight-bold text-success"
                                  },
                                  [
                                    _vm._v(
                                      "Piad Rent Property :" +
                                        _vm._s(_vm.paidRent)
                                    )
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
                                          _vm._v("Landloard")
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { attrs: { scope: "col" } }, [
                                          _vm._v("Phone")
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
                                          _vm._v("Sector")
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { attrs: { scope: "col" } }, [
                                          _vm._v("Property Size")
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { attrs: { scope: "col" } }, [
                                          _vm._v("Rent Price")
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
                                      _vm._l(_vm.paids, function(paid, index) {
                                        return _c("tr", { key: index }, [
                                          _c(
                                            "th",
                                            { attrs: { scope: "row" } },
                                            [_vm._v(_vm._s(index + 1))]
                                          ),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(_vm._s(paid.name))]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(paid.phone))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(paid.property_name))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(paid.city_name))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(paid.sector))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(paid.size) +
                                                " " +
                                                _vm._s(paid.unit)
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(paid.rent_price))
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
                                                      name: "show-csr",
                                                      params: { id: paid.id }
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
                                                        staticClass:
                                                          "fas fa-eye"
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
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.moreExistsPaid,
                                        expression: "moreExistsPaid"
                                      }
                                    ]
                                  },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-info btn-sm",
                                        attrs: { type: "button" },
                                        on: { click: _vm.loadPaidProperty }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fas fa-arrow-down"
                                        })
                                      ]
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
                  _c(
                    "b-tab",
                    { attrs: { title: "Un - Paid Rent" } },
                    [
                      _c("b-card-text", [
                        _c("div", { staticClass: "container-fluid" }, [
                          _c("div", { staticClass: "card shadow mb-4" }, [
                            _c(
                              "div",
                              {
                                staticClass: "card-header d-flex bd-highlight"
                              },
                              [
                                _c(
                                  "h6",
                                  {
                                    staticClass:
                                      "bd-highlight font-weight-bold text-success"
                                  },
                                  [
                                    _vm._v(
                                      "Un-Paid Property :" +
                                        _vm._s(_vm.penddingRent)
                                    )
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
                                          _vm._v("Landloard")
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { attrs: { scope: "col" } }, [
                                          _vm._v("Phone")
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
                                          _vm._v("Sector")
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { attrs: { scope: "col" } }, [
                                          _vm._v("Property Size")
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { attrs: { scope: "col" } }, [
                                          _vm._v("Rent Price")
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
                                      _vm._l(_vm.Unpaids, function(
                                        Unpaid,
                                        index
                                      ) {
                                        return _c("tr", { key: index }, [
                                          _c(
                                            "th",
                                            { attrs: { scope: "row" } },
                                            [_vm._v(_vm._s(index + 1))]
                                          ),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(Unpaid.name))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(Unpaid.phone))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(Unpaid.property_name))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(Unpaid.city_name))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(Unpaid.sector))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(Unpaid.size) +
                                                " " +
                                                _vm._s(Unpaid.unit)
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(Unpaid.rent_price))
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
                                                      name: "show-csr",
                                                      params: { id: Unpaid.id }
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
                                                        staticClass:
                                                          "fas fa-eye"
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
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.moreExistsUnPaid,
                                        expression: "moreExistsUnPaid"
                                      }
                                    ]
                                  },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-info btn-sm",
                                        attrs: { type: "button" },
                                        on: { click: _vm.loadUnPaidProperty }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fas fa-arrow-down"
                                        })
                                      ]
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
                                          staticClass:
                                            "text-warning text-center",
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
                                        attrs: {
                                          type: "text",
                                          id: "inputdesign"
                                        }
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
                                          _c(
                                            "option",
                                            { attrs: { value: "" } },
                                            [_vm._v("Select Landlord")]
                                          ),
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
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "editProperty",
          attrs: { id: "modal-lg", "hide-footer": "", size: "lg" }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateProperty($event)
                }
              }
            },
            [
              _c("div", { staticClass: "section postdetails" }, [
                _c("h4", [_vm._v("Update Details")]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "label-title" }, [
                        _vm._v(
                          "\n                                Title for your Ad\n                                "
                        ),
                        _c("span", { staticClass: "required" }, [_vm._v("*")])
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.editPropertyData.title,
                            expression: "editPropertyData.title"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "text",
                          placeholder: "Title of your Add"
                        },
                        domProps: { value: _vm.editPropertyData.title },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.editPropertyData,
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
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "label-title" }, [
                        _vm._v(
                          "\n                                    Property Type\n                                    "
                        ),
                        _c("span", { staticClass: "required" }, [_vm._v("*")])
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.editPropertyData.propertytype_id,
                              expression: "editPropertyData.propertytype_id"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "propertytype" },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.editPropertyData,
                                  "propertytype_id",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              _vm.showHide
                            ]
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Select Your Property Type")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.protypes, function(protype, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: protype.id } },
                              [_vm._v(_vm._s(protype.property_name))]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors.property_type
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              _vm._s(_vm.errors.property_type[0]) +
                                "\n                                "
                            )
                          ])
                        : _vm._e()
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row form-group add-title" }, [
                  _c("label", { staticClass: "label-title" }, [
                    _vm._v(
                      "\n                            Description\n                            "
                    ),
                    _c("span", { staticClass: "required" }, [_vm._v("*")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-12" },
                    [
                      _c("vue-editor", {
                        model: {
                          value: _vm.editPropertyData.description,
                          callback: function($$v) {
                            _vm.$set(_vm.editPropertyData, "description", $$v)
                          },
                          expression: "editPropertyData.description"
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.description
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(_vm._s(_vm.errors.description[0]))
                          ])
                        : _vm._e()
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-6 col-sm-6" }, [
                    _c("div", { staticClass: "row form-group add-title" }, [
                      _c("label", { staticClass: "label-title" }, [
                        _vm._v(
                          "\n                                    City\n                                    "
                        ),
                        _c("span", { staticClass: "required" }, [_vm._v("*")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-12" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.editPropertyData.city_id,
                                expression: "editPropertyData.city_id"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "city" },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.editPropertyData,
                                    "city_id",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                function($event) {
                                  return _vm.getSectors()
                                }
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select City")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.cities, function(city, index) {
                              return _c(
                                "option",
                                { key: index, domProps: { value: city.id } },
                                [_vm._v(_vm._s(city.city_name))]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm.errors.city
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.city[0]))
                            ])
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6 col-sm-6" }, [
                    _c("div", { staticClass: "row form-group add-title" }, [
                      _c("label", { staticClass: " label-title" }, [
                        _vm._v(
                          "\n                                    Sector\n                                    "
                        ),
                        _c("span", { staticClass: "required" }, [_vm._v("*")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-12" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.editPropertyData.sector_id,
                                expression: "editPropertyData.sector_id"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "propertytype" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.editPropertyData,
                                  "sector_id",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select Your Property Type")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.sectors, function(sector, index) {
                              return _c(
                                "option",
                                { key: index, domProps: { value: sector.id } },
                                [_vm._v(_vm._s(sector.sector))]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm.errors.property_type
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.property_type[0]))
                            ])
                          : _vm._e()
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-6 col-md-6" }, [
                    _c("div", { staticClass: "row form-group add-title" }, [
                      _c("label", { staticClass: "label-title" }, [
                        _vm._v(
                          "\n                                    Badrooms\n                                    "
                        ),
                        _c("span", { staticClass: "required" }, [_vm._v("*")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-12" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.editPropertyData.badrooms,
                                expression: "editPropertyData.badrooms"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "badrooms" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.editPropertyData,
                                  "badrooms",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select Badrooms")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("2")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("3")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "4" } }, [
                              _vm._v("4")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "5" } }, [
                              _vm._v("5")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "6" } }, [
                              _vm._v("6+")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "studio" } }, [
                              _vm._v("studio")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _vm.errors.badrooms
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.badrooms[0]))
                            ])
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6 col-md-6" }, [
                    _c("div", { staticClass: "row form-group add-title" }, [
                      _c("label", { staticClass: "label-title" }, [
                        _vm._v(
                          "\n                                    Bathrooms\n                                    "
                        ),
                        _c("span", { staticClass: "required" }, [_vm._v("*")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-12" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.editPropertyData.bathrooms,
                                expression: "editPropertyData.bathrooms"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "bathroom" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.editPropertyData,
                                  "bathrooms",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select Bathrooms")
                            ]),
                            _vm._v(" "),
                            _c("option", [_vm._v("2")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("3")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("4")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("5")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("6")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("7+")])
                          ]
                        ),
                        _vm._v(" "),
                        _vm.errors.bathrooms
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.bathrooms[0]))
                            ])
                          : _vm._e()
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-4 col-md-4" }, [
                    _c("div", { staticClass: "row form-group add-title" }, [
                      _c("label", { staticClass: "label-title" }, [
                        _vm._v(
                          "\n                                Marital Status\n                                "
                        ),
                        _c("span", { staticClass: "required" }, [_vm._v("*")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-12" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.editPropertyData.marital_status,
                                expression: "editPropertyData.marital_status"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "unit" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.editPropertyData,
                                  "marital_status",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select  Marital Status")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "family" } }, [
                              _vm._v("Family")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "bachelor" } }, [
                              _vm._v("Bachelor")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "both" } }, [
                              _vm._v("Both")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _vm.errors.marital_status
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.marital_status[0]))
                            ])
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-4 col-md-4" }, [
                    _c("div", { staticClass: "row form-group add-title" }, [
                      _c("label", { staticClass: "label-title" }, [
                        _vm._v(
                          "\n                                Unit\n                                "
                        ),
                        _c("span", { staticClass: "required" }, [_vm._v("*")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-12" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.editPropertyData.unit,
                                expression: "editPropertyData.unit"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "unit" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.editPropertyData,
                                  "unit",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Enter Unit")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "kanal" } }, [
                              _vm._v("Kanal")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "marla" } }, [
                              _vm._v("Marla")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "squre feet" } }, [
                              _vm._v("Squre Feet")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "squre meter" } }, [
                              _vm._v("Squre Meter")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "squre yards" } }, [
                              _vm._v("Squre Yards")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _vm.errors.unit
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.unit[0]))
                            ])
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-4 col-md-4" }, [
                    _c("div", { staticClass: "row form-group add-title" }, [
                      _c("label", { staticClass: "label-title" }, [
                        _vm._v(
                          "\n                                    Size\n                                    "
                        ),
                        _c("span", { staticClass: "required" }, [_vm._v("*")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-12" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.editPropertyData.size,
                              expression: "editPropertyData.size"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "text" },
                          domProps: { value: _vm.editPropertyData.size },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editPropertyData,
                                "size",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.size
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.size[0]))
                            ])
                          : _vm._e()
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-6 col-md-6" }, [
                    _c("div", { staticClass: "row form-group add-title" }, [
                      _c("label", { staticClass: "label-title" }, [
                        _vm._v(
                          "\n                                Address\n                                "
                        ),
                        _c("span", { staticClass: "required" }, [_vm._v("*")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-12" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.editPropertyData.address,
                              expression: "editPropertyData.address"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "text",
                            placeholder:
                              "ex, Sony Xperia dual sim 100% brand new "
                          },
                          domProps: { value: _vm.editPropertyData.address },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editPropertyData,
                                "address",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.address
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.address[0]))
                            ])
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6 col-md-6" }, [
                    _c("div", { staticClass: "row form-group add-title" }, [
                      _c("label", { staticClass: "label-title" }, [
                        _vm._v(
                          "\n                                Price\n                                "
                        ),
                        _c("span", { staticClass: "required" }, [_vm._v("*")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-12" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.editPropertyData.rent_price,
                              expression: "editPropertyData.rent_price"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Enter Property Rent",
                            id: "text1"
                          },
                          domProps: { value: _vm.editPropertyData.rent_price },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editPropertyData,
                                "rent_price",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: " col-md-4" }, [
                    _c(
                      "div",
                      { staticClass: "row form-group select-condition" },
                      [
                        _c("label", { staticClass: "col-md-4" }, [
                          _vm._v(
                            "\n                                Tv Lounge\n                                "
                          ),
                          _c("span", { staticClass: "required" }, [_vm._v("*")])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-8" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "custom-control custom-radio custom-control-inline"
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.editPropertyData.tv_lounged,
                                    expression: "editPropertyData.tv_lounged"
                                  }
                                ],
                                staticClass: "custom-control-input",
                                attrs: {
                                  type: "radio",
                                  id: "customRadioInline1",
                                  value: "Yes",
                                  name: "tvlounge"
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.editPropertyData.tv_lounged,
                                    "Yes"
                                  )
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.$set(
                                      _vm.editPropertyData,
                                      "tv_lounged",
                                      "Yes"
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.tvlounge
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v(_vm._s(_vm.errors.tvlounge[0]))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "custom-control-label",
                                  attrs: { for: "customRadioInline1" }
                                },
                                [_vm._v("Yes")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "custom-control custom-radio custom-control-inline"
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.editPropertyData.tv_lounged,
                                    expression: "editPropertyData.tv_lounged"
                                  }
                                ],
                                staticClass: "custom-control-input",
                                attrs: {
                                  type: "radio",
                                  id: "customRadioInline2",
                                  value: "No",
                                  name: "tvlounge"
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.editPropertyData.tv_lounged,
                                    "No"
                                  )
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.$set(
                                      _vm.editPropertyData,
                                      "tv_lounged",
                                      "No"
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "custom-control-label",
                                  attrs: { for: "customRadioInline2" }
                                },
                                [_vm._v("No")]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _c(
                      "div",
                      { staticClass: "row form-group select-condition" },
                      [
                        _c("label", { staticClass: "col-md-4" }, [
                          _vm._v(
                            "\n                                    Furnished\n                                    "
                          ),
                          _c("span", { staticClass: "required" }, [_vm._v("*")])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-8 d-inline-flex" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "custom-control custom-radio custom-control-inline"
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.editPropertyData.furnished,
                                    expression: "editPropertyData.furnished"
                                  }
                                ],
                                staticClass: "custom-control-input",
                                attrs: {
                                  type: "radio",
                                  id: "customRadioInline3",
                                  value: "Yes",
                                  name: "furnished"
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.editPropertyData.furnished,
                                    "Yes"
                                  )
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.$set(
                                      _vm.editPropertyData,
                                      "furnished",
                                      "Yes"
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.furnished
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v(_vm._s(_vm.errors.furnished[0]))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "custom-control-label",
                                  attrs: { for: "customRadioInline3" }
                                },
                                [_vm._v("Yes")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "custom-control custom-radio custom-control-inline"
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.editPropertyData.furnished,
                                    expression: "editPropertyData.furnished"
                                  }
                                ],
                                staticClass: "custom-control-input",
                                attrs: {
                                  type: "radio",
                                  id: "customRadioInline4",
                                  value: "No",
                                  name: "furnished"
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.editPropertyData.furnished,
                                    "No"
                                  )
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.$set(
                                      _vm.editPropertyData,
                                      "furnished",
                                      "No"
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "custom-control-label",
                                  attrs: { for: "customRadioInline4" }
                                },
                                [_vm._v("NO")]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _c(
                      "div",
                      { staticClass: "row form-group select-condition" },
                      [
                        _c("label", { staticClass: "col-md-4" }, [
                          _vm._v(
                            "\n                                    Garage\n                                    "
                          ),
                          _c("span", { staticClass: "required" }, [_vm._v("*")])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-8 d-inline-flex" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "custom-control custom-radio custom-control-inline"
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.editPropertyData.garage,
                                    expression: "editPropertyData.garage"
                                  }
                                ],
                                staticClass: "custom-control-input",
                                attrs: {
                                  type: "radio",
                                  id: "customRadioInline5",
                                  value: "Yes",
                                  name: "garege"
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.editPropertyData.garage,
                                    "Yes"
                                  )
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.$set(
                                      _vm.editPropertyData,
                                      "garage",
                                      "Yes"
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.garage
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v(_vm._s(_vm.errors.garage[0]))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "custom-control-label",
                                  attrs: { for: "customRadioInline5" }
                                },
                                [_vm._v("Yes")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "custom-control custom-radio custom-control-inline"
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.editPropertyData.garage,
                                    expression: "editPropertyData.garage"
                                  }
                                ],
                                staticClass: "custom-control-input",
                                attrs: {
                                  type: "radio",
                                  id: "customRadioInline6",
                                  value: "No",
                                  name: "garage"
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.editPropertyData.garage,
                                    "No"
                                  )
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.$set(
                                      _vm.editPropertyData,
                                      "garage",
                                      "No"
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "custom-control-label",
                                  attrs: { for: "customRadioInline6" }
                                },
                                [_vm._v("NO")]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("label", { staticClass: "col-md-3 label-title" }, [
                    _vm._v(
                      "\n                            Piture\n                            "
                    ),
                    _c("span", { staticClass: "required" }, [_vm._v("*")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
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
                              _vm.editPropertyData.pic1
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "avatar-edit" }, [
                        _c("input", {
                          ref: "editPropertyImage",
                          attrs: {
                            type: "file",
                            id: "imageUpload1",
                            accept: ".png, .jpg, .jpeg"
                          },
                          on: { change: _vm.editAttachImage }
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "imageUpload1" } })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("div", { staticClass: "avatar-upload" }, [
                      _c("div", { staticClass: "avatar-preview" }, [
                        _c("img", {
                          ref: "editImage2Display",
                          staticClass: "w-100 h-100",
                          attrs: {
                            id: "imagePreview2",
                            src:
                              _vm.$store.state.serverPath +
                              "storage/" +
                              _vm.editPropertyData.pic2
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "avatar-edit" }, [
                        _c("input", {
                          ref: "editPropertyImage2",
                          attrs: {
                            type: "file",
                            id: "imageUpload2",
                            accept: ".png, .jpg, .jpeg"
                          },
                          on: { change: _vm.editAttachImage2 }
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "imageUpload2" } })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("div", { staticClass: "avatar-upload" }, [
                      _c("div", { staticClass: "avatar-preview" }, [
                        _c("img", {
                          ref: "editImage3Display",
                          staticClass: "w-100 h-100",
                          attrs: {
                            id: "imagePreview3",
                            src:
                              _vm.$store.state.serverPath +
                              "storage/" +
                              _vm.editPropertyData.pic3
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "avatar-edit" }, [
                        _c("input", {
                          ref: "editPropertyImage3",
                          attrs: {
                            type: "file",
                            id: "imageUpload3",
                            accept: ".png, .jpg, .jpeg"
                          },
                          on: { change: _vm.editAttachImage3 }
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "imageUpload3" } })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("div", { staticClass: "avatar-upload" }, [
                      _c("div", { staticClass: "avatar-preview" }, [
                        _c("img", {
                          ref: "editImage4Display",
                          staticClass: "w-100 h-100",
                          attrs: {
                            id: "imagePreview4",
                            src:
                              _vm.$store.state.serverPath +
                              "storage/" +
                              _vm.editPropertyData.pic3
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "avatar-edit" }, [
                        _c("input", {
                          ref: "editPropertyImage4",
                          attrs: {
                            type: "file",
                            id: "imageUpload4",
                            accept: ".png, .jpg, .jpeg"
                          },
                          on: { change: _vm.editAttachImage4 }
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "imageUpload4" } })
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("label", { staticClass: "col-md-3 label-title" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("div", { staticClass: "avatar-upload" }, [
                      _c("div", { staticClass: "avatar-preview" }, [
                        _c("img", {
                          ref: "editImage5Display",
                          staticClass: "w-100 h-100",
                          attrs: {
                            id: "imagePreview5",
                            src:
                              _vm.$store.state.serverPath +
                              "storage/" +
                              _vm.editPropertyData.pic4
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "avatar-edit" }, [
                        _c("input", {
                          ref: "editPropertyImage5",
                          attrs: {
                            type: "file",
                            id: "imageUpload5",
                            accept: ".png, .jpg, .jpeg"
                          },
                          on: { change: _vm.editAttachImage5 }
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "imageUpload5" } })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("div", { staticClass: "avatar-upload" }, [
                      _c("div", { staticClass: "avatar-preview" }, [
                        _c("img", {
                          ref: "editImage6Display",
                          staticClass: "w-100 h-100",
                          attrs: {
                            id: "imagePreview6",
                            src:
                              _vm.$store.state.serverPath +
                              "storage/" +
                              _vm.editPropertyData.pic5
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "avatar-edit" }, [
                        _c("input", {
                          ref: "editPropertyImage6",
                          attrs: {
                            type: "file",
                            id: "imageUpload6",
                            accept: ".png, .jpg, .jpeg"
                          },
                          on: { change: _vm.editAttachImage6 }
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "imageUpload6" } })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("div", { staticClass: "avatar-upload" }, [
                      _c("div", { staticClass: "avatar-preview" }, [
                        _c("img", {
                          ref: "editImage7Display",
                          staticClass: "w-100 h-100",
                          attrs: {
                            id: "imagePreview7",
                            src:
                              _vm.$store.state.serverPath +
                              "storage/" +
                              _vm.editPropertyData.pic6
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "avatar-edit" }, [
                        _c("input", {
                          ref: "editPropertyImage7",
                          attrs: {
                            type: "file",
                            id: "imageUpload7",
                            accept: ".png, .jpg, .jpeg"
                          },
                          on: { change: _vm.editAttachImage7 }
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "imageUpload7" } })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("div", { staticClass: "avatar-upload" }, [
                      _c("div", { staticClass: "avatar-preview" }, [
                        _c("img", {
                          ref: "editImage8Display",
                          staticClass: "w-100 h-100",
                          attrs: {
                            id: "imagePreview8",
                            src:
                              _vm.$store.state.serverPath +
                              "storage/" +
                              _vm.editPropertyData.pic7
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "avatar-edit" }, [
                        _c("input", {
                          ref: "editPropertyImage8",
                          attrs: {
                            type: "file",
                            id: "imageUpload8",
                            accept: ".png, .jpg, .jpeg"
                          },
                          on: { change: _vm.editAttachImage8 }
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "imageUpload8" } })
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("label", { staticClass: "col-md-3 label-title" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("div", { staticClass: "avatar-upload" }, [
                      _c("div", { staticClass: "avatar-preview" }, [
                        _c("img", {
                          ref: "editImage9Display",
                          staticClass: "w-100 h-100",
                          attrs: {
                            id: "imagePreview9",
                            src:
                              _vm.$store.state.serverPath +
                              "storage/" +
                              _vm.editPropertyData.pic8
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "avatar-edit" }, [
                        _c("input", {
                          ref: "editPropertyImage9",
                          attrs: {
                            type: "file",
                            id: "imageUpload9",
                            accept: ".png, .jpg, .jpeg"
                          },
                          on: { change: _vm.editAttachImage9 }
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "imageUpload9" } })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("div", { staticClass: "avatar-upload" }, [
                      _c("div", { staticClass: "avatar-preview" }, [
                        _c("img", {
                          ref: "editImage10Display",
                          staticClass: "w-100 h-100",
                          attrs: {
                            id: "imagePreview10",
                            src:
                              _vm.$store.state.serverPath +
                              "storage/" +
                              _vm.editPropertyData.pic9
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "avatar-edit" }, [
                        _c("input", {
                          ref: "editPropertyImage10",
                          attrs: {
                            type: "file",
                            id: "imageUpload10",
                            accept: ".png, .jpg, .jpeg"
                          },
                          on: { change: _vm.editAttachImage10 }
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "imageUpload10" } })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("div", { staticClass: "avatar-upload" }, [
                      _c("div", { staticClass: "avatar-preview" }, [
                        _c("img", {
                          ref: "editImage11Display",
                          staticClass: "w-100 h-100",
                          attrs: {
                            id: "imagePreview11",
                            src:
                              _vm.$store.state.serverPath +
                              "storage/" +
                              _vm.editPropertyData.pic10
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "avatar-edit" }, [
                        _c("input", {
                          ref: "editPropertyImage11",
                          attrs: {
                            type: "file",
                            id: "imageUpload11",
                            accept: ".png, .jpg, .jpeg"
                          },
                          on: { change: _vm.editAttachImage11 }
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "imageUpload11" } })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("div", { staticClass: "avatar-upload" }, [
                      _c("div", { staticClass: "avatar-preview" }, [
                        _c("img", {
                          ref: "editImage12Display",
                          staticClass: "w-100 h-100",
                          attrs: {
                            id: "imagePreview12",
                            src:
                              _vm.$store.state.serverPath +
                              "storage/" +
                              _vm.editPropertyData.pic11
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "avatar-edit" }, [
                        _c("input", {
                          ref: "editPropertyImage12",
                          attrs: {
                            type: "file",
                            id: "imageUpload12",
                            accept: ".png, .jpg, .jpeg"
                          },
                          on: { change: _vm.editAttachImage12 }
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "imageUpload12" } })
                      ])
                    ])
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
                    [_vm._v("Update Property")]
                  )
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "editAssignProperty",
          attrs: { id: "modal-lg", "hide-footer": "", size: "lg" }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateProperty($event)
                }
              }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.editPropertyData.name,
                            expression: "editPropertyData.name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { id: "exampleFormControlSelect1" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.editPropertyData,
                              "name",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "Select Manager" } }, [
                          _vm._v("Select Manager")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.managers, function(user, index) {
                          return _c(
                            "option",
                            { key: index, domProps: { value: user.id } },
                            [_vm._v(_vm._s(user.name))]
                          )
                        })
                      ],
                      2
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "select",
                      {
                        staticClass: "form-control",
                        attrs: { id: "exampleFormControlSelect1" }
                      },
                      [
                        _c("option", [_vm._v("Select City")]),
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
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "exampleFormControlSelect1" } }, [
                  _vm._v("Sector")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    staticClass: "form-control",
                    attrs: { id: "exampleFormControlSelect1" }
                  },
                  [
                    _c("option", [_vm._v("Select Sectors")]),
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
                { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                [_vm._v("Submit")]
              )
            ]
          )
        ]
      )
    ],
    1
  )
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

/***/ "./resources/js/services/reserved_service.js":
/*!***************************************************!*\
  !*** ./resources/js/services/reserved_service.js ***!
  \***************************************************/
/*! exports provided: getReservedProperty, deleteReservedProperty, loadProperty, searchEngagedProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReservedProperty", function() { return getReservedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteReservedProperty", function() { return deleteReservedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProperty", function() { return loadProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchEngagedProperty", function() { return searchEngagedProperty; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function getReservedProperty() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/reserved-property-list');
}
function deleteReservedProperty(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/reserveds/".concat(id));
}
function loadProperty(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("engaged-properties?page=".concat(nextPage));
}
function searchEngagedProperty(request) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/search-engaged-property', request);
}

/***/ }),

/***/ "./resources/js/views/csr/CsrDashboard.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/csr/CsrDashboard.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CsrDashboard_vue_vue_type_template_id_2e42e33e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CsrDashboard.vue?vue&type=template&id=2e42e33e& */ "./resources/js/views/csr/CsrDashboard.vue?vue&type=template&id=2e42e33e&");
/* harmony import */ var _CsrDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CsrDashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/csr/CsrDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CsrDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CsrDashboard.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/csr/CsrDashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CsrDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CsrDashboard_vue_vue_type_template_id_2e42e33e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CsrDashboard_vue_vue_type_template_id_2e42e33e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/csr/CsrDashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/csr/CsrDashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/csr/CsrDashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CsrDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CsrDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/csr/CsrDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CsrDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/csr/CsrDashboard.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/csr/CsrDashboard.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CsrDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CsrDashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/csr/CsrDashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CsrDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CsrDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CsrDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CsrDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/csr/CsrDashboard.vue?vue&type=template&id=2e42e33e&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/csr/CsrDashboard.vue?vue&type=template&id=2e42e33e& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CsrDashboard_vue_vue_type_template_id_2e42e33e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CsrDashboard.vue?vue&type=template&id=2e42e33e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/csr/CsrDashboard.vue?vue&type=template&id=2e42e33e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CsrDashboard_vue_vue_type_template_id_2e42e33e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CsrDashboard_vue_vue_type_template_id_2e42e33e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);