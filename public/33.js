(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/csr/Show.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/csr/Show.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/properties_service */ "./resources/js/services/properties_service.js");
/* harmony import */ var _services_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/manager_service */ "./resources/js/services/manager_service.js");
/* harmony import */ var _services_csr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/csr_service */ "./resources/js/services/csr_service.js");
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_5__);


var _methods;

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_4__["VueEditor"]
  },
  data: function data() {
    return {
      query: "",
      cities: [],
      sectors: [],
      areaManagers: [],
      rules: [],
      managers: [],
      city: 0,
      properties: [],
      protypes: [],
      editPropertyData: {},
      showName: false,
      showImage: true,
      moreExists: false,
      readMore: false,
      nextPage: 0,
      errors: {},
      sector_id: '',
      assignProperty: {
        name: '',
        sector: '',
        city: '',
        comment: '',
        property_id: ''
      }
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
  },
  methods: (_methods = {
    PropertyHot: function () {
      var _PropertyHot = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(properties) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (window.confirm("Are you sure you want to Hot this Property")) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.prev = 2;
                _context2.next = 5;
                return _services_csr_service__WEBPACK_IMPORTED_MODULE_3__["PropertyHot"](properties.id);

              case 5:
                response = _context2.sent;
                this.flashMessage.success({
                  message: "Property Hoted Successfuly!",
                  time: 5000
                });
                _context2.next = 22;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](2);
                _context2.t1 = _context2.t0.response.status;
                _context2.next = _context2.t1 === 422 ? 14 : _context2.t1 === 401 ? 16 : 19;
                break;

              case 14:
                this.errors = _context2.t0.response.data.errors;
                return _context2.abrupt("break", 22);

              case 16:
                this.errors = {};
                this.flashMessage.info({
                  message: _context2.t0.response.data.message,
                  time: 5000
                });
                return _context2.abrupt("break", 22);

              case 19:
                this.errors = {};
                this.flashMessage.error({
                  message: "Some error occurred please try again",
                  time: 5000
                });
                return _context2.abrupt("break", 22);

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 9]]);
      }));

      function PropertyHot(_x4) {
        return _PropertyHot.apply(this, arguments);
      }

      return PropertyHot;
    }(),
    getManagerData: function () {
      var _getManagerData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(properties) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["getManagerData"](this.sector_id);

              case 3:
                response = _context3.sent;
                this.managers = response.data;
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                this.flashMessage.error({
                  message: 'some error occurred Please try again',
                  time: 2000
                });

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function getManagerData(_x5) {
        return _getManagerData.apply(this, arguments);
      }

      return getManagerData;
    }(),
    sendProp: function () {
      var _sendProp = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(properties) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.assignProperty.property_id = properties.id;
                this.assignProperty.city_id = properties.city_id;
                this.assignProperty.sector_id = properties.sector_id;
                this.assignProperty.user_id = properties.user_id;

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function sendProp(_x6) {
        return _sendProp.apply(this, arguments);
      }

      return sendProp;
    }(),
    getAreaManager: function () {
      var _getAreaManager = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["getAreaManager"]({
                  params: {
                    user_id: this.assignProperty.name
                  }
                }).then(function (response) {
                  this.areaManagers = response.data;
                }.bind(this));

              case 3:
                response = _context5.sent;
                _context5.next = 9;
                break;

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 6]]);
      }));

      function getAreaManager() {
        return _getAreaManager.apply(this, arguments);
      }

      return getAreaManager;
    }(),
    assignPropertyData: function () {
      var _assignPropertyData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(properties) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["assignPropertyData"](this.assignProperty);

              case 3:
                response = _context6.sent;
                this.flashMessage.success({
                  message: 'Property Assign to Manager Successfully !',
                  time: 5000
                });
                _context6.next = 17;
                break;

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);
                _context6.t1 = _context6.t0.response.status;
                _context6.next = _context6.t1 === 500 ? 12 : _context6.t1 === 403 ? 14 : 16;
                break;

              case 12:
                this.flashMessage.error({
                  message: _context6.t0.response.data.errors,
                  time: 5000
                });
                return _context6.abrupt("break", 17);

              case 14:
                this.flashMessage.info({
                  message: _context6.t0.response.data.errors,
                  time: 5000
                });
                return _context6.abrupt("break", 17);

              case 16:
                this.flashMessage.error({
                  message: 'Some Error Occured!',
                  time: 5000
                });

              case 17:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 7]]);
      }));

      function assignPropertyData(_x7) {
        return _assignPropertyData.apply(this, arguments);
      }

      return assignPropertyData;
    }(),
    paidPropertyRent: function () {
      var _paidPropertyRent = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(properties) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (window.confirm("Are you sure you want to paid rent of this Property")) {
                  _context7.next = 2;
                  break;
                }

                return _context7.abrupt("return");

              case 2:
                _context7.prev = 2;
                _context7.next = 5;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["paidPropertyRent"](properties.id);

              case 5:
                response = _context7.sent;
                // this.properties = this.properties.filter((obj) => {
                // return obj.id != property.id;
                // });
                this.flashMessage.success({
                  message: "Rent Paid Successfuly!",
                  time: 5000
                });
                this.getProperty();
                _context7.next = 13;
                break;

              case 10:
                _context7.prev = 10;
                _context7.t0 = _context7["catch"](2);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[2, 10]]);
      }));

      function paidPropertyRent(_x8) {
        return _paidPropertyRent.apply(this, arguments);
      }

      return paidPropertyRent;
    }(),
    unPaidPropertyRent: function () {
      var _unPaidPropertyRent = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(properties) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (window.confirm("Are you sure you know that this Property Rent is not Paid yet")) {
                  _context8.next = 2;
                  break;
                }

                return _context8.abrupt("return");

              case 2:
                _context8.prev = 2;
                _context8.next = 5;
                return _services_csr_service__WEBPACK_IMPORTED_MODULE_3__["unPaidPropertyRent"](properties.id);

              case 5:
                response = _context8.sent;
                this.flashMessage.success({
                  message: 'Your Successfully Change this property Rent type',
                  time: 5000
                });
                this.getEngagedProperty();
                _context8.next = 13;
                break;

              case 10:
                _context8.prev = 10;
                _context8.t0 = _context8["catch"](2);
                this.flashMessage.errors({
                  message: 'Some error occured!',
                  time: 5000
                });

              case 13:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[2, 10]]);
      }));

      function unPaidPropertyRent(_x9) {
        return _unPaidPropertyRent.apply(this, arguments);
      }

      return unPaidPropertyRent;
    }(),
    getProTypeData: function () {
      var _getProTypeData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["getProTypeData"]();

              case 3:
                response = _context9.sent;
                this.protypes = response.data;
                _context9.next = 10;
                break;

              case 7:
                _context9.prev = 7;
                _context9.t0 = _context9["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred!",
                  time: 5000
                });

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 7]]);
      }));

      function getProTypeData() {
        return _getProTypeData.apply(this, arguments);
      }

      return getProTypeData;
    }(),
    editProperty: function () {
      var _editProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(properties) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.editPropertyData = _objectSpread({}, properties);
                this.$refs.editProperty.show();

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function editProperty(_x10) {
        return _editProperty.apply(this, arguments);
      }

      return editProperty;
    }(),
    showProperty: function () {
      var _showProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(property) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this.editPropertyData = _objectSpread({}, property);
                this.$refs.showProperty.show();

              case 2:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function showProperty(_x11) {
        return _showProperty.apply(this, arguments);
      }

      return showProperty;
    }()
  }, _defineProperty(_methods, "editProperty", function () {
    var _editProperty2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(property) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              this.editPropertyData = _objectSpread({}, property);
              this.$refs.editProperty.show();

            case 2:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    function editProperty(_x12) {
      return _editProperty2.apply(this, arguments);
    }

    return editProperty;
  }()), _defineProperty(_methods, "deleteProperty", function () {
    var _deleteProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13(property) {
      var responce;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              if (window.confirm("Are you sure you want to delete this Property")) {
                _context13.next = 2;
                break;
              }

              return _context13.abrupt("return");

            case 2:
              _context13.prev = 2;
              _context13.next = 5;
              return _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["deleteProperty"](property.id);

            case 5:
              responce = _context13.sent;
              this.properties = this.properties.filter(function (obj) {
                return obj.id != property.id;
              });
              this.flashMessage.success({
                message: "Property deleted successfuly!",
                time: 5000
              });
              _context13.next = 13;
              break;

            case 10:
              _context13.prev = 10;
              _context13.t0 = _context13["catch"](2);
              this.flashMessage.error({
                message: "Some thing going wrong!",
                time: 5000
              });

            case 13:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this, [[2, 10]]);
    }));

    function deleteProperty(_x13) {
      return _deleteProperty.apply(this, arguments);
    }

    return deleteProperty;
  }()), _defineProperty(_methods, "approvedProperty", function () {
    var _approvedProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14(properties) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              if (window.confirm("Are you sure you want to Approve this Property")) {
                _context14.next = 2;
                break;
              }

              return _context14.abrupt("return");

            case 2:
              _context14.prev = 2;
              _context14.next = 5;
              return _services_csr_service__WEBPACK_IMPORTED_MODULE_3__["approvedProperty"](properties.id);

            case 5:
              response = _context14.sent;
              // this.properties = this.properties.filter(obj => {
              //             return obj.id !=property.id;
              //     });
              this.flashMessage.success({
                message: "Property Approved Successfuly!",
                time: 5000
              });
              _context14.next = 12;
              break;

            case 9:
              _context14.prev = 9;
              _context14.t0 = _context14["catch"](2);
              this.flashMessage.error({
                message: "Some error occurred!",
                time: 5000
              });

            case 12:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this, [[2, 9]]);
    }));

    function approvedProperty(_x14) {
      return _approvedProperty.apply(this, arguments);
    }

    return approvedProperty;
  }()), _defineProperty(_methods, "PropertyOk", function () {
    var _PropertyOk = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15(properties) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              if (window.confirm("Are you sure you want to Occupied this Property")) {
                _context15.next = 2;
                break;
              }

              return _context15.abrupt("return");

            case 2:
              _context15.prev = 2;
              _context15.next = 5;
              return _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["PropertyOk"](properties.id);

            case 5:
              response = _context15.sent;
              // this.properties = this.properties.filter(obj => {
              //             return obj.id !=property.id;
              //     });
              this.flashMessage.success({
                message: "Property Occupied Successfuly!",
                time: 5000
              });
              _context15.next = 12;
              break;

            case 9:
              _context15.prev = 9;
              _context15.t0 = _context15["catch"](2);
              this.flashMessage.error({
                message: "Some error occurred!",
                time: 5000
              });

            case 12:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, this, [[2, 9]]);
    }));

    function PropertyOk(_x15) {
      return _PropertyOk.apply(this, arguments);
    }

    return PropertyOk;
  }()), _defineProperty(_methods, "reloadProperty", function () {
    var _reloadProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16(properties) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              if (window.confirm("Are you sure you want to Reload this Property")) {
                _context16.next = 2;
                break;
              }

              return _context16.abrupt("return");

            case 2:
              _context16.prev = 2;
              _context16.next = 5;
              return _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["reloadProperty"](properties.id);

            case 5:
              response = _context16.sent;
              // this.properties = this.properties.filter((obj) => {
              //   return obj.id != property.id;
              // });
              this.flashMessage.success({
                message: "Property Reloaded Successfuly!",
                time: 5000
              });
              _context16.next = 13;
              break;

            case 9:
              _context16.prev = 9;
              _context16.t0 = _context16["catch"](2);
              console.log(_context16.t0 + '');
              this.flashMessage.error({
                message: "Some error occurred!",
                time: 5000
              });

            case 13:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, this, [[2, 9]]);
    }));

    function reloadProperty(_x16) {
      return _reloadProperty.apply(this, arguments);
    }

    return reloadProperty;
  }()), _defineProperty(_methods, "paidPropertyRent", function () {
    var _paidPropertyRent2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17(properties) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              if (window.confirm("Are you sure you want to paid rent of this Property")) {
                _context17.next = 2;
                break;
              }

              return _context17.abrupt("return");

            case 2:
              _context17.prev = 2;
              _context17.next = 5;
              return _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["paidPropertyRent"](properties.id);

            case 5:
              response = _context17.sent;
              // this.properties = this.properties.filter((obj) => {
              //   return obj.id != property.id;
              // });
              this.flashMessage.success({
                message: "Rent Paid Successfuly!",
                time: 5000
              });
              _context17.next = 12;
              break;

            case 9:
              _context17.prev = 9;
              _context17.t0 = _context17["catch"](2);
              this.flashMessage.error({
                message: "Some error occurred!",
                time: 5000
              });

            case 12:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, this, [[2, 9]]);
    }));

    function paidPropertyRent(_x17) {
      return _paidPropertyRent2.apply(this, arguments);
    }

    return paidPropertyRent;
  }()), _defineProperty(_methods, "suspendedProperty", function () {
    var _suspendedProperty = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18(properties) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              if (window.confirm('Are you sure you want to reject this Property for some issues')) {
                _context18.next = 2;
                break;
              }

              return _context18.abrupt("return");

            case 2:
              _context18.prev = 2;
              _context18.next = 5;
              return _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["suspendedProperty"](properties.id);

            case 5:
              response = _context18.sent;
              this.flashMessage.success({
                message: 'You are successfully Rejected This for some issues',
                time: 5000
              });
              _context18.next = 12;
              break;

            case 9:
              _context18.prev = 9;
              _context18.t0 = _context18["catch"](2);
              this.flashMessage.error({
                message: 'some error occured! try again please'
              });

            case 12:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18, this, [[2, 9]]);
    }));

    function suspendedProperty(_x18) {
      return _suspendedProperty.apply(this, arguments);
    }

    return suspendedProperty;
  }()), _defineProperty(_methods, "loadRule", function () {
    var _loadRule = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19() {
      var _this = this;

      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              _context19.prev = 0;
              _context19.next = 3;
              return _services_properties_service__WEBPACK_IMPORTED_MODULE_1__["loadRule"](this.nextPage);

            case 3:
              response = _context19.sent;

              if (response.data.current_page < response.data.last_page) {
                this.readMore = true;
                this.nextPage = response.data.current_page + 1;
              } else {
                this.readMore = false;
              }

              response.data.data.forEach(function (data) {
                _this.rules.push(data);
              });
              _context19.next = 11;
              break;

            case 8:
              _context19.prev = 8;
              _context19.t0 = _context19["catch"](0);
              this.flashMessage.error({
                message: "Some error occurred during load more Cities",
                time: 5000
              });

            case 11:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19, this, [[0, 8]]);
    }));

    function loadRule() {
      return _loadRule.apply(this, arguments);
    }

    return loadRule;
  }()), _methods)
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/csr/Show.vue?vue&type=style&index=0&id=0ea92a09&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/csr/Show.vue?vue&type=style&index=0&id=0ea92a09&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.authorization-btn button[data-v-0ea92a09] {\n  border-radius: 50%;\n    height: 60px;\n    width: 60px;\n    font-size: 12px;\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/csr/Show.vue?vue&type=style&index=0&id=0ea92a09&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/csr/Show.vue?vue&type=style&index=0&id=0ea92a09&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=style&index=0&id=0ea92a09&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/csr/Show.vue?vue&type=style&index=0&id=0ea92a09&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/csr/Show.vue?vue&type=template&id=0ea92a09&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/csr/Show.vue?vue&type=template&id=0ea92a09&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
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
                              "\n                               "
                          )
                        ]),
                        _vm._v(" "),
                        _c("a", [
                          _c("i", { staticClass: "fa fa-shower px-2" }),
                          _vm._v(
                            _vm._s(_vm.properties.bathrooms) +
                              "\n                               "
                          )
                        ]),
                        _vm._v(" "),
                        _c("a", { staticClass: "pr-1" }, [
                          _c("strong", [_vm._v("Property Status:")]),
                          _vm._v(
                            _vm._s(_vm.properties.status) +
                              "\n                               "
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
                          _vm.properties.status !== "approved || occupied"
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
                              _c("p", [_vm._v("Refresh")])
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
                                click: function($event) {
                                  return _vm.suspendedProperty(_vm.properties)
                                }
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
                        _vm.properties.status !== "approved || occupied || hot"
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
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("strong", [_vm._v("Message:")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                         I would like to inquire about your property EKO - ID27395957.\n                         Please contact me at your earliest convenience.\n                     "
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
                              "\n                               "
                          )
                        ]),
                        _vm._v(" "),
                        _c("a", { staticClass: "pr-1" }, [
                          _c("strong", [_vm._v("Property Status:")]),
                          _vm._v(
                            _vm._s(_vm.properties.status) +
                              "\n                               "
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "authorization-btn" }, [
                      _c("div", { staticClass: "row mr-auto" }, [
                        _c("div", { staticClass: "col-md-2" }, [
                          _vm.properties.status !== "approved || occupied"
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
                              _c("p", [_vm._v("Refresh")])
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
                                click: function($event) {
                                  return _vm.suspendedProperty(_vm.properties)
                                }
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
                        _vm.properties.status !== "approved || occupied || hot"
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
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("strong", [_vm._v("Message:")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                         I would like to inquire about your property EKO - ID27395957.\n                         Please contact me at your earliest convenience.\n                     "
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

/***/ "./resources/js/views/csr/Show.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/csr/Show.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_0ea92a09_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=0ea92a09&scoped=true& */ "./resources/js/views/csr/Show.vue?vue&type=template&id=0ea92a09&scoped=true&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/csr/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Show_vue_vue_type_style_index_0_id_0ea92a09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Show.vue?vue&type=style&index=0&id=0ea92a09&scoped=true&lang=css& */ "./resources/js/views/csr/Show.vue?vue&type=style&index=0&id=0ea92a09&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_0ea92a09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_0ea92a09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0ea92a09",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/csr/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/csr/Show.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/csr/Show.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/csr/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/csr/Show.vue?vue&type=style&index=0&id=0ea92a09&scoped=true&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/csr/Show.vue?vue&type=style&index=0&id=0ea92a09&scoped=true&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_0ea92a09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=style&index=0&id=0ea92a09&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/csr/Show.vue?vue&type=style&index=0&id=0ea92a09&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_0ea92a09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_0ea92a09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_0ea92a09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_0ea92a09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/csr/Show.vue?vue&type=template&id=0ea92a09&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/csr/Show.vue?vue&type=template&id=0ea92a09&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_0ea92a09_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=0ea92a09&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/csr/Show.vue?vue&type=template&id=0ea92a09&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_0ea92a09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_0ea92a09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);