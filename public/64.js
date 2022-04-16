(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/ShowReserved.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/ShowReserved.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/properties_service */ "./resources/js/services/properties_service.js");
/* harmony import */ var _services_admin_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin_service.js */ "./resources/js/services/admin_service.js");
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_4__);


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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Properties",
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_3__["VueEditor"]
  },
  data: function data() {
    var _ref;

    return _ref = {
      readMoreActivated: false,
      query: "",
      cities: [],
      sectors: [],
      areaManagers: [],
      rules: [],
      tenants: [],
      managers: []
    }, _defineProperty(_ref, "managers", {}), _defineProperty(_ref, "city", 0), _defineProperty(_ref, "properties", []), _defineProperty(_ref, "properties", {}), _defineProperty(_ref, "protypes", []), _defineProperty(_ref, "editPropertyData", {}), _defineProperty(_ref, "showName", false), _defineProperty(_ref, "showImage", true), _defineProperty(_ref, "moreExists", false), _defineProperty(_ref, "readMore", false), _defineProperty(_ref, "nextPage", 0), _defineProperty(_ref, "errors", {}), _defineProperty(_ref, "sector_id", ''), _defineProperty(_ref, "assignProperty", {
      name: '',
      sector_id: '',
      city_id: '',
      comment: '',
      property_id: ''
    }), _defineProperty(_ref, "assignTenant", {
      name: '',
      comment: '',
      property_id: ''
    }), _defineProperty(_ref, "assignPropertyEmp", {
      name: '',
      comment: '',
      property_id: ''
    }), _defineProperty(_ref, "suspension", {
      comment: '',
      property_id: ''
    }), _defineProperty(_ref, "employees", []), _defineProperty(_ref, "suspenseData", {}), _ref;
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

              if (!response) {
                next('/404');
              }

              next(function (vm) {
                vm.properties = response.data;
                vm.sector_id = response.data.sector_id;
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
  mounted: function mounted() {
    this.getProTypeData();
    this.getManagerData();
    this.getTenantData();
    this.getEmployeeData();
  },
  methods: (_methods = {
    activateReadMore: function activateReadMore() {
      this.readMoreActivated = true;
    },
    suspendProperty: function () {
      var _suspendProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(properties) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_admin_service_js__WEBPACK_IMPORTED_MODULE_2__["suspendProperty"](this.suspension, properties.id);

              case 3:
                response = _context2.sent;
                this.comments.unshift(response.data);
                this.flashMessage.success({
                  message: 'City Data Added Successfuly!',
                  time: 5000
                });
                this.suspension.comment = "";
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  message: 'Some Error Occured!',
                  time: 5000
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 9]]);
      }));

      function suspendProperty(_x4) {
        return _suspendProperty.apply(this, arguments);
      }

      return suspendProperty;
    }(),
    PropertyHot: function () {
      var _PropertyHot = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(properties) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (window.confirm("Are you sure you want to Hot this Property")) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.prev = 2;
                _context3.next = 5;
                return _services_admin_service_js__WEBPACK_IMPORTED_MODULE_2__["PropertyHot"](properties.id);

              case 5:
                response = _context3.sent;
                this.flashMessage.success({
                  message: "Property Hoted Successfuly!",
                  time: 5000
                });
                _context3.next = 22;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](2);
                _context3.t1 = _context3.t0.response.status;
                _context3.next = _context3.t1 === 422 ? 14 : _context3.t1 === 401 ? 16 : 19;
                break;

              case 14:
                this.errors = _context3.t0.response.data.errors;
                return _context3.abrupt("break", 22);

              case 16:
                this.errors = {};
                this.flashMessage.info({
                  message: _context3.t0.response.data.message,
                  time: 5000
                });
                return _context3.abrupt("break", 22);

              case 19:
                this.errors = {};
                this.flashMessage.error({
                  message: "Some error occurred please try again",
                  time: 5000
                });
                return _context3.abrupt("break", 22);

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 9]]);
      }));

      function PropertyHot(_x5) {
        return _PropertyHot.apply(this, arguments);
      }

      return PropertyHot;
    }(),
    getManagerData: function () {
      var _getManagerData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(properties) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _services_admin_service_js__WEBPACK_IMPORTED_MODULE_2__["getManagerData"](this.sector_id);

              case 3:
                response = _context4.sent;
                this.managers = response.data;
                _context4.next = 10;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                this.flashMessage.error({
                  message: 'some error occurred Please try again',
                  time: 2000
                });

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 7]]);
      }));

      function getManagerData(_x6) {
        return _getManagerData.apply(this, arguments);
      }

      return getManagerData;
    }(),
    getEmployeeData: function () {
      var _getEmployeeData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(properties) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _services_admin_service_js__WEBPACK_IMPORTED_MODULE_2__["getEmployeeData"](this.sector_id);

              case 3:
                response = _context5.sent;
                console.log(response);
                this.employees = response.data;
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                this.flashMessage.error({
                  message: 'some error occurred Please try again',
                  time: 2000
                });

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      function getEmployeeData(_x7) {
        return _getEmployeeData.apply(this, arguments);
      }

      return getEmployeeData;
    }(),
    getTenantData: function () {
      var _getTenantData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(properties) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _services_admin_service_js__WEBPACK_IMPORTED_MODULE_2__["getTenantData"](this.properties.id);

              case 3:
                response = _context6.sent;
                console.log(response);
                this.tenants = response.data;
                _context6.next = 11;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);
                this.flashMessage.error({
                  message: 'some error occurred please try again',
                  time: 2000
                });

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 8]]);
      }));

      function getTenantData(_x8) {
        return _getTenantData.apply(this, arguments);
      }

      return getTenantData;
    }(),
    sendProp: function () {
      var _sendProp = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(properties) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.assignProperty.property_id = properties.id;
                this.assignProperty.city_id = properties.city_id;
                this.assignProperty.sector_id = properties.sector_id;
                this.assignProperty.user_id = properties.user_id;

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function sendProp(_x9) {
        return _sendProp.apply(this, arguments);
      }

      return sendProp;
    }(),
    sendPropTenant: function () {
      var _sendPropTenant = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(properties) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.assignTenant.property_id = properties.id;
                this.assignTenant.user_id = properties.user_id;

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function sendPropTenant(_x10) {
        return _sendPropTenant.apply(this, arguments);
      }

      return sendPropTenant;
    }(),
    sendPropEmployee: function () {
      var _sendPropEmployee = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(properties) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this.assignTenant.property_id = properties.id;
                this.assignTenant.user_id = properties.user_id;

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function sendPropEmployee(_x11) {
        return _sendPropEmployee.apply(this, arguments);
      }

      return sendPropEmployee;
    }(),
    reservation: function () {
      var _reservation = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(properties) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.suspension.property_id = properties.id;

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function reservation(_x12) {
        return _reservation.apply(this, arguments);
      }

      return reservation;
    }(),
    getAreaManager: function () {
      var _getAreaManager = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return _services_admin_service_js__WEBPACK_IMPORTED_MODULE_2__["getAreaManager"]({
                  params: {
                    user_id: this.assignProperty.name
                  }
                }).then(function (response) {
                  this.areaManagers = response.data;
                }.bind(this));

              case 3:
                response = _context11.sent;
                console.log(response);
                _context11.next = 10;
                break;

              case 7:
                _context11.prev = 7;
                _context11.t0 = _context11["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 10:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[0, 7]]);
      }));

      function getAreaManager() {
        return _getAreaManager.apply(this, arguments);
      }

      return getAreaManager;
    }(),
    // assignPropertyData:async function(properties){
    //     try {
    //         const response = await PropertiesService.assignPropertyData(this.assignProperty);
    //         this.flashMessage.success({
    //             message:'Property Assign to Manager Successfully !',
    //             time:5000
    //         });
    //     } catch (error) {
    //         switch (error.response.status) {
    //             case 500:
    //                 this.flashMessage.error({
    //                 message: error.response.data.errors,
    //                 time: 5000,
    //                 });
    //                 break;
    //             case 403:
    //                 this.flashMessage.info({
    //                 message: error.response.data.errors,
    //                 time: 5000,
    //                 });
    //                 break;
    //             default:
    //                 this.flashMessage.error({
    //                 message: 'Some Error Occured!',
    //                 time: 5000,
    //                 });
    //             }
    //     }
    // },
    assignPropertyToTenant: function () {
      var _assignPropertyToTenant = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                _context12.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["assignPropertyToTenant"](this.assignTenant);

              case 3:
                response = _context12.sent;
                this.flashMessage.success({
                  message: 'Property Assign to Tenant Successfully !',
                  time: 5000
                });
                _context12.next = 17;
                break;

              case 7:
                _context12.prev = 7;
                _context12.t0 = _context12["catch"](0);
                _context12.t1 = _context12.t0.response.status;
                _context12.next = _context12.t1 === 500 ? 12 : _context12.t1 === 403 ? 14 : 16;
                break;

              case 12:
                this.flashMessage.error({
                  message: _context12.t0.response.data.errors,
                  time: 5000
                });
                return _context12.abrupt("break", 17);

              case 14:
                this.flashMessage.info({
                  message: _context12.t0.response.data.errors,
                  time: 5000
                });
                return _context12.abrupt("break", 17);

              case 16:
                this.flashMessage.error({
                  message: 'Some Error Occured!',
                  time: 5000
                });

              case 17:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[0, 7]]);
      }));

      function assignPropertyToTenant() {
        return _assignPropertyToTenant.apply(this, arguments);
      }

      return assignPropertyToTenant;
    }(),
    paidPropertyRent: function () {
      var _paidPropertyRent = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13(properties) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (window.confirm("Are you sure you want to paid rent of this Property")) {
                  _context13.next = 2;
                  break;
                }

                return _context13.abrupt("return");

              case 2:
                _context13.prev = 2;
                _context13.next = 5;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["paidPropertyRent"](properties.id);

              case 5:
                response = _context13.sent;
                // this.properties = this.properties.filter((obj) => {
                // return obj.id != property.id;
                // });
                this.flashMessage.success({
                  message: "Rent Paid Successfuly!",
                  time: 5000
                });
                this.getProperty();
                _context13.next = 13;
                break;

              case 10:
                _context13.prev = 10;
                _context13.t0 = _context13["catch"](2);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 13:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this, [[2, 10]]);
      }));

      function paidPropertyRent(_x13) {
        return _paidPropertyRent.apply(this, arguments);
      }

      return paidPropertyRent;
    }(),
    unPaidPropertyRent: function () {
      var _unPaidPropertyRent = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14(properties) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (window.confirm("Are you sure you know that this Property Rent is not Paid yet")) {
                  _context14.next = 2;
                  break;
                }

                return _context14.abrupt("return");

              case 2:
                _context14.prev = 2;
                _context14.next = 5;
                return _services_admin_service_js__WEBPACK_IMPORTED_MODULE_2__["unPaidPropertyRent"](properties.id);

              case 5:
                response = _context14.sent;
                this.flashMessage.success({
                  message: 'Your Successfully Change this property Rent type',
                  time: 5000
                });
                _context14.next = 12;
                break;

              case 9:
                _context14.prev = 9;
                _context14.t0 = _context14["catch"](2);
                this.flashMessage.error({
                  message: 'Some error occured!',
                  time: 5000
                });

              case 12:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this, [[2, 9]]);
      }));

      function unPaidPropertyRent(_x14) {
        return _unPaidPropertyRent.apply(this, arguments);
      }

      return unPaidPropertyRent;
    }(),
    getProTypeData: function () {
      var _getProTypeData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.prev = 0;
                _context15.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["getProTypeData"]();

              case 3:
                response = _context15.sent;
                this.protypes = response.data;
                _context15.next = 10;
                break;

              case 7:
                _context15.prev = 7;
                _context15.t0 = _context15["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 10:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this, [[0, 7]]);
      }));

      function getProTypeData() {
        return _getProTypeData.apply(this, arguments);
      }

      return getProTypeData;
    }(),
    editProperty: function () {
      var _editProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16(properties) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                this.editPropertyData = _objectSpread({}, properties);
                this.$refs.editProperty.show();

              case 2:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function editProperty(_x15) {
        return _editProperty.apply(this, arguments);
      }

      return editProperty;
    }(),
    editPropertyToEmployee: function () {
      var _editPropertyToEmployee = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17(properties) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                this.editPropertyData = _objectSpread({}, properties);
                this.$refs.editPropertyToEmployee.show();

              case 2:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function editPropertyToEmployee(_x16) {
        return _editPropertyToEmployee.apply(this, arguments);
      }

      return editPropertyToEmployee;
    }(),
    showProperty: function () {
      var _showProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18(property) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                this.editPropertyData = _objectSpread({}, property);
                this.$refs.showProperty.show();

              case 2:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function showProperty(_x17) {
        return _showProperty.apply(this, arguments);
      }

      return showProperty;
    }(),
    cancellReservation: function () {
      var _cancellReservation = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19(property) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                this.suspenseData = _objectSpread({}, property);
                this.$refs.suspendedReservation.show();

              case 2:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function cancellReservation(_x18) {
        return _cancellReservation.apply(this, arguments);
      }

      return cancellReservation;
    }(),
    deleteProperty: function () {
      var _deleteProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee20(property) {
        var responce;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                if (window.confirm("Are you sure you want to delete this Property")) {
                  _context20.next = 2;
                  break;
                }

                return _context20.abrupt("return");

              case 2:
                _context20.prev = 2;
                _context20.next = 5;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["deleteProperty"](property.id);

              case 5:
                responce = _context20.sent;
                this.properties = this.properties.filter(function (obj) {
                  return obj.id != property.id;
                });
                this.flashMessage.success({
                  message: "Property deleted successfuly!",
                  time: 5000
                });
                _context20.next = 13;
                break;

              case 10:
                _context20.prev = 10;
                _context20.t0 = _context20["catch"](2);
                this.flashMessage.error({
                  message: "Some thing going wrong!",
                  time: 5000
                });

              case 13:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this, [[2, 10]]);
      }));

      function deleteProperty(_x19) {
        return _deleteProperty.apply(this, arguments);
      }

      return deleteProperty;
    }(),
    approvedProperty: function () {
      var _approvedProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee21(properties) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                if (window.confirm("Are you sure you want to Approve this Property")) {
                  _context21.next = 2;
                  break;
                }

                return _context21.abrupt("return");

              case 2:
                _context21.prev = 2;
                _context21.next = 5;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["approvedProperty"](properties.id);

              case 5:
                response = _context21.sent;
                // this.properties = this.properties.filter(obj => {
                //             return obj.id !=property.id;
                //     });
                this.flashMessage.success({
                  message: "Property Approved Successfuly!",
                  time: 5000
                });
                _context21.next = 12;
                break;

              case 9:
                _context21.prev = 9;
                _context21.t0 = _context21["catch"](2);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 12:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this, [[2, 9]]);
      }));

      function approvedProperty(_x20) {
        return _approvedProperty.apply(this, arguments);
      }

      return approvedProperty;
    }(),
    PropertyOk: function () {
      var _PropertyOk = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee22(properties) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if (window.assignToTenant()) {
                  _context22.next = 2;
                  break;
                }

                return _context22.abrupt("return");

              case 2:
                _context22.prev = 2;
                _context22.next = 5;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["PropertyOk"](properties.id);

              case 5:
                response = _context22.sent;
                // this.properties = this.properties.filter(obj => {
                //             return obj.id !=property.id;
                //     });
                this.flashMessage.success({
                  message: "Property Occupied Successfuly!",
                  time: 5000
                });
                _context22.next = 12;
                break;

              case 9:
                _context22.prev = 9;
                _context22.t0 = _context22["catch"](2);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 12:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this, [[2, 9]]);
      }));

      function PropertyOk(_x21) {
        return _PropertyOk.apply(this, arguments);
      }

      return PropertyOk;
    }(),
    reloadProperty: function () {
      var _reloadProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee23(properties) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                if (window.confirm("Are you sure you want to Reload this Property")) {
                  _context23.next = 2;
                  break;
                }

                return _context23.abrupt("return");

              case 2:
                _context23.prev = 2;
                _context23.next = 5;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["reloadProperty"](properties.id);

              case 5:
                response = _context23.sent;
                // this.properties = this.properties.filter((obj) => {
                //   return obj.id != property.id;
                // });
                this.flashMessage.success({
                  message: "Property Reloaded Successfuly!",
                  time: 5000
                });
                _context23.next = 13;
                break;

              case 9:
                _context23.prev = 9;
                _context23.t0 = _context23["catch"](2);
                console.log(_context23.t0 + '');
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 13:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this, [[2, 9]]);
      }));

      function reloadProperty(_x22) {
        return _reloadProperty.apply(this, arguments);
      }

      return reloadProperty;
    }()
  }, _defineProperty(_methods, "paidPropertyRent", function () {
    var _paidPropertyRent2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee24(properties) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              if (window.confirm("Are you sure you want to paid rent of this Property")) {
                _context24.next = 2;
                break;
              }

              return _context24.abrupt("return");

            case 2:
              _context24.prev = 2;
              _context24.next = 5;
              return _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["paidPropertyRent"](properties.id);

            case 5:
              response = _context24.sent;
              // this.properties = this.properties.filter((obj) => {
              //   return obj.id != property.id;
              // });
              this.flashMessage.success({
                message: "Rent Paid Successfuly!",
                time: 5000
              });
              _context24.next = 12;
              break;

            case 9:
              _context24.prev = 9;
              _context24.t0 = _context24["catch"](2);
              this.flashMessage.error({
                message: "Some error occurred!",
                time: 5000
              });

            case 12:
            case "end":
              return _context24.stop();
          }
        }
      }, _callee24, this, [[2, 9]]);
    }));

    function paidPropertyRent(_x23) {
      return _paidPropertyRent2.apply(this, arguments);
    }

    return paidPropertyRent;
  }()), _defineProperty(_methods, "suspendedProperty", function () {
    var _suspendedProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee25(properties) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee25$(_context25) {
        while (1) {
          switch (_context25.prev = _context25.next) {
            case 0:
              if (window.cancellReservation()) {
                _context25.next = 2;
                break;
              }

              return _context25.abrupt("return");

            case 2:
              _context25.prev = 2;
              _context25.next = 5;
              return _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["suspendedProperty"](properties.id);

            case 5:
              response = _context25.sent;
              this.flashMessage.success({
                message: 'You are successfully Rejected This for some issues',
                time: 5000
              });
              _context25.next = 12;
              break;

            case 9:
              _context25.prev = 9;
              _context25.t0 = _context25["catch"](2);
              this.flashMessage.error({
                message: 'some error occured! try again please'
              });

            case 12:
            case "end":
              return _context25.stop();
          }
        }
      }, _callee25, this, [[2, 9]]);
    }));

    function suspendedProperty(_x24) {
      return _suspendedProperty.apply(this, arguments);
    }

    return suspendedProperty;
  }()), _defineProperty(_methods, "loadRule", function () {
    var _loadRule = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee26() {
      var _this = this;

      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee26$(_context26) {
        while (1) {
          switch (_context26.prev = _context26.next) {
            case 0:
              _context26.prev = 0;
              _context26.next = 3;
              return _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["loadRule"](this.nextPage);

            case 3:
              response = _context26.sent;

              if (response.data.current_page < response.data.last_page) {
                this.readMore = true;
                this.nextPage = response.data.current_page + 1;
              } else {
                this.readMore = false;
              }

              response.data.data.forEach(function (data) {
                _this.rules.push(data);
              });
              _context26.next = 11;
              break;

            case 8:
              _context26.prev = 8;
              _context26.t0 = _context26["catch"](0);
              this.flashMessage.error({
                message: "Some error occurred during load more Cities",
                time: 5000
              });

            case 11:
            case "end":
              return _context26.stop();
          }
        }
      }, _callee26, this, [[0, 8]]);
    }));

    function loadRule() {
      return _loadRule.apply(this, arguments);
    }

    return loadRule;
  }()), _defineProperty(_methods, "assignToTenant", function () {
    var _assignToTenant = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee27(property) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee27$(_context27) {
        while (1) {
          switch (_context27.prev = _context27.next) {
            case 0:
              this.editPropertyData = _objectSpread({}, property);
              this.$refs.assignToTenant.show();

            case 2:
            case "end":
              return _context27.stop();
          }
        }
      }, _callee27, this);
    }));

    function assignToTenant(_x25) {
      return _assignToTenant.apply(this, arguments);
    }

    return assignToTenant;
  }()), _methods)
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/ShowReserved.vue?vue&type=style&index=0&id=3bd4d8e4&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/ShowReserved.vue?vue&type=style&index=0&id=3bd4d8e4&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.authorization-btn button[data-v-3bd4d8e4] {\n  border-radius: 50%;\n    height: 60px;\n    width: 60px;\n    font-size: 12px;\n    text-align: center;\n}\n.priceposition[data-v-3bd4d8e4]{\n    display: block;\n    margin-left: auto;\n}\n.btncontact[data-v-3bd4d8e4]{\nwidth: 100%;\n}\n.carousel[data-v-3bd4d8e4] {\n  position: relative;\n}\n#myCarousel img[data-v-3bd4d8e4]{\n    height: 400px;\n}\n#carousel-thumbs2 img[data-v-3bd4d8e4]{\n    height: 70px;\n    width: 100%;\n}\n#carousel-thumbs[data-v-3bd4d8e4] {\n  background: rgba(255,255,255,.3);\n  bottom: 0;\n  left: 0;\n  padding: 0 50px;\n  right: 0;\n}\n#carousel-thumbs img[data-v-3bd4d8e4] {\n  border: 5px solid transparent;\n  cursor: pointer;\n}\n#carousel-thumbs img[data-v-3bd4d8e4]:hover {\n  border-color: rgba(255,255,255,.3);\n}\n#carousel-thumbs .selected img[data-v-3bd4d8e4] {\n  border-color: #fff;\n}\n.carousel-control-prev[data-v-3bd4d8e4],\n.carousel-control-next[data-v-3bd4d8e4] {\n  width: 50px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/ShowReserved.vue?vue&type=style&index=0&id=3bd4d8e4&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/ShowReserved.vue?vue&type=style&index=0&id=3bd4d8e4&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowReserved.vue?vue&type=style&index=0&id=3bd4d8e4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/ShowReserved.vue?vue&type=style&index=0&id=3bd4d8e4&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/ShowReserved.vue?vue&type=template&id=3bd4d8e4&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/ShowReserved.vue?vue&type=template&id=3bd4d8e4&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
        "div",
        {
          staticClass: "container bg-white p-2 shadow",
          staticStyle: { "border-radius": "15px" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-7 m-0" }, [
              _c("div", { staticClass: "desktop-view" }, [
                _c("div", { staticClass: "container mt-2" }, [
                  _c(
                    "div",
                    { staticClass: "carousel-container position-relative row" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "carousel slide",
                          attrs: { id: "myCarousel", "data-ride": "carousel" }
                        },
                        [
                          _c("div", { staticClass: "carousel-inner" }, [
                            _c(
                              "div",
                              {
                                staticClass: "carousel-item active",
                                attrs: { "data-slide-number": "0" }
                              },
                              [
                                _c("img", {
                                  staticClass: "d-block w-100",
                                  attrs: {
                                    src:
                                      _vm.$store.state.serverPath +
                                      "storage/" +
                                      _vm.properties.pic1,
                                    alt: "...",
                                    "data-remote":
                                      "https://source.unsplash.com/Pn6iimgM-wo/",
                                    "data-type": "image",
                                    "data-toggle": "lightbox",
                                    "data-gallery": "example-gallery"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "carousel-item",
                                attrs: { "data-slide-number": "1" }
                              },
                              [
                                _c("img", {
                                  staticClass: "d-block w-100",
                                  attrs: {
                                    src:
                                      _vm.$store.state.serverPath +
                                      "storage/" +
                                      _vm.properties.pic2,
                                    alt: "...",
                                    "data-remote":
                                      "https://source.unsplash.com/tXqVe7oO-go/",
                                    "data-type": "image",
                                    "data-toggle": "lightbox",
                                    "data-gallery": "example-gallery"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "carousel-item",
                                attrs: { "data-slide-number": "2" }
                              },
                              [
                                _c("img", {
                                  staticClass: "d-block w-100",
                                  attrs: {
                                    src:
                                      _vm.$store.state.serverPath +
                                      "storage/" +
                                      _vm.properties.pic3,
                                    alt: "...",
                                    "data-remote":
                                      "https://source.unsplash.com/qlYQb7B9vog/",
                                    "data-type": "image",
                                    "data-toggle": "lightbox",
                                    "data-gallery": "example-gallery"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "carousel-item",
                                attrs: { "data-slide-number": "3" }
                              },
                              [
                                _c("img", {
                                  staticClass: "d-block w-100",
                                  attrs: {
                                    src:
                                      _vm.$store.state.serverPath +
                                      "storage/" +
                                      _vm.properties.pic4,
                                    alt: "...",
                                    "data-remote":
                                      "https://source.unsplash.com/QfEfkWk1Uhk/",
                                    "data-type": "image",
                                    "data-toggle": "lightbox",
                                    "data-gallery": "example-gallery"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "carousel-item",
                                attrs: { "data-slide-number": "4" }
                              },
                              [
                                _c("img", {
                                  staticClass: "d-block w-100",
                                  attrs: {
                                    src:
                                      _vm.$store.state.serverPath +
                                      "storage/" +
                                      _vm.properties.pic5,
                                    alt: "...",
                                    "data-remote":
                                      "https://source.unsplash.com/CSIcgaLiFO0/",
                                    "data-type": "image",
                                    "data-toggle": "lightbox",
                                    "data-gallery": "example-gallery"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "carousel-item",
                                attrs: { "data-slide-number": "5" }
                              },
                              [
                                _c("img", {
                                  staticClass: "d-block w-100",
                                  attrs: {
                                    src:
                                      _vm.$store.state.serverPath +
                                      "storage/" +
                                      _vm.properties.pic6,
                                    alt: "...",
                                    "data-remote":
                                      "https://source.unsplash.com/a_xa7RUKzdc/",
                                    "data-type": "image",
                                    "data-toggle": "lightbox",
                                    "data-gallery": "example-gallery"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "carousel-item",
                                attrs: { "data-slide-number": "6" }
                              },
                              [
                                _c("img", {
                                  staticClass: "d-block w-100",
                                  attrs: {
                                    src:
                                      _vm.$store.state.serverPath +
                                      "storage/" +
                                      _vm.properties.pic7,
                                    alt: "...",
                                    "data-remote":
                                      "https://source.unsplash.com/uanoYn1AmPs/",
                                    "data-type": "image",
                                    "data-toggle": "lightbox",
                                    "data-gallery": "example-gallery"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "carousel-item",
                                attrs: { "data-slide-number": "7" }
                              },
                              [
                                _c("img", {
                                  staticClass: "d-block w-100",
                                  attrs: {
                                    src:
                                      _vm.$store.state.serverPath +
                                      "storage/" +
                                      _vm.properties.pic8,
                                    alt: "...",
                                    "data-remote":
                                      "https://source.unsplash.com/_snqARKTgoc/",
                                    "data-type": "image",
                                    "data-toggle": "lightbox",
                                    "data-gallery": "example-gallery"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "carousel-item",
                                attrs: { "data-slide-number": "8" }
                              },
                              [
                                _c("img", {
                                  staticClass: "d-block w-100",
                                  attrs: {
                                    src:
                                      _vm.$store.state.serverPath +
                                      "storage/" +
                                      _vm.properties.pic9,
                                    alt: "...",
                                    "data-remote":
                                      "https://source.unsplash.com/M9F8VR0jEPM/",
                                    "data-type": "image",
                                    "data-toggle": "lightbox",
                                    "data-gallery": "example-gallery"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "carousel-item",
                                attrs: { "data-slide-number": "9" }
                              },
                              [
                                _c("img", {
                                  staticClass: "d-block w-100",
                                  attrs: {
                                    src:
                                      _vm.$store.state.serverPath +
                                      "storage/" +
                                      _vm.properties.pic10,
                                    alt: "...",
                                    "data-remote":
                                      "https://source.unsplash.com/Q1p7bh3SHj8/",
                                    "data-type": "image",
                                    "data-toggle": "lightbox",
                                    "data-gallery": "example-gallery"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "carousel-item",
                                attrs: { "data-slide-number": "10" }
                              },
                              [
                                _c("img", {
                                  staticClass: "d-block w-100",
                                  attrs: {
                                    src:
                                      _vm.$store.state.serverPath +
                                      "storage/" +
                                      _vm.properties.pic11,
                                    alt: "...",
                                    "data-remote":
                                      "https://source.unsplash.com/Q1p7bh3SHj8/",
                                    "data-type": "image",
                                    "data-toggle": "lightbox",
                                    "data-gallery": "example-gallery"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "carousel-item",
                                attrs: { "data-slide-number": "11" }
                              },
                              [
                                _c("img", {
                                  staticClass: "d-block w-100",
                                  attrs: {
                                    src:
                                      _vm.$store.state.serverPath +
                                      "storage/" +
                                      _vm.properties.pic12,
                                    alt: "...",
                                    "data-remote":
                                      "https://source.unsplash.com/Q1p7bh3SHj8/",
                                    "data-type": "image",
                                    "data-toggle": "lightbox",
                                    "data-gallery": "example-gallery"
                                  }
                                })
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "carousel slide",
                          attrs: {
                            id: "carousel-thumbs2",
                            "data-ride": "carousel"
                          }
                        },
                        [
                          _c("div", { staticClass: "carousel-inner" }, [
                            _c("div", { staticClass: "carousel-item active" }, [
                              _c("div", { staticClass: "row mx-0" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "thumb col-4 col-sm-2 px-1 py-2 selected",
                                    attrs: {
                                      id: "carousel-selector-0",
                                      "data-target": "#myCarousel",
                                      "data-slide-to": "0"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "img-fluid mobilecarousal",
                                      attrs: {
                                        src:
                                          _vm.$store.state.serverPath +
                                          "storage/" +
                                          _vm.properties.pic1,
                                        alt: "..."
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "thumb col-4 col-sm-2 px-1 py-2",
                                    attrs: {
                                      id: "carousel-selector-1",
                                      "data-target": "#myCarousel",
                                      "data-slide-to": "1"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "img-fluid mobilecarousal",
                                      attrs: {
                                        src:
                                          _vm.$store.state.serverPath +
                                          "storage/" +
                                          _vm.properties.pic2,
                                        alt: "..."
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "thumb col-4 col-sm-2 px-1 py-2",
                                    attrs: {
                                      id: "carousel-selector-2",
                                      "data-target": "#myCarousel",
                                      "data-slide-to": "2"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "img-fluid mobilecarousal",
                                      attrs: {
                                        src:
                                          _vm.$store.state.serverPath +
                                          "storage/" +
                                          _vm.properties.pic3,
                                        alt: "..."
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "thumb col-4 col-sm-2 px-1 py-2",
                                    attrs: {
                                      id: "carousel-selector-3",
                                      "data-target": "#myCarousel",
                                      "data-slide-to": "3"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "img-fluid mobilecarousal",
                                      attrs: {
                                        src:
                                          _vm.$store.state.serverPath +
                                          "storage/" +
                                          _vm.properties.pic4,
                                        alt: "..."
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "thumb col-4 col-sm-2 px-1 py-2",
                                    attrs: {
                                      id: "carousel-selector-4",
                                      "data-target": "#myCarousel",
                                      "data-slide-to": "4"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "img-fluid mobilecarousal",
                                      attrs: {
                                        src:
                                          _vm.$store.state.serverPath +
                                          "storage/" +
                                          _vm.properties.pic5,
                                        alt: "..."
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "thumb col-4 col-sm-2 px-1 py-2",
                                    attrs: {
                                      id: "carousel-selector-5",
                                      "data-target": "#myCarousel",
                                      "data-slide-to": "5"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "img-fluid mobilecarousal",
                                      attrs: {
                                        src:
                                          _vm.$store.state.serverPath +
                                          "storage/" +
                                          _vm.properties.pic6,
                                        alt: "..."
                                      }
                                    })
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "carousel-item" }, [
                              _c("div", { staticClass: "row mx-0" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "thumb col-4 col-sm-2 px-1 py-2",
                                    attrs: {
                                      id: "carousel-selector-6",
                                      "data-target": "#myCarousel",
                                      "data-slide-to": "6"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "img-fluid mobilecarousal",
                                      attrs: {
                                        src:
                                          _vm.$store.state.serverPath +
                                          "storage/" +
                                          _vm.properties.pic7,
                                        alt: "..."
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "thumb col-4 col-sm-2 px-1 py-2",
                                    attrs: {
                                      id: "carousel-selector-7",
                                      "data-target": "#myCarousel",
                                      "data-slide-to": "7"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "img-fluid mobilecarousal",
                                      attrs: {
                                        src:
                                          _vm.$store.state.serverPath +
                                          "storage/" +
                                          _vm.properties.pic8,
                                        alt: "..."
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "thumb col-4 col-sm-2 px-1 py-2",
                                    attrs: {
                                      id: "carousel-selector-8",
                                      "data-target": "#myCarousel",
                                      "data-slide-to": "8"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "img-fluid mobilecarousal",
                                      attrs: {
                                        src:
                                          _vm.$store.state.serverPath +
                                          "storage/" +
                                          _vm.properties.pic9,
                                        alt: "..."
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "thumb col-4 col-sm-2 px-1 py-2",
                                    attrs: {
                                      id: "carousel-selector-9",
                                      "data-target": "#myCarousel",
                                      "data-slide-to": "9"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "img-fluid mobilecarousal",
                                      attrs: {
                                        src:
                                          _vm.$store.state.serverPath +
                                          "storage/" +
                                          _vm.properties.pic10,
                                        alt: "..."
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "thumb col-4 col-sm-2 px-1 py-2",
                                    attrs: {
                                      id: "carousel-selector-8",
                                      "data-target": "#myCarousel",
                                      "data-slide-to": "10"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "img-fluid mobilecarousal",
                                      attrs: {
                                        src:
                                          _vm.$store.state.serverPath +
                                          "storage/" +
                                          _vm.properties.pic11,
                                        alt: "..."
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "thumb col-4 col-sm-2 px-1 py-2",
                                    attrs: {
                                      id: "carousel-selector-9",
                                      "data-target": "#myCarousel",
                                      "data-slide-to": "11"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "img-fluid mobilecarousal",
                                      attrs: {
                                        src:
                                          _vm.$store.state.serverPath +
                                          "storage/" +
                                          _vm.properties.pic12,
                                        alt: "..."
                                      }
                                    })
                                  ]
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _vm._m(0),
                          _vm._v(" "),
                          _vm._m(1)
                        ]
                      )
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _vm.properties.property_name === "House"
              ? _c("div", { staticClass: "col-lg-5  p-3" }, [
                  _c("div", { staticClass: "slider-text" }, [
                    !_vm.readMoreActivated
                      ? _c("h4", { staticClass: "title text-success" }, [
                          _vm._v(_vm._s(_vm.properties.title.slice(0, 40))),
                          !_vm.readMoreActivated
                            ? _c(
                                "small",
                                {
                                  staticClass: "text-info",
                                  attrs: { href: "#" },
                                  on: { click: _vm.activateReadMore }
                                },
                                [_vm._v(" Read more...")]
                              )
                            : _vm._e()
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.readMoreActivated
                      ? _c("span", { staticClass: "text-success" }, [
                          _vm._v(_vm._s(_vm.properties.title))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "row price" }, [
                      _c("h3", { staticClass: " text-dark" }, [
                        _vm._v("Property details")
                      ]),
                      _vm._v(" "),
                      _c(
                        "h3",
                        { staticClass: "priceposition px-5 text-success" },
                        [_vm._v(" Rs " + _vm._s(_vm.properties.rent_price))]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "short-info" }, [
                      _c("p", [
                        _vm._m(2),
                        _vm._v(" "),
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v(_vm._s(_vm.properties.city_name))
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "px-2" }, [
                          _c("strong", [_vm._v("Sector:")]),
                          _vm._v(" "),
                          _c("a", { attrs: { href: "#" } }, [
                            _vm._v(_vm._s(_vm.properties.sector))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "px-2" }, [
                          _c("strong", [_vm._v("Status:")]),
                          _vm._v(" "),
                          _c("a", { attrs: { href: "#" } }, [
                            _vm._v(_vm._s(_vm.properties.marital_status))
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("strong", [_vm._v("Address: ")]),
                        _vm._v(_vm._s(_vm.properties.address) + " ")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("strong", [_vm._v("Property Size:")]),
                        _vm._v(" "),
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v(_vm._s(_vm.properties.size))
                        ]),
                        _vm._v(" "),
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v(_vm._s(_vm.properties.unit))
                        ]),
                        _vm._v(" "),
                        _c("strong", { staticClass: "px-3" }, [
                          _vm._v("Property:")
                        ]),
                        _vm._v(" "),
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v(_vm._s(_vm.properties.property_name))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("strong", [_vm._v("Features:")]),
                        _vm._v(" "),
                        _c("a", [
                          _c("i", { staticClass: "fa fa-bed px-2" }),
                          _vm._v(
                            _vm._s(_vm.properties.badrooms) +
                              "\n                              "
                          )
                        ]),
                        _vm._v(" "),
                        _c("a", [
                          _c("i", { staticClass: "fa fa-shower px-2" }),
                          _vm._v(
                            _vm._s(_vm.properties.bathrooms) +
                              "\n                              "
                          )
                        ]),
                        _vm._v(" "),
                        _c("a", { staticClass: "pr-1" }, [
                          _c("strong", [_vm._v("Property Status:")]),
                          _vm._v(
                            _vm._s(_vm.properties.status) +
                              "\n                              "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("a", { staticClass: "pr-1" }, [
                          _c("strong", [_vm._v("Furnished:")]),
                          _vm._v(_vm._s(_vm.properties.furnished))
                        ]),
                        _vm._v(" "),
                        _c("a", { staticClass: "px-1" }, [
                          _c("strong", [_vm._v("Garage:")]),
                          _vm._v(_vm._s(_vm.properties.garage))
                        ]),
                        _c("a", { staticClass: "px-1" }, [
                          _c("strong", [_vm._v("Tv Lounge:")]),
                          _vm._v(_vm._s(_vm.properties.tv_lounged))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "authorization-btn" }, [
                      _c("div", { staticClass: "row mr-auto" }, [
                        _c("div", { staticClass: "col-md-2" }, [
                          _vm.properties.status != "approved"
                            ? _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-success btn-sm form-control",
                                  attrs: {
                                    type: "button",
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "Approve"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.approvedProperty(
                                        _vm.properties
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fas fa-check" }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("Approved")])
                                ]
                              )
                            : _c("div", [
                                _vm.properties.status !== "occupied"
                                  ? _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-warning btn-sm form-control",
                                        attrs: {
                                          type: "button",
                                          "data-toggle": "tooltip",
                                          "data-placement": "top",
                                          title: "follow property"
                                        },
                                        on: {
                                          click: [
                                            function($event) {
                                              return _vm.assignToTenant()
                                            },
                                            function($event) {
                                              return _vm.sendPropTenant(
                                                _vm.properties
                                              )
                                            }
                                          ]
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fab fa-odnoklassniki-square"
                                        }),
                                        _vm._v(" "),
                                        _c("p", [_vm._v("Occupied")])
                                      ]
                                    )
                                  : _vm._e()
                              ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-dark btn-sm form-control",
                              attrs: {
                                type: "button",
                                "data-toggle": "tooltip",
                                "data-placement": "top",
                                title: "Assign"
                              },
                              on: {
                                click: [
                                  function($event) {
                                    return _vm.editProperty()
                                  },
                                  function($event) {
                                    return _vm.sendProp(_vm.properties)
                                  }
                                ]
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-share-square" }),
                              _vm._v(" "),
                              _c("p", [_vm._v("Assign")])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-warning btn-sm form-control",
                              attrs: {
                                type: "button",
                                "data-toggle": "tooltip",
                                "data-placement": "top",
                                title: "Refresh Property"
                              },
                              on: {
                                click: [
                                  function($event) {
                                    return _vm.editPropertyToEmployee()
                                  },
                                  function($event) {
                                    return _vm.sendPropEmployee(_vm.properties)
                                  }
                                ]
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-share-square" }),
                              _vm._v(" "),
                              _c("p", [_vm._v("Assign Emp")])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-info btn-sm form-control",
                              attrs: {
                                type: "button",
                                "data-toggle": "tooltip",
                                "data-placement": "top",
                                title: "paid rent"
                              },
                              on: {
                                click: [
                                  function($event) {
                                    return _vm.cancellReservation()
                                  },
                                  function($event) {
                                    return _vm.reservation(_vm.properties)
                                  }
                                ]
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-thumbs-up" }),
                              _vm._v(" "),
                              _c("p", [_vm._v("Sespend")])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _vm.properties.rent === "paid"
                            ? _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-warning btn-sm form-control",
                                  attrs: {
                                    type: "button",
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "follow property"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.unPaidPropertyRent(
                                        _vm.properties
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fab fa-odnoklassniki-square"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("Un-Paid")])
                                ]
                              )
                            : _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-warning btn-sm form-control",
                                  attrs: {
                                    type: "button",
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "follow property"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.paidPropertyRent(
                                        _vm.properties
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fab fa-odnoklassniki-square"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("Paid")])
                                ]
                              )
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _vm.properties.status != "hot"
                            ? _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-danger btn-sm form-control",
                                  attrs: {
                                    type: "button",
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "follow property"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.PropertyHot(_vm.properties)
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fab fa-hotjar" }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("Hot")])
                                ]
                              )
                            : _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-warning btn-sm form-control",
                                  attrs: {
                                    type: "button",
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "follow property"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.PropertyOk(_vm.properties)
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fab fa-odnoklassniki-square"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("Occupied")])
                                ]
                              )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("strong", [_vm._v("Message:")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                        I would like to inquire about your property EKO - ID27395957.\n                        Please contact me at your earliest convenience.\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(3)
                  ])
                ])
              : _c("div", { staticClass: "col-lg-5  p-3" }, [
                  _c("div", { staticClass: "slider-text" }, [
                    _c("h3", { staticClass: "title text-success" }, [
                      _c("small", [_vm._v(_vm._s(_vm.properties.title))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row price" }, [
                      _c("h3", { staticClass: " text-dark" }, [
                        _vm._v("Property details")
                      ]),
                      _vm._v(" "),
                      _c(
                        "h3",
                        { staticClass: "priceposition px-5 text-success" },
                        [_vm._v(" Rs " + _vm._s(_vm.properties.rent_price))]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "short-info" }, [
                      _c("p", [
                        _vm._m(4),
                        _vm._v(" "),
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v(_vm._s(_vm.properties.city_name))
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "px-2" }, [
                          _c("strong", [_vm._v("Sector:")]),
                          _vm._v(" "),
                          _c("a", { attrs: { href: "#" } }, [
                            _vm._v(_vm._s(_vm.properties.sector))
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("strong", [_vm._v("Address: ")]),
                        _vm._v(_vm._s(_vm.properties.address) + " ")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("strong", [_vm._v("Property Size:")]),
                        _vm._v(" "),
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v(_vm._s(_vm.properties.size))
                        ]),
                        _vm._v(" "),
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v(_vm._s(_vm.properties.unit))
                        ]),
                        _vm._v(" "),
                        _c("strong", { staticClass: "px-3" }, [
                          _vm._v("Property:")
                        ]),
                        _vm._v(" "),
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v(_vm._s(_vm.properties.property_name))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("a", { staticClass: "pr-1" }, [
                          _c("strong", [_vm._v("Furnished:")]),
                          _vm._v(
                            _vm._s(_vm.properties.furnished) +
                              "\n                              "
                          )
                        ]),
                        _vm._v(" "),
                        _c("a", { staticClass: "pr-1" }, [
                          _c("strong", [_vm._v("Property Status:")]),
                          _vm._v(
                            _vm._s(_vm.properties.status) +
                              "\n                              "
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "authorization-btn" }, [
                      _c("div", { staticClass: "row mr-auto" }, [
                        _c("div", { staticClass: "col-md-2" }, [
                          _vm.properties.status === "approved"
                            ? _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-success btn-sm form-control",
                                  attrs: {
                                    type: "button",
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "Approve"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.approvedProperty(
                                        _vm.properties
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fas fa-check" }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("Approved")])
                                ]
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-dark btn-sm form-control",
                              attrs: {
                                type: "button",
                                "data-toggle": "tooltip",
                                "data-placement": "top",
                                title: "Assign"
                              },
                              on: {
                                click: [
                                  function($event) {
                                    return _vm.editProperty()
                                  },
                                  function($event) {
                                    return _vm.sendProp(_vm.properties)
                                  }
                                ]
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-share-square" }),
                              _vm._v(" "),
                              _c("p", [_vm._v("Assign")])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _vm.properties.status !== "occupied"
                            ? _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-warning btn-sm form-control",
                                  attrs: {
                                    type: "button",
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "follow property"
                                  },
                                  on: {
                                    click: [
                                      function($event) {
                                        return _vm.sendPropTenant(
                                          _vm.properties
                                        )
                                      },
                                      function($event) {
                                        return _vm.assignToTenant()
                                      }
                                    ]
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fab fa-odnoklassniki-square"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("Occupied")])
                                ]
                              )
                            : _vm.properties.rent === "unpaid" &&
                              _vm.properties.status === "occupied"
                            ? _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-warning btn-sm form-control",
                                  attrs: {
                                    type: "button",
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "follow property"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.paidPropertyRent(
                                        _vm.properties
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fab fa-odnoklassniki-square"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("Paid")])
                                ]
                              )
                            : _vm.properties.rent === "paid" &&
                              _vm.properties.status === "occupied"
                            ? _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-warning btn-sm form-control",
                                  attrs: {
                                    type: "button",
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "follow property"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.unPaidPropertyRent(
                                        _vm.properties
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fab fa-odnoklassniki-square"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("Un-Paid")])
                                ]
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-warning btn-sm form-control",
                              attrs: {
                                type: "button",
                                "data-toggle": "tooltip",
                                "data-placement": "top",
                                title: "Refresh Property"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.reloadProperty(_vm.properties)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-sync-alt" }),
                              _vm._v(" "),
                              _c("p", [_vm._v("Assign Employee")])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-info btn-sm form-control",
                              attrs: {
                                type: "button",
                                "data-toggle": "tooltip",
                                "data-placement": "top",
                                title: "paid rent"
                              },
                              on: {
                                click: [
                                  function($event) {
                                    return _vm.suspendedProperty()
                                  },
                                  function($event) {
                                    return _vm.suspendedProperty(_vm.properties)
                                  }
                                ]
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-thumbs-up" }),
                              _vm._v(" "),
                              _c("p", [_vm._v("Sespend")])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _vm.properties.status === "hot"
                          ? _c("div", { staticClass: "col-md-2" }, [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-danger btn-sm form-control",
                                  attrs: {
                                    type: "button",
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "follow property"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.PropertyHot(_vm.properties)
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fab fa-hotjar" }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("Hot")])
                                ]
                              )
                            ])
                          : _c("div", [
                              _vm._v(
                                "\n                                hhhgh\n                            "
                              )
                            ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("strong", [_vm._v("Message:")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                        I would like to inquire about your property EKO - ID27395957.\n                        Please contact me at your earliest convenience.\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(5)
                  ])
                ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "description-info" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "col-md-8",
                  staticStyle: { "margin-top": "-14px" }
                },
                [
                  _c("div", [
                    _c("h4", [_vm._v("Description")]),
                    _vm._v(" "),
                    _c("p", {
                      domProps: {
                        innerHTML: _vm._s(_vm.properties.description)
                      }
                    })
                  ])
                ]
              ),
              _vm._v(" "),
              _vm._m(6)
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "editProperty",
          attrs: {
            id: "modal-lg",
            "hide-footer": "",
            title: "Assign Property Manager"
          }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.assignPropertyData($event)
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
                            value: _vm.assignProperty.name,
                            expression: "assignProperty.name"
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
                              _vm.assignProperty,
                              "name",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select Manager")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.managers, function(user, index) {
                          return _c(
                            "option",
                            { key: index, domProps: { value: user.user_id } },
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
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.assignProperty.comment,
                          expression: "assignProperty.comment"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Enter your Comment"
                      },
                      domProps: { value: _vm.assignProperty.comment },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.assignProperty,
                            "comment",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-success btn-sm",
                  attrs: { type: "submit" }
                },
                [_vm._v("Submit")]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "editPropertyToEmployee",
          attrs: {
            id: "modal-lg",
            "hide-footer": "",
            title: "Assign Property Employee"
          }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.assignPropertyEmployee($event)
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
                            value: _vm.assignPropertyEmp.name,
                            expression: "assignPropertyEmp.name"
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
                              _vm.assignPropertyEmp,
                              "name",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select Manager")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.employees, function(user, index) {
                          return _c(
                            "option",
                            { key: index, domProps: { value: user.user_id } },
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
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.assignPropertyEmp.comment,
                          expression: "assignPropertyEmp.comment"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Enter your Comment"
                      },
                      domProps: { value: _vm.assignPropertyEmp.comment },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.assignPropertyEmp,
                            "comment",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-success btn-sm",
                  attrs: { type: "submit" }
                },
                [_vm._v("Submit")]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "assignToTenant",
          attrs: {
            id: "modal-lg",
            "hide-footer": "",
            title: "Assign Property To Tenant"
          }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.assignPropertyToTenant($event)
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
                            value: _vm.assignTenant.name,
                            expression: "assignTenant.name"
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
                              _vm.assignTenant,
                              "name",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select Tenant")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.tenants, function(user, index) {
                          return _c(
                            "option",
                            { key: index, domProps: { value: user.user_id } },
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
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.assignTenant.comment,
                          expression: "assignTenant.comment"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Enter your Comment"
                      },
                      domProps: { value: _vm.assignTenant.comment },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.assignTenant,
                            "comment",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-success btn-sm",
                  attrs: { type: "submit" }
                },
                [_vm._v("Submit")]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "suspendedReservation",
          attrs: {
            id: "modal-lg",
            "hide-footer": "",
            title: "Suspended Property To Tenant"
          }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.suspendProperty($event)
                }
              }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.suspension.comment,
                          expression: "suspension.comment"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Enter your Comment"
                      },
                      domProps: { value: _vm.suspension.comment },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.suspension,
                            "comment",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-success btn-sm",
                  attrs: { type: "submit" }
                },
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "carousel-control-prev",
        attrs: {
          href: "#carousel-thumbs2",
          role: "button",
          "data-slide": "prev"
        }
      },
      [
        _c("span", {
          staticClass: "carousel-control-prev-icon",
          staticStyle: { "margin-top": "40px" },
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "sr-only" }, [_vm._v("Previous")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "carousel-control-next",
        attrs: {
          href: "#carousel-thumbs2",
          role: "button",
          "data-slide": "next"
        }
      },
      [
        _c("span", {
          staticClass: "carousel-control-next-icon",
          staticStyle: { "margin-top": "40px" },
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "sr-only" }, [_vm._v("Next")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("strong", [_vm._v("City:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "social-links my-0" }, [
      _c("h4", [_vm._v("Share this ad")]),
      _vm._v(" "),
      _c("ul", { staticClass: "list-inline" }, [
        _c("li", [
          _c(
            "a",
            { attrs: { href: "https://www.facebook.com/rentpropertyatEKO" } },
            [
              _c("i", {
                staticClass: "fa fa-facebook-square fa-2x",
                staticStyle: {}
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "https://twitter.com/ekirayaonline" } }, [
            _c("i", { staticClass: "fa fa-twitter-square fa-2x" })
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "https://ekirayaonline.business.site" } }, [
            _c("i", { staticClass: "fa fa-google-plus-square fa-2x" })
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            {
              attrs: { href: "https://www.linkedin.com/company/ekirayaonline" }
            },
            [_c("i", { staticClass: "fa fa-linkedin-square fa-2x" })]
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            { attrs: { href: "https://www.pinterest.com/ekirayaonline/" } },
            [_c("i", { staticClass: "fa fa-pinterest-square fa-2x" })]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("strong", [_vm._v("City:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "social-links my-0" }, [
      _c("h4", [_vm._v("Share this ad")]),
      _vm._v(" "),
      _c("ul", { staticClass: "list-inline" }, [
        _c("li", [
          _c(
            "a",
            { attrs: { href: "https://www.facebook.com/rentpropertyatEKO" } },
            [
              _c("i", {
                staticClass: "fa fa-facebook-square fa-2x",
                staticStyle: {}
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "https://twitter.com/ekirayaonline" } }, [
            _c("i", { staticClass: "fa fa-twitter-square fa-2x" })
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "https://ekirayaonline.business.site" } }, [
            _c("i", { staticClass: "fa fa-google-plus-square fa-2x" })
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            {
              attrs: { href: "https://www.linkedin.com/company/ekirayaonline" }
            },
            [_c("i", { staticClass: "fa fa-linkedin-square fa-2x" })]
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            { attrs: { href: "https://www.pinterest.com/ekirayaonline/" } },
            [_c("i", { staticClass: "fa fa-pinterest-square fa-2x" })]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("div", { staticClass: "short" }, [
        _c("h4", [_vm._v("Short Info")]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _c("i", { staticClass: "fa fa-shopping-cart" }),
            _c("a", { attrs: { href: "#" } }, [
              _vm._v("Office: Meet in person")
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("i", { staticClass: "fa fa-user-plus" }),
            _c("a", { attrs: { href: "#" } }, [
              _vm._v("More Property by "),
              _c("span", [_vm._v("E-Kiraya Online")])
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("i", { staticClass: "fa fa-reply" }),
            _c("a", { attrs: { href: "#" } }, [_vm._v("Send to a friend")])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("i", { staticClass: "fa fa-heart-o" }),
            _c("a", { attrs: { href: "#" } }, [_vm._v("Save ad as Favorite")])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/admin_service.js":
/*!************************************************!*\
  !*** ./resources/js/services/admin_service.js ***!
  \************************************************/
/*! exports provided: getProperty, getProperties, loadProperties, searchProperty, getCity, searchInvoiceQuery, getFavourit, getNotification, getApprovedPropertyNotification, getPendingPropertyCount, getApprovedPropertyCount, getTotalPropertyCount, propertyCount, getTotalRenterCount, getTotalLandloardCount, getTotalReservedCount, getTotalFavouritedCount, getTotalEmployeeCount, getTotalManagerCount, getTotalCSRCount, getPendingProperty, getApprovedProperty, getPaidRent, getPendingRent, loadProperty, loadPendingProperty, loadApprovedProperty, getPropertyNotify, getAllRenter, getAllLandloard, loadLandlords, getAllRerservedProperty, getAllFavouritedProperty, getTotalRentCount, getTotalPaidRentCount, getTotalPenddingRentCount, updateAssignProperty, getLatestPropertyCount, loadLatestProperty, getLatestProperty, getOldProperty, getReservedProperty, loadReservedProperty, getTotalRentProperty, getPendingRentList, getListTotalPorperty, engagedProperty, getPenddingProperty, getTotalPorperty, searchReservedProperty, loadReserved, loadFavouritedProperty, getReservedPropertyadmin, getEngagedCount, getEngagedProperty, getManagerData, getEmployeeData, getTenantData, searchReact, PropertyHot, getAreaManager, getTenant, unPaidPropertyRent, suspendProperty, getSuspendedProperty */
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

/***/ }),

/***/ "./resources/js/services/properties_service.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/properties_service.js ***!
  \*****************************************************/
/*! exports provided: getProTypeData, getCity, getSectors, getSector, getSectorEmployee, getSectorUpdate, createProperty, getProperty, allPropertyRent, getAllProperties, getInvoiceData, getProperties, getUser, deleteProperty, updateProperty, assignProperty, getRules, loadProperty, loadReservedProperty, loadRule, approvedProperty, paidPropertyRent, PropertyOk, PropertyHot, reloadProperty, seenProperty, searchSector, searchProperty, ReservedProperty, suspendedProperty, getEngagedProperty, loadEngagedProperty, getpaidPropteryRent, loadPaidProperty, getUnpaidPropteryRent, loadUnPaidProperty, getManager, createAreaManager, getAreaManaer, getAreaManager, assignPropertyData, assignPropertyToTenant, getEmployee, ReservationCancell, getManagerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProTypeData", function() { return getProTypeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCity", function() { return getCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSectors", function() { return getSectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSector", function() { return getSector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSectorEmployee", function() { return getSectorEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSectorUpdate", function() { return getSectorUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProperty", function() { return createProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return getProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allPropertyRent", function() { return allPropertyRent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProperties", function() { return getAllProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInvoiceData", function() { return getInvoiceData; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignPropertyToTenant", function() { return assignPropertyToTenant; });
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
function getSectorEmployee(request) {
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
function getInvoiceData(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/get-invoice-data/".concat(id));
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
function assignPropertyToTenant(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/tenants', data);
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

/***/ "./resources/js/views/admin/ShowReserved.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/admin/ShowReserved.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowReserved_vue_vue_type_template_id_3bd4d8e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowReserved.vue?vue&type=template&id=3bd4d8e4&scoped=true& */ "./resources/js/views/admin/ShowReserved.vue?vue&type=template&id=3bd4d8e4&scoped=true&");
/* harmony import */ var _ShowReserved_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowReserved.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/ShowReserved.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ShowReserved_vue_vue_type_style_index_0_id_3bd4d8e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShowReserved.vue?vue&type=style&index=0&id=3bd4d8e4&scoped=true&lang=css& */ "./resources/js/views/admin/ShowReserved.vue?vue&type=style&index=0&id=3bd4d8e4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ShowReserved_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowReserved_vue_vue_type_template_id_3bd4d8e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowReserved_vue_vue_type_template_id_3bd4d8e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3bd4d8e4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/ShowReserved.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/ShowReserved.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/admin/ShowReserved.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowReserved_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowReserved.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/ShowReserved.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowReserved_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/ShowReserved.vue?vue&type=style&index=0&id=3bd4d8e4&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/views/admin/ShowReserved.vue?vue&type=style&index=0&id=3bd4d8e4&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowReserved_vue_vue_type_style_index_0_id_3bd4d8e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowReserved.vue?vue&type=style&index=0&id=3bd4d8e4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/ShowReserved.vue?vue&type=style&index=0&id=3bd4d8e4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowReserved_vue_vue_type_style_index_0_id_3bd4d8e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowReserved_vue_vue_type_style_index_0_id_3bd4d8e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowReserved_vue_vue_type_style_index_0_id_3bd4d8e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowReserved_vue_vue_type_style_index_0_id_3bd4d8e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/admin/ShowReserved.vue?vue&type=template&id=3bd4d8e4&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/admin/ShowReserved.vue?vue&type=template&id=3bd4d8e4&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowReserved_vue_vue_type_template_id_3bd4d8e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowReserved.vue?vue&type=template&id=3bd4d8e4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/ShowReserved.vue?vue&type=template&id=3bd4d8e4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowReserved_vue_vue_type_template_id_3bd4d8e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowReserved_vue_vue_type_template_id_3bd4d8e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);